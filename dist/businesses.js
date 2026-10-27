import {RULES} from './rules-config.js';
export const BUSINESSES={
 residence:{name:'普通住宅',max:5,cost:1,architecture:'residence',text:'逐层加盖，向对手收租；同街区住宅参与联营加收。'},
 chain:{name:'连锁便利店',max:1,cost:1.2,architecture:'tea',text:`只建一级；同一业主每多一间连锁店，所有分店统一提高收费，上限${RULES.chainRentCap}。不参与街区联营。`},
 hotel:{name:'奶家旅馆',max:5,cost:1.4,architecture:'hotel',text:'对手入住1—3回合，按天收住宿费并暂停行动；免租卡可抵消本次入住。'},
 mall:{name:'购物中心',max:5,cost:1.35,architecture:'mall',text:'对手购物抽签，按75%、100%或150%消费倍率收费；楼层越高，消费基数越高。'},
 gas:{name:'奶罐加油站',max:1,cost:.9,architecture:'gas',text:'只建一级；按本次行进步数与交通工具等级收加油费，车辆越高级收费越高。'},
 research:{name:'奶家研究所',max:5,cost:1.2,architecture:'research',text:'不收过路费；业主每出发三次产出所选道具卡。升级解锁更多研发项目，到访可更换项目。'},
 park:{name:'滨河公园',max:1,cost:.45,architecture:'garden',text:'只建一级，不收任何费用；所有停靠者获得10点券，适合轻松公益玩法。'}
};
export const businessType=o=>o?.buildingType||'residence';
export const buildingLimit=o=>BUSINESSES[businessType(o)]?.max||5;
export const researchChoices=level=>['dice','shield','demolish','build','steal'].slice(0,level);
export function businessDeparture(g){const p=g.player;if(p.businessReady)return false;p.businessReady=true;let changed=false;for(const own of g.owned(p)){if(businessType(own)!=='research'||!own.level)continue;const o=g.s.ownership[own.tile.id];o.researchProgress=(o.researchProgress||0)+1;changed=true;if(o.researchProgress>=3){o.researchProgress=0;const choices=researchChoices(o.level),key=choices.includes(o.researchCard)?o.researchCard:choices[0];g.log(`${g.char(p).name}的「${own.tile.name}」研究完成。`);g.giveCard(p,key);}}return changed;}
export function repairBuilding(o){if(o.level===0){o.buildingType='residence';delete o.researchCard;delete o.researchProgress;}else if(businessType(o)==='research'&&!researchChoices(o.level).includes(o.researchCard))o.researchCard=researchChoices(o.level)[0];}

// The collection and decision preview share the same pre-discount outcomes.
export function propertyChargeOptions(g,id){const o=g.s.ownership[id],type=businessType(o),base=g.baseRent(id,o.level);
 if(o.level&&type==='hotel')return [1,2,3].map(days=>({amount:Math.round(base*.65)*days,skip:days,suffix:`住宿${days}回合费用`,label:`${days}回合`}));
 if(o.level&&type==='mall')return [.75,1,1.5].map(rate=>({amount:Math.round(base*rate),skip:0,suffix:`购物消费（${rate*100}%）`,label:`${rate*100}%`}));
 return [{amount:g.rent(id),skip:0,suffix:o.level&&type==='gas'?'加油费':'租金',label:'本次'}];
}
