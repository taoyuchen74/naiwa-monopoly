import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {hotelMarquee,researchDish} from '../dist/facility-details.js';
import {architecturalDetails} from '../dist/scenery.js';
import {buildingReveal} from '../dist/building-reveal.js';

test('hotel pictogram is visible from both sides and retains night lighting during construction',()=>{
 const root=new THREE.Group(),sign=hotelMarquee(root,2,'#4488cc'),icons=sign.children.filter(o=>o.isGroup);assert.equal(icons.length,2);
 assert.ok(Math.abs(icons[0].rotation.y-icons[1].rotation.y)===Math.PI);
 const glyph=icons[0].children[0],original=glyph.material,reveal=buildingReveal(root);assert.ok(reveal.bounds.max.y>2.8);
 const shader={uniforms:{},fragmentShader:'#include <emissivemap_fragment>'};glyph.material.onBeforeCompile(shader);assert.ok(shader.uniforms.windowLightGain);assert.equal(glyph.material.clippingPlanes.length,1);
 reveal.restore();assert.equal(glyph.material,original);
});

test('research reflector is curved, finite and supported below its tilted head',()=>{
 const root=new THREE.Group(),dish=researchDish(root,0),bowl=dish.getObjectByName('parabolic-reflector'),p=bowl.geometry.attributes.position;let minY=Infinity,maxY=-Infinity;
 for(let i=0;i<p.count;i++){assert.ok(Number.isFinite(p.getX(i)+p.getY(i)+p.getZ(i)));minY=Math.min(minY,p.getY(i));maxY=Math.max(maxY,p.getY(i));}
 assert.ok(maxY-minY>.1);assert.ok(new THREE.Box3().setFromObject(dish).min.y<=.001);
});

test('roof service units stay on roofs even when a tall sign changes the overall building bounds',()=>{
 for(const type of ['hotel','research','mall','tower'])for(const level of [1,3,5]){
  const root=new THREE.Group(),roof={hotel:.55+level*.58+.15,research:.55+level*.25+.17,mall:.75+level*.5+.18,tower:.8+level*.62+.15}[type];
  const pole=new THREE.Mesh(new THREE.BoxGeometry(.1,10,.1));pole.position.y=5;root.add(pole);architecturalDetails(root,type,level,'#4488cc');
  const unit=root.getObjectByName('rooftop-service-unit'),bounds=new THREE.Box3().setFromObject(unit);assert.ok(bounds.min.y>=roof&&bounds.min.y<roof+.05);assert.ok(bounds.max.y<roof+.3);
 }
});
