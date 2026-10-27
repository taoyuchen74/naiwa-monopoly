import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {Game,SAVE_KEY} from '../dist/engine.js';

async function boot(page,{finished=false,buy=false,ai=false}={}){
 const g=Game.create({seed:17,playerCount:3,talents:false});g.player.pos=buy?1:6;g.player.bankAccess=true;g.player.money=5000;
 if(buy)g.s.phase='buy';if(finished)g.finish();if(ai)g.s.current=1;
 await page.addInitScript(({saved,key})=>{
  localStorage.setItem(key,JSON.stringify(saved));
  localStorage.setItem('naiwa-monopoly-preferences-v1',JSON.stringify({sound:false,music:false,voice:false,quality:'low',speed:2}));
  Object.defineProperty(window,'AudioContext',{value:undefined,configurable:true});
 },{saved:g.s,key:SAVE_KEY});
 await page.goto('/');await expect(page.locator('#loadingScreen')).toBeHidden({timeout:90000});
 await page.evaluate(()=>{window.spoken=[];new MutationObserver(()=>{const text=document.querySelector('#gameAnnouncements').textContent;if(text)window.spoken.push(text);}).observe(document.querySelector('#gameAnnouncements'),{childList:true,subtree:true,characterData:true});});
 await page.locator('#continueBtn').click();await expect(page.locator('#startScreen')).toBeHidden();
}
const active=page=>page.evaluate(()=>{let el=document.activeElement;while(el?.shadowRoot?.activeElement)el=el.shadowRoot.activeElement;return el?.id;});
async function inside(page){expect(await page.evaluate(()=>{let n=document.activeElement;return document.querySelector('#sheet').contains(n);})).toBe(true);}

test('keyboard isolation, dynamic controls, shadow focus, dropdown Escape and trigger restoration',async({page})=>{
 await boot(page);await page.locator('#settingsBtn').focus();await page.keyboard.press('Enter');
 await expect(page.locator('#sheet')).toHaveAttribute('aria-labelledby','sheetTitle');
 await expect(page.locator('[data-select-id=speedSelect] button')).toBeFocused();
 expect(await page.locator('.game-layout').evaluate(el=>el.inert)).toBe(true);
 await page.evaluate(()=>document.querySelector('#actionBtn').focus());await inside(page);
 await page.evaluate(()=>{const b=document.createElement('button');b.id='late-background';b.textContent='background';document.querySelector('#app').append(b);b.focus();});await inside(page);
 await expect.poll(()=>page.locator('#late-background').evaluate(el=>el.inert)).toBe(true);
 await page.keyboard.press('Enter');await expect(page.getByRole('listbox')).toBeVisible();
 expect(await page.getByRole('listbox').evaluate(el=>!!el.closest('#sheet'))).toBe(true);
 await page.keyboard.press('Escape');await expect(page.getByRole('listbox')).toBeHidden();await expect(page.locator('#sheet')).toBeVisible();
 await page.evaluate(()=>{
  const box=document.createElement('section');box.innerHTML='<a id="probe-link" href="#">link</a><details open><summary id="probe-summary">details</summary><input id="probe-input"><select id="probe-select"><option>one</option></select><textarea id="probe-text"></textarea></details><div id="probe-custom" role="button" tabindex="0">custom</div><div id="probe-edit" contenteditable="true">edit</div><button hidden id="probe-hidden">hidden</button><button disabled id="probe-disabled">disabled</button><div tabindex="-1" id="probe-negative">negative</div>';
  const host=document.createElement('focus-probe');host.attachShadow({mode:'open',delegatesFocus:true}).innerHTML='<button id="probe-shadow">shadow</button><select id="probe-native-select"><option>native</option></select>';box.append(host);document.querySelector('#sheetBody').append(box);
 });
 await page.locator('[data-select-id=probe-select] button').evaluate(el=>el.id='probe-select-trigger');
 await page.locator('#probe-link').focus();const seen=[];
 for(let i=0;i<9;i++){seen.push(await active(page));await page.keyboard.press('Tab');await inside(page);}
 expect(seen).toEqual(['probe-link','probe-summary','probe-input','probe-select-trigger','probe-text','probe-custom','probe-edit','probe-shadow','probe-native-select']);
 await page.keyboard.press('Shift+Tab');expect(await active(page)).toBe('probe-native-select');
 await page.locator('#collapseSheet').evaluate(el=>{if(!el.hidden&&getComputedStyle(el).display!=='none')el.focus();});
 // Traverse more than a full cycle in both directions using actual browser key events.
 for(const key of ['Tab','Shift+Tab'])for(let i=0;i<30;i++){await page.keyboard.press(key);await inside(page);}
 await page.keyboard.press('Escape');await expect(page.locator('#sheet')).toBeHidden();await expect(page.locator('#settingsBtn')).toBeFocused();
 expect(await page.locator('.game-layout').evaluate(el=>el.inert)).toBe(false);
 expect(await page.locator('#late-background').evaluate(el=>el.inert)).toBe(false);
});

test('pending purchase rejects Escape and collapsed panel retains modality',async({page})=>{
 await boot(page,{buy:true});await expect(page.locator('#sheet')).toBeVisible();
 const before=await page.evaluate(key=>localStorage.getItem(key),SAVE_KEY);
 await page.keyboard.press('Escape');await expect(page.locator('#sheet')).toBeVisible();
 expect(await page.evaluate(key=>localStorage.getItem(key),SAVE_KEY)).toBe(before);
 if(await page.locator('#collapseSheet').isVisible()){
  await page.locator('#collapseSheet').click();await expect(page.locator('#sheetBody')).toBeHidden();
  await expect(page.locator('#sheet')).toHaveAttribute('aria-modal','true');
  for(let i=0;i<5;i++){await page.keyboard.press('Tab');await inside(page);}
  expect(await page.locator('.control-dock').evaluate(el=>el.inert)).toBe(true);
  await page.locator('#collapseSheet').click();
 }
 await page.locator('[data-act=buy]').focus();await page.keyboard.press('Enter');
 await expect.poll(()=>page.evaluate(key=>JSON.parse(localStorage.getItem(key)).ownership[1]?.player,SAVE_KEY)).toBe(0);
});

test('recreated player trigger regains focus and text-only panel falls back to title',async({page})=>{
 await boot(page);if(await page.locator('#playersToggle').isVisible())await page.locator('#playersToggle').click();
 const trigger=page.locator('[data-player-id="2"]');await trigger.focus();await page.keyboard.press('Enter');
 await expect(page.locator('#sheet')).toBeVisible();await page.keyboard.press('Escape');await expect(trigger).toBeFocused();
 await page.locator('#settingsBtn').click();
 await page.evaluate(()=>{document.querySelector('#sheetBody').textContent='Text only';document.querySelector('#closeSheet').hidden=true;document.querySelector('#collapseSheet').hidden=true;});
 await page.keyboard.press('Tab');await expect(page.locator('#sheetTitle')).toBeFocused();
 await page.keyboard.press('Shift+Tab');await expect(page.locator('#sheetTitle')).toBeFocused();
 await page.keyboard.press('Escape');await expect(page.locator('#settingsBtn')).toBeFocused();
});

test('native result summaries respond to Enter and Tab; pending result stays open',async({page})=>{
 await boot(page,{finished:true});const summaries=page.locator('.result-entry summary');
 await expect(summaries.first()).toBeFocused();await expect(summaries).toHaveCount(3);
 const first=summaries.first();const wasOpen=await first.evaluate(el=>el.parentElement.open);
 await page.keyboard.press('Enter');expect(await first.evaluate(el=>el.parentElement.open)).toBe(!wasOpen);
 await page.keyboard.press('Tab');await expect(summaries.nth(1)).toBeFocused();
 await page.keyboard.press('Shift+Tab');await expect(first).toBeFocused();
 await page.keyboard.press('Escape');await expect(page.locator('#sheet')).toBeVisible();await inside(page);
 const audit=await new AxeBuilder({page}).include('#sheet').withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();expect(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))).toEqual([]);
 await page.locator('[data-act=viewBoard]').focus();await page.keyboard.press('Enter');await expect(page.locator('#sheet')).toBeHidden();
});

test('AI sequence produces bounded live announcements while detailed history stays available',async({page})=>{
 await boot(page,{ai:true});
 await expect.poll(()=>page.evaluate(key=>JSON.parse(localStorage.getItem(key)).current,SAVE_KEY),{timeout:60000}).toBe(0);
 await expect.poll(()=>page.evaluate(()=>window.spoken.some(t=>t.includes('轮到')))).toBe(true);
 const spoken=await page.evaluate(()=>window.spoken);
 expect(spoken.filter(t=>t.includes('电脑奶伴'))).toHaveLength(1);
 expect(spoken.length).toBeLessThanOrEqual(2);
 expect(await page.locator('#newsFlash').getAttribute('aria-live')).toBe('off');
 expect(await page.evaluate(key=>JSON.parse(localStorage.getItem(key)).logs.length,SAVE_KEY)).toBeGreaterThan(4);
});

test('modal contrast and accessible names pass browser audit in settings, bank, stocks and results',async({page})=>{
 await boot(page);
 for(const panel of ['settings','bank','stocks']){
  await page.locator(panel==='settings'?'#settingsBtn':'.dock-tabs [data-panel='+panel+']').click();
  const audit=await new AxeBuilder({page}).include('#sheet').withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  expect(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))).toEqual([]);
  await page.keyboard.press('Escape');await expect(page.locator('#sheet')).toBeHidden();
 }
});
