import * as THREE from './vendor/three.module.js';
import {
  box,
  ball,
  cylinder,
  roundedBox,
  mesh,
  batchStatic,
  sign,
  material,
} from './render-kit.js';
import { forestCabin } from './forest-buildings.js';
import { landmarkBadge } from './world-labels.js';
import { GROUPS } from './content.js';
import { FOREST_BRANCHES, closedBranches } from './forest-rules.js';

function pine(root, x, z, size = 1) {
  const g = new THREE.Group();
  g.position.set(x, 0.13, z);
  g.scale.setScalar(size);
  root.add(g);
  cylinder(g, '#a77e56', [0, 0.7, 0], 0.13, 0.17, 1.3, 10);
  for (const [y, r, color] of [
    [1, 0.78, '#5c876a'],
    [1.48, 0.62, '#73a47c'],
    [1.9, 0.42, '#8db58c'],
  ]) {
    const crown = cylinder(g, color, [0, y, 0], 0.06, r, 0.85, 10);
    crown.rotation.y = 0.2;
  }
  return g;
}
export function forestLandmark(t) {
  if (t.kind !== 'hospital' && t.kind !== 'rest' && t.kind !== 'shop') return forestCabin(t);
  const g = new THREE.Group();
  g.name = 'forest-' + t.kind;
  roundedBox(g, '#dfcba6', [0, 0.04, 0], [2.1, 0.22, 1.85], 0.1);
  if (t.kind === 'hospital' || t.kind === 'rest') {
    roundedBox(g, '#8aa28e', [0, 0.26, 0.13], [1.65, 0.34, 1.25], 0.18);
    const water = mesh(
      g,
      new THREE.CircleGeometry(0.58, 32),
      material('#7ebdbc', 0.28),
      [0, 0.45, 0.13],
      [1.15, 0.8, 1],
    );
    water.rotation.x = -Math.PI / 2;
    for (const side of [-1, 1])
      for (const n of [0, 1, 2])
        ball(g, '#c0c5ad', [side * 0.74, 0.42, -0.35 + n * 0.43], [0.17, 0.17, 0.19]);
    roundedBox(g, '#e6c98c', [0, 1, -0.68], [1.6, 1.4, 0.2], 0.09);
    roundedBox(g, '#557d65', [0, 1.71, -0.68], [1.85, 0.18, 0.5], 0.08);
    sign(g, '温泉', [0, 1.25, -0.55], 0.8, 0.35, { background: '#f9e6b6', color: '#355f50' });
  } else {
    for (const x of [-0.74, 0.74]) cylinder(g, '#aa784e', [x, 0.7, -0.25], 0.06, 0.06, 1.25, 10);
    roundedBox(g, '#73a28b', [0, 1.36, -0.15], [1.9, 0.23, 1.5], 0.12);
    roundedBox(g, '#c18a58', [0, 0.56, 0.25], [1.65, 0.75, 0.7], 0.1);
    for (const x of [-0.5, 0, 0.5]) ball(g, '#eece75', [x, 1, 0.28], [0.18, 0.16, 0.17]);
    sign(g, '山货', [0, 0.72, 0.63], 0.9, 0.3, { background: '#fff0c9', color: '#496953' });
  }
  return g;
}
export function buildForestTown(scene) {
  const w = scene.world,
    tiles = scene.tiles;
  scene.hero = new THREE.Group();
  w.add(scene.hero);
  scene.ripples = [];
  scene.fountainSpray = null;
  const floor = mesh(w, new THREE.PlaneGeometry(240, 240), '#b4c6ad', [0, -0.7, 0]);
  floor.rotation.x = -Math.PI / 2;
  for (const [y, size, color] of [
    [-0.46, [39, 0.6, 29], '#9a8161'],
    [-0.12, [38, 0.24, 28], '#d5b88c'],
    [0.02, [37, 0.22, 27], '#a3bc8e'],
  ])
    roundedBox(w, color, [0, y, 0], size, 0.1);
  const stream = roundedBox(w, '#81b8b4', [0, 0.15, 0], [31, 0.04, 1.4], 0.02);
  stream.rotation.y = -0.05;
  for (const a of tiles)
    for (const to of a.next) {
      const b = tiles[to],
        dx = b.x - a.x,
        dz = b.z - a.z,
        len = Math.hypot(dx, dz),
        road = box(
          w,
          '#dac79c',
          [(a.x + b.x) / 2, 0.18, (a.z + b.z) / 2],
          [1.55, 0.12, len + 0.22],
        );
      road.rotation.y = Math.atan2(dx, dz);
    }
  for (const t of tiles) {
    const g = new THREE.Group();
    g.position.set(t.x, 0.2, t.z);
    g.rotation.y = t.yaw;
    g.userData.dynamic = true;
    w.add(g);
    const tile = roundedBox(
      g,
      t.kind === 'property' ? GROUPS[t.group].color : '#f4df9d',
      [0, 0, 0],
      [1.6, 0.12, 1.25],
      0.05,
    );
    tile.userData.tile = t.id;
    scene.tileMeshes.push(tile);
    if (t.kind !== 'property') {
      const model = forestLandmark(t);
      model.position.set(t.lotX, 0.17, t.lotZ);
      model.rotation.y = t.facing;
      model.userData.dynamic = true;
      scene.tag(model, t.id);
      w.add(model);
      scene.tileMeshes.push(model);
      const badge = landmarkBadge(model, t.id, t.name, '#4b735c');
      w.add(badge);
      scene.buildingBadges.push(badge);
    }
  }
  for (const [x, z] of [
    [-15, -10],
    [-16, 7],
    [-16, -5],
    [-13, 9],
    [13, -10],
    [14, 10],
    [-8, 3],
    [-4, 4],
    [0, 4],
    [4, 3],
    [-8, -3],
    [-4, -4],
    [0, -4],
    [4, -3],
    [-11, 11],
    [10, 11],
    [16, -9],
    [16, 8],
    [-5, 5],
    [4, -5],
    [-3, -5],
    [6, 5],
    [0, 8],
  ])
    if (
      tiles.every((t) => Math.hypot(t.x - x, t.z - z) > 2 && Math.hypot(t.lotX - x, t.lotZ - z) > 2)
    )
      pine(w, x, z, 0.85);
  for (const x of [-4, 5]) {
    const g = new THREE.Group();
    g.position.set(x, 0.2, 0);
    w.add(g);
    for (let z = -0.9; z <= 0.9; z += 0.3) box(g, '#bc9263', [0, 0.12, z], [2, 0.14, 0.26]);
    for (const side of [-1, 1]) {
      box(g, '#7b6953', [side * 0.9, 0.5, 0], [0.08, 0.8, 2]);
      box(g, '#c8aa7f', [side * 0.9, 0.9, 0], [0.15, 0.12, 2.1]);
    }
  }
  scene.weatherGates = FOREST_BRANCHES.map((b) => {
    const group = new THREE.Group();
    w.add(group);
    for (const id of [b.path[0], b.path.at(-1)]) {
      const t = tiles[id],
        g = new THREE.Group();
      g.position.set(t.x, 0.42, t.z);
      g.rotation.y = t.yaw;
      group.add(g);
      box(g, '#ac6852', [0, 0.2, 0], [1.6, 0.15, 0.12]);
      sign(g, '禁入 · 可出', [0, 0.65, 0], 1.6, 0.43, { background: '#fff0cc', color: '#763f31' });
    }
    group.visible = false;
    group.userData.dynamic = true;
    return group;
  });
  batchStatic(w);
}
export function syncForestWeather(scene, state) {
  const closed = closedBranches(state);
  for (const [index, g] of (scene.weatherGates || []).entries()) g.visible = closed.includes(index);
}
