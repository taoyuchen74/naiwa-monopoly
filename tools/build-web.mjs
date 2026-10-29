import {build,transform} from 'esbuild';
import {readFile,writeFile,mkdir,readdir,unlink} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {resolve,dirname,join} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const hash=data=>createHash('sha256').update(data).digest('hex').slice(0,12);

export function workerSource(id,files){return `const BUILD=${JSON.stringify(id)},FILES=${JSON.stringify(files)},PREFIX='naiwa-island-web:'+new URL(self.registration.scope).pathname+':',CACHE=PREFIX+BUILD;
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin||['/online.html','/cloud.html'].some(p=>new URL(e.request.url).pathname.endsWith(p))||['/api/online/','/api/cloud/'].some(p=>new URL(e.request.url).pathname.startsWith(p)))return;
e.respondWith((async()=>{const c=await caches.open(CACHE);if(e.request.mode==='navigate'){
 const cached=await c.match('./index.html'),controller=new AbortController();let timer;
 const network=fetch(e.request,{cache:'no-cache',signal:controller.signal}).then(async r=>{if(!r.ok)return cached||r;const html=await r.clone().text();if(!html.includes('data-build="'))return cached||r;if(html.includes('data-build="'+BUILD+'"'))await c.put('./index.html',r.clone());return r;}).catch(()=>cached||Response.error());
 if(!cached)return network;
 try{return await Promise.race([network,new Promise(resolve=>{timer=setTimeout(()=>{controller.abort();resolve(cached);},3500);})]);}finally{clearTimeout(timer);}
}
const hit=await c.match(e.request);if(hit)return hit;try{const r=await fetch(e.request);if(r.ok)await c.put(e.request,r.clone());return r;}catch{return Response.error();}})());});
`;}

export async function buildWeb({outDir=join(root,'out')}={}){
 const assets=join(outDir,'assets');await mkdir(assets,{recursive:true});
 // Only replace known generated assets; never remove arbitrary files or directories.
 for(const file of await readdir(assets))if(/^(game|style|font|laugh|icon|online|online-style|cloud|cloud-style)\.[a-f0-9]{12}\.(js|css|woff2|mp3|svg)$/.test(file))await unlink(join(assets,file));
 const saved=[],emit=async(name,extension,data)=>{const file=`assets/${name}.${hash(data)}.${extension}`;await writeFile(join(outDir,file),data);saved.push({file,bytes:Buffer.byteLength(data),gzipBytes:gzipSync(data).length});return './'+file;};
 const bundled=await build({absWorkingDir:root,entryPoints:['dist/app.js'],bundle:true,minify:true,format:'iife',write:false,target:['chrome100','safari15.4'],legalComments:'inline',metafile:true});
 const js=bundled.outputFiles[0].text,script=await emit('game','js',js),fontData=await readFile(join(root,'dist/fonts/NaiwaUI.woff2')),font=await emit('font','woff2',fontData),laugh=await emit('laugh','mp3',await readFile(join(root,'dist/audio/naiwa-laugh-excerpt.mp3'))),icon=await emit('icon','svg',await readFile(join(root,'dist/icon.svg')));
 const cssSource=(await readFile(join(root,'dist/style.css'),'utf8')).replace('./fonts/NaiwaUI.woff2',font.replace('./assets/','./'));
 const css=await emit('style','css',(await transform(cssSource,{loader:'css',minify:true,target:['chrome100','safari15.4']})).code);
 await mkdir(join(outDir,'licenses'),{recursive:true});
 for(const [source,file]of [['dist/fonts/OFL.txt','OFL.txt'],['dist/vendor/THREE-LICENSE.txt','THREE-LICENSE.txt']])await writeFile(join(outDir,'licenses',file),await readFile(join(root,source)));
 const onlineBundle=await build({absWorkingDir:root,entryPoints:['dist/online.js'],bundle:true,minify:true,format:'iife',write:false,target:['chrome100','safari15.4']});
 const onlineScript=await emit('online','js',onlineBundle.outputFiles[0].text),onlineStyle=await emit('online-style','css',(await transform(await readFile(join(root,'dist/online.css'),'utf8'),{loader:'css',minify:true})).code);
 const onlineHtml=(await readFile(join(root,'dist/online.html'),'utf8')).replace('./online.css',onlineStyle).replace('<script type="module" src="./online.js"></script>','<script defer src="'+onlineScript+'"></script>');
 await writeFile(join(outDir,'online.html'),onlineHtml);
 const cloudBundle=await build({absWorkingDir:root,entryPoints:['dist/cloud.js'],bundle:true,minify:true,format:'iife',write:false,target:['chrome100','safari15.4']});
 const cloudScript=await emit('cloud','js',cloudBundle.outputFiles[0].text),cloudStyle=await emit('cloud-style','css',(await transform(await readFile(join(root,'dist/cloud.css'),'utf8'),{loader:'css',minify:true})).code);
 await writeFile(join(outDir,'cloud.html'),(await readFile(join(root,'dist/cloud.html'),'utf8')).replace('./cloud.css',cloudStyle).replace('<script type="module" src="./cloud.js"></script>','<script defer src="'+cloudScript+'"></script>'));
 const files=['./index.html',...saved.map(a=>'./'+a.file),'./licenses/OFL.txt','./licenses/THREE-LICENSE.txt'];
 let html=(await readFile(join(root,'dist/index.html'),'utf8')).replace(/href="\.\/style\.css(?:\?[^"]*)?"/,`href="${css}"`).replaceAll('./icon.svg',icon);
 html=html.replace(/<script type="module" src="\.\/app\.js(?:\?[^"]*)?"><\/script>/,()=>`<script>window.__NAIWA_LAUGH_DATA__=${JSON.stringify(laugh)};window.__NAIWA_SERVICE_WORKER_URL__='./sw.js?build=__BUILD__';</script><script defer src="${script}"></script>`);
 html=html.replace('</head>',`<link rel="preload" href="${font}" as="font" type="font/woff2" crossorigin></head>`);
 const buildId=hash(html+workerSource('__BUILD__',files));html=html.replace('<html lang="zh-CN">',`<html lang="zh-CN" data-build="${buildId}">`).replaceAll('__BUILD__',buildId);
 await writeFile(join(outDir,'index.html'),html);await writeFile(join(outDir,'sw.js'),workerSource(buildId,files));await writeFile(join(outDir,'.nojekyll'),'');
 const inputs=[...new Set(Object.keys(bundled.metafile.inputs).map(p=>p.split('?')[0]))];let originalJsBytes=0;for(const p of inputs)originalJsBytes+=(await readFile(join(root,p))).length;
 const info={buildId,sourceJsFiles:inputs.length,originalJsBytes,scriptBytes:Buffer.byteLength(js),scriptGzipBytes:gzipSync(js).length,fontBytes:fontData.length,assets:saved,offlineFiles:files};
 await writeFile(join(outDir,'build-info.json'),JSON.stringify(info,null,2));console.log(`Web: ${inputs.length} JS modules / ${originalJsBytes} bytes -> 1 script / ${info.scriptBytes} bytes (${info.scriptGzipBytes} gzip); font ${info.fontBytes} bytes.`);
 return info;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href)await buildWeb();
