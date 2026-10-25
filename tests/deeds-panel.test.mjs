import {test} from 'node:test';import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';import {CARDS} from '../dist/content.js';
import {deedPortfolio,deedsPanel} from '../dist/deeds-panel.js';import {cardsPanel} from '../dist/cards-panel.js';

const make=()=>{const g=Game.create({seed:50,randomStart:false});const lots=g.tiles.filter(t=>t.kind==='property');for(let i=0;i<3;i++)g.s.ownership[lots[i].id]={player:i===1?1:0,level:i,buildingType:i===2?'hotel':'residence'};return g;};
test('personal deeds and stacked cards stay with the human during every computer turn',()=>{
 const g=make();g.s.players[0].cards=['shield','shield'];g.s.players[1].cards=['recover'];g.s.current=1;const state=JSON.stringify(g.s),data=deedPortfolio(g),html=deedsPanel(g),cards=cardsPanel(g);assert.equal(data.items.length,2);for(const o of data.items)assert.equal(o.player,0);for(const o of g.owned(g.s.players[1]))assert.ok(!html.includes(`data-deed="${o.tile.id}"`));assert.match(html,/奶蛙的地产簿/);assert.ok(cards.includes(`<h3>${CARDS.shield.name}</h3>`));assert.ok(!cards.includes(`<h3>${CARDS.recover.name}</h3>`));assert.match(cards,/拥有 2 张/);assert.match(cards,/电脑回合，查看你的卡包/);assert.equal(JSON.stringify(g.s),state);
 for(const tag of html.match(/<button[^>]+>/g))if(!tag.includes('locateDeed'))assert.ok(tag.includes('disabled'));for(const tag of cards.match(/<button[^>]+data-act="card"[^>]*>/g))assert.ok(tag.includes('disabled'));
});

test('deed values match net-asset accounting and individual sale proceeds exactly',()=>{
 const g=make(),p=g.s.players[0],d=deedPortfolio(g);assert.equal(d.value,g.assets(p).property);let total=0;for(const o of d.items){const copy=new Game(JSON.parse(JSON.stringify(g.s))),before=copy.player.money;assert.equal(copy.sell(o.tile.id),true);const actual=copy.player.money-before;assert.equal(o.sale,actual);total+=actual;}assert.equal(d.sale,total);assert.equal(d.vacant,1);p.pos=d.items.at(-1).tile.id;assert.equal(deedPortfolio(g).items[0].tile.id,p.pos);
});

test('ordinary building and selling affordances respect local stops, phase and the one-build limit',()=>{
 const g=make(),id=g.owned(g.player).find(o=>o.level).tile.id;Object.assign(g.player,{pos:id,buildSite:id,buildsUsed:0,money:8000});g.s.phase='end';let html=deedsPanel(g),tag=()=>html.match(new RegExp('<button[^>]+data-act="upgrade" data-id="'+id+'"[^>]*>'))[0];assert.ok(!tag().includes('disabled'));g.player.buildsUsed=1;html=deedsPanel(g);assert.ok(tag().includes('disabled'));g.s.phase='debt';html=deedsPanel(g);assert.ok(tag().includes('disabled'));assert.ok(html.match(/<button[^>]+data-act="sell"[^>]+>/g).every(t=>!t.includes('disabled')));
});
