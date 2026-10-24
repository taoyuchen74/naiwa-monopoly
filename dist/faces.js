import * as THREE from './vendor/three.module.js';
import {mesh,ball,tube,material} from './render-kit.js';
export function laughingFace(parent,{y=2.3,z=.4,width=.31,height=.34}={}){
 const face=new THREE.Group();face.position.set(0,y,z);parent.add(face);face.name='laugh-face';
 const shape=new THREE.Shape();shape.moveTo(-width,.075);shape.bezierCurveTo(-width*.6,.01,width*.6,.01,width,.075);shape.bezierCurveTo(width*.94,-height*.85,width*.55,-height,0,-height);shape.bezierCurveTo(-width*.55,-height,-width*.94,-height*.85,-width,.075);
 const cavity=mesh(face,new THREE.ExtrudeGeometry(shape,{depth:.025,bevelEnabled:true,bevelSize:.014,bevelThickness:.012,bevelSegments:4,curveSegments:32}),material('#301b14',.84),[0,0,0]);cavity.name='mouth-cavity';
 const rim=tube(face,'#a27629',[[-width,.075,.018],[-width*.85,-height*.5,.016],[0,-height,.018],[width*.85,-height*.5,.016],[width,.075,.018]],.014);
 const upper=new THREE.Group();face.add(upper);upper.name='upper-teeth';for(let i=0;i<8;i++){const x=(i-3.5)*width*.215,yy=.035+.036*(Math.abs(i-3.5)/3.5)**2;const tooth=new THREE.Mesh(new THREE.BoxGeometry(width*.22,.043,.025,1,1,1),material('#fff7de',.38));tooth.position.set(x,yy,.043);tooth.rotation.z=(i-3.5)*.032;upper.add(tooth);}
 const jaw=new THREE.Group();jaw.name='laugh-jaw';face.add(jaw);for(let i=0;i<6;i++){const x=(i-2.5)*width*.215,yy=-height+.045+.048*(Math.abs(i-2.5)/2.5)**2;ball(jaw,'#f9eccc',[x,yy,.036],[width*.115,.027,.022]);}ball(jaw,'#bc7d6f',[0,-height*.72,.042],[width*.43,.046,.022]);
 face.visible=false;face.userData={jaw,cavity,rim,height};return face;
}
export function animateLaugh(face,time,motion=1){const d=face.userData;if(!d?.jaw)return;const syllable=Math.sin(time*10.5),open=.92+.14*syllable*motion;face.scale.set(1+Math.sin(time*5.25)*.025*motion,open,1);d.jaw.position.y=-.012*(1+syllable)*motion;d.jaw.rotation.x=.12*syllable*motion;}
