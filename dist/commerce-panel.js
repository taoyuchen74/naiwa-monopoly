import {CARDS} from './content.js';
import {auctionMinimum,commerceEnabled} from './commerce.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function auctionPanel(g){
 const a=g.s.auction,min=auctionMinimum(g),p=g.s.players[a.actor];
 return `<p>${esc(g.tiles[a.tile].name)} · 起拍标价50%取整，最低加价20。只用现金，放弃后不能再加入。</p><p>最高价：${a.bid} · ${a.leader===null?'尚无人出价':esc(g.char(g.s.players[a.leader]).name)}；已退出 ${a.passed.length} 人。</p><p>轮到 ${esc(g.char(p).name)} · 可用现金 ${p.money}</p><label for="auctionAmount">出价（最低 ${min}）</label><input id="auctionAmount" type="number" inputmode="numeric" min="${min}" max="${p.money}" step="1" value="${min}"><div class="row-actions"><button class="primary" data-act="auctionBid" ${p.money<min?'disabled':''}>确认出价</button><button class="secondary" data-act="auctionPass">放弃本场</button></div>`;
}
function properties(g,p,side){return g.owned(p).map(o=>`<label class="commerce-choice"><input type="checkbox" data-offer="${side}" data-property="${o.tile.id}" ${o.mortgaged||o.mortgage?'disabled':''}>${esc(o.tile.name)} · ${o.level}级</label>`).join('')||'<p>无可选地产</p>';}
function bundleText(g,b,owner){return `现金 ${b.cash}；地产：${b.properties.map(i=>esc(g.tiles[i].name)).join('、')||'无'}；卡牌：${b.cards.map(i=>esc(CARDS[owner.cards[i]].name)).join('、')||'无'}`;}
export function offerPanel(g,id){
 if(g.s.phase==='negotiation'){const o=g.s.negotiation;return `<p>你已确认下列报价，待电脑独立审核。待决期间不能改变资产。</p><h3>你交出</h3><p>${bundleText(g,o.give,g.player)}</p><h3>向${esc(g.char(g.s.players[o.to]).name)}请求</h3><p>${bundleText(g,o.receive,g.s.players[o.to])}</p><div class="row-actions"><button class="primary" data-act="resolveOffer">让电脑审核并确认</button><button class="secondary" data-act="cancelOffer">撤回报价</button></div>`;}
 const p=g.player,others=g.s.players.filter(q=>q.id!==p.id&&q.alive&&!q.human),q=others.find(q=>q.id===id)||others[0];
 if(!commerceEnabled(g.s)||!p.human||!['roll','end'].includes(g.s.phase)||g.s.debt||!q)return '<p>仅己方行动前后可向存活电脑报价；债务与多人热座期间关闭。</p>';
 return `<p>现金、地产与卡牌可组合。提交代表你确认，电脑接受后同时交割。不会自动取款；任一方手牌超过15张则拒绝。</p><label for="offerPartner">交易对象</label><select id="offerPartner">${others.map(x=>`<option value="${x.id}" ${x.id===q.id?'selected':''}>${esc(g.char(x).name)}</option>`).join('')}</select><fieldset><legend>你交出（现金 ${p.money}）</legend><label for="giveCash">现金</label><input id="giveCash" type="number" inputmode="numeric" min="0" max="${p.money}" value="0"><h3>地产</h3>${properties(g,p,'give')}<h3>手牌</h3>${p.cards.map((key,i)=>`<label class="commerce-choice"><input type="checkbox" data-offer="give" data-card="${i}">${esc(CARDS[key].name)}</label>`).join('')}</fieldset><fieldset><legend>向对方请求（现金 ${q.money}）</legend><label for="receiveCash">现金</label><input id="receiveCash" type="number" inputmode="numeric" min="0" max="${q.money}" value="0"><h3>地产</h3>${properties(g,q,'receive')}<h3>按种类请求一张卡牌</h3><p>不展示对手手牌；若没有所请求的牌，报价无效。</p>${g.s.mode.allowedCards.map(key=>`<label class="commerce-choice"><input type="checkbox" data-request-card="${key}">${esc(CARDS[key].name)}</label>`).join('')}</fieldset><button class="primary" data-act="proposeOffer">确认并提交组合报价</button>`;
}
export function readOffer(g,root){
 const to=Number(root.querySelector('#offerPartner').value),q=g.s.players[to];
 const bundle=side=>({cash:Number(root.querySelector('#'+side+'Cash').value),properties:[...root.querySelectorAll('[data-offer="'+side+'"][data-property]:checked')].map(x=>Number(x.dataset.property)),cards:[...root.querySelectorAll('[data-offer="'+side+'"][data-card]:checked')].map(x=>Number(x.dataset.card))});
 const give=bundle('give'),receive=bundle('receive');
 receive.cards=[...root.querySelectorAll('[data-request-card]:checked')].map(x=>q.cards.indexOf(x.dataset.requestCard));
 return {to,give,receive};
}
