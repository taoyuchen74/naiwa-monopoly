import { test, expect } from '@playwright/test';
import { performanceServer } from '../tools/perf-server.mjs';
let server, origin;
test.beforeAll(async () => {
  server = await performanceServer(process.env.RENDER_BASELINE);
  origin = 'http://127.0.0.1:' + server.address().port;
});
test.afterAll(async () => {
  await new Promise((r) => server.close(r));
});
async function boot(page, reduced = false) {
  await page.emulateMedia({ reducedMotion: reduced ? 'reduce' : 'no-preference' });
  await page.goto(origin + '/tools/perf.html?low', { waitUntil: 'commit' });
  await page.waitForFunction(() => window.ready);
  await page.evaluate(() => {
    view.frames = 0;
    const draw = view.drawFrame;
    view.drawFrame = function () {
      this.frames++;
      return draw.call(this);
    };
  });
  await page.waitForTimeout(500);
}
const frames = (page) => page.evaluate(() => view.frames);
test('ordinary idle game sleeps without reduced-motion and wakes for movement', async ({
  page,
}) => {
  await boot(page, false);
  await settled(page);
  const n = await frames(page);
  await page.evaluate(() => {
    game.player.pos = 1;
    view.sync(game);
    view.invalidate();
  });
  await expect.poll(() => frames(page)).toBeGreaterThan(n);
  await settled(page);
});
async function settled(page) {
  await expect.poll(() => page.evaluate(() => view.raf === null)).toBe(true);
  const n = await frames(page);
  await page.waitForTimeout(350);
  expect(await frames(page)).toBe(n);
}

test('menu and motionless reduced scene sleep, while wheel, movement and resize invalidate the frame', async ({
  page,
}) => {
  await boot(page, true);
  await settled(page);
  const before = await frames(page);
  await page.mouse.move(180, 180);
  await page.mouse.wheel(0, -100);
  await expect.poll(() => frames(page)).toBeGreaterThan(before);
  await settled(page);
  const state = await page.evaluate(() => {
    game.player.pos = 1;
    view.sync(game);
    return JSON.stringify(game.s);
  });
  await expect.poll(() => page.evaluate(() => view.isMoving())).toBe(false);
  await settled(page);
  expect(await page.evaluate(() => JSON.stringify(game.s))).toBe(state);
  await page.evaluate(() => view.setMenu(true));
  await settled(page);
  const size = page.viewportSize();
  const n = await frames(page);
  await page.setViewportSize({ width: size.width - 10, height: size.height - 10 });
  await expect.poll(() => frames(page)).toBeGreaterThan(n);
  await settled(page);
  const resumedFrames = await frames(page);
  await page.evaluate(() => {
    view.setMenu(false);
    view.reduced = false;
    view.invalidate();
  });
  await expect.poll(() => frames(page)).toBeGreaterThan(resumedFrames);
  await settled(page);
});

test('pause and hidden visibility signal stop RAF and clocks; return resumes without changing game state', async ({
  page,
}) => {
  await boot(page);
  await page.evaluate(() => (view.paused = true));
  await settled(page);
  const before = await page.evaluate(() => ({
    state: JSON.stringify(game.s),
    time: view.time,
    frames: view.frames,
  }));
  await page.evaluate(() => {
    view.paused = false;
    window.testHidden = true;
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => window.testHidden });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  // Headless Chromium keeps all tabs visible: inject only the visibility signal,
  // then exercise the real application listener, scheduler and WebGL renderer.
  await settled(page);
  expect(await page.evaluate(() => view.time)).toBe(before.time);
  await page.evaluate(() => {
    window.testHidden = false;
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect.poll(() => frames(page)).toBeGreaterThan(before.frames);
  await settled(page);
  expect(await page.evaluate(() => JSON.stringify(game.s))).toBe(before.state);
});

test('quality switching and real WebGL context recovery retain bounded resources and dispose cleanly', async ({
  page,
}, info) => {
  await boot(page, true);
  const result = await page.evaluate(async () => {
    const sample = () => ({
      g: view.renderer.info.memory.geometries,
      t: view.renderer.info.memory.textures,
      p: view.renderer.info.programs.length,
    });
    const resources = [];
    for (let i = 0; i < 5; i++) {
      view.setQuality('auto');
      view.renderStill();
      view.setQuality('low');
      view.renderStill();
      resources.push(sample());
    }
    view.setQuality('auto');
    view.renderStill();
    return {
      resources,
      profile: view.profile,
      ao: [view.highQuality.ao.width, view.highQuality.ao.height],
      size: [view.el.clientWidth, view.el.clientHeight],
      state: JSON.stringify(game.s),
    };
  });
  expect(result.resources.slice(2)).toEqual(Array(3).fill(result.resources[2]));
  expect(result.profile.name).toBe(info.project.name);
  expect(result.profile.ratio).toBe(info.project.name === 'mobile' ? 1.25 : 1);
  expect(result.ao).toEqual(
    result.size.map((n) =>
      Math.max(1, Math.round(n * result.profile.ratio * result.profile.aoScale)),
    ),
  );
  const resources = [];
  for (let i = 0; i < 3; i++) {
    await page.evaluate(() => {
      window.lossExtension = view.renderer.getContext().getExtension('WEBGL_lose_context');
      lossExtension.loseContext();
    });
    await expect.poll(() => page.evaluate(() => view.contextLost)).toBe(true);
    await page.evaluate(() => lossExtension.restoreContext());
    await expect.poll(() => page.evaluate(() => view.contextLost)).toBe(false);
    resources.push(
      await page.evaluate(() => {
        view.renderStill();
        return {
          g: view.renderer.info.memory.geometries,
          t: view.renderer.info.memory.textures,
          p: view.renderer.info.programs.length,
        };
      }),
    );
  }
  expect(resources[2]).toEqual(resources[1]);
  expect(await page.evaluate(() => JSON.stringify(game.s))).toBe(result.state);
  await page.evaluate(() => {
    view.dispose();
    view.dispose();
  });
  expect(
    await page.evaluate(() => ({
      disposed: view.disposed,
      raf: view.raf,
      aborted: view.events.signal.aborted,
      canvas: view.renderer.domElement.isConnected,
    })),
  ).toEqual({ disposed: true, raf: null, aborted: true, canvas: false });
  await expect
    .poll(() => page.evaluate(() => view.renderer.getContext().isContextLost()))
    .toBe(true);
});
