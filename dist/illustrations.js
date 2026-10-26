import * as THREE from './vendor/three.module.js';
import {propertyBuilding,landmark} from './buildings.js';
import {disposeUnique} from './render-kit.js';
import {portrait} from './portraits.js';
import {vehicleModel} from './vehicles.js';
const cache=new Map();let renderer;
export function art(key){
 const shapes={
 car:'<path d="M22 58h116v26H22Z" fill="#eab949" stroke="#a17d35" stroke-width="3"/><path d="M45 58l11-30h54l18 30Z" fill="#f0dfb3" stroke="#a17d35" stroke-width="3"/><path d="M61 34h17v19H54ZM84 34h22l11 19H84Z" fill="#72a8b5"/><circle cx="47" cy="83" r="15" fill="#38545c"/><circle cx="118" cy="83" r="15" fill="#38545c"/><circle cx="47" cy="83" r="7" fill="#e7d5ae"/><circle cx="118" cy="83" r="7" fill="#e7d5ae"/><rect x="132" y="61" width="7" height="10" rx="2" fill="#fff3b8"/>',
 tea:'<path d="M53 34h56l-7 61H61Z" fill="#edcf97" stroke="#ae8e58" stroke-width="3"/><ellipse cx="81" cy="34" rx="30" ry="8" fill="#f9eac0"/><path d="M86 16l-5 54" stroke="#6aaa9c" stroke-width="7"/><path d="M62 62h38v25H62Z" fill="#f5e4bc"/><g fill="#7c634a"><circle cx="71" cy="84" r="4"/><circle cx="83" cy="87" r="4"/><circle cx="92" cy="81" r="4"/></g>',
 theater:'<path d="M33 45h94v51H33Z" fill="#ebd7aa" stroke="#a58b5a" stroke-width="3"/><path d="M24 42l56-26 57 26Z" fill="#ce8063"/><rect x="28" y="46" width="104" height="20" rx="4" fill="#dcaf57"/><path d="M48 69h22v27H48ZM91 69h22v27H91Z" fill="#866c54"/><path d="M45 56h71" stroke="#fff0bb" stroke-width="5" stroke-dasharray="4 8"/>',
 factory:'<path d="M28 49h103v48H28Z" fill="#dbb082" stroke="#9b805b" stroke-width="3"/><path d="M25 50l35-21 28 21 27-18 25 18Z" fill="#77a0a7"/><path d="M108 41V16h17v31" fill="#bb8063"/><path d="M42 66h21v17H42ZM80 65h40v32H80Z" fill="#668b98"/><circle cx="119" cy="9" r="8" fill="#d7d7bd"/>',
 steal:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M72 65h20v29H72Z" fill="#956f4a"/><path d="M110 16v55" stroke="#8e744d" stroke-width="4"/><path d="M112 17h30l-8 10 8 10h-30Z" fill="#d98567"/>',
 dice:'<g transform="translate(45 23) rotate(-12 35 34)"><rect width="70" height="66" rx="15" fill="#fff8dc" stroke="#a87936" stroke-width="4"/><g fill="#d36542"><circle cx="18" cy="17" r="6"/><circle cx="51" cy="17" r="6"/><circle cx="35" cy="33" r="6"/><circle cx="18" cy="50" r="6"/><circle cx="51" cy="50" r="6"/></g></g>',
 shield:'<path d="M80 14L120 29V55Q115 81 80 99Q45 81 40 55V29Z" fill="#60a7a3" stroke="#376d68" stroke-width="4"/><path d="M80 24L108 35V54Q104 74 80 87Q55 74 52 54V35Z" fill="#99d6bf"/><path d="M63 52l12 13 24-27" fill="none" stroke="#fff4bc" stroke-width="8" stroke-linecap="round"/>',
 block:'<path d="M38 42V96M122 42V96" stroke="#8d7048" stroke-width="10"/><rect x="23" y="33" width="114" height="34" rx="5" fill="#f5ce64" stroke="#b68b3f" stroke-width="3"/><path d="M38 35l20 30M70 35l20 30M102 35l20 30" stroke="#df7754" stroke-width="11"/>',
 recover:'<path d="M55 27h50v57q0 12-25 12T55 84Z" fill="#fcf2cf" stroke="#b9a16b" stroke-width="3"/><rect x="58" y="19" width="44" height="15" rx="5" fill="#76ad84"/><rect x="56" y="48" width="48" height="28" rx="4" fill="#a7ce9c"/><path d="M73 62h14M80 55v14" stroke="#fff9d4" stroke-width="5"/>',
 turn:'<path d="M109 86Q139 38 94 27Q66 21 46 43" fill="none" stroke="#70aaa3" stroke-width="18" stroke-linecap="round"/><path d="M47 16L28 53l43 2Z" fill="#70aaa3"/><circle cx="91" cy="82" r="15" fill="#eab85d"/>',
 slow:'<ellipse cx="81" cy="67" rx="42" ry="27" fill="#75b48a" stroke="#497b58" stroke-width="3"/><path d="M57 49l24-9 23 11 1 23-24 15-24-13Z" fill="#a0cc8b" stroke="#639968" stroke-width="3"/><circle cx="131" cy="63" r="15" fill="#c7d998"/><circle cx="137" cy="59" r="3" fill="#385547"/><path d="M51 85l-8 9M108 85l8 9" stroke="#78a870" stroke-width="13" stroke-linecap="round"/>',
 house:'<path d="M39 48h83v46H39Z" fill="#f1dfb0" stroke="#b79a63" stroke-width="3"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M72 65h20v29H72Z" fill="#956f4a"/><path d="M47 61h16v17H47ZM101 61h13v17h-13Z" fill="#77b9ca"/>',
 bank:'<path d="M28 38L80 12l52 26Z" fill="#e4bb62" stroke="#9c7a45" stroke-width="3"/><path d="M30 92h100M36 42h88M45 45v44M68 45v44M92 45v44M115 45v44" stroke="#f9e8b9" stroke-width="10"/><rect x="25" y="91" width="110" height="11" rx="4" fill="#b7985e"/><circle cx="80" cy="28" r="8" fill="#fff4bf"/>',
 stocks:'<path d="M26 22v74h111" fill="none" stroke="#ad9467" stroke-width="4"/><path d="M42 89V69M66 89V52M91 89V35M117 89V17" stroke="#72aaa1" stroke-width="16"/><path d="M32 60l32-21 25 6 39-30" fill="none" stroke="#e1aa4b" stroke-width="5"/>',
 vehicle:'<circle cx="42" cy="79" r="22" fill="#f0dfb7" stroke="#5d7774" stroke-width="6"/><circle cx="117" cy="79" r="22" fill="#f0dfb7" stroke="#5d7774" stroke-width="6"/><path d="M42 79l26-40 24 40H42l20-28h47l8 28M99 26l10 1-2 24M61 34h23" fill="none" stroke="#69a5a3" stroke-width="7" stroke-linecap="round"/>',
 demolish:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#d78c62"/><path d="M83 51l-11 17 16 6-13 21" fill="none" stroke="#927650" stroke-width="4"/><g transform="rotate(30 91 42)"><rect x="86" y="35" width="13" height="60" rx="4" fill="#a78553"/><rect x="62" y="18" width="61" height="26" rx="6" fill="#8caaaa"/></g>',
 build:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M78 61v24M66 73h24" stroke="#c09143" stroke-width="7"/><path d="M96 38v-6a16 16 0 0132 0v6" fill="#f1c45f" stroke="#a9863d" stroke-width="3"/><path d="M91 39h43" stroke="#f7d67a" stroke-width="7"/>',
 };
 return `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" class="item-art" aria-hidden="true"><ellipse cx="80" cy="98" rx="55" ry="7" fill="#8c794d" opacity=".12"/>${shapes[key]||shapes.house}</svg>`;
}
export function guideArt(kind,text,character='naiwa'){return `<div class="illustrated-guide"><div class="guide-drawing">${art(kind)}</div><div><span class="guide-face">${portrait(character)}</span><p>${text}</p></div></div>`;}
function modelImage(key,tile,makeModel,description,fallback,width=200,minSpan=1.6){
 if(cache.has(key))return cache.get(key);let model;
 try{if(!renderer){renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});renderer.setPixelRatio(1);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;}renderer.setSize(width,width*.8);
 const scene=new THREE.Scene();model=makeModel();scene.add(model);scene.add(new THREE.HemisphereLight('#fff6df','#8a9e9a',2.4));const light=new THREE.DirectionalLight('#ffebc1',2.5);light.position.set(-3,6,5);scene.add(light);const bounds=new THREE.Box3().setFromObject(model),center=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3()),span=Math.max(minSpan,size.y*.72);const camera=new THREE.OrthographicCamera(-span*1.25,span*1.25,span,-span,.1,50);camera.position.set(center.x+4,center.y+3.3,center.z+5);camera.lookAt(center);renderer.render(scene,camera);const result=`<img class="building-thumb" src="${renderer.domElement.toDataURL('image/png')}" alt="${tile.name} · ${description}">`;cache.set(key,result);return result;
 }catch{return art(fallback);}finally{if(model)disposeUnique(model);}
}
export function buildingImage(tile,level,color='#70a58b',owned=true){
 return modelImage(`property:${tile.name}:${tile.group}:${tile.buildingType||'legacy'}:${tile.id}:${level}:${color}:${owned}`,tile,()=>propertyBuilding(tile,level,color,owned),level?level+'级建筑':'空地','house');
}
export function landmarkImage(tile){
 const fallback={bank:'bank',hospital:'recover',stock:'stocks',shop:'vehicle',spirit:'shield',event:'theater',rest:'house',tax:'recover',start:'dice'};
 return modelImage(`landmark:${tile.id}:${tile.kind}:${tile.name}`,tile,()=>landmark(tile),'公共建筑模型',fallback[tile.kind]||'house',320);
}
export function vehicleImage(id){return modelImage(`vehicle:${id}`,{name:id===1?'奶蛙自行车':'奶罐小车'},()=>vehicleModel(id),'交通工具模型',id===1?'vehicle':'car',320,.9);}
