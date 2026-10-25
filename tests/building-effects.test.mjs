import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {mesh,material} from '../dist/render-kit.js';
import {buildingReveal,structuralChange} from '../dist/building-reveal.js';
import {EffectSystem} from '../dist/effects.js';
import {GTAOPass} from '../dist/vendor/addons/postprocessing/GTAOPass.js';

function site(){const parent=new THREE.Group(),root=new THREE.Group(),shared=material('#528b9c');root.position.set(2,.14,3);root.rotation.y=.6;parent.add(root);const wall=mesh(root,new THREE.BoxGeometry(1,3,1),shared,[0,1.5,0]);return{parent,root,wall,shared};}

test('rising construction front clips only its own building and restores shared glass and shaders',()=>{
 const {parent,root,wall,shared}=site(),neighbor=mesh(parent,new THREE.BoxGeometry(1,1,1),shared,[5,1,0]);let sharedDisposed=false,cloneDisposed=false;shared.addEventListener('dispose',()=>sharedDisposed=true);
 const reveal=buildingReveal(root),clone=wall.material;clone.addEventListener('dispose',()=>cloneDisposed=true);reveal.set(.5);
 assert.notEqual(clone,shared);assert.equal(neighbor.material,shared);assert.equal(shared.clippingPlanes,null);assert.equal(clone.clipShadows,true);assert.ok(reveal.plane.distanceToPoint(new THREE.Vector3(2,1,3))>0);assert.ok(reveal.plane.distanceToPoint(new THREE.Vector3(2,3,3))<0);
 const shader={uniforms:{},fragmentShader:'#include <emissivemap_fragment>'};clone.onBeforeCompile(shader);assert.ok(shader.uniforms.windowLightGain);
 assert.equal(wall.userData.effectReveal,true);reveal.restore();reveal.restore();assert.equal(wall.material,shared);assert.equal(wall.userData.effectReveal,undefined);assert.equal(cloneDisposed,true);assert.equal(sharedDisposed,false);
});

test('cancelled construction restores exact transforms and materials and removes all scaffolding',()=>{
 const {parent,root,wall,shared}=site(),fx=new EffectSystem(parent),position=root.position.clone(),scale=root.scale.clone(),rotation=root.rotation.clone();
 fx.transition(root,'grow');fx.construction(root);fx.update(.6);assert.equal(root.scale.y,1);assert.ok(wall.material.clippingPlanes.length);assert.ok(parent.children.length>1);fx.clear();assert.deepEqual(root.position,position);assert.deepEqual(root.scale,scale);assert.ok(root.rotation.equals(rotation));assert.equal(wall.material,shared);assert.equal(parent.children.length,1);assert.equal(fx.items.length,0);
 let done=0;fx.transition(root,'remove',()=>done++);fx.update(.6);fx.clear();assert.equal(done,1);assert.equal(wall.material,shared);assert.ok(root.rotation.equals(rotation));assert.equal(fx.items.length,0);
});

test('normal-buffer pass excludes temporary construction fronts and restores original visibility',()=>{
 const {parent,root,wall}=site(),hidden=new THREE.Mesh();hidden.visible=false;parent.add(hidden);const reveal=buildingReveal(root),pass=Object.create(GTAOPass.prototype);pass.scene=parent;pass._visibilityCache=[];pass._overrideVisibility();assert.equal(wall.visible,false);assert.equal(hidden.visible,false);pass._restoreVisibility();assert.equal(wall.visible,true);assert.equal(hidden.visible,false);reveal.restore();pass._overrideVisibility();assert.equal(wall.visible,true);pass._restoreVisibility();
});

test('ownership transfers recolour without construction, while actual level and facility changes animate',()=>{
 const old={level:3,buildingType:'hotel',player:0};assert.equal(structuralChange(old,{level:3,buildingType:'hotel',player:2}),false);assert.equal(structuralChange(old,{level:4,buildingType:'hotel',player:0}),true);assert.equal(structuralChange(old,{level:3,buildingType:'mall',player:0}),true);assert.equal(structuralChange(old,null),true);assert.equal(structuralChange({level:0},null),false);
});

test('upgrades start above retained floors, demolition stops at the remaining roof, and rapid replacement restores originals',()=>{
 const {parent,root,wall,shared}=site(),fx=new EffectSystem(parent);fx.transition(root,'grow',undefined,{startHeight:2});const grow=fx.items[0];assert.ok(Math.abs(grow.reveal.plane.constant-2)<.016);fx.update(.5);assert.ok(grow.reveal.plane.constant>2);assert.equal(root.scale.y,1);
 fx.transition(root,'remove',undefined,{endHeight:1.5});assert.equal(fx.items.filter(e=>e.object===root).length,1);const removal=fx.items.find(e=>e.object===root);fx.update(1.35);assert.ok(Math.abs(removal.reveal.plane.constant-1.5)<.016);assert.equal(wall.material,shared);assert.equal(wall.userData.effectReveal,undefined);fx.clear();
});

test('rubble varies in size and speed and collides with the actual ground below an elevated floor',()=>{
 const parent=new THREE.Group(),fx=new EffectSystem(parent);fx.spawn('demolish',new THREE.Vector3(0,2,0));const e=fx.items[0];assert.ok(new Set(e.particles.map(p=>p.v.y)).size>20);assert.ok(new Set(e.particles.map(p=>p.m.scale.x)).size>20);for(let i=0;i<75;i++)fx.update(.02);for(const {m}of e.particles)assert.ok(m.position.y+e.group.position.y>=.07-1e-10);fx.clear();assert.equal(parent.children.length,0);
});
