import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game,createSaveRepository} from '../dist/engine.js';
import {modeConfig,validMode,localDate,dailySeed,modeProgress} from '../dist/modes.js';
import {resultsPanel} from '../dist/results-panel.js';
import {shopInfo} from '../dist/shop-panel.js';
const make=(id,options={})=>Game.create({seed:17,mode:modeConfig({id,date:'2026-10-28'}),...options});
test('mode schema bounds initial conditions, cards, objective and real calendar dates',()=>{
 for(const id of ['standard','short','business','daily'])assert.ok(validMode(modeConfig({id})));
 for(const change of [m=>m.configVersion=2,m=>m.id='evil',m=>m.rounds=7,m=>m.speed=4,m=>m.initial.loan=1801,m=>m.initial.cash=-1,m=>m.initial.propertiesPerPlayer=3,m=>m.allowedCards=[],m=>m.allowedCards=['evil'],m=>m.goal.target=-1,m=>m.fixedSeed=3]){const m=modeConfig();change(m);assert.equal(validMode(m),false);assert.throws(()=>Game.create({mode:m}));}
 assert.throws(()=>dailySeed('2026-02-30'));assert.throws(()=>modeConfig({id:'unknown'}));
});
test('short mode uses 20 rounds, quick pacing, unchanged rules and isolated config ownership',()=>{
 const config=modeConfig({id:'short'}),g=Game.create({mode:config});assert.equal(g.s.maxRounds,20);assert.equal(g.s.options.speed,2);assert.equal(g.player.money,3200);assert.equal(g.player.loan,0);config.initial.cash=1;assert.equal(g.s.mode.initial.cash,3200);
});
test('business grants balanced deterministic lots and outstanding loans without charging cash',()=>{
 const g=make('business',{playerCount:6});assert.equal(g.s.maxRounds,20);for(const p of g.s.players){assert.equal(p.loan,800);assert.equal(p.money,3200);assert.equal(g.owned(p).length,2);assert.ok(g.owned(p).every(o=>o.level===1));}assert.ok(Game.restore(g.s));
 const h=make('business',{playerCount:6});assert.equal(g.stateHash(),h.stateHash());
});
test('restricted card paths reject purchase/use/research and compensate explicit rewards',()=>{
 const g=make('business');g.player.pos=g.tiles.find(t=>t.kind==='shop').id;g.player.tickets=150;
 for(const key of ['steal','demolish','swap']){assert.equal(g.shop(key),false);assert.equal(g.canUseCard(key),false);const before=g.player.money;g.giveCard(g.player,key);assert.ok(g.player.money>before);assert.ok(!g.player.cards.includes(key));assert.ok(!shopInfo(g).cards.some(c=>c.key===key));}
 for(let n=0;n<100;n++){g.player.cards=[];g.giveCard(g.player);assert.ok(g.s.mode.allowedCards.includes(g.player.cards[0]));}
 const own=g.owned(g.player)[0];g.s.ownership[own.tile.id]={player:0,level:5,buildingType:'research',researchCard:'steal'};g.player.pos=own.tile.id;g.player.buildSite=own.tile.id;g.s.phase='end';assert.equal(g.setResearch(own.tile.id,'steal'),false);
 g.player.cards=['swap'];assert.match(g.cardHint('swap'),/模式/);assert.equal(Game.restore(g.s),null);
});
test('daily seed uses local calendar fields, survives next day restores and ignores provided seed',()=>{
 const date=localDate(new Date(2026,9,28,23,59));assert.equal(date,'2026-10-28');assert.equal(dailySeed(date),dailySeed(date));assert.notEqual(dailySeed(date),dailySeed('2026-10-29'));
 const a=make('daily',{seed:1}),b=make('daily',{seed:9});assert.equal(a.stateHash(),b.stateHash());assert.equal(a.s.setupSeed,dailySeed(date));assert.equal(Game.restore(JSON.stringify(a.s)).stateHash(),a.stateHash());
});
test('objective is judged at settlement and separates success, unmet target and bankruptcy',()=>{
 const g=make('business');g.player.money=20000;assert.equal(modeProgress(g)[0].success,false);g.s.round=20;g.finish();assert.equal(modeProgress(g)[0].success,true);assert.equal(g.s.winner,0);assert.match(resultsPanel(g),/挑战成功/);
 const h=make('business');h.s.round=20;for(const p of h.s.players)p.money=0;h.finish();assert.equal(h.s.winner,null);assert.match(resultsPanel(h),/轮数已用尽，净资产未达目标/);
 h.s.players[0].alive=false;assert.match(modeProgress(h)[0].reason,/破产/);h.s.round=2;assert.match(modeProgress(h)[1].reason,/提前结束/);
});
test('old saves gain classic configuration while slots, JSON and hotseat keep resolved modes',()=>{
 const legacy=Game.create({rounds:80}).s;delete legacy.mode;legacy.rules=9;const g=Game.restore(legacy);assert.ok(g);assert.equal(g.s.mode.id,'standard');assert.equal(g.s.mode.rounds,80);
 const data=new Map(),repo=createSaveRepository({getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)}),h=make('business',{seatTypes:['human','human','ai']});for(const slot of ['auto','manual1','manual2','manual3']){repo.save(slot,h.s);assert.equal(Game.restore(repo.load(slot)).stateHash(),h.stateHash());}assert.ok(h.s.handoff);
 const bad=structuredClone(h.s);bad.mode.rounds=30;assert.equal(Game.restore(bad),null);bad.mode.rounds=20;bad.mode.goal.target=-2;assert.equal(Game.restore(bad),null);
});
test('all new modes complete deterministically through original AI and restore mid-game',()=>{
 for(const id of ['short','business','daily'])for(const mapVersion of [1,2]){let g=make(id,{mapVersion,seatTypes:['ai','ai','ai']});const start=JSON.stringify(g.s);let n=0;while(g.s.phase!=='finished'&&n++<20000){assert.ok(g.ai());if(n===100){const restored=Game.restore(g.s);assert.ok(restored);assert.equal(restored.stateHash(),g.stateHash());g=restored;}}assert.equal(g.s.phase,'finished');assert.ok(g.s.round<=g.s.mode.rounds);const h=Game.restore(start);let i=0;while(h.s.phase!=='finished'&&i++<20000)assert.ok(h.ai());assert.equal(h.stateHash(),g.stateHash());}
});
