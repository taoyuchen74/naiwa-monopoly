// Isolated test process; credentials and malformed fixture are never production defaults.
import {CloudStore} from '../server/cloud-store.mjs';
import {createOnlineServer} from '../server/http.mjs';
import {Game} from '../dist/engine.js';
import {randomUUID} from 'node:crypto';
const cloud=new CloudStore({path:':memory:'});
const {user}=await cloud.authenticate('register','corrupt_fixture','test-only-password-123'),id=randomUUID();
cloud.put(user,id,{actorUserId:user.id,requestId:randomUUID(),expectedVersion:0,label:'损坏数据测试',save:Game.create({seed:53,character:'naicha',playerCount:3,talents:false}).s});
cloud.db.prepare('UPDATE saves SET payload=? WHERE id=?').run('{broken',id);
const app=createOnlineServer({cloud,cloudLimits:{authLimit:1000,registerLimit:1000,requestLimit:10000}});
app.server.listen(4183,'127.0.0.1');
for(const signal of ['SIGTERM','SIGINT'])process.once(signal,()=>app.close().then(()=>process.exit(0)));
