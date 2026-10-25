// All distances are world units; the coastline matches island.js's irregular shore.
export const waterVertex=`
varying vec3 world;
void main(){vec4 w=modelMatrix*vec4(position,1.);world=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}
`;
export const waterFragment=`
precision highp float;
varying vec3 world;
uniform float time,river,lightPower;
uniform vec3 deepColor,shallowColor,skyColor,sunColor,sunDirection,viewDirection;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);}
vec2 slope(vec2 p){
 vec2 gradient=vec2(0.);float frequency=.7,amplitude=.055;
 float pixelWidth=length(fwidth(p));
 vec2 direction=normalize(vec2(.8,.6));
 for(int i=0;i<7;i++){
  float k=float(i),phase=dot(p,direction)*frequency+time*(.45+k*.18)*(mod(k,2.)*2.-1.);
  float footprint=pixelWidth*frequency;
  gradient+=direction*cos(phase+sin(phase*.37+k)*.6)*amplitude*(1.-smoothstep(.45,1.8,footprint));
  direction=mat2(.4536,-.8912,.8912,.4536)*direction;frequency*=1.91;amplitude*=.76;
 }
 return gradient;
}
void main(){
 vec2 p=world.xz;float t=time;
 float angle=atan(p.y/16.8,p.x/21.);
 float coast=1.+.06*sin(angle*5.)+.035*cos(angle*3.);
 float distanceToShore=(length(vec2(p.x/21.,p.y/16.8))-coast)*18.;
 float shallows=exp(-max(distanceToShore,0.)*.62);
 float riverBank=1.-smoothstep(.28,.58,abs(p.y-sin(p.x*.21)*.8));
 float depth=mix(shallows,.48+riverBank*.17,river);
 vec2 gradient=slope(p+vec2(t*river*.11,0.));
 vec3 n=normalize(vec3(-gradient.x,1.,-gradient.y));
 vec3 v=normalize(viewDirection),l=normalize(sunDirection),h=normalize(v+l);
 float fresnel=.035+.965*pow(clamp(1.-dot(n,v),0.,1.),5.);
 vec3 reflected=reflect(-v,n);vec3 sky=mix(skyColor*.72,skyColor*1.2,smoothstep(-.1,.8,reflected.y));
 vec3 color=mix(deepColor,shallowColor,depth);
 color=mix(color,sky,.13+fresnel*.7);
 // Narrow broken highlights use the same light direction and colour as the town.
 float highlight=pow(max(dot(n,h),0.),180.);
 color+=sunColor*highlight*lightPower*.2;
 float fine=noise(p*4.2+gradient*5.+vec2(t*.07,-t*.09));
 float caustic=pow(clamp(1.-abs(fine*2.-1.),0.,1.),14.);
 color+=shallowColor*caustic*depth*.11;
 // Two staggered wave fronts dissolve into scattered foam instead of a solid ring.
 float breakup=noise(p*2.7+vec2(t*.13,-t*.1));
 float surge=.2+.12*sin(t*.65+angle*3.);
 float frontA=(distanceToShore-surge)/.12;
 float frontB=(distanceToShore-.65-.13*sin(t*.52+angle*4.))/.085;
 float foamA=exp(-frontA*frontA);
 float foamB=exp(-frontB*frontB);
 float foam=(foamA*.6+foamB*.27)*smoothstep(.3,.7,breakup)*(1.-river);
 vec3 foamColor=mix(skyColor,vec3(.85,.91,.86),.5);
 color=mix(color,foamColor,foam);
 gl_FragColor=vec4(clamp(color,vec3(0.),vec3(5.)),1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}
`;
