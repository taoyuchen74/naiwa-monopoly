import {DatabaseSync} from 'node:sqlite';
import {mkdirSync,chmodSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {randomBytes,randomUUID,scrypt,timingSafeEqual,createHash} from 'node:crypto';
import {promisify} from 'node:util';
import {migrateSave,SCHEMA_VERSION} from '../dist/save-schema.js';
import {mapInfo} from '../dist/maps.js';

const derive=promisify(scrypt),SESSION_MS=7*86400000;
const uuid=v=>typeof v==='string'&&/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(v);
const digest=s=>createHash('sha256').update(s).digest('hex');
export class CloudError extends Error{constructor(status,code,details={}){super(code);Object.assign(this,{status,code,details});}}
const fail=(status,code,details)=>{throw new CloudError(status,code,details);};
function stable(value,depth=0){if(depth>64)fail(422,'INVALID_SAVE');if(Array.isArray(value))return value.map(v=>stable(v,depth+1));if(value&&typeof value==='object')return Object.fromEntries(Object.keys(value).sort().map(k=>[k,stable(value[k],depth+1)]));return value;}
function normalize(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))fail(422,'INVALID_SAVE');
 stable(raw);
 if(raw.schemaVersion!==undefined&&raw.schemaVersion!==SCHEMA_VERSION||raw.rules!==undefined&&(!Number.isInteger(raw.rules)||raw.rules>11))fail(422,'FUTURE_SAVE');
 const {savedAt,schemaVersion,...body}=raw,save=migrateSave(body);
 if(!save)fail(422,'INVALID_SAVE');
 return save;
}
function summary(save){return {map:mapInfo(save).name,round:save.round,players:save.players.length,maxRounds:save.maxRounds};}
function inspect(row){
 try{
  const save=normalize(JSON.parse(row.payload)),snapshotHash=digest(JSON.stringify(stable(save)));
  if(snapshotHash!==row.snapshot_hash)return {status:'corrupt',save:null};
  return {status:'valid',save};
 }catch(e){return {status:e.code==='FUTURE_SAVE'?'future':'corrupt',save:null};}
}
function meta(row){
 const check=inspect(row);let description=check.save?summary(check.save):null;try{const x=JSON.parse(row.summary);if(!description&&typeof x.map==='string'&&Number.isInteger(x.round)&&Number.isInteger(x.players))description=x;}catch{}
 return {id:row.id,version:row.version,serverSavedAt:row.saved_at,label:row.label,snapshotHash:row.snapshot_hash,summary:description,status:check.status};
}
export class CloudStore{
 constructor({path,now=Date.now,maxSaves=50,maxRequests=10000}={}){
  if(!path)throw Error('Cloud storage needs an explicit private database path');
  this.path=path===':memory:'?path:resolve(path);this.now=now;this.maxSaves=maxSaves;this.maxRequests=maxRequests;this.activeAuth=0;this.dummySalt=randomBytes(16).toString('hex');
  if(this.path!==':memory:')mkdirSync(dirname(this.path),{recursive:true,mode:0o700});
  this.db=new DatabaseSync(this.path);if(this.path!==':memory:')chmodSync(this.path,0o600);
  this.db.exec('PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000; PRAGMA journal_mode=WAL; PRAGMA synchronous=FULL;');
  const version=this.db.prepare('PRAGMA user_version').get().user_version;
  if(version!==0&&version!==1){this.db.close();throw Error('Unsupported cloud database version');}
  this.db.exec(`
   CREATE TABLE IF NOT EXISTS users(id TEXT PRIMARY KEY,username TEXT NOT NULL UNIQUE,salt TEXT NOT NULL,password_hash TEXT NOT NULL,created_at INTEGER NOT NULL);
   CREATE TABLE IF NOT EXISTS sessions(token_hash TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES users(id),expires_at INTEGER NOT NULL);
   CREATE INDEX IF NOT EXISTS session_users ON sessions(user_id);
   CREATE TABLE IF NOT EXISTS saves(id TEXT PRIMARY KEY,owner_id TEXT NOT NULL REFERENCES users(id),version INTEGER NOT NULL CHECK(version>0),saved_at INTEGER NOT NULL,label TEXT NOT NULL,payload TEXT NOT NULL,snapshot_hash TEXT NOT NULL,summary TEXT NOT NULL);
   CREATE INDEX IF NOT EXISTS save_owners ON saves(owner_id);
   CREATE TABLE IF NOT EXISTS requests(owner_id TEXT NOT NULL REFERENCES users(id),request_id TEXT NOT NULL,digest TEXT NOT NULL,response TEXT NOT NULL,PRIMARY KEY(owner_id,request_id));
   PRAGMA user_version=1;`);
 }
 transaction(fn){this.db.exec('BEGIN IMMEDIATE');try{const result=fn();this.db.exec('COMMIT');return result;}catch(e){this.db.exec('ROLLBACK');throw e;}}
 close(){this.db.close();}
 user(token){
  if(typeof token!=='string'||!/^[a-f0-9]{64}$/.test(token))return null;
  const row=this.db.prepare('SELECT u.id,u.username FROM sessions s JOIN users u ON s.user_id=u.id WHERE s.token_hash=? AND s.expires_at>?').get(digest(token),this.now());
  return row?{id:row.id,username:row.username}:null;
 }
 session(user,previous){
  const token=randomBytes(32).toString('hex');
  this.db.prepare('DELETE FROM sessions WHERE expires_at<=?').run(this.now());
  if(previous)this.db.prepare('DELETE FROM sessions WHERE token_hash=?').run(digest(previous));
  if(this.db.prepare('SELECT COUNT(*) AS n FROM sessions WHERE user_id=?').get(user.id).n>=20)fail(429,'SESSION_LIMIT');
  this.db.prepare('INSERT INTO sessions VALUES(?,?,?)').run(digest(token),user.id,this.now()+SESSION_MS);
  return {user:{id:user.id,username:user.username},token};
 }
 async authenticate(kind,username,password,previous){
  if(typeof username!=='string'||!/^\w{3,32}$/.test(username.trim())||typeof password!=='string'||password.length<12||password.length>128)fail(422,'INVALID_CREDENTIALS');
  username=username.trim().toLowerCase();
  if(this.activeAuth>=4)fail(429,'AUTH_BUSY');
  const row=this.db.prepare('SELECT * FROM users WHERE username=?').get(username),salt=kind==='register'?randomBytes(16).toString('hex'):row?.salt||this.dummySalt;
  this.activeAuth++;let hash;try{hash=await derive(password,salt,64,{N:16384,r:8,p:1,maxmem:64*1024*1024});}finally{this.activeAuth--;}
  if(kind==='register'){
   return this.transaction(()=>{
    if(this.db.prepare('SELECT id FROM users WHERE username=?').get(username))fail(409,'USERNAME_TAKEN');
    if(this.db.prepare('SELECT COUNT(*) AS n FROM users').get().n>=10000)fail(507,'USER_LIMIT');
    const user={id:randomUUID(),username};
    this.db.prepare('INSERT INTO users VALUES(?,?,?,?,?)').run(user.id,username,salt,hash.toString('hex'),this.now());
    return this.session(user,previous);
   });
  }
  const expected=Buffer.from(row?.password_hash||'','hex');
  if(!row||expected.length!==hash.length||!timingSafeEqual(expected,hash))fail(401,'BAD_CREDENTIALS');
  return this.transaction(()=>this.session(row,previous));
 }
 logout(token,actorUserId){const user=this.user(token);if(user&&user.id!==actorUserId)fail(409,'ACCOUNT_CHANGED');if(token)this.db.prepare('DELETE FROM sessions WHERE token_hash=?').run(digest(token));}
 list(user){return this.db.prepare('SELECT * FROM saves WHERE owner_id=? ORDER BY saved_at DESC,id').all(user.id).map(meta);}
 own(user,id){if(!uuid(id))fail(404,'NOT_FOUND');const row=this.db.prepare('SELECT * FROM saves WHERE id=? AND owner_id=?').get(id,user.id);if(!row)fail(404,'NOT_FOUND');return row;}
 read(user,id){const row=this.own(user,id),check=inspect(row);if(check.status!=='valid')fail(422,'CLOUD_CORRUPT',{cloud:meta(row)});return {...meta(row),save:{...check.save,savedAt:row.saved_at,schemaVersion:SCHEMA_VERSION}};}
 raw(user,id){return this.own(user,id).payload;}
 put(user,id,body){
  if(body?.actorUserId!==user.id)fail(409,'ACCOUNT_CHANGED');
  if(!body||Object.keys(body).sort().join(',')!=='actorUserId,expectedVersion,label,requestId,save'||!uuid(id)||!uuid(body.requestId)||!Number.isSafeInteger(body.expectedVersion)||body.expectedVersion<0||typeof body.label!=='string'||!body.label.trim()||body.label.length>60)fail(422,'INVALID_UPLOAD');
  const save=normalize(body.save),snapshotHash=digest(JSON.stringify(stable(save))),label=body.label.trim(),requestDigest=digest(JSON.stringify(stable({id,expectedVersion:body.expectedVersion,label,save})));
  return this.transaction(()=>{
   const request=this.db.prepare('SELECT * FROM requests WHERE owner_id=? AND request_id=?').get(user.id,body.requestId);
   if(request){if(request.digest!==requestDigest)fail(409,'REQUEST_ID_REUSED');return JSON.parse(request.response);}
   const row=this.db.prepare('SELECT * FROM saves WHERE id=?').get(id);
   if(row&&row.owner_id!==user.id)fail(404,'NOT_FOUND');
   if((row?.version||0)!==body.expectedVersion)fail(409,'VERSION_CONFLICT',{cloud:row?meta(row):null});
   if(row&&inspect(row).status!=='valid')fail(422,'CLOUD_CORRUPT',{cloud:meta(row)});
   if(!row&&this.db.prepare('SELECT COUNT(*) AS n FROM saves WHERE owner_id=?').get(user.id).n>=this.maxSaves)fail(507,'SAVE_LIMIT');
   if(this.db.prepare('SELECT COUNT(*) AS n FROM requests WHERE owner_id=?').get(user.id).n>=this.maxRequests)fail(507,'REQUEST_LIMIT');
   if(row?.version===Number.MAX_SAFE_INTEGER)fail(409,'VERSION_EXHAUSTED');
   const version=(row?.version||0)+1,savedAt=Math.max(this.now(),(row?.saved_at||0)+1),payload=JSON.stringify({...save,savedAt,schemaVersion:SCHEMA_VERSION}),description=summary(save);
   if(row)this.db.prepare('UPDATE saves SET version=?,saved_at=?,label=?,payload=?,snapshot_hash=?,summary=? WHERE id=? AND owner_id=? AND version=?').run(version,savedAt,label,payload,snapshotHash,JSON.stringify(description),id,user.id,body.expectedVersion);
   else this.db.prepare('INSERT INTO saves VALUES(?,?,?,?,?,?,?,?)').run(id,user.id,version,savedAt,label,payload,snapshotHash,JSON.stringify(description));
   const result={accountId:user.id,id,version,serverSavedAt:savedAt,label,snapshotHash,summary:description,status:'valid'};
   this.db.prepare('INSERT INTO requests VALUES(?,?,?,?)').run(user.id,body.requestId,requestDigest,JSON.stringify(result));
   return result;
  });
 }
}
