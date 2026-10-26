import {test} from 'node:test';import assert from 'node:assert/strict';import {Game} from '../dist/engine.js';import {shopInfo,shopPanel} from '../dist/shop-panel.js';import {CHARACTERS} from '../dist/content.js';import {vehicleImage} from '../dist/illustrations.js';
const store=character=>{const g=Game.create({seed:59,character});g.player.pos=g.tiles.find(t=>t.kind==='shop').id;return g;};
test('displayed card prices, balances and inventories match real purchases for every character',()=>{
 for(const c of CHARACTERS){const g=store(c.id);g.player.tickets=150;const before=JSON.stringify(g.s);for(const q of shopInfo(g).cards){const real=new Game(JSON.parse(before));assert.ok(q.allowed);assert.ok(real.shop(q.key));assert.equal(real.player.tickets,q.ticketsAfter);assert.equal(150-real.player.tickets,q.price);assert.equal(real.player.cards.filter(k=>k===q.key).length,q.count+1);}shopPanel(g);assert.equal(JSON.stringify(g.s),before);}
});
test('vehicle quotes charge the full price and replace equipment without using card allowance',()=>{
 for(const current of [0,1,2])for(const phase of ['roll','end']){const g=store();g.s.phase=phase;g.player.vehicle=current;g.player.diceCount=current+1;g.player.shopUsed=2;const before=JSON.stringify(g.s);for(const q of shopInfo(g).vehicles){const real=new Game(JSON.parse(before));assert.equal(q.owned,current>=q.id);assert.equal(q.allowed,current<q.id);assert.equal(real.vehicle(q.id),q.allowed);if(q.allowed){assert.equal(real.player.money,q.cashAfter);assert.equal(real.player.diceCount,q.dice);assert.equal(real.player.shopUsed,2);assert.equal(real.player.vehicle,q.id);}}assert.equal(JSON.stringify(g.s),before);}
});
test('shop choices explain cash, points, bag space and per-turn limits using actual engine guards',()=>{
 const g=store();g.player.money=0;g.player.tickets=0;let q=shopInfo(g);assert.ok(q.vehicles.every(v=>!v.allowed&&v.reason.includes('现金不足')));assert.ok(q.cards.every(c=>!c.allowed&&c.reason.includes('点券不足')));g.player.tickets=150;g.player.cards=Array(15).fill('dice');q=shopInfo(g);assert.equal(q.space,0);assert.ok(q.cards.every(c=>c.reason.includes('卡包已满')&&!g.shop(c.key)));g.player.cards=[];g.player.shopUsed=2;q=shopInfo(g);assert.equal(q.remaining,0);assert.ok(q.cards.every(c=>c.reason.includes('已购卡 2 张')&&!g.shop(c.key)));
});
test('browsing on an AI turn keeps the human wallet, equipment, discount and counts and disables buying',()=>{
 const g=store('naichong');g.player.money=456;g.player.tickets=73;g.player.vehicle=1;g.s.current=1;g.player.pos=g.tiles.find(t=>t.kind==='shop').id;const q=shopInfo(g);assert.equal(q.p.id,0);assert.equal(q.p.money,456);assert.equal(q.p.tickets,73);assert.equal(q.cards.find(c=>c.key==='dice').price,24);assert.ok(q.cards.every(c=>!c.allowed));assert.ok(q.vehicles.every(v=>!v.allowed));assert.match(shopPanel(g),/奶虫的补给清单/);
});
test('out-of-store and debt phases cannot shop, and the two equipment illustrations remain distinct without WebGL',()=>{
 const g=Game.create({seed:59});assert.ok(shopInfo(g).cards.every(c=>!c.allowed));g.player.pos=g.tiles.find(t=>t.kind==='shop').id;g.s.phase='debt';assert.ok(shopInfo(g).vehicles.every(v=>!v.allowed));assert.notEqual(vehicleImage(1),vehicleImage(2));const html=shopPanel(g);assert.match(html,/原工具不折价/);assert.match(html,/不占购卡次数/);
});
