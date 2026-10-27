// @ts-check
import {recordTrade} from './portfolio.js';
import {RULES,stockClosed} from './rules-config.js';
/** @typedef {import('./engine.js').Game} Game */

/** @param {Game} g @param {number} amount @param {number|null} [to] @param {string} [label] */
export function charge(g,amount,to=null,label='支付费用'){
 const p=g.player;
 amount=g.payment(amount,to,p);
 if(p.money<amount&&p.deposit){
  const transfer=Math.min(p.deposit,amount-p.money);
  p.deposit-=transfer;
  p.money+=transfer;
  g.log(`${g.char().name}存款自动补足现金 +${transfer}`);
 }
 if(p.money<amount){
  g.s.debt={amount,to,label};
  g.s.phase='debt';
  g.log(`${g.char().name}需支付 ${amount} 奶币，请筹集资金或申请破产。`);
  return false;
 }
 p.money-=amount;
 if(to!==null)g.s.players[to].money+=amount;
 g.recordTransfer(to,amount);
 g.log(`${g.char().name} ${label} −${amount}`);
 return true;
}

/** @param {Game} g @param {string} kind @param {number|string} amount */
export function bank(g,kind,amount){
 if(!g.canBank())return false;
 const value=Math.round(+amount),p=g.player;
 if(!Number.isFinite(value)||value<=0)return false;
 switch(kind){
  case 'deposit':
   if(g.s.phase==='debt'||p.money<value)return false;
   p.money-=value;p.deposit+=value;break;
  case 'withdraw':
   if(p.deposit<value)return false;
   p.deposit-=value;p.money+=value;break;
  case 'borrow':
   if(p.loan+value>RULES.loanLimit)return false;
   p.loan+=value;p.money+=value;break;
  case 'repay':
   if(g.s.phase==='debt'||p.money<value||p.loan<value)return false;
   p.money-=value;p.loan-=value;break;
  default:return false;
 }
 g.log(`${g.char().name}${{deposit:'存入',withdraw:'取出',borrow:'借入',repay:'偿还'}[kind]} ${value} 奶币。`);
 return true;
}

/** @param {Game} g @param {number} stock @param {number|string} qty */
export function trade(g,stock,qty){
 if(!g.manageable()||stockClosed(g.s.round))return false;
 const p=g.player,m=g.s.market[stock],value=+qty;
 if(!Number.isInteger(stock)||stock<0||stock>3||!m||!Number.isInteger(value)||value===0||Math.abs(value)>10000)return false;
 if(value>0&&(g.s.phase==='debt'||p.money<value*m.price)||value<0&&p.stocks[stock]<-value)return false;
 recordTrade(p,stock,value,m.price,g.s.round);
 g.log(`${g.char().name}${value>0?'买入':'卖出'}${Math.abs(value)}股「${m.name}」。`);
 return true;
}

/** @param {Game} g */
export function settle(g){
 if(g.s.phase!=='debt')return false;
 const d=g.s.debt,p=g.player;
 // The debt phase invariant is established by charge() and save validation.
 if(!d||p.money<d.amount)return false;
 p.money-=d.amount;
 if(d.to!==null)g.s.players[d.to].money+=d.amount;
 g.recordTransfer(d.to,d.amount);
 g.log(`${g.char().name}支付${d.label} −${d.amount}`);
 g.s.debt=null;
 g.s.phase='end';
 return true;
}

/** @param {Game} g */
export function marketTick(g){
 for(const m of g.s.market){
  const old=m.price;
  m.price=Math.max(20,Math.min(500,Math.round(m.price*(.88+g.rng()*.24))));
  m.previous=old;
  m.change=m.price-old;
  m.history.push(m.price);
  m.history=m.history.slice(-20);
 }
 for(const p of g.s.players){
  if(!p.alive)continue;
  const interest=Math.floor(p.deposit*RULES.depositInterest),fee=Math.round(p.loan*RULES.loanInterest);
  p.deposit+=interest;
  p.loan+=fee;
  if(interest||fee)g.log(`${g.char(p).name}：存款利息 +${interest}，贷款利息 +${fee}（计入本金）。`);
 }
 g.log(`第 ${g.s.round} 轮开始，奶家股市行情已更新。`);
}
