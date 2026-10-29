import { BUILTIN_MAP_DATA } from './builtin-maps.js';
import { FOREST_BRANCHES, FOREST_EVENTS } from './forest-rules.js';
const specials = {
  0: ['start', '松果车站'],
  3: ['event', '山货集市'],
  6: ['bank', '林间银行'],
  9: ['shop', '松果补给站'],
  12: ['hospital', '温泉疗养院'],
  15: ['stock', '森林证券所'],
  18: ['event', '森林布告栏'],
  21: ['spirit', '古树祠堂'],
  24: ['rest', '温泉旅馆'],
  27: ['shop', '山货商店'],
  30: ['bank', '山谷银行'],
  33: ['event', '泉畔小广场'],
  36: ['tax', '山道养护站'],
  39: ['stock', '山货交易所'],
};
const names = ['松针木屋', '溪畔茶馆', '榛果工坊', '枫叶旅店', '泉边食堂', '云杉书屋'];
const tiles = Array.from({ length: 48 }, (_, id) => {
  const base = id < 40 ? id : FOREST_BRANCHES[id < 44 ? 0 : 1].from;
  let x = 14.4 * Math.cos(2.4 - (base * Math.PI) / 20),
    z = 10.6 * Math.sin(2.4 - (base * Math.PI) / 20);
  if (id >= 40) {
    const b = FOREST_BRANCHES[id < 44 ? 0 : 1],
      t = ((id < 44 ? id - 40 : id - 44) + 1) / 5,
      a = 2.4 - (b.from * Math.PI) / 20,
      e = 2.4 - (b.merge * Math.PI) / 20;
    x = 14.4 * ((1 - t) * Math.cos(a) + t * Math.cos(e));
    z =
      10.6 * ((1 - t) * Math.sin(a) + t * Math.sin(e)) +
      (id < 44 ? -1 : 1) * Math.sin(t * Math.PI) * 1.8;
  }
  const special = specials[id],
    kind = special?.[0] || 'property';
  return {
    id,
    kind,
    name: special?.[1] || names[id % names.length] + (Math.floor(id / 6) + 1),
    description:
      id === 0
        ? '经过起点领取基础收入'
        : kind === 'event'
          ? '森林小镇事件'
          : kind === 'property'
            ? '经营林间地产，选择合适的建筑'
            : '森林温泉小镇公共设施',
    x,
    z,
    group: id % 6,
    price: kind === 'property' ? 240 + (id % 7) * 40 : 300,
    next: id < 40 ? [(id + 1) % 40] : [id === 43 ? 16 : id === 47 ? 36 : id + 1],
  };
});
for (const b of FOREST_BRANCHES) tiles[b.from].next.push(b.path[0]);
for (const t of tiles) {
  const before =
      tiles[t.id < 40 ? (t.id + 39) % 40 : t.id === 40 ? 8 : t.id === 44 ? 28 : t.id - 1],
    after = tiles[t.next[0]],
    dx = after.x - before.x,
    dz = after.z - before.z,
    n = Math.hypot(dx, dz);
  let nx = -dz / n,
    nz = dx / n;
  if (nx * t.x + nz * t.z < 0) {
    nx = -nx;
    nz = -nz;
  }
  t.yaw = Math.atan2(-dz, dx);
  t.lotX = t.x + nx * 2.3;
  t.lotZ = t.z + nz * 2.3;
  t.facing = Math.atan2(-nx, -nz);
}
Object.defineProperty(tiles, 'forest', { value: true });
export const FOREST_MAP = {
  schemaVersion: 1,
  id: 'forest-onsen',
  name: '森林温泉小镇',
  description: '松林、温泉与山谷支路；天气改变通行机会',
  tiles,
  branches: FOREST_BRANCHES.map(({ from, merge }) => ({ from, merge })),
  pointStops: [2, 8, 14, 20, 26, 32, 38, 42, 46],
  eventPool: [...BUILTIN_MAP_DATA[2].eventPool, ...FOREST_EVENTS.map((e) => e.id)],
  startingCash: 3200,
  victory: { rounds: 50, type: 'ranking', target: 0 },
};
