// Same seeded Game.ai() batch used by the existing economy/talent simulators,
// with cash-flow measurements and per-character/tie-aware win shares.
import {writeFile,mkdir} from 'node:fs/promises';
import {dirname} from 'node:path';
import {Game} from '../dist/engine.js';
import {CHARACTERS,CARDS,EVENTS} from '../dist/content.js';
const args=Object.fromEntries(process.argv.slice(2).map(x=>x.replace(/^--/,'').split('=')));
const seeds=Number(args.seeds||36),rounds=Number(args.rounds||50),variant=args.variant||'final';
if(!['baseline','candidate-random','candidate','final'].includes(variant))throw Error('Unknown variant');
if(variant.startsWith('candidate')){CARDS.insurance.price=45;EVENTS.find(e=>e.kind==='operations').multiplier=1.25;}
if(variant==='baseline')EVENTS.splice(10);
const legacyCards=Object.keys(CARDS).filter(key=>!['ward','swap','insurance'].includes(key));
if(!Number.isInteger(seeds)||seeds<6||seeds>600||seeds%6||![20,30,50,80].includes(rounds))throw Error('Use seeds=6..600 in multiples of six and supported rounds');
const result={protocol:'content-batch-v1',variant,seeds,rounds,players:6,cardCount:variant==='baseline'?legacyCards.length:Object.keys(CARDS).length,eventCount:EVENTS.length,cardData:CARDS,rows:[],notes:'Six AI players, cycled human-character slot, random initiative, seeds 1..N per map/difficulty. Ties share one win. Cash volatility is pooled SD of per-player cash changes at round boundaries (includes purchases, sales and a final partial interval). Bot evidence, not human-balance proof; content changes RNG consumption, so paired seeds do not imply paired event draws.'};
for(const mapVersion of [1,2])for(const difficulty of ['easy','normal','hard']){
 const row={mapVersion,difficulty,games:seeds,wins:Object.fromEntries(CHARACTERS.map(c=>[c.id,0])),seatWins:Array(6).fill(0),rounds:0,bankrupt:0,finalCash:0,deltaCount:0,deltaSum:0,deltaSquares:0,absoluteDelta:0,cards:{},events:{}};
 for(let seed=1;seed<=seeds;seed++){
  const g=Game.create({seed,mapVersion,difficulty,rounds,playerCount:6,character:CHARACTERS[(seed-1)%6].id,talents:true,randomStart:true});g.s.players.forEach(p=>p.human=false);
  if(variant==='baseline'){
   const give=g.giveCard.bind(g);g.giveCard=(p,key)=>give(p,key||legacyCards[g.int(legacyCards.length)]);
  }
  if(variant==='baseline'||variant==='candidate-random'){
   const shop=g.shop.bind(g);g.shop=key=>!['ward','swap','insurance'].includes(key)&&shop(key);
  }
  const use=g.card.bind(g);g.card=(...a)=>{const key=g.player.cards[a[0]],ok=use(...a);if(ok)row.cards[key]=(row.cards[key]||0)+1;return ok;};
  let eventPicking=false;const event=g.event.bind(g),int=g.int.bind(g);
  g.event=()=>{eventPicking=true;try{return event();}finally{eventPicking=false;}};
  g.int=n=>{const value=int(n);if(eventPicking&&n===EVENTS.length){const name=EVENTS[value].name;row.events[name]=(row.events[name]||0)+1;eventPicking=false;}return value;};
  let n=0,last=g.s.players.map(p=>p.money),round=g.s.round;
  const sample=()=>{const cash=g.s.players.map(p=>p.money);cash.forEach((v,i)=>{const delta=v-last[i];row.deltaCount++;row.deltaSum+=delta;row.deltaSquares+=delta*delta;row.absoluteDelta+=Math.abs(delta);});last=cash;};
  while(g.s.phase!=='finished'&&n++<40000){g.ai();if(g.s.round!==round){sample();round=g.s.round;}if(n%257===0&&!Game.restore(g.s))throw Error(`Bad snapshot ${mapVersion}/${difficulty}/${seed}`);}
  if(g.s.phase!=='finished'||!Game.restore(g.s))throw Error(`Stalled ${mapVersion}/${difficulty}/${seed}`);
  sample();const leaders=g.leaders();for(const p of leaders){row.wins[p.character]+=1/leaders.length;row.seatWins[p.id]+=1/leaders.length;}
  row.rounds+=g.s.round;row.bankrupt+=g.s.players.filter(p=>!p.alive).length;row.finalCash+=g.s.players.reduce((a,p)=>a+p.money,0);
 }
 row.averageRounds=row.rounds/seeds;row.bankruptcyRate=row.bankrupt/(seeds*6);row.averageFinalCash=row.finalCash/(seeds*6);
 row.cashDeltaSD=Math.sqrt(Math.max(0,row.deltaSquares/row.deltaCount-(row.deltaSum/row.deltaCount)**2));row.meanAbsoluteCashDelta=row.absoluteDelta/row.deltaCount;
 result.rows.push(row);
}
const json=JSON.stringify(result,null,2)+'\n';if(args.output){await mkdir(dirname(args.output),{recursive:true});await writeFile(args.output,json);}else process.stdout.write(json);
console.error(`Completed ${seeds*6} matches, ${result.cardCount} cards / ${EVENTS.length} events${args.output?' -> '+args.output:''}`);
