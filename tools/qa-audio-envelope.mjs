// Evaluate in a source preview browser; exercises the browser's actual audio automation.
(async()=>{
 const {GameAudio}=await import('./audio.js?envelope-check='+Date.now());
 const ctx=new OfflineAudioContext(1,96000,48000),gain=ctx.createGain(),source=ctx.createConstantSource();gain.gain.value=.82;source.offset.value=1;source.connect(gain);gain.connect(ctx.destination);source.start();
 const audio=new GameAudio(),first=ctx.suspend(.3),second=ctx.suspend(1.1),rendering=ctx.startRendering();
 await first;audio.fade(gain.gain,0,ctx.currentTime,.6);await ctx.resume();
 await second;audio.fade(gain.gain,.82,ctx.currentTime,.6);await ctx.resume();
 const samples=(await rendering).getChannelData(0),sample=t=>samples[Math.floor(t*48000)];
 const result={before:sample(.2),fadeMiddle:sample(.6),silent:sample(1),returnMiddle:sample(1.4),restored:sample(1.8)};
 for(const [key,expected]of Object.entries({before:.82,fadeMiddle:.41,silent:0,returnMiddle:.41,restored:.82}))if(Math.abs(result[key]-expected)>.02)throw Error(`${key}: expected ${expected}, got ${result[key]}`);
 return result;
})()
