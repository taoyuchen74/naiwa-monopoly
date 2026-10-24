import * as THREE from './vendor/three.module.js';
import {mesh,ball,tube,material} from './render-kit.js';
import {sculptVolumes} from './sculpt.js';
import {laughingFace} from './faces.js';
const cache=new Map();
function sculpt(parent,key,volumes,opts,mat){if(!cache.has(key))cache.set(key,sculptVolumes(volumes,opts));return mesh(parent,cache.get(key).clone(),mat);}
function face(body,{y,z,x=.22,size=.13,human=false}){const eyes=[],lids=[];for(const side of [-1,1]){const e=new THREE.Group();e.position.set(side*x,y,z);body.add(e);ball(e,human?'#fff8e7':'#a1b762',[0,0,0],[size,size*1.15,.044]);ball(e,human?'#64412d':'#7c9d42',[0,-.008,.032],[size*.7,size*.9,.025]);ball(e,'#201f18',[0,-.005,.05],[size*.42,size*.7,.017]);ball(e,'#fffdeb',[-.026,.035,.066],[.017,.022,.008]);eyes.push(e);const crease=tube(body,'#62432d',[[side*x-size,y,z+.06],[side*x,y+.045,z+.08],[side*x+size,y,z+.06]],.014);crease.visible=false;lids.push(crease);if(human)tube(body,'#523326',[[side*x-size,y+.17,z-.02],[side*x,y+.21,z],[side*x+size,y+.17,z-.02]],.018);}return {eyes,lids};}
export function eggModel(){const root=new THREE.Group(),body=new THREE.Group();root.name='naidan';root.add(body);body.name='body';
 const points=new THREE.SplineCurve([[0,.07],[.52,.16],[.88,.48],[1.02,.94],[.98,1.45],[.7,1.88],[.35,2.06],[0,2.1]].map(p=>new THREE.Vector2(...p))).getPoints(100);const geo=new THREE.LatheGeometry(points,112);geo.scale(1,1,.91);mesh(body,geo,new THREE.MeshPhysicalMaterial({color:'#f5d052',roughness:.4,clearcoat:.25}));
 const {eyes,lids}=face(body,{y:1.03,z:.91,x:.29,size:.12});const mouth=tube(body,'#665022',[[-.16,.8,.91],[0,.785,.94],[.16,.8,.91]],.016);const laughMouth=laughingFace(body,{y:.81,z:.95,width:.27,height:.3});
 root.userData={id:'naidan',body,arms:[],legs:[],eyeParts:eyes,lids,mouth,laughMouth,vehicleId:0,egg:true};return root;
}
// The farm video shows a golden ceramic mug with a handle and short gloved limbs.
export function teaModel(){
 const root=new THREE.Group(),body=new THREE.Group();root.name='naicha';root.add(body);body.name='body';const arms=[],legs=[];
 const ceramic=new THREE.MeshPhysicalMaterial({color:'#d8b873',roughness:.35,clearcoat:.34,clearcoatRoughness:.35}),rimMat=material('#f5e9bf',.38),yellow=material('#e3be54',.58),glove=material('#494738',.78);
 const profile=[[0,.53],[.43,.53],[.55,.59],[.63,.84],[.69,1.25],[.73,1.96],[.72,2.08],[.66,2.09],[.64,1.99],[.61,.86],[.46,.70],[0,.70]].map(p=>new THREE.Vector2(...p));
 const cup=mesh(body,new THREE.LatheGeometry(new THREE.SplineCurve(profile).getPoints(150),112),ceramic);cup.name='tea-cup';
 const rim=mesh(body,new THREE.TorusGeometry(.69,.036,16,96),rimMat,[0,2.06,0]);rim.rotation.x=Math.PI/2;rim.name='cup-rim';
 const drink=mesh(body,new THREE.CylinderGeometry(.648,.648,.025,96),material('#8e5b32',.28),[0,2.008,0]);drink.name='tea-surface';
 for(const [x,z,r]of [[-.25,.15,.045],[.2,-.1,.035],[-.1,-.26,.055],[.28,.24,.035]])ball(body,'#e5c28c',[x,2.028,z],[r,.01,r]);
 const handle=mesh(body,new THREE.TorusGeometry(.38,.105,20,80),ceramic,[.80,1.5,-.015],[.85,1.17,1]);handle.name='cup-handle';
 ball(body,ceramic,[.66,1.91,-.015],[.13,.14,.13]);ball(body,ceramic,[.64,1.07,-.015],[.13,.14,.13]);
 const {eyes,lids}=face(body,{y:1.79,z:.66,x:.23,size:.09});for(const side of [-1,1]){const brow=tube(body,'#55472c',[[side*.23-.085,1.96,.66],[side*.23,1.99,.68],[side*.23+.085,1.96,.66]],.017);brow.name='tea-brow';}
 const mouth=tube(body,'#64482c',[[-.20,1.50,.66],[0,1.45,.71],[.20,1.50,.66]],.015);const laughMouth=laughingFace(body,{y:1.53,z:.73,width:.28,height:.34});
 for(const side of [-1,1]){const a=new THREE.Group();a.position.set(side*.62,1.38,.10);body.add(a);const geo=sculptVolumes([[side*.08,-.1,.015,.145,.24,.15],[side*.17,-.29,.09,.14,.2,.15]],{min:[-.37,-.56,-.22],max:[.37,.2,.34],steps:[22,30,24],blend:.13});mesh(a,geo,yellow);ball(a,glove,[side*.16,-.4,.18],[.15,.16,.12]);for(let i=0;i<3;i++)ball(a,glove,[side*.16+(i-1)*.066,-.46,.24],[.045,.07,.055]);arms.push(a);
 const l=new THREE.Group();l.position.set(side*.28,.47,0);body.add(l);ball(l,yellow,[0,-.12,0],[.15,.27,.17]);const boot=mesh(l,new THREE.SphereGeometry(1,40,28),glove,[0,-.36,.06],[.20,.13,.26]);boot.name='tea-boot';legs.push(l);}
 root.userData={id:'naicha',body,arms,legs,eyeParts:eyes,lids,mouth,laughMouth,vehicleId:0,mug:true};return root;
}
