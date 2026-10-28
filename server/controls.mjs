import {BUSINESSES,businessType,researchChoices} from '../dist/businesses.js';
import {CARDS,VEHICLES} from '../dist/content.js';
import {stockClosed} from '../dist/rules-config.js';
import {auctionMinimum} from '../dist/commerce.js';

export function controls(room,id){
 const g=room.game,s=g?.s,seat=room.seats[id],out={actions:[],bank:false,stocks:false,auction:null};
 if(!g||room.status!=='PLAYING'||seat.ai||(s.phase==='auction'?s.auction.actor:s.current)!==id)return out;
 const p=g.player,add=(label,type,payload={},confirm=false)=>out.actions.push({label,type,payload,confirm});
 if(s.phase==='auction'){out.auction={min:auctionMinimum(g),max:s.players[id].money};add('放弃本场','auctionPass');return out;}
 if(s.phase==='roll'){add(p.skip?'休养 / 出发':'掷骰子','roll');for(let count=1;count<=VEHICLES[p.vehicle].dice;count++)add(count+'颗骰子','setDiceCount',{count});}
 if(s.phase==='end'){
  add('结束回合','end');
  for(const [type,b]of Object.entries(BUSINESSES))if(g.canConstruct(p.pos,type))add('建设'+b.name+' · '+g.buildPrice(g.tiles[p.pos],type),'construct',{id:p.pos,buildingType:type});
  if(g.canUpgrade(p.pos))add('加盖一层 · '+g.buildPrice(g.tiles[p.pos]),'upgrade',{id:p.pos});
  const o=s.ownership[p.pos];if(o?.player===id&&o.level){add('拆除当前建筑','demolish',{id:p.pos},true);if(businessType(o)==='research')for(const key of researchChoices(o.level).filter(k=>s.mode.allowedCards.includes(k)))add('研究 '+CARDS[key].name,'setResearch',{id:p.pos,key});}
 }
 if(s.phase==='buy'){if(p.money>=g.tiles[p.pos].price)add('按标价买地 '+g.tiles[p.pos].price,'buy',{yes:true});add('拒购并进入拍卖','buy',{yes:false});}
 if(s.phase==='branch')for(const choice of g.tiles[p.pos].next)add('前往 '+g.tiles[choice].name,'step',{choice});
 if(s.phase==='event')add('确认事件','acknowledge');
 if(s.phase==='estate'){add('确认支付租金','resolveEstate',{buy:false});if(p.cards.includes('steal')&&p.money>=g.takeoverPrice(p.pos))add('购地卡收购 '+g.takeoverPrice(p.pos),'resolveEstate',{buy:true});}
 if(s.phase==='debt'){if(p.money>=s.debt.amount)add('偿付欠款','settle');add('申请破产','bankrupt',{},true);}
 if(g.manageable()){
  out.bank=g.canBank();out.stocks=!stockClosed(s.round);
  for(const o of g.owned(p))add('出售 '+o.tile.name,'sell',{id:o.tile.id},true);
  if(g.canShop()){for(const key of s.mode.allowedCards)if(p.tickets>=CARDS[key].price&&p.shopUsed<2)add('购买 '+CARDS[key].name+' · '+CARDS[key].price+'点','shop',{key});for(const v of VEHICLES)if(v.id!==p.vehicle&&p.money>=v.price)add('购买 '+v.name+' · '+v.price,'vehicle',{id:v.id});}
 }
 for(const [index,key]of p.cards.entries()){
  if(g.cardHint(key))continue;
  const label='使用 '+CARDS[key].name,targetType=CARDS[key].target;
  if(targetType==='self')add(label,'card',{index});
  else if(targetType==='steps'||targetType==='ahead')for(let target=1;target<=6;target++)add(label+' · '+target+'步','card',{index,target});
  else if(targetType==='opponent')for(const q of g.swapTargets())add(label+' · '+g.char(q).name,'card',{index,target:q.id});
  else for(const t of g.cardTargets(key))add(label+' · '+g.tiles[t.id].name,'card',{index,target:t.id});
 }
 return out;
}
