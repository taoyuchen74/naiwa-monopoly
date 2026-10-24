import {Game} from '../dist/engine.js';
import {TILES} from '../dist/content.js';
const limit=Number(process.argv[2]||200);
function passive(g){const p=g.player;
 if(g.s.phase==='roll'){
  if(p.money<400&&p.deposit)g.bank('withdraw',p.deposit);
  const t=g.owned(p).filter(o=>g.canUpgrade(o.tile.id)&&p.money>g.buildPrice(o.tile)+700).sort((a,b)=>b.tile.price-a.tile.price)[0];if(t)g.upgrade(t.tile.id);
  if(p.loan&&p.money>p.loan+700)g.bank('repay',p.loan);
  if(p.money>2200&&p.vehicle===0)g.vehicle(1);
  p.diceCount=p.vehicle?2:1;return g.roll();
 }
 if(g.s.phase==='branch')return g.step(TILES[p.pos].next[0]);
 if(g.s.phase==='moving')return g.step();
 if(g.s.phase==='buy')return g.buy(p.money>=TILES[p.pos].price+350);
 if(g.s.phase==='event')return g.acknowledge();
 if(g.s.phase==='end')return g.end();
 return g.ai();
}
const rows=[];
for(const players of [2,3,4])for(const rounds of [20,30,50]){
 const row={players,rounds,games:limit,wins:Array(players).fill(0),bankruptcies:0,debtCases:0,cards:0,construction:0,paidRent:0,leaderChanges:0,cardTypes:{}};
 for(let seed=1;seed<=limit;seed++){
  const g=Game.create({seed,rounds,playerCount:players,randomStart:true});g.s.players.forEach(p=>p.human=false);let leader=0;
  const card=g.card.bind(g);g.card=(...a)=>{const key=g.player.cards[a[0]],ok=card(...a);if(ok){row.cards++;row.cardTypes[key]=(row.cardTypes[key]||0)+1;}return ok;};
  const upgrade=g.upgrade.bind(g);g.upgrade=(...a)=>{const ok=upgrade(...a);if(ok)row.construction++;return ok;};
  const charge=g.charge.bind(g);g.charge=(amount,to,label)=>{const ok=charge(amount,to,label);if(to!==null)row.paidRent+=Math.min(amount,ok?amount:0);if(!ok)row.debtCases++;return ok;};
  let n=0;while(g.s.phase!=='finished'&&n++<20000){g.ai();const next=g.ranking()[0].id;if(next!==leader){row.leaderChanges++;leader=next;}}
  if(g.s.phase!=='finished')throw Error('stalled');row.wins[g.s.winner]++;row.bankruptcies+=g.s.players.filter(p=>!p.alive).length;
 }
 rows.push(row);
}
const ablations=[];
for(const control of ['noCards','noRoute']){let smartWins=0,matches=0;
for(const players of [2,3,4])for(let seed=1;seed<=limit;seed++)for(let smart=0;smart<players;smart++){
 const g=Game.create({seed,playerCount:players,randomStart:true});g.s.players.forEach(p=>p.human=false);let n=0;
 while(g.s.phase!=='finished'&&n++<20000){if(g.s.current===smart)g.ai();else {if(control==='noRoute'&&g.s.phase==='roll'){
 const p=g.player;if(!p.cardsUsed){const heal=p.cards.indexOf('recover'),build=p.cards.indexOf('build'),shield=p.cards.indexOf('shield');if(heal>=0&&(p.skip||p.spirit==='misfortune'))g.card(heal);else if(build>=0){const target=g.cardTargets('build').sort((a,b)=>TILES[b.id].price-TILES[a.id].price)[0];if(target)g.card(build,target.id);}else if(shield>=0&&!p.shield)g.card(shield);}
 if(p.cards.length<6&&p.shopUsed<2){const key=!p.cards.includes('build')?'build':!p.cards.includes('shield')?'shield':null;if(key)g.shop(key);}
 }passive(g);}}
 if(g.s.phase!=='finished')throw Error('stalled in ablation');matches++;if(g.s.winner===smart)smartWins++;
}
ablations.push({control,smartWins,matches,winRate:smartWins/matches});}
console.log(JSON.stringify({seedCount:limit,rows,decisionAblation:ablations,limitations:'Bot comparisons, not proof of human balance; same rules and rotated seats. noRoute control buys/uses engineer, shields and recovery but chooses random dice and first fork. noCards does not use cards. Policies change event RNG consumption.'},null,2));
