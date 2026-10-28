import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game,createSaveRepository} from '../dist/engine.js';
import {CARDS,CARD_TIMINGS,EVENTS,EVENT_RULES} from '../dist/content.js';
import {RULES} from '../dist/rules-config.js';
import {eventPresentation} from '../dist/event-panel.js';
import {cardTargetOptions,cardTargetPanel} from '../dist/card-target-panel.js';
import {cardsPanel} from '../dist/cards-panel.js';
import {propertyChargeOptions} from '../dist/businesses.js';
import {visitQuote} from '../dist/arrival-panels.js';
const make=(options={})=>Game.create({mapVersion:1,seed:17,talents:false,...options});
function event(g,kind){const e=EVENTS.findIndex(e=>e.kind===kind);g.int=n=>n===EVENTS.length?e:0;g.event();}
function roundTrip(g){const h=Game.restore(JSON.stringify(g.s));assert.ok(h);assert.equal(h.stateHash(),g.stateHash());return h;}
function tickInsurance(g){g.s.phase='end';g.end();while(g.s.current!==0){g.s.phase='end';g.end();}}

test('twelve cards and thirteen events expose shared timing, target and duration data',()=>{
 assert.equal(Object.keys(CARDS).length,12);assert.equal(EVENTS.length,13);
 for(const c of Object.values(CARDS)){assert.ok(c.name&&c.description&&c.target);assert.ok(Number.isInteger(c.price)&&c.price>0);assert.ok(CARD_TIMINGS[c.timing]);assert.ok(Number.isInteger(c.duration));}
 for(const e of EVENTS){assert.ok(typeof e.negative==='boolean');assert.ok(e.target);assert.ok(Number.isInteger(e.duration));}
});
test('new card costs use coupons, keep the fifteen-card limit and overflow compensation',()=>{
 for(const key of ['ward','swap','insurance']){const g=make();g.player.pos=9;g.player.tickets=150;const cash=g.player.money;assert.ok(g.command('shop',{key}));assert.equal(g.player.tickets,150-CARDS[key].price);assert.equal(g.player.money,cash);assert.ok(g.player.cards.includes(key));g.player.cards=Array(RULES.handLimit).fill('ward');assert.equal(g.shop(key),false);g.giveCard(g.player,key);assert.equal(g.player.cards.length,RULES.handLimit);assert.equal(g.player.money,cash+RULES.cardOverflowCash);}
});
test('ward blocks the complete negative event before stock/cash/skip mutations and conserves guardian',()=>{
 for(const kind of ['loss','rest','closure']){const g=make();g.player.cards=['ward'];g.s.ownership[1]={player:0,level:3,buildingType:'hotel'};assert.ok(g.command('card',{index:0}));g.player.spirit='guardian';g.player.spiritTurns=3;const cash=g.player.money,market=structuredClone(g.s.market),skip=g.player.skip;event(g,kind);assert.equal(g.player.money,cash);assert.deepEqual(g.s.market,market);assert.equal(g.player.skip,skip);assert.equal(g.player.eventWard,false);assert.equal(g.player.spirit,'guardian');assert.equal(g.player.spiritTurns,3);assert.equal(g.s.ownership[1].closedUntilRound,undefined);assert.deepEqual(eventPresentation(g).outcomes,['负面效果已抵消']);roundTrip(g);}
});
test('ward protects against misfortune, but not direct rent, tax or hospital charges',()=>{
 const g=make();g.player.cards=['ward'];g.card(0);g.int=()=>1;g.attach();assert.equal(g.player.spirit,null);assert.equal(g.player.eventWard,false);
 for(const kind of ['hospital','tax']){const h=make();h.player.eventWard=true;h.player.pos=h.tiles.find(t=>t.kind===kind).id;const before=h.player.money;h.land();assert.ok(h.player.money<before);assert.equal(h.player.eventWard,true);}
 const h=make();h.player.eventWard=true;h.s.ownership[1]={player:1,level:2};const cash=h.player.money;h.collectProperty(1);assert.ok(h.player.money<cash);assert.equal(h.player.eventWard,true);
});
test('ward is one stored charge, cannot stack, and positive or no-effect events do not consume it',()=>{
 const g=make();g.player.cards=['ward','ward'];assert.ok(g.card(0));const before=JSON.stringify(g.s);assert.equal(g.card(0),false);assert.equal(JSON.stringify(g.s),before);event(g,'gain');assert.equal(g.player.eventWard,true);event(g,'closure');assert.equal(g.player.eventWard,true);assert.match(g.s.notice.text,/无影响/);roundTrip(g);
});
test('swap accepts only another alive player at a different position and rejects all other phases',()=>{
 const g=make();g.player.cards=['swap'];g.s.players[1].pos=10;g.s.players[2].pos=20;g.s.players[2].alive=false;
 assert.deepEqual(g.swapTargets().map(p=>p.id),[1]);
 for(const target of [0,2,99,-1,1.5]){const before=JSON.stringify(g.s);assert.equal(g.command('card',{index:0,target}),false);assert.equal(JSON.stringify(g.s),before);}
 for(const phase of ['end','moving','branch','buy','estate','event','debt']){g.s.phase=phase;const before=JSON.stringify(g.s);assert.equal(g.command('card',{index:0,target:1}),false);assert.equal(JSON.stringify(g.s),before);}
});
test('swap exchanges only positions and clears stale paths, without arrival, coupons, debt or RNG',()=>{
 const g=make();g.player.cards=['swap'];g.player.pos=39;g.player.history=[38];g.player.reverse=true;g.player.forced=6;g.player.bankAccess=true;g.player.buildSite=39;
 const q=g.s.players[1];q.pos=0;q.history=[1];q.reverse=true;q.bankAccess=true;q.buildSite=1;
 g.s.blocks[0]=2;const cash=g.s.players.map(p=>p.money),tickets=g.s.players.map(p=>p.tickets),seed=g.s.seed;
 assert.ok(g.command('card',{index:0,target:1}));assert.equal(g.player.pos,0);assert.equal(q.pos,39);assert.equal(g.s.phase,'roll');assert.equal(g.s.seed,seed);assert.equal(g.s.blocks[0],2);assert.deepEqual(g.s.players.map(p=>p.money),cash);assert.deepEqual(g.s.players.map(p=>p.tickets),tickets);assert.equal(g.player.forced,6);
 for(const p of [g.player,q]){assert.deepEqual(p.history,[]);assert.equal(p.reverse,false);assert.equal(p.bankAccess,false);assert.equal(p.buildSite,null);}roundTrip(g);
});
test('swap target UI previews valid opponent ids without mutating the game or granting building actions',()=>{
 const g=make();g.player.cards=['swap'];g.s.players[1].pos=10;const before=JSON.stringify(g.s),options=cardTargetOptions(g,0),html=cardTargetPanel(g,0,String);
 assert.deepEqual(options.map(o=>o.target),[1]);assert.match(html,/data-target="1"/);assert.match(html,/不触发落地/);assert.ok(!html.includes('data-act="construct"'));assert.equal(JSON.stringify(g.s),before);
});
test('insurance lasts three personal end-turns including activation, rest counts, and duplicates cannot refresh',()=>{
 let g=make({playerCount:2});g.player.cards=['insurance','insurance'];assert.ok(g.command('card',{index:0}));assert.equal(g.player.insuranceTurns,CARDS.insurance.duration);assert.equal(g.card(0),false);
 for(let left=CARDS.insurance.duration;left>0;left--){assert.equal(g.player.insuranceTurns,left);assert.equal(g.payment(200,1),Math.round(200*(1-CARDS.insurance.reduction)));g=roundTrip(g);g.player.skip=1;tickInsurance(g);}
 assert.equal(g.player.insuranceTurns,0);assert.equal(g.payment(200,1),200);assert.ok(g.card(0));
});
test('rent stacking is nominal fee → operating boost → insurance/spirit/talent → one final payment rounding',()=>{
 const g=make({character:'naishu',talents:true});g.player.pos=1;g.s.ownership[1]={player:1,level:2,buildingType:'residence'};g.s.players[1].operatingUntilRound=3;g.player.insuranceTurns=3;g.player.spirit='misfortune';
 const nominal=g.nominalRent(1),fee=Math.round(nominal*EVENT_RULES.operations.multiplier),expected=Math.round(fee*1.25*(1-CARDS.insurance.reduction)*.8),before=g.player.money,owner=g.s.players[1].money;
 assert.equal(g.rent(1),fee);assert.equal(visitQuote(g,1).max,expected);g.collectProperty(1);assert.equal(before-g.player.money,expected);assert.equal(g.s.players[1].money-owner,expected);assert.equal(g.transfers.items.at(-1).amount,expected);
 assert.equal(g.payment(100,null),125); // Insurance does not cover public fees.
});
test('full rent shield is consumed before insurance and avoids hotel rest; insurance alone does not avoid rest',()=>{
 const g=make();g.player.pos=1;g.s.ownership[1]={player:1,level:2,buildingType:'hotel'};g.player.insuranceTurns=3;g.player.shield=true;const before=g.player.money,seed=g.s.seed;g.collectProperty(1);assert.equal(g.player.money,before);assert.equal(g.player.skip,0);assert.equal(g.player.shield,false);assert.equal(g.player.insuranceTurns,3);assert.equal(g.s.seed,seed);
 g.int=()=>0;const q=visitQuote(g,1);g.collectProperty(1);assert.equal(before-g.player.money,q.options[0].amount);assert.equal(g.player.skip,1);
});
test('closure is checked before rent shield and random hotel/mall choices; previews agree exactly',()=>{
 for(const type of ['hotel','mall','gas','residence','chain']){const g=make();g.player.pos=1;g.player.shield=true;g.s.ownership[1]={player:1,level:type==='chain'||type==='gas'?1:2,buildingType:type,closedUntilRound:2};g.s.players[1].operatingUntilRound=2;const before=g.player.money,seed=g.s.seed;assert.equal(g.rent(1),0);assert.equal(visitQuote(g,1).max,0);g.collectProperty(1);assert.equal(g.player.money,before);assert.equal(g.player.shield,true);assert.equal(g.player.skip,0);assert.equal(g.s.seed,seed);g.s.round=3;assert.ok(g.rent(1)>0);}
});
test('three events persist actual stock/dividend and facility effects in their notices and saves',()=>{
 const g=make();g.player.stocks[3]=50;g.player.stockBook[3].cost=7500;g.player.spirit='fortune';const before=g.player.money,price=g.s.market[3].price;event(g,'dividend');assert.equal(g.s.market[3].price,Math.round(price*1.08));assert.equal(g.player.money-before,Math.round(EVENT_RULES.dividend.cap*1.25));assert.ok(eventPresentation(g).outcomes.includes('奶币 +'+(g.player.money-before)));roundTrip(g);
 g.s.ownership[1]={player:0,level:2,buildingType:'hotel'};g.s.ownership[2]={player:0,level:2,buildingType:'residence'};event(g,'operations');assert.equal(g.player.operatingUntilRound,g.s.round+EVENT_RULES.operations.duration);event(g,'operations');assert.equal(g.player.operatingUntilRound,g.s.round+EVENT_RULES.operations.duration);event(g,'closure');assert.equal(g.s.ownership[1].closedUntilRound,g.s.round+EVENT_RULES.closure.duration);assert.equal(g.s.ownership[2].closedUntilRound,undefined);assert.equal(eventPresentation(roundTrip(g)).outcomes.length,1);
});
test('facility bonuses do not boost free park coupons, research output, vacant land or liquidation price',()=>{
 const g=make();g.player.operatingUntilRound=3;g.s.ownership[1]={player:0,level:1,buildingType:'park'};g.player.pos=1;const tickets=g.player.tickets;g.land();assert.equal(g.player.tickets,tickets+10);assert.equal(g.rent(1),0);g.s.ownership[2]={player:0,level:0};assert.equal(g.rent(2),g.nominalRent(2));
 const cost=g.cost(g.tiles[1],1,'park'),cash=g.player.money;g.s.phase='end';g.sell(1);assert.equal(g.player.money-cash,Math.round(cost*RULES.propertySaleRatio));
});
test('old saves initialize new effects without asset/RNG loss; malformed effects and notice outcomes refuse restore',()=>{
 const g=make(),old=structuredClone(g.s);old.rules=7;for(const p of old.players){delete p.eventWard;delete p.insuranceTurns;delete p.operatingUntilRound;}
 const raw=JSON.stringify(old),h=Game.restore(raw);assert.ok(h);assert.equal(h.s.rules,9);assert.equal(h.player.money,g.player.money);assert.equal(h.s.seed,g.s.seed);assert.equal(h.player.eventWard,false);assert.equal(h.player.insuranceTurns,0);assert.equal(JSON.stringify(old),raw);
 for(const [key,value]of [['eventWard',1],['insuranceTurns',-1],['insuranceTurns',4],['operatingUntilRound',999]]){const state=structuredClone(g.s);state.players[0][key]=value;assert.equal(Game.restore(state),null);}
 const bad=structuredClone(g.s);bad.ownership[1]={player:0,level:1,closedUntilRound:-1};assert.equal(Game.restore(bad),null);bad.ownership={};bad.notice={title:'x',text:'x',mood:'idle',outcomes:[{}]};assert.equal(Game.restore(bad),null);
});
test('new effect saves and command deduplication round-trip every manual slot and JSON export',()=>{
 const g=make();g.player.cards=['ward','insurance','swap'];g.s.players[1].pos=10;g.command('card',{index:0});g.command('card',{index:0});g.s.ownership[1]={player:0,level:2,closedUntilRound:2};g.player.operatingUntilRound=3;
 const data=new Map(),repo=createSaveRepository({getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)});
 for(const slot of ['auto','manual1','manual2','manual3']){repo.save(slot,g.s);const h=Game.restore(repo.export(slot));assert.equal(h.stateHash(),g.stateHash());assert.equal(h.dispatch({type:'card',payload:{index:0},playerId:0,sequence:1}).code,'DUPLICATE');}
});

test('insured debt persists its final amount and settles once without a second reduction',()=>{
 const g=make();g.player.pos=1;g.player.money=0;g.player.insuranceTurns=3;g.player.bankAccess=true;g.s.ownership[1]={player:1,level:5};const due=g.payment(g.rent(1),1),owner=g.s.players[1].money;
 g.collectProperty(1);assert.equal(g.s.phase,'debt');assert.equal(g.s.debt.amount,due);const h=roundTrip(g);assert.ok(h.command('bank',{kind:'borrow',amount:due}));assert.ok(h.command('settle'));assert.equal(h.s.players[1].money-owner,due);assert.equal(h.player.money,0);assert.equal(h.command('settle'),false);
});

test('operations and insurance use the same hotel/mall outcomes in preview and actual collection',()=>{
 for(const type of ['hotel','mall'])for(let choice=0;choice<3;choice++){
  const g=make();g.player.pos=1;g.s.ownership[1]={player:1,level:3,buildingType:type};g.s.players[1].operatingUntilRound=3;g.player.insuranceTurns=3;g.player.spirit='misfortune';g.player.money=8000;g.int=()=>choice;
  const quoted=visitQuote(g,1).options[choice].amount,raw=propertyChargeOptions(g,1)[choice].amount,before=g.player.money;assert.equal(quoted,g.payment(raw,1));g.collectProperty(1);assert.equal(before-g.player.money,quoted);
 }
});

test('AI arms insurance before a high expected rent without consuming dice RNG',()=>{
 const g=make({difficulty:'normal'});g.player.human=false;g.player.cards=['insurance'];for(const id of [1,2,4,5])g.s.ownership[id]={player:1,level:5};const seed=g.s.seed;
 assert.ok(g.ai());assert.equal(g.player.insuranceTurns,CARDS.insurance.duration);assert.equal(g.s.phase,'roll');assert.equal(g.s.seed,seed);
});
test('AI uses new protection and swap deterministically without consuming RNG during valuation',()=>{
 for(const difficulty of ['normal','hard']){const g=make({difficulty});g.player.human=false;g.player.cards=['ward'];const h=Game.restore(g.s),seed=g.s.seed;assert.ok(g.ai());assert.ok(g.player.eventWard);assert.equal(g.s.seed,seed);h.ai();assert.equal(g.stateHash(),h.stateHash());}
 const g=make({difficulty:'hard'});g.player.human=false;g.player.cards=['swap'];g.player.money=3200;for(const id of [1,2,4,5])g.s.ownership[id]={player:1,level:5};g.s.players[1].pos=20;g.s.players[2].pos=0;const h=Game.restore(g.s),seed=g.s.seed;assert.ok(g.ai());assert.equal(g.player.pos,20);assert.equal(g.s.seed,seed);h.ai();assert.equal(g.stateHash(),h.stateHash());
 const easy=make({difficulty:'easy'});easy.player.human=false;easy.player.cards=['swap'];easy.s.players[1].pos=20;easy.ai();assert.ok(easy.player.cards.includes('swap'));
});
