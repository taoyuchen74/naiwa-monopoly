// Original fan-game talents: passive character differentiation inspired by Richman.
export const TALENTS={
 naiwa:{name:'稳稳经营',icon:'⌂',text:'常规加盖花费减少 15%；正向经过起点额外获得 80 奶币。'},
 naichong:{name:'细水长流',icon:'▱',text:'每次出发领取 60 奶币；到店购卡只需原价的 80% 点券。'},
 naishu:{name:'精打细算',icon:'⚑',text:'支付租金减少 20%；购地卡收购价再打九折，业主按实际成交价收款。'},
 naigou:{name:'傻狗有傻福',icon:'♧',text:'每次出发有一半机会捡到 240 奶币，否则摔丢最多 40 奶币；步数不受影响。'},
 naidan:{name:'躺着也能赢',icon:'★',text:'每次出发自动获得 75 奶币；每四次出发，为自己最低级的一块地产免费加盖一层。无需操作，最高五级。',strong:true},
 naicha:{name:'暖心补给',icon:'♡',text:'非租金费用减少 50%；每三次出发补充 20 点券和一张野生狗奶。满包按原规则补偿。'}
};
export const hasTalent=(g,p,id=p.character)=>g.s.talents===true&&p.character===id;
export function departureTalent(g){const p=g.player;if(!g.s.talents||p.talentReady)return false;p.talentReady=true;p.departures=(p.departures||0)+1;const id=p.character;
 if(id==='naichong')g.income(p,60,'【细水长流】');
 if(id==='naigou'){if(g.int(2)===0)g.income(p,240,'【傻狗有傻福】捡到钱包');else{const loss=Math.min(40,p.money);p.money-=loss;g.log(`奶狗【傻狗有傻福】摔丢 ${loss} 奶币，拍拍肚子继续走。`);}}
 if(id==='naidan'){g.income(p,75,'【躺着也能赢】');const own=p.departures%4===0&&g.owned(p).filter(o=>o.level<g.buildingLimit(o)).sort((a,b)=>a.level-b.level||a.tile.id-b.tile.id)[0];if(own){g.s.ownership[own.tile.id].level++;g.log(`奶蛋【躺着也能赢】「${own.tile.name}」免费加盖至 ${own.level+1} 级。`);}}
 if(id==='naicha'&&p.departures%3===0){g.coupons(p,20);g.log('奶茶【暖心补给】获得 20 点券。');g.giveCard(p,'recover');}return true;
}
