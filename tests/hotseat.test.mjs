import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game,createSaveRepository} from '../dist/engine.js';
import {nextCommand} from '../dist/commands.js';
import {isHotseat,accountPlayer,lockSession,publicLog} from '../dist/hotseat.js';
import {bankPanel,bankQuote,bankLimit} from '../dist/bank-panel.js';
import {cardsPanel} from '../dist/cards-panel.js';
import {stockPanel} from '../dist/stocks-panel.js';
import {playerPanel} from '../dist/player-panel.js';
import {advanceSession} from '../dist/ui-session.js';
import {normalizeSetup,setupError} from '../dist/setup.js';
const make=(options={})=>Game.create({seed:17,talents:false,playerCount:3,seatTypes:['human','ai','human'],...options});

test('each seat stores its own control type, character and AI difficulty without changing assets',()=>{
 const g=make({playerCount:6,opponents:['naidan','naicha','naishu','naichong','naigou'],primaryLevel:'hard',seatLevels:['easy','hard','normal','easy','hard'],seatTypes:['human','ai','human','human','ai','human']});
 assert.deepEqual(g.s.players.map(p=>p.human),[true,false,true,true,false,true]);assert.deepEqual(g.s.players.map(p=>p.difficulty),['hard','easy','hard','normal','easy','hard']);assert.equal(new Set(g.s.players.map(p=>p.character)).size,6);assert.ok(g.s.players.every(p=>p.money===3200));assert.deepEqual(Game.restore(g.s).s,g.s);
 assert.deepEqual(normalizeSetup({seatTypes:['ai','human'],primaryLevel:'hard'}).seatTypes,['ai','human']);assert.ok(setupError({seatTypes:['alien']},'naiwa',2));assert.throws(()=>make({seatTypes:['alien']}));
});
test('handoff rejects commands without changing phase, private fields, revision, RNG or action pacing',()=>{
 const g=make(),before=JSON.stringify(g.s);assert.deepEqual(g.s.handoff,{playerId:0});assert.equal(accountPlayer(g),null);
 for(const [type,payload]of [['roll',{}],['card',{index:0,target:1}],['trade',{stock:0,qty:1}],['bank',{kind:'borrow',amount:100}],['end',{}]]){const result=g.dispatch(nextCommand(g,type,payload));assert.equal(result.code,'HANDOFF_REQUIRED');assert.equal(JSON.stringify(g.s),before);}
 const gates={started:true,hidden:false,paused:false,studio:false,panelOpen:false,ready:()=>{throw Error('Must wait before pacing');}};assert.equal(advanceSession(g,gates),null);
 assert.equal(g.command('acceptTurn',{},2),false);assert.equal(JSON.stringify(g.s),before);assert.ok(g.command('acceptTurn'));assert.equal(g.s.phase,'roll');assert.equal(accountPlayer(g).id,0);assert.equal(g.command('acceptTurn'),false);assert.ok(g.command('roll'));
});
test('only a confirmed human receives their own cards, holdings and bank actions; opponent profiles stay public',()=>{
 const g=make();g.s.current=2;g.prepareHandoff();g.player.pos=6;g.player.cards=['ward'];g.player.money=4000;g.player.stocks[0]=2;g.player.stockBook[0].cost=200;
 g.s.players[0].cards=['steal'];g.s.players[0].stocks[0]=73;g.s.players[0].stockBook[0].cost=7300;g.s.players[0].loan=12345;
 for(const panel of [cardsPanel,stockPanel,bankPanel])assert.match(panel(g),/仅对已确认/);
 assert.ok(g.command('acceptTurn'));assert.equal(accountPlayer(g).id,2);assert.match(cardsPanel(g),/奶伴护盾卡/);assert.ok(!cardsPanel(g).includes('奶鼠抢地卡'));assert.ok(!stockPanel(g).includes('>73</b>'));assert.ok(!bankPanel(g).includes('12,345'));assert.equal(bankLimit(g,'deposit'),4000);
 const first=g.s.players[0].money;assert.ok(g.command('bank',{kind:'deposit',amount:100}));assert.equal(g.player.money,3900);assert.equal(g.s.players[0].money,first);
 const publicProfile=playerPanel(g,0);assert.ok(!publicProfile.includes('profile-stock'));assert.ok(!publicProfile.includes('12,345'));assert.ok(!publicProfile.includes('73股'));
 g.s.current=1;g.s.handoff=null;assert.equal(accountPlayer(g),null);assert.equal(bankQuote(g,'borrow',100).allowed,false);for(const panel of [cardsPanel,stockPanel,bankPanel])assert.match(panel(g),/仅对已确认/);
});
test('single-human seats can be anywhere, retain read-only AI-turn views, and all-AI mode has no private controls',()=>{
 const g=make({seatTypes:['ai','ai','human']});assert.equal(isHotseat(g.s),false);assert.equal(g.s.handoff,null);assert.equal(accountPlayer(g).id,2);assert.equal(bankQuote(g,'borrow',100).allowed,false);assert.ok(!cardsPanel(g).includes('仅对已确认'));
 const ai=make({seatTypes:['ai','ai','ai']});assert.equal(accountPlayer(ai),null);assert.equal(ai.s.handoff,null);assert.ok(ai.ai());assert.match(cardsPanel(ai),/仅对已确认/);
});
test('pending handoff survives every slot and JSON roundtrip; UI entry relocks confirmed mid-turn saves',()=>{
 let g=make(),data=new Map(),repo=createSaveRepository({getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)});
 for(const slot of ['auto','manual1','manual2','manual3']){repo.save(slot,g.s);const restored=Game.restore(repo.export(slot));assert.deepEqual(restored.s.handoff,{playerId:0});assert.equal(restored.stateHash(),g.stateHash());}
 g.command('acceptTurn');g.s.phase='debt';g.s.debt={amount:350,to:1,label:'租金'};g.player.cards=['insurance'];const restored=Game.restore(g.s),revision=restored.s.revision;assert.equal(restored.stateHash(),g.stateHash());assert.ok(lockSession(restored));assert.equal(restored.s.phase,'debt');assert.equal(restored.s.revision,revision+1);assert.equal(restored.command('settle'),false);assert.ok(restored.command('acceptTurn'));assert.deepEqual(restored.player.cards,['insurance']);
});
test('old single-human saves migrate and malformed handoff targets refuse restore',()=>{
 const old=Game.create({seed:17}).s;old.rules=8;delete old.handoff;const g=Game.restore(old);assert.ok(g);assert.equal(g.s.handoff,null);assert.equal(g.s.rules,10);
 const h=make();for(const handoff of [{playerId:1},{playerId:99},{playerId:'0'},false])assert.equal(Game.restore({...h.s,handoff}),null);
 h.s.players[0].alive=false;assert.equal(Game.restore(h.s),null);h.s.handoff=null;h.s.phase='end';assert.ok(h.command('end'));assert.equal(h.s.current,1);assert.equal(h.s.handoff,null);
});
test('public logs redact imported hands, stock trades and bank details without hiding public card use',()=>{
 const g=make();for(const text of ['奶茶获得「奶鼠抢地卡」。','奶鼠购买「奶伴护盾卡」−30 点券','奶蛙买入73股「奶茶实业」。','奶茶：存款利息 +61，贷款利息 +99（计入本金）。']){const visible=publicLog(g.s,text);assert.ok(!visible.includes('73'));assert.ok(!visible.includes('抢地卡'));assert.ok(!visible.includes('护盾卡'));assert.ok(!visible.includes('+61'));}
 const used='奶茶使用「奶伴换位卡」与奶鼠交换位置';assert.equal(publicLog(g.s,used),used);
});

function humanDecision(g){
 const s=g.s,p=g.player;
 if(['roll','departure'].includes(s.phase))return ['roll',{}];
 if(s.phase==='moving')return ['step',{}];
 if(s.phase==='branch')return ['step',{choice:g.tiles[p.pos].next[0]}];
 if(s.phase==='buy')return ['buy',{yes:p.money>=g.tiles[p.pos].price+450}];
 if(s.phase==='estate')return ['resolveEstate',{buy:false}];
 if(s.phase==='event')return ['acknowledge',{}];
 if(s.phase==='debt'){
  const need=s.debt.amount-p.money;if(need<=0)return ['settle',{}];
  if(g.canBank()&&p.deposit)return ['bank',{kind:'withdraw',amount:Math.min(p.deposit,need)}];
  if(g.canBank()&&p.loan+need<=1800)return ['bank',{kind:'borrow',amount:need}];
  if(s.round%7)for(let i=0;i<4;i++)if(p.stocks[i])return ['trade',{stock:i,qty:-Math.min(10000,p.stocks[i])}];
  const own=g.owned(p)[0];return own?['sell',{id:own.tile.id}]:['bankrupt',{}];
 }
 if(g.canConstruct(p.pos,'residence')&&p.money>g.buildPrice(g.tiles[p.pos])+500)return ['construct',{id:p.pos,buildingType:'residence'}];
 if(g.canUpgrade(p.pos)&&p.money>g.buildPrice(g.tiles[p.pos])+500)return ['upgrade',{id:p.pos}];
 return ['end',{}];
}
test('2–6 seat all-human and mixed hotseat matches complete, restore during handoff, and replay exactly',()=>{
 for(const mapVersion of [1,2])for(const count of [2,3,4,5,6])for(const mix of [false,true])for(const seed of [17,53]){
  const seatTypes=Array.from({length:count},(_,i)=>mix&&i%2&&i!==count-1?'ai':'human');let g=make({mapVersion,seed,rounds:20,playerCount:count,seatTypes,randomStart:true});const initial=JSON.stringify(g.s),commands=[];let steps=0,handoffs=0;
  while(g.s.phase!=='finished'&&steps++<20000){
   const [type,payload]=g.s.handoff?['acceptTurn',{}]:!g.player.human?['aiTurn',{}]:humanDecision(g);
   if(g.s.handoff){handoffs++;const restored=Game.restore(JSON.stringify(g.s));assert.ok(restored);assert.equal(restored.stateHash(),g.stateHash());g=restored;}
   const c=nextCommand(g,type,payload);commands.push(c);const reply=g.dispatch(c);assert.ok(reply.ok,`${mapVersion}/${count}/${mix}/${seed}/${type}/${reply.code}`);
  }
  assert.equal(g.s.phase,'finished');assert.equal(g.s.handoff,null);assert.ok(handoffs>0);const replay=Game.restore(initial);for(const c of commands)assert.ok(replay.dispatch(c).ok);assert.equal(replay.stateHash(),g.stateHash());assert.ok(Game.restore(g.s));
 }
});
test('pure AI six-seat spectator matches complete through the same command stream',()=>{
 for(const mapVersion of [1,2]){const g=make({mapVersion,playerCount:6,rounds:20,seatTypes:Array(6).fill('ai')});let n=0;while(g.s.phase!=='finished'&&n++<20000){assert.equal(g.s.handoff,null);assert.ok(g.ai());}assert.equal(g.s.phase,'finished');assert.ok(Game.restore(g.s));}
});
