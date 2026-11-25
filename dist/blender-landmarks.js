import * as THREE from './vendor/three.module.js';
import { mesh, shareGeometry, sign } from './render-kit.js';
import data from './blender-landmark-data.js';

const [palette, templates, landmarks] = data;
const geometries = new Map();
const landmarkSigns = {
  start: '奶 家 起 点',
  bank: '奶 币 银 行',
  hospital: '奶蛙疗养院',
  stock: '奶家证券所',
  shop: '奶伴补给站',
  spirit: '大笑神殿',
  rest: '奶蛙的小窝',
  tax: '清洁站',
};

function landmarkGeometry(kind, parts) {
  if (geometries.has(kind)) return geometries.get(kind);

  const positions = [];
  const normals = [];
  const colors = [];
  const indices = [];
  const transform = new THREE.Matrix4();
  const normalMatrix = new THREE.Matrix3();
  const point = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const translation = new THREE.Vector3();
  const scale = new THREE.Vector3();
  const rotation = new THREE.Quaternion();
  const color = new THREE.Color();

  // The Blender export stores one vertex and one corner normal in each tuple.
  for (const [shape, finish, x, y, z, sx, sy, sz, qx = 0, qy = 0, qz = 0, qw = 1] of parts) {
    const [vertices, triangles] = templates[shape];
    const base = positions.length / 3;
    transform.compose(
      translation.set(x, y, z),
      rotation.set(qx, qy, qz, qw).normalize(),
      scale.set(sx, sy, sz),
    );
    normalMatrix.getNormalMatrix(transform);
    color.setStyle('#' + palette[finish]);
    for (let i = 0; i < vertices.length; i += 6) {
      point.set(vertices[i], vertices[i + 1], vertices[i + 2]).applyMatrix4(transform);
      normal.set(vertices[i + 3], vertices[i + 4], vertices[i + 5]).applyNormalMatrix(normalMatrix);
      positions.push(point.x, point.y, point.z);
      normals.push(normal.x, normal.y, normal.z);
      colors.push(color.r, color.g, color.b);
    }
    for (const index of triangles) indices.push(base + index);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  geometries.set(kind, shareGeometry(geometry));
  return geometry;
}

export function addBlenderLandmark(group, tile) {
  if (!Object.hasOwn(landmarks, tile.kind)) return false;
  const [parts, [position, width, height, backing, ink]] = landmarks[tile.kind];
  const material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.68 });
  mesh(group, landmarkGeometry(tile.kind, parts), material).name = 'blender-landmark-mesh';
  const stage = tile.kind === 'event';
  const label = stage ? (tile.id === 33 ? '奶蛙街舞' : '表情包广场') : landmarkSigns[tile.kind];
  sign(group, label, position, width, height, {
    background: '#' + palette[backing],
    color: '#' + palette[ink],
  });
  if (stage) group.userData.stage = true;
  return true;
}
