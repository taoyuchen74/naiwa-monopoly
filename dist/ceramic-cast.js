import * as THREE from './vendor/three.module.js';
import { mesh, shareGeometry, shareMaterial } from './render-kit.js';
import { frog, cast } from './ceramic-cast-data.js';

const ceramic = shareMaterial(
  new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.51, clearcoat: 0.1 }),
);

const geometries = new WeakMap();

function geometryFor(record) {
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

function createFrog() {
  const root = new THREE.Group();
  root.name = 'naiwa';
  const carrier = new THREE.Group();
  root.add(carrier);
  const [body, armLeft, armRight, footLeft, footRight, eyes, laugh, hugLeft, hugRight] =
    Object.entries(frog.meshes).map(([name, record]) => {
      const joint = new THREE.Group();
      joint.name = name;
      mesh(joint, geometryFor(record), ceramic);
      return joint;
    });
  carrier.add(body, footLeft, footRight);
  body.add(armLeft, armRight, eyes, laugh);
  const walkingArms = [armLeft.children[0], armRight.children[0]];
  armLeft.add(hugLeft);
  armRight.add(hugRight);
  const joints = [body, armLeft, armRight, footLeft, footRight];
  joints.forEach((joint, index) => joint.position.fromArray(frog.pivots[index]));
  root.userData = {
    id: 'naiwa',
    body: carrier,
    joints,
    eyes,
    laughMouth: laugh,
    walkingArms,
    restingArms: [hugLeft, hugRight],
    sampleRig: true,
    vehicleId: 0,
  };
  poseFrog(root, { time: 0 });
  return root;
}

function poseFrog(root, { time, moving, mood, reduced }) {
  const { joints, eyes, laughMouth, walkingArms, restingArms } = root.userData;
  const action = mood === 'happy' || mood === 'win' ? 'laugh' : moving ? 'walk' : 'idle';
  const [duration, keys] = frog.clips[action];
  const frame = reduced ? 0 : THREE.MathUtils.euclideanModulo(time * 24, duration);
  const next = keys.findIndex(([at]) => at > frame);
  const [from, pose] = keys[next - 1];
  const [to, target] = keys[next];
  const blend = THREE.MathUtils.smoothstep(frame, from, to);
  joints.forEach((joint, index) => {
    const [height, pitch, roll] = pose[index];
    const [nextHeight, nextPitch, nextRoll] = target[index];
    joint.position.y = frog.pivots[index][1] + THREE.MathUtils.lerp(height, nextHeight, blend);
    joint.rotation.x = THREE.MathUtils.lerp(pitch, nextPitch, blend);
    joint.rotation.z = -THREE.MathUtils.lerp(roll, nextRoll, blend);
  });
  if (mood === 'loss' || mood === 'sad') joints[0].rotation.x = 0.14;
  laughMouth.visible = action === 'laugh';
  eyes.visible = !laughMouth.visible;
  walkingArms.forEach((arm, i) => {
    arm.visible = action === 'walk';
    restingArms[i].visible = !arm.visible;
  });
}

function part(parent, record, name, position = [0, 0, 0]) {
  const group = new THREE.Group();
  group.name = name;
  group.position.fromArray(position);
  mesh(group, geometryFor(record), ceramic);
  parent.add(group);
  return group;
}

function createCastMember(id) {
  if (!Object.hasOwn(cast, id)) return null;
  const asset = cast[id];
  const model = new THREE.Group();
  const carrier = new THREE.Group();
  model.name = id;
  model.add(carrier);
  const body = part(carrier, asset.body, 'Body');
  const eyes = part(body, asset.eyes, 'Neutral');
  const laugh = part(body, asset.laugh, 'Laugh');
  const limbs = asset.limbs.map(([record, pivot, kind, side]) => ({
    joint: part(body, record, kind, pivot),
    kind,
    side,
  }));
  model.userData = {
    id,
    body: carrier,
    bodyMotion: body,
    eyes,
    laugh,
    limbs,
    style: asset.style,
    collectionRig: true,
    vehicleId: 0,
  };
  poseCastMember(model, { time: 0 });
  return model;
}

function poseCastMember(model, { time, moving, mood, reduced }) {
  const { bodyMotion, eyes, laugh, limbs, style } = model.userData;
  const happy = mood === 'happy' || mood === 'win';
  const lost = mood === 'loss' || mood === 'sad';
  const stride = reduced ? 0 : Math.sin(time * 11);
  const breathe = reduced ? 0 : Math.sin(time * 2.25);
  const bounce = moving ? Math.abs(stride) * (style === 'rolling' ? 0.13 : 0.034) : breathe * 0.009;
  bodyMotion.position.y = Math.max(0, bounce);
  bodyMotion.rotation.x = lost
    ? 0.14
    : happy
      ? 0.14 + stride * 0.07
      : moving && style === 'rolling'
        ? stride * 0.16
        : 0;
  bodyMotion.rotation.z = moving && style === 'biped' ? stride * 0.045 : 0;
  bodyMotion.scale.y = happy ? 1 + stride * 0.035 : 1 + breathe * 0.005;
  eyes.visible = !happy;
  laugh.visible = happy;
  for (const { joint, kind, side } of limbs) {
    joint.rotation.set(0, 0, 0);
    if (kind === 'arm') {
      joint.rotation.x = moving ? -side * stride * 0.46 : happy ? -0.51 : 0;
      joint.rotation.z = happy ? side * (mood === 'win' ? 1.05 : 0.38) : 0;
    } else if (kind === 'leg') {
      joint.rotation.x = moving ? side * stride * 0.39 : 0;
    } else if (kind === 'tail') {
      joint.rotation.y = stride * (happy ? 0.27 : 0.1);
    } else {
      joint.rotation.x = stride * (moving ? 0.09 : 0.025);
    }
  }
}

export function ceramicCharacter(id) {
  return id === 'naiwa' ? createFrog() : createCastMember(id);
}
export function poseCeramicCharacter(model, options) {
  if (model.userData.sampleRig) poseFrog(model, options);
  else poseCastMember(model, options);
}
