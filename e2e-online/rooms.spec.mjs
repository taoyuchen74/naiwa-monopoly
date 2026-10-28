import {test,expect} from '@playwright/test';
import {Game,SAVE_KEY} from '../dist/engine.js';

async function makePair(browser,testInfo,nameB='奶蛙乙'){
 const use={viewport:testInfo.project.use.viewport,isMobile:true,hasTouch:true,locale:'zh-CN',serviceWorkers:'block',reducedMotion:'reduce'};
 const contexts=await Promise.all([browser.newContext(use),browser.newContext(use)]),pages=[];
 const forged=Game.create({seed:1}).s;forged.players[0].money=999999999;
 for(const context of contexts){
  await context.addInitScript(({key,forged})=>{
   localStorage.setItem(key,JSON.stringify(forged));
   const Native=window.WebSocket;window.net={received:[],sent:[],sockets:[]};
   window.WebSocket=class extends Native{constructor(...args){super(...args);window.net.sockets.push(this);this.addEventListener('message',e=>{try{window.net.received.push(JSON.parse(e.data));}catch{}});}send(data){try{window.net.sent.push(JSON.parse(data));}catch{}return super.send(data);}};
  },{key:SAVE_KEY,forged});
  pages.push(await context.newPage());
 }
 const [a,b]=pages;
 await Promise.all(pages.map(p=>p.goto('http://127.0.0.1:4182/online.html')));
 await expect(a.locator('#createRoom')).toBeEnabled();await expect(b.locator('#joinRoom')).toBeEnabled();
 await a.locator('#onlineName').fill('奶蛙甲');await a.locator('#createRoom').click();await expect(a.locator('#roomTitle')).toContainText(/\d{6}/);
 const code=(await a.locator('#roomTitle').textContent()).match(/\d{6}/)[0];
 await b.locator('#onlineName').fill(nameB);await b.locator('#roomCode').fill(code);await b.locator('#joinRoom').click();await expect(a.locator('.seat')).toHaveCount(2);await expect(b.locator('.seat')).toHaveCount(2);
 return {a,b,contexts,async close(){await Promise.all(contexts.map(c=>c.close()));}};
}
const state=page=>page.evaluate(()=>window.net.received.filter(x=>x.op==='state').at(-1));
async function start(pair){const {a,b}=pair;await a.locator('#readyRoom').click();await expect.poll(async()=> (await state(b)).seats[0].ready).toBe(true);await b.locator('#readyRoom').click();await expect(a.locator('#startRoom')).toBeEnabled();await a.locator('#startRoom').click();await expect(a.locator('#onlineGame')).toBeVisible();await expect(b.locator('#onlineGame')).toBeVisible();}
async function packet(page,changes={}){
 return page.evaluate(changes=>{window.net.beforeError=window.net.received.filter(x=>x.op==='result').length;const s=window.net.received.filter(x=>x.op==='state').at(-1),m={op:'command',roomId:s.roomId,playerId:s.playerId,sequence:s.nextSequence,expectedRevision:s.revision,type:'setDiceCount',payload:{count:1},...changes};window.net.sockets.at(-1).send(JSON.stringify(m));return m;},changes);
}
async function error(page,code){await expect.poll(()=>page.evaluate(code=>{const results=window.net.received.filter(x=>x.op==='result');return results.length>(window.net.beforeError||0)&&results.at(-1).error===code;},code)).toBe(true);await expect(page.locator('#commandStatus')).toHaveAttribute('data-error',code);}
async function reachable(locator){await locator.scrollIntoViewIfNeeded();expect((await locator.boundingBox()).height).toBeGreaterThanOrEqual(44);expect(await locator.evaluate(el=>{const r=el.getBoundingClientRect();return el.contains(document.elementFromPoint(r.left+r.width/2,r.top+r.height/2));})).toBe(true);}

test('two browsers create/join, ready/start and complete a real buy/build/end slice on the server',async({browser},testInfo)=>{
 const pair=await makePair(browser,testInfo);try{await start(pair);const {a,b}=pair;
 expect((await state(a)).self.money).toBe(3200);expect((await state(b)).self.money).toBe(3200);
 expect(await a.evaluate(key=>JSON.parse(localStorage.getItem(key)).players[0].money,SAVE_KEY)).toBe(999999999);
 const controls=(await state(a)).controls.actions,force=controls.find(x=>x.type==='card'&&x.payload.index===0&&x.payload.target===1);
 expect(force).toBeTruthy();await a.getByRole('button',{name:force.label,exact:true}).click();await a.locator('[data-command=roll]').click();
 await expect.poll(async()=> (await state(a)).game.phase).toBe('buy');await expect.poll(async()=> (await state(b)).game.phase).toBe('buy');
 const buy=a.locator('[data-command=buy]').filter({hasText:'按标价'});await reachable(buy);await buy.click();
 await a.locator('[data-command=construct]').first().click();await expect.poll(async()=>Object.values((await state(b)).game.ownership)[0]?.level).toBe(1);
 await reachable(a.locator('[data-command=end]'));await a.locator('[data-command=end]').click();await expect.poll(async()=> (await state(b)).game.current).toBe(1);
 await expect.poll(async()=>{const x=await state(a),y=await state(b);return x.revision===y.revision&&x.stateHash===y.stateHash;}).toBe(true);
 expect((await pair.contexts[0].cookies()).find(c=>c.name==='naiwa-online-session').httpOnly).toBe(true);expect(await a.evaluate(()=>document.cookie.includes('naiwa-online-session'))).toBe(false);
 }finally{await pair.close();}
});

test('duplicate, out-of-order, stale revision, forged identity, cash and local snapshot inputs are rejected by two live clients',async({browser},testInfo)=>{
 const pair=await makePair(browser,testInfo);try{await start(pair);const {a,b}=pair;
 const valid=await packet(a);await expect.poll(async()=> (await state(a)).nextSequence).toBe(valid.sequence+1);const baseline=await state(a);
 await a.evaluate(m=>window.net.sockets.at(-1).send(JSON.stringify(m)),valid);await error(a,'DUPLICATE');
 await packet(a,{sequence:baseline.nextSequence+1});await error(a,'OUT_OF_ORDER');
 await packet(a,{expectedRevision:baseline.revision-1});await error(a,'STALE_REVISION');
 await packet(a,{playerId:1});await error(a,'AUTH_FAILED');
 await packet(b,{playerId:0});await error(b,'AUTH_FAILED');
 await packet(a,{type:'restore',payload:{state:{seed:1,players:[{money:999999}]}}});await error(a,'UNSUPPORTED_COMMAND');
 await packet(a,{type:'roll',payload:{seed:1,money:999999}});await error(a,'INVALID_PAYLOAD');
 await packet(a,{type:'bank',payload:{kind:'borrow',amount:999999}});await error(a,'RULE_REJECTED');
 await packet(a,{type:'buy',payload:{yes:true}});await error(a,'INVALID_PHASE');
 await packet(a,{type:'sell',payload:{id:1}});await error(a,'RULE_REJECTED');
 await packet(a,{type:'trade',payload:{stock:0,qty:-999}});await error(a,'RULE_REJECTED');
 expect((await state(a)).stateHash).toBe(baseline.stateHash);expect((await state(b)).stateHash).toBe(baseline.stateHash);expect((await state(a)).nextSequence).toBe(baseline.nextSequence);
 for(const page of [a,b]){const s=await state(page);expect(s.game.players[1-s.playerId].cards).toBeUndefined();expect(s.game.players[1-s.playerId].stocks).toBeUndefined();const raw=JSON.stringify(s);for(const key of ['"seed"','setupSeed','stockBook','sessionId','"token"','"logs"'])expect(raw).not.toContain(key);}
 }finally{await pair.close();}
});

test('refresh preserves identity and sequence; actual offline reconnect resumes server state and supports reclaim after AI grace',async({browser},testInfo)=>{
 const pair=await makePair(browser,testInfo);try{await start(pair);const {a,b,contexts}=pair,before=await state(b);
 await b.reload();await expect(b.locator('#onlineGame')).toBeVisible();expect((await state(b)).playerId).toBe(1);expect((await state(b)).nextSequence).toBe(before.nextSequence);
 await contexts[1].setOffline(true);await b.evaluate(()=>window.net.sockets.at(-1).close());
 await expect.poll(async()=> (await state(a)).seats[1].ai).toBe(true);await contexts[1].setOffline(false);
 await b.locator('summary').click();await b.locator('#reconnectRoom').click();await expect(b.locator('#connection')).toContainText('已连接');
 await b.locator('#controlRoom').click();await expect.poll(async()=> (await state(a)).seats[1].ai).toBe(false);
 expect((await state(b)).playerId).toBe(1);expect((await state(a)).game.current).toBe(0);
 }finally{await pair.close();}
});

test('server timeout hands the whole turn to AI and cannot be postponed by refresh or an expired roll',async({browser},testInfo)=>{
 const pair=await makePair(browser,testInfo);try{await start(pair);const {a,b}=pair,deadline=(await state(a)).deadline;
 await a.reload();await expect(a.locator('#onlineGame')).toBeVisible();expect((await state(a)).deadline).toBe(deadline);
 await expect.poll(async()=> (await state(b)).seats[0].ai,{timeout:26000}).toBe(true);
 await expect.poll(async()=> (await state(b)).game.current,{timeout:15000}).toBe(1);
 await a.locator('#controlRoom').click();await expect.poll(async()=> (await state(b)).seats[0].ai).toBe(false);await expect(a.locator('#controlRoom')).toHaveText('交给AI托管');await expect(a.locator('#controlRoom')).toBeEnabled();
 await packet(a,{type:'roll',payload:{}});await error(a,'NOT_CURRENT_PLAYER');
 }finally{await pair.close();}
});

test('a static-only endpoint is explicitly unsupported and untrusted player names remain text',async({browser},testInfo)=>{
 const pair=await makePair(browser,testInfo,'<svg/onload=1>');try{const {a}=pair;await expect(a.locator('#seatList')).toContainText('<svg/onload=1>');await expect(a.locator('#seatList svg')).toHaveCount(0);expect(await a.evaluate(()=>typeof window.stolen)).toBe('undefined');const extra=await pair.contexts[0].newPage();for(const status of [404,200]){await extra.unroute('**/api/online/session');await extra.route('**/api/online/session',r=>r.fulfill({status,body:'<html>static host</html>',contentType:'text/html'}));await extra.goto('http://127.0.0.1:4182/online.html');await expect(extra.locator('#connection')).toContainText('静态/离线版仅支持单机');expect(await extra.locator('#onlineGame').isVisible()).toBe(false);}await extra.close();}finally{await pair.close();}
});
