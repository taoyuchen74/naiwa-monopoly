import {test} from 'node:test';import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';import {runInNewContext} from 'node:vm';
import {Game} from '../dist/engine.js';import {resumeInfo,resumeCard,exportableState} from '../dist/save-menu.js';
const source=readFileSync(new URL('../dist/app.js',import.meta.url),'utf8');
const archive=()=>{const g=Game.create({character:'naicha',mapVersion:1,playerCount:6,seed:53});g.s.round=7;g.s.current=1;g.s.players[0].money=1674;return g;};
test('continue artwork identifies the saved human character and rules even during an AI turn',()=>{
 const g=archive(),before=JSON.stringify(g.s),d=resumeInfo(g);assert.equal(d.character,'naicha');assert.equal(d.name,'奶茶');assert.equal(d.map,'经典发财岛');assert.equal(d.round,7);assert.equal(d.players,6);assert.match(resumeCard(g),/继续 · 奶茶/);assert.match(resumeCard(g),/7\/50轮 · 6人/);g.s.players[0].alive=false;assert.equal(resumeInfo(g).action,'继续观战');g.s.phase='finished';assert.equal(resumeInfo(g).action,'查看排名');assert.equal(resumeInfo(null),null);g.s.phase='roll';g.s.players[0].alive=true;assert.equal(JSON.stringify(g.s),before);
});
test('returning to character selection from the menu preserves the archive rather than replacing it with a preview',()=>{
 const start=source.indexOf("else if(act==='newGame'){")+"else if(act==='newGame'){".length,body=source.slice(start,source.indexOf('return;}',start));
 for(const started of [false,true]){const saved=archive(),game=Game.create({mapVersion:2,seed:7481}),context={started,saved,game,Game,dismiss(){},$:()=>({hidden:true}),picker(){},render(){}};const before=JSON.stringify(saved.s);runInNewContext(body,context);assert.equal(context.started,false);if(!started){assert.equal(context.saved,saved);assert.equal(JSON.stringify(context.saved.s),before);}else{assert.notEqual(context.saved,game);assert.deepEqual(context.saved.s,game.s);}}
});
test('exporting before continuing downloads the real archive and cannot export the menu preview',()=>{
 const start=source.indexOf('function exportSave()'),fn=source.slice(start,source.indexOf("$('startBtn')",start)),saved=archive(),game=Game.create({mapVersion:2,seed:7481}),captures=[],anchor={click(){captures.push(this.download);}};
 const context={game,saved,started:false,exportableState,Blob:class{constructor(parts){this.text=parts.join('');captures.push(JSON.parse(this.text));}},URL:{createObjectURL(){return 'blob:qa';},revokeObjectURL(){}},document:{createElement:()=>anchor},setTimeout(){},toast(){}};
 // Isolate this named handler from subsequent listeners and helper declarations.
 runInNewContext(fn.slice(0,fn.indexOf('\n'))+';exportSave()',context);assert.deepEqual(captures[0],saved.s);assert.match(captures[1],/第7轮/);assert.equal(game.s.mapVersion,2);assert.equal(exportableState(game,false,null),null);assert.equal(exportableState(game,true,saved),game.s);
});
