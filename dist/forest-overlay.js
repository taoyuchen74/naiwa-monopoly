import { FOREST_BRANCHES, closedBranches } from './forest-rules.js';
import { mapPoint } from './navigation.js';
export function forestOverlay(game) {
  return closedBranches(game.s)
    .flatMap((index) => {
      const b = FOREST_BRANCHES[index];
      return [
        [b.from, b.path[0]],
        [b.merge, b.path.at(-1)],
      ].map(([from, to]) => {
        const a = mapPoint(game.tiles[from], game.tiles),
          z = mapPoint(game.tiles[to], game.tiles);
        return (
          '<path d="M' +
          a.x +
          ',' +
          a.y +
          'L' +
          z.x +
          ',' +
          z.y +
          '" stroke="#9b493b" stroke-width="5" stroke-dasharray="5 3" data-closed-road="' +
          from +
          '-' +
          to +
          '"><title>' +
          b.name +
          '入口关闭</title></path>'
        );
      });
    })
    .join('');
}
