import {Game} from '../dist/engine.js';
import {modeConfig,modeProgress} from '../dist/modes.js';
const games=Number(process.argv[2]||40);
const rows=[];
const percentile=(a,q)=>[...a].sort((x,y)=>x-y)[Math.floor((a.length-1)*q)];
for(const id of ['standard','short','business','daily']){
 const values=[],rounds=[],wins=[0,0,0],thresholds={4500:0,5000:0,5500:0};let bankrupt=0,success=0,anySuccess=0;
 for(let seed=1;seed<=games;seed++){
  const date=new Date(Date.UTC(2026,9,seed)).toISOString().slice(0,10),g=Game.create({mode:modeConfig({id,date}),seed,playerCount:3,seatTypes:['ai','ai','ai'],difficulty:'normal',randomStart:true,mapVersion:2});let n=0;
  while(g.s.phase!=='finished'&&n++<20000)if(!g.ai())throw Error('rejected AI '+id);if(g.s.phase!=='finished')throw Error('stalled');
  rounds.push(g.s.round);wins[g.ranking()[0].id]++;const progress=modeProgress(g);success+=progress.filter(r=>r.success).length;anySuccess+=Number(progress.some(r=>r.success));
  for(const p of g.s.players){const v=g.worth(p);values.push(v);bankrupt+=Number(!p.alive);if(id==='business'&&p.alive)for(const target of Object.keys(thresholds))if(v>=+target)thresholds[target]++;}
 }
 rows.push({id,games,players:3,difficulty:'normal',mapVersion:2,meanRounds:rounds.reduce((a,b)=>a+b)/games,rankingWins:wins,bankruptcyRate:bankrupt/(games*3),netWorth:{p10:percentile(values,.1),p50:percentile(values,.5),p90:percentile(values,.9)},...(id==='business'?{seatSuccessRate:success/(games*3),anySuccessRate:anySuccess/games,postHocThresholdRates:Object.fromEntries(Object.entries(thresholds).map(([k,n])=>[k,n/(games*3)]))}:{})});
}
process.stdout.write(JSON.stringify({method:'3 normal AI seats, map2, random initiative, seeds1..N; daily dates2026-10-01 onward; original rules/AI; target thresholds evaluated on identical business end states; no human balance claim',rows},null,2)+'\n');
