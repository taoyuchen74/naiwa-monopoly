import {test,expect} from '@playwright/test';
import {Game,SAVE_KEY} from '../dist/engine.js';

function archive(){const g=Game.create({seed:17,playerCount:6,talents:false});g.player.pos=6;g.player.bankAccess=true;g.player.money=5000;g.player.cards=Array(5).fill(['dice','shield','recover']).flat();for(const id of [1,2,4])g.s.ownership[id]={player:0,level:2};return g.s;}
async function boot(page,saved=null){
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.clock.setFixedTime(new Date('2026-01-01T00:00:00Z'));
 await page.addInitScript(({saved,key})=>{
  localStorage.setItem('naiwa-monopoly-preferences-v1',JSON.stringify({sound:false,music:false,voice:false,quality:'low',speed:2}));
  localStorage.setItem('naiwa-setup-v1',JSON.stringify({seed:'17',randomStart:false,mapVersion:2}));
  if(saved)localStorage.setItem(key,JSON.stringify(saved));
  Object.defineProperty(window,'AudioContext',{value:undefined,configurable:true});Object.defineProperty(window,'webkitAudioContext',{value:undefined,configurable:true});
  Object.defineProperty(Element.prototype,'requestFullscreen',{configurable:true,value:async()=>{throw Error('Denied fullscreen for layout fallback test');}});
 },{saved,key:SAVE_KEY});
 await page.goto('/');await expect(page.locator('#loadingScreen')).toBeHidden({timeout:90000});
 await expect(page.locator('#app')).not.toHaveAttribute('inert');
 if(saved){await page.locator('#continueBtn').click();await expect(page.locator('#startScreen')).toBeHidden();}
 return errors;
}
const state=page=>page.evaluate(key=>JSON.parse(localStorage.getItem(key)),SAVE_KEY);
async function reachable(locator){await locator.scrollIntoViewIfNeeded();const r=await locator.evaluate(el=>{const r=el.getBoundingClientRect(),hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return {width:r.width,height:r.height,inView:r.x>=0&&r.y>=0&&r.right<=innerWidth+1&&r.bottom<=innerHeight+1,hit:el===hit||el.contains(hit)};});expect(r.width).toBeGreaterThanOrEqual(43.5);expect(r.height).toBeGreaterThanOrEqual(43.5);expect(r.inView).toBe(true);expect(r.hit).toBe(true);}
async function close(page){await reachable(page.locator('#closeSheet'));await page.locator('#closeSheet').click();await expect(page.locator('#sheet')).toBeHidden();}
async function exposedMap(page){return page.locator('#scene canvas').evaluate(canvas=>{for(let y=150;y<innerHeight-180;y+=20)for(let x=280;x<innerWidth-120;x+=20)if([0,40,80].every(dx=>document.elementFromPoint(x+dx,y)===canvas))return {x,y};for(let y=300;y<innerHeight-220;y+=20)for(let x=40;x<innerWidth-120;x+=20)if([0,40,80].every(dx=>document.elementFromPoint(x+dx,y)===canvas))return {x,y};throw Error('No exposed map drag/pinch target');});}
const touchSessions=new WeakMap();
async function touch(page,kind,points){let cdp=touchSessions.get(page);if(!cdp){cdp=await page.context().newCDPSession(page);touchSessions.set(page,cdp);}await cdp.send('Input.dispatchTouchEvent',{type:kind,touchPoints:points.map((p,id)=>({id,x:p.x,y:p.y,radiusX:3,radiusY:3,force:1}))});}

test('new six-player game: card choice, real roll, purchase confirmation and end turn remain reachable',async({page})=>{
 const errors=await boot(page);
 await page.locator('[data-select-id=playerCountSelect] button').click();await page.getByRole('option',{name:'6 人 · 你 + 5 位电脑',exact:true}).click();
 await page.locator('#talentsEnabled').uncheck();await reachable(page.locator('#startBtn'));await page.locator('#startBtn').click();
 await expect(page.locator('#actionBtn')).toBeEnabled();await reachable(page.locator('#actionBtn'));
 if(await page.locator('#playersToggle').isVisible()){await page.locator('#playersToggle').click();await expect(page.locator('.sidebar .player')).toHaveCount(6);await page.locator('#playersToggle').click();}
 await reachable(page.locator('.dock-tabs [data-panel=cards]'));await page.locator('.dock-tabs [data-panel=cards]').click();
 await reachable(page.locator('[data-act=card][data-index="0"]'));await page.locator('[data-act=card][data-index="0"]').click();
 await reachable(page.locator('[data-act=useCard][data-target="1"]'));await page.locator('[data-act=useCard][data-target="1"]').click();
 await reachable(page.locator('#actionBtn'));await page.locator('#actionBtn').click();
 await expect.poll(async()=>(await state(page)).phase,{timeout:60000}).toBe('buy');
 await reachable(page.locator('[data-act=buy]'));await page.locator('[data-act=buy]').click();
 await expect.poll(async()=>(await state(page)).ownership[1]?.player).toBe(0);
 if(await page.locator('#sheet').isVisible())await close(page);
 await expect(page.locator('#actionBtn')).toContainText('结束');await reachable(page.locator('#actionBtn'));await page.locator('#actionBtn').click();
 await expect.poll(async()=>(await state(page)).current).not.toBe(0);expect(errors).toEqual([]);
});

test('scrollable panels and player profiles keep readable body text, usable controls and no horizontal overflow',async({page})=>{
 const errors=await boot(page,archive());
 for(const panel of ['deeds','cards','bank','stocks','shop']){
  await page.locator('.dock-tabs [data-panel='+panel+']').click();await expect(page.locator('#sheet')).toBeVisible();
  const metrics=await page.locator('#sheetBody').evaluate(el=>({overflow:el.scrollWidth-el.clientWidth,small:[...el.querySelectorAll('p,li,.card-bag-summary>span')].filter(p=>p.textContent.trim()).filter(p=>parseFloat(getComputedStyle(p).fontSize)<13).map(p=>p.className)}));expect(metrics.overflow,panel).toBeLessThanOrEqual(1);expect(metrics.small,panel).toEqual([]);
  const last=page.locator('#sheetBody button:enabled').last();if(await last.count())await reachable(last);
  if(await page.locator('#collapseSheet').isVisible()){await page.locator('#collapseSheet').click();await expect(page.locator('#sheetBody')).toBeHidden();await page.locator('#collapseSheet').click();await expect(page.locator('#sheetBody')).toBeVisible();}
  await close(page);
 }
 if(await page.locator('#playersToggle').isVisible())await page.locator('#playersToggle').click();
 await reachable(page.locator('.sidebar .player').last());await page.locator('.sidebar .player').last().click();await expect(page.locator('#sheetTitle')).toHaveText('奶伴旅行档案');expect(await page.locator('.player-asset>span').evaluateAll(els=>els.every(el=>parseFloat(getComputedStyle(el).fontSize)>=13))).toBe(true);await close(page);
 await page.locator('#settingsBtn').click();await reachable(page.locator('#sheetBody [data-act=confirmRestart]'));await close(page);expect(errors).toEqual([]);
});

test('native touch drag/pinch survive manual rotation and modal scroll never leaks to map or document',async({page})=>{
 const errors=await boot(page,archive()),before=await state(page);
 await page.evaluate(()=>{window.cameraEvents=[];document.querySelector('#scene').addEventListener('camerachange',e=>window.cameraEvents.push(e.detail));});
 for(let rotation=0;rotation<2;rotation++){
  await page.locator('#followBtn').click();const p=await exposedMap(page);
  await touch(page,'touchStart',[p]);await touch(page,'touchMove',[{x:p.x+50,y:p.y+10}]);await touch(page,'touchEnd',[]);await expect(page.locator('#followBtn')).toHaveAttribute('aria-pressed','false');
  const count=await page.evaluate(()=>cameraEvents.length);
  await touch(page,'touchStart',[p,{x:p.x+40,y:p.y}]);await touch(page,'touchMove',[p,{x:p.x+80,y:p.y}]);await touch(page,'touchEnd',[]);
  await expect.poll(()=>page.evaluate(()=>cameraEvents.length)).toBeGreaterThan(count);await expect(page.locator('#sheet')).toBeHidden();
  await page.locator('#helpBtn').click();await page.locator('#sheetBody').evaluate(el=>el.scrollTop=el.scrollHeight);
  const events=await page.evaluate(()=>cameraEvents.length),r=await page.locator('#sheetBody').boundingBox();await page.mouse.move(r.x+r.width/2,r.y+r.height-10);await page.mouse.wheel(0,900);
  await touch(page,'touchStart',[{x:r.x+r.width/2,y:r.y+r.height-30}]);await touch(page,'touchMove',[{x:r.x+r.width/2,y:r.y+20}]);await touch(page,'touchEnd',[]);
  expect(await page.evaluate(()=>({scroll:scrollY,doc:document.documentElement.scrollTop,body:document.body.scrollTop,camera:cameraEvents.length}))).toEqual({scroll:0,doc:0,body:0,camera:events});
  await close(page);await page.locator('#orientationBtn').click();await expect.poll(()=>page.locator('#app').getAttribute('data-rotated')).toBe(rotation===0?'true':'false');
 }
 expect(await state(page)).toEqual(before);expect(errors).toEqual([]);
});

test('four safe edges rotate correctly; focused inputs and confirmation survive keyboard-sized viewport contraction',async({page})=>{
 const errors=await boot(page,archive()),viewport=page.viewportSize();
 await page.evaluate(()=>{for(const [edge,n]of Object.entries({top:12,right:30,bottom:22,left:14}))document.documentElement.style.setProperty('--inset-'+edge,n+'px');});
 for(let i=0;i<2;i++){
  const rect=await page.locator('.game-layout').boundingBox();expect(rect.x).toBeCloseTo(14,0);expect(rect.y).toBeCloseTo(12,0);expect(rect.x+rect.width).toBeCloseTo(viewport.width-30,0);expect(rect.y+rect.height).toBeCloseTo(viewport.height-22,0);
  await reachable(page.locator('#actionBtn'));
  await page.locator('#settingsBtn').click();await page.locator('[data-select-id=qualitySelect] button').click();const popup=await page.getByRole('listbox').boundingBox();expect(popup.x).toBeGreaterThanOrEqual(14);expect(popup.y).toBeGreaterThanOrEqual(12);expect(popup.x+popup.width).toBeLessThanOrEqual(viewport.width-30);expect(popup.y+popup.height).toBeLessThanOrEqual(viewport.height-22);await page.keyboard.press('Escape');await close(page);
  await page.locator('#orientationBtn').click();
 }
 await page.locator('.dock-tabs [data-panel=bank]').click();await page.locator('#bankAmount').focus();const layout=await page.locator('#app').getAttribute('data-layout');
 await page.setViewportSize({width:viewport.width,height:Math.max(220,Math.floor(viewport.height*.48))});
 await expect(page.locator('#app')).toHaveAttribute('data-keyboard','true');await expect(page.locator('#app')).toHaveAttribute('data-layout',layout);
 await reachable(page.locator('#bankAmount'));await page.locator('#bankAmount').fill('200');await reachable(page.locator('.bank-confirm'));await page.locator('.bank-confirm').click();
 await expect.poll(async()=>(await state(page)).players[0].deposit).toBe(200);
 await page.setViewportSize(viewport);await close(page);await reachable(page.locator('#actionBtn'));expect(errors).toEqual([]);
});
