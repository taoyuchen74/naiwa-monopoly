import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { writeFile, mkdir } from 'node:fs/promises';
import { performanceServer } from './perf-server.mjs';
const server = await performanceServer(),
  browser = await chromium.launch({
    channel: 'chromium',
    args: [
      '--enable-gpu',
      '--enable-unsafe-swiftshader',
      ...(process.env.NAIWA_SOFTWARE_WEBGL === '1' ? ['--use-angle=swiftshader'] : []),
    ],
  }),
  rows = [];
try {
  for (const viewport of [
    { width: 1280, height: 800 },
    { width: 390, height: 844 },
  ]) {
    const page = await browser.newPage({ viewport, reducedMotion: 'reduce' });
    await page.goto(
      'http://127.0.0.1:' + server.address().port + '/tools/forest-preview.html?built',
    );
    await page.waitForFunction(() => window.ready);
    const row = await page.evaluate(async () => {
      const { Game } = await import('../dist/engine.js');
      view.paused = true;
      const snapshot = () => ({
        geometries: view.renderer.info.memory.geometries,
        textures: view.renderer.info.memory.textures,
        programs: view.renderer.info.programs.length,
        calls: view.renderer.info.render.calls,
        triangles: view.renderer.info.render.triangles,
      });
      const cycles = [];
      for (let i = 0; i < 3; i++) {
        for (const mapVersion of [1, 2, 4]) {
          const g = Game.create({ mapVersion, seed: 17, playerCount: 6 });
          view.sync(g);
          view.skipPresentation();
          view.setQuality('auto');
          view.renderStill();
          view.setQuality('low');
          view.renderStill();
        }
        cycles.push(snapshot());
      }
      view.dispose();
      return {
        cycles,
        disposed: view.disposed,
        raf: view.raf,
        canvasConnected: view.renderer.domElement.isConnected,
        sceneChildren: view.scene.children.length,
      };
    });
    assert.deepEqual(
      row.cycles[2],
      row.cycles[1],
      'Repeated map and quality cycles must stabilize',
    );
    assert.equal(row.disposed, true);
    assert.equal(row.raf, null);
    assert.equal(row.canvasConnected, false);
    assert.equal(row.sceneChildren, 0);
    rows.push({ viewport, ...row });
    await page.close();
  }
  await mkdir('artifacts', { recursive: true });
  await writeFile('artifacts/forest-resource-cycles.json', JSON.stringify(rows, null, 2));
  console.log(JSON.stringify(rows));
} finally {
  await browser.close();
  server.close();
}
