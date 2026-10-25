import {test} from 'node:test';
import assert from 'node:assert/strict';
import {GameAudio} from '../dist/audio.js';

function audio(){
 const gain=()=>({connect(){},disconnect(){},gain:{value:0,setValueAtTime(){},linearRampToValueAtTime(){},setTargetAtTime(){},cancelScheduledValues(){}}});
 const a=new GameAudio();a.ctx={currentTime:0,createGain:gain,suspends:0,suspend(){this.suspends++;return Promise.resolve();},resume(){return Promise.resolve();},close(){return Promise.resolve();}};
 for(const key of ['master','musicGain','fxGain','voiceGain'])a[key]=gain();
 a.unlocked=true;const starts=[];a.note=(note,at)=>starts.push(at);a.hiss=at=>starts.push(at);return{a,starts};
}

test('a foreground stall drops missed notes and continues on the original beat grid',()=>{
 const {a,starts}=audio();a.createLayer('ode',.06);a.scheduleMusic();starts.length=0;
 a.ctx.currentTime=2.2;a.scheduleMusic();assert.ok(starts.every(at=>at>=2.2));assert.ok(starts.length<6);
 a.ctx.currentTime=2.4;a.scheduleMusic();assert.ok(starts.length>0);assert.ok(starts.every(at=>at>=2.4));
 const beat=.5*60/112;for(const at of starts)assert.ok(Math.abs((at-.06)/beat-Math.round((at-.06)/beat))<1e-8);
 a.dispose();
});

test('a missed whole loop restarts gently in the future without replaying an expired phrase',()=>{
 const {a,starts}=audio();a.createLayer('town',.06);a.scheduleMusic();starts.length=0;a.ctx.currentTime=180;a.scheduleMusic();
 assert.ok(starts.length>0&&starts.length<6);assert.ok(starts.every(at=>at>=180));assert.equal(a.layers.length,1);assert.ok(a.layers[0].start>180);
 for(let i=0;i<600;i++){a.ctx.currentTime+=.07;starts.length=0;a.scheduleMusic();assert.ok(starts.every(at=>at>=a.ctx.currentTime));assert.ok(a.layers.length<=2);}
 a.dispose();
});

test('background suspension follows the fade and a quick return cancels it',async t=>{
 t.mock.timers.enable({apis:['setTimeout']});const {a}=audio();
 a.visibility(true);assert.equal(a.ctx.suspends,0);t.mock.timers.tick(300);a.visibility(false);await Promise.resolve();t.mock.timers.tick(400);assert.equal(a.ctx.suspends,0);
 a.visibility(true);t.mock.timers.tick(649);assert.equal(a.ctx.suspends,0);t.mock.timers.tick(1);assert.equal(a.ctx.suspends,1);
 a.visibility(false);await Promise.resolve();a.visibility(true);a.dispose();t.mock.timers.tick(1000);assert.equal(a.ctx.suspends,1);assert.equal(a.timer,null);
});
