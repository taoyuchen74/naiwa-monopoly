import * as THREE from './vendor/three.module.js';
import {LIGHTING,lightingMode} from './lighting.js';
const maps=new Map(),water=new Map(),windTime={value:0},windowLightGain={value:0};
let surfaceLighting='day';
export function setSurfaceLighting(mode){surfaceLighting=lightingMode(mode);const p=LIGHTING[surfaceLighting];windowLightGain.value=p.windows;for(const mat of water.values()){mat.uniforms.deepColor.value.set(p.waterDeep);mat.uniforms.shallowColor.value.set(p.waterShallow);}}
export function windowMaterial(mat){mat.emissive.set('#ffd391');mat.emissiveIntensity=1;mat.onBeforeCompile=shader=>{shader.uniforms.windowLightGain=windowLightGain;shader.fragmentShader='uniform float windowLightGain;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance *= windowLightGain;');};mat.customProgramCacheKey=()=>'warm-window-v1';return mat;}
export function grainTexture(kind='stone'){
 if(maps.has(kind))return maps.get(kind);const size=512,data=new Uint8Array(size*size*4);let seed=49191;
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const n=seed/4294967296;let v=.87+n*.13;
  if(kind==='road')v=.68+n*.28+(n>.985?.12:0);
  if(kind==='grass')v=.65+n*.27+.06*Math.sin(x*.13)*Math.cos(y*.17);
  if(kind==='roof'){const yy=y%64,xx=(x+(Math.floor(y/64)%2)*32)%64;v=(yy<3||xx<2)?.52:.78+n*.19+.04*Math.sin(yy/64*Math.PI);}
  if(kind==='paving'){const xx=(x+(Math.floor(y/64)%2)*64)%128,yy=y%64;v=(xx<3||yy<3)?.61:.86+n*.14;}
  const at=(x+y*size)*4;data[at]=data[at+1]=data[at+2]=Math.round(Math.min(1,v)*255);data[at+3]=255;}
 const texture=new THREE.DataTexture(data,size,size);texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.generateMipmaps=true;texture.minFilter=THREE.LinearMipmapLinearFilter;texture.magFilter=THREE.LinearFilter;texture.anisotropy=16;texture.needsUpdate=true;maps.set(kind,texture);return texture;
}
export function windMaterial(mat,grass=false){mat.onBeforeCompile=shader=>{shader.uniforms.landscapeWindTime=windTime;shader.vertexShader='uniform float landscapeWindTime;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\nfloat windAnchor=0.;\n#ifdef USE_INSTANCING\nwindAnchor=instanceMatrix[3].x*.55+instanceMatrix[3].z*.35;\n#else\nwindAnchor=modelMatrix[3].x*.55+modelMatrix[3].z*.35;\n#endif\ntransformed.x+=sin(landscapeWindTime*1.2+windAnchor)*${grass?'pow(max(position.y,0.),2.)*.4':'pow(max(position.y+1.,0.),2.)*.012'};`);};mat.customProgramCacheKey=()=>grass?'grass-wind-v1':'leaf-wind-v1';return mat;}
export function detailMaterial(color,roughness=.72,metalness=0){
 const green=['#86ad72','#97aa7b','#a9b484','#7c9a60'].includes(color),road=['#667b7b','#718784'].includes(color),paving=['#e1cda5','#d7cab0','#c0b18a','#ebd69c','#ddd3ab'].includes(color);
 const mat=new THREE.MeshPhysicalMaterial({color,roughness,metalness,clearcoat:roughness<.6?.25:.05,clearcoatRoughness:.45,envMapIntensity:.65});
 if(['#347447','#458b4e','#63a357','#7eb56a','#dba0b3','#e7b3c3','#f4cbd5','#f7dae0'].includes(color))windMaterial(mat);
 if(['#152019','#182c23','#201f18','#27311d','#1c291d'].includes(color)){mat.roughness=.12;mat.clearcoat=1;mat.clearcoatRoughness=.08;}
 if(['#ffe8a8','#ffe9a2','#fff4bd'].includes(color)){mat.emissive=new THREE.Color('#ffc66d');mat.emissiveIntensity=.55;}
 if(['#528b9c','#397b8c','#4f91a5'].includes(color))windowMaterial(mat);
 if(green||road||paving){const texture=grainTexture(green?'grass':road?'road':'paving');mat.map=texture;mat.bumpMap=texture;mat.bumpScale=road?.009:green?.014:.012;mat.roughness=.88;}return mat;
}
export function roofMaterial(color){const mat=detailMaterial(color,.68,0);mat.map=grainTexture('roof');mat.bumpMap=mat.map;mat.bumpScale=.027;return mat;}
export function waterMaterial(river=false){if(water.has(river))return water.get(river);const mat=new THREE.ShaderMaterial({name:river?'river-silk':'coastal-water',uniforms:{time:{value:0},river:{value:river?1:0},deepColor:{value:new THREE.Color(LIGHTING[surfaceLighting].waterDeep)},shallowColor:{value:new THREE.Color(LIGHTING[surfaceLighting].waterShallow)}},vertexShader:`varying vec3 world;uniform float time;uniform float river;void main(){vec3 p=position;vec4 w=modelMatrix*vec4(p,1.);world=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`precision highp float;varying vec3 world;uniform float time;uniform float river;uniform vec3 deepColor;uniform vec3 shallowColor;
 void main(){vec2 p=world.xz;float a=atan(p.y/16.8,p.x/21.);float edge=length(vec2(p.x/21.,p.y/16.8))-(1.+.06*sin(5.*a)+.035*cos(3.*a));float shallow=1.-smoothstep(.015,.25,edge);float w=sin(p.x*2.9+p.y*2.1+time*.7)+sin(p.y*4.3-p.x*.7-time*.9)*.55;vec3 normal=normalize(vec3(-cos(p.x*2.9+p.y*2.1+time*.7)*.12,1.,-cos(p.y*4.3-p.x*.7-time*.9)*.12));vec3 light=normalize(vec3(-.4,.8,.5));float glint=pow(max(0.,dot(reflect(-light,normal),normalize(vec3(.3,.9,.4)))),200.);vec3 color=mix(deepColor,shallowColor,max(shallow,river*.62));color+=vec3(.006,.012,.014)*w;float caustic=pow(max(0.,sin(p.x*5.+sin(p.y*3.+time*.4))+sin(p.y*4.-time*.5)-.9),3.);color+=caustic*.018*max(shallow,river*.35);float foam=(1.-smoothstep(.007,.026,abs(edge-.025-.006*sin(a*28.+time*.8))))*(1.-river);color=mix(color,vec3(.78,.91,.85),foam*.65);color+=glint*vec3(.2,.18,.13);gl_FragColor=vec4(color,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`});mat.toneMapped=true;water.set(river,mat);return mat;}
export function animateSurfaces(time){windTime.value=time;for(const mat of water.values())mat.uniforms.time.value=time;}

export const isSharedSurfaceTexture=texture=>[...maps.values()].includes(texture);
