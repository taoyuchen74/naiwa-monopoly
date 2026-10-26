import {test} from 'node:test';import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {Game} from '../dist/engine.js';import {IslandScene} from '../dist/scene.js';
import {EffectSystem} from '../dist/effects.js';import {DICE_DURATION,DICE_FACES} from '../dist/dice.js';
import {animationSpeed,ActionPacer} from '../dist/pacing.js';

function sample(speed,{studio=false,paused=false,hidden=false}={}){
 const game=Game.create({seed:54,talents:false});game.s.options.speed=speed;game.player.pos=1;const updates=[],marker=new THREE.Group();marker.material={color:new THREE.Color()};
 const scene={animate(){},last:0,time:0,reduced:false,selection:{visible:false},camera:new THREE.OrthographicCamera(),fx:{items:[],update:dt=>updates.push(dt),spawn(){}},game,tiles:game.tiles,pawns:game.s.players.map(()=>new THREE.Group()),turnMarker:marker,follow:false,pickupMeshes:new Map(),hero:new THREE.Group(),floats:[],ripples:[],waterJets:[],smokestacks:[],quality:'low',drawFrame(){},el:{dataset:{}},renderer:{info:{render:{calls:0,triangles:0}}}};
 scene.paused=paused;if(studio)scene.studio={model:new THREE.Group(),yaw:0,manual:true,mode:'idle'};
 const oldDoc=globalThis.document,oldRaf=globalThis.requestAnimationFrame;try{globalThis.document={hidden};globalThis.requestAnimationFrame=()=>0;IslandScene.prototype.animate.call(scene,20);}finally{globalThis.document=oldDoc;globalThis.requestAnimationFrame=oldRaf;}
 const t=game.tiles[game.player.pos],target=new THREE.Vector2(t.x+(game.player.id-(game.s.players.length-1)/2)*.4,t.z-.15);return {dt:updates[0],ambient:scene.time,action:scene.actionTime,distance:target.distanceTo(new THREE.Vector2(scene.pawns[0].position.x,scene.pawns[0].position.z))};
}
test('fast mode accelerates real scene effects and movement without speeding up the ambient clock',()=>{
 const normal=sample(1),fast=sample(2);assert.equal(normal.dt,.02);assert.equal(fast.dt,.04);assert.equal(fast.ambient,normal.ambient);assert.ok(fast.distance<normal.distance);assert.equal(fast.action,normal.action*2);
});

test('studio viewing keeps its natural cadence and paused or hidden scenes advance neither clock',()=>{
 const studio=sample(2,{studio:true});assert.equal(studio.dt,.02);assert.equal(studio.action,studio.ambient);for(const options of [{paused:true},{hidden:true}]){const stopped=sample(2,options);assert.equal(stopped.dt,undefined);assert.equal(stopped.ambient,0);}
});

test('normal, fast and legacy preferences share bounded pacing and malformed values cannot stall a turn',()=>{
 assert.equal(animationSpeed(1),1);assert.equal(animationSpeed(2),2);assert.equal(animationSpeed(4),2);for(const value of [NaN,Infinity,undefined,'bad']){assert.equal(animationSpeed(value),1);const pacer=new ActionPacer(()=>0);pacer.after('roll',value);assert.equal(pacer.deadline,1100);}
});

test('fast construction completes earlier and restores its original materials before the next action',()=>{
 for(const speed of [1,2]){const parent=new THREE.Group(),fx=new EffectSystem(parent),material=new THREE.MeshStandardMaterial(),mesh=new THREE.Mesh(new THREE.BoxGeometry(1,2,1),material);parent.add(mesh);let done=0;fx.transition(mesh,'grow',()=>done++);for(let i=0;i<90;i++)fx.update(.01*speed);assert.equal(done,speed===2?1:0);if(speed===2){assert.equal(mesh.material,material);assert.equal(fx.items.length,0);}fx.clear();mesh.geometry.dispose();material.dispose();}
});

test('faster dice still settle on the authoritative result and deliver one impact and completion',()=>{
 for(const speed of [1,2]){const signals=[],fx=new EffectSystem(new THREE.Group(),{onDiceState:(...v)=>signals.push(v)});fx.rollDice([5],new THREE.Vector3());const die=fx.items[0].dice.dice[0].die;signals.length=0;for(let time=0;time<DICE_DURATION/speed+.02;time+=.01)fx.update(.01*speed);assert.equal(fx.items.length,0);assert.equal(signals.filter(v=>v[1]).length,1);assert.equal(signals.filter(v=>v.every(x=>!x)).length,1);const top=new THREE.Vector3(...DICE_FACES.find(f=>f.value===5).normal).applyQuaternion(die.quaternion);assert.ok(top.y>1-1e-10);}
});
