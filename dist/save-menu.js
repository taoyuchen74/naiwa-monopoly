import {MODE_NAMES} from './modes.js';
import {accountPlayer,isHotseat} from './hotseat.js';
import {CHARACTERS} from './content.js';
import {MAPS} from './maps.js';
import {portrait} from './portraits.js';
import {validSaveTime} from './save-schema.js';

export const slotName=id=>id==='auto'?'自动槽':({manual1:'手动槽 1',manual2:'手动槽 2',manual3:'手动槽 3'}[id]||'存档');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function slotSummary(state){const p=state.players[0],c=CHARACTERS.find(c=>c.id===p.character),turn=CHARACTERS.find(c=>c.id===state.players[state.current].character);return {map:MAPS[state.mapVersion].name,round:state.round,players:state.players.length,time:validSaveTime(state.savedAt)?new Date(state.savedAt).toLocaleString('zh-CN',{hour12:false}):'未知（旧存档）',detail:MODE_NAMES[state.mode.id]+' · '+c.name+' · 现金 '+p.money.toLocaleString('zh-CN')+' · 地产 '+Object.values(state.ownership).filter(o=>o.player===0).length+' 块 · '+(state.phase==='finished'?'已结算':state.handoff?'等待换手':turn.name+' · '+({roll:'待掷骰',departure:'出发中',moving:'移动中',branch:'待选路线',buy:'待购地',estate:'待付租',event:'待确认事件',end:'经营中',debt:'待筹款'}[state.phase]))};}
export function saveSlotsPanel(items,canSave){return '<p>3 个手动槽独立保存；自动槽随当前旅行更新。读取会替换当前旅行，可先保存到手动槽。</p><div class="save-slots">'+items.map(item=>{const s=item.state,d=s&&slotSummary(s),invalid=item.status==='future'?'版本较新，无法读取':item.status==='corrupt'?'存档损坏，无法读取':'空槽位';return '<section class="save-slot" data-save-slot="'+item.id+'" aria-labelledby="slot-title-'+item.id+'"><h3 id="slot-title-'+item.id+'">'+slotName(item.id)+'</h3>'+(d?'<div class="save-slot-summary"><span aria-hidden="true">'+portrait(s.players[0].character)+'</span><div><strong>'+esc(d.map)+'</strong><p>第 '+d.round+' / '+s.maxRounds+' 轮 · '+d.players+' 人</p><p>更新时间：'+esc(d.time)+'</p><p>'+esc(d.detail)+'</p></div></div>':'<p>'+invalid+'</p><p>地图 / 轮数 / 人数 / 更新时间：—</p>')+'<div class="row-actions">'+[['slotSave','保存当前',!canSave],['slotLoad','读取',!s],['slotExport',s?'导出':'导出原始数据',item.status==='empty'],['slotDelete','删除',item.status==='empty']].map(([act,label,disabled])=>'<button class="secondary" aria-label="'+slotName(item.id)+' · '+label+'" data-act="'+act+'" data-slot="'+item.id+'" '+(disabled?'disabled':'')+'>'+label+'</button>').join('')+'</div><label class="slot-import">导入到'+slotName(item.id)+'<input type="file" class="file-input" accept="application/json,.json" data-slot-import="'+item.id+'"></label></section>';}).join('')+'</div><p>删除自动槽后，当前旅行的下一次操作会重新自动保存。损坏或较新版本可导出原始数据以便保留。</p>';}

export function exportableState(game,started,saved){return started?game?.s||null:saved?.s||null;}
export function archiveSummary(saved){const s=saved.s,time=s.savedAt;return `第 ${s.round} / ${s.maxRounds} 轮 · ${s.players.length} 人 · 最近保存时间：${typeof time==='number'&&Number.isFinite(time)&&time>0&&time<=8640000000000000?new Date(time).toLocaleString('zh-CN',{hour12:false}):'未知（旧存档）'}`;}
export function resumeInfo(saved){
 if(!saved)return null;const s=saved.s,p=accountPlayer(saved)||saved.player,c=CHARACTERS.find(c=>c.id===p.character);
 return {character:c.id,name:c.name,action:s.phase==='finished'?'查看排名':isHotseat(s)?'继续热座':s.players.every(p=>!p.human)?'继续观战':p.alive?'继续':'继续观战',map:MAPS[s.mapVersion].name,round:s.round,maxRounds:s.maxRounds,players:s.players.length};
}
export function resumeCard(saved){const d=resumeInfo(saved);return d?`<span class="resume-face">${portrait(d.character)}</span><span class="resume-copy"><strong>${d.action} · ${d.name}</strong><small>${d.map} · ${d.round}/${d.maxRounds}轮 · ${d.players}人</small></span><span class="resume-arrow" aria-hidden="true">↗</span>`:'继续上次的旅行';}
