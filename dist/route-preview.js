// @ts-check
import { mapInfo } from './maps.js';
/** Geometric saving to the known merge; actual stops and blocks remain in Game.preview.
 * @param {import('./engine.js').Game} g @param {number} first */
export function routeSaving(g, first) {
  const branch = mapInfo(g.s)?.branches.find((b) => b.from === g.player.pos);
  if (!branch || !g.routes(branch.from).includes(first)) return 0;
  const main = g.tiles[branch.from].next[0];
  if (first === main) return 0;
  const distance = (start) => {
    const queue = [[start, 0]],
      seen = new Set([branch.from]);
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      const [id, steps] = item;
      if (id === branch.merge) return steps;
      if (seen.has(id)) continue;
      seen.add(id);
      for (const next of g.routes(id)) queue.push([next, steps + 1]);
    }
    return null;
  };
  const a = distance(main),
    b = distance(first);
  return a === null || b === null ? 0 : Math.max(0, a - b);
}
