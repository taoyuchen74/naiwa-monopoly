import {RULES,bankClosed,stockClosed} from './rules-config.js';
import {businessType} from './businesses.js';
import {eventPoseBitmap} from './portrait-renderer.js';
import {portrait} from './portraits.js';
import {art} from './illustrations.js';
const fmt=n=>Math.round(n).toLocaleString('zh-CN'),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function debtInfo(g){
 const d=g.s.debt;if(!d)return null;const p=g.player,managing=g.manageable(),bankOpen=g.canBank(),stockOpen=managing&&!stockClosed(g.s.round),stockValue=g.assets(p).stocks,sale=g.owned(p).reduce((sum,o)=>sum+Math.round(g.cost(o.tile,o.level,businessType(o))*RULES.propertySaleRatio),0),credit=Math.max(0,RULES.loanLimit-p.loan);
 const bank={deposit:p.deposit,credit,available:bankOpen?p.deposit+credit:0,reason:bankClosed(g.s.round)?'周三休息，当前不能办理业务。':!bankOpen?'本回合尚未获得银行办理资格。':!p.deposit&&!credit?'暂无可取存款或可借额度。':`可取 ${fmt(p.deposit)} · 可借 ${fmt(credit)}`};
 const stocks={value:stockValue,available:stockOpen?stockValue:0,reason:stockClosed(g.s.round)?'周日休市，当前不能卖出股票。':!managing?'当前不能交易股票。':stockValue?'按当前报价卖出，无交易手续费。':'没有股票持仓。'};
 const deeds={value:sale,available:managing?sale:0,reason:!managing?'当前不能变卖地产。':sale?'按每块地产成本的 65% 四舍五入。':'尚未拥有地产。'};
 const gap=Math.max(0,d.amount-p.money),available=p.money+bank.available+stocks.available+deeds.available,canPay=g.s.phase==='debt'&&p.money>=d.amount;
 return {amount:d.amount,label:d.label,creditor:d.to===null?'公共费用':g.char(g.s.players[d.to]).name,cash:p.money,gap,available,canPay,after:canPay?p.money-d.amount+(d.to===p.id?d.amount:0):null,bank,stocks,deeds};
}
export function debtBankDraft(g){const d=debtInfo(g);if(!d||!d.gap||!d.bank.available)return null;const kind=d.bank.deposit?'withdraw':'borrow',limit=kind==='withdraw'?d.bank.deposit:d.bank.credit;return {kind,amount:String(Math.min(d.gap,limit))};}
export function debtPanel(g){
 const d=debtInfo(g);if(!d)return '<p>当前没有待处理欠款。</p>';const p=g.player,c=g.char(p),pose=eventPoseBitmap(c.id,d.canPay?'happy':'sad'),coverage=Math.min(100,d.cash/d.amount*100);
 const summary=d.canPay?`已筹齐，支付后现金 ${fmt(d.after)} 奶币。`:d.available>=d.amount?'当前可用的筹款途径足以补齐缺口。':`现金与可筹资金合计最多 ${fmt(d.available)}，仍差 ${fmt(d.amount-d.available)} 奶币。`;
 const source=(key,name,icon,detail)=>`<article class="funding-source"><div>${art(icon)}</div><h3>${name}</h3><strong>${fmt(detail.available)}<small> 当前可筹</small></strong><p>${esc(detail.reason)}</p>${key==='stocks'&&detail.value?`<small class="funding-holding">持仓市值 ${fmt(detail.value)}</small>`:''}<button class="secondary" data-act="panel" data-panel="${key}" ${p.human&&detail.available>0?'':'disabled'}>${key==='bank'?'去银行筹款':key==='stocks'?'查看持仓并卖出':'查看地产并变卖'}</button></article>`;
 return `<section class="debt-summary ${d.canPay?'ready':''}"><div class="debt-hero"><div class="debt-model">${pose?`<img src="${pose}" alt="${c.name}形象">`:portrait(c.id)}</div><div><span>${esc(d.label)}</span><small>收款方 · ${esc(d.creditor)}</small><strong>${fmt(d.amount)}<small> 奶币</small></strong><b>${d.canPay?'已筹齐，可以支付':'还差 '+fmt(d.gap)}</b></div></div><div class="debt-cash"><span>当前现金 <b>${fmt(d.cash)}</b></span><span>本次应付 ${fmt(d.amount)}</span></div><div class="debt-meter" role="progressbar" aria-label="现金覆盖本次欠款" aria-valuemin="0" aria-valuemax="${d.amount}" aria-valuenow="${Math.min(d.cash,d.amount)}"><i style="width:${coverage}%"></i></div><p>${summary}</p><button class="primary debt-pay" data-act="settle" ${p.human&&d.canPay?'':'disabled'}>${d.canPay?'支付 '+fmt(d.amount)+' 并继续':'先筹齐缺口，再支付'}</button></section><h3 class="funding-title">选择筹款途径</h3><div class="funding-grid">${source('bank','银行周转','bank',d.bank)}${source('stocks','卖出股票','stocks',d.stocks)}${source('deeds','变卖地产','house',d.deeds)}</div><p class="debt-funding-note">金额按当前可办理的业务计算；交通工具不支持手动变卖。筹款后关闭面板，会回到此页确认支付。</p><details class="debt-bankruptcy"><summary>仍无法周转？查看退出选项</summary><p>申请破产会清算存款、股票、地产与交通工具，尽可能支付本次欠款，并退出本局。</p><button class="secondary danger" data-act="confirmBankrupt">查看破产确认</button></details>`;
}
