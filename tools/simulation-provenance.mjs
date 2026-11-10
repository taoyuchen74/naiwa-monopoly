import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { posix } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const sha = (data) => createHash('sha256').update(data).digest('hex');
// Capture the entire local ES-module dependency graph, not a hand-picked file list.
export function ruleDependencies(reference) {
  const files = new Map();
  function visit(path) {
    if (files.has(path)) return;
    const data = readFileSync(new URL('../' + path, import.meta.url), 'utf8').replace(
      /\r\n/g,
      '\n',
    );
    if (reference) {
      const before = execFileSync('git', ['show', reference + ':' + path], {
        encoding: 'utf8',
        cwd: root,
      }).replace(/\r\n/g, '\n');
      if (data !== before) throw Error('Rule dependency drift: ' + path);
    }
    files.set(path, sha(data));
    for (const m of data.matchAll(/(?:from\s*|import\s*)['"](\.\.?\/[^'"]+)['"]/g))
      visit(posix.normalize(posix.join(posix.dirname(path), m[1].split('?')[0])));
  }
  visit('dist/engine.js');
  visit('dist/strategy.js');
  const entries = [...files].sort(([a], [b]) => a.localeCompare(b));
  return {
    reference,
    normalization: 'CRLF to LF only',
    files: Object.fromEntries(entries),
    dependencyHash: sha(JSON.stringify(entries)),
  };
}
