(()=>{var Ht={residence:{name:"\u666E\u901A\u4F4F\u5B85",max:5,cost:1,architecture:"residence",text:"\u9010\u5C42\u52A0\u76D6\uFF0C\u5411\u5BF9\u624B\u6536\u79DF\uFF1B\u540C\u8857\u533A\u4F4F\u5B85\u53C2\u4E0E\u8054\u8425\u52A0\u6536\u3002"},chain:{name:"\u8FDE\u9501\u4FBF\u5229\u5E97",max:1,cost:1.2,architecture:"tea",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF1B\u540C\u4E00\u4E1A\u4E3B\u6BCF\u591A\u4E00\u95F4\u8FDE\u9501\u5E97\uFF0C\u6240\u6709\u5206\u5E97\u7EDF\u4E00\u63D0\u9AD8\u6536\u8D39\uFF0C\u4E0A\u9650400\u3002\u4E0D\u53C2\u4E0E\u8857\u533A\u8054\u8425\u3002"},hotel:{name:"\u5976\u5BB6\u65C5\u9986",max:5,cost:1.4,architecture:"hotel",text:"\u5BF9\u624B\u5165\u4F4F1\u20143\u56DE\u5408\uFF0C\u6309\u5929\u6536\u4F4F\u5BBF\u8D39\u5E76\u6682\u505C\u884C\u52A8\uFF1B\u514D\u79DF\u5361\u53EF\u62B5\u6D88\u672C\u6B21\u5165\u4F4F\u3002"},mall:{name:"\u8D2D\u7269\u4E2D\u5FC3",max:5,cost:1.35,architecture:"mall",text:"\u5BF9\u624B\u8D2D\u7269\u62BD\u7B7E\uFF0C\u630975%\u3001100%\u6216150%\u6D88\u8D39\u500D\u7387\u6536\u8D39\uFF1B\u697C\u5C42\u8D8A\u9AD8\uFF0C\u6D88\u8D39\u57FA\u6570\u8D8A\u9AD8\u3002"},gas:{name:"\u5976\u7F50\u52A0\u6CB9\u7AD9",max:1,cost:.9,architecture:"gas",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF1B\u6309\u672C\u6B21\u884C\u8FDB\u6B65\u6570\u4E0E\u4EA4\u901A\u5DE5\u5177\u7B49\u7EA7\u6536\u52A0\u6CB9\u8D39\uFF0C\u8F66\u8F86\u8D8A\u9AD8\u7EA7\u6536\u8D39\u8D8A\u9AD8\u3002"},research:{name:"\u5976\u5BB6\u7814\u7A76\u6240",max:5,cost:1.2,architecture:"research",text:"\u4E0D\u6536\u8FC7\u8DEF\u8D39\uFF1B\u4E1A\u4E3B\u6BCF\u51FA\u53D1\u4E09\u6B21\u4EA7\u51FA\u6240\u9009\u9053\u5177\u5361\u3002\u5347\u7EA7\u89E3\u9501\u66F4\u591A\u7814\u53D1\u9879\u76EE\uFF0C\u5230\u8BBF\u53EF\u66F4\u6362\u9879\u76EE\u3002"},park:{name:"\u6EE8\u6CB3\u516C\u56ED",max:1,cost:.45,architecture:"garden",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF0C\u4E0D\u6536\u4EFB\u4F55\u8D39\u7528\uFF1B\u6240\u6709\u505C\u9760\u8005\u83B7\u5F9710\u70B9\u5238\uFF0C\u9002\u5408\u8F7B\u677E\u516C\u76CA\u73A9\u6CD5\u3002"}},lt=i=>i?.buildingType||"residence",di=i=>Ht[lt(i)]?.max||5,as=i=>["dice","shield","demolish","build","steal"].slice(0,i);function Fd(i){let e=i.player;if(e.businessReady)return!1;e.businessReady=!0;let t=!1;for(let n of i.owned(e)){if(lt(n)!=="research"||!n.level)continue;let s=i.s.ownership[n.tile.id];if(s.researchProgress=(s.researchProgress||0)+1,t=!0,s.researchProgress>=3){s.researchProgress=0;let r=as(s.level),a=r.includes(s.researchCard)?s.researchCard:r[0];i.log(`${i.char(e).name}\u7684\u300C${n.tile.name}\u300D\u7814\u7A76\u5B8C\u6210\u3002`),i.giveCard(e,a)}}return t}function bh(i){i.level===0?(i.buildingType="residence",delete i.researchCard,delete i.researchProgress):lt(i)==="research"&&!as(i.level).includes(i.researchCard)&&(i.researchCard=as(i.level)[0])}function wo(i,e){let t=i.s.ownership[e],n=lt(t),s=i.baseRent(e,t.level);return t.level&&n==="hotel"?[1,2,3].map(r=>({amount:Math.round(s*.65)*r,skip:r,suffix:`\u4F4F\u5BBF${r}\u56DE\u5408\u8D39\u7528`,label:`${r}\u56DE\u5408`})):t.level&&n==="mall"?[.75,1,1.5].map(r=>({amount:Math.round(s*r),skip:0,suffix:`\u8D2D\u7269\u6D88\u8D39\uFF08${r*100}%\uFF09`,label:`${r*100}%`})):[{amount:i.rent(e),skip:0,suffix:t.level&&n==="gas"?"\u52A0\u6CB9\u8D39":"\u79DF\u91D1",label:"\u672C\u6B21"}]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Il="180";var yf=0,lu=1,_f=2;var cu=1,Dl=2,Si=3,Gi=0,Xt=1,Pt=2,$t=0,zs=1,Ja=2,hu=3,uu=4,Ll=5,Un=100,Mf=101,bf=102,Sf=103,Ef=104,Js=200,wf=201,Tf=202,Af=203,el=204,tl=205,ja=206,Rf=207,Ka=208,Cf=209,Pf=210,If=211,Df=212,Lf=213,Uf=214,Ul=0,Nl=1,Fl=2,Hs=3,Bl=4,kl=5,Ol=6,zl=7,du=0,Nf=1,Ff=2,Zi=0,Hl=1,Vl=2,Gl=3,Ei=4,$l=5,Wl=6,Xl=7;var fu=300,js=301,Ks=302,ql=303,Yl=304,Qa=306,Wn=1e3,fs=1001,nl=1002,nn=1003,Bf=1004;var eo=1005;var Nn=1006,Zl=1007;var wi=1008;var zn=1009,pu=1010,mu=1011,Wr=1012,Jl=1013,xs=1014,ri=1015,bn=1016,jl=1017,Kl=1018,ys=1020,gu=35902,vu=35899,xu=1021,yu=1022,Rn=1023,Lr=1026,_s=1027,Ql=1028,ec=1029,_u=1030,tc=1031;var nc=1033,to=33776,no=33777,io=33778,so=33779,ic=35840,sc=35841,rc=35842,ac=35843,oc=36196,lc=37492,cc=37496,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,vc=37815,xc=37816,yc=37817,_c=37818,Mc=37819,bc=37820,Sc=37821,Ec=36492,wc=36494,Tc=36495,Ac=36283,Rc=36284,Cc=36285,Pc=36286;var Sa=2300,il=2301,Qo=2302,jh=2400,Kh=2401,Qh=2402;var kf=3200,Of=3201;var Ic=0,zf=1,Ji="",Ut="srgb",Vs="srgb-linear",Ea="linear",pt="srgb";var Os=7680;var eu=519,Hf=512,Vf=513,Gf=514,Mu=515,$f=516,Wf=517,Xf=518,qf=519,sl=35044;var bu="300 es",Qn=2e3,wa=2001;var $i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=1234567,ya=Math.PI/180,Ur=180/Math.PI;function pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Su(i,e){return(i%e+e)%e}function S0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function E0(i,e,t){return i!==e?(t-i)/(e-i):0}function _a(i,e,t){return(1-t)*i+t*e}function w0(i,e,t,n){return _a(i,e,1-Math.exp(-t*n))}function T0(i,e=1){return e-Math.abs(Su(i,e*2)-e)}function A0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function R0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function C0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function P0(i,e){return i+Math.random()*(e-i)}function I0(i){return i*(.5-Math.random())}function D0(i){i!==void 0&&(Bd=i);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L0(i){return i*ya}function U0(i){return i*Ur}function N0(i){return(i&i-1)===0&&i!==0}function F0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function B0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function k0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var St={DEG2RAD:ya,RAD2DEG:Ur,generateUUID:pi,clamp:it,euclideanModulo:Su,mapLinear:S0,inverseLerp:E0,lerp:_a,damp:w0,pingpong:T0,smoothstep:A0,smootherstep:R0,randInt:C0,randFloat:P0,randFloatSpread:I0,seededRandom:D0,degToRad:L0,radToDeg:U0,isPowerOfTwo:N0,ceilPowerOfTwo:F0,floorPowerOfTwo:B0,setQuaternionFromProperEuler:k0,normalize:vt,denormalize:Kn},j=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let A=Math.sqrt(y),w=Math.atan2(A,p*x);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let _=o*x;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sh=new T,kd=new hn,Je=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],y=s[4],_=s[7],A=s[2],w=s[5],P=s[8];return r[0]=a*v+o*x+l*A,r[3]=a*m+o*y+l*w,r[6]=a*p+o*_+l*P,r[1]=c*v+h*x+u*A,r[4]=c*m+h*y+u*w,r[7]=c*p+h*_+u*P,r[2]=f*v+d*x+g*A,r[5]=f*m+d*y+g*w,r[8]=f*p+d*_+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Eh.makeScale(e,t)),this}rotate(e){return this.premultiply(Eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Eh=new Je;function Eu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yf(){let i=Ta("canvas");return i.style.display="block",i}var Od={};function Nr(i){i in Od||(Od[i]=!0,console.warn(i))}function Zf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var zd=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O0(){let i={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?Ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vs]:{primaries:e,whitePoint:n,transfer:Ea,toXYZ:zd,fromXYZ:Hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:zd,fromXYZ:Hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}var ht=O0();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mr,rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mr===void 0&&(mr=Ta("canvas")),mr.width=e.width,mr.height=e.height;let s=mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ta("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},z0=0,Fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wh(s[a].image)):r.push(wh(s[a]))}else r=wh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var H0=0,Th=new T,_n=class i extends $i{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fs,s=fs,r=Nn,a=wi,o=Rn,l=zn,c=i.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=pi(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case fs:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case fs:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=fu;_n.DEFAULT_ANISOTROPY=1;var xt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(d+1)/2,A=(p+1)/2,w=(h+f)/4,P=(u+v)/4,I=(g+m)/4;return y>_&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=P/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=I/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends $i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new _n(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Aa=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ol=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(r,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Ao.subVectors(this.max,oa),gr.subVectors(e.a,oa),vr.subVectors(e.b,oa),xr.subVectors(e.c,oa),os.subVectors(vr,gr),ls.subVectors(xr,vr),Ns.subVectors(gr,xr);let t=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Ns.z,Ns.y,os.z,0,-os.x,ls.z,0,-ls.x,Ns.z,0,-Ns.x,-os.y,os.x,0,-ls.y,ls.x,0,-Ns.y,Ns.x,0];return!Ah(t,gr,vr,xr,Ao)||(t=[1,0,0,0,1,0,0,0,1],!Ah(t,gr,vr,xr,Ao))?!1:(Ro.crossVectors(os,ls),t=[Ro.x,Ro.y,Ro.z],Ah(t,gr,vr,xr,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fi=[new T,new T,new T,new T,new T,new T,new T,new T],Zn=new T,To=new Ft,gr=new T,vr=new T,xr=new T,os=new T,ls=new T,Ns=new T,oa=new T,Ao=new T,Ro=new T,Fs=new T;function Ah(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fs.fromArray(i,r);let o=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var V0=new Ft,la=new T,Rh=new T,Wi=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):V0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(la,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Rh)),this.expandByPoint(la.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bi=new T,Ch=new T,Co=new T,cs=new T,Ph=new T,Po=new T,Ih=new T,Br=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ch.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(Ch);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Co),o=cs.dot(this.direction),l=-cs.dot(Co),c=cs.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ch).addScaledVector(Co,f),d}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);let n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,n,s,r){Ph.subVectors(t,e),Po.subVectors(n,e),Ih.crossVectors(Ph,Po);let a=this.direction.dot(Ih),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cs.subVectors(this.origin,e);let l=o*this.direction.dot(Po.crossVectors(cs,Po));if(l<0)return null;let c=o*this.direction.dot(Ph.cross(cs));if(c<0||l+c>a)return null;let h=-o*cs.dot(Ih);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/yr.setFromMatrixColumn(e,0).length(),r=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G0,e,$0)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),hs.crossVectors(n,Dn),hs.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),hs.crossVectors(n,Dn)),hs.normalize(),Io.crossVectors(Dn,hs),s[0]=hs.x,s[4]=Io.x,s[8]=Dn.x,s[1]=hs.y,s[5]=Io.y,s[9]=Dn.y,s[2]=hs.z,s[6]=Io.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],y=n[7],_=n[11],A=n[15],w=s[0],P=s[4],I=s[8],S=s[12],b=s[1],C=s[5],U=s[9],G=s[13],V=s[2],N=s[6],B=s[10],Z=s[14],W=s[3],te=s[7],le=s[11],oe=s[15];return r[0]=a*w+o*b+l*V+c*W,r[4]=a*P+o*C+l*N+c*te,r[8]=a*I+o*U+l*B+c*le,r[12]=a*S+o*G+l*Z+c*oe,r[1]=h*w+u*b+f*V+d*W,r[5]=h*P+u*C+f*N+d*te,r[9]=h*I+u*U+f*B+d*le,r[13]=h*S+u*G+f*Z+d*oe,r[2]=g*w+v*b+m*V+p*W,r[6]=g*P+v*C+m*N+p*te,r[10]=g*I+v*U+m*B+p*le,r[14]=g*S+v*G+m*Z+p*oe,r[3]=x*w+y*b+_*V+A*W,r[7]=x*P+y*C+_*N+A*te,r[11]=x*I+y*U+_*B+A*le,r[15]=x*S+y*G+_*Z+A*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+v*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,y=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,_=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,A=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,w=t*x+n*y+s*_+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return e[0]=x*P,e[1]=(v*f*r-u*m*r-v*s*d+n*m*d+u*s*p-n*f*p)*P,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*P,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*P,e[4]=y*P,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*P,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*P,e[8]=_*P,e[9]=(g*u*r-h*v*r-g*n*d+t*v*d+h*n*p-t*u*p)*P,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*P,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*P,e[12]=A*P,e[13]=(h*v*s-g*u*s+g*n*f-t*v*f-h*n*m+t*u*m)*P,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*P,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,x=l*c,y=l*h,_=l*u,A=n.x,w=n.y,P=n.z;return s[0]=(1-(v+p))*A,s[1]=(d+_)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(f+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+y)*P,s[9]=(m-x)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=yr.set(s[0],s[1],s[2]).length(),a=yr.set(s[4],s[5],s[6]).length(),o=yr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);let c=1/r,h=1/a,u=1/o;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Qn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Qn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===wa)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Qn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===wa)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yr=new T,Jn=new et,G0=new T(0,0,0),$0=new T(1,1,1),hs=new T,Io=new T,Dn=new T,Vd=new et,Gd=new hn,Fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},W0=0,$d=new T,_r=new hn,ki=new et,Do=new T,ca=new T,X0=new T,q0=new hn,Wd=new T(1,0,0),Xd=new T(0,1,0),qd=new T(0,0,1),Yd={type:"added"},Y0={type:"removed"},Mr={type:"childadded",child:null},Dh={type:"childremoved",child:null},Qt=class i extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new Fn,n=new hn,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Je}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(qd,e)}translateOnAxis(e,t){return $d.copy(e).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ca,Do,this.up):ki.lookAt(Do,ca,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(ki),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y0),Dh.child=e,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Qt.DEFAULT_UP=new T(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new T,Oi=new T,Lh=new T,zi=new T,br=new T,Sr=new T,Zd=new T,Uh=new T,Nh=new T,Fh=new T,Bh=new xt,kh=new xt,Oh=new xt,Hi=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jn.subVectors(s,t),Oi.subVectors(n,t),Lh.subVectors(e,t);let a=jn.dot(jn),o=jn.dot(Oi),l=jn.dot(Lh),c=Oi.dot(Oi),h=Oi.dot(Lh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Bh.setScalar(0),kh.setScalar(0),Oh.setScalar(0),Bh.fromBufferAttribute(e,t),kh.fromBufferAttribute(e,n),Oh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Bh,r.x),a.addScaledVector(kh,r.y),a.addScaledVector(Oh,r.z),a}static isFrontFacing(e,t,n,s){return jn.subVectors(n,t),Oi.subVectors(e,t),jn.cross(Oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),jn.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;br.subVectors(s,n),Sr.subVectors(r,n),Uh.subVectors(e,n);let l=br.dot(Uh),c=Sr.dot(Uh);if(l<=0&&c<=0)return t.copy(n);Nh.subVectors(e,s);let h=br.dot(Nh),u=Sr.dot(Nh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(br,a);Fh.subVectors(e,r);let d=br.dot(Fh),g=Sr.dot(Fh);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Sr,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Zd.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Zd,o);let p=1/(m+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(br,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function zh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Su(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zh(a,r,e+1/3),this.g=zh(a,r,e),this.b=zh(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=Jf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ht.workingToColorSpace(cn.copy(this),e),Math.round(it(cn.r*255,0,255))*65536+Math.round(it(cn.g*255,0,255))*256+Math.round(it(cn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Ut){ht.workingToColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Lo);let n=_a(us.h,Lo.h,t),s=_a(us.s,Lo.s,t),r=_a(us.l,Lo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new ye;ye.NAMES=Jf;var Z0=0,ei=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=zs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==tl&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vt=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new T,Uo=new j,J0=0,yn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}};var Ra=class extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ca=class extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ae=class extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}},j0=0,Gn=new et,Hh=new Qt,Er=new T,Ln=new Ft,ha=new Ft,Kt=new T,st=class i extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eu(e)?Ca:Ra)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Ln.min,ha.min),Ln.expandByPoint(Kt),Kt.addVectors(Ln.max,ha.max),Ln.expandByPoint(Kt)):(Ln.expandByPoint(ha.min),Ln.expandByPoint(ha.max))}Ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(Er.fromBufferAttribute(e,c),Kt.add(Er)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new T,l[I]=new T;let c=new T,h=new T,u=new T,f=new j,d=new j,g=new j,v=new T,m=new T;function p(I,S,b){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),o[I].add(v),o[S].add(v),o[b].add(v),l[I].add(m),l[S].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,S=x.length;I<S;++I){let b=x[I],C=b.start,U=b.count;for(let G=C,V=C+U;G<V;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let y=new T,_=new T,A=new T,w=new T;function P(I){A.fromBufferAttribute(s,I),w.copy(A);let S=o[I];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),_.crossVectors(w,S);let C=_.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,C)}for(let I=0,S=x.length;I<S;++I){let b=x[I],C=b.start,U=b.count;for(let G=C,V=C+U;G<V;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new yn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jd=new et,Bs=new Br,No=new Wi,jd=new T,Fo=new T,Bo=new T,ko=new T,Vh=new T,Oo=new T,Kd=new T,zo=new T,dt=class extends Qt{constructor(e=new st,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Vh.fromBufferAttribute(u,e),a?Oo.addScaledVector(Vh,h):Oo.addScaledVector(Vh.sub(t),h))}t.add(Oo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),Bs.copy(e.ray).recast(e.near),!(No.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(No,jd)===null||Bs.origin.distanceToSquared(jd)>(e.far-e.near)**2))&&(Jd.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(Jd),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,A=y;_<A;_+=3){let w=o.getX(_),P=o.getX(_+1),I=o.getX(_+2);s=Ho(this,p,e,n,c,h,u,w,P,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);s=Ho(this,a,e,n,c,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,A=y;_<A;_+=3){let w=_,P=_+1,I=_+2;s=Ho(this,p,e,n,c,h,u,w,P,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=m,y=m+1,_=m+2;s=Ho(this,a,e,n,c,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function K0(i,e,t,n,s,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Gi,o),l===null)return null;zo.copy(o),zo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zo);return c<t.near||c>t.far?null:{distance:c,point:zo.clone(),object:i}}function Ho(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Fo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,ko);let h=K0(i,e,t,n,Fo,Bo,ko,Kd);if(h){let u=new T;Hi.getBarycoord(Kd,Fo,Bo,ko,u),s&&(h.uv=Hi.getInterpolatedAttribute(s,o,l,c,u,new j)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,o,l,c,u,new j)),a&&(h.normal=Hi.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new T,materialIndex:0};Hi.getNormal(Fo,Bo,ko,f.normal),h.face=f,h.barycoord=u}return h}var mi=class i extends st{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function g(v,m,p,x,y,_,A,w,P,I,S){let b=_/P,C=A/I,U=_/2,G=A/2,V=w/2,N=P+1,B=I+1,Z=0,W=0,te=new T;for(let le=0;le<B;le++){let oe=le*C-G;for(let be=0;be<N;be++){let Ve=be*b-U;te[v]=Ve*x,te[m]=oe*y,te[p]=V,c.push(te.x,te.y,te.z),te[v]=0,te[m]=0,te[p]=w>0?1:-1,h.push(te.x,te.y,te.z),u.push(be/P),u.push(1-le/I),Z+=1}}for(let le=0;le<I;le++)for(let oe=0;oe<P;oe++){let be=f+oe+N*le,Ve=f+oe+N*(le+1),Qe=f+(oe+1)+N*(le+1),nt=f+(oe+1)+N*le;l.push(be,Ve,nt),l.push(Ve,Qe,nt),W+=6}o.addGroup(d,W,S),d+=W,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Qs(i[t]);for(let s in n)e[s]=n[s]}return e}function Q0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Sn={clone:Qs,merge:un},eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_t=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Q0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pa=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ds=new T,Qd=new j,ef=new j,xn=class extends Pa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,Qd,ef),t.subVectors(ef,Qd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ya*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wr=-90,Tr=1,ll=class extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(wr,Tr,e,t);s.layers=this.layers,this.add(s);let r=new xn(wr,Tr,e,t);r.layers=this.layers,this.add(r);let a=new xn(wr,Tr,e,t);a.layers=this.layers,this.add(a);let o=new xn(wr,Tr,e,t);o.layers=this.layers,this.add(o);let l=new xn(wr,Tr,e,t);l.layers=this.layers,this.add(l);let c=new xn(wr,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ia=class extends _n{constructor(e=[],t=js,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cl=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ia(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mi(5,5,5),r=new _t({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:$t});r.uniforms.tEquirect.value=t;let a=new dt(s,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Nn),new ll(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},me=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ng={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ng)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Gs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ti=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sl,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new T,Da=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ni=class extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ar,ua=new T,Rr=new T,Cr=new T,Pr=new j,da=new j,jf=new et,Vo=new T,fa=new T,Go=new T,tf=new j,Gh=new j,nf=new j,gi=class extends Qt{constructor(e=new ni){if(super(),this.isSprite=!0,this.type="Sprite",Ar===void 0){Ar=new st;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hl(t,5);Ar.setIndex([0,1,2,0,2,3]),Ar.setAttribute("position",new Da(n,3,0,!1)),Ar.setAttribute("uv",new Da(n,2,3,!1))}this.geometry=Ar,this.material=e,this.center=new j(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rr.setFromMatrixScale(this.matrixWorld),jf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rr.multiplyScalar(-Cr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;$o(Vo.set(-.5,-.5,0),Cr,a,Rr,s,r),$o(fa.set(.5,-.5,0),Cr,a,Rr,s,r),$o(Go.set(.5,.5,0),Cr,a,Rr,s,r),tf.set(0,0),Gh.set(1,0),nf.set(1,1);let o=e.ray.intersectTriangle(Vo,fa,Go,!1,ua);if(o===null&&($o(fa.set(-.5,.5,0),Cr,a,Rr,s,r),Gh.set(0,1),o=e.ray.intersectTriangle(Vo,Go,fa,!1,ua),o===null))return;let l=e.ray.origin.distanceTo(ua);l<e.near||l>e.far||t.push({distance:l,point:ua.clone(),uv:Hi.getInterpolation(ua,Vo,fa,Go,tf,Gh,nf,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $o(i,e,t,n,s,r){Pr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(da.x=r*Pr.x-s*Pr.y,da.y=s*Pr.x+r*Pr.y):da.copy(Pr),i.copy(e),i.x+=da.x,i.y+=da.y,i.applyMatrix4(jf)}var vi=class extends _n{constructor(e=null,t=1,n=1,s,r,a,o,l,c=nn,h=nn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var La=class extends yn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ir=new et,sf=new et,Wo=[],rf=new Ft,ig=new et,pa=new dt,ma=new Wi,$s=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new La(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ig)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),rf.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(rf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),ma.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ir),sf.multiplyMatrices(n,Ir),pa.matrixWorld=sf,pa.raycast(e,Wo);for(let a=0,o=Wo.length;a<o;a++){let l=Wo[a];l.instanceId=r,l.object=this,t.push(l)}Wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new La(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(s*this.count),s,this.count,Ql,ri));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$h=new T,sg=new T,rg=new Je,$n=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$h.subVectors(n,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($h),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rg.getNormalMatrix(e),s=this.coplanarPoint($h).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ks=new Wi,ag=new j(.5,.5),Xo=new T,zr=class{constructor(e=new $n,t=new $n,n=new $n,s=new $n,r=new $n,a=new $n){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],y=r[13],_=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,p-g,A-x).normalize(),s[1].setComponents(c+a,d+h,p+g,A+x).normalize(),s[2].setComponents(c+o,d+u,p+v,A+y).normalize(),s[3].setComponents(c-o,d-u,p-v,A-y).normalize(),n)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,d-f,p-m,A-_).normalize();else if(s[4].setComponents(c-l,d-f,p-m,A-_).normalize(),t===Qn)s[5].setComponents(c+l,d+f,p+m,A+_).normalize();else if(t===wa)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);let t=ag.distanceTo(e.center);return ks.radius=.7071067811865476+t,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xo.x=s.normal.x>0?e.max.x:e.min.x,Xo.y=s.normal.y>0?e.max.y:e.min.y,Xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xi=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ul=new T,dl=new T,af=new et,ga=new Br,qo=new Wi,Wh=new T,of=new T,Hr=class extends Qt{constructor(e=new st,t=new xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ul.fromBufferAttribute(t,s-1),dl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ul.distanceTo(dl);e.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;af.copy(s).invert(),ga.copy(e.ray).applyMatrix4(af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){let p=h.getX(v),x=h.getX(v+1),y=Yo(this,e,ga,l,p,x,v);y&&t.push(y)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(d),p=Yo(this,e,ga,l,v,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){let p=Yo(this,e,ga,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Yo(this,e,ga,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ul.fromBufferAttribute(o,s),dl.fromBufferAttribute(o,r),t.distanceSqToSegment(ul,dl,Wh,of)>n)return;Wh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Wh);if(!(c<e.near||c>e.far))return{distance:c,point:of.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var lf=new T,cf=new T,Ws=class extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)lf.fromBufferAttribute(t,s),cf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lf.distanceTo(cf);e.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ps=class extends _n{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xs=class extends _n{constructor(e,t,n=xs,s,r,a,o=nn,l=nn,c,h=Lr,u=1){if(h!==Lr&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ua=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var yi=class i extends st{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,v=[],m=n/2,p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(d,2));function x(){let _=new T,A=new T,w=0,P=(t-e)/n;for(let I=0;I<=r;I++){let S=[],b=I/r,C=b*(t-e)+e;for(let U=0;U<=s;U++){let G=U/s,V=G*l+o,N=Math.sin(V),B=Math.cos(V);A.x=C*N,A.y=-b*n+m,A.z=C*B,u.push(A.x,A.y,A.z),_.set(N,P,B).normalize(),f.push(_.x,_.y,_.z),d.push(G,1-b),S.push(g++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let b=v[S][I],C=v[S+1][I],U=v[S+1][I+1],G=v[S][I+1];(e>0||S!==0)&&(h.push(b,C,G),w+=3),(t>0||S!==r-1)&&(h.push(C,U,G),w+=3)}c.addGroup(p,w,0),p+=w}function y(_){let A=g,w=new j,P=new T,I=0,S=_===!0?e:t,b=_===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let C=g;for(let U=0;U<=s;U++){let V=U/s*l+o,N=Math.cos(V),B=Math.sin(V);P.x=S*B,P.y=m*b,P.z=S*N,u.push(P.x,P.y,P.z),f.push(0,b,0),w.x=N*.5+.5,w.y=B*.5*b+.5,d.push(w.x,w.y),g++}for(let U=0;U<s;U++){let G=A+U,V=C+U;_===!0?h.push(V,V+1,G):h.push(V+1,V,G),I+=3}c.addGroup(p,I,_===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xi=class i extends yi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new j:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,s=[],r=[],a=[],o=new T,l=new et;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(it(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(it(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vr=class extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new j){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fl=class extends Vr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Tu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Zo=new T,Xh=new Tu,qh=new Tu,Yh=new Tu,ms=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Zo.subVectors(s[0],s[1]).add(s[0]),c=Zo);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Xh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),qh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Yh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Xh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),qh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Yh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Xh.calc(l),qh.calc(l),Yh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function og(i,e){let t=1-i;return t*t*e}function lg(i,e){return 2*(1-i)*i*e}function cg(i,e){return i*i*e}function Ma(i,e,t,n){return og(i,e)+lg(i,t)+cg(i,n)}function hg(i,e){let t=1-i;return t*t*t*e}function ug(i,e){let t=1-i;return 3*t*t*i*e}function dg(i,e){return 3*(1-i)*i*i*e}function fg(i,e){return i*i*i*e}function ba(i,e,t,n,s){return hg(i,e)+ug(i,t)+dg(i,n)+fg(i,s)}var Na=class extends Bn{constructor(e=new j,t=new j,n=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new j){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ba(e,s.x,r.x,a.x,o.x),ba(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends Bn{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ba(e,s.x,r.x,a.x,o.x),ba(e,s.y,r.y,a.y,o.y),ba(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fa=class extends Bn{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Bn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends Bn{constructor(e=new j,t=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ma(e,s.x,r.x,a.x),Ma(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends Bn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ma(e,s.x,r.x,a.x),Ma(e,s.y,r.y,a.y),Ma(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_i=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(hf(o,l.x,c.x,h.x,u.x),hf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new j().fromArray(s))}return this}},gl=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:ms,CubicBezierCurve:Na,CubicBezierCurve3:pl,EllipseCurve:Vr,LineCurve:Fa,LineCurve3:ml,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:ka,SplineCurve:_i}),vl=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new gl[s.type]().fromJSON(s))}return this}},Oa=class extends vl{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Fa(this.currentPoint.clone(),new j(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ba(this.currentPoint.clone(),new j(e,t),new j(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Na(this.currentPoint.clone(),new j(e,t),new j(n,s),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _i(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Vr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ii=class extends Oa{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Oa().fromJSON(s))}return this}};function pg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Kf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=yg(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=i[f],g=i[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return za(r,a,t,o,l,c,0),a}function Kf(i,e,t,n,s){let r;if(s===Pg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=uf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=uf(a/n|0,i[a],i[a+1],r);return r&&Gr(r,r.next)&&(Va(r),r=r.next),r}function qs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Va(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function za(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Eg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?gg(i,n,s,r):mg(i)){e.push(l.i,i.i,c.i),Va(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vg(qs(i),e),za(i,e,t,n,s,r,2)):a===2&&xg(i,e,t,n,s,r):za(qs(i),e,t,n,s,r,1);break}}}function mg(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&xa(s,o,r,l,a,c,g.x,g.y)&&Nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Nt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),v=Math.max(o,l,c),m=Math.max(h,u,f),p=tu(d,g,e,t,n),x=tu(v,m,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&xa(o,h,l,u,c,f,y.x,y.y)&&Nt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&xa(o,h,l,u,c,f,_.x,_.y)&&Nt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&xa(o,h,l,u,c,f,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&xa(o,h,l,u,c,f,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function vg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gr(n,s)&&ep(n,t,t.next,s)&&Ha(n,s)&&Ha(s,n)&&(e.push(n.i,t.i,s.i),Va(t),Va(t.next),t=i=s),t=t.next}while(t!==i);return qs(t)}function xg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ag(a,o)){let l=tp(a,o);a=qs(a,a.next),l=qs(l,l.next),za(a,e,t,n,s,r,0),za(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function yg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Kf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Tg(c))}s.sort(_g);for(let r=0;r<s.length;r++)t=Mg(s[r],t);return t}function _g(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Mg(i,e){let t=bg(i,e);if(!t)return e;let n=tp(t,i);return qs(n,n.next),qs(t,t.next)}function bg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Gr(i,t))return t;do{if(Gr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ha(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Sg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Sg(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function Eg(i,e,t,n){let s=i;do s.z===0&&(s.z=tu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wg(s)}function wg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function tu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Tg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function xa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Qf(i,e,t,n,s,r,a,o)}function Ag(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Rg(i,e)&&(Ha(i,e)&&Ha(e,i)&&Cg(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||Gr(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gr(i,e){return i.x===e.x&&i.y===e.y}function ep(i,e,t,n){let s=jo(Nt(i,e,t)),r=jo(Nt(i,e,n)),a=jo(Nt(t,n,i)),o=jo(Nt(t,n,e));return!!(s!==r&&a!==o||s===0&&Jo(i,t,e)||r===0&&Jo(i,n,e)||a===0&&Jo(t,i,n)||o===0&&Jo(t,e,n))}function Jo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function jo(i){return i>0?1:i<0?-1:0}function Rg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ep(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ha(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function Cg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function tp(i,e){let t=nu(i.i,i.x,i.y),n=nu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uf(i,e,t,n){let s=nu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Va(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var iu=class{static triangulate(e,t,n=2){return pg(e,t,n)}},fi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];df(e),ff(n,e);let a=e.length;t.forEach(df);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ff(n,t[l]);let o=iu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function df(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ff(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var qi=class i extends st{constructor(e=new ii([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ae(s,3)),this.setAttribute("uv",new Ae(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Ig,y,_=!1,A,w,P,I;p&&(y=p.getSpacedPoints(h),_=!0,f=!1,A=p.computeFrenetFrames(h,!1),w=new T,P=new T,I=new T),f||(m=0,d=0,g=0,v=0);let S=o.extractPoints(c),b=S.shape,C=S.holes;if(!fi.isClockWise(b)){b=b.reverse();for(let ae=0,ne=C.length;ae<ne;ae++){let ee=C[ae];fi.isClockWise(ee)&&(C[ae]=ee.reverse())}}function G(ae){let ee=10000000000000001e-36,Q=ae[0];for(let ve=1;ve<=ae.length;ve++){let ce=ve%ae.length,xe=ae[ce],Xe=xe.x-Q.x,$e=xe.y-Q.y,R=Xe*Xe+$e*$e,M=Math.max(Math.abs(xe.x),Math.abs(xe.y),Math.abs(Q.x),Math.abs(Q.y)),z=ee*M*M;if(R<=z){ae.splice(ce,1),ve--;continue}Q=xe}}G(b),C.forEach(G);let V=C.length,N=b;for(let ae=0;ae<V;ae++){let ne=C[ae];b=b.concat(ne)}function B(ae,ne,ee){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(ne,ee)}let Z=b.length;function W(ae,ne,ee){let Q,ve,ce,xe=ae.x-ne.x,Xe=ae.y-ne.y,$e=ee.x-ae.x,R=ee.y-ae.y,M=xe*xe+Xe*Xe,z=xe*R-Xe*$e;if(Math.abs(z)>Number.EPSILON){let Y=Math.sqrt(M),re=Math.sqrt($e*$e+R*R),J=ne.x-Xe/Y,Ce=ne.y+xe/Y,fe=ee.x-R/re,Re=ee.y+$e/re,Le=((fe-J)*R-(Re-Ce)*$e)/(xe*R-Xe*$e);Q=J+xe*Le-ae.x,ve=Ce+Xe*Le-ae.y;let ue=Q*Q+ve*ve;if(ue<=2)return new j(Q,ve);ce=Math.sqrt(ue/2)}else{let Y=!1;xe>Number.EPSILON?$e>Number.EPSILON&&(Y=!0):xe<-Number.EPSILON?$e<-Number.EPSILON&&(Y=!0):Math.sign(Xe)===Math.sign(R)&&(Y=!0),Y?(Q=-Xe,ve=xe,ce=Math.sqrt(M)):(Q=xe,ve=Xe,ce=Math.sqrt(M/2))}return new j(Q/ce,ve/ce)}let te=[];for(let ae=0,ne=N.length,ee=ne-1,Q=ae+1;ae<ne;ae++,ee++,Q++)ee===ne&&(ee=0),Q===ne&&(Q=0),te[ae]=W(N[ae],N[ee],N[Q]);let le=[],oe,be=te.concat();for(let ae=0,ne=V;ae<ne;ae++){let ee=C[ae];oe=[];for(let Q=0,ve=ee.length,ce=ve-1,xe=Q+1;Q<ve;Q++,ce++,xe++)ce===ve&&(ce=0),xe===ve&&(xe=0),oe[Q]=W(ee[Q],ee[ce],ee[xe]);le.push(oe),be=be.concat(oe)}let Ve;if(m===0)Ve=fi.triangulateShape(N,C);else{let ae=[],ne=[];for(let ee=0;ee<m;ee++){let Q=ee/m,ve=d*Math.cos(Q*Math.PI/2),ce=g*Math.sin(Q*Math.PI/2)+v;for(let xe=0,Xe=N.length;xe<Xe;xe++){let $e=B(N[xe],te[xe],ce);Ie($e.x,$e.y,-ve),Q===0&&ae.push($e)}for(let xe=0,Xe=V;xe<Xe;xe++){let $e=C[xe];oe=le[xe];let R=[];for(let M=0,z=$e.length;M<z;M++){let Y=B($e[M],oe[M],ce);Ie(Y.x,Y.y,-ve),Q===0&&R.push(Y)}Q===0&&ne.push(R)}}Ve=fi.triangulateShape(ae,ne)}let Qe=Ve.length,nt=g+v;for(let ae=0;ae<Z;ae++){let ne=f?B(b[ae],be[ae],nt):b[ae];_?(P.copy(A.normals[0]).multiplyScalar(ne.x),w.copy(A.binormals[0]).multiplyScalar(ne.y),I.copy(y[0]).add(P).add(w),Ie(I.x,I.y,I.z)):Ie(ne.x,ne.y,0)}for(let ae=1;ae<=h;ae++)for(let ne=0;ne<Z;ne++){let ee=f?B(b[ne],be[ne],nt):b[ne];_?(P.copy(A.normals[ae]).multiplyScalar(ee.x),w.copy(A.binormals[ae]).multiplyScalar(ee.y),I.copy(y[ae]).add(P).add(w),Ie(I.x,I.y,I.z)):Ie(ee.x,ee.y,u/h*ae)}for(let ae=m-1;ae>=0;ae--){let ne=ae/m,ee=d*Math.cos(ne*Math.PI/2),Q=g*Math.sin(ne*Math.PI/2)+v;for(let ve=0,ce=N.length;ve<ce;ve++){let xe=B(N[ve],te[ve],Q);Ie(xe.x,xe.y,u+ee)}for(let ve=0,ce=C.length;ve<ce;ve++){let xe=C[ve];oe=le[ve];for(let Xe=0,$e=xe.length;Xe<$e;Xe++){let R=B(xe[Xe],oe[Xe],Q);_?Ie(R.x,R.y+y[h-1].y,y[h-1].x+ee):Ie(R.x,R.y,u+ee)}}}K(),ie();function K(){let ae=s.length/3;if(f){let ne=0,ee=Z*ne;for(let Q=0;Q<Qe;Q++){let ve=Ve[Q];Te(ve[2]+ee,ve[1]+ee,ve[0]+ee)}ne=h+m*2,ee=Z*ne;for(let Q=0;Q<Qe;Q++){let ve=Ve[Q];Te(ve[0]+ee,ve[1]+ee,ve[2]+ee)}}else{for(let ne=0;ne<Qe;ne++){let ee=Ve[ne];Te(ee[2],ee[1],ee[0])}for(let ne=0;ne<Qe;ne++){let ee=Ve[ne];Te(ee[0]+Z*h,ee[1]+Z*h,ee[2]+Z*h)}}n.addGroup(ae,s.length/3-ae,0)}function ie(){let ae=s.length/3,ne=0;Se(N,ne),ne+=N.length;for(let ee=0,Q=C.length;ee<Q;ee++){let ve=C[ee];Se(ve,ne),ne+=ve.length}n.addGroup(ae,s.length/3-ae,1)}function Se(ae,ne){let ee=ae.length;for(;--ee>=0;){let Q=ee,ve=ee-1;ve<0&&(ve=ae.length-1);for(let ce=0,xe=h+m*2;ce<xe;ce++){let Xe=Z*ce,$e=Z*(ce+1),R=ne+Q+Xe,M=ne+ve+Xe,z=ne+ve+$e,Y=ne+Q+$e;ot(R,M,z,Y)}}}function Ie(ae,ne,ee){l.push(ae),l.push(ne),l.push(ee)}function Te(ae,ne,ee){mt(ae),mt(ne),mt(ee);let Q=s.length/3,ve=x.generateTopUV(n,s,Q-3,Q-2,Q-1);D(ve[0]),D(ve[1]),D(ve[2])}function ot(ae,ne,ee,Q){mt(ae),mt(ne),mt(Q),mt(ne),mt(ee),mt(Q);let ve=s.length/3,ce=x.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);D(ce[0]),D(ce[1]),D(ce[3]),D(ce[1]),D(ce[2]),D(ce[3])}function mt(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function D(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gl[s.type]().fromJSON(s)),new i(n,e.options)}},Ig={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new j(r,a),new j(o,l),new j(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new j(a,1-l),new j(c,1-u),new j(f,1-g),new j(v,1-p)]:[new j(o,1-l),new j(h,1-u),new j(d,1-g),new j(m,1-p)]}};function Dg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Mi=class i extends st{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,f=new j,d=new T,g=new T,v=new T,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=t;x++){let y=n+x*h*s,_=Math.sin(y),A=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*_,u.y=e[w].y,u.z=e[w].x*A,a.push(u.x,u.y,u.z),f.x=x/t,f.y=w/(e.length-1),o.push(f.x,f.y);let P=l[3*w+0]*_,I=l[3*w+1],S=l[3*w+0]*A;c.push(P,I,S)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){let _=y+x*e.length,A=_,w=_+e.length,P=_+e.length+1,I=_+1;r.push(A,w,I),r.push(P,I,w)}this.setIndex(r),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var sn=class i extends st{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let x=p*f-a;for(let y=0;y<c;y++){let _=y*u-r;g.push(_,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let y=x+c*p,_=x+c*(p+1),A=x+1+c*(p+1),w=x+1+c*p;d.push(y,_,w),d.push(_,A,w)}this.setIndex(d),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ys=class i extends st{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new T,g=new j;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let x=p+m,y=x,_=x+n+1,A=x+n+2,w=x+1;o.push(y,_,w),o.push(_,A,w)}}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ga=class i extends st{constructor(e=new ii([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(a,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;fi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let x=g[m];fi.isClockWise(x)===!0&&(g[m]=x.reverse())}let v=fi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let x=g[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){let x=d[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=v.length;m<p;m++){let x=v[m],y=x[0]+u,_=x[1]+u,A=x[2]+u;n.push(y,_,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Lg(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Lg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var rn=class i extends st{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,f=new T,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let x=[],y=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let w=A/t;u.x=-e*Math.cos(s+w*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+w*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(w+_,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let y=h[p][x+1],_=h[p][x],A=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&d.push(y,_,w),(p!==n-1||l<Math.PI)&&d.push(_,A,w)}this.setIndex(d),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mn=class i extends st{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new T,u=new T,f=new T;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let v=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,x=(s+1)*d+g;a.push(v,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var $a=class i extends st{constructor(e=new ka(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new j,h=new T,u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(d,2));function v(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),x(),p()}function m(y){h=e.getPointAt(y/t,h);let _=a.normals[y],A=a.binormals[y];for(let w=0;w<=s;w++){let P=w/s*Math.PI*2,I=Math.sin(P),S=-Math.cos(P);l.x=S*_.x+I*A.x,l.y=S*_.y+I*A.y,l.z=S*_.z+I*A.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let A=(s+1)*(y-1)+(_-1),w=(s+1)*y+(_-1),P=(s+1)*y+_,I=(s+1)*(y-1)+_;g.push(A,w,I),g.push(w,P,I)}}function x(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)c.x=y/t,c.y=_/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new gl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Wa=class extends _t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wt=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rt=class extends wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xa=class extends ei{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var xl=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yl=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ko(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ug(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_l=class extends Zs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jh,endingEnd:jh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kh:r=e,o=2*t-n;break;case Qh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kh:a=e,l=2*n-t;break;case Qh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,x=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*v+.5*g,_=d*m-d*v;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+x*a[c+A]+y*a[l+A]+_*a[u+A];return r}},Ml=class extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},bl=class extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ko(t,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ko(e.times,Array),values:Ko(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _l(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case il:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ug(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=il;var gs=class extends kn{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Sa;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Sl.prototype.ValueTypeName="color";var El=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};El.prototype.ValueTypeName="number";var wl=class extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},qa=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};qa.prototype.ValueTypeName="quaternion";qa.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends kn{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Sa;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Tl.prototype.ValueTypeName="vector";var Al=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},np=new Al,Rl=class{constructor(e){this.manager=e!==void 0?e:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";var $r=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Yi=class extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Zh=new et,pf=new T,mf=new T,Cl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),Zh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var gf=new et,va=new T,Jh=new T,su=class extends Cl{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),n.position.copy(va),Jh.copy(n.position),Jh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jh),n.updateMatrixWorld(),s.makeTranslation(-va.x,-va.y,-va.z),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf,n.coordinateSystem,n.reversedDepth)}},Ya=class extends $r{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},On=class extends Pa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ru=class extends Cl{constructor(){super(new On(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bi=class extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new ru}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Pl=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Za=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Au="\\[\\]\\.:\\/",Ng=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",Fg="[^"+Au.replace("\\.","")+"]",Bg=/((?:WC+[\/:])*)/.source.replace("WC",Ru),kg=/(WCOD+)?/.source.replace("WCOD",Fg),Og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),Hg=new RegExp("^"+Bg+kg+Og+zg+"$"),Vg=["material","materials","bones","map"],au=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ng,"")}static parseTrackName(e){let t=Hg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=au;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mM=new Float32Array(1);var vf=new et,si=class{constructor(e,t,n=0,s=1/0){this.ray=new Br(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(e,t=!0,n=[]){return ou(e,this,n,t),n.sort(xf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ou(e[s],this,n,t);return n.sort(xf),n}};function xf(i,e){return i.distance-e.distance}function ou(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ou(r[a],e,t,!0)}}function Cu(i,e,t,n){let s=Gg(n);switch(t){case xu:return i*e;case Ql:return i*e/s.components*s.byteLength;case ec:return i*e/s.components*s.byteLength;case _u:return i*e*2/s.components*s.byteLength;case tc:return i*e*2/s.components*s.byteLength;case yu:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case nc:return i*e*4/s.components*s.byteLength;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:case ac:return Math.max(i,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(i,8)*Math.max(e,8)/2;case oc:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ec:case wc:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gg(i){switch(i){case zn:case pu:return{byteLength:1,components:1};case Wr:case mu:case bn:return{byteLength:2,components:1};case jl:case Kl:return{byteLength:2,components:4};case xs:case Jl:case ri:return{byteLength:4,components:1};case gu:case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $g(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
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
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jg=`#ifdef USE_AOMAP
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
#endif`,Kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qg=`#ifdef USE_BATCHING
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
#endif`,ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sv=`#ifdef USE_IRIDESCENCE
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
#endif`,rv=`#ifdef USE_BUMPMAP
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
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pv=`#define PI 3.141592653589793
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
} // validated`,mv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gv=`vec3 transformedNormal = objectNormal;
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
#endif`,vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dv=`#ifdef USE_GRADIENTMAP
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
}`,Lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fv=`uniform bool receiveShadow;
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
#endif`,Bv=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vv=`PhysicalMaterial material;
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
#endif`,Gv=`struct PhysicalMaterial {
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
}`,$v=`
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
#endif`,Wv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ex=`#if defined( USE_POINTS_UV )
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
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fx=`#ifdef USE_NORMALMAP
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
#endif`,px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cx=`float getShadowMask() {
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
}`,Px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
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
#endif`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
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
}`,jx=`#if DEPTH_PACKING == 3200
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
}`,Kx=`#define DISTANCE
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
}`,Qx=`#define DISTANCE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`uniform float scale;
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
}`,iy=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,ry=`uniform vec3 diffuse;
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
}`,ay=`#define LAMBERT
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
}`,oy=`#define LAMBERT
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
}`,ly=`#define MATCAP
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
}`,cy=`#define MATCAP
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
}`,hy=`#define NORMAL
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
}`,uy=`#define NORMAL
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
}`,dy=`#define PHONG
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
}`,fy=`#define PHONG
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
}`,py=`#define STANDARD
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
}`,my=`#define STANDARD
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
}`,gy=`#define TOON
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
}`,vy=`#define TOON
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
}`,xy=`uniform float size;
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
}`,yy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,My=`uniform vec3 color;
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
}`,by=`uniform float rotation;
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
}`,Sy=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Wg,alphahash_pars_fragment:Xg,alphamap_fragment:qg,alphamap_pars_fragment:Yg,alphatest_fragment:Zg,alphatest_pars_fragment:Jg,aomap_fragment:jg,aomap_pars_fragment:Kg,batching_pars_vertex:Qg,batching_vertex:ev,begin_vertex:tv,beginnormal_vertex:nv,bsdfs:iv,iridescence_fragment:sv,bumpmap_pars_fragment:rv,clipping_planes_fragment:av,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:lv,clipping_planes_vertex:cv,color_fragment:hv,color_pars_fragment:uv,color_pars_vertex:dv,color_vertex:fv,common:pv,cube_uv_reflection_fragment:mv,defaultnormal_vertex:gv,displacementmap_pars_vertex:vv,displacementmap_vertex:xv,emissivemap_fragment:yv,emissivemap_pars_fragment:_v,colorspace_fragment:Mv,colorspace_pars_fragment:bv,envmap_fragment:Sv,envmap_common_pars_fragment:Ev,envmap_pars_fragment:wv,envmap_pars_vertex:Tv,envmap_physical_pars_fragment:Bv,envmap_vertex:Av,fog_vertex:Rv,fog_pars_vertex:Cv,fog_fragment:Pv,fog_pars_fragment:Iv,gradientmap_pars_fragment:Dv,lightmap_pars_fragment:Lv,lights_lambert_fragment:Uv,lights_lambert_pars_fragment:Nv,lights_pars_begin:Fv,lights_toon_fragment:kv,lights_toon_pars_fragment:Ov,lights_phong_fragment:zv,lights_phong_pars_fragment:Hv,lights_physical_fragment:Vv,lights_physical_pars_fragment:Gv,lights_fragment_begin:$v,lights_fragment_maps:Wv,lights_fragment_end:Xv,logdepthbuf_fragment:qv,logdepthbuf_pars_fragment:Yv,logdepthbuf_pars_vertex:Zv,logdepthbuf_vertex:Jv,map_fragment:jv,map_pars_fragment:Kv,map_particle_fragment:Qv,map_particle_pars_fragment:ex,metalnessmap_fragment:tx,metalnessmap_pars_fragment:nx,morphinstance_vertex:ix,morphcolor_vertex:sx,morphnormal_vertex:rx,morphtarget_pars_vertex:ax,morphtarget_vertex:ox,normal_fragment_begin:lx,normal_fragment_maps:cx,normal_pars_fragment:hx,normal_pars_vertex:ux,normal_vertex:dx,normalmap_pars_fragment:fx,clearcoat_normal_fragment_begin:px,clearcoat_normal_fragment_maps:mx,clearcoat_pars_fragment:gx,iridescence_pars_fragment:vx,opaque_fragment:xx,packing:yx,premultiplied_alpha_fragment:_x,project_vertex:Mx,dithering_fragment:bx,dithering_pars_fragment:Sx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ax,shadowmap_vertex:Rx,shadowmask_pars_fragment:Cx,skinbase_vertex:Px,skinning_pars_vertex:Ix,skinning_vertex:Dx,skinnormal_vertex:Lx,specularmap_fragment:Ux,specularmap_pars_fragment:Nx,tonemapping_fragment:Fx,tonemapping_pars_fragment:Bx,transmission_fragment:kx,transmission_pars_fragment:Ox,uv_pars_fragment:zx,uv_pars_vertex:Hx,uv_vertex:Vx,worldpos_vertex:Gx,background_vert:$x,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:qx,cube_vert:Yx,cube_frag:Zx,depth_vert:Jx,depth_frag:jx,distanceRGBA_vert:Kx,distanceRGBA_frag:Qx,equirect_vert:ey,equirect_frag:ty,linedashed_vert:ny,linedashed_frag:iy,meshbasic_vert:sy,meshbasic_frag:ry,meshlambert_vert:ay,meshlambert_frag:oy,meshmatcap_vert:ly,meshmatcap_frag:cy,meshnormal_vert:hy,meshnormal_frag:uy,meshphong_vert:dy,meshphong_frag:fy,meshphysical_vert:py,meshphysical_frag:my,meshtoon_vert:gy,meshtoon_frag:vy,points_vert:xy,points_frag:yy,shadow_vert:_y,shadow_frag:My,sprite_vert:by,sprite_frag:Sy},Me={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ti={basic:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ye(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:un([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:un([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ye(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:un([Me.points,Me.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:un([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:un([Me.common,Me.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:un([Me.sprite,Me.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:un([Me.common,Me.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:un([Me.lights,Me.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ti.physical={uniforms:un([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Dc={r:0,b:0,g:0},er=new Fn,Ey=new et;function wy(i,e,t,n,s,r,a){let o=new ye(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1,A=g(y);A===null?p(o,l):A&&A.isColor&&(p(A,1),_=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){let A=g(_);A&&(A.isCubeTexture||A.mapping===Qa)?(h===void 0&&(h=new dt(new mi(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:Qs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),er.copy(_.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(er)),h.material.toneMapped=ht.getTransfer(A.colorSpace)!==pt,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new dt(new sn(2,2),new _t({name:"BackgroundMaterial",uniforms:Qs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ht.getTransfer(A.colorSpace)!==pt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Dc,wu(i)),n.buffers.color.setClear(Dc.r,Dc.g,Dc.b,_,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:m,dispose:x}}function Ty(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(b,C,U,G,V){let N=!1,B=u(G,U,C);r!==B&&(r=B,c(r.object)),N=d(b,G,U,V),N&&g(b,G,U,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,_(b,C,U,G),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,C,U){let G=U.wireframe===!0,V=n[b.id];V===void 0&&(V={},n[b.id]=V);let N=V[C.id];N===void 0&&(N={},V[C.id]=N);let B=N[G];return B===void 0&&(B=f(l()),N[G]=B),B}function f(b){let C=[],U=[],G=[];for(let V=0;V<t;V++)C[V]=0,U[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:G,object:b,attributes:{},index:null}}function d(b,C,U,G){let V=r.attributes,N=C.attributes,B=0,Z=U.getAttributes();for(let W in Z)if(Z[W].location>=0){let le=V[W],oe=N[W];if(oe===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),le===void 0||le.attribute!==oe||oe&&le.data!==oe.data)return!0;B++}return r.attributesNum!==B||r.index!==G}function g(b,C,U,G){let V={},N=C.attributes,B=0,Z=U.getAttributes();for(let W in Z)if(Z[W].location>=0){let le=N[W];le===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(le=b.instanceColor));let oe={};oe.attribute=le,le&&le.data&&(oe.data=le.data),V[W]=oe,B++}r.attributes=V,r.attributesNum=B,r.index=G}function v(){let b=r.newAttributes;for(let C=0,U=b.length;C<U;C++)b[C]=0}function m(b){p(b,0)}function p(b,C){let U=r.newAttributes,G=r.enabledAttributes,V=r.attributeDivisors;U[b]=1,G[b]===0&&(i.enableVertexAttribArray(b),G[b]=1),V[b]!==C&&(i.vertexAttribDivisor(b,C),V[b]=C)}function x(){let b=r.newAttributes,C=r.enabledAttributes;for(let U=0,G=C.length;U<G;U++)C[U]!==b[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function y(b,C,U,G,V,N,B){B===!0?i.vertexAttribIPointer(b,C,U,V,N):i.vertexAttribPointer(b,C,U,G,V,N)}function _(b,C,U,G){v();let V=G.attributes,N=U.getAttributes(),B=C.defaultAttributeValues;for(let Z in N){let W=N[Z];if(W.location>=0){let te=V[Z];if(te===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),te!==void 0){let le=te.normalized,oe=te.itemSize,be=e.get(te);if(be===void 0)continue;let Ve=be.buffer,Qe=be.type,nt=be.bytesPerElement,K=Qe===i.INT||Qe===i.UNSIGNED_INT||te.gpuType===Jl;if(te.isInterleavedBufferAttribute){let ie=te.data,Se=ie.stride,Ie=te.offset;if(ie.isInstancedInterleavedBuffer){for(let Te=0;Te<W.locationSize;Te++)p(W.location+Te,ie.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Te=0;Te<W.locationSize;Te++)m(W.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Te=0;Te<W.locationSize;Te++)y(W.location+Te,oe/W.locationSize,Qe,le,Se*nt,(Ie+oe/W.locationSize*Te)*nt,K)}else{if(te.isInstancedBufferAttribute){for(let ie=0;ie<W.locationSize;ie++)p(W.location+ie,te.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ie=0;ie<W.locationSize;ie++)m(W.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ie=0;ie<W.locationSize;ie++)y(W.location+ie,oe/W.locationSize,Qe,le,oe*nt,oe/W.locationSize*ie*nt,K)}}else if(B!==void 0){let le=B[Z];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(W.location,le);break;case 3:i.vertexAttrib3fv(W.location,le);break;case 4:i.vertexAttrib4fv(W.location,le);break;default:i.vertexAttrib1fv(W.location,le)}}}}x()}function A(){I();for(let b in n){let C=n[b];for(let U in C){let G=C[U];for(let V in G)h(G[V].object),delete G[V];delete C[U]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let C=n[b.id];for(let U in C){let G=C[U];for(let V in G)h(G[V].object),delete G[V];delete C[U]}delete n[b.id]}function P(b){for(let C in n){let U=n[C];if(U[b.id]===void 0)continue;let G=U[b.id];for(let V in G)h(G[V].object),delete G[V];delete U[b.id]}}function I(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Ay(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ry(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let I=P===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==zn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ri&&!I)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:w}}function Cy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new $n,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,y=x*4,_=p.clippingState||null;l.value=_,_=h(g,f,y,d);for(let A=0;A!==y;++A)_[A]=t[A];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=d+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==v;++y,_+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Py(i){let e=new WeakMap;function t(a,o){return o===ql?a.mapping=js:o===Yl&&(a.mapping=Ks),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ql||o===Yl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new cl(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var qr=4,ip=[.125,.215,.35,.446,.526,.582],ir=20,Pu=new On,sp=new ye,Iu=null,Du=0,Lu=0,Uu=!1,nr=(1+Math.sqrt(5))/2,Xr=1/nr,rp=[new T(-nr,Xr,0),new T(nr,Xr,0),new T(-Xr,0,nr),new T(Xr,0,nr),new T(0,nr,-Xr),new T(0,nr,Xr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Iy=new T,Zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Iy}=r;Iu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Iu,Du,Lu),this._renderer.xr.enabled=Uu,e.scissorTest=!1,Lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Iu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:bn,format:Rn,colorSpace:Vs,depthBuffer:!1},s=ap(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ap(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dy(r)),this._blurMaterial=Ly(r,e,t)}return s}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Pu)}_sceneToCubeUV(e,t,n,s,r){let l=new xn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(sp),u.toneMapping=Zi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new Vt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new dt(new mi,v),p=!1,x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,p=!0):(v.color.copy(sp),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let A=this._cubeSize;Lc(s,_*A,y>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===js||e.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Lc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rp[(s-r-1)%rp.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new dt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ir-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ir;m>ir&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);let p=[],x=0;for(let P=0;P<ir;++P){let I=P/v,S=Math.exp(-I*I/2);p.push(S),P===0?x+=S:P<m&&(x+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let _=this._sizeLods[s],A=3*_*(s>y-qr?s-y+qr:0),w=4*(this._cubeSize-_);Lc(t,A,w,3*_,2*_),l.setRenderTarget(t),l.render(u,Pu)}};function Dy(i){let e=[],t=[],n=[],s=i,r=i-qr+1+ip.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-qr?l=ip[a-i+qr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let w=0;w<d;w++){let P=w%3*2/3-1,I=w>2?0:-1,S=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];x.set(S,v*g*w),y.set(f,m*g*w);let b=[w,w,w,w,w,w];_.set(b,p*g*w)}let A=new st;A.setAttribute("position",new yn(x,v)),A.setAttribute("uv",new yn(y,m)),A.setAttribute("faceIndex",new yn(_,p)),e.push(A),s>qr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ap(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ly(i,e,t){let n=new Float32Array(ir),s=new T(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$u(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function op(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function lp(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function $u(){return`

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
	`}function Uy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ql||l===Yl,h=l===js||l===Ks;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Zr(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Zr(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ny(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fy(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,v=0;if(d!==null){let x=d.array;v=d.version;for(let y=0,_=x.length;y<_;y+=3){let A=x[y+0],w=x[y+1],P=x[y+2];f.push(A,w,w,P,P,A)}}else if(g!==void 0){let x=g.array;v=g.version;for(let y=0,_=x.length/3-1;y<_;y+=3){let A=y+0,w=y+1,P=y+2;f.push(A,w,w,P,P,A)}}else return;let m=new(Eu(f)?Ca:Ra)(f,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function By(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*v[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ky(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Oy(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=o.attributes.position.count*y,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*A*4*u),P=new Aa(w,_,A,u);P.type=ri,P.needsUpdate=!0;let I=y*4;for(let b=0;b<u;b++){let C=m[b],U=p[b],G=x[b],V=_*A*4*b;for(let N=0;N<C.count;N++){let B=N*I;d===!0&&(s.fromBufferAttribute(C,N),w[V+B+0]=s.x,w[V+B+1]=s.y,w[V+B+2]=s.z,w[V+B+3]=0),g===!0&&(s.fromBufferAttribute(U,N),w[V+B+4]=s.x,w[V+B+5]=s.y,w[V+B+6]=s.z,w[V+B+7]=0),v===!0&&(s.fromBufferAttribute(G,N),w[V+B+8]=s.x,w[V+B+9]=s.y,w[V+B+10]=s.z,w[V+B+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new j(_,A)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ap=new _n,cp=new Xs(1,1),Rp=new Aa,Cp=new ol,Pp=new Ia,hp=[],up=[],dp=new Float32Array(16),fp=new Float32Array(9),pp=new Float32Array(4);function Jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hp[s];if(r===void 0&&(r=new Float32Array(s),hp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nc(i,e){let t=up[e];t===void 0&&(t=new Int32Array(e),up[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function Wy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;pp.set(n),i.uniformMatrix2fv(this.addr,!1,pp),Yt(t,n)}}function Xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;fp.set(n),i.uniformMatrix3fv(this.addr,!1,fp),Yt(t,n)}}function qy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;dp.set(n),i.uniformMatrix4fv(this.addr,!1,dp),Yt(t,n)}}function Yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function n_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cp.compareFunction=Mu,r=cp):r=Ap,t.setTexture2D(e||r,s)}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cp,s)}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pp,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rp,s)}function a_(i){switch(i){case 5126:return Hy;case 35664:return Vy;case 35665:return Gy;case 35666:return $y;case 35674:return Wy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return Zy;case 35668:case 35672:return Jy;case 35669:case 35673:return jy;case 5125:return Ky;case 36294:return Qy;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}function o_(i,e){i.uniform1fv(this.addr,e)}function l_(i,e){let t=Jr(e,this.size,2);i.uniform2fv(this.addr,t)}function c_(i,e){let t=Jr(e,this.size,3);i.uniform3fv(this.addr,t)}function h_(i,e){let t=Jr(e,this.size,4);i.uniform4fv(this.addr,t)}function u_(i,e){let t=Jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d_(i,e){let t=Jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f_(i,e){let t=Jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p_(i,e){i.uniform1iv(this.addr,e)}function m_(i,e){i.uniform2iv(this.addr,e)}function g_(i,e){i.uniform3iv(this.addr,e)}function v_(i,e){i.uniform4iv(this.addr,e)}function x_(i,e){i.uniform1uiv(this.addr,e)}function y_(i,e){i.uniform2uiv(this.addr,e)}function __(i,e){i.uniform3uiv(this.addr,e)}function M_(i,e){i.uniform4uiv(this.addr,e)}function b_(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ap,r[a])}function S_(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cp,r[a])}function E_(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pp,r[a])}function w_(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rp,r[a])}function T_(i){switch(i){case 5126:return o_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return y_;case 36295:return __;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return w_}}var Fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=a_(t.type)}},Bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T_(t.type)}},ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Nu=/(\w+)(\])?(\[|\.)?/g;function mp(i,e){i.seq.push(e),i.map[e.id]=e}function A_(i,e,t){let n=i.name,s=n.length;for(Nu.lastIndex=0;;){let r=Nu.exec(n),a=Nu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mp(t,c===void 0?new Fu(o,i,e):new Bu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ku(o),mp(t,u)),t=u}}}var Yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);A_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function gp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var R_=37297,C_=0;function P_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var vp=new Je;function I_(i){ht._getMatrix(vp,ht.workingColorSpace,i);let e=`mat3( ${vp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+P_(i.getShaderSource(e),o)}else return r}function D_(i,e){let t=I_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L_(i,e){let t;switch(e){case Hl:t="Linear";break;case Vl:t="Reinhard";break;case Gl:t="Cineon";break;case Ei:t="ACESFilmic";break;case Wl:t="AgX";break;case Xl:t="Neutral";break;case $l:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uc=new T;function U_(){ht.getLuminanceCoefficients(Uc);let i=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function F_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function B_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ro(i){return i!==""}function yp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _p(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(i){return i.replace(k_,z_)}var O_=new Map;function z_(i,e){let t=rt[e];if(t===void 0){let n=O_.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ou(t)}var H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(i){return i.replace(H_,V_)}function V_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function $_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case js:case Ks:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function X_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case du:e="ENVMAP_BLENDING_MULTIPLY";break;case Nf:e="ENVMAP_BLENDING_MIX";break;case Ff:e="ENVMAP_BLENDING_ADD";break}return e}function q_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=G_(t),c=$_(t),h=W_(t),u=X_(t),f=q_(t),d=N_(t),g=F_(r),v=s.createProgram(),m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(m=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Zi?L_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,D_("linearToOutputTexel",t.outputColorSpace),U_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),a=Ou(a),a=yp(a,t),a=_p(a,t),o=Ou(o),o=yp(o,t),o=_p(o,t),a=Mp(a),o=Mp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=x+m+a,_=x+p+o,A=gp(s,s.VERTEX_SHADER,y),w=gp(s,s.FRAGMENT_SHADER,_);s.attachShader(v,A),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(w)||"",N=U.trim(),B=G.trim(),Z=V.trim(),W=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,w);else{let le=xp(s,A,"vertex"),oe=xp(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+le+`
`+oe)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||Z==="")&&(te=!1);te&&(C.diagnostics={runnable:W,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(A),s.deleteShader(w),I=new Yr(s,v),S=B_(s,v)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,R_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}var Z_=0,zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hu(e),t.set(e,n)),n}},Hu=class{constructor(e){this.id=Z_++,this.code=e,this.usedTimes=0}};function J_(i,e,t,n,s,r,a){let o=new kr,l=new zu,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,C,U,G){let V=U.fog,N=G.geometry,B=S.isMeshStandardMaterial?U.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),W=Z&&Z.mapping===Qa?Z.image.height:null,te=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let le=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,oe=le!==void 0?le.length:0,be=0;N.morphAttributes.position!==void 0&&(be=1),N.morphAttributes.normal!==void 0&&(be=2),N.morphAttributes.color!==void 0&&(be=3);let Ve,Qe,nt,K;if(te){let gt=Ti[te];Ve=gt.vertexShader,Qe=gt.fragmentShader}else Ve=S.vertexShader,Qe=S.fragmentShader,l.update(S),nt=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);let ie=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ie=G.isInstancedMesh===!0,Te=G.isBatchedMesh===!0,ot=!!S.map,mt=!!S.matcap,D=!!Z,ae=!!S.aoMap,ne=!!S.lightMap,ee=!!S.bumpMap,Q=!!S.normalMap,ve=!!S.displacementMap,ce=!!S.emissiveMap,xe=!!S.metalnessMap,Xe=!!S.roughnessMap,$e=S.anisotropy>0,R=S.clearcoat>0,M=S.dispersion>0,z=S.iridescence>0,Y=S.sheen>0,re=S.transmission>0,J=$e&&!!S.anisotropyMap,Ce=R&&!!S.clearcoatMap,fe=R&&!!S.clearcoatNormalMap,Re=R&&!!S.clearcoatRoughnessMap,Le=z&&!!S.iridescenceMap,ue=z&&!!S.iridescenceThicknessMap,Ee=Y&&!!S.sheenColorMap,Ge=Y&&!!S.sheenRoughnessMap,ke=!!S.specularMap,_e=!!S.specularColorMap,qe=!!S.specularIntensityMap,L=re&&!!S.transmissionMap,he=re&&!!S.thicknessMap,ge=!!S.gradientMap,De=!!S.alphaMap,de=S.alphaTest>0,se=!!S.alphaHash,Fe=!!S.extensions,Ke=Zi;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let Et={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Ve,fragmentShader:Qe,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Te,batchingColor:Te&&G._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&G.instanceColor!==null,instancingMorph:Ie&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Vs,alphaToCoverage:!!S.alphaToCoverage,map:ot,matcap:mt,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:W,aoMap:ae,lightMap:ne,bumpMap:ee,normalMap:Q,displacementMap:f&&ve,emissiveMap:ce,normalMapObjectSpace:Q&&S.normalMapType===zf,normalMapTangentSpace:Q&&S.normalMapType===Ic,metalnessMap:xe,roughnessMap:Xe,anisotropy:$e,anisotropyMap:J,clearcoat:R,clearcoatMap:Ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:Re,dispersion:M,iridescence:z,iridescenceMap:Le,iridescenceThicknessMap:ue,sheen:Y,sheenColorMap:Ee,sheenRoughnessMap:Ge,specularMap:ke,specularColorMap:_e,specularIntensityMap:qe,transmission:re,transmissionMap:L,thicknessMap:he,gradientMap:ge,opaque:S.transparent===!1&&S.blending===zs&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:de,alphaHash:se,combine:S.combine,mapUv:ot&&v(S.map.channel),aoMapUv:ae&&v(S.aoMap.channel),lightMapUv:ne&&v(S.lightMap.channel),bumpMapUv:ee&&v(S.bumpMap.channel),normalMapUv:Q&&v(S.normalMap.channel),displacementMapUv:ve&&v(S.displacementMap.channel),emissiveMapUv:ce&&v(S.emissiveMap.channel),metalnessMapUv:xe&&v(S.metalnessMap.channel),roughnessMapUv:Xe&&v(S.roughnessMap.channel),anisotropyMapUv:J&&v(S.anisotropyMap.channel),clearcoatMapUv:Ce&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&v(S.sheenRoughnessMap.channel),specularMapUv:ke&&v(S.specularMap.channel),specularColorMapUv:_e&&v(S.specularColorMap.channel),specularIntensityMapUv:qe&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:he&&v(S.thicknessMap.channel),alphaMapUv:De&&v(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Q||$e),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!N.attributes.uv&&(ot||De),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:G.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:ot&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===pt,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&ht.getTransfer(S.emissiveMap.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pt,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)b.push(C),b.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(b,S),y(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let b=g[S.type],C;if(b){let U=Ti[b];C=Sn.clone(U.uniforms)}else C=S.uniforms;return C}function A(S,b){let C;for(let U=0,G=h.length;U<G;U++){let V=h[U];if(V.cacheKey===b){C=V,++C.usedTimes;break}}return C===void 0&&(C=new Y_(i,b,S,r),h.push(C)),C}function w(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:I}}function j_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function K_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ep(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,d,g,v,m){let p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,v,m){let p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||K_),n.length>1&&n.sort(f||Sp),s.length>1&&s.sort(f||Sp)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Q_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ep,i.set(n,[a])):s>=r.length?(a=new Ep,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function e1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ye};break;case"SpotLight":t={position:new T,direction:new T,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function t1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var n1=0;function i1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function s1(i){let e=new e1,t=t1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,r=new et,a=new et;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,x=0,y=0,_=0,A=0,w=0,P=0;c.sort(i1);for(let S=0,b=c.length;S<b;S++){let C=c[S],U=C.color,G=C.intensity,V=C.distance,N=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*G,u+=U.g*G,f+=U.b*G;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],G);P++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Z=C.shadow,W=t.get(C);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=C.shadow.matrix,x++}n.directional[d]=B,d++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(U).multiplyScalar(G),B.distance=V,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[v]=B;let Z=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,Z.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=Z.matrix,C.castShadow){let W=t.get(C);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=N,_++}v++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(U).multiplyScalar(G),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=B,m++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let Z=C.shadow,W=t.get(C);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=B,g++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(G),B.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==y||I.numSpotShadows!==_||I.numSpotMaps!==A||I.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,I.directionalLength=d,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=y,I.numSpotShadows=_,I.numSpotMaps=A,I.numLightProbes=P,n.version=n1++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let y=c[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function wp(i){let e=new s1(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function r1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new wp(i),e.set(s,[o])):r>=a.length?(o=new wp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var a1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
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
}`;function l1(i,e,t){let n=new zr,s=new j,r=new j,a=new xt,o=new xl({depthPacking:Of}),l=new yl,c={},h=t.maxTextureSize,u={[Gi]:Xt,[Xt]:Gi,[Pt]:Pt},f=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:a1,fragmentShader:o1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new st;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let p=this.type;this.render=function(w,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending($t),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=p!==Si&&this.type===Si,V=p===Si&&this.type!==Si;for(let N=0,B=w.length;N<B;N++){let Z=w[N],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let te=W.getFrameExtents();if(s.multiply(te),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,W.mapSize.y=r.y)),W.map===null||G===!0||V===!0){let oe=this.type!==Si?{minFilter:nn,magFilter:nn}:{};W.map!==null&&W.map.dispose(),W.map=new Wt(s.x,s.y,oe),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let le=W.getViewportCount();for(let oe=0;oe<le;oe++){let be=W.getViewport(oe);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),U.viewport(a),W.updateMatrices(Z,oe),n=W.getFrustum(),_(P,I,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Si&&x(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,C)};function x(w,P){let I=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Wt(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,I,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,I,d,v,null)}function y(w,P,I,S){let b=null,C=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=I.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let U=b.uuid,G=P.uuid,V=c[U];V===void 0&&(V={},c[U]=V);let N=V[G];N===void 0&&(N=b.clone(),V[G]=N,P.addEventListener("dispose",A)),b=N}if(b.visible=P.visible,b.wireframe=P.wireframe,S===Si?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=i.properties.get(b);U.light=I}return b}function _(w,P,I,S,b){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Si)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let G=e.update(w),V=w.material;if(Array.isArray(V)){let N=G.groups;for(let B=0,Z=N.length;B<Z;B++){let W=N[B],te=V[W.materialIndex];if(te&&te.visible){let le=y(w,te,S,b);w.onBeforeShadow(i,w,P,I,G,le,W),i.renderBufferDirect(I,null,G,le,w,W),w.onAfterShadow(i,w,P,I,G,le,W)}}}else if(V.visible){let N=y(w,V,S,b);w.onBeforeShadow(i,w,P,I,G,N,null),i.renderBufferDirect(I,null,G,N,w,null),w.onAfterShadow(i,w,P,I,G,N,null)}}let U=w.children;for(let G=0,V=U.length;G<V;G++)_(U[G],P,I,S,b)}function A(w){w.target.removeEventListener("dispose",A);for(let I in c){let S=c[I],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var c1={[Ul]:Nl,[Fl]:Ol,[Bl]:zl,[Hs]:kl,[Nl]:Ul,[Ol]:Fl,[zl]:Bl,[kl]:Hs};function h1(i,e){function t(){let L=!1,he=new xt,ge=null,De=new xt(0,0,0,0);return{setMask:function(de){ge!==de&&!L&&(i.colorMask(de,de,de,de),ge=de)},setLocked:function(de){L=de},setClear:function(de,se,Fe,Ke,Et){Et===!0&&(de*=Ke,se*=Ke,Fe*=Ke),he.set(de,se,Fe,Ke),De.equals(he)===!1&&(i.clearColor(de,se,Fe,Ke),De.copy(he))},reset:function(){L=!1,ge=null,De.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,ge=null,De=null,de=null;return{setReversed:function(se){if(he!==se){let Fe=e.get("EXT_clip_control");se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),he=se;let Ke=de;de=null,this.setClear(Ke)}},getReversed:function(){return he},setTest:function(se){se?ie(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(se){ge!==se&&!L&&(i.depthMask(se),ge=se)},setFunc:function(se){if(he&&(se=c1[se]),De!==se){switch(se){case Ul:i.depthFunc(i.NEVER);break;case Nl:i.depthFunc(i.ALWAYS);break;case Fl:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Bl:i.depthFunc(i.EQUAL);break;case kl:i.depthFunc(i.GEQUAL);break;case Ol:i.depthFunc(i.GREATER);break;case zl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=se}},setLocked:function(se){L=se},setClear:function(se){de!==se&&(he&&(se=1-se),i.clearDepth(se),de=se)},reset:function(){L=!1,ge=null,De=null,de=null,he=!1}}}function s(){let L=!1,he=null,ge=null,De=null,de=null,se=null,Fe=null,Ke=null,Et=null;return{setTest:function(gt){L||(gt?ie(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(gt){he!==gt&&!L&&(i.stencilMask(gt),he=gt)},setFunc:function(gt,Ni,ui){(ge!==gt||De!==Ni||de!==ui)&&(i.stencilFunc(gt,Ni,ui),ge=gt,De=Ni,de=ui)},setOp:function(gt,Ni,ui){(se!==gt||Fe!==Ni||Ke!==ui)&&(i.stencilOp(gt,Ni,ui),se=gt,Fe=Ni,Ke=ui)},setLocked:function(gt){L=gt},setClear:function(gt){Et!==gt&&(i.clearStencil(gt),Et=gt)},reset:function(){L=!1,he=null,ge=null,De=null,de=null,se=null,Fe=null,Ke=null,Et=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,A=null,w=null,P=new ye(0,0,0),I=0,S=!1,b=null,C=null,U=null,G=null,V=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Z>=2);let te=null,le={},oe=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Ve=new xt().fromArray(oe),Qe=new xt().fromArray(be);function nt(L,he,ge,De){let de=new Uint8Array(4),se=i.createTexture();i.bindTexture(L,se),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ge;Fe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(he+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return se}let K={};K[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Hs),ee(!1),Q(lu),ie(i.CULL_FACE),ae($t);function ie(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Se(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ie(L,he){return u[L]!==he?(i.bindFramebuffer(L,he),u[L]=he,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Te(L,he){let ge=d,De=!1;if(L){ge=f.get(he),ge===void 0&&(ge=[],f.set(he,ge));let de=L.textures;if(ge.length!==de.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Fe=de.length;se<Fe;se++)ge[se]=i.COLOR_ATTACHMENT0+se;ge.length=de.length,De=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,De=!0);De&&i.drawBuffers(ge)}function ot(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let mt={[Un]:i.FUNC_ADD,[Mf]:i.FUNC_SUBTRACT,[bf]:i.FUNC_REVERSE_SUBTRACT};mt[Sf]=i.MIN,mt[Ef]=i.MAX;let D={[Js]:i.ZERO,[wf]:i.ONE,[Tf]:i.SRC_COLOR,[el]:i.SRC_ALPHA,[Pf]:i.SRC_ALPHA_SATURATE,[Ka]:i.DST_COLOR,[ja]:i.DST_ALPHA,[Af]:i.ONE_MINUS_SRC_COLOR,[tl]:i.ONE_MINUS_SRC_ALPHA,[Cf]:i.ONE_MINUS_DST_COLOR,[Rf]:i.ONE_MINUS_DST_ALPHA,[If]:i.CONSTANT_COLOR,[Df]:i.ONE_MINUS_CONSTANT_COLOR,[Lf]:i.CONSTANT_ALPHA,[Uf]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(L,he,ge,De,de,se,Fe,Ke,Et,gt){if(L===$t){v===!0&&(Se(i.BLEND),v=!1);return}if(v===!1&&(ie(i.BLEND),v=!0),L!==Ll){if(L!==m||gt!==S){if((p!==Un||_!==Un)&&(i.blendEquation(i.FUNC_ADD),p=Un,_=Un),gt)switch(L){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,y=null,A=null,w=null,P.set(0,0,0),I=0,m=L,S=gt}return}de=de||he,se=se||ge,Fe=Fe||De,(he!==p||de!==_)&&(i.blendEquationSeparate(mt[he],mt[de]),p=he,_=de),(ge!==x||De!==y||se!==A||Fe!==w)&&(i.blendFuncSeparate(D[ge],D[De],D[se],D[Fe]),x=ge,y=De,A=se,w=Fe),(Ke.equals(P)===!1||Et!==I)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Et),P.copy(Ke),I=Et),m=L,S=!1}function ne(L,he){L.side===Pt?Se(i.CULL_FACE):ie(i.CULL_FACE);let ge=L.side===Xt;he&&(ge=!ge),ee(ge),L.blending===zs&&L.transparent===!1?ae($t):ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let De=L.stencilWrite;o.setTest(De),De&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(L){b!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),b=L)}function Q(L){L!==yf?(ie(i.CULL_FACE),L!==C&&(L===lu?i.cullFace(i.BACK):L===_f?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),C=L}function ve(L){L!==U&&(B&&i.lineWidth(L),U=L)}function ce(L,he,ge){L?(ie(i.POLYGON_OFFSET_FILL),(G!==he||V!==ge)&&(i.polygonOffset(he,ge),G=he,V=ge)):Se(i.POLYGON_OFFSET_FILL)}function xe(L){L?ie(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Xe(L){L===void 0&&(L=i.TEXTURE0+N-1),te!==L&&(i.activeTexture(L),te=L)}function $e(L,he,ge){ge===void 0&&(te===null?ge=i.TEXTURE0+N-1:ge=te);let De=le[ge];De===void 0&&(De={type:void 0,texture:void 0},le[ge]=De),(De.type!==L||De.texture!==he)&&(te!==ge&&(i.activeTexture(ge),te=ge),i.bindTexture(L,he||K[L]),De.type=L,De.texture=he)}function R(){let L=le[te];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){Ve.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ve.copy(L))}function Ge(L){Qe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Qe.copy(L))}function ke(L,he){let ge=c.get(he);ge===void 0&&(ge=new WeakMap,c.set(he,ge));let De=ge.get(L);De===void 0&&(De=i.getUniformBlockIndex(he,L.name),ge.set(L,De))}function _e(L,he){let De=c.get(he).get(L);l.get(he)!==De&&(i.uniformBlockBinding(he,De,L.__bindingPointIndex),l.set(he,De))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,le={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,A=null,w=null,P=new ye(0,0,0),I=0,S=!1,b=null,C=null,U=null,G=null,V=null,Ve.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Se,bindFramebuffer:Ie,drawBuffers:Te,useProgram:ot,setBlending:ae,setMaterial:ne,setFlipSided:ee,setCullFace:Q,setLineWidth:ve,setPolygonOffset:ce,setScissorTest:xe,activeTexture:Xe,bindTexture:$e,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:Le,texImage3D:ue,updateUBOMapping:ke,uniformBlockBinding:_e,texStorage2D:fe,texStorage3D:Re,texSubImage2D:Y,texSubImage3D:re,compressedTexSubImage2D:J,compressedTexSubImage3D:Ce,scissor:Ee,viewport:Ge,reset:qe}}function u1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return d?new OffscreenCanvas(R,M):Ta("canvas")}function v(R,M,z){let Y=1,re=$e(R);if((re.width>z||re.height>z)&&(Y=z/Math.max(re.width,re.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let J=Math.floor(Y*re.width),Ce=Math.floor(Y*re.height);u===void 0&&(u=g(J,Ce));let fe=M?g(J,Ce):u;return fe.width=J,fe.height=Ce,fe.getContext("2d").drawImage(R,0,0,J,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+Ce+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,M,z,Y,re=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),M===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),M===i.RGBA){let Ce=re?Ea:ht.getTransfer(Y);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Ce===pt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(R,M){let z;return R?M===null||M===xs||M===ys?z=i.DEPTH24_STENCIL8:M===ri?z=i.DEPTH32F_STENCIL8:M===Wr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===xs||M===ys?z=i.DEPTH_COMPONENT24:M===ri?z=i.DEPTH_COMPONENT32F:M===Wr&&(z=i.DEPTH_COMPONENT16),z}function A(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){let M=R.target;M.removeEventListener("dispose",w),I(M),M.isVideoTexture&&h.delete(M)}function P(R){let M=R.target;M.removeEventListener("dispose",P),b(M)}function I(R){let M=n.get(R);if(M.__webglInit===void 0)return;let z=R.source,Y=f.get(z);if(Y){let re=Y[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(R),Object.keys(Y).length===0&&f.delete(z)}n.remove(R)}function S(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let z=R.source,Y=f.get(z);delete Y[M.__cacheKey],a.memory.textures--}function b(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let re=0;re<M.__webglFramebuffer[Y].length;re++)i.deleteFramebuffer(M.__webglFramebuffer[Y][re]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=R.textures;for(let Y=0,re=z.length;Y<re;Y++){let J=n.get(z[Y]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(z[Y])}n.remove(R)}let C=0;function U(){C=0}function G(){let R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function V(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function N(R,M){let z=n.get(R);if(R.isVideoTexture&&xe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,R,M);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function B(R,M){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){K(z,R,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Z(R,M){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){K(z,R,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function W(R,M){let z=n.get(R);if(R.version>0&&z.__version!==R.version){ie(z,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let te={[Wn]:i.REPEAT,[fs]:i.CLAMP_TO_EDGE,[nl]:i.MIRRORED_REPEAT},le={[nn]:i.NEAREST,[Bf]:i.NEAREST_MIPMAP_NEAREST,[eo]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[Zl]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},oe={[Hf]:i.NEVER,[qf]:i.ALWAYS,[Vf]:i.LESS,[Mu]:i.LEQUAL,[Gf]:i.EQUAL,[Xf]:i.GEQUAL,[$f]:i.GREATER,[Wf]:i.NOTEQUAL};function be(R,M){if(M.type===ri&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Zl||M.magFilter===eo||M.magFilter===wi||M.minFilter===Nn||M.minFilter===Zl||M.minFilter===eo||M.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,te[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,te[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,te[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,le[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,le[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===nn||M.minFilter!==eo&&M.minFilter!==wi||M.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ve(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));let Y=M.source,re=f.get(Y);re===void 0&&(re={},f.set(Y,re));let J=V(M);if(J!==R.__cacheKey){re[J]===void 0&&(re[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),re[J].usedTimes++;let Ce=re[R.__cacheKey];Ce!==void 0&&(re[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&S(M)),R.__cacheKey=J,R.__webglTexture=re[J].texture}return z}function Qe(R,M,z){return Math.floor(Math.floor(R/z)/M)}function nt(R,M,z,Y){let J=R.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,Y,M.data);else{J.sort((ue,Ee)=>ue.start-Ee.start);let Ce=0;for(let ue=1;ue<J.length;ue++){let Ee=J[Ce],Ge=J[ue],ke=Ee.start+Ee.count,_e=Qe(Ge.start,M.width,4),qe=Qe(Ee.start,M.width,4);Ge.start<=ke+1&&_e===qe&&Qe(Ge.start+Ge.count-1,M.width,4)===_e?Ee.count=Math.max(Ee.count,Ge.start+Ge.count-Ee.start):(++Ce,J[Ce]=Ge)}J.length=Ce+1;let fe=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ue=0,Ee=J.length;ue<Ee;ue++){let Ge=J[ue],ke=Math.floor(Ge.start/4),_e=Math.ceil(Ge.count/4),qe=ke%M.width,L=Math.floor(ke/M.width),he=_e,ge=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,qe,L,he,ge,z,Y,M.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function K(R,M,z){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);let re=Ve(R,M),J=M.source;t.bindTexture(Y,R.__webglTexture,i.TEXTURE0+z);let Ce=n.get(J);if(J.version!==Ce.__version||re===!0){t.activeTexture(i.TEXTURE0+z);let fe=ht.getPrimaries(ht.workingColorSpace),Re=M.colorSpace===Ji?null:ht.getPrimaries(M.colorSpace),Le=M.colorSpace===Ji||fe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ue=v(M.image,!1,s.maxTextureSize);ue=Xe(M,ue);let Ee=r.convert(M.format,M.colorSpace),Ge=r.convert(M.type),ke=y(M.internalFormat,Ee,Ge,M.colorSpace,M.isVideoTexture);be(Y,M);let _e,qe=M.mipmaps,L=M.isVideoTexture!==!0,he=Ce.__version===void 0||re===!0,ge=J.dataReady,De=A(M,ue);if(M.isDepthTexture)ke=_(M.format===_s,M.type),he&&(L?t.texStorage2D(i.TEXTURE_2D,1,ke,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ke,ue.width,ue.height,0,Ee,Ge,null));else if(M.isDataTexture)if(qe.length>0){L&&he&&t.texStorage2D(i.TEXTURE_2D,De,ke,qe[0].width,qe[0].height);for(let de=0,se=qe.length;de<se;de++)_e=qe[de],L?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,_e.width,_e.height,Ee,Ge,_e.data):t.texImage2D(i.TEXTURE_2D,de,ke,_e.width,_e.height,0,Ee,Ge,_e.data);M.generateMipmaps=!1}else L?(he&&t.texStorage2D(i.TEXTURE_2D,De,ke,ue.width,ue.height),ge&&nt(M,ue,Ee,Ge)):t.texImage2D(i.TEXTURE_2D,0,ke,ue.width,ue.height,0,Ee,Ge,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,ke,qe[0].width,qe[0].height,ue.depth);for(let de=0,se=qe.length;de<se;de++)if(_e=qe[de],M.format!==Rn)if(Ee!==null)if(L){if(ge)if(M.layerUpdates.size>0){let Fe=Cu(_e.width,_e.height,M.format,M.type);for(let Ke of M.layerUpdates){let Et=_e.data.subarray(Ke*Fe/_e.data.BYTES_PER_ELEMENT,(Ke+1)*Fe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,Ke,_e.width,_e.height,1,Ee,Et)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,ue.depth,Ee,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,ke,_e.width,_e.height,ue.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,ue.depth,Ee,Ge,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,ke,_e.width,_e.height,ue.depth,0,Ee,Ge,_e.data)}else{L&&he&&t.texStorage2D(i.TEXTURE_2D,De,ke,qe[0].width,qe[0].height);for(let de=0,se=qe.length;de<se;de++)_e=qe[de],M.format!==Rn?Ee!==null?L?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,_e.width,_e.height,Ee,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,de,ke,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,_e.width,_e.height,Ee,Ge,_e.data):t.texImage2D(i.TEXTURE_2D,de,ke,_e.width,_e.height,0,Ee,Ge,_e.data)}else if(M.isDataArrayTexture)if(L){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,ke,ue.width,ue.height,ue.depth),ge)if(M.layerUpdates.size>0){let de=Cu(ue.width,ue.height,M.format,M.type);for(let se of M.layerUpdates){let Fe=ue.data.subarray(se*de/ue.data.BYTES_PER_ELEMENT,(se+1)*de/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,ue.width,ue.height,1,Ee,Ge,Fe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Ge,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,ue.width,ue.height,ue.depth,0,Ee,Ge,ue.data);else if(M.isData3DTexture)L?(he&&t.texStorage3D(i.TEXTURE_3D,De,ke,ue.width,ue.height,ue.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Ge,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ke,ue.width,ue.height,ue.depth,0,Ee,Ge,ue.data);else if(M.isFramebufferTexture){if(he)if(L)t.texStorage2D(i.TEXTURE_2D,De,ke,ue.width,ue.height);else{let de=ue.width,se=ue.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,ke,de,se,0,Ee,Ge,null),de>>=1,se>>=1}}else if(qe.length>0){if(L&&he){let de=$e(qe[0]);t.texStorage2D(i.TEXTURE_2D,De,ke,de.width,de.height)}for(let de=0,se=qe.length;de<se;de++)_e=qe[de],L?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ee,Ge,_e):t.texImage2D(i.TEXTURE_2D,de,ke,Ee,Ge,_e);M.generateMipmaps=!1}else if(L){if(he){let de=$e(ue);t.texStorage2D(i.TEXTURE_2D,De,ke,de.width,de.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ge,ue)}else t.texImage2D(i.TEXTURE_2D,0,ke,Ee,Ge,ue);m(M)&&p(Y),Ce.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ie(R,M,z){if(M.image.length!==6)return;let Y=Ve(R,M),re=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let J=n.get(re);if(re.version!==J.__version||Y===!0){t.activeTexture(i.TEXTURE0+z);let Ce=ht.getPrimaries(ht.workingColorSpace),fe=M.colorSpace===Ji?null:ht.getPrimaries(M.colorSpace),Re=M.colorSpace===Ji||Ce===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Le=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let se=0;se<6;se++)!Le&&!ue?Ee[se]=v(M.image[se],!0,s.maxCubemapSize):Ee[se]=ue?M.image[se].image:M.image[se],Ee[se]=Xe(M,Ee[se]);let Ge=Ee[0],ke=r.convert(M.format,M.colorSpace),_e=r.convert(M.type),qe=y(M.internalFormat,ke,_e,M.colorSpace),L=M.isVideoTexture!==!0,he=J.__version===void 0||Y===!0,ge=re.dataReady,De=A(M,Ge);be(i.TEXTURE_CUBE_MAP,M);let de;if(Le){L&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,qe,Ge.width,Ge.height);for(let se=0;se<6;se++){de=Ee[se].mipmaps;for(let Fe=0;Fe<de.length;Fe++){let Ke=de[Fe];M.format!==Rn?ke!==null?L?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,Ke.width,Ke.height,ke,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,qe,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,Ke.width,Ke.height,ke,_e,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,qe,Ke.width,Ke.height,0,ke,_e,Ke.data)}}}else{if(de=M.mipmaps,L&&he){de.length>0&&De++;let se=$e(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,qe,se.width,se.height)}for(let se=0;se<6;se++)if(ue){L?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ee[se].width,Ee[se].height,ke,_e,Ee[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,Ee[se].width,Ee[se].height,0,ke,_e,Ee[se].data);for(let Fe=0;Fe<de.length;Fe++){let Et=de[Fe].image[se].image;L?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,Et.width,Et.height,ke,_e,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,qe,Et.width,Et.height,0,ke,_e,Et.data)}}else{L?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ke,_e,Ee[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,ke,_e,Ee[se]);for(let Fe=0;Fe<de.length;Fe++){let Ke=de[Fe];L?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,ke,_e,Ke.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,qe,ke,_e,Ke.image[se])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),J.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Se(R,M,z,Y,re,J){let Ce=r.convert(z.format,z.colorSpace),fe=r.convert(z.type),Re=y(z.internalFormat,Ce,fe,z.colorSpace),Le=n.get(M),ue=n.get(z);if(ue.__renderTarget=M,!Le.__hasExternalTextures){let Ee=Math.max(1,M.width>>J),Ge=Math.max(1,M.height>>J);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,J,Re,Ee,Ge,M.depth,0,Ce,fe,null):t.texImage2D(re,J,Re,Ee,Ge,0,Ce,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ce(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,re,ue.__webglTexture,0,ve(M)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,re,ue.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(R,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let Y=M.depthTexture,re=Y&&Y.isDepthTexture?Y.type:null,J=_(M.stencilBuffer,re),Ce=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=ve(M);ce(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,J,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,R)}else{let Y=M.textures;for(let re=0;re<Y.length;re++){let J=Y[re],Ce=r.convert(J.format,J.colorSpace),fe=r.convert(J.type),Re=y(J.internalFormat,Ce,fe,J.colorSpace),Le=ve(M);z&&ce(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Re,M.width,M.height):ce(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Re,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Re,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);let re=Y.__webglTexture,J=ve(M);if(M.depthTexture.format===Lr)ce(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(M.depthTexture.format===_s)ce(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ot(R){let M=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",re)};Y.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=Y}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Y=R.texture.mipmaps;Y&&Y.length>0?Te(M.__webglFramebuffer[0],R):Te(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ie(M.__webglDepthbuffer[Y],R,!1);else{let re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,J)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ie(M.__webglDepthbuffer,R,!1);else{let re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(R,M,z){let Y=n.get(R);M!==void 0&&Se(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ot(R)}function D(R){let M=R.texture,z=n.get(R),Y=n.get(M);R.addEventListener("dispose",P);let re=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ce=re.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let Re=0;Re<M.mipmaps.length;Re++)z.__webglFramebuffer[fe][Re]=i.createFramebuffer()}else z.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)z.__webglFramebuffer[fe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let fe=0,Re=re.length;fe<Re;fe++){let Le=n.get(re[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ce(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){let Re=re[fe];z.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);let Le=r.convert(Re.format,Re.colorSpace),ue=r.convert(Re.type),Ee=y(Re.internalFormat,Le,ue,Re.colorSpace,R.isXRRenderTarget===!0),Ge=ve(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Ee,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),be(i.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)Se(z.__webglFramebuffer[fe][Re],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re);else Se(z.__webglFramebuffer[fe],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Re=re.length;fe<Re;fe++){let Le=re[fe],ue=n.get(Le),Ee=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ue.__webglTexture),be(Ee,Le),Se(z.__webglFramebuffer,R,Le,i.COLOR_ATTACHMENT0+fe,Ee,0),m(Le)&&p(Ee)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),be(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)Se(z.__webglFramebuffer[Re],R,M,i.COLOR_ATTACHMENT0,fe,Re);else Se(z.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,fe,0);m(M)&&p(fe),t.unbindTexture()}R.depthBuffer&&ot(R)}function ae(R){let M=R.textures;for(let z=0,Y=M.length;z<Y;z++){let re=M[z];if(m(re)){let J=x(R),Ce=n.get(re).__webglTexture;t.bindTexture(J,Ce),p(J),t.unbindTexture()}}}let ne=[],ee=[];function Q(R){if(R.samples>0){if(ce(R)===!1){let M=R.textures,z=R.width,Y=R.height,re=i.COLOR_BUFFER_BIT,J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(R),fe=M.length>1;if(fe)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let Re=R.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Le]);let ue=n.get(M[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,re,i.NEAREST),l===!0&&(ne.length=0,ee.length=0,ne.push(i.COLOR_ATTACHMENT0+Le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ne.push(J),ee.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Le]);let ue=n.get(M[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ve(R){return Math.min(s.maxSamples,R.samples)}function ce(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xe(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Xe(R,M){let z=R.colorSpace,Y=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Vs&&z!==Ji&&(ht.getTransfer(z)===pt?(Y!==Rn||re!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function $e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=U,this.setTexture2D=N,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=mt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ce}function d1(i,e){function t(n,s=Ji){let r,a=ht.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===xs)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===xu)return i.ALPHA;if(n===yu)return i.RGB;if(n===Rn)return i.RGBA;if(n===Lr)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===_u)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===to||n===no||n===io||n===so)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===lc||n===cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===lc)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===vc||n===xc||n===yc||n===_c||n===Mc||n===bc||n===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===wc||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ec)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p1=`
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

}`,Vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _t({vertexShader:f1,fragmentShader:p1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends $i{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new Vu,p={},x=t.getContextAttributes(),y=null,_=null,A=[],w=[],P=new j,I=null,S=new xn;S.viewport=new xt;let b=new xn;b.viewport=new xt;let C=[S,b],U=new Pl,G=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=A[K];return ie===void 0&&(ie=new Or,A[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=A[K];return ie===void 0&&(ie=new Or,A[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=A[K];return ie===void 0&&(ie=new Or,A[K]=ie),ie.getHandSpace()};function N(K){let ie=w.indexOf(K.inputSource);if(ie===-1)return;let Se=A[ie];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||a),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<A.length;K++){let ie=w[K];ie!==null&&(w[K]=null,A[K].disconnect(ie))}G=null,V=null,m.reset();for(let K in p)delete p[K];e.setRenderTarget(y),d=null,f=null,u=null,s=null,_=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?_s:Lr,Ie=x.stencil?ys:xs);let ot={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ot),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Wt(f.textureWidth,f.textureHeight,{format:Rn,type:zn,depthTexture:new Xs(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Wt(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(K){for(let ie=0;ie<K.removed.length;ie++){let Se=K.removed[ie],Ie=w.indexOf(Se);Ie>=0&&(w[Ie]=null,A[Ie].disconnect(Se))}for(let ie=0;ie<K.added.length;ie++){let Se=K.added[ie],Ie=w.indexOf(Se);if(Ie===-1){for(let ot=0;ot<A.length;ot++)if(ot>=w.length){w.push(Se),Ie=ot;break}else if(w[ot]===null){w[ot]=Se,Ie=ot;break}if(Ie===-1)break}let Te=A[Ie];Te&&Te.connect(Se)}}let W=new T,te=new T;function le(K,ie,Se){W.setFromMatrixPosition(ie.matrixWorld),te.setFromMatrixPosition(Se.matrixWorld);let Ie=W.distanceTo(te),Te=ie.projectionMatrix.elements,ot=Se.projectionMatrix.elements,mt=Te[14]/(Te[10]-1),D=Te[14]/(Te[10]+1),ae=(Te[9]+1)/Te[5],ne=(Te[9]-1)/Te[5],ee=(Te[8]-1)/Te[0],Q=(ot[8]+1)/ot[0],ve=mt*ee,ce=mt*Q,xe=Ie/(-ee+Q),Xe=xe*-ee;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Xe),K.translateZ(xe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let $e=mt+xe,R=D+xe,M=ve-Xe,z=ce+(Ie-Xe),Y=ae*D/R*$e,re=ne*D/R*$e;K.projectionMatrix.makePerspective(M,z,Y,re,$e,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ie=K.near,Se=K.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),U.near=b.near=S.near=ie,U.far=b.far=S.far=Se,(G!==U.near||V!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,V=U.far),U.layers.mask=K.layers.mask|6,S.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;let Ie=K.parent,Te=U.cameras;oe(U,Ie);for(let ot=0;ot<Te.length;ot++)oe(Te[ot],Ie);Te.length===2?le(U,S,b):U.projectionMatrix.copy(S.projectionMatrix),be(K,U,Ie)};function be(K,ie,Se){Se===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ur*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return p[K]};let Ve=null;function Qe(K,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){let Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Ie=!1;Se.length!==U.cameras.length&&(U.cameras.length=0,Ie=!0);for(let D=0;D<Se.length;D++){let ae=Se[D],ne=null;if(d!==null)ne=d.getViewport(ae);else{let Q=u.getViewSubImage(f,ae);ne=Q.viewport,D===0&&(e.setRenderTargetTextures(_,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(_))}let ee=C[D];ee===void 0&&(ee=new xn,ee.layers.enable(D),ee.viewport=new xt,C[D]=ee),ee.matrix.fromArray(ae.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ne.x,ne.y,ne.width,ne.height),D===0&&(U.matrix.copy(ee.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ie===!0&&U.cameras.push(ee)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let D=u.getDepthInformation(Se[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Te&&Te.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<Se.length;D++){let ae=Se[D].camera;if(ae){let ne=p[ae];ne||(ne=new Ua,p[ae]=ne);let ee=u.getCameraImage(ae);ne.sourceTexture=ee}}}}for(let Se=0;Se<A.length;Se++){let Ie=w[Se],Te=A[Se];Ie!==null&&Te!==void 0&&Te.update(Ie,ie,c||a)}Ve&&Ve(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let nt=new Tp;nt.setAnimationLoop(Qe),this.setAnimationLoop=function(K){Ve=K},this.dispose=function(){}}},tr=new Fn,m1=new et;function g1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),y=x.envMap,_=x.envMapRotation;y&&(m.envMap.value=y,tr.copy(_),tr.x*=-1,tr.y*=-1,tr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.envMapRotation.value.setFromMatrix4(m1.makeRotationFromEuler(tr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v1(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){let _=y.program;n.uniformBlockBinding(x,_)}function c(x,y){let _=s[x.id];_===void 0&&(g(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));let A=y.program;n.updateUBOMapping(x,A);let w=e.render.frame;r[x.id]!==w&&(f(x),r[x.id]=w)}function h(x){let y=u();x.__bindingPointIndex=y;let _=i.createBuffer(),A=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let y=s[x.id],_=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,P=_.length;w<P;w++){let I=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,b=I.length;S<b;S++){let C=I[S];if(d(C,w,S,A)===!0){let U=C.__offset,G=Array.isArray(C.value)?C.value:[C.value],V=0;for(let N=0;N<G.length;N++){let B=G[N],Z=v(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,U+V,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,y,_,A){let w=x.value,P=y+"_"+_;if(A[P]===void 0)return typeof w=="number"||typeof w=="boolean"?A[P]=w:A[P]=w.clone(),!0;{let I=A[P];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[P]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(x){let y=x.uniforms,_=0,A=16;for(let P=0,I=y.length;P<I;P++){let S=Array.isArray(y[P])?y[P]:[y[P]];for(let b=0,C=S.length;b<C;b++){let U=S[b],G=Array.isArray(U.value)?U.value:[U.value];for(let V=0,N=G.length;V<N;V++){let B=G[V],Z=v(B),W=_%A,te=W%Z.boundary,le=W+te;_+=te,le!==0&&A-le<Z.storage&&(_+=A-le),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=Z.storage}}}let w=_%A;return w>0&&(_+=A-w),x.__size=_,x.__cache={},this}function v(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ms=class{constructor(e={}){let{canvas:t=Yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,A=!1;this._outputColorSpace=Ut;let w=0,P=0,I=null,S=-1,b=null,C=new xt,U=new xt,G=null,V=new ye(0),N=0,B=t.width,Z=t.height,W=1,te=null,le=null,oe=new xt(0,0,B,Z),be=new xt(0,0,B,Z),Ve=!1,Qe=new zr,nt=!1,K=!1,ie=new et,Se=new T,Ie=new xt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function mt(){return I===null?W:1}let D=n;function ae(E,k){return t.getContext(E,k)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Il}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",de,!1),D===null){let k="webgl2";if(D=ae(k,E),D===null)throw ae(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ne,ee,Q,ve,ce,xe,Xe,$e,R,M,z,Y,re,J,Ce,fe,Re,Le,ue,Ee,Ge,ke,_e,qe;function L(){ne=new Ny(D),ne.init(),ke=new d1(D,ne),ee=new Ry(D,ne,e,ke),Q=new h1(D,ne),ee.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),ve=new ky(D),ce=new j_,xe=new u1(D,ne,Q,ce,ee,ke,ve),Xe=new Py(_),$e=new Uy(_),R=new $g(D),_e=new Ty(D,R),M=new Fy(D,R,ve,_e),z=new zy(D,M,R,ve),ue=new Oy(D,ee,xe),fe=new Cy(ce),Y=new J_(_,Xe,$e,ne,ee,_e,fe),re=new g1(_,ce),J=new Q_,Ce=new r1(ne),Le=new wy(_,Xe,$e,Q,z,d,l),Re=new l1(_,z,ee),qe=new v1(D,ve,ee,Q),Ee=new Ay(D,ne,ve),Ge=new By(D,ne,ve),ve.programs=Y.programs,_.capabilities=ee,_.extensions=ne,_.properties=ce,_.renderLists=J,_.shadowMap=Re,_.state=Q,_.info=ve}L();let he=new Gu(_,D);this.xr=he,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(B,Z,!1))},this.getSize=function(E){return E.set(B,Z)},this.setSize=function(E,k,X=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,Z=k,t.width=Math.floor(E*W),t.height=Math.floor(k*W),X===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(B*W,Z*W).floor()},this.setDrawingBufferSize=function(E,k,X){B=E,Z=k,W=X,t.width=Math.floor(E*X),t.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,k,X,q){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,k,X,q),Q.viewport(C.copy(oe).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(be)},this.setScissor=function(E,k,X,q){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,k,X,q),Q.scissor(U.copy(be).multiplyScalar(W).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){Q.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,X=!0){let q=0;if(E){let O=!1;if(I!==null){let pe=I.texture.format;O=pe===nc||pe===tc||pe===ec}if(O){let pe=I.texture.type,we=pe===zn||pe===xs||pe===Wr||pe===ys||pe===jl||pe===Kl,Ne=Le.getClearColor(),Pe=Le.getClearAlpha(),We=Ne.r,Ye=Ne.g,ze=Ne.b;we?(g[0]=We,g[1]=Ye,g[2]=ze,g[3]=Pe,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=We,v[1]=Ye,v[2]=ze,v[3]=Pe,D.clearBufferiv(D.COLOR,0,v))}else q|=D.COLOR_BUFFER_BIT}k&&(q|=D.DEPTH_BUFFER_BIT),X&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Le.dispose(),J.dispose(),Ce.dispose(),ce.dispose(),Xe.dispose(),$e.dispose(),z.dispose(),_e.dispose(),qe.dispose(),Y.dispose(),he.dispose(),he.removeEventListener("sessionstart",ui),he.removeEventListener("sessionend",Pd),Ls.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let E=ve.autoReset,k=Re.enabled,X=Re.autoUpdate,q=Re.needsUpdate,O=Re.type;L(),ve.autoReset=E,Re.enabled=k,Re.autoUpdate=X,Re.needsUpdate=q,Re.type=O}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){let k=E.target;k.removeEventListener("dispose",se),Fe(k)}function Fe(E){Ke(E),ce.remove(E)}function Ke(E){let k=ce.get(E).programs;k!==void 0&&(k.forEach(function(X){Y.releaseProgram(X)}),E.isShaderMaterial&&Y.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,q,O,pe){k===null&&(k=Te);let we=O.isMesh&&O.matrixWorld.determinant()<0,Ne=v0(E,k,X,q,O);Q.setMaterial(q,we);let Pe=X.index,We=1;if(q.wireframe===!0){if(Pe=M.getWireframeAttribute(X),Pe===void 0)return;We=2}let Ye=X.drawRange,ze=X.attributes.position,ct=Ye.start*We,yt=(Ye.start+Ye.count)*We;pe!==null&&(ct=Math.max(ct,pe.start*We),yt=Math.min(yt,(pe.start+pe.count)*We)),Pe!==null?(ct=Math.max(ct,0),yt=Math.min(yt,Pe.count)):ze!=null&&(ct=Math.max(ct,0),yt=Math.min(yt,ze.count));let zt=yt-ct;if(zt<0||zt===1/0)return;_e.setup(O,q,Ne,X,Pe);let Tt,bt=Ee;if(Pe!==null&&(Tt=R.get(Pe),bt=Ge,bt.setIndex(Tt)),O.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*mt()),bt.setMode(D.LINES)):bt.setMode(D.TRIANGLES);else if(O.isLine){let He=q.linewidth;He===void 0&&(He=1),Q.setLineWidth(He*mt()),O.isLineSegments?bt.setMode(D.LINES):O.isLineLoop?bt.setMode(D.LINE_LOOP):bt.setMode(D.LINE_STRIP)}else O.isPoints?bt.setMode(D.POINTS):O.isSprite&&bt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))bt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let He=O._multiDrawStarts,Dt=O._multiDrawCounts,ut=O._multiDrawCount,Pn=Pe?R.get(Pe).bytesPerElement:1,pr=ce.get(q).currentProgram.getUniforms();for(let In=0;In<ut;In++)pr.setValue(D,"_gl_DrawID",In),bt.render(He[In]/Pn,Dt[In])}else if(O.isInstancedMesh)bt.renderInstances(ct,zt,O.count);else if(X.isInstancedBufferGeometry){let He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,He);bt.renderInstances(ct,zt,Dt)}else bt.render(ct,zt)};function Et(E,k,X){E.transparent===!0&&E.side===Pt&&E.forceSinglePass===!1?(E.side=Xt,E.needsUpdate=!0,Eo(E,k,X),E.side=Gi,E.needsUpdate=!0,Eo(E,k,X),E.side=Pt):Eo(E,k,X)}this.compile=function(E,k,X=null){X===null&&(X=E),p=Ce.get(X),p.init(k),y.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==X&&E.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let q=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let pe=O.material;if(pe)if(Array.isArray(pe))for(let we=0;we<pe.length;we++){let Ne=pe[we];Et(Ne,X,O),q.add(Ne)}else Et(pe,X,O),q.add(pe)}),p=y.pop(),q},this.compileAsync=function(E,k,X=null){let q=this.compile(E,k,X);return new Promise(O=>{function pe(){if(q.forEach(function(we){ce.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){O(E);return}setTimeout(pe,10)}ne.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let gt=null;function Ni(E){gt&&gt(E)}function ui(){Ls.stop()}function Pd(){Ls.start()}let Ls=new Tp;Ls.setAnimationLoop(Ni),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(E){gt=E,he.setAnimationLoop(E),E===null?Ls.stop():Ls.start()},he.addEventListener("sessionstart",ui),he.addEventListener("sessionend",Pd),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(k),k=he.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,k,I),p=Ce.get(E,y.length),p.init(k),y.push(p),ie.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Qe.setFromProjectionMatrix(ie,Qn,k.reversedDepth),K=this.localClippingEnabled,nt=fe.init(this.clippingPlanes,K),m=J.get(E,x.length),m.init(),x.push(m),he.enabled===!0&&he.isPresenting===!0){let pe=_.xr.getDepthSensingMesh();pe!==null&&_h(pe,k,-1/0,_.sortObjects)}_h(E,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(te,le),ot=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ot&&Le.addToRenderList(m,E),this.info.render.frame++,nt===!0&&fe.beginShadows();let X=p.state.shadowsArray;Re.render(X,E,k),nt===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,O=m.transmissive;if(p.setupLights(),k.isArrayCamera){let pe=k.cameras;if(O.length>0)for(let we=0,Ne=pe.length;we<Ne;we++){let Pe=pe[we];Dd(q,O,E,Pe)}ot&&Le.render(E);for(let we=0,Ne=pe.length;we<Ne;we++){let Pe=pe[we];Id(m,E,Pe,Pe.viewport)}}else O.length>0&&Dd(q,O,E,k),ot&&Le.render(E),Id(m,E,k);I!==null&&P===0&&(xe.updateMultisampleRenderTarget(I),xe.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(_,E,k),_e.resetDefaultState(),S=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],nt===!0&&fe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function _h(E,k,X,q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Qe.intersectsSprite(E)){q&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);let we=z.update(E),Ne=E.material;Ne.visible&&m.push(E,we,Ne,X,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Qe.intersectsObject(E))){let we=z.update(E),Ne=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ie.copy(we.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(ie)),Array.isArray(Ne)){let Pe=we.groups;for(let We=0,Ye=Pe.length;We<Ye;We++){let ze=Pe[We],ct=Ne[ze.materialIndex];ct&&ct.visible&&m.push(E,we,ct,X,Ie.z,ze)}}else Ne.visible&&m.push(E,we,Ne,X,Ie.z,null)}}let pe=E.children;for(let we=0,Ne=pe.length;we<Ne;we++)_h(pe[we],k,X,q)}function Id(E,k,X,q){let O=E.opaque,pe=E.transmissive,we=E.transparent;p.setupLightsView(X),nt===!0&&fe.setGlobalState(_.clippingPlanes,X),q&&Q.viewport(C.copy(q)),O.length>0&&So(O,k,X),pe.length>0&&So(pe,k,X),we.length>0&&So(we,k,X),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Dd(E,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Wt(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?bn:zn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let pe=p.state.transmissionRenderTarget[q.id],we=q.viewport||C;pe.setSize(we.z*_.transmissionResolutionScale,we.w*_.transmissionResolutionScale);let Ne=_.getRenderTarget(),Pe=_.getActiveCubeFace(),We=_.getActiveMipmapLevel();_.setRenderTarget(pe),_.getClearColor(V),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),ot&&Le.render(X);let Ye=_.toneMapping;_.toneMapping=Zi;let ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),nt===!0&&fe.setGlobalState(_.clippingPlanes,q),So(E,X,q),xe.updateMultisampleRenderTarget(pe),xe.updateRenderTargetMipmap(pe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let yt=0,zt=k.length;yt<zt;yt++){let Tt=k[yt],bt=Tt.object,He=Tt.geometry,Dt=Tt.material,ut=Tt.group;if(Dt.side===Pt&&bt.layers.test(q.layers)){let Pn=Dt.side;Dt.side=Xt,Dt.needsUpdate=!0,Ld(bt,X,q,He,Dt,ut),Dt.side=Pn,Dt.needsUpdate=!0,ct=!0}}ct===!0&&(xe.updateMultisampleRenderTarget(pe),xe.updateRenderTargetMipmap(pe))}_.setRenderTarget(Ne,Pe,We),_.setClearColor(V,N),ze!==void 0&&(q.viewport=ze),_.toneMapping=Ye}function So(E,k,X){let q=k.isScene===!0?k.overrideMaterial:null;for(let O=0,pe=E.length;O<pe;O++){let we=E[O],Ne=we.object,Pe=we.geometry,We=we.group,Ye=we.material;Ye.allowOverride===!0&&q!==null&&(Ye=q),Ne.layers.test(X.layers)&&Ld(Ne,k,X,Pe,Ye,We)}}function Ld(E,k,X,q,O,pe){E.onBeforeRender(_,k,X,q,O,pe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(_,k,X,q,E,pe),O.transparent===!0&&O.side===Pt&&O.forceSinglePass===!1?(O.side=Xt,O.needsUpdate=!0,_.renderBufferDirect(X,k,q,O,E,pe),O.side=Gi,O.needsUpdate=!0,_.renderBufferDirect(X,k,q,O,E,pe),O.side=Pt):_.renderBufferDirect(X,k,q,O,E,pe),E.onAfterRender(_,k,X,q,O,pe)}function Eo(E,k,X){k.isScene!==!0&&(k=Te);let q=ce.get(E),O=p.state.lights,pe=p.state.shadowsArray,we=O.state.version,Ne=Y.getParameters(E,O.state,pe,k,X),Pe=Y.getProgramCacheKey(Ne),We=q.programs;q.environment=E.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(E.isMeshStandardMaterial?$e:Xe).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",se),We=new Map,q.programs=We);let Ye=We.get(Pe);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===we)return Nd(E,Ne),Ye}else Ne.uniforms=Y.getUniforms(E),E.onBeforeCompile(Ne,_),Ye=Y.acquireProgram(Ne,Pe),We.set(Pe,Ye),q.uniforms=Ne.uniforms;let ze=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=fe.uniform),Nd(E,Ne),q.needsLights=y0(E),q.lightsStateVersion=we,q.needsLights&&(ze.ambientLightColor.value=O.state.ambient,ze.lightProbe.value=O.state.probe,ze.directionalLights.value=O.state.directional,ze.directionalLightShadows.value=O.state.directionalShadow,ze.spotLights.value=O.state.spot,ze.spotLightShadows.value=O.state.spotShadow,ze.rectAreaLights.value=O.state.rectArea,ze.ltc_1.value=O.state.rectAreaLTC1,ze.ltc_2.value=O.state.rectAreaLTC2,ze.pointLights.value=O.state.point,ze.pointLightShadows.value=O.state.pointShadow,ze.hemisphereLights.value=O.state.hemi,ze.directionalShadowMap.value=O.state.directionalShadowMap,ze.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ze.spotShadowMap.value=O.state.spotShadowMap,ze.spotLightMatrix.value=O.state.spotLightMatrix,ze.spotLightMap.value=O.state.spotLightMap,ze.pointShadowMap.value=O.state.pointShadowMap,ze.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Ye,q.uniformsList=null,Ye}function Ud(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Yr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Nd(E,k){let X=ce.get(E);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function v0(E,k,X,q,O){k.isScene!==!0&&(k=Te),xe.resetTextureUnits();let pe=k.fog,we=q.isMeshStandardMaterial?k.environment:null,Ne=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vs,Pe=(q.isMeshStandardMaterial?$e:Xe).get(q.envMap||we),We=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ye=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!X.morphAttributes.position,ct=!!X.morphAttributes.normal,yt=!!X.morphAttributes.color,zt=Zi;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(zt=_.toneMapping);let Tt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=Tt!==void 0?Tt.length:0,He=ce.get(q),Dt=p.state.lights;if(nt===!0&&(K===!0||E!==b)){let gn=E===b&&q.id===S;fe.setState(q,E,gn)}let ut=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Dt.state.version||He.outputColorSpace!==Ne||O.isBatchedMesh&&He.batching===!1||!O.isBatchedMesh&&He.batching===!0||O.isBatchedMesh&&He.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&He.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&He.instancing===!1||!O.isInstancedMesh&&He.instancing===!0||O.isSkinnedMesh&&He.skinning===!1||!O.isSkinnedMesh&&He.skinning===!0||O.isInstancedMesh&&He.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&He.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&He.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&He.instancingMorph===!1&&O.morphTexture!==null||He.envMap!==Pe||q.fog===!0&&He.fog!==pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==fe.numPlanes||He.numIntersection!==fe.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Ye||He.morphTargets!==ze||He.morphNormals!==ct||He.morphColors!==yt||He.toneMapping!==zt||He.morphTargetsCount!==bt)&&(ut=!0):(ut=!0,He.__version=q.version);let Pn=He.currentProgram;ut===!0&&(Pn=Eo(q,k,O));let pr=!1,In=!1,aa=!1,Lt=Pn.getUniforms(),Hn=He.uniforms;if(Q.useProgram(Pn.program)&&(pr=!0,In=!0,aa=!0),q.id!==S&&(S=q.id,In=!0),pr||b!==E){Q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Lt.setValue(D,"projectionMatrix",E.projectionMatrix),Lt.setValue(D,"viewMatrix",E.matrixWorldInverse);let An=Lt.map.cameraPosition;An!==void 0&&An.setValue(D,Se.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,In=!0,aa=!0)}if(O.isSkinnedMesh){Lt.setOptional(D,O,"bindMatrix"),Lt.setOptional(D,O,"bindMatrixInverse");let gn=O.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Lt.setValue(D,"boneTexture",gn.boneTexture,xe))}O.isBatchedMesh&&(Lt.setOptional(D,O,"batchingTexture"),Lt.setValue(D,"batchingTexture",O._matricesTexture,xe),Lt.setOptional(D,O,"batchingIdTexture"),Lt.setValue(D,"batchingIdTexture",O._indirectTexture,xe),Lt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Lt.setValue(D,"batchingColorTexture",O._colorsTexture,xe));let Vn=X.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ue.update(O,X,Pn),(In||He.receiveShadow!==O.receiveShadow)&&(He.receiveShadow=O.receiveShadow,Lt.setValue(D,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Hn.envMap.value=Pe,Hn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Hn.envMapIntensity.value=k.environmentIntensity),In&&(Lt.setValue(D,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&x0(Hn,aa),pe&&q.fog===!0&&re.refreshFogUniforms(Hn,pe),re.refreshMaterialUniforms(Hn,q,W,Z,p.state.transmissionRenderTarget[E.id]),Yr.upload(D,Ud(He),Hn,xe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Yr.upload(D,Ud(He),Hn,xe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Lt.setValue(D,"center",O.center),Lt.setValue(D,"modelViewMatrix",O.modelViewMatrix),Lt.setValue(D,"normalMatrix",O.normalMatrix),Lt.setValue(D,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let gn=q.uniformsGroups;for(let An=0,Mh=gn.length;An<Mh;An++){let Us=gn[An];qe.update(Us,Pn),qe.bind(Us,Pn)}}return Pn}function x0(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function y0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,k,X){let q=ce.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ce.get(E.texture).__webglTexture=k,ce.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let X=ce.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};let _0=D.createFramebuffer();this.setRenderTarget=function(E,k=0,X=0){I=E,w=k,P=X;let q=!0,O=null,pe=!1,we=!1;if(E){let Pe=ce.get(E);if(Pe.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Pe.__webglFramebuffer===void 0)xe.setupRenderTarget(E);else if(Pe.__hasExternalTextures)xe.rebindTextures(E,ce.get(E.texture).__webglTexture,ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ze=E.depthTexture;if(Pe.__boundDepthTexture!==ze){if(ze!==null&&ce.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(E)}}let We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);let Ye=ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?O=Ye[k][X]:O=Ye[k],pe=!0):E.samples>0&&xe.useMultisampledRTT(E)===!1?O=ce.get(E).__webglMultisampledFramebuffer:Array.isArray(Ye)?O=Ye[X]:O=Ye,C.copy(E.viewport),U.copy(E.scissor),G=E.scissorTest}else C.copy(oe).multiplyScalar(W).floor(),U.copy(be).multiplyScalar(W).floor(),G=Ve;if(X!==0&&(O=_0),Q.bindFramebuffer(D.FRAMEBUFFER,O)&&q&&Q.drawBuffers(E,O),Q.viewport(C),Q.scissor(U),Q.setScissorTest(G),pe){let Pe=ce.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,X)}else if(we){let Pe=k;for(let We=0;We<E.textures.length;We++){let Ye=ce.get(E.textures[We]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+We,Ye.__webglTexture,X,Pe)}}else if(E!==null&&X!==0){let Pe=ce.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pe.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(E,k,X,q,O,pe,we,Ne=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){Q.bindFramebuffer(D.FRAMEBUFFER,Pe);try{let We=E.textures[Ne],Ye=We.format,ze=We.type;if(!ee.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-q&&X>=0&&X<=E.height-O&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ne),D.readPixels(k,X,q,O,ke.convert(Ye),ke.convert(ze),pe))}finally{let We=I!==null?ce.get(I).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,k,X,q,O,pe,we,Ne=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe)if(k>=0&&k<=E.width-q&&X>=0&&X<=E.height-O){Q.bindFramebuffer(D.FRAMEBUFFER,Pe);let We=E.textures[Ne],Ye=We.format,ze=We.type;if(!ee.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ct),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ne),D.readPixels(k,X,q,O,ke.convert(Ye),ke.convert(ze),0);let yt=I!==null?ce.get(I).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,yt);let zt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zf(D,zt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ct),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(ct),D.deleteSync(zt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,X=0){let q=Math.pow(2,-X),O=Math.floor(E.image.width*q),pe=Math.floor(E.image.height*q),we=k!==null?k.x:0,Ne=k!==null?k.y:0;xe.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,we,Ne,O,pe),Q.unbindTexture()};let M0=D.createFramebuffer(),b0=D.createFramebuffer();this.copyTextureToTexture=function(E,k,X=null,q=null,O=0,pe=null){pe===null&&(O!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=O,O=0):pe=0);let we,Ne,Pe,We,Ye,ze,ct,yt,zt,Tt=E.isCompressedTexture?E.mipmaps[pe]:E.image;if(X!==null)we=X.max.x-X.min.x,Ne=X.max.y-X.min.y,Pe=X.isBox3?X.max.z-X.min.z:1,We=X.min.x,Ye=X.min.y,ze=X.isBox3?X.min.z:0;else{let Vn=Math.pow(2,-O);we=Math.floor(Tt.width*Vn),Ne=Math.floor(Tt.height*Vn),E.isDataArrayTexture?Pe=Tt.depth:E.isData3DTexture?Pe=Math.floor(Tt.depth*Vn):Pe=1,We=0,Ye=0,ze=0}q!==null?(ct=q.x,yt=q.y,zt=q.z):(ct=0,yt=0,zt=0);let bt=ke.convert(k.format),He=ke.convert(k.type),Dt;k.isData3DTexture?(xe.setTexture3D(k,0),Dt=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(xe.setTexture2DArray(k,0),Dt=D.TEXTURE_2D_ARRAY):(xe.setTexture2D(k,0),Dt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let ut=D.getParameter(D.UNPACK_ROW_LENGTH),Pn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pr=D.getParameter(D.UNPACK_SKIP_PIXELS),In=D.getParameter(D.UNPACK_SKIP_ROWS),aa=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);let Lt=E.isDataArrayTexture||E.isData3DTexture,Hn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Vn=ce.get(E),gn=ce.get(k),An=ce.get(Vn.__renderTarget),Mh=ce.get(gn.__renderTarget);Q.bindFramebuffer(D.READ_FRAMEBUFFER,An.__webglFramebuffer),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mh.__webglFramebuffer);for(let Us=0;Us<Pe;Us++)Lt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ce.get(E).__webglTexture,O,ze+Us),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ce.get(k).__webglTexture,pe,zt+Us)),D.blitFramebuffer(We,Ye,we,Ne,ct,yt,we,Ne,D.DEPTH_BUFFER_BIT,D.NEAREST);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||ce.has(E)){let Vn=ce.get(E),gn=ce.get(k);Q.bindFramebuffer(D.READ_FRAMEBUFFER,M0),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,b0);for(let An=0;An<Pe;An++)Lt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vn.__webglTexture,O,ze+An):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Vn.__webglTexture,O),Hn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,pe,zt+An):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,pe),O!==0?D.blitFramebuffer(We,Ye,we,Ne,ct,yt,we,Ne,D.COLOR_BUFFER_BIT,D.NEAREST):Hn?D.copyTexSubImage3D(Dt,pe,ct,yt,zt+An,We,Ye,we,Ne):D.copyTexSubImage2D(Dt,pe,ct,yt,We,Ye,we,Ne);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Hn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Dt,pe,ct,yt,zt,we,Ne,Pe,bt,He,Tt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Dt,pe,ct,yt,zt,we,Ne,Pe,bt,Tt.data):D.texSubImage3D(Dt,pe,ct,yt,zt,we,Ne,Pe,bt,He,Tt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,ct,yt,we,Ne,bt,He,Tt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,ct,yt,Tt.width,Tt.height,bt,Tt.data):D.texSubImage2D(D.TEXTURE_2D,pe,ct,yt,we,Ne,bt,He,Tt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pr),D.pixelStorei(D.UNPACK_SKIP_ROWS,In),D.pixelStorei(D.UNPACK_SKIP_IMAGES,aa),pe===0&&k.generateMipmaps&&D.generateMipmap(Dt),Q.unbindTexture()},this.initRenderTarget=function(E){ce.get(E).__webglFramebuffer===void 0&&xe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?xe.setTextureCube(E,0):E.isData3DTexture?xe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?xe.setTexture2DArray(E,0):xe.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){w=0,P=0,I=null,Q.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var ao=new T;function Xn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ao.copy(e),ao[n]=0,ao.normalize();let c=.5*a/(a+o),h=1-ao.angleTo(i)/l;return Math.sign(ao[t])===1?h*c:o/(a+o)+c+c*(1-h)}var bs=class i extends mi{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new T,c=new T,h=new T(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,v=new T,m=.5/a;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),d[x+0]=Xn(v,c,"z","y",r,n),d[x+1]=1-Xn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[x+0]=1-Xn(v,c,"z","y",r,n),d[x+1]=1-Xn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[x+0]=1-Xn(v,c,"x","z",r,e),d[x+1]=Xn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[x+0]=1-Xn(v,c,"x","z",r,e),d[x+1]=1-Xn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[x+0]=1-Xn(v,c,"x","y",r,e),d[x+1]=1-Xn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[x+0]=Xn(v,c,"x","y",r,e),d[x+1]=1-Xn(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Ip=`
varying vec3 world;
void main(){vec4 w=modelMatrix*vec4(position,1.);world=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}
`,Dp=`
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
`;var Ai={day:{label:"\u6674\u65E5",sky:"#b7d3dc",sun:"#fff2dc",power:3.2,position:[-10,30,18],hemi:"#fff3dc",ground:"#6f8e9e",ambient:.95,fill:"#b4d9ef",fillPower:1,environment:.32,exposure:.94,bloom:.08,threshold:1.2,windows:0,lamps:0,waterDeep:"#135c7d",waterShallow:"#3da8ad"},golden:{label:"\u6696\u9633\u508D\u665A",sky:"#dfbba9",sun:"#ffce91",power:3.1,position:[-18,12,12],hemi:"#ffe2bb",ground:"#7e858d",ambient:.75,fill:"#a9c7e9",fillPower:.7,environment:.25,exposure:.97,bloom:.14,threshold:1,windows:.35,lamps:1,waterDeep:"#405d78",waterShallow:"#96aaa3"},night:{label:"\u706F\u706B\u591C\u8272",sky:"#263954",sun:"#bacff5",power:1.05,position:[-12,24,8],hemi:"#95b4e6",ground:"#384b72",ambient:.48,fill:"#849ed6",fillPower:.45,environment:.12,exposure:1.05,bloom:.28,threshold:.85,windows:1.8,lamps:4,waterDeep:"#0b203f",waterShallow:"#23466d"}},ji=i=>Object.hasOwn(Ai,i)?i:"day";var Fc=new Map,Bc=new Map,Xu={value:0},Lp={value:0},Up={value:new T(28,30,36).normalize()},Wu="day";function Np(i){Wu=ji(i);let e=Ai[Wu];Lp.value=e.windows;for(let t of Bc.values())t.uniforms.deepColor.value.set(e.waterDeep),t.uniforms.shallowColor.value.set(e.waterShallow),t.uniforms.skyColor.value.set(e.sky),t.uniforms.sunColor.value.set(e.sun),t.uniforms.sunDirection.value.set(...e.position).normalize(),t.uniforms.lightPower.value=e.power}function oo(i){return i.emissive.set("#ffd391"),i.emissiveIntensity=1,i.onBeforeCompile=e=>{e.uniforms.windowLightGain=Lp,e.fragmentShader=`uniform float windowLightGain;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= windowLightGain;`)},i.customProgramCacheKey=()=>"warm-window-v1",i}function Fp(i="stone"){if(Fc.has(i))return Fc.get(i);let e=512,t=new Uint8Array(e*e*4),n=49191;for(let r=0;r<e;r++)for(let a=0;a<e;a++){n=Math.imul(n,1664525)+1013904223>>>0;let o=n/4294967296,l=.87+o*.13;if(i==="road"&&(l=.68+o*.28+(o>.985?.12:0)),i==="grass"&&(l=.65+o*.27+.06*Math.sin(a*.13)*Math.cos(r*.17)),i==="roof"){let h=r%64,u=(a+Math.floor(r/64)%2*32)%64;l=h<3||u<2?.52:.78+o*.19+.04*Math.sin(h/64*Math.PI)}if(i==="paving"){let h=(a+Math.floor(r/64)%2*64)%128,u=r%64;l=h<3||u<3?.61:.86+o*.14}let c=(a+r*e)*4;t[c]=t[c+1]=t[c+2]=Math.round(Math.min(1,l)*255),t[c+3]=255}let s=new vi(t,e,e);return s.wrapS=s.wrapT=Wn,s.generateMipmaps=!0,s.minFilter=wi,s.magFilter=Nn,s.anisotropy=16,s.needsUpdate=!0,Fc.set(i,s),s}function qu(i,e=!1){return i.onBeforeCompile=t=>{t.uniforms.landscapeWindTime=Xu,t.vertexShader=`uniform float landscapeWindTime;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float windAnchor=0.;
#ifdef USE_INSTANCING
windAnchor=instanceMatrix[3].x*.55+instanceMatrix[3].z*.35;
#else
windAnchor=modelMatrix[3].x*.55+modelMatrix[3].z*.35;
#endif
transformed.x+=sin(landscapeWindTime*1.2+windAnchor)*${e?"pow(max(position.y,0.),2.)*.4":"pow(max(position.y+1.,0.),2.)*.012"};`)},i.customProgramCacheKey=()=>e?"grass-wind-v1":"leaf-wind-v1",i}function Yu(i,e=.72,t=0){let n=["#86ad72","#97aa7b","#a9b484","#7c9a60"].includes(i),s=["#667b7b","#718784"].includes(i),r=["#e1cda5","#d7cab0","#c0b18a","#ebd69c","#ddd3ab"].includes(i),a=new Rt({color:i,roughness:e,metalness:t,clearcoat:e<.6?.25:.05,clearcoatRoughness:.45,envMapIntensity:.65});if(["#347447","#458b4e","#63a357","#7eb56a","#dba0b3","#e7b3c3","#f4cbd5","#f7dae0"].includes(i)&&qu(a),["#152019","#182c23","#201f18","#27311d","#1c291d"].includes(i)&&(a.roughness=.12,a.clearcoat=1,a.clearcoatRoughness=.08),["#ffe8a8","#ffe9a2","#fff4bd"].includes(i)&&(a.emissive=new ye("#ffc66d"),a.emissiveIntensity=.55),["#528b9c","#397b8c","#4f91a5"].includes(i)&&oo(a),n||s||r){let o=Fp(n?"grass":s?"road":"paving");a.map=o,a.bumpMap=o,a.bumpScale=s?.009:n?.014:.012,a.roughness=.88}return a}function Zu(i){let e=Yu(i,.68,0);return e.map=Fp("roof"),e.bumpMap=e.map,e.bumpScale=.027,e}function Ju(i=!1){if(Bc.has(i))return Bc.get(i);let e=Ai[Wu],t=new _t({name:i?"river-silk":"coastal-water",uniforms:{time:Xu,river:{value:i?1:0},deepColor:{value:new ye(e.waterDeep)},shallowColor:{value:new ye(e.waterShallow)},skyColor:{value:new ye(e.sky)},sunColor:{value:new ye(e.sun)},sunDirection:{value:new T(...e.position).normalize()},viewDirection:Up,lightPower:{value:e.power}},vertexShader:Ip,fragmentShader:Dp});return t.toneMapped=!0,Bc.set(i,t),t}function Bp(i,e){Xu.value=i,e&&e.getWorldDirection(Up.value).negate()}var kp=i=>[...Fc.values()].includes(i);var kc=new Map,Op=new Set;function Ct(i,e=.72,t=0){let n=`${i}:${e}:${t}`;return kc.has(n)||kc.set(n,Yu(i,e,t)),Op.add(kc.get(n)),kc.get(n)}var zp=new rn(1,48,36),Hp=new bs(1,1,1,2,.035),Ku=new Set([zp,Hp]),ju=new Map;function Be(i,e,t,n=[0,0,0],s=[1,1,1]){let r=new dt(e,typeof t=="string"?Ct(t):t);return r.position.set(...n),r.scale.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}var Ue=(i,e,t,n)=>Be(i,zp,e,t,n),$=(i,e,t,n)=>Be(i,Hp,e,t,n);function at(i,e,t,n,s,r,a=24){let o=[n,s,r,a].join(":");if(!ju.has(o)){let l=new yi(n,s,r,a);ju.set(o,l),Ku.add(l)}return Be(i,ju.get(o),e,t)}function tt(i,e,t,n=.025,s=24,r=8){return Be(i,new $a(new ms(t.map(a=>new T(...a))),s,n,r,!1),e)}function sr(i,{background:e="#fff1ce",color:t="#334d56",width:n=256,height:s=96}={}){let r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,n,s),a.strokeStyle=t,a.lineWidth=3,a.strokeRect(5,5,n-10,s-10),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=`bold ${Math.min(36,(n-20)/Math.max(1,i.length))}px "Microsoft YaHei",sans-serif`,a.fillText(i,n/2,s/2);let o=new ps(r);return o.colorSpace=Ut,o}function kt(i,e,t,n=1.2,s=.35,r={}){let a=new Vt({map:sr(e,r),side:Pt});return Be(i,new sn(n,s),a,t)}function En(i){let e=new Set,t=new Set;i.traverse(n=>{n.isInstancedMesh&&n.dispose(),n.geometry&&!Ku.has(n.geometry)&&n.geometry.dispose();for(let s of Array.isArray(n.material)?n.material:[n.material])if(s&&!Op.has(s)){e.add(s);for(let r of["map","bumpMap","normalMap","roughnessMap"])s[r]&&!kp(s[r])&&t.add(s[r])}});for(let n of t)n.dispose();for(let n of e)n.dispose()}function ai(i){i.updateMatrixWorld(!0);let e=i.matrixWorld.clone().invert(),t=new Map;i.traverse(n=>{let s=n;for(;s&&s!==i;){if(s.userData.dynamic)return;s=s.parent}if(n.isMesh&&!n.isInstancedMesh&&Ku.has(n.geometry)&&!n.material.map){let r=[n.geometry.uuid,n.material.uuid,n.castShadow,n.receiveShadow].join(":"),a=t.get(r)||[];a.push(n),t.set(r,a)}});for(let n of t.values()){if(n.length<3)continue;let s=n[0],r=new $s(s.geometry,s.material,n.length);r.castShadow=s.castShadow,r.receiveShadow=s.receiveShadow;for(let[a,o]of n.entries())r.setMatrixAt(a,new et().multiplyMatrices(e,o.matrixWorld)),o.parent.remove(o);r.computeBoundingSphere(),i.add(r)}return i}function Vp(i,e,t){let n=new me;n.name="hotel-bed-marquee",n.position.set(0,e,0),i.add(n);for(let r of[-.4,.4])$(n,"#9e8d73",[r,.15,0],[.045,.3,.055]);$(n,t,[0,.5,0],[1.36,.66,.17]),$(n,"#f6e8c5",[0,.5,0],[1.25,.55,.19]),$(n,"#466c72",[0,.5,0],[1.16,.47,.205]);let s=oo(new wt({color:"#fff0c1",roughness:.4}));for(let r of[-1,1]){let a=new me;a.rotation.y=r<0?Math.PI:0,n.add(a),$(a,s,[-.43,.46,.12],[.045,.32,.035]),$(a,s,[.43,.4,.12],[.045,.2,.035]),$(a,s,[0,.4,.12],[.88,.06,.035]),$(a,s,[.04,.48,.12],[.69,.12,.035]),Ue(a,s,[-.31,.5,.12],[.075,.065,.025])}return n}function Gp(i,e){let t=new me;t.name="research-dish",t.position.set(.1,e,-.1),i.add(t),at(t,"#738b90",[0,.07,0],.12,.16,.14,32),at(t,"#738b90",[0,.17,0],.045,.065,.16,24),Ue(t,"#738b90",[0,.22,0],[.065,.065,.065]);let n=new me;n.position.y=.22,n.rotation.x=-.5,t.add(n);let s=Array.from({length:41},(o,l)=>{let c=l/40*.32;return new j(c,.115*(c/.32)**2)}),r=Be(n,new Mi(s,96),new wt({color:"#e5e7d9",metalness:.3,roughness:.32,side:Pt}));r.name="parabolic-reflector";let a=Be(n,new Mn(.32,.012,12,96),Ct("#a6b7b7",.3,.6),[0,.115,0]);a.rotation.x=Math.PI/2;for(let o=0;o<3;o++){let l=o/3*Math.PI*2;tt(n,"#829a9d",[[Math.cos(l)*.29,.095,Math.sin(l)*.29],[0,.29,0]],.009,16,8)}return at(n,"#b8a575",[0,.28,0],.037,.047,.08,24),Ue(n,"#4c7d8c",[0,.32,0],[.034,.025,.034]),t}var x1=["#347447","#458b4e","#63a357","#7eb56a"],y1=["#edb4ba","#f2d578","#c9b8e7","#fff1d0"];function Qu(i,e,t,n=1,s=0){let r=new me,a=new me;at(r,"#855c3b",[0,.52,0],.075,.15,1.04,20);for(let o of[-1,1])tt(r,"#855c3b",[[0,.52,0],[o*.18,.89,.025],[o*.31,1.18,.05]],.04);for(let o=0;o<13;o++){let l=o*2.39996,c=o<3?.1:.38,h=1.24+o%4*.14,u=Ue(a,s%7===3?["#dba0b3","#e7b3c3","#f4cbd5","#f7dae0"][o%4]:x1[(o+s)%4],[Math.cos(l)*c,h,Math.sin(l)*c],[.33+o%3*.025,.39,.34]);u.rotation.z=l*.13}return r.add(a),r.position.set(e,.08,t),r.scale.setScalar(n),i.add(r),r}function $p(i){let e=new me;e.name="riverside-details",i.world.add(e);let t=91871,n=()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296),s=(f,d,g=2)=>i.tiles.every(v=>Math.hypot(v.x-f,v.z-d)>g&&Math.hypot(v.lotX-f,v.lotZ-d)>g);for(let f of[-1,1])for(let d=0;d<100;d++){let g=-15+d*.3,v=Math.sin(g*.21)*.8+f*(.73+n()*.35);if(!s(g,v,1.7))continue;let m=Ue(e,d%3?"#b8b4a0":"#ddd5b7",[g,.07,v],[.11+n()*.1,.06+n()*.05,.08+n()*.1]);if(m.rotation.y=n()*6.28,d%5===0)for(let p=0;p<5;p++){let x=at(e,"#607c43",[g+(p-2)*.07,.24,v],.012,.018,.38,8);x.rotation.z=(p-2)*.12}}for(let f=0;f<20;f++){let d=-13+n()*26,g=(n()>.5?1:-1)*(3.3+n()*4);s(d,g,2.2)&&Qu(e,d,g,.65+n()*.35,f)}for(let f=0;f<12;f++){let d=-12+n()*24,g=(n()>.5?1:-1)*(2.3+n()*3.7);if(!s(d,g,1.8))continue;let v=new me;$(v,"#c7b18a",[0,.085,0],[.78,.12,.55]),$(v,"#56774b",[0,.16,0],[.7,.07,.47]);for(let m=0;m<9;m++){let p=(m%3-1)*.19,x=(Math.floor(m/3)-1)*.15,y=.28+n()*.06;at(v,"#5b8744",[p,.22,x],.009,.009,.18,6);for(let _=0;_<5;_++){let A=_/5*Math.PI*2;Ue(v,y1[(f+m)%4],[p+Math.cos(A)*.047,y,x+Math.sin(A)*.047],[.04,.025,.04])}Ue(v,"#d6a83f",[p,y+.014,x],[.024,.018,.024])}v.position.set(d,0,g),e.add(v)}let r=new st;r.setAttribute("position",new Ae([-.026,0,0,.026,0,0,-.017,.16,0,.017,.16,0,.014,.29,0],3)),r.setIndex([0,1,2,1,3,2,2,3,4]),r.computeVertexNormals();let a=new $s(r,qu(new wt({color:"#71a15c",side:Pt,roughness:.9}),!0),1600),o=new et,l=new hn,c=new T,h=new T,u=0;for(let f=0;f<1e4&&u<1600;f++){let d=-16+n()*32,g=-10+n()*20;!s(d,g,2)||Math.abs(g-Math.sin(d*.21)*.8)<1.2||(c.set(d,.065,g),l.setFromAxisAngle(new T(0,1,0),n()*6.28),h.setScalar(.5+n()*.8),o.compose(c,l,h),a.setMatrixAt(u++,o))}return a.name="meadow-grass",a.count=u,a.receiveShadow=!0,a.castShadow=!1,a.computeBoundingSphere(),e.add(a),ai(e),e}function jr(i,e,t,n){let s=new me;s.name="architectural-details",i.add(s);let r=new Ft().setFromObject(i),a=r.max.y;if(["residence","tea","hotel","tower","mall"].includes(e)){for(let u of[-1,1])tt(s,"#b5a184",[[u*.76,.2,-.5],[u*.76,Math.max(.5,a-.35),-.5]],.018),$(s,"#a7b5b2",[u*.77,.18,-.5],[.08,.1,.08]);$(s,"#d4c4a2",[0,.14,.72],[.66,.1,.23]),$(s,"#ede2c2",[0,.09,.82],[.8,.08,.22]);let o=oo(new Rt({color:"#397b8c",metalness:.15,roughness:.12,clearcoat:1,envMapIntensity:1.2}));for(let u=0;u<Math.min(t,5);u++)for(let f of[-1,1]){let d=.58+u*.43;if($(s,"#f7edcf",[f*.38,d,.575],[.31,.29,.045]),$(s,o,[f*.38,d,.603],[.24,.22,.015]),$(s,"#b4a47d",[f*.38,d,.625],[.018,.23,.018]),$(s,"#fff0cc",[f*.38,d-.16,.62],[.37,.055,.1]),u===0||u===2){$(s,"#a78b68",[f*.38,d-.22,.66],[.3,.09,.16]);for(let g=0;g<3;g++)Ue(s,g%2?"#d79e97":"#76a65d",[f*.38+(g-1)*.08,d-.16,.67],[.06,.055,.05])}}let l=e==="mall"?1.62:e==="tower"?1.35:1.46,c=e==="mall"?1.2:1.02,h=e==="tea"?.65+t*.65:e==="hotel"?.55+t*.58:e==="mall"?.75+t*.5:e==="tower"?.8+t*.62:.64+t*.46;if(e==="tower"){$(s,o,[0,h/2+.12,-.515],[1.22,h-.12,.025]),$(s,o,[-.69,h/2+.12,0],[.025,h-.12,.88]);for(let u=.3;u<h;u+=.33)$(s,"#cbd7cf",[0,u,-.54],[1.4,.035,.04]),$(s,"#cbd7cf",[-.71,u,0],[.04,.035,1]);for(let u of[-.45,0,.45])$(s,"#cbd7cf",[u,h/2+.12,-.54],[.035,h,.035])}else for(let u=0;u<t;u++){let f=.5+(h-.72)*(u/Math.max(1,t-1));for(let d of[-l*.27,l*.27])$(s,"#f7edcf",[d,f,-c/2-.018],[.33,.29,.04]),$(s,o,[d,f,-c/2-.045],[.25,.22,.016]),$(s,"#b4a47d",[d,f,-c/2-.06],[.018,.23,.014]);for(let d of[-c*.26,c*.26])$(s,"#f7edcf",[-l/2-.018,f,d],[.04,.29,.29]),$(s,o,[-l/2-.045,f,d],[.016,.22,.22]);$(s,"#efe5cb",[0,f+.19,0],[l+.06,.04,c+.06])}}if(e==="research"){let o=.55+t*.25,l=Ct("#4f91a5",.18,.2);for(let c=0;c<Math.max(1,Math.floor(o/.4));c++)for(let h=0;h<10;h++){let u=h/10*Math.PI*2,f=.4+c*.35,d=.79-.06*(f-.12)/o,g=$(s,"#e9e4d2",[Math.sin(u)*(d+.015),f,Math.cos(u)*(d+.015)],[.29,.25,.035]);g.rotation.y=u;let v=$(s,l,[Math.sin(u)*(d+.039),f,Math.cos(u)*(d+.039)],[.23,.19,.016]);v.rotation.y=u}}if(["tower","hotel","mall","research"].includes(e)){let o={hotel:.55+t*.58+.15,research:.55+t*.25+.17,mall:.75+t*.5+.18,tower:.8+t*.62+.15}[e],l=new me;l.name="rooftop-service-unit",l.position.set(-.4,o+.13,-.35),s.add(l),$(l,"#b8bab0",[0,0,0],[.36,.19,.26]);for(let c=0;c<5;c++)$(l,"#667c7b",[-.13+c*.065,.102,0],[.022,.012,.22]);tt(s,"#9faaa3",[[.45,o+.03,-.4],[.45,o+.55,-.4]],.014)}return i}var _1=["tea","theater","factory","garden","hotel","tower"];function Wp(i){return i.buildingType&&Ht[i.buildingType]?Ht[i.buildingType].architecture:/茶|奶茶|奶盖/.test(i.name)?"tea":/剧|影|照相/.test(i.name)?"theater":/厂|工坊|面包/.test(i.name)?"factory":/花园|洗澡/.test(i.name)?"garden":/旅馆|公寓|食堂/.test(i.name)?"hotel":_1[i.group%6]}var Ss=Ct("#528b9c",.24,.25);var Ri="#fff1d1";function zc(i,e,t=1.35,n=.95){for(let s=0;s<e;s++){let r=.57+s*.43;for(let a of[-t*.27,t*.27])$(i,Ri,[a,r,n/2+.014],[.3,.3,.045]),$(i,Ss,[a,r,n/2+.042],[.23,.235,.02]),$(i,"#a7d1d2",[a-.055,r+.055,n/2+.055],[.04,.1,.012]);for(let a of[-n*.25,n*.25])$(i,Ss,[t/2+.018,r,a],[.025,.24,.2]),$(i,Ri,[t/2+.035,r-.15,a],[.06,.035,.27])}}function lo(i,e,t=1.65,n=1.2,s="#c96548"){let r=new ii;r.moveTo(-t/2,0),r.lineTo(0,.48),r.lineTo(t/2,0),r.closePath();let a=new qi(r,{depth:n,bevelEnabled:!1});Be(i,a,Zu(s),[0,e,-n/2]),$(i,s,[0,e+.48,0],[.08,.06,n+.07]);for(let o of[-1,1]){let l=[0,e+.486,-n/2,0,e+.486,n/2,o*t/2,e+.006,-n/2,o*t/2,e+.006,n/2],c=new st;c.setAttribute("position",new Ae(l,3)),c.setAttribute("uv",new Ae([0,0,0,2,2,0,2,2],2)),c.setIndex(o>0?[0,1,2,1,3,2]:[0,2,1,1,2,3]),c.computeVertexNormals(),Be(i,c,Zu(s))}for(let o=0;o<Math.ceil(n/.12);o++)at(i,s,[0,e+.515,-n/2+o*.12],.038,.038,.125,16).rotation.x=Math.PI/2}function ed(i,e,t,n=.7){return Qu(i,e,t,n)}function Oc(i,e,t=1.4){$(i,Ri,[0,e,.67],[t,.08,.4]);for(let n of[-t/2,t/2])$(i,"#526b6b",[n,e+.15,.8],[.025,.3,.025]);$(i,"#526b6b",[0,e+.3,.8],[t,.025,.025]);for(let n=-t/2;n<=t/2;n+=.16)$(i,"#526b6b",[n,e+.15,.8],[.018,.3,.018])}function rr(i,e,t="#d6bb76",n=!1){let s=new me;if(s.name=`property-${i.id}-${e}`,s.userData.architecture=Wp(i),s.userData.level=e,e===0){let l=Be(s,new sn(1.95,1.62),n?"#a9b484":"#97aa7b",[0,-.08,0]);l.rotation.x=-Math.PI/2,l.name="flat-ground",l.castShadow=!1;let c=[[-.975,-.81],[.975,-.81],[.975,.81],[-.975,.81]],h=[];for(let f=0;f<4;f++){let d=c[f],g=c[(f+1)%4],v=Math.hypot(g[0]-d[0],g[1]-d[1]);for(let m=0;m<v;m+=.27){let p=Math.min(m+.15,v);h.push(d[0]+(g[0]-d[0])*m/v,-.065,d[1]+(g[1]-d[1])*m/v,d[0]+(g[0]-d[0])*p/v,-.065,d[1]+(g[1]-d[1])*p/v)}}let u=new Ws(new st().setAttribute("position",new Ae(h,3)),new xi({color:n?t:"#fff2c4"}));return u.name="dashed-boundary",s.add(u),s.userData.vacant=!0,s}$(s,"#d7cab0",[0,.025,0],[1.95,.09,1.62]),$(s,t,[0,.09,.78],[1.95,.08,.1]);let r=Wp(i),a=e,o=n?"#"+new ye(t).lerp(new ye("#fff1d5"),.73).getHexString():null;if(s.userData.ownerColor=n?t:null,r==="residence"){let l=.64+e*.46;$(s,o||"#eddbb9",[0,l/2+.1,0],[1.46,l,1.02]),zc(s,e,1.46,1.02),$(s,"#775640",[0,.35,.56],[.29,.48,.07]),lo(s,l+.11,1.72,1.23,t);for(let c=1;c<e;c++)$(s,Ri,[0,.75+c*.46,0],[1.56,.055,1.1]);return e>=3&&Oc(s,1.2,1.55),kt(s,"\u5976\u5BB6\u4F4F\u5B85",[0,.96,.58],.96,.23,{background:"#56756a",color:"#fff4da"}),ai(jr(s,r,e,t))}if(r==="research"){let l=.55+e*.25;at(s,o||"#d8dccb",[0,l/2+.12,0],.73,.79,l,48);for(let h of[-.42,0,.42])$(s,Ss,[h,l*.65,.7],[.23,.25,.03]);at(s,t,[0,l+.17,0],.86,.86,.16,48);let c=Be(s,new rn(.56,40,24,0,Math.PI*2,0,Math.PI/2),"#89aab5",[0,l+.25,0]);c.scale.y=.75,Gp(s,l+.69);for(let h of[-.7,.7])$(s,"#526f94",[h,.34,-.1],[.28,.035,.8]);return kt(s,"\u7814 \u7A76 \u6240",[0,.66,.8],1.08,.28,{background:"#4c768c",color:"#fff5cf"}),ai(jr(s,r,e,t))}if(r==="gas"){for(let l of[-.72,.72])$(s,"#e9ddbf",[l,.82,0],[.085,1.5,.085]);$(s,t,[0,1.62,0],[1.9,.15,1.46]),$(s,Ri,[0,1.49,.76],[1.9,.12,.05]);for(let l of[-.45,.45])$(s,"#d6dacb",[l,.46,.05],[.3,.8,.31]),$(s,"#486c75",[l,.64,.22],[.24,.18,.025]),tt(s,"#3e4b45",[[l+.13,.67,.04],[l+.28,.54,.04],[l+.23,.19,.12],[l+.13,.35,.22]],.025);return kt(s,"\u5976 \u7F50 \u52A0 \u6CB9",[0,1.61,.77],1.65,.22,{background:t,color:"#fff6dd"}),ai(jr(s,r,e,t))}if(r==="mall"){let l=.75+e*.5;$(s,o||"#e0d2b4",[0,l/2+.1,0],[1.62,l,1.2]);for(let h=0;h<e;h++)$(s,Ss,[0,.51+h*.5,.625],[1.35,.31,.035]),$(s,Ri,[0,.73+h*.5,.64],[1.76,.06,.07]);$(s,t,[0,l+.18,0],[1.83,.18,1.4]);let c=$(s,"#e8c36b",[0,l+.52,0],[.5,.48,.3]);return Be(s,new Mn(.13,.025,8,24,Math.PI),"#84623f",[0,l+.8,0]),kt(s,"\u5976 \u5BB6 \u767E \u8D27",[0,1.01,.7],1.54,.3,{background:"#91615c",color:"#fff2c7"}),ai(jr(s,r,e,t))}if(r==="tea"){let l=.65+e*.65;$(s,o||"#e9cda1",[0,l/2+.08,0],[1.5,l,1.05]);for(let h=1;h<e;h++){for(let u of[-.37,.37])$(s,Ri,[u,.78+h*.65,.55],[.41,.39,.035]),$(s,Ss,[u,.78+h*.65,.575],[.33,.3,.025]);$(s,Ri,[0,1+h*.65,.04],[1.61,.07,1.12])}$(s,Ri,[0,.4,.55],[1.26,.58,.06]),$(s,Ss,[0,.4,.59],[1.15,.5,.035]),$(s,"#87654c",[0,.13,.63],[1.3,.12,.25]);for(let h=0;h<8;h++){let u=$(s,h%2?"#fff0d2":"#ba6a52",[-.66+h*.19,.88,.72],[.19,.08,.5]);u.rotation.x=.2,$(s,h%2?"#fff0d2":"#ba6a52",[-.66+h*.19,.8,.95],[.19,.13,.04])}lo(s,l+.08,1.72,1.23,n?t:"#5d8a80"),kt(s,i.buildingType==="chain"?"\u5976\u5BB6\u8FDE\u9501\u5E97":"\u5976\u8336\u5C0F\u94FA",[0,1.12,.57],1.12,.24,{background:"#527a6b",color:"#fff2cc"});let c=new me;at(c,"#e6b96f",[0,.23,0],.2,.15,.4),at(c,Ri,[0,.45,0],.22,.22,.05),tt(c,"#fff5d8",[[.04,.46,0],[.04,.73,-.05]],.026);for(let h=0;h<4;h++)Ue(c,"#624b3a",[-.11+h*.07,.1,.15],[.027,.027,.02]);c.position.set(.42,l+.52,0),s.add(c),e>=2&&(Oc(s,1.18,1.6),$(s,"#697c4c",[-.6,1.3,.65],[.25,.16,.22])),e>=3&&(Oc(s,1.83,1.6),Be(s,new Xi(.4,.2,12),"#bd6953",[-.48,l+.52,-.1]),$(s,"#8c785d",[-.48,l+.25,-.1],[.03,.65,.03]))}else if(r==="theater"){let l=.8+e*.45;$(s,o||"#b97561",[0,l/2+.1,0],[1.52,l,1.16]),$(s,"#f2d29c",[0,.55,.61],[1.35,.95,.07]);for(let h of[-.45,0,.45])$(s,"#4c6369",[h,.43,.67],[.32,.61,.035]);$(s,n?t:"#f1c451",[0,1.08,.79],[1.78,.3,.4]),kt(s,"\u5927 \u7B11 \u5267 \u573A",[0,1.09,1],1.65,.27,{background:"#833e43",color:"#ffdda1"});for(let h=0;h<9;h++)Ue(s,"#ffe9a2",[-.78+h*.195,1.24,1],[.035,.035,.035]);for(let h of[-.67,.67])$(s,"#dbc5a0",[h,l*.64,.65],[.17,l*.85,.12]),Ue(s,"#f5ce69",[h,l+.13,.54],[.14,.14,.13]);let c=Be(s,new Mn(.48,.1,10,32,Math.PI),n?t:"#f1c451",[0,l+.12,.03]);if(kt(s,"\u7B11",[0,l+.35,.15],.46,.46,{background:"#b95b53",color:"#fff1bb"}),e>=3)for(let h of[-.55,.55]){let u=at(s,"#4a5f69",[h,l+.3,-.35],.09,.09,.28);u.rotation.x=.45}}else if(r==="factory"){let l=.62+e*.35;$(s,o||"#c68860",[0,l/2+.1,0],[1.6,l,1.1]),$(s,"#53616c",[0,.45,.57],[.74,.63,.035]);for(let c=.2;c<.75;c+=.08)$(s,"#8b9d9e",[0,c,.6],[.69,.025,.025]);zc(s,Math.max(1,e-1),1.6,1.1),lo(s,l+.1,1.82,1.25,n?t:"#5c7886");for(let c=0;c<Math.min(e,2);c++){let h=.46-c*.32;at(s,"#ac6554",[h,l+.5,-.37],.12,.17,1.25);for(let u=l+.2;u<l+1.1;u+=.28)at(s,"#e0bc91",[h,u,-.37],.13,.13,.045)}kt(s,"\u5976\u5757\u5DE5\u574A",[0,1,.6],1.03,.24,{background:"#526d73",color:"#fff0c5"});for(let[c,h]of[[-.67,.76],[.57,.79]])$(s,"#c19a62",[c,.2,h],[.25,.3,.25]),$(s,"#edd5a4",[c,.2,h+.131],[.03,.29,.02]);s.userData.smoke=!0}else if(r==="garden"){$(s,"#7c9a60",[0,.12,0],[1.82,.1,1.45]),$(s,"#ddd3ab",[0,.18,0],[.4,.025,1.45]);for(let l of[-.62,.62]){$(s,"#dfc394",[l,.24,.4],[.46,.25,.35]);for(let c=0;c<4;c++)Ue(s,["#e7ad8c","#fff0c9","#d97f6e"][c%3],[l-.15+c*.1,.42,.4],[.07,.09,.07])}if(e===1)ed(s,-.45,-.38,.7),ed(s,.5,-.3,.55);else{for(let l of[-.65,.65])for(let c of[-.45,.35])$(s,"#e3cf9f",[l,.68,c],[.07,1.1,.07]);for(let l=-.8;l<=.8;l+=.18)$(s,n?t:"#b7c88a",[l,1.22,-.06],[.09,.06,1.1]);for(let l=0;l<5;l++)Ue(s,"#5f8955",[-.65+l*.3,1.25,-.35],[.23,.09,.2]);if(e>=3){let l=Be(s,new Xi(.86,.4,4),n?t:"#537c69",[0,1.53,-.05]);l.rotation.y=Math.PI/4,at(s,"#b5d2ce",[0,.38,-.1],.37,.37,.18),at(s,"#d7dbb1",[0,.43,-.1],.43,.43,.05)}if(e>=4){$(s,n?t:"#7fa37f",[0,1.73,-.05],[1.36,.12,.96]);for(let c of[-.48,.48])for(let h of[-.35,.25])at(s,"#e8d7ac",[c,2.06,h],.035,.045,.6);let l=Be(s,new Xi(.76,.34,4),n?t:"#618b73",[0,2.5,-.05]);l.rotation.y=Math.PI/4}e===5&&(at(s,"#b5c6b2",[0,2.82,-.05],.23,.3,.26),Ue(s,"#edca72",[0,3.03,-.05],[.16,.18,.16]))}kt(s,"\u5976\u5BB6\u82B1\u56ED",[0,.49,.77],.75,.2,{background:"#426b54",color:"#fff1ce"})}else if(r==="hotel"){let l=.55+e*.58;$(s,o||"#eed9b4",[0,l/2+.1,0],[1.45,l,1.02]),zc(s,e+1,1.45,1.02),$(s,"#865a50",[0,.32,.55],[.32,.45,.06]);for(let c=1;c<=e;c++)Oc(s,.3+c*.43,1.55);$(s,n?t:"#aa5a4b",[0,l+.15,0],[1.68,.12,1.23]),Vp(s,l+.24,n?t:"#aa5a4b"),kt(s,"\u5976 \u5BB6 \u65C5 \u9986",[0,.86,.84],1.22,.24,{background:"#a65245",color:"#fff3ca"}),e>=3&&(at(s,"#6096a0",[.45,l+.4,-.3],.22,.22,.4),$(s,"#e4d7b5",[.45,l+.62,-.3],[.55,.07,.55]))}else{let l=.8+e*.62;$(s,o||"#d6d5c1",[0,l/2+.1,0],[1.35,l,1]),$(s,Ss,[0,l/2+.12,.51],[1.22,l-.12,.02]),$(s,Ss,[.69,l/2+.12,0],[.025,l-.12,.88]);for(let c=.3;c<l;c+=.33)$(s,"#cbd7cf",[0,c,.535],[1.4,.035,.04]),$(s,"#cbd7cf",[.71,c,0],[.04,.035,1]);for(let c of[-.45,0,.45])$(s,"#cbd7cf",[c,l/2+.12,.54],[.035,l,.035]);$(s,n?t:"#dae4d5",[0,l+.15,0],[1.53,.15,1.14]),$(s,n?t:"#4d6574",[.2,l+.4,-.1],[.7,.35,.7]),tt(s,"#70868a",[[.3,l+.5,-.1],[.3,l+1,-.1]],.018),kt(s,"\u5976\u5E01\u4E2D\u5FC3",[0,.48,.57],.9,.25,{background:"#486e7f",color:"#fff0c0"})}return ai(jr(s,r,e,t))}function Xp(i){let e=new me;e.name=`landmark-${i.kind}`,$(e,"#d7c8a7",[0,.07,0],[2,.15,1.72]);let t=1.25;if(i.kind==="bank"){$(e,"#e5d3ae",[0,.72,-.15],[1.58,1.28,1.06]);for(let s of[-.6,-.2,.2,.6])at(e,"#fff0ce",[s,.78,.62],.08,.1,1.1),$(e,"#b7b293",[s,.24,.62],[.23,.12,.24]);let n=Be(e,new Xi(1,.42,3),"#d4b882",[0,1.6,.38]);n.rotation.y=Math.PI/2,$(e,"#b5a278",[0,.17,.54],[1.94,.1,.75]),kt(e,"\u5976 \u5E01 \u94F6 \u884C",[0,1.25,.74],1.3,.25,{background:"#456779",color:"#fff0c2"}),Ue(e,"#dbb45d",[0,1.66,.65],[.16,.16,.08])}else if(i.kind==="hospital")$(e,"#e5e3cf",[0,.75,0],[1.7,1.4,1.13]),zc(e,2,1.7,1.13),$(e,"#c0cdcb",[0,1.5,0],[1.9,.12,1.3]),$(e,"#cb6056",[0,1.85,0],[.18,.65,.09]),$(e,"#cb6056",[0,1.85,.01],[.57,.18,.1]),$(e,"#507b85",[0,.35,.62],[.6,.5,.08]),$(e,"#7ba8a8",[0,.67,.77],[1.02,.08,.5]),kt(e,"\u5976\u86D9\u7597\u517B\u9662",[0,1.19,.59],1.45,.25,{background:"#fff1d3",color:"#8c4b49"});else if(i.kind==="stock"){let n=rr({...i,name:"\u8BC1\u5238\u6240",group:5},3,"#7a9cac");e.add(n),kt(e,"\u5976\u5BB6\u8BC1\u5238\u6240",[0,1.4,.56],1.2,.32,{background:"#344f67",color:"#f7dc84"})}else if(i.kind==="shop"){let n=rr({...i,name:"\u5976\u8336\u5E97",group:0},1,"#d1aa6e");e.add(n),kt(e,"\u5976\u4F34\u8865\u7ED9\u7AD9",[0,1.12,.59],1.25,.25,{background:"#bd6b4b",color:"#fff3ce"})}else if(i.kind==="spirit"){for(let s=0;s<3;s++)$(e,"#b3a07c",[0,.13+s*.09,0],[1.95-s*.23,.1,1.6-s*.18]);for(let s of[-.55,.55])for(let r of[-.35,.35])at(e,"#b14c37",[s,.85,r],.07,.07,1.1);let n=Be(e,new Xi(1.12,.5,4),"#557f6b",[0,1.55,0]);n.rotation.y=Math.PI/4,Ue(e,"#dfbb5c",[0,1.88,0],[.1,.15,.1]),kt(e,"\u5927\u7B11\u795E\u6BBF",[0,1.13,.42],.9,.28,{background:"#8e3d30",color:"#ffe49c"})}else if(i.kind==="event"){at(e,"#bb967a",[0,.2,0],.85,.9,.27);for(let s of[-.65,.65])$(e,"#4b5f67",[s,.9,-.35],[.07,1.5,.07]),$(e,"#4b5f67",[s,.55,.4],[.3,.7,.28]);$(e,"#4b5f67",[0,1.6,-.35],[1.35,.06,.06]);let n=kt(e,i.id===33?"\u5976\u86D9\u8857\u821E":"\u8868\u60C5\u5305\u5E7F\u573A",[0,1.18,-.3],1.15,.56,{background:"#b75a5d",color:"#ffe9bd"});e.userData.stage=!0}else if(i.kind==="rest")e.add(rr({...i,name:"\u5C0F\u65C5\u9986",group:4},1,"#84aa7a")),lo(e,1.35,1.85,1.3,"#698b68"),kt(e,"\u5976\u86D9\u7684\u5C0F\u7A9D",[0,1.15,.8],1.1,.24,{background:"#6e875a",color:"#fff0cb"});else if(i.kind==="tax"){$(e,"#b9cbc3",[0,.65,0],[1.4,1.1,1.05]),lo(e,1.2,1.6,1.2,"#778d7a");for(let n of[-.4,.2])at(e,"#78999b",[n,.4,.7],.16,.16,.6);kt(e,"\u6E05\u6D01\u7AD9",[0,.88,.56],1,.28,{background:"#6a8575",color:"#fff1ce"})}else if(i.kind==="start"){for(let n of[-.75,.75])at(e,"#c4ae7d",[n,.8,0],.12,.16,1.4),Ue(e,"#e5bd4f",[n,1.6,0],[.2,.2,.2]);$(e,"#456b70",[0,1.45,0],[1.9,.4,.22]),kt(e,"\u5976 \u5BB6 \u8D77 \u70B9",[0,1.46,.13],1.7,.3,{background:"#456b70",color:"#fff1ce"});for(let n of[-.6,-.2,.2,.6])$(e,"#f4e5bd",[n,.17,.6],[.2,.03,.5])}return ai(e)}function qp(i,e,t,n=1){let s=new me;return ed(s,0,0,n),s.position.set(e,.12,t),i.add(s),s}function Es(i,{min:e=[-1,0,-1.4],max:t=[1,2.6,1.4],steps:n=[40,52,52],blend:s=.13,cuts:r=[],cutField:a=null}={}){let o=(I,S,b)=>{let C=1e6;for(let[U,G,V,N,B,Z]of i){let W=(Math.hypot((I-U)/N,(S-G)/B,(b-V)/Z)-1)*Math.min(N,B,Z),te=Math.max(0,s-Math.abs(C-W))/s;C=Math.min(C,W)-te*te*s*.25}for(let[U,G,V,N,B,Z]of r){let W=(Math.hypot((I-U)/N,(S-G)/B,(b-V)/Z)-1)*Math.min(N,B,Z);C=Math.max(C,-W)}return a?Math.max(C,-a(I,S,b)):C},[l,c,h]=n,u=(t[0]-e[0])/l,f=(t[1]-e[1])/c,d=(t[2]-e[2])/h,g=(I,S,b)=>I+(l+1)*(S+(c+1)*b),v=new Float32Array((l+1)*(c+1)*(h+1));for(let I=0;I<=h;I++)for(let S=0;S<=c;S++)for(let b=0;b<=l;b++)v[g(b,S,I)]=o(e[0]+b*u,e[1]+S*f,e[2]+I*d);let m=[],p=[],x=new Map,y=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],_=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]];for(let I=0;I<h;I++)for(let S=0;S<c;S++)for(let b=0;b<l;b++){let C=y.map(V=>g(b+V[0],S+V[1],I+V[2]));if(C.every(V=>v[V]>=0)||C.every(V=>v[V]<0))continue;let U=(V,N)=>{let B=C[V],Z=C[N],W=Math.min(B,Z)+":"+Math.max(B,Z);if(x.has(W))return x.get(W);let te=v[B]/(v[B]-v[Z]),le=y[V],oe=y[N],be=m.length/3;return m.push(e[0]+(b+le[0]+te*(oe[0]-le[0]))*u,e[1]+(S+le[1]+te*(oe[1]-le[1]))*f,e[2]+(I+le[2]+te*(oe[2]-le[2]))*d),x.set(W,be),be},G=(V,N,B)=>{let Z=new T().fromArray(m,V*3),W=new T().fromArray(m,N*3),te=new T().fromArray(m,B*3),le=W.clone().sub(Z).cross(te.clone().sub(Z)),oe=Z.clone().add(W).add(te).multiplyScalar(1/3),be=.003,Ve=new T(o(oe.x+be,oe.y,oe.z)-o(oe.x-be,oe.y,oe.z),o(oe.x,oe.y+be,oe.z)-o(oe.x,oe.y-be,oe.z),o(oe.x,oe.y,oe.z+be)-o(oe.x,oe.y,oe.z-be));le.dot(Ve)<0?p.push(V,B,N):p.push(V,N,B)};for(let V of _){let N=V.filter(Z=>v[C[Z]]<0),B=V.filter(Z=>v[C[Z]]>=0);if(N.length===1)G(...B.map(Z=>U(N[0],Z)));else if(N.length===3)G(...N.map(Z=>U(Z,B[0])));else if(N.length===2){let[Z,W]=N,[te,le]=B,oe=U(Z,te),be=U(Z,le),Ve=U(W,te),Qe=U(W,le);G(oe,be,Ve),G(be,Qe,Ve)}}}let A=new st;A.setAttribute("position",new Ae(m,3)),A.setIndex(p);let w=[],P=.002;for(let I=0;I<m.length;I+=3){let S=m[I],b=m[I+1],C=m[I+2],U=new T(o(S+P,b,C)-o(S-P,b,C),o(S,b+P,C)-o(S,b-P,C),o(S,b,C+P)-o(S,b,C-P)).normalize();w.push(U.x,U.y,U.z)}return A.setAttribute("normal",new Ae(w,3)),A.userData.smoothFieldNormals=!0,A}function Ki(i,{y:e=2.3,z:t=.4,width:n=.31,height:s=.34,sculpted:r=!1,lipRadius:a=null,lipColor:o=null,archedTeeth:l=!1}={}){let c=new me;c.position.set(0,e,t),i.add(c),c.name="laugh-face";let h=new ii;h.moveTo(-n,.075),h.bezierCurveTo(-n*.6,.01,n*.6,.01,n,.075),h.bezierCurveTo(n*.94,-s*.85,n*.55,-s,0,-s),h.bezierCurveTo(-n*.55,-s,-n*.94,-s*.85,-n,.075);let u=Ct("#301b14",.84),f=r?Be(c,new rn(1,48,32,Math.PI,Math.PI),new wt({color:"#26140e",roughness:.9,side:Xt}),[0,-s*.43,0],[n,s*.56,.23]):Be(c,new qi(h,{depth:.025,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:4,curveSegments:32}),u,[0,0,0]);f.name="mouth-cavity";let d=tt(c,o||(r?"#d0aa39":"#a27629"),r?Array.from({length:33},(m,p)=>{let x=p/32*Math.PI*2;return[Math.cos(x)*n,-s*.43+Math.sin(x)*s*.56,.006]}):[[-n,.075,.018],[-n*.85,-s*.5,.016],[0,-s,.018],[n*.85,-s*.5,.016],[n,.075,.018]],a??(r?.009:.014),96,12),g=new me;c.add(g),g.name="upper-teeth";for(let m=0;m<8;m++){let p=(m-3.5)*n*.215,x=l?-s*.43+Math.sqrt(1-(p/n)**2)*s*.56-.022:r?.014-.028*(Math.abs(m-3.5)/3.5)**2:.035+.036*(Math.abs(m-3.5)/3.5)**2,y=new dt(new bs(n*.22,.043,.025,3,.008),Ct("#fff7de",.38));y.position.set(p,x,r?.025:.043),y.rotation.z=(m-3.5)*.032,g.add(y)}let v=new me;v.name="laugh-jaw",c.add(v);for(let m=0;m<6;m++){let p=(m-2.5)*n*.215,x=-s+.045+.048*(Math.abs(m-2.5)/2.5)**2;Ue(v,"#f9eccc",[p,x,.036],[n*.115,.027,.022])}return Ue(v,"#bc7d6f",[0,-s*.72,.042],[n*.43,.046,.022]),c.visible=!1,c.userData={jaw:v,cavity:f,rim:d,height:s,sculpted:r},c}function td(i,e,t=1){let n=i.userData;if(!n?.jaw)return;let s=Math.sin(e*10.5),r=n.sculpted?.98+.035*s*t:.92+.14*s*t;i.scale.set(n.fixedAperture?1:1+Math.sin(e*5.25)*.025*t,n.fixedAperture?1:r,1),n.jaw.position.y=-.012*(1+s)*t,n.jaw.rotation.x=.12*s*t}var Yp=new Map;function Hc(i,e,{width:t=.34,height:n=.5,cacheKey:s=null}={}){let o=-n-.07,l=.13,c=Yp.get(s)||[];if(!c.length){for(let d=0;d<=12;d++)for(let g=0;g<=9;g++)c.push(e(i.position.x-t+g/9*t*2,i.position.y+o+d/12*(l-o)));s&&Yp.set(s,c)}let h=(d,g)=>{let v=Math.max(0,Math.min(8.9999,(d+t)/(t*2)*9)),m=Math.max(0,Math.min(12-1e-4,(g-o)/(l-o)*12)),p=Math.floor(v),x=Math.floor(m),y=c[p+x*10],_=c[p+1+x*10],A=c[p+(x+1)*10],w=c[p+1+(x+1)*10];return St.lerp(St.lerp(y,_,v-p),St.lerp(A,w,v-p),m-x)};i.updateMatrixWorld(!0);let u=i.matrixWorld.clone().invert(),f=new T;i.traverse(d=>{if(!d.isMesh)return;let g=new et().multiplyMatrices(u,d.matrixWorld),v=g.clone().invert();d.geometry=d.geometry.clone();let m=d.geometry.attributes.position;for(let p=0;p<m.count;p++)f.fromBufferAttribute(m,p).applyMatrix4(g),f.z+=h(f.x,f.y)-i.position.z+.012,f.applyMatrix4(v),m.setXYZ(p,f.x,f.y,f.z);m.needsUpdate=!0,d.geometry.computeVertexNormals(),d.geometry.computeBoundingSphere(),d.castShadow=!1}),i.userData.conformed=!0}function Zp(i,{y:e,z:t,x:n=.22,size:s=.13,human:r=!1}){let a=[],o=[];for(let l of[-1,1]){let c=new me;c.position.set(l*n,e,t),i.add(c),Ue(c,r?"#fff8e7":"#a1b762",[0,0,0],[s,s*1.15,.044]),Ue(c,r?"#64412d":"#7c9d42",[0,-.008,.032],[s*.7,s*.9,.025]),Ue(c,"#201f18",[0,-.005,.05],[s*.42,s*.7,.017]),Ue(c,"#fffdeb",[-.026,.035,.066],[.017,.022,.008]),a.push(c);let h=tt(i,"#62432d",[[l*n-s,e,t+.06],[l*n,e+.045,t+.08],[l*n+s,e,t+.06]],.014);h.visible=!1,o.push(h),r&&tt(i,"#523326",[[l*n-s,e+.17,t-.02],[l*n,e+.21,t],[l*n+s,e+.17,t-.02]],.018)}return{eyes:a,lids:o}}function Jp(){let i=new me,e=new me;i.name="naidan",i.add(e),e.name="body";let t=new _i([[0,.07],[.52,.16],[.88,.48],[1.02,.94],[.98,1.45],[.7,1.88],[.35,2.06],[0,2.1]].map(l=>new j(...l))).getPoints(100),n=new Mi(t,112);n.scale(1,1,.91),Be(e,n,new Rt({color:"#f5d052",roughness:.4,clearcoat:.25}));let{eyes:s,lids:r}=Zp(e,{y:1.03,z:.91,x:.29,size:.12}),a=tt(e,"#665022",[[-.16,.8,.91],[0,.785,.94],[.16,.8,.91]],.016),o=Ki(e,{y:.81,z:.95,width:.27,height:.3});return i.userData={id:"naidan",body:e,arms:[],legs:[],eyeParts:s,lids:r,mouth:a,laughMouth:o,vehicleId:0,egg:!0},i}function jp(){let i=new me,e=new me;i.name="naicha",i.add(e),e.name="body";let t=[],n=[],s=new Rt({color:"#d8b873",roughness:.35,clearcoat:.34,clearcoatRoughness:.35}),r=Ct("#f5e9bf",.38),a=Ct("#e3be54",.58),o=Ct("#494738",.78),l=[[0,.53],[.43,.53],[.55,.59],[.63,.84],[.69,1.25],[.73,1.96],[.72,2.08],[.66,2.09],[.64,1.99],[.61,.86],[.46,.7],[0,.7]].map(p=>new j(...p)),c=Be(e,new Mi(new _i(l).getPoints(150),112),s);c.name="tea-cup";let h=Be(e,new Mn(.69,.036,16,96),r,[0,2.06,0]);h.rotation.x=Math.PI/2,h.name="cup-rim";let u=Be(e,new yi(.648,.648,.025,96),Ct("#8e5b32",.28),[0,2.008,0]);u.name="tea-surface";for(let[p,x,y]of[[-.25,.15,.045],[.2,-.1,.035],[-.1,-.26,.055],[.28,.24,.035]])Ue(e,"#e5c28c",[p,2.028,x],[y,.01,y]);let f=Be(e,new Mn(.38,.105,20,80),s,[.8,1.5,-.015],[.85,1.17,1]);f.name="cup-handle",Ue(e,s,[.66,1.91,-.015],[.13,.14,.13]),Ue(e,s,[.64,1.07,-.015],[.13,.14,.13]);let{eyes:d,lids:g}=Zp(e,{y:1.79,z:.66,x:.23,size:.09});for(let p of[-1,1]){let x=tt(e,"#55472c",[[p*.23-.085,1.96,.66],[p*.23,1.99,.68],[p*.23+.085,1.96,.66]],.017);x.name="tea-brow"}let v=tt(e,"#64482c",[[-.2,1.5,.66],[0,1.45,.71],[.2,1.5,.66]],.015),m=Ki(e,{y:1.53,z:.73,width:.28,height:.34});for(let p of[-1,1]){let x=new me;x.position.set(p*.62,1.38,.1),e.add(x);let y=Es([[p*.08,-.1,.015,.145,.24,.15],[p*.17,-.29,.09,.14,.2,.15]],{min:[-.37,-.56,-.22],max:[.37,.2,.34],steps:[22,30,24],blend:.13});Be(x,y,a),Ue(x,o,[p*.16,-.4,.18],[.15,.16,.12]);for(let w=0;w<3;w++)Ue(x,o,[p*.16+(w-1)*.066,-.46,.24],[.045,.07,.055]);t.push(x);let _=new me;_.position.set(p*.28,.47,0),e.add(_),Ue(_,a,[0,-.12,0],[.15,.27,.17]);let A=Be(_,new rn(1,40,28),o,[0,-.36,.06],[.2,.13,.26]);A.name="tea-boot",n.push(_)}return i.userData={id:"naicha",body:e,arms:t,legs:n,eyeParts:d,lids:g,mouth:v,laughMouth:m,vehicleId:0,mug:!0},i}var ws;function M1(){if(ws)return ws.clone();let i=64,e=40,t=[],n=[];for(let o=0;o<i;o++){let l=o/i,c=new T(.32*Math.sin(l*Math.PI/2),-.66*l,.2*l*l-.04*Math.sin(Math.PI*l)),h=new T(1,0,0),u=Math.sqrt(1-l*l),f=(.12+.15*Math.sin(Math.PI*l))*u,d=.065*u;for(let g=0;g<e;g++){let v=g/e*Math.PI*2,m=Math.cos(v),p=Math.sin(v),x=.04*Math.sin(Math.PI*l)*(m*m-.3),y=.018*Math.exp(-(((m+.15)/.18)**2))*Math.max(0,p)*Math.exp(-(((l-.32)/.22)**2)),_=c.clone().addScaledVector(h,m*f);t.push(_.x,_.y,_.z+p*d+x-y)}}for(let o=0;o<i-1;o++)for(let l=0;l<e;l++){let c=o*e+l,h=(o+1)*e+l,u=o*e+(l+1)%e,f=(o+1)*e+(l+1)%e;n.push(c,u,h,u,f,h)}let s=t.length/3;t.push(0,0,0);let r=t.length/3,a=new T(.32,-.66,.2);t.push(a.x,a.y,a.z);for(let o=0;o<e;o++){let l=(o+1)%e;n.push(s,l,o,r,(i-1)*e+o,(i-1)*e+l)}return ws=new st,ws.setAttribute("position",new Ae(t,3)),ws.setIndex(n),ws.computeVertexNormals(),ws.computeBoundingSphere(),ws.clone()}function Kp(i,e,t=1){let n=Be(i,M1(),e);return n.name="folded-ear",n.scale.x=t,n}function Vc(i,e,t,{radius:n=.1,taper:s=.3,tipRoundness:r=4}={}){let a=new T(...t[0]),o=new ms(t.map(x=>new T(...x).sub(a))),l=72,c=32,h=o.computeFrenetFrames(l,!1),u=[],f=[];for(let x=0;x<l;x++){let y=x/l,_=o.getPointAt(y),A=n*(1-s*y)*Math.sqrt(1-y**r);for(let w=0;w<c;w++){let P=w/c*Math.PI*2,I=_.clone().addScaledVector(h.normals[x],Math.cos(P)*A).addScaledVector(h.binormals[x],Math.sin(P)*A);u.push(I.x,I.y,I.z)}}for(let x=0;x<l-1;x++)for(let y=0;y<c;y++){let _=x*c+y,A=(x+1)*c+y,w=x*c+(y+1)%c,P=(x+1)*c+(y+1)%c;f.push(_,w,A,w,P,A)}let d=u.length/3;u.push(0,0,0);let g=u.length/3,v=o.getPointAt(1);u.push(v.x,v.y,v.z);for(let x=0;x<c;x++){let y=(x+1)%c;f.push(d,y,x,g,(l-1)*c+x,(l-1)*c+y)}let m=new st;m.setAttribute("position",new Ae(u,3)),m.setIndex(f),m.computeVertexNormals(),m.computeBoundingSphere();let p=new me;return p.name="tail",p.position.copy(a),p.userData.dynamic=!0,Be(p,m,e).name="continuous-tail",i.add(p),p}var Qp,em,tm=[[0,1.05,-.15,.62,.68,.95],[0,1.48,.48,.57,.8,.6],[0,1.94,.57,.49,.51,.49]],nm={min:[-.85,.25,-1.22],max:[.85,2.55,1.18],steps:[88,112,104],blend:.18};function b1(i,e,t){return Math.max((Math.hypot(i/.31,(e-1.6265)/.252)-1)*.252,.75-t)}function im(){let i=new me,e=new me;i.name="naigou",i.add(e);let t=Ct("#f1cc58",.63),n=Ct("#897247"),s=Ct("#f0e4c4"),r=Ct("#392820");Qp??=Es(tm,{...nm,cutField:b1}),em??=Es(tm,nm);let a=Qp.clone(),o=a.attributes.position,l=[];for(let m=0;m<o.count;m++){let p=o.getX(m),x=o.getY(m),y=o.getZ(m),_=Math.max(0,Math.min(1,(1-(p/.36)**2-((x-.95)/.35)**2)*5))*Math.max(0,Math.min(1,(y-.7)/.2)),A=new ye("#f1cc58").lerp(new ye("#f0e4c4"),_);l.push(A.r,A.g,A.b)}a.setAttribute("color",new Ae(l,3));let c=Be(e,a,new wt({vertexColors:!0,roughness:.63}));c.name="canine-torso";let h=[];for(let[m,p]of[[-.43,.55],[.43,.55],[-.43,-.68],[.43,-.68]]){let x=new me;x.position.set(m,.72,p),e.add(x);let y=Es([[0,-.2,0,.22,.45,.24],[0,-.54,.09,.23,.18,.27],...[-1,0,1].map(w=>[w*.13,-.58,.33,.085,.11,.145])],{min:[-.37,-.78,-.32],max:[.37,.3,.56],steps:[36,48,40],blend:.075}),_=[],A=y.attributes.position;for(let w=0;w<A.count;w++){let P=new ye("#f1cc58").lerp(new ye("#897247"),Math.max(0,Math.min(1,(-A.getY(w)-.39)/.13)));_.push(P.r,P.g,P.b)}y.setAttribute("color",new Ae(_,3)),Be(x,y,new wt({vertexColors:!0,roughness:.62})),h.push(x)}let u=[];for(let m of[-1,1]){let p=new me;p.position.set(m*.28,2.32,.52),p.rotation.z=m*.1,p.rotation.y=m*.5,e.add(p),Kp(p,n,m),u.push(p)}let f=Vc(e,t,[[0,1,-.91],[.08,1.23,-1.08],[.14,1.6,-1.15],[.08,1.94,-1.1],[0,2.1,-1.06]],{radius:.13,taper:.3}),d=new dt(em);d.updateMatrixWorld(!0);let g=(m,p)=>new si(new T(m,p,2.5),new T(0,0,-1)).intersectObject(d)[0]?.point.z||1;for(let m of[-1,1]){let p=tt(e,r,Array.from({length:7},(x,y)=>{let _=m*.235-.115+y*.23/6,A=2.03+Math.sin(y/6*Math.PI)*.055;return[_,A,g(_,A)+.014]}),.018);p.castShadow=!1}let v=Ki(e,{y:1.82,z:1.065,width:.31,height:.45,sculpted:!0,lipRadius:.018,lipColor:"#dfb94c",archedTeeth:!0});return v.getObjectByName("upper-teeth").position.z=-.035,v.userData.jaw.position.z=-.045,v.userData.fixedAperture=!0,Hc(v,g,{width:.35,height:.45,cacheKey:"naigou"}),v.visible=!0,i.userData={id:"naigou",body:e,arms:[],legs:h,lids:[],laughMouth:v,mouth:null,tail:f,ears:u,canine:!0,vehicleId:0},i}var nd=new Map;function S1(i){if(nd.has(i))return nd.get(i).clone();let e=[],t=[],n=[],s=128,r=16,a=new ye(i),o=a.clone().multiplyScalar(.7),l=a.clone().lerp(new ye("#e2e6a6"),.2);for(let h=0;h<=r;h++){let u=h/r,f=St.lerp(.064,.109,u),d=St.lerp(.084,.129,u);for(let g=0;g<=s;g++){let v=g/s*Math.PI*2,m=.017+.026*Math.pow(1-u,.65);e.push(Math.cos(v)*f,Math.sin(v)*d,m);let p=(Math.sin(v*41+Math.sin(v*13)*.5)+Math.sin(v*59+u*4))*.017,x=l.clone().lerp(a,St.smoothstep(u,.05,.7)).lerp(o,St.smoothstep(u,.78,1)*.7).multiplyScalar(1+p);t.push(x.r,x.g,x.b)}}for(let h=0;h<r;h++)for(let u=0;u<s;u++){let f=h*(s+1)+u;n.push(f,f+s+1,f+1,f+1,f+s+1,f+s+2)}let c=new st;return c.setAttribute("position",new Ae(e,3)),c.setAttribute("color",new Ae(t,3)),c.setIndex(n),c.computeVertexNormals(),c.computeBoundingSphere(),nd.set(i,c),c.clone()}function sm(i="#93b54a"){let e=new me;e.name="reference-eye";let t=Ue(e,new Rt({color:i,roughness:.4,clearcoat:.25}),[0,0,.008],[.112,.132,.039]);t.name="eye-base";let n=Be(e,S1(i),new Rt({vertexColors:!0,roughness:.32,clearcoat:.35,clearcoatRoughness:.25}));n.name="curved-iris";let s=Ue(e,Ct("#152019",.12),[0,-.002,.043],[.064,.084,.011]);s.name="eye-pupil";let r=Ue(e,new Rt({color:"#e9f3de",transparent:!0,opacity:.1,depthWrite:!1,roughness:.035,metalness:.02,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.8}),[0,0,.012],[.114,.134,.053]);r.name="cornea";let a=new Vt({color:"#fff8df",toneMapped:!1});for(let[o,l,c]of[[-.021,.032,1],[.025,-.034,.34]]){let h=.012+.053*Math.sqrt(1-(o/.114)**2-(l/.134)**2)+.002,u=Ue(e,a,[o,l,h],[.011*c,.014*c,.003]);u.name="eye-catchlight"}return e.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),e.userData.detailedEye=!0,e}var id=new Map;function Gc(i,e,t){return id.has(i)||id.set(i,Es(e,t)),id.get(i).clone()}function sd(i,e,t,{belly:n=!1}={}){let s=i.attributes.position,r=[],a=new ye,o=new ye(e),l=new ye(t);for(let c=0;c<s.count;c++){let h=s.getX(c),u=s.getY(c),f=s.getZ(c),d=n?Math.max(0,Math.min(1,(1-(h/.6)**2-((u-1.15)/.7)**2)*5))*Math.max(0,Math.min(1,(f-.1)/.38))*.92:Math.max(0,Math.min(1,(-u-.62)/.2));a.copy(o).lerp(l,d),r.push(a.r,a.g,a.b)}return i.setAttribute("color",new Ae(r,3)),i}function rm(i){let e=i==="naishu",t=new me,n=new me;t.name=i,t.add(n),n.name="body";let s=e?"#f8d958":"#f5ce20",r=Ct(s,.66),a=Ct("#403620"),o=[],l=[],c=[],h=[],u=[],f=e?[[0,1.12,0,.78,.88,.61],[0,1.72,0,.56,.68,.43],[0,2.14,.01,.47,.44,.38]]:[[0,1.32,0,.82,.94,.64],[0,1.99,0,.56,.76,.43],[0,2.48,0,.47,.48,.38]],d=Gc(i+"-body",f,{min:[-.92,.25,-.67],max:[.92,3.08,.68],steps:[80,112,72],blend:.25}),g=Be(n,sd(d,s,e?"#ffe77c":"#f6e7b3",{belly:!0}),new Rt({vertexColors:!0,roughness:.43,clearcoat:.22,clearcoatRoughness:.4,envMapIntensity:.45}));for(let N of[-1,1]){let B=new me;B.position.set(N*(e?.59:.63),e?1.7:1.88,.16),n.add(B);let Z=Gc(i+"-arm-"+N,[[N*.075,-.19,0,.19,.36,.19],[N*.17,-.48,.04,.17,.32,.17],[N*.16,-.73,.07,.145,.19,.135]],{min:[-.4,-.97,-.24],max:[.4,.25,.32],steps:[36,58,34],blend:.1}),W=Be(B,sd(Z,s,e?"#d5aa4c":"#9c791c"),new wt({vertexColors:!0,roughness:.7})),te=[];for(let be=0;be<3;be++){let Ve=Ue(B,e?"#e9c34b":"#96701b",[N*.16+(be-1)*.08,-.86,.09],[.049,.105,.063]);te.push({node:Ve,rest:Ve.position.clone()})}B.userData={side:N,mesh:W,rest:new Float32Array(Z.attributes.position.array),restNormals:new Float32Array(Z.attributes.normal.array),fingers:te,bent:!1},o.push(B);let le=new me;le.position.set(N*.32,e?.43:.59,0),n.add(le);let oe=Gc(i+"-leg",e?[[0,-.08,0,.24,.32,.25],[0,-.29,.075,.23,.14,.29]]:[[0,-.06,0,.25,.36,.26],[0,-.31,.02,.17,.28,.2],[0,-.48,.12,.25,.105,.3],...[-1,0,1].map(be=>[be*.16,-.49,.39,.092,.085,.195])],{min:[-.34,-.62,-.34],max:[.34,.4,.7],steps:e?[24,38,36]:[36,50,52],blend:.09});if(!e){let be=oe.attributes.position,Ve=[];for(let Qe=0;Qe<be.count;Qe++){let nt=St.smoothstep(be.getZ(Qe),.18,.47)*St.smoothstep(-be.getY(Qe),.32,.48)*.85,K=new ye(s).lerp(new ye("#a38027"),nt);Ve.push(K.r,K.g,K.b)}oe.setAttribute("color",new Ae(Ve,3))}Be(le,oe,e?r:new Rt({vertexColors:!0,roughness:.55,clearcoat:.1})),l.push(le)}g.updateMatrixWorld(!0);let v=(N,B)=>new si(new T(N,B,2),new T(0,0,-1)).intersectObject(g)[0]?.point.z||.4,m=e?2.26:2.59,p=e?.33:.31,x=e?.215:.225;for(let N of[-1,1]){let B=sm(e?"#c7d58c":"#93b54a");B.position.set(N*x,m,v(N*x,m)+.004),B.rotation.y=N*.18,n.add(B),h.push(B);let Z=tt(n,"#51452b",Array.from({length:7},(W,te)=>{let le=N*x-.105+te*.21/6,oe=m-.015+Math.sin(te/6*Math.PI)*.065;return[le,oe,v(le,oe)+.018]}),.014);Z.visible=!1,c.push(Z)}let y=e?2.025:2.345,_=e?.425:.42,A=tt(n,"#715321",[[-.18,y,v(-.18,y)+.014],[0,y-.012,v(0,y-.012)+.014],[.18,y,v(.18,y)+.014]],.009),w=Ki(n,{y:y+.015,z:Math.max(v(0,y),v(0,y-.4))+.035,width:e?.29:.3,height:e?.4:.46,sculpted:!0}),P=null;if(e){for(let N of[-1,1]){let B=new me;B.position.set(N*.56,2.57,-.03),B.rotation.z=-N*.13,B.rotation.y=N*.12,n.add(B),Ue(B,r,[N*.07,.12,0],[.45,.47,.17]),Ue(B,"#edbd78",[N*.07,.12,.105],[.355,.375,.045]),Ue(B,"#f4ce92",[N*.07,.1,.13],[.295,.315,.022]),u.push(B)}P=Vc(n,r,[[0,.53,-.35],[.3,.31,-.75],[.76,.28,-.88],[1.1,.42,-.88],[1.32,.42,-.77]],{radius:.055,taper:.55,tipRoundness:8})}let I=e?.4:.46,S=e?.29:.3,b=y+.015-I*.43,C=v(0,b),U=Gc(i+"-open-mouth",f,{min:[-.92,.25,-.67],max:[.92,3.08,.68],steps:[80,112,72],blend:.25,cuts:[[0,b,C-.025,S*1.01,I*.58,.27]]}),G=Be(n,sd(U,s,e?"#ffe77c":"#f6e7b3",{belly:!0}),g.material);G.visible=!1,Hc(w,v,{cacheKey:i,width:e?.33:.34,height:I});for(let N of c)N.castShadow=!1;let V=new me;V.name="torso-pivot",V.position.y=.65;for(let N of[...n.children])l.includes(N)||(N.position.y-=.65,V.add(N));return n.add(V),t.userData={id:i,body:n,torsoPivot:V,torsoMesh:g,laughTorsoMesh:G,arms:o,legs:l,lids:c,eyeParts:h,ears:u,tail:P,mouth:A,laughMouth:w,vehicleId:0,referenceSculpt:!0},t}var Qi=new Rt({color:"#e9be38",roughness:.48,metalness:0,clearcoat:.22,clearcoatRoughness:.5}),E1=new Rt({color:"#df4a25",roughness:.48,clearcoat:.2});function am(i,e,t,n=.79){let s=new _i(e.map(a=>new j(...a))).getPoints(120),r=new Mi(s.map(a=>new j(Math.max(0,a.x),a.y)),112);return r.scale(1,1,n),r.computeVertexNormals(),Be(i,r,t)}function om(i,{y:e=2.02,z:t=.38,x:n=.245,size:s=.145,parts:r=null}={}){let a=[];for(let o of[-1,1]){let l=new me;l.position.set(o*n,e,t),l.rotation.y=o*.15,i.add(l),r?.push(l),Ue(l,"#b9bd82",[0,0,.014],[s,s*1.08,s*.48]),Ue(l,"#758349",[0,-.004,.064],[s*.7,s*.85,.028]),Ue(l,"#182c23",[0,-.006,.088],[s*.43,s*.6,.021]),Ue(l,"#fff7cf",[-.025,.042,.109],[.018,.021,.008]);let c=tt(l,"#d1a62d",[[-s*.97,0,.01],[-s*.75,s*.85,.022],[0,s*1.09,.03],[s*.75,s*.85,.022],[s*.97,0,.01]],.019);a.push(c);let h=Ue(l,Qi,[0,0,.08],[s*1.05,.001,.07]);h.visible=!1,h.name="eyelid",h.userData.closedY=s*1.08,a.push(h);let u=tt(l,"#5d4128",[[-s*.9,0,.16],[0,.04,.18],[s*.9,0,.16]],.012);u.name="closed-eye",u.visible=!1,a.push(u)}return a}function Kr(i){if(i==="naidan")return Jp();if(i==="naicha")return jp();if(i==="naigou")return im();if(i==="naiwa"||i==="naishu")return rm(i);let e=new me;e.name=i;let t=new me;e.add(t),t.name="body";let n=[],s=[],r,a=[],o=[];if(i==="naichong"){let c=am(t,[[0,.08],[.43,.12],[.72,.4],[.82,.78],[.77,1.2],[.65,1.63],[.52,1.9],[.32,2.04],[0,2.1]],E1,.92),h=[],u=c.geometry.attributes.position;for(let d=0;d<u.count;d++){let g=u.getY(d),v=u.getX(d),m=u.getZ(d),p=Math.max(...[.35,.65,.95].map(_=>Math.max(0,Math.min(1,(.078-Math.abs(g-_))/.025)))),x=Math.max(0,Math.min(1,(1-(v/.53)**2-((g-1.49)/.44)**2)*7))*Math.max(0,Math.min(1,(m-.25)/.12)),y=new ye("#e9522c").lerp(new ye("#f6d35c"),Math.max(p,x));h.push(y.r,y.g,y.b)}c.geometry.setAttribute("color",new Ae(h,3)),c.material=new Rt({vertexColors:!0,roughness:.5,clearcoat:.18}),om(t,{y:1.63,z:.52,x:.22,size:.095,parts:o});for(let d of[-1,1]){let g=tt(t,"#4e3623",[[d*.22-.11,1.63,.65],[d*.22,1.67,.67],[d*.22+.11,1.63,.65]],.014);g.visible=!1,a.push(g)}c.updateMatrixWorld(!0);let f=(d,g)=>new si(new T(d,g,2),new T(0,0,-1)).intersectObject(c)[0]?.point.z||.6;r=tt(t,"#735323",[[-.19,1.36,f(-.19,1.36)+.015],[0,1.34,f(0,1.34)+.015],[.19,1.36,f(.19,1.36)+.015]],.013);for(let d of[-1,0,1])tt(t,"#da4727",[[d*.045,1.97,0],[d*.09,2.13,.01],[d*.15,2.23,.035]],.035)}else{am(t,[[0,.19],[.4,.18],[.67,.35],[.82,.75],[.83,1.1],[.73,1.48],[.58,1.84],[.52,2.13],[.43,2.36],[.24,2.46],[0,2.47]],Qi),a=om(t,{y:2.12,z:.344,x:.246,size:.141}),Ue(t,Qi,[0,1.98,.405],[.16,.09,.052]),r=tt(t,"#735124",[[-.205,1.9,.405],[-.1,1.875,.433],[0,1.87,.445],[.1,1.875,.433],[.205,1.9,.405]],.012);for(let c of[-1,1]){let h=new me;h.position.set(c*.63,1.48,.02),t.add(h),h.name=c<0?"arm.L":"arm.R";let u=Ue(h,Qi,[c*.14,-.3,.02],[.17,.43,.165]);u.rotation.z=c*.24,Ue(h,Qi,[c*.21,-.62,.1],[.17,.16,.17]);for(let d=0;d<3;d++)Ue(h,Qi,[c*.2+(d-1)*.065,-.66,.2],[.038,.07,.045]);n.push(h);let f=new me;f.position.set(c*.34,.26,0),t.add(f),f.name=c<0?"leg.L":"leg.R",Ue(f,Qi,[0,-.13,.11],[.245,.22,.32]),s.push(f)}if(i==="naishu"){for(let h of[-1,1]){let u=new me;u.position.set(h*.57,2.46,-.035),u.rotation.z=-h*.18,u.rotation.y=h*.13,t.add(u),Ue(u,Qi,[h*.05,.1,0],[.38,.44,.115]),Ue(u,"#c88d48",[h*.05,.1,.091],[.278,.335,.035]),Ue(u,"#e6b966",[h*.05,.05,.113],[.22,.27,.015])}let c=tt(t,Qi,[[0,.39,-.48],[.42,.16,-.8],[.88,.08,-.9],[1.23,.08,-.71],[1.32,.1,-.45]],.046);c.name="tail"}else tt(t,"#d0a52e",[[-.15,.57,-.61],[0,.46,-.67],[.15,.57,-.61]],.02)}let l=Ki(t,{y:1.36,z:.69,width:.27,height:.29});return e.userData={body:t,arms:n,legs:s,mouth:r,laughMouth:l,lids:a,eyeParts:o.length?o:null,id:i,vehicleId:0},e}function w1(i,e){let t=i.userData;if(!t?.rest||t.bent===e)return;t.bent=e;let n=e?-.55:0,s=Math.cos(n),r=Math.sin(n),a=t.mesh.geometry.attributes.position,o=(l,c,h)=>{if(e&&c<-.62){let m=Math.max(0,Math.min(1,(-c-.62)/.24)),p=-t.side*.75*m*m*(3-2*m),x=t.side*.16,y=-.68,_=l-x,A=c-y;l=x+_*Math.cos(p)-A*Math.sin(p),c=y+_*Math.sin(p)+A*Math.cos(p)}if(c>-.22)return[l,c,h];let u=Math.max(0,Math.min(1,(-c-.22)/.4)),f=n*u*u*(3-2*u),d=Math.cos(f),g=Math.sin(f),v=c+.22;return[l,-.22+v*d-h*g,v*g+h*d]};for(let l=0;l<a.count;l++)a.setXYZ(l,...o(t.rest[l*3],t.rest[l*3+1],t.rest[l*3+2]));if(a.needsUpdate=!0,e){let l=t.mesh.geometry.attributes.normal,c=new Je,h=new T,u=1e-4;for(let f=0;f<a.count;f++){let d=t.rest[f*3],g=t.rest[f*3+1],v=t.rest[f*3+2],m=o(d,g,v),p=o(d+u,g,v),x=o(d,g+u,v),y=o(d,g,v+u);c.set((p[0]-m[0])/u,(x[0]-m[0])/u,(y[0]-m[0])/u,(p[1]-m[1])/u,(x[1]-m[1])/u,(y[1]-m[1])/u,(p[2]-m[2])/u,(x[2]-m[2])/u,(y[2]-m[2])/u).invert().transpose(),h.fromArray(t.restNormals,f*3).applyMatrix3(c).normalize(),l.setXYZ(f,h.x,h.y,h.z)}l.needsUpdate=!0}else t.mesh.geometry.attributes.normal.array.set(t.restNormals),t.mesh.geometry.attributes.normal.needsUpdate=!0;for(let l of t.fingers)l.node.position.set(...o(l.rest.x,l.rest.y,l.rest.z))}function co(i,{time:e,moving:t=!1,mood:n=null,alive:s=!0}){let r=i.userData;if(!r?.body)return;let o=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches?0:1,l=n==="happy",c=Math.sin(e*12),h=Math.sin(e*2.2),u=l?(r.torsoPivot?.1+.44*((1+Math.sin(e*1.65))*.5)**2:.11+Math.sin(e*3.8)*.12)*o:0;r.torsoMesh&&(r.torsoMesh.visible=!l,r.laughTorsoMesh.visible=l),r.body.rotation.z=o*Math.sin(e*(t?11:l?6:1.8))*(t?.025:l?.035:.006),r.body.rotation.x=l?u*(r.torsoPivot?.08:1):n==="sad"?.12:0,r.torsoPivot&&(r.torsoPivot.rotation.x=l?u*.92:0),r.body.scale.set(1,1+(l?c*.025:h*.006)*o,1+(l?c*.012:0)*o),r.arms.forEach((d,g)=>{w1(d,l),d.rotation.x=l?-.54+c*.055*o:t?Math.sin(e*11+g*Math.PI)*.4*o:0,d.rotation.z=l?g?-.42:.42:0,d.rotation.y=l?g?-.32:.32:0}),r.legs.forEach((d,g)=>d.rotation.x=t?Math.sin(e*11+g*Math.PI)*.28*o:l?-.06:0);let f=!l&&Math.sin(e*.63+i.id%7)>.997;if(r.eyeParts)r.eyeParts.forEach(d=>d.visible=!l&&!f),r.lids.forEach(d=>d.visible=l||f);else for(let d of r.lids)d.name==="eyelid"?(d.visible=l||f,d.scale.y=l||f?d.userData.closedY:.001):d.name==="closed-eye"&&(d.visible=l||f);r.canine?(r.tail.rotation.z=Math.sin(e*(t?9:3))*.08*o,r.ears.forEach((d,g)=>d.rotation.x=Math.sin(e*7+g)*.06*o),r.legs.forEach((d,g)=>d.rotation.x=t?Math.sin(e*11+[0,Math.PI,Math.PI,0][g])*.34*o:0),r.laughMouth.visible=!0,td(r.laughMouth,e,o)):r.tail&&(r.tail.rotation.y=Math.sin(e*2)*.05*o),r.egg&&(r.body.position.y=(r.vehicleId?.3:0)+(t?Math.abs(Math.sin(e*9))*.14*o:0)),r.laughMouth&&!r.canine&&(r.laughMouth.visible=l,td(r.laughMouth,e,o),r.mouth&&(r.mouth.visible=!l))}function lm(i){let e=new me;if(e.name="vehicle",i===1){for(let t of[-.6,.6]){let n=Be(e,new Mn(.32,.045,8,24),"#344b51",[0,.25,t]);n.rotation.y=Math.PI/2;for(let s=0;s<6;s++){let r=tt(e,"#b9c7c5",[[0,.25,t],[0,.25+Math.cos(s*Math.PI/3)*.29,t+Math.sin(s*Math.PI/3)*.29]],.009)}}tt(e,"#4e9fa8",[[0,.25,-.6],[0,.65,0],[0,.25,.6],[0,.25,-.6]],.04),tt(e,"#4e9fa8",[[0,.25,.6],[0,.86,.5],[0,.9,.7]],.04),$(e,"#344b51",[0,.73,0],[.3,.06,.28])}else{$(e,"#e8b744",[0,.3,0],[1.3,.45,1.7]),$(e,"#f0e1b4",[0,.63,-.1],[1,.45,1]),$(e,"#4d8c9c",[0,.7,.41],[.8,.27,.02]);for(let t of[-.65,.65])for(let n of[-.5,.5])Ue(e,"#34464e",[t,.2,n],[.14,.25,.25]);$(e,"#ead18f",[0,.92,-.1],[.6,.1,.6]);for(let t of[-.4,.4])Ue(e,"#fff4bd",[t,.35,.87],[.13,.12,.03]);$(e,"#7b8b88",[0,.18,.87],[1.1,.1,.08])}return e}var rd=new Map,Ci,cm=!1;function $c(i){if(rd.has(i))return rd.get(i);if(cm||typeof window>"u")return null;try{Ci||(Ci=new Ms({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Ci.setSize(192,192),Ci.setPixelRatio(1),Ci.outputColorSpace=Ut,Ci.toneMapping=Ei,Ci.toneMappingExposure=1.05);let e=new ti,t=Kr(i);t.rotation.y=-.13,e.add(t),e.add(new Yi("#fff2d8","#a5b09b",1.8));for(let[c,h,u,f,d]of[[-3,5,7,"#fff4df",3.2],[4,3,-3,"#b5d7f6",2]]){let g=new bi(f,d);g.position.set(c,h,u),e.add(g)}let n=new Ft().setFromObject(t),s=n.max.y-n.min.y,r=n.min.y+s*.72,a=s*.33,o=new On(-a,a,a,-a,.1,30);o.position.set(.2,r+.12,7),o.lookAt(0,r,0),Ci.setClearColor("#000000",0),Ci.render(e,o);let l=Ci.domElement.toDataURL("image/png");return En(t),rd.set(i,l),l}catch{return cm=!0,null}}var ad=0;function dn(i){let e=$c(i);if(e)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><image href="${e}" width="80" height="80"/></svg>`;if(i==="naidan")return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true"><defs><radialGradient id="egg-${++ad}"><stop stop-color="#fff3a7"/><stop offset="1" stop-color="#e5b939"/></radialGradient></defs><path d="M40 8C20 8 7 23 7 43C7 84 73 84 73 43C73 23 60 8 40 8Z" fill="url(#egg-${ad})"/><ellipse cx="26" cy="43" rx="7" ry="9" fill="#a7ba62"/><ellipse cx="54" cy="43" rx="7" ry="9" fill="#a7ba62"/><ellipse cx="26" cy="43" rx="4" ry="6" fill="#27311d"/><ellipse cx="54" cy="43" rx="4" ry="6" fill="#27311d"/><path d="M30 59q10-2 20 0" stroke="#6b5226" stroke-width="2" fill="none"/></svg>`;if(i==="naicha")return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true"><path d="M57 23C84 13 84 61 58 55" stroke="#c7a35c" stroke-width="8" fill="none"/><path d="M13 16H62L58 58Q54 72 37 72Q20 72 17 58Z" fill="#d9b773"/><ellipse cx="37.5" cy="16" rx="24.5" ry="7" fill="#f3e5ba"/><ellipse cx="37.5" cy="16" rx="21" ry="4.5" fill="#885832"/><path d="M24 32q5-5 10 0M43 32q5-5 10 0" stroke="#51442d" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M24 40Q37 43 51 40Q49 59 38 60Q27 59 24 40Z" fill="#362419"/><path d="M28 42q10 4 20 0M32 55q6 3 12 0" stroke="#fff5d9" stroke-width="3" fill="none"/><path d="M14 46l-5 8M61 45l5 9M26 70v5M49 70v5" stroke="#57513d" stroke-width="7" stroke-linecap="round"/></svg>';let t="portrait-"+ ++ad,n=i==="naishu",s=i==="naichong",r=i==="naigou",a=s?"#ee6d35":n?"#f8dd64":"#f8d437",o=n?'<ellipse cx="16" cy="18" rx="15" ry="17" fill="#e6bc42"/><ellipse cx="64" cy="18" rx="15" ry="17" fill="#e6bc42"/><ellipse cx="16" cy="18" rx="11" ry="12" fill="#f1c58a"/><ellipse cx="64" cy="18" rx="11" ry="12" fill="#f1c58a"/>':r?'<path d="M24 15Q9 5 5 26Q6 43 18 34L30 18M56 15Q71 5 75 26Q74 43 62 34L50 18" fill="#8e774c"/>':"",l=`<path d="M23 32C23 10 57 10 57 32C58 42 69 48 67 63C65 80 15 80 13 63C11 48 22 42 23 32Z" fill="url(#${t})"/><path d="M20 54Q17 67 30 72" fill="none" stroke="#fff1ac" stroke-width="3" opacity=".55"/><ellipse cx="40" cy="59" rx="17" ry="15" fill="#fff095" opacity=".65"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><defs><radialGradient id="${t}" cx=".3" cy=".25" r=".85"><stop stop-color="${s?"#ffad52":"#ffef91"}"/><stop offset=".55" stop-color="${a}"/><stop offset="1" stop-color="${s?"#cc4d26":"#d5a82d"}"/></radialGradient></defs><ellipse cx="40" cy="75" rx="24" ry="3" fill="#9d7236" opacity=".14"/>${o}${l}${r?'<path d="M25 31q5-6 10 0M46 31q5-6 10 0" stroke="#493520" stroke-width="2.3" fill="none" stroke-linecap="round"/><path d="M25 42Q40 38 55 42Q53 64 40 65Q27 64 25 42Z" fill="#40291e"/><path d="M29 43Q40 47 51 43M34 59q6 4 12 0" fill="none" stroke="#fff3d5" stroke-width="3.5" stroke-linecap="round"/>':s?'<ellipse cx="40" cy="35" rx="20" ry="18" fill="#ffe382"/><path d="M27 32q5-5 10 0M44 32q5-5 10 0M31 43q9 7 18 0" fill="none" stroke="#66462b" stroke-width="2" stroke-linecap="round"/><path d="M15 56q25 19 50 0M18 67q22 12 44 0" fill="none" stroke="#ffd64e" stroke-width="5"/><path d="M35 17L30 8M44 17l5-9" stroke="#d74d29" stroke-width="3.5" stroke-linecap="round"/>':`<ellipse cx="29" cy="31" rx="6" ry="7.5" fill="${n?"#b8cd85":"#93b747"}"/><ellipse cx="51" cy="31" rx="6" ry="7.5" fill="${n?"#b8cd85":"#93b747"}"/><ellipse cx="29" cy="31" rx="3.4" ry="4.6" fill="#1c291d"/><ellipse cx="51" cy="31" rx="3.4" ry="4.6" fill="#1c291d"/><circle cx="28" cy="29" r="1.2" fill="#fff7dd"/><circle cx="50" cy="29" r="1.2" fill="#fff7dd"/><path d="M29 43q11 ${n?3:0} 22 0" fill="none" stroke="#75511d" stroke-width="1.5" stroke-linecap="round"/>`}</svg>`}var od=new Map,Ts;function qn(i){let e={tea:'<path d="M53 34h56l-7 61H61Z" fill="#edcf97" stroke="#ae8e58" stroke-width="3"/><ellipse cx="81" cy="34" rx="30" ry="8" fill="#f9eac0"/><path d="M86 16l-5 54" stroke="#6aaa9c" stroke-width="7"/><path d="M62 62h38v25H62Z" fill="#f5e4bc"/><g fill="#7c634a"><circle cx="71" cy="84" r="4"/><circle cx="83" cy="87" r="4"/><circle cx="92" cy="81" r="4"/></g>',theater:'<path d="M33 45h94v51H33Z" fill="#ebd7aa" stroke="#a58b5a" stroke-width="3"/><path d="M24 42l56-26 57 26Z" fill="#ce8063"/><rect x="28" y="46" width="104" height="20" rx="4" fill="#dcaf57"/><path d="M48 69h22v27H48ZM91 69h22v27H91Z" fill="#866c54"/><path d="M45 56h71" stroke="#fff0bb" stroke-width="5" stroke-dasharray="4 8"/>',factory:'<path d="M28 49h103v48H28Z" fill="#dbb082" stroke="#9b805b" stroke-width="3"/><path d="M25 50l35-21 28 21 27-18 25 18Z" fill="#77a0a7"/><path d="M108 41V16h17v31" fill="#bb8063"/><path d="M42 66h21v17H42ZM80 65h40v32H80Z" fill="#668b98"/><circle cx="119" cy="9" r="8" fill="#d7d7bd"/>',steal:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M72 65h20v29H72Z" fill="#956f4a"/><path d="M110 16v55" stroke="#8e744d" stroke-width="4"/><path d="M112 17h30l-8 10 8 10h-30Z" fill="#d98567"/>',dice:'<g transform="translate(45 23) rotate(-12 35 34)"><rect width="70" height="66" rx="15" fill="#fff8dc" stroke="#a87936" stroke-width="4"/><g fill="#d36542"><circle cx="18" cy="17" r="6"/><circle cx="51" cy="17" r="6"/><circle cx="35" cy="33" r="6"/><circle cx="18" cy="50" r="6"/><circle cx="51" cy="50" r="6"/></g></g>',shield:'<path d="M80 14L120 29V55Q115 81 80 99Q45 81 40 55V29Z" fill="#60a7a3" stroke="#376d68" stroke-width="4"/><path d="M80 24L108 35V54Q104 74 80 87Q55 74 52 54V35Z" fill="#99d6bf"/><path d="M63 52l12 13 24-27" fill="none" stroke="#fff4bc" stroke-width="8" stroke-linecap="round"/>',block:'<path d="M38 42V96M122 42V96" stroke="#8d7048" stroke-width="10"/><rect x="23" y="33" width="114" height="34" rx="5" fill="#f5ce64" stroke="#b68b3f" stroke-width="3"/><path d="M38 35l20 30M70 35l20 30M102 35l20 30" stroke="#df7754" stroke-width="11"/>',recover:'<path d="M55 27h50v57q0 12-25 12T55 84Z" fill="#fcf2cf" stroke="#b9a16b" stroke-width="3"/><rect x="58" y="19" width="44" height="15" rx="5" fill="#76ad84"/><rect x="56" y="48" width="48" height="28" rx="4" fill="#a7ce9c"/><path d="M73 62h14M80 55v14" stroke="#fff9d4" stroke-width="5"/>',turn:'<path d="M109 86Q139 38 94 27Q66 21 46 43" fill="none" stroke="#70aaa3" stroke-width="18" stroke-linecap="round"/><path d="M47 16L28 53l43 2Z" fill="#70aaa3"/><circle cx="91" cy="82" r="15" fill="#eab85d"/>',slow:'<ellipse cx="81" cy="67" rx="42" ry="27" fill="#75b48a" stroke="#497b58" stroke-width="3"/><path d="M57 49l24-9 23 11 1 23-24 15-24-13Z" fill="#a0cc8b" stroke="#639968" stroke-width="3"/><circle cx="131" cy="63" r="15" fill="#c7d998"/><circle cx="137" cy="59" r="3" fill="#385547"/><path d="M51 85l-8 9M108 85l8 9" stroke="#78a870" stroke-width="13" stroke-linecap="round"/>',house:'<path d="M39 48h83v46H39Z" fill="#f1dfb0" stroke="#b79a63" stroke-width="3"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M72 65h20v29H72Z" fill="#956f4a"/><path d="M47 61h16v17H47ZM101 61h13v17h-13Z" fill="#77b9ca"/>',bank:'<path d="M28 38L80 12l52 26Z" fill="#e4bb62" stroke="#9c7a45" stroke-width="3"/><path d="M30 92h100M36 42h88M45 45v44M68 45v44M92 45v44M115 45v44" stroke="#f9e8b9" stroke-width="10"/><rect x="25" y="91" width="110" height="11" rx="4" fill="#b7985e"/><circle cx="80" cy="28" r="8" fill="#fff4bf"/>',stocks:'<path d="M26 22v74h111" fill="none" stroke="#ad9467" stroke-width="4"/><path d="M42 89V69M66 89V52M91 89V35M117 89V17" stroke="#72aaa1" stroke-width="16"/><path d="M32 60l32-21 25 6 39-30" fill="none" stroke="#e1aa4b" stroke-width="5"/>',vehicle:'<circle cx="42" cy="79" r="22" fill="#f0dfb7" stroke="#5d7774" stroke-width="6"/><circle cx="117" cy="79" r="22" fill="#f0dfb7" stroke="#5d7774" stroke-width="6"/><path d="M42 79l26-40 24 40H42l20-28h47l8 28M99 26l10 1-2 24M61 34h23" fill="none" stroke="#69a5a3" stroke-width="7" stroke-linecap="round"/>',demolish:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#d78c62"/><path d="M83 51l-11 17 16 6-13 21" fill="none" stroke="#927650" stroke-width="4"/><g transform="rotate(30 91 42)"><rect x="86" y="35" width="13" height="60" rx="4" fill="#a78553"/><rect x="62" y="18" width="61" height="26" rx="6" fill="#8caaaa"/></g>',build:'<path d="M39 48h83v46H39Z" fill="#f1dfb0"/><path d="M26 50l54-35 56 35Z" fill="#63a48b"/><path d="M78 61v24M66 73h24" stroke="#c09143" stroke-width="7"/><path d="M96 38v-6a16 16 0 0132 0v6" fill="#f1c45f" stroke="#a9863d" stroke-width="3"/><path d="M91 39h43" stroke="#f7d67a" stroke-width="7"/>'};return`<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" class="item-art" aria-hidden="true"><ellipse cx="80" cy="98" rx="55" ry="7" fill="#8c794d" opacity=".12"/>${e[i]||e.house}</svg>`}function As(i,e,t="naiwa"){return`<div class="illustrated-guide"><div class="guide-drawing">${qn(i)}</div><div><span class="guide-face">${dn(t)}</span><p>${e}</p></div></div>`}function ar(i,e,t="#70a58b"){let n=`${i.name}:${i.group}:${i.buildingType||"legacy"}:${i.id}:${e}:${t}`;if(od.has(n))return od.get(n);try{Ts||(Ts=new Ms({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Ts.setSize(200,160),Ts.setPixelRatio(1),Ts.outputColorSpace=Ut,Ts.toneMapping=Ei);let s=new ti,r=rr(i,e,t,!0);s.add(r),s.add(new Yi("#fff6df","#8a9e9a",2.4));let a=new bi("#ffebc1",2.5);a.position.set(-3,6,5),s.add(a);let o=new Ft().setFromObject(r),l=o.getCenter(new T),c=o.getSize(new T),h=Math.max(1.6,c.y*.72),u=new On(-h*1.25,h*1.25,h,-h,.1,50);u.position.set(l.x+4,l.y+3.3,l.z+5),u.lookAt(l),Ts.render(s,u);let f=`<img class="building-thumb" src="${Ts.domElement.toDataURL("image/png")}" alt="${i.name} \xB7 ${e?e+"\u7EA7\u5EFA\u7B51":"\u7A7A\u5730"}">`;return En(r),od.set(n,f),f}catch{return qn("house")}}var an=[{id:"naiwa",estateColor:"#45a078",name:"\u5976\u86D9",subtitle:"\u7B11\u4E00\u7B11\uFF0C\u597D\u8FD0\u5230",color:"#f7c945",accent:"#78a84d",style:"\u5747\u8861\u7ECF\u8425",description:"\u5706\u809A\u5B50\u3001\u7EFF\u773C\u775B\uFF0C\u4ECA\u5929\u4E5F\u8981\u6367\u8179\u5927\u7B11\u3002"},{id:"naichong",estateColor:"#d96850",name:"\u5976\u866B",subtitle:"\u6162\u6162\u6765\uFF0C\u4E5F\u4F1A\u53D1\u8D22",color:"#f66b45",accent:"#f6c944",style:"\u7A33\u5065\u50A8\u84C4",description:"\u7EA2\u8272\u8F6F\u58F3\u548C\u91D1\u9EC4\u6761\u7EB9\uFF0C\u5B89\u9759\u5730\u6512\u4E0B\u81EA\u5DF1\u7684\u5C0F\u91D1\u5E93\u3002"},{id:"naishu",estateColor:"#4888ca",name:"\u5976\u9F20",subtitle:"\u597D\u5730\u6BB5\uFF0C\u5148\u5230\u5148\u5F97",color:"#e4b745",accent:"#79b7c2",style:"\u79EF\u6781\u7F6E\u4E1A",description:"\u5927\u8033\u6735\u3001\u7EC6\u5C3E\u5DF4\uFF0C\u5411\u6BCF\u4E00\u4F4D\u5976\u5BB6\u4EBA\u6325\u6325\u624B\u3002"},{id:"naigou",estateColor:"#9564c4",name:"\u5976\u72D7",subtitle:"\u5F00\u5FC3\u6BCF\u4E00\u5929",color:"#f5d25f",accent:"#8c744a",style:"\u5747\u8861\u7ECF\u8425",description:"\u5782\u8033\u3001\u4E0A\u7FD8\u5C3E\u5DF4\u548C\u5F00\u6000\u7B11\u8138\u7684\u56DB\u8DB3\u5976\u4F34\u3002"},{id:"naidan",estateColor:"#df9139",name:"\u5976\u86CB",subtitle:"\u8EBA\u7740\u4E5F\u80FD\u8D62",color:"#f8d44c",accent:"#91af55",style:"\u5F3A\u52BF\u5EFA\u8BBE",description:"\u5C0F\u5DE7\u7684\u91D1\u9EC4\u8272\u86CB\u5F62\u8EAB\u4F53\u3001\u7EFF\u773C\u775B\u548C\u77ED\u77ED\u7684\u5634\uFF0C\u6EDA\u7740\u4E5F\u80FD\u53D1\u8D22\u3002"},{id:"naicha",estateColor:"#c67396",name:"\u5976\u8336",subtitle:"\u6696\u5FC3\u8865\u7ED9",color:"#f3c958",accent:"#58372e",style:"\u8865\u7ED9\u652F\u63F4",description:"\u91D1\u8272\u5976\u8336\u676F\u3001\u5706\u6DA6\u676F\u628A\u3001\u6DF1\u8272\u624B\u5957\u548C\u77ED\u817F\uFF0C\u7B11\u7740\u4E3A\u5976\u4F34\u8865\u7ED9\u3002"}],oi=[{name:"\u5976\u8336\u8857",color:"#ee9e83"},{name:"\u5927\u7B11\u5DF7",color:"#edcb56"},{name:"\u5976\u5757\u5DE5\u574A",color:"#a7b9e4"},{name:"\u5976\u5BB6\u82B1\u56ED",color:"#8cbea0"},{name:"\u5976\u5E01\u6E2F",color:"#70b8ca"},{name:"\u661F\u91CE\u5927\u9053",color:"#c79cce"}],T1={0:["start","\u5976\u5BB6\u8D77\u70B9","\u6BCF\u6B21\u7ECF\u8FC7\u9886\u53D6 400 \u5976\u5E01"],3:["event","\u8868\u60C5\u5305\u5E7F\u573A"],6:["bank","\u5976\u5E01\u94F6\u884C"],9:["shop","\u5976\u5BB6\u4FBF\u5229\u5E97"],12:["hospital","\u5976\u86D9\u7597\u517B\u9662"],15:["stock","\u5976\u5BB6\u8BC1\u5238\u6240"],18:["event","\u91CE\u751F\u72D7\u5976\u644A"],21:["spirit","\u5927\u7B11\u795E\u6BBF"],24:["rest","\u5976\u86D9\u7684\u5C0F\u7A9D"],27:["shop","\u5976\u4F34\u8865\u7ED9\u7AD9"],30:["bank","\u5976\u5E01\u50A8\u84C4\u6240"],33:["event","\u5976\u86D9\u8857\u821E\u53F0"],36:["tax","\u5976\u6CE1\u6E05\u6D01\u7AD9"],39:["stock","\u5976\u5BB6\u4EA4\u6613\u6240"]},hm=["\u73CD\u73E0\u5976\u8336\u94FA","\u5976\u8336\u5C0F\u7AD9","\u5927\u7B11\u7167\u76F8\u9986","\u5976\u86D9\u5267\u573A","\u5976\u5757\u9762\u5305\u623F","\u5976\u866B\u751C\u54C1\u5C4B","\u91D1\u8033\u9F20\u5546\u5E97","\u5976\u5BB6\u5C0F\u82B1\u56ED","\u5FEB\u4E50\u6D17\u6FA1\u5802","\u5976\u8336\u591C\u5E02","\u5976\u5E01\u7801\u5934","\u5927\u809A\u5B50\u65C5\u9986","\u7EFF\u773C\u775B\u4E66\u5E97","\u5976\u9F20\u73A9\u5177\u5C4B","\u661F\u91CE\u5C0F\u5267\u573A","\u5976\u86D9\u8BBE\u8BA1\u5BA4","\u5976\u76D6\u5DE5\u5382","\u5FAE\u7B11\u4FBF\u5229\u5E97","\u5976\u5BB6\u9910\u5385","\u91D1\u86D9\u5C0F\u516C\u5BD3","\u5976\u7F50\u8F66\u7AD9","\u86CB\u58F3\u5C55\u89C8\u9986","\u5976\u9999\u5546\u573A","\u5927\u7B11\u7535\u5F71\u9662","\u5706\u809A\u5B50\u98DF\u5802","\u5976\u5BB6\u90AE\u5C40"],fn=Array.from({length:48},(i,e)=>{let t,n;if(e<40){let a=2.4-e*Math.PI*2/40;t=14*Math.cos(a)+.7*Math.sin(a*3),n=10.7*Math.sin(a)+.65*Math.cos(a*2)}else{let a=e<44?35:15,o=e<44?15:35,l=2.4-a*Math.PI*2/40,c=2.4-o*Math.PI*2/40,h=((e<44?e-40:e-44)+1)/5,u=14*Math.cos(l)+.7*Math.sin(l*3),f=10.7*Math.sin(l)+.65*Math.cos(l*2),d=14*Math.cos(c)+.7*Math.sin(c*3),g=10.7*Math.sin(c)+.65*Math.cos(c*2),v=e<44?-1:1;t=u+(d-u)*h,n=f+(g-f)*h+Math.sin(h*Math.PI)*v*3.7}let s=T1[e],r=e>=40?e<44?4:5:Math.floor(e/7)%6;return{id:e,x:t,z:n,kind:s?.[0]||"property",name:s?.[1]||hm[(e-Math.floor(e/3))%hm.length],description:s?.[2]||"",group:r,price:180+r*90+e%3*30,next:e<39?[e+1]:e===39?[0]:e<43?[e+1]:e===43?[15]:e<47?[e+1]:[35]}});fn[35].next=[36,40];fn[15].next=[16,44];for(let i of fn){let e=i.id<40?fn[(i.id+39)%40]:fn[i.id===40?35:i.id===44?15:i.id-1],t=fn[i.next[0]],n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s);i.yaw=Math.atan2(-s,n);let a=-s/r,o=n/r;(i.id<40&&a*i.x+o*i.z<0||i.id>=40&&o*(i.id<44?-1:1)<0)&&(a=-a,o=-o),i.lotX=i.x+a*2.3,i.lotZ=i.z+o*2.3,i.facing=Math.atan2(-a,-o)}var um=[{id:0,name:"\u5976\u8336\u5B9E\u4E1A",short:"\u8336",price:100,group:0},{id:1,name:"\u5927\u7B11\u4F20\u5A92",short:"\u7B11",price:120,group:1},{id:2,name:"\u5976\u5757\u5DE5\u574A",short:"\u5757",price:80,group:2},{id:3,name:"\u5976\u5E01\u7269\u6D41",short:"\u6E2F",price:150,group:4}],Zt={dice:{name:"\u5FC3\u60F3\u4E8B\u6210\u5361",icon:"\u2684",price:30,description:"\u63B7\u9AB0\u524D\u6307\u5B9A\u672C\u6B21\u603B\u6B65\u6570 1\u20146\uFF1B\u914D\u5408\u843D\u70B9\u9884\u89C8\u9009\u62E9\u4E70\u5730\u3001\u8865\u7ED9\u6216\u907F\u79DF\u3002",target:"steps"},block:{name:"\u5976\u5757\u8DEF\u969C",icon:"\u25A6",price:20,description:"\u524D\u65B9 1\u20146 \u683C\u653E\u8DEF\u969C\uFF0C\u9996\u540D\u7ECF\u8FC7\u8005\u505C\u4E0B\uFF1B\u53EF\u4EE5\u622A\u4F4F\u5BF9\u624B\uFF0C\u4E5F\u80FD\u505C\u5728\u5FC3\u4EEA\u5730\u5757\u3002",target:"ahead"},turn:{name:"\u5976\u86D9\u56DE\u5934\u5361",icon:"\u21B6",price:20,description:"\u672C\u56DE\u5408\u6CBF\u6765\u8DEF\u5012\u9000\uFF1B\u53EF\u4EE5\u907F\u5F00\u9AD8\u79DF\u91D1\uFF0C\u4F46\u5012\u9000\u4E0D\u9886\u53D6\u8D77\u70B9\u5956\u52B1\u3002",target:"self"},shield:{name:"\u5FEB\u4E50\u514D\u79DF\u5361",icon:"\u2302",price:35,description:"\u62B5\u6D88\u4E0B\u4E00\u7B14\u79DF\u91D1\uFF0C\u4FDD\u7559\u81F3\u89E6\u53D1\u3002\u53EF\u4E0E\u63A7\u9AB0\u3001\u56DE\u5934\u7B49\u5361\u7EC4\u5408\u4F7F\u7528\u3002",target:"self"},steal:{name:"\u5976\u9F20\u62A2\u5730\u5361",icon:"\u2691",price:45,description:"\u505C\u5728\u5BF9\u624B\u5730\u4EA7\u65F6\u6536\u8D2D\u8BE5\u5730\u4EA7\uFF1B\u5411\u4E1A\u4E3B\u652F\u4ED8\u5730\u4EA7\u6210\u672C\u7684 125%\uFF0C\u53EF\u6253\u65AD\u5176\u8857\u533A\u7ECF\u8425\u3002",target:"enemy"},recover:{name:"\u91CE\u751F\u72D7\u5976",icon:"\u2667",price:20,description:"\u79FB\u9664\u4F11\u517B\u4E0E\u9709\u8FD0\uFF0C\u83B7\u5F97 80 \u5976\u5E01\u8865\u7ED9\u3002",target:"self"},demolish:{name:"\u5976\u5757\u62C6\u9664\u5361",icon:"\u265C",price:25,description:"\u62C6\u53BB 8 \u683C\u8303\u56F4\u5185\u4E00\u5C42\u623F\u5C4B\uFF0C\u6216\u6E05\u9664\u8DEF\u969C\uFF1B\u4E0D\u4F1A\u593A\u8D70\u571F\u5730\u3002",target:"enemyBuilt"},build:{name:"\u5976\u5BB6\u5DE5\u7A0B\u961F",icon:"\u2692",price:65,description:"\u4E3A 8 \u683C\u8303\u56F4\u5185\u81EA\u5DF1\u7684\u5730\u4EA7\u514D\u8D39\u52A0\u76D6\u4E00\u5C42\uFF0C\u4E0D\u5360\u5E38\u89C4\u5EFA\u8BBE\u6B21\u6570\u3002",target:"own"},slow:{name:"\u6162\u6162\u8D70\u5361",icon:"\u2667",price:25,description:"\u81EA\u5DF1\u63A5\u4E0B\u6765\u4E09\u6B21\u884C\u52A8\u5404\u8D70 1 \u683C\uFF0C\u4FBF\u4E8E\u8FDE\u7EED\u4E70\u5730\u6216\u4EAB\u53D7\u5F53\u5730\u5EFA\u8BBE\u6298\u6263\u3002",target:"self"}},Rs={fortune:{name:"\u5927\u7B11\u8D22\u795E",icon:"\u2726",description:"\u975E\u4EA4\u6613\u6536\u5165\u589E\u52A0 25%"},misfortune:{name:"\u5976\u6CE1\u9709\u795E",icon:"\u2601",description:"\u79DF\u91D1\u548C\u8D39\u7528\u589E\u52A0 25%"},guardian:{name:"\u5976\u86CB\u5B88\u62A4",icon:"\u25C9",description:"\u62B5\u6321\u4E00\u6B21\u8D1F\u9762\u4E8B\u4EF6"}},li=[{id:0,name:"\u6B65\u884C",dice:1,price:0},{id:1,name:"\u5976\u86D9\u81EA\u884C\u8F66",dice:2,price:600},{id:2,name:"\u5976\u7F50\u5C0F\u8F66",dice:3,price:1200}],ld=[{name:"\u5168\u7F51\u4E00\u8D77\u6367\u8179\u5927\u7B11",text:"\u4F60\u7684\u5927\u7B11\u8868\u60C5\u5305\u8D70\u7EA2\uFF0C\u6536\u83B7 280 \u5976\u5E01\u3002",kind:"gain",amount:280,stock:1,change:.12},{name:"\u91CE\u751F\u72D7\u5976\u8865\u7ED9",text:"\u6536\u5230\u5976\u5BB6\u4EBA\u7684\u8865\u7ED9\uFF0C\u6062\u590D\u4F11\u517B\u5E76\u83B7\u4E00\u74F6\u91CE\u751F\u72D7\u5976\u3002",kind:"recover"},{name:"\u5976\u8336\u6D12\u4E86\u4E00\u5730",text:"\u652F\u4ED8\u6E05\u6D01\u8D39\u7528 180 \u5976\u5E01\u3002",kind:"loss",amount:180},{name:"\u9009\u62E9\u4F60\u7684\u5976\u4F34",text:"\u5976\u4F34\u9001\u6765\u4E00\u5F20\u968F\u673A\u9053\u5177\u5361\u3002",kind:"card"},{name:"\u5976\u86D9\u8857\u821E\u5F00\u573A",text:"\u6F14\u51FA\u6536\u83B7 200 \u5976\u5E01\uFF0C\u5927\u7B11\u4F20\u5A92\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:200,stock:1,change:.1},{name:"\u5976\u5757\u5DE5\u5382\u505C\u7535",text:"\u4FEE\u7406\u8BBE\u5907\u652F\u4ED8 150 \u5976\u5E01\uFF0C\u5976\u5757\u5DE5\u574A\u884C\u60C5\u56DE\u843D\u3002",kind:"loss",amount:150,stock:2,change:-.12},{name:"\u5976\u8336\u65B0\u54C1\u5927\u5356",text:"\u54C1\u9274\u6D3B\u52A8\u83B7\u5F97 160 \u5976\u5E01\uFF0C\u5976\u8336\u5B9E\u4E1A\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:160,stock:0,change:.12},{name:"\u5976\u86D9\u7231\u6D17\u6FA1",text:"\u6D17\u9999\u9999\uFF0C\u4F11\u606F\u4E00\u56DE\u5408\uFF0C\u83B7\u8865\u8D34 100 \u5976\u5E01\u3002",kind:"rest",amount:100},{name:"\u5976\u5E01\u6E2F\u53E3\u987A\u98CE",text:"\u8FD0\u8F93\u6536\u5165 220 \u5976\u5E01\uFF0C\u5976\u5E01\u7269\u6D41\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:220,stock:3,change:.1},{name:"\u795E\u79D8\u5976\u7F50",text:"\u6253\u5F00\u5976\u7F50\uFF0C\u8BF7\u4E00\u4F4D\u5976\u5BB6\u795E\u7075\u6765\u505A\u5BA2\u3002",kind:"spirit"}],Qr=[2,8,14,20,26,32,38,42,46];var dm=new WeakMap;function Pi(i,e=fn){Array.isArray(e)||(e=fn);let t=dm.get(e);return t||(t={minX:Math.min(...e.map(n=>n.x))-1,maxX:Math.max(...e.map(n=>n.x))+1,minZ:Math.min(...e.map(n=>n.z))-1,maxZ:Math.max(...e.map(n=>n.z))+1},dm.set(e,t)),{x:12+(i.x-t.minX)*336/(t.maxX-t.minX),y:12+(i.z-t.minZ)*226/(t.maxZ-t.minZ)}}function ho(i=fn){return i.flatMap(e=>e.next.map(t=>({from:e.id,to:t,a:Pi(e,i),b:Pi(i[t],i)})))}function fm(i,e){return e==="Home"?0:e==="End"?fn.length-1:["ArrowRight","ArrowDown"].includes(e)?(i+1)%fn.length:["ArrowLeft","ArrowUp"].includes(e)?(i+fn.length-1)%fn.length:i}var pm=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),or=i=>Math.round(i).toLocaleString("zh-CN");function mm(i,e){let t=i.s.ownership[e],n=i.player,s=lt(t),r,a;t.level&&["park","research"].includes(s)?(r="free",a="\u8FD9\u9879\u8BBE\u65BD\u4E0D\u6536\u53D6\u5230\u8BBF\u8D39\u7528\uFF0C\u514D\u79DF\u6548\u679C\u4F1A\u4FDD\u7559\u3002"):i.s.players[t.player].skip?(r="rest",a="\u4E1A\u4E3B\u6B63\u5728\u4F11\u517B\uFF0C\u672C\u6B21\u6682\u505C\u6536\u8D39\uFF0C\u514D\u79DF\u6548\u679C\u4F1A\u4FDD\u7559\u3002"):n.shield&&(r="shield",a="\u5DF2\u5907\u514D\u79DF\u6548\u679C\u4F1A\u62B5\u6D88\u8FD9\u6B21\u8D39\u7528\uFF1B\u65C5\u9986\u4E5F\u4E0D\u4F1A\u5B89\u6392\u5165\u4F4F\u3002");let o=r?[{amount:0,label:"\u514D\u8D39"}]:wo(i,e).map(h=>({...h,amount:i.payment(h.amount,t.player)})),l=Math.min(...o.map(h=>h.amount)),c=Math.max(...o.map(h=>h.amount));return a??=s==="hotel"&&t.level?"\u968F\u673A\u5165\u4F4F 1\u20143 \u56DE\u5408\uFF0C\u6309\u5B9E\u9645\u5929\u6570\u6536\u8D39\uFF0C\u5165\u4F4F\u671F\u95F4\u6682\u505C\u884C\u52A8\u3002":s==="mall"&&t.level?"\u6D88\u8D39\u500D\u7387\u5728\u786E\u8BA4\u4ED8\u6B3E\u540E\u62BD\u7B7E\uFF1B\u4E0B\u65B9\u5217\u51FA\u6240\u6709\u53EF\u80FD\u8D39\u7528\u3002":s==="gas"&&t.level?"\u6309\u672C\u6B21\u5B9E\u9645\u884C\u8FDB\u6B65\u6570\u4E0E\u4EA4\u901A\u5DE5\u5177\u6536\u8D39\u3002":"\u91D1\u989D\u5DF2\u8BA1\u5165\u5F53\u524D\u89D2\u8272\u6280\u80FD\u3001\u795E\u7075\u6548\u679C\u4E0E\u8857\u533A\u8054\u8425\u3002",{min:l,max:c,options:o,exemption:r,rule:a,range:l===c?or(l):`${or(l)}\u2014${or(c)}`,random:o.length>1,type:s}}function gm(i,e){let t=i.s.ownership[e.id];return t?.level&&["hotel","mall"].includes(lt(t))?`\u8D39\u7528 ${mm(i,e.id).range}`:`\u4ED8\u79DF ${e.rent}`}function vm(i){let e=i.player,t=i.tiles[e.pos],n=i.s.ownership[e.pos],s=mm(i,e.pos),r=i.takeoverPrice(e.pos),a=e.money+e.deposit,o=s.random?`<div class="arrival-fees">${s.options.map(h=>`<span><b>${pm(h.label)}</b>${or(h.amount)} \u5976\u5E01</span>`).join("")}</div>`:"",l=s.max>a?`<p class="arrival-warning">${s.min>a?"\u73B0\u91D1\u4E0E\u5B58\u6B3E\u4E0D\u8DB3\uFF0C\u4ED8\u6B3E\u65F6\u9700\u8981\u7B79\u6B3E\u3002":"\u8F83\u9AD8\u8D39\u7528\u53EF\u80FD\u8D85\u8FC7\u73B0\u91D1\u4E0E\u5B58\u6B3E\uFF0C\u4ED8\u6B3E\u65F6\u53EF\u80FD\u9700\u8981\u7B79\u6B3E\u3002"}</p>`:"",c=s.exemption==="shield"?"\u4F7F\u7528\u5DF2\u5907\u514D\u79DF":s.max===0?"\u7EE7\u7EED\u65C5\u884C":"\u786E\u8BA4\u4ED8\u6B3E";return`<div class="arrival-summary">${ar({...t,buildingType:n.buildingType},n.level,i.char(i.s.players[n.player]).estateColor)}<div><span class="badge">${n.level?Ht[s.type].name:"\u5F85\u5EFA\u7A7A\u5730"}</span><strong>${s.range}<small> \u5976\u5E01</small></strong><span>${s.random?"\u53EF\u80FD\u8D39\u7528\u8303\u56F4":s.max?"\u672C\u6B21\u5E94\u4ED8":"\u672C\u6B21\u514D\u8D39"}</span></div></div><p class="arrival-rule">${s.rule}</p>${o}<div class="arrival-budget"><span>\u73B0\u91D1 <b>${or(e.money)}</b> \xB7 \u5B58\u6B3E <b>${or(e.deposit)}</b></span><span>\u6536\u8D2D <b>${or(r)}</b> \xB7 \u6D88\u8017\u4E00\u5F20\u8D2D\u5730\u5361</span></div>${l}<div class="button-grid decision-actions"><button class="secondary" data-act="estatePay">${c}</button><button class="primary" data-act="estateBuy" ${e.money<r?"disabled":""}>\u8D2D\u5730\u5361\u6536\u8D2D</button></div>`}function A1(i,e){let t=i.preview(i.s.remaining,{first:e}),n=i.player.pos,s=i.tiles[n].next.flatMap(w=>i.preview(i.s.remaining,{first:w})),r=[n,...s.flatMap(w=>w.path)],a=r.map(w=>Pi(i.tiles[w],i.tiles)),o=a.map(w=>w.x),l=a.map(w=>w.y),c=(Math.min(...o)+Math.max(...o))/2,h=(Math.min(...l)+Math.max(...l))/2,u=Math.max(...l)-Math.min(...l)>Math.max(...o)-Math.min(...o),f=w=>{let P=Pi(i.tiles[w],i.tiles);return u?{x:c+P.y-h,y:h-P.x+c}:P},d=r.map(f),g=Math.min(...d.map(w=>w.x))-18,v=Math.min(...d.map(w=>w.y))-18,m=Math.max(...d.map(w=>w.x))-g+18,p=Math.max(...d.map(w=>w.y))-v+18,x=f(n),y=e===i.tiles[n].next[0]?"#4f8268":"#b28335",_=ho(i.tiles).map(w=>{let P=f(w.from),I=f(w.to);return`<path d="M${P.x},${P.y} L${I.x},${I.y}"/>`}).join(""),A=t.map(w=>{let P=[n,...w.path].map(f);return`<polyline fill="none" points="${P.map(I=>`${I.x.toFixed(1)},${I.y.toFixed(1)}`).join(" ")}"/><circle cx="${P.at(-1).x}" cy="${P.at(-1).y}" r="5"/>`}).join("");return`<svg class="route-drawing" viewBox="${g} ${v} ${m} ${p}" role="img" aria-label="\u672C\u6761\u8DEF\u7EBF\u4E0E\u6700\u7EC8\u843D\u70B9\u7684\u5C40\u90E8\u9884\u89C8"><g fill="none" stroke="#cfc2a0" stroke-width="3" stroke-linecap="round">${_}</g><g stroke="${y}" fill="${y}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${A}</g><circle cx="${x.x}" cy="${x.y}" r="5" fill="#b74e36" stroke="#fff3cf" stroke-width="2"/></svg>`}function xm(i,e){let t=i.s,n=i.player,s=t.mapVersion===2?n.pos===35?"\u6668\u5149\u652F\u8DEF\u7ED5\u5F00\u6E05\u6D01\u7AD9\uFF0C\u4E5F\u4F1A\u8DF3\u8FC7\u8D77\u70B9\u5956\u91D1\u3002":"\u82B1\u56ED\u652F\u8DEF\u7ED5\u5F00\u533B\u9662\uFF0C\u4E5F\u4F1A\u9519\u8FC7\u4E8B\u4EF6\u4E0E\u795E\u6BBF\u3002":"\u5185\u5C9B\u6377\u5F84\u6539\u53D8\u6CBF\u9014\u505C\u9760\u70B9\u3002";return`<p class="branch-intro">\u5269\u4F59 <b>${t.remaining}</b> \u6B65\uFF0C\u9009\u597D\u540E\u7EE7\u7EED\u672C\u6B21\u884C\u7A0B\u3002${s}</p><div class="route-choices">${i.tiles[n.pos].next.map((r,a)=>`<article class="route-choice"><h3>${a===0?"\u6CBF\u57CE\u9547\u4E3B\u8DEF":t.mapVersion===2?n.pos===35?"\u8D70\u6668\u5149\u652F\u8DEF":"\u8D70\u82B1\u56ED\u652F\u8DEF":"\u8D70\u5185\u5C9B\u6377\u5F84"}<span class="badge">${a===0?"\u4E3B\u8DEF":t.mapVersion===2?"\u77013\u683C":"\u5185\u5C9B"}</span></h3>${A1(i,r)}<p class="route-next">\u4E0B\u4E00\u683C\uFF1A${pm(i.tiles[r].name)}</p><div class="route-outcomes">${i.preview(t.remaining,{first:r}).map(l=>`<p>\u6700\u7EC8\uFF1A${e(l)}</p>`).join("")}</div><button class="primary" data-act="branch" data-id="${r}">\u5C31\u8D70${a===0?"\u4E3B\u8DEF":t.mapVersion===2?"\u652F\u8DEF":"\u6377\u5F84"}</button></article>`).join("")}</div>`}var Wc=class{constructor(){this.sequence=0,this.items=[]}record(e){let t=Object.freeze({...e,sequence:++this.sequence});return this.items.push(t),this.items.length>16&&this.items.shift(),t}after(e){return this.items.filter(t=>t.sequence>e)}},Xc=class{read(e,t=!0){if(!t||this.game!==e)return this.game=e,this.sequence=e.transfers.sequence,[];let n=e.transfers.after(this.sequence);return this.sequence=e.transfers.sequence,n}},cd=new WeakMap;function ym(i,e){let t=[];for(let[n,s,r]of[[e.from,"\u2212","money-out"],[e.to,"+","money-in"]]){let a=i.querySelector(`[data-player-id="${n}"]`);if(!a)continue;let o={};cd.set(a,o),a.classList.remove("money-in","money-out"),a.classList.add(r),a.dataset.transferLabel=s+e.amount,t.push(()=>{cd.get(a)===o&&(a.classList.remove("money-in","money-out"),delete a.dataset.transferLabel,cd.delete(a))})}return()=>t.forEach(n=>n())}var qc=[[-14,0],[-12,-9],[0,-11],[12,-9],[14,0],[12,9],[0,11],[-12,9],[-14,0]],R1={0:["start","\u5976\u5BB6\u8F66\u7AD9"],3:["event","\u6668\u5149\u5E7F\u573A"],6:["bank","\u5317\u5CB8\u94F6\u884C"],10:["shop","\u5976\u8336\u8857\u8865\u7ED9\u5E97"],15:["stock","\u5E02\u6C11\u8BC1\u5238\u6240"],18:["hospital","\u5976\u5BB6\u533B\u9662"],20:["event","\u8857\u89D2\u65B0\u95FB\u53F0"],22:["spirit","\u5927\u7B11\u795E\u6BBF"],26:["bank","\u5357\u5CB8\u94F6\u884C"],30:["shop","\u6E2F\u6E7E\u8865\u7ED9\u5E97"],34:["rest","\u6EE8\u6CB3\u5C0F\u7A9D"],36:["tax","\u793E\u533A\u6E05\u6D01\u7AD9"],38:["event","\u6E2F\u53E3\u96C6\u5E02"],39:["stock","\u6E2F\u6E7E\u4EA4\u6613\u6240"]},C1=[["\u6668\u5149\u5976\u8336\u94FA","\u73CD\u73E0\u5C0F\u5C4B","\u7EFF\u773C\u775B\u4E66\u5E97","\u5976\u76D6\u70D8\u7119\u5C4B","\u5DF7\u53E3\u8336\u9986"],["\u5927\u7B11\u5267\u573A","\u5976\u5BB6\u5F71\u793E","\u661F\u5149\u7167\u76F8\u9986","\u56DE\u58F0\u4E66\u5C4B","\u5976\u4F34\u7535\u53F0"],["\u5976\u5757\u5DE5\u574A","\u5976\u7F50\u4F5C\u574A","\u5976\u9999\u9762\u5305\u623F","\u79EF\u6728\u4FEE\u7406\u94FA","\u8857\u89D2\u4ED3\u5E93"],["\u5976\u5BB6\u82B1\u56ED","\u5706\u809A\u5B50\u65C5\u9986","\u94F6\u674F\u5C0F\u9662","\u5976\u4F34\u516C\u5BD3","\u82B1\u56ED\u9910\u5385"],["\u5976\u5E01\u7801\u5934","\u5976\u5BB6\u90AE\u5C40","\u5E06\u8239\u65C5\u5E97","\u6E2F\u6E7E\u9910\u5385","\u5FAE\u7B11\u4FBF\u5229\u5E97"],["\u661F\u91CE\u5546\u573A","\u5976\u86D9\u8BBE\u8BA1\u5BA4","\u86CB\u58F3\u5C55\u89C8\u9986","\u661F\u91CE\u516C\u5BD3","\u5976\u9999\u767E\u8D27"]],Ii=Array.from({length:48},(i,e)=>{let t,n;if(e<40){let o=Math.floor(e/5),l=e%5/5;[t,n]=qc[o].map((c,h)=>c+(qc[o+1][h]-c)*l)}else{let o=e<44,l=o?35:15,c=o?3:23,h=((o?e-40:e-44)+1)/5,u=g=>{let v=Math.floor(g/5),m=g%5/5;return qc[v].map((p,x)=>p+(qc[v+1][x]-p)*m)},f=u(l),d=u(c);t=f[0]+(d[0]-f[0])*h+Math.sin(h*Math.PI)*(o?4.2:-4.2),n=f[1]+(d[1]-f[1])*h}let s=e<40?Math.min(5,Math.floor(e/7)):e<44?0:3,r=R1[e],a=180+s*70+e%3*30;return{id:e,x:t,z:n,group:s,kind:r?.[0]||"property",name:r?.[1]||C1[s][e%5],price:a,description:"",next:e<39?[e+1]:e===39?[0]:e<43?[e+1]:e===43?[3]:e<47?[e+1]:[23]}});Ii[35].next=[36,40];Ii[15].next=[16,44];for(let i of Ii){let e=Ii[i.id<40?(i.id+39)%40:i.id===40?35:i.id===44?15:i.id-1],t=Ii[i.next[0]],n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s);i.yaw=Math.atan2(-s,n);let a=-s/r,o=n/r,l=i.id<40;(l&&a*i.x+o*i.z<0||!l&&a*i.x+o*i.z>0)&&(a=-a,o=-o),i.lotX=i.x+a*2.3,i.lotZ=i.z+o*2.3,i.facing=Math.atan2(-a,-o)}var hd=i=>i===2?Ii:fn,es={1:{name:"\u7ECF\u5178\u53D1\u8D22\u5C9B",description:"\u4E0D\u89C4\u5219\u73AF\u5C9B\u4E0E\u8DE8\u5C9B\u957F\u6377\u5F84\u3002\u897F\u4FA7\u5165\u53E3\u901A\u5F80\u4E1C\u5CB8\uFF0C\u4E1C\u4FA7\u5165\u53E3\u901A\u5F80\u897F\u5CB8\uFF1B\u4FDD\u5B58\u7684\u5BF9\u5C40\u59CB\u7EC8\u4FDD\u7559\u81EA\u5DF1\u7684\u5730\u56FE\u3002"},2:{name:"\u5976\u5BB6\u6EE8\u6CB3\u9547",description:"48 \u683C\u57CE\u9547\u73AF\u7EBF\uFF0C\u5357\u5317\u53CC\u94F6\u884C\u4E0E\u8865\u7ED9\u5E97\uFF1B\u4E24\u6761\u652F\u8DEF\u5404\u7701 3 \u683C\u3002\u897F\u4FA7\u652F\u8DEF\u8DF3\u8FC7\u8D77\u70B9\u5956\u52B1\uFF0C\u4E1C\u4FA7\u652F\u8DEF\u7ED5\u5F00\u533B\u9662\u53CA\u795E\u6BBF\u3002"}};var Cs=i=>Math.round(i).toLocaleString("zh-CN"),ud=[["cash","\u73B0\u91D1","#e1b64e"],["deposit","\u5B58\u6B3E","#65a58c"],["property","\u5730\u4EA7","#cb8464"],["stocks","\u80A1\u7968","#75a6bb"],["vehicle","\u4EA4\u901A\u5DE5\u5177","#aa976b"]];function P1(i){let e=i.ranking(),t=1;return e.map((n,s)=>(s&&(n.alive!==e[s-1].alive||i.worth(n)!==i.worth(e[s-1]))&&(t=s+1),{player:n,rank:t,assets:i.assets(n),lots:i.owned(n).length,winner:t===1}))}var I1='<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M27 23H10v12q0 26 26 25M73 23h17v12q0 26-26 25" fill="none" stroke="#b18235" stroke-width="7"/><path d="M24 16h52v26q0 24-26 28Q24 66 24 42Z" fill="#f1c55b" stroke="#ab7935" stroke-width="3"/><path d="M33 23h7v20q0 12 7 17" fill="none" stroke="#ffed9f" stroke-width="5" stroke-linecap="round"/><path d="M45 69h10v14H45Z" fill="#c08d38"/><path d="M31 83h38v9H31Z" fill="#d7a146" stroke="#9b7032" stroke-width="2"/><path d="m50 29 4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1Z" fill="#fff2b6"/></svg>';function D1(i){let e=i.assets,t=ud.reduce((n,[s])=>n+e[s],0);return`<div class="result-ledger"><div class="asset-ribbon" role="img" aria-label="\u603B\u8D44\u4EA7 ${Cs(t)} \u5976\u5E01\uFF0C\u4E0D\u542B\u8D37\u6B3E\u6263\u9664">${ud.filter(([n])=>e[n]>0).map(([n,s,r])=>`<span style="width:${e[n]/t*100}%;background:${r}" title="${s} ${Cs(e[n])}"></span>`).join("")}</div><dl>${ud.map(([n,s,r])=>`<div><dt><i style="background:${r}"></i>${s}</dt><dd>${Cs(e[n])}</dd></div>`).join("")}<div class="result-loan"><dt>\u6263\u9664\u8D37\u6B3E</dt><dd>\u2212${Cs(e.loan)}</dd></div><div class="result-total"><dt>\u51C0\u8D44\u4EA7</dt><dd>${Cs(e.total)}</dd></div></dl></div>`}function _m(i){let e=P1(i),t=e.filter(o=>o.winner),n=t.map(o=>i.char(o.player).name).join("\u3001"),s=e.find(o=>o.player.human),r=e.filter(o=>o.player.alive),a=t.length===1&&r.length>1?t[0].assets.total-r[1].assets.total:null;return`<div class="settlement"><section class="winner-banner"><div class="winner-trophy">${I1}</div><div class="winner-faces">${t.map(o=>`<span>${dn(o.player.character)}</span>`).join("")}</div><h3>${n}${t.length>1?"\u5E76\u5217\u593A\u51A0":"\u593A\u51A0\uFF01"}</h3><p>${r.length===1?"\u575A\u6301\u5230\u6700\u540E\uFF0C\u6210\u4E3A\u552F\u4E00\u5B58\u6D3B\u5976\u4F34":`\u5B8C\u6210 ${i.s.round} \u8F6E\u65C5\u884C\uFF0C\u6309\u51C0\u8D44\u4EA7\u7ED3\u7B97`}</p><strong class="winner-score">${Cs(t[0].assets.total)}<small> \u5976\u5E01\u51C0\u8D44\u4EA7</small></strong>${a!==null?`<span class="winner-lead">\u9886\u5148\u7B2C\u4E8C\u540D ${Cs(a)} \u5976\u5E01</span>`:""}</section><div class="settlement-meta"><span>${es[i.s.mapVersion].name}</span><span>${e.length} \u4EBA \xB7 \u7B2C ${i.s.round} / ${i.s.maxRounds} \u8F6E</span></div>${s?`<p class="personal-result">${s.winner?"\u606D\u559C\u4F60\uFF0C\u767B\u4E0A\u5976\u5BB6\u5BCC\u8C6A\u699C\u9996\uFF01":`\u4F60\u7684\u672C\u5C40\u6392\u540D\uFF1A\u7B2C ${s.rank} \u540D${s.player.alive?"":" \xB7 \u5DF2\u7834\u4EA7\u9000\u51FA"}`} \xB7 \u62E5\u6709 ${s.lots} \u5757\u5730\u4EA7</p>`:""}<h3 class="settlement-heading">\u5976\u5BB6\u8D44\u4EA7\u699C <small>\u70B9\u5F00\u5976\u4F34\u67E5\u770B\u8D44\u4EA7\u660E\u7EC6</small></h3><div class="settlement-ranks">${e.map(o=>{let l=o.player,c=i.char(l);return`<details class="result-entry ${l.human?"result-is-you":""}" ${l.human?"open":""}><summary><span class="result-place">${o.rank}</span><span class="result-face" style="background:${c.color}">${dn(c.id)}</span><span class="result-name">${c.name}${l.human?"<b>\u4F60</b>":""}<small>${l.alive?o.winner?"\u672C\u5C40\u51A0\u519B":o.lots+" \u5757\u5730\u4EA7":"\u5DF2\u7834\u4EA7"}</small></span><strong>${Cs(o.assets.total)}<small>\u51C0\u8D44\u4EA7 \u25BE</small></strong></summary>${D1(o)}</details>`}).join("")}</div><p class="settlement-rule">\u5B58\u6D3B\u89D2\u8272\u4F18\u5148\uFF1B\u540C\u4E3A\u5B58\u6D3B\u6216\u7834\u4EA7\u4E14\u51C0\u8D44\u4EA7\u76F8\u540C\u5219\u5E76\u5217\u3002\u5730\u4EA7\u6309\u8D2D\u5165\u4E0E\u5EFA\u7B51\u540D\u4E49\u6210\u672C\u4F30\u503C\uFF0C\u80A1\u7968\u6309\u7ED3\u7B97\u65F6\u5E02\u4EF7\u8BA1\u4EF7\uFF0C\u4EA4\u901A\u5DE5\u5177\u6309\u8D2D\u5165\u4EF7\u8BA1\u4EF7\uFF1B\u70B9\u5238\u548C\u624B\u724C\u4E0D\u8BA1\u5165\u51C0\u8D44\u4EA7\u3002</p><div class="button-grid result-actions"><button class="primary" data-act="newGame">\u518D\u53BB\u65C5\u884C\u4E00\u6B21</button><button class="secondary" data-act="viewBoard">\u56DE\u770B\u5C0F\u5C9B</button><button class="secondary" data-act="export">\u4FDD\u5B58\u672C\u5C40\u5B58\u6863</button></div></div>`}function L1(i){let e=new Map;return i.forEach((t,n)=>{e.has(t)?e.get(t).count++:e.set(t,{key:t,index:n,count:1})}),[...e.values()]}function Mm(i){let e=i.player,t=L1(e.cards),n=t.filter(({key:s})=>!i.cardHint(s)).length;return`${As("dice","\u79FB\u52A8\u5361\u5728\u63B7\u9AB0\u524D\u7528\uFF1B\u5EFA\u8BBE\u3001\u62C6\u9664\u548C\u514D\u79DF\u53EF\u5728\u884C\u52A8\u524D\u540E\u4F7F\u7528\u3002\u9009\u5361\u540E\u4F1A\u663E\u793A\u76EE\u6807\u4E0E\u6548\u679C\u3002")}<div class="card-bag-summary"><strong>${e.cards.length}<small> / 15 \u5F20</small></strong><span>${t.length} \u79CD\u9053\u5177<br>${e.human?n+" \u79CD\u5F53\u524D\u53EF\u7528":"\u6B63\u5728\u67E5\u770B\u7535\u8111\u5361\u5305"}</span></div><div class="collectible-grid">${t.length?t.map(({key:s,index:r,count:a})=>{let o=Zt[s],l=i.cardHint(s),c=["dice","turn","slow","block"].includes(s)?"\u51FA\u53D1\u524D":"\u884C\u52A8\u524D\u540E";return`<article class="row collectible-card bag-card ${l?"card-unavailable":"card-ready"}"><div class="card-heading"><span class="card-timing">${c}</span><b class="card-quantity" aria-label="\u62E5\u6709 ${a} \u5F20">\xD7${a}</b></div>${qn(s)}<h3>${o.name}</h3><p>${o.description}</p><div class="card-availability">${l||(e.human?o.target==="self"?"\u4F7F\u7528\u540E\u7ACB\u5373\u751F\u6548":"\u9009\u62E9\u5730\u56FE\u76EE\u6807":"\u7535\u8111\u56DE\u5408\u4E2D")}</div><button class="${l?"secondary":"primary"}" data-act="card" data-index="${r}" ${l||!e.human?"disabled":""}>${l?"\u6682\u4E0D\u53EF\u7528":o.target==="self"?"\u4F7F\u7528\u5361\u7247":"\u9009\u62E9\u76EE\u6807"}</button></article>`}).join(""):'<div class="empty">\u5361\u5305\u7A7A\u7A7A\u7684\uFF0C\u5230\u5730\u56FE\u4E0A\u7684\u5546\u5E97\u8865\u7ED9\u5427\u3002</div>'}</div>`}var bm="https://taoyuchen74.github.io/naiwa-monopoly/";function Sm(i=globalThis.location){try{let e=new URL(i.href);return!["http:","https:"].includes(e.protocol)||["localhost","127.0.0.1","[::1]"].includes(e.hostname)?bm:(e.username="",e.password="",new URL("./",e).href)}catch{return bm}}function Ps(i,e,t){let n=(i.opponents||[]).slice(0,t-1).filter(s=>s&&s!=="random");return n.includes(e)?"\u7535\u8111\u89D2\u8272\u4E0D\u80FD\u4E0E\u4F60\u9009\u62E9\u7684\u89D2\u8272\u76F8\u540C\u3002":new Set(n).size!==n.length?"\u6BCF\u540D\u89D2\u8272\u53EA\u80FD\u5360\u4E00\u4E2A\u5E2D\u4F4D\uFF0C\u8BF7\u5C06\u91CD\u590D\u89D2\u8272\u6539\u4E3A\u968F\u673A\u3002":n.some(s=>!an.some(r=>r.id===s))?"\u5B58\u5728\u672A\u5236\u4F5C\u7684\u89D2\u8272\u3002":i.seed!==void 0&&i.seed!==""&&(!/^\d+$/.test(String(i.seed))||+i.seed<1||+i.seed>4294967295)?"\u5BF9\u5C40\u79CD\u5B50\u8BF7\u8F93\u5165 1\u20144294967295\uFF0C\u7559\u7A7A\u5219\u968F\u673A\u3002":""}function Em(i,e,t,n){if(!t)return[i,...an.filter(h=>h.id!==i).map(h=>h.id)].slice(0,e);let s=Array.from({length:e-1},(h,u)=>t[u]||"random"),r=Ps({opponents:s,seed:""},i,e);if(r)throw new RangeError(r);let a=new Set([i,...s.filter(h=>h!=="random")]),o=an.map(h=>h.id).filter(h=>!a.has(h)),l=n>>>0^2772213287,c=()=>(l^=l<<13,l^=l>>>17,l^=l<<5,(l>>>0)/4294967296);for(let h=o.length-1;h>0;h--){let u=Math.floor(c()*(h+1));[o[h],o[u]]=[o[u],o[h]]}return[i,...s.map(h=>h==="random"?o.pop():h)]}function lr(i={}){return{opponents:Array.isArray(i.opponents)?i.opponents.slice(0,5).map(e=>e==="dounai"?"naicha":e):[],seatLevels:Array.isArray(i.seatLevels)?i.seatLevels.slice(0,5):[],startingCash:[2e3,3200,5e3,8e3].includes(+i.startingCash)?+i.startingCash:3200,startingTickets:[0,60,120].includes(+i.startingTickets)?+i.startingTickets:60,mapVersion:+i.mapVersion==1?1:2,randomStart:i.randomStart!==!1,seed:String(i.seed||"")}}var wm=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Tm(i,e,t,n){return`<p class="panel-note">\u50CF\u521B\u5EFA\u7B56\u7565\u5BF9\u5C40\u4E00\u6837\u914D\u7F6E\u6BCF\u4E2A\u7535\u8111\u5E2D\u4F4D\u3002\u56FA\u5B9A\u89D2\u8272\u5148\u9884\u7559\uFF0C\u968F\u673A\u5E2D\u4F4D\u4ECE\u5269\u4F59\u89D2\u8272\u4E2D\u62BD\u53D6\uFF0C\u4E0D\u91CD\u590D\u3001\u4E0D\u62A2\u5360\u56FA\u5B9A\u5E2D\u4F4D\u3002</p><div class="setup-human"><span>${dn(e)}</span><div><strong>\u4F60\u7684\u89D2\u8272\uFF1A${an.find(s=>s.id===e).name}</strong><small>\u603B\u4EBA\u6570 ${t}\uFF0C\u5176\u4F59 ${t-1} \u4E2A\u5E2D\u4F4D\u4E3A\u7535\u8111\u3002</small></div></div><h3>\u7535\u8111\u9635\u5BB9</h3><div id="opponentSeats">${Array.from({length:t-1},(s,r)=>{let a=i.opponents[r]||"random",o=i.seatLevels[r]||"inherit";return`<div class="opponent-seat"><span class="seat-portrait">${a==="random"?'<span class="random-face">\u2684</span>':dn(a)}</span><div><label for="opponent${r}">\u7535\u8111 ${r+1}</label><select id="opponent${r}" data-setup-seat="${r}" aria-label="\u7535\u8111${r+1}\u89D2\u8272"><option value="random">\u968F\u673A\u89D2\u8272</option>${an.map(l=>`<option value="${l.id}" ${a===l.id?"selected":""} ${l.id===e?"disabled":""}>${l.name}${l.id===e?"\uFF08\u4F60\u7684\u89D2\u8272\uFF09":""}</option>`).join("")}</select></div><div><label for="seatLevel${r}">\u5355\u72EC\u5F3A\u5EA6</label><select id="seatLevel${r}" data-setup-level="${r}" aria-label="\u7535\u8111${r+1}\u5F3A\u5EA6">${[["inherit","\u8DDF\u968F\u5168\u5C40"],["easy","\u8F7B\u677E"],["normal","\u6807\u51C6"],["hard","\u9AD8\u624B"]].map(([l,c])=>`<option value="${l}" ${o===l?"selected":""}>${c}</option>`).join("")}</select></div></div>`}).join("")}</div><div class="row-actions"><button class="secondary" data-act="allRandom">\u5168\u90E8\u968F\u673A</button></div><h3>\u5BF9\u5C40\u89C4\u5219</h3><div class="setup-grid"><label>\u521D\u59CB\u5976\u5E01<select id="setupCash">${[2e3,3200,5e3,8e3].map(s=>`<option ${i.startingCash===s?"selected":""}>${s}</option>`).join("")}</select></label><label>\u521D\u59CB\u70B9\u5238<select id="setupTickets">${[0,60,120].map(s=>`<option ${i.startingTickets===s?"selected":""}>${s}</option>`).join("")}</select></label><label>\u5730\u56FE<select id="setupMap"><option value="2" ${i.mapVersion===2?"selected":""}>\u5976\u5BB6\u6EE8\u6CB3\u9547</option><option value="1" ${i.mapVersion===1?"selected":""}>\u7ECF\u5178\u53D1\u8D22\u5C9B</option></select></label><label>\u5148\u624B<select id="setupInitiative"><option value="random" ${i.randomStart?"selected":""}>\u968F\u673A\u5148\u624B</option><option value="human" ${i.randomStart?"":"selected"}>\u6211\u5148\u51FA\u53D1</option></select></label><label class="setup-seed">\u5BF9\u5C40\u79CD\u5B50<input id="setupSeed" type="text" inputmode="numeric" maxlength="10" value="${wm(i.seed)}" placeholder="\u7559\u7A7A\u968F\u673A\uFF1B\u76F8\u540C\u8BBE\u7F6E\u53EF\u590D\u73B0"></label></div><p class="stock-explain">\u5976\u5E01\u548C\u70B9\u5238\u5BF9\u6240\u6709\u73A9\u5BB6\u76F8\u540C\u3002\u79CD\u5B50\u51B3\u5B9A\u968F\u673A\u9635\u5BB9\u548C\u5BF9\u5C40\u968F\u673A\u5E8F\u5217\uFF1B\u76F8\u540C\u64CD\u4F5C\u3001\u8BBE\u7F6E\u548C\u79CD\u5B50\u624D\u80FD\u590D\u73B0\u3002</p><p id="setupError" class="setup-error" role="status">${wm(Ps(i,e,t))}</p><div class="button-grid"><button class="secondary" data-act="resetAdvanced">\u6062\u590D\u9ED8\u8BA4</button><button class="primary" data-act="applyAdvanced" ${Ps(i,e,t)?"disabled":""}>\u4FDD\u5B58\u8BBE\u7F6E</button></div>`}var U1=i=>Math.round(i).toLocaleString("zh-CN");function Yc(i,e){let t=i.s.ownership[e];if(!t)return'<p class="panel-note">\u65E0\u4E3B\u7A7A\u5730 \xB7 \u505C\u9760\u540E\u53EF\u8D2D\u4E70</p>';let n=lt(t),s=i.baseRent(e,t.level),r=i.s.players[t.player],a;if(!t.level)a=`\u7A7A\u5730\u8FC7\u8DEF\u8D39 ${i.rent(e)} \xB7 \u5230\u8BBF\u540E\u53EF\u9009\u62E9\u5EFA\u7B51`;else if(n==="hotel"){let o=Math.round(s*.65);a=`\u6BCF\u665A ${o} \u5976\u5E01 \xB7 \u968F\u673A\u5165\u4F4F 1\u20143 \u56DE\u5408<br>\u4F4F\u5BBF\u603B\u8D39 ${o}\u2014${o*3} \u5976\u5E01\uFF0C\u5165\u4F4F\u671F\u95F4\u6682\u505C\u884C\u52A8`}else if(n==="mall")a=`\u6D88\u8D39\u57FA\u6570 ${s} \xB7 \u62BD\u7B7E\u500D\u7387 75% / 100% / 150%<br>\u5355\u6B21\u6D88\u8D39 ${Math.round(s*.75)}\u2014${Math.round(s*1.5)} \u5976\u5E01`;else if(n==="gas")a="\u57FA\u7840\u8D39 30 + \u5B9E\u8D70\u6B65\u6570 \xD7 15 + \u4EA4\u901A\u8D39<br>\u4EA4\u901A\u8D39\uFF1A\u6B65\u884C 0 / \u81EA\u884C\u8F66 60 / \u5C0F\u8F66 120";else if(n==="chain")a=`\u5168\u5C9B ${i.owned(r).filter(l=>l.level&&lt(l)==="chain").length} \u95F4\u5206\u5E97 \xB7 \u6BCF\u95F4\u7EDF\u4E00\u6536\u8D39 ${i.rent(e)}<br>\u6BCF\u591A\u4E00\u95F4\u52A0\u6536 50\uFF0C\u6700\u9AD8 400 \u5976\u5E01`;else if(n==="park")a="\u514D\u8D39\u5F00\u653E \xB7 \u6BCF\u4F4D\u505C\u9760\u8005\u83B7\u5F97 10 \u70B9\u5238";else if(n==="research"){let o=t.researchProgress||0;a=`${Zt[t.researchCard||"dice"].name} \xB7 \u7814\u53D1\u8FDB\u5EA6 ${o}/3<br><span class="research-meter" aria-label="\u7814\u53D1\u8FDB\u5EA6 ${o}/3">${[0,1,2].map(l=>`<i class="${l<o?"filled":""}"></i>`).join("")}</span>\u518D\u51FA\u53D1 ${3-o} \u6B21\u5B8C\u6210\u7814\u53D1`}else a=`\u4F4F\u5B85\u79DF\u91D1 ${i.rent(e)} \xB7 \u5176\u4E2D\u8857\u533A\u8054\u8425 +${r.skip?0:Math.max(0,i.rent(e)-s)}${t.level<di(t)?`<br>\u4E0B\u4E00\u7EA7\u79DF\u91D1 ${i.rent(e,t.level+1)}`:""}`;return`<div class="facility-facts"><span class="badge">${t.level?Ht[n].name:"\u5F85\u5EFA\u7A7A\u5730"} \xB7 ${i.char(r).name}</span><p>${a}</p>${r.skip&&!["park","research"].includes(n)?"<small>\u4E1A\u4E3B\u4F11\u517B\u4E2D\uFF0C\u5F53\u524D\u6682\u505C\u6536\u8D39\u3002</small>":""}<small>\u6536\u8D39\u4E3A\u57FA\u7840\u89C4\u5219\uFF0C\u89D2\u8272\u6280\u80FD\u3001\u795E\u7075\u548C\u514D\u79DF\u5361\u4F1A\u5F71\u54CD\u5B9E\u4ED8\u3002</small></div>`}function Am(i,e){let t=i.tiles[e],n=i.s.ownership[e],s=i.char().estateColor;if(!n||n.player!==i.player.id)return"<p>\u8BF7\u5148\u62E5\u6709\u8FD9\u5757\u5730\u4EA7\u3002</p>";if(!n.level)return`<p class="panel-note">\u7A7A\u5730\u5DF2\u5F52\u4F60\u6240\u6709\u3002\u9009\u62E9\u8FD9\u6B21\u8981\u5EFA\u8BBE\u7684\u8BBE\u65BD\uFF1B\u5E38\u89C4\u5EFA\u8BBE\u6BCF\u6B21\u505C\u9760\u9650\u4E00\u6B21\u3002\u7C7B\u578B\u5EFA\u6210\u540E\u56FA\u5B9A\uFF0C\u62C6\u9664\u540E\u53EF\u91CD\u65B0\u9009\u62E9\u3002</p><div class="business-choices">${Object.entries(Ht).map(([l,c])=>`<article class="business-choice">${ar({...t,buildingType:l},1,s)}<h3>${c.name}</h3><span class="badge">${c.max===1?"\u4E00\u7EA7\u8BBE\u65BD":"\u53EF\u52A0\u76D6\u81F3\u4E94\u7EA7"}</span><p>${c.text}</p><div class="row-head"><strong>${U1(i.buildPrice(t,l))} \u5976\u5E01</strong><button class="primary" data-act="construct" data-id="${e}" data-type="${l}" ${i.canConstruct(e,l)?"":"disabled"}>\u5EFA\u8BBE</button></div></article>`).join("")}</div>`;let r=lt(n),a=Ht[r],o=di(n);return`${ar({...t,buildingType:n.buildingType},n.level,s)}<h3>${a.name} \xB7 ${n.level}/${o}\u7EA7</h3>${Yc(i,e)}<p>${a.text}</p><div class="stat-grid"><div class="stat-box"><strong>${n.level<o?i.buildPrice(t):"\u5DF2\u8FBE\u4E0A\u9650"}</strong><span>\u4E0B\u4E00\u7EA7\u5EFA\u8BBE\u8D39</span></div></div>${r==="research"?`<h3>\u7814\u53D1\u8FDB\u5EA6 ${n.researchProgress||0}/3</h3><p>\u5F53\u524D\u9879\u76EE\uFF1A${Zt[n.researchCard||"dice"].name}\u3002\u66F4\u6362\u9879\u76EE\u5C06\u91CD\u7F6E\u8FDB\u5EA6\u3002</p><div class="research-options">${as(n.level).map(l=>`<button class="secondary" data-act="research" data-id="${e}" data-key="${l}" ${n.researchCard===l?"disabled":""}>${Zt[l].name}</button>`).join("")}</div>`:""}<p class="stock-explain">\u65C5\u9986\u6309\u5165\u4F4F\u5929\u6570\u3001\u5546\u573A\u6309\u62BD\u7B7E\u500D\u7387\u3001\u52A0\u6CB9\u7AD9\u6309\u5B9E\u9645\u884C\u7A0B\u6536\u8D39\uFF0C\u9884\u89C8\u4EC5\u4F5C\u53C2\u8003\u3002\u4F4F\u5B85\u6309\u8857\u533A\u8054\u8425\uFF1B\u8FDE\u9501\u5E97\u6309\u5168\u56FE\u5206\u5E97\u6570\u6536\u8D39\u3002</p><div class="button-grid"><button class="secondary" data-act="cancel">\u7EE7\u7EED\u65C5\u884C</button><button class="primary" data-act="upgrade" data-id="${e}" ${i.canUpgrade(e)?"":"disabled"}>${n.level<o?"\u52A0\u76D6\u4E00\u5C42":"\u4E0D\u80FD\u7EE7\u7EED\u52A0\u76D6"}</button></div>`}var hr=i=>Math.round(i).toLocaleString("zh-CN"),ea=i=>(i>0?"+":"")+hr(i),cr=i=>i===null?"":i>0?"profit":i<0?"loss":"flat",dd=i=>i===null?"\u2014":ea(i),Rm=i=>i===null?"\u672A\u77E5":hr(i),Cm=i=>i===null?"\u2014":i.toLocaleString("zh-CN",{maximumFractionDigits:2});function Pm(i,{window:e=20,held:t=!1}={}){let n=i.s.players[0],s=i.s,r=i.portfolio(n),a=i.player.id===n.id&&n.human&&i.manageable()&&s.round%7!==0,o=a&&s.phase!=="debt",l=r.unrealized===null||r.unpriced?null:r.realized+r.unrealized;return`${As("stocks","\u770B\u4E70\u5165\u5747\u4EF7\u4E0E\u5F53\u524D\u4EF7\u7684\u5DEE\u989D\uFF1B\u7EA2\u8272\u4E3A\u76C8\u5229\uFF0C\u7EFF\u8272\u4E3A\u4E8F\u635F\u3002\u5DF2\u5B9E\u73B0\u76C8\u4E8F\u53EA\u5728\u5356\u51FA\u65F6\u7ED3\u7B97\u3002","naishu")}<div class="portfolio-total"><span>\u80A1\u7968\u7D2F\u8BA1\u76C8\u4E8F${n.stockLegacy?"\uFF08\u66F4\u65B0\u540E\u5DF2\u77E5\u90E8\u5206\uFF09":""}</span><strong class="${cr(l)}">${dd(l)}</strong><small>\u5DF2\u5B9E\u73B0\u76C8\u4E8F \uFF0B \u5F53\u524D\u6301\u4ED3\u6D6E\u76C8</small></div><div class="portfolio-summary"><div><span>\u6301\u4ED3\u5E02\u503C</span><strong>${hr(r.value)}</strong></div><div><span>\u6301\u4ED3\u6210\u672C</span><strong>${Rm(r.cost)}</strong></div><div><span>\u6301\u4ED3\u6D6E\u52A8\u76C8\u4E8F</span><strong class="${cr(r.unrealized)}">${dd(r.unrealized)}</strong></div><div><span>\u5356\u51FA\u5DF2\u5B9E\u73B0\u76C8\u4E8F</span><strong class="${cr(r.realized)}">${ea(r.realized)}</strong></div></div>${n.stockLegacy||r.unknown||r.unpriced?'<p class="panel-note">\u65E7\u5B58\u6863\u7684\u5386\u53F2\u76C8\u4E8F\u4ECE\u672C\u6B21\u66F4\u65B0\u540E\u8D77\u8BB0\u3002\u65E7\u6301\u4ED3\u65E0\u4E70\u5165\u4EF7\u65F6\uFF0C\u6210\u672C\u4E0E\u6D6E\u76C8\u663E\u793A\u672A\u77E5\uFF0C\u5356\u51FA\u4E0D\u8BA1\u5165\u5DF2\u77E5\u76C8\u4E8F\uFF1B\u6E05\u4ED3\u540E\u91CD\u65B0\u4E70\u5165\u5373\u53EF\u5B8C\u6574\u8BB0\u8D26\u3002</p>':""}<div class="market-toolbar"><span class="market-status">${s.round%7===0?"\u5468\u65E5\u4F11\u5E02 \xB7 \u53EF\u67E5\u770B\u4E0D\u53EF\u4EA4\u6613":i.player.id!==n.id?"\u7535\u8111\u56DE\u5408 \xB7 \u6682\u505C\u67E5\u770B\u6211\u7684\u6301\u4ED3":"\u4EA4\u6613\u5F00\u653E \xB7 \u7B2C "+s.round+" \u8F6E"}</span><button class="secondary" data-act="stockFilter">${t?"\u67E5\u770B\u5168\u90E8\u80A1\u7968":"\u53EA\u770B\u6211\u7684\u6301\u4ED3"}</button><label>\u8D70\u52BF<select id="stockWindow" aria-label="\u8D70\u52BF\u89C2\u5BDF\u6570\u91CF">${[5,10,20].map(c=>`<option value="${c}" ${e===c?"selected":""}>\u8FD1 ${c} \u6B21\u62A5\u4EF7</option>`).join("")}</select></label></div><p class="stock-explain">\u5747\u4EF7\u6309\u52A0\u6743\u5E73\u5747\u6210\u672C\u8BA1\u7B97\uFF1B\u65E0\u624B\u7EED\u8D39\u3002\u6D6E\u76C8\u968F\u62A5\u4EF7\u53D8\u5316\uFF0C\u51C0\u8D44\u4EA7\u5DF2\u5305\u542B\u6301\u4ED3\u5E02\u503C\u3002\u6700\u8FD140\u7B14\u6210\u4EA4\u4FDD\u7559\uFF0C\u5DF2\u5B9E\u73B0\u76C8\u4E8F\u7D2F\u8BA1\u4E0D\u6E05\u96F6\u3002</p>${s.market.map((c,h)=>{let u=r.positions[h];if(t&&!u.qty)return"";let f=c.history.slice(-e),d=f.length>1?f:[c.price,c.price],g=Math.min(...d,u.average??c.price)*.95,v=Math.max(...d,u.average??c.price)*1.05,m=Math.max(1,v-g),p=A=>52-(A-g)/m*44,x=d.map((A,w)=>`${12+w*316/(d.length-1)},${p(A)}`).join(" "),y=u.average===null?"":`<line x1="12" x2="328" y1="${p(u.average)}" y2="${p(u.average)}" stroke="#9c762e" stroke-dasharray="5 4"/><text x="16" y="${Math.max(11,p(u.average)-4)}" fill="#735423" font-size="9">\u6210\u672C ${Cm(u.average)}</text>`,_=c.change/(c.price-c.change)*100;return`<section class="stock-card" data-stock="${h}"><div class="company-seal">${qn(["tea","theater","factory","vehicle"][h])}</div><div class="row-head"><strong>${c.name}</strong><span class="stock-price ${cr(c.change)}">${c.price}<small>${ea(c.change)} / ${_>=0?"+":""}${_.toFixed(1)}%</small></span></div><svg class="sparkline" viewBox="0 0 340 62" role="img" aria-label="${c.name}\u62A5\u4EF7\u8D70\u52BF${u.average===null?"":"\u4E0E\u6301\u4ED3\u6210\u672C\u7EBF"}">${y}<polyline points="${x}" stroke="${c.change>=0?"#b24a35":"#3f8362"}" stroke-width="2.5" fill="none"/><circle cx="328" cy="${p(c.price)}" r="3" fill="#805c2d"/></svg><div class="stock-metrics"><div><span>\u6301\u6709\u80A1\u6570</span><b>${u.qty}</b></div><div><span>\u4E70\u5165\u5747\u4EF7</span><b>${Cm(u.average)}</b></div><div><span>\u6301\u4ED3\u5E02\u503C</span><b>${hr(u.value)}</b></div><div><span>\u6301\u4ED3\u6D6E\u76C8</span><b class="${cr(u.unrealized)}">${dd(u.unrealized)}${u.rate===null?"":`<small>${u.rate>=0?"+":""}${u.rate.toFixed(1)}%</small>`}</b></div><div><span>\u5269\u4F59\u6210\u672C</span><b>${Rm(u.cost)}</b></div><div><span>\u5DF2\u5B9E\u73B0\u76C8\u4E8F</span><b class="${cr(u.realized)}">${ea(u.realized)}</b></div></div><div class="quantity-shortcuts" aria-label="${c.name}\u5FEB\u6377\u80A1\u6570">${[1,5,10].map(A=>`<button data-act="stockQty" data-id="${h}" data-qty="${A}">${A}\u80A1</button>`).join("")}<button data-act="stockQty" data-id="${h}" data-qty="maxBuy">\u6700\u591A\u4E70</button><button data-act="stockQty" data-id="${h}" data-qty="maxSell">\u5168\u90E8\u5356</button></div><div class="input-row"><input id="qty${h}" data-stock-qty="${h}" type="number" min="1" max="10000" value="1" step="1" inputmode="numeric" aria-label="${c.name}\u4EA4\u6613\u80A1\u6570"><button class="secondary" data-act="trade" data-id="${h}" data-sign="1" ${!o||n.money<c.price?"disabled":""}>\u4E70\u5165</button><button class="secondary" data-act="trade" data-id="${h}" data-sign="-1" ${!a||!u.qty?"disabled":""}>\u5356\u51FA</button></div><p id="stockPreview${h}" class="trade-preview" aria-live="polite">\u4E70 1 \u80A1\u9700 ${c.price} \u5976\u5E01\uFF1B\u5356\u51FA\u524D\u53EF\u9884\u4F30\u672C\u7B14\u76C8\u4E8F\u3002</p></section>`}).join("")||'<div class="empty">\u8FD8\u6CA1\u6709\u80A1\u7968\u6301\u4ED3\u3002\u5207\u6362\u201C\u67E5\u770B\u5168\u90E8\u80A1\u7968\u201D\u6D4F\u89C8\u3002</div>'}<h3>\u6700\u8FD1\u6210\u4EA4</h3>${n.stockTrades.length?`<div class="trade-history">${n.stockTrades.slice(0,16).map(c=>`<div><span>\u7B2C ${c.round} \u8F6E \xB7 ${s.market[c.stock].short}</span><b>${c.qty>0?"\u4E70\u5165":"\u5356\u51FA"} ${Math.abs(c.qty)}\u80A1 \xD7 ${c.price}</b><span class="${cr(c.profit)}">${c.qty>0?"\u652F\u51FA "+hr(c.qty*c.price):c.profit===null?"\u6210\u672C\u672A\u77E5":"\u672C\u7B14 "+ea(c.profit)}</span></div>`).join("")}</div>`:'<p class="stock-explain">\u6210\u4EA4\u540E\u4F1A\u5728\u8FD9\u91CC\u8BB0\u5F55\u80A1\u6570\u3001\u4EF7\u683C\u4E0E\u5356\u51FA\u76C8\u4E8F\u3002</p>'}`}function Zc(i,e,t=document){let n=t.querySelector("#qty"+e),s=t.querySelector(`[data-stock="${e}"]`);if(!n||!s)return;let r=Number(n.value),a=i.position(e,i.s.players[0]),o=Number.isInteger(r)&&r>0&&r<=1e4,l=i.player.id===0&&i.player.human&&i.manageable()&&i.s.round%7!==0;s.querySelector('[data-sign="1"]').disabled=!o||!l||i.s.phase==="debt"||r*a.price>i.s.players[0].money,s.querySelector('[data-sign="-1"]').disabled=!o||!l||r>a.qty;let c=a.cost===null?null:r===a.qty?a.cost:Math.round(a.cost*r/a.qty),h=c===null?null:r*a.price-c;t.querySelector("#stockPreview"+e).textContent=o?`\u4E70\u5165\u9700 ${hr(r*a.price)}\uFF1B${r>a.qty?"\u6301\u4ED3\u4E0D\u8DB3\u4EE5\u5356\u51FA\u8BE5\u6570\u91CF":`\u5356\u51FA\u56DE\u6B3E ${hr(r*a.price)}\uFF0C\u672C\u7B14${h===null?"\u76C8\u4E8F\u672A\u77E5":"\u76C8\u4E8F "+ea(h)}`}\u3002`:"\u8BF7\u8F93\u5165 1\u201410,000 \u7684\u6574\u6570\u80A1\u6570\u3002"}var ts={easy:{name:"\u8F7B\u677E",reserve:650,cardThreshold:1/0,description:"\u7B80\u5355\u4E70\u5730\uFF0C\u8F83\u5C11\u7528\u5361\uFF0C\u5C94\u8DEF\u968F\u610F\u9009\u62E9\uFF0C\u9002\u5408\u9996\u6B21\u8BD5\u73A9\u3002"},normal:{name:"\u6807\u51C6",reserve:400,cardThreshold:55,description:"\u6BD4\u8F83\u843D\u70B9\u98CE\u9669\u3001\u7ECF\u8425\u8857\u533A\u3001\u4F7F\u7528\u9053\u5177\u548C\u4E70\u5356\u80A1\u7968\u3002"},hard:{name:"\u9AD8\u624B",reserve:550,cardThreshold:25,description:"\u8BC4\u4F30\u4E0B\u4E00\u8F6E\u79DF\u91D1\u3001\u4F18\u5148\u8FDE\u7247\u5EFA\u8BBE\uFF0C\u7EC4\u5408\u7528\u5361\u5E76\u7BA1\u7406\u73B0\u91D1\u548C\u80A1\u7968\u3002"}},fd=i=>ts[i.aiDifficulty()]||ts.normal;var uo={naiwa:{name:"\u7A33\u7A33\u7ECF\u8425",icon:"\u2302",text:"\u5E38\u89C4\u52A0\u76D6\u82B1\u8D39\u51CF\u5C11 15%\uFF1B\u6B63\u5411\u7ECF\u8FC7\u8D77\u70B9\u989D\u5916\u83B7\u5F97 80 \u5976\u5E01\u3002"},naichong:{name:"\u7EC6\u6C34\u957F\u6D41",icon:"\u25B1",text:"\u6BCF\u6B21\u51FA\u53D1\u9886\u53D6 60 \u5976\u5E01\uFF1B\u5230\u5E97\u8D2D\u5361\u53EA\u9700\u539F\u4EF7\u7684 80% \u70B9\u5238\u3002"},naishu:{name:"\u7CBE\u6253\u7EC6\u7B97",icon:"\u2691",text:"\u652F\u4ED8\u79DF\u91D1\u51CF\u5C11 20%\uFF1B\u8D2D\u5730\u5361\u6536\u8D2D\u4EF7\u518D\u6253\u4E5D\u6298\uFF0C\u4E1A\u4E3B\u6309\u5B9E\u9645\u6210\u4EA4\u4EF7\u6536\u6B3E\u3002"},naigou:{name:"\u50BB\u72D7\u6709\u50BB\u798F",icon:"\u2667",text:"\u6BCF\u6B21\u51FA\u53D1\u6709\u4E00\u534A\u673A\u4F1A\u6361\u5230 240 \u5976\u5E01\uFF0C\u5426\u5219\u6454\u4E22\u6700\u591A 40 \u5976\u5E01\uFF1B\u6B65\u6570\u4E0D\u53D7\u5F71\u54CD\u3002"},naidan:{name:"\u8EBA\u7740\u4E5F\u80FD\u8D62",icon:"\u2605",text:"\u6BCF\u6B21\u51FA\u53D1\u81EA\u52A8\u83B7\u5F97 75 \u5976\u5E01\uFF1B\u6BCF\u56DB\u6B21\u51FA\u53D1\uFF0C\u4E3A\u81EA\u5DF1\u6700\u4F4E\u7EA7\u7684\u4E00\u5757\u5730\u4EA7\u514D\u8D39\u52A0\u76D6\u4E00\u5C42\u3002\u65E0\u9700\u64CD\u4F5C\uFF0C\u6700\u9AD8\u4E94\u7EA7\u3002",strong:!0},naicha:{name:"\u6696\u5FC3\u8865\u7ED9",icon:"\u2661",text:"\u975E\u79DF\u91D1\u8D39\u7528\u51CF\u5C11 50%\uFF1B\u6BCF\u4E09\u6B21\u51FA\u53D1\u8865\u5145 20 \u70B9\u5238\u548C\u4E00\u5F20\u91CE\u751F\u72D7\u5976\u3002\u6EE1\u5305\u6309\u539F\u89C4\u5219\u8865\u507F\u3002"}},ur=(i,e,t=e.character)=>i.s.talents===!0&&e.character===t;function Im(i){let e=i.player;if(!i.s.talents||e.talentReady)return!1;e.talentReady=!0,e.departures=(e.departures||0)+1;let t=e.character;if(t==="naichong"&&i.income(e,60,"\u3010\u7EC6\u6C34\u957F\u6D41\u3011"),t==="naigou")if(i.int(2)===0)i.income(e,240,"\u3010\u50BB\u72D7\u6709\u50BB\u798F\u3011\u6361\u5230\u94B1\u5305");else{let n=Math.min(40,e.money);e.money-=n,i.log(`\u5976\u72D7\u3010\u50BB\u72D7\u6709\u50BB\u798F\u3011\u6454\u4E22 ${n} \u5976\u5E01\uFF0C\u62CD\u62CD\u809A\u5B50\u7EE7\u7EED\u8D70\u3002`)}if(t==="naidan"){i.income(e,75,"\u3010\u8EBA\u7740\u4E5F\u80FD\u8D62\u3011");let n=e.departures%4===0&&i.owned(e).filter(s=>s.level<i.buildingLimit(s)).sort((s,r)=>s.level-r.level||s.tile.id-r.tile.id)[0];if(n){let s=i.s.ownership[n.tile.id];s.level===0&&(s.buildingType="residence"),s.level++,i.log(`\u5976\u86CB\u3010\u8EBA\u7740\u4E5F\u80FD\u8D62\u3011\u300C${n.tile.name}\u300D\u514D\u8D39\u52A0\u76D6\u81F3 ${n.level+1} \u7EA7\u3002`)}}return t==="naicha"&&e.departures%3===0&&(i.coupons(e,20),i.log("\u5976\u8336\u3010\u6696\u5FC3\u8865\u7ED9\u3011\u83B7\u5F97 20 \u70B9\u5238\u3002"),i.giveCard(e,"recover")),!0}function Dm(i,e,t="auto"){let n=t!=="auto"&&t==="landscape"!=i>=e;return{width:n?e:i,height:n?i:e,rotated:n}}function N1(i,e,t,n=!1){return n?{x:e-t.top,y:t.right-i}:{x:i-t.left,y:e-t.top}}function jc(i,e,t){return N1(i,e,t.getBoundingClientRect(),document.getElementById("app")?.dataset.rotated==="true")}function F1(i){for(let e of["sheetBackdrop","sheet","toast","bootError"]){let t=i.ownerDocument?.getElementById(e);t&&!i.contains(t)&&i.appendChild(t)}}var Jc=class{constructor(e,t,{notify:n=()=>{},resize:s=()=>{}}={}){Object.assign(this,{root:e,button:t,notify:n,resize:s,mode:"auto",rules:[]});let r=o=>{for(let l of o)l.type===4&&/(width|height|orientation)/.test(l.conditionText)?this.rules.push({rule:l,condition:l.conditionText}):l.cssRules&&r(l.cssRules)};for(let o of document.styleSheets)try{r(o.cssRules)}catch{}t.addEventListener("click",()=>this.toggle()),window.addEventListener("resize",()=>this.apply()),document.addEventListener("fullscreenchange",()=>this.apply());let a=()=>{this.apply(),requestAnimationFrame(()=>this.apply())};window.addEventListener("orientationchange",a),window.screen?.orientation?.addEventListener?.("change",a),window.visualViewport?.addEventListener("resize",()=>this.apply()),this.apply()}apply(){F1(this.root);let e=window.innerWidth,t=window.innerHeight,n=Dm(e,t,this.mode);this.root.dataset.rotated=String(n.rotated),this.root.style.setProperty("--game-vh",n.height/100+"px"),this.root.style.setProperty("--game-vw",n.width/100+"px"),Object.assign(this.root.style,{position:n.rotated?"fixed":"",left:n.rotated?e+"px":"",top:n.rotated?"0":"",width:n.rotated?n.width+"px":"",height:n.rotated?n.height+"px":"",minHeight:n.rotated?"0":"",transform:n.rotated?"rotate(90deg)":"",transformOrigin:"0 0"});for(let{rule:r,condition:a}of this.rules){if(!n.rotated){r.media.mediaText=a;continue}let o=a.replace(/\(orientation:\s*(portrait|landscape)\)/g,(l,c)=>n.width>=n.height==(c==="landscape")?"(min-width: 0px)":"(max-width: 0px)").replace(/\((max|min)-(width|height):\s*([\d.]+)px\)/g,(l,c,h,u)=>(c==="max"?n[h]<=+u:n[h]>=+u)?"(min-width: 0px)":"(max-width: 0px)");r.media.mediaText=window.matchMedia(o).matches?"all":"not all"}let s=n.width>=n.height;this.button.textContent=s?"\u7AD6\u5C4F":"\u6A2A\u5C4F",this.button.setAttribute("aria-label",s?"\u5207\u6362\u7AD6\u5C4F":"\u5207\u6362\u6A2A\u5C4F"),this.button.title=this.button.getAttribute("aria-label"),this.button.setAttribute("aria-pressed",String(this.mode!=="auto")),requestAnimationFrame(()=>{this.resize(),window.dispatchEvent(new Event("gamelayoutchange"))})}async toggle(){let e=Dm(innerWidth,innerHeight,this.mode);if(this.mode=e.width>=e.height?"portrait":"landscape",this.apply(),matchMedia("(pointer: coarse)").matches){try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen(),await screen.orientation?.lock?.(this.mode)}catch{}this.apply()}this.notify(this.mode==="landscape"?"\u5DF2\u5207\u6362\u6A2A\u5C4F\uFF0C\u6A2A\u63E1\u624B\u673A\u6E38\u73A9\uFF1B\u518D\u70B9\u53EF\u56DE\u7AD6\u5C4F\u3002":"\u5DF2\u5207\u6362\u7AD6\u5C4F\u3002")}};var Kc=class{constructor(e=()=>performance.now()){this.clock=e,this.deadline=0}ready({news:e=!1,moving:t=!1,effects:n=!1}={}){return!e&&!t&&!n&&this.clock()>=this.deadline}after(e,t=1){let n=e==="moving"?520:e==="roll"?1100:e==="event"?1800:800;this.deadline=this.clock()+Math.max(e==="moving"?300:650,n/Math.min(2,Math.max(1,t)))}reset(){this.deadline=0}};function Qc(i){let e=new Map([[0,1]]);for(let t=0;t<i;t++){let n=new Map;for(let[s,r]of e)for(let a=1;a<=6;a++)n.set(s+a,(n.get(s+a)||0)+r/6);e=n}return e}function ns(i,e){let t=i.player,n=i.tiles[e.id],s=i.s.ownership[e.id],r=(e.passesStart?400+(i.s.talents&&t.character==="naiwa"?80:0):0)-e.rent+(e.points||0)*(t.tickets<100?1.5:.3);if(n.kind==="property"?s?s.player===t.id&&(r+=s.level<i.buildingLimit(s)&&t.money>=i.upgradeCost(n)?55:10):r+=t.money>=n.price+250?130+i.district(n.id,t.id).count*65:5:r+={hospital:t.skip?0:-210,tax:-i.payment(180),shop:125,rest:120,spirit:20,event:45,bank:0,stock:0,start:0}[n.kind]||0,i.aiDifficulty()==="hard"){s?.player===t.id&&(r+=i.district(n.id,t.id).count*18),!s&&n.kind==="property"&&(r+=i.district(n.id,t.id).count*50);let a=0;for(let o=1;o<=6;o++){let l=i.preview(o,{from:e.id,reverse:!1});a+=Math.min(...l.map(c=>c.rent))/6}r-=a*.35}return r}function dr(i,e,t){return i.preview(e,t).sort((s,r)=>ns(i,r)-ns(i,s))[0]}function Nm(i,e,{reverse:t=!1}={}){let n=0,s=0;for(let[r,a]of Qc(e)){let o=dr(i,r,{reverse:t});n+=a*ns(i,o),s+=a*o.rent}return{value:n,rent:s}}function pd(i){let e=i.player;if(e.forced)return{count:1,value:ns(i,dr(i,e.forced))};if(e.slowTurns)return{count:1,value:ns(i,dr(i,1))};let t;for(let n=1;n<=(e.vehicle===2?3:e.vehicle===1?2:1);n++){let s={count:n,...Nm(i,n,{reverse:e.reverse})};(!t||s.value>t.value)&&(t=s)}return t}function Lm(i){if(i.aiDifficulty()==="easy"){let s=i.player.cards.indexOf("recover");return s>=0&&(i.player.skip||i.player.spirit==="misfortune")?i.card(s):!1}let e=i.player,t=pd(i),n=[];for(let[s,r]of e.cards.entries()){if(r==="recover"&&n.push({index:s,value:e.skip?600:e.spirit==="misfortune"?250:25}),r==="shield"&&!e.shield&&n.push({index:s,value:t.rent-20}),r==="dice"&&!e.forced)for(let a=1;a<=6;a++)n.push({index:s,target:a,value:ns(i,dr(i,a))-t.value-30});if(r==="turn"&&!e.reverse&&n.push({index:s,value:Nm(i,t.count,{reverse:!0}).value-t.value-25}),r==="slow"&&!e.slowTurns&&!e.forced&&n.push({index:s,value:ns(i,dr(i,1))-t.value-50}),["build","demolish","steal"].includes(r))for(let a of i.cardTargets(r)){let o=i.tiles[a.id];if(r==="demolish"&&a.player===e.id&&!a.obstacle)continue;let l;if(r==="build"&&(l=i.upgradeCost(o)*.55+(i.rent(o.id,a.level+1)-i.rent(o.id))*.3),r==="demolish"&&(l=a.obstacle?i.preview(6).some(c=>c.blocked&&c.id===a.id)?100:0:i.upgradeCost(o)*.25+(i.rent(o.id)-i.rent(o.id,a.level-1))*.3),r==="steal"){if(e.money<i.takeoverPrice(o.id)+450)continue;l=i.district(o.id,e.id).count*55-i.cost(o,a.level,lt(a))*.18}n.push({index:s,target:o.id,value:l})}if(r==="block"&&!e.reverse)for(let a=1;a<=6;a++){let o=e.pos;for(let c=0;c<a;c++)o=i.tiles[o].next[0];if(i.s.blocks[o]!==void 0)continue;let l=0;for(let[c,h]of Qc(t.count)){let u=dr(i,c,{blocks:{...i.s.blocks,[o]:e.id}});l+=h*ns(i,u)}n.push({index:s,target:a,value:l-t.value-45})}}n.sort((s,r)=>r.value-s.value);for(let s of n)if(s.value>fd(i).cardThreshold&&i.card(s.index,s.target))return!0;return!1}function Um(i){let e=i.player;if(e.aiTradeDone||(e.aiTradeDone=!0,i.aiDifficulty()==="easy"))return!1;let t=i.aiDifficulty()==="hard";for(let a=0;a<4;a++){let o=i.position(a);if(o.qty&&o.average!==null&&(o.price>=o.average*(t?1.18:1.12)||o.price<=o.average*(t?.8:.75)))return i.trade(a,-Math.min(o.qty,t?8:4))}if(e.money<2200)return!1;let s=i.s.market.map((a,o)=>{let l=a.history.slice(-5),c=l.reduce((h,u)=>h+u,0)/l.length;return{i:o,ratio:a.price/(t?c:a.history[0]),price:a.price}}).sort((a,o)=>a.ratio-o.ratio)[0];if(t&&s.ratio>.98)return!1;let r=Math.min(t?8:2,Math.floor((e.money-1800)/s.price));return r>0?i.trade(s.i,r):!1}function B1(i){let e=i.player;return e.aiBankDone||!i.canBank()?!1:(e.aiBankDone=!0,e.loan&&e.money>e.loan+700?i.bank("repay",e.loan):i.aiDifficulty()==="hard"&&e.money>1900?i.bank("deposit",Math.min(700,e.money-1400)):!1)}function k1(i,e){let t=i.player,n=i.s.ownership[t.pos];if(!n||n.player!==t.id)return!1;if(!n.level&&i.canBuild(t.pos)){let s=i.owned(t),r=i.s.round>i.s.maxRounds*.7,a=i.aiDifficulty()==="easy"?["residence"]:r?["chain","residence"]:!s.some(o=>lt(o)==="research")&&i.s.round<i.s.maxRounds*.4&&t.money>2e3?["research","residence"]:t.character==="naishu"?["chain","mall","residence"]:t.character==="naigou"?["hotel","residence"]:t.character==="naidan"?["mall","residence"]:s.some(o=>lt(o)==="chain")?["chain","residence"]:i.s.players.some(o=>o.id!==t.id&&o.vehicle)?["gas","residence"]:["hotel","residence"];for(let o of a)if(i.canConstruct(t.pos,o)&&t.money>=i.buildPrice(i.tiles[t.pos],o)+e)return i.construct(t.pos,o);return!1}return i.canUpgrade(t.pos)&&t.money>=i.buildPrice(i.tiles[t.pos])+e?i.upgrade(t.pos):!1}function Fm(i){let e=i.player,t=fd(i);if(e.human||i.s.phase==="finished")return!1;if(i.s.phase==="departure")return i.roll();if(i.s.phase==="roll"){if(e.money<500&&e.deposit&&i.bank("withdraw",Math.min(e.deposit,900))||Lm(i)||i.canShop()&&e.money>1800&&e.vehicle===0&&i.s.round<i.s.maxRounds-5&&i.vehicle(1))return!0;if(i.canShop()&&e.cards.length<12&&e.shopUsed<2){let s=e.cards.includes("dice")?e.cards.includes("build")?e.cards.includes("shield")?null:"shield":"build":"dice";if(s&&i.shop(s))return!0}if(Um(i))return!0;let n=i.aiDifficulty()==="easy"?{count:1}:pd(i);return e.diceCount=n.count,i.roll()}if(i.s.phase==="branch"){if(i.aiDifficulty()==="easy"){let s=i.tiles[e.pos].next;return i.step(s[i.int(s.length)])}let n=i.tiles[e.pos].next.map(s=>({first:s,value:ns(i,dr(i,i.s.remaining,{first:s}))}));return n.sort((s,r)=>r.value-s.value),i.step(n[0].first)}if(i.s.phase==="moving")return i.step();if(i.s.phase==="buy"){let n=i.tiles[e.pos],s=i.district(n.id,e.id).count;return i.buy(e.money>=n.price+(i.aiDifficulty()==="easy"?t.reserve:s?220:t.reserve))}if(i.s.phase==="estate"){let n=i.takeoverPrice(e.pos);return i.resolveEstate(i.aiDifficulty()!=="easy"&&e.money>=n+t.reserve&&i.district(e.pos,e.id).count>0)}if(i.s.phase==="event")return i.acknowledge();if(i.s.phase==="debt"){e.deposit&&i.bank("withdraw",e.deposit);for(let r=0;r<4;r++)e.stocks[r]&&i.trade(r,-e.stocks[r]);if(e.money>=i.s.debt.amount)return i.settle();let n=i.s.debt.amount-e.money;if(i.canBank()&&e.loan+n<=1800&&i.bank("borrow",n))return i.settle();let s=i.owned(e).sort((r,a)=>i.district(r.tile.id).count-i.district(a.tile.id).count||r.level-a.level)[0];return s?i.sell(s.tile.id):i.bankrupt()}if(i.s.phase==="end"){if(Lm(i)||i.canShop()&&e.money>1800&&e.vehicle===0&&i.s.round<i.s.maxRounds-5&&i.vehicle(1))return!0;if(i.canShop()&&e.cards.length<10&&e.shopUsed<2){let n=e.cards.includes("dice")?e.cards.includes("build")?e.cards.includes("shield")?null:"shield":"build":"dice";if(n&&i.shop(n))return!0}return i.canBank()&&e.loan>0&&e.money>e.loan+500&&i.bank("repay",e.loan)||k1(i,i.aiDifficulty()==="hard"?Math.max(450,Math.min(1300,pd(i).rent*1.5||450)):t.reserve)||Um(i)||B1(i)?!0:i.end()}return!1}var Bm=()=>Array.from({length:4},()=>({cost:0,realized:0,unpriced:0}));function km(i){return i.stockBook===void 0&&(i.stockLegacy=!0,i.stockBook=i.stocks.map(e=>({cost:e?null:0,realized:0,unpriced:0}))),i.stockLegacy===void 0&&(i.stockLegacy=!1),i.stockTrades===void 0&&(i.stockTrades=[]),typeof i.stockLegacy=="boolean"&&Array.isArray(i.stockBook)&&i.stockBook.length===4&&i.stockBook.every((e,t)=>e&&(e.cost===null||Number.isSafeInteger(e.cost)&&e.cost>=0)&&(i.stocks[t]?!0:e.cost===0)&&Number.isSafeInteger(e.realized)&&Number.isSafeInteger(e.unpriced)&&e.unpriced>=0)&&Array.isArray(i.stockTrades)&&i.stockTrades.length<=40&&i.stockTrades.every(e=>e&&Number.isInteger(e.stock)&&e.stock>=0&&e.stock<4&&Number.isInteger(e.qty)&&e.qty!==0&&Number.isInteger(e.price)&&e.price>=20&&e.price<=500&&Number.isInteger(e.round)&&e.round>=1&&(e.profit===null||Number.isSafeInteger(e.profit)))}function md(i,e,t,n,s){let r=i.stockBook[e],a=i.stocks[e],o=null;if(t>0)r.cost!==null&&(r.cost+=t*n);else{let l=-t,c=r.cost===null?null:l===a?r.cost:Math.round(r.cost*l/a);o=c===null?null:l*n-c,o===null?r.unpriced++:r.realized+=o,r.cost!==null&&(r.cost-=c),l===a&&(r.cost=0)}return i.money-=t*n,i.stocks[e]+=t,i.stockTrades.unshift({stock:e,qty:t,price:n,round:s,profit:o}),i.stockTrades=i.stockTrades.slice(0,40),o}function gd(i,e,t){let n=e.stocks[t],s=e.stockBook[t],r=i.s.market[t].price,a=n*r;return{qty:n,price:r,cost:s.cost,average:n&&s.cost!==null?s.cost/n:null,value:a,unrealized:s.cost===null?null:a-s.cost,rate:s.cost?(a-s.cost)/s.cost*100:null,realized:s.realized,unpriced:s.unpriced}}function Om(i,e=i.player){let t=e.stocks.map((s,r)=>gd(i,e,r)),n=t.filter(s=>s.qty&&s.cost===null).length;return{positions:t,value:t.reduce((s,r)=>s+r.value,0),cost:n?null:t.reduce((s,r)=>s+(r.cost||0),0),unrealized:n?null:t.reduce((s,r)=>s+r.unrealized,0),realized:t.reduce((s,r)=>s+r.realized,0),unknown:n,unpriced:t.reduce((s,r)=>s+r.unpriced,0)}}var O1=5,zm=[20,30,50,80],vd="naiwa-monopoly-v2",z1=i=>JSON.parse(JSON.stringify(i)),Yn=i=>Math.round(i);function H1(i){let e=i>>>0^2654435769;return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^e>>>16)>>>0||1}var is=class i{constructor(e){this.s=e,this.transfers=new Wc}static create({character:e="naiwa",rounds:t=50,playerCount:n=3,randomStart:s=!1,talents:r=!0,mapVersion:a=2,difficulty:o="normal",opponents:l,seatLevels:c=[],startingCash:h=3200,startingTickets:u=60,seed:f=Date.now()}={}){e==="dounai"&&(e="naicha"),l=l?.map(m=>m==="dounai"?"naicha":m),an.some(m=>m.id===e)||(e="naiwa");let d=[2,3,4,5,6].includes(+n)?+n:3,g=Em(e,d,l,f),v=new i({version:2,rules:7,setupSeed:f>>>0,mapVersion:a===1?1:2,difficulty:["easy","normal","hard"].includes(o)?o:"normal",talents:!!r,firstPlayer:0,seed:H1(f),round:1,maxRounds:zm.includes(+t)?+t:50,current:0,phase:"roll",dice:[1],remaining:0,moveTotal:0,moveSteps:0,players:g.map((m,p)=>({id:p,character:m,human:p===0,difficulty:p&&["easy","normal","hard"].includes(c[p-1])?c[p-1]:["easy","normal","hard"].includes(o)?o:"normal",money:[2e3,3200,5e3,8e3].includes(+h)?+h:3200,tickets:[0,60,120].includes(+u)?+u:60,businessReady:!1,cardsUsed:0,buildsUsed:0,shopUsed:0,slowTurns:0,buildSite:null,bankAccess:!1,talentReady:!1,departures:0,deposit:0,loan:0,stocks:[0,0,0,0],stockBook:Bm(),stockLegacy:!1,stockTrades:[],cards:["dice","shield","recover"],vehicle:0,diceCount:1,pos:0,history:[],alive:!0,skip:0,spirit:null,spiritTurns:0,shield:!1,reverse:!1,forced:0})),ownership:{},blocks:{},pickups:{},market:um.map(m=>({...m,history:[m.price],change:0,previous:m.price})),logs:[{round:1,text:"\u5976\u5BB6\u53D1\u8D22\u5C9B\u5F00\u5F20\uFF01\u6BCF\u4F4D\u5976\u4F34\u5E26\u7740 "+([2e3,3200,5e3,8e3].includes(+h)?+h:3200)+" \u5976\u5E01\u51FA\u53D1\u3002"}],notice:null,debt:null,options:{sound:!0,speed:1,quality:"auto",lighting:"day"},winner:null});return s&&(v.s.current=v.int(d),v.s.firstPlayer=v.s.current,v.log(`\u968F\u673A\u5148\u624B\uFF1A${v.char().name}\u5148\u51FA\u53D1\uFF0C\u6BCF\u4EBA\u884C\u52A8\u4E00\u6B21\u7B97\u4E00\u8F6E\u3002`)),v}static restore(e){try{let t=typeof e=="string"?JSON.parse(e):z1(e),n=hd(t?.mapVersion??1);if(t&&t.mapVersion===void 0&&(t.mapVersion=1),t&&t.difficulty===void 0&&(t.difficulty="normal"),!t||![1,2].includes(t.mapVersion)||!["easy","normal","hard"].includes(t.difficulty)||t.version!==2||!Array.isArray(t.players)||![2,3,4,5,6].includes(t.players.length)||!["roll","departure","moving","branch","buy","estate","event","end","debt","finished"].includes(t.phase)||!Number.isInteger(t.current)||t.current<0||t.current>=t.players.length||!Number.isInteger(t.round)||t.round<1||!zm.includes(t.maxRounds)||t.round>t.maxRounds||!Number.isInteger(t.seed)||!Number.isInteger(t.remaining)||t.remaining<0||t.remaining>18||(t.moveSteps===void 0&&(t.moveSteps=null),t.moveSteps!==null&&(!Number.isInteger(t.moveSteps)||t.moveSteps<0||t.moveSteps>18))||!t.options||!t.market||t.market.length!==4||!t.ownership||!t.blocks||!Array.isArray(t.logs)||!Array.isArray(t.dice))return null;for(let s of t.players)s.character==="dounai"&&(s.character="naicha");if(t.players.some(s=>!km(s))||new Set(t.players.map(s=>s.character)).size!==t.players.length||t.players.some((s,r)=>s.human&&r!==0))return null;for(let[s,r]of t.players.entries())if(r.id!==s||typeof r.human!="boolean"||typeof r.alive!="boolean"||!Number.isInteger(r.pos)||!an.some(a=>a.id===r.character)||!n[r.pos]||![r.money,r.deposit,r.loan,...r.stocks].every(a=>Number.isSafeInteger(a)&&a>=0)||r.stocks.length!==4||!Array.isArray(r.cards)||r.cards.length>15||r.cards.some(a=>!Zt[a])||!Array.isArray(r.history)||r.history.length>80||r.history.some(a=>!Number.isInteger(a)||!n[a])||!li[r.vehicle]||!Number.isInteger(r.diceCount)||r.diceCount<1||r.diceCount>li[r.vehicle].dice||!Number.isInteger(r.skip)||r.skip<0||r.skip>3||!Number.isInteger(r.forced)||r.forced<0||r.forced>6||!Number.isInteger(r.spiritTurns)||r.spiritTurns<0||r.spiritTurns>4||r.spirit&&!Rs[r.spirit])return null;for(let[s,r]of Object.entries(t.ownership))if(r.buildingType!==void 0&&!Object.hasOwn(Ht,r.buildingType)||r.level>di(r)||r.researchProgress!==void 0&&(!Number.isInteger(r.researchProgress)||r.researchProgress<0||r.researchProgress>2)||r.researchCard!==void 0&&(!as(r.level).includes(r.researchCard)||lt(r)!=="research")||!n[s]||n[s].kind!=="property"||!Number.isInteger(r.player)||r.player<0||r.player>=t.players.length||!Number.isInteger(r.level)||r.level<0||r.level>O1)return null;for(let s of t.market)if(s.previous===void 0&&(s.previous=Number.isFinite(s.change)?Math.max(20,Math.min(500,s.price-s.change)):s.price),!Number.isSafeInteger(s.previous)||s.previous<20||s.previous>500)return null;if(t.market.some(s=>!Number.isSafeInteger(s.price)||s.price<20||s.price>500||!Array.isArray(s.history)||s.history.length>20||s.history.some(r=>!Number.isFinite(r)||r<20||r>500)))return null;for(let s of["music","voice"])if(s in t.options&&typeof t.options[s]!="boolean")return null;for(let s of["musicVolume","effectsVolume","voiceVolume"])if(s in t.options&&(!Number.isFinite(t.options[s])||t.options[s]<0||t.options[s]>1))return null;if("track"in t.options&&!["ode","town"].includes(t.options.track)||(t.options.lighting===void 0&&(t.options.lighting="day"),!["day","golden","night"].includes(t.options.lighting))||typeof t.options.sound!="boolean"||![1,2,4].includes(t.options.speed)||!["auto","low"].includes(t.options.quality)||t.logs.some(s=>typeof s.text!="string"||!Number.isInteger(s.round))||Object.entries(t.blocks).some(([s,r])=>!n[s]||!Number.isInteger(r)||r<0||r>=t.players.length)||t.phase==="estate"&&(!t.ownership[t.players[t.current].pos]||t.ownership[t.players[t.current].pos].player===t.current)||t.phase==="branch"&&(n[t.players[t.current].pos].next.length!==2||t.remaining<=0)||t.phase==="debt"&&(!t.debt||!Number.isSafeInteger(t.debt.amount)||t.debt.amount<=0||t.debt.to!==null&&(!Number.isInteger(t.debt.to)||!t.players[t.debt.to])||typeof t.debt.label!="string")||(t.firstPlayer===void 0&&(t.firstPlayer=0),!Number.isInteger(t.firstPlayer)||t.firstPlayer<0||t.firstPlayer>=t.players.length)||(t.pickups===void 0&&(t.pickups={}),!t.pickups||typeof t.pickups!="object"||Object.entries(t.pickups).some(([s,r])=>!Qr.includes(+s)||!Number.isInteger(r)||!t.players[r]))||(t.talents===void 0&&(t.talents=!1),typeof t.talents!="boolean"))return null;t.rules=7;for(let s of t.players){for(let[r,a]of Object.entries({tickets:60,cardsUsed:0,buildsUsed:0,shopUsed:0,slowTurns:0}))if(s[r]===void 0&&(s[r]=a),!Number.isInteger(s[r])||s[r]<0||s[r]>(r==="tickets"?150:r==="slowTurns"?3:r==="shopUsed"?2:r==="cardsUsed"?32:1))return null;if(s.difficulty===void 0&&(s.difficulty=t.difficulty),!["easy","normal","hard"].includes(s.difficulty)||(s.businessReady===void 0&&(s.businessReady=!1),typeof s.businessReady!="boolean")||(s.talentReady===void 0&&(s.talentReady=!1),s.departures===void 0&&(s.departures=0),typeof s.talentReady!="boolean"||!Number.isSafeInteger(s.departures)||s.departures<0)||(s.buildSite===void 0&&(s.buildSite=null),s.bankAccess===void 0&&(s.bankAccess=!1),s.buildSite!==null&&(!Number.isInteger(s.buildSite)||!n[s.buildSite])||typeof s.bankAccess!="boolean"))return null}return new i(t)}catch{return null}}aiDifficulty(e=this.player){return e.difficulty||this.s.difficulty}buildingLimit(e){return di(e)}get tiles(){return hd(this.s.mapVersion)}position(e,t=this.player){return gd(this,t,e)}portfolio(e=this.player){return Om(this,e)}get player(){return this.s.players[this.s.current]}char(e=this.player){return an.find(t=>t.id===e.character)}rng(){let e=this.s.seed;return e^=e<<13,e^=e>>>17,e^=e<<5,this.s.seed=e>>>0,this.s.seed/4294967296}int(e){return Math.floor(this.rng()*e)}log(e){this.s.logs.unshift({round:this.s.round,text:e}),this.s.logs=this.s.logs.slice(0,80)}recordTransfer(e,t,n="fee"){e===null||e===this.s.current||!this.s.players[e]||!Number.isSafeInteger(t)||t<=0||this.transfers.record({from:this.s.current,to:e,amount:t,kind:n,tile:this.player.pos,round:this.s.round})}owned(e){return Object.entries(this.s.ownership).filter(([,t])=>t.player===e.id).map(([t,n])=>({tile:this.tiles[+t],...n}))}cost(e,t,n="residence"){return e.price+t*Math.ceil(this.upgradeCost(e)*(Ht[n]?.cost||1))}upgradeCost(e){return Math.ceil(e.price*.6/10)*10}assets(e=this.player){let t=e.money,n=e.deposit,s=e.loan,r=this.owned(e).reduce((l,c)=>l+this.cost(c.tile,c.level,lt(c)),0),a=e.stocks.reduce((l,c,h)=>l+c*this.s.market[h].price,0),o=li[e.vehicle].price;return{cash:t,deposit:n,property:r,stocks:a,vehicle:o,loan:s,total:Yn(t+n+r+a+o-s)}}worth(e){return this.assets(e).total}baseRent(e,t=0){return Yn(this.tiles[e].price*[.16,.42,.85,1.4,2.05,2.8][t])}district(e,t=this.s.ownership[e]?.player){let n=this.tiles[e],s=this.tiles.filter(l=>l.kind==="property"&&l.group===n.group),r=s.filter(l=>this.s.ownership[l.id]?.player===t&&lt(this.s.ownership[l.id])==="residence"),a=this.baseRent(e,this.s.ownership[e]?.level??0),o=r.filter(l=>l.id!==e).reduce((l,c)=>l+this.baseRent(c.id,this.s.ownership[c.id].level),0);return{count:r.length,total:s.length,bonus:Math.min(1,o*.35/a),support:o}}rent(e,t=this.s.ownership[e]?.level??0,n=this.player,s=this.s.moveSteps||this.s.moveTotal||1){let r=this.s.ownership[e],a=this.baseRent(e,t);if(r&&this.s.players[r.player].skip)return 0;if(r&&t){let o=lt(r);if(o==="park"||o==="research")return 0;if(o==="chain")return Math.min(400,100+50*(this.owned(this.s.players[r.player]).filter(l=>l.level&&lt(l)==="chain").length-1));if(o==="gas")return 30+15*s+60*n.vehicle;if(o==="hotel")return Math.round(a*.65)*2;if(o==="mall")return Math.round(a*1.0833333333)}return r?a+Math.min(a,Yn(this.district(e).support*.35)):a}buildPrice(e,t=lt(this.s.ownership[e.id])){return Math.ceil(Math.ceil(this.upgradeCost(e)*(Ht[t]?.cost||1))*(ur(this,this.player,"naiwa")?.85:1))}canConstruct(e,t="residence"){let n=this.tiles[e],s=this.s.ownership[e],r=this.player;return!!(Object.hasOwn(Ht,t)&&n&&s&&s.player===r.id&&s.level===0&&this.s.phase==="end"&&r.pos===e&&r.buildSite===e&&r.buildsUsed<1&&r.money>=this.buildPrice(n,t))}canBuild(e){return Object.keys(Ht).some(t=>this.canConstruct(e,t))}construct(e,t){if(!this.canConstruct(e,t))return!1;let n=this.s.ownership[e],s=this.buildPrice(this.tiles[e],t);return this.player.money-=s,this.player.buildsUsed++,n.buildingType=t,n.level=1,t==="research"&&(n.researchProgress=0,n.researchCard="dice"),this.log(`${this.char().name}\u5728\u300C${this.tiles[e].name}\u300D\u5EFA\u6210${Ht[t].name} \u2212${s}`),!0}setResearch(e,t){let n=this.s.ownership[e];return!n||n.player!==this.player.id||lt(n)!=="research"||!n.level||this.s.phase!=="end"||this.player.pos!==e||this.player.buildSite!==e||!as(n.level).includes(t)?!1:(n.researchCard=t,n.researchProgress=0,this.log(`${this.char().name}\u8C03\u6574\u7814\u7A76\u6240\u9879\u76EE\u3002`),!0)}cardPrice(e){return Math.ceil(Zt[e].price*(ur(this,this.player,"naichong")?.8:1))}payment(e,t=null,n=this.player){return Yn(e*(n.spirit==="misfortune"?1.25:1)*(ur(this,n,"naishu")&&t!==null?.8:ur(this,n,"naicha")&&t===null?.5:1))}canUpgrade(e){let t=this.tiles[e],n=this.s.ownership[e],s=this.player;return!!(t&&this.s.phase==="end"&&s.pos===e&&s.buildSite===e&&n?.player===s.id&&n.level<di(n)&&s.buildsUsed<1&&s.money>=this.buildPrice(t))}nearby(e,t=8,n=this.player){if(!this.tiles[e])return!1;let s=[[n.pos,0]],r=new Set;for(;s.length;){let[a,o]=s.shift();if(a===+e)return!0;if(!(r.has(a)||o>=t)){r.add(a);for(let l of this.tiles)l.next.includes(a)&&s.push([l.id,o+1]);for(let l of this.tiles[a].next)s.push([l,o+1])}}return!1}cardTargets(e){let t=this.player,n=Object.entries(this.s.ownership).filter(([s,r])=>(e==="steal"?+s===t.pos:this.nearby(+s))&&(e==="build"?r.player===t.id&&r.level<di(r):e==="demolish"?r.level>0&&this.s.blocks[s]===void 0:r.player!==t.id&&this.s.players[r.player].alive)).map(([s,r])=>({id:+s,...r}));if(e==="demolish")for(let[s,r]of Object.entries(this.s.blocks))this.nearby(+s)&&n.push({id:+s,player:r,level:0,obstacle:!0});return n}takeoverPrice(e){let t=this.s.ownership[e];return t?Math.ceil(this.cost(this.tiles[e],t.level,lt(t))*1.25*(ur(this,this.player,"naishu")?.9:1)/10)*10:0}preview(e,{from:t=this.player.pos,first:n=null,reverse:s=this.player.reverse,blocks:r=this.s.blocks}={}){if(!Number.isInteger(e)||e<0||e>18)return[];let a=this.player,o=[],l=(c,h,u,f,d)=>{if(h===0||u.length&&r[c]!==void 0){let v=this.tiles[c],m=this.s.ownership[c];o.push({id:c,path:u,passesStart:d,blocked:h>0,points:[...new Set(u)].filter(p=>Qr.includes(p)&&this.s.pickups[p]===void 0).length*10,rent:m&&m.player!==a.id&&!a.shield?this.payment(this.rent(c,void 0,a,u.length+(t===a.pos&&["moving","branch"].includes(this.s.phase)?this.s.moveSteps??Math.max(0,(this.s.moveTotal||0)-this.s.remaining):0)),m.player,a):0,owner:m?.player??null,price:!m&&v.kind==="property"?v.price:0});return}let g;s?g=[f.length?f.at(-1):c<40?(c+39)%40:c===40?35:c===44?15:c-1]:g=u.length===0&&n!==null&&this.tiles[c].next.includes(n)?[n]:this.tiles[c].next;for(let v of g)l(v,h-1,[...u,v],s?f.slice(0,-1):[...f,c],d||!s&&v===0)};return l(t,e,[],[...a.history],!1),o}coupons(e,t){e.tickets=Math.min(150,e.tickets+t)}income(e,t,n){let s=Yn(t*(e.spirit==="fortune"?1.25:1));return e.money+=s,this.log(`${this.char(e).name} ${n} +${s}`),s}canBank(){return this.manageable()&&this.s.round%7!==3&&(this.player.bankAccess||this.tiles[this.player.pos].kind==="bank")}canUseCard(e){return this.player.alive&&(this.s.phase==="roll"||this.s.phase==="end"&&!["dice","turn","slow","block"].includes(e)||this.s.phase==="estate"&&e==="steal")}blockTargets(){let t=this.player.pos;return Array.from({length:6},(n,s)=>(t=this.tiles[t].next[0],{id:t,steps:s+1,reason:this.s.blocks[t]!==void 0?"\u8FD9\u91CC\u5DF2\u6709\u8DEF\u969C":this.s.players.some(r=>r.alive&&r.pos===t)?"\u8FD9\u91CC\u6709\u89D2\u8272\u505C\u9760":""}))}cardHint(e){let t=this.player;if(!Zt[e]||!t.cards.includes(e))return"\u5361\u7247\u4E0D\u5728\u5F53\u524D\u5361\u5305\u4E2D";if(!this.canUseCard(e))return this.s.phase==="end"&&["dice","turn","slow","block"].includes(e)?"\u79FB\u52A8\u5361\u987B\u5728\u63B7\u9AB0\u524D\u4F7F\u7528":"\u7B49\u5F85\u81EA\u5DF1\u7684\u884C\u52A8\u65F6\u673A";if(e==="dice"&&t.forced)return`\u672C\u6B21\u5DF2\u6307\u5B9A ${t.forced} \u6B65`;if(e==="turn"&&t.reverse)return"\u672C\u6B21\u5DF2\u9009\u62E9\u5012\u9000";if(e==="shield"&&t.shield)return"\u514D\u79DF\u4FDD\u62A4\u5DF2\u751F\u6548\uFF0C\u89E6\u53D1\u540E\u518D\u8865\u5145";if(e==="slow"&&(t.slowTurns||t.forced))return t.slowTurns?`\u6162\u884C\u5269\u4F59 ${t.slowTurns} \u6B21\u51FA\u53D1`:"\u672C\u6B21\u5DF2\u63A7\u9AB0\uFF0C\u6682\u4E0D\u80FD\u5F00\u542F\u6162\u884C";if(e==="block"&&this.blockTargets().every(n=>n.reason))return"\u524D\u65B9\u516D\u683C\u6682\u65E0\u53EF\u653E\u7F6E\u4F4D\u7F6E";if(["build","demolish","steal"].includes(e)){if(!this.cardTargets(e).length)return e==="steal"?"\u505C\u5728\u5BF9\u624B\u5730\u4EA7\u540E\u53EF\u6536\u8D2D":e==="build"?"\u9644\u8FD1\u516B\u683C\u6682\u65E0\u53EF\u52A0\u76D6\u7684\u81EA\u5BB6\u5730\u4EA7":"\u9644\u8FD1\u516B\u683C\u6682\u65E0\u623F\u5C4B\u6216\u8DEF\u969C";if(e==="steal"&&t.money<this.takeoverPrice(t.pos))return`\u73B0\u91D1\u4E0D\u8DB3\uFF0C\u8FD8\u9700 ${this.takeoverPrice(t.pos)-t.money} \u5976\u5E01`}return""}canShop(){return this.manageable()&&this.s.phase!=="debt"&&this.tiles[this.player.pos].kind==="shop"}manageable(){return["roll","end","debt"].includes(this.s.phase)&&this.player.alive}charge(e,t=null,n="\u652F\u4ED8\u8D39\u7528"){let s=this.player;if(e=this.payment(e,t,s),s.money<e&&s.deposit){let r=Math.min(s.deposit,e-s.money);s.deposit-=r,s.money+=r,this.log(`${this.char().name}\u5B58\u6B3E\u81EA\u52A8\u8865\u8DB3\u73B0\u91D1 +${r}`)}return s.money<e?(this.s.debt={amount:e,to:t,label:n},this.s.phase="debt",this.log(`${this.char().name}\u9700\u652F\u4ED8 ${e} \u5976\u5E01\uFF0C\u8BF7\u7B79\u96C6\u8D44\u91D1\u6216\u7533\u8BF7\u7834\u4EA7\u3002`),!1):(s.money-=e,t!==null&&(this.s.players[t].money+=e),this.recordTransfer(t,e),this.log(`${this.char().name} ${n} \u2212${e}`),!0)}roll(){if(!["roll","departure"].includes(this.s.phase))return!1;let e=this.player;if(e.skip>0)return e.skip--,this.log(`${this.char().name}\u6B63\u5728\u4F11\u517B\uFF0C\u672C\u56DE\u5408\u6682\u505C\u884C\u52A8\u3002`),this.s.phase="end",!0;if(Fd(this))return this.s.phase="departure",!0;if(Im(this))return this.s.phase="departure",!0;let t=Math.max(1,Math.min(li[e.vehicle].dice,e.diceCount));return this.s.dice=e.forced?[e.forced]:e.slowTurns?[1]:Array.from({length:t},()=>this.int(6)+1),e.slowTurns&&e.slowTurns--,e.forced=0,this.s.remaining=this.s.dice.reduce((n,s)=>n+s,0),this.s.moveTotal=this.s.remaining,this.s.moveSteps=0,this.s.phase="moving",this.log(`${this.char().name}\u63B7\u51FA ${this.s.dice.join(" + ")}\uFF0C${e.reverse?"\u5012\u9000":"\u524D\u8FDB"} ${this.s.remaining} \u683C\u3002`),!0}step(e){if(!["moving","branch"].includes(this.s.phase))return!1;let t=this.player;if(this.s.remaining<=0)return t.reverse=!1,this.land(),!0;let n;if(t.reverse)n=t.history.length?t.history.pop():t.pos<40?(t.pos+39)%40:t.pos===40?35:t.pos===44?15:t.pos-1;else{let s=this.tiles[t.pos].next;if(s.length>1&&!s.includes(e))return this.s.phase="branch",!1;n=s.length>1?e:s[0],s.length>1&&this.log(`${this.char().name}\u9009\u62E9\u901A\u5F80\u300C${this.tiles[n].name}\u300D\u7684\u8DEF\u7EBF\u3002`),t.history.push(t.pos),t.history=t.history.slice(-80)}return this.s.moveSteps=(this.s.moveSteps??Math.max(0,(this.s.moveTotal||0)-this.s.remaining))+1,t.pos=n,Qr.includes(n)&&this.s.pickups[n]===void 0&&(this.s.pickups[n]=t.id,this.coupons(t,10),this.log(`${this.char().name}\u62FE\u53D6\u70B9\u5238 +10`)),this.tiles[n].kind==="bank"&&(t.bankAccess=!0),this.s.remaining--,n===0&&!t.reverse&&(this.income(t,400+(ur(this,t,"naiwa")?80:0),"\u7ECF\u8FC7\u8D77\u70B9"),this.coupons(t,25)),this.s.blocks[n]!==void 0&&(delete this.s.blocks[n],this.s.remaining=0,this.log(`${this.char().name}\u9047\u5230\u5976\u5757\u8DEF\u969C\uFF0C\u5728\u6B64\u505C\u4E0B\u3002`)),this.s.phase="moving",!0}land(){let e=this.player,t=this.tiles[e.pos];if(e.buildSite=null,this.s.phase="end",this.s.ownership[e.pos]?.player===e.id&&(e.buildSite=e.pos),t.kind==="property"){let n=this.s.ownership[t.id];if(!n){this.s.phase="buy";return}if(n.player!==e.id){if(e.cards.includes("steal")&&e.money>=this.takeoverPrice(t.id)){this.s.phase="estate";return}this.collectProperty(t.id)}else n.level&&lt(n)==="park"&&(this.coupons(e,10),this.log(`${this.char().name}\u6E38\u89C8\u516C\u56ED\uFF0C\u83B7\u5F9710\u70B9\u5238\u3002`))}else t.kind==="event"?this.event():t.kind==="hospital"?(e.skip=1,this.charge(100,null,"\u7597\u517B\u8D39")&&this.notice("\u5976\u86D9\u7597\u517B\u9662","\u4F11\u517B\u4E00\u56DE\u5408\u3002\u4E5F\u53EF\u4EE5\u5728\u4E0B\u56DE\u5408\u63B7\u9AB0\u524D\u4F7F\u7528\u91CE\u751F\u72D7\u5976\u6062\u590D\u3002","rest")):t.kind==="tax"?this.charge(180,null,"\u5976\u6CE1\u6E05\u6D01\u8D39")&&this.notice("\u5976\u6CE1\u6E05\u6D01\u7AD9","\u8857\u9053\u53C8\u5E72\u51C0\u4E86\uFF0C\u5927\u5BB6\u4E00\u8D77\u5FEB\u4E50\u5927\u7B11\u3002","sad"):t.kind==="rest"?(this.income(e,120,"\u5728\u5C0F\u7A9D\u9886\u53D6\u8865\u8D34"),this.notice("\u56DE\u5230\u5976\u86D9\u7684\u5C0F\u7A9D","\u7A0D\u4F5C\u4F11\u606F\uFF0C\u83B7\u5F97 120 \u5976\u5E01\u8865\u8D34\u3002","happy")):t.kind==="spirit"?this.attach():t.kind==="bank"?this.notice(this.s.round%7===3?"\u94F6\u884C\u4ECA\u65E5\u4F11\u606F":"\u5976\u5E01\u94F6\u884C",this.s.round%7===3?"\u5468\u4E09\u94F6\u884C\u4F11\u606F\uFF0C\u4ECA\u5929\u4EC5\u53EF\u67E5\u770B\u8D26\u6237\u3002":"\u7ECF\u8FC7\u94F6\u884C\u540E\u672C\u56DE\u5408\u53EF\u529E\u7406\u5B58\u53D6\u6B3E\u3001\u501F\u6B3E\u4E0E\u8FD8\u6B3E\u3002"):t.kind==="stock"?this.notice(this.s.round%7===0?"\u8BC1\u5238\u6240\u4ECA\u65E5\u4F11\u5E02":"\u5976\u5BB6\u8BC1\u5238\u6240","\u6253\u5F00\u80A1\u7968\u9762\u677F\u67E5\u770B\u56DB\u5BB6\u5976\u5BB6\u4F01\u4E1A\u3002\u4EF7\u683C\u6BCF\u8F6E\u53D8\u5316\uFF1B\u6BCF\u7B2C\u4E03\u8F6E\u4F11\u5E02\uFF0C\u5176\u4F59\u65F6\u95F4\u53EF\u4EA4\u6613\u3002"):t.kind==="shop"&&(this.coupons(e,30),this.giveCard(e),this.notice("\u5976\u5BB6\u8865\u7ED9","\u83B7\u5F97 30 \u70B9\u5238\u4E0E\u4E00\u5F20\u968F\u673A\u5361\uFF01\u70B9\u5238\u7528\u4E8E\u4E70\u5361\uFF0C\u5976\u5E01\u7528\u4E8E\u5730\u4EA7\u548C\u4EA4\u901A\u5DE5\u5177\u3002","happy"))}collectProperty(e){let t=this.player,n=this.s.ownership[e],s=this.tiles[e],r=lt(n);if(!n)return;if(n.level&&(r==="park"||r==="research")){r==="park"&&(this.coupons(t,10),this.log(`${this.char().name}\u514D\u8D39\u6E38\u89C8\u516C\u56ED\uFF0C\u83B7\u5F9710\u70B9\u5238\u3002`));return}if(this.s.players[n.player].skip)return;if(t.shield){t.shield=!1,this.log(`${this.char().name}\u7528\u5FEB\u4E50\u514D\u79DF\u5361\u62B5\u6D88\u672C\u6B21\u8D39\u7528\u3002`);return}let a=wo(this,e),o=a[a.length>1?this.int(a.length):0],l=o.amount,c=o.suffix;o.skip&&(t.skip=o.skip),this.charge(l,n.player,`\u5411${this.char(this.s.players[n.player]).name}\u652F\u4ED8\u300C${s.name}\u300D${c}`)&&(this.s.players[n.player].mood="happy",n.level&&["hotel","mall","gas"].includes(r)&&this.notice(Ht[r].name,`${c}\uFF1A${this.payment(l,n.player)} \u5976\u5E01${r==="hotel"?"\uFF0C\u4F11\u606F "+t.skip+" \u56DE\u5408\u3002":"\u3002"}`,"sad"))}resolveEstate(e=!1){if(this.s.phase!=="estate")return!1;let t=this.player;if(e){let n=t.cards.indexOf("steal");return n<0||!this.card(n,t.pos)?!1:(t.buildSite=t.pos,this.s.phase="end",!0)}return this.s.phase="end",this.collectProperty(t.pos),!0}notice(e,t,n="idle"){this.s.notice={title:e,text:t,mood:n},this.s.phase="event"}acknowledge(){return this.s.phase!=="event"?!1:(this.s.notice=null,this.s.phase="end",!0)}buy(e){if(this.s.phase!=="buy")return!1;let t=this.player,n=this.tiles[t.pos];if(e){if(this.s.ownership[n.id]||t.money<n.price)return!1;t.money-=n.price,this.s.ownership[n.id]={player:t.id,level:0,buildingType:"residence"},t.buildSite=n.id,this.log(`${this.char().name}\u4E70\u4E0B\u300C${n.name}\u300D\u2212${n.price}`)}else this.log(`${this.char().name}\u6682\u65F6\u653E\u5F03\u300C${n.name}\u300D\u3002`);return this.s.phase="end",!0}upgrade(e){if(this.s.ownership[e]?.level===0)return this.construct(e,"residence");if(!this.canUpgrade(e))return!1;let t=this.player,n=this.tiles[e],s=this.s.ownership[e],r=this.buildPrice(n);return t.money-=r,t.buildsUsed++,s.level++,this.log(`${this.char().name}\u5C06\u300C${n.name}\u300D\u5347\u7EA7\u4E3A ${s.level} \u7EA7 \u2212${r}`),!0}demolish(e){if(!this.manageable()||this.s.phase==="debt")return!1;let t=this.tiles[e],n=this.s.ownership[e];if(!t||!n||this.s.phase!=="end"||this.player.pos!==e||this.player.buildSite!==e||n.player!==this.player.id||n.level===0)return!1;let s=Math.floor((this.cost(t,n.level,lt(n))-t.price)*.25);return n.level=0,bh(n),this.player.money+=s,this.log(`${this.char().name}\u62C6\u9664\u300C${t.name}\u300D\u623F\u5C4B\uFF0C\u4FDD\u7559\u571F\u5730\uFF0C\u56DE\u6536\u6750\u6599 +${s}`),!0}sell(e){if(!this.manageable())return!1;let t=this.tiles[e],n=this.s.ownership[e];if(!n||n.player!==this.player.id)return!1;let s=Yn(this.cost(t,n.level,lt(n))*.65);return this.player.money+=s,delete this.s.ownership[e],this.log(`${this.char().name}\u53D8\u5356\u300C${t.name}\u300D+${s}`),!0}bank(e,t){if(!this.canBank()||(t=Yn(+t),!Number.isFinite(t)||t<=0))return!1;let n=this.player;if(e==="deposit"){if(this.s.phase==="debt"||n.money<t)return!1;n.money-=t,n.deposit+=t}else if(e==="withdraw"){if(n.deposit<t)return!1;n.deposit-=t,n.money+=t}else if(e==="borrow"){if(n.loan+t>1800)return!1;n.loan+=t,n.money+=t}else if(e==="repay"){if(this.s.phase==="debt"||n.money<t||n.loan<t)return!1;n.money-=t,n.loan-=t}else return!1;return this.log(`${this.char().name}${{deposit:"\u5B58\u5165",withdraw:"\u53D6\u51FA",borrow:"\u501F\u5165",repay:"\u507F\u8FD8"}[e]} ${t} \u5976\u5E01\u3002`),!0}trade(e,t){if(!this.manageable()||this.s.round%7===0)return!1;let n=this.player,s=this.s.market[e];if(t=+t,!Number.isInteger(e)||e<0||e>3||!s||!Number.isInteger(t)||t===0||Math.abs(t)>1e4||t>0&&(this.s.phase==="debt"||n.money<t*s.price)||t<0&&n.stocks[e]<-t)return!1;let r=md(n,e,t,s.price,this.s.round);return this.log(`${this.char().name}${t>0?"\u4E70\u5165":"\u5356\u51FA"}${Math.abs(t)}\u80A1\u300C${s.name}\u300D\u3002`),!0}giveCard(e,t){if(t||=Object.keys(Zt)[this.int(Object.keys(Zt).length)],e.cards.length>=15){this.income(e,60,"\u5361\u5305\u5DF2\u6EE1\uFF0C\u8865\u507F");return}e.cards.push(t),this.log(`${this.char(e).name}\u83B7\u5F97\u300C${Zt[t].name}\u300D\u3002`)}shop(e){if(!this.canShop())return!1;let t=Zt[e],n=this.player;return!t||n.cards.length>=15||n.tickets<this.cardPrice(e)||n.shopUsed>=2?!1:(n.tickets-=this.cardPrice(e),n.shopUsed++,n.cards.push(e),this.log(`${this.char().name}\u8D2D\u4E70\u300C${t.name}\u300D\u2212${this.cardPrice(e)} \u70B9\u5238`),!0)}vehicle(e){if(!this.canShop())return!1;let t=this.player,n=li[e];return!n||e<=t.vehicle||t.money<n.price?!1:(t.money-=n.price,t.vehicle=e,t.diceCount=n.dice,this.log(`${this.char().name}\u8D2D\u5165${n.name}\uFF0C\u73B0\u5728\u53EF\u9009\u62E9 1\u2014${n.dice} \u9897\u9AB0\u5B50\u3002`),!0)}card(e,t){let n=this.player,s=n.cards[e];if(this.cardHint(s))return!1;let r="";if(s==="dice"){if(!Number.isInteger(t)||t<1||t>6||n.forced)return!1;n.forced=t,r=`\u6307\u5B9A\u672C\u6B21 ${t} \u6B65`}if(s==="block"){if(!Number.isInteger(t)||t<1||t>6)return!1;let a=n.pos;for(let o=0;o<t;o++)a=this.tiles[a].next[0];if(this.s.blocks[a]!==void 0||this.s.players.some(o=>o.alive&&o.pos===a))return!1;this.s.blocks[a]=n.id,r=`\u5728\u300C${this.tiles[a].name}\u300D\u653E\u7F6E\u8DEF\u969C`}if(s==="turn"){if(n.reverse)return!1;n.reverse=!0}if(s==="shield"){if(n.shield)return!1;n.shield=!0}if(s==="recover"&&(n.skip=0,n.spirit==="misfortune"&&(n.spirit=null,n.spiritTurns=0),this.income(n,80,"\u559D\u4E0B\u91CE\u751F\u72D7\u5976")),s==="steal"){let a=this.tiles[t],o=this.s.ownership[t];if(!this.cardTargets(s).some(c=>c.id===t))return!1;let l=this.takeoverPrice(t);if(n.money<l)return!1;n.money-=l,this.s.players[o.player].money+=l,this.recordTransfer(o.player,l,"takeover"),o.player=n.id,r=`\u6536\u8D2D\u300C${a.name}\u300D\u2212${l}`}if(s==="demolish"||s==="build"){if(!this.cardTargets(s).some(a=>a.id===t))return!1;if(s==="demolish"&&this.s.blocks[t]!==void 0)delete this.s.blocks[t],r=`\u6E05\u7406\u300C${this.tiles[t].name}\u300D\u8DEF\u969C`;else{let a=this.s.ownership[t];s==="build"&&a.level===0&&(a.buildingType="residence"),a.level+=s==="build"?1:-1,bh(a),r=`${s==="build"?"\u52A0\u76D6":"\u62C6\u9664"}\u300C${this.tiles[t].name}\u300D\u4E00\u5C42`}}if(s==="slow"){if(n.slowTurns||n.forced)return!1;n.slowTurns=3}return n.cards.splice(e,1),n.cardsUsed++,this.log(`${this.char().name}\u4F7F\u7528\u300C${Zt[s].name}\u300D${r}`),!0}attach(){let e=this.player,t=Object.keys(Rs)[this.int(3)];if(t==="misfortune"&&e.spirit==="guardian"){e.spirit=null,e.spiritTurns=0,this.log("\u5976\u86CB\u5B88\u62A4\u62B5\u6321\u4E86\u9709\u8FD0\u3002"),this.notice("\u5976\u86CB\u5B88\u62A4","\u66FF\u4F60\u6321\u4F4F\u4E00\u6B21\u9709\u8FD0\uFF0C\u5B88\u62A4\u6548\u679C\u5DF2\u6D88\u8017\u3002","happy");return}e.spirit=t,e.spiritTurns=4,this.log(`${this.char().name}\u8FCE\u6765\u300C${Rs[t].name}\u300D\uFF0C\u6301\u7EED 3 \u4E2A\u540E\u7EED\u56DE\u5408\u3002`),this.notice(Rs[t].name,`${Rs[t].description}\u3002\u6301\u7EED\u81F3\u63A5\u4E0B\u6765 3 \u6B21\u884C\u52A8\u7ED3\u675F\uFF0C\u540C\u7C7B\u5237\u65B0\u3001\u5F02\u7C7B\u66FF\u6362\u3002`,t==="misfortune"?"sad":"happy")}event(){let e=this.player,t=ld[this.int(ld.length)];if(this.log(`\u300C${t.name}\u300D${t.text}`),["loss","rest"].includes(t.kind)&&e.spirit==="guardian"){e.spirit=null,e.spiritTurns=0,this.notice("\u5976\u86CB\u66FF\u4F60\u6321\u4F4F\u4E86\uFF01",`\u300C${t.name}\u300D\u7684\u8D1F\u9762\u6548\u679C\u5DF2\u62B5\u6D88\u3002`,"happy");return}if(t.stock!==void 0){let n=this.s.market[t.stock];n.previous??=n.price,n.price=Math.max(20,Math.min(500,Yn(n.price*(1+t.change)))),n.change=n.price-n.previous,n.history.push(n.price),n.history=n.history.slice(-20)}if(t.kind==="gain"&&this.income(e,t.amount,"\u83B7\u5F97\u4E8B\u4EF6\u5956\u52B1"),!(t.kind==="loss"&&!this.charge(t.amount,null,t.name))){if(t.kind==="rest"&&(e.skip=1,this.income(e,t.amount,"\u6D17\u6FA1\u8865\u8D34")),t.kind==="recover"&&(e.skip=0,this.giveCard(e,"recover")),t.kind==="card"&&this.giveCard(e),t.kind==="spirit"){this.attach();return}this.notice(t.name,t.text,t.kind==="loss"?"sad":"happy")}}settle(){if(this.s.phase!=="debt")return!1;let e=this.s.debt,t=this.player;return t.money<e.amount?!1:(t.money-=e.amount,e.to!==null&&(this.s.players[e.to].money+=e.amount),this.recordTransfer(e.to,e.amount),this.log(`${this.char().name}\u652F\u4ED8${e.label} \u2212${e.amount}`),this.s.debt=null,this.s.phase="end",!0)}bankrupt(){if(this.s.phase!=="debt")return!1;let e=this.player,t=this.s.debt;e.money+=e.deposit,e.deposit=0;for(let s=0;s<4;s++)e.stocks[s]&&md(e,s,-e.stocks[s],this.s.market[s].price,this.s.round);for(let s of this.owned(e))e.money+=Yn(this.cost(s.tile,s.level,lt(s))*.65),delete this.s.ownership[s.tile.id];e.money+=Yn(li[e.vehicle].price*.5),e.vehicle=0,e.diceCount=1,e.forced=0,e.slowTurns=0,e.skip=0;let n=Math.min(e.money,t.amount);return e.money-=n,t.to!==null&&(this.s.players[t.to].money+=n),this.recordTransfer(t.to,n,"liquidation"),e.alive=!1,e.spirit=null,this.s.debt=null,this.log(`${this.char().name}\u7533\u8BF7\u7834\u4EA7\uFF0C\u6E05\u7B97\u652F\u4ED8 ${n} \u5976\u5E01\uFF0C\u9000\u51FA\u672C\u5C40\u3002`),this.s.phase="end",this.s.players.filter(s=>s.alive).length===1&&this.finish(),!0}end(){if(this.s.phase!=="end")return!1;let e=this.player;if(e.spirit&&--e.spiritTurns<=0&&(e.spirit=null),e.reverse=!1,this.s.players.filter(n=>n.alive).length<=1)return this.finish(),!0;let t=this.s.current;do if(t=(t+1)%this.s.players.length,t===(this.s.firstPlayer??0)){if(this.s.round>=this.s.maxRounds)return this.finish(),!0;this.s.round++,this.s.pickups={},this.marketTick()}while(!this.s.players[t].alive);return this.s.current=t,this.player.businessReady=!1,this.player.talentReady=!1,this.player.cardsUsed=0,this.player.buildsUsed=0,this.player.shopUsed=0,this.player.buildSite=null,this.player.bankAccess=!1,this.player.aiTradeDone=!1,this.player.aiBankDone=!1,this.s.phase="roll",!0}marketTick(){for(let e of this.s.market){let t=e.price;e.price=Math.max(20,Math.min(500,Yn(e.price*(.88+this.rng()*.24)))),e.previous=t,e.previous=t,e.change=e.price-t,e.history.push(e.price),e.history=e.history.slice(-20)}for(let e of this.s.players){if(!e.alive)continue;let t=Math.floor(e.deposit*.005),n=Yn(e.loan*.04);e.deposit+=t,e.loan+=n,(t||n)&&this.log(`${this.char(e).name}\uFF1A\u5B58\u6B3E\u5229\u606F +${t}\uFF0C\u8D37\u6B3E\u5229\u606F +${n}\uFF08\u8BA1\u5165\u672C\u91D1\uFF09\u3002`)}this.log(`\u7B2C ${this.s.round} \u8F6E\u5F00\u59CB\uFF0C\u5976\u5BB6\u80A1\u5E02\u884C\u60C5\u5DF2\u66F4\u65B0\u3002`)}finish(){this.s.phase="finished";let e=this.leaders();this.s.winner=e[0]?.id??0,this.log(`\u672C\u5C40\u7ED3\u675F\uFF01${e.map(t=>this.char(t).name).join("\u3001")}${e.length>1?"\u5E76\u5217":""}\u6210\u4E3A\u5976\u5BB6\u5927\u5BCC\u7FC1\u3002`)}leaders(){let e=this.ranking(),t=e[0];return e.filter(n=>n.alive===t.alive&&this.worth(n)===this.worth(t))}ranking(){return[...this.s.players].sort((e,t)=>Number(t.alive)-Number(e.alive)||this.worth(t)-this.worth(e)||e.id-t.id)}ai(){return Fm(this)}};var nh=.85,eh=1.65,Vm=[{value:1,normal:[0,1,0]},{value:6,normal:[0,-1,0]},{value:2,normal:[0,0,1]},{value:5,normal:[0,0,-1]},{value:3,normal:[1,0,0]},{value:4,normal:[-1,0,0]}],V1={1:[[0,0]],2:[[-1,1],[1,-1]],3:[[-1,1],[0,0],[1,-1]],4:[[-1,-1],[-1,1],[1,-1],[1,1]],5:[[-1,-1],[-1,1],[0,0],[1,-1],[1,1]],6:[[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1]]},G1=new bs(1,1,1,4,.09),$1=new rn(1,24,16),Hm=new T(0,1,0),W1=new T(0,0,1);function X1(i,e=0){let t=Vm.find(n=>n.value===i);if(!t)throw Error("Invalid die result");return new hn().setFromAxisAngle(Hm,.45+e*.2).multiply(new hn().setFromUnitVectors(new T(...t.normal),Hm))}function Gm(i,e){return!!i&&["roll","departure"].includes(i.phase)&&e.phase==="moving"&&i.current===e.current&&i.round===e.round}var th=class{constructor(e,t,n="#e7bc52"){if(!Array.isArray(e)||e.length<1||e.length>3||e.some(c=>!Number.isInteger(c)||c<1||c>6))throw Error("Invalid dice");this.values=[...e],this.anchorPoint=t.clone(),this.group=new me,this.group.name="dice-roll",this.group.position.copy(t).add(new T(.7,2.15,.7));let s=new Rt({color:"#fff1cf",roughness:.23,metalness:0,clearcoat:.8,clearcoatRoughness:.15}),r=new wt({color:"#5e3829",roughness:.5}),a=new wt({color:"#b6442d",roughness:.43});this.materials=[s,r,a],this.dice=[];for(let[c,h]of e.entries()){let u=new me;u.name=`die-${c}`,u.userData.result=h;let f=new dt(G1,s);u.add(f);for(let d of Vm){let g=new T(...d.normal),v=new hn().setFromUnitVectors(W1,g),m=new me;m.name=`pips-${d.value}`,m.position.copy(g).multiplyScalar(.501),m.quaternion.copy(v),u.add(m);for(let[p,x]of V1[d.value]){let y=new dt($1,d.value===1?a:r);y.scale.set(.066,.066,.012),y.position.set(p*.22,x*.22,0),m.add(y)}}this.group.add(u),this.dice.push({die:u,target:X1(h,c),index:c,offset:(c-(e.length-1)/2)*1.22})}let o=new Vt({color:n,transparent:!0,opacity:.52,side:Pt,depthWrite:!1}),l=new dt(new Ys(.7,.735,64),o);l.rotation.set(-Math.PI/2,0,Math.atan2(.614,.789)),l.position.y=-.54,l.scale.set(1+(e.length-1)*.85,1,1),l.name="dice-landing-ring",this.group.add(l),this.ring=l,this.materials.push(o),this.update(0)}anchor(e,t=!1){e.updateMatrixWorld();let n=this.anchorPoint.clone().project(e);n.x=0,n.y=t?.28:.6,n.z=Math.max(-.9,n.z-.1),this.group.position.copy(n.unproject(e))}update(e){let t=St.clamp(e/nh,0,1),n=(1-t)*(1-t),s=1-St.smoothstep(e,1.35,eh);this.group.scale.setScalar(s*1.25);for(let{die:r,target:a,index:o,offset:l}of this.dice){let c=new hn().setFromEuler(new Fn(n*Math.PI*(4+o),n*Math.PI*(3+o),n*Math.PI*(5+o)));r.quaternion.copy(a).multiply(c);let h=(1-t)*.55,u=Math.sin(t*Math.PI)*(.7+.08*Math.sin(t*18+o));r.position.set((l-h)*.789,u,(-l+h)*.614)}this.ring.material.opacity=.52*(1-St.smoothstep(e,1.35,eh))}dispose(){for(let e of this.materials)e.dispose();this.ring.geometry.dispose(),this.group.clear()}};function $m(i){i.updateWorldMatrix(!0,!0);let e=new Ft().setFromObject(i);e.isEmpty()&&e.set(new T(0,i.position.y,0),new T(1,i.position.y+1,1));let t=new $n(new T(0,-1,0),e.min.y),n=new Map,s=[];i.traverse(a=>{if(!a.isMesh)return;let o=a.material,l=a.userData.effectReveal,c=h=>{if(!n.has(h)){let u=h.clone();u.onBeforeCompile=h.onBeforeCompile.bind(h),u.customProgramCacheKey=h.customProgramCacheKey.bind(h),u.clippingPlanes=[...h.clippingPlanes||[],t],u.clipShadows=!0,n.set(h,u)}return n.get(h)};a.material=Array.isArray(o)?o.map(c):c(o),a.userData.effectReveal=!0,s.push({o:a,original:o,flag:l})});let r=!1;return{bounds:e,plane:t,set(a){t.constant=St.lerp(e.min.y-.015,e.max.y+.015,St.clamp(a,0,1))},restore(){if(!r){r=!0;for(let{o:a,original:o,flag:l}of s)a.material=o,l===void 0?delete a.userData.effectReveal:a.userData.effectReveal=l;for(let a of n.values())a.dispose()}}}}function Wm(i,e){return!!i&&(i.level!==(e?.level||0)||(i.buildingType||"legacy")!==(e?.buildingType||"legacy"))}var Di={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},q1=new On(-1,1,1,-1,0,1),xd=class extends st{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}},Y1=new xd,Li=class{constructor(e){this._mesh=new dt(Y1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,q1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ta=class extends wn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Sn.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fo=class extends wn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ih=class extends wn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var sh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new j);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ta(Di),this.copyPass.material.blending=$t,this.clock=new Za}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}fo!==void 0&&(a instanceof fo?n=!0:a instanceof ih&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var rh=class extends wn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var po={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new j},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new et},cameraProjectionMatrixInverse:{value:new et},cameraWorldMatrix:{value:new et},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new T(-1,-1,-1)},sceneBoxMax:{value:new T(1,1,1)}},vertexShader:`

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
		}`},mo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ah={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Xm(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Z1(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new T(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new vi(s,e,e);return r.wrapS=Wn,r.wrapT=Wn,r.needsUpdate=!0,r}function Z1(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var go={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:yd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new j},cameraProjectionMatrixInverse:{value:new et},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function yd(i,e,t){let n=J1(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function J1(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new T(Math.cos(r),Math.sin(r),a))}return n}var oh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,v=t-d,m,p;g>v?(m=1,p=0):(m=0,p=1);let x=g-m+h,y=v-p+h,_=g-1+2*h,A=v-1+2*h,w=l&255,P=c&255,I=this.perm[w+this.perm[P]]%12,S=this.perm[w+m+this.perm[P+p]]%12,b=this.perm[w+1+this.perm[P+1]]%12,C=.5-g*g-v*v;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[I],g,v));let U=.5-x*x-y*y;U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[S],x,y));let G=.5-_*_-A*A;return G<0?r=0:(G*=G,r=G*G*this._dot(this.grad3[b],_,A)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,v=h-g,m=u-g,p=f-g,x=e-v,y=t-m,_=n-p,A,w,P,I,S,b;x>=y?y>=_?(A=1,w=0,P=0,I=1,S=1,b=0):x>=_?(A=1,w=0,P=0,I=1,S=0,b=1):(A=0,w=0,P=1,I=1,S=0,b=1):y<_?(A=0,w=0,P=1,I=0,S=1,b=1):x<_?(A=0,w=1,P=0,I=0,S=1,b=1):(A=0,w=1,P=0,I=1,S=1,b=0);let C=x-A+d,U=y-w+d,G=_-P+d,V=x-I+2*d,N=y-S+2*d,B=_-b+2*d,Z=x-1+3*d,W=y-1+3*d,te=_-1+3*d,le=h&255,oe=u&255,be=f&255,Ve=this.perm[le+this.perm[oe+this.perm[be]]]%12,Qe=this.perm[le+A+this.perm[oe+w+this.perm[be+P]]]%12,nt=this.perm[le+I+this.perm[oe+S+this.perm[be+b]]]%12,K=this.perm[le+1+this.perm[oe+1+this.perm[be+1]]]%12,ie=.6-x*x-y*y-_*_;ie<0?s=0:(ie*=ie,s=ie*ie*this._dot3(this.grad3[Ve],x,y,_));let Se=.6-C*C-U*U-G*G;Se<0?r=0:(Se*=Se,r=Se*Se*this._dot3(this.grad3[Qe],C,U,G));let Ie=.6-V*V-N*N-B*B;Ie<0?a=0:(Ie*=Ie,a=Ie*Ie*this._dot3(this.grad3[nt],V,N,B));let Te=.6-Z*Z-W*W-te*te;return Te<0?o=0:(Te*=Te,o=Te*Te*this._dot3(this.grad3[K],Z,W,te)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,v=(e+t+n+s)*l,m=Math.floor(e+v),p=Math.floor(t+v),x=Math.floor(n+v),y=Math.floor(s+v),_=(m+p+x+y)*c,A=m-_,w=p-_,P=x-_,I=y-_,S=e-A,b=t-w,C=n-P,U=s-I,G=S>b?32:0,V=S>C?16:0,N=b>C?8:0,B=S>U?4:0,Z=b>U?2:0,W=C>U?1:0,te=G+V+N+B+Z+W,le=a[te][0]>=3?1:0,oe=a[te][1]>=3?1:0,be=a[te][2]>=3?1:0,Ve=a[te][3]>=3?1:0,Qe=a[te][0]>=2?1:0,nt=a[te][1]>=2?1:0,K=a[te][2]>=2?1:0,ie=a[te][3]>=2?1:0,Se=a[te][0]>=1?1:0,Ie=a[te][1]>=1?1:0,Te=a[te][2]>=1?1:0,ot=a[te][3]>=1?1:0,mt=S-le+c,D=b-oe+c,ae=C-be+c,ne=U-Ve+c,ee=S-Qe+2*c,Q=b-nt+2*c,ve=C-K+2*c,ce=U-ie+2*c,xe=S-Se+3*c,Xe=b-Ie+3*c,$e=C-Te+3*c,R=U-ot+3*c,M=S-1+4*c,z=b-1+4*c,Y=C-1+4*c,re=U-1+4*c,J=m&255,Ce=p&255,fe=x&255,Re=y&255,Le=o[J+o[Ce+o[fe+o[Re]]]]%32,ue=o[J+le+o[Ce+oe+o[fe+be+o[Re+Ve]]]]%32,Ee=o[J+Qe+o[Ce+nt+o[fe+K+o[Re+ie]]]]%32,Ge=o[J+Se+o[Ce+Ie+o[fe+Te+o[Re+ot]]]]%32,ke=o[J+1+o[Ce+1+o[fe+1+o[Re+1]]]]%32,_e=.6-S*S-b*b-C*C-U*U;_e<0?h=0:(_e*=_e,h=_e*_e*this._dot4(r[Le],S,b,C,U));let qe=.6-mt*mt-D*D-ae*ae-ne*ne;qe<0?u=0:(qe*=qe,u=qe*qe*this._dot4(r[ue],mt,D,ae,ne));let L=.6-ee*ee-Q*Q-ve*ve-ce*ce;L<0?f=0:(L*=L,f=L*L*this._dot4(r[Ee],ee,Q,ve,ce));let he=.6-xe*xe-Xe*Xe-$e*$e-R*R;he<0?d=0:(he*=he,d=he*he*this._dot4(r[Ge],xe,Xe,$e,R));let ge=.6-M*M-z*z-Y*Y-re*re;return ge<0?g=0:(ge*=ge,g=ge*ge*this._dot4(r[ke],M,z,Y,re)),27*(h+u+f+d+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var vo=class i extends wn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Xm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Wt(this.width,this.height,{type:bn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new _t({defines:Object.assign({},po.defines),uniforms:Sn.clone(po.uniforms),vertexShader:po.vertexShader,fragmentShader:po.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Xa,this.normalMaterial.blending=$t,this.pdMaterial=new _t({defines:Object.assign({},go.defines),uniforms:Sn.clone(go.uniforms),vertexShader:go.vertexShader,fragmentShader:go.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new _t({defines:Object.assign({},mo.defines),uniforms:Sn.clone(mo.uniforms),vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader,blending:$t}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new _t({uniforms:Sn.clone(Di.uniforms),vertexShader:Di.vertexShader,fragmentShader:Di.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ka,blendDst:Js,blendEquation:Un,blendSrcAlpha:ja,blendDstAlpha:Js,blendEquationAlpha:Un}),this.blendMaterial=new _t({uniforms:Sn.clone(ah.uniforms),vertexShader:ah.vertexShader,fragmentShader:ah.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ll,blendSrc:Ka,blendDst:Js,blendEquation:Un,blendSrcAlpha:ja,blendDstAlpha:Js,blendEquationAlpha:Un}),this._fsQuad=new Li(null),this._originalClearColor=new ye,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Xs,this.depthTexture.format=_s,this.depthTexture.type=ys,this.normalRenderTarget=new Wt(this.width,this.height,{minFilter:nn,magFilter:nn,type:bn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=yd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2||n.isSprite||n.userData.effectReveal)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new oh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new vi(s,e,e,Rn,zn);return r.wrapS=Wn,r.wrapT=Wn,r.needsUpdate=!0,r}};vo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var qm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var na=class i extends wn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new j(e.x,e.y):new j(256,256),this.clearColor=new ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,a,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Wt(r,a,{type:bn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Wt(r,a,{type:bn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=qm;this.highPassUniforms=Sn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new j(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Sn.clone(Di.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:Di.vertexShader,fragmentShader:Di.fragmentShader,blending:Ja,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ye,this._oldClearAlpha=1,this._basic=new Vt,this._fsQuad=new Li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new _t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};na.BlurDirectionX=new j(1,0);na.BlurDirectionY=new j(0,1);var xo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var lh=class extends wn{constructor(){super(),this.uniforms=Sn.clone(xo.uniforms),this.material=new Wa({name:xo.name,uniforms:this.uniforms,vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader}),this._fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ei?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$l&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ym={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new j(1/1024,1/512)}},vertexShader:`

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

		}`};var yo=class{constructor(e,t,n){this.renderer=e;let s=new ti;s.add(new dt(new rn(30,32,20),new Vt({color:"#a8c0cb",side:Xt})));for(let[a,o,l,c,h]of[[-8,12,9,8,[4.5,3.9,2.9]],[9,8,-7,6,[1.8,2.7,4.2]],[0,16,0,10,[3,3,2.7]]]){let u=new dt(new sn(c,c),new Vt({side:Pt,color:new ye().setRGB(...h)}));u.position.set(a,o,l),u.lookAt(0,0,0),s.add(u)}let r=new Zr(e);this.environment=r.fromScene(s,.05),t.environment=this.environment.texture,t.environmentIntensity=.32,r.dispose(),s.traverse(a=>{a.geometry?.dispose(),a.material?.dispose()}),this.composer=new sh(e),this.composer.addPass(new rh(t,n)),this.ao=new vo(t,n,1,1),this.ao.blendIntensity=.7,this.ao.updateGtaoMaterial({radius:.62,distanceExponent:1.5,thickness:.6,distanceFallOff:1,scale:1,samples:32,screenSpaceRadius:!1}),this.composer.addPass(this.ao),this.bloom=new na(new j(1,1),.08,.5,1.2),this.composer.addPass(this.bloom),this.composer.addPass(new lh),this.fxaa=new ta(Ym),this.composer.addPass(this.fxaa)}resize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.fxaa.uniforms.resolution.value.set(1/(e*n),1/(t*n))}studio(e){this.ao.updateGtaoMaterial({radius:e?.28:.62,thickness:e?.18:.6}),this.ao.blendIntensity=e?.58:.7}render(){this.composer.render()}dispose(){if(!this.disposed){this.disposed=!0;for(let e of this.composer.passes)e.dispose?.();this.composer.dispose(),this.environment.dispose()}}};var j1=new yi(.16,.16,.05,32),K1=new Mn(.124,.01,6,28),_d=1.6;function Zm(i,e,t){let n=i.clone().lerp(e,t),s=Math.min(4.5,1.2+i.distanceTo(e)*.12);return n.y+=4*t*(1-t)*s,n}var ch=class{constructor(e,t,n){this.from=e.clone().add(new T(0,1.05,0)),this.to=t.clone().add(new T(0,1.05,0)),this.amount=n,this.group=new me,this.group.name="money-transfer";let s=new Rt({color:"#edbc44",metalness:.65,roughness:.27,clearcoat:.6}),r=new wt({color:"#fff0ab",metalness:.5,roughness:.3});this.materials=[s,r],this.coins=[];let a=Math.max(5,Math.min(12,5+Math.floor(Math.log2(Math.max(1,n))/2)));for(let l=0;l<a;l++){let c=new me,h=new dt(j1,s);h.rotation.x=Math.PI/2,c.add(h);for(let u of[-1,1]){let f=new dt(K1,r);f.position.z=u*.028,c.add(f)}this.group.add(c),this.coins.push(c)}let o=Array.from({length:65},(l,c)=>Zm(this.from,this.to,c/64));this.path=new Hr(new st().setFromPoints(o),new xi({color:"#ffe0a0",transparent:!0,opacity:.25,depthWrite:!1})),this.group.add(this.path),this.update(0)}update(e){for(let[t,n]of this.coins.entries()){let s=St.clamp((e-t*.035)/1.05,0,1);n.position.copy(Zm(this.from,this.to,s)),n.rotation.set(.2+e*4+t*.7,e*7+t*.9,.15),n.scale.setScalar(Math.min(1,s/.08,(1-s)/.1))}this.path.material.opacity=.25*(1-St.smoothstep(e,1.15,_d))}dispose(){this.path.geometry.dispose(),this.path.material.dispose();for(let e of this.materials)e.dispose();this.group.clear()}};var Q1=new mi(.13,.13,.13),eM=new rn(1,24,16),Cn=(i,e)=>{let t=Math.sin(i*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)};function tM(i,e,t,n){return at(i,e,t,.018,.018,n,12)}function Jm(i){let e=new Set;i.traverse(t=>{t.geometry?.type==="TubeGeometry"&&t.geometry.dispose(),t.material&&e.add(t.material)});for(let t of e)t.map?.dispose(),t.dispose()}var hh=class{constructor(e,{reduced:t=!1,onDiceState:n=()=>{}}={}){this.parent=e,this.reduced=t,this.onDiceState=n,this.items=[],this.clock=0}transfer(e,t,n,s){if(this.reduced||!n||e.distanceTo(t)<.01)return!1;let r=new ch(e,t,n);return this.parent.add(r.group),this.items.push({kind:"transfer",group:r.group,transfer:r,particles:[],age:0,duration:_d,done:s}),!0}anchorDice(e,t){for(let n of this.items)n.dice&&n.dice.anchor(e,t)}get diceRolling(){return this.items.some(e=>e.kind==="dice"&&e.age<nh)}rollDice(e,t,n){if(this.clearDice(),this.reduced)return;let s=new th(e,t,n);this.parent.add(s.group),this.items.push({kind:"dice",group:s.group,dice:s,particles:[],age:0,duration:eh,impacted:!1}),this.onDiceState(!0,!1,!0)}clearDice(){for(let e of[...this.items])e.dice&&(this.items.splice(this.items.indexOf(e),1),this.parent.remove(e.group),e.dice.dispose());this.onDiceState(!1,!1,!1)}spawn(e,t,n="#e7c76d",s){if(this.reduced)return;let r=new me;r.position.copy(t),this.parent.add(r);let a=e==="demolish"?36:e==="build"?24:20,o=[];for(let l=0;l<a;l++){let c=l*2.399963+Cn(l,1)*.8,h=.12+Cn(l,2)*.6,u=e==="dust",f=new wt({color:u?"#dfd5bb":l%3===0?"#fff1c5":n,transparent:!0,opacity:u?.4:1,roughness:1,depthWrite:!1}),d=Be(r,u?eM:Q1,f,[Math.cos(c)*h,.06+Cn(l,3)*.35,Math.sin(c)*h]);d.castShadow=!1,d.receiveShadow=!1,u?d.scale.setScalar(.14+Cn(l,4)*.2):d.scale.set(.5+Cn(l,4)*1.5,.4+Cn(l,5),.5+Cn(l,6)*1.4),d.rotation.set(Cn(l,7)*3,Cn(l,8)*3,Cn(l,9)*3);let g=(u?.18:.5)+Cn(l,10)*(u?.45:1.3);o.push({m:d,v:new T(Math.cos(c)*g,u?.2+Cn(l,11)*.5:e==="demolish"?-.15+Cn(l,11)*1.25:1.2+Cn(l,11)*1.8,Math.sin(c)*g)})}this.items.push({kind:e,group:r,particles:o,ground:.07-t.y,age:0,duration:s??(e==="dust"?2:1.6)})}transition(e,t,n,{startHeight:s,endHeight:r}={}){if(this.finish(e),this.reduced){t==="remove"&&n?.();return}if(t==="grow"&&e.userData.vacant)return;let a=$m(e),o=e.rotation.clone(),l=Math.max(.001,a.bounds.max.y-a.bounds.min.y),c=f=>St.clamp((f-a.bounds.min.y)/l,0,1),h=s===void 0?t==="remove"?1:0:c(s),u=r===void 0?t==="remove"?0:1:c(r);a.set(h),this.items.push({kind:t,object:e,reveal:a,baseRotation:o,from:h,to:u,age:0,duration:t==="remove"?1.35:1.6,done:n,baseY:e.position.y,baseScale:e.scale.clone(),lastBurst:0})}construction(e,t=2){if(this.reduced)return;let n=1.04,s=.88,r=e;if(e.isObject3D){e.updateWorldMatrix(!0,!0);let g=new Ft().setFromObject(e),v=g.getSize(new T);t=Math.max(.8,v.y+.18),n=Math.max(1.04,v.x/2+.12),s=Math.max(.88,v.z/2+.12),r=e.getWorldPosition(new T)}let a=new me,o=new wt({color:"#9da9aa",metalness:.65,roughness:.38,transparent:!0,opacity:.88}),l=new wt({color:"#b9925c",roughness:.9,transparent:!0,opacity:1}),c=new wt({color:"#dc9544",roughness:.8,transparent:!0,opacity:.38,depthWrite:!1});for(let g of[-n,n])for(let v of[-s,s])tM(a,o,[g,t/2,v],t),$(a,l,[g,.04,v],[.2,.06,.2]);for(let g=.35;g<=t;g+=.5){for(let v of[-s,s])$(a,o,[0,g,v],[n*2,.025,.025]),tt(a,o,[[-n,g,v],[n,Math.min(g+.5,t),v]],.012);for(let v of[-n,n])$(a,o,[v,g,0],[.025,.025,s*2]);$(a,l,[0,g-.05,-s],[n*2,.035,.22])}for(let g of[-n,n])$(a,c,[g,t*.44,0],[.012,t*.55,s*2]);let h=new me;h.position.set(n+.12,0,-s),a.add(h),$(h,o,[0,t*.6,0],[.08,t*1.2,.08]);let u=new me;u.position.y=t*1.2,h.add(u),$(u,o,[-n*.65,0,0],[n*1.9,.06,.08]),$(u,l,[.28,-.08,0],[.33,.2,.25]);let f=new me;f.position.x=-n*1.2,u.add(f),tt(f,o,[[0,0,0],[0,-t*.35,0],[.08,-t*.38,0]],.013);let d=$(f,l,[0,-t*.4,0],[.34,.12,.3]);a.position.copy(r),this.parent.add(a),this.items.push({kind:"scaffold",group:a,particles:[],materials:[o,l,c],hook:f,boom:u,load:d,age:0,duration:1.9,height:t})}money(e,t){if(this.reduced||!t)return;let n=document.createElement("canvas");n.width=256,n.height=80;let s=n.getContext("2d");s.font='bold 40px "Microsoft YaHei",sans-serif',s.textAlign="center",s.fillStyle=t>0?"#fce49c":"#ffcab5",s.strokeStyle="#385664",s.lineWidth=5,s.strokeText(`${t>0?"+":""}${t}`,128,53),s.fillText(`${t>0?"+":""}${t}`,128,53);let r=new ps(n);r.colorSpace=Ut;let a=new ni({map:r,transparent:!0,depthTest:!1}),o=new me,l=new gi(a);l.scale.set(2.2,.7,1),o.add(l),o.position.copy(e),o.position.y+=2,this.parent.add(o),this.items.push({kind:"float",group:o,mat:a,age:0,duration:1.3,particles:[]})}update(e){this.clock+=e;for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];n.age+=e;let s=Math.min(1,n.age/n.duration);if(n.kind==="transfer")n.transfer.update(n.age);else if(n.kind==="dice")n.dice.update(n.age),!n.impacted&&n.age>=nh&&(n.impacted=!0,this.onDiceState(!1,!0,!0));else if(n.kind==="float")n.group.position.y+=e*.85,n.mat.opacity=1-s*s;else if(n.kind==="scaffold"){let r=s<.8?1:(1-s)/.2;n.materials.forEach((a,o)=>a.opacity=r*[.88,1,.38][o]),n.boom.rotation.y=Math.sin(s*Math.PI)*.16,n.hook.position.y=Math.sin(s*Math.PI)*n.height*.12,n.hook.rotation.z=Math.sin(s*Math.PI*4)*.04}else if(n.group)for(let{m:r,v:a}of n.particles)r.position.addScaledVector(a,e),n.kind!=="dust"&&(a.y-=e*4.5,r.position.y<n.ground&&(r.position.y=n.ground,a.y=Math.abs(a.y)*.22,a.x*=.72,a.z*=.72)),r.rotation.x+=e*2,r.rotation.z+=e*1.5,r.material.opacity=(1-s)*(n.kind==="dust"?.4:1),n.kind==="dust"&&r.scale.addScalar(e*.2);else if(n.kind==="grow"){let r=1-Math.pow(1-s,1.3);n.reveal.set(St.lerp(n.from,n.to,r))}else if(n.kind==="remove"&&(n.reveal.set(St.lerp(n.from,n.to,s*s)),n.object.rotation.z=n.baseRotation.z+Math.sin(s*Math.PI*8)*(1-s)*.012,s-n.lastBurst>.23&&s<.85)){n.lastBurst=s;let r=n.reveal.bounds,a=r.getCenter(new T);a.y=n.reveal.plane.constant,this.spawn("demolish",a,"#cbb38c",.6)}s===1&&(n.group?(this.parent.remove(n.group),n.dice?(this.onDiceState(!1,!1,!1),n.dice.dispose()):n.transfer?n.transfer.dispose():Jm(n.group)):(n.reveal?.restore(),n.object.scale.copy(n.baseScale),n.object.position.y=n.baseY,n.object.rotation.copy(n.baseRotation)),this.items.splice(t,1),n.done?.())}}finish(e){for(let t of[...this.items])t.object===e&&(this.items.splice(this.items.indexOf(t),1),t.reveal?.restore(),t.object.scale.copy(t.baseScale),t.object.position.y=t.baseY,t.object.rotation.copy(t.baseRotation),t.done?.())}clear(){this.onDiceState(!1,!1,!1);for(let e of this.items)e.group?(this.parent.remove(e.group),e.dice?(this.onDiceState(!1,!1,!1),e.dice.dispose()):e.transfer?e.transfer.dispose():Jm(e.group)):(e.reveal?.restore(),e.object.scale.copy(e.baseScale),e.object.position.y=e.baseY,e.object.rotation.copy(e.baseRotation)),e.done?.();this.items=[]}};var uh=class{constructor({pan:e,zoom:t,tap:n,turn:s,isStudio:r=()=>!1}){Object.assign(this,{pan:e,zoom:t,tap:n,turn:s,isStudio:r}),this.points=new Map,this.multi=!1,this.dragged=!1,this.travel=0}down(e,t,n){this.points.size||(this.multi=!1,this.dragged=!1,this.travel=0),this.points.set(e,{x:t,y:n}),this.points.size>1&&(this.multi=!0)}move(e,t,n){let s=this.points.get(e);if(!s)return;let r=[...this.points.values()],a=t-s.x,o=n-s.y;if(this.points.set(e,{x:t,y:n}),this.travel+=Math.hypot(a,o),this.isStudio()){this.travel>6&&(this.dragged=!0,this.turn(a));return}let l=[...this.points.values()];if(l.length===2){let c=f=>Math.hypot(f[0].x-f[1].x,f[0].y-f[1].y),h=c(r),u=c(l);this.dragged=!0,h>1&&u>1&&this.zoom(u/h)}else this.travel>6&&(this.dragged=!0,this.pan(a,o))}up(e,t,n){if(!this.points.has(e))return;let s=this.points.size===1;this.points.delete(e),s&&!this.multi&&!this.dragged&&this.travel<=6&&!this.isStudio()&&this.tap(t,n)}cancel(e){this.points.delete(e),this.multi=!0,this.dragged=!0}};var bd=i=>new T(i.lotX,.14,i.lotZ);function jm(i=1){let e=new ii;for(let t=0;t<=120;t++){let n=t/120*Math.PI*2,s=1+.06*Math.sin(n*5)+.035*Math.cos(n*3),r=21*i*s*Math.cos(n),a=16.8*i*s*Math.sin(n);t===0?e.moveTo(r,-a):e.lineTo(r,-a)}return e.closePath(),e}function Md(i,e,t,n,s=0){let r=s?new qi(jm(e),{depth:s,bevelEnabled:!1,curveSegments:64}):new Ga(jm(e),64),a=Be(i,r,n,[0,t,0]);return a.rotation.x=-Math.PI/2,a}function Km(i){let e=i.tiles,t=i.world,n=Be(t,new sn(240,240),Ju(),[0,-.69,0]);n.rotation.x=-Math.PI/2,Md(t,1,-.5,"#ae9270",.48),Md(t,1.015,-.035,"#ebd69c"),Md(t,.974,.025,"#86ad72");let s=new Set;for(let c of e)for(let h of c.next){let u=e[h],f=[c.id,h].sort((p,x)=>p-x).join(":");if(s.has(f))continue;s.add(f);let d=Math.hypot(u.x-c.x,u.z-c.z),g=Math.atan2(u.x-c.x,u.z-c.z),v=(c.x+u.x)/2,m=(c.z+u.z)/2;for(let[p,x,y]of[[2.12,.07,"#e1cda5"],[1.68,.115,"#667b7b"]]){let _=$(t,y,[v,x,m],[p,.035,d+.1]);_.rotation.y=g}if(d>1.5){let p=$(t,"#e8d6a0",[v,.142,m],[.035,.012,Math.min(.42,d*.3)]);p.rotation.y=g}}for(let c of e){at(t,"#e1cda5",[c.x,.07,c.z],1.05,1.05,.04,24),at(t,"#667b7b",[c.x,.115,c.z],.83,.83,.035,24);let h=new me;h.userData.dynamic=!0,h.position.set(c.x,0,c.z),h.rotation.y=c.yaw,t.add(h);let u=$(h,"#718784",[0,.15,0],[1.6,.025,1.2]);u.userData.tile=c.id,i.tileMeshes.push(u);let f=c.kind==="property"?oi[c.group].color:{start:"#f2cd54",bank:"#5f9fc1",hospital:"#e1837b",stock:"#9c8bd1",shop:"#e8a25e",spirit:"#d7b658",event:"#d883a3",rest:"#82b678",tax:"#78b6ae"}[c.kind],d=$(h,f,[0,.2,.52],[1.55,.07,.12]);d.userData.tile=c.id,i.tileMeshes.push(d);let g=Be(h,new sn(.6,.18),new Vt({map:sr(String(c.id+1),{width:96,height:48,background:"#718784",color:"#fff3cf"}),depthWrite:!1}),[0,.17,.16]);if(g.rotation.x=-Math.PI/2,c.kind!=="property"){let v=Xp(c);v.position.copy(bd(c)),v.rotation.y=c.facing,v.userData.dynamic=!0,i.tag(v,c.id),t.add(v),i.tileMeshes.push(v);let m={bank:"\u94F6\u884C",hospital:"\u7597\u517B\u9662",stock:"\u8BC1\u5238\u6240",shop:"\u8865\u7ED9\u7AD9",spirit:"\u795E\u6BBF",event:"\u4E8B\u4EF6",rest:"\u5C0F\u7A9D",tax:"\u6E05\u6D01\u7AD9",start:"\u8D77\u70B9"},p={bank:"#477eb5",hospital:"#cc615d",stock:"#7b65b0",shop:"#cf8342",spirit:"#af8535",event:"#ae6686",rest:"#5b8b55",tax:"#558e88",start:"#a18a3c"},x=new gi(new ni({map:sr(m[c.kind],{width:192,height:64,background:p[c.kind],color:"#fff4dc"}),depthTest:!1,transparent:!0}));x.position.set(c.x,1.1,c.z),x.scale.set(1.6,.53,1),t.add(x),i.buildingBadges.push(x)}}let r=[];for(let c=0;c<=32;c++){let h=-17+c*34/32;r.push([h,.042,Math.sin(h*.21)*.8])}let a=[],o=[];r.forEach(([c,h,u],f)=>{if(a.push(c,.045,u-.58,c,.045,u+.58),f<r.length-1){let d=f*2;o.push(d,d+1,d+2,d+1,d+3,d+2)}});let l=new st;l.setAttribute("position",new Ae(a,3)),l.setIndex(o),l.computeVertexNormals(),Be(t,l,Ju(!0));for(let c of e)for(let h of c.next){let u=e[h],f=c.z-Math.sin(c.x*.21)*.8,d=u.z-Math.sin(u.x*.21)*.8;if(f*d>0||Math.abs(f-d)<.01)continue;let g=f/(f-d),v=c.x+(u.x-c.x)*g,m=c.z+(u.z-c.z)*g,p=new me,x=1.8;for(let y=0;y<9;y++)$(p,"#d5bb88",[0,.16,-x/2+y*x/8],[1.68,.07,x/8]);for(let y of[-.8,.8])tt(p,"#526f65",[[y,.4,-x/2],[y,.5,0],[y,.4,x/2]],.025);p.rotation.y=Math.atan2(u.x-c.x,u.z-c.z),p.position.set(v,0,m),t.add(p)}if(i.tiles[43].next[0]===3){for(let[c,h,u,f]of[["\u6668\u5149\u652F\u8DEF",-8,2,"#728b57"],["\u82B1\u56ED\u652F\u8DEF",8,-2,"#9a7f59"],["\u6EE8\u6CB3\u516C\u56ED",0,3.7,"#5e8b78"]]){let d=new gi(new ni({map:sr(c,{width:256,height:72,background:f,color:"#fff5d9"}),transparent:!0,depthTest:!1}));d.position.set(h,.6,u),d.scale.set(2,.56,1),t.add(d)}for(let c of e)for(let h of c.next){let u=e[h],f=u.x-c.x,d=u.z-c.z,g=Math.hypot(f,d),v=c.x+f*.62,m=c.z+d*.62,p=f/g,x=d/g,y=new st;y.setAttribute("position",new Ae([v+p*.2,.178,m+x*.2,v-p*.13-x*.1,.178,m-x*.13+p*.1,v-p*.13+x*.1,.178,m-x*.13-p*.1],3)),Be(t,y,new Vt({color:"#efddb1",side:Pt}))}}i.hero=new me,t.add(i.hero),i.fountain=new me,at(i.fountain,"#c0b18a",[0,.14,0],.87,.94,.23),at(i.fountain,"#8ec5c8",[0,.27,0],.79,.79,.035),at(i.fountain,"#dfceab",[0,.48,0],.13,.19,.5),i.fountain.position.set(-1,.05,7.5),t.add(i.fountain),i.waterJets=[];for(let c=0;c<6;c++){let h=c/6*Math.PI*2;i.waterJets.push(tt(i.fountain,"#b9e2df",[[0,.65,0],[Math.cos(h)*.45,1.05,Math.sin(h)*.45],[Math.cos(h)*.65,.3,Math.sin(h)*.65]],.016))}for(let[c,h,u]of[[-8,6,.9],[-6,7,.85],[4,6,1],[7,5,.9],[-7,-6,.9],[-4,-6,.75],[3,-6,.95],[7,-5.5,.8],[-2,7.5,.6],[1,7.5,.6]])e.every(f=>Math.hypot(f.lotX-c,f.lotZ-h)>2&&Math.hypot(f.x-c,f.z-h)>1.6)&&qp(t,c,h,u);for(let[c,h]of[[-3,6.2],[2,6.6],[-5,-6],[5,-6]]){$(t,"#a18a62",[c,.35,h],[.9,.09,.28]),$(t,"#b79c6d",[c,.57,h-.1],[.9,.3,.05]);for(let u of[-.34,.34])$(t,"#57694f",[c+u,.2,h],[.055,.3,.23])}for(let c of e.filter(h=>h.id%6===2)){let h=(c.lotX-c.x)/2.3,u=(c.lotZ-c.z)/2.3;i.lamp(c.x-h*1.25,c.z-u*1.25)}for(let[c,h]of[[-19,8],[16,-13]]){let u=new me;Ue(u,"#eee4c8",[0,0,0],[1.2,.22,.45]),$(u,"#5c8891",[0,.2,0],[1.25,.3,.55]),$(u,"#fff0cf",[0,.4,0],[1.3,.06,.65]),u.position.set(c,-.47,h),t.add(u),i.floats.push(u)}i.ripples=[];for(let c of[i.fountain,...i.floats,...i.ripples])c.userData.dynamic=!0;$p(i),ai(t)}var dh=bd;var fh=class{constructor(e,t,n=Ii){this.tiles=n,this.el=e,this.onTile=t,this.follow=!1,this.zoom=1,this.offset=new T,this.quality="",this.paused=!1,this.last=0,this.time=0,this.game=null,this.showcase=null,this.reduced=matchMedia("(prefers-reduced-motion:reduce)").matches,this.scene=new ti,this.scene.background=new ye("#b7d3dc"),this.scene.fog=new Gs("#b7d3dc",70,130),this.camera=new On(-19,19,13,-13,.1,180),this.camera.position.set(28,30,36),this.camera.lookAt(0,0,0),this.renderer=new Ms({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(Math.max(devicePixelRatio,1.5),2.5)),this.renderer.shadowMap.enabled=!0,this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.type=Dl,this.renderer.outputColorSpace=Ut,this.renderer.toneMapping=Ei,this.renderer.toneMappingExposure=.94,e.append(this.renderer.domElement),this.renderer.domElement.addEventListener("webglcontextlost",l=>{l.preventDefault(),!this.contextLost&&(this.contextLost=!0,this.pausedBeforeContextLoss=this.paused,this.paused=!0,this.fx?.clear(),e.dispatchEvent(new CustomEvent("renderlost")))}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>this.restoreRendering()),this.hemi=new Yi("#fff3dc","#6f8e9e",.95),this.scene.add(this.hemi);let s=new bi("#fff2dc",3.2);s.position.set(-10,30,18),s.castShadow=!0,s.shadow.mapSize.set(4096,4096),Object.assign(s.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:.5,far:70}),s.shadow.normalBias=.025,s.shadow.bias=-1e-4,this.scene.add(s),this.sun=s;let r=new bi("#b4d9ef",1);r.position.set(15,8,-10),this.scene.add(r),this.fill=r,this.highQuality=new yo(this.renderer,this.scene,this.camera),this.ray=new si,this.pointer=new j,this.tileMeshes=[],this.plotMeshes=new Map,this.blockMeshes=new Map,this.pawns=[],this.pickupMeshes=new Map,this.smokestacks=[],this.buildingBadges=[],this.floats=[],this.lights=[],this.pointLights=[],this.lightingKey="",this.world=new me,this.scene.add(this.world),this.fx=new hh(this.world,{reduced:this.reduced,onDiceState:(l,c,h)=>e.dispatchEvent(new CustomEvent("dicerollchange",{detail:{rolling:l,impact:c,active:h}}))}),this.build(),this.turnMarker=Be(this.world,new Ys(.58,.7,48),new Vt({color:"#ffe289",side:Pt,transparent:!0,opacity:.9,depthWrite:!1}),[0,.23,0]),this.turnMarker.rotation.x=-Math.PI/2,this.turnMarker.castShadow=!1,this.turnMarker.visible=!1,this.selection=new me;let a=Be(this.selection,new sn(2.05,1.72),new Vt({color:"#ffe189",transparent:!0,opacity:.17,depthWrite:!1,depthTest:!1}),[0,.02,0]);a.rotation.x=-Math.PI/2,a.castShadow=!1,this.selectionPlate=a;let o=[];for(let l of[-1.03,1.03])for(let c of[-.87,.87])o.push(l,.035,c,l-Math.sign(l)*.35,.035,c,l,.035,c,l,.035,c-Math.sign(c)*.35);this.selection.add(new Ws(new st().setAttribute("position",new Ae(o,3)),new xi({color:"#ffca4f",depthTest:!1}))),this.selectionLabel=new gi(new ni({transparent:!0,depthTest:!1,depthWrite:!1})),this.selectionLabel.scale.set(3.1,.65,1),this.selectionLabel.position.y=.65,this.selection.add(this.selectionLabel),this.selection.visible=!1,this.selection.renderOrder=4,this.world.add(this.selection),this.controls(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize(),this.animate=this.animate.bind(this),this.raf=requestAnimationFrame(this.animate)}restoreRendering(){if(!this.contextLost)return;let e=this.game,t=e?.s.options.quality||this.quality||"auto";try{this.highQuality?.dispose(),this.highQuality=new yo(this.renderer,this.scene,this.camera),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.sun.shadow.mapPass?.dispose(),this.sun.shadow.mapPass=null,this.sun.shadow.needsUpdate=!0,this.contextLost=!1,this.paused=!!this.pausedBeforeContextLoss,this.quality="",this.lightingKey="",this.setQuality(t),this.applyLighting(e?.s.options.lighting||this.worldLighting),this.game=null,e&&this.sync(e),this.resize(),this.el.dispatchEvent(new CustomEvent("renderrestored"))}catch(n){this.contextLost=!0,this.paused=!0,console.warn("3D recovery unavailable; keeping the playable map",n)}}setMap(e){this.leaveStudio(),this.fx.clear(),this.world.remove(this.selection,this.turnMarker),En(this.world),this.world.clear(),this.tiles=e,this.game=null,this.rollState=null,this.lastMoney=null,this.tileMeshes=[],this.plotMeshes.clear(),this.blockMeshes.clear(),this.pawns=[],this.pickupMeshes.clear(),this.smokestacks=[],this.buildingBadges=[],this.floats=[],this.lights=[],this.pointLights=[],this.lightingKey="",this.build(),this.world.add(this.selection,this.turnMarker),this.clearSelection(),this.home()}build(){Km(this)}tag(e,t){e.traverse(n=>{n.isMesh&&(n.userData.tile=t)})}lamp(e,t){let n=new me;at(n,"#4e6366",[0,.95,0],.028,.05,1.5),$(n,"#597375",[0,1.72,0],[.23,.09,.23]);let s=$(n,"#ffe8a8",[0,1.59,0],[.15,.23,.15]);n.position.set(e,.2,t),this.world.add(n),this.lights.push(s);let r=new Ya("#ffc779",0,4.5,2);r.position.set(0,1.5,0),n.add(r),this.pointLights.push(r)}sync(e){if(this.contextLost){this.game=e;return}this.tiles!==e.tiles&&this.setMap(e.tiles);let t=this.game!==e;this.game=e;let n=e.s;if(this.selectionMode==="nav"&&this.navTurn!==`${n.round}:${n.current}`&&this.clearSelection(),t){for(;this.pawns.length>n.players.length;){let s=this.pawns.pop();this.world.remove(s),En(s)}this.clearSelection(),this.fx.clear();for(let s of this.plotMeshes.values())this.world.remove(s.model),En(s.model);this.plotMeshes.clear();for(let s of this.blockMeshes.values())this.world.remove(s),En(s);this.blockMeshes.clear()}for(let s of n.players){let r=this.pawns[s.id];if(!r||r.userData.id!==s.character){r&&(this.world.remove(r),En(r)),r=Kr(s.character),r.scale.setScalar(.56);let a=this.tiles[s.pos];r.position.set(a.x,.24,a.z),this.world.add(r),this.pawns[s.id]=r}if(t){let a=this.tiles[s.pos];r.position.set(a.x+(s.id-(n.players.length-1)/2)*.4,.24,a.z-.15+s.id%2*.22),r.rotation.y=.45,r.scale.setScalar(s.alive?.56:.001)}if(!t&&this.lastMoney?.[s.id]!==void 0&&this.lastMoney[s.id]!==s.money&&this.fx.money(r.position,s.money-this.lastMoney[s.id]),r.userData.vehicleId!==s.vehicle){let a=r.getObjectByName("vehicle");if(a&&(r.remove(a),En(a)),s.vehicle){let o=lm(s.vehicle);o.position.y=-.1,r.add(o)}r.userData.vehicleId=s.vehicle,r.userData.body.position.y=s.vehicle?.3:0}}for(let s of this.tiles.filter(r=>r.kind==="property")){let r=n.ownership[s.id],a=r?`${r.player}:${r.level}:${r.buildingType||"legacy"}`:"empty",o=this.plotMeshes.get(s.id);if(o?.signature===a)continue;let l=r?an.find(h=>h.id===n.players[r.player].character).estateColor:"#acb18d",c=rr({...s,buildingType:r?.buildingType},r?.level||0,l,!!r);if(c.position.copy(dh(s)),c.rotation.y=s.facing,this.tag(c,s.id),this.world.add(c),r&&(at(c,"#587070",[.85,.5,-.6],.018,.018,.85,8),$(c,l,[.98,.81,-.6],[.28,.17,.025])),o){let h=o.model;this.fx.finish(h);let u=()=>{this.world.remove(h),En(h)};if(!t&&Wm(o,r)){let f=!r||r.level<o.level;if(this.fx.spawn(f?"demolish":"build",h.position,l),this.fx.spawn("dust",h.position),f){c.visible=this.reduced||!r?.level;let d=r?.level?new Ft().setFromObject(c).max.y:void 0;this.fx.transition(h,"remove",()=>{u(),c.visible=!0},{endHeight:d})}else{let d=o.level>0&&o.buildingType===(r?.buildingType||"legacy")?new Ft().setFromObject(h).max.y:void 0;u(),this.fx.transition(c,"grow",void 0,{startHeight:d}),r?.level>0&&this.fx.construction(c)}}else u()}this.plotMeshes.set(s.id,{model:c,signature:a,level:r?.level||0,buildingType:r?.buildingType||"legacy"})}for(let[s]of Object.entries(n.blocks))if(!this.blockMeshes.has(s)){let r=this.tiles[s],a=new me;for(let o of[-.4,.4])$(a,"#f4dcac",[o,.45,0],[.07,.55,.07]);$(a,"#c76f51",[0,.6,0],[1.15,.19,.13]);for(let o of[-.4,0,.4]){let l=$(a,"#f1dfb1",[o,.61,.07],[.15,.2,.02]);l.rotation.z=-.35}a.position.set(r.x,.2,r.z),this.world.add(a),this.blockMeshes.set(s,a),this.fx.spawn("build",a.position,"#d7b871")}for(let[s,r]of this.blockMeshes)n.blocks[s]===void 0&&(this.world.remove(r),this.blockMeshes.delete(s),this.fx.spawn("demolish",r.position,"#c77956"),En(r));for(let s of Qr){let r=this.pickupMeshes.get(s);if(!r){r=new me,at(r,"#f7cc54",[0,.58,0],.24,.24,.08,32).rotation.x=Math.PI/2;let a=kt(r,"10",[0,.58,.05],.38,.23,{background:"#f7cc54",color:"#80551f",width:96,height:64});r.position.set(this.tiles[s].x,.24,this.tiles[s].z),this.world.add(r),this.pickupMeshes.set(s,r)}r.visible=n.pickups?.[s]===void 0}this.setQuality(n.options.quality),this.applyLighting(n.options.lighting),!t&&Gm(this.rollState,n)&&this.fx.rollDice(n.dice,this.pawns[n.current].position,e.char().estateColor),this.rollState={phase:n.phase,current:n.current,round:n.round},this.lastMoney=n.players.map(s=>s.money)}applyLighting(e){this.worldLighting=ji(e);let t=this.studio?"studio":this.worldLighting;if(this.lightingKey===t)return;this.lightingKey=t;let n=Ai[this.studio?"day":t];this.hemi.color.set(n.hemi),this.hemi.groundColor.set(n.ground),this.hemi.intensity=n.ambient,this.sun.color.set(n.sun),this.sun.intensity=n.power,this.sun.position.set(...n.position),this.fill.color.set(n.fill),this.fill.intensity=n.fillPower,this.scene.environmentIntensity=n.environment,this.renderer.toneMappingExposure=n.exposure,this.highQuality.bloom.strength=n.bloom,this.highQuality.bloom.threshold=n.threshold,this.scene.background.set(this.studio?"#dedccc":n.sky),this.scene.fog.color.copy(this.scene.background);for(let s of this.pointLights)s.intensity=this.studio?0:n.lamps;for(let s of this.lights)s.material.emissiveIntensity=.55+n.lamps*.25;Np(this.studio?"day":t)}showTransfer(e,t){if(this.contextLost)return!1;let n=this.pawns[e.from],s=this.pawns[e.to];return n&&s?this.fx.transfer(n.position,s.position,e.amount,t):!1}setQuality(e){this.quality!==e&&(this.quality=e,this.renderer.setPixelRatio(e==="low"?1:Math.min(Math.max(devicePixelRatio,1.5),2.5)),this.renderer.shadowMap.enabled=e!=="low",this.sun.shadow.mapSize.set(e==="low"?512:4096,e==="low"?512:4096),this.highQuality?.resize(this.el.clientWidth,this.el.clientHeight,this.renderer.getPixelRatio()))}resize(){let e=this.el.clientWidth,t=this.el.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.highQuality?.resize(e,t,this.renderer.getPixelRatio()),this.aspect=e/t,this.follow&&(this.followZoom=this.aspect<.8?2.6:this.aspect>1.9?1.7:1.45),this.updateCamera(),this.paused&&this.renderStill())}updateCamera(){let e=this.studio?Math.max(2.3,1.95/this.aspect)/this.studio.zoom:Math.max(13.8,23/this.aspect)/this.zoom;this.camera.left=-e*this.aspect,this.camera.right=e*this.aspect,this.camera.top=e,this.camera.bottom=-e,this.camera.updateProjectionMatrix(),this.studio?(this.camera.position.set(3.4,2.3,7),this.camera.lookAt(0,1.55,0)):(this.camera.position.set(28+this.offset.x,30,36+this.offset.z),this.camera.lookAt(this.offset.x,0,this.offset.z))}selectTile(e,t="inspect"){let n=this.tiles[e];n&&(this.selectedTile=e,this.selectionMode=t,this.navTurn=this.game?`${this.game.s.round}:${this.game.s.current}`:"",this.selection.visible=!0,this.selection.position.copy(n.kind==="property"?dh(n):new T(n.x,.23,n.z)),this.selection.rotation.y=n.facing,this.selection.scale.set(n.kind==="property"?1:.8,1,n.kind==="property"?1:.72),this.selectionPlate.material.color.set(t==="buy"?"#ffd65a":"#fff0a8"),this.selectionLabel.material.map?.dispose(),this.selectionLabel.material.map=sr(t==="buy"?`\u5F85\u552E \xB7 ${n.price} \u5976\u5E01`:n.name,{background:t==="buy"?"#ffdfa0":"#fff0cb",color:"#674324",width:320,height:72}),this.selectionLabel.material.needsUpdate=!0,this.el.dataset.selectedTile=String(e))}clearSelection(){this.selectedTile=null,this.selection.visible=!1,delete this.el.dataset.selectedTile}focusTile(e){!this.tiles[e]||this.studio||(this.follow=!1,this.focusTarget=this.tiles[e].kind==="property"?dh(this.tiles[e]):new T(this.tiles[e].x,0,this.tiles[e].z),this.focusTarget.y=0,this.focusZoom=this.aspect<.8?2.6:2.1,this.selectTile(e,"nav"),this.cameraChanged())}isMoving(){return this.contextLost||!this.game||this.studio?!1:this.game.s.players.some(e=>{let t=this.tiles[e.pos],n=this.pawns[e.id];return n&&Math.hypot(n.position.x-(t.x+(e.id-(this.game.s.players.length-1)/2)*.4),n.position.z-(t.z-.15+e.id%2*.22))>.075})}drawFrame(){this.fx.anchorDice(this.camera,this.aspect<.8),this.renderer.info.autoReset=!1,this.renderer.info.reset(),this.quality==="low"?this.renderer.render(this.scene,this.camera):this.highQuality.render()}renderStill(){!this.contextLost&&!this.renderer.getContext().isContextLost()&&(this.updateCamera(),this.drawFrame())}cameraChanged(){this.el.dispatchEvent(new CustomEvent("camerachange",{detail:{follow:this.follow}}))}zoomBy(e){this.studio?this.studio.zoom=Math.max(.65,Math.min(2.5,this.studio.zoom*e)):(this.zoom=Math.max(.65,Math.min(3.3,this.zoom*e)),this.followZoom=this.zoom),this.updateCamera()}controls(){let e=this.renderer.domElement;e.style.touchAction="none",this.gestures=new uh({isStudio:()=>!!this.studio,turn:t=>{this.studio.yaw+=t*.012,this.studio.manual=!0},zoom:t=>this.zoomBy(t),pan:(t,n)=>{this.follow=!1,this.focusTarget=null;let s=(this.camera.top-this.camera.bottom)/Math.max(1,e.clientHeight);this.offset.x=Math.max(-25,Math.min(25,this.offset.x-(t*.789+n*1.118)*s)),this.offset.z=Math.max(-22,Math.min(22,this.offset.z+(t*.614-n*1.437)*s)),this.updateCamera(),this.cameraChanged()},tap:(t,n)=>{this.pointer.set(t/e.clientWidth*2-1,-n/e.clientHeight*2+1),this.ray.setFromCamera(this.pointer,this.camera);let s=[...this.tileMeshes,...[...this.plotMeshes.values()].map(a=>a.model)],r=this.ray.intersectObjects(s,!0).find(a=>Number.isInteger(a.object.userData.tile));r&&this.onTile(r.object.userData.tile)}}),e.addEventListener("pointerdown",t=>{let n=jc(t.clientX,t.clientY,e);this.gestures.down(t.pointerId,n.x,n.y),e.setPointerCapture(t.pointerId)}),e.addEventListener("pointermove",t=>{let n=jc(t.clientX,t.clientY,e);this.gestures.move(t.pointerId,n.x,n.y)}),e.addEventListener("pointerup",t=>{let n=jc(t.clientX,t.clientY,e);this.gestures.up(t.pointerId,n.x,n.y)});for(let t of["pointercancel","lostpointercapture"])e.addEventListener(t,n=>this.gestures.cancel(n.pointerId));e.addEventListener("wheel",t=>{t.preventDefault(),this.zoomBy(t.deltaY<0?1.1:.91)},{passive:!1})}followPlayer(){this.clearSelection(),this.follow=!0,this.focusTarget=null,this.endPreview(),this.followZoom=this.aspect<.8?2.6:this.aspect>1.9?1.7:1.45,this.cameraChanged()}home(){this.clearSelection(),this.follow=!1,this.focusTarget=null,this.endPreview(),this.offset.set(0,0,0),this.zoom=1,this.updateCamera(),this.cameraChanged()}focusLot(e){!this.tiles[e]||this.studio||(this.follow=!1,this.focusTarget=dh(this.tiles[e]).multiplyScalar(.9),this.focusTarget.y=0,this.focusZoom=2.1,this.cameraChanged())}previewCharacter(){this.endPreview()}endPreview(){this.showcase&&(this.world.remove(this.showcase),En(this.showcase),this.showcase=null),this.hero.visible=!0}enterStudio(e){this.studio&&this.leaveStudio();let t=new me,n=Kr(e);t.add(n),n.position.y=.15,at(t,"#c7bfa5",[0,.04,0],1.2,1.3,.14,64);let s=Be(t,new sn(240,240),"#dfd9c7",[0,-.05,0]);s.rotation.x=-Math.PI/2,this.scene.add(t),this.studio={root:t,model:n,yaw:.3,zoom:1,mode:"idle",manual:!1},this.highQuality.studio(!0),this.sun.shadow.camera.left=this.sun.shadow.camera.bottom=-5,this.sun.shadow.camera.right=this.sun.shadow.camera.top=5,this.sun.shadow.camera.updateProjectionMatrix(),this.world.visible=!1,this.scene.fog=new Gs("#dedccc",18,50),this.scene.background.set("#dedccc"),this.applyLighting(this.worldLighting),this.updateCamera()}leaveStudio(){this.studio&&(this.scene.remove(this.studio.root),En(this.studio.root),this.studio=null,this.highQuality.studio(!1),this.sun.shadow.camera.left=this.sun.shadow.camera.bottom=-26,this.sun.shadow.camera.right=this.sun.shadow.camera.top=26,this.sun.shadow.camera.updateProjectionMatrix(),this.world.visible=!0,this.scene.fog=new Gs("#b7d3dc",70,130),this.scene.background.set("#b7d3dc"),this.applyLighting(this.worldLighting),this.updateCamera())}animate(e){if(this.raf=requestAnimationFrame(this.animate),document.hidden||this.paused||e-this.last<16)return;let t=Math.min(.06,(e-this.last)/1e3||.033);this.last=e,this.time+=t;let n=this.time;if(Bp(this.reduced?0:n,this.camera),this.fx.update(t),this.selection.visible&&(this.selectionPlate.material.opacity=this.reduced?.23:.22+Math.sin(n*3)*.06),this.studio){let s=this.studio;s.model.rotation.y=s.yaw+(s.manual?0:Math.sin(n*.25)*.25),co(s.model,{time:n,moving:s.mode==="walk",mood:s.mode==="laugh"?"happy":null}),this.drawFrame();return}if(this.focusTarget){let s=this.reduced?1:1-Math.exp(-3.2*t);this.offset.lerp(this.focusTarget,s),this.zoom+=(this.focusZoom-this.zoom)*s,this.updateCamera(),this.offset.distanceTo(this.focusTarget)<.02&&(this.focusTarget=null)}if(this.game){let s=this.game.s;for(let a of s.players){let o=this.pawns[a.id],l=this.tiles[a.pos],c=new T(l.x+(a.id-(s.players.length-1)/2)*.4,.24,l.z-.15+a.id%2*.22),h=a.alive?.56:.001;o.scale.lerp(new T(h,h,h),1-Math.exp(-5*t)),o.visible=o.scale.x>.015;let u=o.position.distanceTo(c)>.06;if(u){let f=c.clone().sub(o.position);o.rotation.y=Math.atan2(f.x,f.z),o.position.lerp(c,this.reduced?1:1-Math.exp(-8*t)),o.position.y=this.reduced?.24:.24+Math.abs(Math.sin(n*14))*.065}else o.position.copy(c),o.rotation.y+=(.45-o.rotation.y)*.04;co(o,{time:n+a.id,moving:u,mood:s.current===a.id&&s.phase==="event"?s.notice?.mood:this.actionMood?.player===a.id&&this.actionMood.until>performance.now()?this.actionMood.mood:null,alive:a.alive})}let r=this.pawns[s.current];this.turnMarker.visible=!!r&&!this.showcase&&s.phase!=="finished",r&&(this.turnMarker.position.set(r.position.x,.23,r.position.z),this.turnMarker.material.color.set(an.find(a=>a.id===s.players[s.current].character).color),this.turnMarker.scale.setScalar(this.reduced?1:1+Math.sin(n*4)*.08)),this.follow&&r&&(this.offset.lerp(new T(r.position.x,0,r.position.z),this.reduced?1:1-Math.exp(-2.2*t)),this.zoom+=(this.followZoom-this.zoom)*(this.reduced?1:1-Math.exp(-2.2*t)),this.updateCamera())}for(let[s,r]of this.pickupMeshes)r.position.y=this.reduced?.24:.24+Math.sin(n*2+s)*.055;for(let s of this.buildingBadges)s.visible=this.zoom>1.3&&!this.showcase;if(co(this.hero,{time:n,mood:this.game?.s.phase==="event"?this.game.s.notice?.mood:null}),this.showcase&&(co(this.showcase,{time:n}),this.showcase.rotation.y=.3+Math.sin(n*.4)*.18),!this.reduced){for(let[s,r]of this.floats.entries())r.position.y=-.45+Math.sin(n*1.1+s)*.035,r.rotation.z=Math.sin(n+s)*.015;for(let[s,r]of this.ripples.entries())r.scale.x=1+Math.sin(n*.8+s)*.08;for(let[s,r]of this.waterJets.entries())r.scale.y=1+Math.sin(n*3+s)*.035;if(Math.floor(n*2)!==this.lastSmoke&&(this.lastSmoke=Math.floor(n*2),this.quality!=="low"))for(let s of this.smokestacks)this.fx.spawn("dust",new T(s.x,s.y,s.z),"#d3d3c2")}this.drawFrame(),this.el.dataset.drawCalls=String(this.renderer.info.render.calls),this.el.dataset.triangles=String(this.renderer.info.render.triangles),this.el.dataset.effects=String(this.fx.items.length)}};var ia={ode:{name:"\u5976\u5BB6\u6B22\u4E50\u9882",credit:"\u8D1D\u591A\u82AC\u300A\u6B22\u4E50\u9882\u300B\u65CB\u5F8B \xB7 \u672C\u4F5C\u5668\u4E50\u6539\u7F16",bpm:112},town:{name:"\u5976\u5BB6\u6F2B\u6E38",credit:"\u672C\u4F5C\u539F\u521B\u8F7B\u5FEB\u5C0F\u9547\u914D\u4E50",bpm:104}},Qm={music:!0,musicVolume:.32,effectsVolume:.68,voice:!0,voiceVolume:.65,track:"ode"};function Is(i={}){let e={...Qm,...i};for(let t of["musicVolume","effectsVolume","voiceVolume"])e[t]=Number.isFinite(e[t])?Math.max(0,Math.min(1,e[t])):Qm[t];return ia[e.track]||(e.track="ode"),e}var nM=[[64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[64,1.5],[62,.5],[62,2],[64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[62,1.5],[60,.5],[60,2],[62,1],[62,1],[64,1],[60,1],[62,1],[64,.5],[65,.5],[64,1],[60,1],[62,1],[64,.5],[65,.5],[64,1],[62,1],[60,1],[62,1],[67,2],[64,1],[64,1],[65,1],[67,1],[67,1],[65,1],[64,1],[62,1],[60,1],[60,1],[62,1],[64,1],[62,1.5],[60,.5],[60,2]],iM=[[67,.5],[72,.5],[76,1],[74,.5],[72,.5],[69,1],[67,.5],[64,.5],[67,1],[65,1],[64,1],[62,.5],[65,.5],[69,1],[67,.5],[65,.5],[64,1],[62,1],[60,1],[64,1],[67,1],[69,.5],[72,.5],[76,1],[74,1],[72,1],[71,.5],[69,.5],[67,1],[64,1],[62,1],[60,2]],e0=i=>{let e=0;return{events:i.map(([t,n])=>{let s={note:t,duration:n,beat:e};return e+=n,s}),length:e}},t0={ode:e0(nM),town:e0(iM)},n0=i=>440*2**((i-69)/12),ph=class{constructor(e={}){this.options=Is(e),this.ctx=null,this.timer=null,this.beat=0,this.nextTime=0,this.voices=new Set,this.lastVoice=-10,this.unlocked=!1,this.hidden=!1,this.failed=!1,this.layers=[],this.loopCount=0,this.suspendTimer=null,this.disposed=!1}async unlock(){if(!this.disposed){if(!this.ctx)try{let e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.82;let t=this.ctx.createDynamicsCompressor();t.threshold.value=-15,t.ratio.value=5,this.master.connect(t),t.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.fxGain=this.ctx.createGain(),this.voiceGain=this.ctx.createGain();for(let s of[this.musicGain,this.fxGain,this.voiceGain])s.connect(this.master);this.noise=this.ctx.createBuffer(1,Math.ceil(this.ctx.sampleRate*.22),this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=(Math.random()*2-1)*(1-s/n.length);this.loadLaugh()}catch{this.failed=!0;return}try{await this.ctx.resume(),this.unlocked=!0,this.apply()}catch{this.failed=!0}}}async loadLaugh(){try{let e=globalThis.__NAIWA_LAUGH_DATA__||"./audio/naiwa-laugh-excerpt.mp3",t=await fetch(e);if(!t.ok)return;this.laughBuffer=await this.ctx.decodeAudioData(await t.arrayBuffer())}catch{this.laughBuffer=null}}setOptions(e){let t=Is(e),n=t.track!==this.options.track;JSON.stringify(t)!==JSON.stringify(this.options)&&(this.options=t,n&&this.timer&&this.transitionTrack(t.track),this.apply())}apply(){if(!this.ctx||this.disposed)return;let e=this.options.sound!==!1&&!this.hidden,t=this.ctx.currentTime;if(this.fade(this.master.gain,e?.82:0,t,.6),this.fade(this.musicGain.gain,this.options.music?this.options.musicVolume*.65:0,t,.9),this.fxGain.gain.setTargetAtTime(this.options.effectsVolume*.7,t,.04),this.voiceGain.gain.setTargetAtTime(this.options.voiceVolume*.72,t,.04),e&&this.options.music&&this.unlocked?this.startMusic():this.stopMusic(),!e||!this.options.voice)for(let n of this.voices)try{n.stop()}catch{}}visibility(e){if(this.hidden=!!e,this.suspendTimer!==null&&clearTimeout(this.suspendTimer),this.suspendTimer=null,this.disposed)return;this.apply();let t=this.ctx;t&&(this.hidden?this.suspendTimer=setTimeout(()=>{this.suspendTimer=null,this.hidden&&!this.disposed&&this.ctx===t&&Promise.resolve(t.suspend()).catch(()=>{})},650):this.unlocked&&Promise.resolve(t.resume()).then(()=>{this.disposed||this.apply()}).catch(()=>{}))}fade(e,t,n,s=.8){e.cancelAndHoldAtTime?e.cancelAndHoldAtTime(n):e.cancelScheduledValues?.(n);let r=e.value;e.setValueAtTime?.(r,n),e.linearRampToValueAtTime?.(t,n+s)}createLayer(e,t,n=1.6){let s=this.ctx.createGain(),r=t0[e].length*60/ia[e].bpm,a=2;s.connect(this.musicGain),s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(1,t+n),s.gain.setValueAtTime(1,t+r-a),s.gain.linearRampToValueAtTime(0,t+r);let o={track:e,gain:s,beat:0,next:t,start:t,end:t+r,nextLoop:t+r-a,spawned:!1};return this.layers.push(o),o}transitionTrack(e){let t=this.ctx.currentTime;for(let n of this.layers)this.fade(n.gain.gain,0,t,1.8),n.end=Math.min(n.end,t+1.8),n.spawned=!0;this.createLayer(e,t+.04,1.8)}scheduleMusic(e=this.ctx.currentTime){let t=e+.22;for(let n of[...this.layers])!n.spawned&&t>=n.nextLoop&&(n.spawned=!0,this.loopCount++,this.createLayer(n.track,n.nextLoop<e?e+.03:n.nextLoop,2));for(let n of this.layers){let s=60/ia[n.track].bpm,r=t0[n.track];if(n.next<e){let a=Math.ceil((e+.015-n.next)/(s*.5));n.beat+=a*.5,n.next+=a*s*.5}for(;n.next<t&&n.next<n.end;){let a=n.beat%r.length,o=r.events.find(f=>Math.abs(f.beat-a)<.01);o&&this.note(o.note,n.next,o.duration*s*.96,.105,"flute",n.gain);let l=Math.floor(a/4),c=Math.round(a*2)%8,h=[[48,52,55],[43,47,50],[41,45,48],[43,47,53]],u=h[[0,1,0,1,2,0,1,0,1,0,1,1,0,1,2,0][l%16]];c%4===0&&this.note(u[0]-12,n.next,s*.9,.09,"bass",n.gain),this.note(u[c%3]+12,n.next,s*.5,.045,"pluck",n.gain),c%2===1&&this.hiss(n.next,.025,.012,n.gain,4600),n.beat+=.5,n.next+=s*.5}}this.layers=this.layers.filter(n=>e>n.end+1.2?(n.gain.disconnect?.(),!1):!0)}startMusic(){this.timer||!this.ctx||(this.createLayer(this.options.track,this.ctx.currentTime+.06),this.scheduleMusic(),this.timer=setInterval(()=>{this.ctx&&!this.hidden&&this.scheduleMusic()},70))}stopMusic(){this.timer&&clearInterval(this.timer),this.timer=null;for(let e of this.layers){this.fade(e.gain.gain,0,this.ctx.currentTime,.35);let t=e.gain;setTimeout(()=>{try{t.disconnect?.()}catch{}},500)}this.layers=[]}note(e,t,n,s,r="pluck",a=this.fxGain){if(!this.ctx||!a)return;let o=this.ctx,l=o.createOscillator(),c=o.createGain(),h=o.createBiquadFilter();if(l.type=r==="bass"?"triangle":r==="flute"?"sine":"triangle",l.frequency.value=n0(e),h.type="lowpass",h.frequency.value=r==="bass"?500:r==="flute"?2400:1700,l.connect(h),h.connect(c),c.connect(a),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),t+(r==="flute"?.045:.008)),c.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(.07,n)),l.start(t),l.stop(t+Math.max(.1,n)+.03),r==="flute"){let u=o.createOscillator(),f=o.createGain();u.type="sine",u.frequency.value=n0(e)*2,f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(s*.18,t+.04),f.gain.linearRampToValueAtTime(0,t+n),u.connect(f),f.connect(a),u.start(t),u.stop(t+n+.03)}}hiss(e,t,n,s=this.fxGain,r=1800){if(!this.ctx||!this.noise)return;let a=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),l=this.ctx.createGain();a.buffer=this.noise,o.type="highpass",o.frequency.value=r,l.gain.setValueAtTime(n,e),l.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(o),o.connect(l),l.connect(s),a.start(e),a.stop(e+t)}sfx(e="tap"){if(!this.ctx||!this.unlocked||this.hidden||this.options.sound===!1)return;let t=this.ctx.currentTime;if(e==="laugh"||e==="happy"){this.laugh();return}if(e==="roll"){for(let s=0;s<7;s++)this.hiss(t+s*.035,.035,.09,this.fxGain,600),this.note(45+s%3*3,t+s*.035,.045,.045);return}if(e==="diceLand"){this.hiss(t,.045,.07,this.fxGain,700),this.note(48,t,.08,.055);return}if(e==="step"){this.hiss(t,.033,.035,this.fxGain,800),this.note(43,t,.045,.02,"bass");return}if(e==="build"){for(let s=0;s<4;s++)this.note(48+s*5,t+s*.1,.1,.06),this.hiss(t+s*.1,.035,.07,this.fxGain,1200);return}if(e==="demolish"){this.hiss(t,.2,.17,this.fxGain,200),this.note(35,t,.28,.1,"bass");return}let n={tap:[76],coin:[79,84],sad:[62,58,53],magic:[72,76,79,84],win:[72,76,79,84,79,84]};(n[e]||n.tap).forEach((s,r)=>this.note(s,t+r*.085,e==="tap"?.08:.19,e==="tap"?.055:.085)),e==="win"&&setTimeout(()=>this.laugh(),500)}laugh(){if(!this.ctx||!this.options.voice||this.options.sound===!1||this.hidden||!this.laughBuffer||this.ctx.currentTime-this.lastVoice<4)return;this.lastVoice=this.ctx.currentTime;let e=this.ctx.createBufferSource();e.buffer=this.laughBuffer,e.connect(this.voiceGain),this.voices.add(e),e.onended=()=>this.voices.delete(e),e.start();let t=this.ctx.currentTime,n=this.musicGain.gain;this.fade(n,this.options.music?this.options.musicVolume*.2:0,t,.16),n.setValueAtTime(this.options.music?this.options.musicVolume*.2:0,t+1.05),n.linearRampToValueAtTime(this.options.music?this.options.musicVolume*.65:0,t+1.9)}status(){return this.failed?"\u97F3\u9891\u4E0D\u53EF\u7528":this.unlocked?this.options.sound===!1?"\u5168\u90E8\u9759\u97F3":this.hidden?"\u5DF2\u6682\u505C":this.options.music?"\u6B63\u5728\u64AD\u653E \xB7 "+ia[this.options.track].name:"\u97F3\u4E50\u5DF2\u5173\u95ED":"\u70B9\u51FB\u540E\u542F\u7528\u58F0\u97F3"}dispose(){if(!this.disposed){this.disposed=!0,this.suspendTimer!==null&&clearTimeout(this.suspendTimer),this.suspendTimer=null,this.stopMusic();for(let e of this.voices)try{e.stop()}catch{}this.ctx&&Promise.resolve(this.ctx.close()).catch(()=>{})}}};var i0="naiwa-monopoly-preferences-v1";function Sd(i={}){let e=i&&typeof i=="object"&&!Array.isArray(i)?i:{},t=Is(e);return{sound:typeof e.sound=="boolean"?e.sound:!0,speed:[1,2,4].includes(e.speed)?e.speed:1,quality:["auto","low"].includes(e.quality)?e.quality:"auto",lighting:["day","golden","night"].includes(e.lighting)?e.lighting:"day",music:typeof t.music=="boolean"?t.music:!0,musicVolume:t.musicVolume,effectsVolume:t.effectsVolume,voice:typeof t.voice=="boolean"?t.voice:!0,voiceVolume:t.voiceVolume,track:t.track}}function s0(i,e={}){try{let t=i.getItem(i0);if(t){let n=JSON.parse(t);if(n&&typeof n=="object"&&!Array.isArray(n))return Sd({...e,...n})}}catch{}return Sd(e)}function r0(i,e){try{return i.setItem(i0,JSON.stringify(Sd(e))),!0}catch{return!1}}var a0=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),mh=class{constructor(e,{jump:t,inspect:n}){this.tiles=Ii,this.root=e,this.jump=t,this.inspect=n,this.selected=0,this.followSelection=!0,this.lastTurn="";let s=matchMedia("(min-width:1000px) and (min-height:650px)");this.expanded=s.matches,this.touched=!1;let r=ho(this.tiles).map(o=>`M${o.a.x},${o.a.y}L${o.b.x},${o.b.y}`).join(" ");e.innerHTML=`<button class="mini-toggle" aria-expanded="${this.expanded}" aria-controls="miniBody"><span>\u25C8 \u5168\u5C9B\u5730\u56FE</span><span class="mini-chevron">${this.expanded?"\u2212":"+"}</span></button><div id="miniBody" ${this.expanded?"":"hidden"}><svg class="mini-svg" role="group" viewBox="0 0 360 250" aria-label="\u5168\u5C9B\u8DEF\u7EBF\uFF0C\u53EF\u7528\u65B9\u5411\u952E\u9009\u62E9\u5730\u5757\uFF0C\u56DE\u8F66\u5B9A\u4F4D"><rect width="360" height="250" rx="14" fill="#b6cd9c"/><rect x="48" y="116" width="264" height="18" rx="8" fill="#81afb2"/><path d="${r}" stroke="#eee0b7" stroke-width="19" fill="none" stroke-linecap="round"/><path d="${r}" stroke="#738b7f" stroke-width="12" fill="none" stroke-linecap="round"/>${this.tiles.map(o=>{let l=Pi(o,this.tiles);return`<circle class="mini-node" data-mini-tile="${o.id}" cx="${l.x}" cy="${l.y}" r="${o.kind==="property"?5:7}" fill="${o.kind==="property"?oi[o.group].color:"#fff0b7"}" stroke="#5b735b" stroke-width="1.4" role="button" tabindex="${o.id===0?0:-1}" aria-label="${o.id+1}. ${a0(o.name)}"><title>${a0(o.name)}</title></circle>`}).join("")}<circle class="mini-selected" r="11" stroke="#fff6cd" stroke-width="2.5" fill="none" stroke-dasharray="4 3" pointer-events="none"/><g class="mini-pawns" pointer-events="none"></g></svg><div class="mini-footer"><span class="mini-name"></span><button class="mini-inspect">\u8BE6\u60C5</button></div><span class="sr-only">\u65B9\u5411\u952E\u9009\u62E9\u5730\u5757\uFF0C\u56DE\u8F66\u5B9A\u4F4D\uFF0C\u8BE6\u60C5\u67E5\u770B\u4EF7\u683C\u4E0E\u5F52\u5C5E\u3002</span></div>`,this.body=e.querySelector("#miniBody"),this.toggle=e.querySelector(".mini-toggle"),this.nodes=[...e.querySelectorAll("[data-mini-tile]")],this.marker=e.querySelector(".mini-selected"),this.name=e.querySelector(".mini-name"),this.toggle.addEventListener("click",()=>{this.touched=!0,this.setExpanded(!this.expanded)}),s.addEventListener("change",o=>{this.touched||this.setExpanded(o.matches)});let a=o=>{let l=o.target.closest("[data-mini-tile]");l&&(this.select(+l.dataset.miniTile,!1),this.jump(this.selected))};e.querySelector("svg").addEventListener("click",a),e.querySelector("svg").addEventListener("keydown",o=>{let l=o.target.closest("[data-mini-tile]");if(l){if(["Enter"," "].includes(o.key)){o.preventDefault(),a(o);return}["Home","End","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(o.key)&&(o.preventDefault(),this.select(fm(+l.dataset.miniTile,o.key),!1),this.nodes[this.selected].focus())}}),e.querySelector(".mini-inspect").addEventListener("click",()=>this.inspect(this.selected)),this.select(0,!0),this.setExpanded(this.expanded)}setMap(e){this.tiles=e;let t=ho(e).map(n=>`M${n.a.x},${n.a.y}L${n.b.x},${n.b.y}`).join(" ");for(let n of this.root.querySelectorAll(".mini-svg>path"))n.setAttribute("d",t);for(let n of e){let s=this.nodes[n.id],r=Pi(n,e);s.setAttribute("cx",r.x),s.setAttribute("cy",r.y),s.setAttribute("r",n.kind==="property"?5:7),s.querySelector("title").textContent=n.name,s.setAttribute("fill",n.kind==="property"?oi[n.group].color:"#fff0b7"),s.setAttribute("aria-label",`${n.id+1}. ${n.name}`)}this.lastTurn=""}setExpanded(e){this.expanded=e,this.toggle.setAttribute("aria-expanded",String(e)),this.toggle.querySelector(".mini-chevron").textContent=e?"\u2212":"+",this.body.hidden=!e,this.root.classList.toggle("is-collapsed",!e)}select(e,t=!1){if(!this.tiles[e])return;this.selected=e,this.followSelection=t;for(let s of this.nodes)s.setAttribute("tabindex",+s.dataset.miniTile===e?"0":"-1");let n=Pi(this.tiles[e],this.tiles);this.marker.setAttribute("cx",n.x),this.marker.setAttribute("cy",n.y),this.name.textContent=this.labels?.[e]||`${e+1}. ${this.tiles[e].name}`}sync(e,{visible:t=!0}={}){if(this.tiles!==e.tiles&&this.setMap(e.tiles),this.root.hidden=!t,!t)return;let n=e.s,s=`${n.round}:${n.current}`;s!==this.lastTurn&&(this.lastTurn=s,this.followSelection=!0),this.labels=[],this.followSelection&&this.select(e.player.pos,!0);for(let a of this.tiles){let o=this.nodes[a.id],l=n.ownership[a.id];o.setAttribute("fill",l?e.char(n.players[l.player]).estateColor:a.kind==="property"?oi[a.group].color:"#fff0b7"),o.setAttribute("stroke-width",l?"3":"1.4");let c=`${a.id+1}. ${a.name}${l?" \xB7 "+e.char(n.players[l.player]).name+" \xB7 "+(l.level?Ht[lt(l)].name+" "+l.level+"\u7EA7":"\u5F85\u5EFA\u7A7A\u5730"):""}`;this.labels[a.id]=c,o.setAttribute("aria-label",c),o.querySelector("title").textContent=c}this.name.textContent=this.labels[this.selected];let r=n.players.filter(a=>a.alive).map(a=>{let o=Pi(this.tiles[a.pos],this.tiles),l=e.char(a).color;return`<circle cx="${o.x+(a.id-(n.players.length-1)/2)*5}" cy="${o.y-5}" r="${a.id===n.current?6:4.5}" fill="${l}" stroke="${a.id===n.current?"#fffbe2":"#644727"}" stroke-width="${a.id===n.current?3:2}"/>`}).join("");this.root.querySelector(".mini-pawns").innerHTML=r}};function sM(i){if(/暂时放弃|存款利息/.test(i))return null;let e=i.replace(/掷出 (.+?)，(前进|倒退) (\d+) 格。/,"\u63B7\u51FA $1 \xB7 $2 $3\u683C").replace(/奶家发财岛开张！每位奶伴带着 ([\d,]+) 奶币出发。/,"\u5976\u5BB6\u5F00\u5C40 \xB7 \u6BCF\u4EBA $1 \u5976\u5E01").replace(/将「(.+?)」升级为 (\d) 级/,"\u5347\u7EA7 $1 \xB7 $2\u7EA7").replace(/拆除「(.+?)」房屋，保留土地，回收材料/,"\u62C6\u9664 $1 \xB7 \u56DE\u6536").replace(/需支付 (\d+) 奶币，请筹集资金或申请破产。/,"\u73B0\u91D1\u4E0D\u8DB3 \xB7 \u5F85\u4ED8 $1").replace(/向(奶.+?)支付「.+?」租金/,"\u5411$1\u4ED8\u79DF\u91D1").replace(/，持续 3 个后续回合。/,"").replace(/第 (\d+) 轮开始，奶家股市行情已更新。/,"\u7B2C $1 \u8F6E \xB7 \u80A1\u5E02\u66F4\u65B0").replace(/[「」]/g,"").replace(/[。！]$/,"");if(e.length>33){let t=e.match(/[+−]\d+[，。]?$/)?.[0]||"";e=e.slice(0,29-t.length)+"\u2026"+t}return e}var gh=class{constructor(e){this.root=e,this.queue=[],this.timer=null,this.paused=!1,this.remaining=2400,this.speed=1}get busy(){return!this.root.hidden||this.queue.length>0}setSpeed(e){this.speed=Math.min(2,Math.max(1,e||1))}sync(e,t){if(!t){this.reset();return}if(this.game!==e){this.reset(),this.game=e,this.turn=`${e.s.round}:${e.s.current}`,this.head=e.s.logs[0],this.push(`\u7B2C ${e.s.round} \u8F6E \xB7 ${e.char().name}\u7684\u56DE\u5408`),e.s.phase==="event"&&!e.player?.human&&e.s.notice&&(this.lastNotice=e.s.notice,this.push(`${e.char().name} \xB7 ${e.s.notice.title}`));return}e.s.phase==="event"&&!e.player?.human&&e.s.notice&&e.s.notice!==this.lastNotice&&(this.lastNotice=e.s.notice,this.push(`${e.char().name} \xB7 ${e.s.notice.title}`));let n=`${e.s.round}:${e.s.current}`;n!==this.turn&&(this.turn=n,this.push(`\u7B2C ${e.s.round} \u8F6E \xB7 ${e.char().name}\u7684\u56DE\u5408`));let s=e.s.logs.indexOf(this.head);if(s!==0){let r=(s<0?e.s.logs.slice(0,1):e.s.logs.slice(0,s)).reverse();this.head=e.s.logs[0];for(let a of r){let o=sM(a.text);o&&this.push(o)}}}reset(){clearTimeout(this.timer),this.timer=null,this.queue=[],this.game=null,this.root.hidden=!0}push(e){this.queue.push(e),!this.timer&&!this.paused&&this.next()}next(){if(this.paused)return;clearTimeout(this.timer);let e=this.queue.shift();if(!e){this.timer=null,this.root.hidden=!0;return}if(this.root.textContent=e,this.root.insertAdjacentHTML){let t=[["\u5976\u86D9","naiwa"],["\u5976\u9F20","naishu"],["\u5976\u866B","naichong"],["\u5976\u72D7","naigou"],["\u5976\u86CB","naidan"],["\u5976\u8336","naicha"]].find(([n])=>e.includes(n));t&&this.root.insertAdjacentHTML("afterbegin",`<span class="news-face">${dn(t[1])}</span>`)}this.root.hidden=!1,this.root.classList.remove("news-enter"),this.root.offsetWidth,this.root.classList.add("news-enter"),this.remaining=Math.max(1250,Math.min(2800,1200+e.length*40)/this.speed),this.schedule()}schedule(){this.deadline=performance.now()+this.remaining,this.timer=setTimeout(()=>this.next(),this.remaining)}setPaused(e){e!==this.paused&&(this.paused=e,e?this.timer&&(this.remaining=Math.max(100,this.deadline-performance.now()),clearTimeout(this.timer),this.timer=null):this.root.hidden?this.queue.length&&this.next():this.schedule())}};var H=i=>document.getElementById(i),Ds=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ci=i=>Math.round(i).toLocaleString("zh-CN"),It=lr(),en=null;try{It=lr(JSON.parse(localStorage.getItem("naiwa-setup-v1")||"{}"))}catch{}var d0=20,Td=!1;var F=is.create({seed:7481}),Ze=!1,hi="naiwa",Ui=null,Oe,jt=null,mn=!1,ss="",o0,f0,l0,Ad=!0,fr=!1,on=F.tiles;try{Ui=is.restore(localStorage.getItem(vd)),Object.assign(F.s.options,s0(localStorage,Ui?.s.options||F.s.options))}catch{}try{Oe=new fh(H("scene"),i=>{Ze&&!mn&&ft("tile",i)},F.tiles)}catch(i){console.warn("3D unavailable; using playable map",i),H("fallback").hidden=!1}H("scene").addEventListener("camerachange",i=>H("followBtn").setAttribute("aria-pressed",String(i.detail.follow)));H("scene").addEventListener("dicerollchange",i=>{H("dice").classList.toggle("rolling",i.detail.rolling),H("app").classList.toggle("is-dice-active",i.detail.active),i.detail.impact&&Tn.sfx("diceLand")});H("scene").addEventListener("renderlost",()=>{Oe?.leaveStudio(),H("app").classList.remove("is-studio"),H("studioPanel").hidden=!0,H("startScreen").hidden=Ze,H("fallback").hidden=!1,rs(),Jt("3D \u753B\u9762\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u5DF2\u5207\u6362\u5230\u53EF\u73A9\u7684\u7B80\u6D01\u5730\u56FE\u3002"),tn()});H("scene").addEventListener("renderrestored",()=>{H("fallback").hidden=!0,Oe&&(Oe.paused=fr),tn(),Oe?.renderStill(),Jt("3D \u753B\u9762\u5DF2\u6062\u590D\uFF0C\u7EE7\u7EED\u5F53\u524D\u65C5\u7A0B\u3002")});var rM=new mh(H("miniMap"),{jump:i=>{Ze&&!mn&&!Oe?.studio&&(Oe?.focusTile(i),ra())},inspect:i=>{Ze&&!mn&&ft("tile",i)}}),aM=new Xc,_o=new gh(H("newsFlash")),Rd=new Kc,Tn=new ph(F.s.options),c0=null;function sa(){Tn.setOptions(F.s.options),H("soundBtn").dataset.state=Tn.status();let i=H("audioStatus");i&&(i.textContent=Tn.status())}function ra(i="tap"){sa(),Tn.sfx(i)}async function Mo(){await Tn.unlock(),sa()}document.addEventListener("pointerdown",Mo,{once:!0,capture:!0});document.addEventListener("keydown",Mo,{once:!0,capture:!0});function oM(){let i=F.s,e={state:i,positions:i.players.map(n=>n.pos),money:i.players.map(n=>n.money),lots:Object.fromEntries(Object.entries(i.ownership).map(([n,s])=>[n,s.level])),phase:i.phase},t=c0;c0=e,!(!Ze||!t||t.state!==i)&&(e.positions.some((n,s)=>n!==t.positions[s])&&Tn.sfx("step"),Object.entries(e.lots).some(([n,s])=>s>(t.lots[n]??0))?Tn.sfx("build"):Object.entries(t.lots).some(([n,s])=>s>0&&(e.lots[n]??0)<s)?Tn.sfx("demolish"):e.money.some((n,s)=>n>t.money[s])&&Tn.sfx("coin"),e.phase==="moving"&&["roll","departure"].includes(t.phase)&&Tn.sfx("roll"),e.phase==="finished"&&t.phase!=="finished"&&Tn.sfx("win"))}function Jt(i){H("toast").textContent=i,H("toast").classList.add("show"),clearTimeout(o0),o0=setTimeout(()=>H("toast").classList.remove("show"),2800)}function rs(){try{r0(localStorage,F.s.options)}catch{}if(Ze)try{localStorage.setItem(vd,JSON.stringify(F.s)),Ad=!0,H("saveStatus").textContent="\u5DF2\u81EA\u52A8\u4FDD\u5B58\u5728\u672C\u673A"}catch{Ad=!1,H("saveStatus").textContent="\u5B58\u6863\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8BF7\u5BFC\u51FA\u5907\u4EFD"}}function pn(i=!0){if(!i){Jt("\u5F53\u524D\u65E0\u6CD5\u6267\u884C\uFF1A\u8BF7\u68C0\u67E5\u4F59\u989D\u3001\u6570\u91CF\u6216\u4F7F\u7528\u65F6\u673A\u3002");return}rs(),tn(),ra()}function lM(){let i=+H("playerCountSelect").value,e=Ps(It,hi,i);if(e){en=lr(It),ft("advanced"),Jt(e);return}Rd.reset();let t={...F.s.options};F=is.create({character:hi,rounds:+H("roundSelect").value,playerCount:i,randomStart:It.randomStart,mapVersion:It.mapVersion,opponents:Array.from({length:i-1},(n,s)=>It.opponents[s]||"random"),seatLevels:It.seatLevels,startingCash:It.startingCash,startingTickets:It.startingTickets,seed:It.seed===""?Date.now():+It.seed,difficulty:H("difficultySelect").value,talents:H("talentsEnabled").checked}),F.s.options=t,Ze=!0,ss="",Ot(!0),H("startScreen").hidden=!0,Oe?.home(),Oe?.followPlayer(),pn()}function yh(){if(!en)return;en.opponents=Array.from(document.querySelectorAll("[data-setup-seat]"),e=>e.value),en.seatLevels=Array.from(document.querySelectorAll("[data-setup-level]"),e=>e.value),en.startingCash=+H("setupCash").value,en.startingTickets=+H("setupTickets").value,en.mapVersion=+H("setupMap").value,en.randomStart=H("setupInitiative").value==="random",en.seed=H("setupSeed").value.trim();let i=Ps(en,hi,+H("playerCountSelect").value);H("setupError").textContent=i,H("sheetBody").querySelector("[data-act=applyAdvanced]").disabled=!!i;for(let e of document.querySelectorAll(".opponent-seat")){let t=e.querySelector("[data-setup-seat]").value;e.querySelector(".seat-portrait").innerHTML=t==="random"?'<span class="random-face">\u2684</span>':dn(t)}}function cM(){if(!Ui)return;let i={...F.s.options};F=Ui,F.s.options=i,Ze=!0,ss="",H("startScreen").hidden=!0,Oe?.endPreview(),Oe?.followPlayer(),Ot(!0),pn()}function bo(){if(H("mapSelect").value=String(It.mapVersion),!Ze&&F.s.mapVersion!==It.mapVersion){let e={...F.s.options};F=is.create({mapVersion:It.mapVersion,seed:7481}),F.s.options=e,on=F.tiles,Oe?.sync(F),Oe?.home()}document.querySelector(".map-preview-note").textContent=es[It.mapVersion].name+" \xB7 "+(It.mapVersion===2?"48\u683C \xB7 \u4E24\u6761\u77ED\u652F\u8DEF":"48\u683C \xB7 \u8DE8\u5C9B\u957F\u6377\u5F84"),H("advancedSummary").textContent=`${es[It.mapVersion].name} \xB7 \u521D\u59CB ${ci(It.startingCash)} \u5976\u5E01 \xB7 ${It.opponents.some(e=>e&&e!=="random")?"\u6307\u5B9A\u9635\u5BB9":"\u968F\u673A\u9635\u5BB9"}`,H("characterPicker").innerHTML=an.map(e=>`<button class="character-choice ${hi===e.id?"selected":""}" data-character="${e.id}" aria-pressed="${hi===e.id}"><span class="face">${dn(e.id)}</span><strong>${e.name}</strong></button>`).join(""),H("continueBtn").hidden=!Ui,H("continueBtn").textContent=Ui?"\u7EE7\u7EED \xB7 "+es[Ui.s.mapVersion].name+" \xB7 \u7B2C "+Ui.s.round+" \u8F6E":"\u7EE7\u7EED\u4E0A\u6B21\u7684\u65C5\u884C",document.querySelector(".welcome-panel").classList.toggle("has-save",!!Ui);let i=uo[hi];H("talentPreview").innerHTML=`<strong>${i.icon} ${i.name}${i.strong?" \xB7 \u5F3A\u52BF\u89D2\u8272":""}</strong><p>${i.text}</p>`,Ze||Oe?.previewCharacter(hi)}function h0(i){return[i.skip?`\u4F11\u517B ${i.skip} \u56DE\u5408`:"",i.shield?"\u514D\u79DF\u5DF2\u5C31\u7EEA":"",i.spirit?Rs[i.spirit].name+" "+Math.min(3,i.spiritTurns)+" \u56DE\u5408":"",i.vehicle?li[i.vehicle].name:"",i.reverse?"\u672C\u56DE\u5408\u5012\u9000":"",i.forced?`\u6307\u5B9A ${i.forced} \u6B65`:"",i.slowTurns?`\u6162\u884C ${i.slowTurns} \u6B21`:""].filter(Boolean).map(e=>`<span class="status-pill">${Ds(e)}</span>`).join("")}function tn(){let i=aM.read(F,Ze);on=F.tiles;let e=F.s,t=F.player;sa(),oM(),_o.setSpeed(e.options.speed),_o.sync(F,Ze),Oe?.sync(F),rM.sync(F,{visible:Ze&&!Oe?.studio}),H("app").classList.toggle("is-menu",!Ze),H("app").dataset.phase=e.phase,H("app").dataset.mapVersion=String(e.mapVersion),H("app").style.setProperty("--player-count",e.players.length),H("pauseBtn").hidden=!Ze,H("pauseBtn").setAttribute("aria-pressed",String(fr)),H("difficultyBtn").textContent=ts[e.difficulty].name,H("difficultyBtn").title=ts[e.difficulty].description,H("mapHeading").textContent=es[e.mapVersion].name,H("round").textContent=Ze?`\u7B2C ${e.round} / ${e.maxRounds} \u8F6E`:"\u51C6\u5907\u51FA\u53D1",H("logRound").textContent=`\u7B2C ${e.round} \u8F6E`,H("weather").textContent=Ze?["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"][e.round%7]+" \xB7 "+Ai[ji(e.options.lighting)].label:Ai[ji(e.options.lighting)].label+" \xB7 \u5B9C\u5927\u7B11",H("players").innerHTML=e.players.map(a=>{let o=F.char(a);return`<div data-player-id="${a.id}" class="player ${Ze&&e.current===a.id?"active":""} ${a.alive?"":"out"}"><div class="player-head"><span class="mini-face" style="--c:${o.color}">${dn(o.id)}</span><div><div class="player-name">${o.name} ${a.human?'<span class="badge">\u4F60</span>':""}</div><div class="player-role">${a.alive?"":"\u672C\u5C40\u5DF2\u7834\u4EA7"}</div></div><div class="player-money"><small>\u25CF</small>${ci(a.money)}</div></div><div class="player-stats"><span>\u5730\u4EA7 <strong>${F.owned(a).length}</strong></span><span>\u51C0\u8D44\u4EA7 <strong>${ci(F.worth(a))}</strong></span></div>${h0(a)?`<div class="status-pills">${h0(a)}</div>`:""}</div>`}).join(""),H("logs").innerHTML=e.logs.slice(0,20).map(a=>`<div class="log"><span class="log-time">${String(a.round).padStart(2,"0")}</span><span>${Ds(a.text)}</span></div>`).join(""),H("turnName").textContent=Ze?e.phase==="finished"?"\u672C\u6B21\u65C5\u884C\u5706\u6EE1\u7ED3\u675F":`${F.char().name}${t.human?"\uFF0C\u8F6E\u5230\u4F60\u5566":"\u6B63\u5728\u65C5\u884C"}`:"\u51C6\u5907\u597D\u4E86\u5417\uFF1F",H("talentBtn").title=F.s.talents?uo[F.player.character].text:"\u672C\u5C40\u5929\u8D4B\u672A\u5F00\u542F",H("turnAvatar").innerHTML=dn(F.char().id),H("turnAvatar").style.background=F.char().color;let n={departure:"\u5929\u8D4B\u7ED3\u7B97\u4E2D\uFF0C\u9A6C\u4E0A\u63B7\u9AB0\u51FA\u53D1",roll:t.skip?"\u6B63\u5728\u4F11\u517B\uFF0C\u53EF\u7528\u91CE\u751F\u72D7\u5976\u6062\u590D":`\u70B9\u5238 ${t.tickets} \xB7 \u5DF2\u7528\u5361 ${t.cardsUsed} \xB7 \u505C\u5230\u81EA\u5BB6\u5730\u53EF\u5EFA\u8BBE`,moving:`${t.reverse?"\u5012\u9000":"\u524D\u8FDB"}\u4E2D \xB7 \u8FD8\u5269 ${e.remaining} \u683C`,branch:"\u9009\u62E9\u4E00\u6761\u8DEF\u7EBF\u7EE7\u7EED\u524D\u8FDB",buy:"\u8FD9\u5757\u5730\u503C\u5F97\u4E70\u4E0B\u6765\u5417\uFF1F",estate:"\u652F\u4ED8\u79DF\u91D1\uFF0C\u8FD8\u662F\u7528\u8D2D\u5730\u5361\u6536\u8D2D\uFF1F",event:"\u770B\u770B\u5C9B\u4E0A\u53D1\u751F\u4E86\u4EC0\u4E48",end:`\u70B9\u5238 ${t.tickets} \xB7 \u5EFA\u8BBE ${t.buildsUsed}/1 \xB7 \u53EF\u7EE7\u7EED\u7ECF\u8425`,debt:"\u73B0\u91D1\u4E0D\u8DB3\uFF0C\u53EF\u4EE5\u53D6\u6B3E\u3001\u501F\u6B3E\u6216\u53D8\u5356\u8D44\u4EA7",finished:"\u770B\u770B\u8C01\u662F\u4ECA\u5929\u7684\u5976\u5BB6\u5927\u5BCC\u7FC1"},s={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};for(let a of i){let o=ym(H("players"),a);Oe?.showTransfer(a,o)||setTimeout(o,1200)}H("turnHint").textContent=Ze?n[e.phase]:"\u9009\u4E00\u4F4D\u5976\u4F34\uFF0C\u5F00\u542F\u65C5\u884C",H("dice").innerHTML=e.dice.map(a=>`<span class="pip-die" role="img" aria-label="\u9AB0\u5B50 ${a} \u70B9">${Array.from({length:9},(o,l)=>`<i class="${s[a].includes(l)?"pip-on":""}"></i>`).join("")}</span>`).join(""),H("dice").classList.toggle("rolling",!!Oe?.fx.diceRolling),H("actionBtn").textContent=Ze?e.phase==="finished"?"\u770B\u6392\u540D":t.human?{roll:t.skip?"\u4F11\u517B":"\u63B7\u9AB0\u5B50",end:"\u7ED3\u675F\u56DE\u5408",departure:"\u5929\u8D4B\u4E2D",moving:"\u524D\u8FDB\u4E2D",branch:"\u9009\u8DEF\u7EBF",buy:"\u4E70\u5730",estate:"\u9009\u5730\u4EA7",event:"\u770B\u4E8B\u4EF6",debt:"\u7B79\u8D44\u91D1"}[e.phase]:"\u7B49\u5F85\u4E2D":"\u9009\u5976\u4F34",H("actionBtn").textContent.length===4&&(H("actionBtn").textContent=H("actionBtn").textContent.slice(0,2)+`
`+H("actionBtn").textContent.slice(2)),H("actionBtn").disabled=!Ze||!t.human&&e.phase!=="finished"||["moving","departure"].includes(e.phase),document.querySelectorAll("[data-panel]").forEach(a=>a.disabled=!Ze||!t.human||!["roll","end","debt"].includes(e.phase)),document.querySelector("[data-panel=stocks]").disabled=!Ze||mn||!["roll","end","moving","departure"].includes(e.phase),H("cardCount").textContent=e.players[0].cards.length,H("planBtn").disabled=!Ze||!t.human||e.phase!=="roll",H("diceCount").hidden=!Ze||!t.human||t.vehicle===0||e.phase!=="roll",H("diceCount").innerHTML=Array.from({length:li[t.vehicle].dice},(a,o)=>`<option value="${o+1}" ${t.diceCount===o+1?"selected":""}>${o+1} \u9897\u9AB0\u5B50</option>`).join(""),H("soundBtn").textContent=e.options.sound?"\u266B":"\u266A",H("soundBtn").setAttribute("aria-label",e.options.sound?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),H("qualityBtn").textContent=e.options.quality==="low"?"\u7701\u7535":"\u7535\u5F71",H("qualityBtn").title=e.options.quality==="low"?"\u7701\u7535\u753B\u8D28 \xB7 \u70B9\u51FB\u5207\u6362\u7535\u5F71\u753B\u8D28":"\u7535\u5F71\u753B\u8D28 \xB7 \u70B9\u51FB\u5207\u6362\u7701\u7535\u753B\u8D28",H("castBtn").disabled=!Oe||!!Oe.contextLost,H("followBtn").setAttribute("aria-pressed",String(!!Oe?.follow)),H("moveIndicator").hidden=!Ze,H("moveIndicator").textContent=`${F.char().name} \xB7 ${on[t.pos].name}${e.phase==="moving"?" \xB7 \u5269 "+e.remaining+" \u683C":""}`,H("fallback").hidden||(H("fallback").innerHTML=`<div class="fallback-grid">${on.map(a=>`<button class="fallback-tile ${t.pos===a.id?"current":""}" data-tile="${a.id}" style="background:${oi[a.group].color}50">${a.id+1}. ${Ds(a.name)}<br>${e.players.filter(o=>o.alive&&o.pos===a.id).map(o=>F.char(o).name).join(" ")}${e.ownership[a.id]?"<br>\u2302 "+F.char(e.players[e.ownership[a.id].player]).name:""}</button>`).join("")}</div>`);let r=`${e.phase}:${e.current}:${e.round}:${t.pos}`;Ze&&(t.human||e.phase==="finished")&&["buy","estate","event","branch","debt","finished"].includes(e.phase)&&!jt&&ss!==r&&(ss=r,ft(e.phase)),Ze&&t.human&&e.phase==="end"&&!jt&&ss!==r&&(ss=r,F.canUpgrade(t.pos)||F.canBuild(t.pos)||lt(e.ownership[t.pos])==="research"&&e.ownership[t.pos]?.player===t.id?ft("buildHere",t.pos):on[t.pos].kind==="shop"&&ft("shop"))}function Mt(i,e,t,n=!1){jt?.type==="tile"?Oe?.selectTile(jt.id,"inspect"):jt?.type==="buy"&&Oe?.selectTile(F.player.pos,"buy"),H("app").classList.add("has-dialog"),f0=document.activeElement,H("sheet").dataset.panel=jt?.type||"",H("sheetTitle").textContent=i,H("sheetSubtitle").textContent=e,H("sheetBody").innerHTML=t,H("sheet").hidden=!1,H("sheetBody").scrollTop=0,H("sheetBackdrop").hidden=!1,H("sheetBackdrop").classList.toggle("live-map",["deeds","tile","confirmDemolish","buy","branch"].includes(jt?.type)),mn=n,H("closeSheet").hidden=n,queueMicrotask(()=>{(n?H("sheetBody").querySelector("button,input,select"):H("closeSheet"))?.focus({preventScroll:!0})})}function Ot(i=!1){mn&&!i||(fr&&p0(!1),Oe?.clearSelection(),H("app").classList.remove("has-dialog"),jt=null,mn=!1,H("sheet").hidden=!0,H("sheetBackdrop").hidden=!0,f0?.focus?.({preventScroll:!0}),Ze&&["buy","estate","event","branch","debt","finished"].includes(F.s.phase)&&(ss=""))}var Ed=i=>`<div class="stat-grid">${i.map(([e,t])=>`<div class="stat-box"><strong>${e}</strong><span>${t}</span></div>`).join("")}</div>`,je=(i,e,t="",n=!1,s="secondary")=>`<button class="${s}" data-act="${e}" ${t} ${n?"disabled":""}>${i}</button>`;function vh(i,e,t){return ar({...i,buildingType:i.buildingType||F.s.ownership[i.id]?.buildingType},e,t)}function hM(){return Ze&&F.player.human&&F.manageable()}function wd(i){let e=on[i.id];return Ds(e.name)+" \xB7 "+(i.rent?gm(F,i):i.price?"\u7A7A\u5730 "+i.price+" \u5976\u5E01":i.owner===F.player.id?"\u81EA\u5DF1\u7684\u5730\u4EA7":{shop:"\u70B9\u5238 +30 \u4E0E\u968F\u673A\u5361",hospital:`\u8D39\u7528 ${F.payment(100)}\uFF0C\u4F11\u517B\u4E00\u6B21`,tax:`\u8D39\u7528 ${F.payment(180)}`,rest:`\u8865\u8D34 +${Math.round(120*(F.player.spirit==="fortune"?1.25:1))}`,event:"\u968F\u673A\u4E8B\u4EF6",spirit:"\u968F\u673A\u795E\u7075",bank:"\u94F6\u884C",stock:"\u8BC1\u5238\u6240",start:"\u8D77\u70B9"}[e.kind]||"\u5DF2\u5907\u514D\u79DF")+(i.passesStart?` \xB7 \u7ECF\u8FC7\u8D77\u70B9 +${Math.round((400+(F.s.talents&&F.player.character==="naiwa"?80:0))*(F.player.spirit==="fortune"?1.25:1))} / 25\u70B9\u5238`:"")+(i.points?" \xB7 \u9014\u4E2D\u70B9\u5238 +"+i.points:"")+(i.blocked?" \xB7 \u8DEF\u969C\u622A\u505C":"")}function ft(i,e){let t=F.s,n=F.player;jt={type:i,id:e};let s=hM(),r=s&&t.phase!=="debt";if(i==="advanced")en??=lr(It),Mt("\u9AD8\u7EA7\u5BF9\u5C40\u8BBE\u7F6E","\u81EA\u5B9A\u4E49\u7535\u8111\u5E2D\u4F4D\u4E0E\u516C\u5E73\u8D77\u59CB\u6761\u4EF6",Tm(en,hi,+H("playerCountSelect").value,H("difficultySelect").value));else if(i==="mapGuide")Mt(es[t.mapVersion].name,"\u8DEF\u7EBF\u4E0E\u7535\u8111\u8BBE\u7F6E",`<p>${es[t.mapVersion].description}</p><h3>\u672C\u5C40\u7535\u8111\uFF1A${ts[t.difficulty].name}</h3><p>${ts[t.difficulty].description}</p><p>\u672C\u5C40\u7535\u8111\uFF1A${t.players.filter(a=>!a.human).map(a=>F.char(a).name+" \xB7 "+ts[F.aiDifficulty(a)].name).join("\u3001")}\u3002\u79CD\u5B50 ${t.setupSeed??"\u65E7\u5B58\u6863\u672A\u8BB0\u5F55"}\u3002</p><p>\u6240\u6709\u96BE\u5EA6\u7684\u521D\u59CB\u8D44\u91D1\u3001\u79DF\u91D1\u3001\u63B7\u9AB0\u548C\u5929\u8D4B\u89C4\u5219\u76F8\u540C\uFF0C\u5DEE\u522B\u53EA\u5728\u7535\u8111\u5982\u4F55\u505A\u51B3\u7B56\u3002\u65B0\u5C40\u53EF\u91CD\u65B0\u9009\u62E9\u5F3A\u5EA6\u3002</p><p>\u529F\u80FD\u5EFA\u7B51\u5747\u5BF9\u5E94\u9053\u8DEF\u683C\uFF1B\u9009\u62E9\u6377\u5F84\u524D\u53EF\u6253\u5F00\u843D\u70B9\u9884\u89C8\uFF0C\u6BD4\u8F83\u79DF\u91D1\u3001\u8865\u7ED9\u548C\u8D77\u70B9\u5956\u52B1\u3002</p>`);else if(i==="talents")Mt("\u5976\u4F34\u4E13\u5C5E\u5929\u8D4B",t.talents?"\u672C\u5C40\u5DF2\u5F00\u542F \xB7 \u81EA\u52A8\u89E6\u53D1\uFF0C\u65E0\u9700\u989D\u5916\u6309\u952E":"\u672C\u5C40\u672A\u5F00\u542F\uFF1B\u65B0\u5C40\u53EF\u52FE\u9009\u5F00\u542F",an.map(a=>`<div class="talent-row"><span class="talent-face">${dn(a.id)}</span><div><h3>${a.name} \xB7 ${uo[a.id].name}</h3><p>${uo[a.id].text}</p>${t.players.some(o=>o.character===a.id)?'<span class="badge">\u672C\u5C40\u53C2\u8D5B</span>':""}</div></div>`).join(""));else if(i==="deeds"){let a={tea:"\u5976\u8336\u5546\u94FA",theater:"\u5927\u7B11\u5267\u9662",factory:"\u5976\u5757\u5DE5\u5382",garden:"\u82B1\u56ED\u5EAD\u9662",hotel:"\u5976\u5BB6\u65C5\u9986",tower:"\u5976\u5E01\u529E\u516C\u697C"},o=F.owned(n);Mt("\u6211\u7684\u5976\u5BB6\u5730\u4EA7","\u4ECE\u4E00\u95F4\u5C0F\u5E97\uFF0C\u5230\u4E00\u5EA7\u5C0F\u9547",`${As("house","\u7A7A\u5730\u5230\u8BBF\u540E\u53EF\u9009\u4E03\u7C7B\u5EFA\u7B51\uFF1B\u4F4F\u5B85\u3001\u65C5\u9986\u3001\u5546\u573A\u3001\u7814\u7A76\u6240\u6700\u9AD8\u4E94\u7EA7\uFF0C\u8FDE\u9501\u5E97\u3001\u52A0\u6CB9\u7AD9\u3001\u516C\u56ED\u4EC5\u4E00\u7EA7\u3002\u8FDC\u7A0B\u52A0\u76D6\u8BF7\u7528\u5DE5\u7A0B\u961F\u3002","naishu")}${o.length?o.map(l=>`<div class="row estate-row">${vh(l.tile,l.level,F.char(n).estateColor)}<div class="row-head"><strong><span style="color:${oi[l.tile.group].color}">\u25CF</span> ${l.tile.name}</strong><span class="badge">${l.level?l.level+" \u7EA7":"\u7A7A\u5730"}</span></div>${Yc(F,l.tile.id)}<div class="row-actions">${je(l.level>=di(l)?"\u5DF2\u8FBE\u4E0A\u9650":n.buildSite!==l.tile.id?"\u505C\u5230\u8FD9\u91CC\u518D\u5EFA\u8BBE":`\u52A0\u76D6 \xB7 ${F.buildPrice(l.tile)}`,l.level?"upgrade":"chooseBuilding",`data-id="${l.tile.id}"`,!r||!(F.canUpgrade(l.tile.id)||F.canBuild(l.tile.id)))}${je("\u62C6\u9664\u623F\u5C4B","confirmDemolish",`data-id="${l.tile.id}"`,!r||t.phase!=="end"||n.buildSite!==l.tile.id||l.level===0)}${je(`\u53D8\u5356 \xB7 +${ci(F.cost(l.tile,l.level,lt(l))*.65)}`,"sell",`data-id="${l.tile.id}"`,!s)}</div></div>`).join(""):'<div class="empty">\u5C0F\u9547\u8FD8\u5728\u7B49\u5B83\u7684\u65B0\u4E3B\u4EBA\u3002<br>\u8D70\u5230\u65E0\u4E3B\u5730\u4EA7\uFF0C\u5C31\u80FD\u4E70\u4E0B\u7B2C\u4E00\u5757\u5730\u3002</div>'}`)}else if(i==="cards")Mt("\u5976\u4F34\u7684\u5361\u5305","\u6536\u597D\u9053\u5177\uFF0C\u9009\u51C6\u4E0B\u4E00\u6B65",Mm(F));else if(i==="cardTarget"){let a=n.cards[e],o=Zt[a];if(!o){Ot(!0);return}let l;if(o.target==="steps"||o.target==="ahead")l=`${qn(a)}<p>${o.description}</p>${a==="block"?'<p class="panel-note">\u8DEF\u969C\u6CBF\u524D\u65B9\u4E3B\u8DEF\u653E\u7F6E\uFF0C\u5C94\u8DEF\u9ED8\u8BA4\u8D70\u7B2C\u4E00\u6761\uFF1B\u4E0D\u80FD\u653E\u5728\u89D2\u8272\u811A\u4E0B\u6216\u5DF2\u6709\u8DEF\u969C\u4E0A\u3002</p>':""}${Array.from({length:6},(c,h)=>{let u=h+1,f=n.pos;for(let g=0;g<u;g++)f=on[f].next[0];let d=a==="block"?[{id:f,rent:t.ownership[f]&&t.ownership[f].player!==n.id?F.rent(f):0,owner:t.ownership[f]?.player??null,price:!t.ownership[f]&&on[f].kind==="property"?on[f].price:0}]:F.preview(u);return`<div class="row"><div class="row-head"><strong>${u} ${a==="dice"?"\u6B65":"\u683C"}</strong>${je("\u9009\u62E9","useCard",`data-index="${e}" data-target="${u}"`,a==="block"&&!!F.blockTargets()[h].reason)}</div><p>${d.map(g=>wd(g)).join(" / ")}</p>${a==="block"&&F.blockTargets()[h].reason?`<small>${F.blockTargets()[h].reason}</small>`:""}</div>`}).join("")}`;else{let c=F.cardTargets(a);l=`${qn(a)}<p>${o.description}</p>${c.map(h=>h.obstacle?`<div class="row">${qn("block")}<strong>${on[h.id].name} \xB7 \u8DEF\u969C</strong><p>\u6E05\u7406\u9053\u8DEF\uFF0C\u623F\u5C4B\u4FDD\u6301\u4E0D\u53D8\u3002</p>${je("\u6E05\u7406\u8DEF\u969C","useCard",`data-index="${e}" data-target="${h.id}"`)}</div>`:`<div class="row estate-row">${vh(on[h.id],h.level,F.char(t.players[h.player]).estateColor)}<strong>${on[h.id].name}</strong><p>${F.char(t.players[h.player]).name} \xB7 ${h.level} \u7EA7 \xB7 \u79DF\u91D1 ${F.rent(h.id)}${a==="steal"?" \xB7 \u6536\u8D2D\u4EF7 "+F.takeoverPrice(h.id):a==="demolish"?" \u2192 "+F.rent(h.id,h.level-1):" \u2192 "+F.rent(h.id,h.level+1)}</p>${je(a==="steal"?"\u786E\u8BA4\u6536\u8D2D":a==="build"?"\u514D\u8D39\u52A0\u76D6\u4E00\u5C42":"\u62C6\u53BB\u4E00\u5C42","useCard",`data-index="${e}" data-target="${h.id}"`,a==="steal"&&n.money<F.takeoverPrice(h.id))}</div>`).join("")||`<div class="empty">${a==="steal"?"\u8BF7\u505C\u5728\u5BF9\u624B\u5730\u4EA7\u540E\u4F7F\u7528\u3002":"8 \u683C\u8303\u56F4\u5185\u6682\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u76EE\u6807\u3002"}</div>`}`}Mt(o.name,"\u9009\u62E9\u76EE\u6807",l)}else if(i==="bank")Mt("\u5976\u5E01\u94F6\u884C","\u8BA9\u5C0F\u91D1\u5E93\uFF0C\u4E5F\u6162\u6162\u957F\u5927",`${As("bank",t.round%7===3?"\u5468\u4E09\u94F6\u884C\u4F11\u606F\uFF0C\u4ECA\u5929\u53EA\u80FD\u67E5\u770B\u8D26\u6237\u3002":F.canBank()?"\u94F6\u884C\u5DF2\u5230\u8BBF\uFF0C\u672C\u56DE\u5408\u53EF\u4EE5\u529E\u7406\u4E1A\u52A1\u3002":"\u7ECF\u8FC7\u94F6\u884C\u65F6\u53EF\u529E\u7406\u4E1A\u52A1\uFF1B\u5F53\u524D\u4EC5\u67E5\u770B\u8D26\u6237\u3002\u652F\u4ED8\u4E0D\u8DB3\u65F6\u53EF\u81EA\u52A8\u7528\u5B58\u6B3E\u8865\u8DB3\u73B0\u91D1\u3002","naichong")}${Ed([[ci(n.money),"\u73B0\u91D1"],[ci(n.deposit),"\u5B58\u6B3E"],[ci(n.loan),"\u8D37\u6B3E"]])}<div class="panel-note">\u6BCF\u8F6E\u5B58\u6B3E\u5229\u606F 0.5%\uFF08\u5411\u4E0B\u53D6\u6574\uFF09\uFF0C\u8D37\u6B3E\u5229\u606F 4%\uFF0C\u5206\u522B\u8BA1\u5165\u672C\u91D1\u3002\u65B0\u589E\u501F\u6B3E\u540E\u8D37\u6B3E\u4F59\u989D\u4E0D\u5F97\u8D85\u8FC7 1,800 \u5976\u5E01\uFF1B\u5229\u606F\u53EF\u80FD\u4F7F\u4F59\u989D\u8D85\u9650\u3002\u7ECF\u8FC7\u94F6\u884C\u7684\u672C\u56DE\u5408\u53EF\u529E\u7406\u4E1A\u52A1\uFF1B\u6BCF\u7B2C\u4E03\u8F6E\u5468\u671F\u7684\u7B2C\u4E09\u8F6E\u4F11\u606F\u3002</div><label for="bankAmount" style="font-size:12px">\u64CD\u4F5C\u91D1\u989D</label><div class="input-row"><input id="bankAmount" type="number" min="1" step="1" value="300" inputmode="numeric" aria-label="\u94F6\u884C\u64CD\u4F5C\u91D1\u989D"></div><div class="button-grid">${je("\u5B58\u5165\u5976\u5E01","bank",'data-kind="deposit"',!r||!F.canBank())}${je("\u53D6\u51FA\u5976\u5E01","bank",'data-kind="withdraw"',!s||!F.canBank())}${je("\u7533\u8BF7\u501F\u6B3E","bank",'data-kind="borrow"',!s||!F.canBank())}${je("\u507F\u8FD8\u8D37\u6B3E","bank",'data-kind="repay"',!r||!F.canBank())}</div><p>\u672C\u6E38\u620F\u4E2D\u7684\u5976\u5E01\u4EC5\u7528\u4E8E\u5355\u673A\u7ECF\u8425\u3002</p>`);else if(i==="stocks")Mt("\u5976\u5BB6\u8BC1\u5238\u6240","\u6301\u4ED3\u6210\u672C \xB7 \u6D6E\u52A8\u76C8\u4E8F \xB7 \u6210\u4EA4\u8BB0\u5F55",Pm(F,{window:d0,held:Td})),queueMicrotask(()=>F.s.market.forEach((a,o)=>Zc(F,o)));else if(i==="shop")Mt("\u5976\u5BB6\u8865\u7ED9\u5546\u5E97","\u7ED9\u4E0B\u4E00\u6B21\u51FA\u53D1\uFF0C\u591A\u4E00\u70B9\u51C6\u5907",`${As("vehicle",F.canShop()?"\u6B22\u8FCE\u5230\u5E97\uFF1A\u7528\u70B9\u5238\u9009\u5361\uFF0C\u4E5F\u80FD\u8D2D\u5165\u4EA4\u901A\u5DE5\u5177\u3002":"\u8BF7\u505C\u5728\u5730\u56FE\u4E0A\u7684\u8865\u7ED9\u5546\u5E97\u8D2D\u4E70\uFF1B\u73B0\u5728\u53EF\u4EE5\u5148\u6D4F\u89C8\u5546\u54C1\u3002")}<div class="panel-note">\u5976\u5E01 ${ci(n.money)} \xB7 \u70B9\u5238 ${n.tickets}/150 \xB7 \u672C\u56DE\u5408\u8D2D\u5361 ${n.shopUsed}/2\u3002\u62FE\u53D6\u5730\u56FE\u91D1\u5E01 +10 \u70B9\u5238\uFF1B\u7ECF\u8FC7\u8D77\u70B9 +25\uFF1B\u8865\u7ED9\u7AD9 +30 \u53CA\u968F\u673A\u5361\u3002\u70B9\u5238\u4E0D\u8BA1\u5165\u51C0\u8D44\u4EA7\u3002</div><h3>\u51FA\u884C\u5DE5\u5177</h3>${li.slice(1).map(a=>`<div class="row shop-vehicle">${qn("vehicle")}<div class="row-head"><strong>${a.name}</strong><span class="badge">${a.price} \u5976\u5E01</span></div><p>\u6BCF\u56DE\u5408\u53EF\u9009 1\u2014${a.dice} \u9897\u9AB0\u5B50\u3002\u8D2D\u5165\u66F4\u9AD8\u7B49\u7EA7\u5DE5\u5177\u540E\u66FF\u6362\u539F\u5DE5\u5177\u3002</p>${je(n.vehicle>=a.id?"\u5DF2\u62E5\u6709\u6216\u5DF2\u5347\u7EA7":"\u8D2D\u4E70\u5DE5\u5177","vehicle",`data-id="${a.id}"`,!r||!F.canShop()||n.vehicle>=a.id||n.money<a.price)}</div>`).join("")}<h3>\u5976\u4F34\u9053\u5177\u5361</h3>${Object.entries(Zt).map(([a,o])=>`<div class="row collectible-card">${qn(a)}<div class="row-head"><strong><span class="card-icon">${o.icon}</span>${o.name}</strong><span class="badge">${F.cardPrice(a)} \u70B9\u5238</span></div><p>${o.description}</p>${je("\u653E\u8FDB\u5361\u5305","shop",`data-key="${a}"`,!r||!F.canShop()||n.tickets<F.cardPrice(a)||n.cards.length>=15||n.shopUsed>=2)}</div>`).join("")}`);else if(i==="tile"){let a=on[e],o=t.ownership[e];Mt(a.name,`${oi[a.group].name} \xB7 \u5730\u56FE\u7B2C ${e+1} \u683C`,a.kind==="property"?`${vh(a,o?.level||0,o?F.char(t.players[o.player]).estateColor:"#77aa8b")}${Ed([[a.price,"\u7A7A\u5730\u4EF7\u683C"],[o?o.level+" \u7EA7":"\u5F85\u552E","\u5EFA\u7B51\u7B49\u7EA7"]])}${Yc(F,e)}<p>${o?`\u8FD9\u5757\u5730\u5C5E\u4E8E${F.char(t.players[o.player]).name}\u3002`:"\u843D\u5728\u8FD9\u91CC\u65F6\uFF0C\u53EF\u4EE5\u51B3\u5B9A\u662F\u5426\u8D2D\u4E70\u3002"}${o?.level?Ht[lt(o)].text:"\u7A7A\u5730\u53EF\u9009\u62E9\u4E03\u79CD\u5EFA\u7B51\u3002\u53EA\u6709\u4F4F\u5B85\u53C2\u4E0E\u8857\u533A\u8054\u8425\uFF1B\u5176\u4ED6\u8BBE\u65BD\u6309\u81EA\u8EAB\u673A\u5236\u7ECF\u8425\u3002"}</p>${o?.player===n.id&&s?`<div class="row-actions">${je("\u5EFA\u8BBE\u4E0E\u7ECF\u8425","chooseBuilding",`data-id="${e}"`,!r||!(F.canUpgrade(e)||F.canBuild(e)||lt(o)==="research"&&n.pos===e))}${je("\u53D8\u5356\u5730\u4EA7","sell",`data-id="${e}"`)}</div>`:""}`:`<p>${{start:"\u6BCF\u6B21\u6B63\u5411\u7ECF\u8FC7\u8D77\u70B9\u9886\u53D6 400 \u5976\u5E01\uFF1B\u5012\u9000\u4E0D\u9886\u5956\u3002",bank:"\u7ECF\u8FC7\u94F6\u884C\u7684\u672C\u56DE\u5408\u53EF\u529E\u7406\u5B58\u6B3E\u3001\u53D6\u6B3E\u548C\u8D37\u6B3E\u3002",stock:"\u6253\u5F00\u80A1\u7968\u9762\u677F\uFF0C\u67E5\u770B\u5976\u5BB6\u4F01\u4E1A\u6700\u65B0\u884C\u60C5\u3002",shop:"\u843D\u5728\u6B64\u5904\u83B7\u5F97\u968F\u673A\u5361\uFF0C\u5230\u5E97\u540E\u624D\u80FD\u8D2D\u4E70\u9053\u5177\u548C\u4EA4\u901A\u5DE5\u5177\u3002",event:"\u8868\u60C5\u5305\u3001\u5927\u7B11\u3001\u5976\u4F34\u548C\u610F\u5916\uFF0C\u968F\u673A\u4E8B\u4EF6\u7B49\u4F60\u53D1\u73B0\u3002",hospital:"\u652F\u4ED8 100 \u5976\u5E01\u7597\u517B\u8D39\uFF0C\u5E76\u4F11\u517B\u4E00\u56DE\u5408\u3002",rest:"\u83B7\u5F97 120 \u5976\u5E01\u8865\u8D34\uFF0C\u7EE7\u7EED\u5FEB\u4E50\u65C5\u884C\u3002",tax:"\u652F\u4ED8 180 \u5976\u5E01\u6E05\u6D01\u8D39\u3002",spirit:"\u968F\u673A\u8FCE\u6765\u8D22\u8FD0\u3001\u9709\u8FD0\u6216\u5B88\u62A4\u6548\u679C\uFF0C\u6301\u7EED\u4E09\u4E2A\u540E\u7EED\u56DE\u5408\u3002"}[a.kind]}</p>`)}else if(i==="buy"){let a=on[n.pos];Mt("\u53D1\u73B0\u4E00\u5757\u597D\u5730\u76D8",`${a.name} \xB7 ${oi[a.group].name}`,`${vh(a,0,F.char(n).estateColor)}<p>\u8D2D\u5730\u540E\u53EF\u9009\u62E9\u4F4F\u5B85\u3001\u8FDE\u9501\u5E97\u3001\u65C5\u9986\u3001\u5546\u573A\u3001\u52A0\u6CB9\u7AD9\u3001\u7814\u7A76\u6240\u6216\u516C\u56ED\u3002\u4E4B\u540E\u9700\u518D\u6B21\u505C\u9760\u624D\u80FD\u52A0\u76D6\uFF1B\u5DE5\u7A0B\u961F\u53EF\u8FDC\u7A0B\u52A0\u76D6\u3002</p>${Ed([[a.price,"\u8D2D\u4E70\u4EF7\u683C"],[F.rent(a.id),"\u521D\u59CB\u79DF\u91D1"],[ci(n.money),"\u5F53\u524D\u73B0\u91D1"]])}<div class="button-grid">${je("\u5148\u8DEF\u8FC7\u770B\u770B","pass")}${je("\u4E70\u4E0B\u8FD9\u5757\u5730","buy","",n.money<a.price,"primary")}</div>`,!0)}else if(i==="plan"){let a=n.forced||n.slowTurns?1:n.diceCount,o=n.forced?new Map([[n.forced,1]]):n.slowTurns?new Map([[1,1]]):Qc(a);Mt("\u8FD9\u6B21\u4F1A\u8D70\u5230\u54EA\u91CC\uFF1F","\u5148\u770B\u98CE\u9669\uFF0C\u518D\u51B3\u5B9A\u7528\u5361\u6216\u9AB0\u5B50\u6570\u91CF",`<div class="panel-note">${n.forced?"\u5DF2\u6307\u5B9A "+n.forced+" \u6B65":n.slowTurns?"\u6162\u884C\u751F\u6548\uFF1A\u672C\u6B21 1 \u6B65":a+" \u9897\u9AB0\u5B50\u7684\u771F\u5B9E\u843D\u70B9\u6982\u7387"}\u3002\u6709\u5C94\u8DEF\u65F6\u4F1A\u5217\u51FA\u4E24\u6761\u8DEF\u7EBF\uFF1B\u8D39\u7528\u6309\u5F53\u524D\u72B6\u6001\u4F30\u7B97\uFF0C\u4E8B\u4EF6\u5185\u5BB9\u4ECD\u968F\u673A\u3002\u70B9\u5238 ${n.tickets}\uFF0C\u672C\u56DE\u5408\u5DF2\u7528\u5361 ${n.cardsUsed}\u3002</div>${[...o].map(([l,c])=>`<div class="row"><div class="row-head"><strong>${l} \u6B65</strong><span class="badge">${(c*100).toFixed(1)}%</span></div>${F.preview(l).map(h=>`<p>${wd(h)}</p>`).join("")}</div>`).join("")}<div class="row-actions">${je("\u53BB\u5361\u5305\u51B3\u5B9A","panel",'data-panel="cards"')}${je("\u56DE\u5730\u56FE","cancel")}</div>`)}else if(i==="buildHere")Mt("\u5730\u4EA7\u5EFA\u8BBE\u4E0E\u7ECF\u8425",on[n.pos].name,Am(F,n.pos));else if(i==="estate"){let a=on[n.pos],o=t.ownership[n.pos];Mt("\u6765\u5230\u5BF9\u624B\u7684\u5730\u4EA7",`${F.char(t.players[o.player]).name} \xB7 ${a.name}`,vm(F),!0)}else if(i==="branch")Mt("\u4E0B\u4E00\u7AD9\uFF0C\u53BB\u54EA\u8FB9\uFF1F","\u5C94\u8DEF\u9009\u62E9",xm(F,wd),!0);else if(i==="event"){let a=t.notice;Mt(a?.title||"\u5C9B\u4E0A\u65B0\u9C9C\u4E8B",`${F.char().name}\u7684\u65C5\u884C\u624B\u8D26`,`<div class="event-emblem">${a?.mood==="happy"?"\u2726":a?.mood==="sad"?"\u2601":"\u2667"}</div><p>${Ds(a?.text||"\u7EE7\u7EED\u65C5\u7A0B\u5427\u3002")}</p>${je("\u77E5\u9053\u5566\uFF0C\u7EE7\u7EED\u65C5\u884C","ack","",!1,"primary")}`,!0),ra(a?.mood)}else if(i==="debt"){let a=t.debt;Mt("\u5C0F\u91D1\u5E93\u9700\u8981\u5468\u8F6C","\u5148\u7B79\u6B3E\uFF0C\u518D\u7EE7\u7EED\u65C5\u884C",`<p>${Ds(a.label)}\u9700\u8981\u652F\u4ED8 <b>${ci(a.amount)}</b> \u5976\u5E01\uFF0C\u5F53\u524D\u73B0\u91D1 <b>${ci(n.money)}</b>\u3002</p><div class="button-grid">${je("\u53BB\u94F6\u884C\u7B79\u6B3E","panel",'data-panel="bank"')}${je("\u5356\u51FA\u80A1\u7968","panel",'data-panel="stocks"')}${je("\u53D8\u5356\u5730\u4EA7","panel",'data-panel="deeds"')}${je("\u652F\u4ED8\u5E76\u7EE7\u7EED","settle","",n.money<a.amount,"primary")}</div><h3>\u7533\u8BF7\u7834\u4EA7</h3><p>\u4F1A\u6E05\u7B97\u5B58\u6B3E\u3001\u80A1\u7968\u3001\u5730\u4EA7\u4E0E\u4EA4\u901A\u5DE5\u5177\uFF0C\u5C3D\u53EF\u80FD\u507F\u8FD8\u672C\u6B21\u6B20\u6B3E\uFF0C\u5E76\u9000\u51FA\u8FD9\u5C40\u65C5\u884C\u3002</p>${je("\u67E5\u770B\u7834\u4EA7\u786E\u8BA4","confirmBankrupt","","","secondary danger")}`,!0)}else if(i==="finished")Mt("\u5976\u5BB6\u53D1\u8D22\u7EAA\u5FF5\u518C","\u672C\u6B21\u65C5\u884C\u7ED3\u7B97",_m(F),!0);else if(i==="settings")Mt("\u65C5\u884C\u8BBE\u7F6E","\u6309\u81EA\u5DF1\u7684\u8282\u594F\uFF0C\u6162\u6162\u73A9",`<div class="setting-row"><label for="speedSelect">\u52A8\u753B\u901F\u5EA6</label><select id="speedSelect">${[1,2].map(a=>`<option value="${a}" ${Math.min(2,t.options.speed)===a?"selected":""}>${a===1?"\u6B63\u5E38 \xB7 \u5B8C\u6574\u5C55\u793A":"\u8F7B\u5FEB \xB7 \u4FDD\u7559\u6D88\u606F\u9605\u8BFB\u65F6\u95F4"}</option>`).join("")}</select></div><div class="setting-row"><label for="qualitySelect">\u753B\u9762\u8D28\u91CF</label><select id="qualitySelect"><option value="auto" ${t.options.quality==="auto"?"selected":""}>\u7535\u5F71\u753B\u8D28 \xB7 \u7CBE\u7EC6\u5149\u5F71</option><option value="low" ${t.options.quality==="low"?"selected":""}>\u7701\u7535\u753B\u8D28</option></select></div><div class="setting-row"><label for="lightingSelect">\u65E5\u7167\u6C1B\u56F4</label><select id="lightingSelect">${Object.entries(Ai).map(([a,o])=>`<option value="${a}" ${ji(t.options.lighting)===a?"selected":""}>${o.label}</option>`).join("")}</select></div><div class="setting-row"><span>\u58F0\u97F3</span>${je(t.options.sound?"\u5DF2\u5F00\u542F \xB7 \u70B9\u51FB\u5173\u95ED":"\u5DF2\u5173\u95ED \xB7 \u70B9\u51FB\u5F00\u542F","sound")}</div>${uM()}<h3>\u65C5\u884C\u5B58\u6863</h3><p>${Ad?"\u8FDB\u5EA6\u81EA\u52A8\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u3002":"\u81EA\u52A8\u5B58\u6863\u5931\u8D25\uFF0C\u8BF7\u5BFC\u51FA\u5907\u4EFD\u3002"}\u5BFC\u51FA\u540E\uFF0C\u53EF\u4EE5\u5728\u53E6\u4E00\u53F0\u8BBE\u5907\u5BFC\u5165\u7EE7\u7EED\u3002</p><div class="row-actions">${je("\u5BFC\u51FA\u5B58\u6863","export","",!Ze)}${je("\u7D20\u6750\u4E0E\u5236\u4F5C\u8BF4\u660E","panel",'data-panel="sources"')}</div><label style="font-size:11px">\u5BFC\u5165\u5B58\u6863<input class="file-input" id="importSave" type="file" accept="application/json,.json"></label><h3>\u91CD\u65B0\u51FA\u53D1</h3><p>\u91CD\u65B0\u5F00\u59CB\u4F1A\u66FF\u6362\u672C\u7248\u5B58\u6863\uFF1B\u65E7\u7248\u6E38\u620F\u7684\u5B58\u6863\u4E0D\u4F1A\u53D7\u5F71\u54CD\u3002</p>${je("\u9009\u62E9\u5976\u4F34\u91CD\u65B0\u5F00\u59CB","confirmRestart","","","secondary danger")}<p>\u8BBE\u7F6E\u6253\u5F00\u671F\u95F4\uFF0C\u5BF9\u5C40\u6682\u505C\u3002</p>`);else if(i==="help")Mt("\u5976\u5BB6\u53D1\u8D22\u6307\u5357","\u5148\u63B7\u4E00\u9897\u9AB0\u5B50\uFF0C\u518D\u6162\u6162\u5B66\u4F1A\u7ECF\u8425",'<ol class="rules"><li><b>\u51FA\u53D1\uFF1A</b>\u9009\u62E9\u5976\u4F34\u540E\u968F\u673A\u51B3\u5B9A\u5148\u624B\uFF0C\u6240\u6709\u4EBA\u5B8C\u6574\u884C\u52A8\u4E00\u6B21\u7B97\u4E00\u8F6E\u3002\u63B7\u9AB0\u79FB\u52A8\u3002\u7ECF\u8FC7\u8D77\u70B9\u9886 400 \u5976\u5E01\u3002\u6BCF\u4F4D\u5B58\u6D3B\u5976\u4F34\u884C\u52A8\u4E00\u6B21\u7B97\u4E00\u8F6E\u3002</li><li><b>\u7F6E\u4E1A\uFF1A</b>\u8E29\u5230\u7A7A\u5730\u53EF\u4E70\u5165\uFF0C\u5E76\u9009\u62E9\u4E03\u79CD\u5EFA\u7B51\u3002\u4F4F\u5B85\u3001\u65C5\u9986\u3001\u5546\u573A\u3001\u7814\u7A76\u6240\u6700\u9AD8\u4E94\u7EA7\uFF1B\u8FDE\u9501\u5E97\u3001\u52A0\u6CB9\u7AD9\u3001\u516C\u56ED\u53EA\u6709\u4E00\u7EA7\u3002\u666E\u901A\u5EFA\u8BBE\u987B\u505C\u5230\u81EA\u5BB6\u5730\u5757\uFF0C\u6BCF\u6B21\u52A0\u4E00\u5C42\uFF1B\u5DE5\u7A0B\u961F\u53EF\u8FDC\u7A0B\u52A0\u76D6\u3002\u53EA\u6709\u4F4F\u5B85\u53C2\u4E0E\u8857\u533A\u8054\u8425\u3002\u65C5\u9986\u5F3A\u5236\u5165\u4F4F\u3001\u5546\u573A\u62BD\u7B7E\u6D88\u8D39\u3001\u52A0\u6CB9\u7AD9\u6309\u884C\u7A0B\u548C\u4EA4\u901A\u5DE5\u5177\u6536\u8D39\u3001\u7814\u7A76\u6240\u4E09\u6B21\u51FA\u53D1\u4EA7\u5361\u3001\u516C\u56ED\u514D\u8D39\u9001\u70B9\u5238\u3002</li><li><b>\u7528\u5361\uFF1A</b>\u63B7\u9AB0\u524D\u6253\u5F00\u5361\u5305\u3002\u624B\u724C\u53EF\u8FDE\u7528\uFF0C\u79FB\u52A8\u5361\u987B\u5728\u63B7\u9AB0\u524D\u4F7F\u7528\uFF1B\u70B9\u5238\u6765\u81EA\u5730\u56FE\u62FE\u53D6\u548C\u5230\u7AD9\u5956\u52B1\u3002\u7528\u70B9\u5238\u4E70\u5361\uFF0C\u53EF\u63A7\u9AB0\u3001\u8DEF\u969C\u3001\u62C6\u5C42\u3001\u514D\u8D39\u52A0\u76D6\u6216\u6162\u884C\u3002\u62A2\u5730\u5361\u4EC5\u5BF9\u811A\u4E0B\u7684\u5BF9\u624B\u5730\u4EA7\u751F\u6548\uFF0C\u4ED8 125% \u6210\u672C\uFF1B\u62C6\u9664\u548C\u5DE5\u7A0B\u961F\u9650\u9644\u8FD1 8 \u683C\u3002</li><li><b>\u51FA\u884C\uFF1A</b>\u5546\u5E97\u8D2D\u4E70\u81EA\u884C\u8F66\u6216\u5C0F\u8F66\u540E\uFF0C\u53EF\u5728\u63B7\u9AB0\u6309\u94AE\u65C1\u9009\u62E9\u9AB0\u5B50\u6570\u91CF\u3002\u5C94\u8DEF\u81EA\u884C\u9009\u65B9\u5411\u3002</li><li><b>\u7ECF\u8425\uFF1A</b>\u7ECF\u8FC7\u94F6\u884C\u7684\u672C\u56DE\u5408\u53EF\u529E\u7406\u5B58\u53D6\u6B3E\u548C\u8D37\u6B3E\uFF1B\u94F6\u884C\u5468\u4E09\u4F11\u606F\uFF1B\u80A1\u7968\u5728\u81EA\u5DF1\u884C\u52A8\u524D\u540E\u53EF\u4EA4\u6613\uFF0C\u5468\u65E5\u4F11\u5E02\u3002\u5546\u5E97\u9700\u5230\u5E97\u8D2D\u4E70\u3002\u5B58\u6B3E\u6BCF\u8F6E\u8D5A 0.5%\uFF0C\u8D37\u6B3E\u6BCF\u8F6E\u8BA1\u606F 4%\u3002\u80A1\u7968\u4E5F\u4F1A\u56E0\u968F\u673A\u4E8B\u4EF6\u6DA8\u8DCC\u3002</li><li><b>\u795E\u7075\uFF1A</b>\u8D22\u8FD0\u589E\u52A0\u975E\u4EA4\u6613\u6536\u5165\uFF0C\u9709\u8FD0\u589E\u52A0\u652F\u51FA\uFF0C\u5B88\u62A4\u62B5\u6321\u4E00\u6B21\u8D1F\u9762\u4E8B\u4EF6\u3002\u6548\u679C\u4E92\u76F8\u66FF\u6362\uFF0C\u6301\u7EED 3 \u4E2A\u540E\u7EED\u56DE\u5408\u3002</li><li><b>\u5468\u8F6C\uFF1A</b>\u4ED8\u6B3E\u4E0D\u8DB3\u53EF\u53D6\u6B3E\u3001\u501F\u6B3E\u3001\u5356\u80A1\u7968\u6216\u53D8\u5356\u5730\u4EA7\uFF1B\u4E5F\u53EF\u7533\u8BF7\u7834\u4EA7\u9000\u51FA\u3002</li><li><b>\u80DC\u5229\uFF1A</b>\u575A\u6301\u5230\u6700\u540E\uFF0C\u6216\u5728\u8F6E\u6570\u7ED3\u675F\u65F6\u62E5\u6709\u6700\u591A\u51C0\u8D44\u4EA7\u3002\u624B\u673A\u6A2A\u5C4F\u4F53\u9A8C\u66F4\u5B8C\u6574\u3002</li></ol><p>\u5404\u4F4D\u89D2\u8272\u91C7\u7528\u540C\u4E00\u89C4\u5219\uFF0C\u7535\u8111\u4E5F\u9075\u5B88\u70B9\u5238\u3001\u7528\u5361\u548C\u5EFA\u8BBE\u9650\u5236\uFF0C\u5E76\u6839\u636E\u516C\u5F00\u5730\u5757\u8BC4\u4F30\u8DEF\u7EBF\u3002\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 3D \u65F6\u53EF\u4F7F\u7528\u7B80\u6D01\u5730\u56FE\u7EE7\u7EED\u73A9\u3002</p>');else if(i==="news")Mt("\u5C9B\u4E0A\u6D88\u606F\u8BB0\u5F55","\u91CD\u8981\u6D88\u606F\u4F1A\u5728\u5730\u56FE\u4E2D\u592E\u9010\u6761\u51FA\u73B0",t.logs.slice(0,40).map(a=>`<div class="row"><small>\u7B2C ${a.round} \u8F6E</small><p>${Ds(a.text)}</p></div>`).join(""));else if(i==="pause")p0(!0),rs(),Mt("\u4F11\u606F\u4E00\u4E0B\uFF0C\u5976\u4F34\u7B49\u4F60","\u5BF9\u5C40\u3001\u955C\u5934\u4E0E\u58F0\u97F3\u5DF2\u6682\u505C",`<p>\u5F53\u524D\u8FDB\u5EA6\u5DF2\u4FDD\u5B58\u5728\u672C\u673A\u3002\u51C6\u5907\u597D\u4E86\uFF0C\u518D\u7EE7\u7EED\u8FD9\u4E00\u8D9F\u53D1\u8D22\u4E4B\u65C5\u3002</p><div class="button-grid">${je("\u7EE7\u7EED\u6E38\u620F","resumeGame","",!1,"primary")}${je("\u5BFC\u51FA\u5B58\u6863","export","",!Ze)}</div><p class="pause-tip">\u5173\u95ED\u9762\u677F\u6216\u6309 Esc \u4E5F\u53EF\u4EE5\u7EE7\u7EED\u3002</p>`);else if(i==="share")Mt("\u53EB\u4E0A\u670B\u53CB\uFF0C\u6765\u5C9B\u4E0A\u73A9","\u624B\u673A\u70B9\u5F00\u94FE\u63A5\u5373\u53EF\u5F00\u59CB",`<p>\u628A\u8FD9\u4E2A\u8BD5\u73A9\u94FE\u63A5\u53D1\u7ED9\u670B\u53CB\uFF0C\u65E0\u9700\u5B89\u88C5\u6216\u767B\u5F55\u6E38\u620F\u8D26\u53F7\u3002\u5EFA\u8BAE\u6A2A\u5C4F\u4F53\u9A8C\u3002</p><label for="shareUrl">\u8BD5\u73A9\u94FE\u63A5</label><input id="shareUrl" class="share-url" type="text" readonly value="${Ds(Sm())}"><div class="row-actions">${je("\u590D\u5236\u94FE\u63A5","copyLink","",!1,"primary")}</div><p>\u5F53\u524D\u662F\u5355\u673A\u8BD5\u73A9\uFF1A\u6BCF\u4F4D\u670B\u53CB\u5728\u81EA\u5DF1\u7684\u624B\u673A\u4E0A\uFF0C\u4E0E\u7535\u8111\u5976\u4F34\u72EC\u7ACB\u5BF9\u5C40\uFF1B\u8FDB\u5EA6\u4FDD\u5B58\u5728\u5404\u81EA\u6D4F\u89C8\u5668\u3002</p>`);else if(i==="sources")Mt("\u5976\u5BB6\u521B\u4F5C\u624B\u8D26","\u7D20\u6750\u6765\u6E90\u4E0E\u540E\u7EED\u8BA1\u5212",'<div class="panel-note">\u975E\u5B98\u65B9\u7C89\u4E1D\u6E38\u620F\u3002\u89D2\u8272\u6A21\u578B\u3001\u5730\u56FE\u3001\u5EFA\u7B51\u548C\u754C\u9762\u7531\u672C\u9879\u76EE\u5236\u4F5C\u3002\u914D\u4E50\u4E3A\u91CD\u65B0\u7F16\u6392\u7684\u5668\u4E50\u4E0E\u539F\u521B\u66F2\uFF1B\u7B11\u58F0\u4F7F\u7528\u793E\u533A\u5C0F\u6E38\u620F\u7684\u77ED\u7247\u6BB5\uFF0C\u5177\u4F53\u6765\u6E90\u89C1\u58F0\u97F3\u8BBE\u7F6E\u3002</div><div class="credit-list"><p>\u6587\u5316\u4E0E\u8868\u73B0\u53C2\u8003\uFF1A</p><ul class="rules"><li><a href="https://milkyfrog.com/games" target="_blank" rel="noopener">\u5976\u86D9\u5C0F\u6E38\u620F\u5408\u96C6</a></li><li><a href="https://naiwaxiaowu.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u7684\u5C0F\u7A9D</a>\uFF1A\u4E92\u52A8\u4E0E\u966A\u4F34\u8868\u73B0</li><li><a href="https://milkfrog-bath.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u7231\u6D17\u6FA1</a>\uFF1A\u60C5\u7EEA\u8868\u60C5</li><li><a href="https://nailong-dance.pages.dev/" target="_blank" rel="noopener">\u5976\u5A03\u8857\u821E</a>\uFF1A\u52A8\u6001\u8868\u73B0</li><li><a href="https://naiwanaichadian.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u5976\u8336\u94FA</a>\uFF1A\u7ECF\u8425\u573A\u666F</li><li><a href="https://www.douyin.com/video/7673579319512764654" target="_blank" rel="noopener">\u6296\u97F3\u5976\u5E01\u4E0E\u91CE\u751F\u72D7\u5976\u4E8C\u521B</a></li></ul></div><p>\u672C\u7248\u4E3A\u539F\u521B\u98CE\u683C\u5316\u8F7B\u91CF\u6A21\u578B\u3002\u5976\u86D9\u3001\u5976\u9F20\u3001\u5976\u72D7\u53C2\u8003\u7528\u6237\u4E09\u89C6\u56FE\u53CA\u516C\u5F00\u89C6\u9891\uFF0C\u5976\u86CB\u548C\u5976\u8336\u53C2\u8003\u519C\u5E84\u89C6\u9891\uFF0C\u5976\u866B\u53C2\u8003\u6B64\u524D\u89C6\u9891\u56FE\u50CF\u3002\u6A21\u578B\u91C7\u7528\u8FDE\u7EED\u66F2\u9762\u3001\u7ED8\u5236\u8179\u8272\u4E0E\u5173\u8282\u52A8\u753B\uFF0C\u4E3A\u539F\u521B\u91CD\u5EFA\uFF0C\u672A\u63D0\u53D6\u89C6\u9891\u6E90\u6A21\u578B\u3002</p><p>\u672C\u7248\u5DF2\u652F\u6301\u516D\u540D\u89D2\u8272\u30012\u20146 \u4EBA\u3001\u6307\u5B9A\u7535\u8111\u4E0E\u968F\u673A\u9635\u5BB9\u3002\u540E\u7EED\u65B9\u5411\uFF1A\u8D26\u53F7\u4E0E\u4E91\u5B58\u6863\u3002\u672C\u7248\u4EC5\u5305\u542B\u672C\u673A\u5355\u673A\u3002</p><p>3D \u5F15\u64CE Three.js\uFF0CMIT \u8BB8\u53EF\u968F\u90E8\u7F72\u5305\u9644\u5E26\u3002</p>');else if(i==="confirmRestart")Mt("\u91CD\u65B0\u51FA\u53D1\u5417\uFF1F","\u5F53\u524D\u5B58\u6863\u5C06\u88AB\u66FF\u6362",`<p>\u5148\u5BFC\u51FA\u5B58\u6863\u53EF\u4EE5\u4FDD\u7559\u8FD9\u6B21\u65C5\u884C\u3002\u7136\u540E\u91CD\u65B0\u9009\u62E9\u5976\u4F34\u4E0E\u65C5\u884C\u8F6E\u6570\u3002</p><div class="row-actions">${je("\u5BFC\u51FA\u5F53\u524D\u5B58\u6863","export","",!Ze)}${je("\u4FDD\u7559\u5F53\u524D\u65C5\u884C","cancel")}${je("\u91CD\u65B0\u9009\u62E9\u5976\u4F34","newGame","",!1,"primary")}</div>`,!0);else if(i==="confirmDemolish"){let a=t.ownership[e],o=on[e];if(!a||a.player!==n.id||!a.level){Ot(!0);return}Mt("\u62C6\u9664\u8FD9\u680B\u623F\u5C4B\uFF1F",o.name,`<p>\u62C6\u9664 ${a.level} \u7EA7\u623F\u5C4B\uFF0C\u571F\u5730\u4ECD\u5F52\u4F60\u6240\u6709\u3002\u56DE\u6536\u6750\u6599\u83B7\u5F97 ${Math.floor((F.cost(o,a.level,lt(a))-o.price)*.25)} \u5976\u5E01\uFF1B\u79DF\u91D1\u6062\u590D\u4E3A\u7A7A\u5730\u6C34\u5E73\u3002</p><div class="row-actions">${je("\u4FDD\u7559\u623F\u5C4B","cancel")}${je("\u786E\u8BA4\u62C6\u9664","demolish",`data-id="${e}"`,!1,"secondary danger")}</div>`,!0)}else i==="confirmBankrupt"&&Mt("\u786E\u8BA4\u7533\u8BF7\u7834\u4EA7\uFF1F","\u8FD9\u4F1A\u7ED3\u675F\u4F60\u672C\u5C40\u7684\u65C5\u884C",`<p>\u7CFB\u7EDF\u5C06\u6E05\u7B97\u4F60\u7684\u8D44\u4EA7\uFF0C\u5C3D\u53EF\u80FD\u652F\u4ED8\u672C\u6B21\u6B20\u6B3E\u3002\u4F60\u5C06\u9000\u51FA\u672C\u5C40\uFF0C\u7535\u8111\u5976\u4F34\u7EE7\u7EED\u6BD4\u8D5B\u3002</p><div class="row-actions">${je("\u518D\u60F3\u60F3\u529E\u6CD5","panel",'data-panel="debt"')}${je("\u786E\u8BA4\u7834\u4EA7\u9000\u51FA","bankrupt","","","secondary danger")}</div>`,!0)}function uM(){let i=Is(F.s.options);return`<h3>\u5C0F\u5C9B\u97F3\u4E50\u53F0</h3><p id="audioStatus" role="status">${Tn.status()}</p><div class="setting-row"><span>\u80CC\u666F\u97F3\u4E50</span>${je(i.music?"\u64AD\u653E\u4E2D \xB7 \u5173\u95ED":"\u5DF2\u5173\u95ED \xB7 \u5F00\u542F","music")}</div><label class="setting-row">\u66F2\u76EE<select id="musicTrack">${Object.entries(ia).map(([e,t])=>`<option value="${e}" ${i.track===e?"selected":""}>${t.name}</option>`).join("")}</select></label>${[["musicVolume","\u97F3\u4E50\u97F3\u91CF"],["effectsVolume","\u52A8\u4F5C\u97F3\u6548"],["voiceVolume","\u5976\u86D9\u7B11\u58F0"]].map(([e,t])=>`<label class="volume-row"><span>${t}</span><input type="range" min="0" max="100" value="${Math.round(i[e]*100)}" data-volume="${e}" aria-label="${t}"><output>${Math.round(i[e]*100)}%</output></label>`).join("")}<div class="setting-row"><span>\u5976\u86D9\u7B11\u58F0</span><div class="row-actions">${je(i.voice?"\u5DF2\u5F00\u542F":"\u5DF2\u5173\u95ED","voice")}${je("\u8BD5\u542C\u7B11\u58F0","testVoice")}</div></div><details class="audio-credit"><summary>\u97F3\u4E50\u4E0E\u58F0\u97F3\u6765\u6E90</summary><p>\u300A\u5976\u5BB6\u6B22\u4E50\u9882\u300B\uFF1A\u53C2\u8003 <a href="https://www.bilibili.com/video/BV1Sv7p6bEJT/" target="_blank" rel="noopener">\u5976\u86D9\u76F8\u5173\u300A\u6B22\u4E50\u9882\u300B\u4E8C\u521B</a>\u9009\u66F2\uFF0C\u4F7F\u7528\u8D1D\u591A\u82AC\u516C\u7248\u65CB\u5F8B\u91CD\u65B0\u7F16\u6392\u5668\u4E50\uFF0C\u975E\u89C6\u9891\u539F\u5F55\u97F3\u3002\u300A\u5976\u5BB6\u6F2B\u6E38\u300B\u53CA\u63B7\u9AB0\u3001\u91D1\u5E01\u3001\u811A\u6B65\u3001\u65BD\u5DE5\u97F3\u6548\u4E3A\u672C\u4F5C\u539F\u521B\u3002</p><p>\u7B11\u58F0\uFF1A<a href="https://naiwaxiaowu.pages.dev/" target="_blank" rel="noopener">\u5976\u86D9\u7684\u5C0F\u7A9D</a> laugh.wav \u7684 1.05 \u79D2\u7247\u6BB5\uFF0C\u5DF2\u88C1\u5207\u4E0E\u6DE1\u5165\u6DE1\u51FA\uFF1B\u672A\u58F0\u79F0\u8BE5\u5F55\u97F3\u4E3A\u5F00\u653E\u8BB8\u53EF\u7D20\u6750\u3002\u5C55\u793A\u5B57\u4F53\uFF1A\u7AD9\u9177\u5FEB\u4E50\u4F53\uFF08OFL\uFF09\u3002</p></details>`}H("sheetBody").addEventListener("change",i=>{if(jt?.type==="advanced"){yh();return}i.target.id==="stockWindow"&&(d0=+i.target.value,ft("stocks"))});H("sheetBody").addEventListener("input",i=>{if(jt?.type==="advanced"){yh();return}if(i.target.dataset.stockQty!==void 0){Zc(F,+i.target.dataset.stockQty);return}let e=i.target.dataset.volume;e&&(F.s.options[e]=+i.target.value/100,i.target.nextElementSibling.textContent=i.target.value+"%",sa(),rs())});function p0(i){fr=i,_o.setPaused(i||document.hidden),Oe&&(Oe.paused=i||!!Oe.contextLost,i&&Oe.renderStill()),Tn.visibility(i||document.hidden),sa(),H("app").classList.toggle("is-paused",i),H("pauseBtn").setAttribute("aria-pressed",String(i))}function dM(){if(jt){let{type:i,id:e}=jt,t=H("sheetBody").scrollTop;ft(i,e),queueMicrotask(()=>{H("sheetBody").scrollTop=t})}}function m0(){if(!Ze)return;let i=new Blob([JSON.stringify(F.s,null,2)],{type:"application/json"}),e=URL.createObjectURL(i),t=document.createElement("a");t.href=e,t.download=`\u5976\u86D9\u5927\u5BCC\u7FC1-\u7B2C${F.s.round}\u8F6E.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),Jt("\u5DF2\u5BFC\u51FA\u65C5\u884C\u5B58\u6863\u3002")}function fM(){if(Ze){if(F.s.phase==="finished"){ft("finished");return}F.player.human&&F.s.phase!=="departure"&&(F.s.phase==="roll"?(Oe?.followPlayer(),pn(F.roll())):F.s.phase==="end"?pn(F.end()):ft(F.s.phase))}}function Cd(){let i=+H("roundSelect").value,e=+H("playerCountSelect").value,t=i*(e*.19+.1);H("durationHint").textContent=i===20?"\u8BD5\u73A9\u5C40\uFF1A\u9002\u5408\u719F\u6089\u64CD\u4F5C\uFF1B\u5B8C\u6574\u7ECF\u8425\u5EFA\u8BAE 50 \u8F6E\u3002":`\u7EA6 ${Math.round(t*.8)}\u2014${Math.round(t*1.25)} \u5206\u949F\uFF0C\u4F9D\u64CD\u4F5C\u548C\u52A8\u753B\u901F\u5EA6\u53D8\u5316\u3002`}H("roundSelect").addEventListener("change",Cd);H("playerCountSelect").addEventListener("change",Cd);Cd();H("startBtn").addEventListener("click",lM);H("continueBtn").addEventListener("click",cM);H("characterPicker").addEventListener("click",i=>{let e=i.target.closest("[data-character]");e&&(hi=e.dataset.character,bo(),ra())});H("actionBtn").addEventListener("click",fM);H("soundBtn").addEventListener("click",()=>{Mo(),F.s.options.sound=!F.s.options.sound,pn(),Jt(F.s.options.sound?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED")});H("mapSelect").addEventListener("change",i=>{if(!Ze){It.mapVersion=+i.target.value==1?1:2;try{localStorage.setItem("naiwa-setup-v1",JSON.stringify(It))}catch{}bo(),tn(),ra()}});H("advancedBtn").addEventListener("click",()=>{en=null,ft("advanced")});H("difficultyBtn").addEventListener("click",()=>{mn||ft("mapGuide")});H("difficultySelect").addEventListener("change",()=>{H("difficultyHint").textContent=ts[H("difficultySelect").value].description});H("talentBtn").addEventListener("click",()=>{mn||ft("talents")});var FA=new Jc(H("app"),H("orientationBtn"),{notify:Jt,resize:()=>Oe?.resize()});H("newsHistoryBtn").addEventListener("click",()=>{Ze&&!mn&&ft("news")});H("pauseBtn").addEventListener("click",()=>{!mn&&Ze?ft("pause"):Jt("\u5148\u5B8C\u6210\u5F53\u524D\u9009\u62E9\uFF0C\u5373\u53EF\u6682\u505C\u3002")});H("shareBtn").addEventListener("click",()=>{mn?Jt("\u5148\u5B8C\u6210\u5F53\u524D\u9009\u62E9\uFF0C\u518D\u5206\u4EAB\u94FE\u63A5\u3002"):ft("share")});H("helpBtn").addEventListener("click",()=>{mn||ft("help")});H("settingsBtn").addEventListener("click",()=>{mn||ft("settings")});H("saveBtn").addEventListener("click",m0);H("homeBtn").addEventListener("click",()=>{Oe?.leaveStudio(),H("app").classList.remove("is-studio"),Oe?.home(),H("studioPanel").hidden=!0,H("startScreen").hidden=Ze,tn()});H("followBtn").addEventListener("click",()=>{Oe&&(Oe.follow?Oe.follow=!1:Oe.followPlayer(),tn(),Jt(Oe.follow?"\u8DDF\u968F\u5F53\u524D\u5976\u4F34":"\u81EA\u7531\u63A2\u7D22\u5C0F\u5C9B"))});H("qualityBtn").addEventListener("click",()=>{F.s.options.quality=F.s.options.quality==="low"?"auto":"low",pn()});H("castBtn").addEventListener("click",()=>{mn||!Oe||Oe.contextLost||(Oe.enterStudio(Ze?F.player.character:hi),H("app").classList.add("is-studio"),H("studioPanel").hidden=!1,H("miniMap").hidden=!0,H("startScreen").hidden=!0,H("actionBtn").disabled=!0,document.querySelectorAll(".dock-tabs button").forEach(i=>i.disabled=!0))});H("closeStudio").addEventListener("click",()=>{Oe?.leaveStudio(),H("app").classList.remove("is-studio"),H("studioPanel").hidden=!0,H("startScreen").hidden=Ze,tn()});H("studioPanel").addEventListener("click",i=>{let e=i.target.closest("[data-studio-char]"),t=i.target.closest("[data-studio-mode]"),n=i.target.closest("[data-studio-view]");e&&Oe?.enterStudio(e.dataset.studioChar),t&&Oe?.studio&&(Oe.studio.mode=t.dataset.studioMode),n&&Oe?.studio&&(Oe.studio.yaw=.45+{front:0,side:Math.PI/2,back:Math.PI}[n.dataset.studioView],Oe.studio.manual=!0)});H("diceCount").addEventListener("change",i=>{F.s.phase==="roll"&&F.player.human&&(F.player.diceCount=+i.target.value,pn())});document.querySelectorAll("[data-panel]").forEach(i=>i.addEventListener("click",()=>ft(i.dataset.panel)));H("fallback").addEventListener("click",i=>{let e=i.target.closest("[data-tile]");e&&!mn&&ft("tile",+e.dataset.tile)});H("closeSheet").addEventListener("click",()=>{Ot(),tn()});H("sheetBackdrop").addEventListener("click",()=>{Ot(),tn()});document.addEventListener("keydown",i=>{if(i.key==="Escape"&&(Ot(),tn()),i.key==="Tab"&&!H("sheet").hidden){let e=[...H("sheet").querySelectorAll("button:not([disabled]),input,select,a[href]")].filter(s=>!s.hidden&&s.getClientRects().length);if(!e.length)return;let t=e[0],n=e.at(-1);i.shiftKey&&document.activeElement===t?(i.preventDefault(),n.focus()):!i.shiftKey&&document.activeElement===n&&(i.preventDefault(),t.focus())}});H("sheetBody").addEventListener("change",async i=>{if(i.target.id==="musicTrack"&&(F.s.options.track=i.target.value,sa(),rs()),i.target.id==="speedSelect"&&(F.s.options.speed=+i.target.value,rs()),i.target.id==="lightingSelect"&&(F.s.options.lighting=ji(i.target.value),pn()),i.target.id==="qualitySelect"&&(F.s.options.quality=i.target.value,pn()),i.target.id==="importSave"){let e=i.target.files[0];if(!e)return;if(e.size>1e6){Jt("\u5B58\u6863\u6587\u4EF6\u8FC7\u5927\uFF0C\u8BF7\u9009\u62E9\u672C\u6E38\u620F\u5BFC\u51FA\u7684 JSON\u3002");return}let t=is.restore(await e.text());if(!t){Jt("\u5B58\u6863\u4E0D\u5B8C\u6574\u6216\u7248\u672C\u4E0D\u517C\u5BB9\uFF0C\u5F53\u524D\u8FDB\u5EA6\u672A\u4FEE\u6539\u3002");return}xh=t,Mt("\u4F7F\u7528\u8FD9\u4E2A\u65C5\u884C\u5B58\u6863\uFF1F",`\u7B2C ${t.s.round} / ${t.s.maxRounds} \u8F6E`,`<p>\u4F1A\u66FF\u6362\u5F53\u524D\u8FDB\u5EA6\u3002\u5BFC\u5165\u524D\u53EF\u4EE5\u5148\u5BFC\u51FA\u5907\u4EFD\u3002</p><div class="row-actions">${je("\u5BFC\u51FA\u5F53\u524D\u5B58\u6863","export","",!Ze)}${je("\u53D6\u6D88\u5BFC\u5165","cancel")}${je("\u786E\u8BA4\u5BFC\u5165","import","",!1,"primary")}</div>`,!0)}});var xh=null;H("sheetBody").addEventListener("click",i=>{let e=i.target.closest("[data-act]");if(!e||e.disabled)return;let{act:t}=e.dataset,n=+e.dataset.id,s=+e.dataset.index,r=+e.dataset.target,a=!0;if(t==="applyAdvanced"){if(yh(),Ps(en,hi,+H("playerCountSelect").value))return;It=lr(en),en=null;try{localStorage.setItem("naiwa-setup-v1",JSON.stringify(It))}catch{}Ot(!0),bo(),tn(),Jt("\u9AD8\u7EA7\u8BBE\u7F6E\u5DF2\u4FDD\u5B58\uFF0C\u65B0\u5C40\u6309\u6240\u9009\u9635\u5BB9\u5F00\u59CB\u3002");return}if(t==="resetAdvanced"){en=lr(),ft("advanced");return}if(t==="allRandom"){yh(),en.opponents=[],ft("advanced");return}if(t==="chooseBuilding"){ft("buildHere",n);return}if(t==="stockFilter"){Td=!Td,ft("stocks");return}if(t==="stockQty"){let o=H("qty"+n),l=F.position(n,F.s.players[0]);o.value=e.dataset.qty==="maxBuy"?Math.min(1e4,Math.floor(F.s.players[0].money/l.price)):e.dataset.qty==="maxSell"?Math.min(1e4,l.qty):e.dataset.qty,Zc(F,n);return}if(t==="resumeGame"){Ot(!0),tn();return}if(t==="copyLink"){navigator.clipboard?.writeText(H("shareUrl").value).then(()=>Jt("\u8BD5\u73A9\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5C31\u80FD\u73A9\u3002")).catch(()=>{H("shareUrl").select(),Jt("\u8BF7\u957F\u6309\u94FE\u63A5\u590D\u5236\u3002")}),navigator.clipboard||(H("shareUrl").select(),Jt("\u8BF7\u957F\u6309\u94FE\u63A5\u590D\u5236\u3002"));return}if(t==="panel"){ft(e.dataset.panel);return}if(t==="card"){let o=F.player.cards[s],l=F.cardHint(o);if(l){Jt(l),ft("cards");return}Zt[o].target==="self"?(a=F.card(s),a?(Ot(!0),pn()):pn(!1)):ft("cardTarget",s);return}if(t==="useCard"){let o=F.cardHint(F.player.cards[s]);if(o){Jt(o),ft("cards");return}a=F.card(s,r),a?(Ot(!0),pn()):pn(!1);return}if(t==="construct")a=F.construct(n,e.dataset.type);else if(t==="research")a=F.setResearch(n,e.dataset.key);else if(t==="upgrade")a=F.upgrade(n);else if(t==="sell")a=F.sell(n);else if(t==="demolish")a=F.demolish(n),a&&Ot(!0);else if(t==="confirmDemolish"){ft("confirmDemolish",n);return}else if(t==="bank")a=F.bank(e.dataset.kind,+H("bankAmount").value);else if(t==="trade")a=F.trade(n,+H("qty"+n).value*+e.dataset.sign);else if(t==="shop")a=F.shop(e.dataset.key);else if(t==="vehicle")a=F.vehicle(n);else if(t==="estatePay"||t==="estateBuy")a=F.resolveEstate(t==="estateBuy"),(a||F.s.phase==="debt")&&Ot(!0);else if(t==="buy"||t==="pass")a=F.buy(t==="buy"),a&&Ot(!0);else if(t==="branch")a=F.step(n),a&&Ot(!0);else if(t==="ack")a=F.acknowledge(),a&&Ot(!0);else if(t==="settle")a=F.settle(),a&&Ot(!0);else if(t==="bankrupt")a=F.bankrupt(),a&&Ot(!0);else if(t==="confirmBankrupt"){ft("confirmBankrupt");return}else if(t==="sound")Mo(),F.s.options.sound=!F.s.options.sound;else if(t==="music")F.s.options.music=!Is(F.s.options).music;else if(t==="voice")F.s.options.voice=!Is(F.s.options).voice;else if(t==="testVoice"){Mo().then(()=>ra("laugh"));return}else if(t==="export"){m0();return}else if(t==="confirmRestart"){ft("confirmRestart");return}else if(t==="newGame"){Ze=!1,Ui=is.restore(F.s),Ot(!0),H("startScreen").hidden=!1,bo(),tn();return}else if(t==="cancel"){Ot(!0),tn();return}else if(t==="viewBoard"){Ot(!0),ss=`finished:${F.s.current}:${F.s.round}:${F.player.pos}`,tn();return}else if(t==="import"){if(!xh)return;F=xh,xh=null,Ze=!0,Oe?.followPlayer(),Ot(!0),ss="",H("startScreen").hidden=!0,pn(),Jt("\u5B58\u6863\u5DF2\u5BFC\u5165\u3002");return}a?(["construct","upgrade","demolish","sell"].includes(t)&&Oe?.focusLot(n),pn(),jt?.type==="buildHere"&&["upgrade","construct"].includes(t)&&Ot(!0),jt&&!["buy","estate","event","branch","finished","debt","confirmBankrupt"].includes(jt.type)?dM():jt?.type==="debt"&&ft("debt")):pn(!1)});function g0(){if(clearTimeout(l0),l0=setTimeout(g0,90),!Ze||document.hidden||fr||Oe?.studio||F.s.phase==="finished"||jt&&["settings","help","sources","share","news","confirmRestart","talents","mapGuide","stocks","advanced"].includes(jt.type))return;let i=F.s,e=i.phase,t=i.logs[0],n=i.current,s=Oe&&!Oe.contextLost;if(!Rd.ready({news:_o.busy,moving:!!s&&Oe.isMoving(),effects:!!s&&!!Oe.fx.items.length}))return;let r=!1;!F.player.alive&&e==="end"?r=F.end():F.player.human?e==="departure"?r=F.roll():e==="moving"&&(r=F.step()):r=F.ai(),r=r||i.phase!==e||i.logs[0]!==t||i.current!==n,r&&(Rd.after(e,i.options.speed),rs(),tn())}document.addEventListener("visibilitychange",()=>{_o.setPaused(document.hidden||fr),Tn.visibility(document.hidden||fr),document.hidden?rs():tn()});window.addEventListener("pagehide",rs);bo();tn();g0();var u0=$c("naiwa");u0&&(document.querySelector(".brand img").src=u0);!window.__NAIWA_PORTABLE__&&"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register(globalThis.__NAIWA_SERVICE_WORKER_URL__||"./sw.js?v=16").catch(()=>{});})();
