import {fineTree,architecturalDetails} from './scenery.js';
import {roofMaterial} from './surfaces.js';
import {BUSINESSES} from './businesses.js';
import * as THREE from './vendor/three.module.js';
import {ball,box,mesh,material,cylinder,tube,sign,batchStatic} from './render-kit.js';
export const ARCHITECTURES=['tea','theater','factory','garden','hotel','tower'];
export function architectureFor(t){if(t.buildingType&&BUSINESSES[t.buildingType])return BUSINESSES[t.buildingType].architecture;if(/茶|奶茶|奶盖/.test(t.name))return'tea';if(/剧|影|照相/.test(t.name))return'theater';if(/厂|工坊|面包/.test(t.name))return'factory';if(/花园|洗澡/.test(t.name))return'garden';if(/旅馆|公寓|食堂/.test(t.name))return'hotel';return ARCHITECTURES[t.group%6];}
const glass=material('#528b9c',.24,.25),cream='#f2dfb6',trim='#fff1d1',brick='#ba7054';
function windows(g,floors,w=1.35,depth=.95){for(let f=0;f<floors;f++){const y=.57+f*.43;for(const x of [-w*.27,w*.27]){box(g,trim,[x,y,depth/2+.014],[.3,.3,.045]);box(g,glass,[x,y,depth/2+.042],[.23,.235,.02]);box(g,'#a7d1d2',[x-.055,y+.055,depth/2+.055],[.04,.1,.012]);}for(const z of [-depth*.25,depth*.25]){box(g,glass,[w/2+.018,y,z],[.025,.24,.2]);box(g,trim,[w/2+.035,y-.15,z],[.06,.035,.27]);}}}
function roof(g,y,w=1.65,d=1.2,color='#c96548'){const shape=new THREE.Shape();shape.moveTo(-w/2,0);shape.lineTo(0,.48);shape.lineTo(w/2,0);shape.closePath();const geo=new THREE.ExtrudeGeometry(shape,{depth:d,bevelEnabled:false});mesh(g,geo,roofMaterial(color),[0,y,-d/2]);box(g,color,[0,y+.48,0],[.08,.06,d+.07]);for(const side of [-1,1]){const vertices=[0,y+.486,-d/2,0,y+.486,d/2,side*w/2,y+.006,-d/2,side*w/2,y+.006,d/2],surface=new THREE.BufferGeometry();surface.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));surface.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,0,2,2,0,2,2],2));surface.setIndex(side>0?[0,1,2,1,3,2]:[0,2,1,1,2,3]);surface.computeVertexNormals();mesh(g,surface,roofMaterial(color));}for(let i=0;i<Math.ceil(d/.12);i++)cylinder(g,color,[0,y+.515,-d/2+i*.12],.038,.038,.125,16).rotation.x=Math.PI/2;}
function fence(g,w=1.6,d=1.25){for(const z of [-d/2,d/2])for(let i=0;i<7;i++)box(g,'#ddd2aa',[-w/2+i*w/6,.22,z],[.055,.36,.055]);for(const x of [-w/2,w/2])for(let i=0;i<5;i++)box(g,'#ddd2aa',[x,.22,-d/2+i*d/4],[.055,.36,.055]);for(const z of [-d/2,d/2])box(g,'#eadcb6',[0,.25,z],[w,.04,.04]);}
function tree(g,x,z,scale=.7){return fineTree(g,x,z,scale);}
function balcony(g,y,w=1.4){box(g,trim,[0,y,.67],[w,.08,.4]);for(const x of [-w/2,w/2])box(g,'#526b6b',[x,y+.15,.8],[.025,.3,.025]);box(g,'#526b6b',[0,y+.3,.8],[w,.025,.025]);for(let x=-w/2;x<=w/2;x+=.16)box(g,'#526b6b',[x,y+.15,.8],[.018,.3,.018]);}
export function propertyBuilding(t,level,ownerColor='#d6bb76',owned=false){
 const g=new THREE.Group();g.name=`property-${t.id}-${level}`;g.userData.architecture=architectureFor(t);g.userData.level=level;
 if(level===0){
  const ground=mesh(g,new THREE.PlaneGeometry(1.95,1.62),owned?'#a9b484':'#97aa7b',[0,-.08,0]);ground.rotation.x=-Math.PI/2;ground.name='flat-ground';ground.castShadow=false;
  const corners=[[-.975,-.81],[.975,-.81],[.975,.81],[-.975,.81]],points=[];
  for(let side=0;side<4;side++){const a=corners[side],b=corners[(side+1)%4],length=Math.hypot(b[0]-a[0],b[1]-a[1]);for(let n=0;n<length;n+=.27){const end=Math.min(n+.15,length);points.push(a[0]+(b[0]-a[0])*n/length,-.065,a[1]+(b[1]-a[1])*n/length,a[0]+(b[0]-a[0])*end/length,-.065,a[1]+(b[1]-a[1])*end/length);}}
  const lines=new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(points,3)),new THREE.LineBasicMaterial({color:owned?ownerColor:'#fff2c4'}));lines.name='dashed-boundary';g.add(lines);g.userData.vacant=true;return g;
 }
 box(g,'#d7cab0',[0,.025,0],[1.95,.09,1.62]);box(g,ownerColor,[0,.09,.78],[1.95,.08,.1]);
 const type=architectureFor(t),floors=level,wall=owned?'#'+new THREE.Color(ownerColor).lerp(new THREE.Color('#fff1d5'),.73).getHexString():null;g.userData.ownerColor=owned?ownerColor:null;
 if(type==='residence'){const h=.64+level*.46;box(g,wall||'#eddbb9',[0,h/2+.1,0],[1.46,h,1.02]);windows(g,level,1.46,1.02);box(g,'#775640',[0,.35,.56],[.29,.48,.07]);roof(g,h+.11,1.72,1.23,ownerColor);for(let f=1;f<level;f++)box(g,trim,[0,.75+f*.46,0],[1.56,.055,1.1]);if(level>=3)balcony(g,1.2,1.55);sign(g,'奶家住宅',[0,.96,.58],.96,.23,{background:'#56756a',color:'#fff4da'});return batchStatic(architecturalDetails(g,type,level,ownerColor));}
 if(type==='research'){const h=.55+level*.25;cylinder(g,wall||'#d8dccb',[0,h/2+.12,0],.73,.79,h,48);for(const x of [-.42,0,.42])box(g,glass,[x,h*.65,.7],[.23,.25,.03]);cylinder(g,ownerColor,[0,h+.17,0],.86,.86,.16,48);const dome=mesh(g,new THREE.SphereGeometry(.56,40,24,0,Math.PI*2,0,Math.PI/2),'#89aab5',[0,h+.25,0]);dome.scale.y=.75;tube(g,'#657f85',[[0,h+.45,0],[.12,h+.91,-.1]],.025);mesh(g,new THREE.SphereGeometry(.27,24,16),'#e8d9b9',[.13,h+.92,-.1],[1,.25,1]);for(const x of [-.7,.7])box(g,'#526f94',[x,.34,-.1],[.28,.035,.8]);sign(g,'研 究 所',[0,.66,.8],1.08,.28,{background:'#4c768c',color:'#fff5cf'});return batchStatic(architecturalDetails(g,type,level,ownerColor));}
 if(type==='gas'){for(const x of [-.72,.72])box(g,'#e9ddbf',[x,.82,0],[.085,1.5,.085]);box(g,ownerColor,[0,1.62,0],[1.9,.15,1.46]);box(g,trim,[0,1.49,.76],[1.9,.12,.05]);for(const x of [-.45,.45]){box(g,'#d6dacb',[x,.46,.05],[.3,.8,.31]);box(g,'#486c75',[x,.64,.22],[.24,.18,.025]);tube(g,'#3e4b45',[[x+.13,.67,.04],[x+.28,.54,.04],[x+.23,.19,.12],[x+.13,.35,.22]],.025);}sign(g,'奶 罐 加 油',[0,1.61,.77],1.65,.22,{background:ownerColor,color:'#fff6dd'});return batchStatic(architecturalDetails(g,type,level,ownerColor));}
 if(type==='mall'){const h=.75+level*.5;box(g,wall||'#e0d2b4',[0,h/2+.1,0],[1.62,h,1.2]);for(let f=0;f<level;f++){box(g,glass,[0,.51+f*.5,.625],[1.35,.31,.035]);box(g,trim,[0,.73+f*.5,.64],[1.76,.06,.07]);}box(g,ownerColor,[0,h+.18,0],[1.83,.18,1.4]);const bag=box(g,'#e8c36b',[0,h+.52,0],[.5,.48,.3]);mesh(g,new THREE.TorusGeometry(.13,.025,8,24,Math.PI),'#84623f',[0,h+.8,0]);sign(g,'奶 家 百 货',[0,1.01,.7],1.54,.3,{background:'#91615c',color:'#fff2c7'});return batchStatic(architecturalDetails(g,type,level,ownerColor));}
 if(type==='tea'){
  const h=.65+level*.65;box(g,wall||'#e9cda1',[0,h/2+.08,0],[1.5,h,1.05]);for(let f=1;f<level;f++){for(const x of [-.37,.37]){box(g,trim,[x,.78+f*.65,.55],[.41,.39,.035]);box(g,glass,[x,.78+f*.65,.575],[.33,.3,.025]);}box(g,trim,[0,1+f*.65,.04],[1.61,.07,1.12]);}box(g,trim,[0,.4,.55],[1.26,.58,.06]);box(g,glass,[0,.4,.59],[1.15,.5,.035]);box(g,'#87654c',[0,.13,.63],[1.3,.12,.25]);
  for(let i=0;i<8;i++){const a=box(g,i%2?'#fff0d2':'#ba6a52',[-.66+i*.19,.88,.72],[.19,.08,.5]);a.rotation.x=.2;box(g,i%2?'#fff0d2':'#ba6a52',[-.66+i*.19,.8,.95],[.19,.13,.04]);}
  roof(g,h+.08,1.72,1.23,owned?ownerColor:'#5d8a80');sign(g,t.buildingType==='chain'?'奶家连锁店':'奶茶小铺',[0,1.12,.57],1.12,.24,{background:'#527a6b',color:'#fff2cc'});
  const cup=new THREE.Group();cylinder(cup,'#e6b96f',[0,.23,0],.2,.15,.4);cylinder(cup,trim,[0,.45,0],.22,.22,.05);tube(cup,'#fff5d8',[[.04,.46,0],[.04,.73,-.05]],.026);for(let i=0;i<4;i++)ball(cup,'#624b3a',[-.11+i*.07,.1,.15],[.027,.027,.02]);cup.position.set(.42,h+.52,0);g.add(cup);
  if(level>=2){balcony(g,1.18,1.6);box(g,'#697c4c',[-.6,1.3,.65],[.25,.16,.22]);}if(level>=3){balcony(g,1.83,1.6);mesh(g,new THREE.ConeGeometry(.4,.2,12),'#bd6953',[-.48,h+.52,-.1]);box(g,'#8c785d',[-.48,h+.25,-.1],[.03,.65,.03]);}
 }else if(type==='theater'){
  const h=.8+level*.45;box(g,wall||'#b97561',[0,h/2+.1,0],[1.52,h,1.16]);box(g,'#f2d29c',[0,.55,.61],[1.35,.95,.07]);for(const x of [-.45,0,.45])box(g,'#4c6369',[x,.43,.67],[.32,.61,.035]);box(g,owned?ownerColor:'#f1c451',[0,1.08,.79],[1.78,.3,.4]);sign(g,'大 笑 剧 场',[0,1.09,1.0],1.65,.27,{background:'#833e43',color:'#ffdda1'});
  for(let i=0;i<9;i++)ball(g,'#ffe9a2',[-.78+i*.195,1.24,1.0],[.035,.035,.035]);
  for(const x of [-.67,.67]){box(g,'#dbc5a0',[x,h*.64,.65],[.17,h*.85,.12]);ball(g,'#f5ce69',[x,h+.13,.54],[.14,.14,.13]);}
  const arch=mesh(g,new THREE.TorusGeometry(.48,.1,10,32,Math.PI),owned?ownerColor:'#f1c451',[0,h+.12,.03]);sign(g,'笑',[0,h+.35,.15],.46,.46,{background:'#b95b53',color:'#fff1bb'});if(level>=3){for(const x of [-.55,.55]){const light=cylinder(g,'#4a5f69',[x,h+.3,-.35],.09,.09,.28);light.rotation.x=.45;}}
 }else if(type==='factory'){
  const h=.62+level*.35;box(g,wall||'#c68860',[0,h/2+.1,0],[1.6,h,1.1]);box(g,'#53616c',[0,.45,.57],[.74,.63,.035]);for(let y=.2;y<.75;y+=.08)box(g,'#8b9d9e',[0,y,.6],[.69,.025,.025]);windows(g,Math.max(1,level-1),1.6,1.1);roof(g,h+.1,1.82,1.25,owned?ownerColor:'#5c7886');
  for(let i=0;i<Math.min(level,2);i++){const x=.46-i*.32;cylinder(g,'#ac6554',[x,h+.5,-.37],.12,.17,1.25);for(let y=h+.2;y<h+1.1;y+=.28)cylinder(g,'#e0bc91',[x,y,-.37],.13,.13,.045);}
  sign(g,'奶块工坊',[0,1.0,.6],1.03,.24,{background:'#526d73',color:'#fff0c5'});for(const [x,z] of [[-.67,.76],[.57,.79]]){box(g,'#c19a62',[x,.2,z],[.25,.3,.25]);box(g,'#edd5a4',[x,.2,z+.131],[.03,.29,.02]);}
  g.userData.smoke=true;
 }else if(type==='garden'){
  box(g,'#7c9a60',[0,.12,0],[1.82,.1,1.45]);box(g,'#ddd3ab',[0,.18,0],[.4,.025,1.45]);for(const x of [-.62,.62]){box(g,'#dfc394',[x,.24,.4],[.46,.25,.35]);for(let i=0;i<4;i++)ball(g,['#e7ad8c','#fff0c9','#d97f6e'][i%3],[x-.15+i*.1,.42,.4],[.07,.09,.07]);}
  if(level===1){tree(g,-.45,-.38,.7);tree(g,.5,-.3,.55);}else{
   for(const x of [-.65,.65])for(const z of [-.45,.35])box(g,'#e3cf9f',[x,.68,z],[.07,1.1,.07]);for(let x=-.8;x<=.8;x+=.18)box(g,owned?ownerColor:'#b7c88a',[x,1.22,-.06],[.09,.06,1.1]);
   for(let i=0;i<5;i++)ball(g,'#5f8955',[-.65+i*.3,1.25,-.35],[.23,.09,.2]);if(level>=3){const roof=mesh(g,new THREE.ConeGeometry(.86,.4,4),owned?ownerColor:'#537c69',[0,1.53,-.05]);roof.rotation.y=Math.PI/4;cylinder(g,'#b5d2ce',[0,.38,-.1],.37,.37,.18);cylinder(g,'#d7dbb1',[0,.43,-.1],.43,.43,.05);}
  if(level>=4){box(g,owned?ownerColor:'#7fa37f',[0,1.73,-.05],[1.36,.12,.96]);for(const x of [-.48,.48])for(const z of [-.35,.25])cylinder(g,'#e8d7ac',[x,2.06,z],.035,.045,.6);const upper=mesh(g,new THREE.ConeGeometry(.76,.34,4),owned?ownerColor:'#618b73',[0,2.5,-.05]);upper.rotation.y=Math.PI/4;}if(level===5){cylinder(g,'#b5c6b2',[0,2.82,-.05],.23,.3,.26);ball(g,'#edca72',[0,3.03,-.05],[.16,.18,.16]);}}sign(g,'奶家花园',[0,.49,.77],.75,.2,{background:'#426b54',color:'#fff1ce'});
 }else if(type==='hotel'){
  const h=.55+level*.58;box(g,wall||'#eed9b4',[0,h/2+.1,0],[1.45,h,1.02]);windows(g,level+1,1.45,1.02);box(g,'#865a50',[0,.32,.55],[.32,.45,.06]);for(let f=1;f<=level;f++)balcony(g,.3+f*.43,1.55);box(g,owned?ownerColor:'#aa5a4b',[0,h+.15,0],[1.68,.12,1.23]);
  sign(g,'奶 家 旅 馆',[0,h+.35,.18],1.3,.33,{background:'#a65245',color:'#fff3ca'});for(const x of [-.6,.6])box(g,'#d9bd88',[x,h+.22,0],[.04,.48,.04]);if(level>=3){cylinder(g,'#6096a0',[.45,h+.4,-.3],.22,.22,.4);box(g,'#e4d7b5',[.45,h+.62,-.3],[.55,.07,.55]);}
 }else{
  const h=.8+level*.62;box(g,wall||'#d6d5c1',[0,h/2+.1,0],[1.35,h,1.0]);box(g,glass,[0,h/2+.12,.51],[1.22,h-.12,.02]);box(g,glass,[.69,h/2+.12,0],[.025,h-.12,.88]);for(let f=.3;f<h;f+=.33){box(g,'#cbd7cf',[0,f,.535],[1.4,.035,.04]);box(g,'#cbd7cf',[.71,f,0],[.04,.035,1]);}for(const x of [-.45,0,.45])box(g,'#cbd7cf',[x,h/2+.12,.54],[.035,h,.035]);box(g,owned?ownerColor:'#dae4d5',[0,h+.15,0],[1.53,.15,1.14]);box(g,owned?ownerColor:'#4d6574',[.2,h+.4,-.1],[.7,.35,.7]);tube(g,'#70868a',[[.3,h+.5,-.1],[.3,h+1,-.1]],.018);sign(g,'奶币中心',[0,.48,.57],.9,.25,{background:'#486e7f',color:'#fff0c0'});
 }return batchStatic(architecturalDetails(g,type,level,ownerColor));
}
export function landmark(t){const g=new THREE.Group();g.name=`landmark-${t.kind}`;box(g,'#d7c8a7',[0,.07,0],[2.0,.15,1.72]);const h=1.25;
 if(t.kind==='bank'){
  box(g,'#e5d3ae',[0,.72,-.15],[1.58,1.28,1.06]);for(const x of [-.6,-.2,.2,.6]){cylinder(g,'#fff0ce',[x,.78,.62],.08,.1,1.1);box(g,'#b7b293',[x,.24,.62],[.23,.12,.24]);}const ped=mesh(g,new THREE.ConeGeometry(1,.42,3),'#d4b882',[0,1.6,.38]);ped.rotation.y=Math.PI/2;box(g,'#b5a278',[0,.17,.54],[1.94,.1,.75]);sign(g,'奶 币 银 行',[0,1.25,.74],1.3,.25,{background:'#456779',color:'#fff0c2'});ball(g,'#dbb45d',[0,1.66,.65],[.16,.16,.08]);
 }else if(t.kind==='hospital'){
  box(g,'#e5e3cf',[0,.75,0],[1.7,1.4,1.13]);windows(g,2,1.7,1.13);box(g,'#c0cdcb',[0,1.5,0],[1.9,.12,1.3]);box(g,'#cb6056',[0,1.85,0],[.18,.65,.09]);box(g,'#cb6056',[0,1.85,.01],[.57,.18,.1]);box(g,'#507b85',[0,.35,.62],[.6,.5,.08]);box(g,'#7ba8a8',[0,.67,.77],[1.02,.08,.5]);sign(g,'奶蛙疗养院',[0,1.19,.59],1.45,.25,{background:'#fff1d3',color:'#8c4b49'});
 }else if(t.kind==='stock'){
  const v=propertyBuilding({...t,name:'证券所',group:5},3,'#7a9cac');g.add(v);sign(g,'奶家证券所',[0,1.4,.56],1.2,.32,{background:'#344f67',color:'#f7dc84'});
 }else if(t.kind==='shop'){
  const v=propertyBuilding({...t,name:'奶茶店',group:0},1,'#d1aa6e');g.add(v);sign(g,'奶伴补给站',[0,1.12,.59],1.25,.25,{background:'#bd6b4b',color:'#fff3ce'});
 }else if(t.kind==='spirit'){
  for(let i=0;i<3;i++){box(g,'#b3a07c',[0,.13+i*.09,0],[1.95-i*.23,.1,1.6-i*.18]);}for(const x of [-.55,.55])for(const z of [-.35,.35])cylinder(g,'#b14c37',[x,.85,z],.07,.07,1.1);const r=mesh(g,new THREE.ConeGeometry(1.12,.5,4),'#557f6b',[0,1.55,0]);r.rotation.y=Math.PI/4;ball(g,'#dfbb5c',[0,1.88,0],[.1,.15,.1]);sign(g,'大笑神殿',[0,1.13,.42],.9,.28,{background:'#8e3d30',color:'#ffe49c'});
 }else if(t.kind==='event'){
  cylinder(g,'#bb967a',[0,.2,0],.85,.9,.27);for(const x of [-.65,.65]){box(g,'#4b5f67',[x,.9,-.35],[.07,1.5,.07]);box(g,'#4b5f67',[x,.55,.4],[.3,.7,.28]);}box(g,'#4b5f67',[0,1.6,-.35],[1.35,.06,.06]);const stage=sign(g,t.id===33?'奶蛙街舞':'表情包广场',[0,1.18,-.3],1.15,.56,{background:'#b75a5d',color:'#ffe9bd'});g.userData.stage=true;
 }else if(t.kind==='rest'){
  g.add(propertyBuilding({...t,name:'小旅馆',group:4},1,'#84aa7a'));roof(g,1.35,1.85,1.3,'#698b68');sign(g,'奶蛙的小窝',[0,1.15,.8],1.1,.24,{background:'#6e875a',color:'#fff0cb'});
 }else if(t.kind==='tax'){
  box(g,'#b9cbc3',[0,.65,0],[1.4,1.1,1.05]);roof(g,1.2,1.6,1.2,'#778d7a');for(const x of [-.4,.2])cylinder(g,'#78999b',[x,.4,.7],.16,.16,.6);sign(g,'清洁站',[0,.88,.56],1,.28,{background:'#6a8575',color:'#fff1ce'});
 }else if(t.kind==='start'){
  for(const x of [-.75,.75]){cylinder(g,'#c4ae7d',[x,.8,0],.12,.16,1.4);ball(g,'#e5bd4f',[x,1.6,0],[.2,.2,.2]);}box(g,'#456b70',[0,1.45,0],[1.9,.4,.22]);sign(g,'奶 家 起 点',[0,1.46,.13],1.7,.3,{background:'#456b70',color:'#fff1ce'});for(const x of [-.6,-.2,.2,.6])box(g,'#f4e5bd',[x,.17,.6],[.2,.03,.5]);
 }return batchStatic(g);}
export function townTree(parent,x,z,scale=1){const g=new THREE.Group();tree(g,0,0,scale);g.position.set(x,.12,z);parent.add(g);return g;}
