import { openMapTools } from '../e2e/ui-controls.mjs';
import { test, expect } from '@playwright/test';
import { Game, SAVE_KEY } from '../dist/engine.js';
const saved = (page) => page.evaluate((key) => JSON.parse(localStorage.getItem(key)), SAVE_KEY);
async function boot(page, state) {
  await page.clock.setFixedTime(new Date('2026-01-01T00:00:00Z'));
  await page.addInitScript(
    ({ state, key }) => {
      if (!sessionStorage.getItem('hotseat-fixture-ready')) {
        localStorage.clear();
        if (state) localStorage.setItem(key, JSON.stringify(state));
        sessionStorage.setItem('hotseat-fixture-ready', '1');
      }
      localStorage.setItem(
        'naiwa-monopoly-preferences-v1',
        JSON.stringify({ quality: 'low', speed: 2, sound: false, music: false, voice: false }),
      );
      const get = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (type, ...args) {
        return /webgl/i.test(type) ? null : get.call(this, type, ...args);
      };
      Object.defineProperty(window, 'AudioContext', { value: undefined });
      Object.defineProperty(window, 'webkitAudioContext', { value: undefined });
    },
    { state, key: SAVE_KEY },
  );
  await page.goto('/');
  await expect(page.locator('#loadingScreen')).toBeHidden();
}
async function choose(page, selector, value) {
  const select = page.locator(selector),
    label = await select.locator('option[value="' + value + '"]').textContent();
  await select.locator('..').getByRole('combobox').click();
  await page.getByRole('option', { name: label, exact: true }).click();
}
async function accept(page, id) {
  await expect(page.locator('#sheetTitle')).toContainText('请交给玩家 ' + (id + 1));
  await page.locator('[data-act=acceptTurn]').click();
}
const fixture = () => {
  const g = Game.create({
    seed: 17,
    mapVersion: 1,
    talents: false,
    playerCount: 3,
    seatTypes: ['human', 'human', 'ai'],
    opponents: ['naicha', 'naishu'],
  });
  g.s.phase = 'end';
  Object.assign(g.s.players[0], {
    pos: 6,
    money: 4100,
    deposit: 111,
    loan: 222,
    cards: ['ward'],
    stocks: [3, 0, 0, 0],
  });
  g.s.players[0].stockBook[0].cost = 300;
  Object.assign(g.s.players[1], {
    pos: 6,
    money: 5000,
    deposit: 9876,
    loan: 4321,
    cards: ['steal'],
    stocks: [73, 0, 0, 0],
    skip: 1,
  });
  g.s.players[1].stockBook[0].cost = 7300;
  g.s.logs.unshift(
    { round: 1, text: '奶茶获得「奶鼠抢地卡」。' },
    { round: 1, text: '奶茶买入73股「奶茶实业」。' },
  );
  return g.s;
};

test('setup independently configures every seat type, character and difficulty', async ({
  page,
}) => {
  await boot(page);
  await choose(page, '#playerCountSelect', '3');
  await page.locator('#advancedBtn').click();
  await choose(page, '[data-setup-primary]', 'naicha');
  await choose(page, '[data-setup-primary-level]', 'hard');
  await choose(page, '[data-setup-type="1"]', 'human');
  await choose(page, '[data-setup-seat="0"]', 'naiwa');
  await choose(page, '[data-setup-level="0"]', 'easy');
  await choose(page, '[data-setup-seat="1"]', 'naishu');
  await choose(page, '[data-setup-level="1"]', 'hard');
  await choose(page, '#setupInitiative', 'human');
  await page.locator('[data-act=applyAdvanced]').click();
  await page.locator('#startBtn').click();
  await expect(page.locator('[data-act=acceptTurn]')).toBeVisible();
  const s = await saved(page);
  expect(s.players.map((p) => p.human)).toEqual([true, true, false]);
  expect(s.players.map((p) => p.character)).toEqual(['naicha', 'naiwa', 'naishu']);
  expect(s.players.map((p) => p.difficulty)).toEqual(['hard', 'easy', 'hard']);
  expect(s.handoff).toEqual({ playerId: 0 });
});

test('handoff traps keyboard, clears private DOM and gives the next human only their own accounts', async ({
  page,
}) => {
  await boot(page, fixture());
  await page.locator('#continueBtn').click();
  await expect(page.locator('[data-act=acceptTurn]')).toBeVisible();
  await expect(page.locator('#collapseSheet')).toBeHidden();
  await expect(page.locator('#closeSheet')).toBeHidden();
  await expect(page.locator('#actionBtn')).toBeDisabled();
  expect(await page.locator('#sheetBody').textContent()).not.toContain('奶鼠抢地卡');
  await expect(page.locator('#sheetBody input')).toHaveCount(0);
  const pending = JSON.stringify(await saved(page));
  for (const key of ['Tab', 'Shift+Tab', 'Escape'])
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press(key);
      expect(
        await page.evaluate(() =>
          document.querySelector('#sheet').contains(document.activeElement),
        ),
      ).toBe(true);
    }
  expect(JSON.stringify(await saved(page))).toBe(pending);
  await accept(page, 0);
  await page.locator('.dock-tabs [data-panel=cards]').click();
  await expect(page.locator('#sheetBody')).toContainText('奶伴护盾卡');
  expect(await page.locator('#sheetBody').textContent()).not.toContain('奶鼠抢地卡');
  await page.keyboard.press('Escape');
  await page.locator('.dock-tabs [data-panel=stocks]').click();
  expect(await page.locator('.stock-metrics').first().textContent()).not.toContain('73');
  await page.keyboard.press('Escape');
  if (await page.locator('#playersToggle').isVisible())
    await page.locator('#playersToggle').click();
  await page.locator('#players [data-player-id="1"]').click();
  await expect(page.locator('.profile-stock')).toHaveCount(0);
  expect(await page.locator('#sheetBody').textContent()).not.toContain('9,876');
  await page.keyboard.press('Escape');
  if (await page.locator('#playersToggle').isVisible())
    await page.locator('#playersToggle').click();
  await page.locator('#actionBtn').click();
  await expect(page.locator('#sheetTitle')).toContainText('请交给玩家 2');
  expect(await page.locator('#sheetBody').textContent()).not.toContain('奶伴护盾卡');
  await expect(page.locator('.stock-card')).toHaveCount(0);
  await expect(page.locator('#bankAmount')).toHaveCount(0);
  expect(await page.locator('#logs').textContent()).not.toContain('73股');
  await accept(page, 1);
  await page.locator('.dock-tabs [data-panel=cards]').click();
  await expect(page.locator('#sheetBody')).toContainText('奶鼠抢地卡');
  expect(await page.locator('#sheetBody').textContent()).not.toContain('奶伴护盾卡');
  await page.keyboard.press('Escape');
  await page.locator('.dock-tabs [data-panel=bank]').click();
  await expect(page.locator('.bank-account')).toContainText('9,876');
  await page.locator('#bankAmount').fill('100');
  await page.locator('#bankConfirm').click();
  let s = await saved(page);
  expect(s.players[1].money).toBe(4900);
  expect(s.players[1].deposit).toBe(9976);
  expect(s.players[0].money).toBe(4100);
  await page.keyboard.press('Escape');
  await page.locator('.dock-tabs [data-panel=stocks]').click();
  await page.locator('[data-stock="0"] [data-act=trade][data-sign="1"]').click();
  s = await saved(page);
  expect(s.players[1].stocks[0]).toBe(74);
  expect(s.players[0].stocks[0]).toBe(3);
  await page.keyboard.press('Escape');
  await page.locator('#actionBtn').click();
  await expect(page.locator('#actionBtn')).toContainText('结束');
  await page.locator('#actionBtn').click();
  await openMapTools(page);
  await page.locator('#difficultyBtn').click();
  const ai = await saved(page);
  expect(ai.current).toBe(2);
  await expect(page.locator('.dock-tabs [data-panel=bank]')).toBeDisabled();
  await page.evaluate(() => {
    document
      .querySelector('#sheetBody')
      .insertAdjacentHTML(
        'beforeend',
        '<input id="bankAmount" value="100"><button id="staleBank" data-act="bank" data-kind="deposit">残留银行按钮</button>',
      );
    document.querySelector('#staleBank').click();
  });
  expect(Game.restore(await saved(page)).stateHash()).toBe(Game.restore(ai).stateHash());
});

test('resuming a confirmed debt turn relocks it; refresh preserves pending handoff and the correct payer', async ({
  page,
}) => {
  const state = fixture();
  state.current = 1;
  state.phase = 'debt';
  state.handoff = null;
  state.debt = { amount: 350, to: 0, label: '租金' };
  state.players[1].money = 100;
  state.players[1].deposit = 1000;
  state.players[1].bankAccess = true;
  await boot(page, state);
  await page.locator('#continueBtn').click();
  await expect(page.locator('#sheetTitle')).toContainText('请交给玩家 2');
  expect((await saved(page)).phase).toBe('debt');
  const persisted = await saved(page);
  expect(persisted.handoff).toEqual({ playerId: 1 });
  await page.reload();
  await expect(page.locator('#loadingScreen')).toBeHidden();
  await page.locator('#continueBtn').click();
  await expect(page.locator('#sheetTitle')).toContainText('请交给玩家 2');
  await accept(page, 1);
  await expect(page.locator('#sheetTitle')).toContainText('周转');
  await page.locator('[data-act=panel][data-panel=bank]').click();
  await page.locator('#bankConfirm').click();
  await page.keyboard.press('Escape');
  await page.locator('[data-act=settle]').click();
  const s = await saved(page);
  expect(s.phase).toBe('end');
  expect(s.players[1].money).toBe(0);
  expect(s.players[1].deposit).toBe(750);
  expect(s.players[0].money).toBe(4450);
});

test('all-AI spectator setup advances without a handoff or account controls', async ({ page }) => {
  await boot(page);
  await choose(page, '#playerCountSelect', '2');
  await page.locator('#advancedBtn').click();
  await choose(page, '[data-setup-type="0"]', 'ai');
  await choose(page, '#setupInitiative', 'human');
  await page.locator('[data-act=applyAdvanced]').click();
  await page.locator('#startBtn').click();
  await expect.poll(async () => (await saved(page)).revision).toBeGreaterThan(0);
  const s = await saved(page);
  expect(s.players.every((p) => !p.human)).toBe(true);
  expect(s.handoff).toBeNull();
  await expect(page.locator('[data-act=acceptTurn]')).toHaveCount(0);
  await expect(page.locator('.dock-tabs [data-panel=cards]')).toBeDisabled();
});
