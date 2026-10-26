import * as THREE from './vendor/three.module.js';
import {ball,box,cylinder,tube,mesh,material,batchStatic} from './render-kit.js';
import {grainTexture,windMaterial,windowMaterial} from './surfaces.js';
const leafColors=['#347447','#458b4e','#63a357','#7eb56a'],flowerColors=['#edb4ba','#f2d578','#c9b8e7','#fff1d0'];
export function fineTree(parent,x,z,size=1,variant=0){const tree=new THREE.Group(),canopy=new THREE.Group();cylinder(tree,'#855c3b',[0,.52,0],.075,.15,1.04,20);for(const side of [-1,1])tube(tree,'#855c3b',[[0,.52,0],[side*.18,.89,.025],[side*.31,1.18,.05]],.04);for(let i=0;i<13;i++){const angle=i*2.39996,r=i<3?.1:.38,y=1.24+(i%4)*.14;const crown=ball(canopy,variant%7===3?['#dba0b3','#e7b3c3','#f4cbd5','#f7dae0'][i%4]:leafColors[(i+variant)%4],[Math.cos(angle)*r,y,Math.sin(angle)*r],[.33+(i%3)*.025,.39,.34]);crown.rotation.z=angle*.13;}tree.add(canopy);tree.position.set(x,.08,z);tree.scale.setScalar(size);parent.add(tree);return tree;}
export function scenicDetails(scene){const root=new THREE.Group();root.name='riverside-details';scene.world.add(root);let seed=91871;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};const safe=(x,z,gap=2)=>(!scene.fountain||Math.hypot(scene.fountain.position.x-x,scene.fountain.position.z-z)>gap)&&scene.tiles.every(t=>Math.hypot(t.x-x,t.z-z)>gap&&Math.hypot(t.lotX-x,t.lotZ-z)>gap);
 // Public riverbanks, never buildings or occupied lots.
 for(let side of [-1,1])for(let i=0;i<100;i++){const x=-15+i*.3,z=Math.sin(x*.21)*.8+side*(.73+random()*.35);if(!safe(x,z,1.7))continue;const stone=ball(root,i%3?'#b8b4a0':'#ddd5b7',[x,.07,z],[.11+random()*.1,.06+random()*.05,.08+random()*.1]);stone.rotation.y=random()*6.28;if(i%5===0){for(let k=0;k<5;k++){const stem=cylinder(root,'#607c43',[x+(k-2)*.07,.24,z],.012,.018,.38,8);stem.rotation.z=(k-2)*.12;}}}
 for(let i=0;i<20;i++){const x=-13+random()*26,z=(random()>.5?1:-1)*(3.3+random()*4);if(!safe(x,z,2.2))continue;fineTree(root,x,z,.65+random()*.35,i);}
 for(let i=0;i<12;i++){const x=-12+random()*24,z=(random()>.5?1:-1)*(2.3+random()*3.7);if(!safe(x,z,1.8))continue;const bed=new THREE.Group();box(bed,'#c7b18a',[0,.085,0],[.78,.12,.55]);box(bed,'#56774b',[0,.16,0],[.7,.07,.47]);for(let k=0;k<9;k++){const fx=(k%3-1)*.19,fz=(Math.floor(k/3)-1)*.15,fy=.28+random()*.06;cylinder(bed,'#5b8744',[fx,.22,fz],.009,.009,.18,6);for(let p=0;p<5;p++){const a=p/5*Math.PI*2;ball(bed,flowerColors[(i+k)%4],[fx+Math.cos(a)*.047,fy,fz+Math.sin(a)*.047],[.04,.025,.04]);}ball(bed,'#d6a83f',[fx,fy+.014,fz],[.024,.018,.024]);}bed.position.set(x,0,z);root.add(bed);}
 // Meadow blades use actual geometry, with a gentle vertex bend.
 const blade=new THREE.BufferGeometry();blade.setAttribute('position',new THREE.Float32BufferAttribute([-.026,0,0,.026,0,0,-.017,.16,0,.017,.16,0,.014,.29,0],3));blade.setIndex([0,1,2,1,3,2,2,3,4]);blade.computeVertexNormals();const grass=new THREE.InstancedMesh(blade,windMaterial(new THREE.MeshStandardMaterial({color:'#71a15c',side:THREE.DoubleSide,roughness:.9}),true),1600);const matrix=new THREE.Matrix4(),q=new THREE.Quaternion(),p=new THREE.Vector3(),scale=new THREE.Vector3();let count=0;for(let i=0;i<10000&&count<1600;i++){const x=-16+random()*32,z=-10+random()*20;if(!safe(x,z,2)||Math.abs(z-Math.sin(x*.21)*.8)<1.2)continue;p.set(x,.065,z);q.setFromAxisAngle(new THREE.Vector3(0,1,0),random()*6.28);scale.setScalar(.5+random()*.8);matrix.compose(p,q,scale);grass.setMatrixAt(count++,matrix);}grass.name='meadow-grass';grass.count=count;grass.receiveShadow=true;grass.castShadow=false;grass.computeBoundingSphere();root.add(grass);batchStatic(root);return root;
}
export function architecturalDetails(g,type,level,color){
 const ornament=new THREE.Group();ornament.name='architectural-details';g.add(ornament);const bounds=new THREE.Box3().setFromObject(g),height=bounds.max.y;
 if(['residence','tea','hotel','tower','mall'].includes(type)){
  for(const side of [-1,1]){tube(ornament,'#b5a184',[[side*.76,.2,-.5],[side*.76,Math.max(.5,height-.35),-.5]],.018);box(ornament,'#a7b5b2',[side*.77,.18,-.5],[.08,.1,.08]);}
  box(ornament,'#d4c4a2',[0,.14,.72],[.66,.1,.23]);box(ornament,'#ede2c2',[0,.09,.82],[.8,.08,.22]);
  const glass=windowMaterial(new THREE.MeshPhysicalMaterial({color:'#397b8c',metalness:.15,roughness:.12,clearcoat:1,envMapIntensity:1.2}));
  for(let f=0;f<Math.min(level,5);f++)for(const side of [-1,1]){const y=.58+f*.43;box(ornament,'#f7edcf',[side*.38,y,.575],[.31,.29,.045]);box(ornament,glass,[side*.38,y,.603],[.24,.22,.015]);box(ornament,'#b4a47d',[side*.38,y,.625],[.018,.23,.018]);box(ornament,'#fff0cc',[side*.38,y-.16,.62],[.37,.055,.1]);if(f===0||f===2){box(ornament,'#a78b68',[side*.38,y-.22,.66],[.3,.09,.16]);for(let j=0;j<3;j++)ball(ornament,j%2?'#d79e97':'#76a65d',[side*.38+(j-1)*.08,y-.16,.67],[.06,.055,.05]);}}
  const w=type==='mall'?1.62:type==='tower'?1.35:1.46,d=type==='mall'?1.2:1.02,h=type==='tea'?.65+level*.65:type==='hotel'?.55+level*.58:type==='mall'?.75+level*.5:type==='tower'?.8+level*.62:.64+level*.46;
  if(type==='tower'){box(ornament,glass,[0,h/2+.12,-.515],[1.22,h-.12,.025]);box(ornament,glass,[-.69,h/2+.12,0],[.025,h-.12,.88]);for(let y=.3;y<h;y+=.33){box(ornament,'#cbd7cf',[0,y,-.54],[1.4,.035,.04]);box(ornament,'#cbd7cf',[-.71,y,0],[.04,.035,1]);}for(const x of [-.45,0,.45])box(ornament,'#cbd7cf',[x,h/2+.12,-.54],[.035,h,.035]);}
  else for(let floor=0;floor<level;floor++){const y=.5+(h-.72)*(floor/Math.max(1,level-1));for(const x of [-w*.27,w*.27]){box(ornament,'#f7edcf',[x,y,-d/2-.018],[.33,.29,.04]);box(ornament,glass,[x,y,-d/2-.045],[.25,.22,.016]);box(ornament,'#b4a47d',[x,y,-d/2-.06],[.018,.23,.014]);}for(const z of [-d*.26,d*.26]){box(ornament,'#f7edcf',[-w/2-.018,y,z],[.04,.29,.29]);box(ornament,glass,[-w/2-.045,y,z],[.016,.22,.22]);}box(ornament,'#efe5cb',[0,y+.19,0],[w+.06,.04,d+.06]);}
 }

 if(type==='research'){const h=.55+level*.25,glass=material('#4f91a5',.18,.2);for(let f=0;f<Math.max(1,Math.floor(h/.4));f++)for(let i=0;i<10;i++){const a=i/10*Math.PI*2,y=.4+f*.35,r=.79-.06*(y-.12)/h;const frame=box(ornament,'#e9e4d2',[Math.sin(a)*(r+.015),y,Math.cos(a)*(r+.015)],[.29,.25,.035]);frame.rotation.y=a;const pane=box(ornament,glass,[Math.sin(a)*(r+.039),y,Math.cos(a)*(r+.039)],[.23,.19,.016]);pane.rotation.y=a;}}

 if(['tower','hotel','mall','research'].includes(type)){
  const roofY={hotel:.55+level*.58+.15,research:.55+level*.25+.17,mall:.75+level*.5+.18,tower:.8+level*.62+.15}[type];
  const service=new THREE.Group();service.name='rooftop-service-unit';service.position.set(-.4,roofY+.13,-.35);ornament.add(service);
  box(service,'#b8bab0',[0,0,0],[.36,.19,.26]);for(let i=0;i<5;i++)box(service,'#667c7b',[-.13+i*.065,.102,0],[.022,.012,.22]);
  tube(ornament,'#9faaa3',[[.45,roofY+.03,-.4],[.45,roofY+.55,-.4]],.014);
 }

 return g;
}
