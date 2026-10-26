import {test} from 'node:test';import assert from 'node:assert/strict';import {shortNews,NewsFeed} from '../dist/news.js';
import {newsCharacter} from '../dist/news.js';
import {Game} from '../dist/engine.js';
import {EVENTS} from '../dist/content.js';

test('transaction portraits follow the acting character rather than a card name',()=>{
 assert.equal(newsCharacter('奶鼠购买奶蛙控骰卡'),'naishu');
 assert.equal(newsCharacter('奶茶向奶蛙支付租金'),'naicha');
 assert.equal(newsCharacter('第 2 轮开始'),undefined);
});

test('AI event receipts capture real results, wait for their turn, and pause without replaying voice',()=>{
 const originalSet=globalThis.setTimeout,originalClear=globalThis.clearTimeout,timers=new Map();let serial=0;
 globalThis.setTimeout=fn=>{timers.set(++serial,fn);return serial;};globalThis.clearTimeout=id=>timers.delete(id);
 const classes=new Set(),root={hidden:true,textContent:'',innerHTML:'',offsetWidth:1,classList:{add(...names){names.forEach(n=>classes.add(n));},remove(...names){names.forEach(n=>classes.delete(n));}}};
 const voices=[],feed=new NewsFeed(root,{onEvent:d=>voices.push(d.mood)}),g=Game.create({character:'naiwa',opponents:['naicha'],playerCount:2,seed:46});
 const advance=()=>{const [id,fn]=timers.entries().next().value;timers.delete(id);fn();};
 try{
  feed.setSpeed(2);g.s.current=1;g.player.pos=g.tiles.find(t=>t.kind==='event').id;g.player.spirit='misfortune';g.player.spiritTurns=4;g.int=n=>n===EVENTS.length?2:0;g.event();
  const state=JSON.stringify(g.s),title=g.s.notice.title;feed.sync(g,true);assert.equal(voices.length,0);assert.equal(feed.queue.length,1);feed.sync(g,true);assert.equal(feed.queue.length,1);assert.equal(JSON.stringify(g.s),state);
  // A queued receipt is a snapshot, not a pointer into later mutable game state.
  g.s.notice.title='later';g.s.notice.text='later';g.player.money=1;advance();assert.ok(classes.has('news-event'));assert.ok(root.innerHTML.includes(title));assert.ok(root.innerHTML.includes('奶币 −113'));assert.ok(root.innerHTML.includes('电脑 · 奶茶'));assert.deepEqual(voices,['sad']);assert.ok(feed.remaining>=2200);
  feed.setPaused(true);assert.equal(timers.size,0);assert.equal(feed.busy,true);feed.setPaused(false);assert.equal(timers.size,1);assert.deepEqual(voices,['sad']);advance();assert.equal(feed.busy,false);
 }finally{feed.reset();globalThis.setTimeout=originalSet;globalThis.clearTimeout=originalClear;}
});
test('opening news preserves the actual custom starting cash',()=>{for(const cash of ['2,000','3,200','5,000','8,000'])assert.equal(shortNews(`奶家发财岛开张！每位奶伴带着 ${cash} 奶币出发。`),`奶家开局 · 每人 ${cash} 奶币`);});
test('news condenses transactions and preserves financial results',()=>{assert.equal(shortNews('奶蛙将「奶茶小站」升级为 2 级 −130'),'奶蛙升级 奶茶小站 · 2级 −130');assert.equal(shortNews('奶蛙向奶鼠支付「奶茶小站」租金 −57'),'奶蛙向奶鼠付租金 −57');assert.equal(shortNews('奶蛙掷出 3，前进 3 格。'),'奶蛙掷出 3 · 前进 3格');assert.ok(shortNews('奶蛙拆除「名字特别特别长的房屋名称」房屋，保留土地，回收材料 +150').endsWith('+150'));});

test('news advances sequentially, pauses its timer and does not replay restored history',()=>{const originalSet=globalThis.setTimeout,originalClear=globalThis.clearTimeout,timers=new Map();let serial=0;globalThis.setTimeout=fn=>{timers.set(++serial,fn);return serial;};globalThis.clearTimeout=id=>timers.delete(id);const root={hidden:true,textContent:'',offsetWidth:1,classList:{add(){},remove(){}}},feed=new NewsFeed(root),game={s:{round:1,logs:[{text:'开局'}]},char:()=>({name:'奶蛙'})};try{feed.sync(game,true);assert.match(root.textContent,/奶蛙/);game.s.logs.unshift({text:'奶蛙买下「奶茶小站」−210'});feed.sync(game,true);assert.equal(feed.queue.length,1);const advance=()=>{const [id,fn]=timers.entries().next().value;timers.delete(id);fn();};advance();assert.equal(root.textContent,'奶蛙买下奶茶小站−210');feed.setPaused(true);assert.equal(timers.size,0);feed.setPaused(false);assert.equal(timers.size,1);advance();assert.equal(root.hidden,true);feed.sync({...game},true);assert.equal(feed.queue.length,0);}finally{feed.reset();globalThis.setTimeout=originalSet;globalThis.clearTimeout=originalClear;}});
