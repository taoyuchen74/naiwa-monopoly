import { CARDS } from '../dist/content.js';

/** Compile-only negative contracts: tsc must reject these mutations.
 * @param {import('../dist/engine.js').Game} game
 */
export function rejectInvalidState(game) {
  // @ts-expect-error unknown phase must not become an accepted string
  game.s.phase = 'teleport';
  // @ts-expect-error money is numeric
  game.player.money = '100';
  // @ts-expect-error ownership needs an owner and a level
  game.s.ownership['4'] = { price: 200 };
  // @ts-expect-error unknown cards are not legal inventory entries
  game.player.cards.push('teleport');
  // @ts-expect-error dice cards target steps, not an enemy
  CARDS.dice.target = 'enemy';
}
