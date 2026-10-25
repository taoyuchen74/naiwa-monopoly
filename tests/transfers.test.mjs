import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {Game} from '../dist/engine.js';
import {TransferFeed,pulseTransferCards} from '../dist/transfers.js';
import {MoneyTransfer,TRANSFER_DURATION,transferPoint} from '../dist/money-transfer.js';
import {EffectSystem} from '../dist/effects.js';
function site(type='residence'){const g=Game.create({talents:false,seed:31});g.player.pos=1;g.s.ownership[1]={player:1,level:1,buildingType:type};return g;}

test('receipts report actual discounted and variable business payments without changing RNG or saved financial state',()=>{
 for(const type of ['residence','hotel','mall','gas']){const g=site(type),cash=g.player.money,owner=g.s.players[1].money;g.collectProperty(1);const r=g.transfers.items[0];assert.ok(r);assert.equal(r.amount,cash-g.player.money);assert.equal(r.amount,g.s.players[1].money-owner);assert.equal(r.from,0);assert.equal(r.to,1);assert.equal(r.tile,1);assert.equal(Object.isFrozen(r),true);const saved=JSON.stringify(g.s),restored=Game.restore(saved);assert.deepEqual(restored.s,g.s);assert.equal(restored.transfers.items.length,0);assert.ok(!('transfers'in JSON.parse(saved)));}
 const g=site();g.s.talents=true;g.player.deposit=100;g.player.money=5;g.collectProperty(1);assert.equal(g.transfers.items[0].amount,g.s.players[1].money-3200);assert.ok(g.transfers.items[0].amount>5);
});

test('shielded visits, free facilities, rested landlords, public fees and unpaid debt produce no transfer receipt',()=>{
 for(const type of ['park','research']){const g=site(type);g.collectProperty(1);assert.equal(g.transfers.sequence,0);}
 const shield=site();shield.player.shield=true;shield.collectProperty(1);assert.equal(shield.transfers.sequence,0);
 const resting=site();resting.s.players[1].skip=1;resting.collectProperty(1);assert.equal(resting.transfers.sequence,0);
 const publicFee=site();publicFee.charge(40);assert.equal(publicFee.transfers.sequence,0);
 const debt=site();debt.player.money=0;debt.collectProperty(1);assert.equal(debt.s.phase,'debt');assert.equal(debt.transfers.sequence,0);assert.equal(debt.settle(),false);assert.equal(debt.transfers.sequence,0);debt.player.money=debt.s.debt.amount;assert.equal(debt.settle(),true);assert.equal(debt.transfers.items.length,1);assert.equal(debt.transfers.items[0].amount,debt.s.players[1].money-3200);assert.equal(debt.settle(),false);assert.equal(debt.transfers.items.length,1);
});

test('liquidation receipts contain only recovered money and takeover receipts identify the real seller',()=>{
 const g=site();g.player.money=20;g.player.deposit=10;g.s.ownership={};g.s.debt={amount:800,to:1,label:'rent'};g.s.phase='debt';g.bankrupt();assert.equal(g.transfers.items[0].amount,30);assert.equal(g.transfers.items[0].kind,'liquidation');assert.equal(g.s.players[1].money,3230);
 const buy=site();buy.player.cards=['steal'];buy.s.phase='roll';const price=buy.takeoverPrice(1);assert.equal(buy.card(0,1),true);assert.equal(buy.transfers.items[0].amount,price);assert.equal(buy.transfers.items[0].kind,'takeover');assert.equal(buy.transfers.items[0].to,1);assert.equal(buy.s.ownership[1].player,0);
});

test('redraws and imported history never replay receipts, and long simulations retain a bounded runtime buffer',()=>{
 const g=site(),feed=new TransferFeed();assert.deepEqual(feed.read(g),[]);g.collectProperty(1);assert.equal(feed.read(g).length,1);assert.deepEqual(feed.read(g),[]);const h=Game.restore(g.s);assert.deepEqual(feed.read(h),[]);h.collectProperty(1);assert.equal(feed.read(h).length,1);
 for(let i=0;i<80;i++){g.player.money=3200;g.charge(1,1);}assert.equal(g.transfers.items.length,16);assert.equal(g.transfers.sequence,81);assert.equal(new TransferFeed().read(g).length,0);
});

test('coin paths connect exact endpoints, arc above the board, and cannot change the game state',()=>{
 const g=site();g.collectProperty(1);const saved=JSON.stringify(g.s),from=new THREE.Vector3(-10,.24,3),to=new THREE.Vector3(8,.24,-4),e=new MoneyTransfer(from,to,100);assert.ok(transferPoint(e.from,e.to,0).equals(e.from));assert.ok(transferPoint(e.from,e.to,1).equals(e.to));assert.ok(transferPoint(e.from,e.to,.5).y>e.from.y+1);
 for(let t=0;t<TRANSFER_DURATION;t+=.02){e.update(t);for(const coin of e.coins)assert.ok([...coin.position.toArray(),...coin.scale.toArray()].every(Number.isFinite));}assert.equal(JSON.stringify(g.s),saved);e.dispose();
 const parent=new THREE.Group(),fx=new EffectSystem(parent);fx.transfer(from,to,100);assert.equal(fx.items.length,1);fx.update(TRANSFER_DURATION);assert.equal(fx.items.length,0);assert.equal(parent.children.length,0);fx.transfer(from,to,100);fx.clear();assert.equal(parent.children.length,0);const calm=new EffectSystem(parent,{reduced:true});calm.transfer(from,to,100);assert.equal(calm.items.length,0);
});

test('a later payment pulse survives earlier cleanup and clears exactly when its own animation completes',()=>{
 const cards=[0,1].map(()=>{const values=new Set();return{dataset:{},classList:{add:k=>values.add(k),remove:(...keys)=>keys.forEach(k=>values.delete(k)),contains:k=>values.has(k)}};}),root={querySelector:s=>cards[+s.match(/"(\d+)"/)[1]]};
 const clearA=pulseTransferCards(root,{from:0,to:1,amount:40});assert.equal(cards[0].dataset.transferLabel,'−40');assert.equal(cards[1].dataset.transferLabel,'+40');const clearB=pulseTransferCards(root,{from:0,to:1,amount:40});clearA();assert.equal(cards[1].dataset.transferLabel,'+40');clearB();assert.equal(cards[1].dataset.transferLabel,undefined);assert.equal(cards[0].classList.contains('money-out'),false);
 const parent=new THREE.Group(),fx=new EffectSystem(parent);const clear=pulseTransferCards(root,{from:0,to:1,amount:60});fx.transfer(new THREE.Vector3(),new THREE.Vector3(5,0,0),60,clear);fx.update(.3);assert.equal(cards[1].dataset.transferLabel,'+60');fx.clear();assert.equal(cards[1].dataset.transferLabel,undefined);
});
