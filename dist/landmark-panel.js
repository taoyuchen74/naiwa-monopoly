import {accountPlayer} from './hotseat.js';
import {RULES,bankClosed,stockClosed} from './rules-config.js';
import {art,landmarkImage} from './illustrations.js';
import {hasTalent} from './talents.js?v=16';

const theme={start:['起点','#a18a3c'],bank:['银行','#477eb5'],stock:['证券所','#7b65b0'],shop:['补给站','#cf8342'],hospital:['疗养院','#cc615d'],tax:['清洁站','#558e88'],rest:['小窝','#5b8b55'],spirit:['神殿','#af8535'],event:['事件广场','#ae6686']};
const rule=(icon,title,text)=>({icon,title,text});
export function landmarkInfo(g,t){
 const p=(accountPlayer(g)||g.player),mine=g.player.id===p.id&&p.human&&g.manageable(),income=n=>Math.round(n*(p.spirit==='fortune'?1.25:1)),fee=n=>g.payment(n,null,p),[type,accent]=theme[t.kind];
 let value,unit,summary,rules,status={tone:'neutral',text:'公共地点不可购买；移动到这里时按规则触发。'},action=null;
 if(t.kind==='start'){
  value='+'+income(RULES.startIncome+(hasTalent(g,p,'naiwa')?RULES.startTalentBonus:0));unit='奶币 · 正向经过奖励';summary='绕岛经营一圈，再带着补给出发。';
  rules=[rule('dice','经过就能领','正向经过或停在起点时发放，倒退不领奖。'),rule('tea',`额外 ${RULES.startCoupons} 点券`,`点券最多持有 ${RULES.couponCap}，可用于补给站买卡。`),rule('house','按你的当前状态预览','已计入奶蛙天赋与财运；再次经过时重新结算。')];
 }else if(t.kind==='bank'){
  value=RULES.depositInterest*100+'%';unit='每轮存款利息';summary='把现金存起来，也能借款周转。';
  rules=[rule('bank','经过后开放本回合业务','可存款、取款、借款或还款；点击地图本身不会获得办理资格。'),rule('stocks',`存款 ${RULES.depositInterest*100}% · 贷款 ${RULES.loanInterest*100}%`,`每轮计息并计入本金。新增借款后的贷款余额上限 ${RULES.loanLimit.toLocaleString('zh-CN')}。`),rule('slow','周三休息','每七轮的第三轮不办理业务，仍可查看账户。')];
  status={tone:bankClosed(g.s.round)?'closed':mine&&g.canBank()?'ready':'neutral',text:bankClosed(g.s.round)?'今天周三，银行休息。':!mine?'等到你的经营阶段，可查看自己的账户。':g.canBank()?'本回合已到访，可以办理银行业务。':'尚未到访银行，当前只能查看账户。'};
  action={panel:'bank',label:'查看我的银行账户',enabled:mine};
 }else if(t.kind==='stock'){
  value='4';unit='家奶家企业';summary='看走势、算成本，再决定买入或卖出。';
  rules=[rule('stocks','报价每轮更新','四家企业行情不同，也会受到随机事件影响。'),rule('bank','自己的经营阶段可远程交易','无需到证券所；周日休市，筹款时可以卖股。'),rule('house','盈亏清楚记账','股票页展示买入均价、持仓浮盈和卖出已实现盈亏。')];
  status={tone:stockClosed(g.s.round)?'closed':mine?'ready':'neutral',text:stockClosed(g.s.round)?'今天周日，休市期间仍可查看持仓。':mine?'交易日开放，可查看行情与持仓。':'电脑回合：打开行情只查看你的持仓。'};
  action={panel:'stocks',label:'查看股市与我的持仓',enabled:true};
 }else if(t.kind==='shop'){
  value='+30';unit='点券 · 停靠奖励';summary='停靠领随机卡，到店挑选下次出行的装备。';
  rules=[rule('tea','停靠补给','点券最多 150；另送一张随机卡，满包会按规则补偿奶币。'),rule('dice','用点券选卡','每回合最多买 2 张，卡包最多容纳 15 张。'),rule('vehicle','用奶币升级交通工具','自行车可选 1—2 颗骰子，小车可选 1—3 颗。')];
  status={tone:mine&&g.canShop()?'ready':'neutral',text:mine&&g.canShop()?'你已到店，可以购买道具和交通工具。':'需在自己的经营阶段停在补给站，才能购买。'};
  action={panel:'shop',label:mine&&g.canShop()?'挑选道具与交通工具':'先浏览补给商品',enabled:mine};
 }else if(t.kind==='hospital'){
  value='−'+fee(100);unit='奶币 · 按你的当前状态';summary='停靠后支付疗养费，并休养一回合。';
  rules=[rule('recover','下次行动休养一次','不会因路过而入院，只有停靠才触发。'),rule('tea','野生狗奶可恢复','下回合掷骰前用卡，可移除休养状态。'),rule('bank','费用按到达时状态结算','已计入当前天赋与霉运；资金不足时先筹款。')];
 }else if(t.kind==='tax'){
  value='−'+fee(180);unit='奶币 · 按你的当前状态';summary='停靠时缴纳清洁费，街道也要有人照顾。';
  rules=[rule('recover','停靠收费，经过不收','每次到达结算，公共地点不会变成私人地产。'),rule('shield','按角色状态计算费用','奶茶天赋可减半，霉运会增加费用。'),rule('bank','不足时可以筹款','存款自动补足现金；仍不足时可取款、卖股或变卖地产。')];
 }else if(t.kind==='rest'){
  value='+'+income(120);unit='奶币 · 按你的当前状态';summary='回到小窝领取补贴，下一回合照常出发。';
  rules=[rule('house','停靠领取补贴','路过不发放，也不会额外暂停下一次行动。'),rule('tea','财运让补贴更多','当前预览已计入财运的收入加成。'),rule('dice','先规划，再出发','补给后可继续整理卡包，准备下一回合。')];
 }else if(t.kind==='spirit'){
  value='3';unit='种神灵 · 随机相遇';summary='财运、霉运或守护，陪伴接下来的旅途。';
  rules=[rule('stocks','大笑财神','非交易收入增加 25%。'),rule('slow','奶泡霉神','租金和费用增加 25%。'),rule('shield','奶蛋守护','抵挡一次负面事件或霉运；神灵持续三个后续回合，同类刷新、异类替换。')];
 }else{
  value='?';unit='随机事件';summary='奶伴、大笑和意外，每次停靠都有新消息。';
  rules=[rule('theater','停靠揭晓事件','经过不会触发，查看地图也不会提前抽取。'),rule('stocks','可能影响资金与行情','收入、损失、休养或企业报价，以当次事件说明为准。'),rule('shield','守护抵挡负面影响','守护可抵挡负面事件，触发后会消耗。')];
 }
 return {type,accent,value,unit,summary,rules,status,action};
}

export function landmarkPanel(g,t){
 const d=landmarkInfo(g,t);
 return `<div class="landmark-detail" style="--landmark-accent:${d.accent}"><div class="landmark-hero"><div class="landmark-model">${landmarkImage(t)}</div><div class="landmark-intro"><span class="landmark-type">公共地点 · ${d.type}</span><strong>${d.value}</strong><span class="landmark-unit">${d.unit}</span><p>${d.summary}</p></div></div><ul class="landmark-rules">${d.rules.map(r=>`<li><span>${art(r.icon)}</span><div><b>${r.title}</b><p>${r.text}</p></div></li>`).join('')}</ul><p class="landmark-status ${d.status.tone}">${d.status.text}</p>${d.action?`<button class="primary landmark-action" data-act="panel" data-panel="${d.action.panel}" ${d.action.enabled?'':'disabled'}>${d.action.label}</button>`:''}<p class="landmark-caption">地图第 ${t.id+1} 格 · 查看地点不会消耗回合或触发奖励。</p></div>`;
}
