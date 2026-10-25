import * as THREE from './vendor/three.module.js';

// Temporary per-building materials leave pooled textures and neighbouring lots untouched.
export function buildingReveal(root){
 root.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(root);
 if(bounds.isEmpty())bounds.set(new THREE.Vector3(0,root.position.y,0),new THREE.Vector3(1,root.position.y+1,1));
 const plane=new THREE.Plane(new THREE.Vector3(0,-1,0),bounds.min.y),materials=new Map(),objects=[];
 root.traverse(o=>{if(!o.isMesh)return;const original=o.material,flag=o.userData.effectReveal;
  const clone=mat=>{if(!materials.has(mat)){const m=mat.clone();m.onBeforeCompile=mat.onBeforeCompile.bind(mat);m.customProgramCacheKey=mat.customProgramCacheKey.bind(mat);m.clippingPlanes=[...(mat.clippingPlanes||[]),plane];m.clipShadows=true;materials.set(mat,m);}return materials.get(mat);};
  o.material=Array.isArray(original)?original.map(clone):clone(original);o.userData.effectReveal=true;objects.push({o,original,flag});
 });
 let disposed=false;
 return {bounds,plane,set(fraction){plane.constant=THREE.MathUtils.lerp(bounds.min.y-.015,bounds.max.y+.015,THREE.MathUtils.clamp(fraction,0,1));},restore(){if(disposed)return;disposed=true;for(const {o,original,flag}of objects){o.material=original;if(flag===undefined)delete o.userData.effectReveal;else o.userData.effectReveal=flag;}for(const m of materials.values())m.dispose();}};
}

export function structuralChange(previous,next){return !!previous&&(previous.level!==(next?.level||0)||(previous.buildingType||'legacy')!==(next?.buildingType||'legacy'));}
