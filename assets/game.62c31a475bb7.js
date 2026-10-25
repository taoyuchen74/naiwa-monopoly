(()=>{var dn={day:{label:"\u6674\u65E5",sky:"#b7d3dc",sun:"#fff2dc",power:3.2,position:[-10,30,18],hemi:"#fff3dc",ground:"#6f8e9e",ambient:.95,fill:"#b4d9ef",fillPower:1,environment:.32,exposure:.94,bloom:.08,threshold:1.2,windows:0,lamps:0,waterDeep:"#135c7d",waterShallow:"#3da8ad"},golden:{label:"\u6696\u9633\u508D\u665A",sky:"#dfbba9",sun:"#ffce91",power:3.1,position:[-18,12,12],hemi:"#ffe2bb",ground:"#7e858d",ambient:.75,fill:"#a9c7e9",fillPower:.7,environment:.25,exposure:.97,bloom:.14,threshold:1,windows:.35,lamps:1,waterDeep:"#405d78",waterShallow:"#96aaa3"},night:{label:"\u706F\u706B\u591C\u8272",sky:"#263954",sun:"#bacff5",power:1.05,position:[-12,24,8],hemi:"#95b4e6",ground:"#384b72",ambient:.48,fill:"#849ed6",fillPower:.45,environment:.12,exposure:1.05,bloom:.28,threshold:.85,windows:1.8,lamps:4,waterDeep:"#0b203f",waterShallow:"#23466d"}},Dn=n=>Object.hasOwn(dn,n)?n:"day";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Tl="180";var of=0,Kh=1,lf=2;var Qh=1,Al=2,_n=3,zn=0,Wt=1,Nt=2,zt=0,Fs=1,Xa=2,eu=3,tu=4,Rl=5,Di=100,cf=101,hf=102,uf=103,df=104,Xs=200,ff=201,pf=202,mf=203,Yo=204,Zo=205,qa=206,gf=207,Ya=208,vf=209,xf=210,yf=211,_f=212,Mf=213,bf=214,Cl=0,Pl=1,Il=2,Bs=3,Dl=4,Ll=5,Ul=6,Nl=7,iu=0,Sf=1,Ef=2,Xn=0,Fl=1,Bl=2,kl=3,Mn=4,Ol=5,zl=6,Hl=7;var nu=300,qs=301,Ys=302,Vl=303,Gl=304,Za=306,Wi=1e3,os=1001,Jo=1002,ni=1003,wf=1004;var Ja=1005;var Li=1006,Wl=1007;var bn=1008;var Oi=1009,su=1010,ru=1011,zr=1012,$l=1013,ps=1014,rn=1015,_i=1016,Xl=1017,ql=1018,ms=1020,au=35902,ou=35899,lu=1021,cu=1022,Ti=1023,Rr=1026,gs=1027,Yl=1028,Zl=1029,hu=1030,Jl=1031;var jl=1033,ja=33776,Ka=33777,Qa=33778,eo=33779,Kl=35840,Ql=35841,ec=35842,tc=35843,ic=36196,nc=37492,sc=37496,rc=37808,ac=37809,oc=37810,lc=37811,cc=37812,hc=37813,uc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,vc=37820,xc=37821,yc=36492,_c=36494,Mc=36495,bc=36283,Sc=36284,Ec=36285,wc=36286;var ya=2300,jo=2301,qo=2302,Hh=2400,Vh=2401,Gh=2402;var Tf=3200,Af=3201;var Tc=0,Rf=1,qn="",Ct="srgb",ks="srgb-linear",_a="linear",ft="srgb";var Ns=7680;var Wh=519,Cf=512,Pf=513,If=514,uu=515,Df=516,Lf=517,Uf=518,Nf=519,Ko=35044;var du="300 es",Ki=2e3,Ma=2001;var Hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=1234567,ma=Math.PI/180,Cr=180/Math.PI;function pn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(oi[n&255]+oi[n>>8&255]+oi[n>>16&255]+oi[n>>24&255]+"-"+oi[e&255]+oi[e>>8&255]+"-"+oi[e>>16&15|64]+oi[e>>24&255]+"-"+oi[t&63|128]+oi[t>>8&255]+"-"+oi[t>>16&255]+oi[t>>24&255]+oi[i&255]+oi[i>>8&255]+oi[i>>16&255]+oi[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function fu(n,e){return(n%e+e)%e}function Qm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function e0(n,e,t){return n!==e?(t-n)/(e-n):0}function ga(n,e,t){return(1-t)*n+t*e}function t0(n,e,t,i){return ga(n,e,1-Math.exp(-t*i))}function i0(n,e=1){return e-Math.abs(fu(n,e*2)-e)}function n0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function s0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function r0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function a0(n,e){return n+Math.random()*(e-n)}function o0(n){return n*(.5-Math.random())}function l0(n){n!==void 0&&(wd=n);let e=wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function c0(n){return n*ma}function h0(n){return n*Cr}function u0(n){return(n&n-1)===0&&n!==0}function d0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function f0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function p0(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var $t={DEG2RAD:ma,RAD2DEG:Cr,generateUUID:pn,clamp:it,euclideanModulo:fu,mapLinear:Qm,inverseLerp:e0,lerp:ga,damp:t0,pingpong:i0,smoothstep:n0,smootherstep:s0,randInt:r0,randFloat:a0,randFloatSpread:o0,seededRandom:l0,degToRad:c0,radToDeg:h0,isPowerOfTwo:u0,ceilPowerOfTwo:d0,floorPowerOfTwo:f0,setQuaternionFromProperEuler:p0,normalize:gt,denormalize:ji},K=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ci=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),A=Math.atan2(R,p*y);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let x=o*y;if(l=l*m+f*x,c=c*m+d*x,h=h*m+g*x,u=u*m+v*x,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fh=new w,Td=new ci,Ze=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],y=s[1],_=s[4],x=s[7],R=s[2],A=s[5],C=s[8];return r[0]=a*v+o*y+l*R,r[3]=a*m+o*_+l*A,r[6]=a*p+o*x+l*C,r[1]=c*v+h*y+u*R,r[4]=c*m+h*_+u*A,r[7]=c*p+h*x+u*C,r[2]=f*v+d*y+g*R,r[5]=f*m+d*_+g*A,r[8]=f*p+d*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ph.makeScale(e,t)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,t){return this.premultiply(ph.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ph=new Ze;function pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ff(){let n=ba("canvas");return n.style.display="block",n}var Ad={};function Pr(n){n in Ad||(Ad[n]=!0,console.warn(n))}function Bf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Rd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m0(){let n={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=Ar(s.r),s.g=Ar(s.g),s.b=Ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?_a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ks]:{primaries:e,whitePoint:i,transfer:_a,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),n}var lt=m0();function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var hr,Qo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hr===void 0&&(hr=ba("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=hr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ba("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(On(t[i]/255)*255):t[i]=On(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},g0=0,Ir=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mh(s[a].image)):r.push(mh(s[a]))}else r=mh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function mh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var v0=0,gh=new w,yi=class n extends Hn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=os,s=os,r=Li,a=bn,o=Ti,l=Oi,c=n.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=pn(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=nu;yi.DEFAULT_ANISOTROPY=1;var vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,x=(d+1)/2,R=(p+1)/2,A=(h+f)/4,C=(u+v)/4,D=(g+m)/4;return _>x&&_>R?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=A/i,r=C/i):x>R?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=D/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=D/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},el=class extends Hn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new yi(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends el{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sa=class extends yi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var tl=class extends yi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var It=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yi):Yi.fromBufferAttribute(r,a),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Mo.subVectors(this.max,na),ur.subVectors(e.a,na),dr.subVectors(e.b,na),fr.subVectors(e.c,na),ts.subVectors(dr,ur),is.subVectors(fr,dr),Is.subVectors(ur,fr);let t=[0,-ts.z,ts.y,0,-is.z,is.y,0,-Is.z,Is.y,ts.z,0,-ts.x,is.z,0,-is.x,Is.z,0,-Is.x,-ts.y,ts.x,0,-is.y,is.x,0,-Is.y,Is.x,0];return!vh(t,ur,dr,fr,Mo)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,ur,dr,fr,Mo))?!1:(bo.crossVectors(ts,is),t=[bo.x,bo.y,bo.z],vh(t,ur,dr,fr,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new w,new w,new w,new w,new w,new w,new w,new w],Yi=new w,_o=new It,ur=new w,dr=new w,fr=new w,ts=new w,is=new w,Is=new w,na=new w,Mo=new w,bo=new w,Ds=new w;function vh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ds.fromArray(n,r);let o=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),h=i.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var x0=new It,sa=new w,xh=new w,Vn=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):x0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);let t=sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(xh)),this.expandByPoint(sa.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Un=new w,yh=new w,So=new w,ns=new w,_h=new w,Eo=new w,Mh=new w,Dr=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yh.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(yh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(So),o=ns.dot(this.direction),l=-ns.dot(So),c=ns.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yh).addScaledVector(So,f),d}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let i=Un.dot(this.direction),s=Un.dot(Un)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,s,r){_h.subVectors(t,e),Eo.subVectors(i,e),Mh.crossVectors(_h,Eo);let a=this.direction.dot(Mh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ns.subVectors(this.origin,e);let l=o*this.direction.dot(Eo.crossVectors(ns,Eo));if(l<0)return null;let c=o*this.direction.dot(_h.cross(ns));if(c<0||l+c>a)return null;let h=-o*ns.dot(Mh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),a=1/pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y0,e,_0)}lookAt(e,t,i){let s=this.elements;return Pi.subVectors(e,t),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),ss.crossVectors(i,Pi),ss.lengthSq()===0&&(Math.abs(i.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),ss.crossVectors(i,Pi)),ss.normalize(),wo.crossVectors(Pi,ss),s[0]=ss.x,s[4]=wo.x,s[8]=Pi.x,s[1]=ss.y,s[5]=wo.y,s[9]=Pi.y,s[2]=ss.z,s[6]=wo.z,s[10]=Pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],_=i[7],x=i[11],R=i[15],A=s[0],C=s[4],D=s[8],S=s[12],b=s[1],P=s[5],N=s[9],O=s[13],G=s[2],F=s[6],U=s[10],J=s[14],W=s[3],ie=s[7],ne=s[11],pe=s[15];return r[0]=a*A+o*b+l*G+c*W,r[4]=a*C+o*P+l*F+c*ie,r[8]=a*D+o*N+l*U+c*ne,r[12]=a*S+o*O+l*J+c*pe,r[1]=h*A+u*b+f*G+d*W,r[5]=h*C+u*P+f*F+d*ie,r[9]=h*D+u*N+f*U+d*ne,r[13]=h*S+u*O+f*J+d*pe,r[2]=g*A+v*b+m*G+p*W,r[6]=g*C+v*P+m*F+p*ie,r[10]=g*D+v*N+m*U+p*ne,r[14]=g*S+v*O+m*J+p*pe,r[3]=y*A+_*b+x*G+R*W,r[7]=y*C+_*P+x*F+R*ie,r[11]=y*D+_*N+x*U+R*ne,r[15]=y*S+_*O+x*J+R*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*d-i*l*d)+v*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,_=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,x=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,R=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,A=t*y+i*_+s*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=y*C,e[1]=(v*f*r-u*m*r-v*s*d+i*m*d+u*s*p-i*f*p)*C,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*p+i*l*p)*C,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*d-i*l*d)*C,e[4]=_*C,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*C,e[8]=x*C,e[9]=(g*u*r-h*v*r-g*i*d+t*v*d+h*i*p-t*u*p)*C,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*d-t*o*d)*C,e[12]=R*C,e[13]=(h*v*s-g*u*s+g*i*f-t*v*f-h*i*m+t*u*m)*C,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,y=l*c,_=l*h,x=l*u,R=i.x,A=i.y,C=i.z;return s[0]=(1-(v+p))*R,s[1]=(d+x)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(d-x)*A,s[5]=(1-(f+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+_)*C,s[9]=(m-y)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=pr.set(s[0],s[1],s[2]).length(),a=pr.set(s[4],s[5],s[6]).length(),o=pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zi.copy(this);let c=1/r,h=1/a,u=1/o;return Zi.elements[0]*=c,Zi.elements[1]*=c,Zi.elements[2]*=c,Zi.elements[4]*=h,Zi.elements[5]*=h,Zi.elements[6]*=h,Zi.elements[8]*=u,Zi.elements[9]*=u,Zi.elements[10]*=u,t.setFromRotationMatrix(Zi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ki,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Ki)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ma)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ki,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Ki)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ma)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},pr=new w,Zi=new et,y0=new w(0,0,0),_0=new w(1,1,1),ss=new w,wo=new w,Pi=new w,Pd=new et,Id=new ci,Ui=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},M0=0,Dd=new w,mr=new ci,Nn=new et,To=new w,ra=new w,b0=new w,S0=new ci,Ld=new w(1,0,0),Ud=new w(0,1,0),Nd=new w(0,0,1),Fd={type:"added"},E0={type:"removed"},gr={type:"childadded",child:null},bh={type:"childremoved",child:null},Kt=class n extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new Ui,i=new ci,s=new w(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Ze}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Ud,e)}rotateZ(e){return this.rotateOnAxis(Nd,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Ud,e)}translateZ(e){return this.translateOnAxis(Nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?To.copy(e):To.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ra,To,this.up):Nn.lookAt(To,ra,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Nn),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fd),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E0),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fd),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,b0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,S0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Kt.DEFAULT_UP=new w(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ji=new w,Fn=new w,Sh=new w,Bn=new w,vr=new w,xr=new w,Bd=new w,Eh=new w,wh=new w,Th=new w,Ah=new vt,Rh=new vt,Ch=new vt,kn=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ji.subVectors(e,t),s.cross(Ji);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ji.subVectors(s,t),Fn.subVectors(i,t),Sh.subVectors(e,t);let a=Ji.dot(Ji),o=Ji.dot(Fn),l=Ji.dot(Sh),c=Fn.dot(Fn),h=Fn.dot(Sh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,i),Ch.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ah,r.x),a.addScaledVector(Rh,r.y),a.addScaledVector(Ch,r.z),a}static isFrontFacing(e,t,i,s){return Ji.subVectors(i,t),Fn.subVectors(e,t),Ji.cross(Fn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Ji.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;vr.subVectors(s,i),xr.subVectors(r,i),Eh.subVectors(e,i);let l=vr.dot(Eh),c=xr.dot(Eh);if(l<=0&&c<=0)return t.copy(i);wh.subVectors(e,s);let h=vr.dot(wh),u=xr.dot(wh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(vr,a);Th.subVectors(e,r);let d=vr.dot(Th),g=xr.dot(Th);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(xr,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Bd.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Bd,o);let p=1/(m+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(vr,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Ph(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=fu(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ph(a,r,e+1/3),this.g=Ph(a,r,e),this.b=Ph(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let i=kf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return lt.workingToColorSpace(li.copy(this),e),Math.round(it(li.r*255,0,255))*65536+Math.round(it(li.g*255,0,255))*256+Math.round(it(li.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(li.copy(this),t);let i=li.r,s=li.g,r=li.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(li.copy(this),t),e.r=li.r,e.g=li.g,e.b=li.b,e}getStyle(e=Ct){lt.workingToColorSpace(li.copy(this),e);let t=li.r,i=li.g,s=li.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(Ao);let i=ga(rs.h,Ao.h,t),s=ga(rs.s,Ao.s,t),r=ga(rs.l,Ao.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new ye;ye.NAMES=kf;var w0=0,Qi=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Fs,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=Zo,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yo&&(i.blendSrc=this.blendSrc),this.blendDst!==Zo&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ot=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new w,Ro=new K,T0=0,xi=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ko,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ko&&(e.usage=this.usage),e}};var Ea=class extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wa=class extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ne=class extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}},A0=0,Vi=new et,Ih=new Kt,yr=new w,Ii=new It,aa=new It,jt=new w,ut=class n extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?wa:Ea)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,t,i){return Vi.makeTranslation(e,t,i),this.applyMatrix4(Vi),this}scale(e,t,i){return Vi.makeScale(e,t,i),this.applyMatrix4(Vi),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ne(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Ii.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(Ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Ii.min,aa.min),Ii.expandByPoint(jt),jt.addVectors(Ii.max,aa.max),Ii.expandByPoint(jt)):(Ii.expandByPoint(aa.min),Ii.expandByPoint(aa.max))}Ii.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(e,c),jt.add(yr)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new w,l[D]=new w;let c=new w,h=new w,u=new w,f=new K,d=new K,g=new K,v=new w,m=new w;function p(D,S,b){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[D].add(v),o[S].add(v),o[b].add(v),l[D].add(m),l[S].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,S=y.length;D<S;++D){let b=y[D],P=b.start,N=b.count;for(let O=P,G=P+N;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let _=new w,x=new w,R=new w,A=new w;function C(D){R.fromBufferAttribute(s,D),A.copy(R);let S=o[D];_.copy(S),_.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(A,S);let P=x.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,P)}for(let D=0,S=y.length;D<S;++D){let b=y[D],P=b.start,N=b.count;for(let O=P,G=P+N;O<G;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new xi(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kd=new et,Ls=new Dr,Co=new Vn,Od=new w,Po=new w,Io=new w,Do=new w,Dh=new w,Lo=new w,zd=new w,Uo=new w,bt=class extends Kt{constructor(e=new ut,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Dh.fromBufferAttribute(u,e),a?Lo.addScaledVector(Dh,h):Lo.addScaledVector(Dh.sub(t),h))}t.add(Lo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(Co.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Co,Od)===null||Ls.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(kd.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(kd),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,R=_;x<R;x+=3){let A=o.getX(x),C=o.getX(x+1),D=o.getX(x+2);s=No(this,p,e,i,c,h,u,A,C,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);s=No(this,a,e,i,c,h,u,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,R=_;x<R;x+=3){let A=x,C=x+1,D=x+2;s=No(this,p,e,i,c,h,u,A,C,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let y=m,_=m+1,x=m+2;s=No(this,a,e,i,c,h,u,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function R0(n,e,t,i,s,r,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===zn,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:n}}function No(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Po),n.getVertexPosition(l,Io),n.getVertexPosition(c,Do);let h=R0(n,e,t,i,Po,Io,Do,zd);if(h){let u=new w;kn.getBarycoord(zd,Po,Io,Do,u),s&&(h.uv=kn.getInterpolatedAttribute(s,o,l,c,u,new K)),r&&(h.uv1=kn.getInterpolatedAttribute(r,o,l,c,u,new K)),a&&(h.normal=kn.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new w,materialIndex:0};kn.getNormal(Po,Io,Do,f.normal),h.face=f,h.barycoord=u}return h}var mn=class n extends ut{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function g(v,m,p,y,_,x,R,A,C,D,S){let b=x/C,P=R/D,N=x/2,O=R/2,G=A/2,F=C+1,U=D+1,J=0,W=0,ie=new w;for(let ne=0;ne<U;ne++){let pe=ne*P-O;for(let Ae=0;Ae<F;Ae++){let We=Ae*b-N;ie[v]=We*y,ie[m]=pe*_,ie[p]=G,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[m]=0,ie[p]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Ae/C),u.push(1-ne/D),J+=1}}for(let ne=0;ne<D;ne++)for(let pe=0;pe<C;pe++){let Ae=f+pe+F*ne,We=f+pe+F*(ne+1),st=f+(pe+1)+F*(ne+1),tt=f+(pe+1)+F*ne;l.push(Ae,We,tt),l.push(We,st,tt),W+=6}o.addGroup(d,W,S),d+=W,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function hi(n){let e={};for(let t=0;t<n.length;t++){let i=Zs(n[t]);for(let s in i)e[s]=i[s]}return e}function C0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Mi={clone:Zs,merge:hi},P0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=C0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ta=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},as=new w,Hd=new K,Vd=new K,vi=class extends Ta{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,Hd,Vd),t.subVectors(Vd,Hd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_r=-90,Mr=1,il=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vi(_r,Mr,e,t);s.layers=this.layers,this.add(s);let r=new vi(_r,Mr,e,t);r.layers=this.layers,this.add(r);let a=new vi(_r,Mr,e,t);a.layers=this.layers,this.add(a);let o=new vi(_r,Mr,e,t);o.layers=this.layers,this.add(o);let l=new vi(_r,Mr,e,t);l.layers=this.layers,this.add(l);let c=new vi(_r,Mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Aa=class extends yi{constructor(e=[],t=qs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nl=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Aa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mn(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:zt});r.uniforms.tEquirect.value=t;let a=new bt(s,r),o=t.minFilter;return t.minFilter===bn&&(t.minFilter=Li),new il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},_e=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},D0={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new _e;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Os=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},en=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},sl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ko,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gi=new w,Ra=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gi.fromBufferAttribute(this,t),gi.applyMatrix4(e),this.setXYZ(t,gi.x,gi.y,gi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gi.fromBufferAttribute(this,t),gi.applyNormalMatrix(e),this.setXYZ(t,gi.x,gi.y,gi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gi.fromBufferAttribute(this,t),gi.transformDirection(e),this.setXYZ(t,gi.x,gi.y,gi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ji(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tn=class extends Qi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,oa=new w,Sr=new w,Er=new w,wr=new K,la=new K,Of=new et,Fo=new w,ca=new w,Bo=new w,Gd=new K,Lh=new K,Wd=new K,gn=class extends Kt{constructor(e=new tn){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sl(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Ra(i,3,0,!1)),br.setAttribute("uv",new Ra(i,2,3,!1))}this.geometry=br,this.material=e,this.center=new K(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),Of.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-Er.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ko(Fo.set(-.5,-.5,0),Er,a,Sr,s,r),ko(ca.set(.5,-.5,0),Er,a,Sr,s,r),ko(Bo.set(.5,.5,0),Er,a,Sr,s,r),Gd.set(0,0),Lh.set(1,0),Wd.set(1,1);let o=e.ray.intersectTriangle(Fo,ca,Bo,!1,oa);if(o===null&&(ko(ca.set(-.5,.5,0),Er,a,Sr,s,r),Lh.set(0,1),o=e.ray.intersectTriangle(Fo,Bo,ca,!1,oa),o===null))return;let l=e.ray.origin.distanceTo(oa);l<e.near||l>e.far||t.push({distance:l,point:oa.clone(),uv:kn.getInterpolation(oa,Fo,ca,Bo,Gd,Lh,Wd,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ko(n,e,t,i,s,r){wr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(la.x=r*wr.x-s*wr.y,la.y=s*wr.x+r*wr.y):la.copy(wr),n.copy(e),n.x+=la.x,n.y+=la.y,n.applyMatrix4(Of)}var vn=class extends yi{constructor(e=null,t=1,i=1,s,r,a,o,l,c=ni,h=ni,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ca=class extends xi{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Tr=new et,$d=new et,Oo=[],Xd=new It,L0=new et,ha=new bt,ua=new Vn,zs=class extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ca(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,L0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new It),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Tr),Xd.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(Xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Tr),ua.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(i),e.ray.intersectsSphere(ua)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),$d.multiplyMatrices(i,Tr),ha.matrixWorld=$d,ha.raycast(e,Oo);for(let a=0,o=Oo.length;a<o;a++){let l=Oo[a];l.instanceId=r,l.object=this,t.push(l)}Oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vn(new Float32Array(s*this.count),s,this.count,Yl,rn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Uh=new w,U0=new w,N0=new Ze,Gi=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Uh.subVectors(i,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Uh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||N0.getNormalMatrix(e),s=this.coplanarPoint(Uh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new Vn,F0=new K(.5,.5),zo=new w,Nr=class{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,r=new Gi,a=new Gi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],_=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-a,d-h,p-g,R-y).normalize(),s[1].setComponents(c+a,d+h,p+g,R+y).normalize(),s[2].setComponents(c+o,d+u,p+v,R+_).normalize(),s[3].setComponents(c-o,d-u,p-v,R-_).normalize(),i)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,d-f,p-m,R-x).normalize();else if(s[4].setComponents(c-l,d-f,p-m,R-x).normalize(),t===Ki)s[5].setComponents(c+l,d+f,p+m,R+x).normalize();else if(t===Ma)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);let t=F0.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(zo.x=s.normal.x>0?e.max.x:e.min.x,zo.y=s.normal.y>0?e.max.y:e.min.y,zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ls=class extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rl=new w,al=new w,qd=new et,da=new Dr,Ho=new Vn,Nh=new w,Yd=new w,ol=class extends Kt{constructor(e=new ut,t=new ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)rl.fromBufferAttribute(t,s-1),al.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=rl.distanceTo(al);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;qd.copy(s).invert(),da.copy(e.ray).applyMatrix4(qd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){let p=h.getX(v),y=h.getX(v+1),_=Vo(this,e,da,l,p,y,v);_&&t.push(_)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(d),p=Vo(this,e,da,l,v,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){let p=Vo(this,e,da,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Vo(this,e,da,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vo(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(rl.fromBufferAttribute(o,s),al.fromBufferAttribute(o,r),t.distanceSqToSegment(rl,al,Nh,Yd)>i)return;Nh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Nh);if(!(c<e.near||c>e.far))return{distance:c,point:Yd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Zd=new w,Jd=new w,Hs=class extends ol{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Zd.fromBufferAttribute(t,s),Jd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zd.distanceTo(Jd);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var cs=class extends yi{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vs=class extends yi{constructor(e,t,i=ps,s,r,a,o=ni,l=ni,c,h=Rr,u=1){if(h!==Rr&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pa=class extends yi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var hs=class n extends ut{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,v=[],m=i/2,p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(d,2));function y(){let x=new w,R=new w,A=0,C=(t-e)/i;for(let D=0;D<=r;D++){let S=[],b=D/r,P=b*(t-e)+e;for(let N=0;N<=s;N++){let O=N/s,G=O*l+o,F=Math.sin(G),U=Math.cos(G);R.x=P*F,R.y=-b*i+m,R.z=P*U,u.push(R.x,R.y,R.z),x.set(F,C,U).normalize(),f.push(x.x,x.y,x.z),d.push(O,1-b),S.push(g++)}v.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let b=v[S][D],P=v[S+1][D],N=v[S+1][D+1],O=v[S][D+1];(e>0||S!==0)&&(h.push(b,P,O),A+=3),(t>0||S!==r-1)&&(h.push(P,N,O),A+=3)}c.addGroup(p,A,0),p+=A}function _(x){let R=g,A=new K,C=new w,D=0,S=x===!0?e:t,b=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let G=N/s*l+o,F=Math.cos(G),U=Math.sin(G);C.x=S*U,C.y=m*b,C.z=S*F,u.push(C.x,C.y,C.z),f.push(0,b,0),A.x=F*.5+.5,A.y=U*.5*b+.5,d.push(A.x,A.y),g++}for(let N=0;N<s;N++){let O=R+N,G=P+N;x===!0?h.push(G,G+1,O):h.push(G+1,G,O),D+=3}c.addGroup(p,D,x===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gn=class n extends hs{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new K:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,s=[],r=[],a=[],o=new w,l=new et;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(it(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(it(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fr=class extends Ni{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new K){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ll=class extends Fr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Go=new w,Fh=new gu,Bh=new gu,kh=new gu,Br=class extends Ni{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new w){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Go.subVectors(s[0],s[1]).add(s[0]),c=Go);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Go.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Go),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Fh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Bh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),kh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Fh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Bh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),kh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Fh.calc(l),Bh.calc(l),kh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function B0(n,e){let t=1-n;return t*t*e}function k0(n,e){return 2*(1-n)*n*e}function O0(n,e){return n*n*e}function va(n,e,t,i){return B0(n,e)+k0(n,t)+O0(n,i)}function z0(n,e){let t=1-n;return t*t*t*e}function H0(n,e){let t=1-n;return 3*t*t*n*e}function V0(n,e){return 3*(1-n)*n*n*e}function G0(n,e){return n*n*n*e}function xa(n,e,t,i,s){return z0(n,e)+H0(n,t)+V0(n,i)+G0(n,s)}var Ia=class extends Ni{constructor(e=new K,t=new K,i=new K,s=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new K){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xa(e,s.x,r.x,a.x,o.x),xa(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cl=class extends Ni{constructor(e=new w,t=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xa(e,s.x,r.x,a.x,o.x),xa(e,s.y,r.y,a.y,o.y),xa(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends Ni{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends Ni{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends Ni{constructor(e=new K,t=new K,i=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new K){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(va(e,s.x,r.x,a.x),va(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends Ni{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(va(e,s.x,r.x,a.x),va(e,s.y,r.y,a.y),va(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xn=class extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(jd(o,l.x,c.x,h.x,u.x),jd(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new K().fromArray(s))}return this}},ul=Object.freeze({__proto__:null,ArcCurve:ll,CatmullRomCurve3:Br,CubicBezierCurve:Ia,CubicBezierCurve3:cl,EllipseCurve:Fr,LineCurve:Da,LineCurve3:hl,QuadraticBezierCurve:La,QuadraticBezierCurve3:Ua,SplineCurve:xn}),dl=class extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ul[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ul[s.type]().fromJSON(s))}return this}},Na=class extends dl{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Da(this.currentPoint.clone(),new K(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new La(this.currentPoint.clone(),new K(e,t),new K(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Ia(this.currentPoint.clone(),new K(e,t),new K(i,s),new K(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new xn(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Fr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fi=class extends Na{constructor(e){super(e),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Na().fromJSON(s))}return this}};function W0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=zf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Z0(n,e,r,t)),n.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=n[f],g=n[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Fa(r,a,t,o,l,c,0),a}function zf(n,e,t,i,s){let r;if(s===ag(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Kd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Kd(a/i|0,n[a],n[a+1],r);return r&&kr(r,r.next)&&(ka(r),r=r.next),r}function Gs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(kr(t,t.next)||Pt(t.prev,t,t.next)===0)){if(ka(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fa(n,e,t,i,s,r,a){if(!n)return;!a&&r&&eg(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?X0(n,i,s,r):$0(n)){e.push(l.i,n.i,c.i),ka(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=q0(Gs(n),e),Fa(n,e,t,i,s,r,2)):a===2&&Y0(n,e,t,i,s,r):Fa(Gs(n),e,t,i,s,r,1);break}}}function $0(n){let e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&pa(s,o,r,l,a,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function X0(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Pt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),v=Math.max(o,l,c),m=Math.max(h,u,f),p=$h(d,g,e,t,i),y=$h(v,m,e,t,i),_=n.prevZ,x=n.nextZ;for(;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&pa(o,h,l,u,c,f,_.x,_.y)&&Pt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&pa(o,h,l,u,c,f,x.x,x.y)&&Pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&pa(o,h,l,u,c,f,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&pa(o,h,l,u,c,f,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function q0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!kr(i,s)&&Vf(i,t,t.next,s)&&Ba(i,s)&&Ba(s,i)&&(e.push(i.i,t.i,s.i),ka(t),ka(t.next),t=n=s),t=t.next}while(t!==n);return Gs(t)}function Y0(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ng(a,o)){let l=Gf(a,o);a=Gs(a,a.next),l=Gs(l,l.next),Fa(a,e,t,i,s,r,0),Fa(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Z0(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=zf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(ig(c))}s.sort(J0);for(let r=0;r<s.length;r++)t=j0(s[r],t);return t}function J0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function j0(n,e){let t=K0(n,e);if(!t)return e;let i=Gf(t,n);return Gs(i,i.next),Gs(t,t.next)}function K0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(kr(n,t))return t;do{if(kr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Hf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Ba(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Q0(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Q0(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function eg(n,e,t,i){let s=n;do s.z===0&&(s.z=$h(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,tg(s)}function tg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function $h(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ig(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function pa(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Hf(n,e,t,i,s,r,a,o)}function ng(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sg(n,e)&&(Ba(n,e)&&Ba(e,n)&&rg(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||kr(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function kr(n,e){return n.x===e.x&&n.y===e.y}function Vf(n,e,t,i){let s=$o(Pt(n,e,t)),r=$o(Pt(n,e,i)),a=$o(Pt(t,i,n)),o=$o(Pt(t,i,e));return!!(s!==r&&a!==o||s===0&&Wo(n,t,e)||r===0&&Wo(n,i,e)||a===0&&Wo(t,n,i)||o===0&&Wo(t,e,i))}function Wo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function $o(n){return n>0?1:n<0?-1:0}function sg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Vf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ba(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function rg(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Gf(n,e){let t=Xh(n.i,n.x,n.y),i=Xh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Kd(n,e,t,i){let s=Xh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ka(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Xh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ag(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var qh=class{static triangulate(e,t,i=2){return W0(e,t,i)}},fn=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Qd(e),ef(i,e);let a=e.length;t.forEach(Qd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ef(i,t[l]);let o=qh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Qd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ef(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var nn=class n extends ut{constructor(e=new Fi([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ne(s,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:og,_,x=!1,R,A,C,D;p&&(_=p.getSpacedPoints(h),x=!0,f=!1,R=p.computeFrenetFrames(h,!1),A=new w,C=new w,D=new w),f||(m=0,d=0,g=0,v=0);let S=o.extractPoints(c),b=S.shape,P=S.holes;if(!fn.isClockWise(b)){b=b.reverse();for(let oe=0,te=P.length;oe<te;oe++){let ee=P[oe];fn.isClockWise(ee)&&(P[oe]=ee.reverse())}}function O(oe){let ee=10000000000000001e-36,Q=oe[0];for(let ge=1;ge<=oe.length;ge++){let le=ge%oe.length,ve=oe[le],$e=ve.x-Q.x,Ve=ve.y-Q.y,T=$e*$e+Ve*Ve,M=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(Q.x),Math.abs(Q.y)),H=ee*M*M;if(T<=H){oe.splice(le,1),ge--;continue}Q=ve}}O(b),P.forEach(O);let G=P.length,F=b;for(let oe=0;oe<G;oe++){let te=P[oe];b=b.concat(te)}function U(oe,te,ee){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(te,ee)}let J=b.length;function W(oe,te,ee){let Q,ge,le,ve=oe.x-te.x,$e=oe.y-te.y,Ve=ee.x-oe.x,T=ee.y-oe.y,M=ve*ve+$e*$e,H=ve*T-$e*Ve;if(Math.abs(H)>Number.EPSILON){let Y=Math.sqrt(M),ae=Math.sqrt(Ve*Ve+T*T),Z=te.x-$e/Y,Re=te.y+ve/Y,de=ee.x-T/ae,Te=ee.y+Ve/ae,De=((de-Z)*T-(Te-Re)*Ve)/(ve*T-$e*Ve);Q=Z+ve*De-oe.x,ge=Re+$e*De-oe.y;let he=Q*Q+ge*ge;if(he<=2)return new K(Q,ge);le=Math.sqrt(he/2)}else{let Y=!1;ve>Number.EPSILON?Ve>Number.EPSILON&&(Y=!0):ve<-Number.EPSILON?Ve<-Number.EPSILON&&(Y=!0):Math.sign($e)===Math.sign(T)&&(Y=!0),Y?(Q=-$e,ge=ve,le=Math.sqrt(M)):(Q=ve,ge=$e,le=Math.sqrt(M/2))}return new K(Q/le,ge/le)}let ie=[];for(let oe=0,te=F.length,ee=te-1,Q=oe+1;oe<te;oe++,ee++,Q++)ee===te&&(ee=0),Q===te&&(Q=0),ie[oe]=W(F[oe],F[ee],F[Q]);let ne=[],pe,Ae=ie.concat();for(let oe=0,te=G;oe<te;oe++){let ee=P[oe];pe=[];for(let Q=0,ge=ee.length,le=ge-1,ve=Q+1;Q<ge;Q++,le++,ve++)le===ge&&(le=0),ve===ge&&(ve=0),pe[Q]=W(ee[Q],ee[le],ee[ve]);ne.push(pe),Ae=Ae.concat(pe)}let We;if(m===0)We=fn.triangulateShape(F,P);else{let oe=[],te=[];for(let ee=0;ee<m;ee++){let Q=ee/m,ge=d*Math.cos(Q*Math.PI/2),le=g*Math.sin(Q*Math.PI/2)+v;for(let ve=0,$e=F.length;ve<$e;ve++){let Ve=U(F[ve],ie[ve],le);Pe(Ve.x,Ve.y,-ge),Q===0&&oe.push(Ve)}for(let ve=0,$e=G;ve<$e;ve++){let Ve=P[ve];pe=ne[ve];let T=[];for(let M=0,H=Ve.length;M<H;M++){let Y=U(Ve[M],pe[M],le);Pe(Y.x,Y.y,-ge),Q===0&&T.push(Y)}Q===0&&te.push(T)}}We=fn.triangulateShape(oe,te)}let st=We.length,tt=g+v;for(let oe=0;oe<J;oe++){let te=f?U(b[oe],Ae[oe],tt):b[oe];x?(C.copy(R.normals[0]).multiplyScalar(te.x),A.copy(R.binormals[0]).multiplyScalar(te.y),D.copy(_[0]).add(C).add(A),Pe(D.x,D.y,D.z)):Pe(te.x,te.y,0)}for(let oe=1;oe<=h;oe++)for(let te=0;te<J;te++){let ee=f?U(b[te],Ae[te],tt):b[te];x?(C.copy(R.normals[oe]).multiplyScalar(ee.x),A.copy(R.binormals[oe]).multiplyScalar(ee.y),D.copy(_[oe]).add(C).add(A),Pe(D.x,D.y,D.z)):Pe(ee.x,ee.y,u/h*oe)}for(let oe=m-1;oe>=0;oe--){let te=oe/m,ee=d*Math.cos(te*Math.PI/2),Q=g*Math.sin(te*Math.PI/2)+v;for(let ge=0,le=F.length;ge<le;ge++){let ve=U(F[ge],ie[ge],Q);Pe(ve.x,ve.y,u+ee)}for(let ge=0,le=P.length;ge<le;ge++){let ve=P[ge];pe=ne[ge];for(let $e=0,Ve=ve.length;$e<Ve;$e++){let T=U(ve[$e],pe[$e],Q);x?Pe(T.x,T.y+_[h-1].y,_[h-1].x+ee):Pe(T.x,T.y,u+ee)}}}j(),se();function j(){let oe=s.length/3;if(f){let te=0,ee=J*te;for(let Q=0;Q<st;Q++){let ge=We[Q];we(ge[2]+ee,ge[1]+ee,ge[0]+ee)}te=h+m*2,ee=J*te;for(let Q=0;Q<st;Q++){let ge=We[Q];we(ge[0]+ee,ge[1]+ee,ge[2]+ee)}}else{for(let te=0;te<st;te++){let ee=We[te];we(ee[2],ee[1],ee[0])}for(let te=0;te<st;te++){let ee=We[te];we(ee[0]+J*h,ee[1]+J*h,ee[2]+J*h)}}i.addGroup(oe,s.length/3-oe,0)}function se(){let oe=s.length/3,te=0;be(F,te),te+=F.length;for(let ee=0,Q=P.length;ee<Q;ee++){let ge=P[ee];be(ge,te),te+=ge.length}i.addGroup(oe,s.length/3-oe,1)}function be(oe,te){let ee=oe.length;for(;--ee>=0;){let Q=ee,ge=ee-1;ge<0&&(ge=oe.length-1);for(let le=0,ve=h+m*2;le<ve;le++){let $e=J*le,Ve=J*(le+1),T=te+Q+$e,M=te+ge+$e,H=te+ge+Ve,Y=te+Q+Ve;rt(T,M,H,Y)}}}function Pe(oe,te,ee){l.push(oe),l.push(te),l.push(ee)}function we(oe,te,ee){pt(oe),pt(te),pt(ee);let Q=s.length/3,ge=y.generateTopUV(i,s,Q-3,Q-2,Q-1);I(ge[0]),I(ge[1]),I(ge[2])}function rt(oe,te,ee,Q){pt(oe),pt(te),pt(Q),pt(te),pt(ee),pt(Q);let ge=s.length/3,le=y.generateSideWallUV(i,s,ge-6,ge-3,ge-2,ge-1);I(le[0]),I(le[1]),I(le[3]),I(le[1]),I(le[2]),I(le[3])}function pt(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function I(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return lg(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ul[s.type]().fromJSON(s)),new n(i,e.options)}},og={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new K(r,a),new K(o,l),new K(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new K(a,1-l),new K(c,1-u),new K(f,1-g),new K(v,1-p)]:[new K(o,1-l),new K(h,1-u),new K(d,1-g),new K(m,1-p)]}};function lg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var us=class n extends ut{constructor(e=[new K(0,-.5),new K(.5,0),new K(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new w,f=new K,d=new w,g=new w,v=new w,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let y=0;y<=t;y++){let _=i+y*h*s,x=Math.sin(_),R=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*x,u.y=e[A].y,u.z=e[A].x*R,a.push(u.x,u.y,u.z),f.x=y/t,f.y=A/(e.length-1),o.push(f.x,f.y);let C=l[3*A+0]*x,D=l[3*A+1],S=l[3*A+0]*R;c.push(C,D,S)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let x=_+y*e.length,R=x,A=x+e.length,C=x+e.length+1,D=x+1;r.push(R,A,D),r.push(C,D,A)}this.setIndex(r),this.setAttribute("position",new Ne(a,3)),this.setAttribute("uv",new Ne(o,2)),this.setAttribute("normal",new Ne(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var si=class n extends ut{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let _=0;_<c;_++){let x=_*u-r;g.push(x,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let _=y+c*p,x=y+c*(p+1),R=y+1+c*(p+1),A=y+1+c*p;d.push(_,x,A),d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(v,3)),this.setAttribute("uv",new Ne(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ws=class n extends ut{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new w,g=new K;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let y=p+m,_=y,x=y+i+1,R=y+i+2,A=y+1;o.push(_,x,A),o.push(x,R,A)}}this.setIndex(o),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Oa=class n extends ut{constructor(e=new Fi([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(a,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;fn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];fn.isClockWise(y)===!0&&(g[m]=y.reverse())}let v=fn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){let y=v[m],_=y[0]+u,x=y[1]+u,R=y[2]+u;i.push(_,x,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return cg(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function cg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Qt=class n extends ut{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,f=new w,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let y=[],_=p/i,x=0;p===0&&a===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){let A=R/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+x,1-_),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let _=h[p][y+1],x=h[p][y],R=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&d.push(_,x,A),(p!==i-1||l<Math.PI)&&d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(v,3)),this.setAttribute("uv",new Ne(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sn=class n extends ut{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new w,u=new w,f=new w;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let v=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(v,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var za=class n extends ut{constructor(e=new Ua(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new K,h=new w,u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(d,2));function v(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),y(),p()}function m(_){h=e.getPointAt(_/t,h);let x=a.normals[_],R=a.binormals[_];for(let A=0;A<=s;A++){let C=A/s*Math.PI*2,D=Math.sin(C),S=-Math.cos(C);l.x=S*x.x+D*R.x,l.y=S*x.y+D*R.y,l.z=S*x.z+D*R.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let x=1;x<=s;x++){let R=(s+1)*(_-1)+(x-1),A=(s+1)*_+(x-1),C=(s+1)*_+x,D=(s+1)*(_-1)+x;g.push(R,A,D),g.push(A,C,D)}}function y(){for(let _=0;_<=t;_++)for(let x=0;x<=s;x++)c.x=_/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ul[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ha=class extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ft=class extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gt=class extends Ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Va=class extends Qi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var fl=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function hg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ml=class extends $s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vh:r=e,o=2*t-i;break;case Gh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:a=e,l=2*i-t;break;case Gh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*v+.5*g,x=d*m-d*v;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[c+R]+_*a[l+R]+x*a[u+R];return r}},gl=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},vl=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xo(t,this.TimeBufferType),this.values=Xo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xo(e.times,Array),values:Xo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case jo:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&hg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bi.prototype.ValueTypeName="";Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=jo;var ds=class extends Bi{constructor(e,t,i){super(e,t,i)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=ya;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}};xl.prototype.ValueTypeName="color";var yl=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}};yl.prototype.ValueTypeName="number";var _l=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ci.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ga=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Bi{constructor(e,t,i){super(e,t,i)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ya;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}};Ml.prototype.ValueTypeName="vector";var bl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Wf=new bl,Sl=class{constructor(e){this.manager=e!==void 0?e:Wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Wn=class extends Or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Oh=new et,tf=new w,nf=new w,El=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(tf),nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nf),t.updateMatrixWorld(),Oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var sf=new et,fa=new w,zh=new w,Yh=class extends El{constructor(){super(new vi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fa.setFromMatrixPosition(e.matrixWorld),i.position.copy(fa),zh.copy(i.position),zh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(zh),i.updateMatrixWorld(),s.makeTranslation(-fa.x,-fa.y,-fa.z),sf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf,i.coordinateSystem,i.reversedDepth)}},Wa=class extends Or{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Yh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ki=class extends Ta{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zh=class extends El{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yn=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Zh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var wl=class extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},$a=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var vu="\\[\\]\\.:\\/",ug=new RegExp("["+vu+"]","g"),xu="[^"+vu+"]",dg="[^"+vu.replace("\\.","")+"]",fg=/((?:WC+[\/:])*)/.source.replace("WC",xu),pg=/(WCOD+)?/.source.replace("WCOD",dg),mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),vg=new RegExp("^"+fg+pg+mg+gg+"$"),xg=["material","materials","bones","map"],Jh=class{constructor(e,t,i){let s=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ug,"")}static parseTrackName(e){let t=vg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);xg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Jh;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B1=new Float32Array(1);var rf=new et,$n=class{constructor(e,t,i=0,s=1/0){this.ray=new Dr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(e,t=!0,i=[]){return jh(e,this,i,t),i.sort(af),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)jh(e[s],this,i,t);return i.sort(af),i}};function af(n,e){return n.distance-e.distance}function jh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)jh(r[a],e,t,!0)}}function yu(n,e,t,i){let s=yg(i);switch(t){case lu:return n*e;case Yl:return n*e/s.components*s.byteLength;case Zl:return n*e/s.components*s.byteLength;case hu:return n*e*2/s.components*s.byteLength;case Jl:return n*e*2/s.components*s.byteLength;case cu:return n*e*3/s.components*s.byteLength;case Ti:return n*e*4/s.components*s.byteLength;case jl:return n*e*4/s.components*s.byteLength;case ja:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qa:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ql:case tc:return Math.max(n,16)*Math.max(e,8)/4;case Kl:case ec:return Math.max(n,8)*Math.max(e,8)/2;case ic:case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yc:case _c:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ec:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yg(n){switch(n){case Oi:case su:return{byteLength:1,components:1};case zr:case ru:case _i:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case ps:case $l:case rn:return{byteLength:4,components:1};case au:case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _g(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ug=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ng=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$g=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_v=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ax=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ox=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$x=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Mg,alphahash_pars_fragment:bg,alphamap_fragment:Sg,alphamap_pars_fragment:Eg,alphatest_fragment:wg,alphatest_pars_fragment:Tg,aomap_fragment:Ag,aomap_pars_fragment:Rg,batching_pars_vertex:Cg,batching_vertex:Pg,begin_vertex:Ig,beginnormal_vertex:Dg,bsdfs:Lg,iridescence_fragment:Ug,bumpmap_pars_fragment:Ng,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:Bg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Og,color_fragment:zg,color_pars_fragment:Hg,color_pars_vertex:Vg,color_vertex:Gg,common:Wg,cube_uv_reflection_fragment:$g,defaultnormal_vertex:Xg,displacementmap_pars_vertex:qg,displacementmap_vertex:Yg,emissivemap_fragment:Zg,emissivemap_pars_fragment:Jg,colorspace_fragment:jg,colorspace_pars_fragment:Kg,envmap_fragment:Qg,envmap_common_pars_fragment:ev,envmap_pars_fragment:tv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:fv,envmap_vertex:nv,fog_vertex:sv,fog_pars_vertex:rv,fog_fragment:av,fog_pars_fragment:ov,gradientmap_pars_fragment:lv,lightmap_pars_fragment:cv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:uv,lights_pars_begin:dv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:vv,lights_physical_fragment:xv,lights_physical_pars_fragment:yv,lights_fragment_begin:_v,lights_fragment_maps:Mv,lights_fragment_end:bv,logdepthbuf_fragment:Sv,logdepthbuf_pars_fragment:Ev,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Tv,map_fragment:Av,map_pars_fragment:Rv,map_particle_fragment:Cv,map_particle_pars_fragment:Pv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Lv,morphcolor_vertex:Uv,morphnormal_vertex:Nv,morphtarget_pars_vertex:Fv,morphtarget_vertex:Bv,normal_fragment_begin:kv,normal_fragment_maps:Ov,normal_pars_fragment:zv,normal_pars_vertex:Hv,normal_vertex:Vv,normalmap_pars_fragment:Gv,clearcoat_normal_fragment_begin:Wv,clearcoat_normal_fragment_maps:$v,clearcoat_pars_fragment:Xv,iridescence_pars_fragment:qv,opaque_fragment:Yv,packing:Zv,premultiplied_alpha_fragment:Jv,project_vertex:jv,dithering_fragment:Kv,dithering_pars_fragment:Qv,roughnessmap_fragment:ex,roughnessmap_pars_fragment:tx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:nx,shadowmap_vertex:sx,shadowmask_pars_fragment:rx,skinbase_vertex:ax,skinning_pars_vertex:ox,skinning_vertex:lx,skinnormal_vertex:cx,specularmap_fragment:hx,specularmap_pars_fragment:ux,tonemapping_fragment:dx,tonemapping_pars_fragment:fx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:gx,uv_pars_vertex:vx,uv_vertex:xx,worldpos_vertex:yx,background_vert:_x,background_frag:Mx,backgroundCube_vert:bx,backgroundCube_frag:Sx,cube_vert:Ex,cube_frag:wx,depth_vert:Tx,depth_frag:Ax,distanceRGBA_vert:Rx,distanceRGBA_frag:Cx,equirect_vert:Px,equirect_frag:Ix,linedashed_vert:Dx,linedashed_frag:Lx,meshbasic_vert:Ux,meshbasic_frag:Nx,meshlambert_vert:Fx,meshlambert_frag:Bx,meshmatcap_vert:kx,meshmatcap_frag:Ox,meshnormal_vert:zx,meshnormal_frag:Hx,meshphong_vert:Vx,meshphong_frag:Gx,meshphysical_vert:Wx,meshphysical_frag:$x,meshtoon_vert:Xx,meshtoon_frag:qx,points_vert:Yx,points_frag:Zx,shadow_vert:Jx,shadow_frag:jx,sprite_vert:Kx,sprite_frag:Qx},Me={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Sn={basic:{uniforms:hi([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:hi([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ye(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:hi([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:hi([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:hi([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ye(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:hi([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:hi([Me.points,Me.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:hi([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:hi([Me.common,Me.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:hi([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:hi([Me.sprite,Me.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:hi([Me.common,Me.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:hi([Me.lights,Me.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Sn.physical={uniforms:hi([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Ac={r:0,b:0,g:0},Js=new Ui,ey=new et;function ty(n,e,t,i,s,r,a){let o=new ye(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1,R=g(_);R===null?p(o,l):R&&R.isColor&&(p(R,1),x=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,x){let R=g(x);R&&(R.isCubeTexture||R.mapping===Za)?(h===void 0&&(h=new bt(new mn(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Zs(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Js.copy(x.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(Js)),h.material.toneMapped=lt.getTransfer(R.colorSpace)!==ft,(u!==R||f!==R.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,d=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new bt(new si(2,2),new yt({name:"BackgroundMaterial",uniforms:Zs(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(R.colorSpace)!==ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=R,f=R.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,x){_.getRGB(Ac,mu(n)),i.buffers.color.setClear(Ac.r,Ac.g,Ac.b,x,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:v,addToRenderList:m,dispose:y}}function iy(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(b,P,N,O,G){let F=!1,U=u(O,N,P);r!==U&&(r=U,c(r.object)),F=d(b,O,N,G),F&&g(b,O,N,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,x(b,P,N,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,P,N){let O=N.wireframe===!0,G=i[b.id];G===void 0&&(G={},i[b.id]=G);let F=G[P.id];F===void 0&&(F={},G[P.id]=F);let U=F[O];return U===void 0&&(U=f(l()),F[O]=U),U}function f(b){let P=[],N=[],O=[];for(let G=0;G<t;G++)P[G]=0,N[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:O,object:b,attributes:{},index:null}}function d(b,P,N,O){let G=r.attributes,F=P.attributes,U=0,J=N.getAttributes();for(let W in J)if(J[W].location>=0){let ne=G[W],pe=F[W];if(pe===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),ne===void 0||ne.attribute!==pe||pe&&ne.data!==pe.data)return!0;U++}return r.attributesNum!==U||r.index!==O}function g(b,P,N,O){let G={},F=P.attributes,U=0,J=N.getAttributes();for(let W in J)if(J[W].location>=0){let ne=F[W];ne===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));let pe={};pe.attribute=ne,ne&&ne.data&&(pe.data=ne.data),G[W]=pe,U++}r.attributes=G,r.attributesNum=U,r.index=O}function v(){let b=r.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){let N=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;N[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),G[b]!==P&&(n.vertexAttribDivisor(b,P),G[b]=P)}function y(){let b=r.newAttributes,P=r.enabledAttributes;for(let N=0,O=P.length;N<O;N++)P[N]!==b[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function _(b,P,N,O,G,F,U){U===!0?n.vertexAttribIPointer(b,P,N,G,F):n.vertexAttribPointer(b,P,N,O,G,F)}function x(b,P,N,O){v();let G=O.attributes,F=N.getAttributes(),U=P.defaultAttributeValues;for(let J in F){let W=F[J];if(W.location>=0){let ie=G[J];if(ie===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){let ne=ie.normalized,pe=ie.itemSize,Ae=e.get(ie);if(Ae===void 0)continue;let We=Ae.buffer,st=Ae.type,tt=Ae.bytesPerElement,j=st===n.INT||st===n.UNSIGNED_INT||ie.gpuType===$l;if(ie.isInterleavedBufferAttribute){let se=ie.data,be=se.stride,Pe=ie.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<W.locationSize;we++)p(W.location+we,se.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<W.locationSize;we++)m(W.location+we);n.bindBuffer(n.ARRAY_BUFFER,We);for(let we=0;we<W.locationSize;we++)_(W.location+we,pe/W.locationSize,st,ne,be*tt,(Pe+pe/W.locationSize*we)*tt,j)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)p(W.location+se,ie.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<W.locationSize;se++)m(W.location+se);n.bindBuffer(n.ARRAY_BUFFER,We);for(let se=0;se<W.locationSize;se++)_(W.location+se,pe/W.locationSize,st,ne,pe*tt,pe/W.locationSize*se*tt,j)}}else if(U!==void 0){let ne=U[J];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(W.location,ne);break;case 3:n.vertexAttrib3fv(W.location,ne);break;case 4:n.vertexAttrib4fv(W.location,ne);break;default:n.vertexAttrib1fv(W.location,ne)}}}}y()}function R(){D();for(let b in i){let P=i[b];for(let N in P){let O=P[N];for(let G in O)h(O[G].object),delete O[G];delete P[N]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let P=i[b.id];for(let N in P){let O=P[N];for(let G in O)h(O[G].object),delete O[G];delete P[N]}delete i[b.id]}function C(b){for(let P in i){let N=i[P];if(N[b.id]===void 0)continue;let O=N[b.id];for(let G in O)h(O[G].object),delete O[G];delete N[b.id]}}function D(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function ny(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Ti&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let D=C===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Oi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==rn&&!D)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function ry(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Gi,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,_=y*4,x=p.clippingState||null;l.value=x,x=h(g,f,_,d);for(let R=0;R!==_;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=d;_!==v;++_,x+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ay(n){let e=new WeakMap;function t(a,o){return o===Vl?a.mapping=qs:o===Gl&&(a.mapping=Ys),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Vl||o===Gl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new nl(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Vr=4,$f=[.125,.215,.35,.446,.526,.582],Qs=20,_u=new ki,Xf=new ye,Mu=null,bu=0,Su=0,Eu=!1,Ks=(1+Math.sqrt(5))/2,Hr=1/Ks,qf=[new w(-Ks,Hr,0),new w(Ks,Hr,0),new w(-Hr,0,Ks),new w(Hr,0,Ks),new w(0,Ks,-Hr),new w(0,Ks,Hr),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],oy=new w,Wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=oy}=r;Mu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mu,bu,Su),this._renderer.xr.enabled=Eu,e.scissorTest=!1,Rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:_i,format:Ti,colorSpace:ks,depthBuffer:!1},s=Yf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(r)),this._blurMaterial=cy(r,e,t)}return s}_compileMaterial(e){let t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,_u)}_sceneToCubeUV(e,t,i,s,r){let l=new vi(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Xf),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new Ot({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),m=new bt(new mn,v),p=!1,y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,p=!0):(v.color.copy(Xf),p=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let R=this._cubeSize;Rc(s,x*R,_>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===qs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Rc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,_u)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qf[(s-r-1)%qf.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new bt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qs-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Qs;m>Qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);let p=[],y=0;for(let C=0;C<Qs;++C){let D=C/v,S=Math.exp(-D*D/2);p.push(S),C===0?y+=S:C<m&&(y+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;let x=this._sizeLods[s],R=3*x*(s>_-Vr?s-_+Vr:0),A=4*(this._cubeSize-x);Rc(t,R,A,3*x,2*x),l.setRenderTarget(t),l.render(u,_u)}};function ly(n){let e=[],t=[],i=[],s=n,r=n-Vr+1+$f.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Vr?l=$f[a-n+Vr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*d),_=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){let C=A%3*2/3-1,D=A>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];y.set(S,v*g*A),_.set(f,m*g*A);let b=[A,A,A,A,A,A];x.set(b,p*g*A)}let R=new ut;R.setAttribute("position",new xi(y,v)),R.setAttribute("uv",new xi(_,m)),R.setAttribute("faceIndex",new xi(x,p)),e.push(R),s>Vr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yf(n,e,t){let i=new Vt(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function cy(n,e,t){let i=new Float32Array(Qs),s=new w(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Zf(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Jf(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Vl||l===Gl,h=l===qs||l===Ys;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Wr(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Wr(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function uy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dy(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,v=0;if(d!==null){let y=d.array;v=d.version;for(let _=0,x=y.length;_<x;_+=3){let R=y[_+0],A=y[_+1],C=y[_+2];f.push(R,A,A,C,C,R)}}else if(g!==void 0){let y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){let R=_+0,A=_+1,C=_+2;f.push(R,A,A,C,C,R)}}else return;let m=new(pu(f)?wa:Ea)(f,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function fy(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*v[y];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function py(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function my(n,e,t){let i=new WeakMap,s=new vt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*R*4*u),C=new Sa(A,x,R,u);C.type=rn,C.needsUpdate=!0;let D=_*4;for(let b=0;b<u;b++){let P=m[b],N=p[b],O=y[b],G=x*R*4*b;for(let F=0;F<P.count;F++){let U=F*D;d===!0&&(s.fromBufferAttribute(P,F),A[G+U+0]=s.x,A[G+U+1]=s.y,A[G+U+2]=s.z,A[G+U+3]=0),g===!0&&(s.fromBufferAttribute(N,F),A[G+U+4]=s.x,A[G+U+5]=s.y,A[G+U+6]=s.z,A[G+U+7]=0),v===!0&&(s.fromBufferAttribute(O,F),A[G+U+8]=s.x,A[G+U+9]=s.y,A[G+U+10]=s.z,A[G+U+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new K(x,R)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function gy(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var mp=new yi,jf=new Vs(1,1),gp=new Sa,vp=new tl,xp=new Aa,Kf=[],Qf=[],ep=new Float32Array(16),tp=new Float32Array(9),ip=new Float32Array(4);function $r(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Kf[s];if(r===void 0&&(r=new Float32Array(s),Kf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pc(n,e){let t=Qf[e];t===void 0&&(t=new Int32Array(e),Qf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function yy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function _y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function My(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;ip.set(i),n.uniformMatrix2fv(this.addr,!1,ip),qt(t,i)}}function by(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;tp.set(i),n.uniformMatrix3fv(this.addr,!1,tp),qt(t,i)}}function Sy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;ep.set(i),n.uniformMatrix4fv(this.addr,!1,ep),qt(t,i)}}function Ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Ry(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Py(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function Dy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jf.compareFunction=uu,r=jf):r=mp,t.setTexture2D(e||r,s)}function Ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vp,s)}function Uy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xp,s)}function Ny(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gp,s)}function Fy(n){switch(n){case 5126:return vy;case 35664:return xy;case 35665:return yy;case 35666:return _y;case 35674:return My;case 35675:return by;case 35676:return Sy;case 5124:case 35670:return Ey;case 35667:case 35671:return wy;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function By(n,e){n.uniform1fv(this.addr,e)}function ky(n,e){let t=$r(e,this.size,2);n.uniform2fv(this.addr,t)}function Oy(n,e){let t=$r(e,this.size,3);n.uniform3fv(this.addr,t)}function zy(n,e){let t=$r(e,this.size,4);n.uniform4fv(this.addr,t)}function Hy(n,e){let t=$r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vy(n,e){let t=$r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gy(n,e){let t=$r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wy(n,e){n.uniform1iv(this.addr,e)}function $y(n,e){n.uniform2iv(this.addr,e)}function Xy(n,e){n.uniform3iv(this.addr,e)}function qy(n,e){n.uniform4iv(this.addr,e)}function Yy(n,e){n.uniform1uiv(this.addr,e)}function Zy(n,e){n.uniform2uiv(this.addr,e)}function Jy(n,e){n.uniform3uiv(this.addr,e)}function jy(n,e){n.uniform4uiv(this.addr,e)}function Ky(n,e,t){let i=this.cache,s=e.length,r=Pc(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||mp,r[a])}function Qy(n,e,t){let i=this.cache,s=e.length,r=Pc(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vp,r[a])}function e_(n,e,t){let i=this.cache,s=e.length,r=Pc(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xp,r[a])}function t_(n,e,t){let i=this.cache,s=e.length,r=Pc(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gp,r[a])}function i_(n){switch(n){case 5126:return By;case 35664:return ky;case 35665:return Oy;case 35666:return zy;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return $y;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return Zy;case 36295:return Jy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}var Tu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fy(t.type)}},Au=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}},Ru=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},wu=/(\w+)(\])?(\[|\.)?/g;function np(n,e){n.seq.push(e),n.map[e.id]=e}function n_(n,e,t){let i=n.name,s=i.length;for(wu.lastIndex=0;;){let r=wu.exec(i),a=wu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){np(t,c===void 0?new Tu(o,n,e):new Au(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Ru(o),np(t,u)),t=u}}}var Gr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);n_(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function sp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var s_=37297,r_=0;function a_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var rp=new Ze;function o_(n){lt._getMatrix(rp,lt.workingColorSpace,n);let e=`mat3( ${rp.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case _a:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ap(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+a_(n.getShaderSource(e),o)}else return r}function l_(n,e){let t=o_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function c_(n,e){let t;switch(e){case Fl:t="Linear";break;case Bl:t="Reinhard";break;case kl:t="Cineon";break;case Mn:t="ACESFilmic";break;case zl:t="AgX";break;case Hl:t="Neutral";break;case Ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cc=new w;function h_(){lt.getLuminanceCoefficients(Cc);let n=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function d_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function to(n){return n!==""}function op(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(n){return n.replace(p_,g_)}var m_=new Map;function g_(n,e){let t=nt[e];if(t===void 0){let i=m_.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cu(t)}var v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cp(n){return n.replace(v_,x_)}function x_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function __(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function b_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case iu:e="ENVMAP_BLENDING_MULTIPLY";break;case Sf:e="ENVMAP_BLENDING_MIX";break;case Ef:e="ENVMAP_BLENDING_ADD";break}return e}function S_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function E_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=y_(t),c=__(t),h=M_(t),u=b_(t),f=S_(t),d=u_(t),g=d_(r),v=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`)):(m=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Xn?c_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,l_("linearToOutputTexel",t.outputColorSpace),h_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),a=Cu(a),a=op(a,t),a=lp(a,t),o=Cu(o),o=op(o,t),o=lp(o,t),a=cp(a),o=cp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+m+a,x=y+p+o,R=sp(s,s.VERTEX_SHADER,_),A=sp(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(R)||"",G=s.getShaderInfoLog(A)||"",F=N.trim(),U=O.trim(),J=G.trim(),W=!0,ie=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,R,A);else{let ne=ap(s,R,"vertex"),pe=ap(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+ne+`
`+pe)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||J==="")&&(ie=!1);ie&&(P.diagnostics={runnable:W,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(R),s.deleteShader(A),D=new Gr(s,v),S=f_(s,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,s_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}var w_=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Iu(e),t.set(e,i)),i}},Iu=class{constructor(e){this.id=w_++,this.code=e,this.usedTimes=0}};function T_(n,e,t,i,s,r,a){let o=new Lr,l=new Pu,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,P,N,O){let G=N.fog,F=O.geometry,U=S.isMeshStandardMaterial?N.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||U),W=J&&J.mapping===Za?J.image.height:null,ie=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,pe=ne!==void 0?ne.length:0,Ae=0;F.morphAttributes.position!==void 0&&(Ae=1),F.morphAttributes.normal!==void 0&&(Ae=2),F.morphAttributes.color!==void 0&&(Ae=3);let We,st,tt,j;if(ie){let mt=Sn[ie];We=mt.vertexShader,st=mt.fragmentShader}else We=S.vertexShader,st=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);let se=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Pe=O.isInstancedMesh===!0,we=O.isBatchedMesh===!0,rt=!!S.map,pt=!!S.matcap,I=!!J,oe=!!S.aoMap,te=!!S.lightMap,ee=!!S.bumpMap,Q=!!S.normalMap,ge=!!S.displacementMap,le=!!S.emissiveMap,ve=!!S.metalnessMap,$e=!!S.roughnessMap,Ve=S.anisotropy>0,T=S.clearcoat>0,M=S.dispersion>0,H=S.iridescence>0,Y=S.sheen>0,ae=S.transmission>0,Z=Ve&&!!S.anisotropyMap,Re=T&&!!S.clearcoatMap,de=T&&!!S.clearcoatNormalMap,Te=T&&!!S.clearcoatRoughnessMap,De=H&&!!S.iridescenceMap,he=H&&!!S.iridescenceThicknessMap,Se=Y&&!!S.sheenColorMap,He=Y&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,xe=!!S.specularColorMap,Xe=!!S.specularIntensityMap,L=ae&&!!S.transmissionMap,ce=ae&&!!S.thicknessMap,me=!!S.gradientMap,Ie=!!S.alphaMap,ue=S.alphaTest>0,re=!!S.alphaHash,Ue=!!S.extensions,Ke=Xn;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ke=n.toneMapping);let St={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:We,fragmentShader:st,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:we,batchingColor:we&&O._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&O.instanceColor!==null,instancingMorph:Pe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ks,alphaToCoverage:!!S.alphaToCoverage,map:rt,matcap:pt,envMap:I,envMapMode:I&&J.mapping,envMapCubeUVHeight:W,aoMap:oe,lightMap:te,bumpMap:ee,normalMap:Q,displacementMap:f&&ge,emissiveMap:le,normalMapObjectSpace:Q&&S.normalMapType===Rf,normalMapTangentSpace:Q&&S.normalMapType===Tc,metalnessMap:ve,roughnessMap:$e,anisotropy:Ve,anisotropyMap:Z,clearcoat:T,clearcoatMap:Re,clearcoatNormalMap:de,clearcoatRoughnessMap:Te,dispersion:M,iridescence:H,iridescenceMap:De,iridescenceThicknessMap:he,sheen:Y,sheenColorMap:Se,sheenRoughnessMap:He,specularMap:Fe,specularColorMap:xe,specularIntensityMap:Xe,transmission:ae,transmissionMap:L,thicknessMap:ce,gradientMap:me,opaque:S.transparent===!1&&S.blending===Fs&&S.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ue,alphaHash:re,combine:S.combine,mapUv:rt&&v(S.map.channel),aoMapUv:oe&&v(S.aoMap.channel),lightMapUv:te&&v(S.lightMap.channel),bumpMapUv:ee&&v(S.bumpMap.channel),normalMapUv:Q&&v(S.normalMap.channel),displacementMapUv:ge&&v(S.displacementMap.channel),emissiveMapUv:le&&v(S.emissiveMap.channel),metalnessMapUv:ve&&v(S.metalnessMap.channel),roughnessMapUv:$e&&v(S.roughnessMap.channel),anisotropyMapUv:Z&&v(S.anisotropyMap.channel),clearcoatMapUv:Re&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&v(S.sheenRoughnessMap.channel),specularMapUv:Fe&&v(S.specularMap.channel),specularColorMapUv:xe&&v(S.specularColorMap.channel),specularIntensityMapUv:Xe&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:ce&&v(S.thicknessMap.channel),alphaMapUv:Ie&&v(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Q||Ve),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(rt||Ie),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ae,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:rt&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:le&&S.emissiveMap.isVideoTexture===!0&&lt.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nt,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(b,S),_(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let b=g[S.type],P;if(b){let N=Sn[b];P=Mi.clone(N.uniforms)}else P=S.uniforms;return P}function R(S,b){let P;for(let N=0,O=h.length;N<O;N++){let G=h[N];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new E_(n,b,S,r),h.push(P)),P}function A(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:D}}function A_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function R_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function up(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,d,g,v,m){let p=a(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,v,m){let p=a(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||R_),i.length>1&&i.sort(f||up),s.length>1&&s.sort(f||up)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function C_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new dp,n.set(i,[a])):s>=r.length?(a=new dp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function P_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ye};break;case"SpotLight":t={position:new w,direction:new w,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new w,halfWidth:new w,halfHeight:new w};break}return n[e.id]=t,t}}}function I_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var D_=0;function L_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function U_(n){let e=new P_,t=I_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);let s=new w,r=new et,a=new et;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,y=0,_=0,x=0,R=0,A=0,C=0;c.sort(L_);for(let S=0,b=c.length;S<b;S++){let P=c[S],N=P.color,O=P.intensity,G=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*O,u+=N.g*O,f+=N.b*O;else if(P.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(P.sh.coefficients[U],O);C++}else if(P.isDirectionalLight){let U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=P.shadow.matrix,y++}i.directional[d]=U,d++}else if(P.isSpotLight){let U=e.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(N).multiplyScalar(O),U.distance=G,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,i.spot[v]=U;let J=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=J.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=F,x++}v++}else if(P.isRectAreaLight){let U=e.get(P);U.color.copy(N).multiplyScalar(O),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=U,m++}else if(P.isPointLight){let U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){let J=P.shadow,W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=U,g++}else if(P.isHemisphereLight){let U=e.get(P);U.skyColor.copy(P.color).multiplyScalar(O),U.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==_||D.numSpotShadows!==x||D.numSpotMaps!==R||D.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,D.directionalLength=d,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=_,D.numSpotShadows=x,D.numSpotMaps=R,D.numLightProbes=C,i.version=D_++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let _=c[p];if(_.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(_.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(_.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function fp(n){let e=new U_(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function N_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new fp(n),e.set(s,[o])):r>=a.length?(o=new fp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k_(n,e,t){let i=new Nr,s=new K,r=new K,a=new vt,o=new fl({depthPacking:Af}),l=new pl,c={},h=t.maxTextureSize,u={[zn]:Wt,[Wt]:zn,[Nt]:Nt},f=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:F_,fragmentShader:B_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ut;g.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let p=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(zt),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=p!==_n&&this.type===_n,G=p===_n&&this.type!==_n;for(let F=0,U=A.length;F<U;F++){let J=A[F],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ie=W.getFrameExtents();if(s.multiply(ie),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,W.mapSize.y=r.y)),W.map===null||O===!0||G===!0){let pe=this.type!==_n?{minFilter:ni,magFilter:ni}:{};W.map!==null&&W.map.dispose(),W.map=new Vt(s.x,s.y,pe),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let ne=W.getViewportCount();for(let pe=0;pe<ne;pe++){let Ae=W.getViewport(pe);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),N.viewport(a),W.updateMatrices(J,pe),i=W.getFrustum(),x(C,D,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===_n&&y(W,D),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,b,P)};function y(A,C){let D=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vt(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,D,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,D,d,v,null)}function _(A,C,D,S){let b=null,P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)b=P;else if(b=D.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=b.uuid,O=C.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let F=G[O];F===void 0&&(F=b.clone(),G[O]=F,C.addEventListener("dispose",R)),b=F}if(b.visible=C.visible,b.wireframe=C.wireframe,S===_n?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=n.properties.get(b);N.light=D}return b}function x(A,C,D,S,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===_n)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let O=e.update(A),G=A.material;if(Array.isArray(G)){let F=O.groups;for(let U=0,J=F.length;U<J;U++){let W=F[U],ie=G[W.materialIndex];if(ie&&ie.visible){let ne=_(A,ie,S,b);A.onBeforeShadow(n,A,C,D,O,ne,W),n.renderBufferDirect(D,null,O,ne,A,W),A.onAfterShadow(n,A,C,D,O,ne,W)}}}else if(G.visible){let F=_(A,G,S,b);A.onBeforeShadow(n,A,C,D,O,F,null),n.renderBufferDirect(D,null,O,F,A,null),A.onAfterShadow(n,A,C,D,O,F,null)}}let N=A.children;for(let O=0,G=N.length;O<G;O++)x(N[O],C,D,S,b)}function R(A){A.target.removeEventListener("dispose",R);for(let D in c){let S=c[D],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var O_={[Cl]:Pl,[Il]:Ul,[Dl]:Nl,[Bs]:Ll,[Pl]:Cl,[Ul]:Il,[Nl]:Dl,[Ll]:Bs};function z_(n,e){function t(){let L=!1,ce=new vt,me=null,Ie=new vt(0,0,0,0);return{setMask:function(ue){me!==ue&&!L&&(n.colorMask(ue,ue,ue,ue),me=ue)},setLocked:function(ue){L=ue},setClear:function(ue,re,Ue,Ke,St){St===!0&&(ue*=Ke,re*=Ke,Ue*=Ke),ce.set(ue,re,Ue,Ke),Ie.equals(ce)===!1&&(n.clearColor(ue,re,Ue,Ke),Ie.copy(ce))},reset:function(){L=!1,me=null,Ie.set(-1,0,0,0)}}}function i(){let L=!1,ce=!1,me=null,Ie=null,ue=null;return{setReversed:function(re){if(ce!==re){let Ue=e.get("EXT_clip_control");re?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ce=re;let Ke=ue;ue=null,this.setClear(Ke)}},getReversed:function(){return ce},setTest:function(re){re?se(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(re){me!==re&&!L&&(n.depthMask(re),me=re)},setFunc:function(re){if(ce&&(re=O_[re]),Ie!==re){switch(re){case Cl:n.depthFunc(n.NEVER);break;case Pl:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Dl:n.depthFunc(n.EQUAL);break;case Ll:n.depthFunc(n.GEQUAL);break;case Ul:n.depthFunc(n.GREATER);break;case Nl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=re}},setLocked:function(re){L=re},setClear:function(re){ue!==re&&(ce&&(re=1-re),n.clearDepth(re),ue=re)},reset:function(){L=!1,me=null,Ie=null,ue=null,ce=!1}}}function s(){let L=!1,ce=null,me=null,Ie=null,ue=null,re=null,Ue=null,Ke=null,St=null;return{setTest:function(mt){L||(mt?se(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(mt){ce!==mt&&!L&&(n.stencilMask(mt),ce=mt)},setFunc:function(mt,In,un){(me!==mt||Ie!==In||ue!==un)&&(n.stencilFunc(mt,In,un),me=mt,Ie=In,ue=un)},setOp:function(mt,In,un){(re!==mt||Ue!==In||Ke!==un)&&(n.stencilOp(mt,In,un),re=mt,Ue=In,Ke=un)},setLocked:function(mt){L=mt},setClear:function(mt){St!==mt&&(n.clearStencil(mt),St=mt)},reset:function(){L=!1,ce=null,me=null,Ie=null,ue=null,re=null,Ue=null,Ke=null,St=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,_=null,x=null,R=null,A=null,C=new ye(0,0,0),D=0,S=!1,b=null,P=null,N=null,O=null,G=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,J=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=J>=2);let ie=null,ne={},pe=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),We=new vt().fromArray(pe),st=new vt().fromArray(Ae);function tt(L,ce,me,Ie){let ue=new Uint8Array(4),re=n.createTexture();n.bindTexture(L,re),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<me;Ue++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ce+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return re}let j={};j[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(Bs),ee(!1),Q(Kh),se(n.CULL_FACE),oe(zt);function se(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function be(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Pe(L,ce){return u[L]!==ce?(n.bindFramebuffer(L,ce),u[L]=ce,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function we(L,ce){let me=d,Ie=!1;if(L){me=f.get(ce),me===void 0&&(me=[],f.set(ce,me));let ue=L.textures;if(me.length!==ue.length||me[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Ue=ue.length;re<Ue;re++)me[re]=n.COLOR_ATTACHMENT0+re;me.length=ue.length,Ie=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(me)}function rt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let pt={[Di]:n.FUNC_ADD,[cf]:n.FUNC_SUBTRACT,[hf]:n.FUNC_REVERSE_SUBTRACT};pt[uf]=n.MIN,pt[df]=n.MAX;let I={[Xs]:n.ZERO,[ff]:n.ONE,[pf]:n.SRC_COLOR,[Yo]:n.SRC_ALPHA,[xf]:n.SRC_ALPHA_SATURATE,[Ya]:n.DST_COLOR,[qa]:n.DST_ALPHA,[mf]:n.ONE_MINUS_SRC_COLOR,[Zo]:n.ONE_MINUS_SRC_ALPHA,[vf]:n.ONE_MINUS_DST_COLOR,[gf]:n.ONE_MINUS_DST_ALPHA,[yf]:n.CONSTANT_COLOR,[_f]:n.ONE_MINUS_CONSTANT_COLOR,[Mf]:n.CONSTANT_ALPHA,[bf]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(L,ce,me,Ie,ue,re,Ue,Ke,St,mt){if(L===zt){v===!0&&(be(n.BLEND),v=!1);return}if(v===!1&&(se(n.BLEND),v=!0),L!==Rl){if(L!==m||mt!==S){if((p!==Di||x!==Di)&&(n.blendEquation(n.FUNC_ADD),p=Di,x=Di),mt)switch(L){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xa:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case eu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,_=null,R=null,A=null,C.set(0,0,0),D=0,m=L,S=mt}return}ue=ue||ce,re=re||me,Ue=Ue||Ie,(ce!==p||ue!==x)&&(n.blendEquationSeparate(pt[ce],pt[ue]),p=ce,x=ue),(me!==y||Ie!==_||re!==R||Ue!==A)&&(n.blendFuncSeparate(I[me],I[Ie],I[re],I[Ue]),y=me,_=Ie,R=re,A=Ue),(Ke.equals(C)===!1||St!==D)&&(n.blendColor(Ke.r,Ke.g,Ke.b,St),C.copy(Ke),D=St),m=L,S=!1}function te(L,ce){L.side===Nt?be(n.CULL_FACE):se(n.CULL_FACE);let me=L.side===Wt;ce&&(me=!me),ee(me),L.blending===Fs&&L.transparent===!1?oe(zt):oe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Ie=L.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(L){b!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),b=L)}function Q(L){L!==of?(se(n.CULL_FACE),L!==P&&(L===Kh?n.cullFace(n.BACK):L===lf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),P=L}function ge(L){L!==N&&(U&&n.lineWidth(L),N=L)}function le(L,ce,me){L?(se(n.POLYGON_OFFSET_FILL),(O!==ce||G!==me)&&(n.polygonOffset(ce,me),O=ce,G=me)):be(n.POLYGON_OFFSET_FILL)}function ve(L){L?se(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function $e(L){L===void 0&&(L=n.TEXTURE0+F-1),ie!==L&&(n.activeTexture(L),ie=L)}function Ve(L,ce,me){me===void 0&&(ie===null?me=n.TEXTURE0+F-1:me=ie);let Ie=ne[me];Ie===void 0&&(Ie={type:void 0,texture:void 0},ne[me]=Ie),(Ie.type!==L||Ie.texture!==ce)&&(ie!==me&&(n.activeTexture(me),ie=me),n.bindTexture(L,ce||j[L]),Ie.type=L,Ie.texture=ce)}function T(){let L=ne[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(L){We.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function He(L){st.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),st.copy(L))}function Fe(L,ce){let me=c.get(ce);me===void 0&&(me=new WeakMap,c.set(ce,me));let Ie=me.get(L);Ie===void 0&&(Ie=n.getUniformBlockIndex(ce,L.name),me.set(L,Ie))}function xe(L,ce){let Ie=c.get(ce).get(L);l.get(ce)!==Ie&&(n.uniformBlockBinding(ce,Ie,L.__bindingPointIndex),l.set(ce,Ie))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,ne={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,_=null,x=null,R=null,A=null,C=new ye(0,0,0),D=0,S=!1,b=null,P=null,N=null,O=null,G=null,We.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:be,bindFramebuffer:Pe,drawBuffers:we,useProgram:rt,setBlending:oe,setMaterial:te,setFlipSided:ee,setCullFace:Q,setLineWidth:ge,setPolygonOffset:le,setScissorTest:ve,activeTexture:$e,bindTexture:Ve,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:H,texImage2D:De,texImage3D:he,updateUBOMapping:Fe,uniformBlockBinding:xe,texStorage2D:de,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:ae,compressedTexSubImage2D:Z,compressedTexSubImage3D:Re,scissor:Se,viewport:He,reset:Xe}}function H_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return d?new OffscreenCanvas(T,M):ba("canvas")}function v(T,M,H){let Y=1,ae=Ve(T);if((ae.width>H||ae.height>H)&&(Y=H/Math.max(ae.width,ae.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Z=Math.floor(Y*ae.width),Re=Math.floor(Y*ae.height);u===void 0&&(u=g(Z,Re));let de=M?g(Z,Re):u;return de.width=Z,de.height=Re,de.getContext("2d").drawImage(T,0,0,Z,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Z+"x"+Re+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(T,M,H,Y,ae=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=M;if(M===n.RED&&(H===n.FLOAT&&(Z=n.R32F),H===n.HALF_FLOAT&&(Z=n.R16F),H===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.R8UI),H===n.UNSIGNED_SHORT&&(Z=n.R16UI),H===n.UNSIGNED_INT&&(Z=n.R32UI),H===n.BYTE&&(Z=n.R8I),H===n.SHORT&&(Z=n.R16I),H===n.INT&&(Z=n.R32I)),M===n.RG&&(H===n.FLOAT&&(Z=n.RG32F),H===n.HALF_FLOAT&&(Z=n.RG16F),H===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RG8UI),H===n.UNSIGNED_SHORT&&(Z=n.RG16UI),H===n.UNSIGNED_INT&&(Z=n.RG32UI),H===n.BYTE&&(Z=n.RG8I),H===n.SHORT&&(Z=n.RG16I),H===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),H===n.UNSIGNED_INT&&(Z=n.RGB32UI),H===n.BYTE&&(Z=n.RGB8I),H===n.SHORT&&(Z=n.RGB16I),H===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),H===n.UNSIGNED_INT&&(Z=n.RGBA32UI),H===n.BYTE&&(Z=n.RGBA8I),H===n.SHORT&&(Z=n.RGBA16I),H===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),M===n.RGBA){let Re=ae?_a:lt.getTransfer(Y);H===n.FLOAT&&(Z=n.RGBA32F),H===n.HALF_FLOAT&&(Z=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Z=Re===ft?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(T,M){let H;return T?M===null||M===ps||M===ms?H=n.DEPTH24_STENCIL8:M===rn?H=n.DEPTH32F_STENCIL8:M===zr&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ps||M===ms?H=n.DEPTH_COMPONENT24:M===rn?H=n.DEPTH_COMPONENT32F:M===zr&&(H=n.DEPTH_COMPONENT16),H}function R(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ni&&T.minFilter!==Li?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){let M=T.target;M.removeEventListener("dispose",A),D(M),M.isVideoTexture&&h.delete(M)}function C(T){let M=T.target;M.removeEventListener("dispose",C),b(M)}function D(T){let M=i.get(T);if(M.__webglInit===void 0)return;let H=T.source,Y=f.get(H);if(Y){let ae=Y[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&S(T),Object.keys(Y).length===0&&f.delete(H)}i.remove(T)}function S(T){let M=i.get(T);n.deleteTexture(M.__webglTexture);let H=T.source,Y=f.get(H);delete Y[M.__cacheKey],a.memory.textures--}function b(T){let M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let ae=0;ae<M.__webglFramebuffer[Y].length;ae++)n.deleteFramebuffer(M.__webglFramebuffer[Y][ae]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=T.textures;for(let Y=0,ae=H.length;Y<ae;Y++){let Z=i.get(H[Y]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(H[Y])}i.remove(T)}let P=0;function N(){P=0}function O(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function G(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function F(T,M){let H=i.get(T);if(T.isVideoTexture&&ve(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&H.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,T,M);return}}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+M)}function U(T,M){let H=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){j(H,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+M)}function J(T,M){let H=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){j(H,T,M);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+M)}function W(T,M){let H=i.get(T);if(T.version>0&&H.__version!==T.version){se(H,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+M)}let ie={[Wi]:n.REPEAT,[os]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},ne={[ni]:n.NEAREST,[wf]:n.NEAREST_MIPMAP_NEAREST,[Ja]:n.NEAREST_MIPMAP_LINEAR,[Li]:n.LINEAR,[Wl]:n.LINEAR_MIPMAP_NEAREST,[bn]:n.LINEAR_MIPMAP_LINEAR},pe={[Cf]:n.NEVER,[Nf]:n.ALWAYS,[Pf]:n.LESS,[uu]:n.LEQUAL,[If]:n.EQUAL,[Uf]:n.GEQUAL,[Df]:n.GREATER,[Lf]:n.NOTEQUAL};function Ae(T,M){if(M.type===rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Li||M.magFilter===Wl||M.magFilter===Ja||M.magFilter===bn||M.minFilter===Li||M.minFilter===Wl||M.minFilter===Ja||M.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ie[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ie[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ie[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ne[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ne[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ni||M.minFilter!==Ja&&M.minFilter!==bn||M.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function We(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));let Y=M.source,ae=f.get(Y);ae===void 0&&(ae={},f.set(Y,ae));let Z=G(M);if(Z!==T.__cacheKey){ae[Z]===void 0&&(ae[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ae[Z].usedTimes++;let Re=ae[T.__cacheKey];Re!==void 0&&(ae[T.__cacheKey].usedTimes--,Re.usedTimes===0&&S(M)),T.__cacheKey=Z,T.__webglTexture=ae[Z].texture}return H}function st(T,M,H){return Math.floor(Math.floor(T/H)/M)}function tt(T,M,H,Y){let Z=T.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,H,Y,M.data);else{Z.sort((he,Se)=>he.start-Se.start);let Re=0;for(let he=1;he<Z.length;he++){let Se=Z[Re],He=Z[he],Fe=Se.start+Se.count,xe=st(He.start,M.width,4),Xe=st(Se.start,M.width,4);He.start<=Fe+1&&xe===Xe&&st(He.start+He.count-1,M.width,4)===xe?Se.count=Math.max(Se.count,He.start+He.count-Se.start):(++Re,Z[Re]=He)}Z.length=Re+1;let de=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let he=0,Se=Z.length;he<Se;he++){let He=Z[he],Fe=Math.floor(He.start/4),xe=Math.ceil(He.count/4),Xe=Fe%M.width,L=Math.floor(Fe/M.width),ce=xe,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Xe,L,ce,me,H,Y,M.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function j(T,M,H){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);let ae=We(T,M),Z=M.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+H);let Re=i.get(Z);if(Z.version!==Re.__version||ae===!0){t.activeTexture(n.TEXTURE0+H);let de=lt.getPrimaries(lt.workingColorSpace),Te=M.colorSpace===qn?null:lt.getPrimaries(M.colorSpace),De=M.colorSpace===qn||de===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let he=v(M.image,!1,s.maxTextureSize);he=$e(M,he);let Se=r.convert(M.format,M.colorSpace),He=r.convert(M.type),Fe=_(M.internalFormat,Se,He,M.colorSpace,M.isVideoTexture);Ae(Y,M);let xe,Xe=M.mipmaps,L=M.isVideoTexture!==!0,ce=Re.__version===void 0||ae===!0,me=Z.dataReady,Ie=R(M,he);if(M.isDepthTexture)Fe=x(M.format===gs,M.type),ce&&(L?t.texStorage2D(n.TEXTURE_2D,1,Fe,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Fe,he.width,he.height,0,Se,He,null));else if(M.isDataTexture)if(Xe.length>0){L&&ce&&t.texStorage2D(n.TEXTURE_2D,Ie,Fe,Xe[0].width,Xe[0].height);for(let ue=0,re=Xe.length;ue<re;ue++)xe=Xe[ue],L?me&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,xe.width,xe.height,Se,He,xe.data):t.texImage2D(n.TEXTURE_2D,ue,Fe,xe.width,xe.height,0,Se,He,xe.data);M.generateMipmaps=!1}else L?(ce&&t.texStorage2D(n.TEXTURE_2D,Ie,Fe,he.width,he.height),me&&tt(M,he,Se,He)):t.texImage2D(n.TEXTURE_2D,0,Fe,he.width,he.height,0,Se,He,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Fe,Xe[0].width,Xe[0].height,he.depth);for(let ue=0,re=Xe.length;ue<re;ue++)if(xe=Xe[ue],M.format!==Ti)if(Se!==null)if(L){if(me)if(M.layerUpdates.size>0){let Ue=yu(xe.width,xe.height,M.format,M.type);for(let Ke of M.layerUpdates){let St=xe.data.subarray(Ke*Ue/xe.data.BYTES_PER_ELEMENT,(Ke+1)*Ue/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Ke,xe.width,xe.height,1,Se,St)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,xe.width,xe.height,he.depth,Se,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Fe,xe.width,xe.height,he.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,xe.width,xe.height,he.depth,Se,He,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Fe,xe.width,xe.height,he.depth,0,Se,He,xe.data)}else{L&&ce&&t.texStorage2D(n.TEXTURE_2D,Ie,Fe,Xe[0].width,Xe[0].height);for(let ue=0,re=Xe.length;ue<re;ue++)xe=Xe[ue],M.format!==Ti?Se!==null?L?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?me&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,xe.width,xe.height,Se,He,xe.data):t.texImage2D(n.TEXTURE_2D,ue,Fe,xe.width,xe.height,0,Se,He,xe.data)}else if(M.isDataArrayTexture)if(L){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Fe,he.width,he.height,he.depth),me)if(M.layerUpdates.size>0){let ue=yu(he.width,he.height,M.format,M.type);for(let re of M.layerUpdates){let Ue=he.data.subarray(re*ue/he.data.BYTES_PER_ELEMENT,(re+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,he.width,he.height,1,Se,He,Ue)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Se,He,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,he.width,he.height,he.depth,0,Se,He,he.data);else if(M.isData3DTexture)L?(ce&&t.texStorage3D(n.TEXTURE_3D,Ie,Fe,he.width,he.height,he.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Se,He,he.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,he.width,he.height,he.depth,0,Se,He,he.data);else if(M.isFramebufferTexture){if(ce)if(L)t.texStorage2D(n.TEXTURE_2D,Ie,Fe,he.width,he.height);else{let ue=he.width,re=he.height;for(let Ue=0;Ue<Ie;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Fe,ue,re,0,Se,He,null),ue>>=1,re>>=1}}else if(Xe.length>0){if(L&&ce){let ue=Ve(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Fe,ue.width,ue.height)}for(let ue=0,re=Xe.length;ue<re;ue++)xe=Xe[ue],L?me&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Se,He,xe):t.texImage2D(n.TEXTURE_2D,ue,Fe,Se,He,xe);M.generateMipmaps=!1}else if(L){if(ce){let ue=Ve(he);t.texStorage2D(n.TEXTURE_2D,Ie,Fe,ue.width,ue.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,He,he)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Se,He,he);m(M)&&p(Y),Re.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function se(T,M,H){if(M.image.length!==6)return;let Y=We(T,M),ae=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+H);let Z=i.get(ae);if(ae.version!==Z.__version||Y===!0){t.activeTexture(n.TEXTURE0+H);let Re=lt.getPrimaries(lt.workingColorSpace),de=M.colorSpace===qn?null:lt.getPrimaries(M.colorSpace),Te=M.colorSpace===qn||Re===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let De=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let re=0;re<6;re++)!De&&!he?Se[re]=v(M.image[re],!0,s.maxCubemapSize):Se[re]=he?M.image[re].image:M.image[re],Se[re]=$e(M,Se[re]);let He=Se[0],Fe=r.convert(M.format,M.colorSpace),xe=r.convert(M.type),Xe=_(M.internalFormat,Fe,xe,M.colorSpace),L=M.isVideoTexture!==!0,ce=Z.__version===void 0||Y===!0,me=ae.dataReady,Ie=R(M,He);Ae(n.TEXTURE_CUBE_MAP,M);let ue;if(De){L&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Xe,He.width,He.height);for(let re=0;re<6;re++){ue=Se[re].mipmaps;for(let Ue=0;Ue<ue.length;Ue++){let Ke=ue[Ue];M.format!==Ti?Fe!==null?L?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,Ke.width,Ke.height,Fe,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,Xe,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,Ke.width,Ke.height,Fe,xe,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,Xe,Ke.width,Ke.height,0,Fe,xe,Ke.data)}}}else{if(ue=M.mipmaps,L&&ce){ue.length>0&&Ie++;let re=Ve(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Xe,re.width,re.height)}for(let re=0;re<6;re++)if(he){L?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Se[re].width,Se[re].height,Fe,xe,Se[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,Se[re].width,Se[re].height,0,Fe,xe,Se[re].data);for(let Ue=0;Ue<ue.length;Ue++){let St=ue[Ue].image[re].image;L?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,St.width,St.height,Fe,xe,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,Xe,St.width,St.height,0,Fe,xe,St.data)}}else{L?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Fe,xe,Se[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,Fe,xe,Se[re]);for(let Ue=0;Ue<ue.length;Ue++){let Ke=ue[Ue];L?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,Fe,xe,Ke.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,Xe,Fe,xe,Ke.image[re])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),Z.__version=ae.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function be(T,M,H,Y,ae,Z){let Re=r.convert(H.format,H.colorSpace),de=r.convert(H.type),Te=_(H.internalFormat,Re,de,H.colorSpace),De=i.get(M),he=i.get(H);if(he.__renderTarget=M,!De.__hasExternalTextures){let Se=Math.max(1,M.width>>Z),He=Math.max(1,M.height>>Z);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,Z,Te,Se,He,M.depth,0,Re,de,null):t.texImage2D(ae,Z,Te,Se,He,0,Re,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),le(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ae,he.__webglTexture,0,ge(M)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ae,he.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(T,M,H){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){let Y=M.depthTexture,ae=Y&&Y.isDepthTexture?Y.type:null,Z=x(M.stencilBuffer,ae),Re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=ge(M);le(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,Z,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,T)}else{let Y=M.textures;for(let ae=0;ae<Y.length;ae++){let Z=Y[ae],Re=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),Te=_(Z.internalFormat,Re,de,Z.colorSpace),De=ge(M);H&&le(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Te,M.width,M.height):le(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Te,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Te,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);let ae=Y.__webglTexture,Z=ge(M);if(M.depthTexture.format===Rr)le(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(M.depthTexture.format===gs)le(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function rt(T){let M=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",ae)};Y.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let Y=T.texture.mipmaps;Y&&Y.length>0?we(M.__webglFramebuffer[0],T):we(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),Pe(M.__webglDepthbuffer[Y],T,!1);else{let ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,Z)}}else{let Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Pe(M.__webglDepthbuffer,T,!1);else{let ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(T,M,H){let Y=i.get(T);M!==void 0&&be(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&rt(T)}function I(T){let M=T.texture,H=i.get(T),Y=i.get(M);T.addEventListener("dispose",C);let ae=T.textures,Z=T.isWebGLCubeRenderTarget===!0,Re=ae.length>1;if(Re||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,a.memory.textures++),Z){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let Te=0;Te<M.mipmaps.length;Te++)H.__webglFramebuffer[de][Te]=n.createFramebuffer()}else H.__webglFramebuffer[de]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)H.__webglFramebuffer[de]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Re)for(let de=0,Te=ae.length;de<Te;de++){let De=i.get(ae[de]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&le(T)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){let Te=ae[de];H.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[de]);let De=r.convert(Te.format,Te.colorSpace),he=r.convert(Te.type),Se=_(Te.internalFormat,De,he,Te.colorSpace,T.isXRRenderTarget===!0),He=ge(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Se,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,H.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)be(H.__webglFramebuffer[de][Te],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Te);else be(H.__webglFramebuffer[de],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,Te=ae.length;de<Te;de++){let De=ae[de],he=i.get(De),Se=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Se=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,he.__webglTexture),Ae(Se,De),be(H.__webglFramebuffer,T,De,n.COLOR_ATTACHMENT0+de,Se,0),m(De)&&p(Se)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Y.__webglTexture),Ae(de,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)be(H.__webglFramebuffer[Te],T,M,n.COLOR_ATTACHMENT0,de,Te);else be(H.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,de,0);m(M)&&p(de),t.unbindTexture()}T.depthBuffer&&rt(T)}function oe(T){let M=T.textures;for(let H=0,Y=M.length;H<Y;H++){let ae=M[H];if(m(ae)){let Z=y(T),Re=i.get(ae).__webglTexture;t.bindTexture(Z,Re),p(Z),t.unbindTexture()}}}let te=[],ee=[];function Q(T){if(T.samples>0){if(le(T)===!1){let M=T.textures,H=T.width,Y=T.height,ae=n.COLOR_BUFFER_BIT,Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(T),de=M.length>1;if(de)for(let De=0;De<M.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Te=T.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let De=0;De<M.length;De++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);let he=i.get(M[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,H,Y,0,0,H,Y,ae,n.NEAREST),l===!0&&(te.length=0,ee.length=0,te.push(n.COLOR_ATTACHMENT0+De),T.depthBuffer&&T.resolveDepthBuffer===!1&&(te.push(Z),ee.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let De=0;De<M.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);let he=i.get(M[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ge(T){return Math.min(s.maxSamples,T.samples)}function le(T){let M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(T){let M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function $e(T,M){let H=T.colorSpace,Y=T.format,ae=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==ks&&H!==qn&&(lt.getTransfer(H)===ft?(Y!==Ti||ae!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=pt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=le}function V_(n,e){function t(i,s=qn){let r,a=lt.getTransfer(s);if(i===Oi)return n.UNSIGNED_BYTE;if(i===Xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===au)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ou)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===su)return n.BYTE;if(i===ru)return n.SHORT;if(i===zr)return n.UNSIGNED_SHORT;if(i===$l)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===rn)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===lu)return n.ALPHA;if(i===cu)return n.RGB;if(i===Ti)return n.RGBA;if(i===Rr)return n.DEPTH_COMPONENT;if(i===gs)return n.DEPTH_STENCIL;if(i===Yl)return n.RED;if(i===Zl)return n.RED_INTEGER;if(i===hu)return n.RG;if(i===Jl)return n.RG_INTEGER;if(i===jl)return n.RGBA_INTEGER;if(i===ja||i===Ka||i===Qa||i===eo)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===Ql||i===ec||i===tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ic||i===nc||i===sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ic||i===nc)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rc||i===ac||i===oc||i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===vc||i===xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ac)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===_c||i===Mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yc)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bc||i===Sc||i===Ec||i===wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new yt({vertexShader:G_,fragmentShader:W_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends Hn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new Du,p={},y=t.getContextAttributes(),_=null,x=null,R=[],A=[],C=new K,D=null,S=new vi;S.viewport=new vt;let b=new vi;b.viewport=new vt;let P=[S,b],N=new wl,O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=R[j];return se===void 0&&(se=new Ur,R[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=R[j];return se===void 0&&(se=new Ur,R[j]=se),se.getGripSpace()},this.getHand=function(j){let se=R[j];return se===void 0&&(se=new Ur,R[j]=se),se.getHandSpace()};function F(j){let se=A.indexOf(j.inputSource);if(se===-1)return;let be=R[se];be!==void 0&&(be.update(j.inputSource,j.frame,c||a),be.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",J);for(let j=0;j<R.length;j++){let se=A[j];se!==null&&(A[j]=null,R[j].disconnect(se))}O=null,G=null,m.reset();for(let j in p)delete p[j];e.setRenderTarget(_),d=null,f=null,u=null,s=null,x=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",U),s.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Pe=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?gs:Rr,Pe=y.stencil?ms:ps);let rt={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(rt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Vt(f.textureWidth,f.textureHeight,{format:Ti,type:Oi,depthTexture:new Vs(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Vt(d.framebufferWidth,d.framebufferHeight,{format:Ti,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(j){for(let se=0;se<j.removed.length;se++){let be=j.removed[se],Pe=A.indexOf(be);Pe>=0&&(A[Pe]=null,R[Pe].disconnect(be))}for(let se=0;se<j.added.length;se++){let be=j.added[se],Pe=A.indexOf(be);if(Pe===-1){for(let rt=0;rt<R.length;rt++)if(rt>=A.length){A.push(be),Pe=rt;break}else if(A[rt]===null){A[rt]=be,Pe=rt;break}if(Pe===-1)break}let we=R[Pe];we&&we.connect(be)}}let W=new w,ie=new w;function ne(j,se,be){W.setFromMatrixPosition(se.matrixWorld),ie.setFromMatrixPosition(be.matrixWorld);let Pe=W.distanceTo(ie),we=se.projectionMatrix.elements,rt=be.projectionMatrix.elements,pt=we[14]/(we[10]-1),I=we[14]/(we[10]+1),oe=(we[9]+1)/we[5],te=(we[9]-1)/we[5],ee=(we[8]-1)/we[0],Q=(rt[8]+1)/rt[0],ge=pt*ee,le=pt*Q,ve=Pe/(-ee+Q),$e=ve*-ee;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($e),j.translateZ(ve),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Ve=pt+ve,T=I+ve,M=ge-$e,H=le+(Pe-$e),Y=oe*I/T*Ve,ae=te*I/T*Ve;j.projectionMatrix.makePerspective(M,H,Y,ae,Ve,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function pe(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let se=j.near,be=j.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(be=m.depthFar)),N.near=b.near=S.near=se,N.far=b.far=S.far=be,(O!==N.near||G!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,G=N.far),N.layers.mask=j.layers.mask|6,S.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;let Pe=j.parent,we=N.cameras;pe(N,Pe);for(let rt=0;rt<we.length;rt++)pe(we[rt],Pe);we.length===2?ne(N,S,b):N.projectionMatrix.copy(S.projectionMatrix),Ae(j,N,Pe)};function Ae(j,se,be){be===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Cr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return p[j]};let We=null;function st(j,se){if(h=se.getViewerPose(c||a),g=se,h!==null){let be=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Pe=!1;be.length!==N.cameras.length&&(N.cameras.length=0,Pe=!0);for(let I=0;I<be.length;I++){let oe=be[I],te=null;if(d!==null)te=d.getViewport(oe);else{let Q=u.getViewSubImage(f,oe);te=Q.viewport,I===0&&(e.setRenderTargetTextures(x,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(x))}let ee=P[I];ee===void 0&&(ee=new vi,ee.layers.enable(I),ee.viewport=new vt,P[I]=ee),ee.matrix.fromArray(oe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(oe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(te.x,te.y,te.width,te.height),I===0&&(N.matrix.copy(ee.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Pe===!0&&N.cameras.push(ee)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let I=u.getDepthInformation(be[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let I=0;I<be.length;I++){let oe=be[I].camera;if(oe){let te=p[oe];te||(te=new Pa,p[oe]=te);let ee=u.getCameraImage(oe);te.sourceTexture=ee}}}}for(let be=0;be<R.length;be++){let Pe=A[be],we=R[be];Pe!==null&&we!==void 0&&we.update(Pe,se,c||a)}We&&We(j,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let tt=new pp;tt.setAnimationLoop(st),this.setAnimationLoop=function(j){We=j},this.dispose=function(){}}},js=new Ui,$_=new et;function X_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,mu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,js.copy(x),js.x*=-1,js.y*=-1,js.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(js)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function q_(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let x=_.program;i.uniformBlockBinding(y,x)}function c(y,_){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));let R=_.program;i.updateUBOMapping(y,R);let A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){let _=u();y.__bindingPointIndex=_;let x=n.createBuffer(),R=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=s[y.id],x=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let A=0,C=x.length;A<C;A++){let D=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,b=D.length;S<b;S++){let P=D[S];if(d(P,A,S,R)===!0){let N=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],G=0;for(let F=0;F<O.length;F++){let U=O[F],J=v(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,N+G,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,_,x,R){let A=y.value,C=_+"_"+x;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{let D=R[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(y){let _=y.uniforms,x=0,R=16;for(let C=0,D=_.length;C<D;C++){let S=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,P=S.length;b<P;b++){let N=S[b],O=Array.isArray(N.value)?N.value:[N.value];for(let G=0,F=O.length;G<F;G++){let U=O[G],J=v(U),W=x%R,ie=W%J.boundary,ne=W+ie;x+=ie,ne!==0&&R-ne<J.storage&&(x+=R-ne),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=J.storage}}}let A=x%R;return A>0&&(x+=R-A),y.__size=x,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var vs=class{constructor(e={}){let{canvas:t=Ff(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,R=!1;this._outputColorSpace=Ct;let A=0,C=0,D=null,S=-1,b=null,P=new vt,N=new vt,O=null,G=new ye(0),F=0,U=t.width,J=t.height,W=1,ie=null,ne=null,pe=new vt(0,0,U,J),Ae=new vt(0,0,U,J),We=!1,st=new Nr,tt=!1,j=!1,se=new et,be=new w,Pe=new vt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function pt(){return D===null?W:1}let I=i;function oe(E,k){return t.getContext(E,k)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tl}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ue,!1),I===null){let k="webgl2";if(I=oe(k,E),I===null)throw oe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let te,ee,Q,ge,le,ve,$e,Ve,T,M,H,Y,ae,Z,Re,de,Te,De,he,Se,He,Fe,xe,Xe;function L(){te=new uy(I),te.init(),Fe=new V_(I,te),ee=new sy(I,te,e,Fe),Q=new z_(I,te),ee.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),ge=new py(I),le=new A_,ve=new H_(I,te,Q,le,ee,Fe,ge),$e=new ay(x),Ve=new hy(x),T=new _g(I),xe=new iy(I,T),M=new dy(I,T,ge,xe),H=new gy(I,M,T,ge),he=new my(I,ee,ve),de=new ry(le),Y=new T_(x,$e,Ve,te,ee,xe,de),ae=new X_(x,le),Z=new C_,Re=new N_(te),De=new ty(x,$e,Ve,Q,H,d,l),Te=new k_(x,H,ee),Xe=new q_(I,ge,ee,Q),Se=new ny(I,te,ge),He=new fy(I,te,ge),ge.programs=Y.programs,x.capabilities=ee,x.extensions=te,x.properties=le,x.renderLists=Z,x.shadowMap=Te,x.state=Q,x.info=ge}L();let ce=new Lu(x,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(U,J,!1))},this.getSize=function(E){return E.set(U,J)},this.setSize=function(E,k,X=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,J=k,t.width=Math.floor(E*W),t.height=Math.floor(k*W),X===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(U*W,J*W).floor()},this.setDrawingBufferSize=function(E,k,X){U=E,J=k,W=X,t.width=Math.floor(E*X),t.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(pe)},this.setViewport=function(E,k,X,q){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,k,X,q),Q.viewport(P.copy(pe).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,k,X,q){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,k,X,q),Q.scissor(N.copy(Ae).multiplyScalar(W).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(E){Q.setScissorTest(We=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,X=!0){let q=0;if(E){let z=!1;if(D!==null){let fe=D.texture.format;z=fe===jl||fe===Jl||fe===Zl}if(z){let fe=D.texture.type,Ee=fe===Oi||fe===ps||fe===zr||fe===ms||fe===Xl||fe===ql,Le=De.getClearColor(),Ce=De.getClearAlpha(),Ge=Le.r,qe=Le.g,ke=Le.b;Ee?(g[0]=Ge,g[1]=qe,g[2]=ke,g[3]=Ce,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Ge,v[1]=qe,v[2]=ke,v[3]=Ce,I.clearBufferiv(I.COLOR,0,v))}else q|=I.COLOR_BUFFER_BIT}k&&(q|=I.DEPTH_BUFFER_BIT),X&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),De.dispose(),Z.dispose(),Re.dispose(),le.dispose(),$e.dispose(),Ve.dispose(),H.dispose(),xe.dispose(),Xe.dispose(),Y.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",un),ce.removeEventListener("sessionend",yd),Cs.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=ge.autoReset,k=Te.enabled,X=Te.autoUpdate,q=Te.needsUpdate,z=Te.type;L(),ge.autoReset=E,Te.enabled=k,Te.autoUpdate=X,Te.needsUpdate=q,Te.type=z}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function re(E){let k=E.target;k.removeEventListener("dispose",re),Ue(k)}function Ue(E){Ke(E),le.remove(E)}function Ke(E){let k=le.get(E).programs;k!==void 0&&(k.forEach(function(X){Y.releaseProgram(X)}),E.isShaderMaterial&&Y.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,q,z,fe){k===null&&(k=we);let Ee=z.isMesh&&z.matrixWorld.determinant()<0,Le=qm(E,k,X,q,z);Q.setMaterial(q,Ee);let Ce=X.index,Ge=1;if(q.wireframe===!0){if(Ce=M.getWireframeAttribute(X),Ce===void 0)return;Ge=2}let qe=X.drawRange,ke=X.attributes.position,at=qe.start*Ge,xt=(qe.start+qe.count)*Ge;fe!==null&&(at=Math.max(at,fe.start*Ge),xt=Math.min(xt,(fe.start+fe.count)*Ge)),Ce!==null?(at=Math.max(at,0),xt=Math.min(xt,Ce.count)):ke!=null&&(at=Math.max(at,0),xt=Math.min(xt,ke.count));let Ut=xt-at;if(Ut<0||Ut===1/0)return;xe.setup(z,q,Le,X,Ce);let Et,Mt=Se;if(Ce!==null&&(Et=T.get(Ce),Mt=He,Mt.setIndex(Et)),z.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*pt()),Mt.setMode(I.LINES)):Mt.setMode(I.TRIANGLES);else if(z.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),Q.setLineWidth(ze*pt()),z.isLineSegments?Mt.setMode(I.LINES):z.isLineLoop?Mt.setMode(I.LINE_LOOP):Mt.setMode(I.LINE_STRIP)}else z.isPoints?Mt.setMode(I.POINTS):z.isSprite&&Mt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ze=z._multiDrawStarts,At=z._multiDrawCounts,ht=z._multiDrawCount,Ri=Ce?T.get(Ce).bytesPerElement:1,cr=le.get(q).currentProgram.getUniforms();for(let Ci=0;Ci<ht;Ci++)cr.setValue(I,"_gl_DrawID",Ci),Mt.render(ze[Ci]/Ri,At[Ci])}else if(z.isInstancedMesh)Mt.renderInstances(at,Ut,z.count);else if(X.isInstancedBufferGeometry){let ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,At=Math.min(X.instanceCount,ze);Mt.renderInstances(at,Ut,At)}else Mt.render(at,Ut)};function St(E,k,X){E.transparent===!0&&E.side===Nt&&E.forceSinglePass===!1?(E.side=Wt,E.needsUpdate=!0,yo(E,k,X),E.side=zn,E.needsUpdate=!0,yo(E,k,X),E.side=Nt):yo(E,k,X)}this.compile=function(E,k,X=null){X===null&&(X=E),p=Re.get(X),p.init(k),_.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==X&&E.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let q=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let fe=z.material;if(fe)if(Array.isArray(fe))for(let Ee=0;Ee<fe.length;Ee++){let Le=fe[Ee];St(Le,X,z),q.add(Le)}else St(fe,X,z),q.add(fe)}),p=_.pop(),q},this.compileAsync=function(E,k,X=null){let q=this.compile(E,k,X);return new Promise(z=>{function fe(){if(q.forEach(function(Ee){le.get(Ee).currentProgram.isReady()&&q.delete(Ee)}),q.size===0){z(E);return}setTimeout(fe,10)}te.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let mt=null;function In(E){mt&&mt(E)}function un(){Cs.stop()}function yd(){Cs.start()}let Cs=new pp;Cs.setAnimationLoop(In),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(E){mt=E,ce.setAnimationLoop(E),E===null?Cs.stop():Cs.start()},ce.addEventListener("sessionstart",un),ce.addEventListener("sessionend",yd),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,D),p=Re.get(E,_.length),p.init(k),_.push(p),se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),st.setFromProjectionMatrix(se,Ki,k.reversedDepth),j=this.localClippingEnabled,tt=de.init(this.clippingPlanes,j),m=Z.get(E,y.length),m.init(),y.push(m),ce.enabled===!0&&ce.isPresenting===!0){let fe=x.xr.getDepthSensingMesh();fe!==null&&uh(fe,k,-1/0,x.sortObjects)}uh(E,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ie,ne),rt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,rt&&De.addToRenderList(m,E),this.info.render.frame++,tt===!0&&de.beginShadows();let X=p.state.shadowsArray;Te.render(X,E,k),tt===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){let fe=k.cameras;if(z.length>0)for(let Ee=0,Le=fe.length;Ee<Le;Ee++){let Ce=fe[Ee];Md(q,z,E,Ce)}rt&&De.render(E);for(let Ee=0,Le=fe.length;Ee<Le;Ee++){let Ce=fe[Ee];_d(m,E,Ce,Ce.viewport)}}else z.length>0&&Md(q,z,E,k),rt&&De.render(E),_d(m,E,k);D!==null&&C===0&&(ve.updateMultisampleRenderTarget(D),ve.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(x,E,k),xe.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],tt===!0&&de.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function uh(E,k,X,q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||st.intersectsSprite(E)){q&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(se);let Ee=H.update(E),Le=E.material;Le.visible&&m.push(E,Ee,Le,X,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||st.intersectsObject(E))){let Ee=H.update(E),Le=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Pe.copy(Ee.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(se)),Array.isArray(Le)){let Ce=Ee.groups;for(let Ge=0,qe=Ce.length;Ge<qe;Ge++){let ke=Ce[Ge],at=Le[ke.materialIndex];at&&at.visible&&m.push(E,Ee,at,X,Pe.z,ke)}}else Le.visible&&m.push(E,Ee,Le,X,Pe.z,null)}}let fe=E.children;for(let Ee=0,Le=fe.length;Ee<Le;Ee++)uh(fe[Ee],k,X,q)}function _d(E,k,X,q){let z=E.opaque,fe=E.transmissive,Ee=E.transparent;p.setupLightsView(X),tt===!0&&de.setGlobalState(x.clippingPlanes,X),q&&Q.viewport(P.copy(q)),z.length>0&&xo(z,k,X),fe.length>0&&xo(fe,k,X),Ee.length>0&&xo(Ee,k,X),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Md(E,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Vt(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?_i:Oi,minFilter:bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let fe=p.state.transmissionRenderTarget[q.id],Ee=q.viewport||P;fe.setSize(Ee.z*x.transmissionResolutionScale,Ee.w*x.transmissionResolutionScale);let Le=x.getRenderTarget(),Ce=x.getActiveCubeFace(),Ge=x.getActiveMipmapLevel();x.setRenderTarget(fe),x.getClearColor(G),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),rt&&De.render(X);let qe=x.toneMapping;x.toneMapping=Xn;let ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),tt===!0&&de.setGlobalState(x.clippingPlanes,q),xo(E,X,q),ve.updateMultisampleRenderTarget(fe),ve.updateRenderTargetMipmap(fe),te.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let xt=0,Ut=k.length;xt<Ut;xt++){let Et=k[xt],Mt=Et.object,ze=Et.geometry,At=Et.material,ht=Et.group;if(At.side===Nt&&Mt.layers.test(q.layers)){let Ri=At.side;At.side=Wt,At.needsUpdate=!0,bd(Mt,X,q,ze,At,ht),At.side=Ri,At.needsUpdate=!0,at=!0}}at===!0&&(ve.updateMultisampleRenderTarget(fe),ve.updateRenderTargetMipmap(fe))}x.setRenderTarget(Le,Ce,Ge),x.setClearColor(G,F),ke!==void 0&&(q.viewport=ke),x.toneMapping=qe}function xo(E,k,X){let q=k.isScene===!0?k.overrideMaterial:null;for(let z=0,fe=E.length;z<fe;z++){let Ee=E[z],Le=Ee.object,Ce=Ee.geometry,Ge=Ee.group,qe=Ee.material;qe.allowOverride===!0&&q!==null&&(qe=q),Le.layers.test(X.layers)&&bd(Le,k,X,Ce,qe,Ge)}}function bd(E,k,X,q,z,fe){E.onBeforeRender(x,k,X,q,z,fe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,k,X,q,E,fe),z.transparent===!0&&z.side===Nt&&z.forceSinglePass===!1?(z.side=Wt,z.needsUpdate=!0,x.renderBufferDirect(X,k,q,z,E,fe),z.side=zn,z.needsUpdate=!0,x.renderBufferDirect(X,k,q,z,E,fe),z.side=Nt):x.renderBufferDirect(X,k,q,z,E,fe),E.onAfterRender(x,k,X,q,z,fe)}function yo(E,k,X){k.isScene!==!0&&(k=we);let q=le.get(E),z=p.state.lights,fe=p.state.shadowsArray,Ee=z.state.version,Le=Y.getParameters(E,z.state,fe,k,X),Ce=Y.getProgramCacheKey(Le),Ge=q.programs;q.environment=E.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(E.isMeshStandardMaterial?Ve:$e).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",re),Ge=new Map,q.programs=Ge);let qe=Ge.get(Ce);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===Ee)return Ed(E,Le),qe}else Le.uniforms=Y.getUniforms(E),E.onBeforeCompile(Le,x),qe=Y.acquireProgram(Le,Ce),Ge.set(Ce,qe),q.uniforms=Le.uniforms;let ke=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=de.uniform),Ed(E,Le),q.needsLights=Zm(E),q.lightsStateVersion=Ee,q.needsLights&&(ke.ambientLightColor.value=z.state.ambient,ke.lightProbe.value=z.state.probe,ke.directionalLights.value=z.state.directional,ke.directionalLightShadows.value=z.state.directionalShadow,ke.spotLights.value=z.state.spot,ke.spotLightShadows.value=z.state.spotShadow,ke.rectAreaLights.value=z.state.rectArea,ke.ltc_1.value=z.state.rectAreaLTC1,ke.ltc_2.value=z.state.rectAreaLTC2,ke.pointLights.value=z.state.point,ke.pointLightShadows.value=z.state.pointShadow,ke.hemisphereLights.value=z.state.hemi,ke.directionalShadowMap.value=z.state.directionalShadowMap,ke.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ke.spotShadowMap.value=z.state.spotShadowMap,ke.spotLightMatrix.value=z.state.spotLightMatrix,ke.spotLightMap.value=z.state.spotLightMap,ke.pointShadowMap.value=z.state.pointShadowMap,ke.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=qe,q.uniformsList=null,qe}function Sd(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Gr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Ed(E,k){let X=le.get(E);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function qm(E,k,X,q,z){k.isScene!==!0&&(k=we),ve.resetTextureUnits();let fe=k.fog,Ee=q.isMeshStandardMaterial?k.environment:null,Le=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ks,Ce=(q.isMeshStandardMaterial?Ve:$e).get(q.envMap||Ee),Ge=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ke=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color,Ut=Xn;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ut=x.toneMapping);let Et=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Mt=Et!==void 0?Et.length:0,ze=le.get(q),At=p.state.lights;if(tt===!0&&(j===!0||E!==b)){let mi=E===b&&q.id===S;de.setState(q,E,mi)}let ht=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==At.state.version||ze.outputColorSpace!==Le||z.isBatchedMesh&&ze.batching===!1||!z.isBatchedMesh&&ze.batching===!0||z.isBatchedMesh&&ze.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ze.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ze.instancing===!1||!z.isInstancedMesh&&ze.instancing===!0||z.isSkinnedMesh&&ze.skinning===!1||!z.isSkinnedMesh&&ze.skinning===!0||z.isInstancedMesh&&ze.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ze.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ze.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ze.instancingMorph===!1&&z.morphTexture!==null||ze.envMap!==Ce||q.fog===!0&&ze.fog!==fe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==de.numPlanes||ze.numIntersection!==de.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==qe||ze.morphTargets!==ke||ze.morphNormals!==at||ze.morphColors!==xt||ze.toneMapping!==Ut||ze.morphTargetsCount!==Mt)&&(ht=!0):(ht=!0,ze.__version=q.version);let Ri=ze.currentProgram;ht===!0&&(Ri=yo(q,k,z));let cr=!1,Ci=!1,ia=!1,Rt=Ri.getUniforms(),zi=ze.uniforms;if(Q.useProgram(Ri.program)&&(cr=!0,Ci=!0,ia=!0),q.id!==S&&(S=q.id,Ci=!0),cr||b!==E){Q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Rt.setValue(I,"projectionMatrix",E.projectionMatrix),Rt.setValue(I,"viewMatrix",E.matrixWorldInverse);let wi=Rt.map.cameraPosition;wi!==void 0&&wi.setValue(I,be.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&Rt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Rt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Ci=!0,ia=!0)}if(z.isSkinnedMesh){Rt.setOptional(I,z,"bindMatrix"),Rt.setOptional(I,z,"bindMatrixInverse");let mi=z.skeleton;mi&&(mi.boneTexture===null&&mi.computeBoneTexture(),Rt.setValue(I,"boneTexture",mi.boneTexture,ve))}z.isBatchedMesh&&(Rt.setOptional(I,z,"batchingTexture"),Rt.setValue(I,"batchingTexture",z._matricesTexture,ve),Rt.setOptional(I,z,"batchingIdTexture"),Rt.setValue(I,"batchingIdTexture",z._indirectTexture,ve),Rt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&Rt.setValue(I,"batchingColorTexture",z._colorsTexture,ve));let Hi=X.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&he.update(z,X,Ri),(Ci||ze.receiveShadow!==z.receiveShadow)&&(ze.receiveShadow=z.receiveShadow,Rt.setValue(I,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(zi.envMap.value=Ce,zi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(zi.envMapIntensity.value=k.environmentIntensity),Ci&&(Rt.setValue(I,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&Ym(zi,ia),fe&&q.fog===!0&&ae.refreshFogUniforms(zi,fe),ae.refreshMaterialUniforms(zi,q,W,J,p.state.transmissionRenderTarget[E.id]),Gr.upload(I,Sd(ze),zi,ve)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Gr.upload(I,Sd(ze),zi,ve),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Rt.setValue(I,"center",z.center),Rt.setValue(I,"modelViewMatrix",z.modelViewMatrix),Rt.setValue(I,"normalMatrix",z.normalMatrix),Rt.setValue(I,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let mi=q.uniformsGroups;for(let wi=0,dh=mi.length;wi<dh;wi++){let Ps=mi[wi];Xe.update(Ps,Ri),Xe.bind(Ps,Ri)}}return Ri}function Ym(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Zm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,k,X){let q=le.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),le.get(E.texture).__webglTexture=k,le.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let X=le.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};let Jm=I.createFramebuffer();this.setRenderTarget=function(E,k=0,X=0){D=E,A=k,C=X;let q=!0,z=null,fe=!1,Ee=!1;if(E){let Ce=le.get(E);if(Ce.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Ce.__webglFramebuffer===void 0)ve.setupRenderTarget(E);else if(Ce.__hasExternalTextures)ve.rebindTextures(E,le.get(E.texture).__webglTexture,le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ke=E.depthTexture;if(Ce.__boundDepthTexture!==ke){if(ke!==null&&le.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(E)}}let Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);let qe=le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[k])?z=qe[k][X]:z=qe[k],fe=!0):E.samples>0&&ve.useMultisampledRTT(E)===!1?z=le.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?z=qe[X]:z=qe,P.copy(E.viewport),N.copy(E.scissor),O=E.scissorTest}else P.copy(pe).multiplyScalar(W).floor(),N.copy(Ae).multiplyScalar(W).floor(),O=We;if(X!==0&&(z=Jm),Q.bindFramebuffer(I.FRAMEBUFFER,z)&&q&&Q.drawBuffers(E,z),Q.viewport(P),Q.scissor(N),Q.setScissorTest(O),fe){let Ce=le.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,X)}else if(Ee){let Ce=k;for(let Ge=0;Ge<E.textures.length;Ge++){let qe=le.get(E.textures[Ge]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,X,Ce)}}else if(E!==null&&X!==0){let Ce=le.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ce.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(E,k,X,q,z,fe,Ee,Le=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){Q.bindFramebuffer(I.FRAMEBUFFER,Ce);try{let Ge=E.textures[Le],qe=Ge.format,ke=Ge.type;if(!ee.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-q&&X>=0&&X<=E.height-z&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(k,X,q,z,Fe.convert(qe),Fe.convert(ke),fe))}finally{let Ge=D!==null?le.get(D).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,k,X,q,z,fe,Ee,Le=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(k>=0&&k<=E.width-q&&X>=0&&X<=E.height-z){Q.bindFramebuffer(I.FRAMEBUFFER,Ce);let Ge=E.textures[Le],qe=Ge.format,ke=Ge.type;if(!ee.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,at),I.bufferData(I.PIXEL_PACK_BUFFER,fe.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(k,X,q,z,Fe.convert(qe),Fe.convert(ke),0);let xt=D!==null?le.get(D).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,xt);let Ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Bf(I,Ut,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,at),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,fe),I.deleteBuffer(at),I.deleteSync(Ut),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,X=0){let q=Math.pow(2,-X),z=Math.floor(E.image.width*q),fe=Math.floor(E.image.height*q),Ee=k!==null?k.x:0,Le=k!==null?k.y:0;ve.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Ee,Le,z,fe),Q.unbindTexture()};let jm=I.createFramebuffer(),Km=I.createFramebuffer();this.copyTextureToTexture=function(E,k,X=null,q=null,z=0,fe=null){fe===null&&(z!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=z,z=0):fe=0);let Ee,Le,Ce,Ge,qe,ke,at,xt,Ut,Et=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(X!==null)Ee=X.max.x-X.min.x,Le=X.max.y-X.min.y,Ce=X.isBox3?X.max.z-X.min.z:1,Ge=X.min.x,qe=X.min.y,ke=X.isBox3?X.min.z:0;else{let Hi=Math.pow(2,-z);Ee=Math.floor(Et.width*Hi),Le=Math.floor(Et.height*Hi),E.isDataArrayTexture?Ce=Et.depth:E.isData3DTexture?Ce=Math.floor(Et.depth*Hi):Ce=1,Ge=0,qe=0,ke=0}q!==null?(at=q.x,xt=q.y,Ut=q.z):(at=0,xt=0,Ut=0);let Mt=Fe.convert(k.format),ze=Fe.convert(k.type),At;k.isData3DTexture?(ve.setTexture3D(k,0),At=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ve.setTexture2DArray(k,0),At=I.TEXTURE_2D_ARRAY):(ve.setTexture2D(k,0),At=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);let ht=I.getParameter(I.UNPACK_ROW_LENGTH),Ri=I.getParameter(I.UNPACK_IMAGE_HEIGHT),cr=I.getParameter(I.UNPACK_SKIP_PIXELS),Ci=I.getParameter(I.UNPACK_SKIP_ROWS),ia=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);let Rt=E.isDataArrayTexture||E.isData3DTexture,zi=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Hi=le.get(E),mi=le.get(k),wi=le.get(Hi.__renderTarget),dh=le.get(mi.__renderTarget);Q.bindFramebuffer(I.READ_FRAMEBUFFER,wi.__webglFramebuffer),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,dh.__webglFramebuffer);for(let Ps=0;Ps<Ce;Ps++)Rt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,le.get(E).__webglTexture,z,ke+Ps),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,le.get(k).__webglTexture,fe,Ut+Ps)),I.blitFramebuffer(Ge,qe,Ee,Le,at,xt,Ee,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);Q.bindFramebuffer(I.READ_FRAMEBUFFER,null),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||le.has(E)){let Hi=le.get(E),mi=le.get(k);Q.bindFramebuffer(I.READ_FRAMEBUFFER,jm),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,Km);for(let wi=0;wi<Ce;wi++)Rt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Hi.__webglTexture,z,ke+wi):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Hi.__webglTexture,z),zi?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mi.__webglTexture,fe,Ut+wi):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mi.__webglTexture,fe),z!==0?I.blitFramebuffer(Ge,qe,Ee,Le,at,xt,Ee,Le,I.COLOR_BUFFER_BIT,I.NEAREST):zi?I.copyTexSubImage3D(At,fe,at,xt,Ut+wi,Ge,qe,Ee,Le):I.copyTexSubImage2D(At,fe,at,xt,Ge,qe,Ee,Le);Q.bindFramebuffer(I.READ_FRAMEBUFFER,null),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else zi?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(At,fe,at,xt,Ut,Ee,Le,Ce,Mt,ze,Et.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(At,fe,at,xt,Ut,Ee,Le,Ce,Mt,Et.data):I.texSubImage3D(At,fe,at,xt,Ut,Ee,Le,Ce,Mt,ze,Et):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,fe,at,xt,Ee,Le,Mt,ze,Et.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,fe,at,xt,Et.width,Et.height,Mt,Et.data):I.texSubImage2D(I.TEXTURE_2D,fe,at,xt,Ee,Le,Mt,ze,Et);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ri),I.pixelStorei(I.UNPACK_SKIP_PIXELS,cr),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ci),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ia),fe===0&&k.generateMipmaps&&I.generateMipmap(At),Q.unbindTexture()},this.initRenderTarget=function(E){le.get(E).__webglFramebuffer===void 0&&ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,Q.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var io=new w;function $i(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;io.copy(e),io[i]=0,io.normalize();let c=.5*a/(a+o),h=1-io.angleTo(n)/l;return Math.sign(io[t])===1?h*c:o/(a+o)+c+c*(1-h)}var xs=class n extends mn{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new w,c=new w,h=new w(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,v=new w,m=.5/a;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),d[y+0]=$i(v,c,"z","y",r,i),d[y+1]=1-$i(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[y+0]=1-$i(v,c,"z","y",r,i),d[y+1]=1-$i(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[y+0]=1-$i(v,c,"x","z",r,e),d[y+1]=$i(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),d[y+0]=1-$i(v,c,"x","z",r,e),d[y+1]=1-$i(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),d[y+0]=1-$i(v,c,"x","y",r,e),d[y+1]=1-$i(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[y+0]=$i(v,c,"x","y",r,e),d[y+1]=1-$i(v,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var yp=`
varying vec3 world;
void main(){vec4 w=modelMatrix*vec4(position,1.);world=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}
`,_p=`
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
`;var Ic=new Map,Dc=new Map,Fu={value:0},Mp={value:0},bp={value:new w(28,30,36).normalize()},Nu="day";function Sp(n){Nu=Dn(n);let e=dn[Nu];Mp.value=e.windows;for(let t of Dc.values())t.uniforms.deepColor.value.set(e.waterDeep),t.uniforms.shallowColor.value.set(e.waterShallow),t.uniforms.skyColor.value.set(e.sky),t.uniforms.sunColor.value.set(e.sun),t.uniforms.sunDirection.value.set(...e.position).normalize(),t.uniforms.lightPower.value=e.power}function Bu(n){return n.emissive.set("#ffd391"),n.emissiveIntensity=1,n.onBeforeCompile=e=>{e.uniforms.windowLightGain=Mp,e.fragmentShader=`uniform float windowLightGain;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= windowLightGain;`)},n.customProgramCacheKey=()=>"warm-window-v1",n}function Ep(n="stone"){if(Ic.has(n))return Ic.get(n);let e=512,t=new Uint8Array(e*e*4),i=49191;for(let r=0;r<e;r++)for(let a=0;a<e;a++){i=Math.imul(i,1664525)+1013904223>>>0;let o=i/4294967296,l=.87+o*.13;if(n==="road"&&(l=.68+o*.28+(o>.985?.12:0)),n==="grass"&&(l=.65+o*.27+.06*Math.sin(a*.13)*Math.cos(r*.17)),n==="roof"){let h=r%64,u=(a+Math.floor(r/64)%2*32)%64;l=h<3||u<2?.52:.78+o*.19+.04*Math.sin(h/64*Math.PI)}if(n==="paving"){let h=(a+Math.floor(r/64)%2*64)%128,u=r%64;l=h<3||u<3?.61:.86+o*.14}let c=(a+r*e)*4;t[c]=t[c+1]=t[c+2]=Math.round(Math.min(1,l)*255),t[c+3]=255}let s=new vn(t,e,e);return s.wrapS=s.wrapT=Wi,s.generateMipmaps=!0,s.minFilter=bn,s.magFilter=Li,s.anisotropy=16,s.needsUpdate=!0,Ic.set(n,s),s}function ku(n,e=!1){return n.onBeforeCompile=t=>{t.uniforms.landscapeWindTime=Fu,t.vertexShader=`uniform float landscapeWindTime;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float windAnchor=0.;
#ifdef USE_INSTANCING
windAnchor=instanceMatrix[3].x*.55+instanceMatrix[3].z*.35;
#else
windAnchor=modelMatrix[3].x*.55+modelMatrix[3].z*.35;
#endif
transformed.x+=sin(landscapeWindTime*1.2+windAnchor)*${e?"pow(max(position.y,0.),2.)*.4":"pow(max(position.y+1.,0.),2.)*.012"};`)},n.customProgramCacheKey=()=>e?"grass-wind-v1":"leaf-wind-v1",n}function Ou(n,e=.72,t=0){let i=["#86ad72","#97aa7b","#a9b484","#7c9a60"].includes(n),s=["#667b7b","#718784"].includes(n),r=["#e1cda5","#d7cab0","#c0b18a","#ebd69c","#ddd3ab"].includes(n),a=new Gt({color:n,roughness:e,metalness:t,clearcoat:e<.6?.25:.05,clearcoatRoughness:.45,envMapIntensity:.65});if(["#347447","#458b4e","#63a357","#7eb56a","#dba0b3","#e7b3c3","#f4cbd5","#f7dae0"].includes(n)&&ku(a),["#152019","#182c23","#201f18","#27311d","#1c291d"].includes(n)&&(a.roughness=.12,a.clearcoat=1,a.clearcoatRoughness=.08),["#ffe8a8","#ffe9a2","#fff4bd"].includes(n)&&(a.emissive=new ye("#ffc66d"),a.emissiveIntensity=.55),["#528b9c","#397b8c","#4f91a5"].includes(n)&&Bu(a),i||s||r){let o=Ep(i?"grass":s?"road":"paving");a.map=o,a.bumpMap=o,a.bumpScale=s?.009:i?.014:.012,a.roughness=.88}return a}function zu(n){let e=Ou(n,.68,0);return e.map=Ep("roof"),e.bumpMap=e.map,e.bumpScale=.027,e}function Hu(n=!1){if(Dc.has(n))return Dc.get(n);let e=dn[Nu],t=new yt({name:n?"river-silk":"coastal-water",uniforms:{time:Fu,river:{value:n?1:0},deepColor:{value:new ye(e.waterDeep)},shallowColor:{value:new ye(e.waterShallow)},skyColor:{value:new ye(e.sky)},sunColor:{value:new ye(e.sun)},sunDirection:{value:new w(...e.position).normalize()},viewDirection:bp,lightPower:{value:e.power}},vertexShader:yp,fragmentShader:_p});return t.toneMapped=!0,Dc.set(n,t),t}function wp(n,e){Fu.value=n,e&&e.getWorldDirection(bp.value).negate()}var Tp=n=>[...Ic.values()].includes(n);var Lc=new Map,Ap=new Set;function Bt(n,e=.72,t=0){let i=`${n}:${e}:${t}`;return Lc.has(i)||Lc.set(i,Ou(n,e,t)),Ap.add(Lc.get(i)),Lc.get(i)}var Rp=new Qt(1,48,36),Cp=new xs(1,1,1,2,.035),Gu=new Set([Rp,Cp]),Vu=new Map;function Oe(n,e,t,i=[0,0,0],s=[1,1,1]){let r=new bt(e,typeof t=="string"?Bt(t):t);return r.position.set(...i),r.scale.set(...s),r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}var Be=(n,e,t,i)=>Oe(n,Rp,e,t,i),$=(n,e,t,i)=>Oe(n,Cp,e,t,i);function ot(n,e,t,i,s,r,a=24){let o=[i,s,r,a].join(":");if(!Vu.has(o)){let l=new hs(i,s,r,a);Vu.set(o,l),Gu.add(l)}return Oe(n,Vu.get(o),e,t)}function Qe(n,e,t,i=.025){return Oe(n,new za(new Br(t.map(s=>new w(...s))),24,i,8,!1),e)}function er(n,{background:e="#fff1ce",color:t="#334d56",width:i=256,height:s=96}={}){let r=document.createElement("canvas");r.width=i,r.height=s;let a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,i,s),a.strokeStyle=t,a.lineWidth=3,a.strokeRect(5,5,i-10,s-10),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=`bold ${Math.min(36,(i-20)/Math.max(1,n.length))}px "Microsoft YaHei",sans-serif`,a.fillText(n,i/2,s/2);let o=new cs(r);return o.colorSpace=Ct,o}function Dt(n,e,t,i=1.2,s=.35,r={}){let a=new Ot({map:er(e,r),side:Nt});return Oe(n,new si(i,s),a,t)}function bi(n){let e=new Set,t=new Set;n.traverse(i=>{i.isInstancedMesh&&i.dispose(),i.geometry&&!Gu.has(i.geometry)&&i.geometry.dispose();for(let s of Array.isArray(i.material)?i.material:[i.material])if(s&&!Ap.has(s)){e.add(s);for(let r of["map","bumpMap","normalMap","roughnessMap"])s[r]&&!Tp(s[r])&&t.add(s[r])}});for(let i of t)i.dispose();for(let i of e)i.dispose()}function an(n){n.updateMatrixWorld(!0);let e=n.matrixWorld.clone().invert(),t=new Map;n.traverse(i=>{let s=i;for(;s&&s!==n;){if(s.userData.dynamic)return;s=s.parent}if(i.isMesh&&!i.isInstancedMesh&&Gu.has(i.geometry)&&!i.material.map){let r=[i.geometry.uuid,i.material.uuid,i.castShadow,i.receiveShadow].join(":"),a=t.get(r)||[];a.push(i),t.set(r,a)}});for(let i of t.values()){if(i.length<3)continue;let s=i[0],r=new zs(s.geometry,s.material,i.length);r.castShadow=s.castShadow,r.receiveShadow=s.receiveShadow;for(let[a,o]of i.entries())r.setMatrixAt(a,new et().multiplyMatrices(e,o.matrixWorld)),o.parent.remove(o);r.computeBoundingSphere(),n.add(r)}return n}function tr(n,{min:e=[-1,0,-1.4],max:t=[1,2.6,1.4],steps:i=[40,52,52],blend:s=.13,cuts:r=[]}={}){let a=(C,D,S)=>{let b=1e6;for(let[P,N,O,G,F,U]of n){let J=(Math.hypot((C-P)/G,(D-N)/F,(S-O)/U)-1)*Math.min(G,F,U),W=Math.max(0,s-Math.abs(b-J))/s;b=Math.min(b,J)-W*W*s*.25}for(let[P,N,O,G,F,U]of r){let J=(Math.hypot((C-P)/G,(D-N)/F,(S-O)/U)-1)*Math.min(G,F,U);b=Math.max(b,-J)}return b},[o,l,c]=i,h=(t[0]-e[0])/o,u=(t[1]-e[1])/l,f=(t[2]-e[2])/c,d=(C,D,S)=>C+(o+1)*(D+(l+1)*S),g=new Float32Array((o+1)*(l+1)*(c+1));for(let C=0;C<=c;C++)for(let D=0;D<=l;D++)for(let S=0;S<=o;S++)g[d(S,D,C)]=a(e[0]+S*h,e[1]+D*u,e[2]+C*f);let v=[],m=[],p=new Map,y=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],_=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]];for(let C=0;C<c;C++)for(let D=0;D<l;D++)for(let S=0;S<o;S++){let b=y.map(O=>d(S+O[0],D+O[1],C+O[2]));if(b.every(O=>g[O]>=0)||b.every(O=>g[O]<0))continue;let P=(O,G)=>{let F=b[O],U=b[G],J=Math.min(F,U)+":"+Math.max(F,U);if(p.has(J))return p.get(J);let W=g[F]/(g[F]-g[U]),ie=y[O],ne=y[G],pe=v.length/3;return v.push(e[0]+(S+ie[0]+W*(ne[0]-ie[0]))*h,e[1]+(D+ie[1]+W*(ne[1]-ie[1]))*u,e[2]+(C+ie[2]+W*(ne[2]-ie[2]))*f),p.set(J,pe),pe},N=(O,G,F)=>{let U=new w().fromArray(v,O*3),J=new w().fromArray(v,G*3),W=new w().fromArray(v,F*3),ie=J.clone().sub(U).cross(W.clone().sub(U)),ne=U.clone().add(J).add(W).multiplyScalar(1/3),pe=.003,Ae=new w(a(ne.x+pe,ne.y,ne.z)-a(ne.x-pe,ne.y,ne.z),a(ne.x,ne.y+pe,ne.z)-a(ne.x,ne.y-pe,ne.z),a(ne.x,ne.y,ne.z+pe)-a(ne.x,ne.y,ne.z-pe));ie.dot(Ae)<0?m.push(O,F,G):m.push(O,G,F)};for(let O of _){let G=O.filter(U=>g[b[U]]<0),F=O.filter(U=>g[b[U]]>=0);if(G.length===1)N(...F.map(U=>P(G[0],U)));else if(G.length===3)N(...G.map(U=>P(U,F[0])));else if(G.length===2){let[U,J]=G,[W,ie]=F,ne=P(U,W),pe=P(U,ie),Ae=P(J,W),We=P(J,ie);N(ne,pe,Ae),N(pe,We,Ae)}}}let x=new ut;x.setAttribute("position",new Ne(v,3)),x.setIndex(m);let R=[],A=.002;for(let C=0;C<v.length;C+=3){let D=v[C],S=v[C+1],b=v[C+2],P=new w(a(D+A,S,b)-a(D-A,S,b),a(D,S+A,b)-a(D,S-A,b),a(D,S,b+A)-a(D,S,b-A)).normalize();R.push(P.x,P.y,P.z)}return x.setAttribute("normal",new Ne(R,3)),x.userData.smoothFieldNormals=!0,x}function Yn(n,{y:e=2.3,z:t=.4,width:i=.31,height:s=.34,sculpted:r=!1}={}){let a=new _e;a.position.set(0,e,t),n.add(a),a.name="laugh-face";let o=new Fi;o.moveTo(-i,.075),o.bezierCurveTo(-i*.6,.01,i*.6,.01,i,.075),o.bezierCurveTo(i*.94,-s*.85,i*.55,-s,0,-s),o.bezierCurveTo(-i*.55,-s,-i*.94,-s*.85,-i,.075);let l=Bt("#301b14",.84),c=r?Oe(a,new Qt(1,48,32,Math.PI,Math.PI),new Ft({color:"#26140e",roughness:.9,side:Wt}),[0,-s*.43,0],[i,s*.56,.23]):Oe(a,new nn(o,{depth:.025,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:4,curveSegments:32}),l,[0,0,0]);c.name="mouth-cavity";let h=Qe(a,r?"#d0aa39":"#a27629",r?Array.from({length:33},(d,g)=>{let v=g/32*Math.PI*2;return[Math.cos(v)*i,-s*.43+Math.sin(v)*s*.56,.006]}):[[-i,.075,.018],[-i*.85,-s*.5,.016],[0,-s,.018],[i*.85,-s*.5,.016],[i,.075,.018]],r?.009:.014),u=new _e;a.add(u),u.name="upper-teeth";for(let d=0;d<8;d++){let g=(d-3.5)*i*.215,v=r?.014-.028*(Math.abs(d-3.5)/3.5)**2:.035+.036*(Math.abs(d-3.5)/3.5)**2,m=new bt(new xs(i*.22,.043,.025,3,.008),Bt("#fff7de",.38));m.position.set(g,v,r?.025:.043),m.rotation.z=(d-3.5)*.032,u.add(m)}let f=new _e;f.name="laugh-jaw",a.add(f);for(let d=0;d<6;d++){let g=(d-2.5)*i*.215,v=-s+.045+.048*(Math.abs(d-2.5)/2.5)**2;Be(f,"#f9eccc",[g,v,.036],[i*.115,.027,.022])}return Be(f,"#bc7d6f",[0,-s*.72,.042],[i*.43,.046,.022]),a.visible=!1,a.userData={jaw:f,cavity:c,rim:h,height:s,sculpted:r},a}function Wu(n,e,t=1){let i=n.userData;if(!i?.jaw)return;let s=Math.sin(e*10.5),r=i.sculpted?.98+.035*s*t:.92+.14*s*t;n.scale.set(1+Math.sin(e*5.25)*.025*t,r,1),i.jaw.position.y=-.012*(1+s)*t,i.jaw.rotation.x=.12*s*t}var Pp=new Map;function Ip(n,e,{width:t=.34,height:i=.5,cacheKey:s=null}={}){let o=-i-.07,l=.13,c=Pp.get(s)||[];if(!c.length){for(let d=0;d<=12;d++)for(let g=0;g<=9;g++)c.push(e(n.position.x-t+g/9*t*2,n.position.y+o+d/12*(l-o)));s&&Pp.set(s,c)}let h=(d,g)=>{let v=Math.max(0,Math.min(8.9999,(d+t)/(t*2)*9)),m=Math.max(0,Math.min(12-1e-4,(g-o)/(l-o)*12)),p=Math.floor(v),y=Math.floor(m),_=c[p+y*10],x=c[p+1+y*10],R=c[p+(y+1)*10],A=c[p+1+(y+1)*10];return $t.lerp($t.lerp(_,x,v-p),$t.lerp(R,A,v-p),m-y)};n.updateMatrixWorld(!0);let u=n.matrixWorld.clone().invert(),f=new w;n.traverse(d=>{if(!d.isMesh)return;let g=new et().multiplyMatrices(u,d.matrixWorld),v=g.clone().invert();d.geometry=d.geometry.clone();let m=d.geometry.attributes.position;for(let p=0;p<m.count;p++)f.fromBufferAttribute(m,p).applyMatrix4(g),f.z+=h(f.x,f.y)-n.position.z+.012,f.applyMatrix4(v),m.setXYZ(p,f.x,f.y,f.z);m.needsUpdate=!0,d.geometry.computeVertexNormals(),d.geometry.computeBoundingSphere(),d.castShadow=!1}),n.userData.conformed=!0}function Dp(n,{y:e,z:t,x:i=.22,size:s=.13,human:r=!1}){let a=[],o=[];for(let l of[-1,1]){let c=new _e;c.position.set(l*i,e,t),n.add(c),Be(c,r?"#fff8e7":"#a1b762",[0,0,0],[s,s*1.15,.044]),Be(c,r?"#64412d":"#7c9d42",[0,-.008,.032],[s*.7,s*.9,.025]),Be(c,"#201f18",[0,-.005,.05],[s*.42,s*.7,.017]),Be(c,"#fffdeb",[-.026,.035,.066],[.017,.022,.008]),a.push(c);let h=Qe(n,"#62432d",[[l*i-s,e,t+.06],[l*i,e+.045,t+.08],[l*i+s,e,t+.06]],.014);h.visible=!1,o.push(h),r&&Qe(n,"#523326",[[l*i-s,e+.17,t-.02],[l*i,e+.21,t],[l*i+s,e+.17,t-.02]],.018)}return{eyes:a,lids:o}}function Lp(){let n=new _e,e=new _e;n.name="naidan",n.add(e),e.name="body";let t=new xn([[0,.07],[.52,.16],[.88,.48],[1.02,.94],[.98,1.45],[.7,1.88],[.35,2.06],[0,2.1]].map(l=>new K(...l))).getPoints(100),i=new us(t,112);i.scale(1,1,.91),Oe(e,i,new Gt({color:"#f5d052",roughness:.4,clearcoat:.25}));let{eyes:s,lids:r}=Dp(e,{y:1.03,z:.91,x:.29,size:.12}),a=Qe(e,"#665022",[[-.16,.8,.91],[0,.785,.94],[.16,.8,.91]],.016),o=Yn(e,{y:.81,z:.95,width:.27,height:.3});return n.userData={id:"naidan",body:e,arms:[],legs:[],eyeParts:s,lids:r,mouth:a,laughMouth:o,vehicleId:0,egg:!0},n}function Up(){let n=new _e,e=new _e;n.name="naicha",n.add(e),e.name="body";let t=[],i=[],s=new Gt({color:"#d8b873",roughness:.35,clearcoat:.34,clearcoatRoughness:.35}),r=Bt("#f5e9bf",.38),a=Bt("#e3be54",.58),o=Bt("#494738",.78),l=[[0,.53],[.43,.53],[.55,.59],[.63,.84],[.69,1.25],[.73,1.96],[.72,2.08],[.66,2.09],[.64,1.99],[.61,.86],[.46,.7],[0,.7]].map(p=>new K(...p)),c=Oe(e,new us(new xn(l).getPoints(150),112),s);c.name="tea-cup";let h=Oe(e,new sn(.69,.036,16,96),r,[0,2.06,0]);h.rotation.x=Math.PI/2,h.name="cup-rim";let u=Oe(e,new hs(.648,.648,.025,96),Bt("#8e5b32",.28),[0,2.008,0]);u.name="tea-surface";for(let[p,y,_]of[[-.25,.15,.045],[.2,-.1,.035],[-.1,-.26,.055],[.28,.24,.035]])Be(e,"#e5c28c",[p,2.028,y],[_,.01,_]);let f=Oe(e,new sn(.38,.105,20,80),s,[.8,1.5,-.015],[.85,1.17,1]);f.name="cup-handle",Be(e,s,[.66,1.91,-.015],[.13,.14,.13]),Be(e,s,[.64,1.07,-.015],[.13,.14,.13]);let{eyes:d,lids:g}=Dp(e,{y:1.79,z:.66,x:.23,size:.09});for(let p of[-1,1]){let y=Qe(e,"#55472c",[[p*.23-.085,1.96,.66],[p*.23,1.99,.68],[p*.23+.085,1.96,.66]],.017);y.name="tea-brow"}let v=Qe(e,"#64482c",[[-.2,1.5,.66],[0,1.45,.71],[.2,1.5,.66]],.015),m=Yn(e,{y:1.53,z:.73,width:.28,height:.34});for(let p of[-1,1]){let y=new _e;y.position.set(p*.62,1.38,.1),e.add(y);let _=tr([[p*.08,-.1,.015,.145,.24,.15],[p*.17,-.29,.09,.14,.2,.15]],{min:[-.37,-.56,-.22],max:[.37,.2,.34],steps:[22,30,24],blend:.13});Oe(y,_,a),Be(y,o,[p*.16,-.4,.18],[.15,.16,.12]);for(let A=0;A<3;A++)Be(y,o,[p*.16+(A-1)*.066,-.46,.24],[.045,.07,.055]);t.push(y);let x=new _e;x.position.set(p*.28,.47,0),e.add(x),Be(x,a,[0,-.12,0],[.15,.27,.17]);let R=Oe(x,new Qt(1,40,28),o,[0,-.36,.06],[.2,.13,.26]);R.name="tea-boot",i.push(x)}return n.userData={id:"naicha",body:e,arms:t,legs:i,eyeParts:d,lids:g,mouth:v,laughMouth:m,vehicleId:0,mug:!0},n}var Np;function Fp(){let n=new _e,e=new _e;n.name="naigou",n.add(e);let t=Bt("#f1cc58",.63),i=Bt("#897247"),s=Bt("#f0e4c4"),r=Bt("#392820");Np??=tr([[0,1.05,-.15,.62,.68,.95],[0,1.48,.48,.57,.8,.6],[0,1.94,.57,.49,.51,.49]],{min:[-.85,.25,-1.22],max:[.85,2.55,1.18],steps:[64,88,80],blend:.18,cuts:[[0,1.63,1.04,.315,.27,.28]]});let a=Np.clone(),o=a.attributes.position,l=[];for(let d=0;d<o.count;d++){let g=o.getX(d),v=o.getY(d),m=o.getZ(d),p=Math.max(0,Math.min(1,(1-(g/.36)**2-((v-.95)/.35)**2)*5))*Math.max(0,Math.min(1,(m-.7)/.2)),y=new ye("#f1cc58").lerp(new ye("#f0e4c4"),p);l.push(y.r,y.g,y.b)}a.setAttribute("color",new Ne(l,3)),Oe(e,a,new Ft({vertexColors:!0,roughness:.63}));let c=[];for(let[d,g]of[[-.43,.55],[.43,.55],[-.43,-.68],[.43,-.68]]){let v=new _e;v.position.set(d,.72,g),e.add(v);let m=tr([[0,-.2,0,.22,.45,.24],[0,-.54,.09,.23,.18,.27],...[-1,0,1].map(_=>[_*.115,-.58,.28,.08,.11,.11])],{min:[-.34,-.74,-.32],max:[.34,.3,.46],steps:[22,32,26],blend:.1}),p=[],y=m.attributes.position;for(let _=0;_<y.count;_++){let x=new ye("#f1cc58").lerp(new ye("#897247"),Math.max(0,Math.min(1,(-y.getY(_)-.39)/.13)));p.push(x.r,x.g,x.b)}m.setAttribute("color",new Ne(p,3)),Oe(v,m,new Ft({vertexColors:!0,roughness:.62})),c.push(v)}let h=[];for(let d of[-1,1]){let g=new _e;g.position.set(d*.38,2.28,.52),g.rotation.z=d*.35,e.add(g);let v=new Fi;v.moveTo(0,.05),v.bezierCurveTo(d*.17,.18,d*.5,-.03,d*.47,-.22),v.bezierCurveTo(d*.4,-.68,d*.22,-.81,d*.05,-.39),v.quadraticCurveTo(-d*.07,-.13,0,.05);let m=new nn(v,{depth:.13,bevelEnabled:!0,bevelSize:.065,bevelThickness:.06,bevelSegments:5,curveSegments:20});Oe(g,m,i,[0,0,-.08]),h.push(g)}let u=Qe(e,t,[[0,1,-.91],[.08,1.23,-1.08],[.14,1.6,-1.15],[.08,1.94,-1.1],[0,2.1,-1.06]],.105);u.name="tail";for(let d of[-1,1])Qe(e,r,[[d*.12,2.03,1.005],[d*.24,2.095,1.002],[d*.35,2.04,.966]],.018);let f=Yn(e,{y:1.82,z:1.065,width:.31,height:.45,sculpted:!0});return f.visible=!0,n.userData={id:"naigou",body:e,arms:[],legs:c,lids:[],laughMouth:f,mouth:null,tail:u,ears:h,canine:!0,vehicleId:0},n}var $u=new Map;function Uc(n,e,t){return $u.has(n)||$u.set(n,tr(e,t)),$u.get(n).clone()}function Xu(n,e,t,{belly:i=!1}={}){let s=n.attributes.position,r=[],a=new ye,o=new ye(e),l=new ye(t);for(let c=0;c<s.count;c++){let h=s.getX(c),u=s.getY(c),f=s.getZ(c),d=i?Math.max(0,Math.min(1,(1-(h/.6)**2-((u-1.15)/.7)**2)*5))*Math.max(0,Math.min(1,(f-.1)/.38))*.92:Math.max(0,Math.min(1,(-u-.62)/.2));a.copy(o).lerp(l,d),r.push(a.r,a.g,a.b)}return n.setAttribute("color",new Ne(r,3)),n}function Bp(n){let e=n==="naishu",t=new _e,i=new _e;t.name=n,t.add(i),i.name="body";let s=e?"#f8d958":"#f5ce20",r=Bt(s,.66),a=Bt("#403620"),o=[],l=[],c=[],h=[],u=[],f=e?[[0,1.12,0,.78,.88,.61],[0,1.72,0,.56,.68,.43],[0,2.14,.01,.47,.44,.38]]:[[0,1.32,0,.82,.94,.64],[0,1.99,0,.56,.76,.43],[0,2.48,0,.47,.48,.38]],d=Uc(n+"-body",f,{min:[-.92,.25,-.67],max:[.92,3.08,.68],steps:[80,112,72],blend:.25}),g=Oe(i,Xu(d,s,e?"#ffe77c":"#f6e7b3",{belly:!0}),new Gt({vertexColors:!0,roughness:.43,clearcoat:.22,clearcoatRoughness:.4,envMapIntensity:.45}));for(let F of[-1,1]){let U=new _e;U.position.set(F*(e?.59:.63),e?1.7:1.88,.16),i.add(U);let J=Uc(n+"-arm-"+F,[[F*.075,-.19,0,.19,.36,.19],[F*.17,-.48,.04,.17,.32,.17],[F*.16,-.73,.07,.145,.19,.135]],{min:[-.4,-.97,-.24],max:[.4,.25,.32],steps:[36,58,34],blend:.1}),W=Oe(U,Xu(J,s,e?"#d5aa4c":"#9c791c"),new Ft({vertexColors:!0,roughness:.7})),ie=[];for(let Ae=0;Ae<3;Ae++){let We=Be(U,e?"#e9c34b":"#96701b",[F*.16+(Ae-1)*.08,-.86,.09],[.049,.105,.063]);ie.push({node:We,rest:We.position.clone()})}U.userData={side:F,mesh:W,rest:new Float32Array(J.attributes.position.array),restNormals:new Float32Array(J.attributes.normal.array),fingers:ie,bent:!1},o.push(U);let ne=new _e;ne.position.set(F*.32,e?.43:.59,0),i.add(ne);let pe=Uc(n+"-leg",e?[[0,-.08,0,.24,.32,.25],[0,-.29,.075,.23,.14,.29]]:[[0,-.06,0,.25,.36,.26],[0,-.31,.02,.17,.28,.2],[0,-.48,.12,.25,.105,.3],...[-1,0,1].map(Ae=>[Ae*.145,-.49,.31,.09,.075,.15])],{min:[-.34,-.62,-.34],max:[.34,.4,.7],steps:[24,38,36],blend:.09});if(!e){let Ae=pe.attributes.position,We=[];for(let st=0;st<Ae.count;st++){let tt=$t.clamp((-Ae.getY(st)-.36)/.22,0,1)*$t.clamp((Ae.getZ(st)-.1)/.22,0,1)*.6,j=new ye(s).lerp(new ye("#a38027"),tt);We.push(j.r,j.g,j.b)}pe.setAttribute("color",new Ne(We,3))}Oe(ne,pe,e?r:new Gt({vertexColors:!0,roughness:.55,clearcoat:.1})),l.push(ne)}g.updateMatrixWorld(!0);let v=(F,U)=>new $n(new w(F,U,2),new w(0,0,-1)).intersectObject(g)[0]?.point.z||.4,m=e?2.26:2.59,p=e?.33:.31,y=e?.215:.225;for(let F of[-1,1]){let U=new _e;U.position.set(F*y,m,v(F*y,m)+.004),U.rotation.y=F*.18,i.add(U),Be(U,e?"#c7d58c":"#93b54a",[0,0,.016],[.112,.132,.042]),Be(U,"#152019",[0,-.005,.05],[.065,.086,.025]),Be(U,"#fff8db",[-.02,.028,.071],[.012,.016,.006]),h.push(U);let J=Qe(i,"#51452b",[[F*y-.11,m-.02,p+.035],[F*y,m+.095,v(F*y,m)+.08],[F*y+.11,m-.02,p+.035]],.014);J.visible=!1,c.push(J)}let _=e?2.025:2.345,x=e?.425:.42,R=Qe(i,"#715321",[[-.18,_,v(-.18,_)+.014],[0,_-.012,v(0,_-.012)+.014],[.18,_,v(.18,_)+.014]],.009),A=Yn(i,{y:_+.015,z:Math.max(v(0,_),v(0,_-.4))+.035,width:e?.29:.3,height:e?.4:.46,sculpted:!0}),C=null;if(e){for(let F of[-1,1]){let U=new _e;U.position.set(F*.56,2.57,-.03),U.rotation.z=-F*.13,U.rotation.y=F*.12,i.add(U),Be(U,r,[F*.07,.12,0],[.45,.47,.17]),Be(U,"#edbd78",[F*.07,.12,.105],[.355,.375,.045]),Be(U,"#f4ce92",[F*.07,.1,.13],[.295,.315,.022]),u.push(U)}C=Qe(i,r,[[0,.47,-.46],[.3,.31,-.75],[.76,.28,-.88],[1.1,.42,-.88],[1.32,.42,-.77]],.038),C.name="tail",Be(i,r,[1.32,.42,-.77],[.038,.038,.038])}let D=e?.4:.46,S=e?.29:.3,b=_+.015-D*.43,P=v(0,b),N=Uc(n+"-open-mouth",f,{min:[-.92,.25,-.67],max:[.92,3.08,.68],steps:[80,112,72],blend:.25,cuts:[[0,b,P-.025,S*1.01,D*.58,.27]]}),O=Oe(i,Xu(N,s,e?"#ffe77c":"#f6e7b3",{belly:!0}),g.material);O.visible=!1,Ip(A,v,{cacheKey:n,width:e?.33:.34,height:D});for(let F of c)F.castShadow=!1;let G=new _e;G.name="torso-pivot",G.position.y=.65;for(let F of[...i.children])l.includes(F)||(F.position.y-=.65,G.add(F));return i.add(G),t.userData={id:n,body:i,torsoPivot:G,torsoMesh:g,laughTorsoMesh:O,arms:o,legs:l,lids:c,eyeParts:h,ears:u,tail:C,mouth:R,laughMouth:A,vehicleId:0,referenceSculpt:!0},t}var Zn=new Gt({color:"#e9be38",roughness:.48,metalness:0,clearcoat:.22,clearcoatRoughness:.5}),Y_=new Gt({color:"#df4a25",roughness:.48,clearcoat:.2});function kp(n,e,t,i=.79){let s=new xn(e.map(a=>new K(...a))).getPoints(120),r=new us(s.map(a=>new K(Math.max(0,a.x),a.y)),112);return r.scale(1,1,i),r.computeVertexNormals(),Oe(n,r,t)}function Op(n,{y:e=2.02,z:t=.38,x:i=.245,size:s=.145,parts:r=null}={}){let a=[];for(let o of[-1,1]){let l=new _e;l.position.set(o*i,e,t),l.rotation.y=o*.15,n.add(l),r?.push(l),Be(l,"#b9bd82",[0,0,.014],[s,s*1.08,s*.48]),Be(l,"#758349",[0,-.004,.064],[s*.7,s*.85,.028]),Be(l,"#182c23",[0,-.006,.088],[s*.43,s*.6,.021]),Be(l,"#fff7cf",[-.025,.042,.109],[.018,.021,.008]);let c=Qe(l,"#d1a62d",[[-s*.97,0,.01],[-s*.75,s*.85,.022],[0,s*1.09,.03],[s*.75,s*.85,.022],[s*.97,0,.01]],.019);a.push(c);let h=Be(l,Zn,[0,0,.08],[s*1.05,.001,.07]);h.visible=!1,h.name="eyelid",h.userData.closedY=s*1.08,a.push(h);let u=Qe(l,"#5d4128",[[-s*.9,0,.16],[0,.04,.18],[s*.9,0,.16]],.012);u.name="closed-eye",u.visible=!1,a.push(u)}return a}function Xr(n){if(n==="naidan")return Lp();if(n==="naicha")return Up();if(n==="naigou")return Fp();if(n==="naiwa"||n==="naishu")return Bp(n);let e=new _e;e.name=n;let t=new _e;e.add(t),t.name="body";let i=[],s=[],r,a=[],o=[];if(n==="naichong"){let c=kp(t,[[0,.08],[.43,.12],[.72,.4],[.82,.78],[.77,1.2],[.65,1.63],[.52,1.9],[.32,2.04],[0,2.1]],Y_,.92),h=[],u=c.geometry.attributes.position;for(let d=0;d<u.count;d++){let g=u.getY(d),v=u.getX(d),m=u.getZ(d),p=Math.max(...[.35,.65,.95].map(x=>Math.max(0,Math.min(1,(.078-Math.abs(g-x))/.025)))),y=Math.max(0,Math.min(1,(1-(v/.53)**2-((g-1.49)/.44)**2)*7))*Math.max(0,Math.min(1,(m-.25)/.12)),_=new ye("#e9522c").lerp(new ye("#f6d35c"),Math.max(p,y));h.push(_.r,_.g,_.b)}c.geometry.setAttribute("color",new Ne(h,3)),c.material=new Gt({vertexColors:!0,roughness:.5,clearcoat:.18}),Op(t,{y:1.63,z:.52,x:.22,size:.095,parts:o});for(let d of[-1,1]){let g=Qe(t,"#4e3623",[[d*.22-.11,1.63,.65],[d*.22,1.67,.67],[d*.22+.11,1.63,.65]],.014);g.visible=!1,a.push(g)}c.updateMatrixWorld(!0);let f=(d,g)=>new $n(new w(d,g,2),new w(0,0,-1)).intersectObject(c)[0]?.point.z||.6;r=Qe(t,"#735323",[[-.19,1.36,f(-.19,1.36)+.015],[0,1.34,f(0,1.34)+.015],[.19,1.36,f(.19,1.36)+.015]],.013);for(let d of[-1,0,1])Qe(t,"#da4727",[[d*.045,1.97,0],[d*.09,2.13,.01],[d*.15,2.23,.035]],.035)}else{kp(t,[[0,.19],[.4,.18],[.67,.35],[.82,.75],[.83,1.1],[.73,1.48],[.58,1.84],[.52,2.13],[.43,2.36],[.24,2.46],[0,2.47]],Zn),a=Op(t,{y:2.12,z:.344,x:.246,size:.141}),Be(t,Zn,[0,1.98,.405],[.16,.09,.052]),r=Qe(t,"#735124",[[-.205,1.9,.405],[-.1,1.875,.433],[0,1.87,.445],[.1,1.875,.433],[.205,1.9,.405]],.012);for(let c of[-1,1]){let h=new _e;h.position.set(c*.63,1.48,.02),t.add(h),h.name=c<0?"arm.L":"arm.R";let u=Be(h,Zn,[c*.14,-.3,.02],[.17,.43,.165]);u.rotation.z=c*.24,Be(h,Zn,[c*.21,-.62,.1],[.17,.16,.17]);for(let d=0;d<3;d++)Be(h,Zn,[c*.2+(d-1)*.065,-.66,.2],[.038,.07,.045]);i.push(h);let f=new _e;f.position.set(c*.34,.26,0),t.add(f),f.name=c<0?"leg.L":"leg.R",Be(f,Zn,[0,-.13,.11],[.245,.22,.32]),s.push(f)}if(n==="naishu"){for(let h of[-1,1]){let u=new _e;u.position.set(h*.57,2.46,-.035),u.rotation.z=-h*.18,u.rotation.y=h*.13,t.add(u),Be(u,Zn,[h*.05,.1,0],[.38,.44,.115]),Be(u,"#c88d48",[h*.05,.1,.091],[.278,.335,.035]),Be(u,"#e6b966",[h*.05,.05,.113],[.22,.27,.015])}let c=Qe(t,Zn,[[0,.39,-.48],[.42,.16,-.8],[.88,.08,-.9],[1.23,.08,-.71],[1.32,.1,-.45]],.046);c.name="tail"}else Qe(t,"#d0a52e",[[-.15,.57,-.61],[0,.46,-.67],[.15,.57,-.61]],.02)}let l=Yn(t,{y:1.36,z:.69,width:.27,height:.29});return e.userData={body:t,arms:i,legs:s,mouth:r,laughMouth:l,lids:a,eyeParts:o.length?o:null,id:n,vehicleId:0},e}function Z_(n,e){let t=n.userData;if(!t?.rest||t.bent===e)return;t.bent=e;let i=e?-.55:0,s=Math.cos(i),r=Math.sin(i),a=t.mesh.geometry.attributes.position,o=(l,c,h)=>{if(e&&c<-.62){let m=Math.max(0,Math.min(1,(-c-.62)/.24)),p=-t.side*.75*m*m*(3-2*m),y=t.side*.16,_=-.68,x=l-y,R=c-_;l=y+x*Math.cos(p)-R*Math.sin(p),c=_+x*Math.sin(p)+R*Math.cos(p)}if(c>-.22)return[l,c,h];let u=Math.max(0,Math.min(1,(-c-.22)/.4)),f=i*u*u*(3-2*u),d=Math.cos(f),g=Math.sin(f),v=c+.22;return[l,-.22+v*d-h*g,v*g+h*d]};for(let l=0;l<a.count;l++)a.setXYZ(l,...o(t.rest[l*3],t.rest[l*3+1],t.rest[l*3+2]));if(a.needsUpdate=!0,e){let l=t.mesh.geometry.attributes.normal,c=new Ze,h=new w,u=1e-4;for(let f=0;f<a.count;f++){let d=t.rest[f*3],g=t.rest[f*3+1],v=t.rest[f*3+2],m=o(d,g,v),p=o(d+u,g,v),y=o(d,g+u,v),_=o(d,g,v+u);c.set((p[0]-m[0])/u,(y[0]-m[0])/u,(_[0]-m[0])/u,(p[1]-m[1])/u,(y[1]-m[1])/u,(_[1]-m[1])/u,(p[2]-m[2])/u,(y[2]-m[2])/u,(_[2]-m[2])/u).invert().transpose(),h.fromArray(t.restNormals,f*3).applyMatrix3(c).normalize(),l.setXYZ(f,h.x,h.y,h.z)}l.needsUpdate=!0}else t.mesh.geometry.attributes.normal.array.set(t.restNormals),t.mesh.geometry.attributes.normal.needsUpdate=!0;for(let l of t.fingers)l.node.position.set(...o(l.rest.x,l.rest.y,l.rest.z))}function no(n,{time:e,moving:t=!1,mood:i=null,alive:s=!0}){let r=n.userData;if(!r?.body)return;let o=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches?0:1,l=i==="happy",c=Math.sin(e*12),h=Math.sin(e*2.2),u=l?(r.torsoPivot?.1+.44*((1+Math.sin(e*1.65))*.5)**2:.11+Math.sin(e*3.8)*.12)*o:0;r.torsoMesh&&(r.torsoMesh.visible=!l,r.laughTorsoMesh.visible=l),r.body.rotation.z=o*Math.sin(e*(t?11:l?6:1.8))*(t?.025:l?.035:.006),r.body.rotation.x=l?u*(r.torsoPivot?.08:1):i==="sad"?.12:0,r.torsoPivot&&(r.torsoPivot.rotation.x=l?u*.92:0),r.body.scale.set(1,1+(l?c*.025:h*.006)*o,1+(l?c*.012:0)*o),r.arms.forEach((d,g)=>{Z_(d,l),d.rotation.x=l?-.54+c*.055*o:t?Math.sin(e*11+g*Math.PI)*.4*o:0,d.rotation.z=l?g?-.42:.42:0,d.rotation.y=l?g?-.32:.32:0}),r.legs.forEach((d,g)=>d.rotation.x=t?Math.sin(e*11+g*Math.PI)*.28*o:l?-.06:0);let f=!l&&Math.sin(e*.63+n.id%7)>.997;if(r.eyeParts)r.eyeParts.forEach(d=>d.visible=!l&&!f),r.lids.forEach(d=>d.visible=l||f);else for(let d of r.lids)d.name==="eyelid"?(d.visible=l||f,d.scale.y=l||f?d.userData.closedY:.001):d.name==="closed-eye"&&(d.visible=l||f);r.canine?(r.tail.rotation.z=Math.sin(e*(t?9:3))*.08*o,r.ears.forEach((d,g)=>d.rotation.x=Math.sin(e*7+g)*.06*o),r.legs.forEach((d,g)=>d.rotation.x=t?Math.sin(e*11+[0,Math.PI,Math.PI,0][g])*.34*o:0),r.laughMouth.visible=!0,Wu(r.laughMouth,e,o)):r.tail&&(r.tail.rotation.y=Math.sin(e*2)*.05*o),r.egg&&(r.body.position.y=(r.vehicleId?.3:0)+(t?Math.abs(Math.sin(e*9))*.14*o:0)),r.laughMouth&&!r.canine&&(r.laughMouth.visible=l,Wu(r.laughMouth,e,o),r.mouth&&(r.mouth.visible=!l))}function zp(n){let e=new _e;if(e.name="vehicle",n===1){for(let t of[-.6,.6]){let i=Oe(e,new sn(.32,.045,8,24),"#344b51",[0,.25,t]);i.rotation.y=Math.PI/2;for(let s=0;s<6;s++){let r=Qe(e,"#b9c7c5",[[0,.25,t],[0,.25+Math.cos(s*Math.PI/3)*.29,t+Math.sin(s*Math.PI/3)*.29]],.009)}}Qe(e,"#4e9fa8",[[0,.25,-.6],[0,.65,0],[0,.25,.6],[0,.25,-.6]],.04),Qe(e,"#4e9fa8",[[0,.25,.6],[0,.86,.5],[0,.9,.7]],.04),$(e,"#344b51",[0,.73,0],[.3,.06,.28])}else{$(e,"#e8b744",[0,.3,0],[1.3,.45,1.7]),$(e,"#f0e1b4",[0,.63,-.1],[1,.45,1]),$(e,"#4d8c9c",[0,.7,.41],[.8,.27,.02]);for(let t of[-.65,.65])for(let i of[-.5,.5])Be(e,"#34464e",[t,.2,i],[.14,.25,.25]);$(e,"#ead18f",[0,.92,-.1],[.6,.1,.6]);for(let t of[-.4,.4])Be(e,"#fff4bd",[t,.35,.87],[.13,.12,.03]);$(e,"#7b8b88",[0,.18,.87],[1.1,.1,.08])}return e}var qu=new Map,En,Hp=!1;function Nc(n){if(qu.has(n))return qu.get(n);if(Hp||typeof window>"u")return null;try{En||(En=new vs({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),En.setSize(192,192),En.setPixelRatio(1),En.outputColorSpace=Ct,En.toneMapping=Mn,En.toneMappingExposure=1.05);let e=new en,t=Xr(n);t.rotation.y=-.13,e.add(t),e.add(new Wn("#fff2d8","#a5b09b",1.8));for(let[c,h,u,f,d]of[[-3,5,7,"#fff4df",3.2],[4,3,-3,"#b5d7f6",2]]){let g=new yn(f,d);g.position.set(c,h,u),e.add(g)}let i=new It().setFromObject(t),s=i.max.y-i.min.y,r=i.min.y+s*.72,a=s*.33,o=new ki(-a,a,a,-a,.1,30);o.position.set(.2,r+.12,7),o.lookAt(0,r,0),En.setClearColor("#000000",0),En.render(e,o);let l=En.domElement.toDataURL("image/png");return bi(t),qu.set(n,l),l}catch{return Hp=!0,null}}var Yu=0;function ui(n){let e=Nc(n);if(e)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><image href="${e}" width="80" height="80"/></svg>`;if(n==="naidan")return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true"><defs><radialGradient id="egg-${++Yu}"><stop stop-color="#fff3a7"/><stop offset="1" stop-color="#e5b939"/></radialGradient></defs><path d="M40 8C20 8 7 23 7 43C7 84 73 84 73 43C73 23 60 8 40 8Z" fill="url(#egg-${Yu})"/><ellipse cx="26" cy="43" rx="7" ry="9" fill="#a7ba62"/><ellipse cx="54" cy="43" rx="7" ry="9" fill="#a7ba62"/><ellipse cx="26" cy="43" rx="4" ry="6" fill="#27311d"/><ellipse cx="54" cy="43" rx="4" ry="6" fill="#27311d"/><path d="M30 59q10-2 20 0" stroke="#6b5226" stroke-width="2" fill="none"/></svg>`;if(n==="naicha")return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true"><path d="M57 23C84 13 84 61 58 55" stroke="#c7a35c" stroke-width="8" fill="none"/><path d="M13 16H62L58 58Q54 72 37 72Q20 72 17 58Z" fill="#d9b773"/><ellipse cx="37.5" cy="16" rx="24.5" ry="7" fill="#f3e5ba"/><ellipse cx="37.5" cy="16" rx="21" ry="4.5" fill="#885832"/><path d="M24 32q5-5 10 0M43 32q5-5 10 0" stroke="#51442d" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M24 40Q37 43 51 40Q49 59 38 60Q27 59 24 40Z" fill="#362419"/><path d="M28 42q10 4 20 0M32 55q6 3 12 0" stroke="#fff5d9" stroke-width="3" fill="none"/><path d="M14 46l-5 8M61 45l5 9M26 70v5M49 70v5" stroke="#57513d" stroke-width="7" stroke-linecap="round"/></svg>';let t="portrait-"+ ++Yu,i=n==="naishu",s=n==="naichong",r=n==="naigou",a=s?"#ee6d35":i?"#f8dd64":"#f8d437",o=i?'<ellipse cx="16" cy="18" rx="15" ry="17" fill="#e6bc42"/><ellipse cx="64" cy="18" rx="15" ry="17" fill="#e6bc42"/><ellipse cx="16" cy="18" rx="11" ry="12" fill="#f1c58a"/><ellipse cx="64" cy="18" rx="11" ry="12" fill="#f1c58a"/>':r?'<path d="M24 15Q9 5 5 26Q6 43 18 34L30 18M56 15Q71 5 75 26Q74 43 62 34L50 18" fill="#8e774c"/>':"",l=`<path d="M23 32C23 10 57 10 57 32C58 42 69 48 67 63C65 80 15 80 13 63C11 48 22 42 23 32Z" fill="url(#${t})"/><path d="M20 54Q17 67 30 72" fill="none" stroke="#fff1ac" stroke-width="3" opacity=".55"/><ellipse cx="40" cy="59" rx="17" ry="15" fill="#fff095" opacity=".65"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><defs><radialGradient id="${t}" cx=".3" cy=".25" r=".85"><stop stop-color="${s?"#ffad52":"#ffef91"}"/><stop offset=".55" stop-color="${a}"/><stop offset="1" stop-color="${s?"#cc4d26":"#d5a82d"}"/></radialGradient></defs><ellipse cx="40" cy="75" rx="24" ry="3" fill="#9d7236" opacity=".14"/>${o}${l}${r?'<path d="M25 31q5-6 10 0M46 31q5-6 10 0" stroke="#493520" stroke-width="2.3" fill="none" stroke-linecap="round"/><path d="M25 42Q40 38 55 42Q53 64 40 65Q27 64 25 42Z" fill="#40291e"/><path d="M29 43Q40 47 51 43M34 59q6 4 12 0" fill="none" stroke="#fff3d5" stroke-width="3.5" stroke-linecap="round"/>':s?'<ellipse cx="40" cy="35" rx="20" ry="18" fill="#ffe382"/><path d="M27 32q5-5 10 0M44 32q5-5 10 0M31 43q9 7 18 0" fill="none" stroke="#66462b" stroke-width="2" stroke-linecap="round"/><path d="M15 56q25 19 50 0M18 67q22 12 44 0" fill="none" stroke="#ffd64e" stroke-width="5"/><path d="M35 17L30 8M44 17l5-9" stroke="#d74d29" stroke-width="3.5" stroke-linecap="round"/>':`<ellipse cx="29" cy="31" rx="6" ry="7.5" fill="${i?"#b8cd85":"#93b747"}"/><ellipse cx="51" cy="31" rx="6" ry="7.5" fill="${i?"#b8cd85":"#93b747"}"/><ellipse cx="29" cy="31" rx="3.4" ry="4.6" fill="#1c291d"/><ellipse cx="51" cy="31" rx="3.4" ry="4.6" fill="#1c291d"/><circle cx="28" cy="29" r="1.2" fill="#fff7dd"/><circle cx="50" cy="29" r="1.2" fill="#fff7dd"/><path d="M29 43q11 ${i?3:0} 22 0" fill="none" stroke="#75511d" stroke-width="1.5" stroke-linecap="round"/>`}</svg>`}var ri=[{id:"naiwa",estateColor:"#45a078",name:"\u5976\u86D9",subtitle:"\u7B11\u4E00\u7B11\uFF0C\u597D\u8FD0\u5230",color:"#f7c945",accent:"#78a84d",style:"\u5747\u8861\u7ECF\u8425",description:"\u5706\u809A\u5B50\u3001\u7EFF\u773C\u775B\uFF0C\u4ECA\u5929\u4E5F\u8981\u6367\u8179\u5927\u7B11\u3002"},{id:"naichong",estateColor:"#d96850",name:"\u5976\u866B",subtitle:"\u6162\u6162\u6765\uFF0C\u4E5F\u4F1A\u53D1\u8D22",color:"#f66b45",accent:"#f6c944",style:"\u7A33\u5065\u50A8\u84C4",description:"\u7EA2\u8272\u8F6F\u58F3\u548C\u91D1\u9EC4\u6761\u7EB9\uFF0C\u5B89\u9759\u5730\u6512\u4E0B\u81EA\u5DF1\u7684\u5C0F\u91D1\u5E93\u3002"},{id:"naishu",estateColor:"#4888ca",name:"\u5976\u9F20",subtitle:"\u597D\u5730\u6BB5\uFF0C\u5148\u5230\u5148\u5F97",color:"#e4b745",accent:"#79b7c2",style:"\u79EF\u6781\u7F6E\u4E1A",description:"\u5927\u8033\u6735\u3001\u7EC6\u5C3E\u5DF4\uFF0C\u5411\u6BCF\u4E00\u4F4D\u5976\u5BB6\u4EBA\u6325\u6325\u624B\u3002"},{id:"naigou",estateColor:"#9564c4",name:"\u5976\u72D7",subtitle:"\u5F00\u5FC3\u6BCF\u4E00\u5929",color:"#f5d25f",accent:"#8c744a",style:"\u5747\u8861\u7ECF\u8425",description:"\u5782\u8033\u3001\u4E0A\u7FD8\u5C3E\u5DF4\u548C\u5F00\u6000\u7B11\u8138\u7684\u56DB\u8DB3\u5976\u4F34\u3002"},{id:"naidan",estateColor:"#df9139",name:"\u5976\u86CB",subtitle:"\u8EBA\u7740\u4E5F\u80FD\u8D62",color:"#f8d44c",accent:"#91af55",style:"\u5F3A\u52BF\u5EFA\u8BBE",description:"\u5C0F\u5DE7\u7684\u91D1\u9EC4\u8272\u86CB\u5F62\u8EAB\u4F53\u3001\u7EFF\u773C\u775B\u548C\u77ED\u77ED\u7684\u5634\uFF0C\u6EDA\u7740\u4E5F\u80FD\u53D1\u8D22\u3002"},{id:"naicha",estateColor:"#c67396",name:"\u5976\u8336",subtitle:"\u6696\u5FC3\u8865\u7ED9",color:"#f3c958",accent:"#58372e",style:"\u8865\u7ED9\u652F\u63F4",description:"\u91D1\u8272\u5976\u8336\u676F\u3001\u5706\u6DA6\u676F\u628A\u3001\u6DF1\u8272\u624B\u5957\u548C\u77ED\u817F\uFF0C\u7B11\u7740\u4E3A\u5976\u4F34\u8865\u7ED9\u3002"}],on=[{name:"\u5976\u8336\u8857",color:"#ee9e83"},{name:"\u5927\u7B11\u5DF7",color:"#edcb56"},{name:"\u5976\u5757\u5DE5\u574A",color:"#a7b9e4"},{name:"\u5976\u5BB6\u82B1\u56ED",color:"#8cbea0"},{name:"\u5976\u5E01\u6E2F",color:"#70b8ca"},{name:"\u661F\u91CE\u5927\u9053",color:"#c79cce"}],J_={0:["start","\u5976\u5BB6\u8D77\u70B9","\u6BCF\u6B21\u7ECF\u8FC7\u9886\u53D6 400 \u5976\u5E01"],3:["event","\u8868\u60C5\u5305\u5E7F\u573A"],6:["bank","\u5976\u5E01\u94F6\u884C"],9:["shop","\u5976\u5BB6\u4FBF\u5229\u5E97"],12:["hospital","\u5976\u86D9\u7597\u517B\u9662"],15:["stock","\u5976\u5BB6\u8BC1\u5238\u6240"],18:["event","\u91CE\u751F\u72D7\u5976\u644A"],21:["spirit","\u5927\u7B11\u795E\u6BBF"],24:["rest","\u5976\u86D9\u7684\u5C0F\u7A9D"],27:["shop","\u5976\u4F34\u8865\u7ED9\u7AD9"],30:["bank","\u5976\u5E01\u50A8\u84C4\u6240"],33:["event","\u5976\u86D9\u8857\u821E\u53F0"],36:["tax","\u5976\u6CE1\u6E05\u6D01\u7AD9"],39:["stock","\u5976\u5BB6\u4EA4\u6613\u6240"]},Vp=["\u73CD\u73E0\u5976\u8336\u94FA","\u5976\u8336\u5C0F\u7AD9","\u5927\u7B11\u7167\u76F8\u9986","\u5976\u86D9\u5267\u573A","\u5976\u5757\u9762\u5305\u623F","\u5976\u866B\u751C\u54C1\u5C4B","\u91D1\u8033\u9F20\u5546\u5E97","\u5976\u5BB6\u5C0F\u82B1\u56ED","\u5FEB\u4E50\u6D17\u6FA1\u5802","\u5976\u8336\u591C\u5E02","\u5976\u5E01\u7801\u5934","\u5927\u809A\u5B50\u65C5\u9986","\u7EFF\u773C\u775B\u4E66\u5E97","\u5976\u9F20\u73A9\u5177\u5C4B","\u661F\u91CE\u5C0F\u5267\u573A","\u5976\u86D9\u8BBE\u8BA1\u5BA4","\u5976\u76D6\u5DE5\u5382","\u5FAE\u7B11\u4FBF\u5229\u5E97","\u5976\u5BB6\u9910\u5385","\u91D1\u86D9\u5C0F\u516C\u5BD3","\u5976\u7F50\u8F66\u7AD9","\u86CB\u58F3\u5C55\u89C8\u9986","\u5976\u9999\u5546\u573A","\u5927\u7B11\u7535\u5F71\u9662","\u5706\u809A\u5B50\u98DF\u5802","\u5976\u5BB6\u90AE\u5C40"],di=Array.from({length:48},(n,e)=>{let t,i;if(e<40){let a=2.4-e*Math.PI*2/40;t=14*Math.cos(a)+.7*Math.sin(a*3),i=10.7*Math.sin(a)+.65*Math.cos(a*2)}else{let a=e<44?35:15,o=e<44?15:35,l=2.4-a*Math.PI*2/40,c=2.4-o*Math.PI*2/40,h=((e<44?e-40:e-44)+1)/5,u=14*Math.cos(l)+.7*Math.sin(l*3),f=10.7*Math.sin(l)+.65*Math.cos(l*2),d=14*Math.cos(c)+.7*Math.sin(c*3),g=10.7*Math.sin(c)+.65*Math.cos(c*2),v=e<44?-1:1;t=u+(d-u)*h,i=f+(g-f)*h+Math.sin(h*Math.PI)*v*3.7}let s=J_[e],r=e>=40?e<44?4:5:Math.floor(e/7)%6;return{id:e,x:t,z:i,kind:s?.[0]||"property",name:s?.[1]||Vp[(e-Math.floor(e/3))%Vp.length],description:s?.[2]||"",group:r,price:180+r*90+e%3*30,next:e<39?[e+1]:e===39?[0]:e<43?[e+1]:e===43?[15]:e<47?[e+1]:[35]}});di[35].next=[36,40];di[15].next=[16,44];for(let n of di){let e=n.id<40?di[(n.id+39)%40]:di[n.id===40?35:n.id===44?15:n.id-1],t=di[n.next[0]],i=t.x-e.x,s=t.z-e.z,r=Math.hypot(i,s);n.yaw=Math.atan2(-s,i);let a=-s/r,o=i/r;(n.id<40&&a*n.x+o*n.z<0||n.id>=40&&o*(n.id<44?-1:1)<0)&&(a=-a,o=-o),n.lotX=n.x+a*2.3,n.lotZ=n.z+o*2.3,n.facing=Math.atan2(-a,-o)}var Gp=[{id:0,name:"\u5976\u8336\u5B9E\u4E1A",short:"\u8336",price:100,group:0},{id:1,name:"\u5927\u7B11\u4F20\u5A92",short:"\u7B11",price:120,group:1},{id:2,name:"\u5976\u5757\u5DE5\u574A",short:"\u5757",price:80,group:2},{id:3,name:"\u5976\u5E01\u7269\u6D41",short:"\u6E2F",price:150,group:4}],Yt={dice:{name:"\u5FC3\u60F3\u4E8B\u6210\u5361",icon:"\u2684",price:30,description:"\u63B7\u9AB0\u524D\u6307\u5B9A\u672C\u6B21\u603B\u6B65\u6570 1\u20146\uFF1B\u914D\u5408\u843D\u70B9\u9884\u89C8\u9009\u62E9\u4E70\u5730\u3001\u8865\u7ED9\u6216\u907F\u79DF\u3002",target:"steps"},block:{name:"\u5976\u5757\u8DEF\u969C",icon:"\u25A6",price:20,description:"\u524D\u65B9 1\u20146 \u683C\u653E\u8DEF\u969C\uFF0C\u9996\u540D\u7ECF\u8FC7\u8005\u505C\u4E0B\uFF1B\u53EF\u4EE5\u622A\u4F4F\u5BF9\u624B\uFF0C\u4E5F\u80FD\u505C\u5728\u5FC3\u4EEA\u5730\u5757\u3002",target:"ahead"},turn:{name:"\u5976\u86D9\u56DE\u5934\u5361",icon:"\u21B6",price:20,description:"\u672C\u56DE\u5408\u6CBF\u6765\u8DEF\u5012\u9000\uFF1B\u53EF\u4EE5\u907F\u5F00\u9AD8\u79DF\u91D1\uFF0C\u4F46\u5012\u9000\u4E0D\u9886\u53D6\u8D77\u70B9\u5956\u52B1\u3002",target:"self"},shield:{name:"\u5FEB\u4E50\u514D\u79DF\u5361",icon:"\u2302",price:35,description:"\u62B5\u6D88\u4E0B\u4E00\u7B14\u79DF\u91D1\uFF0C\u4FDD\u7559\u81F3\u89E6\u53D1\u3002\u53EF\u4E0E\u63A7\u9AB0\u3001\u56DE\u5934\u7B49\u5361\u7EC4\u5408\u4F7F\u7528\u3002",target:"self"},steal:{name:"\u5976\u9F20\u62A2\u5730\u5361",icon:"\u2691",price:45,description:"\u505C\u5728\u5BF9\u624B\u5730\u4EA7\u65F6\u6536\u8D2D\u8BE5\u5730\u4EA7\uFF1B\u5411\u4E1A\u4E3B\u652F\u4ED8\u5730\u4EA7\u6210\u672C\u7684 125%\uFF0C\u53EF\u6253\u65AD\u5176\u8857\u533A\u7ECF\u8425\u3002",target:"enemy"},recover:{name:"\u91CE\u751F\u72D7\u5976",icon:"\u2667",price:20,description:"\u79FB\u9664\u4F11\u517B\u4E0E\u9709\u8FD0\uFF0C\u83B7\u5F97 80 \u5976\u5E01\u8865\u7ED9\u3002",target:"self"},demolish:{name:"\u5976\u5757\u62C6\u9664\u5361",icon:"\u265C",price:25,description:"\u62C6\u53BB 8 \u683C\u8303\u56F4\u5185\u4E00\u5C42\u623F\u5C4B\uFF0C\u6216\u6E05\u9664\u8DEF\u969C\uFF1B\u4E0D\u4F1A\u593A\u8D70\u571F\u5730\u3002",target:"enemyBuilt"},build:{name:"\u5976\u5BB6\u5DE5\u7A0B\u961F",icon:"\u2692",price:65,description:"\u4E3A 8 \u683C\u8303\u56F4\u5185\u81EA\u5DF1\u7684\u5730\u4EA7\u514D\u8D39\u52A0\u76D6\u4E00\u5C42\uFF0C\u4E0D\u5360\u5E38\u89C4\u5EFA\u8BBE\u6B21\u6570\u3002",target:"own"},slow:{name:"\u6162\u6162\u8D70\u5361",icon:"\u2667",price:25,description:"\u81EA\u5DF1\u63A5\u4E0B\u6765\u4E09\u6B21\u884C\u52A8\u5404\u8D70 1 \u683C\uFF0C\u4FBF\u4E8E\u8FDE\u7EED\u4E70\u5730\u6216\u4EAB\u53D7\u5F53\u5730\u5EFA\u8BBE\u6298\u6263\u3002",target:"self"}},ys={fortune:{name:"\u5927\u7B11\u8D22\u795E",icon:"\u2726",description:"\u975E\u4EA4\u6613\u6536\u5165\u589E\u52A0 25%"},misfortune:{name:"\u5976\u6CE1\u9709\u795E",icon:"\u2601",description:"\u79DF\u91D1\u548C\u8D39\u7528\u589E\u52A0 25%"},guardian:{name:"\u5976\u86CB\u5B88\u62A4",icon:"\u25C9",description:"\u62B5\u6321\u4E00\u6B21\u8D1F\u9762\u4E8B\u4EF6"}},ln=[{id:0,name:"\u6B65\u884C",dice:1,price:0},{id:1,name:"\u5976\u86D9\u81EA\u884C\u8F66",dice:2,price:600},{id:2,name:"\u5976\u7F50\u5C0F\u8F66",dice:3,price:1200}],Zu=[{name:"\u5168\u7F51\u4E00\u8D77\u6367\u8179\u5927\u7B11",text:"\u4F60\u7684\u5927\u7B11\u8868\u60C5\u5305\u8D70\u7EA2\uFF0C\u6536\u83B7 280 \u5976\u5E01\u3002",kind:"gain",amount:280,stock:1,change:.12},{name:"\u91CE\u751F\u72D7\u5976\u8865\u7ED9",text:"\u6536\u5230\u5976\u5BB6\u4EBA\u7684\u8865\u7ED9\uFF0C\u6062\u590D\u4F11\u517B\u5E76\u83B7\u4E00\u74F6\u91CE\u751F\u72D7\u5976\u3002",kind:"recover"},{name:"\u5976\u8336\u6D12\u4E86\u4E00\u5730",text:"\u652F\u4ED8\u6E05\u6D01\u8D39\u7528 180 \u5976\u5E01\u3002",kind:"loss",amount:180},{name:"\u9009\u62E9\u4F60\u7684\u5976\u4F34",text:"\u5976\u4F34\u9001\u6765\u4E00\u5F20\u968F\u673A\u9053\u5177\u5361\u3002",kind:"card"},{name:"\u5976\u86D9\u8857\u821E\u5F00\u573A",text:"\u6F14\u51FA\u6536\u83B7 200 \u5976\u5E01\uFF0C\u5927\u7B11\u4F20\u5A92\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:200,stock:1,change:.1},{name:"\u5976\u5757\u5DE5\u5382\u505C\u7535",text:"\u4FEE\u7406\u8BBE\u5907\u652F\u4ED8 150 \u5976\u5E01\uFF0C\u5976\u5757\u5DE5\u574A\u884C\u60C5\u56DE\u843D\u3002",kind:"loss",amount:150,stock:2,change:-.12},{name:"\u5976\u8336\u65B0\u54C1\u5927\u5356",text:"\u54C1\u9274\u6D3B\u52A8\u83B7\u5F97 160 \u5976\u5E01\uFF0C\u5976\u8336\u5B9E\u4E1A\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:160,stock:0,change:.12},{name:"\u5976\u86D9\u7231\u6D17\u6FA1",text:"\u6D17\u9999\u9999\uFF0C\u4F11\u606F\u4E00\u56DE\u5408\uFF0C\u83B7\u8865\u8D34 100 \u5976\u5E01\u3002",kind:"rest",amount:100},{name:"\u5976\u5E01\u6E2F\u53E3\u987A\u98CE",text:"\u8FD0\u8F93\u6536\u5165 220 \u5976\u5E01\uFF0C\u5976\u5E01\u7269\u6D41\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:220,stock:3,change:.1},{name:"\u795E\u79D8\u5976\u7F50",text:"\u6253\u5F00\u5976\u7F50\uFF0C\u8BF7\u4E00\u4F4D\u5976\u5BB6\u795E\u7075\u6765\u505A\u5BA2\u3002",kind:"spirit"}],qr=[2,8,14,20,26,32,38,42,46];var Fc=[[-14,0],[-12,-9],[0,-11],[12,-9],[14,0],[12,9],[0,11],[-12,9],[-14,0]],j_={0:["start","\u5976\u5BB6\u8F66\u7AD9"],3:["event","\u6668\u5149\u5E7F\u573A"],6:["bank","\u5317\u5CB8\u94F6\u884C"],10:["shop","\u5976\u8336\u8857\u8865\u7ED9\u5E97"],15:["stock","\u5E02\u6C11\u8BC1\u5238\u6240"],18:["hospital","\u5976\u5BB6\u533B\u9662"],20:["event","\u8857\u89D2\u65B0\u95FB\u53F0"],22:["spirit","\u5927\u7B11\u795E\u6BBF"],26:["bank","\u5357\u5CB8\u94F6\u884C"],30:["shop","\u6E2F\u6E7E\u8865\u7ED9\u5E97"],34:["rest","\u6EE8\u6CB3\u5C0F\u7A9D"],36:["tax","\u793E\u533A\u6E05\u6D01\u7AD9"],38:["event","\u6E2F\u53E3\u96C6\u5E02"],39:["stock","\u6E2F\u6E7E\u4EA4\u6613\u6240"]},K_=[["\u6668\u5149\u5976\u8336\u94FA","\u73CD\u73E0\u5C0F\u5C4B","\u7EFF\u773C\u775B\u4E66\u5E97","\u5976\u76D6\u70D8\u7119\u5C4B","\u5DF7\u53E3\u8336\u9986"],["\u5927\u7B11\u5267\u573A","\u5976\u5BB6\u5F71\u793E","\u661F\u5149\u7167\u76F8\u9986","\u56DE\u58F0\u4E66\u5C4B","\u5976\u4F34\u7535\u53F0"],["\u5976\u5757\u5DE5\u574A","\u5976\u7F50\u4F5C\u574A","\u5976\u9999\u9762\u5305\u623F","\u79EF\u6728\u4FEE\u7406\u94FA","\u8857\u89D2\u4ED3\u5E93"],["\u5976\u5BB6\u82B1\u56ED","\u5706\u809A\u5B50\u65C5\u9986","\u94F6\u674F\u5C0F\u9662","\u5976\u4F34\u516C\u5BD3","\u82B1\u56ED\u9910\u5385"],["\u5976\u5E01\u7801\u5934","\u5976\u5BB6\u90AE\u5C40","\u5E06\u8239\u65C5\u5E97","\u6E2F\u6E7E\u9910\u5385","\u5FAE\u7B11\u4FBF\u5229\u5E97"],["\u661F\u91CE\u5546\u573A","\u5976\u86D9\u8BBE\u8BA1\u5BA4","\u86CB\u58F3\u5C55\u89C8\u9986","\u661F\u91CE\u516C\u5BD3","\u5976\u9999\u767E\u8D27"]],wn=Array.from({length:48},(n,e)=>{let t,i;if(e<40){let o=Math.floor(e/5),l=e%5/5;[t,i]=Fc[o].map((c,h)=>c+(Fc[o+1][h]-c)*l)}else{let o=e<44,l=o?35:15,c=o?3:23,h=((o?e-40:e-44)+1)/5,u=g=>{let v=Math.floor(g/5),m=g%5/5;return Fc[v].map((p,y)=>p+(Fc[v+1][y]-p)*m)},f=u(l),d=u(c);t=f[0]+(d[0]-f[0])*h+Math.sin(h*Math.PI)*(o?4.2:-4.2),i=f[1]+(d[1]-f[1])*h}let s=e<40?Math.min(5,Math.floor(e/7)):e<44?0:3,r=j_[e],a=180+s*70+e%3*30;return{id:e,x:t,z:i,group:s,kind:r?.[0]||"property",name:r?.[1]||K_[s][e%5],price:a,description:"",next:e<39?[e+1]:e===39?[0]:e<43?[e+1]:e===43?[3]:e<47?[e+1]:[23]}});wn[35].next=[36,40];wn[15].next=[16,44];for(let n of wn){let e=wn[n.id<40?(n.id+39)%40:n.id===40?35:n.id===44?15:n.id-1],t=wn[n.next[0]],i=t.x-e.x,s=t.z-e.z,r=Math.hypot(i,s);n.yaw=Math.atan2(-s,i);let a=-s/r,o=i/r,l=n.id<40;(l&&a*n.x+o*n.z<0||!l&&a*n.x+o*n.z>0)&&(a=-a,o=-o),n.lotX=n.x+a*2.3,n.lotZ=n.z+o*2.3,n.facing=Math.atan2(-a,-o)}var Ju=n=>n===2?wn:di,Jn={1:{name:"\u7ECF\u5178\u53D1\u8D22\u5C9B",description:"\u4E0D\u89C4\u5219\u73AF\u5C9B\u4E0E\u8DE8\u5C9B\u957F\u6377\u5F84\u3002\u897F\u4FA7\u5165\u53E3\u901A\u5F80\u4E1C\u5CB8\uFF0C\u4E1C\u4FA7\u5165\u53E3\u901A\u5F80\u897F\u5CB8\uFF1B\u4FDD\u5B58\u7684\u5BF9\u5C40\u59CB\u7EC8\u4FDD\u7559\u81EA\u5DF1\u7684\u5730\u56FE\u3002"},2:{name:"\u5976\u5BB6\u6EE8\u6CB3\u9547",description:"48 \u683C\u57CE\u9547\u73AF\u7EBF\uFF0C\u5357\u5317\u53CC\u94F6\u884C\u4E0E\u8865\u7ED9\u5E97\uFF1B\u4E24\u6761\u652F\u8DEF\u5404\u7701 3 \u683C\u3002\u897F\u4FA7\u652F\u8DEF\u8DF3\u8FC7\u8D77\u70B9\u5956\u52B1\uFF0C\u4E1C\u4FA7\u652F\u8DEF\u7ED5\u5F00\u533B\u9662\u53CA\u795E\u6BBF\u3002"}};var _s=n=>Math.round(n).toLocaleString("zh-CN"),ju=[["cash","\u73B0\u91D1","#e1b64e"],["deposit","\u5B58\u6B3E","#65a58c"],["property","\u5730\u4EA7","#cb8464"],["stocks","\u80A1\u7968","#75a6bb"],["vehicle","\u4EA4\u901A\u5DE5\u5177","#aa976b"]];function Q_(n){let e=n.ranking(),t=1;return e.map((i,s)=>(s&&(i.alive!==e[s-1].alive||n.worth(i)!==n.worth(e[s-1]))&&(t=s+1),{player:i,rank:t,assets:n.assets(i),lots:n.owned(i).length,winner:t===1}))}var e1='<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M27 23H10v12q0 26 26 25M73 23h17v12q0 26-26 25" fill="none" stroke="#b18235" stroke-width="7"/><path d="M24 16h52v26q0 24-26 28Q24 66 24 42Z" fill="#f1c55b" stroke="#ab7935" stroke-width="3"/><path d="M33 23h7v20q0 12 7 17" fill="none" stroke="#ffed9f" stroke-width="5" stroke-linecap="round"/><path d="M45 69h10v14H45Z" fill="#c08d38"/><path d="M31 83h38v9H31Z" fill="#d7a146" stroke="#9b7032" stroke-width="2"/><path d="m50 29 4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1Z" fill="#fff2b6"/></svg>';function t1(n){let e=n.assets,t=ju.reduce((i,[s])=>i+e[s],0);return`<div class="result-ledger"><div class="asset-ribbon" role="img" aria-label="\u603B\u8D44\u4EA7 ${_s(t)} \u5976\u5E01\uFF0C\u4E0D\u542B\u8D37\u6B3E\u6263\u9664">${ju.filter(([i])=>e[i]>0).map(([i,s,r])=>`<span style="width:${e[i]/t*100}%;background:${r}" title="${s} ${_s(e[i])}"></span>`).join("")}</div><dl>${ju.map(([i,s,r])=>`<div><dt><i style="background:${r}"></i>${s}</dt><dd>${_s(e[i])}</dd></div>`).join("")}<div class="result-loan"><dt>\u6263\u9664\u8D37\u6B3E</dt><dd>\u2212${_s(e.loan)}</dd></div><div class="result-total"><dt>\u51C0\u8D44\u4EA7</dt><dd>${_s(e.total)}</dd></div></dl></div>`}function Wp(n){let e=Q_(n),t=e.filter(o=>o.winner),i=t.map(o=>n.char(o.player).name).join("\u3001"),s=e.find(o=>o.player.human),r=e.filter(o=>o.player.alive),a=t.length===1&&r.length>1?t[0].assets.total-r[1].assets.total:null;return`<div class="settlement"><section class="winner-banner"><div class="winner-trophy">${e1}</div><div class="winner-faces">${t.map(o=>`<span>${ui(o.player.character)}</span>`).join("")}</div><h3>${i}${t.length>1?"\u5E76\u5217\u593A\u51A0":"\u593A\u51A0\uFF01"}</h3><p>${r.length===1?"\u575A\u6301\u5230\u6700\u540E\uFF0C\u6210\u4E3A\u552F\u4E00\u5B58\u6D3B\u5976\u4F34":`\u5B8C\u6210 ${n.s.round} \u8F6E\u65C5\u884C\uFF0C\u6309\u51C0\u8D44\u4EA7\u7ED3\u7B97`}</p><strong class="winner-score">${_s(t[0].assets.total)}<small> \u5976\u5E01\u51C0\u8D44\u4EA7</small></strong>${a!==null?`<span class="winner-lead">\u9886\u5148\u7B2C\u4E8C\u540D ${_s(a)} \u5976\u5E01</span>`:""}</section><div class="settlement-meta"><span>${Jn[n.s.mapVersion].name}</span><span>${e.length} \u4EBA \xB7 \u7B2C ${n.s.round} / ${n.s.maxRounds} \u8F6E</span></div>${s?`<p class="personal-result">${s.winner?"\u606D\u559C\u4F60\uFF0C\u767B\u4E0A\u5976\u5BB6\u5BCC\u8C6A\u699C\u9996\uFF01":`\u4F60\u7684\u672C\u5C40\u6392\u540D\uFF1A\u7B2C ${s.rank} \u540D${s.player.alive?"":" \xB7 \u5DF2\u7834\u4EA7\u9000\u51FA"}`} \xB7 \u62E5\u6709 ${s.lots} \u5757\u5730\u4EA7</p>`:""}<h3 class="settlement-heading">\u5976\u5BB6\u8D44\u4EA7\u699C <small>\u70B9\u5F00\u5976\u4F34\u67E5\u770B\u8D44\u4EA7\u660E\u7EC6</small></h3><div class="settlement-ranks">${e.map(o=>{let l=o.player,c=n.char(l);return`<details class="result-entry ${l.human?"result-is-you":""}" ${l.human?"open":""}><summary><span class="result-place">${o.rank}</span><span class="result-face" style="background:${c.color}">${ui(c.id)}</span><span class="result-name">${c.name}${l.human?"<b>\u4F60</b>":""}<small>${l.alive?o.winner?"\u672C\u5C40\u51A0\u519B":o.lots+" \u5757\u5730\u4EA7":"\u5DF2\u7834\u4EA7"}</small></span><strong>${_s(o.assets.total)}<small>\u51C0\u8D44\u4EA7 \u25BE</small></strong></summary>${t1(o)}</details>`}).join("")}</div><p class="settlement-rule">\u5B58\u6D3B\u89D2\u8272\u4F18\u5148\uFF1B\u540C\u4E3A\u5B58\u6D3B\u6216\u7834\u4EA7\u4E14\u51C0\u8D44\u4EA7\u76F8\u540C\u5219\u5E76\u5217\u3002\u5730\u4EA7\u6309\u8D2D\u5165\u4E0E\u5EFA\u7B51\u540D\u4E49\u6210\u672C\u4F30\u503C\uFF0C\u80A1\u7968\u6309\u7ED3\u7B97\u65F6\u5E02\u4EF7\u8BA1\u4EF7\uFF0C\u4EA4\u901A\u5DE5\u5177\u6309\u8D2D\u5165\u4EF7\u8BA1\u4EF7\uFF1B\u70B9\u5238\u548C\u624B\u724C\u4E0D\u8BA1\u5165\u51C0\u8D44\u4EA7\u3002</p><div class="button-grid result-actions"><button class="primary" data-act="newGame">\u518D\u53BB\u65C5\u884C\u4E00\u6B21</button><button class="secondary" data-act="viewBoard">\u56DE\u770B\u5C0F\u5C9B</button><button class="secondary" data-act="export">\u4FDD\u5B58\u672C\u5C40\u5B58\u6863</button></div></div>`}var i1=["#347447","#458b4e","#63a357","#7eb56a"],n1=["#edb4ba","#f2d578","#c9b8e7","#fff1d0"];function Ku(n,e,t,i=1,s=0){let r=new _e,a=new _e;ot(r,"#855c3b",[0,.52,0],.075,.15,1.04,20);for(let o of[-1,1])Qe(r,"#855c3b",[[0,.52,0],[o*.18,.89,.025],[o*.31,1.18,.05]],.04);for(let o=0;o<13;o++){let l=o*2.39996,c=o<3?.1:.38,h=1.24+o%4*.14,u=Be(a,s%7===3?["#dba0b3","#e7b3c3","#f4cbd5","#f7dae0"][o%4]:i1[(o+s)%4],[Math.cos(l)*c,h,Math.sin(l)*c],[.33+o%3*.025,.39,.34]);u.rotation.z=l*.13}return r.add(a),r.position.set(e,.08,t),r.scale.setScalar(i),n.add(r),r}function $p(n){let e=new _e;e.name="riverside-details",n.world.add(e);let t=91871,i=()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296),s=(f,d,g=2)=>n.tiles.every(v=>Math.hypot(v.x-f,v.z-d)>g&&Math.hypot(v.lotX-f,v.lotZ-d)>g);for(let f of[-1,1])for(let d=0;d<100;d++){let g=-15+d*.3,v=Math.sin(g*.21)*.8+f*(.73+i()*.35);if(!s(g,v,1.7))continue;let m=Be(e,d%3?"#b8b4a0":"#ddd5b7",[g,.07,v],[.11+i()*.1,.06+i()*.05,.08+i()*.1]);if(m.rotation.y=i()*6.28,d%5===0)for(let p=0;p<5;p++){let y=ot(e,"#607c43",[g+(p-2)*.07,.24,v],.012,.018,.38,8);y.rotation.z=(p-2)*.12}}for(let f=0;f<20;f++){let d=-13+i()*26,g=(i()>.5?1:-1)*(3.3+i()*4);s(d,g,2.2)&&Ku(e,d,g,.65+i()*.35,f)}for(let f=0;f<12;f++){let d=-12+i()*24,g=(i()>.5?1:-1)*(2.3+i()*3.7);if(!s(d,g,1.8))continue;let v=new _e;$(v,"#c7b18a",[0,.085,0],[.78,.12,.55]),$(v,"#56774b",[0,.16,0],[.7,.07,.47]);for(let m=0;m<9;m++){let p=(m%3-1)*.19,y=(Math.floor(m/3)-1)*.15,_=.28+i()*.06;ot(v,"#5b8744",[p,.22,y],.009,.009,.18,6);for(let x=0;x<5;x++){let R=x/5*Math.PI*2;Be(v,n1[(f+m)%4],[p+Math.cos(R)*.047,_,y+Math.sin(R)*.047],[.04,.025,.04])}Be(v,"#d6a83f",[p,_+.014,y],[.024,.018,.024])}v.position.set(d,0,g),e.add(v)}let r=new ut;r.setAttribute("position",new Ne([-.026,0,0,.026,0,0,-.017,.16,0,.017,.16,0,.014,.29,0],3)),r.setIndex([0,1,2,1,3,2,2,3,4]),r.computeVertexNormals();let a=new zs(r,ku(new Ft({color:"#71a15c",side:Nt,roughness:.9}),!0),1600),o=new et,l=new ci,c=new w,h=new w,u=0;for(let f=0;f<1e4&&u<1600;f++){let d=-16+i()*32,g=-10+i()*20;!s(d,g,2)||Math.abs(g-Math.sin(d*.21)*.8)<1.2||(c.set(d,.065,g),l.setFromAxisAngle(new w(0,1,0),i()*6.28),h.setScalar(.5+i()*.8),o.compose(c,l,h),a.setMatrixAt(u++,o))}return a.name="meadow-grass",a.count=u,a.receiveShadow=!0,a.castShadow=!1,a.computeBoundingSphere(),e.add(a),an(e),e}function Yr(n,e,t,i){let s=new _e;s.name="architectural-details",n.add(s);let r=new It().setFromObject(n),a=r.max.y;if(["residence","tea","hotel","tower","mall"].includes(e)){for(let u of[-1,1])Qe(s,"#b5a184",[[u*.76,.2,-.5],[u*.76,Math.max(.5,a-.35),-.5]],.018),$(s,"#a7b5b2",[u*.77,.18,-.5],[.08,.1,.08]);$(s,"#d4c4a2",[0,.14,.72],[.66,.1,.23]),$(s,"#ede2c2",[0,.09,.82],[.8,.08,.22]);let o=Bu(new Gt({color:"#397b8c",metalness:.15,roughness:.12,clearcoat:1,envMapIntensity:1.2}));for(let u=0;u<Math.min(t,5);u++)for(let f of[-1,1]){let d=.58+u*.43;if($(s,"#f7edcf",[f*.38,d,.575],[.31,.29,.045]),$(s,o,[f*.38,d,.603],[.24,.22,.015]),$(s,"#b4a47d",[f*.38,d,.625],[.018,.23,.018]),$(s,"#fff0cc",[f*.38,d-.16,.62],[.37,.055,.1]),u===0||u===2){$(s,"#a78b68",[f*.38,d-.22,.66],[.3,.09,.16]);for(let g=0;g<3;g++)Be(s,g%2?"#d79e97":"#76a65d",[f*.38+(g-1)*.08,d-.16,.67],[.06,.055,.05])}}let l=e==="mall"?1.62:e==="tower"?1.35:1.46,c=e==="mall"?1.2:1.02,h=e==="tea"?.65+t*.65:e==="hotel"?.55+t*.58:e==="mall"?.75+t*.5:e==="tower"?.8+t*.62:.64+t*.46;if(e==="tower"){$(s,o,[0,h/2+.12,-.515],[1.22,h-.12,.025]),$(s,o,[-.69,h/2+.12,0],[.025,h-.12,.88]);for(let u=.3;u<h;u+=.33)$(s,"#cbd7cf",[0,u,-.54],[1.4,.035,.04]),$(s,"#cbd7cf",[-.71,u,0],[.04,.035,1]);for(let u of[-.45,0,.45])$(s,"#cbd7cf",[u,h/2+.12,-.54],[.035,h,.035])}else for(let u=0;u<t;u++){let f=.5+(h-.72)*(u/Math.max(1,t-1));for(let d of[-l*.27,l*.27])$(s,"#f7edcf",[d,f,-c/2-.018],[.33,.29,.04]),$(s,o,[d,f,-c/2-.045],[.25,.22,.016]),$(s,"#b4a47d",[d,f,-c/2-.06],[.018,.23,.014]);for(let d of[-c*.26,c*.26])$(s,"#f7edcf",[-l/2-.018,f,d],[.04,.29,.29]),$(s,o,[-l/2-.045,f,d],[.016,.22,.22]);$(s,"#efe5cb",[0,f+.19,0],[l+.06,.04,c+.06])}}if(e==="research"){let o=.55+t*.25,l=Bt("#4f91a5",.18,.2);for(let c=0;c<Math.max(1,Math.floor(o/.4));c++)for(let h=0;h<10;h++){let u=h/10*Math.PI*2,f=.4+c*.35,d=.79-.06*(f-.12)/o,g=$(s,"#e9e4d2",[Math.sin(u)*(d+.015),f,Math.cos(u)*(d+.015)],[.29,.25,.035]);g.rotation.y=u;let v=$(s,l,[Math.sin(u)*(d+.039),f,Math.cos(u)*(d+.039)],[.23,.19,.016]);v.rotation.y=u}}if(["tower","hotel","mall","research"].includes(e)){$(s,"#b8bab0",[-.4,a-.1,-.35],[.36,.19,.26]);for(let o=0;o<5;o++)$(s,"#667c7b",[-.53+o*.065,a+.002,-.35],[.022,.012,.22]);Qe(s,"#9faaa3",[[.45,a-.1,-.4],[.45,a+.42,-.4]],.014)}return n}var Ht={residence:{name:"\u666E\u901A\u4F4F\u5B85",max:5,cost:1,architecture:"residence",text:"\u9010\u5C42\u52A0\u76D6\uFF0C\u5411\u5BF9\u624B\u6536\u79DF\uFF1B\u540C\u8857\u533A\u4F4F\u5B85\u53C2\u4E0E\u8054\u8425\u52A0\u6536\u3002"},chain:{name:"\u8FDE\u9501\u4FBF\u5229\u5E97",max:1,cost:1.2,architecture:"tea",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF1B\u540C\u4E00\u4E1A\u4E3B\u6BCF\u591A\u4E00\u95F4\u8FDE\u9501\u5E97\uFF0C\u6240\u6709\u5206\u5E97\u7EDF\u4E00\u63D0\u9AD8\u6536\u8D39\uFF0C\u4E0A\u9650400\u3002\u4E0D\u53C2\u4E0E\u8857\u533A\u8054\u8425\u3002"},hotel:{name:"\u5976\u5BB6\u65C5\u9986",max:5,cost:1.4,architecture:"hotel",text:"\u5BF9\u624B\u5165\u4F4F1\u20143\u56DE\u5408\uFF0C\u6309\u5929\u6536\u4F4F\u5BBF\u8D39\u5E76\u6682\u505C\u884C\u52A8\uFF1B\u514D\u79DF\u5361\u53EF\u62B5\u6D88\u672C\u6B21\u5165\u4F4F\u3002"},mall:{name:"\u8D2D\u7269\u4E2D\u5FC3",max:5,cost:1.35,architecture:"mall",text:"\u5BF9\u624B\u8D2D\u7269\u62BD\u7B7E\uFF0C\u630975%\u3001100%\u6216150%\u6D88\u8D39\u500D\u7387\u6536\u8D39\uFF1B\u697C\u5C42\u8D8A\u9AD8\uFF0C\u6D88\u8D39\u57FA\u6570\u8D8A\u9AD8\u3002"},gas:{name:"\u5976\u7F50\u52A0\u6CB9\u7AD9",max:1,cost:.9,architecture:"gas",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF1B\u6309\u672C\u6B21\u884C\u8FDB\u6B65\u6570\u4E0E\u4EA4\u901A\u5DE5\u5177\u7B49\u7EA7\u6536\u52A0\u6CB9\u8D39\uFF0C\u8F66\u8F86\u8D8A\u9AD8\u7EA7\u6536\u8D39\u8D8A\u9AD8\u3002"},research:{name:"\u5976\u5BB6\u7814\u7A76\u6240",max:5,cost:1.2,architecture:"research",text:"\u4E0D\u6536\u8FC7\u8DEF\u8D39\uFF1B\u4E1A\u4E3B\u6BCF\u51FA\u53D1\u4E09\u6B21\u4EA7\u51FA\u6240\u9009\u9053\u5177\u5361\u3002\u5347\u7EA7\u89E3\u9501\u66F4\u591A\u7814\u53D1\u9879\u76EE\uFF0C\u5230\u8BBF\u53EF\u66F4\u6362\u9879\u76EE\u3002"},park:{name:"\u6EE8\u6CB3\u516C\u56ED",max:1,cost:.45,architecture:"garden",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF0C\u4E0D\u6536\u4EFB\u4F55\u8D39\u7528\uFF1B\u6240\u6709\u505C\u9760\u8005\u83B7\u5F9710\u70B9\u5238\uFF0C\u9002\u5408\u8F7B\u677E\u516C\u76CA\u73A9\u6CD5\u3002"}},ct=n=>n?.buildingType||"residence",Tn=n=>Ht[ct(n)]?.max||5,Ms=n=>["dice","shield","demolish","build","steal"].slice(0,n);function Xp(n){let e=n.player;if(e.businessReady)return!1;e.businessReady=!0;let t=!1;for(let i of n.owned(e)){if(ct(i)!=="research"||!i.level)continue;let s=n.s.ownership[i.tile.id];if(s.researchProgress=(s.researchProgress||0)+1,t=!0,s.researchProgress>=3){s.researchProgress=0;let r=Ms(s.level),a=r.includes(s.researchCard)?s.researchCard:r[0];n.log(`${n.char(e).name}\u7684\u300C${i.tile.name}\u300D\u7814\u7A76\u5B8C\u6210\u3002`),n.giveCard(e,a)}}return t}function Qu(n){n.level===0?(n.buildingType="residence",delete n.researchCard,delete n.researchProgress):ct(n)==="research"&&!Ms(n.level).includes(n.researchCard)&&(n.researchCard=Ms(n.level)[0])}var s1=["tea","theater","factory","garden","hotel","tower"];function qp(n){return n.buildingType&&Ht[n.buildingType]?Ht[n.buildingType].architecture:/茶|奶茶|奶盖/.test(n.name)?"tea":/剧|影|照相/.test(n.name)?"theater":/厂|工坊|面包/.test(n.name)?"factory":/花园|洗澡/.test(n.name)?"garden":/旅馆|公寓|食堂/.test(n.name)?"hotel":s1[n.group%6]}var bs=Bt("#528b9c",.24,.25);var An="#fff1d1";function kc(n,e,t=1.35,i=.95){for(let s=0;s<e;s++){let r=.57+s*.43;for(let a of[-t*.27,t*.27])$(n,An,[a,r,i/2+.014],[.3,.3,.045]),$(n,bs,[a,r,i/2+.042],[.23,.235,.02]),$(n,"#a7d1d2",[a-.055,r+.055,i/2+.055],[.04,.1,.012]);for(let a of[-i*.25,i*.25])$(n,bs,[t/2+.018,r,a],[.025,.24,.2]),$(n,An,[t/2+.035,r-.15,a],[.06,.035,.27])}}function so(n,e,t=1.65,i=1.2,s="#c96548"){let r=new Fi;r.moveTo(-t/2,0),r.lineTo(0,.48),r.lineTo(t/2,0),r.closePath();let a=new nn(r,{depth:i,bevelEnabled:!1});Oe(n,a,zu(s),[0,e,-i/2]),$(n,s,[0,e+.48,0],[.08,.06,i+.07]);for(let o of[-1,1]){let l=[0,e+.486,-i/2,0,e+.486,i/2,o*t/2,e+.006,-i/2,o*t/2,e+.006,i/2],c=new ut;c.setAttribute("position",new Ne(l,3)),c.setAttribute("uv",new Ne([0,0,0,2,2,0,2,2],2)),c.setIndex(o>0?[0,1,2,1,3,2]:[0,2,1,1,2,3]),c.computeVertexNormals(),Oe(n,c,zu(s))}for(let o=0;o<Math.ceil(i/.12);o++)ot(n,s,[0,e+.515,-i/2+o*.12],.038,.038,.125,16).rotation.x=Math.PI/2}function ed(n,e,t,i=.7){return Ku(n,e,t,i)}function Bc(n,e,t=1.4){$(n,An,[0,e,.67],[t,.08,.4]);for(let i of[-t/2,t/2])$(n,"#526b6b",[i,e+.15,.8],[.025,.3,.025]);$(n,"#526b6b",[0,e+.3,.8],[t,.025,.025]);for(let i=-t/2;i<=t/2;i+=.16)$(n,"#526b6b",[i,e+.15,.8],[.018,.3,.018])}function ir(n,e,t="#d6bb76",i=!1){let s=new _e;if(s.name=`property-${n.id}-${e}`,s.userData.architecture=qp(n),s.userData.level=e,e===0){let l=Oe(s,new si(1.95,1.62),i?"#a9b484":"#97aa7b",[0,-.08,0]);l.rotation.x=-Math.PI/2,l.name="flat-ground",l.castShadow=!1;let c=[[-.975,-.81],[.975,-.81],[.975,.81],[-.975,.81]],h=[];for(let f=0;f<4;f++){let d=c[f],g=c[(f+1)%4],v=Math.hypot(g[0]-d[0],g[1]-d[1]);for(let m=0;m<v;m+=.27){let p=Math.min(m+.15,v);h.push(d[0]+(g[0]-d[0])*m/v,-.065,d[1]+(g[1]-d[1])*m/v,d[0]+(g[0]-d[0])*p/v,-.065,d[1]+(g[1]-d[1])*p/v)}}let u=new Hs(new ut().setAttribute("position",new Ne(h,3)),new ls({color:i?t:"#fff2c4"}));return u.name="dashed-boundary",s.add(u),s.userData.vacant=!0,s}$(s,"#d7cab0",[0,.025,0],[1.95,.09,1.62]),$(s,t,[0,.09,.78],[1.95,.08,.1]);let r=qp(n),a=e,o=i?"#"+new ye(t).lerp(new ye("#fff1d5"),.73).getHexString():null;if(s.userData.ownerColor=i?t:null,r==="residence"){let l=.64+e*.46;$(s,o||"#eddbb9",[0,l/2+.1,0],[1.46,l,1.02]),kc(s,e,1.46,1.02),$(s,"#775640",[0,.35,.56],[.29,.48,.07]),so(s,l+.11,1.72,1.23,t);for(let c=1;c<e;c++)$(s,An,[0,.75+c*.46,0],[1.56,.055,1.1]);return e>=3&&Bc(s,1.2,1.55),Dt(s,"\u5976\u5BB6\u4F4F\u5B85",[0,.96,.58],.96,.23,{background:"#56756a",color:"#fff4da"}),an(Yr(s,r,e,t))}if(r==="research"){let l=.55+e*.25;ot(s,o||"#d8dccb",[0,l/2+.12,0],.73,.79,l,48);for(let h of[-.42,0,.42])$(s,bs,[h,l*.65,.7],[.23,.25,.03]);ot(s,t,[0,l+.17,0],.86,.86,.16,48);let c=Oe(s,new Qt(.56,40,24,0,Math.PI*2,0,Math.PI/2),"#89aab5",[0,l+.25,0]);c.scale.y=.75,Qe(s,"#657f85",[[0,l+.45,0],[.12,l+.91,-.1]],.025),Oe(s,new Qt(.27,24,16),"#e8d9b9",[.13,l+.92,-.1],[1,.25,1]);for(let h of[-.7,.7])$(s,"#526f94",[h,.34,-.1],[.28,.035,.8]);return Dt(s,"\u7814 \u7A76 \u6240",[0,.66,.8],1.08,.28,{background:"#4c768c",color:"#fff5cf"}),an(Yr(s,r,e,t))}if(r==="gas"){for(let l of[-.72,.72])$(s,"#e9ddbf",[l,.82,0],[.085,1.5,.085]);$(s,t,[0,1.62,0],[1.9,.15,1.46]),$(s,An,[0,1.49,.76],[1.9,.12,.05]);for(let l of[-.45,.45])$(s,"#d6dacb",[l,.46,.05],[.3,.8,.31]),$(s,"#486c75",[l,.64,.22],[.24,.18,.025]),Qe(s,"#3e4b45",[[l+.13,.67,.04],[l+.28,.54,.04],[l+.23,.19,.12],[l+.13,.35,.22]],.025);return Dt(s,"\u5976 \u7F50 \u52A0 \u6CB9",[0,1.61,.77],1.65,.22,{background:t,color:"#fff6dd"}),an(Yr(s,r,e,t))}if(r==="mall"){let l=.75+e*.5;$(s,o||"#e0d2b4",[0,l/2+.1,0],[1.62,l,1.2]);for(let h=0;h<e;h++)$(s,bs,[0,.51+h*.5,.625],[1.35,.31,.035]),$(s,An,[0,.73+h*.5,.64],[1.76,.06,.07]);$(s,t,[0,l+.18,0],[1.83,.18,1.4]);let c=$(s,"#e8c36b",[0,l+.52,0],[.5,.48,.3]);return Oe(s,new sn(.13,.025,8,24,Math.PI),"#84623f",[0,l+.8,0]),Dt(s,"\u5976 \u5BB6 \u767E \u8D27",[0,1.01,.7],1.54,.3,{background:"#91615c",color:"#fff2c7"}),an(Yr(s,r,e,t))}if(r==="tea"){let l=.65+e*.65;$(s,o||"#e9cda1",[0,l/2+.08,0],[1.5,l,1.05]);for(let h=1;h<e;h++){for(let u of[-.37,.37])$(s,An,[u,.78+h*.65,.55],[.41,.39,.035]),$(s,bs,[u,.78+h*.65,.575],[.33,.3,.025]);$(s,An,[0,1+h*.65,.04],[1.61,.07,1.12])}$(s,An,[0,.4,.55],[1.26,.58,.06]),$(s,bs,[0,.4,.59],[1.15,.5,.035]),$(s,"#87654c",[0,.13,.63],[1.3,.12,.25]);for(let h=0;h<8;h++){let u=$(s,h%2?"#fff0d2":"#ba6a52",[-.66+h*.19,.88,.72],[.19,.08,.5]);u.rotation.x=.2,$(s,h%2?"#fff0d2":"#ba6a52",[-.66+h*.19,.8,.95],[.19,.13,.04])}so(s,l+.08,1.72,1.23,i?t:"#5d8a80"),Dt(s,n.buildingType==="chain"?"\u5976\u5BB6\u8FDE\u9501\u5E97":"\u5976\u8336\u5C0F\u94FA",[0,1.12,.57],1.12,.24,{background:"#527a6b",color:"#fff2cc"});let c=new _e;ot(c,"#e6b96f",[0,.23,0],.2,.15,.4),ot(c,An,[0,.45,0],.22,.22,.05),Qe(c,"#fff5d8",[[.04,.46,0],[.04,.73,-.05]],.026);for(let h=0;h<4;h++)Be(c,"#624b3a",[-.11+h*.07,.1,.15],[.027,.027,.02]);c.position.set(.42,l+.52,0),s.add(c),e>=2&&(Bc(s,1.18,1.6),$(s,"#697c4c",[-.6,1.3,.65],[.25,.16,.22])),e>=3&&(Bc(s,1.83,1.6),Oe(s,new Gn(.4,.2,12),"#bd6953",[-.48,l+.52,-.1]),$(s,"#8c785d",[-.48,l+.25,-.1],[.03,.65,.03]))}else if(r==="theater"){let l=.8+e*.45;$(s,o||"#b97561",[0,l/2+.1,0],[1.52,l,1.16]),$(s,"#f2d29c",[0,.55,.61],[1.35,.95,.07]);for(let h of[-.45,0,.45])$(s,"#4c6369",[h,.43,.67],[.32,.61,.035]);$(s,i?t:"#f1c451",[0,1.08,.79],[1.78,.3,.4]),Dt(s,"\u5927 \u7B11 \u5267 \u573A",[0,1.09,1],1.65,.27,{background:"#833e43",color:"#ffdda1"});for(let h=0;h<9;h++)Be(s,"#ffe9a2",[-.78+h*.195,1.24,1],[.035,.035,.035]);for(let h of[-.67,.67])$(s,"#dbc5a0",[h,l*.64,.65],[.17,l*.85,.12]),Be(s,"#f5ce69",[h,l+.13,.54],[.14,.14,.13]);let c=Oe(s,new sn(.48,.1,10,32,Math.PI),i?t:"#f1c451",[0,l+.12,.03]);if(Dt(s,"\u7B11",[0,l+.35,.15],.46,.46,{background:"#b95b53",color:"#fff1bb"}),e>=3)for(let h of[-.55,.55]){let u=ot(s,"#4a5f69",[h,l+.3,-.35],.09,.09,.28);u.rotation.x=.45}}else if(r==="factory"){let l=.62+e*.35;$(s,o||"#c68860",[0,l/2+.1,0],[1.6,l,1.1]),$(s,"#53616c",[0,.45,.57],[.74,.63,.035]);for(let c=.2;c<.75;c+=.08)$(s,"#8b9d9e",[0,c,.6],[.69,.025,.025]);kc(s,Math.max(1,e-1),1.6,1.1),so(s,l+.1,1.82,1.25,i?t:"#5c7886");for(let c=0;c<Math.min(e,2);c++){let h=.46-c*.32;ot(s,"#ac6554",[h,l+.5,-.37],.12,.17,1.25);for(let u=l+.2;u<l+1.1;u+=.28)ot(s,"#e0bc91",[h,u,-.37],.13,.13,.045)}Dt(s,"\u5976\u5757\u5DE5\u574A",[0,1,.6],1.03,.24,{background:"#526d73",color:"#fff0c5"});for(let[c,h]of[[-.67,.76],[.57,.79]])$(s,"#c19a62",[c,.2,h],[.25,.3,.25]),$(s,"#edd5a4",[c,.2,h+.131],[.03,.29,.02]);s.userData.smoke=!0}else if(r==="garden"){$(s,"#7c9a60",[0,.12,0],[1.82,.1,1.45]),$(s,"#ddd3ab",[0,.18,0],[.4,.025,1.45]);for(let l of[-.62,.62]){$(s,"#dfc394",[l,.24,.4],[.46,.25,.35]);for(let c=0;c<4;c++)Be(s,["#e7ad8c","#fff0c9","#d97f6e"][c%3],[l-.15+c*.1,.42,.4],[.07,.09,.07])}if(e===1)ed(s,-.45,-.38,.7),ed(s,.5,-.3,.55);else{for(let l of[-.65,.65])for(let c of[-.45,.35])$(s,"#e3cf9f",[l,.68,c],[.07,1.1,.07]);for(let l=-.8;l<=.8;l+=.18)$(s,i?t:"#b7c88a",[l,1.22,-.06],[.09,.06,1.1]);for(let l=0;l<5;l++)Be(s,"#5f8955",[-.65+l*.3,1.25,-.35],[.23,.09,.2]);if(e>=3){let l=Oe(s,new Gn(.86,.4,4),i?t:"#537c69",[0,1.53,-.05]);l.rotation.y=Math.PI/4,ot(s,"#b5d2ce",[0,.38,-.1],.37,.37,.18),ot(s,"#d7dbb1",[0,.43,-.1],.43,.43,.05)}if(e>=4){$(s,i?t:"#7fa37f",[0,1.73,-.05],[1.36,.12,.96]);for(let c of[-.48,.48])for(let h of[-.35,.25])ot(s,"#e8d7ac",[c,2.06,h],.035,.045,.6);let l=Oe(s,new Gn(.76,.34,4),i?t:"#618b73",[0,2.5,-.05]);l.rotation.y=Math.PI/4}e===5&&(ot(s,"#b5c6b2",[0,2.82,-.05],.23,.3,.26),Be(s,"#edca72",[0,3.03,-.05],[.16,.18,.16]))}Dt(s,"\u5976\u5BB6\u82B1\u56ED",[0,.49,.77],.75,.2,{background:"#426b54",color:"#fff1ce"})}else if(r==="hotel"){let l=.55+e*.58;$(s,o||"#eed9b4",[0,l/2+.1,0],[1.45,l,1.02]),kc(s,e+1,1.45,1.02),$(s,"#865a50",[0,.32,.55],[.32,.45,.06]);for(let c=1;c<=e;c++)Bc(s,.3+c*.43,1.55);$(s,i?t:"#aa5a4b",[0,l+.15,0],[1.68,.12,1.23]),Dt(s,"\u5976 \u5BB6 \u65C5 \u9986",[0,l+.35,.18],1.3,.33,{background:"#a65245",color:"#fff3ca"});for(let c of[-.6,.6])$(s,"#d9bd88",[c,l+.22,0],[.04,.48,.04]);e>=3&&(ot(s,"#6096a0",[.45,l+.4,-.3],.22,.22,.4),$(s,"#e4d7b5",[.45,l+.62,-.3],[.55,.07,.55]))}else{let l=.8+e*.62;$(s,o||"#d6d5c1",[0,l/2+.1,0],[1.35,l,1]),$(s,bs,[0,l/2+.12,.51],[1.22,l-.12,.02]),$(s,bs,[.69,l/2+.12,0],[.025,l-.12,.88]);for(let c=.3;c<l;c+=.33)$(s,"#cbd7cf",[0,c,.535],[1.4,.035,.04]),$(s,"#cbd7cf",[.71,c,0],[.04,.035,1]);for(let c of[-.45,0,.45])$(s,"#cbd7cf",[c,l/2+.12,.54],[.035,l,.035]);$(s,i?t:"#dae4d5",[0,l+.15,0],[1.53,.15,1.14]),$(s,i?t:"#4d6574",[.2,l+.4,-.1],[.7,.35,.7]),Qe(s,"#70868a",[[.3,l+.5,-.1],[.3,l+1,-.1]],.018),Dt(s,"\u5976\u5E01\u4E2D\u5FC3",[0,.48,.57],.9,.25,{background:"#486e7f",color:"#fff0c0"})}return an(Yr(s,r,e,t))}function Yp(n){let e=new _e;e.name=`landmark-${n.kind}`,$(e,"#d7c8a7",[0,.07,0],[2,.15,1.72]);let t=1.25;if(n.kind==="bank"){$(e,"#e5d3ae",[0,.72,-.15],[1.58,1.28,1.06]);for(let s of[-.6,-.2,.2,.6])ot(e,"#fff0ce",[s,.78,.62],.08,.1,1.1),$(e,"#b7b293",[s,.24,.62],[.23,.12,.24]);let i=Oe(e,new Gn(1,.42,3),"#d4b882",[0,1.6,.38]);i.rotation.y=Math.PI/2,$(e,"#b5a278",[0,.17,.54],[1.94,.1,.75]),Dt(e,"\u5976 \u5E01 \u94F6 \u884C",[0,1.25,.74],1.3,.25,{background:"#456779",color:"#fff0c2"}),Be(e,"#dbb45d",[0,1.66,.65],[.16,.16,.08])}else if(n.kind==="hospital")$(e,"#e5e3cf",[0,.75,0],[1.7,1.4,1.13]),kc(e,2,1.7,1.13),$(e,"#c0cdcb",[0,1.5,0],[1.9,.12,1.3]),$(e,"#cb6056",[0,1.85,0],[.18,.65,.09]),$(e,"#cb6056",[0,1.85,.01],[.57,.18,.1]),$(e,"#507b85",[0,.35,.62],[.6,.5,.08]),$(e,"#7ba8a8",[0,.67,.77],[1.02,.08,.5]),Dt(e,"\u5976\u86D9\u7597\u517B\u9662",[0,1.19,.59],1.45,.25,{background:"#fff1d3",color:"#8c4b49"});else if(n.kind==="stock"){let i=ir({...n,name:"\u8BC1\u5238\u6240",group:5},3,"#7a9cac");e.add(i),Dt(e,"\u5976\u5BB6\u8BC1\u5238\u6240",[0,1.4,.56],1.2,.32,{background:"#344f67",color:"#f7dc84"})}else if(n.kind==="shop"){let i=ir({...n,name:"\u5976\u8336\u5E97",group:0},1,"#d1aa6e");e.add(i),Dt(e,"\u5976\u4F34\u8865\u7ED9\u7AD9",[0,1.12,.59],1.25,.25,{background:"#bd6b4b",color:"#fff3ce"})}else if(n.kind==="spirit"){for(let s=0;s<3;s++)$(e,"#b3a07c",[0,.13+s*.09,0],[1.95-s*.23,.1,1.6-s*.18]);for(let s of[-.55,.55])for(let r of[-.35,.35])ot(e,"#b14c37",[s,.85,r],.07,.07,1.1);let i=Oe(e,new Gn(1.12,.5,4),"#557f6b",[0,1.55,0]);i.rotation.y=Math.PI/4,Be(e,"#dfbb5c",[0,1.88,0],[.1,.15,.1]),Dt(e,"\u5927\u7B11\u795E\u6BBF",[0,1.13,.42],.9,.28,{background:"#8e3d30",color:"#ffe49c"})}else if(n.kind==="event"){ot(e,"#bb967a",[0,.2,0],.85,.9,.27);for(let s of[-.65,.65])$(e,"#4b5f67",[s,.9,-.35],[.07,1.5,.07]),$(e,"#4b5f67",[s,.55,.4],[.3,.7,.28]);$(e,"#4b5f67",[0,1.6,-.35],[1.35,.06,.06]);let i=Dt(e,n.id===33?"\u5976\u86D9\u8857\u821E":"\u8868\u60C5\u5305\u5E7F\u573A",[0,1.18,-.3],1.15,.56,{background:"#b75a5d",color:"#ffe9bd"});e.userData.stage=!0}else if(n.kind==="rest")e.add(ir({...n,name:"\u5C0F\u65C5\u9986",group:4},1,"#84aa7a")),so(e,1.35,1.85,1.3,"#698b68"),Dt(e,"\u5976\u86D9\u7684\u5C0F\u7A9D",[0,1.15,.8],1.1,.24,{background:"#6e875a",color:"#fff0cb"});else if(n.kind==="tax"){$(e,"#b9cbc3",[0,.65,0],[1.4,1.1,1.05]),so(e,1.2,1.6,1.2,"#778d7a");for(let i of[-.4,.2])ot(e,"#78999b",[i,.4,.7],.16,.16,.6);Dt(e,"\u6E05\u6D01\u7AD9",[0,.88,.56],1,.28,{background:"#6a8575",color:"#fff1ce"})}else if(n.kind==="start"){for(let i of[-.75,.75])ot(e,"#c4ae7d",[i,.8,0],.12,.16,1.4),Be(e,"#e5bd4f",[i,1.6,0],[.2,.2,.2]);$(e,"#456b70",[0,1.45,0],[1.9,.4,.22]),Dt(e,"\u5976 \u5BB6 \u8D77 \u70B9",[0,1.46,.13],1.7,.3,{background:"#456b70",color:"#fff1ce"});for(let i of[-.6,-.2,.2,.6])$(e,"#f4e5bd",[i,.17,.6],[.2,.03,.5])}return an(e)}function Zp(n,e,t,i=1){let s=new _e;return ed(s,0,0,i),s.position.set(e,.12,t),n.add(s),s}var td=new Map,Ss;function Xi(n){let e={tea:'<path d="M53 34h56l-7 61H61Z" fill="#edcf97" stroke="#ae8e58" stroke-width="3"/><ellipse cx="81" cy="34" rx="30" ry="8" fill="#f9eac0"/><path d="M86 16l-5 54" stroke="#6aaa9c" stroke-width="7"/><path d="M62 62h38v25H62Z" fill="#f5e4bc"/><g fill="#7c634a"><circle cx="71" cy="84" r="4"/><circle cx="83" cy="87" r="4"/><circle cx="92" cy="81" r="4"/></g>',theater:'<path d="M33 45h94v51H33Z" fill="#ebd7aa" stroke="#a58b5a" stroke-width="3"/><path d="M24 42l56-26 57 26Z" fill="#ce8063"/><rect x="28" y="46" width="104" height="20" rx="4" fill="#dcaf57"/><path d="M48 69h22v27H48ZM91 69h22v27H91Z" fill="#866c54"/><path d="M45 56h71" stroke="#fff0bb" stroke-width="5" stroke-dasharray="4 8"/>',factory:'<path d="M28 49h103v48H28Z" fill="#dbb082" stroke="#9b805b" stroke-width="3"/><path d="M25 50l35-21 28 21 27-18 25 18Z" fill="#77a0a7"/><path d="M108 41V16h17v31" fill="#bb8063"/><path d="M42 66h21v17H42ZM80 65h40v32H80Z" fill="#668b98"/><circle cx="119" cy="9" r="8" fill="#d7d7bd"/>',steal:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M72 65h20v29H72Z" fill="#956f4a"/><path d="M110 16v55" stroke="#8e744d" stroke-width="4"/><path d="M112 17h30l-8 10 8 10h-30Z" fill="#d98567"/>',dice:'<g transform="translate(45 23) rotate(-12 35 34)"><rect width="70" height="66" rx="15" fill="#fff8dc" stroke="#a87936" stroke-width="4"/><g fill="#d36542"><circle cx="18" cy="17" r="6"/><circle cx="51" cy="17" r="6"/><circle cx="35" cy="33" r="6"/><circle cx="18" cy="50" r="6"/><circle cx="51" cy="50" r="6"/></g></g>',shield:'<path d="M80 14L120 29V55Q115 81 80 99Q45 81 40 55V29Z" fill="#60a7a3" stroke="#376d68" stroke-width="4"/><path d="M80 24L108 35V54Q104 74 80 87Q55 74 52 54V35Z" fill="#99d6bf"/><path d="M63 52l12 13 24-27" fill="none" stroke="#fff4bc" stroke-width="8" stroke-linecap="round"/>',block:'<path d="M38 42V96M122 42V96" stroke="#8d7048" stroke-width="10"/><rect x="23" y="33" width="114" height="34" rx="5" fill="#f5ce64" stroke="#b68b3f" stroke-width="3"/><path d="M38 35l20 30M70 35l20 30M102 35l20 30" stroke="#df7754" stroke-width="11"/>',recover:'<path d="M55 27h50v57q0 12-25 12T55 84Z" fill="#fcf2cf" stroke="#b9a16b" stroke-width="3"/><rect x="58" y="19" width="44" height="15" rx="5" fill="#76ad84"/><rect x="56" y="48" width="48" height="28" rx="4" fill="#a7ce9c"/><path d="M73 62h14M80 55v14" stroke="#fff9d4" stroke-width="5"/>',turn:'<path d="M109 86Q139 38 94 27Q66 21 46 43" fill="none" stroke="#70aaa3" stroke-width="18" stroke-linecap="round"/><path d="M47 16L28 53l43 2Z" fill="#70aaa3"/><circle cx="91" cy="82" r="15" fill="#eab85d"/>',slow:'<ellipse cx="81" cy="67" rx="42" ry="27" fill="#75b48a" stroke="#497b58" stroke-width="3"/><path d="M57 49l24-9 23 11 1 23-24 15-24-13Z" fill="#a0cc8b" stroke="#639968" stroke-width="3"/><circle cx="131" cy="63" r="15" fill="#c7d998"/><circle cx="137" cy="59" r="3" fill="#385547"/><path d="M51 85l-8 9M108 85l8 9" stroke="#78a870" stroke-width="13" stroke-linecap="round"/>',house:'<path d="M39 48h83v46H39Z" fill="#f1dfb0" stroke="#b79a63" stroke-width="3"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M72 65h20v29H72Z" fill="#956f4a"/><path d="M47 61h16v17H47ZM101 61h13v17h-13Z" fill="#77b9ca"/>',bank:'<path d="M28 38L80 12l52 26Z" fill="#e4bb62" stroke="#9c7a45" stroke-width="3"/><path d="M30 92h100M36 42h88M45 45v44M68 45v44M92 45v44M115 45v44" stroke="#f9e8b9" stroke-width="10"/><rect x="25" y="91" width="110" height="11" rx="4" fill="#b7985e"/><circle cx="80" cy="28" r="8" fill="#fff4bf"/>',stocks:'<path d="M26 22v74h111" fill="none" stroke="#ad9467" stroke-width="4"/><path d="M42 89V69M66 89V52M91 89V35M117 89V17" stroke="#72aaa1" stroke-width="16"/><path d="M32 60l32-21 25 6 39-30" fill="none" stroke="#e1aa4b" stroke-width="5"/>',vehicle:'<circle cx="42" cy="79" r="22" fill="#f0dfb7" stroke="#5d7774" stroke-width="6"/><circle cx="117" cy="79" r="22" fill="#f0dfb7" stroke="#5d7774" stroke-width="6"/><path d="M42 79l26-40 24 40H42l20-28h47l8 28M99 26l10 1-2 24M61 34h23" fill="none" stroke="#69a5a3" stroke-width="7" stroke-linecap="round"/>',demolish:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#d78c62"/><path d="M83 51l-11 17 16 6-13 21" fill="none" stroke="#927650" stroke-width="4"/><g transform="rotate(30 91 42)"><rect x="86" y="35" width="13" height="60" rx="4" fill="#a78553"/><rect x="62" y="18" width="61" height="26" rx="6" fill="#8caaaa"/></g>',build:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M78 61v24M66 73h24" stroke="#c09143" stroke-width="7"/><path d="M96 38v-6a16 16 0 0132 0v6" fill="#f1c45f" stroke="#a9863d" stroke-width="3"/><path d="M91 39h43" stroke="#f7d67a" stroke-width="7"/>'};return`<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" class="item-art" aria-hidden="true"><ellipse cx="80" cy="98" rx="55" ry="7" fill="#8c794d" opacity=".12"/>${e[n]||e.house}</svg>`}function Es(n,e,t="naiwa"){return`<div class="illustrated-guide"><div class="guide-drawing">${Xi(n)}</div><div><span class="guide-face">${ui(t)}</span><p>${e}</p></div></div>`}function ro(n,e,t="#70a58b"){let i=`${n.name}:${n.group}:${n.buildingType||"legacy"}:${n.id}:${e}:${t}`;if(td.has(i))return td.get(i);try{Ss||(Ss=new vs({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Ss.setSize(200,160),Ss.setPixelRatio(1),Ss.outputColorSpace=Ct,Ss.toneMapping=Mn);let s=new en,r=ir(n,e,t,!0);s.add(r),s.add(new Wn("#fff6df","#8a9e9a",2.4));let a=new yn("#ffebc1",2.5);a.position.set(-3,6,5),s.add(a);let o=new It().setFromObject(r),l=o.getCenter(new w),c=o.getSize(new w),h=Math.max(1.6,c.y*.72),u=new ki(-h*1.25,h*1.25,h,-h,.1,50);u.position.set(l.x+4,l.y+3.3,l.z+5),u.lookAt(l),Ss.render(s,u);let f=`<img class="building-thumb" src="${Ss.domElement.toDataURL("image/png")}" alt="${n.name} \xB7 ${e?e+"\u7EA7\u5EFA\u7B51":"\u7A7A\u5730"}">`;return bi(r),td.set(i,f),f}catch{return Xi("house")}}function r1(n){let e=new Map;return n.forEach((t,i)=>{e.has(t)?e.get(t).count++:e.set(t,{key:t,index:i,count:1})}),[...e.values()]}function Jp(n){let e=n.player,t=r1(e.cards),i=t.filter(({key:s})=>!n.cardHint(s)).length;return`${Es("dice","\u79FB\u52A8\u5361\u5728\u63B7\u9AB0\u524D\u7528\uFF1B\u5EFA\u8BBE\u3001\u62C6\u9664\u548C\u514D\u79DF\u53EF\u5728\u884C\u52A8\u524D\u540E\u4F7F\u7528\u3002\u9009\u5361\u540E\u4F1A\u663E\u793A\u76EE\u6807\u4E0E\u6548\u679C\u3002")}<div class="card-bag-summary"><strong>${e.cards.length}<small> / 15 \u5F20</small></strong><span>${t.length} \u79CD\u9053\u5177<br>${e.human?i+" \u79CD\u5F53\u524D\u53EF\u7528":"\u6B63\u5728\u67E5\u770B\u7535\u8111\u5361\u5305"}</span></div><div class="collectible-grid">${t.length?t.map(({key:s,index:r,count:a})=>{let o=Yt[s],l=n.cardHint(s),c=["dice","turn","slow","block"].includes(s)?"\u51FA\u53D1\u524D":"\u884C\u52A8\u524D\u540E";return`<article class="row collectible-card bag-card ${l?"card-unavailable":"card-ready"}"><div class="card-heading"><span class="card-timing">${c}</span><b class="card-quantity" aria-label="\u62E5\u6709 ${a} \u5F20">\xD7${a}</b></div>${Xi(s)}<h3>${o.name}</h3><p>${o.description}</p><div class="card-availability">${l||(e.human?o.target==="self"?"\u4F7F\u7528\u540E\u7ACB\u5373\u751F\u6548":"\u9009\u62E9\u5730\u56FE\u76EE\u6807":"\u7535\u8111\u56DE\u5408\u4E2D")}</div><button class="${l?"secondary":"primary"}" data-act="card" data-index="${r}" ${l||!e.human?"disabled":""}>${l?"\u6682\u4E0D\u53EF\u7528":o.target==="self"?"\u4F7F\u7528\u5361\u7247":"\u9009\u62E9\u76EE\u6807"}</button></article>`}).join(""):'<div class="empty">\u5361\u5305\u7A7A\u7A7A\u7684\uFF0C\u5230\u5730\u56FE\u4E0A\u7684\u5546\u5E97\u8865\u7ED9\u5427\u3002</div>'}</div>`}var jp="https://taoyuchen74.github.io/naiwa-monopoly/";function Kp(n=globalThis.location){try{let e=new URL(n.href);return!["http:","https:"].includes(e.protocol)||["localhost","127.0.0.1","[::1]"].includes(e.hostname)?jp:(e.username="",e.password="",new URL("./",e).href)}catch{return jp}}function ws(n,e,t){let i=(n.opponents||[]).slice(0,t-1).filter(s=>s&&s!=="random");return i.includes(e)?"\u7535\u8111\u89D2\u8272\u4E0D\u80FD\u4E0E\u4F60\u9009\u62E9\u7684\u89D2\u8272\u76F8\u540C\u3002":new Set(i).size!==i.length?"\u6BCF\u540D\u89D2\u8272\u53EA\u80FD\u5360\u4E00\u4E2A\u5E2D\u4F4D\uFF0C\u8BF7\u5C06\u91CD\u590D\u89D2\u8272\u6539\u4E3A\u968F\u673A\u3002":i.some(s=>!ri.some(r=>r.id===s))?"\u5B58\u5728\u672A\u5236\u4F5C\u7684\u89D2\u8272\u3002":n.seed!==void 0&&n.seed!==""&&(!/^\d+$/.test(String(n.seed))||+n.seed<1||+n.seed>4294967295)?"\u5BF9\u5C40\u79CD\u5B50\u8BF7\u8F93\u5165 1\u20144294967295\uFF0C\u7559\u7A7A\u5219\u968F\u673A\u3002":""}function Qp(n,e,t,i){if(!t)return[n,...ri.filter(h=>h.id!==n).map(h=>h.id)].slice(0,e);let s=Array.from({length:e-1},(h,u)=>t[u]||"random"),r=ws({opponents:s,seed:""},n,e);if(r)throw new RangeError(r);let a=new Set([n,...s.filter(h=>h!=="random")]),o=ri.map(h=>h.id).filter(h=>!a.has(h)),l=i>>>0^2772213287,c=()=>(l^=l<<13,l^=l>>>17,l^=l<<5,(l>>>0)/4294967296);for(let h=o.length-1;h>0;h--){let u=Math.floor(c()*(h+1));[o[h],o[u]]=[o[u],o[h]]}return[n,...s.map(h=>h==="random"?o.pop():h)]}function nr(n={}){return{opponents:Array.isArray(n.opponents)?n.opponents.slice(0,5).map(e=>e==="dounai"?"naicha":e):[],seatLevels:Array.isArray(n.seatLevels)?n.seatLevels.slice(0,5):[],startingCash:[2e3,3200,5e3,8e3].includes(+n.startingCash)?+n.startingCash:3200,startingTickets:[0,60,120].includes(+n.startingTickets)?+n.startingTickets:60,mapVersion:+n.mapVersion==1?1:2,randomStart:n.randomStart!==!1,seed:String(n.seed||"")}}var em=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function tm(n,e,t,i){return`<p class="panel-note">\u50CF\u521B\u5EFA\u7B56\u7565\u5BF9\u5C40\u4E00\u6837\u914D\u7F6E\u6BCF\u4E2A\u7535\u8111\u5E2D\u4F4D\u3002\u56FA\u5B9A\u89D2\u8272\u5148\u9884\u7559\uFF0C\u968F\u673A\u5E2D\u4F4D\u4ECE\u5269\u4F59\u89D2\u8272\u4E2D\u62BD\u53D6\uFF0C\u4E0D\u91CD\u590D\u3001\u4E0D\u62A2\u5360\u56FA\u5B9A\u5E2D\u4F4D\u3002</p><div class="setup-human"><span>${ui(e)}</span><div><strong>\u4F60\u7684\u89D2\u8272\uFF1A${ri.find(s=>s.id===e).name}</strong><small>\u603B\u4EBA\u6570 ${t}\uFF0C\u5176\u4F59 ${t-1} \u4E2A\u5E2D\u4F4D\u4E3A\u7535\u8111\u3002</small></div></div><h3>\u7535\u8111\u9635\u5BB9</h3><div id="opponentSeats">${Array.from({length:t-1},(s,r)=>{let a=n.opponents[r]||"random",o=n.seatLevels[r]||"inherit";return`<div class="opponent-seat"><span class="seat-portrait">${a==="random"?'<span class="random-face">\u2684</span>':ui(a)}</span><div><label for="opponent${r}">\u7535\u8111 ${r+1}</label><select id="opponent${r}" data-setup-seat="${r}" aria-label="\u7535\u8111${r+1}\u89D2\u8272"><option value="random">\u968F\u673A\u89D2\u8272</option>${ri.map(l=>`<option value="${l.id}" ${a===l.id?"selected":""} ${l.id===e?"disabled":""}>${l.name}${l.id===e?"\uFF08\u4F60\u7684\u89D2\u8272\uFF09":""}</option>`).join("")}</select></div><div><label for="seatLevel${r}">\u5355\u72EC\u5F3A\u5EA6</label><select id="seatLevel${r}" data-setup-level="${r}" aria-label="\u7535\u8111${r+1}\u5F3A\u5EA6">${[["inherit","\u8DDF\u968F\u5168\u5C40"],["easy","\u8F7B\u677E"],["normal","\u6807\u51C6"],["hard","\u9AD8\u624B"]].map(([l,c])=>`<option value="${l}" ${o===l?"selected":""}>${c}</option>`).join("")}</select></div></div>`}).join("")}</div><div class="row-actions"><button class="secondary" data-act="allRandom">\u5168\u90E8\u968F\u673A</button></div><h3>\u5BF9\u5C40\u89C4\u5219</h3><div class="setup-grid"><label>\u521D\u59CB\u5976\u5E01<select id="setupCash">${[2e3,3200,5e3,8e3].map(s=>`<option ${n.startingCash===s?"selected":""}>${s}</option>`).join("")}</select></label><label>\u521D\u59CB\u70B9\u5238<select id="setupTickets">${[0,60,120].map(s=>`<option ${n.startingTickets===s?"selected":""}>${s}</option>`).join("")}</select></label><label>\u5730\u56FE<select id="setupMap"><option value="2" ${n.mapVersion===2?"selected":""}>\u5976\u5BB6\u6EE8\u6CB3\u9547</option><option value="1" ${n.mapVersion===1?"selected":""}>\u7ECF\u5178\u53D1\u8D22\u5C9B</option></select></label><label>\u5148\u624B<select id="setupInitiative"><option value="random" ${n.randomStart?"selected":""}>\u968F\u673A\u5148\u624B</option><option value="human" ${n.randomStart?"":"selected"}>\u6211\u5148\u51FA\u53D1</option></select></label><label class="setup-seed">\u5BF9\u5C40\u79CD\u5B50<input id="setupSeed" type="text" inputmode="numeric" maxlength="10" value="${em(n.seed)}" placeholder="\u7559\u7A7A\u968F\u673A\uFF1B\u76F8\u540C\u8BBE\u7F6E\u53EF\u590D\u73B0"></label></div><p class="stock-explain">\u5976\u5E01\u548C\u70B9\u5238\u5BF9\u6240\u6709\u73A9\u5BB6\u76F8\u540C\u3002\u79CD\u5B50\u51B3\u5B9A\u968F\u673A\u9635\u5BB9\u548C\u5BF9\u5C40\u968F\u673A\u5E8F\u5217\uFF1B\u76F8\u540C\u64CD\u4F5C\u3001\u8BBE\u7F6E\u548C\u79CD\u5B50\u624D\u80FD\u590D\u73B0\u3002</p><p id="setupError" class="setup-error" role="status">${em(ws(n,e,t))}</p><div class="button-grid"><button class="secondary" data-act="resetAdvanced">\u6062\u590D\u9ED8\u8BA4</button><button class="primary" data-act="applyAdvanced" ${ws(n,e,t)?"disabled":""}>\u4FDD\u5B58\u8BBE\u7F6E</button></div>`}var a1=n=>Math.round(n).toLocaleString("zh-CN");function Oc(n,e){let t=n.s.ownership[e];if(!t)return'<p class="panel-note">\u65E0\u4E3B\u7A7A\u5730 \xB7 \u505C\u9760\u540E\u53EF\u8D2D\u4E70</p>';let i=ct(t),s=n.baseRent(e,t.level),r=n.s.players[t.player],a;if(!t.level)a=`\u7A7A\u5730\u8FC7\u8DEF\u8D39 ${n.rent(e)} \xB7 \u5230\u8BBF\u540E\u53EF\u9009\u62E9\u5EFA\u7B51`;else if(i==="hotel"){let o=Math.round(s*.65);a=`\u6BCF\u665A ${o} \u5976\u5E01 \xB7 \u968F\u673A\u5165\u4F4F 1\u20143 \u56DE\u5408<br>\u4F4F\u5BBF\u603B\u8D39 ${o}\u2014${o*3} \u5976\u5E01\uFF0C\u5165\u4F4F\u671F\u95F4\u6682\u505C\u884C\u52A8`}else if(i==="mall")a=`\u6D88\u8D39\u57FA\u6570 ${s} \xB7 \u62BD\u7B7E\u500D\u7387 75% / 100% / 150%<br>\u5355\u6B21\u6D88\u8D39 ${Math.round(s*.75)}\u2014${Math.round(s*1.5)} \u5976\u5E01`;else if(i==="gas")a="\u57FA\u7840\u8D39 30 + \u5B9E\u8D70\u6B65\u6570 \xD7 15 + \u4EA4\u901A\u8D39<br>\u4EA4\u901A\u8D39\uFF1A\u6B65\u884C 0 / \u81EA\u884C\u8F66 60 / \u5C0F\u8F66 120";else if(i==="chain")a=`\u5168\u5C9B ${n.owned(r).filter(l=>l.level&&ct(l)==="chain").length} \u95F4\u5206\u5E97 \xB7 \u6BCF\u95F4\u7EDF\u4E00\u6536\u8D39 ${n.rent(e)}<br>\u6BCF\u591A\u4E00\u95F4\u52A0\u6536 50\uFF0C\u6700\u9AD8 400 \u5976\u5E01`;else if(i==="park")a="\u514D\u8D39\u5F00\u653E \xB7 \u6BCF\u4F4D\u505C\u9760\u8005\u83B7\u5F97 10 \u70B9\u5238";else if(i==="research"){let o=t.researchProgress||0;a=`${Yt[t.researchCard||"dice"].name} \xB7 \u7814\u53D1\u8FDB\u5EA6 ${o}/3<br><span class="research-meter" aria-label="\u7814\u53D1\u8FDB\u5EA6 ${o}/3">${[0,1,2].map(l=>`<i class="${l<o?"filled":""}"></i>`).join("")}</span>\u518D\u51FA\u53D1 ${3-o} \u6B21\u5B8C\u6210\u7814\u53D1`}else a=`\u4F4F\u5B85\u79DF\u91D1 ${n.rent(e)} \xB7 \u5176\u4E2D\u8857\u533A\u8054\u8425 +${r.skip?0:Math.max(0,n.rent(e)-s)}${t.level<Tn(t)?`<br>\u4E0B\u4E00\u7EA7\u79DF\u91D1 ${n.rent(e,t.level+1)}`:""}`;return`<div class="facility-facts"><span class="badge">${t.level?Ht[i].name:"\u5F85\u5EFA\u7A7A\u5730"} \xB7 ${n.char(r).name}</span><p>${a}</p>${r.skip&&!["park","research"].includes(i)?"<small>\u4E1A\u4E3B\u4F11\u517B\u4E2D\uFF0C\u5F53\u524D\u6682\u505C\u6536\u8D39\u3002</small>":""}<small>\u6536\u8D39\u4E3A\u57FA\u7840\u89C4\u5219\uFF0C\u89D2\u8272\u6280\u80FD\u3001\u795E\u7075\u548C\u514D\u79DF\u5361\u4F1A\u5F71\u54CD\u5B9E\u4ED8\u3002</small></div>`}function im(n,e){let t=n.tiles[e],i=n.s.ownership[e],s=n.char().estateColor;if(!i||i.player!==n.player.id)return"<p>\u8BF7\u5148\u62E5\u6709\u8FD9\u5757\u5730\u4EA7\u3002</p>";if(!i.level)return`<p class="panel-note">\u7A7A\u5730\u5DF2\u5F52\u4F60\u6240\u6709\u3002\u9009\u62E9\u8FD9\u6B21\u8981\u5EFA\u8BBE\u7684\u8BBE\u65BD\uFF1B\u5E38\u89C4\u5EFA\u8BBE\u6BCF\u6B21\u505C\u9760\u9650\u4E00\u6B21\u3002\u7C7B\u578B\u5EFA\u6210\u540E\u56FA\u5B9A\uFF0C\u62C6\u9664\u540E\u53EF\u91CD\u65B0\u9009\u62E9\u3002</p><div class="business-choices">${Object.entries(Ht).map(([l,c])=>`<article class="business-choice">${ro({...t,buildingType:l},1,s)}<h3>${c.name}</h3><span class="badge">${c.max===1?"\u4E00\u7EA7\u8BBE\u65BD":"\u53EF\u52A0\u76D6\u81F3\u4E94\u7EA7"}</span><p>${c.text}</p><div class="row-head"><strong>${a1(n.buildPrice(t,l))} \u5976\u5E01</strong><button class="primary" data-act="construct" data-id="${e}" data-type="${l}" ${n.canConstruct(e,l)?"":"disabled"}>\u5EFA\u8BBE</button></div></article>`).join("")}</div>`;let r=ct(i),a=Ht[r],o=Tn(i);return`${ro({...t,buildingType:i.buildingType},i.level,s)}<h3>${a.name} \xB7 ${i.level}/${o}\u7EA7</h3>${Oc(n,e)}<p>${a.text}</p><div class="stat-grid"><div class="stat-box"><strong>${i.level<o?n.buildPrice(t):"\u5DF2\u8FBE\u4E0A\u9650"}</strong><span>\u4E0B\u4E00\u7EA7\u5EFA\u8BBE\u8D39</span></div></div>${r==="research"?`<h3>\u7814\u53D1\u8FDB\u5EA6 ${i.researchProgress||0}/3</h3><p>\u5F53\u524D\u9879\u76EE\uFF1A${Yt[i.researchCard||"dice"].name}\u3002\u66F4\u6362\u9879\u76EE\u5C06\u91CD\u7F6E\u8FDB\u5EA6\u3002</p><div class="research-options">${Ms(i.level).map(l=>`<button class="secondary" data-act="research" data-id="${e}" data-key="${l}" ${i.researchCard===l?"disabled":""}>${Yt[l].name}</button>`).join("")}</div>`:""}<p class="stock-explain">\u65C5\u9986\u6309\u5165\u4F4F\u5929\u6570\u3001\u5546\u573A\u6309\u62BD\u7B7E\u500D\u7387\u3001\u52A0\u6CB9\u7AD9\u6309\u5B9E\u9645\u884C\u7A0B\u6536\u8D39\uFF0C\u9884\u89C8\u4EC5\u4F5C\u53C2\u8003\u3002\u4F4F\u5B85\u6309\u8857\u533A\u8054\u8425\uFF1B\u8FDE\u9501\u5E97\u6309\u5168\u56FE\u5206\u5E97\u6570\u6536\u8D39\u3002</p><div class="button-grid"><button class="secondary" data-act="cancel">\u7EE7\u7EED\u65C5\u884C</button><button class="primary" data-act="upgrade" data-id="${e}" ${n.canUpgrade(e)?"":"disabled"}>${i.level<o?"\u52A0\u76D6\u4E00\u5C42":"\u4E0D\u80FD\u7EE7\u7EED\u52A0\u76D6"}</button></div>`}var rr=n=>Math.round(n).toLocaleString("zh-CN"),Zr=n=>(n>0?"+":"")+rr(n),sr=n=>n===null?"":n>0?"profit":n<0?"loss":"flat",id=n=>n===null?"\u2014":Zr(n),nm=n=>n===null?"\u672A\u77E5":rr(n),sm=n=>n===null?"\u2014":n.toLocaleString("zh-CN",{maximumFractionDigits:2});function rm(n,{window:e=20,held:t=!1}={}){let i=n.s.players[0],s=n.s,r=n.portfolio(i),a=n.player.id===i.id&&i.human&&n.manageable()&&s.round%7!==0,o=a&&s.phase!=="debt",l=r.unrealized===null||r.unpriced?null:r.realized+r.unrealized;return`${Es("stocks","\u770B\u4E70\u5165\u5747\u4EF7\u4E0E\u5F53\u524D\u4EF7\u7684\u5DEE\u989D\uFF1B\u7EA2\u8272\u4E3A\u76C8\u5229\uFF0C\u7EFF\u8272\u4E3A\u4E8F\u635F\u3002\u5DF2\u5B9E\u73B0\u76C8\u4E8F\u53EA\u5728\u5356\u51FA\u65F6\u7ED3\u7B97\u3002","naishu")}<div class="portfolio-total"><span>\u80A1\u7968\u7D2F\u8BA1\u76C8\u4E8F${i.stockLegacy?"\uFF08\u66F4\u65B0\u540E\u5DF2\u77E5\u90E8\u5206\uFF09":""}</span><strong class="${sr(l)}">${id(l)}</strong><small>\u5DF2\u5B9E\u73B0\u76C8\u4E8F \uFF0B \u5F53\u524D\u6301\u4ED3\u6D6E\u76C8</small></div><div class="portfolio-summary"><div><span>\u6301\u4ED3\u5E02\u503C</span><strong>${rr(r.value)}</strong></div><div><span>\u6301\u4ED3\u6210\u672C</span><strong>${nm(r.cost)}</strong></div><div><span>\u6301\u4ED3\u6D6E\u52A8\u76C8\u4E8F</span><strong class="${sr(r.unrealized)}">${id(r.unrealized)}</strong></div><div><span>\u5356\u51FA\u5DF2\u5B9E\u73B0\u76C8\u4E8F</span><strong class="${sr(r.realized)}">${Zr(r.realized)}</strong></div></div>${i.stockLegacy||r.unknown||r.unpriced?'<p class="panel-note">\u65E7\u5B58\u6863\u7684\u5386\u53F2\u76C8\u4E8F\u4ECE\u672C\u6B21\u66F4\u65B0\u540E\u8D77\u8BB0\u3002\u65E7\u6301\u4ED3\u65E0\u4E70\u5165\u4EF7\u65F6\uFF0C\u6210\u672C\u4E0E\u6D6E\u76C8\u663E\u793A\u672A\u77E5\uFF0C\u5356\u51FA\u4E0D\u8BA1\u5165\u5DF2\u77E5\u76C8\u4E8F\uFF1B\u6E05\u4ED3\u540E\u91CD\u65B0\u4E70\u5165\u5373\u53EF\u5B8C\u6574\u8BB0\u8D26\u3002</p>':""}<div class="market-toolbar"><span class="market-status">${s.round%7===0?"\u5468\u65E5\u4F11\u5E02 \xB7 \u53EF\u67E5\u770B\u4E0D\u53EF\u4EA4\u6613":n.player.id!==i.id?"\u7535\u8111\u56DE\u5408 \xB7 \u6682\u505C\u67E5\u770B\u6211\u7684\u6301\u4ED3":"\u4EA4\u6613\u5F00\u653E \xB7 \u7B2C "+s.round+" \u8F6E"}</span><button class="secondary" data-act="stockFilter">${t?"\u67E5\u770B\u5168\u90E8\u80A1\u7968":"\u53EA\u770B\u6211\u7684\u6301\u4ED3"}</button><label>\u8D70\u52BF<select id="stockWindow" aria-label="\u8D70\u52BF\u89C2\u5BDF\u6570\u91CF">${[5,10,20].map(c=>`<option value="${c}" ${e===c?"selected":""}>\u8FD1 ${c} \u6B21\u62A5\u4EF7</option>`).join("")}</select></label></div><p class="stock-explain">\u5747\u4EF7\u6309\u52A0\u6743\u5E73\u5747\u6210\u672C\u8BA1\u7B97\uFF1B\u65E0\u624B\u7EED\u8D39\u3002\u6D6E\u76C8\u968F\u62A5\u4EF7\u53D8\u5316\uFF0C\u51C0\u8D44\u4EA7\u5DF2\u5305\u542B\u6301\u4ED3\u5E02\u503C\u3002\u6700\u8FD140\u7B14\u6210\u4EA4\u4FDD\u7559\uFF0C\u5DF2\u5B9E\u73B0\u76C8\u4E8F\u7D2F\u8BA1\u4E0D\u6E05\u96F6\u3002</p>${s.market.map((c,h)=>{let u=r.positions[h];if(t&&!u.qty)return"";let f=c.history.slice(-e),d=f.length>1?f:[c.price,c.price],g=Math.min(...d,u.average??c.price)*.95,v=Math.max(...d,u.average??c.price)*1.05,m=Math.max(1,v-g),p=R=>52-(R-g)/m*44,y=d.map((R,A)=>`${12+A*316/(d.length-1)},${p(R)}`).join(" "),_=u.average===null?"":`<line x1="12" x2="328" y1="${p(u.average)}" y2="${p(u.average)}" stroke="#9c762e" stroke-dasharray="5 4"/><text x="16" y="${Math.max(11,p(u.average)-4)}" fill="#735423" font-size="9">\u6210\u672C ${sm(u.average)}</text>`,x=c.change/(c.price-c.change)*100;return`<section class="stock-card" data-stock="${h}"><div class="company-seal">${Xi(["tea","theater","factory","vehicle"][h])}</div><div class="row-head"><strong>${c.name}</strong><span class="stock-price ${sr(c.change)}">${c.price}<small>${Zr(c.change)} / ${x>=0?"+":""}${x.toFixed(1)}%</small></span></div><svg class="sparkline" viewBox="0 0 340 62" role="img" aria-label="${c.name}\u62A5\u4EF7\u8D70\u52BF${u.average===null?"":"\u4E0E\u6301\u4ED3\u6210\u672C\u7EBF"}">${_}<polyline points="${y}" stroke="${c.change>=0?"#b24a35":"#3f8362"}" stroke-width="2.5" fill="none"/><circle cx="328" cy="${p(c.price)}" r="3" fill="#805c2d"/></svg><div class="stock-metrics"><div><span>\u6301\u6709\u80A1\u6570</span><b>${u.qty}</b></div><div><span>\u4E70\u5165\u5747\u4EF7</span><b>${sm(u.average)}</b></div><div><span>\u6301\u4ED3\u5E02\u503C</span><b>${rr(u.value)}</b></div><div><span>\u6301\u4ED3\u6D6E\u76C8</span><b class="${sr(u.unrealized)}">${id(u.unrealized)}${u.rate===null?"":`<small>${u.rate>=0?"+":""}${u.rate.toFixed(1)}%</small>`}</b></div><div><span>\u5269\u4F59\u6210\u672C</span><b>${nm(u.cost)}</b></div><div><span>\u5DF2\u5B9E\u73B0\u76C8\u4E8F</span><b class="${sr(u.realized)}">${Zr(u.realized)}</b></div></div><div class="quantity-shortcuts" aria-label="${c.name}\u5FEB\u6377\u80A1\u6570">${[1,5,10].map(R=>`<button data-act="stockQty" data-id="${h}" data-qty="${R}">${R}\u80A1</button>`).join("")}<button data-act="stockQty" data-id="${h}" data-qty="maxBuy">\u6700\u591A\u4E70</button><button data-act="stockQty" data-id="${h}" data-qty="maxSell">\u5168\u90E8\u5356</button></div><div class="input-row"><input id="qty${h}" data-stock-qty="${h}" type="number" min="1" max="10000" value="1" step="1" inputmode="numeric" aria-label="${c.name}\u4EA4\u6613\u80A1\u6570"><button class="secondary" data-act="trade" data-id="${h}" data-sign="1" ${!o||i.money<c.price?"disabled":""}>\u4E70\u5165</button><button class="secondary" data-act="trade" data-id="${h}" data-sign="-1" ${!a||!u.qty?"disabled":""}>\u5356\u51FA</button></div><p id="stockPreview${h}" class="trade-preview" aria-live="polite">\u4E70 1 \u80A1\u9700 ${c.price} \u5976\u5E01\uFF1B\u5356\u51FA\u524D\u53EF\u9884\u4F30\u672C\u7B14\u76C8\u4E8F\u3002</p></section>`}).join("")||'<div class="empty">\u8FD8\u6CA1\u6709\u80A1\u7968\u6301\u4ED3\u3002\u5207\u6362\u201C\u67E5\u770B\u5168\u90E8\u80A1\u7968\u201D\u6D4F\u89C8\u3002</div>'}<h3>\u6700\u8FD1\u6210\u4EA4</h3>${i.stockTrades.length?`<div class="trade-history">${i.stockTrades.slice(0,16).map(c=>`<div><span>\u7B2C ${c.round} \u8F6E \xB7 ${s.market[c.stock].short}</span><b>${c.qty>0?"\u4E70\u5165":"\u5356\u51FA"} ${Math.abs(c.qty)}\u80A1 \xD7 ${c.price}</b><span class="${sr(c.profit)}">${c.qty>0?"\u652F\u51FA "+rr(c.qty*c.price):c.profit===null?"\u6210\u672C\u672A\u77E5":"\u672C\u7B14 "+Zr(c.profit)}</span></div>`).join("")}</div>`:'<p class="stock-explain">\u6210\u4EA4\u540E\u4F1A\u5728\u8FD9\u91CC\u8BB0\u5F55\u80A1\u6570\u3001\u4EF7\u683C\u4E0E\u5356\u51FA\u76C8\u4E8F\u3002</p>'}`}function zc(n,e,t=document){let i=t.querySelector("#qty"+e),s=t.querySelector(`[data-stock="${e}"]`);if(!i||!s)return;let r=Number(i.value),a=n.position(e,n.s.players[0]),o=Number.isInteger(r)&&r>0&&r<=1e4,l=n.player.id===0&&n.player.human&&n.manageable()&&n.s.round%7!==0;s.querySelector('[data-sign="1"]').disabled=!o||!l||n.s.phase==="debt"||r*a.price>n.s.players[0].money,s.querySelector('[data-sign="-1"]').disabled=!o||!l||r>a.qty;let c=a.cost===null?null:r===a.qty?a.cost:Math.round(a.cost*r/a.qty),h=c===null?null:r*a.price-c;t.querySelector("#stockPreview"+e).textContent=o?`\u4E70\u5165\u9700 ${rr(r*a.price)}\uFF1B${r>a.qty?"\u6301\u4ED3\u4E0D\u8DB3\u4EE5\u5356\u51FA\u8BE5\u6570\u91CF":`\u5356\u51FA\u56DE\u6B3E ${rr(r*a.price)}\uFF0C\u672C\u7B14${h===null?"\u76C8\u4E8F\u672A\u77E5":"\u76C8\u4E8F "+Zr(h)}`}\u3002`:"\u8BF7\u8F93\u5165 1\u201410,000 \u7684\u6574\u6570\u80A1\u6570\u3002"}var jn={easy:{name:"\u8F7B\u677E",reserve:650,cardThreshold:1/0,description:"\u7B80\u5355\u4E70\u5730\uFF0C\u8F83\u5C11\u7528\u5361\uFF0C\u5C94\u8DEF\u968F\u610F\u9009\u62E9\uFF0C\u9002\u5408\u9996\u6B21\u8BD5\u73A9\u3002"},normal:{name:"\u6807\u51C6",reserve:400,cardThreshold:55,description:"\u6BD4\u8F83\u843D\u70B9\u98CE\u9669\u3001\u7ECF\u8425\u8857\u533A\u3001\u4F7F\u7528\u9053\u5177\u548C\u4E70\u5356\u80A1\u7968\u3002"},hard:{name:"\u9AD8\u624B",reserve:550,cardThreshold:25,description:"\u8BC4\u4F30\u4E0B\u4E00\u8F6E\u79DF\u91D1\u3001\u4F18\u5148\u8FDE\u7247\u5EFA\u8BBE\uFF0C\u7EC4\u5408\u7528\u5361\u5E76\u7BA1\u7406\u73B0\u91D1\u548C\u80A1\u7968\u3002"}},nd=n=>jn[n.aiDifficulty()]||jn.normal;var ao={naiwa:{name:"\u7A33\u7A33\u7ECF\u8425",icon:"\u2302",text:"\u5E38\u89C4\u52A0\u76D6\u82B1\u8D39\u51CF\u5C11 15%\uFF1B\u6B63\u5411\u7ECF\u8FC7\u8D77\u70B9\u989D\u5916\u83B7\u5F97 80 \u5976\u5E01\u3002"},naichong:{name:"\u7EC6\u6C34\u957F\u6D41",icon:"\u25B1",text:"\u6BCF\u6B21\u51FA\u53D1\u9886\u53D6 60 \u5976\u5E01\uFF1B\u5230\u5E97\u8D2D\u5361\u53EA\u9700\u539F\u4EF7\u7684 80% \u70B9\u5238\u3002"},naishu:{name:"\u7CBE\u6253\u7EC6\u7B97",icon:"\u2691",text:"\u652F\u4ED8\u79DF\u91D1\u51CF\u5C11 20%\uFF1B\u8D2D\u5730\u5361\u6536\u8D2D\u4EF7\u518D\u6253\u4E5D\u6298\uFF0C\u4E1A\u4E3B\u6309\u5B9E\u9645\u6210\u4EA4\u4EF7\u6536\u6B3E\u3002"},naigou:{name:"\u50BB\u72D7\u6709\u50BB\u798F",icon:"\u2667",text:"\u6BCF\u6B21\u51FA\u53D1\u6709\u4E00\u534A\u673A\u4F1A\u6361\u5230 240 \u5976\u5E01\uFF0C\u5426\u5219\u6454\u4E22\u6700\u591A 40 \u5976\u5E01\uFF1B\u6B65\u6570\u4E0D\u53D7\u5F71\u54CD\u3002"},naidan:{name:"\u8EBA\u7740\u4E5F\u80FD\u8D62",icon:"\u2605",text:"\u6BCF\u6B21\u51FA\u53D1\u81EA\u52A8\u83B7\u5F97 75 \u5976\u5E01\uFF1B\u6BCF\u56DB\u6B21\u51FA\u53D1\uFF0C\u4E3A\u81EA\u5DF1\u6700\u4F4E\u7EA7\u7684\u4E00\u5757\u5730\u4EA7\u514D\u8D39\u52A0\u76D6\u4E00\u5C42\u3002\u65E0\u9700\u64CD\u4F5C\uFF0C\u6700\u9AD8\u4E94\u7EA7\u3002",strong:!0},naicha:{name:"\u6696\u5FC3\u8865\u7ED9",icon:"\u2661",text:"\u975E\u79DF\u91D1\u8D39\u7528\u51CF\u5C11 50%\uFF1B\u6BCF\u4E09\u6B21\u51FA\u53D1\u8865\u5145 20 \u70B9\u5238\u548C\u4E00\u5F20\u91CE\u751F\u72D7\u5976\u3002\u6EE1\u5305\u6309\u539F\u89C4\u5219\u8865\u507F\u3002"}},ar=(n,e,t=e.character)=>n.s.talents===!0&&e.character===t;function am(n){let e=n.player;if(!n.s.talents||e.talentReady)return!1;e.talentReady=!0,e.departures=(e.departures||0)+1;let t=e.character;if(t==="naichong"&&n.income(e,60,"\u3010\u7EC6\u6C34\u957F\u6D41\u3011"),t==="naigou")if(n.int(2)===0)n.income(e,240,"\u3010\u50BB\u72D7\u6709\u50BB\u798F\u3011\u6361\u5230\u94B1\u5305");else{let i=Math.min(40,e.money);e.money-=i,n.log(`\u5976\u72D7\u3010\u50BB\u72D7\u6709\u50BB\u798F\u3011\u6454\u4E22 ${i} \u5976\u5E01\uFF0C\u62CD\u62CD\u809A\u5B50\u7EE7\u7EED\u8D70\u3002`)}if(t==="naidan"){n.income(e,75,"\u3010\u8EBA\u7740\u4E5F\u80FD\u8D62\u3011");let i=e.departures%4===0&&n.owned(e).filter(s=>s.level<n.buildingLimit(s)).sort((s,r)=>s.level-r.level||s.tile.id-r.tile.id)[0];if(i){let s=n.s.ownership[i.tile.id];s.level===0&&(s.buildingType="residence"),s.level++,n.log(`\u5976\u86CB\u3010\u8EBA\u7740\u4E5F\u80FD\u8D62\u3011\u300C${i.tile.name}\u300D\u514D\u8D39\u52A0\u76D6\u81F3 ${i.level+1} \u7EA7\u3002`)}}return t==="naicha"&&e.departures%3===0&&(n.coupons(e,20),n.log("\u5976\u8336\u3010\u6696\u5FC3\u8865\u7ED9\u3011\u83B7\u5F97 20 \u70B9\u5238\u3002"),n.giveCard(e,"recover")),!0}function om(n,e,t="auto"){let i=t!=="auto"&&t==="landscape"!=n>=e;return{width:i?e:n,height:i?n:e,rotated:i}}function o1(n,e,t,i=!1){return i?{x:e-t.top,y:t.right-n}:{x:n-t.left,y:e-t.top}}function Vc(n,e,t){return o1(n,e,t.getBoundingClientRect(),document.getElementById("app")?.dataset.rotated==="true")}var Hc=class{constructor(e,t,{notify:i=()=>{},resize:s=()=>{}}={}){Object.assign(this,{root:e,button:t,notify:i,resize:s,mode:"auto",rules:[]});let r=a=>{for(let o of a)o.type===4&&/(width|height|orientation)/.test(o.conditionText)?this.rules.push({rule:o,condition:o.conditionText}):o.cssRules&&r(o.cssRules)};for(let a of document.styleSheets)try{r(a.cssRules)}catch{}t.addEventListener("click",()=>this.toggle()),window.addEventListener("resize",()=>this.apply()),document.addEventListener("fullscreenchange",()=>this.apply()),this.apply()}apply(){let e=window.innerWidth,t=window.innerHeight,i=om(e,t,this.mode);this.root.dataset.rotated=String(i.rotated),this.root.style.setProperty("--game-vh",i.height/100+"px"),this.root.style.setProperty("--game-vw",i.width/100+"px"),Object.assign(this.root.style,{position:i.rotated?"fixed":"",left:i.rotated?e+"px":"",top:i.rotated?"0":"",width:i.rotated?i.width+"px":"",height:i.rotated?i.height+"px":"",minHeight:i.rotated?"0":"",transform:i.rotated?"rotate(90deg)":"",transformOrigin:"0 0"});for(let{rule:r,condition:a}of this.rules){if(!i.rotated){r.media.mediaText=a;continue}let o=a.replace(/\(orientation:\s*(portrait|landscape)\)/g,(l,c)=>i.width>=i.height==(c==="landscape")?"(min-width: 0px)":"(max-width: 0px)").replace(/\((max|min)-(width|height):\s*([\d.]+)px\)/g,(l,c,h,u)=>(c==="max"?i[h]<=+u:i[h]>=+u)?"(min-width: 0px)":"(max-width: 0px)");r.media.mediaText=window.matchMedia(o).matches?"all":"not all"}let s=i.width>=i.height;this.button.textContent=s?"\u7AD6\u5C4F":"\u6A2A\u5C4F",this.button.setAttribute("aria-label",s?"\u5207\u6362\u7AD6\u5C4F":"\u5207\u6362\u6A2A\u5C4F"),this.button.title=this.button.getAttribute("aria-label"),this.button.setAttribute("aria-pressed",String(this.mode!=="auto")),requestAnimationFrame(()=>{this.resize(),window.dispatchEvent(new Event("gamelayoutchange"))})}async toggle(){let e=om(innerWidth,innerHeight,this.mode);if(this.mode=e.width>=e.height?"portrait":"landscape",this.apply(),matchMedia("(pointer: coarse)").matches){try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen(),await screen.orientation?.lock?.(this.mode)}catch{}this.apply()}this.notify(this.mode==="landscape"?"\u5DF2\u5207\u6362\u6A2A\u5C4F\uFF0C\u6A2A\u63E1\u624B\u673A\u6E38\u73A9\uFF1B\u518D\u70B9\u53EF\u56DE\u7AD6\u5C4F\u3002":"\u5DF2\u5207\u6362\u7AD6\u5C4F\u3002")}};var Gc=class{constructor(e=()=>performance.now()){this.clock=e,this.deadline=0}ready({news:e=!1,moving:t=!1,effects:i=!1}={}){return!e&&!t&&!i&&this.clock()>=this.deadline}after(e,t=1){let i=e==="moving"?520:e==="roll"?1100:e==="event"?1800:800;this.deadline=this.clock()+Math.max(e==="moving"?300:650,i/Math.min(2,Math.max(1,t)))}reset(){this.deadline=0}};function Wc(n){let e=new Map([[0,1]]);for(let t=0;t<n;t++){let i=new Map;for(let[s,r]of e)for(let a=1;a<=6;a++)i.set(s+a,(i.get(s+a)||0)+r/6);e=i}return e}function Kn(n,e){let t=n.player,i=n.tiles[e.id],s=n.s.ownership[e.id],r=(e.passesStart?400+(n.s.talents&&t.character==="naiwa"?80:0):0)-e.rent+(e.points||0)*(t.tickets<100?1.5:.3);if(i.kind==="property"?s?s.player===t.id&&(r+=s.level<n.buildingLimit(s)&&t.money>=n.upgradeCost(i)?55:10):r+=t.money>=i.price+250?130+n.district(i.id,t.id).count*65:5:r+={hospital:t.skip?0:-210,tax:-n.payment(180),shop:125,rest:120,spirit:20,event:45,bank:0,stock:0,start:0}[i.kind]||0,n.aiDifficulty()==="hard"){s?.player===t.id&&(r+=n.district(i.id,t.id).count*18),!s&&i.kind==="property"&&(r+=n.district(i.id,t.id).count*50);let a=0;for(let o=1;o<=6;o++){let l=n.preview(o,{from:e.id,reverse:!1});a+=Math.min(...l.map(c=>c.rent))/6}r-=a*.35}return r}function or(n,e,t){return n.preview(e,t).sort((s,r)=>Kn(n,r)-Kn(n,s))[0]}function hm(n,e,{reverse:t=!1}={}){let i=0,s=0;for(let[r,a]of Wc(e)){let o=or(n,r,{reverse:t});i+=a*Kn(n,o),s+=a*o.rent}return{value:i,rent:s}}function sd(n){let e=n.player;if(e.forced)return{count:1,value:Kn(n,or(n,e.forced))};if(e.slowTurns)return{count:1,value:Kn(n,or(n,1))};let t;for(let i=1;i<=(e.vehicle===2?3:e.vehicle===1?2:1);i++){let s={count:i,...hm(n,i,{reverse:e.reverse})};(!t||s.value>t.value)&&(t=s)}return t}function lm(n){if(n.aiDifficulty()==="easy"){let s=n.player.cards.indexOf("recover");return s>=0&&(n.player.skip||n.player.spirit==="misfortune")?n.card(s):!1}let e=n.player,t=sd(n),i=[];for(let[s,r]of e.cards.entries()){if(r==="recover"&&i.push({index:s,value:e.skip?600:e.spirit==="misfortune"?250:25}),r==="shield"&&!e.shield&&i.push({index:s,value:t.rent-20}),r==="dice"&&!e.forced)for(let a=1;a<=6;a++)i.push({index:s,target:a,value:Kn(n,or(n,a))-t.value-30});if(r==="turn"&&!e.reverse&&i.push({index:s,value:hm(n,t.count,{reverse:!0}).value-t.value-25}),r==="slow"&&!e.slowTurns&&!e.forced&&i.push({index:s,value:Kn(n,or(n,1))-t.value-50}),["build","demolish","steal"].includes(r))for(let a of n.cardTargets(r)){let o=n.tiles[a.id];if(r==="demolish"&&a.player===e.id&&!a.obstacle)continue;let l;if(r==="build"&&(l=n.upgradeCost(o)*.55+(n.rent(o.id,a.level+1)-n.rent(o.id))*.3),r==="demolish"&&(l=a.obstacle?n.preview(6).some(c=>c.blocked&&c.id===a.id)?100:0:n.upgradeCost(o)*.25+(n.rent(o.id)-n.rent(o.id,a.level-1))*.3),r==="steal"){if(e.money<n.takeoverPrice(o.id)+450)continue;l=n.district(o.id,e.id).count*55-n.cost(o,a.level,ct(a))*.18}i.push({index:s,target:o.id,value:l})}if(r==="block"&&!e.reverse)for(let a=1;a<=6;a++){let o=e.pos;for(let c=0;c<a;c++)o=n.tiles[o].next[0];if(n.s.blocks[o]!==void 0)continue;let l=0;for(let[c,h]of Wc(t.count)){let u=or(n,c,{blocks:{...n.s.blocks,[o]:e.id}});l+=h*Kn(n,u)}i.push({index:s,target:a,value:l-t.value-45})}}i.sort((s,r)=>r.value-s.value);for(let s of i)if(s.value>nd(n).cardThreshold&&n.card(s.index,s.target))return!0;return!1}function cm(n){let e=n.player;if(e.aiTradeDone||(e.aiTradeDone=!0,n.aiDifficulty()==="easy"))return!1;let t=n.aiDifficulty()==="hard";for(let a=0;a<4;a++){let o=n.position(a);if(o.qty&&o.average!==null&&(o.price>=o.average*(t?1.18:1.12)||o.price<=o.average*(t?.8:.75)))return n.trade(a,-Math.min(o.qty,t?8:4))}if(e.money<2200)return!1;let s=n.s.market.map((a,o)=>{let l=a.history.slice(-5),c=l.reduce((h,u)=>h+u,0)/l.length;return{i:o,ratio:a.price/(t?c:a.history[0]),price:a.price}}).sort((a,o)=>a.ratio-o.ratio)[0];if(t&&s.ratio>.98)return!1;let r=Math.min(t?8:2,Math.floor((e.money-1800)/s.price));return r>0?n.trade(s.i,r):!1}function l1(n){let e=n.player;return e.aiBankDone||!n.canBank()?!1:(e.aiBankDone=!0,e.loan&&e.money>e.loan+700?n.bank("repay",e.loan):n.aiDifficulty()==="hard"&&e.money>1900?n.bank("deposit",Math.min(700,e.money-1400)):!1)}function c1(n,e){let t=n.player,i=n.s.ownership[t.pos];if(!i||i.player!==t.id)return!1;if(!i.level&&n.canBuild(t.pos)){let s=n.owned(t),r=n.s.round>n.s.maxRounds*.7,a=n.aiDifficulty()==="easy"?["residence"]:r?["chain","residence"]:!s.some(o=>ct(o)==="research")&&n.s.round<n.s.maxRounds*.4&&t.money>2e3?["research","residence"]:t.character==="naishu"?["chain","mall","residence"]:t.character==="naigou"?["hotel","residence"]:t.character==="naidan"?["mall","residence"]:s.some(o=>ct(o)==="chain")?["chain","residence"]:n.s.players.some(o=>o.id!==t.id&&o.vehicle)?["gas","residence"]:["hotel","residence"];for(let o of a)if(n.canConstruct(t.pos,o)&&t.money>=n.buildPrice(n.tiles[t.pos],o)+e)return n.construct(t.pos,o);return!1}return n.canUpgrade(t.pos)&&t.money>=n.buildPrice(n.tiles[t.pos])+e?n.upgrade(t.pos):!1}function um(n){let e=n.player,t=nd(n);if(e.human||n.s.phase==="finished")return!1;if(n.s.phase==="departure")return n.roll();if(n.s.phase==="roll"){if(e.money<500&&e.deposit&&n.bank("withdraw",Math.min(e.deposit,900))||lm(n)||n.canShop()&&e.money>1800&&e.vehicle===0&&n.s.round<n.s.maxRounds-5&&n.vehicle(1))return!0;if(n.canShop()&&e.cards.length<12&&e.shopUsed<2){let s=e.cards.includes("dice")?e.cards.includes("build")?e.cards.includes("shield")?null:"shield":"build":"dice";if(s&&n.shop(s))return!0}if(cm(n))return!0;let i=n.aiDifficulty()==="easy"?{count:1}:sd(n);return e.diceCount=i.count,n.roll()}if(n.s.phase==="branch"){if(n.aiDifficulty()==="easy"){let s=n.tiles[e.pos].next;return n.step(s[n.int(s.length)])}let i=n.tiles[e.pos].next.map(s=>({first:s,value:Kn(n,or(n,n.s.remaining,{first:s}))}));return i.sort((s,r)=>r.value-s.value),n.step(i[0].first)}if(n.s.phase==="moving")return n.step();if(n.s.phase==="buy"){let i=n.tiles[e.pos],s=n.district(i.id,e.id).count;return n.buy(e.money>=i.price+(n.aiDifficulty()==="easy"?t.reserve:s?220:t.reserve))}if(n.s.phase==="estate"){let i=n.takeoverPrice(e.pos);return n.resolveEstate(n.aiDifficulty()!=="easy"&&e.money>=i+t.reserve&&n.district(e.pos,e.id).count>0)}if(n.s.phase==="event")return n.acknowledge();if(n.s.phase==="debt"){e.deposit&&n.bank("withdraw",e.deposit);for(let r=0;r<4;r++)e.stocks[r]&&n.trade(r,-e.stocks[r]);if(e.money>=n.s.debt.amount)return n.settle();let i=n.s.debt.amount-e.money;if(n.canBank()&&e.loan+i<=1800&&n.bank("borrow",i))return n.settle();let s=n.owned(e).sort((r,a)=>n.district(r.tile.id).count-n.district(a.tile.id).count||r.level-a.level)[0];return s?n.sell(s.tile.id):n.bankrupt()}if(n.s.phase==="end"){if(lm(n)||n.canShop()&&e.money>1800&&e.vehicle===0&&n.s.round<n.s.maxRounds-5&&n.vehicle(1))return!0;if(n.canShop()&&e.cards.length<10&&e.shopUsed<2){let i=e.cards.includes("dice")?e.cards.includes("build")?e.cards.includes("shield")?null:"shield":"build":"dice";if(i&&n.shop(i))return!0}return n.canBank()&&e.loan>0&&e.money>e.loan+500&&n.bank("repay",e.loan)||c1(n,n.aiDifficulty()==="hard"?Math.max(450,Math.min(1300,sd(n).rent*1.5||450)):t.reserve)||cm(n)||l1(n)?!0:n.end()}return!1}var dm=()=>Array.from({length:4},()=>({cost:0,realized:0,unpriced:0}));function fm(n){return n.stockBook===void 0&&(n.stockLegacy=!0,n.stockBook=n.stocks.map(e=>({cost:e?null:0,realized:0,unpriced:0}))),n.stockLegacy===void 0&&(n.stockLegacy=!1),n.stockTrades===void 0&&(n.stockTrades=[]),typeof n.stockLegacy=="boolean"&&Array.isArray(n.stockBook)&&n.stockBook.length===4&&n.stockBook.every((e,t)=>e&&(e.cost===null||Number.isSafeInteger(e.cost)&&e.cost>=0)&&(n.stocks[t]?!0:e.cost===0)&&Number.isSafeInteger(e.realized)&&Number.isSafeInteger(e.unpriced)&&e.unpriced>=0)&&Array.isArray(n.stockTrades)&&n.stockTrades.length<=40&&n.stockTrades.every(e=>e&&Number.isInteger(e.stock)&&e.stock>=0&&e.stock<4&&Number.isInteger(e.qty)&&e.qty!==0&&Number.isInteger(e.price)&&e.price>=20&&e.price<=500&&Number.isInteger(e.round)&&e.round>=1&&(e.profit===null||Number.isSafeInteger(e.profit)))}function rd(n,e,t,i,s){let r=n.stockBook[e],a=n.stocks[e],o=null;if(t>0)r.cost!==null&&(r.cost+=t*i);else{let l=-t,c=r.cost===null?null:l===a?r.cost:Math.round(r.cost*l/a);o=c===null?null:l*i-c,o===null?r.unpriced++:r.realized+=o,r.cost!==null&&(r.cost-=c),l===a&&(r.cost=0)}return n.money-=t*i,n.stocks[e]+=t,n.stockTrades.unshift({stock:e,qty:t,price:i,round:s,profit:o}),n.stockTrades=n.stockTrades.slice(0,40),o}function ad(n,e,t){let i=e.stocks[t],s=e.stockBook[t],r=n.s.market[t].price,a=i*r;return{qty:i,price:r,cost:s.cost,average:i&&s.cost!==null?s.cost/i:null,value:a,unrealized:s.cost===null?null:a-s.cost,rate:s.cost?(a-s.cost)/s.cost*100:null,realized:s.realized,unpriced:s.unpriced}}function pm(n,e=n.player){let t=e.stocks.map((s,r)=>ad(n,e,r)),i=t.filter(s=>s.qty&&s.cost===null).length;return{positions:t,value:t.reduce((s,r)=>s+r.value,0),cost:i?null:t.reduce((s,r)=>s+(r.cost||0),0),unrealized:i?null:t.reduce((s,r)=>s+r.unrealized,0),realized:t.reduce((s,r)=>s+r.realized,0),unknown:i,unpriced:t.reduce((s,r)=>s+r.unpriced,0)}}var h1=5,mm=[20,30,50,80],od="naiwa-monopoly-v2",u1=n=>JSON.parse(JSON.stringify(n)),qi=n=>Math.round(n);function d1(n){let e=n>>>0^2654435769;return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^e>>>16)>>>0||1}var Qn=class n{constructor(e){this.s=e}static create({character:e="naiwa",rounds:t=50,playerCount:i=3,randomStart:s=!1,talents:r=!0,mapVersion:a=2,difficulty:o="normal",opponents:l,seatLevels:c=[],startingCash:h=3200,startingTickets:u=60,seed:f=Date.now()}={}){e==="dounai"&&(e="naicha"),l=l?.map(m=>m==="dounai"?"naicha":m),ri.some(m=>m.id===e)||(e="naiwa");let d=[2,3,4,5,6].includes(+i)?+i:3,g=Qp(e,d,l,f),v=new n({version:2,rules:7,setupSeed:f>>>0,mapVersion:a===1?1:2,difficulty:["easy","normal","hard"].includes(o)?o:"normal",talents:!!r,firstPlayer:0,seed:d1(f),round:1,maxRounds:mm.includes(+t)?+t:50,current:0,phase:"roll",dice:[1],remaining:0,moveTotal:0,moveSteps:0,players:g.map((m,p)=>({id:p,character:m,human:p===0,difficulty:p&&["easy","normal","hard"].includes(c[p-1])?c[p-1]:["easy","normal","hard"].includes(o)?o:"normal",money:[2e3,3200,5e3,8e3].includes(+h)?+h:3200,tickets:[0,60,120].includes(+u)?+u:60,businessReady:!1,cardsUsed:0,buildsUsed:0,shopUsed:0,slowTurns:0,buildSite:null,bankAccess:!1,talentReady:!1,departures:0,deposit:0,loan:0,stocks:[0,0,0,0],stockBook:dm(),stockLegacy:!1,stockTrades:[],cards:["dice","shield","recover"],vehicle:0,diceCount:1,pos:0,history:[],alive:!0,skip:0,spirit:null,spiritTurns:0,shield:!1,reverse:!1,forced:0})),ownership:{},blocks:{},pickups:{},market:Gp.map(m=>({...m,history:[m.price],change:0,previous:m.price})),logs:[{round:1,text:"\u5976\u5BB6\u53D1\u8D22\u5C9B\u5F00\u5F20\uFF01\u6BCF\u4F4D\u5976\u4F34\u5E26\u7740 "+([2e3,3200,5e3,8e3].includes(+h)?+h:3200)+" \u5976\u5E01\u51FA\u53D1\u3002"}],notice:null,debt:null,options:{sound:!0,speed:1,quality:"auto",lighting:"day"},winner:null});return s&&(v.s.current=v.int(d),v.s.firstPlayer=v.s.current,v.log(`\u968F\u673A\u5148\u624B\uFF1A${v.char().name}\u5148\u51FA\u53D1\uFF0C\u6BCF\u4EBA\u884C\u52A8\u4E00\u6B21\u7B97\u4E00\u8F6E\u3002`)),v}static restore(e){try{let t=typeof e=="string"?JSON.parse(e):u1(e),i=Ju(t?.mapVersion??1);if(t&&t.mapVersion===void 0&&(t.mapVersion=1),t&&t.difficulty===void 0&&(t.difficulty="normal"),!t||![1,2].includes(t.mapVersion)||!["easy","normal","hard"].includes(t.difficulty)||t.version!==2||!Array.isArray(t.players)||![2,3,4,5,6].includes(t.players.length)||!["roll","departure","moving","branch","buy","estate","event","end","debt","finished"].includes(t.phase)||!Number.isInteger(t.current)||t.current<0||t.current>=t.players.length||!Number.isInteger(t.round)||t.round<1||!mm.includes(t.maxRounds)||t.round>t.maxRounds||!Number.isInteger(t.seed)||!Number.isInteger(t.remaining)||t.remaining<0||t.remaining>18||(t.moveSteps===void 0&&(t.moveSteps=null),t.moveSteps!==null&&(!Number.isInteger(t.moveSteps)||t.moveSteps<0||t.moveSteps>18))||!t.options||!t.market||t.market.length!==4||!t.ownership||!t.blocks||!Array.isArray(t.logs)||!Array.isArray(t.dice))return null;for(let s of t.players)s.character==="dounai"&&(s.character="naicha");if(t.players.some(s=>!fm(s))||new Set(t.players.map(s=>s.character)).size!==t.players.length||t.players.some((s,r)=>s.human&&r!==0))return null;for(let[s,r]of t.players.entries())if(r.id!==s||typeof r.human!="boolean"||typeof r.alive!="boolean"||!Number.isInteger(r.pos)||!ri.some(a=>a.id===r.character)||!i[r.pos]||![r.money,r.deposit,r.loan,...r.stocks].every(a=>Number.isSafeInteger(a)&&a>=0)||r.stocks.length!==4||!Array.isArray(r.cards)||r.cards.length>15||r.cards.some(a=>!Yt[a])||!Array.isArray(r.history)||r.history.length>80||r.history.some(a=>!Number.isInteger(a)||!i[a])||!ln[r.vehicle]||!Number.isInteger(r.diceCount)||r.diceCount<1||r.diceCount>ln[r.vehicle].dice||!Number.isInteger(r.skip)||r.skip<0||r.skip>3||!Number.isInteger(r.forced)||r.forced<0||r.forced>6||!Number.isInteger(r.spiritTurns)||r.spiritTurns<0||r.spiritTurns>4||r.spirit&&!ys[r.spirit])return null;for(let[s,r]of Object.entries(t.ownership))if(r.buildingType!==void 0&&!Object.hasOwn(Ht,r.buildingType)||r.level>Tn(r)||r.researchProgress!==void 0&&(!Number.isInteger(r.researchProgress)||r.researchProgress<0||r.researchProgress>2)||r.researchCard!==void 0&&(!Ms(r.level).includes(r.researchCard)||ct(r)!=="research")||!i[s]||i[s].kind!=="property"||!Number.isInteger(r.player)||r.player<0||r.player>=t.players.length||!Number.isInteger(r.level)||r.level<0||r.level>h1)return null;for(let s of t.market)if(s.previous===void 0&&(s.previous=Number.isFinite(s.change)?Math.max(20,Math.min(500,s.price-s.change)):s.price),!Number.isSafeInteger(s.previous)||s.previous<20||s.previous>500)return null;if(t.market.some(s=>!Number.isSafeInteger(s.price)||s.price<20||s.price>500||!Array.isArray(s.history)||s.history.length>20||s.history.some(r=>!Number.isFinite(r)||r<20||r>500)))return null;for(let s of["music","voice"])if(s in t.options&&typeof t.options[s]!="boolean")return null;for(let s of["musicVolume","effectsVolume","voiceVolume"])if(s in t.options&&(!Number.isFinite(t.options[s])||t.options[s]<0||t.options[s]>1))return null;if("track"in t.options&&!["ode","town"].includes(t.options.track)||(t.options.lighting===void 0&&(t.options.lighting="day"),!["day","golden","night"].includes(t.options.lighting))||typeof t.options.sound!="boolean"||![1,2,4].includes(t.options.speed)||!["auto","low"].includes(t.options.quality)||t.logs.some(s=>typeof s.text!="string"||!Number.isInteger(s.round))||Object.entries(t.blocks).some(([s,r])=>!i[s]||!Number.isInteger(r)||r<0||r>=t.players.length)||t.phase==="estate"&&(!t.ownership[t.players[t.current].pos]||t.ownership[t.players[t.current].pos].player===t.current)||t.phase==="branch"&&(i[t.players[t.current].pos].next.length!==2||t.remaining<=0)||t.phase==="debt"&&(!t.debt||!Number.isSafeInteger(t.debt.amount)||t.debt.amount<=0||t.debt.to!==null&&(!Number.isInteger(t.debt.to)||!t.players[t.debt.to])||typeof t.debt.label!="string")||(t.firstPlayer===void 0&&(t.firstPlayer=0),!Number.isInteger(t.firstPlayer)||t.firstPlayer<0||t.firstPlayer>=t.players.length)||(t.pickups===void 0&&(t.pickups={}),!t.pickups||typeof t.pickups!="object"||Object.entries(t.pickups).some(([s,r])=>!qr.includes(+s)||!Number.isInteger(r)||!t.players[r]))||(t.talents===void 0&&(t.talents=!1),typeof t.talents!="boolean"))return null;t.rules=7;for(let s of t.players){for(let[r,a]of Object.entries({tickets:60,cardsUsed:0,buildsUsed:0,shopUsed:0,slowTurns:0}))if(s[r]===void 0&&(s[r]=a),!Number.isInteger(s[r])||s[r]<0||s[r]>(r==="tickets"?150:r==="slowTurns"?3:r==="shopUsed"?2:r==="cardsUsed"?32:1))return null;if(s.difficulty===void 0&&(s.difficulty=t.difficulty),!["easy","normal","hard"].includes(s.difficulty)||(s.businessReady===void 0&&(s.businessReady=!1),typeof s.businessReady!="boolean")||(s.talentReady===void 0&&(s.talentReady=!1),s.departures===void 0&&(s.departures=0),typeof s.talentReady!="boolean"||!Number.isSafeInteger(s.departures)||s.departures<0)||(s.buildSite===void 0&&(s.buildSite=null),s.bankAccess===void 0&&(s.bankAccess=!1),s.buildSite!==null&&(!Number.isInteger(s.buildSite)||!i[s.buildSite])||typeof s.bankAccess!="boolean"))return null}return new n(t)}catch{return null}}aiDifficulty(e=this.player){return e.difficulty||this.s.difficulty}buildingLimit(e){return Tn(e)}get tiles(){return Ju(this.s.mapVersion)}position(e,t=this.player){return ad(this,t,e)}portfolio(e=this.player){return pm(this,e)}get player(){return this.s.players[this.s.current]}char(e=this.player){return ri.find(t=>t.id===e.character)}rng(){let e=this.s.seed;return e^=e<<13,e^=e>>>17,e^=e<<5,this.s.seed=e>>>0,this.s.seed/4294967296}int(e){return Math.floor(this.rng()*e)}log(e){this.s.logs.unshift({round:this.s.round,text:e}),this.s.logs=this.s.logs.slice(0,80)}owned(e){return Object.entries(this.s.ownership).filter(([,t])=>t.player===e.id).map(([t,i])=>({tile:this.tiles[+t],...i}))}cost(e,t,i="residence"){return e.price+t*Math.ceil(this.upgradeCost(e)*(Ht[i]?.cost||1))}upgradeCost(e){return Math.ceil(e.price*.6/10)*10}assets(e=this.player){let t=e.money,i=e.deposit,s=e.loan,r=this.owned(e).reduce((l,c)=>l+this.cost(c.tile,c.level,ct(c)),0),a=e.stocks.reduce((l,c,h)=>l+c*this.s.market[h].price,0),o=ln[e.vehicle].price;return{cash:t,deposit:i,property:r,stocks:a,vehicle:o,loan:s,total:qi(t+i+r+a+o-s)}}worth(e){return this.assets(e).total}baseRent(e,t=0){return qi(this.tiles[e].price*[.16,.42,.85,1.4,2.05,2.8][t])}district(e,t=this.s.ownership[e]?.player){let i=this.tiles[e],s=this.tiles.filter(l=>l.kind==="property"&&l.group===i.group),r=s.filter(l=>this.s.ownership[l.id]?.player===t&&ct(this.s.ownership[l.id])==="residence"),a=this.baseRent(e,this.s.ownership[e]?.level??0),o=r.filter(l=>l.id!==e).reduce((l,c)=>l+this.baseRent(c.id,this.s.ownership[c.id].level),0);return{count:r.length,total:s.length,bonus:Math.min(1,o*.35/a),support:o}}rent(e,t=this.s.ownership[e]?.level??0,i=this.player,s=this.s.moveSteps||this.s.moveTotal||1){let r=this.s.ownership[e],a=this.baseRent(e,t);if(r&&this.s.players[r.player].skip)return 0;if(r&&t){let o=ct(r);if(o==="park"||o==="research")return 0;if(o==="chain")return Math.min(400,100+50*(this.owned(this.s.players[r.player]).filter(l=>l.level&&ct(l)==="chain").length-1));if(o==="gas")return 30+15*s+60*i.vehicle;if(o==="hotel")return Math.round(a*.65)*2;if(o==="mall")return Math.round(a*1.0833333333)}return r?a+Math.min(a,qi(this.district(e).support*.35)):a}buildPrice(e,t=ct(this.s.ownership[e.id])){return Math.ceil(Math.ceil(this.upgradeCost(e)*(Ht[t]?.cost||1))*(ar(this,this.player,"naiwa")?.85:1))}canConstruct(e,t="residence"){let i=this.tiles[e],s=this.s.ownership[e],r=this.player;return!!(Object.hasOwn(Ht,t)&&i&&s&&s.player===r.id&&s.level===0&&this.s.phase==="end"&&r.pos===e&&r.buildSite===e&&r.buildsUsed<1&&r.money>=this.buildPrice(i,t))}canBuild(e){return Object.keys(Ht).some(t=>this.canConstruct(e,t))}construct(e,t){if(!this.canConstruct(e,t))return!1;let i=this.s.ownership[e],s=this.buildPrice(this.tiles[e],t);return this.player.money-=s,this.player.buildsUsed++,i.buildingType=t,i.level=1,t==="research"&&(i.researchProgress=0,i.researchCard="dice"),this.log(`${this.char().name}\u5728\u300C${this.tiles[e].name}\u300D\u5EFA\u6210${Ht[t].name} \u2212${s}`),!0}setResearch(e,t){let i=this.s.ownership[e];return!i||i.player!==this.player.id||ct(i)!=="research"||!i.level||this.s.phase!=="end"||this.player.pos!==e||this.player.buildSite!==e||!Ms(i.level).includes(t)?!1:(i.researchCard=t,i.researchProgress=0,this.log(`${this.char().name}\u8C03\u6574\u7814\u7A76\u6240\u9879\u76EE\u3002`),!0)}cardPrice(e){return Math.ceil(Yt[e].price*(ar(this,this.player,"naichong")?.8:1))}payment(e,t=null,i=this.player){return qi(e*(i.spirit==="misfortune"?1.25:1)*(ar(this,i,"naishu")&&t!==null?.8:ar(this,i,"naicha")&&t===null?.5:1))}canUpgrade(e){let t=this.tiles[e],i=this.s.ownership[e],s=this.player;return!!(t&&this.s.phase==="end"&&s.pos===e&&s.buildSite===e&&i?.player===s.id&&i.level<Tn(i)&&s.buildsUsed<1&&s.money>=this.buildPrice(t))}nearby(e,t=8,i=this.player){if(!this.tiles[e])return!1;let s=[[i.pos,0]],r=new Set;for(;s.length;){let[a,o]=s.shift();if(a===+e)return!0;if(!(r.has(a)||o>=t)){r.add(a);for(let l of this.tiles)l.next.includes(a)&&s.push([l.id,o+1]);for(let l of this.tiles[a].next)s.push([l,o+1])}}return!1}cardTargets(e){let t=this.player,i=Object.entries(this.s.ownership).filter(([s,r])=>(e==="steal"?+s===t.pos:this.nearby(+s))&&(e==="build"?r.player===t.id&&r.level<Tn(r):e==="demolish"?r.level>0&&this.s.blocks[s]===void 0:r.player!==t.id&&this.s.players[r.player].alive)).map(([s,r])=>({id:+s,...r}));if(e==="demolish")for(let[s,r]of Object.entries(this.s.blocks))this.nearby(+s)&&i.push({id:+s,player:r,level:0,obstacle:!0});return i}takeoverPrice(e){let t=this.s.ownership[e];return t?Math.ceil(this.cost(this.tiles[e],t.level,ct(t))*1.25*(ar(this,this.player,"naishu")?.9:1)/10)*10:0}preview(e,{from:t=this.player.pos,first:i=null,reverse:s=this.player.reverse,blocks:r=this.s.blocks}={}){if(!Number.isInteger(e)||e<0||e>18)return[];let a=this.player,o=[],l=(c,h,u,f,d)=>{if(h===0||u.length&&r[c]!==void 0){let v=this.tiles[c],m=this.s.ownership[c];o.push({id:c,path:u,passesStart:d,blocked:h>0,points:[...new Set(u)].filter(p=>qr.includes(p)&&this.s.pickups[p]===void 0).length*10,rent:m&&m.player!==a.id&&!a.shield?this.payment(this.rent(c,void 0,a,u.length+(t===a.pos&&["moving","branch"].includes(this.s.phase)?this.s.moveSteps??Math.max(0,(this.s.moveTotal||0)-this.s.remaining):0)),m.player,a):0,owner:m?.player??null,price:!m&&v.kind==="property"?v.price:0});return}let g;s?g=[f.length?f.at(-1):c<40?(c+39)%40:c===40?35:c===44?15:c-1]:g=u.length===0&&i!==null&&this.tiles[c].next.includes(i)?[i]:this.tiles[c].next;for(let v of g)l(v,h-1,[...u,v],s?f.slice(0,-1):[...f,c],d||!s&&v===0)};return l(t,e,[],[...a.history],!1),o}coupons(e,t){e.tickets=Math.min(150,e.tickets+t)}income(e,t,i){let s=qi(t*(e.spirit==="fortune"?1.25:1));return e.money+=s,this.log(`${this.char(e).name} ${i} +${s}`),s}canBank(){return this.manageable()&&this.s.round%7!==3&&(this.player.bankAccess||this.tiles[this.player.pos].kind==="bank")}canUseCard(e){return this.player.alive&&(this.s.phase==="roll"||this.s.phase==="end"&&!["dice","turn","slow","block"].includes(e)||this.s.phase==="estate"&&e==="steal")}blockTargets(){let t=this.player.pos;return Array.from({length:6},(i,s)=>(t=this.tiles[t].next[0],{id:t,steps:s+1,reason:this.s.blocks[t]!==void 0?"\u8FD9\u91CC\u5DF2\u6709\u8DEF\u969C":this.s.players.some(r=>r.alive&&r.pos===t)?"\u8FD9\u91CC\u6709\u89D2\u8272\u505C\u9760":""}))}cardHint(e){let t=this.player;if(!Yt[e]||!t.cards.includes(e))return"\u5361\u7247\u4E0D\u5728\u5F53\u524D\u5361\u5305\u4E2D";if(!this.canUseCard(e))return this.s.phase==="end"&&["dice","turn","slow","block"].includes(e)?"\u79FB\u52A8\u5361\u987B\u5728\u63B7\u9AB0\u524D\u4F7F\u7528":"\u7B49\u5F85\u81EA\u5DF1\u7684\u884C\u52A8\u65F6\u673A";if(e==="dice"&&t.forced)return`\u672C\u6B21\u5DF2\u6307\u5B9A ${t.forced} \u6B65`;if(e==="turn"&&t.reverse)return"\u672C\u6B21\u5DF2\u9009\u62E9\u5012\u9000";if(e==="shield"&&t.shield)return"\u514D\u79DF\u4FDD\u62A4\u5DF2\u751F\u6548\uFF0C\u89E6\u53D1\u540E\u518D\u8865\u5145";if(e==="slow"&&(t.slowTurns||t.forced))return t.slowTurns?`\u6162\u884C\u5269\u4F59 ${t.slowTurns} \u6B21\u51FA\u53D1`:"\u672C\u6B21\u5DF2\u63A7\u9AB0\uFF0C\u6682\u4E0D\u80FD\u5F00\u542F\u6162\u884C";if(e==="block"&&this.blockTargets().every(i=>i.reason))return"\u524D\u65B9\u516D\u683C\u6682\u65E0\u53EF\u653E\u7F6E\u4F4D\u7F6E";if(["build","demolish","steal"].includes(e)){if(!this.cardTargets(e).length)return e==="steal"?"\u505C\u5728\u5BF9\u624B\u5730\u4EA7\u540E\u53EF\u6536\u8D2D":e==="build"?"\u9644\u8FD1\u516B\u683C\u6682\u65E0\u53EF\u52A0\u76D6\u7684\u81EA\u5BB6\u5730\u4EA7":"\u9644\u8FD1\u516B\u683C\u6682\u65E0\u623F\u5C4B\u6216\u8DEF\u969C";if(e==="steal"&&t.money<this.takeoverPrice(t.pos))return`\u73B0\u91D1\u4E0D\u8DB3\uFF0C\u8FD8\u9700 ${this.takeoverPrice(t.pos)-t.money} \u5976\u5E01`}return""}canShop(){return this.manageable()&&this.s.phase!=="debt"&&this.tiles[this.player.pos].kind==="shop"}manageable(){return["roll","end","debt"].includes(this.s.phase)&&this.player.alive}charge(e,t=null,i="\u652F\u4ED8\u8D39\u7528"){let s=this.player;if(e=this.payment(e,t,s),s.money<e&&s.deposit){let r=Math.min(s.deposit,e-s.money);s.deposit-=r,s.money+=r,this.log(`${this.char().name}\u5B58\u6B3E\u81EA\u52A8\u8865\u8DB3\u73B0\u91D1 +${r}`)}return s.money<e?(this.s.debt={amount:e,to:t,label:i},this.s.phase="debt",this.log(`${this.char().name}\u9700\u652F\u4ED8 ${e} \u5976\u5E01\uFF0C\u8BF7\u7B79\u96C6\u8D44\u91D1\u6216\u7533\u8BF7\u7834\u4EA7\u3002`),!1):(s.money-=e,t!==null&&(this.s.players[t].money+=e),this.log(`${this.char().name} ${i} \u2212${e}`),!0)}roll(){if(!["roll","departure"].includes(this.s.phase))return!1;let e=this.player;if(e.skip>0)return e.skip--,this.log(`${this.char().name}\u6B63\u5728\u4F11\u517B\uFF0C\u672C\u56DE\u5408\u6682\u505C\u884C\u52A8\u3002`),this.s.phase="end",!0;if(Xp(this))return this.s.phase="departure",!0;if(am(this))return this.s.phase="departure",!0;let t=Math.max(1,Math.min(ln[e.vehicle].dice,e.diceCount));return this.s.dice=e.forced?[e.forced]:e.slowTurns?[1]:Array.from({length:t},()=>this.int(6)+1),e.slowTurns&&e.slowTurns--,e.forced=0,this.s.remaining=this.s.dice.reduce((i,s)=>i+s,0),this.s.moveTotal=this.s.remaining,this.s.moveSteps=0,this.s.phase="moving",this.log(`${this.char().name}\u63B7\u51FA ${this.s.dice.join(" + ")}\uFF0C${e.reverse?"\u5012\u9000":"\u524D\u8FDB"} ${this.s.remaining} \u683C\u3002`),!0}step(e){if(!["moving","branch"].includes(this.s.phase))return!1;let t=this.player;if(this.s.remaining<=0)return t.reverse=!1,this.land(),!0;let i;if(t.reverse)i=t.history.length?t.history.pop():t.pos<40?(t.pos+39)%40:t.pos===40?35:t.pos===44?15:t.pos-1;else{let s=this.tiles[t.pos].next;if(s.length>1&&!s.includes(e))return this.s.phase="branch",!1;i=s.length>1?e:s[0],s.length>1&&this.log(`${this.char().name}\u9009\u62E9\u901A\u5F80\u300C${this.tiles[i].name}\u300D\u7684\u8DEF\u7EBF\u3002`),t.history.push(t.pos),t.history=t.history.slice(-80)}return this.s.moveSteps=(this.s.moveSteps??Math.max(0,(this.s.moveTotal||0)-this.s.remaining))+1,t.pos=i,qr.includes(i)&&this.s.pickups[i]===void 0&&(this.s.pickups[i]=t.id,this.coupons(t,10),this.log(`${this.char().name}\u62FE\u53D6\u70B9\u5238 +10`)),this.tiles[i].kind==="bank"&&(t.bankAccess=!0),this.s.remaining--,i===0&&!t.reverse&&(this.income(t,400+(ar(this,t,"naiwa")?80:0),"\u7ECF\u8FC7\u8D77\u70B9"),this.coupons(t,25)),this.s.blocks[i]!==void 0&&(delete this.s.blocks[i],this.s.remaining=0,this.log(`${this.char().name}\u9047\u5230\u5976\u5757\u8DEF\u969C\uFF0C\u5728\u6B64\u505C\u4E0B\u3002`)),this.s.phase="moving",!0}land(){let e=this.player,t=this.tiles[e.pos];if(e.buildSite=null,this.s.phase="end",this.s.ownership[e.pos]?.player===e.id&&(e.buildSite=e.pos),t.kind==="property"){let i=this.s.ownership[t.id];if(!i){this.s.phase="buy";return}if(i.player!==e.id){if(e.cards.includes("steal")&&e.money>=this.takeoverPrice(t.id)){this.s.phase="estate";return}this.collectProperty(t.id)}else i.level&&ct(i)==="park"&&(this.coupons(e,10),this.log(`${this.char().name}\u6E38\u89C8\u516C\u56ED\uFF0C\u83B7\u5F9710\u70B9\u5238\u3002`))}else t.kind==="event"?this.event():t.kind==="hospital"?(e.skip=1,this.charge(100,null,"\u7597\u517B\u8D39")&&this.notice("\u5976\u86D9\u7597\u517B\u9662","\u4F11\u517B\u4E00\u56DE\u5408\u3002\u4E5F\u53EF\u4EE5\u5728\u4E0B\u56DE\u5408\u63B7\u9AB0\u524D\u4F7F\u7528\u91CE\u751F\u72D7\u5976\u6062\u590D\u3002","rest")):t.kind==="tax"?this.charge(180,null,"\u5976\u6CE1\u6E05\u6D01\u8D39")&&this.notice("\u5976\u6CE1\u6E05\u6D01\u7AD9","\u8857\u9053\u53C8\u5E72\u51C0\u4E86\uFF0C\u5927\u5BB6\u4E00\u8D77\u5FEB\u4E50\u5927\u7B11\u3002","sad"):t.kind==="rest"?(this.income(e,120,"\u5728\u5C0F\u7A9D\u9886\u53D6\u8865\u8D34"),this.notice("\u56DE\u5230\u5976\u86D9\u7684\u5C0F\u7A9D","\u7A0D\u4F5C\u4F11\u606F\uFF0C\u83B7\u5F97 120 \u5976\u5E01\u8865\u8D34\u3002","happy")):t.kind==="spirit"?this.attach():t.kind==="bank"?this.notice(this.s.round%7===3?"\u94F6\u884C\u4ECA\u65E5\u4F11\u606F":"\u5976\u5E01\u94F6\u884C",this.s.round%7===3?"\u5468\u4E09\u94F6\u884C\u4F11\u606F\uFF0C\u4ECA\u5929\u4EC5\u53EF\u67E5\u770B\u8D26\u6237\u3002":"\u7ECF\u8FC7\u94F6\u884C\u540E\u672C\u56DE\u5408\u53EF\u529E\u7406\u5B58\u53D6\u6B3E\u3001\u501F\u6B3E\u4E0E\u8FD8\u6B3E\u3002"):t.kind==="stock"?this.notice(this.s.round%7===0?"\u8BC1\u5238\u6240\u4ECA\u65E5\u4F11\u5E02":"\u5976\u5BB6\u8BC1\u5238\u6240","\u6253\u5F00\u80A1\u7968\u9762\u677F\u67E5\u770B\u56DB\u5BB6\u5976\u5BB6\u4F01\u4E1A\u3002\u4EF7\u683C\u6BCF\u8F6E\u53D8\u5316\uFF1B\u6BCF\u7B2C\u4E03\u8F6E\u4F11\u5E02\uFF0C\u5176\u4F59\u65F6\u95F4\u53EF\u4EA4\u6613\u3002"):t.kind==="shop"&&(this.coupons(e,30),this.giveCard(e),this.notice("\u5976\u5BB6\u8865\u7ED9","\u83B7\u5F97 30 \u70B9\u5238\u4E0E\u4E00\u5F20\u968F\u673A\u5361\uFF01\u70B9\u5238\u7528\u4E8E\u4E70\u5361\uFF0C\u5976\u5E01\u7528\u4E8E\u5730\u4EA7\u548C\u4EA4\u901A\u5DE5\u5177\u3002","happy"))}collectProperty(e){let t=this.player,i=this.s.ownership[e],s=this.tiles[e],r=ct(i);if(!i)return;if(i.level&&(r==="park"||r==="research")){r==="park"&&(this.coupons(t,10),this.log(`${this.char().name}\u514D\u8D39\u6E38\u89C8\u516C\u56ED\uFF0C\u83B7\u5F9710\u70B9\u5238\u3002`));return}if(this.s.players[i.player].skip)return;if(t.shield){t.shield=!1,this.log(`${this.char().name}\u7528\u5FEB\u4E50\u514D\u79DF\u5361\u62B5\u6D88\u672C\u6B21\u8D39\u7528\u3002`);return}let a=this.rent(e),o="\u79DF\u91D1";if(i.level&&r==="hotel"){let l=this.int(3)+1;a=Math.round(this.baseRent(e,i.level)*.65)*l,t.skip=l,o=`\u4F4F\u5BBF${l}\u56DE\u5408\u8D39\u7528`}else if(i.level&&r==="mall"){let l=[.75,1,1.5][this.int(3)];a=Math.round(this.baseRent(e,i.level)*l),o=`\u8D2D\u7269\u6D88\u8D39\uFF08${l*100}%\uFF09`}else i.level&&r==="gas"&&(o="\u52A0\u6CB9\u8D39");this.charge(a,i.player,`\u5411${this.char(this.s.players[i.player]).name}\u652F\u4ED8\u300C${s.name}\u300D${o}`)&&(this.s.players[i.player].mood="happy",i.level&&["hotel","mall","gas"].includes(r)&&this.notice(Ht[r].name,`${o}\uFF1A${this.payment(a,i.player)} \u5976\u5E01${r==="hotel"?"\uFF0C\u4F11\u606F "+t.skip+" \u56DE\u5408\u3002":"\u3002"}`,"sad"))}resolveEstate(e=!1){if(this.s.phase!=="estate")return!1;let t=this.player;if(e){let i=t.cards.indexOf("steal");return i<0||!this.card(i,t.pos)?!1:(t.buildSite=t.pos,this.s.phase="end",!0)}return this.s.phase="end",this.collectProperty(t.pos),!0}notice(e,t,i="idle"){this.s.notice={title:e,text:t,mood:i},this.s.phase="event"}acknowledge(){return this.s.phase!=="event"?!1:(this.s.notice=null,this.s.phase="end",!0)}buy(e){if(this.s.phase!=="buy")return!1;let t=this.player,i=this.tiles[t.pos];if(e){if(this.s.ownership[i.id]||t.money<i.price)return!1;t.money-=i.price,this.s.ownership[i.id]={player:t.id,level:0,buildingType:"residence"},t.buildSite=i.id,this.log(`${this.char().name}\u4E70\u4E0B\u300C${i.name}\u300D\u2212${i.price}`)}else this.log(`${this.char().name}\u6682\u65F6\u653E\u5F03\u300C${i.name}\u300D\u3002`);return this.s.phase="end",!0}upgrade(e){if(this.s.ownership[e]?.level===0)return this.construct(e,"residence");if(!this.canUpgrade(e))return!1;let t=this.player,i=this.tiles[e],s=this.s.ownership[e],r=this.buildPrice(i);return t.money-=r,t.buildsUsed++,s.level++,this.log(`${this.char().name}\u5C06\u300C${i.name}\u300D\u5347\u7EA7\u4E3A ${s.level} \u7EA7 \u2212${r}`),!0}demolish(e){if(!this.manageable()||this.s.phase==="debt")return!1;let t=this.tiles[e],i=this.s.ownership[e];if(!t||!i||this.s.phase!=="end"||this.player.pos!==e||this.player.buildSite!==e||i.player!==this.player.id||i.level===0)return!1;let s=Math.floor((this.cost(t,i.level,ct(i))-t.price)*.25);return i.level=0,Qu(i),this.player.money+=s,this.log(`${this.char().name}\u62C6\u9664\u300C${t.name}\u300D\u623F\u5C4B\uFF0C\u4FDD\u7559\u571F\u5730\uFF0C\u56DE\u6536\u6750\u6599 +${s}`),!0}sell(e){if(!this.manageable())return!1;let t=this.tiles[e],i=this.s.ownership[e];if(!i||i.player!==this.player.id)return!1;let s=qi(this.cost(t,i.level,ct(i))*.65);return this.player.money+=s,delete this.s.ownership[e],this.log(`${this.char().name}\u53D8\u5356\u300C${t.name}\u300D+${s}`),!0}bank(e,t){if(!this.canBank()||(t=qi(+t),!Number.isFinite(t)||t<=0))return!1;let i=this.player;if(e==="deposit"){if(this.s.phase==="debt"||i.money<t)return!1;i.money-=t,i.deposit+=t}else if(e==="withdraw"){if(i.deposit<t)return!1;i.deposit-=t,i.money+=t}else if(e==="borrow"){if(i.loan+t>1800)return!1;i.loan+=t,i.money+=t}else if(e==="repay"){if(this.s.phase==="debt"||i.money<t||i.loan<t)return!1;i.money-=t,i.loan-=t}else return!1;return this.log(`${this.char().name}${{deposit:"\u5B58\u5165",withdraw:"\u53D6\u51FA",borrow:"\u501F\u5165",repay:"\u507F\u8FD8"}[e]} ${t} \u5976\u5E01\u3002`),!0}trade(e,t){if(!this.manageable()||this.s.round%7===0)return!1;let i=this.player,s=this.s.market[e];if(t=+t,!Number.isInteger(e)||e<0||e>3||!s||!Number.isInteger(t)||t===0||Math.abs(t)>1e4||t>0&&(this.s.phase==="debt"||i.money<t*s.price)||t<0&&i.stocks[e]<-t)return!1;let r=rd(i,e,t,s.price,this.s.round);return this.log(`${this.char().name}${t>0?"\u4E70\u5165":"\u5356\u51FA"}${Math.abs(t)}\u80A1\u300C${s.name}\u300D\u3002`),!0}giveCard(e,t){if(t||=Object.keys(Yt)[this.int(Object.keys(Yt).length)],e.cards.length>=15){this.income(e,60,"\u5361\u5305\u5DF2\u6EE1\uFF0C\u8865\u507F");return}e.cards.push(t),this.log(`${this.char(e).name}\u83B7\u5F97\u300C${Yt[t].name}\u300D\u3002`)}shop(e){if(!this.canShop())return!1;let t=Yt[e],i=this.player;return!t||i.cards.length>=15||i.tickets<this.cardPrice(e)||i.shopUsed>=2?!1:(i.tickets-=this.cardPrice(e),i.shopUsed++,i.cards.push(e),this.log(`${this.char().name}\u8D2D\u4E70\u300C${t.name}\u300D\u2212${this.cardPrice(e)} \u70B9\u5238`),!0)}vehicle(e){if(!this.canShop())return!1;let t=this.player,i=ln[e];return!i||e<=t.vehicle||t.money<i.price?!1:(t.money-=i.price,t.vehicle=e,t.diceCount=i.dice,this.log(`${this.char().name}\u8D2D\u5165${i.name}\uFF0C\u73B0\u5728\u53EF\u9009\u62E9 1\u2014${i.dice} \u9897\u9AB0\u5B50\u3002`),!0)}card(e,t){let i=this.player,s=i.cards[e];if(this.cardHint(s))return!1;let r="";if(s==="dice"){if(!Number.isInteger(t)||t<1||t>6||i.forced)return!1;i.forced=t,r=`\u6307\u5B9A\u672C\u6B21 ${t} \u6B65`}if(s==="block"){if(!Number.isInteger(t)||t<1||t>6)return!1;let a=i.pos;for(let o=0;o<t;o++)a=this.tiles[a].next[0];if(this.s.blocks[a]!==void 0||this.s.players.some(o=>o.alive&&o.pos===a))return!1;this.s.blocks[a]=i.id,r=`\u5728\u300C${this.tiles[a].name}\u300D\u653E\u7F6E\u8DEF\u969C`}if(s==="turn"){if(i.reverse)return!1;i.reverse=!0}if(s==="shield"){if(i.shield)return!1;i.shield=!0}if(s==="recover"&&(i.skip=0,i.spirit==="misfortune"&&(i.spirit=null,i.spiritTurns=0),this.income(i,80,"\u559D\u4E0B\u91CE\u751F\u72D7\u5976")),s==="steal"){let a=this.tiles[t],o=this.s.ownership[t];if(!this.cardTargets(s).some(c=>c.id===t))return!1;let l=this.takeoverPrice(t);if(i.money<l)return!1;i.money-=l,this.s.players[o.player].money+=l,o.player=i.id,r=`\u6536\u8D2D\u300C${a.name}\u300D\u2212${l}`}if(s==="demolish"||s==="build"){if(!this.cardTargets(s).some(a=>a.id===t))return!1;if(s==="demolish"&&this.s.blocks[t]!==void 0)delete this.s.blocks[t],r=`\u6E05\u7406\u300C${this.tiles[t].name}\u300D\u8DEF\u969C`;else{let a=this.s.ownership[t];s==="build"&&a.level===0&&(a.buildingType="residence"),a.level+=s==="build"?1:-1,Qu(a),r=`${s==="build"?"\u52A0\u76D6":"\u62C6\u9664"}\u300C${this.tiles[t].name}\u300D\u4E00\u5C42`}}if(s==="slow"){if(i.slowTurns||i.forced)return!1;i.slowTurns=3}return i.cards.splice(e,1),i.cardsUsed++,this.log(`${this.char().name}\u4F7F\u7528\u300C${Yt[s].name}\u300D${r}`),!0}attach(){let e=this.player,t=Object.keys(ys)[this.int(3)];if(t==="misfortune"&&e.spirit==="guardian"){e.spirit=null,e.spiritTurns=0,this.log("\u5976\u86CB\u5B88\u62A4\u62B5\u6321\u4E86\u9709\u8FD0\u3002"),this.notice("\u5976\u86CB\u5B88\u62A4","\u66FF\u4F60\u6321\u4F4F\u4E00\u6B21\u9709\u8FD0\uFF0C\u5B88\u62A4\u6548\u679C\u5DF2\u6D88\u8017\u3002","happy");return}e.spirit=t,e.spiritTurns=4,this.log(`${this.char().name}\u8FCE\u6765\u300C${ys[t].name}\u300D\uFF0C\u6301\u7EED 3 \u4E2A\u540E\u7EED\u56DE\u5408\u3002`),this.notice(ys[t].name,`${ys[t].description}\u3002\u6301\u7EED\u81F3\u63A5\u4E0B\u6765 3 \u6B21\u884C\u52A8\u7ED3\u675F\uFF0C\u540C\u7C7B\u5237\u65B0\u3001\u5F02\u7C7B\u66FF\u6362\u3002`,t==="misfortune"?"sad":"happy")}event(){let e=this.player,t=Zu[this.int(Zu.length)];if(this.log(`\u300C${t.name}\u300D${t.text}`),["loss","rest"].includes(t.kind)&&e.spirit==="guardian"){e.spirit=null,e.spiritTurns=0,this.notice("\u5976\u86CB\u66FF\u4F60\u6321\u4F4F\u4E86\uFF01",`\u300C${t.name}\u300D\u7684\u8D1F\u9762\u6548\u679C\u5DF2\u62B5\u6D88\u3002`,"happy");return}if(t.stock!==void 0){let i=this.s.market[t.stock];i.previous??=i.price,i.price=Math.max(20,Math.min(500,qi(i.price*(1+t.change)))),i.change=i.price-i.previous,i.history.push(i.price),i.history=i.history.slice(-20)}if(t.kind==="gain"&&this.income(e,t.amount,"\u83B7\u5F97\u4E8B\u4EF6\u5956\u52B1"),!(t.kind==="loss"&&!this.charge(t.amount,null,t.name))){if(t.kind==="rest"&&(e.skip=1,this.income(e,t.amount,"\u6D17\u6FA1\u8865\u8D34")),t.kind==="recover"&&(e.skip=0,this.giveCard(e,"recover")),t.kind==="card"&&this.giveCard(e),t.kind==="spirit"){this.attach();return}this.notice(t.name,t.text,t.kind==="loss"?"sad":"happy")}}settle(){if(this.s.phase!=="debt")return!1;let e=this.s.debt,t=this.player;return t.money<e.amount?!1:(t.money-=e.amount,e.to!==null&&(this.s.players[e.to].money+=e.amount),this.log(`${this.char().name}\u652F\u4ED8${e.label} \u2212${e.amount}`),this.s.debt=null,this.s.phase="end",!0)}bankrupt(){if(this.s.phase!=="debt")return!1;let e=this.player,t=this.s.debt;e.money+=e.deposit,e.deposit=0;for(let s=0;s<4;s++)e.stocks[s]&&rd(e,s,-e.stocks[s],this.s.market[s].price,this.s.round);for(let s of this.owned(e))e.money+=qi(this.cost(s.tile,s.level,ct(s))*.65),delete this.s.ownership[s.tile.id];e.money+=qi(ln[e.vehicle].price*.5),e.vehicle=0,e.diceCount=1,e.forced=0,e.slowTurns=0,e.skip=0;let i=Math.min(e.money,t.amount);return e.money-=i,t.to!==null&&(this.s.players[t.to].money+=i),e.alive=!1,e.spirit=null,this.s.debt=null,this.log(`${this.char().name}\u7533\u8BF7\u7834\u4EA7\uFF0C\u6E05\u7B97\u652F\u4ED8 ${i} \u5976\u5E01\uFF0C\u9000\u51FA\u672C\u5C40\u3002`),this.s.phase="end",this.s.players.filter(s=>s.alive).length===1&&this.finish(),!0}end(){if(this.s.phase!=="end")return!1;let e=this.player;if(e.spirit&&--e.spiritTurns<=0&&(e.spirit=null),e.reverse=!1,this.s.players.filter(i=>i.alive).length<=1)return this.finish(),!0;let t=this.s.current;do if(t=(t+1)%this.s.players.length,t===(this.s.firstPlayer??0)){if(this.s.round>=this.s.maxRounds)return this.finish(),!0;this.s.round++,this.s.pickups={},this.marketTick()}while(!this.s.players[t].alive);return this.s.current=t,this.player.businessReady=!1,this.player.talentReady=!1,this.player.cardsUsed=0,this.player.buildsUsed=0,this.player.shopUsed=0,this.player.buildSite=null,this.player.bankAccess=!1,this.player.aiTradeDone=!1,this.player.aiBankDone=!1,this.s.phase="roll",!0}marketTick(){for(let e of this.s.market){let t=e.price;e.price=Math.max(20,Math.min(500,qi(e.price*(.88+this.rng()*.24)))),e.previous=t,e.previous=t,e.change=e.price-t,e.history.push(e.price),e.history=e.history.slice(-20)}for(let e of this.s.players){if(!e.alive)continue;let t=Math.floor(e.deposit*.005),i=qi(e.loan*.04);e.deposit+=t,e.loan+=i,(t||i)&&this.log(`${this.char(e).name}\uFF1A\u5B58\u6B3E\u5229\u606F +${t}\uFF0C\u8D37\u6B3E\u5229\u606F +${i}\uFF08\u8BA1\u5165\u672C\u91D1\uFF09\u3002`)}this.log(`\u7B2C ${this.s.round} \u8F6E\u5F00\u59CB\uFF0C\u5976\u5BB6\u80A1\u5E02\u884C\u60C5\u5DF2\u66F4\u65B0\u3002`)}finish(){this.s.phase="finished";let e=this.leaders();this.s.winner=e[0]?.id??0,this.log(`\u672C\u5C40\u7ED3\u675F\uFF01${e.map(t=>this.char(t).name).join("\u3001")}${e.length>1?"\u5E76\u5217":""}\u6210\u4E3A\u5976\u5BB6\u5927\u5BCC\u7FC1\u3002`)}leaders(){let e=this.ranking(),t=e[0];return e.filter(i=>i.alive===t.alive&&this.worth(i)===this.worth(t))}ranking(){return[...this.s.players].sort((e,t)=>Number(t.alive)-Number(e.alive)||this.worth(t)-this.worth(e)||e.id-t.id)}ai(){return um(this)}};var qc=.85,$c=1.65,vm=[{value:1,normal:[0,1,0]},{value:6,normal:[0,-1,0]},{value:2,normal:[0,0,1]},{value:5,normal:[0,0,-1]},{value:3,normal:[1,0,0]},{value:4,normal:[-1,0,0]}],f1={1:[[0,0]],2:[[-1,1],[1,-1]],3:[[-1,1],[0,0],[1,-1]],4:[[-1,-1],[-1,1],[1,-1],[1,1]],5:[[-1,-1],[-1,1],[0,0],[1,-1],[1,1]],6:[[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1]]},p1=new xs(1,1,1,4,.09),m1=new Qt(1,24,16),gm=new w(0,1,0),g1=new w(0,0,1);function v1(n,e=0){let t=vm.find(i=>i.value===n);if(!t)throw Error("Invalid die result");return new ci().setFromAxisAngle(gm,.45+e*.2).multiply(new ci().setFromUnitVectors(new w(...t.normal),gm))}function xm(n,e){return!!n&&["roll","departure"].includes(n.phase)&&e.phase==="moving"&&n.current===e.current&&n.round===e.round}var Xc=class{constructor(e,t,i="#e7bc52"){if(!Array.isArray(e)||e.length<1||e.length>3||e.some(c=>!Number.isInteger(c)||c<1||c>6))throw Error("Invalid dice");this.values=[...e],this.anchorPoint=t.clone(),this.group=new _e,this.group.name="dice-roll",this.group.position.copy(t).add(new w(.7,2.15,.7));let s=new Gt({color:"#fff1cf",roughness:.23,metalness:0,clearcoat:.8,clearcoatRoughness:.15}),r=new Ft({color:"#5e3829",roughness:.5}),a=new Ft({color:"#b6442d",roughness:.43});this.materials=[s,r,a],this.dice=[];for(let[c,h]of e.entries()){let u=new _e;u.name=`die-${c}`,u.userData.result=h;let f=new bt(p1,s);u.add(f);for(let d of vm){let g=new w(...d.normal),v=new ci().setFromUnitVectors(g1,g),m=new _e;m.name=`pips-${d.value}`,m.position.copy(g).multiplyScalar(.501),m.quaternion.copy(v),u.add(m);for(let[p,y]of f1[d.value]){let _=new bt(m1,d.value===1?a:r);_.scale.set(.066,.066,.012),_.position.set(p*.22,y*.22,0),m.add(_)}}this.group.add(u),this.dice.push({die:u,target:v1(h,c),index:c,offset:(c-(e.length-1)/2)*1.22})}let o=new Ot({color:i,transparent:!0,opacity:.52,side:Nt,depthWrite:!1}),l=new bt(new Ws(.7,.735,64),o);l.rotation.set(-Math.PI/2,0,Math.atan2(.614,.789)),l.position.y=-.54,l.scale.set(1+(e.length-1)*.85,1,1),l.name="dice-landing-ring",this.group.add(l),this.ring=l,this.materials.push(o),this.update(0)}anchor(e,t=!1){e.updateMatrixWorld();let i=this.anchorPoint.clone().project(e);i.x=0,i.y=t?.28:.6,i.z=Math.max(-.9,i.z-.1),this.group.position.copy(i.unproject(e))}update(e){let t=$t.clamp(e/qc,0,1),i=(1-t)*(1-t),s=1-$t.smoothstep(e,1.35,$c);this.group.scale.setScalar(s*1.25);for(let{die:r,target:a,index:o,offset:l}of this.dice){let c=new ci().setFromEuler(new Ui(i*Math.PI*(4+o),i*Math.PI*(3+o),i*Math.PI*(5+o)));r.quaternion.copy(a).multiply(c);let h=(1-t)*.55,u=Math.sin(t*Math.PI)*(.7+.08*Math.sin(t*18+o));r.position.set((l-h)*.789,u,(-l+h)*.614)}this.ring.material.opacity=.52*(1-$t.smoothstep(e,1.35,$c))}dispose(){for(let e of this.materials)e.dispose();this.ring.geometry.dispose(),this.group.clear()}};function ym(n){n.updateWorldMatrix(!0,!0);let e=new It().setFromObject(n);e.isEmpty()&&e.set(new w(0,n.position.y,0),new w(1,n.position.y+1,1));let t=new Gi(new w(0,-1,0),e.min.y),i=new Map,s=[];n.traverse(a=>{if(!a.isMesh)return;let o=a.material,l=a.userData.effectReveal,c=h=>{if(!i.has(h)){let u=h.clone();u.onBeforeCompile=h.onBeforeCompile.bind(h),u.customProgramCacheKey=h.customProgramCacheKey.bind(h),u.clippingPlanes=[...h.clippingPlanes||[],t],u.clipShadows=!0,i.set(h,u)}return i.get(h)};a.material=Array.isArray(o)?o.map(c):c(o),a.userData.effectReveal=!0,s.push({o:a,original:o,flag:l})});let r=!1;return{bounds:e,plane:t,set(a){t.constant=$t.lerp(e.min.y-.015,e.max.y+.015,$t.clamp(a,0,1))},restore(){if(!r){r=!0;for(let{o:a,original:o,flag:l}of s)a.material=o,l===void 0?delete a.userData.effectReveal:a.userData.effectReveal=l;for(let a of i.values())a.dispose()}}}}function _m(n,e){return!!n&&(n.level!==(e?.level||0)||(n.buildingType||"legacy")!==(e?.buildingType||"legacy"))}var Rn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},x1=new ki(-1,1,1,-1,0,1),ld=class extends ut{constructor(){super(),this.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ne([0,2,0,0,2,0],2))}},y1=new ld,Cn=class{constructor(e){this._mesh=new bt(y1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,x1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Jr=class extends Si{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mi.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Cn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oo=class extends Si{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Yc=class extends Si{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Zc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new K);this._width=i.width,this._height=i.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jr(Rn),this.copyPass.material.blending=zt,this.clock=new $a}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oo!==void 0&&(a instanceof oo?i=!0:a instanceof Yc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jc=class extends Si{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var lo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new K},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new et},cameraProjectionMatrixInverse:{value:new et},cameraWorldMatrix:{value:new et},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new w(-1,-1,-1)},sceneBoxMax:{value:new w(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},co={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},jc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Mm(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=_1(e),i=t.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=t[a],l=2*Math.PI*o/i,c=new w(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new vn(s,e,e);return r.wrapS=Wi,r.wrapT=Wi,r.needsUpdate=!0,r}function _1(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=a++;r++,s--}return i}var ho={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:cd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new K},cameraProjectionMatrixInverse:{value:new et},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function cd(n,e,t){let i=M1(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let a=i[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<n-1?",":")"}`}return s}function M1(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,a=Math.pow(s/(n-1),t);i.push(new w(Math.cos(r),Math.sin(r),a))}return i}var Kc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,v=t-d,m,p;g>v?(m=1,p=0):(m=0,p=1);let y=g-m+h,_=v-p+h,x=g-1+2*h,R=v-1+2*h,A=l&255,C=c&255,D=this.perm[A+this.perm[C]]%12,S=this.perm[A+m+this.perm[C+p]]%12,b=this.perm[A+1+this.perm[C+1]]%12,P=.5-g*g-v*v;P<0?i=0:(P*=P,i=P*P*this._dot(this.grad3[D],g,v));let N=.5-y*y-_*_;N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[S],y,_));let O=.5-x*x-R*R;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[b],x,R)),70*(i+s+r)}noise3d(e,t,i){let s,r,a,o,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(i+c),d=1/6,g=(h+u+f)*d,v=h-g,m=u-g,p=f-g,y=e-v,_=t-m,x=i-p,R,A,C,D,S,b;y>=_?_>=x?(R=1,A=0,C=0,D=1,S=1,b=0):y>=x?(R=1,A=0,C=0,D=1,S=0,b=1):(R=0,A=0,C=1,D=1,S=0,b=1):_<x?(R=0,A=0,C=1,D=0,S=1,b=1):y<x?(R=0,A=1,C=0,D=0,S=1,b=1):(R=0,A=1,C=0,D=1,S=1,b=0);let P=y-R+d,N=_-A+d,O=x-C+d,G=y-D+2*d,F=_-S+2*d,U=x-b+2*d,J=y-1+3*d,W=_-1+3*d,ie=x-1+3*d,ne=h&255,pe=u&255,Ae=f&255,We=this.perm[ne+this.perm[pe+this.perm[Ae]]]%12,st=this.perm[ne+R+this.perm[pe+A+this.perm[Ae+C]]]%12,tt=this.perm[ne+D+this.perm[pe+S+this.perm[Ae+b]]]%12,j=this.perm[ne+1+this.perm[pe+1+this.perm[Ae+1]]]%12,se=.6-y*y-_*_-x*x;se<0?s=0:(se*=se,s=se*se*this._dot3(this.grad3[We],y,_,x));let be=.6-P*P-N*N-O*O;be<0?r=0:(be*=be,r=be*be*this._dot3(this.grad3[st],P,N,O));let Pe=.6-G*G-F*F-U*U;Pe<0?a=0:(Pe*=Pe,a=Pe*Pe*this._dot3(this.grad3[tt],G,F,U));let we=.6-J*J-W*W-ie*ie;return we<0?o=0:(we*=we,o=we*we*this._dot3(this.grad3[j],J,W,ie)),32*(s+r+a+o)}noise4d(e,t,i,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,v=(e+t+i+s)*l,m=Math.floor(e+v),p=Math.floor(t+v),y=Math.floor(i+v),_=Math.floor(s+v),x=(m+p+y+_)*c,R=m-x,A=p-x,C=y-x,D=_-x,S=e-R,b=t-A,P=i-C,N=s-D,O=S>b?32:0,G=S>P?16:0,F=b>P?8:0,U=S>N?4:0,J=b>N?2:0,W=P>N?1:0,ie=O+G+F+U+J+W,ne=a[ie][0]>=3?1:0,pe=a[ie][1]>=3?1:0,Ae=a[ie][2]>=3?1:0,We=a[ie][3]>=3?1:0,st=a[ie][0]>=2?1:0,tt=a[ie][1]>=2?1:0,j=a[ie][2]>=2?1:0,se=a[ie][3]>=2?1:0,be=a[ie][0]>=1?1:0,Pe=a[ie][1]>=1?1:0,we=a[ie][2]>=1?1:0,rt=a[ie][3]>=1?1:0,pt=S-ne+c,I=b-pe+c,oe=P-Ae+c,te=N-We+c,ee=S-st+2*c,Q=b-tt+2*c,ge=P-j+2*c,le=N-se+2*c,ve=S-be+3*c,$e=b-Pe+3*c,Ve=P-we+3*c,T=N-rt+3*c,M=S-1+4*c,H=b-1+4*c,Y=P-1+4*c,ae=N-1+4*c,Z=m&255,Re=p&255,de=y&255,Te=_&255,De=o[Z+o[Re+o[de+o[Te]]]]%32,he=o[Z+ne+o[Re+pe+o[de+Ae+o[Te+We]]]]%32,Se=o[Z+st+o[Re+tt+o[de+j+o[Te+se]]]]%32,He=o[Z+be+o[Re+Pe+o[de+we+o[Te+rt]]]]%32,Fe=o[Z+1+o[Re+1+o[de+1+o[Te+1]]]]%32,xe=.6-S*S-b*b-P*P-N*N;xe<0?h=0:(xe*=xe,h=xe*xe*this._dot4(r[De],S,b,P,N));let Xe=.6-pt*pt-I*I-oe*oe-te*te;Xe<0?u=0:(Xe*=Xe,u=Xe*Xe*this._dot4(r[he],pt,I,oe,te));let L=.6-ee*ee-Q*Q-ge*ge-le*le;L<0?f=0:(L*=L,f=L*L*this._dot4(r[Se],ee,Q,ge,le));let ce=.6-ve*ve-$e*$e-Ve*Ve-T*T;ce<0?d=0:(ce*=ce,d=ce*ce*this._dot4(r[He],ve,$e,Ve,T));let me=.6-M*M-H*H-Y*Y-ae*ae;return me<0?g=0:(me*=me,g=me*me*this._dot4(r[Fe],M,H,Y,ae)),27*(h+u+f+d+g)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}};var uo=class n extends Si{constructor(e,t,i=512,s=512,r,a,o){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Mm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Vt(this.width,this.height,{type:_i}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},lo.defines),uniforms:Mi.clone(lo.uniforms),vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Va,this.normalMaterial.blending=zt,this.pdMaterial=new yt({defines:Object.assign({},ho.defines),uniforms:Mi.clone(ho.uniforms),vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},co.defines),uniforms:Mi.clone(co.uniforms),vertexShader:co.vertexShader,fragmentShader:co.fragmentShader,blending:zt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:Mi.clone(Rn.uniforms),vertexShader:Rn.vertexShader,fragmentShader:Rn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ya,blendDst:Xs,blendEquation:Di,blendSrcAlpha:qa,blendDstAlpha:Xs,blendEquationAlpha:Di}),this.blendMaterial=new yt({uniforms:Mi.clone(jc.uniforms),vertexShader:jc.vertexShader,fragmentShader:jc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Rl,blendSrc:Ya,blendDst:Xs,blendEquation:Di,blendSrcAlpha:qa,blendDstAlpha:Xs,blendEquationAlpha:Di}),this._fsQuad=new Cn(null),this._originalClearColor=new ye,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Vs,this.depthTexture.format=gs,this.depthTexture.type=ms,this.normalRenderTarget=new Vt(this.width,this.height,{minFilter:ni,magFilter:ni,type:_i,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=cd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2||i.isSprite||i.userData.effectReveal)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Kc,i=e*e*4,s=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new vn(s,e,e,Ti,Oi);return r.wrapS=Wi,r.wrapT=Wi,r.needsUpdate=!0,r}};uo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var bm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var jr=class n extends Si{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new K(e.x,e.y):new K(256,256),this.clearColor=new ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:_i}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Vt(r,a,{type:_i});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Vt(r,a,{type:_i});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=bm;this.highPassUniforms=Mi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new K(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mi.clone(Rn.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:Rn.vertexShader,fragmentShader:Rn.fragmentShader,blending:Xa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ye,this._oldClearAlpha=1,this._basic=new Ot,this._fsQuad=new Cn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new K(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};jr.BlurDirectionX=new K(1,0);jr.BlurDirectionY=new K(0,1);var fo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Qc=class extends Si{constructor(){super(),this.uniforms=Mi.clone(fo.uniforms),this.material=new Ha({name:fo.name,uniforms:this.uniforms,vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader}),this._fsQuad=new Cn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ol&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Sm={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new K(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};var eh=class{constructor(e,t,i){this.renderer=e;let s=new en;s.add(new bt(new Qt(30,32,20),new Ot({color:"#a8c0cb",side:Wt})));for(let[a,o,l,c,h]of[[-8,12,9,8,[4.5,3.9,2.9]],[9,8,-7,6,[1.8,2.7,4.2]],[0,16,0,10,[3,3,2.7]]]){let u=new bt(new si(c,c),new Ot({side:Nt,color:new ye().setRGB(...h)}));u.position.set(a,o,l),u.lookAt(0,0,0),s.add(u)}let r=new Wr(e);this.environment=r.fromScene(s,.05),t.environment=this.environment.texture,t.environmentIntensity=.32,r.dispose(),s.traverse(a=>{a.geometry?.dispose(),a.material?.dispose()}),this.composer=new Zc(e),this.composer.addPass(new Jc(t,i)),this.ao=new uo(t,i,1,1),this.ao.blendIntensity=.7,this.ao.updateGtaoMaterial({radius:.62,distanceExponent:1.5,thickness:.6,distanceFallOff:1,scale:1,samples:32,screenSpaceRadius:!1}),this.composer.addPass(this.ao),this.bloom=new jr(new K(1,1),.08,.5,1.2),this.composer.addPass(this.bloom),this.composer.addPass(new Qc),this.fxaa=new Jr(Sm),this.composer.addPass(this.fxaa)}resize(e,t,i){this.composer.setPixelRatio(i),this.composer.setSize(e,t),this.fxaa.uniforms.resolution.value.set(1/(e*i),1/(t*i))}studio(e){this.ao.updateGtaoMaterial({radius:e?.28:.62,thickness:e?.18:.6}),this.ao.blendIntensity=e?.58:.7}render(){this.composer.render()}};var b1=new mn(.13,.13,.13),S1=new Qt(1,24,16),Ai=(n,e)=>{let t=Math.sin(n*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)};function E1(n,e,t,i){return ot(n,e,t,.018,.018,i,12)}function Em(n){let e=new Set;n.traverse(t=>{t.geometry?.type==="TubeGeometry"&&t.geometry.dispose(),t.material&&e.add(t.material)});for(let t of e)t.map?.dispose(),t.dispose()}var th=class{constructor(e,{reduced:t=!1,onDiceState:i=()=>{}}={}){this.parent=e,this.reduced=t,this.onDiceState=i,this.items=[],this.clock=0}anchorDice(e,t){for(let i of this.items)i.dice&&i.dice.anchor(e,t)}get diceRolling(){return this.items.some(e=>e.kind==="dice"&&e.age<qc)}rollDice(e,t,i){if(this.clearDice(),this.reduced)return;let s=new Xc(e,t,i);this.parent.add(s.group),this.items.push({kind:"dice",group:s.group,dice:s,particles:[],age:0,duration:$c,impacted:!1}),this.onDiceState(!0,!1,!0)}clearDice(){for(let e of[...this.items])e.dice&&(this.items.splice(this.items.indexOf(e),1),this.parent.remove(e.group),e.dice.dispose());this.onDiceState(!1,!1,!1)}spawn(e,t,i="#e7c76d",s){if(this.reduced)return;let r=new _e;r.position.copy(t),this.parent.add(r);let a=e==="demolish"?36:e==="build"?24:20,o=[];for(let l=0;l<a;l++){let c=l*2.399963+Ai(l,1)*.8,h=.12+Ai(l,2)*.6,u=e==="dust",f=new Ft({color:u?"#dfd5bb":l%3===0?"#fff1c5":i,transparent:!0,opacity:u?.4:1,roughness:1,depthWrite:!1}),d=Oe(r,u?S1:b1,f,[Math.cos(c)*h,.06+Ai(l,3)*.35,Math.sin(c)*h]);d.castShadow=!1,d.receiveShadow=!1,u?d.scale.setScalar(.14+Ai(l,4)*.2):d.scale.set(.5+Ai(l,4)*1.5,.4+Ai(l,5),.5+Ai(l,6)*1.4),d.rotation.set(Ai(l,7)*3,Ai(l,8)*3,Ai(l,9)*3);let g=(u?.18:.5)+Ai(l,10)*(u?.45:1.3);o.push({m:d,v:new w(Math.cos(c)*g,u?.2+Ai(l,11)*.5:e==="demolish"?-.15+Ai(l,11)*1.25:1.2+Ai(l,11)*1.8,Math.sin(c)*g)})}this.items.push({kind:e,group:r,particles:o,ground:.07-t.y,age:0,duration:s??(e==="dust"?2:1.6)})}transition(e,t,i,{startHeight:s,endHeight:r}={}){if(this.finish(e),this.reduced){t==="remove"&&i?.();return}if(t==="grow"&&e.userData.vacant)return;let a=ym(e),o=e.rotation.clone(),l=Math.max(.001,a.bounds.max.y-a.bounds.min.y),c=f=>$t.clamp((f-a.bounds.min.y)/l,0,1),h=s===void 0?t==="remove"?1:0:c(s),u=r===void 0?t==="remove"?0:1:c(r);a.set(h),this.items.push({kind:t,object:e,reveal:a,baseRotation:o,from:h,to:u,age:0,duration:t==="remove"?1.35:1.6,done:i,baseY:e.position.y,baseScale:e.scale.clone(),lastBurst:0})}construction(e,t=2){if(this.reduced)return;let i=1.04,s=.88,r=e;if(e.isObject3D){e.updateWorldMatrix(!0,!0);let g=new It().setFromObject(e),v=g.getSize(new w);t=Math.max(.8,v.y+.18),i=Math.max(1.04,v.x/2+.12),s=Math.max(.88,v.z/2+.12),r=e.getWorldPosition(new w)}let a=new _e,o=new Ft({color:"#9da9aa",metalness:.65,roughness:.38,transparent:!0,opacity:.88}),l=new Ft({color:"#b9925c",roughness:.9,transparent:!0,opacity:1}),c=new Ft({color:"#dc9544",roughness:.8,transparent:!0,opacity:.38,depthWrite:!1});for(let g of[-i,i])for(let v of[-s,s])E1(a,o,[g,t/2,v],t),$(a,l,[g,.04,v],[.2,.06,.2]);for(let g=.35;g<=t;g+=.5){for(let v of[-s,s])$(a,o,[0,g,v],[i*2,.025,.025]),Qe(a,o,[[-i,g,v],[i,Math.min(g+.5,t),v]],.012);for(let v of[-i,i])$(a,o,[v,g,0],[.025,.025,s*2]);$(a,l,[0,g-.05,-s],[i*2,.035,.22])}for(let g of[-i,i])$(a,c,[g,t*.44,0],[.012,t*.55,s*2]);let h=new _e;h.position.set(i+.12,0,-s),a.add(h),$(h,o,[0,t*.6,0],[.08,t*1.2,.08]);let u=new _e;u.position.y=t*1.2,h.add(u),$(u,o,[-i*.65,0,0],[i*1.9,.06,.08]),$(u,l,[.28,-.08,0],[.33,.2,.25]);let f=new _e;f.position.x=-i*1.2,u.add(f),Qe(f,o,[[0,0,0],[0,-t*.35,0],[.08,-t*.38,0]],.013);let d=$(f,l,[0,-t*.4,0],[.34,.12,.3]);a.position.copy(r),this.parent.add(a),this.items.push({kind:"scaffold",group:a,particles:[],materials:[o,l,c],hook:f,boom:u,load:d,age:0,duration:1.9,height:t})}money(e,t){if(this.reduced||!t)return;let i=document.createElement("canvas");i.width=256,i.height=80;let s=i.getContext("2d");s.font='bold 40px "Microsoft YaHei",sans-serif',s.textAlign="center",s.fillStyle=t>0?"#fce49c":"#ffcab5",s.strokeStyle="#385664",s.lineWidth=5,s.strokeText(`${t>0?"+":""}${t}`,128,53),s.fillText(`${t>0?"+":""}${t}`,128,53);let r=new cs(i);r.colorSpace=Ct;let a=new tn({map:r,transparent:!0,depthTest:!1}),o=new _e,l=new gn(a);l.scale.set(2.2,.7,1),o.add(l),o.position.copy(e),o.position.y+=2,this.parent.add(o),this.items.push({kind:"float",group:o,mat:a,age:0,duration:1.3,particles:[]})}update(e){this.clock+=e;for(let t=this.items.length-1;t>=0;t--){let i=this.items[t];i.age+=e;let s=Math.min(1,i.age/i.duration);if(i.kind==="dice")i.dice.update(i.age),!i.impacted&&i.age>=qc&&(i.impacted=!0,this.onDiceState(!1,!0,!0));else if(i.kind==="float")i.group.position.y+=e*.85,i.mat.opacity=1-s*s;else if(i.kind==="scaffold"){let r=s<.8?1:(1-s)/.2;i.materials.forEach((a,o)=>a.opacity=r*[.88,1,.38][o]),i.boom.rotation.y=Math.sin(s*Math.PI)*.16,i.hook.position.y=Math.sin(s*Math.PI)*i.height*.12,i.hook.rotation.z=Math.sin(s*Math.PI*4)*.04}else if(i.group)for(let{m:r,v:a}of i.particles)r.position.addScaledVector(a,e),i.kind!=="dust"&&(a.y-=e*4.5,r.position.y<i.ground&&(r.position.y=i.ground,a.y=Math.abs(a.y)*.22,a.x*=.72,a.z*=.72)),r.rotation.x+=e*2,r.rotation.z+=e*1.5,r.material.opacity=(1-s)*(i.kind==="dust"?.4:1),i.kind==="dust"&&r.scale.addScalar(e*.2);else if(i.kind==="grow"){let r=1-Math.pow(1-s,1.3);i.reveal.set($t.lerp(i.from,i.to,r))}else if(i.kind==="remove"&&(i.reveal.set($t.lerp(i.from,i.to,s*s)),i.object.rotation.z=i.baseRotation.z+Math.sin(s*Math.PI*8)*(1-s)*.012,s-i.lastBurst>.23&&s<.85)){i.lastBurst=s;let r=i.reveal.bounds,a=r.getCenter(new w);a.y=i.reveal.plane.constant,this.spawn("demolish",a,"#cbb38c",.6)}s===1&&(i.group?(this.parent.remove(i.group),i.dice?(this.onDiceState(!1,!1,!1),i.dice.dispose()):Em(i.group)):(i.reveal?.restore(),i.object.scale.copy(i.baseScale),i.object.position.y=i.baseY,i.object.rotation.copy(i.baseRotation)),this.items.splice(t,1),i.done?.())}}finish(e){for(let t of[...this.items])t.object===e&&(this.items.splice(this.items.indexOf(t),1),t.reveal?.restore(),t.object.scale.copy(t.baseScale),t.object.position.y=t.baseY,t.object.rotation.copy(t.baseRotation),t.done?.())}clear(){this.onDiceState(!1,!1,!1);for(let e of this.items)e.group?(this.parent.remove(e.group),e.dice?(this.onDiceState(!1,!1,!1),e.dice.dispose()):Em(e.group)):(e.reveal?.restore(),e.object.scale.copy(e.baseScale),e.object.position.y=e.baseY,e.object.rotation.copy(e.baseRotation)),e.done?.();this.items=[]}};var ih=class{constructor({pan:e,zoom:t,tap:i,turn:s,isStudio:r=()=>!1}){Object.assign(this,{pan:e,zoom:t,tap:i,turn:s,isStudio:r}),this.points=new Map,this.multi=!1,this.dragged=!1,this.travel=0}down(e,t,i){this.points.size||(this.multi=!1,this.dragged=!1,this.travel=0),this.points.set(e,{x:t,y:i}),this.points.size>1&&(this.multi=!0)}move(e,t,i){let s=this.points.get(e);if(!s)return;let r=[...this.points.values()],a=t-s.x,o=i-s.y;if(this.points.set(e,{x:t,y:i}),this.travel+=Math.hypot(a,o),this.isStudio()){this.travel>6&&(this.dragged=!0,this.turn(a));return}let l=[...this.points.values()];if(l.length===2){let c=f=>Math.hypot(f[0].x-f[1].x,f[0].y-f[1].y),h=c(r),u=c(l);this.dragged=!0,h>1&&u>1&&this.zoom(u/h)}else this.travel>6&&(this.dragged=!0,this.pan(a,o))}up(e,t,i){if(!this.points.has(e))return;let s=this.points.size===1;this.points.delete(e),s&&!this.multi&&!this.dragged&&this.travel<=6&&!this.isStudio()&&this.tap(t,i)}cancel(e){this.points.delete(e),this.multi=!0,this.dragged=!0}};var ud=n=>new w(n.lotX,.14,n.lotZ);function wm(n=1){let e=new Fi;for(let t=0;t<=120;t++){let i=t/120*Math.PI*2,s=1+.06*Math.sin(i*5)+.035*Math.cos(i*3),r=21*n*s*Math.cos(i),a=16.8*n*s*Math.sin(i);t===0?e.moveTo(r,-a):e.lineTo(r,-a)}return e.closePath(),e}function hd(n,e,t,i,s=0){let r=s?new nn(wm(e),{depth:s,bevelEnabled:!1,curveSegments:64}):new Oa(wm(e),64),a=Oe(n,r,i,[0,t,0]);return a.rotation.x=-Math.PI/2,a}function Tm(n){let e=n.tiles,t=n.world,i=Oe(t,new si(240,240),Hu(),[0,-.69,0]);i.rotation.x=-Math.PI/2,hd(t,1,-.5,"#ae9270",.48),hd(t,1.015,-.035,"#ebd69c"),hd(t,.974,.025,"#86ad72");let s=new Set;for(let c of e)for(let h of c.next){let u=e[h],f=[c.id,h].sort((p,y)=>p-y).join(":");if(s.has(f))continue;s.add(f);let d=Math.hypot(u.x-c.x,u.z-c.z),g=Math.atan2(u.x-c.x,u.z-c.z),v=(c.x+u.x)/2,m=(c.z+u.z)/2;for(let[p,y,_]of[[2.12,.07,"#e1cda5"],[1.68,.115,"#667b7b"]]){let x=$(t,_,[v,y,m],[p,.035,d+.1]);x.rotation.y=g}if(d>1.5){let p=$(t,"#e8d6a0",[v,.142,m],[.035,.012,Math.min(.42,d*.3)]);p.rotation.y=g}}for(let c of e){ot(t,"#e1cda5",[c.x,.07,c.z],1.05,1.05,.04,24),ot(t,"#667b7b",[c.x,.115,c.z],.83,.83,.035,24);let h=new _e;h.userData.dynamic=!0,h.position.set(c.x,0,c.z),h.rotation.y=c.yaw,t.add(h);let u=$(h,"#718784",[0,.15,0],[1.6,.025,1.2]);u.userData.tile=c.id,n.tileMeshes.push(u);let f=c.kind==="property"?on[c.group].color:{start:"#f2cd54",bank:"#5f9fc1",hospital:"#e1837b",stock:"#9c8bd1",shop:"#e8a25e",spirit:"#d7b658",event:"#d883a3",rest:"#82b678",tax:"#78b6ae"}[c.kind],d=$(h,f,[0,.2,.52],[1.55,.07,.12]);d.userData.tile=c.id,n.tileMeshes.push(d);let g=Oe(h,new si(.6,.18),new Ot({map:er(String(c.id+1),{width:96,height:48,background:"#718784",color:"#fff3cf"}),depthWrite:!1}),[0,.17,.16]);if(g.rotation.x=-Math.PI/2,c.kind!=="property"){let v=Yp(c);v.position.copy(ud(c)),v.rotation.y=c.facing,v.userData.dynamic=!0,n.tag(v,c.id),t.add(v),n.tileMeshes.push(v);let m={bank:"\u94F6\u884C",hospital:"\u7597\u517B\u9662",stock:"\u8BC1\u5238\u6240",shop:"\u8865\u7ED9\u7AD9",spirit:"\u795E\u6BBF",event:"\u4E8B\u4EF6",rest:"\u5C0F\u7A9D",tax:"\u6E05\u6D01\u7AD9",start:"\u8D77\u70B9"},p={bank:"#477eb5",hospital:"#cc615d",stock:"#7b65b0",shop:"#cf8342",spirit:"#af8535",event:"#ae6686",rest:"#5b8b55",tax:"#558e88",start:"#a18a3c"},y=new gn(new tn({map:er(m[c.kind],{width:192,height:64,background:p[c.kind],color:"#fff4dc"}),depthTest:!1,transparent:!0}));y.position.set(c.x,1.1,c.z),y.scale.set(1.6,.53,1),t.add(y),n.buildingBadges.push(y)}}let r=[];for(let c=0;c<=32;c++){let h=-17+c*34/32;r.push([h,.042,Math.sin(h*.21)*.8])}let a=[],o=[];r.forEach(([c,h,u],f)=>{if(a.push(c,.045,u-.58,c,.045,u+.58),f<r.length-1){let d=f*2;o.push(d,d+1,d+2,d+1,d+3,d+2)}});let l=new ut;l.setAttribute("position",new Ne(a,3)),l.setIndex(o),l.computeVertexNormals(),Oe(t,l,Hu(!0));for(let c of e)for(let h of c.next){let u=e[h],f=c.z-Math.sin(c.x*.21)*.8,d=u.z-Math.sin(u.x*.21)*.8;if(f*d>0||Math.abs(f-d)<.01)continue;let g=f/(f-d),v=c.x+(u.x-c.x)*g,m=c.z+(u.z-c.z)*g,p=new _e,y=1.8;for(let _=0;_<9;_++)$(p,"#d5bb88",[0,.16,-y/2+_*y/8],[1.68,.07,y/8]);for(let _ of[-.8,.8])Qe(p,"#526f65",[[_,.4,-y/2],[_,.5,0],[_,.4,y/2]],.025);p.rotation.y=Math.atan2(u.x-c.x,u.z-c.z),p.position.set(v,0,m),t.add(p)}if(n.tiles[43].next[0]===3){for(let[c,h,u,f]of[["\u6668\u5149\u652F\u8DEF",-8,2,"#728b57"],["\u82B1\u56ED\u652F\u8DEF",8,-2,"#9a7f59"],["\u6EE8\u6CB3\u516C\u56ED",0,3.7,"#5e8b78"]]){let d=new gn(new tn({map:er(c,{width:256,height:72,background:f,color:"#fff5d9"}),transparent:!0,depthTest:!1}));d.position.set(h,.6,u),d.scale.set(2,.56,1),t.add(d)}for(let c of e)for(let h of c.next){let u=e[h],f=u.x-c.x,d=u.z-c.z,g=Math.hypot(f,d),v=c.x+f*.62,m=c.z+d*.62,p=f/g,y=d/g,_=new ut;_.setAttribute("position",new Ne([v+p*.2,.178,m+y*.2,v-p*.13-y*.1,.178,m-y*.13+p*.1,v-p*.13+y*.1,.178,m-y*.13-p*.1],3)),Oe(t,_,new Ot({color:"#efddb1",side:Nt}))}}n.hero=new _e,t.add(n.hero),n.fountain=new _e,ot(n.fountain,"#c0b18a",[0,.14,0],.87,.94,.23),ot(n.fountain,"#8ec5c8",[0,.27,0],.79,.79,.035),ot(n.fountain,"#dfceab",[0,.48,0],.13,.19,.5),n.fountain.position.set(-1,.05,7.5),t.add(n.fountain),n.waterJets=[];for(let c=0;c<6;c++){let h=c/6*Math.PI*2;n.waterJets.push(Qe(n.fountain,"#b9e2df",[[0,.65,0],[Math.cos(h)*.45,1.05,Math.sin(h)*.45],[Math.cos(h)*.65,.3,Math.sin(h)*.65]],.016))}for(let[c,h,u]of[[-8,6,.9],[-6,7,.85],[4,6,1],[7,5,.9],[-7,-6,.9],[-4,-6,.75],[3,-6,.95],[7,-5.5,.8],[-2,7.5,.6],[1,7.5,.6]])e.every(f=>Math.hypot(f.lotX-c,f.lotZ-h)>2&&Math.hypot(f.x-c,f.z-h)>1.6)&&Zp(t,c,h,u);for(let[c,h]of[[-3,6.2],[2,6.6],[-5,-6],[5,-6]]){$(t,"#a18a62",[c,.35,h],[.9,.09,.28]),$(t,"#b79c6d",[c,.57,h-.1],[.9,.3,.05]);for(let u of[-.34,.34])$(t,"#57694f",[c+u,.2,h],[.055,.3,.23])}for(let c of e.filter(h=>h.id%6===2)){let h=(c.lotX-c.x)/2.3,u=(c.lotZ-c.z)/2.3;n.lamp(c.x-h*1.25,c.z-u*1.25)}for(let[c,h]of[[-19,8],[16,-13]]){let u=new _e;Be(u,"#eee4c8",[0,0,0],[1.2,.22,.45]),$(u,"#5c8891",[0,.2,0],[1.25,.3,.55]),$(u,"#fff0cf",[0,.4,0],[1.3,.06,.65]),u.position.set(c,-.47,h),t.add(u),n.floats.push(u)}n.ripples=[];for(let c of[n.fountain,...n.floats,...n.ripples])c.userData.dynamic=!0;$p(n),an(t)}var nh=ud;var sh=class{constructor(e,t,i=wn){this.tiles=i,this.el=e,this.onTile=t,this.follow=!1,this.zoom=1,this.offset=new w,this.quality="",this.paused=!1,this.last=0,this.time=0,this.game=null,this.showcase=null,this.reduced=matchMedia("(prefers-reduced-motion:reduce)").matches,this.scene=new en,this.scene.background=new ye("#b7d3dc"),this.scene.fog=new Os("#b7d3dc",70,130),this.camera=new ki(-19,19,13,-13,.1,180),this.camera.position.set(28,30,36),this.camera.lookAt(0,0,0),this.renderer=new vs({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(Math.max(devicePixelRatio,1.5),2.5)),this.renderer.shadowMap.enabled=!0,this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.type=Al,this.renderer.outputColorSpace=Ct,this.renderer.toneMapping=Mn,this.renderer.toneMappingExposure=.94,e.append(this.renderer.domElement),this.renderer.domElement.addEventListener("webglcontextlost",l=>{l.preventDefault(),this.contextLost=!0,this.paused=!0,e.dispatchEvent(new CustomEvent("renderlost"))}),this.hemi=new Wn("#fff3dc","#6f8e9e",.95),this.scene.add(this.hemi);let s=new yn("#fff2dc",3.2);s.position.set(-10,30,18),s.castShadow=!0,s.shadow.mapSize.set(4096,4096),Object.assign(s.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:.5,far:70}),s.shadow.normalBias=.025,s.shadow.bias=-1e-4,this.scene.add(s),this.sun=s;let r=new yn("#b4d9ef",1);r.position.set(15,8,-10),this.scene.add(r),this.fill=r,this.highQuality=new eh(this.renderer,this.scene,this.camera),this.ray=new $n,this.pointer=new K,this.tileMeshes=[],this.plotMeshes=new Map,this.blockMeshes=new Map,this.pawns=[],this.pickupMeshes=new Map,this.smokestacks=[],this.buildingBadges=[],this.floats=[],this.lights=[],this.pointLights=[],this.lightingKey="",this.world=new _e,this.scene.add(this.world),this.fx=new th(this.world,{reduced:this.reduced,onDiceState:(l,c,h)=>e.dispatchEvent(new CustomEvent("dicerollchange",{detail:{rolling:l,impact:c,active:h}}))}),this.build(),this.turnMarker=Oe(this.world,new Ws(.58,.7,48),new Ot({color:"#ffe289",side:Nt,transparent:!0,opacity:.9,depthWrite:!1}),[0,.23,0]),this.turnMarker.rotation.x=-Math.PI/2,this.turnMarker.castShadow=!1,this.turnMarker.visible=!1,this.selection=new _e;let a=Oe(this.selection,new si(2.05,1.72),new Ot({color:"#ffe189",transparent:!0,opacity:.17,depthWrite:!1,depthTest:!1}),[0,.02,0]);a.rotation.x=-Math.PI/2,a.castShadow=!1,this.selectionPlate=a;let o=[];for(let l of[-1.03,1.03])for(let c of[-.87,.87])o.push(l,.035,c,l-Math.sign(l)*.35,.035,c,l,.035,c,l,.035,c-Math.sign(c)*.35);this.selection.add(new Hs(new ut().setAttribute("position",new Ne(o,3)),new ls({color:"#ffca4f",depthTest:!1}))),this.selectionLabel=new gn(new tn({transparent:!0,depthTest:!1,depthWrite:!1})),this.selectionLabel.scale.set(3.1,.65,1),this.selectionLabel.position.y=.65,this.selection.add(this.selectionLabel),this.selection.visible=!1,this.selection.renderOrder=4,this.world.add(this.selection),this.controls(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize(),this.animate=this.animate.bind(this),this.raf=requestAnimationFrame(this.animate)}setMap(e){this.leaveStudio(),this.fx.clear(),this.world.remove(this.selection,this.turnMarker),bi(this.world),this.world.clear(),this.tiles=e,this.game=null,this.rollState=null,this.lastMoney=null,this.tileMeshes=[],this.plotMeshes.clear(),this.blockMeshes.clear(),this.pawns=[],this.pickupMeshes.clear(),this.smokestacks=[],this.buildingBadges=[],this.floats=[],this.lights=[],this.pointLights=[],this.lightingKey="",this.build(),this.world.add(this.selection,this.turnMarker),this.clearSelection(),this.home()}build(){Tm(this)}tag(e,t){e.traverse(i=>{i.isMesh&&(i.userData.tile=t)})}lamp(e,t){let i=new _e;ot(i,"#4e6366",[0,.95,0],.028,.05,1.5),$(i,"#597375",[0,1.72,0],[.23,.09,.23]);let s=$(i,"#ffe8a8",[0,1.59,0],[.15,.23,.15]);i.position.set(e,.2,t),this.world.add(i),this.lights.push(s);let r=new Wa("#ffc779",0,4.5,2);r.position.set(0,1.5,0),i.add(r),this.pointLights.push(r)}sync(e){this.tiles!==e.tiles&&this.setMap(e.tiles);let t=this.game!==e;this.game=e;let i=e.s;if(this.selectionMode==="nav"&&this.navTurn!==`${i.round}:${i.current}`&&this.clearSelection(),t){for(;this.pawns.length>i.players.length;){let s=this.pawns.pop();this.world.remove(s),bi(s)}this.clearSelection(),this.fx.clear();for(let s of this.plotMeshes.values())this.world.remove(s.model),bi(s.model);this.plotMeshes.clear();for(let s of this.blockMeshes.values())this.world.remove(s),bi(s);this.blockMeshes.clear()}for(let s of i.players){let r=this.pawns[s.id];if(!r||r.userData.id!==s.character){r&&(this.world.remove(r),bi(r)),r=Xr(s.character),r.scale.setScalar(.56);let a=this.tiles[s.pos];r.position.set(a.x,.24,a.z),this.world.add(r),this.pawns[s.id]=r}if(t){let a=this.tiles[s.pos];r.position.set(a.x+(s.id-(i.players.length-1)/2)*.4,.24,a.z-.15+s.id%2*.22),r.rotation.y=.45,r.scale.setScalar(s.alive?.56:.001)}if(!t&&this.lastMoney?.[s.id]!==void 0&&this.lastMoney[s.id]!==s.money&&this.fx.money(r.position,s.money-this.lastMoney[s.id]),r.userData.vehicleId!==s.vehicle){let a=r.getObjectByName("vehicle");if(a&&(r.remove(a),bi(a)),s.vehicle){let o=zp(s.vehicle);o.position.y=-.1,r.add(o)}r.userData.vehicleId=s.vehicle,r.userData.body.position.y=s.vehicle?.3:0}}for(let s of this.tiles.filter(r=>r.kind==="property")){let r=i.ownership[s.id],a=r?`${r.player}:${r.level}:${r.buildingType||"legacy"}`:"empty",o=this.plotMeshes.get(s.id);if(o?.signature===a)continue;let l=r?ri.find(h=>h.id===i.players[r.player].character).estateColor:"#acb18d",c=ir({...s,buildingType:r?.buildingType},r?.level||0,l,!!r);if(c.position.copy(nh(s)),c.rotation.y=s.facing,this.tag(c,s.id),this.world.add(c),r&&(ot(c,"#587070",[.85,.5,-.6],.018,.018,.85,8),$(c,l,[.98,.81,-.6],[.28,.17,.025])),o){let h=o.model;this.fx.finish(h);let u=()=>{this.world.remove(h),bi(h)};if(!t&&_m(o,r)){let f=!r||r.level<o.level;if(this.fx.spawn(f?"demolish":"build",h.position,l),this.fx.spawn("dust",h.position),f){c.visible=this.reduced||!r?.level;let d=r?.level?new It().setFromObject(c).max.y:void 0;this.fx.transition(h,"remove",()=>{u(),c.visible=!0},{endHeight:d})}else{let d=o.level>0&&o.buildingType===(r?.buildingType||"legacy")?new It().setFromObject(h).max.y:void 0;u(),this.fx.transition(c,"grow",void 0,{startHeight:d}),r?.level>0&&this.fx.construction(c)}}else u()}this.plotMeshes.set(s.id,{model:c,signature:a,level:r?.level||0,buildingType:r?.buildingType||"legacy"})}for(let[s]of Object.entries(i.blocks))if(!this.blockMeshes.has(s)){let r=this.tiles[s],a=new _e;for(let o of[-.4,.4])$(a,"#f4dcac",[o,.45,0],[.07,.55,.07]);$(a,"#c76f51",[0,.6,0],[1.15,.19,.13]);for(let o of[-.4,0,.4]){let l=$(a,"#f1dfb1",[o,.61,.07],[.15,.2,.02]);l.rotation.z=-.35}a.position.set(r.x,.2,r.z),this.world.add(a),this.blockMeshes.set(s,a),this.fx.spawn("build",a.position,"#d7b871")}for(let[s,r]of this.blockMeshes)i.blocks[s]===void 0&&(this.world.remove(r),this.blockMeshes.delete(s),this.fx.spawn("demolish",r.position,"#c77956"),bi(r));for(let s of qr){let r=this.pickupMeshes.get(s);if(!r){r=new _e,ot(r,"#f7cc54",[0,.58,0],.24,.24,.08,32).rotation.x=Math.PI/2;let a=Dt(r,"10",[0,.58,.05],.38,.23,{background:"#f7cc54",color:"#80551f",width:96,height:64});r.position.set(this.tiles[s].x,.24,this.tiles[s].z),this.world.add(r),this.pickupMeshes.set(s,r)}r.visible=i.pickups?.[s]===void 0}this.setQuality(i.options.quality),this.applyLighting(i.options.lighting),!t&&xm(this.rollState,i)&&this.fx.rollDice(i.dice,this.pawns[i.current].position,e.char().estateColor),this.rollState={phase:i.phase,current:i.current,round:i.round},this.lastMoney=i.players.map(s=>s.money)}applyLighting(e){this.worldLighting=Dn(e);let t=this.studio?"studio":this.worldLighting;if(this.lightingKey===t)return;this.lightingKey=t;let i=dn[this.studio?"day":t];this.hemi.color.set(i.hemi),this.hemi.groundColor.set(i.ground),this.hemi.intensity=i.ambient,this.sun.color.set(i.sun),this.sun.intensity=i.power,this.sun.position.set(...i.position),this.fill.color.set(i.fill),this.fill.intensity=i.fillPower,this.scene.environmentIntensity=i.environment,this.renderer.toneMappingExposure=i.exposure,this.highQuality.bloom.strength=i.bloom,this.highQuality.bloom.threshold=i.threshold,this.scene.background.set(this.studio?"#dedccc":i.sky),this.scene.fog.color.copy(this.scene.background);for(let s of this.pointLights)s.intensity=this.studio?0:i.lamps;for(let s of this.lights)s.material.emissiveIntensity=.55+i.lamps*.25;Sp(this.studio?"day":t)}setQuality(e){this.quality!==e&&(this.quality=e,this.renderer.setPixelRatio(e==="low"?1:Math.min(Math.max(devicePixelRatio,1.5),2.5)),this.renderer.shadowMap.enabled=e!=="low",this.sun.shadow.mapSize.set(e==="low"?512:4096,e==="low"?512:4096),this.highQuality?.resize(this.el.clientWidth,this.el.clientHeight,this.renderer.getPixelRatio()))}resize(){let e=this.el.clientWidth,t=this.el.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.highQuality?.resize(e,t,this.renderer.getPixelRatio()),this.aspect=e/t,this.follow&&(this.followZoom=this.aspect<.8?2.6:this.aspect>1.9?1.7:1.45),this.updateCamera(),this.paused&&this.renderStill())}updateCamera(){let e=this.studio?Math.max(2.3,1.95/this.aspect)/this.studio.zoom:Math.max(13.8,23/this.aspect)/this.zoom;this.camera.left=-e*this.aspect,this.camera.right=e*this.aspect,this.camera.top=e,this.camera.bottom=-e,this.camera.updateProjectionMatrix(),this.studio?(this.camera.position.set(3.4,2.3,7),this.camera.lookAt(0,1.55,0)):(this.camera.position.set(28+this.offset.x,30,36+this.offset.z),this.camera.lookAt(this.offset.x,0,this.offset.z))}selectTile(e,t="inspect"){let i=this.tiles[e];i&&(this.selectedTile=e,this.selectionMode=t,this.navTurn=this.game?`${this.game.s.round}:${this.game.s.current}`:"",this.selection.visible=!0,this.selection.position.copy(i.kind==="property"?nh(i):new w(i.x,.23,i.z)),this.selection.rotation.y=i.facing,this.selection.scale.set(i.kind==="property"?1:.8,1,i.kind==="property"?1:.72),this.selectionPlate.material.color.set(t==="buy"?"#ffd65a":"#fff0a8"),this.selectionLabel.material.map?.dispose(),this.selectionLabel.material.map=er(t==="buy"?`\u5F85\u552E \xB7 ${i.price} \u5976\u5E01`:i.name,{background:t==="buy"?"#ffdfa0":"#fff0cb",color:"#674324",width:320,height:72}),this.selectionLabel.material.needsUpdate=!0,this.el.dataset.selectedTile=String(e))}clearSelection(){this.selectedTile=null,this.selection.visible=!1,delete this.el.dataset.selectedTile}focusTile(e){!this.tiles[e]||this.studio||(this.follow=!1,this.focusTarget=this.tiles[e].kind==="property"?nh(this.tiles[e]):new w(this.tiles[e].x,0,this.tiles[e].z),this.focusTarget.y=0,this.focusZoom=this.aspect<.8?2.6:2.1,this.selectTile(e,"nav"),this.cameraChanged())}isMoving(){return!this.game||this.studio?!1:this.game.s.players.some(e=>{let t=this.tiles[e.pos],i=this.pawns[e.id];return i&&Math.hypot(i.position.x-(t.x+(e.id-(this.game.s.players.length-1)/2)*.4),i.position.z-(t.z-.15+e.id%2*.22))>.075})}drawFrame(){this.fx.anchorDice(this.camera,this.aspect<.8),this.renderer.info.autoReset=!1,this.renderer.info.reset(),this.quality==="low"?this.renderer.render(this.scene,this.camera):this.highQuality.render()}renderStill(){!this.contextLost&&!this.renderer.getContext().isContextLost()&&(this.updateCamera(),this.drawFrame())}cameraChanged(){this.el.dispatchEvent(new CustomEvent("camerachange",{detail:{follow:this.follow}}))}zoomBy(e){this.studio?this.studio.zoom=Math.max(.65,Math.min(2.5,this.studio.zoom*e)):(this.zoom=Math.max(.65,Math.min(3.3,this.zoom*e)),this.followZoom=this.zoom),this.updateCamera()}controls(){let e=this.renderer.domElement;e.style.touchAction="none",this.gestures=new ih({isStudio:()=>!!this.studio,turn:t=>{this.studio.yaw+=t*.012,this.studio.manual=!0},zoom:t=>this.zoomBy(t),pan:(t,i)=>{this.follow=!1,this.focusTarget=null;let s=(this.camera.top-this.camera.bottom)/Math.max(1,e.clientHeight);this.offset.x=Math.max(-25,Math.min(25,this.offset.x-(t*.789+i*1.118)*s)),this.offset.z=Math.max(-22,Math.min(22,this.offset.z+(t*.614-i*1.437)*s)),this.updateCamera(),this.cameraChanged()},tap:(t,i)=>{this.pointer.set(t/e.clientWidth*2-1,-i/e.clientHeight*2+1),this.ray.setFromCamera(this.pointer,this.camera);let s=[...this.tileMeshes,...[...this.plotMeshes.values()].map(a=>a.model)],r=this.ray.intersectObjects(s,!0).find(a=>Number.isInteger(a.object.userData.tile));r&&this.onTile(r.object.userData.tile)}}),e.addEventListener("pointerdown",t=>{let i=Vc(t.clientX,t.clientY,e);this.gestures.down(t.pointerId,i.x,i.y),e.setPointerCapture(t.pointerId)}),e.addEventListener("pointermove",t=>{let i=Vc(t.clientX,t.clientY,e);this.gestures.move(t.pointerId,i.x,i.y)}),e.addEventListener("pointerup",t=>{let i=Vc(t.clientX,t.clientY,e);this.gestures.up(t.pointerId,i.x,i.y)});for(let t of["pointercancel","lostpointercapture"])e.addEventListener(t,i=>this.gestures.cancel(i.pointerId));e.addEventListener("wheel",t=>{t.preventDefault(),this.zoomBy(t.deltaY<0?1.1:.91)},{passive:!1})}followPlayer(){this.clearSelection(),this.follow=!0,this.focusTarget=null,this.endPreview(),this.followZoom=this.aspect<.8?2.6:this.aspect>1.9?1.7:1.45,this.cameraChanged()}home(){this.clearSelection(),this.follow=!1,this.focusTarget=null,this.endPreview(),this.offset.set(0,0,0),this.zoom=1,this.updateCamera(),this.cameraChanged()}focusLot(e){!this.tiles[e]||this.studio||(this.follow=!1,this.focusTarget=nh(this.tiles[e]).multiplyScalar(.9),this.focusTarget.y=0,this.focusZoom=2.1,this.cameraChanged())}previewCharacter(){this.endPreview()}endPreview(){this.showcase&&(this.world.remove(this.showcase),bi(this.showcase),this.showcase=null),this.hero.visible=!0}enterStudio(e){this.studio&&this.leaveStudio();let t=new _e,i=Xr(e);t.add(i),i.position.y=.15,ot(t,"#c7bfa5",[0,.04,0],1.2,1.3,.14,64);let s=Oe(t,new si(240,240),"#dfd9c7",[0,-.05,0]);s.rotation.x=-Math.PI/2,this.scene.add(t),this.studio={root:t,model:i,yaw:.3,zoom:1,mode:"idle",manual:!1},this.highQuality.studio(!0),this.sun.shadow.camera.left=this.sun.shadow.camera.bottom=-5,this.sun.shadow.camera.right=this.sun.shadow.camera.top=5,this.sun.shadow.camera.updateProjectionMatrix(),this.world.visible=!1,this.scene.fog=new Os("#dedccc",18,50),this.scene.background.set("#dedccc"),this.applyLighting(this.worldLighting),this.updateCamera()}leaveStudio(){this.studio&&(this.scene.remove(this.studio.root),bi(this.studio.root),this.studio=null,this.highQuality.studio(!1),this.sun.shadow.camera.left=this.sun.shadow.camera.bottom=-26,this.sun.shadow.camera.right=this.sun.shadow.camera.top=26,this.sun.shadow.camera.updateProjectionMatrix(),this.world.visible=!0,this.scene.fog=new Os("#b7d3dc",70,130),this.scene.background.set("#b7d3dc"),this.applyLighting(this.worldLighting),this.updateCamera())}animate(e){if(this.raf=requestAnimationFrame(this.animate),document.hidden||this.paused||e-this.last<16)return;let t=Math.min(.06,(e-this.last)/1e3||.033);this.last=e,this.time+=t;let i=this.time;if(wp(this.reduced?0:i,this.camera),this.fx.update(t),this.selection.visible&&(this.selectionPlate.material.opacity=this.reduced?.23:.22+Math.sin(i*3)*.06),this.studio){let s=this.studio;s.model.rotation.y=s.yaw+(s.manual?0:Math.sin(i*.25)*.25),no(s.model,{time:i,moving:s.mode==="walk",mood:s.mode==="laugh"?"happy":null}),this.drawFrame();return}if(this.focusTarget){let s=this.reduced?1:1-Math.exp(-3.2*t);this.offset.lerp(this.focusTarget,s),this.zoom+=(this.focusZoom-this.zoom)*s,this.updateCamera(),this.offset.distanceTo(this.focusTarget)<.02&&(this.focusTarget=null)}if(this.game){let s=this.game.s;for(let a of s.players){let o=this.pawns[a.id],l=this.tiles[a.pos],c=new w(l.x+(a.id-(s.players.length-1)/2)*.4,.24,l.z-.15+a.id%2*.22),h=a.alive?.56:.001;o.scale.lerp(new w(h,h,h),1-Math.exp(-5*t)),o.visible=o.scale.x>.015;let u=o.position.distanceTo(c)>.06;if(u){let f=c.clone().sub(o.position);o.rotation.y=Math.atan2(f.x,f.z),o.position.lerp(c,this.reduced?1:1-Math.exp(-8*t)),o.position.y=this.reduced?.24:.24+Math.abs(Math.sin(i*14))*.065}else o.position.copy(c),o.rotation.y+=(.45-o.rotation.y)*.04;no(o,{time:i+a.id,moving:u,mood:s.current===a.id&&s.phase==="event"?s.notice?.mood:this.actionMood?.player===a.id&&this.actionMood.until>performance.now()?this.actionMood.mood:null,alive:a.alive})}let r=this.pawns[s.current];this.turnMarker.visible=!!r&&!this.showcase&&s.phase!=="finished",r&&(this.turnMarker.position.set(r.position.x,.23,r.position.z),this.turnMarker.material.color.set(ri.find(a=>a.id===s.players[s.current].character).color),this.turnMarker.scale.setScalar(this.reduced?1:1+Math.sin(i*4)*.08)),this.follow&&r&&(this.offset.lerp(new w(r.position.x,0,r.position.z),this.reduced?1:1-Math.exp(-2.2*t)),this.zoom+=(this.followZoom-this.zoom)*(this.reduced?1:1-Math.exp(-2.2*t)),this.updateCamera())}for(let[s,r]of this.pickupMeshes)r.position.y=this.reduced?.24:.24+Math.sin(i*2+s)*.055;for(let s of this.buildingBadges)s.visible=this.zoom>1.3&&!this.showcase;if(no(this.hero,{time:i,mood:this.game?.s.phase==="event"?this.game.s.notice?.mood:null}),this.showcase&&(no(this.showcase,{time:i}),this.showcase.rotation.y=.3+Math.sin(i*.4)*.18),!this.reduced){for(let[s,r]of this.floats.entries())r.position.y=-.45+Math.sin(i*1.1+s)*.035,r.rotation.z=Math.sin(i+s)*.015;for(let[s,r]of this.ripples.entries())r.scale.x=1+Math.sin(i*.8+s)*.08;for(let[s,r]of this.waterJets.entries())r.scale.y=1+Math.sin(i*3+s)*.035;if(Math.floor(i*2)!==this.lastSmoke&&(this.lastSmoke=Math.floor(i*2),this.quality!=="low"))for(let s of this.smokestacks)this.fx.spawn("dust",new w(s.x,s.y,s.z),"#d3d3c2")}this.drawFrame(),this.el.dataset.drawCalls=String(this.renderer.info.render.calls),this.el.dataset.triangles=String(this.renderer.info.render.triangles),this.el.dataset.effects=String(this.fx.items.length)}};var Kr={ode:{name:"\u5976\u5BB6\u6B22\u4E50\u9882",credit:"\u8D1D\u591A\u82AC\u300A\u6B22\u4E50\u9882\u300B\u65CB\u5F8B \xB7 \u672C\u4F5C\u5668\u4E50\u6539\u7F16",bpm:112},town:{name:"\u5976\u5BB6\u6F2B\u6E38",credit:"\u672C\u4F5C\u539F\u521B\u8F7B\u5FEB\u5C0F\u9547\u914D\u4E50",bpm:104}},Am={music:!0,musicVolume:.32,effectsVolume:.68,voice:!0,voiceVolume:.65,track:"ode"};function Ts(n={}){let e={...Am,...n};for(let t of["musicVolume","effectsVolume","voiceVolume"])e[t]=Number.isFinite(e[t])?Math.max(0,Math.min(1,e[t])):Am[t];return Kr[e.track]||(e.track="ode"),e}var w1=[[64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[64,1.5],[62,.5],[62,2],[64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[62,1.5],[60,.5],[60,2],[62,1],[62,1],[64,1],[60,1],[62,1],[64,.5],[65,.5],[64,1],[60,1],[62,1],[64,.5],[65,.5],[64,1],[62,1],[60,1],[62,1],[67,2],[64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[62,1.5],[60,.5],[60,2]],T1=[[67,.5],[72,.5],[76,1],[74,.5],[72,.5],[69,1],[67,.5],[64,.5],[67,1],[65,1],[64,1],[62,.5],[65,.5],[69,1],[67,.5],[65,.5],[64,1],[62,1],[60,1],[64,1],[67,1],[69,.5],[72,.5],[76,1],[74,1],[72,1],[71,.5],[69,.5],[67,1],[64,1],[62,1],[60,2]],Rm=n=>{let e=0;return{events:n.map(([t,i])=>{let s={note:t,duration:i,beat:e};return e+=i,s}),length:e}},Cm={ode:Rm(w1),town:Rm(T1)},Pm=n=>440*2**((n-69)/12),rh=class{constructor(e={}){this.options=Ts(e),this.ctx=null,this.timer=null,this.beat=0,this.nextTime=0,this.voices=new Set,this.lastVoice=-10,this.unlocked=!1,this.hidden=!1,this.failed=!1,this.layers=[],this.loopCount=0}async unlock(){if(!this.ctx)try{let e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.82;let t=this.ctx.createDynamicsCompressor();t.threshold.value=-15,t.ratio.value=5,this.master.connect(t),t.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.fxGain=this.ctx.createGain(),this.voiceGain=this.ctx.createGain();for(let s of[this.musicGain,this.fxGain,this.voiceGain])s.connect(this.master);this.noise=this.ctx.createBuffer(1,Math.ceil(this.ctx.sampleRate*.22),this.ctx.sampleRate);let i=this.noise.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=(Math.random()*2-1)*(1-s/i.length);this.loadLaugh()}catch{this.failed=!0;return}try{await this.ctx.resume(),this.unlocked=!0,this.apply()}catch{this.failed=!0}}async loadLaugh(){try{let e=globalThis.__NAIWA_LAUGH_DATA__||"./audio/naiwa-laugh-excerpt.mp3",t=await fetch(e);if(!t.ok)return;this.laughBuffer=await this.ctx.decodeAudioData(await t.arrayBuffer())}catch{this.laughBuffer=null}}setOptions(e){let t=Ts(e),i=t.track!==this.options.track;JSON.stringify(t)!==JSON.stringify(this.options)&&(this.options=t,i&&this.timer&&this.transitionTrack(t.track),this.apply())}apply(){if(!this.ctx)return;let e=this.options.sound!==!1&&!this.hidden,t=this.ctx.currentTime;if(this.fade(this.master.gain,e?.82:0,t,.6),this.fade(this.musicGain.gain,this.options.music?this.options.musicVolume*.65:0,t,.9),this.fxGain.gain.setTargetAtTime(this.options.effectsVolume*.7,t,.04),this.voiceGain.gain.setTargetAtTime(this.options.voiceVolume*.72,t,.04),e&&this.options.music&&this.unlocked?this.startMusic():this.stopMusic(),!e||!this.options.voice)for(let i of this.voices)try{i.stop()}catch{}}visibility(e){this.hidden=e,this.apply(),e?this.ctx?.suspend():this.unlocked&&this.ctx?.resume().then(()=>this.apply()).catch(()=>{})}fade(e,t,i,s=.8){e.cancelAndHoldAtTime?e.cancelAndHoldAtTime(i):(e.cancelScheduledValues?.(i),e.setValueAtTime?.(e.value,i)),e.linearRampToValueAtTime?.(t,i+s)}createLayer(e,t,i=1.6){let s=this.ctx.createGain(),r=Cm[e].length*60/Kr[e].bpm,a=2;s.connect(this.musicGain),s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(1,t+i),s.gain.setValueAtTime(1,t+r-a),s.gain.linearRampToValueAtTime(0,t+r);let o={track:e,gain:s,beat:0,next:t,start:t,end:t+r,nextLoop:t+r-a,spawned:!1};return this.layers.push(o),o}transitionTrack(e){let t=this.ctx.currentTime;for(let i of this.layers)this.fade(i.gain.gain,0,t,1.8),i.end=Math.min(i.end,t+1.8),i.spawned=!0;this.createLayer(e,t+.04,1.8)}scheduleMusic(e=this.ctx.currentTime){let t=e+.22;for(let i of[...this.layers])!i.spawned&&t>=i.nextLoop&&(i.spawned=!0,this.loopCount++,this.createLayer(i.track,i.nextLoop,2));for(let i of this.layers){let s=60/Kr[i.track].bpm,r=Cm[i.track];for(;i.next<t&&i.next<i.end;){let a=i.beat%r.length,o=r.events.find(f=>Math.abs(f.beat-a)<.01);o&&this.note(o.note,i.next,o.duration*s*.96,.105,"flute",i.gain);let l=Math.floor(a/4),c=Math.round(a*2)%8,h=[[48,52,55],[43,47,50],[41,45,48],[43,47,53]],u=h[[0,1,0,1,2,0,1,0,1,0,1,1,0,1,2,0][l%16]];c%4===0&&this.note(u[0]-12,i.next,s*.9,.09,"bass",i.gain),this.note(u[c%3]+12,i.next,s*.5,.045,"pluck",i.gain),c%2===1&&this.hiss(i.next,.025,.012,i.gain,4600),i.beat+=.5,i.next+=s*.5}}this.layers=this.layers.filter(i=>e>i.end+1.2?(i.gain.disconnect?.(),!1):!0)}startMusic(){this.timer||!this.ctx||(this.createLayer(this.options.track,this.ctx.currentTime+.06),this.scheduleMusic(),this.timer=setInterval(()=>{this.ctx&&!this.hidden&&this.scheduleMusic()},70))}stopMusic(){this.timer&&clearInterval(this.timer),this.timer=null;for(let e of this.layers){this.fade(e.gain.gain,0,this.ctx.currentTime,.35);let t=e.gain;setTimeout(()=>{try{t.disconnect?.()}catch{}},500)}this.layers=[]}note(e,t,i,s,r="pluck",a=this.fxGain){if(!this.ctx||!a)return;let o=this.ctx,l=o.createOscillator(),c=o.createGain(),h=o.createBiquadFilter();if(l.type=r==="bass"?"triangle":r==="flute"?"sine":"triangle",l.frequency.value=Pm(e),h.type="lowpass",h.frequency.value=r==="bass"?500:r==="flute"?2400:1700,l.connect(h),h.connect(c),c.connect(a),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),t+(r==="flute"?.045:.008)),c.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(.07,i)),l.start(t),l.stop(t+Math.max(.1,i)+.03),r==="flute"){let u=o.createOscillator(),f=o.createGain();u.type="sine",u.frequency.value=Pm(e)*2,f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(s*.18,t+.04),f.gain.linearRampToValueAtTime(0,t+i),u.connect(f),f.connect(a),u.start(t),u.stop(t+i+.03)}}hiss(e,t,i,s=this.fxGain,r=1800){if(!this.ctx||!this.noise)return;let a=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),l=this.ctx.createGain();a.buffer=this.noise,o.type="highpass",o.frequency.value=r,l.gain.setValueAtTime(i,e),l.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(o),o.connect(l),l.connect(s),a.start(e),a.stop(e+t)}sfx(e="tap"){if(!this.ctx||!this.unlocked||this.hidden||this.options.sound===!1)return;let t=this.ctx.currentTime;if(e==="laugh"||e==="happy"){this.laugh();return}if(e==="roll"){for(let s=0;s<7;s++)this.hiss(t+s*.035,.035,.09,this.fxGain,600),this.note(45+s%3*3,t+s*.035,.045,.045);return}if(e==="diceLand"){this.hiss(t,.045,.07,this.fxGain,700),this.note(48,t,.08,.055);return}if(e==="step"){this.hiss(t,.033,.035,this.fxGain,800),this.note(43,t,.045,.02,"bass");return}if(e==="build"){for(let s=0;s<4;s++)this.note(48+s*5,t+s*.1,.1,.06),this.hiss(t+s*.1,.035,.07,this.fxGain,1200);return}if(e==="demolish"){this.hiss(t,.2,.17,this.fxGain,200),this.note(35,t,.28,.1,"bass");return}let i={tap:[76],coin:[79,84],sad:[62,58,53],magic:[72,76,79,84],win:[72,76,79,84,79,84]};(i[e]||i.tap).forEach((s,r)=>this.note(s,t+r*.085,e==="tap"?.08:.19,e==="tap"?.055:.085)),e==="win"&&setTimeout(()=>this.laugh(),500)}laugh(){if(!this.ctx||!this.options.voice||this.options.sound===!1||this.hidden||!this.laughBuffer||this.ctx.currentTime-this.lastVoice<4)return;this.lastVoice=this.ctx.currentTime;let e=this.ctx.createBufferSource();e.buffer=this.laughBuffer,e.connect(this.voiceGain),this.voices.add(e),e.onended=()=>this.voices.delete(e),e.start();let t=this.ctx.currentTime,i=this.musicGain.gain;i.cancelAndHoldAtTime?i.cancelAndHoldAtTime(t):i.cancelScheduledValues(t),i.linearRampToValueAtTime(this.options.music?this.options.musicVolume*.2:0,t+.16),i.setValueAtTime(this.options.music?this.options.musicVolume*.2:0,t+1.05),i.linearRampToValueAtTime(this.options.music?this.options.musicVolume*.65:0,t+1.9)}status(){return this.failed?"\u97F3\u9891\u4E0D\u53EF\u7528":this.unlocked?this.options.sound===!1?"\u5168\u90E8\u9759\u97F3":this.hidden?"\u5DF2\u6682\u505C":this.options.music?"\u6B63\u5728\u64AD\u653E \xB7 "+Kr[this.options.track].name:"\u97F3\u4E50\u5DF2\u5173\u95ED":"\u70B9\u51FB\u540E\u542F\u7528\u58F0\u97F3"}dispose(){this.stopMusic();for(let e of this.voices)try{e.stop()}catch{}this.ctx?.close()}};var Im="naiwa-monopoly-preferences-v1";function dd(n={}){let e=n&&typeof n=="object"&&!Array.isArray(n)?n:{},t=Ts(e);return{sound:typeof e.sound=="boolean"?e.sound:!0,speed:[1,2,4].includes(e.speed)?e.speed:1,quality:["auto","low"].includes(e.quality)?e.quality:"auto",lighting:["day","golden","night"].includes(e.lighting)?e.lighting:"day",music:typeof t.music=="boolean"?t.music:!0,musicVolume:t.musicVolume,effectsVolume:t.effectsVolume,voice:typeof t.voice=="boolean"?t.voice:!0,voiceVolume:t.voiceVolume,track:t.track}}function Dm(n,e={}){try{let t=n.getItem(Im);if(t){let i=JSON.parse(t);if(i&&typeof i=="object"&&!Array.isArray(i))return dd({...e,...i})}}catch{}return dd(e)}function Lm(n,e){try{return n.setItem(Im,JSON.stringify(dd(e))),!0}catch{return!1}}var Um=new WeakMap;function lr(n,e=di){Array.isArray(e)||(e=di);let t=Um.get(e);return t||(t={minX:Math.min(...e.map(i=>i.x))-1,maxX:Math.max(...e.map(i=>i.x))+1,minZ:Math.min(...e.map(i=>i.z))-1,maxZ:Math.max(...e.map(i=>i.z))+1},Um.set(e,t)),{x:12+(n.x-t.minX)*336/(t.maxX-t.minX),y:12+(n.z-t.minZ)*226/(t.maxZ-t.minZ)}}function fd(n=di){return n.flatMap(e=>e.next.map(t=>({from:e.id,to:t,a:lr(e,n),b:lr(n[t],n)})))}function Nm(n,e){return e==="Home"?0:e==="End"?di.length-1:["ArrowRight","ArrowDown"].includes(e)?(n+1)%di.length:["ArrowLeft","ArrowUp"].includes(e)?(n+di.length-1)%di.length:n}var Fm=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ah=class{constructor(e,{jump:t,inspect:i}){this.tiles=wn,this.root=e,this.jump=t,this.inspect=i,this.selected=0,this.followSelection=!0,this.lastTurn="";let s=matchMedia("(min-width:1000px) and (min-height:650px)");this.expanded=s.matches,this.touched=!1;let r=fd(this.tiles).map(o=>`M${o.a.x},${o.a.y}L${o.b.x},${o.b.y}`).join(" ");e.innerHTML=`<button class="mini-toggle" aria-expanded="${this.expanded}" aria-controls="miniBody"><span>\u25C8 \u5168\u5C9B\u5730\u56FE</span><span class="mini-chevron">${this.expanded?"\u2212":"+"}</span></button><div id="miniBody" ${this.expanded?"":"hidden"}><svg class="mini-svg" role="group" viewBox="0 0 360 250" aria-label="\u5168\u5C9B\u8DEF\u7EBF\uFF0C\u53EF\u7528\u65B9\u5411\u952E\u9009\u62E9\u5730\u5757\uFF0C\u56DE\u8F66\u5B9A\u4F4D"><rect width="360" height="250" rx="14" fill="#b6cd9c"/><rect x="48" y="116" width="264" height="18" rx="8" fill="#81afb2"/><path d="${r}" stroke="#eee0b7" stroke-width="19" fill="none" stroke-linecap="round"/><path d="${r}" stroke="#738b7f" stroke-width="12" fill="none" stroke-linecap="round"/>${this.tiles.map(o=>{let l=lr(o,this.tiles);return`<circle class="mini-node" data-mini-tile="${o.id}" cx="${l.x}" cy="${l.y}" r="${o.kind==="property"?5:7}" fill="${o.kind==="property"?on[o.group].color:"#fff0b7"}" stroke="#5b735b" stroke-width="1.4" role="button" tabindex="${o.id===0?0:-1}" aria-label="${o.id+1}. ${Fm(o.name)}"><title>${Fm(o.name)}</title></circle>`}).join("")}<circle class="mini-selected" r="11" stroke="#fff6cd" stroke-width="2.5" fill="none" stroke-dasharray="4 3" pointer-events="none"/><g class="mini-pawns" pointer-events="none"></g></svg><div class="mini-footer"><span class="mini-name"></span><button class="mini-inspect">\u8BE6\u60C5</button></div><span class="sr-only">\u65B9\u5411\u952E\u9009\u62E9\u5730\u5757\uFF0C\u56DE\u8F66\u5B9A\u4F4D\uFF0C\u8BE6\u60C5\u67E5\u770B\u4EF7\u683C\u4E0E\u5F52\u5C5E\u3002</span></div>`,this.body=e.querySelector("#miniBody"),this.toggle=e.querySelector(".mini-toggle"),this.nodes=[...e.querySelectorAll("[data-mini-tile]")],this.marker=e.querySelector(".mini-selected"),this.name=e.querySelector(".mini-name"),this.toggle.addEventListener("click",()=>{this.touched=!0,this.setExpanded(!this.expanded)}),s.addEventListener("change",o=>{this.touched||this.setExpanded(o.matches)});let a=o=>{let l=o.target.closest("[data-mini-tile]");l&&(this.select(+l.dataset.miniTile,!1),this.jump(this.selected))};e.querySelector("svg").addEventListener("click",a),e.querySelector("svg").addEventListener("keydown",o=>{let l=o.target.closest("[data-mini-tile]");if(l){if(["Enter"," "].includes(o.key)){o.preventDefault(),a(o);return}["Home","End","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(o.key)&&(o.preventDefault(),this.select(Nm(+l.dataset.miniTile,o.key),!1),this.nodes[this.selected].focus())}}),e.querySelector(".mini-inspect").addEventListener("click",()=>this.inspect(this.selected)),this.select(0,!0),this.setExpanded(this.expanded)}setMap(e){this.tiles=e;let t=fd(e).map(i=>`M${i.a.x},${i.a.y}L${i.b.x},${i.b.y}`).join(" ");for(let i of this.root.querySelectorAll(".mini-svg>path"))i.setAttribute("d",t);for(let i of e){let s=this.nodes[i.id],r=lr(i,e);s.setAttribute("cx",r.x),s.setAttribute("cy",r.y),s.setAttribute("r",i.kind==="property"?5:7),s.querySelector("title").textContent=i.name,s.setAttribute("fill",i.kind==="property"?on[i.group].color:"#fff0b7"),s.setAttribute("aria-label",`${i.id+1}. ${i.name}`)}this.lastTurn=""}setExpanded(e){this.expanded=e,this.toggle.setAttribute("aria-expanded",String(e)),this.toggle.querySelector(".mini-chevron").textContent=e?"\u2212":"+",this.body.hidden=!e,this.root.classList.toggle("is-collapsed",!e)}select(e,t=!1){if(!this.tiles[e])return;this.selected=e,this.followSelection=t;for(let s of this.nodes)s.setAttribute("tabindex",+s.dataset.miniTile===e?"0":"-1");let i=lr(this.tiles[e],this.tiles);this.marker.setAttribute("cx",i.x),this.marker.setAttribute("cy",i.y),this.name.textContent=this.labels?.[e]||`${e+1}. ${this.tiles[e].name}`}sync(e,{visible:t=!0}={}){if(this.tiles!==e.tiles&&this.setMap(e.tiles),this.root.hidden=!t,!t)return;let i=e.s,s=`${i.round}:${i.current}`;s!==this.lastTurn&&(this.lastTurn=s,this.followSelection=!0),this.labels=[],this.followSelection&&this.select(e.player.pos,!0);for(let a of this.tiles){let o=this.nodes[a.id],l=i.ownership[a.id];o.setAttribute("fill",l?e.char(i.players[l.player]).estateColor:a.kind==="property"?on[a.group].color:"#fff0b7"),o.setAttribute("stroke-width",l?"3":"1.4");let c=`${a.id+1}. ${a.name}${l?" \xB7 "+e.char(i.players[l.player]).name+" \xB7 "+(l.level?Ht[ct(l)].name+" "+l.level+"\u7EA7":"\u5F85\u5EFA\u7A7A\u5730"):""}`;this.labels[a.id]=c,o.setAttribute("aria-label",c),o.querySelector("title").textContent=c}this.name.textContent=this.labels[this.selected];let r=i.players.filter(a=>a.alive).map(a=>{let o=lr(this.tiles[a.pos],this.tiles),l=e.char(a).color;return`<circle cx="${o.x+(a.id-(i.players.length-1)/2)*5}" cy="${o.y-5}" r="${a.id===i.current?6:4.5}" fill="${l}" stroke="${a.id===i.current?"#fffbe2":"#644727"}" stroke-width="${a.id===i.current?3:2}"/>`}).join("");this.root.querySelector(".mini-pawns").innerHTML=r}};function A1(n){if(/暂时放弃|存款利息/.test(n))return null;let e=n.replace(/掷出 (.+?)，(前进|倒退) (\d+) 格。/,"\u63B7\u51FA $1 \xB7 $2 $3\u683C").replace(/奶家发财岛开张！每位奶伴带着 ([\d,]+) 奶币出发。/,"\u5976\u5BB6\u5F00\u5C40 \xB7 \u6BCF\u4EBA $1 \u5976\u5E01").replace(/将「(.+?)」升级为 (\d) 级/,"\u5347\u7EA7 $1 \xB7 $2\u7EA7").replace(/拆除「(.+?)」房屋，保留土地，回收材料/,"\u62C6\u9664 $1 \xB7 \u56DE\u6536").replace(/需支付 (\d+) 奶币，请筹集资金或申请破产。/,"\u73B0\u91D1\u4E0D\u8DB3 \xB7 \u5F85\u4ED8 $1").replace(/向(奶.+?)支付「.+?」租金/,"\u5411$1\u4ED8\u79DF\u91D1").replace(/，持续 3 个后续回合。/,"").replace(/第 (\d+) 轮开始，奶家股市行情已更新。/,"\u7B2C $1 \u8F6E \xB7 \u80A1\u5E02\u66F4\u65B0").replace(/[「」]/g,"").replace(/[。！]$/,"");if(e.length>33){let t=e.match(/[+−]\d+[，。]?$/)?.[0]||"";e=e.slice(0,29-t.length)+"\u2026"+t}return e}var oh=class{constructor(e){this.root=e,this.queue=[],this.timer=null,this.paused=!1,this.remaining=2400,this.speed=1}get busy(){return!this.root.hidden||this.queue.length>0}setSpeed(e){this.speed=Math.min(2,Math.max(1,e||1))}sync(e,t){if(!t){this.reset();return}if(this.game!==e){this.reset(),this.game=e,this.turn=`${e.s.round}:${e.s.current}`,this.head=e.s.logs[0],this.push(`\u7B2C ${e.s.round} \u8F6E \xB7 ${e.char().name}\u7684\u56DE\u5408`),e.s.phase==="event"&&!e.player?.human&&e.s.notice&&(this.lastNotice=e.s.notice,this.push(`${e.char().name} \xB7 ${e.s.notice.title}`));return}e.s.phase==="event"&&!e.player?.human&&e.s.notice&&e.s.notice!==this.lastNotice&&(this.lastNotice=e.s.notice,this.push(`${e.char().name} \xB7 ${e.s.notice.title}`));let i=`${e.s.round}:${e.s.current}`;i!==this.turn&&(this.turn=i,this.push(`\u7B2C ${e.s.round} \u8F6E \xB7 ${e.char().name}\u7684\u56DE\u5408`));let s=e.s.logs.indexOf(this.head);if(s!==0){let r=(s<0?e.s.logs.slice(0,1):e.s.logs.slice(0,s)).reverse();this.head=e.s.logs[0];for(let a of r){let o=A1(a.text);o&&this.push(o)}}}reset(){clearTimeout(this.timer),this.timer=null,this.queue=[],this.game=null,this.root.hidden=!0}push(e){this.queue.push(e),!this.timer&&!this.paused&&this.next()}next(){if(this.paused)return;clearTimeout(this.timer);let e=this.queue.shift();if(!e){this.timer=null,this.root.hidden=!0;return}if(this.root.textContent=e,this.root.insertAdjacentHTML){let t=[["\u5976\u86D9","naiwa"],["\u5976\u9F20","naishu"],["\u5976\u866B","naichong"],["\u5976\u72D7","naigou"],["\u5976\u86CB","naidan"],["\u5976\u8336","naicha"]].find(([i])=>e.includes(i));t&&this.root.insertAdjacentHTML("afterbegin",`<span class="news-face">${ui(t[1])}</span>`)}this.root.hidden=!1,this.root.classList.remove("news-enter"),this.root.offsetWidth,this.root.classList.add("news-enter"),this.remaining=Math.max(1250,Math.min(2800,1200+e.length*40)/this.speed),this.schedule()}schedule(){this.deadline=performance.now()+this.remaining,this.timer=setTimeout(()=>this.next(),this.remaining)}setPaused(e){e!==this.paused&&(this.paused=e,e?this.timer&&(this.remaining=Math.max(100,this.deadline-performance.now()),clearTimeout(this.timer),this.timer=null):this.root.hidden?this.queue.length&&this.next():this.schedule())}};var V=n=>document.getElementById(n),As=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),cn=n=>Math.round(n).toLocaleString("zh-CN"),Tt=nr(),ti=null;try{Tt=nr(JSON.parse(localStorage.getItem("naiwa-setup-v1")||"{}"))}catch{}var Vm=20,md=!1;var B=Qn.create({seed:7481}),Je=!1,hn="naiwa",Pn=null,je,Jt=null,pi=!1,es="",Bm,Gm,km,gd=!0,Qr=!1,Zt=B.tiles;try{Pn=Qn.restore(localStorage.getItem(od)),Object.assign(B.s.options,Dm(localStorage,Pn?.s.options||B.s.options))}catch{}try{je=new sh(V("scene"),n=>{Je&&!pi&&dt("tile",n)},B.tiles)}catch(n){console.warn("3D unavailable; using playable map",n),V("fallback").hidden=!1}V("scene").addEventListener("camerachange",n=>V("followBtn").setAttribute("aria-pressed",String(n.detail.follow)));V("scene").addEventListener("dicerollchange",n=>{V("dice").classList.toggle("rolling",n.detail.rolling),V("app").classList.toggle("is-dice-active",n.detail.active),n.detail.impact&&Ei.sfx("diceLand")});V("scene").addEventListener("renderlost",()=>{V("fallback").hidden=!1,ii("3D \u753B\u9762\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u5DF2\u5207\u6362\u5230\u53EF\u73A9\u7684\u7B80\u6D01\u5730\u56FE\u3002"),ai()});var R1=new ah(V("miniMap"),{jump:n=>{Je&&!pi&&!je?.studio&&(je?.focusTile(n),ta())},inspect:n=>{Je&&!pi&&dt("tile",n)}}),mo=new oh(V("newsFlash")),vd=new Gc,Ei=new rh(B.s.options),Om=null;function ea(){Ei.setOptions(B.s.options),V("soundBtn").dataset.state=Ei.status();let n=V("audioStatus");n&&(n.textContent=Ei.status())}function ta(n="tap"){ea(),Ei.sfx(n)}async function go(){await Ei.unlock(),ea()}document.addEventListener("pointerdown",go,{once:!0,capture:!0});document.addEventListener("keydown",go,{once:!0,capture:!0});function C1(){let n=B.s,e={state:n,positions:n.players.map(i=>i.pos),money:n.players.map(i=>i.money),lots:Object.fromEntries(Object.entries(n.ownership).map(([i,s])=>[i,s.level])),phase:n.phase},t=Om;Om=e,!(!Je||!t||t.state!==n)&&(e.positions.some((i,s)=>i!==t.positions[s])&&Ei.sfx("step"),Object.entries(e.lots).some(([i,s])=>s>(t.lots[i]??0))?Ei.sfx("build"):Object.entries(t.lots).some(([i,s])=>s>0&&(e.lots[i]??0)<s)?Ei.sfx("demolish"):e.money.some((i,s)=>i>t.money[s])&&Ei.sfx("coin"),e.phase==="moving"&&["roll","departure"].includes(t.phase)&&Ei.sfx("roll"),e.phase==="finished"&&t.phase!=="finished"&&Ei.sfx("win"))}function ii(n){V("toast").textContent=n,V("toast").classList.add("show"),clearTimeout(Bm),Bm=setTimeout(()=>V("toast").classList.remove("show"),2800)}function Rs(){try{Lm(localStorage,B.s.options)}catch{}if(Je)try{localStorage.setItem(od,JSON.stringify(B.s)),gd=!0,V("saveStatus").textContent="\u5DF2\u81EA\u52A8\u4FDD\u5B58\u5728\u672C\u673A"}catch{gd=!1,V("saveStatus").textContent="\u5B58\u6863\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8BF7\u5BFC\u51FA\u5907\u4EFD"}}function fi(n=!0){if(!n){ii("\u5F53\u524D\u65E0\u6CD5\u6267\u884C\uFF1A\u8BF7\u68C0\u67E5\u4F59\u989D\u3001\u6570\u91CF\u6216\u4F7F\u7528\u65F6\u673A\u3002");return}Rs(),ai(),ta()}function P1(){let n=+V("playerCountSelect").value,e=ws(Tt,hn,n);if(e){ti=nr(Tt),dt("advanced"),ii(e);return}vd.reset();let t={...B.s.options};B=Qn.create({character:hn,rounds:+V("roundSelect").value,playerCount:n,randomStart:Tt.randomStart,mapVersion:Tt.mapVersion,opponents:Array.from({length:n-1},(i,s)=>Tt.opponents[s]||"random"),seatLevels:Tt.seatLevels,startingCash:Tt.startingCash,startingTickets:Tt.startingTickets,seed:Tt.seed===""?Date.now():+Tt.seed,difficulty:V("difficultySelect").value,talents:V("talentsEnabled").checked}),B.s.options=t,Je=!0,es="",Lt(!0),V("startScreen").hidden=!0,je?.home(),je?.followPlayer(),fi()}function hh(){if(!ti)return;ti.opponents=Array.from(document.querySelectorAll("[data-setup-seat]"),e=>e.value),ti.seatLevels=Array.from(document.querySelectorAll("[data-setup-level]"),e=>e.value),ti.startingCash=+V("setupCash").value,ti.startingTickets=+V("setupTickets").value,ti.mapVersion=+V("setupMap").value,ti.randomStart=V("setupInitiative").value==="random",ti.seed=V("setupSeed").value.trim();let n=ws(ti,hn,+V("playerCountSelect").value);V("setupError").textContent=n,V("sheetBody").querySelector("[data-act=applyAdvanced]").disabled=!!n;for(let e of document.querySelectorAll(".opponent-seat")){let t=e.querySelector("[data-setup-seat]").value;e.querySelector(".seat-portrait").innerHTML=t==="random"?'<span class="random-face">\u2684</span>':ui(t)}}function I1(){if(!Pn)return;let n={...B.s.options};B=Pn,B.s.options=n,Je=!0,es="",V("startScreen").hidden=!0,je?.endPreview(),je?.followPlayer(),Lt(!0),fi()}function vo(){if(V("mapSelect").value=String(Tt.mapVersion),!Je&&B.s.mapVersion!==Tt.mapVersion){let e={...B.s.options};B=Qn.create({mapVersion:Tt.mapVersion,seed:7481}),B.s.options=e,Zt=B.tiles,je?.sync(B),je?.home()}document.querySelector(".map-preview-note").textContent=Jn[Tt.mapVersion].name+" \xB7 "+(Tt.mapVersion===2?"48\u683C \xB7 \u4E24\u6761\u77ED\u652F\u8DEF":"48\u683C \xB7 \u8DE8\u5C9B\u957F\u6377\u5F84"),V("advancedSummary").textContent=`${Jn[Tt.mapVersion].name} \xB7 \u521D\u59CB ${cn(Tt.startingCash)} \u5976\u5E01 \xB7 ${Tt.opponents.some(e=>e&&e!=="random")?"\u6307\u5B9A\u9635\u5BB9":"\u968F\u673A\u9635\u5BB9"}`,V("characterPicker").innerHTML=ri.map(e=>`<button class="character-choice ${hn===e.id?"selected":""}" data-character="${e.id}" aria-pressed="${hn===e.id}"><span class="face">${ui(e.id)}</span><strong>${e.name}</strong></button>`).join(""),V("continueBtn").hidden=!Pn,V("continueBtn").textContent=Pn?"\u7EE7\u7EED \xB7 "+Jn[Pn.s.mapVersion].name+" \xB7 \u7B2C "+Pn.s.round+" \u8F6E":"\u7EE7\u7EED\u4E0A\u6B21\u7684\u65C5\u884C",document.querySelector(".welcome-panel").classList.toggle("has-save",!!Pn);let n=ao[hn];V("talentPreview").innerHTML=`<strong>${n.icon} ${n.name}${n.strong?" \xB7 \u5F3A\u52BF\u89D2\u8272":""}</strong><p>${n.text}</p>`,Je||je?.previewCharacter(hn)}function zm(n){return[n.skip?`\u4F11\u517B ${n.skip} \u56DE\u5408`:"",n.shield?"\u514D\u79DF\u5DF2\u5C31\u7EEA":"",n.spirit?ys[n.spirit].name+" "+Math.min(3,n.spiritTurns)+" \u56DE\u5408":"",n.vehicle?ln[n.vehicle].name:"",n.reverse?"\u672C\u56DE\u5408\u5012\u9000":"",n.forced?`\u6307\u5B9A ${n.forced} \u6B65`:"",n.slowTurns?`\u6162\u884C ${n.slowTurns} \u6B21`:""].filter(Boolean).map(e=>`<span class="status-pill">${As(e)}</span>`).join("")}function ai(){Zt=B.tiles;let n=B.s,e=B.player;ea(),C1(),mo.setSpeed(n.options.speed),mo.sync(B,Je),je?.sync(B),R1.sync(B,{visible:Je&&!je?.studio}),V("app").classList.toggle("is-menu",!Je),V("app").dataset.phase=n.phase,V("app").dataset.mapVersion=String(n.mapVersion),V("app").style.setProperty("--player-count",n.players.length),V("pauseBtn").hidden=!Je,V("pauseBtn").setAttribute("aria-pressed",String(Qr)),V("difficultyBtn").textContent=jn[n.difficulty].name,V("difficultyBtn").title=jn[n.difficulty].description,V("mapHeading").textContent=Jn[n.mapVersion].name,V("round").textContent=Je?`\u7B2C ${n.round} / ${n.maxRounds} \u8F6E`:"\u51C6\u5907\u51FA\u53D1",V("logRound").textContent=`\u7B2C ${n.round} \u8F6E`,V("weather").textContent=Je?["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"][n.round%7]+" \xB7 "+dn[Dn(n.options.lighting)].label:dn[Dn(n.options.lighting)].label+" \xB7 \u5B9C\u5927\u7B11",V("players").innerHTML=n.players.map(r=>{let a=B.char(r);return`<div class="player ${Je&&n.current===r.id?"active":""} ${r.alive?"":"out"}"><div class="player-head"><span class="mini-face" style="--c:${a.color}">${ui(a.id)}</span><div><div class="player-name">${a.name} ${r.human?'<span class="badge">\u4F60</span>':""}</div><div class="player-role">${r.alive?"":"\u672C\u5C40\u5DF2\u7834\u4EA7"}</div></div><div class="player-money"><small>\u25CF</small>${cn(r.money)}</div></div><div class="player-stats"><span>\u5730\u4EA7 <strong>${B.owned(r).length}</strong></span><span>\u51C0\u8D44\u4EA7 <strong>${cn(B.worth(r))}</strong></span></div>${zm(r)?`<div class="status-pills">${zm(r)}</div>`:""}</div>`}).join(""),V("logs").innerHTML=n.logs.slice(0,20).map(r=>`<div class="log"><span class="log-time">${String(r.round).padStart(2,"0")}</span><span>${As(r.text)}</span></div>`).join(""),V("turnName").textContent=Je?n.phase==="finished"?"\u672C\u6B21\u65C5\u884C\u5706\u6EE1\u7ED3\u675F":`${B.char().name}${e.human?"\uFF0C\u8F6E\u5230\u4F60\u5566":"\u6B63\u5728\u65C5\u884C"}`:"\u51C6\u5907\u597D\u4E86\u5417\uFF1F",V("talentBtn").title=B.s.talents?ao[B.player.character].text:"\u672C\u5C40\u5929\u8D4B\u672A\u5F00\u542F",V("turnAvatar").innerHTML=ui(B.char().id),V("turnAvatar").style.background=B.char().color;let t={departure:"\u5929\u8D4B\u7ED3\u7B97\u4E2D\uFF0C\u9A6C\u4E0A\u63B7\u9AB0\u51FA\u53D1",roll:e.skip?"\u6B63\u5728\u4F11\u517B\uFF0C\u53EF\u7528\u91CE\u751F\u72D7\u5976\u6062\u590D":`\u70B9\u5238 ${e.tickets} \xB7 \u5DF2\u7528\u5361 ${e.cardsUsed} \xB7 \u505C\u5230\u81EA\u5BB6\u5730\u53EF\u5EFA\u8BBE`,moving:`${e.reverse?"\u5012\u9000":"\u524D\u8FDB"}\u4E2D \xB7 \u8FD8\u5269 ${n.remaining} \u683C`,branch:"\u9009\u62E9\u4E00\u6761\u8DEF\u7EBF\u7EE7\u7EED\u524D\u8FDB",buy:"\u8FD9\u5757\u5730\u503C\u5F97\u4E70\u4E0B\u6765\u5417\uFF1F",estate:"\u652F\u4ED8\u79DF\u91D1\uFF0C\u8FD8\u662F\u7528\u8D2D\u5730\u5361\u6536\u8D2D\uFF1F",event:"\u770B\u770B\u5C9B\u4E0A\u53D1\u751F\u4E86\u4EC0\u4E48",end:`\u70B9\u5238 ${e.tickets} \xB7 \u5EFA\u8BBE ${e.buildsUsed}/1 \xB7 \u53EF\u7EE7\u7EED\u7ECF\u8425`,debt:"\u73B0\u91D1\u4E0D\u8DB3\uFF0C\u53EF\u4EE5\u53D6\u6B3E\u3001\u501F\u6B3E\u6216\u53D8\u5356\u8D44\u4EA7",finished:"\u770B\u770B\u8C01\u662F\u4ECA\u5929\u7684\u5976\u5BB6\u5927\u5BCC\u7FC1"},i={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};V("turnHint").textContent=Je?t[n.phase]:"\u9009\u4E00\u4F4D\u5976\u4F34\uFF0C\u5F00\u542F\u65C5\u884C",V("dice").innerHTML=n.dice.map(r=>`<span class="pip-die" role="img" aria-label="\u9AB0\u5B50 ${r} \u70B9">${Array.from({length:9},(a,o)=>`<i class="${i[r].includes(o)?"pip-on":""}"></i>`).join("")}</span>`).join(""),V("dice").classList.toggle("rolling",!!je?.fx.diceRolling),V("actionBtn").textContent=Je?n.phase==="finished"?"\u770B\u6392\u540D":e.human?{roll:e.skip?"\u4F11\u517B":"\u63B7\u9AB0\u5B50",end:"\u7ED3\u675F\u56DE\u5408",departure:"\u5929\u8D4B\u4E2D",moving:"\u524D\u8FDB\u4E2D",branch:"\u9009\u8DEF\u7EBF",buy:"\u4E70\u5730",estate:"\u9009\u5730\u4EA7",event:"\u770B\u4E8B\u4EF6",debt:"\u7B79\u8D44\u91D1"}[n.phase]:"\u7B49\u5F85\u4E2D":"\u9009\u5976\u4F34",V("actionBtn").textContent.length===4&&(V("actionBtn").textContent=V("actionBtn").textContent.slice(0,2)+`
`+V("actionBtn").textContent.slice(2)),V("actionBtn").disabled=!Je||!e.human&&n.phase!=="finished"||["moving","departure"].includes(n.phase),document.querySelectorAll("[data-panel]").forEach(r=>r.disabled=!Je||!e.human||!["roll","end","debt"].includes(n.phase)),document.querySelector("[data-panel=stocks]").disabled=!Je||pi||!["roll","end","moving","departure"].includes(n.phase),V("cardCount").textContent=n.players[0].cards.length,V("planBtn").disabled=!Je||!e.human||n.phase!=="roll",V("diceCount").hidden=!Je||!e.human||e.vehicle===0||n.phase!=="roll",V("diceCount").innerHTML=Array.from({length:ln[e.vehicle].dice},(r,a)=>`<option value="${a+1}" ${e.diceCount===a+1?"selected":""}>${a+1} \u9897\u9AB0\u5B50</option>`).join(""),V("soundBtn").textContent=n.options.sound?"\u266B":"\u266A",V("soundBtn").setAttribute("aria-label",n.options.sound?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),V("qualityBtn").textContent=n.options.quality==="low"?"\u7701\u7535":"\u7535\u5F71",V("qualityBtn").title=n.options.quality==="low"?"\u7701\u7535\u753B\u8D28 \xB7 \u70B9\u51FB\u5207\u6362\u7535\u5F71\u753B\u8D28":"\u7535\u5F71\u753B\u8D28 \xB7 \u70B9\u51FB\u5207\u6362\u7701\u7535\u753B\u8D28",V("followBtn").setAttribute("aria-pressed",String(!!je?.follow)),V("moveIndicator").hidden=!Je,V("moveIndicator").textContent=`${B.char().name} \xB7 ${Zt[e.pos].name}${n.phase==="moving"?" \xB7 \u5269 "+n.remaining+" \u683C":""}`,V("fallback").hidden||(V("fallback").innerHTML=`<div class="fallback-grid">${Zt.map(r=>`<button class="fallback-tile ${e.pos===r.id?"current":""}" data-tile="${r.id}" style="background:${on[r.group].color}50">${r.id+1}. ${As(r.name)}<br>${n.players.filter(a=>a.alive&&a.pos===r.id).map(a=>B.char(a).name).join(" ")}${n.ownership[r.id]?"<br>\u2302 "+B.char(n.players[n.ownership[r.id].player]).name:""}</button>`).join("")}</div>`);let s=`${n.phase}:${n.current}:${n.round}:${e.pos}`;Je&&(e.human||n.phase==="finished")&&["buy","estate","event","branch","debt","finished"].includes(n.phase)&&!Jt&&es!==s&&(es=s,dt(n.phase)),Je&&e.human&&n.phase==="end"&&!Jt&&es!==s&&(es=s,B.canUpgrade(e.pos)||B.canBuild(e.pos)||ct(n.ownership[e.pos])==="research"&&n.ownership[e.pos]?.player===e.id?dt("buildHere",e.pos):Zt[e.pos].kind==="shop"&&dt("shop"))}function _t(n,e,t,i=!1){Jt?.type==="tile"?je?.selectTile(Jt.id,"inspect"):Jt?.type==="buy"&&je?.selectTile(B.player.pos,"buy"),V("app").classList.add("has-dialog"),Gm=document.activeElement,V("sheet").dataset.panel=Jt?.type||"",V("sheetTitle").textContent=n,V("sheetSubtitle").textContent=e,V("sheetBody").innerHTML=t,V("sheet").hidden=!1,V("sheetBackdrop").hidden=!1,V("sheetBackdrop").classList.toggle("live-map",["deeds","tile","confirmDemolish","buy","branch"].includes(Jt?.type)),pi=i,V("closeSheet").hidden=i,queueMicrotask(()=>{(V("sheetBody").querySelector("button,input,select")||V("closeSheet"))?.focus({preventScroll:!0})})}function Lt(n=!1){pi&&!n||(Qr&&Wm(!1),je?.clearSelection(),V("app").classList.remove("has-dialog"),Jt=null,pi=!1,V("sheet").hidden=!0,V("sheetBackdrop").hidden=!0,Gm?.focus?.({preventScroll:!0}),Je&&["buy","estate","event","branch","debt","finished"].includes(B.s.phase)&&(es=""))}var lh=n=>`<div class="stat-grid">${n.map(([e,t])=>`<div class="stat-box"><strong>${e}</strong><span>${t}</span></div>`).join("")}</div>`,Ye=(n,e,t="",i=!1,s="secondary")=>`<button class="${s}" data-act="${e}" ${t} ${i?"disabled":""}>${n}</button>`;function po(n,e,t){return ro({...n,buildingType:n.buildingType||B.s.ownership[n.id]?.buildingType},e,t)}function D1(){return Je&&B.player.human&&B.manageable()}function pd(n){let e=Zt[n.id];return As(e.name)+" \xB7 "+(n.rent?"\u4ED8\u79DF "+n.rent:n.price?"\u7A7A\u5730 "+n.price+" \u5976\u5E01":n.owner===B.player.id?"\u81EA\u5DF1\u7684\u5730\u4EA7":{shop:"\u70B9\u5238 +30 \u4E0E\u968F\u673A\u5361",hospital:`\u8D39\u7528 ${B.payment(100)}\uFF0C\u4F11\u517B\u4E00\u6B21`,tax:`\u8D39\u7528 ${B.payment(180)}`,rest:`\u8865\u8D34 +${Math.round(120*(B.player.spirit==="fortune"?1.25:1))}`,event:"\u968F\u673A\u4E8B\u4EF6",spirit:"\u968F\u673A\u795E\u7075",bank:"\u94F6\u884C",stock:"\u8BC1\u5238\u6240",start:"\u8D77\u70B9"}[e.kind]||"\u5DF2\u5907\u514D\u79DF")+(n.passesStart?` \xB7 \u7ECF\u8FC7\u8D77\u70B9 +${Math.round((400+(B.s.talents&&B.player.character==="naiwa"?80:0))*(B.player.spirit==="fortune"?1.25:1))} / 25\u70B9\u5238`:"")+(n.points?" \xB7 \u9014\u4E2D\u70B9\u5238 +"+n.points:"")+(n.blocked?" \xB7 \u8DEF\u969C\u622A\u505C":"")}function dt(n,e){let t=B.s,i=B.player;Jt={type:n,id:e};let s=D1(),r=s&&t.phase!=="debt";if(n==="advanced")ti??=nr(Tt),_t("\u9AD8\u7EA7\u5BF9\u5C40\u8BBE\u7F6E","\u81EA\u5B9A\u4E49\u7535\u8111\u5E2D\u4F4D\u4E0E\u516C\u5E73\u8D77\u59CB\u6761\u4EF6",tm(ti,hn,+V("playerCountSelect").value,V("difficultySelect").value));else if(n==="mapGuide")_t(Jn[t.mapVersion].name,"\u8DEF\u7EBF\u4E0E\u7535\u8111\u8BBE\u7F6E",`<p>${Jn[t.mapVersion].description}</p><h3>\u672C\u5C40\u7535\u8111\uFF1A${jn[t.difficulty].name}</h3><p>${jn[t.difficulty].description}</p><p>\u672C\u5C40\u7535\u8111\uFF1A${t.players.filter(a=>!a.human).map(a=>B.char(a).name+" \xB7 "+jn[B.aiDifficulty(a)].name).join("\u3001")}\u3002\u79CD\u5B50 ${t.setupSeed??"\u65E7\u5B58\u6863\u672A\u8BB0\u5F55"}\u3002</p><p>\u6240\u6709\u96BE\u5EA6\u7684\u521D\u59CB\u8D44\u91D1\u3001\u79DF\u91D1\u3001\u63B7\u9AB0\u548C\u5929\u8D4B\u89C4\u5219\u76F8\u540C\uFF0C\u5DEE\u522B\u53EA\u5728\u7535\u8111\u5982\u4F55\u505A\u51B3\u7B56\u3002\u65B0\u5C40\u53EF\u91CD\u65B0\u9009\u62E9\u5F3A\u5EA6\u3002</p><p>\u529F\u80FD\u5EFA\u7B51\u5747\u5BF9\u5E94\u9053\u8DEF\u683C\uFF1B\u9009\u62E9\u6377\u5F84\u524D\u53EF\u6253\u5F00\u843D\u70B9\u9884\u89C8\uFF0C\u6BD4\u8F83\u79DF\u91D1\u3001\u8865\u7ED9\u548C\u8D77\u70B9\u5956\u52B1\u3002</p>`);else if(n==="talents")_t("\u5976\u4F34\u4E13\u5C5E\u5929\u8D4B",t.talents?"\u672C\u5C40\u5DF2\u5F00\u542F \xB7 \u81EA\u52A8\u89E6\u53D1\uFF0C\u65E0\u9700\u989D\u5916\u6309\u952E":"\u672C\u5C40\u672A\u5F00\u542F\uFF1B\u65B0\u5C40\u53EF\u52FE\u9009\u5F00\u542F",ri.map(a=>`<div class="talent-row"><span class="talent-face">${ui(a.id)}</span><div><h3>${a.name} \xB7 ${ao[a.id].name}</h3><p>${ao[a.id].text}</p>${t.players.some(o=>o.character===a.id)?'<span class="badge">\u672C\u5C40\u53C2\u8D5B</span>':""}</div></div>`).join(""));else if(n==="deeds"){let a={tea:"\u5976\u8336\u5546\u94FA",theater:"\u5927\u7B11\u5267\u9662",factory:"\u5976\u5757\u5DE5\u5382",garden:"\u82B1\u56ED\u5EAD\u9662",hotel:"\u5976\u5BB6\u65C5\u9986",tower:"\u5976\u5E01\u529E\u516C\u697C"},o=B.owned(i);_t("\u6211\u7684\u5976\u5BB6\u5730\u4EA7","\u4ECE\u4E00\u95F4\u5C0F\u5E97\uFF0C\u5230\u4E00\u5EA7\u5C0F\u9547",`${Es("house","\u7A7A\u5730\u5230\u8BBF\u540E\u53EF\u9009\u4E03\u7C7B\u5EFA\u7B51\uFF1B\u4F4F\u5B85\u3001\u65C5\u9986\u3001\u5546\u573A\u3001\u7814\u7A76\u6240\u6700\u9AD8\u4E94\u7EA7\uFF0C\u8FDE\u9501\u5E97\u3001\u52A0\u6CB9\u7AD9\u3001\u516C\u56ED\u4EC5\u4E00\u7EA7\u3002\u8FDC\u7A0B\u52A0\u76D6\u8BF7\u7528\u5DE5\u7A0B\u961F\u3002","naishu")}${o.length?o.map(l=>`<div class="row estate-row">${po(l.tile,l.level,B.char(i).estateColor)}<div class="row-head"><strong><span style="color:${on[l.tile.group].color}">\u25CF</span> ${l.tile.name}</strong><span class="badge">${l.level?l.level+" \u7EA7":"\u7A7A\u5730"}</span></div>${Oc(B,l.tile.id)}<div class="row-actions">${Ye(l.level>=Tn(l)?"\u5DF2\u8FBE\u4E0A\u9650":i.buildSite!==l.tile.id?"\u505C\u5230\u8FD9\u91CC\u518D\u5EFA\u8BBE":`\u52A0\u76D6 \xB7 ${B.buildPrice(l.tile)}`,l.level?"upgrade":"chooseBuilding",`data-id="${l.tile.id}"`,!r||!(B.canUpgrade(l.tile.id)||B.canBuild(l.tile.id)))}${Ye("\u62C6\u9664\u623F\u5C4B","confirmDemolish",`data-id="${l.tile.id}"`,!r||t.phase!=="end"||i.buildSite!==l.tile.id||l.level===0)}${Ye(`\u53D8\u5356 \xB7 +${cn(B.cost(l.tile,l.level,ct(l))*.65)}`,"sell",`data-id="${l.tile.id}"`,!s)}</div></div>`).join(""):'<div class="empty">\u5C0F\u9547\u8FD8\u5728\u7B49\u5B83\u7684\u65B0\u4E3B\u4EBA\u3002<br>\u8D70\u5230\u65E0\u4E3B\u5730\u4EA7\uFF0C\u5C31\u80FD\u4E70\u4E0B\u7B2C\u4E00\u5757\u5730\u3002</div>'}`)}else if(n==="cards")_t("\u5976\u4F34\u7684\u5361\u5305","\u6536\u597D\u9053\u5177\uFF0C\u9009\u51C6\u4E0B\u4E00\u6B65",Jp(B));else if(n==="cardTarget"){let a=i.cards[e],o=Yt[a];if(!o){Lt(!0);return}let l;if(o.target==="steps"||o.target==="ahead")l=`${Xi(a)}<p>${o.description}</p>${a==="block"?'<p class="panel-note">\u8DEF\u969C\u6CBF\u524D\u65B9\u4E3B\u8DEF\u653E\u7F6E\uFF0C\u5C94\u8DEF\u9ED8\u8BA4\u8D70\u7B2C\u4E00\u6761\uFF1B\u4E0D\u80FD\u653E\u5728\u89D2\u8272\u811A\u4E0B\u6216\u5DF2\u6709\u8DEF\u969C\u4E0A\u3002</p>':""}${Array.from({length:6},(c,h)=>{let u=h+1,f=i.pos;for(let g=0;g<u;g++)f=Zt[f].next[0];let d=a==="block"?[{id:f,rent:t.ownership[f]&&t.ownership[f].player!==i.id?B.rent(f):0,owner:t.ownership[f]?.player??null,price:!t.ownership[f]&&Zt[f].kind==="property"?Zt[f].price:0}]:B.preview(u);return`<div class="row"><div class="row-head"><strong>${u} ${a==="dice"?"\u6B65":"\u683C"}</strong>${Ye("\u9009\u62E9","useCard",`data-index="${e}" data-target="${u}"`,a==="block"&&!!B.blockTargets()[h].reason)}</div><p>${d.map(g=>pd(g)).join(" / ")}</p>${a==="block"&&B.blockTargets()[h].reason?`<small>${B.blockTargets()[h].reason}</small>`:""}</div>`}).join("")}`;else{let c=B.cardTargets(a);l=`${Xi(a)}<p>${o.description}</p>${c.map(h=>h.obstacle?`<div class="row">${Xi("block")}<strong>${Zt[h.id].name} \xB7 \u8DEF\u969C</strong><p>\u6E05\u7406\u9053\u8DEF\uFF0C\u623F\u5C4B\u4FDD\u6301\u4E0D\u53D8\u3002</p>${Ye("\u6E05\u7406\u8DEF\u969C","useCard",`data-index="${e}" data-target="${h.id}"`)}</div>`:`<div class="row estate-row">${po(Zt[h.id],h.level,B.char(t.players[h.player]).estateColor)}<strong>${Zt[h.id].name}</strong><p>${B.char(t.players[h.player]).name} \xB7 ${h.level} \u7EA7 \xB7 \u79DF\u91D1 ${B.rent(h.id)}${a==="steal"?" \xB7 \u6536\u8D2D\u4EF7 "+B.takeoverPrice(h.id):a==="demolish"?" \u2192 "+B.rent(h.id,h.level-1):" \u2192 "+B.rent(h.id,h.level+1)}</p>${Ye(a==="steal"?"\u786E\u8BA4\u6536\u8D2D":a==="build"?"\u514D\u8D39\u52A0\u76D6\u4E00\u5C42":"\u62C6\u53BB\u4E00\u5C42","useCard",`data-index="${e}" data-target="${h.id}"`,a==="steal"&&i.money<B.takeoverPrice(h.id))}</div>`).join("")||`<div class="empty">${a==="steal"?"\u8BF7\u505C\u5728\u5BF9\u624B\u5730\u4EA7\u540E\u4F7F\u7528\u3002":"8 \u683C\u8303\u56F4\u5185\u6682\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u76EE\u6807\u3002"}</div>`}`}_t(o.name,"\u9009\u62E9\u76EE\u6807",l)}else if(n==="bank")_t("\u5976\u5E01\u94F6\u884C","\u8BA9\u5C0F\u91D1\u5E93\uFF0C\u4E5F\u6162\u6162\u957F\u5927",`${Es("bank",t.round%7===3?"\u5468\u4E09\u94F6\u884C\u4F11\u606F\uFF0C\u4ECA\u5929\u53EA\u80FD\u67E5\u770B\u8D26\u6237\u3002":B.canBank()?"\u94F6\u884C\u5DF2\u5230\u8BBF\uFF0C\u672C\u56DE\u5408\u53EF\u4EE5\u529E\u7406\u4E1A\u52A1\u3002":"\u7ECF\u8FC7\u94F6\u884C\u65F6\u53EF\u529E\u7406\u4E1A\u52A1\uFF1B\u5F53\u524D\u4EC5\u67E5\u770B\u8D26\u6237\u3002\u652F\u4ED8\u4E0D\u8DB3\u65F6\u53EF\u81EA\u52A8\u7528\u5B58\u6B3E\u8865\u8DB3\u73B0\u91D1\u3002","naichong")}${lh([[cn(i.money),"\u73B0\u91D1"],[cn(i.deposit),"\u5B58\u6B3E"],[cn(i.loan),"\u8D37\u6B3E"]])}<div class="panel-note">\u6BCF\u8F6E\u5B58\u6B3E\u5229\u606F 0.5%\uFF08\u5411\u4E0B\u53D6\u6574\uFF09\uFF0C\u8D37\u6B3E\u5229\u606F 4%\uFF0C\u5206\u522B\u8BA1\u5165\u672C\u91D1\u3002\u65B0\u589E\u501F\u6B3E\u540E\u8D37\u6B3E\u4F59\u989D\u4E0D\u5F97\u8D85\u8FC7 1,800 \u5976\u5E01\uFF1B\u5229\u606F\u53EF\u80FD\u4F7F\u4F59\u989D\u8D85\u9650\u3002\u7ECF\u8FC7\u94F6\u884C\u7684\u672C\u56DE\u5408\u53EF\u529E\u7406\u4E1A\u52A1\uFF1B\u6BCF\u7B2C\u4E03\u8F6E\u5468\u671F\u7684\u7B2C\u4E09\u8F6E\u4F11\u606F\u3002</div><label for="bankAmount" style="font-size:12px">\u64CD\u4F5C\u91D1\u989D</label><div class="input-row"><input id="bankAmount" type="number" min="1" step="1" value="300" inputmode="numeric" aria-label="\u94F6\u884C\u64CD\u4F5C\u91D1\u989D"></div><div class="button-grid">${Ye("\u5B58\u5165\u5976\u5E01","bank",'data-kind="deposit"',!r||!B.canBank())}${Ye("\u53D6\u51FA\u5976\u5E01","bank",'data-kind="withdraw"',!s||!B.canBank())}${Ye("\u7533\u8BF7\u501F\u6B3E","bank",'data-kind="borrow"',!s||!B.canBank())}${Ye("\u507F\u8FD8\u8D37\u6B3E","bank",'data-kind="repay"',!r||!B.canBank())}</div><p>\u672C\u6E38\u620F\u4E2D\u7684\u5976\u5E01\u4EC5\u7528\u4E8E\u5355\u673A\u7ECF\u8425\u3002</p>`);else if(n==="stocks")_t("\u5976\u5BB6\u8BC1\u5238\u6240","\u6301\u4ED3\u6210\u672C \xB7 \u6D6E\u52A8\u76C8\u4E8F \xB7 \u6210\u4EA4\u8BB0\u5F55",rm(B,{window:Vm,held:md})),queueMicrotask(()=>B.s.market.forEach((a,o)=>zc(B,o)));else if(n==="shop")_t("\u5976\u5BB6\u8865\u7ED9\u5546\u5E97","\u7ED9\u4E0B\u4E00\u6B21\u51FA\u53D1\uFF0C\u591A\u4E00\u70B9\u51C6\u5907",`${Es("vehicle",B.canShop()?"\u6B22\u8FCE\u5230\u5E97\uFF1A\u7528\u70B9\u5238\u9009\u5361\uFF0C\u4E5F\u80FD\u8D2D\u5165\u4EA4\u901A\u5DE5\u5177\u3002":"\u8BF7\u505C\u5728\u5730\u56FE\u4E0A\u7684\u8865\u7ED9\u5546\u5E97\u8D2D\u4E70\uFF1B\u73B0\u5728\u53EF\u4EE5\u5148\u6D4F\u89C8\u5546\u54C1\u3002")}<div class="panel-note">\u5976\u5E01 ${cn(i.money)} \xB7 \u70B9\u5238 ${i.tickets}/150 \xB7 \u672C\u56DE\u5408\u8D2D\u5361 ${i.shopUsed}/2\u3002\u62FE\u53D6\u5730\u56FE\u91D1\u5E01 +10 \u70B9\u5238\uFF1B\u7ECF\u8FC7\u8D77\u70B9 +25\uFF1B\u8865\u7ED9\u7AD9 +30 \u53CA\u968F\u673A\u5361\u3002\u70B9\u5238\u4E0D\u8BA1\u5165\u51C0\u8D44\u4EA7\u3002</div><h3>\u51FA\u884C\u5DE5\u5177</h3>${ln.slice(1).map(a=>`<div class="row shop-vehicle">${Xi("vehicle")}<div class="row-head"><strong>${a.name}</strong><span class="badge">${a.price} \u5976\u5E01</span></div><p>\u6BCF\u56DE\u5408\u53EF\u9009 1\u2014${a.dice} \u9897\u9AB0\u5B50\u3002\u8D2D\u5165\u66F4\u9AD8\u7B49\u7EA7\u5DE5\u5177\u540E\u66FF\u6362\u539F\u5DE5\u5177\u3002</p>${Ye(i.vehicle>=a.id?"\u5DF2\u62E5\u6709\u6216\u5DF2\u5347\u7EA7":"\u8D2D\u4E70\u5DE5\u5177","vehicle",`data-id="${a.id}"`,!r||!B.canShop()||i.vehicle>=a.id||i.money<a.price)}</div>`).join("")}<h3>\u5976\u4F34\u9053\u5177\u5361</h3>${Object.entries(Yt).map(([a,o])=>`<div class="row collectible-card">${Xi(a)}<div class="row-head"><strong><span class="card-icon">${o.icon}</span>${o.name}</strong><span class="badge">${B.cardPrice(a)} \u70B9\u5238</span></div><p>${o.description}</p>${Ye("\u653E\u8FDB\u5361\u5305","shop",`data-key="${a}"`,!r||!B.canShop()||i.tickets<B.cardPrice(a)||i.cards.length>=15||i.shopUsed>=2)}</div>`).join("")}`);else if(n==="tile"){let a=Zt[e],o=t.ownership[e];_t(a.name,`${on[a.group].name} \xB7 \u5730\u56FE\u7B2C ${e+1} \u683C`,a.kind==="property"?`${po(a,o?.level||0,o?B.char(t.players[o.player]).estateColor:"#77aa8b")}${lh([[a.price,"\u7A7A\u5730\u4EF7\u683C"],[o?o.level+" \u7EA7":"\u5F85\u552E","\u5EFA\u7B51\u7B49\u7EA7"]])}${Oc(B,e)}<p>${o?`\u8FD9\u5757\u5730\u5C5E\u4E8E${B.char(t.players[o.player]).name}\u3002`:"\u843D\u5728\u8FD9\u91CC\u65F6\uFF0C\u53EF\u4EE5\u51B3\u5B9A\u662F\u5426\u8D2D\u4E70\u3002"}${o?.level?Ht[ct(o)].text:"\u7A7A\u5730\u53EF\u9009\u62E9\u4E03\u79CD\u5EFA\u7B51\u3002\u53EA\u6709\u4F4F\u5B85\u53C2\u4E0E\u8857\u533A\u8054\u8425\uFF1B\u5176\u4ED6\u8BBE\u65BD\u6309\u81EA\u8EAB\u673A\u5236\u7ECF\u8425\u3002"}</p>${o?.player===i.id&&s?`<div class="row-actions">${Ye("\u5EFA\u8BBE\u4E0E\u7ECF\u8425","chooseBuilding",`data-id="${e}"`,!r||!(B.canUpgrade(e)||B.canBuild(e)||ct(o)==="research"&&i.pos===e))}${Ye("\u53D8\u5356\u5730\u4EA7","sell",`data-id="${e}"`)}</div>`:""}`:`<p>${{start:"\u6BCF\u6B21\u6B63\u5411\u7ECF\u8FC7\u8D77\u70B9\u9886\u53D6 400 \u5976\u5E01\uFF1B\u5012\u9000\u4E0D\u9886\u5956\u3002",bank:"\u7ECF\u8FC7\u94F6\u884C\u7684\u672C\u56DE\u5408\u53EF\u529E\u7406\u5B58\u6B3E\u3001\u53D6\u6B3E\u548C\u8D37\u6B3E\u3002",stock:"\u6253\u5F00\u80A1\u7968\u9762\u677F\uFF0C\u67E5\u770B\u5976\u5BB6\u4F01\u4E1A\u6700\u65B0\u884C\u60C5\u3002",shop:"\u843D\u5728\u6B64\u5904\u83B7\u5F97\u968F\u673A\u5361\uFF0C\u5230\u5E97\u540E\u624D\u80FD\u8D2D\u4E70\u9053\u5177\u548C\u4EA4\u901A\u5DE5\u5177\u3002",event:"\u8868\u60C5\u5305\u3001\u5927\u7B11\u3001\u5976\u4F34\u548C\u610F\u5916\uFF0C\u968F\u673A\u4E8B\u4EF6\u7B49\u4F60\u53D1\u73B0\u3002",hospital:"\u652F\u4ED8 100 \u5976\u5E01\u7597\u517B\u8D39\uFF0C\u5E76\u4F11\u517B\u4E00\u56DE\u5408\u3002",rest:"\u83B7\u5F97 120 \u5976\u5E01\u8865\u8D34\uFF0C\u7EE7\u7EED\u5FEB\u4E50\u65C5\u884C\u3002",tax:"\u652F\u4ED8 180 \u5976\u5E01\u6E05\u6D01\u8D39\u3002",spirit:"\u968F\u673A\u8FCE\u6765\u8D22\u8FD0\u3001\u9709\u8FD0\u6216\u5B88\u62A4\u6548\u679C\uFF0C\u6301\u7EED\u4E09\u4E2A\u540E\u7EED\u56DE\u5408\u3002"}[a.kind]}</p>`)}else if(n==="buy"){let a=Zt[i.pos];_t("\u53D1\u73B0\u4E00\u5757\u597D\u5730\u76D8",`${a.name} \xB7 ${on[a.group].name}`,`${po(a,0,B.char(i).estateColor)}<p>\u8D2D\u5730\u540E\u53EF\u9009\u62E9\u4F4F\u5B85\u3001\u8FDE\u9501\u5E97\u3001\u65C5\u9986\u3001\u5546\u573A\u3001\u52A0\u6CB9\u7AD9\u3001\u7814\u7A76\u6240\u6216\u516C\u56ED\u3002\u4E4B\u540E\u9700\u518D\u6B21\u505C\u9760\u624D\u80FD\u52A0\u76D6\uFF1B\u5DE5\u7A0B\u961F\u53EF\u8FDC\u7A0B\u52A0\u76D6\u3002</p>${lh([[a.price,"\u8D2D\u4E70\u4EF7\u683C"],[B.rent(a.id),"\u521D\u59CB\u79DF\u91D1"],[cn(i.money),"\u5F53\u524D\u73B0\u91D1"]])}<div class="button-grid">${Ye("\u5148\u8DEF\u8FC7\u770B\u770B","pass")}${Ye("\u4E70\u4E0B\u8FD9\u5757\u5730","buy","",i.money<a.price,"primary")}</div>`,!0)}else if(n==="plan"){let a=i.forced||i.slowTurns?1:i.diceCount,o=i.forced?new Map([[i.forced,1]]):i.slowTurns?new Map([[1,1]]):Wc(a);_t("\u8FD9\u6B21\u4F1A\u8D70\u5230\u54EA\u91CC\uFF1F","\u5148\u770B\u98CE\u9669\uFF0C\u518D\u51B3\u5B9A\u7528\u5361\u6216\u9AB0\u5B50\u6570\u91CF",`<div class="panel-note">${i.forced?"\u5DF2\u6307\u5B9A "+i.forced+" \u6B65":i.slowTurns?"\u6162\u884C\u751F\u6548\uFF1A\u672C\u6B21 1 \u6B65":a+" \u9897\u9AB0\u5B50\u7684\u771F\u5B9E\u843D\u70B9\u6982\u7387"}\u3002\u6709\u5C94\u8DEF\u65F6\u4F1A\u5217\u51FA\u4E24\u6761\u8DEF\u7EBF\uFF1B\u8D39\u7528\u6309\u5F53\u524D\u72B6\u6001\u4F30\u7B97\uFF0C\u4E8B\u4EF6\u5185\u5BB9\u4ECD\u968F\u673A\u3002\u70B9\u5238 ${i.tickets}\uFF0C\u672C\u56DE\u5408\u5DF2\u7528\u5361 ${i.cardsUsed}\u3002</div>${[...o].map(([l,c])=>`<div class="row"><div class="row-head"><strong>${l} \u6B65</strong><span class="badge">${(c*100).toFixed(1)}%</span></div>${B.preview(l).map(h=>`<p>${pd(h)}</p>`).join("")}</div>`).join("")}<div class="row-actions">${Ye("\u53BB\u5361\u5305\u51B3\u5B9A","panel",'data-panel="cards"')}${Ye("\u56DE\u5730\u56FE","cancel")}</div>`)}else if(n==="buildHere")_t("\u5730\u4EA7\u5EFA\u8BBE\u4E0E\u7ECF\u8425",Zt[i.pos].name,im(B,i.pos));else if(n==="estate"){let a=Zt[i.pos],o=t.ownership[i.pos];_t("\u6765\u5230\u5BF9\u624B\u7684\u5730\u4EA7",`${B.char(t.players[o.player]).name} \xB7 ${a.name}`,`${po(a,o.level,B.char(t.players[o.player]).estateColor)}${lh([[B.rent(i.pos),"\u672C\u6B21\u79DF\u91D1"],[B.takeoverPrice(i.pos),"\u8D2D\u5730\u5361\u6536\u8D2D\u4EF7"]])}<p>\u652F\u4ED8\u79DF\u91D1\u7EE7\u7EED\uFF1B\u4E5F\u53EF\u6D88\u8017\u8D2D\u5730\u5361\u6536\u8D2D\u811A\u4E0B\u5730\u4EA7\uFF0C\u514D\u4ED8\u672C\u6B21\u79DF\u91D1\u3002</p><div class="button-grid">${Ye(i.shield?"\u4F7F\u7528\u5DF2\u5907\u514D\u79DF":"\u652F\u4ED8\u79DF\u91D1","estatePay")}${Ye("\u8D2D\u5730\u5361\u6536\u8D2D","estateBuy","",i.money<B.takeoverPrice(i.pos),"primary")}</div>`,!0)}else if(n==="branch")_t("\u4E0B\u4E00\u7AD9\uFF0C\u53BB\u54EA\u8FB9\uFF1F","\u5C94\u8DEF\u9009\u62E9",`<p>\u8FD8\u6709 ${t.remaining} \u6B65\u3002\u9009\u597D\u8DEF\u7EBF\u540E\uFF0C\u7EE7\u7EED\u4F7F\u7528\u672C\u6B21\u5269\u4F59\u6B65\u6570\u3002${t.mapVersion===2?i.pos===35?"\u6668\u5149\u652F\u8DEF\u7ED5\u5F00\u6E05\u6D01\u7AD9\uFF0C\u4F46\u4E5F\u8DF3\u8FC7\u8D77\u70B9\u5956\u91D1\u3002":"\u82B1\u56ED\u652F\u8DEF\u7ED5\u5F00\u533B\u9662\uFF0C\u4F46\u4E5F\u9519\u8FC7\u4E8B\u4EF6\u4E0E\u795E\u6BBF\u3002":""}</p>${Zt[i.pos].next.map((a,o)=>`<div class="row"><div class="row-head"><strong>${o===0?"\u6CBF\u57CE\u9547\u4E3B\u8DEF":t.mapVersion===2?i.pos===35?"\u8D70\u6668\u5149\u652F\u8DEF":"\u8D70\u82B1\u56ED\u652F\u8DEF":"\u8D70\u5185\u5C9B\u6377\u5F84"}</strong><span class="badge">${o===0?"\u4E3B\u8DEF":t.mapVersion===2?"\u7701 3 \u683C":"\u5185\u5C9B"}</span></div><p>\u4E0B\u4E00\u683C\uFF1A${Zt[a].name}</p>${B.preview(t.remaining,{first:a}).map(l=>`<p>\u6700\u7EC8\uFF1A${pd(l)}</p>`).join("")}${Ye("\u5C31\u8D70\u8FD9\u8FB9","branch",`data-id="${a}"`,!1,"primary")}</div>`).join("")}`,!0);else if(n==="event"){let a=t.notice;_t(a?.title||"\u5C9B\u4E0A\u65B0\u9C9C\u4E8B",`${B.char().name}\u7684\u65C5\u884C\u624B\u8D26`,`<div class="event-emblem">${a?.mood==="happy"?"\u2726":a?.mood==="sad"?"\u2601":"\u2667"}</div><p>${As(a?.text||"\u7EE7\u7EED\u65C5\u7A0B\u5427\u3002")}</p>${Ye("\u77E5\u9053\u5566\uFF0C\u7EE7\u7EED\u65C5\u884C","ack","",!1,"primary")}`,!0),ta(a?.mood)}else if(n==="debt"){let a=t.debt;_t("\u5C0F\u91D1\u5E93\u9700\u8981\u5468\u8F6C","\u5148\u7B79\u6B3E\uFF0C\u518D\u7EE7\u7EED\u65C5\u884C",`<p>${As(a.label)}\u9700\u8981\u652F\u4ED8 <b>${cn(a.amount)}</b> \u5976\u5E01\uFF0C\u5F53\u524D\u73B0\u91D1 <b>${cn(i.money)}</b>\u3002</p><div class="button-grid">${Ye("\u53BB\u94F6\u884C\u7B79\u6B3E","panel",'data-panel="bank"')}${Ye("\u5356\u51FA\u80A1\u7968","panel",'data-panel="stocks"')}${Ye("\u53D8\u5356\u5730\u4EA7","panel",'data-panel="deeds"')}${Ye("\u652F\u4ED8\u5E76\u7EE7\u7EED","settle","",i.money<a.amount,"primary")}</div><h3>\u7533\u8BF7\u7834\u4EA7</h3><p>\u4F1A\u6E05\u7B97\u5B58\u6B3E\u3001\u80A1\u7968\u3001\u5730\u4EA7\u4E0E\u4EA4\u901A\u5DE5\u5177\uFF0C\u5C3D\u53EF\u80FD\u507F\u8FD8\u672C\u6B21\u6B20\u6B3E\uFF0C\u5E76\u9000\u51FA\u8FD9\u5C40\u65C5\u884C\u3002</p>${Ye("\u67E5\u770B\u7834\u4EA7\u786E\u8BA4","confirmBankrupt","","","secondary danger")}`,!0)}else if(n==="finished")_t("\u5976\u5BB6\u53D1\u8D22\u7EAA\u5FF5\u518C","\u672C\u6B21\u65C5\u884C\u7ED3\u7B97",Wp(B),!0);else if(n==="settings")_t("\u65C5\u884C\u8BBE\u7F6E","\u6309\u81EA\u5DF1\u7684\u8282\u594F\uFF0C\u6162\u6162\u73A9",`<div class="setting-row"><label for="speedSelect">\u52A8\u753B\u901F\u5EA6</label><select id="speedSelect">${[1,2].map(a=>`<option value="${a}" ${Math.min(2,t.options.speed)===a?"selected":""}>${a===1?"\u6B63\u5E38 \xB7 \u5B8C\u6574\u5C55\u793A":"\u8F7B\u5FEB \xB7 \u4FDD\u7559\u6D88\u606F\u9605\u8BFB\u65F6\u95F4"}</option>`).join("")}</select></div><div class="setting-row"><label for="qualitySelect">\u753B\u9762\u8D28\u91CF</label><select id="qualitySelect"><option value="auto" ${t.options.quality==="auto"?"selected":""}>\u7535\u5F71\u753B\u8D28 \xB7 \u7CBE\u7EC6\u5149\u5F71</option><option value="low" ${t.options.quality==="low"?"selected":""}>\u7701\u7535\u753B\u8D28</option></select></div><div class="setting-row"><label for="lightingSelect">\u65E5\u7167\u6C1B\u56F4</label><select id="lightingSelect">${Object.entries(dn).map(([a,o])=>`<option value="${a}" ${Dn(t.options.lighting)===a?"selected":""}>${o.label}</option>`).join("")}</select></div><div class="setting-row"><span>\u58F0\u97F3</span>${Ye(t.options.sound?"\u5DF2\u5F00\u542F \xB7 \u70B9\u51FB\u5173\u95ED":"\u5DF2\u5173\u95ED \xB7 \u70B9\u51FB\u5F00\u542F","sound")}</div>${L1()}<h3>\u65C5\u884C\u5B58\u6863</h3><p>${gd?"\u8FDB\u5EA6\u81EA\u52A8\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u3002":"\u81EA\u52A8\u5B58\u6863\u5931\u8D25\uFF0C\u8BF7\u5BFC\u51FA\u5907\u4EFD\u3002"}\u5BFC\u51FA\u540E\uFF0C\u53EF\u4EE5\u5728\u53E6\u4E00\u53F0\u8BBE\u5907\u5BFC\u5165\u7EE7\u7EED\u3002</p><div class="row-actions">${Ye("\u5BFC\u51FA\u5B58\u6863","export","",!Je)}${Ye("\u7D20\u6750\u4E0E\u5236\u4F5C\u8BF4\u660E","panel",'data-panel="sources"')}</div><label style="font-size:11px">\u5BFC\u5165\u5B58\u6863<input class="file-input" id="importSave" type="file" accept="application/json,.json"></label><h3>\u91CD\u65B0\u51FA\u53D1</h3><p>\u91CD\u65B0\u5F00\u59CB\u4F1A\u66FF\u6362\u672C\u7248\u5B58\u6863\uFF1B\u65E7\u7248\u6E38\u620F\u7684\u5B58\u6863\u4E0D\u4F1A\u53D7\u5F71\u54CD\u3002</p>${Ye("\u9009\u62E9\u5976\u4F34\u91CD\u65B0\u5F00\u59CB","confirmRestart","","","secondary danger")}<p>\u8BBE\u7F6E\u6253\u5F00\u671F\u95F4\uFF0C\u5BF9\u5C40\u6682\u505C\u3002</p>`);else if(n==="help")_t("\u5976\u5BB6\u53D1\u8D22\u6307\u5357","\u5148\u63B7\u4E00\u9897\u9AB0\u5B50\uFF0C\u518D\u6162\u6162\u5B66\u4F1A\u7ECF\u8425",'<ol class="rules"><li><b>\u51FA\u53D1\uFF1A</b>\u9009\u62E9\u5976\u4F34\u540E\u968F\u673A\u51B3\u5B9A\u5148\u624B\uFF0C\u6240\u6709\u4EBA\u5B8C\u6574\u884C\u52A8\u4E00\u6B21\u7B97\u4E00\u8F6E\u3002\u63B7\u9AB0\u79FB\u52A8\u3002\u7ECF\u8FC7\u8D77\u70B9\u9886 400 \u5976\u5E01\u3002\u6BCF\u4F4D\u5B58\u6D3B\u5976\u4F34\u884C\u52A8\u4E00\u6B21\u7B97\u4E00\u8F6E\u3002</li><li><b>\u7F6E\u4E1A\uFF1A</b>\u8E29\u5230\u7A7A\u5730\u53EF\u4E70\u5165\uFF0C\u5E76\u9009\u62E9\u4E03\u79CD\u5EFA\u7B51\u3002\u4F4F\u5B85\u3001\u65C5\u9986\u3001\u5546\u573A\u3001\u7814\u7A76\u6240\u6700\u9AD8\u4E94\u7EA7\uFF1B\u8FDE\u9501\u5E97\u3001\u52A0\u6CB9\u7AD9\u3001\u516C\u56ED\u53EA\u6709\u4E00\u7EA7\u3002\u666E\u901A\u5EFA\u8BBE\u987B\u505C\u5230\u81EA\u5BB6\u5730\u5757\uFF0C\u6BCF\u6B21\u52A0\u4E00\u5C42\uFF1B\u5DE5\u7A0B\u961F\u53EF\u8FDC\u7A0B\u52A0\u76D6\u3002\u53EA\u6709\u4F4F\u5B85\u53C2\u4E0E\u8857\u533A\u8054\u8425\u3002\u65C5\u9986\u5F3A\u5236\u5165\u4F4F\u3001\u5546\u573A\u62BD\u7B7E\u6D88\u8D39\u3001\u52A0\u6CB9\u7AD9\u6309\u884C\u7A0B\u548C\u4EA4\u901A\u5DE5\u5177\u6536\u8D39\u3001\u7814\u7A76\u6240\u4E09\u6B21\u51FA\u53D1\u4EA7\u5361\u3001\u516C\u56ED\u514D\u8D39\u9001\u70B9\u5238\u3002</li><li><b>\u7528\u5361\uFF1A</b>\u63B7\u9AB0\u524D\u6253\u5F00\u5361\u5305\u3002\u624B\u724C\u53EF\u8FDE\u7528\uFF0C\u79FB\u52A8\u5361\u987B\u5728\u63B7\u9AB0\u524D\u4F7F\u7528\uFF1B\u70B9\u5238\u6765\u81EA\u5730\u56FE\u62FE\u53D6\u548C\u5230\u7AD9\u5956\u52B1\u3002\u7528\u70B9\u5238\u4E70\u5361\uFF0C\u53EF\u63A7\u9AB0\u3001\u8DEF\u969C\u3001\u62C6\u5C42\u3001\u514D\u8D39\u52A0\u76D6\u6216\u6162\u884C\u3002\u62A2\u5730\u5361\u4EC5\u5BF9\u811A\u4E0B\u7684\u5BF9\u624B\u5730\u4EA7\u751F\u6548\uFF0C\u4ED8 125% \u6210\u672C\uFF1B\u62C6\u9664\u548C\u5DE5\u7A0B\u961F\u9650\u9644\u8FD1 8 \u683C\u3002</li><li><b>\u51FA\u884C\uFF1A</b>\u5546\u5E97\u8D2D\u4E70\u81EA\u884C\u8F66\u6216\u5C0F\u8F66\u540E\uFF0C\u53EF\u5728\u63B7\u9AB0\u6309\u94AE\u65C1\u9009\u62E9\u9AB0\u5B50\u6570\u91CF\u3002\u5C94\u8DEF\u81EA\u884C\u9009\u65B9\u5411\u3002</li><li><b>\u7ECF\u8425\uFF1A</b>\u7ECF\u8FC7\u94F6\u884C\u7684\u672C\u56DE\u5408\u53EF\u529E\u7406\u5B58\u53D6\u6B3E\u548C\u8D37\u6B3E\uFF1B\u94F6\u884C\u5468\u4E09\u4F11\u606F\uFF1B\u80A1\u7968\u5728\u81EA\u5DF1\u884C\u52A8\u524D\u540E\u53EF\u4EA4\u6613\uFF0C\u5468\u65E5\u4F11\u5E02\u3002\u5546\u5E97\u9700\u5230\u5E97\u8D2D\u4E70\u3002\u5B58\u6B3E\u6BCF\u8F6E\u8D5A 0.5%\uFF0C\u8D37\u6B3E\u6BCF\u8F6E\u8BA1\u606F 4%\u3002\u80A1\u7968\u4E5F\u4F1A\u56E0\u968F\u673A\u4E8B\u4EF6\u6DA8\u8DCC\u3002</li><li><b>\u795E\u7075\uFF1A</b>\u8D22\u8FD0\u589E\u52A0\u975E\u4EA4\u6613\u6536\u5165\uFF0C\u9709\u8FD0\u589E\u52A0\u652F\u51FA\uFF0C\u5B88\u62A4\u62B5\u6321\u4E00\u6B21\u8D1F\u9762\u4E8B\u4EF6\u3002\u6548\u679C\u4E92\u76F8\u66FF\u6362\uFF0C\u6301\u7EED 3 \u4E2A\u540E\u7EED\u56DE\u5408\u3002</li><li><b>\u5468\u8F6C\uFF1A</b>\u4ED8\u6B3E\u4E0D\u8DB3\u53EF\u53D6\u6B3E\u3001\u501F\u6B3E\u3001\u5356\u80A1\u7968\u6216\u53D8\u5356\u5730\u4EA7\uFF1B\u4E5F\u53EF\u7533\u8BF7\u7834\u4EA7\u9000\u51FA\u3002</li><li><b>\u80DC\u5229\uFF1A</b>\u575A\u6301\u5230\u6700\u540E\uFF0C\u6216\u5728\u8F6E\u6570\u7ED3\u675F\u65F6\u62E5\u6709\u6700\u591A\u51C0\u8D44\u4EA7\u3002\u624B\u673A\u6A2A\u5C4F\u4F53\u9A8C\u66F4\u5B8C\u6574\u3002</li></ol><p>\u5404\u4F4D\u89D2\u8272\u91C7\u7528\u540C\u4E00\u89C4\u5219\uFF0C\u7535\u8111\u4E5F\u9075\u5B88\u70B9\u5238\u3001\u7528\u5361\u548C\u5EFA\u8BBE\u9650\u5236\uFF0C\u5E76\u6839\u636E\u516C\u5F00\u5730\u5757\u8BC4\u4F30\u8DEF\u7EBF\u3002\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 3D \u65F6\u53EF\u4F7F\u7528\u7B80\u6D01\u5730\u56FE\u7EE7\u7EED\u73A9\u3002</p>');else if(n==="news")_t("\u5C9B\u4E0A\u6D88\u606F\u8BB0\u5F55","\u91CD\u8981\u6D88\u606F\u4F1A\u5728\u5730\u56FE\u4E2D\u592E\u9010\u6761\u51FA\u73B0",t.logs.slice(0,40).map(a=>`<div class="row"><small>\u7B2C ${a.round} \u8F6E</small><p>${As(a.text)}</p></div>`).join(""));else if(n==="pause")Wm(!0),Rs(),_t("\u4F11\u606F\u4E00\u4E0B\uFF0C\u5976\u4F34\u7B49\u4F60","\u5BF9\u5C40\u3001\u955C\u5934\u4E0E\u58F0\u97F3\u5DF2\u6682\u505C",`<p>\u5F53\u524D\u8FDB\u5EA6\u5DF2\u4FDD\u5B58\u5728\u672C\u673A\u3002\u51C6\u5907\u597D\u4E86\uFF0C\u518D\u7EE7\u7EED\u8FD9\u4E00\u8D9F\u53D1\u8D22\u4E4B\u65C5\u3002</p><div class="button-grid">${Ye("\u7EE7\u7EED\u6E38\u620F","resumeGame","",!1,"primary")}${Ye("\u5BFC\u51FA\u5B58\u6863","export","",!Je)}</div><p class="pause-tip">\u5173\u95ED\u9762\u677F\u6216\u6309 Esc \u4E5F\u53EF\u4EE5\u7EE7\u7EED\u3002</p>`);else if(n==="share")_t("\u53EB\u4E0A\u670B\u53CB\uFF0C\u6765\u5C9B\u4E0A\u73A9","\u624B\u673A\u70B9\u5F00\u94FE\u63A5\u5373\u53EF\u5F00\u59CB",`<p>\u628A\u8FD9\u4E2A\u8BD5\u73A9\u94FE\u63A5\u53D1\u7ED9\u670B\u53CB\uFF0C\u65E0\u9700\u5B89\u88C5\u6216\u767B\u5F55\u6E38\u620F\u8D26\u53F7\u3002\u5EFA\u8BAE\u6A2A\u5C4F\u4F53\u9A8C\u3002</p><label for="shareUrl">\u8BD5\u73A9\u94FE\u63A5</label><input id="shareUrl" class="share-url" type="text" readonly value="${As(Kp())}"><div class="row-actions">${Ye("\u590D\u5236\u94FE\u63A5","copyLink","",!1,"primary")}</div><p>\u5F53\u524D\u662F\u5355\u673A\u8BD5\u73A9\uFF1A\u6BCF\u4F4D\u670B\u53CB\u5728\u81EA\u5DF1\u7684\u624B\u673A\u4E0A\uFF0C\u4E0E\u7535\u8111\u5976\u4F34\u72EC\u7ACB\u5BF9\u5C40\uFF1B\u8FDB\u5EA6\u4FDD\u5B58\u5728\u5404\u81EA\u6D4F\u89C8\u5668\u3002</p>`);else if(n==="sources")_t("\u5976\u5BB6\u521B\u4F5C\u624B\u8D26","\u7D20\u6750\u6765\u6E90\u4E0E\u540E\u7EED\u8BA1\u5212",'<div class="panel-note">\u975E\u5B98\u65B9\u7C89\u4E1D\u6E38\u620F\u3002\u89D2\u8272\u6A21\u578B\u3001\u5730\u56FE\u3001\u5EFA\u7B51\u548C\u754C\u9762\u7531\u672C\u9879\u76EE\u5236\u4F5C\u3002\u914D\u4E50\u4E3A\u91CD\u65B0\u7F16\u6392\u7684\u5668\u4E50\u4E0E\u539F\u521B\u66F2\uFF1B\u7B11\u58F0\u4F7F\u7528\u793E\u533A\u5C0F\u6E38\u620F\u7684\u77ED\u7247\u6BB5\uFF0C\u5177\u4F53\u6765\u6E90\u89C1\u58F0\u97F3\u8BBE\u7F6E\u3002</div><div class="credit-list"><p>\u6587\u5316\u4E0E\u8868\u73B0\u53C2\u8003\uFF1A</p><ul class="rules"><li><a href="https://milkyfrog.com/games" target="_blank" rel="noopener">\u5976\u86D9\u5C0F\u6E38\u620F\u5408\u96C6</a></li><li><a href="https://naiwaxiaowu.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u7684\u5C0F\u7A9D</a>\uFF1A\u4E92\u52A8\u4E0E\u966A\u4F34\u8868\u73B0</li><li><a href="https://milkfrog-bath.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u7231\u6D17\u6FA1</a>\uFF1A\u60C5\u7EEA\u8868\u60C5</li><li><a href="https://nailong-dance.pages.dev/" target="_blank" rel="noopener">\u5976\u5A03\u8857\u821E</a>\uFF1A\u52A8\u6001\u8868\u73B0</li><li><a href="https://naiwanaichadian.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u5976\u8336\u94FA</a>\uFF1A\u7ECF\u8425\u573A\u666F</li><li><a href="https://www.douyin.com/video/7673579319512764654" target="_blank" rel="noopener">\u6296\u97F3\u5976\u5E01\u4E0E\u91CE\u751F\u72D7\u5976\u4E8C\u521B</a></li></ul></div><p>\u672C\u7248\u4E3A\u539F\u521B\u98CE\u683C\u5316\u8F7B\u91CF\u6A21\u578B\u3002\u5976\u86D9\u3001\u5976\u9F20\u3001\u5976\u72D7\u53C2\u8003\u7528\u6237\u4E09\u89C6\u56FE\u53CA\u516C\u5F00\u89C6\u9891\uFF0C\u5976\u86CB\u548C\u5976\u8336\u53C2\u8003\u519C\u5E84\u89C6\u9891\uFF0C\u5976\u866B\u53C2\u8003\u6B64\u524D\u89C6\u9891\u56FE\u50CF\u3002\u6A21\u578B\u91C7\u7528\u8FDE\u7EED\u66F2\u9762\u3001\u7ED8\u5236\u8179\u8272\u4E0E\u5173\u8282\u52A8\u753B\uFF0C\u4E3A\u539F\u521B\u91CD\u5EFA\uFF0C\u672A\u63D0\u53D6\u89C6\u9891\u6E90\u6A21\u578B\u3002</p><p>\u672C\u7248\u5DF2\u652F\u6301\u516D\u540D\u89D2\u8272\u30012\u20146 \u4EBA\u3001\u6307\u5B9A\u7535\u8111\u4E0E\u968F\u673A\u9635\u5BB9\u3002\u540E\u7EED\u65B9\u5411\uFF1A\u8D26\u53F7\u4E0E\u4E91\u5B58\u6863\u3002\u672C\u7248\u4EC5\u5305\u542B\u672C\u673A\u5355\u673A\u3002</p><p>3D \u5F15\u64CE Three.js\uFF0CMIT \u8BB8\u53EF\u968F\u90E8\u7F72\u5305\u9644\u5E26\u3002</p>');else if(n==="confirmRestart")_t("\u91CD\u65B0\u51FA\u53D1\u5417\uFF1F","\u5F53\u524D\u5B58\u6863\u5C06\u88AB\u66FF\u6362",`<p>\u5148\u5BFC\u51FA\u5B58\u6863\u53EF\u4EE5\u4FDD\u7559\u8FD9\u6B21\u65C5\u884C\u3002\u7136\u540E\u91CD\u65B0\u9009\u62E9\u5976\u4F34\u4E0E\u65C5\u884C\u8F6E\u6570\u3002</p><div class="row-actions">${Ye("\u5BFC\u51FA\u5F53\u524D\u5B58\u6863","export","",!Je)}${Ye("\u4FDD\u7559\u5F53\u524D\u65C5\u884C","cancel")}${Ye("\u91CD\u65B0\u9009\u62E9\u5976\u4F34","newGame","",!1,"primary")}</div>`,!0);else if(n==="confirmDemolish"){let a=t.ownership[e],o=Zt[e];if(!a||a.player!==i.id||!a.level){Lt(!0);return}_t("\u62C6\u9664\u8FD9\u680B\u623F\u5C4B\uFF1F",o.name,`<p>\u62C6\u9664 ${a.level} \u7EA7\u623F\u5C4B\uFF0C\u571F\u5730\u4ECD\u5F52\u4F60\u6240\u6709\u3002\u56DE\u6536\u6750\u6599\u83B7\u5F97 ${Math.floor((B.cost(o,a.level,ct(a))-o.price)*.25)} \u5976\u5E01\uFF1B\u79DF\u91D1\u6062\u590D\u4E3A\u7A7A\u5730\u6C34\u5E73\u3002</p><div class="row-actions">${Ye("\u4FDD\u7559\u623F\u5C4B","cancel")}${Ye("\u786E\u8BA4\u62C6\u9664","demolish",`data-id="${e}"`,!1,"secondary danger")}</div>`,!0)}else n==="confirmBankrupt"&&_t("\u786E\u8BA4\u7533\u8BF7\u7834\u4EA7\uFF1F","\u8FD9\u4F1A\u7ED3\u675F\u4F60\u672C\u5C40\u7684\u65C5\u884C",`<p>\u7CFB\u7EDF\u5C06\u6E05\u7B97\u4F60\u7684\u8D44\u4EA7\uFF0C\u5C3D\u53EF\u80FD\u652F\u4ED8\u672C\u6B21\u6B20\u6B3E\u3002\u4F60\u5C06\u9000\u51FA\u672C\u5C40\uFF0C\u7535\u8111\u5976\u4F34\u7EE7\u7EED\u6BD4\u8D5B\u3002</p><div class="row-actions">${Ye("\u518D\u60F3\u60F3\u529E\u6CD5","panel",'data-panel="debt"')}${Ye("\u786E\u8BA4\u7834\u4EA7\u9000\u51FA","bankrupt","","","secondary danger")}</div>`,!0)}function L1(){let n=Ts(B.s.options);return`<h3>\u5C0F\u5C9B\u97F3\u4E50\u53F0</h3><p id="audioStatus" role="status">${Ei.status()}</p><div class="setting-row"><span>\u80CC\u666F\u97F3\u4E50</span>${Ye(n.music?"\u64AD\u653E\u4E2D \xB7 \u5173\u95ED":"\u5DF2\u5173\u95ED \xB7 \u5F00\u542F","music")}</div><label class="setting-row">\u66F2\u76EE<select id="musicTrack">${Object.entries(Kr).map(([e,t])=>`<option value="${e}" ${n.track===e?"selected":""}>${t.name}</option>`).join("")}</select></label>${[["musicVolume","\u97F3\u4E50\u97F3\u91CF"],["effectsVolume","\u52A8\u4F5C\u97F3\u6548"],["voiceVolume","\u5976\u86D9\u7B11\u58F0"]].map(([e,t])=>`<label class="volume-row"><span>${t}</span><input type="range" min="0" max="100" value="${Math.round(n[e]*100)}" data-volume="${e}" aria-label="${t}"><output>${Math.round(n[e]*100)}%</output></label>`).join("")}<div class="setting-row"><span>\u5976\u86D9\u7B11\u58F0</span><div class="row-actions">${Ye(n.voice?"\u5DF2\u5F00\u542F":"\u5DF2\u5173\u95ED","voice")}${Ye("\u8BD5\u542C\u7B11\u58F0","testVoice")}</div></div><details class="audio-credit"><summary>\u97F3\u4E50\u4E0E\u58F0\u97F3\u6765\u6E90</summary><p>\u300A\u5976\u5BB6\u6B22\u4E50\u9882\u300B\uFF1A\u53C2\u8003 <a href="https://www.bilibili.com/video/BV1Sv7p6bEJT/" target="_blank" rel="noopener">\u5976\u86D9\u76F8\u5173\u300A\u6B22\u4E50\u9882\u300B\u4E8C\u521B</a>\u9009\u66F2\uFF0C\u4F7F\u7528\u8D1D\u591A\u82AC\u516C\u7248\u65CB\u5F8B\u91CD\u65B0\u7F16\u6392\u5668\u4E50\uFF0C\u975E\u89C6\u9891\u539F\u5F55\u97F3\u3002\u300A\u5976\u5BB6\u6F2B\u6E38\u300B\u53CA\u63B7\u9AB0\u3001\u91D1\u5E01\u3001\u811A\u6B65\u3001\u65BD\u5DE5\u97F3\u6548\u4E3A\u672C\u4F5C\u539F\u521B\u3002</p><p>\u7B11\u58F0\uFF1A<a href="https://naiwaxiaowu.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u7684\u5C0F\u7A9D</a> laugh.wav \u7684 1.05 \u79D2\u7247\u6BB5\uFF0C\u5DF2\u88C1\u5207\u4E0E\u6DE1\u5165\u6DE1\u51FA\uFF1B\u672A\u58F0\u79F0\u8BE5\u5F55\u97F3\u4E3A\u5F00\u653E\u8BB8\u53EF\u7D20\u6750\u3002\u5C55\u793A\u5B57\u4F53\uFF1A\u7AD9\u9177\u5FEB\u4E50\u4F53\uFF08OFL\uFF09\u3002</p></details>`}V("sheetBody").addEventListener("change",n=>{if(Jt?.type==="advanced"){hh();return}n.target.id==="stockWindow"&&(Vm=+n.target.value,dt("stocks"))});V("sheetBody").addEventListener("input",n=>{if(Jt?.type==="advanced"){hh();return}if(n.target.dataset.stockQty!==void 0){zc(B,+n.target.dataset.stockQty);return}let e=n.target.dataset.volume;e&&(B.s.options[e]=+n.target.value/100,n.target.nextElementSibling.textContent=n.target.value+"%",ea(),Rs())});function Wm(n){Qr=n,mo.setPaused(n||document.hidden),je&&(je.paused=n||!!je.contextLost,n&&je.renderStill()),Ei.visibility(n||document.hidden),ea(),V("app").classList.toggle("is-paused",n),V("pauseBtn").setAttribute("aria-pressed",String(n))}function U1(){if(Jt){let{type:n,id:e}=Jt,t=V("sheetBody").scrollTop;dt(n,e),queueMicrotask(()=>{V("sheetBody").scrollTop=t})}}function $m(){if(!Je)return;let n=new Blob([JSON.stringify(B.s,null,2)],{type:"application/json"}),e=URL.createObjectURL(n),t=document.createElement("a");t.href=e,t.download=`\u5976\u86D9\u5927\u5BCC\u7FC1-\u7B2C${B.s.round}\u8F6E.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),ii("\u5DF2\u5BFC\u51FA\u65C5\u884C\u5B58\u6863\u3002")}function N1(){if(Je){if(B.s.phase==="finished"){dt("finished");return}B.player.human&&B.s.phase!=="departure"&&(B.s.phase==="roll"?(je?.followPlayer(),fi(B.roll())):B.s.phase==="end"?fi(B.end()):dt(B.s.phase))}}function xd(){let n=+V("roundSelect").value,e=+V("playerCountSelect").value,t=n*(e*.19+.1);V("durationHint").textContent=n===20?"\u8BD5\u73A9\u5C40\uFF1A\u9002\u5408\u719F\u6089\u64CD\u4F5C\uFF1B\u5B8C\u6574\u7ECF\u8425\u5EFA\u8BAE 50 \u8F6E\u3002":`\u7EA6 ${Math.round(t*.8)}\u2014${Math.round(t*1.25)} \u5206\u949F\uFF0C\u4F9D\u64CD\u4F5C\u548C\u52A8\u753B\u901F\u5EA6\u53D8\u5316\u3002`}V("roundSelect").addEventListener("change",xd);V("playerCountSelect").addEventListener("change",xd);xd();V("startBtn").addEventListener("click",P1);V("continueBtn").addEventListener("click",I1);V("characterPicker").addEventListener("click",n=>{let e=n.target.closest("[data-character]");e&&(hn=e.dataset.character,vo(),ta())});V("actionBtn").addEventListener("click",N1);V("soundBtn").addEventListener("click",()=>{go(),B.s.options.sound=!B.s.options.sound,fi(),ii(B.s.options.sound?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED")});V("mapSelect").addEventListener("change",n=>{if(!Je){Tt.mapVersion=+n.target.value==1?1:2;try{localStorage.setItem("naiwa-setup-v1",JSON.stringify(Tt))}catch{}vo(),ai(),ta()}});V("advancedBtn").addEventListener("click",()=>{ti=null,dt("advanced")});V("difficultyBtn").addEventListener("click",()=>{pi||dt("mapGuide")});V("difficultySelect").addEventListener("change",()=>{V("difficultyHint").textContent=jn[V("difficultySelect").value].description});V("talentBtn").addEventListener("click",()=>{pi||dt("talents")});var U2=new Hc(V("app"),V("orientationBtn"),{notify:ii,resize:()=>je?.resize()});V("newsHistoryBtn").addEventListener("click",()=>{Je&&!pi&&dt("news")});V("pauseBtn").addEventListener("click",()=>{!pi&&Je?dt("pause"):ii("\u5148\u5B8C\u6210\u5F53\u524D\u9009\u62E9\uFF0C\u5373\u53EF\u6682\u505C\u3002")});V("shareBtn").addEventListener("click",()=>{pi?ii("\u5148\u5B8C\u6210\u5F53\u524D\u9009\u62E9\uFF0C\u518D\u5206\u4EAB\u94FE\u63A5\u3002"):dt("share")});V("helpBtn").addEventListener("click",()=>{pi||dt("help")});V("settingsBtn").addEventListener("click",()=>{pi||dt("settings")});V("saveBtn").addEventListener("click",$m);V("homeBtn").addEventListener("click",()=>{je?.leaveStudio(),V("app").classList.remove("is-studio"),je?.home(),V("studioPanel").hidden=!0,V("startScreen").hidden=Je,ai()});V("followBtn").addEventListener("click",()=>{je&&(je.follow?je.follow=!1:je.followPlayer(),ai(),ii(je.follow?"\u8DDF\u968F\u5F53\u524D\u5976\u4F34":"\u81EA\u7531\u63A2\u7D22\u5C0F\u5C9B"))});V("qualityBtn").addEventListener("click",()=>{B.s.options.quality=B.s.options.quality==="low"?"auto":"low",fi()});V("castBtn").addEventListener("click",()=>{pi||!je||(je.enterStudio(Je?B.player.character:hn),V("app").classList.add("is-studio"),V("studioPanel").hidden=!1,V("miniMap").hidden=!0,V("startScreen").hidden=!0,V("actionBtn").disabled=!0,document.querySelectorAll(".dock-tabs button").forEach(n=>n.disabled=!0))});V("closeStudio").addEventListener("click",()=>{je?.leaveStudio(),V("app").classList.remove("is-studio"),V("studioPanel").hidden=!0,V("startScreen").hidden=Je,ai()});V("studioPanel").addEventListener("click",n=>{let e=n.target.closest("[data-studio-char]"),t=n.target.closest("[data-studio-mode]"),i=n.target.closest("[data-studio-view]");e&&je?.enterStudio(e.dataset.studioChar),t&&je?.studio&&(je.studio.mode=t.dataset.studioMode),i&&je?.studio&&(je.studio.yaw=.45+{front:0,side:Math.PI/2,back:Math.PI}[i.dataset.studioView],je.studio.manual=!0)});V("diceCount").addEventListener("change",n=>{B.s.phase==="roll"&&B.player.human&&(B.player.diceCount=+n.target.value,fi())});document.querySelectorAll("[data-panel]").forEach(n=>n.addEventListener("click",()=>dt(n.dataset.panel)));V("fallback").addEventListener("click",n=>{let e=n.target.closest("[data-tile]");e&&!pi&&dt("tile",+e.dataset.tile)});V("closeSheet").addEventListener("click",()=>{Lt(),ai()});V("sheetBackdrop").addEventListener("click",()=>{Lt(),ai()});document.addEventListener("keydown",n=>{if(n.key==="Escape"&&(Lt(),ai()),n.key==="Tab"&&!V("sheet").hidden){let e=[...V("sheet").querySelectorAll("button:not([disabled]),input,select,a[href]")].filter(s=>!s.hidden&&s.getClientRects().length);if(!e.length)return;let t=e[0],i=e.at(-1);n.shiftKey&&document.activeElement===t?(n.preventDefault(),i.focus()):!n.shiftKey&&document.activeElement===i&&(n.preventDefault(),t.focus())}});V("sheetBody").addEventListener("change",async n=>{if(n.target.id==="musicTrack"&&(B.s.options.track=n.target.value,ea(),Rs()),n.target.id==="speedSelect"&&(B.s.options.speed=+n.target.value,Rs()),n.target.id==="lightingSelect"&&(B.s.options.lighting=Dn(n.target.value),fi()),n.target.id==="qualitySelect"&&(B.s.options.quality=n.target.value,fi()),n.target.id==="importSave"){let e=n.target.files[0];if(!e)return;if(e.size>1e6){ii("\u5B58\u6863\u6587\u4EF6\u8FC7\u5927\uFF0C\u8BF7\u9009\u62E9\u672C\u6E38\u620F\u5BFC\u51FA\u7684 JSON\u3002");return}let t=Qn.restore(await e.text());if(!t){ii("\u5B58\u6863\u4E0D\u5B8C\u6574\u6216\u7248\u672C\u4E0D\u517C\u5BB9\uFF0C\u5F53\u524D\u8FDB\u5EA6\u672A\u4FEE\u6539\u3002");return}ch=t,_t("\u4F7F\u7528\u8FD9\u4E2A\u65C5\u884C\u5B58\u6863\uFF1F",`\u7B2C ${t.s.round} / ${t.s.maxRounds} \u8F6E`,`<p>\u4F1A\u66FF\u6362\u5F53\u524D\u8FDB\u5EA6\u3002\u5BFC\u5165\u524D\u53EF\u4EE5\u5148\u5BFC\u51FA\u5907\u4EFD\u3002</p><div class="row-actions">${Ye("\u5BFC\u51FA\u5F53\u524D\u5B58\u6863","export","",!Je)}${Ye("\u53D6\u6D88\u5BFC\u5165","cancel")}${Ye("\u786E\u8BA4\u5BFC\u5165","import","",!1,"primary")}</div>`,!0)}});var ch=null;V("sheetBody").addEventListener("click",n=>{let e=n.target.closest("[data-act]");if(!e||e.disabled)return;let{act:t}=e.dataset,i=+e.dataset.id,s=+e.dataset.index,r=+e.dataset.target,a=!0;if(t==="applyAdvanced"){if(hh(),ws(ti,hn,+V("playerCountSelect").value))return;Tt=nr(ti),ti=null;try{localStorage.setItem("naiwa-setup-v1",JSON.stringify(Tt))}catch{}Lt(!0),vo(),ai(),ii("\u9AD8\u7EA7\u8BBE\u7F6E\u5DF2\u4FDD\u5B58\uFF0C\u65B0\u5C40\u6309\u6240\u9009\u9635\u5BB9\u5F00\u59CB\u3002");return}if(t==="resetAdvanced"){ti=nr(),dt("advanced");return}if(t==="allRandom"){hh(),ti.opponents=[],dt("advanced");return}if(t==="chooseBuilding"){dt("buildHere",i);return}if(t==="stockFilter"){md=!md,dt("stocks");return}if(t==="stockQty"){let o=V("qty"+i),l=B.position(i,B.s.players[0]);o.value=e.dataset.qty==="maxBuy"?Math.min(1e4,Math.floor(B.s.players[0].money/l.price)):e.dataset.qty==="maxSell"?Math.min(1e4,l.qty):e.dataset.qty,zc(B,i);return}if(t==="resumeGame"){Lt(!0),ai();return}if(t==="copyLink"){navigator.clipboard?.writeText(V("shareUrl").value).then(()=>ii("\u8BD5\u73A9\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5C31\u80FD\u73A9\u3002")).catch(()=>{V("shareUrl").select(),ii("\u8BF7\u957F\u6309\u94FE\u63A5\u590D\u5236\u3002")}),navigator.clipboard||(V("shareUrl").select(),ii("\u8BF7\u957F\u6309\u94FE\u63A5\u590D\u5236\u3002"));return}if(t==="panel"){dt(e.dataset.panel);return}if(t==="card"){let o=B.player.cards[s],l=B.cardHint(o);if(l){ii(l),dt("cards");return}Yt[o].target==="self"?(a=B.card(s),a?(Lt(!0),fi()):fi(!1)):dt("cardTarget",s);return}if(t==="useCard"){let o=B.cardHint(B.player.cards[s]);if(o){ii(o),dt("cards");return}a=B.card(s,r),a?(Lt(!0),fi()):fi(!1);return}if(t==="construct")a=B.construct(i,e.dataset.type);else if(t==="research")a=B.setResearch(i,e.dataset.key);else if(t==="upgrade")a=B.upgrade(i);else if(t==="sell")a=B.sell(i);else if(t==="demolish")a=B.demolish(i),a&&Lt(!0);else if(t==="confirmDemolish"){dt("confirmDemolish",i);return}else if(t==="bank")a=B.bank(e.dataset.kind,+V("bankAmount").value);else if(t==="trade")a=B.trade(i,+V("qty"+i).value*+e.dataset.sign);else if(t==="shop")a=B.shop(e.dataset.key);else if(t==="vehicle")a=B.vehicle(i);else if(t==="estatePay"||t==="estateBuy")a=B.resolveEstate(t==="estateBuy"),(a||B.s.phase==="debt")&&Lt(!0);else if(t==="buy"||t==="pass")a=B.buy(t==="buy"),a&&Lt(!0);else if(t==="branch")a=B.step(i),a&&Lt(!0);else if(t==="ack")a=B.acknowledge(),a&&Lt(!0);else if(t==="settle")a=B.settle(),a&&Lt(!0);else if(t==="bankrupt")a=B.bankrupt(),a&&Lt(!0);else if(t==="confirmBankrupt"){dt("confirmBankrupt");return}else if(t==="sound")go(),B.s.options.sound=!B.s.options.sound;else if(t==="music")B.s.options.music=!Ts(B.s.options).music;else if(t==="voice")B.s.options.voice=!Ts(B.s.options).voice;else if(t==="testVoice"){go().then(()=>ta("laugh"));return}else if(t==="export"){$m();return}else if(t==="confirmRestart"){dt("confirmRestart");return}else if(t==="newGame"){Je=!1,Pn=Qn.restore(B.s),Lt(!0),V("startScreen").hidden=!1,vo(),ai();return}else if(t==="cancel"){Lt(!0),ai();return}else if(t==="viewBoard"){Lt(!0),es=`finished:${B.s.current}:${B.s.round}:${B.player.pos}`,ai();return}else if(t==="import"){if(!ch)return;B=ch,ch=null,Je=!0,je?.followPlayer(),Lt(!0),es="",V("startScreen").hidden=!0,fi(),ii("\u5B58\u6863\u5DF2\u5BFC\u5165\u3002");return}a?(["construct","upgrade","demolish","sell"].includes(t)&&je?.focusLot(i),fi(),Jt?.type==="buildHere"&&["upgrade","construct"].includes(t)&&Lt(!0),Jt&&!["buy","estate","event","branch","finished","debt","confirmBankrupt"].includes(Jt.type)?U1():Jt?.type==="debt"&&dt("debt")):fi(!1)});function Xm(){if(clearTimeout(km),km=setTimeout(Xm,90),!Je||document.hidden||Qr||je?.studio||B.s.phase==="finished"||Jt&&["settings","help","sources","share","news","confirmRestart","talents","mapGuide","stocks","advanced"].includes(Jt.type))return;let n=B.s,e=n.phase,t=n.logs[0],i=n.current;if(!vd.ready({news:mo.busy,moving:!!je?.isMoving(),effects:!!je?.fx.items.length}))return;let s=!1;!B.player.alive&&e==="end"?s=B.end():B.player.human?e==="departure"?s=B.roll():e==="moving"&&(s=B.step()):s=B.ai(),s=s||n.phase!==e||n.logs[0]!==t||n.current!==i,s&&(vd.after(e,n.options.speed),Rs(),ai())}document.addEventListener("visibilitychange",()=>{mo.setPaused(document.hidden||Qr),Ei.visibility(document.hidden||Qr),document.hidden?Rs():ai()});window.addEventListener("pagehide",Rs);vo();ai();Xm();var Hm=Nc("naiwa");Hm&&(document.querySelector(".brand img").src=Hm);!window.__NAIWA_PORTABLE__&&"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register(globalThis.__NAIWA_SERVICE_WORKER_URL__||"./sw.js?v=16").catch(()=>{});})();
