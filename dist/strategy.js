import {businessType} from './businesses.js';
import {difficulty} from './difficulty.js';
import {CARDS} from './content.js';
export function diceWeights(count){let values=new Map([[0,1]]);for(let i=0;i<count;i++){const next=new Map();for(const [sum,w]of values)for(let d=1;d<=6;d++)next.set(sum+d,(next.get(sum+d)||0)+w/6);values=next;}return values;}
export function landingValue(g,r){const p=g.player,t=g.tiles[r.id],o=g.s.ownership[r.id];let value=(r.passesStart?400+(g.s.talents&&p.character==='naiwa'?80:0):0)-r.rent+(r.points||0)*(p.tickets<100?1.5:.3);
 if(t.kind==='property'){if(!o)value+=p.money>=t.price+250?130+g.district(t.id,p.id).count*65:5;else if(o.player===p.id)value+=o.level<g.buildingLimit(o)&&p.money>=g.upgradeCost(t)?55:10;}
 else value+=({hospital:p.skip?0:-210,tax:-g.payment(180),shop:125,rest:120,spirit:20,event:45,bank:0,stock:0,start:0}[t.kind]||0);if(g.aiDifficulty()==='hard'){if(o?.player===p.id)value+=g.district(t.id,p.id).count*18;if(!o&&t.kind==='property')value+=g.district(t.id,p.id).count*50;let risk=0;for(let step=1;step<=6;step++){const options=g.preview(step,{from:r.id,reverse:false});risk+=Math.min(...options.map(x=>x.rent))/6;}value-=risk*.35;}return value;}
export function bestRoute(g,steps,opts){const options=g.preview(steps,opts);return options.sort((a,b)=>landingValue(g,b)-landingValue(g,a))[0];}
export function expectedMove(g,count,{reverse=false}={}){let value=0,rent=0;for(const [steps,weight]of diceWeights(count)){const r=bestRoute(g,steps,{reverse});value+=weight*landingValue(g,r);rent+=weight*r.rent;}return {value,rent};}
export function chooseMove(g){const p=g.player;if(p.forced)return {count:1,value:landingValue(g,bestRoute(g,p.forced))};if(p.slowTurns)return {count:1,value:landingValue(g,bestRoute(g,1))};let best;for(let count=1;count<=(p.vehicle===2?3:p.vehicle===1?2:1);count++){const option={count,...expectedMove(g,count,{reverse:p.reverse})};if(!best||option.value>best.value)best=option;}return best;}
function useBestCard(g){if(g.aiDifficulty()==='easy'){const i=g.player.cards.indexOf('recover');return i>=0&&(g.player.skip||g.player.spirit==='misfortune')?g.card(i):false;}const p=g.player;const normal=chooseMove(g),choices=[];
 for(const [index,key]of p.cards.entries()){
  if(key==='recover')choices.push({index,value:p.skip?600:p.spirit==='misfortune'?250:25});
  if(key==='shield'&&!p.shield)choices.push({index,value:normal.rent-20});
  if(key==='dice'&&!p.forced){for(let n=1;n<=6;n++)choices.push({index,target:n,value:landingValue(g,bestRoute(g,n))-normal.value-30});}
  if(key==='turn'&&!p.reverse)choices.push({index,value:expectedMove(g,normal.count,{reverse:true}).value-normal.value-25});
  if(key==='slow'&&!p.slowTurns&&!p.forced)choices.push({index,value:landingValue(g,bestRoute(g,1))-normal.value-50});
  if(['build','demolish','steal'].includes(key))for(const target of g.cardTargets(key)){
   const t=g.tiles[target.id];if(key==='demolish'&&target.player===p.id&&!target.obstacle)continue;let value;
   if(key==='build')value=g.upgradeCost(t)*.55+(g.rent(t.id,target.level+1)-g.rent(t.id))*.3;
   if(key==='demolish')value=target.obstacle?(g.preview(6).some(r=>r.blocked&&r.id===target.id)?100:0):g.upgradeCost(t)*.25+(g.rent(t.id)-g.rent(t.id,target.level-1))*.3;
   if(key==='steal'){if(p.money<g.takeoverPrice(t.id)+450)continue;value=g.district(t.id,p.id).count*55-g.cost(t,target.level,businessType(target))*.18;}
   choices.push({index,target:t.id,value});
  }
  // Stop yourself on a useful plot. This can also hold a rival behind you on a later turn.
  if(key==='block'&&!p.reverse)for(let n=1;n<=6;n++){let at=p.pos;for(let k=0;k<n;k++)at=g.tiles[at].next[0];if(g.s.blocks[at]!==undefined)continue;let expected=0;for(const [steps,w]of diceWeights(normal.count)){const r=bestRoute(g,steps,{blocks:{...g.s.blocks,[at]:p.id}});expected+=w*landingValue(g,r);}choices.push({index,target:n,value:expected-normal.value-45});}
 }
 choices.sort((a,b)=>b.value-a.value);for(const c of choices)if(c.value>difficulty(g).cardThreshold&&g.card(c.index,c.target))return true;return false;
}
function aiTrade(g){const p=g.player;if(p.aiTradeDone)return false;p.aiTradeDone=true;if(g.aiDifficulty()==='easy')return false;
 const hard=g.aiDifficulty()==='hard';for(let i=0;i<4;i++){const o=g.position(i);if(o.qty&&o.average!==null&&(o.price>=o.average*(hard?1.18:1.12)||o.price<=o.average*(hard?.8:.75)))return g.trade(i,-Math.min(o.qty,hard?8:4));}
 if(p.money<2200)return false;const candidates=g.s.market.map((m,i)=>{const h=m.history.slice(-5),mean=h.reduce((n,v)=>n+v,0)/h.length;return{i,ratio:m.price/(hard?mean:m.history[0]),price:m.price};}).sort((a,b)=>a.ratio-b.ratio);const best=candidates[0];if(hard&&best.ratio>.98)return false;const qty=Math.min(hard?8:2,Math.floor((p.money-1800)/best.price));return qty>0?g.trade(best.i,qty):false;
}
function aiBank(g){const p=g.player;if(p.aiBankDone||!g.canBank())return false;p.aiBankDone=true;if(p.loan&&p.money>p.loan+700)return g.bank('repay',p.loan);if(g.aiDifficulty()==='hard'&&p.money>1900)return g.bank('deposit',Math.min(700,p.money-1400));return false;}
function develop(g,reserve){const p=g.player,o=g.s.ownership[p.pos];if(!o||o.player!==p.id)return false;
 if(!o.level&&g.canBuild(p.pos)){const own=g.owned(p),late=g.s.round>g.s.maxRounds*.7,types=g.aiDifficulty()==='easy'?['residence']:late?['chain','residence']:!own.some(x=>businessType(x)==='research')&&g.s.round<g.s.maxRounds*.4&&p.money>2000?['research','residence']:p.character==='naishu'?['chain','mall','residence']:p.character==='naigou'?['hotel','residence']:p.character==='naidan'?['mall','residence']:own.some(x=>businessType(x)==='chain')?['chain','residence']:g.s.players.some(x=>x.id!==p.id&&x.vehicle)?['gas','residence']:['hotel','residence'];for(const type of types)if(g.canConstruct(p.pos,type)&&p.money>=g.buildPrice(g.tiles[p.pos],type)+reserve)return g.construct(p.pos,type);return false;}
 return g.canUpgrade(p.pos)&&p.money>=g.buildPrice(g.tiles[p.pos])+reserve?g.upgrade(p.pos):false;
}
export function takeAiTurn(g){const p=g.player,cfg=difficulty(g);if(p.human||g.s.phase==='finished')return false;
 if(g.s.phase==='departure')return g.roll();
 if(g.s.phase==='roll'){
  if(p.money<500&&p.deposit&&g.bank('withdraw',Math.min(p.deposit,900)))return true;
  if(useBestCard(g))return true;
  if(g.canShop()&&p.money>1800&&p.vehicle===0&&g.s.round<g.s.maxRounds-5&&g.vehicle(1))return true;
  if(g.canShop()&&p.cards.length<12&&p.shopUsed<2){const need=!p.cards.includes('dice')?'dice':!p.cards.includes('build')?'build':!p.cards.includes('shield')?'shield':null;if(need&&g.shop(need))return true;}
  if(aiTrade(g))return true;
  const move=g.aiDifficulty()==='easy'?{count:1}:chooseMove(g);p.diceCount=move.count;return g.roll();
 }
 if(g.s.phase==='branch'){if(g.aiDifficulty()==='easy'){const next=g.tiles[p.pos].next;return g.step(next[g.int(next.length)]);}const scored=g.tiles[p.pos].next.map(first=>({first,value:landingValue(g,bestRoute(g,g.s.remaining,{first}))}));scored.sort((a,b)=>b.value-a.value);return g.step(scored[0].first);}
 if(g.s.phase==='moving')return g.step();
 if(g.s.phase==='buy'){const t=g.tiles[p.pos],network=g.district(t.id,p.id).count;return g.buy(p.money>=t.price+(g.aiDifficulty()==='easy'?cfg.reserve:network?220:cfg.reserve));}
 if(g.s.phase==='estate'){const price=g.takeoverPrice(p.pos);return g.resolveEstate(g.aiDifficulty()!=='easy'&&p.money>=price+cfg.reserve&&g.district(p.pos,p.id).count>0);}
 if(g.s.phase==='event')return g.acknowledge();
 if(g.s.phase==='debt'){
  if(p.money>=g.s.debt.amount)return g.settle();
  // Each funding step gets its own receipt and pacing window. Do not liquidate
  // remaining investments after the obligation can already be paid.
  const need=g.s.debt.amount-p.money;
  if(p.deposit&&g.bank('withdraw',Math.min(p.deposit,need)))return true;
  for(let i=0;i<4;i++)if(p.stocks[i]&&g.trade(i,-Math.min(p.stocks[i],10000,Math.ceil(need/g.s.market[i].price))))return true;
  if(g.canBank()&&p.loan+need<=1800&&g.bank('borrow',need))return true;
  const sale=g.owned(p).sort((a,b)=>g.district(a.tile.id).count-g.district(b.tile.id).count||a.level-b.level)[0];if(sale)return g.sell(sale.tile.id);return g.bankrupt();
 }
 if(g.s.phase==='end'){if(useBestCard(g))return true;if(g.canShop()&&p.money>1800&&p.vehicle===0&&g.s.round<g.s.maxRounds-5&&g.vehicle(1))return true;if(g.canShop()&&p.cards.length<10&&p.shopUsed<2){const key=!p.cards.includes('dice')?'dice':!p.cards.includes('build')?'build':!p.cards.includes('shield')?'shield':null;if(key&&g.shop(key))return true;}if(g.canBank()&&p.loan>0&&p.money>p.loan+500&&g.bank('repay',p.loan))return true;if(develop(g,g.aiDifficulty()==='hard'?Math.max(450,Math.min(1300,chooseMove(g).rent*1.5||450)):cfg.reserve))return true;if(aiTrade(g))return true;if(aiBank(g))return true;return g.end();}return false;
}
