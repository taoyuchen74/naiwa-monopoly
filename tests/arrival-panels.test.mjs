import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';
import {visitQuote,quotedLandingFee,branchPanel,estatePanel} from '../dist/arrival-panels.js';
function site(type,character='naiwa',spirit=null){const g=Game.create({seed:73,character,talents:true});g.player.pos=1;g.player.spirit=spirit;g.s.ownership[1]={player:1,level:2,buildingType:type};if(['gas','chain','park'].includes(type))g.s.ownership[1].level=1;g.s.moveSteps=8;return g;}

test('every hotel night and mall draw matches the exact quoted outcome after skills, spirits and rounding',()=>{
 for(const type of ['hotel','mall'])for(const character of ['naiwa','naishu','naicha'])for(const spirit of [null,'misfortune'])for(let draw=0;draw<3;draw++){
  const g=site(type,character,spirit),snapshot=JSON.stringify(g.s);let calls=0;g.int=()=>{calls++;return draw;};const q=visitQuote(g,1);assert.equal(JSON.stringify(g.s),snapshot);assert.equal(calls,0);const before=g.player.money;g.collectProperty(1);assert.equal(calls,1);assert.equal(before-g.player.money,q.options[draw].amount);assert.ok(q.options[draw].amount>=q.min&&q.options[draw].amount<=q.max);if(type==='hotel')assert.equal(g.player.skip,draw+1);
 }
});

test('previewing a decision cannot reroll its result or alter a saved match',()=>{
 for(const type of ['hotel','mall','residence','chain','gas']){const g=site(type),h=Game.restore(g.s);for(let i=0;i<8;i++)visitQuote(g,1);g.collectProperty(1);h.collectProperty(1);assert.deepEqual(g.s,h.s);}
});

test('free facilities, resting landlords and shields are quoted in actual collection order',()=>{
 for(const type of ['park','research']){const g=site(type);g.player.shield=true;const q=visitQuote(g,1);assert.equal(q.max,0);assert.equal(q.exemption,'free');g.collectProperty(1);assert.equal(g.player.shield,true);}
 const resting=site('hotel');resting.s.players[1].skip=1;resting.player.shield=true;assert.equal(visitQuote(resting,1).exemption,'rest');resting.collectProperty(1);assert.equal(resting.player.shield,true);assert.equal(resting.player.skip,0);
 const shield=site('hotel');shield.player.shield=true;assert.equal(visitQuote(shield,1).max,0);shield.collectProperty(1);assert.equal(shield.player.shield,false);assert.equal(shield.player.skip,0);
});

test('fixed property fees and route labels use actual visit rules instead of an unlabelled average',()=>{
 for(const type of ['residence','chain','gas']){const g=site(type,'naishu','misfortune'),q=visitQuote(g,1),before=g.player.money;assert.equal(q.random,false);assert.equal(q.min,q.max);g.collectProperty(1);assert.equal(before-g.player.money,q.min);}
 const g=site('hotel'),q=visitQuote(g,1);assert.equal(quotedLandingFee(g,{id:1,rent:g.rent(1)}),`费用 ${q.range}`);assert.ok(q.max>q.min);
});

test('both city and classic fork panels use real preview paths and valid directional controls without consuming randomness',()=>{
 for(const mapVersion of [1,2])for(const pos of [15,35]){const g=Game.create({mapVersion,seed:91});g.player.pos=pos;g.s.phase='branch';g.s.remaining=6;g.s.moveTotal=9;g.s.moveSteps=3;const before=JSON.stringify(g.s),html=branchPanel(g,r=>g.tiles[r.id].name);assert.equal(JSON.stringify(g.s),before);assert.equal((html.match(/class="route-drawing"/g)||[]).length,2);for(const next of g.tiles[pos].next){assert.ok(html.includes(`data-id="${next}"`));for(const r of g.preview(6,{first:next}))assert.ok(html.includes(g.tiles[r.id].name));}assert.ok(html.includes('polyline fill="none"'));}
});

test('estate decisions distinguish certain debt from possible high draws and keep shielded visits free',()=>{
 const g=site('hotel'),q=visitQuote(g,1);g.player.money=q.min-1;g.player.deposit=0;assert.match(estatePanel(g),/现金与存款不足，付款时需要筹款/);g.player.money=q.min;assert.match(estatePanel(g),/较高费用可能超过现金与存款/);g.player.shield=true;const html=estatePanel(g);assert.ok(html.includes('使用已备免租'));assert.ok(!html.includes('arrival-warning'));assert.equal(g.player.shield,true);
});
