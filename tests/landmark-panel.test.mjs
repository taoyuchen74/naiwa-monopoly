import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';
import {landmarkInfo,landmarkPanel} from '../dist/landmark-panel.js';

test('every public landmark in both maps has illustrated rules without consuming rewards or randomness',()=>{
 for(const mapVersion of [1,2]){
  const g=Game.create({mapVersion,seed:91}),before=JSON.stringify(g.s);
  for(const t of g.tiles.filter(t=>t.kind!=='property')){
   const d=landmarkInfo(g,t),html=landmarkPanel(g,t);assert.equal(d.rules.length,3);assert.ok(d.value&&d.unit&&d.summary);assert.match(html,/class="landmark-model"/);assert.match(html,/class="item-art"|class="building-thumb"/);assert.ok(html.includes(`地图第 ${t.id+1} 格`));
  }
  assert.equal(JSON.stringify(g.s),before);
 }
});

test('displayed public fees and grants match actual arrivals with character and spirit modifiers',()=>{
 for(const character of ['naiwa','naicha'])for(const spirit of [null,'fortune','misfortune'])for(const kind of ['hospital','tax','rest']){
  const g=Game.create({character,seed:8});g.player.spirit=spirit;const t=g.tiles.find(t=>t.kind===kind),quote=Number(landmarkInfo(g,t).value.replace('−','-')),before=g.player.money;g.player.pos=t.id;g.land();assert.equal(g.player.money-before,quote,`${character}/${spirit}/${kind}`);if(kind==='hospital')assert.equal(g.player.skip,1);if(kind==='rest')assert.equal(g.player.skip,0);
 }
 for(const talents of [true,false])for(const spirit of [null,'fortune']){
  const g=Game.create({character:'naiwa',talents,seed:6});g.player.spirit=spirit;const quoted=Number(landmarkInfo(g,g.tiles[0]).value),before=g.player.money;g.player.pos=39;g.s.phase='moving';g.s.remaining=1;g.step();assert.equal(g.player.money-before,quoted);
 }
});

test('bank and shop detail actions respect the human turn, visits and closing days',()=>{
 const g=Game.create({seed:7}),bank=g.tiles.find(t=>t.kind==='bank'),shop=g.tiles.find(t=>t.kind==='shop'),stocks=g.tiles.find(t=>t.kind==='stock');
 assert.equal(landmarkInfo(g,bank).status.tone,'neutral');assert.equal(g.player.bankAccess,false);
 g.player.bankAccess=true;assert.equal(landmarkInfo(g,bank).status.tone,'ready');g.s.round=3;assert.equal(landmarkInfo(g,bank).status.tone,'closed');
 g.s.round=1;g.player.pos=shop.id;assert.equal(landmarkInfo(g,shop).status.tone,'ready');g.s.phase='debt';assert.equal(landmarkInfo(g,shop).status.tone,'neutral');
 g.s.phase='roll';g.s.current=1;assert.equal(landmarkInfo(g,bank).action.enabled,false);assert.equal(landmarkInfo(g,shop).action.enabled,false);assert.equal(landmarkInfo(g,stocks).action.enabled,true);
 g.s.round=7;assert.equal(landmarkInfo(g,stocks).status.tone,'closed');
});

test('opponent-turn previews use the human character fee instead of the active computer fee',()=>{
 const g=Game.create({character:'naicha',seed:3}),t=g.tiles.find(t=>t.kind==='hospital');g.s.current=1;g.player.spirit='misfortune';assert.equal(landmarkInfo(g,t).value,'−50');assert.notEqual(g.payment(100),50);
});
