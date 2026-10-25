// Evaluate in an owned browser while paused or waiting at a locked decision.
(async()=>{
 const app=document.querySelector('#app'),stage=document.querySelector('#scene'),canvas=stage.querySelector('canvas'),sheet=document.querySelector('#sheet');
 if(!app.classList.contains('is-paused')&&!app.classList.contains('is-menu')&&!(!sheet.hidden&&['buy','estate','branch','event','debt'].includes(sheet.dataset.panel)))throw Error('Pause the match before checking state preservation');
 const gl=canvas.getContext('webgl2'),extension=gl.getExtension('WEBGL_lose_context');if(!extension)throw Error('This browser cannot simulate a graphics reset');
 const before=localStorage.getItem('naiwa-monopoly-v2'),paused=app.classList.contains('is-paused');
 const once=(target,type)=>new Promise((resolve,reject)=>{const timer=setTimeout(()=>{target.removeEventListener(type,done);reject(Error('Timed out waiting for '+type));},20000);function done(){clearTimeout(timer);resolve();}target.addEventListener(type,done,{once:true});});
 const lost=once(stage,'renderlost');extension.loseContext();await lost;
 if(document.querySelector('#fallback').hidden)throw Error('Playable fallback was not shown');
 await new Promise(resolve=>setTimeout(resolve,100));const restored=once(stage,'renderrestored');extension.restoreContext();await restored;
 if(!document.querySelector('#fallback').hidden||gl.isContextLost())throw Error('The restored 3D scene was not reactivated');
 if(localStorage.getItem('naiwa-monopoly-v2')!==before)throw Error('Graphics recovery changed the saved game');
 if(app.classList.contains('is-paused')!==paused)throw Error('Graphics recovery changed the pause state');
 return {phase:app.dataset.phase,paused,sameSave:true,fallback:false};
})()
