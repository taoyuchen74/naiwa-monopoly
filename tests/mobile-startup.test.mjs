import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {prepareStartupAssets,waitForStyles} from '../dist/startup.js';
import {logicalRect,choicePlacement,nextEnabled} from '../dist/game-selects.js';

test('home readiness waits for decoded images, the real font and audio bytes',async()=>{
 let fontReady,imageReady,done=false;const font=new Promise(r=>fontReady=r),image=new Promise(r=>imageReady=r),bytes=new ArrayBuffer(9),doc={fonts:{load:()=>font,ready:Promise.resolve()},images:[{decode:()=>image}]};
 const ready=prepareStartupAssets(doc,async()=>({ok:true,arrayBuffer:async()=>bytes})).then(()=>done=true);await Promise.resolve();assert.equal(done,false);fontReady();await Promise.resolve();assert.equal(done,false);imageReady();await ready;assert.equal(done,true);assert.equal(globalThis.__NAIWA_LAUGH_BYTES__,bytes);delete globalThis.__NAIWA_LAUGH_BYTES__;
});

test('optional audio HTTP, network and byte-read failures do not block silent startup',async()=>{
 for(const fetchAsset of [async()=>({ok:false}),async()=>{throw Error('network');},()=>{throw Error('sync fetch');},async()=>({ok:true,arrayBuffer:async()=>{throw Error('bytes');}})]){
  globalThis.__NAIWA_LAUGH_BYTES__=new ArrayBuffer(1);await prepareStartupAssets({images:[]},fetchAsset);assert.equal(globalThis.__NAIWA_LAUGH_BYTES__,null);
 }
 delete globalThis.__NAIWA_LAUGH_BYTES__;
});
test('required image and font failures still reject startup',async()=>{
 const fetchAsset=async()=>({ok:true,arrayBuffer:async()=>new ArrayBuffer(1)});
 await assert.rejects(prepareStartupAssets({images:[{decode:async()=>{throw Error('image');}}]},fetchAsset),/image/);
 await assert.rejects(prepareStartupAssets({images:[],fonts:{load:async()=>{throw Error('font');}}},fetchAsset),/font/);
 delete globalThis.__NAIWA_LAUGH_BYTES__;
});

test('nonblocking styles are applied before the scene is constructed',async()=>{
 let onLoad,ready=false;const link={sheet:null,media:'print',addEventListener(type,fn){if(type==='load')onLoad=fn;}};const pending=waitForStyles({querySelectorAll:()=>[link]}).then(()=>ready=true);await Promise.resolve();assert.equal(ready,false);onLoad();await pending;assert.equal(link.media,'all');assert.equal(ready,true);
});

test('loading errors before DOM readiness remain recoverable and cannot reveal a partial home',()=>{
 const source=readFileSync(new URL('../dist/index.html',import.meta.url),'utf8').match(/<script id="bootSetup">([\s\S]*?)<\/script>/)[1],nodes=new Map(),events={},dom={},window={};let revealed=false;
 const context={window,document:{getElementById:id=>nodes.get(id),addEventListener:(type,fn)=>dom[type]=fn,body:{classList:{remove(){revealed=true;}}}},addEventListener:(type,fn)=>events[type]=fn,location:{reload(){}}};runInNewContext(source,context);window.__NAIWA_BOOT__.fail();for(const id of ['loadingStatus','loadingRetry','loadingProgress','loadingNumber','app','loadingScreen'])nodes.set(id,{hidden:true,addEventListener(){},removeAttribute(){},setAttribute(){}});dom.DOMContentLoaded();assert.equal(nodes.get('loadingRetry').hidden,false);assert.match(nodes.get('loadingStatus').textContent,/重试/);window.__NAIWA_BOOT__.ready();assert.equal(revealed,false);
});

test('game menus use logical coordinates in forced landscape and fit above crowded controls',()=>{
 const game={left:0,top:0,right:390,bottom:844},physical={left:150,top:400,right:180,bottom:520},anchor=logicalRect(physical,game,true);assert.deepEqual(anchor,{left:400,top:210,right:520,bottom:240,width:120});
 for(const [width,height]of [[844,390],[568,320],[390,844]]){const a={left:width-140,top:height-80,bottom:height-45,width:125},p=choicePlacement(a,width,height,8);assert.ok(p.left>=12&&p.top>=12);assert.ok(p.left+p.width<=width-11&&p.top+p.height<=height-11);assert.ok(p.top<a.top,'low controls open upward');}
 const middle=choicePlacement({left:360,top:176,bottom:208,width:160},568,320,5);assert.equal(middle.height,232,'all five choices fit without being clipped at the trigger');
 assert.equal(nextEnabled([{disabled:false},{disabled:true},{disabled:false}],0,1),2);assert.equal(nextEnabled([{disabled:true}],0,1),-1);
});
