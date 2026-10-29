import {createOnlineServer} from './http.mjs';
import {CloudStore} from './cloud-store.mjs';
import {Rooms} from './rooms.mjs';
const production=process.env.NODE_ENV==='production';
if(production&&!process.env.PUBLIC_ORIGIN)throw Error('PUBLIC_ORIGIN is required in production');
if(production&&process.env.CLOUD_DB&&new URL(process.env.PUBLIC_ORIGIN).protocol!=='https:')throw Error('Cloud accounts require HTTPS in production');
const app=createOnlineServer({rooms:new Rooms(),cloud:process.env.CLOUD_DB?new CloudStore({path:process.env.CLOUD_DB}):null});
app.server.listen(Number(process.env.PORT||4182),process.env.HOST||'127.0.0.1',()=>console.log('Online game ready on port '+app.server.address().port));
for(const signal of ['SIGINT','SIGTERM'])process.once(signal,()=>app.close().then(()=>process.exit(0)));
