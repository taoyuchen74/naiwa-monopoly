import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {organicTail} from '../dist/organic-tail.js';
import {characterModel,animateCharacter} from '../dist/characters.js';

test('organic tails are closed consistently oriented surfaces without a separate floating cap',()=>{
 for(const id of ['naishu','naigou']){
  const tail=characterModel(id).userData.tail;assert.equal(tail.children.length,1);const g=tail.children[0].geometry,p=g.attributes.position,indices=g.index.array,edges=new Map();let volume=0;
  for(let i=0;i<indices.length;i+=3){const [a,b,c]=indices.slice(i,i+3),va=new THREE.Vector3().fromBufferAttribute(p,a),vb=new THREE.Vector3().fromBufferAttribute(p,b),vc=new THREE.Vector3().fromBufferAttribute(p,c);volume+=va.dot(vb.cross(vc))/6;
   for(const [u,v]of [[a,b],[b,c],[c,a]]){const key=Math.min(u,v)+':'+Math.max(u,v),entry=edges.get(key)||{count:0,balance:0};entry.count++;entry.balance+=u<v?1:-1;edges.set(key,entry);}
  }
  assert.ok([...edges.values()].every(e=>e.count===2&&e.balance===0));assert.ok(volume>0);assert.equal(p.count-edges.size+indices.length/3,2);
  for(const value of g.attributes.normal.array)assert.ok(Number.isFinite(value));
 }
});

test('tail cross sections taper toward the closed tip rather than ending in a bulb',()=>{
 const parent=new THREE.Group(),tail=organicTail(parent,'#f5ce20',[[0,0,0],[0,.5,0],[0,1,0]]),m=tail.children[0];parent.updateMatrixWorld(true);
 const width=y=>new THREE.Raycaster(new THREE.Vector3(1,y,0),new THREE.Vector3(-1,0,0)).intersectObject(m)[0]?.point.x;
 assert.ok(width(.2)>.085);assert.ok(width(.9)<width(.2)*.6);
});

test('mouse and dog tails stay attached at a buried socket throughout walking and laughter',()=>{
 for(const id of ['naishu','naigou']){
  const root=characterModel(id),tail=root.userData.tail,body=id==='naishu'?root.userData.torsoMesh:root.getObjectByName('canine-torso');root.updateMatrixWorld(true);
  const anchor=body.worldToLocal(tail.getWorldPosition(new THREE.Vector3())),front=new THREE.Raycaster(new THREE.Vector3(anchor.x,anchor.y,2),new THREE.Vector3(0,0,-1)).intersectObject(new THREE.Mesh(body.geometry,body.material))[0],back=new THREE.Raycaster(new THREE.Vector3(anchor.x,anchor.y,-2),new THREE.Vector3(0,0,1)).intersectObject(new THREE.Mesh(body.geometry,body.material))[0];
  assert.ok(front&&back&&anchor.z<front.point.z&&anchor.z>back.point.z,'tail socket must lie inside the torso');
  for(let i=0;i<40;i++){animateCharacter(root,{time:i*.15,moving:i%2===0,mood:i%3===0?'happy':null});root.updateMatrixWorld(true);const current=body.worldToLocal(tail.getWorldPosition(new THREE.Vector3()));assert.ok(current.distanceTo(anchor)<1e-8);}
 }
});
