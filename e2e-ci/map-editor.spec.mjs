import {test,expect} from '@playwright/test';
import {readFile} from 'node:fs/promises';
import {Game} from '../dist/engine.js';
import {MAP_DATA} from '../dist/maps.js';
import {parseMap,MAX_MAP_BYTES} from '../dist/map-schema.js';
import {SAVE_KEY} from '../dist/save-repository.js';
const copy=x=>JSON.parse(JSON.stringify(x));
async function boot(page){
 const original=JSON.stringify(Game.create({seed:77,playerCount:3}).s);
 await page.addInitScript(({original,key})=>{if(!localStorage.getItem(key))localStorage.setItem(key,original);localStorage.setItem('naiwa-monopoly-preferences-v1',JSON.stringify({quality:'low',speed:3,sound:false,music:false,voice:false}));const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return /webgl/i.test(type)?null:get.call(this,type,...args);};},{original,key:SAVE_KEY});
 await page.goto('/map-editor.html');await expect(page.locator('#validation')).toContainText('校验通过');return original;
}
async function importMap(page,map){await page.locator('#import').setInputFiles({name:'map.json',mimeType:'application/json',buffer:Buffer.from(typeof map==='string'?map:JSON.stringify(map))});}
test('real editor edits tiles and connections, previews, validates, exports and falls back to sharing a file',async({page})=>{
 await boot(page);await page.locator('#copy').click();await page.locator('#mapName').fill('自制旅行图');await page.locator('#cash').fill('4800');await page.locator('#rounds').selectOption('20');
 await page.locator('#add').click();await expect(page.locator('#validation')).toContainText('49 格');await page.locator('#tileName').fill('新桥');await expect(page.locator('#preview [role=button]')).toHaveCount(49);
 await page.locator('#next').selectOption('0');await expect(page.locator('#play')).toBeDisabled();await expect(page.locator('#validation')).toContainText('主路');await page.locator('#next').selectOption('1');await expect(page.locator('#play')).toBeEnabled();
 const exported=page.waitForEvent('download');await page.locator('#export').click();const file=await exported,data=JSON.parse(await readFile(await file.path(),'utf8'));expect(parseMap(data).tiles[48].name).toBe('新桥');expect(data.startingCash).toBe(4800);
 await page.evaluate(()=>Object.defineProperty(navigator,'canShare',{configurable:true,value:()=>false}));
 const shared=page.waitForEvent('download');await page.locator('#share').click();expect((await shared).suggestedFilename()).toContain('.json');await expect(page.locator('#notice')).toContainText('已下载');
});
test('malicious and oversized files preserve draft; old schema migration works and names stay text',async({page})=>{
 await boot(page);await page.locator('#mapName').fill('保留草稿');
 await importMap(page,' '.repeat(MAX_MAP_BYTES+1));await expect(page.locator('#notice')).toContainText('未导入');await expect(page.locator('#mapName')).toHaveValue('保留草稿');
 const bad=copy(MAP_DATA[2]);bad.tiles[1].next=[999];await importMap(page,bad);await expect(page.locator('#notice')).toContainText('未导入');await expect(page.locator('#mapName')).toHaveValue('保留草稿');
 bad.tiles[1].name='<script>window.mapAttack=true</script>';await importMap(page,bad);expect(await page.evaluate(()=>window.mapAttack)).toBeUndefined();
 const old=copy(MAP_DATA[1]);old.schemaVersion=0;old.startingMoney=5000;delete old.startingCash;old.name='旧版地图';await importMap(page,old);await expect(page.locator('#notice')).toContainText('校验成功');await expect(page.locator('#cash')).toHaveValue('5000');
});
test('playtest launches actual game controls in isolated storage and restores custom map after reload',async({page})=>{
 const original=await boot(page);await page.locator('#mapName').fill('我的试玩');await page.locator('#cash').fill('4800');
 await page.locator('#play').click();await expect(page).toHaveURL(/mapTrial=1/);await expect(page.locator('#loadingScreen')).toBeHidden();await expect(page.locator('#startScreen')).toBeHidden();await expect(page.locator('#mapHeading')).toHaveText('我的试玩');
 await expect(page.locator('#fallback')).toBeVisible();await expect(page.locator('#actionBtn')).toHaveText('掷骰子');await page.locator('#actionBtn').click();
 await expect.poll(()=>page.evaluate(k=>JSON.parse(localStorage.getItem('naiwa-map-trial:'+k)).revision,SAVE_KEY)).toBeGreaterThan(0);
 expect(await page.evaluate(k=>localStorage.getItem(k),SAVE_KEY)).toBe(original);
 await page.reload();await expect(page.locator('#loadingScreen')).toBeHidden();await expect(page.locator('#mapHeading')).toHaveText('我的试玩');expect(await page.evaluate(k=>localStorage.getItem(k),SAVE_KEY)).toBe(original);
});
