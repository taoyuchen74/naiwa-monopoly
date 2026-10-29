import {createSaveRepository,SLOT_IDS} from './save-repository.js';
import {stateHash} from './state-hash.js';
export const CLOUD_LINKS_KEY='naiwa-cloud-links-v1',cloudBackupKey=slot=>'naiwa-cloud-download-backup-v1:'+slot;
export class CloudFailure extends Error{constructor(code,data={}){super(code);this.code=code;this.data=data;}}
export class CloudSync{
 constructor({storage=localStorage,request=globalThis.fetch.bind(globalThis),uuid=()=>crypto.randomUUID()}={}){
  this.storage=storage;this.fetch=request;this.uuid=uuid;this.repo=createSaveRepository(storage);this.user=null;this.items=[];
 }
 metadata(){try{const x=JSON.parse(this.storage.getItem(CLOUD_LINKS_KEY)||'null');if(x===null)return {version:1,links:{},pending:{}};if(x.version!==1||!x.links||Array.isArray(x.links)||!x.pending||Array.isArray(x.pending))throw Error();return x;}catch{throw new CloudFailure('LOCAL_SYNC_CORRUPT');}}
 writeMetadata(x){this.storage.setItem(CLOUD_LINKS_KEY,JSON.stringify(x));}
 pending(){return this.user?this.metadata().pending[this.user.id]||null:null;}
 link(slot){return this.user?this.metadata().links[this.user.id+':'+slot]||null:null;}
 async api(method,path,input){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),12000);
  try{
   const response=await this.fetch('/api/cloud'+path,{method,credentials:'same-origin',cache:'no-store',signal:controller.signal,headers:input===undefined?{}:{'Content-Type':'application/json'},body:input===undefined?undefined:JSON.stringify(input)});
   let data;try{data=await response.json();}catch{throw new CloudFailure('CLOUD_DISABLED');}
   if(!response.ok){if(response.status===401){this.user=null;this.items=[];}throw new CloudFailure(data.error||'CLOUD_UNAVAILABLE',data);}
   return data;
  }catch(e){if(e instanceof CloudFailure)throw e;throw new CloudFailure('NETWORK_ERROR');}finally{clearTimeout(timer);}
 }
 verify(accountId){if(!this.user||accountId!==this.user.id){this.user=null;this.items=[];throw new CloudFailure('ACCOUNT_CHANGED');}}
 async session(){const data=await this.api('GET','/session');if(!data.supported)throw new CloudFailure('CLOUD_DISABLED');if(data.user?.id!==this.user?.id)this.items=[];this.user=data.user;return data;}
 async auth(kind,username,password){const data=await this.api('POST','/auth/'+kind,{username,password});this.user=data.user;this.items=[];return this.refresh();}
 async refresh(){if(!this.user)return [];const data=await this.api('GET','/saves');this.verify(data.accountId);this.items=data.items;return this.items;}
 async logout(){await this.api('POST','/auth/logout',{actorUserId:this.user?.id||null});this.user=null;this.items=[];}
 stage(slot,targetId=null,label='旅行备份'){
  if(!this.user)throw new CloudFailure('LOGIN_REQUIRED');
  if(this.pending())throw new CloudFailure('PENDING_UPLOAD');
  if(!SLOT_IDS.includes(slot))throw new CloudFailure('INVALID_SLOT');
  const local=this.repo.read(slot);if(local.status!=='valid')throw new CloudFailure('INVALID_LOCAL_SAVE');
  const cloud=targetId?this.items.find(x=>x.id===targetId):null;if(targetId&&!cloud)throw new CloudFailure('REMOTE_CHANGED');
  const link=this.link(slot),linked=cloud&&link?.id===cloud.id;
  return {accountId:this.user.id,id:cloud?.id||this.uuid(),slot,localRaw:local.raw,save:local.state,label,expectedVersion:linked?link.version:cloud?.version||0,cloud,conflict:!!cloud&&(cloud.status!=='valid'||linked&&link.version!==cloud.version)};
 }
 async upload(stage){
  this.verify(stage.accountId);
  if(this.repo.raw(stage.slot)!==stage.localRaw)throw new CloudFailure('LOCAL_CHANGED');
  const metadata=this.metadata();if(metadata.pending[this.user.id])throw new CloudFailure('PENDING_UPLOAD');
  const pending={accountId:this.user.id,id:stage.id,slot:stage.slot,localRaw:stage.localRaw,body:{actorUserId:this.user.id,requestId:this.uuid(),expectedVersion:stage.expectedVersion,label:stage.label,save:stage.save}};
  metadata.pending[this.user.id]=pending;this.writeMetadata(metadata);
  return this.sendPending(pending);
 }
 async retry(){const pending=this.pending();if(!pending)throw new CloudFailure('NO_PENDING');return this.sendPending(pending);}
 async sendPending(pending){
  this.verify(pending.accountId);
  let result;
  try{result=await this.api('PUT','/saves/'+encodeURIComponent(pending.id),pending.body);}
  catch(e){
   if(e.code==='VERSION_CONFLICT'||e.code==='CLOUD_CORRUPT'||e.code==='INVALID_SAVE'||e.code==='FUTURE_SAVE'||e.code==='INVALID_UPLOAD'){
    const data=this.metadata();delete data.pending[pending.accountId];this.writeMetadata(data);
    e.data.pending=pending;
   }
   throw e;
  }
  this.verify(result.accountId);
  const data=this.metadata();delete data.pending[pending.accountId];data.links[pending.accountId+':'+pending.slot]={id:result.id,version:result.version,snapshotHash:result.snapshotHash,localHash:stateHash(pending.body.save)};
  try{this.writeMetadata(data);}catch{throw new CloudFailure('LOCAL_RECEIPT_FAILED');}
  return {...result,localChanged:this.repo.raw(pending.slot)!==pending.localRaw};
 }
 async stageDownload(id,slot){
  if(!['manual1','manual2','manual3'].includes(slot))throw new CloudFailure('MANUAL_SLOT_REQUIRED');
  if(!this.user)throw new CloudFailure('LOGIN_REQUIRED');
  const data=await this.api('GET','/saves/'+encodeURIComponent(id));this.verify(data.accountId);
  const state=this.repo.parse(data.save);if(!state)throw new CloudFailure('CLOUD_CORRUPT');
  return {accountId:this.user.id,slot,id,cloud:data,state,expectedRaw:this.repo.raw(slot)};
 }
 applyDownload(stage){
  this.verify(stage.accountId);
  if(this.repo.raw(stage.slot)!==stage.expectedRaw)throw new CloudFailure('LOCAL_CHANGED');
  if(!this.repo.parse(stage.state))throw new CloudFailure('CLOUD_CORRUPT');
  if(stage.expectedRaw!==null)this.storage.setItem(cloudBackupKey(stage.slot),stage.expectedRaw);
  this.repo.save(stage.slot,stage.state,{expectedRaw:stage.expectedRaw});
  let data;try{data=this.metadata();}catch{return {associated:false};}data.links[stage.accountId+':'+stage.slot]={id:stage.id,version:stage.cloud.version,snapshotHash:stage.cloud.snapshotHash,localHash:stateHash(this.repo.load(stage.slot))};
  let associated=true;try{this.writeMetadata(data);}catch{associated=false;}
  return {associated};
 }
 async raw(id){
  if(!this.user)throw new CloudFailure('LOGIN_REQUIRED');
  const response=await this.fetch('/api/cloud/saves/'+encodeURIComponent(id)+'/raw',{credentials:'same-origin',cache:'no-store'});
  if(!response.ok)throw new CloudFailure(response.status===401?'LOGIN_REQUIRED':'NOT_FOUND');
  return response.blob();
 }
 resetMetadata(){const raw=this.storage.getItem(CLOUD_LINKS_KEY);if(raw!==null)this.storage.setItem(CLOUD_LINKS_KEY+':backup',raw);this.writeMetadata({version:1,links:{},pending:{}});}
}
