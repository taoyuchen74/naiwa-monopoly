import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve,dirname,basename} from 'node:path';
import {once} from 'node:events';
import {CloudStore} from '../server/cloud-store.mjs';
import {createOnlineServer} from '../server/http.mjs';
import {Game} from '../dist/engine.js';
const password='test-only-password-123',save=(round=3)=>({...Game.create({seed:53,character:'naicha',playerCount:3,talents:false}).s,round});
const body=(user,round=3,expectedVersion=0)=>({actorUserId:user.id,requestId:randomUUID(),expectedVersion,label:'旅行',save:save(round)});
async function account(store,name='traveler'){return store.authenticate('register',name,password);}
async function fixture(t,options={}){const store=new CloudStore({path:':memory:',now:()=>2000000000000,...options});t.after(()=>store.close());const auth=await account(store);return {store,...auth};}
async function server(t,cloud,options={}){const app=createOnlineServer({cloud,...options});app.server.listen(0,'127.0.0.1');await once(app.server,'listening');t.after(()=>app.close());return {app,url:'http://127.0.0.1:'+app.server.address().port};}
async function call(url,path,{method='GET',cookie,input,origin=url}={}){const r=await fetch(url+'/api/cloud'+path,{method,headers:{...(cookie?{Cookie:cookie}:{}),...(method!=='GET'?{'Content-Type':'application/json',Origin:origin}:{})},body:input===undefined?undefined:JSON.stringify(input)});return {r,data:await r.json()};}
async function login(url,name='traveler',kind='register'){const x=await call(url,'/auth/'+kind,{method:'POST',input:{username:name,password}});assert.equal(x.r.status,kind==='register'?201:200);return {...x.data,cookie:x.r.headers.get('set-cookie').split(';')[0],set:x.r.headers.get('set-cookie')};}

test('cloud credentials are salted; sessions rotate, expire, and logout revokes only this device',async t=>{
 let now=2000000000000;const {store,user,token}=await fixture(t,{now:()=>now});
 const second=await store.authenticate('login','TRAVELER',password);assert.deepEqual(store.user(token),user);assert.deepEqual(store.user(second.token),user);
 const row=store.db.prepare('SELECT * FROM users').get();assert.notEqual(row.password_hash,password);assert.equal(row.password_hash.length,128);
 assert.equal(store.db.prepare('SELECT * FROM sessions WHERE token_hash=?').get(token),undefined);
 await assert.rejects(store.authenticate('login','traveler','wrong-password-123'),{code:'BAD_CREDENTIALS'});
 store.logout(token,user.id);assert.equal(store.user(token),null);assert.deepEqual(store.user(second.token),user);
 now+=8*86400000;assert.equal(store.user(second.token),null);
});
test('ownership cannot be forged by IDs, account hints, or payload; missing and foreign records are indistinguishable',async t=>{
 const {store,user}=await fixture(t),other=(await account(store,'outsider')).user,id=randomUUID(),input=body(user);
 store.put(user,id,input);
 for(const action of [()=>store.read(other,id),()=>store.raw(other,id),()=>store.put(other,id,body(other,7,1)),()=>store.read(other,randomUUID())])assert.throws(action,{code:'NOT_FOUND'});
 assert.throws(()=>store.put(other,randomUUID(),input),{code:'ACCOUNT_CHANGED'});assert.deepEqual(store.list(other),[]);
 assert.equal(store.read(user,id).summary.round,3);
});
test('server clock and versions govern updates, client dates cannot win; stale writes never mutate',async t=>{
 let now=2000000000000;const {store,user}=await fixture(t,{now:()=>now}),id=randomUUID(),input=body(user);
 input.save.savedAt=8640000000000000;const first=store.put(user,id,input);assert.equal(first.serverSavedAt,now);
 now-=1000;const second=store.put(user,id,body(user,7,1));assert.equal(second.serverSavedAt,first.serverSavedAt+1);assert.equal(second.version,2);
 assert.throws(()=>store.put(user,id,body(user,9,1)),e=>e.code==='VERSION_CONFLICT'&&e.details.cloud.summary.round===7);
 assert.equal(store.read(user,id).save.round,7);
});
test('durable idempotency returns the original receipt after restart; same key changed content is rejected',async t=>{
 const folder=await mkdtemp(join(tmpdir(),'naiwa-cloud-test-')),path=join(folder,'private.sqlite');let store;
 t.after(async()=>{store?.close();if(dirname(resolve(folder))!==resolve(tmpdir())||!basename(folder).startsWith('naiwa-cloud-test-'))throw Error('Unexpected folder');await rm(folder,{recursive:true,force:true});});
 store=new CloudStore({path});const {user,token}=await account(store),id=randomUUID(),input=body(user),first=store.put(user,id,input);
 store.put(user,id,body(user,8,1));store.close();store=new CloudStore({path});assert.deepEqual(store.user(token),user);
 input.save.savedAt=1;assert.deepEqual(store.put(user,id,input),first);assert.equal(store.read(user,id).version,2);
 assert.throws(()=>store.put(user,id,{...input,label:'changed'}),{code:'REQUEST_ID_REUSED'});assert.equal(store.list(user).length,1);
});
test('snapshot and idempotency receipt roll back together on database write failure',async t=>{
 const {store,user}=await fixture(t),id=randomUUID();store.put(user,id,body(user));
 store.db.exec("CREATE TRIGGER fail_receipt BEFORE INSERT ON requests BEGIN SELECT RAISE(ABORT,'disk fixture'); END;");
 assert.throws(()=>store.put(user,id,body(user,9,1)));assert.equal(store.read(user,id).version,1);assert.equal(store.read(user,id).save.round,3);
 assert.equal(store.db.prepare('SELECT COUNT(*) AS n FROM requests').get().n,1);
});
test('legacy migrates once; invalid/future cloud data is preserved as raw and never overwritten',async t=>{
 const {store,user}=await fixture(t),id=randomUUID(),input=body(user);delete input.save.rules;store.put(user,id,input);assert.equal(store.read(user,id).save.rules,11);
 for(const payload of ['{broken',JSON.stringify({...save(),rules:999}),JSON.stringify({...save(),round:9})]){
  store.db.prepare('UPDATE saves SET payload=? WHERE id=?').run(payload,id);
  assert.notEqual(store.list(user)[0].status,'valid');assert.throws(()=>store.read(user,id),{code:'CLOUD_CORRUPT'});assert.equal(store.raw(user,id),payload);
  assert.throws(()=>store.put(user,id,body(user,6,1)),{code:'CLOUD_CORRUPT'});assert.equal(store.raw(user,id),payload);
 }
 for(const bad of [{version:2},{...save(),schemaVersion:99},{...save(),rules:99}])assert.throws(()=>store.put(user,randomUUID(),{...body(user),save:bad}));
});
test('quotas reject new writes without evicting old receipts; corruption does not expand ownership',async t=>{
 const {store,user}=await fixture(t,{maxSaves:1,maxRequests:2}),id=randomUUID(),input=body(user);store.put(user,id,input);
 assert.throws(()=>store.put(user,randomUUID(),body(user)),{code:'SAVE_LIMIT'});store.put(user,id,body(user,4,1));
 assert.throws(()=>store.put(user,id,body(user,5,2)),{code:'REQUEST_LIMIT'});assert.equal(store.put(user,id,input).version,1);
});
test('real HTTP auth isolates cookies, refuses foreign origin and forged account, logout invalidates old cookie',async t=>{
 const cloud=new CloudStore({path:':memory:'}),{url,app}=await server(t,cloud),a=await login(url),b=await login(url,'outsider');
 assert.match(a.set,/HttpOnly/);assert.match(a.set,/SameSite=Strict/);assert.match(a.set,/Path=\/api\/cloud/);assert.equal(a.set.includes('naiwa-online-session'),false);
 assert.equal((await call(url,'/saves')).r.status,401);assert.equal((await call(url,'/auth/login',{method:'POST',origin:'https://evil.invalid',input:{username:'traveler',password}})).r.status,403);
 const id=randomUUID(),input=body(a.user);
 assert.equal((await call(url,'/saves/'+id,{method:'PUT',cookie:a.cookie,input})).r.status,200);
 for(const suffix of ['', '/raw']){const r=await fetch(url+'/api/cloud/saves/'+id+suffix,{headers:{Cookie:b.cookie}});assert.equal(r.status,404);}
 assert.equal((await call(url,'/saves/'+id,{method:'PUT',cookie:b.cookie,input})).data.error,'ACCOUNT_CHANGED');
 assert.equal(app.rooms.rooms.size,0);
 const online=await fetch(url+'/api/online/session');assert.match(online.headers.get('set-cookie'),/Path=\/api\/online/);
 await call(url,'/auth/logout',{method:'POST',cookie:a.cookie,input:{actorUserId:a.user.id}});assert.equal((await call(url,'/saves',{cookie:a.cookie})).r.status,401);
 assert.equal((await call(url,'/saves',{cookie:b.cookie})).r.status,200);
});
test('real concurrent uploads accept one revision, return conflict metadata for the other; no auto-merge',async t=>{
 const cloud=new CloudStore({path:':memory:'}),{url}=await server(t,cloud),a=await login(url),id=randomUUID();
 await call(url,'/saves/'+id,{method:'PUT',cookie:a.cookie,input:body(a.user)});
 const results=await Promise.all([7,9].map(round=>call(url,'/saves/'+id,{method:'PUT',cookie:a.cookie,input:body(a.user,round,1)})));
 assert.deepEqual(results.map(x=>x.r.status).sort(),[200,409]);const conflict=results.find(x=>x.r.status===409).data;
 assert.equal(conflict.cloud.version,2);assert.ok([7,9].includes(conflict.cloud.summary.round));
 assert.equal((await call(url,'/saves',{cookie:a.cookie})).data.items.length,1);
});
test('corrupt cloud raw HTTP download is private, and failed read returns error without breaking server',async t=>{
 const cloud=new CloudStore({path:':memory:'}),{url}=await server(t,cloud),a=await login(url),id=randomUUID();cloud.put(a.user,id,body(a.user));cloud.db.prepare('UPDATE saves SET payload=? WHERE id=?').run('{broken',id);
 assert.equal((await call(url,'/saves/'+id,{cookie:a.cookie})).data.error,'CLOUD_CORRUPT');
 const r=await fetch(url+'/api/cloud/saves/'+id+'/raw',{headers:{Cookie:a.cookie}});assert.equal(await r.text(),'{broken');assert.match(r.headers.get('content-disposition'),/attachment/);
 assert.equal((await call(url,'/session')).r.status,200);
});
test('cloud opt-in is disabled by default, public DB paths rejected, malformed/oversize input rejected',async t=>{
 const {url}=await server(t,null);assert.equal((await call(url,'/session')).data.error,'CLOUD_DISABLED');assert.equal((await fetch(url+'/api/online/session')).status,200);
 const cloud=new CloudStore({path:':memory:'}),enabled=await server(t,cloud);
 const r=await fetch(enabled.url+'/api/cloud/auth/register',{method:'POST',headers:{Origin:enabled.url,'Content-Type':'application/json'},body:'{'});assert.equal(r.status,400);
 const large=await fetch(enabled.url+'/api/cloud/auth/register',{method:'POST',headers:{Origin:enabled.url,'Content-Type':'application/json'},body:JSON.stringify({x:'a'.repeat(1024*1024)})});assert.equal(large.status,413);
 assert.throws(()=>createOnlineServer({root:resolve('out'),cloud:{path:resolve('out/private.sqlite')}}),/public root/);
});
