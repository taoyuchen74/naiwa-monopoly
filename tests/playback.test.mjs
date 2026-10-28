import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {Game} from '../dist/engine.js';
import {advanceSession} from '../dist/ui-session.js';
import {ActionPacer,PlaybackSession,animationSpeed,presentationSpeed} from '../dist/pacing.js';
import {EffectSystem} from '../dist/effects.js';
import {DICE_FACES} from '../dist/dice.js';
import {NewsFeed} from '../dist/news.js';
import {normalizePreferences} from '../dist/preferences.js';
import {IslandScene} from '../dist/scene.js';
test('1/2/3 speeds retime the remaining interval and AI boost is bounded and opt-out',()=>{
 let now=0;const p=new ActionPacer(()=>now);p.after('moving',1);now=100;p.setSpeed(2);assert.equal(p.deadline,310);p.setSpeed(3);assert.equal(p.deadline,240);now=240;assert.ok(p.ready());p.reset();assert.ok(p.ready());
 assert.equal(animationSpeed(4),3);assert.equal(presentationSpeed({speed:1},true),3);assert.equal(presentationSpeed({speed:2,aiFast:false},true),2);assert.equal(presentationSpeed({speed:2},false),2);
 for(const speed of [1,2,3])assert.equal(normalizePreferences({speed}).speed,speed);assert.equal(normalizePreferences({speed:4}).speed,3);
});
test('rapid skip clicks are once per rule revision and fallback flashes use no new timers',()=>{
 let now=0,completions=0,skips=0;const s=new PlaybackSession(()=>now),g=Game.create({seed:17});s.bind(g);s.tail(()=>completions++);for(let n=0;n<20;n++)s.skip(g,()=>skips++);assert.equal(skips,1);assert.equal(completions,1);now=5000;s.sweep();assert.equal(completions,1);g.command('roll');assert.ok(s.skip(g,()=>skips++));assert.equal(skips,2);s.tail(()=>completions++);s.bind(Game.restore(g.s));assert.equal(completions,2);
});
test('skipping effect snapshots settles dice, restores construction and completes callbacks once',()=>{
 const parent=new THREE.Group(),fx=new EffectSystem(parent),material=new THREE.MeshStandardMaterial(),building=new THREE.Mesh(new THREE.BoxGeometry(1,2,1),material);parent.add(building);let done=0;fx.transition(building,'grow',()=>done++);fx.rollDice([5],new THREE.Vector3());const die=fx.items.find(e=>e.dice).dice.dice[0].die;fx.update(.2);fx.clear();fx.clear();fx.update(10);assert.equal(done,1);assert.equal(fx.items.length,0);assert.equal(building.material,material);assert.ok(new THREE.Vector3(...DICE_FACES.find(f=>f.value===5).normal).applyQuaternion(die.quaternion).y>.999999);
 let second=0;fx.transition(building,'grow',()=>{fx.transition(building,'grow',()=>second++);});fx.clear();assert.equal(fx.items.length,1);fx.clear();assert.equal(second,1);building.geometry.dispose();material.dispose();
});
test('ambient dust is nonblocking and exact pawn destinations unlock movement after skip',()=>{
 const fx=new EffectSystem(new THREE.Group());fx.spawn('dust',new THREE.Vector3());assert.equal(fx.busy,false);fx.spawn('build',new THREE.Vector3());assert.equal(fx.busy,true);fx.clear();
 const g=Game.create({seed:17}),scene={game:g,pawns:g.s.players.map(()=>new THREE.Group()),tiles:g.tiles,fx,offset:new THREE.Vector3(),zoom:1,follow:false,updateCamera(){},invalidate(){}};g.player.pos=1;const before=g.stateHash();IslandScene.prototype.skipPresentation.call(scene);assert.equal(IslandScene.prototype.isMoving.call(scene),false);assert.equal(g.stateHash(),before);
});
function news(){let now=0,id=0;const timers=new Map(),oldSet=globalThis.setTimeout,oldClear=globalThis.clearTimeout;globalThis.setTimeout=fn=>{timers.set(++id,fn);return id;};globalThis.clearTimeout=n=>timers.delete(n);const root={hidden:true,textContent:'',offsetWidth:0,classList:{add(){},remove(){}}},feed=new NewsFeed(root,{clock:()=>now});return {root,feed,timers,setNow:n=>now=n,restore(){feed.reset();globalThis.setTimeout=oldSet;globalThis.clearTimeout=oldClear;}};}
test('speed changes own one timer; stale callbacks and skip cannot remove bankruptcy results',()=>{
 const n=news();try{n.feed.push('奶蛙掷骰出发');const stale=[...n.timers.values()][0];for(let i=0;i<20;i++)n.feed.setSpeed(i%3+1);assert.equal(n.timers.size,1);stale();assert.equal(n.root.hidden,false);assert.match(n.root.textContent,/掷骰/);n.feed.push({text:'奶蛙申请破产，退出本局',critical:true});n.feed.skipPresentation();assert.match(n.root.textContent,/破产/);n.setNow(1000);n.feed.setSpeed(3);assert.ok(n.feed.deadline>=2200);for(let i=0;i<20;i++)n.feed.skipPresentation();assert.equal(n.timers.size,1);assert.match(n.root.textContent,/破产/);n.feed.setPaused(true);assert.equal(n.timers.size,0);n.setNow(5000);n.feed.setPaused(false);assert.ok(n.feed.deadline>=6200);}finally{n.restore();}
});
test('critical financial messages keep complete amounts and skipping preserves the permanent journal',()=>{
 const n=news(),g=Game.create({seed:17});try{n.feed.sync(g,true);g.s.logs.unshift({round:1,text:'奶蛙向奶虫支付「特别特别长名字的普通住宅」租金 −12345'});n.feed.sync(g,true);const before=JSON.stringify(g.s.logs);n.feed.skipPresentation();assert.match(n.root.textContent,/−12345/);assert.match(n.root.textContent,/特别特别长/);n.feed.skipPresentation();assert.equal(JSON.stringify(g.s.logs),before);assert.equal(n.feed.busy,true);n.feed.reset();g.s.players[1].human=true;n.feed.sync(g,true);g.s.logs.unshift({round:1,text:'奶蛙存入 300 奶币'});n.feed.sync(g,true);n.feed.skipPresentation();assert.match(n.root.textContent,/银行业务/);assert.ok(!n.root.textContent.includes('300'));assert.equal(n.feed.skipPresentation(),false);}finally{n.restore();}
});
test('1/2/3, AI boost, rapid skipping and mid-game restore preserve command order and final hash',()=>{
 const results=[];for(const speed of [1,2,3]){let g=Game.create({seed:53,rounds:20,seatTypes:['ai','ai','ai']}),commands=[],steps=0;const playback=new PlaybackSession(),pacer=new ActionPacer();while(g.s.phase!=='finished'&&steps++<20000){g.s.options.speed=speed;g.s.options.aiFast=steps%2===0;for(let n=0;n<10;n++)playback.skip(g,()=>pacer.reset());const before=g.s.revision;assert.ok(advanceSession(g,{started:true,hidden:false,paused:false,studio:false,panelOpen:false,ready:()=>true}));commands.push([before,g.s.current,g.s.phase,g.s.seed]);if(steps===100){const h=Game.restore(g.s);assert.ok(h);assert.equal(h.stateHash(),g.stateHash());g=h;}}assert.equal(g.s.phase,'finished');results.push({commands,hash:g.stateHash()});}assert.deepEqual(results[1],results[0]);assert.deepEqual(results[2],results[0]);
});
test('legacy 4x saves restore to 3x without changing the rule hash and invalid boost is rejected',()=>{const g=Game.create({seed:17});g.s.options.speed=4;g.s.options.aiFast=false;const h=Game.restore(g.s);assert.ok(h);assert.equal(h.s.options.speed,3);assert.equal(h.s.options.aiFast,false);assert.equal(h.stateHash(),g.stateHash());g.s.options.aiFast='invalid';assert.equal(Game.restore(g.s),null);});
test('reduced motion removes particles and automatic camera changes but permits explicit follow',()=>{const scene={reduced:true,follow:false,clearSelection(){},endPreview(){},invalidate(){},cameraChanged(){},aspect:1};IslandScene.prototype.followPlayer.call(scene);assert.equal(scene.follow,false);IslandScene.prototype.followPlayer.call(scene,{manual:true});assert.equal(scene.follow,true);const fx=new EffectSystem(new THREE.Group(),{reduced:true});fx.spawn('build',new THREE.Vector3());fx.rollDice([1],new THREE.Vector3());assert.equal(fx.items.length,0);});
test('completion callbacks may cancel other effects without updating disposed entries',()=>{const fx=new EffectSystem(new THREE.Group()),a=new THREE.Mesh(),b=new THREE.Mesh();let n=0;fx.transition(a,'grow',()=>n++);fx.transition(b,'grow',()=>{n++;fx.clear();});assert.doesNotThrow(()=>fx.update(2));assert.equal(n,2);assert.equal(fx.items.length,0);});
