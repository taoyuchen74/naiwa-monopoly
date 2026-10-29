import {test,expect} from '@playwright/test';
import {randomUUID} from 'node:crypto';
import {Game} from '../dist/engine.js';
import {SAVE_KEY,slotKey} from '../dist/save-repository.js';
import {cloudBackupKey,CLOUD_LINKS_KEY} from '../dist/cloud-sync.js';
const password='test-only-password-123';
const state=round=>({...Game.create({seed:53,character:'naicha',playerCount:3,talents:false}).s,round,savedAt:1767139200000});
const summary=page=>page.locator('#status');
async function seed(page,round=3){await page.addInitScript(({key,save})=>{localStorage.setItem(key,JSON.stringify(save));localStorage.setItem('naiwa-monopoly-preferences-v1',JSON.stringify({quality:'low',speed:3,sound:false,music:false,voice:false}));const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return /webgl/i.test(type)?null:get.call(this,type,...args);};},{key:SAVE_KEY,save:state(round)});}
async function boot(page,round=3){await seed(page,round);await page.goto('/cloud.html');await expect(summary(page)).toContainText('游客');}
async function auth(page,name,register=true){await page.locator('#username').fill(name);await page.locator('#password').fill(password);await page.getByRole('button',{name:register?'注册并登录':'登录',exact:true}).click();await expect(page.locator('#accountName')).toContainText(name);}
async function list(page){const r=await page.request.get('/api/cloud/saves');expect(r.ok()).toBeTruthy();return (await r.json()).items;}
async function upload(page,id=null){await page.locator('#target').selectOption(id||'');await page.locator('#upload').click();await expect(page.locator('#confirm')).toBeVisible();}
async function newUpload(page){await upload(page);await page.getByRole('button',{name:'确认上传新副本',exact:true}).click();await expect(summary(page)).toContainText('云端已保存');return (await list(page))[0];}
async function edit(page,round,slot='auto'){await page.evaluate(({key,save})=>localStorage.setItem(key,JSON.stringify(save)),{key:slotKey(slot),save:state(round)});}
async function download(page,id){await page.locator('[data-cloud-id="'+id+'"]').getByRole('button',{name:'下载到手动槽',exact:true}).click();await page.getByRole('button',{name:'保留旧副本并下载',exact:true}).click();await expect(summary(page)).toContainText('已下载到手动槽 1');}
async function twoDevices(page,browser){
 const name='u_'+randomUUID().slice(0,12).replaceAll('-','');await boot(page,3);await auth(page,name);expect(await list(page)).toEqual([]);const cloud=await newUpload(page);
 const context=await browser.newContext({viewport:page.viewportSize(),locale:'zh-CN',serviceWorkers:'block',reducedMotion:'reduce'}),other=await context.newPage();
 await boot(other,2);await auth(other,name,false);await download(other,cloud.id);return {context,other,cloud,name};
}
test('guest binding is optional; two independent devices upload, download and actually continue a game',async({page,browser})=>{
 const {context,other,cloud}=await twoDevices(page,browser);
 try{
  expect((await list(other))[0].summary.round).toBe(3);
  await other.getByRole('link',{name:'返回单机'}).click();await expect(other.locator('#loadingScreen')).toBeHidden();await other.locator('#continueBtn').click();
  await other.locator('#settingsBtn').click();await other.locator('[data-panel=saves][data-act=panel]').click();await other.locator('[data-save-slot=manual1] [data-act=slotLoad]').click();await other.locator('[data-act=slotConfirm]').click();
  await expect.poll(()=>other.evaluate(k=>JSON.parse(localStorage.getItem(k)).round,SAVE_KEY)).toBe(3);await expect(other.locator('#actionBtn')).toBeVisible();
  expect((await list(page)).find(x=>x.id===cloud.id).version).toBe(1);
 }finally{await context.close();}
});
for(const choice of ['cancel','copy','local','cloud'])test('offline divergence conflict choice: '+choice,async({page,browser})=>{
 const {context,other,cloud}=await twoDevices(page,browser);
 try{
  await edit(page,9);await upload(page,cloud.id);await page.getByRole('button',{name:'用本机覆盖此云端版本',exact:true}).click();await expect(summary(page)).toContainText('版本 2');
  await context.setOffline(true);await edit(other,7,'manual1');await context.setOffline(false);
  await other.locator('#source').selectOption('manual1');await other.locator('#refresh').click();await upload(other,cloud.id);
  await expect(other.locator('#confirmTitle')).toContainText('冲突');await expect(other.locator('#comparison')).toContainText('第 7 轮');await expect(other.locator('#comparison')).toContainText('第 9 轮');await expect(other.locator('#comparison')).toContainText('本机保存时间');await expect(other.locator('#comparison')).toContainText('服务器保存时间');
  if(choice==='cancel'){await other.getByRole('button',{name:'取消',exact:true}).click();expect((await list(page))[0].version).toBe(2);}
  if(choice==='copy'){await other.getByRole('button',{name:'两者保留：新建云端副本',exact:true}).click();await expect(summary(other)).toContainText('云端已保存');const rows=await list(page);expect(rows).toHaveLength(2);expect(rows.find(x=>x.id===cloud.id).summary.round).toBe(9);expect(rows.find(x=>x.id!==cloud.id).summary.round).toBe(7);}
  if(choice==='local'){await other.getByRole('button',{name:'用本机覆盖此云端版本',exact:true}).click();await expect(summary(other)).toContainText('版本 3');expect((await list(page))[0].summary.round).toBe(7);}
  if(choice==='cloud'){await other.getByRole('button',{name:'使用云端（下载确认）',exact:true}).click();await other.getByRole('button',{name:'保留旧副本并下载',exact:true}).click();await expect(summary(other)).toContainText('已下载');expect(await other.evaluate(k=>JSON.parse(localStorage.getItem(k)).round,slotKey('manual1'))).toBe(9);expect(await other.evaluate(k=>JSON.parse(localStorage.getItem(k)).round,cloudBackupKey('manual1'))).toBe(7);}
 }finally{await context.close();}
});
test('lost response reuses the durable request ID after reload; logout and another account cannot send pending data',async({page})=>{
 await boot(page);const name='u_'+randomUUID().slice(0,8);await auth(page,name);
 let lost=true;const bodies=[];
 await page.route('**/api/cloud/saves/*',async route=>{if(route.request().method()!=='PUT'){await route.continue();return;}bodies.push(route.request().postData());if(lost){lost=false;await route.fetch();await route.abort('failed');}else await route.continue();});
 await upload(page);await page.getByRole('button',{name:'确认上传新副本',exact:true}).click();await expect(summary(page)).toContainText('连接失败');expect(await list(page)).toHaveLength(1);
 await page.reload();await expect(page.locator('#retry')).toBeVisible();
 await page.locator('#logout').click();await page.getByRole('button',{name:'确认退出',exact:true}).click();await expect(page.locator('#auth')).toBeVisible();
 await auth(page,'u_'+randomUUID().slice(0,8));expect(await list(page)).toHaveLength(0);await expect(page.locator('#retry')).toBeHidden();
 await page.locator('#logout').click();await page.getByRole('button',{name:'确认退出',exact:true}).click();await auth(page,name,false);
 await page.locator('#retry').click();await expect(summary(page)).toContainText('已确认原上传结果');expect(bodies).toHaveLength(2);expect(bodies[0]).toBe(bodies[1]);expect(await list(page)).toHaveLength(1);
 expect(await page.evaluate(()=>Object.keys(localStorage).some(k=>/password|token/i.test(k)))).toBe(false);
});
test('corrupt cloud cannot replace local progress; raw recovery download works',async({page})=>{
 await boot(page,7);await auth(page,'corrupt_fixture',false);await expect(page.locator('#cloudList')).toContainText('数据损坏');
 await expect(page.locator('#cloudList').getByRole('button',{name:'下载到手动槽',exact:true})).toBeDisabled();
 const downloading=page.waitForEvent('download');await page.getByRole('button',{name:'下载原始 JSON',exact:true}).click();const d=await downloading;expect(d.suggestedFilename()).toBe('cloud-save.json');
 expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).round,SAVE_KEY)).toBe(7);
});
test('real keyboard stays in confirmation; Escape cancels; stale local confirmation rejected and offline logout is explicit',async({page,context})=>{
 await boot(page);await auth(page,'u_'+randomUUID().slice(0,8));await upload(page);
 await expect(page.getByRole('button',{name:'取消',exact:true})).toBeFocused();
 await page.keyboard.press('Shift+Tab');await expect(page.getByRole('button',{name:'确认上传新副本',exact:true})).toBeFocused();
 await page.keyboard.press('Tab');await expect(page.getByRole('button',{name:'取消',exact:true})).toBeFocused();await page.keyboard.press('Escape');await expect(page.locator('#confirm')).toBeHidden();await expect(page.locator('#upload')).toBeFocused();expect(await list(page)).toHaveLength(0);
 await upload(page);await edit(page,8);await page.getByRole('button',{name:'确认上传新副本',exact:true}).click();await expect(summary(page)).toContainText('本机存档已变化');expect(await list(page)).toHaveLength(0);
 await context.setOffline(true);await page.locator('#logout').click();await page.getByRole('button',{name:'确认退出',exact:true}).click();await expect(summary(page)).toContainText('服务器会话仍可能有效');await expect(page.locator('#account')).toBeVisible();
 await context.setOffline(false);await page.locator('#logout').click();await page.getByRole('button',{name:'确认退出',exact:true}).click();await expect(page.locator('#auth')).toBeVisible();
});
