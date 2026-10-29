import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {randomBytes} from 'node:crypto';
import {WebSocketServer,WebSocket} from 'ws';
import {cloudHandler} from './cloud-http.mjs';
import {Rooms} from './rooms.mjs';

const cookieName='naiwa-online-session';
const cookieId=req=>{const value=(req.headers.cookie||'').split(';').map(v=>v.trim()).find(v=>v.startsWith(cookieName+'='))?.slice(cookieName.length+1);return /^[a-f0-9]{64}$/.test(value||'')?value:null;};
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.woff2':'font/woff2','.svg':'image/svg+xml','.mp3':'audio/mpeg','.json':'application/json','.txt':'text/plain'};
export function createOnlineServer({root=resolve('out'),cloud=null,cloudLimits={},publicOrigin=process.env.PUBLIC_ORIGIN||null,rooms=new Rooms(),tickMs=100,authMs=5000,messageLimit=30,handshakeLimit=60,maxConnections=200,maxSessions=1000}={}){
 if(publicOrigin&&new URL(publicOrigin).origin!==publicOrigin)throw Error('PUBLIC_ORIGIN must be an exact origin');
 root=resolve(root);if(cloud?.path!==':memory:'&&cloud?.path&&(cloud.path===root||cloud.path.startsWith(root+sep)))throw Error('Cloud database must not be under public root');const handleCloud=cloudHandler(cloud,cloudLimits);const sessions=new Map(),ips=new Map();
 const origin=req=>publicOrigin||'http://'+req.headers.host;
 const allow=req=>typeof req.headers.origin==='string'&&req.headers.origin===origin(req);
 function budget(req){const id=req.socket.remoteAddress||'unknown',now=Date.now();let b=ips.get(id);if(!b||now-b.at>=60000){b={at:now,n:0};ips.set(id,b);}return ++b.n<=handshakeLimit;}
 const server=createServer(async(req,res)=>{
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');res.setHeader('Cache-Control','no-store');
  let pathname;try{pathname=new URL(req.url,'http://localhost').pathname;}catch{res.writeHead(400).end();return;}
  if(pathname.startsWith('/api/cloud/')){await handleCloud(req,res,pathname,origin(req));return;}
  if(req.method!=='GET'){res.writeHead(405).end();return;}
  if(pathname==='/api/online/session'){
   if(req.headers['sec-fetch-site']==='cross-site'||req.headers.origin&&!allow(req)){res.writeHead(403).end();return;}
   if(!budget(req)){res.writeHead(429).end();return;}
   let id=cookieId(req);if(!id||!sessions.has(id)){
    if(sessions.size>=maxSessions){res.writeHead(503).end();return;}
    id=randomBytes(32).toString('hex');sessions.set(id,{last:Date.now()});
    res.setHeader('Set-Cookie',cookieName+'='+id+'; HttpOnly; SameSite=Strict; Path=/api/online'+(origin(req).startsWith('https:')?'; Secure':''));
   }
   sessions.get(id).last=Date.now();res.writeHead(200,{'Content-Type':'application/json'}).end(JSON.stringify({supported:true,protocol:1,resume:rooms.bindings.get(id)||null}));return;
  }
  if(pathname.startsWith('/api/')){res.writeHead(404).end();return;}
  try{
   // Only built public assets: never expose server code, package files or dist engine.
   let path=resolve(root,'.'+decodeURIComponent(pathname));
   if(path!==root&&!path.startsWith(root+sep)){res.writeHead(403).end();return;}
   if((await stat(path)).isDirectory())path=resolve(path,'index.html');
   const data=await readFile(path);
   if(path===resolve(root,'online.html')||path===resolve(root,'cloud.html'))res.setHeader('Content-Security-Policy',"default-src 'none'; script-src 'self'; style-src 'self'; connect-src 'self'; font-src 'self'; img-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'");
   res.writeHead(200,{'Content-Type':mime[extname(path)]||'application/octet-stream'}).end(data);
  }catch{res.writeHead(404).end();}
 });
 const wss=new WebSocketServer({noServer:true,maxPayload:16*1024,perMessageDeflate:false});
 server.on('upgrade',(req,socket,head)=>{
  const reject=status=>{socket.end('HTTP/1.1 '+status+'\r\nConnection: close\r\n\r\n');};
  const id=cookieId(req);
  if(req.url!=='/api/online/ws'||!allow(req)||!id||!sessions.has(id)){reject('403 Forbidden');return;}
  if(wss.clients.size>=maxConnections||!budget(req)){reject('429 Too Many Requests');return;}
  sessions.get(id).last=Date.now();wss.handleUpgrade(req,socket,head,ws=>wss.emit('connection',ws,id));
 });
 wss.on('connection',(ws,sessionId)=>{
  let count=0,windowAt=Date.now();ws.alive=true;
  const peer={sessionId,send:data=>{if(ws.readyState!==WebSocket.OPEN)return;if(ws.bufferedAmount>1024*1024){ws.close(1008,'BACKPRESSURE');return;}ws.send(JSON.stringify(data));},close:(code,reason)=>ws.close(code,reason)};
  const auth=setTimeout(()=>{if(!peer.binding)ws.close(1008,'AUTH_TIMEOUT');},authMs);auth.unref();
  ws.on('pong',()=>{ws.alive=true;});
  ws.on('error',()=>{});
  ws.on('close',()=>{clearTimeout(auth);rooms.disconnect(peer);});
  ws.on('message',(bytes,binary)=>{
   const now=Date.now();if(now-windowAt>=1000){count=0;windowAt=now;}
   if(++count>messageLimit){ws.close(1008,'RATE_LIMIT');return;}
   if(binary){rooms.result(peer,null,'INVALID_MESSAGE');return;}
   let m;try{m=JSON.parse(bytes.toString());}catch{rooms.result(peer,null,'INVALID_JSON');return;}
   try{if(!peer.binding){rooms.bind(peer,m);if(peer.binding)clearTimeout(auth);}else rooms.execute(peer,m);}
   catch{rooms.result(peer,null,'INVALID_MESSAGE');}
  });
 });
 const tick=setInterval(()=>rooms.tick(),tickMs);tick.unref();
 const heartbeat=setInterval(()=>{
  const now=Date.now();for(const ws of wss.clients){if(!ws.alive){ws.terminate();continue;}ws.alive=false;ws.ping();}
  for(const [ip,b]of ips)if(now-b.at>60000)ips.delete(ip);
  for(const [id,s]of sessions)if(now-s.last>1800000&&!rooms.bindings.has(id))sessions.delete(id);
 },20000);heartbeat.unref();
 async function close(){clearInterval(tick);clearInterval(heartbeat);for(const ws of wss.clients)ws.terminate();await new Promise(resolve=>wss.close(resolve));await new Promise(resolve=>server.close(resolve));cloud?.close();}
 return {server,rooms,sessions,wss,close};
}
