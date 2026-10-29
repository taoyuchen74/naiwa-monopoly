import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

// Always pass filenames as argument arrays; never interpolate Git paths into a shell.
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' });
const rawBase = process.env.LINT_BASE;
const base = rawBase && !/^0+$/.test(rawBase) ? rawBase : null;
const formatOnly = process.argv.includes('--format-only');
const split = (text) => text.split('\0').filter(Boolean);
const changed = base
  ? split(git('diff', '--name-only', '--diff-filter=ACMR', '-z', `${base}...HEAD`))
  : [
      ...split(git('diff', '--name-only', '--diff-filter=ACMR', '-z', 'HEAD')),
      ...split(git('ls-files', '--others', '--exclude-standard', '-z')),
    ];
const excluded = /^(node_modules|out|artifacts|coverage|play|dist\/vendor)\//;
const files = [...new Set(changed)].filter((p) => existsSync(p) && !excluded.test(p));
const js = files.filter((p) => /\.[cm]?js$/.test(p));
const formatting = files.filter((p) => /\.(?:[cm]?js|json|ya?ml|md|d\.ts)$/.test(p));
const baseline = new Set(JSON.parse(readFileSync('tools/format-baseline.json', 'utf8')));
// Historic compact sources enter the formatter one deliberate module at a time.
const toFormat = formatting.filter((p) => !baseline.has(p));
const run = (bin, args) => {
  const result = spawnSync(process.execPath, [bin, ...args], { stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
};
if (js.length && !formatOnly) run('node_modules/eslint/bin/eslint.js', ['--max-warnings=0', ...js]);
if (toFormat.length) run('node_modules/prettier/bin/prettier.cjs', ['--check', ...toFormat]);
console.log(
  `Changed-file gate: ${formatOnly ? 0 : js.length} linted, ${toFormat.length} formatted; no full-tree bypass.`,
);
