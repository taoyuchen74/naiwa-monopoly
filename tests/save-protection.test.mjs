import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {Game,SAVE_KEY,BACKUP_KEY,storeGame,backupStoredGame,restoreStoredBackup,createSaveRepository} from '../dist/engine.js';
import {archiveSummary} from '../dist/save-menu.js';
import {normalizeSetup,setupError} from '../dist/setup.js';

const source=readFileSync(new URL('../dist/app.js',import.meta.url),'utf8');
const archive=()=>{const g=Game.create({character:'naicha',playerCount:6,seed:53});g.s.round=7;g.s.savedAt=1767225600000;return g;};
function harness(raw=null){
 const data=new Map(raw?[[SAVE_KEY,raw]]:[]),writes=[],nodes={playerCountSelect:{value:'3'},roundSelect:{value:'20'},difficultySelect:{value:'normal'},talentsEnabled:{checked:true},startScreen:{hidden:false},saveStatus:{}};
 const localStorage={getItem:key=>data.get(key)??null,setItem(key,value){writes.push(key);data.set(key,String(value));}};
 const context={repository:createSaveRepository(localStorage),Game,SAVE_KEY,BACKUP_KEY,storeGame,backupStoredGame,restoreStoredBackup,archiveSummary,normalizeSetup,setupError,localStorage,game:Game.create({seed:7481}),saved:null,started:false,selected:'naiwa',advanced:normalizeSetup(),advancedDraft:null,scene:null,activePanel:null,blockKey:'',actionPacer:{reset(){}},$:id=>nodes[id],writePreferences(){},readPreferences:(_storage,options)=>options,btn:(text,act)=>`<button data-act="${act}">${text}</button>`,showSheet(...args){context.dialog=args;},toast(text){context.message=text;},dismiss(){context.dialog=null;},render(){},sound(){}};
 context.commit=()=>runInNewContext('save()',context);
 runInNewContext(source.slice(source.indexOf('function save()'),source.indexOf('function commit(')),context);
 runInNewContext(source.slice(source.indexOf('let pendingOverwrite='),source.indexOf('function readAdvancedFields(')),context);
 runInNewContext(source.slice(source.indexOf('function resume()'),source.indexOf('function picker()')),context);
 const init=source.slice(source.indexOf('try{saved=Game.restore('));runInNewContext(init.slice(0,init.indexOf('\n')),context);
 return {context,data,writes,nodes,run:code=>runInNewContext(code,context)};
}
test('first load with a valid archive leaves storage and preview untouched by autosave',()=>{
 const raw=JSON.stringify(archive().s),h=harness(raw);assert.equal(h.context.saved.s.round,7);assert.equal(h.context.game.s.round,1);h.run('save()');assert.equal(h.data.get(SAVE_KEY),raw);assert.deepEqual(h.writes,[]);
});
test('direct new game without an archive starts immediately and records last save time',()=>{
 const h=harness();h.run('startFresh()');assert.equal(h.context.started,true);assert.equal(h.nodes.startScreen.hidden,true);assert.equal(JSON.parse(h.data.get(SAVE_KEY)).maxRounds,20);assert.ok(JSON.parse(h.data.get(SAVE_KEY)).savedAt>0);assert.equal(h.data.has(BACKUP_KEY),false);
});
test('direct new game with an archive shows rounds, player count and last save time before any write',()=>{
 const h=harness(JSON.stringify(archive().s));h.run('startFresh()');assert.equal(h.context.started,false);assert.match(h.context.dialog[1],/7 \/ 50 轮 · 6 人/);assert.match(h.context.dialog[1],/最近保存时间：2026/);assert.deepEqual(h.writes,[]);
});
test('cancel overwrite keeps the original archive and allows continuing it',()=>{
 const raw=JSON.stringify(archive().s),h=harness(raw);h.run('startFresh()');
 const begin=source.indexOf("else if(act==='cancel'){")+"else if(act==='cancel'){".length;
 h.run(source.slice(begin,source.indexOf('return;}',begin)));assert.equal(h.context.started,false);assert.equal(h.data.get(SAVE_KEY),raw);assert.equal(h.data.has(BACKUP_KEY),false);h.run('resume()');assert.equal(h.context.game.s.round,7);assert.equal(h.context.game.s.players.length,6);
});
test('confirm overwrite writes the exact archive to an independent key before saving the new game',()=>{
 const raw=JSON.stringify(archive().s),h=harness(raw);h.run('startFresh();startFresh(true)');assert.deepEqual(h.writes,[BACKUP_KEY,SAVE_KEY]);assert.equal(h.data.get(BACKUP_KEY),raw);assert.equal(JSON.parse(h.data.get(SAVE_KEY)).round,1);assert.equal(h.context.started,true);
});
test('restore backup persists and resumes the old game while keeping the backup available',()=>{
 const old=archive(),raw=JSON.stringify(old.s),h=harness(raw);h.run('startFresh();startFresh(true);restoreBackup()');assert.equal(h.context.game.s.round,7);assert.deepEqual(h.context.game.s.players,old.s.players);assert.equal(JSON.parse(h.data.get(SAVE_KEY)).setupSeed,53);assert.equal(h.data.get(BACKUP_KEY),raw);assert.equal(h.nodes.startScreen.hidden,true);
});
test('backup write failure aborts a new game before changing game state or archive',()=>{
 const raw=JSON.stringify(archive().s),h=harness(raw),preview=h.context.game;h.run('startFresh()');h.context.localStorage.setItem=()=>{throw Error('quota');};h.run('startFresh(true)');assert.equal(h.context.game,preview);assert.equal(h.context.started,false);assert.equal(h.data.get(SAVE_KEY),raw);assert.match(h.context.message,/无法备份/);
});
test('a changed archive requires a fresh confirmation rather than backing up unreviewed progress',()=>{
 const h=harness(JSON.stringify(archive().s));h.run('startFresh()');const newer=archive();newer.s.round=9;h.data.set(SAVE_KEY,JSON.stringify(newer.s));h.run('startFresh(true)');assert.equal(h.context.started,false);assert.match(h.context.dialog[1],/9 \/ 50/);assert.deepEqual(h.writes,[]);
});

test('new auto write failure after backup keeps the active game and previous auto intact',()=>{
 const raw=JSON.stringify(archive().s),h=harness(raw),preview=h.context.game,write=h.context.localStorage.setItem;
 h.run('startFresh()');h.context.localStorage.setItem=(key,value)=>{if(key===SAVE_KEY)throw Error('quota');write(key,value);};h.run('startFresh(true)');
 assert.equal(h.context.game,preview);assert.equal(h.context.started,false);assert.equal(h.data.get(SAVE_KEY),raw);assert.equal(h.data.get(BACKUP_KEY),raw);
});
test('corrupt archives and backups are refused without changing either stored value',()=>{
 const h=harness('{');assert.equal(h.context.saved,null);assert.throws(()=>backupStoredGame(h.context.localStorage,'{'));h.data.set(BACKUP_KEY,'{');assert.equal(restoreStoredBackup(h.context.localStorage),null);assert.equal(h.data.get(SAVE_KEY),'{');assert.equal(h.data.get(BACKUP_KEY),'{');assert.deepEqual(h.writes,[]);
});
test('legacy archives without timestamps keep migration and JSON round trips',()=>{
 const legacy=archive().s;delete legacy.savedAt;delete legacy.mapVersion;delete legacy.difficulty;delete legacy.firstPlayer;delete legacy.talents;delete legacy.pickups;legacy.players[0].character='dounai';
 const raw=JSON.stringify(legacy),h=harness(raw);assert.equal(h.context.saved.s.players[0].character,'naicha');assert.equal(h.context.saved.s.mapVersion,1);assert.match(archiveSummary(h.context.saved),/未知（旧存档）/);h.run('startFresh();startFresh(true);restoreBackup()');assert.equal(h.data.get(BACKUP_KEY),raw);assert.deepEqual(Game.restore(JSON.stringify(h.context.game.s)).s,JSON.parse(JSON.stringify(h.context.game.s)));
});
test('failed restore write does not replace the active game or discard the backup',()=>{
 const h=harness(),current=h.context.game,raw=JSON.stringify(archive().s);h.data.set(BACKUP_KEY,raw);h.context.localStorage.setItem=()=>{throw Error('quota');};h.run('restoreBackup()');assert.equal(h.context.game,current);assert.equal(h.context.started,false);assert.equal(h.data.get(BACKUP_KEY),raw);assert.match(h.context.message,/恢复失败/);
});
