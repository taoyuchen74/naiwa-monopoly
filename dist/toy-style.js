import * as THREE from './vendor/three.module.js';
import { cylinder } from './render-kit.js';
import { CHARACTERS } from './content.js';
export function toyCharacter(root) {
  root.userData.toy = true;
  root.traverse((node) => {
    for (const mat of Array.isArray(node.material) ? node.material : [node.material])
      if (mat?.isMeshPhysicalMaterial) {
        mat.roughness = Math.min(mat.roughness, 0.38);
        mat.clearcoat = Math.max(mat.clearcoat, 0.48);
        mat.clearcoatRoughness = 0.28;
      }
  });
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.65, 32),
    new THREE.MeshBasicMaterial({
      color: '#394c40',
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
    }),
  );
  shadow.name = 'toy-contact-shadow';
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -0.19;
  shadow.scale.set(1, 0.7, 1);
  shadow.castShadow = false;
  shadow.receiveShadow = false;
  root.add(shadow);
  const color = CHARACTERS.find((c) => c.id === root.userData.id)?.estateColor || '#87a889';
  const base = cylinder(root, color, [0, 0.04, 0], 0.67, 0.72, 0.1, 32);
  base.name = 'toy-collector-base';
  root.userData.toyBase = base;
  return root;
}
