import {test} from 'node:test';
import assert from 'node:assert/strict';
import {MapGestures} from '../dist/map-gestures.js';
const setup=(studio=false)=>{const calls=[];const g=new MapGestures({pan:(...v)=>calls.push(['pan',...v]),zoom:f=>calls.push(['zoom',f]),tap:(...v)=>calls.push(['tap',...v]),turn:x=>calls.push(['turn',x]),isStudio:()=>studio});return{g,calls};};
test('tap jitter does not pan or disable follow, while deliberate drags never select land',()=>{const {g,calls}=setup();g.down(1,20,20);g.move(1,22,22);g.up(1,22,22);assert.deepEqual(calls,[['tap',22,22]]);calls.length=0;g.down(1,20,20);g.move(1,31,20);g.up(1,31,20);assert.deepEqual(calls,[['pan',11,0]]);});
test('a two-finger gesture cannot turn into a land tap when fingers lift separately',()=>{const {g,calls}=setup();g.down(1,20,20);g.down(2,80,20);g.up(2,80,20);g.up(1,20,20);assert.equal(calls.length,0);g.down(1,20,20);g.down(2,80,20);g.move(2,110,20);g.up(2,110,20);g.up(1,20,20);assert.deepEqual(calls,[['zoom',1.5]]);g.down(3,30,30);g.up(3,30,30);assert.equal(calls.at(-1)[0],'tap');});
test('cancelled capture and a character studio drag never select map land',()=>{const {g,calls}=setup();g.down(1,20,20);g.cancel(1);g.up(1,20,20);assert.equal(calls.length,0);const st=setup(true);st.g.down(1,20,20);st.g.move(1,40,20);st.g.up(1,40,20);assert.deepEqual(st.calls,[['turn',20]]);});
