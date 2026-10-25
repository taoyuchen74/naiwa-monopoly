import * as THREE from './vendor/three.module.js';
import {EffectComposer} from './vendor/addons/postprocessing/EffectComposer.js';
import {RenderPass} from './vendor/addons/postprocessing/RenderPass.js';
import {GTAOPass} from './vendor/addons/postprocessing/GTAOPass.js';
import {UnrealBloomPass} from './vendor/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from './vendor/addons/postprocessing/OutputPass.js';
import {ShaderPass} from './vendor/addons/postprocessing/ShaderPass.js';
import {FXAAShader} from './vendor/addons/shaders/FXAAShader.js';
export class HighQuality{
 constructor(renderer,scene,camera){this.renderer=renderer;const room=new THREE.Scene();room.add(new THREE.Mesh(new THREE.SphereGeometry(30,32,20),new THREE.MeshBasicMaterial({color:'#a8c0cb',side:THREE.BackSide})));for(const [x,y,z,s,color]of [[-8,12,9,8,[4.5,3.9,2.9]],[9,8,-7,6,[1.8,2.7,4.2]],[0,16,0,10,[3,3,2.7]]]){const panel=new THREE.Mesh(new THREE.PlaneGeometry(s,s),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,color:new THREE.Color().setRGB(...color)}));panel.position.set(x,y,z);panel.lookAt(0,0,0);room.add(panel);}const generator=new THREE.PMREMGenerator(renderer);this.environment=generator.fromScene(room,.05);scene.environment=this.environment.texture;scene.environmentIntensity=.32;generator.dispose();room.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});
  this.composer=new EffectComposer(renderer);this.composer.addPass(new RenderPass(scene,camera));this.ao=new GTAOPass(scene,camera,1,1);this.ao.blendIntensity=.7;this.ao.updateGtaoMaterial({radius:.62,distanceExponent:1.5,thickness:.6,distanceFallOff:1,scale:1,samples:32,screenSpaceRadius:false});this.composer.addPass(this.ao);this.bloom=new UnrealBloomPass(new THREE.Vector2(1,1),.08,.5,1.2);this.composer.addPass(this.bloom);this.composer.addPass(new OutputPass());this.fxaa=new ShaderPass(FXAAShader);this.composer.addPass(this.fxaa);
 }
 resize(w,h,ratio){this.composer.setPixelRatio(ratio);this.composer.setSize(w,h);this.fxaa.uniforms.resolution.value.set(1/(w*ratio),1/(h*ratio));}
 studio(value){this.ao.updateGtaoMaterial({radius:value?.28:.62,thickness:value?.18:.6});this.ao.blendIntensity=value?.58:.7;}
 render(){this.composer.render();}
 dispose(){if(this.disposed)return;this.disposed=true;for(const pass of this.composer.passes)pass.dispose?.();this.composer.dispose();this.environment.dispose();}
}
