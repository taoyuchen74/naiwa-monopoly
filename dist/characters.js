import {toyCharacter} from './toy-style.js';
import {eggModel,teaModel} from './new-characters.js';
import {laughingFace,animateLaugh} from './faces.js';
import * as THREE from './vendor/three.module.js';
import {ball,box as _box,tube,mesh,material as _material,cylinder as _cylinder} from './render-kit.js';
import {dogModel} from './naigou.js';
import {referenceCharacter} from './reference-characters.js';
const skin=new THREE.MeshPhysicalMaterial({color:'#e9be38',roughness:.48,metalness:0,clearcoat:.22,clearcoatRoughness:.5});
const red=new THREE.MeshPhysicalMaterial({color:'#df4a25',roughness:.48,clearcoat:.2});
function sculptPear(parent,profile,mat,depth=.79){const points=new THREE.SplineCurve(profile.map(p=>new THREE.Vector2(...p))).getPoints(120);const geo=new THREE.LatheGeometry(points.map(p=>new THREE.Vector2(Math.max(0,p.x),p.y)),112);geo.scale(1,1,depth);geo.computeVertexNormals();return mesh(parent,geo,mat);}
function eyes(parent,{y=2.02,z=.38,x=.245,size=.145,parts=null}={}){const lids=[];for(const s of [-1,1]){
 const eye=new THREE.Group();eye.position.set(s*x,y,z);eye.rotation.y=s*.15;parent.add(eye);parts?.push(eye);
 ball(eye,'#b9bd82',[0,0,.014],[size,size*1.08,size*.48]);ball(eye,'#758349',[0,-.004,.064],[size*.7,size*.85,.028]);ball(eye,'#182c23',[0,-.006,.088],[size*.43,size*.6,.021]);ball(eye,'#fff7cf',[-.025,.042,.109],[.018,.021,.008]);
 const lid=tube(eye,'#d1a62d',[[-size*.97,0,.01],[-size*.75,size*.85,.022],[0,size*1.09,.03],[size*.75,size*.85,.022],[size*.97,0,.01]],.019);lids.push(lid);
 const blink=ball(eye,skin,[0,0,.08],[size*1.05,.001,.07]);blink.visible=false;blink.name='eyelid';blink.userData.closedY=size*1.08;lids.push(blink);const crease=tube(eye,'#5d4128',[[-size*.9,0,.16],[0,.04,.18],[size*.9,0,.16]],.012);crease.name='closed-eye';crease.visible=false;lids.push(crease);
 }return lids;}
function rawCharacterModel(id){if(id==='naidan')return eggModel();if(id==='naicha')return teaModel();if(id==='naigou')return dogModel();if(id==='naiwa'||id==='naishu')return referenceCharacter(id);const root=new THREE.Group();root.name=id;const body=new THREE.Group();root.add(body);body.name='body';const arms=[],legs=[];let mouth,lids=[],eyeParts=[];
 if(id==='naichong'){
  // A continuous red cocoon with sculpted yellow bands, rather than stacked spheres.
  const shell=sculptPear(body,[[0,.08],[.43,.12],[.72,.4],[.82,.78],[.77,1.2],[.65,1.63],[.52,1.9],[.32,2.04],[0,2.1]],red,.92);const colors=[],pos=shell.geometry.attributes.position;for(let i=0;i<pos.count;i++){const y=pos.getY(i),x=pos.getX(i),z=pos.getZ(i),band=Math.max(...[.35,.65,.95].map(at=>Math.max(0,Math.min(1,(.078-Math.abs(y-at))/.025)))),facePatch=Math.max(0,Math.min(1,(1-(x/.53)**2-((y-1.49)/.44)**2)*7))*Math.max(0,Math.min(1,(z-.25)/.12)),c=new THREE.Color('#e9522c').lerp(new THREE.Color('#f6d35c'),Math.max(band,facePatch));colors.push(c.r,c.g,c.b);}shell.geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));shell.material=new THREE.MeshPhysicalMaterial({vertexColors:true,roughness:.5,clearcoat:.18});
  eyes(body,{y:1.63,z:.52,x:.22,size:.095,parts:eyeParts});for(const side of [-1,1]){const crease=tube(body,'#4e3623',[[side*.22-.11,1.63,.65],[side*.22,1.67,.67],[side*.22+.11,1.63,.65]],.014);crease.visible=false;lids.push(crease);}
  shell.updateMatrixWorld(true);const front=(x,y)=>new THREE.Raycaster(new THREE.Vector3(x,y,2),new THREE.Vector3(0,0,-1)).intersectObject(shell)[0]?.point.z||.6;mouth=tube(body,'#735323',[[-.19,1.36,front(-.19,1.36)+.015],[0,1.34,front(0,1.34)+.015],[.19,1.36,front(.19,1.36)+.015]],.013);
  for(const s of [-1,0,1])tube(body,'#da4727',[[s*.045,1.97,0],[s*.09,2.13,.01],[s*.15,2.23,.035]],.035);
 }else{
  sculptPear(body,[[0,.19],[.4,.18],[.67,.35],[.82,.75],[.83,1.1],[.73,1.48],[.58,1.84],[.52,2.13],[.43,2.36],[.24,2.46],[0,2.47]],skin);
  // A subtle belly sheen is painted by material/light, not a separate pasted-on sphere.
  lids=eyes(body,{y:2.12,z:.344,x:.246,size:.141});
  ball(body,skin,[0,1.98,.405],[.16,.09,.052]);
  mouth=tube(body,'#735124',[[-.205,1.9,.405],[-.1,1.875,.433],[0,1.87,.445],[.1,1.875,.433],[.205,1.9,.405]],.012);
  for(const s of [-1,1]){
   const arm=new THREE.Group();arm.position.set(s*.63,1.48,.02);body.add(arm);arm.name=s<0?'arm.L':'arm.R';const a=ball(arm,skin,[s*.14,-.3,.02],[.17,.43,.165]);a.rotation.z=s*.24;ball(arm,skin,[s*.21,-.62,.1],[.17,.16,.17]);for(let i=0;i<3;i++)ball(arm,skin,[s*.2+(i-1)*.065,-.66,.2],[.038,.07,.045]);arms.push(arm);
   const leg=new THREE.Group();leg.position.set(s*.34,.26,0);body.add(leg);leg.name=s<0?'leg.L':'leg.R';ball(leg,skin,[0,-.13,.11],[.245,.22,.32]);legs.push(leg);
  }
  if(id==='naishu'){
   for(const s of [-1,1]){const ear=new THREE.Group();ear.position.set(s*.57,2.46,-.035);ear.rotation.z=-s*.18;ear.rotation.y=s*.13;body.add(ear);ball(ear,skin,[s*.05,.1,0],[.38,.44,.115]);ball(ear,'#c88d48',[s*.05,.1,.091],[.278,.335,.035]);ball(ear,'#e6b966',[s*.05,.05,.113],[.22,.27,.015]);}
   const tail=tube(body,skin,[[0,.39,-.48],[.42,.16,-.8],[.88,.08,-.9],[1.23,.08,-.71],[1.32,.1,-.45]],.046);tail.name='tail';
  }else{
   // The reference has a small head smoothly joining the pear-shaped torso.
   tube(body,'#d0a52e',[[-.15,.57,-.61],[0,.46,-.67],[.15,.57,-.61]],.02);
  }
 }
 const laughMouth=laughingFace(body,{y:1.36,z:.69,width:.27,height:.29});
 root.userData={body,arms,legs,mouth,laughMouth,lids,eyeParts:eyeParts.length?eyeParts:null,id,vehicleId:0};return root;
}
export function characterModel(id){const model=rawCharacterModel(id);return toyCharacter(model);}
function bendForearm(arm,happy){const d=arm.userData;if(!d?.rest||d.bent===happy)return;d.bent=happy;const angle=happy?-.55:0,_c=Math.cos(angle),_s=Math.sin(angle),attr=d.mesh.geometry.attributes.position;const transform=(x,y,z)=>{if(happy&&y<-.62){const w=Math.max(0,Math.min(1,(-y-.62)/.24)),a=-d.side*.75*w*w*(3-2*w),cx=d.side*.16,cy=-.68,dx=x-cx,dy=y-cy;x=cx+dx*Math.cos(a)-dy*Math.sin(a);y=cy+dx*Math.sin(a)+dy*Math.cos(a);}if(y>-.22)return [x,y,z];const u=Math.max(0,Math.min(1,(-y-.22)/.4)),a=angle*u*u*(3-2*u),ca=Math.cos(a),sa=Math.sin(a),dy=y+.22;return [x,-.22+dy*ca-z*sa,dy*sa+z*ca];};for(let i=0;i<attr.count;i++)attr.setXYZ(i,...transform(d.rest[i*3],d.rest[i*3+1],d.rest[i*3+2]));attr.needsUpdate=true;if(happy){const normals=d.mesh.geometry.attributes.normal,j=new THREE.Matrix3(),n=new THREE.Vector3(),e=.0001;for(let i=0;i<attr.count;i++){const x=d.rest[i*3],y=d.rest[i*3+1],z=d.rest[i*3+2],p=transform(x,y,z),a=transform(x+e,y,z),b=transform(x,y+e,z),c=transform(x,y,z+e);j.set((a[0]-p[0])/e,(b[0]-p[0])/e,(c[0]-p[0])/e,(a[1]-p[1])/e,(b[1]-p[1])/e,(c[1]-p[1])/e,(a[2]-p[2])/e,(b[2]-p[2])/e,(c[2]-p[2])/e).invert().transpose();n.fromArray(d.restNormals,i*3).applyMatrix3(j).normalize();normals.setXYZ(i,n.x,n.y,n.z);}normals.needsUpdate=true;}else{d.mesh.geometry.attributes.normal.array.set(d.restNormals);d.mesh.geometry.attributes.normal.needsUpdate=true;}for(const finger of d.fingers)finger.node.position.set(...transform(finger.rest.x,finger.rest.y,finger.rest.z));}
export function animateCharacter(root,{time,moving=false,mood=null,alive:_alive=true}){const d=root.userData;if(!d?.body)return;const reduced=globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 const motion=reduced?0:1,happy=mood==='happy',beat=Math.sin(time*12),breath=Math.sin(time*2.2),bend=happy?(d.torsoPivot?.10+.44*((1+Math.sin(time*1.65))*.5)**2:.11+Math.sin(time*3.8)*.12)*motion:0;
 if(d.torsoMesh){d.torsoMesh.visible=!happy;d.laughTorsoMesh.visible=happy;}
 d.body.rotation.z=motion*Math.sin(time*(moving?11:happy?6:1.8))*(moving?.025:happy?.035:.006);d.body.rotation.x=happy?bend*(d.torsoPivot?.08:1):mood==='sad'?.12:0;if(d.torsoPivot)d.torsoPivot.rotation.x=happy?bend*.92:0;const toy=d.toy?1.14:1;d.body.scale.set(toy,(d.toy?.88:1)*(1+(happy?beat*.025:breath*.006)*motion),toy*(1+(happy?beat*.012:0)*motion));
 d.arms.forEach((a,i)=>{bendForearm(a,happy);a.rotation.x=happy?-.54+beat*.055*motion:moving?Math.sin(time*11+i*Math.PI)*.4*motion:0;a.rotation.z=happy?(i?-.42:.42):0;a.rotation.y=happy?(i?-.32:.32):0;});d.legs.forEach((l,i)=>l.rotation.x=moving?Math.sin(time*11+i*Math.PI)*.28*motion:happy?-.06:0);
 const blink=!happy&&Math.sin(time*.63+root.id%7)>.997;if(d.eyeParts){d.eyeParts.forEach(e=>e.visible=!happy&&!blink);d.lids.forEach(l=>l.visible=happy||blink);}else for(const l of d.lids)if(l.name==='eyelid'){l.visible=happy||blink;l.scale.y=happy||blink?l.userData.closedY:.001;}else if(l.name==='closed-eye')l.visible=happy||blink;
 if(d.canine){d.tail.rotation.z=Math.sin(time*(moving?9:3))*.08*motion;d.ears.forEach((e,i)=>e.rotation.x=Math.sin(time*7+i)*.06*motion);d.legs.forEach((leg,i)=>leg.rotation.x=moving?Math.sin(time*11+[0,Math.PI,Math.PI,0][i])*.34*motion:0);d.laughMouth.visible=true;animateLaugh(d.laughMouth,time,motion);}else if(d.tail)d.tail.rotation.y=Math.sin(time*2)*.05*motion;
 if(d.toyBase)d.toyBase.visible=!d.vehicleId;
 if(d.toy&&mood==='sad'){d.arms.forEach((arm,i)=>arm.rotation.z=i?.09:-.09);d.body.rotation.x=.13;}
 if(d.egg)d.body.position.y=(d.vehicleId?.3:0)+(moving?Math.abs(Math.sin(time*9))*.14*motion:0);
 if(d.laughMouth&&!d.canine){d.laughMouth.visible=happy;animateLaugh(d.laughMouth,time,motion);if(d.mouth)d.mouth.visible=!happy;}

}
export {vehicleModel} from './vehicles.js';
