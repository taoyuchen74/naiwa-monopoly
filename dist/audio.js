export const MUSIC_TRACKS={ode:{name:'奶家欢乐颂',credit:'贝多芬《欢乐颂》旋律 · 本作器乐改编',bpm:112},town:{name:'奶家漫游',credit:'本作原创轻快小镇配乐',bpm:104}};
export const AUDIO_DEFAULTS={music:true,musicVolume:.32,effectsVolume:.68,voice:true,voiceVolume:.65,track:'ode'};
export function audioOptions(options={}){const o={...AUDIO_DEFAULTS,...options};for(const key of ['musicVolume','effectsVolume','voiceVolume'])o[key]=Number.isFinite(o[key])?Math.max(0,Math.min(1,o[key])):AUDIO_DEFAULTS[key];if(!MUSIC_TRACKS[o.track])o.track='ode';return o;}
// Public-domain melody, newly arranged and performed with Web Audio instruments.
const ode=[
 [64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[64,1.5],[62,.5],[62,2],
 [64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[62,1.5],[60,.5],[60,2],
 [62,1],[62,1],[64,1],[60,1],[62,1],[64,.5],[65,.5],[64,1],[60,1],[62,1],[64,.5],[65,.5],[64,1],[62,1],[60,1],[62,1],[67,2],
 [64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[62,1.5],[60,.5],[60,2]
];
const town=[[67,.5],[72,.5],[76,1],[74,.5],[72,.5],[69,1],[67,.5],[64,.5],[67,1],[65,1],[64,1],[62,.5],[65,.5],[69,1],[67,.5],[65,.5],[64,1],[62,1],[60,1],[64,1],[67,1],[69,.5],[72,.5],[76,1],[74,1],[72,1],[71,.5],[69,.5],[67,1],[64,1],[62,1],[60,2]];
const seq=notes=>{let beat=0;return{events:notes.map(([note,duration])=>{const e={note,duration,beat};beat+=duration;return e;}),length:beat};};
const tracks={ode:seq(ode),town:seq(town)},freq=n=>440*2**((n-69)/12);
export class GameAudio{
 constructor(options={}){this.options=audioOptions(options);this.ctx=null;this.timer=null;this.beat=0;this.nextTime=0;this.voices=new Set();this.lastVoice=-10;this.unlocked=false;this.hidden=false;this.failed=false;this.layers=[];this.loopCount=0;}
 async unlock(){if(!this.ctx){try{const Context=globalThis.AudioContext||globalThis.webkitAudioContext;if(!Context)return;this.ctx=new Context();this.master=this.ctx.createGain();this.master.gain.value=.82;const limiter=this.ctx.createDynamicsCompressor();limiter.threshold.value=-15;limiter.ratio.value=5;this.master.connect(limiter);limiter.connect(this.ctx.destination);this.musicGain=this.ctx.createGain();this.fxGain=this.ctx.createGain();this.voiceGain=this.ctx.createGain();for(const g of [this.musicGain,this.fxGain,this.voiceGain])g.connect(this.master);this.noise=this.ctx.createBuffer(1,Math.ceil(this.ctx.sampleRate*.22),this.ctx.sampleRate);const a=this.noise.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*(1-i/a.length);this.loadLaugh();}catch{this.failed=true;return;}}
  try{await this.ctx.resume();this.unlocked=true;this.apply();}catch{this.failed=true;}
 }
 async loadLaugh(){try{const url=globalThis.__NAIWA_LAUGH_DATA__||'./audio/naiwa-laugh-excerpt.mp3';const response=await fetch(url);if(!response.ok)return;this.laughBuffer=await this.ctx.decodeAudioData(await response.arrayBuffer());}catch{this.laughBuffer=null;}}
 setOptions(options){const next=audioOptions(options),changed=next.track!==this.options.track;if(JSON.stringify(next)===JSON.stringify(this.options))return;this.options=next;if(changed&&this.timer)this.transitionTrack(next.track);this.apply();}
 apply(){if(!this.ctx)return;const on=this.options.sound!==false&&!this.hidden,now=this.ctx.currentTime;this.fade(this.master.gain,on?.82:0,now,.6);this.fade(this.musicGain.gain,(this.options.music?this.options.musicVolume*.65:0),now,.9);this.fxGain.gain.setTargetAtTime(this.options.effectsVolume*.7,now,.04);this.voiceGain.gain.setTargetAtTime(this.options.voiceVolume*.72,now,.04);if(on&&this.options.music&&this.unlocked)this.startMusic();else this.stopMusic();if(!on||!this.options.voice)for(const v of this.voices){try{v.stop();}catch{}}}
 visibility(hidden){this.hidden=hidden;this.apply();if(hidden)this.ctx?.suspend();else if(this.unlocked)this.ctx?.resume().then(()=>this.apply()).catch(()=>{});}
 fade(param,value,at,duration=.8){if(param.cancelAndHoldAtTime)param.cancelAndHoldAtTime(at);else{param.cancelScheduledValues?.(at);param.setValueAtTime?.(param.value,at);}param.linearRampToValueAtTime?.(value,at+duration);}
 createLayer(track,at,fade=1.6){const gain=this.ctx.createGain(),length=tracks[track].length*60/MUSIC_TRACKS[track].bpm,overlap=2;gain.connect(this.musicGain);gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(1,at+fade);gain.gain.setValueAtTime(1,at+length-overlap);gain.gain.linearRampToValueAtTime(0,at+length);const layer={track,gain,beat:0,next:at,start:at,end:at+length,nextLoop:at+length-overlap,spawned:false};this.layers.push(layer);return layer;}
 transitionTrack(track){const now=this.ctx.currentTime;for(const layer of this.layers){this.fade(layer.gain.gain,0,now,1.8);layer.end=Math.min(layer.end,now+1.8);layer.spawned=true;}this.createLayer(track,now+.04,1.8);}
 scheduleMusic(now=this.ctx.currentTime){const horizon=now+.22;
  for(const layer of [...this.layers]){if(!layer.spawned&&horizon>=layer.nextLoop){layer.spawned=true;this.loopCount++;this.createLayer(layer.track,layer.nextLoop,2);}}
  for(const layer of this.layers){const seconds=60/MUSIC_TRACKS[layer.track].bpm,melody=tracks[layer.track];while(layer.next<horizon&&layer.next<layer.end){const beat=layer.beat%melody.length,event=melody.events.find(e=>Math.abs(e.beat-beat)<.01);if(event)this.note(event.note,layer.next,event.duration*seconds*.96,.105,'flute',layer.gain);
   const bar=Math.floor(beat/4),step=Math.round(beat*2)%8,chords=[[48,52,55],[43,47,50],[41,45,48],[43,47,53]],chord=chords[[0,1,0,1,2,0,1,0,1,0,1,1,0,1,2,0][bar%16]];
   if(step%4===0)this.note(chord[0]-12,layer.next,seconds*.9,.09,'bass',layer.gain);
   this.note(chord[step%3]+12,layer.next,seconds*.5,.045,'pluck',layer.gain);if(step%2===1)this.hiss(layer.next,.025,.012,layer.gain,4600);
   layer.beat+=.5;layer.next+=seconds*.5;
  }}
  this.layers=this.layers.filter(layer=>{if(now>layer.end+1.2){layer.gain.disconnect?.();return false;}return true;});
 }
 startMusic(){if(this.timer||!this.ctx)return;this.createLayer(this.options.track,this.ctx.currentTime+.06);this.scheduleMusic();this.timer=setInterval(()=>{if(this.ctx&&!this.hidden)this.scheduleMusic();},70);}
 stopMusic(){if(this.timer)clearInterval(this.timer);this.timer=null;for(const layer of this.layers){this.fade(layer.gain.gain,0,this.ctx.currentTime,.35);const gain=layer.gain;setTimeout(()=>{try{gain.disconnect?.();}catch{}},500);}this.layers=[];}
 note(midi,at,duration,gain,type='pluck',bus=this.fxGain){if(!this.ctx||!bus)return;const c=this.ctx,o=c.createOscillator(),g=c.createGain(),filter=c.createBiquadFilter();o.type=type==='bass'?'triangle':type==='flute'?'sine':'triangle';o.frequency.value=freq(midi);filter.type='lowpass';filter.frequency.value=type==='bass'?500:type==='flute'?2400:1700;o.connect(filter);filter.connect(g);g.connect(bus);g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(Math.max(.0002,gain),at+(type==='flute'?.045:.008));g.gain.exponentialRampToValueAtTime(.0001,at+Math.max(.07,duration));o.start(at);o.stop(at+Math.max(.1,duration)+.03);if(type==='flute'){const overtone=c.createOscillator(),og=c.createGain();overtone.type='sine';overtone.frequency.value=freq(midi)*2;og.gain.setValueAtTime(0,at);og.gain.linearRampToValueAtTime(gain*.18,at+.04);og.gain.linearRampToValueAtTime(0,at+duration);overtone.connect(og);og.connect(bus);overtone.start(at);overtone.stop(at+duration+.03);}}
 hiss(at,duration,gain,bus=this.fxGain,cutoff=1800){if(!this.ctx||!this.noise)return;const s=this.ctx.createBufferSource(),f=this.ctx.createBiquadFilter(),g=this.ctx.createGain();s.buffer=this.noise;f.type='highpass';f.frequency.value=cutoff;g.gain.setValueAtTime(gain,at);g.gain.exponentialRampToValueAtTime(.0001,at+duration);s.connect(f);f.connect(g);g.connect(bus);s.start(at);s.stop(at+duration);}
 sfx(type='tap'){if(!this.ctx||!this.unlocked||this.hidden||this.options.sound===false)return;const now=this.ctx.currentTime;
  if(type==='laugh'||type==='happy'){this.laugh();return;}
  if(type==='roll'){for(let i=0;i<7;i++){this.hiss(now+i*.035,.035,.09,this.fxGain,600);this.note(45+i%3*3,now+i*.035,.045,.045);}return;}
  if(type==='diceLand'){this.hiss(now,.045,.07,this.fxGain,700);this.note(48,now,.08,.055);return;}
  if(type==='step'){this.hiss(now,.033,.035,this.fxGain,800);this.note(43,now,.045,.02,'bass');return;}
  if(type==='build'){for(let i=0;i<4;i++){this.note(48+i*5,now+i*.1,.1,.06);this.hiss(now+i*.1,.035,.07,this.fxGain,1200);}return;}
  if(type==='demolish'){this.hiss(now,.2,.17,this.fxGain,200);this.note(35,now,.28,.1,'bass');return;}
  const melodies={tap:[76],coin:[79,84],sad:[62,58,53],magic:[72,76,79,84],win:[72,76,79,84,79,84]};(melodies[type]||melodies.tap).forEach((n,i)=>this.note(n,now+i*.085,type==='tap'?.08:.19,type==='tap'?.055:.085));if(type==='win')setTimeout(()=>this.laugh(),500);
 }
 laugh(){if(!this.ctx||!this.options.voice||this.options.sound===false||this.hidden||!this.laughBuffer||this.ctx.currentTime-this.lastVoice<4)return;this.lastVoice=this.ctx.currentTime;const s=this.ctx.createBufferSource();s.buffer=this.laughBuffer;s.connect(this.voiceGain);this.voices.add(s);s.onended=()=>this.voices.delete(s);s.start();const n=this.ctx.currentTime;const gain=this.musicGain.gain;if(gain.cancelAndHoldAtTime)gain.cancelAndHoldAtTime(n);else gain.cancelScheduledValues(n);gain.linearRampToValueAtTime(this.options.music?this.options.musicVolume*.2:0,n+.16);gain.setValueAtTime(this.options.music?this.options.musicVolume*.2:0,n+1.05);gain.linearRampToValueAtTime(this.options.music?this.options.musicVolume*.65:0,n+1.9);}
 status(){return this.failed?'音频不可用':!this.unlocked?'点击后启用声音':this.options.sound===false?'全部静音':this.hidden?'已暂停':this.options.music?'正在播放 · '+MUSIC_TRACKS[this.options.track].name:'音乐已关闭';}
 dispose(){this.stopMusic();for(const v of this.voices){try{v.stop();}catch{}}this.ctx?.close();}
}
