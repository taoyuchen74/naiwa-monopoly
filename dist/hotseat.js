// @ts-check
/** @param {Pick<import('./domain.js').GameState,'players'>} state */
export const isHotseat=state=>(state.players?.filter(p=>p.human).length??0)>1;
/** @param {import('./engine.js').Game} g @returns {import('./domain.js').Player|null} */
export function accountPlayer(g){
 if(isHotseat(g.s))return g.player.human&&g.player.alive&&!g.s.handoff&&g.s.phase!=='finished'?g.player:null;
 return g.s.players.find(p=>p.human)||null;
}
/** @param {import('./engine.js').Game} g @param {number} id */
export function canInspectPrivate(g,id){
 if(!isHotseat(g.s)&&g.s.players.some(p=>p.human))return true;
 return accountPlayer(g)?.id===id;
}
export const privateNotice=()=>'<p class="panel-note">私有账户仅对已确认接手的当前真人开放。</p>';
/** Relock real UI entry points; pure Game.restore stays deterministic for replay. @param {import('./engine.js').Game} g */
export function lockSession(g){
 return isHotseat(g.s)&&g.player.human&&g.player.alive&&!g.s.handoff&&g.s.phase!=='finished'?g.command('lockTurn'):false;
}
/** Redact imported old logs as well as newly generated messages. @param {import('./domain.js').GameState} state @param {string} text */
export function publicLog(state,text){
 if(!isHotseat(state))return text;
 return text.replace(/获得「[^」]+」/g,'获得一张道具卡').replace(/购买「[^」]+」[^。]*/g,'购买了道具卡')
  .replace(/(买入|卖出)\d+股「[^」]+」/g,'进行了股票交易')
  .replace(/：存款利息[^。]*/g,'：银行利息已结算').replace(/(存入|取出|借入|偿还) \d+ 奶币/g,'办理了银行业务');
}
