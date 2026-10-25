import * as THREE from './vendor/three.module.js';
const coinGeometry=new THREE.CylinderGeometry(.16,.16,.05,32),rimGeometry=new THREE.TorusGeometry(.124,.01,6,28);
export const TRANSFER_DURATION=1.6;
export function transferPoint(from,to,t){const p=from.clone().lerp(to,t),height=Math.min(4.5,1.2+from.distanceTo(to)*.12);p.y+=4*t*(1-t)*height;return p;}
export class MoneyTransfer{
 constructor(from,to,amount){this.from=from.clone().add(new THREE.Vector3(0,1.05,0));this.to=to.clone().add(new THREE.Vector3(0,1.05,0));this.amount=amount;this.group=new THREE.Group();this.group.name='money-transfer';
  const gold=new THREE.MeshPhysicalMaterial({color:'#edbc44',metalness:.65,roughness:.27,clearcoat:.6}),rim=new THREE.MeshStandardMaterial({color:'#fff0ab',metalness:.5,roughness:.3});this.materials=[gold,rim];this.coins=[];
  const count=Math.max(5,Math.min(12,5+Math.floor(Math.log2(Math.max(1,amount))/2)));
  for(let i=0;i<count;i++){const coin=new THREE.Group(),body=new THREE.Mesh(coinGeometry,gold);body.rotation.x=Math.PI/2;coin.add(body);for(const side of [-1,1]){const edge=new THREE.Mesh(rimGeometry,rim);edge.position.z=side*.028;coin.add(edge);}this.group.add(coin);this.coins.push(coin);}
  const points=Array.from({length:65},(_,i)=>transferPoint(this.from,this.to,i/64));this.path=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:'#ffe0a0',transparent:true,opacity:.25,depthWrite:false}));this.group.add(this.path);this.update(0);
 }
 update(age){for(const [i,coin]of this.coins.entries()){const t=THREE.MathUtils.clamp((age-i*.035)/1.05,0,1);coin.position.copy(transferPoint(this.from,this.to,t));coin.rotation.set(.2+age*4+i*.7,age*7+i*.9,.15);coin.scale.setScalar(Math.min(1,t/.08,(1-t)/.1));}this.path.material.opacity=.25*(1-THREE.MathUtils.smoothstep(age,1.15,TRANSFER_DURATION));}
 dispose(){this.path.geometry.dispose();this.path.material.dispose();for(const mat of this.materials)mat.dispose();this.group.clear();}
}
