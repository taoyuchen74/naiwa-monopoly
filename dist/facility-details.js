import * as THREE from './vendor/three.module.js';
import {box,ball,cylinder,tube,mesh,material} from './render-kit.js';
import {windowMaterial} from './surfaces.js';

export function hotelMarquee(parent,y,color){
 const sign=new THREE.Group();sign.name='hotel-bed-marquee';sign.position.set(0,y,0);parent.add(sign);
 for(const x of [-.4,.4])box(sign,'#9e8d73',[x,.15,0],[.045,.3,.055]);
 box(sign,color,[0,.5,0],[1.36,.66,.17]);box(sign,'#f6e8c5',[0,.5,0],[1.25,.55,.19]);
 box(sign,'#466c72',[0,.5,0],[1.16,.47,.205]);
 const glow=windowMaterial(new THREE.MeshStandardMaterial({color:'#fff0c1',roughness:.4}));
 for(const side of [-1,1]){const icon=new THREE.Group();icon.rotation.y=side<0?Math.PI:0;sign.add(icon);
  // A pillow, mattress and bedposts read without lettering at the normal map camera.
  box(icon,glow,[-.43,.46,.12],[.045,.32,.035]);box(icon,glow,[.43,.4,.12],[.045,.2,.035]);
  box(icon,glow,[0,.4,.12],[.88,.06,.035]);box(icon,glow,[.04,.48,.12],[.69,.12,.035]);
  ball(icon,glow,[-.31,.5,.12],[.075,.065,.025]);
 }
 return sign;
}

export function researchDish(parent,y){
 const assembly=new THREE.Group();assembly.name='research-dish';assembly.position.set(.1,y,-.1);parent.add(assembly);
 cylinder(assembly,'#738b90',[0,.07,0],.12,.16,.14,32);
 cylinder(assembly,'#738b90',[0,.17,0],.045,.065,.16,24);ball(assembly,'#738b90',[0,.22,0],[.065,.065,.065]);
 const head=new THREE.Group();head.position.y=.22;head.rotation.x=-.5;assembly.add(head);
 const profile=Array.from({length:41},(_,i)=>{const r=i/40*.32;return new THREE.Vector2(r,.115*(r/.32)**2);});
 const bowl=mesh(head,new THREE.LatheGeometry(profile,96),new THREE.MeshStandardMaterial({color:'#e5e7d9',metalness:.3,roughness:.32,side:THREE.DoubleSide}));bowl.name='parabolic-reflector';
 const rim=mesh(head,new THREE.TorusGeometry(.32,.012,12,96),material('#a6b7b7',.3,.6),[0,.115,0]);rim.rotation.x=Math.PI/2;
 for(let i=0;i<3;i++){const a=i/3*Math.PI*2;tube(head,'#829a9d',[[Math.cos(a)*.29,.095,Math.sin(a)*.29],[0,.29,0]],.009,16,8);}
 cylinder(head,'#b8a575',[0,.28,0],.037,.047,.08,24);ball(head,'#4c7d8c',[0,.32,0],[.034,.025,.034]);
 return assembly;
}
