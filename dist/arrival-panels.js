import {weatherSummary,FOREST_BRANCHES} from './forest-rules.js';
import {BUSINESSES,businessType,propertyChargeOptions} from './businesses.js';
import {buildingImage} from './illustrations.js';
import {mapPoint,mapEdges} from './navigation.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>Math.round(n).toLocaleString('zh-CN');
export function visitQuote(g,id){const o=g.s.ownership[id],p=g.player,type=businessType(o);let exemption,rule;
 if(o.level&&['park','research'].includes(type)){exemption='free';rule='这项设施不收取到访费用，免租效果会保留。';}
 else if(g.s.players[o.player].skip){exemption='rest';rule='业主正在休养，本次暂停收费，免租效果会保留。';}
 else if(g.businessClosed(id)){exemption='closed';rule='设施正在巡检，本次不收费；免租效果保留。';}
 else if(p.shield){exemption='shield';rule='已备免租效果会抵消这次费用；旅馆也不会安排入住。';}
 const options=exemption?[{amount:0,label:'免费'}]:propertyChargeOptions(g,id).map(c=>({...c,amount:g.payment(c.amount,o.player)}));
 const min=Math.min(...options.map(c=>c.amount)),max=Math.max(...options.map(c=>c.amount));
 rule??=type==='hotel'&&o.level?'随机入住 1—3 回合，按实际天数收费，入住期间暂停行动。':type==='mall'&&o.level?'消费倍率在确认付款后抽签；下方列出所有可能费用。':type==='gas'&&o.level?'按本次实际行进步数与交通工具收费。':'金额已计入经营加成、保险、角色技能、神灵效果与街区联营。';
 return {min,max,options,exemption,rule,range:min===max?fmt(min):`${fmt(min)}—${fmt(max)}`,random:options.length>1,type};
}
export function quotedLandingFee(g,r){const o=g.s.ownership[r.id];if(o?.level&&['hotel','mall'].includes(businessType(o))){const q=visitQuote(g,r.id);return `费用 ${q.range}`;}return `付租 ${r.rent}`;}
export function estatePanel(g){const p=g.player,t=g.tiles[p.pos],o=g.s.ownership[p.pos],q=visitQuote(g,p.pos),price=g.takeoverPrice(p.pos),budget=p.money+p.deposit;
 const options=q.random?`<div class="arrival-fees">${q.options.map(c=>`<span><b>${esc(c.label)}</b>${fmt(c.amount)} 奶币</span>`).join('')}</div>`:'';
 const warning=q.max>budget?`<p class="arrival-warning">${q.min>budget?'现金与存款不足，付款时需要筹款。':'较高费用可能超过现金与存款，付款时可能需要筹款。'}</p>`:'';
 const action=q.exemption==='shield'?'使用已备免租':q.max===0?'继续旅行':'确认付款';
 return `<div class="arrival-summary">${buildingImage({...t,buildingType:o.buildingType},o.level,g.char(g.s.players[o.player]).estateColor)}<div><span class="badge">${o.level?BUSINESSES[q.type].name:'待建空地'}</span><strong>${q.range}<small> 奶币</small></strong><span>${q.random?'可能费用范围':q.max?'本次应付':'本次免费'}</span></div></div><p class="arrival-rule">${q.rule}</p>${options}<div class="arrival-budget"><span>现金 <b>${fmt(p.money)}</b> · 存款 <b>${fmt(p.deposit)}</b></span><span>收购 <b>${fmt(price)}</b> · 消耗一张购地卡</span></div>${warning}<div class="button-grid decision-actions"><button class="secondary" data-act="estatePay">${action}</button><button class="primary" data-act="estateBuy" ${p.money<price?'disabled':''}>购地卡收购</button></div>`;
}
function routeDrawing(g,first){const results=g.preview(g.s.remaining,{first}),position=g.player.pos,all=g.routes(position).flatMap(n=>g.preview(g.s.remaining,{first:n})),ids=[position,...all.flatMap(r=>r.path)],points=ids.map(id=>mapPoint(g.tiles[id],g.tiles));
 const xs=points.map(p=>p.x),ys=points.map(p=>p.y),cx=(Math.min(...xs)+Math.max(...xs))/2,cy=(Math.min(...ys)+Math.max(...ys))/2,rotate=Math.max(...ys)-Math.min(...ys)>Math.max(...xs)-Math.min(...xs);
 const point=id=>{const p=mapPoint(g.tiles[id],g.tiles);return rotate?{x:cx+p.y-cy,y:cy-p.x+cx}:p;},local=ids.map(point),x=Math.min(...local.map(p=>p.x))-18,y=Math.min(...local.map(p=>p.y))-18,w=Math.max(...local.map(p=>p.x))-x+18,h=Math.max(...local.map(p=>p.y))-y+18,start=point(position),color=first===g.routes(position)[0]?'#4f8268':'#b28335';
 const lines=mapEdges(g.tiles).map(e=>{const a=point(e.from),b=point(e.to);return `<path d="M${a.x},${a.y} L${b.x},${b.y}"/>`;}).join('');
 const routes=results.map(r=>{const pts=[position,...r.path].map(point);return `<polyline fill="none" points="${pts.map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')}"/><circle cx="${pts.at(-1).x}" cy="${pts.at(-1).y}" r="5"/>`;}).join('');
 return `<svg class="route-drawing" viewBox="${x} ${y} ${w} ${h}" role="img" aria-label="本条路线与最终落点的局部预览"><g fill="none" stroke="#cfc2a0" stroke-width="3" stroke-linecap="round">${lines}</g><g stroke="${color}" fill="${color}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${routes}</g><circle cx="${start.x}" cy="${start.y}" r="5" fill="#b74e36" stroke="#fff3cf" stroke-width="2"/></svg>`;
}

export function branchPanel(g,landingText){const s=g.s,p=g.player,shortcut=s.mapVersion===4?'走森林支路':s.mapVersion===2?(p.pos===35?'晨光支路绕开清洁站，也会跳过起点奖金。':'花园支路绕开医院，也会错过事件与神殿。'):'内岛捷径改变沿途停靠点。';
 return `${weatherSummary(s)?'<p>'+esc(weatherSummary(s))+'</p>':''}<p class="branch-intro">剩余 <b>${s.remaining}</b> 步，选好后继续本次行程。${shortcut}</p><div class="route-choices">${g.routes(p.pos).map((n,i)=>{const name=i===0?(s.mapVersion===4?'沿林间主路':'沿城镇主路'):s.mapVersion===4?FOREST_BRANCHES.find(b=>b.from===p.pos)?.name||'森林支路':s.mapVersion===2?(p.pos===35?'走晨光支路':'走花园支路'):'走内岛捷径';return `<article class="route-choice"><h3>${name}<span class="badge">${i===0?'主路':[2,4].includes(s.mapVersion)?'省3格':'内岛'}</span></h3>${routeDrawing(g,n)}<p class="route-next">下一格：${esc(g.tiles[n].name)}</p><div class="route-outcomes">${g.preview(s.remaining,{first:n}).map(r=>`<p>最终：${landingText(r)}</p>`).join('')}</div><button class="primary" data-act="branch" data-id="${n}">就走${i===0?'主路':[2,4].includes(s.mapVersion)?'支路':'捷径'}</button></article>`;}).join('')}</div>`;
}
