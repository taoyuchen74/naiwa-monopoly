import {CloudError} from './cloud-store.mjs';
export const CLOUD_COOKIE='naiwa-cloud-session';
const tokenFrom=req=>{const value=(req.headers.cookie||'').split(';').map(v=>v.trim()).find(v=>v.startsWith(CLOUD_COOKIE+'='))?.slice(CLOUD_COOKIE.length+1);return /^[a-f0-9]{64}$/.test(value||'')?value:null;};
const exact=(x,fields)=>x&&typeof x==='object'&&!Array.isArray(x)&&Object.keys(x).sort().join(',')===[...fields].sort().join(',');
function body(req){
 if(!/^application\/json(?:;|$)/i.test(req.headers['content-type']||''))throw new CloudError(415,'JSON_REQUIRED');
 if(Number(req.headers['content-length'])>1024*1024)throw new CloudError(413,'TOO_LARGE');
 return new Promise((resolve,reject)=>{
  let bytes=0,large=false;const chunks=[];
  req.on('data',chunk=>{bytes+=chunk.length;if(bytes>1024*1024){large=true;chunks.length=0;}if(!large)chunks.push(chunk);});
  req.on('end',()=>{if(large){reject(new CloudError(413,'TOO_LARGE'));return;}try{resolve(JSON.parse(Buffer.concat(chunks).toString()));}catch{reject(new CloudError(400,'INVALID_JSON'));}});
  req.on('error',reject);
 });
}
export function cloudHandler(store,{authLimit=20,registerLimit=5,requestLimit=120}={}){
 const rates=new Map();
 function limit(req,kind,max){const now=Date.now(),key=(req.socket.remoteAddress||'unknown')+':'+kind;for(const [k,b]of rates)if(now-b.at>60000)rates.delete(k);let r=rates.get(key);if(!r){r={at:now,count:0};rates.set(key,r);}if(++r.count>max)throw new CloudError(429,'RATE_LIMIT');}
 return async(req,res,path,origin)=>{
  const json=(status,value)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'}).end(JSON.stringify(value));};
  if(!store){json(503,{supported:false,error:'CLOUD_DISABLED'});return;}
  const setCookie=(token,remove=false)=>res.setHeader('Set-Cookie',CLOUD_COOKIE+'='+token+'; HttpOnly; SameSite=Strict; Path=/api/cloud; Max-Age='+(remove?0:7*86400)+(origin.startsWith('https:')?'; Secure':''));
  try{
   limit(req,'all',requestLimit);
   if(req.headers['sec-fetch-site']==='cross-site'||req.headers.origin&&req.headers.origin!==origin)throw new CloudError(403,'ORIGIN_DENIED');
   const token=tokenFrom(req);
   if(req.method==='GET'&&path==='/api/cloud/session'){json(200,{supported:true,user:store.user(token),serverNow:store.now()});return;}
   if(!['GET','POST','PUT'].includes(req.method))throw new CloudError(405,'METHOD_NOT_ALLOWED');
   if(req.method!=='GET'&&req.headers.origin!==origin)throw new CloudError(403,'ORIGIN_DENIED');
   if(req.method==='POST'&&/^\/api\/cloud\/auth\/(register|login)$/.test(path)){
    const kind=path.split('/').at(-1);limit(req,'auth',authLimit);if(kind==='register')limit(req,'register',registerLimit);
    const input=await body(req);if(!exact(input,['username','password']))throw new CloudError(422,'INVALID_CREDENTIALS');
    const result=await store.authenticate(kind,input.username,input.password,token);setCookie(result.token);json(kind==='register'?201:200,{user:result.user,serverNow:store.now()});return;
   }
   if(req.method==='POST'&&path==='/api/cloud/auth/logout'){
    const input=await body(req);if(!exact(input,['actorUserId']))throw new CloudError(422,'INVALID_MESSAGE');
    store.logout(token,input.actorUserId);setCookie('',true);json(200,{user:null});return;
   }
   if(req.method==='PUT'&&/^\/api\/cloud\/saves\/[^/]+$/.test(path)){
    const input=await body(req),user=store.user(token);if(!user)throw new CloudError(401,'LOGIN_REQUIRED');
    const result=store.put(user,path.split('/').at(-1),input);json(200,result);return;
   }
   const user=store.user(token);if(!user)throw new CloudError(401,'LOGIN_REQUIRED');
   if(req.method==='GET'&&path==='/api/cloud/saves'){json(200,{accountId:user.id,items:store.list(user)});return;}
   const match=path.match(/^\/api\/cloud\/saves\/([^/]+)(\/raw)?$/);
   if(req.method==='GET'&&match){
    if(match[2]){const raw=store.raw(user,match[1]);res.writeHead(200,{'Content-Type':'application/octet-stream','Content-Disposition':'attachment; filename="cloud-save.json"'}).end(raw);return;}
    json(200,{accountId:user.id,...store.read(user,match[1])});return;
   }
   throw new CloudError(404,'NOT_FOUND');
  }catch(e){
   if(req.readable&&!req.complete)req.resume();
   const error=e instanceof CloudError?e:new CloudError(503,'CLOUD_UNAVAILABLE');
   json(error.status,{error:error.code,...error.details});
  }
 };
}
