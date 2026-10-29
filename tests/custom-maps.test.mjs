import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {MAP_DATA,mapTiles} from '../dist/maps.js';
import {parseMap,MAX_MAP_BYTES,previousTile} from '../dist/map-schema.js';
import {Game} from '../dist/engine.js';
import {EVENTS,TILES} from '../dist/content.js';
import {encodeSave} from '../dist/save-schema.js';
import {resultSummary} from '../dist/replay.js';
import {slotSummary} from '../dist/save-menu.js';
const copy=x=>JSON.parse(JSON.stringify(x)),map=()=>copy(MAP_DATA[2]);
test('both built-in maps share the versioned data format and exact legacy command hashes',()=>{
 for(const expected of JSON.parse(readFileSync(new URL('./fixtures/map-baseline.json',import.meta.url)))){
  const data=MAP_DATA[expected.mapVersion];assert.equal(parseMap(data).tiles.length,48);assert.equal(mapTiles(expected.mapVersion),data.tiles);if(expected.mapVersion===1)assert.equal(TILES,data.tiles);
  const g=Game.create({mapVersion:expected.mapVersion,seed:53,playerCount:6,seatTypes:Array(6).fill('ai')});for(let i=0;i<100;i++)g.command('aiTurn');assert.equal(g.stateHash(),expected.hash);assert.equal(g.s.customMap,undefined);
 }
});
test('byte, depth, node, prototype, unknown executable fields and HTML restrictions reject without executing',()=>{
 assert.throws(()=>parseMap(' '.repeat(MAX_MAP_BYTES+1)));assert.throws(()=>parseMap('["'+ '奶'.repeat(60000)+'"]'));
 let deep={};for(let i=0;i<20;i++)deep={a:deep};assert.throws(()=>parseMap(deep),/过深/);
 const m=map();m.script='alert(1)';assert.throws(()=>parseMap(m),/不支持/);
 const html=map();html.tiles[1].name='<img src=x onerror=alert(1)>';assert.throws(()=>parseMap(html),/文字/);
 assert.throws(()=>parseMap('{"__proto__":{}}'),/原型/);
 const huge=map();huge.tiles=Array(6000).fill({});assert.throws(()=>parseMap(huge),/节点/);
});
test('unique IDs, valid references, bounded numbers and the sole start are mandatory',()=>{
 const mutations=[m=>m.tiles[1].id=0,m=>m.tiles[1].next=[999],m=>m.tiles[1].price=-1,m=>m.tiles[1].x=Infinity,m=>m.tiles[1].x=25,m=>m.tiles[1].group=6,m=>m.tiles[1].kind='javascript',m=>m.tiles[0].kind='property',m=>m.tiles[1].kind='start',m=>m.startingCash=999,m=>m.victory.target=4,m=>m.eventPool=['missing'],m=>m.pointStops=[999],m=>m.eventPool=[EVENTS[0].id,EVENTS[0].id]];
 for(const mutate of mutations){const m=map();mutate(m);assert.throws(()=>parseMap(m));}
});
test('reject isolated loops, unreachable start circuits, undeclared forks, branch cycles and wrong merges',()=>{
 const mutations=[m=>m.tiles[39].next=[1],m=>m.tiles[42].next=[40],m=>m.branches[0].merge=5,m=>m.branches=[],m=>m.tiles[40].next=[41,42],m=>m.tiles[35].next=[36,3],m=>m.tiles[1].next=[2,44]];
 for(const mutate of mutations){const m=map();mutate(m);assert.throws(()=>parseMap(m));}
});
test('old map schema migrates centrally; future schema and invalid old fields never guess a fallback',()=>{
 const old=map();old.schemaVersion=0;old.startingMoney=4800;delete old.startingCash;const original=JSON.stringify(old),m=parseMap(old);assert.equal(m.schemaVersion,1);assert.equal(m.startingCash,4800);assert.equal(JSON.stringify(old),original);
 const future=map();future.schemaVersion=99;assert.throws(()=>parseMap(future),/版本/);old.code='bad';assert.throws(()=>parseMap(old));
});
test('custom settings, names, event pools, win goals and pickups survive JSON save restoration',()=>{
 assert.throws(()=>Game.create({mapVersion:3}));
 const m=map();m.name='单事件挑战';m.eventPool=[EVENTS[0].id];m.startingCash=4800;m.victory={rounds:20,type:'netWorth',target:5000};m.pointStops=[1];
 const g=Game.create({customMap:m,seed:53});assert.equal(g.s.mapVersion,3);assert.equal(g.player.money,4800);assert.equal(g.s.maxRounds,20);assert.equal(g.s.mode.goal.target,5000);
 assert.equal(slotSummary(g.s).map,m.name);assert.ok(resultSummary(g).includes(m.name));
 const before=g.player.money;g.event();assert.equal(g.player.money,before+EVENTS[0].amount);
 const saved=encodeSave(g.s,1767139200000),restored=Game.restore(JSON.stringify(saved));assert.ok(restored);assert.equal(restored.stateHash(),g.stateHash());
 const bad=copy(saved);bad.customMap.tiles[0].next=[999];assert.equal(Game.restore(bad),null);
});
test('custom reverse without history follows graph predecessors, not 40-tile legacy arithmetic',()=>{
 const m=map();const a=m.tiles[1],b=m.tiles[2];a.next=[3];b.next=[1];m.tiles[0].next=[2];const g=Game.create({customMap:m,seed:53});
 assert.equal(previousTile(g.s,1,g.tiles),2);g.player.pos=1;g.player.history=[];g.player.reverse=true;assert.equal(g.preview(1)[0].id,2);g.s.phase='moving';g.s.remaining=1;g.s.moveSteps=0;g.step();assert.equal(g.player.pos,2);
});
test('six-player custom matches finish deterministically across save/restore on both graphs and goals',()=>{
 for(const version of [1,2])for(let seed=1;seed<=4;seed++){
  const m=copy(MAP_DATA[version]);m.victory={rounds:20,type:seed%2?'ranking':'netWorth',target:seed%2?0:5000};
  let g=Game.create({customMap:m,seed,playerCount:6,seatTypes:Array(6).fill('ai'),difficulty:'hard'});let commands=0;
  while(g.s.phase!=='finished'&&commands++<24000){
   assert.equal(g.command('aiTurn'),true,'custom AI stalled '+g.s.phase);
   if(commands%47===0){const restored=Game.restore(g.s);assert.ok(restored,'restore map '+version+' seed '+seed+' command '+commands+' phase '+g.s.phase);assert.equal(restored.stateHash(),g.stateHash());g=restored;}
   for(const p of g.s.players){assert.ok(g.tiles[p.pos]);assert.ok(p.money>=0);assert.ok(Number.isFinite(g.worth(p)));}
  }
  assert.equal(g.s.phase,'finished');assert.ok(Game.restore(g.s));assert.equal(g.s.maxRounds,20);
 }
});

test('minimum and maximum sized authored rings finish full six-player games and restore all tile IDs',()=>{
 for(const size of [16,64]){
  const m=map();m.branches=[];m.pointStops=[1,7];m.victory={rounds:20,type:'ranking',target:0};
  m.tiles=Array.from({length:size},(_,id)=>({id,kind:id===0?'start':'property',name:'地块'+id,description:'',x:20*Math.cos(id*2*Math.PI/size),z:20*Math.sin(id*2*Math.PI/size),group:id%6,price:300,next:[(id+1)%size]}));
  const g=Game.create({customMap:m,seed:53,playerCount:6,seatTypes:Array(6).fill('ai')});let steps=0;
  while(g.s.phase!=='finished'&&steps++<24000){assert.equal(g.command('aiTurn'),true);if(steps%97===0)assert.ok(Game.restore(g.s));}
  assert.equal(g.s.phase,'finished');assert.equal(g.tiles.length,size);assert.ok(Game.restore(g.s));
 }
});
