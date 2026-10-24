import {BUSINESSES,businessType,buildingLimit,researchChoices} from './businesses.js';import {CARDS} from './content.js';import {buildingImage} from './illustrations.js';
const fmt=n=>Math.round(n).toLocaleString('zh-CN');
export function businessFacts(g,id){
 const o=g.s.ownership[id];if(!o)return '<p class="panel-note">无主空地 · 停靠后可购买</p>';
 const type=businessType(o),base=g.baseRent(id,o.level),owner=g.s.players[o.player];let facts;
 if(!o.level)facts=`空地过路费 ${g.rent(id)} · 到访后可选择建筑`;
 else if(type==='hotel'){const day=Math.round(base*.65);facts=`每晚 ${day} 奶币 · 随机入住 1—3 回合<br>住宿总费 ${day}—${day*3} 奶币，入住期间暂停行动`;}
 else if(type==='mall')facts=`消费基数 ${base} · 抽签倍率 75% / 100% / 150%<br>单次消费 ${Math.round(base*.75)}—${Math.round(base*1.5)} 奶币`;
 else if(type==='gas')facts='基础费 30 + 实走步数 × 15 + 交通费<br>交通费：步行 0 / 自行车 60 / 小车 120';
 else if(type==='chain'){const count=g.owned(owner).filter(x=>x.level&&businessType(x)==='chain').length;facts=`全岛 ${count} 间分店 · 每间统一收费 ${g.rent(id)}<br>每多一间加收 50，最高 400 奶币`;}
 else if(type==='park')facts='免费开放 · 每位停靠者获得 10 点券';
 else if(type==='research'){const n=o.researchProgress||0;facts=`${CARDS[o.researchCard||'dice'].name} · 研发进度 ${n}/3<br><span class="research-meter" aria-label="研发进度 ${n}/3">${[0,1,2].map(i=>`<i class="${i<n?'filled':''}"></i>`).join('')}</span>再出发 ${3-n} 次完成研发`;}
 else facts=`住宅租金 ${g.rent(id)} · 其中街区联营 +${owner.skip?0:Math.max(0,g.rent(id)-base)}${o.level<buildingLimit(o)?`<br>下一级租金 ${g.rent(id,o.level+1)}`:''}`;
 return `<div class="facility-facts"><span class="badge">${o.level?BUSINESSES[type].name:'待建空地'} · ${g.char(owner).name}</span><p>${facts}</p>${owner.skip&&!['park','research'].includes(type)?'<small>业主休养中，当前暂停收费。</small>':''}<small>收费为基础规则，角色技能、神灵和免租卡会影响实付。</small></div>`;
}
export function businessPanel(g,id){const t=g.tiles[id],o=g.s.ownership[id],color=g.char().estateColor;if(!o||o.player!==g.player.id)return '<p>请先拥有这块地产。</p>';
 if(!o.level)return `<p class="panel-note">空地已归你所有。选择这次要建设的设施；常规建设每次停靠限一次。类型建成后固定，拆除后可重新选择。</p><div class="business-choices">${Object.entries(BUSINESSES).map(([key,b])=>`<article class="business-choice">${buildingImage({...t,buildingType:key},1,color)}<h3>${b.name}</h3><span class="badge">${b.max===1?'一级设施':'可加盖至五级'}</span><p>${b.text}</p><div class="row-head"><strong>${fmt(g.buildPrice(t,key))} 奶币</strong><button class="primary" data-act="construct" data-id="${id}" data-type="${key}" ${g.canConstruct(id,key)?'':'disabled'}>建设</button></div></article>`).join('')}</div>`;
 const type=businessType(o),b=BUSINESSES[type],max=buildingLimit(o);return `${buildingImage({...t,buildingType:o.buildingType},o.level,color)}<h3>${b.name} · ${o.level}/${max}级</h3>${businessFacts(g,id)}<p>${b.text}</p><div class="stat-grid"><div class="stat-box"><strong>${o.level<max?g.buildPrice(t):'已达上限'}</strong><span>下一级建设费</span></div></div>${type==='research'?`<h3>研发进度 ${o.researchProgress||0}/3</h3><p>当前项目：${CARDS[o.researchCard||'dice'].name}。更换项目将重置进度。</p><div class="research-options">${researchChoices(o.level).map(key=>`<button class="secondary" data-act="research" data-id="${id}" data-key="${key}" ${o.researchCard===key?'disabled':''}>${CARDS[key].name}</button>`).join('')}</div>`:''}<p class="stock-explain">旅馆按入住天数、商场按抽签倍率、加油站按实际行程收费，预览仅作参考。住宅按街区联营；连锁店按全图分店数收费。</p><div class="button-grid"><button class="secondary" data-act="cancel">继续旅行</button><button class="primary" data-act="upgrade" data-id="${id}" ${g.canUpgrade(id)?'':'disabled'}>${o.level<max?'加盖一层':'不能继续加盖'}</button></div>`;
}
