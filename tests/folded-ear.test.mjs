import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {characterModel,animateCharacter} from '../dist/characters.js';
import {foldedEar} from '../dist/folded-ear.js';
import {disposeUnique} from '../dist/render-kit.js';

test('dog ears are closed curved volumes with mirrored silhouettes and finite outward surfaces',()=>{
 const dog=characterModel('naigou');dog.updateMatrixWorld(true);const [left,right]=dog.userData.ears.map(e=>e.children[0]),g=right.geometry,p=g.attributes.position,indices=g.index.array,edges=new Map();let volume=0;
 for(let i=0;i<indices.length;i+=3){const [a,b,c]=indices.slice(i,i+3),va=new THREE.Vector3().fromBufferAttribute(p,a),vb=new THREE.Vector3().fromBufferAttribute(p,b),vc=new THREE.Vector3().fromBufferAttribute(p,c);volume+=va.dot(vb.cross(vc))/6;for(const [u,v]of [[a,b],[b,c],[c,a]]){const key=Math.min(u,v)+':'+Math.max(u,v),e=edges.get(key)||{count:0,balance:0};e.count++;e.balance+=u<v?1:-1;edges.set(key,e);}}
 assert.ok(volume>0);assert.ok([...edges.values()].every(e=>e.count===2&&e.balance===0));assert.equal(p.count-edges.size+indices.length/3,2);
 for(let i=0;i<p.count;i++){const a=left.localToWorld(new THREE.Vector3().fromBufferAttribute(left.geometry.attributes.position,i)),b=right.localToWorld(new THREE.Vector3().fromBufferAttribute(p,i));a.x=-a.x;assert.ok(a.distanceTo(b)<1e-6);}
 for(const value of g.attributes.normal.array)assert.ok(Number.isFinite(value));const size=new THREE.Box3().setFromBufferAttribute(p).getSize(new THREE.Vector3());assert.ok(size.z>.2&&size.y>.6,'ear must bend in depth and hang below its socket');
});

test('ear sockets remain buried in the head while walking and laughing',()=>{
 const dog=characterModel('naigou'),torso=dog.getObjectByName('canine-torso'),surface=new THREE.Mesh(torso.geometry,torso.material);dog.updateMatrixWorld(true);
 const sockets=dog.userData.ears.map(e=>torso.worldToLocal(e.getWorldPosition(new THREE.Vector3())));
 for(const p of sockets){const front=new THREE.Raycaster(new THREE.Vector3(p.x,p.y,2),new THREE.Vector3(0,0,-1)).intersectObject(surface)[0],back=new THREE.Raycaster(new THREE.Vector3(p.x,p.y,-2),new THREE.Vector3(0,0,1)).intersectObject(surface)[0];assert.ok(front&&back&&p.z<front.point.z&&p.z>back.point.z);}
 for(let i=0;i<40;i++){animateCharacter(dog,{time:i*.2,moving:i%2===0,mood:i%3===0?'happy':null});dog.updateMatrixWorld(true);dog.userData.ears.forEach((e,j)=>assert.ok(torso.worldToLocal(e.getWorldPosition(new THREE.Vector3())).distanceTo(sockets[j])<1e-8));}
});

test('portrait cleanup cannot dispose another character’s cached ear shape',()=>{
 const a=new THREE.Group(),b=new THREE.Group(),first=foldedEar(a,'#897247'),second=foldedEar(b,'#897247');let disposed=false;second.geometry.addEventListener('dispose',()=>disposed=true);assert.notEqual(first.geometry,second.geometry);disposeUnique(a);assert.equal(disposed,false);
});
