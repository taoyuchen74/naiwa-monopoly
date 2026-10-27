import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';
import {VEHICLES,CARDS} from '../dist/content.js';
import {chooseMove,expectedMove,couponValue,landingValue} from '../dist/strategy.js';
import {cardsPanel} from '../dist/cards-panel.js';
import {estatePanel} from '../dist/arrival-panels.js';

function arrival(){const g=Game.create({talents:false,seed:53});g.player.cards=['steal'];g.s.ownership[1]={player:1,level:2};g.player.forced=1;g.roll();while(g.s.phase==='moving')g.step();assert.equal(g.s.phase,'estate');return g;}
function shop({difficulty='normal',mapVersion=2,phase='roll',round=1,money=5000,pos}={}){const g=Game.create({talents:false,seed:53,difficulty,mapVersion});g.s.phase=phase;g.s.round=round;Object.assign(g.player,{human:false,cards:[],tickets:0,vehicle:1,diceCount:2,money,pos:pos??(mapVersion===1?27:30),aiTradeDone:true});return g;}
function plot({difficulty='normal',tickets=0,money=520,round=30}={}){const g=Game.create({talents:false,seed:53,playerCount:2,difficulty});g.s.phase='end';g.s.round=round;Object.assign(g.player,{human:false,cards:[],tickets,money,pos:1,buildSite:1,aiTradeDone:true});g.s.ownership[1]={player:0,level:0};return g;}

test('takeover card is rejected outside the pre-rent arrival stage without consuming money, cards or RNG',()=>{
 for(const phase of ['roll','end','departure','moving','branch','buy','event','debt','finished']){const g=arrival();g.s.phase=phase;const before=JSON.stringify(g.s);assert.equal(g.canUseCard('steal'),false,phase);assert.match(g.cardHint('steal'),/抵达对手地产、付租前/);assert.equal(g.card(0,1),false,phase);assert.equal(JSON.stringify(g.s),before);}
});
test('actual arrival can restore its unpaid decision, buy once at 125 percent and never also pay rent',()=>{
 const g=arrival(),cash=g.player.money,seller=g.s.players[1].money,price=g.takeoverPrice(1);assert.equal(cash,3200);assert.equal(seller,3200);assert.ok(price>=g.cost(g.tiles[1],2)*1.25);assert.equal(g.canUseCard('steal'),true);assert.equal(g.canUseCard('shield'),false);assert.match(estatePanel(g),/data-act="estateBuy"/);
 const h=Game.restore(JSON.stringify(g.s));assert.ok(h);assert.ok(h.resolveEstate(true));assert.equal(h.s.phase,'end');assert.equal(h.player.money,cash-price);assert.equal(h.s.players[1].money,seller+price);assert.equal(h.s.ownership[1].player,0);assert.equal(h.player.cards.length,0);assert.equal(h.player.buildSite,1);assert.equal(h.resolveEstate(true),false);assert.deepEqual(Game.restore(h.s).s,h.s);
});
test('declining a takeover pays rent once and cannot use the retained card later on the same plot',()=>{
 const g=arrival(),cash=g.player.money,rent=g.rent(1);assert.ok(g.resolveEstate(false));assert.equal(g.player.money,cash-rent);const after=JSON.stringify(g.s);assert.equal(g.card(0,1),false);assert.equal(g.resolveEstate(false),false);assert.equal(JSON.stringify(g.s),after);assert.deepEqual(Game.restore(g.s).s,g.s);g.s.phase='roll';assert.equal(g.card(0,1),false);assert.deepEqual(g.player.cards,['steal']);
});
test('direct card execution also closes the unpaid stage and produces a valid resumable state',()=>{const g=arrival();g.player.cards.push('steal');assert.ok(g.card(0,1));assert.equal(g.s.phase,'end');assert.equal(g.player.buildSite,1);const after=JSON.stringify(g.s);assert.equal(g.card(0,1),false);assert.equal(g.resolveEstate(false),false);assert.equal(JSON.stringify(g.s),after);assert.deepEqual(Game.restore(g.s).s,g.s);});
test('card description and bag timing explain the same arrival-only rule',()=>{const g=Game.create({talents:false});g.player.cards=['steal'];assert.match(CARDS.steal.description,/抵达对手地产、付租前/);assert.match(cardsPanel(g),/class="card-timing">抵达付租前/);assert.match(cardsPanel(g),/暂不可用/);});

test('standard and hard AI upgrade bicycles at a shop in either action window when three dice justify the cost',()=>{
 for(const mapVersion of [1,2])for(const difficulty of ['normal','hard'])for(const phase of ['roll','end']){const g=shop({mapVersion,difficulty,phase}),before=JSON.stringify(g.s),best=chooseMove(g),three=expectedMove(g,3);assert.ok(three.value>best.value);assert.equal(JSON.stringify(g.s),before);const h=Game.restore(g.s),seed=g.s.seed,money=g.player.money;assert.ok(g.ai());assert.ok(h.ai());assert.deepEqual(g.s,h.s);assert.equal(g.s.seed,seed);assert.equal(g.player.vehicle,2);assert.equal(g.player.diceCount,3);assert.equal(g.player.money,money-VEHICLES[2].price);assert.equal(g.player.shopUsed,0);assert.deepEqual(Game.restore(g.s).s,g.s);}
});
test('AI retains its bicycle with low cash, few rounds, weak three-dice returns or a non-shop location',()=>{
 for(const options of [{money:2000},{round:48},{pos:10},{pos:29}]){const g=shop(options);g.ai();assert.equal(g.player.vehicle,1,JSON.stringify(options));}
 for(const field of ['forced','slowTurns','skip']){const g=shop();g.player[field]=1;g.ai();assert.equal(g.player.vehicle,1,field);}
 const easy=shop({difficulty:'easy'});easy.ai();assert.equal(easy.player.vehicle,1);assert.equal(easy.s.dice.length,1);
});
test('standard and hard AI compare three dice with the best existing option rather than assuming more is better',()=>{
 const g=shop({pos:10});const best=chooseMove(g),three=expectedMove(g,3);assert.ok(three.value>best.value);assert.ok((three.value-best.value)*12<600);g.ai();assert.equal(g.player.vehicle,1);
 const car=shop();car.player.vehicle=2;const bestCar=chooseMove(car);assert.equal(bestCar.count,3);const seed=car.s.seed;car.ai();assert.equal(car.s.dice.length,3);assert.notEqual(car.s.seed,seed);
});
test('coupon utility respects scarcity and the cap; park landings value only coupons that fit',()=>{
 const g=plot();for(const [tickets,value]of [[0,15],[100,3],[149,.3],[150,0]]){g.player.tickets=tickets;assert.equal(couponValue(g,10),value);g.s.ownership[1]={player:1,level:1,buildingType:'research'};const r={id:1,rent:0,points:0},baseline=landingValue(g,r);g.s.ownership[1].buildingType='park';const before=JSON.stringify(g.s);assert.ok(Math.abs(landingValue(g,r)-baseline-value)<1e-10);assert.equal(JSON.stringify(g.s),before);}
 g.player.tickets=145;g.s.ownership[1].buildingType='research';const baseline=landingValue(g,{id:1,rent:0,points:10});g.s.ownership[1].buildingType='park';assert.equal(landingValue(g,{id:1,rent:0,points:10}),baseline);
});
test('AI can build an affordable park without inventing cash income or exceeding its reserve',()=>{
 for(const difficulty of ['normal','hard']){const g=plot({difficulty}),before=g.player.money,cost=g.buildPrice(g.tiles[1],'park'),seed=g.s.seed,h=Game.restore(g.s);g.ai();h.ai();assert.deepEqual(g.s,h.s);assert.equal(g.s.ownership[1].buildingType,'park');assert.equal(g.s.ownership[1].level,1);assert.equal(g.player.money,before-cost);assert.equal(g.player.tickets,0);assert.equal(g.player.buildsUsed,1);assert.equal(g.s.seed,seed);assert.ok(Game.restore(g.s));}
});
test('park competes with affordable buildings but is excluded at the coupon cap or too close to game end',()=>{
 const candidate=plot({round:40,money:1700});candidate.ai();assert.equal(candidate.s.ownership[1].buildingType,'park');
 for(const options of [{tickets:150},{round:48},{money:400},{difficulty:'easy'}]){const g=plot(options);g.ai();assert.notEqual(g.s.ownership[1].buildingType,'park',JSON.stringify(options));}
 const ordinary=plot({money:1700,round:10});ordinary.ai();assert.notEqual(ordinary.s.ownership[1].buildingType,'park');assert.equal(ordinary.s.ownership[1].level,1);
});
