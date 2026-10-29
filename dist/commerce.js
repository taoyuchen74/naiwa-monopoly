import {RULES} from './rules-config.js';
import {CARDS} from './content.js';
import {BUSINESSES,buildingLimit,businessType} from './businesses.js';
import {mapTiles} from './maps.js';
const int=n=>Number.isSafeInteger(n)&&n>=0;
export const commerceEnabled=s=>s.players.filter(p=>p.human).length<=1;
export const auctionStart=(g,id)=>Math.max(RULES.auctionUnit,Math.ceil(g.tiles[id].price*RULES.auctionStartRatio/RULES.auctionUnit)*RULES.auctionUnit);
export const auctionMinimum=g=>g.s.auction.leader===null?auctionStart(g,g.s.auction.tile):g.s.auction.bid+RULES.auctionIncrement;
export function startAuction(g){
 const s=g.s;if(!commerceEnabled(s))return false;
 const eligible=Array.from({length:s.players.length},(_,i)=>(s.current+i)%s.players.length).filter(i=>s.players[i].alive);
 s.auction={tile:g.player.pos,actor:eligible[0],eligible,passed:[],bid:0,leader:null};s.phase='auction';return true;
}
function advanceAuction(g){
 const s=g.s,a=s.auction,active=a.eligible.filter(i=>!a.passed.includes(i));
 if(!active.length||active.length===1&&a.leader===active[0]){
  if(a.leader!==null){const p=s.players[a.leader];p.money-=a.bid;s.ownership[a.tile]={player:p.id,level:0,buildingType:'residence'};if(p.id===s.current)g.player.buildSite=a.tile;g.log(`${g.char(p).name}竞得「${g.tiles[a.tile].name}」，向银行支付 ${a.bid} 奶币。`);}
  else g.log(`「${g.tiles[a.tile].name}」无人出价，流拍。`);
  s.auction=null;s.phase='end';return;
 }
 for(let n=1;n<=a.eligible.length;n++){const id=a.eligible[(a.eligible.indexOf(a.actor)+n)%a.eligible.length];if(!a.passed.includes(id)&&id!==a.leader){a.actor=id;return;}}
}
export function auctionAction(g,amount=null){
 const a=g.s.auction;if(g.s.phase!=='auction'||!a)return false;
 if(amount!==null&&(!int(amount)||amount<auctionMinimum(g)||amount>g.s.players[a.actor].money||a.actor===a.leader||a.passed.includes(a.actor)))return false;
 if(amount===null)a.passed.push(a.actor);else{a.bid=amount;a.leader=a.actor;g.log(`${g.char(g.s.players[a.actor]).name}出价 ${amount} 奶币。`);}
 advanceAuction(g);return true;
}
export function propertyValue(g,id,p){
 const t=g.tiles[id],o=g.s.ownership[id],level=o?.level||0,base=g.cost(t,level,businessType(o));
 const network=g.s.players[p.id]?g.tiles.filter(t=>t.kind==='property'&&t.group===g.tiles[id].group&&g.s.ownership[t.id]?.player===p.id&&t.id!==id).length:0;
 return Math.round(base*(.75+Math.min(.25,(g.s.maxRounds-g.s.round)/80)+network*(p.difficulty==='hard'?.15:.08)));
}
export function auctionLimit(g,p){
 const reserve={easy:700,normal:550,hard:450}[p.difficulty];
 return Math.max(0,Math.min(p.money-reserve,Math.floor(propertyValue(g,g.s.auction.tile,p)*({easy:.8,normal:.95,hard:1.05}[p.difficulty]))));
}
export function aiAuction(g){const a=g.s.auction;if(!a||g.s.players[a.actor].human)return false;const min=auctionMinimum(g);return auctionAction(g,min<=auctionLimit(g,g.s.players[a.actor])?min:null);}
const bundleShape=b=>!!b&&typeof b==='object'&&!Array.isArray(b)&&Object.keys(b).sort().join(',')==='cards,cash,properties'&&int(b.cash)&&Array.isArray(b.properties)&&Array.isArray(b.cards)&&b.properties.length<=48&&b.cards.length<=RULES.handLimit&&[...b.properties,...b.cards].every(int)&&new Set(b.properties).size===b.properties.length&&new Set(b.cards).size===b.cards.length;
function assetsValid(s,p,b){
 return bundleShape(b)&&b.cash<=p.money&&b.properties.every(id=>{const o=s.ownership[id];return mapTiles(s.mapVersion,s.customMap)[id]?.kind==='property'&&o&&o.player===p.id&&Number.isInteger(o.level)&&o.level>=0&&o.level<=buildingLimit(o)&&(o.buildingType===undefined||Object.hasOwn(BUSINESSES,o.buildingType))&&!o.mortgaged&&!o.mortgage;})&&b.cards.every(i=>Object.hasOwn(CARDS,p.cards[i])&&s.mode.allowedCards.includes(p.cards[i]));
}
export function offerValid(s,o){
 if(!o||!commerceEnabled(s)||s.debt||!['roll','end'].includes(o.resume)||!int(o.to)||o.to===s.current)return false;
 const p=s.players[s.current],q=s.players[o.to];if(!p?.alive||!p.human||!q?.alive||q.human||!assetsValid(s,p,o.give)||!assetsValid(s,q,o.receive))return false;
 const a=o.give,b=o.receive;
 return a.cash+b.cash+a.properties.length+b.properties.length+a.cards.length+b.cards.length>0&&Number.isSafeInteger(p.money-a.cash+b.cash)&&Number.isSafeInteger(q.money-b.cash+a.cash)&&p.cards.length-a.cards.length+b.cards.length<=RULES.handLimit&&q.cards.length-b.cards.length+a.cards.length<=RULES.handLimit;
}
export function proposeOffer(g,to,give,receive){
 if(!['roll','end'].includes(g.s.phase))return false;
 const o={to,give,receive,resume:g.s.phase};if(!offerValid(g.s,o))return false;
 g.s.negotiation=JSON.parse(JSON.stringify(o));g.s.phase='negotiation';return true;
}
function bundleValue(g,b,owner,receiver){return b.cash+b.properties.reduce((n,id)=>n+propertyValue(g,id,receiver),0)+b.cards.reduce((n,i)=>n+(CARDS[owner.cards[i]].price||0)*3,0);}
export function aiAccepts(g,o=g.s.negotiation){
 if(!offerValid(g.s,o))return false;
 const p=g.player,q=g.s.players[o.to],incoming=bundleValue(g,o.give,p,q),outgoing=bundleValue(g,o.receive,q,q),premium={easy:1,normal:1.08,hard:1.15}[q.difficulty],reserve={easy:300,normal:450,hard:550}[q.difficulty];
 return incoming>=outgoing*premium&&q.money-o.receive.cash+o.give.cash>=Math.min(q.money,reserve);
}
export function resolveOffer(g,cancel=false){
 const s=g.s,o=s.negotiation;if(s.phase!=='negotiation'||!o)return false;
 if(!cancel&&!offerValid(s,o))return false;
 if(cancel||!aiAccepts(g,o)){g.log(cancel?'交易报价已撤回。':'电脑拒绝交易报价，资产未变。');s.phase=o.resume;s.negotiation=null;return true;}
 const p=g.player,q=s.players[o.to],a=o.give,b=o.receive,pc=a.cards.map(i=>p.cards[i]),qc=b.cards.map(i=>q.cards[i]);
 p.money+=b.cash-a.cash;q.money+=a.cash-b.cash;
 p.cards=p.cards.filter((_,i)=>!a.cards.includes(i)).concat(qc);q.cards=q.cards.filter((_,i)=>!b.cards.includes(i)).concat(pc);
 for(const [bundle,from,to]of [[a,p,q],[b,q,p]])for(const id of bundle.properties){s.ownership[id].player=to.id;if(from.buildSite===id)from.buildSite=null;}
 if(a.cash)g.transfers.record({from:p.id,to:q.id,amount:a.cash,kind:'player-trade',round:s.round,tile:p.pos});
 if(b.cash)g.transfers.record({from:q.id,to:p.id,amount:b.cash,kind:'player-trade',round:s.round,tile:p.pos});
 g.log(`${g.char(p).name}与${g.char(q).name}确认交易，现金、地契与卡牌已同时交割。`);s.phase=o.resume;s.negotiation=null;return true;
}
export function validCommerce(s){
 const a=s.auction,o=s.negotiation;
 if(s.phase!=='auction'&&a!=null||s.phase!=='negotiation'&&o!=null)return false;
 if(s.phase==='negotiation')return offerValid(s,o);
 if(s.phase!=='auction')return true;
 const tiles=mapTiles(s.mapVersion,s.customMap),alive=s.players.filter(p=>p.alive).map(p=>p.id);
 if(!a||!commerceEnabled(s)||!s.players[s.current].alive||s.debt||tiles[a.tile]?.kind!=='property'||a.tile!==s.players[s.current].pos||s.ownership[a.tile]||!Array.isArray(a.eligible)||!Array.isArray(a.passed)||a.eligible.some((id,index)=>id!==Array.from({length:s.players.length},(_,i)=>(s.current+i)%s.players.length).filter(i=>s.players[i].alive)[index])||new Set(a.eligible).size!==alive.length||a.eligible.length!==alive.length||a.eligible.some(i=>!alive.includes(i))||new Set(a.passed).size!==a.passed.length||a.passed.some(i=>!alive.includes(i))||!a.eligible.includes(a.actor)||a.passed.includes(a.actor)||a.leader===a.actor||!int(a.bid))return false;
 const active=a.eligible.filter(i=>!a.passed.includes(i));
 if(!active.length||a.leader===null&&a.bid!==0)return false;
 if(a.leader!==null&&(!alive.includes(a.leader)||a.passed.includes(a.leader)||active.length<2||a.bid<auctionStart({tiles},a.tile)||a.bid>s.players[a.leader].money))return false;
 return true;
}
