import {test} from 'node:test';import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';import {TALENTS} from '../dist/talents.js';import {CHARACTERS} from '../dist/content.js';
import {talentStatus,talentsPanel} from '../dist/talent-panel.js';

test('period meters follow real departures rather than rounds and resting does not consume progress',()=>{
 for(const character of ['naicha','naidan'])for(let count=0;count<12;count++){
  const g=Game.create({character,seed:55});g.player.departures=count;const period=character==='naicha'?3:4,s=talentStatus(g),before=JSON.stringify(g.s);assert.equal(s.remaining,period-count%period);assert.equal(s.progress,count%period);talentsPanel(g);assert.equal(JSON.stringify(g.s),before);
  g.player.skip=1;g.roll();assert.equal(g.player.departures,count);assert.equal(talentStatus(g).remaining,s.remaining);g.s.phase='roll';g.roll();assert.equal(g.player.departures,count+1);assert.equal(talentStatus(g).remaining,period-(count+1)%period);
 }
});

test('egg target preview matches free construction choice and excludes single-level and maxed buildings',()=>{
 const g=Game.create({character:'naidan',seed:55});g.player.departures=3;g.s.ownership={1:{player:0,level:1,buildingType:'chain'},2:{player:0,level:5,buildingType:'residence'},4:{player:0,level:2,buildingType:'hotel'},5:{player:0,level:0},7:{player:0,level:0}};const s=talentStatus(g);assert.equal(s.target.id,5);assert.equal(s.target.nextLevel,1);g.roll();assert.equal(g.s.ownership[5].level,s.target.nextLevel);assert.equal(g.s.ownership[7].level,0);assert.equal(talentStatus(g).remaining,4);
 g.player.talentReady=false;g.player.departures=7;g.s.ownership={1:{player:0,level:1,buildingType:'chain'},2:{player:0,level:5}};assert.equal(talentStatus(g).target,null);g.s.phase='roll';const state=JSON.stringify(g.s.ownership);g.roll();assert.equal(JSON.stringify(g.s.ownership),state);
});

test('tea preview and recorded rewards match actual coupon capacity and full-bag compensation',()=>{
 for(const tickets of [0,130,145,150])for(const full of [false,true])for(const spirit of [null,'fortune']){
  const g=Game.create({character:'naicha',seed:55});g.player.departures=2;g.player.tickets=tickets;g.player.spirit=spirit;g.player.spiritTurns=spirit?4:0;g.player.cards=Array(full?15:3).fill('dice');const status=talentStatus(g),before=g.player.money,expected=Math.min(20,150-tickets);assert.ok(status.notes[0].includes(` ${expected} `));if(full)assert.ok(status.notes[1].includes(spirit?'75':'60'));g.roll();assert.equal(g.player.tickets-tickets,expected);assert.equal(g.player.money-before,full?(spirit?75:60):0);assert.equal(g.player.cards.length,full?15:4);assert.ok(g.s.logs.some(l=>l.text.includes(`【暖心补给】获得 ${expected} 点券`)));assert.equal(talentStatus(g).remaining,3);assert.ok(talentStatus(g).recent.includes(` ${expected} `));
 }
});

test('skill pages identify the human during AI turns and safely handle disabled, eliminated and finished matches',()=>{
 const g=Game.create({character:'naicha',seed:55,playerCount:6});g.s.current=1;g.s.players[0].departures=2;let html=talentsPanel(g);assert.match(html,/我的奶伴 · 奶茶/);assert.match(html,/电脑回合，查看你的技能进度/);assert.equal(talentStatus(g).remaining,1);assert.ok(html.includes('aria-valuenow="2"'));
 g.s.talents=false;assert.equal(talentStatus(g).active,false);assert.equal(talentStatus(g).remaining,null);assert.ok(!talentsPanel(g).includes('role="progressbar"'));g.s.talents=true;g.s.players[0].alive=false;assert.match(talentStatus(g).label,/已退出/);assert.equal(talentStatus(g).remaining,null);g.s.players[0].alive=true;g.s.phase='finished';assert.match(talentStatus(g).label,/已结束/);assert.equal(talentStatus(g).active,false);
});

test('reading every talent never advances random outcomes or mutates imported history',()=>{
 for(const c of CHARACTERS){const g=Game.create({character:c.id,seed:55});g.player.money=0;g.s.logs.unshift({round:1,text:`【${TALENTS[c.id].name}】<img src=x onerror=alert(1)>`});const before=JSON.stringify(g.s);talentStatus(g);const html=talentsPanel(g);assert.equal(JSON.stringify(g.s),before);assert.ok(!html.includes('<img src=x'));}
});
