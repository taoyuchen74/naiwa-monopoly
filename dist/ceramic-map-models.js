import * as THREE from './vendor/three.module.js';
import { detailBox, mesh, shareMaterial, sign } from './render-kit.js';
import { geometryFor } from './ceramic-geometry.js';
import { assets, sampleAssets } from './ceramic-map-data.js';

const glaze = shareMaterial(
  new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.59 }),
);

export function ceramicProp(key, parent) {
  const geometry = geometryFor(assets[key]);
  const model = mesh(parent, geometry, glaze);
  model.name = `blender-${key}`;
  return model;
}

export function ceramicLandmarkPart(kind, group, label) {
  const model = mesh(group, geometryFor(sampleAssets[kind]), glaze);
  model.name = `blender-sample-${kind}`;
  if (kind === 'station' || kind === 'bank') {
    const station = kind === 'station';
    sign(
      group,
      station ? label || '奶家车站' : '奶币银行',
      [0, station ? 1.45 : 1.31, station ? 0.273 : 0.595],
      station ? 1.2 : 1.1,
      0.2,
      { background: '#25695f', color: '#fff1d6' },
    );
  }
  return model;
}

const captions = {
  residence: '奶家住宅',
  tea: '奶茶小铺',
  theater: '大笑剧场',
  factory: '奶块工坊',
  garden: '奶家花园',
  hotel: '奶家旅馆',
  tower: '奶币中心',
  mall: '奶家百货',
  research: '研究所',
  gas: '奶罐加油',
  park: '奶家公园',
};

export function ceramicProperty(tile, level, kind, ownerColor, owned) {
  const group = new THREE.Group();
  group.name = `property-${tile.id}-${level}`;
  group.userData = { architecture: kind, level, ownerColor: owned ? ownerColor : null };
  detailBox(group, '#e1cda5', [0, 0.042, 0], [1.95, 0.122, 1.62]);
  detailBox(group, ownerColor, [0, 0.1, 0.77], [1.89, 0.071, 0.095]);
  if (kind === 'gas' || kind === 'park') {
    ceramicProp(kind === 'gas' ? 'fuel' : 'park', group).position.y = 0.095;
  } else {
    const floor = new THREE.InstancedMesh(geometryFor(assets[kind + 'Floor']), glaze, level);
    const transform = new THREE.Matrix4();
    for (let i = 0; i < level; i++)
      floor.setMatrixAt(i, transform.makeTranslation(0, 0.1 + i * 0.48, 0));
    floor.castShadow = true;
    floor.receiveShadow = true;
    floor.computeBoundingSphere();
    floor.name = `blender-${kind}-floors`;
    group.add(floor);
    ceramicProp(kind + 'Roof', group).position.y = 0.1 + level * 0.48;
  }
  if (kind !== 'park') {
    const caption = tile.buildingType === 'chain' ? '奶家连锁店' : captions[kind];
    const plaque = sign(
      group,
      caption,
      [0, kind === 'gas' ? 1.32 : 0.4, kind === 'gas' ? 0.681 : 0.623],
      1.04,
      0.2,
      { background: '#346b5a', color: '#fff0ce' },
    );
    plaque.castShadow = false;
  }
  return group;
}
