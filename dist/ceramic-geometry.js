import * as THREE from './vendor/three.module.js';
import { shareGeometry } from './render-kit.js';

const geometries = new WeakMap();

export function geometryFor(record) {
  if (geometries.has(record)) return geometries.get(record);
  const [count, encoded] = record;
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  const view = new DataView(bytes.buffer);
  const positions = new Float32Array(count * 3);
  const normals = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const offset = i * 15;
    color.setRGB(
      bytes[offset + 12] / 255,
      bytes[offset + 13] / 255,
      bytes[offset + 14] / 255,
      THREE.SRGBColorSpace,
    );
    for (let axis = 0; axis < 3; axis++) {
      positions[i * 3 + axis] = view.getInt16(offset + axis * 2, true) / 8192;
      normals[i * 3 + axis] = view.getInt16(offset + 6 + axis * 2, true) / 8192;
    }
    color.toArray(colors, i * 3);
  }
  const start = count * 15;
  const indices = new Uint16Array((bytes.length - start) / 2);
  for (let i = 0; i < indices.length; i++) indices[i] = view.getUint16(start + i * 2, true);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  geometries.set(record, shareGeometry(geometry));
  return geometry;
}
