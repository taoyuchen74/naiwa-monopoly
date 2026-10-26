import * as THREE from './vendor/three.module.js';
export function fountainJetPath(index){const a=index/6*Math.PI*2;return [[0,.65,0],[Math.cos(a)*.45,1.05,Math.sin(a)*.45],[Math.cos(a)*.65,.3,Math.sin(a)*.65]];}
const up=new THREE.Vector3(0,1,0);
export class FountainSpray{
 constructor(parent){
  this.group=new THREE.Group();this.group.name='fountain-flow';this.group.userData.dynamic=true;parent.add(this.group);
  this.jetMaterial=new THREE.MeshPhysicalMaterial({color:'#b8e7e0',roughness:.14,metalness:.03,transparent:true,opacity:.62,clearcoat:.8,depthWrite:false});
  this.poolMaterial=new THREE.MeshPhysicalMaterial({color:'#71b9bd',roughness:.12,metalness:.12,clearcoat:1});
  this.curves=Array.from({length:6},(_,i)=>new THREE.CatmullRomCurve3(fountainJetPath(i).map(p=>new THREE.Vector3(...p))));
  this.drops=new THREE.InstancedMesh(new THREE.SphereGeometry(1,16,10),new THREE.MeshPhysicalMaterial({color:'#d7f4ef',roughness:.1,metalness:.05,transparent:true,opacity:.75,clearcoat:1,depthWrite:false}),48);this.drops.name='fountain-droplets';this.drops.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.drops.frustumCulled=false;this.group.add(this.drops);this.dummy=new THREE.Object3D();this.rings=[];
  const ringGeometry=new THREE.RingGeometry(.8,1,40);for(let i=0;i<6;i++){const a=i/6*Math.PI*2,ring=new THREE.Mesh(ringGeometry,new THREE.MeshBasicMaterial({color:'#d8f3e9',transparent:true,opacity:.35,depthWrite:false,side:THREE.DoubleSide}));ring.name='fountain-impact-ripple';ring.rotation.x=-Math.PI/2;ring.position.set(Math.cos(a)*.65,.294,Math.sin(a)*.65);this.group.add(ring);this.rings.push(ring);}
  this.update(0);
 }
 update(time,{reduced=false,low=false}={}){
  this.group.visible=!reduced;if(reduced)return;const clock=Number.isFinite(time)?time:0;this.drops.count=low?24:48;
  for(let i=0;i<this.drops.count;i++){const curve=this.curves[i%6],u=((clock*.8+Math.floor(i/6)/(this.drops.count/6))%1+1)%1,r=.015+(i%3)*.003;curve.getPointAt(u,this.dummy.position);this.dummy.quaternion.setFromUnitVectors(up,curve.getTangentAt(u));this.dummy.scale.set(r,r*1.8,r);this.dummy.updateMatrix();this.drops.setMatrixAt(i,this.dummy.matrix);}this.drops.instanceMatrix.needsUpdate=true;
  this.rings.forEach((ring,i)=>{const phase=((clock*1.25+i/6)%1+1)%1,r=.025+phase*.11;ring.scale.setScalar(r);ring.material.opacity=(1-phase)*.36;});
 }
}
