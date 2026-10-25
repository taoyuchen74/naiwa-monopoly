import {organicTail} from './organic-tail.js';
import {laughingFace,conformFace} from './faces.js';
import * as THREE from './vendor/three.module.js';
import {mesh,ball,tube,material} from './render-kit.js';
import {sculptVolumes} from './sculpt.js';
let bodyGeometry,closedGeometry;
const bodyVolumes=[[0,1.05,-.15,.62,.68,.95],[0,1.48,.48,.57,.8,.6],[0,1.94,.57,.49,.51,.49]];
const bodyOptions={min:[-.85,.25,-1.22],max:[.85,2.55,1.18],steps:[88,112,104],blend:.18};
// The aperture and lip share a projected ellipse, so the body never protrudes through the rim.
function dogMouthCut(x,y,z){return Math.max((Math.hypot(x/.31,(y-1.6265)/.252)-1)*.252,.75-z);}
function softenEar(geometry){const pos=geometry.attributes.position,norm=geometry.attributes.normal,groups=new Map();for(let i=0;i<pos.count;i++){const key=[pos.getX(i),pos.getY(i),pos.getZ(i)].map(v=>Math.round(v*100000)).join(':');let entry=groups.get(key);if(!entry){entry={normal:new THREE.Vector3(),indices:[]};groups.set(key,entry);}entry.normal.add(new THREE.Vector3().fromBufferAttribute(norm,i));entry.indices.push(i);}for(const {normal,indices}of groups.values()){normal.normalize();for(const i of indices)norm.setXYZ(i,normal.x,normal.y,normal.z);}return geometry;}

export function dogModel(){const root=new THREE.Group(),body=new THREE.Group();root.name='naigou';root.add(body);const yellow=material('#f1cc58',.63),brown=material('#897247'),cream=material('#f0e4c4'),dark=material('#392820');
 bodyGeometry??=sculptVolumes(bodyVolumes,{...bodyOptions,cutField:dogMouthCut});closedGeometry??=sculptVolumes(bodyVolumes,bodyOptions);const torso=bodyGeometry.clone(),tpos=torso.attributes.position,tcolors=[];for(let i=0;i<tpos.count;i++){const x=tpos.getX(i),y=tpos.getY(i),z=tpos.getZ(i),mix=Math.max(0,Math.min(1,(1-(x/.36)**2-((y-.95)/.35)**2)*5))*Math.max(0,Math.min(1,(z-.7)/.2));const c=new THREE.Color('#f1cc58').lerp(new THREE.Color('#f0e4c4'),mix);tcolors.push(c.r,c.g,c.b);}torso.setAttribute('color',new THREE.Float32BufferAttribute(tcolors,3));const torsoMesh=mesh(body,torso,new THREE.MeshStandardMaterial({vertexColors:true,roughness:.63}));
 torsoMesh.name='canine-torso';const legs=[];for(const [x,z]of [[-.43,.55],[.43,.55],[-.43,-.68],[.43,-.68]]){const limb=new THREE.Group();limb.position.set(x,.72,z);body.add(limb);const geo=sculptVolumes([[0,-.2,0,.22,.45,.24],[0,-.54,.09,.23,.18,.27],...[-1,0,1].map(i=>[i*.13,-.58,.33,.085,.11,.145])],{min:[-.37,-.78,-.32],max:[.37,.3,.56],steps:[36,48,40],blend:.075});const colors=[],pos=geo.attributes.position;for(let i=0;i<pos.count;i++){const c=new THREE.Color('#f1cc58').lerp(new THREE.Color('#897247'),Math.max(0,Math.min(1,(-pos.getY(i)-.39)/.13)));colors.push(c.r,c.g,c.b);}geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));mesh(limb,geo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:.62}));legs.push(limb);}
 const ears=[];for(const side of [-1,1]){const ear=new THREE.Group();ear.position.set(side*.38,2.28,.52);ear.rotation.z=side*.35;body.add(ear);const shape=new THREE.Shape();shape.moveTo(0,.05);shape.bezierCurveTo(side*.17,.18,side*.5,-.03,side*.47,-.22);shape.bezierCurveTo(side*.4,-.68,side*.22,-.81,side*.05,-.39);shape.quadraticCurveTo(-side*.07,-.13,0,.05);const geo=new THREE.ExtrudeGeometry(shape,{depth:.18,bevelEnabled:true,bevelSize:.08,bevelThickness:.08,bevelSegments:10,curveSegments:48});mesh(ear,softenEar(geo),brown,[0,0,-.1]);ears.push(ear);}
 
 const tail=organicTail(body,yellow,[[0,1,-.91],[.08,1.23,-1.08],[.14,1.6,-1.15],[.08,1.94,-1.1],[0,2.1,-1.06]],{radius:.13,taper:.3});
 const closedMesh=new THREE.Mesh(closedGeometry);closedMesh.updateMatrixWorld(true);const front=(x,y)=>new THREE.Raycaster(new THREE.Vector3(x,y,2.5),new THREE.Vector3(0,0,-1)).intersectObject(closedMesh)[0]?.point.z||1;
 for(const side of [-1,1]){const crease=tube(body,dark,Array.from({length:7},(_,i)=>{const x=side*.235-.115+i*.23/6,y=2.03+Math.sin(i/6*Math.PI)*.055;return [x,y,front(x,y)+.014];}),.018);crease.castShadow=false;}

 const mouth=laughingFace(body,{y:1.82,z:1.065,width:.31,height:.45,sculpted:true,lipRadius:.018,lipColor:'#dfb94c',archedTeeth:true});mouth.getObjectByName('upper-teeth').position.z=-.035;mouth.userData.jaw.position.z=-.045;mouth.userData.fixedAperture=true;conformFace(mouth,front,{width:.35,height:.45,cacheKey:'naigou'});mouth.visible=true;
 root.userData={id:'naigou',body,arms:[],legs,lids:[],laughMouth:mouth,mouth:null,tail,ears,canine:true,vehicleId:0};return root;}
