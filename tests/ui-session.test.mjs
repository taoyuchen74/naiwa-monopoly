import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';
import {advanceSession} from '../dist/ui-session.js';
const gates=()=>({started:true,hidden:false,paused:false,studio:false,panelOpen:false,ready:()=>true});
const moving=()=>{const g=Game.create({mapVersion:1,seed:17,talents:false});g.command('roll');return g;};

test('inactive sessions hold rules and RNG before consulting animation readiness',()=>{
 for(const blocked of [{started:false},{hidden:true},{paused:true},{studio:true},{panelOpen:true}]){
  const g=moving(),before=JSON.stringify(g.s);
  assert.equal(advanceSession(g,{...gates(),...blocked,ready:()=>{throw Error('Must not consult pacing');}}),null);
  assert.equal(JSON.stringify(g.s),before);
 }
});
test('an animation hold preserves the entire command state',()=>{
 const g=moving(),before=g.stateHash();assert.equal(advanceSession(g,{...gates(),ready:()=>false}),null);assert.equal(g.stateHash(),before);
});
test('one ready tick advances exactly one command and reports its pre-action phase',()=>{
 const g=moving(),revision=g.s.revision,remaining=g.s.remaining;
 assert.deepEqual(advanceSession(g,gates()),{phase:'moving',speed:1});assert.equal(g.s.revision,revision+1);assert.equal(g.s.remaining,remaining-1);
 g.s.phase='moving';g.player.pos=35;g.s.remaining=3;assert.deepEqual(advanceSession(g,gates()),{phase:'moving',speed:1});assert.equal(g.s.phase,'branch');assert.equal(g.s.remaining,3);
});
test('human pending decisions wait while AI uses the existing deterministic command',()=>{
 const g=Game.create({seed:17});for(const phase of ['roll','buy','estate','event','end','debt','branch']){g.s.phase=phase;const before=g.stateHash();assert.equal(advanceSession(g,gates()),null);assert.equal(g.stateHash(),before);}
 g.s.phase='roll';g.player.human=false;const baseline=Game.restore(g.s);baseline.ai();assert.ok(advanceSession(g,gates()));assert.equal(g.stateHash(),baseline.stateHash());
});
