import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {characterModel,animateCharacter} from '../dist/characters.js';

test('dog body and sculpted paws have closed surfaces without exposed boundary edges',()=>{
 const dog=characterModel('naigou');
 for(const mesh of [dog.getObjectByName('canine-torso'),...dog.userData.legs.map(l=>l.children[0])]){
  const edges=new Map(),indices=mesh.geometry.index.array;
  for(let i=0;i<indices.length;i+=3)for(let j=0;j<3;j++){const a=indices[i+j],b=indices[i+(j+1)%3],key=Math.min(a,b)+':'+Math.max(a,b);edges.set(key,(edges.get(key)||0)+1);}
  assert.ok([...edges.values()].every(count=>count===2));
 }
});

test('dog mouth recess follows the lip ellipse and its rim stays attached through laughter',()=>{
 const dog=characterModel('naigou'),torso=dog.getObjectByName('canine-torso');torso.updateMatrixWorld(true);
 const front=(x,y)=>new THREE.Raycaster(new THREE.Vector3(x,y,2),new THREE.Vector3(0,0,-1)).intersectObject(torso)[0]?.point.z;
 for(let i=0;i<12;i++){const a=i/12*Math.PI*2,inside=front(Math.cos(a)*.31*.8,1.6265+Math.sin(a)*.252*.8),outside=front(Math.cos(a)*.31*1.15,1.6265+Math.sin(a)*.252*1.15);assert.ok(outside-inside>.05);}
 const face=dog.userData.laughMouth,rim=face.userData.rim,rest=Array.from(rim.geometry.attributes.position.array);let jawY=[];
 for(let i=0;i<24;i++){animateCharacter(dog,{time:i/12,mood:'happy'});assert.deepEqual(face.scale.toArray(),[1,1,1]);assert.deepEqual(Array.from(rim.geometry.attributes.position.array),rest);jawY.push(face.userData.jaw.position.y);}
 assert.ok(Math.max(...jawY)-Math.min(...jawY)>.02);assert.ok(face.userData.conformed);
});
