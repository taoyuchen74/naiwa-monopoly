import {test} from 'node:test';
import assert from 'node:assert/strict';
import {referenceEye} from '../dist/reference-eyes.js';
import {disposeUnique} from '../dist/render-kit.js';

test('curved irises face the viewer with finite normals and radial color detail',()=>{
 const eye=referenceEye(),iris=eye.getObjectByName('curved-iris'),g=iris.geometry,p=g.attributes.position,n=g.attributes.normal,c=g.attributes.color;
 let minZ=Infinity,maxZ=-Infinity,minColor=Infinity,maxColor=-Infinity;
 for(let i=0;i<p.count;i++){assert.ok(Number.isFinite(p.getX(i)+p.getY(i)+p.getZ(i)));assert.ok(n.getZ(i)>0);minZ=Math.min(minZ,p.getZ(i));maxZ=Math.max(maxZ,p.getZ(i));minColor=Math.min(minColor,c.getY(i));maxColor=Math.max(maxColor,c.getY(i));}
 assert.ok(maxZ-minZ>.02);assert.ok(maxColor-minColor>.05);
 const pupil=eye.getObjectByName('eye-pupil'),lens=eye.getObjectByName('cornea');assert.ok(pupil.position.z+pupil.scale.z<lens.position.z+lens.scale.z);
});

test('disposing a portrait preserves shared eye geometry and independently owned irises',()=>{
 const first=referenceEye(),second=referenceEye();let sharedDisposed=false,secondDisposed=false;
 const shared=second.getObjectByName('eye-pupil').geometry,iris=second.getObjectByName('curved-iris').geometry;
 shared.addEventListener('dispose',()=>sharedDisposed=true);iris.addEventListener('dispose',()=>secondDisposed=true);
 assert.notEqual(first.getObjectByName('curved-iris').geometry,iris);disposeUnique(first);assert.equal(sharedDisposed,false);assert.equal(secondDisposed,false);
});
