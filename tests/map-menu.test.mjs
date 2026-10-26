import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {Game} from '../dist/engine.js';
import {MAPS} from '../dist/maps.js';
import {CHARACTERS} from '../dist/content.js';
import {TALENTS} from '../dist/talents.js';
import {resumeCard} from '../dist/save-menu.js';
import {normalizeSetup} from '../dist/setup.js';
const source=readFileSync(new URL('../dist/app.js',import.meta.url),'utf8');
const picker=source.slice(source.indexOf('function picker()'),source.indexOf('function statusTags'));
function menu(){const nodes=new Map(),node=id=>{if(!nodes.has(id))nodes.set(id,{textContent:'',innerHTML:'',classList:{toggle(){}}});return nodes.get(id);};const context={resumeCard,selectMenus:{sync(){}},Game,MAPS,CHARACTERS,TALENTS,normalizeSetup,game:Game.create({mapVersion:2}),advanced:normalizeSetup({mapVersion:1}),started:false,selected:'naiwa',saved:null,TILES:[],portrait:()=>'',fmt:String,$:node,document:{querySelector:node},scene:{tiles:null,sync(g){this.tiles=g.tiles;},home(){},previewCharacter(){}}};return{context,node};}
test('saving a map selection updates actual menu map and text in both directions',()=>{const {context:c,node}=menu();c.game.s.options.music=false;runInNewContext(picker+';picker()',c);assert.equal(c.game.s.mapVersion,1,'menu must use the selected map, not the initial default');assert.equal(c.game.s.options.music,false);assert.match(node('.map-preview-note').textContent,/发财岛/);assert.equal(c.scene.tiles,c.game.tiles);c.advanced.mapVersion=2;runInNewContext('picker()',c);assert.equal(c.game.s.mapVersion,2);assert.match(node('.map-preview-note').textContent,/滨河镇/);});
test('changing new-game preferences never mutates the active game or its saved route',()=>{const {context:c}=menu();c.started=true;c.game=Game.create({mapVersion:1});const before=JSON.stringify(c.game.s);c.advanced.mapVersion=2;runInNewContext(picker+';picker()',c);assert.equal(JSON.stringify(c.game.s),before);});

test('legacy soy saves and opponent selections migrate to tea without losing assets',()=>{const g=Game.create({character:'naicha',playerCount:6,seed:42});const old=structuredClone(g.s);old.players[0].character='dounai';const restored=Game.restore(old);assert.ok(restored);assert.equal(restored.player.character,'naicha');assert.equal(restored.player.money,g.player.money);assert.deepEqual(restored.player.stockBook,g.player.stockBook);assert.deepEqual(normalizeSetup({opponents:['dounai','random']}).opponents,['naicha','random']);assert.equal(Game.create({character:'dounai'}).player.character,'naicha');});
