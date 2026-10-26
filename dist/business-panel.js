import {BUSINESSES,businessType,buildingLimit,researchChoices,propertyChargeOptions} from './businesses.js';import {CARDS} from './content.js';import {buildingImage} from './illustrations.js';
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
// Quotes use a detached game state so prospective buildings share real rent rules,
// including district support and the new chain branch, without consuming randomness.
export function buildingQuote(g,id,type=businessType(g.s.ownership[id]),level=(g.s.ownership[id]?.level||0)+1){
 const t=g.tiles[id],o=g.s.ownership[id],p=g.player,b=BUSINESSES[type];if(!t||!o||o.player!==p.id||!b||level<1||level>b.max)return null;
 const preview=new g.constructor(JSON.parse(JSON.stringify(g.s))),future=preview.s.ownership[id];future.level=level;future.buildingType=type;preview.player.skip=0;
 const cost=g.buildPrice(t,type),options=propertyChargeOptions(preview,id),values=options.map(c=>c.amount),range=Math.min(...values)===Math.max(...values)?fmt(values[0]):`${fmt(Math.min(...values))}—${fmt(Math.max(...values))}`;
 let income=range+' 奶币 / 到访',detail='已含同街区住宅联营。';
 if(type==='hotel'){income=range+' 奶币 / 入住';detail=`每晚 ${fmt(values[0])}，随机入住 1—3 回合并暂停行动。`;}
 else if(type==='mall')detail='75% / 100% / 150% 三种消费结果。';
 else if(type==='chain'){const count=preview.owned(preview.player).filter(x=>x.level&&businessType(x)==='chain').length;detail=`建成后共 ${count} 间分店，统一收费；每增一家加 50，上限 400。`;}
 else if(type==='gas'){income='45—300 奶币 / 步行到访';detail='实走 1—18 步；自行车另加 60，小车另加 120。';}
 else if(type==='research'){income='每 3 次出发产出 1 张卡';detail=`${level===1?'首个项目：'+CARDS.dice.name+'。':'可研发：'+researchChoices(level).map(k=>CARDS[k].name).join('、')+'。'}不收过路费。`;}
 else if(type==='park'){income='到访者 +10 点券';detail='所有角色均可领取，不收过路费。';}
 const allowed=o.level?g.canUpgrade(id):g.canConstruct(id,type);
 const reason=allowed?'':g.s.phase!=='end'?'等待自己的停靠建设时机':p.pos!==id||p.buildSite!==id?'再次停到这里才能建设':p.buildsUsed>=1?'本次停靠已完成一次建设':p.money<cost?'现金不足，还差 '+fmt(cost-p.money)+' 奶币':'当前不能建设';
 return {type,level,cost,cashAfter:p.money-cost,income,detail,options,allowed,reason};
}
const quoteView=q=>`<div class="build-quote"><small>建成后的基础效果</small><strong>${q.income}</strong><p>${q.detail}</p></div><div class="build-budget"><span>建设费 <b>${fmt(q.cost)}</b></span><span>${q.cashAfter<0?'现金缺口':'建后现金'} <b>${fmt(Math.abs(q.cashAfter))}</b></span></div>${q.reason?`<p class="build-unavailable">${q.reason}</p>`:''}`;
const quoteNote='<p class="build-quote-note">收费按基础规则展示，实际到访还受业主休养、免租、角色技能与神灵影响。建设后需再次停靠才能加盖，工程队卡除外。</p>';
export function businessPanel(g,id){const t=g.tiles[id],o=g.s.ownership[id],color=g.char().estateColor;if(!o||o.player!==g.player.id)return '<p>请先拥有这块地产。</p>';
 if(!o.level)return `<div class="build-wallet"><span>选择建筑</span><strong>可用现金 ${fmt(g.player.money)}</strong></div><p class="panel-note">本次停靠可建一次。建成后类型固定，拆除后可重新选择。</p>${quoteNote}<div class="business-choices">${Object.entries(BUSINESSES).map(([key,b])=>{const q=buildingQuote(g,id,key);return `<article class="business-choice" data-business="${key}">${buildingImage({...t,buildingType:key},1,color)}<h3>${b.name}</h3><span class="badge">${b.max===1?'一级设施':'可加盖至五级'}</span>${quoteView(q)}<button class="primary build-choice-action" data-act="construct" data-id="${id}" data-type="${key}" ${q.allowed?'':'disabled'}>建设${b.name}</button></article>`;}).join('')}</div>`;
 const type=businessType(o),b=BUSINESSES[type],max=buildingLimit(o),q=buildingQuote(g,id),image=level=>buildingImage({...t,buildingType:type},level,color);
 return `<h3>${b.name} · ${o.level}/${max}级</h3>${q?`<div class="build-comparison"><figure>${image(o.level)}<figcaption>现在 · ${o.level} 级</figcaption></figure><span aria-hidden="true">➜</span><figure>${image(q.level)}<figcaption>加盖后 · ${q.level} 级</figcaption></figure></div>${quoteView(q)}${quoteNote}`:image(o.level)+'<p class="panel-note">已达到建筑等级上限。</p>'}${businessFacts(g,id)}<p>${b.text}</p>${type==='research'?`<h3>研发进度 ${o.researchProgress||0}/3</h3><p>当前项目：${CARDS[o.researchCard||'dice'].name}。更换项目将重置进度。</p><div class="research-options">${researchChoices(o.level).map(key=>`<button class="secondary" data-act="research" data-id="${id}" data-key="${key}" ${o.researchCard===key?'disabled':''}>${CARDS[key].name}</button>`).join('')}</div>`:''}<div class="button-grid"><button class="secondary" data-act="cancel">继续旅行</button><button class="primary" data-act="upgrade" data-id="${id}" ${g.canUpgrade(id)?'':'disabled'}>${q?'加盖一层 · '+fmt(q.cost):'已达等级上限'}</button></div>`;
}
