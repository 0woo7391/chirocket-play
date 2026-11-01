(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="170",Tf=0,gc=1,Af=2,wf=0,fh=1,Rf=2,Yn=3,sn=0,Ot=1,fn=2,mi=0,ps=1,_c=2,xc=3,yc=4,Cf=5,Oi=100,Lf=101,Pf=102,If=103,Df=104,Uf=200,Nf=201,Ff=202,Of=203,Ua=204,Na=205,Bf=206,kf=207,zf=208,Hf=209,Gf=210,Vf=211,Wf=212,Xf=213,Yf=214,Fa=0,Oa=1,Ba=2,ys=3,ka=4,za=5,Ha=6,Ga=7,Pl=0,qf=1,jf=2,gi=0,Kf=1,$f=2,Zf=3,Jf=4,Qf=5,ed=6,td=7,vc="attached",nd="detached",dh=300,vs=301,Ms=302,Va=303,Wa=304,Ro=306,Xi=1e3,di=1001,xo=1002,wt=1003,ph=1004,Qs=1005,Qt=1006,lo=1007,jn=1008,Jn=1009,mh=1010,gh=1011,pr=1012,Il=1013,Yi=1014,Tn=1015,Is=1016,Dl=1017,Ul=1018,Ss=1020,_h=35902,xh=1021,yh=1022,rn=1023,vh=1024,Mh=1025,ms=1026,bs=1027,Nl=1028,Fl=1029,Sh=1030,Ol=1031,Bl=1033,co=33776,uo=33777,ho=33778,fo=33779,Xa=35840,Ya=35841,qa=35842,ja=35843,Ka=36196,$a=37492,Za=37496,Ja=37808,Qa=37809,el=37810,tl=37811,nl=37812,il=37813,sl=37814,rl=37815,ol=37816,al=37817,ll=37818,cl=37819,ul=37820,hl=37821,po=36492,fl=36494,dl=36495,bh=36283,pl=36284,ml=36285,gl=36286,mr=2300,gr=2301,Bo=2302,Mc=2400,Sc=2401,bc=2402,id=2500,sd=0,Eh=1,_l=2,rd=3200,od=3201,Co=0,ad=1,fi="",Nt="srgb",$t="srgb-linear",Lo="linear",ct="srgb",Ki=7680,Ec=519,ld=512,cd=513,ud=514,Th=515,hd=516,fd=517,dd=518,pd=519,xl=35044,Tc="300 es",Kn=2e3,yo=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ac=1234567;const rr=Math.PI/180,Es=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function kl(i,e){return(i%e+e)%e}function md(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function gd(i,e,t){return i!==e?(t-i)/(e-i):0}function or(i,e,t){return(1-t)*i+t*e}function _d(i,e,t,n){return or(i,e,1-Math.exp(-t*n))}function xd(i,e=1){return e-Math.abs(kl(i,e*2)-e)}function yd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Md(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sd(i,e){return i+Math.random()*(e-i)}function bd(i){return i*(.5-Math.random())}function Ed(i){i!==void 0&&(Ac=i);let e=Ac+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Td(i){return i*rr}function Ad(i){return i*Es}function wd(i){return(i&i-1)===0&&i!==0}function Rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ld(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),c=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*c,l*h,l*f,a*u);break;case"YZY":i.set(l*f,a*c,l*h,a*u);break;case"ZXZ":i.set(l*h,l*f,a*c,a*u);break;case"XZX":i.set(a*c,l*g,l*p,a*u);break;case"YXY":i.set(l*p,a*c,l*g,a*u);break;case"ZYZ":i.set(l*g,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ah={DEG2RAD:rr,RAD2DEG:Es,generateUUID:Rn,clamp:Gt,euclideanModulo:kl,mapLinear:md,inverseLerp:gd,lerp:or,damp:_d,pingpong:xd,smoothstep:yd,smootherstep:vd,randInt:Md,randFloat:Sd,randFloatSpread:bd,seededRandom:Ed,degToRad:Td,radToDeg:Ad,isPowerOfTwo:wd,ceilPowerOfTwo:Rd,floorPowerOfTwo:Cd,setQuaternionFromProperEuler:Ld,normalize:ot,denormalize:Sn};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,s,r,o,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,u)}set(e,t,n,s,r,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],v=s[1],y=s[4],x=s[7],b=s[2],T=s[5],L=s[8];return r[0]=o*_+a*v+l*b,r[3]=o*m+a*y+l*T,r[6]=o*d+a*x+l*L,r[1]=u*_+c*v+h*b,r[4]=u*m+c*y+h*T,r[7]=u*d+c*x+h*L,r[2]=f*_+p*v+g*b,r[5]=f*m+p*y+g*T,r[8]=f*d+p*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*r*c+n*a*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*r,p=u*r-o*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*u-c*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(c*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-u*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new Ve;function wh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pd(){const i=_r("canvas");return i.style.display="block",i}const wc={};function er(i){i in wc||(wc[i]=!0,console.warn(i))}function Id(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Dd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ud(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=gs(i.r),i.g=gs(i.g),i.b=gs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Lo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Rc=[.64,.33,.3,.6,.15,.06],Cc=[.2126,.7152,.0722],Lc=[.3127,.329],Pc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[$t]:{primaries:Rc,whitePoint:Lc,transfer:Lo,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:Cc,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:Rc,whitePoint:Lc,transfer:ct,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:Cc,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});let $i;class Nd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=_r("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fd=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zo(s[o].image)):r.push(zo(s[o]))}else r=zo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Od=0;class Rt extends Ds{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=di,s=di,r=Qt,o=jn,a=rn,l=Jn,u=Rt.DEFAULT_ANISOTROPY,c=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Rn(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=dh;Rt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,x=(p+1)/2,b=(d+1)/2,T=(c+f)/4,L=(h+_)/4,C=(g+m)/4;return y>x&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=L/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=C/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=L/r,s=C/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bd extends Ds{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Rt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Bd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ch extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kd extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],u=n[s+1],c=n[s+2],h=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||u!==p||c!==g){let m=1-a;const d=l*f+u*p+c*g+h*_,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const b=Math.sqrt(y),T=Math.atan2(b,d*v);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const x=a*v;if(l=l*m+f*x,u=u*m+p*x,c=c*m+g*x,h=h*m+_*x,m===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=b,u*=b,c*=b,h*=b}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],u=n[s+2],c=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+c*h+l*p-u*f,e[t+1]=l*g+c*f+u*h-a*p,e[t+2]=u*g+c*p+a*f-l*h,e[t+3]=c*g-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-n*u,this._z=r*c+o*u+n*l-s*a,this._w=o*c-n*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*n),c=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*u+o*h-a*c,this.y=n+l*c+a*u-r*h,this.z=s+l*h+r*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new O,Dc=new Cn;class mn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Cr.subVectors(this.max,zs),Zi.subVectors(e.a,zs),Ji.subVectors(e.b,zs),Qi.subVectors(e.c,zs),ii.subVectors(Ji,Zi),si.subVectors(Qi,Ji),Si.subVectors(Zi,Qi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Si.z,Si.y,ii.z,0,-ii.x,si.z,0,-si.x,Si.z,0,-Si.x,-ii.y,ii.x,0,-si.y,si.x,0,-Si.y,Si.x,0];return!Go(t,Zi,Ji,Qi,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,Zi,Ji,Qi,Cr))?!1:(Lr.crossVectors(ii,si),t=[Lr.x,Lr.y,Lr.z],Go(t,Zi,Ji,Qi,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new O,new O,new O,new O,new O,new O,new O,new O],xn=new O,Rr=new mn,Zi=new O,Ji=new O,Qi=new O,ii=new O,si=new O,Si=new O,zs=new O,Cr=new O,Lr=new O,bi=new O;function Go(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bi.fromArray(i,r);const a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=e.dot(bi),u=t.dot(bi),c=n.dot(bi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const zd=new mn,Hs=new O,Vo=new O;class Nn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Vo)),this.expandByPoint(Hs.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new O,Wo=new O,Pr=new O,ri=new O,Xo=new O,Ir=new O,Yo=new O;class Po{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wo.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Wo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=ri.dot(this.direction),l=-ri.dot(Pr),u=ri.lengthSq(),c=Math.abs(1-o*o);let h,f,p,g;if(c>0)if(h=o*l-a,f=o*a-l,g=r*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+u):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+u);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Wo).addScaledVector(Pr,f),p}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),c>=0?(r=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){Xo.subVectors(t,e),Ir.subVectors(n,e),Yo.crossVectors(Xo,Ir);let o=this.direction.dot(Yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ir.crossVectors(ri,Ir));if(l<0)return null;const u=a*this.direction.dot(Xo.cross(ri));if(u<0||l+u>o)return null;const c=-a*ri.dot(Yo);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,s,r,o,a,l,u,c,h,f,p,g,_,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,u,c,h,f,p,g,_,m)}set(e,t,n,s,r,o,a,l,u,c,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+_,t[1]=l*h,t[5]=_*u+f,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+_,t[5]=o*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hd,e,Gd)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),oi.crossVectors(n,tn),oi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),oi.crossVectors(n,tn)),oi.normalize(),Dr.crossVectors(tn,oi),s[0]=oi.x,s[4]=Dr.x,s[8]=tn.x,s[1]=oi.y,s[5]=Dr.y,s[9]=tn.y,s[2]=oi.z,s[6]=Dr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],v=n[3],y=n[7],x=n[11],b=n[15],T=s[0],L=s[4],C=s[8],S=s[12],M=s[1],w=s[5],k=s[9],B=s[13],z=s[2],V=s[6],U=s[10],G=s[14],I=s[3],P=s[7],F=s[11],Y=s[15];return r[0]=o*T+a*M+l*z+u*I,r[4]=o*L+a*w+l*V+u*P,r[8]=o*C+a*k+l*U+u*F,r[12]=o*S+a*B+l*G+u*Y,r[1]=c*T+h*M+f*z+p*I,r[5]=c*L+h*w+f*V+p*P,r[9]=c*C+h*k+f*U+p*F,r[13]=c*S+h*B+f*G+p*Y,r[2]=g*T+_*M+m*z+d*I,r[6]=g*L+_*w+m*V+d*P,r[10]=g*C+_*k+m*U+d*F,r[14]=g*S+_*B+m*G+d*Y,r[3]=v*T+y*M+x*z+b*I,r[7]=v*L+y*w+x*V+b*P,r[11]=v*C+y*k+x*U+b*F,r[15]=v*S+y*B+x*G+b*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*u*h-r*a*f+n*u*f+s*a*p-n*l*p)+_*(+t*l*p-t*u*f+r*o*f-s*o*p+s*u*c-r*l*c)+m*(+t*u*h-t*a*p-r*o*h+n*o*p+r*a*c-n*u*c)+d*(-s*a*c-t*l*h+t*a*f+s*o*h-n*o*f+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=h*m*u-_*f*u+_*l*p-a*m*p-h*l*d+a*f*d,y=g*f*u-c*m*u-g*l*p+o*m*p+c*l*d-o*f*d,x=c*_*u-g*h*u+g*a*p-o*_*p-c*a*d+o*h*d,b=g*h*l-c*_*l-g*a*f+o*_*f+c*a*m-o*h*m,T=t*v+n*y+s*x+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=v*L,e[1]=(_*f*r-h*m*r-_*s*p+n*m*p+h*s*d-n*f*d)*L,e[2]=(a*m*r-_*l*r+_*s*u-n*m*u-a*s*d+n*l*d)*L,e[3]=(h*l*r-a*f*r-h*s*u+n*f*u+a*s*p-n*l*p)*L,e[4]=y*L,e[5]=(c*m*r-g*f*r+g*s*p-t*m*p-c*s*d+t*f*d)*L,e[6]=(g*l*r-o*m*r-g*s*u+t*m*u+o*s*d-t*l*d)*L,e[7]=(o*f*r-c*l*r+c*s*u-t*f*u-o*s*p+t*l*p)*L,e[8]=x*L,e[9]=(g*h*r-c*_*r-g*n*p+t*_*p+c*n*d-t*h*d)*L,e[10]=(o*_*r-g*a*r+g*n*u-t*_*u-o*n*d+t*a*d)*L,e[11]=(c*a*r-o*h*r-c*n*u+t*h*u+o*n*p-t*a*p)*L,e[12]=b*L,e[13]=(c*_*s-g*h*s+g*n*f-t*_*f-c*n*m+t*h*m)*L,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*L,e[15]=(o*h*s-c*a*s+c*n*l-t*h*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,c=r*a;return this.set(u*o+n,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+n,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,c=o+o,h=a+a,f=r*u,p=r*c,g=r*h,_=o*c,m=o*h,d=a*h,v=l*u,y=l*c,x=l*h,b=n.x,T=n.y,L=n.z;return s[0]=(1-(_+d))*b,s[1]=(p+x)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(f+d))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+y)*L,s[9]=(m-v)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const o=es.set(s[4],s[5],s[6]).length(),a=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const u=1/r,c=1/o,h=1/a;return yn.elements[0]*=u,yn.elements[1]*=u,yn.elements[2]*=u,yn.elements[4]*=c,yn.elements[5]*=c,yn.elements[6]*=c,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Kn){const l=this.elements,u=2*r/(t-e),c=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,g;if(a===Kn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Kn){const l=this.elements,u=1/(t-e),c=1/(n-s),h=1/(o-r),f=(t+e)*u,p=(n+s)*c;let g,_;if(a===Kn)g=(o+r)*h,_=-2*h;else if(a===yo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new O,yn=new ke,Hd=new O(0,0,0),Gd=new O(1,1,1),oi=new O,Dr=new O,tn=new O,Uc=new ke,Nc=new Cn;class pn{constructor(e=0,t=0,n=0,s=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vd=0;const Fc=new O,ts=new Cn,Gn=new ke,Ur=new O,Gs=new O,Wd=new O,Xd=new Cn,Oc=new O(1,0,0),Bc=new O(0,1,0),kc=new O(0,0,1),zc={type:"added"},Yd={type:"removed"},ns={type:"childadded",child:null},qo={type:"childremoved",child:null};class gt extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new O,t=new pn,n=new Cn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ve}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Gs,Ur,this.up):Gn.lookAt(Ur,Gs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Gn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yd),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DEFAULT_UP=new O(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new O,Vn=new O,jo=new O,Wn=new O,is=new O,ss=new O,Hc=new O,Ko=new O,$o=new O,Zo=new O,Jo=new nt,Qo=new nt,ea=new nt;class bn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vn.subVectors(s,t),Vn.subVectors(n,t),jo.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Vn),l=vn.dot(jo),u=Vn.dot(Vn),c=Vn.dot(jo),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Jo.setScalar(0),Qo.setScalar(0),ea.setScalar(0),Jo.fromBufferAttribute(e,t),Qo.fromBufferAttribute(e,n),ea.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jo,r.x),o.addScaledVector(Qo,r.y),o.addScaledVector(ea,r.z),o}static isFrontFacing(e,t,n,s){return vn.subVectors(n,t),Vn.subVectors(e,t),vn.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),vn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,n),ss.subVectors(r,n),Ko.subVectors(e,n);const l=is.dot(Ko),u=ss.dot(Ko);if(l<=0&&u<=0)return t.copy(n);$o.subVectors(e,s);const c=is.dot($o),h=ss.dot($o);if(c>=0&&h<=c)return t.copy(s);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(is,o);Zo.subVectors(e,r);const p=is.dot(Zo),g=ss.dot(Zo);if(g>=0&&p<=g)return t.copy(r);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(n).addScaledVector(ss,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return Hc.subVectors(r,s),a=(h-c)/(h-c+(p-g)),t.copy(s).addScaledVector(Hc,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=kl(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ta(o,r,e+1/3),this.g=ta(o,r,e),this.b=ta(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Ph[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ke.fromWorkingColorSpace(zt.copy(this),e),Math.round(Gt(zt.r*255,0,255))*65536+Math.round(Gt(zt.g*255,0,255))*256+Math.round(Gt(zt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Nt){Ke.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Nr);const n=or(ai.h,Nr.h,t),s=or(ai.s,Nr.s,t),r=or(ai.l,Nr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Re;Re.NAMES=Ph;let qd=0;class dn extends Ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Rn(),this.name="",this.blending=ps,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bt extends dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new O,Fr=new ze;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xl,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xl&&(e.usage=this.usage),e}}class Ih extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dh extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jd=0;const an=new ke,na=new gt,rs=new O,nn=new mn,Vs=new mn,Pt=new O;class Xt extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wh(e)?Dh:Ih)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(nn.min,Vs.min),nn.expandByPoint(Pt),Pt.addVectors(nn.max,Vs.max),nn.expandByPoint(Pt)):(nn.expandByPoint(Vs.min),nn.expandByPoint(Vs.max))}nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Pt.fromBufferAttribute(a,u),l&&(rs.fromBufferAttribute(e,u),Pt.add(rs)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new O,l[C]=new O;const u=new O,c=new O,h=new O,f=new ze,p=new ze,g=new ze,_=new O,m=new O;function d(C,S,M){u.fromBufferAttribute(n,C),c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),c.sub(u),h.sub(u),p.sub(f),g.sub(f);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(w),a[C].add(_),a[S].add(_),a[M].add(_),l[C].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){const M=v[C],w=M.start,k=M.count;for(let B=w,z=w+k;B<z;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new O,x=new O,b=new O,T=new O;function L(C){b.fromBufferAttribute(s,C),T.copy(b);const S=a[C];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),x.crossVectors(T,S);const w=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,w)}for(let C=0,S=v.length;C<S;++C){const M=v[C],w=M.start,k=M.count;for(let B=w,z=w+k;B<z;B+=3)L(e.getX(B+0)),L(e.getX(B+1)),L(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,u=new O,c=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),a.add(c),l.add(c),u.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new Wt(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],h=r[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gc=new ke,Ei=new Po,Or=new Nn,Vc=new O,Br=new O,kr=new O,zr=new O,ia=new O,Hr=new O,Wc=new O,Gr=new O;class Ye extends gt{constructor(e=new Xt,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],h=r[l];c!==0&&(ia.fromBufferAttribute(h,e),o?Hr.addScaledVector(ia,c):Hr.addScaledVector(ia.sub(t),c))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Or.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Or,Vc)===null||Ei.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Gc.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=y;x<b;x+=3){const T=a.getX(x),L=a.getX(x+1),C=a.getX(x+2);s=Vr(this,d,e,n,u,c,h,T,L,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Vr(this,o,e,n,u,c,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=y;x<b;x+=3){const T=x,L=x+1,C=x+2;s=Vr(this,d,e,n,u,c,h,T,L,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,y=m+1,x=m+2;s=Vr(this,o,e,n,u,c,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Kd(i,e,t,n,s,r,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===sn,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Gr);return u<t.near||u>t.far?null:{distance:u,point:Gr.clone(),object:i}}function Vr(i,e,t,n,s,r,o,a,l,u){i.getVertexPosition(a,Br),i.getVertexPosition(l,kr),i.getVertexPosition(u,zr);const c=Kd(i,e,t,n,Br,kr,zr,Wc);if(c){const h=new O;bn.getBarycoord(Wc,Br,kr,zr,h),s&&(c.uv=bn.getInterpolatedAttribute(s,a,l,u,h,new ze)),r&&(c.uv1=bn.getInterpolatedAttribute(r,a,l,u,h,new ze)),o&&(c.normal=bn.getInterpolatedAttribute(o,a,l,u,h,new O),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new O,materialIndex:0};bn.getNormal(Br,kr,zr,f.normal),c.face=f,c.barycoord=h}return c}class Ft extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(h,2));function g(_,m,d,v,y,x,b,T,L,C,S){const M=x/L,w=b/C,k=x/2,B=b/2,z=T/2,V=L+1,U=C+1;let G=0,I=0;const P=new O;for(let F=0;F<U;F++){const Y=F*w-B;for(let he=0;he<V;he++){const fe=he*M-k;P[_]=fe*v,P[m]=Y*y,P[d]=z,u.push(P.x,P.y,P.z),P[_]=0,P[m]=0,P[d]=T>0?1:-1,c.push(P.x,P.y,P.z),h.push(he/L),h.push(1-F/C),G+=1}}for(let F=0;F<C;F++)for(let Y=0;Y<L;Y++){const he=f+Y+V*F,fe=f+Y+V*(F+1),H=f+(Y+1)+V*(F+1),ee=f+(Y+1)+V*F;l.push(he,fe,ee),l.push(fe,H,ee),I+=6}a.addGroup(p,I,S),p+=I,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Ts(i[t]);for(const s in n)e[s]=n[s]}return e}function $d(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Zd={clone:Ts,merge:qt};var Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=$d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nh extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new O,Xc=new ze,Yc=new ze;class Jt extends Nh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,Yc),t.subVectors(Yc,Xc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/u,s*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,as=1;class ep extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(os,as,e,t);s.layers=this.layers,this.add(s);const r=new Jt(os,as,e,t);r.layers=this.layers,this.add(r);const o=new Jt(os,as,e,t);o.layers=this.layers,this.add(o);const a=new Jt(os,as,e,t);a.layers=this.layers,this.add(a);const l=new Jt(os,as,e,t);l.layers=this.layers,this.add(l);const u=new Jt(os,as,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fh extends Rt{constructor(e,t,n,s,r,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,n,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tp extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:mi});r.uniforms.tEquirect.value=t;const o=new Ye(s,r),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=Qt),new ep(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const sa=new O,np=new O,ip=new Ve;class Ni{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=sa.subVectors(n,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ip.getNormalMatrix(e),s=this.coplanarPoint(sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Nn,Wr=new O;class zl{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,f-u,m-p,x-d).normalize(),n[1].setComponents(l+r,f+u,m+p,x+d).normalize(),n[2].setComponents(l+o,f+c,m+g,x+v).normalize(),n[3].setComponents(l-o,f-c,m-g,x-v).normalize(),n[4].setComponents(l-a,f-h,m-_,x-y).normalize(),t===Kn)n[5].setComponents(l+a,f+h,m+_,x+y).normalize();else if(t===yo)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sp(i){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,u){const c=l.array,h=l.updateRanges;if(i.bindBuffer(u,a),h.length===0)i.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}class _i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),u=a+1,c=l+1,h=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const v=d*f-o;for(let y=0;y<u;y++){const x=y*h-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const y=v+u*d,x=v+u*(d+1),b=v+1+u*(d+1),T=v+1+u*d;p.push(y,x,T),p.push(x,b,T)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vm=`float getShadowMask() {
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
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`#include <common>
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
}`,h0=`#if DEPTH_PACKING == 3200
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
}`,f0=`#define DISTANCE
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
}`,d0=`#define DISTANCE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,y0=`uniform vec3 diffuse;
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
}`,v0=`#define LAMBERT
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
}`,M0=`#define LAMBERT
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
}`,S0=`#define MATCAP
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
}`,b0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,T0=`#define NORMAL
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
}`,A0=`#define PHONG
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
}`,w0=`#define PHONG
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
}`,R0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
}`,L0=`#define TOON
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
}`,P0=`#define TOON
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
}`,I0=`uniform float size;
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
}`,D0=`uniform vec3 diffuse;
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
}`,U0=`#include <common>
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
}`,N0=`uniform vec3 color;
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
}`,F0=`uniform float rotation;
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
}`,O0=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:up,aomap_fragment:hp,aomap_pars_fragment:fp,batching_pars_vertex:dp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:bp,color_fragment:Ep,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:wp,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Ip,emissivemap_fragment:Dp,emissivemap_pars_fragment:Up,colorspace_fragment:Np,colorspace_pars_fragment:Fp,envmap_fragment:Op,envmap_common_pars_fragment:Bp,envmap_pars_fragment:kp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Zp,envmap_vertex:Hp,fog_vertex:Gp,fog_pars_vertex:Vp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:qp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Kp,lights_pars_begin:$p,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:um,map_fragment:hm,map_pars_fragment:fm,map_particle_fragment:dm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:xm,morphnormal_vertex:ym,morphtarget_pars_vertex:vm,morphtarget_vertex:Mm,normal_fragment_begin:Sm,normal_fragment_maps:bm,normal_pars_fragment:Em,normal_pars_vertex:Tm,normal_vertex:Am,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Pm,opaque_fragment:Im,packing:Dm,premultiplied_alpha_fragment:Um,project_vertex:Nm,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Vm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:Ym,skinnormal_vertex:qm,specularmap_fragment:jm,specularmap_pars_fragment:Km,tonemapping_fragment:$m,tonemapping_pars_fragment:Zm,transmission_fragment:Jm,transmission_pars_fragment:Qm,uv_pars_fragment:e0,uv_pars_vertex:t0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:o0,backgroundCube_frag:a0,cube_vert:l0,cube_frag:c0,depth_vert:u0,depth_frag:h0,distanceRGBA_vert:f0,distanceRGBA_frag:d0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:_0,meshbasic_vert:x0,meshbasic_frag:y0,meshlambert_vert:v0,meshlambert_frag:M0,meshmatcap_vert:S0,meshmatcap_frag:b0,meshnormal_vert:E0,meshnormal_frag:T0,meshphong_vert:A0,meshphong_frag:w0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:L0,meshtoon_frag:P0,points_vert:I0,points_frag:D0,shadow_vert:U0,shadow_frag:N0,sprite_vert:F0,sprite_frag:O0},pe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Dn={basic:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:qt([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:qt([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:qt([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:qt([pe.common,pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:qt([pe.lights,pe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Dn.physical={uniforms:qt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Xr={r:0,b:0,g:0},Ai=new pn,B0=new ke;function k0(i,e,t,n,s,r,o){const a=new Re(0);let l=r===!0?0:1,u,c,h=null,f=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?d(a,l):x&&x.isColor&&(d(x,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Ro)?(c===void 0&&(c=new Ye(new Ft(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ts(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ai.copy(y.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(Ai)),c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==ct,(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Ye(new _i(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ts(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,y){v.getRGB(Xr,Uh(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function z0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,w,k,B,z){let V=!1;const U=h(B,k,w);r!==U&&(r=U,u(r.object)),V=p(M,B,k,z),V&&g(M,B,k,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(M,w,k,B),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function u(M){return i.bindVertexArray(M)}function c(M){return i.deleteVertexArray(M)}function h(M,w,k){const B=k.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let V=z[w.id];V===void 0&&(V={},z[w.id]=V);let U=V[B];return U===void 0&&(U=f(l()),V[B]=U),U}function f(M){const w=[],k=[],B=[];for(let z=0;z<t;z++)w[z]=0,k[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,w,k,B){const z=r.attributes,V=w.attributes;let U=0;const G=k.getAttributes();for(const I in G)if(G[I].location>=0){const F=z[I];let Y=V[I];if(Y===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),F===void 0||F.attribute!==Y||Y&&F.data!==Y.data)return!0;U++}return r.attributesNum!==U||r.index!==B}function g(M,w,k,B){const z={},V=w.attributes;let U=0;const G=k.getAttributes();for(const I in G)if(G[I].location>=0){let F=V[I];F===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(F=M.instanceColor));const Y={};Y.attribute=F,F&&F.data&&(Y.data=F.data),z[I]=Y,U++}r.attributes=z,r.attributesNum=U,r.index=B}function _(){const M=r.newAttributes;for(let w=0,k=M.length;w<k;w++)M[w]=0}function m(M){d(M,0)}function d(M,w){const k=r.newAttributes,B=r.enabledAttributes,z=r.attributeDivisors;k[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),z[M]!==w&&(i.vertexAttribDivisor(M,w),z[M]=w)}function v(){const M=r.newAttributes,w=r.enabledAttributes;for(let k=0,B=w.length;k<B;k++)w[k]!==M[k]&&(i.disableVertexAttribArray(k),w[k]=0)}function y(M,w,k,B,z,V,U){U===!0?i.vertexAttribIPointer(M,w,k,z,V):i.vertexAttribPointer(M,w,k,B,z,V)}function x(M,w,k,B){_();const z=B.attributes,V=k.getAttributes(),U=w.defaultAttributeValues;for(const G in V){const I=V[G];if(I.location>=0){let P=z[G];if(P===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(P=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(P=M.instanceColor)),P!==void 0){const F=P.normalized,Y=P.itemSize,he=e.get(P);if(he===void 0)continue;const fe=he.buffer,H=he.type,ee=he.bytesPerElement,X=H===i.INT||H===i.UNSIGNED_INT||P.gpuType===Il;if(P.isInterleavedBufferAttribute){const ne=P.data,oe=ne.stride,A=P.offset;if(ne.isInstancedInterleavedBuffer){for(let K=0;K<I.locationSize;K++)d(I.location+K,ne.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let K=0;K<I.locationSize;K++)m(I.location+K);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let K=0;K<I.locationSize;K++)y(I.location+K,Y/I.locationSize,H,F,oe*ee,(A+Y/I.locationSize*K)*ee,X)}else{if(P.isInstancedBufferAttribute){for(let ne=0;ne<I.locationSize;ne++)d(I.location+ne,P.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ne=0;ne<I.locationSize;ne++)m(I.location+ne);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let ne=0;ne<I.locationSize;ne++)y(I.location+ne,Y/I.locationSize,H,F,Y*ee,Y/I.locationSize*ne*ee,X)}}else if(U!==void 0){const F=U[G];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(I.location,F);break;case 3:i.vertexAttrib3fv(I.location,F);break;case 4:i.vertexAttrib4fv(I.location,F);break;default:i.vertexAttrib1fv(I.location,F)}}}}v()}function b(){C();for(const M in n){const w=n[M];for(const k in w){const B=w[k];for(const z in B)c(B[z].object),delete B[z];delete w[k]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const k in w){const B=w[k];for(const z in B)c(B[z].object),delete B[z];delete w[k]}delete n[M.id]}function L(M){for(const w in n){const k=n[w];if(k[M.id]===void 0)continue;const B=k[M.id];for(const z in B)c(B[z].object),delete B[z];delete k[M.id]}}function C(){S(),o=!0,r!==s&&(r=s,u(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function H0(i,e,t){let n;function s(u){n=u}function r(u,c){i.drawArrays(n,u,c),t.update(c,n,1)}function o(u,c,h){h!==0&&(i.drawArraysInstanced(n,u,c,h),t.update(c,n,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];t.update(p,n,1)}function l(u,c,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==rn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const C=L===Is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Jn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Tn&&!C)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:T}}function V0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ni,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{const v=r?0:n,y=v*4;let x=d.clippingState||null;l.value=x,x=c(g,f,y,p);for(let b=0;b!==y;++b)x[b]=t[b];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function W0(i){let e=new WeakMap;function t(o,a){return a===Va?o.mapping=vs:a===Wa&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Va||a===Wa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new tp(l.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class xr extends Nh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,qc=[.125,.215,.35,.446,.526,.582],Bi=20,ra=new xr,jc=new Re;let oa=null,aa=0,la=0,ca=!1;const Fi=(1+Math.sqrt(5))/2,ls=1/Fi,Kc=[new O(-Fi,ls,0),new O(Fi,ls,0),new O(-ls,0,Fi),new O(ls,0,Fi),new O(0,Fi,-ls),new O(0,Fi,ls),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class $c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Is,format:rn,colorSpace:$t,depthBuffer:!1},s=Zc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X0(r)),this._blurMaterial=Y0(r,e,t)}return s}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,n,s){const a=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(jc),c.toneMapping=gi,c.autoClear=!1;const p=new bt({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new Ye(new Ft,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(jc),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const y=this._cubeSize;Yr(s,v*y,d>2?y:0,y,y),c.setRenderTarget(s),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===vs||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kc[(s-r-1)%Kc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Ye(this._lodPlanes[s],u),f=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const d=[];let v=0;for(let L=0;L<Bi;++L){const C=L/_,S=Math.exp(-C*C/2);d.push(S),L===0?v+=S:L<m&&(v+=2*S)}for(let L=0;L<d.length;L++)d[L]=d[L]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const x=this._sizeLods[s],b=3*x*(s>y-fs?s-y+fs:0),T=4*(this._cubeSize-x);Yr(t,b,T,3*x,2*x),l.setRenderTarget(t),l.render(h,ra)}}function X0(i){const e=[],t=[],n=[];let s=i;const r=i-fs+1+qc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-fs?l=qc[o-i+fs-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let T=0;T<p;T++){const L=T%3*2/3-1,C=T>2?0:-1,S=[L,C,0,L+2/3,C,0,L+2/3,C+1,0,L,C,0,L+2/3,C+1,0,L,C+1,0];v.set(S,_*g*T),y.set(f,m*g*T);const M=[T,T,T,T,T,T];x.set(M,d*g*T)}const b=new Xt;b.setAttribute("position",new Wt(v,_)),b.setAttribute("uv",new Wt(y,m)),b.setAttribute("faceIndex",new Wt(x,d)),e.push(b),s>fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zc(i,e,t){const n=new vi(i,e,t);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Y0(i,e,t){const n=new Float32Array(Bi),s=new O(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Jc(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Qc(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function q0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Va||l===Wa,c=l===vs||l===Ms;if(u||c){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new $c(i)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&s(p)?(t===null&&(t=new $c(i)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function j0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function K0(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const b=v[y+0],T=v[y+1],L=v[y+2];f.push(b,T,T,L,L,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const b=y+0,T=y+1,L=y+2;f.push(b,T,T,L,L,b)}}else return;const m=new(wh(f)?Dh:Ih)(f,1);m.version=_;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function c(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function $0(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function u(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Z0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function J0(i,e,t){const n=new WeakMap,s=new nt;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*b*4*h),L=new Ch(T,x,b,h);L.type=Tn,L.needsUpdate=!0;const C=y*4;for(let M=0;M<h;M++){const w=m[M],k=d[M],B=v[M],z=x*b*4*M;for(let V=0;V<w.count;V++){const U=V*C;p===!0&&(s.fromBufferAttribute(w,V),T[z+U+0]=s.x,T[z+U+1]=s.y,T[z+U+2]=s.z,T[z+U+3]=0),g===!0&&(s.fromBufferAttribute(k,V),T[z+U+4]=s.x,T[z+U+5]=s.y,T[z+U+6]=s.z,T[z+U+7]=0),_===!0&&(s.fromBufferAttribute(B,V),T[z+U+8]=s.x,T[z+U+9]=s.y,T[z+U+10]=s.z,T[z+U+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new ze(x,b)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Q0(i,e,t,n){let s=new WeakMap;function r(l){const u=n.render.frame,c=l.geometry,h=e.get(l,c);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class Bh extends Rt{constructor(e,t,n,s,r,o,a,l,u,c=ms){if(c!==ms&&c!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ms&&(n=Yi),n===void 0&&c===bs&&(n=Ss),super(null,s,r,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kh=new Rt,eu=new Bh(1,1),zh=new Ch,Hh=new kd,Gh=new Fh,tu=[],nu=[],iu=new Float32Array(16),su=new Float32Array(9),ru=new Float32Array(4);function Us(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=tu[s];if(r===void 0&&(r=new Float32Array(s),tu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Io(i,e){let t=nu[e];t===void 0&&(t=new Int32Array(e),nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),Lt(t,n)}}function rg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),Lt(t,n)}}function og(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;iu.set(n),i.uniformMatrix4fv(this.addr,!1,iu),Lt(t,n)}}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function mg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eu.compareFunction=Th,r=eu):r=kh,t.setTexture2D(e||r,s)}function gg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hh,s)}function _g(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gh,s)}function xg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zh,s)}function yg(i){switch(i){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return ug;case 5125:return hg;case 36294:return fg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}function vg(i,e){i.uniform1fv(this.addr,e)}function Mg(i,e){const t=Us(e,this.size,2);i.uniform2fv(this.addr,t)}function Sg(i,e){const t=Us(e,this.size,3);i.uniform3fv(this.addr,t)}function bg(i,e){const t=Us(e,this.size,4);i.uniform4fv(this.addr,t)}function Eg(i,e){const t=Us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tg(i,e){const t=Us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ag(i,e){const t=Us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wg(i,e){i.uniform1iv(this.addr,e)}function Rg(i,e){i.uniform2iv(this.addr,e)}function Cg(i,e){i.uniform3iv(this.addr,e)}function Lg(i,e){i.uniform4iv(this.addr,e)}function Pg(i,e){i.uniform1uiv(this.addr,e)}function Ig(i,e){i.uniform2uiv(this.addr,e)}function Dg(i,e){i.uniform3uiv(this.addr,e)}function Ug(i,e){i.uniform4uiv(this.addr,e)}function Ng(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||kh,r[o])}function Fg(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hh,r[o])}function Og(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gh,r[o])}function Bg(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zh,r[o])}function kg(i){switch(i){case 5126:return vg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return wg;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Lg;case 5125:return Pg;case 36294:return Ig;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yg(t.type)}}class Hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kg(t.type)}}class Gg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function ou(i,e){i.seq.push(e),i.map[e.id]=e}function Vg(i,e,t){const n=i.name,s=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),o=ua.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){ou(t,u===void 0?new zg(a,i,e):new Hg(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Gg(a),ou(t,h)),t=h}}}class mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Vg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function au(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Wg=37297;let Xg=0;function Yg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const lu=new Ve;function qg(i){Ke._getMatrix(lu,Ke.workingColorSpace,i);const e=`mat3( ${lu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Lo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yg(i.getShaderSource(e),o)}else return s}function jg(i,e){const t=qg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kg(i,e){let t;switch(e){case Kf:t="Linear";break;case $f:t="Reinhard";break;case Zf:t="Cineon";break;case Jf:t="ACESFilmic";break;case ed:t="AgX";break;case td:t="Neutral";break;case Qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new O;function $g(){Ke.getLuminanceCoefficients(qr);const i=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function Jg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function tr(i){return i!==""}function uu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(e_,n_)}const t_=new Map;function n_(i,e){let t=Xe[e];if(t===void 0){const n=t_.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(i_,s_)}function s_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function r_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function o_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case Ms:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function l_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pl:e="ENVMAP_BLENDING_MULTIPLY";break;case qf:e="ENVMAP_BLENDING_MIX";break;case jf:e="ENVMAP_BLENDING_ADD";break}return e}function c_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function u_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=r_(t),u=o_(t),c=a_(t),h=l_(t),f=c_(t),p=Zg(t),g=Jg(r),_=s.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),d.length>0&&(d+=`
`)):(m=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),d=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==gi?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,jg("linearToOutputTexel",t.outputColorSpace),$g(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),o=yl(o),o=uu(o,t),o=hu(o,t),a=yl(a),a=uu(a,t),a=hu(a,t),o=fu(o),a=fu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+m+o,x=v+d+a,b=au(s,s.VERTEX_SHADER,y),T=au(s,s.FRAGMENT_SHADER,x);s.attachShader(_,b),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(w){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(b).trim(),z=s.getShaderInfoLog(T).trim();let V=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,T);else{const G=cu(s,b,"vertex"),I=cu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+G+`
`+I)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||z==="")&&(U=!1);U&&(w.diagnostics={runnable:V,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:z,prefix:d}})}s.deleteShader(b),s.deleteShader(T),C=new mo(s,_),S=Qg(s,_)}let C;this.getUniforms=function(){return C===void 0&&L(this),C};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Wg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let h_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d_(e),t.set(e,n)),n}}class d_{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}}function p_(i,e,t,n,s,r,o){const a=new Lh,l=new f_,u=new Set,c=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function m(S,M,w,k,B){const z=k.fog,V=B.geometry,U=S.isMeshStandardMaterial?k.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||U),I=G&&G.mapping===Ro?G.image.height:null,P=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const F=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Y=F!==void 0?F.length:0;let he=0;V.morphAttributes.position!==void 0&&(he=1),V.morphAttributes.normal!==void 0&&(he=2),V.morphAttributes.color!==void 0&&(he=3);let fe,H,ee,X;if(P){const rt=Dn[P];fe=rt.vertexShader,H=rt.fragmentShader}else fe=S.vertexShader,H=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),X=l.getFragmentShaderID(S);const ne=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),A=B.isInstancedMesh===!0,K=B.isBatchedMesh===!0,J=!!S.map,le=!!S.matcap,be=!!G,N=!!S.aoMap,Ue=!!S.lightMap,de=!!S.bumpMap,ge=!!S.normalMap,Se=!!S.displacementMap,Be=!!S.emissiveMap,xe=!!S.metalnessMap,D=!!S.roughnessMap,E=S.anisotropy>0,$=S.clearcoat>0,se=S.dispersion>0,ae=S.iridescence>0,ie=S.sheen>0,Ie=S.transmission>0,_e=E&&!!S.anisotropyMap,Ee=$&&!!S.clearcoatMap,Ze=$&&!!S.clearcoatNormalMap,ce=$&&!!S.clearcoatRoughnessMap,Te=ae&&!!S.iridescenceMap,Ne=ae&&!!S.iridescenceThicknessMap,Fe=ie&&!!S.sheenColorMap,Ae=ie&&!!S.sheenRoughnessMap,$e=!!S.specularMap,We=!!S.specularColorMap,ut=!!S.specularIntensityMap,W=Ie&&!!S.transmissionMap,me=Ie&&!!S.thicknessMap,te=!!S.gradientMap,re=!!S.alphaMap,Me=S.alphaTest>0,ye=!!S.alphaHash,He=!!S.extensions;let xt=gi;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(xt=i.toneMapping);const Bt={shaderID:P,shaderType:S.type,shaderName:S.name,vertexShader:fe,fragmentShader:H,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:K,batchingColor:K&&B._colorsTexture!==null,instancing:A,instancingColor:A&&B.instanceColor!==null,instancingMorph:A&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$t,alphaToCoverage:!!S.alphaToCoverage,map:J,matcap:le,envMap:be,envMapMode:be&&G.mapping,envMapCubeUVHeight:I,aoMap:N,lightMap:Ue,bumpMap:de,normalMap:ge,displacementMap:f&&Se,emissiveMap:Be,normalMapObjectSpace:ge&&S.normalMapType===ad,normalMapTangentSpace:ge&&S.normalMapType===Co,metalnessMap:xe,roughnessMap:D,anisotropy:E,anisotropyMap:_e,clearcoat:$,clearcoatMap:Ee,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ce,dispersion:se,iridescence:ae,iridescenceMap:Te,iridescenceThicknessMap:Ne,sheen:ie,sheenColorMap:Fe,sheenRoughnessMap:Ae,specularMap:$e,specularColorMap:We,specularIntensityMap:ut,transmission:Ie,transmissionMap:W,thicknessMap:me,gradientMap:te,opaque:S.transparent===!1&&S.blending===ps&&S.alphaToCoverage===!1,alphaMap:re,alphaTest:Me,alphaHash:ye,combine:S.combine,mapUv:J&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:Ue&&_(S.lightMap.channel),bumpMapUv:de&&_(S.bumpMap.channel),normalMapUv:ge&&_(S.normalMap.channel),displacementMapUv:Se&&_(S.displacementMap.channel),emissiveMapUv:Be&&_(S.emissiveMap.channel),metalnessMapUv:xe&&_(S.metalnessMap.channel),roughnessMapUv:D&&_(S.roughnessMap.channel),anisotropyMapUv:_e&&_(S.anisotropyMap.channel),clearcoatMapUv:Ee&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(S.sheenRoughnessMap.channel),specularMapUv:$e&&_(S.specularMap.channel),specularColorMapUv:We&&_(S.specularColorMap.channel),specularIntensityMapUv:ut&&_(S.specularIntensityMap.channel),transmissionMapUv:W&&_(S.transmissionMap.channel),thicknessMapUv:me&&_(S.thicknessMap.channel),alphaMapUv:re&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(J||re),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:oe,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:he,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:J&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:Be&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fn,flipSided:S.side===Ot,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||K)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Bt.vertexUv1s=u.has(1),Bt.vertexUv2s=u.has(2),Bt.vertexUv3s=u.has(3),u.clear(),Bt}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)M.push(w),M.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let w;if(M){const k=Dn[M];w=Zd.clone(k.uniforms)}else w=S.uniforms;return w}function b(S,M){let w;for(let k=0,B=c.length;k<B;k++){const z=c[k];if(z.cacheKey===M){w=z,++w.usedTimes;break}}return w===void 0&&(w=new u_(i,M,S,r),c.push(w)),w}function T(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:b,releaseProgram:T,releaseShaderCache:L,programs:c,dispose:C}}function m_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function g_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function u(h,f){t.length>1&&t.sort(h||g_),n.length>1&&n.sort(f||pu),s.length>1&&s.sort(f||pu)}function c(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function __(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new mu,i.set(n,[o])):s>=r.length?(o=new mu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function x_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Re};break;case"SpotLight":t={position:new O,direction:new O,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function y_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let v_=0;function M_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function S_(i){const e=new x_,t=y_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new O);const s=new O,r=new ke,o=new ke;function a(u){let c=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,y=0,x=0,b=0,T=0,L=0;u.sort(M_);for(let S=0,M=u.length;S<M;S++){const w=u[S],k=w.color,B=w.intensity,z=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=k.r*B,h+=k.g*B,f+=k.b*B;else if(w.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(w.sh.coefficients[U],B);L++}else if(w.isDirectionalLight){const U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,I=t.get(w);I.shadowIntensity=G.intensity,I.shadowBias=G.bias,I.shadowNormalBias=G.normalBias,I.shadowRadius=G.radius,I.shadowMapSize=G.mapSize,n.directionalShadow[p]=I,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=w.shadow.matrix,v++}n.directional[p]=U,p++}else if(w.isSpotLight){const U=e.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(k).multiplyScalar(B),U.distance=z,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,n.spot[_]=U;const G=w.shadow;if(w.map&&(n.spotLightMap[b]=w.map,b++,G.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[_]=G.matrix,w.castShadow){const I=t.get(w);I.shadowIntensity=G.intensity,I.shadowBias=G.bias,I.shadowNormalBias=G.normalBias,I.shadowRadius=G.radius,I.shadowMapSize=G.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=V,x++}_++}else if(w.isRectAreaLight){const U=e.get(w);U.color.copy(k).multiplyScalar(B),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=U,m++}else if(w.isPointLight){const U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){const G=w.shadow,I=t.get(w);I.shadowIntensity=G.intensity,I.shadowBias=G.bias,I.shadowNormalBias=G.normalBias,I.shadowRadius=G.radius,I.shadowMapSize=G.mapSize,I.shadowCameraNear=G.camera.near,I.shadowCameraFar=G.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=U,g++}else if(w.isHemisphereLight){const U=e.get(w);U.skyColor.copy(w.color).multiplyScalar(B),U.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[d]=U,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=L,n.version=v_++)}function l(u,c){let h=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const y=u[d];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function gu(i){const e=new S_(i),t=[],n=[];function s(c){u.camera=c,t.length=0,n.length=0}function r(c){t.push(c)}function o(c){n.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function b_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new gu(i),e.set(s,[a])):r>=o.length?(a=new gu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class E_ extends dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T_ extends dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`;function R_(i,e,t){let n=new zl;const s=new ze,r=new ze,o=new nt,a=new E_({depthPacking:od}),l=new T_,u={},c=t.maxTextureSize,h={[sn]:Ot,[Ot]:sn,[fn]:fn},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:A_,fragmentShader:w_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ye(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let d=this.type;this.render=function(T,L,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),k=i.state;k.setBlending(mi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=d!==Yn&&this.type===Yn,z=d===Yn&&this.type!==Yn;for(let V=0,U=T.length;V<U;V++){const G=T[V],I=G.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const P=I.getFrameExtents();if(s.multiply(P),r.copy(I.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/P.x),s.x=r.x*P.x,I.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/P.y),s.y=r.y*P.y,I.mapSize.y=r.y)),I.map===null||B===!0||z===!0){const Y=this.type!==Yn?{minFilter:wt,magFilter:wt}:{};I.map!==null&&I.map.dispose(),I.map=new vi(s.x,s.y,Y),I.map.texture.name=G.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const F=I.getViewportCount();for(let Y=0;Y<F;Y++){const he=I.getViewport(Y);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),k.viewport(o),I.updateMatrices(G,Y),n=I.getFrustum(),x(L,C,I.camera,G,this.type)}I.isPointLightShadow!==!0&&this.type===Yn&&v(I,C),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,w)};function v(T,L){const C=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,C,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,C,p,_,null)}function y(T,L,C,S){let M=null;const w=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)M=w;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const k=M.uuid,B=L.uuid;let z=u[k];z===void 0&&(z={},u[k]=z);let V=z[B];V===void 0&&(V=M.clone(),z[B]=V,L.addEventListener("dispose",b)),M=V}if(M.visible=L.visible,M.wireframe=L.wireframe,S===Yn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:h[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=C}return M}function x(T,L,C,S,M){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const B=e.update(T),z=T.material;if(Array.isArray(z)){const V=B.groups;for(let U=0,G=V.length;U<G;U++){const I=V[U],P=z[I.materialIndex];if(P&&P.visible){const F=y(T,P,S,M);T.onBeforeShadow(i,T,L,C,B,F,I),i.renderBufferDirect(C,null,B,F,T,I),T.onAfterShadow(i,T,L,C,B,F,I)}}}else if(z.visible){const V=y(T,z,S,M);T.onBeforeShadow(i,T,L,C,B,V,null),i.renderBufferDirect(C,null,B,V,T,null),T.onAfterShadow(i,T,L,C,B,V,null)}}const k=T.children;for(let B=0,z=k.length;B<z;B++)x(k[B],L,C,S,M)}function b(T){T.target.removeEventListener("dispose",b);for(const C in u){const S=u[C],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const C_={[Fa]:Oa,[Ba]:Ha,[ka]:Ga,[ys]:za,[Oa]:Fa,[Ha]:Ba,[Ga]:ka,[za]:ys};function L_(i,e){function t(){let W=!1;const me=new nt;let te=null;const re=new nt(0,0,0,0);return{setMask:function(Me){te!==Me&&!W&&(i.colorMask(Me,Me,Me,Me),te=Me)},setLocked:function(Me){W=Me},setClear:function(Me,ye,He,xt,Bt){Bt===!0&&(Me*=xt,ye*=xt,He*=xt),me.set(Me,ye,He,xt),re.equals(me)===!1&&(i.clearColor(Me,ye,He,xt),re.copy(me))},reset:function(){W=!1,te=null,re.set(-1,0,0,0)}}}function n(){let W=!1,me=!1,te=null,re=null,Me=null;return{setReversed:function(ye){if(me!==ye){const He=e.get("EXT_clip_control");me?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const xt=Me;Me=null,this.setClear(xt)}me=ye},getReversed:function(){return me},setTest:function(ye){ye?ne(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(ye){te!==ye&&!W&&(i.depthMask(ye),te=ye)},setFunc:function(ye){if(me&&(ye=C_[ye]),re!==ye){switch(ye){case Fa:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=ye}},setLocked:function(ye){W=ye},setClear:function(ye){Me!==ye&&(me&&(ye=1-ye),i.clearDepth(ye),Me=ye)},reset:function(){W=!1,te=null,re=null,Me=null,me=!1}}}function s(){let W=!1,me=null,te=null,re=null,Me=null,ye=null,He=null,xt=null,Bt=null;return{setTest:function(rt){W||(rt?ne(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(rt){me!==rt&&!W&&(i.stencilMask(rt),me=rt)},setFunc:function(rt,gn,Bn){(te!==rt||re!==gn||Me!==Bn)&&(i.stencilFunc(rt,gn,Bn),te=rt,re=gn,Me=Bn)},setOp:function(rt,gn,Bn){(ye!==rt||He!==gn||xt!==Bn)&&(i.stencilOp(rt,gn,Bn),ye=rt,He=gn,xt=Bn)},setLocked:function(rt){W=rt},setClear:function(rt){Bt!==rt&&(i.clearStencil(rt),Bt=rt)},reset:function(){W=!1,me=null,te=null,re=null,Me=null,ye=null,He=null,xt=null,Bt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,u=new WeakMap;let c={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,y=null,x=null,b=null,T=null,L=new Re(0,0,0),C=0,S=!1,M=null,w=null,k=null,B=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,G=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(I)[1]),U=G>=1):I.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),U=G>=2);let P=null,F={};const Y=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),fe=new nt().fromArray(Y),H=new nt().fromArray(he);function ee(W,me,te,re){const Me=new Uint8Array(4),ye=i.createTexture();i.bindTexture(W,ye),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<te;He++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(me+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ye}const X={};X[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(ys),de(!1),ge(gc),ne(i.CULL_FACE),N(mi);function ne(W){c[W]!==!0&&(i.enable(W),c[W]=!0)}function oe(W){c[W]!==!1&&(i.disable(W),c[W]=!1)}function A(W,me){return h[W]!==me?(i.bindFramebuffer(W,me),h[W]=me,W===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),W===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function K(W,me){let te=p,re=!1;if(W){te=f.get(me),te===void 0&&(te=[],f.set(me,te));const Me=W.textures;if(te.length!==Me.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,He=Me.length;ye<He;ye++)te[ye]=i.COLOR_ATTACHMENT0+ye;te.length=Me.length,re=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,re=!0);re&&i.drawBuffers(te)}function J(W){return g!==W?(i.useProgram(W),g=W,!0):!1}const le={[Oi]:i.FUNC_ADD,[Lf]:i.FUNC_SUBTRACT,[Pf]:i.FUNC_REVERSE_SUBTRACT};le[If]=i.MIN,le[Df]=i.MAX;const be={[Uf]:i.ZERO,[Nf]:i.ONE,[Ff]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[Gf]:i.SRC_ALPHA_SATURATE,[zf]:i.DST_COLOR,[Bf]:i.DST_ALPHA,[Of]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[Hf]:i.ONE_MINUS_DST_COLOR,[kf]:i.ONE_MINUS_DST_ALPHA,[Vf]:i.CONSTANT_COLOR,[Wf]:i.ONE_MINUS_CONSTANT_COLOR,[Xf]:i.CONSTANT_ALPHA,[Yf]:i.ONE_MINUS_CONSTANT_ALPHA};function N(W,me,te,re,Me,ye,He,xt,Bt,rt){if(W===mi){_===!0&&(oe(i.BLEND),_=!1);return}if(_===!1&&(ne(i.BLEND),_=!0),W!==Cf){if(W!==m||rt!==S){if((d!==Oi||x!==Oi)&&(i.blendEquation(i.FUNC_ADD),d=Oi,x=Oi),rt)switch(W){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}v=null,y=null,b=null,T=null,L.set(0,0,0),C=0,m=W,S=rt}return}Me=Me||me,ye=ye||te,He=He||re,(me!==d||Me!==x)&&(i.blendEquationSeparate(le[me],le[Me]),d=me,x=Me),(te!==v||re!==y||ye!==b||He!==T)&&(i.blendFuncSeparate(be[te],be[re],be[ye],be[He]),v=te,y=re,b=ye,T=He),(xt.equals(L)===!1||Bt!==C)&&(i.blendColor(xt.r,xt.g,xt.b,Bt),L.copy(xt),C=Bt),m=W,S=!1}function Ue(W,me){W.side===fn?oe(i.CULL_FACE):ne(i.CULL_FACE);let te=W.side===Ot;me&&(te=!te),de(te),W.blending===ps&&W.transparent===!1?N(mi):N(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const re=W.stencilWrite;a.setTest(re),re&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Be(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(W){M!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),M=W)}function ge(W){W!==Tf?(ne(i.CULL_FACE),W!==w&&(W===gc?i.cullFace(i.BACK):W===Af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),w=W}function Se(W){W!==k&&(U&&i.lineWidth(W),k=W)}function Be(W,me,te){W?(ne(i.POLYGON_OFFSET_FILL),(B!==me||z!==te)&&(i.polygonOffset(me,te),B=me,z=te)):oe(i.POLYGON_OFFSET_FILL)}function xe(W){W?ne(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function D(W){W===void 0&&(W=i.TEXTURE0+V-1),P!==W&&(i.activeTexture(W),P=W)}function E(W,me,te){te===void 0&&(P===null?te=i.TEXTURE0+V-1:te=P);let re=F[te];re===void 0&&(re={type:void 0,texture:void 0},F[te]=re),(re.type!==W||re.texture!==me)&&(P!==te&&(i.activeTexture(te),P=te),i.bindTexture(W,me||X[W]),re.type=W,re.texture=me)}function $(){const W=F[P];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(W){fe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),fe.copy(W))}function Ae(W){H.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),H.copy(W))}function $e(W,me){let te=u.get(me);te===void 0&&(te=new WeakMap,u.set(me,te));let re=te.get(W);re===void 0&&(re=i.getUniformBlockIndex(me,W.name),te.set(W,re))}function We(W,me){const re=u.get(me).get(W);l.get(me)!==re&&(i.uniformBlockBinding(me,re,W.__bindingPointIndex),l.set(me,re))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},P=null,F={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,y=null,x=null,b=null,T=null,L=new Re(0,0,0),C=0,S=!1,M=null,w=null,k=null,B=null,z=null,fe.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:oe,bindFramebuffer:A,drawBuffers:K,useProgram:J,setBlending:N,setMaterial:Ue,setFlipSided:de,setCullFace:ge,setLineWidth:Se,setPolygonOffset:Be,setScissorTest:xe,activeTexture:D,bindTexture:E,unbindTexture:$,compressedTexImage2D:se,compressedTexImage3D:ae,texImage2D:Te,texImage3D:Ne,updateUBOMapping:$e,uniformBlockBinding:We,texStorage2D:Ze,texStorage3D:ce,texSubImage2D:ie,texSubImage3D:Ie,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:Fe,viewport:Ae,reset:ut}}function _u(i,e,t,n){const s=P_(n);switch(t){case xh:return i*e;case vh:return i*e;case Mh:return i*e*2;case Nl:return i*e/s.components*s.byteLength;case Fl:return i*e/s.components*s.byteLength;case Sh:return i*e*2/s.components*s.byteLength;case Ol:return i*e*2/s.components*s.byteLength;case yh:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case Bl:return i*e*4/s.components*s.byteLength;case co:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:case ja:return Math.max(i,16)*Math.max(e,8)/4;case Xa:case qa:return Math.max(i,8)*Math.max(e,8)/2;case Ka:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case po:case fl:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bh:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P_(i){switch(i){case Jn:case mh:return{byteLength:1,components:1};case pr:case gh:case Is:return{byteLength:2,components:1};case Dl:case Ul:return{byteLength:2,components:4};case Yi:case Il:case Tn:return{byteLength:4,components:1};case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function I_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ze,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return p?new OffscreenCanvas(D,E):_r("canvas")}function _(D,E,$){let se=1;const ae=xe(D);if((ae.width>$||ae.height>$)&&(se=$/Math.max(ae.width,ae.height)),se<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ie=Math.floor(se*ae.width),Ie=Math.floor(se*ae.height);h===void 0&&(h=g(ie,Ie));const _e=E?g(ie,Ie):h;return _e.width=ie,_e.height=Ie,_e.getContext("2d").drawImage(D,0,0,ie,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ie+"x"+Ie+")."),_e}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),D;return D}function m(D){return D.generateMipmaps}function d(D){i.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,E,$,se,ae=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ie=E;if(E===i.RED&&($===i.FLOAT&&(ie=i.R32F),$===i.HALF_FLOAT&&(ie=i.R16F),$===i.UNSIGNED_BYTE&&(ie=i.R8)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.R8UI),$===i.UNSIGNED_SHORT&&(ie=i.R16UI),$===i.UNSIGNED_INT&&(ie=i.R32UI),$===i.BYTE&&(ie=i.R8I),$===i.SHORT&&(ie=i.R16I),$===i.INT&&(ie=i.R32I)),E===i.RG&&($===i.FLOAT&&(ie=i.RG32F),$===i.HALF_FLOAT&&(ie=i.RG16F),$===i.UNSIGNED_BYTE&&(ie=i.RG8)),E===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RG8UI),$===i.UNSIGNED_SHORT&&(ie=i.RG16UI),$===i.UNSIGNED_INT&&(ie=i.RG32UI),$===i.BYTE&&(ie=i.RG8I),$===i.SHORT&&(ie=i.RG16I),$===i.INT&&(ie=i.RG32I)),E===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),$===i.UNSIGNED_INT&&(ie=i.RGB32UI),$===i.BYTE&&(ie=i.RGB8I),$===i.SHORT&&(ie=i.RGB16I),$===i.INT&&(ie=i.RGB32I)),E===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),$===i.UNSIGNED_INT&&(ie=i.RGBA32UI),$===i.BYTE&&(ie=i.RGBA8I),$===i.SHORT&&(ie=i.RGBA16I),$===i.INT&&(ie=i.RGBA32I)),E===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),E===i.RGBA){const Ie=ae?Lo:Ke.getTransfer(se);$===i.FLOAT&&(ie=i.RGBA32F),$===i.HALF_FLOAT&&(ie=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ie=Ie===ct?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(D,E){let $;return D?E===null||E===Yi||E===Ss?$=i.DEPTH24_STENCIL8:E===Tn?$=i.DEPTH32F_STENCIL8:E===pr&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===Ss?$=i.DEPTH_COMPONENT24:E===Tn?$=i.DEPTH_COMPONENT32F:E===pr&&($=i.DEPTH_COMPONENT16),$}function b(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==wt&&D.minFilter!==Qt?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function T(D){const E=D.target;E.removeEventListener("dispose",T),C(E),E.isVideoTexture&&c.delete(E)}function L(D){const E=D.target;E.removeEventListener("dispose",L),M(E)}function C(D){const E=n.get(D);if(E.__webglInit===void 0)return;const $=D.source,se=f.get($);if(se){const ae=se[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&S(D),Object.keys(se).length===0&&f.delete($)}n.remove(D)}function S(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const $=D.source,se=f.get($);delete se[E.__cacheKey],o.memory.textures--}function M(D){const E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let ae=0;ae<E.__webglFramebuffer[se].length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[se][ae]);else i.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)i.deleteFramebuffer(E.__webglFramebuffer[se]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=D.textures;for(let se=0,ae=$.length;se<ae;se++){const ie=n.get($[se]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove($[se])}n.remove(D)}let w=0;function k(){w=0}function B(){const D=w;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),w+=1,D}function z(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function V(D,E){const $=n.get(D);if(D.isVideoTexture&&Se(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const se=D.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H($,D,E);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function U(D,E){const $=n.get(D);if(D.version>0&&$.__version!==D.version){H($,D,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function G(D,E){const $=n.get(D);if(D.version>0&&$.__version!==D.version){H($,D,E);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function I(D,E){const $=n.get(D);if(D.version>0&&$.__version!==D.version){ee($,D,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}const P={[Xi]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[xo]:i.MIRRORED_REPEAT},F={[wt]:i.NEAREST,[ph]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},Y={[ld]:i.NEVER,[pd]:i.ALWAYS,[cd]:i.LESS,[Th]:i.LEQUAL,[ud]:i.EQUAL,[dd]:i.GEQUAL,[hd]:i.GREATER,[fd]:i.NOTEQUAL};function he(D,E){if(E.type===Tn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Qt||E.magFilter===lo||E.magFilter===Qs||E.magFilter===jn||E.minFilter===Qt||E.minFilter===lo||E.minFilter===Qs||E.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,P[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,P[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,P[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,F[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,F[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Y[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wt||E.minFilter!==Qs&&E.minFilter!==jn||E.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function fe(D,E){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",T));const se=E.source;let ae=f.get(se);ae===void 0&&(ae={},f.set(se,ae));const ie=z(E);if(ie!==D.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ae[ie].usedTimes++;const Ie=ae[D.__cacheKey];Ie!==void 0&&(ae[D.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(E)),D.__cacheKey=ie,D.__webglTexture=ae[ie].texture}return $}function H(D,E,$){let se=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=i.TEXTURE_3D);const ae=fe(D,E),ie=E.source;t.bindTexture(se,D.__webglTexture,i.TEXTURE0+$);const Ie=n.get(ie);if(ie.version!==Ie.__version||ae===!0){t.activeTexture(i.TEXTURE0+$);const _e=Ke.getPrimaries(Ke.workingColorSpace),Ee=E.colorSpace===fi?null:Ke.getPrimaries(E.colorSpace),Ze=E.colorSpace===fi||_e===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ce=_(E.image,!1,s.maxTextureSize);ce=Be(E,ce);const Te=r.convert(E.format,E.colorSpace),Ne=r.convert(E.type);let Fe=y(E.internalFormat,Te,Ne,E.colorSpace,E.isVideoTexture);he(se,E);let Ae;const $e=E.mipmaps,We=E.isVideoTexture!==!0,ut=Ie.__version===void 0||ae===!0,W=ie.dataReady,me=b(E,ce);if(E.isDepthTexture)Fe=x(E.format===bs,E.type),ut&&(We?t.texStorage2D(i.TEXTURE_2D,1,Fe,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ce.width,ce.height,0,Te,Ne,null));else if(E.isDataTexture)if($e.length>0){We&&ut&&t.texStorage2D(i.TEXTURE_2D,me,Fe,$e[0].width,$e[0].height);for(let te=0,re=$e.length;te<re;te++)Ae=$e[te],We?W&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ae.width,Ae.height,Te,Ne,Ae.data):t.texImage2D(i.TEXTURE_2D,te,Fe,Ae.width,Ae.height,0,Te,Ne,Ae.data);E.generateMipmaps=!1}else We?(ut&&t.texStorage2D(i.TEXTURE_2D,me,Fe,ce.width,ce.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,Te,Ne,ce.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,ce.width,ce.height,0,Te,Ne,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){We&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Fe,$e[0].width,$e[0].height,ce.depth);for(let te=0,re=$e.length;te<re;te++)if(Ae=$e[te],E.format!==rn)if(Te!==null)if(We){if(W)if(E.layerUpdates.size>0){const Me=_u(Ae.width,Ae.height,E.format,E.type);for(const ye of E.layerUpdates){const He=Ae.data.subarray(ye*Me/Ae.data.BYTES_PER_ELEMENT,(ye+1)*Me/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ye,Ae.width,Ae.height,1,Te,He)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Ae.width,Ae.height,ce.depth,Te,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Fe,Ae.width,Ae.height,ce.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Ae.width,Ae.height,ce.depth,Te,Ne,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Fe,Ae.width,Ae.height,ce.depth,0,Te,Ne,Ae.data)}else{We&&ut&&t.texStorage2D(i.TEXTURE_2D,me,Fe,$e[0].width,$e[0].height);for(let te=0,re=$e.length;te<re;te++)Ae=$e[te],E.format!==rn?Te!==null?We?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,Ae.width,Ae.height,Te,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Fe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?W&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ae.width,Ae.height,Te,Ne,Ae.data):t.texImage2D(i.TEXTURE_2D,te,Fe,Ae.width,Ae.height,0,Te,Ne,Ae.data)}else if(E.isDataArrayTexture)if(We){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Fe,ce.width,ce.height,ce.depth),W)if(E.layerUpdates.size>0){const te=_u(ce.width,ce.height,E.format,E.type);for(const re of E.layerUpdates){const Me=ce.data.subarray(re*te/ce.data.BYTES_PER_ELEMENT,(re+1)*te/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ce.width,ce.height,1,Te,Ne,Me)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Te,Ne,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ce.width,ce.height,ce.depth,0,Te,Ne,ce.data);else if(E.isData3DTexture)We?(ut&&t.texStorage3D(i.TEXTURE_3D,me,Fe,ce.width,ce.height,ce.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Te,Ne,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ce.width,ce.height,ce.depth,0,Te,Ne,ce.data);else if(E.isFramebufferTexture){if(ut)if(We)t.texStorage2D(i.TEXTURE_2D,me,Fe,ce.width,ce.height);else{let te=ce.width,re=ce.height;for(let Me=0;Me<me;Me++)t.texImage2D(i.TEXTURE_2D,Me,Fe,te,re,0,Te,Ne,null),te>>=1,re>>=1}}else if($e.length>0){if(We&&ut){const te=xe($e[0]);t.texStorage2D(i.TEXTURE_2D,me,Fe,te.width,te.height)}for(let te=0,re=$e.length;te<re;te++)Ae=$e[te],We?W&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Te,Ne,Ae):t.texImage2D(i.TEXTURE_2D,te,Fe,Te,Ne,Ae);E.generateMipmaps=!1}else if(We){if(ut){const te=xe(ce);t.texStorage2D(i.TEXTURE_2D,me,Fe,te.width,te.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Ne,ce)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Te,Ne,ce);m(E)&&d(se),Ie.__version=ie.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ee(D,E,$){if(E.image.length!==6)return;const se=fe(D,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+$);const ie=n.get(ae);if(ae.version!==ie.__version||se===!0){t.activeTexture(i.TEXTURE0+$);const Ie=Ke.getPrimaries(Ke.workingColorSpace),_e=E.colorSpace===fi?null:Ke.getPrimaries(E.colorSpace),Ee=E.colorSpace===fi||Ie===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ze=E.isCompressedTexture||E.image[0].isCompressedTexture,ce=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let re=0;re<6;re++)!Ze&&!ce?Te[re]=_(E.image[re],!0,s.maxCubemapSize):Te[re]=ce?E.image[re].image:E.image[re],Te[re]=Be(E,Te[re]);const Ne=Te[0],Fe=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type),$e=y(E.internalFormat,Fe,Ae,E.colorSpace),We=E.isVideoTexture!==!0,ut=ie.__version===void 0||se===!0,W=ae.dataReady;let me=b(E,Ne);he(i.TEXTURE_CUBE_MAP,E);let te;if(Ze){We&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,$e,Ne.width,Ne.height);for(let re=0;re<6;re++){te=Te[re].mipmaps;for(let Me=0;Me<te.length;Me++){const ye=te[Me];E.format!==rn?Fe!==null?We?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,0,0,ye.width,ye.height,Fe,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,$e,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,0,0,ye.width,ye.height,Fe,Ae,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,$e,ye.width,ye.height,0,Fe,Ae,ye.data)}}}else{if(te=E.mipmaps,We&&ut){te.length>0&&me++;const re=xe(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,$e,re.width,re.height)}for(let re=0;re<6;re++)if(ce){We?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Te[re].width,Te[re].height,Fe,Ae,Te[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,Te[re].width,Te[re].height,0,Fe,Ae,Te[re].data);for(let Me=0;Me<te.length;Me++){const He=te[Me].image[re].image;We?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,0,0,He.width,He.height,Fe,Ae,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,$e,He.width,He.height,0,Fe,Ae,He.data)}}else{We?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Fe,Ae,Te[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,Fe,Ae,Te[re]);for(let Me=0;Me<te.length;Me++){const ye=te[Me];We?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,0,0,Fe,Ae,ye.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,$e,Fe,Ae,ye.image[re])}}}m(E)&&d(i.TEXTURE_CUBE_MAP),ie.__version=ae.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function X(D,E,$,se,ae,ie){const Ie=r.convert($.format,$.colorSpace),_e=r.convert($.type),Ee=y($.internalFormat,Ie,_e,$.colorSpace),Ze=n.get(E),ce=n.get($);if(ce.__renderTarget=E,!Ze.__hasExternalTextures){const Te=Math.max(1,E.width>>ie),Ne=Math.max(1,E.height>>ie);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ie,Ee,Te,Ne,E.depth,0,Ie,_e,null):t.texImage2D(ae,ie,Ee,Te,Ne,0,Ie,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ge(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ae,ce.__webglTexture,0,de(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ae,ce.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(D,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){const se=E.depthTexture,ae=se&&se.isDepthTexture?se.type:null,ie=x(E.stencilBuffer,ae),Ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=de(E);ge(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ie,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ie,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ie,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,D)}else{const se=E.textures;for(let ae=0;ae<se.length;ae++){const ie=se[ae],Ie=r.convert(ie.format,ie.colorSpace),_e=r.convert(ie.type),Ee=y(ie.internalFormat,Ie,_e,ie.colorSpace),Ze=de(E);$&&ge(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Ee,E.width,E.height):ge(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,Ee,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(E.depthTexture);se.__renderTarget=E,(!se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const ae=se.__webglTexture,ie=de(E);if(E.depthTexture.format===ms)ge(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(E.depthTexture.format===bs)ge(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function A(D){const E=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const se=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",ae)};se.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=se}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");oe(E.__webglFramebuffer,D)}else if($){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=i.createRenderbuffer(),ne(E.__webglDepthbuffer[se],D,!1);else{const ae=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ne(E.__webglDepthbuffer,D,!1);else{const se=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function K(D,E,$){const se=n.get(D);E!==void 0&&X(se.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&A(D)}function J(D){const E=D.texture,$=n.get(D),se=n.get(E);D.addEventListener("dispose",L);const ae=D.textures,ie=D.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=E.version,o.memory.textures++),ie){$.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)$.__webglFramebuffer[_e][Ee]=i.createFramebuffer()}else $.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)$.__webglFramebuffer[_e]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let _e=0,Ee=ae.length;_e<Ee;_e++){const Ze=n.get(ae[_e]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ge(D)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _e=0;_e<ae.length;_e++){const Ee=ae[_e];$.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[_e]);const Ze=r.convert(Ee.format,Ee.colorSpace),ce=r.convert(Ee.type),Te=y(Ee.internalFormat,Ze,ce,Ee.colorSpace,D.isXRRenderTarget===!0),Ne=de(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Te,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,$.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ne($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),he(i.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)X($.__webglFramebuffer[_e][Ee],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else X($.__webglFramebuffer[_e],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(E)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let _e=0,Ee=ae.length;_e<Ee;_e++){const Ze=ae[_e],ce=n.get(Ze);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),he(i.TEXTURE_2D,Ze),X($.__webglFramebuffer,D,Ze,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),m(Ze)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,se.__webglTexture),he(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)X($.__webglFramebuffer[Ee],D,E,i.COLOR_ATTACHMENT0,_e,Ee);else X($.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,_e,0);m(E)&&d(_e),t.unbindTexture()}D.depthBuffer&&A(D)}function le(D){const E=D.textures;for(let $=0,se=E.length;$<se;$++){const ae=E[$];if(m(ae)){const ie=v(D),Ie=n.get(ae).__webglTexture;t.bindTexture(ie,Ie),d(ie),t.unbindTexture()}}}const be=[],N=[];function Ue(D){if(D.samples>0){if(ge(D)===!1){const E=D.textures,$=D.width,se=D.height;let ae=i.COLOR_BUFFER_BIT;const ie=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(D),_e=E.length>1;if(_e)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ee]);const Ze=n.get(E[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,$,se,0,0,$,se,ae,i.NEAREST),l===!0&&(be.length=0,N.length=0,be.push(i.COLOR_ATTACHMENT0+Ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(be.push(ie),N.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ee]);const Ze=n.get(E[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function de(D){return Math.min(s.maxSamples,D.samples)}function ge(D){const E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Se(D){const E=o.render.frame;c.get(D)!==E&&(c.set(D,E),D.update())}function Be(D,E){const $=D.colorSpace,se=D.format,ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==$t&&$!==fi&&(Ke.getTransfer($)===ct?(se!==rn||ae!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function xe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=V,this.setTexture2DArray=U,this.setTexture3D=G,this.setTextureCube=I,this.rebindTextures=K,this.setupRenderTarget=J,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=X,this.useMultisampledRTT=ge}function D_(i,e){function t(n,s=fi){let r;const o=Ke.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.BYTE;if(n===gh)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===yh)return i.RGB;if(n===rn)return i.RGBA;if(n===vh)return i.LUMINANCE;if(n===Mh)return i.LUMINANCE_ALPHA;if(n===ms)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===Fl)return i.RED_INTEGER;if(n===Sh)return i.RG;if(n===Ol)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===co||n===uo||n===ho||n===fo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===Ya||n===qa||n===ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===$a||n===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===$a)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===Qa||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===fl||n===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bh||n===pl||n===ml||n===gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class U_ extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Rt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k_ extends Ds{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const _=new B_,m=t.getContextAttributes();let d=null,v=null;const y=[],x=[],b=new ze;let T=null;const L=new Jt;L.viewport=new nt;const C=new Jt;C.viewport=new nt;const S=[L,C],M=new U_;let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=y[H];return ee===void 0&&(ee=new ha,y[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=y[H];return ee===void 0&&(ee=new ha,y[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=y[H];return ee===void 0&&(ee=new ha,y[H]=ee),ee.getHandSpace()};function B(H){const ee=x.indexOf(H.inputSource);if(ee===-1)return;const X=y[ee];X!==void 0&&(X.update(H.inputSource,H.frame,u||o),X.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",V);for(let H=0;H<y.length;H++){const ee=x[H];ee!==null&&(x[H]=null,y[H].disconnect(ee))}w=null,k=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,v=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new vi(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,X=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?bs:ms,X=m.stencil?Ss:Yi);const oe={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new vi(f.textureWidth,f.textureHeight,{format:rn,type:Jn,depthTexture:new Bh(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(H){for(let ee=0;ee<H.removed.length;ee++){const X=H.removed[ee],ne=x.indexOf(X);ne>=0&&(x[ne]=null,y[ne].disconnect(X))}for(let ee=0;ee<H.added.length;ee++){const X=H.added[ee];let ne=x.indexOf(X);if(ne===-1){for(let A=0;A<y.length;A++)if(A>=x.length){x.push(X),ne=A;break}else if(x[A]===null){x[A]=X,ne=A;break}if(ne===-1)break}const oe=y[ne];oe&&oe.connect(X)}}const U=new O,G=new O;function I(H,ee,X){U.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(X.matrixWorld);const ne=U.distanceTo(G),oe=ee.projectionMatrix.elements,A=X.projectionMatrix.elements,K=oe[14]/(oe[10]-1),J=oe[14]/(oe[10]+1),le=(oe[9]+1)/oe[5],be=(oe[9]-1)/oe[5],N=(oe[8]-1)/oe[0],Ue=(A[8]+1)/A[0],de=K*N,ge=K*Ue,Se=ne/(-N+Ue),Be=Se*-N;if(ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Be),H.translateZ(Se),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),oe[10]===-1)H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const xe=K+Se,D=J+Se,E=de-Be,$=ge+(ne-Be),se=le*J/D*xe,ae=be*J/D*xe;H.projectionMatrix.makePerspective(E,$,se,ae,xe,D),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function P(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let ee=H.near,X=H.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(X=_.depthFar)),M.near=C.near=L.near=ee,M.far=C.far=L.far=X,(w!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,k=M.far),L.layers.mask=H.layers.mask|2,C.layers.mask=H.layers.mask|4,M.layers.mask=L.layers.mask|C.layers.mask;const ne=H.parent,oe=M.cameras;P(M,ne);for(let A=0;A<oe.length;A++)P(oe[A],ne);oe.length===2?I(M,L,C):M.projectionMatrix.copy(L.projectionMatrix),F(H,M,ne)};function F(H,ee,X){X===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(X.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Es*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Y=null;function he(H,ee){if(c=ee.getViewerPose(u||o),g=ee,c!==null){const X=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ne=!1;X.length!==M.cameras.length&&(M.cameras.length=0,ne=!0);for(let A=0;A<X.length;A++){const K=X[A];let J=null;if(p!==null)J=p.getViewport(K);else{const be=h.getViewSubImage(f,K);J=be.viewport,A===0&&(e.setRenderTargetTextures(v,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(v))}let le=S[A];le===void 0&&(le=new Jt,le.layers.enable(A),le.viewport=new nt,S[A]=le),le.matrix.fromArray(K.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(K.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(J.x,J.y,J.width,J.height),A===0&&(M.matrix.copy(le.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ne===!0&&M.cameras.push(le)}const oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const A=h.getDepthInformation(X[0]);A&&A.isValid&&A.texture&&_.init(e,A,s.renderState)}}for(let X=0;X<y.length;X++){const ne=x[X],oe=y[X];ne!==null&&oe!==void 0&&oe.update(ne,ee,u||o)}Y&&Y(H,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const fe=new Oh;fe.setAnimationLoop(he),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}}const wi=new pn,z_=new ke;function H_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Uh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,y):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ot&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ot&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,wi.copy(x),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(wi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function u(v,y){let x=s[v.id];x===void 0&&(g(v),x=c(v),s[v.id]=x,v.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(v,b);const T=e.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function c(v){const y=h();v.__bindingPointIndex=y;const x=i.createBuffer(),b=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],x=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,L=x.length;T<L;T++){const C=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=C.length;S<M;S++){const w=C[S];if(p(w,T,S,b)===!0){const k=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let z=0;for(let V=0;V<B.length;V++){const U=B[V],G=_(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,k+z,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):(U.toArray(w.__data,z),z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,y,x,b){const T=v.value,L=y+"_"+x;if(b[L]===void 0)return typeof T=="number"||typeof T=="boolean"?b[L]=T:b[L]=T.clone(),!0;{const C=b[L];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[L]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(v){const y=v.uniforms;let x=0;const b=16;for(let L=0,C=y.length;L<C;L++){const S=Array.isArray(y[L])?y[L]:[y[L]];for(let M=0,w=S.length;M<w;M++){const k=S[M],B=Array.isArray(k.value)?k.value:[k.value];for(let z=0,V=B.length;z<V;z++){const U=B[z],G=_(U),I=x%b,P=I%G.boundary,F=I+P;x+=P,F!==0&&b-F<G.storage&&(x+=b-F),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=G.storage}}}const T=x%b;return T>0&&(x+=b-T),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:u,dispose:d}}class V_{constructor(e={}){const{canvas:t=Pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=gi,this.toneMappingExposure=1;const x=this;let b=!1,T=0,L=0,C=null,S=-1,M=null;const w=new nt,k=new nt;let B=null;const z=new Re(0);let V=0,U=t.width,G=t.height,I=1,P=null,F=null;const Y=new nt(0,0,U,G),he=new nt(0,0,U,G);let fe=!1;const H=new zl;let ee=!1,X=!1;const ne=new ke,oe=new ke,A=new O,K=new nt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function be(){return C===null?I:1}let N=n;function Ue(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ye,!1),N===null){const q="webgl2";if(N=Ue(q,R),N===null)throw Ue(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let de,ge,Se,Be,xe,D,E,$,se,ae,ie,Ie,_e,Ee,Ze,ce,Te,Ne,Fe,Ae,$e,We,ut,W;function me(){de=new j0(N),de.init(),We=new D_(N,de),ge=new G0(N,de,e,We),Se=new L_(N,de),ge.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),Be=new Z0(N),xe=new m_,D=new I_(N,de,Se,xe,ge,We,Be),E=new W0(x),$=new q0(x),se=new sp(N),ut=new z0(N,se),ae=new K0(N,se,Be,ut),ie=new Q0(N,ae,se,Be),Fe=new J0(N,ge,D),ce=new V0(xe),Ie=new p_(x,E,$,de,ge,ut,ce),_e=new H_(x,xe),Ee=new __,Ze=new b_(de),Ne=new k0(x,E,$,Se,ie,p,l),Te=new R_(x,ie,ge),W=new G_(N,Be,ge,Se),Ae=new H0(N,de,Be),$e=new $0(N,de,Be),Be.programs=Ie.programs,x.capabilities=ge,x.extensions=de,x.properties=xe,x.renderLists=Ee,x.shadowMap=Te,x.state=Se,x.info=Be}me();const te=new k_(x,N);this.xr=te,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=de.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=de.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(R){R!==void 0&&(I=R,this.setSize(U,G,!1))},this.getSize=function(R){return R.set(U,G)},this.setSize=function(R,q,Z=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,G=q,t.width=Math.floor(R*I),t.height=Math.floor(q*I),Z===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(U*I,G*I).floor()},this.setDrawingBufferSize=function(R,q,Z){U=R,G=q,I=Z,t.width=Math.floor(R*Z),t.height=Math.floor(q*Z),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(Y)},this.setViewport=function(R,q,Z,Q){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,q,Z,Q),Se.viewport(w.copy(Y).multiplyScalar(I).round())},this.getScissor=function(R){return R.copy(he)},this.setScissor=function(R,q,Z,Q){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,q,Z,Q),Se.scissor(k.copy(he).multiplyScalar(I).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(R){Se.setScissorTest(fe=R)},this.setOpaqueSort=function(R){P=R},this.setTransparentSort=function(R){F=R},this.getClearColor=function(R){return R.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(R=!0,q=!0,Z=!0){let Q=0;if(R){let j=!1;if(C!==null){const ue=C.texture.format;j=ue===Bl||ue===Ol||ue===Fl}if(j){const ue=C.texture.type,ve=ue===Jn||ue===Yi||ue===pr||ue===Ss||ue===Dl||ue===Ul,Ce=Ne.getClearColor(),Le=Ne.getClearAlpha(),Oe=Ce.r,Ge=Ce.g,Pe=Ce.b;ve?(g[0]=Oe,g[1]=Ge,g[2]=Pe,g[3]=Le,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Oe,_[1]=Ge,_[2]=Pe,_[3]=Le,N.clearBufferiv(N.COLOR,0,_))}else Q|=N.COLOR_BUFFER_BIT}q&&(Q|=N.DEPTH_BUFFER_BIT),Z&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ee.dispose(),Ze.dispose(),xe.dispose(),E.dispose(),$.dispose(),ie.dispose(),ut.dispose(),W.dispose(),Ie.dispose(),te.dispose(),te.removeEventListener("sessionstart",lc),te.removeEventListener("sessionend",cc),Mi.stop()};function re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Be.autoReset,q=Te.enabled,Z=Te.autoUpdate,Q=Te.needsUpdate,j=Te.type;me(),Be.autoReset=R,Te.enabled=q,Te.autoUpdate=Z,Te.needsUpdate=Q,Te.type=j}function ye(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function He(R){const q=R.target;q.removeEventListener("dispose",He),xt(q)}function xt(R){Bt(R),xe.remove(R)}function Bt(R){const q=xe.get(R).programs;q!==void 0&&(q.forEach(function(Z){Ie.releaseProgram(Z)}),R.isShaderMaterial&&Ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,Z,Q,j,ue){q===null&&(q=J);const ve=j.isMesh&&j.matrixWorld.determinant()<0,Ce=Sf(R,q,Z,Q,j);Se.setMaterial(Q,ve);let Le=Z.index,Oe=1;if(Q.wireframe===!0){if(Le=ae.getWireframeAttribute(Z),Le===void 0)return;Oe=2}const Ge=Z.drawRange,Pe=Z.attributes.position;let Qe=Ge.start*Oe,ht=(Ge.start+Ge.count)*Oe;ue!==null&&(Qe=Math.max(Qe,ue.start*Oe),ht=Math.min(ht,(ue.start+ue.count)*Oe)),Le!==null?(Qe=Math.max(Qe,0),ht=Math.min(ht,Le.count)):Pe!=null&&(Qe=Math.max(Qe,0),ht=Math.min(ht,Pe.count));const dt=ht-Qe;if(dt<0||dt===1/0)return;ut.setup(j,Q,Ce,Z,Le);let Zt,it=Ae;if(Le!==null&&(Zt=se.get(Le),it=$e,it.setIndex(Zt)),j.isMesh)Q.wireframe===!0?(Se.setLineWidth(Q.wireframeLinewidth*be()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(j.isLine){let De=Q.linewidth;De===void 0&&(De=1),Se.setLineWidth(De*be()),j.isLineSegments?it.setMode(N.LINES):j.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else j.isPoints?it.setMode(N.POINTS):j.isSprite&&it.setMode(N.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)it.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))it.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const De=j._multiDrawStarts,kn=j._multiDrawCounts,st=j._multiDrawCount,_n=Le?se.get(Le).bytesPerElement:1,ji=xe.get(Q).currentProgram.getUniforms();for(let en=0;en<st;en++)ji.setValue(N,"_gl_DrawID",en),it.render(De[en]/_n,kn[en])}else if(j.isInstancedMesh)it.renderInstances(Qe,dt,j.count);else if(Z.isInstancedBufferGeometry){const De=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,kn=Math.min(Z.instanceCount,De);it.renderInstances(Qe,dt,kn)}else it.render(Qe,dt)};function rt(R,q,Z){R.transparent===!0&&R.side===fn&&R.forceSinglePass===!1?(R.side=Ot,R.needsUpdate=!0,wr(R,q,Z),R.side=sn,R.needsUpdate=!0,wr(R,q,Z),R.side=fn):wr(R,q,Z)}this.compile=function(R,q,Z=null){Z===null&&(Z=R),d=Ze.get(Z),d.init(q),y.push(d),Z.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),R!==Z&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights();const Q=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ue=j.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Ce=ue[ve];rt(Ce,Z,j),Q.add(Ce)}else rt(ue,Z,j),Q.add(ue)}),y.pop(),d=null,Q},this.compileAsync=function(R,q,Z=null){const Q=this.compile(R,q,Z);return new Promise(j=>{function ue(){if(Q.forEach(function(ve){xe.get(ve).currentProgram.isReady()&&Q.delete(ve)}),Q.size===0){j(R);return}setTimeout(ue,10)}de.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let gn=null;function Bn(R){gn&&gn(R)}function lc(){Mi.stop()}function cc(){Mi.start()}const Mi=new Oh;Mi.setAnimationLoop(Bn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){gn=R,te.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},te.addEventListener("sessionstart",lc),te.addEventListener("sessionend",cc),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(q),q=te.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,q,C),d=Ze.get(R,y.length),d.init(q),y.push(d),oe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H.setFromProjectionMatrix(oe),X=this.localClippingEnabled,ee=ce.init(this.clippingPlanes,X),m=Ee.get(R,v.length),m.init(),v.push(m),te.enabled===!0&&te.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&Oo(ue,q,-1/0,x.sortObjects)}Oo(R,q,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(P,F),le=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,le&&Ne.addToRenderList(m,R),this.info.render.frame++,ee===!0&&ce.beginShadows();const Z=d.state.shadowsArray;Te.render(Z,R,q),ee===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,j=m.transmissive;if(d.setupLights(),q.isArrayCamera){const ue=q.cameras;if(j.length>0)for(let ve=0,Ce=ue.length;ve<Ce;ve++){const Le=ue[ve];hc(Q,j,R,Le)}le&&Ne.render(R);for(let ve=0,Ce=ue.length;ve<Ce;ve++){const Le=ue[ve];uc(m,R,Le,Le.viewport)}}else j.length>0&&hc(Q,j,R,q),le&&Ne.render(R),uc(m,R,q);C!==null&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(x,R,q),ut.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],ee===!0&&ce.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Oo(R,q,Z,Q){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){Q&&K.setFromMatrixPosition(R.matrixWorld).applyMatrix4(oe);const ve=ie.update(R),Ce=R.material;Ce.visible&&m.push(R,ve,Ce,Z,K.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||H.intersectsObject(R))){const ve=ie.update(R),Ce=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),K.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),K.copy(ve.boundingSphere.center)),K.applyMatrix4(R.matrixWorld).applyMatrix4(oe)),Array.isArray(Ce)){const Le=ve.groups;for(let Oe=0,Ge=Le.length;Oe<Ge;Oe++){const Pe=Le[Oe],Qe=Ce[Pe.materialIndex];Qe&&Qe.visible&&m.push(R,ve,Qe,Z,K.z,Pe)}}else Ce.visible&&m.push(R,ve,Ce,Z,K.z,null)}}const ue=R.children;for(let ve=0,Ce=ue.length;ve<Ce;ve++)Oo(ue[ve],q,Z,Q)}function uc(R,q,Z,Q){const j=R.opaque,ue=R.transmissive,ve=R.transparent;d.setupLightsView(Z),ee===!0&&ce.setGlobalState(x.clippingPlanes,Z),Q&&Se.viewport(w.copy(Q)),j.length>0&&Ar(j,q,Z),ue.length>0&&Ar(ue,q,Z),ve.length>0&&Ar(ve,q,Z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function hc(R,q,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Q.id]===void 0&&(d.state.transmissionRenderTarget[Q.id]=new vi(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?Is:Jn,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ue=d.state.transmissionRenderTarget[Q.id],ve=Q.viewport||w;ue.setSize(ve.z,ve.w);const Ce=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(z),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),le&&Ne.render(Z);const Le=x.toneMapping;x.toneMapping=gi;const Oe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),d.setupLightsView(Q),ee===!0&&ce.setGlobalState(x.clippingPlanes,Q),Ar(R,Z,Q),D.updateMultisampleRenderTarget(ue),D.updateRenderTargetMipmap(ue),de.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Pe=0,Qe=q.length;Pe<Qe;Pe++){const ht=q[Pe],dt=ht.object,Zt=ht.geometry,it=ht.material,De=ht.group;if(it.side===fn&&dt.layers.test(Q.layers)){const kn=it.side;it.side=Ot,it.needsUpdate=!0,fc(dt,Z,Q,Zt,it,De),it.side=kn,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(D.updateMultisampleRenderTarget(ue),D.updateRenderTargetMipmap(ue))}x.setRenderTarget(Ce),x.setClearColor(z,V),Oe!==void 0&&(Q.viewport=Oe),x.toneMapping=Le}function Ar(R,q,Z){const Q=q.isScene===!0?q.overrideMaterial:null;for(let j=0,ue=R.length;j<ue;j++){const ve=R[j],Ce=ve.object,Le=ve.geometry,Oe=Q===null?ve.material:Q,Ge=ve.group;Ce.layers.test(Z.layers)&&fc(Ce,q,Z,Le,Oe,Ge)}}function fc(R,q,Z,Q,j,ue){R.onBeforeRender(x,q,Z,Q,j,ue),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(x,q,Z,Q,R,ue),j.transparent===!0&&j.side===fn&&j.forceSinglePass===!1?(j.side=Ot,j.needsUpdate=!0,x.renderBufferDirect(Z,q,Q,j,R,ue),j.side=sn,j.needsUpdate=!0,x.renderBufferDirect(Z,q,Q,j,R,ue),j.side=fn):x.renderBufferDirect(Z,q,Q,j,R,ue),R.onAfterRender(x,q,Z,Q,j,ue)}function wr(R,q,Z){q.isScene!==!0&&(q=J);const Q=xe.get(R),j=d.state.lights,ue=d.state.shadowsArray,ve=j.state.version,Ce=Ie.getParameters(R,j.state,ue,q,Z),Le=Ie.getProgramCacheKey(Ce);let Oe=Q.programs;Q.environment=R.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(R.isMeshStandardMaterial?$:E).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Oe===void 0&&(R.addEventListener("dispose",He),Oe=new Map,Q.programs=Oe);let Ge=Oe.get(Le);if(Ge!==void 0){if(Q.currentProgram===Ge&&Q.lightsStateVersion===ve)return pc(R,Ce),Ge}else Ce.uniforms=Ie.getUniforms(R),R.onBeforeCompile(Ce,x),Ge=Ie.acquireProgram(Ce,Le),Oe.set(Le,Ge),Q.uniforms=Ce.uniforms;const Pe=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=ce.uniform),pc(R,Ce),Q.needsLights=Ef(R),Q.lightsStateVersion=ve,Q.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.directionalShadowMap.value=j.state.directionalShadowMap,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotShadowMap.value=j.state.spotShadowMap,Pe.spotLightMatrix.value=j.state.spotLightMatrix,Pe.spotLightMap.value=j.state.spotLightMap,Pe.pointShadowMap.value=j.state.pointShadowMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=Ge,Q.uniformsList=null,Ge}function dc(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=mo.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function pc(R,q){const Z=xe.get(R);Z.outputColorSpace=q.outputColorSpace,Z.batching=q.batching,Z.batchingColor=q.batchingColor,Z.instancing=q.instancing,Z.instancingColor=q.instancingColor,Z.instancingMorph=q.instancingMorph,Z.skinning=q.skinning,Z.morphTargets=q.morphTargets,Z.morphNormals=q.morphNormals,Z.morphColors=q.morphColors,Z.morphTargetsCount=q.morphTargetsCount,Z.numClippingPlanes=q.numClippingPlanes,Z.numIntersection=q.numClipIntersection,Z.vertexAlphas=q.vertexAlphas,Z.vertexTangents=q.vertexTangents,Z.toneMapping=q.toneMapping}function Sf(R,q,Z,Q,j){q.isScene!==!0&&(q=J),D.resetTextureUnits();const ue=q.fog,ve=Q.isMeshStandardMaterial?q.environment:null,Ce=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:$t,Le=(Q.isMeshStandardMaterial?$:E).get(Q.envMap||ve),Oe=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Pe=!!Z.morphAttributes.position,Qe=!!Z.morphAttributes.normal,ht=!!Z.morphAttributes.color;let dt=gi;Q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=x.toneMapping);const Zt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,it=Zt!==void 0?Zt.length:0,De=xe.get(Q),kn=d.state.lights;if(ee===!0&&(X===!0||R!==M)){const on=R===M&&Q.id===S;ce.setState(Q,R,on)}let st=!1;Q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==kn.state.version||De.outputColorSpace!==Ce||j.isBatchedMesh&&De.batching===!1||!j.isBatchedMesh&&De.batching===!0||j.isBatchedMesh&&De.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&De.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&De.instancing===!1||!j.isInstancedMesh&&De.instancing===!0||j.isSkinnedMesh&&De.skinning===!1||!j.isSkinnedMesh&&De.skinning===!0||j.isInstancedMesh&&De.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&De.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&De.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&De.instancingMorph===!1&&j.morphTexture!==null||De.envMap!==Le||Q.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ce.numPlanes||De.numIntersection!==ce.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==Ge||De.morphTargets!==Pe||De.morphNormals!==Qe||De.morphColors!==ht||De.toneMapping!==dt||De.morphTargetsCount!==it)&&(st=!0):(st=!0,De.__version=Q.version);let _n=De.currentProgram;st===!0&&(_n=wr(Q,q,j));let ji=!1,en=!1,Bs=!1;const pt=_n.getUniforms(),Pn=De.uniforms;if(Se.useProgram(_n.program)&&(ji=!0,en=!0,Bs=!0),Q.id!==S&&(S=Q.id,en=!0),ji||M!==R){Se.buffers.depth.getReversed()?(ne.copy(R.projectionMatrix),Dd(ne),Ud(ne),pt.setValue(N,"projectionMatrix",ne)):pt.setValue(N,"projectionMatrix",R.projectionMatrix),pt.setValue(N,"viewMatrix",R.matrixWorldInverse);const ti=pt.map.cameraPosition;ti!==void 0&&ti.setValue(N,A.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&pt.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&pt.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,en=!0,Bs=!0)}if(j.isSkinnedMesh){pt.setOptional(N,j,"bindMatrix"),pt.setOptional(N,j,"bindMatrixInverse");const on=j.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),pt.setValue(N,"boneTexture",on.boneTexture,D))}j.isBatchedMesh&&(pt.setOptional(N,j,"batchingTexture"),pt.setValue(N,"batchingTexture",j._matricesTexture,D),pt.setOptional(N,j,"batchingIdTexture"),pt.setValue(N,"batchingIdTexture",j._indirectTexture,D),pt.setOptional(N,j,"batchingColorTexture"),j._colorsTexture!==null&&pt.setValue(N,"batchingColorTexture",j._colorsTexture,D));const ks=Z.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0)&&Fe.update(j,Z,_n),(en||De.receiveShadow!==j.receiveShadow)&&(De.receiveShadow=j.receiveShadow,pt.setValue(N,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Pn.envMap.value=Le,Pn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(Pn.envMapIntensity.value=q.environmentIntensity),en&&(pt.setValue(N,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&bf(Pn,Bs),ue&&Q.fog===!0&&_e.refreshFogUniforms(Pn,ue),_e.refreshMaterialUniforms(Pn,Q,I,G,d.state.transmissionRenderTarget[R.id]),mo.upload(N,dc(De),Pn,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(mo.upload(N,dc(De),Pn,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&pt.setValue(N,"center",j.center),pt.setValue(N,"modelViewMatrix",j.modelViewMatrix),pt.setValue(N,"normalMatrix",j.normalMatrix),pt.setValue(N,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const on=Q.uniformsGroups;for(let ti=0,ni=on.length;ti<ni;ti++){const mc=on[ti];W.update(mc,_n),W.bind(mc,_n)}}return _n}function bf(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ef(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,Z){xe.get(R.texture).__webglTexture=q,xe.get(R.depthTexture).__webglTexture=Z;const Q=xe.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const Z=xe.get(R);Z.__webglFramebuffer=q,Z.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,Z=0){C=R,T=q,L=Z;let Q=!0,j=null,ue=!1,ve=!1;if(R){const Le=xe.get(R);if(Le.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(Le.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Le.__hasExternalTextures)D.rebindTextures(R,xe.get(R.texture).__webglTexture,xe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Pe=R.depthTexture;if(Le.__boundDepthTexture!==Pe){if(Pe!==null&&xe.has(Pe)&&(R.width!==Pe.image.width||R.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const Ge=xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[q])?j=Ge[q][Z]:j=Ge[q],ue=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?j=xe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?j=Ge[Z]:j=Ge,w.copy(R.viewport),k.copy(R.scissor),B=R.scissorTest}else w.copy(Y).multiplyScalar(I).floor(),k.copy(he).multiplyScalar(I).floor(),B=fe;if(Se.bindFramebuffer(N.FRAMEBUFFER,j)&&Q&&Se.drawBuffers(R,j),Se.viewport(w),Se.scissor(k),Se.setScissorTest(B),ue){const Le=xe.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,Z)}else if(ve){const Le=xe.get(R.texture),Oe=q||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.__webglTexture,Z||0,Oe)}S=-1},this.readRenderTargetPixels=function(R,q,Z,Q,j,ue,ve){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce){Se.bindFramebuffer(N.FRAMEBUFFER,Ce);try{const Le=R.texture,Oe=Le.format,Ge=Le.type;if(!ge.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-Q&&Z>=0&&Z<=R.height-j&&N.readPixels(q,Z,Q,j,We.convert(Oe),We.convert(Ge),ue)}finally{const Le=C!==null?xe.get(C).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(R,q,Z,Q,j,ue,ve){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce){const Le=R.texture,Oe=Le.format,Ge=Le.type;if(!ge.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-Q&&Z>=0&&Z<=R.height-j){Se.bindFramebuffer(N.FRAMEBUFFER,Ce);const Pe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),N.readPixels(q,Z,Q,j,We.convert(Oe),We.convert(Ge),0);const Qe=C!==null?xe.get(C).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Qe);const ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Id(N,ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue),N.deleteBuffer(Pe),N.deleteSync(ht),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,Z=0){R.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-Z),j=Math.floor(R.image.width*Q),ue=Math.floor(R.image.height*Q),ve=q!==null?q.x:0,Ce=q!==null?q.y:0;D.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,ve,Ce,j,ue),Se.unbindTexture()},this.copyTextureToTexture=function(R,q,Z=null,Q=null,j=0){R.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],q=arguments[2],j=arguments[3]||0,Z=null);let ue,ve,Ce,Le,Oe,Ge,Pe,Qe,ht;const dt=R.isCompressedTexture?R.mipmaps[j]:R.image;Z!==null?(ue=Z.max.x-Z.min.x,ve=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,Le=Z.min.x,Oe=Z.min.y,Ge=Z.isBox3?Z.min.z:0):(ue=dt.width,ve=dt.height,Ce=dt.depth||1,Le=0,Oe=0,Ge=0),Q!==null?(Pe=Q.x,Qe=Q.y,ht=Q.z):(Pe=0,Qe=0,ht=0);const Zt=We.convert(q.format),it=We.convert(q.type);let De;q.isData3DTexture?(D.setTexture3D(q,0),De=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(D.setTexture2DArray(q,0),De=N.TEXTURE_2D_ARRAY):(D.setTexture2D(q,0),De=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);const kn=N.getParameter(N.UNPACK_ROW_LENGTH),st=N.getParameter(N.UNPACK_IMAGE_HEIGHT),_n=N.getParameter(N.UNPACK_SKIP_PIXELS),ji=N.getParameter(N.UNPACK_SKIP_ROWS),en=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,dt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);const Bs=R.isDataArrayTexture||R.isData3DTexture,pt=q.isDataArrayTexture||q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Pn=xe.get(R),ks=xe.get(q),on=xe.get(Pn.__renderTarget),ti=xe.get(ks.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ni=0;ni<Ce;ni++)Bs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.get(R).__webglTexture,j,Ge+ni),R.isDepthTexture?(pt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.get(q).__webglTexture,j,ht+ni),N.blitFramebuffer(Le,Oe,ue,ve,Pe,Qe,ue,ve,N.DEPTH_BUFFER_BIT,N.NEAREST)):pt?N.copyTexSubImage3D(De,j,Pe,Qe,ht+ni,Le,Oe,ue,ve):N.copyTexSubImage2D(De,j,Pe,Qe,ht+ni,Le,Oe,ue,ve);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pt?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(De,j,Pe,Qe,ht,ue,ve,Ce,Zt,it,dt.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(De,j,Pe,Qe,ht,ue,ve,Ce,Zt,dt.data):N.texSubImage3D(De,j,Pe,Qe,ht,ue,ve,Ce,Zt,it,dt):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,j,Pe,Qe,ue,ve,Zt,it,dt.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,j,Pe,Qe,dt.width,dt.height,Zt,dt.data):N.texSubImage2D(N.TEXTURE_2D,j,Pe,Qe,ue,ve,Zt,it,dt);N.pixelStorei(N.UNPACK_ROW_LENGTH,kn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_n),N.pixelStorei(N.UNPACK_SKIP_ROWS,ji),N.pixelStorei(N.UNPACK_SKIP_IMAGES,en),j===0&&q.generateMipmaps&&N.generateMipmap(De),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,q,Z=null,Q=null,j=0){return R.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],q=arguments[3],j=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,Z,Q,j)},this.initRenderTarget=function(R){xe.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){T=0,L=0,C=null,Se.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class xu extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class W_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xl,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new O;class Gl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yu=new O,vu=new nt,Mu=new nt,X_=new O,Su=new ke,jr=new O,fa=new Nn,bu=new ke,da=new Po;class Y_ extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingSphere.expandByPoint(jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(s),e.ray.intersectsSphere(fa)!==!1&&(bu.copy(s).invert(),da.copy(e.ray).applyMatrix4(bu),!(this.boundingBox!==null&&da.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,da)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;vu.fromBufferAttribute(s.attributes.skinIndex,e),Mu.fromBufferAttribute(s.attributes.skinWeight,e),yu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Mu.getComponent(r);if(o!==0){const a=vu.getComponent(r);Su.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(X_.copy(yu).applyMatrix4(Su),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vh extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vl extends Rt{constructor(e=null,t=1,n=1,s,r,o,a,l,u=wt,c=wt,h,f){super(null,o,a,l,u,c,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eu=new ke,q_=new ke;class Wl{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:q_;Eu.multiplyMatrices(a,t[r]),Eu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Wl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vl(t,e,e,rn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Vh),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class vl extends Wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new ke,Tu=new ke,Kr=[],Au=new mn,j_=new ke,Ws=new Ye,Xs=new Nn;class go extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,j_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Au.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(Au)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Xs.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),e.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),Tu.multiplyMatrices(n,cs),Ws.matrixWorld=Tu,Ws.raycast(e,Kr);for(let o=0,a=Kr.length;o<a;o++){const l=Kr[o];l.instanceId=r,l.object=this,t.push(l)}Kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vl(new Float32Array(s*this.count),s,this.count,Nl,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Wh extends dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vo=new O,Mo=new O,wu=new ke,Ys=new Po,$r=new Nn,pa=new O,Ru=new O;class Xl extends gt{constructor(e=new Xt,t=new Wh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)vo.fromBufferAttribute(t,s-1),Mo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=vo.distanceTo(Mo);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;wu.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const d=c.getX(_),v=c.getX(_+1),y=Zr(this,e,Ys,l,d,v);y&&t.push(y)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(p),d=Zr(this,e,Ys,l,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const d=Zr(this,e,Ys,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Zr(this,e,Ys,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(vo.fromBufferAttribute(o,s),Mo.fromBufferAttribute(o,r),t.distanceSqToSegment(vo,Mo,pa,Ru)>n)return;pa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(pa);if(!(l<e.near||l>e.far))return{distance:l,point:Ru.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Cu=new O,Lu=new O;class K_ extends Xl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cu.fromBufferAttribute(t,s),Lu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cu.distanceTo(Lu);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $_ extends Xl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xh extends dn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pu=new ke,Ml=new Po,Jr=new Nn,Qr=new O;class Z_ extends gt{constructor(e=new Xt,t=new Xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;Pu.copy(s).invert(),Ml.copy(e.ray).applyMatrix4(Pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=u.getX(g);Qr.fromBufferAttribute(h,m),Iu(Qr,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Qr.fromBufferAttribute(h,g),Iu(Qr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Iu(i,e,t,n,s,r,o){const a=Ml.distanceSqToPoint(i);if(a<t){const l=new O;Ml.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Yh extends Rt{constructor(e,t,n,s,r,o,a,l,u){super(e,t,n,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yl extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],u=new O,c=new ze;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=n+h/t*s;u.x=e*Math.cos(p),u.y=e*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[f]/e+1)/2,c.y=(o[f+1]/e+1)/2,l.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vt extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(p,2));function v(){const x=new O,b=new O;let T=0;const L=(t-e)/n;for(let C=0;C<=r;C++){const S=[],M=C/r,w=M*(t-e)+e;for(let k=0;k<=s;k++){const B=k/s,z=B*l+a,V=Math.sin(z),U=Math.cos(z);b.x=w*V,b.y=-M*n+m,b.z=w*U,h.push(b.x,b.y,b.z),x.set(V,L,U).normalize(),f.push(x.x,x.y,x.z),p.push(B,1-M),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const M=_[S][C],w=_[S+1][C],k=_[S+1][C+1],B=_[S][C+1];(e>0||S!==0)&&(c.push(M,w,B),T+=3),(t>0||S!==r-1)&&(c.push(w,k,B),T+=3)}u.addGroup(d,T,0),d+=T}function y(x){const b=g,T=new ze,L=new O;let C=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const w=g;for(let k=0;k<=s;k++){const z=k/s*l+a,V=Math.cos(z),U=Math.sin(z);L.x=S*U,L.y=m*M,L.z=S*V,h.push(L.x,L.y,L.z),f.push(0,M,0),T.x=V*.5+.5,T.y=U*.5*M+.5,p.push(T.x,T.y),g++}for(let k=0;k<s;k++){const B=b+k,z=w+k;x===!0?c.push(z,z+1,B):c.push(z+1,z,B),C+=3}u.addGroup(d,C,x===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yr extends Vt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new yr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Do extends Xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),u(n),c(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new O,x=new O,b=new O;for(let T=0;T<t.length;T+=3)p(t[T+0],y),p(t[T+1],x),p(t[T+2],b),l(y,x,b,v)}function l(v,y,x,b){const T=b+1,L=[];for(let C=0;C<=T;C++){L[C]=[];const S=v.clone().lerp(x,C/T),M=y.clone().lerp(x,C/T),w=T-C;for(let k=0;k<=w;k++)k===0&&C===T?L[C][k]=S:L[C][k]=S.clone().lerp(M,k/w)}for(let C=0;C<T;C++)for(let S=0;S<2*(T-C)-1;S++){const M=Math.floor(S/2);S%2===0?(f(L[C][M+1]),f(L[C+1][M]),f(L[C][M])):(f(L[C][M+1]),f(L[C+1][M+1]),f(L[C+1][M]))}}function u(v){const y=new O;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function c(){const v=new O;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,b=d(v)/Math.PI+.5;o.push(x,1-b)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],b=o[v+4],T=Math.max(y,x,b),L=Math.min(y,x,b);T>.9&&L<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new O,y=new O,x=new O,b=new O,T=new ze,L=new ze,C=new ze;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),L.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),b.copy(v).add(y).add(x).divideScalar(3);const w=m(b);_(T,M+0,v,w),_(L,M+2,y,w),_(C,M+4,x,w)}}function _(v,y,x,b){b<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.vertices,e.indices,e.radius,e.details)}}class So extends Do{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new So(e.radius,e.detail)}}class ql extends Do{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ql(e.radius,e.detail)}}class Sr extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],u=[],c=[];let h=e;const f=(t-e)/s,p=new O,g=new ze;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,c.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let d=0;d<n;d++){const v=d+m,y=v,x=v+n+1,b=v+n+2,T=v+1;a.push(y,x,T),a.push(x,b,T)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class bo extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new O,f=new O,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const v=[],y=d/n;let x=0;d===0&&o===0?x=.5/t:d===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const T=b/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+x,1-y),v.push(u++)}c.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){const y=c[d][v+1],x=c[d][v],b=c[d+1][v],T=c[d+1][v+1];(d!==0||o>0)&&p.push(y,x,T),(d!==n-1||l<Math.PI)&&p.push(x,b,T)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jl extends dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends jl{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class J_ extends dn{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ei extends dn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function eo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Q_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ex(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Du(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function qh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class br{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tx extends br{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sc:r=e,a=2*t-n;break;case bc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sc:o=e,l=2*n-t;break;case bc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const u=(n-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let b=0;b!==a;++b)r[b]=d*o[c+b]+v*o[u+b]+y*o[l+b]+x*o[h+b];return r}}class nx extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(n-t)/(s-t),h=1-c;for(let f=0;f!==a;++f)r[f]=o[u+f]*h+o[l+f]*c;return r}}class ix extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ix(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case gr:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Q_(s))for(let a=0,l=s.length;a!==l;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=gr;class Ns extends On{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=mr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class jh extends On{}jh.prototype.ValueTypeName="color";class As extends On{}As.prototype.ValueTypeName="number";class sx extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let u=e*a;for(let c=u+a;u!==c;u+=4)Cn.slerpFlat(r,0,o,u-a,o,u,l);return r}}class ws extends On{InterpolantFactoryMethodLinear(e){return new sx(this.times,this.values,this.getValueSize(),e)}}ws.prototype.ValueTypeName="quaternion";ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends On{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=mr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends On{}Rs.prototype.ValueTypeName="vector";class rx{constructor(e="",t=-1,n=[],s=id){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ax(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const c=ex(l);l=Du(l,1,c),u=Du(u,1,c),!s&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new As(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],c=u.name.match(r);if(c&&c.length>1){const h=c[1];let f=s[h];f||(s[h]=f=[]),f.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,_){if(p.length!==0){const m=[],d=[];qh(p,m,d,g),m.length!==0&&_.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let h=0;h<u.length;h++){const f=u[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let v=0;v!==f[g].morphTargets.length;++v){const y=f[g];m.push(y.time),d.push(y.morphTarget===_?1:0)}s.push(new As(".morphTargetInfluence["+_+"]",m,d))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(Rs,p+".position",f,"pos",s),n(ws,p+".quaternion",f,"rot",s),n(Rs,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ox(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return jh;case"quaternion":return ws;case"bool":case"boolean":return Ns;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ax(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ox(i.type);if(i.times===void 0){const t=[],n=[];qh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lx{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const Kl=new lx;class Os{constructor(e){this.manager=e!==void 0?e:Kl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class cx extends Error{constructor(e,t){super(e),this.response=t}}class Kh extends Os{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=pi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:s});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=Xn[e],h=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){v();function v(){h.read().then(({done:y,value:x})=>{if(y)d.close();else{_+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,L=c.length;T<L;T++){const C=c[T];C.onProgress&&C.onProgress(b)}d.enqueue(x),v()}},y=>{d.error(y)})}}});return new Response(m)}else throw new cx(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{pi.add(e,u);const c=Xn[e];delete Xn[e];for(let h=0,f=c.length;h<f;h++){const p=c[h];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=Xn[e];if(c===void 0)throw this.manager.itemError(e),u;delete Xn[e];for(let h=0,f=c.length;h<f;h++){const p=c[h];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ux extends Os{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=pi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=_r("img");function l(){c(),pi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(h){c(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class hx extends Os{constructor(e){super(e)}load(e,t,n,s){const r=new Rt,o=new ux(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Uo extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fx extends Uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ma=new ke,Uu=new O,Nu=new O;class $l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uu),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dx extends $l{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Es*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class px extends Uo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fu=new ke,qs=new O,ga=new O;class mx extends $l{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(qs),ga.copy(n.position),ga.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ga),n.updateMatrixWorld(),s.makeTranslation(-qs.x,-qs.y,-qs.z),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}}class gx extends Uo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _x extends $l{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $h extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new _x}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ar{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class xx extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=pi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return pi.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){s&&s(u),pi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});pi.add(e,l),r.manager.itemStart(e)}}const Zl="\\[\\]\\.:\\/",yx=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",vx="[^"+Zl.replace("\\.","")+"]",Mx=/((?:WC+[\/:])*)/.source.replace("WC",Jl),Sx=/(WCOD+)?/.source.replace("WCOD",vx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Tx=new RegExp("^"+Mx+Sx+bx+Ex+"$"),Ax=["material","materials","bones","map"];class wx{constructor(e,t,n){const s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yx,"")}static parseTrackName(e){const t=Tx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ax.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[s];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=wx;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);const Rx={minX:-18,maxX:18,minY:-4,maxY:516},Cx={x:0,y:4,heading:0},Lx=[{id:"company",name:"회사",y0:-4,y1:122,ground:"#C9CDD2"},{id:"alley",name:"골목",y0:122,y1:250,ground:"#9A8476"},{id:"city",name:"도시",y0:250,y1:382,ground:"#C2C6CB"},{id:"hospital",name:"병원",y0:382,y1:516,ground:"#8CC56E"}],Px=[{id:"company-mid",x:0,y:62,radius:3},{id:"alley",x:0,y:124,radius:3},{id:"alley-mid",x:0,y:188,radius:3},{id:"city",x:0,y:252,radius:3},{id:"city-mid",x:0,y:318,radius:3},{id:"hospital-front",x:0,y:384,radius:3},{id:"hospital-mid",x:0,y:440,radius:3}],Ix={x:0,y:496,radius:3},Dx=[],Ux=[{id:"hq",model:"kenney/city-kit-commercial/building-e",x:0,y:0,rotY:0,scale:2.4},{id:"hospital",model:"hospital",x:0,y:502,rotY:0,scale:2}],Zh={bounds:Rx,spawn:Cx,zones:Lx,checkpoints:Px,hospital:Ix,obstacles:Dx,decor:Ux};function Ou(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Xt;let u=0;for(let c=0;c<i.length;++c){const h=i[c];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(t){let c=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+c);c+=i[f].attributes.position.count}l.setIndex(h)}for(const c in r){const h=Bu(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<h;++f){const p=[];for(let _=0;_<o[c].length;++_)p.push(o[c][_][f]);const g=Bu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Bu(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){const c=i[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}const o=new e(r),a=new Wt(o,t,n);let l=0;for(let u=0;u<i.length;++u){const c=i[u];if(c.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=c.count;f<p;f++)for(let g=0;g<t;g++){const _=c.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(c.array,l);l+=c.count*t}return s!==void 0&&(a.gpuType=s),a}function ku(i,e){if(e===sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===_l||e===Eh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===_l)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Nx extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new ey(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=ar.extractUrlBase(e);o=ar.resolveURL(u,this.path)}else o=ar.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){s?s(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Kh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(c){t(c),r.manager.itemEnd(e)},a)}catch(c){a(c)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Jh){try{o[qe.KHR_BINARY_GLTF]=new ty(e)}catch(h){s&&s(h);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new py(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const h=r.extensionsUsed[c],f=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new Bx;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new ny(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new iy;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new sy;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Fx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ox{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const c=new Re(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],$t);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new $h(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new gx(c),u.distance=h;break;case"spot":u=new px(c),u.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,qn(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(u),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Bx{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return bt}extendParams(e,t,n){const s=[];e.color=new Re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(s)}}class kx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class zx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(a,a)}return Promise.all(r)}}class Hx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Gx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Vx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Nt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Wx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Xx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],$t),Promise.all(r)}}class Yx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class qx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Nt)),Promise.all(r)}}class jx{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Kx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class $x{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Zx{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Jx{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Qx{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,u=s.byteLength||0,c=s.count,h=s.byteStride,f=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(c*h);return o.decodeGltfBuffer(new Uint8Array(p),c,h,f,s.mode,s.filter),p})})}else return null}}class ey{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==ln.TRIANGLES&&u.mode!==ln.TRIANGLE_STRIP&&u.mode!==ln.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(c=>(l[u]=c,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const c=u.pop(),h=c.isGroup?c.children:[c],f=u[0].count,p=[];for(const g of h){const _=new ke,m=new O,d=new Cn,v=new O(1,1,1),y=new go(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(m,d,v));for(const x in l)if(x==="_COLOR_0"){const b=l[x];y.instanceColor=new vl(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);gt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}}const Jh="glTF",js=12,zu={JSON:1313821514,BIN:5130562};class ty{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-js,r=new DataView(e,js);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===zu.JSON){const u=new Uint8Array(e,js+o,a);this.content=n.decode(u)}else if(l===zu.BIN){const u=js+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ny{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const c in o){const h=Sl[c]||c.toLowerCase();a[h]=o[c]}for(const c in e.attributes){const h=Sl[c]||c.toLowerCase();if(o[c]!==void 0){const f=n.accessors[e.attributes[c]],p=_s[f.componentType];u[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(h,f){s.decodeDracoFile(c,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(p)},a,u,$t,f)})})}}class iy{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class sy{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Qh extends br{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,c=s-t,h=(n-t)/c,f=h*h,p=f*h,g=e*u,_=g-u,m=-2*p+3*f,d=p-f,v=1-m,y=d-f+h;for(let x=0;x!==a;x++){const b=o[_+x+a],T=o[_+x+l]*c,L=o[g+x+a],C=o[g+x]*c;r[x]=v*b+y*T+m*L+d*C}return r}}const ry=new Cn;class oy extends Qh{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return ry.fromArray(r).normalize().toArray(r),r}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},_s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hu={9728:wt,9729:Qt,9984:ph,9985:lo,9986:Qs,9987:jn},Gu={33071:di,33648:xo,10497:Xi},_a={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ay={CUBICSPLINE:void 0,LINEAR:gr,STEP:mr},xa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ly(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new jl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),i.DefaultMaterial}function Ri(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cy(i,e,t){let n=!1,s=!1,r=!1;for(let u=0,c=e.length;u<c;u++){const h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let u=0,c=e.length;u<c;u++){const h=e[u];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const c=u[0],h=u[1],f=u[2];return n&&(i.morphAttributes.position=c),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function uy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hy(i){let e;const t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ya(t.attributes):e=i.indices+":"+ya(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ya(i.targets[n]);return e}function ya(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function bl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dy=new ke;class py{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new hx(this.options.manager):this.textureLoader=new xx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ri(r,a,s),qn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,c]of o.children.entries())r(c,a.children[u])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ar.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=_a[s.type],a=_s[s.componentType],l=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new Wt(u,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=_a[s.type],u=_s[s.componentType],c=u.BYTES_PER_ELEMENT,h=c*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==h){const d=Math.floor(f/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let y=t.cache.get(v);y||(_=new u(a,d*p,s.count*p/c),y=new W_(_,p/c),t.cache.add(v,y)),m=new Gl(y,l,f%p/c,g)}else a===null?_=new u(s.count*l):_=new u(a,f,s.count*l),m=new Wt(_,l,g);if(s.sparse!==void 0){const d=_a.SCALAR,v=_s[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,b=new v(o[1],y,s.sparse.count*d),T=new u(o[2],x,s.sparse.count*l);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,C=b.length;L<C;L++){const S=b[L];if(m.setX(S,T[L*l]),l>=2&&m.setY(S,T[L*l+1]),l>=3&&m.setZ(S,T[L*l+2]),l>=4&&m.setW(S,T[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=o.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return c.magFilter=Hu[f.magFilter]||Qt,c.minFilter=Hu[f.minFilter]||jn,c.wrapS=Gu[f.wrapS]||Xi,c.wrapT=Gu[f.wrapT]||Xi,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==wt&&c.minFilter!==Qt,s.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){u=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Rt(_);m.needsUpdate=!0,f(m)}),t.load(ar.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return u===!0&&a.revokeObjectURL(l),qn(h,o),h.userData.mimeType=o.mimeType||fy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=c,c}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xh,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wh,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return jl}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),u.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],$t),a.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",h.baseColorTexture,Nt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=fn);const c=r.alphaMode||xa.OPAQUE;if(c===xa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===xa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==bt&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==bt&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==bt){const h=r.emissiveFactor;a.emissive=new Re().setRGB(h[0],h[1],h[2],$t)}return r.emissiveTexture!==void 0&&o!==bt&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(u).then(function(){const h=new o(a);return r.name&&(h.name=r.name),qn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ri(s,h,r),h})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Vu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],c=hy(u),h=s[c];if(h)o.push(h.promise);else{let f;u.extensions&&u.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=Vu(new Xt,u,t),s[c]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const c=o[l].material===void 0?ly(this.cache):this.getDependency("material",o[l].material);a.push(c)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],h=[];for(let p=0,g=c.length;p<g;p++){const _=c[p],m=o[p];let d;const v=u[p];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Y_(_,v):new Ye(_,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===ln.TRIANGLE_STRIP?d.geometry=ku(d.geometry,Eh):m.mode===ln.TRIANGLE_FAN&&(d.geometry=ku(d.geometry,_l));else if(m.mode===ln.LINES)d=new K_(_,v);else if(m.mode===ln.LINE_STRIP)d=new Xl(_,v);else if(m.mode===ln.LINE_LOOP)d=new $_(_,v);else if(m.mode===ln.POINTS)d=new Z_(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&uy(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),qn(d,r),m.extensions&&Ri(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Ri(s,h[0],r),h[0];const f=new tt;r.extensions&&Ri(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(Ah.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new xr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let u=0,c=o.length;u<c;u++){const h=o[u];if(h){a.push(h);const f=new ke;r!==null&&f.fromArray(r.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Wl(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],u=[],c=[];for(let h=0,f=s.channels.length;h<f;h++){const p=s.channels[h],g=s.samplers[p.sampler],_=p.target,m=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",v)),u.push(g),c.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(c)]).then(function(h){const f=h[0],p=h[1],g=h[2],_=h[3],m=h[4],d=[];for(let v=0,y=f.length;v<y;v++){const x=f[v],b=p[v],T=g[v],L=_[v],C=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,b,T,L,C);if(S)for(let M=0;M<S.length;M++)d.push(S[M])}return new rx(r,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=s.weights.length;l<u;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let u=0,c=a.length;u<c;u++)o.push(n.getDependency("node",a[u]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const c=u[0],h=u[1],f=u[2];f!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(f,dy)});for(let p=0,g=h.length;p<g;p++)c.add(h[p]);return c})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let c;if(r.isBone===!0?c=new Vh:u.length>1?c=new tt:u.length===1?c=u[0]:c=new gt,c!==u[0])for(let h=0,f=u.length;h<f;h++)c.add(u[h]);if(r.name&&(c.userData.name=r.name,c.name=o),qn(c,r),r.extensions&&Ri(n,c,r),r.matrix!==void 0){const h=new ke;h.fromArray(r.matrix),c.applyMatrix4(h)}else r.translation!==void 0&&c.position.fromArray(r.translation),r.rotation!==void 0&&c.quaternion.fromArray(r.rotation),r.scale!==void 0&&c.scale.fromArray(r.scale);return s.associations.has(c)||s.associations.set(c,{}),s.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new tt;n.name&&(r.name=s.createUniqueName(n.name)),qn(r,n),n.extensions&&Ri(t,r,n);const o=n.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let c=0,h=l.length;c<h;c++)r.add(l[c]);const u=c=>{const h=new Map;for(const[f,p]of s.associations)(f instanceof dn||f instanceof Rt)&&h.set(f,p);return c.traverse(f=>{const p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=u(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ci[r.path]===ci.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let u;switch(ci[r.path]){case ci.weights:u=As;break;case ci.rotation:u=ws;break;case ci.position:case ci.scale:u=Rs;break;default:switch(n.itemSize){case 1:u=As;break;case 2:case 3:default:u=Rs;break}break}const c=s.interpolation!==void 0?ay[s.interpolation]:gr,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const g=new u(l[f]+"."+ci[r.path],t.array,h,c);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=bl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ws?oy:Qh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function my(i,e,t){const n=e.attributes,s=new mn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(u[0],u[1],u[2])),a.normalized){const c=bl(_s[a.componentType]);s.min.multiplyScalar(c),s.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,l=new O;for(let u=0,c=r.length;u<c;u++){const h=r[u];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const _=bl(_s[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Nn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Vu(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Sl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ke.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),qn(i,e),my(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?cy(i,e.targets,t):i})}const Ql=["#242637","#373B51","#565A73","#8994A7","#C3CAD2","#F3E5CC","#FFFFFF","#F6BD86","#DF927A","#A75C60","#6A3948","#8B5C48","#C98B5A","#E5C06C","#F3E07B","#BBCA82","#6AAB82","#3F876E","#2C605D","#3D6A97","#609AC1","#91C7DA","#CDDCE1","#684C89","#986BB0","#BA91C4","#DAA3B8","#B74C5A","#E46E58","#F3A54A","#F7D45B","#F7F0B5"],ec=["#131A25","#FAF0DB","#F06E5B","#66D2BB"],ef=i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16));Ql.map(ef);ec.map(ef);const nr=1,Dt=2.5,gy=1.5,No={180:[180,320],216:[216,384],270:[270,480],360:[360,640],450:[450,800],540:[540,960],720:[720,1280]},tc=[45,55,65],_y=45,xy="color",yy="360",Fo=[26,20,15],vy=20,My=.58,ui=.35,to=1.6,Sy=.4,Ci=.35,va={chair:4.5,alcohol:2.2,building:1.5},Ma={chair:2.4,alcohol:1.8,building:.6},El={time:1,drag:3,minImpact:6.5},It={detect:5.5,speed:3,patrolSpeed:1.3,chaseTime:4,cooldown:3,disrupt:3,power:2.9,spin:2.3,jolt:4.5,joltEvery:.3,lead:.7,lungeRange:2.6,lunge:7,lungeTime:.35,lungeRest:1.6},Ut={range:8,period:2.6,charge:.75,shotSpeed:7.5,shotLife:2.5,shotRadius:.24,shots:3,spread:.32},In={time:3,first:.45,gap:[.6,1],warn:.2,spin:2.6,kick:3.5,sway:1.1},An={building:.15,chair:.18,alcohol:.1,spicy:.2,overheat:.15,bed:.5,ache:.7,weak:.7,tremble:3,agony:1.2,after:.3},ir={radius:1.6,cushion:10,ointment:.5,boost:{time:3,thrust:1.8}},Li={near:.7,minSpeed:3,near_points:100,dodge_points:150,pickup_points:50,checkpoint_points:300},by=1.6,Ey=1.5;function cn(i,e,t){return[i,t,-e]}function Ty(i){return-i}function Ay(i,e){const t=i*Math.PI/180;return[0,Math.sin(t)*e,Math.cos(t)*e]}function wy(i,e,t){const n=i*Math.PI/180;return(t-.5)*e/Math.sin(n)}function Ry(i,e,t,n){const s=(u,c,h)=>u<<16|c<<8|h,r=u=>parseInt(u.slice(1),16),o=new Set(t.map(r)),a=new Set(n.map(r));let l=0;for(let u=0,c=0;c<i.length;c+=4,u++){const h=e[u]?a:o;(i[c+3]!==255||!h.has(s(i[c],i[c+1],i[c+2])))&&l++}return l}function Er(i){return["PLAYING","RESPAWN","PAUSED"].includes(i.state)?i.stunnedLeft>0?"stunned":i.disruptedLeft>0?"runaway":null:null}function tf(i){return Er(i)??(["PLAYING","RESPAWN","PAUSED"].includes(i.state)&&i.drunkLeft>0?"drunk":null)}function Cy(i,e){const t=tf(i);i.gameTime<e.noticeTime&&(e.status=null),t!==e.status&&(e.status=t,e.statusUntil=i.gameTime+(t==="drunk"?1:.5)),e.noticeTime=i.gameTime}const Wu=[["#E46E58",.17,1],["#F3A54A",.13,.8],["#F7D45B",.09,.58],["#F7F0B5",.05,.32]],Ly="#B74C5A";function Py(i,e){const t=new mn().setFromObject(e),n={heat:{value:0},zHead:{value:t.min.z},zFeet:{value:t.max.z}};for(const s of i)s.onBeforeCompile=r=>{Object.assign(r.uniforms,n),r.vertexShader=`varying float vModelZ;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vModelZ = position.z;`),r.fragmentShader=`uniform float heat;
uniform float zHead;
uniform float zFeet;
varying float vModelZ;
`+r.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  float line = zFeet - heat * (zFeet - zHead);
  if (heat > 0.0 && vModelZ >= line) gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.78, 0.08, 0.05), 0.85);`)},s.customProgramCacheKey=()=>"heat-fill",s.needsUpdate=!0;return n.heat}function Iy(i,e,t){const n=[];t.traverse(z=>{z.isMesh&&!z.userData.outline&&!n.includes(z.material)&&n.push(z.material)});const s=Py(n,t),r={};for(const z of["L","R"]){const V=new tt;V.name=`exhaust_${z}`,Wu.forEach(([U,G,I],P)=>{const F=new Ye(new yr(G,I,5),new bt({color:U,depthWrite:!1}));F.rotation.x=Math.PI/2,F.position.z=I/2,F.renderOrder=10+P,V.add(F)}),e[`nozzle${z}`].add(V),r[z]=V}const o=new tt;o.name="hit_stars";for(let z=0;z<3;z++){const V=new Ye(new ql(.09,0),new bt({color:"#F7D45B"}));V.position.set(Math.cos(z*2.09)*.35,.25,Math.sin(z*2.09)*.35),o.add(V)}o.visible=!1,e.head.add(o);let a=-1,l=-1,u=null,c=0;const h=new Ye(new Sr(.7,.79,12),new bt({color:"#6AAB82",side:fn}));h.name="checkpoint_pulse",h.rotation.x=-Math.PI/2,h.visible=!1,i.add(h);const f=96,p=["#F7D45B","#F3A54A","#E46E58"],g=new Ft(.09,.09,.09),_=Array.from({length:f},(z,V)=>{const U=new Ye(g,new bt({color:p[V%3]}));return U.name="feedback_spark",U.visible=!1,i.add(U),{m:U,v:new O,life:0,gravity:9}});let m=0;const d={L:0,R:0},v=new O,y=new O,x=(z,V=3,U=null,G=.4,I=2,P=9)=>{for(let F=0;F<z;F++){const Y=_[m++%f];Y.m.position.copy(v),Y.v.copy(y).multiplyScalar(V).add(new O((Math.random()-.5)*I,Math.random()*I,(Math.random()-.5)*I)),Y.life=G,Y.gravity=P,Y.m.material.color.set(U??p[F%3]),Y.m.scale.setScalar(1),Y.m.visible=!0}},b=32,T=Array.from({length:b},()=>{const z=new Ye(new So(.12,0),new bt({color:"#FFFFFF",transparent:!0,opacity:.8,depthWrite:!1}));return z.visible=!1,i.add(z),{m:z,v:new O,life:0,max:1}});let L=0,C=0;const S=(z,V,U,G)=>{const I=T[L++%b];I.m.position.copy(z),I.v.copy(U),I.life=I.max=G,I.m.material.color.set(V),I.m.visible=!0},M=new tt;for(let z=0;z<5;z++){const V=new Ye(new So(.07+z%2*.03,1),new bt({color:z%2?"#FFD6E2":"#E9FFF2",transparent:!0,opacity:.9}));M.add(V)}M.visible=!1,e.head.add(M);let w=-1;const k=new O,B=new Ye(new Ft(.62,.12,.42),new ei({color:"#F7A8C4"}));return B.position.set(0,-.12,.5),B.visible=!1,t.add(B),function(V,U,G){const I=V!==u||V.gameTime<c||G.some(X=>X.type==="respawn"),P=I?0:Math.max(0,Math.min(.1,V.gameTime-c));if(I){a=l=-1;for(const X of _)X.m.visible=!1;for(const X of T)X.m.visible=!1;d.L=d.R=0,C=0,w=-1}u=V,c=V.gameTime;for(const X of G){if(X.type==="hit"&&(X.kind!=="spicy"&&(a=V.gameTime+.1),v.set(X.x-X.nx*.3,Dt,-X.y+X.ny*.3),y.set(X.nx,.2,-X.ny).normalize(),X.kind==="spicy"?(y.set(0,.6,0),x(26,3.2,null,.45,6,3)):X.kind==="alcohol"?(x(14,3,"#7FE0A6",.5,4,10),x(8,2,"#E9FFF2",.4,3.5,10)):x(10,2.5,{building:"#F3A54A",chair:"#F7D45B"}[X.kind],.32,3)),(X.type==="block"||X.type==="agony")&&(v.set(X.x,Dt,-X.y),y.set(0,.5,0),x(X.type==="block"?18:24,2.6,X.type==="block"?"#F7A8C4":"#FF5A3C",.45,5,4)),X.type==="hiccup"){w=V.gameTime,e.head.getWorldPosition(k);for(let ne=0;ne<6;ne++)S(k,ne%2?"#FFD6E2":"#E9FFF2",new O((Math.random()-.5)*2.4,1+Math.random(),(Math.random()-.5)*2.4),.45)}X.type==="checkpoint"&&(l=V.gameTime,h.position.set(X.x,Dt,-X.y),v.copy(h.position),y.set(0,1,0),x(14,1.4,"#6AAB82",.55,2.5,4))}o.visible=Er(V)==="stunned",o.rotation.y=V.gameTime*6;const F=V.gameTime-l;h.visible=l>=0&&F<.55,h.scale.setScalar(.6+F*2.4);const Y=V.disruptedLeft>0;s.value=V.state==="PLAYING"||V.state==="RESPAWN"?Math.min(1,Math.max(U.L.overTime,U.R.overTime)/U.L.fullHoldTime):0;const he=Y&&Math.floor(V.gameTime*16)%2===0,fe=V.gameTime<a?1.5:1,H=V.drunkLeft>0;for(const X of n)X.color.setRGB(fe,he?.3:(H?.68:1)*fe,he?.3:(H?.74:1)*fe);for(const X of["L","R"]){const{effective:ne,overTime:oe}=U[X],A=oe>0?1.6+.15*Math.sin(V.gameTime*40+(X==="L"?0:1.7)):1,K=X==="L"?0:2.1,J=1+.07*Math.sin(Math.floor(V.gameTime*6)*1.7+K),le=Y?1.8+.6*Math.sin(V.gameTime*55+K):J;r[X].visible=ne>.02;const be=(.6+.4*ne)*(Y?1.4:1)*(2-J),N=V.boostLeft>0?1.9+.2*Math.sin(V.gameTime*45+K):1;r[X].scale.set(be*(V.boostLeft>0?1.3:1),be,Math.max(ne,.01)*1.1*A*le*N),r[X].children[0].material.color.set(Y?Ly:Wu[0][0]),d[X]+=P*(Y&&ne>.3?36:ne>.7?8:0);const Ue=Math.floor(d[X]);if(d[X]-=Ue,Ue){const de=e[`nozzle${X}`];de.getWorldPosition(v),y.set(0,0,1).transformDirection(de.matrixWorld),x(Ue,Y?4:2.5,null,Y?.4:.22,Y?3:.7)}}B.visible=V.shieldLeft>0&&(V.shieldLeft>2||Math.floor(V.gameTime*8)%2===0);const ee=(V.state==="PLAYING"||V.state==="RESPAWN")&&(Y||s.value>.4);if(C+=ee?P*(Y?16:8*s.value):0,C>=1)for(e.head.getWorldPosition(k);C>=1;C--)S(k,Y?"#FFD9C7":"#F4F4F4",new O((Math.random()-.5)*.8,1.8+Math.random(),(Math.random()-.5)*.8),.7);for(const X of T){if(!X.m.visible)continue;X.life-=P,X.m.position.addScaledVector(X.v,P);const ne=1-X.life/X.max;X.m.scale.setScalar(.6+ne*1.6),X.m.material.opacity=Math.max(0,.8*(1-ne)),X.m.visible=X.life>0}M.visible=V.drunkLeft>0&&V.gameTime-w>.35,M.visible&&M.children.forEach((X,ne)=>{const oe=V.gameTime*2.6+ne*1.26;X.position.set(Math.cos(oe)*.32,.32+Math.sin(V.gameTime*4+ne)*.08,Math.sin(oe)*.32)});for(const X of _)X.m.visible&&(X.life-=P,X.v.y-=X.gravity*P,X.m.position.addScaledVector(X.v,P),X.m.visible=X.life>0,X.m.scale.setScalar(Math.min(1,Math.max(0,X.life*8))))}}const Dy=["upper_sleeve","elbow_sleeve","rolled_cuff","forearm","hand"],Uy=["thigh","knee","calf","shoe"],Ny=["face","006_hair_cap","007_hair_fringe__1","011_hair_fringe_1","head"],Fy=["010_eye__1","014_eye_1"],Oy=1.3,By=1.3,Xu=new Cn,ky=new pn,zy=new O(0,.1,.3);function no(i,e,t){const n=new tt;n.position.copy(t),i.add(n);for(const s of e){const r=i.getObjectByName(s);r&&n.attach(r)}return n}const io=(i,e,t,n=180,s=22)=>(i.vel+=((e-i.x)*n-i.vel*s)*t,i.x+=i.vel*t,i.x);function Hy(i,e){const t=new mn,n={},s={},r={};for(const[g,_]of[["L",-1],["R",1]]){const m=i.getObjectByName(`seat_${g}`),d=m?t.setFromObject(m).getCenter(new O):new O(_*.12,.08,.46),v=e[`nozzle${g}`];n[g]={group:no(i,[`seat_${g}`],d),centre:d,nozzle:v,rest:v.position.clone(),size:1},s[g]=no(i,Dy.map(y=>`${y}_${g}`),new O(_*.2,0,-.34)),s[g].userData.rest=s[g].position.clone(),r[g]={group:no(i,Uy.map(y=>`${y}_${g}`),new O(_*.18,0,.4)),kick:{x:0,vel:0},p:0}}const o={group:no(i,Ny,new O(0,.02,-.4)),tilt:{x:0,vel:0},nod:{x:0,vel:0}};o.group.scale.setScalar(By);const a=Fy.map(g=>i.getObjectByName(g)).filter(Boolean),l={x:0,vel:0};let u=0,c=null,h=2,f=0,p=0;return function(_,m,d=[]){_!==c&&(u=_.gameTime,c=_);const v=Math.min(.05,Math.max(0,_.gameTime-u)),y=_.gameTime;u=y;const x=_.state==="PLAYING"||_.state==="RESPAWN",b=x&&_.agonyLeft>0,T=x&&(_.disruptedLeft>0||b),L=x&&_.stunnedLeft>0&&!b;for(const U of["L","R"]){const G=n[U],I=x?m[U].p:0,P=1+Oy*I**1.4+(I>.5?.04*Math.sin(y*30+(U==="L"?0:1.3)):0);G.size+=(P-G.size)*(1-Math.exp(-14*v)),G.group.scale.set(G.size,G.size*1.1,1+(G.size-1)*.8),G.nozzle.position.copy(G.rest).sub(G.centre).multiply(G.group.scale).add(G.centre)}let C=0;for(const U of["L","R"]){const G=x?m[U].p:0,I=v>0?Math.max(0,G-r[U].p)/v:0;r[U].p=G,C=Math.max(C,Math.min(1,I/3)),I>1&&(r[U].kick.vel-=I*1.2)}for(const U of d)U.type==="hit"&&(l.vel-=9);for(const U of d)U.type==="hiccup"&&(l.vel+=12);const S=x&&_.drunkLeft>0&&_.hiccupAt-y<In.warn&&_.hiccupAt>y;C>0&&(l.vel+=C*6);const M=io(l,0,v,260,16),w=S?Math.sin(y*90)*.06:_.agonyLeft>0?Math.sin(y*70)*.08:0;i.rotation.z=x&&_.agonyLeft>0?Math.sin(y*16)*.35:0,i.scale.set(1-M*.12+w,1-M*.12-w,1+M*.22);const k=x?(m.L.effective+m.R.effective)/2:0;f+=v*(4+k*10);for(const[U,G,I]of[["L",-1,0],["R",1,Math.PI]]){const P=r[U].group,F=io(r[U].kick,0,v,120,14);T?P.rotation.set(Math.sin(y*21+I)*.6,G*Math.sin(y*15+I)*.5,G*Math.sin(y*27+I)*.4):L?P.rotation.set(-.35,0,G*-.25):P.rotation.set(Math.sin(f+I)*.22+F*.5,G*(Math.sin(f+I)*.12-F*.2),0)}p+=((T?1:0)-p)*(1-Math.exp(-(T?18:10)*v));for(const[U,G,I]of[["L",-1,0],["R",1,2.2]]){const P=s[U];if(L?P.rotation.set(.3,0,G*-.35):P.rotation.set(Math.sin(f*.5+I)*.08,0,G*Math.sin(f*.5+I)*.06),p>.01){const F=Math.sin(y*31+I)*(b?.25:.12);Xu.setFromEuler(ky.set(-.8+F,-G*3.05,G*F,"XYZ")),P.quaternion.slerp(Xu,p),P.position.copy(P.userData.rest).addScaledVector(zy,p)}else P.position.copy(P.userData.rest)}const B=io(o.tilt,x?Math.max(-.35,Math.min(.35,-_.omega*.12)):0,v),z=io(o.nod,C*.25,v,200,18);T?o.group.rotation.set(Math.sin(y*19)*.15,Math.sin(y*13)*.3,Math.sin(y*23)*.2):L?o.group.rotation.set(.25,Math.sin(y*3)*.3,Math.sin(y*2.5)*.2):o.group.rotation.set(z,0,B),y>h+.12&&(h=y+2+Math.random()*3);const V=L||y>h&&y<h+.12;for(const U of a)U.scale.y=V?.15:1}}const lr="#1B2333";let Pi=null;const Sa=new WeakMap;function Gy(){return Pi||(Pi=new Vl(new Uint8Array([140,140,140,255,205,205,205,255,255,255,255,255]),3,1,rn),Pi.minFilter=Pi.magFilter=wt,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}function Tl(i,{width:e=.035,minPart:t=.09}={}){const n=new Map,s={[Ot]:new bt({color:lr,side:Ot}),[sn]:new bt({color:lr,side:sn})},r=[];i.traverse(u=>{u.isMesh&&!u.userData.outline&&r.push(u)});const o=new mn,a=new O,l=new O;for(const u of r){u.geometry.attributes.normal||(u.geometry=Wy(u.geometry));const c=u.material;if(n.has(c)||n.set(c,new J_({color:c.color?c.color.clone():new Re("#FFFFFF"),map:c.map??null,vertexColors:!!u.geometry.attributes.color,gradientMap:Gy(),emissive:c.emissive?c.emissive.clone():new Re(0),side:c.side??sn})),u.material=n.get(c),u.geometry.computeBoundingBox(),o.copy(u.geometry.boundingBox).getSize(a),Math.max(a.x,a.y,a.z)<t)continue;o.getCenter(l);const h=new Ye(u.geometry,s[Vy(u.geometry)<0?sn:Ot]);h.userData.outline=!0,h.castShadow=h.receiveShadow=!1,h.scale.set(1+2*e/Math.max(a.x,.02),1+2*e/Math.max(a.y,.02),1+2*e/Math.max(a.z,.02)),h.position.copy(l).multiply(new O(1,1,1).sub(h.scale)),u.add(h)}return n.rims=Object.values(s),n}function Vy(i){const e=i.attributes.position,t=i.index,n=t?t.count:e.count,s=new O,r=new O,o=new O;let a=0;for(let l=0;l+2<n;l+=3)s.fromBufferAttribute(e,t?t.getX(l):l),r.fromBufferAttribute(e,t?t.getX(l+1):l+1),o.fromBufferAttribute(e,t?t.getX(l+2):l+2),a+=s.dot(r.cross(o));return a}function Wy(i){if(!Sa.has(i)){const e=i.index?i.toNonIndexed():i.clone();e.computeVertexNormals(),Sa.set(i,e)}return Sa.get(i)}function Xy(){const i={pitch:0,roll:0,lift:0},e={pitch:0,roll:0,lift:0};let t=null,n=0,s=-1,r=0,o=0;return(a,l,u=[])=>{const c=a!==t||a.gameTime<n||u.some(S=>S.type==="respawn"),h=c?0:Math.min(.1,Math.max(0,a.gameTime-n));if(t=a,n=a.gameTime,c||a.state==="TITLE"||a.state==="READY")return i.pitch=i.roll=i.lift=0,e.pitch=e.roll=e.lift=0,s=-1,i;if(a.state!=="PLAYING"&&a.state!=="RESPAWN")return i;const f=(S,M,w)=>Math.max(M,Math.min(w,S)),p=f(l.L.effective,0,1),g=f(l.R.effective,0,1),_=(p+g)/2,m=Math.min(1,Math.hypot(a.vx,a.vy)/10),d=m*(1-_),v=a.gameTime;let y=f(-(p-g)*.28-a.omega*.035+Math.sin(v*2.4)*.025*d,-.32,.32),x=-Math.min(p,g)*.14+Math.sin(v*2)*.015*d,b=Math.sin(v*2.8)*.035*m;const T=Er(a);T==="stunned"?(x=.14,y=Math.sin(v*3)*.025,b=-.06):T==="runaway"&&(x=-.08+Math.sin(v*17)*.1,y=Math.sin(v*13)*.24+Math.sin(v*27)*.1,b=Math.sin(v*19)*.045);for(const S of u)S.type==="hit"&&S.kind!=="spicy"&&(s=v,r=-(S.nx*Math.cos(a.theta)-S.ny*Math.sin(a.theta))*.22,o=-(S.nx*Math.sin(a.theta)+S.ny*Math.cos(a.theta))*.18);const L=1-Math.exp(-(T==="runaway"?18:8)*h);e.pitch+=(x-e.pitch)*L,e.roll+=(y-e.roll)*L,e.lift+=(b-e.lift)*L;const C=s<0?0:Math.exp(-(v-s)*15);return i.pitch=f(e.pitch+o*C,-.3,.35),i.roll=f(e.roll+r*C,-.42,.42),i.lift=e.lift,i}}function Yu(i,e,t){const n=i.getObjectByName(e);if(!n)return null;const s=new tt;return s.position.set(t,.74,-.44),n.parent.add(s),s.attach(n),s}function Yy(i,e){i.rotation.order="YXZ";const t=i.children[0],n=[Yu(i,"004_eyebrow_-1",-.075),Yu(i,"006_eyebrow_1",.075)];let s=null,r=0,o=0;return(a,l,u)=>{const c=a.mode==="chase",h=c?l:a.goal??a.home,f=h.x-a.x,p=h.y-a.y,g=Math.hypot(f,p)>.001,_=!c&&!g,m=a!==s||u<r||_,d=m?0:Math.min(.1,Math.max(0,u-r));s=a,r=u;const v=g?Math.atan2(-f,p):_?0:i.rotation.y,y=Math.atan2(Math.sin(v-i.rotation.y),Math.cos(v-i.rotation.y));i.rotation.y=m?v:i.rotation.y+y*(1-Math.exp(-12*d));const x=u*(c?14:7);i.rotation.x=g?c?-.15:-.05:0,i.rotation.z=g?Math.sin(x)*(c?.1:.035):Math.sin(u*2)*.012;const b=g?Math.abs(Math.sin(x)):0;i.position.y=e+(g?b*(c?.16:.05):Math.sin(u*2)*.025);const T=c?(1-b)**3*.22-b*.1:0;t?.scale.set(1+T*.5,1-T,1+T*.5),o+=((c?1:0)-o)*(m?1:1-Math.exp(-10*d)),n[0]&&(n[0].rotation.z=-.45*o),n[1]&&(n[1].rotation.z=.45*o)}}const Eo={"kenney/car-kit/ambulance":{cx:0,cz:-.025,hx:.75,hz:1.625,top:1.8,bottom:0},"kenney/car-kit/delivery":{cx:0,cz:-.025,hx:.75,hz:1.625,top:1.65,bottom:0},"kenney/car-kit/firetruck":{cx:0,cz:0,hx:.75,hz:1.7,top:1.7,bottom:0},"kenney/car-kit/garbage-truck":{cx:0,cz:.025,hx:.8,hz:1.725,top:1.6,bottom:0},"kenney/car-kit/hatchback-sports":{cx:0,cz:-.025,hx:.65,hz:1.425,top:1.1,bottom:0},"kenney/car-kit/police":{cx:0,cz:0,hx:.75,hz:1.55,top:1.3,bottom:0},"kenney/car-kit/sedan":{cx:0,cz:-.025,hx:.75,hz:1.275,top:1.3,bottom:0},"kenney/car-kit/suv":{cx:0,cz:0,hx:.75,hz:1.35,top:1.3,bottom:0},"kenney/car-kit/taxi":{cx:0,cz:-.025,hx:.75,hz:1.375,top:1.5,bottom:0},"kenney/car-kit/truck":{cx:0,cz:-.025,hx:.75,hz:1.475,top:1.3,bottom:0},"kenney/car-kit/van":{cx:0,cz:-.025,hx:.75,hz:1.375,top:1.35,bottom:0},"kenney/city-kit-commercial/building-a":{cx:0,cz:0,hx:.442,hz:.47,top:1.293,bottom:0},"kenney/city-kit-commercial/building-b":{cx:0,cz:0,hx:.485,hz:.47,top:1.293,bottom:0},"kenney/city-kit-commercial/building-c":{cx:0,cz:0,hx:.442,hz:.545,top:.893,bottom:0},"kenney/city-kit-commercial/building-d":{cx:0,cz:0,hx:.42,hz:.45,top:1.293,bottom:0},"kenney/city-kit-commercial/building-e":{cx:0,cz:0,hx:.82,hz:.504,top:.893,bottom:0},"kenney/city-kit-commercial/building-f":{cx:0,cz:0,hx:.42,hz:.515,top:1.693,bottom:0},"kenney/city-kit-commercial/building-g":{cx:0,cz:0,hx:.485,hz:.461,top:1.693,bottom:0},"kenney/city-kit-commercial/building-h":{cx:0,cz:0,hx:.442,hz:.504,top:1.293,bottom:0},"kenney/city-kit-commercial/building-i":{cx:0,cz:0,hx:.62,hz:.651,top:1.68,bottom:0},"kenney/city-kit-commercial/building-j":{cx:0,cz:0,hx:1.042,hz:.67,top:1.693,bottom:0},"kenney/city-kit-commercial/building-k":{cx:0,cz:0,hx:1.042,hz:.471,top:1.47,bottom:0},"kenney/city-kit-commercial/building-l":{cx:0,cz:0,hx:.685,hz:.701,top:2.27,bottom:0},"kenney/city-kit-commercial/building-m":{cx:0,cz:0,hx:.62,hz:.621,top:3.15,bottom:0},"kenney/city-kit-commercial/building-n":{cx:0,cz:0,hx:1.16,hz:.91,top:2.48,bottom:0},"kenney/city-kit-commercial/building-skyscraper-a":{cx:0,cz:0,hx:.68,hz:.68,top:2.88,bottom:0},"kenney/city-kit-commercial/building-skyscraper-b":{cx:0,cz:0,hx:.68,hz:.68,top:4.48,bottom:0},"kenney/city-kit-commercial/building-skyscraper-c":{cx:0,cz:0,hx:.64,hz:.694,top:4.08,bottom:0},"kenney/city-kit-commercial/building-skyscraper-d":{cx:0,cz:0,hx:.64,hz:.694,top:5.47,bottom:0},"kenney/city-kit-commercial/building-skyscraper-e":{cx:0,cz:0,hx:.647,hz:.621,top:4.08,bottom:0},"kenney/city-kit-commercial/detail-awning-wide":{cx:0,cz:.174,hx:.4,hz:.074,top:.4,bottom:0},"kenney/city-kit-commercial/detail-awning":{cx:0,cz:.174,hx:.2,hz:.074,top:.4,bottom:0},"kenney/city-kit-roads/construction-barrier":{cx:0,cz:0,hx:.068,hz:.112,top:.13,bottom:0},"kenney/city-kit-roads/construction-cone":{cx:0,cz:0,hx:.038,hz:.038,top:.094,bottom:0},"kenney/city-kit-roads/dumpster":{cx:.008,cz:0,hx:.138,hz:.185,top:.209,bottom:0},"kenney/city-kit-roads/light-curved":{cx:0,cz:-.088,hx:.025,hz:.113,top:.675,bottom:0},"kenney/city-kit-roads/light-square":{cx:0,cz:-.094,hx:.025,hz:.119,top:.6,bottom:0},"kenney/city-kit-roads/road-crossing":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-crossroad":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-end":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-intersection":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-sign-empty":{cx:0,cz:0,hx:.025,hz:.025,top:.475,bottom:0},"kenney/city-kit-roads/road-straight":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-suburban/building-type-a":{cx:0,cz:0,hx:.65,hz:.514,top:.834,bottom:0},"kenney/city-kit-suburban/building-type-b":{cx:0,cz:0,hx:.914,hz:.57,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-c":{cx:0,cz:0,hx:.643,hz:.514,top:1.034,bottom:0},"kenney/city-kit-suburban/building-type-d":{cx:0,cz:0,hx:.878,hz:.514,top:1.238,bottom:0},"kenney/city-kit-suburban/building-type-e":{cx:0,cz:0,hx:.65,hz:.514,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-f":{cx:0,cz:0,hx:.714,hz:.703,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-g":{cx:0,cz:0,hx:.725,hz:.589,top:.768,bottom:0},"kenney/city-kit-suburban/building-type-h":{cx:0,cz:0,hx:.65,hz:.458,top:.737,bottom:0},"kenney/city-kit-suburban/building-type-i":{cx:0,cz:0,hx:.643,hz:.514,top:.737,bottom:0},"kenney/city-kit-suburban/building-type-j":{cx:0,cz:0,hx:.685,hz:.458,top:1.038,bottom:0},"kenney/city-kit-suburban/building-type-k":{cx:0,cz:0,hx:.46,hz:.51,top:1.15,bottom:0},"kenney/city-kit-suburban/building-type-l":{cx:0,cz:0,hx:.517,hz:.51,top:1.049,bottom:0},"kenney/city-kit-suburban/building-type-m":{cx:0,cz:0,hx:.714,hz:.714,top:.737,bottom:0},"kenney/city-kit-suburban/building-type-n":{cx:0,cz:0,hx:.892,hz:.689,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-o":{cx:0,cz:0,hx:.635,hz:.514,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-p":{cx:0,cz:0,hx:.62,hz:.495,top:.918,bottom:0},"kenney/city-kit-suburban/building-type-q":{cx:0,cz:.021,hx:.62,hz:.443,top:.918,bottom:0},"kenney/city-kit-suburban/building-type-r":{cx:0,cz:0,hx:.514,hz:.51,top:1.141,bottom:0},"kenney/city-kit-suburban/building-type-s":{cx:0,cz:0,hx:.703,hz:.543,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-t":{cx:-.007,cz:0,hx:.657,hz:.703,top:1.156,bottom:0},"kenney/city-kit-suburban/building-type-u":{cx:0,cz:0,hx:.714,hz:.543,top:1.138,bottom:0},"kenney/city-kit-suburban/fence-low":{cx:0,cz:-.019,hx:.638,hz:.419,top:.17,bottom:0},"kenney/city-kit-suburban/path-stones-long":{cx:0,cz:0,hx:.07,hz:.2,top:.01,bottom:0},"kenney/city-kit-suburban/planter":{cx:0,cz:-.001,hx:.2,hz:.15,top:.177,bottom:0},"kenney/city-kit-suburban/tree-large":{cx:0,cz:0,hx:.105,hz:.121,top:.767,bottom:0},"kenney/city-kit-suburban/tree-small":{cx:0,cz:0,hx:.105,hz:.121,top:.567,bottom:0}},qy={office_block:[{cx:0,cz:-.185,hx:1.21,hz:1.205,top:3.32}],alley_block:[{cx:-1.55,cz:0,hx:.78,hz:1.4,top:2.35},{cx:1.55,cz:0,hx:.78,hz:1.4,top:3.05}],city_block:[{cx:0,cz:-.27,hx:1.5,hz:1.47,top:1.92}],hospital:[{cx:0,cz:0,hx:1.67,hz:1.17,top:2.37}],...Object.fromEntries(Object.entries(Eo).map(([i,e])=>[i,[e]]))},jy=.25;function cr(i,e=-1/0){const t=[];for(const n of i){const s=Math.round(n.rotY/90);if(Math.abs(n.rotY-s*90)>1e-6)throw new Error(`${n.id}: rotY must be a multiple of 90`);const r=s*Math.PI/2,o=Math.round(Math.cos(r)),a=Math.round(Math.sin(r));(qy[n.model]??[]).forEach((l,u)=>{if(l.top*n.scale<e)return;const c=(l.cx*o+l.cz*a)*n.scale,h=(-l.cx*a+l.cz*o)*n.scale,f=s%2!==0;t.push({id:`${n.id}-part${u}`,type:"Building",decorRef:n.id,x:n.x+c,y:n.y-h,hx:(f?l.hz:l.hx)*n.scale,hy:(f?l.hx:l.hz)*n.scale})})}return t}const nc=i=>cr(i,Dt-jy),ic=i=>[...nc(i.decor??[]),...(i.lumps??[]).map(e=>({...e,type:"Building",decorRef:e.id,lump:!0}))];function Ky(i,e=.02){const t=[];for(const n of i){const s=[{along:"x",fixed:n.y-n.hy,lo:n.x-n.hx,hi:n.x+n.hx,nx:0,ny:-1},{along:"x",fixed:n.y+n.hy,lo:n.x-n.hx,hi:n.x+n.hx,nx:0,ny:1},{along:"y",fixed:n.x-n.hx,lo:n.y-n.hy,hi:n.y+n.hy,nx:-1,ny:0},{along:"y",fixed:n.x+n.hx,lo:n.y-n.hy,hi:n.y+n.hy,nx:1,ny:0}];for(const r of s){let o=[[r.lo,r.hi]];const a=r.along==="x"?null:r.fixed+r.nx*e,l=r.along==="x"?r.fixed+r.ny*e:null;for(const u of i){if(u===n)continue;let c,h;if(r.along==="x"){if(Math.abs(l-u.y)>=u.hy)continue;c=u.x-u.hx,h=u.x+u.hx}else{if(Math.abs(a-u.x)>=u.hx)continue;c=u.y-u.hy,h=u.y+u.hy}o=o.flatMap(([f,p])=>h<=f||c>=p?[[f,p]]:[[f,Math.min(p,c)],[Math.max(f,h),p]].filter(([g,_])=>_-g>e))}for(const[u,c]of o)t.push(r.along==="x"?{x0:u,y0:r.fixed,x1:c,y1:r.fixed,along:"x",nx:r.nx,ny:r.ny}:{x0:r.fixed,y0:u,x1:r.fixed,y1:c,along:"y",nx:r.nx,ny:r.ny})}}return t}const $y=new Re("#F4F8FF");function vr(i,e){const t=i.clone();return t.onBeforeCompile=n=>{n.uniforms.hazeColor={value:$y},n.uniforms.hazeAmount={value:e},n.fragmentShader=`uniform vec3 hazeColor;
uniform float hazeAmount;
`+n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  gl_FragColor.rgb = mix(gl_FragColor.rgb, hazeColor, hazeAmount);`)},t.customProgramCacheKey=()=>`haze-${e}`,t}const Zy=0,Jy=.15,Qy=.35,ev=0,qu=1.6,tv="#3A4256",nv="#B8D4EA",Ii="#E46E58",ju="#7FE0A6",iv="#609AC1",Ku="#F3E5CC",sv={chair:.53,spicy:.57,alcohol:.5},Mr=i=>new bt({color:i}),hi=(i,e,t,n)=>new Ye(new Ft(i,e,t),Mr(n)),ba=(i,e,t)=>{const n=new Ye(new Sr(i-e,i,24),Mr(t));return n.rotation.x=-Math.PI/2,n};function rv(){const i=new tt,e=r=>new ei({color:r}),t=e("#2FA36B"),n=(r,o,a)=>{const l=new Ye(r,o);return l.position.y=a,i.add(l),l};n(new Vt(.26,.26,.75,10),t,.375),n(new Vt(.1,.26,.22,10),t,.86),n(new Vt(.09,.1,.28,10),t,1.11),n(new Vt(.268,.268,.32,10),e("#F4F1E6"),.4),n(new Vt(.272,.272,.06,10),e("#3B6FB6"),.53),n(new Ft(.05,.5,.02),Mr("#C9F2D9"),.62).position.set(-.13,.62,.22);const s=n(new Vt(.11,.11,.12,10),e("#1B7A48"),1.3);return{group:i,cap:s,glass:t}}const ov={cushion:"#F7A8C4",ointment:"#FFF4DC",ice:"#9FE3FF",suppository:"#FFD25A"};function av(i){const e=new tt,t=s=>new ei({color:s}),n=(s,r,o=0,a=0,l=0,u=0,c=0)=>{const h=new Ye(s,r);return h.position.set(o,a,l),h.rotation.set(u,0,c),e.add(h),h};return i==="cushion"?(n(new Ft(.75,.22,.75),t("#F7A8C4")),n(new Vt(.08,.08,.26,8),t("#E46E9A"))):i==="ointment"?(n(new Vt(.14,.17,.62,10),t("#FFFFFF"),0,0,0,0,Math.PI/2),n(new Vt(.175,.175,.18,10),t("#4FD1B0"),.02,0,0,0,Math.PI/2),n(new Vt(.08,.08,.16,8),t("#FF6B5A"),.38,0,0,0,Math.PI/2)):i==="ice"?(n(new Ft(.55,.4,.42),t("#9FE3FF")),n(new Ft(.12,.08,.44),t("#FFFFFF"),-.12,.2,0)):(n(new Vt(.13,.13,.42,10),t("#FFF4DC"),0,0,0,Math.PI/2),n(new yr(.13,.22,10),t("#FFF4DC"),0,0,-.32,-Math.PI/2),n(new yr(.1,.28,6),t("#FF9F43"),0,0,.34,Math.PI/2)),e.scale.setScalar(1.3),e}const $u="#FFE27A",Di="#FFF3BF",Ks="#7FE0C0",nf="#8FB8F0";function lv(){const i=new tt,e=o=>new ei({color:o}),t=(o,a,l,u,c,h,f)=>{const p=new Ye(new Ft(o,a,l),u);return p.position.set(c,h,f),i.add(p),p},n=e("#C9D3DE"),s=e("#FAFAF6"),r=e(nf);for(const o of[-.5,.5])for(const a of[-.85,.85])t(.07,.4,.07,n,o,-.15,a);return t(1.06,.1,1.8,n,0,.08,0),t(1,.16,1.72,s,0,.21,0),t(1.06,.45,.07,n,0,.3,-.9),t(1.06,.28,.07,n,0,.22,.9),t(.7,.12,.34,s,0,.35,-.62),t(1.04,.07,1,r,0,.32,.32),t(1.04,.03,.12,s,0,.36,-.12),i.scale.setScalar(1.6),i.userData.blanket=r,i}async function cv(i,e,t){const n=nc(e.decor),s=new Set(n.map(w=>w.decorRef));for(const w of e.decor){const k=await t(w.model);k.scale.setScalar(nr*w.scale),s.has(w.id)||(k.scale.y*=.5,k.traverse(B=>{B.isMesh&&(B.material=vr(B.material,Qy))})),k.position.set(...cn(w.x,w.y,0)),k.rotation.y=Ah.degToRad(w.rotY),i.add(k)}{const w=[];for(const P of Ky(ic(e))){const F=Math.hypot(P.x1-P.x0,P.y1-P.y0),Y=Math.max(1,Math.round(F/.5));for(let he=0;he<Y;he++)w.push({x:P.x0+(P.x1-P.x0)*(he+.5)/Y+P.nx*.06,y:P.y0+(P.y1-P.y0)*(he+.5)/Y+P.ny*.06,len:F/Y,along:P.along,red:he%2===0})}const z=new go(new Ft(1,.42,.1),new bt({color:"#FFFFFF"}),w.length),V=new ke,U=new Cn,G=new O(0,1,0),I=new Re;w.forEach((P,F)=>{U.setFromAxisAngle(G,P.along==="y"?Math.PI/2:0),z.setMatrixAt(F,V.compose(new O(...cn(P.x,P.y,Dt)),U,new O(P.len,1,1))),z.setColorAt(F,I.set(P.red?Ii:Ku))}),i.add(z)}{const w=e.bounds,k=1,B=Dt,z=[],V=[],U=(H,ee,X,ne)=>{const oe=Math.hypot(X-H,ne-ee),A=Math.round(oe/k),K=H===X?"y":"x";for(let J=0;J<A;J++){const le=(J+.5)/A;z.push({x:H+(X-H)*le,y:ee+(ne-ee)*le,along:K,red:J%2===0}),V.push({x:H+(X-H)*J/A,y:ee+(ne-ee)*J/A})}};U(w.minX,w.minY,w.minX,w.maxY),U(w.maxX,w.minY,w.maxX,w.maxY),U(w.minX,w.minY,w.maxX,w.minY),U(w.minX,w.maxY,w.maxX,w.maxY);const G=new go(new Ft(1,.35,.3),new bt({color:"#FFFFFF"}),z.length),I=new go(new Ft(.14,B+.3,.14),new ei({color:"#242637"}),V.length),P=new ke,F=new Cn,Y=new O(0,1,0),he=new O(k,1,1),fe=new Re;z.forEach((H,ee)=>{F.setFromAxisAngle(Y,H.along==="y"?Math.PI/2:0),G.setMatrixAt(ee,P.compose(new O(...cn(H.x,H.y,B)),F,he)),G.setColorAt(ee,fe.set(H.red?tv:nv))}),V.forEach((H,ee)=>I.setMatrixAt(ee,P.makeTranslation(...cn(H.x,H.y,(B+.3)/2)))),i.add(G,I)}const r={};for(const w of e.obstacles.filter(k=>k.model)){const k=w.type==="AlcoholTurret"?rv():null,B=new tt,z=k?new tt:await t(w.model);k?(z.add(k.group),z.scale.setScalar(qu),z.position.y=-.62*qu):(z.scale.setScalar(nr*to),z.position.y=-sv[w.model]*nr*to),z.traverse(G=>{G.isMesh&&(G.castShadow=!0)});const V=Tl(z,{width:.03/(k?1:to)});B.add(z,ba(w.radius,.16,Ii)),i.add(B);const U={group:B,body:z};if(w.type==="SpicyChaser"){const G=new tt,I=hi(.12,.4,.12,Ii),P=hi(.12,.12,.12,Ii);I.position.y=1.15,P.position.y=.8,G.add(I,P),G.visible=!1,B.add(G),U.mark=G,U.updateMotion=Yy(z,z.position.y)}if(w.type==="AlcoholTurret"){const G=new tt;for(let P=0;P<Ut.shots;P++){const F=new tt,Y=hi(.1,.05,Ut.range,Ii);Y.position.z=-8/2,F.add(Y),F.rotation.y=-(P-(Ut.shots-1)/2)*Ut.spread,G.add(F)}G.visible=!1,B.add(G);const I=new tt;for(let P=0;P<6;P++)I.add(new Ye(new bo(.07,6,4),Mr(P%2?"#E9FFF2":ju)));I.visible=!1,B.add(I),U.drops=I,Object.assign(U,{aim:G,cap:k.cap,glass:V.get(k.glass),bottle:k.group,popped:-1,phase:w.x*1.7})}if(w.type==="OfficeChair"){const G=new tt;(z.children[0]??z).add(G);for(const P of["000_seat","001_back","002_back_inset","003_armrest_-1","004_arm_post_-1","005_armrest_1","006_arm_post_1"]){const F=z.getObjectByName(P);F&&G.attach(F)}Object.assign(U,{swivel:G,spin:.5+Math.abs(w.x*7.3+w.y)%1,boost:0,x:w.x,y:w.y})}r[w.id]=U}const o=(w,k,B)=>{w.group.position.set(...cn(k,B,Dt))};for(const w of e.obstacles.filter(k=>k.model))o(r[w.id],w.x,w.y);const a=new bo(Ut.shotRadius,8,6).scale(1,.8,1.9),l=Mr(ju),u=Array.from({length:40},()=>{const w=new Ye(new Ft(.16,.16,.16),new bt({color:"#FFF4E6",transparent:!0,opacity:.85,depthWrite:!1}));return w.visible=!1,i.add(w),{m:w,life:0,vx:0,vz:0}});let c=0,h=0;const f=Array.from({length:60},()=>{const w=new Ye(new Ft(.13,.13,.13),new bt({color:"#FFD25A"}));return w.visible=!1,i.add(w),{m:w,life:0}});let p=0;const g=["#FFD25A","#FF9F43","#FF6B5A","#C8402E"],_=[],m=new Ye(new Vt(.11,.11,.12,10),new ei({color:"#1B7A48"})),d=(w,k)=>new bt({color:w,transparent:!0,opacity:k,depthWrite:!1,side:fn}),v=e.checkpoints.map(w=>{const k=new tt,B=new tt,z=[d($u,.95),d(Di,.45),d(Di,.18),d(Di,.14)],V=new Ye(new Yl(w.radius-.2,40),z[3]);V.rotation.x=-Math.PI/2,B.add(V),[[w.radius,.16],[w.radius+.22,.2],[w.radius-.25,.5]].forEach(([F,Y],he)=>{const fe=new Ye(new Sr(F-Y,F,40),z[he]);fe.rotation.x=-Math.PI/2,B.add(fe)});const U=new tt;for(let F=0;F<8;F++){const Y=new tt,he=F/8*Math.PI*2;Y.add(hi(.06,.26,.06,"#FFFFFF"),hi(.26,.06,.06,"#FFFFFF")),Y.position.set(Math.cos(he)*w.radius,.3+F%2*.35,Math.sin(he)*w.radius),U.add(Y)}const G=d(Di,.16),I=new Ye(new Vt(w.radius*.95,w.radius,Dt+2.5,24,1,!0),G);I.position.y=(Dt+2.5)/2-Dt;const P=lv();return P.position.y=-.35,k.add(B,U,I,P),k.position.set(...cn(w.x,w.y,Dt)),i.add(k),{ring:B,ringMats:z,sparkles:U,beamMat:G,blanket:P.userData.blanket}}),y=(e.items??[]).map(w=>{const k=new tt,B=av(w.kind);Tl(B,{width:.025});const z=ba(.75,.12,ov[w.kind]);return z.position.y=-.05,k.add(B,z),k.position.set(...cn(w.x,w.y,Dt)),i.add(k),{id:w.id,g:k,body:B,phase:w.x+w.y}}),x=e.hospital,b=new tt;b.add(ba(x.radius,.14,iv));const T=hi(1.3,1.3,.1,Ku),L=hi(.3,.95,.14,Ii),C=hi(.95,.3,.14,Ii);for(const w of[T,L,C])w.position.y=1.6,b.add(w);b.position.set(...cn(x.x,x.y,Dt)),i.add(b);const S=new Map,M=[];return function(k,B,z=[]){const V=Math.max(0,Math.min(.1,B-h));h=B;for(const P of k.enemies??[]){const F=r[P.id];if(F)if(P.type==="SpicyChaser"){if(o(F,P.x,P.y),F.updateMotion(P,k.ship,B),F.mark.visible=P.mode==="chase",P.mode==="chase"&&Math.random()<V*30){const Y=f[p++%f.length];Y.m.position.copy(F.group.position).add(new O((Math.random()-.5)*.5,-.1+Math.random()*.4,(Math.random()-.5)*.5)),Y.life=.5,Y.m.visible=!0}if(P.mode==="chase"&&Math.random()<V*14){const Y=u[c++%u.length];Y.m.position.copy(F.group.position).add(new O((Math.random()-.5)*.4,.9,(Math.random()-.5)*.4)),Object.assign(Y,{life:.7,vx:(Math.random()-.5)*.8,vz:(Math.random()-.5)*.8}),Y.m.visible=!0}}else{const Y=P.mode==="charge";F.aim.visible=Y&&Math.floor(P.timer*12)%2===0;const he=P.aim?Math.atan2(-P.aim.x,P.aim.y):0;Y&&(F.aim.rotation.y=he);const fe=Y?Math.min(1,P.timer/Ut.charge):0,H=fe*.7,ee=Y?0:Math.sin(B*2.2+F.phase)*.08;F.body.rotation.set(-H,he,ee,"YXZ"),F.body.position.x=Y?(.02+.06*fe)*Math.sin(B*60):0,F.glass.emissive.setRGB(.25*fe*(.6+.4*Math.sin(B*30)),.5*fe,.2*fe),F.drops.visible=Y,Y&&F.drops.children.forEach((oe,A)=>{const K=B*7+A*1.05,J=.9-.6*fe;oe.position.set(Math.cos(K)*J,.9+.5*fe+Math.sin(B*9+A)*.08,Math.sin(K)*J),oe.scale.setScalar(.6+.8*fe)});const X=F.popped>=0?B-F.popped:9,ne=X<.35?Math.exp(-X*9)*Math.cos(X*30):0;F.bottle.scale.set(1+ne*.18,1-ne*.25,1+ne*.18),F.wasCharging&&!Y&&(F.popped=B),F.wasCharging=Y,F.cap.visible=!(F.popped>=0&&B-F.popped<1.2),S.set(F,F.popped>=0&&B-F.popped<.7?B-F.popped:null)}}for(const P of k.world.obstacles){if(P.type!=="OfficeChair")continue;const F=r[P.id];F.body.position.y=-.53*nr*to+.1*Math.sin(B*2+P.x);for(const Y of z)Y.type==="hit"&&Y.kind==="chair"&&Math.hypot(Y.x-P.x,Y.y-P.y)<2&&(F.boost=14);F.boost*=Math.exp(-2.2*V),F.swivel.rotation.y+=(F.spin+F.boost)*V,F.body.rotation.z=Math.sin(B*1.6+P.y)*.06+F.boost*.01*Math.sin(B*25)}for(const P of f)P.m.visible&&(P.life-=V,P.m.position.y+=.6*V,P.m.scale.setScalar(Math.max(.05,P.life*2)),P.m.material.color.set(g[Math.min(3,Math.floor((.5-P.life)*8))]),P.m.visible=P.life>0);for(const P of u)P.m.visible&&(P.life-=V,P.m.position.x+=P.vx*V,P.m.position.z+=P.vz*V,P.m.position.y+=1.6*V,P.m.scale.setScalar(.5+(.7-P.life)*2.2),P.m.material.opacity=Math.max(0,P.life/.7)*.85,P.m.visible=P.life>0);let U=0;for(const[P,F]of S){if(F===null)continue;const Y=M[U]??(M[U]=Object.assign(m.clone(),{visible:!1}));Y.parent||i.add(Y),Y.visible=!0,Y.position.copy(P.group.position).add(new O(.4*F,1.1+4*F-6*F*F,0)),Y.rotation.set(F*20,0,F*14),U++}for(;U<M.length;U++)M[U].visible=!1;const G=k.projectiles??[];for(;_.length<G.length;){const P=new Ye(a,l);i.add(P),_.push(P)}_.forEach((P,F)=>{const Y=G[F];P.visible=!!Y,Y&&(P.position.set(...cn(Y.x,Y.y,Dt)),P.rotation.y=Math.atan2(Y.vx,-Y.vy))});const I=new Set((k.items??[]).filter(P=>P.taken).map(P=>P.id));for(const P of y)P.g.visible=!I.has(P.id),P.g.visible&&(P.body.position.y=.15+Math.sin(B*3+P.phase)*.12,P.body.rotation.y=B*1.8+P.phase);v.forEach((P,F)=>{const Y=F<=(k.checkpointIndex??-1),he=Y?1:1+.06*Math.sin(B*4+F);P.ring.scale.set(he,1,he),P.ring.rotation.y=B*.3,P.sparkles.rotation.y=B*(Y?.3:.9),P.ringMats[0].color.set(Y?Ks:$u),P.ringMats[1].color.set(Y?Ks:Di),P.ringMats[2].color.set(Y?Ks:Di),P.ringMats[3].color.set(Y?Ks:Di),P.beamMat.opacity=Y?.06:.12+.05*Math.sin(B*3+F),P.blanket.color.set(Y?Ks:nf)})}}const us=i=>Math.round(i*100)/100,sc="kenney/city-kit-commercial/",uv="kenney/city-kit-suburban/",Ea=[..."abcdefghijkln"].map(i=>sc+"building-"+i),hv=[..."abcdefghk"].map(i=>sc+"building-"+i),Ta=[..."bcde"].map(i=>sc+"building-skyscraper-"+i),fv=[..."abcdefghijklmnopqrstu"].map(i=>uv+"building-type-"+i),un=1.5,Mn=3,$s=4.5,dv=[-10,0,10],ds=12,Zu=2.6;function sf(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const pv={company:[["office",.65],["plaza",.2],["parking",.15]],alley:[["shops",.8],["yard",.2]],city:[["downtown",.5],["houses",.3],["plaza",.2]],hospital:[["ward",.7],["park",.3]]},lt="OfficeChair",_t="SpicyChaser",yt="AlcoholTurret",mv={company:[[{open:[0,1,2],blocks:["office","plaza","office","parking"],obs:[[lt,"road",1,.5,0]]},{open:[0,1,2],blocks:["parking","office","plaza","office"],obs:[[lt,"road",0,.5,.8]]}],[{open:[0,1,2],blocks:["office","office","parking","office"],obs:[[lt,"road",0,.3,-.8],[lt,"road",1,.6,.8],[lt,"road",2,.45,0]]},{open:[0,2],blocks:["office","office","office","office"],obs:[[lt,"road",0,.5,.9],[lt,"road",2,.3,-.9],[lt,"road",2,.75,.9]]},{open:[1,2],blocks:["office","plaza","office","office"],obs:[[lt,"road",1,.35,.9],[lt,"block",1,.6,.5],[lt,"corner",2,"top",-1]]}],[{open:[1,2],blocks:["office","office","plaza","office"],obs:[[lt,"road",1,.2,-.9],[lt,"road",1,.5,.9],[lt,"road",1,.8,-.9],[lt,"road",2,.5,0]]},{open:[0,1],blocks:["office","parking","office","office"],obs:[[lt,"road",0,.5,0],[lt,"road",1,.3,-.9],[lt,"road",1,.7,.9],[lt,"corner",1,"top",1]]}]],alley:[[{open:[0,1,2],blocks:["shops","yard","shops","shops"],obs:[[yt,"block",1,.5,.5]]},{open:[0,1,2],blocks:["shops","shops","yard","shops"],obs:[[yt,"side",2,.5,-1]]}],[{open:[0,2],blocks:["shops","shops","shops","shops"],obs:[[yt,"corner",0,"top",1],[yt,"corner",2,"bottom",-1],[lt,"road",0,.5,0]]},{open:[1,2],blocks:["shops","shops","yard","shops"],obs:[[yt,"side",1,.5,1],[yt,"block",2,.3,.5],[lt,"road",2,.6,0]]},{open:[0,1],blocks:["yard","shops","shops","shops"],obs:[[yt,"side",0,.35,1],[yt,"side",1,.7,-1]]}],[{open:[1],blocks:["shops","shops","shops","shops"],obs:[[yt,"side",1,.25,-1],[yt,"side",1,.55,1],[yt,"side",1,.85,-1],[lt,"road",1,.4,.8]]},{open:[0,1],blocks:["shops","shops","shops","yard"],obs:[[yt,"corner",0,"top",1],[yt,"corner",1,"bottom",-1],[yt,"side",0,.5,1],[lt,"road",1,.55,0]]}]],city:[[{open:[0,1,2],blocks:["downtown","plaza","houses","downtown"],obs:[[_t,"block",1,.5,.5]]},{open:[0,1,2],blocks:["houses","downtown","plaza","downtown"],obs:[[_t,"block",2,.5,.5]]}],[{open:[0,1,2],blocks:["downtown","houses","plaza","downtown"],obs:[[_t,"block",1,.3,.5],[_t,"block",2,.7,.5],[yt,"corner",1,"top",-1]]},{open:[0,2],blocks:["downtown","houses","houses","downtown"],obs:[[_t,"road",0,.5,0],[_t,"road",2,.5,0],[_t,"block",1,.5,.5]]}],[{open:[1,2],blocks:["downtown","plaza","houses","downtown"],obs:[[_t,"block",1,.3,.5],[_t,"block",1,.75,.5],[_t,"road",1,.5,0],[_t,"road",2,.4,0],[yt,"corner",2,"top",-1]]},{open:[0,1],blocks:["downtown","houses","downtown","downtown"],obs:[[_t,"road",0,.3,0],[_t,"road",1,.6,0],[_t,"block",1,.5,.5],[yt,"side",0,.75,1],[_t,"corner",1,"top",1]]}]],hospital:[[{open:[0,1,2],blocks:["ward","park","ward","ward"],obs:[[lt,"road",1,.5,0]]},{open:[0,1,2],blocks:["ward","ward","park","ward"],obs:[[_t,"block",2,.5,.5]]}],[{open:[0,2],blocks:["ward","ward","ward","ward"],obs:[[lt,"road",0,.4,-.9],[_t,"road",2,.6,0],[yt,"corner",0,"top",1]]},{open:[1,2],blocks:["ward","park","ward","ward"],obs:[[yt,"side",1,.4,-1],[_t,"road",2,.5,0],[lt,"road",1,.75,.9]]}],[{open:[1,2],blocks:["ward","ward","park","ward"],obs:[[lt,"road",1,.2,-.9],[yt,"side",1,.5,1],[_t,"road",1,.8,0],[_t,"block",2,.5,.5]]},{open:[0,1],blocks:["ward","ward","ward","ward"],obs:[[yt,"corner",0,"top",1],[yt,"corner",1,"bottom",-1],[_t,"road",0,.5,0],[lt,"road",1,.5,-.9]]}]]},gv={open:[1],blocks:["ward","park","park","ward"],obs:[[_t,"block",1,.4,.5],[_t,"block",2,.4,.5]]},_v={OfficeChair:.7,SpicyChaser:.55,AlcoholTurret:.6},xv={company:[["cushion",.35],["ointment",.25],["ice",.2],["suppository",.2]],alley:[["cushion",.25],["ointment",.25],["ice",.35],["suppository",.15]],city:[["cushion",.3],["ointment",.25],["ice",.3],["suppository",.15]],hospital:[["cushion",.25],["ointment",.4],["ice",.2],["suppository",.15]]},yv=new Set(["office","shops","downtown","ward"]),Ju=4,Qu={OfficeChair:"chair",SpicyChaser:"spicy",AlcoholTurret:"alcohol"};function rf(i,e){const t=sf(i),n=A=>A[Math.floor(t()*A.length)],s=(A,K)=>A+t()*(K-A),r=A=>{let K=t();for(const[J,le]of A)if((K-=le)<0)return J;return A[0][0]},{bounds:o,hospital:a,zones:l}=e,u=A=>l.find(K=>A<K.y1)??l.at(-1),c=[];for(let A=14+s(0,4);A<a.y-14;A+=s(18,26))c.push(Math.round(A));const h=[o.minY,...c,o.maxY],f=[];for(const A of e.checkpoints){const K=c.reduce((J,le,be)=>Math.abs(le-A.y)<Math.abs(c[J]-A.y)?be:J,0);!f.some(J=>J.si===K)&&K+1<h.length-2&&f.push({si:K,cp:A})}const p=[];for(let A=0;A<h.length-1;A++){const K=h[A],J=h[A+1],le=A===h.length-2,be=u((K+J)/2).id,N=Math.max(-1,...f.filter(D=>D.si<A).map(D=>D.si)),Ue=Math.min(h.length,...f.filter(D=>D.si>=A).map(D=>D.si)),de=A===0||A-1===N?0:Ue-A<=0?2:1;let ge=le?gv:n(mv[be][de]);!le&&A>0&&t()<.5&&(ge=vv(ge));const Be=dv.map(D=>(A===0||le)&&D===0?0:Math.round((D+s(-1.5,1.5))*10)/10);let xe=[...ge.open];A===0&&!xe.includes(1)&&xe.push(1),p.push({y0:K,y1:J,xs:Be,open:xe,chunk:ge,z:be,tier:de})}const g=[];let _=t()<.5?0:2;for(const{si:A,cp:K}of f){const J=p[A+1];J.open.includes(_)||J.open.push(_),g.push({...K,x:J.xs[_],y:c[A],radius:2.4}),_=2-_}for(const A of p)A.open.sort();const m=[...c.map(A=>({x0:o.minX,x1:o.maxX,y0:A-un,y1:A+un,dir:"ew"})),...p.flatMap((A,K)=>A.open.map(J=>({x0:A.xs[J]-un,x1:A.xs[J]+un,y0:K===0?3:A.y0+un,y1:K===p.length-1?a.y-2:A.y1-un,dir:"ns"})))],d=[];p.forEach((A,K)=>{const J=A.y0+(K===0?0:Mn),le=A.y1-(K===p.length-1?0:Mn),be=A.open.map(Ue=>[A.xs[Ue]-Mn,A.xs[Ue]+Mn]);let N=o.minX;for(const[Ue,de]of[...be,[o.maxX,o.maxX]]){if(Ue-N>1.5&&le-J>1.5){const ge=(N+Ue)/2,Se=A.xs.filter(D=>D<ge).length,Be=u((J+le)/2+s(-ds,ds)).id,xe=Be===A.z?A.chunk.blocks[Se]:r(pv[Be]);d.push({x0:N,x1:Ue,y0:J,y1:le,zone:Be,kind:xe,band:A,region:Se})}N=de}});const v=[],y=(A,K,J)=>{K<o.minX+1.2||K>o.maxX-1.2||Math.hypot(K-e.spawn.x,J-e.spawn.y)<8||g.some(le=>Math.hypot(K-le.x,J-le.y)<le.radius+2.5)||Math.hypot(K-a.x,J-a.y)<a.radius+3||v.some(le=>Math.hypot(K-le.x,J-le.y)<3.2)||v.push({id:`${Qu[A]}-${v.length+1}`,type:A,model:Qu[A],x:Math.round(K*100)/100,y:Math.round(J*100)/100,radius:_v[A]})};for(const A of p)for(const[K,J,le,be,N]of A.chunk.obs){const Ue=A.xs[le],de=A.y0+Mn+be*(A.y1-A.y0-2*Mn);if(J==="road"&&A.open.includes(le))y(K,Ue+N,de);else if(J==="side"&&A.open.includes(le))y(K,Ue+N*(Mn-.6),de);else if(J==="corner"&&A.open.includes(le))y(K,Ue+N*$s*.8,be==="top"?A.y1-$s*.8:A.y0+$s*.8);else if(J==="block"){const ge=d.find(Se=>Se.band===A&&Se.region===le)??d.find(Se=>Se.band===A);if(!ge)continue;if(yv.has(ge.kind)){const Se=(ge.x0+ge.x1)/2,Be=A.open.map(xe=>A.xs[xe]).reduce((xe,D)=>Math.abs(D-Se)<Math.abs(xe-Se)?D:xe);y(K,Be,ge.y0+be*(ge.y1-ge.y0))}else y(K,ge.x0+N*(ge.x1-ge.x0),ge.y0+be*(ge.y1-ge.y0))}}const x=[...m.map(A=>({x:(A.x0+A.x1)/2,y:(A.y0+A.y1)/2,hx:(A.x1-A.x0)/2+Mn-un,hy:(A.y1-A.y0)/2+Mn-un})),...p.flatMap(A=>A.open.flatMap(K=>[A.y0,A.y1].filter(J=>c.includes(J)).map(J=>({x:A.xs[K],y:J,hx:$s,hy:$s})))),{x:0,y:e.spawn.y,hx:3,hy:3},...g.map(A=>({x:A.x,y:A.y,hx:A.radius+1,hy:A.radius+1})),{x:a.x,y:a.y,hx:a.radius+2,hy:a.radius+2},...v.map(A=>({x:A.x,y:A.y,hx:A.radius+.9,hy:A.radius+.9}))],b=e.decor.filter(A=>A.id==="hq"||A.id==="hospital"),T=cr(b),L=(A,K=0)=>x.concat(T).some(J=>Math.abs(A.x-J.x)<A.hx+J.hx+K&&Math.abs(A.y-J.y)<A.hy+J.hy+K),C=A=>A.x-A.hx>o.minX+.6&&A.x+A.hx<o.maxX-.6&&A.y-A.hy>o.minY+.6&&A.y+A.hy<o.maxY-.6;let S=0;const M=(A,K,J,le,be=0)=>{const N={id:`b${S}`,model:A,x:Math.round(J*100)/100,y:Math.round(le*100)/100,rotY:be,scale:K},Ue=cr([N]);return!Ue.every(C)||Ue.some(de=>L(de,.4))?!1:(S++,b.push(N),T.push(...Ue),!0)},w=A=>Math.round(Math.min(2.5,2.1/Eo[A].top)*100)/100,k=()=>{const A=n(fv);return[A,w(A)]},B={office:()=>t()<.3?k():t()<.8?[n(Ea),2.6]:[n(Ta),1.8],shops:()=>[n(hv),2.5],downtown:()=>t()<.5?[n(Ea),2.6]:t()<.5?[n(Ta),1.8]:k(),houses:k,ward:()=>t()<.15?k():t()<.6?[n(Ea),2.7]:[n(Ta),1.9],park:()=>t()<.2?k():null};for(const A of d){const K=B[A.kind];if(!K)continue;A.kind==="shops"&&A.x1-A.x0>8&&(A.passage=s(A.x0+3,A.x1-3),x.push({x:A.passage,y:(A.y0+A.y1)/2,hx:1.5,hy:(A.y1-A.y0)/2}));const J=A.kind==="shops"||A.kind==="ward";for(let le=A.y0+.5;le<A.y1-1;){let be=0;for(let N=A.x0+.5;N<A.x1-1;){let Ue=!1;for(let de=0;de<4&&!Ue;de++){const ge=K();if(!ge)break;const[Se,Be]=ge,xe=Eo[Se],D=xe.hx*2*Be,E=xe.hz*2*Be;N+D>A.x1-.5||le+E>A.y1-.5||M(Se,Be,N+D/2,le+E/2,t()<.5?0:180)&&(Ue=!0,be=Math.max(be,E),N+=D+(J?s(.45,.9):s(.45,2.4)))}Ue||(N+=.8)}le+=Math.max(be,1.5)+(J?s(.45,.9):s(.45,2.2))}}const z=nc(b.filter(A=>A.id!=="hq"&&A.id!=="hospital")),V=(A,K)=>Math.abs(A.x-K.x)-A.hx-K.hx<Zu&&Math.abs(A.y-K.y)-A.hy-K.hy<Zu,U=A=>{const K=Math.min(...A.map(N=>N.x-N.hx)),J=Math.max(...A.map(N=>N.x+N.hx)),le=Math.min(...A.map(N=>N.y-N.hy)),be=Math.max(...A.map(N=>N.y+N.hy));return{x:(K+J)/2,y:(le+be)/2,hx:(J-K)/2,hy:(be-le)/2}},G=A=>!x.some(K=>Math.abs(A.x-K.x)<A.hx+K.hx&&Math.abs(A.y-K.y)<A.hy+K.hy)&&!v.some(K=>Math.abs(A.x-K.x)<A.hx+K.radius+.5&&Math.abs(A.y-K.y)<A.hy+K.radius+.5),I=[],P=z.map((A,K)=>K),F=A=>P[A]===A?A:P[A]=F(P[A]);for(let A=0;A<z.length;A++)for(let K=A+1;K<z.length;K++)V(z[A],z[K])&&(P[F(A)]=F(K));const Y=new Map;z.forEach((A,K)=>{const J=F(K);Y.has(J)||Y.set(J,[]),Y.get(J).push(A)});for(const A of Y.values()){if(A.length<2)continue;const K=U(A);if(G(K)){I.push(K);continue}for(let J=0;J<A.length;J++)for(let le=J+1;le<A.length;le++){const be=U([A[J],A[le]]);V(A[J],A[le])&&G(be)&&I.push(be)}}I.forEach((A,K)=>Object.assign(A,{id:`lump${K}`,x:Math.round(A.x*100)/100,y:Math.round(A.y*100)/100,hx:Math.round(A.hx*100)/100,hy:Math.round(A.hy*100)/100}));const he=new Set(z.map(A=>A.decorRef)),fe=b.filter(A=>he.has(A.id)||A.id==="hq"||A.id==="hospital"||!cr([A]).some(K=>I.some(J=>Math.abs(K.x-J.x)<J.hx+K.hx&&Math.abs(K.y-J.y)<J.hy+K.hy))),H=ic({decor:fe,lumps:I}),ee=(A,K,J,le,be)=>{for(let N=0;N<=16;N++){const Ue=A+(J-A)*N/16,de=K+(le-K)*N/16;if(Ue<o.minX+1||Ue>o.maxX-1||H.some(ge=>Math.abs(Ue-ge.x)<ge.hx+be&&Math.abs(de-ge.y)<ge.hy+be))return!1}return!0};for(const A of v)if(A.type==="SpicyChaser")for(const[K,J]of t()<.5?[[0,1],[1,0]]:[[1,0],[0,1]])for(const le of[Ju,Ju*.6]){const be={x:A.x-K*le,y:A.y-J*le},N={x:A.x+K*le,y:A.y+J*le};!A.patrol&&ee(be.x,be.y,N.x,N.y,A.radius+.3)&&(A.patrol={x0:us(be.x),y0:us(be.y),x1:us(N.x),y1:us(N.y)})}const X=[],ne=(A,K)=>A>o.minX+1.5&&A<o.maxX-1.5&&!H.some(J=>Math.abs(A-J.x)<J.hx+1&&Math.abs(K-J.y)<J.hy+1)&&!v.some(J=>Math.hypot(A-J.x,K-J.y)<J.radius+2)&&!g.some(J=>Math.hypot(A-J.x,K-J.y)<J.radius+2.5)&&!X.some(J=>Math.hypot(A-J.x,K-J.y)<6)&&Math.hypot(A-a.x,K-a.y)>a.radius+3,oe=(A,K,J)=>{ne(A,K)&&X.push({id:`item-${X.length+1}`,kind:r(J),x:us(A),y:us(K)})};p.forEach((A,K)=>{if(!(K===0||K===p.length-1)&&t()<.65){const J=A.open[Math.floor(t()*A.open.length)];oe(A.xs[J]+s(-.8,.8),A.y0+Mn+t()*(A.y1-A.y0-2*Mn),xv[A.z])}});for(const A of d)A.passage!==void 0&&t()<.7&&oe(A.passage,(A.y0+A.y1)/2,[["suppository",.5],["cushion",.5]]);return{...e,seed:i,streets:c,roads:m,blocks:d.map(({band:A,region:K,...J})=>J),checkpoints:g,decor:fe,obstacles:v,lumps:I,items:X}}function vv(i){return{open:i.open.map(e=>2-e),blocks:[...i.blocks].reverse(),obs:i.obs.map(([e,t,n,s,r])=>t==="block"?[e,t,3-n,s,1-r]:[e,t,2-n,s,typeof r=="number"?-r:r])}}const vt=64,Mv=2;function Sv(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const of=(i,e)=>`#${new Re(i).offsetHSL(0,0,e).getHexString()}`,Al={pavers(i,e){Aa(i,e,"#C9CDD2","#AEB3BA",16,16,.025)},sidewalk(i,e){Aa(i,e,"#D8D5CE","#BDB9B0",32,32,.015)},plaza(i,e){Aa(i,e,"#E8DDC8","#D2C5AC",16,16,.02),i.fillStyle="#D9C9A8";for(let t=0;t<vt;t+=32)for(let n=0;n<vt;n+=32)i.fillRect(n+1,t+1,15,15)},brick(i,e){i.fillStyle="#7A5448",i.fillRect(0,0,vt,vt);for(let t=0,n=0;t<vt;t+=8,n++)for(let s=n%2*-8;s<vt;s+=16)i.fillStyle=of("#A06A57",(e()-.5)*.06),i.fillRect(s+1,t+1,15,7)},asphalt(i,e){wa(i,e,"#5D6068",["#686B73","#53565D"],140)},parking(i,e){Al.asphalt(i,e),i.fillStyle="#E9E6DE";for(let t=0;t<vt;t+=16)i.fillRect(t,2,2,24),i.fillRect(t,38,2,24);i.fillRect(0,30,vt,2)},yard(i,e){wa(i,e,"#4E5058",["#5A5C64","#44464D"],160),i.fillStyle="#7C97AE";for(let t=0;t<2;t++){const n=e()*48,s=e()*48;i.fillRect(n,s,10+e()*8,4+e()*4),i.fillRect(n+3,s-2,6,2)}i.fillStyle="#3E4046";for(let t=0;t<3;t++){let n=e()*vt,s=e()*vt;for(let r=0;r<10;r++)i.fillRect(n,s,1,1),n+=Math.round(e()*2-.5),s+=1}},grass(i,e){wa(i,e,"#8CC56E",["#7DB862","#9BD27C","#86BF68"],260);for(let t=0;t<3;t++)i.fillStyle=["#F7F0B5","#F2B8C6","#FFFFFF"][t],i.fillRect(Math.floor(e()*vt),Math.floor(e()*vt),1,1)},lawn(i,e){Al.grass(i,e),i.fillStyle="#D8D2C2";for(let t=2;t<vt;t+=10)i.fillRect(28+Math.round(e()*2),t,8,6)}};function Aa(i,e,t,n,s,r,o){i.fillStyle=n,i.fillRect(0,0,vt,vt);for(let a=0;a<vt;a+=r)for(let l=0;l<vt;l+=s)i.fillStyle=of(t,(e()-.5)*o*2),i.fillRect(l+1,a+1,s-1,r-1)}function wa(i,e,t,n,s){i.fillStyle=t,i.fillRect(0,0,vt,vt);for(let r=0;r<s;r++)i.fillStyle=n[r%n.length],i.fillRect(Math.floor(e()*vt),Math.floor(e()*vt),1+(e()<.2),1)}const Ra={};function bv(i){if(!Ra[i]){const e=document.createElement("canvas");e.width=e.height=vt,Al[i](e.getContext("2d"),Sv(i.length*977+i.charCodeAt(0)));const t=new Yh(e);t.wrapS=t.wrapT=Xi,t.magFilter=t.minFilter=wt,t.generateMipmaps=!1,t.colorSpace=Nt,Ra[i]=t}return Ra[i]}const eh=Mv,Ev={office:"pavers",downtown:"pavers",plaza:"plaza",parking:"parking",shops:"brick",yard:"yard",houses:"lawn",park:"grass",ward:"pavers"},jt="kenney/",so={straight:jt+"city-kit-roads/road-straight",cross:jt+"city-kit-roads/road-crossroad",crossing:jt+"city-kit-roads/road-crossing"},th=["sedan","taxi","van","police","suv","hatchback-sports","delivery"].map(i=>jt+"car-kit/"+i),Ui=un*2,ro=.8,oo=.7,nh=.47,Tv=2.4,Av=2.6,wv=.08;async function Rv(i,e,t){const n=e.bounds,s=sf((e.seed??0)+4242),r=cr(e.decor).map(b=>({...b,hx:b.hx+.35,hy:b.hy+.35})),o=(b,T,L=0)=>b>n.minX+.8&&b<n.maxX-.8&&!r.some(C=>Math.abs(b-C.x)<C.hx+L&&Math.abs(T-C.y)<C.hy+L),a=new Map,l=(b,T,L,C,S,M)=>{if(L-T<=0||S-C<=0)return;const w=new _i(L-T,S-C);w.rotateX(-Math.PI/2),w.translate((T+L)/2,M,-(C+S)/2);const k=w.attributes.position,B=w.attributes.uv;for(let z=0;z<k.count;z++)B.setXY(z,k.getX(z)/eh,-k.getZ(z)/eh);a.has(b)||a.set(b,[]),a.get(b).push(w)};for(const b of e.blocks??[])l(Ev[b.kind],b.x0-oo,b.x1+oo,b.y0-oo,b.y1+oo,.006);for(const b of e.blocks??[])b.passage!==void 0&&l("yard",b.passage-1.5,b.passage+1.5,b.y0,b.y1,.007);for(const b of e.roads??[])l("sidewalk",b.x0-ro,b.x1+ro,b.y0-ro,b.y1+ro,.009);for(const[b,T]of a){const L=new Ye(Ou(T),vr(new ei({map:bv(b)}),wv));L.geometry.userData.merged=!0,L.receiveShadow=!0,i.add(L)}const u=[],c=async(b,T,L,{scale:C=1,rot:S=0,h:M=.012,sx:w=C,sz:k=C}={})=>{const B=await t(b);B.scale.set(w,C,k),B.rotation.y=S,B.position.set(T,M,-L),u.push(B)},h=(e.roads??[]).filter(b=>b.dir==="ns"),f=(e.roads??[]).filter(b=>b.dir==="ew"),p=f.map(b=>(b.y0+b.y1)/2),g=(b,T,L)=>Math.abs(b-(T+L*un))<.1,_=[];for(const b of h){const T=(b.x0+b.x1)/2,L=Math.max(1,Math.round((b.y1-b.y0)/Ui)),C=(b.y1-b.y0)/L;for(let S=0;S<L;S++){const M=S===0&&p.some(w=>g(b.y0,w,1))||S===L-1&&p.some(w=>g(b.y1,w,-1));await c(M?so.crossing:so.straight,T,b.y0+C*(S+.5),{scale:Ui,sx:C,sz:Ui,rot:Math.PI/2})}for(const S of p)(g(b.y0,S,1)||g(b.y1,S,-1))&&_.push({x:T,y:S})}for(const b of p){const T=[...new Set(_.filter(C=>C.y===b).map(C=>C.x))].sort((C,S)=>C-S);for(const C of T)await c(so.cross,C,b,{scale:Ui});const L=[n.minX,...T.flatMap(C=>[C-un,C+un]),n.maxX];for(let C=0;C<L.length;C+=2){const S=L[C],M=L[C+1];if(M-S<.3)continue;const w=Math.max(1,Math.round((M-S)/Ui)),k=(M-S)/w;for(let B=0;B<w;B++)await c(so.straight,S+k*(B+.5),b,{scale:Ui,sx:k,sz:Ui})}}const m=(b,T,L)=>c(th[Math.floor(s()*th.length)],b,T,{scale:nh,rot:L}),d=(b,T)=>c(jt+"city-kit-suburban/"+(s()<.6?"tree-large":"tree-small"),b,T,{scale:Tv,rot:s()*6}),v=(b,T,L)=>c(jt+"city-kit-roads/light-curved",b,T,{scale:Av,rot:L}),y=async(b,T,L,C=.3)=>{for(let S=0,M=0;S<T&&M<T*20;M++){const w=b.x0+.6+s()*(b.x1-b.x0-1.2),k=b.y0+.6+s()*(b.y1-b.y0-1.2);o(w,k,C)&&(b.passage===void 0||Math.abs(w-b.passage)>1.1)&&(await L(w,k),r.push({x:w,y:k,hx:C+.2,hy:C+.2}),S++)}};for(const b of e.blocks??[]){const T=L=>Math.round(L*(b.x1-b.x0)*(b.y1-b.y0)/100);if(b.kind==="parking")for(let L=b.y0+1;L<b.y1-1;L+=2)for(let C=b.x0+.5;C<b.x1-.5;C+=1)s()<.55&&o(C,L)&&await m(C,L,s()<.5?0:Math.PI);else if(b.kind==="plaza")await y(b,T(3),d,.6),await y(b,T(4),(L,C)=>c(jt+"city-kit-suburban/planter",L,C,{scale:2.2})),await y(b,T(1.5),(L,C)=>v(L,C,s()*6));else if(b.kind==="office"||b.kind==="downtown")await y(b,T(1.5),d,.5),await y(b,T(1.5),(L,C)=>c(jt+"city-kit-suburban/planter",L,C,{scale:2.2}));else if(b.kind==="shops"||b.kind==="yard"){const L=b.kind==="yard";await y(b,T(L?5:2),(C,S)=>c(jt+"city-kit-roads/dumpster",C,S,{scale:2,rot:s()*6})),await y(b,T(L?6:2),(C,S)=>c(jt+"city-kit-roads/construction-cone",C,S,{scale:2.2,rot:s()*6}),.15),L&&await y(b,T(2),(C,S)=>c(jt+"city-kit-roads/construction-barrier",C,S,{scale:2.2,rot:s()<.5?0:Math.PI/2}))}else b.kind==="houses"?(await y(b,T(4),d,.5),await y(b,T(3),(L,C)=>c(jt+"city-kit-suburban/fence-low",L,C,{scale:1.6,rot:s()<.5?0:Math.PI/2}),.7)):b.kind==="park"&&(await y(b,T(9),d,.5),await y(b,T(3),(L,C)=>c(jt+"city-kit-suburban/planter",L,C,{scale:2.2})),await y(b,T(2),(L,C)=>c(jt+"city-kit-suburban/path-stones-long",L,C,{scale:2.4,rot:s()*3}),.1))}for(const b of h)for(let T=b.y0+2;T<b.y1-1;T+=6){const L=s()<.5?-1:1,C=(L<0?b.x0:b.x1)+L*.45;o(C,T)&&await v(C,T,L<0?-Math.PI/2:Math.PI/2)}for(const b of h)for(let T=b.y0+3;T<b.y1-3;T+=7)s()<.25&&await m((b.x0+b.x1)/2+(s()<.5?-.7:.7),T,s()<.5?0:Math.PI);for(const b of f){const T=(b.y0+b.y1)/2;for(let L=n.minX+3;L<n.maxX-3;L+=7)s()<.2&&!_.some(C=>C.y===T&&Math.abs(C.x-L)<2.5)&&await m(L,T+(s()<.5?-.7:.7),Math.PI/2*(s()<.5?1:-1))}for(const[b,T]of[[4.5,e.hospital.y],[-4.5,e.hospital.y-2]])o(b,T)&&await c(jt+"car-kit/ambulance",b,T,{scale:nh,rot:Math.PI/2});const x=new Map;for(const b of u)b.updateMatrixWorld(!0),b.traverse(T=>{if(!T.isMesh)return;const L=T.geometry.clone().applyMatrix4(T.matrixWorld),C=T.material.uuid+"|"+Object.keys(L.attributes).sort().join(",");x.has(C)||x.set(C,{material:T.material,geos:[]}),x.get(C).geos.push(L)});for(const{material:b,geos:T}of x.values()){const L=Ou(T);L.userData.merged=!0;const C=new Ye(L,vr(b,Jy));C.castShadow=!0,C.receiveShadow=!0,i.add(C)}}function Cv(i,e={}){const{ship:t}=i;if(t.state!=="PLAYING"&&t.state!=="RESPAWN"||t.agonyLeft>0)return null;const n=tf(t);if(n)return e.status!==n||t.gameTime>=e.statusUntil?null:{text:n==="stunned"?"기절!":n==="drunk"?"취했다!! 딸꾹!":e.runaway==="overheat"?"폭주!":"불꽃이 막 나와!",tone:"danger"};if(t.state==="RESPAWN"||Math.max(t.overLeft,t.overRight)>0)return null;if(i.checkpointIndex<0){if(t.gameTime<5)return{text:"한쪽 = 회전",tone:"info"};if(t.gameTime<10)return{text:"양쪽 = 전진",tone:"info"};if(t.gameTime<16)return{text:"꾹 누르면 폭주!",tone:"info"}}return null}const ih={chair:"쾅!",building:"쿵!",alcohol:"꿀꺽!",spicy:null};function af(i){const e=i.world.checkpoints?.[(i.checkpointIndex??-1)+1];return e?{x:e.x,y:e.y,kind:"checkpoint"}:{x:i.world.hospital.x,y:i.world.hospital.y,kind:"hospital"}}function Lv(i){const e=af(i),t=e.x-i.ship.x,n=e.y-i.ship.y;return{angle:Math.atan2(t,n),distance:Math.hypot(t,n),kind:e.kind}}const Pv={character:"canonical/character_frog.glb",office_block:"building_company.glb",alley_block:"building_alley.glb",city_block:"building_city.glb",hospital:"building_hospital.glb",chair:"obstacle_office_chair.glb",spicy:"obstacle_spicy_chaser.glb",alcohol:"obstacle_alcohol_turret.glb"},sh=i=>new O(...[1,3,5].map(e=>parseInt(i.slice(e,e+2),16)/255)),Iv={uniforms:{tWorld:{value:null},tHud:{value:null},uStyle:{value:0},worldPal:{value:Ql.map(sh)},uiPal:{value:ec.map(sh)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`};async function Dv(i,e){const t=new V_({canvas:i,antialias:!1,preserveDrawingBuffer:!0});t.setPixelRatio(1),t.shadowMap.enabled=!0,t.shadowMap.type=wf;const n=new xu;n.background=new Re("#8FD6F2"),n.add(new fx("#E6F4FF","#8C7BB0",1.25));const s=new $h("#FFE6BF",2.4);s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:60}),n.add(s,s.target);const r=new Nx,o={},a=new WeakSet,l=H=>(H.scene.traverse(ee=>{const X=ee.isMesh&&ee.geometry.attributes.color;if(!X||a.has(X))return;const ne=new Re;for(let oe=0;oe<X.count;oe++)X.setXYZ(oe,...ne.setRGB(X.getX(oe),X.getY(oe),X.getZ(oe)).convertSRGBToLinear().toArray());a.add(X)}),H),u=H=>o[H]??=r.loadAsync(`./models/${Pv[H]??`${H}.glb`}`).then(l);await Promise.all(["character","chair","spicy","hospital",...Object.keys(Eo)].map(u));const c=async H=>{u(H);const ee=(await o[H]).scene.clone();return ee.traverse(X=>{X.isMesh&&(X.castShadow=!0,X.receiveShadow=!0,X.material.metalness=0,X.material.roughness=1)}),ee};let h=null,f=()=>{};async function p(H){const ee=new tt,X=H.bounds,ne=-(X.minY+X.maxY)/2;((K,J,le,be,N,Ue,de)=>{const ge=new Ye(new _i(K,J),vr(new ei({color:le}),de));ge.rotation.x=-Math.PI/2,ge.position.set(be,Ue,N),ge.receiveShadow=!0,ee.add(ge)})(400,X.maxY-X.minY+200,"#242637",0,ne,0,ev);{const K=X.maxY-X.minY,J=H.zones??[],le=new _i(X.maxX-X.minX,K,1,Math.ceil(K/2));le.rotateX(-Math.PI/2),le.translate((X.minX+X.maxX)/2,.003,ne);const be=le.attributes.position,N=[],Ue=new Re,de=new Re;for(let Se=0;Se<be.count;Se++){const Be=-be.getZ(Se),xe=Math.max(0,J.findIndex(E=>Be<E.y1)),D=J[xe];Ue.set(D?.ground??"#BFC3C7"),J[xe+1]&&D.y1-Be<ds?Ue.lerp(de.set(J[xe+1].ground),.5*(1-(D.y1-Be)/ds)):J[xe-1]&&Be-D.y0<ds&&Ue.lerp(de.set(J[xe-1].ground),.5*(1-(Be-D.y0)/ds)),N.push(Ue.r,Ue.g,Ue.b)}le.setAttribute("color",new mt(N,3));const ge=new Ye(le,vr(new ei({vertexColors:!0}),Zy));ge.receiveShadow=!0,ee.add(ge)}const A=await cv(ee,H,c);await Rv(ee,H,c),h&&(n.remove(h),h.traverse(K=>{K.isMesh&&K.geometry.userData.merged&&K.geometry.dispose()})),h=ee,n.add(ee),f=A}await p(e);const g=new tt,_=new tt,m=await c("character");m.traverse(H=>{H.isMesh&&(H.castShadow=!0)});const d=Tl(m).rims,v=new Re,y=H=>{const ee=H.gameTime,X=Math.floor(ee*10)%2===0,ne=H.state==="PLAYING"||H.state==="RESPAWN";let oe=lr;ne?H.agonyLeft>0?oe=X?"#FF2E2E":"#FFFFFF":H.disruptedLeft>0?oe=X?"#FF7A1A":"#FFD25A":H.stunnedLeft>0?oe="#FFD25A":H.drunkLeft>0?oe="#F27BA5":H.boostLeft>0?oe="#4FD1B0":H.shieldLeft>0?oe="#7CC8F0":(H.pain??0)>.7&&(oe=Math.sin(ee*8)>0?"#B3262E":lr):oe=lr,v.set(oe);for(const A of d)A.color.copy(v)};g.add(_),_.add(m),_.scale.setScalar(nr);const x=Xy();n.add(g);const b={nozzleL:m.getObjectByName("nozzle_L"),nozzleR:m.getObjectByName("nozzle_R"),head:m.getObjectByName("head")};if(!b.nozzleL||!b.nozzleR||!b.head)throw new Error("canonical character is missing nozzle_L / nozzle_R / head");const T=Iy(n,b,m),L=Hy(m,b),C=new xr(-1,1,1,-1,.1,200),S=new xr(-1,1,1,-1,0,1),M=new Ye(new _i(2,2),new Qn(Iv)),w=new xu;w.add(M);const k=document.createElement("canvas"),B=k.getContext("2d",{willReadFrequently:!0}),z=new Yh(k);z.minFilter=z.magFilter=wt,M.material.uniforms.tHud.value=z;let V=null,U=45,G=Fo[1],I=0,P=0,F="color";function Y(H,ee,X=G,ne=F){F=ne,M.material.uniforms.uStyle.value={pixel:0,soft:1,clean:2,color:2}[F],G=X,[I,P]=No[H],U=ee,t.setSize(I,P,!1),V?.dispose();const oe=F==="clean"?Qt:wt;V=new vi(I,P,{minFilter:oe,magFilter:oe,type:Is,samples:F==="clean"?4:0}),z.minFilter=z.magFilter=oe,i.style.imageRendering=F==="clean"?"auto":"pixelated",M.material.uniforms.tWorld.value=V.texture,k.width=I,k.height=P,z.dispose();const A=G/2,K=A*I/P;Object.assign(C,{left:-K,right:K,top:A,bottom:-A}),C.updateProjectionMatrix()}function he(H,ee,X,ne={world:e,enemies:[],projectiles:[]},oe=[]){f(ne,H.gameTime,oe);const[A,K,J]=cn(H.x,H.y,Dt);g.position.set(A,K,J),g.rotation.y=Ty(H.theta),g.visible=!(H.state==="RESPAWN"&&Math.floor(H.invulnerableLeft*10)%2);const le=x(H,ee,oe);_.rotation.set(le.pitch,0,le.roll),_.position.y=le.lift,L(H,ee,oe),y(H),T(H,ee,oe);const be=new O(A,Dt,J-wy(U,G,My));C.position.copy(be).add(new O(...Ay(U,60))),C.lookAt(be),H.agonyLeft>0&&(C.position.x+=(Math.random()-.5)*.6,C.position.z+=(Math.random()-.5)*.6),H.disruptedLeft>0&&(C.position.x+=(Math.random()-.5)*.35,C.position.z+=(Math.random()-.5)*.35),H.drunkLeft>0&&C.rotateZ(Math.sin(H.gameTime*2.4)*.07*Math.min(1,H.drunkLeft)),s.position.set(A-8,14,J-2),s.target.position.set(A,0,J),t.setRenderTarget(V),t.render(n,C),B.clearRect(0,0,I,P),X(B,I,P),z.needsUpdate=!0,t.setRenderTarget(null),t.render(w,S);const N={},Ue=de=>(de.project(C),{x:(de.x+1)/2*I,y:(1-de.y)/2*P,visible:Math.abs(de.x)<=1&&Math.abs(de.y)<=1});for(const de of["head","nozzleL","nozzleR"])N[de]=Ue(b[de].getWorldPosition(new O));if(N.items=(ne.items??[]).filter(de=>!de.taken).map(de=>({...Ue(new O(...cn(de.x,de.y,Dt+.6))),kind:de.kind,dist:Math.hypot(de.x-H.x,de.y-H.y)})).filter(de=>de.visible),ne.world?.checkpoints){const de=af(ne);N.target={...Ue(new O(...cn(de.x,de.y,Dt))),kind:de.kind}}return N}function fe(){const H=t.getContext(),ee=new Uint8Array(I*P*4);H.readPixels(0,0,I,P,H.RGBA,H.UNSIGNED_BYTE,ee);const X=new Uint8Array(ee.length);for(let A=0;A<P;A++)X.set(ee.subarray((P-1-A)*I*4,(P-A)*I*4),A*I*4);const ne=B.getImageData(0,0,I,P).data,oe=new Uint8Array(I*P);for(let A=0;A<oe.length;A++)oe[A]=ne[A*4+3]>127?1:0;return{rgba:X,mask:oe,width:I,height:P}}return{setView:Y,setWorld:p,render:he,readback:fe,get size(){return[I,P]},get angle(){return U},get viewHeight(){return G}}}const Tt=Object.freeze({rise:1.25,fall:2,fullThreshold:.995,overheatAfter:1.6,idle:.35,thrust:4.45,torque:4.8,drag:.65,spinDrag:1.9,fixedDt:1/60});function Uv(i={x:0,y:0}){return{x:i.x,y:i.y,theta:0,vx:0,vy:0,omega:0,left:0,right:0,overLeft:0,overRight:0,effectiveLeft:0,effectiveRight:0,state:"READY",disruptedLeft:0,stunnedLeft:0,drunkLeft:0,hiccupAt:1/0,hiccupSide:1,hitCooldown:0,pain:0,shieldLeft:0,boostLeft:0,agonyLeft:0,checkpoint:{x:i.x,y:i.y},invulnerableLeft:0,gameTime:0,overheats:0,distance:0}}function Nv(i){i.state="PLAYING"}const Fv=i=>i.disruptedLeft>0?It.spin:1;function Ov(i,e){return e==="left"?Math.sin(i*13.3+1.3)+Math.sin(i*5.7)+.7*Math.sin(i*2.3+.5)>.1:Math.sin(i*11.1+4.2)+Math.sin(i*6.9+2)+.7*Math.sin(i*3.1+1.7)>.1}function rh(i,e,t,n){const s=i.disruptedLeft>0&&Ov(i.gameTime,e),r=s?Tt.rise*4:Tt.rise;i[e]=Math.max(0,Math.min(1,i[e]+(t||s?r:-Tt.fall)*n));const o=e==="left"?"overLeft":"overRight";i[o]=i[e]>=Tt.fullThreshold?i[o]+n:0}function Bv(i,{left:e=!1,right:t=!1}={},n=Tt.fixedDt){if(i.state!=="PLAYING"&&i.state!=="RESPAWN")return null;i.gameTime+=n,i.state==="RESPAWN"&&(i.invulnerableLeft=Math.max(0,i.invulnerableLeft-n),i.invulnerableLeft===0&&(i.state="PLAYING"));const s=i.stunnedLeft>0;let r=null;i.drunkLeft>0&&(i.omega+=Math.sin(i.gameTime*2.3)*Math.sin(i.gameTime*.9+1)*In.sway*n,i.gameTime>=i.hiccupAt&&(i.hiccupSide=-(i.hiccupSide||1),i.omega+=i.hiccupSide*In.spin,i.vx+=Math.sin(i.theta)*In.kick,i.vy+=Math.cos(i.theta)*In.kick,i.hiccupAt=i.gameTime+In.gap[0]+(In.gap[1]-In.gap[0])*(.5+.5*Math.sin(i.gameTime*12.9898)),r="hiccup")),i.drunkLeft=Math.max(0,i.drunkLeft-n),(i.disruptedLeft>0||s)&&(e=t=!1),rh(i,"left",e,n),rh(i,"right",t,n),(i.overLeft>=Tt.overheatAfter||i.overRight>=Tt.overheatAfter)&&(i.overLeft=i.overRight=0,i.disruptedLeft=It.disrupt,i.overheats++,r="overheat"),i.effectiveLeft=s?0:i.left+Tt.idle*(1-i.left),i.effectiveRight=s?0:i.right+Tt.idle*(1-i.right),i.stunnedLeft=Math.max(0,i.stunnedLeft-n),i.disruptedLeft=Math.max(0,i.disruptedLeft-n);const o=i.disruptedLeft>0?It.power:1,a=i.boostLeft>0?ir.boost.thrust:1;i.boostLeft=Math.max(0,i.boostLeft-n),i.shieldLeft=Math.max(0,i.shieldLeft-n);const l=Math.max(0,((i.pain??0)-An.ache)/(1-An.ache));l>0&&(i.omega+=Math.sin(i.gameTime*17)*Math.sin(i.gameTime*6.1)*An.tremble*l*n*10);const u=Tt.thrust*o*a*(1-(1-An.weak)*l)*(i.effectiveLeft+i.effectiveRight),c=s?El.drag:Tt.drag;if(i.vx+=(Math.sin(i.theta)*u-c*i.vx)*n,i.vy+=(Math.cos(i.theta)*u-c*i.vy)*n,i.omega+=(Tt.torque*o*Fv(i)*(i.effectiveLeft-i.effectiveRight)-Tt.spinDrag*i.omega)*n,i.disruptedLeft>0){const p=Math.floor(i.gameTime/It.joltEvery);p!==i.joltSlot&&(i.joltSlot=p,i.omega+=Math.sin(p*78.233)*It.jolt)}const h=i.vx*n,f=i.vy*n;return i.x+=h,i.y+=f,i.theta+=i.omega*n,i.distance+=Math.hypot(h,f),r}function kv(i){return i.filter(e=>e.type==="SpicyChaser"||e.type==="AlcoholTurret").map(e=>({...e,home:{x:e.x,y:e.y},mode:"idle",timer:0,aim:null}))}function zv(i,e){for(const t of i)Object.assign(t,{x:t.home.x,y:t.home.y,mode:"idle",timer:0,aim:null,leg:1,goal:null,lungeLeft:0,lungeRest:0});e.length=0}function Hv(i,e,t,n){for(const s of i){const r=t.x-s.x,o=t.y-s.y,a=Math.hypot(r,o);if(s.timer+=n,s.type==="SpicyChaser"){if(s.mode==="idle"&&a<It.detect?Object.assign(s,{mode:"chase",timer:0}):s.mode==="chase"&&s.timer>It.chaseTime?Object.assign(s,{mode:"cooldown",timer:0}):s.mode==="cooldown"&&s.timer>It.cooldown&&Object.assign(s,{mode:"idle",timer:0}),s.mode==="idle"&&s.patrol){s.leg??=1;const f=s.leg>0?{x:s.patrol.x1,y:s.patrol.y1}:{x:s.patrol.x0,y:s.patrol.y0};Math.hypot(f.x-s.x,f.y-s.y)<.05&&(s.leg=-s.leg),s.goal=s.leg>0?{x:s.patrol.x1,y:s.patrol.y1}:{x:s.patrol.x0,y:s.patrol.y0}}else if(s.mode==="chase"){const f=a<It.lungeRange*1.5?0:Math.min(It.lead,a/It.speed*.5);s.goal={x:t.x+t.vx*f,y:t.y+t.vy*f},(s.goal.x-s.x)*r+(s.goal.y-s.y)*o<0&&(s.goal=t),s.lungeLeft=Math.max(0,(s.lungeLeft??0)-n),s.lungeRest=Math.max(0,(s.lungeRest??0)-n),a<It.lungeRange&&!s.lungeLeft&&!s.lungeRest&&(s.lungeLeft=It.lungeTime,s.lungeRest=It.lungeRest)}else s.goal=s.home;const l=s.mode==="idle"?It.patrolSpeed:s.mode==="chase"&&s.lungeLeft>0?It.lunge:It.speed,u=s.goal.x-s.x,c=s.goal.y-s.y,h=Math.hypot(u,c);if(h>.001){const f=Math.min(h,l*n)/h;s.x+=u*f,s.y+=c*f}}else if(s.mode==="idle"&&a<Ut.range&&s.timer>Ut.period-Ut.charge)Object.assign(s,{mode:"charge",timer:0,aim:a>1e-6?{x:r/a,y:o/a}:{x:0,y:1}});else if(s.mode==="charge"&&s.timer>=Ut.charge){for(let l=0;l<Ut.shots;l++){const u=(l-(Ut.shots-1)/2)*Ut.spread,c=Math.cos(u),h=Math.sin(u),f=s.aim.x*c-s.aim.y*h,p=s.aim.x*h+s.aim.y*c;e.push({x:s.x,y:s.y,vx:f*Ut.shotSpeed,vy:p*Ut.shotSpeed,life:Ut.shotLife})}Object.assign(s,{mode:"idle",timer:0})}}for(const s of e)s.x+=s.vx*n,s.y+=s.vy*n,s.life-=n;for(let s=e.length-1;s>=0;s--)e[s].life<=0&&e.splice(s,1)}function Ca(i,e,t,n,s,r){const o=i-n,a=e-s,l=Math.hypot(o,a),u=t+r-l;return u<=0?null:l>1e-9?{nx:o/l,ny:a/l,depth:u}:{nx:0,ny:1,depth:u}}function Gv(i,e,t,n,s,r,o){const a=Math.max(n-r,Math.min(i,n+r)),l=Math.max(s-o,Math.min(e,s+o)),u=i-a,c=e-l,h=Math.hypot(u,c);if(h>1e-9)return h<t?{nx:u/h,ny:c/h,depth:t-h}:null;const f=r-Math.abs(i-n),p=o-Math.abs(e-s);return f<p?{nx:Math.sign(i-n)||1,ny:0,depth:f+t}:{nx:0,ny:Math.sign(e-s)||1,depth:p+t}}function La(i,e,t,n,s){i.x+=e.nx*e.depth,i.y+=e.ny*e.depth;const r=i.vx*e.nx+i.vy*e.ny;r<0&&(i.vx-=(1+t)*r*e.nx,i.vy-=(1+t)*r*e.ny),i.vx+=e.nx*n,i.vy+=e.ny*n;const o=Math.sin(i.theta),a=Math.cos(i.theta);i.omega+=Math.sign(o*e.ny-a*e.nx||1)*s}function Vv(i){return{segments:[[{t:0,x:i.x,y:i.y,theta:i.theta}]],events:[]}}function Wv(i,e){const t=i.segments.at(-1),n=t.at(-1);(e.gameTime-n.t>=.1||Math.hypot(e.x-n.x,e.y-n.y)>=.5)&&t.push({t:e.gameTime,x:e.x,y:e.y,theta:e.theta})}function ur(i,e,t,n={}){i.events.push({type:t,t:e.gameTime,x:e.x,y:e.y,...n})}function Xv(i,e){i.segments.push([{t:e.gameTime,x:e.x,y:e.y,theta:e.theta}])}function lf(i,e){const t=i.segments.at(-1),n=t.at(-1);(n.x!==e.x||n.y!==e.y)&&t.push({t:e.gameTime,x:e.x,y:e.y,theta:e.theta})}function Yv(i,e){const t=i.segments.flatMap((f,p)=>f.map(g=>({...g,s:p}))),n=t[0].t,s=t.at(-1).t,r=n+Math.max(0,Math.min(1,e))*(s-n);let o=0,a=t.length-1;for(;a-o>1;){const f=o+a>>1;t[f].t<=r?o=f:a=f}const l=t[o],u=t[a];if(l.s!==u.s||u.t===l.t||r<=l.t)return{x:l.x,y:l.y,theta:l.theta,t:r};const c=Math.min(1,(r-l.t)/(u.t-l.t)),h=Math.atan2(Math.sin(u.theta-l.theta),Math.cos(u.theta-l.theta));return{x:l.x+(u.x-l.x)*c,y:l.y+(u.y-l.y)*c,theta:l.theta+h*c,t:r}}function cf(i,e={muted:!1,volume:.7}){const t={...i,obstacles:[...i.obstacles,...ic(i)]},n=Uv(t.spawn);return n.state="TITLE",{world:t,ship:n,audio:e,enemies:kv(t.obstacles),projectiles:[],checkpointIndex:-1,readyLeft:0,pausedFrom:null,result:null,zoneIndex:-1,log:Vv(n),stats:{hits:0,maxFullHold:0},items:(t.items??[]).map(s=>({...s,taken:!1})),score:0,combo:0,bestCombo:0,near:{}}}const To=i=>i==="PLAYING"||i==="RESPAWN",qv=i=>To(i)||i==="READY";function jv(i){i.ship.state==="TITLE"&&(i.ship.state="READY",i.readyLeft=Ey)}function Kv(i){qv(i.ship.state)&&(i.pausedFrom=i.ship.state,i.ship.state="PAUSED")}function $v(i){i.ship.state==="PAUSED"&&(i.ship.state=i.pausedFrom)}function Zv(i){return i.ship.state!=="PAUSED"?[]:[uf(i,"restart")]}function uf(i,e){const{ship:t}=i;lf(i.log,t);const{x:n,y:s}=t.checkpoint;return Object.assign(t,{x:n,y:s,theta:0,vx:0,vy:0,omega:0,left:0,right:0,overLeft:0,overRight:0,effectiveLeft:0,effectiveRight:0,disruptedLeft:0,stunnedLeft:0,drunkLeft:0,hiccupAt:1/0,hitCooldown:0,shieldLeft:0,boostLeft:0,agonyLeft:0,state:"RESPAWN",invulnerableLeft:gy}),i.combo=0,i.near={},zv(i.enemies,i.projectiles),Xv(i.log,t),ur(i.log,t,"respawn",{reason:e}),{type:"respawn",reason:e,checkpointId:i.world.checkpoints[i.checkpointIndex]?.id??"spawn",x:n,y:s}}function Jv(i){return i.ship.state!=="PAUSED"?[]:[hf(i,"quit")]}function hf(i,e){const{ship:t}=i;return lf(i.log,t),ur(i.log,t,e==="hospital"?"hospital":"quit"),t.state="FINISHED",e==="hospital"&&(i.score+=Math.max(0,Math.round((300-t.gameTime)*10))),i.result={outcome:e,time:t.gameTime,distance:t.distance,overheats:t.overheats,hits:i.stats.hits,maxFullHold:i.stats.maxFullHold,score:i.score,bestCombo:i.bestCombo},{type:"finish",outcome:e,x:t.x,y:t.y}}function ff(i,e,t){const{ship:n}=i;if(n.state==="READY")return i.readyLeft-=t,i.readyLeft>0?[]:(Nv(n),[{type:"start",x:n.x,y:n.y}]);const s=Qv(i,e,t),{log:r,stats:o}=i;o.maxFullHold=Math.max(o.maxFullHold,n.overLeft,n.overRight);for(const u of s)u.type==="overheat"&&ur(r,n,"overheat"),u.type==="hit"&&(o.hits++,ur(r,n,`${u.kind}_hit`)),u.type==="checkpoint"&&ur(r,n,"checkpoint",{id:u.id});const a=(i.world.zones??[]).findIndex(u=>n.y>=u.y0&&n.y<u.y1);To(n.state)&&a>=0&&a!==i.zoneIndex&&(i.zoneIndex=a,s.push({type:"zone",id:i.world.zones[a].id,name:i.world.zones[a].name})),To(n.state)&&Wv(r,n);const l=s.findIndex(u=>u.type==="hospital");return l>=0&&(s[l]=hf(i,"hospital")),s}function Qv(i,e,t){const{ship:n,world:s,enemies:r,projectiles:o}=i,a=[],l=Bv(n,e,t);if(l==="overheat"&&(a.push({type:"overheat",x:n.x,y:n.y}),Pa(i,An.overheat,a)),l==="hiccup"&&a.push({type:"hiccup",x:n.x,y:n.y}),!To(n.state))return a;if(n.agonyLeft>0)return n.agonyLeft=Math.max(0,n.agonyLeft-t),n.agonyLeft===0&&a.push(uf(i,"agony")),a;const u=s.hospital;if(Math.hypot(n.x-u.x,n.y-u.y)<=u.radius)return a.push({type:"hospital"}),a;Hv(r,o,n,t),n.hitCooldown=Math.max(0,n.hitCooldown-t);const c=n.state==="RESPAWN"||n.hitCooldown>0||n.stunnedLeft>0,h=(m,d,v,y)=>{La(n,d,Ci,v,y),n.hitCooldown=Sy,!oh(i,m,a)&&(m==="alcohol"?(n.drunkLeft>0||(n.hiccupAt=n.gameTime+In.first),n.drunkLeft=In.time):n.stunnedLeft=El.time,a.push({type:"hit",kind:m,x:n.x,y:n.y,nx:d.nx,ny:d.ny}),ah(i),Pa(i,An[m],a))};for(const m of s.obstacles)if(m.type==="Building"){const d=Gv(n.x,n.y,ui,m.x,m.y,m.hx,m.hy);if(!d)continue;const v=-(n.vx*d.nx+n.vy*d.ny);c||v<El.minImpact?La(n,d,Ci,0,0):h("building",d,va.building,Ma.building)}else if(m.type==="OfficeChair"){const d=Ca(n.x,n.y,ui,m.x,m.y,m.radius);d&&(lh(i,m.id),c?La(n,d,Ci,0,0):h("chair",d,va.chair,Ma.chair))}if(n.state!=="RESPAWN"){for(const m of r){if(m.type!=="SpicyChaser"||n.disruptedLeft>0)continue;const d=Ca(n.x,n.y,ui,m.x,m.y,m.radius);d&&(lh(i,m.id),Object.assign(m,{mode:"cooldown",timer:0}),!oh(i,"spicy",a)&&(n.disruptedLeft=It.disrupt,a.push({type:"hit",kind:"spicy",x:n.x,y:n.y,nx:d.nx,ny:d.ny}),ah(i),Pa(i,An.spicy,a)))}for(let m=o.length-1;m>=0;m--){const d=o[m];if(!Ca(n.x,n.y,ui,d.x,d.y,Ut.shotRadius)){const x=Math.hypot(n.x-d.x,n.y-d.y)-ui-Ut.shotRadius;x<Li.near+.3?d.close=!0:d.close&&!d.scored&&x>(d.lastD??1/0)&&(d.scored=!0,ch(i,Li.dodge_points,"dodge",a)),d.lastD=x;continue}if(o.splice(m,1),c)continue;const y=Math.hypot(d.vx,d.vy)||1;h("alcohol",{nx:d.vx/y,ny:d.vy/y,depth:0},va.alcohol,Ma.alcohol)}}s.checkpoints.forEach((m,d)=>{d>i.checkpointIndex&&Math.hypot(n.x-m.x,n.y-m.y)<=m.radius+by&&(i.checkpointIndex=d,n.checkpoint={x:m.x,y:m.y},a.push({type:"checkpoint",id:m.id,x:n.x,y:n.y}),n.pain=Math.max(0,n.pain-An.bed),i.score+=Li.checkpoint_points)});for(const m of i.items)m.taken||Math.hypot(n.x-m.x,n.y-m.y)>ir.radius+ui||(m.taken=!0,m.kind==="cushion"?n.shieldLeft=ir.cushion:m.kind==="ointment"?n.pain=Math.max(0,n.pain-ir.ointment):m.kind==="ice"?(Object.assign(n,{disruptedLeft:0,stunnedLeft:0,drunkLeft:0,overLeft:0,overRight:0}),n.left=Math.min(n.left,.5),n.right=Math.min(n.right,.5)):m.kind==="suppository"&&(n.boostLeft=ir.boost.time),i.score+=Li.pickup_points,a.push({type:"pickup",kind:m.kind,id:m.id,x:m.x,y:m.y}));const f=Math.hypot(n.vx,n.vy),p=[...s.obstacles.filter(m=>m.type==="OfficeChair"||m.type==="AlcoholTurret"),...r.filter(m=>m.type==="SpicyChaser")];for(const m of p){const d=Math.hypot(n.x-m.x,n.y-m.y)-ui-m.radius,v=i.near[m.id]??={in:!1,touched:!1};d<Li.near?v.in||Object.assign(v,{in:!0,touched:!1}):v.in&&(v.in=!1,!v.touched&&f>Li.minSpeed&&ch(i,Li.near_points,"near",a,m))}const g=s.bounds,_=ui;return n.x<g.minX+_&&(n.x=g.minX+_,n.vx=Math.abs(n.vx)*Ci),n.x>g.maxX-_&&(n.x=g.maxX-_,n.vx=-Math.abs(n.vx)*Ci),n.y<g.minY+_&&(n.y=g.minY+_,n.vy=Math.abs(n.vy)*Ci),n.y>g.maxY-_&&(n.y=g.maxY-_,n.vy=-Math.abs(n.vy)*Ci),a}function Pa(i,e,t){const{ship:n}=i;n.agonyLeft>0||(n.pain=Math.min(1,n.pain+e),n.pain>=1&&(n.stunnedLeft=An.agony+.1,n.agonyLeft=An.agony,n.pain=An.after,t.push({type:"agony",x:n.x,y:n.y})))}function oh(i,e,t){const{ship:n}=i;return n.shieldLeft>0?(n.shieldLeft=0,t.push({type:"block",kind:e,x:n.x,y:n.y}),!0):!1}function ah(i){i.combo=0}function lh(i,e){(i.near[e]??={in:!0,touched:!1}).touched=!0}function ch(i,e,t,n,s=null){const r=e*(i.combo+1);i.score+=r,i.combo++,i.bestCombo=Math.max(i.bestCombo,i.combo),n.push({type:"style",kind:t,combo:i.combo,points:r,x:i.ship.x,y:i.ship.y,id:s?.id})}const et="#1B2333",wl="#26304A",ft="#FFF4DC",En="#4FD1B0",Kt="#FFD25A",Mt="#FF6B5A",Zs="#F28AA5",eM="#7CC8F0",hr="rgba(255, 244, 220, 0.55)",tM={cushion:["방석","충돌 1번 막기","#F7A8C4"],ointment:["연고","통증 회복","#4FD1B0"],ice:["얼음팩","상태이상 해제","#9FE3FF"],suppository:["좌약","3초 고속 돌진","#FFD25A"]},df='Galmuri11, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',Je=(i,e,t,n)=>({x:Math.round(i),y:Math.round(e),w:Math.round(t),h:Math.round(n)}),hs=(i,e,t)=>i&&e>=i.x&&e<i.x+i.w&&t>=i.y&&t<i.y+i.h,pf=()=>performance.now()/1e3,Js=typeof Image>"u"?null:Object.assign(new Image,{src:"./logo.webp"}),Rl=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function wn(i,e,t){const n=Math.min(t,e.w/2,e.h/2);i.beginPath(),i.moveTo(e.x+n,e.y),i.arcTo(e.x+e.w,e.y,e.x+e.w,e.y+e.h,n),i.arcTo(e.x+e.w,e.y+e.h,e.x,e.y+e.h,n),i.arcTo(e.x,e.y+e.h,e.x,e.y,n),i.arcTo(e.x,e.y,e.x+e.w,e.y,n),i.closePath()}function St(i,e,t,n,{line:s=et,rad:r=8,shadow:o=!0,lw:a=2}={}){o&&(i.fillStyle="rgba(10, 14, 24, 0.45)",wn(i,{...t,y:t.y+3*e},r*e),i.fill()),wn(i,t,r*e),n&&(i.fillStyle=n,i.fill()),s&&(i.strokeStyle=s,i.lineWidth=a*e,i.stroke())}function je(i,e,t,n,s,{size:r=12,color:o=ft,outline:a=et,align:l="center",shadow:u=null}={}){i.font=`${Math.round(r*e)}px ${df}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",u&&(i.fillStyle=u,i.fillText(t,n,s+Math.max(2,r*.12)*e)),a&&(i.strokeStyle=a,i.lineWidth=Math.max(2,r*.25)*e,i.strokeText(t,n,s)),i.fillStyle=o,i.fillText(t,n,s)}const sr=(i,e,t,n)=>(i.font=`${Math.round(n*e)}px ${df}`,i.measureText(t).width),Un={pause(i,e,t,n,s){i.fillStyle=s,i.fillRect(e-n*.6,t-n*.7,n*.42,n*1.4),i.fillRect(e+n*.18,t-n*.7,n*.42,n*1.4)},play(i,e,t,n,s){i.fillStyle=s,i.beginPath(),i.moveTo(e-n*.5,t-n*.7),i.lineTo(e+n*.7,t),i.lineTo(e-n*.5,t+n*.7),i.closePath(),i.fill()},retry(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=n*.3,i.beginPath(),i.arc(e,t,n*.6,-.4,Math.PI*1.45),i.stroke(),i.fillStyle=s,i.beginPath(),i.moveTo(e+n*.95,t-n*.55),i.lineTo(e+n*.25,t-n*.55),i.lineTo(e+n*.6,t+n*.05),i.closePath(),i.fill()},cross(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=n*.32,i.lineCap="round",i.beginPath(),i.moveTo(e-n*.55,t-n*.55),i.lineTo(e+n*.55,t+n*.55),i.moveTo(e+n*.55,t-n*.55),i.lineTo(e-n*.55,t+n*.55),i.stroke(),i.lineCap="butt"},speaker(i,e,t,n,s,r){i.fillStyle=s,i.beginPath(),i.moveTo(e-n*.8,t-n*.3),i.lineTo(e-n*.4,t-n*.3),i.lineTo(e+n*.1,t-n*.75),i.lineTo(e+n*.1,t+n*.75),i.lineTo(e-n*.4,t+n*.3),i.lineTo(e-n*.8,t+n*.3),i.closePath(),i.fill(),r?Un.cross(i,e+n*.6,t,n*.55,Mt):(i.strokeStyle=s,i.lineWidth=n*.18,i.beginPath(),i.arc(e+n*.15,t,n*.45,-.9,.9),i.stroke(),i.beginPath(),i.arc(e+n*.15,t,n*.8,-.8,.8),i.stroke())},lock(i,e,t,n,s){i.fillStyle=s,i.fillRect(e-n*.6,t-n*.1,n*1.2,n*.85),i.strokeStyle=s,i.lineWidth=n*.25,i.beginPath(),i.arc(e,t-n*.15,n*.4,Math.PI,0),i.stroke()},hospital(i,e,t,n){i.fillStyle=ft,i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fill(),i.strokeStyle=et,i.lineWidth=n*.22,i.stroke(),i.fillStyle=Mt,i.fillRect(e-n*.18,t-n*.6,n*.36,n*1.2),i.fillRect(e-n*.6,t-n*.18,n*1.2,n*.36)},frog(i,e,t,n){i.fillStyle="#7BC67E",i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fill(),i.strokeStyle=et,i.lineWidth=n*.28,i.stroke();for(const s of[-1,1])i.fillStyle=ft,i.beginPath(),i.arc(e+s*n*.42,t-n*.3,n*.3,0,Math.PI*2),i.fill(),i.fillStyle=et,i.fillRect(e+s*n*.42-n*.1,t-n*.4,n*.2,n*.2)}};function uh(i,e,t,n,s){const r=i.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.hypot(e,t)/2);r.addColorStop(0,`rgba(${n}, 0)`),r.addColorStop(1,`rgba(${n}, ${s})`),i.fillStyle=r,i.fillRect(0,0,e,t)}function mf(i,e,t,n,s){let r=i.createLinearGradient(0,0,0,n);r.addColorStop(0,"rgba(15, 20, 32, 0.55)"),r.addColorStop(1,"rgba(15, 20, 32, 0)"),i.fillStyle=r,i.fillRect(0,0,e,n),r=i.createLinearGradient(0,t-s,0,t),r.addColorStop(0,"rgba(15, 20, 32, 0)"),r.addColorStop(1,"rgba(15, 20, 32, 0.6)"),i.fillStyle=r,i.fillRect(0,t-s,e,s)}function nM(i,e,t,n,s=null,r=null,o=!1,a=null,l={left:!1,right:!1},u=null){const c=e/360,{ship:h,world:f}=n;if(o)return i.fillStyle="rgba(255, 244, 220, 0.85)",i.fillRect(0,0,e,t),{};mf(i,e,t,70*c,110*c);const p=n.fx?.vignette,g=p?p.until-h.gameTime:0;g>0?uh(i,e,t,"255, 90, 60",Math.min(1,g/.25)*.75):h.drunkLeft>0&&uh(i,e,t,"242, 138, 165",.35+.1*Math.sin(h.gameTime*3));const _=Je(8*c,8*c,32*c,32*c);St(i,c,_,ft),Un.pause(i,_.x+_.w/2,_.y+_.h/2,9*c,et);const m=f.spawn.y,d=f.hospital.y,v=U=>Math.max(0,Math.min(1,(U-m)/(d-m))),y=Je(50*c,17*c,270*c,14*c);St(i,c,y,"rgba(27, 35, 51, 0.75)",{rad:7});const x=v(h.y);x>.01&&(wn(i,Je(y.x+2*c,y.y+2*c,(y.w-4*c)*x,y.h-4*c),5*c),i.fillStyle=En,i.fill()),f.checkpoints.forEach((U,G)=>{const I=y.x+y.w*v(U.y),P=y.y+y.h/2,F=G<=n.checkpointIndex,Y=4.5*c;i.fillStyle=F?ft:Kt,i.strokeStyle=et,i.lineWidth=1.5*c,i.beginPath(),i.moveTo(I,P-Y),i.lineTo(I+Y,P),i.lineTo(I,P+Y),i.lineTo(I-Y,P),i.closePath(),i.fill(),i.stroke()}),Un.hospital(i,y.x+y.w+12*c,y.y+y.h/2,11*c),Un.frog(i,y.x+y.w*x,y.y+y.h/2,8*c),je(i,c,Rl(h.gameTime),y.x+2*c,y.y+y.h+13*c,{align:"left",color:ft}),je(i,c,`${(n.score??0).toLocaleString()}점`,y.x+52*c,y.y+y.h+13*c,{align:"left",color:Kt});const b=h.pain??0,T=Je(196*c,38*c,120*c,12*c),L=b>.7?1+.15*Math.sin(h.gameTime*12):1;if(je(i,c,"통증",T.x-6*c,T.y+T.h/2,{align:"right",color:b>.7?Mt:ft}),St(i,c,T,"rgba(27, 35, 51, 0.8)",{rad:6,shadow:!1,lw:1.5}),b>.01&&(wn(i,Je(T.x+2*c,T.y+2*c,(T.w-4*c)*b,T.h-4*c),4*c),i.fillStyle=b>.7?Mt:b>.4?"#FF9F8F":Zs,i.globalAlpha=Math.min(1,L),i.fill(),i.globalAlpha=1),[[h.shieldLeft,"방석",Zs],[h.boostLeft,"부스터",Kt]].filter(([U])=>U>0).forEach(([U,G,I],P)=>{const F=Je(T.x+P*62*c,T.y+16*c,58*c,16*c);St(i,c,F,"rgba(27, 35, 51, 0.85)",{line:I,rad:8,shadow:!1,lw:1.5}),je(i,c,`${G} ${Math.ceil(U)}`,F.x+F.w/2,F.y+F.h/2,{color:I,outline:null})}),(n.combo??0)>=2){const U=h.gameTime-(n.lastStyleAt??-9),G=U<.15?1.35-U*2.3:1;i.save(),i.translate(e-60*c,132*c),i.rotate(.06),i.scale(G,G),je(i,c,`콤보 x${n.combo}`,0,0,{size:24,color:Kt,shadow:Mt}),i.restore()}const{distance:S}=Lv(n);if(u){const U=u.kind==="checkpoint"?Kt:Mt,G=h.gameTime,I={x0:22*c,y0:64*c,x1:e-22*c,y1:t-104*c};if(u.visible&&u.x>I.x0&&u.x<I.x1&&u.y>I.y0&&u.y<I.y1){const F=u.y-(46+Math.abs(Math.sin(G*5))*8)*c;i.fillStyle=U,i.strokeStyle=et,i.lineWidth=2*c,i.beginPath(),i.moveTo(u.x-10*c,F-8*c),i.lineTo(u.x+10*c,F-8*c),i.lineTo(u.x,F+6*c),i.closePath(),i.fill(),i.stroke(),je(i,c,u.kind==="checkpoint"?"여기서 쉬기!":"병원!",u.x,F-20*c,{color:U})}else{const F=e/2,Y=t*.58,he=u.x-F,fe=u.y-Y,H=Math.min(he>0?(I.x1-F)/he:he<0?(I.x0-F)/he:1/0,fe>0?(I.y1-Y)/fe:fe<0?(I.y0-Y)/fe:1/0),ee=F+he*H,X=Y+fe*H,ne=Math.atan2(fe,he),oe=1+.12*Math.sin(G*6);i.save(),i.translate(ee,X),i.rotate(ne),i.scale(oe,oe),i.fillStyle=U,i.strokeStyle=et,i.lineWidth=2*c,i.beginPath(),i.moveTo(14*c,0),i.lineTo(-6*c,-11*c),i.lineTo(-2*c,0),i.lineTo(-6*c,11*c),i.closePath(),i.fill(),i.stroke(),i.restore(),je(i,c,`${Math.round(S)}m`,ee-Math.cos(ne)*26*c,X-Math.sin(ne)*18*c,{color:U})}}if(h.agonyLeft>0){const U=Math.sin(h.gameTime*60)*3*c;je(i,c,"으아악!!",e/2+U,230*c,{size:48,color:Mt,shadow:et}),je(i,c,"엉덩이가 터질 것 같아… 침대로 후송!",e/2,270*c,{color:ft})}if(s){const U=Math.min(1,s.left/.25,(1-s.left)/.15+.2);i.globalAlpha=Math.max(0,Math.min(1,U));const G=150*c,I=Math.max(160*c,sr(i,c,s.name,24)+60*c);St(i,c,Je(e/2-I/2,G-26*c,I,52*c),"rgba(27, 35, 51, 0.88)",{line:Kt,rad:12}),s.count&&je(i,c,`구역 ${s.index+1} / ${s.count}`,e/2,G-12*c,{color:Kt}),je(i,c,s.name,e/2,G+9*c,{size:24}),i.globalAlpha=1}if(r){const U={danger:Mt,good:En,info:"rgba(27, 35, 51, 0.88)"}[r.tone]??et,G=r.tone==="good"?et:ft,I=r.tone==="good"?null:et,P=sr(i,c,r.text,12)+32*c,F=Je(e/2-P/2,92*c,P,28*c);St(i,c,F,U,{rad:14}),je(i,c,r.text,e/2,F.y+F.h/2,{color:G,outline:I})}const M=n.painFlash,w=n.head;if(M&&w&&h.state!=="PAUSED"){const U=h.gameTime-M.at;if(U>=0&&U<1.2){i.globalAlpha=U>.9?(1.2-U)/.3:1;const G=54*c,I=8*c,P=w.x-G/2,F=w.y-16*c,Y=G-4*c,he=i.globalAlpha;St(i,c,Je(P,F,G,I),"rgba(27, 35, 51, 0.9)",{rad:4,shadow:!1,lw:1.5});const fe=M.to,H=Math.max(0,1-U/.5);i.fillStyle=fe>.7?Mt:fe>.4?"#FF9F8F":Zs,fe>.005&&i.fillRect(P+2*c,F+2*c,Y*fe,I-4*c);const ee=Math.min(M.from,fe),X=Math.max(M.from,fe);i.globalAlpha=he*H,i.fillStyle=fe>M.from?"#FFFFFF":En,i.fillRect(P+2*c+Y*ee,F+2*c,Y*(X-ee),I-4*c),i.globalAlpha=he,fe>M.from&&je(i,c,`+${Math.round((fe-M.from)*100)}`,P+G+4*c,F+I/2,{align:"left",color:Mt}),i.globalAlpha=1}}for(const U of n.itemTags??[]){const G=Math.max(0,Math.min(1,(U.dist-2.5)/1.5));if(G<=0)continue;const[I,P,F]=tM[U.kind];i.globalAlpha=G;const Y=Math.max(sr(i,c,I,12),sr(i,c,P,12))+14*c,he=Je(U.x-Y/2,U.y-40*c,Y,32*c);St(i,c,he,"rgba(27, 35, 51, 0.85)",{line:F,rad:8,shadow:!1,lw:1.5}),je(i,c,I,U.x,he.y+9*c,{color:F,outline:null}),je(i,c,P,U.x,he.y+23*c,{color:ft,outline:null}),i.globalAlpha=1}if(a){const U=Math.max(0,.5-(a.left??.5)),G=U<.08?.6+5*U:1;i.save(),i.translate(a.x,a.y-34*c),i.rotate(-.08),i.scale(G,G),je(i,c,a.text,0,0,{size:24,color:Kt,shadow:Mt}),i.restore()}const k=Er(h)!==null,B=!k&&h.drunkLeft>0,z=h.disruptedLeft>0?Math.round(Math.sin(h.gameTime*50)*3*c):0,V=Math.floor(h.gameTime*8)%2===0;for(const[U,G,I,P]of[["left",10,"왼쪽",-1],["right",186,"오른쪽",1]]){const F=l[U]&&!k,Y=h[U],he=h[U==="left"?"overLeft":"overRight"]>0,fe=Je(G*c+z,t-(F?74:72)*c,164*c,62*c);St(i,c,fe,F?En:"rgba(27, 35, 51, 0.72)",{line:k?Mt:B?Zs:F?et:"rgba(255, 244, 220, 0.7)",rad:12,lw:k||B?3:2});const H=fe.x+fe.w/2,ee=fe.y+19*c,X=I,ne=F?et:B?Zs:ft;if(k)Un.lock(i,fe.x+18*c,ee,8*c,Mt);else{i.fillStyle=ne;const A=fe.x+(P<0?18:fe.w-18)*c;i.beginPath(),i.moveTo(A+P*6*c,ee),i.lineTo(A-P*4*c,ee-6*c),i.lineTo(A-P*4*c,ee+6*c),i.closePath(),i.fill()}je(i,c,X,H,ee,{color:ne,outline:F?null:et});const oe=Je(fe.x+12*c,fe.y+36*c,fe.w-24*c,14*c);wn(i,oe,7*c),i.fillStyle=F?"rgba(27, 35, 51, 0.35)":"rgba(10, 14, 24, 0.6)",i.fill(),Y>.01&&(wn(i,Je(oe.x+2*c,oe.y+2*c,(oe.w-4*c)*Y,oe.h-4*c),5*c),i.fillStyle=he?V?Mt:ft:Y>=.8?Kt:F?ft:En,i.fill())}return{pause:_}}function iM(i,e,t){const n=e/360,s=pf();i.fillStyle="rgba(15, 20, 32, 0.35)",i.fillRect(0,0,e,t),mf(i,e,t,260*n,240*n);const r=Math.sin(s*2)*4*n;if(Js?.complete&&Js.naturalWidth){const u=320*n,c=u*Js.naturalHeight/Js.naturalWidth;i.imageSmoothingEnabled=!0,i.drawImage(Js,e/2-u/2,165*n-c/2+r,u,c)}else je(i,n,"치루켓",e/2,170*n+r,{size:48,color:ft,shadow:Mt});je(i,n,"엉덩이 로켓 타고 병원까지!",e/2,292*n,{color:Kt});const o=1+Math.sin(s*4)*.035,a=196*n*o,l=48*n*o;St(i,n,Je(e/2-a/2,430*n-l/2,a,l),En,{rad:24}),je(i,n,"탭해서 출발",e/2,430*n,{size:24,color:et,outline:null});for(const[u,c,h]of[["A","왼쪽 엉덩이",110],["D","오른쪽 엉덩이",250]])St(i,n,Je((h-16)*n,498*n,32*n,32*n),ft,{rad:6}),je(i,n,u,h*n,514*n,{color:et,outline:null}),je(i,n,c,h*n,548*n,{color:ft});return je(i,n,"양쪽 = 전진 · 한쪽 = 회전 · 화면 아래 좌/우 터치",e/2,580*n,{color:hr,outline:null}),{start:Je(0,0,e,t)}}function sM(i,e,t,n){const s=e/360,r=Math.ceil(n.readyLeft),o=n.readyLeft-Math.floor(n.readyLeft),a=n.world.zones?.[0]?.name??"",l=sr(i,s,`${a}에서 출발!`,12)+40*s;St(i,s,Je(e/2-l/2,150*s,l,30*s),"rgba(27, 35, 51, 0.88)",{line:Kt,rad:15}),je(i,s,`${a}에서 출발!`,e/2,165*s,{color:Kt});const u=1+Math.max(0,o-.7)*2;return i.save(),i.translate(e/2,236*s),i.scale(u,u),je(i,s,String(Math.max(1,r)),0,0,{size:72,color:ft,shadow:Mt}),i.restore(),{}}function rM(i,e,t,n){const s=e/360;i.fillStyle="rgba(15, 20, 32, 0.62)",i.fillRect(0,0,e,t);const r=Je(36*s,140*s,288*s,340*s);St(i,s,r,et,{line:ft,rad:16,lw:2.5}),St(i,s,Je(r.x+54*s,r.y-18*s,180*s,36*s),Kt,{rad:18}),je(i,s,"일시정지",e/2,r.y,{size:24,color:et,outline:null});const o=236*s,a=46*s,l=e/2-o/2,u={resume:Je(l,r.y+40*s,o,a),restart:Je(l,r.y+98*s,o,a),quit:Je(l,r.y+156*s,o,a)},c=(d,v,y,x,b)=>{St(i,s,d,v,{rad:12}),Un[y](i,d.x+26*s,d.y+d.h/2,9*s,b),je(i,s,x,d.x+d.w/2+12*s,d.y+d.h/2,{size:24,color:b,outline:null})};c(u.resume,En,"play","계속하기",et),c(u.restart,ft,"retry","체크포인트로",et),c(u.quit,Mt,"cross","그만하기",ft);const h=r.y+232*s,f=44*s,p=n.audio.muted?0:n.audio.volume;je(i,s,"소리",r.x+24*s,h-14*s,{align:"left",color:hr,outline:null}),je(i,s,`${Math.round(p*100)}%`,r.x+r.w-24*s,h-14*s,{align:"right",color:hr,outline:null}),u.mute=Je(l,h,52*s,f),St(i,s,u.mute,n.audio.muted?wl:ft,{rad:10,line:n.audio.muted?Mt:et}),Un.speaker(i,u.mute.x+u.mute.w/2,h+f/2,10*s,n.audio.muted?Mt:et,n.audio.muted);const g=Je(l+72*s,h+f/2-6*s,o-84*s,12*s);u.volume={...Je(g.x-12*s,h-4*s,g.w+24*s,f+8*s),track:g},wn(i,g,6*s),i.fillStyle=wl,i.fill(),i.strokeStyle="rgba(255, 244, 220, 0.5)",i.lineWidth=1.5*s,i.stroke(),p>.01&&(wn(i,Je(g.x,g.y,g.w*p,g.h),6*s),i.fillStyle=En,i.fill());const _=g.x+g.w*p,m=g.y+g.h/2;return i.fillStyle="rgba(10, 14, 24, 0.45)",i.beginPath(),i.arc(_,m+3*s,13*s,0,Math.PI*2),i.fill(),i.fillStyle=ft,i.beginPath(),i.arc(_,m,13*s,0,Math.PI*2),i.fill(),i.strokeStyle=et,i.lineWidth=2*s,i.stroke(),je(i,s,"Esc 계속 · R 다시 · Q 그만 · ←→ 소리",e/2,r.y+r.h-18*s,{color:hr,outline:null}),u}function oM(i){if(i.outcome!=="hospital")return null;const e=i.time+i.hits*3+i.overheats*5;return e<170?"S":e<230?"A":e<320?"B":"C"}function aM(i,e,t,n){const s=e/360,{result:r,log:o,world:a}=n;i.fillStyle="rgba(15, 20, 32, 0.9)",i.fillRect(0,0,e,t);const l=r.outcome==="hospital",u=oM(r);if(St(i,s,Je(48*s,22*s,220*s,44*s),l?En:Mt,{rad:22}),je(i,s,l?"병원 도착!":"중도 포기",158*s,44*s,{size:24,color:l?et:ft,outline:l?null:et}),u){const I=304*s,P=44*s;i.fillStyle="rgba(10, 14, 24, 0.45)",i.beginPath(),i.arc(I,P+3*s,28*s,0,Math.PI*2),i.fill(),i.fillStyle={S:Kt,A:En,B:eM,C:ft}[u],i.beginPath(),i.arc(I,P,28*s,0,Math.PI*2),i.fill(),i.strokeStyle=et,i.lineWidth=2.5*s,i.stroke(),je(i,s,u,I,P+1*s,{size:36,color:et,outline:null})}const c=o.events.filter(I=>I.type==="checkpoint").length;[["점수",(r.score??0).toLocaleString()],["시간",Rl(r.time)],["최고 콤보",`x${r.bestCombo??0}`],["체크포인트",`${c} / ${a.checkpoints.length}`],["충돌",String(r.hits)],["과열",String(r.overheats)]].forEach(([I,P],F)=>{const Y=Je((14+F%3*112)*s,(82+Math.floor(F/3)*58)*s,108*s,52*s);St(i,s,Y,wl,{line:"rgba(255, 244, 220, 0.35)",rad:10,shadow:!1}),je(i,s,I,Y.x+Y.w/2,Y.y+12*s,{color:hr,outline:null}),je(i,s,P,Y.x+Y.w/2,Y.y+35*s,{size:24,color:ft,outline:null})});const f=a.bounds,p=Je(14*s,204*s,332*s,346*s),g=pf();n.replayStart??=g;const _=Math.max(.1,o.segments.at(-1).at(-1).t-o.segments[0][0].t),m=Math.min(14,Math.max(6,_/15)),v=(g-n.replayStart)%(m+1.5),y=Math.min(1,v/m),x=Yv(o,y),b=p.w/(f.maxX-f.minX),T=p.h/b,L=Math.max(f.minY+T/2,Math.min(f.maxY-T/2,x.y)),C=(I,P)=>[p.x+(I-f.minX)*b,p.y+p.h/2-(P-L)*b];St(i,s,p,"#202A3E",{line:ft,rad:12}),i.save(),wn(i,p,12*s),i.clip();const S=(I,P,F,Y,he)=>{const[fe,H]=C(I,Y),[ee,X]=C(F,P);i.fillStyle=he,i.fillRect(fe,H,ee-fe,X-H)};for(const I of a.roads??[])S(I.x0,I.y0,I.x1,I.y1,"rgba(255, 244, 220, 0.10)");for(const I of a.obstacles.filter(P=>P.type==="Building"))S(I.x-I.hx,I.y-I.hy,I.x+I.hx,I.y+I.hy,"rgba(255, 244, 220, 0.5)");i.lineWidth=2*s,i.lineJoin="round",i.strokeStyle="rgba(79, 209, 176, 0.3)";for(const I of o.segments)i.beginPath(),I.forEach((P,F)=>i[F?"lineTo":"moveTo"](...C(P.x,P.y))),i.stroke();i.strokeStyle="rgba(61, 220, 132, 0.9)",i.lineWidth=2.5*s;for(const I of o.segments){const P=I.filter(F=>F.t<=x.t&&F.t>=x.t-3);P.length&&(x.t-P.at(-1).t<.3&&P.push(x),i.beginPath(),P.forEach((F,Y)=>i[Y?"lineTo":"moveTo"](...C(F.x,F.y))),i.stroke())}const M=(I,P,F,Y,he)=>{const[fe,H]=C(I,P);i.beginPath(),i.arc(fe,H,F,0,Math.PI*2),Y&&(i.fillStyle=Y,i.fill()),he&&(i.strokeStyle=he,i.lineWidth=2*s,i.stroke())},w=new Set(o.events.filter(I=>I.type==="checkpoint"&&I.t<=x.t).map(I=>I.id));for(const I of a.checkpoints){const P=w.has(I.id);M(I.x,I.y,I.radius*b,P?"rgba(127, 224, 192, 0.35)":"rgba(255, 210, 90, 0.25)",P?"#7FE0C0":Kt)}{const[I,P]=C(a.hospital.x,a.hospital.y);Un.hospital(i,I,P,Math.max(8*s,a.hospital.radius*b*.7))}const k=.4*_/m;for(const I of o.events){if(!(I.type==="overheat"||I.type.endsWith("_hit"))||I.t>x.t)continue;const P=x.t-I.t;P<k?M(I.x,I.y,(4+10*P/k)*s,null,Mt):M(I.x,I.y,2.5*s,Mt)}const[B,z]=C(x.x,x.y),V=7*s;i.translate(B,z),i.rotate(x.theta),i.beginPath(),i.moveTo(0,-V*1.3),i.lineTo(V*.85,V*.8),i.lineTo(-V*.85,V*.8),i.closePath(),i.fillStyle="#3DDC84",i.fill(),i.strokeStyle=et,i.lineWidth=1.5*s,i.stroke(),i.restore();const U=Je(p.x+10*s,p.y+p.h-16*s,p.w-20*s,6*s);wn(i,U,3*s),i.fillStyle="rgba(255, 244, 220, 0.2)",i.fill(),wn(i,Je(U.x,U.y,U.w*y,U.h),3*s),i.fillStyle="#3DDC84",i.fill(),St(i,s,Je(p.x+p.w-70*s,p.y+8*s,62*s,24*s),"rgba(27, 35, 51, 0.85)",{line:null,rad:12,shadow:!1}),Un.play(i,p.x+p.w-56*s,p.y+20*s,6*s,"#3DDC84"),je(i,s,Rl(x.t),p.x+p.w-16*s,p.y+20*s,{align:"right",outline:null});const G=Je(e/2-100*s,566*s,200*s,50*s);return St(i,s,G,En,{rad:25}),Un.retry(i,G.x+30*s,G.y+G.h/2,10*s,et),je(i,s,"다시 하기",e/2+12*s,G.y+G.h/2,{size:24,color:et,outline:null}),{again:G}}function lM(i=()=>{const e=globalThis.AudioContext??globalThis.webkitAudioContext;return e?new e:null}){let e=null,t=null,n=[],s=null;const r=new Set;function o(){if(t){t.gain.cancelScheduledValues(e.currentTime),t.gain.setValueAtTime(0,e.currentTime);for(const c of r)c.stop(e.currentTime);r.clear()}}function a(){try{if(!e){if(e=i(),!e)return;t=e.createGain(),t.gain.value=0,t.connect(e.destination);const c=e.createBuffer(1,e.sampleRate,e.sampleRate),h=c.getChannelData(0);for(let f=0;f<h.length;f++)h[f]=Math.random()*2-1;n=[-.3,.3].map(f=>{const p=e.createBufferSource(),g=e.createBiquadFilter(),_=e.createGain(),m=e.createOscillator(),d=e.createGain(),v=e.createStereoPanner();return p.buffer=c,p.loop=!0,g.type="bandpass",g.Q.value=.7,_.gain.value=0,d.gain.value=0,m.type="triangle",v.pan.value=f,p.connect(g).connect(_).connect(v),m.connect(d).connect(v),v.connect(t),p.start(),m.start(),{filter:g,gain:_,tone:m,toneGain:d}})}(e.state==="suspended"||e.state==="interrupted")&&e.resume().catch(()=>{})}catch{e&&e.close().catch(()=>{}),e=t=null,n=[],r.clear()}}function l(c,h,f,p,g,_="triangle"){if(r.size>=12)return;const m=e.currentTime+f,d=e.createOscillator(),v=e.createGain();d.type=_,d.frequency.setValueAtTime(c,m),d.frequency.exponentialRampToValueAtTime(h,m+p),v.gain.setValueAtTime(0,m),v.gain.linearRampToValueAtTime(g,m+.008),v.gain.exponentialRampToValueAtTime(1e-4,m+p),d.connect(v).connect(t),r.add(d),d.onended=()=>{r.delete(d),d.disconnect(),v.disconnect()},d.start(m),d.stop(m+p)}function u(c,h,f,p=[],g=!0){if(!t)return;(c!==s||p.some(d=>d.type==="respawn"))&&o(),s=c;const _=c.state==="PLAYING"||c.state==="RESPAWN";if(!g||!_||f.muted){o();return}const m=e.currentTime;t.gain.setTargetAtTime(.65*Math.max(0,Math.min(1,f.volume)),m,.025);for(const[d,v]of["L","R"].entries()){const y=Math.max(0,Math.min(1,h[v].effective)),x=n[d],T=1+(c.disruptedLeft>0?.25:.05)*Math.sin(c.gameTime*28+d*2.1);x.filter.frequency.setTargetAtTime(350+y*1100,m,.035),x.gain.gain.setTargetAtTime(y*.15*T,m,.035),x.tone.frequency.setTargetAtTime(65+y*85*T,m,.035),x.toneGain.gain.setTargetAtTime(y*.035,m,.035)}if(e.state==="running"){for(const d of p.slice(-4))if(d.type==="hiccup"&&l(420,980,0,.13,.17,"square"),d.type==="agony"&&(l(880,220,0,.6,.22,"sawtooth"),l(660,180,.05,.55,.12,"square")),d.type==="checkpoint")[523.25,659.25,783.99].forEach((v,y)=>l(v,v,y*.09,.19,.16));else if(d.type==="hit"){const v={chair:210,building:115,alcohol:420,spicy:630}[d.kind];l(v,v*(d.kind==="spicy"?1.6:.3),0,.16,.2,d.kind==="alcohol"?"sine":"triangle")}}}return{unlock:a,update:u,silence:o}}const xi=document.querySelector("#game"),rc=document.querySelector("#game-frame"),$n=document.querySelector("#loading");document.fonts?.load("12px Galmuri11").catch(()=>{});let ao=10;const gf=i=>{!$n?.isConnected||$n.dataset.failed||(ao=Math.max(ao,Math.min(99,Math.round(i))),$n.querySelector("p").textContent=`로딩 중… ${ao}%`,$n.querySelector(".loading-bar i").style.width=`${ao}%`)};gf(10);Kl.onProgress=(i,e,t)=>gf(10+89*e/t);Kl.onLoad=()=>{$n?.isConnected&&!$n.dataset.failed&&($n.querySelector("p").textContent="도시 짓는 중… 99%")};for(const i of["contextmenu","selectstart","dragstart"])rc.addEventListener(i,e=>e.preventDefault());const Tr=lM();rc.addEventListener("pointerdown",i=>{i.isTrusted&&Tr.unlock()},{capture:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&Tr.silence()});window.addEventListener("pagehide",()=>Tr.silence());const Ln=new URLSearchParams(location.search),Ia=Ln.has("debug");let yi=No[Ln.get("res")]?Ln.get("res"):yy,Cs=tc.includes(+Ln.get("angle"))?+Ln.get("angle"):_y,fr=Fo.includes(+Ln.get("zoom"))?+Ln.get("zoom"):vy;const _f=()=>Ln.has("seed")?+Ln.get("seed"):Math.floor(Math.random()*2**31);let xs=rf(_f(),Zh);const qi=await Dv(xi,xs);let _o=["pixel","soft","clean","color"].includes(Ln.get("style"))?Ln.get("style"):xy;const Gi=(i,e,t=fr,n=_o)=>{yi=String(i),Cs=e,fr=t,_o=n,qi.setView(yi,Cs,fr,_o)};Gi(yi,Cs,fr,_o);let we=cf(xs);const Ls={left:new Set,right:new Set},Ps={left:!1,right:!1},zi=()=>{Ls.left.clear(),Ls.right.clear(),Ps.left=Ps.right=!1},oc=()=>({left:Ps.left||Ls.left.size>0,right:Ps.right||Ls.right.size>0});let Vi=[],dr=[],Wi=null,Ht={},ki=null,Hi={},Ao=0,hn=null;const At={start:()=>jv(we),pause:()=>{Kv(we),zi()},resume:()=>$v(we),restart:()=>{Vi.push(...Zv(we)),Hi={},hn=null,Ao=0,zi()},quit:()=>{Vi.push(...Jv(we)),zi()},newGame:async()=>{xs=rf(_f(),Zh),await qi.setWorld(xs),we=cf(xs,we.audio),ki=null,Hi={},hn=null,Ao=0,Vi=[],dr=[],zi()},setMuted:i=>{we.audio.muted=i},setVolume:i=>{we.audio.volume=Math.max(0,Math.min(1,i)),we.audio.volume>0&&(we.audio.muted=!1)}};for(const i of["left","right"]){const e=document.querySelector(`#${i}`);e.addEventListener("pointerdown",t=>{t.preventDefault(),e.setPointerCapture(t.pointerId),Ls[i].add(t.pointerId)});for(const t of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(t,n=>Ls[i].delete(n.pointerId))}let wo=null;xi.addEventListener("pointermove",i=>{if(i.pointerId!==wo||!Ht.volume)return;const e=xi.getBoundingClientRect(),t=(i.clientX-e.left)/e.width*qi.size[0];At.setVolume((t-Ht.volume.track.x)/Ht.volume.track.w)});for(const i of["pointerup","pointercancel"])xi.addEventListener(i,e=>{e.pointerId===wo&&(wo=null)});xi.addEventListener("pointerdown",i=>{const e=xi.getBoundingClientRect(),[t,n]=qi.size,s=(i.clientX-e.left)/e.width*t,r=(i.clientY-e.top)/e.height*n,o=we.ship.state;if(o==="TITLE"&&hs(Ht.start,s,r))At.start();else if(o==="PAUSED"){for(const a of["resume","restart","quit"])hs(Ht[a],s,r)&&At[a]();if(hs(Ht.mute,s,r)&&At.setMuted(!we.audio.muted),hs(Ht.volume,s,r)){try{xi.setPointerCapture(i.pointerId)}catch{}wo=i.pointerId,At.setVolume((s-Ht.volume.track.x)/Ht.volume.track.w)}}else o==="FINISHED"&&hs(Ht.again,s,r)?At.newGame():hs(Ht.pause,s,r)&&At.pause()});window.addEventListener("keydown",i=>{i.isTrusted&&!i.repeat&&Tr.unlock();const e=i.key.toLowerCase(),t=we.ship.state;(e==="a"||e==="d")&&!i.repeat&&(i.preventDefault(),Ps[e==="a"?"left":"right"]=!0,t==="TITLE"&&At.start()),e==="escape"&&(t==="PAUSED"?At.resume():At.pause()),(e==="enter"||e===" ")&&(t==="TITLE"?At.start():t==="PAUSED"?At.resume():t==="FINISHED"&&At.newGame()),t==="PAUSED"&&e==="r"&&At.restart(),t==="PAUSED"&&e==="q"&&At.quit(),t==="PAUSED"&&(e==="arrowleft"||e==="arrowright")&&At.setVolume(we.audio.volume+(e==="arrowleft"?-.1:.1)),Ia&&"123".includes(e)&&Gi(yi,tc[+e-1]),Ia&&"456".includes(e)&&Gi(Object.keys(No)[+e-4],Cs),Ia&&"789".includes(e)&&Gi(yi,Cs,Fo[+e-7])});window.addEventListener("keyup",i=>{const e=i.key.toLowerCase();(e==="a"||e==="d")&&(Ps[e==="a"?"left":"right"]=!1)});window.addEventListener("blur",()=>{At.pause(),zi()});document.addEventListener("visibilitychange",()=>{document.hidden&&(At.pause(),zi())});function xf(i,e,t){const n=we.ship.state;if(n==="TITLE")Ht=iM(i,e,t);else if(n==="FINISHED")Ht=aM(i,e,t,we);else{const s=Er(we.ship),r=we.ship.gameTime,o=n!=="PAUSED"&&s!=="runaway"&&hn&&r<hn.until&&Wi?{text:hn.text,left:hn.until-r,...Wi.head}:null,a=o?null:Cv(we,Hi),l=we.world.zones??[],u=!s&&!o&&!a&&ki&&r<ki.until?{name:ki.name,index:l.findIndex(c=>c.name===ki.name),count:l.length,left:ki.until-r}:null;Ht=nM(i,e,t,we,u,a,Ao-- >0,o,oc(),n==="PAUSED"?null:Wi?.target),n==="READY"&&sM(i,e,t,we),n==="PAUSED"&&(Ht={...Ht,...rM(i,e,t,we)})}}const ac=()=>{const{ship:i,audio:e}=we,t=oc();return{ship:{x:i.x,y:i.y,vx:i.vx,vy:i.vy,theta:i.theta,omega:i.omega,state:i.state,invulnerableLeft:i.invulnerableLeft,disruptedLeft:i.disruptedLeft,stunnedLeft:i.stunnedLeft,drunkLeft:i.drunkLeft},nozzle:{L:{p:i.left,effective:i.effectiveLeft,overTime:i.overLeft,fullHoldTime:Tt.overheatAfter},R:{p:i.right,effective:i.effectiveRight,overTime:i.overRight,fullHoldTime:Tt.overheatAfter}},input:{left:t.left,right:t.right},audio:{muted:e.muted,volume:e.volume}}};let hh=0,Da=0,Cl=!1;function yf(i){const e=Cl?0:Math.min(.1,(i-(hh||i))/1e3);hh=i,rc.classList.toggle("menu",["TITLE","PAUSED","FINISHED"].includes(we.ship.state));const t=oc();for(Da+=e;Da>=Tt.fixedDt;Da-=Tt.fixedDt){const r=ff(we,t,Tt.fixedDt);Vi.push(...r),r.some(o=>o.type==="finish")&&zi();for(const o of r)o.type==="zone"&&(ki={name:o.name,until:we.ship.gameTime+1}),o.type==="overheat"&&(Ao=2,Hi.runaway="overheat"),(o.type==="overheat"||o.type==="hit"&&o.kind==="spicy")&&(we.fx={vignette:{until:we.ship.gameTime+.6}}),o.type==="hit"&&o.kind==="spicy"&&(Hi.runaway="spicy"),o.type==="hit"&&(hn=ih[o.kind]&&Hi.status!=="stunned"?{text:ih[o.kind],until:we.ship.gameTime+.5}:null),o.type==="hiccup"&&(hn={text:"딸꾹!",until:we.ship.gameTime+.5}),o.type==="style"&&(hn={text:o.kind==="near"?`아슬! +${o.points}`:`피했다! +${o.points}`,until:we.ship.gameTime+.6},we.lastStyleAt=we.ship.gameTime),o.type==="pickup"&&(hn={text:{cushion:"방석!",ointment:"연고~",ice:"시원~",suppository:"부스터!!"}[o.kind],until:we.ship.gameTime+.7}),o.type==="block"&&(hn={text:"막았다!",until:we.ship.gameTime+.6}),o.type==="agony"&&(hn=null,we.fx={vignette:{until:we.ship.gameTime+1.2}})}dr=Vi,Vi=[],Cy(we.ship,Hi);const n=ac();Tr.update(we.ship,n.nozzle,n.audio,dr,!document.hidden);const s=we.ship.pain??0;we.lastPain!==void 0&&Math.abs(s-we.lastPain)>1e-6&&we.ship.state!=="TITLE"&&(we.painFlash={from:we.painFlash&&we.ship.gameTime-we.painFlash.at<.4?we.painFlash.from:we.lastPain,to:s,at:we.ship.gameTime}),we.lastPain=s,we.head=Wi?.head,we.itemTags=Wi?.items,Wi=qi.render(we.ship,n.nozzle,xf,we,dr),$n?.isConnected&&$n.remove(),requestAnimationFrame(yf)}requestAnimationFrame(yf);function vf(){const{rgba:i,mask:e,width:t,height:n}=qi.readback();return{width:t,height:n,violations:Ry(i,e,Ql,ec)}}async function Mf(i){const e=await new Promise(n=>xi.toBlob(n,"image/png")),t=await fetch(`/__capture?name=${encodeURIComponent(i)}`,{method:"POST",body:e});return t.ok?t.text():`capture failed ${t.status}`}async function cM(i=""){const e=[],t=[yi,Cs,fr];Cl=!0;for(const n of tc)for(const s of Fo)Gi(yi,n,s),qi.render(we.ship,ac().nozzle,xf,we),e.push({angle:n,zoom:s,...vf(),file:await Mf(`${i}${n}deg_zoom${s}_${No[yi].join("x")}`)});return Gi(...t),Cl=!1,e}function uM(i,e={left:!1,right:!1}){for(let t=0;t<Math.round(i/Tt.fixedDt);t++)Vi.push(...ff(we,e,Tt.fixedDt))}window.__chirocket={get world(){return xs},setView:Gi,signals:ac,commands:At,advance:uM,checkPalette:vf,capture:Mf,captureMatrix:cM,get game(){return we},get ship(){return we.ship},get events(){return dr},get anchors(){return Wi}};
