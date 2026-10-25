import * as THREE from './vendor/three.module.js';
import {RoundedBoxGeometry} from './vendor/addons/geometries/RoundedBoxGeometry.js';

export const DICE_SETTLE=.85,DICE_DURATION=1.65;
export const DICE_FACES=[
 {value:1,normal:[0,1,0]}, {value:6,normal:[0,-1,0]},
 {value:2,normal:[0,0,1]}, {value:5,normal:[0,0,-1]},
 {value:3,normal:[1,0,0]}, {value:4,normal:[-1,0,0]}
];
const pips={1:[[0,0]],2:[[-1,1],[1,-1]],3:[[-1,1],[0,0],[1,-1]],4:[[-1,-1],[-1,1],[1,-1],[1,1]],5:[[-1,-1],[-1,1],[0,0],[1,-1],[1,1]],6:[[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1]]};
const bodyGeometry=new RoundedBoxGeometry(1,1,1,4,.09),pipGeometry=new THREE.SphereGeometry(1,24,16),up=new THREE.Vector3(0,1,0),front=new THREE.Vector3(0,0,1);
export function resultQuaternion(value,index=0){const face=DICE_FACES.find(f=>f.value===value);if(!face)throw Error('Invalid die result');return new THREE.Quaternion().setFromAxisAngle(up,.45+index*.2).multiply(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(...face.normal),up));}
export function diceRollStarted(previous,state){return !!previous&&['roll','departure'].includes(previous.phase)&&state.phase==='moving'&&previous.current===state.current&&previous.round===state.round;}

export class DiceRoll{
 constructor(values,position,color='#e7bc52'){
  if(!Array.isArray(values)||values.length<1||values.length>3||values.some(v=>!Number.isInteger(v)||v<1||v>6))throw Error('Invalid dice');
  this.values=[...values];this.anchorPoint=position.clone();this.group=new THREE.Group();this.group.name='dice-roll';this.group.position.copy(position).add(new THREE.Vector3(.7,2.15,.7));
  const body=new THREE.MeshPhysicalMaterial({color:'#fff1cf',roughness:.23,metalness:0,clearcoat:.8,clearcoatRoughness:.15}),ink=new THREE.MeshStandardMaterial({color:'#5e3829',roughness:.5}),red=new THREE.MeshStandardMaterial({color:'#b6442d',roughness:.43});
  this.materials=[body,ink,red];this.dice=[];
  for(const [index,value]of values.entries()){
   const die=new THREE.Group();die.name=`die-${index}`;die.userData.result=value;const cube=new THREE.Mesh(bodyGeometry,body);die.add(cube);
   for(const face of DICE_FACES){const normal=new THREE.Vector3(...face.normal),q=new THREE.Quaternion().setFromUnitVectors(front,normal),faceGroup=new THREE.Group();faceGroup.name=`pips-${face.value}`;faceGroup.position.copy(normal).multiplyScalar(.501);faceGroup.quaternion.copy(q);die.add(faceGroup);
    for(const [x,y]of pips[face.value]){const dot=new THREE.Mesh(pipGeometry,face.value===1?red:ink);dot.scale.set(.066,.066,.012);dot.position.set(x*.22,y*.22,0);faceGroup.add(dot);}
   }
   this.group.add(die);this.dice.push({die,target:resultQuaternion(value,index),index,offset:(index-(values.length-1)/2)*1.22});
  }
  const ringMaterial=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.52,side:THREE.DoubleSide,depthWrite:false}),ring=new THREE.Mesh(new THREE.RingGeometry(.7, .735,64),ringMaterial);ring.rotation.set(-Math.PI/2,0,Math.atan2(.614,.789));ring.position.y=-.54;ring.scale.set(1+(values.length-1)*.85,1,1);ring.name='dice-landing-ring';this.group.add(ring);this.ring=ring;this.materials.push(ringMaterial);this.update(0);
 }
 anchor(camera,portrait=false){camera.updateMatrixWorld();const point=this.anchorPoint.clone().project(camera);point.x=0;point.y=portrait?.28:.6;point.z=Math.max(-.9,point.z-.1);this.group.position.copy(point.unproject(camera));}
 update(age){const t=THREE.MathUtils.clamp(age/DICE_SETTLE,0,1),spin=(1-t)*(1-t),shrink=1-THREE.MathUtils.smoothstep(age,1.35,DICE_DURATION);this.group.scale.setScalar(shrink*1.25);
  for(const {die,target,index,offset}of this.dice){const tumble=new THREE.Quaternion().setFromEuler(new THREE.Euler(spin*Math.PI*(4+index),spin*Math.PI*(3+index),spin*Math.PI*(5+index)));die.quaternion.copy(target).multiply(tumble);const travel=(1-t)*.55,bounce=Math.sin(t*Math.PI)*(.7+.08*Math.sin(t*18+index));die.position.set((offset-travel)*.789,bounce,(-offset+travel)*.614);}
  this.ring.material.opacity=.52*(1-THREE.MathUtils.smoothstep(age,1.35,DICE_DURATION));
 }
 dispose(){for(const mat of this.materials)mat.dispose();this.ring.geometry.dispose();this.group.clear();}
}
