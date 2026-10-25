import * as THREE from './vendor/three.module.js';
import {mesh} from './render-kit.js';

// One closed surface, with its animation pivot buried at the attachment point.
export function organicTail(parent,color,points,{radius=.1,taper=.3,tipRoundness=4}={}){
 const anchor=new THREE.Vector3(...points[0]),curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p).sub(anchor))),segments=72,sides=32,frames=curve.computeFrenetFrames(segments,false),positions=[],indices=[];
 for(let i=0;i<segments;i++){
  const t=i/segments,center=curve.getPointAt(t),r=radius*(1-taper*t)*Math.sqrt(1-t**tipRoundness);
  for(let j=0;j<sides;j++){const a=j/sides*Math.PI*2,v=center.clone().addScaledVector(frames.normals[i],Math.cos(a)*r).addScaledVector(frames.binormals[i],Math.sin(a)*r);positions.push(v.x,v.y,v.z);}
 }
 for(let i=0;i<segments-1;i++)for(let j=0;j<sides;j++){const a=i*sides+j,b=(i+1)*sides+j,c=i*sides+(j+1)%sides,d=(i+1)*sides+(j+1)%sides;indices.push(a,c,b,c,d,b);}
 const base=positions.length/3;positions.push(0,0,0);const tip=positions.length/3,end=curve.getPointAt(1);positions.push(end.x,end.y,end.z);
 for(let j=0;j<sides;j++){const next=(j+1)%sides;indices.push(base,next,j,tip,(segments-1)*sides+j,(segments-1)*sides+next);}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();geometry.computeBoundingSphere();
 const tail=new THREE.Group();tail.name='tail';tail.position.copy(anchor);tail.userData.dynamic=true;mesh(tail,geometry,color).name='continuous-tail';parent.add(tail);return tail;
}
