import {test} from 'node:test';import assert from 'node:assert/strict';import * as THREE from '../dist/vendor/three.module.js';import {FountainSpray,fountainJetPath} from '../dist/fountain.js';import {batchStatic,disposeUnique} from '../dist/render-kit.js';
import {scenicDetails} from '../dist/scenery.js';import {CITY_TILES} from '../dist/maps.js';
test('flowing droplets follow the actual six jet curves and stay within the basin silhouette',()=>{
 const f=new FountainSpray(new THREE.Group()),m=new THREE.Matrix4(),position=new THREE.Vector3(),scale=new THREE.Vector3(),rotation=new THREE.Quaternion();for(let jet=0;jet<6;jet++)assert.deepEqual(f.curves[jet].points.map(p=>p.toArray()),fountainJetPath(jet));for(const time of [0,.1,.6,1.2,12345]){f.update(time);for(let i=0;i<f.drops.count;i++){f.drops.getMatrixAt(i,m);m.decompose(position,rotation,scale);assert.ok(Math.hypot(position.x,position.z)<=.651);assert.ok(position.y>=.299&&position.y<1.09);assert.ok(scale.x>0&&scale.y>scale.x);assert.ok(m.elements.every(Number.isFinite));}for(const ring of f.rings)assert.ok(Math.hypot(ring.position.x,ring.position.z)+ring.scale.x<.791);}
});
test('ambient animation is determined by absolute time, independent of frame partitioning or action speed',()=>{
 const a=new FountainSpray(new THREE.Group()),b=new FountainSpray(new THREE.Group());for(let i=0;i<60;i++)a.update(i/60);a.update(1);b.update(1);assert.deepEqual(a.drops.instanceMatrix.array,b.drops.instanceMatrix.array);assert.deepEqual(a.rings.map(r=>[r.scale.x,r.material.opacity]),b.rings.map(r=>[r.scale.x,r.material.opacity]));b.update(Infinity);a.update(0);assert.deepEqual(a.drops.instanceMatrix.array,b.drops.instanceMatrix.array);
});
test('low quality keeps all jets flowing with fewer instances and reduced motion hides moving details',()=>{
 const f=new FountainSpray(new THREE.Group());f.update(0,{low:true});assert.equal(f.drops.count,24);assert.equal(f.group.visible,true);const before=f.drops.instanceMatrix.array.slice();f.update(8,{reduced:true});assert.equal(f.group.visible,false);assert.deepEqual(f.drops.instanceMatrix.array,before);f.update(8,{low:false});assert.equal(f.drops.count,48);assert.equal(f.group.visible,true);assert.notDeepEqual(f.drops.instanceMatrix.array,before);
});
test('world batching retains animated fountain parts and map disposal releases their owned resources',()=>{
 const parent=new THREE.Group(),f=new FountainSpray(parent),drops=f.drops;batchStatic(parent);assert.equal(drops.parent,f.group);assert.equal(f.rings.length,6);assert.ok(f.rings.every(r=>r.parent===f.group));let geometry=0,material=0;drops.geometry.addEventListener('dispose',()=>geometry++);drops.material.addEventListener('dispose',()=>material++);disposeUnique(parent);assert.equal(geometry,1);assert.equal(material,1);
});
test('procedural meadow never grows inside the fountain basin or its walking clearance',()=>{
 const scene={world:new THREE.Group(),tiles:CITY_TILES,fountain:{position:new THREE.Vector3(-1,.05,7.5)}},details=scenicDetails(scene),grass=details.getObjectByName('meadow-grass'),matrix=new THREE.Matrix4(),point=new THREE.Vector3();assert.ok(grass.count>100);for(let i=0;i<grass.count;i++){grass.getMatrixAt(i,matrix);point.setFromMatrixPosition(matrix);assert.ok(Math.hypot(point.x+1,point.z-7.5)>1.99,`blade ${i} intersects fountain clearance`);}
});
