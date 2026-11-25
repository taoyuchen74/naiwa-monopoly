import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import { performanceServer } from './perf-server.mjs';

const reference = process.env.PERF_BASELINE;
const seconds = Number(process.env.PERF_SECONDS || 6);
assert.ok(Number.isFinite(seconds) && seconds >= 3 && seconds <= 90);
const server = await performanceServer(reference);
const browser = await chromium.launch({
  args: ['--enable-gpu', '--enable-unsafe-swiftshader'],
});
const results = [];
try {
  for (const mapVersion of [2, 1, 4]) {
    const page = await browser.newPage({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 1,
    });
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('http://127.0.0.1:' + server.address().port + '/tools/perf.html');
    await page.waitForFunction(() => window.ready);
    const report = await page.evaluate(
      async ({ mapVersion, seconds }) => {
        const { Game } = await import('/dist/engine.js');
        const { normalizeVideo } = await import('/dist/video-settings.js');
        const game = Game.create({
          mapVersion,
          seed: 17,
          playerCount: 6,
          randomStart: false,
          talents: false,
        });
        game.tiles
          .filter((t) => t.kind === 'property')
          .forEach((tile, index) => {
            game.s.ownership[tile.id] = { player: index % 6, level: 5, buildingType: 'residence' };
          });
        for (const [index, actor] of game.s.players.entries()) actor.pos = index * 6;
        const view = window.view;
        view.setVideo(
          normalizeVideo({ preset: 'auto', overrides: { adaptive: false, shadows: 'soft' } }),
        );
        view.sync(game);
        view.home();
        view.needsAnimation = () => true;
        view.invalidate();
        const gl = view.renderer.getContext(),
          debug = gl.getExtension('WEBGL_debug_renderer_info');
        const renderer = debug
          ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL)
          : gl.getParameter(gl.RENDERER);
        const rounded = (value) => Number(value.toFixed(1));
        const measure = async (moving) => {
          let start,
            raf,
            last,
            steps = 0;
          let calls = 0,
            triangles = 0;
          const times = [];
          const draw = view.drawFrame;
          view.drawFrame = function () {
            draw.call(this);
            const time = performance.now();
            if (last !== undefined) times.push(time - last);
            last = time;
            calls += this.renderer.info.render.calls;
            triangles += this.renderer.info.render.triangles;
          };
          const move = (stamp) => {
            start ??= stamp;
            const elapsed = stamp - start;
            view.offset.x = 3 * Math.sin(elapsed / 1550);
            view.offset.z = 2 * Math.cos(elapsed / 1700);
            view.updateCamera();
            if (moving && Math.floor(elapsed / 430) > steps) {
              steps++;
              game.player.pos = game.tiles[game.player.pos].next[0];
              view.sync(game);
            }
            raf = requestAnimationFrame(move);
          };
          raf = requestAnimationFrame(move);
          await new Promise((done) => setTimeout(done, seconds * 1000));
          cancelAnimationFrame(raf);
          view.drawFrame = draw;
          if (times.length < 3) throw new Error('Too few WebGL frames to measure');
          const mean = times.reduce((a, b) => a + b, 0) / times.length;
          const ordered = times.sort((a, b) => a - b);
          return {
            frames: times.length + 1,
            fps: rounded(1000 / mean),
            p95ms: rounded(ordered[Math.floor((ordered.length - 1) * 0.95)]),
            meanCalls: rounded(calls / (times.length + 1)),
            meanTriangles: rounded(triangles / (times.length + 1)),
          };
        };
        await new Promise((done) => setTimeout(done, 1400));
        const camera = await measure(false),
          movement = await measure(true);
        assertNoLoss();
        function assertNoLoss() {
          if (view.contextLost || view.renderFailed)
            throw new Error('WebGL failed during measurement');
        }
        view.dispose();
        return { mapVersion, renderer, camera, movement };
      },
      { mapVersion, seconds },
    );
    assert.deepEqual(errors, []);
    results.push(report);
    console.log(JSON.stringify(report));
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
await mkdir('artifacts', { recursive: true });
await writeFile(
  process.argv[2] || 'artifacts/board-animation-performance.json',
  JSON.stringify({ reference: reference || 'working tree', seconds, results }, null, 2),
);
