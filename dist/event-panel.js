import {EVENTS,SPIRITS} from './content.js';
import {art} from './illustrations.js';
import {portrait} from './portraits.js';
import {eventPoseBitmap} from './portrait-renderer.js';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function eventPresentation(g){
 const n=g.s.notice||{},p=g.player,t=g.tiles[p.pos],e=EVENTS.find(e=>e.name===n.title),outcomes=[];let icon='theater',label='旅途消息',text=n.text||'继续旅程吧。';
 const income=n=>Math.round(n*(p.spirit==='fortune'?1.25:1));
 if(e){
  label='随机事件';icon=e.art||({gain:'stocks',loss:'demolish',rest:'recover',recover:'recover',card:'dice',spirit:'shield'})[e.kind];
  if(e.amount){const delta=e.kind==='loss'?-g.payment(e.amount,null,p):income(e.amount);outcomes.push(`奶币 ${delta<0?'−':'+'}${Math.abs(delta)}`);text=text.replace(`${e.amount} 奶币`,`${Math.abs(delta)} 奶币`);}
  if(e.kind==='rest')outcomes.push('休养 1 回合');if(e.kind==='recover')outcomes.push('休养已恢复');
 }else if(p.spirit&&SPIRITS[p.spirit]?.name===n.title){
  icon=p.spirit==='misfortune'?'slow':'shield';label='神灵相遇';outcomes.push('持续 3 个后续回合');
 }else if(/抵消|抵挡|守护效果已消耗/.test(text)){
  icon='shield';label='奶伴守护';outcomes.push('负面效果已抵消');
 }else if(t.kind==='hospital'){
  icon='recover';label='停靠疗养院';outcomes.push(`奶币 −${g.payment(100,null,p)}`,'休养 1 回合');
 }else if(t.kind==='tax'){
  icon='recover';label='停靠清洁站';outcomes.push(`奶币 −${g.payment(180,null,p)}`);
 }else if(t.kind==='rest'){
  icon='house';label='回到小窝';outcomes.push(`奶币 +${income(120)}`);text=text.replace('120 奶币',`${income(120)} 奶币`);
 }else if(t.kind==='shop'){
  icon='vehicle';label='停靠补给站';outcomes.push('点券与随机补给');text='收到点券与随机补给。点券最多持有 150，满卡包时会按规则补偿奶币。';
 }else if(t.kind==='bank'||t.kind==='stock'){
  icon=t.kind==='bank'?'bank':'stocks';label='公共服务';
 }
 if(e?.kind==='card'||e?.kind==='recover'||!e&&t.kind==='shop'){
  const latest=g.s.logs[0]?.text||'',card=/获得「([^」]+)」/.exec(latest),compensation=/卡包已满，补偿 \+(\d+)/.exec(latest);
  if(compensation){text=e?.kind==='recover'?'已恢复休养。卡包已满，补给折算为奶币。':'卡包已满，随机补给已折算为奶币。';outcomes.push('奶币 +'+compensation[1]);}
  else if(card)outcomes.push(card[1]+' ×1');
 }
 return {character:p.character,name:g.char(p).name,mood:n.mood==='happy'?'happy':n.mood==='sad'?'sad':'idle',icon,label,text,outcomes};
}
export function eventPanel(g){
 const d=eventPresentation(g),pose=eventPoseBitmap(d.character,d.mood),actor=pose?`<img src="${pose}" alt="${d.name}${d.mood==='happy'?'大笑':d.mood==='sad'?'低头':'待机'}形象">`:portrait(d.character);
 return `<div class="event-story ${d.mood}"><div class="event-picture"><div class="event-actor">${actor}</div><span class="event-motif">${art(d.icon)}</span><strong class="event-name">${d.name}</strong></div><div class="event-copy"><span class="event-kind">${d.label}</span><p>${esc(d.text)}</p>${d.outcomes.length?`<div class="event-outcomes" aria-label="本次结果">${d.outcomes.map(text=>`<span>${esc(text)}</span>`).join('')}</div>`:''}</div></div><button class="primary event-continue" data-act="ack">知道啦，继续旅行</button>`;
}
