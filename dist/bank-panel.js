import {guideArt,art} from './illustrations.js';
const fmt=n=>n.toLocaleString('zh-CN');
export const BANK_ACTIONS={deposit:{name:'存入奶币',verb:'存入',icon:'bank',field:'deposit'},withdraw:{name:'取出存款',verb:'取出',icon:'recover',field:'deposit'},borrow:{name:'申请借款',verb:'借入',icon:'stocks',field:'loan'},repay:{name:'偿还贷款',verb:'偿还',icon:'shield',field:'loan'}};
export function bankLimit(g,kind){const p=g.s.players[0];return Math.max(0,kind==='deposit'?p.money:kind==='withdraw'?p.deposit:kind==='borrow'?1800-p.loan:kind==='repay'?Math.min(p.money,p.loan):0);}
export function bankQuote(g,kind,value){
 const p=g.s.players[0],amount=Number(value),before={money:p.money,deposit:p.deposit,loan:p.loan},limit=bankLimit(g,kind);let reason='';
 if(!BANK_ACTIONS[kind])reason='请选择一种业务。';
 else if(g.player.id!==p.id||!p.human)reason='电脑回合，当前只查看你的账户。';
 else if(g.s.round%7===3)reason='周三休息，今天不能办理业务。';
 else if(!g.canBank())reason='经过银行后，本回合才能办理业务。';
 else if(g.s.phase==='debt'&&['deposit','repay'].includes(kind))reason='筹资期间仅能取款或借款。';
 else if(!Number.isSafeInteger(amount)||amount<=0)reason='请输入大于零的整数金额。';
 else if(amount>limit)reason=kind==='borrow'?`最多还可借 ${fmt(limit)} 奶币。`:kind==='withdraw'?`存款不足，最多可取 ${fmt(limit)} 奶币。`:kind==='repay'&&p.loan<amount?`当前贷款仅 ${fmt(p.loan)} 奶币。`:`现金不足，还差 ${fmt(amount-p.money)} 奶币。`;
 let after=null;if(!reason){after={...before};if(kind==='deposit'){after.money-=amount;after.deposit+=amount;}if(kind==='withdraw'){after.money+=amount;after.deposit-=amount;}if(kind==='borrow'){after.money+=amount;after.loan+=amount;}if(kind==='repay'){after.money-=amount;after.loan-=amount;}}
 return {allowed:!reason,reason,amount,limit,before,after};
}
export function bankPreview(g,kind,value){const q=bankQuote(g,kind,value);return q.allowed?`<strong>办理后余额</strong><div class="bank-projection">${[['money','现金'],['deposit','存款'],['loan','贷款']].map(([key,label])=>`<div><span>${label}</span><small>${fmt(q.before[key])} →</small><b>${fmt(q.after[key])}</b></div>`).join('')}</div>`:`<strong>暂时无法办理</strong><p>${q.reason}</p>`;}
export function bankPanel(g,{kind='deposit',amount='300'}={}){
 if(!BANK_ACTIONS[kind])kind='deposit';const p=g.s.players[0],q=bankQuote(g,kind,amount),account=g.char(p),a=BANK_ACTIONS[kind];
 return `${guideArt('bank','每轮存款利息 0.5%，贷款利息 4%，均计入本金。新增借款后，贷款余额不能超过 1,800。','naichong')}<div class="bank-console"><div class="bank-left"><div class="bank-account"><strong>${account.name}的小金库</strong><span>始终显示你的账户</span><div>${[['money','现金'],['deposit','存款'],['loan','贷款']].map(([key,label])=>`<span>${label}<b>${fmt(p[key])}</b></span>`).join('')}</div></div><div class="bank-tabs" aria-label="选择银行业务">${Object.entries(BANK_ACTIONS).map(([id,b])=>`<button data-act="bankKind" data-kind="${id}" aria-pressed="${kind===id}">${art(b.icon)}<span>${b.name}</span></button>`).join('')}</div></div><div class="bank-right"><label class="bank-amount-label" for="bankAmount">${a.verb}金额 <small>本账户最多 ${fmt(q.limit)}</small></label><input id="bankAmount" class="bank-amount" type="number" min="1" step="1" inputmode="numeric" value="${Number.isSafeInteger(Number(amount))&&Number(amount)>=0?amount:''}" aria-label="银行操作金额"><div class="bank-shortcuts">${[100,300,1000].map(n=>`<button data-act="bankQty" data-amount="${n}">${fmt(n)}</button>`).join('')}<button data-act="bankQty" data-amount="max">最大金额</button></div><div id="bankPreview" class="bank-preview" aria-live="polite">${bankPreview(g,kind,amount)}</div><button id="bankConfirm" class="primary bank-confirm" data-act="bank" data-kind="${kind}" ${q.allowed?'':'disabled'}>确认${a.verb}</button></div></div><p class="bank-note">周三休息。到访银行后可在本回合内多次办理业务；查看账户不会获得办理资格。</p>`;
}
export function updateBankPreview(g,kind,root=document){const input=root.querySelector('#bankAmount'),preview=root.querySelector('#bankPreview'),button=root.querySelector('#bankConfirm');if(!input||!preview||!button)return;const q=bankQuote(g,kind,input.value);preview.innerHTML=bankPreview(g,kind,input.value);button.disabled=!q.allowed;}
