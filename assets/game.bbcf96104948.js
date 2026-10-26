(()=>{var Mt={residence:{name:"\u666E\u901A\u4F4F\u5B85",max:5,cost:1,architecture:"residence",text:"\u9010\u5C42\u52A0\u76D6\uFF0C\u5411\u5BF9\u624B\u6536\u79DF\uFF1B\u540C\u8857\u533A\u4F4F\u5B85\u53C2\u4E0E\u8054\u8425\u52A0\u6536\u3002"},chain:{name:"\u8FDE\u9501\u4FBF\u5229\u5E97",max:1,cost:1.2,architecture:"tea",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF1B\u540C\u4E00\u4E1A\u4E3B\u6BCF\u591A\u4E00\u95F4\u8FDE\u9501\u5E97\uFF0C\u6240\u6709\u5206\u5E97\u7EDF\u4E00\u63D0\u9AD8\u6536\u8D39\uFF0C\u4E0A\u9650400\u3002\u4E0D\u53C2\u4E0E\u8857\u533A\u8054\u8425\u3002"},hotel:{name:"\u5976\u5BB6\u65C5\u9986",max:5,cost:1.4,architecture:"hotel",text:"\u5BF9\u624B\u5165\u4F4F1\u20143\u56DE\u5408\uFF0C\u6309\u5929\u6536\u4F4F\u5BBF\u8D39\u5E76\u6682\u505C\u884C\u52A8\uFF1B\u514D\u79DF\u5361\u53EF\u62B5\u6D88\u672C\u6B21\u5165\u4F4F\u3002"},mall:{name:"\u8D2D\u7269\u4E2D\u5FC3",max:5,cost:1.35,architecture:"mall",text:"\u5BF9\u624B\u8D2D\u7269\u62BD\u7B7E\uFF0C\u630975%\u3001100%\u6216150%\u6D88\u8D39\u500D\u7387\u6536\u8D39\uFF1B\u697C\u5C42\u8D8A\u9AD8\uFF0C\u6D88\u8D39\u57FA\u6570\u8D8A\u9AD8\u3002"},gas:{name:"\u5976\u7F50\u52A0\u6CB9\u7AD9",max:1,cost:.9,architecture:"gas",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF1B\u6309\u672C\u6B21\u884C\u8FDB\u6B65\u6570\u4E0E\u4EA4\u901A\u5DE5\u5177\u7B49\u7EA7\u6536\u52A0\u6CB9\u8D39\uFF0C\u8F66\u8F86\u8D8A\u9AD8\u7EA7\u6536\u8D39\u8D8A\u9AD8\u3002"},research:{name:"\u5976\u5BB6\u7814\u7A76\u6240",max:5,cost:1.2,architecture:"research",text:"\u4E0D\u6536\u8FC7\u8DEF\u8D39\uFF1B\u4E1A\u4E3B\u6BCF\u51FA\u53D1\u4E09\u6B21\u4EA7\u51FA\u6240\u9009\u9053\u5177\u5361\u3002\u5347\u7EA7\u89E3\u9501\u66F4\u591A\u7814\u53D1\u9879\u76EE\uFF0C\u5230\u8BBF\u53EF\u66F4\u6362\u9879\u76EE\u3002"},park:{name:"\u6EE8\u6CB3\u516C\u56ED",max:1,cost:.45,architecture:"garden",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF0C\u4E0D\u6536\u4EFB\u4F55\u8D39\u7528\uFF1B\u6240\u6709\u505C\u9760\u8005\u83B7\u5F9710\u70B9\u5238\uFF0C\u9002\u5408\u8F7B\u677E\u516C\u76CA\u73A9\u6CD5\u3002"}},Je=n=>n?.buildingType||"residence",ji=n=>Mt[Je(n)]?.max||5,$n=n=>["dice","shield","demolish","build","steal"].slice(0,n);function Rd(n){let e=n.player;if(e.businessReady)return!1;e.businessReady=!0;let t=!1;for(let i of n.owned(e)){if(Je(i)!=="research"||!i.level)continue;let s=n.s.ownership[i.tile.id];if(s.researchProgress=(s.researchProgress||0)+1,t=!0,s.researchProgress>=3){s.researchProgress=0;let r=$n(s.level),a=r.includes(s.researchCard)?s.researchCard:r[0];n.log(`${n.char(e).name}\u7684\u300C${i.tile.name}\u300D\u7814\u7A76\u5B8C\u6210\u3002`),n.giveCard(e,a)}}return t}function ah(n){n.level===0?(n.buildingType="residence",delete n.researchCard,delete n.researchProgress):Je(n)==="research"&&!$n(n.level).includes(n.researchCard)&&(n.researchCard=$n(n.level)[0])}function no(n,e){let t=n.s.ownership[e],i=Je(t),s=n.baseRent(e,t.level);return t.level&&i==="hotel"?[1,2,3].map(r=>({amount:Math.round(s*.65)*r,skip:r,suffix:`\u4F4F\u5BBF${r}\u56DE\u5408\u8D39\u7528`,label:`${r}\u56DE\u5408`})):t.level&&i==="mall"?[.75,1,1.5].map(r=>({amount:Math.round(s*r),skip:0,suffix:`\u8D2D\u7269\u6D88\u8D39\uFF08${r*100}%\uFF09`,label:`${r*100}%`})):[{amount:n.rent(e),skip:0,suffix:t.level&&i==="gas"?"\u52A0\u6CB9\u8D39":"\u79DF\u91D1",label:"\u672C\u6B21"}]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var hl="180";var uf=0,Xh=1,df=2;var qh=1,ul=2,on=3,Rn=0,Vt=1,At=2,zt=0,ws=1,Ia=2,Yh=3,Zh=4,dl=5,yi=100,ff=101,pf=102,mf=103,gf=104,Ns=200,vf=201,xf=202,yf=203,Lo=204,Uo=205,Da=206,_f=207,La=208,bf=209,Mf=210,Sf=211,Ef=212,wf=213,Tf=214,fl=0,pl=1,ml=2,Ts=3,gl=4,vl=5,xl=6,yl=7,jh=0,Af=1,Rf=2,Un=0,_l=1,bl=2,Ml=3,ln=4,Sl=5,El=6,wl=7;var Jh=300,ks=301,Fs=302,Tl=303,Al=304,Ua=306,Pi=1e3,Jn=1001,No=1002,qt=1003,Cf=1004;var Na=1005;var _i=1006,Rl=1007;var cn=1008;var wi=1009,Kh=1010,Qh=1011,Ar=1012,Cl=1013,is=1014,Xi=1015,li=1016,Pl=1017,Il=1018,ns=1020,eu=35902,tu=35899,iu=1021,nu=1022,fi=1023,mr=1026,ss=1027,Dl=1028,Ll=1029,su=1030,Ul=1031;var Nl=1033,ka=33776,Fa=33777,Ba=33778,Oa=33779,kl=35840,Fl=35841,Bl=35842,Ol=35843,zl=36196,Hl=37492,Vl=37496,Gl=37808,$l=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,Zl=37814,jl=37815,Jl=37816,Kl=37817,Ql=37818,ec=37819,tc=37820,ic=37821,nc=36492,sc=36494,rc=36495,ac=36283,oc=36284,lc=36285,cc=36286;var sa=2300,ko=2301,Do=2302,Nh=2400,kh=2401,Fh=2402;var Pf=3200,If=3201;var hc=0,Df=1,Nn="",It="srgb",As="srgb-linear",ra="linear",ct="srgb";var Es=7680;var Bh=519,Lf=512,Uf=513,Nf=514,ru=515,kf=516,Ff=517,Bf=518,Of=519,Fo=35044;var au="300 es",zi=2e3,aa=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=1234567,ea=Math.PI/180,gr=180/Math.PI;function Ki(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function ou(n,e){return(n%e+e)%e}function b0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function M0(n,e,t){return n!==e?(t-n)/(e-n):0}function ta(n,e,t){return(1-t)*n+t*e}function S0(n,e,t,i){return ta(n,e,1-Math.exp(-t*i))}function E0(n,e=1){return e-Math.abs(ou(n,e*2)-e)}function w0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function T0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function A0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function R0(n,e){return n+Math.random()*(e-n)}function C0(n){return n*(.5-Math.random())}function P0(n){n!==void 0&&(Cd=n);let e=Cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function I0(n){return n*ea}function D0(n){return n*gr}function L0(n){return(n&n-1)===0&&n!==0}function U0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function N0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function k0(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*f,o*l);break;case"YZY":n.set(c*f,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*f,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*d,o*l);break;case"YXY":n.set(c*d,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var gt={DEG2RAD:ea,RAD2DEG:gr,generateUUID:Ki,clamp:et,euclideanModulo:ou,mapLinear:b0,inverseLerp:M0,lerp:ta,damp:S0,pingpong:E0,smoothstep:w0,smootherstep:T0,randInt:A0,randFloat:R0,randFloatSpread:C0,seededRandom:P0,degToRad:I0,radToDeg:D0,isPowerOfTwo:L0,ceilPowerOfTwo:U0,floorPowerOfTwo:N0,setQuaternionFromProperEuler:k0,normalize:ut,denormalize:Oi},ne=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-o,p=c*f+l*d+h*g+u*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let R=Math.sqrt(y),T=Math.atan2(R,p*x);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let _=o*x;if(c=c*m+f*_,l=l*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oh=new A,Pd=new Qt,Ye=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],x=s[1],y=s[4],_=s[7],R=s[2],T=s[5],L=s[8];return r[0]=a*v+o*x+c*R,r[3]=a*m+o*y+c*T,r[6]=a*p+o*_+c*L,r[1]=l*v+h*x+u*R,r[4]=l*m+h*y+u*T,r[7]=l*p+h*_+u*L,r[2]=f*v+d*x+g*R,r[5]=f*m+d*y+g*T,r[8]=f*p+d*_+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*l-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lh.makeScale(e,t)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,t){return this.premultiply(lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lh=new Ye;function lu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zf(){let n=oa("canvas");return n.style.display="block",n}var Id={};function vr(n){n in Id||(Id[n]=!0,console.warn(n))}function Hf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Dd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ld=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F0(){let n={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[As]:{primaries:e,whitePoint:i,transfer:ra,toXYZ:Dd,fromXYZ:Ld,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Dd,fromXYZ:Ld,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),n}var rt=F0();function An(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Js,Bo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Js===void 0&&(Js=oa("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(An(t[i]/255)*255):t[i]=An(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},B0=0,xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ch(s[a].image)):r.push(ch(s[a]))}else r=ch(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ch(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var O0=0,hh=new A,ai=class n extends Cn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Jn,s=Jn,r=_i,a=cn,o=fi,c=wi,l=n.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Ki(),this.name="",this.source=new xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Jh;ai.DEFAULT_ANISOTROPY=1;var dt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(d+1)/2,R=(p+1)/2,T=(h+f)/4,L=(u+v)/4,U=(g+m)/4;return y>_&&y>R?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=L/i):_>R?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=U/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=L/r,s=U/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oo=class extends Cn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new ai(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new xr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends Oo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},la=class extends ai{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends ai{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Et=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ki):ki.fromBufferAttribute(r,a),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),so.copy(i.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),ro.subVectors(this.max,Vr),Ks.subVectors(e.a,Vr),Qs.subVectors(e.b,Vr),er.subVectors(e.c,Vr),Wn.subVectors(Qs,Ks),Xn.subVectors(er,Qs),_s.subVectors(Ks,er);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-_s.z,_s.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,_s.z,0,-_s.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-_s.y,_s.x,0];return!uh(t,Ks,Qs,er,ro)||(t=[1,0,0,0,1,0,0,0,1],!uh(t,Ks,Qs,er,ro))?!1:(ao.crossVectors(Wn,Xn),t=[ao.x,ao.y,ao.z],uh(t,Ks,Qs,er,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bn=[new A,new A,new A,new A,new A,new A,new A,new A],ki=new A,so=new Et,Ks=new A,Qs=new A,er=new A,Wn=new A,Xn=new A,_s=new A,Vr=new A,ro=new A,ao=new A,bs=new A;function uh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){bs.fromArray(n,r);let o=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),c=e.dot(bs),l=t.dot(bs),h=i.dot(bs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var z0=new Et,Gr=new A,dh=new A,Pn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):z0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(dh)),this.expandByPoint(Gr.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mn=new A,fh=new A,oo=new A,qn=new A,ph=new A,lo=new A,mh=new A,yr=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fh.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(fh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(oo),o=qn.dot(this.direction),c=-qn.dot(oo),l=qn.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fh).addScaledVector(oo,f),d}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);let i=Mn.dot(this.direction),s=Mn.dot(Mn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,s,r){ph.subVectors(t,e),lo.subVectors(i,e),mh.crossVectors(ph,lo);let a=this.direction.dot(mh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);let c=o*this.direction.dot(lo.crossVectors(qn,lo));if(c<0)return null;let l=o*this.direction.dot(ph.cross(qn));if(l<0||c+l>a)return null;let h=-o*qn.dot(mh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class n{constructor(e,t,i,s,r,a,o,c,l,h,u,f,d,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,f,d,g,v,m)}set(e,t,i,s,r,a,o,c,l,h,u,f,d,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H0,e,V0)}lookAt(e,t,i){let s=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Yn.crossVectors(i,vi),Yn.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Yn.crossVectors(i,vi)),Yn.normalize(),co.crossVectors(vi,Yn),s[0]=Yn.x,s[4]=co.x,s[8]=vi.x,s[1]=Yn.y,s[5]=co.y,s[9]=vi.y,s[2]=Yn.z,s[6]=co.z,s[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],y=i[7],_=i[11],R=i[15],T=s[0],L=s[4],U=s[8],S=s[12],M=s[1],D=s[5],k=s[9],X=s[13],W=s[2],O=s[6],z=s[10],ee=s[14],H=s[3],te=s[7],ae=s[11],he=s[15];return r[0]=a*T+o*M+c*W+l*H,r[4]=a*L+o*D+c*O+l*te,r[8]=a*U+o*k+c*z+l*ae,r[12]=a*S+o*X+c*ee+l*he,r[1]=h*T+u*M+f*W+d*H,r[5]=h*L+u*D+f*O+d*te,r[9]=h*U+u*k+f*z+d*ae,r[13]=h*S+u*X+f*ee+d*he,r[2]=g*T+v*M+m*W+p*H,r[6]=g*L+v*D+m*O+p*te,r[10]=g*U+v*k+m*z+p*ae,r[14]=g*S+v*X+m*ee+p*he,r[3]=x*T+y*M+_*W+R*H,r[7]=x*L+y*D+_*O+R*te,r[11]=x*U+y*k+_*z+R*ae,r[15]=x*S+y*X+_*ee+R*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*f+i*l*f+s*o*d-i*c*d)+v*(+t*c*d-t*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+m*(+t*l*u-t*o*d-r*a*u+i*a*d+r*o*h-i*l*h)+p*(-s*o*h-t*c*u+t*o*f+s*a*u-i*a*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=u*m*l-v*f*l+v*c*d-o*m*d-u*c*p+o*f*p,y=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,_=h*v*l-g*u*l+g*o*d-a*v*d-h*o*p+a*u*p,R=g*u*c-h*v*c-g*o*f+a*v*f+h*o*m-a*u*m,T=t*x+i*y+s*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/T;return e[0]=x*L,e[1]=(v*f*r-u*m*r-v*s*d+i*m*d+u*s*p-i*f*p)*L,e[2]=(o*m*r-v*c*r+v*s*l-i*m*l-o*s*p+i*c*p)*L,e[3]=(u*c*r-o*f*r-u*s*l+i*f*l+o*s*d-i*c*d)*L,e[4]=y*L,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*L,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*L,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*d+t*c*d)*L,e[8]=_*L,e[9]=(g*u*r-h*v*r-g*i*d+t*v*d+h*i*p-t*u*p)*L,e[10]=(a*v*r-g*o*r+g*i*l-t*v*l-a*i*p+t*o*p)*L,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*d-t*o*d)*L,e[12]=R*L,e[13]=(h*v*s-g*u*s+g*i*f-t*v*f-h*i*m+t*u*m)*L,e[14]=(g*o*s-a*v*s-g*i*c+t*v*c+a*i*m-t*o*m)*L,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*f+t*o*f)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,x=c*l,y=c*h,_=c*u,R=i.x,T=i.y,L=i.z;return s[0]=(1-(v+p))*R,s[1]=(d+_)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+y)*L,s[9]=(m-x)*L,s[10]=(1-(f+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=tr.set(s[0],s[1],s[2]).length(),a=tr.set(s[4],s[5],s[6]).length(),o=tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Fi.copy(this);let l=1/r,h=1/a,u=1/o;return Fi.elements[0]*=l,Fi.elements[1]*=l,Fi.elements[2]*=l,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,t.setFromRotationMatrix(Fi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=zi,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===zi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===aa)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=zi,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===zi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===aa)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},tr=new A,Fi=new Ke,H0=new A(0,0,0),V0=new A(1,1,1),Yn=new A,co=new A,vi=new A,Ud=new Ke,Nd=new Qt,bi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ud,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},G0=0,kd=new A,ir=new Qt,Sn=new Ke,ho=new A,$r=new A,$0=new A,W0=new Qt,Fd=new A(1,0,0),Bd=new A(0,1,0),Od=new A(0,0,1),zd={type:"added"},X0={type:"removed"},nr={type:"childadded",child:null},gh={type:"childremoved",child:null},Xt=class n extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new bi,i=new Qt,s=new A(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ye}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Fd,e)}rotateY(e){return this.rotateOnAxis(Bd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return kd.copy(e).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fd,e)}translateY(e){return this.translateOnAxis(Bd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ho.copy(e):ho.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt($r,ho,this.up):Sn.lookAt(ho,$r,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Sn),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zd),nr.child=e,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zd),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Xt.DEFAULT_UP=new A(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bi=new A,En=new A,vh=new A,wn=new A,sr=new A,rr=new A,Hd=new A,xh=new A,yh=new A,_h=new A,bh=new dt,Mh=new dt,Sh=new dt,Tn=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Bi.subVectors(e,t),s.cross(Bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Bi.subVectors(s,t),En.subVectors(i,t),vh.subVectors(e,t);let a=Bi.dot(Bi),o=Bi.dot(En),c=Bi.dot(vh),l=En.dot(En),h=En.dot(vh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return bh.setScalar(0),Mh.setScalar(0),Sh.setScalar(0),bh.fromBufferAttribute(e,t),Mh.fromBufferAttribute(e,i),Sh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bh,r.x),a.addScaledVector(Mh,r.y),a.addScaledVector(Sh,r.z),a}static isFrontFacing(e,t,i,s){return Bi.subVectors(i,t),En.subVectors(e,t),Bi.cross(En).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),En.subVectors(this.a,this.b),Bi.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;sr.subVectors(s,i),rr.subVectors(r,i),xh.subVectors(e,i);let c=sr.dot(xh),l=rr.dot(xh);if(c<=0&&l<=0)return t.copy(i);yh.subVectors(e,s);let h=sr.dot(yh),u=rr.dot(yh);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(sr,a);_h.subVectors(e,r);let d=sr.dot(_h),g=rr.dot(_h);if(g>=0&&d<=g)return t.copy(r);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(rr,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Hd.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Hd,o);let p=1/(m+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(sr,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Eh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=ou(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Eh(a,r,e+1/3),this.g=Eh(a,r,e),this.b=Eh(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=Vf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return rt.workingToColorSpace(Kt.copy(this),e),Math.round(et(Kt.r*255,0,255))*65536+Math.round(et(Kt.g*255,0,255))*256+Math.round(et(Kt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Kt.copy(this),t);let i=Kt.r,s=Kt.g,r=Kt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=It){rt.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,s=Kt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(uo);let i=ta(Zn.h,uo.h,t),s=ta(Zn.s,uo.s,t),r=ta(Zn.l,uo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Se;Se.NAMES=Vf;var q0=0,Hi=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=ws,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Uo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lo&&(i.blendSrc=this.blendSrc),this.blendDst!==Uo&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kt=class extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new A,fo=new ne,Y0=0,ri=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fo,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}};var ca=class extends ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ha=class extends ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Pe=class extends ri{constructor(e,t,i){super(new Float32Array(e),t,i)}},Z0=0,Ri=new Ke,wh=new Xt,ar=new A,xi=new Et,Wr=new Et,Wt=new A,tt=class n extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lu(e)?ha:ca)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];xi.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(xi.min,Wr.min),xi.expandByPoint(Wt),Wt.addVectors(xi.max,Wr.max),xi.expandByPoint(Wt)):(xi.expandByPoint(Wr.min),xi.expandByPoint(Wr.max))}xi.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Wt.fromBufferAttribute(o,l),c&&(ar.fromBufferAttribute(e,l),Wt.add(ar)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new A,c[U]=new A;let l=new A,h=new A,u=new A,f=new ne,d=new ne,g=new ne,v=new A,m=new A;function p(U,S,M){l.fromBufferAttribute(i,U),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[U].add(v),o[S].add(v),o[M].add(v),c[U].add(m),c[S].add(m),c[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let U=0,S=x.length;U<S;++U){let M=x[U],D=M.start,k=M.count;for(let X=D,W=D+k;X<W;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let y=new A,_=new A,R=new A,T=new A;function L(U){R.fromBufferAttribute(s,U),T.copy(R);let S=o[U];y.copy(S),y.sub(R.multiplyScalar(R.dot(S))).normalize(),_.crossVectors(T,S);let D=_.dot(c[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,D)}for(let U=0,S=x.length;U<S;++U){let M=x[U],D=M.start,k=M.count;for(let X=D,W=D+k;X<W;X+=3)L(e.getX(X+0)),L(e.getX(X+1)),L(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new A,r=new A,a=new A,o=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new ri(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vd=new Ke,Ms=new yr,po=new Pn,Gd=new A,mo=new A,go=new A,vo=new A,Th=new A,xo=new A,$d=new A,yo=new A,lt=class extends Xt{constructor(e=new tt,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Th.fromBufferAttribute(u,e),a?xo.addScaledVector(Th,h):xo.addScaledVector(Th.sub(t),h))}t.add(xo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(po.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(po,Gd)===null||Ms.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Vd),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,R=y;_<R;_+=3){let T=o.getX(_),L=o.getX(_+1),U=o.getX(_+2);s=_o(this,p,e,i,l,h,u,T,L,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);s=_o(this,a,e,i,l,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,R=y;_<R;_+=3){let T=_,L=_+1,U=_+2;s=_o(this,p,e,i,l,h,u,T,L,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=m,y=m+1,_=m+2;s=_o(this,a,e,i,l,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function j0(n,e,t,i,s,r,a,o){let c;if(e.side===Vt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Rn,o),c===null)return null;yo.copy(o),yo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(yo);return l<t.near||l>t.far?null:{distance:l,point:yo.clone(),object:n}}function _o(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,mo),n.getVertexPosition(c,go),n.getVertexPosition(l,vo);let h=j0(n,e,t,i,mo,go,vo,$d);if(h){let u=new A;Tn.getBarycoord($d,mo,go,vo,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,o,c,l,u,new ne)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,c,l,u,new ne)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,c,l,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new A,materialIndex:0};Tn.getNormal(mo,go,vo,f.normal),h.face=f,h.barycoord=u}return h}var Qi=class n extends tt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function g(v,m,p,x,y,_,R,T,L,U,S){let M=_/L,D=R/U,k=_/2,X=R/2,W=T/2,O=L+1,z=U+1,ee=0,H=0,te=new A;for(let ae=0;ae<z;ae++){let he=ae*D-X;for(let we=0;we<O;we++){let Oe=we*M-k;te[v]=Oe*x,te[m]=he*y,te[p]=W,l.push(te.x,te.y,te.z),te[v]=0,te[m]=0,te[p]=T>0?1:-1,h.push(te.x,te.y,te.z),u.push(we/L),u.push(1-ae/U),ee+=1}}for(let ae=0;ae<U;ae++)for(let he=0;he<L;he++){let we=f+he+O*ae,Oe=f+he+O*(ae+1),We=f+(he+1)+O*(ae+1),Ze=f+(he+1)+O*ae;c.push(we,Oe,Ze),c.push(Oe,We,Ze),H+=6}o.addGroup(d,H,S),d+=H,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ei(n){let e={};for(let t=0;t<n.length;t++){let i=Bs(n[t]);for(let s in i)e[s]=i[s]}return e}function J0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var ci={clone:Bs,merge:ei},K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pt=class extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=J0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ua=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jn=new A,Wd=new ne,Xd=new ne,si=class extends ua{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Wd,Xd),t.subVectors(Xd,Wd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,lr=1,Ho=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new si(or,lr,e,t);s.layers=this.layers,this.add(s);let r=new si(or,lr,e,t);r.layers=this.layers,this.add(r);let a=new si(or,lr,e,t);a.layers=this.layers,this.add(a);let o=new si(or,lr,e,t);o.layers=this.layers,this.add(o);let c=new si(or,lr,e,t);c.layers=this.layers,this.add(c);let l=new si(or,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},da=class extends ai{constructor(e=[],t=ks,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vo=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new da(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qi(5,5,5),r=new pt({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:zt});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===cn&&(t.minFilter=_i),new Ho(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},xe=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},eg={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Rs=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vi=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Go=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fo,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ni=new A,fa=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ni.fromBufferAttribute(this,t),ni.applyMatrix4(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ni.fromBufferAttribute(this,t),ni.applyNormalMatrix(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ni.fromBufferAttribute(this,t),ni.transformDirection(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ri(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ii=class extends Hi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cr,Xr=new A,hr=new A,ur=new A,dr=new ne,qr=new ne,Gf=new Ke,bo=new A,Yr=new A,Mo=new A,qd=new ne,Ah=new ne,Yd=new ne,Gi=class extends Xt{constructor(e=new Ii){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Go(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new fa(i,3,0,!1)),cr.setAttribute("uv",new fa(i,2,3,!1))}this.geometry=cr,this.material=e,this.center=new ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),Gf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-ur.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;So(bo.set(-.5,-.5,0),ur,a,hr,s,r),So(Yr.set(.5,-.5,0),ur,a,hr,s,r),So(Mo.set(.5,.5,0),ur,a,hr,s,r),qd.set(0,0),Ah.set(1,0),Yd.set(1,1);let o=e.ray.intersectTriangle(bo,Yr,Mo,!1,Xr);if(o===null&&(So(Yr.set(-.5,.5,0),ur,a,hr,s,r),Ah.set(0,1),o=e.ray.intersectTriangle(bo,Mo,Yr,!1,Xr),o===null))return;let c=e.ray.origin.distanceTo(Xr);c<e.near||c>e.far||t.push({distance:c,point:Xr.clone(),uv:Tn.getInterpolation(Xr,bo,Yr,Mo,qd,Ah,Yd,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function So(n,e,t,i,s,r){dr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(qr.x=r*dr.x-s*dr.y,qr.y=s*dr.x+r*dr.y):qr.copy(dr),n.copy(e),n.x+=qr.x,n.y+=qr.y,n.applyMatrix4(Gf)}var en=class extends ai{constructor(e=null,t=1,i=1,s,r,a,o,c,l=qt,h=qt,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pa=class extends ri{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fr=new Ke,Zd=new Ke,Eo=[],jd=new Et,tg=new Ke,Zr=new lt,jr=new Pn,Cs=class extends lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Et),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),jd.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(jd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),jr.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fr),Zd.multiplyMatrices(i,fr),Zr.matrixWorld=Zd,Zr.raycast(e,Eo);for(let a=0,o=Eo.length;a<o;a++){let c=Eo[a];c.instanceId=r,c.object=this,t.push(c)}Eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new en(new Float32Array(s*this.count),s,this.count,Dl,Xi));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rh=new A,ig=new A,ng=new Ye,Ci=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rh.subVectors(i,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Rh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ng.getNormalMatrix(e),s=this.coplanarPoint(Rh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new Pn,sg=new ne(.5,.5),wo=new A,Mr=class{constructor(e=new Ci,t=new Ci,i=new Ci,s=new Ci,r=new Ci,a=new Ci){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],y=r[13],_=r[14],R=r[15];if(s[0].setComponents(l-a,d-h,p-g,R-x).normalize(),s[1].setComponents(l+a,d+h,p+g,R+x).normalize(),s[2].setComponents(l+o,d+u,p+v,R+y).normalize(),s[3].setComponents(l-o,d-u,p-v,R-y).normalize(),i)s[4].setComponents(c,f,m,_).normalize(),s[5].setComponents(l-c,d-f,p-m,R-_).normalize();else if(s[4].setComponents(l-c,d-f,p-m,R-_).normalize(),t===zi)s[5].setComponents(l+c,d+f,p+m,R+_).normalize();else if(t===aa)s[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=sg.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(wo.x=s.normal.x>0?e.max.x:e.min.x,wo.y=s.normal.y>0?e.max.y:e.min.y,wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var tn=class extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$o=new A,Wo=new A,Jd=new Ke,Jr=new yr,To=new Pn,Ch=new A,Kd=new A,Sr=class extends Xt{constructor(e=new tt,t=new tn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)$o.fromBufferAttribute(t,s-1),Wo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=$o.distanceTo(Wo);e.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Jd.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(Jd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){let p=h.getX(v),x=h.getX(v+1),y=Ao(this,e,Jr,c,p,x,v);y&&t.push(y)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(d),p=Ao(this,e,Jr,c,v,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){let p=Ao(this,e,Jr,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Ao(this,e,Jr,c,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ao(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if($o.fromBufferAttribute(o,s),Wo.fromBufferAttribute(o,r),t.distanceSqToSegment($o,Wo,Ch,Kd)>i)return;Ch.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ch);if(!(l<e.near||l>e.far))return{distance:l,point:Kd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Qd=new A,ef=new A,Ps=class extends Sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Qd.fromBufferAttribute(t,s),ef.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qd.distanceTo(ef);e.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Kn=class extends ai{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Is=class extends ai{constructor(e,t,i=is,s,r,a,o=qt,c=qt,l,h=mr,u=1){if(h!==mr&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ma=class extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var nn=class n extends tt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,v=[],m=i/2,p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(d,2));function x(){let _=new A,R=new A,T=0,L=(t-e)/i;for(let U=0;U<=r;U++){let S=[],M=U/r,D=M*(t-e)+e;for(let k=0;k<=s;k++){let X=k/s,W=X*c+o,O=Math.sin(W),z=Math.cos(W);R.x=D*O,R.y=-M*i+m,R.z=D*z,u.push(R.x,R.y,R.z),_.set(O,L,z).normalize(),f.push(_.x,_.y,_.z),d.push(X,1-M),S.push(g++)}v.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let M=v[S][U],D=v[S+1][U],k=v[S+1][U+1],X=v[S][U+1];(e>0||S!==0)&&(h.push(M,D,X),T+=3),(t>0||S!==r-1)&&(h.push(D,k,X),T+=3)}l.addGroup(p,T,0),p+=T}function y(_){let R=g,T=new ne,L=new A,U=0,S=_===!0?e:t,M=_===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let D=g;for(let k=0;k<=s;k++){let W=k/s*c+o,O=Math.cos(W),z=Math.sin(W);L.x=S*z,L.y=m*M,L.z=S*O,u.push(L.x,L.y,L.z),f.push(0,M,0),T.x=O*.5+.5,T.y=z*.5*M+.5,d.push(T.x,T.y),g++}for(let k=0;k<s;k++){let X=R+k,W=D+k;_===!0?h.push(W,W+1,X):h.push(W+1,W,X),U+=3}l.addGroup(p,U,_===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},In=class n extends nn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ne:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,s=[],r=[],a=[],o=new A,c=new Ke;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Er=class extends Mi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ne){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xo=class extends Er{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hu(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Ro=new A,Ph=new hu,Ih=new hu,Dh=new hu,Qn=class extends Mi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new A){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ro.subVectors(s[0],s[1]).add(s[0]),l=Ro);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ph.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),Ih.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),Dh.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ph.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ih.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Dh.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(Ph.calc(c),Ih.calc(c),Dh.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function tf(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function rg(n,e){let t=1-n;return t*t*e}function ag(n,e){return 2*(1-n)*n*e}function og(n,e){return n*n*e}function ia(n,e,t,i){return rg(n,e)+ag(n,t)+og(n,i)}function lg(n,e){let t=1-n;return t*t*t*e}function cg(n,e){let t=1-n;return 3*t*t*n*e}function hg(n,e){return 3*(1-n)*n*n*e}function ug(n,e){return n*n*n*e}function na(n,e,t,i,s){return lg(n,e)+cg(n,t)+hg(n,i)+ug(n,s)}var ga=class extends Mi{constructor(e=new ne,t=new ne,i=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(na(e,s.x,r.x,a.x,o.x),na(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qo=class extends Mi{constructor(e=new A,t=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(na(e,s.x,r.x,a.x,o.x),na(e,s.y,r.y,a.y,o.y),na(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends Mi{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yo=class extends Mi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Mi{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ia(e,s.x,r.x,a.x),ia(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Mi{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ia(e,s.x,r.x,a.x),ia(e,s.y,r.y,a.y),ia(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sn=class extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(tf(o,c.x,l.x,h.x,u.x),tf(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},Zo=Object.freeze({__proto__:null,ArcCurve:Xo,CatmullRomCurve3:Qn,CubicBezierCurve:ga,CubicBezierCurve3:qo,EllipseCurve:Er,LineCurve:va,LineCurve3:Yo,QuadraticBezierCurve:xa,QuadraticBezierCurve3:ya,SplineCurve:sn}),jo=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Zo[s.type]().fromJSON(s))}return this}},_a=class extends jo{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new va(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new xa(this.currentPoint.clone(),new ne(e,t),new ne(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ga(this.currentPoint.clone(),new ne(e,t),new ne(i,s),new ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new sn(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new Er(e,t,i,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$i=class extends _a{constructor(e){super(e),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new _a().fromJSON(s))}return this}};function dg(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=$f(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=vg(n,e,r,t)),n.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=n[f],g=n[f+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return ba(r,a,t,o,c,l,0),a}function $f(n,e,t,i,s){let r;if(s===Rg(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=nf(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=nf(a/i|0,n[a],n[a+1],r);return r&&wr(r,r.next)&&(Sa(r),r=r.next),r}function Ds(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(wr(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Sa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ba(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Mg(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?pg(n,i,s,r):fg(n)){e.push(c.i,n.i,l.i),Sa(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=mg(Ds(n),e),ba(n,e,t,i,s,r,2)):a===2&&gg(n,e,t,i,s,r):ba(Ds(n),e,t,i,s,r,1);break}}}function fg(n){let e=n.prev,t=n,i=n.next;if(Dt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(s,r,a),u=Math.min(o,c,l),f=Math.max(s,r,a),d=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Qr(s,o,r,c,a,l,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pg(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,c,l),g=Math.min(h,u,f),v=Math.max(o,c,l),m=Math.max(h,u,f),p=Oh(d,g,e,t,i),x=Oh(v,m,e,t,i),y=n.prevZ,_=n.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Qr(o,h,c,u,l,f,y.x,y.y)&&Dt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Qr(o,h,c,u,l,f,_.x,_.y)&&Dt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Qr(o,h,c,u,l,f,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Qr(o,h,c,u,l,f,_.x,_.y)&&Dt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function mg(n,e){let t=n;do{let i=t.prev,s=t.next.next;!wr(i,s)&&Xf(i,t,t.next,s)&&Ma(i,s)&&Ma(s,i)&&(e.push(i.i,t.i,s.i),Sa(t),Sa(t.next),t=n=s),t=t.next}while(t!==n);return Ds(t)}function gg(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wg(a,o)){let c=qf(a,o);a=Ds(a,a.next),c=Ds(c,c.next),ba(a,e,t,i,s,r,0),ba(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function vg(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=$f(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Eg(l))}s.sort(xg);for(let r=0;r<s.length;r++)t=yg(s[r],t);return t}function xg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function yg(n,e){let t=_g(n,e);if(!t)return e;let i=qf(t,n);return Ds(i,i.next),Ds(t,t.next)}function _g(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(wr(n,t))return t;do{if(wr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Wf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Ma(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&bg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function bg(n,e){return Dt(n.prev,n,e.prev)<0&&Dt(e.next,n,n.next)<0}function Mg(n,e,t,i){let s=n;do s.z===0&&(s.z=Oh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Sg(s)}function Sg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Oh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Eg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Wf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Qr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Wf(n,e,t,i,s,r,a,o)}function wg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Tg(n,e)&&(Ma(n,e)&&Ma(e,n)&&Ag(n,e)&&(Dt(n.prev,n,e.prev)||Dt(n,e.prev,e))||wr(n,e)&&Dt(n.prev,n,n.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function wr(n,e){return n.x===e.x&&n.y===e.y}function Xf(n,e,t,i){let s=Po(Dt(n,e,t)),r=Po(Dt(n,e,i)),a=Po(Dt(t,i,n)),o=Po(Dt(t,i,e));return!!(s!==r&&a!==o||s===0&&Co(n,t,e)||r===0&&Co(n,i,e)||a===0&&Co(t,n,i)||o===0&&Co(t,e,i))}function Co(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Po(n){return n>0?1:n<0?-1:0}function Tg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Xf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ma(n,e){return Dt(n.prev,n,n.next)<0?Dt(n,e,n.next)>=0&&Dt(n,n.prev,e)>=0:Dt(n,e,n.prev)<0||Dt(n,n.next,e)<0}function Ag(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function qf(n,e){let t=zh(n.i,n.x,n.y),i=zh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function nf(n,e,t,i){let s=zh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Sa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function zh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Hh=class{static triangulate(e,t,i=2){return dg(e,t,i)}},Ji=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];sf(e),rf(i,e);let a=e.length;t.forEach(sf);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,rf(i,t[c]);let o=Hh.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function sf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function rf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Dn=class n extends tt{constructor(e=new $i([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Cg,y,_=!1,R,T,L,U;p&&(y=p.getSpacedPoints(h),_=!0,f=!1,R=p.computeFrenetFrames(h,!1),T=new A,L=new A,U=new A),f||(m=0,d=0,g=0,v=0);let S=o.extractPoints(l),M=S.shape,D=S.holes;if(!Ji.isClockWise(M)){M=M.reverse();for(let le=0,j=D.length;le<j;le++){let re=D[le];Ji.isClockWise(re)&&(D[le]=re.reverse())}}function X(le){let re=10000000000000001e-36,se=le[0];for(let ve=1;ve<=le.length;ve++){let de=ve%le.length,ye=le[de],He=ye.x-se.x,Ge=ye.y-se.y,C=He*He+Ge*Ge,b=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(se.x),Math.abs(se.y)),G=re*b*b;if(C<=G){le.splice(de,1),ve--;continue}se=ye}}X(M),D.forEach(X);let W=D.length,O=M;for(let le=0;le<W;le++){let j=D[le];M=M.concat(j)}function z(le,j,re){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(j,re)}let ee=M.length;function H(le,j,re){let se,ve,de,ye=le.x-j.x,He=le.y-j.y,Ge=re.x-le.x,C=re.y-le.y,b=ye*ye+He*He,G=ye*C-He*Ge;if(Math.abs(G)>Number.EPSILON){let E=Math.sqrt(b),I=Math.sqrt(Ge*Ge+C*C),P=j.x-He/E,Y=j.y+ye/E,ie=re.x-C/I,_e=re.y+Ge/I,B=((ie-P)*C-(_e-Y)*Ge)/(ye*C-He*Ge);se=P+ye*B-le.x,ve=Y+He*B-le.y;let Z=se*se+ve*ve;if(Z<=2)return new ne(se,ve);de=Math.sqrt(Z/2)}else{let E=!1;ye>Number.EPSILON?Ge>Number.EPSILON&&(E=!0):ye<-Number.EPSILON?Ge<-Number.EPSILON&&(E=!0):Math.sign(He)===Math.sign(C)&&(E=!0),E?(se=-He,ve=ye,de=Math.sqrt(b)):(se=ye,ve=He,de=Math.sqrt(b/2))}return new ne(se/de,ve/de)}let te=[];for(let le=0,j=O.length,re=j-1,se=le+1;le<j;le++,re++,se++)re===j&&(re=0),se===j&&(se=0),te[le]=H(O[le],O[re],O[se]);let ae=[],he,we=te.concat();for(let le=0,j=W;le<j;le++){let re=D[le];he=[];for(let se=0,ve=re.length,de=ve-1,ye=se+1;se<ve;se++,de++,ye++)de===ve&&(de=0),ye===ve&&(ye=0),he[se]=H(re[se],re[de],re[ye]);ae.push(he),we=we.concat(he)}let Oe;if(m===0)Oe=Ji.triangulateShape(O,D);else{let le=[],j=[];for(let re=0;re<m;re++){let se=re/m,ve=d*Math.cos(se*Math.PI/2),de=g*Math.sin(se*Math.PI/2)+v;for(let ye=0,He=O.length;ye<He;ye++){let Ge=z(O[ye],te[ye],de);ge(Ge.x,Ge.y,-ve),se===0&&le.push(Ge)}for(let ye=0,He=W;ye<He;ye++){let Ge=D[ye];he=ae[ye];let C=[];for(let b=0,G=Ge.length;b<G;b++){let E=z(Ge[b],he[b],de);ge(E.x,E.y,-ve),se===0&&C.push(E)}se===0&&j.push(C)}}Oe=Ji.triangulateShape(le,j)}let We=Oe.length,Ze=g+v;for(let le=0;le<ee;le++){let j=f?z(M[le],we[le],Ze):M[le];_?(L.copy(R.normals[0]).multiplyScalar(j.x),T.copy(R.binormals[0]).multiplyScalar(j.y),U.copy(y[0]).add(L).add(T),ge(U.x,U.y,U.z)):ge(j.x,j.y,0)}for(let le=1;le<=h;le++)for(let j=0;j<ee;j++){let re=f?z(M[j],we[j],Ze):M[j];_?(L.copy(R.normals[le]).multiplyScalar(re.x),T.copy(R.binormals[le]).multiplyScalar(re.y),U.copy(y[le]).add(L).add(T),ge(U.x,U.y,U.z)):ge(re.x,re.y,u/h*le)}for(let le=m-1;le>=0;le--){let j=le/m,re=d*Math.cos(j*Math.PI/2),se=g*Math.sin(j*Math.PI/2)+v;for(let ve=0,de=O.length;ve<de;ve++){let ye=z(O[ve],te[ve],se);ge(ye.x,ye.y,u+re)}for(let ve=0,de=D.length;ve<de;ve++){let ye=D[ve];he=ae[ve];for(let He=0,Ge=ye.length;He<Ge;He++){let C=z(ye[He],he[He],se);_?ge(C.x,C.y+y[h-1].y,y[h-1].x+re):ge(C.x,C.y,u+re)}}}J(),oe();function J(){let le=s.length/3;if(f){let j=0,re=ee*j;for(let se=0;se<We;se++){let ve=Oe[se];Re(ve[2]+re,ve[1]+re,ve[0]+re)}j=h+m*2,re=ee*j;for(let se=0;se<We;se++){let ve=Oe[se];Re(ve[0]+re,ve[1]+re,ve[2]+re)}}else{for(let j=0;j<We;j++){let re=Oe[j];Re(re[2],re[1],re[0])}for(let j=0;j<We;j++){let re=Oe[j];Re(re[0]+ee*h,re[1]+ee*h,re[2]+ee*h)}}i.addGroup(le,s.length/3-le,0)}function oe(){let le=s.length/3,j=0;ue(O,j),j+=O.length;for(let re=0,se=D.length;re<se;re++){let ve=D[re];ue(ve,j),j+=ve.length}i.addGroup(le,s.length/3-le,1)}function ue(le,j){let re=le.length;for(;--re>=0;){let se=re,ve=re-1;ve<0&&(ve=le.length-1);for(let de=0,ye=h+m*2;de<ye;de++){let He=ee*de,Ge=ee*(de+1),C=j+se+He,b=j+ve+He,G=j+ve+Ge,E=j+se+Ge;Ae(C,b,G,E)}}}function ge(le,j,re){c.push(le),c.push(j),c.push(re)}function Re(le,j,re){at(le),at(j),at(re);let se=s.length/3,ve=x.generateTopUV(i,s,se-3,se-2,se-1);N(ve[0]),N(ve[1]),N(ve[2])}function Ae(le,j,re,se){at(le),at(j),at(se),at(j),at(re),at(se);let ve=s.length/3,de=x.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);N(de[0]),N(de[1]),N(de[3]),N(de[1]),N(de[2]),N(de[3])}function at(le){s.push(c[le*3+0]),s.push(c[le*3+1]),s.push(c[le*3+2])}function N(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Pg(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Zo[s.type]().fromJSON(s)),new n(i,e.options)}},Cg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new ne(r,a),new ne(o,c),new ne(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ne(a,1-c),new ne(l,1-u),new ne(f,1-g),new ne(v,1-p)]:[new ne(o,1-c),new ne(h,1-u),new ne(d,1-g),new ne(m,1-p)]}};function Pg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var rn=class n extends tt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new A,f=new ne,d=new A,g=new A,v=new A,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=t;x++){let y=i+x*h*s,_=Math.sin(y),R=Math.cos(y);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*R,a.push(u.x,u.y,u.z),f.x=x/t,f.y=T/(e.length-1),o.push(f.x,f.y);let L=c[3*T+0]*_,U=c[3*T+1],S=c[3*T+0]*R;l.push(L,U,S)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){let _=y+x*e.length,R=_,T=_+e.length,L=_+e.length+1,U=_+1;r.push(R,T,U),r.push(L,U,T)}this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("uv",new Pe(o,2)),this.setAttribute("normal",new Pe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Yt=class n extends tt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let x=p*f-a;for(let y=0;y<l;y++){let _=y*u-r;g.push(_,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let y=x+l*p,_=x+l*(p+1),R=x+1+l*(p+1),T=x+1+l*p;d.push(y,_,T),d.push(_,R,T)}this.setIndex(d),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ls=class n extends tt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,f=(t-e)/s,d=new A,g=new ne;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let x=p+m,y=x,_=x+i+1,R=x+i+2,T=x+1;o.push(y,_,T),o.push(_,R,T)}}this.setIndex(o),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ea=class n extends tt{constructor(e=new $i([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(r,3)),this.setAttribute("uv",new Pe(a,2));function l(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;Ji.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let x=g[m];Ji.isClockWise(x)===!0&&(g[m]=x.reverse())}let v=Ji.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let x=g[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){let x=d[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=v.length;m<p;m++){let x=v[m],y=x[0]+u,_=x[1]+u,R=x[2]+u;i.push(y,_,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ig(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function Ig(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Zt=class n extends tt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new A,f=new A,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let x=[],y=p/i,_=0;p===0&&a===0?_=.5/t:p===i&&c===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let T=R/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(T+_,1-y),x.push(l++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){let y=h[p][x+1],_=h[p][x],R=h[p+1][x],T=h[p+1][x+1];(p!==0||a>0)&&d.push(y,_,T),(p!==i-1||c<Math.PI)&&d.push(_,R,T)}this.setIndex(d),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var oi=class n extends tt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new A,u=new A,f=new A;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let v=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,x=(s+1)*d+g;a.push(v,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wa=class n extends tt{constructor(e=new ya(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,c=new A,l=new ne,h=new A,u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(d,2));function v(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),x(),p()}function m(y){h=e.getPointAt(y/t,h);let _=a.normals[y],R=a.binormals[y];for(let T=0;T<=s;T++){let L=T/s*Math.PI*2,U=Math.sin(L),S=-Math.cos(L);c.x=S*_.x+U*R.x,c.y=S*_.y+U*R.y,c.z=S*_.z+U*R.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let R=(s+1)*(y-1)+(_-1),T=(s+1)*y+(_-1),L=(s+1)*y+_,U=(s+1)*(y-1)+_;g.push(R,T,U),g.push(T,L,U)}}function x(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)l.x=y/t,l.y=_/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ta=class extends pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wt=class extends yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Aa=class extends Hi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Jo=class extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ko=class extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Io(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Dg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Us=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qo=class extends Us{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kh:r=e,o=2*t-i;break;case Fh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case kh:a=e,c=2*i-t;break;case Fh:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,x=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*v+.5*g,_=d*m-d*v;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+x*a[l+R]+y*a[c+R]+_*a[u+R];return r}},el=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},tl=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Si=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case sa:t=this.InterpolantFactoryMethodDiscrete;break;case ko:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Dg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Do,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=ko;var es=class extends Si{constructor(e,t,i){super(e,t,i)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=sa;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}};il.prototype.ValueTypeName="color";var nl=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}};nl.prototype.ValueTypeName="number";var sl=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Qt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ra=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Si{constructor(e,t,i){super(e,t,i)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=sa;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}};rl.prototype.ValueTypeName="vector";var al=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Yf=new al,ol=class{constructor(e){this.manager=e!==void 0?e:Yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ln=class extends Tr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lh=new Ke,af=new A,of=new A,ll=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;af.setFromMatrixPosition(e.matrixWorld),t.position.copy(af),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),Lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var lf=new Ke,Kr=new A,Uh=new A,Vh=class extends ll{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Kr),Uh.copy(i.position),Uh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uh),i.updateMatrixWorld(),s.makeTranslation(-Kr.x,-Kr.y,-Kr.z),lf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf,i.coordinateSystem,i.reversedDepth)}},Ca=class extends Tr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ei=class extends ua{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gh=class extends ll{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},an=class extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Gh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var cl=class extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Pa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var uu="\\[\\]\\.:\\/",Lg=new RegExp("["+uu+"]","g"),du="[^"+uu+"]",Ug="[^"+uu.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",du),kg=/(WCOD+)?/.source.replace("WCOD",Ug),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),Og=new RegExp("^"+Ng+kg+Fg+Bg+"$"),zg=["material","materials","bones","map"],$h=class{constructor(e,t,i){let s=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lg,"")}static parseTrackName(e){let t=Og.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=$h;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pb=new Float32Array(1);var cf=new Ke,Wi=class{constructor(e,t,i=0,s=1/0){this.ray=new yr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new _r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cf),this}intersectObject(e,t=!0,i=[]){return Wh(e,this,i,t),i.sort(hf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Wh(e[s],this,i,t);return i.sort(hf),i}};function hf(n,e){return n.distance-e.distance}function Wh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Wh(r[a],e,t,!0)}}function fu(n,e,t,i){let s=Hg(i);switch(t){case iu:return n*e;case Dl:return n*e/s.components*s.byteLength;case Ll:return n*e/s.components*s.byteLength;case su:return n*e*2/s.components*s.byteLength;case Ul:return n*e*2/s.components*s.byteLength;case nu:return n*e*3/s.components*s.byteLength;case fi:return n*e*4/s.components*s.byteLength;case Nl:return n*e*4/s.components*s.byteLength;case ka:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:case Ol:return Math.max(n,16)*Math.max(e,8)/4;case kl:case Bl:return Math.max(n,8)*Math.max(e,8)/2;case zl:case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nc:case sc:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ac:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lc:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hg(n){switch(n){case wi:case Kh:return{byteLength:1,components:1};case Ar:case Qh:case li:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case is:case Cl:case Xi:return{byteLength:4,components:1};case eu:case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vg(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let v=u[d];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$g=`#ifdef USE_ALPHAHASH
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
#endif`,Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
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
#endif`,jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
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
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ev=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iv=`#ifdef USE_IRIDESCENCE
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
#endif`,nv=`#ifdef USE_BUMPMAP
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
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dv=`#define PI 3.141592653589793
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
} // validated`,fv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pv=`vec3 transformedNormal = objectNormal;
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
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",_v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pv=`#ifdef USE_GRADIENTMAP
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
}`,Iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uv=`uniform bool receiveShadow;
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
#endif`,Nv=`#ifdef USE_ENVMAP
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
#endif`,kv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zv=`PhysicalMaterial material;
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
#endif`,Hv=`struct PhysicalMaterial {
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
}`,Vv=`
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
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
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
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,Qv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`#ifdef USE_MORPHTARGETS
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
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
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
#endif`,dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ax=`float getShadowMask() {
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
}`,Rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`#include <common>
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
}`,Zx=`#if DEPTH_PACKING == 3200
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
}`,jx=`#define DISTANCE
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
}`,Jx=`#define DISTANCE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`uniform float scale;
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
}`,ty=`uniform vec3 diffuse;
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
}`,iy=`#include <common>
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
}`,ny=`uniform vec3 diffuse;
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
}`,sy=`#define LAMBERT
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
}`,ry=`#define LAMBERT
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
}`,ay=`#define MATCAP
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
}`,oy=`#define MATCAP
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
}`,ly=`#define NORMAL
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
}`,cy=`#define NORMAL
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
}`,hy=`#define PHONG
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
}`,uy=`#define PHONG
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
}`,dy=`#define STANDARD
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
}`,fy=`#define STANDARD
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
}`,py=`#define TOON
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
}`,my=`#define TOON
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
}`,gy=`uniform float size;
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
}`,vy=`uniform vec3 diffuse;
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
}`,xy=`#include <common>
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
}`,yy=`uniform vec3 color;
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
}`,_y=`uniform float rotation;
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
}`,by=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Gg,alphahash_pars_fragment:$g,alphamap_fragment:Wg,alphamap_pars_fragment:Xg,alphatest_fragment:qg,alphatest_pars_fragment:Yg,aomap_fragment:Zg,aomap_pars_fragment:jg,batching_pars_vertex:Jg,batching_vertex:Kg,begin_vertex:Qg,beginnormal_vertex:ev,bsdfs:tv,iridescence_fragment:iv,bumpmap_pars_fragment:nv,clipping_planes_fragment:sv,clipping_planes_pars_fragment:rv,clipping_planes_pars_vertex:av,clipping_planes_vertex:ov,color_fragment:lv,color_pars_fragment:cv,color_pars_vertex:hv,color_vertex:uv,common:dv,cube_uv_reflection_fragment:fv,defaultnormal_vertex:pv,displacementmap_pars_vertex:mv,displacementmap_vertex:gv,emissivemap_fragment:vv,emissivemap_pars_fragment:xv,colorspace_fragment:yv,colorspace_pars_fragment:_v,envmap_fragment:bv,envmap_common_pars_fragment:Mv,envmap_pars_fragment:Sv,envmap_pars_vertex:Ev,envmap_physical_pars_fragment:Nv,envmap_vertex:wv,fog_vertex:Tv,fog_pars_vertex:Av,fog_fragment:Rv,fog_pars_fragment:Cv,gradientmap_pars_fragment:Pv,lightmap_pars_fragment:Iv,lights_lambert_fragment:Dv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Uv,lights_toon_fragment:kv,lights_toon_pars_fragment:Fv,lights_phong_fragment:Bv,lights_phong_pars_fragment:Ov,lights_physical_fragment:zv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Vv,lights_fragment_maps:Gv,lights_fragment_end:$v,logdepthbuf_fragment:Wv,logdepthbuf_pars_fragment:Xv,logdepthbuf_pars_vertex:qv,logdepthbuf_vertex:Yv,map_fragment:Zv,map_pars_fragment:jv,map_particle_fragment:Jv,map_particle_pars_fragment:Kv,metalnessmap_fragment:Qv,metalnessmap_pars_fragment:ex,morphinstance_vertex:tx,morphcolor_vertex:ix,morphnormal_vertex:nx,morphtarget_pars_vertex:sx,morphtarget_vertex:rx,normal_fragment_begin:ax,normal_fragment_maps:ox,normal_pars_fragment:lx,normal_pars_vertex:cx,normal_vertex:hx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:dx,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:px,iridescence_pars_fragment:mx,opaque_fragment:gx,packing:vx,premultiplied_alpha_fragment:xx,project_vertex:yx,dithering_fragment:_x,dithering_pars_fragment:bx,roughnessmap_fragment:Mx,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:Ex,shadowmap_pars_vertex:wx,shadowmap_vertex:Tx,shadowmask_pars_fragment:Ax,skinbase_vertex:Rx,skinning_pars_vertex:Cx,skinning_vertex:Px,skinnormal_vertex:Ix,specularmap_fragment:Dx,specularmap_pars_fragment:Lx,tonemapping_fragment:Ux,tonemapping_pars_fragment:Nx,transmission_fragment:kx,transmission_pars_fragment:Fx,uv_pars_fragment:Bx,uv_pars_vertex:Ox,uv_vertex:zx,worldpos_vertex:Hx,background_vert:Vx,background_frag:Gx,backgroundCube_vert:$x,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:qx,depth_vert:Yx,depth_frag:Zx,distanceRGBA_vert:jx,distanceRGBA_frag:Jx,equirect_vert:Kx,equirect_frag:Qx,linedashed_vert:ey,linedashed_frag:ty,meshbasic_vert:iy,meshbasic_frag:ny,meshlambert_vert:sy,meshlambert_frag:ry,meshmatcap_vert:ay,meshmatcap_frag:oy,meshnormal_vert:ly,meshnormal_frag:cy,meshphong_vert:hy,meshphong_frag:uy,meshphysical_vert:dy,meshphysical_frag:fy,meshtoon_vert:py,meshtoon_frag:my,points_vert:gy,points_frag:vy,shadow_vert:xy,shadow_frag:yy,sprite_vert:_y,sprite_frag:by},Te={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},hn={basic:{uniforms:ei([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ei([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Se(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ei([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ei([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ei([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Se(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ei([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ei([Te.points,Te.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ei([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ei([Te.common,Te.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ei([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ei([Te.sprite,Te.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:ei([Te.common,Te.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:ei([Te.lights,Te.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};hn.physical={uniforms:ei([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var uc={r:0,b:0,g:0},Os=new bi,My=new Ke;function Sy(n,e,t,i,s,r,a){let o=new Se(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1,R=g(y);R===null?p(o,c):R&&R.isColor&&(p(R,1),_=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,_){let R=g(_);R&&(R.isCubeTexture||R.mapping===Ua)?(h===void 0&&(h=new lt(new Qi(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:Bs(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Os.copy(_.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(My.makeRotationFromEuler(Os)),h.material.toneMapped=rt.getTransfer(R.colorSpace)!==ct,(u!==R||f!==R.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,d=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new lt(new Yt(2,2),new pt({name:"BackgroundMaterial",uniforms:Bs(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=rt.getTransfer(R.colorSpace)!==ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=R,f=R.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(uc,cu(n)),i.buffers.color.setClear(uc.r,uc.g,uc.b,_,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:v,addToRenderList:m,dispose:x}}function Ey(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(M,D,k,X,W){let O=!1,z=u(X,k,D);r!==z&&(r=z,l(r.object)),O=d(M,X,k,W),O&&g(M,X,k,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,_(M,D,k,X),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,D,k){let X=k.wireframe===!0,W=i[M.id];W===void 0&&(W={},i[M.id]=W);let O=W[D.id];O===void 0&&(O={},W[D.id]=O);let z=O[X];return z===void 0&&(z=f(c()),O[X]=z),z}function f(M){let D=[],k=[],X=[];for(let W=0;W<t;W++)D[W]=0,k[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:X,object:M,attributes:{},index:null}}function d(M,D,k,X){let W=r.attributes,O=D.attributes,z=0,ee=k.getAttributes();for(let H in ee)if(ee[H].location>=0){let ae=W[H],he=O[H];if(he===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),ae===void 0||ae.attribute!==he||he&&ae.data!==he.data)return!0;z++}return r.attributesNum!==z||r.index!==X}function g(M,D,k,X){let W={},O=D.attributes,z=0,ee=k.getAttributes();for(let H in ee)if(ee[H].location>=0){let ae=O[H];ae===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));let he={};he.attribute=ae,ae&&ae.data&&(he.data=ae.data),W[H]=he,z++}r.attributes=W,r.attributesNum=z,r.index=X}function v(){let M=r.newAttributes;for(let D=0,k=M.length;D<k;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){let k=r.newAttributes,X=r.enabledAttributes,W=r.attributeDivisors;k[M]=1,X[M]===0&&(n.enableVertexAttribArray(M),X[M]=1),W[M]!==D&&(n.vertexAttribDivisor(M,D),W[M]=D)}function x(){let M=r.newAttributes,D=r.enabledAttributes;for(let k=0,X=D.length;k<X;k++)D[k]!==M[k]&&(n.disableVertexAttribArray(k),D[k]=0)}function y(M,D,k,X,W,O,z){z===!0?n.vertexAttribIPointer(M,D,k,W,O):n.vertexAttribPointer(M,D,k,X,W,O)}function _(M,D,k,X){v();let W=X.attributes,O=k.getAttributes(),z=D.defaultAttributeValues;for(let ee in O){let H=O[ee];if(H.location>=0){let te=W[ee];if(te===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){let ae=te.normalized,he=te.itemSize,we=e.get(te);if(we===void 0)continue;let Oe=we.buffer,We=we.type,Ze=we.bytesPerElement,J=We===n.INT||We===n.UNSIGNED_INT||te.gpuType===Cl;if(te.isInterleavedBufferAttribute){let oe=te.data,ue=oe.stride,ge=te.offset;if(oe.isInstancedInterleavedBuffer){for(let Re=0;Re<H.locationSize;Re++)p(H.location+Re,oe.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Re=0;Re<H.locationSize;Re++)m(H.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Re=0;Re<H.locationSize;Re++)y(H.location+Re,he/H.locationSize,We,ae,ue*Ze,(ge+he/H.locationSize*Re)*Ze,J)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,te.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let oe=0;oe<H.locationSize;oe++)y(H.location+oe,he/H.locationSize,We,ae,he*Ze,he/H.locationSize*oe*Ze,J)}}else if(z!==void 0){let ae=z[ee];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(H.location,ae);break;case 3:n.vertexAttrib3fv(H.location,ae);break;case 4:n.vertexAttrib4fv(H.location,ae);break;default:n.vertexAttrib1fv(H.location,ae)}}}}x()}function R(){U();for(let M in i){let D=i[M];for(let k in D){let X=D[k];for(let W in X)h(X[W].object),delete X[W];delete D[k]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let D=i[M.id];for(let k in D){let X=D[k];for(let W in X)h(X[W].object),delete X[W];delete D[k]}delete i[M.id]}function L(M){for(let D in i){let k=i[D];if(k[M.id]===void 0)continue;let X=k[M.id];for(let W in X)h(X[W].object),delete X[W];delete k[M.id]}}function U(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function wy(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ty(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==fi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let U=L===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==wi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Xi&&!U)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function Ay(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Ci,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let x=r?0:i,y=x*4,_=p.clippingState||null;c.value=_,_=h(g,f,y,d);for(let R=0;R!==y;++R)_[R]=t[R];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==v;++y,_+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Ry(n){let e=new WeakMap;function t(a,o){return o===Tl?a.mapping=ks:o===Al&&(a.mapping=Fs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Tl||o===Al)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Vo(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Cr=4,Zf=[.125,.215,.35,.446,.526,.582],Vs=20,pu=new Ei,jf=new Se,mu=null,gu=0,vu=0,xu=!1,Hs=(1+Math.sqrt(5))/2,Rr=1/Hs,Jf=[new A(-Hs,Rr,0),new A(Hs,Rr,0),new A(-Rr,0,Hs),new A(Rr,0,Hs),new A(0,Hs,-Rr),new A(0,Hs,Rr),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Cy=new A,Ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Cy}=r;mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,vu),this._renderer.xr.enabled=xu,e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:li,format:fi,colorSpace:As,depthBuffer:!1},s=Kf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Py(r)),this._blurMaterial=Iy(r,e,t)}return s}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,pu)}_sceneToCubeUV(e,t,i,s,r){let c=new si(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(jf),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new kt({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new lt(new Qi,v),p=!1,x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,p=!0):(v.color.copy(jf),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let R=this._cubeSize;dc(s,_*R,y>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ks||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;dc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,pu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jf[(s-r-1)%Jf.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new lt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Vs-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Vs;m>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vs}`);let p=[],x=0;for(let L=0;L<Vs;++L){let U=L/v,S=Math.exp(-U*U/2);p.push(S),L===0?x+=S:L<m&&(x+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let _=this._sizeLods[s],R=3*_*(s>y-Cr?s-y+Cr:0),T=4*(this._cubeSize-_);dc(t,R,T,3*_,2*_),c.setRenderTarget(t),c.render(u,pu)}};function Py(n){let e=[],t=[],i=[],s=n,r=n-Cr+1+Zf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Cr?c=Zf[a-n+Cr-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let T=0;T<d;T++){let L=T%3*2/3-1,U=T>2?0:-1,S=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];x.set(S,v*g*T),y.set(f,m*g*T);let M=[T,T,T,T,T,T];_.set(M,p*g*T)}let R=new tt;R.setAttribute("position",new ri(x,v)),R.setAttribute("uv",new ri(y,m)),R.setAttribute("faceIndex",new ri(_,p)),e.push(R),s>Cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kf(n,e,t){let i=new Ht(n,e,t);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Iy(n,e,t){let i=new Float32Array(Vs),s=new A(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Qf(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function ep(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function Dy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Tl||c===Al,h=c===ks||c===Fs;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ir(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Ir(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ly(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&vr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Uy(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,v=0;if(d!==null){let x=d.array;v=d.version;for(let y=0,_=x.length;y<_;y+=3){let R=x[y+0],T=x[y+1],L=x[y+2];f.push(R,T,T,L,L,R)}}else if(g!==void 0){let x=g.array;v=g.version;for(let y=0,_=x.length/3-1;y<_;y+=3){let R=y+0,T=y+1,L=y+2;f.push(R,T,T,L,L,R)}}else return;let m=new(lu(f)?ha:ca)(f,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Ny(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*v[x];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ky(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Fy(n,e,t){let i=new WeakMap,s=new dt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=o.attributes.position.count*y,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*R*4*u),L=new la(T,_,R,u);L.type=Xi,L.needsUpdate=!0;let U=y*4;for(let M=0;M<u;M++){let D=m[M],k=p[M],X=x[M],W=_*R*4*M;for(let O=0;O<D.count;O++){let z=O*U;d===!0&&(s.fromBufferAttribute(D,O),T[W+z+0]=s.x,T[W+z+1]=s.y,T[W+z+2]=s.z,T[W+z+3]=0),g===!0&&(s.fromBufferAttribute(k,O),T[W+z+4]=s.x,T[W+z+5]=s.y,T[W+z+6]=s.z,T[W+z+7]=0),v===!0&&(s.fromBufferAttribute(X,O),T[W+z+8]=s.x,T[W+z+9]=s.y,T[W+z+10]=s.z,T[W+z+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new ne(_,R)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function By(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var yp=new ai,tp=new Is(1,1),_p=new la,bp=new zo,Mp=new da,ip=[],np=[],sp=new Float32Array(16),rp=new Float32Array(9),ap=new Float32Array(4);function Dr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ip[s];if(r===void 0&&(r=new Float32Array(s),ip[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pc(n,e){let t=np[e];t===void 0&&(t=new Int32Array(e),np[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Oy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function Hy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function Vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function Gy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Gt(t,i))return;ap.set(i),n.uniformMatrix2fv(this.addr,!1,ap),$t(t,i)}}function $y(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Gt(t,i))return;rp.set(i),n.uniformMatrix3fv(this.addr,!1,rp),$t(t,i)}}function Wy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Gt(t,i))return;sp.set(i),n.uniformMatrix4fv(this.addr,!1,sp),$t(t,i)}}function Xy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function Yy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function Zy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function jy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function Ky(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function Qy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function e_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tp.compareFunction=ru,r=tp):r=yp,t.setTexture2D(e||r,s)}function t_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bp,s)}function i_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Mp,s)}function n_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||_p,s)}function s_(n){switch(n){case 5126:return Oy;case 35664:return zy;case 35665:return Hy;case 35666:return Vy;case 35674:return Gy;case 35675:return $y;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return Zy;case 5125:return jy;case 36294:return Jy;case 36295:return Ky;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return n_}}function r_(n,e){n.uniform1fv(this.addr,e)}function a_(n,e){let t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function o_(n,e){let t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function l_(n,e){let t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function c_(n,e){let t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function h_(n,e){let t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u_(n,e){let t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function d_(n,e){n.uniform1iv(this.addr,e)}function f_(n,e){n.uniform2iv(this.addr,e)}function p_(n,e){n.uniform3iv(this.addr,e)}function m_(n,e){n.uniform4iv(this.addr,e)}function g_(n,e){n.uniform1uiv(this.addr,e)}function v_(n,e){n.uniform2uiv(this.addr,e)}function x_(n,e){n.uniform3uiv(this.addr,e)}function y_(n,e){n.uniform4uiv(this.addr,e)}function __(n,e,t){let i=this.cache,s=e.length,r=pc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||yp,r[a])}function b_(n,e,t){let i=this.cache,s=e.length,r=pc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bp,r[a])}function M_(n,e,t){let i=this.cache,s=e.length,r=pc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Mp,r[a])}function S_(n,e,t){let i=this.cache,s=e.length,r=pc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_p,r[a])}function E_(n){switch(n){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return v_;case 36295:return x_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}var _u=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=s_(t.type)}},bu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E_(t.type)}},Mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},yu=/(\w+)(\])?(\[|\.)?/g;function op(n,e){n.seq.push(e),n.map[e.id]=e}function w_(n,e,t){let i=n.name,s=i.length;for(yu.lastIndex=0;;){let r=yu.exec(i),a=yu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){op(t,l===void 0?new _u(o,n,e):new bu(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Mu(o),op(t,u)),t=u}}}var Pr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);w_(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function lp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var T_=37297,A_=0;function R_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var cp=new Ye;function C_(n){rt._getMatrix(cp,rt.workingColorSpace,n);let e=`mat3( ${cp.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case ra:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+R_(n.getShaderSource(e),o)}else return r}function P_(n,e){let t=C_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function I_(n,e){let t;switch(e){case _l:t="Linear";break;case bl:t="Reinhard";break;case Ml:t="Cineon";break;case ln:t="ACESFilmic";break;case El:t="AgX";break;case wl:t="Neutral";break;case Sl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fc=new A;function D_(){rt.getLuminanceCoefficients(fc);let n=fc.x.toFixed(4),e=fc.y.toFixed(4),t=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function U_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function za(n){return n!==""}function up(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(n){return n.replace(k_,B_)}var F_=new Map;function B_(n,e){let t=it[e];if(t===void 0){let i=F_.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Su(t)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fp(n){return n.replace(O_,z_)}function z_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function H_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function V_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case Fs:e="ENVMAP_TYPE_CUBE";break;case Ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function $_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jh:e="ENVMAP_BLENDING_MULTIPLY";break;case Af:e="ENVMAP_BLENDING_MIX";break;case Rf:e="ENVMAP_BLENDING_ADD";break}return e}function W_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function X_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=H_(t),l=V_(t),h=G_(t),u=$_(t),f=W_(t),d=L_(t),g=U_(r),v=s.createProgram(),m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(za).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(za).join(`
`),p.length>0&&(p+=`
`)):(m=[pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),p=[pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?it.tonemapping_pars_fragment:"",t.toneMapping!==Un?I_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,P_("linearToOutputTexel",t.outputColorSpace),D_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),a=Su(a),a=up(a,t),a=dp(a,t),o=Su(o),o=up(o,t),o=dp(o,t),a=fp(a),o=fp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=x+m+a,_=x+p+o,R=lp(s,s.VERTEX_SHADER,y),T=lp(s,s.FRAGMENT_SHADER,_);s.attachShader(v,R),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(v)||"",X=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(T)||"",O=k.trim(),z=X.trim(),ee=W.trim(),H=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,R,T);else{let ae=hp(s,R,"vertex"),he=hp(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ae+`
`+he)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||ee==="")&&(te=!1);te&&(D.diagnostics={runnable:H,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(R),s.deleteShader(T),U=new Pr(s,v),S=N_(s,v)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,T_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}var q_=0,Eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new wu(e),t.set(e,i)),i}},wu=class{constructor(e){this.id=q_++,this.code=e,this.usedTimes=0}};function Y_(n,e,t,i,s,r,a){let o=new _r,c=new Eu,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,k,X){let W=k.fog,O=X.geometry,z=S.isMeshStandardMaterial?k.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),H=ee&&ee.mapping===Ua?ee.image.height:null,te=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=ae!==void 0?ae.length:0,we=0;O.morphAttributes.position!==void 0&&(we=1),O.morphAttributes.normal!==void 0&&(we=2),O.morphAttributes.color!==void 0&&(we=3);let Oe,We,Ze,J;if(te){let ht=hn[te];Oe=ht.vertexShader,We=ht.fragmentShader}else Oe=S.vertexShader,We=S.fragmentShader,c.update(S),Ze=c.getVertexShaderID(S),J=c.getFragmentShaderID(S);let oe=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),ge=X.isInstancedMesh===!0,Re=X.isBatchedMesh===!0,Ae=!!S.map,at=!!S.matcap,N=!!ee,le=!!S.aoMap,j=!!S.lightMap,re=!!S.bumpMap,se=!!S.normalMap,ve=!!S.displacementMap,de=!!S.emissiveMap,ye=!!S.metalnessMap,He=!!S.roughnessMap,Ge=S.anisotropy>0,C=S.clearcoat>0,b=S.dispersion>0,G=S.iridescence>0,E=S.sheen>0,I=S.transmission>0,P=Ge&&!!S.anisotropyMap,Y=C&&!!S.clearcoatMap,ie=C&&!!S.clearcoatNormalMap,_e=C&&!!S.clearcoatRoughnessMap,B=G&&!!S.iridescenceMap,Z=G&&!!S.iridescenceThicknessMap,Me=E&&!!S.sheenColorMap,ze=E&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,Ee=!!S.specularColorMap,Xe=!!S.specularIntensityMap,F=I&&!!S.transmissionMap,fe=I&&!!S.thicknessMap,be=!!S.gradientMap,De=!!S.alphaMap,pe=S.alphaTest>0,ce=!!S.alphaHash,ke=!!S.extensions,je=Un;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(je=n.toneMapping);let xt={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Oe,fragmentShader:We,defines:S.defines,customVertexShaderID:Ze,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Re,batchingColor:Re&&X._colorsTexture!==null,instancing:ge,instancingColor:ge&&X.instanceColor!==null,instancingMorph:ge&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:As,alphaToCoverage:!!S.alphaToCoverage,map:Ae,matcap:at,envMap:N,envMapMode:N&&ee.mapping,envMapCubeUVHeight:H,aoMap:le,lightMap:j,bumpMap:re,normalMap:se,displacementMap:f&&ve,emissiveMap:de,normalMapObjectSpace:se&&S.normalMapType===Df,normalMapTangentSpace:se&&S.normalMapType===hc,metalnessMap:ye,roughnessMap:He,anisotropy:Ge,anisotropyMap:P,clearcoat:C,clearcoatMap:Y,clearcoatNormalMap:ie,clearcoatRoughnessMap:_e,dispersion:b,iridescence:G,iridescenceMap:B,iridescenceThicknessMap:Z,sheen:E,sheenColorMap:Me,sheenRoughnessMap:ze,specularMap:Ue,specularColorMap:Ee,specularIntensityMap:Xe,transmission:I,transmissionMap:F,thicknessMap:fe,gradientMap:be,opaque:S.transparent===!1&&S.blending===ws&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:pe,alphaHash:ce,combine:S.combine,mapUv:Ae&&v(S.map.channel),aoMapUv:le&&v(S.aoMap.channel),lightMapUv:j&&v(S.lightMap.channel),bumpMapUv:re&&v(S.bumpMap.channel),normalMapUv:se&&v(S.normalMap.channel),displacementMapUv:ve&&v(S.displacementMap.channel),emissiveMapUv:de&&v(S.emissiveMap.channel),metalnessMapUv:ye&&v(S.metalnessMap.channel),roughnessMapUv:He&&v(S.roughnessMap.channel),anisotropyMapUv:P&&v(S.anisotropyMap.channel),clearcoatMapUv:Y&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&v(S.sheenRoughnessMap.channel),specularMapUv:Ue&&v(S.specularMap.channel),specularColorMapUv:Ee&&v(S.specularColorMap.channel),specularIntensityMapUv:Xe&&v(S.specularIntensityMap.channel),transmissionMapUv:F&&v(S.transmissionMap.channel),thicknessMapUv:fe&&v(S.thicknessMap.channel),alphaMapUv:De&&v(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(se||Ge),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!O.attributes.uv&&(Ae||De),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ue,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:we,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&rt.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:de&&S.emissiveMap.isVideoTexture===!0&&rt.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===At,flipSided:S.side===Vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ke&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&S.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let M=g[S.type],D;if(M){let k=hn[M];D=ci.clone(k.uniforms)}else D=S.uniforms;return D}function R(S,M){let D;for(let k=0,X=h.length;k<X;k++){let W=h[k];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new X_(n,M,S,r),h.push(D)),D}function T(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function L(S){c.remove(S)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:U}}function Z_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function j_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,d,g,v,m){let p=a(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,g,v,m){let p=a(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||j_),i.length>1&&i.sort(f||mp),s.length>1&&s.sort(f||mp)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function J_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new gp,n.set(i,[a])):s>=r.length?(a=new gp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function K_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Se};break;case"SpotLight":t={position:new A,direction:new A,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new A,halfWidth:new A,halfHeight:new A};break}return n[e.id]=t,t}}}function Q_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var e1=0;function t1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function i1(n){let e=new K_,t=Q_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);let s=new A,r=new Ke,a=new Ke;function o(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,x=0,y=0,_=0,R=0,T=0,L=0;l.sort(t1);for(let S=0,M=l.length;S<M;S++){let D=l[S],k=D.color,X=D.intensity,W=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*X,u+=k.g*X,f+=k.b*X;else if(D.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],X);L++}else if(D.isDirectionalLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ee=D.shadow,H=t.get(D);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=O,i.directionalShadowMatrix[d]=D.shadow.matrix,x++}i.directional[d]=z,d++}else if(D.isSpotLight){let z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(k).multiplyScalar(X),z.distance=W,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[v]=z;let ee=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,ee.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[v]=ee.matrix,D.castShadow){let H=t.get(D);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=O,_++}v++}else if(D.isRectAreaLight){let z=e.get(D);z.color.copy(k).multiplyScalar(X),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=z,m++}else if(D.isPointLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){let ee=D.shadow,H=t.get(D);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,H.shadowCameraNear=ee.camera.near,H.shadowCameraFar=ee.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=z,g++}else if(D.isHemisphereLight){let z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(X),z.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[p]=z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==x||U.numPointShadows!==y||U.numSpotShadows!==_||U.numSpotMaps!==R||U.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,U.directionalLength=d,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=x,U.numPointShadows=y,U.numSpotShadows=_,U.numSpotMaps=R,U.numLightProbes=L,i.version=e1++)}function c(l,h){let u=0,f=0,d=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let y=l[p];if(y.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=i.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function vp(n){let e=new i1(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function n1(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vp(n),e.set(s,[o])):r>=a.length?(o=new vp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
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
}`;function a1(n,e,t){let i=new Mr,s=new ne,r=new ne,a=new dt,o=new Jo({depthPacking:If}),c=new Ko,l={},h=t.maxTextureSize,u={[Rn]:Vt,[Vt]:Rn,[At]:At},f=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:s1,fragmentShader:r1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new tt;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let p=this.type;this.render=function(T,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),k=n.state;k.setBlending(zt),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=p!==on&&this.type===on,W=p===on&&this.type!==on;for(let O=0,z=T.length;O<z;O++){let ee=T[O],H=ee.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let te=H.getFrameExtents();if(s.multiply(te),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,H.mapSize.y=r.y)),H.map===null||X===!0||W===!0){let he=this.type!==on?{minFilter:qt,magFilter:qt}:{};H.map!==null&&H.map.dispose(),H.map=new Ht(s.x,s.y,he),H.map.texture.name=ee.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let ae=H.getViewportCount();for(let he=0;he<ae;he++){let we=H.getViewport(he);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),k.viewport(a),H.updateMatrices(ee,he),i=H.getFrustum(),_(L,U,H.camera,ee,this.type)}H.isPointLightShadow!==!0&&this.type===on&&x(H,U),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,D)};function x(T,L){let U=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ht(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(L,null,U,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(L,null,U,d,v,null)}function y(T,L,U,S){let M=null,D=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=M.uuid,X=L.uuid,W=l[k];W===void 0&&(W={},l[k]=W);let O=W[X];O===void 0&&(O=M.clone(),W[X]=O,L.addEventListener("dispose",R)),M=O}if(M.visible=L.visible,M.wireframe=L.wireframe,S===on?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:u[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=n.properties.get(M);k.light=U}return M}function _(T,L,U,S,M){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===on)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let X=e.update(T),W=T.material;if(Array.isArray(W)){let O=X.groups;for(let z=0,ee=O.length;z<ee;z++){let H=O[z],te=W[H.materialIndex];if(te&&te.visible){let ae=y(T,te,S,M);T.onBeforeShadow(n,T,L,U,X,ae,H),n.renderBufferDirect(U,null,X,ae,T,H),T.onAfterShadow(n,T,L,U,X,ae,H)}}}else if(W.visible){let O=y(T,W,S,M);T.onBeforeShadow(n,T,L,U,X,O,null),n.renderBufferDirect(U,null,X,O,T,null),T.onAfterShadow(n,T,L,U,X,O,null)}}let k=T.children;for(let X=0,W=k.length;X<W;X++)_(k[X],L,U,S,M)}function R(T){T.target.removeEventListener("dispose",R);for(let U in l){let S=l[U],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var o1={[fl]:pl,[ml]:xl,[gl]:yl,[Ts]:vl,[pl]:fl,[xl]:ml,[yl]:gl,[vl]:Ts};function l1(n,e){function t(){let F=!1,fe=new dt,be=null,De=new dt(0,0,0,0);return{setMask:function(pe){be!==pe&&!F&&(n.colorMask(pe,pe,pe,pe),be=pe)},setLocked:function(pe){F=pe},setClear:function(pe,ce,ke,je,xt){xt===!0&&(pe*=je,ce*=je,ke*=je),fe.set(pe,ce,ke,je),De.equals(fe)===!1&&(n.clearColor(pe,ce,ke,je),De.copy(fe))},reset:function(){F=!1,be=null,De.set(-1,0,0,0)}}}function i(){let F=!1,fe=!1,be=null,De=null,pe=null;return{setReversed:function(ce){if(fe!==ce){let ke=e.get("EXT_clip_control");ce?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),fe=ce;let je=pe;pe=null,this.setClear(je)}},getReversed:function(){return fe},setTest:function(ce){ce?oe(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(ce){be!==ce&&!F&&(n.depthMask(ce),be=ce)},setFunc:function(ce){if(fe&&(ce=o1[ce]),De!==ce){switch(ce){case fl:n.depthFunc(n.NEVER);break;case pl:n.depthFunc(n.ALWAYS);break;case ml:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case gl:n.depthFunc(n.EQUAL);break;case vl:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=ce}},setLocked:function(ce){F=ce},setClear:function(ce){pe!==ce&&(fe&&(ce=1-ce),n.clearDepth(ce),pe=ce)},reset:function(){F=!1,be=null,De=null,pe=null,fe=!1}}}function s(){let F=!1,fe=null,be=null,De=null,pe=null,ce=null,ke=null,je=null,xt=null;return{setTest:function(ht){F||(ht?oe(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(ht){fe!==ht&&!F&&(n.stencilMask(ht),fe=ht)},setFunc:function(ht,_n,Zi){(be!==ht||De!==_n||pe!==Zi)&&(n.stencilFunc(ht,_n,Zi),be=ht,De=_n,pe=Zi)},setOp:function(ht,_n,Zi){(ce!==ht||ke!==_n||je!==Zi)&&(n.stencilOp(ht,_n,Zi),ce=ht,ke=_n,je=Zi)},setLocked:function(ht){F=ht},setClear:function(ht){xt!==ht&&(n.clearStencil(ht),xt=ht)},reset:function(){F=!1,fe=null,be=null,De=null,pe=null,ce=null,ke=null,je=null,xt=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,R=null,T=null,L=new Se(0,0,0),U=0,S=!1,M=null,D=null,k=null,X=null,W=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ee=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=ee>=2);let te=null,ae={},he=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Oe=new dt().fromArray(he),We=new dt().fromArray(we);function Ze(F,fe,be,De){let pe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(F,ce),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<be;ke++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(fe+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ce}let J={};J[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(Ts),re(!1),se(Xh),oe(n.CULL_FACE),le(zt);function oe(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function ue(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function ge(F,fe){return u[F]!==fe?(n.bindFramebuffer(F,fe),u[F]=fe,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=fe),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Re(F,fe){let be=d,De=!1;if(F){be=f.get(fe),be===void 0&&(be=[],f.set(fe,be));let pe=F.textures;if(be.length!==pe.length||be[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,ke=pe.length;ce<ke;ce++)be[ce]=n.COLOR_ATTACHMENT0+ce;be.length=pe.length,De=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,De=!0);De&&n.drawBuffers(be)}function Ae(F){return g!==F?(n.useProgram(F),g=F,!0):!1}let at={[yi]:n.FUNC_ADD,[ff]:n.FUNC_SUBTRACT,[pf]:n.FUNC_REVERSE_SUBTRACT};at[mf]=n.MIN,at[gf]=n.MAX;let N={[Ns]:n.ZERO,[vf]:n.ONE,[xf]:n.SRC_COLOR,[Lo]:n.SRC_ALPHA,[Mf]:n.SRC_ALPHA_SATURATE,[La]:n.DST_COLOR,[Da]:n.DST_ALPHA,[yf]:n.ONE_MINUS_SRC_COLOR,[Uo]:n.ONE_MINUS_SRC_ALPHA,[bf]:n.ONE_MINUS_DST_COLOR,[_f]:n.ONE_MINUS_DST_ALPHA,[Sf]:n.CONSTANT_COLOR,[Ef]:n.ONE_MINUS_CONSTANT_COLOR,[wf]:n.CONSTANT_ALPHA,[Tf]:n.ONE_MINUS_CONSTANT_ALPHA};function le(F,fe,be,De,pe,ce,ke,je,xt,ht){if(F===zt){v===!0&&(ue(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),F!==dl){if(F!==m||ht!==S){if((p!==yi||_!==yi)&&(n.blendEquation(n.FUNC_ADD),p=yi,_=yi),ht)switch(F){case ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ia:n.blendFunc(n.ONE,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,y=null,R=null,T=null,L.set(0,0,0),U=0,m=F,S=ht}return}pe=pe||fe,ce=ce||be,ke=ke||De,(fe!==p||pe!==_)&&(n.blendEquationSeparate(at[fe],at[pe]),p=fe,_=pe),(be!==x||De!==y||ce!==R||ke!==T)&&(n.blendFuncSeparate(N[be],N[De],N[ce],N[ke]),x=be,y=De,R=ce,T=ke),(je.equals(L)===!1||xt!==U)&&(n.blendColor(je.r,je.g,je.b,xt),L.copy(je),U=xt),m=F,S=!1}function j(F,fe){F.side===At?ue(n.CULL_FACE):oe(n.CULL_FACE);let be=F.side===Vt;fe&&(be=!be),re(be),F.blending===ws&&F.transparent===!1?le(zt):le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let De=F.stencilWrite;o.setTest(De),De&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),de(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function se(F){F!==uf?(oe(n.CULL_FACE),F!==D&&(F===Xh?n.cullFace(n.BACK):F===df?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),D=F}function ve(F){F!==k&&(z&&n.lineWidth(F),k=F)}function de(F,fe,be){F?(oe(n.POLYGON_OFFSET_FILL),(X!==fe||W!==be)&&(n.polygonOffset(fe,be),X=fe,W=be)):ue(n.POLYGON_OFFSET_FILL)}function ye(F){F?oe(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function He(F){F===void 0&&(F=n.TEXTURE0+O-1),te!==F&&(n.activeTexture(F),te=F)}function Ge(F,fe,be){be===void 0&&(te===null?be=n.TEXTURE0+O-1:be=te);let De=ae[be];De===void 0&&(De={type:void 0,texture:void 0},ae[be]=De),(De.type!==F||De.texture!==fe)&&(te!==be&&(n.activeTexture(be),te=be),n.bindTexture(F,fe||J[F]),De.type=F,De.texture=fe)}function C(){let F=ae[te];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function E(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function P(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(F){Oe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Oe.copy(F))}function ze(F){We.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),We.copy(F))}function Ue(F,fe){let be=l.get(fe);be===void 0&&(be=new WeakMap,l.set(fe,be));let De=be.get(F);De===void 0&&(De=n.getUniformBlockIndex(fe,F.name),be.set(F,De))}function Ee(F,fe){let De=l.get(fe).get(F);c.get(fe)!==De&&(n.uniformBlockBinding(fe,De,F.__bindingPointIndex),c.set(fe,De))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},te=null,ae={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,R=null,T=null,L=new Se(0,0,0),U=0,S=!1,M=null,D=null,k=null,X=null,W=null,Oe.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:ue,bindFramebuffer:ge,drawBuffers:Re,useProgram:Ae,setBlending:le,setMaterial:j,setFlipSided:re,setCullFace:se,setLineWidth:ve,setPolygonOffset:de,setScissorTest:ye,activeTexture:He,bindTexture:Ge,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:B,texImage3D:Z,updateUBOMapping:Ue,uniformBlockBinding:Ee,texStorage2D:ie,texStorage3D:_e,texSubImage2D:E,texSubImage3D:I,compressedTexSubImage2D:P,compressedTexSubImage3D:Y,scissor:Me,viewport:ze,reset:Xe}}function c1(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return d?new OffscreenCanvas(C,b):oa("canvas")}function v(C,b,G){let E=1,I=Ge(C);if((I.width>G||I.height>G)&&(E=G/Math.max(I.width,I.height)),E<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let P=Math.floor(E*I.width),Y=Math.floor(E*I.height);u===void 0&&(u=g(P,Y));let ie=b?g(P,Y):u;return ie.width=P,ie.height=Y,ie.getContext("2d").drawImage(C,0,0,P,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+P+"x"+Y+")."),ie}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,b,G,E,I=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let P=b;if(b===n.RED&&(G===n.FLOAT&&(P=n.R32F),G===n.HALF_FLOAT&&(P=n.R16F),G===n.UNSIGNED_BYTE&&(P=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(P=n.R8UI),G===n.UNSIGNED_SHORT&&(P=n.R16UI),G===n.UNSIGNED_INT&&(P=n.R32UI),G===n.BYTE&&(P=n.R8I),G===n.SHORT&&(P=n.R16I),G===n.INT&&(P=n.R32I)),b===n.RG&&(G===n.FLOAT&&(P=n.RG32F),G===n.HALF_FLOAT&&(P=n.RG16F),G===n.UNSIGNED_BYTE&&(P=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(P=n.RG8UI),G===n.UNSIGNED_SHORT&&(P=n.RG16UI),G===n.UNSIGNED_INT&&(P=n.RG32UI),G===n.BYTE&&(P=n.RG8I),G===n.SHORT&&(P=n.RG16I),G===n.INT&&(P=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(P=n.RGB8UI),G===n.UNSIGNED_SHORT&&(P=n.RGB16UI),G===n.UNSIGNED_INT&&(P=n.RGB32UI),G===n.BYTE&&(P=n.RGB8I),G===n.SHORT&&(P=n.RGB16I),G===n.INT&&(P=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(P=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(P=n.RGBA16UI),G===n.UNSIGNED_INT&&(P=n.RGBA32UI),G===n.BYTE&&(P=n.RGBA8I),G===n.SHORT&&(P=n.RGBA16I),G===n.INT&&(P=n.RGBA32I)),b===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(P=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(P=n.R11F_G11F_B10F)),b===n.RGBA){let Y=I?ra:rt.getTransfer(E);G===n.FLOAT&&(P=n.RGBA32F),G===n.HALF_FLOAT&&(P=n.RGBA16F),G===n.UNSIGNED_BYTE&&(P=Y===ct?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)}return(P===n.R16F||P===n.R32F||P===n.RG16F||P===n.RG32F||P===n.RGBA16F||P===n.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function _(C,b){let G;return C?b===null||b===is||b===ns?G=n.DEPTH24_STENCIL8:b===Xi?G=n.DEPTH32F_STENCIL8:b===Ar&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===is||b===ns?G=n.DEPTH_COMPONENT24:b===Xi?G=n.DEPTH_COMPONENT32F:b===Ar&&(G=n.DEPTH_COMPONENT16),G}function R(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==_i?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){let b=C.target;b.removeEventListener("dispose",T),U(b),b.isVideoTexture&&h.delete(b)}function L(C){let b=C.target;b.removeEventListener("dispose",L),M(b)}function U(C){let b=i.get(C);if(b.__webglInit===void 0)return;let G=C.source,E=f.get(G);if(E){let I=E[b.__cacheKey];I.usedTimes--,I.usedTimes===0&&S(C),Object.keys(E).length===0&&f.delete(G)}i.remove(C)}function S(C){let b=i.get(C);n.deleteTexture(b.__webglTexture);let G=C.source,E=f.get(G);delete E[b.__cacheKey],a.memory.textures--}function M(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let E=0;E<6;E++){if(Array.isArray(b.__webglFramebuffer[E]))for(let I=0;I<b.__webglFramebuffer[E].length;I++)n.deleteFramebuffer(b.__webglFramebuffer[E][I]);else n.deleteFramebuffer(b.__webglFramebuffer[E]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[E])}else{if(Array.isArray(b.__webglFramebuffer))for(let E=0;E<b.__webglFramebuffer.length;E++)n.deleteFramebuffer(b.__webglFramebuffer[E]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let E=0;E<b.__webglColorRenderbuffer.length;E++)b.__webglColorRenderbuffer[E]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[E]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=C.textures;for(let E=0,I=G.length;E<I;E++){let P=i.get(G[E]);P.__webglTexture&&(n.deleteTexture(P.__webglTexture),a.memory.textures--),i.remove(G[E])}i.remove(C)}let D=0;function k(){D=0}function X(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function W(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function O(C,b){let G=i.get(C);if(C.isVideoTexture&&ye(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let E=C.image;if(E===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(E.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,C,b);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function z(C,b){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){J(G,C,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function ee(C,b){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){J(G,C,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function H(C,b){let G=i.get(C);if(C.version>0&&G.__version!==C.version){oe(G,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}let te={[Pi]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[No]:n.MIRRORED_REPEAT},ae={[qt]:n.NEAREST,[Cf]:n.NEAREST_MIPMAP_NEAREST,[Na]:n.NEAREST_MIPMAP_LINEAR,[_i]:n.LINEAR,[Rl]:n.LINEAR_MIPMAP_NEAREST,[cn]:n.LINEAR_MIPMAP_LINEAR},he={[Lf]:n.NEVER,[Of]:n.ALWAYS,[Uf]:n.LESS,[ru]:n.LEQUAL,[Nf]:n.EQUAL,[Bf]:n.GEQUAL,[kf]:n.GREATER,[Ff]:n.NOTEQUAL};function we(C,b){if(b.type===Xi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===_i||b.magFilter===Rl||b.magFilter===Na||b.magFilter===cn||b.minFilter===_i||b.minFilter===Rl||b.minFilter===Na||b.minFilter===cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,te[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,te[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,te[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ae[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ae[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,he[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qt||b.minFilter!==Na&&b.minFilter!==cn||b.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Oe(C,b){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));let E=b.source,I=f.get(E);I===void 0&&(I={},f.set(E,I));let P=W(b);if(P!==C.__cacheKey){I[P]===void 0&&(I[P]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),I[P].usedTimes++;let Y=I[C.__cacheKey];Y!==void 0&&(I[C.__cacheKey].usedTimes--,Y.usedTimes===0&&S(b)),C.__cacheKey=P,C.__webglTexture=I[P].texture}return G}function We(C,b,G){return Math.floor(Math.floor(C/G)/b)}function Ze(C,b,G,E){let P=C.updateRanges;if(P.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,G,E,b.data);else{P.sort((Z,Me)=>Z.start-Me.start);let Y=0;for(let Z=1;Z<P.length;Z++){let Me=P[Y],ze=P[Z],Ue=Me.start+Me.count,Ee=We(ze.start,b.width,4),Xe=We(Me.start,b.width,4);ze.start<=Ue+1&&Ee===Xe&&We(ze.start+ze.count-1,b.width,4)===Ee?Me.count=Math.max(Me.count,ze.start+ze.count-Me.start):(++Y,P[Y]=ze)}P.length=Y+1;let ie=n.getParameter(n.UNPACK_ROW_LENGTH),_e=n.getParameter(n.UNPACK_SKIP_PIXELS),B=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Z=0,Me=P.length;Z<Me;Z++){let ze=P[Z],Ue=Math.floor(ze.start/4),Ee=Math.ceil(ze.count/4),Xe=Ue%b.width,F=Math.floor(Ue/b.width),fe=Ee,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Xe,F,fe,be,G,E,b.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(n.UNPACK_SKIP_ROWS,B)}}function J(C,b,G){let E=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(E=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(E=n.TEXTURE_3D);let I=Oe(C,b),P=b.source;t.bindTexture(E,C.__webglTexture,n.TEXTURE0+G);let Y=i.get(P);if(P.version!==Y.__version||I===!0){t.activeTexture(n.TEXTURE0+G);let ie=rt.getPrimaries(rt.workingColorSpace),_e=b.colorSpace===Nn?null:rt.getPrimaries(b.colorSpace),B=b.colorSpace===Nn||ie===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let Z=v(b.image,!1,s.maxTextureSize);Z=He(b,Z);let Me=r.convert(b.format,b.colorSpace),ze=r.convert(b.type),Ue=y(b.internalFormat,Me,ze,b.colorSpace,b.isVideoTexture);we(E,b);let Ee,Xe=b.mipmaps,F=b.isVideoTexture!==!0,fe=Y.__version===void 0||I===!0,be=P.dataReady,De=R(b,Z);if(b.isDepthTexture)Ue=_(b.format===ss,b.type),fe&&(F?t.texStorage2D(n.TEXTURE_2D,1,Ue,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Ue,Z.width,Z.height,0,Me,ze,null));else if(b.isDataTexture)if(Xe.length>0){F&&fe&&t.texStorage2D(n.TEXTURE_2D,De,Ue,Xe[0].width,Xe[0].height);for(let pe=0,ce=Xe.length;pe<ce;pe++)Ee=Xe[pe],F?be&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Me,ze,Ee.data):t.texImage2D(n.TEXTURE_2D,pe,Ue,Ee.width,Ee.height,0,Me,ze,Ee.data);b.generateMipmaps=!1}else F?(fe&&t.texStorage2D(n.TEXTURE_2D,De,Ue,Z.width,Z.height),be&&Ze(b,Z,Me,ze)):t.texImage2D(n.TEXTURE_2D,0,Ue,Z.width,Z.height,0,Me,ze,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ue,Xe[0].width,Xe[0].height,Z.depth);for(let pe=0,ce=Xe.length;pe<ce;pe++)if(Ee=Xe[pe],b.format!==fi)if(Me!==null)if(F){if(be)if(b.layerUpdates.size>0){let ke=fu(Ee.width,Ee.height,b.format,b.type);for(let je of b.layerUpdates){let xt=Ee.data.subarray(je*ke/Ee.data.BYTES_PER_ELEMENT,(je+1)*ke/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,je,Ee.width,Ee.height,1,Me,xt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,Ee.width,Ee.height,Z.depth,Me,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Ue,Ee.width,Ee.height,Z.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,Ee.width,Ee.height,Z.depth,Me,ze,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Ue,Ee.width,Ee.height,Z.depth,0,Me,ze,Ee.data)}else{F&&fe&&t.texStorage2D(n.TEXTURE_2D,De,Ue,Xe[0].width,Xe[0].height);for(let pe=0,ce=Xe.length;pe<ce;pe++)Ee=Xe[pe],b.format!==fi?Me!==null?F?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Ue,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?be&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Me,ze,Ee.data):t.texImage2D(n.TEXTURE_2D,pe,Ue,Ee.width,Ee.height,0,Me,ze,Ee.data)}else if(b.isDataArrayTexture)if(F){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ue,Z.width,Z.height,Z.depth),be)if(b.layerUpdates.size>0){let pe=fu(Z.width,Z.height,b.format,b.type);for(let ce of b.layerUpdates){let ke=Z.data.subarray(ce*pe/Z.data.BYTES_PER_ELEMENT,(ce+1)*pe/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,Z.width,Z.height,1,Me,ze,ke)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Me,ze,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,Z.width,Z.height,Z.depth,0,Me,ze,Z.data);else if(b.isData3DTexture)F?(fe&&t.texStorage3D(n.TEXTURE_3D,De,Ue,Z.width,Z.height,Z.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Me,ze,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,Z.width,Z.height,Z.depth,0,Me,ze,Z.data);else if(b.isFramebufferTexture){if(fe)if(F)t.texStorage2D(n.TEXTURE_2D,De,Ue,Z.width,Z.height);else{let pe=Z.width,ce=Z.height;for(let ke=0;ke<De;ke++)t.texImage2D(n.TEXTURE_2D,ke,Ue,pe,ce,0,Me,ze,null),pe>>=1,ce>>=1}}else if(Xe.length>0){if(F&&fe){let pe=Ge(Xe[0]);t.texStorage2D(n.TEXTURE_2D,De,Ue,pe.width,pe.height)}for(let pe=0,ce=Xe.length;pe<ce;pe++)Ee=Xe[pe],F?be&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Me,ze,Ee):t.texImage2D(n.TEXTURE_2D,pe,Ue,Me,ze,Ee);b.generateMipmaps=!1}else if(F){if(fe){let pe=Ge(Z);t.texStorage2D(n.TEXTURE_2D,De,Ue,pe.width,pe.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,ze,Z)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Me,ze,Z);m(b)&&p(E),Y.__version=P.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function oe(C,b,G){if(b.image.length!==6)return;let E=Oe(C,b),I=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);let P=i.get(I);if(I.version!==P.__version||E===!0){t.activeTexture(n.TEXTURE0+G);let Y=rt.getPrimaries(rt.workingColorSpace),ie=b.colorSpace===Nn?null:rt.getPrimaries(b.colorSpace),_e=b.colorSpace===Nn||Y===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let B=b.isCompressedTexture||b.image[0].isCompressedTexture,Z=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!B&&!Z?Me[ce]=v(b.image[ce],!0,s.maxCubemapSize):Me[ce]=Z?b.image[ce].image:b.image[ce],Me[ce]=He(b,Me[ce]);let ze=Me[0],Ue=r.convert(b.format,b.colorSpace),Ee=r.convert(b.type),Xe=y(b.internalFormat,Ue,Ee,b.colorSpace),F=b.isVideoTexture!==!0,fe=P.__version===void 0||E===!0,be=I.dataReady,De=R(b,ze);we(n.TEXTURE_CUBE_MAP,b);let pe;if(B){F&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Xe,ze.width,ze.height);for(let ce=0;ce<6;ce++){pe=Me[ce].mipmaps;for(let ke=0;ke<pe.length;ke++){let je=pe[ke];b.format!==fi?Ue!==null?F?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,0,0,je.width,je.height,Ue,je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,Xe,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,0,0,je.width,je.height,Ue,Ee,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,Xe,je.width,je.height,0,Ue,Ee,je.data)}}}else{if(pe=b.mipmaps,F&&fe){pe.length>0&&De++;let ce=Ge(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Xe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Z){F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,Ue,Ee,Me[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Xe,Me[ce].width,Me[ce].height,0,Ue,Ee,Me[ce].data);for(let ke=0;ke<pe.length;ke++){let xt=pe[ke].image[ce].image;F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,0,0,xt.width,xt.height,Ue,Ee,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,Xe,xt.width,xt.height,0,Ue,Ee,xt.data)}}else{F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ue,Ee,Me[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Xe,Ue,Ee,Me[ce]);for(let ke=0;ke<pe.length;ke++){let je=pe[ke];F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,0,0,Ue,Ee,je.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,Xe,Ue,Ee,je.image[ce])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),P.__version=I.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ue(C,b,G,E,I,P){let Y=r.convert(G.format,G.colorSpace),ie=r.convert(G.type),_e=y(G.internalFormat,Y,ie,G.colorSpace),B=i.get(b),Z=i.get(G);if(Z.__renderTarget=b,!B.__hasExternalTextures){let Me=Math.max(1,b.width>>P),ze=Math.max(1,b.height>>P);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?t.texImage3D(I,P,_e,Me,ze,b.depth,0,Y,ie,null):t.texImage2D(I,P,_e,Me,ze,0,Y,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),de(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,E,I,Z.__webglTexture,0,ve(b)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,E,I,Z.__webglTexture,P),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(C,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){let E=b.depthTexture,I=E&&E.isDepthTexture?E.type:null,P=_(b.stencilBuffer,I),Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=ve(b);de(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,P,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,P,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,P,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,C)}else{let E=b.textures;for(let I=0;I<E.length;I++){let P=E[I],Y=r.convert(P.format,P.colorSpace),ie=r.convert(P.type),_e=y(P.internalFormat,Y,ie,P.colorSpace),B=ve(b);G&&de(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,B,_e,b.width,b.height):de(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,B,_e,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,_e,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let E=i.get(b.depthTexture);E.__renderTarget=b,(!E.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);let I=E.__webglTexture,P=ve(b);if(b.depthTexture.format===mr)de(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(b.depthTexture.format===ss)de(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Ae(C){let b=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let E=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),E){let I=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,E.removeEventListener("dispose",I)};E.addEventListener("dispose",I),b.__depthDisposeCallback=I}b.__boundDepthTexture=E}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let E=C.texture.mipmaps;E&&E.length>0?Re(b.__webglFramebuffer[0],C):Re(b.__webglFramebuffer,C)}else if(G){b.__webglDepthbuffer=[];for(let E=0;E<6;E++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[E]),b.__webglDepthbuffer[E]===void 0)b.__webglDepthbuffer[E]=n.createRenderbuffer(),ge(b.__webglDepthbuffer[E],C,!1);else{let I=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=b.__webglDepthbuffer[E];n.bindRenderbuffer(n.RENDERBUFFER,P),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,P)}}else{let E=C.texture.mipmaps;if(E&&E.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ge(b.__webglDepthbuffer,C,!1);else{let I=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,P),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,P)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(C,b,G){let E=i.get(C);b!==void 0&&ue(E.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ae(C)}function N(C){let b=C.texture,G=i.get(C),E=i.get(b);C.addEventListener("dispose",L);let I=C.textures,P=C.isWebGLCubeRenderTarget===!0,Y=I.length>1;if(Y||(E.__webglTexture===void 0&&(E.__webglTexture=n.createTexture()),E.__version=b.version,a.memory.textures++),P){G.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ie]=[];for(let _e=0;_e<b.mipmaps.length;_e++)G.__webglFramebuffer[ie][_e]=n.createFramebuffer()}else G.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ie=0;ie<b.mipmaps.length;ie++)G.__webglFramebuffer[ie]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Y)for(let ie=0,_e=I.length;ie<_e;ie++){let B=i.get(I[ie]);B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&de(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ie=0;ie<I.length;ie++){let _e=I[ie];G.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ie]);let B=r.convert(_e.format,_e.colorSpace),Z=r.convert(_e.type),Me=y(_e.internalFormat,B,Z,_e.colorSpace,C.isXRRenderTarget===!0),ze=ve(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,G.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(P){t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture),we(n.TEXTURE_CUBE_MAP,b);for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ue(G.__webglFramebuffer[ie][_e],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e);else ue(G.__webglFramebuffer[ie],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){for(let ie=0,_e=I.length;ie<_e;ie++){let B=I[ie],Z=i.get(B),Me=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,Z.__webglTexture),we(Me,B),ue(G.__webglFramebuffer,C,B,n.COLOR_ATTACHMENT0+ie,Me,0),m(B)&&p(Me)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,E.__webglTexture),we(ie,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ue(G.__webglFramebuffer[_e],C,b,n.COLOR_ATTACHMENT0,ie,_e);else ue(G.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,ie,0);m(b)&&p(ie),t.unbindTexture()}C.depthBuffer&&Ae(C)}function le(C){let b=C.textures;for(let G=0,E=b.length;G<E;G++){let I=b[G];if(m(I)){let P=x(C),Y=i.get(I).__webglTexture;t.bindTexture(P,Y),p(P),t.unbindTexture()}}}let j=[],re=[];function se(C){if(C.samples>0){if(de(C)===!1){let b=C.textures,G=C.width,E=C.height,I=n.COLOR_BUFFER_BIT,P=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=i.get(C),ie=b.length>1;if(ie)for(let B=0;B<b.length;B++)t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer);let _e=C.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let B=0;B<b.length;B++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Y.__webglColorRenderbuffer[B]);let Z=i.get(b[B]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,G,E,0,0,G,E,I,n.NEAREST),c===!0&&(j.length=0,re.length=0,j.push(n.COLOR_ATTACHMENT0+B),C.depthBuffer&&C.resolveDepthBuffer===!1&&(j.push(P),re.push(P),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let B=0;B<b.length;B++){t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,Y.__webglColorRenderbuffer[B]);let Z=i.get(b[B]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ve(C){return Math.min(s.maxSamples,C.samples)}function de(C){let b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ye(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function He(C,b){let G=C.colorSpace,E=C.format,I=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==As&&G!==Nn&&(rt.getTransfer(G)===ct?(E!==fi||I!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=ee,this.setTextureCube=H,this.rebindTextures=at,this.setupRenderTarget=N,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=de}function h1(n,e){function t(i,s=Nn){let r,a=rt.getTransfer(s);if(i===wi)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kh)return n.BYTE;if(i===Qh)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===Cl)return n.INT;if(i===is)return n.UNSIGNED_INT;if(i===Xi)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===iu)return n.ALPHA;if(i===nu)return n.RGB;if(i===fi)return n.RGBA;if(i===mr)return n.DEPTH_COMPONENT;if(i===ss)return n.DEPTH_STENCIL;if(i===Dl)return n.RED;if(i===Ll)return n.RED_INTEGER;if(i===su)return n.RG;if(i===Ul)return n.RG_INTEGER;if(i===Nl)return n.RGBA_INTEGER;if(i===ka||i===Fa||i===Ba||i===Oa)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===Fl||i===Bl||i===Ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zl||i===Hl||i===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zl||i===Hl)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gl||i===$l||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===jl||i===Jl||i===Kl||i===Ql||i===ec||i===tc||i===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nc||i===sc||i===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nc)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===oc||i===lc||i===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var u1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d1=`
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

}`,Tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new pt({vertexShader:u1,fragmentShader:d1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Yt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends Cn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new Tu,p={},x=t.getContextAttributes(),y=null,_=null,R=[],T=[],L=new ne,U=null,S=new si;S.viewport=new dt;let M=new si;M.viewport=new dt;let D=[S,M],k=new cl,X=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=R[J];return oe===void 0&&(oe=new br,R[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=R[J];return oe===void 0&&(oe=new br,R[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=R[J];return oe===void 0&&(oe=new br,R[J]=oe),oe.getHandSpace()};function O(J){let oe=T.indexOf(J.inputSource);if(oe===-1)return;let ue=R[oe];ue!==void 0&&(ue.update(J.inputSource,J.frame,l||a),ue.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ee);for(let J=0;J<R.length;J++){let oe=T[J];oe!==null&&(T[J]=null,R[J].disconnect(oe))}X=null,W=null,m.reset();for(let J in p)delete p[J];e.setRenderTarget(y),d=null,f=null,u=null,s=null,_=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ge=null,Re=null;x.depth&&(Re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?ss:mr,ge=x.stencil?ns:is);let Ae={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ht(f.textureWidth,f.textureHeight,{format:fi,type:wi,depthTexture:new Is(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ht(d.framebufferWidth,d.framebufferHeight,{format:fi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(J){for(let oe=0;oe<J.removed.length;oe++){let ue=J.removed[oe],ge=T.indexOf(ue);ge>=0&&(T[ge]=null,R[ge].disconnect(ue))}for(let oe=0;oe<J.added.length;oe++){let ue=J.added[oe],ge=T.indexOf(ue);if(ge===-1){for(let Ae=0;Ae<R.length;Ae++)if(Ae>=T.length){T.push(ue),ge=Ae;break}else if(T[Ae]===null){T[Ae]=ue,ge=Ae;break}if(ge===-1)break}let Re=R[ge];Re&&Re.connect(ue)}}let H=new A,te=new A;function ae(J,oe,ue){H.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(ue.matrixWorld);let ge=H.distanceTo(te),Re=oe.projectionMatrix.elements,Ae=ue.projectionMatrix.elements,at=Re[14]/(Re[10]-1),N=Re[14]/(Re[10]+1),le=(Re[9]+1)/Re[5],j=(Re[9]-1)/Re[5],re=(Re[8]-1)/Re[0],se=(Ae[8]+1)/Ae[0],ve=at*re,de=at*se,ye=ge/(-re+se),He=ye*-re;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(He),J.translateZ(ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Re[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let Ge=at+ye,C=N+ye,b=ve-He,G=de+(ge-He),E=le*N/C*Ge,I=j*N/C*Ge;J.projectionMatrix.makePerspective(b,G,E,I,Ge,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function he(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let oe=J.near,ue=J.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),k.near=M.near=S.near=oe,k.far=M.far=S.far=ue,(X!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,W=k.far),k.layers.mask=J.layers.mask|6,S.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;let ge=J.parent,Re=k.cameras;he(k,ge);for(let Ae=0;Ae<Re.length;Ae++)he(Re[Ae],ge);Re.length===2?ae(k,S,M):k.projectionMatrix.copy(S.projectionMatrix),we(J,k,ge)};function we(J,oe,ue){ue===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(ue.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=gr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(J){return p[J]};let Oe=null;function We(J,oe){if(h=oe.getViewerPose(l||a),g=oe,h!==null){let ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ge=!1;ue.length!==k.cameras.length&&(k.cameras.length=0,ge=!0);for(let N=0;N<ue.length;N++){let le=ue[N],j=null;if(d!==null)j=d.getViewport(le);else{let se=u.getViewSubImage(f,le);j=se.viewport,N===0&&(e.setRenderTargetTextures(_,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(_))}let re=D[N];re===void 0&&(re=new si,re.layers.enable(N),re.viewport=new dt,D[N]=re),re.matrix.fromArray(le.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(le.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(j.x,j.y,j.width,j.height),N===0&&(k.matrix.copy(re.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ge===!0&&k.cameras.push(re)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let N=u.getDepthInformation(ue[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let N=0;N<ue.length;N++){let le=ue[N].camera;if(le){let j=p[le];j||(j=new ma,p[le]=j);let re=u.getCameraImage(le);j.sourceTexture=re}}}}for(let ue=0;ue<R.length;ue++){let ge=T[ue],Re=R[ue];ge!==null&&Re!==void 0&&Re.update(ge,oe,l||a)}Oe&&Oe(J,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Ze=new xp;Ze.setAnimationLoop(We),this.setAnimationLoop=function(J){Oe=J},this.dispose=function(){}}},zs=new bi,f1=new Ke;function p1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,cu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),y=x.envMap,_=x.envMapRotation;y&&(m.envMap.value=y,zs.copy(_),zs.x*=-1,zs.y*=-1,zs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),m.envMapRotation.value.setFromMatrix4(f1.makeRotationFromEuler(zs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function m1(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){let _=y.program;i.uniformBlockBinding(x,_)}function l(x,y){let _=s[x.id];_===void 0&&(g(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));let R=y.program;i.updateUBOMapping(x,R);let T=e.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function h(x){let y=u();x.__bindingPointIndex=y;let _=n.createBuffer(),R=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let y=s[x.id],_=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,L=_.length;T<L;T++){let U=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,M=U.length;S<M;S++){let D=U[S];if(d(D,T,S,R)===!0){let k=D.__offset,X=Array.isArray(D.value)?D.value:[D.value],W=0;for(let O=0;O<X.length;O++){let z=X[O],ee=v(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,k+W,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,y,_,R){let T=x.value,L=y+"_"+_;if(R[L]===void 0)return typeof T=="number"||typeof T=="boolean"?R[L]=T:R[L]=T.clone(),!0;{let U=R[L];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return R[L]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(x){let y=x.uniforms,_=0,R=16;for(let L=0,U=y.length;L<U;L++){let S=Array.isArray(y[L])?y[L]:[y[L]];for(let M=0,D=S.length;M<D;M++){let k=S[M],X=Array.isArray(k.value)?k.value:[k.value];for(let W=0,O=X.length;W<O;W++){let z=X[W],ee=v(z),H=_%R,te=H%ee.boundary,ae=H+te;_+=te,ae!==0&&R-ae<ee.storage&&(_+=R-ae),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=ee.storage}}}let T=_%R;return T>0&&(_+=R-T),x.__size=_,x.__cache={},this}function v(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var rs=class{constructor(e={}){let{canvas:t=zf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,R=!1;this._outputColorSpace=It;let T=0,L=0,U=null,S=-1,M=null,D=new dt,k=new dt,X=null,W=new Se(0),O=0,z=t.width,ee=t.height,H=1,te=null,ae=null,he=new dt(0,0,z,ee),we=new dt(0,0,z,ee),Oe=!1,We=new Mr,Ze=!1,J=!1,oe=new Ke,ue=new A,ge=new dt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function at(){return U===null?H:1}let N=i;function le(w,V){return t.getContext(w,V)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hl}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){let V="webgl2";if(N=le(V,w),N===null)throw le(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let j,re,se,ve,de,ye,He,Ge,C,b,G,E,I,P,Y,ie,_e,B,Z,Me,ze,Ue,Ee,Xe;function F(){j=new Ly(N),j.init(),Ue=new h1(N,j),re=new Ty(N,j,e,Ue),se=new l1(N,j),re.reversedDepthBuffer&&f&&se.buffers.depth.setReversed(!0),ve=new ky(N),de=new Z_,ye=new c1(N,j,se,de,re,Ue,ve),He=new Ry(_),Ge=new Dy(_),C=new Vg(N),Ee=new Ey(N,C),b=new Uy(N,C,ve,Ee),G=new By(N,b,C,ve),Z=new Fy(N,re,ye),ie=new Ay(de),E=new Y_(_,He,Ge,j,re,Ee,ie),I=new p1(_,de),P=new J_,Y=new n1(j),B=new Sy(_,He,Ge,se,G,d,c),_e=new a1(_,G,re),Xe=new m1(N,ve,re,se),Me=new wy(N,j,ve),ze=new Ny(N,j,ve),ve.programs=E.programs,_.capabilities=re,_.extensions=j,_.properties=de,_.renderLists=P,_.shadowMap=_e,_.state=se,_.info=ve}F();let fe=new Au(_,N);this.xr=fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=j.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=j.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(z,ee,!1))},this.getSize=function(w){return w.set(z,ee)},this.setSize=function(w,V,K=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,ee=V,t.width=Math.floor(w*H),t.height=Math.floor(V*H),K===!0&&(t.style.width=w+"px",t.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(z*H,ee*H).floor()},this.setDrawingBufferSize=function(w,V,K){z=w,ee=V,H=K,t.width=Math.floor(w*K),t.height=Math.floor(V*K),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(he)},this.setViewport=function(w,V,K,Q){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,V,K,Q),se.viewport(D.copy(he).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(we)},this.setScissor=function(w,V,K,Q){w.isVector4?we.set(w.x,w.y,w.z,w.w):we.set(w,V,K,Q),se.scissor(k.copy(we).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(w){se.setScissorTest(Oe=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,K=!0){let Q=0;if(w){let $=!1;if(U!==null){let me=U.texture.format;$=me===Nl||me===Ul||me===Ll}if($){let me=U.texture.type,Ce=me===wi||me===is||me===Ar||me===ns||me===Pl||me===Il,Ne=B.getClearColor(),Ie=B.getClearAlpha(),$e=Ne.r,qe=Ne.g,Be=Ne.b;Ce?(g[0]=$e,g[1]=qe,g[2]=Be,g[3]=Ie,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=$e,v[1]=qe,v[2]=Be,v[3]=Ie,N.clearBufferiv(N.COLOR,0,v))}else Q|=N.COLOR_BUFFER_BIT}V&&(Q|=N.DEPTH_BUFFER_BIT),K&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),B.dispose(),P.dispose(),Y.dispose(),de.dispose(),He.dispose(),Ge.dispose(),G.dispose(),Ee.dispose(),Xe.dispose(),E.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Zi),fe.removeEventListener("sessionend",Md),xs.stop()};function be(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=ve.autoReset,V=_e.enabled,K=_e.autoUpdate,Q=_e.needsUpdate,$=_e.type;F(),ve.autoReset=w,_e.enabled=V,_e.autoUpdate=K,_e.needsUpdate=Q,_e.type=$}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){let V=w.target;V.removeEventListener("dispose",ce),ke(V)}function ke(w){je(w),de.remove(w)}function je(w){let V=de.get(w).programs;V!==void 0&&(V.forEach(function(K){E.releaseProgram(K)}),w.isShaderMaterial&&E.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,K,Q,$,me){V===null&&(V=Re);let Ce=$.isMesh&&$.matrixWorld.determinant()<0,Ne=m0(w,V,K,Q,$);se.setMaterial(Q,Ce);let Ie=K.index,$e=1;if(Q.wireframe===!0){if(Ie=b.getWireframeAttribute(K),Ie===void 0)return;$e=2}let qe=K.drawRange,Be=K.attributes.position,st=qe.start*$e,ft=(qe.start+qe.count)*$e;me!==null&&(st=Math.max(st,me.start*$e),ft=Math.min(ft,(me.start+me.count)*$e)),Ie!==null?(st=Math.max(st,0),ft=Math.min(ft,Ie.count)):Be!=null&&(st=Math.max(st,0),ft=Math.min(ft,Be.count));let Nt=ft-st;if(Nt<0||Nt===1/0)return;Ee.setup($,Q,Ne,K,Ie);let bt,mt=Me;if(Ie!==null&&(bt=C.get(Ie),mt=ze,mt.setIndex(bt)),$.isMesh)Q.wireframe===!0?(se.setLineWidth(Q.wireframeLinewidth*at()),mt.setMode(N.LINES)):mt.setMode(N.TRIANGLES);else if($.isLine){let Ve=Q.linewidth;Ve===void 0&&(Ve=1),se.setLineWidth(Ve*at()),$.isLineSegments?mt.setMode(N.LINES):$.isLineLoop?mt.setMode(N.LINE_LOOP):mt.setMode(N.LINE_STRIP)}else $.isPoints?mt.setMode(N.POINTS):$.isSprite&&mt.setMode(N.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))mt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ve=$._multiDrawStarts,Ct=$._multiDrawCounts,ot=$._multiDrawCount,mi=Ie?C.get(Ie).bytesPerElement:1,js=de.get(Q).currentProgram.getUniforms();for(let gi=0;gi<ot;gi++)js.setValue(N,"_gl_DrawID",gi),mt.render(Ve[gi]/mi,Ct[gi])}else if($.isInstancedMesh)mt.renderInstances(st,Nt,$.count);else if(K.isInstancedBufferGeometry){let Ve=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ct=Math.min(K.instanceCount,Ve);mt.renderInstances(st,Nt,Ct)}else mt.render(st,Nt)};function xt(w,V,K){w.transparent===!0&&w.side===At&&w.forceSinglePass===!1?(w.side=Vt,w.needsUpdate=!0,io(w,V,K),w.side=Rn,w.needsUpdate=!0,io(w,V,K),w.side=At):io(w,V,K)}this.compile=function(w,V,K=null){K===null&&(K=w),p=Y.get(K),p.init(V),y.push(p),K.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),w!==K&&w.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();let Q=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let me=$.material;if(me)if(Array.isArray(me))for(let Ce=0;Ce<me.length;Ce++){let Ne=me[Ce];xt(Ne,K,$),Q.add(Ne)}else xt(me,K,$),Q.add(me)}),p=y.pop(),Q},this.compileAsync=function(w,V,K=null){let Q=this.compile(w,V,K);return new Promise($=>{function me(){if(Q.forEach(function(Ce){de.get(Ce).currentProgram.isReady()&&Q.delete(Ce)}),Q.size===0){$(w);return}setTimeout(me,10)}j.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ht=null;function _n(w){ht&&ht(w)}function Zi(){xs.stop()}function Md(){xs.start()}let xs=new xp;xs.setAnimationLoop(_n),typeof self<"u"&&xs.setContext(self),this.setAnimationLoop=function(w){ht=w,fe.setAnimationLoop(w),w===null?xs.stop():xs.start()},fe.addEventListener("sessionstart",Zi),fe.addEventListener("sessionend",Md),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(V),V=fe.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,V,U),p=Y.get(w,y.length),p.init(V),y.push(p),oe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),We.setFromProjectionMatrix(oe,zi,V.reversedDepth),J=this.localClippingEnabled,Ze=ie.init(this.clippingPlanes,J),m=P.get(w,x.length),m.init(),x.push(m),fe.enabled===!0&&fe.isPresenting===!0){let me=_.xr.getDepthSensingMesh();me!==null&&sh(me,V,-1/0,_.sortObjects)}sh(w,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(te,ae),Ae=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Ae&&B.addToRenderList(m,w),this.info.render.frame++,Ze===!0&&ie.beginShadows();let K=p.state.shadowsArray;_e.render(K,w,V),Ze===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,$=m.transmissive;if(p.setupLights(),V.isArrayCamera){let me=V.cameras;if($.length>0)for(let Ce=0,Ne=me.length;Ce<Ne;Ce++){let Ie=me[Ce];Ed(Q,$,w,Ie)}Ae&&B.render(w);for(let Ce=0,Ne=me.length;Ce<Ne;Ce++){let Ie=me[Ce];Sd(m,w,Ie,Ie.viewport)}}else $.length>0&&Ed(Q,$,w,V),Ae&&B.render(w),Sd(m,w,V);U!==null&&L===0&&(ye.updateMultisampleRenderTarget(U),ye.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(_,w,V),Ee.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],Ze===!0&&ie.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function sh(w,V,K,Q){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||We.intersectsSprite(w)){Q&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);let Ce=G.update(w),Ne=w.material;Ne.visible&&m.push(w,Ce,Ne,K,ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||We.intersectsObject(w))){let Ce=G.update(w),Ne=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ge.copy(Ce.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(Ne)){let Ie=Ce.groups;for(let $e=0,qe=Ie.length;$e<qe;$e++){let Be=Ie[$e],st=Ne[Be.materialIndex];st&&st.visible&&m.push(w,Ce,st,K,ge.z,Be)}}else Ne.visible&&m.push(w,Ce,Ne,K,ge.z,null)}}let me=w.children;for(let Ce=0,Ne=me.length;Ce<Ne;Ce++)sh(me[Ce],V,K,Q)}function Sd(w,V,K,Q){let $=w.opaque,me=w.transmissive,Ce=w.transparent;p.setupLightsView(K),Ze===!0&&ie.setGlobalState(_.clippingPlanes,K),Q&&se.viewport(D.copy(Q)),$.length>0&&to($,V,K),me.length>0&&to(me,V,K),Ce.length>0&&to(Ce,V,K),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Ed(w,V,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ht(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?li:wi,minFilter:cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));let me=p.state.transmissionRenderTarget[Q.id],Ce=Q.viewport||D;me.setSize(Ce.z*_.transmissionResolutionScale,Ce.w*_.transmissionResolutionScale);let Ne=_.getRenderTarget(),Ie=_.getActiveCubeFace(),$e=_.getActiveMipmapLevel();_.setRenderTarget(me),_.getClearColor(W),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Ae&&B.render(K);let qe=_.toneMapping;_.toneMapping=Un;let Be=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),Ze===!0&&ie.setGlobalState(_.clippingPlanes,Q),to(w,K,Q),ye.updateMultisampleRenderTarget(me),ye.updateRenderTargetMipmap(me),j.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let ft=0,Nt=V.length;ft<Nt;ft++){let bt=V[ft],mt=bt.object,Ve=bt.geometry,Ct=bt.material,ot=bt.group;if(Ct.side===At&&mt.layers.test(Q.layers)){let mi=Ct.side;Ct.side=Vt,Ct.needsUpdate=!0,wd(mt,K,Q,Ve,Ct,ot),Ct.side=mi,Ct.needsUpdate=!0,st=!0}}st===!0&&(ye.updateMultisampleRenderTarget(me),ye.updateRenderTargetMipmap(me))}_.setRenderTarget(Ne,Ie,$e),_.setClearColor(W,O),Be!==void 0&&(Q.viewport=Be),_.toneMapping=qe}function to(w,V,K){let Q=V.isScene===!0?V.overrideMaterial:null;for(let $=0,me=w.length;$<me;$++){let Ce=w[$],Ne=Ce.object,Ie=Ce.geometry,$e=Ce.group,qe=Ce.material;qe.allowOverride===!0&&Q!==null&&(qe=Q),Ne.layers.test(K.layers)&&wd(Ne,V,K,Ie,qe,$e)}}function wd(w,V,K,Q,$,me){w.onBeforeRender(_,V,K,Q,$,me),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(_,V,K,Q,w,me),$.transparent===!0&&$.side===At&&$.forceSinglePass===!1?($.side=Vt,$.needsUpdate=!0,_.renderBufferDirect(K,V,Q,$,w,me),$.side=Rn,$.needsUpdate=!0,_.renderBufferDirect(K,V,Q,$,w,me),$.side=At):_.renderBufferDirect(K,V,Q,$,w,me),w.onAfterRender(_,V,K,Q,$,me)}function io(w,V,K){V.isScene!==!0&&(V=Re);let Q=de.get(w),$=p.state.lights,me=p.state.shadowsArray,Ce=$.state.version,Ne=E.getParameters(w,$.state,me,V,K),Ie=E.getProgramCacheKey(Ne),$e=Q.programs;Q.environment=w.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(w.isMeshStandardMaterial?Ge:He).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",ce),$e=new Map,Q.programs=$e);let qe=$e.get(Ie);if(qe!==void 0){if(Q.currentProgram===qe&&Q.lightsStateVersion===Ce)return Ad(w,Ne),qe}else Ne.uniforms=E.getUniforms(w),w.onBeforeCompile(Ne,_),qe=E.acquireProgram(Ne,Ie),$e.set(Ie,qe),Q.uniforms=Ne.uniforms;let Be=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=ie.uniform),Ad(w,Ne),Q.needsLights=v0(w),Q.lightsStateVersion=Ce,Q.needsLights&&(Be.ambientLightColor.value=$.state.ambient,Be.lightProbe.value=$.state.probe,Be.directionalLights.value=$.state.directional,Be.directionalLightShadows.value=$.state.directionalShadow,Be.spotLights.value=$.state.spot,Be.spotLightShadows.value=$.state.spotShadow,Be.rectAreaLights.value=$.state.rectArea,Be.ltc_1.value=$.state.rectAreaLTC1,Be.ltc_2.value=$.state.rectAreaLTC2,Be.pointLights.value=$.state.point,Be.pointLightShadows.value=$.state.pointShadow,Be.hemisphereLights.value=$.state.hemi,Be.directionalShadowMap.value=$.state.directionalShadowMap,Be.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Be.spotShadowMap.value=$.state.spotShadowMap,Be.spotLightMatrix.value=$.state.spotLightMatrix,Be.spotLightMap.value=$.state.spotLightMap,Be.pointShadowMap.value=$.state.pointShadowMap,Be.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=qe,Q.uniformsList=null,qe}function Td(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=Pr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ad(w,V){let K=de.get(w);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function m0(w,V,K,Q,$){V.isScene!==!0&&(V=Re),ye.resetTextureUnits();let me=V.fog,Ce=Q.isMeshStandardMaterial?V.environment:null,Ne=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:As,Ie=(Q.isMeshStandardMaterial?Ge:He).get(Q.envMap||Ce),$e=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qe=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Be=!!K.morphAttributes.position,st=!!K.morphAttributes.normal,ft=!!K.morphAttributes.color,Nt=Un;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Nt=_.toneMapping);let bt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=bt!==void 0?bt.length:0,Ve=de.get(Q),Ct=p.state.lights;if(Ze===!0&&(J===!0||w!==M)){let ii=w===M&&Q.id===S;ie.setState(Q,w,ii)}let ot=!1;Q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ct.state.version||Ve.outputColorSpace!==Ne||$.isBatchedMesh&&Ve.batching===!1||!$.isBatchedMesh&&Ve.batching===!0||$.isBatchedMesh&&Ve.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ve.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ve.instancing===!1||!$.isInstancedMesh&&Ve.instancing===!0||$.isSkinnedMesh&&Ve.skinning===!1||!$.isSkinnedMesh&&Ve.skinning===!0||$.isInstancedMesh&&Ve.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ve.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ve.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ve.instancingMorph===!1&&$.morphTexture!==null||Ve.envMap!==Ie||Q.fog===!0&&Ve.fog!==me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ie.numPlanes||Ve.numIntersection!==ie.numIntersection)||Ve.vertexAlphas!==$e||Ve.vertexTangents!==qe||Ve.morphTargets!==Be||Ve.morphNormals!==st||Ve.morphColors!==ft||Ve.toneMapping!==Nt||Ve.morphTargetsCount!==mt)&&(ot=!0):(ot=!0,Ve.__version=Q.version);let mi=Ve.currentProgram;ot===!0&&(mi=io(Q,V,$));let js=!1,gi=!1,Hr=!1,Pt=mi.getUniforms(),Ti=Ve.uniforms;if(se.useProgram(mi.program)&&(js=!0,gi=!0,Hr=!0),Q.id!==S&&(S=Q.id,gi=!0),js||M!==w){se.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pt.setValue(N,"projectionMatrix",w.projectionMatrix),Pt.setValue(N,"viewMatrix",w.matrixWorldInverse);let di=Pt.map.cameraPosition;di!==void 0&&di.setValue(N,ue.setFromMatrixPosition(w.matrixWorld)),re.logarithmicDepthBuffer&&Pt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Pt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,gi=!0,Hr=!0)}if($.isSkinnedMesh){Pt.setOptional(N,$,"bindMatrix"),Pt.setOptional(N,$,"bindMatrixInverse");let ii=$.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),Pt.setValue(N,"boneTexture",ii.boneTexture,ye))}$.isBatchedMesh&&(Pt.setOptional(N,$,"batchingTexture"),Pt.setValue(N,"batchingTexture",$._matricesTexture,ye),Pt.setOptional(N,$,"batchingIdTexture"),Pt.setValue(N,"batchingIdTexture",$._indirectTexture,ye),Pt.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&Pt.setValue(N,"batchingColorTexture",$._colorsTexture,ye));let Ai=K.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Z.update($,K,mi),(gi||Ve.receiveShadow!==$.receiveShadow)&&(Ve.receiveShadow=$.receiveShadow,Pt.setValue(N,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ti.envMap.value=Ie,Ti.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(Ti.envMapIntensity.value=V.environmentIntensity),gi&&(Pt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&g0(Ti,Hr),me&&Q.fog===!0&&I.refreshFogUniforms(Ti,me),I.refreshMaterialUniforms(Ti,Q,H,ee,p.state.transmissionRenderTarget[w.id]),Pr.upload(N,Td(Ve),Ti,ye)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Pr.upload(N,Td(Ve),Ti,ye),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Pt.setValue(N,"center",$.center),Pt.setValue(N,"modelViewMatrix",$.modelViewMatrix),Pt.setValue(N,"normalMatrix",$.normalMatrix),Pt.setValue(N,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let ii=Q.uniformsGroups;for(let di=0,rh=ii.length;di<rh;di++){let ys=ii[di];Xe.update(ys,mi),Xe.bind(ys,mi)}}return mi}function g0(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function v0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,V,K){let Q=de.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),de.get(w.texture).__webglTexture=V,de.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let K=de.get(w);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};let x0=N.createFramebuffer();this.setRenderTarget=function(w,V=0,K=0){U=w,T=V,L=K;let Q=!0,$=null,me=!1,Ce=!1;if(w){let Ie=de.get(w);if(Ie.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(Ie.__webglFramebuffer===void 0)ye.setupRenderTarget(w);else if(Ie.__hasExternalTextures)ye.rebindTextures(w,de.get(w.texture).__webglTexture,de.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Be=w.depthTexture;if(Ie.__boundDepthTexture!==Be){if(Be!==null&&de.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(w)}}let $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ce=!0);let qe=de.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[V])?$=qe[V][K]:$=qe[V],me=!0):w.samples>0&&ye.useMultisampledRTT(w)===!1?$=de.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?$=qe[K]:$=qe,D.copy(w.viewport),k.copy(w.scissor),X=w.scissorTest}else D.copy(he).multiplyScalar(H).floor(),k.copy(we).multiplyScalar(H).floor(),X=Oe;if(K!==0&&($=x0),se.bindFramebuffer(N.FRAMEBUFFER,$)&&Q&&se.drawBuffers(w,$),se.viewport(D),se.scissor(k),se.setScissorTest(X),me){let Ie=de.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie.__webglTexture,K)}else if(Ce){let Ie=V;for(let $e=0;$e<w.textures.length;$e++){let qe=de.get(w.textures[$e]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+$e,qe.__webglTexture,K,Ie)}}else if(w!==null&&K!==0){let Ie=de.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ie.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(w,V,K,Q,$,me,Ce,Ne=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){se.bindFramebuffer(N.FRAMEBUFFER,Ie);try{let $e=w.textures[Ne],qe=$e.format,Be=$e.type;if(!re.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Q&&K>=0&&K<=w.height-$&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ne),N.readPixels(V,K,Q,$,Ue.convert(qe),Ue.convert(Be),me))}finally{let $e=U!==null?de.get(U).__webglFramebuffer:null;se.bindFramebuffer(N.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(w,V,K,Q,$,me,Ce,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(V>=0&&V<=w.width-Q&&K>=0&&K<=w.height-$){se.bindFramebuffer(N.FRAMEBUFFER,Ie);let $e=w.textures[Ne],qe=$e.format,Be=$e.type;if(!re.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,st),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ne),N.readPixels(V,K,Q,$,Ue.convert(qe),Ue.convert(Be),0);let ft=U!==null?de.get(U).__webglFramebuffer:null;se.bindFramebuffer(N.FRAMEBUFFER,ft);let Nt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Hf(N,Nt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,st),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.deleteBuffer(st),N.deleteSync(Nt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,K=0){let Q=Math.pow(2,-K),$=Math.floor(w.image.width*Q),me=Math.floor(w.image.height*Q),Ce=V!==null?V.x:0,Ne=V!==null?V.y:0;ye.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Ce,Ne,$,me),se.unbindTexture()};let y0=N.createFramebuffer(),_0=N.createFramebuffer();this.copyTextureToTexture=function(w,V,K=null,Q=null,$=0,me=null){me===null&&($!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=$,$=0):me=0);let Ce,Ne,Ie,$e,qe,Be,st,ft,Nt,bt=w.isCompressedTexture?w.mipmaps[me]:w.image;if(K!==null)Ce=K.max.x-K.min.x,Ne=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,$e=K.min.x,qe=K.min.y,Be=K.isBox3?K.min.z:0;else{let Ai=Math.pow(2,-$);Ce=Math.floor(bt.width*Ai),Ne=Math.floor(bt.height*Ai),w.isDataArrayTexture?Ie=bt.depth:w.isData3DTexture?Ie=Math.floor(bt.depth*Ai):Ie=1,$e=0,qe=0,Be=0}Q!==null?(st=Q.x,ft=Q.y,Nt=Q.z):(st=0,ft=0,Nt=0);let mt=Ue.convert(V.format),Ve=Ue.convert(V.type),Ct;V.isData3DTexture?(ye.setTexture3D(V,0),Ct=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ye.setTexture2DArray(V,0),Ct=N.TEXTURE_2D_ARRAY):(ye.setTexture2D(V,0),Ct=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);let ot=N.getParameter(N.UNPACK_ROW_LENGTH),mi=N.getParameter(N.UNPACK_IMAGE_HEIGHT),js=N.getParameter(N.UNPACK_SKIP_PIXELS),gi=N.getParameter(N.UNPACK_SKIP_ROWS),Hr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,bt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$e),N.pixelStorei(N.UNPACK_SKIP_ROWS,qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Be);let Pt=w.isDataArrayTexture||w.isData3DTexture,Ti=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let Ai=de.get(w),ii=de.get(V),di=de.get(Ai.__renderTarget),rh=de.get(ii.__renderTarget);se.bindFramebuffer(N.READ_FRAMEBUFFER,di.__webglFramebuffer),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,rh.__webglFramebuffer);for(let ys=0;ys<Ie;ys++)Pt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,de.get(w).__webglTexture,$,Be+ys),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,de.get(V).__webglTexture,me,Nt+ys)),N.blitFramebuffer($e,qe,Ce,Ne,st,ft,Ce,Ne,N.DEPTH_BUFFER_BIT,N.NEAREST);se.bindFramebuffer(N.READ_FRAMEBUFFER,null),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||de.has(w)){let Ai=de.get(w),ii=de.get(V);se.bindFramebuffer(N.READ_FRAMEBUFFER,y0),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,_0);for(let di=0;di<Ie;di++)Pt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ai.__webglTexture,$,Be+di):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ai.__webglTexture,$),Ti?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ii.__webglTexture,me,Nt+di):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ii.__webglTexture,me),$!==0?N.blitFramebuffer($e,qe,Ce,Ne,st,ft,Ce,Ne,N.COLOR_BUFFER_BIT,N.NEAREST):Ti?N.copyTexSubImage3D(Ct,me,st,ft,Nt+di,$e,qe,Ce,Ne):N.copyTexSubImage2D(Ct,me,st,ft,$e,qe,Ce,Ne);se.bindFramebuffer(N.READ_FRAMEBUFFER,null),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ti?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Ct,me,st,ft,Nt,Ce,Ne,Ie,mt,Ve,bt.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,me,st,ft,Nt,Ce,Ne,Ie,mt,bt.data):N.texSubImage3D(Ct,me,st,ft,Nt,Ce,Ne,Ie,mt,Ve,bt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,st,ft,Ce,Ne,mt,Ve,bt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,st,ft,bt.width,bt.height,mt,bt.data):N.texSubImage2D(N.TEXTURE_2D,me,st,ft,Ce,Ne,mt,Ve,bt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ot),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mi),N.pixelStorei(N.UNPACK_SKIP_PIXELS,js),N.pixelStorei(N.UNPACK_SKIP_ROWS,gi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Hr),me===0&&V.generateMipmaps&&N.generateMipmap(Ct),se.unbindTexture()},this.initRenderTarget=function(w){de.get(w).__webglFramebuffer===void 0&&ye.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ye.setTextureCube(w,0):w.isData3DTexture?ye.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ye.setTexture2DArray(w,0):ye.setTexture2D(w,0),se.unbindTexture()},this.resetState=function(){T=0,L=0,U=null,se.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var Ha=new A;function Di(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ha.copy(e),Ha[i]=0,Ha.normalize();let l=.5*a/(a+o),h=1-Ha.angleTo(n)/c;return Math.sign(Ha[t])===1?h*l:o/(a+o)+l+l*(1-h)}var as=class n extends Qi{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new A,l=new A,h=new A(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,v=new A,m=.5/a;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/g)){case 0:v.set(1,0,0),d[x+0]=Di(v,l,"z","y",r,i),d[x+1]=1-Di(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),d[x+0]=1-Di(v,l,"z","y",r,i),d[x+1]=1-Di(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),d[x+0]=1-Di(v,l,"x","z",r,e),d[x+1]=Di(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),d[x+0]=1-Di(v,l,"x","z",r,e),d[x+1]=1-Di(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),d[x+0]=1-Di(v,l,"x","y",r,e),d[x+1]=1-Di(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),d[x+0]=Di(v,l,"x","y",r,e),d[x+1]=1-Di(v,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Sp=`
varying vec3 world;
void main(){vec4 w=modelMatrix*vec4(position,1.);world=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}
`,Ep=`
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
`;var un={day:{label:"\u6674\u65E5",sky:"#b7d3dc",sun:"#fff2dc",power:3.2,position:[-10,30,18],hemi:"#fff3dc",ground:"#6f8e9e",ambient:.95,fill:"#b4d9ef",fillPower:1,environment:.32,exposure:.94,bloom:.08,threshold:1.2,windows:0,lamps:0,waterDeep:"#135c7d",waterShallow:"#3da8ad"},golden:{label:"\u6696\u9633\u508D\u665A",sky:"#dfbba9",sun:"#ffce91",power:3.1,position:[-18,12,12],hemi:"#ffe2bb",ground:"#7e858d",ambient:.75,fill:"#a9c7e9",fillPower:.7,environment:.25,exposure:.97,bloom:.14,threshold:1,windows:.35,lamps:1,waterDeep:"#405d78",waterShallow:"#96aaa3"},night:{label:"\u706F\u706B\u591C\u8272",sky:"#263954",sun:"#bacff5",power:1.05,position:[-12,24,8],hemi:"#95b4e6",ground:"#384b72",ambient:.48,fill:"#849ed6",fillPower:.45,environment:.12,exposure:1.05,bloom:.28,threshold:.85,windows:1.8,lamps:4,waterDeep:"#0b203f",waterShallow:"#23466d"}},kn=n=>Object.hasOwn(un,n)?n:"day";var mc=new Map,gc=new Map,Pu={value:0},wp={value:0},Tp={value:new A(28,30,36).normalize()},Cu="day";function Ap(n){Cu=kn(n);let e=un[Cu];wp.value=e.windows;for(let t of gc.values())t.uniforms.deepColor.value.set(e.waterDeep),t.uniforms.shallowColor.value.set(e.waterShallow),t.uniforms.skyColor.value.set(e.sky),t.uniforms.sunColor.value.set(e.sun),t.uniforms.sunDirection.value.set(...e.position).normalize(),t.uniforms.lightPower.value=e.power}function Va(n){return n.emissive.set("#ffd391"),n.emissiveIntensity=1,n.onBeforeCompile=e=>{e.uniforms.windowLightGain=wp,e.fragmentShader=`uniform float windowLightGain;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= windowLightGain;`)},n.customProgramCacheKey=()=>"warm-window-v1",n}function Rp(n="stone"){if(mc.has(n))return mc.get(n);let e=512,t=new Uint8Array(e*e*4),i=49191;for(let r=0;r<e;r++)for(let a=0;a<e;a++){i=Math.imul(i,1664525)+1013904223>>>0;let o=i/4294967296,c=.87+o*.13;if(n==="road"&&(c=.68+o*.28+(o>.985?.12:0)),n==="grass"&&(c=.65+o*.27+.06*Math.sin(a*.13)*Math.cos(r*.17)),n==="roof"){let h=r%64,u=(a+Math.floor(r/64)%2*32)%64;c=h<3||u<2?.52:.78+o*.19+.04*Math.sin(h/64*Math.PI)}if(n==="paving"){let h=(a+Math.floor(r/64)%2*64)%128,u=r%64;c=h<3||u<3?.61:.86+o*.14}let l=(a+r*e)*4;t[l]=t[l+1]=t[l+2]=Math.round(Math.min(1,c)*255),t[l+3]=255}let s=new en(t,e,e);return s.wrapS=s.wrapT=Pi,s.generateMipmaps=!0,s.minFilter=cn,s.magFilter=_i,s.anisotropy=16,s.needsUpdate=!0,mc.set(n,s),s}function Iu(n,e=!1){return n.onBeforeCompile=t=>{t.uniforms.landscapeWindTime=Pu,t.vertexShader=`uniform float landscapeWindTime;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float windAnchor=0.;
#ifdef USE_INSTANCING
windAnchor=instanceMatrix[3].x*.55+instanceMatrix[3].z*.35;
#else
windAnchor=modelMatrix[3].x*.55+modelMatrix[3].z*.35;
#endif
transformed.x+=sin(landscapeWindTime*1.2+windAnchor)*${e?"pow(max(position.y,0.),2.)*.4":"pow(max(position.y+1.,0.),2.)*.012"};`)},n.customProgramCacheKey=()=>e?"grass-wind-v1":"leaf-wind-v1",n}function Du(n,e=.72,t=0){let i=["#86ad72","#97aa7b","#a9b484","#7c9a60"].includes(n),s=["#667b7b","#718784"].includes(n),r=["#e1cda5","#d7cab0","#c0b18a","#ebd69c","#ddd3ab"].includes(n),a=new wt({color:n,roughness:e,metalness:t,clearcoat:e<.6?.25:.05,clearcoatRoughness:.45,envMapIntensity:.65});if(["#347447","#458b4e","#63a357","#7eb56a","#dba0b3","#e7b3c3","#f4cbd5","#f7dae0"].includes(n)&&Iu(a),["#152019","#182c23","#201f18","#27311d","#1c291d"].includes(n)&&(a.roughness=.12,a.clearcoat=1,a.clearcoatRoughness=.08),["#ffe8a8","#ffe9a2","#fff4bd"].includes(n)&&(a.emissive=new Se("#ffc66d"),a.emissiveIntensity=.55),["#528b9c","#397b8c","#4f91a5"].includes(n)&&Va(a),i||s||r){let o=Rp(i?"grass":s?"road":"paving");a.map=o,a.bumpMap=o,a.bumpScale=s?.009:i?.014:.012,a.roughness=.88}return a}function Lu(n){let e=Du(n,.68,0);return e.map=Rp("roof"),e.bumpMap=e.map,e.bumpScale=.027,e}function Uu(n=!1){if(gc.has(n))return gc.get(n);let e=un[Cu],t=new pt({name:n?"river-silk":"coastal-water",uniforms:{time:Pu,river:{value:n?1:0},deepColor:{value:new Se(e.waterDeep)},shallowColor:{value:new Se(e.waterShallow)},skyColor:{value:new Se(e.sky)},sunColor:{value:new Se(e.sun)},sunDirection:{value:new A(...e.position).normalize()},viewDirection:Tp,lightPower:{value:e.power}},vertexShader:Sp,fragmentShader:Ep});return t.toneMapped=!0,gc.set(n,t),t}function Cp(n,e){Pu.value=n,e&&e.getWorldDirection(Tp.value).negate()}var Nu=n=>[...mc.values()].includes(n);var vc=new Map,Pp=new Set;function Tt(n,e=.72,t=0){let i=`${n}:${e}:${t}`;return vc.has(i)||vc.set(i,Du(n,e,t)),Pp.add(vc.get(i)),vc.get(i)}var Ip=new Zt(1,48,36),Dp=new as(1,1,1,2,.035),xc=new Set([Ip,Dp]),ku=new Map,Fu=new Map;function Fe(n,e,t,i=[0,0,0],s=[1,1,1]){let r=new lt(e,typeof t=="string"?Tt(t):t);return r.position.set(...i),r.scale.set(...s),r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}var Le=(n,e,t,i)=>Fe(n,Ip,e,t,i),q=(n,e,t,i)=>Fe(n,Dp,e,t,i);function nt(n,e,t,i,s,r,a=24){let o=[i,s,r,a].join(":");if(!ku.has(o)){let c=new nn(i,s,r,a);ku.set(o,c),xc.add(c)}return Fe(n,ku.get(o),e,t)}function Qe(n,e,t,i=.025,s=24,r=8){let a=JSON.stringify([t,i,s,r]);if(!Fu.has(a)){let o=new wa(new Qn(t.map(c=>new A(...c))),s,i,r,!1);Fu.set(a,o),xc.add(o)}return Fe(n,Fu.get(a),e)}function os(n,{background:e="#fff1ce",color:t="#334d56",width:i=256,height:s=96}={}){let r=document.createElement("canvas");r.width=i,r.height=s;let a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,i,s),a.strokeStyle=t,a.lineWidth=3,a.strokeRect(5,5,i-10,s-10),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=`bold ${Math.min(36,(i-20)/Math.max(1,n.length))}px "Microsoft YaHei",sans-serif`,a.fillText(n,i/2,s/2);let o=new Kn(r);return o.colorSpace=It,o}function Lt(n,e,t,i=1.2,s=.35,r={}){let a=new kt({map:os(e,r),side:At});return Fe(n,new Yt(i,s),a,t)}function hi(n){let e=new Set,t=new Set;n.traverse(i=>{i.isInstancedMesh&&i.dispose(),i.geometry&&!xc.has(i.geometry)&&i.geometry.dispose();for(let s of Array.isArray(i.material)?i.material:[i.material])if(s&&!Pp.has(s)){e.add(s);for(let r of["map","bumpMap","normalMap","roughnessMap"])s[r]&&!Nu(s[r])&&t.add(s[r])}});for(let i of t)i.dispose();for(let i of e)i.dispose()}function qi(n){n.updateMatrixWorld(!0);let e=n.matrixWorld.clone().invert(),t=new Map;n.traverse(i=>{let s=i;for(;s&&s!==n;){if(s.userData.dynamic||!s.visible)return;s=s.parent}if(i.isMesh&&!i.isInstancedMesh&&xc.has(i.geometry)&&(!i.material.map||Nu(i.material.map))){let r=[i.geometry.uuid,i.material.uuid,i.castShadow,i.receiveShadow,i.renderOrder,i.layers.mask].join(":"),a=t.get(r)||[];a.push(i),t.set(r,a)}});for(let i of t.values()){if(i.length<2)continue;let s=i[0],r=new Cs(s.geometry,s.material,i.length);r.castShadow=s.castShadow,r.receiveShadow=s.receiveShadow,r.renderOrder=s.renderOrder,r.layers.mask=s.layers.mask;for(let[a,o]of i.entries())r.setMatrixAt(a,new Ke().multiplyMatrices(e,o.matrixWorld)),o.parent.remove(o);r.computeBoundingSphere(),n.add(r)}return n}function Lp(n,e,t){let i=new xe;i.name="hotel-bed-marquee",i.position.set(0,e,0),n.add(i);for(let r of[-.4,.4])q(i,"#9e8d73",[r,.15,0],[.045,.3,.055]);q(i,t,[0,.5,0],[1.36,.66,.17]),q(i,"#f6e8c5",[0,.5,0],[1.25,.55,.19]),q(i,"#466c72",[0,.5,0],[1.16,.47,.205]);let s=Va(new yt({color:"#fff0c1",roughness:.4}));for(let r of[-1,1]){let a=new xe;a.rotation.y=r<0?Math.PI:0,i.add(a),q(a,s,[-.43,.46,.12],[.045,.32,.035]),q(a,s,[.43,.4,.12],[.045,.2,.035]),q(a,s,[0,.4,.12],[.88,.06,.035]),q(a,s,[.04,.48,.12],[.69,.12,.035]),Le(a,s,[-.31,.5,.12],[.075,.065,.025])}return i}function Up(n,e){let t=new xe;t.name="research-dish",t.position.set(.1,e,-.1),n.add(t),nt(t,"#738b90",[0,.07,0],.12,.16,.14,32),nt(t,"#738b90",[0,.17,0],.045,.065,.16,24),Le(t,"#738b90",[0,.22,0],[.065,.065,.065]);let i=new xe;i.position.y=.22,i.rotation.x=-.5,t.add(i);let s=Array.from({length:41},(o,c)=>{let l=c/40*.32;return new ne(l,.115*(l/.32)**2)}),r=Fe(i,new rn(s,96),new yt({color:"#e5e7d9",metalness:.3,roughness:.32,side:At}));r.name="parabolic-reflector";let a=Fe(i,new oi(.32,.012,12,96),Tt("#a6b7b7",.3,.6),[0,.115,0]);a.rotation.x=Math.PI/2;for(let o=0;o<3;o++){let c=o/3*Math.PI*2;Qe(i,"#829a9d",[[Math.cos(c)*.29,.095,Math.sin(c)*.29],[0,.29,0]],.009,16,8)}return nt(i,"#b8a575",[0,.28,0],.037,.047,.08,24),Le(i,"#4c7d8c",[0,.32,0],[.034,.025,.034]),t}var g1=["#347447","#458b4e","#63a357","#7eb56a"],v1=["#edb4ba","#f2d578","#c9b8e7","#fff1d0"];function Bu(n,e,t,i=1,s=0){let r=new xe,a=new xe;nt(r,"#855c3b",[0,.52,0],.075,.15,1.04,20);for(let o of[-1,1])Qe(r,"#855c3b",[[0,.52,0],[o*.18,.89,.025],[o*.31,1.18,.05]],.04);for(let o=0;o<13;o++){let c=o*2.39996,l=o<3?.1:.38,h=1.24+o%4*.14,u=Le(a,s%7===3?["#dba0b3","#e7b3c3","#f4cbd5","#f7dae0"][o%4]:g1[(o+s)%4],[Math.cos(c)*l,h,Math.sin(c)*l],[.33+o%3*.025,.39,.34]);u.rotation.z=c*.13}return r.add(a),r.position.set(e,.08,t),r.scale.setScalar(i),n.add(r),r}function Np(n){let e=new xe;e.name="riverside-details",n.world.add(e);let t=91871,i=()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296),s=(f,d,g=2)=>n.tiles.every(v=>Math.hypot(v.x-f,v.z-d)>g&&Math.hypot(v.lotX-f,v.lotZ-d)>g);for(let f of[-1,1])for(let d=0;d<100;d++){let g=-15+d*.3,v=Math.sin(g*.21)*.8+f*(.73+i()*.35);if(!s(g,v,1.7))continue;let m=Le(e,d%3?"#b8b4a0":"#ddd5b7",[g,.07,v],[.11+i()*.1,.06+i()*.05,.08+i()*.1]);if(m.rotation.y=i()*6.28,d%5===0)for(let p=0;p<5;p++){let x=nt(e,"#607c43",[g+(p-2)*.07,.24,v],.012,.018,.38,8);x.rotation.z=(p-2)*.12}}for(let f=0;f<20;f++){let d=-13+i()*26,g=(i()>.5?1:-1)*(3.3+i()*4);s(d,g,2.2)&&Bu(e,d,g,.65+i()*.35,f)}for(let f=0;f<12;f++){let d=-12+i()*24,g=(i()>.5?1:-1)*(2.3+i()*3.7);if(!s(d,g,1.8))continue;let v=new xe;q(v,"#c7b18a",[0,.085,0],[.78,.12,.55]),q(v,"#56774b",[0,.16,0],[.7,.07,.47]);for(let m=0;m<9;m++){let p=(m%3-1)*.19,x=(Math.floor(m/3)-1)*.15,y=.28+i()*.06;nt(v,"#5b8744",[p,.22,x],.009,.009,.18,6);for(let _=0;_<5;_++){let R=_/5*Math.PI*2;Le(v,v1[(f+m)%4],[p+Math.cos(R)*.047,y,x+Math.sin(R)*.047],[.04,.025,.04])}Le(v,"#d6a83f",[p,y+.014,x],[.024,.018,.024])}v.position.set(d,0,g),e.add(v)}let r=new tt;r.setAttribute("position",new Pe([-.026,0,0,.026,0,0,-.017,.16,0,.017,.16,0,.014,.29,0],3)),r.setIndex([0,1,2,1,3,2,2,3,4]),r.computeVertexNormals();let a=new Cs(r,Iu(new yt({color:"#71a15c",side:At,roughness:.9}),!0),1600),o=new Ke,c=new Qt,l=new A,h=new A,u=0;for(let f=0;f<1e4&&u<1600;f++){let d=-16+i()*32,g=-10+i()*20;!s(d,g,2)||Math.abs(g-Math.sin(d*.21)*.8)<1.2||(l.set(d,.065,g),c.setFromAxisAngle(new A(0,1,0),i()*6.28),h.setScalar(.5+i()*.8),o.compose(l,c,h),a.setMatrixAt(u++,o))}return a.name="meadow-grass",a.count=u,a.receiveShadow=!0,a.castShadow=!1,a.computeBoundingSphere(),e.add(a),qi(e),e}function Lr(n,e,t,i){let s=new xe;s.name="architectural-details",n.add(s);let r=new Et().setFromObject(n),a=r.max.y;if(["residence","tea","hotel","tower","mall"].includes(e)){for(let u of[-1,1])Qe(s,"#b5a184",[[u*.76,.2,-.5],[u*.76,Math.max(.5,a-.35),-.5]],.018),q(s,"#a7b5b2",[u*.77,.18,-.5],[.08,.1,.08]);q(s,"#d4c4a2",[0,.14,.72],[.66,.1,.23]),q(s,"#ede2c2",[0,.09,.82],[.8,.08,.22]);let o=Va(new wt({color:"#397b8c",metalness:.15,roughness:.12,clearcoat:1,envMapIntensity:1.2}));for(let u=0;u<Math.min(t,5);u++)for(let f of[-1,1]){let d=.58+u*.43;if(q(s,"#f7edcf",[f*.38,d,.575],[.31,.29,.045]),q(s,o,[f*.38,d,.603],[.24,.22,.015]),q(s,"#b4a47d",[f*.38,d,.625],[.018,.23,.018]),q(s,"#fff0cc",[f*.38,d-.16,.62],[.37,.055,.1]),u===0||u===2){q(s,"#a78b68",[f*.38,d-.22,.66],[.3,.09,.16]);for(let g=0;g<3;g++)Le(s,g%2?"#d79e97":"#76a65d",[f*.38+(g-1)*.08,d-.16,.67],[.06,.055,.05])}}let c=e==="mall"?1.62:e==="tower"?1.35:1.46,l=e==="mall"?1.2:1.02,h=e==="tea"?.65+t*.65:e==="hotel"?.55+t*.58:e==="mall"?.75+t*.5:e==="tower"?.8+t*.62:.64+t*.46;if(e==="tower"){q(s,o,[0,h/2+.12,-.515],[1.22,h-.12,.025]),q(s,o,[-.69,h/2+.12,0],[.025,h-.12,.88]);for(let u=.3;u<h;u+=.33)q(s,"#cbd7cf",[0,u,-.54],[1.4,.035,.04]),q(s,"#cbd7cf",[-.71,u,0],[.04,.035,1]);for(let u of[-.45,0,.45])q(s,"#cbd7cf",[u,h/2+.12,-.54],[.035,h,.035])}else for(let u=0;u<t;u++){let f=.5+(h-.72)*(u/Math.max(1,t-1));for(let d of[-c*.27,c*.27])q(s,"#f7edcf",[d,f,-l/2-.018],[.33,.29,.04]),q(s,o,[d,f,-l/2-.045],[.25,.22,.016]),q(s,"#b4a47d",[d,f,-l/2-.06],[.018,.23,.014]);for(let d of[-l*.26,l*.26])q(s,"#f7edcf",[-c/2-.018,f,d],[.04,.29,.29]),q(s,o,[-c/2-.045,f,d],[.016,.22,.22]);q(s,"#efe5cb",[0,f+.19,0],[c+.06,.04,l+.06])}}if(e==="research"){let o=.55+t*.25,c=Tt("#4f91a5",.18,.2);for(let l=0;l<Math.max(1,Math.floor(o/.4));l++)for(let h=0;h<10;h++){let u=h/10*Math.PI*2,f=.4+l*.35,d=.79-.06*(f-.12)/o,g=q(s,"#e9e4d2",[Math.sin(u)*(d+.015),f,Math.cos(u)*(d+.015)],[.29,.25,.035]);g.rotation.y=u;let v=q(s,c,[Math.sin(u)*(d+.039),f,Math.cos(u)*(d+.039)],[.23,.19,.016]);v.rotation.y=u}}if(["tower","hotel","mall","research"].includes(e)){let o={hotel:.55+t*.58+.15,research:.55+t*.25+.17,mall:.75+t*.5+.18,tower:.8+t*.62+.15}[e],c=new xe;c.name="rooftop-service-unit",c.position.set(-.4,o+.13,-.35),s.add(c),q(c,"#b8bab0",[0,0,0],[.36,.19,.26]);for(let l=0;l<5;l++)q(c,"#667c7b",[-.13+l*.065,.102,0],[.022,.012,.22]);Qe(s,"#9faaa3",[[.45,o+.03,-.4],[.45,o+.55,-.4]],.014)}return n}var x1=["tea","theater","factory","garden","hotel","tower"];function kp(n){return n.buildingType&&Mt[n.buildingType]?Mt[n.buildingType].architecture:/茶|奶茶|奶盖/.test(n.name)?"tea":/剧|影|照相/.test(n.name)?"theater":/厂|工坊|面包/.test(n.name)?"factory":/花园|洗澡/.test(n.name)?"garden":/旅馆|公寓|食堂/.test(n.name)?"hotel":x1[n.group%6]}var ls=Tt("#528b9c",.24,.25);var dn="#fff1d1";function _c(n,e,t=1.35,i=.95){for(let s=0;s<e;s++){let r=.57+s*.43;for(let a of[-t*.27,t*.27])q(n,dn,[a,r,i/2+.014],[.3,.3,.045]),q(n,ls,[a,r,i/2+.042],[.23,.235,.02]),q(n,"#a7d1d2",[a-.055,r+.055,i/2+.055],[.04,.1,.012]);for(let a of[-i*.25,i*.25])q(n,ls,[t/2+.018,r,a],[.025,.24,.2]),q(n,dn,[t/2+.035,r-.15,a],[.06,.035,.27])}}function Ga(n,e,t=1.65,i=1.2,s="#c96548"){let r=new $i;r.moveTo(-t/2,0),r.lineTo(0,.48),r.lineTo(t/2,0),r.closePath();let a=new Dn(r,{depth:i,bevelEnabled:!1});Fe(n,a,Lu(s),[0,e,-i/2]),q(n,s,[0,e+.48,0],[.08,.06,i+.07]);for(let o of[-1,1]){let c=[0,e+.486,-i/2,0,e+.486,i/2,o*t/2,e+.006,-i/2,o*t/2,e+.006,i/2],l=new tt;l.setAttribute("position",new Pe(c,3)),l.setAttribute("uv",new Pe([0,0,0,2,2,0,2,2],2)),l.setIndex(o>0?[0,1,2,1,3,2]:[0,2,1,1,2,3]),l.computeVertexNormals(),Fe(n,l,Lu(s))}for(let o=0;o<Math.ceil(i/.12);o++)nt(n,s,[0,e+.515,-i/2+o*.12],.038,.038,.125,16).rotation.x=Math.PI/2}function Ou(n,e,t,i=.7){return Bu(n,e,t,i)}function yc(n,e,t=1.4){q(n,dn,[0,e,.67],[t,.08,.4]);for(let i of[-t/2,t/2])q(n,"#526b6b",[i,e+.15,.8],[.025,.3,.025]);q(n,"#526b6b",[0,e+.3,.8],[t,.025,.025]);for(let i=-t/2;i<=t/2;i+=.16)q(n,"#526b6b",[i,e+.15,.8],[.018,.3,.018])}function Gs(n,e,t="#d6bb76",i=!1){let s=new xe;if(s.name=`property-${n.id}-${e}`,s.userData.architecture=kp(n),s.userData.level=e,e===0){let c=Fe(s,new Yt(1.95,1.62),i?"#a9b484":"#97aa7b",[0,-.08,0]);c.rotation.x=-Math.PI/2,c.name="flat-ground",c.castShadow=!1;let l=[[-.975,-.81],[.975,-.81],[.975,.81],[-.975,.81]],h=[];for(let f=0;f<4;f++){let d=l[f],g=l[(f+1)%4],v=Math.hypot(g[0]-d[0],g[1]-d[1]);for(let m=0;m<v;m+=.27){let p=Math.min(m+.15,v);h.push(d[0]+(g[0]-d[0])*m/v,-.065,d[1]+(g[1]-d[1])*m/v,d[0]+(g[0]-d[0])*p/v,-.065,d[1]+(g[1]-d[1])*p/v)}}let u=new Ps(new tt().setAttribute("position",new Pe(h,3)),new tn({color:i?t:"#fff2c4"}));return u.name="dashed-boundary",s.add(u),s.userData.vacant=!0,s}q(s,"#d7cab0",[0,.025,0],[1.95,.09,1.62]),q(s,t,[0,.09,.78],[1.95,.08,.1]);let r=kp(n),a=e,o=i?"#"+new Se(t).lerp(new Se("#fff1d5"),.73).getHexString():null;if(s.userData.ownerColor=i?t:null,r==="residence"){let c=.64+e*.46;q(s,o||"#eddbb9",[0,c/2+.1,0],[1.46,c,1.02]),_c(s,e,1.46,1.02),q(s,"#775640",[0,.35,.56],[.29,.48,.07]),Ga(s,c+.11,1.72,1.23,t);for(let l=1;l<e;l++)q(s,dn,[0,.75+l*.46,0],[1.56,.055,1.1]);return e>=3&&yc(s,1.2,1.55),Lt(s,"\u5976\u5BB6\u4F4F\u5B85",[0,.96,.58],.96,.23,{background:"#56756a",color:"#fff4da"}),qi(Lr(s,r,e,t))}if(r==="research"){let c=.55+e*.25;nt(s,o||"#d8dccb",[0,c/2+.12,0],.73,.79,c,48);for(let h of[-.42,0,.42])q(s,ls,[h,c*.65,.7],[.23,.25,.03]);nt(s,t,[0,c+.17,0],.86,.86,.16,48);let l=Fe(s,new Zt(.56,40,24,0,Math.PI*2,0,Math.PI/2),"#89aab5",[0,c+.25,0]);l.scale.y=.75,Up(s,c+.69);for(let h of[-.7,.7])q(s,"#526f94",[h,.34,-.1],[.28,.035,.8]);return Lt(s,"\u7814 \u7A76 \u6240",[0,.66,.8],1.08,.28,{background:"#4c768c",color:"#fff5cf"}),qi(Lr(s,r,e,t))}if(r==="gas"){for(let c of[-.72,.72])q(s,"#e9ddbf",[c,.82,0],[.085,1.5,.085]);q(s,t,[0,1.62,0],[1.9,.15,1.46]),q(s,dn,[0,1.49,.76],[1.9,.12,.05]);for(let c of[-.45,.45])q(s,"#d6dacb",[c,.46,.05],[.3,.8,.31]),q(s,"#486c75",[c,.64,.22],[.24,.18,.025]),Qe(s,"#3e4b45",[[c+.13,.67,.04],[c+.28,.54,.04],[c+.23,.19,.12],[c+.13,.35,.22]],.025);return Lt(s,"\u5976 \u7F50 \u52A0 \u6CB9",[0,1.61,.77],1.65,.22,{background:t,color:"#fff6dd"}),qi(Lr(s,r,e,t))}if(r==="mall"){let c=.75+e*.5;q(s,o||"#e0d2b4",[0,c/2+.1,0],[1.62,c,1.2]);for(let h=0;h<e;h++)q(s,ls,[0,.51+h*.5,.625],[1.35,.31,.035]),q(s,dn,[0,.73+h*.5,.64],[1.76,.06,.07]);q(s,t,[0,c+.18,0],[1.83,.18,1.4]);let l=q(s,"#e8c36b",[0,c+.52,0],[.5,.48,.3]);return Fe(s,new oi(.13,.025,8,24,Math.PI),"#84623f",[0,c+.8,0]),Lt(s,"\u5976 \u5BB6 \u767E \u8D27",[0,1.01,.7],1.54,.3,{background:"#91615c",color:"#fff2c7"}),qi(Lr(s,r,e,t))}if(r==="tea"){let c=.65+e*.65;q(s,o||"#e9cda1",[0,c/2+.08,0],[1.5,c,1.05]);for(let h=1;h<e;h++){for(let u of[-.37,.37])q(s,dn,[u,.78+h*.65,.55],[.41,.39,.035]),q(s,ls,[u,.78+h*.65,.575],[.33,.3,.025]);q(s,dn,[0,1+h*.65,.04],[1.61,.07,1.12])}q(s,dn,[0,.4,.55],[1.26,.58,.06]),q(s,ls,[0,.4,.59],[1.15,.5,.035]),q(s,"#87654c",[0,.13,.63],[1.3,.12,.25]);for(let h=0;h<8;h++){let u=q(s,h%2?"#fff0d2":"#ba6a52",[-.66+h*.19,.88,.72],[.19,.08,.5]);u.rotation.x=.2,q(s,h%2?"#fff0d2":"#ba6a52",[-.66+h*.19,.8,.95],[.19,.13,.04])}Ga(s,c+.08,1.72,1.23,i?t:"#5d8a80"),Lt(s,n.buildingType==="chain"?"\u5976\u5BB6\u8FDE\u9501\u5E97":"\u5976\u8336\u5C0F\u94FA",[0,1.12,.57],1.12,.24,{background:"#527a6b",color:"#fff2cc"});let l=new xe;nt(l,"#e6b96f",[0,.23,0],.2,.15,.4),nt(l,dn,[0,.45,0],.22,.22,.05),Qe(l,"#fff5d8",[[.04,.46,0],[.04,.73,-.05]],.026);for(let h=0;h<4;h++)Le(l,"#624b3a",[-.11+h*.07,.1,.15],[.027,.027,.02]);l.position.set(.42,c+.52,0),s.add(l),e>=2&&(yc(s,1.18,1.6),q(s,"#697c4c",[-.6,1.3,.65],[.25,.16,.22])),e>=3&&(yc(s,1.83,1.6),Fe(s,new In(.4,.2,12),"#bd6953",[-.48,c+.52,-.1]),q(s,"#8c785d",[-.48,c+.25,-.1],[.03,.65,.03]))}else if(r==="theater"){let c=.8+e*.45;q(s,o||"#b97561",[0,c/2+.1,0],[1.52,c,1.16]),q(s,"#f2d29c",[0,.55,.61],[1.35,.95,.07]);for(let h of[-.45,0,.45])q(s,"#4c6369",[h,.43,.67],[.32,.61,.035]);q(s,i?t:"#f1c451",[0,1.08,.79],[1.78,.3,.4]),Lt(s,"\u5927 \u7B11 \u5267 \u573A",[0,1.09,1],1.65,.27,{background:"#833e43",color:"#ffdda1"});for(let h=0;h<9;h++)Le(s,"#ffe9a2",[-.78+h*.195,1.24,1],[.035,.035,.035]);for(let h of[-.67,.67])q(s,"#dbc5a0",[h,c*.64,.65],[.17,c*.85,.12]),Le(s,"#f5ce69",[h,c+.13,.54],[.14,.14,.13]);let l=Fe(s,new oi(.48,.1,10,32,Math.PI),i?t:"#f1c451",[0,c+.12,.03]);if(Lt(s,"\u7B11",[0,c+.35,.15],.46,.46,{background:"#b95b53",color:"#fff1bb"}),e>=3)for(let h of[-.55,.55]){let u=nt(s,"#4a5f69",[h,c+.3,-.35],.09,.09,.28);u.rotation.x=.45}}else if(r==="factory"){let c=.62+e*.35;q(s,o||"#c68860",[0,c/2+.1,0],[1.6,c,1.1]),q(s,"#53616c",[0,.45,.57],[.74,.63,.035]);for(let l=.2;l<.75;l+=.08)q(s,"#8b9d9e",[0,l,.6],[.69,.025,.025]);_c(s,Math.max(1,e-1),1.6,1.1),Ga(s,c+.1,1.82,1.25,i?t:"#5c7886");for(let l=0;l<Math.min(e,2);l++){let h=.46-l*.32;nt(s,"#ac6554",[h,c+.5,-.37],.12,.17,1.25);for(let u=c+.2;u<c+1.1;u+=.28)nt(s,"#e0bc91",[h,u,-.37],.13,.13,.045)}Lt(s,"\u5976\u5757\u5DE5\u574A",[0,1,.6],1.03,.24,{background:"#526d73",color:"#fff0c5"});for(let[l,h]of[[-.67,.76],[.57,.79]])q(s,"#c19a62",[l,.2,h],[.25,.3,.25]),q(s,"#edd5a4",[l,.2,h+.131],[.03,.29,.02]);s.userData.smoke=!0}else if(r==="garden"){q(s,"#7c9a60",[0,.12,0],[1.82,.1,1.45]),q(s,"#ddd3ab",[0,.18,0],[.4,.025,1.45]);for(let c of[-.62,.62]){q(s,"#dfc394",[c,.24,.4],[.46,.25,.35]);for(let l=0;l<4;l++)Le(s,["#e7ad8c","#fff0c9","#d97f6e"][l%3],[c-.15+l*.1,.42,.4],[.07,.09,.07])}if(e===1)Ou(s,-.45,-.38,.7),Ou(s,.5,-.3,.55);else{for(let c of[-.65,.65])for(let l of[-.45,.35])q(s,"#e3cf9f",[c,.68,l],[.07,1.1,.07]);for(let c=-.8;c<=.8;c+=.18)q(s,i?t:"#b7c88a",[c,1.22,-.06],[.09,.06,1.1]);for(let c=0;c<5;c++)Le(s,"#5f8955",[-.65+c*.3,1.25,-.35],[.23,.09,.2]);if(e>=3){let c=Fe(s,new In(.86,.4,4),i?t:"#537c69",[0,1.53,-.05]);c.rotation.y=Math.PI/4,nt(s,"#b5d2ce",[0,.38,-.1],.37,.37,.18),nt(s,"#d7dbb1",[0,.43,-.1],.43,.43,.05)}if(e>=4){q(s,i?t:"#7fa37f",[0,1.73,-.05],[1.36,.12,.96]);for(let l of[-.48,.48])for(let h of[-.35,.25])nt(s,"#e8d7ac",[l,2.06,h],.035,.045,.6);let c=Fe(s,new In(.76,.34,4),i?t:"#618b73",[0,2.5,-.05]);c.rotation.y=Math.PI/4}e===5&&(nt(s,"#b5c6b2",[0,2.82,-.05],.23,.3,.26),Le(s,"#edca72",[0,3.03,-.05],[.16,.18,.16]))}Lt(s,"\u5976\u5BB6\u82B1\u56ED",[0,.49,.77],.75,.2,{background:"#426b54",color:"#fff1ce"})}else if(r==="hotel"){let c=.55+e*.58;q(s,o||"#eed9b4",[0,c/2+.1,0],[1.45,c,1.02]),_c(s,e+1,1.45,1.02),q(s,"#865a50",[0,.32,.55],[.32,.45,.06]);for(let l=1;l<=e;l++)yc(s,.3+l*.43,1.55);q(s,i?t:"#aa5a4b",[0,c+.15,0],[1.68,.12,1.23]),Lp(s,c+.24,i?t:"#aa5a4b"),Lt(s,"\u5976 \u5BB6 \u65C5 \u9986",[0,.86,.84],1.22,.24,{background:"#a65245",color:"#fff3ca"}),e>=3&&(nt(s,"#6096a0",[.45,c+.4,-.3],.22,.22,.4),q(s,"#e4d7b5",[.45,c+.62,-.3],[.55,.07,.55]))}else{let c=.8+e*.62;q(s,o||"#d6d5c1",[0,c/2+.1,0],[1.35,c,1]),q(s,ls,[0,c/2+.12,.51],[1.22,c-.12,.02]),q(s,ls,[.69,c/2+.12,0],[.025,c-.12,.88]);for(let l=.3;l<c;l+=.33)q(s,"#cbd7cf",[0,l,.535],[1.4,.035,.04]),q(s,"#cbd7cf",[.71,l,0],[.04,.035,1]);for(let l of[-.45,0,.45])q(s,"#cbd7cf",[l,c/2+.12,.54],[.035,c,.035]);q(s,i?t:"#dae4d5",[0,c+.15,0],[1.53,.15,1.14]),q(s,i?t:"#4d6574",[.2,c+.4,-.1],[.7,.35,.7]),Qe(s,"#70868a",[[.3,c+.5,-.1],[.3,c+1,-.1]],.018),Lt(s,"\u5976\u5E01\u4E2D\u5FC3",[0,.48,.57],.9,.25,{background:"#486e7f",color:"#fff0c0"})}return qi(Lr(s,r,e,t))}function bc(n){let e=new xe;e.name=`landmark-${n.kind}`,q(e,"#d7c8a7",[0,.07,0],[2,.15,1.72]);let t=1.25;if(n.kind==="bank"){q(e,"#e5d3ae",[0,.72,-.15],[1.58,1.28,1.06]);for(let s of[-.6,-.2,.2,.6])nt(e,"#fff0ce",[s,.78,.62],.08,.1,1.1),q(e,"#b7b293",[s,.24,.62],[.23,.12,.24]);let i=Fe(e,new In(1,.42,3),"#d4b882",[0,1.6,.38]);i.rotation.y=Math.PI/2,q(e,"#b5a278",[0,.17,.54],[1.94,.1,.75]),Lt(e,"\u5976 \u5E01 \u94F6 \u884C",[0,1.25,.74],1.3,.25,{background:"#456779",color:"#fff0c2"}),Le(e,"#dbb45d",[0,1.66,.65],[.16,.16,.08])}else if(n.kind==="hospital")q(e,"#e5e3cf",[0,.75,0],[1.7,1.4,1.13]),_c(e,2,1.7,1.13),q(e,"#c0cdcb",[0,1.5,0],[1.9,.12,1.3]),q(e,"#cb6056",[0,1.85,0],[.18,.65,.09]),q(e,"#cb6056",[0,1.85,.01],[.57,.18,.1]),q(e,"#507b85",[0,.35,.62],[.6,.5,.08]),q(e,"#7ba8a8",[0,.67,.77],[1.02,.08,.5]),Lt(e,"\u5976\u86D9\u7597\u517B\u9662",[0,1.19,.59],1.45,.25,{background:"#fff1d3",color:"#8c4b49"});else if(n.kind==="stock"){let i=Gs({...n,name:"\u8BC1\u5238\u6240",group:5},3,"#7a9cac");e.add(i),Lt(e,"\u5976\u5BB6\u8BC1\u5238\u6240",[0,1.4,.56],1.2,.32,{background:"#344f67",color:"#f7dc84"})}else if(n.kind==="shop"){let i=Gs({...n,name:"\u5976\u8336\u5E97",group:0},1,"#d1aa6e");e.add(i),Lt(e,"\u5976\u4F34\u8865\u7ED9\u7AD9",[0,1.12,.59],1.25,.25,{background:"#bd6b4b",color:"#fff3ce"})}else if(n.kind==="spirit"){for(let s=0;s<3;s++)q(e,"#b3a07c",[0,.13+s*.09,0],[1.95-s*.23,.1,1.6-s*.18]);for(let s of[-.55,.55])for(let r of[-.35,.35])nt(e,"#b14c37",[s,.85,r],.07,.07,1.1);let i=Fe(e,new In(1.12,.5,4),"#557f6b",[0,1.55,0]);i.rotation.y=Math.PI/4,Le(e,"#dfbb5c",[0,1.88,0],[.1,.15,.1]),Lt(e,"\u5927\u7B11\u795E\u6BBF",[0,1.13,.42],.9,.28,{background:"#8e3d30",color:"#ffe49c"})}else if(n.kind==="event"){nt(e,"#bb967a",[0,.2,0],.85,.9,.27);for(let s of[-.65,.65])q(e,"#4b5f67",[s,.9,-.35],[.07,1.5,.07]),q(e,"#4b5f67",[s,.55,.4],[.3,.7,.28]);q(e,"#4b5f67",[0,1.6,-.35],[1.35,.06,.06]);let i=Lt(e,n.id===33?"\u5976\u86D9\u8857\u821E":"\u8868\u60C5\u5305\u5E7F\u573A",[0,1.18,-.3],1.15,.56,{background:"#b75a5d",color:"#ffe9bd"});e.userData.stage=!0}else if(n.kind==="rest")e.add(Gs({...n,name:"\u5C0F\u65C5\u9986",group:4},1,"#84aa7a")),Ga(e,1.35,1.85,1.3,"#698b68"),Lt(e,"\u5976\u86D9\u7684\u5C0F\u7A9D",[0,1.15,.8],1.1,.24,{background:"#6e875a",color:"#fff0cb"});else if(n.kind==="tax"){q(e,"#b9cbc3",[0,.65,0],[1.4,1.1,1.05]),Ga(e,1.2,1.6,1.2,"#778d7a");for(let i of[-.4,.2])nt(e,"#78999b",[i,.4,.7],.16,.16,.6);Lt(e,"\u6E05\u6D01\u7AD9",[0,.88,.56],1,.28,{background:"#6a8575",color:"#fff1ce"})}else if(n.kind==="start"){for(let i of[-.75,.75])nt(e,"#c4ae7d",[i,.8,0],.12,.16,1.4),Le(e,"#e5bd4f",[i,1.6,0],[.2,.2,.2]);q(e,"#456b70",[0,1.45,0],[1.9,.4,.22]),Lt(e,"\u5976 \u5BB6 \u8D77 \u70B9",[0,1.46,.13],1.7,.3,{background:"#456b70",color:"#fff1ce"});for(let i of[-.6,-.2,.2,.6])q(e,"#f4e5bd",[i,.17,.6],[.2,.03,.5])}return qi(e)}function Fp(n,e,t,i=1){let s=new xe;return Ou(s,0,0,i),s.position.set(e,.12,t),n.add(s),s}function cs(n,{min:e=[-1,0,-1.4],max:t=[1,2.6,1.4],steps:i=[40,52,52],blend:s=.13,cuts:r=[],cutField:a=null}={}){let o=(U,S,M)=>{let D=1e6;for(let[k,X,W,O,z,ee]of n){let H=(Math.hypot((U-k)/O,(S-X)/z,(M-W)/ee)-1)*Math.min(O,z,ee),te=Math.max(0,s-Math.abs(D-H))/s;D=Math.min(D,H)-te*te*s*.25}for(let[k,X,W,O,z,ee]of r){let H=(Math.hypot((U-k)/O,(S-X)/z,(M-W)/ee)-1)*Math.min(O,z,ee);D=Math.max(D,-H)}return a?Math.max(D,-a(U,S,M)):D},[c,l,h]=i,u=(t[0]-e[0])/c,f=(t[1]-e[1])/l,d=(t[2]-e[2])/h,g=(U,S,M)=>U+(c+1)*(S+(l+1)*M),v=new Float32Array((c+1)*(l+1)*(h+1));for(let U=0;U<=h;U++)for(let S=0;S<=l;S++)for(let M=0;M<=c;M++)v[g(M,S,U)]=o(e[0]+M*u,e[1]+S*f,e[2]+U*d);let m=[],p=[],x=new Map,y=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],_=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]];for(let U=0;U<h;U++)for(let S=0;S<l;S++)for(let M=0;M<c;M++){let D=y.map(W=>g(M+W[0],S+W[1],U+W[2]));if(D.every(W=>v[W]>=0)||D.every(W=>v[W]<0))continue;let k=(W,O)=>{let z=D[W],ee=D[O],H=Math.min(z,ee)+":"+Math.max(z,ee);if(x.has(H))return x.get(H);let te=v[z]/(v[z]-v[ee]),ae=y[W],he=y[O],we=m.length/3;return m.push(e[0]+(M+ae[0]+te*(he[0]-ae[0]))*u,e[1]+(S+ae[1]+te*(he[1]-ae[1]))*f,e[2]+(U+ae[2]+te*(he[2]-ae[2]))*d),x.set(H,we),we},X=(W,O,z)=>{let ee=new A().fromArray(m,W*3),H=new A().fromArray(m,O*3),te=new A().fromArray(m,z*3),ae=H.clone().sub(ee).cross(te.clone().sub(ee)),he=ee.clone().add(H).add(te).multiplyScalar(1/3),we=.003,Oe=new A(o(he.x+we,he.y,he.z)-o(he.x-we,he.y,he.z),o(he.x,he.y+we,he.z)-o(he.x,he.y-we,he.z),o(he.x,he.y,he.z+we)-o(he.x,he.y,he.z-we));ae.dot(Oe)<0?p.push(W,z,O):p.push(W,O,z)};for(let W of _){let O=W.filter(ee=>v[D[ee]]<0),z=W.filter(ee=>v[D[ee]]>=0);if(O.length===1)X(...z.map(ee=>k(O[0],ee)));else if(O.length===3)X(...O.map(ee=>k(ee,z[0])));else if(O.length===2){let[ee,H]=O,[te,ae]=z,he=k(ee,te),we=k(ee,ae),Oe=k(H,te),We=k(H,ae);X(he,we,Oe),X(we,We,Oe)}}}let R=new tt;R.setAttribute("position",new Pe(m,3)),R.setIndex(p);let T=[],L=.002;for(let U=0;U<m.length;U+=3){let S=m[U],M=m[U+1],D=m[U+2],k=new A(o(S+L,M,D)-o(S-L,M,D),o(S,M+L,D)-o(S,M-L,D),o(S,M,D+L)-o(S,M,D-L)).normalize();T.push(k.x,k.y,k.z)}return R.setAttribute("normal",new Pe(T,3)),R.userData.smoothFieldNormals=!0,R}function Fn(n,{y:e=2.3,z:t=.4,width:i=.31,height:s=.34,sculpted:r=!1,lipRadius:a=null,lipColor:o=null,archedTeeth:c=!1}={}){let l=new xe;l.position.set(0,e,t),n.add(l),l.name="laugh-face";let h=new $i;h.moveTo(-i,.075),h.bezierCurveTo(-i*.6,.01,i*.6,.01,i,.075),h.bezierCurveTo(i*.94,-s*.85,i*.55,-s,0,-s),h.bezierCurveTo(-i*.55,-s,-i*.94,-s*.85,-i,.075);let u=Tt("#301b14",.84),f=r?Fe(l,new Zt(1,48,32,Math.PI,Math.PI),new yt({color:"#26140e",roughness:.9,side:Vt}),[0,-s*.43,0],[i,s*.56,.23]):Fe(l,new Dn(h,{depth:.025,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:4,curveSegments:32}),u,[0,0,0]);f.name="mouth-cavity";let d=Qe(l,o||(r?"#d0aa39":"#a27629"),r?Array.from({length:33},(m,p)=>{let x=p/32*Math.PI*2;return[Math.cos(x)*i,-s*.43+Math.sin(x)*s*.56,.006]}):[[-i,.075,.018],[-i*.85,-s*.5,.016],[0,-s,.018],[i*.85,-s*.5,.016],[i,.075,.018]],a??(r?.009:.014),96,12),g=new xe;l.add(g),g.name="upper-teeth";for(let m=0;m<8;m++){let p=(m-3.5)*i*.215,x=c?-s*.43+Math.sqrt(1-(p/i)**2)*s*.56-.022:r?.014-.028*(Math.abs(m-3.5)/3.5)**2:.035+.036*(Math.abs(m-3.5)/3.5)**2,y=new lt(new as(i*.22,.043,.025,3,.008),Tt("#fff7de",.38));y.position.set(p,x,r?.025:.043),y.rotation.z=(m-3.5)*.032,g.add(y)}let v=new xe;v.name="laugh-jaw",l.add(v);for(let m=0;m<6;m++){let p=(m-2.5)*i*.215,x=-s+.045+.048*(Math.abs(m-2.5)/2.5)**2;Le(v,"#f9eccc",[p,x,.036],[i*.115,.027,.022])}return Le(v,"#bc7d6f",[0,-s*.72,.042],[i*.43,.046,.022]),l.visible=!1,l.userData={jaw:v,cavity:f,rim:d,height:s,sculpted:r},l}function zu(n,e,t=1){let i=n.userData;if(!i?.jaw)return;let s=Math.sin(e*10.5),r=i.sculpted?.98+.035*s*t:.92+.14*s*t;n.scale.set(i.fixedAperture?1:1+Math.sin(e*5.25)*.025*t,i.fixedAperture?1:r,1),i.jaw.position.y=-.012*(1+s)*t,i.jaw.rotation.x=.12*s*t}var Bp=new Map;function Mc(n,e,{width:t=.34,height:i=.5,cacheKey:s=null}={}){let o=-i-.07,c=.13,l=Bp.get(s)||[];if(!l.length){for(let d=0;d<=12;d++)for(let g=0;g<=9;g++)l.push(e(n.position.x-t+g/9*t*2,n.position.y+o+d/12*(c-o)));s&&Bp.set(s,l)}let h=(d,g)=>{let v=Math.max(0,Math.min(8.9999,(d+t)/(t*2)*9)),m=Math.max(0,Math.min(12-1e-4,(g-o)/(c-o)*12)),p=Math.floor(v),x=Math.floor(m),y=l[p+x*10],_=l[p+1+x*10],R=l[p+(x+1)*10],T=l[p+1+(x+1)*10];return gt.lerp(gt.lerp(y,_,v-p),gt.lerp(R,T,v-p),m-x)};n.updateMatrixWorld(!0);let u=n.matrixWorld.clone().invert(),f=new A;n.traverse(d=>{if(!d.isMesh)return;let g=new Ke().multiplyMatrices(u,d.matrixWorld),v=g.clone().invert();d.geometry=d.geometry.clone();let m=d.geometry.attributes.position;for(let p=0;p<m.count;p++)f.fromBufferAttribute(m,p).applyMatrix4(g),f.z+=h(f.x,f.y)-n.position.z+.012,f.applyMatrix4(v),m.setXYZ(p,f.x,f.y,f.z);m.needsUpdate=!0,d.geometry.computeVertexNormals(),d.geometry.computeBoundingSphere(),d.castShadow=!1}),n.userData.conformed=!0}function Op(n,{y:e,z:t,x:i=.22,size:s=.13,human:r=!1}){let a=[],o=[];for(let c of[-1,1]){let l=new xe;l.position.set(c*i,e,t),n.add(l),Le(l,r?"#fff8e7":"#a1b762",[0,0,0],[s,s*1.15,.044]),Le(l,r?"#64412d":"#7c9d42",[0,-.008,.032],[s*.7,s*.9,.025]),Le(l,"#201f18",[0,-.005,.05],[s*.42,s*.7,.017]),Le(l,"#fffdeb",[-.026,.035,.066],[.017,.022,.008]),a.push(l);let h=Qe(n,"#62432d",[[c*i-s,e,t+.06],[c*i,e+.045,t+.08],[c*i+s,e,t+.06]],.014);h.visible=!1,o.push(h),r&&Qe(n,"#523326",[[c*i-s,e+.17,t-.02],[c*i,e+.21,t],[c*i+s,e+.17,t-.02]],.018)}return{eyes:a,lids:o}}function zp(){let n=new xe,e=new xe;n.name="naidan",n.add(e),e.name="body";let t=new sn([[0,.07],[.52,.16],[.88,.48],[1.02,.94],[.98,1.45],[.7,1.88],[.35,2.06],[0,2.1]].map(c=>new ne(...c))).getPoints(100),i=new rn(t,112);i.scale(1,1,.91),Fe(e,i,new wt({color:"#f5d052",roughness:.4,clearcoat:.25}));let{eyes:s,lids:r}=Op(e,{y:1.03,z:.91,x:.29,size:.12}),a=Qe(e,"#665022",[[-.16,.8,.91],[0,.785,.94],[.16,.8,.91]],.016),o=Fn(e,{y:.81,z:.95,width:.27,height:.3});return n.userData={id:"naidan",body:e,arms:[],legs:[],eyeParts:s,lids:r,mouth:a,laughMouth:o,vehicleId:0,egg:!0},n}function Hp(){let n=new xe,e=new xe;n.name="naicha",n.add(e),e.name="body";let t=[],i=[],s=new wt({color:"#d8b873",roughness:.35,clearcoat:.34,clearcoatRoughness:.35}),r=Tt("#f5e9bf",.38),a=Tt("#e3be54",.58),o=Tt("#494738",.78),c=[[0,.53],[.43,.53],[.55,.59],[.63,.84],[.69,1.25],[.73,1.96],[.72,2.08],[.66,2.09],[.64,1.99],[.61,.86],[.46,.7],[0,.7]].map(p=>new ne(...p)),l=Fe(e,new rn(new sn(c).getPoints(150),112),s);l.name="tea-cup";let h=Fe(e,new oi(.69,.036,16,96),r,[0,2.06,0]);h.rotation.x=Math.PI/2,h.name="cup-rim";let u=Fe(e,new nn(.648,.648,.025,96),Tt("#8e5b32",.28),[0,2.008,0]);u.name="tea-surface";for(let[p,x,y]of[[-.25,.15,.045],[.2,-.1,.035],[-.1,-.26,.055],[.28,.24,.035]])Le(e,"#e5c28c",[p,2.028,x],[y,.01,y]);let f=Fe(e,new oi(.38,.105,20,80),s,[.8,1.5,-.015],[.85,1.17,1]);f.name="cup-handle",Le(e,s,[.66,1.91,-.015],[.13,.14,.13]),Le(e,s,[.64,1.07,-.015],[.13,.14,.13]);let{eyes:d,lids:g}=Op(e,{y:1.79,z:.66,x:.23,size:.09});for(let p of[-1,1]){let x=Qe(e,"#55472c",[[p*.23-.085,1.96,.66],[p*.23,1.99,.68],[p*.23+.085,1.96,.66]],.017);x.name="tea-brow"}let v=Qe(e,"#64482c",[[-.2,1.5,.66],[0,1.45,.71],[.2,1.5,.66]],.015),m=Fn(e,{y:1.53,z:.73,width:.28,height:.34});for(let p of[-1,1]){let x=new xe;x.position.set(p*.62,1.38,.1),e.add(x);let y=cs([[p*.08,-.1,.015,.145,.24,.15],[p*.17,-.29,.09,.14,.2,.15]],{min:[-.37,-.56,-.22],max:[.37,.2,.34],steps:[22,30,24],blend:.13});Fe(x,y,a),Le(x,o,[p*.16,-.4,.18],[.15,.16,.12]);for(let T=0;T<3;T++)Le(x,o,[p*.16+(T-1)*.066,-.46,.24],[.045,.07,.055]);t.push(x);let _=new xe;_.position.set(p*.28,.47,0),e.add(_),Le(_,a,[0,-.12,0],[.15,.27,.17]);let R=Fe(_,new Zt(1,40,28),o,[0,-.36,.06],[.2,.13,.26]);R.name="tea-boot",i.push(_)}return n.userData={id:"naicha",body:e,arms:t,legs:i,eyeParts:d,lids:g,mouth:v,laughMouth:m,vehicleId:0,mug:!0},n}var hs;function y1(){if(hs)return hs.clone();let n=64,e=40,t=[],i=[];for(let o=0;o<n;o++){let c=o/n,l=new A(.32*Math.sin(c*Math.PI/2),-.66*c,.2*c*c-.04*Math.sin(Math.PI*c)),h=new A(1,0,0),u=Math.sqrt(1-c*c),f=(.12+.15*Math.sin(Math.PI*c))*u,d=.065*u;for(let g=0;g<e;g++){let v=g/e*Math.PI*2,m=Math.cos(v),p=Math.sin(v),x=.04*Math.sin(Math.PI*c)*(m*m-.3),y=.018*Math.exp(-(((m+.15)/.18)**2))*Math.max(0,p)*Math.exp(-(((c-.32)/.22)**2)),_=l.clone().addScaledVector(h,m*f);t.push(_.x,_.y,_.z+p*d+x-y)}}for(let o=0;o<n-1;o++)for(let c=0;c<e;c++){let l=o*e+c,h=(o+1)*e+c,u=o*e+(c+1)%e,f=(o+1)*e+(c+1)%e;i.push(l,u,h,u,f,h)}let s=t.length/3;t.push(0,0,0);let r=t.length/3,a=new A(.32,-.66,.2);t.push(a.x,a.y,a.z);for(let o=0;o<e;o++){let c=(o+1)%e;i.push(s,c,o,r,(n-1)*e+o,(n-1)*e+c)}return hs=new tt,hs.setAttribute("position",new Pe(t,3)),hs.setIndex(i),hs.computeVertexNormals(),hs.computeBoundingSphere(),hs.clone()}function Vp(n,e,t=1){let i=Fe(n,y1(),e);return i.name="folded-ear",i.scale.x=t,i}function Sc(n,e,t,{radius:i=.1,taper:s=.3,tipRoundness:r=4}={}){let a=new A(...t[0]),o=new Qn(t.map(x=>new A(...x).sub(a))),c=72,l=32,h=o.computeFrenetFrames(c,!1),u=[],f=[];for(let x=0;x<c;x++){let y=x/c,_=o.getPointAt(y),R=i*(1-s*y)*Math.sqrt(1-y**r);for(let T=0;T<l;T++){let L=T/l*Math.PI*2,U=_.clone().addScaledVector(h.normals[x],Math.cos(L)*R).addScaledVector(h.binormals[x],Math.sin(L)*R);u.push(U.x,U.y,U.z)}}for(let x=0;x<c-1;x++)for(let y=0;y<l;y++){let _=x*l+y,R=(x+1)*l+y,T=x*l+(y+1)%l,L=(x+1)*l+(y+1)%l;f.push(_,T,R,T,L,R)}let d=u.length/3;u.push(0,0,0);let g=u.length/3,v=o.getPointAt(1);u.push(v.x,v.y,v.z);for(let x=0;x<l;x++){let y=(x+1)%l;f.push(d,y,x,g,(c-1)*l+x,(c-1)*l+y)}let m=new tt;m.setAttribute("position",new Pe(u,3)),m.setIndex(f),m.computeVertexNormals(),m.computeBoundingSphere();let p=new xe;return p.name="tail",p.position.copy(a),p.userData.dynamic=!0,Fe(p,m,e).name="continuous-tail",n.add(p),p}var Gp,$p,Wp=[[0,1.05,-.15,.62,.68,.95],[0,1.48,.48,.57,.8,.6],[0,1.94,.57,.49,.51,.49]],Xp={min:[-.85,.25,-1.22],max:[.85,2.55,1.18],steps:[88,112,104],blend:.18};function _1(n,e,t){return Math.max((Math.hypot(n/.31,(e-1.6265)/.252)-1)*.252,.75-t)}function qp(){let n=new xe,e=new xe;n.name="naigou",n.add(e);let t=Tt("#f1cc58",.63),i=Tt("#897247"),s=Tt("#f0e4c4"),r=Tt("#392820");Gp??=cs(Wp,{...Xp,cutField:_1}),$p??=cs(Wp,Xp);let a=Gp.clone(),o=a.attributes.position,c=[];for(let m=0;m<o.count;m++){let p=o.getX(m),x=o.getY(m),y=o.getZ(m),_=Math.max(0,Math.min(1,(1-(p/.36)**2-((x-.95)/.35)**2)*5))*Math.max(0,Math.min(1,(y-.7)/.2)),R=new Se("#f1cc58").lerp(new Se("#f0e4c4"),_);c.push(R.r,R.g,R.b)}a.setAttribute("color",new Pe(c,3));let l=Fe(e,a,new yt({vertexColors:!0,roughness:.63}));l.name="canine-torso";let h=[];for(let[m,p]of[[-.43,.55],[.43,.55],[-.43,-.68],[.43,-.68]]){let x=new xe;x.position.set(m,.72,p),e.add(x);let y=cs([[0,-.2,0,.22,.45,.24],[0,-.54,.09,.23,.18,.27],...[-1,0,1].map(T=>[T*.13,-.58,.33,.085,.11,.145])],{min:[-.37,-.78,-.32],max:[.37,.3,.56],steps:[36,48,40],blend:.075}),_=[],R=y.attributes.position;for(let T=0;T<R.count;T++){let L=new Se("#f1cc58").lerp(new Se("#897247"),Math.max(0,Math.min(1,(-R.getY(T)-.39)/.13)));_.push(L.r,L.g,L.b)}y.setAttribute("color",new Pe(_,3)),Fe(x,y,new yt({vertexColors:!0,roughness:.62})),h.push(x)}let u=[];for(let m of[-1,1]){let p=new xe;p.position.set(m*.28,2.32,.52),p.rotation.z=m*.1,p.rotation.y=m*.5,e.add(p),Vp(p,i,m),u.push(p)}let f=Sc(e,t,[[0,1,-.91],[.08,1.23,-1.08],[.14,1.6,-1.15],[.08,1.94,-1.1],[0,2.1,-1.06]],{radius:.13,taper:.3}),d=new lt($p);d.updateMatrixWorld(!0);let g=(m,p)=>new Wi(new A(m,p,2.5),new A(0,0,-1)).intersectObject(d)[0]?.point.z||1;for(let m of[-1,1]){let p=Qe(e,r,Array.from({length:7},(x,y)=>{let _=m*.235-.115+y*.23/6,R=2.03+Math.sin(y/6*Math.PI)*.055;return[_,R,g(_,R)+.014]}),.018);p.castShadow=!1}let v=Fn(e,{y:1.82,z:1.065,width:.31,height:.45,sculpted:!0,lipRadius:.018,lipColor:"#dfb94c",archedTeeth:!0});return v.getObjectByName("upper-teeth").position.z=-.035,v.userData.jaw.position.z=-.045,v.userData.fixedAperture=!0,Mc(v,g,{width:.35,height:.45,cacheKey:"naigou"}),v.visible=!0,n.userData={id:"naigou",body:e,arms:[],legs:h,lids:[],laughMouth:v,mouth:null,tail:f,ears:u,canine:!0,vehicleId:0},n}var Hu=new Map;function b1(n){if(Hu.has(n))return Hu.get(n).clone();let e=[],t=[],i=[],s=128,r=16,a=new Se(n),o=a.clone().multiplyScalar(.7),c=a.clone().lerp(new Se("#e2e6a6"),.2);for(let h=0;h<=r;h++){let u=h/r,f=gt.lerp(.064,.109,u),d=gt.lerp(.084,.129,u);for(let g=0;g<=s;g++){let v=g/s*Math.PI*2,m=.017+.026*Math.pow(1-u,.65);e.push(Math.cos(v)*f,Math.sin(v)*d,m);let p=(Math.sin(v*41+Math.sin(v*13)*.5)+Math.sin(v*59+u*4))*.017,x=c.clone().lerp(a,gt.smoothstep(u,.05,.7)).lerp(o,gt.smoothstep(u,.78,1)*.7).multiplyScalar(1+p);t.push(x.r,x.g,x.b)}}for(let h=0;h<r;h++)for(let u=0;u<s;u++){let f=h*(s+1)+u;i.push(f,f+s+1,f+1,f+1,f+s+1,f+s+2)}let l=new tt;return l.setAttribute("position",new Pe(e,3)),l.setAttribute("color",new Pe(t,3)),l.setIndex(i),l.computeVertexNormals(),l.computeBoundingSphere(),Hu.set(n,l),l.clone()}function Yp(n="#93b54a"){let e=new xe;e.name="reference-eye";let t=Le(e,new wt({color:n,roughness:.4,clearcoat:.25}),[0,0,.008],[.112,.132,.039]);t.name="eye-base";let i=Fe(e,b1(n),new wt({vertexColors:!0,roughness:.32,clearcoat:.35,clearcoatRoughness:.25}));i.name="curved-iris";let s=Le(e,Tt("#152019",.12),[0,-.002,.043],[.064,.084,.011]);s.name="eye-pupil";let r=Le(e,new wt({color:"#e9f3de",transparent:!0,opacity:.1,depthWrite:!1,roughness:.035,metalness:.02,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.8}),[0,0,.012],[.114,.134,.053]);r.name="cornea";let a=new kt({color:"#fff8df",toneMapped:!1});for(let[o,c,l]of[[-.021,.032,1],[.025,-.034,.34]]){let h=.012+.053*Math.sqrt(1-(o/.114)**2-(c/.134)**2)+.002,u=Le(e,a,[o,c,h],[.011*l,.014*l,.003]);u.name="eye-catchlight"}return e.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),e.userData.detailedEye=!0,e}var Vu=new Map;function Ec(n,e,t){return Vu.has(n)||Vu.set(n,cs(e,t)),Vu.get(n).clone()}function Gu(n,e,t,{belly:i=!1}={}){let s=n.attributes.position,r=[],a=new Se,o=new Se(e),c=new Se(t);for(let l=0;l<s.count;l++){let h=s.getX(l),u=s.getY(l),f=s.getZ(l),d=i?Math.max(0,Math.min(1,(1-(h/.6)**2-((u-1.15)/.7)**2)*5))*Math.max(0,Math.min(1,(f-.1)/.38))*.92:Math.max(0,Math.min(1,(-u-.62)/.2));a.copy(o).lerp(c,d),r.push(a.r,a.g,a.b)}return n.setAttribute("color",new Pe(r,3)),n}function Zp(n){let e=n==="naishu",t=new xe,i=new xe;t.name=n,t.add(i),i.name="body";let s=e?"#f8d958":"#f5ce20",r=Tt(s,.66),a=Tt("#403620"),o=[],c=[],l=[],h=[],u=[],f=e?[[0,1.12,0,.78,.88,.61],[0,1.72,0,.56,.68,.43],[0,2.14,.01,.47,.44,.38]]:[[0,1.32,0,.82,.94,.64],[0,1.99,0,.56,.76,.43],[0,2.48,0,.47,.48,.38]],d=Ec(n+"-body",f,{min:[-.92,.25,-.67],max:[.92,3.08,.68],steps:[80,112,72],blend:.25}),g=Fe(i,Gu(d,s,e?"#ffe77c":"#f6e7b3",{belly:!0}),new wt({vertexColors:!0,roughness:.43,clearcoat:.22,clearcoatRoughness:.4,envMapIntensity:.45}));for(let O of[-1,1]){let z=new xe;z.position.set(O*(e?.59:.63),e?1.7:1.88,.16),i.add(z);let ee=Ec(n+"-arm-"+O,[[O*.075,-.19,0,.19,.36,.19],[O*.17,-.48,.04,.17,.32,.17],[O*.16,-.73,.07,.145,.19,.135]],{min:[-.4,-.97,-.24],max:[.4,.25,.32],steps:[36,58,34],blend:.1}),H=Fe(z,Gu(ee,s,e?"#d5aa4c":"#9c791c"),new yt({vertexColors:!0,roughness:.7})),te=[];for(let we=0;we<3;we++){let Oe=Le(z,e?"#e9c34b":"#96701b",[O*.16+(we-1)*.08,-.86,.09],[.049,.105,.063]);te.push({node:Oe,rest:Oe.position.clone()})}z.userData={side:O,mesh:H,rest:new Float32Array(ee.attributes.position.array),restNormals:new Float32Array(ee.attributes.normal.array),fingers:te,bent:!1},o.push(z);let ae=new xe;ae.position.set(O*.32,e?.43:.59,0),i.add(ae);let he=Ec(n+"-leg",e?[[0,-.08,0,.24,.32,.25],[0,-.29,.075,.23,.14,.29]]:[[0,-.06,0,.25,.36,.26],[0,-.31,.02,.17,.28,.2],[0,-.48,.12,.25,.105,.3],...[-1,0,1].map(we=>[we*.16,-.49,.39,.092,.085,.195])],{min:[-.34,-.62,-.34],max:[.34,.4,.7],steps:e?[24,38,36]:[36,50,52],blend:.09});if(!e){let we=he.attributes.position,Oe=[];for(let We=0;We<we.count;We++){let Ze=gt.smoothstep(we.getZ(We),.18,.47)*gt.smoothstep(-we.getY(We),.32,.48)*.85,J=new Se(s).lerp(new Se("#a38027"),Ze);Oe.push(J.r,J.g,J.b)}he.setAttribute("color",new Pe(Oe,3))}Fe(ae,he,e?r:new wt({vertexColors:!0,roughness:.55,clearcoat:.1})),c.push(ae)}g.updateMatrixWorld(!0);let v=(O,z)=>new Wi(new A(O,z,2),new A(0,0,-1)).intersectObject(g)[0]?.point.z||.4,m=e?2.26:2.59,p=e?.33:.31,x=e?.215:.225;for(let O of[-1,1]){let z=Yp(e?"#c7d58c":"#93b54a");z.position.set(O*x,m,v(O*x,m)+.004),z.rotation.y=O*.18,i.add(z),h.push(z);let ee=Qe(i,"#51452b",Array.from({length:7},(H,te)=>{let ae=O*x-.105+te*.21/6,he=m-.015+Math.sin(te/6*Math.PI)*.065;return[ae,he,v(ae,he)+.018]}),.014);ee.visible=!1,l.push(ee)}let y=e?2.025:2.345,_=e?.425:.42,R=Qe(i,"#715321",[[-.18,y,v(-.18,y)+.014],[0,y-.012,v(0,y-.012)+.014],[.18,y,v(.18,y)+.014]],.009),T=Fn(i,{y:y+.015,z:Math.max(v(0,y),v(0,y-.4))+.035,width:e?.29:.3,height:e?.4:.46,sculpted:!0}),L=null;if(e){for(let O of[-1,1]){let z=new xe;z.position.set(O*.56,2.57,-.03),z.rotation.z=-O*.13,z.rotation.y=O*.12,i.add(z),Le(z,r,[O*.07,.12,0],[.45,.47,.17]),Le(z,"#edbd78",[O*.07,.12,.105],[.355,.375,.045]),Le(z,"#f4ce92",[O*.07,.1,.13],[.295,.315,.022]),u.push(z)}L=Sc(i,r,[[0,.53,-.35],[.3,.31,-.75],[.76,.28,-.88],[1.1,.42,-.88],[1.32,.42,-.77]],{radius:.055,taper:.55,tipRoundness:8})}let U=e?.4:.46,S=e?.29:.3,M=y+.015-U*.43,D=v(0,M),k=Ec(n+"-open-mouth",f,{min:[-.92,.25,-.67],max:[.92,3.08,.68],steps:[80,112,72],blend:.25,cuts:[[0,M,D-.025,S*1.01,U*.58,.27]]}),X=Fe(i,Gu(k,s,e?"#ffe77c":"#f6e7b3",{belly:!0}),g.material);X.visible=!1,Mc(T,v,{cacheKey:n,width:e?.33:.34,height:U});for(let O of l)O.castShadow=!1;let W=new xe;W.name="torso-pivot",W.position.y=.65;for(let O of[...i.children])c.includes(O)||(O.position.y-=.65,W.add(O));return i.add(W),t.userData={id:n,body:i,torsoPivot:W,torsoMesh:g,laughTorsoMesh:X,arms:o,legs:c,lids:l,eyeParts:h,ears:u,tail:L,mouth:R,laughMouth:T,vehicleId:0,referenceSculpt:!0},t}var Bn=new wt({color:"#e9be38",roughness:.48,metalness:0,clearcoat:.22,clearcoatRoughness:.5}),M1=new wt({color:"#df4a25",roughness:.48,clearcoat:.2});function jp(n,e,t,i=.79){let s=new sn(e.map(a=>new ne(...a))).getPoints(120),r=new rn(s.map(a=>new ne(Math.max(0,a.x),a.y)),112);return r.scale(1,1,i),r.computeVertexNormals(),Fe(n,r,t)}function Jp(n,{y:e=2.02,z:t=.38,x:i=.245,size:s=.145,parts:r=null}={}){let a=[];for(let o of[-1,1]){let c=new xe;c.position.set(o*i,e,t),c.rotation.y=o*.15,n.add(c),r?.push(c),Le(c,"#b9bd82",[0,0,.014],[s,s*1.08,s*.48]),Le(c,"#758349",[0,-.004,.064],[s*.7,s*.85,.028]),Le(c,"#182c23",[0,-.006,.088],[s*.43,s*.6,.021]),Le(c,"#fff7cf",[-.025,.042,.109],[.018,.021,.008]);let l=Qe(c,"#d1a62d",[[-s*.97,0,.01],[-s*.75,s*.85,.022],[0,s*1.09,.03],[s*.75,s*.85,.022],[s*.97,0,.01]],.019);a.push(l);let h=Le(c,Bn,[0,0,.08],[s*1.05,.001,.07]);h.visible=!1,h.name="eyelid",h.userData.closedY=s*1.08,a.push(h);let u=Qe(c,"#5d4128",[[-s*.9,0,.16],[0,.04,.18],[s*.9,0,.16]],.012);u.name="closed-eye",u.visible=!1,a.push(u)}return a}function Ur(n){if(n==="naidan")return zp();if(n==="naicha")return Hp();if(n==="naigou")return qp();if(n==="naiwa"||n==="naishu")return Zp(n);let e=new xe;e.name=n;let t=new xe;e.add(t),t.name="body";let i=[],s=[],r,a=[],o=[];if(n==="naichong"){let l=jp(t,[[0,.08],[.43,.12],[.72,.4],[.82,.78],[.77,1.2],[.65,1.63],[.52,1.9],[.32,2.04],[0,2.1]],M1,.92),h=[],u=l.geometry.attributes.position;for(let d=0;d<u.count;d++){let g=u.getY(d),v=u.getX(d),m=u.getZ(d),p=Math.max(...[.35,.65,.95].map(_=>Math.max(0,Math.min(1,(.078-Math.abs(g-_))/.025)))),x=Math.max(0,Math.min(1,(1-(v/.53)**2-((g-1.49)/.44)**2)*7))*Math.max(0,Math.min(1,(m-.25)/.12)),y=new Se("#e9522c").lerp(new Se("#f6d35c"),Math.max(p,x));h.push(y.r,y.g,y.b)}l.geometry.setAttribute("color",new Pe(h,3)),l.material=new wt({vertexColors:!0,roughness:.5,clearcoat:.18}),Jp(t,{y:1.63,z:.52,x:.22,size:.095,parts:o});for(let d of[-1,1]){let g=Qe(t,"#4e3623",[[d*.22-.11,1.63,.65],[d*.22,1.67,.67],[d*.22+.11,1.63,.65]],.014);g.visible=!1,a.push(g)}l.updateMatrixWorld(!0);let f=(d,g)=>new Wi(new A(d,g,2),new A(0,0,-1)).intersectObject(l)[0]?.point.z||.6;r=Qe(t,"#735323",[[-.19,1.36,f(-.19,1.36)+.015],[0,1.34,f(0,1.34)+.015],[.19,1.36,f(.19,1.36)+.015]],.013);for(let d of[-1,0,1])Qe(t,"#da4727",[[d*.045,1.97,0],[d*.09,2.13,.01],[d*.15,2.23,.035]],.035)}else{jp(t,[[0,.19],[.4,.18],[.67,.35],[.82,.75],[.83,1.1],[.73,1.48],[.58,1.84],[.52,2.13],[.43,2.36],[.24,2.46],[0,2.47]],Bn),a=Jp(t,{y:2.12,z:.344,x:.246,size:.141}),Le(t,Bn,[0,1.98,.405],[.16,.09,.052]),r=Qe(t,"#735124",[[-.205,1.9,.405],[-.1,1.875,.433],[0,1.87,.445],[.1,1.875,.433],[.205,1.9,.405]],.012);for(let l of[-1,1]){let h=new xe;h.position.set(l*.63,1.48,.02),t.add(h),h.name=l<0?"arm.L":"arm.R";let u=Le(h,Bn,[l*.14,-.3,.02],[.17,.43,.165]);u.rotation.z=l*.24,Le(h,Bn,[l*.21,-.62,.1],[.17,.16,.17]);for(let d=0;d<3;d++)Le(h,Bn,[l*.2+(d-1)*.065,-.66,.2],[.038,.07,.045]);i.push(h);let f=new xe;f.position.set(l*.34,.26,0),t.add(f),f.name=l<0?"leg.L":"leg.R",Le(f,Bn,[0,-.13,.11],[.245,.22,.32]),s.push(f)}if(n==="naishu"){for(let h of[-1,1]){let u=new xe;u.position.set(h*.57,2.46,-.035),u.rotation.z=-h*.18,u.rotation.y=h*.13,t.add(u),Le(u,Bn,[h*.05,.1,0],[.38,.44,.115]),Le(u,"#c88d48",[h*.05,.1,.091],[.278,.335,.035]),Le(u,"#e6b966",[h*.05,.05,.113],[.22,.27,.015])}let l=Qe(t,Bn,[[0,.39,-.48],[.42,.16,-.8],[.88,.08,-.9],[1.23,.08,-.71],[1.32,.1,-.45]],.046);l.name="tail"}else Qe(t,"#d0a52e",[[-.15,.57,-.61],[0,.46,-.67],[.15,.57,-.61]],.02)}let c=Fn(t,{y:1.36,z:.69,width:.27,height:.29});return e.userData={body:t,arms:i,legs:s,mouth:r,laughMouth:c,lids:a,eyeParts:o.length?o:null,id:n,vehicleId:0},e}function S1(n,e){let t=n.userData;if(!t?.rest||t.bent===e)return;t.bent=e;let i=e?-.55:0,s=Math.cos(i),r=Math.sin(i),a=t.mesh.geometry.attributes.position,o=(c,l,h)=>{if(e&&l<-.62){let m=Math.max(0,Math.min(1,(-l-.62)/.24)),p=-t.side*.75*m*m*(3-2*m),x=t.side*.16,y=-.68,_=c-x,R=l-y;c=x+_*Math.cos(p)-R*Math.sin(p),l=y+_*Math.sin(p)+R*Math.cos(p)}if(l>-.22)return[c,l,h];let u=Math.max(0,Math.min(1,(-l-.22)/.4)),f=i*u*u*(3-2*u),d=Math.cos(f),g=Math.sin(f),v=l+.22;return[c,-.22+v*d-h*g,v*g+h*d]};for(let c=0;c<a.count;c++)a.setXYZ(c,...o(t.rest[c*3],t.rest[c*3+1],t.rest[c*3+2]));if(a.needsUpdate=!0,e){let c=t.mesh.geometry.attributes.normal,l=new Ye,h=new A,u=1e-4;for(let f=0;f<a.count;f++){let d=t.rest[f*3],g=t.rest[f*3+1],v=t.rest[f*3+2],m=o(d,g,v),p=o(d+u,g,v),x=o(d,g+u,v),y=o(d,g,v+u);l.set((p[0]-m[0])/u,(x[0]-m[0])/u,(y[0]-m[0])/u,(p[1]-m[1])/u,(x[1]-m[1])/u,(y[1]-m[1])/u,(p[2]-m[2])/u,(x[2]-m[2])/u,(y[2]-m[2])/u).invert().transpose(),h.fromArray(t.restNormals,f*3).applyMatrix3(l).normalize(),c.setXYZ(f,h.x,h.y,h.z)}c.needsUpdate=!0}else t.mesh.geometry.attributes.normal.array.set(t.restNormals),t.mesh.geometry.attributes.normal.needsUpdate=!0;for(let c of t.fingers)c.node.position.set(...o(c.rest.x,c.rest.y,c.rest.z))}function $s(n,{time:e,moving:t=!1,mood:i=null,alive:s=!0}){let r=n.userData;if(!r?.body)return;let o=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches?0:1,c=i==="happy",l=Math.sin(e*12),h=Math.sin(e*2.2),u=c?(r.torsoPivot?.1+.44*((1+Math.sin(e*1.65))*.5)**2:.11+Math.sin(e*3.8)*.12)*o:0;r.torsoMesh&&(r.torsoMesh.visible=!c,r.laughTorsoMesh.visible=c),r.body.rotation.z=o*Math.sin(e*(t?11:c?6:1.8))*(t?.025:c?.035:.006),r.body.rotation.x=c?u*(r.torsoPivot?.08:1):i==="sad"?.12:0,r.torsoPivot&&(r.torsoPivot.rotation.x=c?u*.92:0),r.body.scale.set(1,1+(c?l*.025:h*.006)*o,1+(c?l*.012:0)*o),r.arms.forEach((d,g)=>{S1(d,c),d.rotation.x=c?-.54+l*.055*o:t?Math.sin(e*11+g*Math.PI)*.4*o:0,d.rotation.z=c?g?-.42:.42:0,d.rotation.y=c?g?-.32:.32:0}),r.legs.forEach((d,g)=>d.rotation.x=t?Math.sin(e*11+g*Math.PI)*.28*o:c?-.06:0);let f=!c&&Math.sin(e*.63+n.id%7)>.997;if(r.eyeParts)r.eyeParts.forEach(d=>d.visible=!c&&!f),r.lids.forEach(d=>d.visible=c||f);else for(let d of r.lids)d.name==="eyelid"?(d.visible=c||f,d.scale.y=c||f?d.userData.closedY:.001):d.name==="closed-eye"&&(d.visible=c||f);r.canine?(r.tail.rotation.z=Math.sin(e*(t?9:3))*.08*o,r.ears.forEach((d,g)=>d.rotation.x=Math.sin(e*7+g)*.06*o),r.legs.forEach((d,g)=>d.rotation.x=t?Math.sin(e*11+[0,Math.PI,Math.PI,0][g])*.34*o:0),r.laughMouth.visible=!0,zu(r.laughMouth,e,o)):r.tail&&(r.tail.rotation.y=Math.sin(e*2)*.05*o),r.egg&&(r.body.position.y=(r.vehicleId?.3:0)+(t?Math.abs(Math.sin(e*9))*.14*o:0)),r.laughMouth&&!r.canine&&(r.laughMouth.visible=c,zu(r.laughMouth,e,o),r.mouth&&(r.mouth.visible=!c))}function Kp(n){let e=new xe;if(e.name="vehicle",n===1){for(let t of[-.6,.6]){let i=Fe(e,new oi(.32,.045,8,24),"#344b51",[0,.25,t]);i.rotation.y=Math.PI/2;for(let s=0;s<6;s++){let r=Qe(e,"#b9c7c5",[[0,.25,t],[0,.25+Math.cos(s*Math.PI/3)*.29,t+Math.sin(s*Math.PI/3)*.29]],.009)}}Qe(e,"#4e9fa8",[[0,.25,-.6],[0,.65,0],[0,.25,.6],[0,.25,-.6]],.04),Qe(e,"#4e9fa8",[[0,.25,.6],[0,.86,.5],[0,.9,.7]],.04),q(e,"#344b51",[0,.73,0],[.3,.06,.28])}else{q(e,"#e8b744",[0,.3,0],[1.3,.45,1.7]),q(e,"#f0e1b4",[0,.63,-.1],[1,.45,1]),q(e,"#4d8c9c",[0,.7,.41],[.8,.27,.02]);for(let t of[-.65,.65])for(let i of[-.5,.5])Le(e,"#34464e",[t,.2,i],[.14,.25,.25]);q(e,"#ead18f",[0,.92,-.1],[.6,.1,.6]);for(let t of[-.4,.4])Le(e,"#fff4bd",[t,.35,.87],[.13,.12,.03]);q(e,"#7b8b88",[0,.18,.87],[1.1,.1,.08])}return e}var $u=new Map,fn,Qp=!1;function em(n,e=null,t=!1){let i=t?`${n}:event:${e||"idle"}`:n;if($u.has(i))return $u.get(i);if(Qp||typeof window>"u")return null;let s;try{fn||(fn=new rs({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),fn.setPixelRatio(1),fn.outputColorSpace=It,fn.toneMapping=ln,fn.toneMappingExposure=1.05),fn.setSize(t?320:192,t?320:192);let r=new Vi;s=Ur(n),t&&$s(s,{time:.5,mood:e}),s.rotation.y=-.13,r.add(s),r.add(new Ln("#fff2d8","#a5b09b",1.8));for(let[f,d,g,v,m]of[[-3,5,7,"#fff4df",3.2],[4,3,-3,"#b5d7f6",2]]){let p=new an(v,m);p.position.set(f,d,g),r.add(p)}let a=new Et().setFromObject(s),o=a.max.y-a.min.y,c=a.min.y+o*(t?.5:.72),l=t?Math.max(o*.58,(a.max.x-a.min.x)*.58):o*.33,h=new Ei(-l,l,l,-l,.1,30);h.position.set(.2,c+.12,7),h.lookAt(0,c,0),fn.setClearColor("#000000",0),fn.render(r,h);let u=fn.domElement.toDataURL("image/png");return $u.set(i,u),u}catch{return Qp=!0,null}finally{s&&hi(s)}}var wc=n=>em(n),Tc=(n,e)=>em(n,e,!0);var Wu=0;function _t(n){let e=wc(n);if(e)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><image href="${e}" width="80" height="80"/></svg>`;if(n==="naidan")return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true"><defs><radialGradient id="egg-${++Wu}"><stop stop-color="#fff3a7"/><stop offset="1" stop-color="#e5b939"/></radialGradient></defs><path d="M40 8C20 8 7 23 7 43C7 84 73 84 73 43C73 23 60 8 40 8Z" fill="url(#egg-${Wu})"/><ellipse cx="26" cy="43" rx="7" ry="9" fill="#a7ba62"/><ellipse cx="54" cy="43" rx="7" ry="9" fill="#a7ba62"/><ellipse cx="26" cy="43" rx="4" ry="6" fill="#27311d"/><ellipse cx="54" cy="43" rx="4" ry="6" fill="#27311d"/><path d="M30 59q10-2 20 0" stroke="#6b5226" stroke-width="2" fill="none"/></svg>`;if(n==="naicha")return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true"><path d="M57 23C84 13 84 61 58 55" stroke="#c7a35c" stroke-width="8" fill="none"/><path d="M13 16H62L58 58Q54 72 37 72Q20 72 17 58Z" fill="#d9b773"/><ellipse cx="37.5" cy="16" rx="24.5" ry="7" fill="#f3e5ba"/><ellipse cx="37.5" cy="16" rx="21" ry="4.5" fill="#885832"/><path d="M24 32q5-5 10 0M43 32q5-5 10 0" stroke="#51442d" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M24 40Q37 43 51 40Q49 59 38 60Q27 59 24 40Z" fill="#362419"/><path d="M28 42q10 4 20 0M32 55q6 3 12 0" stroke="#fff5d9" stroke-width="3" fill="none"/><path d="M14 46l-5 8M61 45l5 9M26 70v5M49 70v5" stroke="#57513d" stroke-width="7" stroke-linecap="round"/></svg>';let t="portrait-"+ ++Wu,i=n==="naishu",s=n==="naichong",r=n==="naigou",a=s?"#ee6d35":i?"#f8dd64":"#f8d437",o=i?'<ellipse cx="16" cy="18" rx="15" ry="17" fill="#e6bc42"/><ellipse cx="64" cy="18" rx="15" ry="17" fill="#e6bc42"/><ellipse cx="16" cy="18" rx="11" ry="12" fill="#f1c58a"/><ellipse cx="64" cy="18" rx="11" ry="12" fill="#f1c58a"/>':r?'<path d="M24 15Q9 5 5 26Q6 43 18 34L30 18M56 15Q71 5 75 26Q74 43 62 34L50 18" fill="#8e774c"/>':"",c=`<path d="M23 32C23 10 57 10 57 32C58 42 69 48 67 63C65 80 15 80 13 63C11 48 22 42 23 32Z" fill="url(#${t})"/><path d="M20 54Q17 67 30 72" fill="none" stroke="#fff1ac" stroke-width="3" opacity=".55"/><ellipse cx="40" cy="59" rx="17" ry="15" fill="#fff095" opacity=".65"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><defs><radialGradient id="${t}" cx=".3" cy=".25" r=".85"><stop stop-color="${s?"#ffad52":"#ffef91"}"/><stop offset=".55" stop-color="${a}"/><stop offset="1" stop-color="${s?"#cc4d26":"#d5a82d"}"/></radialGradient></defs><ellipse cx="40" cy="75" rx="24" ry="3" fill="#9d7236" opacity=".14"/>${o}${c}${r?'<path d="M25 31q5-6 10 0M46 31q5-6 10 0" stroke="#493520" stroke-width="2.3" fill="none" stroke-linecap="round"/><path d="M25 42Q40 38 55 42Q53 64 40 65Q27 64 25 42Z" fill="#40291e"/><path d="M29 43Q40 47 51 43M34 59q6 4 12 0" fill="none" stroke="#fff3d5" stroke-width="3.5" stroke-linecap="round"/>':s?'<ellipse cx="40" cy="35" rx="20" ry="18" fill="#ffe382"/><path d="M27 32q5-5 10 0M44 32q5-5 10 0M31 43q9 7 18 0" fill="none" stroke="#66462b" stroke-width="2" stroke-linecap="round"/><path d="M15 56q25 19 50 0M18 67q22 12 44 0" fill="none" stroke="#ffd64e" stroke-width="5"/><path d="M35 17L30 8M44 17l5-9" stroke="#d74d29" stroke-width="3.5" stroke-linecap="round"/>':`<ellipse cx="29" cy="31" rx="6" ry="7.5" fill="${i?"#b8cd85":"#93b747"}"/><ellipse cx="51" cy="31" rx="6" ry="7.5" fill="${i?"#b8cd85":"#93b747"}"/><ellipse cx="29" cy="31" rx="3.4" ry="4.6" fill="#1c291d"/><ellipse cx="51" cy="31" rx="3.4" ry="4.6" fill="#1c291d"/><circle cx="28" cy="29" r="1.2" fill="#fff7dd"/><circle cx="50" cy="29" r="1.2" fill="#fff7dd"/><path d="M29 43q11 ${i?3:0} 22 0" fill="none" stroke="#75511d" stroke-width="1.5" stroke-linecap="round"/>`}</svg>`}var Xu=new Map,us;function Ut(n){let e={tea:'<path d="M53 34h56l-7 61H61Z" fill="#edcf97" stroke="#ae8e58" stroke-width="3"/><ellipse cx="81" cy="34" rx="30" ry="8" fill="#f9eac0"/><path d="M86 16l-5 54" stroke="#6aaa9c" stroke-width="7"/><path d="M62 62h38v25H62Z" fill="#f5e4bc"/><g fill="#7c634a"><circle cx="71" cy="84" r="4"/><circle cx="83" cy="87" r="4"/><circle cx="92" cy="81" r="4"/></g>',theater:'<path d="M33 45h94v51H33Z" fill="#ebd7aa" stroke="#a58b5a" stroke-width="3"/><path d="M24 42l56-26 57 26Z" fill="#ce8063"/><rect x="28" y="46" width="104" height="20" rx="4" fill="#dcaf57"/><path d="M48 69h22v27H48ZM91 69h22v27H91Z" fill="#866c54"/><path d="M45 56h71" stroke="#fff0bb" stroke-width="5" stroke-dasharray="4 8"/>',factory:'<path d="M28 49h103v48H28Z" fill="#dbb082" stroke="#9b805b" stroke-width="3"/><path d="M25 50l35-21 28 21 27-18 25 18Z" fill="#77a0a7"/><path d="M108 41V16h17v31" fill="#bb8063"/><path d="M42 66h21v17H42ZM80 65h40v32H80Z" fill="#668b98"/><circle cx="119" cy="9" r="8" fill="#d7d7bd"/>',steal:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M72 65h20v29H72Z" fill="#956f4a"/><path d="M110 16v55" stroke="#8e744d" stroke-width="4"/><path d="M112 17h30l-8 10 8 10h-30Z" fill="#d98567"/>',dice:'<g transform="translate(45 23) rotate(-12 35 34)"><rect width="70" height="66" rx="15" fill="#fff8dc" stroke="#a87936" stroke-width="4"/><g fill="#d36542"><circle cx="18" cy="17" r="6"/><circle cx="51" cy="17" r="6"/><circle cx="35" cy="33" r="6"/><circle cx="18" cy="50" r="6"/><circle cx="51" cy="50" r="6"/></g></g>',shield:'<path d="M80 14L120 29V55Q115 81 80 99Q45 81 40 55V29Z" fill="#60a7a3" stroke="#376d68" stroke-width="4"/><path d="M80 24L108 35V54Q104 74 80 87Q55 74 52 54V35Z" fill="#99d6bf"/><path d="M63 52l12 13 24-27" fill="none" stroke="#fff4bc" stroke-width="8" stroke-linecap="round"/>',block:'<path d="M38 42V96M122 42V96" stroke="#8d7048" stroke-width="10"/><rect x="23" y="33" width="114" height="34" rx="5" fill="#f5ce64" stroke="#b68b3f" stroke-width="3"/><path d="M38 35l20 30M70 35l20 30M102 35l20 30" stroke="#df7754" stroke-width="11"/>',recover:'<path d="M55 27h50v57q0 12-25 12T55 84Z" fill="#fcf2cf" stroke="#b9a16b" stroke-width="3"/><rect x="58" y="19" width="44" height="15" rx="5" fill="#76ad84"/><rect x="56" y="48" width="48" height="28" rx="4" fill="#a7ce9c"/><path d="M73 62h14M80 55v14" stroke="#fff9d4" stroke-width="5"/>',turn:'<path d="M109 86Q139 38 94 27Q66 21 46 43" fill="none" stroke="#70aaa3" stroke-width="18" stroke-linecap="round"/><path d="M47 16L28 53l43 2Z" fill="#70aaa3"/><circle cx="91" cy="82" r="15" fill="#eab85d"/>',slow:'<ellipse cx="81" cy="67" rx="42" ry="27" fill="#75b48a" stroke="#497b58" stroke-width="3"/><path d="M57 49l24-9 23 11 1 23-24 15-24-13Z" fill="#a0cc8b" stroke="#639968" stroke-width="3"/><circle cx="131" cy="63" r="15" fill="#c7d998"/><circle cx="137" cy="59" r="3" fill="#385547"/><path d="M51 85l-8 9M108 85l8 9" stroke="#78a870" stroke-width="13" stroke-linecap="round"/>',house:'<path d="M39 48h83v46H39Z" fill="#f1dfb0" stroke="#b79a63" stroke-width="3"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M72 65h20v29H72Z" fill="#956f4a"/><path d="M47 61h16v17H47ZM101 61h13v17h-13Z" fill="#77b9ca"/>',bank:'<path d="M28 38L80 12l52 26Z" fill="#e4bb62" stroke="#9c7a45" stroke-width="3"/><path d="M30 92h100M36 42h88M45 45v44M68 45v44M92 45v44M115 45v44" stroke="#f9e8b9" stroke-width="10"/><rect x="25" y="91" width="110" height="11" rx="4" fill="#b7985e"/><circle cx="80" cy="28" r="8" fill="#fff4bf"/>',stocks:'<path d="M26 22v74h111" fill="none" stroke="#ad9467" stroke-width="4"/><path d="M42 89V69M66 89V52M91 89V35M117 89V17" stroke="#72aaa1" stroke-width="16"/><path d="M32 60l32-21 25 6 39-30" fill="none" stroke="#e1aa4b" stroke-width="5"/>',vehicle:'<circle cx="42" cy="79" r="22" fill="#f0dfb7" stroke="#5d7774" stroke-width="6"/><circle cx="117" cy="79" r="22" fill="#f0dfb7" stroke="#5d7774" stroke-width="6"/><path d="M42 79l26-40 24 40H42l20-28h47l8 28M99 26l10 1-2 24M61 34h23" fill="none" stroke="#69a5a3" stroke-width="7" stroke-linecap="round"/>',demolish:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#d78c62"/><path d="M83 51l-11 17 16 6-13 21" fill="none" stroke="#927650" stroke-width="4"/><g transform="rotate(30 91 42)"><rect x="86" y="35" width="13" height="60" rx="4" fill="#a78553"/><rect x="62" y="18" width="61" height="26" rx="6" fill="#8caaaa"/></g>',build:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M78 61v24M66 73h24" stroke="#c09143" stroke-width="7"/><path d="M96 38v-6a16 16 0 0132 0v6" fill="#f1c45f" stroke="#a9863d" stroke-width="3"/><path d="M91 39h43" stroke="#f7d67a" stroke-width="7"/>'};return`<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" class="item-art" aria-hidden="true"><ellipse cx="80" cy="98" rx="55" ry="7" fill="#8c794d" opacity=".12"/>${e[n]||e.house}</svg>`}function pn(n,e,t="naiwa"){return`<div class="illustrated-guide"><div class="guide-drawing">${Ut(n)}</div><div><span class="guide-face">${_t(t)}</span><p>${e}</p></div></div>`}function tm(n,e,t,i,s,r=200){if(Xu.has(n))return Xu.get(n);let a;try{us||(us=new rs({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),us.setPixelRatio(1),us.outputColorSpace=It,us.toneMapping=ln),us.setSize(r,r*.8);let o=new Vi;a=t(),o.add(a),o.add(new Ln("#fff6df","#8a9e9a",2.4));let c=new an("#ffebc1",2.5);c.position.set(-3,6,5),o.add(c);let l=new Et().setFromObject(a),h=l.getCenter(new A),u=l.getSize(new A),f=Math.max(1.6,u.y*.72),d=new Ei(-f*1.25,f*1.25,f,-f,.1,50);d.position.set(h.x+4,h.y+3.3,h.z+5),d.lookAt(h),us.render(o,d);let g=`<img class="building-thumb" src="${us.domElement.toDataURL("image/png")}" alt="${e.name} \xB7 ${i}">`;return Xu.set(n,g),g}catch{return Ut(s)}finally{a&&hi(a)}}function Li(n,e,t="#70a58b"){return tm(`property:${n.name}:${n.group}:${n.buildingType||"legacy"}:${n.id}:${e}:${t}`,n,()=>Gs(n,e,t,!0),e?e+"\u7EA7\u5EFA\u7B51":"\u7A7A\u5730","house")}function Ac(n){let e={bank:"bank",hospital:"recover",stock:"stocks",shop:"vehicle",spirit:"shield",event:"theater",rest:"house",tax:"recover",start:"dice"};return tm(`landmark:${n.id}:${n.kind}:${n.name}`,n,()=>bc(n),"\u516C\u5171\u5EFA\u7B51\u6A21\u578B",e[n.kind]||"house",320)}var Bt=[{id:"naiwa",estateColor:"#45a078",name:"\u5976\u86D9",subtitle:"\u7B11\u4E00\u7B11\uFF0C\u597D\u8FD0\u5230",color:"#f7c945",accent:"#78a84d",style:"\u5747\u8861\u7ECF\u8425",description:"\u5706\u809A\u5B50\u3001\u7EFF\u773C\u775B\uFF0C\u4ECA\u5929\u4E5F\u8981\u6367\u8179\u5927\u7B11\u3002"},{id:"naichong",estateColor:"#d96850",name:"\u5976\u866B",subtitle:"\u6162\u6162\u6765\uFF0C\u4E5F\u4F1A\u53D1\u8D22",color:"#f66b45",accent:"#f6c944",style:"\u7A33\u5065\u50A8\u84C4",description:"\u7EA2\u8272\u8F6F\u58F3\u548C\u91D1\u9EC4\u6761\u7EB9\uFF0C\u5B89\u9759\u5730\u6512\u4E0B\u81EA\u5DF1\u7684\u5C0F\u91D1\u5E93\u3002"},{id:"naishu",estateColor:"#4888ca",name:"\u5976\u9F20",subtitle:"\u597D\u5730\u6BB5\uFF0C\u5148\u5230\u5148\u5F97",color:"#e4b745",accent:"#79b7c2",style:"\u79EF\u6781\u7F6E\u4E1A",description:"\u5927\u8033\u6735\u3001\u7EC6\u5C3E\u5DF4\uFF0C\u5411\u6BCF\u4E00\u4F4D\u5976\u5BB6\u4EBA\u6325\u6325\u624B\u3002"},{id:"naigou",estateColor:"#9564c4",name:"\u5976\u72D7",subtitle:"\u5F00\u5FC3\u6BCF\u4E00\u5929",color:"#f5d25f",accent:"#8c744a",style:"\u5747\u8861\u7ECF\u8425",description:"\u5782\u8033\u3001\u4E0A\u7FD8\u5C3E\u5DF4\u548C\u5F00\u6000\u7B11\u8138\u7684\u56DB\u8DB3\u5976\u4F34\u3002"},{id:"naidan",estateColor:"#df9139",name:"\u5976\u86CB",subtitle:"\u8EBA\u7740\u4E5F\u80FD\u8D62",color:"#f8d44c",accent:"#91af55",style:"\u5F3A\u52BF\u5EFA\u8BBE",description:"\u5C0F\u5DE7\u7684\u91D1\u9EC4\u8272\u86CB\u5F62\u8EAB\u4F53\u3001\u7EFF\u773C\u775B\u548C\u77ED\u77ED\u7684\u5634\uFF0C\u6EDA\u7740\u4E5F\u80FD\u53D1\u8D22\u3002"},{id:"naicha",estateColor:"#c67396",name:"\u5976\u8336",subtitle:"\u6696\u5FC3\u8865\u7ED9",color:"#f3c958",accent:"#58372e",style:"\u8865\u7ED9\u652F\u63F4",description:"\u91D1\u8272\u5976\u8336\u676F\u3001\u5706\u6DA6\u676F\u628A\u3001\u6DF1\u8272\u624B\u5957\u548C\u77ED\u817F\uFF0C\u7B11\u7740\u4E3A\u5976\u4F34\u8865\u7ED9\u3002"}],Ui=[{name:"\u5976\u8336\u8857",color:"#ee9e83"},{name:"\u5927\u7B11\u5DF7",color:"#edcb56"},{name:"\u5976\u5757\u5DE5\u574A",color:"#a7b9e4"},{name:"\u5976\u5BB6\u82B1\u56ED",color:"#8cbea0"},{name:"\u5976\u5E01\u6E2F",color:"#70b8ca"},{name:"\u661F\u91CE\u5927\u9053",color:"#c79cce"}],E1={0:["start","\u5976\u5BB6\u8D77\u70B9","\u6BCF\u6B21\u7ECF\u8FC7\u9886\u53D6 400 \u5976\u5E01"],3:["event","\u8868\u60C5\u5305\u5E7F\u573A"],6:["bank","\u5976\u5E01\u94F6\u884C"],9:["shop","\u5976\u5BB6\u4FBF\u5229\u5E97"],12:["hospital","\u5976\u86D9\u7597\u517B\u9662"],15:["stock","\u5976\u5BB6\u8BC1\u5238\u6240"],18:["event","\u91CE\u751F\u72D7\u5976\u644A"],21:["spirit","\u5927\u7B11\u795E\u6BBF"],24:["rest","\u5976\u86D9\u7684\u5C0F\u7A9D"],27:["shop","\u5976\u4F34\u8865\u7ED9\u7AD9"],30:["bank","\u5976\u5E01\u50A8\u84C4\u6240"],33:["event","\u5976\u86D9\u8857\u821E\u53F0"],36:["tax","\u5976\u6CE1\u6E05\u6D01\u7AD9"],39:["stock","\u5976\u5BB6\u4EA4\u6613\u6240"]},im=["\u73CD\u73E0\u5976\u8336\u94FA","\u5976\u8336\u5C0F\u7AD9","\u5927\u7B11\u7167\u76F8\u9986","\u5976\u86D9\u5267\u573A","\u5976\u5757\u9762\u5305\u623F","\u5976\u866B\u751C\u54C1\u5C4B","\u91D1\u8033\u9F20\u5546\u5E97","\u5976\u5BB6\u5C0F\u82B1\u56ED","\u5FEB\u4E50\u6D17\u6FA1\u5802","\u5976\u8336\u591C\u5E02","\u5976\u5E01\u7801\u5934","\u5927\u809A\u5B50\u65C5\u9986","\u7EFF\u773C\u775B\u4E66\u5E97","\u5976\u9F20\u73A9\u5177\u5C4B","\u661F\u91CE\u5C0F\u5267\u573A","\u5976\u86D9\u8BBE\u8BA1\u5BA4","\u5976\u76D6\u5DE5\u5382","\u5FAE\u7B11\u4FBF\u5229\u5E97","\u5976\u5BB6\u9910\u5385","\u91D1\u86D9\u5C0F\u516C\u5BD3","\u5976\u7F50\u8F66\u7AD9","\u86CB\u58F3\u5C55\u89C8\u9986","\u5976\u9999\u5546\u573A","\u5927\u7B11\u7535\u5F71\u9662","\u5706\u809A\u5B50\u98DF\u5802","\u5976\u5BB6\u90AE\u5C40"],jt=Array.from({length:48},(n,e)=>{let t,i;if(e<40){let a=2.4-e*Math.PI*2/40;t=14*Math.cos(a)+.7*Math.sin(a*3),i=10.7*Math.sin(a)+.65*Math.cos(a*2)}else{let a=e<44?35:15,o=e<44?15:35,c=2.4-a*Math.PI*2/40,l=2.4-o*Math.PI*2/40,h=((e<44?e-40:e-44)+1)/5,u=14*Math.cos(c)+.7*Math.sin(c*3),f=10.7*Math.sin(c)+.65*Math.cos(c*2),d=14*Math.cos(l)+.7*Math.sin(l*3),g=10.7*Math.sin(l)+.65*Math.cos(l*2),v=e<44?-1:1;t=u+(d-u)*h,i=f+(g-f)*h+Math.sin(h*Math.PI)*v*3.7}let s=E1[e],r=e>=40?e<44?4:5:Math.floor(e/7)%6;return{id:e,x:t,z:i,kind:s?.[0]||"property",name:s?.[1]||im[(e-Math.floor(e/3))%im.length],description:s?.[2]||"",group:r,price:180+r*90+e%3*30,next:e<39?[e+1]:e===39?[0]:e<43?[e+1]:e===43?[15]:e<47?[e+1]:[35]}});jt[35].next=[36,40];jt[15].next=[16,44];for(let n of jt){let e=n.id<40?jt[(n.id+39)%40]:jt[n.id===40?35:n.id===44?15:n.id-1],t=jt[n.next[0]],i=t.x-e.x,s=t.z-e.z,r=Math.hypot(i,s);n.yaw=Math.atan2(-s,i);let a=-s/r,o=i/r;(n.id<40&&a*n.x+o*n.z<0||n.id>=40&&o*(n.id<44?-1:1)<0)&&(a=-a,o=-o),n.lotX=n.x+a*2.3,n.lotZ=n.z+o*2.3,n.facing=Math.atan2(-a,-o)}var nm=[{id:0,name:"\u5976\u8336\u5B9E\u4E1A",short:"\u8336",price:100,group:0},{id:1,name:"\u5927\u7B11\u4F20\u5A92",short:"\u7B11",price:120,group:1},{id:2,name:"\u5976\u5757\u5DE5\u574A",short:"\u5757",price:80,group:2},{id:3,name:"\u5976\u5E01\u7269\u6D41",short:"\u6E2F",price:150,group:4}],Ft={dice:{name:"\u5FC3\u60F3\u4E8B\u6210\u5361",icon:"\u2684",price:30,description:"\u63B7\u9AB0\u524D\u6307\u5B9A\u672C\u6B21\u603B\u6B65\u6570 1\u20146\uFF1B\u914D\u5408\u843D\u70B9\u9884\u89C8\u9009\u62E9\u4E70\u5730\u3001\u8865\u7ED9\u6216\u907F\u79DF\u3002",target:"steps"},block:{name:"\u5976\u5757\u8DEF\u969C",icon:"\u25A6",price:20,description:"\u524D\u65B9 1\u20146 \u683C\u653E\u8DEF\u969C\uFF0C\u9996\u540D\u7ECF\u8FC7\u8005\u505C\u4E0B\uFF1B\u53EF\u4EE5\u622A\u4F4F\u5BF9\u624B\uFF0C\u4E5F\u80FD\u505C\u5728\u5FC3\u4EEA\u5730\u5757\u3002",target:"ahead"},turn:{name:"\u5976\u86D9\u56DE\u5934\u5361",icon:"\u21B6",price:20,description:"\u672C\u56DE\u5408\u6CBF\u6765\u8DEF\u5012\u9000\uFF1B\u53EF\u4EE5\u907F\u5F00\u9AD8\u79DF\u91D1\uFF0C\u4F46\u5012\u9000\u4E0D\u9886\u53D6\u8D77\u70B9\u5956\u52B1\u3002",target:"self"},shield:{name:"\u5FEB\u4E50\u514D\u79DF\u5361",icon:"\u2302",price:35,description:"\u62B5\u6D88\u4E0B\u4E00\u7B14\u79DF\u91D1\uFF0C\u4FDD\u7559\u81F3\u89E6\u53D1\u3002\u53EF\u4E0E\u63A7\u9AB0\u3001\u56DE\u5934\u7B49\u5361\u7EC4\u5408\u4F7F\u7528\u3002",target:"self"},steal:{name:"\u5976\u9F20\u62A2\u5730\u5361",icon:"\u2691",price:45,description:"\u505C\u5728\u5BF9\u624B\u5730\u4EA7\u65F6\u6536\u8D2D\u8BE5\u5730\u4EA7\uFF1B\u5411\u4E1A\u4E3B\u652F\u4ED8\u5730\u4EA7\u6210\u672C\u7684 125%\uFF0C\u53EF\u6253\u65AD\u5176\u8857\u533A\u7ECF\u8425\u3002",target:"enemy"},recover:{name:"\u91CE\u751F\u72D7\u5976",icon:"\u2667",price:20,description:"\u79FB\u9664\u4F11\u517B\u4E0E\u9709\u8FD0\uFF0C\u83B7\u5F97 80 \u5976\u5E01\u8865\u7ED9\u3002",target:"self"},demolish:{name:"\u5976\u5757\u62C6\u9664\u5361",icon:"\u265C",price:25,description:"\u62C6\u53BB 8 \u683C\u8303\u56F4\u5185\u4E00\u5C42\u623F\u5C4B\uFF0C\u6216\u6E05\u9664\u8DEF\u969C\uFF1B\u4E0D\u4F1A\u593A\u8D70\u571F\u5730\u3002",target:"enemyBuilt"},build:{name:"\u5976\u5BB6\u5DE5\u7A0B\u961F",icon:"\u2692",price:65,description:"\u4E3A 8 \u683C\u8303\u56F4\u5185\u81EA\u5DF1\u7684\u5730\u4EA7\u514D\u8D39\u52A0\u76D6\u4E00\u5C42\uFF0C\u4E0D\u5360\u5E38\u89C4\u5EFA\u8BBE\u6B21\u6570\u3002",target:"own"},slow:{name:"\u6162\u6162\u8D70\u5361",icon:"\u2667",price:25,description:"\u81EA\u5DF1\u63A5\u4E0B\u6765\u4E09\u6B21\u884C\u52A8\u5404\u8D70 1 \u683C\uFF0C\u4FBF\u4E8E\u8FDE\u7EED\u4E70\u5730\u6216\u4EAB\u53D7\u5F53\u5730\u5EFA\u8BBE\u6298\u6263\u3002",target:"self"}},mn={fortune:{name:"\u5927\u7B11\u8D22\u795E",icon:"\u2726",description:"\u975E\u4EA4\u6613\u6536\u5165\u589E\u52A0 25%"},misfortune:{name:"\u5976\u6CE1\u9709\u795E",icon:"\u2601",description:"\u79DF\u91D1\u548C\u8D39\u7528\u589E\u52A0 25%"},guardian:{name:"\u5976\u86CB\u5B88\u62A4",icon:"\u25C9",description:"\u62B5\u6321\u4E00\u6B21\u8D1F\u9762\u4E8B\u4EF6"}},Yi=[{id:0,name:"\u6B65\u884C",dice:1,price:0},{id:1,name:"\u5976\u86D9\u81EA\u884C\u8F66",dice:2,price:600},{id:2,name:"\u5976\u7F50\u5C0F\u8F66",dice:3,price:1200}],$a=[{name:"\u5168\u7F51\u4E00\u8D77\u6367\u8179\u5927\u7B11",art:"theater",text:"\u4F60\u7684\u5927\u7B11\u8868\u60C5\u5305\u8D70\u7EA2\uFF0C\u6536\u83B7 280 \u5976\u5E01\u3002",kind:"gain",amount:280,stock:1,change:.12},{name:"\u91CE\u751F\u72D7\u5976\u8865\u7ED9",art:"recover",text:"\u6536\u5230\u5976\u5BB6\u4EBA\u7684\u8865\u7ED9\uFF0C\u6062\u590D\u4F11\u517B\u5E76\u83B7\u4E00\u74F6\u91CE\u751F\u72D7\u5976\u3002",kind:"recover"},{name:"\u5976\u8336\u6D12\u4E86\u4E00\u5730",art:"tea",text:"\u652F\u4ED8\u6E05\u6D01\u8D39\u7528 180 \u5976\u5E01\u3002",kind:"loss",amount:180},{name:"\u9009\u62E9\u4F60\u7684\u5976\u4F34",art:"dice",text:"\u5976\u4F34\u9001\u6765\u4E00\u5F20\u968F\u673A\u9053\u5177\u5361\u3002",kind:"card"},{name:"\u5976\u86D9\u8857\u821E\u5F00\u573A",art:"theater",text:"\u6F14\u51FA\u6536\u83B7 200 \u5976\u5E01\uFF0C\u5927\u7B11\u4F20\u5A92\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:200,stock:1,change:.1},{name:"\u5976\u5757\u5DE5\u5382\u505C\u7535",art:"factory",text:"\u4FEE\u7406\u8BBE\u5907\u652F\u4ED8 150 \u5976\u5E01\uFF0C\u5976\u5757\u5DE5\u574A\u884C\u60C5\u56DE\u843D\u3002",kind:"loss",amount:150,stock:2,change:-.12},{name:"\u5976\u8336\u65B0\u54C1\u5927\u5356",art:"tea",text:"\u54C1\u9274\u6D3B\u52A8\u83B7\u5F97 160 \u5976\u5E01\uFF0C\u5976\u8336\u5B9E\u4E1A\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:160,stock:0,change:.12},{name:"\u5976\u86D9\u7231\u6D17\u6FA1",art:"recover",text:"\u6D17\u9999\u9999\uFF0C\u4F11\u606F\u4E00\u56DE\u5408\uFF0C\u83B7\u8865\u8D34 100 \u5976\u5E01\u3002",kind:"rest",amount:100},{name:"\u5976\u5E01\u6E2F\u53E3\u987A\u98CE",art:"vehicle",text:"\u8FD0\u8F93\u6536\u5165 220 \u5976\u5E01\uFF0C\u5976\u5E01\u7269\u6D41\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:220,stock:3,change:.1},{name:"\u795E\u79D8\u5976\u7F50",art:"shield",text:"\u6253\u5F00\u5976\u7F50\uFF0C\u8BF7\u4E00\u4F4D\u5976\u5BB6\u795E\u7075\u6765\u505A\u5BA2\u3002",kind:"spirit"}],Nr=[2,8,14,20,26,32,38,42,46];var sm=new WeakMap;function ti(n,e=jt){Array.isArray(e)||(e=jt);let t=sm.get(e);return t||(t={minX:Math.min(...e.map(i=>i.x))-1,maxX:Math.max(...e.map(i=>i.x))+1,minZ:Math.min(...e.map(i=>i.z))-1,maxZ:Math.max(...e.map(i=>i.z))+1},sm.set(e,t)),{x:12+(n.x-t.minX)*336/(t.maxX-t.minX),y:12+(n.z-t.minZ)*226/(t.maxZ-t.minZ)}}function ds(n=jt){return n.flatMap(e=>e.next.map(t=>({from:e.id,to:t,a:ti(e,n),b:ti(n[t],n)})))}function qu(n,e){return e==="Home"?0:e==="End"?jt.length-1:["ArrowRight","ArrowDown"].includes(e)?(n+1)%jt.length:["ArrowLeft","ArrowUp"].includes(e)?(n+jt.length-1)%jt.length:n}function rm(n,e,t=jt,i=18){let s=null,r=i;for(let a of t){let o=ti(a,t),c=Math.hypot(n-o.x,e-o.y);c<r&&(s=a.id,r=c)}return s}var am=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ws=n=>Math.round(n).toLocaleString("zh-CN");function om(n,e){let t=n.s.ownership[e],i=n.player,s=Je(t),r,a;t.level&&["park","research"].includes(s)?(r="free",a="\u8FD9\u9879\u8BBE\u65BD\u4E0D\u6536\u53D6\u5230\u8BBF\u8D39\u7528\uFF0C\u514D\u79DF\u6548\u679C\u4F1A\u4FDD\u7559\u3002"):n.s.players[t.player].skip?(r="rest",a="\u4E1A\u4E3B\u6B63\u5728\u4F11\u517B\uFF0C\u672C\u6B21\u6682\u505C\u6536\u8D39\uFF0C\u514D\u79DF\u6548\u679C\u4F1A\u4FDD\u7559\u3002"):i.shield&&(r="shield",a="\u5DF2\u5907\u514D\u79DF\u6548\u679C\u4F1A\u62B5\u6D88\u8FD9\u6B21\u8D39\u7528\uFF1B\u65C5\u9986\u4E5F\u4E0D\u4F1A\u5B89\u6392\u5165\u4F4F\u3002");let o=r?[{amount:0,label:"\u514D\u8D39"}]:no(n,e).map(h=>({...h,amount:n.payment(h.amount,t.player)})),c=Math.min(...o.map(h=>h.amount)),l=Math.max(...o.map(h=>h.amount));return a??=s==="hotel"&&t.level?"\u968F\u673A\u5165\u4F4F 1\u20143 \u56DE\u5408\uFF0C\u6309\u5B9E\u9645\u5929\u6570\u6536\u8D39\uFF0C\u5165\u4F4F\u671F\u95F4\u6682\u505C\u884C\u52A8\u3002":s==="mall"&&t.level?"\u6D88\u8D39\u500D\u7387\u5728\u786E\u8BA4\u4ED8\u6B3E\u540E\u62BD\u7B7E\uFF1B\u4E0B\u65B9\u5217\u51FA\u6240\u6709\u53EF\u80FD\u8D39\u7528\u3002":s==="gas"&&t.level?"\u6309\u672C\u6B21\u5B9E\u9645\u884C\u8FDB\u6B65\u6570\u4E0E\u4EA4\u901A\u5DE5\u5177\u6536\u8D39\u3002":"\u91D1\u989D\u5DF2\u8BA1\u5165\u5F53\u524D\u89D2\u8272\u6280\u80FD\u3001\u795E\u7075\u6548\u679C\u4E0E\u8857\u533A\u8054\u8425\u3002",{min:c,max:l,options:o,exemption:r,rule:a,range:c===l?Ws(c):`${Ws(c)}\u2014${Ws(l)}`,random:o.length>1,type:s}}function lm(n,e){let t=n.s.ownership[e.id];return t?.level&&["hotel","mall"].includes(Je(t))?`\u8D39\u7528 ${om(n,e.id).range}`:`\u4ED8\u79DF ${e.rent}`}function cm(n){let e=n.player,t=n.tiles[e.pos],i=n.s.ownership[e.pos],s=om(n,e.pos),r=n.takeoverPrice(e.pos),a=e.money+e.deposit,o=s.random?`<div class="arrival-fees">${s.options.map(h=>`<span><b>${am(h.label)}</b>${Ws(h.amount)} \u5976\u5E01</span>`).join("")}</div>`:"",c=s.max>a?`<p class="arrival-warning">${s.min>a?"\u73B0\u91D1\u4E0E\u5B58\u6B3E\u4E0D\u8DB3\uFF0C\u4ED8\u6B3E\u65F6\u9700\u8981\u7B79\u6B3E\u3002":"\u8F83\u9AD8\u8D39\u7528\u53EF\u80FD\u8D85\u8FC7\u73B0\u91D1\u4E0E\u5B58\u6B3E\uFF0C\u4ED8\u6B3E\u65F6\u53EF\u80FD\u9700\u8981\u7B79\u6B3E\u3002"}</p>`:"",l=s.exemption==="shield"?"\u4F7F\u7528\u5DF2\u5907\u514D\u79DF":s.max===0?"\u7EE7\u7EED\u65C5\u884C":"\u786E\u8BA4\u4ED8\u6B3E";return`<div class="arrival-summary">${Li({...t,buildingType:i.buildingType},i.level,n.char(n.s.players[i.player]).estateColor)}<div><span class="badge">${i.level?Mt[s.type].name:"\u5F85\u5EFA\u7A7A\u5730"}</span><strong>${s.range}<small> \u5976\u5E01</small></strong><span>${s.random?"\u53EF\u80FD\u8D39\u7528\u8303\u56F4":s.max?"\u672C\u6B21\u5E94\u4ED8":"\u672C\u6B21\u514D\u8D39"}</span></div></div><p class="arrival-rule">${s.rule}</p>${o}<div class="arrival-budget"><span>\u73B0\u91D1 <b>${Ws(e.money)}</b> \xB7 \u5B58\u6B3E <b>${Ws(e.deposit)}</b></span><span>\u6536\u8D2D <b>${Ws(r)}</b> \xB7 \u6D88\u8017\u4E00\u5F20\u8D2D\u5730\u5361</span></div>${c}<div class="button-grid decision-actions"><button class="secondary" data-act="estatePay">${l}</button><button class="primary" data-act="estateBuy" ${e.money<r?"disabled":""}>\u8D2D\u5730\u5361\u6536\u8D2D</button></div>`}function w1(n,e){let t=n.preview(n.s.remaining,{first:e}),i=n.player.pos,s=n.tiles[i].next.flatMap(T=>n.preview(n.s.remaining,{first:T})),r=[i,...s.flatMap(T=>T.path)],a=r.map(T=>ti(n.tiles[T],n.tiles)),o=a.map(T=>T.x),c=a.map(T=>T.y),l=(Math.min(...o)+Math.max(...o))/2,h=(Math.min(...c)+Math.max(...c))/2,u=Math.max(...c)-Math.min(...c)>Math.max(...o)-Math.min(...o),f=T=>{let L=ti(n.tiles[T],n.tiles);return u?{x:l+L.y-h,y:h-L.x+l}:L},d=r.map(f),g=Math.min(...d.map(T=>T.x))-18,v=Math.min(...d.map(T=>T.y))-18,m=Math.max(...d.map(T=>T.x))-g+18,p=Math.max(...d.map(T=>T.y))-v+18,x=f(i),y=e===n.tiles[i].next[0]?"#4f8268":"#b28335",_=ds(n.tiles).map(T=>{let L=f(T.from),U=f(T.to);return`<path d="M${L.x},${L.y} L${U.x},${U.y}"/>`}).join(""),R=t.map(T=>{let L=[i,...T.path].map(f);return`<polyline fill="none" points="${L.map(U=>`${U.x.toFixed(1)},${U.y.toFixed(1)}`).join(" ")}"/><circle cx="${L.at(-1).x}" cy="${L.at(-1).y}" r="5"/>`}).join("");return`<svg class="route-drawing" viewBox="${g} ${v} ${m} ${p}" role="img" aria-label="\u672C\u6761\u8DEF\u7EBF\u4E0E\u6700\u7EC8\u843D\u70B9\u7684\u5C40\u90E8\u9884\u89C8"><g fill="none" stroke="#cfc2a0" stroke-width="3" stroke-linecap="round">${_}</g><g stroke="${y}" fill="${y}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${R}</g><circle cx="${x.x}" cy="${x.y}" r="5" fill="#b74e36" stroke="#fff3cf" stroke-width="2"/></svg>`}function hm(n,e){let t=n.s,i=n.player,s=t.mapVersion===2?i.pos===35?"\u6668\u5149\u652F\u8DEF\u7ED5\u5F00\u6E05\u6D01\u7AD9\uFF0C\u4E5F\u4F1A\u8DF3\u8FC7\u8D77\u70B9\u5956\u91D1\u3002":"\u82B1\u56ED\u652F\u8DEF\u7ED5\u5F00\u533B\u9662\uFF0C\u4E5F\u4F1A\u9519\u8FC7\u4E8B\u4EF6\u4E0E\u795E\u6BBF\u3002":"\u5185\u5C9B\u6377\u5F84\u6539\u53D8\u6CBF\u9014\u505C\u9760\u70B9\u3002";return`<p class="branch-intro">\u5269\u4F59 <b>${t.remaining}</b> \u6B65\uFF0C\u9009\u597D\u540E\u7EE7\u7EED\u672C\u6B21\u884C\u7A0B\u3002${s}</p><div class="route-choices">${n.tiles[i.pos].next.map((r,a)=>`<article class="route-choice"><h3>${a===0?"\u6CBF\u57CE\u9547\u4E3B\u8DEF":t.mapVersion===2?i.pos===35?"\u8D70\u6668\u5149\u652F\u8DEF":"\u8D70\u82B1\u56ED\u652F\u8DEF":"\u8D70\u5185\u5C9B\u6377\u5F84"}<span class="badge">${a===0?"\u4E3B\u8DEF":t.mapVersion===2?"\u77013\u683C":"\u5185\u5C9B"}</span></h3>${w1(n,r)}<p class="route-next">\u4E0B\u4E00\u683C\uFF1A${am(n.tiles[r].name)}</p><div class="route-outcomes">${n.preview(t.remaining,{first:r}).map(c=>`<p>\u6700\u7EC8\uFF1A${e(c)}</p>`).join("")}</div><button class="primary" data-act="branch" data-id="${r}">\u5C31\u8D70${a===0?"\u4E3B\u8DEF":t.mapVersion===2?"\u652F\u8DEF":"\u6377\u5F84"}</button></article>`).join("")}</div>`}var Rc=class{constructor(){this.sequence=0,this.items=[]}record(e){let t=Object.freeze({...e,sequence:++this.sequence});return this.items.push(t),this.items.length>16&&this.items.shift(),t}after(e){return this.items.filter(t=>t.sequence>e)}},Cc=class{read(e,t=!0){if(!t||this.game!==e)return this.game=e,this.sequence=e.transfers.sequence,[];let i=e.transfers.after(this.sequence);return this.sequence=e.transfers.sequence,i}},Yu=new WeakMap;function um(n,e){let t=[];for(let[i,s,r]of[[e.from,"\u2212","money-out"],[e.to,"+","money-in"]]){let a=n.querySelector(`[data-player-id="${i}"]`);if(!a)continue;let o={};Yu.set(a,o),a.classList.remove("money-in","money-out"),a.classList.add(r),a.dataset.transferLabel=s+e.amount,t.push(()=>{Yu.get(a)===o&&(a.classList.remove("money-in","money-out"),delete a.dataset.transferLabel,Yu.delete(a))})}return()=>t.forEach(i=>i())}var Pc=[[-14,0],[-12,-9],[0,-11],[12,-9],[14,0],[12,9],[0,11],[-12,9],[-14,0]],T1={0:["start","\u5976\u5BB6\u8F66\u7AD9"],3:["event","\u6668\u5149\u5E7F\u573A"],6:["bank","\u5317\u5CB8\u94F6\u884C"],10:["shop","\u5976\u8336\u8857\u8865\u7ED9\u5E97"],15:["stock","\u5E02\u6C11\u8BC1\u5238\u6240"],18:["hospital","\u5976\u5BB6\u533B\u9662"],20:["event","\u8857\u89D2\u65B0\u95FB\u53F0"],22:["spirit","\u5927\u7B11\u795E\u6BBF"],26:["bank","\u5357\u5CB8\u94F6\u884C"],30:["shop","\u6E2F\u6E7E\u8865\u7ED9\u5E97"],34:["rest","\u6EE8\u6CB3\u5C0F\u7A9D"],36:["tax","\u793E\u533A\u6E05\u6D01\u7AD9"],38:["event","\u6E2F\u53E3\u96C6\u5E02"],39:["stock","\u6E2F\u6E7E\u4EA4\u6613\u6240"]},A1=[["\u6668\u5149\u5976\u8336\u94FA","\u73CD\u73E0\u5C0F\u5C4B","\u7EFF\u773C\u775B\u4E66\u5E97","\u5976\u76D6\u70D8\u7119\u5C4B","\u5DF7\u53E3\u8336\u9986"],["\u5927\u7B11\u5267\u573A","\u5976\u5BB6\u5F71\u793E","\u661F\u5149\u7167\u76F8\u9986","\u56DE\u58F0\u4E66\u5C4B","\u5976\u4F34\u7535\u53F0"],["\u5976\u5757\u5DE5\u574A","\u5976\u7F50\u4F5C\u574A","\u5976\u9999\u9762\u5305\u623F","\u79EF\u6728\u4FEE\u7406\u94FA","\u8857\u89D2\u4ED3\u5E93"],["\u5976\u5BB6\u82B1\u56ED","\u5706\u809A\u5B50\u65C5\u9986","\u94F6\u674F\u5C0F\u9662","\u5976\u4F34\u516C\u5BD3","\u82B1\u56ED\u9910\u5385"],["\u5976\u5E01\u7801\u5934","\u5976\u5BB6\u90AE\u5C40","\u5E06\u8239\u65C5\u5E97","\u6E2F\u6E7E\u9910\u5385","\u5FAE\u7B11\u4FBF\u5229\u5E97"],["\u661F\u91CE\u5546\u573A","\u5976\u86D9\u8BBE\u8BA1\u5BA4","\u86CB\u58F3\u5C55\u89C8\u9986","\u661F\u91CE\u516C\u5BD3","\u5976\u9999\u767E\u8D27"]],gn=Array.from({length:48},(n,e)=>{let t,i;if(e<40){let o=Math.floor(e/5),c=e%5/5;[t,i]=Pc[o].map((l,h)=>l+(Pc[o+1][h]-l)*c)}else{let o=e<44,c=o?35:15,l=o?3:23,h=((o?e-40:e-44)+1)/5,u=g=>{let v=Math.floor(g/5),m=g%5/5;return Pc[v].map((p,x)=>p+(Pc[v+1][x]-p)*m)},f=u(c),d=u(l);t=f[0]+(d[0]-f[0])*h+Math.sin(h*Math.PI)*(o?4.2:-4.2),i=f[1]+(d[1]-f[1])*h}let s=e<40?Math.min(5,Math.floor(e/7)):e<44?0:3,r=T1[e],a=180+s*70+e%3*30;return{id:e,x:t,z:i,group:s,kind:r?.[0]||"property",name:r?.[1]||A1[s][e%5],price:a,description:"",next:e<39?[e+1]:e===39?[0]:e<43?[e+1]:e===43?[3]:e<47?[e+1]:[23]}});gn[35].next=[36,40];gn[15].next=[16,44];for(let n of gn){let e=gn[n.id<40?(n.id+39)%40:n.id===40?35:n.id===44?15:n.id-1],t=gn[n.next[0]],i=t.x-e.x,s=t.z-e.z,r=Math.hypot(i,s);n.yaw=Math.atan2(-s,i);let a=-s/r,o=i/r,c=n.id<40;(c&&a*n.x+o*n.z<0||!c&&a*n.x+o*n.z>0)&&(a=-a,o=-o),n.lotX=n.x+a*2.3,n.lotZ=n.z+o*2.3,n.facing=Math.atan2(-a,-o)}var Zu=n=>n===2?gn:jt,vn={1:{name:"\u7ECF\u5178\u53D1\u8D22\u5C9B",description:"\u4E0D\u89C4\u5219\u73AF\u5C9B\u4E0E\u8DE8\u5C9B\u957F\u6377\u5F84\u3002\u897F\u4FA7\u5165\u53E3\u901A\u5F80\u4E1C\u5CB8\uFF0C\u4E1C\u4FA7\u5165\u53E3\u901A\u5F80\u897F\u5CB8\uFF1B\u4FDD\u5B58\u7684\u5BF9\u5C40\u59CB\u7EC8\u4FDD\u7559\u81EA\u5DF1\u7684\u5730\u56FE\u3002"},2:{name:"\u5976\u5BB6\u6EE8\u6CB3\u9547",description:"48 \u683C\u57CE\u9547\u73AF\u7EBF\uFF0C\u5357\u5317\u53CC\u94F6\u884C\u4E0E\u8865\u7ED9\u5E97\uFF1B\u4E24\u6761\u652F\u8DEF\u5404\u7701 3 \u683C\u3002\u897F\u4FA7\u652F\u8DEF\u8DF3\u8FC7\u8D77\u70B9\u5956\u52B1\uFF0C\u4E1C\u4FA7\u652F\u8DEF\u7ED5\u5F00\u533B\u9662\u53CA\u795E\u6BBF\u3002"}};var fs=n=>Math.round(n).toLocaleString("zh-CN"),ju=[["cash","\u73B0\u91D1","#e1b64e"],["deposit","\u5B58\u6B3E","#65a58c"],["property","\u5730\u4EA7","#cb8464"],["stocks","\u80A1\u7968","#75a6bb"],["vehicle","\u4EA4\u901A\u5DE5\u5177","#aa976b"]];function R1(n){let e=n.ranking(),t=1;return e.map((i,s)=>(s&&(i.alive!==e[s-1].alive||n.worth(i)!==n.worth(e[s-1]))&&(t=s+1),{player:i,rank:t,assets:n.assets(i),lots:n.owned(i).length,winner:t===1}))}var C1='<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M27 23H10v12q0 26 26 25M73 23h17v12q0 26-26 25" fill="none" stroke="#b18235" stroke-width="7"/><path d="M24 16h52v26q0 24-26 28Q24 66 24 42Z" fill="#f1c55b" stroke="#ab7935" stroke-width="3"/><path d="M33 23h7v20q0 12 7 17" fill="none" stroke="#ffed9f" stroke-width="5" stroke-linecap="round"/><path d="M45 69h10v14H45Z" fill="#c08d38"/><path d="M31 83h38v9H31Z" fill="#d7a146" stroke="#9b7032" stroke-width="2"/><path d="m50 29 4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1Z" fill="#fff2b6"/></svg>';function P1(n){let e=n.assets,t=ju.reduce((i,[s])=>i+e[s],0);return`<div class="result-ledger"><div class="asset-ribbon" role="img" aria-label="\u603B\u8D44\u4EA7 ${fs(t)} \u5976\u5E01\uFF0C\u4E0D\u542B\u8D37\u6B3E\u6263\u9664">${ju.filter(([i])=>e[i]>0).map(([i,s,r])=>`<span style="width:${e[i]/t*100}%;background:${r}" title="${s} ${fs(e[i])}"></span>`).join("")}</div><dl>${ju.map(([i,s,r])=>`<div><dt><i style="background:${r}"></i>${s}</dt><dd>${fs(e[i])}</dd></div>`).join("")}<div class="result-loan"><dt>\u6263\u9664\u8D37\u6B3E</dt><dd>\u2212${fs(e.loan)}</dd></div><div class="result-total"><dt>\u51C0\u8D44\u4EA7</dt><dd>${fs(e.total)}</dd></div></dl></div>`}function dm(n){let e=R1(n),t=e.filter(o=>o.winner),i=t.map(o=>n.char(o.player).name).join("\u3001"),s=e.find(o=>o.player.human),r=e.filter(o=>o.player.alive),a=t.length===1&&r.length>1?t[0].assets.total-r[1].assets.total:null;return`<div class="settlement"><section class="winner-banner"><div class="winner-trophy">${C1}</div><div class="winner-faces">${t.map(o=>`<span>${_t(o.player.character)}</span>`).join("")}</div><h3>${i}${t.length>1?"\u5E76\u5217\u593A\u51A0":"\u593A\u51A0\uFF01"}</h3><p>${r.length===1?"\u575A\u6301\u5230\u6700\u540E\uFF0C\u6210\u4E3A\u552F\u4E00\u5B58\u6D3B\u5976\u4F34":`\u5B8C\u6210 ${n.s.round} \u8F6E\u65C5\u884C\uFF0C\u6309\u51C0\u8D44\u4EA7\u7ED3\u7B97`}</p><strong class="winner-score">${fs(t[0].assets.total)}<small> \u5976\u5E01\u51C0\u8D44\u4EA7</small></strong>${a!==null?`<span class="winner-lead">\u9886\u5148\u7B2C\u4E8C\u540D ${fs(a)} \u5976\u5E01</span>`:""}</section><div class="settlement-meta"><span>${vn[n.s.mapVersion].name}</span><span>${e.length} \u4EBA \xB7 \u7B2C ${n.s.round} / ${n.s.maxRounds} \u8F6E</span></div>${s?`<p class="personal-result">${s.winner?"\u606D\u559C\u4F60\uFF0C\u767B\u4E0A\u5976\u5BB6\u5BCC\u8C6A\u699C\u9996\uFF01":`\u4F60\u7684\u672C\u5C40\u6392\u540D\uFF1A\u7B2C ${s.rank} \u540D${s.player.alive?"":" \xB7 \u5DF2\u7834\u4EA7\u9000\u51FA"}`} \xB7 \u62E5\u6709 ${s.lots} \u5757\u5730\u4EA7</p>`:""}<h3 class="settlement-heading">\u5976\u5BB6\u8D44\u4EA7\u699C <small>\u70B9\u5F00\u5976\u4F34\u67E5\u770B\u8D44\u4EA7\u660E\u7EC6</small></h3><div class="settlement-ranks">${e.map(o=>{let c=o.player,l=n.char(c);return`<details class="result-entry ${c.human?"result-is-you":""}" ${c.human?"open":""}><summary><span class="result-place">${o.rank}</span><span class="result-face" style="background:${l.color}">${_t(l.id)}</span><span class="result-name">${l.name}${c.human?"<b>\u4F60</b>":""}<small>${c.alive?o.winner?"\u672C\u5C40\u51A0\u519B":o.lots+" \u5757\u5730\u4EA7":"\u5DF2\u7834\u4EA7"}</small></span><strong>${fs(o.assets.total)}<small>\u51C0\u8D44\u4EA7 \u25BE</small></strong></summary>${P1(o)}</details>`}).join("")}</div><p class="settlement-rule">\u5B58\u6D3B\u89D2\u8272\u4F18\u5148\uFF1B\u540C\u4E3A\u5B58\u6D3B\u6216\u7834\u4EA7\u4E14\u51C0\u8D44\u4EA7\u76F8\u540C\u5219\u5E76\u5217\u3002\u5730\u4EA7\u6309\u8D2D\u5165\u4E0E\u5EFA\u7B51\u540D\u4E49\u6210\u672C\u4F30\u503C\uFF0C\u80A1\u7968\u6309\u7ED3\u7B97\u65F6\u5E02\u4EF7\u8BA1\u4EF7\uFF0C\u4EA4\u901A\u5DE5\u5177\u6309\u8D2D\u5165\u4EF7\u8BA1\u4EF7\uFF1B\u70B9\u5238\u548C\u624B\u724C\u4E0D\u8BA1\u5165\u51C0\u8D44\u4EA7\u3002</p><div class="button-grid result-actions"><button class="primary" data-act="newGame">\u518D\u53BB\u65C5\u884C\u4E00\u6B21</button><button class="secondary" data-act="viewBoard">\u56DE\u770B\u5C0F\u5C9B</button><button class="secondary" data-act="export">\u4FDD\u5B58\u672C\u5C40\u5B58\u6863</button></div></div>`}function I1(n){let e=new Map;return n.forEach((t,i)=>{e.has(t)?e.get(t).count++:e.set(t,{key:t,index:i,count:1})}),[...e.values()]}function fm(n){let e=n.s.players[0],t=r=>e.alive?n.player.id!==e.id?"\u7535\u8111\u56DE\u5408\uFF0C\u67E5\u770B\u4F60\u7684\u5361\u5305":n.cardHint(r):"\u4F60\u5DF2\u9000\u51FA\u672C\u5C40",i=I1(e.cards),s=i.filter(({key:r})=>!t(r)).length;return`${pn("dice","\u79FB\u52A8\u5361\u5728\u63B7\u9AB0\u524D\u7528\uFF1B\u5EFA\u8BBE\u3001\u62C6\u9664\u548C\u514D\u79DF\u53EF\u5728\u884C\u52A8\u524D\u540E\u4F7F\u7528\u3002\u9009\u5361\u540E\u4F1A\u663E\u793A\u76EE\u6807\u4E0E\u6548\u679C\u3002")}<div class="card-bag-summary"><strong>${e.cards.length}<small> / 15 \u5F20</small></strong><span>${i.length} \u79CD\u9053\u5177<br>${s+" \u79CD\u5F53\u524D\u53EF\u7528"} \xB7 \u6211\u7684\u5361\u5305</span></div><div class="collectible-grid">${i.length?i.map(({key:r,index:a,count:o})=>{let c=Ft[r],l=t(r),h=["dice","turn","slow","block"].includes(r)?"\u51FA\u53D1\u524D":"\u884C\u52A8\u524D\u540E";return`<article class="row collectible-card bag-card ${l?"card-unavailable":"card-ready"}"><div class="card-heading"><span class="card-timing">${h}</span><b class="card-quantity" aria-label="\u62E5\u6709 ${o} \u5F20">\xD7${o}</b></div>${Ut(r)}<h3>${c.name}</h3><p>${c.description}</p><div class="card-availability">${l||(e.human?c.target==="self"?"\u4F7F\u7528\u540E\u7ACB\u5373\u751F\u6548":"\u9009\u62E9\u5730\u56FE\u76EE\u6807":"\u7535\u8111\u56DE\u5408\u4E2D")}</div><button class="${l?"secondary":"primary"}" data-act="card" data-index="${a}" ${l||!e.human?"disabled":""}>${l?"\u6682\u4E0D\u53EF\u7528":c.target==="self"?"\u4F7F\u7528\u5361\u7247":"\u9009\u62E9\u76EE\u6807"}</button></article>`}).join(""):'<div class="empty">\u5361\u5305\u7A7A\u7A7A\u7684\uFF0C\u5230\u5730\u56FE\u4E0A\u7684\u5546\u5E97\u8865\u7ED9\u5427\u3002</div>'}</div>`}var pm="https://taoyuchen74.github.io/naiwa-monopoly/";function mm(n=globalThis.location){try{let e=new URL(n.href);return!["http:","https:"].includes(e.protocol)||["localhost","127.0.0.1","[::1]"].includes(e.hostname)?pm:(e.username="",e.password="",new URL("./",e).href)}catch{return pm}}function ps(n,e,t){let i=(n.opponents||[]).slice(0,t-1).filter(s=>s&&s!=="random");return i.includes(e)?"\u7535\u8111\u89D2\u8272\u4E0D\u80FD\u4E0E\u4F60\u9009\u62E9\u7684\u89D2\u8272\u76F8\u540C\u3002":new Set(i).size!==i.length?"\u6BCF\u540D\u89D2\u8272\u53EA\u80FD\u5360\u4E00\u4E2A\u5E2D\u4F4D\uFF0C\u8BF7\u5C06\u91CD\u590D\u89D2\u8272\u6539\u4E3A\u968F\u673A\u3002":i.some(s=>!Bt.some(r=>r.id===s))?"\u5B58\u5728\u672A\u5236\u4F5C\u7684\u89D2\u8272\u3002":n.seed!==void 0&&n.seed!==""&&(!/^\d+$/.test(String(n.seed))||+n.seed<1||+n.seed>4294967295)?"\u5BF9\u5C40\u79CD\u5B50\u8BF7\u8F93\u5165 1\u20144294967295\uFF0C\u7559\u7A7A\u5219\u968F\u673A\u3002":""}function gm(n,e,t,i){if(!t)return[n,...Bt.filter(h=>h.id!==n).map(h=>h.id)].slice(0,e);let s=Array.from({length:e-1},(h,u)=>t[u]||"random"),r=ps({opponents:s,seed:""},n,e);if(r)throw new RangeError(r);let a=new Set([n,...s.filter(h=>h!=="random")]),o=Bt.map(h=>h.id).filter(h=>!a.has(h)),c=i>>>0^2772213287,l=()=>(c^=c<<13,c^=c>>>17,c^=c<<5,(c>>>0)/4294967296);for(let h=o.length-1;h>0;h--){let u=Math.floor(l()*(h+1));[o[h],o[u]]=[o[u],o[h]]}return[n,...s.map(h=>h==="random"?o.pop():h)]}function Xs(n={}){return{opponents:Array.isArray(n.opponents)?n.opponents.slice(0,5).map(e=>e==="dounai"?"naicha":e):[],seatLevels:Array.isArray(n.seatLevels)?n.seatLevels.slice(0,5):[],startingCash:[2e3,3200,5e3,8e3].includes(+n.startingCash)?+n.startingCash:3200,startingTickets:[0,60,120].includes(+n.startingTickets)?+n.startingTickets:60,mapVersion:+n.mapVersion==1?1:2,randomStart:n.randomStart!==!1,seed:String(n.seed||"")}}var vm=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function xm(n,e,t,i){return`<p class="panel-note">\u50CF\u521B\u5EFA\u7B56\u7565\u5BF9\u5C40\u4E00\u6837\u914D\u7F6E\u6BCF\u4E2A\u7535\u8111\u5E2D\u4F4D\u3002\u56FA\u5B9A\u89D2\u8272\u5148\u9884\u7559\uFF0C\u968F\u673A\u5E2D\u4F4D\u4ECE\u5269\u4F59\u89D2\u8272\u4E2D\u62BD\u53D6\uFF0C\u4E0D\u91CD\u590D\u3001\u4E0D\u62A2\u5360\u56FA\u5B9A\u5E2D\u4F4D\u3002</p><div class="setup-human"><span>${_t(e)}</span><div><strong>\u4F60\u7684\u89D2\u8272\uFF1A${Bt.find(s=>s.id===e).name}</strong><small>\u603B\u4EBA\u6570 ${t}\uFF0C\u5176\u4F59 ${t-1} \u4E2A\u5E2D\u4F4D\u4E3A\u7535\u8111\u3002</small></div></div><h3>\u7535\u8111\u9635\u5BB9</h3><div id="opponentSeats">${Array.from({length:t-1},(s,r)=>{let a=n.opponents[r]||"random",o=n.seatLevels[r]||"inherit";return`<div class="opponent-seat"><span class="seat-portrait">${a==="random"?'<span class="random-face">\u2684</span>':_t(a)}</span><div><label for="opponent${r}">\u7535\u8111 ${r+1}</label><select id="opponent${r}" data-setup-seat="${r}" aria-label="\u7535\u8111${r+1}\u89D2\u8272"><option value="random">\u968F\u673A\u89D2\u8272</option>${Bt.map(c=>`<option value="${c.id}" ${a===c.id?"selected":""} ${c.id===e?"disabled":""}>${c.name}${c.id===e?"\uFF08\u4F60\u7684\u89D2\u8272\uFF09":""}</option>`).join("")}</select></div><div><label for="seatLevel${r}">\u5355\u72EC\u5F3A\u5EA6</label><select id="seatLevel${r}" data-setup-level="${r}" aria-label="\u7535\u8111${r+1}\u5F3A\u5EA6">${[["inherit","\u8DDF\u968F\u5168\u5C40"],["easy","\u8F7B\u677E"],["normal","\u6807\u51C6"],["hard","\u9AD8\u624B"]].map(([c,l])=>`<option value="${c}" ${o===c?"selected":""}>${l}</option>`).join("")}</select></div></div>`}).join("")}</div><div class="row-actions"><button class="secondary" data-act="allRandom">\u5168\u90E8\u968F\u673A</button></div><h3>\u5BF9\u5C40\u89C4\u5219</h3><div class="setup-grid"><label>\u521D\u59CB\u5976\u5E01<select id="setupCash">${[2e3,3200,5e3,8e3].map(s=>`<option ${n.startingCash===s?"selected":""}>${s}</option>`).join("")}</select></label><label>\u521D\u59CB\u70B9\u5238<select id="setupTickets">${[0,60,120].map(s=>`<option ${n.startingTickets===s?"selected":""}>${s}</option>`).join("")}</select></label><label>\u5730\u56FE<select id="setupMap"><option value="2" ${n.mapVersion===2?"selected":""}>\u5976\u5BB6\u6EE8\u6CB3\u9547</option><option value="1" ${n.mapVersion===1?"selected":""}>\u7ECF\u5178\u53D1\u8D22\u5C9B</option></select></label><label>\u5148\u624B<select id="setupInitiative"><option value="random" ${n.randomStart?"selected":""}>\u968F\u673A\u5148\u624B</option><option value="human" ${n.randomStart?"":"selected"}>\u6211\u5148\u51FA\u53D1</option></select></label><label class="setup-seed">\u5BF9\u5C40\u79CD\u5B50<input id="setupSeed" type="text" inputmode="numeric" maxlength="10" value="${vm(n.seed)}" placeholder="\u7559\u7A7A\u968F\u673A\uFF1B\u76F8\u540C\u8BBE\u7F6E\u53EF\u590D\u73B0"></label></div><p class="stock-explain">\u5976\u5E01\u548C\u70B9\u5238\u5BF9\u6240\u6709\u73A9\u5BB6\u76F8\u540C\u3002\u79CD\u5B50\u51B3\u5B9A\u968F\u673A\u9635\u5BB9\u548C\u5BF9\u5C40\u968F\u673A\u5E8F\u5217\uFF1B\u76F8\u540C\u64CD\u4F5C\u3001\u8BBE\u7F6E\u548C\u79CD\u5B50\u624D\u80FD\u590D\u73B0\u3002</p><p id="setupError" class="setup-error" role="status">${vm(ps(n,e,t))}</p><div class="button-grid"><button class="secondary" data-act="resetAdvanced">\u6062\u590D\u9ED8\u8BA4</button><button class="primary" data-act="applyAdvanced" ${ps(n,e,t)?"disabled":""}>\u4FDD\u5B58\u8BBE\u7F6E</button></div>`}var D1=n=>Math.round(n).toLocaleString("zh-CN");function Wa(n,e){let t=n.s.ownership[e];if(!t)return'<p class="panel-note">\u65E0\u4E3B\u7A7A\u5730 \xB7 \u505C\u9760\u540E\u53EF\u8D2D\u4E70</p>';let i=Je(t),s=n.baseRent(e,t.level),r=n.s.players[t.player],a;if(!t.level)a=`\u7A7A\u5730\u8FC7\u8DEF\u8D39 ${n.rent(e)} \xB7 \u5230\u8BBF\u540E\u53EF\u9009\u62E9\u5EFA\u7B51`;else if(i==="hotel"){let o=Math.round(s*.65);a=`\u6BCF\u665A ${o} \u5976\u5E01 \xB7 \u968F\u673A\u5165\u4F4F 1\u20143 \u56DE\u5408<br>\u4F4F\u5BBF\u603B\u8D39 ${o}\u2014${o*3} \u5976\u5E01\uFF0C\u5165\u4F4F\u671F\u95F4\u6682\u505C\u884C\u52A8`}else if(i==="mall")a=`\u6D88\u8D39\u57FA\u6570 ${s} \xB7 \u62BD\u7B7E\u500D\u7387 75% / 100% / 150%<br>\u5355\u6B21\u6D88\u8D39 ${Math.round(s*.75)}\u2014${Math.round(s*1.5)} \u5976\u5E01`;else if(i==="gas")a="\u57FA\u7840\u8D39 30 + \u5B9E\u8D70\u6B65\u6570 \xD7 15 + \u4EA4\u901A\u8D39<br>\u4EA4\u901A\u8D39\uFF1A\u6B65\u884C 0 / \u81EA\u884C\u8F66 60 / \u5C0F\u8F66 120";else if(i==="chain")a=`\u5168\u5C9B ${n.owned(r).filter(c=>c.level&&Je(c)==="chain").length} \u95F4\u5206\u5E97 \xB7 \u6BCF\u95F4\u7EDF\u4E00\u6536\u8D39 ${n.rent(e)}<br>\u6BCF\u591A\u4E00\u95F4\u52A0\u6536 50\uFF0C\u6700\u9AD8 400 \u5976\u5E01`;else if(i==="park")a="\u514D\u8D39\u5F00\u653E \xB7 \u6BCF\u4F4D\u505C\u9760\u8005\u83B7\u5F97 10 \u70B9\u5238";else if(i==="research"){let o=t.researchProgress||0;a=`${Ft[t.researchCard||"dice"].name} \xB7 \u7814\u53D1\u8FDB\u5EA6 ${o}/3<br><span class="research-meter" aria-label="\u7814\u53D1\u8FDB\u5EA6 ${o}/3">${[0,1,2].map(c=>`<i class="${c<o?"filled":""}"></i>`).join("")}</span>\u518D\u51FA\u53D1 ${3-o} \u6B21\u5B8C\u6210\u7814\u53D1`}else a=`\u4F4F\u5B85\u79DF\u91D1 ${n.rent(e)} \xB7 \u5176\u4E2D\u8857\u533A\u8054\u8425 +${r.skip?0:Math.max(0,n.rent(e)-s)}${t.level<ji(t)?`<br>\u4E0B\u4E00\u7EA7\u79DF\u91D1 ${n.rent(e,t.level+1)}`:""}`;return`<div class="facility-facts"><span class="badge">${t.level?Mt[i].name:"\u5F85\u5EFA\u7A7A\u5730"} \xB7 ${n.char(r).name}</span><p>${a}</p>${r.skip&&!["park","research"].includes(i)?"<small>\u4E1A\u4E3B\u4F11\u517B\u4E2D\uFF0C\u5F53\u524D\u6682\u505C\u6536\u8D39\u3002</small>":""}<small>\u6536\u8D39\u4E3A\u57FA\u7840\u89C4\u5219\uFF0C\u89D2\u8272\u6280\u80FD\u3001\u795E\u7075\u548C\u514D\u79DF\u5361\u4F1A\u5F71\u54CD\u5B9E\u4ED8\u3002</small></div>`}function ym(n,e){let t=n.tiles[e],i=n.s.ownership[e],s=n.char().estateColor;if(!i||i.player!==n.player.id)return"<p>\u8BF7\u5148\u62E5\u6709\u8FD9\u5757\u5730\u4EA7\u3002</p>";if(!i.level)return`<p class="panel-note">\u7A7A\u5730\u5DF2\u5F52\u4F60\u6240\u6709\u3002\u9009\u62E9\u8FD9\u6B21\u8981\u5EFA\u8BBE\u7684\u8BBE\u65BD\uFF1B\u5E38\u89C4\u5EFA\u8BBE\u6BCF\u6B21\u505C\u9760\u9650\u4E00\u6B21\u3002\u7C7B\u578B\u5EFA\u6210\u540E\u56FA\u5B9A\uFF0C\u62C6\u9664\u540E\u53EF\u91CD\u65B0\u9009\u62E9\u3002</p><div class="business-choices">${Object.entries(Mt).map(([c,l])=>`<article class="business-choice">${Li({...t,buildingType:c},1,s)}<h3>${l.name}</h3><span class="badge">${l.max===1?"\u4E00\u7EA7\u8BBE\u65BD":"\u53EF\u52A0\u76D6\u81F3\u4E94\u7EA7"}</span><p>${l.text}</p><div class="row-head"><strong>${D1(n.buildPrice(t,c))} \u5976\u5E01</strong><button class="primary" data-act="construct" data-id="${e}" data-type="${c}" ${n.canConstruct(e,c)?"":"disabled"}>\u5EFA\u8BBE</button></div></article>`).join("")}</div>`;let r=Je(i),a=Mt[r],o=ji(i);return`${Li({...t,buildingType:i.buildingType},i.level,s)}<h3>${a.name} \xB7 ${i.level}/${o}\u7EA7</h3>${Wa(n,e)}<p>${a.text}</p><div class="stat-grid"><div class="stat-box"><strong>${i.level<o?n.buildPrice(t):"\u5DF2\u8FBE\u4E0A\u9650"}</strong><span>\u4E0B\u4E00\u7EA7\u5EFA\u8BBE\u8D39</span></div></div>${r==="research"?`<h3>\u7814\u53D1\u8FDB\u5EA6 ${i.researchProgress||0}/3</h3><p>\u5F53\u524D\u9879\u76EE\uFF1A${Ft[i.researchCard||"dice"].name}\u3002\u66F4\u6362\u9879\u76EE\u5C06\u91CD\u7F6E\u8FDB\u5EA6\u3002</p><div class="research-options">${$n(i.level).map(c=>`<button class="secondary" data-act="research" data-id="${e}" data-key="${c}" ${i.researchCard===c?"disabled":""}>${Ft[c].name}</button>`).join("")}</div>`:""}<p class="stock-explain">\u65C5\u9986\u6309\u5165\u4F4F\u5929\u6570\u3001\u5546\u573A\u6309\u62BD\u7B7E\u500D\u7387\u3001\u52A0\u6CB9\u7AD9\u6309\u5B9E\u9645\u884C\u7A0B\u6536\u8D39\uFF0C\u9884\u89C8\u4EC5\u4F5C\u53C2\u8003\u3002\u4F4F\u5B85\u6309\u8857\u533A\u8054\u8425\uFF1B\u8FDE\u9501\u5E97\u6309\u5168\u56FE\u5206\u5E97\u6570\u6536\u8D39\u3002</p><div class="button-grid"><button class="secondary" data-act="cancel">\u7EE7\u7EED\u65C5\u884C</button><button class="primary" data-act="upgrade" data-id="${e}" ${n.canUpgrade(e)?"":"disabled"}>${i.level<o?"\u52A0\u76D6\u4E00\u5C42":"\u4E0D\u80FD\u7EE7\u7EED\u52A0\u76D6"}</button></div>`}var ms={naiwa:{name:"\u7A33\u7A33\u7ECF\u8425",icon:"\u2302",text:"\u5E38\u89C4\u52A0\u76D6\u82B1\u8D39\u51CF\u5C11 15%\uFF1B\u6B63\u5411\u7ECF\u8FC7\u8D77\u70B9\u989D\u5916\u83B7\u5F97 80 \u5976\u5E01\u3002"},naichong:{name:"\u7EC6\u6C34\u957F\u6D41",icon:"\u25B1",text:"\u6BCF\u6B21\u51FA\u53D1\u9886\u53D6 60 \u5976\u5E01\uFF1B\u5230\u5E97\u8D2D\u5361\u53EA\u9700\u539F\u4EF7\u7684 80% \u70B9\u5238\u3002"},naishu:{name:"\u7CBE\u6253\u7EC6\u7B97",icon:"\u2691",text:"\u652F\u4ED8\u79DF\u91D1\u51CF\u5C11 20%\uFF1B\u8D2D\u5730\u5361\u6536\u8D2D\u4EF7\u518D\u6253\u4E5D\u6298\uFF0C\u4E1A\u4E3B\u6309\u5B9E\u9645\u6210\u4EA4\u4EF7\u6536\u6B3E\u3002"},naigou:{name:"\u50BB\u72D7\u6709\u50BB\u798F",icon:"\u2667",text:"\u6BCF\u6B21\u51FA\u53D1\u6709\u4E00\u534A\u673A\u4F1A\u6361\u5230 240 \u5976\u5E01\uFF0C\u5426\u5219\u6454\u4E22\u6700\u591A 40 \u5976\u5E01\uFF1B\u6B65\u6570\u4E0D\u53D7\u5F71\u54CD\u3002"},naidan:{name:"\u8EBA\u7740\u4E5F\u80FD\u8D62",icon:"\u2605",text:"\u6BCF\u6B21\u51FA\u53D1\u81EA\u52A8\u83B7\u5F97 75 \u5976\u5E01\uFF1B\u6BCF\u56DB\u6B21\u51FA\u53D1\uFF0C\u4E3A\u81EA\u5DF1\u6700\u4F4E\u7EA7\u7684\u4E00\u5757\u5730\u4EA7\u514D\u8D39\u52A0\u76D6\u4E00\u5C42\u3002\u65E0\u9700\u64CD\u4F5C\uFF0C\u6700\u9AD8\u4E94\u7EA7\u3002",strong:!0},naicha:{name:"\u6696\u5FC3\u8865\u7ED9",icon:"\u2661",text:"\u975E\u79DF\u91D1\u8D39\u7528\u51CF\u5C11 50%\uFF1B\u6BCF\u4E09\u6B21\u51FA\u53D1\u8865\u5145 20 \u70B9\u5238\u548C\u4E00\u5F20\u91CE\u751F\u72D7\u5976\u3002\u6EE1\u5305\u6309\u539F\u89C4\u5219\u8865\u507F\u3002"}},On=(n,e,t=e.character)=>n.s.talents===!0&&e.character===t;function _m(n){let e=n.player;if(!n.s.talents||e.talentReady)return!1;e.talentReady=!0,e.departures=(e.departures||0)+1;let t=e.character;if(t==="naichong"&&n.income(e,60,"\u3010\u7EC6\u6C34\u957F\u6D41\u3011"),t==="naigou")if(n.int(2)===0)n.income(e,240,"\u3010\u50BB\u72D7\u6709\u50BB\u798F\u3011\u6361\u5230\u94B1\u5305");else{let i=Math.min(40,e.money);e.money-=i,n.log(`\u5976\u72D7\u3010\u50BB\u72D7\u6709\u50BB\u798F\u3011\u6454\u4E22 ${i} \u5976\u5E01\uFF0C\u62CD\u62CD\u809A\u5B50\u7EE7\u7EED\u8D70\u3002`)}if(t==="naidan"){n.income(e,75,"\u3010\u8EBA\u7740\u4E5F\u80FD\u8D62\u3011");let i=e.departures%4===0&&n.owned(e).filter(s=>s.level<n.buildingLimit(s)).sort((s,r)=>s.level-r.level||s.tile.id-r.tile.id)[0];if(i){let s=n.s.ownership[i.tile.id];s.level===0&&(s.buildingType="residence"),s.level++,n.log(`\u5976\u86CB\u3010\u8EBA\u7740\u4E5F\u80FD\u8D62\u3011\u300C${i.tile.name}\u300D\u514D\u8D39\u52A0\u76D6\u81F3 ${i.level+1} \u7EA7\u3002`)}}if(t==="naicha"&&e.departures%3===0){let i=e.tickets;n.coupons(e,20),n.log(`\u5976\u8336\u3010\u6696\u5FC3\u8865\u7ED9\u3011\u83B7\u5F97 ${e.tickets-i} \u70B9\u5238${e.tickets-i<20?"\uFF08\u5DF2\u8FBE\u4E0A\u9650\uFF09":""}\u3002`),n.giveCard(e,"recover")}return!0}var Ju=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),L1={naiwa:"house",naichong:"bank",naishu:"steal",naigou:"recover",naidan:"build",naicha:"tea"};function bm(n,e=n.s.players[0]){let t=n.s.talents===!0,i=t&&e.alive&&n.s.phase!=="finished",s=e.departures||0,r=e.character==="naidan"?4:e.character==="naicha"?3:0,a=r?s%r:0,o=i&&r?r-a:null,c=g=>Math.round(g*(e.spirit==="fortune"?1.25:1)),l=t?e.alive?n.s.phase==="finished"?"\u672C\u5C40\u65C5\u884C\u5DF2\u7ED3\u675F":r?`\u518D\u51FA\u53D1 ${o} \u6B21\uFF0C\u89E6\u53D1${e.character==="naidan"?"\u514D\u8D39\u52A0\u76D6":"\u5468\u671F\u8865\u7ED9"}`:"\u7B26\u5408\u6761\u4EF6\u65F6\u81EA\u52A8\u751F\u6548":"\u5DF2\u9000\u51FA\uFF0C\u4E0D\u518D\u89E6\u53D1\u5929\u8D4B":"\u672C\u5C40\u672A\u5F00\u542F\u5929\u8D4B",h=[],u=null;if(i){if(e.character==="naiwa"&&(h=["\u5E38\u89C4\u5EFA\u8BBE\u652F\u4ED8 85% \u8D39\u7528\uFF0C\u5411\u4E0A\u53D6\u6574\u3002",`\u6309\u5F53\u524D\u8D22\u8FD0\u72B6\u6001\uFF0C\u6B63\u5411\u8D77\u70B9\u5956\u52B1\u5171 ${c(480)} \u5976\u5E01\u3002`]),e.character==="naichong"&&(h=[`\u4E0B\u6B21\u5B9E\u9645\u51FA\u53D1\u9886\u53D6 ${c(60)} \u5976\u5E01\u3002`,"\u5230\u5E97\u8D2D\u5361\u652F\u4ED8 80% \u70B9\u5238\u4EF7\u683C\uFF0C\u5411\u4E0A\u53D6\u6574\u3002"]),e.character==="naishu"&&(h=["\u79DF\u91D1\u7ED3\u7B97\u81EA\u52A8\u4EAB\u53D7 20% \u51CF\u514D\u3002","\u8D2D\u5730\u5361\u6536\u8D2D\u518D\u4EAB\u4E5D\u6298\uFF0C\u6210\u4EA4\u4EF7\u5411\u4E0A\u53D6\u6574\u81F3 10 \u5976\u5E01\u3002"]),e.character==="naigou"&&(h=[`\u4E0B\u6B21\u51FA\u53D1\u5404\u6709\u4E00\u534A\u673A\u4F1A\uFF1A\u6361\u5230 ${c(240)} \u5976\u5E01\uFF0C\u6216\u6454\u4E22 ${Math.min(40,e.money)} \u5976\u5E01\u3002`,"\u67E5\u770B\u6280\u80FD\u4E0D\u4F1A\u63D0\u524D\u62BD\u53D6\u7ED3\u679C\u3002"]),e.character==="naidan"){let g=n.owned(e).filter(v=>v.level<n.buildingLimit(v)).sort((v,m)=>v.level-m.level||v.tile.id-m.tile.id)[0];u=g?{id:g.tile.id,name:g.tile.name,level:g.level,nextLevel:g.level+1}:null,h=[`\u6BCF\u6B21\u5B9E\u9645\u51FA\u53D1\u9886\u53D6 ${c(75)} \u5976\u5E01\u3002`,u?`\u6309\u5F53\u524D\u5730\u4EA7\u9884\u89C8\uFF1A${u.name} ${u.level}\u2192${u.nextLevel} \u7EA7\u3002`:"\u5F53\u524D\u6CA1\u6709\u53EF\u52A0\u76D6\u7684\u81EA\u5BB6\u5730\u4EA7\uFF0C\u5468\u671F\u5230\u8FBE\u65F6\u4F1A\u91CD\u65B0\u68C0\u67E5\u3002"]}e.character==="naicha"&&(h=[`\u6309\u5F53\u524D\u70B9\u5238\u5BB9\u91CF\uFF0C\u5468\u671F\u8865\u7ED9\u53EF\u6536 ${Math.min(20,150-e.tickets)} \u70B9\u5238\u3002`,e.cards.length>=15?`\u5361\u5305\u5DF2\u6EE1\uFF0C\u91CE\u751F\u72D7\u5976\u4F1A\u6298\u7B97\u4E3A ${c(60)} \u5976\u5E01\u3002`:"\u5468\u671F\u8865\u7ED9\u53E6\u83B7\u4E00\u5F20\u91CE\u751F\u72D7\u5976\u3002"])}let f=i?e.skip?"\u4F11\u517B\u671F\u95F4\u4E0D\u8BA1\u5165\u51FA\u53D1\u6B21\u6570\u3002":n.s.current!==e.id?"\u7535\u8111\u56DE\u5408\uFF0C\u67E5\u770B\u4F60\u7684\u6280\u80FD\u8FDB\u5EA6\u3002":e.talentReady?"\u672C\u6B21\u51FA\u53D1\u8BA1\u6570\u5DF2\u66F4\u65B0\u3002":"\u4E0B\u4E00\u6B21\u5B9E\u9645\u51FA\u53D1\u65F6\u66F4\u65B0\u8BA1\u6570\u3002":"\u53EF\u67E5\u770B\u5404\u4F4D\u5976\u4F34\u7684\u6280\u80FD\u89C4\u5219\u3002",d=n.s.logs.find(g=>g.text.includes(`\u3010${ms[e.character].name}\u3011`))?.text||null;return{enabled:t,active:i,count:s,cycle:r,progress:a,remaining:o,label:l,notes:h,target:u,phaseNote:f,recent:d}}function Mm(n){let e=n.s.players[0],t=n.char(e),i=ms[t.id],s=bm(n,e),r=Tc(t.id,"idle"),a=s.active&&s.cycle?`<div class="talent-cycle"><div><span>\u672C\u5468\u671F\u8FDB\u5EA6</span><b>${s.progress}/${s.cycle}</b></div><div class="talent-meter" role="progressbar" aria-label="${Ju(s.label)}" aria-valuemin="0" aria-valuemax="${s.cycle}" aria-valuenow="${s.progress}">${Array.from({length:s.cycle},(o,c)=>`<i class="${c<s.progress?"filled":""}"></i>`).join("")}</div></div>`:"";return`<section class="talent-hero ${s.active?"":"inactive"}" style="--talent-color:${t.estateColor}"><div class="talent-model">${r?`<img src="${r}" alt="${t.name}\u5F62\u8C61">`:_t(t.id)}<span>${Ut(L1[t.id])}</span></div><div class="talent-copy"><small>\u6211\u7684\u5976\u4F34 \xB7 ${t.name}</small><h3>${i.name}</h3><p>${i.text}</p>${s.active?`<span class="badge">\u5DF2\u5B9E\u9645\u51FA\u53D1 ${s.count} \u6B21</span>`:""}</div><div class="talent-live"><strong>${s.label}</strong><small>${s.phaseNote}</small>${a}${s.notes.length?`<ul>${s.notes.map(o=>`<li>${Ju(o)}</li>`).join("")}</ul>`:""}</div></section>${s.recent?`<div class="talent-recent"><small>\u8FD1\u671F\u89E6\u53D1\u8BB0\u5F55</small><p>${Ju(s.recent)}</p></div>`:""}<p class="talent-explain">\u9884\u89C8\u6309\u5F53\u524D\u8D44\u4EA7\u3001\u5361\u5305\u548C\u795E\u7075\u72B6\u6001\u8BA1\u7B97\uFF0C\u5B9E\u9645\u6548\u679C\u5728\u89E6\u53D1\u65F6\u91CD\u65B0\u7ED3\u7B97\u3002\u4F11\u517B\u4E0D\u4F1A\u6D88\u8017\u5468\u671F\u8FDB\u5EA6\u3002</p><h3 class="other-talents-title">\u5176\u4ED6\u5976\u4F34\u7684\u5929\u8D4B</h3>${Bt.filter(o=>o.id!==t.id).map(o=>{let c=n.s.players.find(h=>h.character===o.id),l=c?bm(n,c):null;return`<div class="talent-row"><span class="talent-face">${_t(o.id)}</span><div><h3>${o.name} \xB7 ${ms[o.id].name}</h3><p>${ms[o.id].text}</p><span class="badge">${c?c.alive?"\u672C\u5C40\u53C2\u8D5B":"\u5DF2\u9000\u51FA":"\u672A\u53C2\u8D5B"}</span>${l?.active&&l.cycle?`<small class="talent-rival-cycle">\u5DF2\u51FA\u53D1 ${l.count} \u6B21 \xB7 ${l.label}</small>`:""}</div></div>`}).join("")}`}function Sm(n,e,t){return e?n?.s||null:t?.s||null}function U1(n){if(!n)return null;let e=n.s,t=e.players[0],i=Bt.find(s=>s.id===t.character);return{character:i.id,name:i.name,action:e.phase==="finished"?"\u67E5\u770B\u6392\u540D":t.alive?"\u7EE7\u7EED":"\u7EE7\u7EED\u89C2\u6218",map:vn[e.mapVersion].name,round:e.round,maxRounds:e.maxRounds,players:e.players.length}}function Em(n){let e=U1(n);return e?`<span class="resume-face">${_t(e.character)}</span><span class="resume-copy"><strong>${e.action} \xB7 ${e.name}</strong><small>${e.map} \xB7 ${e.round}/${e.maxRounds}\u8F6E \xB7 ${e.players}\u4EBA</small></span><span class="resume-arrow" aria-hidden="true">\u2197</span>`:"\u7EE7\u7EED\u4E0A\u6B21\u7684\u65C5\u884C"}var gs=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),wm=n=>Math.round(n).toLocaleString("zh-CN"),Qu=n=>String.fromCharCode(65+n),ed=(n,e)=>n.length>1?["#4f8268","#b28335","#607fa8","#9e6b86"][e%4]:n[e].rent?"#b26345":"#547f67";function N1(n,e){let t=n.player.cards[e],i=Ft[t];return i?i.target==="steps"?Array.from({length:6},(s,r)=>({target:r+1,results:n.preview(r+1),reason:""})):i.target==="ahead"?n.blockTargets().map(s=>({target:s.steps,id:s.id,reason:s.reason})):n.cardTargets(t).map(s=>({...s,target:s.id,reason:t==="steal"&&n.player.money<n.takeoverPrice(s.id)?"\u73B0\u91D1\u4E0D\u8DB3\uFF0C\u6682\u65F6\u65E0\u6CD5\u6536\u8D2D":"",afterLevel:s.obstacle?0:t==="build"?s.level+1:t==="demolish"?s.level-1:s.level,afterType:t==="build"&&!s.level||t==="demolish"&&s.level===1?"residence":Je(s),afterOwner:t==="steal"?n.player.id:s.player,price:t==="steal"?n.takeoverPrice(s.id):0})):[]}function k1(n,e){let t=n.player.pos,i=[t,...e.flatMap(p=>p.path)],s=i.map(p=>ti(n.tiles[p],n.tiles)),r=s.map(p=>p.x),a=s.map(p=>p.y),o=(Math.min(...r)+Math.max(...r))/2,c=(Math.min(...a)+Math.max(...a))/2,l=Math.max(...a)-Math.min(...a)>Math.max(...r)-Math.min(...r),h=p=>{let x=ti(n.tiles[p],n.tiles);return l?{x:o+x.y-c,y:c-x.x+o}:x},u=i.map(h),f=Math.min(...u.map(p=>p.x))-12,d=Math.min(...u.map(p=>p.y))-12,g=Math.max(...u.map(p=>p.x))-f+12,v=Math.max(...u.map(p=>p.y))-d+12,m=h(t);return`<svg class="target-route" viewBox="${f} ${d} ${g} ${v}" role="img" aria-label="\u4ECE\u5F53\u524D\u4F4D\u7F6E\u5230\u53EF\u80FD\u843D\u70B9\u7684\u8DEF\u7EBF"><g stroke="#c2b695" stroke-width="2">${ds(n.tiles).map(p=>{let x=h(p.from),y=h(p.to);return`<path d="M${x.x},${x.y}L${y.x},${y.y}"/>`}).join("")}</g>${e.map((p,x)=>{let y=[t,...p.path].map(h),_=y.at(-1),R=ed(e,x);return`<g data-route-index="${x}"><polyline points="${y.map(T=>T.x+","+T.y).join(" ")}" fill="none" stroke="${R}" stroke-width="3.5" stroke-linejoin="round"/><circle cx="${_.x}" cy="${_.y}" r="${e.length>1?6:4}" fill="${R}" stroke="#fff1c9" stroke-width="1.5"/>${e.length>1?`<text x="${_.x}" y="${_.y+1.8}" class="target-route-letter">${Qu(x)}</text>`:""}</g>`}).join("")}<circle cx="${m.x}" cy="${m.y}" r="3.5" fill="#ac5137" stroke="#fff1c9" stroke-width="1.5"/></svg>`}function Ku(n,e){let t=n.tiles[e],i=n.s.ownership[e];return t.kind==="property"?Li({...t,buildingType:i?.buildingType},i?.level||0,i?n.char(n.s.players[i.player]).estateColor:"#9cae82"):Ac(t)}function Tm(n,e,t){let i=n.player.cards[e],s=Ft[i];if(!s)return"<p>\u8FD9\u5F20\u5361\u5DF2\u4E0D\u5728\u5361\u5305\u4E2D\u3002</p>";let r=n.player.human?n.cardHint(i):"\u7B49\u5F85\u81EA\u5DF1\u7684\u56DE\u5408",a=N1(n,e),o=s.target==="steps",c=s.target==="ahead";return`<div class="target-intro">${Ut(i)}<p>${gs(s.description)}</p></div>${c?'<p class="target-note">\u8DEF\u969C\u6309\u524D\u65B9\u4E3B\u8DEF\u653E\u7F6E\uFF0C\u4E0D\u968F\u5012\u9000\u65B9\u5411\u6539\u53D8\uFF1B\u5DF2\u6709\u8DEF\u969C\u6216\u89D2\u8272\u505C\u9760\u5904\u4E0D\u53EF\u653E\u7F6E\u3002</p>':o?'<p class="target-note">\u5C0F\u56FE\u7EA2\u70B9\u662F\u5F53\u524D\u4F4D\u7F6E\uFF1B\u5B57\u6BCD\u4E0E\u989C\u8272\u5BF9\u5E94\u540C\u4E00\u6761\u8DEF\u7EBF\u3002\u9014\u4E2D\u8DEF\u969C\u4F1A\u63D0\u524D\u622A\u505C\u3002\u9009\u5B9A\u6B65\u6570\u540E\u4ECD\u9700\u63B7\u9AB0\u51FA\u53D1\u3002</p>':'<p class="target-note">\u5DE6\u4FA7\u4E3A\u5F53\u524D\u5EFA\u7B51\uFF0C\u53F3\u4FA7\u4E3A\u4F7F\u7528\u540E\u7684\u6837\u5B50\u3002\u9009\u62E9\u76EE\u6807\u540E\u6D88\u8017\u4E00\u5F20\u5361\u3002</p>'}`+(o&&a.some(h=>h.results.length>1)?`<nav class="target-step-nav" aria-label="\u8DF3\u8F6C\u67E5\u770B\u63A7\u9AB0\u6B65\u6570">${a.map(h=>`<button data-act="cardStep" data-steps="${h.target}" aria-label="\u67E5\u770B ${h.target} \u6B65\u843D\u70B9">${h.target}\u6B65</button>`).join("")}</nav>`:"")+`<div class="target-grid${o&&a.some(h=>h.results.length>1)?" has-branch-routes":""}">${a.map(h=>{let u,f,d,g;if(o)f=`${h.target} \u6B65`,u=`<div class="target-landing-pictures">${h.results.map((v,m)=>`<figure data-route-destination="${v.id}" data-route-index="${m}" style="--route-color:${ed(h.results,m)}"><div class="target-destination">${Ku(n,v.id)}</div><figcaption>${h.results.length>1?`<b>${Qu(m)}</b>`:""}<span>${gs(n.tiles[v.id].name)}</span></figcaption></figure>`).join("")}</div>${k1(n,h.results)}`,d=h.results.map((v,m)=>{let p=t(v),x=gs(n.tiles[v.id].name)+" \xB7 ",y=p.startsWith(x)?p.slice(x.length):p;return`<p class="target-route-result${v.rent?" has-fee":""}" data-route-index="${m}" style="--route-color:${ed(h.results,m)}">${h.results.length>1?`<b>${Qu(m)}</b>`:""}<span>${y}</span></p>`}).join(""),g=`\u6307\u5B9A ${h.target} \u6B65`;else if(c)f=`\u524D\u65B9 ${h.target} \u683C`,u=`<div class="target-destination">${Ku(n,h.id)}<span class="target-block-prop">${Ut("block")}</span></div>`,d=`<p>${gs(n.tiles[h.id].name)}</p><small>${gs(h.reason||"\u53EF\u653E\u7F6E \xB7 \u9996\u540D\u7ECF\u8FC7\u8005\u4F1A\u88AB\u622A\u505C")}</small>`,g="\u653E\u7F6E\u8DEF\u969C";else{let v=n.tiles[h.id];f=v.name,h.obstacle?(u=`<div class="target-obstacle">${Ut("block")}<span>\u6E05\u9664\u8DEF\u969C</span></div>`,d="<p>\u6E05\u7406\u9053\u8DEF\uFF0C\u623F\u5C4B\u548C\u571F\u5730\u5F52\u5C5E\u4FDD\u6301\u539F\u6837\u3002</p>",g="\u6E05\u7406\u8DEF\u969C"):(u=`<div class="target-before-after"><div>${Ku(n,h.id)}<small>\u5F53\u524D ${h.level} \u7EA7</small></div><b>\u2192</b><div>${Li({...v,buildingType:h.afterType},h.afterLevel,n.char(n.s.players[h.afterOwner]).estateColor)}<small>${i==="steal"?"\u5F52\u4F60\u6240\u6709":"\u4F7F\u7528\u540E "+h.afterLevel+" \u7EA7"}</small></div></div>`,d=`<p>${gs(n.char(n.s.players[h.player]).name)} \xB7 ${h.level?Mt[Je(h)].name:"\u5F85\u5EFA\u7A7A\u5730"}</p><small>${i==="steal"?`\u6536\u8D2D ${wm(h.price)} \xB7 \u5269\u4F59\u73B0\u91D1 ${wm(n.player.money-h.price)}`:i==="build"?"\u514D\u8D39\u52A0\u76D6\uFF0C\u4E0D\u5360\u666E\u901A\u5EFA\u8BBE\u6B21\u6570":"\u53EA\u62C6\u4E00\u5C42\uFF0C\u571F\u5730\u5F52\u5C5E\u4FDD\u6301\u4E0D\u53D8"}</small>`,g=i==="build"?"\u514D\u8D39\u52A0\u76D6\u4E00\u5C42":i==="demolish"?"\u62C6\u53BB\u4E00\u5C42":"\u786E\u8BA4\u6536\u8D2D")}return`<article class="target-choice" ${o?`data-card-step="${h.target}"`:""}><h3 tabindex="-1">${gs(f)}${o&&h.results.length>1?'<span class="badge">'+h.results.length+" \u6761\u8DEF\u7EBF</span>":""}</h3>${u}<div class="target-outcomes">${d}</div>${r||h.reason?`<p class="target-disabled">${gs(r||h.reason)}</p>`:""}<button class="primary" data-act="useCard" data-index="${e}" data-target="${h.target}" ${r||h.reason?"disabled":""}>${g}</button></article>`}).join("")||'<div class="empty">\u9644\u8FD1\u6682\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u76EE\u6807\uFF0C\u5361\u7247\u4F1A\u4FDD\u7559\u3002</div>'}</div>`}var kr=n=>Math.round(n).toLocaleString("zh-CN");function F1(n){let e=n.s.players[0],t=n.owned(e).map(i=>({...i,value:n.cost(i.tile,i.level,Je(i)),sale:Math.round(n.cost(i.tile,i.level,Je(i))*.65)}));return{player:e,items:t.sort((i,s)=>(s.tile.id===e.pos)-(i.tile.id===e.pos)||i.tile.id-s.tile.id),value:t.reduce((i,s)=>i+s.value,0),sale:t.reduce((i,s)=>i+s.sale,0),vacant:t.filter(i=>!i.level).length}}function Am(n){let{player:e,items:t,value:i,sale:s,vacant:r}=F1(n),a=n.char(e),o=n.player.id===e.id&&e.human&&n.manageable(),c=o&&n.s.phase!=="debt",l=e.alive?n.player.id!==e.id?"\u7535\u8111\u56DE\u5408\uFF0C\u5F53\u524D\u4EC5\u67E5\u770B\u4F60\u7684\u5730\u4EA7\u3002":n.manageable()?"\u666E\u901A\u5EFA\u8BBE\u9700\u505C\u5230\u5BF9\u5E94\u5730\u5757\uFF0C\u6BCF\u6B21\u505C\u9760\u5EFA\u8BBE\u4E00\u6B21\u3002":"\u79FB\u52A8\u7ED3\u675F\u540E\u53EF\u7EE7\u7EED\u7ECF\u8425\u3002":"\u4F60\u5DF2\u9000\u51FA\u672C\u5C40\uFF0C\u67E5\u770B\u6700\u7EC8\u5730\u4EA7\u3002";return`<div class="deeds-owner"><span>${_t(a.id)}</span><div><strong>${a.name}\u7684\u5730\u4EA7\u7C3F</strong><small>${l}</small></div></div><div class="deeds-totals"><div><span>\u6211\u7684\u5730\u5757</span><b>${t.length}<small> \u5757 \xB7 ${r} \u5757\u5F85\u5EFA</small></b></div><div><span>\u5730\u4EA7\u4F30\u503C</span><b>${kr(i)}</b></div><div><span>\u5168\u90E8\u53D8\u5356\u53EF\u5F97</span><b>${kr(s)}</b></div></div><p class="deeds-explain">\u4F30\u503C\u6309\u8D2D\u5730\u4E0E\u5EFA\u8BBE\u6210\u672C\u8BA1\u5165\u51C0\u8D44\u4EA7\uFF1B\u53D8\u5356\u6309\u6BCF\u5757\u5730\u4EA7\u6210\u672C\u7684 65% \u56DB\u820D\u4E94\u5165\u3002</p>${t.length?t.map(h=>{let u=h.tile.id,f=c&&(n.canUpgrade(u)||n.canBuild(u)),d=e.buildSite===u&&e.pos===u&&n.s.phase==="end";return`<article class="row estate-row deed-card" data-deed="${u}" style="--estate-color:${a.estateColor}">${Li({...h.tile,buildingType:h.buildingType},h.level,a.estateColor)}<div class="row-head"><strong><i style="background:${Ui[h.tile.group].color}"></i>${h.tile.name}</strong><span class="badge">${h.level?h.level+" \u7EA7":"\u5F85\u5EFA\u7A7A\u5730"}</span></div>${Wa(n,u)}<div class="deed-values"><span>\u4F30\u503C <b>${kr(h.value)}</b></span><span>\u53D8\u5356 <b>+${kr(h.sale)}</b></span></div><div class="row-actions"><button class="secondary" data-act="locateDeed" data-id="${u}">\u5B9A\u4F4D\u4E0E\u8BE6\u60C5 \u2197</button><button class="${f?"primary":"secondary"}" data-act="${h.level?"upgrade":"chooseBuilding"}" data-id="${u}" ${f?"":"disabled"}>${h.level>=ji(h)?"\u5DF2\u8FBE\u4E0A\u9650":o?d?h.level?`\u52A0\u76D6 \xB7 ${kr(n.buildPrice(h.tile))}`:"\u9009\u62E9\u5EFA\u7B51":"\u505C\u5230\u8FD9\u91CC\u518D\u5EFA\u8BBE":"\u672C\u56DE\u5408\u4E0D\u53EF\u5EFA\u8BBE"}</button><button class="secondary" data-act="confirmDemolish" data-id="${u}" ${c&&d&&h.level?"":"disabled"}>\u62C6\u9664\u623F\u5C4B</button><button class="secondary" data-act="sell" data-id="${u}" ${o?"":"disabled"}>\u53D8\u5356 +${kr(h.sale)}</button></div></article>`}).join(""):`${pn("house","\u8D70\u5230\u65E0\u4E3B\u5730\u4EA7\u540E\u53EF\u4EE5\u4E70\u4E0B\u7B2C\u4E00\u5757\u5730\uFF1B\u7A7A\u5730\u5230\u8BBF\u540E\u53EF\u9009\u62E9\u4E03\u7C7B\u5EFA\u7B51\u3002","naishu")}<div class="empty">\u8FD8\u6CA1\u6709\u81EA\u5DF1\u7684\u5730\u5757\uFF0C\u4E0B\u4E00\u7AD9\u53BB\u770B\u770B\u5427\u3002</div>`}`}var zn=n=>n.toLocaleString("zh-CN"),Ic={deposit:{name:"\u5B58\u5165\u5976\u5E01",verb:"\u5B58\u5165",icon:"bank",field:"deposit"},withdraw:{name:"\u53D6\u51FA\u5B58\u6B3E",verb:"\u53D6\u51FA",icon:"recover",field:"deposit"},borrow:{name:"\u7533\u8BF7\u501F\u6B3E",verb:"\u501F\u5165",icon:"stocks",field:"loan"},repay:{name:"\u507F\u8FD8\u8D37\u6B3E",verb:"\u507F\u8FD8",icon:"shield",field:"loan"}};function td(n,e){let t=n.s.players[0];return Math.max(0,e==="deposit"?t.money:e==="withdraw"?t.deposit:e==="borrow"?1800-t.loan:e==="repay"?Math.min(t.money,t.loan):0)}function id(n,e,t){let i=n.s.players[0],s=Number(t),r={money:i.money,deposit:i.deposit,loan:i.loan},a=td(n,e),o="";Ic[e]?n.player.id!==i.id||!i.human?o="\u7535\u8111\u56DE\u5408\uFF0C\u5F53\u524D\u53EA\u67E5\u770B\u4F60\u7684\u8D26\u6237\u3002":n.s.round%7===3?o="\u5468\u4E09\u4F11\u606F\uFF0C\u4ECA\u5929\u4E0D\u80FD\u529E\u7406\u4E1A\u52A1\u3002":n.canBank()?n.s.phase==="debt"&&["deposit","repay"].includes(e)?o="\u7B79\u8D44\u671F\u95F4\u4EC5\u80FD\u53D6\u6B3E\u6216\u501F\u6B3E\u3002":!Number.isSafeInteger(s)||s<=0?o="\u8BF7\u8F93\u5165\u5927\u4E8E\u96F6\u7684\u6574\u6570\u91D1\u989D\u3002":s>a&&(o=e==="borrow"?`\u6700\u591A\u8FD8\u53EF\u501F ${zn(a)} \u5976\u5E01\u3002`:e==="withdraw"?`\u5B58\u6B3E\u4E0D\u8DB3\uFF0C\u6700\u591A\u53EF\u53D6 ${zn(a)} \u5976\u5E01\u3002`:e==="repay"&&i.loan<s?`\u5F53\u524D\u8D37\u6B3E\u4EC5 ${zn(i.loan)} \u5976\u5E01\u3002`:`\u73B0\u91D1\u4E0D\u8DB3\uFF0C\u8FD8\u5DEE ${zn(s-i.money)} \u5976\u5E01\u3002`):o="\u7ECF\u8FC7\u94F6\u884C\u540E\uFF0C\u672C\u56DE\u5408\u624D\u80FD\u529E\u7406\u4E1A\u52A1\u3002":o="\u8BF7\u9009\u62E9\u4E00\u79CD\u4E1A\u52A1\u3002";let c=null;return o||(c={...r},e==="deposit"&&(c.money-=s,c.deposit+=s),e==="withdraw"&&(c.money+=s,c.deposit-=s),e==="borrow"&&(c.money+=s,c.loan+=s),e==="repay"&&(c.money-=s,c.loan-=s)),{allowed:!o,reason:o,amount:s,limit:a,before:r,after:c}}function Rm(n,e,t){let i=id(n,e,t);return i.allowed?`<strong>\u529E\u7406\u540E\u4F59\u989D</strong><div class="bank-projection">${[["money","\u73B0\u91D1"],["deposit","\u5B58\u6B3E"],["loan","\u8D37\u6B3E"]].map(([s,r])=>`<div><span>${r}</span><small>${zn(i.before[s])} \u2192</small><b>${zn(i.after[s])}</b></div>`).join("")}</div>`:`<strong>\u6682\u65F6\u65E0\u6CD5\u529E\u7406</strong><p>${i.reason}</p>`}function Cm(n,{kind:e="deposit",amount:t="300"}={}){Ic[e]||(e="deposit");let i=n.s.players[0],s=id(n,e,t),r=n.char(i),a=Ic[e];return`${pn("bank","\u6BCF\u8F6E\u5B58\u6B3E\u5229\u606F 0.5%\uFF0C\u8D37\u6B3E\u5229\u606F 4%\uFF0C\u5747\u8BA1\u5165\u672C\u91D1\u3002\u65B0\u589E\u501F\u6B3E\u540E\uFF0C\u8D37\u6B3E\u4F59\u989D\u4E0D\u80FD\u8D85\u8FC7 1,800\u3002","naichong")}<div class="bank-console"><div class="bank-left"><div class="bank-account"><strong>${r.name}\u7684\u5C0F\u91D1\u5E93</strong><span>\u59CB\u7EC8\u663E\u793A\u4F60\u7684\u8D26\u6237</span><div>${[["money","\u73B0\u91D1"],["deposit","\u5B58\u6B3E"],["loan","\u8D37\u6B3E"]].map(([o,c])=>`<span>${c}<b>${zn(i[o])}</b></span>`).join("")}</div></div><div class="bank-tabs" aria-label="\u9009\u62E9\u94F6\u884C\u4E1A\u52A1">${Object.entries(Ic).map(([o,c])=>`<button data-act="bankKind" data-kind="${o}" aria-pressed="${e===o}">${Ut(c.icon)}<span>${c.name}</span></button>`).join("")}</div></div><div class="bank-right"><label class="bank-amount-label" for="bankAmount">${a.verb}\u91D1\u989D <small>\u672C\u8D26\u6237\u6700\u591A ${zn(s.limit)}</small></label><input id="bankAmount" class="bank-amount" type="number" min="1" step="1" inputmode="numeric" value="${Number.isSafeInteger(Number(t))&&Number(t)>=0?t:""}" aria-label="\u94F6\u884C\u64CD\u4F5C\u91D1\u989D"><div class="bank-shortcuts">${[100,300,1e3].map(o=>`<button data-act="bankQty" data-amount="${o}">${zn(o)}</button>`).join("")}<button data-act="bankQty" data-amount="max">\u6700\u5927\u91D1\u989D</button></div><div id="bankPreview" class="bank-preview" aria-live="polite">${Rm(n,e,t)}</div><button id="bankConfirm" class="primary bank-confirm" data-act="bank" data-kind="${e}" ${s.allowed?"":"disabled"}>\u786E\u8BA4${a.verb}</button></div></div><p class="bank-note">\u5468\u4E09\u4F11\u606F\u3002\u5230\u8BBF\u94F6\u884C\u540E\u53EF\u5728\u672C\u56DE\u5408\u5185\u591A\u6B21\u529E\u7406\u4E1A\u52A1\uFF1B\u67E5\u770B\u8D26\u6237\u4E0D\u4F1A\u83B7\u5F97\u529E\u7406\u8D44\u683C\u3002</p>`}function nd(n,e,t=document){let i=t.querySelector("#bankAmount"),s=t.querySelector("#bankPreview"),r=t.querySelector("#bankConfirm");if(!i||!s||!r)return;let a=id(n,e,i.value);s.innerHTML=Rm(n,e,i.value),r.disabled=!a.allowed}var Ys=n=>Math.round(n).toLocaleString("zh-CN"),Fr=n=>(n>0?"+":"")+Ys(n),qs=n=>n===null?"":n>0?"profit":n<0?"loss":"flat",sd=n=>n===null?"\u2014":Fr(n),Pm=n=>n===null?"\u672A\u77E5":Ys(n),Im=n=>n===null?"\u2014":n.toLocaleString("zh-CN",{maximumFractionDigits:2});function Dm(n,{window:e=20,held:t=!1}={}){let i=n.s.players[0],s=n.s,r=n.portfolio(i),a=n.player.id===i.id&&i.human&&n.manageable()&&s.round%7!==0,o=a&&s.phase!=="debt",c=r.unrealized===null||r.unpriced?null:r.realized+r.unrealized;return`${pn("stocks","\u770B\u4E70\u5165\u5747\u4EF7\u4E0E\u5F53\u524D\u4EF7\u7684\u5DEE\u989D\uFF1B\u7EA2\u8272\u4E3A\u76C8\u5229\uFF0C\u7EFF\u8272\u4E3A\u4E8F\u635F\u3002\u5DF2\u5B9E\u73B0\u76C8\u4E8F\u53EA\u5728\u5356\u51FA\u65F6\u7ED3\u7B97\u3002","naishu")}<div class="portfolio-total"><span>\u80A1\u7968\u7D2F\u8BA1\u76C8\u4E8F${i.stockLegacy?"\uFF08\u66F4\u65B0\u540E\u5DF2\u77E5\u90E8\u5206\uFF09":""}</span><strong class="${qs(c)}">${sd(c)}</strong><small>\u5DF2\u5B9E\u73B0\u76C8\u4E8F \uFF0B \u5F53\u524D\u6301\u4ED3\u6D6E\u76C8</small></div><div class="portfolio-summary"><div><span>\u6301\u4ED3\u5E02\u503C</span><strong>${Ys(r.value)}</strong></div><div><span>\u6301\u4ED3\u6210\u672C</span><strong>${Pm(r.cost)}</strong></div><div><span>\u6301\u4ED3\u6D6E\u52A8\u76C8\u4E8F</span><strong class="${qs(r.unrealized)}">${sd(r.unrealized)}</strong></div><div><span>\u5356\u51FA\u5DF2\u5B9E\u73B0\u76C8\u4E8F</span><strong class="${qs(r.realized)}">${Fr(r.realized)}</strong></div></div>${i.stockLegacy||r.unknown||r.unpriced?'<p class="panel-note">\u65E7\u5B58\u6863\u7684\u5386\u53F2\u76C8\u4E8F\u4ECE\u672C\u6B21\u66F4\u65B0\u540E\u8D77\u8BB0\u3002\u65E7\u6301\u4ED3\u65E0\u4E70\u5165\u4EF7\u65F6\uFF0C\u6210\u672C\u4E0E\u6D6E\u76C8\u663E\u793A\u672A\u77E5\uFF0C\u5356\u51FA\u4E0D\u8BA1\u5165\u5DF2\u77E5\u76C8\u4E8F\uFF1B\u6E05\u4ED3\u540E\u91CD\u65B0\u4E70\u5165\u5373\u53EF\u5B8C\u6574\u8BB0\u8D26\u3002</p>':""}<div class="market-toolbar"><span class="market-status">${s.round%7===0?"\u5468\u65E5\u4F11\u5E02 \xB7 \u53EF\u67E5\u770B\u4E0D\u53EF\u4EA4\u6613":n.player.id!==i.id?"\u7535\u8111\u56DE\u5408 \xB7 \u6682\u505C\u67E5\u770B\u6211\u7684\u6301\u4ED3":"\u4EA4\u6613\u5F00\u653E \xB7 \u7B2C "+s.round+" \u8F6E"}</span><button class="secondary" data-act="stockFilter">${t?"\u67E5\u770B\u5168\u90E8\u80A1\u7968":"\u53EA\u770B\u6211\u7684\u6301\u4ED3"}</button><label>\u8D70\u52BF<select id="stockWindow" aria-label="\u8D70\u52BF\u89C2\u5BDF\u6570\u91CF">${[5,10,20].map(l=>`<option value="${l}" ${e===l?"selected":""}>\u8FD1 ${l} \u6B21\u62A5\u4EF7</option>`).join("")}</select></label></div><p class="stock-explain">\u5747\u4EF7\u6309\u52A0\u6743\u5E73\u5747\u6210\u672C\u8BA1\u7B97\uFF1B\u65E0\u624B\u7EED\u8D39\u3002\u6D6E\u76C8\u968F\u62A5\u4EF7\u53D8\u5316\uFF0C\u51C0\u8D44\u4EA7\u5DF2\u5305\u542B\u6301\u4ED3\u5E02\u503C\u3002\u6700\u8FD140\u7B14\u6210\u4EA4\u4FDD\u7559\uFF0C\u5DF2\u5B9E\u73B0\u76C8\u4E8F\u7D2F\u8BA1\u4E0D\u6E05\u96F6\u3002</p>${s.market.map((l,h)=>{let u=r.positions[h];if(t&&!u.qty)return"";let f=l.history.slice(-e),d=f.length>1?f:[l.price,l.price],g=Math.min(...d,u.average??l.price)*.95,v=Math.max(...d,u.average??l.price)*1.05,m=Math.max(1,v-g),p=R=>52-(R-g)/m*44,x=d.map((R,T)=>`${12+T*316/(d.length-1)},${p(R)}`).join(" "),y=u.average===null?"":`<line x1="12" x2="328" y1="${p(u.average)}" y2="${p(u.average)}" stroke="#9c762e" stroke-dasharray="5 4"/><text x="16" y="${Math.max(11,p(u.average)-4)}" fill="#735423" font-size="9">\u6210\u672C ${Im(u.average)}</text>`,_=l.change/(l.price-l.change)*100;return`<section class="stock-card" data-stock="${h}"><div class="company-seal">${Ut(["tea","theater","factory","vehicle"][h])}</div><div class="row-head"><strong>${l.name}</strong><span class="stock-price ${qs(l.change)}">${l.price}<small>${Fr(l.change)} / ${_>=0?"+":""}${_.toFixed(1)}%</small></span></div><svg class="sparkline" viewBox="0 0 340 62" role="img" aria-label="${l.name}\u62A5\u4EF7\u8D70\u52BF${u.average===null?"":"\u4E0E\u6301\u4ED3\u6210\u672C\u7EBF"}">${y}<polyline points="${x}" stroke="${l.change>=0?"#b24a35":"#3f8362"}" stroke-width="2.5" fill="none"/><circle cx="328" cy="${p(l.price)}" r="3" fill="#805c2d"/></svg><div class="stock-metrics"><div><span>\u6301\u6709\u80A1\u6570</span><b>${u.qty}</b></div><div><span>\u4E70\u5165\u5747\u4EF7</span><b>${Im(u.average)}</b></div><div><span>\u6301\u4ED3\u5E02\u503C</span><b>${Ys(u.value)}</b></div><div><span>\u6301\u4ED3\u6D6E\u76C8</span><b class="${qs(u.unrealized)}">${sd(u.unrealized)}${u.rate===null?"":`<small>${u.rate>=0?"+":""}${u.rate.toFixed(1)}%</small>`}</b></div><div><span>\u5269\u4F59\u6210\u672C</span><b>${Pm(u.cost)}</b></div><div><span>\u5DF2\u5B9E\u73B0\u76C8\u4E8F</span><b class="${qs(u.realized)}">${Fr(u.realized)}</b></div></div><div class="quantity-shortcuts" aria-label="${l.name}\u5FEB\u6377\u80A1\u6570">${[1,5,10].map(R=>`<button data-act="stockQty" data-id="${h}" data-qty="${R}">${R}\u80A1</button>`).join("")}<button data-act="stockQty" data-id="${h}" data-qty="maxBuy">\u6700\u591A\u4E70</button><button data-act="stockQty" data-id="${h}" data-qty="maxSell">\u5168\u90E8\u5356</button></div><div class="input-row"><input id="qty${h}" data-stock-qty="${h}" type="number" min="1" max="10000" value="1" step="1" inputmode="numeric" aria-label="${l.name}\u4EA4\u6613\u80A1\u6570"><button class="secondary" data-act="trade" data-id="${h}" data-sign="1" ${!o||i.money<l.price?"disabled":""}>\u4E70\u5165</button><button class="secondary" data-act="trade" data-id="${h}" data-sign="-1" ${!a||!u.qty?"disabled":""}>\u5356\u51FA</button></div><p id="stockPreview${h}" class="trade-preview" aria-live="polite">\u4E70 1 \u80A1\u9700 ${l.price} \u5976\u5E01\uFF1B\u5356\u51FA\u524D\u53EF\u9884\u4F30\u672C\u7B14\u76C8\u4E8F\u3002</p></section>`}).join("")||'<div class="empty">\u8FD8\u6CA1\u6709\u80A1\u7968\u6301\u4ED3\u3002\u5207\u6362\u201C\u67E5\u770B\u5168\u90E8\u80A1\u7968\u201D\u6D4F\u89C8\u3002</div>'}<h3>\u6700\u8FD1\u6210\u4EA4</h3>${i.stockTrades.length?`<div class="trade-history">${i.stockTrades.slice(0,16).map(l=>`<div><span>\u7B2C ${l.round} \u8F6E \xB7 ${s.market[l.stock].short}</span><b>${l.qty>0?"\u4E70\u5165":"\u5356\u51FA"} ${Math.abs(l.qty)}\u80A1 \xD7 ${l.price}</b><span class="${qs(l.profit)}">${l.qty>0?"\u652F\u51FA "+Ys(l.qty*l.price):l.profit===null?"\u6210\u672C\u672A\u77E5":"\u672C\u7B14 "+Fr(l.profit)}</span></div>`).join("")}</div>`:'<p class="stock-explain">\u6210\u4EA4\u540E\u4F1A\u5728\u8FD9\u91CC\u8BB0\u5F55\u80A1\u6570\u3001\u4EF7\u683C\u4E0E\u5356\u51FA\u76C8\u4E8F\u3002</p>'}`}function Dc(n,e,t=document){let i=t.querySelector("#qty"+e),s=t.querySelector(`[data-stock="${e}"]`);if(!i||!s)return;let r=Number(i.value),a=n.position(e,n.s.players[0]),o=Number.isInteger(r)&&r>0&&r<=1e4,c=n.player.id===0&&n.player.human&&n.manageable()&&n.s.round%7!==0;s.querySelector('[data-sign="1"]').disabled=!o||!c||n.s.phase==="debt"||r*a.price>n.s.players[0].money,s.querySelector('[data-sign="-1"]').disabled=!o||!c||r>a.qty;let l=a.cost===null?null:r===a.qty?a.cost:Math.round(a.cost*r/a.qty),h=l===null?null:r*a.price-l;t.querySelector("#stockPreview"+e).textContent=o?`\u4E70\u5165\u9700 ${Ys(r*a.price)}\uFF1B${r>a.qty?"\u6301\u4ED3\u4E0D\u8DB3\u4EE5\u5356\u51FA\u8BE5\u6570\u91CF":`\u5356\u51FA\u56DE\u6B3E ${Ys(r*a.price)}\uFF0C\u672C\u7B14${h===null?"\u76C8\u4E8F\u672A\u77E5":"\u76C8\u4E8F "+Fr(h)}`}\u3002`:"\u8BF7\u8F93\u5165 1\u201410,000 \u7684\u6574\u6570\u80A1\u6570\u3002"}var Hn={easy:{name:"\u8F7B\u677E",reserve:650,cardThreshold:1/0,description:"\u7B80\u5355\u4E70\u5730\uFF0C\u8F83\u5C11\u7528\u5361\uFF0C\u5C94\u8DEF\u968F\u610F\u9009\u62E9\uFF0C\u9002\u5408\u9996\u6B21\u8BD5\u73A9\u3002"},normal:{name:"\u6807\u51C6",reserve:400,cardThreshold:55,description:"\u6BD4\u8F83\u843D\u70B9\u98CE\u9669\u3001\u7ECF\u8425\u8857\u533A\u3001\u4F7F\u7528\u9053\u5177\u548C\u4E70\u5356\u80A1\u7968\u3002"},hard:{name:"\u9AD8\u624B",reserve:550,cardThreshold:25,description:"\u8BC4\u4F30\u4E0B\u4E00\u8F6E\u79DF\u91D1\u3001\u4F18\u5148\u8FDE\u7247\u5EFA\u8BBE\uFF0C\u7EC4\u5408\u7528\u5361\u5E76\u7BA1\u7406\u73B0\u91D1\u548C\u80A1\u7968\u3002"}},rd=n=>Hn[n.aiDifficulty()]||Hn.normal;function Lm(n,e,t="auto"){let i=t!=="auto"&&t==="landscape"!=n>=e;return{width:i?e:n,height:i?n:e,rotated:i}}function ad(n,e,t,i=!1){return i?{x:e-t.top,y:t.right-n}:{x:n-t.left,y:e-t.top}}function Uc(n,e,t){return ad(n,e,t.getBoundingClientRect(),document.getElementById("app")?.dataset.rotated==="true")}function B1(n){for(let e of["sheetBackdrop","sheet","toast","bootError"]){let t=n.ownerDocument?.getElementById(e);t&&!n.contains(t)&&n.appendChild(t)}}var Lc=class{constructor(e,t,{notify:i=()=>{},resize:s=()=>{}}={}){Object.assign(this,{root:e,button:t,notify:i,resize:s,mode:"auto",rules:[]});let r=o=>{for(let c of o)c.type===4&&/(width|height|orientation)/.test(c.conditionText)?this.rules.push({rule:c,condition:c.conditionText}):c.cssRules&&r(c.cssRules)};for(let o of document.styleSheets)try{r(o.cssRules)}catch{}t.addEventListener("click",()=>this.toggle()),window.addEventListener("resize",()=>this.apply()),document.addEventListener("fullscreenchange",()=>this.apply());let a=()=>{this.apply(),requestAnimationFrame(()=>this.apply())};window.addEventListener("orientationchange",a),window.screen?.orientation?.addEventListener?.("change",a),window.visualViewport?.addEventListener("resize",()=>this.apply()),this.apply()}apply(){B1(this.root);let e=window.innerWidth,t=window.innerHeight,i=Lm(e,t,this.mode);this.root.dataset.rotated=String(i.rotated),this.root.style.setProperty("--game-vh",i.height/100+"px"),this.root.style.setProperty("--game-vw",i.width/100+"px"),Object.assign(this.root.style,{position:i.rotated?"fixed":"",left:i.rotated?e+"px":"",top:i.rotated?"0":"",width:i.rotated?i.width+"px":"",height:i.rotated?i.height+"px":"",minHeight:i.rotated?"0":"",transform:i.rotated?"rotate(90deg)":"",transformOrigin:"0 0"});for(let{rule:r,condition:a}of this.rules){if(!i.rotated){r.media.mediaText=a;continue}let o=a.replace(/\(orientation:\s*(portrait|landscape)\)/g,(c,l)=>i.width>=i.height==(l==="landscape")?"(min-width: 0px)":"(max-width: 0px)").replace(/\((max|min)-(width|height):\s*([\d.]+)px\)/g,(c,l,h,u)=>(l==="max"?i[h]<=+u:i[h]>=+u)?"(min-width: 0px)":"(max-width: 0px)");r.media.mediaText=window.matchMedia(o).matches?"all":"not all"}let s=i.width>=i.height;this.button.textContent=s?"\u7AD6\u5C4F":"\u6A2A\u5C4F",this.button.setAttribute("aria-label",s?"\u5207\u6362\u7AD6\u5C4F":"\u5207\u6362\u6A2A\u5C4F"),this.button.title=this.button.getAttribute("aria-label"),this.button.setAttribute("aria-pressed",String(this.mode!=="auto")),requestAnimationFrame(()=>{this.resize(),window.dispatchEvent(new Event("gamelayoutchange"))})}async toggle(){let e=Lm(innerWidth,innerHeight,this.mode);if(this.mode=e.width>=e.height?"portrait":"landscape",this.apply(),matchMedia("(pointer: coarse)").matches){try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen(),await screen.orientation?.lock?.(this.mode)}catch{}this.apply()}this.notify(this.mode==="landscape"?"\u5DF2\u5207\u6362\u6A2A\u5C4F\uFF0C\u6A2A\u63E1\u624B\u673A\u6E38\u73A9\uFF1B\u518D\u70B9\u53EF\u56DE\u7AD6\u5C4F\u3002":"\u5DF2\u5207\u6362\u7AD6\u5C4F\u3002")}};var O1={start:["\u8D77\u70B9","#a18a3c"],bank:["\u94F6\u884C","#477eb5"],stock:["\u8BC1\u5238\u6240","#7b65b0"],shop:["\u8865\u7ED9\u7AD9","#cf8342"],hospital:["\u7597\u517B\u9662","#cc615d"],tax:["\u6E05\u6D01\u7AD9","#558e88"],rest:["\u5C0F\u7A9D","#5b8b55"],spirit:["\u795E\u6BBF","#af8535"],event:["\u4E8B\u4EF6\u5E7F\u573A","#ae6686"]},vt=(n,e,t)=>({icon:n,title:e,text:t});function z1(n,e){let t=n.s.players[0],i=n.player.id===t.id&&t.human&&n.manageable(),s=g=>Math.round(g*(t.spirit==="fortune"?1.25:1)),r=g=>n.payment(g,null,t),[a,o]=O1[e.kind],c,l,h,u,f={tone:"neutral",text:"\u516C\u5171\u5730\u70B9\u4E0D\u53EF\u8D2D\u4E70\uFF1B\u79FB\u52A8\u5230\u8FD9\u91CC\u65F6\u6309\u89C4\u5219\u89E6\u53D1\u3002"},d=null;return e.kind==="start"?(c="+"+s(400+(On(n,t,"naiwa")?80:0)),l="\u5976\u5E01 \xB7 \u6B63\u5411\u7ECF\u8FC7\u5956\u52B1",h="\u7ED5\u5C9B\u7ECF\u8425\u4E00\u5708\uFF0C\u518D\u5E26\u7740\u8865\u7ED9\u51FA\u53D1\u3002",u=[vt("dice","\u7ECF\u8FC7\u5C31\u80FD\u9886","\u6B63\u5411\u7ECF\u8FC7\u6216\u505C\u5728\u8D77\u70B9\u65F6\u53D1\u653E\uFF0C\u5012\u9000\u4E0D\u9886\u5956\u3002"),vt("tea","\u989D\u5916 25 \u70B9\u5238","\u70B9\u5238\u6700\u591A\u6301\u6709 150\uFF0C\u53EF\u7528\u4E8E\u8865\u7ED9\u7AD9\u4E70\u5361\u3002"),vt("house","\u6309\u4F60\u7684\u5F53\u524D\u72B6\u6001\u9884\u89C8","\u5DF2\u8BA1\u5165\u5976\u86D9\u5929\u8D4B\u4E0E\u8D22\u8FD0\uFF1B\u518D\u6B21\u7ECF\u8FC7\u65F6\u91CD\u65B0\u7ED3\u7B97\u3002")]):e.kind==="bank"?(c="0.5%",l="\u6BCF\u8F6E\u5B58\u6B3E\u5229\u606F",h="\u628A\u73B0\u91D1\u5B58\u8D77\u6765\uFF0C\u4E5F\u80FD\u501F\u6B3E\u5468\u8F6C\u3002",u=[vt("bank","\u7ECF\u8FC7\u540E\u5F00\u653E\u672C\u56DE\u5408\u4E1A\u52A1","\u53EF\u5B58\u6B3E\u3001\u53D6\u6B3E\u3001\u501F\u6B3E\u6216\u8FD8\u6B3E\uFF1B\u70B9\u51FB\u5730\u56FE\u672C\u8EAB\u4E0D\u4F1A\u83B7\u5F97\u529E\u7406\u8D44\u683C\u3002"),vt("stocks","\u5B58\u6B3E 0.5% \xB7 \u8D37\u6B3E 4%","\u6BCF\u8F6E\u8BA1\u606F\u5E76\u8BA1\u5165\u672C\u91D1\u3002\u65B0\u589E\u501F\u6B3E\u540E\u7684\u8D37\u6B3E\u4F59\u989D\u4E0A\u9650 1,800\u3002"),vt("slow","\u5468\u4E09\u4F11\u606F","\u6BCF\u4E03\u8F6E\u7684\u7B2C\u4E09\u8F6E\u4E0D\u529E\u7406\u4E1A\u52A1\uFF0C\u4ECD\u53EF\u67E5\u770B\u8D26\u6237\u3002")],f={tone:n.s.round%7===3?"closed":i&&n.canBank()?"ready":"neutral",text:n.s.round%7===3?"\u4ECA\u5929\u5468\u4E09\uFF0C\u94F6\u884C\u4F11\u606F\u3002":i?n.canBank()?"\u672C\u56DE\u5408\u5DF2\u5230\u8BBF\uFF0C\u53EF\u4EE5\u529E\u7406\u94F6\u884C\u4E1A\u52A1\u3002":"\u5C1A\u672A\u5230\u8BBF\u94F6\u884C\uFF0C\u5F53\u524D\u53EA\u80FD\u67E5\u770B\u8D26\u6237\u3002":"\u7B49\u5230\u4F60\u7684\u7ECF\u8425\u9636\u6BB5\uFF0C\u53EF\u67E5\u770B\u81EA\u5DF1\u7684\u8D26\u6237\u3002"},d={panel:"bank",label:"\u67E5\u770B\u6211\u7684\u94F6\u884C\u8D26\u6237",enabled:i}):e.kind==="stock"?(c="4",l="\u5BB6\u5976\u5BB6\u4F01\u4E1A",h="\u770B\u8D70\u52BF\u3001\u7B97\u6210\u672C\uFF0C\u518D\u51B3\u5B9A\u4E70\u5165\u6216\u5356\u51FA\u3002",u=[vt("stocks","\u62A5\u4EF7\u6BCF\u8F6E\u66F4\u65B0","\u56DB\u5BB6\u4F01\u4E1A\u884C\u60C5\u4E0D\u540C\uFF0C\u4E5F\u4F1A\u53D7\u5230\u968F\u673A\u4E8B\u4EF6\u5F71\u54CD\u3002"),vt("bank","\u81EA\u5DF1\u7684\u7ECF\u8425\u9636\u6BB5\u53EF\u8FDC\u7A0B\u4EA4\u6613","\u65E0\u9700\u5230\u8BC1\u5238\u6240\uFF1B\u5468\u65E5\u4F11\u5E02\uFF0C\u7B79\u6B3E\u65F6\u53EF\u4EE5\u5356\u80A1\u3002"),vt("house","\u76C8\u4E8F\u6E05\u695A\u8BB0\u8D26","\u80A1\u7968\u9875\u5C55\u793A\u4E70\u5165\u5747\u4EF7\u3001\u6301\u4ED3\u6D6E\u76C8\u548C\u5356\u51FA\u5DF2\u5B9E\u73B0\u76C8\u4E8F\u3002")],f={tone:n.s.round%7===0?"closed":i?"ready":"neutral",text:n.s.round%7===0?"\u4ECA\u5929\u5468\u65E5\uFF0C\u4F11\u5E02\u671F\u95F4\u4ECD\u53EF\u67E5\u770B\u6301\u4ED3\u3002":i?"\u4EA4\u6613\u65E5\u5F00\u653E\uFF0C\u53EF\u67E5\u770B\u884C\u60C5\u4E0E\u6301\u4ED3\u3002":"\u7535\u8111\u56DE\u5408\uFF1A\u6253\u5F00\u884C\u60C5\u53EA\u67E5\u770B\u4F60\u7684\u6301\u4ED3\u3002"},d={panel:"stocks",label:"\u67E5\u770B\u80A1\u5E02\u4E0E\u6211\u7684\u6301\u4ED3",enabled:!0}):e.kind==="shop"?(c="+30",l="\u70B9\u5238 \xB7 \u505C\u9760\u5956\u52B1",h="\u505C\u9760\u9886\u968F\u673A\u5361\uFF0C\u5230\u5E97\u6311\u9009\u4E0B\u6B21\u51FA\u884C\u7684\u88C5\u5907\u3002",u=[vt("tea","\u505C\u9760\u8865\u7ED9","\u70B9\u5238\u6700\u591A 150\uFF1B\u53E6\u9001\u4E00\u5F20\u968F\u673A\u5361\uFF0C\u6EE1\u5305\u4F1A\u6309\u89C4\u5219\u8865\u507F\u5976\u5E01\u3002"),vt("dice","\u7528\u70B9\u5238\u9009\u5361","\u6BCF\u56DE\u5408\u6700\u591A\u4E70 2 \u5F20\uFF0C\u5361\u5305\u6700\u591A\u5BB9\u7EB3 15 \u5F20\u3002"),vt("vehicle","\u7528\u5976\u5E01\u5347\u7EA7\u4EA4\u901A\u5DE5\u5177","\u81EA\u884C\u8F66\u53EF\u9009 1\u20142 \u9897\u9AB0\u5B50\uFF0C\u5C0F\u8F66\u53EF\u9009 1\u20143 \u9897\u3002")],f={tone:i&&n.canShop()?"ready":"neutral",text:i&&n.canShop()?"\u4F60\u5DF2\u5230\u5E97\uFF0C\u53EF\u4EE5\u8D2D\u4E70\u9053\u5177\u548C\u4EA4\u901A\u5DE5\u5177\u3002":"\u9700\u5728\u81EA\u5DF1\u7684\u7ECF\u8425\u9636\u6BB5\u505C\u5728\u8865\u7ED9\u7AD9\uFF0C\u624D\u80FD\u8D2D\u4E70\u3002"},d={panel:"shop",label:i&&n.canShop()?"\u6311\u9009\u9053\u5177\u4E0E\u4EA4\u901A\u5DE5\u5177":"\u5148\u6D4F\u89C8\u8865\u7ED9\u5546\u54C1",enabled:i}):e.kind==="hospital"?(c="\u2212"+r(100),l="\u5976\u5E01 \xB7 \u6309\u4F60\u7684\u5F53\u524D\u72B6\u6001",h="\u505C\u9760\u540E\u652F\u4ED8\u7597\u517B\u8D39\uFF0C\u5E76\u4F11\u517B\u4E00\u56DE\u5408\u3002",u=[vt("recover","\u4E0B\u6B21\u884C\u52A8\u4F11\u517B\u4E00\u6B21","\u4E0D\u4F1A\u56E0\u8DEF\u8FC7\u800C\u5165\u9662\uFF0C\u53EA\u6709\u505C\u9760\u624D\u89E6\u53D1\u3002"),vt("tea","\u91CE\u751F\u72D7\u5976\u53EF\u6062\u590D","\u4E0B\u56DE\u5408\u63B7\u9AB0\u524D\u7528\u5361\uFF0C\u53EF\u79FB\u9664\u4F11\u517B\u72B6\u6001\u3002"),vt("bank","\u8D39\u7528\u6309\u5230\u8FBE\u65F6\u72B6\u6001\u7ED3\u7B97","\u5DF2\u8BA1\u5165\u5F53\u524D\u5929\u8D4B\u4E0E\u9709\u8FD0\uFF1B\u8D44\u91D1\u4E0D\u8DB3\u65F6\u5148\u7B79\u6B3E\u3002")]):e.kind==="tax"?(c="\u2212"+r(180),l="\u5976\u5E01 \xB7 \u6309\u4F60\u7684\u5F53\u524D\u72B6\u6001",h="\u505C\u9760\u65F6\u7F34\u7EB3\u6E05\u6D01\u8D39\uFF0C\u8857\u9053\u4E5F\u8981\u6709\u4EBA\u7167\u987E\u3002",u=[vt("recover","\u505C\u9760\u6536\u8D39\uFF0C\u7ECF\u8FC7\u4E0D\u6536","\u6BCF\u6B21\u5230\u8FBE\u7ED3\u7B97\uFF0C\u516C\u5171\u5730\u70B9\u4E0D\u4F1A\u53D8\u6210\u79C1\u4EBA\u5730\u4EA7\u3002"),vt("shield","\u6309\u89D2\u8272\u72B6\u6001\u8BA1\u7B97\u8D39\u7528","\u5976\u8336\u5929\u8D4B\u53EF\u51CF\u534A\uFF0C\u9709\u8FD0\u4F1A\u589E\u52A0\u8D39\u7528\u3002"),vt("bank","\u4E0D\u8DB3\u65F6\u53EF\u4EE5\u7B79\u6B3E","\u5B58\u6B3E\u81EA\u52A8\u8865\u8DB3\u73B0\u91D1\uFF1B\u4ECD\u4E0D\u8DB3\u65F6\u53EF\u53D6\u6B3E\u3001\u5356\u80A1\u6216\u53D8\u5356\u5730\u4EA7\u3002")]):e.kind==="rest"?(c="+"+s(120),l="\u5976\u5E01 \xB7 \u6309\u4F60\u7684\u5F53\u524D\u72B6\u6001",h="\u56DE\u5230\u5C0F\u7A9D\u9886\u53D6\u8865\u8D34\uFF0C\u4E0B\u4E00\u56DE\u5408\u7167\u5E38\u51FA\u53D1\u3002",u=[vt("house","\u505C\u9760\u9886\u53D6\u8865\u8D34","\u8DEF\u8FC7\u4E0D\u53D1\u653E\uFF0C\u4E5F\u4E0D\u4F1A\u989D\u5916\u6682\u505C\u4E0B\u4E00\u6B21\u884C\u52A8\u3002"),vt("tea","\u8D22\u8FD0\u8BA9\u8865\u8D34\u66F4\u591A","\u5F53\u524D\u9884\u89C8\u5DF2\u8BA1\u5165\u8D22\u8FD0\u7684\u6536\u5165\u52A0\u6210\u3002"),vt("dice","\u5148\u89C4\u5212\uFF0C\u518D\u51FA\u53D1","\u8865\u7ED9\u540E\u53EF\u7EE7\u7EED\u6574\u7406\u5361\u5305\uFF0C\u51C6\u5907\u4E0B\u4E00\u56DE\u5408\u3002")]):e.kind==="spirit"?(c="3",l="\u79CD\u795E\u7075 \xB7 \u968F\u673A\u76F8\u9047",h="\u8D22\u8FD0\u3001\u9709\u8FD0\u6216\u5B88\u62A4\uFF0C\u966A\u4F34\u63A5\u4E0B\u6765\u7684\u65C5\u9014\u3002",u=[vt("stocks","\u5927\u7B11\u8D22\u795E","\u975E\u4EA4\u6613\u6536\u5165\u589E\u52A0 25%\u3002"),vt("slow","\u5976\u6CE1\u9709\u795E","\u79DF\u91D1\u548C\u8D39\u7528\u589E\u52A0 25%\u3002"),vt("shield","\u5976\u86CB\u5B88\u62A4","\u62B5\u6321\u4E00\u6B21\u8D1F\u9762\u4E8B\u4EF6\u6216\u9709\u8FD0\uFF1B\u795E\u7075\u6301\u7EED\u4E09\u4E2A\u540E\u7EED\u56DE\u5408\uFF0C\u540C\u7C7B\u5237\u65B0\u3001\u5F02\u7C7B\u66FF\u6362\u3002")]):(c="?",l="\u968F\u673A\u4E8B\u4EF6",h="\u5976\u4F34\u3001\u5927\u7B11\u548C\u610F\u5916\uFF0C\u6BCF\u6B21\u505C\u9760\u90FD\u6709\u65B0\u6D88\u606F\u3002",u=[vt("theater","\u505C\u9760\u63ED\u6653\u4E8B\u4EF6","\u7ECF\u8FC7\u4E0D\u4F1A\u89E6\u53D1\uFF0C\u67E5\u770B\u5730\u56FE\u4E5F\u4E0D\u4F1A\u63D0\u524D\u62BD\u53D6\u3002"),vt("stocks","\u53EF\u80FD\u5F71\u54CD\u8D44\u91D1\u4E0E\u884C\u60C5","\u6536\u5165\u3001\u635F\u5931\u3001\u4F11\u517B\u6216\u4F01\u4E1A\u62A5\u4EF7\uFF0C\u4EE5\u5F53\u6B21\u4E8B\u4EF6\u8BF4\u660E\u4E3A\u51C6\u3002"),vt("shield","\u5B88\u62A4\u62B5\u6321\u8D1F\u9762\u5F71\u54CD","\u5B88\u62A4\u53EF\u62B5\u6321\u8D1F\u9762\u4E8B\u4EF6\uFF0C\u89E6\u53D1\u540E\u4F1A\u6D88\u8017\u3002")]),{type:a,accent:o,value:c,unit:l,summary:h,rules:u,status:f,action:d}}function Um(n,e){let t=z1(n,e);return`<div class="landmark-detail" style="--landmark-accent:${t.accent}"><div class="landmark-hero"><div class="landmark-model">${Ac(e)}</div><div class="landmark-intro"><span class="landmark-type">\u516C\u5171\u5730\u70B9 \xB7 ${t.type}</span><strong>${t.value}</strong><span class="landmark-unit">${t.unit}</span><p>${t.summary}</p></div></div><ul class="landmark-rules">${t.rules.map(i=>`<li><span>${Ut(i.icon)}</span><div><b>${i.title}</b><p>${i.text}</p></div></li>`).join("")}</ul><p class="landmark-status ${t.status.tone}">${t.status.text}</p>${t.action?`<button class="primary landmark-action" data-act="panel" data-panel="${t.action.panel}" ${t.action.enabled?"":"disabled"}>${t.action.label}</button>`:""}<p class="landmark-caption">\u5730\u56FE\u7B2C ${e.id+1} \u683C \xB7 \u67E5\u770B\u5730\u70B9\u4E0D\u4F1A\u6D88\u8017\u56DE\u5408\u6216\u89E6\u53D1\u5956\u52B1\u3002</p></div>`}var Nm=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function od(n){let e=n.s.notice||{},t=n.player,i=n.tiles[t.pos],s=$a.find(h=>h.name===e.title),r=[],a="theater",o="\u65C5\u9014\u6D88\u606F",c=e.text||"\u7EE7\u7EED\u65C5\u7A0B\u5427\u3002",l=h=>Math.round(h*(t.spirit==="fortune"?1.25:1));if(s){if(o="\u968F\u673A\u4E8B\u4EF6",a=s.art||{gain:"stocks",loss:"demolish",rest:"recover",recover:"recover",card:"dice",spirit:"shield"}[s.kind],s.amount){let h=s.kind==="loss"?-n.payment(s.amount,null,t):l(s.amount);r.push(`\u5976\u5E01 ${h<0?"\u2212":"+"}${Math.abs(h)}`),c=c.replace(`${s.amount} \u5976\u5E01`,`${Math.abs(h)} \u5976\u5E01`)}s.kind==="rest"&&r.push("\u4F11\u517B 1 \u56DE\u5408"),s.kind==="recover"&&r.push("\u4F11\u517B\u5DF2\u6062\u590D")}else t.spirit&&mn[t.spirit]?.name===e.title?(a=t.spirit==="misfortune"?"slow":"shield",o="\u795E\u7075\u76F8\u9047",r.push("\u6301\u7EED 3 \u4E2A\u540E\u7EED\u56DE\u5408")):/抵消|抵挡|守护效果已消耗/.test(c)?(a="shield",o="\u5976\u4F34\u5B88\u62A4",r.push("\u8D1F\u9762\u6548\u679C\u5DF2\u62B5\u6D88")):i.kind==="hospital"?(a="recover",o="\u505C\u9760\u7597\u517B\u9662",r.push(`\u5976\u5E01 \u2212${n.payment(100,null,t)}`,"\u4F11\u517B 1 \u56DE\u5408")):i.kind==="tax"?(a="recover",o="\u505C\u9760\u6E05\u6D01\u7AD9",r.push(`\u5976\u5E01 \u2212${n.payment(180,null,t)}`)):i.kind==="rest"?(a="house",o="\u56DE\u5230\u5C0F\u7A9D",r.push(`\u5976\u5E01 +${l(120)}`),c=c.replace("120 \u5976\u5E01",`${l(120)} \u5976\u5E01`)):i.kind==="shop"?(a="vehicle",o="\u505C\u9760\u8865\u7ED9\u7AD9",r.push("\u70B9\u5238\u4E0E\u968F\u673A\u8865\u7ED9"),c="\u6536\u5230\u70B9\u5238\u4E0E\u968F\u673A\u8865\u7ED9\u3002\u70B9\u5238\u6700\u591A\u6301\u6709 150\uFF0C\u6EE1\u5361\u5305\u65F6\u4F1A\u6309\u89C4\u5219\u8865\u507F\u5976\u5E01\u3002"):(i.kind==="bank"||i.kind==="stock")&&(a=i.kind==="bank"?"bank":"stocks",o="\u516C\u5171\u670D\u52A1");if(s?.kind==="card"||s?.kind==="recover"||!s&&i.kind==="shop"){let h=n.s.logs[0]?.text||"",u=/获得「([^」]+)」/.exec(h),f=/卡包已满，补偿 \+(\d+)/.exec(h);f?(c=s?.kind==="recover"?"\u5DF2\u6062\u590D\u4F11\u517B\u3002\u5361\u5305\u5DF2\u6EE1\uFF0C\u8865\u7ED9\u6298\u7B97\u4E3A\u5976\u5E01\u3002":"\u5361\u5305\u5DF2\u6EE1\uFF0C\u968F\u673A\u8865\u7ED9\u5DF2\u6298\u7B97\u4E3A\u5976\u5E01\u3002",r.push("\u5976\u5E01 +"+f[1])):u&&r.push(u[1]+" \xD71")}return{character:t.character,name:n.char(t).name,mood:e.mood==="happy"?"happy":e.mood==="sad"?"sad":"idle",icon:a,label:o,text:c,outcomes:r}}function ld(n){let e=Tc(n.character,n.mood);return e?`<img src="${e}" alt="${n.name}${n.mood==="happy"?"\u5927\u7B11":n.mood==="sad"?"\u4F4E\u5934":"\u5F85\u673A"}\u5F62\u8C61">`:_t(n.character)}function km(n){let e=od(n),t=ld(e);return`<div class="event-story ${e.mood}"><div class="event-picture"><div class="event-actor">${t}</div><span class="event-motif">${Ut(e.icon)}</span><strong class="event-name">${e.name}</strong></div><div class="event-copy"><span class="event-kind">${e.label}</span><p>${Nm(e.text)}</p>${e.outcomes.length?`<div class="event-outcomes" aria-label="\u672C\u6B21\u7ED3\u679C">${e.outcomes.map(i=>`<span>${Nm(i)}</span>`).join("")}</div>`:""}</div></div><button class="primary event-continue" data-act="ack">\u77E5\u9053\u5566\uFF0C\u7EE7\u7EED\u65C5\u884C</button>`}function Xa(n=1){let e=Number(n);return Number.isFinite(e)?Math.min(2,Math.max(1,e)):1}var Nc=class{constructor(e=()=>performance.now()){this.clock=e,this.deadline=0}ready({news:e=!1,moving:t=!1,effects:i=!1}={}){return!e&&!t&&!i&&this.clock()>=this.deadline}after(e,t=1){let i=e==="moving"?520:e==="roll"?1100:e==="event"?1800:800;this.deadline=this.clock()+Math.max(e==="moving"?300:650,i/Xa(t))}reset(){this.deadline=0}};function kc(n){let e=new Map([[0,1]]);for(let t=0;t<n;t++){let i=new Map;for(let[s,r]of e)for(let a=1;a<=6;a++)i.set(s+a,(i.get(s+a)||0)+r/6);e=i}return e}function Vn(n,e){let t=n.player,i=n.tiles[e.id],s=n.s.ownership[e.id],r=(e.passesStart?400+(n.s.talents&&t.character==="naiwa"?80:0):0)-e.rent+(e.points||0)*(t.tickets<100?1.5:.3);if(i.kind==="property"?s?s.player===t.id&&(r+=s.level<n.buildingLimit(s)&&t.money>=n.upgradeCost(i)?55:10):r+=t.money>=i.price+250?130+n.district(i.id,t.id).count*65:5:r+={hospital:t.skip?0:-210,tax:-n.payment(180),shop:125,rest:120,spirit:20,event:45,bank:0,stock:0,start:0}[i.kind]||0,n.aiDifficulty()==="hard"){s?.player===t.id&&(r+=n.district(i.id,t.id).count*18),!s&&i.kind==="property"&&(r+=n.district(i.id,t.id).count*50);let a=0;for(let o=1;o<=6;o++){let c=n.preview(o,{from:e.id,reverse:!1});a+=Math.min(...c.map(l=>l.rent))/6}r-=a*.35}return r}function Zs(n,e,t){return n.preview(e,t).sort((s,r)=>Vn(n,r)-Vn(n,s))[0]}function Om(n,e,{reverse:t=!1}={}){let i=0,s=0;for(let[r,a]of kc(e)){let o=Zs(n,r,{reverse:t});i+=a*Vn(n,o),s+=a*o.rent}return{value:i,rent:s}}function cd(n){let e=n.player;if(e.forced)return{count:1,value:Vn(n,Zs(n,e.forced))};if(e.slowTurns)return{count:1,value:Vn(n,Zs(n,1))};let t;for(let i=1;i<=(e.vehicle===2?3:e.vehicle===1?2:1);i++){let s={count:i,...Om(n,i,{reverse:e.reverse})};(!t||s.value>t.value)&&(t=s)}return t}function Fm(n){if(n.aiDifficulty()==="easy"){let s=n.player.cards.indexOf("recover");return s>=0&&(n.player.skip||n.player.spirit==="misfortune")?n.card(s):!1}let e=n.player,t=cd(n),i=[];for(let[s,r]of e.cards.entries()){if(r==="recover"&&i.push({index:s,value:e.skip?600:e.spirit==="misfortune"?250:25}),r==="shield"&&!e.shield&&i.push({index:s,value:t.rent-20}),r==="dice"&&!e.forced)for(let a=1;a<=6;a++)i.push({index:s,target:a,value:Vn(n,Zs(n,a))-t.value-30});if(r==="turn"&&!e.reverse&&i.push({index:s,value:Om(n,t.count,{reverse:!0}).value-t.value-25}),r==="slow"&&!e.slowTurns&&!e.forced&&i.push({index:s,value:Vn(n,Zs(n,1))-t.value-50}),["build","demolish","steal"].includes(r))for(let a of n.cardTargets(r)){let o=n.tiles[a.id];if(r==="demolish"&&a.player===e.id&&!a.obstacle)continue;let c;if(r==="build"&&(c=n.upgradeCost(o)*.55+(n.rent(o.id,a.level+1)-n.rent(o.id))*.3),r==="demolish"&&(c=a.obstacle?n.preview(6).some(l=>l.blocked&&l.id===a.id)?100:0:n.upgradeCost(o)*.25+(n.rent(o.id)-n.rent(o.id,a.level-1))*.3),r==="steal"){if(e.money<n.takeoverPrice(o.id)+450)continue;c=n.district(o.id,e.id).count*55-n.cost(o,a.level,Je(a))*.18}i.push({index:s,target:o.id,value:c})}if(r==="block"&&!e.reverse)for(let a=1;a<=6;a++){let o=e.pos;for(let l=0;l<a;l++)o=n.tiles[o].next[0];if(n.s.blocks[o]!==void 0)continue;let c=0;for(let[l,h]of kc(t.count)){let u=Zs(n,l,{blocks:{...n.s.blocks,[o]:e.id}});c+=h*Vn(n,u)}i.push({index:s,target:a,value:c-t.value-45})}}i.sort((s,r)=>r.value-s.value);for(let s of i)if(s.value>rd(n).cardThreshold&&n.card(s.index,s.target))return!0;return!1}function Bm(n){let e=n.player;if(e.aiTradeDone||(e.aiTradeDone=!0,n.aiDifficulty()==="easy"))return!1;let t=n.aiDifficulty()==="hard";for(let a=0;a<4;a++){let o=n.position(a);if(o.qty&&o.average!==null&&(o.price>=o.average*(t?1.18:1.12)||o.price<=o.average*(t?.8:.75)))return n.trade(a,-Math.min(o.qty,t?8:4))}if(e.money<2200)return!1;let s=n.s.market.map((a,o)=>{let c=a.history.slice(-5),l=c.reduce((h,u)=>h+u,0)/c.length;return{i:o,ratio:a.price/(t?l:a.history[0]),price:a.price}}).sort((a,o)=>a.ratio-o.ratio)[0];if(t&&s.ratio>.98)return!1;let r=Math.min(t?8:2,Math.floor((e.money-1800)/s.price));return r>0?n.trade(s.i,r):!1}function H1(n){let e=n.player;return e.aiBankDone||!n.canBank()?!1:(e.aiBankDone=!0,e.loan&&e.money>e.loan+700?n.bank("repay",e.loan):n.aiDifficulty()==="hard"&&e.money>1900?n.bank("deposit",Math.min(700,e.money-1400)):!1)}function V1(n,e){let t=n.player,i=n.s.ownership[t.pos];if(!i||i.player!==t.id)return!1;if(!i.level&&n.canBuild(t.pos)){let s=n.owned(t),r=n.s.round>n.s.maxRounds*.7,a=n.aiDifficulty()==="easy"?["residence"]:r?["chain","residence"]:!s.some(o=>Je(o)==="research")&&n.s.round<n.s.maxRounds*.4&&t.money>2e3?["research","residence"]:t.character==="naishu"?["chain","mall","residence"]:t.character==="naigou"?["hotel","residence"]:t.character==="naidan"?["mall","residence"]:s.some(o=>Je(o)==="chain")?["chain","residence"]:n.s.players.some(o=>o.id!==t.id&&o.vehicle)?["gas","residence"]:["hotel","residence"];for(let o of a)if(n.canConstruct(t.pos,o)&&t.money>=n.buildPrice(n.tiles[t.pos],o)+e)return n.construct(t.pos,o);return!1}return n.canUpgrade(t.pos)&&t.money>=n.buildPrice(n.tiles[t.pos])+e?n.upgrade(t.pos):!1}function zm(n){let e=n.player,t=rd(n);if(e.human||n.s.phase==="finished")return!1;if(n.s.phase==="departure")return n.roll();if(n.s.phase==="roll"){if(e.money<500&&e.deposit&&n.bank("withdraw",Math.min(e.deposit,900))||Fm(n)||n.canShop()&&e.money>1800&&e.vehicle===0&&n.s.round<n.s.maxRounds-5&&n.vehicle(1))return!0;if(n.canShop()&&e.cards.length<12&&e.shopUsed<2){let s=e.cards.includes("dice")?e.cards.includes("build")?e.cards.includes("shield")?null:"shield":"build":"dice";if(s&&n.shop(s))return!0}if(Bm(n))return!0;let i=n.aiDifficulty()==="easy"?{count:1}:cd(n);return e.diceCount=i.count,n.roll()}if(n.s.phase==="branch"){if(n.aiDifficulty()==="easy"){let s=n.tiles[e.pos].next;return n.step(s[n.int(s.length)])}let i=n.tiles[e.pos].next.map(s=>({first:s,value:Vn(n,Zs(n,n.s.remaining,{first:s}))}));return i.sort((s,r)=>r.value-s.value),n.step(i[0].first)}if(n.s.phase==="moving")return n.step();if(n.s.phase==="buy"){let i=n.tiles[e.pos],s=n.district(i.id,e.id).count;return n.buy(e.money>=i.price+(n.aiDifficulty()==="easy"?t.reserve:s?220:t.reserve))}if(n.s.phase==="estate"){let i=n.takeoverPrice(e.pos);return n.resolveEstate(n.aiDifficulty()!=="easy"&&e.money>=i+t.reserve&&n.district(e.pos,e.id).count>0)}if(n.s.phase==="event")return n.acknowledge();if(n.s.phase==="debt"){e.deposit&&n.bank("withdraw",e.deposit);for(let r=0;r<4;r++)e.stocks[r]&&n.trade(r,-e.stocks[r]);if(e.money>=n.s.debt.amount)return n.settle();let i=n.s.debt.amount-e.money;if(n.canBank()&&e.loan+i<=1800&&n.bank("borrow",i))return n.settle();let s=n.owned(e).sort((r,a)=>n.district(r.tile.id).count-n.district(a.tile.id).count||r.level-a.level)[0];return s?n.sell(s.tile.id):n.bankrupt()}if(n.s.phase==="end"){if(Fm(n)||n.canShop()&&e.money>1800&&e.vehicle===0&&n.s.round<n.s.maxRounds-5&&n.vehicle(1))return!0;if(n.canShop()&&e.cards.length<10&&e.shopUsed<2){let i=e.cards.includes("dice")?e.cards.includes("build")?e.cards.includes("shield")?null:"shield":"build":"dice";if(i&&n.shop(i))return!0}return n.canBank()&&e.loan>0&&e.money>e.loan+500&&n.bank("repay",e.loan)||V1(n,n.aiDifficulty()==="hard"?Math.max(450,Math.min(1300,cd(n).rent*1.5||450)):t.reserve)||Bm(n)||H1(n)?!0:n.end()}return!1}var Hm=()=>Array.from({length:4},()=>({cost:0,realized:0,unpriced:0}));function Vm(n){return n.stockBook===void 0&&(n.stockLegacy=!0,n.stockBook=n.stocks.map(e=>({cost:e?null:0,realized:0,unpriced:0}))),n.stockLegacy===void 0&&(n.stockLegacy=!1),n.stockTrades===void 0&&(n.stockTrades=[]),typeof n.stockLegacy=="boolean"&&Array.isArray(n.stockBook)&&n.stockBook.length===4&&n.stockBook.every((e,t)=>e&&(e.cost===null||Number.isSafeInteger(e.cost)&&e.cost>=0)&&(n.stocks[t]?!0:e.cost===0)&&Number.isSafeInteger(e.realized)&&Number.isSafeInteger(e.unpriced)&&e.unpriced>=0)&&Array.isArray(n.stockTrades)&&n.stockTrades.length<=40&&n.stockTrades.every(e=>e&&Number.isInteger(e.stock)&&e.stock>=0&&e.stock<4&&Number.isInteger(e.qty)&&e.qty!==0&&Number.isInteger(e.price)&&e.price>=20&&e.price<=500&&Number.isInteger(e.round)&&e.round>=1&&(e.profit===null||Number.isSafeInteger(e.profit)))}function hd(n,e,t,i,s){let r=n.stockBook[e],a=n.stocks[e],o=null;if(t>0)r.cost!==null&&(r.cost+=t*i);else{let c=-t,l=r.cost===null?null:c===a?r.cost:Math.round(r.cost*c/a);o=l===null?null:c*i-l,o===null?r.unpriced++:r.realized+=o,r.cost!==null&&(r.cost-=l),c===a&&(r.cost=0)}return n.money-=t*i,n.stocks[e]+=t,n.stockTrades.unshift({stock:e,qty:t,price:i,round:s,profit:o}),n.stockTrades=n.stockTrades.slice(0,40),o}function ud(n,e,t){let i=e.stocks[t],s=e.stockBook[t],r=n.s.market[t].price,a=i*r;return{qty:i,price:r,cost:s.cost,average:i&&s.cost!==null?s.cost/i:null,value:a,unrealized:s.cost===null?null:a-s.cost,rate:s.cost?(a-s.cost)/s.cost*100:null,realized:s.realized,unpriced:s.unpriced}}function Gm(n,e=n.player){let t=e.stocks.map((s,r)=>ud(n,e,r)),i=t.filter(s=>s.qty&&s.cost===null).length;return{positions:t,value:t.reduce((s,r)=>s+r.value,0),cost:i?null:t.reduce((s,r)=>s+(r.cost||0),0),unrealized:i?null:t.reduce((s,r)=>s+r.unrealized,0),realized:t.reduce((s,r)=>s+r.realized,0),unknown:i,unpriced:t.reduce((s,r)=>s+r.unpriced,0)}}var G1=5,$m=[20,30,50,80],dd="naiwa-monopoly-v2",$1=n=>JSON.parse(JSON.stringify(n)),Ni=n=>Math.round(n);function W1(n){let e=n>>>0^2654435769;return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^e>>>16)>>>0||1}var Gn=class n{constructor(e){this.s=e,this.transfers=new Rc}static create({character:e="naiwa",rounds:t=50,playerCount:i=3,randomStart:s=!1,talents:r=!0,mapVersion:a=2,difficulty:o="normal",opponents:c,seatLevels:l=[],startingCash:h=3200,startingTickets:u=60,seed:f=Date.now()}={}){e==="dounai"&&(e="naicha"),c=c?.map(m=>m==="dounai"?"naicha":m),Bt.some(m=>m.id===e)||(e="naiwa");let d=[2,3,4,5,6].includes(+i)?+i:3,g=gm(e,d,c,f),v=new n({version:2,rules:7,setupSeed:f>>>0,mapVersion:a===1?1:2,difficulty:["easy","normal","hard"].includes(o)?o:"normal",talents:!!r,firstPlayer:0,seed:W1(f),round:1,maxRounds:$m.includes(+t)?+t:50,current:0,phase:"roll",dice:[1],remaining:0,moveTotal:0,moveSteps:0,players:g.map((m,p)=>({id:p,character:m,human:p===0,difficulty:p&&["easy","normal","hard"].includes(l[p-1])?l[p-1]:["easy","normal","hard"].includes(o)?o:"normal",money:[2e3,3200,5e3,8e3].includes(+h)?+h:3200,tickets:[0,60,120].includes(+u)?+u:60,businessReady:!1,cardsUsed:0,buildsUsed:0,shopUsed:0,slowTurns:0,buildSite:null,bankAccess:!1,talentReady:!1,departures:0,deposit:0,loan:0,stocks:[0,0,0,0],stockBook:Hm(),stockLegacy:!1,stockTrades:[],cards:["dice","shield","recover"],vehicle:0,diceCount:1,pos:0,history:[],alive:!0,skip:0,spirit:null,spiritTurns:0,shield:!1,reverse:!1,forced:0})),ownership:{},blocks:{},pickups:{},market:nm.map(m=>({...m,history:[m.price],change:0,previous:m.price})),logs:[{round:1,text:"\u5976\u5BB6\u53D1\u8D22\u5C9B\u5F00\u5F20\uFF01\u6BCF\u4F4D\u5976\u4F34\u5E26\u7740 "+([2e3,3200,5e3,8e3].includes(+h)?+h:3200)+" \u5976\u5E01\u51FA\u53D1\u3002"}],notice:null,debt:null,options:{sound:!0,speed:1,quality:"auto",lighting:"day"},winner:null});return s&&(v.s.current=v.int(d),v.s.firstPlayer=v.s.current,v.log(`\u968F\u673A\u5148\u624B\uFF1A${v.char().name}\u5148\u51FA\u53D1\uFF0C\u6BCF\u4EBA\u884C\u52A8\u4E00\u6B21\u7B97\u4E00\u8F6E\u3002`)),v}static restore(e){try{let t=typeof e=="string"?JSON.parse(e):$1(e),i=Zu(t?.mapVersion??1);if(t&&t.mapVersion===void 0&&(t.mapVersion=1),t&&t.difficulty===void 0&&(t.difficulty="normal"),!t||![1,2].includes(t.mapVersion)||!["easy","normal","hard"].includes(t.difficulty)||t.version!==2||!Array.isArray(t.players)||![2,3,4,5,6].includes(t.players.length)||!["roll","departure","moving","branch","buy","estate","event","end","debt","finished"].includes(t.phase)||!Number.isInteger(t.current)||t.current<0||t.current>=t.players.length||!Number.isInteger(t.round)||t.round<1||!$m.includes(t.maxRounds)||t.round>t.maxRounds||!Number.isInteger(t.seed)||!Number.isInteger(t.remaining)||t.remaining<0||t.remaining>18||(t.moveSteps===void 0&&(t.moveSteps=null),t.moveSteps!==null&&(!Number.isInteger(t.moveSteps)||t.moveSteps<0||t.moveSteps>18))||!t.options||!t.market||t.market.length!==4||!t.ownership||!t.blocks||!Array.isArray(t.logs)||!Array.isArray(t.dice))return null;for(let s of t.players)s.character==="dounai"&&(s.character="naicha");if(t.players.some(s=>!Vm(s))||new Set(t.players.map(s=>s.character)).size!==t.players.length||t.players.some((s,r)=>s.human&&r!==0))return null;for(let[s,r]of t.players.entries())if(r.id!==s||typeof r.human!="boolean"||typeof r.alive!="boolean"||!Number.isInteger(r.pos)||!Bt.some(a=>a.id===r.character)||!i[r.pos]||![r.money,r.deposit,r.loan,...r.stocks].every(a=>Number.isSafeInteger(a)&&a>=0)||r.stocks.length!==4||!Array.isArray(r.cards)||r.cards.length>15||r.cards.some(a=>!Ft[a])||!Array.isArray(r.history)||r.history.length>80||r.history.some(a=>!Number.isInteger(a)||!i[a])||!Yi[r.vehicle]||!Number.isInteger(r.diceCount)||r.diceCount<1||r.diceCount>Yi[r.vehicle].dice||!Number.isInteger(r.skip)||r.skip<0||r.skip>3||!Number.isInteger(r.forced)||r.forced<0||r.forced>6||!Number.isInteger(r.spiritTurns)||r.spiritTurns<0||r.spiritTurns>4||r.spirit&&!mn[r.spirit])return null;for(let[s,r]of Object.entries(t.ownership))if(r.buildingType!==void 0&&!Object.hasOwn(Mt,r.buildingType)||r.level>ji(r)||r.researchProgress!==void 0&&(!Number.isInteger(r.researchProgress)||r.researchProgress<0||r.researchProgress>2)||r.researchCard!==void 0&&(!$n(r.level).includes(r.researchCard)||Je(r)!=="research")||!i[s]||i[s].kind!=="property"||!Number.isInteger(r.player)||r.player<0||r.player>=t.players.length||!Number.isInteger(r.level)||r.level<0||r.level>G1)return null;for(let s of t.market)if(s.previous===void 0&&(s.previous=Number.isFinite(s.change)?Math.max(20,Math.min(500,s.price-s.change)):s.price),!Number.isSafeInteger(s.previous)||s.previous<20||s.previous>500)return null;if(t.market.some(s=>!Number.isSafeInteger(s.price)||s.price<20||s.price>500||!Array.isArray(s.history)||s.history.length>20||s.history.some(r=>!Number.isFinite(r)||r<20||r>500)))return null;for(let s of["music","voice"])if(s in t.options&&typeof t.options[s]!="boolean")return null;for(let s of["musicVolume","effectsVolume","voiceVolume"])if(s in t.options&&(!Number.isFinite(t.options[s])||t.options[s]<0||t.options[s]>1))return null;if("track"in t.options&&!["ode","town"].includes(t.options.track)||(t.options.lighting===void 0&&(t.options.lighting="day"),!["day","golden","night"].includes(t.options.lighting))||typeof t.options.sound!="boolean"||![1,2,4].includes(t.options.speed)||!["auto","low"].includes(t.options.quality)||t.logs.some(s=>typeof s.text!="string"||!Number.isInteger(s.round))||Object.entries(t.blocks).some(([s,r])=>!i[s]||!Number.isInteger(r)||r<0||r>=t.players.length)||t.phase==="estate"&&(!t.ownership[t.players[t.current].pos]||t.ownership[t.players[t.current].pos].player===t.current)||t.phase==="branch"&&(i[t.players[t.current].pos].next.length!==2||t.remaining<=0)||t.phase==="debt"&&(!t.debt||!Number.isSafeInteger(t.debt.amount)||t.debt.amount<=0||t.debt.to!==null&&(!Number.isInteger(t.debt.to)||!t.players[t.debt.to])||typeof t.debt.label!="string")||(t.firstPlayer===void 0&&(t.firstPlayer=0),!Number.isInteger(t.firstPlayer)||t.firstPlayer<0||t.firstPlayer>=t.players.length)||(t.pickups===void 0&&(t.pickups={}),!t.pickups||typeof t.pickups!="object"||Object.entries(t.pickups).some(([s,r])=>!Nr.includes(+s)||!Number.isInteger(r)||!t.players[r]))||(t.talents===void 0&&(t.talents=!1),typeof t.talents!="boolean"))return null;t.rules=7;for(let s of t.players){for(let[r,a]of Object.entries({tickets:60,cardsUsed:0,buildsUsed:0,shopUsed:0,slowTurns:0}))if(s[r]===void 0&&(s[r]=a),!Number.isInteger(s[r])||s[r]<0||s[r]>(r==="tickets"?150:r==="slowTurns"?3:r==="shopUsed"?2:r==="cardsUsed"?32:1))return null;if(s.difficulty===void 0&&(s.difficulty=t.difficulty),!["easy","normal","hard"].includes(s.difficulty)||(s.businessReady===void 0&&(s.businessReady=!1),typeof s.businessReady!="boolean")||(s.talentReady===void 0&&(s.talentReady=!1),s.departures===void 0&&(s.departures=0),typeof s.talentReady!="boolean"||!Number.isSafeInteger(s.departures)||s.departures<0)||(s.buildSite===void 0&&(s.buildSite=null),s.bankAccess===void 0&&(s.bankAccess=!1),s.buildSite!==null&&(!Number.isInteger(s.buildSite)||!i[s.buildSite])||typeof s.bankAccess!="boolean"))return null}return new n(t)}catch{return null}}aiDifficulty(e=this.player){return e.difficulty||this.s.difficulty}buildingLimit(e){return ji(e)}get tiles(){return Zu(this.s.mapVersion)}position(e,t=this.player){return ud(this,t,e)}portfolio(e=this.player){return Gm(this,e)}get player(){return this.s.players[this.s.current]}char(e=this.player){return Bt.find(t=>t.id===e.character)}rng(){let e=this.s.seed;return e^=e<<13,e^=e>>>17,e^=e<<5,this.s.seed=e>>>0,this.s.seed/4294967296}int(e){return Math.floor(this.rng()*e)}log(e){this.s.logs.unshift({round:this.s.round,text:e}),this.s.logs=this.s.logs.slice(0,80)}recordTransfer(e,t,i="fee"){e===null||e===this.s.current||!this.s.players[e]||!Number.isSafeInteger(t)||t<=0||this.transfers.record({from:this.s.current,to:e,amount:t,kind:i,tile:this.player.pos,round:this.s.round})}owned(e){return Object.entries(this.s.ownership).filter(([,t])=>t.player===e.id).map(([t,i])=>({tile:this.tiles[+t],...i}))}cost(e,t,i="residence"){return e.price+t*Math.ceil(this.upgradeCost(e)*(Mt[i]?.cost||1))}upgradeCost(e){return Math.ceil(e.price*.6/10)*10}assets(e=this.player){let t=e.money,i=e.deposit,s=e.loan,r=this.owned(e).reduce((c,l)=>c+this.cost(l.tile,l.level,Je(l)),0),a=e.stocks.reduce((c,l,h)=>c+l*this.s.market[h].price,0),o=Yi[e.vehicle].price;return{cash:t,deposit:i,property:r,stocks:a,vehicle:o,loan:s,total:Ni(t+i+r+a+o-s)}}worth(e){return this.assets(e).total}baseRent(e,t=0){return Ni(this.tiles[e].price*[.16,.42,.85,1.4,2.05,2.8][t])}district(e,t=this.s.ownership[e]?.player){let i=this.tiles[e],s=this.tiles.filter(c=>c.kind==="property"&&c.group===i.group),r=s.filter(c=>this.s.ownership[c.id]?.player===t&&Je(this.s.ownership[c.id])==="residence"),a=this.baseRent(e,this.s.ownership[e]?.level??0),o=r.filter(c=>c.id!==e).reduce((c,l)=>c+this.baseRent(l.id,this.s.ownership[l.id].level),0);return{count:r.length,total:s.length,bonus:Math.min(1,o*.35/a),support:o}}rent(e,t=this.s.ownership[e]?.level??0,i=this.player,s=this.s.moveSteps||this.s.moveTotal||1){let r=this.s.ownership[e],a=this.baseRent(e,t);if(r&&this.s.players[r.player].skip)return 0;if(r&&t){let o=Je(r);if(o==="park"||o==="research")return 0;if(o==="chain")return Math.min(400,100+50*(this.owned(this.s.players[r.player]).filter(c=>c.level&&Je(c)==="chain").length-1));if(o==="gas")return 30+15*s+60*i.vehicle;if(o==="hotel")return Math.round(a*.65)*2;if(o==="mall")return Math.round(a*1.0833333333)}return r?a+Math.min(a,Ni(this.district(e).support*.35)):a}buildPrice(e,t=Je(this.s.ownership[e.id])){return Math.ceil(Math.ceil(this.upgradeCost(e)*(Mt[t]?.cost||1))*(On(this,this.player,"naiwa")?.85:1))}canConstruct(e,t="residence"){let i=this.tiles[e],s=this.s.ownership[e],r=this.player;return!!(Object.hasOwn(Mt,t)&&i&&s&&s.player===r.id&&s.level===0&&this.s.phase==="end"&&r.pos===e&&r.buildSite===e&&r.buildsUsed<1&&r.money>=this.buildPrice(i,t))}canBuild(e){return Object.keys(Mt).some(t=>this.canConstruct(e,t))}construct(e,t){if(!this.canConstruct(e,t))return!1;let i=this.s.ownership[e],s=this.buildPrice(this.tiles[e],t);return this.player.money-=s,this.player.buildsUsed++,i.buildingType=t,i.level=1,t==="research"&&(i.researchProgress=0,i.researchCard="dice"),this.log(`${this.char().name}\u5728\u300C${this.tiles[e].name}\u300D\u5EFA\u6210${Mt[t].name} \u2212${s}`),!0}setResearch(e,t){let i=this.s.ownership[e];return!i||i.player!==this.player.id||Je(i)!=="research"||!i.level||this.s.phase!=="end"||this.player.pos!==e||this.player.buildSite!==e||!$n(i.level).includes(t)?!1:(i.researchCard=t,i.researchProgress=0,this.log(`${this.char().name}\u8C03\u6574\u7814\u7A76\u6240\u9879\u76EE\u3002`),!0)}cardPrice(e){return Math.ceil(Ft[e].price*(On(this,this.player,"naichong")?.8:1))}payment(e,t=null,i=this.player){return Ni(e*(i.spirit==="misfortune"?1.25:1)*(On(this,i,"naishu")&&t!==null?.8:On(this,i,"naicha")&&t===null?.5:1))}canUpgrade(e){let t=this.tiles[e],i=this.s.ownership[e],s=this.player;return!!(t&&this.s.phase==="end"&&s.pos===e&&s.buildSite===e&&i?.player===s.id&&i.level<ji(i)&&s.buildsUsed<1&&s.money>=this.buildPrice(t))}nearby(e,t=8,i=this.player){if(!this.tiles[e])return!1;let s=[[i.pos,0]],r=new Set;for(;s.length;){let[a,o]=s.shift();if(a===+e)return!0;if(!(r.has(a)||o>=t)){r.add(a);for(let c of this.tiles)c.next.includes(a)&&s.push([c.id,o+1]);for(let c of this.tiles[a].next)s.push([c,o+1])}}return!1}cardTargets(e){let t=this.player,i=Object.entries(this.s.ownership).filter(([s,r])=>(e==="steal"?+s===t.pos:this.nearby(+s))&&(e==="build"?r.player===t.id&&r.level<ji(r):e==="demolish"?r.level>0&&this.s.blocks[s]===void 0:r.player!==t.id&&this.s.players[r.player].alive)).map(([s,r])=>({id:+s,...r}));if(e==="demolish")for(let[s,r]of Object.entries(this.s.blocks))this.nearby(+s)&&i.push({id:+s,player:r,level:0,obstacle:!0});return i}takeoverPrice(e){let t=this.s.ownership[e];return t?Math.ceil(this.cost(this.tiles[e],t.level,Je(t))*1.25*(On(this,this.player,"naishu")?.9:1)/10)*10:0}preview(e,{from:t=this.player.pos,first:i=null,reverse:s=this.player.reverse,blocks:r=this.s.blocks}={}){if(!Number.isInteger(e)||e<0||e>18)return[];let a=this.player,o=[],c=(l,h,u,f,d)=>{if(h===0||u.length&&r[l]!==void 0){let v=this.tiles[l],m=this.s.ownership[l];o.push({id:l,path:u,passesStart:d,blocked:h>0,points:[...new Set(u)].filter(p=>Nr.includes(p)&&this.s.pickups[p]===void 0).length*10,rent:m&&m.player!==a.id&&!a.shield?this.payment(this.rent(l,void 0,a,u.length+(t===a.pos&&["moving","branch"].includes(this.s.phase)?this.s.moveSteps??Math.max(0,(this.s.moveTotal||0)-this.s.remaining):0)),m.player,a):0,owner:m?.player??null,price:!m&&v.kind==="property"?v.price:0});return}let g;s?g=[f.length?f.at(-1):l<40?(l+39)%40:l===40?35:l===44?15:l-1]:g=u.length===0&&i!==null&&this.tiles[l].next.includes(i)?[i]:this.tiles[l].next;for(let v of g)c(v,h-1,[...u,v],s?f.slice(0,-1):[...f,l],d||!s&&v===0)};return c(t,e,[],[...a.history],!1),o}coupons(e,t){e.tickets=Math.min(150,e.tickets+t)}income(e,t,i){let s=Ni(t*(e.spirit==="fortune"?1.25:1));return e.money+=s,this.log(`${this.char(e).name} ${i} +${s}`),s}canBank(){return this.manageable()&&this.s.round%7!==3&&(this.player.bankAccess||this.tiles[this.player.pos].kind==="bank")}canUseCard(e){return this.player.alive&&(this.s.phase==="roll"||this.s.phase==="end"&&!["dice","turn","slow","block"].includes(e)||this.s.phase==="estate"&&e==="steal")}blockTargets(){let t=this.player.pos;return Array.from({length:6},(i,s)=>(t=this.tiles[t].next[0],{id:t,steps:s+1,reason:this.s.blocks[t]!==void 0?"\u8FD9\u91CC\u5DF2\u6709\u8DEF\u969C":this.s.players.some(r=>r.alive&&r.pos===t)?"\u8FD9\u91CC\u6709\u89D2\u8272\u505C\u9760":""}))}cardHint(e){let t=this.player;if(!Ft[e]||!t.cards.includes(e))return"\u5361\u7247\u4E0D\u5728\u5F53\u524D\u5361\u5305\u4E2D";if(!this.canUseCard(e))return this.s.phase==="end"&&["dice","turn","slow","block"].includes(e)?"\u79FB\u52A8\u5361\u987B\u5728\u63B7\u9AB0\u524D\u4F7F\u7528":"\u7B49\u5F85\u81EA\u5DF1\u7684\u884C\u52A8\u65F6\u673A";if(e==="dice"&&t.forced)return`\u672C\u6B21\u5DF2\u6307\u5B9A ${t.forced} \u6B65`;if(e==="turn"&&t.reverse)return"\u672C\u6B21\u5DF2\u9009\u62E9\u5012\u9000";if(e==="shield"&&t.shield)return"\u514D\u79DF\u4FDD\u62A4\u5DF2\u751F\u6548\uFF0C\u89E6\u53D1\u540E\u518D\u8865\u5145";if(e==="slow"&&(t.slowTurns||t.forced))return t.slowTurns?`\u6162\u884C\u5269\u4F59 ${t.slowTurns} \u6B21\u51FA\u53D1`:"\u672C\u6B21\u5DF2\u63A7\u9AB0\uFF0C\u6682\u4E0D\u80FD\u5F00\u542F\u6162\u884C";if(e==="block"&&this.blockTargets().every(i=>i.reason))return"\u524D\u65B9\u516D\u683C\u6682\u65E0\u53EF\u653E\u7F6E\u4F4D\u7F6E";if(["build","demolish","steal"].includes(e)){if(!this.cardTargets(e).length)return e==="steal"?"\u505C\u5728\u5BF9\u624B\u5730\u4EA7\u540E\u53EF\u6536\u8D2D":e==="build"?"\u9644\u8FD1\u516B\u683C\u6682\u65E0\u53EF\u52A0\u76D6\u7684\u81EA\u5BB6\u5730\u4EA7":"\u9644\u8FD1\u516B\u683C\u6682\u65E0\u623F\u5C4B\u6216\u8DEF\u969C";if(e==="steal"&&t.money<this.takeoverPrice(t.pos))return`\u73B0\u91D1\u4E0D\u8DB3\uFF0C\u8FD8\u9700 ${this.takeoverPrice(t.pos)-t.money} \u5976\u5E01`}return""}canShop(){return this.manageable()&&this.s.phase!=="debt"&&this.tiles[this.player.pos].kind==="shop"}manageable(){return["roll","end","debt"].includes(this.s.phase)&&this.player.alive}charge(e,t=null,i="\u652F\u4ED8\u8D39\u7528"){let s=this.player;if(e=this.payment(e,t,s),s.money<e&&s.deposit){let r=Math.min(s.deposit,e-s.money);s.deposit-=r,s.money+=r,this.log(`${this.char().name}\u5B58\u6B3E\u81EA\u52A8\u8865\u8DB3\u73B0\u91D1 +${r}`)}return s.money<e?(this.s.debt={amount:e,to:t,label:i},this.s.phase="debt",this.log(`${this.char().name}\u9700\u652F\u4ED8 ${e} \u5976\u5E01\uFF0C\u8BF7\u7B79\u96C6\u8D44\u91D1\u6216\u7533\u8BF7\u7834\u4EA7\u3002`),!1):(s.money-=e,t!==null&&(this.s.players[t].money+=e),this.recordTransfer(t,e),this.log(`${this.char().name} ${i} \u2212${e}`),!0)}roll(){if(!["roll","departure"].includes(this.s.phase))return!1;let e=this.player;if(e.skip>0)return e.skip--,this.log(`${this.char().name}\u6B63\u5728\u4F11\u517B\uFF0C\u672C\u56DE\u5408\u6682\u505C\u884C\u52A8\u3002`),this.s.phase="end",!0;if(Rd(this))return this.s.phase="departure",!0;if(_m(this))return this.s.phase="departure",!0;let t=Math.max(1,Math.min(Yi[e.vehicle].dice,e.diceCount));return this.s.dice=e.forced?[e.forced]:e.slowTurns?[1]:Array.from({length:t},()=>this.int(6)+1),e.slowTurns&&e.slowTurns--,e.forced=0,this.s.remaining=this.s.dice.reduce((i,s)=>i+s,0),this.s.moveTotal=this.s.remaining,this.s.moveSteps=0,this.s.phase="moving",this.log(`${this.char().name}\u63B7\u51FA ${this.s.dice.join(" + ")}\uFF0C${e.reverse?"\u5012\u9000":"\u524D\u8FDB"} ${this.s.remaining} \u683C\u3002`),!0}step(e){if(!["moving","branch"].includes(this.s.phase))return!1;let t=this.player;if(this.s.remaining<=0)return t.reverse=!1,this.land(),!0;let i;if(t.reverse)i=t.history.length?t.history.pop():t.pos<40?(t.pos+39)%40:t.pos===40?35:t.pos===44?15:t.pos-1;else{let s=this.tiles[t.pos].next;if(s.length>1&&!s.includes(e))return this.s.phase="branch",!1;i=s.length>1?e:s[0],s.length>1&&this.log(`${this.char().name}\u9009\u62E9\u901A\u5F80\u300C${this.tiles[i].name}\u300D\u7684\u8DEF\u7EBF\u3002`),t.history.push(t.pos),t.history=t.history.slice(-80)}return this.s.moveSteps=(this.s.moveSteps??Math.max(0,(this.s.moveTotal||0)-this.s.remaining))+1,t.pos=i,Nr.includes(i)&&this.s.pickups[i]===void 0&&(this.s.pickups[i]=t.id,this.coupons(t,10),this.log(`${this.char().name}\u62FE\u53D6\u70B9\u5238 +10`)),this.tiles[i].kind==="bank"&&(t.bankAccess=!0),this.s.remaining--,i===0&&!t.reverse&&(this.income(t,400+(On(this,t,"naiwa")?80:0),"\u7ECF\u8FC7\u8D77\u70B9"),this.coupons(t,25)),this.s.blocks[i]!==void 0&&(delete this.s.blocks[i],this.s.remaining=0,this.log(`${this.char().name}\u9047\u5230\u5976\u5757\u8DEF\u969C\uFF0C\u5728\u6B64\u505C\u4E0B\u3002`)),this.s.phase="moving",!0}land(){let e=this.player,t=this.tiles[e.pos];if(e.buildSite=null,this.s.phase="end",this.s.ownership[e.pos]?.player===e.id&&(e.buildSite=e.pos),t.kind==="property"){let i=this.s.ownership[t.id];if(!i){this.s.phase="buy";return}if(i.player!==e.id){if(e.cards.includes("steal")&&e.money>=this.takeoverPrice(t.id)){this.s.phase="estate";return}this.collectProperty(t.id)}else i.level&&Je(i)==="park"&&(this.coupons(e,10),this.log(`${this.char().name}\u6E38\u89C8\u516C\u56ED\uFF0C\u83B7\u5F9710\u70B9\u5238\u3002`))}else t.kind==="event"?this.event():t.kind==="hospital"?(e.skip=1,this.charge(100,null,"\u7597\u517B\u8D39")&&this.notice("\u5976\u86D9\u7597\u517B\u9662","\u4F11\u517B\u4E00\u56DE\u5408\u3002\u4E5F\u53EF\u4EE5\u5728\u4E0B\u56DE\u5408\u63B7\u9AB0\u524D\u4F7F\u7528\u91CE\u751F\u72D7\u5976\u6062\u590D\u3002","rest")):t.kind==="tax"?this.charge(180,null,"\u5976\u6CE1\u6E05\u6D01\u8D39")&&this.notice("\u5976\u6CE1\u6E05\u6D01\u7AD9","\u8857\u9053\u53C8\u5E72\u51C0\u4E86\uFF0C\u5927\u5BB6\u4E00\u8D77\u5FEB\u4E50\u5927\u7B11\u3002","sad"):t.kind==="rest"?(this.income(e,120,"\u5728\u5C0F\u7A9D\u9886\u53D6\u8865\u8D34"),this.notice("\u56DE\u5230\u5976\u86D9\u7684\u5C0F\u7A9D","\u7A0D\u4F5C\u4F11\u606F\uFF0C\u83B7\u5F97 120 \u5976\u5E01\u8865\u8D34\u3002","happy")):t.kind==="spirit"?this.attach():t.kind==="bank"?this.notice(this.s.round%7===3?"\u94F6\u884C\u4ECA\u65E5\u4F11\u606F":"\u5976\u5E01\u94F6\u884C",this.s.round%7===3?"\u5468\u4E09\u94F6\u884C\u4F11\u606F\uFF0C\u4ECA\u5929\u4EC5\u53EF\u67E5\u770B\u8D26\u6237\u3002":"\u7ECF\u8FC7\u94F6\u884C\u540E\u672C\u56DE\u5408\u53EF\u529E\u7406\u5B58\u53D6\u6B3E\u3001\u501F\u6B3E\u4E0E\u8FD8\u6B3E\u3002"):t.kind==="stock"?this.notice(this.s.round%7===0?"\u8BC1\u5238\u6240\u4ECA\u65E5\u4F11\u5E02":"\u5976\u5BB6\u8BC1\u5238\u6240","\u6253\u5F00\u80A1\u7968\u9762\u677F\u67E5\u770B\u56DB\u5BB6\u5976\u5BB6\u4F01\u4E1A\u3002\u4EF7\u683C\u6BCF\u8F6E\u53D8\u5316\uFF1B\u6BCF\u7B2C\u4E03\u8F6E\u4F11\u5E02\uFF0C\u5176\u4F59\u65F6\u95F4\u53EF\u4EA4\u6613\u3002"):t.kind==="shop"&&(this.coupons(e,30),this.giveCard(e),this.notice("\u5976\u5BB6\u8865\u7ED9","\u83B7\u5F97 30 \u70B9\u5238\u4E0E\u4E00\u5F20\u968F\u673A\u5361\uFF01\u70B9\u5238\u7528\u4E8E\u4E70\u5361\uFF0C\u5976\u5E01\u7528\u4E8E\u5730\u4EA7\u548C\u4EA4\u901A\u5DE5\u5177\u3002","happy"))}collectProperty(e){let t=this.player,i=this.s.ownership[e],s=this.tiles[e],r=Je(i);if(!i)return;if(i.level&&(r==="park"||r==="research")){r==="park"&&(this.coupons(t,10),this.log(`${this.char().name}\u514D\u8D39\u6E38\u89C8\u516C\u56ED\uFF0C\u83B7\u5F9710\u70B9\u5238\u3002`));return}if(this.s.players[i.player].skip)return;if(t.shield){t.shield=!1,this.log(`${this.char().name}\u7528\u5FEB\u4E50\u514D\u79DF\u5361\u62B5\u6D88\u672C\u6B21\u8D39\u7528\u3002`);return}let a=no(this,e),o=a[a.length>1?this.int(a.length):0],c=o.amount,l=o.suffix;o.skip&&(t.skip=o.skip),this.charge(c,i.player,`\u5411${this.char(this.s.players[i.player]).name}\u652F\u4ED8\u300C${s.name}\u300D${l}`)&&(this.s.players[i.player].mood="happy",i.level&&["hotel","mall","gas"].includes(r)&&this.notice(Mt[r].name,`${l}\uFF1A${this.payment(c,i.player)} \u5976\u5E01${r==="hotel"?"\uFF0C\u4F11\u606F "+t.skip+" \u56DE\u5408\u3002":"\u3002"}`,"sad"))}resolveEstate(e=!1){if(this.s.phase!=="estate")return!1;let t=this.player;if(e){let i=t.cards.indexOf("steal");return i<0||!this.card(i,t.pos)?!1:(t.buildSite=t.pos,this.s.phase="end",!0)}return this.s.phase="end",this.collectProperty(t.pos),!0}notice(e,t,i="idle"){this.s.notice={title:e,text:t,mood:i},this.s.phase="event"}acknowledge(){return this.s.phase!=="event"?!1:(this.s.notice=null,this.s.phase="end",!0)}buy(e){if(this.s.phase!=="buy")return!1;let t=this.player,i=this.tiles[t.pos];if(e){if(this.s.ownership[i.id]||t.money<i.price)return!1;t.money-=i.price,this.s.ownership[i.id]={player:t.id,level:0,buildingType:"residence"},t.buildSite=i.id,this.log(`${this.char().name}\u4E70\u4E0B\u300C${i.name}\u300D\u2212${i.price}`)}else this.log(`${this.char().name}\u6682\u65F6\u653E\u5F03\u300C${i.name}\u300D\u3002`);return this.s.phase="end",!0}upgrade(e){if(this.s.ownership[e]?.level===0)return this.construct(e,"residence");if(!this.canUpgrade(e))return!1;let t=this.player,i=this.tiles[e],s=this.s.ownership[e],r=this.buildPrice(i);return t.money-=r,t.buildsUsed++,s.level++,this.log(`${this.char().name}\u5C06\u300C${i.name}\u300D\u5347\u7EA7\u4E3A ${s.level} \u7EA7 \u2212${r}`),!0}demolish(e){if(!this.manageable()||this.s.phase==="debt")return!1;let t=this.tiles[e],i=this.s.ownership[e];if(!t||!i||this.s.phase!=="end"||this.player.pos!==e||this.player.buildSite!==e||i.player!==this.player.id||i.level===0)return!1;let s=Math.floor((this.cost(t,i.level,Je(i))-t.price)*.25);return i.level=0,ah(i),this.player.money+=s,this.log(`${this.char().name}\u62C6\u9664\u300C${t.name}\u300D\u623F\u5C4B\uFF0C\u4FDD\u7559\u571F\u5730\uFF0C\u56DE\u6536\u6750\u6599 +${s}`),!0}sell(e){if(!this.manageable())return!1;let t=this.tiles[e],i=this.s.ownership[e];if(!i||i.player!==this.player.id)return!1;let s=Ni(this.cost(t,i.level,Je(i))*.65);return this.player.money+=s,delete this.s.ownership[e],this.log(`${this.char().name}\u53D8\u5356\u300C${t.name}\u300D+${s}`),!0}bank(e,t){if(!this.canBank()||(t=Ni(+t),!Number.isFinite(t)||t<=0))return!1;let i=this.player;if(e==="deposit"){if(this.s.phase==="debt"||i.money<t)return!1;i.money-=t,i.deposit+=t}else if(e==="withdraw"){if(i.deposit<t)return!1;i.deposit-=t,i.money+=t}else if(e==="borrow"){if(i.loan+t>1800)return!1;i.loan+=t,i.money+=t}else if(e==="repay"){if(this.s.phase==="debt"||i.money<t||i.loan<t)return!1;i.money-=t,i.loan-=t}else return!1;return this.log(`${this.char().name}${{deposit:"\u5B58\u5165",withdraw:"\u53D6\u51FA",borrow:"\u501F\u5165",repay:"\u507F\u8FD8"}[e]} ${t} \u5976\u5E01\u3002`),!0}trade(e,t){if(!this.manageable()||this.s.round%7===0)return!1;let i=this.player,s=this.s.market[e];if(t=+t,!Number.isInteger(e)||e<0||e>3||!s||!Number.isInteger(t)||t===0||Math.abs(t)>1e4||t>0&&(this.s.phase==="debt"||i.money<t*s.price)||t<0&&i.stocks[e]<-t)return!1;let r=hd(i,e,t,s.price,this.s.round);return this.log(`${this.char().name}${t>0?"\u4E70\u5165":"\u5356\u51FA"}${Math.abs(t)}\u80A1\u300C${s.name}\u300D\u3002`),!0}giveCard(e,t){if(t||=Object.keys(Ft)[this.int(Object.keys(Ft).length)],e.cards.length>=15){this.income(e,60,"\u5361\u5305\u5DF2\u6EE1\uFF0C\u8865\u507F");return}e.cards.push(t),this.log(`${this.char(e).name}\u83B7\u5F97\u300C${Ft[t].name}\u300D\u3002`)}shop(e){if(!this.canShop())return!1;let t=Ft[e],i=this.player;return!t||i.cards.length>=15||i.tickets<this.cardPrice(e)||i.shopUsed>=2?!1:(i.tickets-=this.cardPrice(e),i.shopUsed++,i.cards.push(e),this.log(`${this.char().name}\u8D2D\u4E70\u300C${t.name}\u300D\u2212${this.cardPrice(e)} \u70B9\u5238`),!0)}vehicle(e){if(!this.canShop())return!1;let t=this.player,i=Yi[e];return!i||e<=t.vehicle||t.money<i.price?!1:(t.money-=i.price,t.vehicle=e,t.diceCount=i.dice,this.log(`${this.char().name}\u8D2D\u5165${i.name}\uFF0C\u73B0\u5728\u53EF\u9009\u62E9 1\u2014${i.dice} \u9897\u9AB0\u5B50\u3002`),!0)}card(e,t){let i=this.player,s=i.cards[e];if(this.cardHint(s))return!1;let r="";if(s==="dice"){if(!Number.isInteger(t)||t<1||t>6||i.forced)return!1;i.forced=t,r=`\u6307\u5B9A\u672C\u6B21 ${t} \u6B65`}if(s==="block"){if(!Number.isInteger(t)||t<1||t>6)return!1;let a=i.pos;for(let o=0;o<t;o++)a=this.tiles[a].next[0];if(this.s.blocks[a]!==void 0||this.s.players.some(o=>o.alive&&o.pos===a))return!1;this.s.blocks[a]=i.id,r=`\u5728\u300C${this.tiles[a].name}\u300D\u653E\u7F6E\u8DEF\u969C`}if(s==="turn"){if(i.reverse)return!1;i.reverse=!0}if(s==="shield"){if(i.shield)return!1;i.shield=!0}if(s==="recover"&&(i.skip=0,i.spirit==="misfortune"&&(i.spirit=null,i.spiritTurns=0),this.income(i,80,"\u559D\u4E0B\u91CE\u751F\u72D7\u5976")),s==="steal"){let a=this.tiles[t],o=this.s.ownership[t];if(!this.cardTargets(s).some(l=>l.id===t))return!1;let c=this.takeoverPrice(t);if(i.money<c)return!1;i.money-=c,this.s.players[o.player].money+=c,this.recordTransfer(o.player,c,"takeover"),o.player=i.id,r=`\u6536\u8D2D\u300C${a.name}\u300D\u2212${c}`}if(s==="demolish"||s==="build"){if(!this.cardTargets(s).some(a=>a.id===t))return!1;if(s==="demolish"&&this.s.blocks[t]!==void 0)delete this.s.blocks[t],r=`\u6E05\u7406\u300C${this.tiles[t].name}\u300D\u8DEF\u969C`;else{let a=this.s.ownership[t];s==="build"&&a.level===0&&(a.buildingType="residence"),a.level+=s==="build"?1:-1,ah(a),r=`${s==="build"?"\u52A0\u76D6":"\u62C6\u9664"}\u300C${this.tiles[t].name}\u300D\u4E00\u5C42`}}if(s==="slow"){if(i.slowTurns||i.forced)return!1;i.slowTurns=3}return i.cards.splice(e,1),i.cardsUsed++,this.log(`${this.char().name}\u4F7F\u7528\u300C${Ft[s].name}\u300D${r}`),!0}attach(){let e=this.player,t=Object.keys(mn)[this.int(3)];if(t==="misfortune"&&e.spirit==="guardian"){e.spirit=null,e.spiritTurns=0,this.log("\u5976\u86CB\u5B88\u62A4\u62B5\u6321\u4E86\u9709\u8FD0\u3002"),this.notice("\u5976\u86CB\u5B88\u62A4","\u66FF\u4F60\u6321\u4F4F\u4E00\u6B21\u9709\u8FD0\uFF0C\u5B88\u62A4\u6548\u679C\u5DF2\u6D88\u8017\u3002","happy");return}e.spirit=t,e.spiritTurns=4,this.log(`${this.char().name}\u8FCE\u6765\u300C${mn[t].name}\u300D\uFF0C\u6301\u7EED 3 \u4E2A\u540E\u7EED\u56DE\u5408\u3002`),this.notice(mn[t].name,`${mn[t].description}\u3002\u6301\u7EED\u81F3\u63A5\u4E0B\u6765 3 \u6B21\u884C\u52A8\u7ED3\u675F\uFF0C\u540C\u7C7B\u5237\u65B0\u3001\u5F02\u7C7B\u66FF\u6362\u3002`,t==="misfortune"?"sad":"happy")}event(){let e=this.player,t=$a[this.int($a.length)];if(this.log(`\u300C${t.name}\u300D${t.text}`),["loss","rest"].includes(t.kind)&&e.spirit==="guardian"){e.spirit=null,e.spiritTurns=0,this.notice("\u5976\u86CB\u66FF\u4F60\u6321\u4F4F\u4E86\uFF01",`\u300C${t.name}\u300D\u7684\u8D1F\u9762\u6548\u679C\u5DF2\u62B5\u6D88\u3002`,"happy");return}if(t.stock!==void 0){let i=this.s.market[t.stock];i.previous??=i.price,i.price=Math.max(20,Math.min(500,Ni(i.price*(1+t.change)))),i.change=i.price-i.previous,i.history.push(i.price),i.history=i.history.slice(-20)}if(t.kind==="gain"&&this.income(e,t.amount,"\u83B7\u5F97\u4E8B\u4EF6\u5956\u52B1"),!(t.kind==="loss"&&!this.charge(t.amount,null,t.name))){if(t.kind==="rest"&&(e.skip=1,this.income(e,t.amount,"\u6D17\u6FA1\u8865\u8D34")),t.kind==="recover"&&(e.skip=0,this.giveCard(e,"recover")),t.kind==="card"&&this.giveCard(e),t.kind==="spirit"){this.attach();return}this.notice(t.name,t.text,t.kind==="loss"?"sad":"happy")}}settle(){if(this.s.phase!=="debt")return!1;let e=this.s.debt,t=this.player;return t.money<e.amount?!1:(t.money-=e.amount,e.to!==null&&(this.s.players[e.to].money+=e.amount),this.recordTransfer(e.to,e.amount),this.log(`${this.char().name}\u652F\u4ED8${e.label} \u2212${e.amount}`),this.s.debt=null,this.s.phase="end",!0)}bankrupt(){if(this.s.phase!=="debt")return!1;let e=this.player,t=this.s.debt;e.money+=e.deposit,e.deposit=0;for(let s=0;s<4;s++)e.stocks[s]&&hd(e,s,-e.stocks[s],this.s.market[s].price,this.s.round);for(let s of this.owned(e))e.money+=Ni(this.cost(s.tile,s.level,Je(s))*.65),delete this.s.ownership[s.tile.id];e.money+=Ni(Yi[e.vehicle].price*.5),e.vehicle=0,e.diceCount=1,e.forced=0,e.slowTurns=0,e.skip=0;let i=Math.min(e.money,t.amount);return e.money-=i,t.to!==null&&(this.s.players[t.to].money+=i),this.recordTransfer(t.to,i,"liquidation"),e.alive=!1,e.spirit=null,this.s.debt=null,this.log(`${this.char().name}\u7533\u8BF7\u7834\u4EA7\uFF0C\u6E05\u7B97\u652F\u4ED8 ${i} \u5976\u5E01\uFF0C\u9000\u51FA\u672C\u5C40\u3002`),this.s.phase="end",this.s.players.filter(s=>s.alive).length===1&&this.finish(),!0}end(){if(this.s.phase!=="end")return!1;let e=this.player;if(e.spirit&&--e.spiritTurns<=0&&(e.spirit=null),e.reverse=!1,this.s.players.filter(i=>i.alive).length<=1)return this.finish(),!0;let t=this.s.current;do if(t=(t+1)%this.s.players.length,t===(this.s.firstPlayer??0)){if(this.s.round>=this.s.maxRounds)return this.finish(),!0;this.s.round++,this.s.pickups={},this.marketTick()}while(!this.s.players[t].alive);return this.s.current=t,this.player.businessReady=!1,this.player.talentReady=!1,this.player.cardsUsed=0,this.player.buildsUsed=0,this.player.shopUsed=0,this.player.buildSite=null,this.player.bankAccess=!1,this.player.aiTradeDone=!1,this.player.aiBankDone=!1,this.s.phase="roll",!0}marketTick(){for(let e of this.s.market){let t=e.price;e.price=Math.max(20,Math.min(500,Ni(e.price*(.88+this.rng()*.24)))),e.previous=t,e.previous=t,e.change=e.price-t,e.history.push(e.price),e.history=e.history.slice(-20)}for(let e of this.s.players){if(!e.alive)continue;let t=Math.floor(e.deposit*.005),i=Ni(e.loan*.04);e.deposit+=t,e.loan+=i,(t||i)&&this.log(`${this.char(e).name}\uFF1A\u5B58\u6B3E\u5229\u606F +${t}\uFF0C\u8D37\u6B3E\u5229\u606F +${i}\uFF08\u8BA1\u5165\u672C\u91D1\uFF09\u3002`)}this.log(`\u7B2C ${this.s.round} \u8F6E\u5F00\u59CB\uFF0C\u5976\u5BB6\u80A1\u5E02\u884C\u60C5\u5DF2\u66F4\u65B0\u3002`)}finish(){this.s.phase="finished";let e=this.leaders();this.s.winner=e[0]?.id??0,this.log(`\u672C\u5C40\u7ED3\u675F\uFF01${e.map(t=>this.char(t).name).join("\u3001")}${e.length>1?"\u5E76\u5217":""}\u6210\u4E3A\u5976\u5BB6\u5927\u5BCC\u7FC1\u3002`)}leaders(){let e=this.ranking(),t=e[0];return e.filter(i=>i.alive===t.alive&&this.worth(i)===this.worth(t))}ranking(){return[...this.s.players].sort((e,t)=>Number(t.alive)-Number(e.alive)||this.worth(t)-this.worth(e)||e.id-t.id)}ai(){return zm(this)}};var Oc=.85,Fc=1.65,Xm=[{value:1,normal:[0,1,0]},{value:6,normal:[0,-1,0]},{value:2,normal:[0,0,1]},{value:5,normal:[0,0,-1]},{value:3,normal:[1,0,0]},{value:4,normal:[-1,0,0]}],X1={1:[[0,0]],2:[[-1,1],[1,-1]],3:[[-1,1],[0,0],[1,-1]],4:[[-1,-1],[-1,1],[1,-1],[1,1]],5:[[-1,-1],[-1,1],[0,0],[1,-1],[1,1]],6:[[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1]]},q1=new as(1,1,1,4,.09),Y1=new Zt(1,24,16),Wm=new A(0,1,0),Z1=new A(0,0,1);function j1(n,e=0){let t=Xm.find(i=>i.value===n);if(!t)throw Error("Invalid die result");return new Qt().setFromAxisAngle(Wm,.45+e*.2).multiply(new Qt().setFromUnitVectors(new A(...t.normal),Wm))}function qm(n,e){return!!n&&["roll","departure"].includes(n.phase)&&e.phase==="moving"&&n.current===e.current&&n.round===e.round}var Bc=class{constructor(e,t,i="#e7bc52"){if(!Array.isArray(e)||e.length<1||e.length>3||e.some(l=>!Number.isInteger(l)||l<1||l>6))throw Error("Invalid dice");this.values=[...e],this.anchorPoint=t.clone(),this.group=new xe,this.group.name="dice-roll",this.group.position.copy(t).add(new A(.7,2.15,.7));let s=new wt({color:"#fff1cf",roughness:.23,metalness:0,clearcoat:.8,clearcoatRoughness:.15}),r=new yt({color:"#5e3829",roughness:.5}),a=new yt({color:"#b6442d",roughness:.43});this.materials=[s,r,a],this.dice=[];for(let[l,h]of e.entries()){let u=new xe;u.name=`die-${l}`,u.userData.result=h;let f=new lt(q1,s);u.add(f);for(let d of Xm){let g=new A(...d.normal),v=new Qt().setFromUnitVectors(Z1,g),m=new xe;m.name=`pips-${d.value}`,m.position.copy(g).multiplyScalar(.501),m.quaternion.copy(v),u.add(m);for(let[p,x]of X1[d.value]){let y=new lt(Y1,d.value===1?a:r);y.scale.set(.066,.066,.012),y.position.set(p*.22,x*.22,0),m.add(y)}}this.group.add(u),this.dice.push({die:u,target:j1(h,l),index:l,offset:(l-(e.length-1)/2)*1.22})}let o=new kt({color:i,transparent:!0,opacity:.52,side:At,depthWrite:!1}),c=new lt(new Ls(.7,.735,64),o);c.rotation.set(-Math.PI/2,0,Math.atan2(.614,.789)),c.position.y=-.54,c.scale.set(1+(e.length-1)*.85,1,1),c.name="dice-landing-ring",this.group.add(c),this.ring=c,this.materials.push(o),this.update(0)}anchor(e,t=!1){e.updateMatrixWorld();let i=this.anchorPoint.clone().project(e);i.x=0,i.y=t?.28:.6,i.z=Math.max(-.9,i.z-.1),this.group.position.copy(i.unproject(e))}update(e){let t=gt.clamp(e/Oc,0,1),i=(1-t)*(1-t),s=1-gt.smoothstep(e,1.35,Fc);this.group.scale.setScalar(s*1.25);for(let{die:r,target:a,index:o,offset:c}of this.dice){let l=new Qt().setFromEuler(new bi(i*Math.PI*(4+o),i*Math.PI*(3+o),i*Math.PI*(5+o)));r.quaternion.copy(a).multiply(l);let h=(1-t)*.55,u=Math.sin(t*Math.PI)*(.7+.08*Math.sin(t*18+o));r.position.set((c-h)*.789,u,(-c+h)*.614)}this.ring.material.opacity=.52*(1-gt.smoothstep(e,1.35,Fc))}dispose(){for(let e of this.materials)e.dispose();this.ring.geometry.dispose(),this.group.clear()}};function Ym(n){n.updateWorldMatrix(!0,!0);let e=new Et().setFromObject(n);e.isEmpty()&&e.set(new A(0,n.position.y,0),new A(1,n.position.y+1,1));let t=new Ci(new A(0,-1,0),e.min.y),i=new Map,s=[];n.traverse(a=>{if(!a.isMesh)return;let o=a.material,c=a.userData.effectReveal,l=h=>{if(!i.has(h)){let u=h.clone();u.onBeforeCompile=h.onBeforeCompile.bind(h),u.customProgramCacheKey=h.customProgramCacheKey.bind(h),u.clippingPlanes=[...h.clippingPlanes||[],t],u.clipShadows=!0,i.set(h,u)}return i.get(h)};a.material=Array.isArray(o)?o.map(l):l(o),a.userData.effectReveal=!0,s.push({o:a,original:o,flag:c})});let r=!1;return{bounds:e,plane:t,set(a){t.constant=gt.lerp(e.min.y-.015,e.max.y+.015,gt.clamp(a,0,1))},restore(){if(!r){r=!0;for(let{o:a,original:o,flag:c}of s)a.material=o,c===void 0?delete a.userData.effectReveal:a.userData.effectReveal=c;for(let a of i.values())a.dispose()}}}}function Zm(n,e){return!!n&&(n.level!==(e?.level||0)||(n.buildingType||"legacy")!==(e?.buildingType||"legacy"))}var xn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ui=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},J1=new Ei(-1,1,1,-1,0,1),fd=class extends tt{constructor(){super(),this.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pe([0,2,0,0,2,0],2))}},K1=new fd,yn=class{constructor(e){this._mesh=new lt(K1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,J1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Br=class extends ui{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ci.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qa=class extends ui{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zc=class extends ui{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Hc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ne);this._width=i.width,this._height=i.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:li}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Br(xn),this.copyPass.material.blending=zt,this.clock=new Pa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}qa!==void 0&&(a instanceof qa?i=!0:a instanceof zc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vc=class extends ui{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Ya={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ke},cameraProjectionMatrixInverse:{value:new Ke},cameraWorldMatrix:{value:new Ke},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

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
		}`},Za={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Gc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function jm(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=Q1(e),i=t.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=t[a],c=2*Math.PI*o/i,l=new A(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new en(s,e,e);return r.wrapS=Pi,r.wrapT=Pi,r.needsUpdate=!0,r}function Q1(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=a++;r++,s--}return i}var ja={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:pd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraProjectionMatrixInverse:{value:new Ke},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function pd(n,e,t){let i=eb(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let a=i[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<n-1?",":")"}`}return s}function eb(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,a=Math.pow(s/(n-1),t);i.push(new A(Math.cos(r),Math.sin(r),a))}return i}var $c=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,f=c-u,d=l-u,g=e-f,v=t-d,m,p;g>v?(m=1,p=0):(m=0,p=1);let x=g-m+h,y=v-p+h,_=g-1+2*h,R=v-1+2*h,T=c&255,L=l&255,U=this.perm[T+this.perm[L]]%12,S=this.perm[T+m+this.perm[L+p]]%12,M=this.perm[T+1+this.perm[L+1]]%12,D=.5-g*g-v*v;D<0?i=0:(D*=D,i=D*D*this._dot(this.grad3[U],g,v));let k=.5-x*x-y*y;k<0?s=0:(k*=k,s=k*k*this._dot(this.grad3[S],x,y));let X=.5-_*_-R*R;return X<0?r=0:(X*=X,r=X*X*this._dot(this.grad3[M],_,R)),70*(i+s+r)}noise3d(e,t,i){let s,r,a,o,l=(e+t+i)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),f=Math.floor(i+l),d=1/6,g=(h+u+f)*d,v=h-g,m=u-g,p=f-g,x=e-v,y=t-m,_=i-p,R,T,L,U,S,M;x>=y?y>=_?(R=1,T=0,L=0,U=1,S=1,M=0):x>=_?(R=1,T=0,L=0,U=1,S=0,M=1):(R=0,T=0,L=1,U=1,S=0,M=1):y<_?(R=0,T=0,L=1,U=0,S=1,M=1):x<_?(R=0,T=1,L=0,U=0,S=1,M=1):(R=0,T=1,L=0,U=1,S=1,M=0);let D=x-R+d,k=y-T+d,X=_-L+d,W=x-U+2*d,O=y-S+2*d,z=_-M+2*d,ee=x-1+3*d,H=y-1+3*d,te=_-1+3*d,ae=h&255,he=u&255,we=f&255,Oe=this.perm[ae+this.perm[he+this.perm[we]]]%12,We=this.perm[ae+R+this.perm[he+T+this.perm[we+L]]]%12,Ze=this.perm[ae+U+this.perm[he+S+this.perm[we+M]]]%12,J=this.perm[ae+1+this.perm[he+1+this.perm[we+1]]]%12,oe=.6-x*x-y*y-_*_;oe<0?s=0:(oe*=oe,s=oe*oe*this._dot3(this.grad3[Oe],x,y,_));let ue=.6-D*D-k*k-X*X;ue<0?r=0:(ue*=ue,r=ue*ue*this._dot3(this.grad3[We],D,k,X));let ge=.6-W*W-O*O-z*z;ge<0?a=0:(ge*=ge,a=ge*ge*this._dot3(this.grad3[Ze],W,O,z));let Re=.6-ee*ee-H*H-te*te;return Re<0?o=0:(Re*=Re,o=Re*Re*this._dot3(this.grad3[J],ee,H,te)),32*(s+r+a+o)}noise4d(e,t,i,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,f,d,g,v=(e+t+i+s)*c,m=Math.floor(e+v),p=Math.floor(t+v),x=Math.floor(i+v),y=Math.floor(s+v),_=(m+p+x+y)*l,R=m-_,T=p-_,L=x-_,U=y-_,S=e-R,M=t-T,D=i-L,k=s-U,X=S>M?32:0,W=S>D?16:0,O=M>D?8:0,z=S>k?4:0,ee=M>k?2:0,H=D>k?1:0,te=X+W+O+z+ee+H,ae=a[te][0]>=3?1:0,he=a[te][1]>=3?1:0,we=a[te][2]>=3?1:0,Oe=a[te][3]>=3?1:0,We=a[te][0]>=2?1:0,Ze=a[te][1]>=2?1:0,J=a[te][2]>=2?1:0,oe=a[te][3]>=2?1:0,ue=a[te][0]>=1?1:0,ge=a[te][1]>=1?1:0,Re=a[te][2]>=1?1:0,Ae=a[te][3]>=1?1:0,at=S-ae+l,N=M-he+l,le=D-we+l,j=k-Oe+l,re=S-We+2*l,se=M-Ze+2*l,ve=D-J+2*l,de=k-oe+2*l,ye=S-ue+3*l,He=M-ge+3*l,Ge=D-Re+3*l,C=k-Ae+3*l,b=S-1+4*l,G=M-1+4*l,E=D-1+4*l,I=k-1+4*l,P=m&255,Y=p&255,ie=x&255,_e=y&255,B=o[P+o[Y+o[ie+o[_e]]]]%32,Z=o[P+ae+o[Y+he+o[ie+we+o[_e+Oe]]]]%32,Me=o[P+We+o[Y+Ze+o[ie+J+o[_e+oe]]]]%32,ze=o[P+ue+o[Y+ge+o[ie+Re+o[_e+Ae]]]]%32,Ue=o[P+1+o[Y+1+o[ie+1+o[_e+1]]]]%32,Ee=.6-S*S-M*M-D*D-k*k;Ee<0?h=0:(Ee*=Ee,h=Ee*Ee*this._dot4(r[B],S,M,D,k));let Xe=.6-at*at-N*N-le*le-j*j;Xe<0?u=0:(Xe*=Xe,u=Xe*Xe*this._dot4(r[Z],at,N,le,j));let F=.6-re*re-se*se-ve*ve-de*de;F<0?f=0:(F*=F,f=F*F*this._dot4(r[Me],re,se,ve,de));let fe=.6-ye*ye-He*He-Ge*Ge-C*C;fe<0?d=0:(fe*=fe,d=fe*fe*this._dot4(r[ze],ye,He,Ge,C));let be=.6-b*b-G*G-E*E-I*I;return be<0?g=0:(be*=be,g=be*be*this._dot4(r[Ue],b,G,E,I)),27*(h+u+f+d+g)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}};var Ja=class n extends ui{constructor(e,t,i=512,s=512,r,a,o){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=jm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ht(this.width,this.height,{type:li}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new pt({defines:Object.assign({},Ya.defines),uniforms:ci.clone(Ya.uniforms),vertexShader:Ya.vertexShader,fragmentShader:Ya.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Aa,this.normalMaterial.blending=zt,this.pdMaterial=new pt({defines:Object.assign({},ja.defines),uniforms:ci.clone(ja.uniforms),vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new pt({defines:Object.assign({},Za.defines),uniforms:ci.clone(Za.uniforms),vertexShader:Za.vertexShader,fragmentShader:Za.fragmentShader,blending:zt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new pt({uniforms:ci.clone(xn.uniforms),vertexShader:xn.vertexShader,fragmentShader:xn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:La,blendDst:Ns,blendEquation:yi,blendSrcAlpha:Da,blendDstAlpha:Ns,blendEquationAlpha:yi}),this.blendMaterial=new pt({uniforms:ci.clone(Gc.uniforms),vertexShader:Gc.vertexShader,fragmentShader:Gc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:dl,blendSrc:La,blendDst:Ns,blendEquation:yi,blendSrcAlpha:Da,blendDstAlpha:Ns,blendEquationAlpha:yi}),this._fsQuad=new yn(null),this._originalClearColor=new Se,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Is,this.depthTexture.format=ss,this.depthTexture.type=ns,this.normalRenderTarget=new Ht(this.width,this.height,{minFilter:qt,magFilter:qt,type:li,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=pd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2||i.isSprite||i.userData.effectReveal)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new $c,i=e*e*4,s=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new en(s,e,e,fi,wi);return r.wrapS=Pi,r.wrapT=Pi,r.needsUpdate=!0,r}};Ja.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Jm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Or=class n extends ui{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(r,a,{type:li}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ht(r,a,{type:li});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Ht(r,a,{type:li});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Jm;this.highPassUniforms=ci.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ci.clone(xn.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:xn.vertexShader,fragmentShader:xn.fragmentShader,blending:Ia,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Se,this._oldClearAlpha=1,this._basic=new kt,this._fsQuad=new yn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Or.BlurDirectionX=new ne(1,0);Or.BlurDirectionY=new ne(0,1);var Ka={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Wc=class extends ui{constructor(){super(),this.uniforms=ci.clone(Ka.uniforms),this.material=new Ta({name:Ka.name,uniforms:this.uniforms,vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader}),this._fsQuad=new yn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_l?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ml?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ln?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===El?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Sl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Km={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ne(1/1024,1/512)}},vertexShader:`

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

		}`};var Qa=class{constructor(e,t,i){this.renderer=e;let s=new Vi;s.add(new lt(new Zt(30,32,20),new kt({color:"#a8c0cb",side:Vt})));for(let[a,o,c,l,h]of[[-8,12,9,8,[4.5,3.9,2.9]],[9,8,-7,6,[1.8,2.7,4.2]],[0,16,0,10,[3,3,2.7]]]){let u=new lt(new Yt(l,l),new kt({side:At,color:new Se().setRGB(...h)}));u.position.set(a,o,c),u.lookAt(0,0,0),s.add(u)}let r=new Ir(e);this.environment=r.fromScene(s,.05),t.environment=this.environment.texture,t.environmentIntensity=.32,r.dispose(),s.traverse(a=>{a.geometry?.dispose(),a.material?.dispose()}),this.composer=new Hc(e),this.composer.addPass(new Vc(t,i)),this.ao=new Ja(t,i,1,1),this.ao.blendIntensity=.7,this.ao.updateGtaoMaterial({radius:.62,distanceExponent:1.5,thickness:.6,distanceFallOff:1,scale:1,samples:32,screenSpaceRadius:!1}),this.composer.addPass(this.ao),this.bloom=new Or(new ne(1,1),.08,.5,1.2),this.composer.addPass(this.bloom),this.composer.addPass(new Wc),this.fxaa=new Br(Km),this.composer.addPass(this.fxaa)}resize(e,t,i){this.composer.setPixelRatio(i),this.composer.setSize(e,t),this.fxaa.uniforms.resolution.value.set(1/(e*i),1/(t*i))}studio(e){this.ao.updateGtaoMaterial({radius:e?.28:.62,thickness:e?.18:.6}),this.ao.blendIntensity=e?.58:.7}render(){this.composer.render()}dispose(){if(!this.disposed){this.disposed=!0;for(let e of this.composer.passes)e.dispose?.();this.composer.dispose(),this.environment.dispose()}}};var tb=new nn(.16,.16,.05,32),ib=new oi(.124,.01,6,28),md=1.6;function Qm(n,e,t){let i=n.clone().lerp(e,t),s=Math.min(4.5,1.2+n.distanceTo(e)*.12);return i.y+=4*t*(1-t)*s,i}var Xc=class{constructor(e,t,i){this.from=e.clone().add(new A(0,1.05,0)),this.to=t.clone().add(new A(0,1.05,0)),this.amount=i,this.group=new xe,this.group.name="money-transfer";let s=new wt({color:"#edbc44",metalness:.65,roughness:.27,clearcoat:.6}),r=new yt({color:"#fff0ab",metalness:.5,roughness:.3});this.materials=[s,r],this.coins=[];let a=Math.max(5,Math.min(12,5+Math.floor(Math.log2(Math.max(1,i))/2)));for(let c=0;c<a;c++){let l=new xe,h=new lt(tb,s);h.rotation.x=Math.PI/2,l.add(h);for(let u of[-1,1]){let f=new lt(ib,r);f.position.z=u*.028,l.add(f)}this.group.add(l),this.coins.push(l)}let o=Array.from({length:65},(c,l)=>Qm(this.from,this.to,l/64));this.path=new Sr(new tt().setFromPoints(o),new tn({color:"#ffe0a0",transparent:!0,opacity:.25,depthWrite:!1})),this.group.add(this.path),this.update(0)}update(e){for(let[t,i]of this.coins.entries()){let s=gt.clamp((e-t*.035)/1.05,0,1);i.position.copy(Qm(this.from,this.to,s)),i.rotation.set(.2+e*4+t*.7,e*7+t*.9,.15),i.scale.setScalar(Math.min(1,s/.08,(1-s)/.1))}this.path.material.opacity=.25*(1-gt.smoothstep(e,1.15,md))}dispose(){this.path.geometry.dispose(),this.path.material.dispose();for(let e of this.materials)e.dispose();this.group.clear()}};var nb=new Qi(.13,.13,.13),sb=new Zt(1,24,16),pi=(n,e)=>{let t=Math.sin(n*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)};function rb(n,e,t,i){return nt(n,e,t,.018,.018,i,12)}function e0(n){let e=new Set;n.traverse(t=>{t.geometry?.type==="TubeGeometry"&&t.geometry.dispose(),t.material&&e.add(t.material)});for(let t of e)t.map?.dispose(),t.dispose()}var qc=class{constructor(e,{reduced:t=!1,onDiceState:i=()=>{}}={}){this.parent=e,this.reduced=t,this.onDiceState=i,this.items=[],this.clock=0}transfer(e,t,i,s){if(this.reduced||!i||e.distanceTo(t)<.01)return!1;let r=new Xc(e,t,i);return this.parent.add(r.group),this.items.push({kind:"transfer",group:r.group,transfer:r,particles:[],age:0,duration:md,done:s}),!0}anchorDice(e,t){for(let i of this.items)i.dice&&i.dice.anchor(e,t)}get diceRolling(){return this.items.some(e=>e.kind==="dice"&&e.age<Oc)}rollDice(e,t,i){if(this.clearDice(),this.reduced)return;let s=new Bc(e,t,i);this.parent.add(s.group),this.items.push({kind:"dice",group:s.group,dice:s,particles:[],age:0,duration:Fc,impacted:!1}),this.onDiceState(!0,!1,!0)}clearDice(){for(let e of[...this.items])e.dice&&(this.items.splice(this.items.indexOf(e),1),this.parent.remove(e.group),e.dice.dispose());this.onDiceState(!1,!1,!1)}spawn(e,t,i="#e7c76d",s){if(this.reduced)return;let r=new xe;r.position.copy(t),this.parent.add(r);let a=e==="demolish"?36:e==="build"?24:20,o=[];for(let c=0;c<a;c++){let l=c*2.399963+pi(c,1)*.8,h=.12+pi(c,2)*.6,u=e==="dust",f=new yt({color:u?"#dfd5bb":c%3===0?"#fff1c5":i,transparent:!0,opacity:u?.4:1,roughness:1,depthWrite:!1}),d=Fe(r,u?sb:nb,f,[Math.cos(l)*h,.06+pi(c,3)*.35,Math.sin(l)*h]);d.castShadow=!1,d.receiveShadow=!1,u?d.scale.setScalar(.14+pi(c,4)*.2):d.scale.set(.5+pi(c,4)*1.5,.4+pi(c,5),.5+pi(c,6)*1.4),d.rotation.set(pi(c,7)*3,pi(c,8)*3,pi(c,9)*3);let g=(u?.18:.5)+pi(c,10)*(u?.45:1.3);o.push({m:d,v:new A(Math.cos(l)*g,u?.2+pi(c,11)*.5:e==="demolish"?-.15+pi(c,11)*1.25:1.2+pi(c,11)*1.8,Math.sin(l)*g)})}this.items.push({kind:e,group:r,particles:o,ground:.07-t.y,age:0,duration:s??(e==="dust"?2:1.6)})}transition(e,t,i,{startHeight:s,endHeight:r}={}){if(this.finish(e),this.reduced){t==="remove"&&i?.();return}if(t==="grow"&&e.userData.vacant)return;let a=Ym(e),o=e.rotation.clone(),c=Math.max(.001,a.bounds.max.y-a.bounds.min.y),l=f=>gt.clamp((f-a.bounds.min.y)/c,0,1),h=s===void 0?t==="remove"?1:0:l(s),u=r===void 0?t==="remove"?0:1:l(r);a.set(h),this.items.push({kind:t,object:e,reveal:a,baseRotation:o,from:h,to:u,age:0,duration:t==="remove"?1.35:1.6,done:i,baseY:e.position.y,baseScale:e.scale.clone(),lastBurst:0})}construction(e,t=2){if(this.reduced)return;let i=1.04,s=.88,r=e;if(e.isObject3D){e.updateWorldMatrix(!0,!0);let g=new Et().setFromObject(e),v=g.getSize(new A);t=Math.max(.8,v.y+.18),i=Math.max(1.04,v.x/2+.12),s=Math.max(.88,v.z/2+.12),r=e.getWorldPosition(new A)}let a=new xe,o=new yt({color:"#9da9aa",metalness:.65,roughness:.38,transparent:!0,opacity:.88}),c=new yt({color:"#b9925c",roughness:.9,transparent:!0,opacity:1}),l=new yt({color:"#dc9544",roughness:.8,transparent:!0,opacity:.38,depthWrite:!1});for(let g of[-i,i])for(let v of[-s,s])rb(a,o,[g,t/2,v],t),q(a,c,[g,.04,v],[.2,.06,.2]);for(let g=.35;g<=t;g+=.5){for(let v of[-s,s])q(a,o,[0,g,v],[i*2,.025,.025]),Qe(a,o,[[-i,g,v],[i,Math.min(g+.5,t),v]],.012);for(let v of[-i,i])q(a,o,[v,g,0],[.025,.025,s*2]);q(a,c,[0,g-.05,-s],[i*2,.035,.22])}for(let g of[-i,i])q(a,l,[g,t*.44,0],[.012,t*.55,s*2]);let h=new xe;h.position.set(i+.12,0,-s),a.add(h),q(h,o,[0,t*.6,0],[.08,t*1.2,.08]);let u=new xe;u.position.y=t*1.2,h.add(u),q(u,o,[-i*.65,0,0],[i*1.9,.06,.08]),q(u,c,[.28,-.08,0],[.33,.2,.25]);let f=new xe;f.position.x=-i*1.2,u.add(f),Qe(f,o,[[0,0,0],[0,-t*.35,0],[.08,-t*.38,0]],.013);let d=q(f,c,[0,-t*.4,0],[.34,.12,.3]);a.position.copy(r),this.parent.add(a),this.items.push({kind:"scaffold",group:a,particles:[],materials:[o,c,l],hook:f,boom:u,load:d,age:0,duration:1.9,height:t})}money(e,t){if(this.reduced||!t)return;let i=document.createElement("canvas");i.width=256,i.height=80;let s=i.getContext("2d");s.font='bold 40px "Microsoft YaHei",sans-serif',s.textAlign="center",s.fillStyle=t>0?"#fce49c":"#ffcab5",s.strokeStyle="#385664",s.lineWidth=5,s.strokeText(`${t>0?"+":""}${t}`,128,53),s.fillText(`${t>0?"+":""}${t}`,128,53);let r=new Kn(i);r.colorSpace=It;let a=new Ii({map:r,transparent:!0,depthTest:!1}),o=new xe,c=new Gi(a);c.scale.set(2.2,.7,1),o.add(c),o.position.copy(e),o.position.y+=2,this.parent.add(o),this.items.push({kind:"float",group:o,mat:a,age:0,duration:1.3,particles:[]})}update(e){this.clock+=e;for(let t=this.items.length-1;t>=0;t--){let i=this.items[t];i.age+=e;let s=Math.min(1,i.age/i.duration);if(i.kind==="transfer")i.transfer.update(i.age);else if(i.kind==="dice")i.dice.update(i.age),!i.impacted&&i.age>=Oc&&(i.impacted=!0,this.onDiceState(!1,!0,!0));else if(i.kind==="float")i.group.position.y+=e*.85,i.mat.opacity=1-s*s;else if(i.kind==="scaffold"){let r=s<.8?1:(1-s)/.2;i.materials.forEach((a,o)=>a.opacity=r*[.88,1,.38][o]),i.boom.rotation.y=Math.sin(s*Math.PI)*.16,i.hook.position.y=Math.sin(s*Math.PI)*i.height*.12,i.hook.rotation.z=Math.sin(s*Math.PI*4)*.04}else if(i.group)for(let{m:r,v:a}of i.particles)r.position.addScaledVector(a,e),i.kind!=="dust"&&(a.y-=e*4.5,r.position.y<i.ground&&(r.position.y=i.ground,a.y=Math.abs(a.y)*.22,a.x*=.72,a.z*=.72)),r.rotation.x+=e*2,r.rotation.z+=e*1.5,r.material.opacity=(1-s)*(i.kind==="dust"?.4:1),i.kind==="dust"&&r.scale.addScalar(e*.2);else if(i.kind==="grow"){let r=1-Math.pow(1-s,1.3);i.reveal.set(gt.lerp(i.from,i.to,r))}else if(i.kind==="remove"&&(i.reveal.set(gt.lerp(i.from,i.to,s*s)),i.object.rotation.z=i.baseRotation.z+Math.sin(s*Math.PI*8)*(1-s)*.012,s-i.lastBurst>.23&&s<.85)){i.lastBurst=s;let r=i.reveal.bounds,a=r.getCenter(new A);a.y=i.reveal.plane.constant,this.spawn("demolish",a,"#cbb38c",.6)}s===1&&(i.group?(this.parent.remove(i.group),i.dice?(this.onDiceState(!1,!1,!1),i.dice.dispose()):i.transfer?i.transfer.dispose():e0(i.group)):(i.reveal?.restore(),i.object.scale.copy(i.baseScale),i.object.position.y=i.baseY,i.object.rotation.copy(i.baseRotation)),this.items.splice(t,1),i.done?.())}}finish(e){for(let t of[...this.items])t.object===e&&(this.items.splice(this.items.indexOf(t),1),t.reveal?.restore(),t.object.scale.copy(t.baseScale),t.object.position.y=t.baseY,t.object.rotation.copy(t.baseRotation),t.done?.())}clear(){this.onDiceState(!1,!1,!1);for(let e of this.items)e.group?(this.parent.remove(e.group),e.dice?(this.onDiceState(!1,!1,!1),e.dice.dispose()):e.transfer?e.transfer.dispose():e0(e.group)):(e.reveal?.restore(),e.object.scale.copy(e.baseScale),e.object.position.y=e.baseY,e.object.rotation.copy(e.baseRotation)),e.done?.();this.items=[]}};var Yc=class{constructor({pan:e,zoom:t,tap:i,turn:s,isStudio:r=()=>!1}){Object.assign(this,{pan:e,zoom:t,tap:i,turn:s,isStudio:r}),this.points=new Map,this.multi=!1,this.dragged=!1,this.travel=0}down(e,t,i){this.points.size||(this.multi=!1,this.dragged=!1,this.travel=0),this.points.set(e,{x:t,y:i}),this.points.size>1&&(this.multi=!0)}move(e,t,i){let s=this.points.get(e);if(!s)return;let r=[...this.points.values()],a=t-s.x,o=i-s.y;this.points.set(e,{x:t,y:i}),this.travel+=Math.hypot(a,o);let c=[...this.points.values()];if(c.length===2){let l=f=>Math.hypot(f[0].x-f[1].x,f[0].y-f[1].y),h=l(r),u=l(c);this.dragged=!0,h>1&&u>1&&this.zoom(u/h);return}this.multi||this.travel>6&&(this.dragged=!0,this.isStudio()?this.turn(a):this.pan(a,o))}up(e,t,i){if(!this.points.has(e))return;let s=this.points.size===1;this.points.delete(e),s&&!this.multi&&!this.dragged&&this.travel<=6&&!this.isStudio()&&this.tap(t,i)}cancel(e){this.points.delete(e),this.multi=!0,this.dragged=!0}reset(){this.points.clear(),this.multi=!1,this.dragged=!1,this.travel=0}};function gd(n,e=.4){let t=new Et().setFromObject(n);if(t.isEmpty())return n.getWorldPosition(new A).add(new A(0,e,0));let i=t.getCenter(new A);return i.y=t.max.y+e,i}function t0(n,e,t,i){let s=new Gi(new Ii({map:os(t,{width:192,height:64,background:i,color:"#fff4dc"}),depthTest:!1,depthWrite:!1,transparent:!0}));return s.position.copy(gd(n)),s.scale.set(1.6,.53,1),s.renderOrder=5,s.userData.tile=e,s}var xd=n=>new A(n.lotX,.14,n.lotZ);function i0(n=1){let e=new $i;for(let t=0;t<=120;t++){let i=t/120*Math.PI*2,s=1+.06*Math.sin(i*5)+.035*Math.cos(i*3),r=21*n*s*Math.cos(i),a=16.8*n*s*Math.sin(i);t===0?e.moveTo(r,-a):e.lineTo(r,-a)}return e.closePath(),e}function vd(n,e,t,i,s=0){let r=s?new Dn(i0(e),{depth:s,bevelEnabled:!1,curveSegments:64}):new Ea(i0(e),64),a=Fe(n,r,i,[0,t,0]);return a.rotation.x=-Math.PI/2,a}function n0(n){let e=n.tiles,t=n.world,i=Fe(t,new Yt(240,240),Uu(),[0,-.69,0]);i.rotation.x=-Math.PI/2,vd(t,1,-.5,"#ae9270",.48),vd(t,1.015,-.035,"#ebd69c"),vd(t,.974,.025,"#86ad72");let s=new Set;for(let l of e)for(let h of l.next){let u=e[h],f=[l.id,h].sort((p,x)=>p-x).join(":");if(s.has(f))continue;s.add(f);let d=Math.hypot(u.x-l.x,u.z-l.z),g=Math.atan2(u.x-l.x,u.z-l.z),v=(l.x+u.x)/2,m=(l.z+u.z)/2;for(let[p,x,y]of[[2.12,.07,"#e1cda5"],[1.68,.115,"#667b7b"]]){let _=q(t,y,[v,x,m],[p,.035,d+.1]);_.rotation.y=g}if(d>1.5){let p=q(t,"#e8d6a0",[v,.142,m],[.035,.012,Math.min(.42,d*.3)]);p.rotation.y=g}}for(let l of e){nt(t,"#e1cda5",[l.x,.07,l.z],1.05,1.05,.04,24),nt(t,"#667b7b",[l.x,.115,l.z],.83,.83,.035,24);let h=new xe;h.userData.dynamic=!0,h.position.set(l.x,0,l.z),h.rotation.y=l.yaw,t.add(h);let u=q(h,"#718784",[0,.15,0],[1.6,.025,1.2]);u.userData.tile=l.id,n.tileMeshes.push(u);let f=l.kind==="property"?Ui[l.group].color:{start:"#f2cd54",bank:"#5f9fc1",hospital:"#e1837b",stock:"#9c8bd1",shop:"#e8a25e",spirit:"#d7b658",event:"#d883a3",rest:"#82b678",tax:"#78b6ae"}[l.kind],d=q(h,f,[0,.2,.52],[1.55,.07,.12]);d.userData.tile=l.id,n.tileMeshes.push(d);let g=Fe(h,new Yt(.6,.18),new kt({map:os(String(l.id+1),{width:96,height:48,background:"#718784",color:"#fff3cf"}),depthWrite:!1}),[0,.17,.16]);if(g.rotation.x=-Math.PI/2,l.kind!=="property"){let v=bc(l);v.position.copy(xd(l)),v.rotation.y=l.facing,v.userData.dynamic=!0,n.tag(v,l.id),t.add(v),n.tileMeshes.push(v);let m={bank:"\u94F6\u884C",hospital:"\u7597\u517B\u9662",stock:"\u8BC1\u5238\u6240",shop:"\u8865\u7ED9\u7AD9",spirit:"\u795E\u6BBF",event:"\u4E8B\u4EF6",rest:"\u5C0F\u7A9D",tax:"\u6E05\u6D01\u7AD9",start:"\u8D77\u70B9"},p={bank:"#477eb5",hospital:"#cc615d",stock:"#7b65b0",shop:"#cf8342",spirit:"#af8535",event:"#ae6686",rest:"#5b8b55",tax:"#558e88",start:"#a18a3c"},x=t0(v,l.id,m[l.kind],p[l.kind]);t.add(x),n.buildingBadges.push(x)}}let r=[];for(let l=0;l<=32;l++){let h=-17+l*34/32;r.push([h,.042,Math.sin(h*.21)*.8])}let a=[],o=[];r.forEach(([l,h,u],f)=>{if(a.push(l,.045,u-.58,l,.045,u+.58),f<r.length-1){let d=f*2;o.push(d,d+1,d+2,d+1,d+3,d+2)}});let c=new tt;c.setAttribute("position",new Pe(a,3)),c.setIndex(o),c.computeVertexNormals(),Fe(t,c,Uu(!0));for(let l of e)for(let h of l.next){let u=e[h],f=l.z-Math.sin(l.x*.21)*.8,d=u.z-Math.sin(u.x*.21)*.8;if(f*d>0||Math.abs(f-d)<.01)continue;let g=f/(f-d),v=l.x+(u.x-l.x)*g,m=l.z+(u.z-l.z)*g,p=new xe,x=1.8;for(let y=0;y<9;y++)q(p,"#d5bb88",[0,.16,-x/2+y*x/8],[1.68,.07,x/8]);for(let y of[-.8,.8])Qe(p,"#526f65",[[y,.4,-x/2],[y,.5,0],[y,.4,x/2]],.025);p.rotation.y=Math.atan2(u.x-l.x,u.z-l.z),p.position.set(v,0,m),t.add(p)}if(n.tiles[43].next[0]===3){for(let[l,h,u,f]of[["\u6668\u5149\u652F\u8DEF",-8,2,"#728b57"],["\u82B1\u56ED\u652F\u8DEF",8,-2,"#9a7f59"],["\u6EE8\u6CB3\u516C\u56ED",0,3.7,"#5e8b78"]]){let d=new Gi(new Ii({map:os(l,{width:256,height:72,background:f,color:"#fff5d9"}),transparent:!0,depthTest:!1}));d.position.set(h,.6,u),d.scale.set(2,.56,1),t.add(d)}for(let l of e)for(let h of l.next){let u=e[h],f=u.x-l.x,d=u.z-l.z,g=Math.hypot(f,d),v=l.x+f*.62,m=l.z+d*.62,p=f/g,x=d/g,y=new tt;y.setAttribute("position",new Pe([v+p*.2,.178,m+x*.2,v-p*.13-x*.1,.178,m-x*.13+p*.1,v-p*.13+x*.1,.178,m-x*.13-p*.1],3)),Fe(t,y,new kt({color:"#efddb1",side:At}))}}n.hero=new xe,t.add(n.hero),n.fountain=new xe,nt(n.fountain,"#c0b18a",[0,.14,0],.87,.94,.23),nt(n.fountain,"#8ec5c8",[0,.27,0],.79,.79,.035),nt(n.fountain,"#dfceab",[0,.48,0],.13,.19,.5),n.fountain.position.set(-1,.05,7.5),t.add(n.fountain),n.waterJets=[];for(let l=0;l<6;l++){let h=l/6*Math.PI*2;n.waterJets.push(Qe(n.fountain,"#b9e2df",[[0,.65,0],[Math.cos(h)*.45,1.05,Math.sin(h)*.45],[Math.cos(h)*.65,.3,Math.sin(h)*.65]],.016))}for(let[l,h,u]of[[-8,6,.9],[-6,7,.85],[4,6,1],[7,5,.9],[-7,-6,.9],[-4,-6,.75],[3,-6,.95],[7,-5.5,.8],[-2,7.5,.6],[1,7.5,.6]])e.every(f=>Math.hypot(f.lotX-l,f.lotZ-h)>2&&Math.hypot(f.x-l,f.z-h)>1.6)&&Fp(t,l,h,u);for(let[l,h]of[[-3,6.2],[2,6.6],[-5,-6],[5,-6]]){q(t,"#a18a62",[l,.35,h],[.9,.09,.28]),q(t,"#b79c6d",[l,.57,h-.1],[.9,.3,.05]);for(let u of[-.34,.34])q(t,"#57694f",[l+u,.2,h],[.055,.3,.23])}for(let l of e.filter(h=>h.id%6===2)){let h=(l.lotX-l.x)/2.3,u=(l.lotZ-l.z)/2.3;n.lamp(l.x-h*1.25,l.z-u*1.25)}for(let[l,h]of[[-19,8],[16,-13]]){let u=new xe;Le(u,"#eee4c8",[0,0,0],[1.2,.22,.45]),q(u,"#5c8891",[0,.2,0],[1.25,.3,.55]),q(u,"#fff0cf",[0,.4,0],[1.3,.06,.65]),u.position.set(l,-.47,h),t.add(u),n.floats.push(u)}n.ripples=[];for(let l of[n.fountain,...n.floats,...n.ripples])l.userData.dynamic=!0;Np(n),qi(t)}var Zc=xd;var jc=class{constructor(e,t,i=gn){this.tiles=i,this.el=e,this.onTile=t,this.follow=!1,this.zoom=1,this.offset=new A,this.quality="",this.paused=!1,this.last=0,this.time=0,this.game=null,this.showcase=null,this.reduced=matchMedia("(prefers-reduced-motion:reduce)").matches,this.scene=new Vi,this.scene.background=new Se("#b7d3dc"),this.scene.fog=new Rs("#b7d3dc",70,130),this.camera=new Ei(-19,19,13,-13,.1,180),this.camera.position.set(28,30,36),this.camera.lookAt(0,0,0),this.renderer=new rs({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(Math.max(devicePixelRatio,1.5),2.5)),this.renderer.shadowMap.enabled=!0,this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.type=ul,this.renderer.outputColorSpace=It,this.renderer.toneMapping=ln,this.renderer.toneMappingExposure=.94,e.append(this.renderer.domElement),this.renderer.domElement.addEventListener("webglcontextlost",c=>{c.preventDefault(),!this.contextLost&&(this.cancelGestures(),this.contextLost=!0,this.pausedBeforeContextLoss=this.paused,this.paused=!0,this.fx?.clear(),e.dispatchEvent(new CustomEvent("renderlost")))}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>this.restoreRendering()),this.hemi=new Ln("#fff3dc","#6f8e9e",.95),this.scene.add(this.hemi);let s=new an("#fff2dc",3.2);s.position.set(-10,30,18),s.castShadow=!0,s.shadow.mapSize.set(4096,4096),Object.assign(s.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:.5,far:70}),s.shadow.normalBias=.025,s.shadow.bias=-1e-4,this.scene.add(s),this.sun=s;let r=new an("#b4d9ef",1);r.position.set(15,8,-10),this.scene.add(r),this.fill=r,this.highQuality=new Qa(this.renderer,this.scene,this.camera),this.ray=new Wi,this.pointer=new ne,this.tileMeshes=[],this.plotMeshes=new Map,this.blockMeshes=new Map,this.pawns=[],this.pickupMeshes=new Map,this.smokestacks=[],this.buildingBadges=[],this.floats=[],this.lights=[],this.pointLights=[],this.lightingKey="",this.world=new xe,this.scene.add(this.world),this.fx=new qc(this.world,{reduced:this.reduced,onDiceState:(c,l,h)=>e.dispatchEvent(new CustomEvent("dicerollchange",{detail:{rolling:c,impact:l,active:h}}))}),this.build(),this.turnMarker=Fe(this.world,new Ls(.58,.7,48),new kt({color:"#ffe289",side:At,transparent:!0,opacity:.9,depthWrite:!1}),[0,.23,0]),this.turnMarker.rotation.x=-Math.PI/2,this.turnMarker.castShadow=!1,this.turnMarker.visible=!1,this.selection=new xe;let a=Fe(this.selection,new Yt(2.05,1.72),new kt({color:"#ffe189",transparent:!0,opacity:.17,depthWrite:!1,depthTest:!1}),[0,.02,0]);a.rotation.x=-Math.PI/2,a.castShadow=!1,this.selectionPlate=a;let o=[];for(let c of[-1.03,1.03])for(let l of[-.87,.87])o.push(c,.035,l,c-Math.sign(c)*.35,.035,l,c,.035,l,c,.035,l-Math.sign(l)*.35);this.selection.add(new Ps(new tt().setAttribute("position",new Pe(o,3)),new tn({color:"#ffca4f",depthTest:!1}))),this.selectionLabel=new Gi(new Ii({transparent:!0,depthTest:!1,depthWrite:!1})),this.selectionLabel.renderOrder=6,this.selectionLabel.scale.set(3.1,.65,1),this.selectionLabel.position.y=.65,this.selection.add(this.selectionLabel),this.selection.visible=!1,this.selection.renderOrder=4,this.world.add(this.selection),this.controls(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize(),this.animate=this.animate.bind(this),this.raf=requestAnimationFrame(this.animate)}restoreRendering(){if(!this.contextLost)return;let e=this.game,t=e?.s.options.quality||this.quality||"auto";try{this.highQuality?.dispose(),this.highQuality=new Qa(this.renderer,this.scene,this.camera),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.sun.shadow.mapPass?.dispose(),this.sun.shadow.mapPass=null,this.sun.shadow.needsUpdate=!0,this.contextLost=!1,this.paused=!!this.pausedBeforeContextLoss,this.quality="",this.lightingKey="",this.setQuality(t),this.applyLighting(e?.s.options.lighting||this.worldLighting),this.game=null,e&&this.sync(e),this.resize(),this.el.dispatchEvent(new CustomEvent("renderrestored"))}catch(i){this.contextLost=!0,this.paused=!0,console.warn("3D recovery unavailable; keeping the playable map",i)}}setMap(e){this.leaveStudio(),this.fx.clear(),this.world.remove(this.selection,this.turnMarker),hi(this.world),this.world.clear(),this.tiles=e,this.game=null,this.rollState=null,this.lastMoney=null,this.tileMeshes=[],this.plotMeshes.clear(),this.blockMeshes.clear(),this.pawns=[],this.pickupMeshes.clear(),this.smokestacks=[],this.buildingBadges=[],this.floats=[],this.lights=[],this.pointLights=[],this.lightingKey="",this.build(),this.world.add(this.selection,this.turnMarker),this.clearSelection(),this.home()}build(){n0(this)}tag(e,t){e.userData.tile=t,e.traverse(i=>{i.isMesh&&(i.userData.tile=t)})}lamp(e,t){let i=new xe;nt(i,"#4e6366",[0,.95,0],.028,.05,1.5),q(i,"#597375",[0,1.72,0],[.23,.09,.23]);let s=q(i,"#ffe8a8",[0,1.59,0],[.15,.23,.15]);i.position.set(e,.2,t),this.world.add(i),this.lights.push(s);let r=new Ca("#ffc779",0,4.5,2);r.position.set(0,1.5,0),i.add(r),this.pointLights.push(r)}sync(e){if(this.contextLost){this.game=e;return}this.tiles!==e.tiles&&this.setMap(e.tiles);let t=this.game!==e;this.game=e;let i=e.s;if(this.selectionMode==="nav"&&this.navTurn!==`${i.round}:${i.current}`&&this.clearSelection(),t){for(;this.pawns.length>i.players.length;){let s=this.pawns.pop();this.world.remove(s),hi(s)}this.clearSelection(),this.fx.clear();for(let s of this.plotMeshes.values())this.world.remove(s.model),hi(s.model);this.plotMeshes.clear();for(let s of this.blockMeshes.values())this.world.remove(s),hi(s);this.blockMeshes.clear()}for(let s of i.players){let r=this.pawns[s.id];if(!r||r.userData.id!==s.character){r&&(this.world.remove(r),hi(r)),r=Ur(s.character),r.scale.setScalar(.56);let a=this.tiles[s.pos];r.position.set(a.x,.24,a.z),this.world.add(r),this.pawns[s.id]=r}if(t){let a=this.tiles[s.pos];r.position.set(a.x+(s.id-(i.players.length-1)/2)*.4,.24,a.z-.15+s.id%2*.22),r.rotation.y=.45,r.scale.setScalar(s.alive?.56:.001)}if(!t&&this.lastMoney?.[s.id]!==void 0&&this.lastMoney[s.id]!==s.money&&this.fx.money(r.position,s.money-this.lastMoney[s.id]),r.userData.vehicleId!==s.vehicle){let a=r.getObjectByName("vehicle");if(a&&(r.remove(a),hi(a)),s.vehicle){let o=Kp(s.vehicle);o.position.y=-.1,r.add(o)}r.userData.vehicleId=s.vehicle,r.userData.body.position.y=s.vehicle?.3:0}}for(let s of this.tiles.filter(r=>r.kind==="property")){let r=i.ownership[s.id],a=r?`${r.player}:${r.level}:${r.buildingType||"legacy"}`:"empty",o=this.plotMeshes.get(s.id);if(o?.signature===a)continue;let c=r?Bt.find(u=>u.id===i.players[r.player].character).estateColor:"#acb18d",l=Gs({...s,buildingType:r?.buildingType},r?.level||0,c,!!r);l.position.copy(Zc(s)),l.rotation.y=s.facing,this.tag(l,s.id),this.world.add(l);let h=l;if(r&&(nt(l,"#587070",[.85,.5,-.6],.018,.018,.85,8),q(l,c,[.98,.81,-.6],[.28,.17,.025])),o){let u=o.model;this.fx.finish(u);let f=()=>{this.world.remove(u),hi(u)};if(!t&&Zm(o,r)){let d=!r||r.level<o.level;if(this.fx.spawn(d?"demolish":"build",u.position,c),this.fx.spawn("dust",u.position),d){l.visible=this.reduced||!r?.level;let g=r?.level?new Et().setFromObject(l).max.y:void 0;this.fx.transition(u,"remove",()=>{f(),l.visible=!0,this.selectedTile===s.id&&this.liftSelectionLabel()},{endHeight:g}),u.parent&&(h=u)}else{let g=o.level>0&&o.buildingType===(r?.buildingType||"legacy")?new Et().setFromObject(u).max.y:void 0;f(),this.fx.transition(l,"grow",void 0,{startHeight:g}),r?.level>0&&this.fx.construction(l)}}else f()}this.plotMeshes.set(s.id,{model:l,signature:a,level:r?.level||0,buildingType:r?.buildingType||"legacy"}),this.selectedTile===s.id&&this.liftSelectionLabel(h)}for(let[s]of Object.entries(i.blocks))if(!this.blockMeshes.has(s)){let r=this.tiles[s],a=new xe;for(let o of[-.4,.4])q(a,"#f4dcac",[o,.45,0],[.07,.55,.07]);q(a,"#c76f51",[0,.6,0],[1.15,.19,.13]);for(let o of[-.4,0,.4]){let c=q(a,"#f1dfb1",[o,.61,.07],[.15,.2,.02]);c.rotation.z=-.35}a.position.set(r.x,.2,r.z),this.world.add(a),this.blockMeshes.set(s,a),this.fx.spawn("build",a.position,"#d7b871")}for(let[s,r]of this.blockMeshes)i.blocks[s]===void 0&&(this.world.remove(r),this.blockMeshes.delete(s),this.fx.spawn("demolish",r.position,"#c77956"),hi(r));for(let s of Nr){let r=this.pickupMeshes.get(s);if(!r){r=new xe,nt(r,"#f7cc54",[0,.58,0],.24,.24,.08,32).rotation.x=Math.PI/2;let a=Lt(r,"10",[0,.58,.05],.38,.23,{background:"#f7cc54",color:"#80551f",width:96,height:64});r.position.set(this.tiles[s].x,.24,this.tiles[s].z),this.world.add(r),this.pickupMeshes.set(s,r)}r.visible=i.pickups?.[s]===void 0}this.setQuality(i.options.quality),this.applyLighting(i.options.lighting),!t&&qm(this.rollState,i)&&this.fx.rollDice(i.dice,this.pawns[i.current].position,e.char().estateColor),this.rollState={phase:i.phase,current:i.current,round:i.round},this.lastMoney=i.players.map(s=>s.money)}applyLighting(e){this.worldLighting=kn(e);let t=this.studio?"studio":this.worldLighting;if(this.lightingKey===t)return;this.lightingKey=t;let i=un[this.studio?"day":t];this.hemi.color.set(i.hemi),this.hemi.groundColor.set(i.ground),this.hemi.intensity=i.ambient,this.sun.color.set(i.sun),this.sun.intensity=i.power,this.sun.position.set(...i.position),this.fill.color.set(i.fill),this.fill.intensity=i.fillPower,this.scene.environmentIntensity=i.environment,this.renderer.toneMappingExposure=i.exposure,this.highQuality.bloom.strength=i.bloom,this.highQuality.bloom.threshold=i.threshold,this.scene.background.set(this.studio?"#dedccc":i.sky),this.scene.fog.color.copy(this.scene.background);for(let s of this.pointLights)s.intensity=this.studio?0:i.lamps;for(let s of this.lights)s.material.emissiveIntensity=.55+i.lamps*.25;Ap(this.studio?"day":t)}showTransfer(e,t){if(this.contextLost)return!1;let i=this.pawns[e.from],s=this.pawns[e.to];return i&&s?this.fx.transfer(i.position,s.position,e.amount,t):!1}setQuality(e){this.quality!==e&&(this.quality=e,this.renderer.setPixelRatio(e==="low"?1:Math.min(Math.max(devicePixelRatio,1.5),2.5)),this.renderer.shadowMap.enabled=e!=="low",this.sun.shadow.mapSize.set(e==="low"?512:4096,e==="low"?512:4096),this.highQuality?.resize(this.el.clientWidth,this.el.clientHeight,this.renderer.getPixelRatio()))}resize(){let e=this.el.clientWidth,t=this.el.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.highQuality?.resize(e,t,this.renderer.getPixelRatio()),this.aspect=e/t,this.follow&&(this.followZoom=this.aspect<.8?2.6:this.aspect>1.9?1.7:1.45),this.updateCamera(),this.paused&&this.renderStill())}updateCamera(){let e=this.studio?Math.max(2.3,1.95/this.aspect)/this.studio.zoom:Math.max(13.8,23/this.aspect)/this.zoom;this.camera.left=-e*this.aspect,this.camera.right=e*this.aspect,this.camera.top=e,this.camera.bottom=-e,this.camera.updateProjectionMatrix(),this.studio?(this.camera.position.set(3.4,2.3,7),this.camera.lookAt(0,1.55,0)):(this.camera.position.set(28+this.offset.x,30,36+this.offset.z),this.camera.lookAt(this.offset.x,0,this.offset.z))}selectTile(e,t="inspect"){let i=this.tiles[e];i&&(this.selectedTile=e,this.selectionMode=t,this.navTurn=this.game?`${this.game.s.round}:${this.game.s.current}`:"",this.selection.visible=!0,this.selection.position.copy(i.kind==="property"?Zc(i):new A(i.x,.23,i.z)),this.selection.rotation.y=i.facing,this.selection.scale.set(i.kind==="property"?1:.8,1,i.kind==="property"?1:.72),this.selectionPlate.material.color.set(t==="buy"?"#ffd65a":"#fff0a8"),this.selectionLabel.material.map?.dispose(),this.selectionLabel.material.map=os(t==="buy"?`\u5F85\u552E \xB7 ${i.price} \u5976\u5E01`:i.name,{background:t==="buy"?"#ffdfa0":"#fff0cb",color:"#674324",width:320,height:72}),this.selectionLabel.material.needsUpdate=!0,this.selectionLabel.userData.tile=e,this.liftSelectionLabel(),this.el.dataset.selectedTile=String(e))}liftSelectionLabel(e){e??=this.plotMeshes.get(this.selectedTile)?.model||this.tileMeshes.find(t=>t.isGroup&&t.userData.tile===this.selectedTile),e&&!e.userData.vacant?(this.selection.updateWorldMatrix(!0,!1),this.selectionLabel.position.copy(this.selection.worldToLocal(gd(e)))):this.selectionLabel.position.set(0,.65,0)}updateLabelVisibility(){for(let e of this.buildingBadges)e.visible=this.zoom>1.3&&!this.showcase&&!(this.selection.visible&&e.userData.tile===this.selectedTile)}pickTile(e,t){if(this.studio||this.contextLost)return null;let i=this.renderer.domElement;if(e<0||t<0||e>i.clientWidth||t>i.clientHeight)return null;this.camera.updateMatrixWorld(!0),this.world.updateMatrixWorld(!0),this.updateLabelVisibility(),this.pointer.set(e/i.clientWidth*2-1,-t/i.clientHeight*2+1),this.ray.setFromCamera(this.pointer,this.camera);let s=this.selection.visible&&this.selectionLabel.visible?this.ray.intersectObject(this.selectionLabel,!1)[0]:null;if(s&&Number.isInteger(s.object.userData.tile))return s.object.userData.tile;let r=this.buildingBadges.filter(l=>l.visible),a=this.ray.intersectObjects(r,!1)[0];if(a&&Number.isInteger(a.object.userData.tile))return a.object.userData.tile;let o=[...this.tileMeshes,...[...this.plotMeshes.values()].filter(l=>l.model.visible).map(l=>l.model)];return this.ray.intersectObjects(o,!0).find(l=>Number.isInteger(l.object.userData.tile))?.object.userData.tile??null}clearSelection(){this.selectedTile=null,this.selection.visible=!1,delete this.el.dataset.selectedTile}focusTile(e){!this.tiles[e]||this.studio||(this.follow=!1,this.focusTarget=this.tiles[e].kind==="property"?Zc(this.tiles[e]):new A(this.tiles[e].x,0,this.tiles[e].z),this.focusTarget.y=0,this.focusZoom=this.aspect<.8?2.6:2.1,this.selectTile(e,"nav"),this.cameraChanged())}isMoving(){return this.contextLost||!this.game||this.studio?!1:this.game.s.players.some(e=>{let t=this.tiles[e.pos],i=this.pawns[e.id];return i&&Math.hypot(i.position.x-(t.x+(e.id-(this.game.s.players.length-1)/2)*.4),i.position.z-(t.z-.15+e.id%2*.22))>.075})}drawFrame(){this.updateLabelVisibility(),this.fx.anchorDice(this.camera,this.aspect<.8),this.renderer.info.autoReset=!1,this.renderer.info.reset(),this.quality==="low"?this.renderer.render(this.scene,this.camera):this.highQuality.render()}renderStill(){!this.contextLost&&!this.renderer.getContext().isContextLost()&&(this.updateCamera(),this.drawFrame())}cameraChanged(){this.el.dispatchEvent(new CustomEvent("camerachange",{detail:{follow:this.follow}}))}zoomBy(e){this.studio?this.studio.zoom=Math.max(.65,Math.min(2.5,this.studio.zoom*e)):(this.zoom=Math.max(.65,Math.min(3.3,this.zoom*e)),this.followZoom=this.zoom),this.updateCamera()}cancelGestures(){let e=this.renderer.domElement,t=[...this.gestures?.points.keys()||[]];this.gestures?.reset();for(let i of t)try{e.hasPointerCapture(i)&&e.releasePointerCapture(i)}catch{}}controls(){let e=this.renderer.domElement;e.style.touchAction="none",this.gestures=new Yc({isStudio:()=>!!this.studio,turn:i=>{this.studio.yaw+=i*.012,this.studio.manual=!0},zoom:i=>this.zoomBy(i),pan:(i,s)=>{this.follow=!1,this.focusTarget=null;let r=(this.camera.top-this.camera.bottom)/Math.max(1,e.clientHeight);this.offset.x=Math.max(-25,Math.min(25,this.offset.x-(i*.789+s*1.118)*r)),this.offset.z=Math.max(-22,Math.min(22,this.offset.z+(i*.614-s*1.437)*r)),this.updateCamera(),this.cameraChanged()},tap:(i,s)=>{let r=this.pickTile(i,s);Number.isInteger(r)&&this.onTile(r)}});let t=()=>this.cancelGestures();window.addEventListener("gamelayoutchange",t),window.addEventListener("blur",t),document.addEventListener("visibilitychange",()=>{document.hidden&&t()}),e.addEventListener("pointerdown",i=>{let s=Uc(i.clientX,i.clientY,e);this.gestures.down(i.pointerId,s.x,s.y),e.setPointerCapture(i.pointerId)}),e.addEventListener("pointermove",i=>{let s=Uc(i.clientX,i.clientY,e);this.gestures.move(i.pointerId,s.x,s.y)}),e.addEventListener("pointerup",i=>{let s=Uc(i.clientX,i.clientY,e);this.gestures.up(i.pointerId,s.x,s.y)});for(let i of["pointercancel","lostpointercapture"])e.addEventListener(i,s=>this.gestures.cancel(s.pointerId));e.addEventListener("wheel",i=>{i.preventDefault(),this.zoomBy(i.deltaY<0?1.1:.91)},{passive:!1})}followPlayer(){this.clearSelection(),this.follow=!0,this.focusTarget=null,this.endPreview(),this.followZoom=this.aspect<.8?2.6:this.aspect>1.9?1.7:1.45,this.cameraChanged()}home(){this.clearSelection(),this.follow=!1,this.focusTarget=null,this.endPreview(),this.offset.set(0,0,0),this.zoom=1,this.updateCamera(),this.cameraChanged()}focusLot(e){!this.tiles[e]||this.studio||(this.follow=!1,this.focusTarget=Zc(this.tiles[e]).multiplyScalar(.9),this.focusTarget.y=0,this.focusZoom=2.1,this.cameraChanged())}previewCharacter(){this.endPreview()}endPreview(){this.showcase&&(this.world.remove(this.showcase),hi(this.showcase),this.showcase=null),this.hero.visible=!0}enterStudio(e){this.cancelGestures(),this.studio&&this.leaveStudio();let t=new xe,i=Ur(e);t.add(i),i.position.y=.15,nt(t,"#c7bfa5",[0,.04,0],1.2,1.3,.14,64);let s=Fe(t,new Yt(240,240),"#dfd9c7",[0,-.05,0]);s.rotation.x=-Math.PI/2,this.scene.add(t),this.studio={root:t,model:i,yaw:.3,zoom:1,mode:"idle",manual:!1},this.highQuality.studio(!0),this.sun.shadow.camera.left=this.sun.shadow.camera.bottom=-5,this.sun.shadow.camera.right=this.sun.shadow.camera.top=5,this.sun.shadow.camera.updateProjectionMatrix(),this.world.visible=!1,this.scene.fog=new Rs("#dedccc",18,50),this.scene.background.set("#dedccc"),this.applyLighting(this.worldLighting),this.updateCamera()}leaveStudio(){this.cancelGestures(),this.studio&&(this.scene.remove(this.studio.root),hi(this.studio.root),this.studio=null,this.highQuality.studio(!1),this.sun.shadow.camera.left=this.sun.shadow.camera.bottom=-26,this.sun.shadow.camera.right=this.sun.shadow.camera.top=26,this.sun.shadow.camera.updateProjectionMatrix(),this.world.visible=!0,this.scene.fog=new Rs("#b7d3dc",70,130),this.scene.background.set("#b7d3dc"),this.applyLighting(this.worldLighting),this.updateCamera())}animate(e){if(this.raf=requestAnimationFrame(this.animate),document.hidden||this.paused||e-this.last<16)return;let t=Math.min(.06,(e-this.last)/1e3||.033);this.last=e,this.time+=t;let i=this.time;Cp(this.reduced?0:i,this.camera);let s=t*(this.studio?1:Xa(this.game?.s.options.speed));if(this.actionTime=(this.actionTime??0)+s,this.fx.update(s),this.selection.visible&&(this.selectionPlate.material.opacity=this.reduced?.23:.22+Math.sin(i*3)*.06),this.studio){let r=this.studio;r.model.rotation.y=r.yaw+(r.manual?0:Math.sin(i*.25)*.25),$s(r.model,{time:i,moving:r.mode==="walk",mood:r.mode==="laugh"?"happy":null}),this.drawFrame();return}if(this.focusTarget){let r=this.reduced?1:1-Math.exp(-3.2*t);this.offset.lerp(this.focusTarget,r),this.zoom+=(this.focusZoom-this.zoom)*r,this.updateCamera(),this.offset.distanceTo(this.focusTarget)<.02&&(this.focusTarget=null)}if(this.game){let r=this.game.s;for(let o of r.players){let c=this.pawns[o.id],l=this.tiles[o.pos],h=new A(l.x+(o.id-(r.players.length-1)/2)*.4,.24,l.z-.15+o.id%2*.22),u=o.alive?.56:.001;c.scale.lerp(new A(u,u,u),1-Math.exp(-5*s)),c.visible=c.scale.x>.015;let f=c.position.distanceTo(h)>.06;if(f){let d=h.clone().sub(c.position);c.rotation.y=Math.atan2(d.x,d.z),c.position.lerp(h,this.reduced?1:1-Math.exp(-8*s)),c.position.y=this.reduced?.24:.24+Math.abs(Math.sin(this.actionTime*14))*.065}else c.position.copy(h),c.rotation.y+=(.45-c.rotation.y)*.04;$s(c,{time:(f?this.actionTime:i)+o.id,moving:f,mood:r.current===o.id&&r.phase==="event"?r.notice?.mood:this.actionMood?.player===o.id&&this.actionMood.until>performance.now()?this.actionMood.mood:null,alive:o.alive})}let a=this.pawns[r.current];this.turnMarker.visible=!!a&&!this.showcase&&r.phase!=="finished",a&&(this.turnMarker.position.set(a.position.x,.23,a.position.z),this.turnMarker.material.color.set(Bt.find(o=>o.id===r.players[r.current].character).color),this.turnMarker.scale.setScalar(this.reduced?1:1+Math.sin(i*4)*.08)),this.follow&&a&&(this.offset.lerp(new A(a.position.x,0,a.position.z),this.reduced?1:1-Math.exp(-2.2*s)),this.zoom+=(this.followZoom-this.zoom)*(this.reduced?1:1-Math.exp(-2.2*s)),this.updateCamera())}for(let[r,a]of this.pickupMeshes)a.position.y=this.reduced?.24:.24+Math.sin(i*2+r)*.055;if($s(this.hero,{time:i,mood:this.game?.s.phase==="event"?this.game.s.notice?.mood:null}),this.showcase&&($s(this.showcase,{time:i}),this.showcase.rotation.y=.3+Math.sin(i*.4)*.18),!this.reduced){for(let[r,a]of this.floats.entries())a.position.y=-.45+Math.sin(i*1.1+r)*.035,a.rotation.z=Math.sin(i+r)*.015;for(let[r,a]of this.ripples.entries())a.scale.x=1+Math.sin(i*.8+r)*.08;for(let[r,a]of this.waterJets.entries())a.scale.y=1+Math.sin(i*3+r)*.035;if(Math.floor(i*2)!==this.lastSmoke&&(this.lastSmoke=Math.floor(i*2),this.quality!=="low"))for(let r of this.smokestacks)this.fx.spawn("dust",new A(r.x,r.y,r.z),"#d3d3c2")}this.drawFrame(),this.el.dataset.drawCalls=String(this.renderer.info.render.calls),this.el.dataset.triangles=String(this.renderer.info.render.triangles),this.el.dataset.effects=String(this.fx.items.length)}};var zr={ode:{name:"\u5976\u5BB6\u6B22\u4E50\u9882",credit:"\u8D1D\u591A\u82AC\u300A\u6B22\u4E50\u9882\u300B\u65CB\u5F8B \xB7 \u672C\u4F5C\u5668\u4E50\u6539\u7F16",bpm:112},town:{name:"\u5976\u5BB6\u6F2B\u6E38",credit:"\u672C\u4F5C\u539F\u521B\u8F7B\u5FEB\u5C0F\u9547\u914D\u4E50",bpm:104}},s0={music:!0,musicVolume:.32,effectsVolume:.68,voice:!0,voiceVolume:.65,track:"ode"};function vs(n={}){let e={...s0,...n};for(let t of["musicVolume","effectsVolume","voiceVolume"])e[t]=Number.isFinite(e[t])?Math.max(0,Math.min(1,e[t])):s0[t];return zr[e.track]||(e.track="ode"),e}var ab=[[64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[64,1.5],[62,.5],[62,2],[64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[62,1.5],[60,.5],[60,2],[62,1],[62,1],[64,1],[60,1],[62,1],[64,.5],[65,.5],[64,1],[60,1],[62,1],[64,.5],[65,.5],[64,1],[62,1],[60,1],[62,1],[67,2],[64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[62,1.5],[60,.5],[60,2]],ob=[[67,.5],[72,.5],[76,1],[74,.5],[72,.5],[69,1],[67,.5],[64,.5],[67,1],[65,1],[64,1],[62,.5],[65,.5],[69,1],[67,.5],[65,.5],[64,1],[62,1],[60,1],[64,1],[67,1],[69,.5],[72,.5],[76,1],[74,1],[72,1],[71,.5],[69,.5],[67,1],[64,1],[62,1],[60,2]],r0=n=>{let e=0;return{events:n.map(([t,i])=>{let s={note:t,duration:i,beat:e};return e+=i,s}),length:e}},a0={ode:r0(ab),town:r0(ob)},o0=n=>440*2**((n-69)/12),Jc=class{constructor(e={}){this.options=vs(e),this.ctx=null,this.timer=null,this.beat=0,this.nextTime=0,this.voices=new Set,this.lastVoice=-10,this.unlocked=!1,this.hidden=!1,this.failed=!1,this.layers=[],this.loopCount=0,this.suspendTimer=null,this.disposed=!1}async unlock(){if(!this.disposed){if(!this.ctx)try{let e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.82;let t=this.ctx.createDynamicsCompressor();t.threshold.value=-15,t.ratio.value=5,this.master.connect(t),t.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.fxGain=this.ctx.createGain(),this.voiceGain=this.ctx.createGain();for(let s of[this.musicGain,this.fxGain,this.voiceGain])s.connect(this.master);this.noise=this.ctx.createBuffer(1,Math.ceil(this.ctx.sampleRate*.22),this.ctx.sampleRate);let i=this.noise.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=(Math.random()*2-1)*(1-s/i.length);this.loadLaugh()}catch{this.failed=!0;return}try{await this.ctx.resume(),this.unlocked=!0,this.apply()}catch{this.failed=!0}}}async loadLaugh(){try{let e=globalThis.__NAIWA_LAUGH_DATA__||"./audio/naiwa-laugh-excerpt.mp3",t=globalThis.__NAIWA_LAUGH_BYTES__;if(!t){let i=await fetch(e);if(!i.ok)return;t=await i.arrayBuffer()}this.laughBuffer=await this.ctx.decodeAudioData(t.slice(0))}catch{this.laughBuffer=null}}setOptions(e){let t=vs(e),i=t.track!==this.options.track;JSON.stringify(t)!==JSON.stringify(this.options)&&(this.options=t,i&&this.timer&&this.transitionTrack(t.track),this.apply())}apply(){if(!this.ctx||this.disposed)return;let e=this.options.sound!==!1&&!this.hidden,t=this.ctx.currentTime;if(this.fade(this.master.gain,e?.82:0,t,.6),this.fade(this.musicGain.gain,this.options.music?this.options.musicVolume*.65:0,t,.9),this.fxGain.gain.setTargetAtTime(this.options.effectsVolume*.7,t,.04),this.voiceGain.gain.setTargetAtTime(this.options.voiceVolume*.72,t,.04),e&&this.options.music&&this.unlocked?this.startMusic():this.stopMusic(),!e||!this.options.voice)for(let i of this.voices)try{i.stop()}catch{}}visibility(e){if(this.hidden=!!e,this.suspendTimer!==null&&clearTimeout(this.suspendTimer),this.suspendTimer=null,this.disposed)return;this.apply();let t=this.ctx;t&&(this.hidden?this.suspendTimer=setTimeout(()=>{this.suspendTimer=null,this.hidden&&!this.disposed&&this.ctx===t&&Promise.resolve(t.suspend()).catch(()=>{})},650):this.unlocked&&Promise.resolve(t.resume()).then(()=>{this.disposed||this.apply()}).catch(()=>{}))}fade(e,t,i,s=.8){e.cancelAndHoldAtTime?e.cancelAndHoldAtTime(i):e.cancelScheduledValues?.(i);let r=e.value;e.setValueAtTime?.(r,i),e.linearRampToValueAtTime?.(t,i+s)}createLayer(e,t,i=1.6){let s=this.ctx.createGain(),r=a0[e].length*60/zr[e].bpm,a=2;s.connect(this.musicGain),s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(1,t+i),s.gain.setValueAtTime(1,t+r-a),s.gain.linearRampToValueAtTime(0,t+r);let o={track:e,gain:s,beat:0,next:t,start:t,end:t+r,nextLoop:t+r-a,spawned:!1};return this.layers.push(o),o}transitionTrack(e){let t=this.ctx.currentTime;for(let i of this.layers)this.fade(i.gain.gain,0,t,1.8),i.end=Math.min(i.end,t+1.8),i.spawned=!0;this.createLayer(e,t+.04,1.8)}scheduleMusic(e=this.ctx.currentTime){let t=e+.22;for(let i of[...this.layers])!i.spawned&&t>=i.nextLoop&&(i.spawned=!0,this.loopCount++,this.createLayer(i.track,i.nextLoop<e?e+.03:i.nextLoop,2));for(let i of this.layers){let s=60/zr[i.track].bpm,r=a0[i.track];if(i.next<e){let a=Math.ceil((e+.015-i.next)/(s*.5));i.beat+=a*.5,i.next+=a*s*.5}for(;i.next<t&&i.next<i.end;){let a=i.beat%r.length,o=r.events.find(f=>Math.abs(f.beat-a)<.01);o&&this.note(o.note,i.next,o.duration*s*.96,.105,"flute",i.gain);let c=Math.floor(a/4),l=Math.round(a*2)%8,h=[[48,52,55],[43,47,50],[41,45,48],[43,47,53]],u=h[[0,1,0,1,2,0,1,0,1,0,1,1,0,1,2,0][c%16]];l%4===0&&this.note(u[0]-12,i.next,s*.9,.09,"bass",i.gain),this.note(u[l%3]+12,i.next,s*.5,.045,"pluck",i.gain),l%2===1&&this.hiss(i.next,.025,.012,i.gain,4600),i.beat+=.5,i.next+=s*.5}}this.layers=this.layers.filter(i=>e>i.end+1.2?(i.gain.disconnect?.(),!1):!0)}startMusic(){this.timer||!this.ctx||(this.createLayer(this.options.track,this.ctx.currentTime+.06),this.scheduleMusic(),this.timer=setInterval(()=>{this.ctx&&!this.hidden&&this.scheduleMusic()},70))}stopMusic(){this.timer&&clearInterval(this.timer),this.timer=null;for(let e of this.layers){this.fade(e.gain.gain,0,this.ctx.currentTime,.35);let t=e.gain;setTimeout(()=>{try{t.disconnect?.()}catch{}},500)}this.layers=[]}note(e,t,i,s,r="pluck",a=this.fxGain){if(!this.ctx||!a)return;let o=this.ctx,c=o.createOscillator(),l=o.createGain(),h=o.createBiquadFilter();if(c.type=r==="bass"?"triangle":r==="flute"?"sine":"triangle",c.frequency.value=o0(e),h.type="lowpass",h.frequency.value=r==="bass"?500:r==="flute"?2400:1700,c.connect(h),h.connect(l),l.connect(a),l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),t+(r==="flute"?.045:.008)),l.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(.07,i)),c.start(t),c.stop(t+Math.max(.1,i)+.03),r==="flute"){let u=o.createOscillator(),f=o.createGain();u.type="sine",u.frequency.value=o0(e)*2,f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(s*.18,t+.04),f.gain.linearRampToValueAtTime(0,t+i),u.connect(f),f.connect(a),u.start(t),u.stop(t+i+.03)}}hiss(e,t,i,s=this.fxGain,r=1800){if(!this.ctx||!this.noise)return;let a=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),c=this.ctx.createGain();a.buffer=this.noise,o.type="highpass",o.frequency.value=r,c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(o),o.connect(c),c.connect(s),a.start(e),a.stop(e+t)}sfx(e="tap"){if(!this.ctx||!this.unlocked||this.hidden||this.options.sound===!1)return;let t=this.ctx.currentTime;if(e==="laugh"||e==="happy"){this.laugh();return}if(e==="roll"){for(let s=0;s<7;s++)this.hiss(t+s*.035,.035,.09,this.fxGain,600),this.note(45+s%3*3,t+s*.035,.045,.045);return}if(e==="diceLand"){this.hiss(t,.045,.07,this.fxGain,700),this.note(48,t,.08,.055);return}if(e==="step"){this.hiss(t,.033,.035,this.fxGain,800),this.note(43,t,.045,.02,"bass");return}if(e==="build"){for(let s=0;s<4;s++)this.note(48+s*5,t+s*.1,.1,.06),this.hiss(t+s*.1,.035,.07,this.fxGain,1200);return}if(e==="demolish"){this.hiss(t,.2,.17,this.fxGain,200),this.note(35,t,.28,.1,"bass");return}let i={tap:[76],coin:[79,84],sad:[62,58,53],magic:[72,76,79,84],win:[72,76,79,84,79,84]};(i[e]||i.tap).forEach((s,r)=>this.note(s,t+r*.085,e==="tap"?.08:.19,e==="tap"?.055:.085)),e==="win"&&setTimeout(()=>this.laugh(),500)}laugh(){if(!this.ctx||!this.options.voice||this.options.sound===!1||this.hidden||!this.laughBuffer||this.ctx.currentTime-this.lastVoice<4)return;this.lastVoice=this.ctx.currentTime;let e=this.ctx.createBufferSource();e.buffer=this.laughBuffer,e.connect(this.voiceGain),this.voices.add(e),e.onended=()=>this.voices.delete(e),e.start();let t=this.ctx.currentTime,i=this.musicGain.gain;this.fade(i,this.options.music?this.options.musicVolume*.2:0,t,.16),i.setValueAtTime(this.options.music?this.options.musicVolume*.2:0,t+1.05),i.linearRampToValueAtTime(this.options.music?this.options.musicVolume*.65:0,t+1.9)}status(){return this.failed?"\u97F3\u9891\u4E0D\u53EF\u7528":this.unlocked?this.options.sound===!1?"\u5168\u90E8\u9759\u97F3":this.hidden?"\u5DF2\u6682\u505C":this.options.music?"\u6B63\u5728\u64AD\u653E \xB7 "+zr[this.options.track].name:"\u97F3\u4E50\u5DF2\u5173\u95ED":"\u70B9\u51FB\u540E\u542F\u7528\u58F0\u97F3"}dispose(){if(!this.disposed){this.disposed=!0,this.suspendTimer!==null&&clearTimeout(this.suspendTimer),this.suspendTimer=null,this.stopMusic();for(let e of this.voices)try{e.stop()}catch{}this.ctx&&Promise.resolve(this.ctx.close()).catch(()=>{})}}};var l0="naiwa-monopoly-preferences-v1";function yd(n={}){let e=n&&typeof n=="object"&&!Array.isArray(n)?n:{},t=vs(e);return{sound:typeof e.sound=="boolean"?e.sound:!0,speed:[1,2,4].includes(e.speed)?e.speed:1,quality:["auto","low"].includes(e.quality)?e.quality:"auto",lighting:["day","golden","night"].includes(e.lighting)?e.lighting:"day",music:typeof t.music=="boolean"?t.music:!0,musicVolume:t.musicVolume,effectsVolume:t.effectsVolume,voice:typeof t.voice=="boolean"?t.voice:!0,voiceVolume:t.voiceVolume,track:t.track}}function c0(n,e={}){try{let t=n.getItem(l0);if(t){let i=JSON.parse(t);if(i&&typeof i=="object"&&!Array.isArray(i))return yd({...e,...i})}}catch{}return yd(e)}function h0(n,e){try{return n.setItem(l0,JSON.stringify(yd(e))),!0}catch{return!1}}var Kc=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Qc=class{constructor(e,{jump:t,inspect:i,overview:s=()=>{}}){this.tiles=gn,this.root=e,this.jump=t,this.inspect=i,this.selected=0,this.followSelection=!0,this.lastTurn="";let r=matchMedia("(min-width:1000px) and (min-height:650px)");this.expanded=r.matches,this.touched=!1;let a=ds(this.tiles).map(c=>`M${c.a.x},${c.a.y}L${c.b.x},${c.b.y}`).join(" ");e.innerHTML=`<button class="mini-toggle" aria-expanded="${this.expanded}" aria-controls="miniBody"><span>\u25C8 \u5168\u5C9B\u5730\u56FE</span><span class="mini-chevron">${this.expanded?"\u2212":"+"}</span></button><div id="miniBody" ${this.expanded?"":"hidden"}><svg class="mini-svg" role="group" viewBox="0 0 360 250" aria-label="\u5168\u5C9B\u8DEF\u7EBF\uFF0C\u53EF\u7528\u65B9\u5411\u952E\u9009\u62E9\u5730\u5757\uFF0C\u56DE\u8F66\u5B9A\u4F4D"><rect width="360" height="250" rx="14" fill="#b6cd9c"/><rect x="48" y="116" width="264" height="18" rx="8" fill="#81afb2"/><path d="${a}" stroke="#eee0b7" stroke-width="19" fill="none" stroke-linecap="round"/><path d="${a}" stroke="#738b7f" stroke-width="12" fill="none" stroke-linecap="round"/>${this.tiles.map(c=>{let l=ti(c,this.tiles);return`<circle class="mini-node" data-mini-tile="${c.id}" cx="${l.x}" cy="${l.y}" r="${c.kind==="property"?5:7}" fill="${c.kind==="property"?Ui[c.group].color:"#fff0b7"}" stroke="#5b735b" stroke-width="1.4" role="button" tabindex="${c.id===0?0:-1}" aria-label="${c.id+1}. ${Kc(c.name)}"><title>${Kc(c.name)}</title></circle>`}).join("")}<circle class="mini-selected" r="11" stroke="#fff6cd" stroke-width="2.5" fill="none" stroke-dasharray="4 3" pointer-events="none"/><g class="mini-pawns" pointer-events="none"></g></svg><div class="mini-footer"><span class="mini-name"></span><button class="mini-inspect">\u8BE6\u60C5</button><button class="mini-enlarge" aria-label="\u653E\u5927\u5168\u5C9B\u5730\u56FE">\u653E\u5927</button></div><span class="sr-only">\u65B9\u5411\u952E\u9009\u62E9\u5730\u5757\uFF0C\u56DE\u8F66\u5B9A\u4F4D\uFF0C\u8BE6\u60C5\u67E5\u770B\u4EF7\u683C\u4E0E\u5F52\u5C5E\u3002</span></div>`,this.body=e.querySelector("#miniBody"),this.toggle=e.querySelector(".mini-toggle"),this.nodes=[...e.querySelectorAll("[data-mini-tile]")],this.marker=e.querySelector(".mini-selected"),this.name=e.querySelector(".mini-name"),this.toggle.addEventListener("click",()=>{this.touched=!0,this.setExpanded(!this.expanded)}),r.addEventListener("change",c=>{this.touched||this.setExpanded(c.matches)});let o=c=>{let l=c.target.closest("[data-mini-tile]");l&&(this.select(+l.dataset.miniTile,!1),this.jump(this.selected))};e.querySelector("svg").addEventListener("click",o),e.querySelector("svg").addEventListener("keydown",c=>{let l=c.target.closest("[data-mini-tile]");if(l){if(["Enter"," "].includes(c.key)){c.preventDefault(),o(c);return}["Home","End","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(c.key)&&(c.preventDefault(),this.select(qu(+l.dataset.miniTile,c.key),!1),this.nodes[this.selected].focus())}}),e.querySelector(".mini-inspect").addEventListener("click",()=>this.inspect(this.selected)),e.querySelector(".mini-enlarge").addEventListener("click",()=>s(this.selected)),this.select(0,!0),this.setExpanded(this.expanded)}setMap(e){this.tiles=e;let t=ds(e).map(i=>`M${i.a.x},${i.a.y}L${i.b.x},${i.b.y}`).join(" ");for(let i of this.root.querySelectorAll(".mini-svg>path"))i.setAttribute("d",t);for(let i of e){let s=this.nodes[i.id],r=ti(i,e);s.setAttribute("cx",r.x),s.setAttribute("cy",r.y),s.setAttribute("r",i.kind==="property"?5:7),s.querySelector("title").textContent=i.name,s.setAttribute("fill",i.kind==="property"?Ui[i.group].color:"#fff0b7"),s.setAttribute("aria-label",`${i.id+1}. ${i.name}`)}this.lastTurn=""}setExpanded(e){this.expanded=e,this.toggle.setAttribute("aria-expanded",String(e)),this.toggle.querySelector(".mini-chevron").textContent=e?"\u2212":"+",this.body.hidden=!e,this.root.classList.toggle("is-collapsed",!e)}select(e,t=!1){if(!this.tiles[e])return;this.selected=e,this.followSelection=t;for(let s of this.nodes)s.setAttribute("tabindex",+s.dataset.miniTile===e?"0":"-1");let i=ti(this.tiles[e],this.tiles);this.marker.setAttribute("cx",i.x),this.marker.setAttribute("cy",i.y),this.name.textContent=this.labels?.[e]||`${e+1}. ${this.tiles[e].name}`}sync(e,{visible:t=!0}={}){if(this.tiles!==e.tiles&&this.setMap(e.tiles),this.root.hidden=!t,!t)return;let i=e.s,s=`${i.round}:${i.current}`;s!==this.lastTurn&&(this.lastTurn=s,this.followSelection=!0),this.labels=[],this.followSelection&&this.select(e.player.pos,!0);for(let a of this.tiles){let o=this.nodes[a.id],c=i.ownership[a.id];o.setAttribute("fill",c?e.char(i.players[c.player]).estateColor:a.kind==="property"?Ui[a.group].color:"#fff0b7"),o.setAttribute("stroke-width",c?"3":"1.4");let l=`${a.id+1}. ${a.name}${c?" \xB7 "+e.char(i.players[c.player]).name+" \xB7 "+(c.level?Mt[Je(c)].name+" "+c.level+"\u7EA7":"\u5F85\u5EFA\u7A7A\u5730"):""}`;this.labels[a.id]=l,o.setAttribute("aria-label",l),o.querySelector("title").textContent=l}this.name.textContent=this.labels[this.selected];let r=d0(e).map(({player:a,x:o,y:c})=>{let l=e.char(a).estateColor;return`<circle cx="${o}" cy="${c}" r="${a.id===i.current?6:4.5}" fill="${l}" stroke="${a.id===i.current?"#fffbe2":"#644727"}" stroke-width="${a.id===i.current?3:2}"/>`}).join("");this.root.querySelector(".mini-pawns").innerHTML=r}},_d={start:["\u2691","\u8D77\u70B9"],bank:["\uFFE5","\u94F6\u884C"],stock:["\u2197","\u80A1\u7968"],hospital:["\u271A","\u533B\u9662"],shop:["\u25C6","\u5546\u5E97"],spirit:["\u2726","\u795E\u6BBF"],event:["?","\u4E8B\u4EF6"],rest:["\u263E","\u4F11\u517B"],tax:["\u2212","\u6E05\u6D01"]};function d0(n){return n.s.players.filter(e=>e.alive).map(e=>{let t=ti(n.tiles[e.pos],n.tiles),i=n.s.players.filter(a=>a.alive&&a.pos===e.pos),s=(i.length-1)*9/2,r=Math.max(8+s,Math.min(352-s,t.x));return{player:e,x:r+(i.indexOf(e)-(i.length-1)/2)*9,y:Math.max(8,t.y-12),tileX:t.x,tileY:t.y}})}function u0(n,e){let t=n.tiles[e],i=n.s.ownership[e],s=i?n.char(n.s.players[i.player]):null,r=s?`${s.name} \xB7 ${i.level?Mt[Je(i)].name+" "+i.level+"\u7EA7":"\u5F85\u5EFA\u7A7A\u5730"}`:t.kind==="property"?`\u7A7A\u5730 \xB7 ${t.price} \u5976\u5E01`:_d[t.kind]?.[1]||"\u516C\u5171\u8BBE\u65BD";return{name:t.name,description:r,label:`${e+1}. ${t.name} \xB7 ${r}`,color:s?.estateColor||(t.kind==="property"?"#f6e8bd":"#577d70"),glyph:t.kind==="property"?i?.level?String(i.level):"":_d[t.kind]?.[0]||"\xB7",vacant:t.kind==="property"&&!i}}var eh=class{constructor(e,t,{selected:i=t.player.pos,inspect:s=()=>{}}={}){this.root=e,this.game=t;let r=t.tiles,a=ds(r).map(o=>`M${o.a.x},${o.a.y}L${o.b.x},${o.b.y}`).join(" ");e.innerHTML=`<p class="overview-hint">\u70B9\u9009\u5730\u5757\u770B\u5F52\u5C5E\u4E0E\u7528\u9014\uFF0C\u518D\u70B9\u8BE6\u60C5\u3002\u6253\u5F00\u5730\u56FE\u671F\u95F4\uFF0C\u5BF9\u5C40\u7B49\u5F85\u3002</p><svg class="overview-svg" viewBox="0 0 360 250" role="group" aria-label="\u5168\u5C9B\u5927\u5730\u56FE\uFF0C\u65B9\u5411\u952E\u9009\u62E9\u5730\u5757\uFF0C\u56DE\u8F66\u67E5\u770B\u8BE6\u60C5"><rect width="360" height="250" rx="12" fill="#b5cfa4"/><path d="M40 131 Q180 102 320 128" stroke="#85b5b6" stroke-width="12" fill="none"/><path d="${a}" stroke="#f5e7c2" stroke-width="21" fill="none" stroke-linecap="round"/><path d="${a}" stroke="#7c9587" stroke-width="13" fill="none" stroke-linecap="round"/>${r.map(o=>{let c=ti(o,r),l=u0(t,o.id);return`<circle data-overview-tile="${o.id}" cx="${c.x}" cy="${c.y}" r="8" fill="${l.color}" stroke="#5f704c" stroke-width="1.2" ${l.vacant?'stroke-dasharray="2 2"':""} tabindex="-1" role="button" aria-label="${Kc(l.label)}"><title>${Kc(l.label)}</title></circle><text class="overview-symbol" x="${c.x}" y="${c.y+3}" fill="${o.kind==="property"?"#583f22":"#fff5d5"}">${l.glyph}</text>`}).join("")}<g class="overview-positions" pointer-events="none">${d0(t).map(({player:o,x:c,y:l,tileX:h,tileY:u})=>{let f=t.char(o);return`<g><path d="M${h},${u}L${c},${l}" stroke="${f.estateColor}" stroke-width="1"/><circle cx="${c}" cy="${l}" r="6" fill="${f.estateColor}" stroke="${o.id===t.s.current?"#fff9d5":"#5d4b2c"}" stroke-width="${o.id===t.s.current?2.5:1}"/><text x="${c}" y="${l+2}" class="overview-pawn-number">${o.id+1}</text></g>`}).join("")}</g><circle class="overview-selected" r="12" fill="none" stroke="#fff5ce" stroke-width="2.5" pointer-events="none"/></svg><div class="overview-selection" aria-live="polite"><div><strong></strong><span></span></div><button class="secondary overview-inspect">\u5730\u5757\u8BE6\u60C5 \u2197</button></div><div class="overview-roster">${t.s.players.map(o=>{let c=t.char(o);return`<button class="overview-player${o.alive?"":" eliminated"}" data-overview-player="${o.id}" style="--owner-color:${c.estateColor}" aria-label="\u5B9A\u4F4D${c.name}${o.alive?"":"\uFF0C\u5DF2\u9000\u51FA"}" ${o.alive?"":"disabled"}><span class="overview-face">${_t(c.id)}</span><span><b>${o.id+1} \xB7 ${c.name}</b><small>${o.id===t.s.current?"\u5F53\u524D\u56DE\u5408":o.human?"\u4F60":o.alive?"\u7535\u8111":"\u5DF2\u9000\u51FA"}</small></span></button>`}).join("")}</div><div class="overview-key">${Object.values(_d).map(([o,c])=>`<span><i>${o}</i>${c}</span>`).join("")}<span><i class="overview-vacant"></i>\u5F85\u552E\u7A7A\u5730</span><span>\u5730\u5757\u6570\u5B57\uFF1D\u5EFA\u7B51\u7B49\u7EA7</span></div>`,this.svg=e.querySelector("svg"),this.nodes=[...e.querySelectorAll("[data-overview-tile]")],this.marker=e.querySelector(".overview-selected"),this.select(i),this.svg.addEventListener("click",o=>{let c=this.svg.getScreenCTM();if(!c)return;let l=new DOMPoint(o.clientX,o.clientY).matrixTransform(c.inverse()),h=rm(l.x,l.y,r);h!==null&&this.select(h)}),this.svg.addEventListener("keydown",o=>{o.target.matches("[data-overview-tile]")&&(["Enter"," "].includes(o.key)?(o.preventDefault(),o.stopPropagation(),s(this.selected)):["Home","End","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(o.key)&&(o.preventDefault(),o.stopPropagation(),this.select(qu(this.selected,o.key)),this.nodes[this.selected].focus({preventScroll:!0})))}),e.querySelector(".overview-inspect").addEventListener("click",()=>s(this.selected));for(let o of e.querySelectorAll("[data-overview-player]"))o.addEventListener("click",()=>this.select(t.s.players[+o.dataset.overviewPlayer].pos))}select(e){if(!this.game.tiles[e])return;this.selected=e;let t=ti(this.game.tiles[e],this.game.tiles),i=u0(this.game,e);this.marker.setAttribute("cx",t.x),this.marker.setAttribute("cy",t.y);for(let s of this.nodes)s.setAttribute("tabindex",+s.dataset.overviewTile===e?"0":"-1");this.root.querySelector(".overview-selection strong").textContent=`${e+1}. ${i.name}`,this.root.querySelector(".overview-selection span").textContent=i.description}};var th=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function lb(n){return[["\u5976\u86D9","naiwa"],["\u5976\u9F20","naishu"],["\u5976\u866B","naichong"],["\u5976\u72D7","naigou"],["\u5976\u86CB","naidan"],["\u5976\u8336","naicha"]].map(([e,t])=>({id:t,index:n.indexOf(e)})).filter(e=>e.index>=0).sort((e,t)=>e.index-t.index)[0]?.id}function cb(n){if(/暂时放弃|存款利息/.test(n))return null;let e=n.replace(/掷出 (.+?)，(前进|倒退) (\d+) 格。/,"\u63B7\u51FA $1 \xB7 $2 $3\u683C").replace(/奶家发财岛开张！每位奶伴带着 ([\d,]+) 奶币出发。/,"\u5976\u5BB6\u5F00\u5C40 \xB7 \u6BCF\u4EBA $1 \u5976\u5E01").replace(/将「(.+?)」升级为 (\d) 级/,"\u5347\u7EA7 $1 \xB7 $2\u7EA7").replace(/拆除「(.+?)」房屋，保留土地，回收材料/,"\u62C6\u9664 $1 \xB7 \u56DE\u6536").replace(/需支付 (\d+) 奶币，请筹集资金或申请破产。/,"\u73B0\u91D1\u4E0D\u8DB3 \xB7 \u5F85\u4ED8 $1").replace(/向(奶.+?)支付「.+?」租金/,"\u5411$1\u4ED8\u79DF\u91D1").replace(/，持续 3 个后续回合。/,"").replace(/第 (\d+) 轮开始，奶家股市行情已更新。/,"\u7B2C $1 \u8F6E \xB7 \u80A1\u5E02\u66F4\u65B0").replace(/[「」]/g,"").replace(/[。！]$/,"");if(e.length>33){let t=e.match(/[+−]\d+[，。]?$/)?.[0]||"";e=e.slice(0,29-t.length)+"\u2026"+t}return e}var ih=class{constructor(e,{onEvent:t=()=>{}}={}){this.root=e,this.onEvent=t,this.queue=[],this.timer=null,this.paused=!1,this.remaining=2400,this.speed=1}get busy(){return!this.root.hidden||this.queue.length>0}setSpeed(e){this.speed=Xa(e)}sync(e,t){if(!t){this.reset();return}let i=e.s.phase==="event"&&!e.player?.human&&e.s.notice;if(this.game!==e){this.reset(),this.game=e,this.turn=`${e.s.round}:${e.s.current}`,this.head=e.s.logs[0],this.push(`\u7B2C ${e.s.round} \u8F6E \xB7 ${e.char().name}\u7684\u56DE\u5408`),i&&this.pushEvent(e);return}let s=`${e.s.round}:${e.s.current}`;if(s!==this.turn&&(this.turn=s,this.push(`\u7B2C ${e.s.round} \u8F6E \xB7 ${e.char().name}\u7684\u56DE\u5408`)),i&&e.s.notice!==this.lastNotice){this.pushEvent(e),this.head=e.s.logs[0];return}let r=e.s.logs.indexOf(this.head);if(r!==0){let a=(r<0?e.s.logs.slice(0,1):e.s.logs.slice(0,r)).reverse();this.head=e.s.logs[0];for(let o of a){let c=cb(o.text);c&&this.push(c)}}}pushEvent(e){this.lastNotice=e.s.notice,this.push({title:e.s.notice.title,event:od(e)})}reset(){clearTimeout(this.timer),this.timer=null,this.queue=[],this.game=null,this.lastNotice=null,this.root.hidden=!0,this.root.classList.remove("news-event","news-happy","news-sad")}push(e){this.queue.push(e),!this.timer&&!this.paused&&this.next()}next(){if(this.paused)return;clearTimeout(this.timer);let e=this.queue.shift();if(!e){this.timer=null,this.root.hidden=!0;return}let t=typeof e=="string"?null:e.event,i=t?`${t.name} \xB7 ${e.title} ${t.text} ${t.outcomes.join(" ")}`:e;if(this.root.textContent=i,this.root.classList.remove("news-event","news-happy","news-sad"),t)this.root.classList.add("news-event",`news-${t.mood}`),this.root.innerHTML=`<div class="news-event-picture">${ld(t)}<span>${Ut(t.icon)}</span></div><div class="news-event-copy"><small>\u7535\u8111 \xB7 ${th(t.name)}</small><strong>${th(e.title)}</strong><p>${th(t.text)}</p>${t.outcomes.length?`<div>${t.outcomes.map(s=>`<b>${th(s)}</b>`).join("")}</div>`:""}</div>`;else if(this.root.insertAdjacentHTML){let s=lb(i);s&&this.root.insertAdjacentHTML("afterbegin",`<span class="news-face">${_t(s)}</span>`)}if(this.root.hidden=!1,this.root.classList.remove("news-enter"),this.root.offsetWidth,this.root.classList.add("news-enter"),this.remaining=t?Math.max(2200,Math.min(5200,2e3+i.length*35)/this.speed):Math.max(1250,Math.min(2800,1200+i.length*40)/this.speed),t)try{this.onEvent(t)}catch{}this.schedule()}schedule(){this.deadline=performance.now()+this.remaining,this.timer=setTimeout(()=>this.next(),this.remaining)}setPaused(e){e!==this.paused&&(this.paused=e,e?this.timer&&(this.remaining=Math.max(100,this.deadline-performance.now()),clearTimeout(this.timer),this.timer=null):this.root.hidden?this.queue.length&&this.next():this.schedule())}};var eo=()=>new Promise(n=>requestAnimationFrame(()=>requestAnimationFrame(n)));async function f0(n=document){await Promise.all([...n.querySelectorAll('link[rel="stylesheet"]')].map(e=>new Promise((t,i)=>{let s=()=>{e.media="all",t()};if(e.sheet){s();return}e.addEventListener("load",s,{once:!0}),e.addEventListener("error",i,{once:!0})})))}async function p0(n=document,e=fetch){let t=n.fonts?n.fonts.load("16px KuaiLe","\u5976\u86D9\u5927\u5BCC\u7FC1").then(()=>n.fonts.ready):Promise.resolve(),i=Promise.all([...n.images].map(r=>r.decode?r.decode():new Promise((a,o)=>{if(r.complete){r.naturalWidth?a():o(Error("Image unavailable"));return}r.addEventListener("load",a,{once:!0}),r.addEventListener("error",o,{once:!0})}))),s=e(globalThis.__NAIWA_LAUGH_DATA__||"./audio/naiwa-laugh-excerpt.mp3",{cache:"force-cache"}).then(async r=>{if(!r.ok)throw Error("Audio unavailable");globalThis.__NAIWA_LAUGH_BYTES__=await r.arrayBuffer()});await Promise.all([t,i,s])}function hb(n,e,t){let i=[[n.left,n.top],[n.right,n.top],[n.left,n.bottom],[n.right,n.bottom]].map(([a,o])=>ad(a,o,e,t)),s=Math.min(...i.map(a=>a.x)),r=Math.min(...i.map(a=>a.y));return{left:s,top:r,right:Math.max(...i.map(a=>a.x)),bottom:Math.max(...i.map(a=>a.y)),width:Math.max(...i.map(a=>a.x))-s}}function ub(n,e,t,i){let s=Math.min(Math.max(n.width,220),e-24),r=Math.min(i*40+12,t-24),a=t-n.bottom-12,o=n.top-12,c=a>=Math.min(160,r)||a>=o,l=r;return{left:Math.max(12,Math.min(n.left,e-s-12)),top:Math.max(12,Math.min(c?n.bottom+5:n.top-l-5,t-l-12)),width:s,height:l}}function bd(n,e,t){for(let i=1;i<=n.length;i++){let s=(e+t*i+n.length*2)%n.length;if(!n[s].disabled)return s}return-1}var nh=class{constructor(e){this.root=e,this.doc=e.ownerDocument,this.items=new Map,this.serial=0,this.layer=this.doc.createElement("div"),this.layer.className="choice-layer",this.layer.hidden=!0,this.list=this.doc.createElement("div"),this.list.className="choice-list",this.list.setAttribute("role","listbox"),this.layer.append(this.list),e.append(this.layer),this.layer.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),t.target===this.layer&&this.close()}),e.addEventListener("click",t=>{if(t.target.closest(".game-select,.choice-layer"))return;let i=t.target.closest("label")?.control;this.items.has(i)&&(t.preventDefault(),this.open(this.items.get(i)))}),e.addEventListener("scroll",t=>{this.layer.contains(t.target)||this.close(!1)},!0),window.addEventListener("gamelayoutchange",()=>this.close(!1)),this.observer=new MutationObserver(()=>this.sync()),this.observer.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["hidden","disabled","selected","label"]}),this.sync()}sync(){for(let[e]of this.items)e.isConnected||(this.active?.select===e&&this.close(!1),this.items.delete(e));for(let e of this.root.querySelectorAll("select:not(.game-select-native)")){let t=[...e.labels||[]].map(c=>{let l=c.cloneNode(!0);return l.querySelectorAll("select,.game-select").forEach(h=>h.remove()),l.textContent.trim()}).join(" "),i=this.doc.createElement("span"),s=this.doc.createElement("button"),r=this.doc.createElement("span"),a=this.doc.createElement("span");i.className="game-select",i.dataset.selectId=e.id,s.type="button",s.className="choice-trigger",s.setAttribute("role","combobox"),s.setAttribute("aria-haspopup","listbox"),s.setAttribute("aria-expanded","false"),r.className="choice-value",a.textContent="\u25BE",a.setAttribute("aria-hidden","true"),s.append(r,a),e.before(i),i.append(e,s),e.classList.add("game-select-native"),e.tabIndex=-1,e.setAttribute("aria-hidden","true");let o={select:e,wrapper:i,trigger:s,value:r,label:e.getAttribute("aria-label")||t||"\u9009\u62E9\u9009\u9879",id:"game-choice-"+ ++this.serial};this.items.set(e,o),s.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),this.active===o?this.close():this.open(o)}),s.addEventListener("keydown",c=>{["ArrowDown","ArrowUp"].includes(c.key)&&(c.preventDefault(),this.open(o))}),e.addEventListener("change",()=>this.sync())}for(let e of this.items.values()){let{select:t,wrapper:i,trigger:s,value:r,label:a}=e,o=t.selectedOptions[0]?.textContent||"\u8BF7\u9009\u62E9";r.textContent!==o&&(r.textContent=o),i.hidden!==t.hidden&&(i.hidden=t.hidden),s.disabled!==t.disabled&&(s.disabled=t.disabled);let c=a+"\uFF1A"+o;s.getAttribute("aria-label")!==c&&s.setAttribute("aria-label",c),this.active===e&&(t.hidden||t.disabled)&&this.close(!1)}}open(e){if(e.select.disabled||e.select.hidden)return;this.close(!1),this.active=e,this.list.replaceChildren(),this.list.id=e.id,e.trigger.setAttribute("aria-controls",e.id),e.trigger.setAttribute("aria-expanded","true"),this.list.setAttribute("aria-label",e.label);let t=[...e.select.options];this.buttons=t.map((o,c)=>{let l=this.doc.createElement("button");return l.type="button",l.setAttribute("role","option"),l.setAttribute("aria-selected",String(c===e.select.selectedIndex)),l.disabled=o.disabled||!!o.parentElement?.disabled,l.textContent=o.textContent,l.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),!l.disabled&&(e.select.selectedIndex=c,this.close(),e.select.dispatchEvent(new Event("change",{bubbles:!0})),this.sync())}),l.addEventListener("keydown",h=>{if(["Escape","ArrowDown","ArrowUp","Home","End","Enter"," "].includes(h.key)&&h.stopPropagation(),h.key==="Escape")h.preventDefault(),this.close();else if(h.key==="Tab")this.close(!1);else if(["ArrowDown","ArrowUp","Home","End"].includes(h.key)){h.preventDefault();let u=h.key==="Home"?bd(this.buttons,-1,1):h.key==="End"?bd(this.buttons,0,-1):bd(this.buttons,c,h.key==="ArrowDown"?1:-1);this.buttons[u]?.focus({preventScroll:!0}),this.buttons[u]?.scrollIntoView({block:"nearest"})}}),l}),this.list.append(...this.buttons),this.layer.hidden=!1;let i=hb(e.trigger.getBoundingClientRect(),this.root.getBoundingClientRect(),this.root.dataset.rotated==="true"),s=ub(i,this.root.clientWidth,this.root.clientHeight,t.length);Object.assign(this.list.style,{left:s.left+"px",top:s.top+"px",width:s.width+"px",maxHeight:s.height+"px"});let r=this.buttons[e.select.selectedIndex],a=r&&!r.disabled?r:this.buttons.find(o=>!o.disabled);a?.focus({preventScroll:!0}),a&&(this.list.scrollTop=Math.max(0,a.offsetTop-this.list.clientHeight/2))}close(e=!0){let t=this.active;t&&(this.active=null,t.trigger.setAttribute("aria-expanded","false"),this.layer.hidden=!0,e&&t.trigger.isConnected&&t.trigger.focus({preventScroll:!0}))}};async function db(){globalThis.__NAIWA_BOOT__?.set(25,"\u6B63\u5728\u51C6\u5907\u7CBE\u7EC6\u573A\u666F\u2026"),await eo(),await f0();let n=E=>document.getElementById(E),e=E=>String(E).replace(/[&<>"']/g,I=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[I]),t=E=>Math.round(E).toLocaleString("zh-CN"),i=Xs(),s=null;try{i=Xs(JSON.parse(localStorage.getItem("naiwa-setup-v1")||"{}"))}catch{}let r=20,a=!1,o={naiwa:"\u25C9",naichong:"\u224B",naishu:"\u2667"},c={kind:"deposit",amount:"300"},l=Gn.create({seed:7481}),h=!1,u="naiwa",f=null,d,g=null,v=!1,m="",p,x,y,_=!0,R=!1,T=l.tiles,L=new nh(n("app"));try{f=Gn.restore(localStorage.getItem(dd)),Object.assign(l.s.options,c0(localStorage,f?.s.options||l.s.options))}catch{}try{d=new jc(n("scene"),E=>{h&&!v&&j("tile",E)},l.tiles)}catch(E){console.warn("3D unavailable; using playable map",E),n("fallback").hidden=!1}d&&(d.paused=!0),globalThis.__NAIWA_BOOT__?.set(55,"\u6B63\u5728\u51C6\u5907\u5976\u4F34\u4E0E\u64CD\u4F5C\u754C\u9762\u2026"),await eo(),n("scene").addEventListener("camerachange",E=>n("followBtn").setAttribute("aria-pressed",String(E.detail.follow))),n("scene").addEventListener("dicerollchange",E=>{n("dice").classList.toggle("rolling",E.detail.rolling),n("app").classList.toggle("is-dice-active",E.detail.active),E.detail.impact&&k.sfx("diceLand")}),n("scene").addEventListener("renderlost",()=>{d?.leaveStudio(),n("app").classList.remove("is-studio"),n("studioPanel").hidden=!0,n("startScreen").hidden=h,n("fallback").hidden=!1,te(),H("3D \u753B\u9762\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u5DF2\u5207\u6362\u5230\u53EF\u73A9\u7684\u7B80\u6D01\u5730\u56FE\u3002"),J()}),n("scene").addEventListener("renderrestored",()=>{n("fallback").hidden=!0,d&&(d.paused=R),J(),d?.renderStill(),H("3D \u753B\u9762\u5DF2\u6062\u590D\uFF0C\u7EE7\u7EED\u5F53\u524D\u65C5\u7A0B\u3002")});let U=new Qc(n("miniMap"),{jump:E=>{h&&!v&&!d?.studio&&(d?.focusTile(E),O())},inspect:E=>{h&&!v&&j("tile",E)},overview:E=>{h&&!v&&!d?.studio&&j("overview",E)}}),S=new Cc,M=new ih(n("newsFlash"),{onEvent:({mood:E})=>{E!=="idle"&&O(E)}}),D=new Nc,k=new Jc(l.s.options),X=null;function W(){k.setOptions(l.s.options),n("soundBtn").dataset.state=k.status();let E=n("audioStatus");E&&(E.textContent=k.status())}function O(E="tap"){W(),k.sfx(E)}async function z(){await k.unlock(),W()}document.addEventListener("pointerdown",z,{once:!0,capture:!0}),document.addEventListener("keydown",z,{once:!0,capture:!0});function ee(){let E=l.s,I={state:E,positions:E.players.map(Y=>Y.pos),money:E.players.map(Y=>Y.money),lots:Object.fromEntries(Object.entries(E.ownership).map(([Y,ie])=>[Y,ie.level])),phase:E.phase},P=X;X=I,!(!h||!P||P.state!==E)&&(I.positions.some((Y,ie)=>Y!==P.positions[ie])&&k.sfx("step"),Object.entries(I.lots).some(([Y,ie])=>ie>(P.lots[Y]??0))?k.sfx("build"):Object.entries(P.lots).some(([Y,ie])=>ie>0&&(I.lots[Y]??0)<ie)?k.sfx("demolish"):I.money.some((Y,ie)=>Y>P.money[ie])&&k.sfx("coin"),I.phase==="moving"&&["roll","departure"].includes(P.phase)&&k.sfx("roll"),I.phase==="finished"&&P.phase!=="finished"&&k.sfx("win"))}function H(E){n("toast").textContent=E,n("toast").classList.add("show"),clearTimeout(p),p=setTimeout(()=>n("toast").classList.remove("show"),2800)}function te(){try{h0(localStorage,l.s.options)}catch{}if(h)try{localStorage.setItem(dd,JSON.stringify(l.s)),_=!0,n("saveStatus").textContent="\u5DF2\u81EA\u52A8\u4FDD\u5B58\u5728\u672C\u673A"}catch{_=!1,n("saveStatus").textContent="\u5B58\u6863\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8BF7\u5BFC\u51FA\u5907\u4EFD"}}function ae(E=!0){if(!E){H("\u5F53\u524D\u65E0\u6CD5\u6267\u884C\uFF1A\u8BF7\u68C0\u67E5\u4F59\u989D\u3001\u6570\u91CF\u6216\u4F7F\u7528\u65F6\u673A\u3002");return}te(),J(),O()}function he(){let E=+n("playerCountSelect").value,I=ps(i,u,E);if(I){s=Xs(i),j("advanced"),H(I);return}D.reset();let P={...l.s.options};l=Gn.create({character:u,rounds:+n("roundSelect").value,playerCount:E,randomStart:i.randomStart,mapVersion:i.mapVersion,opponents:Array.from({length:E-1},(Y,ie)=>i.opponents[ie]||"random"),seatLevels:i.seatLevels,startingCash:i.startingCash,startingTickets:i.startingTickets,seed:i.seed===""?Date.now():+i.seed,difficulty:n("difficultySelect").value,talents:n("talentsEnabled").checked}),l.s.options=P,h=!0,m="",ge(!0),n("startScreen").hidden=!0,d?.home(),d?.followPlayer(),ae()}function we(){if(!s)return;s.opponents=Array.from(document.querySelectorAll("[data-setup-seat]"),I=>I.value),s.seatLevels=Array.from(document.querySelectorAll("[data-setup-level]"),I=>I.value),s.startingCash=+n("setupCash").value,s.startingTickets=+n("setupTickets").value,s.mapVersion=+n("setupMap").value,s.randomStart=n("setupInitiative").value==="random",s.seed=n("setupSeed").value.trim();let E=ps(s,u,+n("playerCountSelect").value);n("setupError").textContent=E,n("sheetBody").querySelector("[data-act=applyAdvanced]").disabled=!!E;for(let I of document.querySelectorAll(".opponent-seat")){let P=I.querySelector("[data-setup-seat]").value;I.querySelector(".seat-portrait").innerHTML=P==="random"?'<span class="random-face">\u2684</span>':_t(P)}}function Oe(){if(!f)return;let E={...l.s.options};l=f,l.s.options=E,h=!0,m="",n("startScreen").hidden=!0,d?.endPreview(),d?.followPlayer(),ge(!0),ae()}function We(){if(n("mapSelect").value=String(i.mapVersion),!h&&l.s.mapVersion!==i.mapVersion){let I={...l.s.options};l=Gn.create({mapVersion:i.mapVersion,seed:7481}),l.s.options=I,T=l.tiles,d?.sync(l),d?.home()}document.querySelector(".map-preview-note").textContent=vn[i.mapVersion].name+" \xB7 "+(i.mapVersion===2?"48\u683C \xB7 \u4E24\u6761\u77ED\u652F\u8DEF":"48\u683C \xB7 \u8DE8\u5C9B\u957F\u6377\u5F84"),n("advancedSummary").textContent=`${vn[i.mapVersion].name} \xB7 \u521D\u59CB ${t(i.startingCash)} \u5976\u5E01 \xB7 ${i.opponents.some(I=>I&&I!=="random")?"\u6307\u5B9A\u9635\u5BB9":"\u968F\u673A\u9635\u5BB9"}`,n("characterPicker").innerHTML=Bt.map(I=>`<button class="character-choice ${u===I.id?"selected":""}" data-character="${I.id}" aria-pressed="${u===I.id}"><span class="face">${_t(I.id)}</span><strong>${I.name}</strong></button>`).join(""),n("continueBtn").hidden=!f,n("continueBtn").innerHTML=Em(f),document.querySelector(".welcome-panel").classList.toggle("has-save",!!f);let E=ms[u];n("talentPreview").innerHTML=`<strong>${Bt.find(I=>I.id===u).name} \xB7 ${E.name}${E.strong?" \xB7 \u5F3A\u52BF\u89D2\u8272":""}</strong><p>${E.text}</p>`,L.sync(),h||d?.previewCharacter(u)}function Ze(E){return[E.skip?`\u4F11\u517B ${E.skip} \u56DE\u5408`:"",E.shield?"\u514D\u79DF\u5DF2\u5C31\u7EEA":"",E.spirit?mn[E.spirit].name+" "+Math.min(3,E.spiritTurns)+" \u56DE\u5408":"",E.vehicle?Yi[E.vehicle].name:"",E.reverse?"\u672C\u56DE\u5408\u5012\u9000":"",E.forced?`\u6307\u5B9A ${E.forced} \u6B65`:"",E.slowTurns?`\u6162\u884C ${E.slowTurns} \u6B21`:""].filter(Boolean).map(I=>`<span class="status-pill">${e(I)}</span>`).join("")}function J(){L.sync();let E=S.read(l,h);T=l.tiles;let I=l.s,P=l.player;W(),ee(),M.setSpeed(I.options.speed),M.sync(l,h),d?.sync(l),U.sync(l,{visible:h&&!d?.studio}),n("app").classList.toggle("is-menu",!h),n("app").dataset.phase=I.phase,n("app").dataset.mapVersion=String(I.mapVersion),n("app").style.setProperty("--player-count",I.players.length),n("pauseBtn").hidden=!h,n("pauseBtn").setAttribute("aria-pressed",String(R)),n("difficultyBtn").textContent=Hn[I.difficulty].name,n("difficultyBtn").title=Hn[I.difficulty].description,n("mapHeading").textContent=vn[I.mapVersion].name,n("round").textContent=h?`\u7B2C ${I.round} / ${I.maxRounds} \u8F6E`:"\u51C6\u5907\u51FA\u53D1",n("logRound").textContent=`\u7B2C ${I.round} \u8F6E`,n("weather").textContent=h?["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"][I.round%7]+" \xB7 "+un[kn(I.options.lighting)].label:un[kn(I.options.lighting)].label+" \xB7 \u5B9C\u5927\u7B11",n("players").innerHTML=I.players.map(B=>{let Z=l.char(B);return`<div data-player-id="${B.id}" class="player ${h&&I.current===B.id?"active":""} ${B.alive?"":"out"}"><div class="player-head"><span class="mini-face" style="--c:${Z.color}">${_t(Z.id)}</span><div><div class="player-name">${Z.name} ${B.human?'<span class="badge">\u4F60</span>':""}</div><div class="player-role">${B.alive?"":"\u672C\u5C40\u5DF2\u7834\u4EA7"}</div></div><div class="player-money"><small>\u25CF</small>${t(B.money)}</div></div><div class="player-stats"><span>\u5730\u4EA7 <strong>${l.owned(B).length}</strong></span><span>\u51C0\u8D44\u4EA7 <strong>${t(l.worth(B))}</strong></span></div>${Ze(B)?`<div class="status-pills">${Ze(B)}</div>`:""}</div>`}).join(""),n("logs").innerHTML=I.logs.slice(0,20).map(B=>`<div class="log"><span class="log-time">${String(B.round).padStart(2,"0")}</span><span>${e(B.text)}</span></div>`).join(""),n("turnName").textContent=h?I.phase==="finished"?"\u672C\u6B21\u65C5\u884C\u5706\u6EE1\u7ED3\u675F":`${l.char().name}${P.human?"\uFF0C\u8F6E\u5230\u4F60\u5566":"\u6B63\u5728\u65C5\u884C"}`:"\u51C6\u5907\u597D\u4E86\u5417\uFF1F",n("talentBtn").title=l.s.talents?ms[I.players[0].character].text:"\u672C\u5C40\u5929\u8D4B\u672A\u5F00\u542F",n("turnAvatar").innerHTML=_t(l.char().id),n("turnAvatar").style.background=l.char().color;let Y={departure:"\u5929\u8D4B\u7ED3\u7B97\u4E2D\uFF0C\u9A6C\u4E0A\u63B7\u9AB0\u51FA\u53D1",roll:P.skip?"\u6B63\u5728\u4F11\u517B\uFF0C\u53EF\u7528\u91CE\u751F\u72D7\u5976\u6062\u590D":`\u70B9\u5238 ${P.tickets} \xB7 \u5DF2\u7528\u5361 ${P.cardsUsed} \xB7 \u505C\u5230\u81EA\u5BB6\u5730\u53EF\u5EFA\u8BBE`,moving:`${P.reverse?"\u5012\u9000":"\u524D\u8FDB"}\u4E2D \xB7 \u8FD8\u5269 ${I.remaining} \u683C`,branch:"\u9009\u62E9\u4E00\u6761\u8DEF\u7EBF\u7EE7\u7EED\u524D\u8FDB",buy:"\u8FD9\u5757\u5730\u503C\u5F97\u4E70\u4E0B\u6765\u5417\uFF1F",estate:"\u652F\u4ED8\u79DF\u91D1\uFF0C\u8FD8\u662F\u7528\u8D2D\u5730\u5361\u6536\u8D2D\uFF1F",event:"\u770B\u770B\u5C9B\u4E0A\u53D1\u751F\u4E86\u4EC0\u4E48",end:`\u70B9\u5238 ${P.tickets} \xB7 \u5EFA\u8BBE ${P.buildsUsed}/1 \xB7 \u53EF\u7EE7\u7EED\u7ECF\u8425`,debt:"\u73B0\u91D1\u4E0D\u8DB3\uFF0C\u53EF\u4EE5\u53D6\u6B3E\u3001\u501F\u6B3E\u6216\u53D8\u5356\u8D44\u4EA7",finished:"\u770B\u770B\u8C01\u662F\u4ECA\u5929\u7684\u5976\u5BB6\u5927\u5BCC\u7FC1"},ie={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};for(let B of E){let Z=um(n("players"),B);d?.showTransfer(B,Z)||setTimeout(Z,1200)}n("turnHint").textContent=h?Y[I.phase]:"\u9009\u4E00\u4F4D\u5976\u4F34\uFF0C\u5F00\u542F\u65C5\u884C",n("dice").innerHTML=I.dice.map(B=>`<span class="pip-die" role="img" aria-label="\u9AB0\u5B50 ${B} \u70B9">${Array.from({length:9},(Z,Me)=>`<i class="${ie[B].includes(Me)?"pip-on":""}"></i>`).join("")}</span>`).join(""),n("dice").classList.toggle("rolling",!!d?.fx.diceRolling),n("actionBtn").textContent=h?I.phase==="finished"?"\u770B\u6392\u540D":P.human?{roll:P.skip?"\u4F11\u517B":"\u63B7\u9AB0\u5B50",end:"\u7ED3\u675F\u56DE\u5408",departure:"\u5929\u8D4B\u4E2D",moving:"\u524D\u8FDB\u4E2D",branch:"\u9009\u8DEF\u7EBF",buy:"\u4E70\u5730",estate:"\u9009\u5730\u4EA7",event:"\u770B\u4E8B\u4EF6",debt:"\u7B79\u8D44\u91D1"}[I.phase]:"\u7B49\u5F85\u4E2D":"\u9009\u5976\u4F34",n("actionBtn").textContent.length===4&&(n("actionBtn").textContent=n("actionBtn").textContent.slice(0,2)+`
`+n("actionBtn").textContent.slice(2)),n("actionBtn").disabled=!h||!P.human&&I.phase!=="finished"||["moving","departure"].includes(I.phase),document.querySelectorAll("[data-panel]").forEach(B=>B.disabled=!h||!P.human||!["roll","end","debt"].includes(I.phase));for(let B of["deeds","cards","bank","stocks"])document.querySelector(".dock-tabs [data-panel="+B+"]").disabled=!h||v||!!d?.studio;n("cardCount").textContent=I.players[0].cards.length,n("planBtn").disabled=!h||!P.human||I.phase!=="roll",n("diceCount").hidden=!h||!P.human||P.vehicle===0||I.phase!=="roll",n("diceCount").innerHTML=Array.from({length:Yi[P.vehicle].dice},(B,Z)=>`<option value="${Z+1}" ${P.diceCount===Z+1?"selected":""}>${Z+1} \u9897\u9AB0\u5B50</option>`).join(""),n("soundBtn").textContent=I.options.sound?"\u266B":"\u266A",n("soundBtn").setAttribute("aria-label",I.options.sound?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),n("qualityBtn").textContent=I.options.quality==="low"?"\u7701\u7535":"\u7535\u5F71",n("qualityBtn").title=I.options.quality==="low"?"\u7701\u7535\u753B\u8D28 \xB7 \u70B9\u51FB\u5207\u6362\u7535\u5F71\u753B\u8D28":"\u7535\u5F71\u753B\u8D28 \xB7 \u70B9\u51FB\u5207\u6362\u7701\u7535\u753B\u8D28",n("castBtn").disabled=!d||!!d.contextLost,n("followBtn").setAttribute("aria-pressed",String(!!d?.follow)),n("moveIndicator").hidden=!h,n("moveIndicator").textContent=`${l.char().name} \xB7 ${T[P.pos].name}${I.phase==="moving"?" \xB7 \u5269 "+I.remaining+" \u683C":""}`,n("fallback").hidden||(n("fallback").innerHTML=`<div class="fallback-grid">${T.map(B=>`<button class="fallback-tile ${P.pos===B.id?"current":""}" data-tile="${B.id}" style="background:${Ui[B.group].color}50">${B.id+1}. ${e(B.name)}<br>${I.players.filter(Z=>Z.alive&&Z.pos===B.id).map(Z=>l.char(Z).name).join(" ")}${I.ownership[B.id]?"<br>\u2302 "+l.char(I.players[I.ownership[B.id].player]).name:""}</button>`).join("")}</div>`);let _e=`${I.phase}:${I.current}:${I.round}:${P.pos}`;h&&(P.human||I.phase==="finished")&&["buy","estate","event","branch","debt","finished"].includes(I.phase)&&!g&&m!==_e&&(m=_e,j(I.phase)),h&&P.human&&I.phase==="end"&&!g&&m!==_e&&(m=_e,l.canUpgrade(P.pos)||l.canBuild(P.pos)||Je(I.ownership[P.pos])==="research"&&I.ownership[P.pos]?.player===P.id?j("buildHere",P.pos):T[P.pos].kind==="shop"&&j("shop"))}function oe(){M.setPaused(document.hidden||R||!n("sheet").hidden)}function ue(E,I,P,Y=!1){d?.cancelGestures(),g?.type==="tile"?d?.selectTile(g.id,"inspect"):g?.type==="buy"&&d?.selectTile(l.player.pos,"buy"),n("app").classList.add("has-dialog"),x=document.activeElement,n("sheet").dataset.panel=g?.type||"",n("sheet").dataset.detail=g?.type==="tile"&&T[g.id]?.kind!=="property"?"landmark":"",n("sheetTitle").textContent=E,n("sheetSubtitle").textContent=I,n("sheetBody").innerHTML=P,n("sheet").hidden=!1,n("sheetBody").scrollTop=0,n("sheetBackdrop").hidden=!1,n("sheetBackdrop").classList.toggle("live-map",["deeds","tile","confirmDemolish","buy","branch"].includes(g?.type)),v=Y,n("closeSheet").hidden=Y,oe(),queueMicrotask(()=>{(Y?n("sheetBody").querySelector("button,input,select"):n("closeSheet"))?.focus({preventScroll:!0})})}function ge(E=!1){v&&!E||(R&&se(!1),d?.clearSelection(),n("app").classList.remove("has-dialog"),g=null,v=!1,n("sheet").hidden=!0,n("sheetBackdrop").hidden=!0,oe(),x?.focus?.({preventScroll:!0}),h&&["buy","estate","event","branch","debt","finished"].includes(l.s.phase)&&(m=""))}let Re=E=>`<div class="stat-grid">${E.map(([I,P])=>`<div class="stat-box"><strong>${I}</strong><span>${P}</span></div>`).join("")}</div>`,Ae=(E,I,P="",Y=!1,ie="secondary")=>`<button class="${ie}" data-act="${I}" ${P} ${Y?"disabled":""}>${E}</button>`;function at(E,I,P){return Li({...E,buildingType:E.buildingType||l.s.ownership[E.id]?.buildingType},I,P)}function N(){return h&&l.player.human&&l.manageable()}function le(E){let I=T[E.id];return e(I.name)+" \xB7 "+(E.rent?lm(l,E):E.price?"\u7A7A\u5730 "+E.price+" \u5976\u5E01":E.owner===l.player.id?"\u81EA\u5DF1\u7684\u5730\u4EA7":{shop:"\u70B9\u5238 +30 \u4E0E\u968F\u673A\u5361",hospital:`\u8D39\u7528 ${l.payment(100)}\uFF0C\u4F11\u517B\u4E00\u6B21`,tax:`\u8D39\u7528 ${l.payment(180)}`,rest:`\u8865\u8D34 +${Math.round(120*(l.player.spirit==="fortune"?1.25:1))}`,event:"\u968F\u673A\u4E8B\u4EF6",spirit:"\u968F\u673A\u795E\u7075",bank:"\u94F6\u884C",stock:"\u8BC1\u5238\u6240",start:"\u8D77\u70B9"}[I.kind]||"\u5DF2\u5907\u514D\u79DF")+(E.passesStart?` \xB7 \u7ECF\u8FC7\u8D77\u70B9 +${Math.round((400+(l.s.talents&&l.player.character==="naiwa"?80:0))*(l.player.spirit==="fortune"?1.25:1))} / 25\u70B9\u5238`:"")+(E.points?" \xB7 \u9014\u4E2D\u70B9\u5238 +"+E.points:"")+(E.blocked?" \xB7 \u8DEF\u969C\u622A\u505C":"")}function j(E,I){let P=l.s,Y=l.player;g={type:E,id:I};let ie=N(),_e=ie&&P.phase!=="debt";if(E==="advanced")s??=Xs(i),ue("\u9AD8\u7EA7\u5BF9\u5C40\u8BBE\u7F6E","\u81EA\u5B9A\u4E49\u7535\u8111\u5E2D\u4F4D\u4E0E\u516C\u5E73\u8D77\u59CB\u6761\u4EF6",xm(s,u,+n("playerCountSelect").value,n("difficultySelect").value));else if(E==="overview")ue("\u5168\u5C9B\u5927\u5730\u56FE","\u770B\u6E05\u5F52\u5C5E\u3001\u5EFA\u7B51\u4E0E\u5976\u4F34\u4F4D\u7F6E",'<div class="map-overview"></div>'),new eh(n("sheetBody").firstElementChild,l,{selected:I??l.player.pos,inspect:B=>{d?.focusTile(B),j("tile",B)}});else if(E==="mapGuide")ue(vn[P.mapVersion].name,"\u8DEF\u7EBF\u4E0E\u7535\u8111\u8BBE\u7F6E",`<p>${vn[P.mapVersion].description}</p><h3>\u672C\u5C40\u7535\u8111\uFF1A${Hn[P.difficulty].name}</h3><p>${Hn[P.difficulty].description}</p><p>\u672C\u5C40\u7535\u8111\uFF1A${P.players.filter(B=>!B.human).map(B=>l.char(B).name+" \xB7 "+Hn[l.aiDifficulty(B)].name).join("\u3001")}\u3002\u79CD\u5B50 ${P.setupSeed??"\u65E7\u5B58\u6863\u672A\u8BB0\u5F55"}\u3002</p><p>\u6240\u6709\u96BE\u5EA6\u7684\u521D\u59CB\u8D44\u91D1\u3001\u79DF\u91D1\u3001\u63B7\u9AB0\u548C\u5929\u8D4B\u89C4\u5219\u76F8\u540C\uFF0C\u5DEE\u522B\u53EA\u5728\u7535\u8111\u5982\u4F55\u505A\u51B3\u7B56\u3002\u65B0\u5C40\u53EF\u91CD\u65B0\u9009\u62E9\u5F3A\u5EA6\u3002</p><p>\u529F\u80FD\u5EFA\u7B51\u5747\u5BF9\u5E94\u9053\u8DEF\u683C\uFF1B\u9009\u62E9\u6377\u5F84\u524D\u53EF\u6253\u5F00\u843D\u70B9\u9884\u89C8\uFF0C\u6BD4\u8F83\u79DF\u91D1\u3001\u8865\u7ED9\u548C\u8D77\u70B9\u5956\u52B1\u3002</p>`);else if(E==="talents")ue("\u5976\u4F34\u4E13\u5C5E\u5929\u8D4B",P.talents?"\u6211\u7684\u6280\u80FD\u8FDB\u5EA6 \xB7 \u81EA\u52A8\u89E6\u53D1":"\u672C\u5C40\u672A\u5F00\u542F\uFF1B\u65B0\u5C40\u53EF\u52FE\u9009\u5F00\u542F",Mm(l));else if(E==="deeds")ue("\u6211\u7684\u5976\u5BB6\u5730\u4EA7","\u4ECE\u4E00\u95F4\u5C0F\u5E97\uFF0C\u5230\u4E00\u5EA7\u5C0F\u9547",Am(l));else if(E==="cards")ue("\u5976\u4F34\u7684\u5361\u5305","\u6536\u597D\u9053\u5177\uFF0C\u9009\u51C6\u4E0B\u4E00\u6B65",fm(l));else if(E==="cardTarget"){let B=Ft[Y.cards[I]];if(!B){ge(!0);return}ue(B.name,"\u9009\u62E9\u76EE\u6807\u4E0E\u6548\u679C",Tm(l,I,le))}else if(E==="bank")ue("\u5976\u5E01\u94F6\u884C","\u8BA9\u5C0F\u91D1\u5E93\uFF0C\u4E5F\u6162\u6162\u957F\u5927",Cm(l,c));else if(E==="stocks")ue("\u5976\u5BB6\u8BC1\u5238\u6240","\u6301\u4ED3\u6210\u672C \xB7 \u6D6E\u52A8\u76C8\u4E8F \xB7 \u6210\u4EA4\u8BB0\u5F55",Dm(l,{window:r,held:a})),queueMicrotask(()=>l.s.market.forEach((B,Z)=>Dc(l,Z)));else if(E==="shop")ue("\u5976\u5BB6\u8865\u7ED9\u5546\u5E97","\u7ED9\u4E0B\u4E00\u6B21\u51FA\u53D1\uFF0C\u591A\u4E00\u70B9\u51C6\u5907",`${pn("vehicle",l.canShop()?"\u6B22\u8FCE\u5230\u5E97\uFF1A\u7528\u70B9\u5238\u9009\u5361\uFF0C\u4E5F\u80FD\u8D2D\u5165\u4EA4\u901A\u5DE5\u5177\u3002":"\u8BF7\u505C\u5728\u5730\u56FE\u4E0A\u7684\u8865\u7ED9\u5546\u5E97\u8D2D\u4E70\uFF1B\u73B0\u5728\u53EF\u4EE5\u5148\u6D4F\u89C8\u5546\u54C1\u3002")}<div class="panel-note">\u5976\u5E01 ${t(Y.money)} \xB7 \u70B9\u5238 ${Y.tickets}/150 \xB7 \u672C\u56DE\u5408\u8D2D\u5361 ${Y.shopUsed}/2\u3002\u62FE\u53D6\u5730\u56FE\u91D1\u5E01 +10 \u70B9\u5238\uFF1B\u7ECF\u8FC7\u8D77\u70B9 +25\uFF1B\u8865\u7ED9\u7AD9 +30 \u53CA\u968F\u673A\u5361\u3002\u70B9\u5238\u4E0D\u8BA1\u5165\u51C0\u8D44\u4EA7\u3002</div><h3>\u51FA\u884C\u5DE5\u5177</h3>${Yi.slice(1).map(B=>`<div class="row shop-vehicle">${Ut("vehicle")}<div class="row-head"><strong>${B.name}</strong><span class="badge">${B.price} \u5976\u5E01</span></div><p>\u6BCF\u56DE\u5408\u53EF\u9009 1\u2014${B.dice} \u9897\u9AB0\u5B50\u3002\u8D2D\u5165\u66F4\u9AD8\u7B49\u7EA7\u5DE5\u5177\u540E\u66FF\u6362\u539F\u5DE5\u5177\u3002</p>${Ae(Y.vehicle>=B.id?"\u5DF2\u62E5\u6709\u6216\u5DF2\u5347\u7EA7":"\u8D2D\u4E70\u5DE5\u5177","vehicle",`data-id="${B.id}"`,!_e||!l.canShop()||Y.vehicle>=B.id||Y.money<B.price)}</div>`).join("")}<h3>\u5976\u4F34\u9053\u5177\u5361</h3>${Object.entries(Ft).map(([B,Z])=>`<div class="row collectible-card">${Ut(B)}<div class="row-head"><strong><span class="card-icon">${Z.icon}</span>${Z.name}</strong><span class="badge">${l.cardPrice(B)} \u70B9\u5238</span></div><p>${Z.description}</p>${Ae("\u653E\u8FDB\u5361\u5305","shop",`data-key="${B}"`,!_e||!l.canShop()||Y.tickets<l.cardPrice(B)||Y.cards.length>=15||Y.shopUsed>=2)}</div>`).join("")}`);else if(E==="tile"){let B=T[I],Z=P.ownership[I];ue(B.name,`${Ui[B.group].name} \xB7 \u5730\u56FE\u7B2C ${I+1} \u683C`,B.kind==="property"?`${at(B,Z?.level||0,Z?l.char(P.players[Z.player]).estateColor:"#77aa8b")}${Re([[B.price,"\u7A7A\u5730\u4EF7\u683C"],[Z?Z.level+" \u7EA7":"\u5F85\u552E","\u5EFA\u7B51\u7B49\u7EA7"]])}${Wa(l,I)}<p>${Z?`\u8FD9\u5757\u5730\u5C5E\u4E8E${l.char(P.players[Z.player]).name}\u3002`:"\u843D\u5728\u8FD9\u91CC\u65F6\uFF0C\u53EF\u4EE5\u51B3\u5B9A\u662F\u5426\u8D2D\u4E70\u3002"}${Z?.level?Mt[Je(Z)].text:"\u7A7A\u5730\u53EF\u9009\u62E9\u4E03\u79CD\u5EFA\u7B51\u3002\u53EA\u6709\u4F4F\u5B85\u53C2\u4E0E\u8857\u533A\u8054\u8425\uFF1B\u5176\u4ED6\u8BBE\u65BD\u6309\u81EA\u8EAB\u673A\u5236\u7ECF\u8425\u3002"}</p>${Z?.player===Y.id&&ie?`<div class="row-actions">${Ae("\u5EFA\u8BBE\u4E0E\u7ECF\u8425","chooseBuilding",`data-id="${I}"`,!_e||!(l.canUpgrade(I)||l.canBuild(I)||Je(Z)==="research"&&Y.pos===I))}${Ae("\u53D8\u5356\u5730\u4EA7","sell",`data-id="${I}"`)}</div>`:""}`:Um(l,B))}else if(E==="buy"){let B=T[Y.pos];ue("\u53D1\u73B0\u4E00\u5757\u597D\u5730\u76D8",`${B.name} \xB7 ${Ui[B.group].name}`,`${at(B,0,l.char(Y).estateColor)}<p>\u8D2D\u5730\u540E\u53EF\u9009\u62E9\u4F4F\u5B85\u3001\u8FDE\u9501\u5E97\u3001\u65C5\u9986\u3001\u5546\u573A\u3001\u52A0\u6CB9\u7AD9\u3001\u7814\u7A76\u6240\u6216\u516C\u56ED\u3002\u4E4B\u540E\u9700\u518D\u6B21\u505C\u9760\u624D\u80FD\u52A0\u76D6\uFF1B\u5DE5\u7A0B\u961F\u53EF\u8FDC\u7A0B\u52A0\u76D6\u3002</p>${Re([[B.price,"\u8D2D\u4E70\u4EF7\u683C"],[l.rent(B.id),"\u521D\u59CB\u79DF\u91D1"],[t(Y.money),"\u5F53\u524D\u73B0\u91D1"]])}<div class="button-grid">${Ae("\u5148\u8DEF\u8FC7\u770B\u770B","pass")}${Ae("\u4E70\u4E0B\u8FD9\u5757\u5730","buy","",Y.money<B.price,"primary")}</div>`,!0)}else if(E==="plan"){let B=Y.forced||Y.slowTurns?1:Y.diceCount,Z=Y.forced?new Map([[Y.forced,1]]):Y.slowTurns?new Map([[1,1]]):kc(B);ue("\u8FD9\u6B21\u4F1A\u8D70\u5230\u54EA\u91CC\uFF1F","\u5148\u770B\u98CE\u9669\uFF0C\u518D\u51B3\u5B9A\u7528\u5361\u6216\u9AB0\u5B50\u6570\u91CF",`<div class="panel-note">${Y.forced?"\u5DF2\u6307\u5B9A "+Y.forced+" \u6B65":Y.slowTurns?"\u6162\u884C\u751F\u6548\uFF1A\u672C\u6B21 1 \u6B65":B+" \u9897\u9AB0\u5B50\u7684\u771F\u5B9E\u843D\u70B9\u6982\u7387"}\u3002\u6709\u5C94\u8DEF\u65F6\u4F1A\u5217\u51FA\u4E24\u6761\u8DEF\u7EBF\uFF1B\u8D39\u7528\u6309\u5F53\u524D\u72B6\u6001\u4F30\u7B97\uFF0C\u4E8B\u4EF6\u5185\u5BB9\u4ECD\u968F\u673A\u3002\u70B9\u5238 ${Y.tickets}\uFF0C\u672C\u56DE\u5408\u5DF2\u7528\u5361 ${Y.cardsUsed}\u3002</div>${[...Z].map(([Me,ze])=>`<div class="row"><div class="row-head"><strong>${Me} \u6B65</strong><span class="badge">${(ze*100).toFixed(1)}%</span></div>${l.preview(Me).map(Ue=>`<p>${le(Ue)}</p>`).join("")}</div>`).join("")}<div class="row-actions">${Ae("\u53BB\u5361\u5305\u51B3\u5B9A","panel",'data-panel="cards"')}${Ae("\u56DE\u5730\u56FE","cancel")}</div>`)}else if(E==="buildHere")ue("\u5730\u4EA7\u5EFA\u8BBE\u4E0E\u7ECF\u8425",T[Y.pos].name,ym(l,Y.pos));else if(E==="estate"){let B=T[Y.pos],Z=P.ownership[Y.pos];ue("\u6765\u5230\u5BF9\u624B\u7684\u5730\u4EA7",`${l.char(P.players[Z.player]).name} \xB7 ${B.name}`,cm(l),!0)}else if(E==="branch")ue("\u4E0B\u4E00\u7AD9\uFF0C\u53BB\u54EA\u8FB9\uFF1F","\u5C94\u8DEF\u9009\u62E9",hm(l,le),!0);else if(E==="event"){let B=P.notice;ue(B?.title||"\u5C9B\u4E0A\u65B0\u9C9C\u4E8B",`${l.char().name}\u7684\u65C5\u884C\u624B\u8D26`,km(l),!0),O(B?.mood)}else if(E==="debt"){let B=P.debt;ue("\u5C0F\u91D1\u5E93\u9700\u8981\u5468\u8F6C","\u5148\u7B79\u6B3E\uFF0C\u518D\u7EE7\u7EED\u65C5\u884C",`<p>${e(B.label)}\u9700\u8981\u652F\u4ED8 <b>${t(B.amount)}</b> \u5976\u5E01\uFF0C\u5F53\u524D\u73B0\u91D1 <b>${t(Y.money)}</b>\u3002</p><div class="button-grid">${Ae("\u53BB\u94F6\u884C\u7B79\u6B3E","panel",'data-panel="bank"')}${Ae("\u5356\u51FA\u80A1\u7968","panel",'data-panel="stocks"')}${Ae("\u53D8\u5356\u5730\u4EA7","panel",'data-panel="deeds"')}${Ae("\u652F\u4ED8\u5E76\u7EE7\u7EED","settle","",Y.money<B.amount,"primary")}</div><h3>\u7533\u8BF7\u7834\u4EA7</h3><p>\u4F1A\u6E05\u7B97\u5B58\u6B3E\u3001\u80A1\u7968\u3001\u5730\u4EA7\u4E0E\u4EA4\u901A\u5DE5\u5177\uFF0C\u5C3D\u53EF\u80FD\u507F\u8FD8\u672C\u6B21\u6B20\u6B3E\uFF0C\u5E76\u9000\u51FA\u8FD9\u5C40\u65C5\u884C\u3002</p>${Ae("\u67E5\u770B\u7834\u4EA7\u786E\u8BA4","confirmBankrupt","","","secondary danger")}`,!0)}else if(E==="finished")ue("\u5976\u5BB6\u53D1\u8D22\u7EAA\u5FF5\u518C","\u672C\u6B21\u65C5\u884C\u7ED3\u7B97",dm(l),!0);else if(E==="settings")ue("\u65C5\u884C\u8BBE\u7F6E","\u6309\u81EA\u5DF1\u7684\u8282\u594F\uFF0C\u6162\u6162\u73A9",`<div class="setting-row"><label for="speedSelect">\u52A8\u753B\u901F\u5EA6</label><select id="speedSelect">${[1,2].map(B=>`<option value="${B}" ${Math.min(2,P.options.speed)===B?"selected":""}>${B===1?"\u6B63\u5E38 \xB7 \u5B8C\u6574\u5C55\u793A":"\u8F7B\u5FEB \xB7 \u4FDD\u7559\u6D88\u606F\u9605\u8BFB\u65F6\u95F4"}</option>`).join("")}</select></div><div class="setting-row"><label for="qualitySelect">\u753B\u9762\u8D28\u91CF</label><select id="qualitySelect"><option value="auto" ${P.options.quality==="auto"?"selected":""}>\u7535\u5F71\u753B\u8D28 \xB7 \u7CBE\u7EC6\u5149\u5F71</option><option value="low" ${P.options.quality==="low"?"selected":""}>\u7701\u7535\u753B\u8D28</option></select></div><div class="setting-row"><label for="lightingSelect">\u65E5\u7167\u6C1B\u56F4</label><select id="lightingSelect">${Object.entries(un).map(([B,Z])=>`<option value="${B}" ${kn(P.options.lighting)===B?"selected":""}>${Z.label}</option>`).join("")}</select></div><div class="setting-row"><span>\u58F0\u97F3</span>${Ae(P.options.sound?"\u5DF2\u5F00\u542F \xB7 \u70B9\u51FB\u5173\u95ED":"\u5DF2\u5173\u95ED \xB7 \u70B9\u51FB\u5F00\u542F","sound")}</div>${re()}<h3>\u65C5\u884C\u5B58\u6863</h3><p>${_?"\u8FDB\u5EA6\u81EA\u52A8\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u3002":"\u81EA\u52A8\u5B58\u6863\u5931\u8D25\uFF0C\u8BF7\u5BFC\u51FA\u5907\u4EFD\u3002"}\u5BFC\u51FA\u540E\uFF0C\u53EF\u4EE5\u5728\u53E6\u4E00\u53F0\u8BBE\u5907\u5BFC\u5165\u7EE7\u7EED\u3002</p><div class="row-actions">${Ae("\u5BFC\u51FA\u5B58\u6863","export","",!h&&!f)}${Ae("\u7D20\u6750\u4E0E\u5236\u4F5C\u8BF4\u660E","panel",'data-panel="sources"')}</div><label style="font-size:11px">\u5BFC\u5165\u5B58\u6863<input class="file-input" id="importSave" type="file" accept="application/json,.json"></label><h3>\u91CD\u65B0\u51FA\u53D1</h3><p>\u91CD\u65B0\u5F00\u59CB\u4F1A\u66FF\u6362\u672C\u7248\u5B58\u6863\uFF1B\u65E7\u7248\u6E38\u620F\u7684\u5B58\u6863\u4E0D\u4F1A\u53D7\u5F71\u54CD\u3002</p>${Ae("\u9009\u62E9\u5976\u4F34\u91CD\u65B0\u5F00\u59CB","confirmRestart","","","secondary danger")}<p>\u8BBE\u7F6E\u6253\u5F00\u671F\u95F4\uFF0C\u5BF9\u5C40\u6682\u505C\u3002</p>`);else if(E==="help")ue("\u5976\u5BB6\u53D1\u8D22\u6307\u5357","\u5148\u63B7\u4E00\u9897\u9AB0\u5B50\uFF0C\u518D\u6162\u6162\u5B66\u4F1A\u7ECF\u8425",'<ol class="rules"><li><b>\u51FA\u53D1\uFF1A</b>\u9009\u62E9\u5976\u4F34\u540E\u968F\u673A\u51B3\u5B9A\u5148\u624B\uFF0C\u6240\u6709\u4EBA\u5B8C\u6574\u884C\u52A8\u4E00\u6B21\u7B97\u4E00\u8F6E\u3002\u63B7\u9AB0\u79FB\u52A8\u3002\u7ECF\u8FC7\u8D77\u70B9\u9886 400 \u5976\u5E01\u3002\u6BCF\u4F4D\u5B58\u6D3B\u5976\u4F34\u884C\u52A8\u4E00\u6B21\u7B97\u4E00\u8F6E\u3002</li><li><b>\u7F6E\u4E1A\uFF1A</b>\u8E29\u5230\u7A7A\u5730\u53EF\u4E70\u5165\uFF0C\u5E76\u9009\u62E9\u4E03\u79CD\u5EFA\u7B51\u3002\u4F4F\u5B85\u3001\u65C5\u9986\u3001\u5546\u573A\u3001\u7814\u7A76\u6240\u6700\u9AD8\u4E94\u7EA7\uFF1B\u8FDE\u9501\u5E97\u3001\u52A0\u6CB9\u7AD9\u3001\u516C\u56ED\u53EA\u6709\u4E00\u7EA7\u3002\u666E\u901A\u5EFA\u8BBE\u987B\u505C\u5230\u81EA\u5BB6\u5730\u5757\uFF0C\u6BCF\u6B21\u52A0\u4E00\u5C42\uFF1B\u5DE5\u7A0B\u961F\u53EF\u8FDC\u7A0B\u52A0\u76D6\u3002\u53EA\u6709\u4F4F\u5B85\u53C2\u4E0E\u8857\u533A\u8054\u8425\u3002\u65C5\u9986\u5F3A\u5236\u5165\u4F4F\u3001\u5546\u573A\u62BD\u7B7E\u6D88\u8D39\u3001\u52A0\u6CB9\u7AD9\u6309\u884C\u7A0B\u548C\u4EA4\u901A\u5DE5\u5177\u6536\u8D39\u3001\u7814\u7A76\u6240\u4E09\u6B21\u51FA\u53D1\u4EA7\u5361\u3001\u516C\u56ED\u514D\u8D39\u9001\u70B9\u5238\u3002</li><li><b>\u7528\u5361\uFF1A</b>\u63B7\u9AB0\u524D\u6253\u5F00\u5361\u5305\u3002\u624B\u724C\u53EF\u8FDE\u7528\uFF0C\u79FB\u52A8\u5361\u987B\u5728\u63B7\u9AB0\u524D\u4F7F\u7528\uFF1B\u70B9\u5238\u6765\u81EA\u5730\u56FE\u62FE\u53D6\u548C\u5230\u7AD9\u5956\u52B1\u3002\u7528\u70B9\u5238\u4E70\u5361\uFF0C\u53EF\u63A7\u9AB0\u3001\u8DEF\u969C\u3001\u62C6\u5C42\u3001\u514D\u8D39\u52A0\u76D6\u6216\u6162\u884C\u3002\u62A2\u5730\u5361\u4EC5\u5BF9\u811A\u4E0B\u7684\u5BF9\u624B\u5730\u4EA7\u751F\u6548\uFF0C\u4ED8 125% \u6210\u672C\uFF1B\u62C6\u9664\u548C\u5DE5\u7A0B\u961F\u9650\u9644\u8FD1 8 \u683C\u3002</li><li><b>\u51FA\u884C\uFF1A</b>\u5546\u5E97\u8D2D\u4E70\u81EA\u884C\u8F66\u6216\u5C0F\u8F66\u540E\uFF0C\u53EF\u5728\u63B7\u9AB0\u6309\u94AE\u65C1\u9009\u62E9\u9AB0\u5B50\u6570\u91CF\u3002\u5C94\u8DEF\u81EA\u884C\u9009\u65B9\u5411\u3002</li><li><b>\u7ECF\u8425\uFF1A</b>\u7ECF\u8FC7\u94F6\u884C\u7684\u672C\u56DE\u5408\u53EF\u529E\u7406\u5B58\u53D6\u6B3E\u548C\u8D37\u6B3E\uFF1B\u94F6\u884C\u5468\u4E09\u4F11\u606F\uFF1B\u80A1\u7968\u5728\u81EA\u5DF1\u884C\u52A8\u524D\u540E\u53EF\u4EA4\u6613\uFF0C\u5468\u65E5\u4F11\u5E02\u3002\u5546\u5E97\u9700\u5230\u5E97\u8D2D\u4E70\u3002\u5B58\u6B3E\u6BCF\u8F6E\u8D5A 0.5%\uFF0C\u8D37\u6B3E\u6BCF\u8F6E\u8BA1\u606F 4%\u3002\u80A1\u7968\u4E5F\u4F1A\u56E0\u968F\u673A\u4E8B\u4EF6\u6DA8\u8DCC\u3002</li><li><b>\u795E\u7075\uFF1A</b>\u8D22\u8FD0\u589E\u52A0\u975E\u4EA4\u6613\u6536\u5165\uFF0C\u9709\u8FD0\u589E\u52A0\u652F\u51FA\uFF0C\u5B88\u62A4\u62B5\u6321\u4E00\u6B21\u8D1F\u9762\u4E8B\u4EF6\u3002\u6548\u679C\u4E92\u76F8\u66FF\u6362\uFF0C\u6301\u7EED 3 \u4E2A\u540E\u7EED\u56DE\u5408\u3002</li><li><b>\u5468\u8F6C\uFF1A</b>\u4ED8\u6B3E\u4E0D\u8DB3\u53EF\u53D6\u6B3E\u3001\u501F\u6B3E\u3001\u5356\u80A1\u7968\u6216\u53D8\u5356\u5730\u4EA7\uFF1B\u4E5F\u53EF\u7533\u8BF7\u7834\u4EA7\u9000\u51FA\u3002</li><li><b>\u80DC\u5229\uFF1A</b>\u575A\u6301\u5230\u6700\u540E\uFF0C\u6216\u5728\u8F6E\u6570\u7ED3\u675F\u65F6\u62E5\u6709\u6700\u591A\u51C0\u8D44\u4EA7\u3002\u624B\u673A\u6A2A\u5C4F\u4F53\u9A8C\u66F4\u5B8C\u6574\u3002</li></ol><p>\u5404\u4F4D\u89D2\u8272\u91C7\u7528\u540C\u4E00\u89C4\u5219\uFF0C\u7535\u8111\u4E5F\u9075\u5B88\u70B9\u5238\u3001\u7528\u5361\u548C\u5EFA\u8BBE\u9650\u5236\uFF0C\u5E76\u6839\u636E\u516C\u5F00\u5730\u5757\u8BC4\u4F30\u8DEF\u7EBF\u3002\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 3D \u65F6\u53EF\u4F7F\u7528\u7B80\u6D01\u5730\u56FE\u7EE7\u7EED\u73A9\u3002</p>');else if(E==="news")ue("\u5C9B\u4E0A\u6D88\u606F\u8BB0\u5F55","\u91CD\u8981\u6D88\u606F\u4F1A\u5728\u5730\u56FE\u4E2D\u592E\u9010\u6761\u51FA\u73B0",P.logs.slice(0,40).map(B=>`<div class="row"><small>\u7B2C ${B.round} \u8F6E</small><p>${e(B.text)}</p></div>`).join(""));else if(E==="pause")se(!0),te(),ue("\u4F11\u606F\u4E00\u4E0B\uFF0C\u5976\u4F34\u7B49\u4F60","\u5BF9\u5C40\u3001\u955C\u5934\u4E0E\u58F0\u97F3\u5DF2\u6682\u505C",`<p>\u5F53\u524D\u8FDB\u5EA6\u5DF2\u4FDD\u5B58\u5728\u672C\u673A\u3002\u51C6\u5907\u597D\u4E86\uFF0C\u518D\u7EE7\u7EED\u8FD9\u4E00\u8D9F\u53D1\u8D22\u4E4B\u65C5\u3002</p><div class="button-grid">${Ae("\u7EE7\u7EED\u6E38\u620F","resumeGame","",!1,"primary")}${Ae("\u5BFC\u51FA\u5B58\u6863","export","",!h&&!f)}</div><p class="pause-tip">\u5173\u95ED\u9762\u677F\u6216\u6309 Esc \u4E5F\u53EF\u4EE5\u7EE7\u7EED\u3002</p>`);else if(E==="share")ue("\u53EB\u4E0A\u670B\u53CB\uFF0C\u6765\u5C9B\u4E0A\u73A9","\u624B\u673A\u70B9\u5F00\u94FE\u63A5\u5373\u53EF\u5F00\u59CB",`<p>\u628A\u8FD9\u4E2A\u8BD5\u73A9\u94FE\u63A5\u53D1\u7ED9\u670B\u53CB\uFF0C\u65E0\u9700\u5B89\u88C5\u6216\u767B\u5F55\u6E38\u620F\u8D26\u53F7\u3002\u5EFA\u8BAE\u6A2A\u5C4F\u4F53\u9A8C\u3002</p><label for="shareUrl">\u8BD5\u73A9\u94FE\u63A5</label><input id="shareUrl" class="share-url" type="text" readonly value="${e(mm())}"><div class="row-actions">${Ae("\u590D\u5236\u94FE\u63A5","copyLink","",!1,"primary")}</div><p>\u5F53\u524D\u662F\u5355\u673A\u8BD5\u73A9\uFF1A\u6BCF\u4F4D\u670B\u53CB\u5728\u81EA\u5DF1\u7684\u624B\u673A\u4E0A\uFF0C\u4E0E\u7535\u8111\u5976\u4F34\u72EC\u7ACB\u5BF9\u5C40\uFF1B\u8FDB\u5EA6\u4FDD\u5B58\u5728\u5404\u81EA\u6D4F\u89C8\u5668\u3002</p>`);else if(E==="sources")ue("\u5976\u5BB6\u521B\u4F5C\u624B\u8D26","\u7D20\u6750\u6765\u6E90\u4E0E\u540E\u7EED\u8BA1\u5212",'<div class="panel-note">\u975E\u5B98\u65B9\u7C89\u4E1D\u6E38\u620F\u3002\u89D2\u8272\u6A21\u578B\u3001\u5730\u56FE\u3001\u5EFA\u7B51\u548C\u754C\u9762\u7531\u672C\u9879\u76EE\u5236\u4F5C\u3002\u914D\u4E50\u4E3A\u91CD\u65B0\u7F16\u6392\u7684\u5668\u4E50\u4E0E\u539F\u521B\u66F2\uFF1B\u7B11\u58F0\u4F7F\u7528\u793E\u533A\u5C0F\u6E38\u620F\u7684\u77ED\u7247\u6BB5\uFF0C\u5177\u4F53\u6765\u6E90\u89C1\u58F0\u97F3\u8BBE\u7F6E\u3002</div><div class="credit-list"><p>\u6587\u5316\u4E0E\u8868\u73B0\u53C2\u8003\uFF1A</p><ul class="rules"><li><a href="https://milkyfrog.com/games" target="_blank" rel="noopener">\u5976\u86D9\u5C0F\u6E38\u620F\u5408\u96C6</a></li><li><a href="https://naiwaxiaowu.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u7684\u5C0F\u7A9D</a>\uFF1A\u4E92\u52A8\u4E0E\u966A\u4F34\u8868\u73B0</li><li><a href="https://milkfrog-bath.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u7231\u6D17\u6FA1</a>\uFF1A\u60C5\u7EEA\u8868\u60C5</li><li><a href="https://nailong-dance.pages.dev/" target="_blank" rel="noopener">\u5976\u5A03\u8857\u821E</a>\uFF1A\u52A8\u6001\u8868\u73B0</li><li><a href="https://naiwanaichadian.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u5976\u8336\u94FA</a>\uFF1A\u7ECF\u8425\u573A\u666F</li><li><a href="https://www.douyin.com/video/7673579319512764654" target="_blank" rel="noopener">\u6296\u97F3\u5976\u5E01\u4E0E\u91CE\u751F\u72D7\u5976\u4E8C\u521B</a></li></ul></div><p>\u672C\u7248\u4E3A\u539F\u521B\u98CE\u683C\u5316\u8F7B\u91CF\u6A21\u578B\u3002\u5976\u86D9\u3001\u5976\u9F20\u3001\u5976\u72D7\u53C2\u8003\u7528\u6237\u4E09\u89C6\u56FE\u53CA\u516C\u5F00\u89C6\u9891\uFF0C\u5976\u86CB\u548C\u5976\u8336\u53C2\u8003\u519C\u5E84\u89C6\u9891\uFF0C\u5976\u866B\u53C2\u8003\u6B64\u524D\u89C6\u9891\u56FE\u50CF\u3002\u6A21\u578B\u91C7\u7528\u8FDE\u7EED\u66F2\u9762\u3001\u7ED8\u5236\u8179\u8272\u4E0E\u5173\u8282\u52A8\u753B\uFF0C\u4E3A\u539F\u521B\u91CD\u5EFA\uFF0C\u672A\u63D0\u53D6\u89C6\u9891\u6E90\u6A21\u578B\u3002</p><p>\u672C\u7248\u5DF2\u652F\u6301\u516D\u540D\u89D2\u8272\u30012\u20146 \u4EBA\u3001\u6307\u5B9A\u7535\u8111\u4E0E\u968F\u673A\u9635\u5BB9\u3002\u540E\u7EED\u65B9\u5411\uFF1A\u8D26\u53F7\u4E0E\u4E91\u5B58\u6863\u3002\u672C\u7248\u4EC5\u5305\u542B\u672C\u673A\u5355\u673A\u3002</p><p>3D \u5F15\u64CE Three.js\uFF0CMIT \u8BB8\u53EF\u968F\u90E8\u7F72\u5305\u9644\u5E26\u3002</p>');else if(E==="confirmRestart")ue("\u51C6\u5907\u65B0\u7684\u65C5\u884C","\u65B0\u5C40\u6B63\u5F0F\u5F00\u59CB\u65F6\u66FF\u6362\u5B58\u6863",`<p>\u5148\u9009\u62E9\u5976\u4F34\u4E0E\u89C4\u5219\u3002\u5F53\u524D\u65C5\u884C\u4F1A\u4FDD\u7559\u5230\u65B0\u5C40\u6B63\u5F0F\u5F00\u59CB\uFF0C\u4E5F\u53EF\u4EE5\u5148\u5BFC\u51FA\u5907\u4EFD\u3002</p><div class="row-actions">${Ae("\u5BFC\u51FA\u5F53\u524D\u5B58\u6863","export","",!h&&!f)}${Ae("\u4FDD\u7559\u5F53\u524D\u65C5\u884C","cancel")}${Ae("\u91CD\u65B0\u9009\u62E9\u5976\u4F34","newGame","",!1,"primary")}</div>`,!0);else if(E==="confirmDemolish"){let B=P.ownership[I],Z=T[I];if(!B||B.player!==Y.id||!B.level){ge(!0);return}ue("\u62C6\u9664\u8FD9\u680B\u623F\u5C4B\uFF1F",Z.name,`<p>\u62C6\u9664 ${B.level} \u7EA7\u623F\u5C4B\uFF0C\u571F\u5730\u4ECD\u5F52\u4F60\u6240\u6709\u3002\u56DE\u6536\u6750\u6599\u83B7\u5F97 ${Math.floor((l.cost(Z,B.level,Je(B))-Z.price)*.25)} \u5976\u5E01\uFF1B\u79DF\u91D1\u6062\u590D\u4E3A\u7A7A\u5730\u6C34\u5E73\u3002</p><div class="row-actions">${Ae("\u4FDD\u7559\u623F\u5C4B","cancel")}${Ae("\u786E\u8BA4\u62C6\u9664","demolish",`data-id="${I}"`,!1,"secondary danger")}</div>`,!0)}else E==="confirmBankrupt"&&ue("\u786E\u8BA4\u7533\u8BF7\u7834\u4EA7\uFF1F","\u8FD9\u4F1A\u7ED3\u675F\u4F60\u672C\u5C40\u7684\u65C5\u884C",`<p>\u7CFB\u7EDF\u5C06\u6E05\u7B97\u4F60\u7684\u8D44\u4EA7\uFF0C\u5C3D\u53EF\u80FD\u652F\u4ED8\u672C\u6B21\u6B20\u6B3E\u3002\u4F60\u5C06\u9000\u51FA\u672C\u5C40\uFF0C\u7535\u8111\u5976\u4F34\u7EE7\u7EED\u6BD4\u8D5B\u3002</p><div class="row-actions">${Ae("\u518D\u60F3\u60F3\u529E\u6CD5","panel",'data-panel="debt"')}${Ae("\u786E\u8BA4\u7834\u4EA7\u9000\u51FA","bankrupt","","","secondary danger")}</div>`,!0)}function re(){let E=vs(l.s.options);return`<h3>\u5C0F\u5C9B\u97F3\u4E50\u53F0</h3><p id="audioStatus" role="status">${k.status()}</p><div class="setting-row"><span>\u80CC\u666F\u97F3\u4E50</span>${Ae(E.music?"\u64AD\u653E\u4E2D \xB7 \u5173\u95ED":"\u5DF2\u5173\u95ED \xB7 \u5F00\u542F","music")}</div><label class="setting-row">\u66F2\u76EE<select id="musicTrack">${Object.entries(zr).map(([I,P])=>`<option value="${I}" ${E.track===I?"selected":""}>${P.name}</option>`).join("")}</select></label>${[["musicVolume","\u97F3\u4E50\u97F3\u91CF"],["effectsVolume","\u52A8\u4F5C\u97F3\u6548"],["voiceVolume","\u5976\u86D9\u7B11\u58F0"]].map(([I,P])=>`<label class="volume-row"><span>${P}</span><input type="range" min="0" max="100" value="${Math.round(E[I]*100)}" data-volume="${I}" aria-label="${P}"><output>${Math.round(E[I]*100)}%</output></label>`).join("")}<div class="setting-row"><span>\u5976\u86D9\u7B11\u58F0</span><div class="row-actions">${Ae(E.voice?"\u5DF2\u5F00\u542F":"\u5DF2\u5173\u95ED","voice")}${Ae("\u8BD5\u542C\u7B11\u58F0","testVoice")}</div></div><details class="audio-credit"><summary>\u97F3\u4E50\u4E0E\u58F0\u97F3\u6765\u6E90</summary><p>\u300A\u5976\u5BB6\u6B22\u4E50\u9882\u300B\uFF1A\u53C2\u8003 <a href="https://www.bilibili.com/video/BV1Sv7p6bEJT/" target="_blank" rel="noopener">\u5976\u86D9\u76F8\u5173\u300A\u6B22\u4E50\u9882\u300B\u4E8C\u521B</a>\u9009\u66F2\uFF0C\u4F7F\u7528\u8D1D\u591A\u82AC\u516C\u7248\u65CB\u5F8B\u91CD\u65B0\u7F16\u6392\u5668\u4E50\uFF0C\u975E\u89C6\u9891\u539F\u5F55\u97F3\u3002\u300A\u5976\u5BB6\u6F2B\u6E38\u300B\u53CA\u63B7\u9AB0\u3001\u91D1\u5E01\u3001\u811A\u6B65\u3001\u65BD\u5DE5\u97F3\u6548\u4E3A\u672C\u4F5C\u539F\u521B\u3002</p><p>\u7B11\u58F0\uFF1A<a href="https://naiwaxiaowu.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u7684\u5C0F\u7A9D</a> laugh.wav \u7684 1.05 \u79D2\u7247\u6BB5\uFF0C\u5DF2\u88C1\u5207\u4E0E\u6DE1\u5165\u6DE1\u51FA\uFF1B\u672A\u58F0\u79F0\u8BE5\u5F55\u97F3\u4E3A\u5F00\u653E\u8BB8\u53EF\u7D20\u6750\u3002\u5C55\u793A\u5B57\u4F53\uFF1A\u7AD9\u9177\u5FEB\u4E50\u4F53\uFF08OFL\uFF09\u3002</p></details>`}n("sheetBody").addEventListener("change",E=>{if(g?.type==="advanced"){we();return}E.target.id==="stockWindow"&&(r=+E.target.value,j("stocks"))}),n("sheetBody").addEventListener("input",E=>{if(g?.type==="advanced"){we();return}if(E.target.id==="bankAmount"){c.amount=E.target.value,nd(l,c.kind);return}if(E.target.dataset.stockQty!==void 0){Dc(l,+E.target.dataset.stockQty);return}let I=E.target.dataset.volume;I&&(l.s.options[I]=+E.target.value/100,E.target.nextElementSibling.textContent=E.target.value+"%",W(),te())});function se(E){R=E,oe(),d&&(d.paused=E||!!d.contextLost,E&&d.renderStill()),k.visibility(E||document.hidden),W(),n("app").classList.toggle("is-paused",E),n("pauseBtn").setAttribute("aria-pressed",String(E))}function ve(){if(g){let{type:E,id:I}=g,P=n("sheetBody").scrollTop;j(E,I),queueMicrotask(()=>{n("sheetBody").scrollTop=P})}}function de(){let E=Sm(l,h,f);if(!E)return;let I=new Blob([JSON.stringify(E,null,2)],{type:"application/json"}),P=URL.createObjectURL(I),Y=document.createElement("a");Y.href=P,Y.download=`\u5976\u86D9\u5927\u5BCC\u7FC1-\u7B2C${E.round}\u8F6E.json`,Y.click(),setTimeout(()=>URL.revokeObjectURL(P),1e3),H("\u5DF2\u5BFC\u51FA\u65C5\u884C\u5B58\u6863\u3002")}function ye(){if(h){if(l.s.phase==="finished"){j("finished");return}l.player.human&&l.s.phase!=="departure"&&(l.s.phase==="roll"?(d?.followPlayer(),ae(l.roll())):l.s.phase==="end"?ae(l.end()):j(l.s.phase))}}function He(){let E=+n("roundSelect").value,I=+n("playerCountSelect").value,P=E*(I*.19+.1);n("durationHint").textContent=E===20?"\u8BD5\u73A9\u5C40\uFF1A\u9002\u5408\u719F\u6089\u64CD\u4F5C\uFF1B\u5B8C\u6574\u7ECF\u8425\u5EFA\u8BAE 50 \u8F6E\u3002":`\u7EA6 ${Math.round(P*.8)}\u2014${Math.round(P*1.25)} \u5206\u949F\uFF0C\u4F9D\u64CD\u4F5C\u548C\u52A8\u753B\u901F\u5EA6\u53D8\u5316\u3002`}n("talentsEnabled").addEventListener("change",We),n("roundSelect").addEventListener("change",He),n("playerCountSelect").addEventListener("change",He),He(),n("startBtn").addEventListener("click",he),n("continueBtn").addEventListener("click",Oe),n("characterPicker").addEventListener("click",E=>{let I=E.target.closest("[data-character]");I&&(u=I.dataset.character,We(),O())}),n("actionBtn").addEventListener("click",ye),n("soundBtn").addEventListener("click",()=>{z(),l.s.options.sound=!l.s.options.sound,ae(),H(l.s.options.sound?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED")}),n("mapSelect").addEventListener("change",E=>{if(!h){i.mapVersion=+E.target.value==1?1:2;try{localStorage.setItem("naiwa-setup-v1",JSON.stringify(i))}catch{}We(),J(),O()}}),n("advancedBtn").addEventListener("click",()=>{s=null,j("advanced")}),n("difficultyBtn").addEventListener("click",()=>{v||j("mapGuide")}),n("difficultySelect").addEventListener("change",()=>{n("difficultyHint").textContent=Hn[n("difficultySelect").value].description}),n("talentBtn").addEventListener("click",()=>{v||j("talents")});let Ge=new Lc(n("app"),n("orientationBtn"),{notify:H,resize:()=>d?.resize()});n("newsHistoryBtn").addEventListener("click",()=>{h&&!v&&j("news")}),n("pauseBtn").addEventListener("click",()=>{!v&&h?j("pause"):H("\u5148\u5B8C\u6210\u5F53\u524D\u9009\u62E9\uFF0C\u5373\u53EF\u6682\u505C\u3002")}),n("shareBtn").addEventListener("click",()=>{v?H("\u5148\u5B8C\u6210\u5F53\u524D\u9009\u62E9\uFF0C\u518D\u5206\u4EAB\u94FE\u63A5\u3002"):j("share")}),n("helpBtn").addEventListener("click",()=>{v||j("help")}),n("settingsBtn").addEventListener("click",()=>{v||j("settings")}),n("saveBtn").addEventListener("click",de),n("homeBtn").addEventListener("click",()=>{d?.leaveStudio(),n("app").classList.remove("is-studio"),d?.home(),n("studioPanel").hidden=!0,n("startScreen").hidden=h,J()}),n("followBtn").addEventListener("click",()=>{d&&(d.follow?d.follow=!1:d.followPlayer(),J(),H(d.follow?"\u8DDF\u968F\u5F53\u524D\u5976\u4F34":"\u81EA\u7531\u63A2\u7D22\u5C0F\u5C9B"))}),n("qualityBtn").addEventListener("click",()=>{l.s.options.quality=l.s.options.quality==="low"?"auto":"low",ae()}),n("castBtn").addEventListener("click",()=>{v||!d||d.contextLost||(d.enterStudio(h?l.player.character:u),n("app").classList.add("is-studio"),n("studioPanel").hidden=!1,n("miniMap").hidden=!0,n("startScreen").hidden=!0,n("actionBtn").disabled=!0,document.querySelectorAll(".dock-tabs button").forEach(E=>E.disabled=!0))}),n("closeStudio").addEventListener("click",()=>{d?.leaveStudio(),n("app").classList.remove("is-studio"),n("studioPanel").hidden=!0,n("startScreen").hidden=h,J()}),n("studioPanel").addEventListener("click",E=>{let I=E.target.closest("[data-studio-char]"),P=E.target.closest("[data-studio-mode]"),Y=E.target.closest("[data-studio-view]");I&&d?.enterStudio(I.dataset.studioChar),P&&d?.studio&&(d.studio.mode=P.dataset.studioMode),Y&&d?.studio&&(d.studio.yaw=.45+{front:0,side:Math.PI/2,back:Math.PI}[Y.dataset.studioView],d.studio.manual=!0)}),n("diceCount").addEventListener("change",E=>{l.s.phase==="roll"&&l.player.human&&(l.player.diceCount=+E.target.value,ae())}),document.querySelectorAll("[data-panel]").forEach(E=>E.addEventListener("click",()=>j(E.dataset.panel))),n("fallback").addEventListener("click",E=>{let I=E.target.closest("[data-tile]");I&&!v&&j("tile",+I.dataset.tile)}),n("closeSheet").addEventListener("click",()=>{ge(),J()}),n("sheetBackdrop").addEventListener("click",()=>{ge(),J()}),document.addEventListener("keydown",E=>{if(E.key==="Escape"&&(ge(),J()),E.key==="Tab"&&!n("sheet").hidden){let I=[...n("sheet").querySelectorAll("button:not([disabled]),input,select,a[href]")].filter(ie=>!ie.hidden&&ie.getClientRects().length);if(!I.length)return;let P=I[0],Y=I.at(-1);E.shiftKey&&document.activeElement===P?(E.preventDefault(),Y.focus()):!E.shiftKey&&document.activeElement===Y&&(E.preventDefault(),P.focus())}}),n("sheetBody").addEventListener("change",async E=>{if(E.target.id==="musicTrack"&&(l.s.options.track=E.target.value,W(),te()),E.target.id==="speedSelect"&&(l.s.options.speed=+E.target.value,te()),E.target.id==="lightingSelect"&&(l.s.options.lighting=kn(E.target.value),ae()),E.target.id==="qualitySelect"&&(l.s.options.quality=E.target.value,ae()),E.target.id==="importSave"){let I=E.target.files[0];if(!I)return;if(I.size>1e6){H("\u5B58\u6863\u6587\u4EF6\u8FC7\u5927\uFF0C\u8BF7\u9009\u62E9\u672C\u6E38\u620F\u5BFC\u51FA\u7684 JSON\u3002");return}let P=Gn.restore(await I.text());if(!P){H("\u5B58\u6863\u4E0D\u5B8C\u6574\u6216\u7248\u672C\u4E0D\u517C\u5BB9\uFF0C\u5F53\u524D\u8FDB\u5EA6\u672A\u4FEE\u6539\u3002");return}C=P,ue("\u4F7F\u7528\u8FD9\u4E2A\u65C5\u884C\u5B58\u6863\uFF1F",`\u7B2C ${P.s.round} / ${P.s.maxRounds} \u8F6E`,`<p>\u4F1A\u66FF\u6362\u5F53\u524D\u8FDB\u5EA6\u3002\u5BFC\u5165\u524D\u53EF\u4EE5\u5148\u5BFC\u51FA\u5907\u4EFD\u3002</p><div class="row-actions">${Ae("\u5BFC\u51FA\u5F53\u524D\u5B58\u6863","export","",!h&&!f)}${Ae("\u53D6\u6D88\u5BFC\u5165","cancel")}${Ae("\u786E\u8BA4\u5BFC\u5165","import","",!1,"primary")}</div>`,!0)}});let C=null;n("sheetBody").addEventListener("click",E=>{let I=E.target.closest("[data-act]");if(!I||I.disabled)return;let{act:P}=I.dataset,Y=+I.dataset.id,ie=+I.dataset.index,_e=+I.dataset.target,B=!0;if(P==="cardStep"){let Z=n("sheetBody").querySelector('[data-card-step="'+I.dataset.steps+'"]');Z?.scrollIntoView({block:"start",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),Z?.querySelector("h3")?.focus({preventScroll:!0});return}if(P==="locateDeed"){d?.focusLot(Y),j("tile",Y);return}if(P==="bankKind"){c.kind=I.dataset.kind,ve();return}if(P==="bankQty"){c.amount=String(I.dataset.amount==="max"?td(l,c.kind):I.dataset.amount),n("bankAmount").value=c.amount,nd(l,c.kind);return}if(P==="applyAdvanced"){if(we(),ps(s,u,+n("playerCountSelect").value))return;i=Xs(s),s=null;try{localStorage.setItem("naiwa-setup-v1",JSON.stringify(i))}catch{}ge(!0),We(),J(),H("\u9AD8\u7EA7\u8BBE\u7F6E\u5DF2\u4FDD\u5B58\uFF0C\u65B0\u5C40\u6309\u6240\u9009\u9635\u5BB9\u5F00\u59CB\u3002");return}if(P==="resetAdvanced"){s=Xs(),j("advanced");return}if(P==="allRandom"){we(),s.opponents=[],j("advanced");return}if(P==="chooseBuilding"){j("buildHere",Y);return}if(P==="stockFilter"){a=!a,j("stocks");return}if(P==="stockQty"){let Z=n("qty"+Y),Me=l.position(Y,l.s.players[0]);Z.value=I.dataset.qty==="maxBuy"?Math.min(1e4,Math.floor(l.s.players[0].money/Me.price)):I.dataset.qty==="maxSell"?Math.min(1e4,Me.qty):I.dataset.qty,Dc(l,Y);return}if(P==="resumeGame"){ge(!0),J();return}if(P==="copyLink"){navigator.clipboard?.writeText(n("shareUrl").value).then(()=>H("\u8BD5\u73A9\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5C31\u80FD\u73A9\u3002")).catch(()=>{n("shareUrl").select(),H("\u8BF7\u957F\u6309\u94FE\u63A5\u590D\u5236\u3002")}),navigator.clipboard||(n("shareUrl").select(),H("\u8BF7\u957F\u6309\u94FE\u63A5\u590D\u5236\u3002"));return}if(P==="panel"){j(I.dataset.panel);return}if(P==="card"){let Z=l.player.cards[ie],Me=l.cardHint(Z);if(Me){H(Me),j("cards");return}Ft[Z].target==="self"?(B=l.card(ie),B?(ge(!0),ae()):ae(!1)):j("cardTarget",ie);return}if(P==="useCard"){let Z=l.cardHint(l.player.cards[ie]);if(Z){H(Z),j("cards");return}B=l.card(ie,_e),B?(ge(!0),ae()):ae(!1);return}if(P==="construct")B=l.construct(Y,I.dataset.type);else if(P==="research")B=l.setResearch(Y,I.dataset.key);else if(P==="upgrade")B=l.upgrade(Y);else if(P==="sell")B=l.sell(Y);else if(P==="demolish")B=l.demolish(Y),B&&ge(!0);else if(P==="confirmDemolish"){j("confirmDemolish",Y);return}else if(P==="bank")B=l.bank(I.dataset.kind,+n("bankAmount").value);else if(P==="trade")B=l.trade(Y,+n("qty"+Y).value*+I.dataset.sign);else if(P==="shop")B=l.shop(I.dataset.key);else if(P==="vehicle")B=l.vehicle(Y);else if(P==="estatePay"||P==="estateBuy")B=l.resolveEstate(P==="estateBuy"),(B||l.s.phase==="debt")&&ge(!0);else if(P==="buy"||P==="pass")B=l.buy(P==="buy"),B&&ge(!0);else if(P==="branch")B=l.step(Y),B&&ge(!0);else if(P==="ack")B=l.acknowledge(),B&&ge(!0);else if(P==="settle")B=l.settle(),B&&ge(!0);else if(P==="bankrupt")B=l.bankrupt(),B&&ge(!0);else if(P==="confirmBankrupt"){j("confirmBankrupt");return}else if(P==="sound")z(),l.s.options.sound=!l.s.options.sound;else if(P==="music")l.s.options.music=!vs(l.s.options).music;else if(P==="voice")l.s.options.voice=!vs(l.s.options).voice;else if(P==="testVoice"){z().then(()=>O("laugh"));return}else if(P==="export"){de();return}else if(P==="confirmRestart"){j("confirmRestart");return}else if(P==="newGame"){h&&(f=Gn.restore(l.s)),h=!1,ge(!0),n("startScreen").hidden=!1,We(),J();return}else if(P==="cancel"){ge(!0),J();return}else if(P==="viewBoard"){ge(!0),m=`finished:${l.s.current}:${l.s.round}:${l.player.pos}`,J();return}else if(P==="import"){if(!C)return;l=C,C=null,h=!0,d?.followPlayer(),ge(!0),m="",n("startScreen").hidden=!0,ae(),H("\u5B58\u6863\u5DF2\u5BFC\u5165\u3002");return}B?(["construct","upgrade","demolish","sell"].includes(P)&&d?.focusLot(Y),ae(),g?.type==="buildHere"&&["upgrade","construct"].includes(P)&&ge(!0),g&&!["buy","estate","event","branch","finished","debt","confirmBankrupt"].includes(g.type)?ve():g?.type==="debt"&&j("debt")):ae(!1)});function b(){if(clearTimeout(y),y=setTimeout(b,90),!h||document.hidden||R||d?.studio||l.s.phase==="finished"||g)return;let E=l.s,I=E.phase,P=E.logs[0],Y=E.current,ie=d&&!d.contextLost;if(!D.ready({news:M.busy,moving:!!ie&&d.isMoving(),effects:!!ie&&!!d.fx.items.length}))return;let _e=!1;!l.player.alive&&I==="end"?_e=l.end():l.player.human?I==="departure"?_e=l.roll():I==="moving"&&(_e=l.step()):_e=l.ai(),_e=_e||E.phase!==I||E.logs[0]!==P||E.current!==Y,_e&&(D.after(I,E.options.speed),te(),J())}document.addEventListener("visibilitychange",()=>{oe(),k.visibility(document.hidden||R),document.hidden?te():J()}),window.addEventListener("pagehide",te),We(),J(),b();let G=wc("naiwa");G&&(document.querySelector(".brand img").src=G),!window.__NAIWA_PORTABLE__&&"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register(globalThis.__NAIWA_SERVICE_WORKER_URL__||"./sw.js?v=16").catch(()=>{}),globalThis.__NAIWA_BOOT__?.set(75,"\u6B63\u5728\u8F7D\u5165\u5B57\u4F53\u3001\u56FE\u6807\u4E0E\u58F0\u97F3\u2026"),await p0(),d?.renderStill(),await eo(),globalThis.__NAIWA_BOOT__?.set(100,"\u51C6\u5907\u5B8C\u6210\uFF0C\u6B22\u8FCE\u6765\u5230\u5976\u5BB6\uFF01"),await eo(),globalThis.__NAIWA_BOOT__?.ready(),d&&!d.contextLost&&n("loadingScreen").hidden&&(d.paused=R)}db().catch(n=>{console.error("Game startup failed",n),globalThis.__NAIWA_BOOT__?.fail()});})();
