# 工程化交付文件全文

配置与脚本的逐字副本，方便集中审阅。实际源文件始终为最终依据；修改源文件后同步此文档。本页不是构建输入，也不需要代码生成。迁移清单和验证边界见 [工程化说明](ENGINEERING.md)。

## tsconfig.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noEmit": true,
    "noImplicitAny": true,
    "strictNullChecks": false,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "lib": ["ES2022", "DOM"],
    "types": [],
    "skipLibCheck": true
  },
  "include": [
    "types/browser-imports.d.ts",
    "types/contracts.js",
    "dist/talents.js",
    "dist/game-types.js",
    "dist/engine.js",
    "dist/content.js",
    "dist/strategy.js",
    "dist/businesses.js"
  ],
  "exclude": ["dist/vendor", "node_modules", "out", "artifacts"]
}
```

## dist/game-types.js

```javascript
/**
 * Shared domain contracts. Type-only imports/JSDoc; never imported at runtime.
 * Numeric IDs are array indexes in validated saves. Legacy input is validated
 * by Game.restore; these contracts describe the normalized, current state.
 * @typedef {'naiwa'|'naichong'|'naishu'|'naigou'|'naidan'|'naicha'} CharacterId
 * @typedef {'easy'|'normal'|'hard'} Difficulty
 * @typedef {'roll'|'departure'|'moving'|'branch'|'buy'|'estate'|'event'|'end'|'debt'|'finished'} Phase
 * @typedef {'residence'|'chain'|'hotel'|'mall'|'gas'|'research'|'park'} BusinessId
 * @typedef {'dice'|'block'|'turn'|'shield'|'steal'|'recover'|'demolish'|'build'|'slow'} CardId
 * @typedef {'steps'|'ahead'|'self'|'enemy'|'enemyBuilt'|'own'} CardTarget
 * @typedef {{name:string,icon:string,price:number,description:string} & (
 *   {target:'steps'}|{target:'ahead'}|{target:'self'}|
 *   {target:'enemy'}|{target:'enemyBuilt'}|{target:'own'})} Card
 * @typedef {{dice:Card & {target:'steps'},block:Card & {target:'ahead'},turn:Card & {target:'self'},shield:Card & {target:'self'},steal:Card & {target:'enemy'},recover:Card & {target:'self'},demolish:Card & {target:'enemyBuilt'},build:Card & {target:'own'},slow:Card & {target:'self'}}} CardTable
 * @typedef {{id:CharacterId,estateColor:string,name:string,subtitle:string,color:string,accent:string,style:string,description:string}} Character
 * @typedef {{id:number,x:number,z:number,kind:string,name:string,description:string,group:number,price:number,next:number[],yaw?:number,lotX?:number,lotZ?:number,facing?:number}} Tile
 * @typedef {{player:number,level:number,buildingType?:BusinessId,researchCard?:CardId,researchProgress?:number}} Ownership
 * @typedef {{cost:number|null,realized:number,unpriced:number}} StockBook
 * @typedef {{stock:number,qty:number,price:number,round:number,profit:number|null}} Trade
 * @typedef {{id:number,character:CharacterId,human:boolean,difficulty:Difficulty,money:number,tickets:number,businessReady:boolean,cardsUsed:number,buildsUsed:number,shopUsed:number,slowTurns:number,buildSite:number|null,bankAccess:boolean,talentReady:boolean,departures:number,deposit:number,loan:number,stocks:number[],stockBook:StockBook[],stockLegacy:boolean,stockTrades:Trade[],cards:CardId[],vehicle:number,diceCount:number,pos:number,history:number[],alive:boolean,skip:number,spirit:string|null,spiritTurns:number,shield:boolean,reverse:boolean,forced:number,aiTradeDone?:boolean,aiBankDone?:boolean,mood?:string}} Player
 * @typedef {{id:number,name:string,short:string,price:number,group:number,history:number[],previous:number,change:number}} Market
 * @typedef {{sound:boolean,speed:number,quality:string,lighting:string,music?:boolean,voice?:boolean,musicVolume?:number,effectsVolume?:number,voiceVolume?:number,track?:string}} Options
 * @typedef {{version:number,rules:number,setupSeed:number,mapVersion:number,difficulty:Difficulty,talents:boolean,firstPlayer:number,seed:number,round:number,maxRounds:number,current:number,phase:Phase,dice:number[],remaining:number,moveTotal:number,moveSteps:number|null,players:Player[],ownership:Record<string,Ownership>,blocks:Record<string,number>,pickups:Record<string,number>,market:Market[],logs:{round:number,text:string}[],notice:{title:string,text:string,mood:string}|null,debt:{amount:number,to:number|null,label:string}|null,options:Options,winner:number|null}} GameState
 * @typedef {{character?:string,rounds?:number,playerCount?:number,randomStart?:boolean,talents?:boolean,mapVersion?:number,difficulty?:string,opponents?:string[],seatLevels?:string[],startingCash?:number,startingTickets?:number,seed?:number}} GameSetup
 * @typedef {{from?:number,first?:number|null,reverse?:boolean,blocks?:Record<string,number>}} PreviewOptions
 * @typedef {{id:number,path:number[],passesStart:boolean,blocked:boolean,points:number,rent:number,owner:number|null,price:number}} Route
 * @typedef {{count:number,value:number,rent?:number}} Move
 * @typedef {{index:number,target?:number,value:number}} CardChoice
 * @typedef {{name:string,max:number,cost:number,architecture:string,text:string}} Business
 */
export {};
```

## eslint.config.mjs

```javascript
export default [
  {
    ignores: [
      'node_modules/**',
      'out/**',
      'artifacts/**',
      'coverage/**',
      'playwright-report/**',
      'test-results/**',
      'dist/vendor/**',
    ],
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    rules: {
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
  // Build/QA tools legitimately print reports; shipped game code may not.
  { files: ['tools/**', 'tests/**', 'e2e/**', '*.config.mjs'], rules: { 'no-console': 'off' } },
];
```

## .prettierrc.json

```json
{
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "all",
  "endOfLine": "lf"
}
```

## .prettierignore

```text
node_modules/
out/
artifacts/
coverage/
play/
playwright-report/
test-results/
dist/vendor/
package-lock.json
```

## .c8rc.json

```json
{
  "all": true,
  "include": ["dist/engine.js", "dist/businesses.js", "dist/portfolio.js", "dist/strategy.js"],
  "reporter": ["text", "json-summary", "lcov"],
  "check-coverage": true,
  "per-file": true,
  "lines": 80,
  "statements": 80,
  "functions": 80,
  "branches": 80
}
```

## .github/workflows/ci.yml

```yaml
name: CI
on:
  pull_request:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
concurrency:
  group: ci-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run typecheck
      - name: Lint changed files (full history, merge-base diff)
        env:
          LINT_BASE: ${{ github.event.pull_request.base.sha || github.event.before || 'HEAD~1' }}
        run: npm run lint
      # c8 runs npm test once, then enforces per-module thresholds.
      - run: npm run test:coverage
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: coverage
          path: coverage/
          if-no-files-found: error
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - run: npm run build:site
      - run: npm run check:size
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: size-report
          path: artifacts/size-report.json
      - uses: actions/upload-artifact@v4
        with:
          name: web-build
          path: out/
          include-hidden-files: true
          if-no-files-found: error
  e2e:
    needs: build
    uses: ./.github/workflows/e2e.yml
    with:
      from-ci: true
```

## .github/workflows/e2e.yml

```yaml
name: Browser paths
on:
  workflow_call:
    inputs:
      from-ci:
        type: boolean
        default: false
  workflow_dispatch:
permissions:
  contents: read
jobs:
  e2e:
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - name: Restore exact build from CI
        if: inputs.from-ci
        uses: actions/download-artifact@v4
        with:
          name: web-build
          path: out/
      - name: Build for standalone manual execution
        if: ${{ !inputs.from-ci }}
        run: npm run build:site
      - run: npx playwright install --with-deps --no-shell chromium
      - run: npm run test:e2e
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: |
            playwright-report/
            test-results/
          retention-days: 7
```

## .github/workflows/slow.yml

```yaml
name: Seed simulation
on:
  schedule:
    - cron: '20 19 * * *'
  pull_request:
    types: [opened, reopened, synchronize, labeled]
  workflow_dispatch:
permissions:
  contents: read
concurrency:
  group: seeds-${{ github.ref }}
  cancel-in-progress: true
jobs:
  simulate-100:
    if: github.event_name != 'pull_request' || contains(github.event.pull_request.labels.*.name, 'run-slow')
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run test:slow
```

## playwright.config.mjs

```javascript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 90000,
  expect: { timeout: 10000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 2 : 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:4173',
    actionTimeout: 15000,
    browserName: 'chromium',
    channel: 'chromium',
    hasTouch: true,
    isMobile: true,
    deviceScaleFactor: 1,
    serviceWorkers: 'block',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH,
      args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
    },
  },
  projects: [
    { name: 'phone-portrait', use: { viewport: { width: 390, height: 844 } } },
    { name: 'phone-landscape', use: { viewport: { width: 844, height: 390 } } },
  ],
  webServer: {
    command: 'npm run serve:ci',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 10000,
  },
});
```

## e2e/helpers.mjs

```javascript
import { expect } from '@playwright/test';

export const SAVE_KEY = 'naiwa-monopoly-v2';
export async function boot(page) {
  // Mock wall time before navigation. Native RAF/timers must keep running for
  // Playwright actionability and real scene animations; rules use an explicit seed.
  const now = new Date('2026-01-01T00:00:00Z');
  await page.clock.setFixedTime(now);
  await page.addInitScript(() => {
    localStorage.setItem(
      'naiwa-monopoly-preferences-v1',
      JSON.stringify({ sound: false, music: false, voice: false, quality: 'low', speed: 2 }),
    );
    localStorage.setItem(
      'naiwa-setup-v1',
      JSON.stringify({ seed: '17', randomStart: false, mapVersion: 2 }),
    );
    // No OS audio or orientation permissions; exercise the game's rotation fallback.
    Object.defineProperty(window, 'AudioContext', { value: undefined, configurable: true });
    Object.defineProperty(window, 'webkitAudioContext', { value: undefined, configurable: true });
    Object.defineProperty(Element.prototype, 'requestFullscreen', {
      configurable: true,
      value: async () => {
        throw new Error('E2E: fullscreen denied');
      },
    });
  });
  await page.goto('/');
  await advanceUntil(page, async () => page.locator('#loadingScreen').isHidden(), 30000);
  await expect(page.locator('#app')).not.toHaveAttribute('inert');
}

// Wait for observable rule/UI state instead of a fixed animation duration.
export async function advanceUntil(_page, predicate, max = 30000) {
  await expect.poll(predicate, { timeout: max, intervals: [50, 100, 250] }).toBe(true);
}
export const state = (page) =>
  page.evaluate((key) => JSON.parse(localStorage.getItem(key)), SAVE_KEY);
export async function start(page, character = 'naiwa') {
  await page.locator(`[data-character="${character}"]`).click();
  await page.locator('#startBtn').click();
  await expect(page.locator('#startScreen')).toBeHidden();
  expect((await state(page)).setupSeed).toBe(17);
  expect((await state(page)).current).toBe(0);
}
```

## e2e/gameplay.spec.mjs

```javascript
import { test, expect } from '@playwright/test';
import { boot, start, state, advanceUntil } from './helpers.mjs';

test('select character → settle dice → buy land → wait for computer', async ({ page }) => {
  await boot(page);
  await start(page, 'naishu');
  const before = await state(page);
  // Seed 17's first roll is asserted, not patched into the engine.
  await page.locator('#actionBtn').click();
  await advanceUntil(page, async () => (await state(page)).phase === 'buy');
  await expect(page.locator('#sheet')).toBeVisible();
  const landed = await state(page);
  expect(landed.dice).toEqual([4]);
  expect(landed.players[0].pos).toBe(4);
  await page.getByRole('button', { name: '买下这块地', exact: true }).click();
  const bought = await state(page);
  expect(bought.phase).toBe('end');
  expect(bought.ownership['4']).toMatchObject({ player: 0, level: 0 });
  expect(bought.players[0].money).toBeLessThan(before.players[0].money);
  // Construction panel is a real blocking decision; close before ending turn.
  if (await page.locator('#sheet').isVisible()) await page.locator('#closeSheet').click();
  await page.locator('#actionBtn').click();
  expect((await state(page)).current).toBe(1);
  await expect(page.locator('#actionBtn')).toHaveText(/等待/);
  await expect(page.locator('#actionBtn')).toBeDisabled();
});
```

## e2e/save-roundtrip.spec.mjs

```javascript
import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { boot, start, state, advanceUntil, SAVE_KEY } from './helpers.mjs';

test('download save → clear storage → import file → continue exact game', async ({ page }) => {
  await boot(page);
  await start(page, 'naicha');
  const original = await state(page);
  await page.locator('#settingsBtn').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: '导出存档', exact: true }).click();
  const download = await downloadPromise;
  const bytes = await readFile(await download.path());
  expect(JSON.parse(bytes.toString())).toEqual(original);
  // Clear after page unload, so the real pagehide autosave cannot repopulate it.
  await page.goto('/build-info.json');
  await page.evaluate((key) => localStorage.removeItem(key), SAVE_KEY);
  await page.goto('/');
  await advanceUntil(page, async () => page.locator('#loadingScreen').isHidden(), 30000);
  await expect(page.locator('#continueBtn')).toBeHidden();
  expect(await state(page)).toBeNull();
  await page.locator('#settingsBtn').click();
  await page
    .locator('#importSave')
    .setInputFiles({ name: 'roundtrip.json', mimeType: 'application/json', buffer: bytes });
  await page.getByRole('button', { name: '确认导入', exact: true }).click();
  await expect(page.locator('#startScreen')).toBeHidden();
  expect(await state(page)).toEqual(original);
  await expect(page.locator('#actionBtn')).toBeEnabled();
  await page.locator('#actionBtn').click();
  await advanceUntil(page, async () => (await state(page)).phase === 'moving');
});
```

## e2e/orientation.spec.mjs

```javascript
import { test, expect } from '@playwright/test';
import { PNG } from './png.mjs';
import { boot, start, state } from './helpers.mjs';

test('portrait ↔ landscape keeps rendered map and dialogs aligned', async ({ page }) => {
  await boot(page);
  await start(page);
  const before = await state(page);
  for (let i = 0; i < 2; i++) {
    await page.locator('#orientationBtn').click();
    await page.waitForFunction(() => {
      const canvas = document.querySelector('#scene canvas');
      const scene = document.querySelector('#scene');
      return canvas && canvas.width === scene.clientWidth && canvas.height === scene.clientHeight;
    });
    const logical = await page.locator('#app').evaluate((el) => [el.clientWidth, el.clientHeight]);
    expect(logical[0] >= logical[1]).toBe(
      i === 0
        ? test.info().project.name.includes('portrait')
        : test.info().project.name.includes('landscape'),
    );
    await expect(page.locator('#scene canvas')).toBeVisible();
    await expect(page.locator('#fallback')).toBeHidden();
    // Pixel variety in the map's central crop catches a blank WebGL framebuffer.
    const shot = await page.screenshot();
    expect(PNG.uniqueCentralColors(shot)).toBeGreaterThan(40);
    await page.locator('#settingsBtn').click();
    const aligned = await page.locator('#sheet').evaluate((el) => {
      const axes = (node) => {
        let m = new DOMMatrix();
        for (; node; node = node.parentElement)
          m = new DOMMatrix(getComputedStyle(node).transform).multiply(m);
        return [m.a, m.b, m.c, m.d];
      };
      const app = document.querySelector('#app');
      const a = axes(app),
        b = axes(el),
        r = el.getBoundingClientRect();
      return (
        b.every((n, k) => Math.abs(n - a[k]) < 1e-5) &&
        r.left >= -1 &&
        r.top >= -1 &&
        r.right <= innerWidth + 1 &&
        r.bottom <= innerHeight + 1
      );
    });
    expect(aligned).toBe(true);
    await page.locator('#closeSheet').click();
  }
  expect(await state(page)).toEqual(before);
});
```

## e2e/png.mjs

```javascript
import pngjs from 'pngjs';

export const PNG = {
  uniqueCentralColors(buffer) {
    const { width, height, data } = pngjs.PNG.sync.read(buffer);
    const colors = new Set();
    for (let y = Math.floor(height * 0.35); y < height * 0.65; y += 3) {
      for (let x = Math.floor(width * 0.35); x < width * 0.65; x += 3) {
        const i = (y * width + x) * 4;
        colors.add(`${data[i] >> 3},${data[i + 1] >> 3},${data[i + 2] >> 3}`);
      }
    }
    return colors.size;
  },
};
```

## tools/check-size.mjs

```javascript
import { readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';

const policy = JSON.parse(await readFile('tools/size-budget.json', 'utf8'));
const info = JSON.parse(await readFile('out/build-info.json', 'utf8'));
const script = info.assets.find((a) => /^assets\/game\./.test(a.file));
if (!script) throw new Error('Missing built game script');
const inputs = { script: `out/${script.file}`, portable: 'artifacts/奶蛙大富翁.html' };
let failed = false;
const measured = {};
for (const [name, path] of Object.entries(inputs)) {
  const bytes = await readFile(path);
  if (!(await stat(path)).size) throw new Error(`Empty artifact: ${path}`);
  measured[name] = { bytes: bytes.length, gzipBytes: gzipSync(bytes).length };
  for (const metric of ['bytes', 'gzipBytes']) {
    const actual = measured[name][metric];
    const { baseline, limit } = policy[name][metric];
    const delta = actual - baseline;
    console.log(
      `${name}.${metric}: ${actual} B; baseline ${baseline}; diff ${delta >= 0 ? '+' : ''}${delta} B (${((delta / baseline) * 100).toFixed(2)}%); limit ${limit} B${actual > limit ? ' — FAIL' : ''}`,
    );
    if (actual > limit) failed = true;
  }
}
await mkdir('artifacts', { recursive: true });
await writeFile(
  'artifacts/size-report.json',
  JSON.stringify({ measured, policy, failed }, null, 2),
);
if (failed) process.exitCode = 1;
```

## tools/size-budget.json

```json
{
  "description": "Bytes, not KiB. Rebaseline only with measured rationale in PR; a growing artifact must not raise its own limit.",
  "script": {
    "bytes": {
      "baseline": 950778,
      "limit": 980000
    },
    "gzipBytes": {
      "baseline": 271469,
      "limit": 280000
    }
  },
  "portable": {
    "bytes": {
      "baseline": 1227045,
      "limit": 1280000
    },
    "gzipBytes": {
      "baseline": 411702,
      "limit": 425000
    }
  }
}
```
