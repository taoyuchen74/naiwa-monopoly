import {test,expect} from '@playwright/test';
import {Game,SAVE_KEY,BACKUP_KEY} from '../dist/engine.js';
const errors=new WeakMap();
const realWebGL=process.env.NAIWA_BROWSER_WEBGL==='1';
test.beforeEach(({page})=>{const list=[];errors.set(page,list);page.on('pageerror',e=>list.push(e.message));});
test.afterEach(async({page},info)=>{
 if(info.status!==info.expectedStatus&&!page.isClosed())await info.attach('saved-state.json',{body:await page.evaluate(key=>localStorage.getItem(key)||'null',SAVE_KEY),contentType:'application/json'});
 expect(errors.get(page),'uncaught browser exceptions').toEqual([]);
});
async function boot(page,{saved=null,audioFailure=false,webglFailure=!realWebGL}={}){
 await page.clock.setFixedTime(new Date('2026-01-01T00:00:00Z'));
 await page.addInitScript(({saved,key,audioFailure,webglFailure})=>{
  localStorage.setItem('naiwa-monopoly-preferences-v1',JSON.stringify({sound:audioFailure,music:audioFailure,voice:audioFailure,quality:'low',speed:2}));
  localStorage.setItem('naiwa-setup-v1',JSON.stringify({seed:'17',randomStart:false,mapVersion:2}));
  if(saved)localStorage.setItem(key,JSON.stringify(saved));
  const Context=audioFailure?class{constructor(){throw Error('Audio device unavailable');}}:undefined;
  Object.defineProperty(window,'AudioContext',{value:Context,configurable:true});Object.defineProperty(window,'webkitAudioContext',{value:Context,configurable:true});
  // Decorative portrait/building renderers request preserveDrawingBuffer.
  // Exercise their existing SVG fallback; retain real map WebGL in smoke tests.
  const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,options,...args){if(/webgl/i.test(type)&&(webglFailure||options?.preserveDrawingBuffer))return null;return get.call(this,type,options,...args);};
 },{saved,key:SAVE_KEY,audioFailure,webglFailure});
 await page.goto('/');await expect(page.locator('#loadingScreen')).toBeHidden({timeout:90000});await expect(page.locator('#app')).not.toHaveAttribute('inert');
}
const raw=(page,key=SAVE_KEY)=>page.evaluate(key=>localStorage.getItem(key),key);
const state=async page=>JSON.parse(await raw(page));
async function click(page,selector){const target=page.locator(selector);await target.scrollIntoViewIfNeeded();const r=await target.boundingBox(),size=page.viewportSize();expect(r.x).toBeGreaterThanOrEqual(0);expect(r.y).toBeGreaterThanOrEqual(0);expect(r.x+r.width).toBeLessThanOrEqual(size.width+1);expect(r.y+r.height).toBeLessThanOrEqual(size.height+1);expect(r.width).toBeGreaterThanOrEqual(43.5);expect(r.height).toBeGreaterThanOrEqual(43.5);await target.click();}
async function start(page){await page.locator('#talentsEnabled').uncheck();await click(page,'#startBtn');await expect(page.locator('#startScreen')).toBeHidden();await expect(page.locator('#actionBtn')).toBeEnabled();}
async function rollOne(page){
 await click(page,'.dock-tabs [data-panel=cards]');await click(page,'[data-act=card][data-index="0"]');await click(page,'[data-act=useCard][data-target="1"]');
 await expect.poll(async()=>(await state(page)).players[0].forced).toBe(1);await click(page,'#actionBtn');await expect.poll(async()=>(await state(page)).phase).toBe('buy');
}

test('new game → real dice → purchase → construction → end turn in both phone orientations',async({page})=>{
 await boot(page);await page.locator('[data-select-id=playerCountSelect] button').click();await page.getByRole('option',{name:'6 席 · 类型可配置',exact:true}).click();await start(page);
 expect((await state(page)).players).toHaveLength(6);
 if(realWebGL){await expect(page.locator('#scene > canvas')).toHaveCount(1);expect(await page.locator('#scene > canvas').evaluate(el=>!!el.getContext('webgl2'))).toBe(true);}else await expect(page.locator('#fallback')).toBeVisible();
 await rollOne(page);await click(page,'[data-act=buy]');
 await expect.poll(async()=>(await state(page)).ownership[1]?.player).toBe(0);
 await expect(page.locator('#sheet')).toHaveAttribute('data-panel','buildHere');await click(page,'[data-act=construct][data-type=residence]');
 await expect.poll(async()=>(await state(page)).ownership[1]?.level).toBe(1);expect((await state(page)).ownership[1].buildingType).toBe('residence');
 if(await page.locator('#sheet').isVisible())await click(page,'#closeSheet');
 await expect(page.locator('#actionBtn')).toContainText('结束');await click(page,'#actionBtn');await expect.poll(async()=>(await state(page)).current).not.toBe(0);
});

test('failed audio download and unavailable audio device still permit a silent playable start',async({page})=>{
 let failed=0;await page.route('**/assets/laugh.*.mp3',route=>{failed++;return route.abort('failed');});await boot(page,{audioFailure:true});expect(failed).toBeGreaterThan(0);
 await start(page);await click(page,'#settingsBtn');await expect(page.locator('#audioStatus')).toHaveText('音频不可用');await page.keyboard.press('Escape');
 await rollOne(page);await click(page,'[data-act=pass]');await expect.poll(async()=>(await state(page)).phase).toBe('end');
});

test('existing archive survives first load and cancelled new game; confirmed overwrite backs up and restores',async({page})=>{
 const g=Game.create({seed:19,playerCount:3,talents:false});g.s.round=7;g.s.players[0].money=4100;g.s.ownership[1]={player:0,level:2,buildingType:'residence'};g.s.savedAt=Date.parse('2025-12-31T12:00:00Z');const original=JSON.stringify(g.s);
 await boot(page,{saved:g.s});await expect(page.locator('#continueBtn')).toBeVisible();expect(await raw(page)).toBe(original);expect(await raw(page,BACKUP_KEY)).toBeNull();
 await click(page,'#startBtn');await expect(page.locator('#sheetSubtitle')).toContainText('第 7 / 50 轮 · 3 人');await expect(page.locator('#sheetSubtitle')).toContainText('最近保存时间：2025/12/31 12:00:00');
 await page.keyboard.press('Escape');await expect(page.locator('#sheet')).toBeVisible();expect(await raw(page)).toBe(original);
 await click(page,'[data-act=cancel]');expect(await raw(page)).toBe(original);expect(await raw(page,BACKUP_KEY)).toBeNull();await expect(page.locator('#startBtn')).toBeFocused();
 await click(page,'#startBtn');await click(page,'[data-act=overwriteSave]');await expect(page.locator('#startScreen')).toBeHidden();expect(await raw(page,BACKUP_KEY)).toBe(original);expect(await raw(page)).not.toBe(original);
 await click(page,'#settingsBtn');await click(page,'[data-act=confirmRestoreBackup]');await click(page,'[data-act=restoreBackup]');
 await expect.poll(async()=>(await state(page)).round).toBe(7);const restored=await state(page);expect(restored.setupSeed).toBe(19);expect(restored.seed).toBe(g.s.seed);expect(restored.players).toEqual(g.s.players);expect(restored.ownership).toEqual(g.s.ownership);expect(await raw(page,BACKUP_KEY)).toBe(original);
});

test('real Tab/Shift+Tab stay inside modal, native summary works, Escape restores opener',async({page})=>{
 await boot(page);await start(page);await page.locator('#settingsBtn').focus();await page.keyboard.press('Enter');await expect(page.locator('[data-select-id=speedSelect] button')).toBeFocused();
 expect(await page.locator('.game-layout').evaluate(el=>el.inert)).toBe(true);
 const summary=page.locator('.audio-credit summary');await summary.focus();await page.keyboard.press('Enter');expect(await summary.evaluate(el=>el.parentElement.open)).toBe(true);await page.keyboard.press('Tab');expect(await page.evaluate(()=>document.activeElement.tagName)).toBe('A');await page.keyboard.press('Shift+Tab');await expect(summary).toBeFocused();
 for(const key of ['Tab','Shift+Tab'])for(let i=0;i<30;i++){await page.keyboard.press(key);expect(await page.evaluate(()=>document.querySelector('#sheet').contains(document.activeElement))).toBe(true);}
 await page.keyboard.press('Escape');await expect(page.locator('#sheet')).toBeHidden();await expect(page.locator('#settingsBtn')).toBeFocused();expect(await page.locator('.game-layout').evaluate(el=>el.inert)).toBe(false);
});

test('WebGL creation failure exposes an interactive simplified map and preserves game actions',async({page})=>{
 await boot(page,{webglFailure:true});await start(page);await expect(page.locator('#fallback')).toBeVisible();await expect(page.locator('.fallback-tile')).toHaveCount(48);
 await page.locator('.fallback-tile[data-tile="1"]').click();await expect(page.locator('#sheetTitle')).not.toBeEmpty();await page.keyboard.press('Escape');
 await rollOne(page);await click(page,'[data-act=buy]');await expect.poll(async()=>(await state(page)).ownership[1]?.player).toBe(0);await expect(page.locator('.fallback-tile[data-tile="1"]')).toHaveClass(/current/);await expect(page.locator('.fallback-tile[data-tile="1"]')).toContainText('⌂');
});
