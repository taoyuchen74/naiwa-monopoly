import * as THREE from './vendor/three.module.js';
import {ball,box,roundedBox,tube,cylinder,mesh,material,batchStatic} from './render-kit.js';
const paint=()=>material('#e7b64a',.28,.12),cream=()=>material('#fff0cb',.36,.03),chrome=()=>material('#a4b7b8',.23,.7),rubber=()=>material('#283a3c',.85),glass=()=>material('#477c8c',.16,.18);
function ring(parent,radius,thickness,mat,pos){const m=mesh(parent,new THREE.TorusGeometry(radius,thickness,16,64),mat,pos);m.rotation.y=Math.PI/2;return m;}
function axle(parent,pos,radius,length,mat){const m=cylinder(parent,mat,pos,radius,radius,length,32);m.rotation.z=Math.PI/2;return m;}
function wheel(parent,pos,radius,bike=false){
 const root=new THREE.Group();root.name='vehicle-wheel';root.position.set(...pos);root.userData.radius=radius;parent.add(root);ring(root,radius-.05,.05,rubber(),[0,0,0]);
 if(bike){ring(root,radius-.08,.014,chrome(),[0,0,0]);for(let i=0;i<12;i++){const a=i*Math.PI/6;tube(root,chrome(),[[0,0,0],[0,Math.cos(a)*(radius-.085),Math.sin(a)*(radius-.085)]],.006,3,5);}axle(root,[0,0,0],.05,.16,chrome());}
 else{axle(root,[0,0,0],radius-.065,.15,rubber());for(const x of [-.08,.08]){axle(root,[x,0,0],radius*.56,.012,chrome());axle(root,[x*1.12,0,0],radius*.24,.016,cream());for(let i=0;i<5;i++){const a=i*Math.PI*2/5;axle(root,[x*1.17,Math.cos(a)*radius*.39,Math.sin(a)*radius*.39],.018,.008,rubber());}}}
 batchStatic(root);root.userData.dynamic=true;return root;
}
function milkCan(parent,pos,scale=1){const g=new THREE.Group();g.name='milk-can';g.position.set(...pos);g.scale.setScalar(scale);parent.add(g);cylinder(g,cream(),[0,.12,0],.15,.17,.24,40);cylinder(g,chrome(),[0,.245,0],.115,.15,.06,40);cylinder(g,cream(),[0,.29,0],.13,.13,.025,40);tube(g,chrome(),[[-.13,.23,0],[-.21,.23,0],[-.21,.1,0],[-.15,.1,0]],.014,12);tube(g,chrome(),[[.13,.23,0],[.21,.23,0],[.21,.1,0],[.15,.1,0]],.014,12);return g;}
function bicycle(root){
 const frame=material('#4c969b',.3,.35),wheels=[wheel(root,[0,.34,-.65],.34,true),wheel(root,[0,.34,.65],.34,true)];
 for(const x of [-.04,.04]){tube(root,frame,[[x,.34,-.65],[x,.8,-.19],[x,.38,.02],[x,.34,-.65]],.025,24);tube(root,frame,[[x,.8,-.19],[x,.82,.48],[x,.38,.02]],.028,20);tube(root,chrome(),[[x,.34,.65],[x,.65,.59],[x,.9,.48]],.019,16);}
 tube(root,chrome(),[[0,.71,-.18],[0,.91,-.2]],.026,8);roundedBox(root,rubber(),[0,.94,-.22],[.3,.07,.23],.03);
 tube(root,chrome(),[[0,.85,.48],[0,1.02,.44],[.24,1.04,.49]],.023,14);tube(root,chrome(),[[0,1.02,.44],[-.24,1.04,.49]],.023,12);for(const x of [-.24,.24])roundedBox(root,rubber(),[x,1.04,.49],[.13,.045,.055],.018);
 ring(root,.1,.012,chrome(),[.07,.38,.02]);const pedals=new THREE.Group();pedals.name='vehicle-pedals';pedals.userData.dynamic=true;pedals.position.set(0,.38,.02);root.add(pedals);axle(pedals,[0,0,0],.022,.3,chrome());for(const s of [-1,1]){tube(pedals,chrome(),[[s*.12,0,0],[s*.12,s*.1,0]],.016,4);roundedBox(pedals,rubber(),[s*.18,s*.1,0],[.14,.04,.1],.014);}
 tube(root,chrome(),[[.08,.38,.12],[.08,.33,-.65],[.08,.34,-.72],[.08,.38,.12]],.007,28);roundedBox(root,cream(),[0,.77,.82],[.37,.045,.29],.02);for(const x of [-.18,.18])for(const z of [.69,.95])tube(root,chrome(),[[x,.77,z],[x,.95,z]],.01,4);tube(root,frame,[[-.18,.95,.69],[.18,.95,.69],[.18,.95,.95],[-.18,.95,.95],[-.18,.95,.69]],.018,20);milkCan(root,[0,.79,.82],.58);
 root.userData.wheels=wheels;root.userData.pedals=pedals;
}
function car(root){
 const body=roundedBox(root,paint(),[0,.4,0],[1.32,.45,1.75],.17);body.name='vehicle-body';roundedBox(root,cream(),[0,.24,0],[1.29,.13,1.73],.06);roundedBox(root,paint(),[0,.55,.61],[1.23,.25,.62],.11);
 roundedBox(root,cream(),[0,.78,-.18],[1.03,.56,1.02],.17);const wind=roundedBox(root,glass(),[0,.84,.32],[.84,.3,.04],.018);wind.rotation.x=-.14;roundedBox(root,glass(),[0,.83,-.7],[.76,.27,.025],.012);
 for(const x of [-.52,.52]){roundedBox(root,glass(),[x,.84,-.16],[.025,.29,.75],.012);box(root,cream(),[x*1.02,.84,-.18],[.03,.34,.045]);roundedBox(root,paint(),[x*1.02,.55,-.2],[.025,.15,.72],.012);roundedBox(root,chrome(),[x*1.04,.64,-.36],[.025,.026,.12],.008);tube(root,chrome(),[[x,.78,.2],[x*1.23,.78,.27]],.014,6);roundedBox(root,paint(),[x*1.28,.79,.28],[.15,.1,.06],.025);}
 roundedBox(root,cream(),[0,1.07,-.18],[1.01,.09,1.01],.035);milkCan(root,[0,1.11,-.32],.9);
 for(const x of [-.42,.42]){ball(root,chrome(),[x,.48,.897],[.16,.145,.035]);ball(root,material('#fff4bd',.2),[x,.48,.926],[.12,.105,.025]);roundedBox(root,material('#d66146',.35),[x,.43,-.89],[.19,.09,.035],.02);}
 roundedBox(root,chrome(),[0,.23,.91],[1.13,.08,.12],.034);roundedBox(root,chrome(),[0,.23,-.91],[1.12,.08,.1],.03);roundedBox(root,rubber(),[0,.41,.91],[.35,.13,.025],.02);for(const x of [-.1,0,.1])box(root,chrome(),[x,.41,.93],[.018,.075,.015]);ball(root,cream(),[0,.65,.894],[.07,.085,.014]);
 root.userData.wheels=[];for(const x of [-.65,.65])for(const z of [-.55,.55])root.userData.wheels.push(wheel(root,[x,.28,z],.27));
}
export function vehicleModel(id){const root=new THREE.Group();root.name='vehicle';root.userData.vehicleId=id;if(id===1)bicycle(root);else if(id===2)car(root);batchStatic(root);return root;}
// Distance is in the model's local units. Stationary previews never spin wheels.
export function animateVehicle(root,distance,{reduced=false}={}){if(!root||reduced||!Number.isFinite(distance)||distance<=0)return;for(const wheel of root.userData.wheels||[])wheel.rotation.x=(wheel.rotation.x+distance/wheel.userData.radius)%(Math.PI*2);if(root.userData.pedals)root.userData.pedals.rotation.x=(root.userData.pedals.rotation.x+distance/.55)%(Math.PI*2);}
