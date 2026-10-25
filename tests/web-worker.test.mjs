import {test} from 'node:test';
import assert from 'node:assert/strict';
import {runInNewContext} from 'node:vm';
import {workerSource} from '../tools/build-web.mjs';
function worker(){const scope='https://example.org/game/',listeners={},stores=new Map(),calls=[];let fetcher=async()=>{throw Error('offline');};const url=k=>new URL(typeof k==='string'?k:k.url,scope).href;const cache=key=>{if(!stores.has(key))stores.set(key,new Map());const m=stores.get(key);return{match:async k=>m.get(url(k))?.clone(),put:async(k,r)=>m.set(url(k),r.clone()),addAll:async files=>{calls.push(...files);for(const f of files)m.set(url(f),new Response(f==='./index.html'?'<html data-build="old">original</html>':'asset'));}};};const api={open:async key=>cache(key),keys:async()=>[...stores.keys()],delete:async key=>stores.delete(key)};runInNewContext(workerSource('old',['./index.html','./assets/game.hash.js']),{self:{registration:{scope},addEventListener:(key,fn)=>listeners[key]=fn,skipWaiting(){},clients:{claim(){}}},caches:api,location:{origin:'https://example.org'},URL,Response,AbortController,setTimeout,clearTimeout,fetch:(...args)=>fetcher(...args)});return{stores,calls,api,setFetch:fn=>fetcher=fn,async install(){let wait;listeners.install({waitUntil:p=>wait=p});await wait;},async activate(){let wait;listeners.activate({waitUntil:p=>wait=p});await wait;},async get(path,mode='navigate'){let reply;listeners.fetch({request:{url:new URL(path,scope).href,method:'GET',mode},respondWith:p=>reply=p});return await reply;}};}
test('a query-string entry reloads the cached game while offline',async()=>{const w=worker();await w.install();const r=await w.get('./?from=friend');assert.match(await r.text(),/original/);assert.deepEqual(w.calls,['./index.html','./assets/game.hash.js']);});
test('partially arriving new releases never replace the previous complete offline document',async()=>{const w=worker();await w.install();w.setFetch(async()=>new Response('<html data-build="new">next release</html>'));assert.match(await(await w.get('./')).text(),/next release/);w.setFetch(async()=>{throw Error('network dropped');});assert.match(await(await w.get('./')).text(),/original/);});
test('hashed assets load from offline cache without another network request',async()=>{const w=worker();await w.install();let network=0;w.setFetch(async()=>{network++;return new Response('network');});assert.equal(await(await w.get('./assets/game.hash.js','cors')).text(),'asset');assert.equal(network,0);assert.equal(await w.get('https://other.org/image','cors'),undefined);});
test('worker activation clears only previous builds within its own project scope',async()=>{const w=worker();await w.install();await w.api.open('naiwa-island-web:/game/:older');await w.api.open('naiwa-island-web:/other-game/:older');await w.api.open('unrelated-application');await w.activate();assert.ok(!w.stores.has('naiwa-island-web:/game/:older'));assert.ok(w.stores.has('naiwa-island-web:/other-game/:older'));assert.ok(w.stores.has('unrelated-application'));assert.ok(w.stores.has('naiwa-island-web:/game/:old'));});

test('temporary HTTP failures use the complete cached game without poisoning its offline document',async()=>{
 for(const status of [403,429,500,503]){const w=worker();await w.install();w.setFetch(async()=>new Response('temporarily unavailable',{status}));const response=await w.get('./?from=friend');assert.equal(response.status,200);assert.match(await response.text(),/original/);w.setFetch(async()=>{throw Error('offline');});assert.match(await(await w.get('./')).text(),/original/);}
});

test('a successful maintenance or Wi-Fi login page cannot replace a complete cached game',async()=>{
 const w=worker();await w.install();w.setFetch(async()=>new Response('<html>Sign in to this Wi-Fi network</html>'));assert.match(await(await w.get('./')).text(),/original/);
});

test('a stalled navigation uses the complete cached game within a bounded wait and aborts the request',async t=>{
 t.mock.timers.enable({apis:['setTimeout']});const w=worker();await w.install();let signal;w.setFetch((request,options)=>{signal=options.signal;return new Promise(()=>{});});
 const pending=w.get('./?from=friend');await new Promise(setImmediate);assert.ok(signal);assert.equal(signal.aborted,false);t.mock.timers.tick(3500);const response=await pending;assert.equal(signal.aborted,true);assert.match(await response.text(),/original/);
});

test('without a complete cached document, navigation preserves the real network failure',async()=>{
 const w=worker();w.setFetch(async()=>new Response('unavailable',{status:503}));assert.equal((await w.get('./')).status,503);
 w.setFetch(async()=>{throw Error('offline');});assert.equal((await w.get('./')).type,'error');
});
