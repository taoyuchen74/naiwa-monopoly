export const ONLINE_HINT_KEY='naiwa-online-room-v1';
export class OnlineClient extends EventTarget{
 constructor(){super();this.state=null;this.credentials=null;this.socket=null;this.connected=false;this.pending=false;this.attempt=0;this.retry=0;this.timer=null;this.stopped=false;try{const h=JSON.parse(sessionStorage.getItem(ONLINE_HINT_KEY)||'null');if(h&&/^\d{6}$/.test(h.roomId)&&Number.isInteger(h.playerId)&&h.playerId>=0&&h.playerId<6)this.credentials={roomId:h.roomId,playerId:h.playerId};}catch{}}
 emit(type,data){this.dispatchEvent(new CustomEvent(type,{detail:data}));}
 async connect(first=null){
  clearTimeout(this.timer);this.stopped=false;const attempt=++this.attempt;this.socket?.close();this.socket=null;this.pending=true;this.connected=false;this.emit('status','正在连接房间服务…');this.emit('change');
  const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),5000);
  try{
   const response=await fetch('/api/online/session',{credentials:'same-origin',cache:'no-store',signal:controller.signal});
   if(!response.ok)throw Error('此地址未提供可用联机服务（'+response.status+'）。静态/离线版仅支持单机。');
   const data=await response.json();if(!data.supported||data.protocol!==1)throw Error('此地址不支持当前联机协议。');
   if(attempt!==this.attempt)return;
   if(!this.credentials&&data.resume)this.credentials={roomId:data.resume.roomId,playerId:data.resume.playerId};
   const handshake=this.credentials?{op:'resume',protocol:1,...this.credentials}:first;
   if(!handshake){this.pending=false;this.emit('change');this.emit('status','请输入名称，创建或加入房间。');return;}
   const url=new URL('/api/online/ws',location.href);url.protocol=location.protocol==='https:'?'wss:':'ws:';
   const ws=new WebSocket(url);this.socket=ws;this.waiting=false;
   ws.addEventListener('open',()=>{if(attempt===this.attempt)ws.send(JSON.stringify(handshake));});
   ws.addEventListener('message',e=>{
    if(attempt!==this.attempt)return;let m;try{m=JSON.parse(e.data);}catch{return;}
    if(m.op==='credentials'){
     this.credentials={roomId:m.roomId,playerId:m.playerId};try{sessionStorage.setItem(ONLINE_HINT_KEY,JSON.stringify(this.credentials));}catch{}
    }else if(m.op==='state'){
     this.state=m;this.connected=true;this.retry=0;if(!this.waiting)this.pending=false;this.emit('status','已连接 · 服务端权威状态');this.emit('change');
    }else if(m.op==='result'){
     this.lastResult=m;this.waiting=false;this.emit('result',m);
     if(!this.state||m.stateHash===null){this.pending=false;this.emit('change');}
     if(['ROOM_NOT_FOUND','PROTOCOL_MISMATCH','ALREADY_JOINED'].includes(m.error)||m.error==='AUTH_FAILED'&&!this.connected){this.stopped=true;this.pending=false;this.emit('status','无法恢复房间：'+m.error+'。服务重启、Cookie丢失或房间已过期；不能导入单机存档。');ws.close();}
    }
   });
   ws.addEventListener('close',e=>{
    if(attempt!==this.attempt)return;this.connected=false;this.pending=false;this.waiting=false;this.emit('change');
    if(e.code===4001||e.code===4004){this.stopped=true;this.emit('status',e.code===4001?'本席已在另一页面连接；当前页面停止发送。':'房间已过期。');}
    if(!this.stopped&&this.credentials){const delay=Math.min(15000,1000*2**Math.min(this.retry++,4));this.emit('status','连接已断开，正在重连；服务端倒计时继续。');this.timer=setTimeout(()=>this.connect(),delay);}
    else if(!this.stopped)this.emit('status','连接失败，此地址可能未启动联机服务。');
   });
   ws.addEventListener('error',()=>{});
  }catch(error){if(attempt===this.attempt){this.pending=false;this.emit('status',/[\u4e00-\u9fff]/.test(error.message||'')?error.message:'此地址未提供可用联机服务，静态/离线版仅支持单机。');this.emit('change');if(this.credentials&&!this.stopped)this.timer=setTimeout(()=>this.connect(),3000);}}
  finally{clearTimeout(timeout);}
 }
 command(type,payload={}){
  if(!this.connected||this.pending||!this.state||this.socket?.readyState!==WebSocket.OPEN)return false;
  const s=this.state;this.pending=true;this.waiting=true;this.emit('change');
  this.socket.send(JSON.stringify({op:'command',roomId:s.roomId,playerId:s.playerId,sequence:s.nextSequence,expectedRevision:s.revision,type,payload}));return true;
 }
 stop(){this.stopped=true;this.attempt++;clearTimeout(this.timer);this.socket?.close();this.connected=false;this.pending=false;}
 forget(){this.stop();this.state=null;this.credentials=null;try{sessionStorage.removeItem(ONLINE_HINT_KEY);}catch{}this.emit('change');this.emit('status','已清除本页房间提示。Cookie仍保留原席身份；服务端房间过期前不能更换席位。');}
}
