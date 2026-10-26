import {test} from 'node:test';import assert from 'node:assert/strict';import {Game} from '../dist/engine.js';import {playerInfo,playerPanel} from '../dist/player-panel.js';
test('selected profiles reconcile every asset component and remain independent of whose turn it is',()=>{
 const g=Game.create({seed:63,playerCount:6,seatLevels:['easy','hard','normal','hard','easy']});g.s.players.forEach((p,i)=>{p.money=1000+i*100;p.deposit=i*200;p.loan=i*50;p.vehicle=i%3;p.diceCount=p.vehicle+1;g.s.ownership[i+1]={player:i,level:i%5,buildingType:'residence'};});
 for(let current=0;current<6;current++){g.s.current=current;for(let id=0;id<6;id++){const before=JSON.stringify(g.s),q=playerInfo(g,id);assert.equal(q.p.id,id);assert.deepEqual(q.assets,g.assets(g.s.players[id]));assert.equal(q.assets.total,g.worth(g.s.players[id]));assert.equal(q.owned,1);assert.equal(q.c.id,g.s.players[id].character);assert.equal(q.difficulty?.name,id===0?undefined:['轻松','高手','标准','高手','轻松'][id-1]);playerPanel(g,id);assert.equal(JSON.stringify(g.s),before);}}
});
test('status descriptions distinguish fresh spirits, real departures, shields, forced steps and resting',()=>{
 const g=Game.create({seed:63});Object.assign(g.player,{skip:2,shield:true,spirit:'fortune',spiritTurns:4,slowTurns:2,forced:3,reverse:true});let q=playerInfo(g,0);assert.equal(q.states.length,6);assert.ok(q.states.some(s=>s.text.includes('之后 3 次')));assert.match(playerPanel(g,0),/休养 2 回合/);g.player.spiritTurns=2;assert.ok(playerInfo(g,0).states.some(s=>s.text.includes('结束 2 次')));g.player.alive=false;q=playerInfo(g,0);assert.equal(q.states.length,0);assert.equal(q.talent.active,false);assert.match(playerPanel(g,0),/data-act="locatePlayer" data-id="0" disabled/);
});
test('stock profits are taken from the selected portfolio including legacy unknown costs',()=>{
 const g=Game.create({seed:63});g.trade(0,5);g.s.market[0].price=120;g.trade(0,-2);g.s.current=1;let q=playerInfo(g,0);assert.equal(q.stocks.unrealized,60);assert.equal(q.stocks.realized,40);assert.equal(q.stocks.value,360);g.s.players[0].stockBook[0].cost=null;q=playerInfo(g,0);assert.equal(q.stocks.unrealized,null);assert.match(playerPanel(g,0),/成本未记录/);assert.ok(!playerPanel(g,0).includes('NaN'));
});
test('each selected character uses their own skill cycle and a profile never consumes a random draw',()=>{
 const g=Game.create({character:'naiwa',playerCount:6,seed:63});for(const p of g.s.players){p.departures=5;const before=g.s.seed,q=playerInfo(g,p.id);assert.equal(q.talent.count,5);if(p.character==='naidan')assert.equal(q.talent.remaining,3);if(p.character==='naicha')assert.equal(q.talent.remaining,1);assert.equal(g.s.seed,before);}assert.equal(playerInfo(g,99),null);assert.equal(playerInfo(g,-1),null);assert.equal(playerInfo(g,1.5),null);
});
