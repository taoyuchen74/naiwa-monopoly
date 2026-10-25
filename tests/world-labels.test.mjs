import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {roofLabelAnchor} from '../dist/world-labels.js';
import {IslandScene} from '../dist/scene.js';

test('roof labels follow transformed building roofs rather than road coordinates',()=>{
 const model=new THREE.Group(),roof=new THREE.Mesh(new THREE.BoxGeometry(3,4,2));roof.position.set(.3,2,-.2);model.add(roof);model.position.set(8,.14,-5);model.rotation.y=.7;model.scale.set(1,1.2,1);
 const bounds=new THREE.Box3().setFromObject(model),anchor=roofLabelAnchor(model),center=bounds.getCenter(new THREE.Vector3());
 assert.ok(Math.abs(anchor.x-center.x)<1e-6);assert.ok(Math.abs(anchor.z-center.z)<1e-6);assert.ok(Math.abs(anchor.y-bounds.max.y-.4)<1e-6);
 assert.ok(anchor.y-.53/2>bounds.max.y,'the entire label clears the roof');
});

test('selected full names stay above their roofs under rotated, scaled selection markers',()=>{
 const scene=Object.create(IslandScene.prototype),model=new THREE.Group();model.add(new THREE.Mesh(new THREE.BoxGeometry(2,5,2)));model.position.set(3,2.5,-6);
 Object.assign(scene,{selectedTile:7,plotMeshes:new Map([[7,{model}]]),tileMeshes:[],selection:new THREE.Group(),selectionLabel:new THREE.Sprite()});scene.selection.position.set(2,.23,-4);scene.selection.rotation.y=.84;scene.selection.scale.set(.8,1,.72);scene.selection.add(scene.selectionLabel);
 scene.liftSelectionLabel();assert.ok(scene.selectionLabel.getWorldPosition(new THREE.Vector3()).distanceTo(roofLabelAnchor(model))<1e-6);
 model.scale.y=.5;scene.liftSelectionLabel();assert.ok(scene.selectionLabel.getWorldPosition(new THREE.Vector3()).distanceTo(roofLabelAnchor(model))<1e-6,'rebuilding follows the new roof');
 model.userData.vacant=true;scene.liftSelectionLabel();assert.deepEqual(scene.selectionLabel.position.toArray(),[0,.65,0]);
});

function pickingScene(){
 const scene=Object.create(IslandScene.prototype),camera=new THREE.OrthographicCamera(-5,5,5,-5,.1,50),world=new THREE.Group();camera.position.z=10;camera.lookAt(0,0,0);
 const front=new THREE.Mesh(new THREE.BoxGeometry(4,4,1),new THREE.MeshBasicMaterial());front.position.z=3;front.userData.tile=2;world.add(front);
 const badge=new THREE.Sprite(new THREE.SpriteMaterial());badge.scale.set(2,1,1);badge.userData.tile=7;world.add(badge);
 const selection=new THREE.Group(),selectionLabel=new THREE.Sprite(new THREE.SpriteMaterial());selectionLabel.scale.set(2,1,1);selectionLabel.userData.tile=9;selection.add(selectionLabel);selection.visible=false;world.add(selection);
 Object.assign(scene,{camera,world,ray:new THREE.Raycaster(),pointer:new THREE.Vector2(),renderer:{domElement:{clientWidth:100,clientHeight:100}},zoom:2,selection,selectionLabel,buildingBadges:[badge],tileMeshes:[front],plotMeshes:new Map()});return scene;
}

test('tapping visible labels selects their facility before foreground buildings, while hidden labels never intercept',()=>{
 const scene=pickingScene();assert.equal(scene.pickTile(50,50),7,'the visibly overlaid label wins over a nearer building');
 scene.zoom=1;assert.equal(scene.pickTile(50,50),2,'hidden zoom labels do not catch taps');
 scene.zoom=2;scene.showcase={};assert.equal(scene.pickTile(50,50),2);
 scene.showcase=null;scene.selection.visible=true;scene.selectedTile=9;assert.equal(scene.pickTile(50,50),9,'the selected full name has priority');
 scene.contextLost=true;assert.equal(scene.pickTile(50,50),null);scene.contextLost=false;assert.equal(scene.pickTile(-1,50),null);
});

test('selection suppresses only its own short name and restoring the map view restores it',()=>{
 const scene=pickingScene();scene.selection.visible=true;scene.selectedTile=7;scene.updateLabelVisibility();assert.equal(scene.buildingBadges[0].visible,false);
 scene.selectedTile=9;scene.updateLabelVisibility();assert.equal(scene.buildingBadges[0].visible,true);
 scene.selection.visible=false;scene.selectedTile=7;scene.updateLabelVisibility();assert.equal(scene.buildingBadges[0].visible,true);
});
