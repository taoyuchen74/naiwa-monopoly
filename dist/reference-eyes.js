import * as THREE from './vendor/three.module.js';
import {ball,mesh,material} from './render-kit.js';
const irisCache=new Map();
function irisGeometry(green){if(irisCache.has(green))return irisCache.get(green).clone();const positions=[],colors=[],indices=[],sectors=128,rings=16,base=new THREE.Color(green),outer=base.clone().multiplyScalar(.7),inner=base.clone().lerp(new THREE.Color('#e2e6a6'),.2);
 for(let r=0;r<=rings;r++){const t=r/rings,rx=THREE.MathUtils.lerp(.064,.109,t),ry=THREE.MathUtils.lerp(.084,.129,t);for(let i=0;i<=sectors;i++){const a=i/sectors*Math.PI*2,z=.017+.026*Math.pow(1-t,.65);positions.push(Math.cos(a)*rx,Math.sin(a)*ry,z);const fibres=(Math.sin(a*41+Math.sin(a*13)*.5)+Math.sin(a*59+t*4))*.017;const c=inner.clone().lerp(base,THREE.MathUtils.smoothstep(t,.05,.7)).lerp(outer,THREE.MathUtils.smoothstep(t,.78,1)*.7).multiplyScalar(1+fibres);colors.push(c.r,c.g,c.b);}}
 for(let r=0;r<rings;r++)for(let i=0;i<sectors;i++){const k=r*(sectors+1)+i;indices.push(k,k+sectors+1,k+1,k+1,k+sectors+1,k+sectors+2);}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.setIndex(indices);g.computeVertexNormals();g.computeBoundingSphere();irisCache.set(green,g);return g.clone();
}
export function referenceEye(green='#93b54a'){
 const eye=new THREE.Group();eye.name='reference-eye';
 const base=ball(eye,new THREE.MeshPhysicalMaterial({color:green,roughness:.4,clearcoat:.25}),[0,0,.008],[.112,.132,.039]);base.name='eye-base';
 const iris=mesh(eye,irisGeometry(green),new THREE.MeshPhysicalMaterial({vertexColors:true,roughness:.32,clearcoat:.35,clearcoatRoughness:.25}));iris.name='curved-iris';
 const pupil=ball(eye,material('#152019',.12),[0,-.002,.043],[.064,.084,.011]);pupil.name='eye-pupil';
 const lens=ball(eye,new THREE.MeshPhysicalMaterial({color:'#e9f3de',transparent:true,opacity:.1,depthWrite:false,roughness:.035,metalness:.02,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.8}),[0,0,.012],[.114,.134,.053]);lens.name='cornea';
 const highlight=new THREE.MeshBasicMaterial({color:'#fff8df',toneMapped:false});for(const [x,y,s]of [[-.021,.032,1],[.025,-.034,.34]]){const z=.012+.053*Math.sqrt(1-(x/.114)**2-(y/.134)**2)+.002;const glint=ball(eye,highlight,[x,y,z],[.011*s,.014*s,.003]);glint.name='eye-catchlight';}
 eye.traverse(o=>{if(o.isMesh){o.castShadow=false;o.receiveShadow=false;}});eye.userData.detailedEye=true;return eye;
}
