import {test} from 'node:test';
import assert from 'node:assert/strict';
import {GameAnnouncements} from '../dist/announcements.js';

test('continuous AI actions announce once, followed by human turn and settlement',async()=>{
 const target={textContent:''},a=new GameAnnouncements(()=>target,{delay:0});
 const game={s:{phase:'roll',round:1,current:1},player:{human:false},char:()=>({name:'奶蛙'})};
 a.sync(game,true);await new Promise(r=>setTimeout(r,5));assert.match(target.textContent,/电脑奶伴/);
 target.textContent='';for(let i=0;i<100;i++){game.s.round++;game.s.current=i;a.sync(game,true);}
 await new Promise(r=>setTimeout(r,5));assert.equal(target.textContent,'');
 game.player.human=true;a.sync(game,true);await new Promise(r=>setTimeout(r,5));assert.match(target.textContent,/轮到奶蛙/);
 game.s.phase='finished';a.sync(game,true);await new Promise(r=>setTimeout(r,5));assert.match(target.textContent,/旅行已结束/);
});
test('rapid messages coalesce and duplicate messages remain quiet',async()=>{
 const target={textContent:''},a=new GameAnnouncements(()=>target,{delay:0});
 a.say('first');a.say('last');await new Promise(r=>setTimeout(r,5));assert.equal(target.textContent,'last');
 target.textContent='';a.say('last');await new Promise(r=>setTimeout(r,5));assert.equal(target.textContent,'');
});
