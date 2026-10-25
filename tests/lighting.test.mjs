import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';
import {LIGHTING,lightingMode} from '../dist/lighting.js';
import {normalizePreferences,readPreferences,writePreferences} from '../dist/preferences.js';
import {waterMaterial,setSurfaceLighting,windowMaterial} from '../dist/surfaces.js';
import * as THREE from '../dist/vendor/three.module.js';

test('lighting persists and legacy saves gain daylight without changing the match',()=>{
 const g=Game.create({seed:31,playerCount:6}),before=structuredClone(g.s);delete before.options.lighting;
 const restored=Game.restore(before);assert.ok(restored);const expected=structuredClone(before);expected.options.lighting='day';assert.deepEqual(restored.s,expected);
 for(const mode of Object.keys(LIGHTING)){g.s.options.lighting=mode;assert.deepEqual(Game.restore(g.s).s,g.s);}
 g.s.options.lighting='bad';assert.equal(Game.restore(g.s),null);
 const data=new Map(),storage={getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)};writePreferences(storage,{lighting:'night'});assert.equal(readPreferences(storage).lighting,'night');assert.equal(normalizePreferences({lighting:'bad'}).lighting,'day');assert.equal(lightingMode('__proto__'),'day');
});

test('existing and newly created water and window materials follow the same light rig',()=>{
 const coast=waterMaterial(false);setSurfaceLighting('night');const river=waterMaterial(true);assert.equal(coast.uniforms.deepColor.value.getHexString(),river.uniforms.deepColor.value.getHexString());
 const mat=windowMaterial(new THREE.MeshPhysicalMaterial()),shader={uniforms:{},fragmentShader:'#include <emissivemap_fragment>'};mat.onBeforeCompile(shader);assert.equal(shader.uniforms.windowLightGain.value,1.8);setSurfaceLighting('golden');assert.equal(shader.uniforms.windowLightGain.value,.35);assert.equal(coast.uniforms.deepColor.value.getHexString(),new THREE.Color(LIGHTING.golden.waterDeep).getHexString());setSurfaceLighting('day');assert.equal(shader.uniforms.windowLightGain.value,0);mat.dispose();
});
