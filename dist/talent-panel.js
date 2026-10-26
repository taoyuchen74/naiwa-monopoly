import {TALENTS} from './talents.js?v=16';
import {CHARACTERS} from './content.js';
import {portrait} from './portraits.js';
import {eventPoseBitmap} from './portrait-renderer.js';
import {art} from './illustrations.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const motifs={naiwa:'house',naichong:'bank',naishu:'steal',naigou:'recover',naidan:'build',naicha:'tea'};
export function talentStatus(g,p=g.s.players[0]){
 const enabled=g.s.talents===true,active=enabled&&p.alive&&g.s.phase!=='finished',count=p.departures||0,cycle=p.character==='naidan'?4:p.character==='naicha'?3:0,progress=cycle?count%cycle:0,remaining=active&&cycle?cycle-progress:null,income=n=>Math.round(n*(p.spirit==='fortune'?1.25:1));
 let label=!enabled?'本局未开启天赋':!p.alive?'已退出，不再触发天赋':g.s.phase==='finished'?'本局旅行已结束':cycle?`再出发 ${remaining} 次，触发${p.character==='naidan'?'免费加盖':'周期补给'}`:'符合条件时自动生效',notes=[],target=null;
 if(active){
  if(p.character==='naiwa')notes=['常规建设支付 85% 费用，向上取整。',`按当前财运状态，正向起点奖励共 ${income(480)} 奶币。`];
  if(p.character==='naichong')notes=[`下次实际出发领取 ${income(60)} 奶币。`,'到店购卡支付 80% 点券价格，向上取整。'];
  if(p.character==='naishu')notes=['租金结算自动享受 20% 减免。','购地卡收购再享九折，成交价向上取整至 10 奶币。'];
  if(p.character==='naigou')notes=[`下次出发各有一半机会：捡到 ${income(240)} 奶币，或摔丢 ${Math.min(40,p.money)} 奶币。`,'查看技能不会提前抽取结果。'];
  if(p.character==='naidan'){const next=g.owned(p).filter(o=>o.level<g.buildingLimit(o)).sort((a,b)=>a.level-b.level||a.tile.id-b.tile.id)[0];target=next?{id:next.tile.id,name:next.tile.name,level:next.level,nextLevel:next.level+1}:null;notes=[`每次实际出发领取 ${income(75)} 奶币。`,target?`按当前地产预览：${target.name} ${target.level}→${target.nextLevel} 级。`:'当前没有可加盖的自家地产，周期到达时会重新检查。'];}
  if(p.character==='naicha')notes=[`按当前点券容量，周期补给可收 ${Math.min(20,150-p.tickets)} 点券。`,p.cards.length>=15?`卡包已满，野生狗奶会折算为 ${income(60)} 奶币。`:'周期补给另获一张野生狗奶。'];
 }
 const phaseNote=!active?'可查看各位奶伴的技能规则。':p.skip?'休养期间不计入出发次数。':g.s.current!==p.id?'电脑回合，查看你的技能进度。':p.talentReady?'本次出发计数已更新。':'下一次实际出发时更新计数。';
 const recent=g.s.logs.find(l=>l.text.includes(`【${TALENTS[p.character].name}】`))?.text||null;
 return {enabled,active,count,cycle,progress,remaining,label,notes,target,phaseNote,recent};
}
export function talentsPanel(g){
 const p=g.s.players[0],c=g.char(p),t=TALENTS[c.id],s=talentStatus(g,p),pose=eventPoseBitmap(c.id,'idle'),meter=s.active&&s.cycle?`<div class="talent-cycle"><div><span>本周期进度</span><b>${s.progress}/${s.cycle}</b></div><div class="talent-meter" role="progressbar" aria-label="${esc(s.label)}" aria-valuemin="0" aria-valuemax="${s.cycle}" aria-valuenow="${s.progress}">${Array.from({length:s.cycle},(_,i)=>`<i class="${i<s.progress?'filled':''}"></i>`).join('')}</div></div>`:'';
 return `<section class="talent-hero ${s.active?'':'inactive'}" style="--talent-color:${c.estateColor}"><div class="talent-model">${pose?`<img src="${pose}" alt="${c.name}形象">`:portrait(c.id)}<span>${art(motifs[c.id])}</span></div><div class="talent-copy"><small>我的奶伴 · ${c.name}</small><h3>${t.name}</h3><p>${t.text}</p>${s.active?`<span class="badge">已实际出发 ${s.count} 次</span>`:''}</div><div class="talent-live"><strong>${s.label}</strong><small>${s.phaseNote}</small>${meter}${s.notes.length?`<ul>${s.notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul>`:''}</div></section>${s.recent?`<div class="talent-recent"><small>近期触发记录</small><p>${esc(s.recent)}</p></div>`:''}<p class="talent-explain">预览按当前资产、卡包和神灵状态计算，实际效果在触发时重新结算。休养不会消耗周期进度。</p><h3 class="other-talents-title">其他奶伴的天赋</h3>${CHARACTERS.filter(o=>o.id!==c.id).map(o=>{const player=g.s.players.find(p=>p.character===o.id),status=player?talentStatus(g,player):null;return `<div class="talent-row"><span class="talent-face">${portrait(o.id)}</span><div><h3>${o.name} · ${TALENTS[o.id].name}</h3><p>${TALENTS[o.id].text}</p><span class="badge">${player?(player.alive?'本局参赛':'已退出'):'未参赛'}</span>${status?.active&&status.cycle?`<small class="talent-rival-cycle">已出发 ${status.count} 次 · ${status.label}</small>`:''}</div></div>`;}).join('')}`;
}
