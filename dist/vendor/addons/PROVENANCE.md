# Three.js r180 example modules

The JavaScript files in this directory are from https://github.com/mrdoob/three.js/tree/r180/examples/jsm and are covered by the Three.js MIT license retained at ../THREE-LICENSE.txt.

Local modifications: bare imports from `three` point to the existing local r180 three.module.js. GTAOPass excludes sprites from its normal/depth override pass so map labels do not contaminate the normal buffer. The temporary construction-mesh exclusion is described below; no other upstream module behavior is changed.

Upstream documentation: https://threejs.org/manual/pages/post-processing.html and https://threejs.org/docs/pages/EffectComposer.html .

During construction or demolition, meshes with `userData.effectReveal` are also omitted from the override normal pass. Its shared override material cannot retain per-building clipping planes; hiding these temporary meshes avoids ambient-occlusion silhouettes above the visible construction front. The ordinary colour and shadow passes use the local clipping plane.
