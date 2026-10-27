import {RULES} from './rules-config.js';
import {businessType,BUSINESSES} from './businesses.js';
import {CARDS} from './content.js';
import {buildingImage} from './illustrations.js';
const fmt=n=>Math.round(n).toLocaleString('zh-CN');
export function disposalInfo(g,id,kind='sell'){
 const p=g.player,t=g.tiles[id],o=g.s.ownership[id];if(!t||!o||o.player!==p.id||!['sell','demolish'].includes(kind)||kind==='demolish'&&!o.level)return null;
 const value=g.cost(t,o.level,businessType(o)),refund=kind==='sell'?Math.round(value*RULES.propertySaleRatio):Math.floor((value-t.price)*.25),afterProperty=kind==='sell'?0:t.price,cashAfter=p.money+refund;
 const allowed=p.human&&p.alive&&g.manageable()&&(kind==='sell'||g.s.phase==='end'&&p.pos===id&&p.buildSite===id);
 const reason=allowed?'':!p.human?'等待自己的回合':!g.manageable()?'当前不能处理地产':'拆除房屋需要本次停靠在这里，且不处于筹款阶段。';
 return {kind,t,o,value,refund,cash:p.money,cashAfter,valueLoss:value-afterProperty-refund,allowed,reason,debt:g.s.phase==='debt'?{amount:g.s.debt.amount,gap:Math.max(0,g.s.debt.amount-cashAfter)}:null,research:businessType(o)==='research'&&o.level?{name:CARDS[o.researchCard||'dice'].name,progress:o.researchProgress||0}:null};
}
export function disposalPanel(g,id,kind='sell'){
 const q=disposalInfo(g,id,kind);if(!q)return '<p>这块地产当前无法进行该操作。</p>';const sell=kind==='sell',color=g.char().estateColor,building=q.o.level?BUSINESSES[businessType(q.o)].name+' · '+q.o.level+' 级':'自家空地';
 const notes=sell?'土地与房屋一起变卖，地块恢复无主空地。以后需再次停靠并支付地价才能购回。':'只拆房屋，土地仍归你所有。若本次停靠尚有建设次数，可重新选择建筑。';
 const funding=q.debt?`<div class="disposal-funding">待付 ${fmt(q.debt.amount)} · ${q.debt.gap?'卖出后还差 '+fmt(q.debt.gap):'卖出后现金足够支付'}。变卖完成后返回筹款页，付款仍需单独确认。</div>`:'';
 return `<div class="disposal-comparison"><figure>${buildingImage({...q.t,buildingType:businessType(q.o)},q.o.level,color)}<figcaption>${building}</figcaption></figure><span aria-hidden="true">➜</span><figure>${buildingImage(q.t,0,sell?'#acb18d':color,!sell)}<figcaption>${sell?'无主空地':'保留土地 · 待建'}</figcaption></figure></div><div class="disposal-amount"><div><small>${sell?'变卖回收':'材料回收'}</small><strong>+${fmt(q.refund)}<span> 奶币</span></strong></div><div><small>操作后现金</small><strong>${fmt(q.cashAfter)}</strong></div></div><div class="disposal-account"><span>当前地产估值 ${fmt(q.value)}</span><span>净资产减少 ${fmt(q.valueLoss)}</span></div><p class="disposal-rule">${sell?'回收金额按地产估值的 65% 四舍五入。':'材料回收按房屋建设估值的 25% 向下取整，地价不计入。'}</p><p>${notes}</p><p class="disposal-effects">${sell?'原有收费与设施效果停止；同街区住宅联营和连锁分店收费会重新计算。':'设施类型与效果清除，恢复空地收费；其他住宅的联营收费也会重新计算。'}${q.research?`<br>${q.research.name}的研发进度 ${q.research.progress}/3 将清除。`:''}</p>${funding}${q.reason?`<p class="disposal-unavailable">${q.reason}</p>`:''}<div class="button-grid"><button class="secondary" data-act="panel" data-panel="deeds">${sell?'保留这块地产':'保留现有房屋'}</button><button class="secondary danger" data-act="${kind}" data-id="${id}" ${q.allowed?'':'disabled'}>${sell?'确认变卖':'确认拆除'} · +${fmt(q.refund)}</button></div>`;
}
