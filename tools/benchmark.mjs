import { chromium } from '@playwright/test';
import { writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { performanceServer } from './perf-server.mjs';
const root = resolve(import.meta.dirname, '..'),
  output = process.argv[2] || 'artifacts/performance.json',
  samples = Number(process.env.PERF_FRAMES || 30),
  baseline = process.env.PERF_BASELINE,
  forest = process.env.PERF_MAP === 'forest' || process.argv.includes('--forest');
const server = await performanceServer(baseline),
  origin = 'http://127.0.0.1:' + server.address().port;
const result = {
  commit:
    baseline || execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  variant: baseline ? 'reference' : 'working tree',
  map: forest ? 4 : 2,
  samples,
  profiles: [],
};
const browser = await chromium.launch({
  headless: true,
  args: ['--enable-gpu', '--enable-unsafe-swiftshader'],
});
try {
  for (const profile of [
    { name: 'desktop', viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1, cpu: 1 },
    {
      name: 'mobile',
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      cpu: 4,
    },
  ]) {
    console.log('Measuring ' + profile.name);
    const context = await browser.newContext({ ...profile, serviceWorkers: 'block' }),
      page = await context.newPage(),
      cdp = await context.newCDPSession(page);
    page.setDefaultTimeout(180000);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: profile.cpu });
    await page.goto(origin + '/tools/perf.html' + (forest ? '?forest' : ''), {
      waitUntil: 'commit',
      timeout: 180000,
    });
    await page.waitForFunction(() => window.ready, {}, { timeout: 180000 });
    const data = await page.evaluate(async (samples) => {
      const quantile = (a, p) =>
        [...a].sort((x, y) => x - y)[Math.min(a.length - 1, Math.ceil(a.length * p) - 1)] || 0;
      const summary = (a) => ({ samples: a.length, p50: quantile(a, 0.5), p95: quantile(a, 0.95) });
      const snapshot = () => ({
        calls: view.renderer.info.render.calls,
        triangles: view.renderer.info.render.triangles,
        geometries: view.renderer.info.memory.geometries,
        textures: view.renderer.info.memory.textures,
        programs: view.renderer.info.programs.length,
        ratio: view.renderer.getPixelRatio(),
        shadow: view.sun.shadow.mapSize.x,
        aoSamples: view.highQuality.ao.gtaoMaterial.defines.SAMPLES,
        cssSize: [view.el.clientWidth, view.el.clientHeight],
        bufferSize: [view.renderer.domElement.width, view.renderer.domElement.height],
        aoSize: [view.highQuality.ao.width, view.highQuality.ao.height],
      });
      const measure = async (mode) => {
        if (mode === 'menu') {
          view.game = null;
          view.setMenu?.(true);
        } else {
          view.setMenu?.(false);
          view.sync(game);
          view.reduced = mode === 'static';
          view.fx.clear();
        }
        await new Promise((r) => setTimeout(r, 1200));
        const frames = [],
          cpu = [],
          original = view.drawFrame;
        let last;
        view.drawFrame = function () {
          const now = performance.now();
          if (last) frames.push(now - last);
          last = now;
          const start = performance.now();
          const r = original.call(this);
          cpu.push(performance.now() - start);
          return r;
        };
        if (mode === 'active') {
          const until = performance.now() + 120000;
          while (cpu.length < samples + 2 && performance.now() < until)
            await new Promise((r) => setTimeout(r, 50));
        } else await new Promise((r) => setTimeout(r, 2500));
        view.drawFrame = original;
        return {
          intervalMs: summary(frames.slice(2)),
          drawCpuMs: summary(cpu.slice(2)),
          renders: cpu.length,
          resources: snapshot(),
        };
      };
      const gl = view.renderer.getContext(),
        debug = gl.getExtension('WEBGL_debug_renderer_info'),
        gpu = debug ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
      const active = await measure('active'),
        menu = await measure('menu'),
        staticScene = await measure('static');
      cancelAnimationFrame(view.raf);
      view.paused = true;
      const times = [],
        outputs = [],
        previewCalls = [];
      for (let k = 0; k < 72; k++) {
        const g = Game.restore(structuredClone(fixtures[k % fixtures.length]));
        let calls = 0;
        const original = g.preview;
        if (k < 6)
          g.preview = function (...args) {
            calls++;
            return original.apply(this, args);
          };
        const start = performance.now();
        g.ai();
        const elapsed = performance.now() - start;
        if (k >= 12) times.push(elapsed);
        if (k < 6) {
          outputs.push(g.s);
          previewCalls.push(calls);
        }
      }
      const cycles = [];
      for (let k = 0; k < 3; k++) {
        view.setQuality('low');
        view.renderStill();
        view.setQuality('auto');
        view.renderStill();
        cycles.push(snapshot());
      }
      const disposal =
        typeof view.dispose === 'function'
          ? (view.dispose(),
            {
              disposed: view.disposed,
              raf: view.raf,
              canvasConnected: view.renderer.domElement.isConnected,
            })
          : null;
      return {
        gpu,
        active,
        menu,
        staticScene,
        aiMs: summary(times),
        previewCalls,
        outputs,
        cycles,
        disposal,
      };
    }, samples);
    result.profiles.push({
      name: profile.name,
      viewport: profile.viewport,
      dpr: profile.deviceScaleFactor,
      cpuThrottle: profile.cpu,
      ...data,
    });
    await mkdir(resolve(root, output, '..'), { recursive: true });
    await writeFile(resolve(root, output), JSON.stringify(result, null, 2));
    await context.close();
    console.log(
      profile.name +
        ': ' +
        JSON.stringify({
          frame: data.active.intervalMs,
          ai: data.aiMs,
          resources: data.active.resources,
        }),
    );
  }
} finally {
  await browser.close();
  server.close();
}
await mkdir(resolve(root, output, '..'), { recursive: true });
await writeFile(resolve(root, output), JSON.stringify(result, null, 2));
