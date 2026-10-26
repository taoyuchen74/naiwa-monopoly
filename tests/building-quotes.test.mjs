import {test} from 'node:test';import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';import {BUSINESSES,propertyChargeOptions} from '../dist/businesses.js';import {CHARACTERS,CARDS} from '../dist/content.js';import {buildingQuote,businessPanel} from '../dist/business-panel.js';
function site(character='naiwa',mapVersion=2){const g=Game.create({character,mapVersion,seed:57});g.s.phase='end';g.player.pos=1;g.player.buildSite=1;g.s.ownership={1:{player:0,level:0},2:{player:0,level:2},4:{player:0,level:1,buildingType:'chain'}};return g;}
test('building quotes match real construction costs, balances and charges for every facility, role and map',()=>{
 for(const c of CHARACTERS)for(const map of [1,2])for(const type of Object.keys(BUSINESSES)){
  const g=site(c.id,map),before=JSON.stringify(g.s),q=buildingQuote(g,1,type);assert.ok(q.allowed);assert.equal(JSON.stringify(g.s),before);const real=new Game(JSON.parse(before));const cash=real.player.money;assert.ok(real.construct(1,type));assert.equal(q.cost,cash-real.player.money);assert.equal(q.cashAfter,real.player.money);assert.deepEqual(q.options,propertyChargeOptions(real,1));assert.equal(real.s.ownership[1].level,q.level);
 }
});
test('upgrade quotes match every actual floor and preserve research progress and the random stream',()=>{
 for(const [type,b]of Object.entries(BUSINESSES))for(let level=1;level<b.max;level++){
  const g=site();g.s.ownership[1]={player:0,level,buildingType:type,researchProgress:2,researchCard:'dice'};const before=JSON.stringify(g.s),q=buildingQuote(g,1),real=new Game(JSON.parse(before));assert.ok(real.upgrade(1));assert.equal(q.level,level+1);assert.equal(q.cashAfter,real.player.money);assert.deepEqual(q.options,propertyChargeOptions(real,1));assert.equal(JSON.stringify(g.s),before);assert.match(businessPanel(g,1),/加盖后/);assert.equal(JSON.stringify(g.s),before);
 }
});
test('quotes include new branch pricing, all random outcomes and non-cash facilities without inventing fixed gas returns',()=>{
 const g=site();let q=buildingQuote(g,1,'chain');assert.equal(q.options[0].amount,150);assert.match(q.detail,/2 间/);q=buildingQuote(g,1,'hotel');assert.equal(q.options.length,3);assert.equal(q.options[2].amount,q.options[0].amount*3);assert.match(buildingQuote(g,1,'mall').detail,/75% \/ 100% \/ 150%/);q=buildingQuote(g,1,'research');assert.match(q.detail,new RegExp(CARDS.dice.name));assert.match(q.income,/3 次出发/);assert.match(buildingQuote(g,1,'park').income,/10 点券/);q=buildingQuote(g,1,'gas');assert.match(q.income,/45—300/);assert.match(q.detail,/自行车另加 60/);
});
test('construction choices explain insufficient money, remote access and used visits while preserving one-build rules',()=>{
 const g=site();g.player.money=0;let q=buildingQuote(g,1,'hotel');assert.equal(q.allowed,false);assert.match(q.reason,new RegExp(String(q.cost)));assert.equal(q.cashAfter,-q.cost);let html=businessPanel(g,1);assert.equal((html.match(/data-act="construct"/g)||[]).length,7);assert.equal((html.match(/data-type="[a-z]+" disabled/g)||[]).length,7);g.player.money=3200;g.player.pos=2;assert.match(buildingQuote(g,1).reason,/停到这里/);g.player.pos=1;g.player.buildsUsed=1;assert.match(buildingQuote(g,1).reason,/已完成/);g.player.buildsUsed=0;assert.ok(g.construct(1,'residence'));assert.equal(buildingQuote(g,1).allowed,false);g.s.ownership[1].level=5;assert.equal(buildingQuote(g,1),null);assert.match(businessPanel(g,1),/已达到/);
});
test('resting ownership shows nominal construction potential with an explicit real-payment caveat',()=>{
 const g=site();g.player.skip=2;const q=buildingQuote(g,1,'chain');assert.equal(q.options[0].amount,150);assert.equal(g.player.skip,2);assert.match(businessPanel(g,1),/实际到访还受业主休养/);
});
