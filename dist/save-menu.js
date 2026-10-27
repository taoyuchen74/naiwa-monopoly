import {CHARACTERS} from './content.js';
import {MAPS} from './maps.js';
import {portrait} from './portraits.js';

export function exportableState(game,started,saved){return started?game?.s||null:saved?.s||null;}
export function archiveSummary(saved){const s=saved.s,time=s.savedAt;return `第 ${s.round} / ${s.maxRounds} 轮 · ${s.players.length} 人 · 最近保存时间：${typeof time==='number'&&Number.isFinite(time)&&time>0&&time<=8640000000000000?new Date(time).toLocaleString('zh-CN',{hour12:false}):'未知（旧存档）'}`;}
export function resumeInfo(saved){
 if(!saved)return null;const s=saved.s,p=s.players[0],c=CHARACTERS.find(c=>c.id===p.character);
 return {character:c.id,name:c.name,action:s.phase==='finished'?'查看排名':p.alive?'继续':'继续观战',map:MAPS[s.mapVersion].name,round:s.round,maxRounds:s.maxRounds,players:s.players.length};
}
export function resumeCard(saved){const d=resumeInfo(saved);return d?`<span class="resume-face">${portrait(d.character)}</span><span class="resume-copy"><strong>${d.action} · ${d.name}</strong><small>${d.map} · ${d.round}/${d.maxRounds}轮 · ${d.players}人</small></span><span class="resume-arrow" aria-hidden="true">↗</span>`:'继续上次的旅行';}
