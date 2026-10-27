import {test,expect} from '@playwright/test';
import {readFile} from 'node:fs/promises';
import {Game,SAVE_KEY,BACKUP_KEY} from '../dist/engine.js';
import {slotKey} from '../dist/save-repository.js';
const fixture=(seed=53,round=7)=>{const g=Game.create({seed,character:'naicha',playerCount:6,mapVersion:1,talents:false});g.s.round=round;g.player.money=4100;g.s.ownership[1]={player:0,level:2,buildingType:'residence'};g.s.savedAt=1767139200000;return g.s;};
async function boot(page,state=fixture()){
 await page.clock.setFixedTime(new Date('2026-01-01T00:00:00Z'));
 await page.addInitScript(({state,key})=>{
  localStorage.setItem(key,JSON.stringify(state));localStorage.setItem('naiwa-monopoly-preferences-v1',JSON.stringify({quality:'low',speed:2,sound:false,music:false,voice:false}));
  const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return /webgl/i.test(type)?null:get.call(this,type,...args);};
  Object.defineProperty(window,'AudioContext',{value:undefined});Object.defineProperty(window,'webkitAudioContext',{value:undefined});
 },{state,key:SAVE_KEY});
 await page.goto('/');await expect(page.locator('#loadingScreen')).toBeHidden();
}
const raw=(page,id)=>page.evaluate(k=>localStorage.getItem(k),slotKey(id));
const decoded=async(page,id)=>Game.restore(await raw(page,id))?.s;
async function slots(page){if(await page.locator('#sheet').isVisible())await page.keyboard.press('Escape');await page.locator('#settingsBtn').click();await page.locator('[data-act=panel][data-panel=saves]').click();await expect(page.locator('[data-save-slot]')).toHaveCount(4);}
const row=(page,id)=>page.locator('[data-save-slot='+id+']');
async function action(page,id,act){await row(page,id).locator('[data-act=slot'+act+']').click();}
async function confirm(page){await page.locator('[data-act=slotConfirm]').click();}
async function importState(page,id,state){await row(page,id).locator('input[type=file]').setInputFiles({name:'travel.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(state))});await expect(page.locator('#sheetTitle')).toContainText('导入');}

test('three independent manual slots: save, overwrite/cancel, delete/cancel and load without touching siblings',async({page})=>{
 await boot(page);await page.locator('#continueBtn').click();await slots(page);
 for(const key of ['Tab','Shift+Tab'])for(let i=0;i<35;i++){await page.keyboard.press(key);expect(await page.evaluate(()=>document.querySelector('#sheet').contains(document.activeElement))).toBe(true);}
 await expect(row(page,'auto')).toContainText('经典发财岛');await expect(row(page,'auto')).toContainText('第 7 / 50 轮 · 6 人');await expect(row(page,'auto')).toContainText('现金 4,100');
 for(const id of ['manual1','manual2','manual3'])await action(page,id,'Save');
 const originals=await Promise.all(['manual1','manual2','manual3'].map(id=>raw(page,id)));
 for(const text of originals)expect(JSON.parse(text).schemaVersion).toBe(1);
 const newer=Game.create({seed:99,playerCount:2,talents:false}).s;newer.round=9;newer.players[0].money=2222;
 await importState(page,'auto',newer);await confirm(page);await slots(page);
 await action(page,'manual1','Save');await expect(page.locator('#sheetTitle')).toContainText('覆盖');await page.locator('[data-act=slotCancel]').click();expect(await raw(page,'manual1')).toBe(originals[0]);
 await action(page,'manual1','Save');await confirm(page);expect((await decoded(page,'manual1')).setupSeed).toBe(99);expect(await raw(page,'manual2')).toBe(originals[1]);expect(await raw(page,'manual3')).toBe(originals[2]);
 await action(page,'manual2','Delete');await page.locator('[data-act=slotCancel]').click();expect(await raw(page,'manual2')).toBe(originals[1]);await action(page,'manual2','Delete');await confirm(page);expect(await raw(page,'manual2')).toBeNull();
 const beforeLoad=await raw(page,'auto');await action(page,'manual3','Load');await confirm(page);
 expect((await decoded(page,'auto')).players).toEqual(fixture().players);expect((await decoded(page,'auto')).setupSeed).toBe(53);expect(await page.evaluate(k=>localStorage.getItem(k),BACKUP_KEY)).toBe(beforeLoad);expect(await raw(page,'manual3')).toBe(originals[2]);
 await slots(page);await action(page,'auto','Load');await confirm(page);expect(await page.evaluate(k=>localStorage.getItem(k),BACKUP_KEY)).toBe(beforeLoad);
});

test('legacy JSON import/export is slot-specific; invalid/future files cannot replace existing data',async({page},info)=>{
 const legacy=fixture();legacy.players[0].character='dounai';delete legacy.mapVersion;delete legacy.difficulty;delete legacy.talents;delete legacy.savedAt;
 await boot(page);await slots(page);const auto=await raw(page,'auto');await importState(page,'manual2',legacy);await confirm(page);
 expect(await raw(page,'auto')).toBe(auto);await expect(row(page,'manual2')).toContainText('奶茶');
 const downloadPromise=page.waitForEvent('download');await action(page,'manual2','Export');const download=await downloadPromise,path=info.outputPath('slot.json');await download.saveAs(path);const exported=JSON.parse(await readFile(path,'utf8'));expect(exported.schemaVersion).toBe(1);expect(exported.players[0].character).toBe('naicha');
 await importState(page,'manual3',exported);await confirm(page);expect(await decoded(page,'manual3')).toEqual(await decoded(page,'manual2'));
 const prior=await raw(page,'manual2');for(const text of ['{',JSON.stringify({...exported,schemaVersion:99})]){await row(page,'manual2').locator('input[type=file]').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from(text)});await expect(page.locator('#toast')).toContainText('不完整或版本不兼容');expect(await raw(page,'manual2')).toBe(prior);expect(await raw(page,'auto')).toBe(auto);}
 await action(page,'auto','Delete');await confirm(page);expect(await raw(page,'auto')).toBeNull();await page.keyboard.press('Escape');await expect(page.locator('#continueBtn')).toBeHidden();await slots(page);await action(page,'manual3','Load');await confirm(page);expect((await decoded(page,'auto')).players[0].character).toBe('naicha');
});

test('stale confirmations and quota errors keep existing slot bytes and current game intact',async({page})=>{
 await boot(page);await slots(page);const auto=await raw(page,'auto');await importState(page,'manual1',fixture(99,9));const concurrent=JSON.stringify(fixture(123,11));
 await page.evaluate(({key,text})=>localStorage.setItem(key,text),{key:slotKey('manual1'),text:concurrent});await confirm(page);await expect(page.locator('#toast')).toContainText('存档已变化');expect(await raw(page,'manual1')).toBe(concurrent);expect(await raw(page,'auto')).toBe(auto);
 await importState(page,'manual2',fixture());await page.evaluate(key=>{window.originalSet=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(k===key)throw new DOMException('测试配额不足','QuotaExceededError');return originalSet.call(this,k,v);};},slotKey('manual2'));
 await confirm(page);await expect(page.locator('#toast')).toContainText('空间不足');expect(await raw(page,'manual2')).toBeNull();expect(await raw(page,'auto')).toBe(auto);await page.evaluate(()=>Storage.prototype.setItem=originalSet);
});

test('real dice selection and bank buttons advance command revisions and per-player sequences',async({page})=>{
 const state=fixture();state.players[0].pos=6;state.players[0].vehicle=2;state.players[0].diceCount=3;state.players[0].deposit=600;
 await boot(page,state);await page.locator('#continueBtn').click();
 const saved=async()=>JSON.parse(await raw(page,'auto'));
 expect((await saved()).revision).toBe(0);await page.getByRole('combobox',{name:/使用骰子数量/}).click();await page.getByRole('option',{name:'2 颗骰子',exact:true}).click();
 await expect.poll(async()=>(await saved()).revision).toBe(1);expect((await saved()).players[0].diceCount).toBe(2);
 await page.locator('.dock-tabs [data-panel=bank]').click();await page.locator('#bankAmount').fill('300');await page.locator('#bankConfirm').click();
 await expect.poll(async()=>(await saved()).revision).toBe(2);expect((await saved()).players[0].money).toBe(3800);expect((await saved()).players[0].deposit).toBe(900);
 await page.locator('[data-act=bankKind][data-kind=withdraw]').click();await page.locator('#bankAmount').fill('200');await page.locator('#bankConfirm').click();
 await expect.poll(async()=>(await saved()).revision).toBe(3);expect((await saved()).players[0].money).toBe(4000);expect((await saved()).players[0].deposit).toBe(700);expect((await saved()).commandSequences).toEqual([3,0,0,0,0,0]);
});
