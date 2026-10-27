// Auto preserves all scene/rule geometry; only screen-space quality is tiered.
export function renderProfile(quality='auto',{dpr=globalThis.devicePixelRatio||1,mobile=globalThis.matchMedia?.('(pointer:coarse)').matches||false}={}){
 if(quality==='low')return {name:'low',ratio:1,shadow:0,aoSamples:0,aoScale:0};
 return mobile?{name:'mobile',ratio:Math.min(Math.max(dpr,1),1.25),shadow:1024,aoSamples:8,aoScale:.5}:{name:'desktop',ratio:Math.min(Math.max(dpr,1),2),shadow:2048,aoSamples:16,aoScale:1};
}
