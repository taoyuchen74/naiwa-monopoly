import * as THREE from './vendor/three.module.js';
import {characterModel} from './characters.js';
import {disposeUnique} from './render-kit.js';
const images=new Map();let renderer,unavailable=false;
export function portraitBitmap(id){if(images.has(id))return images.get(id);if(unavailable||typeof window==='undefined')return null;try{
 if(!renderer){renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});renderer.setSize(192,192);renderer.setPixelRatio(1);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;}
 const scene=new THREE.Scene(),model=characterModel(id);model.rotation.y=-.13;scene.add(model);scene.add(new THREE.HemisphereLight('#fff2d8','#a5b09b',1.8));for(const [x,y,z,color,intensity]of [[-3,5,7,'#fff4df',3.2],[4,3,-3,'#b5d7f6',2]]){const light=new THREE.DirectionalLight(color,intensity);light.position.set(x,y,z);scene.add(light);}const b=new THREE.Box3().setFromObject(model),h=b.max.y-b.min.y,center=b.min.y+h*.72,span=h*.33,camera=new THREE.OrthographicCamera(-span,span,span,-span,.1,30);camera.position.set(.2,center+.12,7);camera.lookAt(0,center,0);renderer.setClearColor('#000000',0);renderer.render(scene,camera);const result=renderer.domElement.toDataURL('image/png');disposeUnique(model);images.set(id,result);return result;
 }catch{unavailable=true;return null;}}
