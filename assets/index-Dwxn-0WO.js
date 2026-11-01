(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xc="170",df=0,ol=1,pf=2,mf=0,Qu=1,gf=2,Vn=3,Qt=0,Dt=1,cn=2,hi=0,ls=1,al=2,cl=3,ll=4,_f=5,Ii=100,xf=101,yf=102,vf=103,Mf=104,Sf=200,Ef=201,bf=202,Tf=203,Ma=204,Sa=205,Af=206,wf=207,Rf=208,Cf=209,Lf=210,Pf=211,If=212,Df=213,Uf=214,Ea=0,ba=1,Ta=2,ps=3,Aa=4,wa=5,Ra=6,Ca=7,yc=0,Nf=1,Ff=2,fi=0,Of=1,Bf=2,kf=3,zf=4,Hf=5,Gf=6,Vf=7,ul="attached",Wf="detached",eh=300,ms=301,gs=302,La=303,Pa=304,_o=306,ki=1e3,ci=1001,lo=1002,bt=1003,th=1004,js=1005,Kt=1006,eo=1007,Xn=1008,jn=1009,nh=1010,ih=1011,ar=1012,vc=1013,zi=1014,vn=1015,ws=1016,Mc=1017,Sc=1018,_s=1020,sh=35902,rh=1021,oh=1022,en=1023,ah=1024,ch=1025,us=1026,xs=1027,Ec=1028,bc=1029,lh=1030,Tc=1031,Ac=1033,to=33776,no=33777,io=33778,so=33779,Ia=35840,Da=35841,Ua=35842,Na=35843,Fa=36196,Oa=37492,Ba=37496,ka=37808,za=37809,Ha=37810,Ga=37811,Va=37812,Wa=37813,Xa=37814,Ya=37815,qa=37816,ja=37817,Ka=37818,$a=37819,Za=37820,Ja=37821,ro=36492,Qa=36494,ec=36495,uh=36283,tc=36284,nc=36285,ic=36286,cr=2300,lr=2301,wo=2302,hl=2400,fl=2401,dl=2402,Xf=2500,Yf=0,hh=1,sc=2,qf=3200,jf=3201,xo=0,Kf=1,oi="",Ct="srgb",Yt="srgb-linear",yo="linear",ot="srgb",Wi=7680,pl=519,$f=512,Zf=513,Jf=514,fh=515,Qf=516,ed=517,td=518,nd=519,rc=35044,ml="300 es",Yn=2e3,uo=2001;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gl=1234567;const Js=Math.PI/180,ys=180/Math.PI;function Mn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function wc(i,e){return(i%e+e)%e}function id(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sd(i,e,t){return i!==e?(t-i)/(e-i):0}function Qs(i,e,t){return(1-t)*i+t*e}function rd(i,e,t,n){return Qs(i,e,1-Math.exp(-t*n))}function od(i,e=1){return e-Math.abs(wc(i,e*2)-e)}function ad(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ld(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ud(i,e){return i+Math.random()*(e-i)}function hd(i){return i*(.5-Math.random())}function fd(i){i!==void 0&&(gl=i);let e=gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dd(i){return i*Js}function pd(i){return i*ys}function md(i){return(i&i-1)===0&&i!==0}function gd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xd(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const dh={DEG2RAD:Js,RAD2DEG:ys,generateUUID:Mn,clamp:Bt,euclideanModulo:wc,mapLinear:id,inverseLerp:sd,lerp:Qs,damp:rd,pingpong:od,smoothstep:ad,smootherstep:cd,randInt:ld,randFloat:ud,randFloatSpread:hd,seededRandom:fd,degToRad:dd,radToDeg:pd,isPowerOfTwo:md,ceilPowerOfTwo:gd,floorPowerOfTwo:_d,setQuaternionFromProperEuler:xd,normalize:it,denormalize:xn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,s,r,o,a,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],S=s[1],E=s[4],v=s[7],b=s[2],T=s[5],M=s[8];return r[0]=o*_+a*S+c*b,r[3]=o*m+a*E+c*T,r[6]=o*d+a*v+c*M,r[1]=l*_+u*S+h*b,r[4]=l*m+u*E+h*T,r[7]=l*d+u*v+h*M,r[2]=f*_+p*S+g*b,r[5]=f*m+p*E+g*T,r[8]=f*d+p*v+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new ze;function ph(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yd(){const i=ur("canvas");return i.style.display="block",i}const _l={};function Ks(i){i in _l||(_l[i]=!0,console.warn(i))}function vd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Md(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xe={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const xl=[.64,.33,.3,.6,.15,.06],yl=[.2126,.7152,.0722],vl=[.3127,.329],Ml=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Yt]:{primaries:xl,whitePoint:vl,transfer:yo,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:yl,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:xl,whitePoint:vl,transfer:ot,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:yl,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});let Xi;class Ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=ur("canvas")),Xi.width=e.width,Xi.height=e.height;const n=Xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bd=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Co(s[o].image)):r.push(Co(s[o]))}else r=Co(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ed.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Td=0;class Tt extends Rs{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=ci,s=ci,r=Kt,o=Xn,a=en,c=jn,l=Tt.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Mn(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=eh;Tt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,s=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,v=(p+1)/2,b=(d+1)/2,T=(u+f)/4,M=(h+_)/4,A=(g+m)/4;return E>v&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=M/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=A/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=M/r,s=A/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ad extends Rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Tt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Ad{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gh extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==p||u!==g){let m=1-a;const d=c*f+l*p+u*g+h*_,S=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const b=Math.sqrt(E),T=Math.atan2(b,d*S);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const v=a*S;if(c=c*m+f*v,l=l*m+p*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-a*p,e[t+2]=l*g+u*p+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new O,El=new Sn;class hn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),vr.subVectors(this.max,Ns),Yi.subVectors(e.a,Ns),qi.subVectors(e.b,Ns),ji.subVectors(e.c,Ns),Jn.subVectors(qi,Yi),Qn.subVectors(ji,qi),xi.subVectors(Yi,ji);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-xi.z,xi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,xi.z,0,-xi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-xi.y,xi.x,0];return!Po(t,Yi,qi,ji,vr)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,Yi,qi,ji,vr))?!1:(Mr.crossVectors(Jn,Qn),t=[Mr.x,Mr.y,Mr.z],Po(t,Yi,qi,ji,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new O,new O,new O,new O,new O,new O,new O,new O],pn=new O,yr=new hn,Yi=new O,qi=new O,ji=new O,Jn=new O,Qn=new O,xi=new O,Ns=new O,vr=new O,Mr=new O,yi=new O;function Po(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){yi.fromArray(i,r);const a=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),c=e.dot(yi),l=t.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Rd=new hn,Fs=new O,Io=new O;class Pn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Io)),this.expandByPoint(Fs.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new O,Do=new O,Sr=new O,ei=new O,Uo=new O,Er=new O,No=new O;class vo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Do.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Do);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Sr),a=ei.dot(this.direction),c=-ei.dot(Sr),l=ei.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Do).addScaledVector(Sr,f),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){Uo.subVectors(t,e),Er.subVectors(n,e),No.crossVectors(Uo,Er);let o=this.direction.dot(No),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const c=a*this.direction.dot(Er.crossVectors(ei,Er));if(c<0)return null;const l=a*this.direction.dot(Uo.cross(ei));if(l<0||c+l>o)return null;const u=-a*ei.dot(No);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,s,r,o,a,c,l,u,h,f,p,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,f,p,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,g=l*u,_=l*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,g=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Ld)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ti.crossVectors(n,Zt),ti.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ti.crossVectors(n,Zt)),ti.normalize(),br.crossVectors(Zt,ti),s[0]=ti.x,s[4]=br.x,s[8]=Zt.x,s[1]=ti.y,s[5]=br.y,s[9]=Zt.y,s[2]=ti.z,s[6]=br.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],S=n[3],E=n[7],v=n[11],b=n[15],T=s[0],M=s[4],A=s[8],x=s[12],y=s[1],L=s[5],N=s[9],B=s[13],U=s[2],D=s[6],P=s[10],Y=s[14],F=s[3],Z=s[7],X=s[11],Q=s[15];return r[0]=o*T+a*y+c*U+l*F,r[4]=o*M+a*L+c*D+l*Z,r[8]=o*A+a*N+c*P+l*X,r[12]=o*x+a*B+c*Y+l*Q,r[1]=u*T+h*y+f*U+p*F,r[5]=u*M+h*L+f*D+p*Z,r[9]=u*A+h*N+f*P+p*X,r[13]=u*x+h*B+f*Y+p*Q,r[2]=g*T+_*y+m*U+d*F,r[6]=g*M+_*L+m*D+d*Z,r[10]=g*A+_*N+m*P+d*X,r[14]=g*x+_*B+m*Y+d*Q,r[3]=S*T+E*y+v*U+b*F,r[7]=S*M+E*L+v*D+b*Z,r[11]=S*A+E*N+v*P+b*X,r[15]=S*x+E*B+v*Y+b*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+d*(-s*a*u-t*c*h+t*a*f+s*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],S=h*m*l-_*f*l+_*c*p-a*m*p-h*c*d+a*f*d,E=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,v=u*_*l-g*h*l+g*a*p-o*_*p-u*a*d+o*h*d,b=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,T=t*S+n*E+s*v+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=S*M,e[1]=(_*f*r-h*m*r-_*s*p+n*m*p+h*s*d-n*f*d)*M,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*M,e[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*p-n*c*p)*M,e[4]=E*M,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*M,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*d-t*c*d)*M,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*p+t*c*p)*M,e[8]=v*M,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*d-t*h*d)*M,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*d+t*a*d)*M,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*M,e[12]=b*M,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*M,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*M,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*f+t*a*f)*M,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,S=c*l,E=c*u,v=c*h,b=n.x,T=n.y,M=n.z;return s[0]=(1-(_+d))*b,s[1]=(p+v)*b,s[2]=(g-E)*b,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(f+d))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+E)*M,s[9]=(m-S)*M,s[10]=(1-(f+_))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);const l=1/r,u=1/o,h=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Yn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,g;if(a===Yn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===uo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Yn){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*l,p=(n+s)*u;let g,_;if(a===Yn)g=(o+r)*h,_=-2*h;else if(a===uo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new O,mn=new Fe,Cd=new O(0,0,0),Ld=new O(1,1,1),ti=new O,br=new O,Zt=new O,bl=new Fe,Tl=new Sn;class un{constructor(e=0,t=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pd=0;const Al=new O,$i=new Sn,Bn=new Fe,Tr=new O,Os=new O,Id=new O,Dd=new Sn,wl=new O(1,0,0),Rl=new O(0,1,0),Cl=new O(0,0,1),Ll={type:"added"},Ud={type:"removed"},Zi={type:"childadded",child:null},Fo={type:"childremoved",child:null};class mt extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new O,t=new un,n=new Sn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ze}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(wl,e)}rotateY(e){return this.rotateOnAxis(Rl,e)}rotateZ(e){return this.rotateOnAxis(Cl,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wl,e)}translateY(e){return this.translateOnAxis(Rl,e)}translateZ(e){return this.translateOnAxis(Cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Os,Tr,this.up):Bn.lookAt(Tr,Os,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Bn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ll),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ud),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ll),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,Id),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DEFAULT_UP=new O(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new O,kn=new O,Oo=new O,zn=new O,Ji=new O,Qi=new O,Pl=new O,Bo=new O,ko=new O,zo=new O,Ho=new Je,Go=new Je,Vo=new Je;class yn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gn.subVectors(s,t),kn.subVectors(n,t),Oo.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(kn),c=gn.dot(Oo),l=kn.dot(kn),u=kn.dot(Oo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ho.setScalar(0),Go.setScalar(0),Vo.setScalar(0),Ho.fromBufferAttribute(e,t),Go.fromBufferAttribute(e,n),Vo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ho,r.x),o.addScaledVector(Go,r.y),o.addScaledVector(Vo,r.z),o}static isFrontFacing(e,t,n,s){return gn.subVectors(n,t),kn.subVectors(e,t),gn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,n),Qi.subVectors(r,n),Bo.subVectors(e,n);const c=Ji.dot(Bo),l=Qi.dot(Bo);if(c<=0&&l<=0)return t.copy(n);ko.subVectors(e,s);const u=Ji.dot(ko),h=Qi.dot(ko);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ji,o);zo.subVectors(e,r);const p=Ji.dot(zo),g=Qi.dot(zo);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Qi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Pl.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Pl,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=wc(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Wo(o,r,e+1/3),this.g=Wo(o,r,e),this.b=Wo(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Xe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Bt(Ft.r*255,0,255))*65536+Math.round(Bt(Ft.g*255,0,255))*256+Math.round(Bt(Ft.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Ct){Xe.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,s=Ft.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Ar);const n=Qs(ni.h,Ar.h,t),s=Qs(ni.s,Ar.s,t),r=Qs(ni.l,Ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Te;Te.NAMES=xh;let Nd=0;class ln extends Rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Mn(),this.name="",this.blending=ls,this.side=Qt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==Qt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lt extends ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new O,wr=new Oe;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}}class yh extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vh extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fd=0;const sn=new Fe,Xo=new mt,es=new O,Jt=new hn,Bs=new hn,Rt=new O;class Ht extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ph(e)?vh:yh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Jt.min,Bs.min),Jt.expandByPoint(Rt),Rt.addVectors(Jt.max,Bs.max),Jt.expandByPoint(Rt)):(Jt.expandByPoint(Bs.min),Jt.expandByPoint(Bs.max))}Jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Rt.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(e,l),Rt.add(es)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new O,c[A]=new O;const l=new O,u=new O,h=new O,f=new Oe,p=new Oe,g=new Oe,_=new O,m=new O;function d(A,x,y){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[A].add(_),a[x].add(_),a[y].add(_),c[A].add(m),c[x].add(m),c[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let A=0,x=S.length;A<x;++A){const y=S[A],L=y.start,N=y.count;for(let B=L,U=L+N;B<U;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new O,v=new O,b=new O,T=new O;function M(A){b.fromBufferAttribute(s,A),T.copy(b);const x=a[A];E.copy(x),E.sub(b.multiplyScalar(b.dot(x))).normalize(),v.crossVectors(T,x);const L=v.dot(c[A])<0?-1:1;o.setXYZW(A,E.x,E.y,E.z,L)}for(let A=0,x=S.length;A<x;++A){const y=S[A],L=y.start,N=y.count;for(let B=L,U=L+N;B<U;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new zt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Il=new Fe,vi=new vo,Rr=new Pn,Dl=new O,Cr=new O,Lr=new O,Pr=new O,Yo=new O,Ir=new O,Ul=new O,Dr=new O;class Ke extends mt{constructor(e=new Ht,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Yo.fromBufferAttribute(h,e),o?Ir.addScaledVector(Yo,u):Ir.addScaledVector(Yo.sub(t),u))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(Rr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Rr,Dl)===null||vi.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Il.copy(r).invert(),vi.copy(e.ray).applyMatrix4(Il),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,b=E;v<b;v+=3){const T=a.getX(v),M=a.getX(v+1),A=a.getX(v+2);s=Ur(this,d,e,n,l,u,h,T,M,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);s=Ur(this,o,e,n,l,u,h,S,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,b=E;v<b;v+=3){const T=v,M=v+1,A=v+2;s=Ur(this,d,e,n,l,u,h,T,M,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=m,E=m+1,v=m+2;s=Ur(this,o,e,n,l,u,h,S,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Od(i,e,t,n,s,r,o,a){let c;if(e.side===Dt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Qt,a),c===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Dr);return l<t.near||l>t.far?null:{distance:l,point:Dr.clone(),object:i}}function Ur(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Cr),i.getVertexPosition(c,Lr),i.getVertexPosition(l,Pr);const u=Od(i,e,t,n,Cr,Lr,Pr,Ul);if(u){const h=new O;yn.getBarycoord(Ul,Cr,Lr,Pr,h),s&&(u.uv=yn.getInterpolatedAttribute(s,a,c,l,h,new Oe)),r&&(u.uv1=yn.getInterpolatedAttribute(r,a,c,l,h,new Oe)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new O,materialIndex:0};yn.getNormal(Cr,Lr,Pr,f.normal),u.face=f,u.barycoord=h}return u}class tn extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(h,2));function g(_,m,d,S,E,v,b,T,M,A,x){const y=v/M,L=b/A,N=v/2,B=b/2,U=T/2,D=M+1,P=A+1;let Y=0,F=0;const Z=new O;for(let X=0;X<P;X++){const Q=X*L-B;for(let oe=0;oe<D;oe++){const Re=oe*y-N;Z[_]=Re*S,Z[m]=Q*E,Z[d]=U,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[d]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(oe/M),h.push(1-X/A),Y+=1}}for(let X=0;X<A;X++)for(let Q=0;Q<M;Q++){const oe=f+Q+D*X,Re=f+Q+D*(X+1),q=f+(Q+1)+D*(X+1),ee=f+(Q+1)+D*X;c.push(oe,Re,ee),c.push(Re,q,ee),F+=6}a.addGroup(p,F,x),p+=F,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=vs(i[t]);for(const s in n)e[s]=n[s]}return e}function Bd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const kd={clone:vs,merge:Vt};var zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=Bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sh extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new O,Nl=new Oe,Fl=new Oe;class jt extends Sh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Fl),t.subVectors(Fl,Nl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class Gd extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(ts,ns,e,t);s.layers=this.layers,this.add(s);const r=new jt(ts,ns,e,t);r.layers=this.layers,this.add(r);const o=new jt(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new jt(ts,ns,e,t);a.layers=this.layers,this.add(a);const c=new jt(ts,ns,e,t);c.layers=this.layers,this.add(c);const l=new jt(ts,ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eh extends Tt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vd extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Eh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:hi});r.uniforms.tEquirect.value=t;const o=new Ke(s,r),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Kt),new Gd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const qo=new O,Wd=new O,Xd=new ze;class Li{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=qo.subVectors(n,t).cross(Wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xd.getNormalMatrix(e),s=this.coplanarPoint(qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Pn,Nr=new O;class Rc{constructor(e=new Li,t=new Li,n=new Li,s=new Li,r=new Li,o=new Li){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],S=s[13],E=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-p,v-d).normalize(),n[1].setComponents(c+r,f+l,m+p,v+d).normalize(),n[2].setComponents(c+o,f+u,m+g,v+S).normalize(),n[3].setComponents(c-o,f-u,m-g,v-S).normalize(),n[4].setComponents(c-a,f-h,m-_,v-E).normalize(),t===Yn)n[5].setComponents(c+a,f+h,m+_,v+E).normalize();else if(t===uo)n[5].setComponents(a,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Nr.x=s.normal.x>0?e.max.x:e.min.x,Nr.y=s.normal.y>0?e.max.y:e.min.y,Nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Yd(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class di extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const S=d*f-o;for(let E=0;E<l;E++){const v=E*h-r;g.push(v,-S,0),_.push(0,0,1),m.push(E/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<a;S++){const E=S+l*d,v=S+l*(d+1),b=S+1+l*(d+1),T=S+1+l*d;p.push(E,v,T),p.push(v,b,T)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.widthSegments,e.heightSegments)}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gp=`#define PI 3.141592653589793
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
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
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
#endif`,Xp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e0=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,c0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,u0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,f0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,p0=`#define PHONG
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
}`,m0=`#define PHONG
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
}`,g0=`#define STANDARD
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
}`,_0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,y0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,T0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:qd,alphahash_pars_fragment:jd,alphamap_fragment:Kd,alphamap_pars_fragment:$d,alphatest_fragment:Zd,alphatest_pars_fragment:Jd,aomap_fragment:Qd,aomap_pars_fragment:ep,batching_pars_vertex:tp,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:sp,bsdfs:rp,iridescence_fragment:op,bumpmap_pars_fragment:ap,clipping_planes_fragment:cp,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:up,clipping_planes_vertex:hp,color_fragment:fp,color_pars_fragment:dp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:xp,displacementmap_pars_vertex:yp,displacementmap_vertex:vp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:Ep,colorspace_pars_fragment:bp,envmap_fragment:Tp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:wp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:kp,envmap_vertex:Cp,fog_vertex:Lp,fog_pars_vertex:Pp,fog_fragment:Ip,fog_pars_fragment:Dp,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Np,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:Op,lights_pars_begin:Bp,lights_toon_fragment:zp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Xp,lights_fragment_begin:Yp,lights_fragment_maps:qp,lights_fragment_end:jp,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Jp,map_fragment:Qp,map_pars_fragment:em,map_particle_fragment:tm,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:cm,morphtarget_vertex:lm,normal_fragment_begin:um,normal_fragment_maps:hm,normal_pars_fragment:fm,normal_pars_vertex:dm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:xm,iridescence_pars_fragment:ym,opaque_fragment:vm,packing:Mm,premultiplied_alpha_fragment:Sm,project_vertex:Em,dithering_fragment:bm,dithering_pars_fragment:Tm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Pm,skinbase_vertex:Im,skinning_pars_vertex:Dm,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Fm,specularmap_pars_fragment:Om,tonemapping_fragment:Bm,tonemapping_pars_fragment:km,transmission_fragment:zm,transmission_pars_fragment:Hm,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:Ym,background_frag:qm,backgroundCube_vert:jm,backgroundCube_frag:Km,cube_vert:$m,cube_frag:Zm,depth_vert:Jm,depth_frag:Qm,distanceRGBA_vert:e0,distanceRGBA_frag:t0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:o0,meshbasic_frag:a0,meshlambert_vert:c0,meshlambert_frag:l0,meshmatcap_vert:u0,meshmatcap_frag:h0,meshnormal_vert:f0,meshnormal_frag:d0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:_0,meshtoon_vert:x0,meshtoon_frag:y0,points_vert:v0,points_frag:M0,shadow_vert:S0,shadow_frag:E0,sprite_vert:b0,sprite_frag:T0},fe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},wn={basic:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Vt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Vt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Vt([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Vt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Vt([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Vt([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Vt([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Vt([fe.lights,fe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};wn.physical={uniforms:Vt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Fr={r:0,b:0,g:0},Si=new un,A0=new Fe;function w0(i,e,t,n,s,r,o){const a=new Te(0);let c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function _(S){let E=!1;const v=g(S);v===null?d(a,c):v&&v.isColor&&(d(v,1),E=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===_o)?(u===void 0&&(u=new Ke(new tn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:vs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Si.copy(E.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(Si)),u.material.toneMapped=Xe.getTransfer(v.colorSpace)!==ot,(h!==v||f!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ke(new di(2,2),new Kn({name:"BackgroundMaterial",uniforms:vs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,E){S.getRGB(Fr,Mh(i)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),c=E,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,d(a,c)},render:_,addToRenderList:m}}function R0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,L,N,B,U){let D=!1;const P=h(B,N,L);r!==P&&(r=P,l(r.object)),D=p(y,B,N,U),D&&g(y,B,N,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(y,L,N,B),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,L,N){const B=N.wireframe===!0;let U=n[y.id];U===void 0&&(U={},n[y.id]=U);let D=U[L.id];D===void 0&&(D={},U[L.id]=D);let P=D[B];return P===void 0&&(P=f(c()),D[B]=P),P}function f(y){const L=[],N=[],B=[];for(let U=0;U<t;U++)L[U]=0,N[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,L,N,B){const U=r.attributes,D=L.attributes;let P=0;const Y=N.getAttributes();for(const F in Y)if(Y[F].location>=0){const X=U[F];let Q=D[F];if(Q===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),X===void 0||X.attribute!==Q||Q&&X.data!==Q.data)return!0;P++}return r.attributesNum!==P||r.index!==B}function g(y,L,N,B){const U={},D=L.attributes;let P=0;const Y=N.getAttributes();for(const F in Y)if(Y[F].location>=0){let X=D[F];X===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(X=y.instanceColor));const Q={};Q.attribute=X,X&&X.data&&(Q.data=X.data),U[F]=Q,P++}r.attributes=U,r.attributesNum=P,r.index=B}function _(){const y=r.newAttributes;for(let L=0,N=y.length;L<N;L++)y[L]=0}function m(y){d(y,0)}function d(y,L){const N=r.newAttributes,B=r.enabledAttributes,U=r.attributeDivisors;N[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),U[y]!==L&&(i.vertexAttribDivisor(y,L),U[y]=L)}function S(){const y=r.newAttributes,L=r.enabledAttributes;for(let N=0,B=L.length;N<B;N++)L[N]!==y[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function E(y,L,N,B,U,D,P){P===!0?i.vertexAttribIPointer(y,L,N,U,D):i.vertexAttribPointer(y,L,N,B,U,D)}function v(y,L,N,B){_();const U=B.attributes,D=N.getAttributes(),P=L.defaultAttributeValues;for(const Y in D){const F=D[Y];if(F.location>=0){let Z=U[Y];if(Z===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const X=Z.normalized,Q=Z.itemSize,oe=e.get(Z);if(oe===void 0)continue;const Re=oe.buffer,q=oe.type,ee=oe.bytesPerElement,C=q===i.INT||q===i.UNSIGNED_INT||Z.gpuType===vc;if(Z.isInterleavedBufferAttribute){const H=Z.data,$=H.stride,re=Z.offset;if(H.isInstancedInterleavedBuffer){for(let le=0;le<F.locationSize;le++)d(F.location+le,H.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let le=0;le<F.locationSize;le++)m(F.location+le);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let le=0;le<F.locationSize;le++)E(F.location+le,Q/F.locationSize,q,X,$*ee,(re+Q/F.locationSize*le)*ee,C)}else{if(Z.isInstancedBufferAttribute){for(let H=0;H<F.locationSize;H++)d(F.location+H,Z.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let H=0;H<F.locationSize;H++)m(F.location+H);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let H=0;H<F.locationSize;H++)E(F.location+H,Q/F.locationSize,q,X,Q*ee,Q/F.locationSize*H*ee,C)}}else if(P!==void 0){const X=P[Y];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(F.location,X);break;case 3:i.vertexAttrib3fv(F.location,X);break;case 4:i.vertexAttrib4fv(F.location,X);break;default:i.vertexAttrib1fv(F.location,X)}}}}S()}function b(){A();for(const y in n){const L=n[y];for(const N in L){const B=L[N];for(const U in B)u(B[U].object),delete B[U];delete L[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const N in L){const B=L[N];for(const U in B)u(B[U].object),delete B[U];delete L[N]}delete n[y.id]}function M(y){for(const L in n){const N=n[L];if(N[y.id]===void 0)continue;const B=N[y.id];for(const U in B)u(B[U].object),delete B[U];delete N[y.id]}}function A(){x(),o=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function C0(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function L0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==en&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const A=M===ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==jn&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==vn&&!A)}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:b,maxSamples:T}}function P0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Li,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:n,E=S*4;let v=d.clippingState||null;c.value=v,v=u(g,f,E,p);for(let b=0;b!==E;++b)v[b]=t[b];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,v=p;E!==_;++E,v+=4)o.copy(h[E]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function I0(i){let e=new WeakMap;function t(o,a){return a===La?o.mapping=ms:a===Pa&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===La||a===Pa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Vd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class hr extends Sh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,Ol=[.125,.215,.35,.446,.526,.582],Di=20,jo=new hr,Bl=new Te;let Ko=null,$o=0,Zo=0,Jo=!1;const Pi=(1+Math.sqrt(5))/2,is=1/Pi,kl=[new O(-Pi,is,0),new O(Pi,is,0),new O(-is,0,Pi),new O(is,0,Pi),new O(0,Pi,-is),new O(0,Pi,is),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ko=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,$o,Zo),this._renderer.xr.enabled=Jo,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:ws,format:en,colorSpace:Yt,depthBuffer:!1},s=Hl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(r)),this._blurMaterial=U0(r,e,t)}return s}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,n,s){const a=new jt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Bl),u.toneMapping=fi,u.autoClear=!1;const p=new Lt({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new Ke(new tn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Bl),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):S===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const E=this._cubeSize;Or(s,S*E,d>2?E:0,E,E),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ms||e.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Or(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,jo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kl[(s-r-1)%kl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ke(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Di-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const d=[];let S=0;for(let M=0;M<Di;++M){const A=M/_,x=Math.exp(-A*A/2);d.push(x),M===0?S+=x:M<m&&(S+=2*x)}for(let M=0;M<d.length;M++)d[M]=d[M]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const v=this._sizeLods[s],b=3*v*(s>E-os?s-E+os:0),T=4*(this._cubeSize-v);Or(t,b,T,3*v,2*v),c.setRenderTarget(t),c.render(h,jo)}}function D0(i){const e=[],t=[],n=[];let s=i;const r=i-os+1+Ol.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-os?c=Ol[o-i+os-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*p),E=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let T=0;T<p;T++){const M=T%3*2/3-1,A=T>2?0:-1,x=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];S.set(x,_*g*T),E.set(f,m*g*T);const y=[T,T,T,T,T,T];v.set(y,d*g*T)}const b=new Ht;b.setAttribute("position",new zt(S,_)),b.setAttribute("uv",new zt(E,m)),b.setAttribute("faceIndex",new zt(v,d)),e.push(b),s>os&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hl(i,e,t){const n=new gi(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function U0(i,e,t){const n=new Float32Array(Di),s=new O(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Gl(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Vl(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function N0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===La||c===Pa,u=c===ms||c===gs;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new zl(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new zl(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function F0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function O0(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let E=0,v=S.length;E<v;E+=3){const b=S[E+0],T=S[E+1],M=S[E+2];f.push(b,T,T,M,M,b)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const b=E+0,T=E+1,M=E+2;f.push(b,T,T,M,M,b)}}else return;const m=new(ph(f)?vh:yh)(f,1);m.version=_;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function B0(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*_[S];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function k0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,e,t){const n=new WeakMap,s=new Je;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=a.attributes.position.count*E,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*b*4*h),M=new gh(T,v,b,h);M.type=vn,M.needsUpdate=!0;const A=E*4;for(let y=0;y<h;y++){const L=m[y],N=d[y],B=S[y],U=v*b*4*y;for(let D=0;D<L.count;D++){const P=D*A;p===!0&&(s.fromBufferAttribute(L,D),T[U+P+0]=s.x,T[U+P+1]=s.y,T[U+P+2]=s.z,T[U+P+3]=0),g===!0&&(s.fromBufferAttribute(N,D),T[U+P+4]=s.x,T[U+P+5]=s.y,T[U+P+6]=s.z,T[U+P+7]=0),_===!0&&(s.fromBufferAttribute(B,D),T[U+P+8]=s.x,T[U+P+9]=s.y,T[U+P+10]=s.z,T[U+P+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:M,size:new Oe(v,b)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function H0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Th extends Tt{constructor(e,t,n,s,r,o,a,c,l,u=us){if(u!==us&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===us&&(n=zi),n===void 0&&u===xs&&(n=_s),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=c!==void 0?c:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ah=new Tt,Wl=new Th(1,1),wh=new gh,Rh=new wd,Ch=new Eh,Xl=[],Yl=[],ql=new Float32Array(16),jl=new Float32Array(9),Kl=new Float32Array(4);function Cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mo(i,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function G0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Y0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Kl.set(n),i.uniformMatrix2fv(this.addr,!1,Kl),wt(t,n)}}function q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;jl.set(n),i.uniformMatrix3fv(this.addr,!1,jl),wt(t,n)}}function j0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;ql.set(n),i.uniformMatrix4fv(this.addr,!1,ql),wt(t,n)}}function K0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wl.compareFunction=fh,r=Wl):r=Ah,t.setTexture2D(e||r,s)}function sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rh,s)}function rg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ch,s)}function og(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wh,s)}function ag(i){switch(i){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return Y0;case 35675:return q0;case 35676:return j0;case 5124:case 35670:return K0;case 35667:case 35671:return $0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}function cg(i,e){i.uniform1fv(this.addr,e)}function lg(i,e){const t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function ug(i,e){const t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function hg(i,e){const t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function fg(i,e){const t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dg(i,e){const t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pg(i,e){const t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mg(i,e){i.uniform1iv(this.addr,e)}function gg(i,e){i.uniform2iv(this.addr,e)}function _g(i,e){i.uniform3iv(this.addr,e)}function xg(i,e){i.uniform4iv(this.addr,e)}function yg(i,e){i.uniform1uiv(this.addr,e)}function vg(i,e){i.uniform2uiv(this.addr,e)}function Mg(i,e){i.uniform3uiv(this.addr,e)}function Sg(i,e){i.uniform4uiv(this.addr,e)}function Eg(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ah,r[o])}function bg(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rh,r[o])}function Tg(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ch,r[o])}function Ag(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||wh,r[o])}function wg(i){switch(i){case 5126:return cg;case 35664:return lg;case 35665:return ug;case 35666:return hg;case 35674:return fg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return yg;case 36294:return vg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}class Rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ag(t.type)}}class Cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wg(t.type)}}class Lg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function $l(i,e){i.seq.push(e),i.map[e.id]=e}function Pg(i,e,t){const n=i.name,s=n.length;for(Qo.lastIndex=0;;){const r=Qo.exec(n),o=Qo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$l(t,l===void 0?new Rg(a,i,e):new Cg(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Lg(a),$l(t,h)),t=h}}}class oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Pg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Zl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ig=37297;let Dg=0;function Ug(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Jl=new ze;function Ng(i){Xe._getMatrix(Jl,Xe.workingColorSpace,i);const e=`mat3( ${Jl.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case yo:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ql(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ug(i.getShaderSource(e),o)}else return s}function Fg(i,e){const t=Ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Og(i,e){let t;switch(e){case Of:t="Linear";break;case Bf:t="Reinhard";break;case kf:t="Cineon";break;case zf:t="ACESFilmic";break;case Gf:t="AgX";break;case Vf:t="Neutral";break;case Hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new O;function Bg(){Xe.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function zg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $s(i){return i!==""}function eu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(i){return i.replace(Gg,Wg)}const Vg=new Map;function Wg(i,e){let t=Ge[e];if(t===void 0){const n=Vg.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oc(t)}const Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(i){return i.replace(Xg,Yg)}function Yg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function iu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function qg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function jg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function $g(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yc:e="ENVMAP_BLENDING_MULTIPLY";break;case Nf:e="ENVMAP_BLENDING_MIX";break;case Ff:e="ENVMAP_BLENDING_ADD";break}return e}function Zg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Jg(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=qg(t),l=jg(t),u=Kg(t),h=$g(t),f=Zg(t),p=kg(t),g=zg(r),_=s.createProgram();let m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),d.length>0&&(d+=`
`)):(m=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),d=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==fi?Og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Fg("linearToOutputTexel",t.outputColorSpace),Bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=oc(o),o=eu(o,t),o=tu(o,t),a=oc(a),a=eu(a,t),a=tu(a,t),o=nu(o),a=nu(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=S+m+o,v=S+d+a,b=Zl(s,s.VERTEX_SHADER,E),T=Zl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,b),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function M(L){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(b).trim(),U=s.getShaderInfoLog(T).trim();let D=!0,P=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,T);else{const Y=Ql(s,b,"vertex"),F=Ql(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+Y+`
`+F)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||U==="")&&(P=!1);P&&(L.diagnostics={runnable:D,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:U,prefix:d}})}s.deleteShader(b),s.deleteShader(T),A=new oo(s,_),x=Hg(s,_)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let x;this.getAttributes=function(){return x===void 0&&M(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Ig)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let Qg=0;class e_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new t_(e),t.set(e,n)),n}}class t_{constructor(e){this.id=Qg++,this.code=e,this.usedTimes=0}}function n_(i,e,t,n,s,r,o){const a=new _h,c=new e_,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,L,N,B){const U=N.fog,D=B.geometry,P=x.isMeshStandardMaterial?N.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||P),F=Y&&Y.mapping===_o?Y.image.height:null,Z=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const X=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=X!==void 0?X.length:0;let oe=0;D.morphAttributes.position!==void 0&&(oe=1),D.morphAttributes.normal!==void 0&&(oe=2),D.morphAttributes.color!==void 0&&(oe=3);let Re,q,ee,C;if(Z){const nt=wn[Z];Re=nt.vertexShader,q=nt.fragmentShader}else Re=x.vertexShader,q=x.fragmentShader,c.update(x),ee=c.getVertexShaderID(x),C=c.getFragmentShaderID(x);const H=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),re=B.isInstancedMesh===!0,le=B.isBatchedMesh===!0,ue=!!x.map,he=!!x.matcap,Ue=!!Y,k=!!x.aoMap,qe=!!x.lightMap,Le=!!x.bumpMap,Ce=!!x.normalMap,pe=!!x.displacementMap,tt=!!x.emissiveMap,Pe=!!x.metalnessMap,I=!!x.roughnessMap,w=x.anisotropy>0,W=x.clearcoat>0,ne=x.dispersion>0,se=x.iridescence>0,te=x.sheen>0,Ae=x.transmission>0,me=w&&!!x.anisotropyMap,ye=W&&!!x.clearcoatMap,je=W&&!!x.clearcoatNormalMap,ae=W&&!!x.clearcoatRoughnessMap,ve=se&&!!x.iridescenceMap,Ie=se&&!!x.iridescenceThicknessMap,De=te&&!!x.sheenColorMap,Me=te&&!!x.sheenRoughnessMap,Ye=!!x.specularMap,He=!!x.specularColorMap,ut=!!x.specularIntensityMap,z=Ae&&!!x.transmissionMap,de=Ae&&!!x.thicknessMap,J=!!x.gradientMap,ie=!!x.alphaMap,xe=x.alphaTest>0,ge=!!x.alphaHash,Be=!!x.extensions;let xt=fi;x.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(xt=i.toneMapping);const Ut={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Re,fragmentShader:q,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:C,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:le,batchingColor:le&&B._colorsTexture!==null,instancing:re,instancingColor:re&&B.instanceColor!==null,instancingMorph:re&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Yt,alphaToCoverage:!!x.alphaToCoverage,map:ue,matcap:he,envMap:Ue,envMapMode:Ue&&Y.mapping,envMapCubeUVHeight:F,aoMap:k,lightMap:qe,bumpMap:Le,normalMap:Ce,displacementMap:f&&pe,emissiveMap:tt,normalMapObjectSpace:Ce&&x.normalMapType===Kf,normalMapTangentSpace:Ce&&x.normalMapType===xo,metalnessMap:Pe,roughnessMap:I,anisotropy:w,anisotropyMap:me,clearcoat:W,clearcoatMap:ye,clearcoatNormalMap:je,clearcoatRoughnessMap:ae,dispersion:ne,iridescence:se,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:te,sheenColorMap:De,sheenRoughnessMap:Me,specularMap:Ye,specularColorMap:He,specularIntensityMap:ut,transmission:Ae,transmissionMap:z,thicknessMap:de,gradientMap:J,opaque:x.transparent===!1&&x.blending===ls&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:xe,alphaHash:ge,combine:x.combine,mapUv:ue&&_(x.map.channel),aoMapUv:k&&_(x.aoMap.channel),lightMapUv:qe&&_(x.lightMap.channel),bumpMapUv:Le&&_(x.bumpMap.channel),normalMapUv:Ce&&_(x.normalMap.channel),displacementMapUv:pe&&_(x.displacementMap.channel),emissiveMapUv:tt&&_(x.emissiveMap.channel),metalnessMapUv:Pe&&_(x.metalnessMap.channel),roughnessMapUv:I&&_(x.roughnessMap.channel),anisotropyMapUv:me&&_(x.anisotropyMap.channel),clearcoatMapUv:ye&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(x.sheenRoughnessMap.channel),specularMapUv:Ye&&_(x.specularMap.channel),specularColorMapUv:He&&_(x.specularColorMap.channel),specularIntensityMapUv:ut&&_(x.specularIntensityMap.channel),transmissionMapUv:z&&_(x.transmissionMap.channel),thicknessMapUv:de&&_(x.thicknessMap.channel),alphaMapUv:ie&&_(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ce||w),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!D.attributes.uv&&(ue||ie),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:$,skinning:B.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:ue&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:tt&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===Dt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Be&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&x.extensions.multiDraw===!0||le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function d(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)y.push(L),y.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(S(y,x),E(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const y=g[x.type];let L;if(y){const N=wn[y];L=kd.clone(N.uniforms)}else L=x.uniforms;return L}function b(x,y){let L;for(let N=0,B=u.length;N<B;N++){const U=u[N];if(U.cacheKey===y){L=U,++L.usedTimes;break}}return L===void 0&&(L=new Jg(i,y,x,r),u.push(L)),L}function T(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function M(x){c.remove(x)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:b,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:A}}function i_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function s_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ru(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||s_),n.length>1&&n.sort(f||su),s.length>1&&s.sort(f||su)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function r_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new ru,i.set(n,[o])):s>=r.length?(o=new ru,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function o_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Te};break;case"SpotLight":t={position:new O,direction:new O,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function a_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let c_=0;function l_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function u_(i){const e=new o_,t=a_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const s=new O,r=new Fe,o=new Fe;function a(l){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,S=0,E=0,v=0,b=0,T=0,M=0;l.sort(l_);for(let x=0,y=l.length;x<y;x++){const L=l[x],N=L.color,B=L.intensity,U=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*B,h+=N.g*B,f+=N.b*B;else if(L.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(L.sh.coefficients[P],B);M++}else if(L.isDirectionalLight){const P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,F=t.get(L);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=D,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=P,p++}else if(L.isSpotLight){const P=e.get(L);P.position.setFromMatrixPosition(L.matrixWorld),P.color.copy(N).multiplyScalar(B),P.distance=U,P.coneCos=Math.cos(L.angle),P.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),P.decay=L.decay,n.spot[_]=P;const Y=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,Y.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=Y.matrix,L.castShadow){const F=t.get(L);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=D,v++}_++}else if(L.isRectAreaLight){const P=e.get(L);P.color.copy(N).multiplyScalar(B),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=P,m++}else if(L.isPointLight){const P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity),P.distance=L.distance,P.decay=L.decay,L.castShadow){const Y=L.shadow,F=t.get(L);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,F.shadowCameraNear=Y.camera.near,F.shadowCameraFar=Y.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=P,g++}else if(L.isHemisphereLight){const P=e.get(L);P.skyColor.copy(L.color).multiplyScalar(B),P.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[d]=P,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==d||A.numDirectionalShadows!==S||A.numPointShadows!==E||A.numSpotShadows!==v||A.numSpotMaps!==b||A.numLightProbes!==M)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=M,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=d,A.numDirectionalShadows=S,A.numPointShadows=E,A.numSpotShadows=v,A.numSpotMaps=b,A.numLightProbes=M,n.version=c_++)}function c(l,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){const E=l[d];if(E.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function ou(i){const e=new u_(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function h_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ou(i),e.set(s,[a])):r>=o.length?(a=new ou(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class f_ extends ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d_ extends ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`;function g_(i,e,t){let n=new Rc;const s=new Oe,r=new Oe,o=new Je,a=new f_({depthPacking:jf}),c=new d_,l={},u=t.maxTextureSize,h={[Qt]:Dt,[Dt]:Qt,[cn]:cn},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ke(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let d=this.type;this.render=function(T,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(hi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=d!==Vn&&this.type===Vn,U=d===Vn&&this.type!==Vn;for(let D=0,P=T.length;D<P;D++){const Y=T[D],F=Y.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const Z=F.getFrameExtents();if(s.multiply(Z),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,F.mapSize.y=r.y)),F.map===null||B===!0||U===!0){const Q=this.type!==Vn?{minFilter:bt,magFilter:bt}:{};F.map!==null&&F.map.dispose(),F.map=new gi(s.x,s.y,Q),F.map.texture.name=Y.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const X=F.getViewportCount();for(let Q=0;Q<X;Q++){const oe=F.getViewport(Q);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),N.viewport(o),F.updateMatrices(Y,Q),n=F.getFrustum(),v(M,A,F.camera,Y,this.type)}F.isPointLightShadow!==!0&&this.type===Vn&&S(F,A),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(x,y,L)};function S(T,M){const A=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(M,null,A,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(M,null,A,p,_,null)}function E(T,M,A,x){let y=null;const L=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)y=L;else if(y=A.isPointLight===!0?c:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=y.uuid,B=M.uuid;let U=l[N];U===void 0&&(U={},l[N]=U);let D=U[B];D===void 0&&(D=y.clone(),U[B]=D,M.addEventListener("dispose",b)),y=D}if(y.visible=M.visible,y.wireframe=M.wireframe,x===Vn?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:h[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=A}return y}function v(T,M,A,x,y){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const B=e.update(T),U=T.material;if(Array.isArray(U)){const D=B.groups;for(let P=0,Y=D.length;P<Y;P++){const F=D[P],Z=U[F.materialIndex];if(Z&&Z.visible){const X=E(T,Z,x,y);T.onBeforeShadow(i,T,M,A,B,X,F),i.renderBufferDirect(A,null,B,X,T,F),T.onAfterShadow(i,T,M,A,B,X,F)}}}else if(U.visible){const D=E(T,U,x,y);T.onBeforeShadow(i,T,M,A,B,D,null),i.renderBufferDirect(A,null,B,D,T,null),T.onAfterShadow(i,T,M,A,B,D,null)}}const N=T.children;for(let B=0,U=N.length;B<U;B++)v(N[B],M,A,x,y)}function b(T){T.target.removeEventListener("dispose",b);for(const A in l){const x=l[A],y=T.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const __={[Ea]:ba,[Ta]:Ra,[Aa]:Ca,[ps]:wa,[ba]:Ea,[Ra]:Ta,[Ca]:Aa,[wa]:ps};function x_(i,e){function t(){let z=!1;const de=new Je;let J=null;const ie=new Je(0,0,0,0);return{setMask:function(xe){J!==xe&&!z&&(i.colorMask(xe,xe,xe,xe),J=xe)},setLocked:function(xe){z=xe},setClear:function(xe,ge,Be,xt,Ut){Ut===!0&&(xe*=xt,ge*=xt,Be*=xt),de.set(xe,ge,Be,xt),ie.equals(de)===!1&&(i.clearColor(xe,ge,Be,xt),ie.copy(de))},reset:function(){z=!1,J=null,ie.set(-1,0,0,0)}}}function n(){let z=!1,de=!1,J=null,ie=null,xe=null;return{setReversed:function(ge){if(de!==ge){const Be=e.get("EXT_clip_control");de?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const xt=xe;xe=null,this.setClear(xt)}de=ge},getReversed:function(){return de},setTest:function(ge){ge?H(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(ge){J!==ge&&!z&&(i.depthMask(ge),J=ge)},setFunc:function(ge){if(de&&(ge=__[ge]),ie!==ge){switch(ge){case Ea:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=ge}},setLocked:function(ge){z=ge},setClear:function(ge){xe!==ge&&(de&&(ge=1-ge),i.clearDepth(ge),xe=ge)},reset:function(){z=!1,J=null,ie=null,xe=null,de=!1}}}function s(){let z=!1,de=null,J=null,ie=null,xe=null,ge=null,Be=null,xt=null,Ut=null;return{setTest:function(nt){z||(nt?H(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(nt){de!==nt&&!z&&(i.stencilMask(nt),de=nt)},setFunc:function(nt,fn,Un){(J!==nt||ie!==fn||xe!==Un)&&(i.stencilFunc(nt,fn,Un),J=nt,ie=fn,xe=Un)},setOp:function(nt,fn,Un){(ge!==nt||Be!==fn||xt!==Un)&&(i.stencilOp(nt,fn,Un),ge=nt,Be=fn,xt=Un)},setLocked:function(nt){z=nt},setClear:function(nt){Ut!==nt&&(i.clearStencil(nt),Ut=nt)},reset:function(){z=!1,de=null,J=null,ie=null,xe=null,ge=null,Be=null,xt=null,Ut=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,E=null,v=null,b=null,T=null,M=new Te(0,0,0),A=0,x=!1,y=null,L=null,N=null,B=null,U=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Y=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(F)[1]),P=Y>=1):F.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),P=Y>=2);let Z=null,X={};const Q=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Re=new Je().fromArray(Q),q=new Je().fromArray(oe);function ee(z,de,J,ie){const xe=new Uint8Array(4),ge=i.createTexture();i.bindTexture(z,ge),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<J;Be++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(de+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ge}const C={};C[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),C[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),C[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(i.DEPTH_TEST),o.setFunc(ps),Le(!1),Ce(ol),H(i.CULL_FACE),k(hi);function H(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function $(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function re(z,de){return h[z]!==de?(i.bindFramebuffer(z,de),h[z]=de,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function le(z,de){let J=p,ie=!1;if(z){J=f.get(de),J===void 0&&(J=[],f.set(de,J));const xe=z.textures;if(J.length!==xe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Be=xe.length;ge<Be;ge++)J[ge]=i.COLOR_ATTACHMENT0+ge;J.length=xe.length,ie=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ie=!0);ie&&i.drawBuffers(J)}function ue(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const he={[Ii]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[yf]:i.FUNC_REVERSE_SUBTRACT};he[vf]=i.MIN,he[Mf]=i.MAX;const Ue={[Sf]:i.ZERO,[Ef]:i.ONE,[bf]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[Lf]:i.SRC_ALPHA_SATURATE,[Rf]:i.DST_COLOR,[Af]:i.DST_ALPHA,[Tf]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[Cf]:i.ONE_MINUS_DST_COLOR,[wf]:i.ONE_MINUS_DST_ALPHA,[Pf]:i.CONSTANT_COLOR,[If]:i.ONE_MINUS_CONSTANT_COLOR,[Df]:i.CONSTANT_ALPHA,[Uf]:i.ONE_MINUS_CONSTANT_ALPHA};function k(z,de,J,ie,xe,ge,Be,xt,Ut,nt){if(z===hi){_===!0&&($(i.BLEND),_=!1);return}if(_===!1&&(H(i.BLEND),_=!0),z!==_f){if(z!==m||nt!==x){if((d!==Ii||v!==Ii)&&(i.blendEquation(i.FUNC_ADD),d=Ii,v=Ii),nt)switch(z){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,E=null,b=null,T=null,M.set(0,0,0),A=0,m=z,x=nt}return}xe=xe||de,ge=ge||J,Be=Be||ie,(de!==d||xe!==v)&&(i.blendEquationSeparate(he[de],he[xe]),d=de,v=xe),(J!==S||ie!==E||ge!==b||Be!==T)&&(i.blendFuncSeparate(Ue[J],Ue[ie],Ue[ge],Ue[Be]),S=J,E=ie,b=ge,T=Be),(xt.equals(M)===!1||Ut!==A)&&(i.blendColor(xt.r,xt.g,xt.b,Ut),M.copy(xt),A=Ut),m=z,x=!1}function qe(z,de){z.side===cn?$(i.CULL_FACE):H(i.CULL_FACE);let J=z.side===Dt;de&&(J=!J),Le(J),z.blending===ls&&z.transparent===!1?k(hi):k(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const ie=z.stencilWrite;a.setTest(ie),ie&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),tt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(z){y!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),y=z)}function Ce(z){z!==df?(H(i.CULL_FACE),z!==L&&(z===ol?i.cullFace(i.BACK):z===pf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),L=z}function pe(z){z!==N&&(P&&i.lineWidth(z),N=z)}function tt(z,de,J){z?(H(i.POLYGON_OFFSET_FILL),(B!==de||U!==J)&&(i.polygonOffset(de,J),B=de,U=J)):$(i.POLYGON_OFFSET_FILL)}function Pe(z){z?H(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function I(z){z===void 0&&(z=i.TEXTURE0+D-1),Z!==z&&(i.activeTexture(z),Z=z)}function w(z,de,J){J===void 0&&(Z===null?J=i.TEXTURE0+D-1:J=Z);let ie=X[J];ie===void 0&&(ie={type:void 0,texture:void 0},X[J]=ie),(ie.type!==z||ie.texture!==de)&&(Z!==J&&(i.activeTexture(J),Z=J),i.bindTexture(z,de||C[z]),ie.type=z,ie.texture=de)}function W(){const z=X[Z];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(z){Re.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Re.copy(z))}function Me(z){q.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),q.copy(z))}function Ye(z,de){let J=l.get(de);J===void 0&&(J=new WeakMap,l.set(de,J));let ie=J.get(z);ie===void 0&&(ie=i.getUniformBlockIndex(de,z.name),J.set(z,ie))}function He(z,de){const ie=l.get(de).get(z);c.get(de)!==ie&&(i.uniformBlockBinding(de,ie,z.__bindingPointIndex),c.set(de,ie))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Z=null,X={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,E=null,v=null,b=null,T=null,M=new Te(0,0,0),A=0,x=!1,y=null,L=null,N=null,B=null,U=null,Re.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:$,bindFramebuffer:re,drawBuffers:le,useProgram:ue,setBlending:k,setMaterial:qe,setFlipSided:Le,setCullFace:Ce,setLineWidth:pe,setPolygonOffset:tt,setScissorTest:Pe,activeTexture:I,bindTexture:w,unbindTexture:W,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:ve,texImage3D:Ie,updateUBOMapping:Ye,uniformBlockBinding:He,texStorage2D:je,texStorage3D:ae,texSubImage2D:te,texSubImage3D:Ae,compressedTexSubImage2D:me,compressedTexSubImage3D:ye,scissor:De,viewport:Me,reset:ut}}function au(i,e,t,n){const s=y_(n);switch(t){case rh:return i*e;case ah:return i*e;case ch:return i*e*2;case Ec:return i*e/s.components*s.byteLength;case bc:return i*e/s.components*s.byteLength;case lh:return i*e*2/s.components*s.byteLength;case Tc:return i*e*2/s.components*s.byteLength;case oh:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case Ac:return i*e*4/s.components*s.byteLength;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:case Na:return Math.max(i,16)*Math.max(e,8)/4;case Ia:case Ua:return Math.max(i,8)*Math.max(e,8)/2;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ro:case Qa:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uh:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y_(i){switch(i){case jn:case nh:return{byteLength:1,components:1};case ar:case ih:case ws:return{byteLength:2,components:1};case Mc:case Sc:return{byteLength:2,components:4};case zi:case vc:case vn:return{byteLength:4,components:1};case sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function v_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return p?new OffscreenCanvas(I,w):ur("canvas")}function _(I,w,W){let ne=1;const se=Pe(I);if((se.width>W||se.height>W)&&(ne=W/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const te=Math.floor(ne*se.width),Ae=Math.floor(ne*se.height);h===void 0&&(h=g(te,Ae));const me=w?g(te,Ae):h;return me.width=te,me.height=Ae,me.getContext("2d").drawImage(I,0,0,te,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+Ae+")."),me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function m(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(I,w,W,ne,se=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=w;if(w===i.RED&&(W===i.FLOAT&&(te=i.R32F),W===i.HALF_FLOAT&&(te=i.R16F),W===i.UNSIGNED_BYTE&&(te=i.R8)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.R8UI),W===i.UNSIGNED_SHORT&&(te=i.R16UI),W===i.UNSIGNED_INT&&(te=i.R32UI),W===i.BYTE&&(te=i.R8I),W===i.SHORT&&(te=i.R16I),W===i.INT&&(te=i.R32I)),w===i.RG&&(W===i.FLOAT&&(te=i.RG32F),W===i.HALF_FLOAT&&(te=i.RG16F),W===i.UNSIGNED_BYTE&&(te=i.RG8)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RG8UI),W===i.UNSIGNED_SHORT&&(te=i.RG16UI),W===i.UNSIGNED_INT&&(te=i.RG32UI),W===i.BYTE&&(te=i.RG8I),W===i.SHORT&&(te=i.RG16I),W===i.INT&&(te=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGB8UI),W===i.UNSIGNED_SHORT&&(te=i.RGB16UI),W===i.UNSIGNED_INT&&(te=i.RGB32UI),W===i.BYTE&&(te=i.RGB8I),W===i.SHORT&&(te=i.RGB16I),W===i.INT&&(te=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),W===i.UNSIGNED_INT&&(te=i.RGBA32UI),W===i.BYTE&&(te=i.RGBA8I),W===i.SHORT&&(te=i.RGBA16I),W===i.INT&&(te=i.RGBA32I)),w===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),w===i.RGBA){const Ae=se?yo:Xe.getTransfer(ne);W===i.FLOAT&&(te=i.RGBA32F),W===i.HALF_FLOAT&&(te=i.RGBA16F),W===i.UNSIGNED_BYTE&&(te=Ae===ot?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(I,w){let W;return I?w===null||w===zi||w===_s?W=i.DEPTH24_STENCIL8:w===vn?W=i.DEPTH32F_STENCIL8:w===ar&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===zi||w===_s?W=i.DEPTH_COMPONENT24:w===vn?W=i.DEPTH_COMPONENT32F:w===ar&&(W=i.DEPTH_COMPONENT16),W}function b(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==bt&&I.minFilter!==Kt?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){const w=I.target;w.removeEventListener("dispose",T),A(w),w.isVideoTexture&&u.delete(w)}function M(I){const w=I.target;w.removeEventListener("dispose",M),y(w)}function A(I){const w=n.get(I);if(w.__webglInit===void 0)return;const W=I.source,ne=f.get(W);if(ne){const se=ne[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&x(I),Object.keys(ne).length===0&&f.delete(W)}n.remove(I)}function x(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const W=I.source,ne=f.get(W);delete ne[w.__cacheKey],o.memory.textures--}function y(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let se=0;se<w.__webglFramebuffer[ne].length;se++)i.deleteFramebuffer(w.__webglFramebuffer[ne][se]);else i.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[ne]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=I.textures;for(let ne=0,se=W.length;ne<se;ne++){const te=n.get(W[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(W[ne])}n.remove(I)}let L=0;function N(){L=0}function B(){const I=L;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function U(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function D(I,w){const W=n.get(I);if(I.isVideoTexture&&pe(I),I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){const ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(W,I,w);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function P(I,w){const W=n.get(I);if(I.version>0&&W.__version!==I.version){q(W,I,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function Y(I,w){const W=n.get(I);if(I.version>0&&W.__version!==I.version){q(W,I,w);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function F(I,w){const W=n.get(I);if(I.version>0&&W.__version!==I.version){ee(W,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}const Z={[ki]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},X={[bt]:i.NEAREST,[th]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},Q={[$f]:i.NEVER,[nd]:i.ALWAYS,[Zf]:i.LESS,[fh]:i.LEQUAL,[Jf]:i.EQUAL,[td]:i.GEQUAL,[Qf]:i.GREATER,[ed]:i.NOTEQUAL};function oe(I,w){if(w.type===vn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Kt||w.magFilter===eo||w.magFilter===js||w.magFilter===Xn||w.minFilter===Kt||w.minFilter===eo||w.minFilter===js||w.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Z[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Z[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Z[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,X[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,X[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===bt||w.minFilter!==js&&w.minFilter!==Xn||w.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Re(I,w){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",T));const ne=w.source;let se=f.get(ne);se===void 0&&(se={},f.set(ne,se));const te=U(w);if(te!==I.__cacheKey){se[te]===void 0&&(se[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),se[te].usedTimes++;const Ae=se[I.__cacheKey];Ae!==void 0&&(se[I.__cacheKey].usedTimes--,Ae.usedTimes===0&&x(w)),I.__cacheKey=te,I.__webglTexture=se[te].texture}return W}function q(I,w,W){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);const se=Re(I,w),te=w.source;t.bindTexture(ne,I.__webglTexture,i.TEXTURE0+W);const Ae=n.get(te);if(te.version!==Ae.__version||se===!0){t.activeTexture(i.TEXTURE0+W);const me=Xe.getPrimaries(Xe.workingColorSpace),ye=w.colorSpace===oi?null:Xe.getPrimaries(w.colorSpace),je=w.colorSpace===oi||me===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ae=_(w.image,!1,s.maxTextureSize);ae=tt(w,ae);const ve=r.convert(w.format,w.colorSpace),Ie=r.convert(w.type);let De=E(w.internalFormat,ve,Ie,w.colorSpace,w.isVideoTexture);oe(ne,w);let Me;const Ye=w.mipmaps,He=w.isVideoTexture!==!0,ut=Ae.__version===void 0||se===!0,z=te.dataReady,de=b(w,ae);if(w.isDepthTexture)De=v(w.format===xs,w.type),ut&&(He?t.texStorage2D(i.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,ve,Ie,null));else if(w.isDataTexture)if(Ye.length>0){He&&ut&&t.texStorage2D(i.TEXTURE_2D,de,De,Ye[0].width,Ye[0].height);for(let J=0,ie=Ye.length;J<ie;J++)Me=Ye[J],He?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,ve,Ie,Me.data):t.texImage2D(i.TEXTURE_2D,J,De,Me.width,Me.height,0,ve,Ie,Me.data);w.generateMipmaps=!1}else He?(ut&&t.texStorage2D(i.TEXTURE_2D,de,De,ae.width,ae.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,ve,Ie,ae.data)):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,ve,Ie,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,De,Ye[0].width,Ye[0].height,ae.depth);for(let J=0,ie=Ye.length;J<ie;J++)if(Me=Ye[J],w.format!==en)if(ve!==null)if(He){if(z)if(w.layerUpdates.size>0){const xe=au(Me.width,Me.height,w.format,w.type);for(const ge of w.layerUpdates){const Be=Me.data.subarray(ge*xe/Me.data.BYTES_PER_ELEMENT,(ge+1)*xe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ge,Me.width,Me.height,1,ve,Be)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,ae.depth,ve,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,De,Me.width,Me.height,ae.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,ae.depth,ve,Ie,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,De,Me.width,Me.height,ae.depth,0,ve,Ie,Me.data)}else{He&&ut&&t.texStorage2D(i.TEXTURE_2D,de,De,Ye[0].width,Ye[0].height);for(let J=0,ie=Ye.length;J<ie;J++)Me=Ye[J],w.format!==en?ve!==null?He?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,J,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,ve,Ie,Me.data):t.texImage2D(i.TEXTURE_2D,J,De,Me.width,Me.height,0,ve,Ie,Me.data)}else if(w.isDataArrayTexture)if(He){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,De,ae.width,ae.height,ae.depth),z)if(w.layerUpdates.size>0){const J=au(ae.width,ae.height,w.format,w.type);for(const ie of w.layerUpdates){const xe=ae.data.subarray(ie*J/ae.data.BYTES_PER_ELEMENT,(ie+1)*J/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,ve,Ie,xe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ie,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,ve,Ie,ae.data);else if(w.isData3DTexture)He?(ut&&t.texStorage3D(i.TEXTURE_3D,de,De,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ie,ae.data)):t.texImage3D(i.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,ve,Ie,ae.data);else if(w.isFramebufferTexture){if(ut)if(He)t.texStorage2D(i.TEXTURE_2D,de,De,ae.width,ae.height);else{let J=ae.width,ie=ae.height;for(let xe=0;xe<de;xe++)t.texImage2D(i.TEXTURE_2D,xe,De,J,ie,0,ve,Ie,null),J>>=1,ie>>=1}}else if(Ye.length>0){if(He&&ut){const J=Pe(Ye[0]);t.texStorage2D(i.TEXTURE_2D,de,De,J.width,J.height)}for(let J=0,ie=Ye.length;J<ie;J++)Me=Ye[J],He?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ve,Ie,Me):t.texImage2D(i.TEXTURE_2D,J,De,ve,Ie,Me);w.generateMipmaps=!1}else if(He){if(ut){const J=Pe(ae);t.texStorage2D(i.TEXTURE_2D,de,De,J.width,J.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ie,ae)}else t.texImage2D(i.TEXTURE_2D,0,De,ve,Ie,ae);m(w)&&d(ne),Ae.__version=te.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ee(I,w,W){if(w.image.length!==6)return;const ne=Re(I,w),se=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const te=n.get(se);if(se.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+W);const Ae=Xe.getPrimaries(Xe.workingColorSpace),me=w.colorSpace===oi?null:Xe.getPrimaries(w.colorSpace),ye=w.colorSpace===oi||Ae===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const je=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let ie=0;ie<6;ie++)!je&&!ae?ve[ie]=_(w.image[ie],!0,s.maxCubemapSize):ve[ie]=ae?w.image[ie].image:w.image[ie],ve[ie]=tt(w,ve[ie]);const Ie=ve[0],De=r.convert(w.format,w.colorSpace),Me=r.convert(w.type),Ye=E(w.internalFormat,De,Me,w.colorSpace),He=w.isVideoTexture!==!0,ut=te.__version===void 0||ne===!0,z=se.dataReady;let de=b(w,Ie);oe(i.TEXTURE_CUBE_MAP,w);let J;if(je){He&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ye,Ie.width,Ie.height);for(let ie=0;ie<6;ie++){J=ve[ie].mipmaps;for(let xe=0;xe<J.length;xe++){const ge=J[xe];w.format!==en?De!==null?He?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,0,0,ge.width,ge.height,De,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,Ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,0,0,ge.width,ge.height,De,Me,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,Ye,ge.width,ge.height,0,De,Me,ge.data)}}}else{if(J=w.mipmaps,He&&ut){J.length>0&&de++;const ie=Pe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ye,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ve[ie].width,ve[ie].height,De,Me,ve[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,ve[ie].width,ve[ie].height,0,De,Me,ve[ie].data);for(let xe=0;xe<J.length;xe++){const Be=J[xe].image[ie].image;He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,0,0,Be.width,Be.height,De,Me,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,Ye,Be.width,Be.height,0,De,Me,Be.data)}}else{He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,De,Me,ve[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,De,Me,ve[ie]);for(let xe=0;xe<J.length;xe++){const ge=J[xe];He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,0,0,De,Me,ge.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,Ye,De,Me,ge.image[ie])}}}m(w)&&d(i.TEXTURE_CUBE_MAP),te.__version=se.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function C(I,w,W,ne,se,te){const Ae=r.convert(W.format,W.colorSpace),me=r.convert(W.type),ye=E(W.internalFormat,Ae,me,W.colorSpace),je=n.get(w),ae=n.get(W);if(ae.__renderTarget=w,!je.__hasExternalTextures){const ve=Math.max(1,w.width>>te),Ie=Math.max(1,w.height>>te);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,te,ye,ve,Ie,w.depth,0,Ae,me,null):t.texImage2D(se,te,ye,ve,Ie,0,Ae,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ce(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,se,ae.__webglTexture,0,Le(w)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,se,ae.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(I,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const ne=w.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,te=v(w.stencilBuffer,se),Ae=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=Le(w);Ce(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,te,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,te,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,te,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,I)}else{const ne=w.textures;for(let se=0;se<ne.length;se++){const te=ne[se],Ae=r.convert(te.format,te.colorSpace),me=r.convert(te.type),ye=E(te.internalFormat,Ae,me,te.colorSpace),je=Le(w);W&&Ce(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,ye,w.width,w.height):Ce(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,ye,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ye,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(w.depthTexture);ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);const se=ne.__webglTexture,te=Le(w);if(w.depthTexture.format===us)Ce(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(w.depthTexture.format===xs)Ce(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function re(I){const w=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const ne=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=ne}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");$(w.__webglFramebuffer,I)}else if(W){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=i.createRenderbuffer(),H(w.__webglDepthbuffer[ne],I,!1);else{const se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),H(w.__webglDepthbuffer,I,!1);else{const ne=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(I,w,W){const ne=n.get(I);w!==void 0&&C(ne.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&re(I)}function ue(I){const w=I.texture,W=n.get(I),ne=n.get(w);I.addEventListener("dispose",M);const se=I.textures,te=I.isWebGLCubeRenderTarget===!0,Ae=se.length>1;if(Ae||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++),te){W.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[me]=[];for(let ye=0;ye<w.mipmaps.length;ye++)W.__webglFramebuffer[me][ye]=i.createFramebuffer()}else W.__webglFramebuffer[me]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)W.__webglFramebuffer[me]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let me=0,ye=se.length;me<ye;me++){const je=n.get(se[me]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ce(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let me=0;me<se.length;me++){const ye=se[me];W.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[me]);const je=r.convert(ye.format,ye.colorSpace),ae=r.convert(ye.type),ve=E(ye.internalFormat,je,ae,ye.colorSpace,I.isXRRenderTarget===!0),Ie=Le(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ve,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,W.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),H(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),oe(i.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)C(W.__webglFramebuffer[me][ye],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ye);else C(W.__webglFramebuffer[me],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(w)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let me=0,ye=se.length;me<ye;me++){const je=se[me],ae=n.get(je);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),oe(i.TEXTURE_2D,je),C(W.__webglFramebuffer,I,je,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),m(je)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,ne.__webglTexture),oe(me,w),w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)C(W.__webglFramebuffer[ye],I,w,i.COLOR_ATTACHMENT0,me,ye);else C(W.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,me,0);m(w)&&d(me),t.unbindTexture()}I.depthBuffer&&re(I)}function he(I){const w=I.textures;for(let W=0,ne=w.length;W<ne;W++){const se=w[W];if(m(se)){const te=S(I),Ae=n.get(se).__webglTexture;t.bindTexture(te,Ae),d(te),t.unbindTexture()}}}const Ue=[],k=[];function qe(I){if(I.samples>0){if(Ce(I)===!1){const w=I.textures,W=I.width,ne=I.height;let se=i.COLOR_BUFFER_BIT;const te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(I),me=w.length>1;if(me)for(let ye=0;ye<w.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const je=n.get(w[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,W,ne,0,0,W,ne,se,i.NEAREST),c===!0&&(Ue.length=0,k.length=0,Ue.push(i.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ue.push(te),k.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let ye=0;ye<w.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const je=n.get(w[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Le(I){return Math.min(s.maxSamples,I.samples)}function Ce(I){const w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function pe(I){const w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function tt(I,w){const W=I.colorSpace,ne=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Yt&&W!==oi&&(Xe.getTransfer(W)===ot?(ne!==en||se!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function Pe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=D,this.setTexture2DArray=P,this.setTexture3D=Y,this.setTextureCube=F,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=C,this.useMultisampledRTT=Ce}function M_(i,e){function t(n,s=oi){let r;const o=Xe.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===vc)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===ws)return i.HALF_FLOAT;if(n===rh)return i.ALPHA;if(n===oh)return i.RGB;if(n===en)return i.RGBA;if(n===ah)return i.LUMINANCE;if(n===ch)return i.LUMINANCE_ALPHA;if(n===us)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Ec)return i.RED;if(n===bc)return i.RED_INTEGER;if(n===lh)return i.RG;if(n===Tc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===to||n===no||n===io||n===so)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Da||n===Ua||n===Na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya||n===qa||n===ja||n===Ka||n===$a||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===Qa||n===ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ro)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uh||n===tc||n===nc||n===ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class S_ extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ct extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E_={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
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

}`;class A_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Tt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:b_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w_ extends Rs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const _=new A_,m=t.getContextAttributes();let d=null,S=null;const E=[],v=[],b=new Oe;let T=null;const M=new jt;M.viewport=new Je;const A=new jt;A.viewport=new Je;const x=[M,A],y=new S_;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=E[q];return ee===void 0&&(ee=new ea,E[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=E[q];return ee===void 0&&(ee=new ea,E[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=E[q];return ee===void 0&&(ee=new ea,E[q]=ee),ee.getHandSpace()};function B(q){const ee=v.indexOf(q.inputSource);if(ee===-1)return;const C=E[ee];C!==void 0&&(C.update(q.inputSource,q.frame,l||o),C.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",D);for(let q=0;q<E.length;q++){const ee=v[q];ee!==null&&(v[q]=null,E[q].disconnect(ee))}L=null,N=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,S=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",U),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new gi(p.framebufferWidth,p.framebufferHeight,{format:en,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,C=null,H=null;m.depth&&(H=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?xs:us,C=m.stencil?_s:zi);const $={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer($),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new gi(f.textureWidth,f.textureHeight,{format:en,type:jn,depthTexture:new Th(f.textureWidth,f.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function D(q){for(let ee=0;ee<q.removed.length;ee++){const C=q.removed[ee],H=v.indexOf(C);H>=0&&(v[H]=null,E[H].disconnect(C))}for(let ee=0;ee<q.added.length;ee++){const C=q.added[ee];let H=v.indexOf(C);if(H===-1){for(let re=0;re<E.length;re++)if(re>=v.length){v.push(C),H=re;break}else if(v[re]===null){v[re]=C,H=re;break}if(H===-1)break}const $=E[H];$&&$.connect(C)}}const P=new O,Y=new O;function F(q,ee,C){P.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(C.matrixWorld);const H=P.distanceTo(Y),$=ee.projectionMatrix.elements,re=C.projectionMatrix.elements,le=$[14]/($[10]-1),ue=$[14]/($[10]+1),he=($[9]+1)/$[5],Ue=($[9]-1)/$[5],k=($[8]-1)/$[0],qe=(re[8]+1)/re[0],Le=le*k,Ce=le*qe,pe=H/(-k+qe),tt=pe*-k;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(tt),q.translateZ(pe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),$[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Pe=le+pe,I=ue+pe,w=Le-tt,W=Ce+(H-tt),ne=he*ue/I*Pe,se=Ue*ue/I*Pe;q.projectionMatrix.makePerspective(w,W,ne,se,Pe,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Z(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,C=q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(C=_.depthFar)),y.near=A.near=M.near=ee,y.far=A.far=M.far=C,(L!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,N=y.far),M.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,y.layers.mask=M.layers.mask|A.layers.mask;const H=q.parent,$=y.cameras;Z(y,H);for(let re=0;re<$.length;re++)Z($[re],H);$.length===2?F(y,M,A):y.projectionMatrix.copy(M.projectionMatrix),X(q,y,H)};function X(q,ee,C){C===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(C.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ys*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Q=null;function oe(q,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){const C=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let H=!1;C.length!==y.cameras.length&&(y.cameras.length=0,H=!0);for(let re=0;re<C.length;re++){const le=C[re];let ue=null;if(p!==null)ue=p.getViewport(le);else{const Ue=h.getViewSubImage(f,le);ue=Ue.viewport,re===0&&(e.setRenderTargetTextures(S,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(S))}let he=x[re];he===void 0&&(he=new jt,he.layers.enable(re),he.viewport=new Je,x[re]=he),he.matrix.fromArray(le.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(le.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ue.x,ue.y,ue.width,ue.height),re===0&&(y.matrix.copy(he.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),H===!0&&y.cameras.push(he)}const $=s.enabledFeatures;if($&&$.includes("depth-sensing")){const re=h.getDepthInformation(C[0]);re&&re.isValid&&re.texture&&_.init(e,re,s.renderState)}}for(let C=0;C<E.length;C++){const H=v[C],$=E[C];H!==null&&$!==void 0&&$.update(H,ee,l||o)}Q&&Q(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Re=new bh;Re.setAnimationLoop(oe),this.setAnimationLoop=function(q){Q=q},this.dispose=function(){}}}const Ei=new un,R_=new Fe;function C_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Mh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,E,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,S,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=e.get(d),E=S.envMap,v=S.envMapRotation;E&&(m.envMap.value=E,Ei.copy(v),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(Ei)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){const v=E.program;n.uniformBlockBinding(S,v)}function l(S,E){let v=s[S.id];v===void 0&&(g(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",m));const b=E.program;n.updateUBOMapping(S,b);const T=e.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function u(S){const E=h();S.__bindingPointIndex=E;const v=i.createBuffer(),b=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const E=s[S.id],v=S.uniforms,b=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,M=v.length;T<M;T++){const A=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,y=A.length;x<y;x++){const L=A[x];if(p(L,T,x,b)===!0){const N=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let D=0;D<B.length;D++){const P=B[D],Y=_(P);typeof P=="number"||typeof P=="boolean"?(L.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,N+U,L.__data)):P.isMatrix3?(L.__data[0]=P.elements[0],L.__data[1]=P.elements[1],L.__data[2]=P.elements[2],L.__data[3]=0,L.__data[4]=P.elements[3],L.__data[5]=P.elements[4],L.__data[6]=P.elements[5],L.__data[7]=0,L.__data[8]=P.elements[6],L.__data[9]=P.elements[7],L.__data[10]=P.elements[8],L.__data[11]=0):(P.toArray(L.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,v,b){const T=S.value,M=E+"_"+v;if(b[M]===void 0)return typeof T=="number"||typeof T=="boolean"?b[M]=T:b[M]=T.clone(),!0;{const A=b[M];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return b[M]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(S){const E=S.uniforms;let v=0;const b=16;for(let M=0,A=E.length;M<A;M++){const x=Array.isArray(E[M])?E[M]:[E[M]];for(let y=0,L=x.length;y<L;y++){const N=x[y],B=Array.isArray(N.value)?N.value:[N.value];for(let U=0,D=B.length;U<D;U++){const P=B[U],Y=_(P),F=v%b,Z=F%Y.boundary,X=F+Z;v+=Z,X!==0&&b-X<Y.storage&&(v+=b-X),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const T=v%b;return T>0&&(v+=b-T),S.__size=v,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class P_{constructor(e={}){const{canvas:t=yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=fi,this.toneMappingExposure=1;const v=this;let b=!1,T=0,M=0,A=null,x=-1,y=null;const L=new Je,N=new Je;let B=null;const U=new Te(0);let D=0,P=t.width,Y=t.height,F=1,Z=null,X=null;const Q=new Je(0,0,P,Y),oe=new Je(0,0,P,Y);let Re=!1;const q=new Rc;let ee=!1,C=!1;const H=new Fe,$=new Fe,re=new O,le=new Je,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Ue(){return A===null?F:1}let k=n;function qe(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xc}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),k===null){const G="webgl2";if(k=qe(G,R),k===null)throw qe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Le,Ce,pe,tt,Pe,I,w,W,ne,se,te,Ae,me,ye,je,ae,ve,Ie,De,Me,Ye,He,ut,z;function de(){Le=new F0(k),Le.init(),He=new M_(k,Le),Ce=new L0(k,Le,e,He),pe=new x_(k,Le),Ce.reverseDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),tt=new k0(k),Pe=new i_,I=new v_(k,Le,pe,Pe,Ce,He,tt),w=new I0(v),W=new N0(v),ne=new Yd(k),ut=new R0(k,ne),se=new O0(k,ne,tt,ut),te=new H0(k,se,ne,tt),De=new z0(k,Ce,I),ae=new P0(Pe),Ae=new n_(v,w,W,Le,Ce,ut,ae),me=new C_(v,Pe),ye=new r_,je=new h_(Le),Ie=new w0(v,w,W,pe,te,p,c),ve=new g_(v,te,Ce),z=new L_(k,tt,Ce,pe),Me=new C0(k,Le,tt),Ye=new B0(k,Le,tt),tt.programs=Ae.programs,v.capabilities=Ce,v.extensions=Le,v.properties=Pe,v.renderLists=ye,v.shadowMap=ve,v.state=pe,v.info=tt}de();const J=new w_(v,k);this.xr=J,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(P,Y,!1))},this.getSize=function(R){return R.set(P,Y)},this.setSize=function(R,G,j=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Y=G,t.width=Math.floor(R*F),t.height=Math.floor(G*F),j===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(P*F,Y*F).floor()},this.setDrawingBufferSize=function(R,G,j){P=R,Y=G,F=j,t.width=Math.floor(R*j),t.height=Math.floor(G*j),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,G,j,K){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,G,j,K),pe.viewport(L.copy(Q).multiplyScalar(F).round())},this.getScissor=function(R){return R.copy(oe)},this.setScissor=function(R,G,j,K){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,G,j,K),pe.scissor(N.copy(oe).multiplyScalar(F).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(R){pe.setScissorTest(Re=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(R=!0,G=!0,j=!0){let K=0;if(R){let V=!1;if(A!==null){const ce=A.texture.format;V=ce===Ac||ce===Tc||ce===bc}if(V){const ce=A.texture.type,_e=ce===jn||ce===zi||ce===ar||ce===_s||ce===Mc||ce===Sc,Se=Ie.getClearColor(),Ee=Ie.getClearAlpha(),Ne=Se.r,ke=Se.g,be=Se.b;_e?(g[0]=Ne,g[1]=ke,g[2]=be,g[3]=Ee,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Ne,_[1]=ke,_[2]=be,_[3]=Ee,k.clearBufferiv(k.COLOR,0,_))}else K|=k.COLOR_BUFFER_BIT}G&&(K|=k.DEPTH_BUFFER_BIT),j&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),je.dispose(),Pe.dispose(),w.dispose(),W.dispose(),te.dispose(),ut.dispose(),z.dispose(),Ae.dispose(),J.dispose(),J.removeEventListener("sessionstart",Jc),J.removeEventListener("sessionend",Qc),_i.stop()};function ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=tt.autoReset,G=ve.enabled,j=ve.autoUpdate,K=ve.needsUpdate,V=ve.type;de(),tt.autoReset=R,ve.enabled=G,ve.autoUpdate=j,ve.needsUpdate=K,ve.type=V}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Be(R){const G=R.target;G.removeEventListener("dispose",Be),xt(G)}function xt(R){Ut(R),Pe.remove(R)}function Ut(R){const G=Pe.get(R).programs;G!==void 0&&(G.forEach(function(j){Ae.releaseProgram(j)}),R.isShaderMaterial&&Ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,j,K,V,ce){G===null&&(G=ue);const _e=V.isMesh&&V.matrixWorld.determinant()<0,Se=uf(R,G,j,K,V);pe.setMaterial(K,_e);let Ee=j.index,Ne=1;if(K.wireframe===!0){if(Ee=se.getWireframeAttribute(j),Ee===void 0)return;Ne=2}const ke=j.drawRange,be=j.attributes.position;let $e=ke.start*Ne,ht=(ke.start+ke.count)*Ne;ce!==null&&($e=Math.max($e,ce.start*Ne),ht=Math.min(ht,(ce.start+ce.count)*Ne)),Ee!==null?($e=Math.max($e,0),ht=Math.min(ht,Ee.count)):be!=null&&($e=Math.max($e,0),ht=Math.min(ht,be.count));const ft=ht-$e;if(ft<0||ft===1/0)return;ut.setup(V,K,Se,j,Ee);let qt,Qe=Me;if(Ee!==null&&(qt=ne.get(Ee),Qe=Ye,Qe.setIndex(qt)),V.isMesh)K.wireframe===!0?(pe.setLineWidth(K.wireframeLinewidth*Ue()),Qe.setMode(k.LINES)):Qe.setMode(k.TRIANGLES);else if(V.isLine){let we=K.linewidth;we===void 0&&(we=1),pe.setLineWidth(we*Ue()),V.isLineSegments?Qe.setMode(k.LINES):V.isLineLoop?Qe.setMode(k.LINE_LOOP):Qe.setMode(k.LINE_STRIP)}else V.isPoints?Qe.setMode(k.POINTS):V.isSprite&&Qe.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Qe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))Qe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const we=V._multiDrawStarts,Nn=V._multiDrawCounts,et=V._multiDrawCount,dn=Ee?ne.get(Ee).bytesPerElement:1,Vi=Pe.get(K).currentProgram.getUniforms();for(let $t=0;$t<et;$t++)Vi.setValue(k,"_gl_DrawID",$t),Qe.render(we[$t]/dn,Nn[$t])}else if(V.isInstancedMesh)Qe.renderInstances($e,ft,V.count);else if(j.isInstancedBufferGeometry){const we=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Nn=Math.min(j.instanceCount,we);Qe.renderInstances($e,ft,Nn)}else Qe.render($e,ft)};function nt(R,G,j){R.transparent===!0&&R.side===cn&&R.forceSinglePass===!1?(R.side=Dt,R.needsUpdate=!0,xr(R,G,j),R.side=Qt,R.needsUpdate=!0,xr(R,G,j),R.side=cn):xr(R,G,j)}this.compile=function(R,G,j=null){j===null&&(j=R),d=je.get(j),d.init(G),E.push(d),j.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),R!==j&&R.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();const K=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ce=V.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const Se=ce[_e];nt(Se,j,V),K.add(Se)}else nt(ce,j,V),K.add(ce)}),E.pop(),d=null,K},this.compileAsync=function(R,G,j=null){const K=this.compile(R,G,j);return new Promise(V=>{function ce(){if(K.forEach(function(_e){Pe.get(_e).currentProgram.isReady()&&K.delete(_e)}),K.size===0){V(R);return}setTimeout(ce,10)}Le.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let fn=null;function Un(R){fn&&fn(R)}function Jc(){_i.stop()}function Qc(){_i.start()}const _i=new bh;_i.setAnimationLoop(Un),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(R){fn=R,J.setAnimationLoop(R),R===null?_i.stop():_i.start()},J.addEventListener("sessionstart",Jc),J.addEventListener("sessionend",Qc),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(G),G=J.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,G,A),d=je.get(R,E.length),d.init(G),E.push(d),$.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),q.setFromProjectionMatrix($),C=this.localClippingEnabled,ee=ae.init(this.clippingPlanes,C),m=ye.get(R,S.length),m.init(),S.push(m),J.enabled===!0&&J.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&Ao(ce,G,-1/0,v.sortObjects)}Ao(R,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Z,X),he=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,he&&Ie.addToRenderList(m,R),this.info.render.frame++,ee===!0&&ae.beginShadows();const j=d.state.shadowsArray;ve.render(j,R,G),ee===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,V=m.transmissive;if(d.setupLights(),G.isArrayCamera){const ce=G.cameras;if(V.length>0)for(let _e=0,Se=ce.length;_e<Se;_e++){const Ee=ce[_e];tl(K,V,R,Ee)}he&&Ie.render(R);for(let _e=0,Se=ce.length;_e<Se;_e++){const Ee=ce[_e];el(m,R,Ee,Ee.viewport)}}else V.length>0&&tl(K,V,R,G),he&&Ie.render(R),el(m,R,G);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,G),ut.resetDefaultState(),x=-1,y=null,E.pop(),E.length>0?(d=E[E.length-1],ee===!0&&ae.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ao(R,G,j,K){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){K&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4($);const _e=te.update(R),Se=R.material;Se.visible&&m.push(R,_e,Se,j,le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const _e=te.update(R),Se=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),le.copy(R.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),le.copy(_e.boundingSphere.center)),le.applyMatrix4(R.matrixWorld).applyMatrix4($)),Array.isArray(Se)){const Ee=_e.groups;for(let Ne=0,ke=Ee.length;Ne<ke;Ne++){const be=Ee[Ne],$e=Se[be.materialIndex];$e&&$e.visible&&m.push(R,_e,$e,j,le.z,be)}}else Se.visible&&m.push(R,_e,Se,j,le.z,null)}}const ce=R.children;for(let _e=0,Se=ce.length;_e<Se;_e++)Ao(ce[_e],G,j,K)}function el(R,G,j,K){const V=R.opaque,ce=R.transmissive,_e=R.transparent;d.setupLightsView(j),ee===!0&&ae.setGlobalState(v.clippingPlanes,j),K&&pe.viewport(L.copy(K)),V.length>0&&_r(V,G,j),ce.length>0&&_r(ce,G,j),_e.length>0&&_r(_e,G,j),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function tl(R,G,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[K.id]===void 0&&(d.state.transmissionRenderTarget[K.id]=new gi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?ws:jn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ce=d.state.transmissionRenderTarget[K.id],_e=K.viewport||L;ce.setSize(_e.z,_e.w);const Se=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(U),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),he&&Ie.render(j);const Ee=v.toneMapping;v.toneMapping=fi;const Ne=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),d.setupLightsView(K),ee===!0&&ae.setGlobalState(v.clippingPlanes,K),_r(R,j,K),I.updateMultisampleRenderTarget(ce),I.updateRenderTargetMipmap(ce),Le.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let be=0,$e=G.length;be<$e;be++){const ht=G[be],ft=ht.object,qt=ht.geometry,Qe=ht.material,we=ht.group;if(Qe.side===cn&&ft.layers.test(K.layers)){const Nn=Qe.side;Qe.side=Dt,Qe.needsUpdate=!0,nl(ft,j,K,qt,Qe,we),Qe.side=Nn,Qe.needsUpdate=!0,ke=!0}}ke===!0&&(I.updateMultisampleRenderTarget(ce),I.updateRenderTargetMipmap(ce))}v.setRenderTarget(Se),v.setClearColor(U,D),Ne!==void 0&&(K.viewport=Ne),v.toneMapping=Ee}function _r(R,G,j){const K=G.isScene===!0?G.overrideMaterial:null;for(let V=0,ce=R.length;V<ce;V++){const _e=R[V],Se=_e.object,Ee=_e.geometry,Ne=K===null?_e.material:K,ke=_e.group;Se.layers.test(j.layers)&&nl(Se,G,j,Ee,Ne,ke)}}function nl(R,G,j,K,V,ce){R.onBeforeRender(v,G,j,K,V,ce),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(v,G,j,K,R,ce),V.transparent===!0&&V.side===cn&&V.forceSinglePass===!1?(V.side=Dt,V.needsUpdate=!0,v.renderBufferDirect(j,G,K,V,R,ce),V.side=Qt,V.needsUpdate=!0,v.renderBufferDirect(j,G,K,V,R,ce),V.side=cn):v.renderBufferDirect(j,G,K,V,R,ce),R.onAfterRender(v,G,j,K,V,ce)}function xr(R,G,j){G.isScene!==!0&&(G=ue);const K=Pe.get(R),V=d.state.lights,ce=d.state.shadowsArray,_e=V.state.version,Se=Ae.getParameters(R,V.state,ce,G,j),Ee=Ae.getProgramCacheKey(Se);let Ne=K.programs;K.environment=R.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(R.isMeshStandardMaterial?W:w).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Ne===void 0&&(R.addEventListener("dispose",Be),Ne=new Map,K.programs=Ne);let ke=Ne.get(Ee);if(ke!==void 0){if(K.currentProgram===ke&&K.lightsStateVersion===_e)return sl(R,Se),ke}else Se.uniforms=Ae.getUniforms(R),R.onBeforeCompile(Se,v),ke=Ae.acquireProgram(Se,Ee),Ne.set(Ee,ke),K.uniforms=Se.uniforms;const be=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(be.clippingPlanes=ae.uniform),sl(R,Se),K.needsLights=ff(R),K.lightsStateVersion=_e,K.needsLights&&(be.ambientLightColor.value=V.state.ambient,be.lightProbe.value=V.state.probe,be.directionalLights.value=V.state.directional,be.directionalLightShadows.value=V.state.directionalShadow,be.spotLights.value=V.state.spot,be.spotLightShadows.value=V.state.spotShadow,be.rectAreaLights.value=V.state.rectArea,be.ltc_1.value=V.state.rectAreaLTC1,be.ltc_2.value=V.state.rectAreaLTC2,be.pointLights.value=V.state.point,be.pointLightShadows.value=V.state.pointShadow,be.hemisphereLights.value=V.state.hemi,be.directionalShadowMap.value=V.state.directionalShadowMap,be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,be.spotShadowMap.value=V.state.spotShadowMap,be.spotLightMatrix.value=V.state.spotLightMatrix,be.spotLightMap.value=V.state.spotLightMap,be.pointShadowMap.value=V.state.pointShadowMap,be.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=ke,K.uniformsList=null,ke}function il(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=oo.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function sl(R,G){const j=Pe.get(R);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function uf(R,G,j,K,V){G.isScene!==!0&&(G=ue),I.resetTextureUnits();const ce=G.fog,_e=K.isMeshStandardMaterial?G.environment:null,Se=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Yt,Ee=(K.isMeshStandardMaterial?W:w).get(K.envMap||_e),Ne=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),be=!!j.morphAttributes.position,$e=!!j.morphAttributes.normal,ht=!!j.morphAttributes.color;let ft=fi;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=v.toneMapping);const qt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=qt!==void 0?qt.length:0,we=Pe.get(K),Nn=d.state.lights;if(ee===!0&&(C===!0||R!==y)){const nn=R===y&&K.id===x;ae.setState(K,R,nn)}let et=!1;K.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Nn.state.version||we.outputColorSpace!==Se||V.isBatchedMesh&&we.batching===!1||!V.isBatchedMesh&&we.batching===!0||V.isBatchedMesh&&we.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&we.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&we.instancing===!1||!V.isInstancedMesh&&we.instancing===!0||V.isSkinnedMesh&&we.skinning===!1||!V.isSkinnedMesh&&we.skinning===!0||V.isInstancedMesh&&we.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&we.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&we.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&we.instancingMorph===!1&&V.morphTexture!==null||we.envMap!==Ee||K.fog===!0&&we.fog!==ce||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ae.numPlanes||we.numIntersection!==ae.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==ke||we.morphTargets!==be||we.morphNormals!==$e||we.morphColors!==ht||we.toneMapping!==ft||we.morphTargetsCount!==Qe)&&(et=!0):(et=!0,we.__version=K.version);let dn=we.currentProgram;et===!0&&(dn=xr(K,G,V));let Vi=!1,$t=!1,Ds=!1;const dt=dn.getUniforms(),bn=we.uniforms;if(pe.useProgram(dn.program)&&(Vi=!0,$t=!0,Ds=!0),K.id!==x&&(x=K.id,$t=!0),Vi||y!==R){pe.buffers.depth.getReversed()?(H.copy(R.projectionMatrix),Md(H),Sd(H),dt.setValue(k,"projectionMatrix",H)):dt.setValue(k,"projectionMatrix",R.projectionMatrix),dt.setValue(k,"viewMatrix",R.matrixWorldInverse);const $n=dt.map.cameraPosition;$n!==void 0&&$n.setValue(k,re.setFromMatrixPosition(R.matrixWorld)),Ce.logarithmicDepthBuffer&&dt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&dt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,$t=!0,Ds=!0)}if(V.isSkinnedMesh){dt.setOptional(k,V,"bindMatrix"),dt.setOptional(k,V,"bindMatrixInverse");const nn=V.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),dt.setValue(k,"boneTexture",nn.boneTexture,I))}V.isBatchedMesh&&(dt.setOptional(k,V,"batchingTexture"),dt.setValue(k,"batchingTexture",V._matricesTexture,I),dt.setOptional(k,V,"batchingIdTexture"),dt.setValue(k,"batchingIdTexture",V._indirectTexture,I),dt.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&dt.setValue(k,"batchingColorTexture",V._colorsTexture,I));const Us=j.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&De.update(V,j,dn),($t||we.receiveShadow!==V.receiveShadow)&&(we.receiveShadow=V.receiveShadow,dt.setValue(k,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(bn.envMap.value=Ee,bn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(bn.envMapIntensity.value=G.environmentIntensity),$t&&(dt.setValue(k,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&hf(bn,Ds),ce&&K.fog===!0&&me.refreshFogUniforms(bn,ce),me.refreshMaterialUniforms(bn,K,F,Y,d.state.transmissionRenderTarget[R.id]),oo.upload(k,il(we),bn,I)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(oo.upload(k,il(we),bn,I),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&dt.setValue(k,"center",V.center),dt.setValue(k,"modelViewMatrix",V.modelViewMatrix),dt.setValue(k,"normalMatrix",V.normalMatrix),dt.setValue(k,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const nn=K.uniformsGroups;for(let $n=0,Zn=nn.length;$n<Zn;$n++){const rl=nn[$n];z.update(rl,dn),z.bind(rl,dn)}}return dn}function hf(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function ff(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,G,j){Pe.get(R.texture).__webglTexture=G,Pe.get(R.depthTexture).__webglTexture=j;const K=Pe.get(R);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const j=Pe.get(R);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,j=0){A=R,T=G,M=j;let K=!0,V=null,ce=!1,_e=!1;if(R){const Ee=Pe.get(R);if(Ee.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(k.FRAMEBUFFER,null),K=!1;else if(Ee.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Ee.__hasExternalTextures)I.rebindTextures(R,Pe.get(R.texture).__webglTexture,Pe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const be=R.depthTexture;if(Ee.__boundDepthTexture!==be){if(be!==null&&Pe.has(be)&&(R.width!==be.image.width||R.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);const ke=Pe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[G])?V=ke[G][j]:V=ke[G],ce=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?V=Pe.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[j]:V=ke,L.copy(R.viewport),N.copy(R.scissor),B=R.scissorTest}else L.copy(Q).multiplyScalar(F).floor(),N.copy(oe).multiplyScalar(F).floor(),B=Re;if(pe.bindFramebuffer(k.FRAMEBUFFER,V)&&K&&pe.drawBuffers(R,V),pe.viewport(L),pe.scissor(N),pe.setScissorTest(B),ce){const Ee=Pe.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ee.__webglTexture,j)}else if(_e){const Ee=Pe.get(R.texture),Ne=G||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ee.__webglTexture,j||0,Ne)}x=-1},this.readRenderTargetPixels=function(R,G,j,K,V,ce,_e){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){pe.bindFramebuffer(k.FRAMEBUFFER,Se);try{const Ee=R.texture,Ne=Ee.format,ke=Ee.type;if(!Ce.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-K&&j>=0&&j<=R.height-V&&k.readPixels(G,j,K,V,He.convert(Ne),He.convert(ke),ce)}finally{const Ee=A!==null?Pe.get(A).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(R,G,j,K,V,ce,_e){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){const Ee=R.texture,Ne=Ee.format,ke=Ee.type;if(!Ce.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-K&&j>=0&&j<=R.height-V){pe.bindFramebuffer(k.FRAMEBUFFER,Se);const be=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,be),k.bufferData(k.PIXEL_PACK_BUFFER,ce.byteLength,k.STREAM_READ),k.readPixels(G,j,K,V,He.convert(Ne),He.convert(ke),0);const $e=A!==null?Pe.get(A).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,$e);const ht=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await vd(k,ht,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,be),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ce),k.deleteBuffer(be),k.deleteSync(ht),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,j=0){R.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const K=Math.pow(2,-j),V=Math.floor(R.image.width*K),ce=Math.floor(R.image.height*K),_e=G!==null?G.x:0,Se=G!==null?G.y:0;I.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,_e,Se,V,ce),pe.unbindTexture()},this.copyTextureToTexture=function(R,G,j=null,K=null,V=0){R.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1],G=arguments[2],V=arguments[3]||0,j=null);let ce,_e,Se,Ee,Ne,ke,be,$e,ht;const ft=R.isCompressedTexture?R.mipmaps[V]:R.image;j!==null?(ce=j.max.x-j.min.x,_e=j.max.y-j.min.y,Se=j.isBox3?j.max.z-j.min.z:1,Ee=j.min.x,Ne=j.min.y,ke=j.isBox3?j.min.z:0):(ce=ft.width,_e=ft.height,Se=ft.depth||1,Ee=0,Ne=0,ke=0),K!==null?(be=K.x,$e=K.y,ht=K.z):(be=0,$e=0,ht=0);const qt=He.convert(G.format),Qe=He.convert(G.type);let we;G.isData3DTexture?(I.setTexture3D(G,0),we=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(I.setTexture2DArray(G,0),we=k.TEXTURE_2D_ARRAY):(I.setTexture2D(G,0),we=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const Nn=k.getParameter(k.UNPACK_ROW_LENGTH),et=k.getParameter(k.UNPACK_IMAGE_HEIGHT),dn=k.getParameter(k.UNPACK_SKIP_PIXELS),Vi=k.getParameter(k.UNPACK_SKIP_ROWS),$t=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ee),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ne),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ke);const Ds=R.isDataArrayTexture||R.isData3DTexture,dt=G.isDataArrayTexture||G.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const bn=Pe.get(R),Us=Pe.get(G),nn=Pe.get(bn.__renderTarget),$n=Pe.get(Us.__renderTarget);pe.bindFramebuffer(k.READ_FRAMEBUFFER,nn.__webglFramebuffer),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Zn=0;Zn<Se;Zn++)Ds&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pe.get(R).__webglTexture,V,ke+Zn),R.isDepthTexture?(dt&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pe.get(G).__webglTexture,V,ht+Zn),k.blitFramebuffer(Ee,Ne,ce,_e,be,$e,ce,_e,k.DEPTH_BUFFER_BIT,k.NEAREST)):dt?k.copyTexSubImage3D(we,V,be,$e,ht+Zn,Ee,Ne,ce,_e):k.copyTexSubImage2D(we,V,be,$e,ht+Zn,Ee,Ne,ce,_e);pe.bindFramebuffer(k.READ_FRAMEBUFFER,null),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else dt?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(we,V,be,$e,ht,ce,_e,Se,qt,Qe,ft.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(we,V,be,$e,ht,ce,_e,Se,qt,ft.data):k.texSubImage3D(we,V,be,$e,ht,ce,_e,Se,qt,Qe,ft):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,V,be,$e,ce,_e,qt,Qe,ft.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,V,be,$e,ft.width,ft.height,qt,ft.data):k.texSubImage2D(k.TEXTURE_2D,V,be,$e,ce,_e,qt,Qe,ft);k.pixelStorei(k.UNPACK_ROW_LENGTH,Nn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,et),k.pixelStorei(k.UNPACK_SKIP_PIXELS,dn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Vi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$t),V===0&&G.generateMipmaps&&k.generateMipmap(we),pe.unbindTexture()},this.copyTextureToTexture3D=function(R,G,j=null,K=null,V=0){return R.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,R=arguments[2],G=arguments[3],V=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,j,K,V)},this.initRenderTarget=function(R){Pe.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),pe.unbindTexture()},this.resetState=function(){T=0,M=0,A=null,pe.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class cu extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class I_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new O;class Lc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lu=new O,uu=new Je,hu=new Je,D_=new O,fu=new Fe,kr=new O,ta=new Pn,du=new Fe,na=new vo;class U_ extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ul,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kr),this.boundingBox.expandByPoint(kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kr),this.boundingSphere.expandByPoint(kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(s),e.ray.intersectsSphere(ta)!==!1&&(du.copy(s).invert(),na.copy(e.ray).applyMatrix4(du),!(this.boundingBox!==null&&na.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,na)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ul?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;uu.fromBufferAttribute(s.attributes.skinIndex,e),hu.fromBufferAttribute(s.attributes.skinWeight,e),lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=hu.getComponent(r);if(o!==0){const a=uu.getComponent(r);fu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(D_.copy(lu).applyMatrix4(fu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Lh extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pc extends Tt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=bt,u=bt,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pu=new Fe,N_=new Fe;class Ic{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:N_;pu.multiplyMatrices(a,t[r]),pu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ic(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Pc(t,e,e,en,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Lh),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class ac extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new Fe,mu=new Fe,zr=[],gu=new hn,F_=new Fe,ks=new Ke,zs=new Pn;class ao extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),gu.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(gu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),zs.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),mu.multiplyMatrices(n,ss),ks.matrixWorld=mu,ks.raycast(e,zr);for(let o=0,a=zr.length;o<a;o++){const c=zr[o];c.instanceId=r,c.object=this,t.push(c)}zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pc(new Float32Array(s*this.count),s,this.count,Ec,vn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ph extends ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ho=new O,fo=new O,_u=new Fe,Hs=new vo,Hr=new Pn,ia=new O,xu=new O;class Dc extends mt{constructor(e=new Ht,t=new Ph){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ho.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ho.distanceTo(fo);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;_u.copy(s).invert(),Hs.copy(e.ray).applyMatrix4(_u);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=u.getX(_),S=u.getX(_+1),E=Gr(this,e,Hs,c,d,S);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Gr(this,e,Hs,c,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=Gr(this,e,Hs,c,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Gr(this,e,Hs,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(ho.fromBufferAttribute(o,s),fo.fromBufferAttribute(o,r),t.distanceSqToSegment(ho,fo,ia,xu)>n)return;ia.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ia);if(!(c<e.near||c>e.far))return{distance:c,point:xu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const yu=new O,vu=new O;class O_ extends Dc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)yu.fromBufferAttribute(t,s),vu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yu.distanceTo(vu);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B_ extends Dc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ih extends ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mu=new Fe,cc=new vo,Vr=new Pn,Wr=new O;class k_ extends mt{constructor(e=new Ht,t=new Ih){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Mu.copy(s).invert(),cc.copy(e.ray).applyMatrix4(Mu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);Wr.fromBufferAttribute(h,m),Su(Wr,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Wr.fromBufferAttribute(h,g),Su(Wr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Su(i,e,t,n,s,r,o){const a=cc.distanceSqToPoint(i);if(a<t){const c=new O;cc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Dh extends Tt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uc extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new O,u=new Oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=n+h/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _n extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;S(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new pt(h,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(p,2));function S(){const v=new O,b=new O;let T=0;const M=(t-e)/n;for(let A=0;A<=r;A++){const x=[],y=A/r,L=y*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,U=B*c+a,D=Math.sin(U),P=Math.cos(U);b.x=L*D,b.y=-y*n+m,b.z=L*P,h.push(b.x,b.y,b.z),v.set(D,M,P).normalize(),f.push(v.x,v.y,v.z),p.push(B,1-y),x.push(g++)}_.push(x)}for(let A=0;A<s;A++)for(let x=0;x<r;x++){const y=_[x][A],L=_[x+1][A],N=_[x+1][A+1],B=_[x][A+1];(e>0||x!==0)&&(u.push(y,L,B),T+=3),(t>0||x!==r-1)&&(u.push(L,N,B),T+=3)}l.addGroup(d,T,0),d+=T}function E(v){const b=g,T=new Oe,M=new O;let A=0;const x=v===!0?e:t,y=v===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const L=g;for(let N=0;N<=s;N++){const U=N/s*c+a,D=Math.cos(U),P=Math.sin(U);M.x=x*P,M.y=m*y,M.z=x*D,h.push(M.x,M.y,M.z),f.push(0,y,0),T.x=D*.5+.5,T.y=P*.5*y+.5,p.push(T.x,T.y),g++}for(let N=0;N<s;N++){const B=b+N,U=L+N;v===!0?u.push(U,U+1,B):u.push(U+1,U,B),A+=3}l.addGroup(d,A,v===!0?1:2),d+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nc extends _n{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fc extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const E=new O,v=new O,b=new O;for(let T=0;T<t.length;T+=3)p(t[T+0],E),p(t[T+1],v),p(t[T+2],b),c(E,v,b,S)}function c(S,E,v,b){const T=b+1,M=[];for(let A=0;A<=T;A++){M[A]=[];const x=S.clone().lerp(v,A/T),y=E.clone().lerp(v,A/T),L=T-A;for(let N=0;N<=L;N++)N===0&&A===T?M[A][N]=x:M[A][N]=x.clone().lerp(y,N/L)}for(let A=0;A<T;A++)for(let x=0;x<2*(T-A)-1;x++){const y=Math.floor(x/2);x%2===0?(f(M[A][y+1]),f(M[A+1][y]),f(M[A][y])):(f(M[A][y+1]),f(M[A+1][y+1]),f(M[A+1][y]))}}function l(S){const E=new O;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(S),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function u(){const S=new O;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const v=m(S)/2/Math.PI+.5,b=d(S)/Math.PI+.5;o.push(v,1-b)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const E=o[S+0],v=o[S+2],b=o[S+4],T=Math.max(E,v,b),M=Math.min(E,v,b);T>.9&&M<.1&&(E<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),b<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function p(S,E){const v=S*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function g(){const S=new O,E=new O,v=new O,b=new O,T=new Oe,M=new Oe,A=new Oe;for(let x=0,y=0;x<r.length;x+=9,y+=6){S.set(r[x+0],r[x+1],r[x+2]),E.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),T.set(o[y+0],o[y+1]),M.set(o[y+2],o[y+3]),A.set(o[y+4],o[y+5]),b.copy(S).add(E).add(v).divideScalar(3);const L=m(b);_(T,y+0,S,L),_(M,y+2,E,L),_(A,y+4,v,L)}}function _(S,E,v,b){b<0&&S.x===1&&(o[E]=S.x-1),v.x===0&&v.z===0&&(o[E]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.vertices,e.indices,e.radius,e.details)}}class Oc extends Fc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oc(e.radius,e.detail)}}class dr extends Ht{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=e;const f=(t-e)/s,p=new O,g=new Oe;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let d=0;d<n;d++){const S=d+m,E=S,v=S+n+1,b=S+n+2,T=S+1;a.push(E,v,T),a.push(v,b,T)}}this.setIndex(a),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bc extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new O,f=new O,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const S=[],E=d/n;let v=0;d===0&&o===0?v=.5/t:d===n&&c===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const T=b/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+E*a),h.y=e*Math.cos(o+E*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-E),S.push(l++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){const E=u[d][S+1],v=u[d][S],b=u[d+1][S],T=u[d+1][S+1];(d!==0||o>0)&&p.push(E,v,T),(d!==n-1||c<Math.PI)&&p.push(v,b,T)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kc extends ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends kc{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class z_ extends ln{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Hi extends ln{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Xr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function H_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function G_(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Eu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Uh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class pr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class V_ extends pr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hl,endingEnd:hl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fl:r=e,a=2*t-n;break;case dl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fl:o=e,c=2*n-t;break;case dl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let b=0;b!==a;++b)r[b]=d*o[u+b]+S*o[l+b]+E*o[c+b]+v*o[h+b];return r}}class W_ extends pr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class X_ extends pr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xr(t,this.TimeBufferType),this.values=Xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xr(e.times,Array),values:Xr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new X_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new W_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new V_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cr:t=this.InterpolantFactoryMethodDiscrete;break;case lr:t=this.InterpolantFactoryMethodLinear;break;case wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return lr;case this.InterpolantFactoryMethodSmooth:return wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&H_(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=lr;class Ls extends Dn{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=cr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Nh extends Dn{}Nh.prototype.ValueTypeName="color";class Ms extends Dn{}Ms.prototype.ValueTypeName="number";class Y_ extends pr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Sn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ss extends Dn{InterpolantFactoryMethodLinear(e){return new Y_(this.times,this.values,this.getValueSize(),e)}}Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends Dn{constructor(e,t,n){super(e,t,n)}}Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=cr;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends Dn{}Es.prototype.ValueTypeName="vector";class q_{constructor(e="",t=-1,n=[],s=Xf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(K_(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=G_(c);c=Eu(c,1,u),l=Eu(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ms(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,_){if(p.length!==0){const m=[],d=[];Uh(p,m,d,g),m.length!==0&&_.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let S=0;S!==f[g].morphTargets.length;++S){const E=f[g];m.push(E.time),d.push(E.morphTarget===_?1:0)}s.push(new Ms(".morphTargetInfluence["+_+"]",m,d))}c=p.length*o}else{const p=".bones["+t[h].name+"]";n(Es,p+".position",f,"pos",s),n(Ss,p+".quaternion",f,"rot",s),n(Es,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function j_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return Nh;case"quaternion":return Ss;case"bool":case"boolean":return Ls;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function K_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=j_(i.type);if(i.times===void 0){const t=[],n=[];Uh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $_{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Fh=new $_;class Is{constructor(e){this.manager=e!==void 0?e:Fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class Z_ extends Error{constructor(e,t){super(e),this.response=t}}class Oh extends Is{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=li.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:s});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Hn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){S();function S(){h.read().then(({done:E,value:v})=>{if(E)d.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,M=u.length;T<M;T++){const A=u[T];A.onProgress&&A.onProgress(b)}d.enqueue(v),S()}},E=>{d.error(E)})}}});return new Response(m)}else throw new Z_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{li.add(e,l);const u=Hn[e];delete Hn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Hn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Hn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class J_ extends Is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ur("img");function c(){u(),li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Q_ extends Is{constructor(e){super(e)}load(e,t,n,s){const r=new Tt,o=new J_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class So extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ex extends So{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sa=new Fe,bu=new O,Tu=new O;class zc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),Tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tu),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tx extends zc{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class nx extends So{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Au=new Fe,Gs=new O,ra=new O;class ix extends zc{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),ra.copy(n.position),ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ra),n.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au)}}class sx extends So{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ix}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rx extends zc{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bh extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new rx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class er{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ox extends Is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return li.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),li.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(e,c),r.manager.itemStart(e)}}const Hc="\\[\\]\\.:\\/",ax=new RegExp("["+Hc+"]","g"),Gc="[^"+Hc+"]",cx="[^"+Hc.replace("\\.","")+"]",lx=/((?:WC+[\/:])*)/.source.replace("WC",Gc),ux=/(WCOD+)?/.source.replace("WCOD",cx),hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),fx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),dx=new RegExp("^"+lx+ux+hx+fx+"$"),px=["material","materials","bones","map"];class mx{constructor(e,t,n){const s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ax,"")}static parseTrackName(e){const t=dx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);px.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=mx;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);const gx={minX:-18,maxX:18,minY:-4,maxY:516},_x={x:0,y:4,heading:0},xx=[{id:"company",name:"회사",y0:-4,y1:122,ground:"#C9CDD2"},{id:"alley",name:"골목",y0:122,y1:250,ground:"#9A8476"},{id:"city",name:"도시",y0:250,y1:382,ground:"#C2C6CB"},{id:"hospital",name:"병원",y0:382,y1:516,ground:"#8CC56E"}],yx=[{id:"company-mid",x:0,y:62,radius:3},{id:"alley",x:0,y:124,radius:3},{id:"alley-mid",x:0,y:188,radius:3},{id:"city",x:0,y:252,radius:3},{id:"city-mid",x:0,y:318,radius:3},{id:"hospital-front",x:0,y:384,radius:3},{id:"hospital-mid",x:0,y:440,radius:3}],vx={x:0,y:496,radius:3},Mx=[],Sx=[{id:"hq",model:"kenney/city-kit-commercial/building-e",x:0,y:0,rotY:0,scale:2.4},{id:"hospital",model:"hospital",x:0,y:502,rotY:0,scale:2}],kh={bounds:gx,spawn:_x,zones:xx,checkpoints:yx,hospital:vx,obstacles:Mx,decor:Sx};function wu(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ht;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Ru(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][f]);const g=Ru(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Ru(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new zt(o,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){const _=u.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Cu(i,e){if(e===Yf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===sc||e===hh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===sc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Ex extends Is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new Gx(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=er.extractUrlBase(e);o=er.resolveURL(l,this.path)}else o=er.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Oh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zh){try{o[We.KHR_BINARY_GLTF]=new Vx(e)}catch(h){s&&s(h);return}r=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ny(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:o[h]=new Ax;break;case We.KHR_DRACO_MESH_COMPRESSION:o[h]=new Wx(r,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[h]=new Xx;break;case We.KHR_MESH_QUANTIZATION:o[h]=new Yx;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function bx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tx{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Te(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Yt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Bh(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new sx(u),l.distance=h;break;case"spot":l=new nx(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Wn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Ax{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){const s=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(s)}}class wx{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Rx{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(r)}}class Cx{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Lx{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Px{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Ix{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Dx{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}}class Ux{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Nx{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(r)}}class Fx{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Ox{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Bx{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class kx{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zx{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Hx{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}}class Gx{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==rn.TRIANGLES&&l.mode!==rn.TRIANGLE_STRIP&&l.mode!==rn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,p=[];for(const g of h){const _=new Fe,m=new O,d=new Sn,S=new O(1,1,1),E=new ao(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,v),c.SCALE&&S.fromBufferAttribute(c.SCALE,v),E.setMatrixAt(v,_.compose(m,d,S));for(const v in c)if(v==="_COLOR_0"){const b=c[v];E.instanceColor=new ac(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);mt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),p.push(E)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const zh="glTF",Vs=12,Lu={JSON:1313821514,BIN:5130562};class Vx{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Vs,r=new DataView(e,Vs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Lu.JSON){const l=new Uint8Array(e,Vs+o,a);this.content=n.decode(l)}else if(c===Lu.BIN){const l=Vs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Wx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=lc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=lc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=fs[f.componentType];l[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(p)},a,l,Yt,f)})})}}class Xx{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Yx{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Hh extends pr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*l,_=g-l,m=-2*p+3*f,d=p-f,S=1-m,E=d-f+h;for(let v=0;v!==a;v++){const b=o[_+v+a],T=o[_+v+c]*u,M=o[g+v+a],A=o[g+v]*u;r[v]=S*b+E*T+m*M+d*A}return r}}const qx=new Sn;class jx extends Hh{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return qx.fromArray(r).normalize().toArray(r),r}}const rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pu={9728:bt,9729:Kt,9984:th,9985:eo,9986:js,9987:Xn},Iu={33071:ci,33648:lo,10497:ki},oa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Kx={CUBICSPLINE:void 0,LINEAR:lr,STEP:cr},aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $x(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new kc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qt})),i.DefaultMaterial}function bi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zx(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Jx(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Qx(i){let e;const t=i.extensions&&i.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ca(t.attributes):e=i.indices+":"+ca(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ca(i.targets[n]);return e}function ca(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function uc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ey(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ty=new Fe;class ny{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Q_(this.options.manager):this.textureLoader=new ox(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Oh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return bi(r,a,s),Wn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(er.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=oa[s.type],a=fs[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new zt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=oa[s.type],l=fs[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==h){const d=Math.floor(f/p),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let E=t.cache.get(S);E||(_=new l(a,d*p,s.count*p/u),E=new I_(_,p/u),t.cache.add(S,E)),m=new Lc(E,c,f%p/u,g)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new zt(_,c,g);if(s.sparse!==void 0){const d=oa.SCALAR,S=fs[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,b=new S(o[1],E,s.sparse.count*d),T=new l(o[2],v,s.sparse.count*c);a!==null&&(m=new zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,A=b.length;M<A;M++){const x=b[M];if(m.setX(x,T[M*c]),c>=2&&m.setY(x,T[M*c+1]),c>=3&&m.setZ(x,T[M*c+2]),c>=4&&m.setW(x,T[M*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Pu[f.magFilter]||Kt,u.minFilter=Pu[f.minFilter]||Xn,u.wrapS=Iu[f.wrapS]||ki,u.wrapT=Iu[f.wrapT]||ki,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==bt&&u.minFilter!==Kt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Tt(_);m.needsUpdate=!0,f(m)}),t.load(er.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Wn(h,o),h.userData.mimeType=o.mimeType||ey(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ih,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ph,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return kc}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[We.KHR_MATERIALS_UNLIT]){const h=s[We.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Yt),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Ct)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=cn);const u=r.alphaMode||aa.OPAQUE;if(u===aa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===aa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Lt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Lt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Lt){const h=r.emissiveFactor;a.emissive=new Te().setRGB(h[0],h[1],h[2],Yt)}return r.emissiveTexture!==void 0&&o!==Lt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Wn(h,r),t.associations.set(h,{materials:e}),r.extensions&&bi(s,h,r),h})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Du(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Qx(l),h=s[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[We.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Du(new Ht,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?$x(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let d;const S=l[p];if(m.mode===rn.TRIANGLES||m.mode===rn.TRIANGLE_STRIP||m.mode===rn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new U_(_,S):new Ke(_,S),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===rn.TRIANGLE_STRIP?d.geometry=Cu(d.geometry,hh):m.mode===rn.TRIANGLE_FAN&&(d.geometry=Cu(d.geometry,sc));else if(m.mode===rn.LINES)d=new O_(_,S);else if(m.mode===rn.LINE_STRIP)d=new Dc(_,S);else if(m.mode===rn.LINE_LOOP)d=new B_(_,S);else if(m.mode===rn.POINTS)d=new k_(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Jx(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Wn(d,r),m.extensions&&bi(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&bi(s,h[0],r),h[0];const f=new ct;r.extensions&&bi(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(dh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new hr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new Fe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ic(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const p=s.channels[h],g=s.samplers[p.sampler],_=p.target,m=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",S)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],g=h[2],_=h[3],m=h[4],d=[];for(let S=0,E=f.length;S<E;S++){const v=f[S],b=p[S],T=g[S],M=_[S],A=m[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const x=n._createAnimationTracks(v,b,T,M,A);if(x)for(let y=0;y<x.length;y++)d.push(x[y])}return new q_(r,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,ty)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Lh:l.length>1?u=new ct:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Wn(u,r),r.extensions&&bi(n,u,r),r.matrix!==void 0){const h=new Fe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),Wn(r,n),n.extensions&&bi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,p]of s.associations)(f instanceof ln||f instanceof Tt)&&h.set(f,p);return u.traverse(f=>{const p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];si[r.path]===si.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(si[r.path]){case si.weights:l=Ms;break;case si.rotation:l=Ss;break;case si.position:case si.scale:l=Es;break;default:switch(n.itemSize){case 1:l=Ms;break;case 2:case 3:default:l=Es;break}break}const u=s.interpolation!==void 0?Kx[s.interpolation]:lr,h=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const g=new l(c[f]+"."+si[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=uc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ss?jx:Hh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iy(i,e,t){const n=e.attributes,s=new hn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){const u=uc(fs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,c=new O;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const _=uc(fs[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Pn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Du(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=lc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Xe.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Wn(i,e),iy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Zx(i,e.targets,t):i})}const Vc=["#242637","#373B51","#565A73","#8994A7","#C3CAD2","#F3E5CC","#FFFFFF","#F6BD86","#DF927A","#A75C60","#6A3948","#8B5C48","#C98B5A","#E5C06C","#F3E07B","#BBCA82","#6AAB82","#3F876E","#2C605D","#3D6A97","#609AC1","#91C7DA","#CDDCE1","#684C89","#986BB0","#BA91C4","#DAA3B8","#B74C5A","#E46E58","#F3A54A","#F7D45B","#F7F0B5"],Wc=["#131A25","#FAF0DB","#F06E5B","#66D2BB"],Gh=i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16));Vc.map(Gh);Wc.map(Gh);const Zs=1,Xt=2.5,sy=1.5,Eo={180:[180,320],216:[216,384],270:[270,480],360:[360,640],450:[450,800],540:[540,960],720:[720,1280]},Xc=[45,55,65],ry=45,oy="color",ay="360",bo=[26,20,15],cy=20,ly=.58,Ws=.35,Yr=1.6,uy=.4,Ti=.35,la={chair:4.5,alcohol:2.2,building:1.5},ua={chair:2.4,alcohol:1.8,building:.6},hc={time:1,drag:3,minImpact:6.5},ai={detect:5,speed:3,patrolSpeed:1.3,chaseTime:4,cooldown:3,disrupt:3,power:2.2},Pt={range:8,period:2.6,charge:.75,shotSpeed:7.5,shotLife:2.5,shotRadius:.24,shots:3,spread:.32},An={time:3,first:.45,gap:[.6,1],warn:.2,spin:2.6,kick:3.5,sway:1.1},hy=1.6,fy=1.5;function Tn(i,e,t){return[i,t,-e]}function dy(i){return-i}function py(i,e){const t=i*Math.PI/180;return[0,Math.sin(t)*e,Math.cos(t)*e]}function my(i,e,t){const n=i*Math.PI/180;return(t-.5)*e/Math.sin(n)}function gy(i,e,t,n){const s=(l,u,h)=>l<<16|u<<8|h,r=l=>parseInt(l.slice(1),16),o=new Set(t.map(r)),a=new Set(n.map(r));let c=0;for(let l=0,u=0;u<i.length;u+=4,l++){const h=e[l]?a:o;(i[u+3]!==255||!h.has(s(i[u],i[u+1],i[u+2])))&&c++}return c}function mr(i){return["PLAYING","RESPAWN","PAUSED"].includes(i.state)?i.stunnedLeft>0?"stunned":i.disruptedLeft>0?"runaway":null:null}function Vh(i){return mr(i)??(["PLAYING","RESPAWN","PAUSED"].includes(i.state)&&i.drunkLeft>0?"drunk":null)}function _y(i,e){const t=Vh(i);i.gameTime<e.noticeTime&&(e.status=null),t!==e.status&&(e.status=t,e.statusUntil=i.gameTime+(t==="drunk"?1:.5)),e.noticeTime=i.gameTime}const Uu=[["#E46E58",.17,1],["#F3A54A",.13,.8],["#F7D45B",.09,.58],["#F7F0B5",.05,.32]],xy="#B74C5A";function yy(i,e){const t=new hn().setFromObject(e),n={heat:{value:0},zHead:{value:t.min.z},zFeet:{value:t.max.z}};for(const s of i)s.onBeforeCompile=r=>{Object.assign(r.uniforms,n),r.vertexShader=`varying float vModelZ;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vModelZ = position.z;`),r.fragmentShader=`uniform float heat;
uniform float zHead;
uniform float zFeet;
varying float vModelZ;
`+r.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  float line = zFeet - heat * (zFeet - zHead);
  if (heat > 0.0 && vModelZ >= line) gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.78, 0.08, 0.05), 0.85);`)},s.customProgramCacheKey=()=>"heat-fill",s.needsUpdate=!0;return n.heat}function vy(i,e,t){const n=[];t.traverse(b=>{b.isMesh&&!b.userData.outline&&!n.includes(b.material)&&n.push(b.material)});const s=yy(n,t),r={};for(const b of["L","R"]){const T=new ct;T.name=`exhaust_${b}`,Uu.forEach(([M,A,x],y)=>{const L=new Ke(new Nc(A,x,5),new Lt({color:M,depthWrite:!1}));L.rotation.x=Math.PI/2,L.position.z=x/2,L.renderOrder=10+y,T.add(L)}),e[`nozzle${b}`].add(T),r[b]=T}const o=new ct;o.name="hit_stars";for(let b=0;b<3;b++){const T=new Ke(new Oc(.09,0),new Lt({color:"#F7D45B"}));T.position.set(Math.cos(b*2.09)*.35,.25,Math.sin(b*2.09)*.35),o.add(T)}o.visible=!1,e.head.add(o);let a=-1,c=-1,l=null,u=0;const h=new Ke(new dr(.7,.79,12),new Lt({color:"#6AAB82",side:cn}));h.name="checkpoint_pulse",h.rotation.x=-Math.PI/2,h.visible=!1,i.add(h);const f=48,p=["#F7D45B","#F3A54A","#E46E58"],g=new tn(.09,.09,.09),_=Array.from({length:f},(b,T)=>{const M=new Ke(g,new Lt({color:p[T%3]}));return M.name="feedback_spark",M.visible=!1,i.add(M),{m:M,v:new O,life:0,gravity:9}});let m=0;const d={L:0,R:0},S=new O,E=new O,v=(b,T=3,M=null,A=.4,x=2,y=9)=>{for(let L=0;L<b;L++){const N=_[m++%f];N.m.position.copy(S),N.v.copy(E).multiplyScalar(T).add(new O((Math.random()-.5)*x,Math.random()*x,(Math.random()-.5)*x)),N.life=A,N.gravity=y,N.m.material.color.set(M??p[L%3]),N.m.scale.setScalar(1),N.m.visible=!0}};return function(T,M,A){const x=T!==l||T.gameTime<u||A.some(P=>P.type==="respawn"),y=x?0:Math.max(0,Math.min(.1,T.gameTime-u));if(x){a=c=-1;for(const P of _)P.m.visible=!1;d.L=d.R=0}l=T,u=T.gameTime;for(const P of A)P.type==="hit"&&(P.kind!=="spicy"&&(a=T.gameTime+.1),S.set(P.x-P.nx*.3,Xt,-P.y+P.ny*.3),E.set(P.nx,.2,-P.ny).normalize(),v(10,2.5,{building:"#F3A54A",chair:"#F7D45B",alcohol:"#91C7DA",spicy:"#E46E58"}[P.kind],.32,3)),P.type==="checkpoint"&&(c=T.gameTime,h.position.set(P.x,Xt,-P.y),S.copy(h.position),E.set(0,1,0),v(14,1.4,"#6AAB82",.55,2.5,4));o.visible=mr(T)==="stunned",o.rotation.y=T.gameTime*6;const L=T.gameTime-c;h.visible=c>=0&&L<.55,h.scale.setScalar(.6+L*2.4);const N=T.disruptedLeft>0;s.value=T.state==="PLAYING"||T.state==="RESPAWN"?Math.min(1,Math.max(M.L.overTime,M.R.overTime)/M.L.fullHoldTime):0;const B=N&&Math.floor(T.gameTime*16)%2===0,U=T.gameTime<a?1.5:1,D=T.drunkLeft>0;for(const P of n)P.color.setRGB(U,B?.3:(D?.68:1)*U,B?.3:(D?.74:1)*U);for(const P of["L","R"]){const{effective:Y,overTime:F}=M[P],Z=F>0?1.6+.15*Math.sin(T.gameTime*40+(P==="L"?0:1.7)):1,X=P==="L"?0:2.1,Q=1+.07*Math.sin(Math.floor(T.gameTime*6)*1.7+X),oe=N?1.8+.6*Math.sin(T.gameTime*55+X):Q;r[P].visible=Y>.02;const Re=(.6+.4*Y)*(N?1.4:1)*(2-Q);r[P].scale.set(Re,Re,Math.max(Y,.01)*1.1*Z*oe),r[P].children[0].material.color.set(N?xy:Uu[0][0]),d[P]+=y*(N&&Y>.3?36:Y>.7?8:0);const q=Math.floor(d[P]);if(d[P]-=q,q){const ee=e[`nozzle${P}`];ee.getWorldPosition(S),E.set(0,0,1).transformDirection(ee.matrixWorld),v(q,N?4:2.5,null,N?.4:.22,N?3:.7)}}for(const P of _)P.m.visible&&(P.life-=y,P.v.y-=P.gravity*y,P.m.position.addScaledVector(P.v,y),P.m.visible=P.life>0,P.m.scale.setScalar(Math.min(1,Math.max(0,P.life*8))))}}const My=["upper_sleeve","elbow_sleeve","rolled_cuff","forearm","hand"],Sy=["thigh","knee","calf","shoe"],Ey=["face","006_hair_cap","007_hair_fringe__1","011_hair_fringe_1","head"],by=["010_eye__1","014_eye_1"],Ty=1.3,Ay=1.3,Nu=new Sn,wy=new un,Ry=new O(0,.1,.3);function qr(i,e,t){const n=new ct;n.position.copy(t),i.add(n);for(const s of e){const r=i.getObjectByName(s);r&&n.attach(r)}return n}const jr=(i,e,t,n=180,s=22)=>(i.vel+=((e-i.x)*n-i.vel*s)*t,i.x+=i.vel*t,i.x);function Cy(i,e){const t=new hn,n={},s={},r={};for(const[g,_]of[["L",-1],["R",1]]){const m=i.getObjectByName(`seat_${g}`),d=m?t.setFromObject(m).getCenter(new O):new O(_*.12,.08,.46),S=e[`nozzle${g}`];n[g]={group:qr(i,[`seat_${g}`],d),centre:d,nozzle:S,rest:S.position.clone(),size:1},s[g]=qr(i,My.map(E=>`${E}_${g}`),new O(_*.2,0,-.34)),s[g].userData.rest=s[g].position.clone(),r[g]={group:qr(i,Sy.map(E=>`${E}_${g}`),new O(_*.18,0,.4)),kick:{x:0,vel:0},p:0}}const o={group:qr(i,Ey,new O(0,.02,-.4)),tilt:{x:0,vel:0},nod:{x:0,vel:0}};o.group.scale.setScalar(Ay);const a=by.map(g=>i.getObjectByName(g)).filter(Boolean),c={x:0,vel:0};let l=0,u=null,h=2,f=0,p=0;return function(_,m,d=[]){_!==u&&(l=_.gameTime,u=_);const S=Math.min(.05,Math.max(0,_.gameTime-l)),E=_.gameTime;l=E;const v=_.state==="PLAYING"||_.state==="RESPAWN",b=v&&_.disruptedLeft>0,T=v&&_.stunnedLeft>0;for(const D of["L","R"]){const P=n[D],Y=v?m[D].p:0,F=1+Ty*Y**1.4+(Y>.5?.04*Math.sin(E*30+(D==="L"?0:1.3)):0);P.size+=(F-P.size)*(1-Math.exp(-14*S)),P.group.scale.set(P.size,P.size*1.1,1+(P.size-1)*.8),P.nozzle.position.copy(P.rest).sub(P.centre).multiply(P.group.scale).add(P.centre)}let M=0;for(const D of["L","R"]){const P=v?m[D].p:0,Y=S>0?Math.max(0,P-r[D].p)/S:0;r[D].p=P,M=Math.max(M,Math.min(1,Y/3)),Y>1&&(r[D].kick.vel-=Y*1.2)}for(const D of d)D.type==="hit"&&(c.vel-=9);for(const D of d)D.type==="hiccup"&&(c.vel+=12);const A=v&&_.drunkLeft>0&&_.hiccupAt-E<An.warn&&_.hiccupAt>E;M>0&&(c.vel+=M*6);const x=jr(c,0,S,260,16),y=A?Math.sin(E*90)*.06:0;i.scale.set(1-x*.12+y,1-x*.12-y,1+x*.22);const L=v?(m.L.effective+m.R.effective)/2:0;f+=S*(4+L*10);for(const[D,P,Y]of[["L",-1,0],["R",1,Math.PI]]){const F=r[D].group,Z=jr(r[D].kick,0,S,120,14);b?F.rotation.set(Math.sin(E*21+Y)*.6,P*Math.sin(E*15+Y)*.5,P*Math.sin(E*27+Y)*.4):T?F.rotation.set(-.35,0,P*-.25):F.rotation.set(Math.sin(f+Y)*.22+Z*.5,P*(Math.sin(f+Y)*.12-Z*.2),0)}p+=((b?1:0)-p)*(1-Math.exp(-(b?18:10)*S));for(const[D,P,Y]of[["L",-1,0],["R",1,2.2]]){const F=s[D];if(T?F.rotation.set(.3,0,P*-.35):F.rotation.set(Math.sin(f*.5+Y)*.08,0,P*Math.sin(f*.5+Y)*.06),p>.01){const Z=Math.sin(E*31+Y)*.12;Nu.setFromEuler(wy.set(-.8+Z,-P*3.05,P*Z,"XYZ")),F.quaternion.slerp(Nu,p),F.position.copy(F.userData.rest).addScaledVector(Ry,p)}else F.position.copy(F.userData.rest)}const N=jr(o.tilt,v?Math.max(-.35,Math.min(.35,-_.omega*.12)):0,S),B=jr(o.nod,M*.25,S,200,18);b?o.group.rotation.set(Math.sin(E*19)*.15,Math.sin(E*13)*.3,Math.sin(E*23)*.2):T?o.group.rotation.set(.25,Math.sin(E*3)*.3,Math.sin(E*2.5)*.2):o.group.rotation.set(B,0,N),E>h+.12&&(h=E+2+Math.random()*3);const U=T||E>h&&E<h+.12;for(const D of a)D.scale.y=U?.15:1}}const Fu="#1B2333";let Ai=null;const ha=new WeakMap;function Ly(){return Ai||(Ai=new Pc(new Uint8Array([140,140,140,255,205,205,205,255,255,255,255,255]),3,1,en),Ai.minFilter=Ai.magFilter=bt,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}function Wh(i,{width:e=.035,minPart:t=.09}={}){const n=new Map,s={[Dt]:new Lt({color:Fu,side:Dt}),[Qt]:new Lt({color:Fu,side:Qt})},r=[];i.traverse(l=>{l.isMesh&&!l.userData.outline&&r.push(l)});const o=new hn,a=new O,c=new O;for(const l of r){l.geometry.attributes.normal||(l.geometry=Iy(l.geometry));const u=l.material;if(n.has(u)||n.set(u,new z_({color:u.color?u.color.clone():new Te("#FFFFFF"),map:u.map??null,vertexColors:!!l.geometry.attributes.color,gradientMap:Ly(),emissive:u.emissive?u.emissive.clone():new Te(0),side:u.side??Qt})),l.material=n.get(u),l.geometry.computeBoundingBox(),o.copy(l.geometry.boundingBox).getSize(a),Math.max(a.x,a.y,a.z)<t)continue;o.getCenter(c);const h=new Ke(l.geometry,s[Py(l.geometry)<0?Qt:Dt]);h.userData.outline=!0,h.castShadow=h.receiveShadow=!1,h.scale.set(1+2*e/Math.max(a.x,.02),1+2*e/Math.max(a.y,.02),1+2*e/Math.max(a.z,.02)),h.position.copy(c).multiply(new O(1,1,1).sub(h.scale)),l.add(h)}return n}function Py(i){const e=i.attributes.position,t=i.index,n=t?t.count:e.count,s=new O,r=new O,o=new O;let a=0;for(let c=0;c+2<n;c+=3)s.fromBufferAttribute(e,t?t.getX(c):c),r.fromBufferAttribute(e,t?t.getX(c+1):c+1),o.fromBufferAttribute(e,t?t.getX(c+2):c+2),a+=s.dot(r.cross(o));return a}function Iy(i){if(!ha.has(i)){const e=i.index?i.toNonIndexed():i.clone();e.computeVertexNormals(),ha.set(i,e)}return ha.get(i)}function Dy(){const i={pitch:0,roll:0,lift:0},e={pitch:0,roll:0,lift:0};let t=null,n=0,s=-1,r=0,o=0;return(a,c,l=[])=>{const u=a!==t||a.gameTime<n||l.some(x=>x.type==="respawn"),h=u?0:Math.min(.1,Math.max(0,a.gameTime-n));if(t=a,n=a.gameTime,u||a.state==="TITLE"||a.state==="READY")return i.pitch=i.roll=i.lift=0,e.pitch=e.roll=e.lift=0,s=-1,i;if(a.state!=="PLAYING"&&a.state!=="RESPAWN")return i;const f=(x,y,L)=>Math.max(y,Math.min(L,x)),p=f(c.L.effective,0,1),g=f(c.R.effective,0,1),_=(p+g)/2,m=Math.min(1,Math.hypot(a.vx,a.vy)/10),d=m*(1-_),S=a.gameTime;let E=f(-(p-g)*.28-a.omega*.035+Math.sin(S*2.4)*.025*d,-.32,.32),v=-Math.min(p,g)*.14+Math.sin(S*2)*.015*d,b=Math.sin(S*2.8)*.035*m;const T=mr(a);T==="stunned"?(v=.14,E=Math.sin(S*3)*.025,b=-.06):T==="runaway"&&(v=-.08+Math.sin(S*17)*.1,E=Math.sin(S*13)*.24+Math.sin(S*27)*.1,b=Math.sin(S*19)*.045);for(const x of l)x.type==="hit"&&x.kind!=="spicy"&&(s=S,r=-(x.nx*Math.cos(a.theta)-x.ny*Math.sin(a.theta))*.22,o=-(x.nx*Math.sin(a.theta)+x.ny*Math.cos(a.theta))*.18);const M=1-Math.exp(-(T==="runaway"?18:8)*h);e.pitch+=(v-e.pitch)*M,e.roll+=(E-e.roll)*M,e.lift+=(b-e.lift)*M;const A=s<0?0:Math.exp(-(S-s)*15);return i.pitch=f(e.pitch+o*A,-.3,.35),i.roll=f(e.roll+r*A,-.42,.42),i.lift=e.lift,i}}function Ou(i,e,t){const n=i.getObjectByName(e);if(!n)return null;const s=new ct;return s.position.set(t,.74,-.44),n.parent.add(s),s.attach(n),s}function Uy(i,e){i.rotation.order="YXZ";const t=i.children[0],n=[Ou(i,"004_eyebrow_-1",-.075),Ou(i,"006_eyebrow_1",.075)];let s=null,r=0,o=0;return(a,c,l)=>{const u=a.mode==="chase",h=u?c:a.goal??a.home,f=h.x-a.x,p=h.y-a.y,g=Math.hypot(f,p)>.001,_=!u&&!g,m=a!==s||l<r||_,d=m?0:Math.min(.1,Math.max(0,l-r));s=a,r=l;const S=g?Math.atan2(-f,p):_?0:i.rotation.y,E=Math.atan2(Math.sin(S-i.rotation.y),Math.cos(S-i.rotation.y));i.rotation.y=m?S:i.rotation.y+E*(1-Math.exp(-12*d));const v=l*(u?14:7);i.rotation.x=g?u?-.15:-.05:0,i.rotation.z=g?Math.sin(v)*(u?.1:.035):Math.sin(l*2)*.012;const b=g?Math.abs(Math.sin(v)):0;i.position.y=e+(g?b*(u?.16:.05):Math.sin(l*2)*.025);const T=u?(1-b)**3*.22-b*.1:0;t?.scale.set(1+T*.5,1-T,1+T*.5),o+=((u?1:0)-o)*(m?1:1-Math.exp(-10*d)),n[0]&&(n[0].rotation.z=-.45*o),n[1]&&(n[1].rotation.z=.45*o)}}const fc={"kenney/car-kit/ambulance":{cx:0,cz:-.025,hx:.75,hz:1.625,top:1.8,bottom:0},"kenney/car-kit/delivery":{cx:0,cz:-.025,hx:.75,hz:1.625,top:1.65,bottom:0},"kenney/car-kit/firetruck":{cx:0,cz:0,hx:.75,hz:1.7,top:1.7,bottom:0},"kenney/car-kit/garbage-truck":{cx:0,cz:.025,hx:.8,hz:1.725,top:1.6,bottom:0},"kenney/car-kit/hatchback-sports":{cx:0,cz:-.025,hx:.65,hz:1.425,top:1.1,bottom:0},"kenney/car-kit/police":{cx:0,cz:0,hx:.75,hz:1.55,top:1.3,bottom:0},"kenney/car-kit/sedan":{cx:0,cz:-.025,hx:.75,hz:1.275,top:1.3,bottom:0},"kenney/car-kit/suv":{cx:0,cz:0,hx:.75,hz:1.35,top:1.3,bottom:0},"kenney/car-kit/taxi":{cx:0,cz:-.025,hx:.75,hz:1.375,top:1.5,bottom:0},"kenney/car-kit/truck":{cx:0,cz:-.025,hx:.75,hz:1.475,top:1.3,bottom:0},"kenney/car-kit/van":{cx:0,cz:-.025,hx:.75,hz:1.375,top:1.35,bottom:0},"kenney/city-kit-commercial/building-a":{cx:0,cz:0,hx:.442,hz:.47,top:1.293,bottom:0},"kenney/city-kit-commercial/building-b":{cx:0,cz:0,hx:.485,hz:.47,top:1.293,bottom:0},"kenney/city-kit-commercial/building-c":{cx:0,cz:0,hx:.442,hz:.545,top:.893,bottom:0},"kenney/city-kit-commercial/building-d":{cx:0,cz:0,hx:.42,hz:.45,top:1.293,bottom:0},"kenney/city-kit-commercial/building-e":{cx:0,cz:0,hx:.82,hz:.504,top:.893,bottom:0},"kenney/city-kit-commercial/building-f":{cx:0,cz:0,hx:.42,hz:.515,top:1.693,bottom:0},"kenney/city-kit-commercial/building-g":{cx:0,cz:0,hx:.485,hz:.461,top:1.693,bottom:0},"kenney/city-kit-commercial/building-h":{cx:0,cz:0,hx:.442,hz:.504,top:1.293,bottom:0},"kenney/city-kit-commercial/building-i":{cx:0,cz:0,hx:.62,hz:.651,top:1.68,bottom:0},"kenney/city-kit-commercial/building-j":{cx:0,cz:0,hx:1.042,hz:.67,top:1.693,bottom:0},"kenney/city-kit-commercial/building-k":{cx:0,cz:0,hx:1.042,hz:.471,top:1.47,bottom:0},"kenney/city-kit-commercial/building-l":{cx:0,cz:0,hx:.685,hz:.701,top:2.27,bottom:0},"kenney/city-kit-commercial/building-m":{cx:0,cz:0,hx:.62,hz:.621,top:3.15,bottom:0},"kenney/city-kit-commercial/building-n":{cx:0,cz:0,hx:1.16,hz:.91,top:2.48,bottom:0},"kenney/city-kit-commercial/building-skyscraper-a":{cx:0,cz:0,hx:.68,hz:.68,top:2.88,bottom:0},"kenney/city-kit-commercial/building-skyscraper-b":{cx:0,cz:0,hx:.68,hz:.68,top:4.48,bottom:0},"kenney/city-kit-commercial/building-skyscraper-c":{cx:0,cz:0,hx:.64,hz:.694,top:4.08,bottom:0},"kenney/city-kit-commercial/building-skyscraper-d":{cx:0,cz:0,hx:.64,hz:.694,top:5.47,bottom:0},"kenney/city-kit-commercial/building-skyscraper-e":{cx:0,cz:0,hx:.647,hz:.621,top:4.08,bottom:0},"kenney/city-kit-commercial/detail-awning-wide":{cx:0,cz:.174,hx:.4,hz:.074,top:.4,bottom:0},"kenney/city-kit-commercial/detail-awning":{cx:0,cz:.174,hx:.2,hz:.074,top:.4,bottom:0},"kenney/city-kit-roads/construction-barrier":{cx:0,cz:0,hx:.068,hz:.112,top:.13,bottom:0},"kenney/city-kit-roads/construction-cone":{cx:0,cz:0,hx:.038,hz:.038,top:.094,bottom:0},"kenney/city-kit-roads/dumpster":{cx:.008,cz:0,hx:.138,hz:.185,top:.209,bottom:0},"kenney/city-kit-roads/light-curved":{cx:0,cz:-.088,hx:.025,hz:.113,top:.675,bottom:0},"kenney/city-kit-roads/light-square":{cx:0,cz:-.094,hx:.025,hz:.119,top:.6,bottom:0},"kenney/city-kit-roads/road-crossing":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-crossroad":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-end":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-intersection":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-sign-empty":{cx:0,cz:0,hx:.025,hz:.025,top:.475,bottom:0},"kenney/city-kit-roads/road-straight":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-suburban/building-type-a":{cx:0,cz:0,hx:.65,hz:.514,top:.834,bottom:0},"kenney/city-kit-suburban/building-type-b":{cx:0,cz:0,hx:.914,hz:.57,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-c":{cx:0,cz:0,hx:.643,hz:.514,top:1.034,bottom:0},"kenney/city-kit-suburban/building-type-d":{cx:0,cz:0,hx:.878,hz:.514,top:1.238,bottom:0},"kenney/city-kit-suburban/building-type-e":{cx:0,cz:0,hx:.65,hz:.514,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-f":{cx:0,cz:0,hx:.714,hz:.703,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-g":{cx:0,cz:0,hx:.725,hz:.589,top:.768,bottom:0},"kenney/city-kit-suburban/building-type-h":{cx:0,cz:0,hx:.65,hz:.458,top:.737,bottom:0},"kenney/city-kit-suburban/building-type-i":{cx:0,cz:0,hx:.643,hz:.514,top:.737,bottom:0},"kenney/city-kit-suburban/building-type-j":{cx:0,cz:0,hx:.685,hz:.458,top:1.038,bottom:0},"kenney/city-kit-suburban/building-type-k":{cx:0,cz:0,hx:.46,hz:.51,top:1.15,bottom:0},"kenney/city-kit-suburban/building-type-l":{cx:0,cz:0,hx:.517,hz:.51,top:1.049,bottom:0},"kenney/city-kit-suburban/building-type-m":{cx:0,cz:0,hx:.714,hz:.714,top:.737,bottom:0},"kenney/city-kit-suburban/building-type-n":{cx:0,cz:0,hx:.892,hz:.689,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-o":{cx:0,cz:0,hx:.635,hz:.514,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-p":{cx:0,cz:0,hx:.62,hz:.495,top:.918,bottom:0},"kenney/city-kit-suburban/building-type-q":{cx:0,cz:.021,hx:.62,hz:.443,top:.918,bottom:0},"kenney/city-kit-suburban/building-type-r":{cx:0,cz:0,hx:.514,hz:.51,top:1.141,bottom:0},"kenney/city-kit-suburban/building-type-s":{cx:0,cz:0,hx:.703,hz:.543,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-t":{cx:-.007,cz:0,hx:.657,hz:.703,top:1.156,bottom:0},"kenney/city-kit-suburban/building-type-u":{cx:0,cz:0,hx:.714,hz:.543,top:1.138,bottom:0},"kenney/city-kit-suburban/fence-low":{cx:0,cz:-.019,hx:.638,hz:.419,top:.17,bottom:0},"kenney/city-kit-suburban/path-stones-long":{cx:0,cz:0,hx:.07,hz:.2,top:.01,bottom:0},"kenney/city-kit-suburban/planter":{cx:0,cz:-.001,hx:.2,hz:.15,top:.177,bottom:0},"kenney/city-kit-suburban/tree-large":{cx:0,cz:0,hx:.105,hz:.121,top:.767,bottom:0},"kenney/city-kit-suburban/tree-small":{cx:0,cz:0,hx:.105,hz:.121,top:.567,bottom:0}},Ny={office_block:[{cx:0,cz:-.185,hx:1.21,hz:1.205,top:3.32}],alley_block:[{cx:-1.55,cz:0,hx:.78,hz:1.4,top:2.35},{cx:1.55,cz:0,hx:.78,hz:1.4,top:3.05}],city_block:[{cx:0,cz:-.27,hx:1.5,hz:1.47,top:1.92}],hospital:[{cx:0,cz:0,hx:1.67,hz:1.17,top:2.37}],...Object.fromEntries(Object.entries(fc).map(([i,e])=>[i,[e]]))},Fy=.25;function tr(i,e=-1/0){const t=[];for(const n of i){const s=Math.round(n.rotY/90);if(Math.abs(n.rotY-s*90)>1e-6)throw new Error(`${n.id}: rotY must be a multiple of 90`);const r=s*Math.PI/2,o=Math.round(Math.cos(r)),a=Math.round(Math.sin(r));(Ny[n.model]??[]).forEach((c,l)=>{if(c.top*n.scale<e)return;const u=(c.cx*o+c.cz*a)*n.scale,h=(-c.cx*a+c.cz*o)*n.scale,f=s%2!==0;t.push({id:`${n.id}-part${l}`,type:"Building",decorRef:n.id,x:n.x+u,y:n.y-h,hx:(f?c.hz:c.hx)*n.scale,hy:(f?c.hx:c.hz)*n.scale})})}return t}const Yc=i=>tr(i,Xt-Fy),qc=i=>[...Yc(i.decor??[]),...(i.lumps??[]).map(e=>({...e,type:"Building",decorRef:e.id,lump:!0}))];function Oy(i,e=.02){const t=[];for(const n of i){const s=[{along:"x",fixed:n.y-n.hy,lo:n.x-n.hx,hi:n.x+n.hx,nx:0,ny:-1},{along:"x",fixed:n.y+n.hy,lo:n.x-n.hx,hi:n.x+n.hx,nx:0,ny:1},{along:"y",fixed:n.x-n.hx,lo:n.y-n.hy,hi:n.y+n.hy,nx:-1,ny:0},{along:"y",fixed:n.x+n.hx,lo:n.y-n.hy,hi:n.y+n.hy,nx:1,ny:0}];for(const r of s){let o=[[r.lo,r.hi]];const a=r.along==="x"?null:r.fixed+r.nx*e,c=r.along==="x"?r.fixed+r.ny*e:null;for(const l of i){if(l===n)continue;let u,h;if(r.along==="x"){if(Math.abs(c-l.y)>=l.hy)continue;u=l.x-l.hx,h=l.x+l.hx}else{if(Math.abs(a-l.x)>=l.hx)continue;u=l.y-l.hy,h=l.y+l.hy}o=o.flatMap(([f,p])=>h<=f||u>=p?[[f,p]]:[[f,Math.min(p,u)],[Math.max(f,h),p]].filter(([g,_])=>_-g>e))}for(const[l,u]of o)t.push(r.along==="x"?{x0:l,y0:r.fixed,x1:u,y1:r.fixed,along:"x",nx:r.nx,ny:r.ny}:{x0:r.fixed,y0:l,x1:r.fixed,y1:u,along:"y",nx:r.nx,ny:r.ny})}}return t}const By=new Te("#F4F8FF");function fr(i,e){const t=i.clone();return t.onBeforeCompile=n=>{n.uniforms.hazeColor={value:By},n.uniforms.hazeAmount={value:e},n.fragmentShader=`uniform vec3 hazeColor;
uniform float hazeAmount;
`+n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  gl_FragColor.rgb = mix(gl_FragColor.rgb, hazeColor, hazeAmount);`)},t.customProgramCacheKey=()=>`haze-${e}`,t}const ky=0,zy=.15,Hy=.35,Gy=0,Bu=1.6,Vy="#3A4256",Wy="#B8D4EA",wi="#E46E58",Xy="#7FE0A6",Yy="#609AC1",ku="#F3E5CC",qy={chair:.53,spicy:.57,alcohol:.5},To=i=>new Lt({color:i}),ri=(i,e,t,n)=>new Ke(new tn(i,e,t),To(n)),zu=(i,e,t)=>{const n=new Ke(new dr(i-e,i,24),To(t));return n.rotation.x=-Math.PI/2,n};function jy(){const i=new ct,e=r=>new Hi({color:r}),t=e("#2FA36B"),n=(r,o,a)=>{const c=new Ke(r,o);return c.position.y=a,i.add(c),c};n(new _n(.26,.26,.75,10),t,.375),n(new _n(.1,.26,.22,10),t,.86),n(new _n(.09,.1,.28,10),t,1.11),n(new _n(.268,.268,.32,10),e("#F4F1E6"),.4),n(new _n(.272,.272,.06,10),e("#3B6FB6"),.53),n(new tn(.05,.5,.02),To("#C9F2D9"),.62).position.set(-.13,.62,.22);const s=n(new _n(.11,.11,.12,10),e("#1B7A48"),1.3);return{group:i,cap:s,glass:t}}const Hu="#FFE27A",Ri="#FFF3BF",Xs="#7FE0C0",Xh="#8FB8F0";function Ky(){const i=new ct,e=o=>new Hi({color:o}),t=(o,a,c,l,u,h,f)=>{const p=new Ke(new tn(o,a,c),l);return p.position.set(u,h,f),i.add(p),p},n=e("#C9D3DE"),s=e("#FAFAF6"),r=e(Xh);for(const o of[-.5,.5])for(const a of[-.85,.85])t(.07,.4,.07,n,o,-.15,a);return t(1.06,.1,1.8,n,0,.08,0),t(1,.16,1.72,s,0,.21,0),t(1.06,.45,.07,n,0,.3,-.9),t(1.06,.28,.07,n,0,.22,.9),t(.7,.12,.34,s,0,.35,-.62),t(1.04,.07,1,r,0,.32,.32),t(1.04,.03,.12,s,0,.36,-.12),i.scale.setScalar(1.6),i.userData.blanket=r,i}async function $y(i,e,t){const n=Yc(e.decor),s=new Set(n.map(M=>M.decorRef));for(const M of e.decor){const A=await t(M.model);A.scale.setScalar(Zs*M.scale),s.has(M.id)||(A.scale.y*=.5,A.traverse(x=>{x.isMesh&&(x.material=fr(x.material,Hy))})),A.position.set(...Tn(M.x,M.y,0)),A.rotation.y=dh.degToRad(M.rotY),i.add(A)}{const M=[];for(const D of Oy(qc(e))){const P=Math.hypot(D.x1-D.x0,D.y1-D.y0),Y=Math.max(1,Math.round(P/.5));for(let F=0;F<Y;F++)M.push({x:D.x0+(D.x1-D.x0)*(F+.5)/Y+D.nx*.06,y:D.y0+(D.y1-D.y0)*(F+.5)/Y+D.ny*.06,len:P/Y,along:D.along,red:F%2===0})}const y=new ao(new tn(1,.42,.1),new Lt({color:"#FFFFFF"}),M.length),L=new Fe,N=new Sn,B=new O(0,1,0),U=new Te;M.forEach((D,P)=>{N.setFromAxisAngle(B,D.along==="y"?Math.PI/2:0),y.setMatrixAt(P,L.compose(new O(...Tn(D.x,D.y,Xt)),N,new O(D.len,1,1))),y.setColorAt(P,U.set(D.red?wi:ku))}),i.add(y)}{const M=e.bounds,A=1,x=Xt,y=[],L=[],N=(X,Q,oe,Re)=>{const q=Math.hypot(oe-X,Re-Q),ee=Math.round(q/A),C=X===oe?"y":"x";for(let H=0;H<ee;H++){const $=(H+.5)/ee;y.push({x:X+(oe-X)*$,y:Q+(Re-Q)*$,along:C,red:H%2===0}),L.push({x:X+(oe-X)*H/ee,y:Q+(Re-Q)*H/ee})}};N(M.minX,M.minY,M.minX,M.maxY),N(M.maxX,M.minY,M.maxX,M.maxY),N(M.minX,M.minY,M.maxX,M.minY),N(M.minX,M.maxY,M.maxX,M.maxY);const B=new ao(new tn(1,.35,.3),new Lt({color:"#FFFFFF"}),y.length),U=new ao(new tn(.14,x+.3,.14),new Hi({color:"#242637"}),L.length),D=new Fe,P=new Sn,Y=new O(0,1,0),F=new O(A,1,1),Z=new Te;y.forEach((X,Q)=>{P.setFromAxisAngle(Y,X.along==="y"?Math.PI/2:0),B.setMatrixAt(Q,D.compose(new O(...Tn(X.x,X.y,x)),P,F)),B.setColorAt(Q,Z.set(X.red?Vy:Wy))}),L.forEach((X,Q)=>U.setMatrixAt(Q,D.makeTranslation(...Tn(X.x,X.y,(x+.3)/2)))),i.add(B,U)}const r={};for(const M of e.obstacles.filter(A=>A.model)){const A=M.type==="AlcoholTurret"?jy():null,x=new ct,y=A?new ct:await t(M.model);A?(y.add(A.group),y.scale.setScalar(Bu),y.position.y=-.62*Bu):(y.scale.setScalar(Zs*Yr),y.position.y=-qy[M.model]*Zs*Yr),y.traverse(B=>{B.isMesh&&(B.castShadow=!0)});const L=Wh(y,{width:.03/(A?1:Yr)});x.add(y,zu(M.radius,.16,wi)),i.add(x);const N={group:x,body:y};if(M.type==="SpicyChaser"){const B=new ct,U=ri(.12,.4,.12,wi),D=ri(.12,.12,.12,wi);U.position.y=1.15,D.position.y=.8,B.add(U,D),B.visible=!1,x.add(B),N.mark=B,N.updateMotion=Uy(y,y.position.y)}if(M.type==="AlcoholTurret"){const B=new ct;for(let U=0;U<Pt.shots;U++){const D=new ct,P=ri(.1,.05,Pt.range,wi);P.position.z=-8/2,D.add(P),D.rotation.y=-(U-(Pt.shots-1)/2)*Pt.spread,B.add(D)}B.visible=!1,x.add(B),Object.assign(N,{aim:B,cap:A.cap,glass:L.get(A.glass),bottle:A.group,popped:-1,phase:M.x*1.7})}if(M.type==="OfficeChair"){const B=new ct;(y.children[0]??y).add(B);for(const D of["000_seat","001_back","002_back_inset","003_armrest_-1","004_arm_post_-1","005_armrest_1","006_arm_post_1"]){const P=y.getObjectByName(D);P&&B.attach(P)}Object.assign(N,{swivel:B,spin:.5+Math.abs(M.x*7.3+M.y)%1,boost:0,x:M.x,y:M.y})}r[M.id]=N}const o=(M,A,x)=>{M.group.position.set(...Tn(A,x,Xt))};for(const M of e.obstacles.filter(A=>A.model))o(r[M.id],M.x,M.y);const a=new Bc(Pt.shotRadius,8,6).scale(1,.8,1.9),c=To(Xy),l=Array.from({length:40},()=>{const M=new Ke(new tn(.16,.16,.16),new Lt({color:"#FFF4E6",transparent:!0,opacity:.85,depthWrite:!1}));return M.visible=!1,i.add(M),{m:M,life:0,vx:0,vz:0}});let u=0,h=0;const f=[],p=new Ke(new _n(.11,.11,.12,10),new Hi({color:"#1B7A48"})),g=(M,A)=>new Lt({color:M,transparent:!0,opacity:A,depthWrite:!1,side:cn}),_=e.checkpoints.map(M=>{const A=new ct,x=new ct,y=[g(Hu,.95),g(Ri,.45),g(Ri,.18),g(Ri,.14)],L=new Ke(new Uc(M.radius-.2,40),y[3]);L.rotation.x=-Math.PI/2,x.add(L),[[M.radius,.16],[M.radius+.22,.2],[M.radius-.25,.5]].forEach(([P,Y],F)=>{const Z=new Ke(new dr(P-Y,P,40),y[F]);Z.rotation.x=-Math.PI/2,x.add(Z)});const N=new ct;for(let P=0;P<8;P++){const Y=new ct,F=P/8*Math.PI*2;Y.add(ri(.06,.26,.06,"#FFFFFF"),ri(.26,.06,.06,"#FFFFFF")),Y.position.set(Math.cos(F)*M.radius,.3+P%2*.35,Math.sin(F)*M.radius),N.add(Y)}const B=g(Ri,.16),U=new Ke(new _n(M.radius*.95,M.radius,Xt+2.5,24,1,!0),B);U.position.y=(Xt+2.5)/2-Xt;const D=Ky();return D.position.y=-.35,A.add(x,N,U,D),A.position.set(...Tn(M.x,M.y,Xt)),i.add(A),{ring:x,ringMats:y,sparkles:N,beamMat:B,blanket:D.userData.blanket}}),m=e.hospital,d=new ct;d.add(zu(m.radius,.14,Yy));const S=ri(1.3,1.3,.1,ku),E=ri(.3,.95,.14,wi),v=ri(.95,.3,.14,wi);for(const M of[S,E,v])M.position.y=1.6,d.add(M);d.position.set(...Tn(m.x,m.y,Xt)),i.add(d);const b=new Map,T=[];return function(A,x,y=[]){const L=Math.max(0,Math.min(.1,x-h));h=x;for(const U of A.enemies??[]){const D=r[U.id];if(D)if(U.type==="SpicyChaser"){if(o(D,U.x,U.y),D.updateMotion(U,A.ship,x),D.mark.visible=U.mode==="chase",U.mode==="chase"&&Math.random()<L*14){const P=l[u++%l.length];P.m.position.copy(D.group.position).add(new O((Math.random()-.5)*.4,.9,(Math.random()-.5)*.4)),Object.assign(P,{life:.7,vx:(Math.random()-.5)*.8,vz:(Math.random()-.5)*.8}),P.m.visible=!0}}else{const P=U.mode==="charge";D.aim.visible=P&&Math.floor(U.timer*12)%2===0;const Y=U.aim?Math.atan2(-U.aim.x,U.aim.y):0;P&&(D.aim.rotation.y=Y);const F=P?Math.min(1,U.timer/Pt.charge):0,Z=F*.7,X=P?0:Math.sin(x*2.2+D.phase)*.08;D.body.rotation.set(-Z,Y,X,"YXZ"),D.body.position.x=P?(.02+.06*F)*Math.sin(x*60):0,D.glass.emissive.setRGB(.25*F*(.6+.4*Math.sin(x*30)),.5*F,.2*F);const Q=D.popped>=0?x-D.popped:9,oe=Q<.35?Math.exp(-Q*9)*Math.cos(Q*30):0;D.bottle.scale.set(1+oe*.18,1-oe*.25,1+oe*.18),D.wasCharging&&!P&&(D.popped=x),D.wasCharging=P,D.cap.visible=!(D.popped>=0&&x-D.popped<1.2),b.set(D,D.popped>=0&&x-D.popped<.7?x-D.popped:null)}}for(const U of A.world.obstacles){if(U.type!=="OfficeChair")continue;const D=r[U.id];D.body.position.y=-.53*Zs*Yr+.1*Math.sin(x*2+U.x);for(const P of y)P.type==="hit"&&P.kind==="chair"&&Math.hypot(P.x-U.x,P.y-U.y)<2&&(D.boost=14);D.boost*=Math.exp(-2.2*L),D.swivel.rotation.y+=(D.spin+D.boost)*L,D.body.rotation.z=Math.sin(x*1.6+U.y)*.06+D.boost*.01*Math.sin(x*25)}for(const U of l)U.m.visible&&(U.life-=L,U.m.position.x+=U.vx*L,U.m.position.z+=U.vz*L,U.m.position.y+=1.6*L,U.m.scale.setScalar(.5+(.7-U.life)*2.2),U.m.material.opacity=Math.max(0,U.life/.7)*.85,U.m.visible=U.life>0);let N=0;for(const[U,D]of b){if(D===null)continue;const P=T[N]??(T[N]=Object.assign(p.clone(),{visible:!1}));P.parent||i.add(P),P.visible=!0,P.position.copy(U.group.position).add(new O(.4*D,1.1+4*D-6*D*D,0)),P.rotation.set(D*20,0,D*14),N++}for(;N<T.length;N++)T[N].visible=!1;const B=A.projectiles??[];for(;f.length<B.length;){const U=new Ke(a,c);i.add(U),f.push(U)}f.forEach((U,D)=>{const P=B[D];U.visible=!!P,P&&(U.position.set(...Tn(P.x,P.y,Xt)),U.rotation.y=Math.atan2(P.vx,-P.vy))}),_.forEach((U,D)=>{const P=D<=(A.checkpointIndex??-1),Y=P?1:1+.06*Math.sin(x*4+D);U.ring.scale.set(Y,1,Y),U.ring.rotation.y=x*.3,U.sparkles.rotation.y=x*(P?.3:.9),U.ringMats[0].color.set(P?Xs:Hu),U.ringMats[1].color.set(P?Xs:Ri),U.ringMats[2].color.set(P?Xs:Ri),U.ringMats[3].color.set(P?Xs:Ri),U.beamMat.opacity=P?.06:.12+.05*Math.sin(x*3+D),U.blanket.color.set(P?Xs:Xh)})}}const Kr=i=>Math.round(i*100)/100,jc="kenney/city-kit-commercial/",Zy="kenney/city-kit-suburban/",fa=[..."abcdefghijkln"].map(i=>jc+"building-"+i),Jy=[..."abcdefghk"].map(i=>jc+"building-"+i),da=[..."bcde"].map(i=>jc+"building-skyscraper-"+i),Qy=[..."abcdefghijklmnopqrstu"].map(i=>Zy+"building-type-"+i),on=1.5,Gn=3,Ys=4.5,ev=[-10,0,10],as=12,Gu=2.6;function Yh(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const tv={company:[["office",.65],["plaza",.2],["parking",.15]],alley:[["shops",.8],["yard",.2]],city:[["downtown",.5],["houses",.3],["plaza",.2]],hospital:[["ward",.7],["park",.3]]},rt="OfficeChair",gt="SpicyChaser",yt="AlcoholTurret",nv={company:[[{open:[0,1,2],blocks:["office","plaza","office","parking"],obs:[[rt,"road",1,.5,0]]},{open:[0,1,2],blocks:["parking","office","plaza","office"],obs:[[rt,"road",0,.5,.8]]}],[{open:[0,1,2],blocks:["office","office","parking","office"],obs:[[rt,"road",0,.3,-.8],[rt,"road",1,.6,.8],[rt,"road",2,.45,0]]},{open:[0,2],blocks:["office","office","office","office"],obs:[[rt,"road",0,.5,.9],[rt,"road",2,.3,-.9],[rt,"road",2,.75,.9]]},{open:[1,2],blocks:["office","plaza","office","office"],obs:[[rt,"road",1,.35,.9],[rt,"block",1,.6,.5],[rt,"corner",2,"top",-1]]}],[{open:[1,2],blocks:["office","office","plaza","office"],obs:[[rt,"road",1,.2,-.9],[rt,"road",1,.5,.9],[rt,"road",1,.8,-.9],[rt,"road",2,.5,0]]},{open:[0,1],blocks:["office","parking","office","office"],obs:[[rt,"road",0,.5,0],[rt,"road",1,.3,-.9],[rt,"road",1,.7,.9],[rt,"corner",1,"top",1]]}]],alley:[[{open:[0,1,2],blocks:["shops","yard","shops","shops"],obs:[[yt,"block",1,.5,.5]]},{open:[0,1,2],blocks:["shops","shops","yard","shops"],obs:[[yt,"side",2,.5,-1]]}],[{open:[0,2],blocks:["shops","shops","shops","shops"],obs:[[yt,"corner",0,"top",1],[yt,"corner",2,"bottom",-1],[rt,"road",0,.5,0]]},{open:[1,2],blocks:["shops","shops","yard","shops"],obs:[[yt,"side",1,.5,1],[yt,"block",2,.3,.5],[rt,"road",2,.6,0]]},{open:[0,1],blocks:["yard","shops","shops","shops"],obs:[[yt,"side",0,.35,1],[yt,"side",1,.7,-1]]}],[{open:[1],blocks:["shops","shops","shops","shops"],obs:[[yt,"side",1,.25,-1],[yt,"side",1,.55,1],[yt,"side",1,.85,-1],[rt,"road",1,.4,.8]]},{open:[0,1],blocks:["shops","shops","shops","yard"],obs:[[yt,"corner",0,"top",1],[yt,"corner",1,"bottom",-1],[yt,"side",0,.5,1],[rt,"road",1,.55,0]]}]],city:[[{open:[0,1,2],blocks:["downtown","plaza","houses","downtown"],obs:[[gt,"block",1,.5,.5]]},{open:[0,1,2],blocks:["houses","downtown","plaza","downtown"],obs:[[gt,"block",2,.5,.5]]}],[{open:[0,1,2],blocks:["downtown","houses","plaza","downtown"],obs:[[gt,"block",1,.3,.5],[gt,"block",2,.7,.5],[yt,"corner",1,"top",-1]]},{open:[0,2],blocks:["downtown","houses","houses","downtown"],obs:[[gt,"road",0,.5,0],[gt,"road",2,.5,0],[gt,"block",1,.5,.5]]}],[{open:[1,2],blocks:["downtown","plaza","houses","downtown"],obs:[[gt,"block",1,.3,.5],[gt,"block",1,.75,.5],[gt,"road",1,.5,0],[gt,"road",2,.4,0],[yt,"corner",2,"top",-1]]},{open:[0,1],blocks:["downtown","houses","downtown","downtown"],obs:[[gt,"road",0,.3,0],[gt,"road",1,.6,0],[gt,"block",1,.5,.5],[yt,"side",0,.75,1],[gt,"corner",1,"top",1]]}]],hospital:[[{open:[0,1,2],blocks:["ward","park","ward","ward"],obs:[[rt,"road",1,.5,0]]},{open:[0,1,2],blocks:["ward","ward","park","ward"],obs:[[gt,"block",2,.5,.5]]}],[{open:[0,2],blocks:["ward","ward","ward","ward"],obs:[[rt,"road",0,.4,-.9],[gt,"road",2,.6,0],[yt,"corner",0,"top",1]]},{open:[1,2],blocks:["ward","park","ward","ward"],obs:[[yt,"side",1,.4,-1],[gt,"road",2,.5,0],[rt,"road",1,.75,.9]]}],[{open:[1,2],blocks:["ward","ward","park","ward"],obs:[[rt,"road",1,.2,-.9],[yt,"side",1,.5,1],[gt,"road",1,.8,0],[gt,"block",2,.5,.5]]},{open:[0,1],blocks:["ward","ward","ward","ward"],obs:[[yt,"corner",0,"top",1],[yt,"corner",1,"bottom",-1],[gt,"road",0,.5,0],[rt,"road",1,.5,-.9]]}]]},iv={open:[1],blocks:["ward","park","park","ward"],obs:[[gt,"block",1,.4,.5],[gt,"block",2,.4,.5]]},sv={OfficeChair:.7,SpicyChaser:.55,AlcoholTurret:.6},rv=new Set(["office","shops","downtown","ward"]),Vu=4,Wu={OfficeChair:"chair",SpicyChaser:"spicy",AlcoholTurret:"alcohol"};function qh(i,e){const t=Yh(i),n=C=>C[Math.floor(t()*C.length)],s=(C,H)=>C+t()*(H-C),r=C=>{let H=t();for(const[$,re]of C)if((H-=re)<0)return $;return C[0][0]},{bounds:o,hospital:a,zones:c}=e,l=C=>c.find(H=>C<H.y1)??c.at(-1),u=[];for(let C=14+s(0,4);C<a.y-14;C+=s(18,26))u.push(Math.round(C));const h=[o.minY,...u,o.maxY],f=[];for(const C of e.checkpoints){const H=u.reduce(($,re,le)=>Math.abs(re-C.y)<Math.abs(u[$]-C.y)?le:$,0);!f.some($=>$.si===H)&&H+1<h.length-2&&f.push({si:H,cp:C})}const p=[];for(let C=0;C<h.length-1;C++){const H=h[C],$=h[C+1],re=C===h.length-2,le=l((H+$)/2).id,ue=Math.max(-1,...f.filter(pe=>pe.si<C).map(pe=>pe.si)),he=Math.min(h.length,...f.filter(pe=>pe.si>=C).map(pe=>pe.si)),Ue=C===0||C-1===ue?0:he-C<=0?2:1;let k=re?iv:n(nv[le][Ue]);!re&&C>0&&t()<.5&&(k=ov(k));const Le=ev.map(pe=>(C===0||re)&&pe===0?0:Math.round((pe+s(-1.5,1.5))*10)/10);let Ce=[...k.open];C===0&&!Ce.includes(1)&&Ce.push(1),p.push({y0:H,y1:$,xs:Le,open:Ce,chunk:k,z:le,tier:Ue})}const g=[];let _=t()<.5?0:2;for(const{si:C,cp:H}of f){const $=p[C+1];$.open.includes(_)||$.open.push(_),g.push({...H,x:$.xs[_],y:u[C],radius:2.4}),_=2-_}for(const C of p)C.open.sort();const m=[...u.map(C=>({x0:o.minX,x1:o.maxX,y0:C-on,y1:C+on,dir:"ew"})),...p.flatMap((C,H)=>C.open.map($=>({x0:C.xs[$]-on,x1:C.xs[$]+on,y0:H===0?3:C.y0+on,y1:H===p.length-1?a.y-2:C.y1-on,dir:"ns"})))],d=[];p.forEach((C,H)=>{const $=C.y0+(H===0?0:Gn),re=C.y1-(H===p.length-1?0:Gn),le=C.open.map(he=>[C.xs[he]-Gn,C.xs[he]+Gn]);let ue=o.minX;for(const[he,Ue]of[...le,[o.maxX,o.maxX]]){if(he-ue>1.5&&re-$>1.5){const k=(ue+he)/2,qe=C.xs.filter(pe=>pe<k).length,Le=l(($+re)/2+s(-as,as)).id,Ce=Le===C.z?C.chunk.blocks[qe]:r(tv[Le]);d.push({x0:ue,x1:he,y0:$,y1:re,zone:Le,kind:Ce,band:C,region:qe})}ue=Ue}});const S=[],E=(C,H,$)=>{H<o.minX+1.2||H>o.maxX-1.2||Math.hypot(H-e.spawn.x,$-e.spawn.y)<8||g.some(re=>Math.hypot(H-re.x,$-re.y)<re.radius+2.5)||Math.hypot(H-a.x,$-a.y)<a.radius+3||S.some(re=>Math.hypot(H-re.x,$-re.y)<3.2)||S.push({id:`${Wu[C]}-${S.length+1}`,type:C,model:Wu[C],x:Math.round(H*100)/100,y:Math.round($*100)/100,radius:sv[C]})};for(const C of p)for(const[H,$,re,le,ue]of C.chunk.obs){const he=C.xs[re],Ue=C.y0+Gn+le*(C.y1-C.y0-2*Gn);if($==="road"&&C.open.includes(re))E(H,he+ue,Ue);else if($==="side"&&C.open.includes(re))E(H,he+ue*(Gn-.6),Ue);else if($==="corner"&&C.open.includes(re))E(H,he+ue*Ys*.8,le==="top"?C.y1-Ys*.8:C.y0+Ys*.8);else if($==="block"){const k=d.find(qe=>qe.band===C&&qe.region===re)??d.find(qe=>qe.band===C);if(!k)continue;if(rv.has(k.kind)){const qe=(k.x0+k.x1)/2,Le=C.open.map(Ce=>C.xs[Ce]).reduce((Ce,pe)=>Math.abs(pe-qe)<Math.abs(Ce-qe)?pe:Ce);E(H,Le,k.y0+le*(k.y1-k.y0))}else E(H,k.x0+ue*(k.x1-k.x0),k.y0+le*(k.y1-k.y0))}}const v=[...m.map(C=>({x:(C.x0+C.x1)/2,y:(C.y0+C.y1)/2,hx:(C.x1-C.x0)/2+Gn-on,hy:(C.y1-C.y0)/2+Gn-on})),...p.flatMap(C=>C.open.flatMap(H=>[C.y0,C.y1].filter($=>u.includes($)).map($=>({x:C.xs[H],y:$,hx:Ys,hy:Ys})))),{x:0,y:e.spawn.y,hx:3,hy:3},...g.map(C=>({x:C.x,y:C.y,hx:C.radius+1,hy:C.radius+1})),{x:a.x,y:a.y,hx:a.radius+2,hy:a.radius+2},...S.map(C=>({x:C.x,y:C.y,hx:C.radius+.9,hy:C.radius+.9}))],b=e.decor.filter(C=>C.id==="hq"||C.id==="hospital"),T=tr(b),M=(C,H=0)=>v.concat(T).some($=>Math.abs(C.x-$.x)<C.hx+$.hx+H&&Math.abs(C.y-$.y)<C.hy+$.hy+H),A=C=>C.x-C.hx>o.minX+.6&&C.x+C.hx<o.maxX-.6&&C.y-C.hy>o.minY+.6&&C.y+C.hy<o.maxY-.6;let x=0;const y=(C,H,$,re,le=0)=>{const ue={id:`b${x}`,model:C,x:Math.round($*100)/100,y:Math.round(re*100)/100,rotY:le,scale:H},he=tr([ue]);return!he.every(A)||he.some(Ue=>M(Ue,.4))?!1:(x++,b.push(ue),T.push(...he),!0)},L=C=>Math.round(Math.min(2.5,2.1/fc[C].top)*100)/100,N=()=>{const C=n(Qy);return[C,L(C)]},B={office:()=>t()<.3?N():t()<.8?[n(fa),2.6]:[n(da),1.8],shops:()=>[n(Jy),2.5],downtown:()=>t()<.5?[n(fa),2.6]:t()<.5?[n(da),1.8]:N(),houses:N,ward:()=>t()<.15?N():t()<.6?[n(fa),2.7]:[n(da),1.9],park:()=>t()<.2?N():null};for(const C of d){const H=B[C.kind];if(!H)continue;C.kind==="shops"&&C.x1-C.x0>8&&(C.passage=s(C.x0+3,C.x1-3),v.push({x:C.passage,y:(C.y0+C.y1)/2,hx:1.5,hy:(C.y1-C.y0)/2}));const $=C.kind==="shops"||C.kind==="ward";for(let re=C.y0+.5;re<C.y1-1;){let le=0;for(let ue=C.x0+.5;ue<C.x1-1;){let he=!1;for(let Ue=0;Ue<4&&!he;Ue++){const k=H();if(!k)break;const[qe,Le]=k,Ce=fc[qe],pe=Ce.hx*2*Le,tt=Ce.hz*2*Le;ue+pe>C.x1-.5||re+tt>C.y1-.5||y(qe,Le,ue+pe/2,re+tt/2,t()<.5?0:180)&&(he=!0,le=Math.max(le,tt),ue+=pe+($?s(.45,.9):s(.45,2.4)))}he||(ue+=.8)}re+=Math.max(le,1.5)+($?s(.45,.9):s(.45,2.2))}}const U=Yc(b.filter(C=>C.id!=="hq"&&C.id!=="hospital")),D=(C,H)=>Math.abs(C.x-H.x)-C.hx-H.hx<Gu&&Math.abs(C.y-H.y)-C.hy-H.hy<Gu,P=C=>{const H=Math.min(...C.map(ue=>ue.x-ue.hx)),$=Math.max(...C.map(ue=>ue.x+ue.hx)),re=Math.min(...C.map(ue=>ue.y-ue.hy)),le=Math.max(...C.map(ue=>ue.y+ue.hy));return{x:(H+$)/2,y:(re+le)/2,hx:($-H)/2,hy:(le-re)/2}},Y=C=>!v.some(H=>Math.abs(C.x-H.x)<C.hx+H.hx&&Math.abs(C.y-H.y)<C.hy+H.hy)&&!S.some(H=>Math.abs(C.x-H.x)<C.hx+H.radius+.5&&Math.abs(C.y-H.y)<C.hy+H.radius+.5),F=[],Z=U.map((C,H)=>H),X=C=>Z[C]===C?C:Z[C]=X(Z[C]);for(let C=0;C<U.length;C++)for(let H=C+1;H<U.length;H++)D(U[C],U[H])&&(Z[X(C)]=X(H));const Q=new Map;U.forEach((C,H)=>{const $=X(H);Q.has($)||Q.set($,[]),Q.get($).push(C)});for(const C of Q.values()){if(C.length<2)continue;const H=P(C);if(Y(H)){F.push(H);continue}for(let $=0;$<C.length;$++)for(let re=$+1;re<C.length;re++){const le=P([C[$],C[re]]);D(C[$],C[re])&&Y(le)&&F.push(le)}}F.forEach((C,H)=>Object.assign(C,{id:`lump${H}`,x:Math.round(C.x*100)/100,y:Math.round(C.y*100)/100,hx:Math.round(C.hx*100)/100,hy:Math.round(C.hy*100)/100}));const oe=new Set(U.map(C=>C.decorRef)),Re=b.filter(C=>oe.has(C.id)||C.id==="hq"||C.id==="hospital"||!tr([C]).some(H=>F.some($=>Math.abs(H.x-$.x)<$.hx+H.hx&&Math.abs(H.y-$.y)<$.hy+H.hy))),q=qc({decor:Re,lumps:F}),ee=(C,H,$,re,le)=>{for(let ue=0;ue<=16;ue++){const he=C+($-C)*ue/16,Ue=H+(re-H)*ue/16;if(he<o.minX+1||he>o.maxX-1||q.some(k=>Math.abs(he-k.x)<k.hx+le&&Math.abs(Ue-k.y)<k.hy+le))return!1}return!0};for(const C of S)if(C.type==="SpicyChaser")for(const[H,$]of t()<.5?[[0,1],[1,0]]:[[1,0],[0,1]])for(const re of[Vu,Vu*.6]){const le={x:C.x-H*re,y:C.y-$*re},ue={x:C.x+H*re,y:C.y+$*re};!C.patrol&&ee(le.x,le.y,ue.x,ue.y,C.radius+.3)&&(C.patrol={x0:Kr(le.x),y0:Kr(le.y),x1:Kr(ue.x),y1:Kr(ue.y)})}return{...e,seed:i,streets:u,roads:m,blocks:d.map(({band:C,region:H,...$})=>$),checkpoints:g,decor:Re,obstacles:S,lumps:F}}function ov(i){return{open:i.open.map(e=>2-e),blocks:[...i.blocks].reverse(),obs:i.obs.map(([e,t,n,s,r])=>t==="block"?[e,t,3-n,s,1-r]:[e,t,2-n,s,typeof r=="number"?-r:r])}}const vt=64,av=2;function cv(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const jh=(i,e)=>`#${new Te(i).offsetHSL(0,0,e).getHexString()}`,dc={pavers(i,e){pa(i,e,"#C9CDD2","#AEB3BA",16,16,.025)},sidewalk(i,e){pa(i,e,"#D8D5CE","#BDB9B0",32,32,.015)},plaza(i,e){pa(i,e,"#E8DDC8","#D2C5AC",16,16,.02),i.fillStyle="#D9C9A8";for(let t=0;t<vt;t+=32)for(let n=0;n<vt;n+=32)i.fillRect(n+1,t+1,15,15)},brick(i,e){i.fillStyle="#7A5448",i.fillRect(0,0,vt,vt);for(let t=0,n=0;t<vt;t+=8,n++)for(let s=n%2*-8;s<vt;s+=16)i.fillStyle=jh("#A06A57",(e()-.5)*.06),i.fillRect(s+1,t+1,15,7)},asphalt(i,e){ma(i,e,"#5D6068",["#686B73","#53565D"],140)},parking(i,e){dc.asphalt(i,e),i.fillStyle="#E9E6DE";for(let t=0;t<vt;t+=16)i.fillRect(t,2,2,24),i.fillRect(t,38,2,24);i.fillRect(0,30,vt,2)},yard(i,e){ma(i,e,"#4E5058",["#5A5C64","#44464D"],160),i.fillStyle="#7C97AE";for(let t=0;t<2;t++){const n=e()*48,s=e()*48;i.fillRect(n,s,10+e()*8,4+e()*4),i.fillRect(n+3,s-2,6,2)}i.fillStyle="#3E4046";for(let t=0;t<3;t++){let n=e()*vt,s=e()*vt;for(let r=0;r<10;r++)i.fillRect(n,s,1,1),n+=Math.round(e()*2-.5),s+=1}},grass(i,e){ma(i,e,"#8CC56E",["#7DB862","#9BD27C","#86BF68"],260);for(let t=0;t<3;t++)i.fillStyle=["#F7F0B5","#F2B8C6","#FFFFFF"][t],i.fillRect(Math.floor(e()*vt),Math.floor(e()*vt),1,1)},lawn(i,e){dc.grass(i,e),i.fillStyle="#D8D2C2";for(let t=2;t<vt;t+=10)i.fillRect(28+Math.round(e()*2),t,8,6)}};function pa(i,e,t,n,s,r,o){i.fillStyle=n,i.fillRect(0,0,vt,vt);for(let a=0;a<vt;a+=r)for(let c=0;c<vt;c+=s)i.fillStyle=jh(t,(e()-.5)*o*2),i.fillRect(c+1,a+1,s-1,r-1)}function ma(i,e,t,n,s){i.fillStyle=t,i.fillRect(0,0,vt,vt);for(let r=0;r<s;r++)i.fillStyle=n[r%n.length],i.fillRect(Math.floor(e()*vt),Math.floor(e()*vt),1+(e()<.2),1)}const ga={};function lv(i){if(!ga[i]){const e=document.createElement("canvas");e.width=e.height=vt,dc[i](e.getContext("2d"),cv(i.length*977+i.charCodeAt(0)));const t=new Dh(e);t.wrapS=t.wrapT=ki,t.magFilter=t.minFilter=bt,t.generateMipmaps=!1,t.colorSpace=Ct,ga[i]=t}return ga[i]}const Xu=av,uv={office:"pavers",downtown:"pavers",plaza:"plaza",parking:"parking",shops:"brick",yard:"yard",houses:"lawn",park:"grass",ward:"pavers"},Wt="kenney/",$r={straight:Wt+"city-kit-roads/road-straight",cross:Wt+"city-kit-roads/road-crossroad",crossing:Wt+"city-kit-roads/road-crossing"},Yu=["sedan","taxi","van","police","suv","hatchback-sports","delivery"].map(i=>Wt+"car-kit/"+i),Ci=on*2,Zr=.8,Jr=.7,qu=.47,hv=2.4,fv=2.6,dv=.08;async function pv(i,e,t){const n=e.bounds,s=Yh((e.seed??0)+4242),r=tr(e.decor).map(b=>({...b,hx:b.hx+.35,hy:b.hy+.35})),o=(b,T,M=0)=>b>n.minX+.8&&b<n.maxX-.8&&!r.some(A=>Math.abs(b-A.x)<A.hx+M&&Math.abs(T-A.y)<A.hy+M),a=new Map,c=(b,T,M,A,x,y)=>{if(M-T<=0||x-A<=0)return;const L=new di(M-T,x-A);L.rotateX(-Math.PI/2),L.translate((T+M)/2,y,-(A+x)/2);const N=L.attributes.position,B=L.attributes.uv;for(let U=0;U<N.count;U++)B.setXY(U,N.getX(U)/Xu,-N.getZ(U)/Xu);a.has(b)||a.set(b,[]),a.get(b).push(L)};for(const b of e.blocks??[])c(uv[b.kind],b.x0-Jr,b.x1+Jr,b.y0-Jr,b.y1+Jr,.006);for(const b of e.blocks??[])b.passage!==void 0&&c("yard",b.passage-1.5,b.passage+1.5,b.y0,b.y1,.007);for(const b of e.roads??[])c("sidewalk",b.x0-Zr,b.x1+Zr,b.y0-Zr,b.y1+Zr,.009);for(const[b,T]of a){const M=new Ke(wu(T),fr(new Hi({map:lv(b)}),dv));M.geometry.userData.merged=!0,M.receiveShadow=!0,i.add(M)}const l=[],u=async(b,T,M,{scale:A=1,rot:x=0,h:y=.012,sx:L=A,sz:N=A}={})=>{const B=await t(b);B.scale.set(L,A,N),B.rotation.y=x,B.position.set(T,y,-M),l.push(B)},h=(e.roads??[]).filter(b=>b.dir==="ns"),f=(e.roads??[]).filter(b=>b.dir==="ew"),p=f.map(b=>(b.y0+b.y1)/2),g=(b,T,M)=>Math.abs(b-(T+M*on))<.1,_=[];for(const b of h){const T=(b.x0+b.x1)/2,M=Math.max(1,Math.round((b.y1-b.y0)/Ci)),A=(b.y1-b.y0)/M;for(let x=0;x<M;x++){const y=x===0&&p.some(L=>g(b.y0,L,1))||x===M-1&&p.some(L=>g(b.y1,L,-1));await u(y?$r.crossing:$r.straight,T,b.y0+A*(x+.5),{scale:Ci,sx:A,sz:Ci,rot:Math.PI/2})}for(const x of p)(g(b.y0,x,1)||g(b.y1,x,-1))&&_.push({x:T,y:x})}for(const b of p){const T=[...new Set(_.filter(A=>A.y===b).map(A=>A.x))].sort((A,x)=>A-x);for(const A of T)await u($r.cross,A,b,{scale:Ci});const M=[n.minX,...T.flatMap(A=>[A-on,A+on]),n.maxX];for(let A=0;A<M.length;A+=2){const x=M[A],y=M[A+1];if(y-x<.3)continue;const L=Math.max(1,Math.round((y-x)/Ci)),N=(y-x)/L;for(let B=0;B<L;B++)await u($r.straight,x+N*(B+.5),b,{scale:Ci,sx:N,sz:Ci})}}const m=(b,T,M)=>u(Yu[Math.floor(s()*Yu.length)],b,T,{scale:qu,rot:M}),d=(b,T)=>u(Wt+"city-kit-suburban/"+(s()<.6?"tree-large":"tree-small"),b,T,{scale:hv,rot:s()*6}),S=(b,T,M)=>u(Wt+"city-kit-roads/light-curved",b,T,{scale:fv,rot:M}),E=async(b,T,M,A=.3)=>{for(let x=0,y=0;x<T&&y<T*20;y++){const L=b.x0+.6+s()*(b.x1-b.x0-1.2),N=b.y0+.6+s()*(b.y1-b.y0-1.2);o(L,N,A)&&(b.passage===void 0||Math.abs(L-b.passage)>1.1)&&(await M(L,N),r.push({x:L,y:N,hx:A+.2,hy:A+.2}),x++)}};for(const b of e.blocks??[]){const T=M=>Math.round(M*(b.x1-b.x0)*(b.y1-b.y0)/100);if(b.kind==="parking")for(let M=b.y0+1;M<b.y1-1;M+=2)for(let A=b.x0+.5;A<b.x1-.5;A+=1)s()<.55&&o(A,M)&&await m(A,M,s()<.5?0:Math.PI);else if(b.kind==="plaza")await E(b,T(3),d,.6),await E(b,T(4),(M,A)=>u(Wt+"city-kit-suburban/planter",M,A,{scale:2.2})),await E(b,T(1.5),(M,A)=>S(M,A,s()*6));else if(b.kind==="office"||b.kind==="downtown")await E(b,T(1.5),d,.5),await E(b,T(1.5),(M,A)=>u(Wt+"city-kit-suburban/planter",M,A,{scale:2.2}));else if(b.kind==="shops"||b.kind==="yard"){const M=b.kind==="yard";await E(b,T(M?5:2),(A,x)=>u(Wt+"city-kit-roads/dumpster",A,x,{scale:2,rot:s()*6})),await E(b,T(M?6:2),(A,x)=>u(Wt+"city-kit-roads/construction-cone",A,x,{scale:2.2,rot:s()*6}),.15),M&&await E(b,T(2),(A,x)=>u(Wt+"city-kit-roads/construction-barrier",A,x,{scale:2.2,rot:s()<.5?0:Math.PI/2}))}else b.kind==="houses"?(await E(b,T(4),d,.5),await E(b,T(3),(M,A)=>u(Wt+"city-kit-suburban/fence-low",M,A,{scale:1.6,rot:s()<.5?0:Math.PI/2}),.7)):b.kind==="park"&&(await E(b,T(9),d,.5),await E(b,T(3),(M,A)=>u(Wt+"city-kit-suburban/planter",M,A,{scale:2.2})),await E(b,T(2),(M,A)=>u(Wt+"city-kit-suburban/path-stones-long",M,A,{scale:2.4,rot:s()*3}),.1))}for(const b of h)for(let T=b.y0+2;T<b.y1-1;T+=6){const M=s()<.5?-1:1,A=(M<0?b.x0:b.x1)+M*.45;o(A,T)&&await S(A,T,M<0?-Math.PI/2:Math.PI/2)}for(const b of h)for(let T=b.y0+3;T<b.y1-3;T+=7)s()<.25&&await m((b.x0+b.x1)/2+(s()<.5?-.7:.7),T,s()<.5?0:Math.PI);for(const b of f){const T=(b.y0+b.y1)/2;for(let M=n.minX+3;M<n.maxX-3;M+=7)s()<.2&&!_.some(A=>A.y===T&&Math.abs(A.x-M)<2.5)&&await m(M,T+(s()<.5?-.7:.7),Math.PI/2*(s()<.5?1:-1))}for(const[b,T]of[[4.5,e.hospital.y],[-4.5,e.hospital.y-2]])o(b,T)&&await u(Wt+"car-kit/ambulance",b,T,{scale:qu,rot:Math.PI/2});const v=new Map;for(const b of l)b.updateMatrixWorld(!0),b.traverse(T=>{if(!T.isMesh)return;const M=T.geometry.clone().applyMatrix4(T.matrixWorld),A=T.material.uuid+"|"+Object.keys(M.attributes).sort().join(",");v.has(A)||v.set(A,{material:T.material,geos:[]}),v.get(A).geos.push(M)});for(const{material:b,geos:T}of v.values()){const M=wu(T);M.userData.merged=!0;const A=new Ke(M,fr(b,zy));A.castShadow=!0,A.receiveShadow=!0,i.add(A)}}function mv(i,e={}){const{ship:t}=i;if(t.state!=="PLAYING"&&t.state!=="RESPAWN")return null;const n=Vh(t);if(n)return e.status!==n||t.gameTime>=e.statusUntil?null:{text:n==="stunned"?"기절!":n==="drunk"?"취했다!! 딸꾹!":e.runaway==="overheat"?"폭주!":"불꽃이 막 나와!",tone:"danger"};if(t.state==="RESPAWN"||Math.max(t.overLeft,t.overRight)>0)return null;if(i.checkpointIndex<0){if(t.gameTime<5)return{text:"한쪽 = 회전",tone:"info"};if(t.gameTime<10)return{text:"양쪽 = 전진",tone:"info"};if(t.gameTime<16)return{text:"꾹 누르면 폭주!",tone:"info"}}return null}const ju={chair:"쾅!",building:"쿵!",alcohol:"꿀꺽!",spicy:null};function Kh(i){const e=i.world.checkpoints?.[(i.checkpointIndex??-1)+1];return e?{x:e.x,y:e.y,kind:"checkpoint"}:{x:i.world.hospital.x,y:i.world.hospital.y,kind:"hospital"}}function gv(i){const e=Kh(i),t=e.x-i.ship.x,n=e.y-i.ship.y;return{angle:Math.atan2(t,n),distance:Math.hypot(t,n),kind:e.kind}}const _v={character:"canonical/character_frog.glb",office_block:"building_company.glb",alley_block:"building_alley.glb",city_block:"building_city.glb",hospital:"building_hospital.glb",chair:"obstacle_office_chair.glb",spicy:"obstacle_spicy_chaser.glb",alcohol:"obstacle_alcohol_turret.glb"},Ku=i=>new O(...[1,3,5].map(e=>parseInt(i.slice(e,e+2),16)/255)),xv={uniforms:{tWorld:{value:null},tHud:{value:null},uStyle:{value:0},worldPal:{value:Vc.map(Ku)},uiPal:{value:Wc.map(Ku)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
    precision highp float;
    uniform sampler2D tWorld; uniform sampler2D tHud;
    uniform vec3 worldPal[32]; uniform vec3 uiPal[4];
    uniform int uStyle; // 0 = 32-colour palette + dither, 1 = 8 levels per channel, 2 = full colour
    varying vec2 vUv;
    float bayer(ivec2 p){
      int b[16] = int[16](0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5);
      return (float(b[(p.y % 4) * 4 + (p.x % 4)]) - 7.5) / 15.0 * 5.0 / 255.0; // light dither: textures already carry detail
    }
    vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }
    void main(){
      vec4 hud = texture2D(tHud, vUv);
      if (uStyle == 2) {
        // Clean 3D: full colour world, HUD alpha-blended on top (no palette, no binarized text).
        vec3 w = toSRGB(clamp(texture2D(tWorld, vUv).rgb, 0.0, 1.0));
        gl_FragColor = vec4(mix(w, hud.rgb, hud.a), 1.0);
        return;
      }
      vec3 best = worldPal[0];
      float bestD = 1e9;
      if (hud.a > 0.5) {
        for (int i = 0; i < 4; i++) { vec3 d = hud.rgb - uiPal[i]; float dd = dot(d, d); if (dd < bestD) { bestD = dd; best = uiPal[i]; } }
      } else {
        vec3 c = toSRGB(clamp(texture2D(tWorld, vUv).rgb, 0.0, 1.0));
        if (uStyle == 1) best = floor(c * 7.0 + 0.5) / 7.0;
        else {
          c += bayer(ivec2(gl_FragCoord.xy));
          for (int i = 0; i < 32; i++) { vec3 d = c - worldPal[i]; float dd = dot(d, d); if (dd < bestD) { bestD = dd; best = worldPal[i]; } }
        }
      }
      gl_FragColor = vec4(best, 1.0);
    }`};async function yv(i,e){const t=new P_({canvas:i,antialias:!1,preserveDrawingBuffer:!0});t.setPixelRatio(1),t.shadowMap.enabled=!0,t.shadowMap.type=mf;const n=new cu;n.background=new Te("#8FD6F2"),n.add(new ex("#E6F4FF","#8C7BB0",1.25));const s=new Bh("#FFE6BF",2.4);s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:60}),n.add(s,s.target);const r=new Ex,o={},a=new WeakSet,c=X=>(X.scene.traverse(Q=>{const oe=Q.isMesh&&Q.geometry.attributes.color;if(!oe||a.has(oe))return;const Re=new Te;for(let q=0;q<oe.count;q++)oe.setXYZ(q,...Re.setRGB(oe.getX(q),oe.getY(q),oe.getZ(q)).convertSRGBToLinear().toArray());a.add(oe)}),X),l=async X=>{o[X]??=r.loadAsync(`./models/${_v[X]??`${X}.glb`}`).then(c);const Q=(await o[X]).scene.clone();return Q.traverse(oe=>{oe.isMesh&&(oe.castShadow=!0,oe.receiveShadow=!0,oe.material.metalness=0,oe.material.roughness=1)}),Q};let u=null,h=()=>{};async function f(X){const Q=new ct,oe=X.bounds,Re=-(oe.minY+oe.maxY)/2;((C,H,$,re,le,ue,he)=>{const Ue=new Ke(new di(C,H),fr(new Hi({color:$}),he));Ue.rotation.x=-Math.PI/2,Ue.position.set(re,ue,le),Ue.receiveShadow=!0,Q.add(Ue)})(400,oe.maxY-oe.minY+200,"#242637",0,Re,0,Gy);{const C=oe.maxY-oe.minY,H=X.zones??[],$=new di(oe.maxX-oe.minX,C,1,Math.ceil(C/2));$.rotateX(-Math.PI/2),$.translate((oe.minX+oe.maxX)/2,.003,Re);const re=$.attributes.position,le=[],ue=new Te,he=new Te;for(let k=0;k<re.count;k++){const qe=-re.getZ(k),Le=Math.max(0,H.findIndex(pe=>qe<pe.y1)),Ce=H[Le];ue.set(Ce?.ground??"#BFC3C7"),H[Le+1]&&Ce.y1-qe<as?ue.lerp(he.set(H[Le+1].ground),.5*(1-(Ce.y1-qe)/as)):H[Le-1]&&qe-Ce.y0<as&&ue.lerp(he.set(H[Le-1].ground),.5*(1-(qe-Ce.y0)/as)),le.push(ue.r,ue.g,ue.b)}$.setAttribute("color",new pt(le,3));const Ue=new Ke($,fr(new Hi({vertexColors:!0}),ky));Ue.receiveShadow=!0,Q.add(Ue)}const ee=await $y(Q,X,l);await pv(Q,X,l),u&&(n.remove(u),u.traverse(C=>{C.isMesh&&C.geometry.userData.merged&&C.geometry.dispose()})),u=Q,n.add(Q),h=ee}await f(e);const p=new ct,g=new ct,_=await l("character");_.traverse(X=>{X.isMesh&&(X.castShadow=!0)}),Wh(_),p.add(g),g.add(_),g.scale.setScalar(Zs);const m=Dy();n.add(p);const d={nozzleL:_.getObjectByName("nozzle_L"),nozzleR:_.getObjectByName("nozzle_R"),head:_.getObjectByName("head")};if(!d.nozzleL||!d.nozzleR||!d.head)throw new Error("canonical character is missing nozzle_L / nozzle_R / head");const S=vy(n,d,_),E=Cy(_,d),v=new hr(-1,1,1,-1,.1,200),b=new hr(-1,1,1,-1,0,1),T=new Ke(new di(2,2),new Kn(xv)),M=new cu;M.add(T);const A=document.createElement("canvas"),x=A.getContext("2d",{willReadFrequently:!0}),y=new Dh(A);y.minFilter=y.magFilter=bt,T.material.uniforms.tHud.value=y;let L=null,N=45,B=bo[1],U=0,D=0,P="color";function Y(X,Q,oe=B,Re=P){P=Re,T.material.uniforms.uStyle.value={pixel:0,soft:1,clean:2,color:2}[P],B=oe,[U,D]=Eo[X],N=Q,t.setSize(U,D,!1),L?.dispose();const q=P==="clean"?Kt:bt;L=new gi(U,D,{minFilter:q,magFilter:q,type:ws,samples:P==="clean"?4:0}),y.minFilter=y.magFilter=q,i.style.imageRendering=P==="clean"?"auto":"pixelated",T.material.uniforms.tWorld.value=L.texture,A.width=U,A.height=D,y.dispose();const ee=B/2,C=ee*U/D;Object.assign(v,{left:-C,right:C,top:ee,bottom:-ee}),v.updateProjectionMatrix()}function F(X,Q,oe,Re={world:e,enemies:[],projectiles:[]},q=[]){h(Re,X.gameTime,q);const[ee,C,H]=Tn(X.x,X.y,Xt);p.position.set(ee,C,H),p.rotation.y=dy(X.theta),p.visible=!(X.state==="RESPAWN"&&Math.floor(X.invulnerableLeft*10)%2);const $=m(X,Q,q);g.rotation.set($.pitch,0,$.roll),g.position.y=$.lift,E(X,Q,q),S(X,Q,q);const re=new O(ee,Xt,H-my(N,B,ly));v.position.copy(re).add(new O(...py(N,60))),v.lookAt(re),X.drunkLeft>0&&v.rotateZ(Math.sin(X.gameTime*2.4)*.07*Math.min(1,X.drunkLeft)),s.position.set(ee-8,14,H-2),s.target.position.set(ee,0,H),t.setRenderTarget(L),t.render(n,v),x.clearRect(0,0,U,D),oe(x,U,D),y.needsUpdate=!0,t.setRenderTarget(null),t.render(M,b);const le={},ue=he=>(he.project(v),{x:(he.x+1)/2*U,y:(1-he.y)/2*D,visible:Math.abs(he.x)<=1&&Math.abs(he.y)<=1});for(const he of["head","nozzleL","nozzleR"])le[he]=ue(d[he].getWorldPosition(new O));if(Re.world?.checkpoints){const he=Kh(Re);le.target={...ue(new O(...Tn(he.x,he.y,Xt))),kind:he.kind}}return le}function Z(){const X=t.getContext(),Q=new Uint8Array(U*D*4);X.readPixels(0,0,U,D,X.RGBA,X.UNSIGNED_BYTE,Q);const oe=new Uint8Array(Q.length);for(let ee=0;ee<D;ee++)oe.set(Q.subarray((D-1-ee)*U*4,(D-ee)*U*4),ee*U*4);const Re=x.getImageData(0,0,U,D).data,q=new Uint8Array(U*D);for(let ee=0;ee<q.length;ee++)q[ee]=Re[ee*4+3]>127?1:0;return{rgba:oe,mask:q,width:U,height:D}}return{setView:Y,setWorld:f,render:F,readback:Z,get size(){return[U,D]},get angle(){return N},get viewHeight(){return B}}}const St=Object.freeze({rise:1.25,fall:2,fullThreshold:.995,overheatAfter:1.6,idle:.35,thrust:4.45,torque:4.8,drag:.65,spinDrag:1.9,fixedDt:1/60});function vv(i={x:0,y:0}){return{x:i.x,y:i.y,theta:0,vx:0,vy:0,omega:0,left:0,right:0,overLeft:0,overRight:0,effectiveLeft:0,effectiveRight:0,state:"READY",disruptedLeft:0,stunnedLeft:0,drunkLeft:0,hiccupAt:1/0,hiccupSide:1,hitCooldown:0,checkpoint:{x:i.x,y:i.y},invulnerableLeft:0,gameTime:0,overheats:0,distance:0}}function Mv(i){i.state="PLAYING"}const Sv=i=>i.disruptedLeft>0?1.6:1;function Ev(i,e){return e==="left"?Math.sin(i*13.3+1.3)+Math.sin(i*5.7)+.7*Math.sin(i*2.3+.5)>.35:Math.sin(i*11.1+4.2)+Math.sin(i*6.9+2)+.7*Math.sin(i*3.1+1.7)>.35}function $u(i,e,t,n){const s=i.disruptedLeft>0&&Ev(i.gameTime,e),r=s?St.rise*4:St.rise;i[e]=Math.max(0,Math.min(1,i[e]+(t||s?r:-St.fall)*n));const o=e==="left"?"overLeft":"overRight";i[o]=i[e]>=St.fullThreshold?i[o]+n:0}function bv(i,{left:e=!1,right:t=!1}={},n=St.fixedDt){if(i.state!=="PLAYING"&&i.state!=="RESPAWN")return null;i.gameTime+=n,i.state==="RESPAWN"&&(i.invulnerableLeft=Math.max(0,i.invulnerableLeft-n),i.invulnerableLeft===0&&(i.state="PLAYING"));const s=i.stunnedLeft>0;let r=null;i.drunkLeft>0&&(i.omega+=Math.sin(i.gameTime*2.3)*Math.sin(i.gameTime*.9+1)*An.sway*n,i.gameTime>=i.hiccupAt&&(i.hiccupSide=-(i.hiccupSide||1),i.omega+=i.hiccupSide*An.spin,i.vx+=Math.sin(i.theta)*An.kick,i.vy+=Math.cos(i.theta)*An.kick,i.hiccupAt=i.gameTime+An.gap[0]+(An.gap[1]-An.gap[0])*(.5+.5*Math.sin(i.gameTime*12.9898)),r="hiccup")),i.drunkLeft=Math.max(0,i.drunkLeft-n),(i.disruptedLeft>0||s)&&(e=t=!1),$u(i,"left",e,n),$u(i,"right",t,n),(i.overLeft>=St.overheatAfter||i.overRight>=St.overheatAfter)&&(i.overLeft=i.overRight=0,i.disruptedLeft=ai.disrupt,i.overheats++,r="overheat"),i.effectiveLeft=s?0:i.left+St.idle*(1-i.left),i.effectiveRight=s?0:i.right+St.idle*(1-i.right),i.stunnedLeft=Math.max(0,i.stunnedLeft-n),i.disruptedLeft=Math.max(0,i.disruptedLeft-n);const o=i.disruptedLeft>0?ai.power:1,a=St.thrust*o*(i.effectiveLeft+i.effectiveRight),c=s?hc.drag:St.drag;i.vx+=(Math.sin(i.theta)*a-c*i.vx)*n,i.vy+=(Math.cos(i.theta)*a-c*i.vy)*n,i.omega+=(St.torque*o*Sv(i)*(i.effectiveLeft-i.effectiveRight)-St.spinDrag*i.omega)*n;const l=i.vx*n,u=i.vy*n;return i.x+=l,i.y+=u,i.theta+=i.omega*n,i.distance+=Math.hypot(l,u),r}function Tv(i){return i.filter(e=>e.type==="SpicyChaser"||e.type==="AlcoholTurret").map(e=>({...e,home:{x:e.x,y:e.y},mode:"idle",timer:0,aim:null}))}function Av(i,e){for(const t of i)Object.assign(t,{x:t.home.x,y:t.home.y,mode:"idle",timer:0,aim:null,leg:1,goal:null});e.length=0}function wv(i,e,t,n){for(const s of i){const r=t.x-s.x,o=t.y-s.y,a=Math.hypot(r,o);if(s.timer+=n,s.type==="SpicyChaser"){if(s.mode==="idle"&&a<ai.detect?Object.assign(s,{mode:"chase",timer:0}):s.mode==="chase"&&s.timer>ai.chaseTime?Object.assign(s,{mode:"cooldown",timer:0}):s.mode==="cooldown"&&s.timer>ai.cooldown&&Object.assign(s,{mode:"idle",timer:0}),s.mode==="idle"&&s.patrol){s.leg??=1;const f=s.leg>0?{x:s.patrol.x1,y:s.patrol.y1}:{x:s.patrol.x0,y:s.patrol.y0};Math.hypot(f.x-s.x,f.y-s.y)<.05&&(s.leg=-s.leg),s.goal=s.leg>0?{x:s.patrol.x1,y:s.patrol.y1}:{x:s.patrol.x0,y:s.patrol.y0}}else s.goal=s.mode==="chase"?t:s.home;const c=s.mode==="idle"?ai.patrolSpeed:ai.speed,l=s.goal.x-s.x,u=s.goal.y-s.y,h=Math.hypot(l,u);if(h>.001){const f=Math.min(h,c*n)/h;s.x+=l*f,s.y+=u*f}}else if(s.mode==="idle"&&a<Pt.range&&s.timer>Pt.period-Pt.charge)Object.assign(s,{mode:"charge",timer:0,aim:a>1e-6?{x:r/a,y:o/a}:{x:0,y:1}});else if(s.mode==="charge"&&s.timer>=Pt.charge){for(let c=0;c<Pt.shots;c++){const l=(c-(Pt.shots-1)/2)*Pt.spread,u=Math.cos(l),h=Math.sin(l),f=s.aim.x*u-s.aim.y*h,p=s.aim.x*h+s.aim.y*u;e.push({x:s.x,y:s.y,vx:f*Pt.shotSpeed,vy:p*Pt.shotSpeed,life:Pt.shotLife})}Object.assign(s,{mode:"idle",timer:0})}}for(const s of e)s.x+=s.vx*n,s.y+=s.vy*n,s.life-=n;for(let s=e.length-1;s>=0;s--)e[s].life<=0&&e.splice(s,1)}function _a(i,e,t,n,s,r){const o=i-n,a=e-s,c=Math.hypot(o,a),l=t+r-c;return l<=0?null:c>1e-9?{nx:o/c,ny:a/c,depth:l}:{nx:0,ny:1,depth:l}}function Rv(i,e,t,n,s,r,o){const a=Math.max(n-r,Math.min(i,n+r)),c=Math.max(s-o,Math.min(e,s+o)),l=i-a,u=e-c,h=Math.hypot(l,u);if(h>1e-9)return h<t?{nx:l/h,ny:u/h,depth:t-h}:null;const f=r-Math.abs(i-n),p=o-Math.abs(e-s);return f<p?{nx:Math.sign(i-n)||1,ny:0,depth:f+t}:{nx:0,ny:Math.sign(e-s)||1,depth:p+t}}function xa(i,e,t,n,s){i.x+=e.nx*e.depth,i.y+=e.ny*e.depth;const r=i.vx*e.nx+i.vy*e.ny;r<0&&(i.vx-=(1+t)*r*e.nx,i.vy-=(1+t)*r*e.ny),i.vx+=e.nx*n,i.vy+=e.ny*n;const o=Math.sin(i.theta),a=Math.cos(i.theta);i.omega+=Math.sign(o*e.ny-a*e.nx||1)*s}function Cv(i){return{segments:[[{t:0,x:i.x,y:i.y,theta:i.theta}]],events:[]}}function Lv(i,e){const t=i.segments.at(-1),n=t.at(-1);(e.gameTime-n.t>=.1||Math.hypot(e.x-n.x,e.y-n.y)>=.5)&&t.push({t:e.gameTime,x:e.x,y:e.y,theta:e.theta})}function nr(i,e,t,n={}){i.events.push({type:t,t:e.gameTime,x:e.x,y:e.y,...n})}function Pv(i,e){i.segments.push([{t:e.gameTime,x:e.x,y:e.y,theta:e.theta}])}function $h(i,e){const t=i.segments.at(-1),n=t.at(-1);(n.x!==e.x||n.y!==e.y)&&t.push({t:e.gameTime,x:e.x,y:e.y,theta:e.theta})}function Iv(i,e){const t=i.segments.flatMap((f,p)=>f.map(g=>({...g,s:p}))),n=t[0].t,s=t.at(-1).t,r=n+Math.max(0,Math.min(1,e))*(s-n);let o=0,a=t.length-1;for(;a-o>1;){const f=o+a>>1;t[f].t<=r?o=f:a=f}const c=t[o],l=t[a];if(c.s!==l.s||l.t===c.t||r<=c.t)return{x:c.x,y:c.y,theta:c.theta,t:r};const u=Math.min(1,(r-c.t)/(l.t-c.t)),h=Math.atan2(Math.sin(l.theta-c.theta),Math.cos(l.theta-c.theta));return{x:c.x+(l.x-c.x)*u,y:c.y+(l.y-c.y)*u,theta:c.theta+h*u,t:r}}function Zh(i,e={muted:!1,volume:.7}){const t={...i,obstacles:[...i.obstacles,...qc(i)]},n=vv(t.spawn);return n.state="TITLE",{world:t,ship:n,audio:e,enemies:Tv(t.obstacles),projectiles:[],checkpointIndex:-1,readyLeft:0,pausedFrom:null,result:null,zoneIndex:-1,log:Cv(n),stats:{hits:0,maxFullHold:0}}}const po=i=>i==="PLAYING"||i==="RESPAWN",Dv=i=>po(i)||i==="READY";function Uv(i){i.ship.state==="TITLE"&&(i.ship.state="READY",i.readyLeft=fy)}function Nv(i){Dv(i.ship.state)&&(i.pausedFrom=i.ship.state,i.ship.state="PAUSED")}function Fv(i){i.ship.state==="PAUSED"&&(i.ship.state=i.pausedFrom)}function Ov(i){const{ship:e}=i;if(e.state!=="PAUSED")return[];$h(i.log,e);const{x:t,y:n}=e.checkpoint;Object.assign(e,{x:t,y:n,theta:0,vx:0,vy:0,omega:0,left:0,right:0,overLeft:0,overRight:0,effectiveLeft:0,effectiveRight:0,disruptedLeft:0,stunnedLeft:0,drunkLeft:0,hiccupAt:1/0,hitCooldown:0,state:"RESPAWN",invulnerableLeft:sy}),Av(i.enemies,i.projectiles),Pv(i.log,e);const s={type:"respawn",reason:"restart",checkpointId:i.world.checkpoints[i.checkpointIndex]?.id??"spawn",x:t,y:n};return nr(i.log,e,"respawn",{reason:"restart"}),[s]}function Bv(i){return i.ship.state!=="PAUSED"?[]:[Jh(i,"quit")]}function Jh(i,e){const{ship:t}=i;return $h(i.log,t),nr(i.log,t,e==="hospital"?"hospital":"quit"),t.state="FINISHED",i.result={outcome:e,time:t.gameTime,distance:t.distance,overheats:t.overheats,hits:i.stats.hits,maxFullHold:i.stats.maxFullHold},{type:"finish",outcome:e,x:t.x,y:t.y}}function Qh(i,e,t){const{ship:n}=i;if(n.state==="READY")return i.readyLeft-=t,i.readyLeft>0?[]:(Mv(n),[{type:"start",x:n.x,y:n.y}]);const s=kv(i,e,t),{log:r,stats:o}=i;o.maxFullHold=Math.max(o.maxFullHold,n.overLeft,n.overRight);for(const l of s)l.type==="overheat"&&nr(r,n,"overheat"),l.type==="hit"&&(o.hits++,nr(r,n,`${l.kind}_hit`)),l.type==="checkpoint"&&nr(r,n,"checkpoint",{id:l.id});const a=(i.world.zones??[]).findIndex(l=>n.y>=l.y0&&n.y<l.y1);po(n.state)&&a>=0&&a!==i.zoneIndex&&(i.zoneIndex=a,s.push({type:"zone",id:i.world.zones[a].id,name:i.world.zones[a].name})),po(n.state)&&Lv(r,n);const c=s.findIndex(l=>l.type==="hospital");return c>=0&&(s[c]=Jh(i,"hospital")),s}function kv(i,e,t){const{ship:n,world:s,enemies:r,projectiles:o}=i,a=[],c=bv(n,e,t);if(c==="overheat"&&a.push({type:"overheat",x:n.x,y:n.y}),c==="hiccup"&&a.push({type:"hiccup",x:n.x,y:n.y}),!po(n.state))return a;const l=s.hospital;if(Math.hypot(n.x-l.x,n.y-l.y)<=l.radius)return a.push({type:"hospital"}),a;wv(r,o,n,t),n.hitCooldown=Math.max(0,n.hitCooldown-t);const u=n.state==="RESPAWN"||n.hitCooldown>0||n.stunnedLeft>0,h=(g,_,m,d)=>{xa(n,_,Ti,m,d),n.hitCooldown=uy,g==="alcohol"?(n.drunkLeft>0||(n.hiccupAt=n.gameTime+An.first),n.drunkLeft=An.time):n.stunnedLeft=hc.time,a.push({type:"hit",kind:g,x:n.x,y:n.y,nx:_.nx,ny:_.ny})};for(const g of s.obstacles)if(g.type==="Building"){const _=Rv(n.x,n.y,Ws,g.x,g.y,g.hx,g.hy);if(!_)continue;const m=-(n.vx*_.nx+n.vy*_.ny);u||m<hc.minImpact?xa(n,_,Ti,0,0):h("building",_,la.building,ua.building)}else if(g.type==="OfficeChair"){const _=_a(n.x,n.y,Ws,g.x,g.y,g.radius);_&&(u?xa(n,_,Ti,0,0):h("chair",_,la.chair,ua.chair))}if(n.state!=="RESPAWN"){for(const g of r){if(g.type!=="SpicyChaser"||n.disruptedLeft>0)continue;const _=_a(n.x,n.y,Ws,g.x,g.y,g.radius);_&&(n.disruptedLeft=ai.disrupt,Object.assign(g,{mode:"cooldown",timer:0}),a.push({type:"hit",kind:"spicy",x:n.x,y:n.y,nx:_.nx,ny:_.ny}))}for(let g=o.length-1;g>=0;g--){const _=o[g];if(!_a(n.x,n.y,Ws,_.x,_.y,Pt.shotRadius)||(o.splice(g,1),u))continue;const d=Math.hypot(_.vx,_.vy)||1;h("alcohol",{nx:_.vx/d,ny:_.vy/d,depth:0},la.alcohol,ua.alcohol)}}s.checkpoints.forEach((g,_)=>{_>i.checkpointIndex&&Math.hypot(n.x-g.x,n.y-g.y)<=g.radius+hy&&(i.checkpointIndex=_,n.checkpoint={x:g.x,y:g.y},a.push({type:"checkpoint",id:g.id,x:n.x,y:n.y}))});const f=s.bounds,p=Ws;return n.x<f.minX+p&&(n.x=f.minX+p,n.vx=Math.abs(n.vx)*Ti),n.x>f.maxX-p&&(n.x=f.maxX-p,n.vx=-Math.abs(n.vx)*Ti),n.y<f.minY+p&&(n.y=f.minY+p,n.vy=Math.abs(n.vy)*Ti),n.y>f.maxY-p&&(n.y=f.maxY-p,n.vy=-Math.abs(n.vy)*Ti),a}const Ze="#1B2333",pc="#26304A",_t="#FFF4DC",Rn="#4FD1B0",an="#FFD25A",kt="#FF6B5A",Zu="#F28AA5",zv="#7CC8F0",ir="rgba(255, 244, 220, 0.55)",ef='Galmuri11, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',at=(i,e,t,n)=>({x:Math.round(i),y:Math.round(e),w:Math.round(t),h:Math.round(n)}),rs=(i,e,t)=>i&&e>=i.x&&e<i.x+i.w&&t>=i.y&&t<i.y+i.h,tf=()=>performance.now()/1e3,qs=typeof Image>"u"?null:Object.assign(new Image,{src:"./logo.webp"}),mc=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function Ln(i,e,t){const n=Math.min(t,e.w/2,e.h/2);i.beginPath(),i.moveTo(e.x+n,e.y),i.arcTo(e.x+e.w,e.y,e.x+e.w,e.y+e.h,n),i.arcTo(e.x+e.w,e.y+e.h,e.x,e.y+e.h,n),i.arcTo(e.x,e.y+e.h,e.x,e.y,n),i.arcTo(e.x,e.y,e.x+e.w,e.y,n),i.closePath()}function It(i,e,t,n,{line:s=Ze,rad:r=8,shadow:o=!0,lw:a=2}={}){o&&(i.fillStyle="rgba(10, 14, 24, 0.45)",Ln(i,{...t,y:t.y+3*e},r*e),i.fill()),Ln(i,t,r*e),n&&(i.fillStyle=n,i.fill()),s&&(i.strokeStyle=s,i.lineWidth=a*e,i.stroke())}function lt(i,e,t,n,s,{size:r=12,color:o=_t,outline:a=Ze,align:c="center",shadow:l=null}={}){i.font=`${Math.round(r*e)}px ${ef}`,i.textAlign=c,i.textBaseline="middle",i.lineJoin="round",l&&(i.fillStyle=l,i.fillText(t,n,s+Math.max(2,r*.12)*e)),a&&(i.strokeStyle=a,i.lineWidth=Math.max(2,r*.25)*e,i.strokeText(t,n,s)),i.fillStyle=o,i.fillText(t,n,s)}const gc=(i,e,t,n)=>(i.font=`${Math.round(n*e)}px ${ef}`,i.measureText(t).width),Cn={pause(i,e,t,n,s){i.fillStyle=s,i.fillRect(e-n*.6,t-n*.7,n*.42,n*1.4),i.fillRect(e+n*.18,t-n*.7,n*.42,n*1.4)},play(i,e,t,n,s){i.fillStyle=s,i.beginPath(),i.moveTo(e-n*.5,t-n*.7),i.lineTo(e+n*.7,t),i.lineTo(e-n*.5,t+n*.7),i.closePath(),i.fill()},retry(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=n*.3,i.beginPath(),i.arc(e,t,n*.6,-.4,Math.PI*1.45),i.stroke(),i.fillStyle=s,i.beginPath(),i.moveTo(e+n*.95,t-n*.55),i.lineTo(e+n*.25,t-n*.55),i.lineTo(e+n*.6,t+n*.05),i.closePath(),i.fill()},cross(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=n*.32,i.lineCap="round",i.beginPath(),i.moveTo(e-n*.55,t-n*.55),i.lineTo(e+n*.55,t+n*.55),i.moveTo(e+n*.55,t-n*.55),i.lineTo(e-n*.55,t+n*.55),i.stroke(),i.lineCap="butt"},speaker(i,e,t,n,s,r){i.fillStyle=s,i.beginPath(),i.moveTo(e-n*.8,t-n*.3),i.lineTo(e-n*.4,t-n*.3),i.lineTo(e+n*.1,t-n*.75),i.lineTo(e+n*.1,t+n*.75),i.lineTo(e-n*.4,t+n*.3),i.lineTo(e-n*.8,t+n*.3),i.closePath(),i.fill(),r?Cn.cross(i,e+n*.6,t,n*.55,kt):(i.strokeStyle=s,i.lineWidth=n*.18,i.beginPath(),i.arc(e+n*.15,t,n*.45,-.9,.9),i.stroke(),i.beginPath(),i.arc(e+n*.15,t,n*.8,-.8,.8),i.stroke())},lock(i,e,t,n,s){i.fillStyle=s,i.fillRect(e-n*.6,t-n*.1,n*1.2,n*.85),i.strokeStyle=s,i.lineWidth=n*.25,i.beginPath(),i.arc(e,t-n*.15,n*.4,Math.PI,0),i.stroke()},hospital(i,e,t,n){i.fillStyle=_t,i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fill(),i.strokeStyle=Ze,i.lineWidth=n*.22,i.stroke(),i.fillStyle=kt,i.fillRect(e-n*.18,t-n*.6,n*.36,n*1.2),i.fillRect(e-n*.6,t-n*.18,n*1.2,n*.36)},frog(i,e,t,n){i.fillStyle="#7BC67E",i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fill(),i.strokeStyle=Ze,i.lineWidth=n*.28,i.stroke();for(const s of[-1,1])i.fillStyle=_t,i.beginPath(),i.arc(e+s*n*.42,t-n*.3,n*.3,0,Math.PI*2),i.fill(),i.fillStyle=Ze,i.fillRect(e+s*n*.42-n*.1,t-n*.4,n*.2,n*.2)}};function nf(i,e,t,n,s){let r=i.createLinearGradient(0,0,0,n);r.addColorStop(0,"rgba(15, 20, 32, 0.55)"),r.addColorStop(1,"rgba(15, 20, 32, 0)"),i.fillStyle=r,i.fillRect(0,0,e,n),r=i.createLinearGradient(0,t-s,0,t),r.addColorStop(0,"rgba(15, 20, 32, 0)"),r.addColorStop(1,"rgba(15, 20, 32, 0.6)"),i.fillStyle=r,i.fillRect(0,t-s,e,s)}function Hv(i,e,t,n,s=null,r=null,o=!1,a=null,c={left:!1,right:!1},l=null){const u=e/360,{ship:h,world:f}=n;if(o)return i.fillStyle="rgba(255, 244, 220, 0.85)",i.fillRect(0,0,e,t),{};nf(i,e,t,70*u,110*u);const p=at(8*u,8*u,32*u,32*u);It(i,u,p,_t),Cn.pause(i,p.x+p.w/2,p.y+p.h/2,9*u,Ze);const g=f.spawn.y,_=f.hospital.y,m=A=>Math.max(0,Math.min(1,(A-g)/(_-g))),d=at(50*u,17*u,270*u,14*u);It(i,u,d,"rgba(27, 35, 51, 0.75)",{rad:7});const S=m(h.y);S>.01&&(Ln(i,at(d.x+2*u,d.y+2*u,(d.w-4*u)*S,d.h-4*u),5*u),i.fillStyle=Rn,i.fill()),f.checkpoints.forEach((A,x)=>{const y=d.x+d.w*m(A.y),L=d.y+d.h/2,N=x<=n.checkpointIndex,B=4.5*u;i.fillStyle=N?_t:an,i.strokeStyle=Ze,i.lineWidth=1.5*u,i.beginPath(),i.moveTo(y,L-B),i.lineTo(y+B,L),i.lineTo(y,L+B),i.lineTo(y-B,L),i.closePath(),i.fill(),i.stroke()}),Cn.hospital(i,d.x+d.w+12*u,d.y+d.h/2,11*u),Cn.frog(i,d.x+d.w*S,d.y+d.h/2,8*u),lt(i,u,mc(h.gameTime),d.x+2*u,d.y+d.h+13*u,{align:"left",color:_t});const{distance:E}=gv(n);if(l){const A=l.kind==="checkpoint"?an:kt,x=h.gameTime,y={x0:22*u,y0:64*u,x1:e-22*u,y1:t-104*u};if(l.visible&&l.x>y.x0&&l.x<y.x1&&l.y>y.y0&&l.y<y.y1){const N=l.y-(46+Math.abs(Math.sin(x*5))*8)*u;i.fillStyle=A,i.strokeStyle=Ze,i.lineWidth=2*u,i.beginPath(),i.moveTo(l.x-10*u,N-8*u),i.lineTo(l.x+10*u,N-8*u),i.lineTo(l.x,N+6*u),i.closePath(),i.fill(),i.stroke(),lt(i,u,l.kind==="checkpoint"?"여기서 쉬기!":"병원!",l.x,N-20*u,{color:A})}else{const N=e/2,B=t*.58,U=l.x-N,D=l.y-B,P=Math.min(U>0?(y.x1-N)/U:U<0?(y.x0-N)/U:1/0,D>0?(y.y1-B)/D:D<0?(y.y0-B)/D:1/0),Y=N+U*P,F=B+D*P,Z=Math.atan2(D,U),X=1+.12*Math.sin(x*6);i.save(),i.translate(Y,F),i.rotate(Z),i.scale(X,X),i.fillStyle=A,i.strokeStyle=Ze,i.lineWidth=2*u,i.beginPath(),i.moveTo(14*u,0),i.lineTo(-6*u,-11*u),i.lineTo(-2*u,0),i.lineTo(-6*u,11*u),i.closePath(),i.fill(),i.stroke(),i.restore(),lt(i,u,`${Math.round(E)}m`,Y-Math.cos(Z)*26*u,F-Math.sin(Z)*18*u,{color:A})}}if(s){const A=Math.min(1,s.left/.25,(1-s.left)/.15+.2);i.globalAlpha=Math.max(0,Math.min(1,A));const x=150*u,y=Math.max(160*u,gc(i,u,s.name,24)+60*u);It(i,u,at(e/2-y/2,x-26*u,y,52*u),"rgba(27, 35, 51, 0.88)",{line:an,rad:12}),s.count&&lt(i,u,`구역 ${s.index+1} / ${s.count}`,e/2,x-12*u,{color:an}),lt(i,u,s.name,e/2,x+9*u,{size:24}),i.globalAlpha=1}if(r){const A={danger:kt,good:Rn,info:"rgba(27, 35, 51, 0.88)"}[r.tone]??Ze,x=r.tone==="good"?Ze:_t,y=r.tone==="good"?null:Ze,L=gc(i,u,r.text,12)+32*u,N=at(e/2-L/2,92*u,L,28*u);It(i,u,N,A,{rad:14}),lt(i,u,r.text,e/2,N.y+N.h/2,{color:x,outline:y})}if(a){const A=Math.max(0,.5-(a.left??.5)),x=A<.08?.6+5*A:1;i.save(),i.translate(a.x,a.y-34*u),i.rotate(-.08),i.scale(x,x),lt(i,u,a.text,0,0,{size:24,color:an,shadow:kt}),i.restore()}const v=mr(h)!==null,b=!v&&h.drunkLeft>0,T=h.disruptedLeft>0?Math.round(Math.sin(h.gameTime*50)*3*u):0,M=Math.floor(h.gameTime*8)%2===0;for(const[A,x,y,L]of[["left",10,"왼쪽",-1],["right",186,"오른쪽",1]]){const N=c[A]&&!v,B=h[A],U=h[A==="left"?"overLeft":"overRight"]>0,D=at(x*u+T,t-(N?74:72)*u,164*u,62*u);It(i,u,D,N?Rn:"rgba(27, 35, 51, 0.72)",{line:v?kt:b?Zu:N?Ze:"rgba(255, 244, 220, 0.7)",rad:12,lw:v||b?3:2});const P=D.x+D.w/2,Y=D.y+19*u,F=y,Z=N?Ze:b?Zu:_t;if(v)Cn.lock(i,D.x+18*u,Y,8*u,kt);else{i.fillStyle=Z;const Q=D.x+(L<0?18:D.w-18)*u;i.beginPath(),i.moveTo(Q+L*6*u,Y),i.lineTo(Q-L*4*u,Y-6*u),i.lineTo(Q-L*4*u,Y+6*u),i.closePath(),i.fill()}lt(i,u,F,P,Y,{color:Z,outline:N?null:Ze});const X=at(D.x+12*u,D.y+36*u,D.w-24*u,14*u);Ln(i,X,7*u),i.fillStyle=N?"rgba(27, 35, 51, 0.35)":"rgba(10, 14, 24, 0.6)",i.fill(),B>.01&&(Ln(i,at(X.x+2*u,X.y+2*u,(X.w-4*u)*B,X.h-4*u),5*u),i.fillStyle=U?M?kt:_t:B>=.8?an:N?_t:Rn,i.fill())}return{pause:p}}function Gv(i,e,t){const n=e/360,s=tf();i.fillStyle="rgba(15, 20, 32, 0.35)",i.fillRect(0,0,e,t),nf(i,e,t,260*n,240*n);const r=Math.sin(s*2)*4*n;if(qs?.complete&&qs.naturalWidth){const l=320*n,u=l*qs.naturalHeight/qs.naturalWidth;i.imageSmoothingEnabled=!0,i.drawImage(qs,e/2-l/2,165*n-u/2+r,l,u)}else lt(i,n,"치루켓",e/2,170*n+r,{size:48,color:_t,shadow:kt});lt(i,n,"엉덩이 로켓 타고 병원까지!",e/2,292*n,{color:an});const o=1+Math.sin(s*4)*.035,a=196*n*o,c=48*n*o;It(i,n,at(e/2-a/2,430*n-c/2,a,c),Rn,{rad:24}),lt(i,n,"탭해서 출발",e/2,430*n,{size:24,color:Ze,outline:null});for(const[l,u,h]of[["A","왼쪽 엉덩이",110],["D","오른쪽 엉덩이",250]])It(i,n,at((h-16)*n,498*n,32*n,32*n),_t,{rad:6}),lt(i,n,l,h*n,514*n,{color:Ze,outline:null}),lt(i,n,u,h*n,548*n,{color:_t});return lt(i,n,"양쪽 = 전진 · 한쪽 = 회전 · 화면 아래 좌/우 터치",e/2,580*n,{color:ir,outline:null}),{start:at(0,0,e,t)}}function Vv(i,e,t,n){const s=e/360,r=Math.ceil(n.readyLeft),o=n.readyLeft-Math.floor(n.readyLeft),a=n.world.zones?.[0]?.name??"",c=gc(i,s,`${a}에서 출발!`,12)+40*s;It(i,s,at(e/2-c/2,150*s,c,30*s),"rgba(27, 35, 51, 0.88)",{line:an,rad:15}),lt(i,s,`${a}에서 출발!`,e/2,165*s,{color:an});const l=1+Math.max(0,o-.7)*2;return i.save(),i.translate(e/2,236*s),i.scale(l,l),lt(i,s,String(Math.max(1,r)),0,0,{size:72,color:_t,shadow:kt}),i.restore(),{}}function Wv(i,e,t,n){const s=e/360;i.fillStyle="rgba(15, 20, 32, 0.62)",i.fillRect(0,0,e,t);const r=at(36*s,140*s,288*s,340*s);It(i,s,r,Ze,{line:_t,rad:16,lw:2.5}),It(i,s,at(r.x+54*s,r.y-18*s,180*s,36*s),an,{rad:18}),lt(i,s,"일시정지",e/2,r.y,{size:24,color:Ze,outline:null});const o=236*s,a=46*s,c=e/2-o/2,l={resume:at(c,r.y+40*s,o,a),restart:at(c,r.y+98*s,o,a),quit:at(c,r.y+156*s,o,a)},u=(d,S,E,v,b)=>{It(i,s,d,S,{rad:12}),Cn[E](i,d.x+26*s,d.y+d.h/2,9*s,b),lt(i,s,v,d.x+d.w/2+12*s,d.y+d.h/2,{size:24,color:b,outline:null})};u(l.resume,Rn,"play","계속하기",Ze),u(l.restart,_t,"retry","체크포인트로",Ze),u(l.quit,kt,"cross","그만하기",_t);const h=r.y+232*s,f=44*s,p=n.audio.muted?0:n.audio.volume;lt(i,s,"소리",r.x+24*s,h-14*s,{align:"left",color:ir,outline:null}),lt(i,s,`${Math.round(p*100)}%`,r.x+r.w-24*s,h-14*s,{align:"right",color:ir,outline:null}),l.mute=at(c,h,52*s,f),It(i,s,l.mute,n.audio.muted?pc:_t,{rad:10,line:n.audio.muted?kt:Ze}),Cn.speaker(i,l.mute.x+l.mute.w/2,h+f/2,10*s,n.audio.muted?kt:Ze,n.audio.muted);const g=at(c+72*s,h+f/2-6*s,o-84*s,12*s);l.volume={...at(g.x-12*s,h-4*s,g.w+24*s,f+8*s),track:g},Ln(i,g,6*s),i.fillStyle=pc,i.fill(),i.strokeStyle="rgba(255, 244, 220, 0.5)",i.lineWidth=1.5*s,i.stroke(),p>.01&&(Ln(i,at(g.x,g.y,g.w*p,g.h),6*s),i.fillStyle=Rn,i.fill());const _=g.x+g.w*p,m=g.y+g.h/2;return i.fillStyle="rgba(10, 14, 24, 0.45)",i.beginPath(),i.arc(_,m+3*s,13*s,0,Math.PI*2),i.fill(),i.fillStyle=_t,i.beginPath(),i.arc(_,m,13*s,0,Math.PI*2),i.fill(),i.strokeStyle=Ze,i.lineWidth=2*s,i.stroke(),lt(i,s,"Esc 계속 · R 다시 · Q 그만 · ←→ 소리",e/2,r.y+r.h-18*s,{color:ir,outline:null}),l}function Xv(i){if(i.outcome!=="hospital")return null;const e=i.time+i.hits*3+i.overheats*5;return e<170?"S":e<230?"A":e<320?"B":"C"}function Yv(i,e,t,n){const s=e/360,{result:r,log:o,world:a}=n;i.fillStyle="rgba(15, 20, 32, 0.9)",i.fillRect(0,0,e,t);const c=r.outcome==="hospital",l=Xv(r);if(It(i,s,at(48*s,22*s,220*s,44*s),c?Rn:kt,{rad:22}),lt(i,s,c?"병원 도착!":"중도 포기",158*s,44*s,{size:24,color:c?Ze:_t,outline:c?null:Ze}),l){const F=304*s,Z=44*s;i.fillStyle="rgba(10, 14, 24, 0.45)",i.beginPath(),i.arc(F,Z+3*s,28*s,0,Math.PI*2),i.fill(),i.fillStyle={S:an,A:Rn,B:zv,C:_t}[l],i.beginPath(),i.arc(F,Z,28*s,0,Math.PI*2),i.fill(),i.strokeStyle=Ze,i.lineWidth=2.5*s,i.stroke(),lt(i,s,l,F,Z+1*s,{size:36,color:Ze,outline:null})}const u=o.events.filter(F=>F.type==="checkpoint").length;[["시간",mc(r.time)],["거리",`${r.distance.toFixed(0)}m`],["체크포인트",`${u} / ${a.checkpoints.length}`],["충돌",String(r.hits)],["과열",String(r.overheats)],["최대출력",`${r.maxFullHold.toFixed(1)}초`]].forEach(([F,Z],X)=>{const Q=at((14+X%3*112)*s,(82+Math.floor(X/3)*58)*s,108*s,52*s);It(i,s,Q,pc,{line:"rgba(255, 244, 220, 0.35)",rad:10,shadow:!1}),lt(i,s,F,Q.x+Q.w/2,Q.y+12*s,{color:ir,outline:null}),lt(i,s,Z,Q.x+Q.w/2,Q.y+35*s,{size:24,color:_t,outline:null})});const f=a.bounds,p=at(14*s,204*s,332*s,346*s),g=tf();n.replayStart??=g;const _=Math.max(.1,o.segments.at(-1).at(-1).t-o.segments[0][0].t),m=Math.min(14,Math.max(6,_/15)),S=(g-n.replayStart)%(m+1.5),E=Math.min(1,S/m),v=Iv(o,E),b=p.w/(f.maxX-f.minX),T=p.h/b,M=Math.max(f.minY+T/2,Math.min(f.maxY-T/2,v.y)),A=(F,Z)=>[p.x+(F-f.minX)*b,p.y+p.h/2-(Z-M)*b];It(i,s,p,"#202A3E",{line:_t,rad:12}),i.save(),Ln(i,p,12*s),i.clip();const x=(F,Z,X,Q,oe)=>{const[Re,q]=A(F,Q),[ee,C]=A(X,Z);i.fillStyle=oe,i.fillRect(Re,q,ee-Re,C-q)};for(const F of a.roads??[])x(F.x0,F.y0,F.x1,F.y1,"rgba(255, 244, 220, 0.10)");for(const F of a.obstacles.filter(Z=>Z.type==="Building"))x(F.x-F.hx,F.y-F.hy,F.x+F.hx,F.y+F.hy,"rgba(255, 244, 220, 0.5)");i.lineWidth=2*s,i.lineJoin="round",i.strokeStyle="rgba(79, 209, 176, 0.3)";for(const F of o.segments)i.beginPath(),F.forEach((Z,X)=>i[X?"lineTo":"moveTo"](...A(Z.x,Z.y))),i.stroke();i.strokeStyle="rgba(61, 220, 132, 0.9)",i.lineWidth=2.5*s;for(const F of o.segments){const Z=F.filter(X=>X.t<=v.t&&X.t>=v.t-3);Z.length&&(v.t-Z.at(-1).t<.3&&Z.push(v),i.beginPath(),Z.forEach((X,Q)=>i[Q?"lineTo":"moveTo"](...A(X.x,X.y))),i.stroke())}const y=(F,Z,X,Q,oe)=>{const[Re,q]=A(F,Z);i.beginPath(),i.arc(Re,q,X,0,Math.PI*2),Q&&(i.fillStyle=Q,i.fill()),oe&&(i.strokeStyle=oe,i.lineWidth=2*s,i.stroke())},L=new Set(o.events.filter(F=>F.type==="checkpoint"&&F.t<=v.t).map(F=>F.id));for(const F of a.checkpoints){const Z=L.has(F.id);y(F.x,F.y,F.radius*b,Z?"rgba(127, 224, 192, 0.35)":"rgba(255, 210, 90, 0.25)",Z?"#7FE0C0":an)}{const[F,Z]=A(a.hospital.x,a.hospital.y);Cn.hospital(i,F,Z,Math.max(8*s,a.hospital.radius*b*.7))}const N=.4*_/m;for(const F of o.events){if(!(F.type==="overheat"||F.type.endsWith("_hit"))||F.t>v.t)continue;const Z=v.t-F.t;Z<N?y(F.x,F.y,(4+10*Z/N)*s,null,kt):y(F.x,F.y,2.5*s,kt)}const[B,U]=A(v.x,v.y),D=7*s;i.translate(B,U),i.rotate(v.theta),i.beginPath(),i.moveTo(0,-D*1.3),i.lineTo(D*.85,D*.8),i.lineTo(-D*.85,D*.8),i.closePath(),i.fillStyle="#3DDC84",i.fill(),i.strokeStyle=Ze,i.lineWidth=1.5*s,i.stroke(),i.restore();const P=at(p.x+10*s,p.y+p.h-16*s,p.w-20*s,6*s);Ln(i,P,3*s),i.fillStyle="rgba(255, 244, 220, 0.2)",i.fill(),Ln(i,at(P.x,P.y,P.w*E,P.h),3*s),i.fillStyle="#3DDC84",i.fill(),It(i,s,at(p.x+p.w-70*s,p.y+8*s,62*s,24*s),"rgba(27, 35, 51, 0.85)",{line:null,rad:12,shadow:!1}),Cn.play(i,p.x+p.w-56*s,p.y+20*s,6*s,"#3DDC84"),lt(i,s,mc(v.t),p.x+p.w-16*s,p.y+20*s,{align:"right",outline:null});const Y=at(e/2-100*s,566*s,200*s,50*s);return It(i,s,Y,Rn,{rad:25}),Cn.retry(i,Y.x+30*s,Y.y+Y.h/2,10*s,Ze),lt(i,s,"다시 하기",e/2+12*s,Y.y+Y.h/2,{size:24,color:Ze,outline:null}),{again:Y}}function qv(i=()=>{const e=globalThis.AudioContext??globalThis.webkitAudioContext;return e?new e:null}){let e=null,t=null,n=[],s=null;const r=new Set;function o(){if(t){t.gain.cancelScheduledValues(e.currentTime),t.gain.setValueAtTime(0,e.currentTime);for(const u of r)u.stop(e.currentTime);r.clear()}}function a(){try{if(!e){if(e=i(),!e)return;t=e.createGain(),t.gain.value=0,t.connect(e.destination);const u=e.createBuffer(1,e.sampleRate,e.sampleRate),h=u.getChannelData(0);for(let f=0;f<h.length;f++)h[f]=Math.random()*2-1;n=[-.3,.3].map(f=>{const p=e.createBufferSource(),g=e.createBiquadFilter(),_=e.createGain(),m=e.createOscillator(),d=e.createGain(),S=e.createStereoPanner();return p.buffer=u,p.loop=!0,g.type="bandpass",g.Q.value=.7,_.gain.value=0,d.gain.value=0,m.type="triangle",S.pan.value=f,p.connect(g).connect(_).connect(S),m.connect(d).connect(S),S.connect(t),p.start(),m.start(),{filter:g,gain:_,tone:m,toneGain:d}})}(e.state==="suspended"||e.state==="interrupted")&&e.resume().catch(()=>{})}catch{e&&e.close().catch(()=>{}),e=t=null,n=[],r.clear()}}function c(u,h,f,p,g,_="triangle"){if(r.size>=12)return;const m=e.currentTime+f,d=e.createOscillator(),S=e.createGain();d.type=_,d.frequency.setValueAtTime(u,m),d.frequency.exponentialRampToValueAtTime(h,m+p),S.gain.setValueAtTime(0,m),S.gain.linearRampToValueAtTime(g,m+.008),S.gain.exponentialRampToValueAtTime(1e-4,m+p),d.connect(S).connect(t),r.add(d),d.onended=()=>{r.delete(d),d.disconnect(),S.disconnect()},d.start(m),d.stop(m+p)}function l(u,h,f,p=[],g=!0){if(!t)return;(u!==s||p.some(d=>d.type==="respawn"))&&o(),s=u;const _=u.state==="PLAYING"||u.state==="RESPAWN";if(!g||!_||f.muted){o();return}const m=e.currentTime;t.gain.setTargetAtTime(.65*Math.max(0,Math.min(1,f.volume)),m,.025);for(const[d,S]of["L","R"].entries()){const E=Math.max(0,Math.min(1,h[S].effective)),v=n[d],T=1+(u.disruptedLeft>0?.25:.05)*Math.sin(u.gameTime*28+d*2.1);v.filter.frequency.setTargetAtTime(350+E*1100,m,.035),v.gain.gain.setTargetAtTime(E*.15*T,m,.035),v.tone.frequency.setTargetAtTime(65+E*85*T,m,.035),v.toneGain.gain.setTargetAtTime(E*.035,m,.035)}if(e.state==="running"){for(const d of p.slice(-4))if(d.type==="hiccup"&&c(420,980,0,.13,.17,"square"),d.type==="checkpoint")[523.25,659.25,783.99].forEach((S,E)=>c(S,S,E*.09,.19,.16));else if(d.type==="hit"){const S={chair:210,building:115,alcohol:420,spicy:630}[d.kind];c(S,S*(d.kind==="spicy"?1.6:.3),0,.16,.2,d.kind==="alcohol"?"sine":"triangle")}}}return{unlock:a,update:l,silence:o}}const pi=document.querySelector("#game"),Kc=document.querySelector("#game-frame"),cs=document.querySelector("#loading");document.fonts?.load("12px Galmuri11").catch(()=>{});let Qr=10;const sf=i=>{!cs?.isConnected||cs.dataset.failed||(Qr=Math.max(Qr,Math.min(99,Math.round(i))),cs.querySelector("p").textContent=`로딩 중… ${Qr}%`,cs.querySelector(".loading-bar i").style.width=`${Qr}%`)};sf(10);Fh.onProgress=(i,e,t)=>sf(10+89*e/t);for(const i of["contextmenu","selectstart","dragstart"])Kc.addEventListener(i,e=>e.preventDefault());const gr=qv();Kc.addEventListener("pointerdown",i=>{i.isTrusted&&gr.unlock()},{capture:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&gr.silence()});window.addEventListener("pagehide",()=>gr.silence());const En=new URLSearchParams(location.search),ya=En.has("debug");let mi=Eo[En.get("res")]?En.get("res"):ay,bs=Xc.includes(+En.get("angle"))?+En.get("angle"):ry,sr=bo.includes(+En.get("zoom"))?+En.get("zoom"):cy;const rf=()=>En.has("seed")?+En.get("seed"):Math.floor(Math.random()*2**31);let ds=qh(rf(),kh);const Gi=await yv(pi,ds);let co=["pixel","soft","clean","color"].includes(En.get("style"))?En.get("style"):oy;const Oi=(i,e,t=sr,n=co)=>{mi=String(i),bs=e,sr=t,co=n,Gi.setView(mi,bs,sr,co)};Oi(mi,bs,sr,co);let Ve=Zh(ds);const Ts={left:new Set,right:new Set},As={left:!1,right:!1},Ni=()=>{Ts.left.clear(),Ts.right.clear(),As.left=As.right=!1},$c=()=>({left:As.left||Ts.left.size>0,right:As.right||Ts.right.size>0});let Bi=[],rr=[],or=null,Ot={},Ui=null,Fi={},mo=0,ui=null;const Et={start:()=>Uv(Ve),pause:()=>{Nv(Ve),Ni()},resume:()=>Fv(Ve),restart:()=>{Bi.push(...Ov(Ve)),Fi={},ui=null,mo=0,Ni()},quit:()=>{Bi.push(...Bv(Ve)),Ni()},newGame:async()=>{ds=qh(rf(),kh),await Gi.setWorld(ds),Ve=Zh(ds,Ve.audio),Ui=null,Fi={},ui=null,mo=0,Bi=[],rr=[],Ni()},setMuted:i=>{Ve.audio.muted=i},setVolume:i=>{Ve.audio.volume=Math.max(0,Math.min(1,i)),Ve.audio.volume>0&&(Ve.audio.muted=!1)}};for(const i of["left","right"]){const e=document.querySelector(`#${i}`);e.addEventListener("pointerdown",t=>{t.preventDefault(),e.setPointerCapture(t.pointerId),Ts[i].add(t.pointerId)});for(const t of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(t,n=>Ts[i].delete(n.pointerId))}let go=null;pi.addEventListener("pointermove",i=>{if(i.pointerId!==go||!Ot.volume)return;const e=pi.getBoundingClientRect(),t=(i.clientX-e.left)/e.width*Gi.size[0];Et.setVolume((t-Ot.volume.track.x)/Ot.volume.track.w)});for(const i of["pointerup","pointercancel"])pi.addEventListener(i,e=>{e.pointerId===go&&(go=null)});pi.addEventListener("pointerdown",i=>{const e=pi.getBoundingClientRect(),[t,n]=Gi.size,s=(i.clientX-e.left)/e.width*t,r=(i.clientY-e.top)/e.height*n,o=Ve.ship.state;if(o==="TITLE"&&rs(Ot.start,s,r))Et.start();else if(o==="PAUSED"){for(const a of["resume","restart","quit"])rs(Ot[a],s,r)&&Et[a]();if(rs(Ot.mute,s,r)&&Et.setMuted(!Ve.audio.muted),rs(Ot.volume,s,r)){try{pi.setPointerCapture(i.pointerId)}catch{}go=i.pointerId,Et.setVolume((s-Ot.volume.track.x)/Ot.volume.track.w)}}else o==="FINISHED"&&rs(Ot.again,s,r)?Et.newGame():rs(Ot.pause,s,r)&&Et.pause()});window.addEventListener("keydown",i=>{i.isTrusted&&!i.repeat&&gr.unlock();const e=i.key.toLowerCase(),t=Ve.ship.state;(e==="a"||e==="d")&&!i.repeat&&(i.preventDefault(),As[e==="a"?"left":"right"]=!0,t==="TITLE"&&Et.start()),e==="escape"&&(t==="PAUSED"?Et.resume():Et.pause()),(e==="enter"||e===" ")&&(t==="TITLE"?Et.start():t==="PAUSED"?Et.resume():t==="FINISHED"&&Et.newGame()),t==="PAUSED"&&e==="r"&&Et.restart(),t==="PAUSED"&&e==="q"&&Et.quit(),t==="PAUSED"&&(e==="arrowleft"||e==="arrowright")&&Et.setVolume(Ve.audio.volume+(e==="arrowleft"?-.1:.1)),ya&&"123".includes(e)&&Oi(mi,Xc[+e-1]),ya&&"456".includes(e)&&Oi(Object.keys(Eo)[+e-4],bs),ya&&"789".includes(e)&&Oi(mi,bs,bo[+e-7])});window.addEventListener("keyup",i=>{const e=i.key.toLowerCase();(e==="a"||e==="d")&&(As[e==="a"?"left":"right"]=!1)});window.addEventListener("blur",()=>{Et.pause(),Ni()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Et.pause(),Ni())});function of(i,e,t){const n=Ve.ship.state;if(n==="TITLE")Ot=Gv(i,e,t);else if(n==="FINISHED")Ot=Yv(i,e,t,Ve);else{const s=mr(Ve.ship),r=Ve.ship.gameTime,o=n!=="PAUSED"&&s!=="runaway"&&ui&&r<ui.until&&or?{text:ui.text,left:ui.until-r,...or.head}:null,a=o?null:mv(Ve,Fi),c=Ve.world.zones??[],l=!s&&!o&&!a&&Ui&&r<Ui.until?{name:Ui.name,index:c.findIndex(u=>u.name===Ui.name),count:c.length,left:Ui.until-r}:null;Ot=Hv(i,e,t,Ve,l,a,mo-- >0,o,$c(),n==="PAUSED"?null:or?.target),n==="READY"&&Vv(i,e,t,Ve),n==="PAUSED"&&(Ot={...Ot,...Wv(i,e,t,Ve)})}}const Zc=()=>{const{ship:i,audio:e}=Ve,t=$c();return{ship:{x:i.x,y:i.y,vx:i.vx,vy:i.vy,theta:i.theta,omega:i.omega,state:i.state,invulnerableLeft:i.invulnerableLeft,disruptedLeft:i.disruptedLeft,stunnedLeft:i.stunnedLeft,drunkLeft:i.drunkLeft},nozzle:{L:{p:i.left,effective:i.effectiveLeft,overTime:i.overLeft,fullHoldTime:St.overheatAfter},R:{p:i.right,effective:i.effectiveRight,overTime:i.overRight,fullHoldTime:St.overheatAfter}},input:{left:t.left,right:t.right},audio:{muted:e.muted,volume:e.volume}}};let Ju=0,va=0,_c=!1;function af(i){const e=_c?0:Math.min(.1,(i-(Ju||i))/1e3);Ju=i,Kc.classList.toggle("menu",["TITLE","PAUSED","FINISHED"].includes(Ve.ship.state));const t=$c();for(va+=e;va>=St.fixedDt;va-=St.fixedDt){const s=Qh(Ve,t,St.fixedDt);Bi.push(...s),s.some(r=>r.type==="overheat"||r.type==="finish")&&Ni();for(const r of s)r.type==="zone"&&(Ui={name:r.name,until:Ve.ship.gameTime+1}),r.type==="overheat"&&(mo=2,Fi.runaway="overheat"),r.type==="hit"&&r.kind==="spicy"&&(Fi.runaway="spicy"),r.type==="hit"&&(ui=ju[r.kind]&&Fi.status!=="stunned"?{text:ju[r.kind],until:Ve.ship.gameTime+.5}:null),r.type==="hiccup"&&(ui={text:"딸꾹!",until:Ve.ship.gameTime+.5})}rr=Bi,Bi=[],_y(Ve.ship,Fi);const n=Zc();gr.update(Ve.ship,n.nozzle,n.audio,rr,!document.hidden),or=Gi.render(Ve.ship,n.nozzle,of,Ve,rr),cs?.isConnected&&cs.remove(),requestAnimationFrame(af)}requestAnimationFrame(af);function cf(){const{rgba:i,mask:e,width:t,height:n}=Gi.readback();return{width:t,height:n,violations:gy(i,e,Vc,Wc)}}async function lf(i){const e=await new Promise(n=>pi.toBlob(n,"image/png")),t=await fetch(`/__capture?name=${encodeURIComponent(i)}`,{method:"POST",body:e});return t.ok?t.text():`capture failed ${t.status}`}async function jv(i=""){const e=[],t=[mi,bs,sr];_c=!0;for(const n of Xc)for(const s of bo)Oi(mi,n,s),Gi.render(Ve.ship,Zc().nozzle,of,Ve),e.push({angle:n,zoom:s,...cf(),file:await lf(`${i}${n}deg_zoom${s}_${Eo[mi].join("x")}`)});return Oi(...t),_c=!1,e}function Kv(i,e={left:!1,right:!1}){for(let t=0;t<Math.round(i/St.fixedDt);t++)Bi.push(...Qh(Ve,e,St.fixedDt))}window.__chirocket={get world(){return ds},setView:Oi,signals:Zc,commands:Et,advance:Kv,checkPalette:cf,capture:lf,captureMatrix:jv,get game(){return Ve},get ship(){return Ve.ship},get events(){return rr},get anchors(){return or}};
