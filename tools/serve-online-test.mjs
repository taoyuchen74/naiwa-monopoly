// Test-only timing and seed are local process options, never network input.
import {createOnlineServer} from '../server/http.mjs';
import {Rooms} from '../server/rooms.mjs';
const app=createOnlineServer({rooms:new Rooms({seed:()=>17,turnMs:20000,graceMs:3000,stepMs:30}),handshakeLimit:500});
app.server.listen(4182,'127.0.0.1');
for(const signal of ['SIGTERM','SIGINT'])process.once(signal,()=>app.close().then(()=>process.exit(0)));
