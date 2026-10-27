import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {Game,createSaveRepository} from '../dist/engine.js';
import {nextCommand} from '../dist/commands.js';
import {canonicalState,sha256} from '../dist/state-hash.js';
import {RULES,bankClosed,stockClosed} from '../dist/rules-config.js';
import {bankLimit,bankQuote} from '../dist/bank-panel.js';
import {debtInfo} from '../dist/debt-panel.js';
const make=()=>Game.create({seed:17,talents:false,mapVersion:1});
const command=(g,type,payload={},extra={})=>({...nextCommand(g,type,payload),...extra});
const bytes=g=>JSON.stringify([g.s,g.transfers]);
function refused(g,c,code){const before=bytes(g),hash=g.stateHash(),result=g.dispatch(c);assert.equal(result.ok,false);assert.equal(result.code,code);assert.equal(bytes(g),before);assert.equal(g.stateHash(),hash);}

test('SHA-256 matches standard crypto across block boundaries, empty and Unicode input',()=>{
 for(const text of ['', 'abc','奶蛙🙂',...Array.from({length:140},(_,n)=>'x'.repeat(n)),'abc'.repeat(10000)])assert.equal(sha256(text),createHash('sha256').update(text).digest('hex'));
});
test('canonical state hash ignores insertion order, local settings and save time but includes RNG, rules and protocol',()=>{
 const g=make(),hash=g.stateHash(),reversed=Object.fromEntries(Object.entries(g.s).reverse());assert.equal(canonicalState(reversed),canonicalState(g.s));
 reversed.savedAt=123;reversed.options={...g.s.options,quality:'low',sound:false};assert.equal(Game.restore(reversed).stateHash(),hash);
 for(const mutate of [s=>s.seed++,s=>s.players[0].money++,s=>s.phase='end',s=>{s.revision++;s.commandSequences[0]++;}]){const h=Game.restore(g.s);mutate(h.s);assert.notEqual(h.stateHash(),hash);}
});
test('commands require a current player, valid payload, stage, sequence and optional matching revision',()=>{
 const g=make();refused(g,null,'INVALID_COMMAND');refused(g,command(g,'constructor'),'INVALID_COMMAND');refused(g,command(g,'roll',null),'INVALID_COMMAND');
 refused(g,command(g,'roll',{}, {playerId:99}),'INVALID_PLAYER');refused(g,command(g,'roll',{}, {playerId:1}),'NOT_CURRENT_PLAYER');
 refused(g,command(g,'roll',{}, {sequence:0}),'INVALID_SEQUENCE');refused(g,command(g,'roll',{}, {sequence:2}),'OUT_OF_ORDER');refused(g,command(g,'roll',{}, {revision:1}),'STALE_REVISION');
 refused(g,command(g,'setDiceCount',{count:'1'}),'INVALID_PAYLOAD');refused(g,command(g,'roll',{seed:1}),'INVALID_PAYLOAD');refused(g,command(g,'bank',{kind:'withdraw',amount:1.2}),'INVALID_PAYLOAD');refused(g,command(g,'aiTurn'),'INVALID_PAYLOAD');
 for(const type of ['roll','step','setDiceCount','buy','resolveEstate','acknowledge','end','construct','setResearch','upgrade','demolish','sell','bank','trade','shop','vehicle','card','settle','bankrupt','aiTurn']){g.s.phase='finished';refused(g,command(g,type),'INVALID_PHASE');}
});
test('dice choice is an engine command, respects vehicle limits and cannot run after departure',()=>{
 const g=make();refused(g,command(g,'setDiceCount',{count:2}),'RULE_REJECTED');g.player.vehicle=2;
 assert.ok(g.dispatch(command(g,'setDiceCount',{count:3})).ok);assert.equal(g.player.diceCount,3);assert.equal(g.s.revision,1);
 assert.ok(g.command('roll'));assert.equal(g.s.dice.length,3);refused(g,command(g,'setDiceCount',{count:1}),'INVALID_PHASE');
});
test('duplicate money commands cannot pay twice; sequences survive save, export and restore',()=>{
 const g=make();g.player.pos=6;const c=command(g,'bank',{kind:'deposit',amount:300});assert.ok(g.dispatch(c).ok);assert.equal(g.player.deposit,300);refused(g,c,'DUPLICATE');
 const values=new Map(),repo=createSaveRepository({getItem:k=>values.get(k)??null,setItem:(k,v)=>values.set(k,v)});repo.save('manual1',g.s);const h=Game.restore(repo.export('manual1'));assert.equal(h.stateHash(),g.stateHash());refused(h,c,'DUPLICATE');assert.ok(h.command('bank',{kind:'withdraw',amount:100}));assert.equal(h.s.revision,2);assert.deepEqual(h.s.commandSequences,[2,0,0]);
});
test('rejected rule actions, route parameters and handler exceptions leave state, RNG and receipts untouched',()=>{
 const g=make();g.player.pos=6;refused(g,command(g,'bank',{kind:'deposit',amount:99999}),'RULE_REJECTED');
 g.player.pos=9;refused(g,command(g,'shop',{key:'constructor'}),'INVALID_PAYLOAD');
 g.s.phase='moving';g.player.pos=35;g.s.remaining=3;refused(g,command(g,'step',{choice:999}),'INVALID_PAYLOAD');
 assert.ok(g.command('step'));assert.equal(g.s.phase,'branch');assert.equal(g.s.revision,1);refused(g,command(g,'step'),'INVALID_PAYLOAD');assert.ok(g.command('step',{choice:40}));
 g.s.phase='buy';g.buy=()=>{g.rng();g.player.money--;g.recordTransfer(1,1);throw Error('injected');};refused(g,command(g,'buy',{yes:true}),'EXECUTION_FAILED');
});
test('new players have independent sequences; dead players may only finish their pending turn',()=>{
 const g=make();g.s.phase='end';const first=command(g,'end');assert.ok(g.dispatch(first).ok);assert.equal(g.s.current,1);refused(g,first,'DUPLICATE');
 assert.ok(g.dispatch(command(g,'roll',{}, {playerId:1,sequence:1})).ok);assert.deepEqual(g.s.commandSequences,[1,1,0]);
 g.s.phase='roll';g.player.alive=false;refused(g,command(g,'roll'),'INACTIVE_PLAYER');g.s.phase='end';assert.ok(g.command('end'));
});
test('old snapshots initialize protocol counters read-only; malformed counters refuse restore',()=>{
 const old=make().s;delete old.revision;delete old.commandSequences;const raw=JSON.stringify(old),g=Game.restore(raw);assert.equal(g.s.revision,0);assert.deepEqual(g.s.commandSequences,[0,0,0]);assert.equal(JSON.stringify(old),raw);
 for(const data of [{revision:-1,commandSequences:[0,0,0]},{revision:1,commandSequences:[0,0,0]},{revision:0,commandSequences:[0,0]},{revision:1,commandSequences:[1.1,0,0]},{revision:0}])assert.equal(Game.restore({...old,...data}),null);
});
test('engine, debt and bank quotes share loan limits and closed-day rules',()=>{
 const g=make();g.player.pos=6;g.player.loan=1700;assert.equal(bankLimit(g,'borrow'),RULES.loanLimit-1700);assert.equal(bankQuote(g,'borrow',101).allowed,false);assert.ok(g.command('bank',{kind:'borrow',amount:100}));refused(g,command(g,'bank',{kind:'borrow',amount:1}),'RULE_REJECTED');
 g.s.phase='debt';g.s.debt={amount:9999,to:null,label:'费用'};assert.equal(debtInfo(g).bank.credit,0);
 for(let round=1;round<=14;round++){g.s.round=round;assert.equal(g.canBank(),!bankClosed(round));assert.equal(bankQuote(g,'withdraw',1).allowed,!bankClosed(round)&&g.player.deposit>0);assert.equal(debtInfo(g).stocks.available>0,false);assert.equal(stockClosed(round),round%7===0);}
});
test('six-player matches replay the same command stream with identical hashes through periodic save/restore',()=>{
 for(const mapVersion of [1,2])for(const difficulty of ['easy','normal','hard']){
  let a=Game.create({seed:53,mapVersion,difficulty,rounds:20,playerCount:6});a.s.players.forEach(p=>p.human=false);const initial=JSON.stringify(a.s),b=Game.restore(initial),stream=[];let n=0;
  while(a.s.phase!=='finished'&&n++<20000){const c=command(a,'aiTurn');stream.push(c);assert.ok(a.dispatch(c).ok,`${mapVersion}/${difficulty}/${a.s.phase}`);assert.ok(b.dispatch(structuredClone(c)).ok);assert.equal(b.stateHash(),a.stateHash());if(n%47===0)a=Game.restore(JSON.stringify(a.s));}
  assert.equal(a.s.phase,'finished');assert.equal(a.s.revision,stream.length);assert.equal(a.stateHash(),b.stateHash());
  const replay=Game.restore(initial);for(const c of stream)assert.ok(replay.dispatch(c).ok);assert.equal(replay.stateHash(),a.stateHash());
 }
});

test('explicit human card, roll, movement, purchase, construction and end commands replay exactly',()=>{
 const a=make(),b=Game.restore(a.s),actions=[['setDiceCount',{count:1}],['card',{index:0,target:1}],['roll',{}],['step',{}],['step',{}],['buy',{yes:true}],['construct',{id:1,buildingType:'residence'}],['end',{}]];
 for(const [type,payload]of actions){const c=command(a,type,payload);assert.ok(a.dispatch(c).ok,type);assert.ok(b.dispatch(JSON.parse(JSON.stringify(c))).ok,type);assert.equal(a.stateHash(),b.stateHash());refused(a,c,'DUPLICATE');}
 assert.equal(a.s.revision,8);assert.equal(a.s.current,1);assert.equal(a.s.ownership[1].level,1);
});
