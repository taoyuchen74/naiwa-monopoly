import * as THREE from './vendor/three.module.js';
import { roundedBox, box, cylinder, ball, sign } from './render-kit.js';
const colors = {
  bank: '#719c83',
  stock: '#67989a',
  hospital: '#b68172',
  shop: '#c6a267',
  spirit: '#9d9067',
  rest: '#8eae7a',
  tax: '#9c8a77',
  start: '#c6a366',
  event: '#b98f9b',
};
export function forestCabin(t) {
  const g = new THREE.Group(),
    color = colors[t.kind] || '#86a17a',
    height = t.kind === 'stock' ? 1.8 : 1.2;
  g.name = 'forest-' + t.kind;
  roundedBox(g, '#d7bd94', [0, 0.1, 0], [2, 0.25, 1.7], 0.1);
  roundedBox(g, '#e6d1a8', [0, height / 2 + 0.25, 0], [1.65, height, 1.25], 0.14);
  roundedBox(g, color, [0, height + 0.35, 0], [1.95, 0.3, 1.6], 0.14);
  for (const x of [-0.67, 0.67])
    box(g, '#a98054', [x, height / 2 + 0.25, 0.64], [0.1, height, 0.08]);
  roundedBox(g, '#6e9291', [-0.42, 0.8, 0.66], [0.42, 0.4, 0.05], 0.02);
  roundedBox(g, '#a17b51', [0.3, 0.65, 0.66], [0.45, 0.9, 0.07], 0.03);
  sign(
    g,
    { start: '起点', bank: '银行', stock: '证券', tax: '养护', event: '事件', spirit: '古树' }[
      t.kind
    ] || t.name,
    [0, height + 0.35, 0.83],
    1,
    0.28,
    { background: '#fff0c9', color: '#3e5f50' },
  );
  if (t.kind === 'spirit') {
    cylinder(g, '#a77b50', [0, 1.6, -0.1], 0.18, 0.24, 2, 12);
    for (const x of [-0.5, 0, 0.5]) ball(g, '#729e75', [x, 2.4, -0.1], [0.7, 0.65, 0.65]);
  }
  if (t.kind === 'event') {
    roundedBox(g, '#fff0c9', [-0.3, 0.9, 0.8], [0.7, 0.6, 0.05], 0.02);
    sign(g, '！', [-0.3, 0.9, 0.84], 0.35, 0.4, { color: '#9c6149', background: '#fff0c9' });
  }
  return g;
}
export function forestProperty(t, level, color) {
  const g = new THREE.Group(),
    type = t.buildingType || 'residence';
  g.name = 'forest-property-' + t.id;
  g.userData = { level, ownerColor: color, architecture: 'forest-' + type };
  roundedBox(g, '#d7c394', [0, 0.05, 0], [2, 0.18, 1.75], 0.08);
  if (type === 'park') {
    for (const x of [-0.5, 0.5]) {
      cylinder(g, '#a48254', [x, 0.45, 0], 0.06, 0.08, 0.8, 10);
      ball(g, '#82aa7e', [x, 1, 0], [0.45, 0.55, 0.45]);
    }
    roundedBox(g, '#7fb3ac', [0, 0.19, 0.4], [1.25, 0.15, 0.65], 0.07);
    return g;
  }
  const floors = ['chain', 'gas'].includes(type) ? 1 : level,
    h = 0.55 + floors * 0.43;
  roundedBox(g, '#ead8b0', [0, h / 2 + 0.16, 0], [1.6, h, 1.25], 0.1);
  roundedBox(g, color, [0, h + 0.2, 0], [1.86, 0.22, 1.54], 0.1);
  for (let f = 0; f < floors; f++)
    for (const x of [-0.46, 0.43])
      roundedBox(g, '#6f9e9c', [x, 0.53 + f * 0.43, 0.65], [0.35, 0.27, 0.045], 0.02);
  for (const x of [-0.7, 0.7]) box(g, '#ad8658', [x, h / 2 + 0.15, 0.66], [0.08, h, 0.07]);
  if (type === 'hotel')
    for (let f = 0; f < floors; f++) box(g, color, [0, 0.45 + f * 0.43, 0.83], [1.45, 0.08, 0.35]);
  if (type === 'gas') {
    roundedBox(g, color, [0, 1.35, 0.25], [2, 0.18, 1.6], 0.08);
    for (const x of [-0.55, 0.55])
      roundedBox(g, '#b99268', [x, 0.45, 0.9], [0.28, 0.65, 0.28], 0.04);
  }
  if (type === 'research') {
    ball(g, '#d4dfd0', [0, h + 0.55, 0], [0.4, 0.4, 0.4]);
    cylinder(g, color, [0, h + 0.35, 0], 0.48, 0.48, 0.07, 20);
  }
  if (type === 'mall')
    roundedBox(g, '#91b6ad', [0, h / 2 + 0.18, 0.67], [1.18, h * 0.65, 0.06], 0.04);
  if (type === 'chain')
    for (const x of [-0.6, -0.2, 0.2, 0.6])
      box(g, x < 0 ? color : '#fff0ce', [x, 1, 0.85], [0.4, 0.2, 0.5]);
  return g;
}
