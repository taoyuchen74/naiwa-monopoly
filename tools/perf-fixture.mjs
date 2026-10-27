import {Game} from '../dist/engine.js';
export function sixPlayerGame(){
 const g=Game.create({seed:1701,playerCount:6,randomStart:false,difficulty:'hard',talents:true});
 g.s.round=12;g.s.phase='roll';
 for(const [i,p]of g.s.players.entries())Object.assign(p,{pos:i*7,vehicle:i%3,money:6000,tickets:100});
 const kinds=['residence','hotel','mall','research','chain','gas','park'];
 for(const t of g.tiles.filter(t=>t.kind==='property'))g.s.ownership[t.id]={player:t.id%6,level:t.id%7<4?3:1,buildingType:kinds[t.id%7]};
 return g;
}
export function aiFixtures(){return [2,10,15,30,35,44].map((pos,i)=>{
 const g=sixPlayerGame();g.s.current=1;Object.assign(g.player,{human:false,pos,vehicle:2,tickets:40,cards:i%2?['block','dice','turn','demolish','build']:['block','block','block','dice','shield','turn','slow'],aiTradeDone:false});
 g.s.blocks={8:2,24:3};return g.s;
});}
