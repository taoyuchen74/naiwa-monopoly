import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {DiceRoll,DICE_FACES,DICE_SETTLE,DICE_DURATION,diceRollStarted} from '../dist/dice.js';
import {EffectSystem} from '../dist/effects.js';
import {Game} from '../dist/engine.js';

test('every settled result exposes exactly the authoritative top face and conventional opposite faces',()=>{
 for(let value=1;value<=6;value++){const roll=new DiceRoll([value],new THREE.Vector3());roll.update(DICE_SETTLE);const die=roll.dice[0].die;
  for(const face of DICE_FACES){const normal=new THREE.Vector3(...face.normal).applyQuaternion(die.quaternion),top=normal.dot(new THREE.Vector3(0,1,0));assert.ok(face.value===value?top>1-1e-12:top<1e-12);assert.equal(die.getObjectByName(`pips-${face.value}`).children.length,face.value);const opposite=DICE_FACES.find(f=>f.normal.every((n,i)=>n===-face.normal[i]));assert.equal(face.value+opposite.value,7);}
  roll.dispose();
 }
});

test('three dice tumble, settle at their own results, and leave no effect or duplicate impact after cleanup',()=>{
 const parent=new THREE.Group(),events=[],fx=new EffectSystem(parent,{onDiceState:(rolling,impact,active)=>events.push({rolling,impact,active})});fx.rollDice([2,4,6],new THREE.Vector3());const e=fx.items[0],before=e.dice.dice.map(x=>x.die.quaternion.clone());assert.equal(fx.diceRolling,true);fx.update(.3);assert.ok(e.dice.dice.some((x,i)=>!x.die.quaternion.equals(before[i])));fx.update(DICE_SETTLE-.3+.001);assert.equal(fx.diceRolling,false);assert.equal(events.filter(e=>e.impact).length,1);assert.equal(events.at(-1).active,true);for(const d of e.dice.dice)assert.ok(d.die.quaternion.angleTo(d.target)<1e-7);fx.update(DICE_DURATION);assert.equal(events.filter(e=>e.impact).length,1);assert.equal(events.at(-1).active,false);assert.equal(fx.items.length,0);assert.equal(parent.children.length,0);
});

test('read-only dice presentation preserves normal, vehicle, forced and slow-movement game results and RNG',()=>{
 for(const kind of ['normal','vehicle','forced','slow']){const g=Game.create({seed:91,talents:false});if(kind==='vehicle'){g.player.vehicle=2;g.player.diceCount=3;}if(kind==='forced')g.player.forced=5;if(kind==='slow')g.player.slowTurns=1;const old={phase:g.s.phase,current:g.s.current,round:g.s.round};assert.ok(g.roll());assert.equal(diceRollStarted(old,g.s),true);const saved=JSON.stringify(g.s),fx=new EffectSystem(new THREE.Group());fx.rollDice(g.s.dice,new THREE.Vector3());for(let i=0;i<100;i++)fx.update(.02);assert.equal(JSON.stringify(g.s),saved);assert.deepEqual(Game.restore(saved).s,g.s);}
});

test('restored movement, branch choices and repeated redraws never restart a throw',()=>{
 const moving={phase:'moving',current:1,round:4};assert.equal(diceRollStarted(null,moving),false);assert.equal(diceRollStarted(moving,moving),false);assert.equal(diceRollStarted({...moving,phase:'branch'},moving),false);assert.equal(diceRollStarted({phase:'departure',current:1,round:4},moving),true);assert.equal(diceRollStarted({phase:'roll',current:0,round:4},moving),false);
});

test('dice stay in a readable screen band above messages as the map camera moves and rotates',()=>{
 const camera=new THREE.OrthographicCamera(-20,20,12,-12,.1,180),roll=new DiceRoll([1,4,6],new THREE.Vector3(-10,.24,3));
 for(const portrait of [false,true])for(const offset of [0,12]){camera.position.set(28+offset,30,36);camera.lookAt(offset,0,0);roll.anchor(camera,portrait);const projected=roll.group.position.clone().project(camera);assert.ok(Math.abs(projected.x)<1e-10);assert.ok(Math.abs(projected.y-(portrait?.28:.6))<1e-10);assert.ok(projected.z>=-.9&&projected.z<1);assert.ok(roll.group.position.toArray().every(Number.isFinite));}roll.dispose();
});

test('reduced motion skips tumbling and interrupted throws dispose their own materials without impact sounds',()=>{
 const parent=new THREE.Group(),events=[],fx=new EffectSystem(parent,{onDiceState:(r,i)=>events.push(i)});fx.rollDice([1],new THREE.Vector3());const materials=fx.items[0].dice.materials;let disposed=0;materials.forEach(m=>m.addEventListener('dispose',()=>disposed++));fx.clear();assert.equal(disposed,materials.length);assert.equal(events.some(Boolean),false);assert.equal(parent.children.length,0);const calm=new EffectSystem(parent,{reduced:true});calm.rollDice([6],new THREE.Vector3());assert.equal(calm.items.length,0);assert.equal(calm.diceRolling,false);
 for(const invalid of [[],[0],[7],[1.5],[1,2,3,4]])assert.throws(()=>new DiceRoll(invalid,new THREE.Vector3()));
});
