import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {execFileSync} from 'node:child_process';
const root=resolve(import.meta.dirname,'..'),mime={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.woff2':'font/woff2'};
export async function performanceServer(reference){
 const server=createServer(async(req,res)=>{try{
  const path=new URL(req.url,'http://localhost').pathname,p=resolve(root,'.'+path);if(!p.startsWith(root+sep))throw Error('Outside workspace');
  const data=reference&&path.startsWith('/dist/')?execFileSync('git',['show',reference+':'+path.slice(1)],{cwd:root,maxBuffer:16*1024*1024}):await readFile(p);
  res.writeHead(200,{'Content-Type':mime[extname(p)]||'application/octet-stream','Cache-Control':'no-store'}).end(data);
 }catch{res.writeHead(404).end();}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));return server;
}
