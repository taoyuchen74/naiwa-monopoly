import assert from 'node:assert/strict';
import test from 'node:test';
import { Vector3, Box3 } from '../dist/vendor/three.module.js';
import { CHARACTERS } from '../dist/content.js';
import { animateCharacter, displayCharacterModel } from '../dist/characters.js';
import { portraitBitmap, eventPoseBitmap } from '../dist/portrait-renderer.js';
import { disposeUnique } from '../dist/render-kit.js';

test('all six ceramic figures share mesh data and keep poses independent', () => {
  for (const { id } of CHARACTERS) {
    const studio = displayCharacterModel(id);
    const pawn = displayCharacterModel(id, { pawn: true });
    const bodyMesh = (model) => model.userData.body.getObjectByProperty('isMesh', true);
    assert.equal(studio.userData.id, id);
    assert.equal(bodyMesh(studio).geometry, bodyMesh(pawn).geometry);
    const size = new Box3().setFromObject(studio).getSize(new Vector3());
    assert.ok(size.y > 1 && size.y < 3, `${id}: invalid board scale ${size.y}`);

    const laugh = (model) => model.userData.laugh || model.userData.laughMouth;
    assert.equal(laugh(studio).visible, false);
    animateCharacter(pawn, { time: 0.52, mood: 'win' });
    assert.equal(laugh(pawn).visible, true);
    assert.equal(laugh(studio).visible, false);
    pawn.userData.vehicleId = 1;
    animateCharacter(pawn, { time: 0.25, moving: true });
    assert.equal(pawn.getObjectByName('ceramic-player-base').visible, false);

    let disposed = false;
    bodyMesh(studio).geometry.addEventListener('dispose', () => (disposed = true));
    disposeUnique(studio);
    assert.equal(disposed, false, 'Removing a studio display must keep shared pawn data');
  }
});

test('all six faces and event poses are available with no browser renderer', () => {
  const webp = /^data:image\/webp;base64,/;
  for (const { id } of CHARACTERS) {
    assert.match(portraitBitmap(id), webp);
    assert.match(eventPoseBitmap(id, 'happy'), webp);
    assert.match(eventPoseBitmap(id, 'sad'), webp);
    assert.notEqual(eventPoseBitmap(id, 'happy'), eventPoseBitmap(id));
  }
  assert.equal(portraitBitmap('constructor'), null);
});
