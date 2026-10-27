import {test} from 'node:test';
import assert from 'node:assert/strict';
import {MapGestures} from '../dist/map-gestures.js';
import {IslandScene} from '../dist/scene.js';
const setup=(studio=false)=>{const calls=[];const g=new MapGestures({pan:(...v)=>calls.push(['pan',...v]),zoom:f=>calls.push(['zoom',f]),tap:(...v)=>calls.push(['tap',...v]),turn:x=>calls.push(['turn',x]),isStudio:()=>studio});return{g,calls};};
test('tap jitter does not pan or disable follow, while deliberate drags never select land',()=>{const {g,calls}=setup();g.down(1,20,20);g.move(1,22,22);g.up(1,22,22);assert.deepEqual(calls,[['tap',22,22]]);calls.length=0;g.down(1,20,20);g.move(1,31,20);g.up(1,31,20);assert.deepEqual(calls,[['pan',11,0]]);});
test('a two-finger gesture cannot turn into a land tap when fingers lift separately',()=>{const {g,calls}=setup();g.down(1,20,20);g.down(2,80,20);g.up(2,80,20);g.up(1,20,20);assert.equal(calls.length,0);g.down(1,20,20);g.down(2,80,20);g.move(2,110,20);g.up(2,110,20);g.up(1,20,20);assert.deepEqual(calls,[['zoom',1.5]]);g.down(3,30,30);g.up(3,30,30);assert.equal(calls.at(-1)[0],'tap');});
test('cancelled capture and a character studio drag never select map land',()=>{const {g,calls}=setup();g.down(1,20,20);g.cancel(1);g.up(1,20,20);assert.equal(calls.length,0);const st=setup(true);st.g.down(1,20,20);st.g.move(1,40,20);st.g.up(1,40,20);assert.deepEqual(st.calls,[['turn',20]]);});

test('two fingers zoom characters and maps without turning, panning or selecting on staggered release',()=>{
 for(const studio of [false,true]){const {g,calls}=setup(studio);g.down(1,20,20);g.down(2,80,20);g.move(2,110,20);g.up(2,110,20);g.move(1,60,20);g.up(1,60,20);assert.deepEqual(calls,[['zoom',1.5]]);g.down(3,20,20);g.move(3,40,20);assert.equal(calls.at(-1)[0],studio?'turn':'pan');}
});

test('three fingers never create a one-finger camera jump or a land selection',()=>{
 for(const studio of [false,true]){const {g,calls}=setup(studio);for(const id of [1,2,3])g.down(id,id*20,20);g.move(3,100,20);g.up(3,100,20);g.move(2,60,20);g.up(2,60,20);g.move(1,40,20);g.up(1,40,20);assert.deepEqual(calls,[['zoom',2]]);}
});

test('layout changes, hiding and blur release captured fingers and invalidate their old coordinates',()=>{
 const oldWindow=globalThis.window,oldDocument=globalThis.document,oldCancel=globalThis.cancelAnimationFrame,events={},documentEvents={},captured=new Set(),released=[];
 const c={style:{},addEventListener(){},hasPointerCapture:id=>captured.has(id),releasePointerCapture(id){captured.delete(id);released.push(id);}};
 const scene={events:new AbortController(),renderer:{domElement:c},cancelGestures(){IslandScene.prototype.cancelGestures.call(this);}};
 try{
  globalThis.cancelAnimationFrame=()=>{};globalThis.window={addEventListener:(type,fn)=>events[type]=fn};globalThis.document={hidden:false,addEventListener:(type,fn)=>documentEvents[type]=fn};IslandScene.prototype.controls.call(scene);
  const calls=[];scene.gestures.pan=()=>calls.push('pan');scene.gestures.tap=()=>calls.push('tap');scene.gestures.zoom=()=>calls.push('zoom');
  for(const interrupt of [()=>events.gamelayoutchange(),()=>events.blur(),()=>{document.hidden=true;documentEvents.visibilitychange();}]){
   captured.add(1);scene.gestures.down(1,20,20);interrupt();assert.equal(scene.gestures.points.size,0);assert.equal(captured.size,0);scene.gestures.move(1,400,20);scene.gestures.up(1,400,20);assert.deepEqual(calls,[]);
  }
  assert.deepEqual(released,[1,1,1]);scene.gestures.down(2,30,30);scene.gestures.up(2,30,30);assert.deepEqual(calls,['tap']);
 }finally{globalThis.window=oldWindow;globalThis.document=oldDocument;globalThis.cancelAnimationFrame=oldCancel;}
});
