import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from '../dist/vendor/three.module.js';
import { IslandScene } from '../dist/scene.js';
import { buildIsland } from '../dist/island.js';
import { displayLandmark, displayPropertyBuilding } from '../dist/buildings.js';
import { buildingReveal } from '../dist/building-reveal.js';
import { BUSINESSES } from '../dist/businesses.js';
import { MAP_DATA } from '../dist/maps.js';

globalThis.document = {
  createElement: () => ({
    width: 0,
    height: 0,
    getContext: () => ({
      fillRect() {},
      strokeRect() {},
      fillText() {},
      createLinearGradient: () => ({ addColorStop() {} }),
      createRadialGradient: () => ({ addColorStop() {} }),
    }),
  }),
};

test('two authored islands preserve tile IDs, share road numbers and switch to forest weather', () => {
  for (const [version, ground] of [
    [1, 'islandGround'],
    [2, 'townGround'],
    [4, null],
  ]) {
    const tiles = MAP_DATA[version].tiles;
    const scene = {
      tiles,
      world: new THREE.Group(),
      tileMeshes: [],
      buildingBadges: [],
      pointLights: [],
      lights: [],
      floats: [],
      lamp() {},
      tag(model, id) {
        model.traverse((obj) => {
          obj.userData.tile = id;
        });
      },
    };
    const snapshot = JSON.stringify(tiles);
    buildIsland(scene);
    assert.equal(JSON.stringify(tiles), snapshot);
    assert.deepEqual(
      [
        ...new Set(
          scene.tileMeshes.flatMap((mesh) => mesh.userData.tileIds || [mesh.userData.tile]),
        ),
      ].sort((a, b) => a - b),
      tiles.map((tile) => tile.id).sort((a, b) => a - b),
    );
    if (ground) {
      assert.ok(scene.world.getObjectByName('blender-' + ground));
      assert.equal(
        scene.world.getObjectByName('board-space-numbers').geometry.index.count,
        tiles.length * 6,
      );
      assert.equal(scene.weatherGates.length, 0);
    } else {
      assert.equal(scene.world.getObjectByName('board-space-numbers'), undefined);
      assert.ok(scene.weatherGates.length > 0);
    }
  }
});

test('starting arch has milk-frog yellow and green eyes on both islands', () => {
  for (const version of [1, 2]) {
    const base = displayLandmark(MAP_DATA[version].tiles[0], version);
    const color = base.getObjectByName('blender-sample-station').geometry.attributes.color;
    const has = (hex) => {
      const wanted = new THREE.Color(hex);
      for (let i = 0; i < color.count; i++) {
        if (
          Math.abs(color.getX(i) - wanted.r) < 1e-6 &&
          Math.abs(color.getY(i) - wanted.g) < 1e-6 &&
          Math.abs(color.getZ(i) - wanted.b) < 1e-6
        )
          return true;
      }
      return false;
    };
    assert.equal(has('#f5cc24'), true);
    assert.equal(has('#91a94c'), true);
  }
});

test('levels, ownership and construction clipping stay local to each ceramic facility', () => {
  for (const [buildingType, business] of Object.entries(BUSINESSES)) {
    const tile = { ...MAP_DATA[2].tiles.find((item) => item.kind === 'property'), buildingType };
    const model = displayPropertyBuilding(tile, business.max, '#aa7788', true, 2);
    assert.equal(model.userData.level, business.max);
    assert.equal(model.userData.ownerColor, '#aa7788');
    if (business.max > 1) {
      const floors = model.getObjectByProperty('isInstancedMesh', true);
      assert.equal(floors.count, business.max);
      const normal = floors.material;
      const effect = buildingReveal(model);
      assert.notEqual(floors.material, normal);
      effect.restore();
      assert.equal(floors.material, normal);
    }
  }
  const tile = MAP_DATA[4].tiles.find((item) => item.kind === 'property');
  assert.equal(
    displayPropertyBuilding(tile, 1, '#aa7788', true, 4).getObjectByName(
      'blender-residence-floors',
    ),
    undefined,
  );
  assert.equal(displayPropertyBuilding(tile, 0, '#aa7788', true, 2).userData.vacant, true);
});

test('an instanced road click resolves the world tile ID instead of the instance index', () => {
  const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 30);
  camera.position.z = 10;
  camera.lookAt(0, 0, 0);
  const world = new THREE.Group();
  const surface = new THREE.InstancedMesh(
    new THREE.BoxGeometry(2, 2, 1),
    new THREE.MeshBasicMaterial(),
    2,
  );
  surface.setMatrixAt(0, new THREE.Matrix4().makeTranslation(-2, 0, 0));
  surface.setMatrixAt(1, new THREE.Matrix4().makeTranslation(2, 0, 0));
  surface.userData.tileIds = [36, 8];
  world.add(surface);
  const scene = Object.assign(Object.create(IslandScene.prototype), {
    camera,
    world,
    ray: new THREE.Raycaster(),
    pointer: new THREE.Vector2(),
    renderer: { domElement: { clientWidth: 100, clientHeight: 100 } },
    selection: { visible: false },
    tileMeshes: [surface],
    buildingBadges: [],
    plotMeshes: new Map(),
  });
  assert.equal(scene.pickTile(30, 50), 36);
  assert.equal(scene.pickTile(70, 50), 8);
  assert.equal(scene.pickTile(50, 50), null);
});
