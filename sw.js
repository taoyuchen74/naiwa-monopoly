const BUILD="d0a93256b98c",FILES=["./index.html","./assets/game.bc4661fe9494.js","./assets/font.a9f268e052ef.woff2","./assets/laugh.92a25df4321c.mp3","./assets/icon.9fa8699356e6.svg","./assets/style.1116b2e65648.css","./licenses/OFL.txt","./licenses/THREE-LICENSE.txt"],PREFIX='naiwa-island-web:'+new URL(self.registration.scope).pathname+':',CACHE=PREFIX+BUILD;
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
e.respondWith((async()=>{const c=await caches.open(CACHE);if(e.request.mode==='navigate'){
 const cached=await c.match('./index.html'),controller=new AbortController();let timer;
 const network=fetch(e.request,{cache:'no-cache',signal:controller.signal}).then(async r=>{if(!r.ok)return cached||r;const html=await r.clone().text();if(!html.includes('data-build="'))return cached||r;if(html.includes('data-build="'+BUILD+'"'))await c.put('./index.html',r.clone());return r;}).catch(()=>cached||Response.error());
 if(!cached)return network;
 try{return await Promise.race([network,new Promise(resolve=>{timer=setTimeout(()=>{controller.abort();resolve(cached);},3500);})]);}finally{clearTimeout(timer);}
}
const hit=await c.match(e.request);if(hit)return hit;try{const r=await fetch(e.request);if(r.ok)await c.put(e.request,r.clone());return r;}catch{return Response.error();}})());});
