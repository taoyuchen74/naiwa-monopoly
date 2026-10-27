export const CHARACTERS = [

 {id:'naiwa',estateColor:'#45a078',name:'奶蛙',subtitle:'笑一笑，好运到',color:'#f7c945',accent:'#78a84d',style:'均衡经营',description:'圆肚子、绿眼睛，今天也要捧腹大笑。'},
 {id:'naichong',estateColor:'#d96850',name:'奶虫',subtitle:'慢慢来，也会发财',color:'#f66b45',accent:'#f6c944',style:'稳健储蓄',description:'红色软壳和金黄条纹，安静地攒下自己的小金库。'},
 {id:'naishu',estateColor:'#4888ca',name:'奶鼠',subtitle:'好地段，先到先得',color:'#e4b745',accent:'#79b7c2',style:'积极置业',description:'大耳朵、细尾巴，向每一位奶家人挥挥手。'},
 {id:'naigou',estateColor:'#9564c4',name:'奶狗',subtitle:'开心每一天',color:'#f5d25f',accent:'#8c744a',style:'均衡经营',description:'垂耳、上翘尾巴和开怀笑脸的四足奶伴。'},
 {id:'naidan',estateColor:'#df9139',name:'奶蛋',subtitle:'躺着也能赢',color:'#f8d44c',accent:'#91af55',style:'强势建设',description:'小巧的金黄色蛋形身体、绿眼睛和短短的嘴，滚着也能发财。'},
 {id:'naicha',estateColor:'#c67396',name:'奶茶',subtitle:'暖心补给',color:'#f3c958',accent:'#58372e',style:'补给支援',description:'金色奶茶杯、圆润杯把、深色手套和短腿，笑着为奶伴补给。'}
];
export const GROUPS=[{name:'奶茶街',color:'#ee9e83'},{name:'大笑巷',color:'#edcb56'},{name:'奶块工坊',color:'#a7b9e4'},{name:'奶家花园',color:'#8cbea0'},{name:'奶币港',color:'#70b8ca'},{name:'星野大道',color:'#c79cce'}];
const special={0:['start','奶家起点','每次经过领取 400 奶币'],3:['event','表情包广场'],6:['bank','奶币银行'],9:['shop','奶家便利店'],12:['hospital','奶蛙疗养院'],15:['stock','奶家证券所'],18:['event','野生狗奶摊'],21:['spirit','大笑神殿'],24:['rest','奶蛙的小窝'],27:['shop','奶伴补给站'],30:['bank','奶币储蓄所'],33:['event','奶蛙街舞台'],36:['tax','奶泡清洁站'],39:['stock','奶家交易所']};
const names=['珍珠奶茶铺','奶茶小站','大笑照相馆','奶蛙剧场','奶块面包房','奶虫甜品屋','金耳鼠商店','奶家小花园','快乐洗澡堂','奶茶夜市','奶币码头','大肚子旅馆','绿眼睛书店','奶鼠玩具屋','星野小剧场','奶蛙设计室','奶盖工厂','微笑便利店','奶家餐厅','金蛙小公寓','奶罐车站','蛋壳展览馆','奶香商场','大笑电影院','圆肚子食堂','奶家邮局'];
export const TILES=Array.from({length:48},(_,id)=>{
 let x,z;if(id<40){const angle=2.4-id*Math.PI*2/40;x=14*Math.cos(angle)+.7*Math.sin(angle*3);z=10.7*Math.sin(angle)+.65*Math.cos(angle*2);}else{const from=id<44?35:15,to=id<44?15:35,start=2.4-from*Math.PI*2/40,end=2.4-to*Math.PI*2/40,t=((id<44?id-40:id-44)+1)/5,ax=14*Math.cos(start)+.7*Math.sin(start*3),az=10.7*Math.sin(start)+.65*Math.cos(start*2),bx=14*Math.cos(end)+.7*Math.sin(end*3),bz=10.7*Math.sin(end)+.65*Math.cos(end*2),side=id<44?-1:1;x=ax+(bx-ax)*t;z=az+(bz-az)*t+Math.sin(t*Math.PI)*side*3.7;}

 const s=special[id];const group=id>=40?(id<44?4:5):Math.floor(id/7)%6;
 return {id,x,z,kind:s?.[0]||'property',name:s?.[1]||names[(id-(Math.floor(id/3)))%names.length],description:s?.[2]||'',group,price:180+group*90+(id%3)*30,next:id<39?[id+1]:id===39?[0]:id<43?[id+1]:id===43?[15]:id<47?[id+1]:[35]};
});
TILES[35].next=[36,40]; TILES[15].next=[16,44];
for(const t of TILES){const before=t.id<40?TILES[(t.id+39)%40]:TILES[t.id===40?35:t.id===44?15:t.id-1],after=TILES[t.next[0]],dx=after.x-before.x,dz=after.z-before.z,length=Math.hypot(dx,dz);t.yaw=Math.atan2(-dz,dx);let nx=-dz/length,nz=dx/length;if(t.id<40&&nx*t.x+nz*t.z<0||t.id>=40&&nz*(t.id<44?-1:1)<0){nx=-nx;nz=-nz;}t.lotX=t.x+nx*2.3;t.lotZ=t.z+nz*2.3;t.facing=Math.atan2(-nx,-nz);}
export const STOCKS=[{id:0,name:'奶茶实业',short:'茶',price:100,group:0},{id:1,name:'大笑传媒',short:'笑',price:120,group:1},{id:2,name:'奶块工坊',short:'块',price:80,group:2},{id:3,name:'奶币物流',short:'港',price:150,group:4}];
// Card prices use coupons, separately from property cash.
export const CARDS={
 dice:{name:'心想事成卡',icon:'⚄',price:30,description:'掷骰前指定本次总步数 1—6；配合落点预览选择买地、补给或避租。',target:'steps'},
 block:{name:'奶块路障',icon:'▦',price:20,description:'前方 1—6 格放路障，首名经过者停下；可以截住对手，也能停在心仪地块。',target:'ahead'},
 turn:{name:'奶蛙回头卡',icon:'↶',price:20,description:'本回合沿来路倒退；可以避开高租金，但倒退不领取起点奖励。',target:'self'},
 shield:{name:'快乐免租卡',icon:'⌂',price:35,description:'抵消下一笔租金，保留至触发。可与控骰、回头等卡组合使用。',target:'self'},
 steal:{name:'奶鼠抢地卡',icon:'⚑',price:45,description:'仅在抵达对手地产、付租前收购该地产；向业主支付地产成本的 125%，可打断其街区经营。',target:'enemy'},
 recover:{name:'野生狗奶',icon:'♧',price:20,description:'移除休养与霉运，获得 80 奶币补给。',target:'self'},
 demolish:{name:'奶块拆除卡',icon:'♜',price:25,description:'拆去 8 格范围内一层房屋，或清除路障；不会夺走土地。',target:'enemyBuilt'},
 build:{name:'奶家工程队',icon:'⚒',price:65,description:'为 8 格范围内自己的地产免费加盖一层，不占常规建设次数。',target:'own'},
 slow:{name:'慢慢走卡',icon:'♧',price:25,description:'自己接下来三次行动各走 1 格，便于连续买地或享受当地建设折扣。',target:'self'}
};
export const SPIRITS={fortune:{name:'大笑财神',icon:'✦',description:'非交易收入增加 25%'},misfortune:{name:'奶泡霉神',icon:'☁',description:'租金和费用增加 25%'},guardian:{name:'奶蛋守护',icon:'◉',description:'抵挡一次负面事件'}};
export const VEHICLES=[{id:0,name:'步行',dice:1,price:0},{id:1,name:'奶蛙自行车',dice:2,price:600},{id:2,name:'奶罐小车',dice:3,price:1200}];
export const EVENTS=[
 {name:'全网一起捧腹大笑',art:'theater',text:'你的大笑表情包走红，收获 280 奶币。',kind:'gain',amount:280,stock:1,change:.12},
 {name:'野生狗奶补给',art:'recover',text:'收到奶家人的补给，恢复休养并获一瓶野生狗奶。',kind:'recover'},
 {name:'奶茶洒了一地',art:'tea',text:'支付清洁费用 180 奶币。',kind:'loss',amount:180},
 {name:'选择你的奶伴',art:'dice',text:'奶伴送来一张随机道具卡。',kind:'card'},
 {name:'奶蛙街舞开场',art:'theater',text:'演出收获 200 奶币，大笑传媒行情上涨。',kind:'gain',amount:200,stock:1,change:.1},
 {name:'奶块工厂停电',art:'factory',text:'修理设备支付 150 奶币，奶块工坊行情回落。',kind:'loss',amount:150,stock:2,change:-.12},
 {name:'奶茶新品大卖',art:'tea',text:'品鉴活动获得 160 奶币，奶茶实业行情上涨。',kind:'gain',amount:160,stock:0,change:.12},
 {name:'奶蛙爱洗澡',art:'recover',text:'洗香香，休息一回合，获补贴 100 奶币。',kind:'rest',amount:100},
 {name:'奶币港口顺风',art:'vehicle',text:'运输收入 220 奶币，奶币物流行情上涨。',kind:'gain',amount:220,stock:3,change:.1},
 {name:'神秘奶罐',art:'shield',text:'打开奶罐，请一位奶家神灵来做客。',kind:'spirit'}
];

export const POINT_STOPS=[2,8,14,20,26,32,38,42,46];
