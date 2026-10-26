import {TILES as LEGACY} from './content.js';
// A continuous town circuit with two short side streets. Old saves retain their graph.
const anchors=[[-14,0],[-12,-9],[0,-11],[12,-9],[14,0],[12,9],[0,11],[-12,9],[-14,0]];
/** @type {Record<number,string[]>} */
const special={0:['start','奶家车站'],3:['event','晨光广场'],6:['bank','北岸银行'],10:['shop','奶茶街补给店'],15:['stock','市民证券所'],18:['hospital','奶家医院'],20:['event','街角新闻台'],22:['spirit','大笑神殿'],26:['bank','南岸银行'],30:['shop','港湾补给店'],34:['rest','滨河小窝'],36:['tax','社区清洁站'],38:['event','港口集市'],39:['stock','港湾交易所']};
const names=[['晨光奶茶铺','珍珠小屋','绿眼睛书店','奶盖烘焙屋','巷口茶馆'],['大笑剧场','奶家影社','星光照相馆','回声书屋','奶伴电台'],['奶块工坊','奶罐作坊','奶香面包房','积木修理铺','街角仓库'],['奶家花园','圆肚子旅馆','银杏小院','奶伴公寓','花园餐厅'],['奶币码头','奶家邮局','帆船旅店','港湾餐厅','微笑便利店'],['星野商场','奶蛙设计室','蛋壳展览馆','星野公寓','奶香百货']];
/** @type {import("./game-types.js").Tile[]} */
export const CITY_TILES=Array.from({length:48},(_,id)=>{
 let x,z;if(id<40){const k=Math.floor(id/5),t=(id%5)/5;[x,z]=anchors[k].map((n,axis)=>n+(anchors[k+1][axis]-n)*t);}else{const left=id<44,from=left?35:15,to=left?3:23,t=((left?id-40:id-44)+1)/5;const point=/** @param {number} i */ i=>{const k=Math.floor(i/5),a=(i%5)/5;return anchors[k].map((n,axis)=>n+(anchors[k+1][axis]-n)*a);};const a=point(from),b=point(to);x=a[0]+(b[0]-a[0])*t+Math.sin(t*Math.PI)*(left?4.2:-4.2);z=a[1]+(b[1]-a[1])*t;}
 const group=id<40?Math.min(5,Math.floor(id/7)):id<44?0:3,s=special[id],price=180+group*70+(id%3)*30;
 return{id,x,z,group,kind:s?.[0]||'property',name:s?.[1]||names[group][id%5],price,description:'',next:id<39?[id+1]:id===39?[0]:id<43?[id+1]:id===43?[3]:id<47?[id+1]:[23]};
});
CITY_TILES[35].next=[36,40];CITY_TILES[15].next=[16,44];
for(const t of CITY_TILES){const before=CITY_TILES[t.id<40?(t.id+39)%40:t.id===40?35:t.id===44?15:t.id-1],after=CITY_TILES[t.next[0]],dx=after.x-before.x,dz=after.z-before.z,length=Math.hypot(dx,dz);t.yaw=Math.atan2(-dz,dx);let nx=-dz/length,nz=dx/length;const outward=t.id<40;if(outward&&nx*t.x+nz*t.z<0||!outward&&nx*t.x+nz*t.z>0){nx=-nx;nz=-nz;}t.lotX=t.x+nx*2.3;t.lotZ=t.z+nz*2.3;t.facing=Math.atan2(-nx,-nz);}
/** @param {number} version */
export const mapTiles=version=>version===2?CITY_TILES:LEGACY;
export const MAPS={1:{name:'经典发财岛',description:'不规则环岛与跨岛长捷径。西侧入口通往东岸，东侧入口通往西岸；保存的对局始终保留自己的地图。'},2:{name:'奶家滨河镇',description:'48 格城镇环线，南北双银行与补给店；两条支路各省 3 格。西侧支路跳过起点奖励，东侧支路绕开医院及神殿。'}};
