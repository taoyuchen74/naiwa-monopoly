import * as THREE from './vendor/three.module.js';
import {mesh} from './render-kit.js';
let shape;
function earGeometry(){
 if(shape)return shape.clone();
 const rings=64,sides=40,positions=[],indices=[];
 for(let i=0;i<rings;i++){
  const t=i/rings,center=new THREE.Vector3(.32*Math.sin(t*Math.PI/2),-.66*t,.2*t*t-.04*Math.sin(Math.PI*t)),across=new THREE.Vector3(1,0,0),round=Math.sqrt(1-t*t),width=(.12+.15*Math.sin(Math.PI*t))*round,depth=.065*round;
  for(let j=0;j<sides;j++){
   const a=j/sides*Math.PI*2,u=Math.cos(a),v=Math.sin(a),curl=.04*Math.sin(Math.PI*t)*(u*u-.3),crease=.018*Math.exp(-(((u+.15)/.18)**2))*Math.max(0,v)*Math.exp(-(((t-.32)/.22)**2)),point=center.clone().addScaledVector(across,u*width);
   positions.push(point.x,point.y,point.z+v*depth+curl-crease);
  }
 }
 for(let i=0;i<rings-1;i++)for(let j=0;j<sides;j++){const a=i*sides+j,b=(i+1)*sides+j,c=i*sides+(j+1)%sides,d=(i+1)*sides+(j+1)%sides;indices.push(a,c,b,c,d,b);}
 const base=positions.length/3;positions.push(0,0,0);const tip=positions.length/3,end=new THREE.Vector3(.32,-.66,.2);positions.push(end.x,end.y,end.z);
 for(let j=0;j<sides;j++){const next=(j+1)%sides;indices.push(base,next,j,tip,(rings-1)*sides+j,(rings-1)*sides+next);}
 shape=new THREE.BufferGeometry();shape.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));shape.setIndex(indices);shape.computeVertexNormals();shape.computeBoundingSphere();return shape.clone();
}
export function foldedEar(parent,mat,side=1){const ear=mesh(parent,earGeometry(),mat);ear.name='folded-ear';ear.scale.x=side;return ear;}
