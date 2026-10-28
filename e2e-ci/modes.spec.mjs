import {test,expect} from '@playwright/test';
import {Game,SAVE_KEY} from '../dist/engine.js';
import {modeConfig,dailySeed} from '../dist/modes.js';
async function boot(page,state=null){
 await page.clock.setFixedTime(new Date('2026-10-28T12:00:00Z'));
 await page.addInitScript(({state,key})=>{if(!sessionStorage.getItem('mode-fixture')){localStorage.clear();if(state)localStorage.setItem(key,JSON.stringify(state));sessionStorage.setItem('mode-fixture','1');}localStorage.setItem('naiwa-monopoly-preferences-v1',JSON.stringify({quality:'low',speed:1,sound:false,music:false,voice:false}));const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return /webgl/i.test(type)?null:get.call(this,type,...args);};Object.defineProperty(window,'AudioContext',{value:undefined});Object.defineProperty(window,'webkitAudioContext',{value:undefined});},{state,key:SAVE_KEY});
 await page.goto('/');await expect(page.locator('#loadingScreen')).toBeHidden();
}
async function choose(page,selector,value){const select=page.locator(selector),label=await select.locator('option[value="'+value+'"]').textContent();await select.locator('..').getByRole('combobox').click();await page.getByRole('option',{name:label,exact:true}).click();}
for(const id of ['short','business','daily'])test(id+' mode is selected with real controls, starts and survives reload',async({page})=>{
 await boot(page);await page.locator('#advancedBtn').click();await page.locator('#setupSeed').fill('17');await choose(page,'#setupMode',id);if(id==='daily')await expect(page.locator('#setupSeed')).toBeDisabled();await choose(page,'#setupInitiative','human');await page.locator('[data-act=applyAdvanced]').click();
 await expect(page.locator('#durationHint')).toContainText(id==='business'?'5,000':id==='daily'?'本地日期':'20');
 await expect(page.locator('#roundSelect')).toHaveValue(id==='daily'?'30':'20');await expect(page.locator('#roundSelect')).toBeDisabled();await page.locator('#startBtn').click();await expect(page.locator('#startScreen')).toBeHidden();const read=()=>page.evaluate(key=>JSON.parse(localStorage.getItem(key)),SAVE_KEY);const s=await read();expect(s.mode.id).toBe(id);expect(s.maxRounds).toBe(id==='daily'?30:20);expect(s.options.speed).toBe(2);
 if(id==='business'){expect(s.players[0].loan).toBe(800);expect(Object.values(s.ownership).filter(o=>o.player===0)).toHaveLength(2);expect(s.mode.allowedCards).not.toContain('steal');}
 if(id==='daily'){expect(s.mode.dailyDate).toBe('2026-10-28');expect(s.setupSeed).toBe(dailySeed('2026-10-28'));}
 await page.reload();await expect(page.locator('#loadingScreen')).toBeHidden();await page.locator('#continueBtn').click();await expect(page.locator('#startScreen')).toBeHidden();expect((await read()).mode).toEqual(s.mode);
});
test('settlement displays objective meters, each seat result and specific failure reason',async({page})=>{
 const g=Game.create({seed:17,mode:modeConfig({id:'business'})});g.player.money=20000;g.s.players[1].money=0;g.s.round=20;g.finish();await boot(page,g.s);await page.locator('#continueBtn').click();
 const result=page.locator('.mode-result');await expect(result).toBeVisible();await expect(result.locator('[data-mode-player="0"]')).toContainText('挑战成功');await expect(result.locator('[data-mode-player="1"]')).toContainText('轮数已用尽，净资产未达目标');await expect(result.getByRole('progressbar',{name:'玩家 1 净资产目标进度'})).toHaveAttribute('value','5000');
 await page.keyboard.press('Tab');expect(await page.evaluate(()=>document.getElementById('sheet').contains(document.activeElement))).toBe(true);
});
