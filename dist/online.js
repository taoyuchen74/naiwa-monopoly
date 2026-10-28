import {OnlineClient} from './online-client.js';
import {mapTiles} from './maps.js';
import {CARDS,CHARACTERS} from './content.js';
const $=id=>document.getElementById(id),client=new OnlineClient();
let offset=0,auctionKey='',marketKey='';
const actionButtons=new Map();
const phases={roll:'待掷骰',departure:'出发结算',moving:'行进中',branch:'选择岔路',buy:'购地选择',estate:'支付租金',event:'待确认事件',end:'经营与结束回合',debt:'筹款',auction:'地产拍卖',finished:'已结束'};
function actions(items,off){const root=$('ruleActions'),needed=new Set();for(const [i,a]of items.entries()){const key=JSON.stringify([a.type,a.payload]);needed.add(key);let b=actionButtons.get(key);if(!b){b=text('button',a.label);b.type='button';b.dataset.command=a.type;b.addEventListener('click',()=>{if(a.confirm&&!confirm(a.label+'？'))return;client.command(a.type,a.payload);});actionButtons.set(key,b);}if(b.textContent!==a.label)b.textContent=a.label;b.disabled=off;if(root.children[i]!==b)root.insertBefore(b,root.children[i]||null);}for(const [key,b]of actionButtons)if(!needed.has(key)){b.remove();actionButtons.delete(key);}}

const errors={DUPLICATE:'重复命令已拒绝',OUT_OF_ORDER:'命令序号跳号，请按最新状态重试',STALE_REVISION:'状态已更新，请重试',AUTH_FAILED:'身份不匹配',INVALID_PAYLOAD:'参数不合法',RULE_REJECTED:'余额、资产或目标不符合规则',INVALID_PHASE:'当前阶段不能执行',AI_CONTROLLED:'当前由AI托管，请先接回',NOT_CURRENT_PLAYER:'尚未轮到你',TURN_TIMEOUT:'本回合已超时',NOT_READY:'需要2—6人全部在线并准备',UNSUPPORTED_COMMAND:'此联机切片不支持该命令',HOST_ONLY:'只有房主可开始',ROOM_FULL:'房间已满',ROOM_STARTED:'对局已开始，不能新增席位',ROOM_NOT_FOUND:'房间不存在或已过期',INVALID_MESSAGE:'消息格式不合法'};
function text(tag,value,cls){const el=document.createElement(tag);el.textContent=value;if(cls)el.className=cls;return el;}
function countdown(){const s=client.state;if(!s?.deadline){$('deadline').textContent='';return;}const seconds=Math.max(0,Math.ceil((s.deadline-(Date.now()+offset))/1000));$('deadline').textContent='本次行动剩余 '+seconds+' 秒；断线与刷新不会延长。';}
function render(){
 const s=client.state,off=!client.connected||client.pending;
 $('entrance').hidden=!!s;$('room').hidden=!s;$('onlineGame').hidden=!s?.game;
 $('createRoom').disabled=client.pending;$('joinRoom').disabled=client.pending;
 if(!s)return;
 $('roomTitle').textContent='房间 '+s.roomId;$('roomMeta').textContent='你是玩家 '+(s.playerId+1)+(s.playerId===0?' · 房主':'')+' · '+({LOBBY:'准备大厅',PLAYING:'进行中',FINISHED:'已结算'}[s.status]);
 $('seatList').replaceChildren(...s.seats.map(seat=>text('div',(seat.id+1)+' · '+seat.name+'（'+CHARACTERS.find(c=>c.id===seat.character).name+'） · '+(seat.connected?'在线':'断线')+' · '+(seat.ai?'AI托管':seat.ready?'已准备':'未准备')+(s.game?' · 现金 '+s.game.players[seat.id].money+' · 净资产 '+s.game.players[seat.id].worth+(s.game.players[seat.id].alive?'':' · 已破产'):''),'seat')));
 const own=s.seats[s.playerId];$('readyRoom').hidden=s.status!=='LOBBY';$('readyRoom').textContent=own.ready?'取消准备':'准备';$('readyRoom').disabled=off;
 $('startRoom').hidden=s.status!=='LOBBY'||s.playerId!==0;$('startRoom').disabled=off||s.seats.length<2||s.seats.some(p=>!p.ready||!p.connected);
 $('controlRoom').hidden=s.status!=='PLAYING';$('controlRoom').textContent=own.ai?'接回我的控制':'交给AI托管';$('controlRoom').disabled=off;
 $('syncInfo').textContent='Revision '+s.revision+' · 下一序号 '+s.nextSequence+' · '+s.stateHash;
 $('onlineGame').dataset.revision=String(s.revision);offset=s.serverNow-Date.now();countdown();
 if(!s.game)return;
 const g=s.game,tiles=mapTiles(g.mapVersion),owner=id=>s.seats[id]?.name||'无人',current=g.players[g.current],self=s.self;
 $('turnStatus').textContent='第 '+g.round+'/'+g.maxRounds+' 轮 · '+owner(g.actor)+'行动 · '+(phases[g.phase]||'等待')+' · 骰子 '+g.dice.join('+')+(g.phase==='finished'?' · 获胜：'+g.winners.map(owner).join('、'):'');
 $('gameNotice').textContent=g.notice?g.notice.title+'：'+g.notice.text+(g.notice.outcomes?' '+g.notice.outcomes.join('；'):''):g.debt?'待偿付 '+g.debt.amount+'：'+g.debt.label:'';
 $('privateAccount').textContent='我的现金 '+self.money+' · 存款 '+self.deposit+' · 贷款 '+self.loan+' · 点券 '+self.tickets+' · 持股 '+self.stocks.join('/');
 $('myCards').textContent='我的手牌：'+self.cards.map(k=>CARDS[k].name).join('、');
 $('onlineMap').replaceChildren(...tiles.map(t=>{const d=text('div','','online-tile');d.setAttribute('role','listitem');d.dataset.tile=String(t.id);if(current.pos===t.id)d.setAttribute('aria-current','location');d.append(text('strong',t.id+' '+t.name),text('span',g.ownership[t.id]?owner(g.ownership[t.id].player)+' · '+g.ownership[t.id].level+'级':t.kind==='property'?'无人 · 标价'+t.price:({start:'起点',shop:'商店',hospital:'医院',tax:'收费站',rest:'休息站',spirit:'神殿',event:'事件',bank:'银行',stock:'证券所'}[t.kind]||'道路')));const visitors=g.players.filter(p=>p.alive&&p.pos===t.id);if(visitors.length)d.append(text('p',visitors.map(p=>owner(p.id)).join('、')));return d;}));
 actions(s.controls.actions,off);
 for(const [id,visible]of [['auctionForm',!!s.controls.auction],['bankForm',s.controls.bank],['stockForm',s.controls.stocks]]){$(id).hidden=!visible;for(const el of $(id).elements)el.disabled=off;}
 if(s.controls.auction&&auctionKey!==JSON.stringify(s.controls.auction)){auctionKey=JSON.stringify(s.controls.auction);$('onlineBid').min=String(s.controls.auction.min);$('onlineBid').max=String(s.controls.auction.max);$('onlineBid').value=String(s.controls.auction.min);}
 if(marketKey!==JSON.stringify(g.market)){marketKey=JSON.stringify(g.market);const old=$('onlineStock').value;$('onlineStock').replaceChildren(...g.market.map((m,i)=>{const o=text('option',m.name+' · '+m.price);o.value=String(i);return o;}));if(old)$('onlineStock').value=old;}
}
client.addEventListener('change',render);
client.addEventListener('status',e=>{$('connection').textContent=e.detail;});
client.addEventListener('result',e=>{const r=e.detail;$('commandStatus').textContent=r.accepted?'命令已确认 · revision '+r.revision:(errors[r.error]||r.error);$('commandStatus').dataset.error=r.error||'';$('commandStatus').dataset.accepted=String(r.accepted);});
$('createRoom').addEventListener('click',()=>client.connect({op:'create',protocol:1,name:$('onlineName').value}));
$('joinRoom').addEventListener('click',()=>{if(!/^\d{6}$/.test($('roomCode').value)){$('commandStatus').textContent='请输入6位数字邀请码。';return;}client.connect({op:'join',protocol:1,roomId:$('roomCode').value,name:$('onlineName').value});});
$('readyRoom').addEventListener('click',()=>client.command('ready',{ready:!client.state.seats[client.state.playerId].ready}));
$('startRoom').addEventListener('click',()=>client.command('start'));
$('controlRoom').addEventListener('click',()=>client.command('control',{ai:!client.state.seats[client.state.playerId].ai}));
$('reconnectRoom').addEventListener('click',()=>client.connect());
$('forgetRoom').addEventListener('click',()=>client.forget());
$('auctionForm').addEventListener('submit',e=>{e.preventDefault();client.command('auctionBid',{amount:Number($('onlineBid').value)});});
$('bankForm').addEventListener('submit',e=>{e.preventDefault();client.command('bank',{kind:$('onlineBankKind').value,amount:Number($('onlineBankAmount').value)});});
$('stockForm').addEventListener('submit',e=>{e.preventDefault();client.command('trade',{stock:Number($('onlineStock').value),qty:Number($('onlineStockQty').value)});});
window.addEventListener('pagehide',()=>client.stop());window.addEventListener('pageshow',e=>{if(e.persisted)client.connect();});
setInterval(countdown,1000);client.connect();
