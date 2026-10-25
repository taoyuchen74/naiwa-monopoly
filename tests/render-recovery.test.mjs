import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {Game} from '../dist/engine.js';
import {IslandScene} from '../dist/scene.js';
import {HighQuality} from '../dist/high-quality.js';

const source=readFileSync(new URL('../dist/app.js',import.meta.url),'utf8'),tick=source.slice(source.indexOf('function tick()'),source.indexOf("document.addEventListener('visibilitychange'"));
test('fallback turns advance without waiting for stopped 3D movement or effects, while user pause remains respected',()=>{
 for(const [lost,paused,expected]of [[true,false,1],[false,false,0],[true,true,0]]){
  const game=Game.create({mapVersion:1,talents:false,randomStart:false});game.s.current=0;game.s.phase='moving';game.s.remaining=2;
  const context={game,started:true,gamePaused:paused,activePanel:null,document:{hidden:false},scene:{contextLost:lost,isMoving:()=>true,fx:{items:[{}]}},newsFeed:{busy:false},actionPacer:{ready:({news,moving,effects})=>!news&&!moving&&!effects,after(){}},timer:null,setTimeout(){return 1;},clearTimeout(){},save(){},render(){}};
  runInNewContext(tick+';tick()',context);assert.equal(game.player.pos,expected);
 }
});

test('lost scenes defer geometry updates and transfer effects until the latest game can be rebuilt',()=>{
 const scene={contextLost:true},game=Game.create();IslandScene.prototype.sync.call(scene,game);assert.equal(scene.game,game);
 assert.equal(IslandScene.prototype.isMoving.call(scene),false);assert.equal(IslandScene.prototype.showTransfer.call(scene,{from:0,to:1,amount:50},()=>{}),false);
});

test('replacing the postprocessing pipeline releases every pass, target and environment exactly once',()=>{
 const counts={pass:0,composer:0,environment:0},pipeline={composer:{passes:Array.from({length:4},()=>({dispose(){counts.pass++;}})),dispose(){counts.composer++;}},environment:{dispose(){counts.environment++;}}};
 HighQuality.prototype.dispose.call(pipeline);HighQuality.prototype.dispose.call(pipeline);assert.deepEqual(counts,{pass:4,composer:1,environment:1});
});
