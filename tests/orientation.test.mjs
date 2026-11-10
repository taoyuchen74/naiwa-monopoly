import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GameOrientation,mountGameOverlays} from '../dist/orientation.js';

test('legacy dialog portals join the game rotation layer without replacing their live state',()=>{
 const nodes=new Map(['sheetBackdrop','sheet','toast','bootError','unrelated'].map(id=>[id,{id,parentElement:null,scrollTop:87}]));
 const moved=[],root={ownerDocument:{getElementById:id=>nodes.get(id)},contains:node=>node.parentElement===root,appendChild(node){node.parentElement=root;moved.push(node.id);}};
 const dialog=nodes.get('sheet');dialog.hidden=false;dialog.decision={tile:7};
 mountGameOverlays(root);
 assert.deepEqual(moved,['sheetBackdrop','sheet','toast','bootError']);
 assert.equal(dialog.parentElement,root);assert.equal(dialog.hidden,false);assert.equal(dialog.scrollTop,87);assert.deepEqual(dialog.decision,{tile:7});
 mountGameOverlays(root);assert.equal(moved.length,4,'already mounted overlays should stay in place');
 assert.equal(nodes.get('unrelated').parentElement,null);
});

test('dialogs, backdrops and notifications share the game rotation ancestor',async()=>{
 const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8'),stack=[],parents=new Map(),voidTags=new Set(['meta','link','img','input','br','hr']);
 for(const match of html.matchAll(/<(\/?)([a-z][\w-]*)\b([^>]*)>/gi)){const [,close,raw,attrs]=match,tag=raw.toLowerCase();if(close){if(stack.at(-1)?.tag===tag)stack.pop();continue;}const id=/\bid="([^"]+)"/.exec(attrs)?.[1];if(id)parents.set(id,stack.map(n=>n.id).filter(Boolean));if(!voidTags.has(tag))stack.push({tag,id});}
 for(const id of ['sheet','sheetBackdrop','toast','bootError'])assert.ok(parents.get(id)?.includes('app'),`${id} must rotate with the game`);
});

test('forced layouts expose the same logical width and height to all child panels and reset after rotation',()=>{
 const oldWindow=globalThis.window,oldRaf=globalThis.requestAnimationFrame;const values=new Map(),root={dataset:{},style:{setProperty:(k,v)=>values.set(k,v)}},button={setAttribute(){},getAttribute(){return "";}};
 try{globalThis.requestAnimationFrame=fn=>fn();globalThis.window={innerWidth:390,innerHeight:844,dispatchEvent(){}};const layout=Object.create(GameOrientation.prototype);Object.assign(layout,{root,button,rules:[],mode:'landscape',resize(){}});layout.apply();assert.equal(root.dataset.rotated,'true');assert.equal(values.get('--game-vw'),'8.44px');assert.equal(values.get('--game-vh'),'3.9px');assert.equal(root.style.transform,'rotate(90deg)');
  window.innerWidth=844;window.innerHeight=390;layout.apply();assert.equal(root.dataset.rotated,'false');assert.equal(root.style.transform,'');assert.equal(values.get('--game-vw'),'8.44px');assert.equal(values.get('--game-vh'),'3.9px');layout.mode='portrait';layout.apply();assert.equal(root.dataset.rotated,'true');assert.equal(values.get('--game-vw'),'3.9px');assert.equal(values.get('--game-vh'),'8.44px');
 }finally{globalThis.window=oldWindow;globalThis.requestAnimationFrame=oldRaf;}
});


test('game starts landscape without a button or OS lock and keeps it across device and keyboard changes', () => {
 const previous = {window:globalThis.window,document:globalThis.document,raf:globalThis.requestAnimationFrame};
 const events = new Map(),values = new Map();let editing=false,locks=0;
 const input={matches:()=>editing,scrollIntoView(){}},doc={styleSheets:[],activeElement:input,getElementById(){},addEventListener(){}},root={ownerDocument:doc,dataset:{},style:{setProperty:(k,v)=>values.set(k,v)}};
 try {
  globalThis.document=doc;globalThis.requestAnimationFrame=fn=>fn();
  globalThis.window={innerWidth:390,innerHeight:844,addEventListener:(type,fn)=>events.set(type,fn),dispatchEvent(){},screen:{orientation:{addEventListener(){},lock(){locks++;throw Error('denied');}}}};
  const orientation=new GameOrientation(root,null);
  assert.equal(orientation.mode,'landscape');assert.equal(root.dataset.layout,'landscape');assert.equal(root.dataset.rotated,'true');
  window.innerWidth=844;window.innerHeight=390;events.get('resize')();
  assert.equal(root.dataset.layout,'landscape');assert.equal(root.dataset.rotated,'false');
  window.innerWidth=390;window.innerHeight=844;events.get('resize')();
  editing=true;window.innerHeight=400;events.get('resize')();
  assert.equal(root.dataset.layout,'landscape');assert.equal(root.dataset.keyboard,'true');assert.equal(root.dataset.rotated,'true');assert.equal(locks,0);
 } finally {globalThis.window=previous.window;globalThis.document=previous.document;globalThis.requestAnimationFrame=previous.raf;}
});
