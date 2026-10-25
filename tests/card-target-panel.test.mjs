import {test} from 'node:test';import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';import {BUSINESSES,businessType} from '../dist/businesses.js';
import {cardTargetOptions,cardTargetPanel,cardRouteDrawing} from '../dist/card-target-panel.js';
const clone=g=>new Game(JSON.parse(JSON.stringify(g.s)));
test('each illustrated dice destination agrees with real forced movement through forks, reverse paths and obstacles',()=>{
 for(const mapVersion of [1,2])for(const pos of [0,15,35])for(const reverse of [false,true])for(const obstacle of [false,true]){
  const g=Game.create({seed:51,mapVersion,talents:false});g.player.pos=pos;g.player.reverse=reverse;g.player.cards=['dice'];if(obstacle)g.s.blocks[g.tiles[pos].next[0]]=1;const state=JSON.stringify(g.s),options=cardTargetOptions(g,0);assert.equal(options.length,6);
  for(const option of options)for(const r of option.results){const copy=clone(g);assert.equal(copy.card(0,option.target),true);assert.equal(copy.roll(),true);while(copy.s.remaining>0){assert.equal(copy.step(r.path[copy.s.moveSteps]),true);}assert.equal(copy.player.pos,r.id);assert.equal(copy.s.moveSteps,r.path.length);assert.ok(!cardRouteDrawing(g,[r]).includes('NaN'));}
  cardTargetPanel(g,0,r=>String(r.id));assert.equal(JSON.stringify(g.s),state);
 }
});
test('roadblock placement pictures follow forward main-road targets and disabled positions cannot consume a card',()=>{
 const g=Game.create({seed:51,talents:false});g.player.pos=35;g.player.reverse=true;g.player.cards=['block'];g.s.players[1].pos=36;g.s.blocks[37]=1;const state=JSON.stringify(g.s),options=cardTargetOptions(g,0);assert.equal(options[0].id,36);assert.ok(options[0].reason);assert.ok(options[1].reason);for(const o of options){const copy=clone(g);assert.equal(copy.card(0,o.target),!o.reason);if(!o.reason)assert.equal(copy.s.blocks[o.id],0);else assert.deepEqual(copy.player.cards,['block']);}cardTargetPanel(g,0,String);assert.equal(JSON.stringify(g.s),state);
});
test('before-after construction, demolition and takeover pictures match real levels, types, ownership and cash',()=>{
 for(const key of ['build','demolish','steal'])for(const type of Object.keys(BUSINESSES))for(const level of [0,1]){
  const g=Game.create({seed:51,talents:false});const id=1;g.player.pos=key==='steal'?id:0;g.player.money=8000;g.player.cards=[key];g.s.ownership[id]={player:key==='build'?0:1,level,buildingType:type};g.s.blocks[2]=1;const state=JSON.stringify(g.s);
  for(const o of cardTargetOptions(g,0)){const copy=clone(g),before=copy.player.money,builds=copy.player.buildsUsed;assert.equal(copy.card(0,o.target),true);if(o.obstacle)assert.equal(copy.s.blocks[o.id],undefined);else{const result=copy.s.ownership[o.id];assert.equal(result.level,o.afterLevel);assert.equal(businessType(result),o.afterType);assert.equal(result.player,o.afterOwner);assert.equal(before-copy.player.money,o.price);}if(key==='build')assert.equal(copy.player.buildsUsed,builds);}
  cardTargetPanel(g,0,r=>String(r.id));assert.equal(JSON.stringify(g.s),state);
 }
});
