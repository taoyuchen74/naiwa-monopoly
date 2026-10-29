import { FOREST_EVENTS } from './forest-rules.js';
import { EVENTS } from './content.js';
export const MAP_SCHEMA_VERSION = 1,
  MAX_MAP_BYTES = 131072;
export const TILE_KINDS = Object.freeze([
  'start',
  'property',
  'event',
  'bank',
  'shop',
  'stock',
  'hospital',
  'spirit',
  'rest',
  'tax',
]);
const rootKeys = [
  'schemaVersion',
  'id',
  'name',
  'description',
  'tiles',
  'branches',
  'pointStops',
  'eventPool',
  'startingCash',
  'victory',
];
const tileKeys = [
  'id',
  'kind',
  'name',
  'description',
  'x',
  'z',
  'group',
  'price',
  'next',
  'yaw',
  'lotX',
  'lotZ',
  'facing',
];
const compiled = new WeakMap();
export class MapValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MapValidationError';
  }
}
const fail = (message) => {
  throw new MapValidationError(message);
};
function shape(value, allowed, required = allowed) {
  if (
    !value ||
    typeof value !== 'object' ||
    Array.isArray(value) ||
    Object.keys(value).some((k) => !allowed.includes(k)) ||
    required.some((k) => !Object.hasOwn(value, k))
  )
    fail('字段缺失或包含不支持的字段');
}
const integer = (n, min, max) => Number.isSafeInteger(n) && n >= min && n <= max;
const number = (n, min, max) => typeof n === 'number' && Number.isFinite(n) && n >= min && n <= max;
const text = (s, min, max) =>
  typeof s === 'string' &&
  s.length >= min &&
  s.length <= max &&
  !/[<>&"'\u0000-\u001f\u007f-\u009f]/.test(s);
function budget(value, depth = 0, count = { n: 0 }) {
  if (typeof value === 'string' && value.length > MAX_MAP_BYTES) fail('地图文字过长');
  if (depth > 12 || ++count.n > 5000) fail('地图嵌套过深或节点过多');
  if (value && typeof value === 'object') {
    if (!Array.isArray(value) && ![Object.prototype, null].includes(Object.getPrototypeOf(value)))
      fail('仅支持普通 JSON 对象');
    for (const k of Object.keys(value)) {
      if (
        ['__proto__', 'constructor', 'prototype'].includes(k) ||
        !Object.hasOwn(Object.getOwnPropertyDescriptor(value, k), 'value')
      )
        fail('不支持可执行或原型字段');
      budget(value[k], depth + 1, count);
    }
  } else if (!['string', 'number', 'boolean'].includes(typeof value) && value !== null)
    fail('仅支持 JSON 数据');
}
function frozen(value) {
  if (value && typeof value === 'object') {
    for (const x of Object.values(value)) frozen(x);
    Object.freeze(value);
  }
  return value;
}
/** @param {unknown} raw @returns {import('./domain.js').CustomMap} */
export function parseMap(raw) {
  if (typeof raw === 'string') {
    if (raw.length > MAX_MAP_BYTES || new TextEncoder().encode(raw).length > MAX_MAP_BYTES)
      fail('地图文件不得超过128KiB');
    try {
      raw = JSON.parse(raw);
    } catch {
      fail('地图不是有效 JSON');
    }
  }
  budget(raw);
  const source = JSON.stringify(raw);
  if (new TextEncoder().encode(source).length > MAX_MAP_BYTES) fail('地图文件不得超过128KiB');
  let map = JSON.parse(source);
  if (map?.schemaVersion === 0) {
    shape(map, rootKeys.filter((k) => k !== 'startingCash').concat('startingMoney'));
    map.startingCash = map.startingMoney;
    delete map.startingMoney;
    map.schemaVersion = 1;
  }
  shape(map, rootKeys);
  if (map.schemaVersion !== 1) fail('不支持的地图版本');
  if (
    typeof map.id !== 'string' ||
    !/^[a-z][a-z0-9-]{2,47}$/.test(map.id) ||
    !text(map.name, 1, 32) ||
    !text(map.description, 0, 240)
  )
    fail('地图ID、名称或描述不合法（仅支持纯文本）');
  if (!Array.isArray(map.tiles) || !integer(map.tiles.length, 16, 64)) fail('地图须包含16—64格');
  const n = map.tiles.length,
    ids = new Set();
  for (const t of map.tiles) {
    shape(t, tileKeys, tileKeys.slice(0, 9));
    if (!integer(t.id, 0, n - 1) || ids.has(t.id)) fail('地块ID必须唯一且连续');
    ids.add(t.id);
    if (
      !TILE_KINDS.includes(t.kind) ||
      !text(t.name, 1, 32) ||
      !text(t.description, 0, 240) ||
      !number(t.x, -24, 24) ||
      !number(t.z, -24, 24) ||
      !integer(t.group, 0, 5) ||
      !integer(t.price, 100, 2000)
    )
      fail('地块类型、文字、坐标或价格超出范围');
    if (
      !Array.isArray(t.next) ||
      !integer(t.next.length, 1, 2) ||
      new Set(t.next).size !== t.next.length ||
      t.next.some((id) => !integer(id, 0, n - 1) || id === t.id)
    )
      fail('连接须指向不同的有效地块');
    for (const key of ['yaw', 'facing', 'lotX', 'lotZ'])
      if (t[key] !== undefined && !number(t[key], -32, 32)) fail('布局数值超出范围');
  }
  map.tiles.sort((a, b) => a.id - b.id);
  if (map.tiles[0].kind !== 'start' || map.tiles.filter((t) => t.kind === 'start').length !== 1)
    fail('编号0必须是唯一的起点');
  if (map.tiles.filter((t) => t.kind === 'property').length < 12) fail('至少需要12块地产');
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (Math.hypot(map.tiles[i].x - map.tiles[j].x, map.tiles[i].z - map.tiles[j].z) < 0.25)
        fail('地块坐标过于接近');
  if (!integer(map.startingCash, 1000, 20000)) fail('起始资金须为1000—20000整数');
  shape(map.victory, ['rounds', 'type', 'target']);
  const v = map.victory;
  if (
    ![20, 30, 50, 80].includes(v.rounds) ||
    !['ranking', 'netWorth'].includes(v.type) ||
    (v.type === 'ranking' ? v.target !== 0 : !integer(v.target, 1000, 100000))
  )
    fail('胜利条件超出支持范围');
  if (
    !Array.isArray(map.pointStops) ||
    map.pointStops.length > 16 ||
    new Set(map.pointStops).size !== map.pointStops.length ||
    map.pointStops.some((id) => !integer(id, 0, n - 1))
  )
    fail('点券格引用无效或重复');
  const events = new Set([...EVENTS, ...FOREST_EVENTS].map((e) => e.id));
  if (
    !Array.isArray(map.eventPool) ||
    !integer(map.eventPool.length, 1, EVENTS.length + FOREST_EVENTS.length) ||
    new Set(map.eventPool).size !== map.eventPool.length ||
    map.eventPool.some((id) => !events.has(id))
  )
    fail('事件池须引用现有的唯一事件ID');
  if (!Array.isArray(map.branches) || map.branches.length > 2) fail('最多支持两条支路');
  const forks = new Map();
  for (const branch of map.branches) {
    shape(branch, ['from', 'merge']);
    if (
      !integer(branch.from, 0, n - 1) ||
      !integer(branch.merge, 0, n - 1) ||
      branch.from === branch.merge ||
      forks.has(branch.from)
    )
      fail('分岔声明无效或重复');
    forks.set(branch.from, branch.merge);
  }
  const main = [],
    seen = new Set();
  let at = 0;
  while (!seen.has(at)) {
    seen.add(at);
    main.push(at);
    at = map.tiles[at].next[0];
  }
  if (at !== 0 || main.length < 12) fail('主路必须为包含起点的至少12格闭环');
  const base = new Set(main),
    covered = new Set(main);
  for (const tile of map.tiles) {
    if (tile.next.length !== 2) {
      if (forks.has(tile.id)) fail('声明分岔的格子必须有两条连接');
      continue;
    }
    const merge = forks.get(tile.id);
    if (merge === undefined || !base.has(tile.id) || !base.has(merge))
      fail('分岔或汇合点不在主环，或未声明');
    at = tile.next[1];
    let length = 0;
    const path = new Set();
    while (!base.has(at)) {
      if (path.has(at) || covered.has(at)) fail('支路形成孤立循环或共享中间格');
      path.add(at);
      covered.add(at);
      length++;
      if (map.tiles[at].next.length !== 1) fail('支路中不支持嵌套分岔');
      at = map.tiles[at].next[0];
    }
    if (!length || at !== merge) fail('支路必须经过独立中间格并抵达声明的汇合点');
  }
  if (covered.size !== n) fail('存在从起点不可达的地块');
  // Reverse reachability separately guards every tile's ability to return to start.
  const returns = new Set([0]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const t of map.tiles)
      if (!returns.has(t.id) && t.next.some((id) => returns.has(id))) {
        returns.add(t.id);
        changed = true;
      }
  }
  if (returns.size !== n) fail('并非所有地块都能回到起点');
  return frozen(map);
}
export function compileMap(map) {
  if (compiled.has(map)) return compiled.get(map);
  const tiles = map.tiles.map((t) => ({ ...t, next: [...t.next] }));
  Object.defineProperty(tiles, 'custom', { value: true });
  for (const tile of tiles) {
    Object.freeze(tile.next);
    Object.freeze(tile);
  }
  Object.freeze(tiles);
  compiled.set(map, tiles);
  return tiles;
}
export function previousTile(state, pos, tiles) {
  if (!state.customMap && state.mapVersion !== 4)
    return pos < 40 ? (pos + 39) % 40 : pos === 40 ? 35 : pos === 44 ? 15 : pos - 1;
  const base = [];
  let at = 0;
  do {
    base.push(at);
    at = tiles[at].next[0];
  } while (at !== 0);
  const index = base.indexOf(pos);
  if (index >= 0) return base[(index + base.length - 1) % base.length];
  return tiles.find((t) => t.next.includes(pos)).id;
}
