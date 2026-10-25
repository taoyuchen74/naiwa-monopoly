// Run in the local game's browser with agent-browser eval (read this file as text).
(async()=>{
 const T=await import('./vendor/three.module.js'),m=await import('./surfaces.js');
 const renderer=new T.WebGLRenderer(),target=new T.WebGLRenderTarget(128,96,{type:T.FloatType});
 const scene=new T.Scene(),camera=new T.OrthographicCamera(-32,32,24,-24,.1,200);
 const plane=new T.Mesh(new T.PlaneGeometry(200,200),m.waterMaterial(false));plane.rotation.x=-Math.PI/2;scene.add(plane);
 const pixels=new Float32Array(128*96*4);let frames=0,min=Infinity,max=-Infinity;
 try{
  for(const mode of ['day','golden','night'])for(const river of [false,true])for(const eye of [[28,30,36],[-25,12,18]])for(const time of [0,.1,17.3,1000]){
   m.setSurfaceLighting(mode);plane.material=m.waterMaterial(river);camera.position.set(...eye);camera.lookAt(0,0,0);m.animateSurfaces(time,camera);
   renderer.setRenderTarget(target);renderer.render(scene,camera);renderer.readRenderTargetPixels(target,0,0,128,96,pixels);
   let visible=0;
   for(let i=0;i<pixels.length;i++){const v=pixels[i];if(!Number.isFinite(v))throw Error(`${mode}/${river}/${time}: non-finite output at ${i}`);if(i%4<3){min=Math.min(min,v);max=Math.max(max,v);if(v>0)visible++;}}
   if(!visible)throw Error('Water rendered entirely black');frames++;
  }
  return {frames,pixelsChecked:frames*128*96,min,max,finite:true};
 }finally{m.setSurfaceLighting('day');plane.geometry.dispose();target.dispose();renderer.dispose();}
})()
