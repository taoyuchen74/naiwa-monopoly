import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GameOrientation} from '../dist/orientation.js';

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
