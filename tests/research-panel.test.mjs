import {test} from 'node:test';import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';import {businessDeparture,researchChoices} from '../dist/businesses.js';import {researchInfo,researchPanel,researchChangePanel} from '../dist/research-panel.js';
const lab=(level=3,progress=2)=>{const g=Game.create({seed:58});g.s.phase='end';g.player.pos=1;g.player.buildSite=1;g.s.ownership={1:{player:0,buildingType:'research',level,researchCard:'dice',researchProgress:progress}};return g;};
test('workbench shows every project, correct unlock levels and exact remaining departures without mutating state',()=>{
 for(let level=1;level<=5;level++)for(let progress=0;progress<3;progress++){
  const g=lab(level,progress),before=JSON.stringify(g.s),r=researchInfo(g,1),html=researchPanel(g,1);assert.deepEqual(r.unlocked,researchChoices(level));assert.equal(r.remaining,3-progress);assert.equal(r.progress,progress);assert.equal((html.match(/data-act="chooseResearch"/g)||[]).length,5);assert.equal((html.match(/class="research-project [^"]*locked/g)||[]).length,5-level);assert.match(html,new RegExp('aria-valuenow="'+progress+'"'));assert.equal(JSON.stringify(g.s),before);
 }
});
test('switch confirmation previews actual progress loss and neither reading nor cancelling resets the project',()=>{
 const g=lab(3,2),before=JSON.stringify(g.s),html=researchChangePanel(g,1,'shield');assert.match(html,/放弃已完成的 2 次/);assert.match(html,/切换后 · 0\/3/);assert.match(html,/保留当前项目/);assert.equal(JSON.stringify(g.s),before);const cash=g.player.money,builds=g.player.buildsUsed;assert.ok(g.setResearch(1,'shield'));assert.equal(g.s.ownership[1].researchProgress,0);assert.equal(g.s.ownership[1].researchCard,'shield');assert.equal(g.player.money,cash);assert.equal(g.player.buildsUsed,builds);assert.equal(researchInfo(g,1).remaining,3);
});
test('finished games, AI, remote visits, already selected and locked cards cannot offer a switch confirmation',()=>{
 for(const change of [g=>g.s.phase='finished',g=>g.player.pos=2,g=>g.player.buildSite=null,g=>g.s.phase='roll',g=>g.player.human=false,g=>g.player.alive=false]){const g=lab();change(g);assert.equal(researchInfo(g,1).canChange,false);assert.ok(!researchChangePanel(g,1,'shield').includes('data-act="research"'));}
 const g=lab(1);for(const key of ['dice','shield','<img>'])assert.ok(!researchChangePanel(g,1,key).includes('data-act="research"'));g.s.ownership[1].buildingType='residence';assert.equal(researchInfo(g,1),null);
});
test('completion and full-bag compensation agree with the engine, including fortune and no duplicate processing',()=>{
 for(const full of [false,true])for(const spirit of [null,'fortune']){
  const g=lab(3,2);g.player.spirit=spirit;g.player.cards=Array(full?15:3).fill('dice');const r=researchInfo(g,1),cash=g.player.money;assert.equal(r.remaining,1);assert.ok(businessDeparture(g));assert.equal(researchInfo(g,1).progress,0);assert.equal(researchInfo(g,1).remaining,3);assert.equal(g.player.cards.length,full?15:4);assert.equal(g.player.money-cash,full?r.compensation:0);const state=JSON.stringify(g.s);assert.equal(businessDeparture(g),false);assert.equal(JSON.stringify(g.s),state);
 }
});
test('rest turns do not advance research and upgrading preserves the project and progress',()=>{
 const g=lab();g.player.skip=1;g.s.phase='roll';assert.ok(g.roll());assert.equal(researchInfo(g,1).progress,2);g.s.phase='end';g.player.buildSite=1;assert.ok(g.upgrade(1));assert.equal(researchInfo(g,1).progress,2);assert.equal(researchInfo(g,1).key,'dice');assert.ok(researchInfo(g,1).canChange);
});
