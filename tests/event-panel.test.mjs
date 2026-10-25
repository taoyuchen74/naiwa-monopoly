import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';
import {CHARACTERS,EVENTS} from '../dist/content.js';
import {eventPanel,eventPresentation} from '../dist/event-panel.js';

test('event illustrations describe actual character-modified settlements without rerolling or changing the match',()=>{
 for(const c of CHARACTERS)for(const spirit of [null,'fortune','misfortune','guardian'])for(let index=0;index<EVENTS.length;index++){
  const g=Game.create({character:c.id,seed:91});g.player.pos=g.tiles.find(t=>t.kind==='event').id;g.player.spirit=spirit;g.int=n=>n===EVENTS.length?index:0;const beforeCash=g.player.money;g.event();const state=JSON.stringify(g.s),d=eventPresentation(g),html=eventPanel(g),delta=g.player.money-beforeCash;
  if(delta)assert.ok(d.outcomes.includes(`奶币 ${delta<0?'−':'+'}${Math.abs(delta)}`),`${c.id}/${spirit}/${EVENTS[index].name}`);
  if(EVENTS[index].amount&&delta)assert.ok(d.text.includes(`${Math.abs(delta)} 奶币`));
  assert.equal(d.character,c.id);assert.ok(html.includes('data-act="ack"'));assert.match(html,/class="event-actor"/);assert.equal(JSON.stringify(g.s),state);const restored=Game.restore(g.s);assert.ok(restored);assert.deepEqual(eventPresentation(restored),d);
 }
});

test('full card bags show the compensation actually paid, rather than claiming another card was received',()=>{
 for(const name of ['选择你的奶伴','野生狗奶补给'])for(const spirit of [null,'fortune']){
  const g=Game.create({seed:8});g.player.cards=Array(15).fill('dice');g.player.spirit=spirit;g.player.skip=1;const index=EVENTS.findIndex(e=>e.name===name);g.int=n=>n===EVENTS.length?index:0;const before=g.player.money;g.event();const d=eventPresentation(g);assert.ok(d.outcomes.includes('奶币 +'+(g.player.money-before)));assert.match(d.text,/折算为奶币/);assert.equal(g.player.cards.length,15);assert.ok(!d.outcomes.some(t=>t.includes('×1')));if(name==='野生狗奶补给')assert.equal(g.player.skip,0);
 }
});

test('guardian interceptions do not claim lost money, gained money or a freshly granted three-turn spirit',()=>{
 const g=Game.create({seed:8});g.player.spirit='guardian';g.int=n=>n===EVENTS.length?2:0;g.event();const d=eventPresentation(g);assert.deepEqual(d.outcomes,['负面效果已抵消']);assert.equal(d.icon,'shield');assert.equal(d.mood,'happy');
 g.player.spirit='guardian';g.int=()=>1;g.attach();assert.deepEqual(eventPresentation(g).outcomes,['负面效果已抵消']);
});

test('public stop notices show actual charges and grants, and imported prose is escaped',()=>{
 for(const kind of ['hospital','tax','rest']){const g=Game.create({character:'naicha',seed:3});g.player.spirit='misfortune';g.player.pos=g.tiles.find(t=>t.kind===kind).id;const before=g.player.money;g.land();const delta=g.player.money-before;assert.ok(eventPresentation(g).outcomes.includes(`奶币 ${delta<0?'−':'+'}${Math.abs(delta)}`));}
 const g=Game.create({seed:3});g.s.notice={title:'安全显示',text:'<img src=x onerror=alert(1)>',mood:'happy'};const html=eventPanel(g);assert.ok(!html.includes('<img src=x'));assert.ok(html.includes('&lt;img src=x'));
});
