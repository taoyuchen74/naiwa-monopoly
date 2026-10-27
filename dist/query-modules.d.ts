/** Match the existing browser cache query without changing runtime imports. */
declare module '*talents.js?v=16' {
 export const TALENTS:typeof import('./talents.js').TALENTS;
 export function hasTalent(game:import('./engine.js').Game,player:import('./domain.js').Player,id?:import('./domain.js').CharacterId):boolean;
 export function departureTalent(game:import('./engine.js').Game):boolean;
}
