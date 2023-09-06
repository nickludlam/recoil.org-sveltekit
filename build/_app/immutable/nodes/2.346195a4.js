import{s as dl,n as Ps,f as Zl,h as ua,o as Jl,b as vn}from"../chunks/scheduler.e9b79cf6.js";import{S as ul,i as hl,e as zs,a as lt,f as re,y as Ke,z as Ze,j as we,k as P,A as Ao,x as ae,s as Xe,g as Ce,r as ha,B as Ql,c as Ye,h as Le,C as pt,u as ma,l as qt,v as fa,D as $l,d as pa,t as ga,w as va}from"../chunks/index.545ad915.js";const ec=!1,tc=!0,ng=Object.freeze(Object.defineProperty({__proto__:null,prerender:tc,ssr:ec},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rs="155",nc=0,Ds=1,ic=2,ml=1,oc=2,Cn=3,Zn=0,Bt=1,Ln=2,Dn=0,Ni=1,uo=2,Us=3,Is=4,ac=5,zi=100,sc=101,rc=102,Ns=103,Fs=104,lc=200,cc=201,dc=202,uc=203,fl=204,pl=205,hc=206,mc=207,fc=208,pc=209,gc=210,vc=0,_c=1,bc=2,Ka=3,yc=4,xc=5,wc=6,Mc=7,gl=0,Sc=1,Ec=2,Yn=0,Tc=1,kc=2,Ac=3,Rc=4,Cc=5,vl=300,Oi=301,Bi=302,Za=303,Ja=304,sa=306,Qa=1e3,ln=1001,$a=1002,Ut=1003,Os=1004,_a=1005,Yt=1006,Lc=1007,ho=1008,Kn=1009,Pc=1010,zc=1011,ls=1012,_l=1013,qn=1014,Xn=1015,Un=1016,bl=1017,yl=1018,li=1020,Dc=1021,cn=1023,Uc=1024,Ic=1025,ci=1026,Hi=1027,Nc=1028,xl=1029,Fc=1030,wl=1031,Ml=1033,ba=33776,ya=33777,xa=33778,wa=33779,Bs=35840,Hs=35841,Gs=35842,Vs=35843,Oc=36196,Ws=37492,js=37496,qs=37808,Xs=37809,Ys=37810,Ks=37811,Zs=37812,Js=37813,Qs=37814,$s=37815,er=37816,tr=37817,nr=37818,ir=37819,or=37820,ar=37821,Ma=36492,Bc=36283,sr=36284,rr=36285,lr=36286,Sl=3e3,di=3001,Hc=3200,Gc=3201,Vc=0,Wc=1,ui="",Be="srgb",bn="srgb-linear",El="display-p3",Sa=7680,jc=519,qc=512,Xc=513,Yc=514,Kc=515,Zc=516,Jc=517,Qc=518,$c=519,cr=35044,Ro=35048,dr="300 es",es=1035,Pn=2e3,ia=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,r=o.length;a<r;a++)o[a].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ur=1234567;const no=Math.PI/180,mo=180/Math.PI;function ji(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function cs(i,e){return(i%e+e)%e}function ed(i,e,t,n,o){return n+(i-e)*(o-n)/(t-e)}function td(i,e,t){return i!==e?(t-i)/(e-i):0}function io(i,e,t){return(1-t)*i+t*e}function nd(i,e,t,n){return io(i,e,1-Math.exp(-t*n))}function id(i,e=1){return e-Math.abs(cs(i,e*2)-e)}function od(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ad(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rd(i,e){return i+Math.random()*(e-i)}function ld(i){return i*(.5-Math.random())}function cd(i){i!==void 0&&(ur=i);let e=ur+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dd(i){return i*no}function ud(i){return i*mo}function ts(i){return(i&i-1)===0&&i!==0}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function oa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function md(i,e,t,n,o){const a=Math.cos,r=Math.sin,s=a(t/2),l=r(t/2),c=a((e+n)/2),d=r((e+n)/2),h=a((e-n)/2),u=r((e-n)/2),p=a((n-e)/2),g=r((n-e)/2);switch(o){case"XYX":i.set(s*d,l*h,l*u,s*c);break;case"YZY":i.set(l*u,s*d,l*h,s*c);break;case"ZXZ":i.set(l*h,l*u,s*d,s*c);break;case"XZX":i.set(s*d,l*g,l*p,s*c);break;case"YXY":i.set(l*p,s*d,l*g,s*c);break;case"ZYZ":i.set(l*g,l*p,s*d,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hr={DEG2RAD:no,RAD2DEG:mo,generateUUID:ji,clamp:It,euclideanModulo:cs,mapLinear:ed,inverseLerp:td,lerp:io,damp:nd,pingpong:id,smoothstep:od,smootherstep:ad,randInt:sd,randFloat:rd,randFloatSpread:ld,seededRandom:cd,degToRad:dd,radToDeg:ud,isPowerOfTwo:ts,ceilPowerOfTwo:hd,floorPowerOfTwo:oa,setQuaternionFromProperEuler:md,normalize:zt,denormalize:Di};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*o+e.x,this.y=a*o+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,o,a,r,s,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,r,s,l,c)}set(e,t,n,o,a,r,s,l,c){const d=this.elements;return d[0]=e,d[1]=o,d[2]=s,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,r=n[0],s=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],g=n[8],_=o[0],f=o[3],m=o[6],S=o[1],b=o[4],T=o[7],E=o[2],R=o[5],A=o[8];return a[0]=r*_+s*S+l*E,a[3]=r*f+s*b+l*R,a[6]=r*m+s*T+l*A,a[1]=c*_+d*S+h*E,a[4]=c*f+d*b+h*R,a[7]=c*m+d*T+h*A,a[2]=u*_+p*S+g*E,a[5]=u*f+p*b+g*R,a[8]=u*m+p*T+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],r=e[4],s=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*s*c-n*a*d+n*s*l+o*a*c-o*r*l}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],r=e[4],s=e[5],l=e[6],c=e[7],d=e[8],h=d*r-s*c,u=s*l-d*a,p=c*a-r*l,g=t*h+n*u+o*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(o*c-d*n)*_,e[2]=(s*n-o*r)*_,e[3]=u*_,e[4]=(d*t-o*l)*_,e[5]=(o*a-s*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,r,s){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*s)+r+e,-o*c,o*l,-o*(-c*r+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new Ge;function Tl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const mr={};function oo(i){i in mr||(mr[i]=!0,console.warn(i))}function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fd=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),pd=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function gd(i){return i.convertSRGBToLinear().applyMatrix3(pd)}function vd(i){return i.applyMatrix3(fd).convertLinearToSRGB()}const _d={[bn]:i=>i,[Be]:i=>i.convertSRGBToLinear(),[El]:gd},bd={[bn]:i=>i,[Be]:i=>i.convertLinearToSRGB(),[El]:vd},tn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return bn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=_d[e],o=bd[t];if(n===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return o(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let vi;class kl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=fo("canvas")),vi.width=e.width,vi.height=e.height;const n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let r=0;r<a.length;r++)a[r]=Fi(a[r]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yd=0;class Al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let r=0,s=o.length;r<s;r++)o[r].isDataTexture?a.push(ka(o[r].image)):a.push(ka(o[r]))}else a=ka(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;class Ht extends Wi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=ln,o=ln,a=Yt,r=ho,s=cn,l=Kn,c=Ht.DEFAULT_ANISOTROPY,d=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=ji(),this.name="",this.source=new Al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===di?Be:ui),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qa:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qa:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Be?di:Sl}set encoding(e){oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===di?Be:ui}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=vl;Ht.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,o=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*o+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*o+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*o+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*o+r[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],_=l[2],f=l[6],m=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,T=(p+1)/2,E=(m+1)/2,R=(d+u)/4,A=(h+_)/4,F=(g+f)/4;return b>T&&b>E?b<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(b),o=R/n,a=A/n):T>E?T<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(T),n=R/o,a=F/o):E<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(E),n=A/a,o=F/a),this.set(n,o,a,t),this}let S=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(h-_)/S,this.z=(u-d)/S,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wd extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const o={width:e,height:t,depth:1};n.encoding!==void 0&&(oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===di?Be:ui),this.texture=new Ht(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Al(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends wd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rl extends Ht{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Md extends Ht{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,r,s){let l=n[o+0],c=n[o+1],d=n[o+2],h=n[o+3];const u=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(s===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==u||c!==p||d!==g){let f=1-s;const m=l*u+c*p+d*g+h*_,S=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const E=Math.sqrt(b),R=Math.atan2(E,m*S);f=Math.sin(f*R)/E,s=Math.sin(s*R)/E}const T=s*S;if(l=l*f+u*T,c=c*f+p*T,d=d*f+g*T,h=h*f+_*T,f===1-s){const E=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=E,c*=E,d*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,o,a,r){const s=n[o],l=n[o+1],c=n[o+2],d=n[o+3],h=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return e[t]=s*g+d*h+l*p-c*u,e[t+1]=l*g+d*u+c*h-s*p,e[t+2]=c*g+d*p+s*u-l*h,e[t+3]=d*g-s*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,o=e._y,a=e._z,r=e._order,s=Math.cos,l=Math.sin,c=s(n/2),d=s(o/2),h=s(a/2),u=l(n/2),p=l(o/2),g=l(a/2);switch(r){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],r=t[1],s=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+s+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(r-o)*p}else if(n>s&&n>h){const p=2*Math.sqrt(1+n-s-h);this._w=(d-l)/p,this._x=.25*p,this._y=(o+r)/p,this._z=(a+c)/p}else if(s>h){const p=2*Math.sqrt(1+s-n-h);this._w=(a-c)/p,this._x=(o+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-s);this._w=(r-o)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,r=e._w,s=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+r*s+o*c-a*l,this._y=o*d+r*l+a*s-n*c,this._z=a*d+r*c+n*l-o*s,this._w=r*d-n*s-o*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,r=this._w;let s=r*e._w+n*e._x+o*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=r,this._x=n,this._y=o,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*o+t*this._y,this._z=p*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,s),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=o*h+this._y*u,this._z=a*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(o),n*Math.sin(a),n*Math.cos(a),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,r=e.y,s=e.z,l=e.w,c=l*t+r*o-s*n,d=l*n+s*t-a*o,h=l*o+a*n-r*t,u=-a*t-r*n-s*o;return this.x=c*l+u*-a+d*-s-h*-r,this.y=d*l+u*-r+h*-a-c*-s,this.z=h*l+u*-s+c*-r-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,r=t.x,s=t.y,l=t.z;return this.x=o*l-a*s,this.y=a*r-n*l,this.z=n*s-o*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new z,fr=new po;class go{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),_i.copy(e.boundingBox),_i.applyMatrix4(e.matrixWorld),this.union(_i);else{const o=e.geometry;if(o!==void 0)if(t&&o.attributes!==void 0&&o.attributes.position!==void 0){const a=o.attributes.position;for(let r=0,s=a.count;r<s;r++)En.fromBufferAttribute(a,r).applyMatrix4(e.matrixWorld),this.expandByPoint(En)}else o.boundingBox===null&&o.computeBoundingBox(),_i.copy(o.boundingBox),_i.applyMatrix4(e.matrixWorld),this.union(_i)}const n=e.children;for(let o=0,a=n.length;o<a;o++)this.expandByObject(n[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),Co.subVectors(this.max,Yi),bi.subVectors(e.a,Yi),yi.subVectors(e.b,Yi),xi.subVectors(e.c,Yi),On.subVectors(yi,bi),Bn.subVectors(xi,yi),ei.subVectors(bi,xi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ei.z,ei.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ei.z,0,-ei.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ei.y,ei.x,0];return!Ra(t,bi,yi,xi,Co)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,bi,yi,xi,Co))?!1:(Lo.crossVectors(On,Bn),t=[Lo.x,Lo.y,Lo.z],Ra(t,bi,yi,xi,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new z,new z,new z,new z,new z,new z,new z,new z],En=new z,_i=new go,bi=new z,yi=new z,xi=new z,On=new z,Bn=new z,ei=new z,Yi=new z,Co=new z,Lo=new z,ti=new z;function Ra(i,e,t,n,o){for(let a=0,r=i.length-3;a<=r;a+=3){ti.fromArray(i,a);const s=o.x*Math.abs(ti.x)+o.y*Math.abs(ti.y)+o.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),d=n.dot(ti);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>s)return!1}return!0}const Sd=new go,Ki=new z,Ca=new z;class vo{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sd.setFromPoints(e).getCenter(n);let o=0;for(let a=0,r=e.length;a<r;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(Ki,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Ca)),this.expandByPoint(Ki.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new z,La=new z,Po=new z,Hn=new z,Pa=new z,zo=new z,za=new z;class ds{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){La.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(La);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Po),s=Hn.dot(this.direction),l=-Hn.dot(Po),c=Hn.lengthSq(),d=Math.abs(1-r*r);let h,u,p,g;if(d>0)if(h=r*l-s,u=r*s-l,g=a*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,p=h*(h+r*u+2*s)+u*(r*h+u+2*l)+c}else u=a,h=Math.max(0,-(r*u+s)),p=-h*h+u*(u+2*l)+c;else u=-a,h=Math.max(0,-(r*u+s)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-r*a+s)),u=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(h=Math.max(0,-(r*a+s)),u=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c);else u=r>0?-a:a,h=Math.max(0,-(r*u+s)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),o&&o.copy(La).addScaledVector(Po,u),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),o=Tn.dot(Tn)-n*n,a=e.radius*e.radius;if(o>a)return null;const r=Math.sqrt(a-o),s=n-r,l=n+r;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,r,s,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,o=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,o=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),n>r||a>o||((a>n||isNaN(n))&&(n=a),(r<o||isNaN(o))&&(o=r),h>=0?(s=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(s=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||s>o)||((s>n||n!==n)&&(n=s),(l<o||o!==o)&&(o=l),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,o,a){Pa.subVectors(t,e),zo.subVectors(n,e),za.crossVectors(Pa,zo);let r=this.direction.dot(za),s;if(r>0){if(o)return null;s=1}else if(r<0)s=-1,r=-r;else return null;Hn.subVectors(this.origin,e);const l=s*this.direction.dot(zo.crossVectors(Hn,zo));if(l<0)return null;const c=s*this.direction.dot(Pa.cross(Hn));if(c<0||l+c>r)return null;const d=-s*Hn.dot(za);return d<0?null:this.at(d/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,n,o,a,r,s,l,c,d,h,u,p,g,_,f){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,r,s,l,c,d,h,u,p,g,_,f)}set(e,t,n,o,a,r,s,l,c,d,h,u,p,g,_,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=o,m[1]=a,m[5]=r,m[9]=s,m[13]=l,m[2]=c,m[6]=d,m[10]=h,m[14]=u,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/wi.setFromMatrixColumn(e,0).length(),a=1/wi.setFromMatrixColumn(e,1).length(),r=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,r=Math.cos(n),s=Math.sin(n),l=Math.cos(o),c=Math.sin(o),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const u=r*d,p=r*h,g=s*d,_=s*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-s*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,_=c*h;t[0]=u+_*s,t[4]=g*s-p,t[8]=r*c,t[1]=r*h,t[5]=r*d,t[9]=-s,t[2]=p*s-g,t[6]=_+u*s,t[10]=r*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,_=c*h;t[0]=u-_*s,t[4]=-r*h,t[8]=g+p*s,t[1]=p+g*s,t[5]=r*d,t[9]=_-u*s,t[2]=-r*c,t[6]=s,t[10]=r*l}else if(e.order==="ZYX"){const u=r*d,p=r*h,g=s*d,_=s*h;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=s*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,p=r*c,g=s*l,_=s*c;t[0]=l*d,t[4]=_-u*h,t[8]=g*h+p,t[1]=h,t[5]=r*d,t[9]=-s*d,t[2]=-c*d,t[6]=p*h+g,t[10]=u-_*h}else if(e.order==="XZY"){const u=r*l,p=r*c,g=s*l,_=s*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+_,t[5]=r*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=s*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ed,e,Td)}lookAt(e,t,n){const o=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Gn.crossVectors(n,Gt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Gn.crossVectors(n,Gt)),Gn.normalize(),Do.crossVectors(Gt,Gn),o[0]=Gn.x,o[4]=Do.x,o[8]=Gt.x,o[1]=Gn.y,o[5]=Do.y,o[9]=Gt.y,o[2]=Gn.z,o[6]=Do.z,o[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,r=n[0],s=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],g=n[2],_=n[6],f=n[10],m=n[14],S=n[3],b=n[7],T=n[11],E=n[15],R=o[0],A=o[4],F=o[8],y=o[12],w=o[1],K=o[5],j=o[9],B=o[13],W=o[2],V=o[6],Q=o[10],X=o[14],Y=o[3],J=o[7],Z=o[11],U=o[15];return a[0]=r*R+s*w+l*W+c*Y,a[4]=r*A+s*K+l*V+c*J,a[8]=r*F+s*j+l*Q+c*Z,a[12]=r*y+s*B+l*X+c*U,a[1]=d*R+h*w+u*W+p*Y,a[5]=d*A+h*K+u*V+p*J,a[9]=d*F+h*j+u*Q+p*Z,a[13]=d*y+h*B+u*X+p*U,a[2]=g*R+_*w+f*W+m*Y,a[6]=g*A+_*K+f*V+m*J,a[10]=g*F+_*j+f*Q+m*Z,a[14]=g*y+_*B+f*X+m*U,a[3]=S*R+b*w+T*W+E*Y,a[7]=S*A+b*K+T*V+E*J,a[11]=S*F+b*j+T*Q+E*Z,a[15]=S*y+b*B+T*X+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],r=e[1],s=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],_=e[7],f=e[11],m=e[15];return g*(+a*l*h-o*c*h-a*s*u+n*c*u+o*s*p-n*l*p)+_*(+t*l*p-t*c*u+a*r*u-o*r*p+o*c*d-a*l*d)+f*(+t*c*h-t*s*p-a*r*h+n*r*p+a*s*d-n*c*d)+m*(-o*s*d-t*l*h+t*s*u+o*r*h-n*r*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],r=e[4],s=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],_=e[13],f=e[14],m=e[15],S=h*f*c-_*u*c+_*l*p-s*f*p-h*l*m+s*u*m,b=g*u*c-d*f*c-g*l*p+r*f*p+d*l*m-r*u*m,T=d*_*c-g*h*c+g*s*p-r*_*p-d*s*m+r*h*m,E=g*h*l-d*_*l-g*s*u+r*_*u+d*s*f-r*h*f,R=t*S+n*b+o*T+a*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=S*A,e[1]=(_*u*a-h*f*a-_*o*p+n*f*p+h*o*m-n*u*m)*A,e[2]=(s*f*a-_*l*a+_*o*c-n*f*c-s*o*m+n*l*m)*A,e[3]=(h*l*a-s*u*a-h*o*c+n*u*c+s*o*p-n*l*p)*A,e[4]=b*A,e[5]=(d*f*a-g*u*a+g*o*p-t*f*p-d*o*m+t*u*m)*A,e[6]=(g*l*a-r*f*a-g*o*c+t*f*c+r*o*m-t*l*m)*A,e[7]=(r*u*a-d*l*a+d*o*c-t*u*c-r*o*p+t*l*p)*A,e[8]=T*A,e[9]=(g*h*a-d*_*a-g*n*p+t*_*p+d*n*m-t*h*m)*A,e[10]=(r*_*a-g*s*a+g*n*c-t*_*c-r*n*m+t*s*m)*A,e[11]=(d*s*a-r*h*a-d*n*c+t*h*c+r*n*p-t*s*p)*A,e[12]=E*A,e[13]=(d*_*o-g*h*o+g*n*u-t*_*u-d*n*f+t*h*f)*A,e[14]=(g*s*o-r*_*o-g*n*l+t*_*l+r*n*f-t*s*f)*A,e[15]=(r*h*o-d*s*o+d*n*l-t*h*l-r*n*u+t*s*u)*A,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,r=e.x,s=e.y,l=e.z,c=a*r,d=a*s;return this.set(c*r+n,c*s-o*l,c*l+o*s,0,c*s+o*l,d*s+n,d*l-o*r,0,c*l-o*s,d*l+o*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,r){return this.set(1,n,a,0,e,1,r,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,r=t._y,s=t._z,l=t._w,c=a+a,d=r+r,h=s+s,u=a*c,p=a*d,g=a*h,_=r*d,f=r*h,m=s*h,S=l*c,b=l*d,T=l*h,E=n.x,R=n.y,A=n.z;return o[0]=(1-(_+m))*E,o[1]=(p+T)*E,o[2]=(g-b)*E,o[3]=0,o[4]=(p-T)*R,o[5]=(1-(u+m))*R,o[6]=(f+S)*R,o[7]=0,o[8]=(g+b)*A,o[9]=(f-S)*A,o[10]=(1-(u+_))*A,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=wi.set(o[0],o[1],o[2]).length();const r=wi.set(o[4],o[5],o[6]).length(),s=wi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],nn.copy(this);const c=1/a,d=1/r,h=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=d,nn.elements[5]*=d,nn.elements[6]*=d,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,t.setFromRotationMatrix(nn),n.x=a,n.y=r,n.z=s,this}makePerspective(e,t,n,o,a,r,s=Pn){const l=this.elements,c=2*a/(t-e),d=2*a/(n-o),h=(t+e)/(t-e),u=(n+o)/(n-o);let p,g;if(s===Pn)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(s===ia)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,o,a,r,s=Pn){const l=this.elements,c=1/(t-e),d=1/(n-o),h=1/(r-a),u=(t+e)*c,p=(n+o)*d;let g,_;if(s===Pn)g=(r+a)*h,_=-2*h;else if(s===ia)g=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new z,nn=new bt,Ed=new z(0,0,0),Td=new z(1,1,1),Gn=new z,Do=new z,Gt=new z,pr=new bt,gr=new po;class ra{constructor(e=0,t=0,n=0,o=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],r=o[4],s=o[8],l=o[1],c=o[5],d=o[9],h=o[2],u=o[6],p=o[10];switch(t){case"XYZ":this._y=Math.asin(It(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-It(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gr.setFromEuler(this),this.setFromQuaternion(gr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kd=0;const vr=new z,Mi=new po,kn=new bt,Uo=new z,Zi=new z,Ad=new z,Rd=new po,_r=new z(1,0,0),br=new z(0,1,0),yr=new z(0,0,1),Cd={type:"added"},xr={type:"removed"};class Nt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new z,t=new ra,n=new po,o=new z(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ge}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(_r,e)}rotateY(e){return this.rotateOnAxis(br,e)}rotateZ(e){return this.rotateOnAxis(yr,e)}translateOnAxis(e,t){return vr.copy(e).applyQuaternion(this.quaternion),this.position.add(vr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_r,e)}translateY(e){return this.translateOnAxis(br,e)}translateZ(e){return this.translateOnAxis(yr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Zi,Uo,this.up):kn.lookAt(Uo,Zi,this.up),this.quaternion.setFromRotationMatrix(kn),o&&(kn.extractRotation(o.matrixWorld),Mi.setFromRotationMatrix(kn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xr)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xr)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let o=0,a=this.children.length;o<a;o++){const r=this.children[o].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,r=o.length;a<r;a++){const s=o[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));o.material=s}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let s=0;s<this.children.length;s++)o.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];o.animations.push(a(e.animations,l))}}if(t){const s=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),h=r(e.shapes),u=r(e.skeletons),p=r(e.animations),g=r(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=o,n;function r(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}Nt.DEFAULT_UP=new z(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new z,An=new z,Da=new z,Rn=new z,Si=new z,Ei=new z,wr=new z,Ua=new z,Ia=new z,Na=new z;let Io=!1;class sn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),on.subVectors(e,t),o.cross(on);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){on.subVectors(o,t),An.subVectors(n,t),Da.subVectors(e,t);const r=on.dot(on),s=on.dot(An),l=on.dot(Da),c=An.dot(An),d=An.dot(Da),h=r*c-s*s;if(h===0)return a.set(-2,-1,-1);const u=1/h,p=(c*l-s*d)*u,g=(r*d-s*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,n,o,a,r,s,l){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),this.getInterpolation(e,t,n,o,a,r,s,l)}static getInterpolation(e,t,n,o,a,r,s,l){return this.getBarycoord(e,t,n,o,Rn),l.setScalar(0),l.addScaledVector(a,Rn.x),l.addScaledVector(r,Rn.y),l.addScaledVector(s,Rn.z),l}static isFrontFacing(e,t,n,o){return on.subVectors(n,t),An.subVectors(e,t),on.cross(An).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),An.subVectors(this.a,this.b),on.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,o,a){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),sn.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}getInterpolation(e,t,n,o,a){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let r,s;Si.subVectors(o,n),Ei.subVectors(a,n),Ua.subVectors(e,n);const l=Si.dot(Ua),c=Ei.dot(Ua);if(l<=0&&c<=0)return t.copy(n);Ia.subVectors(e,o);const d=Si.dot(Ia),h=Ei.dot(Ia);if(d>=0&&h<=d)return t.copy(o);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(n).addScaledVector(Si,r);Na.subVectors(e,a);const p=Si.dot(Na),g=Ei.dot(Na);if(g>=0&&p<=g)return t.copy(a);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Ei,s);const f=d*g-p*h;if(f<=0&&h-d>=0&&p-g>=0)return wr.subVectors(a,o),s=(h-d)/(h-d+(p-g)),t.copy(o).addScaledVector(wr,s);const m=1/(f+_+u);return r=_*m,s=u*m,t.copy(n).addScaledVector(Si,r).addScaledVector(Ei,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ld=0;class qi extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Ni,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const r=[];for(const s in a){const l=a[s];delete l.metadata,r.push(l)}return r}if(t){const a=o(e.textures),r=o(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},No={h:0,s:0,l:0};function Fa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,o=tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,o),this}setHSL(e,t,n,o=tn.workingColorSpace){if(e=cs(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Fa(r,a,e+1/3),this.g=Fa(r,a,e),this.b=Fa(r,a,e-1/3)}return tn.toWorkingColorSpace(this,o),this}setStyle(e,t=Be){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=o[1],s=o[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){const n=Ll[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return tn.fromWorkingColorSpace(Pt.copy(this),e),Math.round(It(Pt.r*255,0,255))*65536+Math.round(It(Pt.g*255,0,255))*256+Math.round(It(Pt.b*255,0,255))}getHexString(e=Be){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,o=Pt.g,a=Pt.b,r=Math.max(n,o,a),s=Math.min(n,o,a);let l,c;const d=(s+r)/2;if(s===r)l=0,c=0;else{const h=r-s;switch(c=d<=.5?h/(r+s):h/(2-r-s),r){case n:l=(o-a)/h+(o<a?6:0);break;case o:l=(a-n)/h+2;break;case a:l=(n-o)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Be){tn.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,o=Pt.b;return e!==Be?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(No);const n=io(an.h,No.h,t),o=io(an.s,No.s,t),a=io(an.l,No.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Je;Je.NAMES=Ll;class us extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new z,Fo=new Ve;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cr,this.updateRange={offset:0,count:-1},this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),o=zt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),o=zt(o,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Pl extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zl extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pd=0;const Xt=new bt,Oa=new Nt,Ti=new z,Vt=new go,Ji=new go,Et=new z;class Zt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tl(e)?zl:Pl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ge().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let n=0,o=e.length;n<o;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];Vt.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const s=t[a];Ji.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(Vt.min,Ji.min),Vt.expandByPoint(Et),Et.addVectors(Vt.max,Ji.max),Vt.expandByPoint(Et)):(Vt.expandByPoint(Ji.min),Vt.expandByPoint(Ji.max))}Vt.getCenter(n);let o=0;for(let a=0,r=e.count;a<r;a++)Et.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(Et));if(t)for(let a=0,r=t.length;a<r;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,d=s.count;c<d;c++)Et.fromBufferAttribute(s,c),l&&(Ti.fromBufferAttribute(e,c),Et.add(Ti)),o=Math.max(o,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,o=t.position.array,a=t.normal.array,r=t.uv.array,s=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<s;w++)c[w]=new z,d[w]=new z;const h=new z,u=new z,p=new z,g=new Ve,_=new Ve,f=new Ve,m=new z,S=new z;function b(w,K,j){h.fromArray(o,w*3),u.fromArray(o,K*3),p.fromArray(o,j*3),g.fromArray(r,w*2),_.fromArray(r,K*2),f.fromArray(r,j*2),u.sub(h),p.sub(h),_.sub(g),f.sub(g);const B=1/(_.x*f.y-f.x*_.y);isFinite(B)&&(m.copy(u).multiplyScalar(f.y).addScaledVector(p,-_.y).multiplyScalar(B),S.copy(p).multiplyScalar(_.x).addScaledVector(u,-f.x).multiplyScalar(B),c[w].add(m),c[K].add(m),c[j].add(m),d[w].add(S),d[K].add(S),d[j].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,K=T.length;w<K;++w){const j=T[w],B=j.start,W=j.count;for(let V=B,Q=B+W;V<Q;V+=3)b(n[V+0],n[V+1],n[V+2])}const E=new z,R=new z,A=new z,F=new z;function y(w){A.fromArray(a,w*3),F.copy(A);const K=c[w];E.copy(K),E.sub(A.multiplyScalar(A.dot(K))).normalize(),R.crossVectors(F,K);const B=R.dot(d[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=B}for(let w=0,K=T.length;w<K;++w){const j=T[w],B=j.start,W=j.count;for(let V=B,Q=B+W;V<Q;V+=3)y(n[V+0]),y(n[V+1]),y(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const o=new z,a=new z,r=new z,s=new z,l=new z,c=new z,d=new z,h=new z;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),f=e.getX(u+2);o.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,f),d.subVectors(r,a),h.subVectors(o,a),d.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),s.add(d),l.add(d),c.add(d),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)o.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),d.subVectors(r,a),h.subVectors(o,a),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(s,l){const c=s.array,d=s.itemSize,h=s.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let _=0,f=l.length;_<f;_++){s.isInterleavedBufferAttribute?p=l[_]*s.data.stride+s.offset:p=l[_]*d;for(let m=0;m<d;m++)u[g++]=c[p++]}return new Ot(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,o=this.attributes;for(const s in o){const l=o[s],c=e(l,n);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let s=0,l=r.length;s<l;s++){const c=r[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const o={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(o[l]=d,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const o=e.attributes;for(const c in o){const d=o[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mr=new bt,ni=new ds,Oo=new vo,Sr=new z,ki=new z,Ai=new z,Ri=new z,Ba=new z,Bo=new z,Ho=new Ve,Go=new Ve,Vo=new Ve,Er=new z,Tr=new z,kr=new z,Wo=new z,jo=new z;class zn extends Nt{constructor(e=new Zt,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=o.length;a<r;a++){const s=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const s=this.morphTargetInfluences;if(a&&s){Bo.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=s[l],h=a[l];d!==0&&(Ba.fromBufferAttribute(h,e),r?Bo.addScaledVector(Ba,d):Bo.addScaledVector(Ba.sub(t),d))}t.add(Bo)}return t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(a),ni.copy(e.ray).recast(e.near),!(Oo.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Oo,Sr)===null||ni.origin.distanceToSquared(Sr)>(e.far-e.near)**2))&&(Mr.copy(a).invert(),ni.copy(e.ray).applyMatrix4(Mr),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let o;const a=this.geometry,r=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,u=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const f=u[g],m=r[f.materialIndex],S=Math.max(f.start,p.start),b=Math.min(s.count,Math.min(f.start+f.count,p.start+p.count));for(let T=S,E=b;T<E;T+=3){const R=s.getX(T),A=s.getX(T+1),F=s.getX(T+2);o=qo(this,m,e,n,c,d,h,R,A,F),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(s.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const S=s.getX(f),b=s.getX(f+1),T=s.getX(f+2);o=qo(this,r,e,n,c,d,h,S,b,T),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const f=u[g],m=r[f.materialIndex],S=Math.max(f.start,p.start),b=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let T=S,E=b;T<E;T+=3){const R=T,A=T+1,F=T+2;o=qo(this,m,e,n,c,d,h,R,A,F),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const S=f,b=f+1,T=f+2;o=qo(this,r,e,n,c,d,h,S,b,T),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}}}function zd(i,e,t,n,o,a,r,s){let l;if(e.side===Bt?l=n.intersectTriangle(r,a,o,!0,s):l=n.intersectTriangle(o,a,r,e.side===Zn,s),l===null)return null;jo.copy(s),jo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(jo);return c<t.near||c>t.far?null:{distance:c,point:jo.clone(),object:i}}function qo(i,e,t,n,o,a,r,s,l,c){i.getVertexPosition(s,ki),i.getVertexPosition(l,Ai),i.getVertexPosition(c,Ri);const d=zd(i,e,t,n,ki,Ai,Ri,Wo);if(d){o&&(Ho.fromBufferAttribute(o,s),Go.fromBufferAttribute(o,l),Vo.fromBufferAttribute(o,c),d.uv=sn.getInterpolation(Wo,ki,Ai,Ri,Ho,Go,Vo,new Ve)),a&&(Ho.fromBufferAttribute(a,s),Go.fromBufferAttribute(a,l),Vo.fromBufferAttribute(a,c),d.uv1=sn.getInterpolation(Wo,ki,Ai,Ri,Ho,Go,Vo,new Ve),d.uv2=d.uv1),r&&(Er.fromBufferAttribute(r,s),Tr.fromBufferAttribute(r,l),kr.fromBufferAttribute(r,c),d.normal=sn.getInterpolation(Wo,ki,Ai,Ri,Er,Tr,kr,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new z,materialIndex:0};sn.getNormal(ki,Ai,Ri,h.normal),d.face=h}return d}class _o extends Zt{constructor(e=1,t=1,n=1,o=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:r};const s=this;o=Math.floor(o),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,o,r,2),g("x","z","y",1,-1,e,n,-t,o,r,3),g("x","y","z",1,-1,e,t,n,o,a,4),g("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(h,2));function g(_,f,m,S,b,T,E,R,A,F,y){const w=T/A,K=E/F,j=T/2,B=E/2,W=R/2,V=A+1,Q=F+1;let X=0,Y=0;const J=new z;for(let Z=0;Z<Q;Z++){const U=Z*K-B;for(let q=0;q<V;q++){const de=q*w-j;J[_]=de*S,J[f]=U*b,J[m]=W,c.push(J.x,J.y,J.z),J[_]=0,J[f]=0,J[m]=R>0?1:-1,d.push(J.x,J.y,J.z),h.push(q/A),h.push(1-Z/F),X+=1}}for(let Z=0;Z<F;Z++)for(let U=0;U<A;U++){const q=u+U+V*Z,de=u+U+V*(Z+1),ce=u+(U+1)+V*(Z+1),he=u+(U+1)+V*Z;l.push(q,de,he),l.push(de,ce,he),Y+=6}s.addGroup(p,Y,y),p+=Y,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Gi(i[t]);for(const o in n)e[o]=n[o]}return e}function Dd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dl(i){return i.getRenderTarget()===null?i.outputColorSpace:bn}const aa={clone:Gi,merge:Dt};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const r=this.uniforms[o].value;r&&r.isTexture?t.uniforms[o]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[o]={type:"m4",value:r.toArray()}:t.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ul extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Ul{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,o,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*o/l,t-=r.offsetY*n/c,o*=r.width/l,n*=r.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Li=1;class Nd extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const o=new Kt(Ci,Li,e,t);o.layers=this.layers,this.add(o);const a=new Kt(Ci,Li,e,t);a.layers=this.layers,this.add(a);const r=new Kt(Ci,Li,e,t);r.layers=this.layers,this.add(r);const s=new Kt(Ci,Li,e,t);s.layers=this.layers,this.add(s);const l=new Kt(Ci,Li,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Ci,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,a,r,s,l]=t;for(const c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,s,l,c]=this.children,d=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,o),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=u,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Il extends Ht{constructor(e,t,n,o,a,r,s,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,o,a,r,s,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fd extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];t.encoding!==void 0&&(oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===di?Be:ui),this.texture=new Il(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _o(5,5,5),a=new Wt({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Dn});a.uniforms.tEquirect.value=t;const r=new zn(o,a),s=t.minFilter;return t.minFilter===ho&&(t.minFilter=Yt),new Nd(1,10,this).update(e,r),t.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,o){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,o);e.setRenderTarget(a)}}const Ha=new z,Od=new z,Bd=new Ge;class oi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Ha.subVectors(n,t).cross(Od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ha),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bd.getNormalMatrix(e),o=this.coplanarPoint(Ha).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new vo,Xo=new z;class Nl{constructor(e=new oi,t=new oi,n=new oi,o=new oi,a=new oi,r=new oi){this.planes=[e,t,n,o,a,r]}set(e,t,n,o,a,r){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(o),s[4].copy(a),s[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn){const n=this.planes,o=e.elements,a=o[0],r=o[1],s=o[2],l=o[3],c=o[4],d=o[5],h=o[6],u=o[7],p=o[8],g=o[9],_=o[10],f=o[11],m=o[12],S=o[13],b=o[14],T=o[15];if(n[0].setComponents(l-a,u-c,f-p,T-m).normalize(),n[1].setComponents(l+a,u+c,f+p,T+m).normalize(),n[2].setComponents(l+r,u+d,f+g,T+S).normalize(),n[3].setComponents(l-r,u-d,f-g,T-S).normalize(),n[4].setComponents(l-s,u-h,f-_,T-b).normalize(),t===Pn)n[5].setComponents(l+s,u+h,f+_,T+b).normalize();else if(t===ia)n[5].setComponents(s,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(Xo.x=o.normal.x>0?e.max.x:e.min.x,Xo.y=o.normal.y>0?e.max.y:e.min.y,Xo.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fl(){let i=null,e=!1,t=null,n=null;function o(a,r){t(a,r),n=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Hd(i,e){const t=e.isWebGL2,n=new WeakMap;function o(c,d){const h=c.array,u=c.usage,p=i.createBuffer();i.bindBuffer(d,p),i.bufferData(d,h,u),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function a(c,d,h){const u=d.array,p=d.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,u):(t?i.bufferSubData(h,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):i.bufferSubData(h,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,o(c,d)):h.version<c.version&&(a(h.buffer,c,d),h.version=c.version)}return{get:r,remove:s,update:l}}class hs extends Zt{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,r=t/2,s=Math.floor(n),l=Math.floor(o),c=s+1,d=l+1,h=e/s,u=t/l,p=[],g=[],_=[],f=[];for(let m=0;m<d;m++){const S=m*u-r;for(let b=0;b<c;b++){const T=b*h-a;g.push(T,-S,0),_.push(0,0,1),f.push(b/s),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<s;S++){const b=S+c*m,T=S+c*(m+1),E=S+1+c*(m+1),R=S+1+c*m;p.push(b,T,R),p.push(T,E,R)}this.setIndex(p),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,eu=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cu=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,du=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,uu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",vu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_u=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
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
}`,Au=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,zu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Du=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ou=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Bu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xu=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zu=`#if defined( USE_POINTS_UV )
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
#endif`,Ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,th=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ih=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,oh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lh=`#ifdef USE_NORMALMAP
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
#endif`,ch=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,ph=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_h=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Th=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,kh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ah=`#ifdef USE_SKINNING
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
#endif`,Rh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ch=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ph=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zh=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ih=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,qh=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Yh=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jh=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$h=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,em=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,nm=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,im=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,om=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sm=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,lm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,dm=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,hm=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mm=`uniform float size;
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
}`,fm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,gm=`uniform vec3 color;
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
}`,vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_m=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:Gd,alphahash_pars_fragment:Vd,alphamap_fragment:Wd,alphamap_pars_fragment:jd,alphatest_fragment:qd,alphatest_pars_fragment:Xd,aomap_fragment:Yd,aomap_pars_fragment:Kd,begin_vertex:Zd,beginnormal_vertex:Jd,bsdfs:Qd,iridescence_fragment:$d,bumpmap_pars_fragment:eu,clipping_planes_fragment:tu,clipping_planes_pars_fragment:nu,clipping_planes_pars_vertex:iu,clipping_planes_vertex:ou,color_fragment:au,color_pars_fragment:su,color_pars_vertex:ru,color_vertex:lu,common:cu,cube_uv_reflection_fragment:du,defaultnormal_vertex:uu,displacementmap_pars_vertex:hu,displacementmap_vertex:mu,emissivemap_fragment:fu,emissivemap_pars_fragment:pu,colorspace_fragment:gu,colorspace_pars_fragment:vu,envmap_fragment:_u,envmap_common_pars_fragment:bu,envmap_pars_fragment:yu,envmap_pars_vertex:xu,envmap_physical_pars_fragment:zu,envmap_vertex:wu,fog_vertex:Mu,fog_pars_vertex:Su,fog_fragment:Eu,fog_pars_fragment:Tu,gradientmap_pars_fragment:ku,lightmap_fragment:Au,lightmap_pars_fragment:Ru,lights_lambert_fragment:Cu,lights_lambert_pars_fragment:Lu,lights_pars_begin:Pu,lights_toon_fragment:Du,lights_toon_pars_fragment:Uu,lights_phong_fragment:Iu,lights_phong_pars_fragment:Nu,lights_physical_fragment:Fu,lights_physical_pars_fragment:Ou,lights_fragment_begin:Bu,lights_fragment_maps:Hu,lights_fragment_end:Gu,logdepthbuf_fragment:Vu,logdepthbuf_pars_fragment:Wu,logdepthbuf_pars_vertex:ju,logdepthbuf_vertex:qu,map_fragment:Xu,map_pars_fragment:Yu,map_particle_fragment:Ku,map_particle_pars_fragment:Zu,metalnessmap_fragment:Ju,metalnessmap_pars_fragment:Qu,morphcolor_vertex:$u,morphnormal_vertex:eh,morphtarget_pars_vertex:th,morphtarget_vertex:nh,normal_fragment_begin:ih,normal_fragment_maps:oh,normal_pars_fragment:ah,normal_pars_vertex:sh,normal_vertex:rh,normalmap_pars_fragment:lh,clearcoat_normal_fragment_begin:ch,clearcoat_normal_fragment_maps:dh,clearcoat_pars_fragment:uh,iridescence_pars_fragment:hh,opaque_fragment:mh,packing:fh,premultiplied_alpha_fragment:ph,project_vertex:gh,dithering_fragment:vh,dithering_pars_fragment:_h,roughnessmap_fragment:bh,roughnessmap_pars_fragment:yh,shadowmap_pars_fragment:xh,shadowmap_pars_vertex:wh,shadowmap_vertex:Mh,shadowmask_pars_fragment:Sh,skinbase_vertex:Eh,skinning_pars_vertex:Th,skinning_vertex:kh,skinnormal_vertex:Ah,specularmap_fragment:Rh,specularmap_pars_fragment:Ch,tonemapping_fragment:Lh,tonemapping_pars_fragment:Ph,transmission_fragment:zh,transmission_pars_fragment:Dh,uv_pars_fragment:Uh,uv_pars_vertex:Ih,uv_vertex:Nh,worldpos_vertex:Fh,background_vert:Oh,background_frag:Bh,backgroundCube_vert:Hh,backgroundCube_frag:Gh,cube_vert:Vh,cube_frag:Wh,depth_vert:jh,depth_frag:qh,distanceRGBA_vert:Xh,distanceRGBA_frag:Yh,equirect_vert:Kh,equirect_frag:Zh,linedashed_vert:Jh,linedashed_frag:Qh,meshbasic_vert:$h,meshbasic_frag:em,meshlambert_vert:tm,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:om,meshnormal_vert:am,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:dm,meshtoon_vert:um,meshtoon_frag:hm,points_vert:mm,points_frag:fm,shadow_vert:pm,shadow_frag:gm,sprite_vert:vm,sprite_frag:_m},ue={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},_n={basic:{uniforms:Dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Dt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Dt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Dt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Dt([ue.points,ue.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Dt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Dt([ue.common,ue.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Dt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Dt([ue.sprite,ue.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Dt([ue.common,ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Dt([ue.lights,ue.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};_n.physical={uniforms:Dt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Yo={r:0,b:0,g:0};function bm(i,e,t,n,o,a,r){const s=new Je(0);let l=a===!0?0:1,c,d,h=null,u=0,p=null;function g(f,m){let S=!1,b=m.isScene===!0?m.background:null;switch(b&&b.isTexture&&(b=(m.backgroundBlurriness>0?t:e).get(b)),b===null?_(s,l):b&&b.isColor&&(_(b,1),S=!0),i.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,r),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,r),S=!0;break}(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===sa)?(d===void 0&&(d=new zn(new _o(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Gi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=b.colorSpace!==Be,(h!==b||u!==b.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,h=b,u=b.version,p=i.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new zn(new hs(2,2),new Wt({name:"BackgroundMaterial",uniforms:Gi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=b.colorSpace!==Be,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,m){f.getRGB(Yo,Dl(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,m,r)}return{getClearColor:function(){return s},setClearColor:function(f,m=1){s.set(f),l=m,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(s,l)},render:g}}function ym(i,e,t,n){const o=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||a!==null,s={},l=f(null);let c=l,d=!1;function h(W,V,Q,X,Y){let J=!1;if(r){const Z=_(X,Q,V);c!==Z&&(c=Z,p(c.object)),J=m(W,X,Q,Y),J&&S(W,X,Q,Y)}else{const Z=V.wireframe===!0;(c.geometry!==X.id||c.program!==Q.id||c.wireframe!==Z)&&(c.geometry=X.id,c.program=Q.id,c.wireframe=Z,J=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(J||d)&&(d=!1,F(W,V,Q,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function u(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function p(W){return n.isWebGL2?i.bindVertexArray(W):a.bindVertexArrayOES(W)}function g(W){return n.isWebGL2?i.deleteVertexArray(W):a.deleteVertexArrayOES(W)}function _(W,V,Q){const X=Q.wireframe===!0;let Y=s[W.id];Y===void 0&&(Y={},s[W.id]=Y);let J=Y[V.id];J===void 0&&(J={},Y[V.id]=J);let Z=J[X];return Z===void 0&&(Z=f(u()),J[X]=Z),Z}function f(W){const V=[],Q=[],X=[];for(let Y=0;Y<o;Y++)V[Y]=0,Q[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:X,object:W,attributes:{},index:null}}function m(W,V,Q,X){const Y=c.attributes,J=V.attributes;let Z=0;const U=Q.getAttributes();for(const q in U)if(U[q].location>=0){const ce=Y[q];let he=J[q];if(he===void 0&&(q==="instanceMatrix"&&W.instanceMatrix&&(he=W.instanceMatrix),q==="instanceColor"&&W.instanceColor&&(he=W.instanceColor)),ce===void 0||ce.attribute!==he||he&&ce.data!==he.data)return!0;Z++}return c.attributesNum!==Z||c.index!==X}function S(W,V,Q,X){const Y={},J=V.attributes;let Z=0;const U=Q.getAttributes();for(const q in U)if(U[q].location>=0){let ce=J[q];ce===void 0&&(q==="instanceMatrix"&&W.instanceMatrix&&(ce=W.instanceMatrix),q==="instanceColor"&&W.instanceColor&&(ce=W.instanceColor));const he={};he.attribute=ce,ce&&ce.data&&(he.data=ce.data),Y[q]=he,Z++}c.attributes=Y,c.attributesNum=Z,c.index=X}function b(){const W=c.newAttributes;for(let V=0,Q=W.length;V<Q;V++)W[V]=0}function T(W){E(W,0)}function E(W,V){const Q=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;Q[W]=1,X[W]===0&&(i.enableVertexAttribArray(W),X[W]=1),Y[W]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,V),Y[W]=V)}function R(){const W=c.newAttributes,V=c.enabledAttributes;for(let Q=0,X=V.length;Q<X;Q++)V[Q]!==W[Q]&&(i.disableVertexAttribArray(Q),V[Q]=0)}function A(W,V,Q,X,Y,J,Z){Z===!0?i.vertexAttribIPointer(W,V,Q,Y,J):i.vertexAttribPointer(W,V,Q,X,Y,J)}function F(W,V,Q,X){if(n.isWebGL2===!1&&(W.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const Y=X.attributes,J=Q.getAttributes(),Z=V.defaultAttributeValues;for(const U in J){const q=J[U];if(q.location>=0){let de=Y[U];if(de===void 0&&(U==="instanceMatrix"&&W.instanceMatrix&&(de=W.instanceMatrix),U==="instanceColor"&&W.instanceColor&&(de=W.instanceColor)),de!==void 0){const ce=de.normalized,he=de.itemSize,Me=t.get(de);if(Me===void 0)continue;const Ae=Me.buffer,Re=Me.type,je=Me.bytesPerElement,ft=n.isWebGL2===!0&&(Re===i.INT||Re===i.UNSIGNED_INT||de.gpuType===_l);if(de.isInterleavedBufferAttribute){const Fe=de.data,D=Fe.stride,ut=de.offset;if(Fe.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)E(q.location+_e,Fe.meshPerAttribute);W.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let _e=0;_e<q.locationSize;_e++)T(q.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let _e=0;_e<q.locationSize;_e++)A(q.location+_e,he/q.locationSize,Re,ce,D*je,(ut+he/q.locationSize*_e)*je,ft)}else{if(de.isInstancedBufferAttribute){for(let Fe=0;Fe<q.locationSize;Fe++)E(q.location+Fe,de.meshPerAttribute);W.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<q.locationSize;Fe++)T(q.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Fe=0;Fe<q.locationSize;Fe++)A(q.location+Fe,he/q.locationSize,Re,ce,he*je,he/q.locationSize*Fe*je,ft)}}else if(Z!==void 0){const ce=Z[U];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(q.location,ce);break;case 3:i.vertexAttrib3fv(q.location,ce);break;case 4:i.vertexAttrib4fv(q.location,ce);break;default:i.vertexAttrib1fv(q.location,ce)}}}}R()}function y(){j();for(const W in s){const V=s[W];for(const Q in V){const X=V[Q];for(const Y in X)g(X[Y].object),delete X[Y];delete V[Q]}delete s[W]}}function w(W){if(s[W.id]===void 0)return;const V=s[W.id];for(const Q in V){const X=V[Q];for(const Y in X)g(X[Y].object),delete X[Y];delete V[Q]}delete s[W.id]}function K(W){for(const V in s){const Q=s[V];if(Q[W.id]===void 0)continue;const X=Q[W.id];for(const Y in X)g(X[Y].object),delete X[Y];delete Q[W.id]}}function j(){B(),d=!0,c!==l&&(c=l,p(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:B,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:K,initAttributes:b,enableAttribute:T,disableUnusedAttributes:R}}function xm(i,e,t,n){const o=n.isWebGL2;let a;function r(c){a=c}function s(c,d){i.drawArrays(a,c,d),t.update(d,a,1)}function l(c,d,h){if(h===0)return;let u,p;if(o)u=i,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](a,c,d,h),t.update(d,a,h)}this.setMode=r,this.render=s,this.renderInstances=l}function wm(i,e,t){let n;function o(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=r||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=u>0,T=r||e.has("OES_texture_float"),E=b&&T,R=r?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:o,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:b,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:R}}function Mm(i){const e=this;let t=null,n=0,o=!1,a=!1;const r=new oi,s=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||o;return o=u,n=h.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,m=i.get(h);if(!o||g===null||g.length===0||a&&!f)a?d(null):c();else{const S=a?0:n,b=S*4;let T=m.clippingState||null;l.value=T,T=d(g,u,b,p);for(let E=0;E!==b;++E)T[E]=t[E];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const m=p+_*4,S=u.matrixWorldInverse;s.getNormalMatrix(S),(f===null||f.length<m)&&(f=new Float32Array(m));for(let b=0,T=p;b!==_;++b,T+=4)r.copy(h[b]).applyMatrix4(S,s),r.normal.toArray(f,T),f[T+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function Sm(i){let e=new WeakMap;function t(r,s){return s===Za?r.mapping=Oi:s===Ja&&(r.mapping=Bi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const s=r.mapping;if(s===Za||s===Ja)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Fd(l.height/2);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",o),t(c.texture,r.mapping)}else return null}}return r}function o(r){const s=r.target;s.removeEventListener("dispose",o);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Ol extends Ul{constructor(e=-1,t=1,n=1,o=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,r=n+e,s=o+t,l=o-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ii=4,Ar=[.125,.215,.35,.446,.526,.582],si=20,Ga=new Ol,Rr=new Je;let Va=null;const ai=(1+Math.sqrt(5))/2,Pi=1/ai,Cr=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ai,Pi),new z(0,ai,-Pi),new z(Pi,0,ai),new z(-Pi,0,ai),new z(ai,Pi,0),new z(-ai,Pi,0)];class Lr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100){Va=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va),e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Un,format:cn,colorSpace:bn,depthBuffer:!1},o=Pr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pr(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(a)),this._blurMaterial=Tm(a,e,t)}return o}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,o){const s=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Rr),d.toneMapping=Yn,d.autoClear=!1;const p=new us({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new zn(new _o,p);let _=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,_=!0):(p.color.copy(Rr),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(s.up.set(0,l[m],0),s.lookAt(c[m],0,0)):S===1?(s.up.set(0,0,l[m]),s.lookAt(0,c[m],0)):(s.up.set(0,l[m],0),s.lookAt(0,0,c[m]));const b=this._cubeSize;Ko(o,S*b,m>2?b:0,b,b),d.setRenderTarget(o),_&&d.render(g,s),d.render(e,s)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===Oi||e.mapping===Bi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zr());const a=o?this._cubemapMaterial:this._equirectMaterial,r=new zn(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=Cr[(o-1)%Cr.length];this._blur(e,o-1,o,a,r)}t.autoClear=n}_blur(e,t,n,o,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,o,"latitudinal",a),this._halfBlur(r,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,r,s){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new zn(this._lodPlanes[o],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*si-1),_=a/g,f=isFinite(a)?1+Math.floor(d*_):si;f>si&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${si}`);const m=[];let S=0;for(let A=0;A<si;++A){const F=A/_,y=Math.exp(-F*F/2);m.push(y),A===0?S+=y:A<f&&(S+=2*y)}for(let A=0;A<m.length;A++)m[A]=m[A]/S;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=m,u.latitudinal.value=r==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const T=this._sizeLods[o],E=3*T*(o>b-Ii?o-b+Ii:0),R=4*(this._cubeSize-T);Ko(t,E,R,3*T,2*T),l.setRenderTarget(t),l.render(h,Ga)}}function Em(i){const e=[],t=[],n=[];let o=i;const a=i-Ii+1+Ar.length;for(let r=0;r<a;r++){const s=Math.pow(2,o);t.push(s);let l=1/s;r>i-Ii?l=Ar[r-i+Ii-1]:r===0&&(l=0),n.push(l);const c=1/(s-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,_=3,f=2,m=1,S=new Float32Array(_*g*p),b=new Float32Array(f*g*p),T=new Float32Array(m*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,F=R>2?0:-1,y=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];S.set(y,_*g*R),b.set(u,f*g*R);const w=[R,R,R,R,R,R];T.set(w,m*g*R)}const E=new Zt;E.setAttribute("position",new Ot(S,_)),E.setAttribute("uv",new Ot(b,f)),E.setAttribute("faceIndex",new Ot(T,m)),e.push(E),o>Ii&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pr(i,e,t){const n=new dn(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function Tm(i,e,t){const n=new Float32Array(si),o=new z(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ms(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function zr(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ms(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Dr(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ms(){return`

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
	`}function km(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Za||l===Ja,d=l===Oi||l===Bi;if(c||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Lr(i)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||d&&h&&o(h)){t===null&&(t=new Lr(i));const u=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,u),s.addEventListener("dispose",a),u.texture}else return null}}}return s}function o(s){let l=0;const c=6;for(let d=0;d<c;d++)s[d]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Am(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const o=t(n);return o===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function Rm(i,e,t,n){const o={},a=new WeakMap;function r(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let f=0,m=_.length;f<m;f++)e.remove(_[f])}u.removeEventListener("dispose",r),delete o[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(h,u){return o[u.id]===!0||(u.addEventListener("dispose",r),o[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let f=0,m=_.length;f<m;f++)e.update(_[f],i.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let b=0,T=S.length;b<T;b+=3){const E=S[b+0],R=S[b+1],A=S[b+2];u.push(E,R,R,A,A,E)}}else if(g!==void 0){const S=g.array;_=g.version;for(let b=0,T=S.length/3-1;b<T;b+=3){const E=b+0,R=b+1,A=b+2;u.push(E,R,R,A,A,E)}}else return;const f=new(Tl(u)?zl:Pl)(u,1);f.version=_;const m=a.get(h);m&&e.remove(m),a.set(h,f)}function d(h){const u=a.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:d}}function Cm(i,e,t,n){const o=n.isWebGL2;let a;function r(u){a=u}let s,l;function c(u){s=u.type,l=u.bytesPerElement}function d(u,p){i.drawElements(a,p,s,u*l),t.update(p,a,1)}function h(u,p,g){if(g===0)return;let _,f;if(o)_=i,f="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[f](a,p,s,u*l,g),t.update(p,a,g)}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h}function Lm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,s){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function Pm(i,e){return i[0]-e[0]}function zm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Dm(i,e,t){const n={},o=new Float32Array(8),a=new WeakMap,r=new At,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,d,h){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=p!==void 0?p.length:0;let _=a.get(d);if(_===void 0||_.count!==g){let W=function(){j.dispose(),a.delete(d),d.removeEventListener("dispose",W)};_!==void 0&&_.texture.dispose();const S=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let F=0;S===!0&&(F=1),b===!0&&(F=2),T===!0&&(F=3);let y=d.attributes.position.count*F,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const K=new Float32Array(y*w*4*g),j=new Rl(K,y,w,g);j.type=Xn,j.needsUpdate=!0;const B=F*4;for(let V=0;V<g;V++){const Q=E[V],X=R[V],Y=A[V],J=y*w*4*V;for(let Z=0;Z<Q.count;Z++){const U=Z*B;S===!0&&(r.fromBufferAttribute(Q,Z),K[J+U+0]=r.x,K[J+U+1]=r.y,K[J+U+2]=r.z,K[J+U+3]=0),b===!0&&(r.fromBufferAttribute(X,Z),K[J+U+4]=r.x,K[J+U+5]=r.y,K[J+U+6]=r.z,K[J+U+7]=0),T===!0&&(r.fromBufferAttribute(Y,Z),K[J+U+8]=r.x,K[J+U+9]=r.y,K[J+U+10]=r.z,K[J+U+11]=Y.itemSize===4?r.w:1)}}_={count:g,texture:j,size:new Ve(y,w)},a.set(d,_),d.addEventListener("dispose",W)}let f=0;for(let S=0;S<u.length;S++)f+=u[S];const m=d.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",m),h.getUniforms().setValue(i,"morphTargetInfluences",u),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=u===void 0?0:u.length;let g=n[d.id];if(g===void 0||g.length!==p){g=[];for(let b=0;b<p;b++)g[b]=[b,0];n[d.id]=g}for(let b=0;b<p;b++){const T=g[b];T[0]=b,T[1]=u[b]}g.sort(zm);for(let b=0;b<8;b++)b<p&&g[b][1]?(s[b][0]=g[b][0],s[b][1]=g[b][1]):(s[b][0]=Number.MAX_SAFE_INTEGER,s[b][1]=0);s.sort(Pm);const _=d.morphAttributes.position,f=d.morphAttributes.normal;let m=0;for(let b=0;b<8;b++){const T=s[b],E=T[0],R=T[1];E!==Number.MAX_SAFE_INTEGER&&R?(_&&d.getAttribute("morphTarget"+b)!==_[E]&&d.setAttribute("morphTarget"+b,_[E]),f&&d.getAttribute("morphNormal"+b)!==f[E]&&d.setAttribute("morphNormal"+b,f[E]),o[b]=R,m+=R):(_&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),f&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),o[b]=0)}const S=d.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",o)}}return{update:l}}function Um(i,e,t,n){let o=new WeakMap;function a(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(o.get(h)!==c&&(e.update(h),o.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),o.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),o.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;o.get(u)!==c&&(u.update(),o.set(u,c))}return h}function r(){o=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}const Bl=new Ht,Hl=new Rl,Gl=new Md,Vl=new Il,Ur=[],Ir=[],Nr=new Float32Array(16),Fr=new Float32Array(9),Or=new Float32Array(4);function Xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let a=Ur[o];if(a===void 0&&(a=new Float32Array(o),Ur[o]=a),e!==0){n.toArray(a,0);for(let r=1,s=0;r!==e;++r)s+=t,i[r].toArray(a,s)}return a}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function la(i,e){let t=Ir[e];t===void 0&&(t=new Int32Array(e),Ir[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Or.set(n),i.uniformMatrix2fv(this.addr,!1,Or),xt(t,n)}}function Hm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Fr.set(n),i.uniformMatrix3fv(this.addr,!1,Fr),xt(t,n)}}function Gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Nr.set(n),i.uniformMatrix4fv(this.addr,!1,Nr),xt(t,n)}}function Vm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Xm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function Jm(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2D(e||Bl,o)}function Qm(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||Gl,o)}function $m(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||Vl,o)}function ef(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||Hl,o)}function tf(i){switch(i){case 5126:return Im;case 35664:return Nm;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return Vm;case 35667:case 35671:return Wm;case 35668:case 35672:return jm;case 35669:case 35673:return qm;case 5125:return Xm;case 36294:return Ym;case 36295:return Km;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return ef}}function nf(i,e){i.uniform1fv(this.addr,e)}function of(i,e){const t=Xi(e,this.size,2);i.uniform2fv(this.addr,t)}function af(i,e){const t=Xi(e,this.size,3);i.uniform3fv(this.addr,t)}function sf(i,e){const t=Xi(e,this.size,4);i.uniform4fv(this.addr,t)}function rf(i,e){const t=Xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lf(i,e){const t=Xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cf(i,e){const t=Xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function df(i,e){i.uniform1iv(this.addr,e)}function uf(i,e){i.uniform2iv(this.addr,e)}function hf(i,e){i.uniform3iv(this.addr,e)}function mf(i,e){i.uniform4iv(this.addr,e)}function ff(i,e){i.uniform1uiv(this.addr,e)}function pf(i,e){i.uniform2uiv(this.addr,e)}function gf(i,e){i.uniform3uiv(this.addr,e)}function vf(i,e){i.uniform4uiv(this.addr,e)}function _f(i,e,t){const n=this.cache,o=e.length,a=la(t,o);yt(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let r=0;r!==o;++r)t.setTexture2D(e[r]||Bl,a[r])}function bf(i,e,t){const n=this.cache,o=e.length,a=la(t,o);yt(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let r=0;r!==o;++r)t.setTexture3D(e[r]||Gl,a[r])}function yf(i,e,t){const n=this.cache,o=e.length,a=la(t,o);yt(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let r=0;r!==o;++r)t.setTextureCube(e[r]||Vl,a[r])}function xf(i,e,t){const n=this.cache,o=e.length,a=la(t,o);yt(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let r=0;r!==o;++r)t.setTexture2DArray(e[r]||Hl,a[r])}function wf(i){switch(i){case 5126:return nf;case 35664:return of;case 35665:return af;case 35666:return sf;case 35674:return rf;case 35675:return lf;case 35676:return cf;case 5124:case 35670:return df;case 35667:case 35671:return uf;case 35668:case 35672:return hf;case 35669:case 35673:return mf;case 5125:return ff;case 36294:return pf;case 36295:return gf;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return xf}}class Mf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tf(t.type)}}class Sf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=wf(t.type)}}class Ef{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,r=o.length;a!==r;++a){const s=o[a];s.setValue(e,t[s.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Br(i,e){i.seq.push(e),i.map[e.id]=e}function Tf(i,e,t){const n=i.name,o=n.length;for(Wa.lastIndex=0;;){const a=Wa.exec(n),r=Wa.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&r+2===o){Br(t,c===void 0?new Mf(s,i,e):new Sf(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new Ef(s),Br(t,h)),t=h}}}class ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),r=e.getUniformLocation(t,a.name);Tf(a,r,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,r=t.length;a!==r;++a){const s=t[a],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const r=e[o];r.id in t&&n.push(r)}return n}}function Hr(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let kf=0;function Af(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=o;r<a;r++){const s=r+1;n.push(`${s===e?">":" "} ${s}: ${t[r]}`)}return n.join(`
`)}function Rf(i){switch(i){case bn:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Gr(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(n&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+Af(i.getShaderSource(e),r)}else return o}function Cf(i,e){const t=Rf(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Lf(i,e){let t;switch(e){case Tc:t="Linear";break;case kc:t="Reinhard";break;case Ac:t="OptimizedCineon";break;case Rc:t="ACESFilmic";break;case Cc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(eo).join(`
`)}function zf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Df(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=i.getActiveAttrib(e,o),r=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:s}}return t}function eo(i){return i!==""}function Vr(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wr(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ns(i){return i.replace(Uf,Nf)}const If=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nf(i,e){let t=Oe[e];if(t===void 0){const n=If.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ns(t)}const Ff=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jr(i){return i.replace(Ff,Of)}function Of(i,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function qr(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Vf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gl:e="ENVMAP_BLENDING_MULTIPLY";break;case Sc:e="ENVMAP_BLENDING_MIX";break;case Ec:e="ENVMAP_BLENDING_ADD";break}return e}function Wf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jf(i,e,t,n){const o=i.getContext(),a=t.defines;let r=t.vertexShader,s=t.fragmentShader;const l=Bf(t),c=Hf(t),d=Gf(t),h=Vf(t),u=Wf(t),p=t.isWebGL2?"":Pf(t),g=zf(a),_=o.createProgram();let f,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(eo).join(`
`),f.length>0&&(f+=`
`),m=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(eo).join(`
`),m.length>0&&(m+=`
`)):(f=[qr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),m=[p,qr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Lf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Cf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),r=ns(r),r=Vr(r,t),r=Wr(r,t),s=ns(s),s=Vr(s,t),s=Wr(s,t),r=jr(r),s=jr(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===dr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=S+f+r,T=S+m+s,E=Hr(o,o.VERTEX_SHADER,b),R=Hr(o,o.FRAGMENT_SHADER,T);if(o.attachShader(_,E),o.attachShader(_,R),t.index0AttributeName!==void 0?o.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(_,0,"position"),o.linkProgram(_),i.debug.checkShaderErrors){const y=o.getProgramInfoLog(_).trim(),w=o.getShaderInfoLog(E).trim(),K=o.getShaderInfoLog(R).trim();let j=!0,B=!0;if(o.getProgramParameter(_,o.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,_,E,R);else{const W=Gr(o,E,"vertex"),V=Gr(o,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(_,o.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+W+`
`+V)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(w===""||K==="")&&(B=!1);B&&(this.diagnostics={runnable:j,programLog:y,vertexShader:{log:w,prefix:f},fragmentShader:{log:K,prefix:m}})}o.deleteShader(E),o.deleteShader(R);let A;this.getUniforms=function(){return A===void 0&&(A=new ea(o,_)),A};let F;return this.getAttributes=function(){return F===void 0&&(F=Df(o,_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}let qf=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yf(e),t.set(e,n)),n}}class Yf{constructor(e){this.id=qf++,this.code=e,this.usedTimes=0}}function Kf(i,e,t,n,o,a,r){const s=new Cl,l=new Xf,c=[],d=o.isWebGL2,h=o.logarithmicDepthBuffer,u=o.vertexTextures;let p=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function f(y,w,K,j,B){const W=j.fog,V=B.geometry,Q=y.isMeshStandardMaterial?j.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||Q),Y=X&&X.mapping===sa?X.image.height:null,J=g[y.type];y.precision!==null&&(p=o.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,U=Z!==void 0?Z.length:0;let q=0;V.morphAttributes.position!==void 0&&(q=1),V.morphAttributes.normal!==void 0&&(q=2),V.morphAttributes.color!==void 0&&(q=3);let de,ce,he,Me;if(J){const $e=_n[J];de=$e.vertexShader,ce=$e.fragmentShader}else de=y.vertexShader,ce=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),Me=l.getFragmentShaderID(y);const Ae=i.getRenderTarget(),Re=B.isInstancedMesh===!0,je=!!y.map,ft=!!y.matcap,Fe=!!X,D=!!y.aoMap,ut=!!y.lightMap,_e=!!y.bumpMap,Pe=!!y.normalMap,ke=!!y.displacementMap,qe=!!y.emissiveMap,He=!!y.metalnessMap,De=!!y.roughnessMap,Qe=y.anisotropy>0,gt=y.clearcoat>0,ct=y.iridescence>0,M=y.sheen>0,v=y.transmission>0,I=Qe&&!!y.anisotropyMap,ne=gt&&!!y.clearcoatMap,$=gt&&!!y.clearcoatNormalMap,ee=gt&&!!y.clearcoatRoughnessMap,me=ct&&!!y.iridescenceMap,te=ct&&!!y.iridescenceThicknessMap,N=M&&!!y.sheenColorMap,ve=M&&!!y.sheenRoughnessMap,be=!!y.specularMap,ge=!!y.specularColorMap,pe=!!y.specularIntensityMap,fe=v&&!!y.transmissionMap,Ue=v&&!!y.thicknessMap,et=!!y.gradientMap,k=!!y.alphaMap,se=y.alphaTest>0,O=!!y.alphaHash,ie=!!y.extensions,le=!!V.attributes.uv1,We=!!V.attributes.uv2,nt=!!V.attributes.uv3;let it=Yn;return y.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(it=i.toneMapping),{isWebGL2:d,shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:de,fragmentShader:ce,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:Re,instancingColor:Re&&B.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:bn,map:je,matcap:ft,envMap:Fe,envMapMode:Fe&&X.mapping,envMapCubeUVHeight:Y,aoMap:D,lightMap:ut,bumpMap:_e,normalMap:Pe,displacementMap:u&&ke,emissiveMap:qe,normalMapObjectSpace:Pe&&y.normalMapType===Wc,normalMapTangentSpace:Pe&&y.normalMapType===Vc,metalnessMap:He,roughnessMap:De,anisotropy:Qe,anisotropyMap:I,clearcoat:gt,clearcoatMap:ne,clearcoatNormalMap:$,clearcoatRoughnessMap:ee,iridescence:ct,iridescenceMap:me,iridescenceThicknessMap:te,sheen:M,sheenColorMap:N,sheenRoughnessMap:ve,specularMap:be,specularColorMap:ge,specularIntensityMap:pe,transmission:v,transmissionMap:fe,thicknessMap:Ue,gradientMap:et,opaque:y.transparent===!1&&y.blending===Ni,alphaMap:k,alphaTest:se,alphaHash:O,combine:y.combine,mapUv:je&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:ut&&_(y.lightMap.channel),bumpMapUv:_e&&_(y.bumpMap.channel),normalMapUv:Pe&&_(y.normalMap.channel),displacementMapUv:ke&&_(y.displacementMap.channel),emissiveMapUv:qe&&_(y.emissiveMap.channel),metalnessMapUv:He&&_(y.metalnessMap.channel),roughnessMapUv:De&&_(y.roughnessMap.channel),anisotropyMapUv:I&&_(y.anisotropyMap.channel),clearcoatMapUv:ne&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:$&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:N&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(y.sheenRoughnessMap.channel),specularMapUv:be&&_(y.specularMap.channel),specularColorMapUv:ge&&_(y.specularColorMap.channel),specularIntensityMapUv:pe&&_(y.specularIntensityMap.channel),transmissionMapUv:fe&&_(y.transmissionMap.channel),thicknessMapUv:Ue&&_(y.thicknessMap.channel),alphaMapUv:k&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pe||Qe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:We,vertexUv3s:nt,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(je||k),fog:!!W,useFog:y.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,useLegacyLights:i._useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ln,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ie&&y.extensions.derivatives===!0,extensionFragDepth:ie&&y.extensions.fragDepth===!0,extensionDrawBuffers:ie&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const K in y.defines)w.push(K),w.push(y.defines[K]);return y.isRawShaderMaterial===!1&&(S(w,y),b(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function S(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function b(y,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),y.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),y.push(s.mask)}function T(y){const w=g[y.type];let K;if(w){const j=_n[w];K=aa.clone(j.uniforms)}else K=y.uniforms;return K}function E(y,w){let K;for(let j=0,B=c.length;j<B;j++){const W=c[j];if(W.cacheKey===w){K=W,++K.usedTimes;break}}return K===void 0&&(K=new jf(i,w,y,a),c.push(K)),K}function R(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:T,acquireProgram:E,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:F}}function Zf(){let i=new WeakMap;function e(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function t(a){i.delete(a)}function n(a,r,s){i.get(a)[r]=s}function o(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:o}}function Jf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xr(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yr(){const i=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function r(h,u,p,g,_,f){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},i[e]=m):(m.id=h.id,m.object=h,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=f),e++,m}function s(h,u,p,g,_,f){const m=r(h,u,p,g,_,f);p.transmission>0?n.push(m):p.transparent===!0?o.push(m):t.push(m)}function l(h,u,p,g,_,f){const m=r(h,u,p,g,_,f);p.transmission>0?n.unshift(m):p.transparent===!0?o.unshift(m):t.unshift(m)}function c(h,u){t.length>1&&t.sort(h||Jf),n.length>1&&n.sort(u||Xr),o.length>1&&o.sort(u||Xr)}function d(){for(let h=e,u=i.length;h<u;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:s,unshift:l,finish:d,sort:c}}function Qf(){let i=new WeakMap;function e(n,o){const a=i.get(n);let r;return a===void 0?(r=new Yr,i.set(n,[r])):o>=a.length?(r=new Yr,a.push(r)):r=a[o],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function $f(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Je};break;case"SpotLight":t={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tp=0;function np(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ip(i,e){const t=new $f,n=ep(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)o.probe.push(new z);const a=new z,r=new bt,s=new bt;function l(d,h){let u=0,p=0,g=0;for(let K=0;K<9;K++)o.probe[K].set(0,0,0);let _=0,f=0,m=0,S=0,b=0,T=0,E=0,R=0,A=0,F=0;d.sort(np);const y=h===!0?Math.PI:1;for(let K=0,j=d.length;K<j;K++){const B=d[K],W=B.color,V=B.intensity,Q=B.distance,X=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=W.r*V*y,p+=W.g*V*y,g+=W.b*V*y;else if(B.isLightProbe)for(let Y=0;Y<9;Y++)o.probe[Y].addScaledVector(B.sh.coefficients[Y],V);else if(B.isDirectionalLight){const Y=t.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity*y),B.castShadow){const J=B.shadow,Z=n.get(B);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,o.directionalShadow[_]=Z,o.directionalShadowMap[_]=X,o.directionalShadowMatrix[_]=B.shadow.matrix,T++}o.directional[_]=Y,_++}else if(B.isSpotLight){const Y=t.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(W).multiplyScalar(V*y),Y.distance=Q,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,o.spot[m]=Y;const J=B.shadow;if(B.map&&(o.spotLightMap[A]=B.map,A++,J.updateMatrices(B),B.castShadow&&F++),o.spotLightMatrix[m]=J.matrix,B.castShadow){const Z=n.get(B);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,o.spotShadow[m]=Z,o.spotShadowMap[m]=X,R++}m++}else if(B.isRectAreaLight){const Y=t.get(B);Y.color.copy(W).multiplyScalar(V),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),o.rectArea[S]=Y,S++}else if(B.isPointLight){const Y=t.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity*y),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){const J=B.shadow,Z=n.get(B);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,o.pointShadow[f]=Z,o.pointShadowMap[f]=X,o.pointShadowMatrix[f]=B.shadow.matrix,E++}o.point[f]=Y,f++}else if(B.isHemisphereLight){const Y=t.get(B);Y.skyColor.copy(B.color).multiplyScalar(V*y),Y.groundColor.copy(B.groundColor).multiplyScalar(V*y),o.hemi[b]=Y,b++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=ue.LTC_FLOAT_1,o.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=ue.LTC_HALF_1,o.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=u,o.ambient[1]=p,o.ambient[2]=g;const w=o.hash;(w.directionalLength!==_||w.pointLength!==f||w.spotLength!==m||w.rectAreaLength!==S||w.hemiLength!==b||w.numDirectionalShadows!==T||w.numPointShadows!==E||w.numSpotShadows!==R||w.numSpotMaps!==A)&&(o.directional.length=_,o.spot.length=m,o.rectArea.length=S,o.point.length=f,o.hemi.length=b,o.directionalShadow.length=T,o.directionalShadowMap.length=T,o.pointShadow.length=E,o.pointShadowMap.length=E,o.spotShadow.length=R,o.spotShadowMap.length=R,o.directionalShadowMatrix.length=T,o.pointShadowMatrix.length=E,o.spotLightMatrix.length=R+A-F,o.spotLightMap.length=A,o.numSpotLightShadowsWithMaps=F,w.directionalLength=_,w.pointLength=f,w.spotLength=m,w.rectAreaLength=S,w.hemiLength=b,w.numDirectionalShadows=T,w.numPointShadows=E,w.numSpotShadows=R,w.numSpotMaps=A,o.version=tp++)}function c(d,h){let u=0,p=0,g=0,_=0,f=0;const m=h.matrixWorldInverse;for(let S=0,b=d.length;S<b;S++){const T=d[S];if(T.isDirectionalLight){const E=o.directional[u];E.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),u++}else if(T.isSpotLight){const E=o.spot[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),g++}else if(T.isRectAreaLight){const E=o.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),s.identity(),r.copy(T.matrixWorld),r.premultiply(m),s.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),_++}else if(T.isPointLight){const E=o.point[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const E=o.hemi[f];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),f++}}}return{setup:l,setupView:c,state:o}}function Kr(i,e){const t=new ip(i,e),n=[],o=[];function a(){n.length=0,o.length=0}function r(h){n.push(h)}function s(h){o.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:o,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:s}}function op(i,e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let l;return s===void 0?(l=new Kr(i,e),t.set(a,[l])):r>=s.length?(l=new Kr(i,e),s.push(l)):l=s[r],l}function o(){t=new WeakMap}return{get:n,dispose:o}}class ap extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sp extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lp=`uniform sampler2D shadow_pass;
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
}`;function cp(i,e,t){let n=new Nl;const o=new Ve,a=new Ve,r=new At,s=new ap({depthPacking:Gc}),l=new sp,c={},d=t.maxTextureSize,h={[Zn]:Bt,[Bt]:Zn,[Ln]:Ln},u=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:rp,fragmentShader:lp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zn(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let m=this.type;this.render=function(E,R,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const F=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Dn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const j=m!==Cn&&this.type===Cn,B=m===Cn&&this.type!==Cn;for(let W=0,V=E.length;W<V;W++){const Q=E[W],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const Y=X.getFrameExtents();if(o.multiply(Y),a.copy(X.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(a.x=Math.floor(d/Y.x),o.x=a.x*Y.x,X.mapSize.x=a.x),o.y>d&&(a.y=Math.floor(d/Y.y),o.y=a.y*Y.y,X.mapSize.y=a.y)),X.map===null||j===!0||B===!0){const Z=this.type!==Cn?{minFilter:Ut,magFilter:Ut}:{};X.map!==null&&X.map.dispose(),X.map=new dn(o.x,o.y,Z),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const J=X.getViewportCount();for(let Z=0;Z<J;Z++){const U=X.getViewport(Z);r.set(a.x*U.x,a.y*U.y,a.x*U.z,a.y*U.w),K.viewport(r),X.updateMatrices(Q,Z),n=X.getFrustum(),T(R,A,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Cn&&S(X,A),X.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(F,y,w)};function S(E,R){const A=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new dn(o.x,o.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,A,u,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,A,p,_,null)}function b(E,R,A,F){let y=null;const w=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)y=w;else if(y=A.isPointLight===!0?l:s,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=y.uuid,j=R.uuid;let B=c[K];B===void 0&&(B={},c[K]=B);let W=B[j];W===void 0&&(W=y.clone(),B[j]=W),y=W}if(y.visible=R.visible,y.wireframe=R.wireframe,F===Cn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=i.properties.get(y);K.light=A}return y}function T(E,R,A,F,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Cn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const j=e.update(E),B=E.material;if(Array.isArray(B)){const W=j.groups;for(let V=0,Q=W.length;V<Q;V++){const X=W[V],Y=B[X.materialIndex];if(Y&&Y.visible){const J=b(E,Y,F,y);i.renderBufferDirect(A,null,j,J,E,X)}}}else if(B.visible){const W=b(E,B,F,y);i.renderBufferDirect(A,null,j,W,E,null)}}const K=E.children;for(let j=0,B=K.length;j<B;j++)T(K[j],R,A,F,y)}}function dp(i,e,t){const n=t.isWebGL2;function o(){let k=!1;const se=new At;let O=null;const ie=new At(0,0,0,0);return{setMask:function(le){O!==le&&!k&&(i.colorMask(le,le,le,le),O=le)},setLocked:function(le){k=le},setClear:function(le,We,nt,it,Jt){Jt===!0&&(le*=it,We*=it,nt*=it),se.set(le,We,nt,it),ie.equals(se)===!1&&(i.clearColor(le,We,nt,it),ie.copy(se))},reset:function(){k=!1,O=null,ie.set(-1,0,0,0)}}}function a(){let k=!1,se=null,O=null,ie=null;return{setTest:function(le){le?Ae(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(le){se!==le&&!k&&(i.depthMask(le),se=le)},setFunc:function(le){if(O!==le){switch(le){case vc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case bc:i.depthFunc(i.LESS);break;case Ka:i.depthFunc(i.LEQUAL);break;case yc:i.depthFunc(i.EQUAL);break;case xc:i.depthFunc(i.GEQUAL);break;case wc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=le}},setLocked:function(le){k=le},setClear:function(le){ie!==le&&(i.clearDepth(le),ie=le)},reset:function(){k=!1,se=null,O=null,ie=null}}}function r(){let k=!1,se=null,O=null,ie=null,le=null,We=null,nt=null,it=null,Jt=null;return{setTest:function($e){k||($e?Ae(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function($e){se!==$e&&!k&&(i.stencilMask($e),se=$e)},setFunc:function($e,wt,Mt){(O!==$e||ie!==wt||le!==Mt)&&(i.stencilFunc($e,wt,Mt),O=$e,ie=wt,le=Mt)},setOp:function($e,wt,Mt){(We!==$e||nt!==wt||it!==Mt)&&(i.stencilOp($e,wt,Mt),We=$e,nt=wt,it=Mt)},setLocked:function($e){k=$e},setClear:function($e){Jt!==$e&&(i.clearStencil($e),Jt=$e)},reset:function(){k=!1,se=null,O=null,ie=null,le=null,We=null,nt=null,it=null,Jt=null}}}const s=new o,l=new a,c=new r,d=new WeakMap,h=new WeakMap;let u={},p={},g=new WeakMap,_=[],f=null,m=!1,S=null,b=null,T=null,E=null,R=null,A=null,F=null,y=!1,w=null,K=null,j=null,B=null,W=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,X=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=X>=2);let J=null,Z={};const U=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),de=new At().fromArray(U),ce=new At().fromArray(q);function he(k,se,O,ie){const le=new Uint8Array(4),We=i.createTexture();i.bindTexture(k,We),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<O;nt++)n&&(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(se+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return We}const Me={};Me[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(i.DEPTH_TEST),l.setFunc(Ka),ke(!1),qe(Ds),Ae(i.CULL_FACE),_e(Dn);function Ae(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Re(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function je(k,se){return p[k]!==se?(i.bindFramebuffer(k,se),p[k]=se,n&&(k===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=se),k===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function ft(k,se){let O=_,ie=!1;if(k)if(O=g.get(se),O===void 0&&(O=[],g.set(se,O)),k.isWebGLMultipleRenderTargets){const le=k.texture;if(O.length!==le.length||O[0]!==i.COLOR_ATTACHMENT0){for(let We=0,nt=le.length;We<nt;We++)O[We]=i.COLOR_ATTACHMENT0+We;O.length=le.length,ie=!0}}else O[0]!==i.COLOR_ATTACHMENT0&&(O[0]=i.COLOR_ATTACHMENT0,ie=!0);else O[0]!==i.BACK&&(O[0]=i.BACK,ie=!0);ie&&(t.isWebGL2?i.drawBuffers(O):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(O))}function Fe(k){return f!==k?(i.useProgram(k),f=k,!0):!1}const D={[zi]:i.FUNC_ADD,[sc]:i.FUNC_SUBTRACT,[rc]:i.FUNC_REVERSE_SUBTRACT};if(n)D[Ns]=i.MIN,D[Fs]=i.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(D[Ns]=k.MIN_EXT,D[Fs]=k.MAX_EXT)}const ut={[lc]:i.ZERO,[cc]:i.ONE,[dc]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[gc]:i.SRC_ALPHA_SATURATE,[fc]:i.DST_COLOR,[hc]:i.DST_ALPHA,[uc]:i.ONE_MINUS_SRC_COLOR,[pl]:i.ONE_MINUS_SRC_ALPHA,[pc]:i.ONE_MINUS_DST_COLOR,[mc]:i.ONE_MINUS_DST_ALPHA};function _e(k,se,O,ie,le,We,nt,it){if(k===Dn){m===!0&&(Re(i.BLEND),m=!1);return}if(m===!1&&(Ae(i.BLEND),m=!0),k!==ac){if(k!==S||it!==y){if((b!==zi||R!==zi)&&(i.blendEquation(i.FUNC_ADD),b=zi,R=zi),it)switch(k){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case Us:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Is:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Us:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Is:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}T=null,E=null,A=null,F=null,S=k,y=it}return}le=le||se,We=We||O,nt=nt||ie,(se!==b||le!==R)&&(i.blendEquationSeparate(D[se],D[le]),b=se,R=le),(O!==T||ie!==E||We!==A||nt!==F)&&(i.blendFuncSeparate(ut[O],ut[ie],ut[We],ut[nt]),T=O,E=ie,A=We,F=nt),S=k,y=!1}function Pe(k,se){k.side===Ln?Re(i.CULL_FACE):Ae(i.CULL_FACE);let O=k.side===Bt;se&&(O=!O),ke(O),k.blending===Ni&&k.transparent===!1?_e(Dn):_e(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),s.setMask(k.colorWrite);const ie=k.stencilWrite;c.setTest(ie),ie&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ae(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(k){w!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),w=k)}function qe(k){k!==nc?(Ae(i.CULL_FACE),k!==K&&(k===Ds?i.cullFace(i.BACK):k===ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),K=k}function He(k){k!==j&&(Q&&i.lineWidth(k),j=k)}function De(k,se,O){k?(Ae(i.POLYGON_OFFSET_FILL),(B!==se||W!==O)&&(i.polygonOffset(se,O),B=se,W=O)):Re(i.POLYGON_OFFSET_FILL)}function Qe(k){k?Ae(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function gt(k){k===void 0&&(k=i.TEXTURE0+V-1),J!==k&&(i.activeTexture(k),J=k)}function ct(k,se,O){O===void 0&&(J===null?O=i.TEXTURE0+V-1:O=J);let ie=Z[O];ie===void 0&&(ie={type:void 0,texture:void 0},Z[O]=ie),(ie.type!==k||ie.texture!==se)&&(J!==O&&(i.activeTexture(O),J=O),i.bindTexture(k,se||Me[k]),ie.type=k,ie.texture=se)}function M(){const k=Z[J];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function v(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function I(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function N(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(k){de.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),de.copy(k))}function pe(k){ce.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ce.copy(k))}function fe(k,se){let O=h.get(se);O===void 0&&(O=new WeakMap,h.set(se,O));let ie=O.get(k);ie===void 0&&(ie=i.getUniformBlockIndex(se,k.name),O.set(k,ie))}function Ue(k,se){const ie=h.get(se).get(k);d.get(se)!==ie&&(i.uniformBlockBinding(se,ie,k.__bindingPointIndex),d.set(se,ie))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},J=null,Z={},p={},g=new WeakMap,_=[],f=null,m=!1,S=null,b=null,T=null,E=null,R=null,A=null,F=null,y=!1,w=null,K=null,j=null,B=null,W=null,de.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ae,disable:Re,bindFramebuffer:je,drawBuffers:ft,useProgram:Fe,setBlending:_e,setMaterial:Pe,setFlipSided:ke,setCullFace:qe,setLineWidth:He,setPolygonOffset:De,setScissorTest:Qe,activeTexture:gt,bindTexture:ct,unbindTexture:M,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:ve,texImage3D:be,updateUBOMapping:fe,uniformBlockBinding:Ue,texStorage2D:te,texStorage3D:N,texSubImage2D:ne,texSubImage3D:$,compressedTexSubImage2D:ee,compressedTexSubImage3D:me,scissor:ge,viewport:pe,reset:et}}function up(i,e,t,n,o,a,r){const s=o.isWebGL2,l=o.maxTextures,c=o.maxCubemapSize,d=o.maxTextureSize,h=o.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,v){return m?new OffscreenCanvas(M,v):fo("canvas")}function b(M,v,I,ne){let $=1;if((M.width>ne||M.height>ne)&&($=ne/Math.max(M.width,M.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ee=v?oa:Math.floor,me=ee($*M.width),te=ee($*M.height);_===void 0&&(_=S(me,te));const N=I?S(me,te):_;return N.width=me,N.height=te,N.getContext("2d").drawImage(M,0,0,me,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+me+"x"+te+")."),N}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function T(M){return ts(M.width)&&ts(M.height)}function E(M){return s?!1:M.wrapS!==ln||M.wrapT!==ln||M.minFilter!==Ut&&M.minFilter!==Yt}function R(M,v){return M.generateMipmaps&&v&&M.minFilter!==Ut&&M.minFilter!==Yt}function A(M){i.generateMipmap(M)}function F(M,v,I,ne,$=!1){if(s===!1)return v;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ee=v;return v===i.RED&&(I===i.FLOAT&&(ee=i.R32F),I===i.HALF_FLOAT&&(ee=i.R16F),I===i.UNSIGNED_BYTE&&(ee=i.R8)),v===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(ee=i.R8UI),I===i.UNSIGNED_SHORT&&(ee=i.R16UI),I===i.UNSIGNED_INT&&(ee=i.R32UI),I===i.BYTE&&(ee=i.R8I),I===i.SHORT&&(ee=i.R16I),I===i.INT&&(ee=i.R32I)),v===i.RG&&(I===i.FLOAT&&(ee=i.RG32F),I===i.HALF_FLOAT&&(ee=i.RG16F),I===i.UNSIGNED_BYTE&&(ee=i.RG8)),v===i.RGBA&&(I===i.FLOAT&&(ee=i.RGBA32F),I===i.HALF_FLOAT&&(ee=i.RGBA16F),I===i.UNSIGNED_BYTE&&(ee=ne===Be&&$===!1?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)),(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(M,v,I){return R(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==Ut&&M.minFilter!==Yt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function w(M){return M===Ut||M===Os||M===_a?i.NEAREST:i.LINEAR}function K(M){const v=M.target;v.removeEventListener("dispose",K),B(v),v.isVideoTexture&&g.delete(v)}function j(M){const v=M.target;v.removeEventListener("dispose",j),V(v)}function B(M){const v=n.get(M);if(v.__webglInit===void 0)return;const I=M.source,ne=f.get(I);if(ne){const $=ne[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&W(M),Object.keys(ne).length===0&&f.delete(I)}n.remove(M)}function W(M){const v=n.get(M);i.deleteTexture(v.__webglTexture);const I=M.source,ne=f.get(I);delete ne[v.__cacheKey],r.memory.textures--}function V(M){const v=M.texture,I=n.get(M),ne=n.get(v);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),r.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(I.__webglFramebuffer[$]))for(let ee=0;ee<I.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(I.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(I.__webglFramebuffer[$]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[$])}else{if(Array.isArray(I.__webglFramebuffer))for(let $=0;$<I.__webglFramebuffer.length;$++)i.deleteFramebuffer(I.__webglFramebuffer[$]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let $=0;$<I.__webglColorRenderbuffer.length;$++)I.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[$]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let $=0,ee=v.length;$<ee;$++){const me=n.get(v[$]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),r.memory.textures--),n.remove(v[$])}n.remove(v),n.remove(M)}let Q=0;function X(){Q=0}function Y(){const M=Q;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),Q+=1,M}function J(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function Z(M,v){const I=n.get(M);if(M.isVideoTexture&&gt(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const ne=M.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(I,M,v);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+v)}function U(M,v){const I=n.get(M);if(M.version>0&&I.__version!==M.version){je(I,M,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+v)}function q(M,v){const I=n.get(M);if(M.version>0&&I.__version!==M.version){je(I,M,v);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+v)}function de(M,v){const I=n.get(M);if(M.version>0&&I.__version!==M.version){ft(I,M,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+v)}const ce={[Qa]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},he={[Ut]:i.NEAREST,[Os]:i.NEAREST_MIPMAP_NEAREST,[_a]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[Lc]:i.LINEAR_MIPMAP_NEAREST,[ho]:i.LINEAR_MIPMAP_LINEAR},Me={[qc]:i.NEVER,[$c]:i.ALWAYS,[Xc]:i.LESS,[Kc]:i.LEQUAL,[Yc]:i.EQUAL,[Qc]:i.GEQUAL,[Zc]:i.GREATER,[Jc]:i.NOTEQUAL};function Ae(M,v,I){if(I?(i.texParameteri(M,i.TEXTURE_WRAP_S,ce[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ce[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ce[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,he[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,he[v.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==ln||v.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,w(v.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Ut&&v.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ut||v.minFilter!==_a&&v.minFilter!==ho||v.type===Xn&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===Un&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(M,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,o.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Re(M,v){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",K));const ne=v.source;let $=f.get(ne);$===void 0&&($={},f.set(ne,$));const ee=J(v);if(ee!==M.__cacheKey){$[ee]===void 0&&($[ee]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,I=!0),$[ee].usedTimes++;const me=$[M.__cacheKey];me!==void 0&&($[M.__cacheKey].usedTimes--,me.usedTimes===0&&W(v)),M.__cacheKey=ee,M.__webglTexture=$[ee].texture}return I}function je(M,v,I){let ne=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=i.TEXTURE_3D);const $=Re(M,v),ee=v.source;t.bindTexture(ne,M.__webglTexture,i.TEXTURE0+I);const me=n.get(ee);if(ee.version!==me.__version||$===!0){t.activeTexture(i.TEXTURE0+I),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const te=E(v)&&T(v.image)===!1;let N=b(v.image,te,!1,d);N=ct(v,N);const ve=T(N)||s,be=a.convert(v.format,v.colorSpace);let ge=a.convert(v.type),pe=F(v.internalFormat,be,ge,v.colorSpace);Ae(ne,v,ve);let fe;const Ue=v.mipmaps,et=s&&v.isVideoTexture!==!0,k=me.__version===void 0||$===!0,se=y(v,N,ve);if(v.isDepthTexture)pe=i.DEPTH_COMPONENT,s?v.type===Xn?pe=i.DEPTH_COMPONENT32F:v.type===qn?pe=i.DEPTH_COMPONENT24:v.type===li?pe=i.DEPTH24_STENCIL8:pe=i.DEPTH_COMPONENT16:v.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ci&&pe===i.DEPTH_COMPONENT&&v.type!==ls&&v.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=qn,ge=a.convert(v.type)),v.format===Hi&&pe===i.DEPTH_COMPONENT&&(pe=i.DEPTH_STENCIL,v.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=li,ge=a.convert(v.type))),k&&(et?t.texStorage2D(i.TEXTURE_2D,1,pe,N.width,N.height):t.texImage2D(i.TEXTURE_2D,0,pe,N.width,N.height,0,be,ge,null));else if(v.isDataTexture)if(Ue.length>0&&ve){et&&k&&t.texStorage2D(i.TEXTURE_2D,se,pe,Ue[0].width,Ue[0].height);for(let O=0,ie=Ue.length;O<ie;O++)fe=Ue[O],et?t.texSubImage2D(i.TEXTURE_2D,O,0,0,fe.width,fe.height,be,ge,fe.data):t.texImage2D(i.TEXTURE_2D,O,pe,fe.width,fe.height,0,be,ge,fe.data);v.generateMipmaps=!1}else et?(k&&t.texStorage2D(i.TEXTURE_2D,se,pe,N.width,N.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,N.width,N.height,be,ge,N.data)):t.texImage2D(i.TEXTURE_2D,0,pe,N.width,N.height,0,be,ge,N.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){et&&k&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,pe,Ue[0].width,Ue[0].height,N.depth);for(let O=0,ie=Ue.length;O<ie;O++)fe=Ue[O],v.format!==cn?be!==null?et?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,N.depth,be,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,pe,fe.width,fe.height,N.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,N.depth,be,ge,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,pe,fe.width,fe.height,N.depth,0,be,ge,fe.data)}else{et&&k&&t.texStorage2D(i.TEXTURE_2D,se,pe,Ue[0].width,Ue[0].height);for(let O=0,ie=Ue.length;O<ie;O++)fe=Ue[O],v.format!==cn?be!==null?et?t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,fe.width,fe.height,be,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,O,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(i.TEXTURE_2D,O,0,0,fe.width,fe.height,be,ge,fe.data):t.texImage2D(i.TEXTURE_2D,O,pe,fe.width,fe.height,0,be,ge,fe.data)}else if(v.isDataArrayTexture)et?(k&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,pe,N.width,N.height,N.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,be,ge,N.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,N.width,N.height,N.depth,0,be,ge,N.data);else if(v.isData3DTexture)et?(k&&t.texStorage3D(i.TEXTURE_3D,se,pe,N.width,N.height,N.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,be,ge,N.data)):t.texImage3D(i.TEXTURE_3D,0,pe,N.width,N.height,N.depth,0,be,ge,N.data);else if(v.isFramebufferTexture){if(k)if(et)t.texStorage2D(i.TEXTURE_2D,se,pe,N.width,N.height);else{let O=N.width,ie=N.height;for(let le=0;le<se;le++)t.texImage2D(i.TEXTURE_2D,le,pe,O,ie,0,be,ge,null),O>>=1,ie>>=1}}else if(Ue.length>0&&ve){et&&k&&t.texStorage2D(i.TEXTURE_2D,se,pe,Ue[0].width,Ue[0].height);for(let O=0,ie=Ue.length;O<ie;O++)fe=Ue[O],et?t.texSubImage2D(i.TEXTURE_2D,O,0,0,be,ge,fe):t.texImage2D(i.TEXTURE_2D,O,pe,be,ge,fe);v.generateMipmaps=!1}else et?(k&&t.texStorage2D(i.TEXTURE_2D,se,pe,N.width,N.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,ge,N)):t.texImage2D(i.TEXTURE_2D,0,pe,be,ge,N);R(v,ve)&&A(ne),me.__version=ee.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ft(M,v,I){if(v.image.length!==6)return;const ne=Re(M,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+I);const ee=n.get($);if($.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+I),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const me=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,N=[];for(let O=0;O<6;O++)!me&&!te?N[O]=b(v.image[O],!1,!0,c):N[O]=te?v.image[O].image:v.image[O],N[O]=ct(v,N[O]);const ve=N[0],be=T(ve)||s,ge=a.convert(v.format,v.colorSpace),pe=a.convert(v.type),fe=F(v.internalFormat,ge,pe,v.colorSpace),Ue=s&&v.isVideoTexture!==!0,et=ee.__version===void 0||ne===!0;let k=y(v,ve,be);Ae(i.TEXTURE_CUBE_MAP,v,be);let se;if(me){Ue&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,k,fe,ve.width,ve.height);for(let O=0;O<6;O++){se=N[O].mipmaps;for(let ie=0;ie<se.length;ie++){const le=se[ie];v.format!==cn?ge!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,fe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,0,0,le.width,le.height,ge,pe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,fe,le.width,le.height,0,ge,pe,le.data)}}}else{se=v.mipmaps,Ue&&et&&(se.length>0&&k++,t.texStorage2D(i.TEXTURE_CUBE_MAP,k,fe,N[0].width,N[0].height));for(let O=0;O<6;O++)if(te){Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,N[O].width,N[O].height,ge,pe,N[O].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,fe,N[O].width,N[O].height,0,ge,pe,N[O].data);for(let ie=0;ie<se.length;ie++){const We=se[ie].image[O].image;Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,0,0,We.width,We.height,ge,pe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,fe,We.width,We.height,0,ge,pe,We.data)}}else{Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ge,pe,N[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,fe,ge,pe,N[O]);for(let ie=0;ie<se.length;ie++){const le=se[ie];Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,0,0,ge,pe,le.image[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,fe,ge,pe,le.image[O])}}}R(v,be)&&A(i.TEXTURE_CUBE_MAP),ee.__version=$.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Fe(M,v,I,ne,$,ee){const me=a.convert(I.format,I.colorSpace),te=a.convert(I.type),N=F(I.internalFormat,me,te,I.colorSpace);if(!n.get(v).__hasExternalTextures){const be=Math.max(1,v.width>>ee),ge=Math.max(1,v.height>>ee);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ee,N,be,ge,v.depth,0,me,te,null):t.texImage2D($,ee,N,be,ge,0,me,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),Qe(v)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,$,n.get(I).__webglTexture,0,De(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,$,n.get(I).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(M,v,I){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let ne=i.DEPTH_COMPONENT16;if(I||Qe(v)){const $=v.depthTexture;$&&$.isDepthTexture&&($.type===Xn?ne=i.DEPTH_COMPONENT32F:$.type===qn&&(ne=i.DEPTH_COMPONENT24));const ee=De(v);Qe(v)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,ne,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,ne,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){const ne=De(v);I&&Qe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,v.width,v.height):Qe(v)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const ne=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<ne.length;$++){const ee=ne[$],me=a.convert(ee.format,ee.colorSpace),te=a.convert(ee.type),N=F(ee.internalFormat,me,te,ee.colorSpace),ve=De(v);I&&Qe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,N,v.width,v.height):Qe(v)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,N,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,N,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const ne=n.get(v.depthTexture).__webglTexture,$=De(v);if(v.depthTexture.format===ci)Qe(v)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(v.depthTexture.format===Hi)Qe(v)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function _e(M){const v=n.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ut(v.__webglFramebuffer,M)}else if(I){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]=i.createRenderbuffer(),D(v.__webglDepthbuffer[ne],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),D(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(M,v,I){const ne=n.get(M);v!==void 0&&Fe(ne.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&_e(M)}function ke(M){const v=M.texture,I=n.get(M),ne=n.get(v);M.addEventListener("dispose",j),M.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=v.version,r.memory.textures++);const $=M.isWebGLCubeRenderTarget===!0,ee=M.isWebGLMultipleRenderTargets===!0,me=T(M)||s;if($){I.__webglFramebuffer=[];for(let te=0;te<6;te++)if(s&&v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[te]=[];for(let N=0;N<v.mipmaps.length;N++)I.__webglFramebuffer[te][N]=i.createFramebuffer()}else I.__webglFramebuffer[te]=i.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let te=0;te<v.mipmaps.length;te++)I.__webglFramebuffer[te]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ee)if(o.drawBuffers){const te=M.texture;for(let N=0,ve=te.length;N<ve;N++){const be=n.get(te[N]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&M.samples>0&&Qe(M)===!1){const te=ee?v:[v];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let N=0;N<te.length;N++){const ve=te[N];I.__webglColorRenderbuffer[N]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[N]);const be=a.convert(ve.format,ve.colorSpace),ge=a.convert(ve.type),pe=F(ve.internalFormat,be,ge,ve.colorSpace,M.isXRRenderTarget===!0),fe=De(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,pe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,I.__webglColorRenderbuffer[N])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),D(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,v,me);for(let te=0;te<6;te++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let N=0;N<v.mipmaps.length;N++)Fe(I.__webglFramebuffer[te][N],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,N);else Fe(I.__webglFramebuffer[te],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);R(v,me)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const te=M.texture;for(let N=0,ve=te.length;N<ve;N++){const be=te[N],ge=n.get(be);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),Ae(i.TEXTURE_2D,be,me),Fe(I.__webglFramebuffer,M,be,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,0),R(be,me)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(s?te=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,ne.__webglTexture),Ae(te,v,me),s&&v.mipmaps&&v.mipmaps.length>0)for(let N=0;N<v.mipmaps.length;N++)Fe(I.__webglFramebuffer[N],M,v,i.COLOR_ATTACHMENT0,te,N);else Fe(I.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,te,0);R(v,me)&&A(te),t.unbindTexture()}M.depthBuffer&&_e(M)}function qe(M){const v=T(M)||s,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0,$=I.length;ne<$;ne++){const ee=I[ne];if(R(ee,v)){const me=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,te=n.get(ee).__webglTexture;t.bindTexture(me,te),A(me),t.unbindTexture()}}}function He(M){if(s&&M.samples>0&&Qe(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,ne=M.height;let $=i.COLOR_BUFFER_BIT;const ee=[],me=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(M),N=M.isWebGLMultipleRenderTargets===!0;if(N)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){ee.push(i.COLOR_ATTACHMENT0+ve),M.depthBuffer&&ee.push(me);const be=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(be===!1&&(M.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),N&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[ve]),be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),N){const ge=n.get(v[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,I,ne,0,0,I,ne,$,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),N)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,te.__webglColorRenderbuffer[ve]);const be=n.get(v[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function De(M){return Math.min(h,M.samples)}function Qe(M){const v=n.get(M);return s&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function gt(M){const v=r.render.frame;g.get(M)!==v&&(g.set(M,v),M.update())}function ct(M,v){const I=M.colorSpace,ne=M.format,$=M.type;return M.isCompressedTexture===!0||M.format===es||I!==bn&&I!==ui&&(I===Be?s===!1?e.has("EXT_sRGB")===!0&&ne===cn?(M.format=es,M.minFilter=Yt,M.generateMipmaps=!1):v=kl.sRGBToLinear(v):(ne!==cn||$!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=U,this.setTexture3D=q,this.setTextureCube=de,this.rebindTextures=Pe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Qe}function hp(i,e,t){const n=t.isWebGL2;function o(a,r=ui){let s;if(a===Kn)return i.UNSIGNED_BYTE;if(a===bl)return i.UNSIGNED_SHORT_4_4_4_4;if(a===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Pc)return i.BYTE;if(a===zc)return i.SHORT;if(a===ls)return i.UNSIGNED_SHORT;if(a===_l)return i.INT;if(a===qn)return i.UNSIGNED_INT;if(a===Xn)return i.FLOAT;if(a===Un)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Dc)return i.ALPHA;if(a===cn)return i.RGBA;if(a===Uc)return i.LUMINANCE;if(a===Ic)return i.LUMINANCE_ALPHA;if(a===ci)return i.DEPTH_COMPONENT;if(a===Hi)return i.DEPTH_STENCIL;if(a===es)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Nc)return i.RED;if(a===xl)return i.RED_INTEGER;if(a===Fc)return i.RG;if(a===wl)return i.RG_INTEGER;if(a===Ml)return i.RGBA_INTEGER;if(a===ba||a===ya||a===xa||a===wa)if(r===Be)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Bs||a===Hs||a===Gs||a===Vs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Bs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Hs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Gs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Vs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Oc)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ws||a===js)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Ws)return r===Be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===js)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===qs||a===Xs||a===Ys||a===Ks||a===Zs||a===Js||a===Qs||a===$s||a===er||a===tr||a===nr||a===ir||a===or||a===ar)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===qs)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Xs)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ys)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ks)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Zs)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Js)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qs)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$s)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===er)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===tr)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===nr)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ir)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===or)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ar)return r===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ma)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Ma)return r===Be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Bc||a===sr||a===rr||a===lr)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Ma)return s.COMPRESSED_RED_RGTC1_EXT;if(a===sr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===rr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===lr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===li?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:o}}class mp extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class to extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fp={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,r=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),m=this._getHandJoint(c,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(s.matrix.fromArray(o.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,o.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(o.linearVelocity)):s.hasLinearVelocity=!1,o.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(o.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return s!==null&&(s.visible=o!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new to;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pp extends Ht{constructor(e,t,n,o,a,r,s,l,c,d){if(d=d!==void 0?d:ci,d!==ci&&d!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ci&&(n=qn),n===void 0&&d===Hi&&(n=li),super(null,o,a,r,s,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gp extends Wi{constructor(e,t){super();const n=this;let o=null,a=1,r=null,s="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const _=t.getContextAttributes();let f=null,m=null;const S=[],b=[],T=new Kt;T.layers.enable(1),T.viewport=new At;const E=new Kt;E.layers.enable(2),E.viewport=new At;const R=[T,E],A=new mp;A.layers.enable(1),A.layers.enable(2);let F=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let q=S[U];return q===void 0&&(q=new ja,S[U]=q),q.getTargetRaySpace()},this.getControllerGrip=function(U){let q=S[U];return q===void 0&&(q=new ja,S[U]=q),q.getGripSpace()},this.getHand=function(U){let q=S[U];return q===void 0&&(q=new ja,S[U]=q),q.getHandSpace()};function w(U){const q=b.indexOf(U.inputSource);if(q===-1)return;const de=S[q];de!==void 0&&(de.update(U.inputSource,U.frame,c||r),de.dispatchEvent({type:U.type,data:U.inputSource}))}function K(){o.removeEventListener("select",w),o.removeEventListener("selectstart",w),o.removeEventListener("selectend",w),o.removeEventListener("squeeze",w),o.removeEventListener("squeezestart",w),o.removeEventListener("squeezeend",w),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",j);for(let U=0;U<S.length;U++){const q=b[U];q!==null&&(b[U]=null,S[U].disconnect(q))}F=null,y=null,e.setRenderTarget(f),p=null,u=null,h=null,o=null,m=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(U){if(o=U,o!==null){if(f=e.getRenderTarget(),o.addEventListener("select",w),o.addEventListener("selectstart",w),o.addEventListener("selectend",w),o.addEventListener("squeeze",w),o.addEventListener("squeezestart",w),o.addEventListener("squeezeend",w),o.addEventListener("end",K),o.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:o.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(o,t,q),o.updateRenderState({baseLayer:p}),m=new dn(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,de=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?Hi:ci,de=_.stencil?li:qn);const he={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:a};h=new XRWebGLBinding(o,t),u=h.createProjectionLayer(he),o.updateRenderState({layers:[u]}),m=new dn(u.textureWidth,u.textureHeight,{format:cn,type:Kn,depthTexture:new pp(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Me=e.properties.get(m);Me.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await o.requestReferenceSpace(s),Z.setContext(o),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function j(U){for(let q=0;q<U.removed.length;q++){const de=U.removed[q],ce=b.indexOf(de);ce>=0&&(b[ce]=null,S[ce].disconnect(de))}for(let q=0;q<U.added.length;q++){const de=U.added[q];let ce=b.indexOf(de);if(ce===-1){for(let Me=0;Me<S.length;Me++)if(Me>=b.length){b.push(de),ce=Me;break}else if(b[Me]===null){b[Me]=de,ce=Me;break}if(ce===-1)break}const he=S[ce];he&&he.connect(de)}}const B=new z,W=new z;function V(U,q,de){B.setFromMatrixPosition(q.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);const ce=B.distanceTo(W),he=q.projectionMatrix.elements,Me=de.projectionMatrix.elements,Ae=he[14]/(he[10]-1),Re=he[14]/(he[10]+1),je=(he[9]+1)/he[5],ft=(he[9]-1)/he[5],Fe=(he[8]-1)/he[0],D=(Me[8]+1)/Me[0],ut=Ae*Fe,_e=Ae*D,Pe=ce/(-Fe+D),ke=Pe*-Fe;q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ke),U.translateZ(Pe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const qe=Ae+Pe,He=Re+Pe,De=ut-ke,Qe=_e+(ce-ke),gt=je*Re/He*qe,ct=ft*Re/He*qe;U.projectionMatrix.makePerspective(De,Qe,gt,ct,qe,He),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function Q(U,q){q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(o===null)return;A.near=E.near=T.near=U.near,A.far=E.far=T.far=U.far,(F!==A.near||y!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,y=A.far);const q=U.parent,de=A.cameras;Q(A,q);for(let ce=0;ce<de.length;ce++)Q(de[ce],q);de.length===2?V(A,T,E):A.projectionMatrix.copy(T.projectionMatrix),X(U,A,q)};function X(U,q,de){de===null?U.matrix.copy(q.matrixWorld):(U.matrix.copy(de.matrixWorld),U.matrix.invert(),U.matrix.multiply(q.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0);const ce=U.children;for(let he=0,Me=ce.length;he<Me;he++)ce[he].updateMatrixWorld(!0);U.projectionMatrix.copy(q.projectionMatrix),U.projectionMatrixInverse.copy(q.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=mo*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)};let Y=null;function J(U,q){if(d=q.getViewerPose(c||r),g=q,d!==null){const de=d.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let ce=!1;de.length!==A.cameras.length&&(A.cameras.length=0,ce=!0);for(let he=0;he<de.length;he++){const Me=de[he];let Ae=null;if(p!==null)Ae=p.getViewport(Me);else{const je=h.getViewSubImage(u,Me);Ae=je.viewport,he===0&&(e.setRenderTargetTextures(m,je.colorTexture,u.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(m))}let Re=R[he];Re===void 0&&(Re=new Kt,Re.layers.enable(he),Re.viewport=new At,R[he]=Re),Re.matrix.fromArray(Me.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Me.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),he===0&&(A.matrix.copy(Re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ce===!0&&A.cameras.push(Re)}}for(let de=0;de<S.length;de++){const ce=b[de],he=S[de];ce!==null&&he!==void 0&&he.update(ce,q,c||r)}Y&&Y(U,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const Z=new Fl;Z.setAnimationLoop(J),this.setAnimationLoop=function(U){Y=U},this.dispose=function(){}}}function vp(i,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Dl(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function o(f,m,S,b,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(f,m):m.isMeshToonMaterial?(a(f,m),h(f,m)):m.isMeshPhongMaterial?(a(f,m),d(f,m)):m.isMeshStandardMaterial?(a(f,m),u(f,m),m.isMeshPhysicalMaterial&&p(f,m,T)):m.isMeshMatcapMaterial?(a(f,m),g(f,m)):m.isMeshDepthMaterial?a(f,m):m.isMeshDistanceMaterial?(a(f,m),_(f,m)):m.isMeshNormalMaterial?a(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&s(f,m)):m.isPointsMaterial?l(f,m,S,b):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Bt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Bt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const S=e.get(m).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*b,t(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function s(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,S,b){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*S,f.scale.value=b*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function d(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,S){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bt&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const S=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function _p(i,e,t,n){let o={},a={},r=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,b){const T=b.program;n.uniformBlockBinding(S,T)}function c(S,b){let T=o[S.id];T===void 0&&(g(S),T=d(S),o[S.id]=T,S.addEventListener("dispose",f));const E=b.program;n.updateUBOMapping(S,E);const R=e.render.frame;a[S.id]!==R&&(u(S),a[S.id]=R)}function d(S){const b=h();S.__bindingPointIndex=b;const T=i.createBuffer(),E=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function h(){for(let S=0;S<s;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const b=o[S.id],T=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,A=T.length;R<A;R++){const F=T[R];if(p(F,R,E)===!0){const y=F.__offset,w=Array.isArray(F.value)?F.value:[F.value];let K=0;for(let j=0;j<w.length;j++){const B=w[j],W=_(B);typeof B=="number"?(F.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,y+K,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=B.elements[0],F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=B.elements[0],F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=B.elements[0]):(B.toArray(F.__data,K),K+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,y,F.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,b,T){const E=S.value;if(T[b]===void 0){if(typeof E=="number")T[b]=E;else{const R=Array.isArray(E)?E:[E],A=[];for(let F=0;F<R.length;F++)A.push(R[F].clone());T[b]=A}return!0}else if(typeof E=="number"){if(T[b]!==E)return T[b]=E,!0}else{const R=Array.isArray(T[b])?T[b]:[T[b]],A=Array.isArray(E)?E:[E];for(let F=0;F<R.length;F++){const y=R[F];if(y.equals(A[F])===!1)return y.copy(A[F]),!0}}return!1}function g(S){const b=S.uniforms;let T=0;const E=16;let R=0;for(let A=0,F=b.length;A<F;A++){const y=b[A],w={boundary:0,storage:0},K=Array.isArray(y.value)?y.value:[y.value];for(let j=0,B=K.length;j<B;j++){const W=K[j],V=_(W);w.boundary+=V.boundary,w.storage+=V.storage}if(y.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=T,A>0){R=T%E;const j=E-R;R!==0&&j-w.boundary<0&&(T+=E-R,y.__offset=T)}T+=w.storage}return R=T%E,R>0&&(T+=E-R),S.__size=T,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function f(S){const b=S.target;b.removeEventListener("dispose",f);const T=r.indexOf(b.__bindingPointIndex);r.splice(T,1),i.deleteBuffer(o[b.id]),delete o[b.id],delete a[b.id]}function m(){for(const S in o)i.deleteBuffer(o[S]);r=[],o={},a={}}return{bind:l,update:c,dispose:m}}function bp(){const i=fo("canvas");return i.style.display="block",i}class Wl{constructor(e={}){const{canvas:t=bp(),context:n=null,depth:o=!0,stencil:a=!0,alpha:r=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=r;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Be,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;const b=this;let T=!1,E=0,R=0,A=null,F=-1,y=null;const w=new At,K=new At;let j=null;const B=new Je(0);let W=0,V=t.width,Q=t.height,X=1,Y=null,J=null;const Z=new At(0,0,V,Q),U=new At(0,0,V,Q);let q=!1;const de=new Nl;let ce=!1,he=!1,Me=null;const Ae=new bt,Re=new Ve,je=new z,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return A===null?X:1}let D=n;function ut(x,L){for(let G=0;G<x.length;G++){const C=x[G],H=t.getContext(C,L);if(H!==null)return H}return null}try{const x={alpha:!0,depth:o,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rs}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",ie,!1),D===null){const L=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&L.shift(),D=ut(L,x),D===null)throw ut(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _e,Pe,ke,qe,He,De,Qe,gt,ct,M,v,I,ne,$,ee,me,te,N,ve,be,ge,pe,fe,Ue;function et(){_e=new Am(D),Pe=new wm(D,_e,e),_e.init(Pe),pe=new hp(D,_e,Pe),ke=new dp(D,_e,Pe),qe=new Lm(D),He=new Zf,De=new up(D,_e,ke,He,Pe,pe,qe),Qe=new Sm(b),gt=new km(b),ct=new Hd(D,Pe),fe=new ym(D,_e,ct,Pe),M=new Rm(D,ct,qe,fe),v=new Um(D,M,ct,qe),ve=new Dm(D,Pe,De),me=new Mm(He),I=new Kf(b,Qe,gt,_e,Pe,fe,me),ne=new vp(b,He),$=new Qf,ee=new op(_e,Pe),N=new bm(b,Qe,gt,ke,v,u,l),te=new cp(b,v,Pe),Ue=new _p(D,qe,Pe,ke),be=new xm(D,_e,qe,Pe),ge=new Cm(D,_e,qe,Pe),qe.programs=I.programs,b.capabilities=Pe,b.extensions=_e,b.properties=He,b.renderLists=$,b.shadowMap=te,b.state=ke,b.info=qe}et();const k=new gp(b,D);this.xr=k,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=_e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=_e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(V,Q,!1))},this.getSize=function(x){return x.set(V,Q)},this.setSize=function(x,L,G=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,Q=L,t.width=Math.floor(x*X),t.height=Math.floor(L*X),G===!0&&(t.style.width=x+"px",t.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(V*X,Q*X).floor()},this.setDrawingBufferSize=function(x,L,G){V=x,Q=L,X=G,t.width=Math.floor(x*G),t.height=Math.floor(L*G),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy(Z)},this.setViewport=function(x,L,G,C){x.isVector4?Z.set(x.x,x.y,x.z,x.w):Z.set(x,L,G,C),ke.viewport(w.copy(Z).multiplyScalar(X).floor())},this.getScissor=function(x){return x.copy(U)},this.setScissor=function(x,L,G,C){x.isVector4?U.set(x.x,x.y,x.z,x.w):U.set(x,L,G,C),ke.scissor(K.copy(U).multiplyScalar(X).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(x){ke.setScissorTest(q=x)},this.setOpaqueSort=function(x){Y=x},this.setTransparentSort=function(x){J=x},this.getClearColor=function(x){return x.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor.apply(N,arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha.apply(N,arguments)},this.clear=function(x=!0,L=!0,G=!0){let C=0;if(x){let H=!1;if(A!==null){const oe=A.texture.format;H=oe===Ml||oe===wl||oe===xl}if(H){const oe=A.texture.type,ye=oe===Kn||oe===qn||oe===ls||oe===li||oe===bl||oe===yl,Ee=N.getClearColor(),Te=N.getClearAlpha(),Ie=Ee.r,Se=Ee.g,ze=Ee.b;ye?(p[0]=Ie,p[1]=Se,p[2]=ze,p[3]=Te,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Ie,g[1]=Se,g[2]=ze,g[3]=Te,D.clearBufferiv(D.COLOR,0,g))}else C|=D.COLOR_BUFFER_BIT}L&&(C|=D.DEPTH_BUFFER_BIT),G&&(C|=D.STENCIL_BUFFER_BIT),D.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),$.dispose(),ee.dispose(),He.dispose(),Qe.dispose(),gt.dispose(),v.dispose(),fe.dispose(),Ue.dispose(),I.dispose(),k.dispose(),k.removeEventListener("sessionstart",$e),k.removeEventListener("sessionend",wt),Me&&(Me.dispose(),Me=null),Mt.stop()};function se(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=qe.autoReset,L=te.enabled,G=te.autoUpdate,C=te.needsUpdate,H=te.type;et(),qe.autoReset=x,te.enabled=L,te.autoUpdate=G,te.needsUpdate=C,te.type=H}function ie(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function le(x){const L=x.target;L.removeEventListener("dispose",le),We(L)}function We(x){nt(x),He.remove(x)}function nt(x){const L=He.get(x).programs;L!==void 0&&(L.forEach(function(G){I.releaseProgram(G)}),x.isShaderMaterial&&I.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,G,C,H,oe){L===null&&(L=ft);const ye=H.isMesh&&H.matrixWorld.determinant()<0,Ee=yn(x,L,G,C,H);ke.setMaterial(C,ye);let Te=G.index,Ie=1;if(C.wireframe===!0){if(Te=M.getWireframeAttribute(G),Te===void 0)return;Ie=2}const Se=G.drawRange,ze=G.attributes.position;let tt=Se.start*Ie,ot=(Se.start+Se.count)*Ie;oe!==null&&(tt=Math.max(tt,oe.start*Ie),ot=Math.min(ot,(oe.start+oe.count)*Ie)),Te!==null?(tt=Math.max(tt,0),ot=Math.min(ot,Te.count)):ze!=null&&(tt=Math.max(tt,0),ot=Math.min(ot,ze.count));const _t=ot-tt;if(_t<0||_t===1/0)return;fe.setup(H,C,Ee,G,Te);let Rt,st=be;if(Te!==null&&(Rt=ct.get(Te),st=ge,st.setIndex(Rt)),H.isMesh)C.wireframe===!0?(ke.setLineWidth(C.wireframeLinewidth*Fe()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(H.isLine){let Ne=C.linewidth;Ne===void 0&&(Ne=1),ke.setLineWidth(Ne*Fe()),H.isLineSegments?st.setMode(D.LINES):H.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else H.isPoints?st.setMode(D.POINTS):H.isSprite&&st.setMode(D.TRIANGLES);if(H.isInstancedMesh)st.renderInstances(tt,_t,H.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,fn=Math.min(G.instanceCount,Ne);st.renderInstances(tt,_t,fn)}else st.render(tt,_t)},this.compile=function(x,L){function G(C,H,oe){C.transparent===!0&&C.side===Ln&&C.forceSinglePass===!1?(C.side=Bt,C.needsUpdate=!0,jt(C,H,oe),C.side=Zn,C.needsUpdate=!0,jt(C,H,oe),C.side=Ln):jt(C,H,oe)}f=ee.get(x),f.init(),S.push(f),x.traverseVisible(function(C){C.isLight&&C.layers.test(L.layers)&&(f.pushLight(C),C.castShadow&&f.pushShadow(C))}),f.setupLights(b._useLegacyLights),x.traverse(function(C){const H=C.material;if(H)if(Array.isArray(H))for(let oe=0;oe<H.length;oe++){const ye=H[oe];G(ye,x,C)}else G(H,x,C)}),S.pop(),f=null};let it=null;function Jt(x){it&&it(x)}function $e(){Mt.stop()}function wt(){Mt.start()}const Mt=new Fl;Mt.setAnimationLoop(Jt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(x){it=x,k.setAnimationLoop(x),x===null?Mt.stop():Mt.start()},k.addEventListener("sessionstart",$e),k.addEventListener("sessionend",wt),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(L),L=k.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,L,A),f=ee.get(x,S.length),f.init(),S.push(f),Ae.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),de.setFromProjectionMatrix(Ae),he=this.localClippingEnabled,ce=me.init(this.clippingPlanes,he),_=$.get(x,m.length),_.init(),m.push(_),Jn(x,L,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(Y,J),this.info.render.frame++,ce===!0&&me.beginShadows();const G=f.state.shadowsArray;if(te.render(G,x,L),ce===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),N.render(_,x),f.setupLights(b._useLegacyLights),L.isArrayCamera){const C=L.cameras;for(let H=0,oe=C.length;H<oe;H++){const ye=C[H];Tt(_,x,ye,ye.viewport)}}else Tt(_,x,L);A!==null&&(De.updateMultisampleRenderTarget(A),De.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(b,x,L),fe.resetDefaultState(),F=-1,y=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Jn(x,L,G,C){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||de.intersectsSprite(x)){C&&je.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ae);const ye=v.update(x),Ee=x.material;Ee.visible&&_.push(x,ye,Ee,G,je.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||de.intersectsObject(x))){const ye=v.update(x),Ee=x.material;if(C&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),je.copy(x.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),je.copy(ye.boundingSphere.center)),je.applyMatrix4(x.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ee)){const Te=ye.groups;for(let Ie=0,Se=Te.length;Ie<Se;Ie++){const ze=Te[Ie],tt=Ee[ze.materialIndex];tt&&tt.visible&&_.push(x,ye,tt,G,je.z,ze)}}else Ee.visible&&_.push(x,ye,Ee,G,je.z,null)}}const oe=x.children;for(let ye=0,Ee=oe.length;ye<Ee;ye++)Jn(oe[ye],L,G,C)}function Tt(x,L,G,C){const H=x.opaque,oe=x.transmissive,ye=x.transparent;f.setupLightsView(G),ce===!0&&me.setGlobalState(b.clippingPlanes,G),oe.length>0&&In(H,oe,L,G),C&&ke.viewport(w.copy(C)),H.length>0&&at(H,L,G),oe.length>0&&at(oe,L,G),ye.length>0&&at(ye,L,G),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function In(x,L,G,C){const H=Pe.isWebGL2;Me===null&&(Me=new dn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Un:Kn,minFilter:ho,samples:H?4:0})),b.getDrawingBufferSize(Re),H?Me.setSize(Re.x,Re.y):Me.setSize(oa(Re.x),oa(Re.y));const oe=b.getRenderTarget();b.setRenderTarget(Me),b.getClearColor(B),W=b.getClearAlpha(),W<1&&b.setClearColor(16777215,.5),b.clear();const ye=b.toneMapping;b.toneMapping=Yn,at(x,G,C),De.updateMultisampleRenderTarget(Me),De.updateRenderTargetMipmap(Me);let Ee=!1;for(let Te=0,Ie=L.length;Te<Ie;Te++){const Se=L[Te],ze=Se.object,tt=Se.geometry,ot=Se.material,_t=Se.group;if(ot.side===Ln&&ze.layers.test(C.layers)){const Rt=ot.side;ot.side=Bt,ot.needsUpdate=!0,hn(ze,G,C,tt,ot,_t),ot.side=Rt,ot.needsUpdate=!0,Ee=!0}}Ee===!0&&(De.updateMultisampleRenderTarget(Me),De.updateRenderTargetMipmap(Me)),b.setRenderTarget(oe),b.setClearColor(B,W),b.toneMapping=ye}function at(x,L,G){const C=L.isScene===!0?L.overrideMaterial:null;for(let H=0,oe=x.length;H<oe;H++){const ye=x[H],Ee=ye.object,Te=ye.geometry,Ie=C===null?ye.material:C,Se=ye.group;Ee.layers.test(G.layers)&&hn(Ee,L,G,Te,Ie,Se)}}function hn(x,L,G,C,H,oe){x.onBeforeRender(b,L,G,C,H,oe),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(b,L,G,C,x,oe),H.transparent===!0&&H.side===Ln&&H.forceSinglePass===!1?(H.side=Bt,H.needsUpdate=!0,b.renderBufferDirect(G,L,C,H,x,oe),H.side=Zn,H.needsUpdate=!0,b.renderBufferDirect(G,L,C,H,x,oe),H.side=Ln):b.renderBufferDirect(G,L,C,H,x,oe),x.onAfterRender(b,L,G,C,H,oe)}function jt(x,L,G){L.isScene!==!0&&(L=ft);const C=He.get(x),H=f.state.lights,oe=f.state.shadowsArray,ye=H.state.version,Ee=I.getParameters(x,H.state,oe,L,G),Te=I.getProgramCacheKey(Ee);let Ie=C.programs;C.environment=x.isMeshStandardMaterial?L.environment:null,C.fog=L.fog,C.envMap=(x.isMeshStandardMaterial?gt:Qe).get(x.envMap||C.environment),Ie===void 0&&(x.addEventListener("dispose",le),Ie=new Map,C.programs=Ie);let Se=Ie.get(Te);if(Se!==void 0){if(C.currentProgram===Se&&C.lightsStateVersion===ye)return mn(x,Ee),Se}else Ee.uniforms=I.getUniforms(x),x.onBuild(G,Ee,b),x.onBeforeCompile(Ee,b),Se=I.acquireProgram(Ee,Te),Ie.set(Te,Se),C.uniforms=Ee.uniforms;const ze=C.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ze.clippingPlanes=me.uniform),mn(x,Ee),C.needsLights=wn(x),C.lightsStateVersion=ye,C.needsLights&&(ze.ambientLightColor.value=H.state.ambient,ze.lightProbe.value=H.state.probe,ze.directionalLights.value=H.state.directional,ze.directionalLightShadows.value=H.state.directionalShadow,ze.spotLights.value=H.state.spot,ze.spotLightShadows.value=H.state.spotShadow,ze.rectAreaLights.value=H.state.rectArea,ze.ltc_1.value=H.state.rectAreaLTC1,ze.ltc_2.value=H.state.rectAreaLTC2,ze.pointLights.value=H.state.point,ze.pointLightShadows.value=H.state.pointShadow,ze.hemisphereLights.value=H.state.hemi,ze.directionalShadowMap.value=H.state.directionalShadowMap,ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ze.spotShadowMap.value=H.state.spotShadowMap,ze.spotLightMatrix.value=H.state.spotLightMatrix,ze.spotLightMap.value=H.state.spotLightMap,ze.pointShadowMap.value=H.state.pointShadowMap,ze.pointShadowMatrix.value=H.state.pointShadowMatrix);const tt=Se.getUniforms(),ot=ea.seqWithValue(tt.seq,ze);return C.currentProgram=Se,C.uniformsList=ot,Se}function mn(x,L){const G=He.get(x);G.outputColorSpace=L.outputColorSpace,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function yn(x,L,G,C,H){L.isScene!==!0&&(L=ft),De.resetTextureUnits();const oe=L.fog,ye=C.isMeshStandardMaterial?L.environment:null,Ee=A===null?b.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bn,Te=(C.isMeshStandardMaterial?gt:Qe).get(C.envMap||ye),Ie=C.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Se=!!G.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),ze=!!G.morphAttributes.position,tt=!!G.morphAttributes.normal,ot=!!G.morphAttributes.color;let _t=Yn;C.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=b.toneMapping);const Rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,st=Rt!==void 0?Rt.length:0,Ne=He.get(C),fn=f.state.lights;if(ce===!0&&(he===!0||x!==y)){const kt=x===y&&C.id===F;me.setState(C,x,kt)}let rt=!1;C.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==fn.state.version||Ne.outputColorSpace!==Ee||H.isInstancedMesh&&Ne.instancing===!1||!H.isInstancedMesh&&Ne.instancing===!0||H.isSkinnedMesh&&Ne.skinning===!1||!H.isSkinnedMesh&&Ne.skinning===!0||H.isInstancedMesh&&Ne.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ne.instancingColor===!1&&H.instanceColor!==null||Ne.envMap!==Te||C.fog===!0&&Ne.fog!==oe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==me.numPlanes||Ne.numIntersection!==me.numIntersection)||Ne.vertexAlphas!==Ie||Ne.vertexTangents!==Se||Ne.morphTargets!==ze||Ne.morphNormals!==tt||Ne.morphColors!==ot||Ne.toneMapping!==_t||Pe.isWebGL2===!0&&Ne.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Ne.__version=C.version);let St=Ne.currentProgram;rt===!0&&(St=jt(C,L,H));let pn=!1,Nn=!1,Qn=!1;const dt=St.getUniforms(),Ct=Ne.uniforms;if(ke.useProgram(St.program)&&(pn=!0,Nn=!0,Qn=!0),C.id!==F&&(F=C.id,Nn=!0),pn||y!==x){if(dt.setValue(D,"projectionMatrix",x.projectionMatrix),Pe.logarithmicDepthBuffer&&dt.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),y!==x&&(y=x,Nn=!0,Qn=!0),C.isShaderMaterial||C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshStandardMaterial||C.envMap){const kt=dt.map.cameraPosition;kt!==void 0&&kt.setValue(D,je.setFromMatrixPosition(x.matrixWorld))}(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&dt.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial||C.isShadowMaterial||H.isSkinnedMesh)&&dt.setValue(D,"viewMatrix",x.matrixWorldInverse)}if(H.isSkinnedMesh){dt.setOptional(D,H,"bindMatrix"),dt.setOptional(D,H,"bindMatrixInverse");const kt=H.skeleton;kt&&(Pe.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),dt.setValue(D,"boneTexture",kt.boneTexture,De),dt.setValue(D,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mi=G.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0&&Pe.isWebGL2===!0)&&ve.update(H,G,St),(Nn||Ne.receiveShadow!==H.receiveShadow)&&(Ne.receiveShadow=H.receiveShadow,dt.setValue(D,"receiveShadow",H.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(Ct.envMap.value=Te,Ct.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Nn&&(dt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Ne.needsLights&&xn(Ct,Qn),oe&&C.fog===!0&&ne.refreshFogUniforms(Ct,oe),ne.refreshMaterialUniforms(Ct,C,X,Q,Me),ea.upload(D,Ne.uniformsList,Ct,De)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(ea.upload(D,Ne.uniformsList,Ct,De),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&dt.setValue(D,"center",H.center),dt.setValue(D,"modelViewMatrix",H.modelViewMatrix),dt.setValue(D,"normalMatrix",H.normalMatrix),dt.setValue(D,"modelMatrix",H.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){const kt=C.uniformsGroups;for(let Qt=0,yo=kt.length;Qt<yo;Qt++)if(Pe.isWebGL2){const $n=kt[Qt];Ue.update($n,St),Ue.bind($n,St)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return St}function xn(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function wn(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,L,G){He.get(x.texture).__webglTexture=L,He.get(x.depthTexture).__webglTexture=G;const C=He.get(x);C.__hasExternalTextures=!0,C.__hasExternalTextures&&(C.__autoAllocateDepthBuffer=G===void 0,C.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),C.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,L){const G=He.get(x);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,G=0){A=x,E=L,R=G;let C=!0,H=null,oe=!1,ye=!1;if(x){const Te=He.get(x);Te.__useDefaultFramebuffer!==void 0?(ke.bindFramebuffer(D.FRAMEBUFFER,null),C=!1):Te.__webglFramebuffer===void 0?De.setupRenderTarget(x):Te.__hasExternalTextures&&De.rebindTextures(x,He.get(x.texture).__webglTexture,He.get(x.depthTexture).__webglTexture);const Ie=x.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Se=He.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Se[L])?H=Se[L][G]:H=Se[L],oe=!0):Pe.isWebGL2&&x.samples>0&&De.useMultisampledRTT(x)===!1?H=He.get(x).__webglMultisampledFramebuffer:Array.isArray(Se)?H=Se[G]:H=Se,w.copy(x.viewport),K.copy(x.scissor),j=x.scissorTest}else w.copy(Z).multiplyScalar(X).floor(),K.copy(U).multiplyScalar(X).floor(),j=q;if(ke.bindFramebuffer(D.FRAMEBUFFER,H)&&Pe.drawBuffers&&C&&ke.drawBuffers(x,H),ke.viewport(w),ke.scissor(K),ke.setScissorTest(j),oe){const Te=He.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,Te.__webglTexture,G)}else if(ye){const Te=He.get(x.texture),Ie=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,G||0,Ie)}F=-1},this.readRenderTargetPixels=function(x,L,G,C,H,oe,ye){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=He.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){ke.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Te=x.texture,Ie=Te.format,Se=Te.type;if(Ie!==cn&&pe.convert(Ie)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Se===Un&&(_e.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Se!==Kn&&pe.convert(Se)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===Xn&&(Pe.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-C&&G>=0&&G<=x.height-H&&D.readPixels(L,G,C,H,pe.convert(Ie),pe.convert(Se),oe)}finally{const Te=A!==null?He.get(A).__webglFramebuffer:null;ke.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(x,L,G=0){const C=Math.pow(2,-G),H=Math.floor(L.image.width*C),oe=Math.floor(L.image.height*C);De.setTexture2D(L,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,x.x,x.y,H,oe),ke.unbindTexture()},this.copyTextureToTexture=function(x,L,G,C=0){const H=L.image.width,oe=L.image.height,ye=pe.convert(G.format),Ee=pe.convert(G.type);De.setTexture2D(G,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment),L.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,C,x.x,x.y,H,oe,ye,Ee,L.image.data):L.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,C,x.x,x.y,L.mipmaps[0].width,L.mipmaps[0].height,ye,L.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,C,x.x,x.y,ye,Ee,L.image),C===0&&G.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(x,L,G,C,H=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const oe=x.max.x-x.min.x+1,ye=x.max.y-x.min.y+1,Ee=x.max.z-x.min.z+1,Te=pe.convert(C.format),Ie=pe.convert(C.type);let Se;if(C.isData3DTexture)De.setTexture3D(C,0),Se=D.TEXTURE_3D;else if(C.isDataArrayTexture)De.setTexture2DArray(C,0),Se=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const ze=D.getParameter(D.UNPACK_ROW_LENGTH),tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ot=D.getParameter(D.UNPACK_SKIP_PIXELS),_t=D.getParameter(D.UNPACK_SKIP_ROWS),Rt=D.getParameter(D.UNPACK_SKIP_IMAGES),st=G.isCompressedTexture?G.mipmaps[0]:G.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,st.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,x.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,x.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,x.min.z),G.isDataTexture||G.isData3DTexture?D.texSubImage3D(Se,H,L.x,L.y,L.z,oe,ye,Ee,Te,Ie,st.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Se,H,L.x,L.y,L.z,oe,ye,Ee,Te,st.data)):D.texSubImage3D(Se,H,L.x,L.y,L.z,oe,ye,Ee,Te,Ie,st),D.pixelStorei(D.UNPACK_ROW_LENGTH,ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ot),D.pixelStorei(D.UNPACK_SKIP_ROWS,_t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt),H===0&&C.generateMipmaps&&D.generateMipmap(Se),ke.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?De.setTextureCube(x,0):x.isData3DTexture?De.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?De.setTexture2DArray(x,0):De.setTexture2D(x,0),ke.unbindTexture()},this.resetState=function(){E=0,R=0,A=null,ke.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Be?di:Sl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===di?Be:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class yp extends Wl{}yp.prototype.isWebGL1Renderer=!0;class xp extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jl extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zr=new z,Jr=new z,Qr=new bt,qa=new ds,Zo=new vo;class wp extends Nt{constructor(e=new Zt,t=new jl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,a=t.count;o<a;o++)Zr.fromBufferAttribute(t,o-1),Jr.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=Zr.distanceTo(Jr);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(o),Zo.radius+=a,e.ray.intersectsSphere(Zo)===!1)return;Qr.copy(o).invert(),qa.copy(e.ray).applyMatrix4(Qr);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new z,d=new z,h=new z,u=new z,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const m=Math.max(0,r.start),S=Math.min(g.count,r.start+r.count);for(let b=m,T=S-1;b<T;b+=p){const E=g.getX(b),R=g.getX(b+1);if(c.fromBufferAttribute(f,E),d.fromBufferAttribute(f,R),qa.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(u);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,r.start),S=Math.min(f.count,r.start+r.count);for(let b=m,T=S-1;b<T;b+=p){if(c.fromBufferAttribute(f,b),d.fromBufferAttribute(f,b+1),qa.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(u);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=o.length;a<r;a++){const s=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}const $r=new z,el=new z;class Mp extends wp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let o=0,a=t.count;o<a;o+=2)$r.fromBufferAttribute(t,o),el.fromBufferAttribute(t,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+$r.distanceTo(el);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ql extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tl=new bt,is=new ds,Jo=new vo,Qo=new z;class Sp extends Nt{constructor(e=new Zt,t=new ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(o),Jo.radius+=a,e.ray.intersectsSphere(Jo)===!1)return;tl.copy(o).invert(),is.copy(e.ray).applyMatrix4(tl);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,_=p;g<_;g++){const f=c.getX(g);Qo.fromBufferAttribute(h,f),nl(Qo,f,l,o,e,t,this)}}else{const u=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let g=u,_=p;g<_;g++)Qo.fromBufferAttribute(h,g),nl(Qo,g,l,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=o.length;a<r;a++){const s=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function nl(i,e,t,n,o,a,r){const s=is.distanceSqToPoint(i);if(s<t){const l=new z;is.closestPointToPoint(i,l),l.applyMatrix4(n);const c=o.ray.origin.distanceTo(l);if(c<o.near||c>o.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:r})}}const il={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ep{constructor(e,t,n){const o=this;let a=!1,r=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){s++,a===!1&&o.onStart!==void 0&&o.onStart(d,r,s),a=!0},this.itemEnd=function(d){r++,o.onProgress!==void 0&&o.onProgress(d,r,s),r===s&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(d){o.onError!==void 0&&o.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const Tp=new Ep;class fs{constructor(e){this.manager=e!==void 0?e:Tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(o,a){n.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";class kp extends fs{constructor(e){super(e)}load(e,t,n,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=il.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;const s=fo("img");function l(){d(),il.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(h){d(),o&&o(h),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class Ap extends fs{constructor(e){super(e)}load(e,t,n,o){const a=new Ht,r=new kp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,o),a}}class Rp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ol();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ol(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rs);const Xl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class bo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Cp=new Ol(-1,1,1,-1,0,1),ps=new Zt;ps.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3));ps.setAttribute("uv",new un([0,2,0,0,2,0],2));class Yl{constructor(e){this._mesh=new zn(ps,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Lp extends bo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=aa.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Yl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class al extends bo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,s;this.inverse?(r=0,s=1):(r=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,r,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class Pp extends bo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zp{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ve);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lp(Xl),this.copyPass.material.blending=Dn,this.clock=new Rp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let o=0,a=this.passes.length;o<a;o++){const r=this.passes[o];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}al!==void 0&&(r instanceof al?n=!0:r instanceof Pp&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(n,o),this.renderTarget2.setSize(n,o);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Dp extends bo{constructor(e,t,n,o,a){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=o,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,n){const o=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=o}}const Up={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Vi extends bo{constructor(e,t,n,o){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=o,this.resolution=e!==void 0?new Ve(e.x,e.y):new Ve(256,256),this.clearColor=new Je(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(a,r,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new dn(a,r,{type:Un});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new dn(a,r,{type:Un});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),a=Math.round(a/2),r=Math.round(r/2)}const s=Up;this.highPassUniforms=aa.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ve(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Xl;this.copyUniforms=aa.clone(d.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:uo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Je,this.oldClearAlpha=1,this.basic=new us,this.fsQuad=new Yl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(n,o);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,o),this.renderTargetsVertical[a].setSize(n,o),this.separableBlurMaterials[a].uniforms.invSize.value=new Ve(1/n,1/o),n=Math.round(n/2),o=Math.round(o/2)}render(e,t,n,o,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let s=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[l].uniforms.direction.value=Vi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Vi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),s=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ve(.5,.5)},direction:{value:new Ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Vi.BlurDirectionX=new Ve(1,0);Vi.BlurDirectionY=new Ve(0,1);let ri,sl;const ta=[];let hi,Xa,Ui,ao,Wn,rn,jn,Qi,os,so,mt,ro,as=-1;const $i=500;let na=160;const Ip=800,lo=Ip/2,Np=.125,Fp=1400,Op=1,co={showDots:!0,showLines:!0,minDistance:105,minDistanceSqr:0,limitConnections:!1,maxConnections:20,particleCount:160,pauseMovement:!1};co.minDistanceSqr=co.minDistance*co.minDistance;function Bp(i){sl=i,hi=new Kt(45,window.innerWidth/window.innerHeight,1,4e3),hi.position.z=1250,Xa=new xp,ri=new to,Xa.add(ri);const e=$i*$i;rn=new Float32Array($i*3),Wn=new Float32Array(e*3),jn=new Float32Array(e*3);const t=new Ap().load("img/circle.png"),n=new ql({vertexColors:!0,map:t,size:20,blending:uo,transparent:!0,sizeAttenuation:!0,depthTest:!1});Qi=new Zt,mt=new Float32Array($i*3),os=[];let o=0,a=0;for(let d=0;d<$i;d++){o+=2*Math.PI*Math.random(),a+=Math.acos(2*Math.random()-1);const h=lo*Math.cos(o)*Math.sin(a),u=lo*Math.sin(o)*Math.sin(a),p=lo*Math.cos(a),g=new z(h,u,p);g.delay=Date.now()+Np*d,g.rotationAxis=new z(0,Math.random()*2-1,Math.random()*2-1),g.rotationAxis.normalize(),g.rotationSpeed=1+Math.random(),os.push(g),mt[d*3]=h,mt[d*3+1]=u,mt[d*3+2]=p,rn[d*3]=1,rn[d*3+1]=1,rn[d*3+2]=1,ta.push({numConnections:0})}Qi.setDrawRange(0,na),Qi.setAttribute("position",new Ot(mt,3).setUsage(Ro)),Qi.setAttribute("color",new Ot(rn,3).setUsage(Ro)),so=new Sp(Qi,n),ri.add(so);const r=new Zt;r.setAttribute("position",new Ot(Wn,3).setUsage(Ro)),r.setAttribute("color",new Ot(jn,3).setUsage(Ro)),r.computeBoundingSphere(),r.setDrawRange(0,0);const s=new jl({vertexColors:!0,linewidth:1,blending:uo,transparent:!0});ro=new Mp(r,s),ri.add(ro),Ui=new Wl({antialias:!0}),Ui.setPixelRatio(window.devicePixelRatio),Ui.setSize(window.innerWidth,window.innerHeight),sl.appendChild(Ui.domElement);const l=new Dp(Xa,hi),c=new Vi(new Ve(window.innerWidth,window.innerHeight),1.6,.2,.01);ao=new zp(Ui),ao.addPass(l),ao.addPass(c),window.addEventListener("resize",Hp)}function Hp(){hi.aspect=window.innerWidth/window.innerHeight,hi.updateProjectionMatrix(),Ui.setSize(window.innerWidth,window.innerHeight),ao.setSize(window.innerWidth,window.innerHeight)}function Kl(){let i=0,e=0,t=0,o=new z(0,0,0).distanceTo(hi.position);for(let s=0;s<na;s++)ta[s].numConnections=0;for(let s=0;s<na;s++){const l=ta[s],c=os[s];c.applyAxisAngle(c.rotationAxis,c.rotationSpeed/Fp),mt[s*3]=c.x,mt[s*3+1]=c.y,mt[s*3+2]=c.z;let d=new z(mt[s*3],mt[s*3+1],mt[s*3+2]);var a=so.localToWorld(d).distanceTo(hi.position),r=a-o;let u=hr.inverseLerp(lo,-lo,r);u=hr.clamp(u,.1,1),rn[s*3]=u,rn[s*3+1]=.1,rn[s*3+2]=.1,as>=0&&as==s&&(rn[s*3]=.1,rn[s*3+1]=1,rn[s*3+2]=1);for(let p=s+1;p<na;p++){const g=ta[p],_=mt[s*3]-mt[p*3],f=mt[s*3+1]-mt[p*3+1],m=mt[s*3+2]-mt[p*3+2],S=_*_+f*f+m*m;if(S<co.minDistanceSqr){l.numConnections++,g.numConnections++;const T=1-Math.sqrt(S)/co.minDistance;Wn[i++]=mt[s*3],Wn[i++]=mt[s*3+1],Wn[i++]=mt[s*3+2],Wn[i++]=mt[p*3],Wn[i++]=mt[p*3+1],Wn[i++]=mt[p*3+2],jn[e++]=T*u,jn[e++]=T*u,jn[e++]=T*u,jn[e++]=T*u,jn[e++]=T*u,jn[e++]=T*u,t++}}}ro.geometry.setDrawRange(0,t*2),ro.geometry.attributes.position.needsUpdate=!0,ro.geometry.attributes.color.needsUpdate=!0,so.geometry.attributes.position.needsUpdate=!0,so.geometry.attributes.color.needsUpdate=!0,requestAnimationFrame(Kl),Gp()}function Gp(){const i=Date.now()*.001*Op;ri.rotation.y=i*.1,ri.rotation.y=ri.rotation.y%360,ao.render()}function Vp(i){as=i}const rl={createScene(i){Bp(i),Kl()},updateHighlightIndex(i){Vp(i)}};class Wp{constructor(e,t){this.el=e,this.scrambleCharClass=t,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){const t=this.el.innerText,n=Math.max(t.length,e.length),o=new Promise(a=>this.resolve=a);this.queue=[];for(let a=0;a<n;a++){const r=t[a]||"",s=e[a]||"",l=Math.floor(Math.random()*40),c=l+Math.floor(Math.random()*40);this.queue.push({from:r,to:s,start:l,end:c})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}update(){let e="",t=0;for(let n=0,o=this.queue.length;n<o;n++){let{from:a,to:r,start:s,end:l,char:c}=this.queue[n];this.frame>=l?(t++,e+=r):this.frame>=s?((!c||Math.random()<.28)&&(c=this.randomChar(),this.queue[n].char=c),e+=`<span class="${this.scrambleCharClass}">${c}</span>`):e+=a}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}const Vn=(i,e,t=1800,n="dud")=>{const o=new Wp(i,n);t<200&&(t=200);let a=0;const r=()=>{o.setText(e[a]).then(()=>{setTimeout(r,t)}),a=(a+1)%e.length};r()},$o=parseFloat;function ss(i,e=";"){let t;if(Array.isArray(i))t=i.filter(n=>n);else{t=[];for(const n in i)i[n]&&t.push(`${n}:${i[n]}`)}return t.join(e)}function jp(i,e,t,n){let o,a;const r="1em";let s,l,c,d="-.125em";const h="visible";return n&&(c="center",a="1.25em"),t&&(o=t),e&&(e=="lg"?(l="1.33333em",s=".75em",d="-.225em"):e=="xs"?l=".75em":e=="sm"?l=".875em":l=e.replace("x","em")),ss([ss({float:o,width:a,height:r,"line-height":s,"font-size":l,"text-align":c,"vertical-align":d,"transform-origin":"center",overflow:h}),i])}function qp(i,e,t,n,o,a=1,r="",s=""){let l=1,c=1;return o&&(o=="horizontal"?l=-1:o=="vertical"?c=-1:l=c=-1),ss([`translate(${$o(e)*a}${r},${$o(t)*a}${r})`,`scale(${l*$o(i)},${c*$o(i)})`,n&&`rotate(${n}${s})`]," ")}function ll(i){let e,t,n,o,a,r,s,l;function c(u,p){return typeof u[10][4]=="string"?Yp:Xp}let d=c(i),h=d(i);return{c(){e=Ke("svg"),t=Ke("g"),n=Ke("g"),h.c(),this.h()},l(u){e=Ze(u,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var p=we(e);t=Ze(p,"g",{transform:!0,"transform-origin":!0});var g=we(t);n=Ze(g,"g",{transform:!0});var _=we(n);h.l(_),_.forEach(re),g.forEach(re),p.forEach(re),this.h()},h(){P(n,"transform",i[12]),P(t,"transform",o="translate("+i[10][0]/2+" "+i[10][1]/2+")"),P(t,"transform-origin",a=i[10][0]/4+" 0"),P(e,"id",r=i[1]||void 0),P(e,"class",s="svelte-fa "+i[0]+" svelte-1cj2gr0"),P(e,"style",i[11]),P(e,"viewBox",l="0 0 "+i[10][0]+" "+i[10][1]),P(e,"aria-hidden","true"),P(e,"role","img"),P(e,"xmlns","http://www.w3.org/2000/svg"),Ao(e,"pulse",i[4]),Ao(e,"spin",i[3])},m(u,p){lt(u,e,p),ae(e,t),ae(t,n),h.m(n,null)},p(u,p){d===(d=c(u))&&h?h.p(u,p):(h.d(1),h=d(u),h&&(h.c(),h.m(n,null))),p&4096&&P(n,"transform",u[12]),p&1024&&o!==(o="translate("+u[10][0]/2+" "+u[10][1]/2+")")&&P(t,"transform",o),p&1024&&a!==(a=u[10][0]/4+" 0")&&P(t,"transform-origin",a),p&2&&r!==(r=u[1]||void 0)&&P(e,"id",r),p&1&&s!==(s="svelte-fa "+u[0]+" svelte-1cj2gr0")&&P(e,"class",s),p&2048&&P(e,"style",u[11]),p&1024&&l!==(l="0 0 "+u[10][0]+" "+u[10][1])&&P(e,"viewBox",l),p&17&&Ao(e,"pulse",u[4]),p&9&&Ao(e,"spin",u[3])},d(u){u&&re(e),h.d()}}}function Xp(i){let e,t,n,o,a,r,s,l,c,d;return{c(){e=Ke("path"),r=Ke("path"),this.h()},l(h){e=Ze(h,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),we(e).forEach(re),r=Ze(h,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),we(r).forEach(re),this.h()},h(){P(e,"d",t=i[10][4][0]),P(e,"fill",n=i[6]||i[2]||"currentColor"),P(e,"fill-opacity",o=i[9]!=!1?i[7]:i[8]),P(e,"transform",a="translate("+i[10][0]/-2+" "+i[10][1]/-2+")"),P(r,"d",s=i[10][4][1]),P(r,"fill",l=i[5]||i[2]||"currentColor"),P(r,"fill-opacity",c=i[9]!=!1?i[8]:i[7]),P(r,"transform",d="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")},m(h,u){lt(h,e,u),lt(h,r,u)},p(h,u){u&1024&&t!==(t=h[10][4][0])&&P(e,"d",t),u&68&&n!==(n=h[6]||h[2]||"currentColor")&&P(e,"fill",n),u&896&&o!==(o=h[9]!=!1?h[7]:h[8])&&P(e,"fill-opacity",o),u&1024&&a!==(a="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&P(e,"transform",a),u&1024&&s!==(s=h[10][4][1])&&P(r,"d",s),u&36&&l!==(l=h[5]||h[2]||"currentColor")&&P(r,"fill",l),u&896&&c!==(c=h[9]!=!1?h[8]:h[7])&&P(r,"fill-opacity",c),u&1024&&d!==(d="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&P(r,"transform",d)},d(h){h&&(re(e),re(r))}}}function Yp(i){let e,t,n,o;return{c(){e=Ke("path"),this.h()},l(a){e=Ze(a,"path",{d:!0,fill:!0,transform:!0}),we(e).forEach(re),this.h()},h(){P(e,"d",t=i[10][4]),P(e,"fill",n=i[2]||i[5]||"currentColor"),P(e,"transform",o="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")},m(a,r){lt(a,e,r)},p(a,r){r&1024&&t!==(t=a[10][4])&&P(e,"d",t),r&36&&n!==(n=a[2]||a[5]||"currentColor")&&P(e,"fill",n),r&1024&&o!==(o="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")&&P(e,"transform",o)},d(a){a&&re(e)}}}function Kp(i){let e,t=i[10][4]&&ll(i);return{c(){t&&t.c(),e=zs()},l(n){t&&t.l(n),e=zs()},m(n,o){t&&t.m(n,o),lt(n,e,o)},p(n,[o]){n[10][4]?t?t.p(n,o):(t=ll(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Ps,o:Ps,d(n){n&&re(e),t&&t.d(n)}}}function Zp(i,e,t){let{class:n=""}=e,{id:o=""}=e,{style:a=""}=e,{icon:r}=e,{size:s=""}=e,{color:l=""}=e,{fw:c=!1}=e,{pull:d=""}=e,{scale:h=1}=e,{translateX:u=0}=e,{translateY:p=0}=e,{rotate:g=""}=e,{flip:_=!1}=e,{spin:f=!1}=e,{pulse:m=!1}=e,{primaryColor:S=""}=e,{secondaryColor:b=""}=e,{primaryOpacity:T=1}=e,{secondaryOpacity:E=.4}=e,{swapOpacity:R=!1}=e,A,F,y;return i.$$set=w=>{"class"in w&&t(0,n=w.class),"id"in w&&t(1,o=w.id),"style"in w&&t(13,a=w.style),"icon"in w&&t(14,r=w.icon),"size"in w&&t(15,s=w.size),"color"in w&&t(2,l=w.color),"fw"in w&&t(16,c=w.fw),"pull"in w&&t(17,d=w.pull),"scale"in w&&t(18,h=w.scale),"translateX"in w&&t(19,u=w.translateX),"translateY"in w&&t(20,p=w.translateY),"rotate"in w&&t(21,g=w.rotate),"flip"in w&&t(22,_=w.flip),"spin"in w&&t(3,f=w.spin),"pulse"in w&&t(4,m=w.pulse),"primaryColor"in w&&t(5,S=w.primaryColor),"secondaryColor"in w&&t(6,b=w.secondaryColor),"primaryOpacity"in w&&t(7,T=w.primaryOpacity),"secondaryOpacity"in w&&t(8,E=w.secondaryOpacity),"swapOpacity"in w&&t(9,R=w.swapOpacity)},i.$$.update=()=>{i.$$.dirty&16384&&t(10,A=r&&r.icon||[0,0,"",[],""]),i.$$.dirty&237568&&t(11,F=jp(a,s,d,c)),i.$$.dirty&8126464&&t(12,y=qp(h,u,p,g,_,512))},[n,o,l,f,m,S,b,T,E,R,A,F,y,a,r,s,c,d,h,u,p,g,_]}class Ya extends ul{constructor(e){super(),hl(this,e,Zp,Kp,dl,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var Jp={prefix:"fas",iconName:"flag",icon:[448,512,[127988,61725],"f024","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"]};const cl=["so.prx.link","mastodon.celticpaganism.org","social.fmvilas.me","panthermoderns.org","totalnoob.club","social.benboyd.us","mastodon.malmorrow.com","indieapps.space","friendica.mschmidt-et.de","crashloop.social","thetooniverse.xyz","social.makrobytes.eu","verisimilitudino.us","mastodon.katz.vision","honk.bewilderbeest.net","shaktzu.org","mastodon.sprawl.club","fedi.software","social.heathanderson.net","mstdn.husku.net","manfre.net","fomx.gay","isnot.online","pl.glownow.club","social.frankgrimm.net","attractive.space","mastodon.thbps.com","ischool.social","social.jesuislibre.net","pleroma.salastil.com","xn--49ap3c.xn--y9a3aq","kicked.ro","netpro2k.io","crimew.gay","mtrichardson.com","holovaty.com","7pounds.army","mage.town","thrashzone.org","eay.social","motern.media","beingoblio.com","s.the-brannons.com","fightforthefuture.org","mastodon.ngo","ibe.social","mastodon.steinernebruecke.de","akademienl.social","hear-me.social","pouet.couchet.org","neuland.social","pleroma.neuromante.net","jasondavis.net","toet.dnzm.nl","herzbu.de","clrk.space","misskey.art","federate.blogpocket.com","some.chiptune.uk","social.darc.de","rah.social","yorkshire.social","030.me","devilgate.org","pix.josh.tel","oddte.ch","bigisland.social","feed.nxs3.com","waldvogel.family","fountainpen.social","social.macbeth.cc","social.nil.im","bardown.space","c18.masto.host","bbs.kawa-kun.com","boffosocko.com","dair-community.social","lain.com","toot.me.uk","mspsocial.net","fed.uninsane.org","ocamlot.xyz","theor.io","functional.computer","beefyboys.win","nafo.uk","nacchan.ca","beta.lazyatom.social","gould.cx","azadehafzar.ir","toot.hoyle.me.uk","poils.pachyderme.net","social.terbeest.net","puff.place","thapaliya.com","bittube.social","bfs.llc","mysportgallery.com","fedi.absturztau.be","cosocial.ca","toothole.org","toot.majorshouse.com","localization.cafe","social.dsmouse.net","diamondelizaa.com","blahaj.zone","www.ianbrown.tech","ohess.org","friendica.ucy.de","f.kretschmann.social","mastodon.desmu.fr","skullvines.xyz","toots.cc","toot.payfrit.com","fauxmotion.soccer","social.spacebear.ee","nightmare.haus","chablis.social","bikesare.cool","mastodon.boliston.com","mountaintown.video","stream.digio.space","nanao.cybtex.fr","waymeet.net","unfediverse.com","earfolds.com","stop.voring.me","social.bigcavemaps.com","ben.wtf","gadgetboy.social","follow.schmaller.de","fro.ge","pleroma.1d4.us","hub.bayliss.social","friendica.kommune4.de","linh.social","starfruit.cafe","mastodon.bemedia.at","campduffel.social","otp.akkoma.dev","colinmartin.uk","social-dev.treehouse.systems","charade.social","sarcasm.stream","vucica.net","friendica.offsite.guru","4bear.com","satori.cafe","matthewedavis.online","edwinavalos.com","social.eden.one","social.bobcall.me","d20.social","social.nerdnightlax.com","greendragon.pub","social.lasanha.org","micah.social","social.irregulars.io","strelsky.net","me.nzen.ski","crid.land","overheard.social","lemmy.sdf.org","charles-axel.com","udongein.xyz","dogsex.org","social.jmueller.eu","theclacks.cloud","toot.jeena.net","masochi.st","leipzig.town","coq.social","social.chilliet.eu","thebag.social","mastodon.eole.education","social.flipdot.org","youngroyals.net","teabag.ninja","basspistol.org","unix.se","chilemasto.casa","hodgson.io","researchbuzz.masto.host","kottman.xyz","mastodon.c99.org","sheep.network","ublog.byme.at","stream.monkee.ch","phire.place","cldsrv.duckdns.org","mastodon.hamik.net","honk.x61.sh","williamsonday.buzz","social.vekant.com","motmot.cx","eskuel.net","cybervillains.com","climatejustice.events","glitch.gray.cafe","inaccessible.ac","dh.social","robot.rodeo","colorid.es","mastodon.gardensoul.org","toot.lv","mk.amanita.zone","gearheads.social","tube.rebellion.global","mast.ahri.cloud","blorbo.social","im-in.space","futuregadgetlab.cc","pwbsoft.gay","mastodon.exok.com","akko.anemoneya.me","m.brokep.com","kowelenz.social","climatejustice.rocks","toot.dice.quest","fri.aethercom.de","438punk.house","social.proximitysculptor.com","borkr.one","mastodon.ar.al","masto.dotsod.com","sfba.social","eurovision.social","social.otsuka.haus","rebased.io","dog.lgbt","brioco.art","libranet.de","oddballs.vip","social.tonesplace.com","moderately.social","meetwoof.com","social.brokenbydesign.org","1210.nl","social.rebellion.global","social.aunaturel.club","hightops.ink","hund.schule","masto.sarahlizzy.org","nekoconeko.nl","shout.s4die.co","mck.pub","mastodon.kapler.family","shota.social","tweep.uk","mastodon.nk.ca","freaklab.es","lerchgonzalez.online","freestead.be","toot.ahnlak.com","infinity.garden","mst.muiiio.com","fed.agoomem.xyz","mastodonians.social","m.tgl.eu","typetura.social","overbye.dev","masto.deoan.org","mastodon.ameo.dev","inventaire.io","merovingian.club","superseriousbusiness.org","pliocene.org","nate.im","aliensoup.social","m.trisweb.com","werner.ac","friendica.mnementh.co.uk","mastodon.groundgamela.org","nullspace.ie","leafposter.club","weird.autos","mastodon.f-si.org","social.yharnam.town","easymode.im","society.oftrolls.com","fox.yt","networkteam.social","m.phase.org","epicyon.libreserver.org","honk.tedunangst.com","social.rickelobe.com","youthweb.social","database.club","gxtech.social","social.unboiled.info","touha.me","gnu.gl","pixel.gruene.social","mastodon.whitehead-smith.com","bobek.cz","misc.brainsoap.net","social.capystan.net","social.sublingual.xyz","kcore.org","li.mnino.us","m.loovto.net","social.seattle.wa.us","social.chakradeo.net","friendica.daniel-siepmann.de","abshoff.social","kachel.social","mastodon.gurubert.de","social.dragonsare.gay","neuro.cooking","brockha.us","bihar.social","social.emmajuettner.com","ser.endipito.us","m.tomaz.me","social.gregnewman.io","ourtribeonline.com","dartboard.social","whitesmokebbq.social","ezra.social","raynor.haus","tetrax.de","xn--federao-2wa9a.social","leaninto.it","social.petertoushkov.eu","fedi.skladka.net","tsukihi.me","cc.chat","social.fsoc.lol","officiell-info.se","social.polymerwitch.com","twitter.piriklub.eu","terere.social","mstdn.maud.io","toot.uoga.net","ublog.fedi.bbrks.me","mne.social","herkenhoff.com","social.jonaskoeritz.de","mstdn.digital","tech.intersects.art","abid.cc","social.lucentinian.com","mastodon.zunda.ninja","tdd.social","social.troll.academy","io.waxandleather.com","cyberia.tokyo","micro.relativesanity.com","dacharycarey.social","shortstackran.ch","graphics.social","singularity-node.net","letsalllovela.in","is.burntout.org","mk.vulpes.one","kar.ly","cawfee.club","b0x.social","coolkids.house","higheredweb.social","ruud.social","frawas.de","mastodon.sebastix.dev","social.undeadnetwork.de","scalie.club","bv.umbrellix.org","mstdn.ro","social.ericwbailey.website","mystodon.net","nowicki.io","schottkydio.de","esgeroth.org","haqueers.com","badly.co","pleroma.xprmnt42.de","misaka.ru","yearg.in","coerthansnowstorm.online","esotericknowledge.xyz","social.hackerfraternity.org","my.medic.cafe","mastodon.corecoding.dev","mastodon.nibiru.nz","social.rbvea.co","mastodon.mxhdr.net","alphapi.me","pleroma.cafkafk.com","mammoth.gry.st","m.salundo.com","soc.noob.quest","mastodon.goblackcat.com","electric.marf.space","nwb.social","social.beachcom.org","digforfire.org","progressives.social","tails.ch","walkah.social","tirnanog.space","mastodon.cartapus.eu","wiki.style","mein.mikroblog.at","social.alster.space","xmflsct.com","the.trblmkr.net","cursoryreview.org","awoo.fai.st","social.bkp.sh","wiir.libtar.de","mastodon.geekery.org","shigusegubu.club","randompherret.com","social.mrjeda.de","social.mnh48.moe","mastodon.goldenhillsoftware.com","bumscode.com","social.zell-mbc.com","m.right.wtf","rot.gives","mastodon.aquati.cat","social.veltens.org","micro.hrsn.me","proyectozero.org","pleroma.lord.re","goatfan.club","montereybay.social","goos.social","larkspur.one","frinsocial.uk","social.hnws.me","janerationx.me","status.plomlompom.com","lizard.zone","mastodon.server.fifthdread.com","wants.coffee","theguidrys.us","pointless.net","fivewaystop.masto.host","birdnoises.evn.sh","savemy.name","117net.co.uk","stvmln.com","social.wien.rocks","mastodon.toastbrot.net","woblfedi.de","p.torisan.party","uncorking.me","bel.social","social.snopyta.org","lol.camp","sleepy.social","mastodon.westsideblogger.eu","arachnid.town","koehlercode.dev","f-ckendehoelle.de","www.superstork.org","engineered.space","xinsto.xyz","mastodon.r-flash.eu","social.antifa.gmbh","instance.digital","social.undisruptable.technology","social.juanlu.space","vixen.zone","anticapitalistcatgirl.club","social.secret.pub","mastodon.nilswloka.com","social.kejadlen.dev","m.rakyll.org","friendica.hashy-net.de","phalzu.ddnss.de","flagada.org","zuhair.social","beach.city","social.eviealways.com","mastodon.mikemcquaid.com","michif.xyz","social.rdl.ph","grim.run","mastodon.matrix.org","hallihan.net","runbsd.ca","dopamine.social","strings.io","mastodon.tech","mcgrath.club","mk.shatteredpalisa.de","moa.st","social.networkingnomad.net","mastodon.joinhaven.us","radfoote.net","social.unitoo.it","amisk.cipay.ca","fr.readthefinemanual.net","soulzeppel.in","turingfesten.dk","mastod.on74th.cloud","mastodon.rym.social","stuttgart.network","mastodon.aether.us","fosspri.de","meta.jorun.dev","twatter.catvibers.me","kitty.haus","ck.umrath.net","social.mrks.network","social.targaryen.house","mastodon.gargantia.fr","ephemeral.glitch.social","fedihost.io","tbo.social","brettiverse.com","schichler.dev","f.iroiro.party","fedi.technodro.me","queerdon.social","unvaxxed.nl","mastodon.litelot.us","mastodon.shinomoroll.net","omba.nl","stereodon.social","eboks.social","video.ellijaymakerspace.org","deckard.pub","mastodon.mmjo.com","jauntygoat.net","jcarbaugh.com","social.obsolete29.com","cyberdeck.social","raccoon.community","sinax.be","toot.sh","magic.win","masto.ezhevita.dev","pleroma.wafflec.one","appalachian.town","odenwald.social","social.caruso.one","gaycity.lgbt","sironi.tk","masto.recknsense.com","locksport.space","fediverse.omaramin.me","redpawcollective.co","t2.thotsofa304.club","fouroclockfarms.club","obsidianmoon.com","mastodon.thefword.club","comfy.blue","social.stephenfirth.co.uk","girlthing.chat","pub.frostillic.us","social.server17.net","t.manfre.net","kastelo.dev","ozlabs.house","ooops.cloud","mastodon.obspm.fr","reseau.dupeuple.fr","pleroma.lokean.org","regenerate.social","bifrost.berzerk.pl","mastodon.gramschladen.de","thebene.fit","banu.com","kudabiverse.com","mst3k.interlinked.me","m.rwhb.me","canada.masto.host","mastodon.actor","scl.zmb.cm","mastodon.sphericalk.at","taiwan.wtf","mastodonte.org","masto.uno","khushrajrathod.com","social.edzilla.info","tur.bot","lgtm.systems","achrilock.social","blacksun.social","social.leoji.codes","xn--80atgh.xn--90aldbalef8bvy9l.xn--p1ai","mastodon.hams.social","yuustan.space","ohnoim.online","quarteredcircle.net","video.lemediatv.fr","social.daviey.com","abuzz.social","social.ivor.org","fedi.at","mythago.space","pleroma.doingyourmom.club","m.refractive.group","blobfox.coffee","friendica.mifritscher.de","supportforce.ca","astolfo.social","mastodon.chrisjov.de","cult.hirad.it","blat.at","fedi.gvisoc.com","skeptikon.fr","wandering.shop","kakafe.ga","ak.infernal.garden","skeleton.cool","social.wildeboer.net","danp.net","crank.recoil.org","nojack.easydns.ca","5lb.co","philly.vs-the.world","hackerdrinks.social","this.mouse.rocks","mugicha.club","mstdn.seerr.dev","shota.house","the.jokertv.eu","social.rhumbs.fr","social.sim.onl","appellate.social","nonexiste.net","social.mootech.eu","mastodon.ch-le.fr","brain.worm.pink","activitypub.owenryan.us","social.plux.wtf","mastodon.hoppinglife.com","exercise.cafe","mstdn.bx23.net","bloor.tw","lucahammer.com","hispagatos.space","friendica.togart.de","redeyes.club","hyss.us","pleroma.nobodyhasthe.biz","freaknweekend.com","gr0k.net","share.elouworld.org","wake.st","miserables.net","mastodon.laurakalbag.com","hivecore.social","social.node001.net","plaid.boxpleats.com","murmurs.social","mk.roobre.es","holonet.social","astoundingteam.com","zia.io","social.natlec.ch","rag.pub","magnetic-ink.dk","v.st","grh.am","notsorandom.com","wyrm.one","2c.taoetc.org","mastodon.xethos.net","mastochist.social","0xff.social","hails.org","tjpalanca.com","social.ornella.xyz","glauca.space","mk.starnix.network","micro.sadlerjw.com","unverified.club","ptwg.xyz","pl.seahorse.sh","mk.gabe.rocks","janxy.town","rndmm.us","panzner.net","thesix.social","trollian.space","pub.eeruwang.me","mk.pupbrained.xyz","f.freinetz.ch","social.tripulse.net","maclock.social","an.exchange","u.miaomiao.li","mstdn.lyonsinbeta.com","pixels.jdt.io","social.anon-groups.de","fedi.jiyu.dev","hep.social","s.mikka.md","www.mastoworld.com","mastodon.someotherguy.xyz","josh.tel","ajax.gg","tooot.im","craftodon.social","commodore.social","mas.glowing.surf","panicking.net","mstdn.progressiv.dev","www.blogpocket.com","social.openmtx.com","orbiscognito.com","dhealth.social","does.social","mieth.social","toot.mattedwards.org","social.handholding.io","grumble.social","thoughtbot.social","willnorris.com","unextro.net","milliways.social","chinwag.org","vanbever.ch","social.horrorhub.club","gonzohacker.com","c.im","greenish.red","social.anufrij.de","ice-lolly.social","jammer.social","chat.noelle.codes","mastodon.duncanhart.com","rwx.ch","retroparadise.tech","notnow.dev","bert.org","bhre.social","demos.chat","elle.systems","jsantos.eu","mastodon.annleckie.com","mastodonsuomi.fi","geneadon.social","mastodon.sxpert.org","social.zwoelfdreifuenfundvierzig.net","werblog.com","social.knightleow.com","rls.social","fedi.tesaguri.club","rcsocial.net","atomicpoet.org","social.parentheticalrecluse.com","fedi.somedevfox.ru","togethr.party","social.hackaroun.de","nondeterministic.computer","pleroma.jamesp.org","social.dms100.net","social.watercoolertrivia.com","naturar.social","toki.social","admiralfeb.social","mastodon.frl","socks.masto.host","masto.kruythoff.net","hellsite.net","cybercrusade.xyz","abdn.social","gly.one","social.tyngsboroughma.net","moe.reisen","highplains.social","maciaszek.social","camp.crates.im","varia.zone","cardgamehell.masto.host","peertube.touhoppai.moe","miscworks.net","xn--baw-joa.social","the.asbestos.cafe","rainbowedpill.org","mi.nycu.moe","social.strandundmeer.net","friendica.ironbug.org","mastodon.monoceros.co.za","dergnation.org","uberspace.social","emacs.ch","olstrom.be","stevenz.net","wolfpaw.kr","blankpad.net","carlnimbus.com","pleroma.dark-alexandr.net","lazybear.social","p.6921.space","social.wideboys.org","tooty.org","ntrp.lol","visalian.com","frikiverse.zone","social.vmbrasseur.com","jbstans.social","dogbox.social","wargamers.social","signs.codes","birdsite.wilde.cloud","chin-co-ne.co","mastodon.electric-goat.net","comam.es","mastodon.slightlycyberpunk.com","sasa.africa","sarble.xoxarle.com","catgirl.download","autonomy.ninja","babb.be","mrtodon.net","uilleann.pizza","cs.social","mastodon.jordanwages.com","mammothcirc.us","haxim.us","systm32.xyz","social.spamourai.fr","heylisten.social","bantha.tatooine.space","misskey.dev","syzito.xyz","postchat.io","thewinter.space","whmcr.com","myna.social","manyworlds.fit","social.cherrykitten.dev","lizards.live","social.forestroad.xyz","gibbr.org","boitam.eu","nsfw.social","supervolcano.angryshark.eu","dial.modem.show","cuff.social","mastodon.tardis.pw","mastodon.nycmesh.net","sackheads.social","northeast.one","chudbuds.lol","mast.ttk.is","kiyi.ca","snapp.social","waag.social","arrakis.se","magicalgirl.party","u8.is","gotosocial.kemonine.info","social.solibre.de","a0s.de","sanguinem.space","friendica.ambag.es","demigod.bar","anarchydica.net","mumak.app","social.ars.electronica.art","ghoti.au","isosceles.love","woof.group","social.manalejandro.com","piratenpartei.social","mabe.space","lilith.codes","waytoohip.com","sekretaerbaer.de","pl.tkammer.de","videos.trom.tf","gd.social","etheirys.masto.host","willfurnell.com","toot.tomn.co.uk","canarygateway.com","jenna.masto.host","hutt.social","joom.la","jokiller230.tk","masto.ws","lire.im","meshed.cloud","netz.darknight-coffee.org","warcraft.social","toot.lgbt","social.hibiki.eu","mastodon.elte.hu","birds.town","faerie.social","climatejustice.social","finkasaur.us","akkoma.thesandbox.net","my-social.nl","thewiring.com","onemorestop.photo","toot.liw.fi","notes.whatthefuck.computer","social.fedihams.net","ostfrie.se","n-odes.social","www.foxyhole.io","framapiaf.org","joshthomas.dev","eza.link","s.lono.space","mastodon.africa","hcommons.social","erisly.social","toot.houbahouba.de","social.hyper.dev","1bitsquared.com","gts.spinne.systems","rouge.eu.org","mastodonperu.xyz","rvagc.social","m.blasteh.uk","social.chatty.monster","social.ridetrans.it","nognu.de","pupy.cafe","social.fellr.net","patrick.social","bassam.social","social.dropbear.xyz","miruku.cafe","sfconservancy.org","mast.odon.irish","mastodon.eramne.com","sharma.io","med-mastodon.com","vaughan.social","geekyonion.social","joshanders.com","tc.nz","wolfdo.gg","mastodonnederland.online","friendo.space","toots.coronet.io","social.pengins.dev","cc.pwntoney.com","mastodon.wurzelmann.at","timetheft.social","computerfox.xyz","mastodon.redgarterclub.com","fruef.social","strangeparts.com","redliberal.com","mastodon.schaal-server.de","air11.social","fex.techbio.eu","mastodon.yohan.es","turnip.solutions","socialcalgary.com","video.sadmin.io","mastodon.vladovince.com","purpleforest.social","social.schoonens.nl","social.tryptophonic.com","skynate.net","social.geekwisdom.org","joshdata.me","katy.media","federated.fun","neelc.org","mastodon.haram.kim","foobar.social","ding.so","lethargic.talkative.fish","disaster.bi","m.dhosted.io","rocketsnail.masto.host","playground.bonfire.cafe","ap.maladaptive.art","ynotnetwork.com","ungrind.io","sneed.vip","karkatdyinginagluetrap.com","flokinet.social","libranigans.com","m.rse43.com","pouet.chapril.org","author.chat","real.dogsex.org","toot.kabadesu.ch","social.mailpace.com","mastodon.tobedefined.net","devianze.city","darn.social","provo.lol","gweep.cat","edumasto.org","apobangpo.space","mastodon.astifter.com","x8r.net","mstdn.at","v64.net","schwanksta.com","mast.thomasdmn.net","aurochs.moosecow.net","quasselkopf.de","reasonable.world","orctavern.pub","poster.place","m.gavinbrown.xyz","libertaria.space","www.folk-music.uk","cornichon.me","tw.town","conversafiada.net","helmholtz.social","artraige.masto.host","cartbefore.horse","murray.run","hrmtc.io","deconstructed.social","valhalla.social","social.electrafish.tech","skinnyver.se","social.tromdienste.de","mast.mmwelch.net","social.jasonsanta.xyz","social.interferencias.tech","photo.lapineige.fr","joshdick.net","pleroma.in.th","thicc.horse","mastodon.insicurezzadigitale.com","kampftoast.de","defenders.town","peertube.openstreetmap.fr","kopiti.am","ericmerlock.social","network.javier.computer","masto.taintedworld.org","awoo.fyi","indiepocalypse.social","mymath.rocks","social.photogabble.co.uk","fed.celp.de","drk.network","mstdn.yakitamago.info","frogs.lgbt","rigcz.club","machteburch.social","fuckgov.org","randomfoo.net","mastodon.lifebystills.co.uk","social.lsnet.eu","sitedethib.com","langsec.social","xn--69aa8bzb.xn--y9a3aq","frmsn.space","ravearizona.club","flexsite.masto.host","polycycle.io","biphant.social","ilja.space","status.fberriman.com","exile.social","gts.lord.re","hildrey.net","werd.social","hardill.me.uk","freifunk.social","social.intragon.org","journodon.com","honk.novalis.org","pvl.pw","kitzmiller.social","t.fred.social","history.lol","mastogelb.de","mk.igwigg.space","safareig.calbasi.net","muthukrishna.social","social.c3l.lu","strimolec.jeder.pl","noam.social","ncpb.social","griff.la","toot.eclibse.com","soc.nothing.run","mastodon.opportunis.me","mastodon.syncpundit.io","pleroma.tentacle.expert","mastodon.audiophilestyle.com","birdsite.link","pleroma.ztrl.de","reidodon.net","townsends.online","social.perceptiveconstructs.com","pleroma.m68k.church","sheffield.pub","iamanerd.club","monogram.org","tarmil.fr","television.social","arlington.social","lode.social","lakedistrict.social","shredderfood.com","ignifi.social","benward.social","stack.black","x0f.org","honk.petersanchez.com","toot.philevans.uk","linksgruenversifft.social","catgirls.technology","toot.lonninator.net","m.yihao.moe","toot.zip","tootsmcgoots.io","inthebeliefofbetter.social","mastodon.yeri.be","pleroma.robertoszek.xyz","eigenmagic.net","birdsite.slashdev.space","nixnet.social","mastodon.richardhickson.com","mstdn.poyo.me","social.spainco.net","mastodon.myfed.space","social.kwatra.me","dvd.chat","cjlm.ca","social.dissidence.ovh","mast.pceninja.com","peasej.me","left-tusk.com","mig5.social","besocial.co.za","tikirobot.net","digiwake.net","mast.mulliken.net","tycho.space","programist.ro","quiet.town","woolly.monster","kibitz.cloud","mastodon.dreadedoutlaw.com","rheinneckar.social","solitary.social","joingeeksocial.com","mastd.dev","feedsin.space","campaign.openworlds.info","nc.social","social.jvan.be","fed.hvn.network","fedi.rawles.net","mastodon.eco","flausch.social","metaplane.xyz","epichairekakia.com","mast.gg","troet.eloquer.de","firekitten.social","cuthrell.com","social.halfast.com","foxesare.sexy","corgis.social","cornputer.org","social.northernvoice.app","stoner.town","social.deadsuperhero.com","pwet.me","komuna.digital","pullopen.xyz","social.laboratomium.de","cloud.karagory.com","rage.love","social.bbc","social.edu.nl","k.iim.gay","crmbl.uk","blazinggophers.com","awoo.space","fedi.steakandgravy.com","epsom.social","art1sec.uber.space","mk.slipfox.xyz","mastodon.hawaga.org.uk","byteheaven.net","mashed.cloud","primarycare.app","johnwrogers.co.uk","mastodon.dbatley.com","vue.land","ozhika.me","high.cat","lap.social","batchats.net","mas.pub","dapchat.online","vtubers.site","mckellar.social","bbq.golf","toot.dragon2611.net","machines.social","misskey.m544.net","aeracode.org","monkeysthumb.co.uk","bots.reinhart1010.id","social.typica.us","dragon-fly.club","strange.codes","toot.martyn.berlin","adney.land","duan.ca","hespere.de","meeps.dk","aroace.lgbt","schutt.social","contentnation.net","social.creatureofthehill.com","m.twos.dev","cb.janusworx.com","cronenberg.cc","nanosector.nl","fimidi.com","fediverse.jefflembeck.com","prodromou.pub","toot.megadrive.me","social.raeffs.dev","mastodon.kinlane.com","genealogy.social","social.alpenblick-resort.com","amplified.panatropic.computer","controlfreak.live","social.sargasso.nl","kafka.icu","noosa.social","educator.social","m.krekt.net","masto.dopiaza.org","fsmi.social","wellduck.me","plnetwork.xyz","memefirst.social","bounced.ca","social.kontrollapparat.de","elephant.crime.group","vhspace.social","mastnode.faith","www.no-thoccs.cc","publishing.social","sneed.social","route66.social","mastodon.j15r.com","lawngno.me","moew.app","pinniped.pub","tschopp.net","heidel.berg.social","bvq.umbrellix.org","eventos.coletivos.org","eightballde.luxe","mastodon.janstenpickle.io","yuuta.moe","nobigtech.es","social.blogsofwar.com","x.adkins.digital","digitaal66.social","mastodon.imfing.com","ambrosia.cafe","social.inex.rocks","dom.ke","gnusocial.net","mastodon.inf.ethz.ch","mimimi01.masto.host","mk.udongein.reisen","litmind.club","daemonica.net","mstdn.litschner.com","micro.hcj.sh","bensmith.uk","social.kiesow.net","disabled.social","helvede.net","demon.haus","gts.ferreo.dev","social.jsts.xyz","motley.club","zord.works","abscue.de","kinky.business","widerweb.org","cityofchicago.live","meow.tuxcrafting.online","social.dunkelmann.eu","chaosfem.tw","mstdn.cuezakuisgodofthe.world","social.schiessle.org","supertails.social","infinitelibraries.com","spacerslike.us","betterconversations.online","zap.dog","masto.kreks.nl","m.olio.lol","vran.as","social.xenofem.me","mastodon.praxis.red","rabbit.tel","jointakahe.org","social.lostcoastoutpost.com","mcd.dk","hact.org","leastfixedpoint.com","social.bitplumber.de","mastodon.parastor.net","wrong.tools","pieville.net","scorpinc.social","barcamp.social","kelp.community","msh.al","devoe.social","miraiverse.xyz","soc.ironwyn.ch","tzcafe.com","social.sakamoto.gq","mastodon.mg","tsunde.ru","feral.cafe","charr.engineer","mastodon.hr","pleroma.wolfie.pw","mastodon.lawprofs.org","mi.tkw.fm","social.furry.scot","mastod.no","dan.mastohon.com","cc2.at","anduin.net","mastodon.mariobreskic.de","piupiupiu.com.br","mstdn.plus","jorts.horse","shmg.online","netzsphaere.xyz","bg.cafe","social.city-of-glass.net","social.arunmozhi.in","ninjaturtle.xyz","heiber.im","waste.social","fed.vacant.ventures","tecnfy.com","0badc0.de","phildini.net","vtor.me","social.brentjanderson.com","blog.writefreely.org","mat.tl","impeccable.social","gts.churanova.eu","w-2.io","geese.lol","andersen.social","zx81.social","sexpolitics.co.uk","masto.adamchandler.me","dlitz.net","dcreager.net","velocipederider.com","social.unnecessary.tech","social.ccw.icu","ghostdub.de","tootaloo.me","social.tsun.co","social.pixels.pizza","social.1337.lgbt","thesocial.institute","devs.live","upload.chat","nixos.paris","bikeshed.party","windows11sucks.com","toot.tom-eric.info","normal.style","troidy.social","social.jacklinke.com","snarky.club","mstdn.kizaing.ca","freak.university","j4nk.dev","social.madeoutofmeat.com","ghuntley.com","mastoxiv.page","weeaboo.space","toot-lab.reclaim.technology","zef.social","zmtdn.de","darmstadt.social","autogeree.net","blovice.bahnhof.cz","masto.masto.com","raspberrypi.social","romeov.me","pont-bl.eu.org","social.ei8fdb.org","chronrevisited.online","friendica.exon.name","uvensys.social","pl.comofas.org","coredump.social","critcare.social","social.cowingtonpost.com","is.nota.live","tuxz.one","akkoma.ddns.net","social.binarydad.com","pztrn.online","mastodo.neoliber.al","dobbs.town","ctdl.co","meerjungfrauengrotte.de","linernotes.club","www.librepunk.club","henshaw.org","queer.af","piggo.space","birb.elfenban.de","social.aviating.com","the.others.social","toot.phseiff.com","toot.igniterealtime.org","friendica.andreaskilgus.de","neet.church","masto.payfrit.com","social.jakob.space","social.avery.cafe","stctp.zone","aperturescience.net","social.brainsys.com","writeout.ink","bbs.crumplab.com","ottawa.party","tantek.com","social.themightnotworkshop.co.uk","kampa.si","social.gamesartliveperformance.com","social.oxgoad.page","mstdn.patatas.ca","nyan.lol","social.slow.pictures","pennytucker.social","rva.party","thegem.city","pixelfed.hylobatidae.org","mast.drakakorp.eu","post.rodeo","social.skrep.in","holygrena.de","moc.d-x-b.com","mastodon.tn","thewinchester.pub","mastodon.dr-hardware.ch","nugget.social","toot.slashams.dev","cadiz.ovh","modest.com","mastodon.chrisbol.nl","remerge.net","social.circl.lu","jacobian.org","tryste.ro","mimmoth.club","xyzzy.social","masto.namwen.me","public.garden","mstdn.binarytango.com","0x1.ddns.net","skyjake.fi","beepboop.one","social.thiskurt.me","toot.osto.us","soc.pierobosio.info","stammtisch.tupambae.org","palau.pro","objc.social","thehb.me","dariox.club","sofahq.social","toast.farm","kramerc.social","cryoem.social","friends.devinemarsa.com","interconnected.systems","hoob.io","ramen-fsm.eu.org","nog.community","scalie.business","mastodon.vn.ua","mastodon-us.net","sysadmin.run","social.xbm.se","manton.org","mastodon.lookbusy.org","staniverse.one","is.a.qute.dog","kloud.social","social.optimus.ovh","mastodon.returntosander.net","gts.velveteen.one","mastodon.schwanzer.online","autistic.blog","eden.one","babb.no","duwa.ng","social.owotel.com","microblog.at","masto.bg","mastodon.ketz.io","gabi.is","rockosbasilisk.com","social.rustysoft.de","howdee.social","pantherx.social","toot.blue","nfriedly.com","toot.zof.sh","sysctl.io","pleroma.sjm.codes","gamedevalliance.fr","avatastic.uk","cryptodon.chat","dev.ard.social","angelo.land","deadinsi.de","social.krebsco.de","social.soap.coffee","translunar.academy","mbe.tv","social.semiotic.systems","mdon.ee","loneliness.academy","fedi.fullvoid.de","vkl.world","anicelittle.network","m.orels.sh","stefanbohacek.online","eientei.org","bonga.nu","mastodon.vanlife.is","0ab.uk","schuppen.social","nicuverse.org","makers.gadgetboy.org","the-gathering.space","bewegung.social","hastodon.org","hda.zone","outmo.de","bluenoser.me","social.drgnz.club","gnomos.org","shitposter.club","hat-eine.entenbru.st","maddox.io","graphe.me","fediverse.midala.net","mastodon.hugopoi.net","solarpunk.moe","girlcock.club","ruinous.social","moores.org","muenster.im","pl.eragon.re","mastodon.wormhole.eu","krpgpub.net","gamache.org","masto.la","social.awcca.community","cathode.church","mastodon.nrgup.net","tragi.cc","schnauzergang.online","ungoverned.social","syfershock.com","developer.social","m.benui.ca","mastodon.nebulon.de","masto.actor","soc.hyena.network","mastodon.lertsenem.com","mastodon.tech-nico.de","emu.social","mastodon.nerdy-technician.social","paperbay.org","tomstu.art","pleroma.patricia.no","void.abnormalfreq.com","connectified.com","texasobserver.social","gratefuldread.masto.host","ak.lightnovel-dungeon.de","proud.social","queef.social","writ.live","less.suitwaffle.com","henshaw.social","discourse.social","publicidentity.net","social.chilira.com","live.retrostrange.com","spacelasers.us","pouet.april.org","social.airis.work","ooe.social","mastodon.flying-snail.de","bygg.land","mentalhealth-masto.com","social.scambi.org","mastodon.monigh.nl","bibly.com","agwa.name","trunk.lol","waifuism.life","holdman.co","nugen.me","social.myexp.de","thecoolest.info","mastodon.eltrincagoti.ynh.fr","moziz.fi","mstdn.boeskol.nl","nnia.space","social.rutland.org.uk","lucha.nyc","holme.social","cantos.social","tuta.besserwisser.org","post.hillenius.net","fuzzy.click","hal.ai","mastodon.electroncash.de","friendica.knowhere.cafe","hrusecky.net","superuser.one","borgsocial.org","hibiscus.pink","aldr.garden","librenet.co.za","tavern.drow.be","explosion.party","m.fa.gl","djsumdog.com","lubar.me","wall.demouliere.eu","27origin.com","2pxnl.de","eleph.social","mastodon.cross.net.uk","social.h9k.wtf","harter.us","clq.im","notpickard.com","please.quitstaringat.me","greatview.video","salted.fish","synapse.cafe","b7e.dev","apeiron.aire.ml","fedi.arkadi.one","pleroma.davidgtl.me","social.sabletopia.co.uk","social.stale.link","fedi.togen.xyz","pad23.com","foo.sx","poliversity.it","mastodon.ericlathrop.com","genart.social","number5.dev","snack.social","lifeofpablo.com","stream.labr.online","masto.therealblue.de","stolat.town","gagniard.org","pachy.youshallnotpass.com","leds.social","zeal.center","furry.energy","shitter.blue","macato.net","pleroma.glueoh.com","notclickable.social","fem.social","starflower.space","mastodon.vm.statshelix.com","01001010.social","social.losno.co","social.stanleygamingguild.com","andrlik.org","litrpg.online","wolfgirl.bar","scruz.social","seldo.dev","pleroma.noellabo.jp","concernedphilosophers.org","akkoma.chikai.network","spv.sh","dias.chat","ajin.la","barach.at","domo.cafe","firefish.lgbt","interlace.space","social.kaisare.in","granularperspective.com","genco.me","social.nah.re","social.tr0llhoehle.de","mstdn.dsnv.net","foxnewsofficial.com","cantina.tatooine.space","fedi.ioangogo.dev","andr3.net","vostain.net","joopleberry.garden","social.softmetz.de","amphora.social","misskey.social","social.riversouldiers.dk","charli.io","lviv.social","m.markjones.cloud","blackblock.rocks","hey.hagelb.org","introvert.social","sns.vvil.jp","mstdn.sheehanmiles.com","growers.social","tamausa.trigonoretrism.com","ricard.social","social.grim.town","justpeace.social","me.mlan.im","wasscher.com","social.cryptography.dog","social.yaofur.com","sundet.io","chat-node.uk","mastodon.martinchapman.co.uk","crowd.wales","crocosmia.ca","mrnet.pt","pepega.club","mastodon.radicalityincident.com","mstdn.itsnero.com","kursors.social","moosetodon.com","mastodon.internet-czas-dzialac.pl","mstdn.fifitido.net","micro.guedes.com.pt","2a03.party","cryptocartel.social","xyzzy.link","ma.zcx.cc","toot.lixo.org","mastodon.chaosfield.at","damnitcarl.dev","libutzki.de","nuwus.org","toot.pacbard.duckdns.org","burch-hill.com","fido.stephenbasile.com","fediverse.rm-rf.club","ftp.rip","pleroma.stream","cybernetic.garden","pleroma.comfysnug.space","thias.hellqui.st","boymoder.biz","fed.t0.lv","religious.social","6510.nu","slashine.onl","luckyleuk.noblogs.org","opencollective.com","tum.social","toots.dgplug.org","videochina.net","trilobite.space","laburrak.balaena.eus","catgirl.is","quasireal.ca","derpstra.nl","communicating.cypherpunk.observer","mastodon.hardcoredevs.com","40to.ca","frankenwolke.com","pleroma.zabaglione.net","bikeshed.vibber.net","rcrowley.org","toot.mirbsd.org","argyle.place","tech.satx.social","twitter.resolvt.net","fribygda.no","kwiecien.us","kwtechs.xyz","mastodon.brittg.com","monads.online","jobs.neverhunt.io","mastodon.overholts.dev","friendica.me","uns.social","mas.rhino-inquisitor.com","mastodon.crossthestreams.blog","talk.ogre.red","anime.website","osintua.eu","beekeeping.ninja","escaperooms.social","a11y.social","pl.salushnes.solutions","tuiter.rocks","not.acu.lt","mastodon.tonywebster.com","tomtaylor.co.uk","orasi.io","edina.st","fadrienn.irlnc.org","hoot-n-tea.art","social.advancedsoftware.engineering","coma.social","mstdn.iroh.tv","remoteitout.com","social.owlcode.tech","hepburn.social","social.bitfolk.com","mastodon.ocert.at","prismst.one","pch.net","yokai.cafe","social.evl.im","node.isonomia.net","cybersulu.ninja","dannythe.site","pleroma.bushi.moe","hermitmountain.top","cutiehaven.club","mastodon.paulober.eu","pleroma.smoothdream.online","squad.town","melb.social","akko.koifu.re","thethird.tech","mastodon.thi.ng","agora.echelon.pl","gultsch.social","freespeech.firedragonstudios.com","pheme.au","zomglol.wtf","dotorg.org","status92.social","mastodon.vhome.info","m.divita.eu","openshare.me","social.meenzen.net","jonmasters.social","mats.sh","cliq.social","telex.disinfo.zone","mstdn.thndl.com","social.drazisil.com","social.lewisdale.dev","social.teci.world","mastodon.concordia.social","pizzarat.ca","sharetron.com","mastodon.demortes.com","boing.world","podlibre.social","thinktanki.social","mastodon-pa.sorbonne-universite.fr","social.aleksrudzitis.com","tweesecake.social","social.transsafety.network","discuss.tchncs.de","twtr.vrij.social","fediverse.xavin.net","masto.1146.nohost.me","staging.moth.social","ovo.st","jplocalization.social","hub.medienbildung.ovgu.de","pod.vladtepesblog.com","allships.run","fiasco.social","mastodon.kirgus.net","groovytoot.com","sun.minuscule.space","vtuber.house","im.allmendenetz.de","spinster.xyz","v.basspistol.org","pl.dira.cc","wandzeitung.xyz","social.chatsubo.cafe","s.kevin.cl","ceilidh.online","encom.social","umet.us","girllich.link","decept.org","mstdn.paparasitic.com","video.hardlimit.com","pleroma.microblog.se","social.omar.website","awkwardly.social","knoxodon.com","qr.dev","bbs.keinpfusch.net","s.awoo.dev","helladoge.com","etw.uk","tomica.social","vyrse.social","any.dev","akko.within.website","autistics.life","mstdn.media","weblog.antranigv.am","eozygodon.com","candycorn.club","social.secretsealing.club","social.minbash.de","soc.crashed.org","fissionator.com","akkoma.net","dekeyser.au","c4.social","identi.cat","calckey.warrows.fr","goto.hellsite.site","alien.insurrection.tech","ocjtech.us","chromebook.space","sigfried.be","lebalkon.de","cofe.rocks","lep.wtf","goose.directory","social.avali.co.uk","social.ashwalker.net","rasterdon.com","friendica.gidikroon.eu","macaw.social","social.benlopatin.com","critter.zone","pixelfed.social","spore.social","social.servus.at","hitchtube.fr","sublimity.net","bytetower.social","goatdaddy.net","spooky.computer","valinor.social","s.twentyzen.digital","sanfranciscan.org","hemmer.land","slightly.social","lemm.ee","mynah.org","social.4f9e1738.ignorelist.com","social.oriol.ie","mastodon.balamb.fr","bostonsocial.online","mastodon.ml","masto.mads-hartmann.com","mastodon.octobot.space","seacow.social","space.jeroenvd.nl","newsrelay.org","neo.gyara.moe","people.awayfrompeople.com","mastodon.lebreton.fr","social.researchanddestroy.technology","realmonsters.rodeo","corteximplant.com","mast.ajacks.net","tonybark.com","indiegames.online","benzas.lt","beam.ta.rdis.dev","mastodon.insert.tk","ceta.dolphinhome.net","social.anji.nl","apb.me","megalonyx.social","dmrty.net","iam.reasonably.social","hackerspace.au","mastodon.recherche-et-cie.org","breakpoint.cafe","mastodon.edufor.me","piaf.stilobique.com","standup-comics.net","shine.d-lowl.space","aaronparecki.com","vss365mast.org","lostmy.pw","prattle.org.uk","adhd.energy","social.audiovalentine.com","denton.social","goblackcat.net","wayland.social","abunchtell.com","vanderwarker.social","mvskoke.social","mastodon.ctuck.com","namazu.club","p.eta.st","neue.city","social.scribblers.club","wpmastodon.es","noods.fun","foodin.ga","m3o.org","unrelentingly.online","snooker.uk.to","social.scot","birds.garden","social.itm.osaka","incipientjoy.com","firebird.zone","calico.social","masto.louzao.network","justme.masto.host","emacsen.net","theexpan.se","westend61.social","mastudon.com","urbanists.video","masto.me.uk","mastodon.pinheirodeabrantes.pt","ukese.me","brennand.net","mastodon.theultraworld.org","computerfairi.es","beebl.es","boner.camp","saltwatercity.org","the.zymocosm.com","social.hispabot.freemyip.com","queer.group","fgc.network","hell.social","birdsite.csachweh.de","s.pebcak.de","schykle.com","malu.today","sozialdemokratie.social","nfld.me","orbsafe.masto.host","njal.la","idtech.space","thisis.mylegendary.quest","pub.waffle.tech","smellslike.sparklef.art","nerdout.online","mastodon.pariserstr.de","social.clawhammer.net","mastodon.ktachibana.party","uxd.social","xn--y9azesw6bu.xn--y9a3aq","warehouse8.social","dysfunctional.social","symboli.cyou","coales.co","mstdn.jp","social.ariona.fr","ubiqueros.com","server321.de","digipres.club","spooky.social","skoop.hu","social.middleearth.fr","mastodon.gal","mammut.sekhen.com","brignell.co","phx.pub","tube.grin.hu","kaartinen.social","mastodon.awo.agency","ebooks.social","tripleeyegames.social","mas.home.monsiteinternet.org","social.phaseshift.studio","justbartek.ca","social.opendium.com","microblog.social","idic.social","nuklear.family","fediverse.one","kitchenparty.online","moth.zone","tapbots.social","babblebox.net","rodent.city","mellified.men","is-a.wyvern.rip","podcast.tomasino.org","mastodon.jamesoff.net","social.animeprincess.net","eug.social","social.sankara.me","theres.life","mastodon.deadgnu.org","prodmgmt.social","social.sparkles.cafe","inuh.net","andyd.uk","social.skewed.de","thms.uk","toot.icu","honey.town","toot.pt","one.darnell.one","pon.icu","botwerks.social","motorsports.social","mi.sugattor.ga","masto.galooph.com","yelling.it","tooting.ch","social.davesnider.com","misskey.design","roe.dev","shadowland.social","cyberpunk.haus","fanglitch.space","mister.computer","hits.social","mastodon.chriswiegman.com","arxiv.social","m.gianarb.it","pirate-wire.com","msps.io","mastodon.business","emfcamp.org","mastodon.falconk.rocks","mastodon.bits-und-baeume.org","oye.social","cthonic.club","oxytodon.com","ill.moe","mastodon.xnop.yt","victoria.masto.host","bluebell.social","mstdntest-02.rondheim.haus","bgtooter.social","decentralised.social","social.nelson.zone","ericf.social","media.privacyinternational.org","pizzafox.me","social.la10cy.net","fedi.cheeseland.xyz","longlandclan.id.au","5dollah.click","plem.sapphic.site","tyt.maanebedotten.no","suuu.us","dadchat.online","ocf.masto.host","ribeiro.social","kayii.goe.land","equel.social","mastodont.es","darkmoon.social","pancake.place","kopimi.space","serotonin.party","altelectron.org.uk","etc.passwd.org","teapot.zone","joshua.law","fedi.tetrarch.co","social.faebornnetworks.org","blog.artemai.art","social.thenextbillion.com","mastodonbooks.net","onetwoseven.one","neo.knzk.me","eitelh.uber.space","techopolis.social","feline.rodeo","halloweenpeople.masto.host","anothersuper.social","feed.hella.cheap","mcrn.one","newsie.social","ysr.ie","carhenge.club","m.terlson.net","mastodon.rand0m.me","skew-t.com","mastodon.canonicity.org","habitat.zelle.one","surfzone.nz","nextham.duckdns.org","shitposting.fr","doony.online","cktn.todon.de","big.trash.haus","mandra.us","san-junipero.gimme-sympathy.org","mastodon.ninja","antabaka.me","jemal.contact","xu.rs","genau.qwertqwefsday.eu","mastodon.scientiam.org","fedi.relms.dev","jasonrobinson.me","wybt.net","masto.rocks","xianlandia.com","boks.moe","grove.cyberdruids.club","love.alicecomplex.com","melonbread.dev","elbmatsch.de","social.xthemage.net","toot.wearejust.men","social.anoxinon.de","hive.institute","social.nkb.fr","hdev.im","splodge.fluff.org","franken.social","nyaaa.net","psysocial.net","mk.cybre.ninja","seediqbale.xyz","glitch.kiarc.win","imd.social","macrofurs.social","social.yl.ms","moarrensis.org","purplepenguin.lol","tv.schenklradio.de","social.thej.in","schoolahead.social","graeber.social","hates.company","sportsball.host","mastodon.com.tr","squid.cafe","brighton.social","sethetter.com","snac.haijo.eu","mastodon.uy","toadking.com","hardy.dev","is-he.re","sdf.land","other.blue","pidibi.com","not-ok.computer","avery.garden","schmarrn.dev","panic.com","gts.shatteredpalisa.de","fika.grin.hu","social.tnhh.org","gimp.chat","feed.victor.earth","social.mythic-beasts.com","kaputtendorf.de","dib-social.bewegung.jetzt","toot.lobrai.co","tunes.artemai.art","supercool.fun","technodon.social","perspective-daily.de","mastodon.comwork.io","social.societyofrafa.com","spectra.video","ouvaton.coop","social.icod.de","diode.zone","share.tube","mastodon.lieter.nl","social.air11.org","statisticallyhuman.net","p.umbriel.fr","social.vacantmastodon.ca","eweg.be","social.aladavinci.com","daemonology.social","wordy.gdn","strangeplace.me","mastodon.jzp.se","mastodon.kohan.pl","nsg.cc","mastodon.pundo.com","tomtau.be","theway.social","newsbots.californialocal.com","onevery.ignorelist.com","tube.kockatoo.org","gamerfort.social","mellow.zone","social.pueseso.club","cdrom.tokyo","rapidblock.org","f.lapo.it","die-partei.social","area51.social","akko.disqordia.space","mast.ohbutt.com","social.nancengka.com","yee.camp","mastodon.kroy.io","social.vates.tech","birdinter.net","toot.beer","social.dociq.io","chillout.day","cons.ivy.io","honk.farm","devdilettante.com","mastodon.workingweb.nl","amd.im","agilodon.social","akkoma.thejar.club","dumpster.social","mastodon.sg","bungle.online","nerdculture.de","social.mezzo.moe","citydweller.social","gts.rvn.ovh","descentraliza.me","classicalmusic.social","artoot.xyz","elekk.xyz","mastodon.modspil.dk","chrosy.net","norcal.social","malware.social","t3n.social","madscientists.social","s.stw2.xyz","post.michae.lv","s.ovalerio.net","social.gfsc.studio","social.gred.al","m.fnwl.uk","mastodon.fulltermprivacy.com","mastodon.ctseuro.com","x.cybrkyd.com","esquite.mazorca.org","stultus.net","galaxybound.com","aaio.eu","pettingzoo.co","clvr.bfan.cc","sorcie.re","mamut.cr","mudhut.social","meowr.me","gorone.xyz","tristram.uber.space","social.caserio.de","skorpil.cz","social.nazileaks.eu","social.mkm.scot","hola-soy-milk.online","itsze.ro","openjournalism.app","mastodon.siliconfilter.com","mas.gordons.gen.nz","mstdn.sidh.bzh","social.luca0n.com","hashi.icu","schnuffle.de","depixelated.com","tears.intherain.club","werebeast.net","things.uk","social.franssen.xyz","fedi.cr-net.be","social.moirai.cc","social.eyluldogruel.com","apcn.nz","estrogen.network","ogtrekker.com","blan.cc","anubis.social","refi64.social","rawr.ink","social.kennyqin.com","legrand.im","fedi.sabatino.cloud","pleroma.eichler-bg.de","tilvids.com","aiart.page","firmware.network","makertube.net","peertube.dair-institute.org","social.chadwaltercummings.me","mastodon.lanofthedead.xyz","social.azumanga.gay","thegeneral.chat","bunji.social","social.bearygoosey.com","links.artemai.art","hypercube.masto.host","moe.cat","mastodon.defiantjc.synology.me","pleroma.stuebinm.eu","checksum.fail","physchem.science","fediverse.pl","jako.social","hom.ph","wallera.computer","peervideo.club","mastodon.lhin.space","biplus.date","social.anacreonte.eu","cobaltkiss.blue","mastodon.davidpeach.co.uk","seal.cafe","embracing.space","posts.dumb.stuff.donaberger.xyz","mastgaming.com","outerheaven.club","social.massalabs.com","gensoukyou.jp.net","fedihum.org","ncbt.space","social.projectsegfau.lt","fedi.4i2.cc","toot.svenbrier.eu","deadnaught.andersonstoolshed.com","mainburg.hallertau.social","johnmastodon.eu","social.pmj.rocks","social.matej-lach.me","blieb.net","santos.social","occult.institute","social.grahamharper.net","jtlm.masto.host","davidciani.com","social.fbxl.net","nicoban.one","soc.jae.fi","void.lgbt","benehomini.social","my-spaces.social","moonbeam.town","chrispelli.fun","arkanosis.net","tivia.social","opensocial.at","oour.org","ferreo.dev","takumi.fun","lamp.leemoon.network","eliitin-some.fi","richard.directory","hacksrus.xyz","mastodon.xsoftware.it","kiwi.fuo.fi","uddannelse.social","pleroma.rauhala.info","k67.club","demon.social","pl.brodi.me","larlet.fr","mastodon.la","glaceon.social","pl.zombiecats.run","social.houseofkyle.com","margio.de","b4udw3rk5.com","x.goonj.xyz","pony.social","lumberjacks.social","fedi.theepicblock.nl","honk.danielmoch.com","social.lavanderblue.art","social.sailor.cat","li7g.com","pleroma.defis.info","bigleaf.city","exploit.social","xn--trt-tna.sebtobie.de","enigmaticnewt.social","theha.us","jvpiter.net","pleroma.debian.social","misskey.noellabo.jp","mammoth.lol","fedi.neuwirth.priv.at","dcentralisedmedia.com","fasol.org","fedi.ruinouspowe.rs","dani.cool","snowdin.town","lakomarka.cat","pleroma.oook.fr","social.jihad.icu","venera.social","social.pondr.nl","gemini-tech.be","signalnine.net","cyberglot.lol","social.azkware.net","trivia.to","gassner.io","swingset.social","pleroma.labrat.space","perkins.pub","weirdgone.pro","ubuntu.social","howse.social","kitsunet.net","richardloxley.com","sully.site","mast.socialspill.com","jvm.social","basel.social","m.adju.st","kvlt.zone","ivan.computer","pl.glitch.pm","skull.website","mastodon.flaircheck.ca","otters.at","exozy.me","fedi.criminallycute.fi","ipsw.uk","tiepup.co.uk","social.tyrel.dev","social.fedcast.ch","computering.pro","thegreendragon.online","social.cologne","techy.social","fed.sonnenmulde.at","mastodon.cedar-republic.com","pleroma.interhacker.space","linfan.moe","kongwoo.icu","duckchat.me","fedi.ml","micro.srvr.dev","social.lostcause.house","schmidl.dev","pleroma.volzel.net","harding.dev","asturias.red","social.captainark.net","pleroma.maciej.website","farts.social","arazil.net","matthauger.com","mastodon.yurialbuquerque.dev","social.prodottoinrete.com","trunk.jmtr.org","lapidak.is","arkham.cafe","toot.ballioljcr.org","vancity.social","masto-be.studio","pleroma.ecliptik.com","selenian.space","mastodon.garyhawkins.uk","mastouille.fr","csv.jodh.us","freethinkers.lgbt","oysta.au","sns.scwhost.org","blah.rako.space","comfy.social","mastodon.lescommuns.org","tenak.net","mastodon.3fx.ch","yukisou.xyz","eihei.net","mastodon.miicat.eu","c.wtf","social.uhoreg.ca","tusooa.xyz","social.primeos.dev","pleroma.gidikroon.eu","social.subversida.de","social.foxdn.net","sparingly.social","entropyservice.com","social.itzti.li","mastodon.heavyimage.com","mastodon.lateral8.com","ublog.thirdlaw.net","community.peer2peer.help","poliverso.org","dline.xyz","manitu.social","queer-lexikon.net","dragonchat.org","littleturnip.net","lopp.social","asimon.org","fashionviz.xyz","social.retroedge.tech","simmulation.com","backyard1.saifulh.online","gts.kianga.eu","turtle.garden","mastodon.pintofsimilar.com","jonleibowitz.social","social.nognu.de","pleromer.net","social.polynom.me","kotori.ilnk.info","mastodon.bofhers.es","glitchbird.com","texting.com","pleroma.ledoian.cz","boopsnoot.de","dummy.cafe","mastodon.tstm.info","team.yarnspinner.dev","social.fossdle.org","socialcoders.org","edolas.world","peertube.bubuit.net","fabler.su","fandom.ink","natterati.com","nerdfight.online","social.sturtz.io","latenight.social","recluse.social","microblog.club","electricglen.com","social.naln1.ca","itdev.social","rossabaker.com","social.ericbardi.com","millcrick.social","cast.samsai.eu","ful.social","feistycricket.org","social.fomin.site","mastodon.pwei.at","akkoma.agol.one","fediverse.thefloatinglab.world","nordgedanken.dev","social.jesse-saenz.com","mastodon.akxnet.de","skiddle.network","ilot.social","bkgrdclrschm.link","fedihub.rocks","toot.re","xmrposter.club","thecanadian.social","adventurousbeastie.eu","shelter.moe","hbjy.io","tauri.earth","pleroma.lclsea.icu","ouroboros.gay","mastodon.heppycat.com","social.extremelyoffline.org","social.jsteuernagel.de","dragonscave.space","social.linuxine.net","mastodon.fedisonic.cloud","cyberplace.social","mastd.racing","nunes.uk","kys.moe","very.tastytea.de","guineapig.space","txt.peaco.cc","social.strangetextures.com","toot.9wd.eu","yharnam.singles","fsociety.social","gulacsi.eu","hsslj.de","jeremy.hu","pleroma.gaos.org","sciences.re","mstdn.axtch.net","tausibs.org","social.hp-gauster.name","misskey.pnyhf.eu","marshall.house","ors.novababilonia.me","akkoma.lapineige.fr","onosend.ai","social.kootstra.frl","spielschrank.com","toot.ericrie.se","trolley.seattlebus.space","azapft.is","mastodon.joelving.dk","secluded.ch","nightshift.social","mastodon.dias.ie","mastodon.bgzashtita.es","toot.portes-imaginaire.org","social.seiichiro0185.org","kempkens.io","furry.nz","cmars.tech","shitpost.cloud","cho.yukiya.me","redpanda.lgbt","mst.mineown.de","i.cymaphore.net","toot.fsimonetti.info","arktos.social","pasta.ga","librosphere.fr","don.secretbatcave.co.uk","declin.eu","social.khajiit.de","banjo.town","imjust.one","social.gemnoc.ca","relayfm.social","soc.lewactwo.pl","mo.social","mastodon.bigpod.si","leibniz.pub","lasersword.club","social.uden.ai","austintexas.social","a13.social","aroah.website","allison.social","mstdn.sublimer.me","p.svp.im","free.gluten.space","toot.thomcat.rocks","social.integritymo.de","konfigurationsmanufaktur.de","tass.is","bwfinch.com","feedmechocolate.com","mastodon.infra.de","toot.matereal.eu","logilab.fr","peering.social","mastodon.digitalsuccess.dev","microbe.vital.org.nz","wizarding-world.icu","subdued.social","epsilon-ix.masto.host","notaphish.fyi","f.tkte.ch","social.freetalklive.com","corvus.social","skaverat.net","design.theater","mastodon.kosebamse.com","social.hendrixgames.com","socl.bz","spacelase.rs","social.prospeech.space","mas.structuraltrauma.org","agora.quellet.blue","persadon.com","istoleyour.pw","mastodontech.de","brage.fr","vk5fj.net","veganism.social","fantashley.dev","meatbag.app","edlings.social","wetworks.org","sleepy.pleasant.rest","dravidam.net","stopstaringatme.org","pug.social","ieji.de","social.tedium.co","frankly.social","notnull.click","spodeli.org","murf.org","101010.pl","toot.cafe","calebhearth.com","updog.no","social.openrightsgroup.org","pxlmo.com","atmasto.com","tucows.social","mattebox.social","club.saryay.club","ublog.tech","toot.0upti.me","mastodon.tekdmn.me","ibenot.com","video.chalec.org","straylight.expectnomore.net","social.bobby99as.me","mastodon.tetragir.com","micro.jacksonchen666.com","social.cloudron.io","jittr.click","social.kuester7.com","tad.me","jepsen.io","cryo.icu","cutieverse.social","fediverse.blog","glod.org","perfect.moe","boldcity.social","burro.win","social.mattburkedev.com","medium.social","jit.social","rva.fyi","ministryofinternet.eu","felesitas.cloud","social.artemai.art","me.dm","gn-tronics.dev","permaculture.masto.host","social.olchis.net","ak.vern.cc","ordinary.cafe","froth.zone","mas.ggr.me","tube.undernet.uy","social.romaricpascal.com","framatube.org","remolino.town","ursal.zone","m.hzrd.us","social.finkhaeuser.de","test.breadqueues.com","a.katgirl.club","unix.house","mastburgh.social","social.flaig.name","mastodon.tucsonsentinel.com","social.arinbasu.online","mastodon.raviteja.computer","soundbyte.social","fedi.twoshortplanks.com","shiru.social","elevenways.be","calckey.social","moltonlava.online","waytoomuch.info","belkadan.com","nitrokey.com","m.gom.tools","cat.family","terrible.city","social.paulderaaij.nl","friendica.opensocial.space","tube.pilgerweg-21.de","bennypowers.dev","dhub.social","ramuuns.com","coffeechat.social","ourislandgeorgia.net","mastodon.wardenbypass.tk","social.yaffle.xyz","pl.r8z.us","celsius.letemps.social","mast.quebec","toot.metasyntactical.com","forcedconversation.com","peertube.gargantia.fr","postingbrain.com","fora.win","akkoma.devhonk.tk","rascalking.com","phantomthieves.net","mouse.photos","lawfedi.blue","mastodon.8086.org","social.tsak.net","ihatebeinga.live","peertube.fenarinarsa.com","friendica.retiisi.eu","nfdi.social","tacoma.social","la-verite-vaincra.com","mstdn.cloud.themaymeow.com","giveupalready.com","tutoteket.no","pipou.academy","flyovercountry.social","mastodon.roelfrenkema.com","in-purple.de","eegle.cloud","memes.nz","smores.town","mastodon.treyground.dev","aelf.ee","social.atommac.com","sunny.garden","whoneedsabudget.cheap","gsg.live","frostmn.social","pl.hyperboreal.zone","friends.grishka.me","toot.fedilab.app","khiar.net","pix.diaspodon.fr","masto.nu","ak.angelstrapped.com","allistodon.xyz","sleepygremlin.online","teacher.quest","peertube.laas.fr","masto.sahilister.in","socia.dev","mastodon.darkou.fr","fedi.community","kurosawa.moe","craftcms.com","whereismysupersuit.com","djs.social","bucketofcrabs.club","stackpointer.ws","crosstalk.tech","f.reun.de","csdisaster.club","inconnu.uk","social.lacaveatonton.ovh","mastodon.adtension.com","hwfo.online","mountains.social","darn.fish","social.vikings.net","freumh.org","joelanders.net","peeps.press","social.sgawolf.com","socialclub.nyc","thepit.social","trackmania.social","fru.bar","masto.design","mastodon.linkerror.com","sc.sigmaris.info","witches.social","groupthink.fun","mel.social","semiosen.de","toot.huynguyen.org","fyralabs.com","www.loganjohndarylgraham.xyz","mastodon.reisig.world","mastodon.genderversefurries.com","soc.feditime.com","octofloofy.ink","shpposter.club","genomic.social","mastodon.lovetux.net","openedtech.social","social.gl-como.it","parentalmisguidance.com","wizzzard.online","t00t.cloud","social.taupehat.com","chirp.social","soc42.com","makersocial.online","glitch.taks.garden","twingyeo.kr","assortedflotsam.com","monks.city","akkoma.warped.dev","ck.cafkafk.com","suya.place","akko.remorse.us","tinylad.social","fedi.u2p.net","gorgon.city","zlma.org","boxofbugs.com","alt.lawndale.space","daily.surf","bagshaw.social","mostr.pub","cat.engineer","mastodon.fi","mastodon.transneptune.net","sms.cybik.moe","grants.cafe","critica.li","churrosoft.ar","witchy.social","shavedmammoth.social","squabble.org","beery.beer","social.dinn.ca","web3music.land","kijak.co","fedi.srijan.dev","social.cwill.us","progressivecafe.social","jebba.moe","gilbertredman.masto.host","screaming.com","statusq.org","fireplace.cafe","hatchee.bz","republik.ch","gotosocial.barr0w.net","erasethis.net","ablative.stream","catnest.net","toot.darkcooger.net","blahaj.eu","soc.schuerz.at","fedi.beyleyisnot.moe","krassestegang.social","peerstudios.net","pegelinux.top","is-a.cat","ist-ur.org","wiggle.website","mastodon.egroc.de","fediver.de","honk.deckc.hair","liminalisland.xyz","social.zdx.fr","m.jbonomi.dev","onenerdarmy.net","alive.bar","tnku.co","seattlematrix.org","toots.chamook.lol","innoq.social","net4sw.com","mastodon.cacheblasters.com","blog.epoz.org","rooty.tooty.org","silvernight.social","social.portertech.ca","fedified.com","fromm.social","maddie.rocks","petroskowo.pl","toot.muu.space","mstdn.online","tthi.as","clontarf.icu","neurodiversity-in.au","mastodon.apievangelist.com","bae.st","mobiliteactive.org","czinege.social","d.sh","hubzil.la","mk.toast.cafe","zcmi.social","friendica.mrpetovan.com","laipower.xyz","banes.me","mastodon.citrouille.ch","cailincat.cloud","social.gerbet.me","social.tomkrizan.com","ck.katzen.cafe","bytebuilders.uk","talos.link","flx.masto.host","goodass.dog","int21.dev","nullisland.social","michidon.com","social.chimaira.net","episcodon.net","dalek.zone","omgwars.com","mastodon.maier.social","masto.alancfrancis.com","restof.social","nerdcore.social","danny.page","geekcompass.com","mastodon.s-a.at","discuss.smash.today","social.anartist.org","msdyn365bc.social","is.aaronbsmith.com","odd.town","apa50.online","fetswing.org","mouseonthemic.rocks","compostintraining.club","brocks.social","mas.atmx.ca","beyondwatts.social","505.social","petrous.vislae.town","mastodon.beer","hypno.social","social.aa.net.uk","social.nice.kiwi","plag.gy","fidelis.social","betweenthelions.link","kavlak.uk","dallincrump.com","fog.highspirits.games","plasmatrap.com","burn.capital","mastodon.prodottoinrete.com","movsw.0x0.st","stegodon.eu","mastodon.clrk.space","mastodon.kawaiyume.net","sre.masto.host","mastodon.masonx.ca","fantranslation.org","chatterbook.us","bkrdam.social","blisscampus.com","sokkah.net","amplifyukraine.eu","social.bajsicki.com","sandestin.deckc.hair","cyberspace.rodeo","gts.cybre.ninja","sddn.space","mastodon.ir0k.de","mastodon.kg2.com","digitalmarketer.social","xiii.ch","besci.network","iconfactory.world","birb.site","mk.wytch.space","dltq.org","jr.lol","russ.network","social.jazzbutcher.com","final.li","forlorn.computer","adammiller.social","digitalsparky.com","social.xenolith.foundation","social.roeckoe.be","hejdu.lol","gaygeek.social","dym.sh","mastodon.binaryfour.de","shouldibuyahorse.com","bcostodon.lol","coolsocial.club","chatz.nl","okpeace.org","birb.space","karlsruhe.social","village.icu","social.scriptjunkie.us","mastodon.openbracket.ca","mastodon.meowcat285.com","jasdemi.com","academiccloud.social","peertube.1312.media","mastadon.littlebonsai.co.uk","toots.page","fuzzyoverlords.org","disco.camp","formansbasement.club","social.wuatek.is","rustywinks.net","kfogel.org","cybergov.de","social.firc.de","0lb.be","catholicchurch.social","baker.uk","irrelevant.me.uk","skippers-bin.com","thiart.com","story.panormus.blog","sury.org","mastodon.clinicians-exchange.org","cryptodon.lol","cambrian.social","actuallyacat.com","toot.ptinem.io","typo.social","petrolheads.social","leftoverpizza.rocks","mastodooooooon.xyz","johnnygrimmer.social","speakout.social","craftopi.art","vrij.social","gursoy.social","dysfunction.social","cromie.org","nerdfoo.dev","mastodon.gouacheairship.com","yankee.social","jacobwhite.us","lanciano.it","forster.pro","moin.city","tooter.srijan.site","watzonmanor.com","talking.dev","wxcloud.social","bdx.town","watch.ocaml.org","fedi.ziyun.rocks","ohbear.wtf","yiff.life","mastodon.underworld.fr","fabulous.social","lsbt.me","nimantu.de","mecha.garden","mildlyfunctional.gay","mastodon.hsablonniere.com","social.singing.dog","test.dhbit.ca","atellier.space","social.synesthesia.co.uk","tese.la","toot.robzazueta.com","social.chaos.koeln","masto.ashfurrow.com","dekkia.com","frog.fashion","glyphy.com","6t.vc","compensis.de","quesos.io","digitalstuntfactory.com","mastodon.robertivanc.com","mastodon.doneydenouden.com","1234.as","fed.xnor.in","social.gibiris.org","follow.proofgeist.com","kraud.social","butwithgod.cn","social.miwil.com","social.californialocal.com","monsterfuckers.online","fedi.binarycounter.net","ninjagroup.moe","nya.house","chainfire.eu","mastodon.localecho.net","faithtree.social","trashbrain.org","fnordon.de","mastodon.kotwica.me","mallegolhansen.com","esoteric.party","toot.smwhr.net","matapacos.dog","hub.kliklak.net","social.5f9.de","indiefilm.fun","social.ghost7.com","mst.thumped.com","social.emisocks.com","citrus.farm","roleplayers.bub.org","mastdn.social","pleroma.chaoswit.ch","post.naskya.net","wolfy.club","yummy.feedmedoughnuts.com","social.vrutkovs.eu","akkoma.bhsnw.com","ma.ohmreserve.com","mastodon.jfmblinux.fr","isntvery.social","notlegit.net","page.lgbt","social.code-feather.de","wristwatch.social","social.ninabobina.me","qrpth.eu","social.sunnypup.io","catgirlin.space","oort.social","levis.name","social.radon.rocks","reddthat.com","climatejustice.video","social.gitea.io","nopasaran.red","sabadell.site","mastodon.teachmaths.org","my.elven.pw","onewilshire.la","social.durell.net","503junk.house","social.saarland","jorgejarai.xyz","samenet.social","bwa.social","toot.teaandkittens.com","mastodon.berlin","fedi.jeremy.hu","dulc.es","antisocial.ly","social.tpapak.com","transient.garden","adinfinitum.social","abraham.su","thedreaming.city","mk.absturztau.be","alstrom.com","angrytoday.com","tinycities.net","bird.im-in.space","bow.st","flatulence.party","toot.whatever.cz","mastodon.de","follow.brunopedro.com","mastodon.hyggeverset.dk","lond.com.br","nali.social","social.tupo.space","mastodon.fixermark.com","idlethumbs.social","gametoots.de","bird.rodeo","browsingpachyderm.net","thesnakepostoffice.online","av8r.ca","az.social","worm.pink","toot.conrad.cafe","owo.justdied.com","sportstodon.com","carclub.social","glenelg.social","arun.cloud","honk.stumpf.co","status.kinlan.me","fitt.au","blogsquad.social","mountaincloud.social","learningscienc.es","social.overlappingmagisteria.org","mastodon.rosseaux.com","mast.flups.familyds.org","h.x61.ar","news.twtr.plus","mastodon.sludgepool.org","hax.social","tootsmygoots.com","mastodon.mumbled.xyz","the9thcircle.club","oisaur.com","masto.al2.in","social.ourpad.org","status.sexyferret.science","masto.futbol","something.wtf","m.nintendojo.fr","fractalego.social","mstdn.amiantos.net","beutl.space","vaporghost.at","social.fouquet.me","puz.fun","dryan.com","phl.social","social.romeov.me","n7.gg","social.lc","mastodon.surazal.net","bouma.social","social.lahevirta.fi","derstandard.at","hub.uckermark.social","mstdn.ethnet.io","status.steren.fr","social.afontaine.dev","shbgm.space","yesand.community","toonvandeputte.be","symbolic.software","rustedneuron.com","pixel.artemai.art","p-dev.net","nerdlings.net","neverhill.social","nicecrew.digital","circus.town","extremeprivacy.net","malenfant.net","aoir.social","moe.onl","helpfulpodcasters.social","social.ds106.us","jaredzimmerman.com","thatsit.social","liip.ch","social.abraum.de","pl.fanyx.xyz","open.audio","sly.dev","s.yelvington.com","psst.al0.de","law-and-politics.online","zzz.rocks","calckey.quiteabsurd.net","pb.todon.de","techie.community","tilde.green","strangeweb.page","m.tzyl.nl","stegodon.nl","classe.iro.umontreal.ca","firedragons.net","rojogato.com","probablyfreespeech.com","telegrafverket.cc","ounce.zone","quietplace.xyz","quitter.pl","packet.social","inherently.digital","social.balpha.de","fedi.lt","cantor.cloud","h5q.net","interfaith.masto.host","argon.city","pl.catboyindustries.co","sup.f5n.org","su.bli.me","boothcomputing.social","squad.gay","piou.foolbazar.eu","rap.social","savepoint.social","pwsh.social","blank.org","sneak.berlin","myxoz.port0.org","blog.kamens.us","bostonmusic.online","thefooty.club","noyu.me","fynbo.social","lab.how","dorset.social","learningdisability.social","mastodon.spotek.io","swebb.social","beckmeyer.us","thecommandline.social","mastodon.huntsvillain.com","paktodon.asia","smitenet.com","kan.social","holzer.social","awesomein.space","blackstar.cafe","techies.social","utveckla.re","blog.liedra.net","mastodon.timnolte.com","cultiv.social","loci.onl","common.blisses.org","twipped.social","don.blognot.co","social.chaosmagick.com","socnode.social","makegames.social","radar.fail","omfg.town","mastodon.yupgup.com","social.bennypowers.dev","fedi.machaj.info","greenplenty.social","unreliable.associates","machine501.com","wireless.cat6.network","thecooltable.wtf","notroot.social","opencoaster.net","snarthelg.no","soc.redeyes.site","social.keiths-place.com","mastodon.stickbear.me","terran.federation.quest","ambition.rip","mosteverywhere.com","davidized.com","mastodon.ashevillains.org","pan.rent","bearologics.social","masto.brightfur.net","troot.social","zusammenkunft.net","bne.social","social.dezinezync.com","stoopid.club","mastodon.no2nd.earth","i8y.org","flatline.club","thelounge.network","social.thewiesners.org","osmarks.net","hulvr.com","hal9.ooo","mastodon.iftas.org","nashtodon.com","toot.works","social.chaotikum.org","mastodon.solar","okyth.dragon2611.net","aseriesoftubes.social","intahnet.co.uk","risonchu.social","social.zerojay.com","cville.online","team.thrivve.partners","mastodon.themarkup.org","social.michaelbrooks.co.uk","docviper.de","social.0x0a.pro","mastodon.highteq.net","mastodon.cannerycoders.com","social.zachcapalbo.com","write.as","t.chadole.com","social.huslage.com","follow.darn.social","parens.social","nerd.town","libertious.com","mastodon.israely.xyz","social.voidworks.cc","mast.captnstark.com","chicagomastodon.net","dads.cool","teqqy.social","mastodon.amaseto.com","pokemon.mastportal.info","mstdn.esp.nl","daz3dcommunity.osrx.social","gaypirates.club","webtoo.ls","mastodon.offerman.com","oopsall.gay","mastodon.retr0.party","ioc.dev","mastodong.lol","toot.nclf.net","mastodon.iow.social","zork.social","adida.net","mastodon.espinha.net","gibbens.dev","makervine.net","100terres.com","devua.club","team.herd.works","mastodon.isibboi.de","tl.kenlai.me","official.resource.org","friends.deko.cloud","davinkevin.fr","social.net.ua","tsjirper.eu","mirr0r.city","kicou.info","radiant.social","m.r8z.us","nonsocialand.space","dreamers-guild.net","pleroma.sanssouci.club","hear-ye.com","dataplatform.social","morse.haus","urbansolarpunk.social","sy.nthia.dev","mastodon.travelsoftux.co.uk","douchi.space","flaximus.net","cybersecurity.theater","mastodon.derg.nz","scipost.social","rocklin.dev","3dots.lv","key.hollow.capital","fediverse.cyou","fussenegger.pro","mutant.pizza","waferbaby.com","mastinsaan.in","m.smenttech.com","social.stmh.io","ferrocarril.net","toot.nsgn.eu","skye.vg","geeknews.chat","base.lc","social.moltenaether.com","ttrpg-hangout.social","dingdash.com","security.plumbing","bitcoin.ninja","piki.dev","tds.xyz","pixel.kitchen","mastodon.meltdownlabs.com","nerd.megahuge.com","musicverse.social","dataare.cool","zerojay.com","metro.social","sci.kiwi","mastodon.onepointzero.com","social.drasticactions.site","corentin.eu","hordburh.autophagy.io","social.edythemighty.com","defcon.social","social.keda.re","mastodon.k-2so.myds.me","downey.family","afternoon.chat","social.dusanmitrovic.xyz","social.tylerjfisher.com","gsd.foundation","toot.menkissing.gay","freiburg.social","foxy.social","wptoots.social","social.sadwizards.club","sudo.cat","dragn.gay","wig.gl","cthompson.com","social.stefanberger.net","universe.feliver.se","governa.eu","notbird.app","eka.rodeo","mastodon.transportevolved.com","lit.taupehat.com","iscurrently.live","mastodon.samfira.com","mastodon.nu","ted.social","nvitucci.social","psyopshop.com","gnubox.org","mstdn.vector1.dev","self.social","yyc.bike","ms1.me","federation.p1k3.com","wersdoerfer.de","bertha.social","deliverabilit.ie","hidupmanis.studio","social.beaware.live","m.noxie.ch","philpot.org","network47.net","techbacon.social","follow.ethanmarcotte.com","ivor.org","dustinwilson.com","moth.social","fedi.turbofish.cc","mystical.garden","frogmob.life","social.davidgarywood.com","social.sqrrl.xyz","messydesk.social","nota.pub","social.peterdebelak.com","foltran.dev","theweird.space","rob365.online","niflheim.social","cyberpunk.earth","retrotroet.com","mastodon.vierkantor.com","scoat.es","blumpus.com","bookstodon.com","hitithere.cafe","freespeech.fans","cheeseburger.social","tyrol.social","ernesto.dev","shaler.social","mstdn.axhxrx.com","muon.social","blu.social","mastodon.geneticjen.com","soc.jrconlin.com","mastodon.clipperz.org","hacked.af","msicc.net","mastodon.danp.net","mrpjevans.com","mastodon.moussaclarke.co.uk","bvp.me","angelou.club","aklsh.me","counter.social","tane.codes","neos.social","zachleat.com","jeffl.es","m.futex.au","goodman-wilson.com","social.ohmyposh.dev","leftodon.social","prt.si","adamwolf.org","buttplug.zone","nerfherders.io","ehlo.world","mastodon.lt","shadows.rest","dabr.ca","nya.one","greyduck.social","process-one.net","gaybdsm.group","toot.lqdev.tech","akko.quad.moe","rat.party","m.tzyl.eu","mastodon.falktx.com","nexusofnerd.org","mammutidae.science","cleverdevil.club","sparkly.uni.horse","haj.gay","zkc.se","jackpot.pictures","mastodon.robmccoll.com","mastodon.adamgeitgey.com","amazingcto.social","xin.cat","maxpe.todon.de","kauaku.us","goodfeeds.net","neonsoup.xyz","social.labr.online","social.tidusfox9.online","overgrown.garden","no.havn.blog","allthingstech.social","bmvs.io","social.kramse.org","functional.cafe","sandmill.org","jordanh.net","anml.io","taedcke.social","vrsimility.masto.host","kelbie.scot","rethinkplaces.social","mastodon.scribbler.social","read.gender.systems","izzodlaw.com","micro.blog","social.linux.pizza","anarchy.center","nomanssky.social","greenfield.social","social.gangneux.net","communick.com","we.1being.org","resistit.net","social.ty-penguin.org.uk","sergal.org","social.headbright.eu","soc.luciferi.st","moo.nz","brusilia.eu","vector1.dev","primitivebits.social","rgb2.com","ack.cringe.cafe","delroth.net","hayu.sh","scat.wovensoup.com","colter.social","social.kechpaja.com","butt.team","focused.systems","lux-nightclub.com","h.kher.nl","en.osm.town","misty.casa","enlightened.army","patavium.social","shitty.life","icedtux.no","tycrek.me","clowntown.app","nullpointer.social","social.stefanomarinelli.it","mastodonindonesia.com","masto.pt","lainchan.gay","kfem.cat","deathbycomputers.co.uk","clusterfucks.nl","glammr.us","mastodon.wssmagazine.com","social.raccoon.college","harbour.cafe","gopinath.org","vinzenz.social","sethlong.social","social.hacktheplanet.be","bookclub.masto.host","ak.airis.work","togl.me","hello.drew.monster","jakewharton.com","social.pnyhf.eu","laravel.gg","qoto.org","m.pablofernandez.tech","social.rodere.systems","paulkedrosky.com","social.raytec.co","poboy.social","skepteis.social","skoo.bz","social.politicaconciencia.org","bidule.menf.in","mastodon.spacetraveller.com","whisper.tf","ploen.social","spookyg.host","social.psychodog.co.uk","echus.net","decarboxy.chat","poly.cybre.city","fluffpri.de","video.blender.org","zsiegel.social","fedi.attyc.de","jinc.io","pandas.social","johnson.gg","social.tarasis.net","mastoclass.fr","ossum.net","so.fnky.nz","palmer.house","tailored.social","dood.net","mastodon-japan.net","rukii.net","fedi.snepi.space","mib.contact","wanderingwires.xyz","fd00.space","greenmoo.net","mastodon.gastrokon.com","arthropod.social","pagan.plus","tranny.town","m.filmfreedom.net","mstdn.lowb.run","freesocial.co","libertynode.net","mastodon.lordofthedummies.com","toot.net-pbx.com","coffeebean.social","satania.social","nwsl.club","social.bakunin.nohost.me","social.yakshed.org","social.crouchingpanda.co.za","mastodon.fjerland.no","fediconnect.social","runty.social","josephgruber.space","synth.buzz","lavraievie.social","dbcohen.rocks","wrong.systems","gender.systems","havn.blog","mastodonsweden.se","grumpys.online","saltylike.us","programmer.town","twtr.plus","dogsports.social","wikis.world","antiquated.systems","social.marud.fr","micro.arda.pw","xarxamontgri.masto.host","retrohangout.club","firefish.sideslip.social","saptodon.org","babka.social","metalhead.club","pope.party","macstodon.scot","rusty.cat","ligma.pro","screenshake.io","books.theunseen.city","lepoulsdumonde.com","slowest.network","nolineage.com","birdsite.tcjc.uk","khaus.io","open-social.xyz","furdon.com","social.zu26.net","nlogic.systems","twitterbridge.jannis.rocks","cryptotalks.social","lisboa.social","radiosocial.de","infosex.exchange","garate.email","unstable.icu","toot.tylxr.com","mastodon.me.uk","literatur.social","pouet.space","bytepark.social","dragon-lair.social","breakblocks.social","hacky.town","martinh.net","simonwillison.net","watch.softinio.com","ebano.social","takeo.social","mastodon.jaiden.pw","fedi.xerz.one","the.sketchy.life","toot.jasonscheirer.com","touhou.vodka","cackl.io","eventprofs.social","convenient.email","social.prado.it","argentum.social","ruby.social","solarpunk.social","pentest.sh","boseburo.ddns.net","okla.social","social.xmh.one","brieseland.de","kiasyn.com","ap.samueldr.com","metcalf.social","scrivimi.ch","maique.lol","twoot.space","unpopular.cloud","mast.kinuseka.us","finsup.social","cloud18.xyz","blackqueer.life","mastodon.alljoin.me","bayes.club","tubage.social","nentra.social","mastodon.cocoasamurai.social","brokaw.masto.host","shoghi.rocks","social.gatorarms.net","myopic.one","jarv.is","social.blach.io","minohdon.jp","social.mw","mtd.asweet.space","zahnpasta.tube","social.shas.am","ascii.social","soc.umrath.net","social.nofftopia.com","matthewbog.art","vishnurajeevan.com","mstdn.mimikun.jp","nightly.fedibird.com","social.macg.co","noncorporate.network","fora.social","selbach.social","slayers.online","social.apfelfunk.com","mastodon.motorsport.org.uk","reporter.social","axjmc.xyz","coleman.social","windbag.org","teal.social","mastodon.juggler.jp","romeorose.nz","social.worgames.com","tweetrex.co.uk","pravdasocial.net","grandma.space","z.je","lia.fail","xirion.net","m.ix.is","democracybrief.com","abolish.social","thelocalpub.social","fedi.yuka.dev","mtdn.anyqn.com","social.xunil.co.nz","orangem.net","mastodon.games.ngo","kei.fashion","blahaj.fun","social.rebtoor.com","fedi.nerderypublic.com","noitl.space","focal.social","common.se","pl.comfysnug.space","queer.garden","chez.chat","cute.is","nyxa.jojess.net","social.shadowkat.net","tinnies.club","tfwnogf.nl","skeletons.gay","soc.nhg.moe","mastodon.salecroix.fr","bankmann.name","mastodon.novylen.net","y.la","unteraffen.de","smnn.ch","rikvoj.tech","breastmilk.club","social.ruthenic.com","mastodon.zaclys.com","social.stlouist.com","fancat.ml","social.matteroffact.ca","cochran.social","lawtalk.social","social.milchreislieferei.de","19marbles.org","pfalz.social","witchhat.house","s.dfaria.eu","fedimon.uk","rave.ineptiarum.ca","toot.execbase.net","akko.itzti.li","social.pi.vaduzz.de","destituent.social","gorf.space","ng.cathoderay.tube","dreamin.online","open.the-door.uk","mdn.kaitou.org","donphan.social","mastodon.technology","sporadically.social","partyon.xyz","m.twi.wtf","t.joeldebruijn.nl","ambrosia.moe","lgbtqia.space","dotnet.social","social.jlamothe.net","eggplant.social","masto.astrra.space","ravenation.club","tube.aquilenet.fr","cyberspace.club","neurodifferent.me","toot.legacycode.rocks","hobbiton.masto.host","me.konklone.com","eddyssofa.com","trees.social","t.crpg.info","aleph.land","lbry.world","lipsia.casa","demtech.global","nil.social","pleroma.nthomas20.net","ellie.social","social.kararyli.net","mobilizon.it","s.thenautilus.net","fedi.seriousbusiness.international","social.wildparadox.com","sideofburritos.social","axbom.me","zuul.no","ono-sendai.jevidl.net","sqrts.net","gamelinks007.net","shrediverse.net","social.heise.de","securitycafe.ca","halibut.com","subco.nscio.us","social.mrcol.es","4xl.co","fedinerds.net","feral.technology","nzsocial.net","hoagie.fun","www.horizon.ac.uk","procolix.social","hoyle.social","albanytrans.gay","mastodon.xy-space.de","alfajet.masto.host","curious.simio.us","roms4mame.com","masto.untitld.space","transit.alerts.social","chrome.pl","weinzierlweb.com","pilote.me","realworld.szs.net","mastodon.internetplumbing.net","numinauts.club","birdsite.blazelight.dev","ipv6.social","frictionless.contact","basedones.social","freelearner.social","mastodon.isalman.dev","karlsruhe-social.de","follow.london","dale.camp","mastodon.diblox.fr","plantex.top","mtgjudge.social","animesexual.community","social.tsueri.cloud","friends.link","noparticular.place","libereco.social","blog.kvuzet.org","weiser.social","adulthood.lol","mastodon.notasquirrel.dev","meemu.org","social.myrivera.com","andoria.social","toot.monster","witchy.ink","1password.social","social.pleco.ca","i-love.liloandstit.ch","graz.social","melle.social","misskey.codingneko.com","fedi.worf.win","social.zigzak.net","masto.plus","social.sndm.me","free.gaycatgirl.sex","0verti.me","lacking.fun","tomaszdunia.pl","pleroma.wanparty.xyz","d.sb","swiss.social","f2p.me","c.moogle.place","boop.juke.fr","mastodon.workofart.org","social.growyourown.services","lopez.social","wattenscheid.me","akko.kalasarn.se","fed.tomd.org","crlf.ninja","danielnorton.com","kinkytaboo.online","mastodon.thewarrens.name","sideb.buzz","code4lib.social","mstdn.vientos.live","social.wxcafe.net","kyou.social","social.jsr.com","inkdrop.space","dasmirnov.net","mastodon.jg1000.fr","social.arpakuut.io","gladtech.social","m.beiting.io","social.alternativebit.fr","birdbox.party","socialnotwork.net","squash.quest","stamper.net","mastodon.lemel.cc","partyparrot.social","fluffs.au","loud.computer","umbrella.cafe","mstdn.bitwalker.eu","social.tealshark.net","equestria.social","ananace.dev","fundraising.social","effy.space","xn--xxa.computer","hackaday.social","pgh.social","t00t.it","girldick.gay","xn--c1ad2baa4b0f.com","bark.lgbt","social.elbespace.de","plus.sleroq.link","mastodon.csparker.uk","afk.social","nozzi.social","sandiegan.social","social.peanuthamper.io","lyctor.space","sone.nrsk.no","icanteventoot.help","chickenfan.club","mstdn.vet","m.bavetta.com","astrolaboratory.club","said.social","synaps.space","christenson.family","sdk.co","test.bvp.me","incognitus.net","sonar.news","social.seanreiser.com","ricearoni.org","forfuture.social","lounge.fan","peterlew.is","heretic.social","puddle.town","social.devteams.at","where.keri.is","europlus.zone","beef.moe","dvsn.net","masto.glorious-space.eu","furries.club","ownsu.com","shark.community","blobfox.es","ramona.chat","haminoa.net","omnigroup.com","mayheminc.win","evilcyberhacker.net","masto.bike","mastodon.kuenet.ch","social.adabwilde.com","masto.onurb.net","flooded.club","miku.place","netzkombin.at","m.ai6yr.org","bruder.space","firefish.maikel.dev","mastodon.menzns.de","social.lansky.name","sociabl.be","flyingmou.se","herd.bovid.space","shirtless.gay","marcoabis.it","mastodon.digitaino.com","grilledcheese.com","masto.batichi.net","ffxiv-mastodon.com","posts.stream","getautism.online","ra1nb0wsec.net","cruiserhome.org","ht.nixre.net","pokorny.ca","mast.solarisfire.com","rtl.chrisadams.me.uk","toot.merill.net","foolish.computer","sled.social","sleeping.town","joshtriplett.org","akkoma.simulacrum-emporium.eu","ponies.social","social.montceleste.fr","sofla.cafe","mk.mistli.net","advent.social","pleroma.nylarea.com","for.theloveof.house","heptagon.social","biso.hopto.org","mastodon.jparenas.com","endtimebelievers.com","our-town.social","postpandemicparty.org","blackshuck.net","hcaz.io","talk.stayas.one","social.globalpirates.net","mastodon.lolicon.win","mstdn.adminero.it","clareifi.org","swiss-chaos.social","tubular.social","xuv.be","saasycloud.social","shakedown.social","supercolossal.co","arrifana.org","datboi.network","ilys.fm","mstdn.jcx.se","toot.ring0.space","sudomakecake.ddns.net","neat.computer","bknyc.us","hkdon.com","atx.pub","musicians.today","kangaroopunch.com","masto.koutoupis.com","mastodon.arcepi.net","invicious.net","microblog.pub","mastodon.macsnet.cz","kuma.social","sotl.social","brandenburg.social","spydar007.com","social.drenth.xyz","masto.fasefriki.com","electronic-sports.club","social.adamperfect.com","social.riz-om.network","a2mi.social","mastodon.brk.io","cloudkeeper.dev","fuerstentum.social","darringaming.com","m.schrdr.nl","mastodon.hyperreal.coffee","social.funkyfish.cool","blacktwitter.io","micro.rumproarious.com","mastodon.evolix.org","brunk.io","nyan.network","mastodon.praccu.com","bonk.cozysumo.space","m.fedica.com","spork.quest","istheguy.com","akiba.social","chateaude.luxe","curbal.social","mastodon.laurenweinstein.org","birdsite.space","social.diekershoff.de","monke.fans","stoyko.space","mastodon.kechpaja.com","uncensoredvoice.org","saagarjha.com","fedi.getimiskon.xyz","mastodon.bentasker.co.uk","science-practice.com","retrotweets.com","levallo.is","mstdn.global","free.burningpixel.net","know.me.uk","engineering.social","crabs.life","social.coop","unix.family","greennet.social","newwest.social","fedi.xinu.me","net.staropensource.de","sleepy.cool","taakka.fillari.xyz","social.unturf.com","thelife.boats","genserver.social","koreus.social","social.vault105.ca","sangberg.se","federate.me.uk","social.mastardon.com","deskweb.social","rebelsocial.media","elephant.tjd.dev","social.di2.io","wxw.moe","cuitan.id","appdot.net","ggwp.social","validpostage.com","mastodon.olisti.co","awoo.studio","frederiksberg.social","mastodon.express","social.datalabour.com","mobilize.berlin","microblog.wiwie.dk","lost-in-outer.space","social.mei-home.net","kylerank.in","deff.no","social.pogo.community","social.nicolas-constant.com","uniflydiscs.com","bladerunner.social","mountaincommunity.co","mastodon.maxmazz.com","mastodon.pro","mastodon.roxiware.com","secretbearsociety.org","lwr.wtf","social.mecanis.me","blurts.net","m.lonet.org","dumb.place","social.tanelpoder.com","dementedandsadbut.social","friendlies.social","recsys.social","mastodontist.social","photos.cookiefan.club","squeak.games","social.lainon.life","augsburg.social","moss.haus","fdv.saifulh.web.id","rosemont.cloud","waff.club","goto.vsta.org","elmar.live","howlr.me","barcelona.social","social.helpmedog.com","misanthrope.social","shavingcream.online","rawr.space","social.jtworld.net","elysian.city","hacks.fi","social.koti.site","kangaroo.to","urbanists.social","mastodon.hdcraft.xyz","rai.dog","under-bank.blue","testifi.es","cogwheel.social","social.wps.de","social.hoga.fr","social.doma.dev","tz.is","axiixc.com","social.pauldev.co","social.ourpublicassembly.com","mastodon.inferiorlattice.com","allnutt.net","ohnepunktundkomma.org","stories.macniel.online","intentional.network","moreati.org.uk","spragleknas.no","joshaustin.xyz","rogersfam.co","megantoots.com","rat.academy","mfr.social","gamedev.lgbt","wohlfarth.name","uri.life","creative.ai","muskless.social","midwest.social","hive.sharedworld.org","activism.live","mastodon.exitmusic.world","icreate.social","social.wyrd.systems","masto.bobbybasement.noho.st","kettner.social","soc.webair.xyz","mastodon.fraize.com","b0.ax","social.theredcaps.net","esper.lol","houseofcreativeweirdos.com","lost.social","smugglersbbs.com","watch.libertaria.space","writ.ee","messurrection.com","friendica.hubup.pro","mozilla.social","mastodon.gregnilsen.com","nein.club","galdo-masto.duckdns.org","thetaoist.online","staging.kazar.ma","saysrelax.com","social.mochi.academy","karl.guru","ghost.cafe","mikroblog.dk","trekkies.social","owo.ff15.eu","social.weho.st","social.br-linux.org","wpbuilds.social","nya.social","mastodon.dystroy.org","lor.sh","cockos.net","mace.au","futurist.info","nrkn.fr","buttplug.engineer","mastodon.helvetet.eu","electron.ninja","social.wizbos.club","rubberchicken.social","pl.nudie.social","toot.hordearii.fr","theshire.social","mstdn.ningen.one","m.sclo.nl","social.bloomanalytics.net","chatsubo.cafe","myonlinepi.uk","kozterulethasznalatienge.day","posts.adamw.social","lawnerd.org","publicgoods.social","edtechme.org","tooter.wishy.co.uk","mutant.cz","eightpoint.app","ifwo.eu","g0v.social","uldegrova.com","social.platypush.tech","amastodon.uk","decentralis.social","lecker.coffee","zeppelin.flights","byteshift.io","social.lostinok.com","skunk.agency","taxodon.com","xtaldave.net","social.yorklocal.org","mastodon.raygoon.tk","hashapp.space","topic-master.com","otherja.red","squanch.xyz","harrystyl.es","nerd.garden","friends.ravergram.club","akko.mornie.org","social.oevents.co.za","sigmundvoid.net","sudojudo.com","orchard.social","social.here.blue","spookygirl.boo","ofbajor.com","humoro.us","hackademiker.se","swiftdevs.space","m.omg.coffee","f4n.de","mastodon.innomega.com","social.right.wtf","social.main-angler.de","mast.giants-club.net","shabsters.social","sometimes.social","social.k1024.de","scripted.social","gamercast.net","elezen.club","michonline.com","morash.me","calckey.online","rebel-lion.uk","masto.everwas.com","davidcs.net","social.nauk.io","silicon.moe","znark.us","fullof.buzz","fed.social","gotosocial-dev.svc.0x0a.network","connections.coach","elephantfossil.com","social.benbrown.com","tube.nah.re","epicyon.vikshepa.com","mstdn.asprivacy.com","toot.kuba-orlik.name","mastodon.cl","chrisduffley.com","toot.orchid-cottage.uk","mk.phreedom.club","social.findmyown.space","lazyatom.social","friendica.7seven.cloud","mastodon.tetam.noho.st","fenetre.dev","wisdomhole.com","cryptotooter.com","nofan.xyz","social.weyr.org.uk","kjas.no","pwk.land","ataricafe.com","oliphaunt.social","plantsand.coffee","misskey.pixelfilm.nz","tene.re","lediva.masto.host","bloom.surf","sweetme.at","c64.social","foxes.rocks","mastodo.it","dewbert.social","mcnamarii.town","privacyofficers.social","mastodon.mattjon.es","clearly.rocks","illuminada.io","fedi.dampfkraft.com","sciencemediacenter.social","on2it.net","intothecloud.net","acrion.social","brvt.telent.net","micro.koray.al","social.makerforums.info","mstdn.rknv.cc","heads.social","pl.psion.co","geekhaven.social","social.ronetcloud.com","toot.krivokuca.dev","codeday.social","zedsocial.ca","lpfm.social","social.cracked.ink","ramble.moe","technosorcery.net","ctrl-c.liu.se","who.sixfalls.me","app.chromblitzen.de","synthwave.social","shrine.moe","social.network.europa.eu","matts.network","cmdr.social","social.gomen.de","bdn.one","toot.host","social.zerotier.com","mastodon.pwnt.io","pachyder.me","bookstodon.thestorygraph.com","benpettis.ninja","woof.tech","diegopeinador.com","xvlt.net","infosexy.fun","wiesbaden.social","happykraken.net","masto.id","caterpillarcheesecake.xyz","togart.de","vorarlberg.io","eroticmohel.com","lightx.org","jtworld.xyz","md.songtronix.com","karlsoderstrom.social","grafton.me","inadvertently.online","monterrokyo.town","trivia.town","mastodon.bostoncaucus.club","sd.ai","craftsman.dev","parkpioneer.com","social.pistoltrainers.com","acc4e.com","embassy.social","akkoma.nrd.li","silvan.cloud","wolfe.garden","lethallava.land","flaki.social","woodland.cafe","akitsune.dev","themilkmen.com","songsforno.one","mainframe.club","borahae.love","masto.nyc","mastodon.holeyfox.co","mastodon.abstractbits.net","creators.social","social.vleij.com","xanadu.ws","flipboard.social","werm.world","mastodon.hirad.it","social.hayalmasal.org","theplace.social","goodstuff.pub","geeksociety.social","gerwitz.com","dlgreen.com","tifosi.social","mastodon.li","mew.pm","hupel.info","mastodon.kelvsyc.com","mastodon.spindles.cc","clube.social","so.eddyn.net","mastodon.lingsite.org","anto.ie","lioncourt.social","mstdn.mystikos.org","techisland.social","uggs.io","neon.ink","thinkydoers.social","nervesocket.com","social.theindiestone.com","mat.random101.net","mastodon.errbufferoverfl.me","parkfans.network","urface.social","inn4tel.social","flownative.social","eggy.app","khoa.cool","furs.social","speakreason.com","normalunicorn.com","speedrun.zone","clar.ke","posts.rat.pictures","starbase80.wtf","mstdn.funil.de","fairy.id","witches.rest","thelink.family","wx.social","velour.social","social.wastedalpaca.wtf","naninani.uk","mastodon.nerveroot.net","social.jaderune.net","mud.social","olia.geocities.institute","s.thecybernetwork.us","mastodon.cyborgcentral.net","social.myconan.net","publicsquare.global","social.dib.de","mastodon.zlatiah-no.one","nahe.social","social.poolp.org","social.alexn.org","joshbutts.social","bicycleroll.com","masto.libre.brussels","flipscreen.social","lansley.com","mrcippy.xyz","metropolan.com","freja.zone","toots.morepablo.com","catt.wtf","town.planetai.re","thomasjpr.social","brontosin.space","nogweii.net","sthlm.social","marchbox.com","puppo.space","toot.leif.pl","medievalist.masto.host","the.webm.ink","arathe.net","masto.yttrx.com","social.andreva.cc","hugglebot.io","stuph.org","mtd.kkoyung.dev","fops.cloud","osbar.space","social.edist.ro","allrite.at","mastodon.bosetsu.org","social.metakaos.space","tkz.one","peertube.linuxrocks.online","zamb.la","astrel.la","hejfolks.social","tootr.co","lsngl.us","me.oer.me","live.clar.ke","river.group.lt","nekojimi.moe","raum.klang.is","helvetica.fm","by.zwotausend.de","deepspace.social","shivering-isles.com","cockandballtortu.re","edition.social","puntarella.party","kopfkino.social","mastodon.lajaqueria.org","rapemeat.solutions","lausitz.social","schiessle.org","moytura.org","toots.jimblimey.com","feep.org","artistalley.space","macavity.cat","social.4score7pongs.com","driveinsaturday.org","social.frosch03.de","portend.place","deuchnord.fr","bulbulator.net","mastodon.baazee.social","talksmacky.com","km6g.us","mastodon.1984.cz","fuzzyroots.net","fedi.vern.cc","www.torgo.com","driffaud.fr","memtech.social","verified.mastodonmedia.xyz","msk.pedrocx486.club","notjustbikes.com","snug.town","gluck.cc","cheekibreeki.express","mastodon.sk","pierce.xyz","homo.promo","ramblingreaders.org","akkoma.sandhill.social","fietkau.social","mstdn.ai","owncast.small-web.org","mashi.ro","pirateheaven.eu","tinysubversions.glitch.me","social.urspringer.de","uncontrollablegas.com","netzkms.de","nemushee.net","m.iamkonstantin.eu","chromium.social","pon.ee","crabdisk.online","social.kendoo.eu","laserdisc.party","psyopvict.im","archived.software","comm.social","thosemartins.net","social.y-gallery.net","bantu.social","tut.amanda.systems","mastodon.girino.org","collar.place","loputozirak.ddns.net","m.feyo.pw","dakes.de","mastodon.ultrahome.synology.me","piperswe.me","wife.town","cockatoot.city","mastodon.cthos.dev","m.techsocial.site","limulus.net","skj.social","eocene.epochal.quest","outside.ofa.dog","wrestling.social","bugle.lol","icosahedron.website","sportsmedtwtr.net","mast.linuxgamecast.com","old.mermaid.town","mastodon.54park.de","zadzmo.org","undernopretext.social","m-i.im","temp.odon.moe","neko.computer","best-friends.chat","ploink.land","loma.ml","akm.longyap.name.my","social.shikatomajo.live","secnd.me","craftbeer.social","society.kalli.st","bell.bz","unstable.systems","mastodon.publicinterest.town","fediverse.antho.dev","nxtgen.social","m.rynftz.gr","saturation.social","cozynest.online","bobiverse.social","afterspace.rocks","mastodon.acc.umu.se","arsenalfc.social","triangle.social","prf.me","social.uncommonly.cool","ian.mn","toots.hallanalysis.com","larry.town","pixelfed.au","gndh.net","kwatra.me","clacks.link","pleroma.marchera-pas.fr","birdsite.frog.fashion","mastodon.teia.art","verkehrswende.social","sandiegourbanists.com","a.farook.org","aldr.social","letsrulethe.world","plero.antopie.org","theoks.net","mastodon.theshowshow.tv","salas.social","mastodon.catwuschel.com","akm.hora.win","social.ellijaymakerspace.org","mastodon.futurelab.social","must.beer","coywolf.social","awful.buzz","pewtix.com","social.tadzik.net","miau.le-chat-a-velo.at","social.twotenlabs.net","nickapos.social.oncrete.gr","social.gbraad.nl","liveevents.world","social.hinter.bayern","scicomm.xyz","social.joelle.us","thefloweringash.com","schach.social","nelson.social","startrekshitposting.com","ap.mcphail.uk","c3d2.social","social.spicyweb.dev","tulipgardenshow.masto.host","mustodon.net","mastodon.riffel.family","oldbytes.space","rawr.tf","bmrf.institute","testausserveri.fi","magpie.gay","claws.blue","mastodon.savvy.ch","mastodon.kryptykphysh.xyz","bunny.family","davepeck.org","chabant.social","emi.cx","magni.astarbia.com","risc.social","live.hatnix.net","dpw.social","cas.social","137i.de","guerilla.studio","aria.dog","eventos.hispagatos.org","server.pink","friendsocial.inet.place","social.parentfamily.ca","varmint.town","gaithersburgnewsletter.org","vira-lata.org","cogindo.net","redstonelp2.com","mrtoto.net","kish.social","masto.twib.me","femboyfurry.net","masto.fratm.com","h-net.social","chain.closetoya.com","irrsinn.life","toots.toby.ink","contenttechtodon.org","social.diskseven.com","tweets.icu","penguicon.social","ehr.scot","www.blabbergoats.com","greatjustice.net","jaehanley.social","mastodon.design","mastadon.tech-bloc-sea.dev","antisoc.vernunftzentrum.de","s3th.me","orthis.social","calamityconductor.com","gayboyz.space","benjojo.co.uk","idiomdrottning.org","chrisliebaer.de","666.glitchwit.ch","is.badat.dev","gts.trycht.cz","fuzzytacular.net","happyorange.xyz","swinden.social","txs.es","freebird.gdn","cuties.social","books.josh.tel","lectura.social","basilisk.gallery","demiboy.gay","thevipvipers.space","mtl.rocks","hugeplothole.com","trouble.social","austria-toots.social","fed.foad.me.uk","fortean.social","mystic.lgbt","phocks.eu.org","stephenwuebker.social","toot.vara.lol","luther.social","curmudgeon.cafe","jmswag.xyz","pirateradio.social","zine.party","friendica.ownbox.be","subtype.uk","mastodon.tokyo","toot.coinfundit.com","tunahan.social","mstdn.timodo.de","obey.social","cackhanded.net","ozstream.net.au","ptbo.social","lazysocial.de","illusory.ink","o0o.social","masto.cyanbane.com","strafpla.net","xz.vc","masto.neb.host","thebristol.social","wieners.lol","eleusis.social","toot.pimux.de","mastodon.surfshark.com","social.python.it","plrm.podcastalot.com","mastodon.gideonstar.de","arthaus.social","io.hrbf.de","mastodon.wavers.us","mastodon.keegee40.xyz","toot.xiii.cards","casually.cat","bunny.cloud","democracy.town","social.ratliff.space","mastodon.fosslife.org","trunk.mad-scientist.club","1nd33d.social","mastodon.twocanoes.com","pbk.social","nofun.social","mastodon.makoism.com","codigoaberto.pt","hhsocial.de","stackunderflow.com","cyber.harvard.edu","m.burokrat.eu","toot.rknight.me","toot.geeky.af","toot.techbeat.in","social.bigger6.com","collapsitarian.io","social.interru.io","ericpuryear.com","hackny.social","carpdiem.online","mobiledevs.social","ap.diegoveralli.net","metacode.biz","gruezi.net","social.schumacher.berlin","mstdn.ch","danq.me","m.namt.uk","toot.nextblock.nl","s.schof.org","onionslices.social","mastodon.chikai.network","pl.kotobank.ch","alinke.com","techhangout.social","hambon.es","ceejayoz.io","chaoznekoz.com","mastodon.be","randomcat.org","frfsh.plus.st","masto.chronos-tachyon.net","popkulturreferenz.de","h4x0r.army","gascoigne.social","spondr.cz","consudon.club","networker.social","wafer.baby","mk.asie.pl","social.arkm.de","f.e4.pm","dogno.se","mstdn.kodein.be","sergeant.net","clt.chatdespair.com","fuchs.social","ra-phi.ch","social.wierenga.net","fly.herald-petrel.com","mastodon.gougere.fr","nicknisi.com","banzan.uk","mastodon.bastelfreak.cloud","pleroma.sparkburst.net","todon.nl","artsandculture.social","thesayres.org","baubs.net","merveilles.town","beyondgender.social","masto.welovedevs.com","exitus.social","epicsheep.com","opalstack.social","ne.thote.it","kind.social","orbital.rodeo","awful.systems","hexbear.net","ennex.world","poketopia.city","bahn.social","toot.habedieeh.re","reyuzenfold.com","mammuthus.xyz","kolektiva.social","soc.undef.me","wordmine.com","matthewbogart.com","social.10vorne.eu","farsi.cloud","social.jigmedatse.com","unfufadoo.net","isthelaststop.com","oslo.town","23.illuminati.org","social.wiwie.dk","pl.inu.is","tocnawan.com","jaxbeach.social","toot.snej.de","dz.social","pleroma.envs.net","pleroma.tevps.net","geno.social","social.zocradio.info","bitcoinlizard.net","tardis.team","defenestrate.it","mk.anarchyfox.space","social.oberhauser.space","conchrepublic.social","india.goonj.xyz","social.bunch.dev","linss.com","im.alstadheim.no","a2.io","mk.undfnd.dev","a.social.sungo.cloud","riedstadt.social","misskey.haun.jp","misskey.someden.net","nona.social","key.dokodare.ovh","social.dsbeans.com","mastodon.podycust.co.uk","pao.moe","moosetadon.social","magical-ribbon.net","chaos.futbol","social.adlerhorst.net","discordian.social","kannitverstan.eu","spezi.social","nil.im","social.kjv.online","genealysis.social","mastodon.rubywhite.com","mastodon.flooey.org","masto.evelynyap.com","thomasjaggi.ch","stareinto.space","mastodon.madhouse.org","mastodon.mihalis.net","innovatelearning.social","forsaken.technology","mastodon.sjolin.io","flowerpot.fyi","sns.transmas.cyou","changelog.social","archfiend.org","instanz.scheissekonfiguriert.de","pinksheep.org","va-11-hall-a.cafe","unsupervised.online","whitespashe.uk","i1.no","toots.gg","miau.jeder.pl","lyingvoid.social","pancakesontuesday.com","wuff.space","swiss-talk.net","freeatlantis.com","toot.io","xarxa.cloud","hokuto.social","allegedly.wasnever.cool","porkribs.social","tootsweet.social","darkstar.social","daedal.io","minimeadow.art","onmasto.com","coffeechords.com","13bells.com","mastodon.kevanloy.com","weburbanists.com","mastodon.akmentins.com","fedi.teebeeart.me","nolden.social","mastodon.fabianstadler.com","roark.voluminum.net","dragons.fyi","hawk.life","social.codethink.co.uk","cave.tunstall.in","europhiles.uk","mastodon.tod.net","toot.phasorburn.com","colliderbias.net","wien.rocks","outerkosm.us","neuzerling.com","cedar.sh","masto.gesttalt.com","x3.miku.gay","urda.social","federated.glacier.dog","social.adamasnemesis.com","adventures.social","tw.in.eu.org","girlc.at","mastodon.wisellama.rocks","firefish.social","comicscamp.club","dirwiz.social","opalium.net","crowsnest.social","publicgood.social","undefined.social","m.orbx.net","vibewave.space","layer8.space","pleroma.polariton.space","uwuwatch.club","isolated.actor","hypermute.com","smithtodon.org","social.stw2.xyz","ausglam.space","octodon.social","ba.id.au","techtoots.com","social.afront.org","social.zlatko.dev","creatorstudio.space","managingengineers.net","seo.chat","dragon.style","majors.social","friendica.utzer.de","mikecoats.social","social.esmarconf.org","catgirl.land","video.antopie.org","omg.wtf.sh","akko.alexmshepherd.com","liberal.city","stranger.social","mastodon.replacementhipster.com","fedi.astrid.tech","zipdig.social","toots.ro","voicenet.ch","people.unfoo.net","nxt.social","fedi.9til.de","mastodon.otherworldsink.com","foxhold.net","cleary.au","tooted.ca","skeptics.social","lebrady.net","social.wesk.tech","mstdn.ything.xyz","soylent.green","beta.mstdn.cf","masto1.100flowers.tech","social.gllmr.fr","zougloub.eu","m.tweepsmap.com","are.waffles.fun","straw.social","m.netw0rk.io","social.jifish.co.uk","vivaristics.net","the.goofs.space","mast.hpc.social","fikaverse.club","thingy.social","ellieayla.net","ramshackle.town","widget.uk","lyre.live","mastodon.hawaiiboy.me","futurelings.club","mastodon.applevis.com","mhenry.social","fslurs.gay","chillpeep.zone","retr0.id","midnight.delivery","mastodon.afromunkee.live","toot.backbord.net","palewi.re","antani.pm","fedi.cpluspatch.com","fedi.lamer-ethos.site","assemblag.es","pocketpixels.club","m.nevkontakte.com","gremlin.space","an.errant.cloud","vgg.lol","freespeechextremist.com","taruntarun.net","drgns.cc","fediver.se","mastodonte.online","saskodon.ca","j-w.au","jase.social","social.securitytheater.net","mastodon.hyperfreedom.org","earpnation.social","foxfamily.online","mastodontti.fi","pdxubaru.com","nycr.social","legal.social","trailblazer.social","cfultz.com","fed.qaz.red","sciences.social","mstdn.games","tassaron.com","xn--tr-fkaba.social","mstdn.mmmalia.com","sector25.de","gamethattune.club","skrimmage.com","social.teddycaddy.com","social.lemee.co","goshdarn.fun","fediverse.pw","tusk.fyi","furred.social","were.party","mastodon.satoshishop.de","sabross.xyz","fedi.tax","m.pid1.sh","void.holdings","pfeifling.de","akkoma.tbqdrn.de","spidersrainbow.com","furrycon.social","m17e.co","wildwood.town","umaro.technohazard.io","arewe.social","morland.social","econtwitter.net","gosocial.click","calckey.bloonface.com","broken.graphics","geiger.ee","fedi.lynnesbian.space","social.odka.org","i.calckey.cloud","magincia.cafe","bfd.so","toolboxtalk.tech","snacka.org","masto.es","whitakernet.com","mastodon.paladinzero.com","social.luxiferapp.com","nono.li","soc.villisek.fr","shakuhachi.social","gr-sec.com","hoosier.social","vtdon.com","txt.udp53.org","sanchayanmaity.com","birdsite.lakedrops.com","yellowmustard.club","23.rosehip.moe","rivals.space","mofu.one","nuwasocial.com","jenkins.cc","soapbox.network","ma.jameuwu.com","hobapolis.social","mastodon.tomw.net","social.sneezr.net","thechairman.info","masto.binaryworks.ca","social.nsivertsen.com","mastodon.monocode.online","freesoftwareextremist.com","connectit.social","liberal.lgbt","darkcarnival.me","brainworms.io","social.transpeak.lgbt","evidence.town","gleasonator.com","radfae.social","social.peregrinecoast.press","mastodon.atm0sp33r.space","ramblings.social","nelson.fun","deppenkessel.de","birdity.club","icewind.nl","kompost.cz","emily.news","detroit.lol","talamanca.social","mastodon.wolfschouten.nl","kinney.social","historians.social","jawa.moe","gei.st","mog.blue","toottoot.eu","mastodon.anzui.dev","sunshine.town","cansoccer.social","mastodon.wien","cupoftea.social","lonely.town","dudu.best","mstdn.stroan.net","mastodon.sassyass.net","satanodon.com","reshet.social","soykaf.org","queer.hacktivis.me","conesphere.social","mastoot.fr","angrydome.au","bolha.us","mythology.social","doesthings.online","margio.ddns.net","podvibes.co","b612.me","cubhub.social","tcp.fm","tooting.app","social.aero","social.owo.monster","aidan.social","social.regatta.page","seeedstudio.social","a.brody.zone","slackworks.social","lowficarrots.wiki","mastodon.preppers-shelter.nl","colloquy.social","thoresson.social","joelwatts.com","social.snircle.space","don.masto.host","m.leskowsky.net","chattingdarkly.org","toot.thedoodleproject.net","mstdn.pedrocx486.club","vitaulium.nl","tosk.in","mst.rockman.zip","frontrange.co","mstdn.wonderbury.com","realsocial.life","danpalmer.me","masto.tacosdedatos.com","empty.cafe","verze.social","symtrkl.gay","toots.cordelya.net","pouet.peuw.net","social.leckse.net","port.mk","frog.camp","olifantje.hw74.com","social.rkowl.com","ayco.io","null.town","oldruts.masto.host","social.martinrue.com","thought.no","anarres.family","epiktistes.com","kurry.social","rail.chat","moppels.bar","mstdn.facb69.com.br","mnstdn.monster","socialpa.ws","masto.henchmonkey.org","social.deltabeard.com","leporid.net","xz0.org","mastodon.macneilmediagroup.com","apub.abstract.properties","social.ferofox.de","jonburns.uk","jkfd.de","mb.iotib.net","crab.garden","barcelo.social","mine.random101.net","decommodify.com","tara.social","anthro.asia","paws.town","mastodon.furrypaws.cc","squawk.social","gorritodeplata.xyz","mastodon.interzone.tw","doyle.boston","pta2002.com","majak.de","117.social","social.multiverset.net","d.gs","soc.mod-12.com","eeeeeeeee.eu","mastodon.nogods.be","retrophisch.social","fediverse.keithzg.ca","vocalodon.net","mitra.social","myfriendsare.gay","theradio.au","social.sdfeu.org","io.pace.rip","mastodon.sboots.ca","prosumer.dev","heck.town","abyssdomain.expert","60228.dev","brbn.social","moodoo.org","grappler.social","mastodon.decentralised.social","social.chriswb.dev","untrusted.website","bslounge.com","masto.garriguv.io","rud.life","wasnever.cool","woodworking.group","3dgo.net","kiefer.social","pleistocene.social","myke.social","hetzel.net","cinematheque.social","woodpecker.social","social.basilweb.net","social.karsten-voigt.de","cosy.inkling.social","f.cz","galaxy.quest","copland.social","bbw.network","information.garden","social.vdheide.net","desir.social","glitterkitten.co.uk","asphodel.rip","circumstances.run","catgirl.place","m.bonzoesc.net","pl.starnix.network","schumacher.berlin","omnitest.social","social.masto.land","edm.haus","ashka.me","weedyverse.de","jaesharp.social","8bit.red","social.diva.exchange","anvil.social","soc.kouett.net.eu.org","virtualtoot.com","internetsladd.se","smartinwriter.social","zweibruecken.social","nologo.social","mazaska.social","soc.bosio.info","ostatus.taiyolab.com","spoonie.community","social.coolsma.com","respublicae.eu","energiewende.social","social.scalable.gg","mstdn.jaws-ug.okinawa","iaccessibility.social","mastodon.bierschutzpartei.de","ctx.red","hellsite.site","piipitin.fi","marussy.com","pixelfed.fr","social.raise-uav.com","awwter.online","avpd.social","tukkers.online","mastodon.cjdb.xyz","thx.gg","m.servperso.net","fedi.fazbear.lol","hometech.social","notso.net","social.saghul.net","allamaraine.io","kaak.online","rottmann.social","m.adventurehound.io","buc.ci","mstdn.md","pepple.us","lxs.social","furry.horse","surfin.dog","byte23.net","wobbl.xyz","indoverse.nl","mastodont.cat","fedi.leclan.ch","masto.lema.org","fedi.reflog.me","m.rosania.org","gotgoat.com","mstd.seungjin.net","haruska.social","sick.social","opinuendo.com","melder.social","social.seancarpenter.net","fedi.co.za","3615.computer","floofy.tech","forgor.club","adamhowell.social","social.tzwolak.com","mastodon.hongkongers.net","mastaudon.org","collantes.social","brittle.st","fed.bajsicki.com","ramble.space","masto.flyingburri.to","squeet.me","nuu.cat","xqz.ca","verified.coop","groningen.social","toot.kra.hn","valtlai.fi","m.mtlynch.io","rambleon.social","brianmorrison.com","tootchute.com","joost.net","awmb.uk","akkoma.0x68756773.moe","frankwiles.social","async.social","systems.social","frittaten.at","commons.whatiwanttoknow.org","social.graves.cl","toot.coupou.fr","newvivarium.social","toot.monny.cloud","smutlandia.com","social.sedders123.me","com.thephysics.xyz","social.svrgn.sh","era.social","knight.fyi","social.petergoes.nl","merkel.info","zhuravel.bz","darknight-coffee-cannabis.club","cultofshiv.wtf","shpakovsky.ru","oursky.social","simoncook.org","botta.social","lingo.lol","reckless.dev","chatter.monster","xn--69a.xn--99axc.xn--y9a3aq","nodots.xyz","sea-mstdn.social","seizemeans.com","mastodon.incrediblepbx.net","narrativ.es","mastodon.foxhillyer.org","northofthewall.social","toot.4t2.uk","funami.tech","spruce.ink","hivemind.plus","hexagon.space","note.computer","bologna.one","joshpeek.com","justtact.com","pleroma.elinvention.ovh","mastodon.boston","mastodon.fam-ribbers.com","mastodon.noahtren.com","snokrash.com","heychrismackintosh.com","hanol.fr","social.zaaltek.net","nmaggioni.xyz","stammy.design","lvb.io","sosialist.party","simcha.lgbt","thefuturist.network","relate.social","beehive.gay","mastodonczech.cz","spaceballs.masto.host","mastodon.zbecker.cc","federated.press","mastodon.chasem.dev","m.bohlenlabs.com","airpollution.science","tokyoto.cyou","bath.social","bnuy.space","kitsunes.gay","karp.lol","jstsmthrgk.eu","social.0314159.xyz","haxe.social","catala.digital","kafeneio.social","cobblestone.rocks","mushroom.gay","toot.jimmygulp.co.uk","soc.nochn.net","iterate.no","hasa.blog","zdf.social","bluecifer.social","mixedmedia.page","lustigetiernamenbubble.de","tiggi.es","pictochat.net","megatherium.org","anticapitalist.party","vis.social","honk.boyter.org","front-end.social","maddux.blog","ap.etherealhearth.io","meghadeep.com","mastodon.asiriyuq.xyz","toot.uwu.solutions","sns.internationalotaku.com","mi.nxsux.xyz","bsd.network","addy.gg","hex.st","cloudycrux.es","mobilizon.sans-nuage.fr","mstdn.gsi.li","raggedfeathers.com","social.xavierbigfox.net","snabel.party","io.mwl.io","cincy.social","social.kithop.ca","masto.asonix.dog","eternalaugust.com","social.rtorr.com","fr.droidbuilders.uk","fendek.net","tilde.zone","aylett.co.uk","rebel.ar","anonsys.net","secclo.community","mstdn.business","mastodon.trustory.fm","pleroma.namelivia.com","bookrastinating.com","darlow.co.uk","bad-radio.social","pleroma.microkod.xyz","voiceover.actor","spartanburg.social","oddprocess.social","ms.cratonsed.ge","azimuth.place","nomadic.social","pleroma.payfrit.com","pleroma.potatoxel.org","mstdn.io","mastodon.kq.social","starside.social","odakyu.app","famille.social","infrageeks.social","libcyb.so","princess.industries","kawaii.gg","cccwi.social","cunnin.me","toots.kestrelsnest.social","tanukitunes.com","gram.social","posthat.ca","barelysocial.org","soc.citizen4.eu","omglol.fun","darkfriend.social","terzet.lv","lunarpunk.social","noxon.cc","sharpletters.net","astheriver.art","esq.social","super-gay.co","socialism.social","toot.scott.ee","apublic.space","xenia.social","social.fricklers.org","heliospace.net","blog.dll.nu","expressional.social","openmtx.com","poorlyrendered.com","akrabat.com","goodlett.social","tootwithfriends.com","friendica.hellquist.eu","mastodon.z3r01.io","sanjuans.life","strats.co","social.nursetonyf.com","pl.firechicken.net","ff.pikopublishing.page","cow.army","sea.social","mastodon.jakecoppinger.com","nanobyte.cafe","dentrassi.de","feddit.de","social.mkr-tech.ch","mastodon.try-to-hack.me","social.dytrych.cloud","fiedlerfamily.net","social.shrn.co","social.hutch.chat","gigant.social","nixie.name","social.matchu.dev","polonkai.eu","5280.city","mastodon.southwesterly.co","toot.cairobraga.com","grapheneos.social","toots.sahilister.in","pool.social","magpie.masto.host","dev.equel.social","socialpod.me","social-pflege.de","mstdn.agency","social.futurnumerique.com","moot.pub","mastodon.tuxtendo.nl","social.tabletoptavern.online","musicworld.social","s.poweredbydev.com","faf.social","masto.smith.berlin","social.themyceliumnetwork.community","planetboca.com","mastodon.juglugs.com","social.jmenning.com","fedi.ai","mastodon.nexusuk.org","open-source-eschaton.net","sculpin.social","mazanec.social","thefolklore.cafe","soc.kvet.ch","chatch.at","newsroom.pub","mstdon.com","bremen.digital","n8e.dev","mstodon.eu","freelancers.online","social.wageoffsite.com","anancus.fr","social.starmade.de","saartweet.de","mastodon.1337.blue","mk.arks.cafe","social.thearchitects.world","dagegenbewegen.social","america.social","civilians.social","mastodon.select","eagleear.social","manx.social","xx0r.eu","slap.masterdan.net","niscii.xyz","dergrimm.net","florianjensen.com","social.tulsa.ok.us","birdon.social","recordplug.club","loftypancake.masto.host","xn--s8w913fdga.chn.moe","social.the-goblin.net","pisskey.io","mastodon.eric.ovh","social.championpictures.at","toot.fan","whymark.social","masto.amsterdam","vegoon.party","mastodon.wenzit.de","social.sndevs.com","oklahomie.us","footbrid.ge","simbasocial.com","hanson.social","union.place","kitsunes.club","gts-01.owo.monster","coach.masto.host","cytag.nl","fedivers.paris","fracturedhosting.social","mastodon.joedean.dev","grosshans.online","antisocial.thebubble.noho.st","mastodon.qamoe.cyou","masto.torvafirmus.com","chat.zlatiah-no.one","chaosfurs.social","brunty.social","webperf.social","mastodon.7l7.dk","zero.lgbt","amikoj.masto.host","mastodon.in-ulm.de","mastodon.hach.re","devontechnologies.com","misfittoys.social","mastodon.rassbach.tech","misskey.cf","mastodon.indie.host","pythonist.as","toot.snipesearch.co.uk","mastodon.patapon.lol","mastodon.dodge.family","0ddfactory.com","benz.social","h4x0r.host","mastypek.lol","bqri.us","xreality.social","social.domov.de","hoyle.me.uk","mastodon.dev-null.rocks","awau.social","mastodon.calciumsigma.com","mastpub.com","bah.io","suomi.social","enitg.no","mstdn.jmrp.io","adistance.tk","iamernie.ca","caluettefamily.com","mastocation.whaddafuq.xyz","mastodon.dragoncave.dev","social.nx15.me","unitedmastodon.com","pinkwhite.blue","n3trunn3r.org","dasforum.org","mastodon.demorz.de","masto.fediglobal.com","too.tl","fuzaxx.de","social.3q3.de","longcovid.social","social.greinr.com","cat.masto.host","433.world","pkutalk.com","ste.no","mastodon.trueten.de","seaofpeers.com","lsof.uk","videos.jacksonchen666.com","mastodon-swiss.org","bliothek.social","mstdn.im","techpolicy.social","slon.binarylife.ru","bambuswald.social","wisskomm.social","q2r.net","3tes.dev","witten.social","microscopic.network","shrimply.social","mastodon.cloudcauldron.io","mastodon.rh-x.net","mastodon.johnnybegood.fr","social.vcfed.org","gmai1.de","eldritch.cafe","m.alanjames.org","citizenry.social","mastodon.northstar.engineering","uaatwar.com","noclick.se","existentialcrisis.link","baka.social","masto.quebec","social.soupco.net","unhinged.social","masto.miami","teh-interwebz.com","cloud-libre.eu","mastodon.schulte.org","mastodon.invoke.coffee","spouse.trade","panopticon.social","masto.geoffdunham.photo","orio.zuhairmahmoud.com","waldorf.fyi","social.everythingbagel.me","metaccount.de","don.kertho.me","nerdica.net","trg.social","social.undarkpixel.com","mastodon.sitesource.be","epsilon.social","andyoakley.com","qapp.cloud","the.voiceover.bar","mastodon.mysitemikoh.pl","mastodon.docmeth02.host","ma.fellr.net","mastodon.pfeifer.dev","sqldba.pro","pub.osrx.social","mastodon.quebec","chancellor.social","social.ancelade.com","radnovich.com","routing.center","dook.business","meron.io","social.macer.life","netsplit.social","woyala.com","social.anthro.fun","mastodon.insomniacs.biz","social.webvsn.com","social.davidbrush.info","mastodon.kerenon.com","shadowtoot.space","social.ciruxia.se","mastodon.deathbybandaid.net","burchill.social","social.earth.li","mastodon.fukka.co.uk","hawkeyes.social","pleroma.8777.ch","thebased.club","social.grozog.tech","social.cosmick9.net","social.thadthig.com","bas.tn","shanti.cafe","mstdn.co.uk","masto.98degrees.co.uk","guzmer.social","gamers.rip","hub.mtf.party","wiredto.us","toot.shoes","saltedskies.social","galbo.io","mastodon.colorado.icu","weebvr.com","dcerberus.com","andersonstoolshed.com","social.cbinary.sk","fediverse.lol","fedi.paulmathis.dev","mast.mort.cc","plethodon.nl","moorepixel.com","sutrofan.com","sumanko.ml","squirrelmob.com","m.eula.dev","swedishmastodon.social","hydrocube.space","vegh.social","m.jdnet.io","pouet.it","nonbiri.social","soc.punktrash.club","matbox.net","nangang.travnewmatic.com","waarland.eu","social.xphera.eu","social.cdacosta.com","netmonkey.xyz","social.jacksgloryhole.com","mastodonserver.eu","abdl.link","persia.social","ja.social","hax.technology","mastodon.andsmiled.com","ailbhean.co-shaoghal.net","mastodon.pettitservers.com","introvert.country","du.capricom.info","catswords.social","azuretalk.social","ocw.social","stay.woke.institute","ml45.net","florp.social","vive.im","sociamodo.com","mastodon.doan.me","vermont.masto.host","social.royalhellcustoms.com","raphus.social","mkl.lol","social.braxo.se","plural.cafe","cloudisland.nz","therobots.org","wonderful.social","colearn.social","chrisfried.com","social.luca.run","ijaron.life","mtd.sysblog.at","mastod.org","downey.net","capcom.social","slattery.social","social.agnitum.co.uk","lavenby.site","social.bau-ha.us","urlxl.com","social.hanniset.fi","mastodon.xaetacore.net","geekcorner.eu.org","fedi.circuitlocution.com","toad.social","masto.thepit.space","aircrew.rocks","mstdn.science","jawns.club","social.technoetic.com","helms.social","social.cloudless.world","mindly.social","gotham.social","mobettadanyosite.com","jupiterslanding.social","quakers.social","col.social","aniy.jp","actors.social","feesta.social","wolfbunny.lgbt","noblogo.org","sorbit.no","myside-yourside.net","toot.garden","labyrinth.social","bertshouse.social","mejia.social","swisstoots.ch","mastodon.crazynewworld.net","mdon.stefanomarinelli.it","greiner.social","yams.lol","social.niso.org","kramersson.com","mastodon.eus","social.georgeb.net","twitter.oksocial.net","zuzakistan.com","spacey.space","notorious.gay","ioioioio.io","neovibe.app","weilnboeck.social","anarkis.net","m.sakuradancer.zone","mastodon.rydlabs.com","social.michaels.world","gensokyo.social","imc.sh","tooting.cc","social.cool110.xyz","microwords.goodevilgenius.org","8sp.de","bookwyrm.social","celt.social","social.poltava.dcomm.net.ua","novoa.nagoya","fedi.fourhappylions.com","mastocomm.org","potate.space","rabbit.x86.town","social.rohangrey.net","agyilag.zokni.xyz","masto.michaz.de","calamity.world","dubnation.social","unstraight.club","mastodon.misty.garden","bussmann.social","bscabl.ddns.net","aut.social","fedi.acornfarmer.dev","madr.it","morehammer.uk","nrw.social","hci.social","sns.minovsky.space","frenfiverse.net","cultur.social","fuzzle.me.uk","floe.earth","dresden.network","awtter.me","social.pinheirodeabrantes.pt","m.einverne.info","queer.party","mastodon.ie","metcha.me","seocommunity.social","htt.social","social.screamingatmyscreen.com","social.blahajspin.lol","ruhr.social","olching.social","connectop.us","m.universetoday.com","livellosegreto.it","myf.one","yapi.burger.rodeo","curttech.com","social.lol","androiddev.social","ruhrpott.social","mastodon.datamanifesto.org","mastodon.xyz","veganbyproxy.net","tlv.cool","mastodon.nl","a.gup.pe","mn.social","muso.social","pxi.social","tictoc.social","pleroma.manicphase.me","whitehouse.org","social.redcloud.org","mastodon.dgtl-service.com","religion.masto.host","afop.tech","velodrama.cc","novo-atlantis.null.media","omochi.xyz","radicalsocial.work","vectemis.social","previti.net","fedieuropa.eu","malmo.social","mastodon.parleur.net","social.cwts.nl","griffgrub.social","oft.social","mastodon.zb-server.de","opayq.social","social.cu2d.com","liker.social","social.qunn.eu","mechanizedarmadillo.com","artalley.masto.host","ccrvb.com","jelliefrontier.net","pleroma.atyh.cc","goab.net","closednetwork.social","mivox.net","mastodon.lilysthings.org","servernerds.net","chaotic.social","kbec.dev","tny.social","blabber.rocks","poyusbuddy.com","a.minuscule.space","toot.iopush.net","peninsula.industries","toots.lyven.live","mastodon.mtltech.space","sowi.space","pixels.bovine.social","barrowof.gay","freemasonry.social","dodge.me.uk","pb.craignt.com","toot.zerojay.com","honk.vedetta.com","sonomu.club","wayne.social","dnsimple.social","hijacked.denv.org","gulp.cafe","blimps.xyz","efdn.club","jasette.facil.services","oc.todon.fr","mastodon.spimescape.com","cyberstorm.one","viidalepp.me","mastodon.boris.syncloud.it","qu1x.one","caleida.com","arts.social","mastodon.radio","potla.ch","mastodon.terabyte-computing.com","sneeu.com","gamedev.berlin","lousydomain.xyz","balloon.social","toot.site","ms.beniceplease.com","boskovice.social","digisociety.social","cg.social","mastodon.myocci.social","r2.do","bluefox.social","bun.social","turbois.land","m.santolin.eu","techhub.social","masr.social","social.lein.us","scholar.social","exquisite.social","gotosocial.verboseguacamole.com","voidwood.online","pone.social","video.manicphase.me","e-sport.me","wud.me","social.tummyacid.net","social.alt-text.org","nullpointer.org","xerrem.xyz","alteholz.social","aviators.network","drewtoot.com","fennell.dev","toepi.moe","soc.0xdj.dev","chitter.xyz","freespeech.group","mastodon.gatewayy.net","vltava.cloud","gts.xmgz.eu","fedi.underscore.world","drg.nz","rps.social","mastodon.dataden.gay","social.skyshaper.org","macstories.net","social.meattoothindustries.com","micro.yatil.net","mastodon.tgxn.net","mastodns.net","otadon.com","yeg.bike","moobi.monster","socialserver.science","faithcollapsing.com","honk.0x6d77.net","privex.social","nocorp.net","dataprotection.social","mastodon.woojinkim.org","frankfurt.social","terror.black","umbracocommunity.social","bolha.one","xirtak.com","audiomo.online","m.socialyeti.club","xerg.ga","nado.social","xi.ht","utopia.y2k.zone","maxodon.com","wufwuf.org","half-shot.uk","gaming.rip","mastodon.seanos.net","m.epon.io","saltybrackets.com","functional.social","macmynatt.com","freyhult.net","flittermice.club","neenster.org","sunmicro.rip","tubul.net","mastodon.scop.coop","mstdn.beer","nemargut.com","torment.nexus","linuxrocks.online","therian.club","montagne.uk","isfeeling.social","pal.camp","nycity.social","mb.jenot.info","detroitriotcity.com","social.mpdl.mpg.de","worklifepsych.social","social.atypique.net","opensource.org","elrod.me","moe.pastwind.top","dre.casa","pirati.ca","stoners.social","schafweide.org","fennec.town","nsfw.lehtiin.eu","pie.gd","portal.org","blob.cat","postnstuffds.lol","firefish.community","feedbin.social","corn.social","glitch.theocourt.com","feets.tv","kzoo.to","mond-basis.eu","tinycart.club","fantastic.earth","mastodon.peaceful.social","mastodon.mauve.moe","lunchlurkers.com","mas.ink","social.aaroncrocco.com","social.braydmedia.de","booktoot.club","flipping.rocks","liveplatform.ca","honks.io","nerdout.club","luna.social","social.hatto.dev","social.dmorozov.info","pals.chat","mastodon.saintsofvirtue.org","billys.mom","mastodon.bachmann.wtf","creativewriting.social","social.freecodecamp.org","thegoatery.dyndns.org","youth.social","mastodon.ellipsis.fi","bluechakra.cloud","woofy.social","juju.house","limes.pink","doble.ee","publicspaces.net","social.miichelle.moe","aperiodical.com","foggyminds.com","91x.gg","agilealliance.social","xn--ratatskr-r4a.de","toot.dusepo.co.uk","meow.lgbt","abraham.social","mitchw.blog","trans.enby.town","social.mikutter.hachune.net","ard.social","mastodon.sl","animalfound.family","synaptyx.com","msky.mfz.jp","fbk.moe","kamisato.xyz","durdle.social","soc.vis4valentine.com","fediverse.krohsnest.com","zoeoconnell.co.uk","social.grautier.com","the.unforgiven.pl","ak.noleron.com","blewsky.social","uno.starshard.studio","planet.chrisbeckstrom.com","federation.engineering","sigin.fo","verse.belltower.it","jellystyle.social","s.waq.dk","0w0.is","zb3.org","cuties.cloud","balloon.uk","bitfudge.com","nrsk.no","clubnf.us","social.piewpiew.se","swj.io","philipjohn.social","social.thecrow.uk","slkr.space","social.lightlyseared.online","social.ozoned.net","acegiak.net","cyberpunk.gmbh","4four.org","quiet.social","lasersare.fun","social.vdavez.com","wikimedia.es","gr8r.com","takahe.humberto.io","social.we3.co","takahe.social","social.benjaminturner.me","theorangeone.net","fedi.talktodan.com","instinctd.com","skalnik.com","slsrepo.com","fediverse.date","minne.social","mastodon.cosmicnation.co","peak.pub","fedi.s1i.dev","pleroma.tcweb.org","theolddude.masto.host","screenwriting.space","uwu.alex0.net","kneel.before.dog","1701home.com","nd2.uk","mastodon.variousbits.net","social.thetooniverse.xyz","rollenspiel.social","mastodon.hypnoguys.com","mammut.moe","electroverse.tech","soapbox.chamba.social","tube.tchncs.de","mastodon.n41.lat","indulgent.art","owo.cafe","deepspace.gay","clockwork.monster","cum.salon","clubcyberia.co","mstdn.tokyocameraclub.com","sleepy.cafe","social.qutic.com","tlef.social","mstdn.gergely-szabo.com","restless.systems","retro.pizza","zotum.net","fogna.social","pnw.zone","pigeons.club","amble.quest","iscute.moe","mastodon.n8vsi.com","the.cat.broker","3rdwall.net","ellis.social","web.oh-w.tf","social.colinmartin.com","kosmos.social","frnd.nanoscopic.de","biddul.ph","galaxians.garden","social.applied-langua.ge","social.konsolenknecht.de","pufferzone.racing","fakenewsdaddy.com","jirutka.cz","infosec.place","social.lgtspd.net","chancearthur.com","bocchi.yamako-ya.com","kagu-tsuchi.com","songbird.cloud","toot.community","gravitystorm.co.uk","mastohack.com","quey.la","notvery.social","krc.lol","snabelen.no","birdsite.weiranzhang.com","daan.social","softwaremill.social","praxis.nyc","tommy.gg","vtuberfan.social","pkteerium.xyz","charcha.cc","social.sdf.org","activism.openworlds.info","mk.humblemagica.org","nemudaru.uk","misskey.usuwolabo.page","social.camph.net","social.0ff-topic.org","misskey.afy.jp","astronomy.social","m.bit-friends.de","redwings.social","aurigator.net","follow.onemanandhisblog.com","mastodon.solidev.net","matthiesen.eu","mastodon.cat","offworld.fedisonic.cloud","mastodon.star-one.org.uk","duluth.social","trans.house","tucson.masto.host","ezone.fun","toot.paris","pixelig.social","mcr.wtf","social.ralnode.net","social.nerdbutler.com","uxp.de","social.jacobandersen.dev","dat-a.com","pixie.town","mastodon.leonardwong.tech","waterford.international","helo.fuse.pl","replicants.cafe","mastodutchservers.com","meld.de","mastodon.thebeeches.house","the.galaxybrain.co","marcotte.party","redfern.is","r3pek.org","mastodon.esmevane.com","lebe.gg","social.chdorner.com","two-bits.org","puffin.social","honk.bronevichok.ru","mastodon.roundpond.net","mastodon.medica.im","sink.love","social.ivydra.com","mastodon.jumping.wang","mastodon.peterjanes.ca","cornerof.world","climatejustice.global","fediverse.giorgiocomai.eu","bluelupine.social","awaymessage.club","a.tela.moe","tabletop.vip","rdrama.cc","toot.forth.works","plush.city","wallofconfusion.org","cyrix.matto.nl","rants.au","snoot.tube","social.noescapevg.com","fedi.triodug.com","social.rib.gay","aachen.social","paw.best","wallflowersocial.club","mastodon.partecipa.digital","fedi.anarchy.moe","transmom.love","gizm0.dev","tchafia.be","pleroma.io","k8s.social","social.lightbeamapps.com","amiga.team","retromodding.club","mastodon.ameth.org","deacon.social","bitbang.social","social.mykolayiv.dcomm.net.ua","dembowski.social","east17.org","howcyborgs.chat","meo.ws","social.ppmx.org","quite.social","social.invisible.ch","social.authorhelp.uk","fe.disroot.org","pleroma.nachocheese.mom","modem.network","fed.chris-shaw.dev","hooray.computer","deepthot.org","boltcutter.network","eworld.social","social.kyzune.com","baraag.net","retroverse.social","digitaldarkage.cc","diddlyfx.space","youdeserve.space","mastodon.melroy.org","fedi.lucasvl.nl","rhys.wtf","catgirl.fr","definitely.social","cijber.social","fedi.ifarded.lol","anime.kona.moe","rwn.lol","ciechom.nohost.me","masto.dentora.ca","social.anaproy.nl","friendica.myportal.social","glitch.lgbt","lea.pet","federation.network","fedi.solibre.de","dosgame.club","body.social","hackers.town","app.wafrn.net","artisan.chat","reisen.church","social.immibis.com","ecliptik.com","btr.net","better.boston","mastodon.projektchaos.network","tangofam.space","fosstodon.org","neurospicy.club","gred.al","neg9.org","mastodon.johndevine.co.uk","technodon.org","mastodon.grozav.dev","social.fishpool.org","social.etwg.xyz","allegedly.illegitimate.technology","diaspodon.fr","mstd.dansmonorage.blue","social.nerdzoom.media","trinitybristol.social","m.tkw.fm","lime.fuo.fi","soziale.cloud","noisy-lab.com","social.yeswas.pl","theblower.au","fedi.nyc.what.if.ua","taciturn.social","willems.social","toot.thewalkingdeaf.social","neko.cat","toot.aquilenet.fr","socialwriters.net","dimick.social","thevelvetedge.net","social.lgm.ltd","fozztexx.com","social.van.buu.re","dialup.cafe","horny.house","mastodon.flockofnazguls.com","mk.xiupos.net","skrivel.se","mk.u0conveni.club","moron.city","kusso-yotta.com","awesome.garden","ganesha.social","misskey.akyoz.net","entreco.net","plustodon.net","mastodon.phukuile.com","mastodon.from-de.com","futurefabric.co","redd.live","lovelace.social","tonytiger.club","toodee.social","independent-media.co.uk","fedi.kemonomimi.gay","ak.ouroboros.gay","a17k.social","blueplanet.social","social.mckendrick.io","snac.youfoh.xyz","schelling.pt","akop.online","geraffel.social","animalesenfu.ga","cutewaifu.enjoyer.network","social.rjp.is","social.walterebert.com","gregnewman.io","usr.cloud","tootworld.social","scuttle.cloud","social.fbievan.live","devopsdays.org","utopia.cool","fishpool.org","borg.social","piepants.xyz","mastodon.uno","authorhelp.uk","nickcho.social","lordoftheplex.com","bear.community","oldinternet.net","suncoast.dev","bikers.social","chasmcity.net","3rdstone.cc","cherrykitten.gay","meow.social","cybre.gg","totallynormalis.land","mapstodon.space","soothing.cloud","pl.pyrope.net","kogumus.masto.host","misskey.styxem.xyz","social.rhea.art","sean.doherty.social","videos.globenet.org","mastodon.cc","mastodon.ap-msk.com","tldr.nettime.org","social.etacassiopeiae.net","social.nekover.se","jaoh.xyz","mstdn.plus.st","cobryce.com","mao.mastodonhub.com","mastodon.existiert.ch","computer-club.online","mastodon.drewhess.social","soc.cluboftone.com","dssc.io","dotgr.id","social.careyscloud.ie","horrorhub.club","techfieldday.net","eupolicy.social","social.sunet.se","mstdn.goblackcat.com","mstdn.ar","mastodon.energy","pando.social","scribing.social","calckey.art","m.4869.homes","mas.to","social.ballpointcarrot.net","marrow.haus","mstdn.cf","post.lurk.org","akiba.party","pounced-on.me","ftp.crysp.org","giersig.net","neo.voidworks.cc","thesinalab.de","wtjelly.net","neckarwie.se","social.alexschroeder.ch","thewizardingworld.com","rando.social","mastodon.truesciphi.org","mstdn-jp.site","social.igotout.de","costodon.social","enshittification.social","mt.shc.kanagawa.jp","mstdn.nan1.casa","lincolnite.net","cyberhideaway.online","payravi.xyz","the.crabdance.ca","tau-ceti.space","gloomypixels.space","ai.wiki","pleroma.soykaf.com","social.kghorvath.com","chatsubo.bar","sevenscreens.net","dreamgate4u.de","www2.kt2003.info","apkallu.us","mikumikudance.cloud","mastodon.naturalorder.me","frogdrool.net","superpets.social","magnificentbeardsfan.club","void.0x0a.de","toot.best","blackheartrebellion.com","stoat.zone","misskey.bootjp.me","social.phillipjordan.com","mymstdn.pl","laterracita.online","finsup.site","inscribe.social","vocalounge.cafe","thejoyo.com","tearmoon.com","social.teamb.space","mycrowd.ca","jvns.ca","squeaky.social","mastodon.chasalin.nl","mastodon.chantierlibre.org","geekstodon.com","tooter.social","faerie.tel","crucible.world","toot.onitato.com","social.sp-codes.de","fedi.interestingzinc.xyz","toots.a-deed.com","thekitty.zone","pixel.tchncs.de","studiofreesia.com","pleroma.yodan.ninja","mastodon.vlaanderen","social.sigsoft.org","olifant.fi","biologists.social","mefi.social","social.yoichihirai.com","social.vasilis.nl","teamgallagher.social","strangeobject.space","koyu.space","hostux.social","dt.gl","social.telemetrydeck.com","mastodon.au","uwu.social","glitch.social","mediastodon.com","qxpix.com","aschaffenburg.social","san-antonio.social","birb.stream","social.hsn.dev","strangeminds.social","turtletoot.us","pug.ninja","brotkru.me","twitter.grants.cafe","vgmnation.com","carck.co.uk","social.ataxya.net","dolphin-emu.org","salzman.uk","social.wyndix.dev","l0l.city","treehouse.systems","crooklyn.social","mastodon.art","honk.city","mede.family","news.ongii.com","mi.nyaa.app","korikata.hostdon.ne.jp","ciberlandia.pt","misskey.bubbletea.dev","dynamic.land","totoot.social","msgs.ee","anantshri.info","social.baz.com","mast.knife.coffee","wao.wtf","mastodon.brendans-bits.com","pleroma.karjalazet.se","socially.drinkingatmy.computer","mstdn.pokete.com","mastodon.obdev.at","lemmy.zip","kammeyer.xyz","machikadon.online","snowmans.land","paulklipp.com","nadena.dev","ecoevo.social","gaydadon.jp","berlin.social","gayhorse.club","tarasupadon.com","booktoot.social","fan.vtubertoot.com","sciencemastodon.com","mastodon.exp0.ml","boteden.com","yatil.social","social.matsuuratomoya.com","cosple.world","mastodon.flifloo.fr","biggs.social","tribe.net","toot.bldrweb.org","akko.wtf","cutie.city","digitalcourage.social","mastodon.philtanner.com","falk.cafe","betagravity.com","det.social","fey.cafe","social.shofutex.net","ck.borgar.space","social.stilic.ml","click.ba.it","foojay.social","indw.social","blaede.family","somewhy.net","baty.social","tut.andreer.no","soc.7thmagic.net","social.pixelpusher.no","pivox.net","kazv.moe","nsfw.finance","boles.xyz","sportsbots.xyz","masto.spears.social","mastodon.dopcrew.com","social.nfld.uk","yshi.org","curling.social","techtodon.com","autisticpri.de","lostlightstudio.team","nozbe.com","fedi.bangsparks.com","mastodon.spesh.com","social.kenodriscoll.com","social.plant-based.place","fedi.hanna.lol","orangechair.org","addicted.social","smeap.com","campfi.rs","westvisions.social","awkward.company","archaeo.social","konbini.social","arielfinn.social","asciisnowman.yachts","animal.business","chatter.quux.world","mastodon.tradingcardarchives.com","midnight.miami","arbitrarymusings.com","soc.ua-fediland.de","douban.city","rheinhessen.social","sphere.fx4.net","mastodeb11movsl.ddns.net","mastodon.yahel.com","mastodo.ng","dadalo.pl","mstdn.0xdj.dev","social.moment.at","mace.social","dmv.community","l3ib.org","weirder.earth","bobbinsrobots.com","gardenstate.social","furtenbach.social","social.arbolitoloco.xyz","social.lilac.lab.shortcord.com","flumph.masto.host","otter.buzz","akkoma.vault105.ca","raki.club","mastodon.bhop.zone","sxgr.fun","amk.ie","todon.eu","beaware.live","strangeanarchy.xyz","speckledmonkey.com","convo.casa","noc.social","mccormick.cx","glitch.gaycookie.dev","gamemaking.social","a.nti.social","shitposte.rs","mk.noko1024.net","mastodon.uk.com","mfmf.club","misskey.cloud","test-calckey-uwu.naskya.net","mitran.masto.host","illo.social","bound4the.icu","mastodonsport.com","knse.net","evil.social","mastodon.jonasled.de","deepthunder.co.uk","masto.efdnet.com","gm-cloud.org.uk","matsudon.hostdon.ne.jp","s.nomya.net","social.nubecula.org","noutori.space","vivinezz.hostdon.ne.jp","imi.moe","techforgood.social","mstdn.aomushionline.com","social.fabiomrbarbosa.com","cyberfurz.social","considerate.social","fim.social","benedikts.social","colovo.com","moonbow.garden","technogothic.net","kudzu.ca","nya.otter.sh","lemmy.blahaj.zone","mastodon.launay.org","weber.fi.eu.org","pleroma.otter.sh","awoo.chown.me","educhat.social","misskey.de","existentialdread.com","conf.tube","quinnwitz.house","mastodon.g2od.ch","mastodon.cipherbliss.com","risk.social","dustbuster.club","pix.webm.ink","masto.sndw.ch","social.gabekangas.com","notasquirrel.dev","social.platypus-sandbox.com","elonsucks.org","burgh.social","snaggletooth.life","mastodon.pachamamita.de","sportsfeed.me","syringa.social","arvr.social","coolmathgam.es","mariusdavid.fr","selfy.army","4liberty.one","social.mondoweiss.net","tea.codes","queernerds.social","birdsitelive.falschgold.net","post.ebin.club","syndicat.solidaires.org","social.ms1.me","screencastsonline.social","spanring.social","lesbian.energy","iame.li","politehumans.com","aperture.ink","m.de-ath.co.uk","fellies.social","m68k.church","toot.design","bnnuy.space","tmm.cx","ldwg.me","maakr.social","mastodon.akhepcat.com","m.objc.io","thefoxandalien.club","socl.cloud","theamityville.social","struct.bio","3v.is","mi.kanachu-homes.com","mi.c-at.jp","subspace.social","vt.social","nemudaru.misskey.online","calckey.coffee-break.cc","social.witchfinder.org","masto.shite.site","mcuch.com","mublog.nl","mstdn.tenjuu.net","takoverse.syutin.com","stream.ozoned.net","prattohome.com","mastodon.roitsystems.ca","crazylab.online","mastoden.com","mastodon.progaccess.net","bavaria.social","mastodon.livingonlinenow.com","hakase.cloud","sv1.in-deep.blue","coldrick.me.uk","fedi.skyizwhite.dev","itools.jp","mn.soa3.net","dev.zeroes.ca","ijug.social","mastodon.toni.im","mastodon.free-solutions.org","metasocial.com","meridiangrp.co.uk","troetmund.de","soc.strawhousepig.net","bookwor.ms","chirp.enworld.org","ak.kawen.space","h4.io","mousectrl.org","uksocial.cloud","mastodonners.nl","allforall.network","shouldagoneoffroad.com","cloud-native.social","paquita.masto.host","niklas.social","mastodon.kuang11.net","fedibb.ml","social.hodos.ro","mstdn.kernel-panic.lol","gayfr.social","a11y.info","phparch.social","toot.wales","mstr.cloud","embers.social","ivoor.eu","compound.social","breakdown.moe","social.quake.host","phoebus.cc","mastodon.ai8w.ddns.net","rebelbase.site","masto.bimbiribase.xyz","duck.haus","mastodon.ahorn.info","barnes.social","openbiblio.social","mastodon.cisti.org","hub.adrelien.com","handlerug.me","asocial.grimstack.xyz","tootnet.com","bodybag.zip","piano.masto.host","gremlins.social","mindplex.sotatek.works","bsd.cafe","chaos.social","lighttheunicorn.horse","lemmy.world","comp.lain.la","selfhosted.cafe","crispsandwi.ch","mastodon.ladd.network","allpro.social","transden.lgbt","strobel.one","dice.camp","toast.dragon2611.net","hachyderm.io","takesama.com","mastodon.gamedev.place","simian.rodeo","social.ffconf.org","slime.global","talkedabout.social","video.audiovisuel-participatif.org","avgeek.social","toot.party","tux.social","fed.jacksonbarker.ca","nso.group","social.nodered.org","unbound.social","social.desbasques.com","pleroma.breizh.pm","censurion.tk","queerspirituality.social","ngmx.com","smile.brandonage.xyz","social.untone.uk","pouet.jablon.fr","bonequest.net","types.pl","sincurity.com","seafoam.space","macgirvin.com","photog.social","skastodon.com","jazztodon.com","mastodon.fedja.fi","ruin.io","lily.flowers","pdx.land","birds.social","friendsofdesoto.social","ni.hil.ist","camp.smolnet.org","valenciapa.ws","supernatural.fans","govanify.com","social.arkane-systems.net","lonestar.chat","twit.social","nerd.net","giantheart.social","frmsn.network","swecyb.com","cats.city","supersocial.space","peoplemaking.games","ianstormtaylor.social","t.den.yt","social.illegalpornography.com","inthedeltawaves.social","mstdn.host116.ru","otaku.1337.blue","floss.social","distraction.party","tech.lgbt","teh.entar.net","felin.social","press.coop","mastodon.bandshell.rocks","misskey.le0kyun.net","u.misskey.studio","cybercitizen.group","himagine.club","social.n1l.dev","social.stress404.com","kanina.be","social.dino.icu","toot.gru.social","madfps.social","toot.senkitahara.com","toot.foundation","gazouiller.fr","pollyanna.social","mastodon.pcgaldo.com","monb.work","366.koyomi.online","real-escape.jp","koyomi.co","bird.makeup","spanner.works","botsin.space","floof.org","fedi.tasossah.com","soc.gng.io","indieauthors.social","mastodon.acm.org","masto.ai","feddit.dk","fedi.bapril.pl","miniwa.moe","retrochat.online","lemmy.ca","akko.airis.dev","timdoug.com","social.glasgownet.com","yql.social","blimey.social","fuerth.social","cosmicfir.es","social.antemeridiem.xyz","lemniskett.dev","social.achterstrasse.net","ellitestdev.com","gcn.sh","toot.flagrama.net","iosdev.space","p.mr64.net","fluffytail.org","alemi.dev","famichiki.jp","aethy.com","social.donaberger.xyz","krefeld.life","artsculture.media","electronicmusic.social","hagerman.social","karas.social","nluug.social","overkill.social","coofdylabs.social","packmates.org","mstdn.starnix.network","mastodon.fishnet.vip","kensei.dev","mapsupport.de","akkos.fritu.re","commiespace.duckdns.org","asbestos.cafe","shitpost.poridge.club","masturbated.one","gloria.social","woof.archandle.net","heffalump.club","toot.jhnc.me.uk","anxiety.baby","mastodon.petripulkkinen.social","m.enesgenc.dev","sushi.ski","trpger.us","mattyaski.co","omnify.social","mastodon.blubb.fish","klunscher.social","startrekshitposti.ng","varishangout.net","s10y.eu","bbq.snoot.com","botany.social","rigor-mortis.nmrc.org","llarian.net","oceanplayground.social","pnpde.social","mstdn.es","crabland.social","furality.social","mis.ski","alpaca.gold","moonhaus.eu","zombofant.net","mastodon.bida.im","birdbutt.com","metalverse.social","pubsub.fun","profiles.lol","evergood.me","est.social","tranarchy.fish","a.sc","gazette.live","social.nokes.name","butts.team","social.apreslanu.it","rytter.me","mastodon.pirateparty.be","mastodon.hk","pirate.lgbt","twinports.us","noagendasocial.com","gotosocial.oceansurf.org","dtth.ch","retirenow.top","weatherishappening.network","toot.plus.yt","mastodon.xech.io","prsm.space","staysilent.party","mxtthxw.art","mastodon.compositecomputer.club","ursa.cafe","social.mypdns.org","tragically.social","ak.fedpal.org","fandom.garden","fedi.nlpagan.net","social.larus.se","tenforward.social","minidisc.tokyo","mastodon.green","mastodon.notsobig.co","the.kessoku.club","fedisabled.social","yip.vulpine.engineer","polyglot.city","social.goodanser.com","lemmy.ml","bzh.social","wholesome.computer","kamu.social","mstdn.chrisalemany.ca","social.ziez.eu","desu.social","mastodon.karaolidis.com","asylum.nz","trystero.social","social.the-hub.zone","cuscuz.in","asiacompete-international.com","tinycyber.space","schleuss.online","no-pony.farm","burningnebula.net","masto.measure.chat","social.nettohikari.com","brnt.cr","mastodon.douvk.co.uk","silversword.online","jcs.org","qlink.social","mastodon.house","social.spheron.one","mas.else.social","glaux.io","qaf.men","mapstodon.technology","firefaithfellowship.com","mstdn-social.com","mastodon.rafaelbailon.com","sinnesro.se","mastodon.moule.world","misskey.flat.place","btcd.ahxxm.com","social.dru5k1.com","trans-support.lgbtqfaces.co.uk","social.gamingden.zone","terziu.xyz","dawdling.net","nzserver.co","awootism.club","jamesgallagher.social","technopolitic.social","mi.7mi.site","ti22.pro","funnyna.me","ck.villisek.fr","nuwardia.xyz","arda.sh","darktundra.xyz","gndv.tbrn.org","pejookaloo.social","thoughts.tf","wubba.boo","leaningleft.social","national-defence.network","subversive.zone","dox.land","performingart.online","us.andrewscom.net","pleroma.chladny.de","mastodon.binarycat.org","mastodon.coloradocrest.net","theomega.zone","social.chiefgyk3d.com","social.coraxfm.uk","crag.social","peeledoffmy.skin","masktodon.social","6a02.digital","honeytree.social","milli.ng","dizmal.red","blimpof.evil.red","toot.nx-pod.de","antisocial.notyour.tech","mastodon.eddmil.es","srweaver.com","vmst.io","moparisthe.best","pleroma-in.ouda.space","journa.host","hostsharing.coop","qth.social","bbiz.io","wue.social","masto.machlis.com","stroud.social","urusai.social","malolepszy.org","tootie.social","v01d.nl","tams.tech","recurse.social","msx.horse","social.hackspace.tech","mastodon.mit.edu","storyteller.social","social.zym.lol","social.spejset.org","vshn.social","csed.social","mainichi.social","mastodon.melin.org","eveningzoo.club","mastodonfor.me","mathtod.online","toot.j3b.in","chocolatines.org","x86.social","sysad.ninja","raw.masto.host","paws.press","lair.be","federate.social","fedi.mint.lgbt","mostlychris.net","pawsitiv.space","indieweb.social","mastodon.acc.sunet.se","ioc.exchange","social.thisisjoes.site","bofh.social","dom.social","astral.camp","forgi.social","moresci.sale","mstdn.omer.land","social.karambol.life","ufoarmy.com","roleplaycastle.com","mastodon.41x.xyz","hannover.town","inane.chat","birdsite.thorlaksson.com","social.bund.de","x0r.be","everything.happens.horse","mastodon.sdf.org","toots.im","social.ketupat.me","apricot.social","10mb.social","fedi.neon.moe","robertparker.se","cartaxo.eu","social.secret-wg.org","social.jp.serial-experiments.com","universeodon.com","small.circlez.social","uff.rip","social.martiabernathey.com","zeroes.ca","astrodon.social","muenchen.social","mammut.gogreenit.net","mastodon.social","toot.bike","mastodon.darkplanetego.de","beehaw.org","mymastadon.link","yopp.me","pets.contact","misc.name","yiffit.net","hilltown.studio","chatbox.social","nafo.army","ourempty.pub","social.generallyrubbish.net","xerg.rais.au","lesbian.solutions","martianbase.net","social.cowcornerfeeds.co.in","social.nyaafire.com","pleroma.kenhutton.uk","xn--8r9a.com","mastodon.cgx.me","poa.st","pythonplayer123.xyz","myhobby.zone","toot.pizza","not-very.social","10000x.dev","redwombat.social","simongreenwood.me.uk","mastodon.timotheejulien.fr","fulda.social","pocmo.social","worldkey.io","8e7.us","wonkodon.com","social.molthagen.de","drosophila.social","someone.elses.computer","nicfab.it","idf.social","retro.social","indiehackers.social","finecity.social","theatl.social","a.lowkey.party","gerardbentley.com","kmy.blue","alaskan.social","sueden.social","mastodon-belgium.be","beige.party","mastodonapp.uk","ciechom.eu","misskey.io","dragonfruit.dev","fediverse.asia","neurospicynerds.com","balsillie.net","mtd.pythonasia.org","tymoon.eu","sigmoid.social","grafana.social","freeradical.zone","retrorewind.social","social.tchncs.de","ani.work","pkm.social","awjeez.help","pol.social","furry.engineer","social.mcqn.com","mas.town","mastodon.missing-deadlines.com","mastodon.online","writing.exchange","istanza.ch","vnil.de","m.cmx.im","fashionsocial.host","gay.lesaoras.xyz","social.engard.me","woon.my","mastodon.bellamazz.com","stoat.org.uk","bunny.blue","m.debianlinux.de","einbeck.social","burningboard.net","sylvia-is.gay","utter.online","dev-null.io","tachiyomi.moe","systemsfail.net","social.biorez.de","trumbeta.me","corneill.es","denizens.social","sloth.run","v2br.social","41020.social","toots.nu","hirad.it","just-one-more.club","pdx.sh","epistolary.org","ck.pikopublishing.page","midgardmates.com","meta.masto.host","astronomy.city","qdon.space","social.fluxfox.dev","mastodon.thirring.org","kde.social","t.l3r.me","fuckcars.social","freethought.online","elaine.is","mastodon.neilzone.co.uk","goblin.camp","blander.ddnsfree.com","warloq.com","landofkittens.social","pinksection.xyz","libretweet.com","mstdn.health","biscuit.town","art-software.fr","nitecrew.rip","wifey.dev","pxlmo.net","triangletoot.party","mastodon.ph","queer.dev","toot.vinzant.me","cyberpunk.pics","datasci.social","wehavecookies.social","shoddy.site","evolved.systems","mastodon.iriseden.eu","social.egalwaat.lu","sudarkoff.social","fanboys.social","xeno.glyphpress.com","foxocube.xyz","mastodon.the937.rocks","miaowi.ng","m.fed.fan","wbknl.xyz","inductive.space","sself.co","arabi.gay","meowstodon.net","social.insider-it.de","brands.town","skinheads.social","imaginair.es","mastodon.falkvinge.net","slippy.xyz","myprivate.social","luna.vg","social.rights.ninja","toot.umiamz.me","7td.org","schalanda.name","fursuits.online","kiritan.work","sometimes.when.computer","mst.t0.lv","mastodon.kylemacquarrie.co.uk","akko.chir.rs","mastodon.lol","storo.social","mastodon.matthewmcvickar.com","p.node.pk","podaboutli.st","lieurance.social","tambayan.us","kinkyelephant.com","eta.st","social.overheid.nl","masto.anarch.cc","raru.re","merta.social","witter.cz","metapixl.com","fedi.reimu.info","lily.network","zirk.us","remotelab.uk","derg.social","canerduh.ca","thoughtful.social","mastorol.es","mastonederland.nl","gamerscharisma.social","mastodon.pirati.cz","poag.one","cdrum.social","social.ffmuc.net","cloudhub.social","caramelbeard.social","fastly.social","mementomori.social","mastsocial.de","p1.a9z.dev","gamepad.club","mastodon.adju.st","f.kawa-kun.com","cyber.gent","mastodon.richardpickler.com","outremer.social","toot.spaill.net","woem.space","anti-social.online","upenn.social","fvnki.town","catcatnya.com","s.basspistol.org","hashc.at","hyperplex.net","bilboed.tech","masto.fediv.eu","jontka.fi","sustainability.masto.host","digressive.me","c64.chat","webdev.so","social.netz.org","ibite.lol","mensmaaktmooi.nl","rubber.social","kitty.social","penfount.social","pl.nulled.red","smith.camp","masto.vy-let.software","social.huginn.uk","mastodon.murkworks.net","fed.sbcloud.cc","nova.community","social.milksoup.net","mentalhealth.social","bytearray.eu","mcwhirter.io","eveley.net","burnthis.town","katze.sh","social.lfx.dev","social.itu.dk","surfnet.space","go5.dev","mtg.garden","pixelfed.se","red.niboe.info","mastodon.ody.si","suedi.club","romancelandia.club","social.satan-speaks.com","squ.alid.pw","hub.netzgemeinde.eu","dizl.de","mastodon.bayern","snug.moe","mastodon.oeru.org","mastodon-uk.net","precure.ml","ak.nachocheese.uk","cztwitter.cz","social.zete.tk","mastodon.org.uk","3dp.chat","social.shadowfacts.net","talk.mls20.de","sauropods.win","mach-o.com","hitchhiker.social","social.archworks.co","social.arclight.pro","mamot.fr","linux.social","outdoors.lgbt","nutmeg.social","witches.live","kif.rocks","kbin.social","buff.tomboyfan.club","fediscience.org","mstdn.ca","infosec.exchange","norden.social","mastodon.content.town","howdidthisgethere.masto.host","piaille.fr","wordbunny.org","aus.social","infosec.town","slon.yojik.net","oc.is","procursus.social","badgay.net","travel-friends.chat","social.linksfraktion.de","port87.social","social.gaven.me","toolsforthought.rocks","mastodon.com.py","pleroma.eigenvector.org.uk","blackrock.city","dope.bz","catgirl.cloud","mk.catgirlsfor.science","tedcarstensen.social","heath.social","pixelfed.de","mst.statusbar.com","turboteam.xyz","al45tair.net","soc.jra.sh","theskimonster.social","crabby.fyi","mastodon.fakedevhotel.com","social.maplecrew.org","bdash.net.nz","toot.yosh.is","sketchwave.club","mastodon.b12e.be","social.lsferreira.net","takahe.omer.land","adamski2003.lol","snipetteville.in","social.spiegelslust.xyz","agora.ilot.io","toot.subak.club","andrews.me","greywolf.social","social.hugot.nl","social.bopinions.de","mastodon.com.pl","livingblindfully.social","social.design.systems","wuffs.org","space-pirates.org","mastodon.madhammer.club","isometry.group","stoney.monster","mastodon.hccp.org","supergood.social","gtfo.social","elytra15.com","wspanialy.eu","abpe.org","gayrobot.club","greenmushroomnetwork.masto.host","xn--lofll-1sat.is","unfug.social","vx0.dev","bigshoulders.city","mastodon.grin.hu","tenshu.net","social.ctrlz.es","disobey.net","firefish.tech","fo.am","carfree.city","pleroma.meinert.life","ewing.au","social.masto.host","firefish.consummatetinkerer.net","eattherich.club","dinosaur.farm","chavie.masto.host","social.lugal.io","yaf.ai","nodespace.social","mk.nixnet.social","thomas.ma","tacobelllabs.net","mastodon.tetaneutral.net","mastodon.idiot.sh","social.logilab.org","pinkroom.biz","weekly.org","akkoma.mercurywork.shop","social.harukizaemon.com","mastodon.dougaldog.uk","guild.pmdcollab.org","sw-development-is.social","social.badabam.net","thomaspreece.net","social.veraciousnetwork.com","social.sneak.ovh","ist.social","comm.cx","lile.cl","hechtinsgefecht.de","pawoo.net","silverheart.social","coop.lol","mastodon.roflcopter.fr","w3c.social","mastodon.cloud","krigskunst.social","lounge.town","sporedrive.space","s.javisantana.com","social.zaphar.net","glasgow.social","mast.tymscar.com","cr8r.gg","transportation.social","dauen.name","social.lyrenhex.com","marsey.moe","birdbots.leptonics.com","mstdn.social","ghostly.garden","travelpandas.fr","oliphant.social","honnef.co","mastodon.earth","lewacki.space","mstdn.party","mas.erb.pw","mastodon.janusweb.org","mastodon.garden","mathstodon.xyz","artsio.com","data-folks.masto.host","sfunk1x.com","mastodonmusic.social","social.bitbybitwhatever.com","katsudon.squabbled.net","dewp.space","mediastudies.berlin","federatedfandom.net","social.ordinal.garden","zoot.fun","notiz.blog","reedyn.com","pouet.fedi.quebec","admin.social","denvr.social","nileane.fr","hoodlem.social","social.empoer.li","mstdn.dk","rv.social","photodn.net","guitar.rodeo","social.adlerweb.info","mastodon.gougoule.ch","fedi.thepolarbear.co.uk","alis.me","cooler.mom","m.dsnv.net","social.smalldog.club","vonsee.de","ayom.media","technews.social","mastodon.matabiau.ovh","sydenie.me","blog.ndrvn.nl","zug.network","social.fantorovevo.com","dftba.club","socel.net","shatteredsky.net","0sint.social","oldfriends.live","myasstodon.xyz","alphaville.club","rejoiner.eu","social.guckt.info","social.trom.tf","comics.town","kef2.net","fedi.dysphoric.space","social.n1mtp.com","echo.spi.id.au","morph.todon.de","pyrox.dev","mastodon.triggerphra.se","nkantar.social","mastodon.cyborch.com","social.ndlug.org","techdon.dev","polxa.online","wp-social.net","phpc.social","terra.incognita.net","chahut.social","kirakiratter.com","social.bacardi55.io","ludosphere.fr","mastodon.chuggybumba.com","adforward.org","mastodon.cr","mograph.social","thechimp.zone","warhammer.social","mastodon.nz","diskette.online","home.social","fluttercommunity.social","tinymst.xyz","hax0rbana.social","friend.camp","mastodon.cacharreo.duckdns.org","gamedev.social","fax.social","toot.earth","mastodon.com.br","ctu.cx","social.authbypass.com","me.ns.ci","fedi.home.ctu.cx","mastodon.zeteo.me","brotka.st","hellowelcome.club","asafniv.me","bagarrosphere.fr","rocketeer.be","kitty.town","medic.cafe","ilbery.social","social.taker.fr","social.kernel.org","bluejay.social","mast.lat","mastodonti.st","hobbs-end.uk","calckey.world","handmade.social","kotaro.me","starlight.camp","ilyamikcoder.com","cwb.social","phillips.fun","cysioland.pl","makerspace.social","emergencyalerts.app","xantronix.social","fedisocial.net","kanoa.de","bits.social","owo.town","techspace.social","social.chvp.be","avantwhatever.org","techthoughts.io","mast.eu.org","mastodon.embros.org","social.wub.site","jannis-goeing.de","folksocial.org","icyphox.sh","godforsaken.website","toot.systems.fail","internetofshit.net","mastodon.socdojo.com","g33ks.coffee","geobla.net","social.dogdroid.dev","pertsch.social","greennuclear.online","wikimedia.social","500.social","zusammenhalt.de","theverge.space","mastodon.se","accioly.social","pdx.social","eupublic.social","so.rezzedup.com","indigenousgulf.online","awscommunity.social","mytransponder.com","geekdom.social","bright.rosy-colored.space","jrd.cat","mastodon.cesium.pw","ned.masto.host","a.n0id.space","toot.cat","tolppa.thermopylas.fi","loutre.info","orbital.horse","social.dgrammatiko.dev","emeraldsocial.org","sauna.social","plock.social","beergeek.social","social.aiqwest.com","malmo.chat","fyrfli.social","spaceup.city","fiveeighteen.net","hodapp.club","mastodon.ehret.me","social.maschinendeck.org","fedi.akselmo.dev","dauden.me","vlhl.dev","jade.moe","bildung.social","kvalhe.im","squidnet.net","void.rehab","ap.remote-shell.net","chinanews.social","www.jvt.me","balkan.fedive.rs","mastodon.kleph.eu","pawb.fun","mastodon.spacefox.fr","anfield.social","mastodon.thentrythis.org","social.okoyono.de","lediver.se","webmapping.social","lipn.info","bulman.social","bergamot.social","height.social","asyncapi.social","mastodon.room409.xyz","helmi.social","toot.berlin","muensterland.social","librarysocialism.social","misskey.anemoneya.me","mastodon.familie-de-boer.net","subculture.chat","sad.earth","extwitriates.com","social.ciaranmc.com","lgbt.io","praise.udongein.xyz","farbun.social","social.bim.land","keyboards.social","makerforce.io","lqx.net","text.tchncs.de","frootmig.net","pleroma.stumblestore.de","plamo.social","lajna.si","datacorner.social","propaganda.lol","spiffy.social","earthstream.social","dexnext.social","mastodonti.co","toot.schau.nl","narwhal.pub","ganba.re","natter.social","douzepoints.social","mastodon.hofud.com","bitcoinhackers.org","social.senyuuri.info","learnlinux.social","ebf.io","mastodo.fi","cascarilla.social","julialang.social","mastodon.luca-cazzulo.it","liberated.network","sakurajima.moe","logoff.website","hessen.social","tty.social","mastodon.albertoluna.es","aana.site","cybre.space","asbestosden.org","tutut.delire.party","revillas.es","planet.moe","toot.jascha.wtf","vulpine.club","librem.one","expired.mentality.rip","cock.social","ottawa.place","komintern.work","zoner.gay","corp.social","social.data.coop","troet.cafe","social.northbaypython.org","satellite.earth","ikbenpiraat.nl","ebf.social","mastodon.janke.biz","edi.social","notacult.social","glen.social","amicale.net","tooters.org","kcmo.social","pleroma.viridianpatriots.com","bananachips.club","wetdry.world","fediphilosophy.org","social.dev-wiki.de","fediverse.science","welt.all.de","tube.4aem.com","kirche.social","cmh.one","toot.gnous.eu","qubit-social.xyz","lukelambert.com","mamutut.space","mastodon.think-privacy.com","podcastindex.social","monkeydiesel.net","social.rootaccess.org","brettspiel.space","donotban.com","mastodon.world","lacot.org","rymnd.net","voi.social","social.4netguides.org","hsnl.social","towns.gay","chregu.tv","soc0.outrnat.nl","retrogaming.social","trombas.vost.pt","fluffy.family","social.drastical.tech","blahaj.social","mstdn.fr","loopfree.tech","goblin.technology","cybre.town","elephantelephantelephant.com","tty0.social","gnulinux.social","lothlorien.net","blumenwie.se","social.tcit.fr","social.yesterweb.org","mastodon.nzoss.nz","mstdn.my","aipi.social","dju.social","don.linxx.net","mastodon.in.th","halt.cl","oulipo.social","cybre.club","russiaukraine.world","masto.social","kpop.social","mastodon.foxfam.club","mastodon.libre-entreprise.com","autonomous.zone","faith.2pp.uk","raccoon.place","meinungsschubla.de","fedibird.com","xoxo.zone","masthead.social","mstdn.mx","snailedit.social","shibe.family","m.kul.sh","iowadon.org","liberdon.com","social.learntosolveit.com","transfur.social","clj.social","sausage.social","mastodon.top","berserker.town","akko.valentines.monster","yfwu.org","tiny.tilde.website","jasondavies.com","kith.kitchen","m6n.io","haunted.computer","mastodon.education","finotto.social","codatory.com","mastodont.social","medibubble.org","fedi.ajmaradiaga.com","stereophonic.space","vivaldi.net","gruene.social","meow.binaryfeline.com","linuxjobs.social","social.yeschenko.com","discuss.systems","social.kyiv.dcomm.net.ua","sunbeam.city","nebbia.fail","law.builders","freundica.de","social.rodriguezrullan.com","library.love","social.wikimedia.de","social.jackhumphrey.me","openmic.day","mstdn.id","pandasemi.co","fedi.freevariable.com","fredrikohlin.com","weirdo.network","mlhangout.social","engmanager.space","eqb.social","me.memories.am","boiler.social","linuxlab.sh","mutual.tls.zone","carl.fish","sneaky.computer","dgc.social","social.gamez.name","mastodon.london","mastodon.collazo.ws","circus.monster","hub.volse.no","meteo.social","shytrr.com","esperanto.masto.host","fedia.social","mastodon.opencloud.lu","toot.craftweg.com","mastodon.archive.org","thunderkeys.net","o3o.ca","social.sceneworld.org","nuked.social","fairdinkum.one","mastodon.lmdk.co.uk","lermer.nl","mastodon.tedomum.net","osna.social","maescool.be","leftist.network","nitech.online","brokentoys.social","toot.rwell.org","our.devchatter.com","internaut.club","tpz.de","lostvoid.cyberretards.xyz","systerserver.town","uiuxdev.social","mastodon.in.ua","coletivos.org","social.oark.org","epicure.social","mastodon.rctatman.com","musician.social","toot.beep.computer","mastodon.pl","mendeddrum.org","obo.sh","toot.ale.gd","m.rselbach.com","tabletop.social","schnauzer.social","kulturfront.org","robw.me","m.g3l.org","howes.nz","uwyn.net","bgme.me","mstdn.watsonlabs.net","mastodon.zapashcanon.fr","social.troplo.com","file-explorers.club","donotsta.re","twiukraine.com","social.opendesktop.org","anarchism.space","pourparler.ca","feralmimesis.xyz","masto.donte.com.br","social.tinygo.org","libretooth.gr","hofra.rocks","toot.sg","smnz.de","blop.social","akkoma.ascyltos.social","tailswish.industries","lou.lt","besties.house","atta.ch.to","worm.horse","d-64.social","seda.social","theinternet.social","mastodon.quantumindigo.org","d14n.club","tastybugs.club","poto.cafe","animexx.de","bol.social","jpeinelt.eu","mstn.apps4net.eu","sn.angry.im","lgbtqplus.social","mastodon.muage.org","hackerspace.pl","mastodon.scot","m.bluem.io","delab.re","devco.social","0v0.ch","sociale.network","indg.club","maly.io","p6drad-teel.net","social.fkeinsten.de","mastodon.partipirate.org","serenityos.social","socialcoderz.com","zhub.link","mastodon.sandwich.net","psynet.me","devtools.social","onlybsds.com","bloom.casa","topspicy.social","bz.pawdev.me","alpaka.social","wang.nz","malaga.social","toot.thoughtworks.com","xyzyx.org","iddqd.social","featherless.design","mastodon.barfnoises.com","otter.garden","m.gy.gl","airwaves.social","mastogram.com","social.tofu.pt","neuromatch.social","kokoro.garden","nickcharlton.net","systemli.social","zyzz.me","eu.mastodon.green","podcasts.social","toot.ipghod.tech","absolutelyhar.am","hackthesound.com","roboces.dev","mastodon.marginalea.online","sivar.cafe","vael.town","uwu.town","social.juliusgamanyi.com","pub.solar","serenity.social","bawue.social","mastodon.mim-libre.fr","poweredbygay.social","mastodon.bachgau.social","social.qownnotes.org","avclub.camp","bd.pub","miasma.me","nsinteger.com","mastodon.siteop.biz","irrelephant.co","drupal.community","rizzek.de","hub.hubzilla.de","bequeme-couch.de","mastodon.modern-industry.com","mastodon.coffee","shrike.club","social.ncot.uk","toot.boston","mastodon.fedi.bzh","bonn.social","nfld.social","drumstodon.net","ohai.social","bla.highway.social","pars.ee","hub.somaton.com","toot.typetura.com","xn--thelnd-eua.land","ak.kyaruc.moe","mato.social","toot.si","gameliberty.club","aspiechattr.me","fedi.nullob.si","mastodon.codingfield.com","scrubjay.social","social.colinramsay.co.uk","mastodon.truongan.name.vn","halifaxsocial.ca","social.snorklr.com","gaminginthe.cloud","mastodon.amesgen.de","social.bitwig.community","mastodon.starshipchangeling.net","norrebro.space","mastodon.wellperns.com","mastodon.arch-linux.cz","social.undrground.org","tatooine.club","forall.social","confraria.me","rettiwtkcuf.social","akkoma.cryptoschizo.club","unix.dog"];function Qp(i){let e,t,n,o,a,r,s="R",l,c,d="E",h,u,p="C",g,_,f="O",m,S,b="I",T,E,R="L",A,F,y="someserver.dev",w,K,j,B='<main class="mb-auto"><div class="divide-y divide-gray-200 dark:divide-gray-700"><div class="space-y-2 pb-8 pt-6 md:space-y-5"><h1 class="text-3xl font-inter font-thin leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1> <h1 class="text-3xl font-inter font-light leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1> <h1 class="text-3xl font-inter leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1> <h1 class="text-3xl font-inter font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1> <h1 class="text-3xl font-inter font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1> <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">A blog created with Next.js and Tailwind.css</p></div></div></main>',W,V,Q,X='<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5> <a href="/" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">View all</a>',Y,J,Z,U,q,de,ce,he,Me,Ae,Re='<p class="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>',je,ft,Fe="$320",D,ut,_e,Pe,ke,qe,He,De,Qe='<p class="text-sm font-medium text-gray-900 truncate dark:text-white">Bonnie Green</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>',gt,ct,M="$3467",v,I,ne='<div class="flex items-center space-x-4"><div class="flex-shrink-0"><div style="font-size: 3em; color: tomato"></div></div> <div class="flex-1 min-w-0"><p class="text-sm font-medium text-gray-900 truncate dark:text-white">Michael Gough</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div></div>',$,ee,me,te,N,ve,be,ge,pe='<p class="text-sm font-medium text-gray-900 truncate dark:text-white">Lana Byrd</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>',fe,Ue,et="$367",k,se,O='<div class="flex items-center space-x-4"><div class="flex-shrink-0"><svg width="48" height="48" version="1.1" viewBox="0 0 33.867 33.867" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-14.834 -94.555)"><path d="m18.538 96.213v15.275l13.229-7.6377zm13.23 7.6381v15.275l13.229-7.6377zm-13.23 7.6381v15.275l13.229-7.6377z" fill-opacity=".9819"></path></g></svg></div> <div class="flex-1 min-w-0"><p class="text-sm font-medium text-gray-900 truncate dark:text-white">Thomes Lean</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div></div>',ie,le,We='Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation',nt,it,Jt,$e,wt,Mt,Jn,Tt,In,at,hn,jt,mn,yn,xn,wn,x,L,G,C,H,oe,ye,Ee,Te,Ie,Se,ze,tt,ot,_t,Rt,st,Ne,fn,rt,St,pn,Nn,Qn,dt,Ct,mi="Anil Madhavapeddy",kt,Qt,yo='Anil can be found at <a href="https://anil.recoil.org/">anil.recoil.org</a> and posts updated to <a href="https://amok.recoil.org/@avsm">@avsm</a> on the recoil Mastodon instance.',$n,Mn,gs='<img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="img/nick-14.jpg" alt="Anil Madhavapeddy"/> <div class="flex flex-col justify-between p-4 leading-normal"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nick Ludlam</h5> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Nick can be found at <a href="https://nick.recoil.org/">nick.recoil.org</a> and posts updated to <a href="https://amok.recoil.org/@nick">@nick</a> on the recoil Mastodon instance.</p></div>',xo,Fn,vs=`<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"><h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1> <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"><a href="/" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a> <a href="/" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Learn more</a></div></div>`,wo,ca,_s;return he=new Ya({props:{icon:Jp}}),qe=new Ya({props:{icon:faMastodon}}),ve=new Ya({props:{icon:faMastodon}}),{c(){e=Xe(),t=Ce("div"),n=Ce("div"),o=Xe(),a=Ce("div"),r=Ce("div"),r.textContent=s,l=Xe(),c=Ce("div"),c.textContent=d,h=Xe(),u=Ce("div"),u.textContent=p,g=Xe(),_=Ce("div"),_.textContent=f,m=Xe(),S=Ce("div"),S.textContent=b,T=Xe(),E=Ce("div"),E.textContent=R,A=Xe(),F=Ce("div"),F.textContent=y,w=Xe(),K=Ce("section"),j=Ce("div"),j.innerHTML=B,W=Xe(),V=Ce("div"),Q=Ce("div"),Q.innerHTML=X,Y=Xe(),J=Ce("div"),Z=Ce("ul"),U=Ce("li"),q=Ce("div"),de=Ce("div"),ce=Ce("div"),ha(he.$$.fragment),Me=Xe(),Ae=Ce("div"),Ae.innerHTML=Re,je=Xe(),ft=Ce("div"),ft.textContent=Fe,D=Xe(),ut=Ce("li"),_e=Ce("div"),Pe=Ce("div"),ke=Ce("div"),ha(qe.$$.fragment),He=Xe(),De=Ce("div"),De.innerHTML=Qe,gt=Xe(),ct=Ce("div"),ct.textContent=M,v=Xe(),I=Ce("li"),I.innerHTML=ne,$=Xe(),ee=Ce("li"),me=Ce("div"),te=Ce("div"),N=Ce("div"),ha(ve.$$.fragment),be=Xe(),ge=Ce("div"),ge.innerHTML=pe,fe=Xe(),Ue=Ce("div"),Ue.textContent=et,k=Xe(),se=Ce("li"),se.innerHTML=O,ie=Xe(),le=Ce("p"),le.innerHTML=We,nt=Xe(),it=Ce("img"),$e=Xe(),wt=Ce("img"),Jn=Xe(),Tt=Ke("svg"),In=Ke("defs"),at=Ke("linearGradient"),hn=Ke("stop"),jt=Ke("stop"),mn=Ke("stop"),yn=Ke("stop"),xn=Ke("stop"),wn=Ke("stop"),x=Ke("stop"),L=Ke("stop"),G=Ke("stop"),C=Ke("stop"),H=Ke("g"),oe=Ke("g"),ye=Ke("path"),Ee=Ke("path"),Te=Ke("path"),Ie=Ke("path"),Se=Ke("path"),ze=Ke("path"),tt=Ke("path"),ot=Ke("path"),_t=Ke("path"),Rt=Ke("path"),st=Xe(),Ne=Ce("div"),fn=Ce("div"),rt=Xe(),St=Ce("a"),pn=Ce("img"),Qn=Xe(),dt=Ce("div"),Ct=Ce("h5"),Ct.textContent=mi,kt=Xe(),Qt=Ce("p"),Qt.innerHTML=yo,$n=Xe(),Mn=Ce("a"),Mn.innerHTML=gs,xo=Xe(),Fn=Ce("section"),Fn.innerHTML=vs,this.h()},l(xe){Ql("svelte-ooaif",document.head).forEach(re),e=Ye(xe),t=Le(xe,"DIV",{class:!0});var Mo=we(t);n=Le(Mo,"DIV",{class:!0}),we(n).forEach(re),o=Ye(Mo),a=Le(Mo,"DIV",{class:!0});var Ft=we(a);r=Le(Ft,"DIV",{class:!0,"data-svelte-h":!0}),pt(r)!=="svelte-1zctd5"&&(r.textContent=s),l=Ye(Ft),c=Le(Ft,"DIV",{class:!0,"data-svelte-h":!0}),pt(c)!=="svelte-dms2mo"&&(c.textContent=d),h=Ye(Ft),u=Le(Ft,"DIV",{class:!0,"data-svelte-h":!0}),pt(u)!=="svelte-127ni66"&&(u.textContent=p),g=Ye(Ft),_=Le(Ft,"DIV",{class:!0,"data-svelte-h":!0}),pt(_)!=="svelte-ypcqw2"&&(_.textContent=f),m=Ye(Ft),S=Le(Ft,"DIV",{class:!0,"data-svelte-h":!0}),pt(S)!=="svelte-xglsek"&&(S.textContent=b),T=Ye(Ft),E=Le(Ft,"DIV",{class:!0,"data-svelte-h":!0}),pt(E)!=="svelte-1vgzttn"&&(E.textContent=R),A=Ye(Ft),F=Le(Ft,"DIV",{class:!0,contenteditable:!0,"data-svelte-h":!0}),pt(F)!=="svelte-69e06m"&&(F.textContent=y),Ft.forEach(re),Mo.forEach(re),w=Ye(xe),K=Le(xe,"SECTION",{class:!0});var So=we(K);j=Le(So,"DIV",{class:!0,"data-svelte-h":!0}),pt(j)!=="svelte-1vr2e6"&&(j.innerHTML=B),W=Ye(So),V=Le(So,"DIV",{class:!0});var Eo=we(V);Q=Le(Eo,"DIV",{class:!0,"data-svelte-h":!0}),pt(Q)!=="svelte-11ofl2e"&&(Q.innerHTML=X),Y=Ye(Eo),J=Le(Eo,"DIV",{class:!0});var bs=we(J);Z=Le(bs,"UL",{role:!0,class:!0});var gn=we(Z);U=Le(gn,"LI",{class:!0});var ys=we(U);q=Le(ys,"DIV",{class:!0});var fi=we(q);de=Le(fi,"DIV",{class:!0});var xs=we(de);ce=Le(xs,"DIV",{style:!0});var ws=we(ce);ma(he.$$.fragment,ws),ws.forEach(re),xs.forEach(re),Me=Ye(fi),Ae=Le(fi,"DIV",{class:!0,"data-svelte-h":!0}),pt(Ae)!=="svelte-gpg4li"&&(Ae.innerHTML=Re),je=Ye(fi),ft=Le(fi,"DIV",{class:!0,"data-svelte-h":!0}),pt(ft)!=="svelte-rfk2uh"&&(ft.textContent=Fe),fi.forEach(re),ys.forEach(re),D=Ye(gn),ut=Le(gn,"LI",{class:!0});var Ms=we(ut);_e=Le(Ms,"DIV",{class:!0});var pi=we(_e);Pe=Le(pi,"DIV",{class:!0});var Ss=we(Pe);ke=Le(Ss,"DIV",{style:!0});var Es=we(ke);ma(qe.$$.fragment,Es),Es.forEach(re),Ss.forEach(re),He=Ye(pi),De=Le(pi,"DIV",{class:!0,"data-svelte-h":!0}),pt(De)!=="svelte-hk2oz8"&&(De.innerHTML=Qe),gt=Ye(pi),ct=Le(pi,"DIV",{class:!0,"data-svelte-h":!0}),pt(ct)!=="svelte-1pz382e"&&(ct.textContent=M),pi.forEach(re),Ms.forEach(re),v=Ye(gn),I=Le(gn,"LI",{class:!0,"data-svelte-h":!0}),pt(I)!=="svelte-1dagj8v"&&(I.innerHTML=ne),$=Ye(gn),ee=Le(gn,"LI",{class:!0});var Ts=we(ee);me=Le(Ts,"DIV",{class:!0});var gi=we(me);te=Le(gi,"DIV",{class:!0});var ks=we(te);N=Le(ks,"DIV",{style:!0});var As=we(N);ma(ve.$$.fragment,As),As.forEach(re),ks.forEach(re),be=Ye(gi),ge=Le(gi,"DIV",{class:!0,"data-svelte-h":!0}),pt(ge)!=="svelte-4tr3zx"&&(ge.innerHTML=pe),fe=Ye(gi),Ue=Le(gi,"DIV",{class:!0,"data-svelte-h":!0}),pt(Ue)!=="svelte-1x39kp6"&&(Ue.textContent=et),gi.forEach(re),Ts.forEach(re),k=Ye(gn),se=Le(gn,"LI",{class:!0,"data-svelte-h":!0}),pt(se)!=="svelte-blc17v"&&(se.innerHTML=O),gn.forEach(re),bs.forEach(re),Eo.forEach(re),So.forEach(re),ie=Ye(xe),le=Le(xe,"P",{"data-svelte-h":!0}),pt(le)!=="svelte-jl9sbz"&&(le.innerHTML=We),nt=Ye(xe),it=Le(xe,"IMG",{src:!0,alt:!0}),$e=Ye(xe),wt=Le(xe,"IMG",{src:!0,alt:!0}),Jn=Ye(xe),Tt=Ze(xe,"svg",{width:!0,height:!0,viewBox:!0,version:!0,id:!0,xmlns:!0,"xmlns:svg":!0});var da=we(Tt);In=Ze(da,"defs",{id:!0});var Rs=we(In);at=Ze(Rs,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,spreadMethod:!0});var $t=we(at);hn=Ze($t,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),we(hn).forEach(re),jt=Ze($t,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),we(jt).forEach(re),mn=Ze($t,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),we(mn).forEach(re),yn=Ze($t,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),we(yn).forEach(re),xn=Ze($t,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),we(xn).forEach(re),wn=Ze($t,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),we(wn).forEach(re),x=Ze($t,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),we(x).forEach(re),L=Ze($t,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),we(L).forEach(re),G=Ze($t,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),we(G).forEach(re),C=Ze($t,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),we(C).forEach(re),$t.forEach(re),Rs.forEach(re),H=Ze(da,"g",{id:!0,transform:!0});var Cs=we(H);oe=Ze(Cs,"g",{"aria-label":!0,id:!0,style:!0});var en=we(oe);ye=Ze(en,"path",{d:!0,id:!0}),we(ye).forEach(re),Ee=Ze(en,"path",{d:!0,id:!0}),we(Ee).forEach(re),Te=Ze(en,"path",{d:!0,id:!0}),we(Te).forEach(re),Ie=Ze(en,"path",{d:!0,id:!0}),we(Ie).forEach(re),Se=Ze(en,"path",{d:!0,id:!0}),we(Se).forEach(re),ze=Ze(en,"path",{d:!0,id:!0}),we(ze).forEach(re),tt=Ze(en,"path",{d:!0,id:!0}),we(tt).forEach(re),ot=Ze(en,"path",{d:!0,id:!0}),we(ot).forEach(re),_t=Ze(en,"path",{d:!0,id:!0}),we(_t).forEach(re),Rt=Ze(en,"path",{d:!0,id:!0}),we(Rt).forEach(re),en.forEach(re),Cs.forEach(re),da.forEach(re),st=Ye(xe),Ne=Le(xe,"DIV",{});var Ls=we(Ne);fn=Le(Ls,"DIV",{class:!0}),we(fn).forEach(re),Ls.forEach(re),rt=Ye(xe),St=Le(xe,"A",{href:!0,class:!0});var To=we(St);pn=Le(To,"IMG",{class:!0,src:!0,alt:!0}),Qn=Ye(To),dt=Le(To,"DIV",{class:!0});var ko=we(dt);Ct=Le(ko,"H5",{class:!0,"data-svelte-h":!0}),pt(Ct)!=="svelte-18xd876"&&(Ct.textContent=mi),kt=Ye(ko),Qt=Le(ko,"P",{class:!0,"data-svelte-h":!0}),pt(Qt)!=="svelte-1bewrq4"&&(Qt.innerHTML=yo),ko.forEach(re),To.forEach(re),$n=Ye(xe),Mn=Le(xe,"A",{href:!0,class:!0,"data-svelte-h":!0}),pt(Mn)!=="svelte-1wplkal"&&(Mn.innerHTML=gs),xo=Ye(xe),Fn=Le(xe,"SECTION",{class:!0,"data-svelte-h":!0}),pt(Fn)!=="svelte-1av4zfu"&&(Fn.innerHTML=vs),this.h()},h(){document.title="recoil.org",P(n,"class","viz-background"),P(r,"class","recoil-huge recoil-huge-r"),P(c,"class","recoil-huge recoil-huge-e"),P(u,"class","recoil-huge recoil-huge-c"),P(_,"class","recoil-huge recoil-huge-o"),P(S,"class","recoil-huge recoil-huge-i"),P(E,"class","recoil-huge recoil-huge-l"),P(F,"class","recoil-huge-peer-highlight recoil-huge-peer-highlight-out"),P(F,"contenteditable","true"),i[9]===void 0&&Zl(()=>i[19].call(F)),P(a,"class","flex h-screen"),P(t,"class","viz-container"),P(j,"class","flex h-screen flex-col justify-between font-sans"),P(Q,"class","flex items-center justify-between mb-4"),qt(ce,"font-size","3em"),qt(ce,"color","tomato"),P(de,"class","flex-shrink-0"),P(Ae,"class","flex-1 min-w-0"),P(ft,"class","inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"),P(q,"class","flex items-center space-x-4"),P(U,"class","py-3 sm:py-4"),qt(ke,"font-size","3em"),qt(ke,"color","tomato"),P(Pe,"class","flex-shrink-0"),P(De,"class","flex-1 min-w-0"),P(ct,"class","inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"),P(_e,"class","flex items-center space-x-4"),P(ut,"class","py-3 sm:py-4"),P(I,"class","py-3 sm:py-4"),qt(N,"font-size","3em"),qt(N,"color","tomato"),P(te,"class","flex-shrink-0"),P(ge,"class","flex-1 min-w-0"),P(Ue,"class","inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"),P(me,"class","flex items-center space-x-4"),P(ee,"class","py-3 sm:py-4"),P(se,"class","pt-3 pb-0 sm:pt-4"),P(Z,"role","list"),P(Z,"class","divide-y divide-gray-200 dark:divide-gray-700"),P(J,"class","flow-root"),P(V,"class","w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"),P(K,"class","mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0"),ua(it.src,Jt="/svg/recoil_inter.svg")||P(it,"src",Jt),P(it,"alt","My Happy SVG"),ua(wt.src,Mt="/svg/recoil_pacifico.svg")||P(wt,"src",Mt),P(wt,"alt","My Happy SVG"),P(hn,"offset","0%"),P(hn,"stop-color","hsl(211deg 100% 35%)"),P(hn,"stop-opacity","1"),P(jt,"offset","19%"),P(jt,"stop-color","hsl(255deg 43% 54%)"),P(jt,"stop-opacity","1"),P(mn,"offset","31%"),P(mn,"stop-color","hsl(293deg 42% 52%"),P(mn,"stop-opacity","1"),P(yn,"offset","42%"),P(yn,"stop-color","hsl(321deg 68% 58%)"),P(yn,"stop-opacity","1"),P(xn,"offset","52%"),P(xn,"stop-color","hsl(337deg 100% 66%)"),P(xn,"stop-opacity","1"),P(wn,"offset","62%"),P(wn,"stop-color","hsl(351deg 100% 69%)"),P(wn,"stop-opacity","1"),P(x,"offset","71%"),P(x,"stop-color","hsl(13deg 100% 68%)"),P(x,"stop-opacity","1"),P(L,"offset","80%"),P(L,"stop-color","hsl(31deg 100% 61%)"),P(L,"stop-opacity","1"),P(G,"offset","90%"),P(G,"stop-color","hsl(45deg 100% 54%)"),P(G,"stop-opacity","1"),P(C,"offset","100%"),P(C,"stop-color","hsl(55deg 100% 49%)"),P(C,"stop-opacity","1"),P(at,"id","recoilGradient"),P(at,"x1","0%"),P(at,"y1","0%"),P(at,"x2","0%"),P(at,"y2","100%"),P(at,"spreadMethod","pad"),P(In,"id","defs2"),P(ye,"d","m 35.141584,60.906675 q -1.340557,0 -1.905002,-1.411112 -0.529167,-1.411112 -0.529167,-4.515559 0,-4.586114 1.305279,-8.713617 0.3175,-1.023056 1.023056,-1.481668 0.740834,-0.493889 2.046113,-0.493889 0.705556,0 0.987778,0.176389 0.282223,0.176389 0.282223,0.670278 0,0.564445 -0.529167,2.540002 -0.352778,1.411112 -0.564445,2.469446 -0.211667,1.058334 -0.352778,2.610558 1.164167,-3.033891 2.610557,-4.938893 1.44639,-1.905001 2.822224,-2.71639 1.411112,-0.81139 2.57528,-0.81139 2.293057,0 2.293057,2.293057 0,0.458612 -0.3175,2.222502 -0.282223,1.411112 -0.282223,1.76389 0,1.234723 0.881945,1.234723 0.987779,0 2.540002,-1.552223 0.458611,-0.458612 0.952501,-0.458612 0.458611,0 0.705556,0.423334 0.282222,0.388056 0.282222,1.058334 0,1.305278 -0.705556,2.046112 -0.987778,1.023057 -2.328335,1.76389 -1.305279,0.705556 -2.786946,0.705556 -1.869724,0 -2.857502,-0.9525 -0.952501,-0.952501 -0.952501,-2.57528 0,-0.529167 0.105834,-1.058334 0.07055,-0.705556 0.07055,-0.9525 0,-0.564445 -0.388056,-0.564445 -0.529167,0 -1.411112,1.199445 -0.846667,1.164167 -1.693334,3.104447 -0.846667,1.940279 -1.375834,4.092225 -0.388056,1.658056 -0.917223,2.257779 -0.493889,0.564445 -1.587501,0.564445 z"),P(ye,"id","path1891"),P(Ee,"d","m 64.422157,52.863336 q 0.458611,0 0.705556,0.423334 0.282222,0.423333 0.282222,1.164167 0,1.411112 -0.670278,2.187224 -1.305279,1.587501 -3.704169,2.928057 -2.363613,1.340557 -5.080004,1.340557 -3.704169,0 -5.750281,-2.010835 -2.046113,-2.010835 -2.046113,-5.503337 0,-2.434168 1.023056,-4.515559 1.023057,-2.116668 2.822224,-3.351391 1.834446,-1.234723 4.127503,-1.234723 2.046113,0 3.280836,1.234723 1.234723,1.199445 1.234723,3.280836 0,2.434168 -1.76389,4.198058 -1.728613,1.728612 -5.891393,2.751669 0.881945,1.622779 3.351391,1.622779 1.587501,0 3.598336,-1.093612 2.046112,-1.12889 3.52778,-2.928058 0.423334,-0.493889 0.952501,-0.493889 z m -8.890006,-5.115281 q -1.305279,0 -2.222502,1.516945 -0.881945,1.516946 -0.881945,3.668892 v 0.07055 q 2.08139,-0.493889 3.280836,-1.481668 1.199445,-0.987778 1.199445,-2.293057 0,-0.670278 -0.388056,-1.058334 -0.352778,-0.423333 -0.987778,-0.423333 z"),P(Ee,"id","path1893"),P(Te,"d","m 69.290482,60.906675 q -3.457225,0 -5.397504,-1.940279 -1.905001,-1.975557 -1.905001,-5.185837 0,-2.857502 1.128889,-5.009448 1.12889,-2.151946 2.928058,-3.316113 1.799168,-1.164168 3.774725,-1.164168 1.940279,0 2.998613,1.164168 1.093612,1.128889 1.093612,2.928057 0,1.481668 -0.670279,2.504724 -0.635,1.023056 -1.693334,1.023056 -0.670278,0 -1.093612,-0.3175 -0.388056,-0.3175 -0.388056,-0.881945 0,-0.246945 0.07056,-0.564445 0.07056,-0.3175 0.105833,-0.458611 0.176389,-0.529167 0.176389,-0.987779 0,-0.458611 -0.246944,-0.705556 -0.211667,-0.246944 -0.635001,-0.246944 -0.811389,0 -1.516945,0.740834 -0.705556,0.705556 -1.12889,1.940279 -0.423334,1.234723 -0.423334,2.71639 0,4.092225 3.563058,4.092225 1.44639,0 3.104447,-0.9525 1.693334,-0.987779 3.316113,-2.928058 0.423334,-0.493889 0.952501,-0.493889 0.458611,0 0.705556,0.423334 0.282222,0.423333 0.282222,1.164167 0,1.340556 -0.670278,2.187224 -1.658057,2.046112 -3.986391,3.175002 -2.293058,1.093612 -4.445003,1.093612 z"),P(Te,"id","path1895"),P(Ie,"d","m 93.526331,49.900001 q 0.458612,0 0.705556,0.458611 0.246945,0.458611 0.246945,1.164167 0,1.693335 -1.023056,2.010835 -2.116668,0.740834 -4.65667,0.846667 -0.670278,2.963336 -2.645835,4.762504 -1.975557,1.76389 -4.480281,1.76389 -2.116668,0 -3.633613,-1.023057 -1.481668,-1.023056 -2.25778,-2.71639 -0.776111,-1.693335 -0.776111,-3.668892 0,-2.681113 1.023056,-4.762503 1.023056,-2.116668 2.822224,-3.280835 1.799168,-1.199446 3.986392,-1.199446 2.681112,0 4.303891,1.869724 1.658057,1.834445 1.940279,4.550836 1.658057,-0.105833 3.951114,-0.705556 0.282223,-0.07055 0.493889,-0.07055 z m -11.571119,7.267227 q 1.12889,0 1.94028,-0.917223 0.846667,-0.917223 1.128889,-2.645835 -1.093612,-0.740834 -1.693334,-1.940279 -0.564445,-1.199446 -0.564445,-2.540002 0,-0.564445 0.105833,-1.12889 h -0.176389 q -1.411112,0 -2.363612,1.375835 -0.917223,1.340556 -0.917223,3.810002 0,1.940279 0.740834,2.963335 0.776111,1.023057 1.799167,1.023057 z"),P(Ie,"id","path1897"),P(Se,"d","m 96.066342,41.962495 q -1.481668,0 -2.222502,-0.670278 -0.740833,-0.705556 -0.740833,-1.940279 0,-1.234723 0.9525,-2.046113 0.987779,-0.846667 2.434169,-0.846667 1.305278,0 2.116668,0.635001 0.811389,0.635 0.811389,1.799168 0,1.411112 -0.917223,2.257779 -0.917223,0.811389 -2.434168,0.811389 z m -0.282222,18.94418 q -2.293058,0 -3.351392,-1.622779 -1.023056,-1.622779 -1.023056,-4.303892 0,-1.587501 0.388056,-4.056947 0.423334,-2.504724 1.058334,-4.65667 0.3175,-1.12889 0.846667,-1.552223 0.529167,-0.423334 1.693335,-0.423334 1.799168,0 1.799168,1.199445 0,0.881945 -0.670279,4.092225 -0.846667,3.880559 -0.846667,5.256393 0,1.058334 0.282223,1.622779 0.282222,0.564444 0.9525,0.564444 0.635001,0 1.587501,-0.881945 0.952501,-0.881945 2.54,-2.786946 0.42334,-0.493889 0.9525,-0.493889 0.45861,0 0.70556,0.423334 0.28222,0.423333 0.28222,1.164167 0,1.411112 -0.67028,2.187224 -3.492499,4.268614 -6.52639,4.268614 z"),P(Se,"id","path1899"),P(ze,"d","m 110.31858,55.756116 q 0.38806,-0.352778 0.77611,-0.352778 0.42333,0 0.67028,0.493889 0.28222,0.458611 0.28222,1.128889 0,1.481668 -1.05833,2.363613 -1.83445,1.516946 -4.16278,1.516946 -3.35139,0 -4.90362,-2.786947 -1.55222,-2.822224 -1.55222,-7.337782 0,-4.303892 1.09361,-9.807229 1.12889,-5.503337 3.28084,-9.454451 2.18722,-3.951114 5.18583,-3.951114 1.69334,0 2.64584,1.587501 0.98778,1.552224 0.98778,4.480281 0,4.198058 -2.32834,9.736673 -2.29305,5.538615 -6.27945,10.936119 0.24695,1.44639 0.88195,2.08139 0.635,0.635 1.72861,0.635 0.59972,0 1.34056,-0.352778 0.77611,-0.352778 1.41111,-0.917222 z m -1.16417,-24.694461 q -0.81139,0 -1.83444,2.928057 -1.02306,2.928058 -1.79917,7.267227 -0.77611,4.33917 -0.84667,8.325561 2.50473,-4.127502 3.98639,-8.255005 1.48167,-4.162781 1.48167,-7.584728 0,-2.681112 -0.98778,-2.681112 z"),P(ze,"id","path1901"),P(tt,"d","m 116.95084,60.906675 q -1.55222,0 -2.36361,-0.846668 -0.77611,-0.846667 -0.77611,-2.222501 0,-1.587501 0.88194,-2.540002 0.91723,-0.9525 2.54,-0.9525 1.55223,0 2.32834,0.776111 0.81139,0.740834 0.81139,2.222502 0,1.622779 -0.91722,2.610557 -0.91723,0.952501 -2.50473,0.952501 z"),P(tt,"id","path1903"),P(ot,"d","m 140.86918,49.900001 q 0.45861,0 0.70555,0.458611 0.24695,0.458611 0.24695,1.164167 0,1.693335 -1.02306,2.010835 -2.11667,0.740834 -4.65667,0.846667 -0.67028,2.963336 -2.64583,4.762504 -1.97556,1.76389 -4.48028,1.76389 -2.11667,0 -3.63362,-1.023057 -1.48167,-1.023056 -2.25778,-2.71639 -0.77611,-1.693335 -0.77611,-3.668892 0,-2.681113 1.02306,-4.762503 1.02305,-2.116668 2.82222,-3.280835 1.79917,-1.199446 3.98639,-1.199446 2.68112,0 4.3039,1.869724 1.65805,1.834445 1.94027,4.550836 1.65806,-0.105833 3.95112,-0.705556 0.28222,-0.07055 0.49389,-0.07055 z m -11.57112,7.267227 q 1.12889,0 1.94028,-0.917223 0.84666,-0.917223 1.12889,-2.645835 -1.09361,-0.740834 -1.69334,-1.940279 -0.56444,-1.199446 -0.56444,-2.540002 0,-0.564445 0.10583,-1.12889 h -0.17639 q -1.41111,0 -2.36361,1.375835 -0.91722,1.340556 -0.91722,3.810002 0,1.940279 0.74083,2.963335 0.77611,1.023057 1.79917,1.023057 z"),P(ot,"id","path1905"),P(_t,"d","m 141.29252,60.906675 q -1.34056,0 -1.90501,-1.411112 -0.52916,-1.411112 -0.52916,-4.515559 0,-4.586114 1.30528,-8.713617 0.3175,-1.023056 1.02305,-1.481668 0.74084,-0.493889 2.04612,-0.493889 0.70555,0 0.98777,0.176389 0.28223,0.176389 0.28223,0.670278 0,0.564445 -0.52917,2.540002 -0.35278,1.411112 -0.56445,2.469446 -0.21166,1.058334 -0.35277,2.610558 1.16416,-3.033891 2.61055,-4.938893 1.44639,-1.905001 2.82223,-2.71639 1.41111,-0.81139 2.57528,-0.81139 2.29305,0 2.29305,2.293057 0,0.458612 -0.3175,2.222502 -0.28222,1.411112 -0.28222,1.76389 0,1.234723 0.88195,1.234723 0.98777,0 2.54,-1.552223 0.45861,-0.458612 0.9525,-0.458612 0.45861,0 0.70555,0.423334 0.28223,0.388056 0.28223,1.058334 0,1.305278 -0.70556,2.046112 -0.98778,1.023057 -2.32833,1.76389 -1.30528,0.705556 -2.78695,0.705556 -1.86972,0 -2.8575,-0.9525 -0.9525,-0.952501 -0.9525,-2.57528 0,-0.529167 0.10583,-1.058334 0.0706,-0.705556 0.0706,-0.9525 0,-0.564445 -0.38806,-0.564445 -0.52917,0 -1.41111,1.199445 -0.84667,1.164167 -1.69334,3.104447 -0.84666,1.940279 -1.37583,4.092225 -0.38806,1.658056 -0.91722,2.257779 -0.49389,0.564445 -1.5875,0.564445 z"),P(_t,"id","path1907"),P(Rt,"d","m 166.79837,45.454998 q 0.88194,0 1.23472,0.282222 0.38805,0.246945 0.38805,1.023056 0,0.423334 -0.0353,0.670278 -0.14111,1.093612 -0.88195,5.644449 -0.52916,3.069168 -0.67028,4.056947 -1.34055,9.101673 -3.63361,14.358065 -2.25778,5.29167 -6.06778,5.29167 -1.79917,0 -2.92806,-1.128889 -1.12889,-1.093612 -1.12889,-2.89278 0,-2.504724 1.97556,-5.397504 1.97556,-2.857502 7.40834,-7.05556 l 0.21166,-1.375834 q -0.59972,0.9525 -1.5875,1.481667 -0.9525,0.49389 -1.905,0.49389 -2.18722,0 -3.4925,-1.587501 -1.30528,-1.587501 -1.30528,-4.162781 0,-2.822224 1.30528,-5.326948 1.30528,-2.540002 3.45722,-4.056947 2.18723,-1.552223 4.6214,-1.552223 0.77611,0 1.02305,0.3175 0.28222,0.282222 0.45861,1.058334 0.67028,-0.141111 1.55223,-0.141111 z m -6.35001,11.888619 q 0.81139,0 1.55223,-0.987779 0.74083,-0.987778 1.05833,-2.822224 l 1.12889,-6.032504 q -1.44639,0.03528 -2.68111,1.12889 -1.23473,1.058334 -1.97556,2.822224 -0.74083,1.76389 -0.74083,3.739447 0,1.093612 0.42333,1.622779 0.45861,0.529167 1.23472,0.529167 z m -2.92806,16.016122 q 0.88195,0 1.97556,-2.116669 1.12889,-2.116668 2.15195,-6.73806 -2.71639,2.328335 -3.91584,4.198059 -1.19944,1.869723 -1.19944,3.280835 0,0.599723 0.21166,0.987779 0.24695,0.388056 0.77611,0.388056 z"),P(Rt,"id","path1909"),P(oe,"aria-label","recoil.org"),P(oe,"id","text236"),qt(oe,"font-size","35.2778px"),qt(oe,"font-family","Pacifico"),qt(oe,"-inkscape-font-specification","'Pacifico, Normal '"),qt(oe,"stroke-width","2"),qt(oe,"stroke-linejoin","bevel"),qt(oe,"fill","url(#recoilGradient)"),P(H,"id","layer1"),P(H,"transform","translate(-32.707415,-27.569152)"),P(Tt,"width","135.71373mm"),P(Tt,"height","49.212532mm"),P(Tt,"viewBox","0 0 135.71373 49.212532"),P(Tt,"version","1.1"),P(Tt,"id","svg5"),P(Tt,"xmlns","http://www.w3.org/2000/svg"),P(Tt,"xmlns:svg","http://www.w3.org/2000/svg"),P(fn,"class","text-8xl font-inter font-black"),P(pn,"class","object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"),ua(pn.src,Nn="img/avsm-12.jpg")||P(pn,"src",Nn),P(pn,"alt","Anil Madhavapeddy"),P(Ct,"class","mb-2 text-2xl font-inter font-black tracking-tight text-gray-900 dark:text-white"),P(Qt,"class","mb-3 font-normal text-gray-700 dark:text-gray-400"),P(dt,"class","flex flex-col justify-between p-4 leading-normal"),P(St,"href","/"),P(St,"class","flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"),P(Mn,"href","/"),P(Mn,"class","flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"),P(Fn,"class","bg-white dark:bg-gray-900")},m(xe,ht){lt(xe,e,ht),lt(xe,t,ht),ae(t,n),i[11](n),ae(t,o),ae(t,a),ae(a,r),i[12](r),ae(a,l),ae(a,c),i[13](c),ae(a,h),ae(a,u),i[14](u),ae(a,g),ae(a,_),i[15](_),ae(a,m),ae(a,S),i[16](S),ae(a,T),ae(a,E),i[17](E),ae(a,A),ae(a,F),i[18](F),i[9]!==void 0&&(F.innerHTML=i[9]),lt(xe,w,ht),lt(xe,K,ht),ae(K,j),ae(K,W),ae(K,V),ae(V,Q),ae(V,Y),ae(V,J),ae(J,Z),ae(Z,U),ae(U,q),ae(q,de),ae(de,ce),fa(he,ce,null),ae(q,Me),ae(q,Ae),ae(q,je),ae(q,ft),ae(Z,D),ae(Z,ut),ae(ut,_e),ae(_e,Pe),ae(Pe,ke),fa(qe,ke,null),ae(_e,He),ae(_e,De),ae(_e,gt),ae(_e,ct),ae(Z,v),ae(Z,I),ae(Z,$),ae(Z,ee),ae(ee,me),ae(me,te),ae(te,N),fa(ve,N,null),ae(me,be),ae(me,ge),ae(me,fe),ae(me,Ue),ae(Z,k),ae(Z,se),lt(xe,ie,ht),lt(xe,le,ht),lt(xe,nt,ht),lt(xe,it,ht),lt(xe,$e,ht),lt(xe,wt,ht),lt(xe,Jn,ht),lt(xe,Tt,ht),ae(Tt,In),ae(In,at),ae(at,hn),ae(at,jt),ae(at,mn),ae(at,yn),ae(at,xn),ae(at,wn),ae(at,x),ae(at,L),ae(at,G),ae(at,C),ae(Tt,H),ae(H,oe),ae(oe,ye),ae(oe,Ee),ae(oe,Te),ae(oe,Ie),ae(oe,Se),ae(oe,ze),ae(oe,tt),ae(oe,ot),ae(oe,_t),ae(oe,Rt),lt(xe,st,ht),lt(xe,Ne,ht),ae(Ne,fn),i[20](fn),lt(xe,rt,ht),lt(xe,St,ht),ae(St,pn),ae(St,Qn),ae(St,dt),ae(dt,Ct),i[21](Ct),ae(dt,kt),ae(dt,Qt),lt(xe,$n,ht),lt(xe,Mn,ht),lt(xe,xo,ht),lt(xe,Fn,ht),wo=!0,ca||(_s=$l(F,"input",i[19]),ca=!0)},p(xe,[ht]){ht&512&&xe[9]!==F.innerHTML&&(F.innerHTML=xe[9])},i(xe){wo||(pa(he.$$.fragment,xe),pa(qe.$$.fragment,xe),pa(ve.$$.fragment,xe),wo=!0)},o(xe){ga(he.$$.fragment,xe),ga(qe.$$.fragment,xe),ga(ve.$$.fragment,xe),wo=!1},d(xe){xe&&(re(e),re(t),re(w),re(K),re(ie),re(le),re(nt),re(it),re($e),re(wt),re(Jn),re(Tt),re(st),re(Ne),re(rt),re(St),re($n),re(Mn),re(xo),re(Fn)),i[11](null),i[12](null),i[13](null),i[14](null),i[15](null),i[16](null),i[17](null),i[18](null),va(he),va(qe),va(ve),i[20](null),i[21](null),ca=!1,_s()}}}function $p(i,e,t){let n,o,a,r,s,l,c,d,h,u,p,g=0;function _(){g--,console.log(g),g==1?(console.log("Fading out in 1s"),p.classList.remove("recoil-huge-peer-highlight-in"),p.classList.add("recoil-huge-peer-highlight-out")):g<=0&&(console.log("Fading in in 1s"),f(),p.classList.add("recoil-huge-peer-highlight-in"),p.classList.remove("recoil-huge-peer-highlight-out"),g=3),console.log(p)}function f(){var j=Math.floor(Math.random()*cl.length);t(9,u=cl[j]),j=j%160,rl.updateHighlightIndex(j)}Jl(()=>{rl.createScene(n),Vn(o,["Mastodon","Peertube","Postfix","Web Hosting","Pixelfed","Matrix"],2e3,"text-red-600"),Vn(a,["Anil Madhavapeddy"],1e4,"text-red-600"),Vn(r,["R"],1e4,"text-red-600"),Vn(s,["E"],12e3,"text-red-600"),Vn(l,["C"],1e4,"text-red-600"),Vn(c,["O"],12e3,"text-red-600"),Vn(d,["I"],1e4,"text-red-600"),Vn(h,["L"],12e3,"text-red-600"),setInterval(_,4e3)});function m(j){vn[j?"unshift":"push"](()=>{n=j,t(0,n)})}function S(j){vn[j?"unshift":"push"](()=>{r=j,t(3,r)})}function b(j){vn[j?"unshift":"push"](()=>{s=j,t(4,s)})}function T(j){vn[j?"unshift":"push"](()=>{l=j,t(5,l)})}function E(j){vn[j?"unshift":"push"](()=>{c=j,t(6,c)})}function R(j){vn[j?"unshift":"push"](()=>{d=j,t(7,d)})}function A(j){vn[j?"unshift":"push"](()=>{h=j,t(8,h)})}function F(j){vn[j?"unshift":"push"](()=>{p=j,t(10,p)})}function y(){u=this.innerHTML,t(9,u)}function w(j){vn[j?"unshift":"push"](()=>{o=j,t(1,o)})}function K(j){vn[j?"unshift":"push"](()=>{a=j,t(2,a)})}return[n,o,a,r,s,l,c,d,h,u,p,m,S,b,T,E,R,A,F,y,w,K]}class ig extends ul{constructor(e){super(),hl(this,e,$p,Qp,dl,{})}}export{ig as component,ng as universal};
