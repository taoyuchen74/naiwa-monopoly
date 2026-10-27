// @ts-check
/** @typedef {import('./engine.js').Game} Game */
/**
 * One synchronous UI tick. DOM, timers, rendering and audio stay in app.js.
 * @param {Game} game
 * @param {{started:boolean,hidden:boolean,paused:boolean,studio:boolean,panelOpen:boolean,ready:()=>boolean}} gates
 * @returns {{phase:import('./domain.js').Phase,speed:1|2|4}|null}
 */
export function advanceSession(game,gates){
 if(!gates.started||gates.hidden||gates.paused||gates.studio||game.s.phase==='finished'||gates.panelOpen)return null;
 const s=game.s,phase=s.phase,beforeHead=s.logs[0],beforePlayer=s.current;
 if(!gates.ready())return null;
 let changed=false;
 if(!game.player.alive&&phase==='end')changed=game.command('end');
 else if(!game.player.human)changed=game.command('aiTurn');
 else if(phase==='departure')changed=game.command('roll');
 else if(phase==='moving')changed=game.command('step');
 return changed||s.phase!==phase||s.logs[0]!==beforeHead||s.current!==beforePlayer?{phase,speed:s.options.speed}:null;
}
