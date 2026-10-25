import {test} from 'node:test';import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';
import {BANK_ACTIONS,bankLimit,bankQuote,bankPanel} from '../dist/bank-panel.js';

test('bank always previews the human account during AI turns and refuses to operate the AI account',()=>{
 const g=Game.create({seed:49});g.s.players[0].money=111;g.s.players[0].deposit=222;g.s.players[1].money=999;g.s.current=1;g.player.bankAccess=true;
 const before=JSON.stringify(g.s),html=bankPanel(g);assert.ok(html.includes('<b>111</b>'));assert.ok(html.includes('<b>222</b>'));assert.ok(!html.includes('<b>999</b>'));assert.match(html,/奶蛙的小金库/);for(const kind of Object.keys(BANK_ACTIONS)){assert.equal(bankQuote(g,kind,100).allowed,false);assert.match(bankQuote(g,kind,100).reason,/电脑回合/);}assert.equal(JSON.stringify(g.s),before);
});

test('bank projections agree with actual allowed transactions, closed days, borrowing limits and debt rules',()=>{
 for(const phase of ['roll','moving','end','debt'])for(const round of [1,3,7])for(const access of [true,false])for(const loan of [0,500,1800,1830])for(const kind of Object.keys(BANK_ACTIONS))for(const amount of [1,300,700,1800]){
  const g=Game.create({seed:49,randomStart:false});g.s.phase=phase;g.s.round=round;Object.assign(g.player,{money:600,deposit:700,loan,bankAccess:access});const before=JSON.stringify(g.s),quote=bankQuote(g,kind,amount),copy=new Game(JSON.parse(before)),actual=copy.bank(kind,amount);assert.equal(quote.allowed,!!actual,`${phase}/${round}/${access}/${loan}/${kind}/${amount}`);if(actual)for(const key of ['money','deposit','loan'])assert.equal(quote.after[key],copy.player[key]);assert.equal(JSON.stringify(g.s),before);
 }
});

test('amount shortcuts use actual account limits and invalid inputs cannot produce misleading projections',()=>{
 const g=Game.create({seed:49,randomStart:false});g.player.bankAccess=true;Object.assign(g.player,{money:600,deposit:700,loan:500});assert.deepEqual(Object.keys(BANK_ACTIONS).map(k=>bankLimit(g,k)),[600,700,1300,500]);
 for(const amount of ['',0,-1,1.5,NaN,Infinity,Number.MAX_SAFE_INTEGER+1]){const q=bankQuote(g,'deposit',amount);assert.equal(q.allowed,false);assert.equal(q.after,null);}
 g.player.loan=1830;assert.equal(bankLimit(g,'borrow'),0);assert.equal(bankQuote(g,'borrow',1).allowed,false);assert.equal(bankQuote(g,'repay',300).allowed,true);
});
