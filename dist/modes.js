// @ts-check
import {CARDS} from './content.js';
import {ROUND_OPTIONS,RULES} from './rules-config.js';
export const MODE_NAMES={standard:'经典旅行',short:'短局模式',business:'经营挑战',daily:'每日固定种子挑战'};
export const localDate=(now=new Date())=>`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
export function dailySeed(date){if(!validDate(date))throw new RangeError('Invalid local date');let h=2166136261;for(const c of 'naiwa-daily-v1:'+date)h=Math.imul(h^c.charCodeAt(0),16777619);return(h>>>0)||1;}
function validDate(s){if(typeof s!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T12:00:00Z');return Number.isFinite(+d)&&d.toISOString().slice(0,10)===s;}
/** Resolved config is saved, never recalculated from the wall clock when restoring.
 * @param {{id?:string,rounds?:number,cash?:number,tickets?:number,date?:string}} [options]
 * @returns {import('./domain.js').ModeConfig}
 */
export function modeConfig({id='standard',rounds=50,cash=3200,tickets=60,date=localDate()}={}){
 if(!Object.hasOwn(MODE_NAMES,id))throw new RangeError('Unknown mode');
 const config=/** @type {import('./domain.js').ModeConfig} */({configVersion:1,id,rounds:ROUND_OPTIONS.includes(rounds)?rounds:50,speed:1,initial:{cash,tickets,loan:0,propertiesPerPlayer:0,buildingLevel:0},allowedCards:Object.keys(CARDS),goal:{type:'ranking',target:0},dailyDate:null,fixedSeed:null});
 if(id!=='standard'){config.rounds=id==='daily'?30:20;config.speed=2;config.initial.cash=3200;config.initial.tickets=60;}
 if(id==='business'){config.initial.loan=800;config.initial.propertiesPerPlayer=2;config.initial.buildingLevel=1;config.goal={type:'netWorth',target:5000};config.allowedCards=config.allowedCards.filter(k=>!['steal','demolish','swap'].includes(k));}
 if(id==='daily'){config.dailyDate=date;config.fixedSeed=dailySeed(date);}
 return config;
}
/** Validate a data-only custom configuration; presets are conveniences, not another rules engine.
 * @param {unknown} raw @returns {raw is import('./domain.js').ModeConfig}
 */
export function validMode(raw){
 const m=/** @type {import('./domain.js').ModeConfig} */(raw);if(!m||m.configVersion!==1||!Object.hasOwn(MODE_NAMES,m.id)||!ROUND_OPTIONS.includes(m.rounds)||![1,2].includes(m.speed))return false;
 const a=m.initial;if(!a||!Number.isSafeInteger(a.cash)||a.cash<0||a.cash>100000||!Number.isSafeInteger(a.tickets)||a.tickets<0||a.tickets>RULES.couponCap||!Number.isSafeInteger(a.loan)||a.loan<0||a.loan>RULES.loanLimit||!Number.isInteger(a.propertiesPerPlayer)||a.propertiesPerPlayer<0||a.propertiesPerPlayer>2||!Number.isInteger(a.buildingLevel)||a.buildingLevel<0||a.buildingLevel>5)return false;
 if(!Array.isArray(m.allowedCards)||!m.allowedCards.length||new Set(m.allowedCards).size!==m.allowedCards.length||m.allowedCards.some(k=>!Object.hasOwn(CARDS,k)))return false;
 if(!m.goal||!['ranking','netWorth'].includes(m.goal.type)||!Number.isSafeInteger(m.goal.target)||(m.goal.type==='netWorth'?m.goal.target<=0||m.goal.target>1000000:m.goal.target!==0))return false;
 return m.id==='daily'?validDate(m.dailyDate)&&m.fixedSeed===dailySeed(m.dailyDate):m.dailyDate===null&&m.fixedSeed===null;
}
/** @param {import('./engine.js').Game} g */
export function applyMode(g){const m=g.s.mode;g.s.maxRounds=m.rounds;g.s.options.speed=m.speed;for(const p of g.s.players){p.money=m.initial.cash;p.tickets=m.initial.tickets;p.loan=m.initial.loan;p.cards=p.cards.filter(k=>m.allowedCards.includes(k));}
 if(m.id!=='standard')g.s.logs[0].text=`${MODE_NAMES[m.id]}开始：每席 ${m.initial.cash} 奶币、${m.initial.loan} 贷款、${m.initial.propertiesPerPlayer} 块地产。`;
 const lots=g.tiles.filter(t=>t.kind==='property');for(let n=0;n<m.initial.propertiesPerPlayer;n++)for(const p of g.s.players){const t=lots[n*g.s.players.length+p.id];g.s.ownership[t.id]={player:p.id,level:m.initial.buildingLevel,buildingType:'residence'};}
}
/** @param {import('./engine.js').Game} g */
export function modeProgress(g){const m=g.s.mode;return g.s.players.map(p=>{const value=g.worth(p),met=p.alive&&value>=m.goal.target,finished=g.s.phase==='finished';return {playerId:p.id,value,target:m.goal.target,success:finished&&met,reason:!p.alive?'已破产，未满足存活条件':!finished?'尚未结算':met?'已达到净资产目标':g.s.round<m.rounds?'对局提前结束，净资产未达目标':'轮数已用尽，净资产未达目标'};});}
export function modeDescription(m){return `${MODE_NAMES[m.id]} · ${m.rounds} 轮${m.goal.type==='netWorth'?` · 每席存活且净资产达到 ${m.goal.target.toLocaleString('zh-CN')}`:' · 存活优先，按净资产排名'}${m.id==='daily'?` · ${m.dailyDate} · 种子 ${m.fixedSeed}（本地日期，无防作弊能力）`:''}`;}
