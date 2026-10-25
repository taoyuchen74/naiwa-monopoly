import * as THREE from './vendor/three.module.js';
import {signTexture} from './render-kit.js';

export function roofLabelAnchor(model,clearance=.4){
 const bounds=new THREE.Box3().setFromObject(model);
 if(bounds.isEmpty())return model.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0,clearance,0));
 const center=bounds.getCenter(new THREE.Vector3());center.y=bounds.max.y+clearance;return center;
}

export function landmarkBadge(model,id,text,color){
 const badge=new THREE.Sprite(new THREE.SpriteMaterial({map:signTexture(text,{width:192,height:64,background:color,color:'#fff4dc'}),depthTest:false,depthWrite:false,transparent:true}));
 badge.position.copy(roofLabelAnchor(model));badge.scale.set(1.6,.53,1);badge.renderOrder=5;badge.userData.tile=id;return badge;
}
