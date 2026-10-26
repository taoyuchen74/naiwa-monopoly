import {test} from 'node:test';import assert from 'node:assert/strict';import {Game} from '../dist/engine.js';
function debtor(){const g=Game.create({seed:61});for(let i=0;i<4;i++)g.trade(i,1);g.player.human=false;g.player.money=0;g.s.phase='debt';g.s.debt={amount:350,to:1,label:'租金'};return g;}
test('one AI action sells one stock holding, leaving payment to its own paced action',()=>{
 const g=debtor(),logs=g.s.logs.length,creditor=g.s.players[1].money;assert.ok(g.ai());assert.equal(g.s.logs.length-logs,1);assert.equal(g.s.phase,'debt');assert.deepEqual(g.player.stocks,[0,1,1,1]);assert.equal(g.player.money,100);assert.equal(g.s.players[1].money,creditor);
});
test('a restored AI funds the debt step by step and credits the recipient exactly once at settlement',()=>{
 let g=debtor();const creditor=g.s.players[1].money;
 for(const cash of [100,220,300,450]){const before=g.s.logs.length;assert.ok(g.ai());assert.equal(g.s.phase,'debt');assert.equal(g.player.money,cash);assert.equal(g.s.players[1].money,creditor);assert.equal(g.s.logs.length-before,1);const restored=Game.restore(g.s);assert.ok(restored);assert.deepEqual(restored.s,g.s);g=restored;}
 assert.ok(g.ai());assert.equal(g.s.phase,'end');assert.equal(g.player.money,100);assert.equal(g.s.players[1].money,creditor+350);assert.equal(g.s.debt,null);assert.equal(g.settle(),false);
});
test('AI sells only the required whole shares, preserves surplus holdings and pays before further liquidation',()=>{
 const g=debtor();g.player.stocks=[10,1,1,1];const before=g.s.seed;assert.ok(g.ai());assert.deepEqual(g.player.stocks,[6,1,1,1]);assert.equal(g.player.money,400);assert.equal(g.s.phase,'debt');assert.equal(g.s.seed,before);assert.ok(g.ai());assert.deepEqual(g.player.stocks,[6,1,1,1]);assert.equal(g.player.money,50);assert.equal(g.s.phase,'end');
 const paid=debtor();paid.player.money=400;assert.ok(paid.ai());assert.deepEqual(paid.player.stocks,[1,1,1,1]);assert.equal(paid.player.money,50);
});
test('withdrawals and loans are separate from payment, use only the shortage and keep bank restrictions',()=>{
 for(const deposit of [0,800]){const g=debtor();g.player.stocks=[0,0,0,0];g.player.bankAccess=true;g.player.deposit=deposit;const recipient=g.s.players[1].money,n=g.s.logs.length;assert.ok(g.ai());assert.equal(g.s.phase,'debt');assert.equal(g.player.money,350);assert.equal(g.s.players[1].money,recipient);assert.equal(g.s.logs.length-n,1);assert.equal(g.player.deposit,deposit?450:0);assert.equal(g.player.loan,deposit?0:350);assert.ok(g.ai());assert.equal(g.s.phase,'end');assert.equal(g.s.players[1].money,recipient+350);}
 const closed=debtor();closed.s.round=3;closed.player.deposit=800;closed.player.bankAccess=true;assert.ok(closed.ai());assert.equal(closed.player.deposit,800);assert.equal(closed.player.loan,0);assert.equal(closed.player.money,100);
});
test('Sunday holdings remain intact while the AI sells one permitted property or seeks a loan',()=>{
 const g=debtor();g.s.round=7;g.s.ownership={1:{player:0,level:1}};const sale=Math.round(g.cost(g.tiles[1],1)*.65);assert.ok(g.ai());assert.equal(g.s.ownership[1],undefined);assert.deepEqual(g.player.stocks,[1,1,1,1]);assert.equal(g.player.money,sale);assert.equal(g.s.phase,'debt');const bank=debtor();bank.s.round=7;bank.player.bankAccess=true;assert.ok(bank.ai());assert.equal(bank.player.loan,350);assert.deepEqual(bank.player.stocks,[1,1,1,1]);assert.equal(bank.s.phase,'debt');
});
