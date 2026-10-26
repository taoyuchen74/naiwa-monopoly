import {test} from 'node:test';import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';import {runInNewContext} from 'node:vm';
import {Game} from '../dist/engine.js';import {CHARACTERS} from '../dist/content.js';
import {debtInfo,debtPanel,debtBankDraft} from '../dist/debt-panel.js';
const clone=g=>new Game(JSON.parse(JSON.stringify(g.s)));
const debt=()=>{const g=Game.create({seed:56,randomStart:false});g.s.phase='debt';g.s.debt={amount:500,to:1,label:'租金'};g.player.money=100;return g;};

test('debt presentation uses the already settled obligation without applying character discounts twice',()=>{
 for(const c of CHARACTERS)for(const spirit of [null,'misfortune'])for(const to of [null,1]){const g=Game.create({character:c.id,seed:56});g.player.money=0;g.player.deposit=0;g.player.spirit=spirit;g.charge(370,to,'待支付费用');const state=JSON.stringify(g.s),d=debtInfo(g);assert.equal(d.amount,g.s.debt.amount);assert.equal(d.gap,d.amount);debtPanel(g);assert.equal(JSON.stringify(g.s),state);}
});

test('available funding equals real permitted liquidation and borrowing on open, closed and inaccessible days',()=>{
 for(const round of [1,3,7])for(const access of [false,true])for(const loan of [0,1800,1840]){
  const g=Game.create({seed:56});g.trade(0,10);g.player.money=70;g.player.deposit=310;g.player.loan=loan;g.player.bankAccess=access;g.player.vehicle=2;g.s.round=round;g.s.phase='debt';g.s.debt={amount:4000,to:null,label:'费用'};g.s.ownership={1:{player:0,level:2},2:{player:0,level:1,buildingType:'chain'},4:{player:0,level:5,buildingType:'hotel'}};
  const before=JSON.stringify(g.s),d=debtInfo(g),copy=clone(g);if(copy.canBank()){copy.bank('withdraw',copy.player.deposit);const credit=Math.max(0,1800-copy.player.loan);if(credit)assert.ok(copy.bank('borrow',credit));}if(round%7!==0)copy.player.stocks.forEach((qty,i)=>{if(qty)assert.ok(copy.trade(i,-qty));});for(const o of copy.owned(copy.player))assert.ok(copy.sell(o.tile.id));assert.equal(d.available,copy.player.money);assert.equal(copy.player.vehicle,2);assert.equal(JSON.stringify(g.s),before);if(round===3||!access)assert.equal(d.bank.available,0);if(round===7)assert.equal(d.stocks.available,0);
 }
});

test('bank drafts fund the exact remaining gap and payment reaches the creditor once',()=>{
 const g=debt();Object.assign(g.player,{deposit:150,loan:1000,bankAccess:true});let draft=debtBankDraft(g);assert.deepEqual(draft,{kind:'withdraw',amount:'150'});assert.ok(g.bank(draft.kind,+draft.amount));draft=debtBankDraft(g);assert.deepEqual(draft,{kind:'borrow',amount:'250'});const creditor=g.s.players[1].money;assert.ok(g.bank(draft.kind,+draft.amount));assert.equal(g.s.players[1].money,creditor);const quote=debtInfo(g);assert.equal(quote.canPay,true);assert.equal(quote.after,0);assert.ok(g.settle());assert.equal(g.player.money,quote.after);assert.equal(g.s.players[1].money,creditor+500);assert.equal(g.settle(),false);assert.equal(debtInfo(g),null);
 const closed=debt();closed.s.round=3;closed.player.bankAccess=true;assert.equal(debtBankDraft(closed),null);
});

test('unavailable funding stays disabled and imported creditor labels remain inert',()=>{
 const g=debt();g.s.round=7;g.s.debt.label='<img src=x onerror=alert(1)>';let html=debtPanel(g);assert.ok(html.includes('&lt;img src=x'));assert.ok(!html.includes('<img src=x'));for(const button of html.match(/<button[^>]+data-act="panel"[^>]*>/g))assert.ok(button.includes('disabled'));assert.match(html,/周日休市/);g.player.money=500;html=debtPanel(g);assert.ok(!html.match(/<button[^>]+data-act="settle"[^>]*>/)[0].includes('disabled'));assert.equal(debtInfo(g).after,0);
});

test('rendering a locked debt dialog does not re-enable its unavailable contextual choices',()=>{
 const source=readFileSync(new URL('../dist/app.js',import.meta.url),'utf8'),start=source.indexOf('document.querySelectorAll(',source.indexOf('function render()')),end=source.indexOf("$('cardCount')",start),code=source.slice(start,end),names=['deeds','cards','bank','stocks','shop'],dock=Object.fromEntries(names.map(n=>[n,{disabled:false}])),funding={disabled:true};
 const context={started:true,pinned:true,p:{human:true},s:{phase:'debt'},scene:{studio:false},document:{querySelectorAll:selector=>selector.startsWith('.dock-tabs')?Object.values(dock):[...Object.values(dock),funding],querySelector:selector=>dock[selector.match(/data-panel=([a-z]+)/)[1]]}};runInNewContext(code,context);assert.equal(funding.disabled,true);for(const n of ['deeds','cards','bank','stocks'])assert.equal(dock[n].disabled,true);
});
