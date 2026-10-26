import {businessType,researchChoices} from './businesses.js';
import {CARDS} from './content.js';
import {art} from './illustrations.js';
export function researchInfo(g,id){
 const o=g.s.ownership[id];if(!o?.level||businessType(o)!=='research')return null;const owner=g.s.players[o.player],key=o.researchCard||'dice',progress=o.researchProgress||0,active=owner.alive&&g.s.phase!=='finished';
 const canChange=active&&owner.human&&owner.id===g.player.id&&g.s.phase==='end'&&owner.pos===id&&owner.buildSite===id;
 const reason=!active?'本局研发已停止':owner.id!==g.player.id?'等待业主的回合':!owner.human?'电脑奶伴自行选择项目':g.s.phase!=='end'||owner.pos!==id||owner.buildSite!==id?'再次停靠研究所后可切换项目':'';
 return {key,progress,remaining:3-progress,active,canChange,reason,level:o.level,unlocked:researchChoices(o.level),cards:owner.cards.length,compensation:Math.round(60*(owner.spirit==='fortune'?1.25:1)),resting:owner.skip>0};
}
export function researchPanel(g,id){
 const r=researchInfo(g,id);if(!r)return '';return `<section class="research-lab"><h3>研究所工作台</h3><div class="research-current">${art(r.key)}<div><small>正在研发</small><strong>${CARDS[r.key].name}</strong><span>进度 ${r.progress}/3 · ${r.active?'再出发 '+r.remaining+' 次完成':'研发已停止'}</span><div class="lab-meter" role="progressbar" aria-label="当前项目研发进度" aria-valuemin="0" aria-valuemax="3" aria-valuenow="${r.progress}">${[0,1,2].map(i=>`<i class="${i<r.progress?'filled':''}"></i>`).join('')}</div></div></div><p class="lab-note">${r.resting?'业主休养中；休养回合不推进研发。':'每次实际出发推进一次，同次出发不会重复计数。'}完成后自动领取一张卡，并开始下一轮研发。</p><div class="lab-bag">卡包 ${r.cards}/15 张${r.cards>=15?` · 若完成时仍满，改发奶币；按当前神灵效果为 ${r.compensation}。`:' · 完成时若卡包已满，将改发奶币补偿。'}</div><p class="lab-note">${r.reason||'选择另一项目查看切换详情。切换会清空当前进度，加盖不会清空。'}</p><div class="research-projects">${researchChoices(5).map((key,i)=>{const selected=key===r.key,locked=!r.unlocked.includes(key);return `<article class="research-project ${selected?'selected':''} ${locked?'locked':''}">${art(key)}<span class="badge">${selected?'当前项目':locked?(i+1)+' 级解锁':'已解锁'}</span><h4>${CARDS[key].name}</h4><p>${CARDS[key].description}</p><button class="${selected||locked?'secondary':'primary'}" data-act="chooseResearch" data-id="${id}" data-key="${key}" ${selected||locked||!r.canChange?'disabled':''}>${selected?'继续研发':locked?'升级至 '+(i+1)+' 级':'选择此项目'}</button></article>`;}).join('')}</div></section>`;
}
export function researchChangePanel(g,id,key){
 const r=researchInfo(g,id);if(!r||!r.canChange||!r.unlocked.includes(key)||key===r.key)return '<p>当前无法切换到这个项目，请回到研究所重新选择。</p>';
 return `<div class="research-switch"><article>${art(r.key)}<small>当前项目 · ${r.progress}/3</small><strong>${CARDS[r.key].name}</strong></article><span aria-hidden="true">➜</span><article>${art(key)}<small>切换后 · 0/3</small><strong>${CARDS[key].name}</strong></article></div><p class="lab-reset">${r.progress?'将放弃已完成的 '+r.progress+' 次研发进度。':'当前尚未积累研发进度。'}新项目从 0/3 开始，需再出发 3 次完成；切换不花奶币，也不占本次建设次数。</p><p>${CARDS[key].description}</p><div class="button-grid"><button class="secondary" data-act="chooseBuilding" data-id="${id}">保留当前项目</button><button class="primary" data-act="research" data-id="${id}" data-key="${key}">确认切换项目</button></div>`;
}
