import { CHARACTERS } from './content.js';
import { mapTiles } from './maps.js';

// Presentation adapter only. No Game instance, RNG, command execution or save IO.
// Never fills missing private fields with invented balances or inventories.
export class OnlineView {
  constructor(options) {
    this.options = options;
    this.online = true;
    this.s = null;
  }
  update(snapshot) {
    if (!snapshot.game) {
      this.s = null;
      return;
    }
    const g = snapshot.game;
    this.tiles = mapTiles(g.mapVersion);
    this.s = {
      ...g,
      players: g.players.map((p) => ({ ...p, human: !snapshot.seats[p.id].ai })),
      options: this.options,
    };
  }
  get player() {
    return this.s.players[this.s.current];
  }
  char(player = this.player) {
    return CHARACTERS.find((c) => c.id === player.character);
  }
}
