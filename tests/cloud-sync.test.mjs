import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {CloudSync,CLOUD_LINKS_KEY,cloudBackupKey} from '../dist/cloud-sync.js';
import {CloudStore} from '../server/cloud-store.mjs';
import {Game} from '../dist/engine.js';
import {slotKey} from '../dist/save-repository.js';
const state=round=>({...Game.create({seed:53,character:'naicha',playerCount:3,talents:false}).s,round});
async function fixture(t){
 const store=new CloudStore({path:':memory:'}),{user}=await store.authenticate('register','traveler','test-only-password-123'),map=new Map();
 t.after(()=>store.close());
 const storage={getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,String(v)),removeItem:k=>map.delete(k)};
 const request=async(url,options)=>{try{const data=store.put(user,url.split('/').at(-1),JSON.parse(options.body));return Response.json(data);}catch(e){return Response.json({error:e.code,...e.details},{status:e.status||500});}};
 const sync=new CloudSync({storage,request,uuid:randomUUID});sync.user=user;sync.repo.save('auto',state(3));return {store,user,map,storage,sync,request};
}
test('guest binding is explicit and per-account; staged snapshot is frozen and stale local confirmation rejected',async t=>{
 const {sync,store,user}=await fixture(t);assert.deepEqual(store.list(user),[]);const stage=sync.stage('auto');
 sync.repo.save('auto',state(7));await assert.rejects(sync.upload(stage),{code:'LOCAL_CHANGED'});assert.deepEqual(store.list(user),[]);assert.equal(sync.pending(),null);
 await sync.upload(sync.stage('auto'));assert.equal(store.list(user)[0].summary.round,7);
 sync.user={id:randomUUID()};assert.equal(sync.link('auto'),null);assert.equal(sync.pending(),null);
});
test('lost acknowledgment survives reload and repeats the exact request, preserves later offline edits',async t=>{
 const {sync,store,user,request,storage}=await fixture(t),requests=[];
 sync.fetch=async(url,options)=>{requests.push(options.body);await request(url,options);throw Error('lost response');};
 await assert.rejects(sync.upload(sync.stage('auto')),{code:'NETWORK_ERROR'});assert.equal(store.list(user).length,1);
 sync.repo.save('auto',state(8));const next=new CloudSync({storage,uuid:randomUUID,request:async(url,options)=>{requests.push(options.body);return request(url,options);}});next.user=user;
 const result=await next.retry();assert.equal(result.version,1);assert.equal(result.localChanged,true);assert.equal(requests[0],requests[1]);assert.equal(next.repo.load('auto').round,8);assert.equal(next.pending(),null);assert.equal(store.list(user).length,1);
});
test('CAS conflict clears rejected pending request; only explicit new copy or matching revision can advance',async t=>{
 const {sync,store,user}=await fixture(t),first=await sync.upload(sync.stage('auto'));sync.items=store.list(user);
 store.put(user,first.id,{actorUserId:user.id,requestId:randomUUID(),expectedVersion:1,label:'remote',save:state(9)});
 sync.repo.save('auto',state(7));const stage=sync.stage('auto',first.id);
 await assert.rejects(sync.upload(stage),e=>e.code==='VERSION_CONFLICT'&&e.data.cloud.summary.round===9&&!!e.data.pending);assert.equal(sync.pending(),null);assert.equal(store.read(user,first.id).save.round,9);
 sync.items=store.list(user);assert.equal(sync.stage('auto',first.id).conflict,true);
 await sync.upload({...stage,id:randomUUID(),expectedVersion:0});assert.equal(store.list(user).length,2);assert.equal(store.read(user,first.id).version,2);
});
test('download validates before backup, refuses auto/stale target, saves exact old raw in separate backup',async t=>{
 const {sync,store,user,storage}=await fixture(t),first=await sync.upload(sync.stage('auto'));
 sync.fetch=async()=>Response.json({accountId:user.id,...store.read(user,first.id)});
 sync.repo.save('manual1',state(6));const before=sync.repo.raw('manual1'),auto=sync.repo.raw('auto');
 await assert.rejects(sync.stageDownload(first.id,'auto'),{code:'MANUAL_SLOT_REQUIRED'});
 const stage=await sync.stageDownload(first.id,'manual1');sync.repo.save('manual1',state(8),{expectedRaw:before});assert.throws(()=>sync.applyDownload(stage),{code:'LOCAL_CHANGED'});
 const fresh=await sync.stageDownload(first.id,'manual1'),old=sync.repo.raw('manual1');sync.applyDownload(fresh);
 assert.equal(sync.repo.load('manual1').round,3);assert.equal(storage.getItem(cloudBackupKey('manual1')),old);assert.equal(sync.repo.raw('auto'),auto);
});
test('storage quota or invalid cloud state cannot destroy a local slot; damaged sync metadata is preserved',async t=>{
 const {sync,storage,map}=await fixture(t);sync.repo.save('manual1',state(6));const old=sync.repo.raw('manual1');
 const stage={accountId:sync.user.id,slot:'manual1',id:randomUUID(),state:state(4),cloud:{version:1},expectedRaw:old};
 storage.setItem=()=>{throw Error('quota');};assert.throws(()=>sync.applyDownload(stage));assert.equal(sync.repo.raw('manual1'),old);
 assert.throws(()=>sync.applyDownload({...stage,state:{bad:true}}),{code:'CLOUD_CORRUPT'});
 map.set(CLOUD_LINKS_KEY,'{broken');assert.throws(()=>sync.metadata(),{code:'LOCAL_SYNC_CORRUPT'});assert.equal(map.get(CLOUD_LINKS_KEY),'{broken');
});
test('wrong account cannot retry, download or acknowledge; malformed data does not overwrite storage',async t=>{
 const {sync,map}=await fixture(t),stage=sync.stage('auto');sync.fetch=async()=>{throw Error('offline');};await assert.rejects(sync.upload(stage));
 const pending=sync.pending();sync.user={id:randomUUID()};assert.equal(sync.pending(),null);await assert.rejects(sync.sendPending(pending),{code:'ACCOUNT_CHANGED'});
 assert.equal(sync.user,null);assert.equal(JSON.parse(map.get(CLOUD_LINKS_KEY)).pending[pending.accountId].body.actorUserId,pending.accountId);
});
