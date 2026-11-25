import { FountainSpray, fountainJetPath } from './fountain.js';
import { scenicDetails } from './scenery.js';
import { waterMaterial } from './surfaces.js';
import * as THREE from './vendor/three.module.js';
import { GROUPS } from './content.js';
import {
  mesh,
  detailBox as box,
  detailBoxGeometry,
  material,
  cylinder,
  tube,
  signTexture,
  batchStatic,
  shareMaterial,
} from './render-kit.js';
import { displayLandmark } from './buildings.js';
import { landmarkBadge } from './world-labels.js';
import { CITY_TILES } from './maps.js';
import { ceramicLandmarkPart, ceramicProp } from './ceramic-map-models.js';
import { buildForestTown } from './forest-scene.js';

export const plotPosition = (tile) => new THREE.Vector3(tile.lotX, 0.14, tile.lotZ);
const specialColors = {
  start: '#f2cd54',
  bank: '#5f9fc1',
  hospital: '#e1837b',
  stock: '#9c8bd1',
  shop: '#e8a25e',
  spirit: '#d7b658',
  event: '#d883a3',
  rest: '#82b678',
  tax: '#78b6ae',
};
const badgeNames = {
  bank: '银行',
  hospital: '疗养院',
  stock: '证券所',
  shop: '补给站',
  spirit: '神殿',
  event: '事件',
  rest: '小窝',
  tax: '清洁站',
  start: '起点',
};
const badgeColors = {
  bank: '#447497',
  hospital: '#a54440',
  stock: '#5b4b8e',
  shop: '#98502d',
  spirit: '#8b6524',
  event: '#934564',
  rest: '#3f713e',
  tax: '#306b64',
  start: '#77622d',
};
const palettes = {
  city: { border: '#e1cda5', road: '#667b7b', square: '#718784', mark: '#ecdfb2', riverWidth: 0.6 },
  island: {
    border: '#e5b984',
    road: '#577b82',
    square: '#63848a',
    mark: '#ffebb8',
    riverWidth: 0.81,
  },
};
const roadArrow = shareMaterial(
  new THREE.MeshBasicMaterial({ color: '#efddb1', side: THREE.DoubleSide }),
);

function roads(scene, colors, center) {
  const { tiles, world } = scene;
  const seen = new Set();
  const arrows = [];
  for (const a of tiles) {
    for (const id of a.next) {
      const b = tiles[id],
        dx = b.x - a.x,
        dz = b.z - a.z,
        distance = Math.hypot(dx, dz);
      const ux = dx / distance,
        uz = dz / distance,
        ax = a.x + dx * 0.62,
        az = a.z + dz * 0.62;
      arrows.push(
        ax + ux * 0.2,
        0.179,
        az + uz * 0.2,
        ax - ux * 0.13 - uz * 0.1,
        0.179,
        az - uz * 0.13 + ux * 0.1,
        ax - ux * 0.13 + uz * 0.1,
        0.179,
        az - uz * 0.13 - ux * 0.1,
      );
      const key = Math.min(a.id, id) + ':' + Math.max(a.id, id);
      if (seen.has(key)) continue;
      seen.add(key);
      const yaw = Math.atan2(dx, dz),
        x = (a.x + b.x) / 2,
        z = (a.z + b.z) / 2;
      box(world, colors.border, [x, 0.074, z], [2.13, 0.039, distance + 0.1]).rotation.y = yaw;
      box(world, colors.road, [x, 0.117, z], [1.7, 0.032, distance + 0.1]).rotation.y = yaw;
      if (distance > 1.5)
        box(
          world,
          colors.mark,
          [x, 0.141, z],
          [0.036, 0.011, Math.min(0.42, distance * 0.3)],
        ).rotation.y = yaw;
      const before = a.z - center(a.x),
        after = b.z - center(b.x);
      if (before * after > 0 || Math.abs(before - after) < 0.01) continue;
      const fraction = before / (before - after),
        bridge = new THREE.Group();
      ceramicProp('bridge', bridge);
      bridge.rotation.y = yaw;
      bridge.position.set(a.x + dx * fraction, 0, a.z + dz * fraction);
      world.add(bridge);
    }
  }
  const geometry = new THREE.BufferGeometry().setAttribute(
    'position',
    new THREE.Float32BufferAttribute(arrows, 3),
  );
  mesh(world, geometry, roadArrow).castShadow = false;
}

function spaces(scene, colors, mapVersion) {
  const { tiles, world } = scene;
  // Each rectangular surface keeps its tile ID for ray picking.
  const tileIds = tiles.map((tile) => tile.id);
  const surface = new THREE.InstancedMesh(detailBoxGeometry, material(colors.square), tiles.length);
  const curbs = new THREE.InstancedMesh(detailBoxGeometry, material('#ffffff'), tiles.length);
  surface.name = 'board-tile-surfaces';
  curbs.name = 'board-tile-curbs';
  surface.castShadow = false;
  curbs.castShadow = true;
  surface.receiveShadow = curbs.receiveShadow = true;
  const matrix = new THREE.Matrix4();
  const surfaceSize = new THREE.Vector3(1.6, 0.025, 1.2);
  const curbSize = new THREE.Vector3(1.55, 0.069, 0.12);
  const tint = new THREE.Color();
  for (const [index, tile] of tiles.entries()) {
    cylinder(world, colors.border, [tile.x, 0.074, tile.z], 1.05, 1.05, 0.039, 20);
    cylinder(world, colors.road, [tile.x, 0.12, tile.z], 0.83, 0.83, 0.032, 20);
    matrix.makeRotationY(tile.yaw).setPosition(tile.x, 0.15, tile.z).scale(surfaceSize);
    surface.setMatrixAt(index, matrix);
    matrix
      .makeRotationY(tile.yaw)
      .setPosition(tile.x + Math.sin(tile.yaw) * 0.52, 0.2, tile.z + Math.cos(tile.yaw) * 0.52)
      .scale(curbSize);
    curbs.setMatrixAt(index, matrix);
    const finish = tile.kind === 'property' ? GROUPS[tile.group].color : specialColors[tile.kind];
    curbs.setColorAt(index, tint.set(finish));
    if (tile.kind === 'property') continue;
    const model = displayLandmark(tile, mapVersion);
    model.position.copy(plotPosition(tile));
    model.rotation.y = tile.facing;
    model.userData.dynamic = true;
    scene.tag(model, tile.id);
    world.add(model);
    scene.tileMeshes.push(model);
    const badge = landmarkBadge(model, tile.id, badgeNames[tile.kind], badgeColors[tile.kind]);
    world.add(badge);
    scene.buildingBadges.push(badge);
  }
  for (const batch of [surface, curbs]) {
    batch.userData.tileIds = tileIds;
    batch.computeBoundingSphere();
    world.add(batch);
    scene.tileMeshes.push(batch);
  }
  spaceNumbers(world, tiles, colors);
}

function spaceNumbers(world, tiles, colors) {
  const columns = 8,
    cellWidth = 64,
    cellHeight = 34;
  const canvas = document.createElement('canvas');
  canvas.width = columns * cellWidth;
  canvas.height = Math.ceil(tiles.length / columns) * cellHeight;
  const ctx = canvas.getContext('2d');
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 24px "Microsoft YaHei",sans-serif';
  const positions = [],
    uvs = [],
    indices = [];
  const corners = [
    [-0.29, 0.255],
    [0.29, 0.255],
    [0.29, 0.065],
    [-0.29, 0.065],
  ];
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i],
      px = (i % columns) * cellWidth,
      py = Math.floor(i / columns) * cellHeight;
    ctx.fillStyle = colors.square;
    ctx.fillRect(px + 2, py + 2, cellWidth - 4, cellHeight - 4);
    ctx.fillStyle = '#fff3cf';
    ctx.fillText(String(tile.id + 1), px + cellWidth / 2, py + cellHeight / 2);
    const cosine = Math.cos(tile.yaw),
      sine = Math.sin(tile.yaw);
    for (const [x, z] of corners)
      positions.push(tile.x + x * cosine + z * sine, 0.176, tile.z + z * cosine - x * sine);
    const left = (px + 2) / canvas.width,
      right = (px + cellWidth - 2) / canvas.width;
    const top = 1 - (py + 2) / canvas.height,
      bottom = 1 - (py + cellHeight - 2) / canvas.height;
    uvs.push(left, bottom, right, bottom, right, top, left, top);
    const n = 4 * i;
    indices.push(n, n + 1, n + 2, n, n + 2, n + 3);
  }
  const atlas = new THREE.CanvasTexture(canvas);
  atlas.colorSpace = THREE.SRGBColorSpace;
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  const labels = mesh(
    world,
    geometry,
    new THREE.MeshBasicMaterial({ map: atlas, depthWrite: false }),
  );
  labels.name = 'board-space-numbers';
  labels.castShadow = false;
  labels.receiveShadow = false;
}

function flow(world, center, width) {
  const positions = [],
    indices = [];
  for (let i = 0; i <= 48; i++) {
    const x = -17 + (i * 34) / 48,
      z = center(x);
    const half = width * (1 + 0.12 * Math.cos(x * 0.53));
    positions.push(x, 0.046, z - half, x, 0.046, z + half);
    if (i < 48) {
      const k = i * 2;
      indices.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
  }
  const geometry = new THREE.BufferGeometry().setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const water = mesh(world, geometry, waterMaterial(true));
  water.name = 'ceramic-river';
  water.castShadow = false;
  water.receiveShadow = false;
}

function props(scene, coastal, center) {
  const { tiles, world } = scene;
  const safely = (x, z, gap) =>
    tiles.every(
      (t) => Math.hypot(t.x - x, t.z - z) > gap && Math.hypot(t.lotX - x, t.lotZ - z) > gap,
    );
  const add = (key, x, z, yaw = 0, scale = 1) => {
    const setting = new THREE.Group();
    setting.position.set(x, 0.04, z);
    setting.rotation.y = yaw;
    setting.scale.setScalar(scale);
    if (key === 'promenade') ceramicLandmarkPart(key, setting);
    else ceramicProp(key, setting);
    world.add(setting);
    return setting;
  };
  const grove = coastal ? 'palm' : 'willow';
  for (const [x, z, s] of [
    [-10, -5, 0.92],
    [-7, -6, 1],
    [-6, 6, 0.86],
    [-3, -5, 0.8],
    [-2, 6, 0.82],
    [2, 4, 0.83],
    [4, 7, 1],
    [6, -6, 0.91],
    [7, 4, 0.83],
    [9, -3, 0.91],
    [11, 4, 0.92],
    [-11, 3, 0.82],
  ]) {
    if (safely(x, z, 1.82) && Math.abs(z - center(x)) > 1.8) add(grove, x, z, x * 0.4, s);
  }
  const benches = coastal ? 'bench' : 'promenade';
  for (const [x, z] of [
    [-6, -2.6],
    [-1.9, 2.05],
    [4.3, -3],
    [7, 2.7],
  ])
    if (safely(x, z, 1.65)) add(benches, x, z, z > 0 ? Math.PI : 0);
  if (coastal) {
    for (const [x, z] of [
      [-14.6, 8.4],
      [12.9, 9.7],
      [-14, -7.1],
    ]) {
      if (safely(x, z, 1.64)) {
        add('lighthouse', x, z, 0.32);
        break;
      }
    }
    for (const [x, z] of [
      [9, -7],
      [-12, 4.7],
      [13, 5.5],
    ])
      if (safely(x, z, 1.5)) add('crates', x, z, -0.21, 0.85);
  }
  for (const [x, z] of [
    [-19, 8],
    [16, -13],
  ]) {
    const ferry = add('ferry', x, z, coastal ? 0.35 : 0, 0.83);
    ferry.position.y = -0.72;
    ferry.userData.waterline = ferry.position.y;
    ferry.userData.dynamic = true;
    scene.floats.push(ferry);
  }
  const font = new THREE.Group();
  const fountainZ = coastal ? -6.9 : 7.5;
  font.position.set(-1, 0.05, fountainZ);
  font.userData.dynamic = true;
  ceramicProp('fountain', font);
  scene.fountain = font;
  scene.fountainSpray = new FountainSpray(font);
  cylinder(
    font,
    scene.fountainSpray.poolMaterial,
    [0, 0.285, 0],
    0.81,
    0.81,
    0.008,
    40,
  ).castShadow = false;
  scene.waterJets = Array.from({ length: 6 }, (_, i) =>
    tube(font, scene.fountainSpray.jetMaterial, fountainJetPath(i), 0.013, 26, 6),
  );
  world.add(font);
  const signs = coastal
    ? [['海滨捷径', -2, -2.3, '#665c42']]
    : [
        ['晨光支路', -8, 2, '#576c40'],
        ['花园支路', 8, -2, '#795a3e'],
        ['滨河公园', 0, 3.7, '#42766b'],
      ];
  for (const [name, x, z, color] of signs) {
    const badge = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: signTexture(name, { width: 256, height: 72, background: color, color: '#fff5d9' }),
        transparent: true,
        depthTest: false,
      }),
    );
    badge.position.set(x, 0.6, z);
    badge.scale.set(2, 0.56, 1);
    world.add(badge);
  }
}

export function buildIsland(scene) {
  const { tiles, world } = scene;
  if (tiles.forest) {
    buildForestTown(scene);
    return;
  }
  scene.weatherGates = [];
  const coastal = tiles !== CITY_TILES;
  const colors = coastal ? palettes.island : palettes.city;
  const center = coastal
    ? (x) => Math.sin(x * 0.24) * 1.14 - Math.cos(x * 0.095) * 0.5
    : (x) => Math.sin(x * 0.21) * 0.8;
  const sea = mesh(world, new THREE.PlaneGeometry(240, 240), waterMaterial(), [0, -0.69, 0]);
  sea.rotation.x = -Math.PI / 2;
  // Draw expensive water after opaque terrain so depth rejects covered fragments.
  sea.renderOrder = 10;
  sea.castShadow = false;
  sea.receiveShadow = false;
  const ground = ceramicProp(coastal ? 'islandGround' : 'townGround', world);
  ground.scale.set(21, 1, 16.8);
  ground.castShadow = false;
  roads(scene, colors, center);
  spaces(scene, colors, coastal ? 1 : 2);
  flow(world, center, colors.riverWidth);
  scene.hero = new THREE.Group();
  world.add(scene.hero);
  props(scene, coastal, center);
  for (const tile of tiles.filter((t) => t.id % 8 === 2)) {
    const nx = (tile.lotX - tile.x) / 2.3,
      nz = (tile.lotZ - tile.z) / 2.3;
    scene.lamp(tile.x - nx * 1.25, tile.z - nz * 1.25);
  }
  scene.ripples = [];
  scenicDetails(scene, { center, coastal, trees: false });
  batchStatic(world);
}
