import {test} from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {Game} from '../dist/engine.js';import {BUSINESSES} from '../dist/businesses.js';import {disposalInfo,disposalPanel} from '../dist/disposal-panel.js';import {deedsPanel} from '../dist/deeds-panel.js';
function lot(type='residence',level=2){const g=Game.create({seed:62});g.s.phase='end';g.player.pos=1;g.player.buildSite=1;g.s.ownership={1:{player:0,level,buildingType:type}};if(type==='research')Object.assign(g.s.ownership[1],{researchCard:'shield',researchProgress:2});return g;}
test('disposal previews reconcile actual cash, retained land and net assets for every building and level',()=>{
 for(const [type,b]of Object.entries(BUSINESSES))for(let level=0;level<=b.max;level++)for(const kind of ['sell','demolish']){
  if(!level&&kind==='demolish')continue;const g=lot(type,level),before=JSON.stringify(g.s),q=disposalInfo(g,1,kind),real=new Game(JSON.parse(before)),worth=real.worth(real.player);assert.ok(q.allowed);disposalPanel(g,1,kind);assert.equal(JSON.stringify(g.s),before);assert.ok(real[kind](1));assert.equal(real.player.money,q.cashAfter);assert.equal(real.player.money-g.player.money,q.refund);assert.equal(worth-real.worth(real.player),q.valueLoss);assert.equal(real.s.ownership[1]?.level,kind==='sell'?undefined:0);if(kind==='demolish')assert.equal(real.s.ownership[1].buildingType,'residence');
 }
});
test('debt sale previews the exact remaining gap without paying or clearing the obligation',()=>{
 for(const money of [0,400]){const g=lot();g.s.phase='debt';g.s.debt={amount:500,to:1,label:'租金'};g.player.money=money;const q=disposalInfo(g,1),creditor=g.s.players[1].money;assert.equal(q.debt.gap,Math.max(0,500-q.cashAfter));assert.equal(disposalInfo(g,1,'demolish').allowed,false);assert.ok(g.sell(1));assert.equal(g.s.phase,'debt');assert.equal(g.s.players[1].money,creditor);assert.equal(g.s.debt.amount,500);assert.equal(g.player.money,q.cashAfter);}
});
test('the confirmation is a pure preview, including lost research progress, and does not remove property on cancellation',()=>{
 const g=lot('research',3),before=JSON.stringify(g.s);for(const kind of ['sell','demolish']){const html=disposalPanel(g,1,kind);assert.match(html,/研发进度 2\/3 将清除/);assert.match(html,/data-panel="deeds"/);assert.equal(JSON.stringify(g.s),before);}g.s.phase='roll';assert.equal(disposalInfo(g,1,'demolish').allowed,false);assert.equal(disposalInfo(g,1,'sell').allowed,true);g.s.phase='end';g.player.pos=2;assert.equal(disposalInfo(g,1,'demolish').allowed,false);g.s.ownership[1].player=1;assert.equal(disposalInfo(g,1),null);
});
test('deed and map-detail entry points open a sale confirmation before the actual engine sale',()=>{
 const g=lot(),html=deedsPanel(g);assert.match(html,/data-act="confirmSell"/);assert.ok(!html.includes('data-act="sell"'));const app=readFileSync(new URL('../dist/app.js',import.meta.url),'utf8');assert.match(app,/btn\('变卖地产','confirmSell'/);assert.match(app,/if\(act==='confirmSell'\)\{openPanel\('confirmSell',id\);return;/);assert.match(disposalPanel(g,1),/data-act="sell"/);
});
