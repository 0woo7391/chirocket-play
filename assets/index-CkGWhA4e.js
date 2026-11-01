(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="170",Tf=0,mc=1,Af=2,wf=0,fh=1,Rf=2,Yn=3,sn=0,Ot=1,hn=2,mi=0,ds=1,gc=2,_c=3,xc=4,Cf=5,Oi=100,Lf=101,Pf=102,If=103,Df=104,Uf=200,Nf=201,Ff=202,Of=203,Ia=204,Da=205,Bf=206,kf=207,zf=208,Hf=209,Gf=210,Vf=211,Wf=212,Xf=213,Yf=214,Ua=0,Na=1,Fa=2,xs=3,Oa=4,Ba=5,ka=6,za=7,Ll=0,qf=1,jf=2,gi=0,Kf=1,$f=2,Zf=3,Jf=4,Qf=5,ed=6,td=7,yc="attached",nd="detached",dh=300,ys=301,vs=302,Ha=303,Ga=304,Ao=306,Wi=1e3,di=1001,go=1002,wt=1003,ph=1004,Zs=1005,Qt=1006,oo=1007,jn=1008,Jn=1009,mh=1010,gh=1011,hr=1012,Pl=1013,Xi=1014,En=1015,Ps=1016,Il=1017,Dl=1018,Ms=1020,_h=35902,xh=1021,yh=1022,rn=1023,vh=1024,Mh=1025,ps=1026,Ss=1027,Ul=1028,Nl=1029,Sh=1030,Fl=1031,Ol=1033,ao=33776,lo=33777,co=33778,uo=33779,Va=35840,Wa=35841,Xa=35842,Ya=35843,qa=36196,ja=37492,Ka=37496,$a=37808,Za=37809,Ja=37810,Qa=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,ll=37820,cl=37821,ho=36492,ul=36494,hl=36495,bh=36283,fl=36284,dl=36285,pl=36286,fr=2300,dr=2301,Fo=2302,vc=2400,Mc=2401,Sc=2402,id=2500,sd=0,Eh=1,ml=2,rd=3200,od=3201,wo=0,ad=1,fi="",Ut="srgb",$t="srgb-linear",Ro="linear",ct="srgb",ji=7680,bc=519,ld=512,cd=513,ud=514,Th=515,hd=516,fd=517,dd=518,pd=519,gl=35044,Ec="300 es",Kn=2e3,_o=2001;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tc=1234567;const nr=Math.PI/180,bs=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function Bl(i,e){return(i%e+e)%e}function md(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function gd(i,e,t){return i!==e?(t-i)/(e-i):0}function ir(i,e,t){return(1-t)*i+t*e}function _d(i,e,t,n){return ir(i,e,1-Math.exp(-t*n))}function xd(i,e=1){return e-Math.abs(Bl(i,e*2)-e)}function yd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Md(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sd(i,e){return i+Math.random()*(e-i)}function bd(i){return i*(.5-Math.random())}function Ed(i){i!==void 0&&(Tc=i);let e=Tc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Td(i){return i*nr}function Ad(i){return i*bs}function wd(i){return(i&i-1)===0&&i!==0}function Rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ld(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ah={DEG2RAD:nr,RAD2DEG:bs,generateUUID:wn,clamp:Gt,euclideanModulo:Bl,mapLinear:md,inverseLerp:gd,lerp:ir,damp:_d,pingpong:xd,smoothstep:yd,smootherstep:vd,randInt:Md,randFloat:Sd,randFloatSpread:bd,seededRandom:Ed,degToRad:Td,radToDeg:Ad,isPowerOfTwo:wd,ceilPowerOfTwo:Rd,floorPowerOfTwo:Cd,setQuaternionFromProperEuler:Ld,normalize:ot,denormalize:Sn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],v=s[1],y=s[4],x=s[7],b=s[2],T=s[5],R=s[8];return r[0]=o*_+a*v+l*b,r[3]=o*m+a*y+l*T,r[6]=o*d+a*x+l*R,r[1]=c*_+u*v+h*b,r[4]=c*m+u*y+h*T,r[7]=c*d+u*x+h*R,r[2]=f*_+p*v+g*b,r[5]=f*m+p*y+g*T,r[8]=f*d+p*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Ge;function wh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pd(){const i=pr("canvas");return i.style.display="block",i}const Ac={};function Js(i){i in Ac||(Ac[i]=!0,console.warn(i))}function Id(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Dd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ud(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Ro:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wc=[.64,.33,.3,.6,.15,.06],Rc=[.2126,.7152,.0722],Cc=[.3127,.329],Lc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[$t]:{primaries:wc,whitePoint:Cc,transfer:Ro,toXYZ:Lc,fromXYZ:Pc,luminanceCoefficients:Rc,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:wc,whitePoint:Cc,transfer:ct,toXYZ:Lc,fromXYZ:Pc,luminanceCoefficients:Rc,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let Ki;class Nd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=pr("canvas")),Ki.width=e.width,Ki.height=e.height;const n=Ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fd=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bo(s[o].image)):r.push(Bo(s[o]))}else r=Bo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Od=0;class Rt extends Is{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=di,s=di,r=Qt,o=jn,a=rn,l=Jn,c=Rt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=wn(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=dh;Rt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,b=(d+1)/2,T=(u+f)/4,R=(h+_)/4,L=(g+m)/4;return y>x&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=R/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=L/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=L/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bd extends Is{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Rt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Bd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ch extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kd extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*_,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const b=Math.sqrt(y),T=Math.atan2(b,d*v);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const x=a*v;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new O,Ic=new Rn;class pn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Ar.subVectors(this.max,ks),$i.subVectors(e.a,ks),Zi.subVectors(e.b,ks),Ji.subVectors(e.c,ks),ii.subVectors(Zi,$i),si.subVectors(Ji,Zi),Si.subVectors($i,Ji);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Si.z,Si.y,ii.z,0,-ii.x,si.z,0,-si.x,Si.z,0,-Si.x,-ii.y,ii.x,0,-si.y,si.x,0,-Si.y,Si.x,0];return!zo(t,$i,Zi,Ji,Ar)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,$i,Zi,Ji,Ar))?!1:(wr.crossVectors(ii,si),t=[wr.x,wr.y,wr.z],zo(t,$i,Zi,Ji,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new O,new O,new O,new O,new O,new O,new O,new O],_n=new O,Tr=new pn,$i=new O,Zi=new O,Ji=new O,ii=new O,si=new O,Si=new O,ks=new O,Ar=new O,wr=new O,bi=new O;function zo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bi.fromArray(i,r);const a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zd=new pn,zs=new O,Ho=new O;class Nn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Ho)),this.expandByPoint(zs.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new O,Go=new O,Rr=new O,ri=new O,Vo=new O,Cr=new O,Wo=new O;class Co{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Go.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Go);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Rr),a=ri.dot(this.direction),l=-ri.dot(Rr),c=ri.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Go).addScaledVector(Rr,f),p}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){Vo.subVectors(t,e),Cr.subVectors(n,e),Wo.crossVectors(Vo,Cr);let o=this.direction.dot(Wo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Cr.crossVectors(ri,Cr));if(l<0)return null;const c=a*this.direction.dot(Vo.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(Wo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,s,r,o,a,l,c,u,h,f,p,g,_,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hd,e,Gd)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),oi.crossVectors(n,tn),oi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),oi.crossVectors(n,tn)),oi.normalize(),Lr.crossVectors(tn,oi),s[0]=oi.x,s[4]=Lr.x,s[8]=tn.x,s[1]=oi.y,s[5]=Lr.y,s[9]=tn.y,s[2]=oi.z,s[6]=Lr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],v=n[3],y=n[7],x=n[11],b=n[15],T=s[0],R=s[4],L=s[8],S=s[12],M=s[1],A=s[5],z=s[9],k=s[13],U=s[2],B=s[6],N=s[10],W=s[14],I=s[3],D=s[7],G=s[11],H=s[15];return r[0]=o*T+a*M+l*U+c*I,r[4]=o*R+a*A+l*B+c*D,r[8]=o*L+a*z+l*N+c*G,r[12]=o*S+a*k+l*W+c*H,r[1]=u*T+h*M+f*U+p*I,r[5]=u*R+h*A+f*B+p*D,r[9]=u*L+h*z+f*N+p*G,r[13]=u*S+h*k+f*W+p*H,r[2]=g*T+_*M+m*U+d*I,r[6]=g*R+_*A+m*B+d*D,r[10]=g*L+_*z+m*N+d*G,r[14]=g*S+_*k+m*W+d*H,r[3]=v*T+y*M+x*U+b*I,r[7]=v*R+y*A+x*B+b*D,r[11]=v*L+y*z+x*N+b*G,r[15]=v*S+y*k+x*W+b*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,y=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,x=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,b=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,T=t*v+n*y+s*x+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(_*f*r-h*m*r-_*s*p+n*m*p+h*s*d-n*f*d)*R,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*R,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*p-n*l*p)*R,e[4]=y*R,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=x*R,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*d-t*h*d)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*d+t*a*d)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*R,e[12]=b*R,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*R,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,v=l*c,y=l*u,x=l*h,b=n.x,T=n.y,R=n.z;return s[0]=(1-(_+d))*b,s[1]=(p+x)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(f+d))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);const c=1/r,u=1/o,h=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Kn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,g;if(a===Kn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===_o)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Kn){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,p=(n+s)*u;let g,_;if(a===Kn)g=(o+r)*h,_=-2*h;else if(a===_o)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new O,xn=new Be,Hd=new O(0,0,0),Gd=new O(1,1,1),oi=new O,Lr=new O,tn=new O,Dc=new Be,Uc=new Rn;class dn{constructor(e=0,t=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vd=0;const Nc=new O,es=new Rn,Gn=new Be,Pr=new O,Hs=new O,Wd=new O,Xd=new Rn,Fc=new O(1,0,0),Oc=new O(0,1,0),Bc=new O(0,0,1),kc={type:"added"},Yd={type:"removed"},ts={type:"childadded",child:null},Xo={type:"childremoved",child:null};class gt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new O,t=new dn,n=new Rn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ge}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pr.copy(e):Pr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Hs,Pr,this.up):Gn.lookAt(Pr,Hs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Gn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yd),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,Wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DEFAULT_UP=new O(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new O,Vn=new O,Yo=new O,Wn=new O,ns=new O,is=new O,zc=new O,qo=new O,jo=new O,Ko=new O,$o=new nt,Zo=new nt,Jo=new nt;class bn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Vn.subVectors(n,t),Yo.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(Vn),l=yn.dot(Yo),c=Vn.dot(Vn),u=Vn.dot(Yo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return $o.setScalar(0),Zo.setScalar(0),Jo.setScalar(0),$o.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,n),Jo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($o,r.x),o.addScaledVector(Zo,r.y),o.addScaledVector(Jo,r.z),o}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Vn.subVectors(e,t),yn.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),yn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,n),is.subVectors(r,n),qo.subVectors(e,n);const l=ns.dot(qo),c=is.dot(qo);if(l<=0&&c<=0)return t.copy(n);jo.subVectors(e,s);const u=ns.dot(jo),h=is.dot(jo);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ns,o);Ko.subVectors(e,r);const p=ns.dot(Ko),g=is.dot(Ko);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(is,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return zc.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(zc,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Qo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Bl(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qo(o,r,e+1/3),this.g=Qo(o,r,e),this.b=Qo(o,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=Ph[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return je.fromWorkingColorSpace(zt.copy(this),e),Math.round(Gt(zt.r*255,0,255))*65536+Math.round(Gt(zt.g*255,0,255))*256+Math.round(Gt(zt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ut){je.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ir);const n=ir(ai.h,Ir.h,t),s=ir(ai.s,Ir.s,t),r=ir(ai.l,Ir.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Le;Le.NAMES=Ph;let qd=0;class fn extends Is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=wn(),this.name="",this.blending=ds,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Da,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mt extends fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new O,Dr=new ke;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gl,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}}class Ih extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dh extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jd=0;const an=new Be,ea=new gt,ss=new O,nn=new pn,Gs=new pn,Pt=new O;class Xt extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wh(e)?Dh:Ih)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return ea.lookAt(e),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(nn.min,Gs.min),nn.expandByPoint(Pt),Pt.addVectors(nn.max,Gs.max),nn.expandByPoint(Pt)):(nn.expandByPoint(Gs.min),nn.expandByPoint(Gs.max))}nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(e,c),Pt.add(ss)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new O,l[L]=new O;const c=new O,u=new O,h=new O,f=new ke,p=new ke,g=new ke,_=new O,m=new O;function d(L,S,M){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[L].add(_),a[S].add(_),a[M].add(_),l[L].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,S=v.length;L<S;++L){const M=v[L],A=M.start,z=M.count;for(let k=A,U=A+z;k<U;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new O,x=new O,b=new O,T=new O;function R(L){b.fromBufferAttribute(s,L),T.copy(b);const S=a[L];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),x.crossVectors(T,S);const A=x.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,A)}for(let L=0,S=v.length;L<S;++L){const M=v[L],A=M.start,z=M.count;for(let k=A,U=A+z;k<U;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Wt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hc=new Be,Ei=new Co,Ur=new Nn,Gc=new O,Nr=new O,Fr=new O,Or=new O,ta=new O,Br=new O,Vc=new O,kr=new O;class Ye extends gt{constructor(e=new Xt,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ta.fromBufferAttribute(h,e),o?Br.addScaledVector(ta,u):Br.addScaledVector(ta.sub(t),u))}t.add(Br)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Ur.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ur,Gc)===null||Ei.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Hc.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=y;x<b;x+=3){const T=a.getX(x),R=a.getX(x+1),L=a.getX(x+2);s=zr(this,d,e,n,c,u,h,T,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=zr(this,o,e,n,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=y;x<b;x+=3){const T=x,R=x+1,L=x+2;s=zr(this,d,e,n,c,u,h,T,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,y=m+1,x=m+2;s=zr(this,o,e,n,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Kd(i,e,t,n,s,r,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===sn,a),l===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:i}}function zr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Nr),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Or);const u=Kd(i,e,t,n,Nr,Fr,Or,Vc);if(u){const h=new O;bn.getBarycoord(Vc,Nr,Fr,Or,h),s&&(u.uv=bn.getInterpolatedAttribute(s,a,l,c,h,new ke)),r&&(u.uv1=bn.getInterpolatedAttribute(r,a,l,c,h,new ke)),o&&(u.normal=bn.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};bn.getNormal(Nr,Fr,Or,f.normal),u.face=f,u.barycoord=h}return u}class Nt extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2));function g(_,m,d,v,y,x,b,T,R,L,S){const M=x/R,A=b/L,z=x/2,k=b/2,U=T/2,B=R+1,N=L+1;let W=0,I=0;const D=new O;for(let G=0;G<N;G++){const H=G*A-k;for(let ce=0;ce<B;ce++){const le=ce*M-z;D[_]=le*v,D[m]=H*y,D[d]=U,c.push(D.x,D.y,D.z),D[_]=0,D[m]=0,D[d]=T>0?1:-1,u.push(D.x,D.y,D.z),h.push(ce/R),h.push(1-G/L),W+=1}}for(let G=0;G<L;G++)for(let H=0;H<R;H++){const ce=f+H+B*G,le=f+H+B*(G+1),j=f+(H+1)+B*(G+1),ee=f+(H+1)+B*G;l.push(ce,le,ee),l.push(le,j,ee),I+=6}a.addGroup(p,I,S),p+=I,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Es(i[t]);for(const s in n)e[s]=n[s]}return e}function $d(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Zd={clone:Es,merge:qt};var Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=$d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nh extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new O,Wc=new ke,Xc=new ke;class Jt extends Nh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class ep extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(rs,os,e,t);s.layers=this.layers,this.add(s);const r=new Jt(rs,os,e,t);r.layers=this.layers,this.add(r);const o=new Jt(rs,os,e,t);o.layers=this.layers,this.add(o);const a=new Jt(rs,os,e,t);a.layers=this.layers,this.add(a);const l=new Jt(rs,os,e,t);l.layers=this.layers,this.add(l);const c=new Jt(rs,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fh extends Rt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tp extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nt(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:mi});r.uniforms.tEquirect.value=t;const o=new Ye(s,r),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=Qt),new ep(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const na=new O,np=new O,ip=new Ge;class Ni{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=na.subVectors(n,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ip.getNormalMatrix(e),s=this.coplanarPoint(na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Nn,Hr=new O;class kl{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-p,x-d).normalize(),n[1].setComponents(l+r,f+c,m+p,x+d).normalize(),n[2].setComponents(l+o,f+u,m+g,x+v).normalize(),n[3].setComponents(l-o,f-u,m-g,x-v).normalize(),n[4].setComponents(l-a,f-h,m-_,x-y).normalize(),t===Kn)n[5].setComponents(l+a,f+h,m+_,x+y).normalize();else if(t===_o)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sp(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class _i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const v=d*f-o;for(let y=0;y<c;y++){const x=y*h-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const y=v+c*d,x=v+c*(d+1),b=v+1+c*(d+1),T=v+1+c*d;p.push(y,x,T),p.push(x,b,T)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}var rp=`#ifdef USE_ALPHAHASH
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
}`,We={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:up,aomap_fragment:hp,aomap_pars_fragment:fp,batching_pars_vertex:dp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:bp,color_fragment:Ep,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:wp,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Ip,emissivemap_fragment:Dp,emissivemap_pars_fragment:Up,colorspace_fragment:Np,colorspace_pars_fragment:Fp,envmap_fragment:Op,envmap_common_pars_fragment:Bp,envmap_pars_fragment:kp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Zp,envmap_vertex:Hp,fog_vertex:Gp,fog_pars_vertex:Vp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:qp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Kp,lights_pars_begin:$p,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:um,map_fragment:hm,map_pars_fragment:fm,map_particle_fragment:dm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:xm,morphnormal_vertex:ym,morphtarget_pars_vertex:vm,morphtarget_vertex:Mm,normal_fragment_begin:Sm,normal_fragment_maps:bm,normal_pars_fragment:Em,normal_pars_vertex:Tm,normal_vertex:Am,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Pm,opaque_fragment:Im,packing:Dm,premultiplied_alpha_fragment:Um,project_vertex:Nm,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Vm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:Ym,skinnormal_vertex:qm,specularmap_fragment:jm,specularmap_pars_fragment:Km,tonemapping_fragment:$m,tonemapping_pars_fragment:Zm,transmission_fragment:Jm,transmission_pars_fragment:Qm,uv_pars_fragment:e0,uv_pars_vertex:t0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:o0,backgroundCube_frag:a0,cube_vert:l0,cube_frag:c0,depth_vert:u0,depth_frag:h0,distanceRGBA_vert:f0,distanceRGBA_frag:d0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:_0,meshbasic_vert:x0,meshbasic_frag:y0,meshlambert_vert:v0,meshlambert_frag:M0,meshmatcap_vert:S0,meshmatcap_frag:b0,meshnormal_vert:E0,meshnormal_frag:T0,meshphong_vert:A0,meshphong_frag:w0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:L0,meshtoon_frag:P0,points_vert:I0,points_frag:D0,shadow_vert:U0,shadow_frag:N0,sprite_vert:F0,sprite_frag:O0},fe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},In={basic:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Le(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Le(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:qt([fe.points,fe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:qt([fe.common,fe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:qt([fe.sprite,fe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:qt([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:qt([fe.lights,fe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};In.physical={uniforms:qt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Gr={r:0,b:0,g:0},Ai=new dn,B0=new Be;function k0(i,e,t,n,s,r,o){const a=new Le(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?d(a,l):x&&x.isColor&&(d(x,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Ao)?(u===void 0&&(u=new Ye(new Nt(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Es(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ai.copy(y.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(Ai)),u.material.toneMapped=je.getTransfer(x.colorSpace)!==ct,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ye(new _i(2,2),new Qn({name:"BackgroundMaterial",uniforms:Es(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,y){v.getRGB(Gr,Uh(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function z0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,A,z,k,U){let B=!1;const N=h(k,z,A);r!==N&&(r=N,c(r.object)),B=p(M,k,z,U),B&&g(M,k,z,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(M,A,z,k),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,A,z){const k=z.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let B=U[A.id];B===void 0&&(B={},U[A.id]=B);let N=B[k];return N===void 0&&(N=f(l()),B[k]=N),N}function f(M){const A=[],z=[],k=[];for(let U=0;U<t;U++)A[U]=0,z[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,A,z,k){const U=r.attributes,B=A.attributes;let N=0;const W=z.getAttributes();for(const I in W)if(W[I].location>=0){const G=U[I];let H=B[I];if(H===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),G===void 0||G.attribute!==H||H&&G.data!==H.data)return!0;N++}return r.attributesNum!==N||r.index!==k}function g(M,A,z,k){const U={},B=A.attributes;let N=0;const W=z.getAttributes();for(const I in W)if(W[I].location>=0){let G=B[I];G===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(G=M.instanceColor));const H={};H.attribute=G,G&&G.data&&(H.data=G.data),U[I]=H,N++}r.attributes=U,r.attributesNum=N,r.index=k}function _(){const M=r.newAttributes;for(let A=0,z=M.length;A<z;A++)M[A]=0}function m(M){d(M,0)}function d(M,A){const z=r.newAttributes,k=r.enabledAttributes,U=r.attributeDivisors;z[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),U[M]!==A&&(i.vertexAttribDivisor(M,A),U[M]=A)}function v(){const M=r.newAttributes,A=r.enabledAttributes;for(let z=0,k=A.length;z<k;z++)A[z]!==M[z]&&(i.disableVertexAttribArray(z),A[z]=0)}function y(M,A,z,k,U,B,N){N===!0?i.vertexAttribIPointer(M,A,z,U,B):i.vertexAttribPointer(M,A,z,k,U,B)}function x(M,A,z,k){_();const U=k.attributes,B=z.getAttributes(),N=A.defaultAttributeValues;for(const W in B){const I=B[W];if(I.location>=0){let D=U[W];if(D===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(D=M.instanceColor)),D!==void 0){const G=D.normalized,H=D.itemSize,ce=e.get(D);if(ce===void 0)continue;const le=ce.buffer,j=ce.type,ee=ce.bytesPerElement,q=j===i.INT||j===i.UNSIGNED_INT||D.gpuType===Pl;if(D.isInterleavedBufferAttribute){const ne=D.data,de=ne.stride,C=D.offset;if(ne.isInstancedInterleavedBuffer){for(let K=0;K<I.locationSize;K++)d(I.location+K,ne.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let K=0;K<I.locationSize;K++)m(I.location+K);i.bindBuffer(i.ARRAY_BUFFER,le);for(let K=0;K<I.locationSize;K++)y(I.location+K,H/I.locationSize,j,G,de*ee,(C+H/I.locationSize*K)*ee,q)}else{if(D.isInstancedBufferAttribute){for(let ne=0;ne<I.locationSize;ne++)d(I.location+ne,D.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ne=0;ne<I.locationSize;ne++)m(I.location+ne);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ne=0;ne<I.locationSize;ne++)y(I.location+ne,H/I.locationSize,j,G,H*ee,H/I.locationSize*ne*ee,q)}}else if(N!==void 0){const G=N[W];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(I.location,G);break;case 3:i.vertexAttrib3fv(I.location,G);break;case 4:i.vertexAttrib4fv(I.location,G);break;default:i.vertexAttrib1fv(I.location,G)}}}}v()}function b(){L();for(const M in n){const A=n[M];for(const z in A){const k=A[z];for(const U in k)u(k[U].object),delete k[U];delete A[z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const z in A){const k=A[z];for(const U in k)u(k[U].object),delete k[U];delete A[z]}delete n[M.id]}function R(M){for(const A in n){const z=n[A];if(z[M.id]===void 0)continue;const k=z[M.id];for(const U in k)u(k[U].object),delete k[U];delete z[M.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function H0(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===Ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Jn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==En&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:T}}function V0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ni,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,y=v*4;let x=d.clippingState||null;l.value=x,x=u(g,f,y,p);for(let b=0;b!==y;++b)x[b]=t[b];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function W0(i){let e=new WeakMap;function t(o,a){return a===Ha?o.mapping=ys:a===Ga&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ha||a===Ga)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tp(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class mr extends Nh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hs=4,Yc=[.125,.215,.35,.446,.526,.582],Bi=20,ia=new mr,qc=new Le;let sa=null,ra=0,oa=0,aa=!1;const Fi=(1+Math.sqrt(5))/2,as=1/Fi,jc=[new O(-Fi,as,0),new O(Fi,as,0),new O(-as,0,Fi),new O(as,0,Fi),new O(0,Fi,-as),new O(0,Fi,as),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa,ra,oa),this._renderer.xr.enabled=aa,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ps,format:rn,colorSpace:$t,depthBuffer:!1},s=$c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X0(r)),this._blurMaterial=Y0(r,e,t)}return s}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,n,s){const a=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(qc),u.toneMapping=gi,u.autoClear=!1;const p=new Mt({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new Ye(new Nt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(qc),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;Vr(s,v*y,d>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ys||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Vr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jc[(s-r-1)%jc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ye(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const d=[];let v=0;for(let R=0;R<Bi;++R){const L=R/_,S=Math.exp(-L*L/2);d.push(S),R===0?v+=S:R<m&&(v+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const x=this._sizeLods[s],b=3*x*(s>y-hs?s-y+hs:0),T=4*(this._cubeSize-x);Vr(t,b,T,3*x,2*x),l.setRenderTarget(t),l.render(h,ia)}}function X0(i){const e=[],t=[],n=[];let s=i;const r=i-hs+1+Yc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-hs?l=Yc[o-i+hs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,L=T>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];v.set(S,_*g*T),y.set(f,m*g*T);const M=[T,T,T,T,T,T];x.set(M,d*g*T)}const b=new Xt;b.setAttribute("position",new Wt(v,_)),b.setAttribute("uv",new Wt(y,m)),b.setAttribute("faceIndex",new Wt(x,d)),e.push(b),s>hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $c(i,e,t){const n=new vi(i,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Y0(i,e,t){const n=new Float32Array(Bi),s=new O(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Zc(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Jc(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function q0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ha||l===Ga,u=l===ys||l===vs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Kc(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Kc(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function j0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function K0(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const b=v[y+0],T=v[y+1],R=v[y+2];f.push(b,T,T,R,R,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const b=y+0,T=y+1,R=y+2;f.push(b,T,T,R,R,b)}}else return;const m=new(wh(f)?Dh:Ih)(f,1);m.version=_;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function $0(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Z0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function J0(i,e,t){const n=new WeakMap,s=new nt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*b*4*h),R=new Ch(T,x,b,h);R.type=En,R.needsUpdate=!0;const L=y*4;for(let M=0;M<h;M++){const A=m[M],z=d[M],k=v[M],U=x*b*4*M;for(let B=0;B<A.count;B++){const N=B*L;p===!0&&(s.fromBufferAttribute(A,B),T[U+N+0]=s.x,T[U+N+1]=s.y,T[U+N+2]=s.z,T[U+N+3]=0),g===!0&&(s.fromBufferAttribute(z,B),T[U+N+4]=s.x,T[U+N+5]=s.y,T[U+N+6]=s.z,T[U+N+7]=0),_===!0&&(s.fromBufferAttribute(k,B),T[U+N+8]=s.x,T[U+N+9]=s.y,T[U+N+10]=s.z,T[U+N+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new ke(x,b)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Q0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Bh extends Rt{constructor(e,t,n,s,r,o,a,l,c,u=ps){if(u!==ps&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ps&&(n=Xi),n===void 0&&u===Ss&&(n=Ms),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kh=new Rt,Qc=new Bh(1,1),zh=new Ch,Hh=new kd,Gh=new Fh,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function Ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lo(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),Lt(t,n)}}function rg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),Lt(t,n)}}function og(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),Lt(t,n)}}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function mg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=Th,r=Qc):r=kh,t.setTexture2D(e||r,s)}function gg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hh,s)}function _g(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gh,s)}function xg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zh,s)}function yg(i){switch(i){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return ug;case 5125:return hg;case 36294:return fg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}function vg(i,e){i.uniform1fv(this.addr,e)}function Mg(i,e){const t=Ds(e,this.size,2);i.uniform2fv(this.addr,t)}function Sg(i,e){const t=Ds(e,this.size,3);i.uniform3fv(this.addr,t)}function bg(i,e){const t=Ds(e,this.size,4);i.uniform4fv(this.addr,t)}function Eg(i,e){const t=Ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tg(i,e){const t=Ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ag(i,e){const t=Ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wg(i,e){i.uniform1iv(this.addr,e)}function Rg(i,e){i.uniform2iv(this.addr,e)}function Cg(i,e){i.uniform3iv(this.addr,e)}function Lg(i,e){i.uniform4iv(this.addr,e)}function Pg(i,e){i.uniform1uiv(this.addr,e)}function Ig(i,e){i.uniform2uiv(this.addr,e)}function Dg(i,e){i.uniform3uiv(this.addr,e)}function Ug(i,e){i.uniform4uiv(this.addr,e)}function Ng(i,e,t){const n=this.cache,s=e.length,r=Lo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||kh,r[o])}function Fg(i,e,t){const n=this.cache,s=e.length,r=Lo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hh,r[o])}function Og(i,e,t){const n=this.cache,s=e.length,r=Lo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gh,r[o])}function Bg(i,e,t){const n=this.cache,s=e.length,r=Lo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zh,r[o])}function kg(i){switch(i){case 5126:return vg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return wg;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Lg;case 5125:return Pg;case 36294:return Ig;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yg(t.type)}}class Hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kg(t.type)}}class Gg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function ru(i,e){i.seq.push(e),i.map[e.id]=e}function Vg(i,e,t){const n=i.name,s=n.length;for(la.lastIndex=0;;){const r=la.exec(n),o=la.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ru(t,c===void 0?new zg(a,i,e):new Hg(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Gg(a),ru(t,h)),t=h}}}class fo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Vg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function ou(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Wg=37297;let Xg=0;function Yg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const au=new Ge;function qg(i){je._getMatrix(au,je.workingColorSpace,i);const e=`mat3( ${au.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Ro:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yg(i.getShaderSource(e),o)}else return s}function jg(i,e){const t=qg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kg(i,e){let t;switch(e){case Kf:t="Linear";break;case $f:t="Reinhard";break;case Zf:t="Cineon";break;case Jf:t="ACESFilmic";break;case ed:t="AgX";break;case td:t="Neutral";break;case Qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new O;function $g(){je.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Jg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qs(i){return i!==""}function cu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(e_,n_)}const t_=new Map;function n_(i,e){let t=We[e];if(t===void 0){const n=t_.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(i){return i.replace(i_,s_)}function s_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function r_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function o_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case vs:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function l_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ll:e="ENVMAP_BLENDING_MULTIPLY";break;case qf:e="ENVMAP_BLENDING_MIX";break;case jf:e="ENVMAP_BLENDING_ADD";break}return e}function c_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function u_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=r_(t),c=o_(t),u=a_(t),h=l_(t),f=c_(t),p=Zg(t),g=Jg(r),_=s.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),d.length>0&&(d+=`
`)):(m=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),d=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?We.tonemapping_pars_fragment:"",t.toneMapping!==gi?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,jg("linearToOutputTexel",t.outputColorSpace),$g(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=_l(o),o=cu(o,t),o=uu(o,t),a=_l(a),a=cu(a,t),a=uu(a,t),o=hu(o),a=hu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+m+o,x=v+d+a,b=ou(s,s.VERTEX_SHADER,y),T=ou(s,s.FRAGMENT_SHADER,x);s.attachShader(_,b),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(A){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(b).trim(),U=s.getShaderInfoLog(T).trim();let B=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,T);else{const W=lu(s,b,"vertex"),I=lu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+W+`
`+I)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||U==="")&&(N=!1);N&&(A.diagnostics={runnable:B,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:U,prefix:d}})}s.deleteShader(b),s.deleteShader(T),L=new fo(s,_),S=Qg(s,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Wg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let h_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d_(e),t.set(e,n)),n}}class d_{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}}function p_(i,e,t,n,s,r,o){const a=new Lh,l=new f_,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,A,z,k){const U=z.fog,B=k.geometry,N=S.isMeshStandardMaterial?z.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),I=W&&W.mapping===Ao?W.image.height:null,D=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const G=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,H=G!==void 0?G.length:0;let ce=0;B.morphAttributes.position!==void 0&&(ce=1),B.morphAttributes.normal!==void 0&&(ce=2),B.morphAttributes.color!==void 0&&(ce=3);let le,j,ee,q;if(D){const rt=In[D];le=rt.vertexShader,j=rt.fragmentShader}else le=S.vertexShader,j=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),q=l.getFragmentShaderID(S);const ne=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),C=k.isInstancedMesh===!0,K=k.isBatchedMesh===!0,Q=!!S.map,ae=!!S.matcap,pe=!!W,F=!!S.aoMap,Ne=!!S.lightMap,Ae=!!S.bumpMap,ve=!!S.normalMap,_e=!!S.displacementMap,Xe=!!S.emissiveMap,Se=!!S.metalnessMap,P=!!S.roughnessMap,E=S.anisotropy>0,$=S.clearcoat>0,se=S.dispersion>0,oe=S.iridescence>0,ie=S.sheen>0,Pe=S.transmission>0,ge=E&&!!S.anisotropyMap,be=$&&!!S.clearcoatMap,$e=$&&!!S.clearcoatNormalMap,ue=$&&!!S.clearcoatRoughnessMap,Ee=oe&&!!S.iridescenceMap,De=oe&&!!S.iridescenceThicknessMap,Fe=ie&&!!S.sheenColorMap,Te=ie&&!!S.sheenRoughnessMap,Ke=!!S.specularMap,Ve=!!S.specularColorMap,ut=!!S.specularIntensityMap,V=Pe&&!!S.transmissionMap,me=Pe&&!!S.thicknessMap,te=!!S.gradientMap,re=!!S.alphaMap,Me=S.alphaTest>0,xe=!!S.alphaHash,ze=!!S.extensions;let xt=gi;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(xt=i.toneMapping);const Bt={shaderID:D,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:j,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:K,batchingColor:K&&k._colorsTexture!==null,instancing:C,instancingColor:C&&k.instanceColor!==null,instancingMorph:C&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$t,alphaToCoverage:!!S.alphaToCoverage,map:Q,matcap:ae,envMap:pe,envMapMode:pe&&W.mapping,envMapCubeUVHeight:I,aoMap:F,lightMap:Ne,bumpMap:Ae,normalMap:ve,displacementMap:f&&_e,emissiveMap:Xe,normalMapObjectSpace:ve&&S.normalMapType===ad,normalMapTangentSpace:ve&&S.normalMapType===wo,metalnessMap:Se,roughnessMap:P,anisotropy:E,anisotropyMap:ge,clearcoat:$,clearcoatMap:be,clearcoatNormalMap:$e,clearcoatRoughnessMap:ue,dispersion:se,iridescence:oe,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:ie,sheenColorMap:Fe,sheenRoughnessMap:Te,specularMap:Ke,specularColorMap:Ve,specularIntensityMap:ut,transmission:Pe,transmissionMap:V,thicknessMap:me,gradientMap:te,opaque:S.transparent===!1&&S.blending===ds&&S.alphaToCoverage===!1,alphaMap:re,alphaTest:Me,alphaHash:xe,combine:S.combine,mapUv:Q&&_(S.map.channel),aoMapUv:F&&_(S.aoMap.channel),lightMapUv:Ne&&_(S.lightMap.channel),bumpMapUv:Ae&&_(S.bumpMap.channel),normalMapUv:ve&&_(S.normalMap.channel),displacementMapUv:_e&&_(S.displacementMap.channel),emissiveMapUv:Xe&&_(S.emissiveMap.channel),metalnessMapUv:Se&&_(S.metalnessMap.channel),roughnessMapUv:P&&_(S.roughnessMap.channel),anisotropyMapUv:ge&&_(S.anisotropyMap.channel),clearcoatMapUv:be&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:$e&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(S.sheenRoughnessMap.channel),specularMapUv:Ke&&_(S.specularMap.channel),specularColorMapUv:Ve&&_(S.specularColorMap.channel),specularIntensityMapUv:ut&&_(S.specularIntensityMap.channel),transmissionMapUv:V&&_(S.transmissionMap.channel),thicknessMapUv:me&&_(S.thicknessMap.channel),alphaMapUv:re&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ve||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(Q||re),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:de,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:Q&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:Xe&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===Ot,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&S.extensions.multiDraw===!0||K)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let A;if(M){const z=In[M];A=Zd.clone(z.uniforms)}else A=S.uniforms;return A}function b(S,M){let A;for(let z=0,k=u.length;z<k;z++){const U=u[z];if(U.cacheKey===M){A=U,++A.usedTimes;break}}return A===void 0&&(A=new u_(i,M,S,r),u.push(A)),A}function T(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:b,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:L}}function m_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function g_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function du(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||g_),n.length>1&&n.sort(f||du),s.length>1&&s.sort(f||du)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function __(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new pu,i.set(n,[o])):s>=r.length?(o=new pu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function x_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Le};break;case"SpotLight":t={position:new O,direction:new O,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function y_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let v_=0;function M_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function S_(i){const e=new x_,t=y_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new Be,o=new Be;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,y=0,x=0,b=0,T=0,R=0;c.sort(M_);for(let S=0,M=c.length;S<M;S++){const A=c[S],z=A.color,k=A.intensity,U=A.distance,B=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=z.r*k,h+=z.g*k,f+=z.b*k;else if(A.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(A.sh.coefficients[N],k);R++}else if(A.isDirectionalLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const W=A.shadow,I=t.get(A);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,n.directionalShadow[p]=I,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=A.shadow.matrix,v++}n.directional[p]=N,p++}else if(A.isSpotLight){const N=e.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(z).multiplyScalar(k),N.distance=U,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,n.spot[_]=N;const W=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,W.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[_]=W.matrix,A.castShadow){const I=t.get(A);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=B,x++}_++}else if(A.isRectAreaLight){const N=e.get(A);N.color.copy(z).multiplyScalar(k),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=N,m++}else if(A.isPointLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){const W=A.shadow,I=t.get(A);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,I.shadowCameraNear=W.camera.near,I.shadowCameraFar=W.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=A.shadow.matrix,y++}n.point[g]=N,g++}else if(A.isHemisphereLight){const N=e.get(A);N.skyColor.copy(A.color).multiplyScalar(k),N.groundColor.copy(A.groundColor).multiplyScalar(k),n.hemi[d]=N,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==v||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==b||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=v,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=b,L.numLightProbes=R,n.version=v_++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const y=c[d];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function mu(i){const e=new S_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function b_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new mu(i),e.set(s,[a])):r>=o.length?(a=new mu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class E_ extends fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T_ extends fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const A_=`void main() {
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
}`;function R_(i,e,t){let n=new kl;const s=new ke,r=new ke,o=new nt,a=new E_({depthPacking:od}),l=new T_,c={},u=t.maxTextureSize,h={[sn]:Ot,[Ot]:sn,[hn]:hn},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:A_,fragmentShader:w_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ye(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let d=this.type;this.render=function(T,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),z=i.state;z.setBlending(mi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=d!==Yn&&this.type===Yn,U=d===Yn&&this.type!==Yn;for(let B=0,N=T.length;B<N;B++){const W=T[B],I=W.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const D=I.getFrameExtents();if(s.multiply(D),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/D.x),s.x=r.x*D.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/D.y),s.y=r.y*D.y,I.mapSize.y=r.y)),I.map===null||k===!0||U===!0){const H=this.type!==Yn?{minFilter:wt,magFilter:wt}:{};I.map!==null&&I.map.dispose(),I.map=new vi(s.x,s.y,H),I.map.texture.name=W.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const G=I.getViewportCount();for(let H=0;H<G;H++){const ce=I.getViewport(H);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),z.viewport(o),I.updateMatrices(W,H),n=I.getFrustum(),x(R,L,I.camera,W,this.type)}I.isPointLightShadow!==!0&&this.type===Yn&&v(I,L),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,A)};function v(T,R){const L=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,p,_,null)}function y(T,R,L,S){let M=null;const A=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)M=A;else if(M=L.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=M.uuid,k=R.uuid;let U=c[z];U===void 0&&(U={},c[z]=U);let B=U[k];B===void 0&&(B=M.clone(),U[k]=B,R.addEventListener("dispose",b)),M=B}if(M.visible=R.visible,M.wireframe=R.wireframe,S===Yn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=L}return M}function x(T,R,L,S,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const k=e.update(T),U=T.material;if(Array.isArray(U)){const B=k.groups;for(let N=0,W=B.length;N<W;N++){const I=B[N],D=U[I.materialIndex];if(D&&D.visible){const G=y(T,D,S,M);T.onBeforeShadow(i,T,R,L,k,G,I),i.renderBufferDirect(L,null,k,G,T,I),T.onAfterShadow(i,T,R,L,k,G,I)}}}else if(U.visible){const B=y(T,U,S,M);T.onBeforeShadow(i,T,R,L,k,B,null),i.renderBufferDirect(L,null,k,B,T,null),T.onAfterShadow(i,T,R,L,k,B,null)}}const z=T.children;for(let k=0,U=z.length;k<U;k++)x(z[k],R,L,S,M)}function b(T){T.target.removeEventListener("dispose",b);for(const L in c){const S=c[L],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const C_={[Ua]:Na,[Fa]:ka,[Oa]:za,[xs]:Ba,[Na]:Ua,[ka]:Fa,[za]:Oa,[Ba]:xs};function L_(i,e){function t(){let V=!1;const me=new nt;let te=null;const re=new nt(0,0,0,0);return{setMask:function(Me){te!==Me&&!V&&(i.colorMask(Me,Me,Me,Me),te=Me)},setLocked:function(Me){V=Me},setClear:function(Me,xe,ze,xt,Bt){Bt===!0&&(Me*=xt,xe*=xt,ze*=xt),me.set(Me,xe,ze,xt),re.equals(me)===!1&&(i.clearColor(Me,xe,ze,xt),re.copy(me))},reset:function(){V=!1,te=null,re.set(-1,0,0,0)}}}function n(){let V=!1,me=!1,te=null,re=null,Me=null;return{setReversed:function(xe){if(me!==xe){const ze=e.get("EXT_clip_control");me?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const xt=Me;Me=null,this.setClear(xt)}me=xe},getReversed:function(){return me},setTest:function(xe){xe?ne(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(xe){te!==xe&&!V&&(i.depthMask(xe),te=xe)},setFunc:function(xe){if(me&&(xe=C_[xe]),re!==xe){switch(xe){case Ua:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=xe}},setLocked:function(xe){V=xe},setClear:function(xe){Me!==xe&&(me&&(xe=1-xe),i.clearDepth(xe),Me=xe)},reset:function(){V=!1,te=null,re=null,Me=null,me=!1}}}function s(){let V=!1,me=null,te=null,re=null,Me=null,xe=null,ze=null,xt=null,Bt=null;return{setTest:function(rt){V||(rt?ne(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(rt){me!==rt&&!V&&(i.stencilMask(rt),me=rt)},setFunc:function(rt,mn,Bn){(te!==rt||re!==mn||Me!==Bn)&&(i.stencilFunc(rt,mn,Bn),te=rt,re=mn,Me=Bn)},setOp:function(rt,mn,Bn){(xe!==rt||ze!==mn||xt!==Bn)&&(i.stencilOp(rt,mn,Bn),xe=rt,ze=mn,xt=Bn)},setLocked:function(rt){V=rt},setClear:function(rt){Bt!==rt&&(i.clearStencil(rt),Bt=rt)},reset:function(){V=!1,me=null,te=null,re=null,Me=null,xe=null,ze=null,xt=null,Bt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,y=null,x=null,b=null,T=null,R=new Le(0,0,0),L=0,S=!1,M=null,A=null,z=null,k=null,U=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,W=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(I)[1]),N=W>=1):I.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),N=W>=2);let D=null,G={};const H=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),le=new nt().fromArray(H),j=new nt().fromArray(ce);function ee(V,me,te,re){const Me=new Uint8Array(4),xe=i.createTexture();i.bindTexture(V,xe),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<te;ze++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(me+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return xe}const q={};q[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(xs),Ae(!1),ve(mc),ne(i.CULL_FACE),F(mi);function ne(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function de(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function C(V,me){return h[V]!==me?(i.bindFramebuffer(V,me),h[V]=me,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function K(V,me){let te=p,re=!1;if(V){te=f.get(me),te===void 0&&(te=[],f.set(me,te));const Me=V.textures;if(te.length!==Me.length||te[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,ze=Me.length;xe<ze;xe++)te[xe]=i.COLOR_ATTACHMENT0+xe;te.length=Me.length,re=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,re=!0);re&&i.drawBuffers(te)}function Q(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const ae={[Oi]:i.FUNC_ADD,[Lf]:i.FUNC_SUBTRACT,[Pf]:i.FUNC_REVERSE_SUBTRACT};ae[If]=i.MIN,ae[Df]=i.MAX;const pe={[Uf]:i.ZERO,[Nf]:i.ONE,[Ff]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[Gf]:i.SRC_ALPHA_SATURATE,[zf]:i.DST_COLOR,[Bf]:i.DST_ALPHA,[Of]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[Hf]:i.ONE_MINUS_DST_COLOR,[kf]:i.ONE_MINUS_DST_ALPHA,[Vf]:i.CONSTANT_COLOR,[Wf]:i.ONE_MINUS_CONSTANT_COLOR,[Xf]:i.CONSTANT_ALPHA,[Yf]:i.ONE_MINUS_CONSTANT_ALPHA};function F(V,me,te,re,Me,xe,ze,xt,Bt,rt){if(V===mi){_===!0&&(de(i.BLEND),_=!1);return}if(_===!1&&(ne(i.BLEND),_=!0),V!==Cf){if(V!==m||rt!==S){if((d!==Oi||x!==Oi)&&(i.blendEquation(i.FUNC_ADD),d=Oi,x=Oi),rt)switch(V){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,y=null,b=null,T=null,R.set(0,0,0),L=0,m=V,S=rt}return}Me=Me||me,xe=xe||te,ze=ze||re,(me!==d||Me!==x)&&(i.blendEquationSeparate(ae[me],ae[Me]),d=me,x=Me),(te!==v||re!==y||xe!==b||ze!==T)&&(i.blendFuncSeparate(pe[te],pe[re],pe[xe],pe[ze]),v=te,y=re,b=xe,T=ze),(xt.equals(R)===!1||Bt!==L)&&(i.blendColor(xt.r,xt.g,xt.b,Bt),R.copy(xt),L=Bt),m=V,S=!1}function Ne(V,me){V.side===hn?de(i.CULL_FACE):ne(i.CULL_FACE);let te=V.side===Ot;me&&(te=!te),Ae(te),V.blending===ds&&V.transparent===!1?F(mi):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const re=V.stencilWrite;a.setTest(re),re&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Xe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(V){M!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),M=V)}function ve(V){V!==Tf?(ne(i.CULL_FACE),V!==A&&(V===mc?i.cullFace(i.BACK):V===Af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),A=V}function _e(V){V!==z&&(N&&i.lineWidth(V),z=V)}function Xe(V,me,te){V?(ne(i.POLYGON_OFFSET_FILL),(k!==me||U!==te)&&(i.polygonOffset(me,te),k=me,U=te)):de(i.POLYGON_OFFSET_FILL)}function Se(V){V?ne(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function P(V){V===void 0&&(V=i.TEXTURE0+B-1),D!==V&&(i.activeTexture(V),D=V)}function E(V,me,te){te===void 0&&(D===null?te=i.TEXTURE0+B-1:te=D);let re=G[te];re===void 0&&(re={type:void 0,texture:void 0},G[te]=re),(re.type!==V||re.texture!==me)&&(D!==te&&(i.activeTexture(te),D=te),i.bindTexture(V,me||q[V]),re.type=V,re.texture=me)}function $(){const V=G[D];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(V){le.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),le.copy(V))}function Te(V){j.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),j.copy(V))}function Ke(V,me){let te=c.get(me);te===void 0&&(te=new WeakMap,c.set(me,te));let re=te.get(V);re===void 0&&(re=i.getUniformBlockIndex(me,V.name),te.set(V,re))}function Ve(V,me){const re=c.get(me).get(V);l.get(me)!==re&&(i.uniformBlockBinding(me,re,V.__bindingPointIndex),l.set(me,re))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},D=null,G={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,y=null,x=null,b=null,T=null,R=new Le(0,0,0),L=0,S=!1,M=null,A=null,z=null,k=null,U=null,le.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:de,bindFramebuffer:C,drawBuffers:K,useProgram:Q,setBlending:F,setMaterial:Ne,setFlipSided:Ae,setCullFace:ve,setLineWidth:_e,setPolygonOffset:Xe,setScissorTest:Se,activeTexture:P,bindTexture:E,unbindTexture:$,compressedTexImage2D:se,compressedTexImage3D:oe,texImage2D:Ee,texImage3D:De,updateUBOMapping:Ke,uniformBlockBinding:Ve,texStorage2D:$e,texStorage3D:ue,texSubImage2D:ie,texSubImage3D:Pe,compressedTexSubImage2D:ge,compressedTexSubImage3D:be,scissor:Fe,viewport:Te,reset:ut}}function gu(i,e,t,n){const s=P_(n);switch(t){case xh:return i*e;case vh:return i*e;case Mh:return i*e*2;case Ul:return i*e/s.components*s.byteLength;case Nl:return i*e/s.components*s.byteLength;case Sh:return i*e*2/s.components*s.byteLength;case Fl:return i*e*2/s.components*s.byteLength;case yh:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case Ol:return i*e*4/s.components*s.byteLength;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:case Ya:return Math.max(i,16)*Math.max(e,8)/4;case Va:case Xa:return Math.max(i,8)*Math.max(e,8)/2;case qa:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ho:case ul:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bh:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dl:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P_(i){switch(i){case Jn:case mh:return{byteLength:1,components:1};case hr:case gh:case Ps:return{byteLength:2,components:1};case Il:case Dl:return{byteLength:2,components:4};case Xi:case Pl:case En:return{byteLength:4,components:1};case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function I_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):pr("canvas")}function _(P,E,$){let se=1;const oe=Se(P);if((oe.width>$||oe.height>$)&&(se=$/Math.max(oe.width,oe.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ie=Math.floor(se*oe.width),Pe=Math.floor(se*oe.height);h===void 0&&(h=g(ie,Pe));const ge=E?g(ie,Pe):h;return ge.width=ie,ge.height=Pe,ge.getContext("2d").drawImage(P,0,0,ie,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ie+"x"+Pe+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,E,$,se,oe=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=E;if(E===i.RED&&($===i.FLOAT&&(ie=i.R32F),$===i.HALF_FLOAT&&(ie=i.R16F),$===i.UNSIGNED_BYTE&&(ie=i.R8)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.R8UI),$===i.UNSIGNED_SHORT&&(ie=i.R16UI),$===i.UNSIGNED_INT&&(ie=i.R32UI),$===i.BYTE&&(ie=i.R8I),$===i.SHORT&&(ie=i.R16I),$===i.INT&&(ie=i.R32I)),E===i.RG&&($===i.FLOAT&&(ie=i.RG32F),$===i.HALF_FLOAT&&(ie=i.RG16F),$===i.UNSIGNED_BYTE&&(ie=i.RG8)),E===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RG8UI),$===i.UNSIGNED_SHORT&&(ie=i.RG16UI),$===i.UNSIGNED_INT&&(ie=i.RG32UI),$===i.BYTE&&(ie=i.RG8I),$===i.SHORT&&(ie=i.RG16I),$===i.INT&&(ie=i.RG32I)),E===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),$===i.UNSIGNED_INT&&(ie=i.RGB32UI),$===i.BYTE&&(ie=i.RGB8I),$===i.SHORT&&(ie=i.RGB16I),$===i.INT&&(ie=i.RGB32I)),E===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),$===i.UNSIGNED_INT&&(ie=i.RGBA32UI),$===i.BYTE&&(ie=i.RGBA8I),$===i.SHORT&&(ie=i.RGBA16I),$===i.INT&&(ie=i.RGBA32I)),E===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),E===i.RGBA){const Pe=oe?Ro:je.getTransfer(se);$===i.FLOAT&&(ie=i.RGBA32F),$===i.HALF_FLOAT&&(ie=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ie=Pe===ct?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(P,E){let $;return P?E===null||E===Xi||E===Ms?$=i.DEPTH24_STENCIL8:E===En?$=i.DEPTH32F_STENCIL8:E===hr&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Ms?$=i.DEPTH_COMPONENT24:E===En?$=i.DEPTH_COMPONENT32F:E===hr&&($=i.DEPTH_COMPONENT16),$}function b(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==wt&&P.minFilter!==Qt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){const E=P.target;E.removeEventListener("dispose",T),L(E),E.isVideoTexture&&u.delete(E)}function R(P){const E=P.target;E.removeEventListener("dispose",R),M(E)}function L(P){const E=n.get(P);if(E.__webglInit===void 0)return;const $=P.source,se=f.get($);if(se){const oe=se[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(P),Object.keys(se).length===0&&f.delete($)}n.remove(P)}function S(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const $=P.source,se=f.get($);delete se[E.__cacheKey],o.memory.textures--}function M(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let oe=0;oe<E.__webglFramebuffer[se].length;oe++)i.deleteFramebuffer(E.__webglFramebuffer[se][oe]);else i.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)i.deleteFramebuffer(E.__webglFramebuffer[se]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=P.textures;for(let se=0,oe=$.length;se<oe;se++){const ie=n.get($[se]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove($[se])}n.remove(P)}let A=0;function z(){A=0}function k(){const P=A;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),A+=1,P}function U(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function B(P,E){const $=n.get(P);if(P.isVideoTexture&&_e(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j($,P,E);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function N(P,E){const $=n.get(P);if(P.version>0&&$.__version!==P.version){j($,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function W(P,E){const $=n.get(P);if(P.version>0&&$.__version!==P.version){j($,P,E);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function I(P,E){const $=n.get(P);if(P.version>0&&$.__version!==P.version){ee($,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}const D={[Wi]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},G={[wt]:i.NEAREST,[ph]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},H={[ld]:i.NEVER,[pd]:i.ALWAYS,[cd]:i.LESS,[Th]:i.LEQUAL,[ud]:i.EQUAL,[dd]:i.GEQUAL,[hd]:i.GREATER,[fd]:i.NOTEQUAL};function ce(P,E){if(E.type===En&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Qt||E.magFilter===oo||E.magFilter===Zs||E.magFilter===jn||E.minFilter===Qt||E.minFilter===oo||E.minFilter===Zs||E.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,D[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,D[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,D[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,G[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,G[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,H[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wt||E.minFilter!==Zs&&E.minFilter!==jn||E.type===En&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function le(P,E){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));const se=E.source;let oe=f.get(se);oe===void 0&&(oe={},f.set(se,oe));const ie=U(E);if(ie!==P.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),oe[ie].usedTimes++;const Pe=oe[P.__cacheKey];Pe!==void 0&&(oe[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(E)),P.__cacheKey=ie,P.__webglTexture=oe[ie].texture}return $}function j(P,E,$){let se=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=i.TEXTURE_3D);const oe=le(P,E),ie=E.source;t.bindTexture(se,P.__webglTexture,i.TEXTURE0+$);const Pe=n.get(ie);if(ie.version!==Pe.__version||oe===!0){t.activeTexture(i.TEXTURE0+$);const ge=je.getPrimaries(je.workingColorSpace),be=E.colorSpace===fi?null:je.getPrimaries(E.colorSpace),$e=E.colorSpace===fi||ge===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ue=_(E.image,!1,s.maxTextureSize);ue=Xe(E,ue);const Ee=r.convert(E.format,E.colorSpace),De=r.convert(E.type);let Fe=y(E.internalFormat,Ee,De,E.colorSpace,E.isVideoTexture);ce(se,E);let Te;const Ke=E.mipmaps,Ve=E.isVideoTexture!==!0,ut=Pe.__version===void 0||oe===!0,V=ie.dataReady,me=b(E,ue);if(E.isDepthTexture)Fe=x(E.format===Ss,E.type),ut&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Fe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ue.width,ue.height,0,Ee,De,null));else if(E.isDataTexture)if(Ke.length>0){Ve&&ut&&t.texStorage2D(i.TEXTURE_2D,me,Fe,Ke[0].width,Ke[0].height);for(let te=0,re=Ke.length;te<re;te++)Te=Ke[te],Ve?V&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Te.width,Te.height,Ee,De,Te.data):t.texImage2D(i.TEXTURE_2D,te,Fe,Te.width,Te.height,0,Ee,De,Te.data);E.generateMipmaps=!1}else Ve?(ut&&t.texStorage2D(i.TEXTURE_2D,me,Fe,ue.width,ue.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Ee,De,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,ue.width,ue.height,0,Ee,De,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Fe,Ke[0].width,Ke[0].height,ue.depth);for(let te=0,re=Ke.length;te<re;te++)if(Te=Ke[te],E.format!==rn)if(Ee!==null)if(Ve){if(V)if(E.layerUpdates.size>0){const Me=gu(Te.width,Te.height,E.format,E.type);for(const xe of E.layerUpdates){const ze=Te.data.subarray(xe*Me/Te.data.BYTES_PER_ELEMENT,(xe+1)*Me/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,xe,Te.width,Te.height,1,Ee,ze)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Te.width,Te.height,ue.depth,Ee,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Fe,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Te.width,Te.height,ue.depth,Ee,De,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Fe,Te.width,Te.height,ue.depth,0,Ee,De,Te.data)}else{Ve&&ut&&t.texStorage2D(i.TEXTURE_2D,me,Fe,Ke[0].width,Ke[0].height);for(let te=0,re=Ke.length;te<re;te++)Te=Ke[te],E.format!==rn?Ee!==null?Ve?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?V&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Te.width,Te.height,Ee,De,Te.data):t.texImage2D(i.TEXTURE_2D,te,Fe,Te.width,Te.height,0,Ee,De,Te.data)}else if(E.isDataArrayTexture)if(Ve){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Fe,ue.width,ue.height,ue.depth),V)if(E.layerUpdates.size>0){const te=gu(ue.width,ue.height,E.format,E.type);for(const re of E.layerUpdates){const Me=ue.data.subarray(re*te/ue.data.BYTES_PER_ELEMENT,(re+1)*te/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ue.width,ue.height,1,Ee,De,Me)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,De,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ue.width,ue.height,ue.depth,0,Ee,De,ue.data);else if(E.isData3DTexture)Ve?(ut&&t.texStorage3D(i.TEXTURE_3D,me,Fe,ue.width,ue.height,ue.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,De,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ue.width,ue.height,ue.depth,0,Ee,De,ue.data);else if(E.isFramebufferTexture){if(ut)if(Ve)t.texStorage2D(i.TEXTURE_2D,me,Fe,ue.width,ue.height);else{let te=ue.width,re=ue.height;for(let Me=0;Me<me;Me++)t.texImage2D(i.TEXTURE_2D,Me,Fe,te,re,0,Ee,De,null),te>>=1,re>>=1}}else if(Ke.length>0){if(Ve&&ut){const te=Se(Ke[0]);t.texStorage2D(i.TEXTURE_2D,me,Fe,te.width,te.height)}for(let te=0,re=Ke.length;te<re;te++)Te=Ke[te],Ve?V&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ee,De,Te):t.texImage2D(i.TEXTURE_2D,te,Fe,Ee,De,Te);E.generateMipmaps=!1}else if(Ve){if(ut){const te=Se(ue);t.texStorage2D(i.TEXTURE_2D,me,Fe,te.width,te.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,De,ue)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Ee,De,ue);m(E)&&d(se),Pe.__version=ie.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ee(P,E,$){if(E.image.length!==6)return;const se=le(P,E),oe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+$);const ie=n.get(oe);if(oe.version!==ie.__version||se===!0){t.activeTexture(i.TEXTURE0+$);const Pe=je.getPrimaries(je.workingColorSpace),ge=E.colorSpace===fi?null:je.getPrimaries(E.colorSpace),be=E.colorSpace===fi||Pe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let re=0;re<6;re++)!$e&&!ue?Ee[re]=_(E.image[re],!0,s.maxCubemapSize):Ee[re]=ue?E.image[re].image:E.image[re],Ee[re]=Xe(E,Ee[re]);const De=Ee[0],Fe=r.convert(E.format,E.colorSpace),Te=r.convert(E.type),Ke=y(E.internalFormat,Fe,Te,E.colorSpace),Ve=E.isVideoTexture!==!0,ut=ie.__version===void 0||se===!0,V=oe.dataReady;let me=b(E,De);ce(i.TEXTURE_CUBE_MAP,E);let te;if($e){Ve&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ke,De.width,De.height);for(let re=0;re<6;re++){te=Ee[re].mipmaps;for(let Me=0;Me<te.length;Me++){const xe=te[Me];E.format!==rn?Fe!==null?Ve?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,0,0,xe.width,xe.height,Fe,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,Ke,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,0,0,xe.width,xe.height,Fe,Te,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,Ke,xe.width,xe.height,0,Fe,Te,xe.data)}}}else{if(te=E.mipmaps,Ve&&ut){te.length>0&&me++;const re=Se(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ke,re.width,re.height)}for(let re=0;re<6;re++)if(ue){Ve?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee[re].width,Ee[re].height,Fe,Te,Ee[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,Ee[re].width,Ee[re].height,0,Fe,Te,Ee[re].data);for(let Me=0;Me<te.length;Me++){const ze=te[Me].image[re].image;Ve?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,0,0,ze.width,ze.height,Fe,Te,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,Ke,ze.width,ze.height,0,Fe,Te,ze.data)}}else{Ve?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Fe,Te,Ee[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,Fe,Te,Ee[re]);for(let Me=0;Me<te.length;Me++){const xe=te[Me];Ve?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,0,0,Fe,Te,xe.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,Ke,Fe,Te,xe.image[re])}}}m(E)&&d(i.TEXTURE_CUBE_MAP),ie.__version=oe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function q(P,E,$,se,oe,ie){const Pe=r.convert($.format,$.colorSpace),ge=r.convert($.type),be=y($.internalFormat,Pe,ge,$.colorSpace),$e=n.get(E),ue=n.get($);if(ue.__renderTarget=E,!$e.__hasExternalTextures){const Ee=Math.max(1,E.width>>ie),De=Math.max(1,E.height>>ie);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ie,be,Ee,De,E.depth,0,Pe,ge,null):t.texImage2D(oe,ie,be,Ee,De,0,Pe,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ve(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,oe,ue.__webglTexture,0,Ae(E)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,oe,ue.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(P,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const se=E.depthTexture,oe=se&&se.isDepthTexture?se.type:null,ie=x(E.stencilBuffer,oe),Pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=Ae(E);ve(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ie,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ie,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ie,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,P)}else{const se=E.textures;for(let oe=0;oe<se.length;oe++){const ie=se[oe],Pe=r.convert(ie.format,ie.colorSpace),ge=r.convert(ie.type),be=y(ie.internalFormat,Pe,ge,ie.colorSpace),$e=Ae(E);$&&ve(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,be,E.width,E.height):ve(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,be,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,be,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(E.depthTexture);se.__renderTarget=E,(!se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const oe=se.__webglTexture,ie=Ae(E);if(E.depthTexture.format===ps)ve(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(E.depthTexture.format===Ss)ve(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function C(P){const E=n.get(P),$=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",oe)};se.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=se}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,P)}else if($){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=i.createRenderbuffer(),ne(E.__webglDepthbuffer[se],P,!1);else{const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ne(E.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function K(P,E,$){const se=n.get(P);E!==void 0&&q(se.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&C(P)}function Q(P){const E=P.texture,$=n.get(P),se=n.get(E);P.addEventListener("dispose",R);const oe=P.textures,ie=P.isWebGLCubeRenderTarget===!0,Pe=oe.length>1;if(Pe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=E.version,o.memory.textures++),ie){$.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[ge]=[];for(let be=0;be<E.mipmaps.length;be++)$.__webglFramebuffer[ge][be]=i.createFramebuffer()}else $.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)$.__webglFramebuffer[ge]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ge=0,be=oe.length;ge<be;ge++){const $e=n.get(oe[ge]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ve(P)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){const be=oe[ge];$.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ge]);const $e=r.convert(be.format,be.colorSpace),ue=r.convert(be.type),Ee=y(be.internalFormat,$e,ue,be.colorSpace,P.isXRRenderTarget===!0),De=Ae(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Ee,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,$.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ne($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),ce(i.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)q($.__webglFramebuffer[ge][be],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,be);else q($.__webglFramebuffer[ge],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(E)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ge=0,be=oe.length;ge<be;ge++){const $e=oe[ge],ue=n.get($e);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),ce(i.TEXTURE_2D,$e),q($.__webglFramebuffer,P,$e,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m($e)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),ce(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)q($.__webglFramebuffer[be],P,E,i.COLOR_ATTACHMENT0,ge,be);else q($.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,ge,0);m(E)&&d(ge),t.unbindTexture()}P.depthBuffer&&C(P)}function ae(P){const E=P.textures;for(let $=0,se=E.length;$<se;$++){const oe=E[$];if(m(oe)){const ie=v(P),Pe=n.get(oe).__webglTexture;t.bindTexture(ie,Pe),d(ie),t.unbindTexture()}}}const pe=[],F=[];function Ne(P){if(P.samples>0){if(ve(P)===!1){const E=P.textures,$=P.width,se=P.height;let oe=i.COLOR_BUFFER_BIT;const ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(P),ge=E.length>1;if(ge)for(let be=0;be<E.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let be=0;be<E.length;be++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[be]);const $e=n.get(E[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,$,se,0,0,$,se,oe,i.NEAREST),l===!0&&(pe.length=0,F.length=0,pe.push(i.COLOR_ATTACHMENT0+be),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pe.push(ie),F.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let be=0;be<E.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[be]);const $e=n.get(E[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ae(P){return Math.min(s.maxSamples,P.samples)}function ve(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _e(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Xe(P,E){const $=P.colorSpace,se=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==$t&&$!==fi&&(je.getTransfer($)===ct?(se!==rn||oe!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=I,this.rebindTextures=K,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ve}function D_(i,e){function t(n,s=fi){let r;const o=je.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.BYTE;if(n===gh)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===yh)return i.RGB;if(n===rn)return i.RGBA;if(n===vh)return i.LUMINANCE;if(n===Mh)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===Ul)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===Sh)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===ao||n===lo||n===co||n===uo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Wa||n===Xa||n===Ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===ja||n===Ka)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===ja)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$a||n===Za||n===Ja||n===Qa||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===ul||n===hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ho)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bh||n===fl||n===dl||n===pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class U_ extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class et extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const F_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Rt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k_ extends Is{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new B_,m=t.getContextAttributes();let d=null,v=null;const y=[],x=[],b=new ke;let T=null;const R=new Jt;R.viewport=new nt;const L=new Jt;L.viewport=new nt;const S=[R,L],M=new U_;let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=y[j];return ee===void 0&&(ee=new ca,y[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=y[j];return ee===void 0&&(ee=new ca,y[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=y[j];return ee===void 0&&(ee=new ca,y[j]=ee),ee.getHandSpace()};function k(j){const ee=x.indexOf(j.inputSource);if(ee===-1)return;const q=y[ee];q!==void 0&&(q.update(j.inputSource,j.frame,c||o),q.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",B);for(let j=0;j<y.length;j++){const ee=x[j];ee!==null&&(x[j]=null,y[j].disconnect(ee))}A=null,z=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,v=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",U),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new vi(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,q=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Ss:ps,q=m.stencil?Ms:Xi);const de={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(de),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new vi(f.textureWidth,f.textureHeight,{format:rn,type:Jn,depthTexture:new Bh(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(j){for(let ee=0;ee<j.removed.length;ee++){const q=j.removed[ee],ne=x.indexOf(q);ne>=0&&(x[ne]=null,y[ne].disconnect(q))}for(let ee=0;ee<j.added.length;ee++){const q=j.added[ee];let ne=x.indexOf(q);if(ne===-1){for(let C=0;C<y.length;C++)if(C>=x.length){x.push(q),ne=C;break}else if(x[C]===null){x[C]=q,ne=C;break}if(ne===-1)break}const de=y[ne];de&&de.connect(q)}}const N=new O,W=new O;function I(j,ee,q){N.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(q.matrixWorld);const ne=N.distanceTo(W),de=ee.projectionMatrix.elements,C=q.projectionMatrix.elements,K=de[14]/(de[10]-1),Q=de[14]/(de[10]+1),ae=(de[9]+1)/de[5],pe=(de[9]-1)/de[5],F=(de[8]-1)/de[0],Ne=(C[8]+1)/C[0],Ae=K*F,ve=K*Ne,_e=ne/(-F+Ne),Xe=_e*-F;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Xe),j.translateZ(_e),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),de[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Se=K+_e,P=Q+_e,E=Ae-Xe,$=ve+(ne-Xe),se=ae*Q/P*Se,oe=pe*Q/P*Se;j.projectionMatrix.makePerspective(E,$,se,oe,Se,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function D(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ee=j.near,q=j.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(q=_.depthFar)),M.near=L.near=R.near=ee,M.far=L.far=R.far=q,(A!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,z=M.far),R.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const ne=j.parent,de=M.cameras;D(M,ne);for(let C=0;C<de.length;C++)D(de[C],ne);de.length===2?I(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),G(j,M,ne)};function G(j,ee,q){q===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(q.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=bs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let H=null;function ce(j,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const q=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ne=!1;q.length!==M.cameras.length&&(M.cameras.length=0,ne=!0);for(let C=0;C<q.length;C++){const K=q[C];let Q=null;if(p!==null)Q=p.getViewport(K);else{const pe=h.getViewSubImage(f,K);Q=pe.viewport,C===0&&(e.setRenderTargetTextures(v,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(v))}let ae=S[C];ae===void 0&&(ae=new Jt,ae.layers.enable(C),ae.viewport=new nt,S[C]=ae),ae.matrix.fromArray(K.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(K.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Q.x,Q.y,Q.width,Q.height),C===0&&(M.matrix.copy(ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ne===!0&&M.cameras.push(ae)}const de=s.enabledFeatures;if(de&&de.includes("depth-sensing")){const C=h.getDepthInformation(q[0]);C&&C.isValid&&C.texture&&_.init(e,C,s.renderState)}}for(let q=0;q<y.length;q++){const ne=x[q],de=y[q];ne!==null&&de!==void 0&&de.update(ne,ee,c||o)}H&&H(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const le=new Oh;le.setAnimationLoop(ce),this.setAnimationLoop=function(j){H=j},this.dispose=function(){}}}const wi=new dn,z_=new Be;function H_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Uh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ot&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ot&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,wi.copy(x),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(wi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(v,b);const T=e.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function u(v){const y=h();v.__bindingPointIndex=y;const x=i.createBuffer(),b=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],x=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=x.length;T<R;T++){const L=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=L.length;S<M;S++){const A=L[S];if(p(A,T,S,b)===!0){const z=A.__offset,k=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let B=0;B<k.length;B++){const N=k[B],W=_(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,z+U,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,U),U+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,y,x,b){const T=v.value,R=y+"_"+x;if(b[R]===void 0)return typeof T=="number"||typeof T=="boolean"?b[R]=T:b[R]=T.clone(),!0;{const L=b[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return b[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(v){const y=v.uniforms;let x=0;const b=16;for(let R=0,L=y.length;R<L;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,A=S.length;M<A;M++){const z=S[M],k=Array.isArray(z.value)?z.value:[z.value];for(let U=0,B=k.length;U<B;U++){const N=k[U],W=_(N),I=x%b,D=I%W.boundary,G=I+D;x+=D,G!==0&&b-G<W.storage&&(x+=b-G),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=W.storage}}}const T=x%b;return T>0&&(x+=b-T),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class V_{constructor(e={}){const{canvas:t=Pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=gi,this.toneMappingExposure=1;const x=this;let b=!1,T=0,R=0,L=null,S=-1,M=null;const A=new nt,z=new nt;let k=null;const U=new Le(0);let B=0,N=t.width,W=t.height,I=1,D=null,G=null;const H=new nt(0,0,N,W),ce=new nt(0,0,N,W);let le=!1;const j=new kl;let ee=!1,q=!1;const ne=new Be,de=new Be,C=new O,K=new nt,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function pe(){return L===null?I:1}let F=n;function Ne(w,X){return t.getContext(w,X)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",xe,!1),F===null){const X="webgl2";if(F=Ne(X,w),F===null)throw Ne(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ae,ve,_e,Xe,Se,P,E,$,se,oe,ie,Pe,ge,be,$e,ue,Ee,De,Fe,Te,Ke,Ve,ut,V;function me(){Ae=new j0(F),Ae.init(),Ve=new D_(F,Ae),ve=new G0(F,Ae,e,Ve),_e=new L_(F,Ae),ve.reverseDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),Xe=new Z0(F),Se=new m_,P=new I_(F,Ae,_e,Se,ve,Ve,Xe),E=new W0(x),$=new q0(x),se=new sp(F),ut=new z0(F,se),oe=new K0(F,se,Xe,ut),ie=new Q0(F,oe,se,Xe),Fe=new J0(F,ve,P),ue=new V0(Se),Pe=new p_(x,E,$,Ae,ve,ut,ue),ge=new H_(x,Se),be=new __,$e=new b_(Ae),De=new k0(x,E,$,_e,ie,p,l),Ee=new R_(x,ie,ve),V=new G_(F,Xe,ve,_e),Te=new H0(F,Ae,Xe),Ke=new $0(F,Ae,Xe),Xe.programs=Pe.programs,x.capabilities=ve,x.extensions=Ae,x.properties=Se,x.renderLists=be,x.shadowMap=Ee,x.state=_e,x.info=Xe}me();const te=new k_(x,F);this.xr=te,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(N,W,!1))},this.getSize=function(w){return w.set(N,W)},this.setSize=function(w,X,Z=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,W=X,t.width=Math.floor(w*I),t.height=Math.floor(X*I),Z===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(N*I,W*I).floor()},this.setDrawingBufferSize=function(w,X,Z){N=w,W=X,I=Z,t.width=Math.floor(w*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,X,Z,J){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,X,Z,J),_e.viewport(A.copy(H).multiplyScalar(I).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,X,Z,J){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,X,Z,J),_e.scissor(z.copy(ce).multiplyScalar(I).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(w){_e.setScissorTest(le=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){G=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,X=!0,Z=!0){let J=0;if(w){let Y=!1;if(L!==null){const he=L.texture.format;Y=he===Ol||he===Fl||he===Nl}if(Y){const he=L.texture.type,ye=he===Jn||he===Xi||he===hr||he===Ms||he===Il||he===Dl,we=De.getClearColor(),Re=De.getClearAlpha(),Oe=we.r,He=we.g,Ce=we.b;ye?(g[0]=Oe,g[1]=He,g[2]=Ce,g[3]=Re,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Oe,_[1]=He,_[2]=Ce,_[3]=Re,F.clearBufferiv(F.COLOR,0,_))}else J|=F.COLOR_BUFFER_BIT}X&&(J|=F.DEPTH_BUFFER_BIT),Z&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),be.dispose(),$e.dispose(),Se.dispose(),E.dispose(),$.dispose(),ie.dispose(),ut.dispose(),V.dispose(),Pe.dispose(),te.dispose(),te.removeEventListener("sessionstart",ac),te.removeEventListener("sessionend",lc),Mi.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=Xe.autoReset,X=Ee.enabled,Z=Ee.autoUpdate,J=Ee.needsUpdate,Y=Ee.type;me(),Xe.autoReset=w,Ee.enabled=X,Ee.autoUpdate=Z,Ee.needsUpdate=J,Ee.type=Y}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ze(w){const X=w.target;X.removeEventListener("dispose",ze),xt(X)}function xt(w){Bt(w),Se.remove(w)}function Bt(w){const X=Se.get(w).programs;X!==void 0&&(X.forEach(function(Z){Pe.releaseProgram(Z)}),w.isShaderMaterial&&Pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,Z,J,Y,he){X===null&&(X=Q);const ye=Y.isMesh&&Y.matrixWorld.determinant()<0,we=Sf(w,X,Z,J,Y);_e.setMaterial(J,ye);let Re=Z.index,Oe=1;if(J.wireframe===!0){if(Re=oe.getWireframeAttribute(Z),Re===void 0)return;Oe=2}const He=Z.drawRange,Ce=Z.attributes.position;let Je=He.start*Oe,ht=(He.start+He.count)*Oe;he!==null&&(Je=Math.max(Je,he.start*Oe),ht=Math.min(ht,(he.start+he.count)*Oe)),Re!==null?(Je=Math.max(Je,0),ht=Math.min(ht,Re.count)):Ce!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,Ce.count));const ft=ht-Je;if(ft<0||ft===1/0)return;ut.setup(Y,J,we,Z,Re);let Zt,it=Te;if(Re!==null&&(Zt=se.get(Re),it=Ke,it.setIndex(Zt)),Y.isMesh)J.wireframe===!0?(_e.setLineWidth(J.wireframeLinewidth*pe()),it.setMode(F.LINES)):it.setMode(F.TRIANGLES);else if(Y.isLine){let Ie=J.linewidth;Ie===void 0&&(Ie=1),_e.setLineWidth(Ie*pe()),Y.isLineSegments?it.setMode(F.LINES):Y.isLineLoop?it.setMode(F.LINE_LOOP):it.setMode(F.LINE_STRIP)}else Y.isPoints?it.setMode(F.POINTS):Y.isSprite&&it.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)it.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))it.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ie=Y._multiDrawStarts,kn=Y._multiDrawCounts,st=Y._multiDrawCount,gn=Re?se.get(Re).bytesPerElement:1,qi=Se.get(J).currentProgram.getUniforms();for(let en=0;en<st;en++)qi.setValue(F,"_gl_DrawID",en),it.render(Ie[en]/gn,kn[en])}else if(Y.isInstancedMesh)it.renderInstances(Je,ft,Y.count);else if(Z.isInstancedBufferGeometry){const Ie=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,kn=Math.min(Z.instanceCount,Ie);it.renderInstances(Je,ft,kn)}else it.render(Je,ft)};function rt(w,X,Z){w.transparent===!0&&w.side===hn&&w.forceSinglePass===!1?(w.side=Ot,w.needsUpdate=!0,Er(w,X,Z),w.side=sn,w.needsUpdate=!0,Er(w,X,Z),w.side=hn):Er(w,X,Z)}this.compile=function(w,X,Z=null){Z===null&&(Z=w),d=$e.get(Z),d.init(X),y.push(d),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),w!==Z&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights();const J=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const he=Y.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){const we=he[ye];rt(we,Z,Y),J.add(we)}else rt(he,Z,Y),J.add(he)}),y.pop(),d=null,J},this.compileAsync=function(w,X,Z=null){const J=this.compile(w,X,Z);return new Promise(Y=>{function he(){if(J.forEach(function(ye){Se.get(ye).currentProgram.isReady()&&J.delete(ye)}),J.size===0){Y(w);return}setTimeout(he,10)}Ae.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let mn=null;function Bn(w){mn&&mn(w)}function ac(){Mi.stop()}function lc(){Mi.start()}const Mi=new Oh;Mi.setAnimationLoop(Bn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(w){mn=w,te.setAnimationLoop(w),w===null?Mi.stop():Mi.start()},te.addEventListener("sessionstart",ac),te.addEventListener("sessionend",lc),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(X),X=te.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,X,L),d=$e.get(w,y.length),d.init(X),y.push(d),de.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(de),q=this.localClippingEnabled,ee=ue.init(this.clippingPlanes,q),m=be.get(w,v.length),m.init(),v.push(m),te.enabled===!0&&te.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&No(he,X,-1/0,x.sortObjects)}No(w,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(D,G),ae=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ae&&De.addToRenderList(m,w),this.info.render.frame++,ee===!0&&ue.beginShadows();const Z=d.state.shadowsArray;Ee.render(Z,w,X),ee===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,Y=m.transmissive;if(d.setupLights(),X.isArrayCamera){const he=X.cameras;if(Y.length>0)for(let ye=0,we=he.length;ye<we;ye++){const Re=he[ye];uc(J,Y,w,Re)}ae&&De.render(w);for(let ye=0,we=he.length;ye<we;ye++){const Re=he[ye];cc(m,w,Re,Re.viewport)}}else Y.length>0&&uc(J,Y,w,X),ae&&De.render(w),cc(m,w,X);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,X),ut.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],ee===!0&&ue.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function No(w,X,Z,J){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){J&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);const ye=ie.update(w),we=w.material;we.visible&&m.push(w,ye,we,Z,K.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const ye=ie.update(w),we=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),K.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),K.copy(ye.boundingSphere.center)),K.applyMatrix4(w.matrixWorld).applyMatrix4(de)),Array.isArray(we)){const Re=ye.groups;for(let Oe=0,He=Re.length;Oe<He;Oe++){const Ce=Re[Oe],Je=we[Ce.materialIndex];Je&&Je.visible&&m.push(w,ye,Je,Z,K.z,Ce)}}else we.visible&&m.push(w,ye,we,Z,K.z,null)}}const he=w.children;for(let ye=0,we=he.length;ye<we;ye++)No(he[ye],X,Z,J)}function cc(w,X,Z,J){const Y=w.opaque,he=w.transmissive,ye=w.transparent;d.setupLightsView(Z),ee===!0&&ue.setGlobalState(x.clippingPlanes,Z),J&&_e.viewport(A.copy(J)),Y.length>0&&br(Y,X,Z),he.length>0&&br(he,X,Z),ye.length>0&&br(ye,X,Z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function uc(w,X,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new vi(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Ps:Jn,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const he=d.state.transmissionRenderTarget[J.id],ye=J.viewport||A;he.setSize(ye.z,ye.w);const we=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(U),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),ae&&De.render(Z);const Re=x.toneMapping;x.toneMapping=gi;const Oe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),ee===!0&&ue.setGlobalState(x.clippingPlanes,J),br(w,Z,J),P.updateMultisampleRenderTarget(he),P.updateRenderTargetMipmap(he),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ce=0,Je=X.length;Ce<Je;Ce++){const ht=X[Ce],ft=ht.object,Zt=ht.geometry,it=ht.material,Ie=ht.group;if(it.side===hn&&ft.layers.test(J.layers)){const kn=it.side;it.side=Ot,it.needsUpdate=!0,hc(ft,Z,J,Zt,it,Ie),it.side=kn,it.needsUpdate=!0,He=!0}}He===!0&&(P.updateMultisampleRenderTarget(he),P.updateRenderTargetMipmap(he))}x.setRenderTarget(we),x.setClearColor(U,B),Oe!==void 0&&(J.viewport=Oe),x.toneMapping=Re}function br(w,X,Z){const J=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,he=w.length;Y<he;Y++){const ye=w[Y],we=ye.object,Re=ye.geometry,Oe=J===null?ye.material:J,He=ye.group;we.layers.test(Z.layers)&&hc(we,X,Z,Re,Oe,He)}}function hc(w,X,Z,J,Y,he){w.onBeforeRender(x,X,Z,J,Y,he),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(x,X,Z,J,w,he),Y.transparent===!0&&Y.side===hn&&Y.forceSinglePass===!1?(Y.side=Ot,Y.needsUpdate=!0,x.renderBufferDirect(Z,X,J,Y,w,he),Y.side=sn,Y.needsUpdate=!0,x.renderBufferDirect(Z,X,J,Y,w,he),Y.side=hn):x.renderBufferDirect(Z,X,J,Y,w,he),w.onAfterRender(x,X,Z,J,Y,he)}function Er(w,X,Z){X.isScene!==!0&&(X=Q);const J=Se.get(w),Y=d.state.lights,he=d.state.shadowsArray,ye=Y.state.version,we=Pe.getParameters(w,Y.state,he,X,Z),Re=Pe.getProgramCacheKey(we);let Oe=J.programs;J.environment=w.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(w.isMeshStandardMaterial?$:E).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",ze),Oe=new Map,J.programs=Oe);let He=Oe.get(Re);if(He!==void 0){if(J.currentProgram===He&&J.lightsStateVersion===ye)return dc(w,we),He}else we.uniforms=Pe.getUniforms(w),w.onBeforeCompile(we,x),He=Pe.acquireProgram(we,Re),Oe.set(Re,He),J.uniforms=we.uniforms;const Ce=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=ue.uniform),dc(w,we),J.needsLights=Ef(w),J.lightsStateVersion=ye,J.needsLights&&(Ce.ambientLightColor.value=Y.state.ambient,Ce.lightProbe.value=Y.state.probe,Ce.directionalLights.value=Y.state.directional,Ce.directionalLightShadows.value=Y.state.directionalShadow,Ce.spotLights.value=Y.state.spot,Ce.spotLightShadows.value=Y.state.spotShadow,Ce.rectAreaLights.value=Y.state.rectArea,Ce.ltc_1.value=Y.state.rectAreaLTC1,Ce.ltc_2.value=Y.state.rectAreaLTC2,Ce.pointLights.value=Y.state.point,Ce.pointLightShadows.value=Y.state.pointShadow,Ce.hemisphereLights.value=Y.state.hemi,Ce.directionalShadowMap.value=Y.state.directionalShadowMap,Ce.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ce.spotShadowMap.value=Y.state.spotShadowMap,Ce.spotLightMatrix.value=Y.state.spotLightMatrix,Ce.spotLightMap.value=Y.state.spotLightMap,Ce.pointShadowMap.value=Y.state.pointShadowMap,Ce.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=He,J.uniformsList=null,He}function fc(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=fo.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function dc(w,X){const Z=Se.get(w);Z.outputColorSpace=X.outputColorSpace,Z.batching=X.batching,Z.batchingColor=X.batchingColor,Z.instancing=X.instancing,Z.instancingColor=X.instancingColor,Z.instancingMorph=X.instancingMorph,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function Sf(w,X,Z,J,Y){X.isScene!==!0&&(X=Q),P.resetTextureUnits();const he=X.fog,ye=J.isMeshStandardMaterial?X.environment:null,we=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:$t,Re=(J.isMeshStandardMaterial?$:E).get(J.envMap||ye),Oe=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,He=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ce=!!Z.morphAttributes.position,Je=!!Z.morphAttributes.normal,ht=!!Z.morphAttributes.color;let ft=gi;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ft=x.toneMapping);const Zt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,it=Zt!==void 0?Zt.length:0,Ie=Se.get(J),kn=d.state.lights;if(ee===!0&&(q===!0||w!==M)){const on=w===M&&J.id===S;ue.setState(J,w,on)}let st=!1;J.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==kn.state.version||Ie.outputColorSpace!==we||Y.isBatchedMesh&&Ie.batching===!1||!Y.isBatchedMesh&&Ie.batching===!0||Y.isBatchedMesh&&Ie.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ie.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ie.instancing===!1||!Y.isInstancedMesh&&Ie.instancing===!0||Y.isSkinnedMesh&&Ie.skinning===!1||!Y.isSkinnedMesh&&Ie.skinning===!0||Y.isInstancedMesh&&Ie.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ie.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ie.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ie.instancingMorph===!1&&Y.morphTexture!==null||Ie.envMap!==Re||J.fog===!0&&Ie.fog!==he||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ue.numPlanes||Ie.numIntersection!==ue.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==He||Ie.morphTargets!==Ce||Ie.morphNormals!==Je||Ie.morphColors!==ht||Ie.toneMapping!==ft||Ie.morphTargetsCount!==it)&&(st=!0):(st=!0,Ie.__version=J.version);let gn=Ie.currentProgram;st===!0&&(gn=Er(J,X,Y));let qi=!1,en=!1,Os=!1;const dt=gn.getUniforms(),Ln=Ie.uniforms;if(_e.useProgram(gn.program)&&(qi=!0,en=!0,Os=!0),J.id!==S&&(S=J.id,en=!0),qi||M!==w){_e.buffers.depth.getReversed()?(ne.copy(w.projectionMatrix),Dd(ne),Ud(ne),dt.setValue(F,"projectionMatrix",ne)):dt.setValue(F,"projectionMatrix",w.projectionMatrix),dt.setValue(F,"viewMatrix",w.matrixWorldInverse);const ti=dt.map.cameraPosition;ti!==void 0&&ti.setValue(F,C.setFromMatrixPosition(w.matrixWorld)),ve.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&dt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,en=!0,Os=!0)}if(Y.isSkinnedMesh){dt.setOptional(F,Y,"bindMatrix"),dt.setOptional(F,Y,"bindMatrixInverse");const on=Y.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),dt.setValue(F,"boneTexture",on.boneTexture,P))}Y.isBatchedMesh&&(dt.setOptional(F,Y,"batchingTexture"),dt.setValue(F,"batchingTexture",Y._matricesTexture,P),dt.setOptional(F,Y,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",Y._indirectTexture,P),dt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",Y._colorsTexture,P));const Bs=Z.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&Fe.update(Y,Z,gn),(en||Ie.receiveShadow!==Y.receiveShadow)&&(Ie.receiveShadow=Y.receiveShadow,dt.setValue(F,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ln.envMap.value=Re,Ln.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(Ln.envMapIntensity.value=X.environmentIntensity),en&&(dt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&bf(Ln,Os),he&&J.fog===!0&&ge.refreshFogUniforms(Ln,he),ge.refreshMaterialUniforms(Ln,J,I,W,d.state.transmissionRenderTarget[w.id]),fo.upload(F,fc(Ie),Ln,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(fo.upload(F,fc(Ie),Ln,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&dt.setValue(F,"center",Y.center),dt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),dt.setValue(F,"normalMatrix",Y.normalMatrix),dt.setValue(F,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const on=J.uniformsGroups;for(let ti=0,ni=on.length;ti<ni;ti++){const pc=on[ti];V.update(pc,gn),V.bind(pc,gn)}}return gn}function bf(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Ef(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,X,Z){Se.get(w.texture).__webglTexture=X,Se.get(w.depthTexture).__webglTexture=Z;const J=Se.get(w);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,X){const Z=Se.get(w);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,Z=0){L=w,T=X,R=Z;let J=!0,Y=null,he=!1,ye=!1;if(w){const Re=Se.get(w);if(Re.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(F.FRAMEBUFFER,null),J=!1;else if(Re.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Re.__hasExternalTextures)P.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ce=w.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&Se.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ye=!0);const He=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[X])?Y=He[X][Z]:Y=He[X],he=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?Y=Se.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?Y=He[Z]:Y=He,A.copy(w.viewport),z.copy(w.scissor),k=w.scissorTest}else A.copy(H).multiplyScalar(I).floor(),z.copy(ce).multiplyScalar(I).floor(),k=le;if(_e.bindFramebuffer(F.FRAMEBUFFER,Y)&&J&&_e.drawBuffers(w,Y),_e.viewport(A),_e.scissor(z),_e.setScissorTest(k),he){const Re=Se.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re.__webglTexture,Z)}else if(ye){const Re=Se.get(w.texture),Oe=X||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,Z||0,Oe)}S=-1},this.readRenderTargetPixels=function(w,X,Z,J,Y,he,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){_e.bindFramebuffer(F.FRAMEBUFFER,we);try{const Re=w.texture,Oe=Re.format,He=Re.type;if(!ve.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-J&&Z>=0&&Z<=w.height-Y&&F.readPixels(X,Z,J,Y,Ve.convert(Oe),Ve.convert(He),he)}finally{const Re=L!==null?Se.get(L).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,X,Z,J,Y,he,ye){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){const Re=w.texture,Oe=Re.format,He=Re.type;if(!ve.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=w.width-J&&Z>=0&&Z<=w.height-Y){_e.bindFramebuffer(F.FRAMEBUFFER,we);const Ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ce),F.bufferData(F.PIXEL_PACK_BUFFER,he.byteLength,F.STREAM_READ),F.readPixels(X,Z,J,Y,Ve.convert(Oe),Ve.convert(He),0);const Je=L!==null?Se.get(L).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Je);const ht=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Id(F,ht,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,he),F.deleteBuffer(Ce),F.deleteSync(ht),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,X=null,Z=0){w.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1]);const J=Math.pow(2,-Z),Y=Math.floor(w.image.width*J),he=Math.floor(w.image.height*J),ye=X!==null?X.x:0,we=X!==null?X.y:0;P.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,ye,we,Y,he),_e.unbindTexture()},this.copyTextureToTexture=function(w,X,Z=null,J=null,Y=0){w.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,w=arguments[1],X=arguments[2],Y=arguments[3]||0,Z=null);let he,ye,we,Re,Oe,He,Ce,Je,ht;const ft=w.isCompressedTexture?w.mipmaps[Y]:w.image;Z!==null?(he=Z.max.x-Z.min.x,ye=Z.max.y-Z.min.y,we=Z.isBox3?Z.max.z-Z.min.z:1,Re=Z.min.x,Oe=Z.min.y,He=Z.isBox3?Z.min.z:0):(he=ft.width,ye=ft.height,we=ft.depth||1,Re=0,Oe=0,He=0),J!==null?(Ce=J.x,Je=J.y,ht=J.z):(Ce=0,Je=0,ht=0);const Zt=Ve.convert(X.format),it=Ve.convert(X.type);let Ie;X.isData3DTexture?(P.setTexture3D(X,0),Ie=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),Ie=F.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),Ie=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const kn=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),gn=F.getParameter(F.UNPACK_SKIP_PIXELS),qi=F.getParameter(F.UNPACK_SKIP_ROWS),en=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Re),F.pixelStorei(F.UNPACK_SKIP_ROWS,Oe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,He);const Os=w.isDataArrayTexture||w.isData3DTexture,dt=X.isDataArrayTexture||X.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Ln=Se.get(w),Bs=Se.get(X),on=Se.get(Ln.__renderTarget),ti=Se.get(Bs.__renderTarget);_e.bindFramebuffer(F.READ_FRAMEBUFFER,on.__webglFramebuffer),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ni=0;ni<we;ni++)Os&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.get(w).__webglTexture,Y,He+ni),w.isDepthTexture?(dt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.get(X).__webglTexture,Y,ht+ni),F.blitFramebuffer(Re,Oe,he,ye,Ce,Je,he,ye,F.DEPTH_BUFFER_BIT,F.NEAREST)):dt?F.copyTexSubImage3D(Ie,Y,Ce,Je,ht+ni,Re,Oe,he,ye):F.copyTexSubImage2D(Ie,Y,Ce,Je,ht+ni,Re,Oe,he,ye);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dt?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ie,Y,Ce,Je,ht,he,ye,we,Zt,it,ft.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,Y,Ce,Je,ht,he,ye,we,Zt,ft.data):F.texSubImage3D(Ie,Y,Ce,Je,ht,he,ye,we,Zt,it,ft):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Y,Ce,Je,he,ye,Zt,it,ft.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Y,Ce,Je,ft.width,ft.height,Zt,ft.data):F.texSubImage2D(F.TEXTURE_2D,Y,Ce,Je,he,ye,Zt,it,ft);F.pixelStorei(F.UNPACK_ROW_LENGTH,kn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gn),F.pixelStorei(F.UNPACK_SKIP_ROWS,qi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,en),Y===0&&X.generateMipmaps&&F.generateMipmap(Ie),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,X,Z=null,J=null,Y=0){return w.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,w=arguments[2],X=arguments[3],Y=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,Z,J,Y)},this.initRenderTarget=function(w){Se.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,_e.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class _u extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class W_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new O;class Hl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xu=new O,yu=new nt,vu=new nt,X_=new O,Mu=new Be,Xr=new O,ua=new Nn,Su=new Be,ha=new Co;class Y_ extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yc,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingBox.expandByPoint(Xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingSphere.expandByPoint(Xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(s),e.ray.intersectsSphere(ua)!==!1&&(Su.copy(s).invert(),ha.copy(e.ray).applyMatrix4(Su),!(this.boundingBox!==null&&ha.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ha)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;yu.fromBufferAttribute(s.attributes.skinIndex,e),vu.fromBufferAttribute(s.attributes.skinWeight,e),xu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=vu.getComponent(r);if(o!==0){const a=yu.getComponent(r);Mu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(X_.copy(xu).applyMatrix4(Mu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vh extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gl extends Rt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=wt,u=wt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bu=new Be,q_=new Be;class Vl{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:q_;bu.multiplyMatrices(a,t[r]),bu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Vl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gl(t,e,e,rn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Vh),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class xl extends Wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new Be,Eu=new Be,Yr=[],Tu=new pn,j_=new Be,Vs=new Ye,Ws=new Nn;class po extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,j_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Tu.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(Tu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Ws.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),e.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),Eu.multiplyMatrices(n,ls),Vs.matrixWorld=Eu,Vs.raycast(e,Yr);for(let o=0,a=Yr.length;o<a;o++){const l=Yr[o];l.instanceId=r,l.object=this,t.push(l)}Yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gl(new Float32Array(s*this.count),s,this.count,Ul,En));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Wh extends fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xo=new O,yo=new O,Au=new Be,Xs=new Co,qr=new Nn,fa=new O,wu=new O;class Wl extends gt{constructor(e=new Xt,t=new Wh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xo.fromBufferAttribute(t,s-1),yo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xo.distanceTo(yo);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;Au.copy(s).invert(),Xs.copy(e.ray).applyMatrix4(Au);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),v=u.getX(_+1),y=jr(this,e,Xs,l,d,v);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=jr(this,e,Xs,l,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=jr(this,e,Xs,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=jr(this,e,Xs,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(xo.fromBufferAttribute(o,s),yo.fromBufferAttribute(o,r),t.distanceSqToSegment(xo,yo,fa,wu)>n)return;fa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(fa);if(!(l<e.near||l>e.far))return{distance:l,point:wu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Ru=new O,Cu=new O;class K_ extends Wl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ru.fromBufferAttribute(t,s),Cu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ru.distanceTo(Cu);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $_ extends Wl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xh extends fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lu=new Be,yl=new Co,Kr=new Nn,$r=new O;class Z_ extends gt{constructor(e=new Xt,t=new Xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;Lu.copy(s).invert(),yl.copy(e.ray).applyMatrix4(Lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);$r.fromBufferAttribute(h,m),Pu($r,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)$r.fromBufferAttribute(h,g),Pu($r,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pu(i,e,t,n,s,r,o){const a=yl.distanceSqToPoint(i);if(a<t){const l=new O;yl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Yh extends Rt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xl extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new O,u=new ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vt extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(p,2));function v(){const x=new O,b=new O;let T=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const S=[],M=L/r,A=M*(t-e)+e;for(let z=0;z<=s;z++){const k=z/s,U=k*l+a,B=Math.sin(U),N=Math.cos(U);b.x=A*B,b.y=-M*n+m,b.z=A*N,h.push(b.x,b.y,b.z),x.set(B,R,N).normalize(),f.push(x.x,x.y,x.z),p.push(k,1-M),S.push(g++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const M=_[S][L],A=_[S+1][L],z=_[S+1][L+1],k=_[S][L+1];(e>0||S!==0)&&(u.push(M,A,k),T+=3),(t>0||S!==r-1)&&(u.push(A,z,k),T+=3)}c.addGroup(d,T,0),d+=T}function y(x){const b=g,T=new ke,R=new O;let L=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const A=g;for(let z=0;z<=s;z++){const U=z/s*l+a,B=Math.cos(U),N=Math.sin(U);R.x=S*N,R.y=m*M,R.z=S*B,h.push(R.x,R.y,R.z),f.push(0,M,0),T.x=B*.5+.5,T.y=N*.5*M+.5,p.push(T.x,T.y),g++}for(let z=0;z<s;z++){const k=b+z,U=A+z;x===!0?u.push(U,U+1,k):u.push(U+1,U,k),L+=3}c.addGroup(d,L,x===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gr extends Vt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new gr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Po extends Xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new O,x=new O,b=new O;for(let T=0;T<t.length;T+=3)p(t[T+0],y),p(t[T+1],x),p(t[T+2],b),l(y,x,b,v)}function l(v,y,x,b){const T=b+1,R=[];for(let L=0;L<=T;L++){R[L]=[];const S=v.clone().lerp(x,L/T),M=y.clone().lerp(x,L/T),A=T-L;for(let z=0;z<=A;z++)z===0&&L===T?R[L][z]=S:R[L][z]=S.clone().lerp(M,z/A)}for(let L=0;L<T;L++)for(let S=0;S<2*(T-L)-1;S++){const M=Math.floor(S/2);S%2===0?(f(R[L][M+1]),f(R[L+1][M]),f(R[L][M])):(f(R[L][M+1]),f(R[L+1][M+1]),f(R[L+1][M]))}}function c(v){const y=new O;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const v=new O;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,b=d(v)/Math.PI+.5;o.push(x,1-b)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],b=o[v+4],T=Math.max(y,x,b),R=Math.min(y,x,b);T>.9&&R<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new O,y=new O,x=new O,b=new O,T=new ke,R=new ke,L=new ke;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),b.copy(v).add(y).add(x).divideScalar(3);const A=m(b);_(T,M+0,v,A),_(R,M+2,y,A),_(L,M+4,x,A)}}function _(v,y,x,b){b<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.vertices,e.indices,e.radius,e.details)}}class vo extends Po{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vo(e.radius,e.detail)}}class Yl extends Po{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yl(e.radius,e.detail)}}class yr extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,p=new O,g=new ke;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let d=0;d<n;d++){const v=d+m,y=v,x=v+n+1,b=v+n+2,T=v+1;a.push(y,x,T),a.push(x,b,T)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mo extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,f=new O,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const v=[],y=d/n;let x=0;d===0&&o===0?x=.5/t:d===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const T=b/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+x,1-y),v.push(c++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){const y=u[d][v+1],x=u[d][v],b=u[d+1][v],T=u[d+1][v+1];(d!==0||o>0)&&p.push(y,x,T),(d!==n-1||l<Math.PI)&&p.push(x,b,T)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ql extends fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends ql{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class J_ extends fn{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Le(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ei extends fn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Zr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Q_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ex(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Iu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function qh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class vr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tx extends vr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mc:r=e,a=2*t-n;break;case Sc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mc:o=e,l=2*n-t;break;case Sc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let b=0;b!==a;++b)r[b]=d*o[u+b]+v*o[c+b]+y*o[l+b]+x*o[h+b];return r}}class nx extends vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class ix extends vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zr(t,this.TimeBufferType),this.values=Zr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zr(e.times,Array),values:Zr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ix(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case dr:t=this.InterpolantFactoryMethodLinear;break;case Fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return dr;case this.InterpolantFactoryMethodSmooth:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Q_(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=dr;class Us extends On{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=fr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class jh extends On{}jh.prototype.ValueTypeName="color";class Ts extends On{}Ts.prototype.ValueTypeName="number";class sx extends vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Rn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class As extends On{InterpolantFactoryMethodLinear(e){return new sx(this.times,this.values,this.getValueSize(),e)}}As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends On{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=fr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends On{}ws.prototype.ValueTypeName="vector";class rx{constructor(e="",t=-1,n=[],s=id){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ax(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ex(l);l=Iu(l,1,u),c=Iu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ts(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,_){if(p.length!==0){const m=[],d=[];qh(p,m,d,g),m.length!==0&&_.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let v=0;v!==f[g].morphTargets.length;++v){const y=f[g];m.push(y.time),d.push(y.morphTarget===_?1:0)}s.push(new Ts(".morphTargetInfluence["+_+"]",m,d))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(ws,p+".position",f,"pos",s),n(As,p+".quaternion",f,"rot",s),n(ws,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ox(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ts;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return jh;case"quaternion":return As;case"bool":case"boolean":return Us;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ax(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ox(i.type);if(i.times===void 0){const t=[],n=[];qh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lx{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const jl=new lx;class Fs{constructor(e){this.manager=e!==void 0?e:jl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class cx extends Error{constructor(e,t){super(e),this.response=t}}class Kh extends Fs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=pi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:s});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Xn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){v();function v(){h.read().then(({done:y,value:x})=>{if(y)d.close();else{_+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,R=u.length;T<R;T++){const L=u[T];L.onProgress&&L.onProgress(b)}d.enqueue(x),v()}},y=>{d.error(y)})}}});return new Response(m)}else throw new cx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{pi.add(e,c);const u=Xn[e];delete Xn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Xn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ux extends Fs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=pi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=pr("img");function l(){u(),pi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class hx extends Fs{constructor(e){super(e)}load(e,t,n,s){const r=new Rt,o=new ux(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Io extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fx extends Io{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const da=new Be,Du=new O,Uu=new O;class Kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dx extends Kl{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class px extends Io{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nu=new Be,Ys=new O,pa=new O;class mx extends Kl{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ys),pa.copy(n.position),pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pa),n.updateMatrixWorld(),s.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu)}}class gx extends Io{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _x extends Kl{constructor(){super(new mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $h extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new _x}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class xx extends Fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=pi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return pi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),pi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});pi.add(e,l),r.manager.itemStart(e)}}const $l="\\[\\]\\.:\\/",yx=new RegExp("["+$l+"]","g"),Zl="[^"+$l+"]",vx="[^"+$l.replace("\\.","")+"]",Mx=/((?:WC+[\/:])*)/.source.replace("WC",Zl),Sx=/(WCOD+)?/.source.replace("WCOD",vx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Tx=new RegExp("^"+Mx+Sx+bx+Ex+"$"),Ax=["material","materials","bones","map"];class wx{constructor(e,t,n){const s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yx,"")}static parseTrackName(e){const t=Tx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ax.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=wx;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);const Rx={minX:-18,maxX:18,minY:-4,maxY:516},Cx={x:0,y:4,heading:0},Lx=[{id:"company",name:"회사",y0:-4,y1:122,ground:"#C9CDD2"},{id:"alley",name:"골목",y0:122,y1:250,ground:"#9A8476"},{id:"city",name:"도시",y0:250,y1:382,ground:"#C2C6CB"},{id:"hospital",name:"병원",y0:382,y1:516,ground:"#8CC56E"}],Px=[{id:"company-mid",x:0,y:62,radius:3},{id:"alley",x:0,y:124,radius:3},{id:"alley-mid",x:0,y:188,radius:3},{id:"city",x:0,y:252,radius:3},{id:"city-mid",x:0,y:318,radius:3},{id:"hospital-front",x:0,y:384,radius:3},{id:"hospital-mid",x:0,y:440,radius:3}],Ix={x:0,y:496,radius:3},Dx=[],Ux=[{id:"hq",model:"kenney/city-kit-commercial/building-e",x:0,y:0,rotY:0,scale:2.4},{id:"hospital",model:"hospital",x:0,y:502,rotY:0,scale:2}],Zh={bounds:Rx,spawn:Cx,zones:Lx,checkpoints:Px,hospital:Ix,obstacles:Dx,decor:Ux};function Fu(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Xt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Ou(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][f]);const g=Ou(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Ou(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Wt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){const _=u.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Bu(i,e){if(e===sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ml||e===Eh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===ml)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Nx extends Fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new ey(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=sr.extractUrlBase(e);o=sr.resolveURL(c,this.path)}else o=sr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Kh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Jh){try{o[qe.KHR_BINARY_GLTF]=new ty(e)}catch(h){s&&s(h);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new py(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new Bx;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new ny(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new iy;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new sy;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Fx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ox{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],$t);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $h(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gx(u),c.distance=h;break;case"spot":c=new px(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Bx{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Mt}extendParams(e,t,n){const s=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(s)}}class kx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class zx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(a,a)}return Promise.all(r)}}class Hx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Gx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Vx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ut)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Wx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Xx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],$t),Promise.all(r)}}class Yx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class qx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ut)),Promise.all(r)}}class jx{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Kx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class $x{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Zx{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Jx{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Qx{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}}class ey{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const _=new Be,m=new O,d=new Rn,v=new O(1,1,1),y=new po(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(m,d,v));for(const x in l)if(x==="_COLOR_0"){const b=l[x];y.instanceColor=new xl(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);gt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Jh="glTF",qs=12,ku={JSON:1313821514,BIN:5130562};class ty{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-qs,r=new DataView(e,qs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===ku.JSON){const c=new Uint8Array(e,qs+o,a);this.content=n.decode(c)}else if(l===ku.BIN){const c=qs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ny{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=vl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=vl[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=gs[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(p)},a,c,$t,f)})})}}class iy{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class sy{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Qh extends vr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,_=g-c,m=-2*p+3*f,d=p-f,v=1-m,y=d-f+h;for(let x=0;x!==a;x++){const b=o[_+x+a],T=o[_+x+l]*u,R=o[g+x+a],L=o[g+x]*u;r[x]=v*b+y*T+m*R+d*L}return r}}const ry=new Rn;class oy extends Qh{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return ry.fromArray(r).normalize().toArray(r),r}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zu={9728:wt,9729:Qt,9984:ph,9985:oo,9986:Zs,9987:jn},Hu={33071:di,33648:go,10497:Wi},ma={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ay={CUBICSPLINE:void 0,LINEAR:dr,STEP:fr},ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ly(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ql({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),i.DefaultMaterial}function Ri(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cy(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function uy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hy(i){let e;const t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_a(t.attributes):e=i.indices+":"+_a(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+_a(i.targets[n]);return e}function _a(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ml(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dy=new Be;class py{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new hx(this.options.manager):this.textureLoader=new xx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ri(r,a,s),qn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(sr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ma[s.type],a=gs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Wt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ma[s.type],c=gs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==h){const d=Math.floor(f/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let y=t.cache.get(v);y||(_=new c(a,d*p,s.count*p/u),y=new W_(_,p/u),t.cache.add(v,y)),m=new Hl(y,l,f%p/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new Wt(_,l,g);if(s.sparse!==void 0){const d=ma.SCALAR,v=gs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,b=new v(o[1],y,s.sparse.count*d),T=new c(o[2],x,s.sparse.count*l);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,L=b.length;R<L;R++){const S=b[R];if(m.setX(S,T[R*l]),l>=2&&m.setY(S,T[R*l+1]),l>=3&&m.setZ(S,T[R*l+2]),l>=4&&m.setW(S,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=zu[f.magFilter]||Qt,u.minFilter=zu[f.minFilter]||jn,u.wrapS=Hu[f.wrapS]||Wi,u.wrapT=Hu[f.wrapT]||Wi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==wt&&u.minFilter!==Qt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Rt(_);m.needsUpdate=!0,f(m)}),t.load(sr.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),qn(h,o),h.userData.mimeType=o.mimeType||fy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xh,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wh,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ql}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],$t),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ut)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hn);const u=r.alphaMode||ga.OPAQUE;if(u===ga.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ga.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Mt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Mt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Mt){const h=r.emissiveFactor;a.emissive=new Le().setRGB(h[0],h[1],h[2],$t)}return r.emissiveTexture!==void 0&&o!==Mt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),qn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ri(s,h,r),h})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=hy(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Gu(new Xt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?ly(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let d;const v=c[p];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Y_(_,v):new Ye(_,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===ln.TRIANGLE_STRIP?d.geometry=Bu(d.geometry,Eh):m.mode===ln.TRIANGLE_FAN&&(d.geometry=Bu(d.geometry,ml));else if(m.mode===ln.LINES)d=new K_(_,v);else if(m.mode===ln.LINE_STRIP)d=new Wl(_,v);else if(m.mode===ln.LINE_LOOP)d=new $_(_,v);else if(m.mode===ln.POINTS)d=new Z_(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&uy(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),qn(d,r),m.extensions&&Ri(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Ri(s,h[0],r),h[0];const f=new et;r.extensions&&Ri(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(Ah.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new mr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Be;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vl(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const p=s.channels[h],g=s.samplers[p.sampler],_=p.target,m=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],g=h[2],_=h[3],m=h[4],d=[];for(let v=0,y=f.length;v<y;v++){const x=f[v],b=p[v],T=g[v],R=_[v],L=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,b,T,R,L);if(S)for(let M=0;M<S.length;M++)d.push(S[M])}return new rx(r,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,dy)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Vh:c.length>1?u=new et:c.length===1?u=c[0]:u=new gt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),qn(u,r),r.extensions&&Ri(n,u,r),r.matrix!==void 0){const h=new Be;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new et;n.name&&(r.name=s.createUniqueName(n.name)),qn(r,n),n.extensions&&Ri(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of s.associations)(f instanceof fn||f instanceof Rt)&&h.set(f,p);return u.traverse(f=>{const p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ci[r.path]===ci.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ci[r.path]){case ci.weights:c=Ts;break;case ci.rotation:c=As;break;case ci.position:case ci.scale:c=ws;break;default:switch(n.itemSize){case 1:c=Ts;break;case 2:case 3:default:c=ws;break}break}const u=s.interpolation!==void 0?ay[s.interpolation]:dr,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const g=new c(l[f]+"."+ci[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ml(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof As?oy:Qh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function my(i,e,t){const n=e.attributes,s=new pn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const u=Ml(gs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,l=new O;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const _=Ml(gs[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Nn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Gu(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=vl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return je.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),qn(i,e),my(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?cy(i,e.targets,t):i})}const Jl=["#242637","#373B51","#565A73","#8994A7","#C3CAD2","#F3E5CC","#FFFFFF","#F6BD86","#DF927A","#A75C60","#6A3948","#8B5C48","#C98B5A","#E5C06C","#F3E07B","#BBCA82","#6AAB82","#3F876E","#2C605D","#3D6A97","#609AC1","#91C7DA","#CDDCE1","#684C89","#986BB0","#BA91C4","#DAA3B8","#B74C5A","#E46E58","#F3A54A","#F7D45B","#F7F0B5"],Ql=["#131A25","#FAF0DB","#F06E5B","#66D2BB"],ef=i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16));Jl.map(ef);Ql.map(ef);const er=1,Ft=2.5,gy=1.5,Do={180:[180,320],216:[216,384],270:[270,480],360:[360,640],450:[450,800],540:[540,960],720:[720,1280]},ec=[45,55,65],_y=45,xy="color",yy="360",Uo=[26,20,15],vy=20,My=.58,ui=.35,Jr=1.6,Sy=.4,Ci=.35,xa={chair:4.5,alcohol:2.2,building:1.5},ya={chair:2.4,alcohol:1.8,building:.6},Sl={time:1,drag:3,minImpact:6.5},It={detect:5.5,speed:3,patrolSpeed:1.3,chaseTime:4,cooldown:3,disrupt:3,power:2.9,spin:2.3,jolt:4.5,joltEvery:.3,lead:.7,lungeRange:2.6,lunge:7,lungeTime:.35,lungeRest:1.6},Dt={range:8,period:2.6,charge:.75,shotSpeed:7.5,shotLife:2.5,shotRadius:.24,shots:3,spread:.32},Pn={time:3,first:.45,gap:[.6,1],warn:.2,spin:2.6,kick:3.5,sway:1.1},Tn={building:.15,chair:.18,alcohol:.1,spicy:.2,overheat:.15,bed:.5,ache:.7,weak:.7,tremble:3,agony:1.2,after:.3},tr={radius:.9,cushion:10,ointment:.5,boost:{time:3,thrust:1.8}},Li={near:.7,minSpeed:3,near_points:100,dodge_points:150,pickup_points:50,checkpoint_points:300},by=1.6,Ey=1.5;function Mn(i,e,t){return[i,t,-e]}function Ty(i){return-i}function Ay(i,e){const t=i*Math.PI/180;return[0,Math.sin(t)*e,Math.cos(t)*e]}function wy(i,e,t){const n=i*Math.PI/180;return(t-.5)*e/Math.sin(n)}function Ry(i,e,t,n){const s=(c,u,h)=>c<<16|u<<8|h,r=c=>parseInt(c.slice(1),16),o=new Set(t.map(r)),a=new Set(n.map(r));let l=0;for(let c=0,u=0;u<i.length;u+=4,c++){const h=e[c]?a:o;(i[u+3]!==255||!h.has(s(i[u],i[u+1],i[u+2])))&&l++}return l}function Mr(i){return["PLAYING","RESPAWN","PAUSED"].includes(i.state)?i.stunnedLeft>0?"stunned":i.disruptedLeft>0?"runaway":null:null}function tf(i){return Mr(i)??(["PLAYING","RESPAWN","PAUSED"].includes(i.state)&&i.drunkLeft>0?"drunk":null)}function Cy(i,e){const t=tf(i);i.gameTime<e.noticeTime&&(e.status=null),t!==e.status&&(e.status=t,e.statusUntil=i.gameTime+(t==="drunk"?1:.5)),e.noticeTime=i.gameTime}const Vu=[["#E46E58",.17,1],["#F3A54A",.13,.8],["#F7D45B",.09,.58],["#F7F0B5",.05,.32]],Ly="#B74C5A";function Py(i,e){const t=new pn().setFromObject(e),n={heat:{value:0},zHead:{value:t.min.z},zFeet:{value:t.max.z}};for(const s of i)s.onBeforeCompile=r=>{Object.assign(r.uniforms,n),r.vertexShader=`varying float vModelZ;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vModelZ = position.z;`),r.fragmentShader=`uniform float heat;
uniform float zHead;
uniform float zFeet;
varying float vModelZ;
`+r.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  float line = zFeet - heat * (zFeet - zHead);
  if (heat > 0.0 && vModelZ >= line) gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.78, 0.08, 0.05), 0.85);`)},s.customProgramCacheKey=()=>"heat-fill",s.needsUpdate=!0;return n.heat}function Iy(i,e,t){const n=[];t.traverse(U=>{U.isMesh&&!U.userData.outline&&!n.includes(U.material)&&n.push(U.material)});const s=Py(n,t),r={};for(const U of["L","R"]){const B=new et;B.name=`exhaust_${U}`,Vu.forEach(([N,W,I],D)=>{const G=new Ye(new gr(W,I,5),new Mt({color:N,depthWrite:!1}));G.rotation.x=Math.PI/2,G.position.z=I/2,G.renderOrder=10+D,B.add(G)}),e[`nozzle${U}`].add(B),r[U]=B}const o=new et;o.name="hit_stars";for(let U=0;U<3;U++){const B=new Ye(new Yl(.09,0),new Mt({color:"#F7D45B"}));B.position.set(Math.cos(U*2.09)*.35,.25,Math.sin(U*2.09)*.35),o.add(B)}o.visible=!1,e.head.add(o);let a=-1,l=-1,c=null,u=0;const h=new Ye(new yr(.7,.79,12),new Mt({color:"#6AAB82",side:hn}));h.name="checkpoint_pulse",h.rotation.x=-Math.PI/2,h.visible=!1,i.add(h);const f=96,p=["#F7D45B","#F3A54A","#E46E58"],g=new Nt(.09,.09,.09),_=Array.from({length:f},(U,B)=>{const N=new Ye(g,new Mt({color:p[B%3]}));return N.name="feedback_spark",N.visible=!1,i.add(N),{m:N,v:new O,life:0,gravity:9}});let m=0;const d={L:0,R:0},v=new O,y=new O,x=(U,B=3,N=null,W=.4,I=2,D=9)=>{for(let G=0;G<U;G++){const H=_[m++%f];H.m.position.copy(v),H.v.copy(y).multiplyScalar(B).add(new O((Math.random()-.5)*I,Math.random()*I,(Math.random()-.5)*I)),H.life=W,H.gravity=D,H.m.material.color.set(N??p[G%3]),H.m.scale.setScalar(1),H.m.visible=!0}},b=32,T=Array.from({length:b},()=>{const U=new Ye(new vo(.12,0),new Mt({color:"#FFFFFF",transparent:!0,opacity:.8,depthWrite:!1}));return U.visible=!1,i.add(U),{m:U,v:new O,life:0,max:1}});let R=0,L=0;const S=(U,B,N,W)=>{const I=T[R++%b];I.m.position.copy(U),I.v.copy(N),I.life=I.max=W,I.m.material.color.set(B),I.m.visible=!0},M=new et;for(let U=0;U<5;U++){const B=new Ye(new vo(.07+U%2*.03,1),new Mt({color:U%2?"#FFD6E2":"#E9FFF2",transparent:!0,opacity:.9}));M.add(B)}M.visible=!1,e.head.add(M);let A=-1;const z=new O,k=new Ye(new Nt(.62,.12,.42),new ei({color:"#F7A8C4"}));return k.position.set(0,-.12,.5),k.visible=!1,t.add(k),function(B,N,W){const I=B!==c||B.gameTime<u||W.some(q=>q.type==="respawn"),D=I?0:Math.max(0,Math.min(.1,B.gameTime-u));if(I){a=l=-1;for(const q of _)q.m.visible=!1;for(const q of T)q.m.visible=!1;d.L=d.R=0,L=0,A=-1}c=B,u=B.gameTime;for(const q of W){if(q.type==="hit"&&(q.kind!=="spicy"&&(a=B.gameTime+.1),v.set(q.x-q.nx*.3,Ft,-q.y+q.ny*.3),y.set(q.nx,.2,-q.ny).normalize(),q.kind==="spicy"?(y.set(0,.6,0),x(26,3.2,null,.45,6,3)):q.kind==="alcohol"?(x(14,3,"#7FE0A6",.5,4,10),x(8,2,"#E9FFF2",.4,3.5,10)):x(10,2.5,{building:"#F3A54A",chair:"#F7D45B"}[q.kind],.32,3)),(q.type==="block"||q.type==="agony")&&(v.set(q.x,Ft,-q.y),y.set(0,.5,0),x(q.type==="block"?18:24,2.6,q.type==="block"?"#F7A8C4":"#FF5A3C",.45,5,4)),q.type==="hiccup"){A=B.gameTime,e.head.getWorldPosition(z);for(let ne=0;ne<6;ne++)S(z,ne%2?"#FFD6E2":"#E9FFF2",new O((Math.random()-.5)*2.4,1+Math.random(),(Math.random()-.5)*2.4),.45)}q.type==="checkpoint"&&(l=B.gameTime,h.position.set(q.x,Ft,-q.y),v.copy(h.position),y.set(0,1,0),x(14,1.4,"#6AAB82",.55,2.5,4))}o.visible=Mr(B)==="stunned",o.rotation.y=B.gameTime*6;const G=B.gameTime-l;h.visible=l>=0&&G<.55,h.scale.setScalar(.6+G*2.4);const H=B.disruptedLeft>0;s.value=B.state==="PLAYING"||B.state==="RESPAWN"?Math.min(1,Math.max(N.L.overTime,N.R.overTime)/N.L.fullHoldTime):0;const ce=H&&Math.floor(B.gameTime*16)%2===0,le=B.gameTime<a?1.5:1,j=B.drunkLeft>0;for(const q of n)q.color.setRGB(le,ce?.3:(j?.68:1)*le,ce?.3:(j?.74:1)*le);for(const q of["L","R"]){const{effective:ne,overTime:de}=N[q],C=de>0?1.6+.15*Math.sin(B.gameTime*40+(q==="L"?0:1.7)):1,K=q==="L"?0:2.1,Q=1+.07*Math.sin(Math.floor(B.gameTime*6)*1.7+K),ae=H?1.8+.6*Math.sin(B.gameTime*55+K):Q;r[q].visible=ne>.02;const pe=(.6+.4*ne)*(H?1.4:1)*(2-Q),F=B.boostLeft>0?1.9+.2*Math.sin(B.gameTime*45+K):1;r[q].scale.set(pe*(B.boostLeft>0?1.3:1),pe,Math.max(ne,.01)*1.1*C*ae*F),r[q].children[0].material.color.set(H?Ly:Vu[0][0]),d[q]+=D*(H&&ne>.3?36:ne>.7?8:0);const Ne=Math.floor(d[q]);if(d[q]-=Ne,Ne){const Ae=e[`nozzle${q}`];Ae.getWorldPosition(v),y.set(0,0,1).transformDirection(Ae.matrixWorld),x(Ne,H?4:2.5,null,H?.4:.22,H?3:.7)}}k.visible=B.shieldLeft>0&&(B.shieldLeft>2||Math.floor(B.gameTime*8)%2===0);const ee=(B.state==="PLAYING"||B.state==="RESPAWN")&&(H||s.value>.4);if(L+=ee?D*(H?16:8*s.value):0,L>=1)for(e.head.getWorldPosition(z);L>=1;L--)S(z,H?"#FFD9C7":"#F4F4F4",new O((Math.random()-.5)*.8,1.8+Math.random(),(Math.random()-.5)*.8),.7);for(const q of T){if(!q.m.visible)continue;q.life-=D,q.m.position.addScaledVector(q.v,D);const ne=1-q.life/q.max;q.m.scale.setScalar(.6+ne*1.6),q.m.material.opacity=Math.max(0,.8*(1-ne)),q.m.visible=q.life>0}M.visible=B.drunkLeft>0&&B.gameTime-A>.35,M.visible&&M.children.forEach((q,ne)=>{const de=B.gameTime*2.6+ne*1.26;q.position.set(Math.cos(de)*.32,.32+Math.sin(B.gameTime*4+ne)*.08,Math.sin(de)*.32)});for(const q of _)q.m.visible&&(q.life-=D,q.v.y-=q.gravity*D,q.m.position.addScaledVector(q.v,D),q.m.visible=q.life>0,q.m.scale.setScalar(Math.min(1,Math.max(0,q.life*8))))}}const Dy=["upper_sleeve","elbow_sleeve","rolled_cuff","forearm","hand"],Uy=["thigh","knee","calf","shoe"],Ny=["face","006_hair_cap","007_hair_fringe__1","011_hair_fringe_1","head"],Fy=["010_eye__1","014_eye_1"],Oy=1.3,By=1.3,Wu=new Rn,ky=new dn,zy=new O(0,.1,.3);function Qr(i,e,t){const n=new et;n.position.copy(t),i.add(n);for(const s of e){const r=i.getObjectByName(s);r&&n.attach(r)}return n}const eo=(i,e,t,n=180,s=22)=>(i.vel+=((e-i.x)*n-i.vel*s)*t,i.x+=i.vel*t,i.x);function Hy(i,e){const t=new pn,n={},s={},r={};for(const[g,_]of[["L",-1],["R",1]]){const m=i.getObjectByName(`seat_${g}`),d=m?t.setFromObject(m).getCenter(new O):new O(_*.12,.08,.46),v=e[`nozzle${g}`];n[g]={group:Qr(i,[`seat_${g}`],d),centre:d,nozzle:v,rest:v.position.clone(),size:1},s[g]=Qr(i,Dy.map(y=>`${y}_${g}`),new O(_*.2,0,-.34)),s[g].userData.rest=s[g].position.clone(),r[g]={group:Qr(i,Uy.map(y=>`${y}_${g}`),new O(_*.18,0,.4)),kick:{x:0,vel:0},p:0}}const o={group:Qr(i,Ny,new O(0,.02,-.4)),tilt:{x:0,vel:0},nod:{x:0,vel:0}};o.group.scale.setScalar(By);const a=Fy.map(g=>i.getObjectByName(g)).filter(Boolean),l={x:0,vel:0};let c=0,u=null,h=2,f=0,p=0;return function(_,m,d=[]){_!==u&&(c=_.gameTime,u=_);const v=Math.min(.05,Math.max(0,_.gameTime-c)),y=_.gameTime;c=y;const x=_.state==="PLAYING"||_.state==="RESPAWN",b=x&&_.agonyLeft>0,T=x&&(_.disruptedLeft>0||b),R=x&&_.stunnedLeft>0&&!b;for(const N of["L","R"]){const W=n[N],I=x?m[N].p:0,D=1+Oy*I**1.4+(I>.5?.04*Math.sin(y*30+(N==="L"?0:1.3)):0);W.size+=(D-W.size)*(1-Math.exp(-14*v)),W.group.scale.set(W.size,W.size*1.1,1+(W.size-1)*.8),W.nozzle.position.copy(W.rest).sub(W.centre).multiply(W.group.scale).add(W.centre)}let L=0;for(const N of["L","R"]){const W=x?m[N].p:0,I=v>0?Math.max(0,W-r[N].p)/v:0;r[N].p=W,L=Math.max(L,Math.min(1,I/3)),I>1&&(r[N].kick.vel-=I*1.2)}for(const N of d)N.type==="hit"&&(l.vel-=9);for(const N of d)N.type==="hiccup"&&(l.vel+=12);const S=x&&_.drunkLeft>0&&_.hiccupAt-y<Pn.warn&&_.hiccupAt>y;L>0&&(l.vel+=L*6);const M=eo(l,0,v,260,16),A=S?Math.sin(y*90)*.06:_.agonyLeft>0?Math.sin(y*70)*.08:0;i.rotation.z=x&&_.agonyLeft>0?Math.sin(y*16)*.35:0,i.scale.set(1-M*.12+A,1-M*.12-A,1+M*.22);const z=x?(m.L.effective+m.R.effective)/2:0;f+=v*(4+z*10);for(const[N,W,I]of[["L",-1,0],["R",1,Math.PI]]){const D=r[N].group,G=eo(r[N].kick,0,v,120,14);T?D.rotation.set(Math.sin(y*21+I)*.6,W*Math.sin(y*15+I)*.5,W*Math.sin(y*27+I)*.4):R?D.rotation.set(-.35,0,W*-.25):D.rotation.set(Math.sin(f+I)*.22+G*.5,W*(Math.sin(f+I)*.12-G*.2),0)}p+=((T?1:0)-p)*(1-Math.exp(-(T?18:10)*v));for(const[N,W,I]of[["L",-1,0],["R",1,2.2]]){const D=s[N];if(R?D.rotation.set(.3,0,W*-.35):D.rotation.set(Math.sin(f*.5+I)*.08,0,W*Math.sin(f*.5+I)*.06),p>.01){const G=Math.sin(y*31+I)*(b?.25:.12);Wu.setFromEuler(ky.set(-.8+G,-W*3.05,W*G,"XYZ")),D.quaternion.slerp(Wu,p),D.position.copy(D.userData.rest).addScaledVector(zy,p)}else D.position.copy(D.userData.rest)}const k=eo(o.tilt,x?Math.max(-.35,Math.min(.35,-_.omega*.12)):0,v),U=eo(o.nod,L*.25,v,200,18);T?o.group.rotation.set(Math.sin(y*19)*.15,Math.sin(y*13)*.3,Math.sin(y*23)*.2):R?o.group.rotation.set(.25,Math.sin(y*3)*.3,Math.sin(y*2.5)*.2):o.group.rotation.set(U,0,k),y>h+.12&&(h=y+2+Math.random()*3);const B=R||y>h&&y<h+.12;for(const N of a)N.scale.y=B?.15:1}}const Xu="#1B2333";let Pi=null;const va=new WeakMap;function Gy(){return Pi||(Pi=new Gl(new Uint8Array([140,140,140,255,205,205,205,255,255,255,255,255]),3,1,rn),Pi.minFilter=Pi.magFilter=wt,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}function bl(i,{width:e=.035,minPart:t=.09}={}){const n=new Map,s={[Ot]:new Mt({color:Xu,side:Ot}),[sn]:new Mt({color:Xu,side:sn})},r=[];i.traverse(c=>{c.isMesh&&!c.userData.outline&&r.push(c)});const o=new pn,a=new O,l=new O;for(const c of r){c.geometry.attributes.normal||(c.geometry=Wy(c.geometry));const u=c.material;if(n.has(u)||n.set(u,new J_({color:u.color?u.color.clone():new Le("#FFFFFF"),map:u.map??null,vertexColors:!!c.geometry.attributes.color,gradientMap:Gy(),emissive:u.emissive?u.emissive.clone():new Le(0),side:u.side??sn})),c.material=n.get(u),c.geometry.computeBoundingBox(),o.copy(c.geometry.boundingBox).getSize(a),Math.max(a.x,a.y,a.z)<t)continue;o.getCenter(l);const h=new Ye(c.geometry,s[Vy(c.geometry)<0?sn:Ot]);h.userData.outline=!0,h.castShadow=h.receiveShadow=!1,h.scale.set(1+2*e/Math.max(a.x,.02),1+2*e/Math.max(a.y,.02),1+2*e/Math.max(a.z,.02)),h.position.copy(l).multiply(new O(1,1,1).sub(h.scale)),c.add(h)}return n}function Vy(i){const e=i.attributes.position,t=i.index,n=t?t.count:e.count,s=new O,r=new O,o=new O;let a=0;for(let l=0;l+2<n;l+=3)s.fromBufferAttribute(e,t?t.getX(l):l),r.fromBufferAttribute(e,t?t.getX(l+1):l+1),o.fromBufferAttribute(e,t?t.getX(l+2):l+2),a+=s.dot(r.cross(o));return a}function Wy(i){if(!va.has(i)){const e=i.index?i.toNonIndexed():i.clone();e.computeVertexNormals(),va.set(i,e)}return va.get(i)}function Xy(){const i={pitch:0,roll:0,lift:0},e={pitch:0,roll:0,lift:0};let t=null,n=0,s=-1,r=0,o=0;return(a,l,c=[])=>{const u=a!==t||a.gameTime<n||c.some(S=>S.type==="respawn"),h=u?0:Math.min(.1,Math.max(0,a.gameTime-n));if(t=a,n=a.gameTime,u||a.state==="TITLE"||a.state==="READY")return i.pitch=i.roll=i.lift=0,e.pitch=e.roll=e.lift=0,s=-1,i;if(a.state!=="PLAYING"&&a.state!=="RESPAWN")return i;const f=(S,M,A)=>Math.max(M,Math.min(A,S)),p=f(l.L.effective,0,1),g=f(l.R.effective,0,1),_=(p+g)/2,m=Math.min(1,Math.hypot(a.vx,a.vy)/10),d=m*(1-_),v=a.gameTime;let y=f(-(p-g)*.28-a.omega*.035+Math.sin(v*2.4)*.025*d,-.32,.32),x=-Math.min(p,g)*.14+Math.sin(v*2)*.015*d,b=Math.sin(v*2.8)*.035*m;const T=Mr(a);T==="stunned"?(x=.14,y=Math.sin(v*3)*.025,b=-.06):T==="runaway"&&(x=-.08+Math.sin(v*17)*.1,y=Math.sin(v*13)*.24+Math.sin(v*27)*.1,b=Math.sin(v*19)*.045);for(const S of c)S.type==="hit"&&S.kind!=="spicy"&&(s=v,r=-(S.nx*Math.cos(a.theta)-S.ny*Math.sin(a.theta))*.22,o=-(S.nx*Math.sin(a.theta)+S.ny*Math.cos(a.theta))*.18);const R=1-Math.exp(-(T==="runaway"?18:8)*h);e.pitch+=(x-e.pitch)*R,e.roll+=(y-e.roll)*R,e.lift+=(b-e.lift)*R;const L=s<0?0:Math.exp(-(v-s)*15);return i.pitch=f(e.pitch+o*L,-.3,.35),i.roll=f(e.roll+r*L,-.42,.42),i.lift=e.lift,i}}function Yu(i,e,t){const n=i.getObjectByName(e);if(!n)return null;const s=new et;return s.position.set(t,.74,-.44),n.parent.add(s),s.attach(n),s}function Yy(i,e){i.rotation.order="YXZ";const t=i.children[0],n=[Yu(i,"004_eyebrow_-1",-.075),Yu(i,"006_eyebrow_1",.075)];let s=null,r=0,o=0;return(a,l,c)=>{const u=a.mode==="chase",h=u?l:a.goal??a.home,f=h.x-a.x,p=h.y-a.y,g=Math.hypot(f,p)>.001,_=!u&&!g,m=a!==s||c<r||_,d=m?0:Math.min(.1,Math.max(0,c-r));s=a,r=c;const v=g?Math.atan2(-f,p):_?0:i.rotation.y,y=Math.atan2(Math.sin(v-i.rotation.y),Math.cos(v-i.rotation.y));i.rotation.y=m?v:i.rotation.y+y*(1-Math.exp(-12*d));const x=c*(u?14:7);i.rotation.x=g?u?-.15:-.05:0,i.rotation.z=g?Math.sin(x)*(u?.1:.035):Math.sin(c*2)*.012;const b=g?Math.abs(Math.sin(x)):0;i.position.y=e+(g?b*(u?.16:.05):Math.sin(c*2)*.025);const T=u?(1-b)**3*.22-b*.1:0;t?.scale.set(1+T*.5,1-T,1+T*.5),o+=((u?1:0)-o)*(m?1:1-Math.exp(-10*d)),n[0]&&(n[0].rotation.z=-.45*o),n[1]&&(n[1].rotation.z=.45*o)}}const So={"kenney/car-kit/ambulance":{cx:0,cz:-.025,hx:.75,hz:1.625,top:1.8,bottom:0},"kenney/car-kit/delivery":{cx:0,cz:-.025,hx:.75,hz:1.625,top:1.65,bottom:0},"kenney/car-kit/firetruck":{cx:0,cz:0,hx:.75,hz:1.7,top:1.7,bottom:0},"kenney/car-kit/garbage-truck":{cx:0,cz:.025,hx:.8,hz:1.725,top:1.6,bottom:0},"kenney/car-kit/hatchback-sports":{cx:0,cz:-.025,hx:.65,hz:1.425,top:1.1,bottom:0},"kenney/car-kit/police":{cx:0,cz:0,hx:.75,hz:1.55,top:1.3,bottom:0},"kenney/car-kit/sedan":{cx:0,cz:-.025,hx:.75,hz:1.275,top:1.3,bottom:0},"kenney/car-kit/suv":{cx:0,cz:0,hx:.75,hz:1.35,top:1.3,bottom:0},"kenney/car-kit/taxi":{cx:0,cz:-.025,hx:.75,hz:1.375,top:1.5,bottom:0},"kenney/car-kit/truck":{cx:0,cz:-.025,hx:.75,hz:1.475,top:1.3,bottom:0},"kenney/car-kit/van":{cx:0,cz:-.025,hx:.75,hz:1.375,top:1.35,bottom:0},"kenney/city-kit-commercial/building-a":{cx:0,cz:0,hx:.442,hz:.47,top:1.293,bottom:0},"kenney/city-kit-commercial/building-b":{cx:0,cz:0,hx:.485,hz:.47,top:1.293,bottom:0},"kenney/city-kit-commercial/building-c":{cx:0,cz:0,hx:.442,hz:.545,top:.893,bottom:0},"kenney/city-kit-commercial/building-d":{cx:0,cz:0,hx:.42,hz:.45,top:1.293,bottom:0},"kenney/city-kit-commercial/building-e":{cx:0,cz:0,hx:.82,hz:.504,top:.893,bottom:0},"kenney/city-kit-commercial/building-f":{cx:0,cz:0,hx:.42,hz:.515,top:1.693,bottom:0},"kenney/city-kit-commercial/building-g":{cx:0,cz:0,hx:.485,hz:.461,top:1.693,bottom:0},"kenney/city-kit-commercial/building-h":{cx:0,cz:0,hx:.442,hz:.504,top:1.293,bottom:0},"kenney/city-kit-commercial/building-i":{cx:0,cz:0,hx:.62,hz:.651,top:1.68,bottom:0},"kenney/city-kit-commercial/building-j":{cx:0,cz:0,hx:1.042,hz:.67,top:1.693,bottom:0},"kenney/city-kit-commercial/building-k":{cx:0,cz:0,hx:1.042,hz:.471,top:1.47,bottom:0},"kenney/city-kit-commercial/building-l":{cx:0,cz:0,hx:.685,hz:.701,top:2.27,bottom:0},"kenney/city-kit-commercial/building-m":{cx:0,cz:0,hx:.62,hz:.621,top:3.15,bottom:0},"kenney/city-kit-commercial/building-n":{cx:0,cz:0,hx:1.16,hz:.91,top:2.48,bottom:0},"kenney/city-kit-commercial/building-skyscraper-a":{cx:0,cz:0,hx:.68,hz:.68,top:2.88,bottom:0},"kenney/city-kit-commercial/building-skyscraper-b":{cx:0,cz:0,hx:.68,hz:.68,top:4.48,bottom:0},"kenney/city-kit-commercial/building-skyscraper-c":{cx:0,cz:0,hx:.64,hz:.694,top:4.08,bottom:0},"kenney/city-kit-commercial/building-skyscraper-d":{cx:0,cz:0,hx:.64,hz:.694,top:5.47,bottom:0},"kenney/city-kit-commercial/building-skyscraper-e":{cx:0,cz:0,hx:.647,hz:.621,top:4.08,bottom:0},"kenney/city-kit-commercial/detail-awning-wide":{cx:0,cz:.174,hx:.4,hz:.074,top:.4,bottom:0},"kenney/city-kit-commercial/detail-awning":{cx:0,cz:.174,hx:.2,hz:.074,top:.4,bottom:0},"kenney/city-kit-roads/construction-barrier":{cx:0,cz:0,hx:.068,hz:.112,top:.13,bottom:0},"kenney/city-kit-roads/construction-cone":{cx:0,cz:0,hx:.038,hz:.038,top:.094,bottom:0},"kenney/city-kit-roads/dumpster":{cx:.008,cz:0,hx:.138,hz:.185,top:.209,bottom:0},"kenney/city-kit-roads/light-curved":{cx:0,cz:-.088,hx:.025,hz:.113,top:.675,bottom:0},"kenney/city-kit-roads/light-square":{cx:0,cz:-.094,hx:.025,hz:.119,top:.6,bottom:0},"kenney/city-kit-roads/road-crossing":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-crossroad":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-end":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-intersection":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-roads/road-sign-empty":{cx:0,cz:0,hx:.025,hz:.025,top:.475,bottom:0},"kenney/city-kit-roads/road-straight":{cx:0,cz:0,hx:.5,hz:.5,top:.02,bottom:0},"kenney/city-kit-suburban/building-type-a":{cx:0,cz:0,hx:.65,hz:.514,top:.834,bottom:0},"kenney/city-kit-suburban/building-type-b":{cx:0,cz:0,hx:.914,hz:.57,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-c":{cx:0,cz:0,hx:.643,hz:.514,top:1.034,bottom:0},"kenney/city-kit-suburban/building-type-d":{cx:0,cz:0,hx:.878,hz:.514,top:1.238,bottom:0},"kenney/city-kit-suburban/building-type-e":{cx:0,cz:0,hx:.65,hz:.514,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-f":{cx:0,cz:0,hx:.714,hz:.703,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-g":{cx:0,cz:0,hx:.725,hz:.589,top:.768,bottom:0},"kenney/city-kit-suburban/building-type-h":{cx:0,cz:0,hx:.65,hz:.458,top:.737,bottom:0},"kenney/city-kit-suburban/building-type-i":{cx:0,cz:0,hx:.643,hz:.514,top:.737,bottom:0},"kenney/city-kit-suburban/building-type-j":{cx:0,cz:0,hx:.685,hz:.458,top:1.038,bottom:0},"kenney/city-kit-suburban/building-type-k":{cx:0,cz:0,hx:.46,hz:.51,top:1.15,bottom:0},"kenney/city-kit-suburban/building-type-l":{cx:0,cz:0,hx:.517,hz:.51,top:1.049,bottom:0},"kenney/city-kit-suburban/building-type-m":{cx:0,cz:0,hx:.714,hz:.714,top:.737,bottom:0},"kenney/city-kit-suburban/building-type-n":{cx:0,cz:0,hx:.892,hz:.689,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-o":{cx:0,cz:0,hx:.635,hz:.514,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-p":{cx:0,cz:0,hx:.62,hz:.495,top:.918,bottom:0},"kenney/city-kit-suburban/building-type-q":{cx:0,cz:.021,hx:.62,hz:.443,top:.918,bottom:0},"kenney/city-kit-suburban/building-type-r":{cx:0,cz:0,hx:.514,hz:.51,top:1.141,bottom:0},"kenney/city-kit-suburban/building-type-s":{cx:0,cz:0,hx:.703,hz:.543,top:1.138,bottom:0},"kenney/city-kit-suburban/building-type-t":{cx:-.007,cz:0,hx:.657,hz:.703,top:1.156,bottom:0},"kenney/city-kit-suburban/building-type-u":{cx:0,cz:0,hx:.714,hz:.543,top:1.138,bottom:0},"kenney/city-kit-suburban/fence-low":{cx:0,cz:-.019,hx:.638,hz:.419,top:.17,bottom:0},"kenney/city-kit-suburban/path-stones-long":{cx:0,cz:0,hx:.07,hz:.2,top:.01,bottom:0},"kenney/city-kit-suburban/planter":{cx:0,cz:-.001,hx:.2,hz:.15,top:.177,bottom:0},"kenney/city-kit-suburban/tree-large":{cx:0,cz:0,hx:.105,hz:.121,top:.767,bottom:0},"kenney/city-kit-suburban/tree-small":{cx:0,cz:0,hx:.105,hz:.121,top:.567,bottom:0}},qy={office_block:[{cx:0,cz:-.185,hx:1.21,hz:1.205,top:3.32}],alley_block:[{cx:-1.55,cz:0,hx:.78,hz:1.4,top:2.35},{cx:1.55,cz:0,hx:.78,hz:1.4,top:3.05}],city_block:[{cx:0,cz:-.27,hx:1.5,hz:1.47,top:1.92}],hospital:[{cx:0,cz:0,hx:1.67,hz:1.17,top:2.37}],...Object.fromEntries(Object.entries(So).map(([i,e])=>[i,[e]]))},jy=.25;function rr(i,e=-1/0){const t=[];for(const n of i){const s=Math.round(n.rotY/90);if(Math.abs(n.rotY-s*90)>1e-6)throw new Error(`${n.id}: rotY must be a multiple of 90`);const r=s*Math.PI/2,o=Math.round(Math.cos(r)),a=Math.round(Math.sin(r));(qy[n.model]??[]).forEach((l,c)=>{if(l.top*n.scale<e)return;const u=(l.cx*o+l.cz*a)*n.scale,h=(-l.cx*a+l.cz*o)*n.scale,f=s%2!==0;t.push({id:`${n.id}-part${c}`,type:"Building",decorRef:n.id,x:n.x+u,y:n.y-h,hx:(f?l.hz:l.hx)*n.scale,hy:(f?l.hx:l.hz)*n.scale})})}return t}const tc=i=>rr(i,Ft-jy),nc=i=>[...tc(i.decor??[]),...(i.lumps??[]).map(e=>({...e,type:"Building",decorRef:e.id,lump:!0}))];function Ky(i,e=.02){const t=[];for(const n of i){const s=[{along:"x",fixed:n.y-n.hy,lo:n.x-n.hx,hi:n.x+n.hx,nx:0,ny:-1},{along:"x",fixed:n.y+n.hy,lo:n.x-n.hx,hi:n.x+n.hx,nx:0,ny:1},{along:"y",fixed:n.x-n.hx,lo:n.y-n.hy,hi:n.y+n.hy,nx:-1,ny:0},{along:"y",fixed:n.x+n.hx,lo:n.y-n.hy,hi:n.y+n.hy,nx:1,ny:0}];for(const r of s){let o=[[r.lo,r.hi]];const a=r.along==="x"?null:r.fixed+r.nx*e,l=r.along==="x"?r.fixed+r.ny*e:null;for(const c of i){if(c===n)continue;let u,h;if(r.along==="x"){if(Math.abs(l-c.y)>=c.hy)continue;u=c.x-c.hx,h=c.x+c.hx}else{if(Math.abs(a-c.x)>=c.hx)continue;u=c.y-c.hy,h=c.y+c.hy}o=o.flatMap(([f,p])=>h<=f||u>=p?[[f,p]]:[[f,Math.min(p,u)],[Math.max(f,h),p]].filter(([g,_])=>_-g>e))}for(const[c,u]of o)t.push(r.along==="x"?{x0:c,y0:r.fixed,x1:u,y1:r.fixed,along:"x",nx:r.nx,ny:r.ny}:{x0:r.fixed,y0:c,x1:r.fixed,y1:u,along:"y",nx:r.nx,ny:r.ny})}}return t}const $y=new Le("#F4F8FF");function _r(i,e){const t=i.clone();return t.onBeforeCompile=n=>{n.uniforms.hazeColor={value:$y},n.uniforms.hazeAmount={value:e},n.fragmentShader=`uniform vec3 hazeColor;
uniform float hazeAmount;
`+n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  gl_FragColor.rgb = mix(gl_FragColor.rgb, hazeColor, hazeAmount);`)},t.customProgramCacheKey=()=>`haze-${e}`,t}const Zy=0,Jy=.15,Qy=.35,ev=0,qu=1.6,tv="#3A4256",nv="#B8D4EA",Ii="#E46E58",ju="#7FE0A6",iv="#609AC1",Ku="#F3E5CC",sv={chair:.53,spicy:.57,alcohol:.5},xr=i=>new Mt({color:i}),hi=(i,e,t,n)=>new Ye(new Nt(i,e,t),xr(n)),Ma=(i,e,t)=>{const n=new Ye(new yr(i-e,i,24),xr(t));return n.rotation.x=-Math.PI/2,n};function rv(){const i=new et,e=r=>new ei({color:r}),t=e("#2FA36B"),n=(r,o,a)=>{const l=new Ye(r,o);return l.position.y=a,i.add(l),l};n(new Vt(.26,.26,.75,10),t,.375),n(new Vt(.1,.26,.22,10),t,.86),n(new Vt(.09,.1,.28,10),t,1.11),n(new Vt(.268,.268,.32,10),e("#F4F1E6"),.4),n(new Vt(.272,.272,.06,10),e("#3B6FB6"),.53),n(new Nt(.05,.5,.02),xr("#C9F2D9"),.62).position.set(-.13,.62,.22);const s=n(new Vt(.11,.11,.12,10),e("#1B7A48"),1.3);return{group:i,cap:s,glass:t}}const ov={cushion:"#F7A8C4",ointment:"#FFF4DC",ice:"#9FE3FF",suppository:"#FFD25A"};function av(i){const e=new et,t=s=>new ei({color:s}),n=(s,r,o=0,a=0,l=0,c=0,u=0)=>{const h=new Ye(s,r);return h.position.set(o,a,l),h.rotation.set(c,0,u),e.add(h),h};return i==="cushion"?(n(new Nt(.75,.22,.75),t("#F7A8C4")),n(new Vt(.08,.08,.26,8),t("#E46E9A"))):i==="ointment"?(n(new Vt(.14,.17,.62,10),t("#FFFFFF"),0,0,0,0,Math.PI/2),n(new Vt(.175,.175,.18,10),t("#4FD1B0"),.02,0,0,0,Math.PI/2),n(new Vt(.08,.08,.16,8),t("#FF6B5A"),.38,0,0,0,Math.PI/2)):i==="ice"?(n(new Nt(.55,.4,.42),t("#9FE3FF")),n(new Nt(.12,.08,.44),t("#FFFFFF"),-.12,.2,0)):(n(new Vt(.13,.13,.42,10),t("#FFF4DC"),0,0,0,Math.PI/2),n(new gr(.13,.22,10),t("#FFF4DC"),0,0,-.32,-Math.PI/2),n(new gr(.1,.28,6),t("#FF9F43"),0,0,.34,Math.PI/2)),e.scale.setScalar(1.3),e}const $u="#FFE27A",Di="#FFF3BF",js="#7FE0C0",nf="#8FB8F0";function lv(){const i=new et,e=o=>new ei({color:o}),t=(o,a,l,c,u,h,f)=>{const p=new Ye(new Nt(o,a,l),c);return p.position.set(u,h,f),i.add(p),p},n=e("#C9D3DE"),s=e("#FAFAF6"),r=e(nf);for(const o of[-.5,.5])for(const a of[-.85,.85])t(.07,.4,.07,n,o,-.15,a);return t(1.06,.1,1.8,n,0,.08,0),t(1,.16,1.72,s,0,.21,0),t(1.06,.45,.07,n,0,.3,-.9),t(1.06,.28,.07,n,0,.22,.9),t(.7,.12,.34,s,0,.35,-.62),t(1.04,.07,1,r,0,.32,.32),t(1.04,.03,.12,s,0,.36,-.12),i.scale.setScalar(1.6),i.userData.blanket=r,i}async function cv(i,e,t){const n=tc(e.decor),s=new Set(n.map(A=>A.decorRef));for(const A of e.decor){const z=await t(A.model);z.scale.setScalar(er*A.scale),s.has(A.id)||(z.scale.y*=.5,z.traverse(k=>{k.isMesh&&(k.material=_r(k.material,Qy))})),z.position.set(...Mn(A.x,A.y,0)),z.rotation.y=Ah.degToRad(A.rotY),i.add(z)}{const A=[];for(const D of Ky(nc(e))){const G=Math.hypot(D.x1-D.x0,D.y1-D.y0),H=Math.max(1,Math.round(G/.5));for(let ce=0;ce<H;ce++)A.push({x:D.x0+(D.x1-D.x0)*(ce+.5)/H+D.nx*.06,y:D.y0+(D.y1-D.y0)*(ce+.5)/H+D.ny*.06,len:G/H,along:D.along,red:ce%2===0})}const U=new po(new Nt(1,.42,.1),new Mt({color:"#FFFFFF"}),A.length),B=new Be,N=new Rn,W=new O(0,1,0),I=new Le;A.forEach((D,G)=>{N.setFromAxisAngle(W,D.along==="y"?Math.PI/2:0),U.setMatrixAt(G,B.compose(new O(...Mn(D.x,D.y,Ft)),N,new O(D.len,1,1))),U.setColorAt(G,I.set(D.red?Ii:Ku))}),i.add(U)}{const A=e.bounds,z=1,k=Ft,U=[],B=[],N=(j,ee,q,ne)=>{const de=Math.hypot(q-j,ne-ee),C=Math.round(de/z),K=j===q?"y":"x";for(let Q=0;Q<C;Q++){const ae=(Q+.5)/C;U.push({x:j+(q-j)*ae,y:ee+(ne-ee)*ae,along:K,red:Q%2===0}),B.push({x:j+(q-j)*Q/C,y:ee+(ne-ee)*Q/C})}};N(A.minX,A.minY,A.minX,A.maxY),N(A.maxX,A.minY,A.maxX,A.maxY),N(A.minX,A.minY,A.maxX,A.minY),N(A.minX,A.maxY,A.maxX,A.maxY);const W=new po(new Nt(1,.35,.3),new Mt({color:"#FFFFFF"}),U.length),I=new po(new Nt(.14,k+.3,.14),new ei({color:"#242637"}),B.length),D=new Be,G=new Rn,H=new O(0,1,0),ce=new O(z,1,1),le=new Le;U.forEach((j,ee)=>{G.setFromAxisAngle(H,j.along==="y"?Math.PI/2:0),W.setMatrixAt(ee,D.compose(new O(...Mn(j.x,j.y,k)),G,ce)),W.setColorAt(ee,le.set(j.red?tv:nv))}),B.forEach((j,ee)=>I.setMatrixAt(ee,D.makeTranslation(...Mn(j.x,j.y,(k+.3)/2)))),i.add(W,I)}const r={};for(const A of e.obstacles.filter(z=>z.model)){const z=A.type==="AlcoholTurret"?rv():null,k=new et,U=z?new et:await t(A.model);z?(U.add(z.group),U.scale.setScalar(qu),U.position.y=-.62*qu):(U.scale.setScalar(er*Jr),U.position.y=-sv[A.model]*er*Jr),U.traverse(W=>{W.isMesh&&(W.castShadow=!0)});const B=bl(U,{width:.03/(z?1:Jr)});k.add(U,Ma(A.radius,.16,Ii)),i.add(k);const N={group:k,body:U};if(A.type==="SpicyChaser"){const W=new et,I=hi(.12,.4,.12,Ii),D=hi(.12,.12,.12,Ii);I.position.y=1.15,D.position.y=.8,W.add(I,D),W.visible=!1,k.add(W),N.mark=W,N.updateMotion=Yy(U,U.position.y)}if(A.type==="AlcoholTurret"){const W=new et;for(let D=0;D<Dt.shots;D++){const G=new et,H=hi(.1,.05,Dt.range,Ii);H.position.z=-8/2,G.add(H),G.rotation.y=-(D-(Dt.shots-1)/2)*Dt.spread,W.add(G)}W.visible=!1,k.add(W);const I=new et;for(let D=0;D<6;D++)I.add(new Ye(new Mo(.07,6,4),xr(D%2?"#E9FFF2":ju)));I.visible=!1,k.add(I),N.drops=I,Object.assign(N,{aim:W,cap:z.cap,glass:B.get(z.glass),bottle:z.group,popped:-1,phase:A.x*1.7})}if(A.type==="OfficeChair"){const W=new et;(U.children[0]??U).add(W);for(const D of["000_seat","001_back","002_back_inset","003_armrest_-1","004_arm_post_-1","005_armrest_1","006_arm_post_1"]){const G=U.getObjectByName(D);G&&W.attach(G)}Object.assign(N,{swivel:W,spin:.5+Math.abs(A.x*7.3+A.y)%1,boost:0,x:A.x,y:A.y})}r[A.id]=N}const o=(A,z,k)=>{A.group.position.set(...Mn(z,k,Ft))};for(const A of e.obstacles.filter(z=>z.model))o(r[A.id],A.x,A.y);const a=new Mo(Dt.shotRadius,8,6).scale(1,.8,1.9),l=xr(ju),c=Array.from({length:40},()=>{const A=new Ye(new Nt(.16,.16,.16),new Mt({color:"#FFF4E6",transparent:!0,opacity:.85,depthWrite:!1}));return A.visible=!1,i.add(A),{m:A,life:0,vx:0,vz:0}});let u=0,h=0;const f=Array.from({length:60},()=>{const A=new Ye(new Nt(.13,.13,.13),new Mt({color:"#FFD25A"}));return A.visible=!1,i.add(A),{m:A,life:0}});let p=0;const g=["#FFD25A","#FF9F43","#FF6B5A","#C8402E"],_=[],m=new Ye(new Vt(.11,.11,.12,10),new ei({color:"#1B7A48"})),d=(A,z)=>new Mt({color:A,transparent:!0,opacity:z,depthWrite:!1,side:hn}),v=e.checkpoints.map(A=>{const z=new et,k=new et,U=[d($u,.95),d(Di,.45),d(Di,.18),d(Di,.14)],B=new Ye(new Xl(A.radius-.2,40),U[3]);B.rotation.x=-Math.PI/2,k.add(B),[[A.radius,.16],[A.radius+.22,.2],[A.radius-.25,.5]].forEach(([G,H],ce)=>{const le=new Ye(new yr(G-H,G,40),U[ce]);le.rotation.x=-Math.PI/2,k.add(le)});const N=new et;for(let G=0;G<8;G++){const H=new et,ce=G/8*Math.PI*2;H.add(hi(.06,.26,.06,"#FFFFFF"),hi(.26,.06,.06,"#FFFFFF")),H.position.set(Math.cos(ce)*A.radius,.3+G%2*.35,Math.sin(ce)*A.radius),N.add(H)}const W=d(Di,.16),I=new Ye(new Vt(A.radius*.95,A.radius,Ft+2.5,24,1,!0),W);I.position.y=(Ft+2.5)/2-Ft;const D=lv();return D.position.y=-.35,z.add(k,N,I,D),z.position.set(...Mn(A.x,A.y,Ft)),i.add(z),{ring:k,ringMats:U,sparkles:N,beamMat:W,blanket:D.userData.blanket}}),y=(e.items??[]).map(A=>{const z=new et,k=av(A.kind);bl(k,{width:.025});const U=Ma(.75,.12,ov[A.kind]);return U.position.y=-.05,z.add(k,U),z.position.set(...Mn(A.x,A.y,Ft)),i.add(z),{id:A.id,g:z,body:k,phase:A.x+A.y}}),x=e.hospital,b=new et;b.add(Ma(x.radius,.14,iv));const T=hi(1.3,1.3,.1,Ku),R=hi(.3,.95,.14,Ii),L=hi(.95,.3,.14,Ii);for(const A of[T,R,L])A.position.y=1.6,b.add(A);b.position.set(...Mn(x.x,x.y,Ft)),i.add(b);const S=new Map,M=[];return function(z,k,U=[]){const B=Math.max(0,Math.min(.1,k-h));h=k;for(const D of z.enemies??[]){const G=r[D.id];if(G)if(D.type==="SpicyChaser"){if(o(G,D.x,D.y),G.updateMotion(D,z.ship,k),G.mark.visible=D.mode==="chase",D.mode==="chase"&&Math.random()<B*30){const H=f[p++%f.length];H.m.position.copy(G.group.position).add(new O((Math.random()-.5)*.5,-.1+Math.random()*.4,(Math.random()-.5)*.5)),H.life=.5,H.m.visible=!0}if(D.mode==="chase"&&Math.random()<B*14){const H=c[u++%c.length];H.m.position.copy(G.group.position).add(new O((Math.random()-.5)*.4,.9,(Math.random()-.5)*.4)),Object.assign(H,{life:.7,vx:(Math.random()-.5)*.8,vz:(Math.random()-.5)*.8}),H.m.visible=!0}}else{const H=D.mode==="charge";G.aim.visible=H&&Math.floor(D.timer*12)%2===0;const ce=D.aim?Math.atan2(-D.aim.x,D.aim.y):0;H&&(G.aim.rotation.y=ce);const le=H?Math.min(1,D.timer/Dt.charge):0,j=le*.7,ee=H?0:Math.sin(k*2.2+G.phase)*.08;G.body.rotation.set(-j,ce,ee,"YXZ"),G.body.position.x=H?(.02+.06*le)*Math.sin(k*60):0,G.glass.emissive.setRGB(.25*le*(.6+.4*Math.sin(k*30)),.5*le,.2*le),G.drops.visible=H,H&&G.drops.children.forEach((de,C)=>{const K=k*7+C*1.05,Q=.9-.6*le;de.position.set(Math.cos(K)*Q,.9+.5*le+Math.sin(k*9+C)*.08,Math.sin(K)*Q),de.scale.setScalar(.6+.8*le)});const q=G.popped>=0?k-G.popped:9,ne=q<.35?Math.exp(-q*9)*Math.cos(q*30):0;G.bottle.scale.set(1+ne*.18,1-ne*.25,1+ne*.18),G.wasCharging&&!H&&(G.popped=k),G.wasCharging=H,G.cap.visible=!(G.popped>=0&&k-G.popped<1.2),S.set(G,G.popped>=0&&k-G.popped<.7?k-G.popped:null)}}for(const D of z.world.obstacles){if(D.type!=="OfficeChair")continue;const G=r[D.id];G.body.position.y=-.53*er*Jr+.1*Math.sin(k*2+D.x);for(const H of U)H.type==="hit"&&H.kind==="chair"&&Math.hypot(H.x-D.x,H.y-D.y)<2&&(G.boost=14);G.boost*=Math.exp(-2.2*B),G.swivel.rotation.y+=(G.spin+G.boost)*B,G.body.rotation.z=Math.sin(k*1.6+D.y)*.06+G.boost*.01*Math.sin(k*25)}for(const D of f)D.m.visible&&(D.life-=B,D.m.position.y+=.6*B,D.m.scale.setScalar(Math.max(.05,D.life*2)),D.m.material.color.set(g[Math.min(3,Math.floor((.5-D.life)*8))]),D.m.visible=D.life>0);for(const D of c)D.m.visible&&(D.life-=B,D.m.position.x+=D.vx*B,D.m.position.z+=D.vz*B,D.m.position.y+=1.6*B,D.m.scale.setScalar(.5+(.7-D.life)*2.2),D.m.material.opacity=Math.max(0,D.life/.7)*.85,D.m.visible=D.life>0);let N=0;for(const[D,G]of S){if(G===null)continue;const H=M[N]??(M[N]=Object.assign(m.clone(),{visible:!1}));H.parent||i.add(H),H.visible=!0,H.position.copy(D.group.position).add(new O(.4*G,1.1+4*G-6*G*G,0)),H.rotation.set(G*20,0,G*14),N++}for(;N<M.length;N++)M[N].visible=!1;const W=z.projectiles??[];for(;_.length<W.length;){const D=new Ye(a,l);i.add(D),_.push(D)}_.forEach((D,G)=>{const H=W[G];D.visible=!!H,H&&(D.position.set(...Mn(H.x,H.y,Ft)),D.rotation.y=Math.atan2(H.vx,-H.vy))});const I=new Set((z.items??[]).filter(D=>D.taken).map(D=>D.id));for(const D of y)D.g.visible=!I.has(D.id),D.g.visible&&(D.body.position.y=.15+Math.sin(k*3+D.phase)*.12,D.body.rotation.y=k*1.8+D.phase);v.forEach((D,G)=>{const H=G<=(z.checkpointIndex??-1),ce=H?1:1+.06*Math.sin(k*4+G);D.ring.scale.set(ce,1,ce),D.ring.rotation.y=k*.3,D.sparkles.rotation.y=k*(H?.3:.9),D.ringMats[0].color.set(H?js:$u),D.ringMats[1].color.set(H?js:Di),D.ringMats[2].color.set(H?js:Di),D.ringMats[3].color.set(H?js:Di),D.beamMat.opacity=H?.06:.12+.05*Math.sin(k*3+G),D.blanket.color.set(H?js:nf)})}}const cs=i=>Math.round(i*100)/100,ic="kenney/city-kit-commercial/",uv="kenney/city-kit-suburban/",Sa=[..."abcdefghijkln"].map(i=>ic+"building-"+i),hv=[..."abcdefghk"].map(i=>ic+"building-"+i),ba=[..."bcde"].map(i=>ic+"building-skyscraper-"+i),fv=[..."abcdefghijklmnopqrstu"].map(i=>uv+"building-type-"+i),cn=1.5,vn=3,Ks=4.5,dv=[-10,0,10],fs=12,Zu=2.6;function sf(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const pv={company:[["office",.65],["plaza",.2],["parking",.15]],alley:[["shops",.8],["yard",.2]],city:[["downtown",.5],["houses",.3],["plaza",.2]],hospital:[["ward",.7],["park",.3]]},lt="OfficeChair",_t="SpicyChaser",yt="AlcoholTurret",mv={company:[[{open:[0,1,2],blocks:["office","plaza","office","parking"],obs:[[lt,"road",1,.5,0]]},{open:[0,1,2],blocks:["parking","office","plaza","office"],obs:[[lt,"road",0,.5,.8]]}],[{open:[0,1,2],blocks:["office","office","parking","office"],obs:[[lt,"road",0,.3,-.8],[lt,"road",1,.6,.8],[lt,"road",2,.45,0]]},{open:[0,2],blocks:["office","office","office","office"],obs:[[lt,"road",0,.5,.9],[lt,"road",2,.3,-.9],[lt,"road",2,.75,.9]]},{open:[1,2],blocks:["office","plaza","office","office"],obs:[[lt,"road",1,.35,.9],[lt,"block",1,.6,.5],[lt,"corner",2,"top",-1]]}],[{open:[1,2],blocks:["office","office","plaza","office"],obs:[[lt,"road",1,.2,-.9],[lt,"road",1,.5,.9],[lt,"road",1,.8,-.9],[lt,"road",2,.5,0]]},{open:[0,1],blocks:["office","parking","office","office"],obs:[[lt,"road",0,.5,0],[lt,"road",1,.3,-.9],[lt,"road",1,.7,.9],[lt,"corner",1,"top",1]]}]],alley:[[{open:[0,1,2],blocks:["shops","yard","shops","shops"],obs:[[yt,"block",1,.5,.5]]},{open:[0,1,2],blocks:["shops","shops","yard","shops"],obs:[[yt,"side",2,.5,-1]]}],[{open:[0,2],blocks:["shops","shops","shops","shops"],obs:[[yt,"corner",0,"top",1],[yt,"corner",2,"bottom",-1],[lt,"road",0,.5,0]]},{open:[1,2],blocks:["shops","shops","yard","shops"],obs:[[yt,"side",1,.5,1],[yt,"block",2,.3,.5],[lt,"road",2,.6,0]]},{open:[0,1],blocks:["yard","shops","shops","shops"],obs:[[yt,"side",0,.35,1],[yt,"side",1,.7,-1]]}],[{open:[1],blocks:["shops","shops","shops","shops"],obs:[[yt,"side",1,.25,-1],[yt,"side",1,.55,1],[yt,"side",1,.85,-1],[lt,"road",1,.4,.8]]},{open:[0,1],blocks:["shops","shops","shops","yard"],obs:[[yt,"corner",0,"top",1],[yt,"corner",1,"bottom",-1],[yt,"side",0,.5,1],[lt,"road",1,.55,0]]}]],city:[[{open:[0,1,2],blocks:["downtown","plaza","houses","downtown"],obs:[[_t,"block",1,.5,.5]]},{open:[0,1,2],blocks:["houses","downtown","plaza","downtown"],obs:[[_t,"block",2,.5,.5]]}],[{open:[0,1,2],blocks:["downtown","houses","plaza","downtown"],obs:[[_t,"block",1,.3,.5],[_t,"block",2,.7,.5],[yt,"corner",1,"top",-1]]},{open:[0,2],blocks:["downtown","houses","houses","downtown"],obs:[[_t,"road",0,.5,0],[_t,"road",2,.5,0],[_t,"block",1,.5,.5]]}],[{open:[1,2],blocks:["downtown","plaza","houses","downtown"],obs:[[_t,"block",1,.3,.5],[_t,"block",1,.75,.5],[_t,"road",1,.5,0],[_t,"road",2,.4,0],[yt,"corner",2,"top",-1]]},{open:[0,1],blocks:["downtown","houses","downtown","downtown"],obs:[[_t,"road",0,.3,0],[_t,"road",1,.6,0],[_t,"block",1,.5,.5],[yt,"side",0,.75,1],[_t,"corner",1,"top",1]]}]],hospital:[[{open:[0,1,2],blocks:["ward","park","ward","ward"],obs:[[lt,"road",1,.5,0]]},{open:[0,1,2],blocks:["ward","ward","park","ward"],obs:[[_t,"block",2,.5,.5]]}],[{open:[0,2],blocks:["ward","ward","ward","ward"],obs:[[lt,"road",0,.4,-.9],[_t,"road",2,.6,0],[yt,"corner",0,"top",1]]},{open:[1,2],blocks:["ward","park","ward","ward"],obs:[[yt,"side",1,.4,-1],[_t,"road",2,.5,0],[lt,"road",1,.75,.9]]}],[{open:[1,2],blocks:["ward","ward","park","ward"],obs:[[lt,"road",1,.2,-.9],[yt,"side",1,.5,1],[_t,"road",1,.8,0],[_t,"block",2,.5,.5]]},{open:[0,1],blocks:["ward","ward","ward","ward"],obs:[[yt,"corner",0,"top",1],[yt,"corner",1,"bottom",-1],[_t,"road",0,.5,0],[lt,"road",1,.5,-.9]]}]]},gv={open:[1],blocks:["ward","park","park","ward"],obs:[[_t,"block",1,.4,.5],[_t,"block",2,.4,.5]]},_v={OfficeChair:.7,SpicyChaser:.55,AlcoholTurret:.6},xv={company:[["cushion",.35],["ointment",.25],["ice",.2],["suppository",.2]],alley:[["cushion",.25],["ointment",.25],["ice",.35],["suppository",.15]],city:[["cushion",.3],["ointment",.25],["ice",.3],["suppository",.15]],hospital:[["cushion",.25],["ointment",.4],["ice",.2],["suppository",.15]]},yv=new Set(["office","shops","downtown","ward"]),Ju=4,Qu={OfficeChair:"chair",SpicyChaser:"spicy",AlcoholTurret:"alcohol"};function rf(i,e){const t=sf(i),n=C=>C[Math.floor(t()*C.length)],s=(C,K)=>C+t()*(K-C),r=C=>{let K=t();for(const[Q,ae]of C)if((K-=ae)<0)return Q;return C[0][0]},{bounds:o,hospital:a,zones:l}=e,c=C=>l.find(K=>C<K.y1)??l.at(-1),u=[];for(let C=14+s(0,4);C<a.y-14;C+=s(18,26))u.push(Math.round(C));const h=[o.minY,...u,o.maxY],f=[];for(const C of e.checkpoints){const K=u.reduce((Q,ae,pe)=>Math.abs(ae-C.y)<Math.abs(u[Q]-C.y)?pe:Q,0);!f.some(Q=>Q.si===K)&&K+1<h.length-2&&f.push({si:K,cp:C})}const p=[];for(let C=0;C<h.length-1;C++){const K=h[C],Q=h[C+1],ae=C===h.length-2,pe=c((K+Q)/2).id,F=Math.max(-1,...f.filter(P=>P.si<C).map(P=>P.si)),Ne=Math.min(h.length,...f.filter(P=>P.si>=C).map(P=>P.si)),Ae=C===0||C-1===F?0:Ne-C<=0?2:1;let ve=ae?gv:n(mv[pe][Ae]);!ae&&C>0&&t()<.5&&(ve=vv(ve));const Xe=dv.map(P=>(C===0||ae)&&P===0?0:Math.round((P+s(-1.5,1.5))*10)/10);let Se=[...ve.open];C===0&&!Se.includes(1)&&Se.push(1),p.push({y0:K,y1:Q,xs:Xe,open:Se,chunk:ve,z:pe,tier:Ae})}const g=[];let _=t()<.5?0:2;for(const{si:C,cp:K}of f){const Q=p[C+1];Q.open.includes(_)||Q.open.push(_),g.push({...K,x:Q.xs[_],y:u[C],radius:2.4}),_=2-_}for(const C of p)C.open.sort();const m=[...u.map(C=>({x0:o.minX,x1:o.maxX,y0:C-cn,y1:C+cn,dir:"ew"})),...p.flatMap((C,K)=>C.open.map(Q=>({x0:C.xs[Q]-cn,x1:C.xs[Q]+cn,y0:K===0?3:C.y0+cn,y1:K===p.length-1?a.y-2:C.y1-cn,dir:"ns"})))],d=[];p.forEach((C,K)=>{const Q=C.y0+(K===0?0:vn),ae=C.y1-(K===p.length-1?0:vn),pe=C.open.map(Ne=>[C.xs[Ne]-vn,C.xs[Ne]+vn]);let F=o.minX;for(const[Ne,Ae]of[...pe,[o.maxX,o.maxX]]){if(Ne-F>1.5&&ae-Q>1.5){const ve=(F+Ne)/2,_e=C.xs.filter(P=>P<ve).length,Xe=c((Q+ae)/2+s(-fs,fs)).id,Se=Xe===C.z?C.chunk.blocks[_e]:r(pv[Xe]);d.push({x0:F,x1:Ne,y0:Q,y1:ae,zone:Xe,kind:Se,band:C,region:_e})}F=Ae}});const v=[],y=(C,K,Q)=>{K<o.minX+1.2||K>o.maxX-1.2||Math.hypot(K-e.spawn.x,Q-e.spawn.y)<8||g.some(ae=>Math.hypot(K-ae.x,Q-ae.y)<ae.radius+2.5)||Math.hypot(K-a.x,Q-a.y)<a.radius+3||v.some(ae=>Math.hypot(K-ae.x,Q-ae.y)<3.2)||v.push({id:`${Qu[C]}-${v.length+1}`,type:C,model:Qu[C],x:Math.round(K*100)/100,y:Math.round(Q*100)/100,radius:_v[C]})};for(const C of p)for(const[K,Q,ae,pe,F]of C.chunk.obs){const Ne=C.xs[ae],Ae=C.y0+vn+pe*(C.y1-C.y0-2*vn);if(Q==="road"&&C.open.includes(ae))y(K,Ne+F,Ae);else if(Q==="side"&&C.open.includes(ae))y(K,Ne+F*(vn-.6),Ae);else if(Q==="corner"&&C.open.includes(ae))y(K,Ne+F*Ks*.8,pe==="top"?C.y1-Ks*.8:C.y0+Ks*.8);else if(Q==="block"){const ve=d.find(_e=>_e.band===C&&_e.region===ae)??d.find(_e=>_e.band===C);if(!ve)continue;if(yv.has(ve.kind)){const _e=(ve.x0+ve.x1)/2,Xe=C.open.map(Se=>C.xs[Se]).reduce((Se,P)=>Math.abs(P-_e)<Math.abs(Se-_e)?P:Se);y(K,Xe,ve.y0+pe*(ve.y1-ve.y0))}else y(K,ve.x0+F*(ve.x1-ve.x0),ve.y0+pe*(ve.y1-ve.y0))}}const x=[...m.map(C=>({x:(C.x0+C.x1)/2,y:(C.y0+C.y1)/2,hx:(C.x1-C.x0)/2+vn-cn,hy:(C.y1-C.y0)/2+vn-cn})),...p.flatMap(C=>C.open.flatMap(K=>[C.y0,C.y1].filter(Q=>u.includes(Q)).map(Q=>({x:C.xs[K],y:Q,hx:Ks,hy:Ks})))),{x:0,y:e.spawn.y,hx:3,hy:3},...g.map(C=>({x:C.x,y:C.y,hx:C.radius+1,hy:C.radius+1})),{x:a.x,y:a.y,hx:a.radius+2,hy:a.radius+2},...v.map(C=>({x:C.x,y:C.y,hx:C.radius+.9,hy:C.radius+.9}))],b=e.decor.filter(C=>C.id==="hq"||C.id==="hospital"),T=rr(b),R=(C,K=0)=>x.concat(T).some(Q=>Math.abs(C.x-Q.x)<C.hx+Q.hx+K&&Math.abs(C.y-Q.y)<C.hy+Q.hy+K),L=C=>C.x-C.hx>o.minX+.6&&C.x+C.hx<o.maxX-.6&&C.y-C.hy>o.minY+.6&&C.y+C.hy<o.maxY-.6;let S=0;const M=(C,K,Q,ae,pe=0)=>{const F={id:`b${S}`,model:C,x:Math.round(Q*100)/100,y:Math.round(ae*100)/100,rotY:pe,scale:K},Ne=rr([F]);return!Ne.every(L)||Ne.some(Ae=>R(Ae,.4))?!1:(S++,b.push(F),T.push(...Ne),!0)},A=C=>Math.round(Math.min(2.5,2.1/So[C].top)*100)/100,z=()=>{const C=n(fv);return[C,A(C)]},k={office:()=>t()<.3?z():t()<.8?[n(Sa),2.6]:[n(ba),1.8],shops:()=>[n(hv),2.5],downtown:()=>t()<.5?[n(Sa),2.6]:t()<.5?[n(ba),1.8]:z(),houses:z,ward:()=>t()<.15?z():t()<.6?[n(Sa),2.7]:[n(ba),1.9],park:()=>t()<.2?z():null};for(const C of d){const K=k[C.kind];if(!K)continue;C.kind==="shops"&&C.x1-C.x0>8&&(C.passage=s(C.x0+3,C.x1-3),x.push({x:C.passage,y:(C.y0+C.y1)/2,hx:1.5,hy:(C.y1-C.y0)/2}));const Q=C.kind==="shops"||C.kind==="ward";for(let ae=C.y0+.5;ae<C.y1-1;){let pe=0;for(let F=C.x0+.5;F<C.x1-1;){let Ne=!1;for(let Ae=0;Ae<4&&!Ne;Ae++){const ve=K();if(!ve)break;const[_e,Xe]=ve,Se=So[_e],P=Se.hx*2*Xe,E=Se.hz*2*Xe;F+P>C.x1-.5||ae+E>C.y1-.5||M(_e,Xe,F+P/2,ae+E/2,t()<.5?0:180)&&(Ne=!0,pe=Math.max(pe,E),F+=P+(Q?s(.45,.9):s(.45,2.4)))}Ne||(F+=.8)}ae+=Math.max(pe,1.5)+(Q?s(.45,.9):s(.45,2.2))}}const U=tc(b.filter(C=>C.id!=="hq"&&C.id!=="hospital")),B=(C,K)=>Math.abs(C.x-K.x)-C.hx-K.hx<Zu&&Math.abs(C.y-K.y)-C.hy-K.hy<Zu,N=C=>{const K=Math.min(...C.map(F=>F.x-F.hx)),Q=Math.max(...C.map(F=>F.x+F.hx)),ae=Math.min(...C.map(F=>F.y-F.hy)),pe=Math.max(...C.map(F=>F.y+F.hy));return{x:(K+Q)/2,y:(ae+pe)/2,hx:(Q-K)/2,hy:(pe-ae)/2}},W=C=>!x.some(K=>Math.abs(C.x-K.x)<C.hx+K.hx&&Math.abs(C.y-K.y)<C.hy+K.hy)&&!v.some(K=>Math.abs(C.x-K.x)<C.hx+K.radius+.5&&Math.abs(C.y-K.y)<C.hy+K.radius+.5),I=[],D=U.map((C,K)=>K),G=C=>D[C]===C?C:D[C]=G(D[C]);for(let C=0;C<U.length;C++)for(let K=C+1;K<U.length;K++)B(U[C],U[K])&&(D[G(C)]=G(K));const H=new Map;U.forEach((C,K)=>{const Q=G(K);H.has(Q)||H.set(Q,[]),H.get(Q).push(C)});for(const C of H.values()){if(C.length<2)continue;const K=N(C);if(W(K)){I.push(K);continue}for(let Q=0;Q<C.length;Q++)for(let ae=Q+1;ae<C.length;ae++){const pe=N([C[Q],C[ae]]);B(C[Q],C[ae])&&W(pe)&&I.push(pe)}}I.forEach((C,K)=>Object.assign(C,{id:`lump${K}`,x:Math.round(C.x*100)/100,y:Math.round(C.y*100)/100,hx:Math.round(C.hx*100)/100,hy:Math.round(C.hy*100)/100}));const ce=new Set(U.map(C=>C.decorRef)),le=b.filter(C=>ce.has(C.id)||C.id==="hq"||C.id==="hospital"||!rr([C]).some(K=>I.some(Q=>Math.abs(K.x-Q.x)<Q.hx+K.hx&&Math.abs(K.y-Q.y)<Q.hy+K.hy))),j=nc({decor:le,lumps:I}),ee=(C,K,Q,ae,pe)=>{for(let F=0;F<=16;F++){const Ne=C+(Q-C)*F/16,Ae=K+(ae-K)*F/16;if(Ne<o.minX+1||Ne>o.maxX-1||j.some(ve=>Math.abs(Ne-ve.x)<ve.hx+pe&&Math.abs(Ae-ve.y)<ve.hy+pe))return!1}return!0};for(const C of v)if(C.type==="SpicyChaser")for(const[K,Q]of t()<.5?[[0,1],[1,0]]:[[1,0],[0,1]])for(const ae of[Ju,Ju*.6]){const pe={x:C.x-K*ae,y:C.y-Q*ae},F={x:C.x+K*ae,y:C.y+Q*ae};!C.patrol&&ee(pe.x,pe.y,F.x,F.y,C.radius+.3)&&(C.patrol={x0:cs(pe.x),y0:cs(pe.y),x1:cs(F.x),y1:cs(F.y)})}const q=[],ne=(C,K)=>C>o.minX+1.5&&C<o.maxX-1.5&&!j.some(Q=>Math.abs(C-Q.x)<Q.hx+1&&Math.abs(K-Q.y)<Q.hy+1)&&!v.some(Q=>Math.hypot(C-Q.x,K-Q.y)<Q.radius+2)&&!g.some(Q=>Math.hypot(C-Q.x,K-Q.y)<Q.radius+2.5)&&!q.some(Q=>Math.hypot(C-Q.x,K-Q.y)<6)&&Math.hypot(C-a.x,K-a.y)>a.radius+3,de=(C,K,Q)=>{ne(C,K)&&q.push({id:`item-${q.length+1}`,kind:r(Q),x:cs(C),y:cs(K)})};p.forEach((C,K)=>{if(!(K===0||K===p.length-1)&&t()<.65){const Q=C.open[Math.floor(t()*C.open.length)];de(C.xs[Q]+s(-.8,.8),C.y0+vn+t()*(C.y1-C.y0-2*vn),xv[C.z])}});for(const C of d)C.passage!==void 0&&t()<.7&&de(C.passage,(C.y0+C.y1)/2,[["suppository",.5],["cushion",.5]]);return{...e,seed:i,streets:u,roads:m,blocks:d.map(({band:C,region:K,...Q})=>Q),checkpoints:g,decor:le,obstacles:v,lumps:I,items:q}}function vv(i){return{open:i.open.map(e=>2-e),blocks:[...i.blocks].reverse(),obs:i.obs.map(([e,t,n,s,r])=>t==="block"?[e,t,3-n,s,1-r]:[e,t,2-n,s,typeof r=="number"?-r:r])}}const vt=64,Mv=2;function Sv(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const of=(i,e)=>`#${new Le(i).offsetHSL(0,0,e).getHexString()}`,El={pavers(i,e){Ea(i,e,"#C9CDD2","#AEB3BA",16,16,.025)},sidewalk(i,e){Ea(i,e,"#D8D5CE","#BDB9B0",32,32,.015)},plaza(i,e){Ea(i,e,"#E8DDC8","#D2C5AC",16,16,.02),i.fillStyle="#D9C9A8";for(let t=0;t<vt;t+=32)for(let n=0;n<vt;n+=32)i.fillRect(n+1,t+1,15,15)},brick(i,e){i.fillStyle="#7A5448",i.fillRect(0,0,vt,vt);for(let t=0,n=0;t<vt;t+=8,n++)for(let s=n%2*-8;s<vt;s+=16)i.fillStyle=of("#A06A57",(e()-.5)*.06),i.fillRect(s+1,t+1,15,7)},asphalt(i,e){Ta(i,e,"#5D6068",["#686B73","#53565D"],140)},parking(i,e){El.asphalt(i,e),i.fillStyle="#E9E6DE";for(let t=0;t<vt;t+=16)i.fillRect(t,2,2,24),i.fillRect(t,38,2,24);i.fillRect(0,30,vt,2)},yard(i,e){Ta(i,e,"#4E5058",["#5A5C64","#44464D"],160),i.fillStyle="#7C97AE";for(let t=0;t<2;t++){const n=e()*48,s=e()*48;i.fillRect(n,s,10+e()*8,4+e()*4),i.fillRect(n+3,s-2,6,2)}i.fillStyle="#3E4046";for(let t=0;t<3;t++){let n=e()*vt,s=e()*vt;for(let r=0;r<10;r++)i.fillRect(n,s,1,1),n+=Math.round(e()*2-.5),s+=1}},grass(i,e){Ta(i,e,"#8CC56E",["#7DB862","#9BD27C","#86BF68"],260);for(let t=0;t<3;t++)i.fillStyle=["#F7F0B5","#F2B8C6","#FFFFFF"][t],i.fillRect(Math.floor(e()*vt),Math.floor(e()*vt),1,1)},lawn(i,e){El.grass(i,e),i.fillStyle="#D8D2C2";for(let t=2;t<vt;t+=10)i.fillRect(28+Math.round(e()*2),t,8,6)}};function Ea(i,e,t,n,s,r,o){i.fillStyle=n,i.fillRect(0,0,vt,vt);for(let a=0;a<vt;a+=r)for(let l=0;l<vt;l+=s)i.fillStyle=of(t,(e()-.5)*o*2),i.fillRect(l+1,a+1,s-1,r-1)}function Ta(i,e,t,n,s){i.fillStyle=t,i.fillRect(0,0,vt,vt);for(let r=0;r<s;r++)i.fillStyle=n[r%n.length],i.fillRect(Math.floor(e()*vt),Math.floor(e()*vt),1+(e()<.2),1)}const Aa={};function bv(i){if(!Aa[i]){const e=document.createElement("canvas");e.width=e.height=vt,El[i](e.getContext("2d"),Sv(i.length*977+i.charCodeAt(0)));const t=new Yh(e);t.wrapS=t.wrapT=Wi,t.magFilter=t.minFilter=wt,t.generateMipmaps=!1,t.colorSpace=Ut,Aa[i]=t}return Aa[i]}const eh=Mv,Ev={office:"pavers",downtown:"pavers",plaza:"plaza",parking:"parking",shops:"brick",yard:"yard",houses:"lawn",park:"grass",ward:"pavers"},jt="kenney/",to={straight:jt+"city-kit-roads/road-straight",cross:jt+"city-kit-roads/road-crossroad",crossing:jt+"city-kit-roads/road-crossing"},th=["sedan","taxi","van","police","suv","hatchback-sports","delivery"].map(i=>jt+"car-kit/"+i),Ui=cn*2,no=.8,io=.7,nh=.47,Tv=2.4,Av=2.6,wv=.08;async function Rv(i,e,t){const n=e.bounds,s=sf((e.seed??0)+4242),r=rr(e.decor).map(b=>({...b,hx:b.hx+.35,hy:b.hy+.35})),o=(b,T,R=0)=>b>n.minX+.8&&b<n.maxX-.8&&!r.some(L=>Math.abs(b-L.x)<L.hx+R&&Math.abs(T-L.y)<L.hy+R),a=new Map,l=(b,T,R,L,S,M)=>{if(R-T<=0||S-L<=0)return;const A=new _i(R-T,S-L);A.rotateX(-Math.PI/2),A.translate((T+R)/2,M,-(L+S)/2);const z=A.attributes.position,k=A.attributes.uv;for(let U=0;U<z.count;U++)k.setXY(U,z.getX(U)/eh,-z.getZ(U)/eh);a.has(b)||a.set(b,[]),a.get(b).push(A)};for(const b of e.blocks??[])l(Ev[b.kind],b.x0-io,b.x1+io,b.y0-io,b.y1+io,.006);for(const b of e.blocks??[])b.passage!==void 0&&l("yard",b.passage-1.5,b.passage+1.5,b.y0,b.y1,.007);for(const b of e.roads??[])l("sidewalk",b.x0-no,b.x1+no,b.y0-no,b.y1+no,.009);for(const[b,T]of a){const R=new Ye(Fu(T),_r(new ei({map:bv(b)}),wv));R.geometry.userData.merged=!0,R.receiveShadow=!0,i.add(R)}const c=[],u=async(b,T,R,{scale:L=1,rot:S=0,h:M=.012,sx:A=L,sz:z=L}={})=>{const k=await t(b);k.scale.set(A,L,z),k.rotation.y=S,k.position.set(T,M,-R),c.push(k)},h=(e.roads??[]).filter(b=>b.dir==="ns"),f=(e.roads??[]).filter(b=>b.dir==="ew"),p=f.map(b=>(b.y0+b.y1)/2),g=(b,T,R)=>Math.abs(b-(T+R*cn))<.1,_=[];for(const b of h){const T=(b.x0+b.x1)/2,R=Math.max(1,Math.round((b.y1-b.y0)/Ui)),L=(b.y1-b.y0)/R;for(let S=0;S<R;S++){const M=S===0&&p.some(A=>g(b.y0,A,1))||S===R-1&&p.some(A=>g(b.y1,A,-1));await u(M?to.crossing:to.straight,T,b.y0+L*(S+.5),{scale:Ui,sx:L,sz:Ui,rot:Math.PI/2})}for(const S of p)(g(b.y0,S,1)||g(b.y1,S,-1))&&_.push({x:T,y:S})}for(const b of p){const T=[...new Set(_.filter(L=>L.y===b).map(L=>L.x))].sort((L,S)=>L-S);for(const L of T)await u(to.cross,L,b,{scale:Ui});const R=[n.minX,...T.flatMap(L=>[L-cn,L+cn]),n.maxX];for(let L=0;L<R.length;L+=2){const S=R[L],M=R[L+1];if(M-S<.3)continue;const A=Math.max(1,Math.round((M-S)/Ui)),z=(M-S)/A;for(let k=0;k<A;k++)await u(to.straight,S+z*(k+.5),b,{scale:Ui,sx:z,sz:Ui})}}const m=(b,T,R)=>u(th[Math.floor(s()*th.length)],b,T,{scale:nh,rot:R}),d=(b,T)=>u(jt+"city-kit-suburban/"+(s()<.6?"tree-large":"tree-small"),b,T,{scale:Tv,rot:s()*6}),v=(b,T,R)=>u(jt+"city-kit-roads/light-curved",b,T,{scale:Av,rot:R}),y=async(b,T,R,L=.3)=>{for(let S=0,M=0;S<T&&M<T*20;M++){const A=b.x0+.6+s()*(b.x1-b.x0-1.2),z=b.y0+.6+s()*(b.y1-b.y0-1.2);o(A,z,L)&&(b.passage===void 0||Math.abs(A-b.passage)>1.1)&&(await R(A,z),r.push({x:A,y:z,hx:L+.2,hy:L+.2}),S++)}};for(const b of e.blocks??[]){const T=R=>Math.round(R*(b.x1-b.x0)*(b.y1-b.y0)/100);if(b.kind==="parking")for(let R=b.y0+1;R<b.y1-1;R+=2)for(let L=b.x0+.5;L<b.x1-.5;L+=1)s()<.55&&o(L,R)&&await m(L,R,s()<.5?0:Math.PI);else if(b.kind==="plaza")await y(b,T(3),d,.6),await y(b,T(4),(R,L)=>u(jt+"city-kit-suburban/planter",R,L,{scale:2.2})),await y(b,T(1.5),(R,L)=>v(R,L,s()*6));else if(b.kind==="office"||b.kind==="downtown")await y(b,T(1.5),d,.5),await y(b,T(1.5),(R,L)=>u(jt+"city-kit-suburban/planter",R,L,{scale:2.2}));else if(b.kind==="shops"||b.kind==="yard"){const R=b.kind==="yard";await y(b,T(R?5:2),(L,S)=>u(jt+"city-kit-roads/dumpster",L,S,{scale:2,rot:s()*6})),await y(b,T(R?6:2),(L,S)=>u(jt+"city-kit-roads/construction-cone",L,S,{scale:2.2,rot:s()*6}),.15),R&&await y(b,T(2),(L,S)=>u(jt+"city-kit-roads/construction-barrier",L,S,{scale:2.2,rot:s()<.5?0:Math.PI/2}))}else b.kind==="houses"?(await y(b,T(4),d,.5),await y(b,T(3),(R,L)=>u(jt+"city-kit-suburban/fence-low",R,L,{scale:1.6,rot:s()<.5?0:Math.PI/2}),.7)):b.kind==="park"&&(await y(b,T(9),d,.5),await y(b,T(3),(R,L)=>u(jt+"city-kit-suburban/planter",R,L,{scale:2.2})),await y(b,T(2),(R,L)=>u(jt+"city-kit-suburban/path-stones-long",R,L,{scale:2.4,rot:s()*3}),.1))}for(const b of h)for(let T=b.y0+2;T<b.y1-1;T+=6){const R=s()<.5?-1:1,L=(R<0?b.x0:b.x1)+R*.45;o(L,T)&&await v(L,T,R<0?-Math.PI/2:Math.PI/2)}for(const b of h)for(let T=b.y0+3;T<b.y1-3;T+=7)s()<.25&&await m((b.x0+b.x1)/2+(s()<.5?-.7:.7),T,s()<.5?0:Math.PI);for(const b of f){const T=(b.y0+b.y1)/2;for(let R=n.minX+3;R<n.maxX-3;R+=7)s()<.2&&!_.some(L=>L.y===T&&Math.abs(L.x-R)<2.5)&&await m(R,T+(s()<.5?-.7:.7),Math.PI/2*(s()<.5?1:-1))}for(const[b,T]of[[4.5,e.hospital.y],[-4.5,e.hospital.y-2]])o(b,T)&&await u(jt+"car-kit/ambulance",b,T,{scale:nh,rot:Math.PI/2});const x=new Map;for(const b of c)b.updateMatrixWorld(!0),b.traverse(T=>{if(!T.isMesh)return;const R=T.geometry.clone().applyMatrix4(T.matrixWorld),L=T.material.uuid+"|"+Object.keys(R.attributes).sort().join(",");x.has(L)||x.set(L,{material:T.material,geos:[]}),x.get(L).geos.push(R)});for(const{material:b,geos:T}of x.values()){const R=Fu(T);R.userData.merged=!0;const L=new Ye(R,_r(b,Jy));L.castShadow=!0,L.receiveShadow=!0,i.add(L)}}function Cv(i,e={}){const{ship:t}=i;if(t.state!=="PLAYING"&&t.state!=="RESPAWN"||t.agonyLeft>0)return null;const n=tf(t);if(n)return e.status!==n||t.gameTime>=e.statusUntil?null:{text:n==="stunned"?"기절!":n==="drunk"?"취했다!! 딸꾹!":e.runaway==="overheat"?"폭주!":"불꽃이 막 나와!",tone:"danger"};if(t.state==="RESPAWN"||Math.max(t.overLeft,t.overRight)>0)return null;if(i.checkpointIndex<0){if(t.gameTime<5)return{text:"한쪽 = 회전",tone:"info"};if(t.gameTime<10)return{text:"양쪽 = 전진",tone:"info"};if(t.gameTime<16)return{text:"꾹 누르면 폭주!",tone:"info"}}return null}const ih={chair:"쾅!",building:"쿵!",alcohol:"꿀꺽!",spicy:null};function af(i){const e=i.world.checkpoints?.[(i.checkpointIndex??-1)+1];return e?{x:e.x,y:e.y,kind:"checkpoint"}:{x:i.world.hospital.x,y:i.world.hospital.y,kind:"hospital"}}function Lv(i){const e=af(i),t=e.x-i.ship.x,n=e.y-i.ship.y;return{angle:Math.atan2(t,n),distance:Math.hypot(t,n),kind:e.kind}}const Pv={character:"canonical/character_frog.glb",office_block:"building_company.glb",alley_block:"building_alley.glb",city_block:"building_city.glb",hospital:"building_hospital.glb",chair:"obstacle_office_chair.glb",spicy:"obstacle_spicy_chaser.glb",alcohol:"obstacle_alcohol_turret.glb"},sh=i=>new O(...[1,3,5].map(e=>parseInt(i.slice(e,e+2),16)/255)),Iv={uniforms:{tWorld:{value:null},tHud:{value:null},uStyle:{value:0},worldPal:{value:Jl.map(sh)},uiPal:{value:Ql.map(sh)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`};async function Dv(i,e){const t=new V_({canvas:i,antialias:!1,preserveDrawingBuffer:!0});t.setPixelRatio(1),t.shadowMap.enabled=!0,t.shadowMap.type=wf;const n=new _u;n.background=new Le("#8FD6F2"),n.add(new fx("#E6F4FF","#8C7BB0",1.25));const s=new $h("#FFE6BF",2.4);s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:60}),n.add(s,s.target);const r=new Nx,o={},a=new WeakSet,l=H=>(H.scene.traverse(ce=>{const le=ce.isMesh&&ce.geometry.attributes.color;if(!le||a.has(le))return;const j=new Le;for(let ee=0;ee<le.count;ee++)le.setXYZ(ee,...j.setRGB(le.getX(ee),le.getY(ee),le.getZ(ee)).convertSRGBToLinear().toArray());a.add(le)}),H),c=H=>o[H]??=r.loadAsync(`./models/${Pv[H]??`${H}.glb`}`).then(l);await Promise.all(["character","chair","spicy","hospital",...Object.keys(So)].map(c));const u=async H=>{c(H);const ce=(await o[H]).scene.clone();return ce.traverse(le=>{le.isMesh&&(le.castShadow=!0,le.receiveShadow=!0,le.material.metalness=0,le.material.roughness=1)}),ce};let h=null,f=()=>{};async function p(H){const ce=new et,le=H.bounds,j=-(le.minY+le.maxY)/2;((ne,de,C,K,Q,ae,pe)=>{const F=new Ye(new _i(ne,de),_r(new ei({color:C}),pe));F.rotation.x=-Math.PI/2,F.position.set(K,ae,Q),F.receiveShadow=!0,ce.add(F)})(400,le.maxY-le.minY+200,"#242637",0,j,0,ev);{const ne=le.maxY-le.minY,de=H.zones??[],C=new _i(le.maxX-le.minX,ne,1,Math.ceil(ne/2));C.rotateX(-Math.PI/2),C.translate((le.minX+le.maxX)/2,.003,j);const K=C.attributes.position,Q=[],ae=new Le,pe=new Le;for(let Ne=0;Ne<K.count;Ne++){const Ae=-K.getZ(Ne),ve=Math.max(0,de.findIndex(Xe=>Ae<Xe.y1)),_e=de[ve];ae.set(_e?.ground??"#BFC3C7"),de[ve+1]&&_e.y1-Ae<fs?ae.lerp(pe.set(de[ve+1].ground),.5*(1-(_e.y1-Ae)/fs)):de[ve-1]&&Ae-_e.y0<fs&&ae.lerp(pe.set(de[ve-1].ground),.5*(1-(Ae-_e.y0)/fs)),Q.push(ae.r,ae.g,ae.b)}C.setAttribute("color",new mt(Q,3));const F=new Ye(C,_r(new ei({vertexColors:!0}),Zy));F.receiveShadow=!0,ce.add(F)}const q=await cv(ce,H,u);await Rv(ce,H,u),h&&(n.remove(h),h.traverse(ne=>{ne.isMesh&&ne.geometry.userData.merged&&ne.geometry.dispose()})),h=ce,n.add(ce),f=q}await p(e);const g=new et,_=new et,m=await u("character");m.traverse(H=>{H.isMesh&&(H.castShadow=!0)}),bl(m),g.add(_),_.add(m),_.scale.setScalar(er);const d=Xy();n.add(g);const v={nozzleL:m.getObjectByName("nozzle_L"),nozzleR:m.getObjectByName("nozzle_R"),head:m.getObjectByName("head")};if(!v.nozzleL||!v.nozzleR||!v.head)throw new Error("canonical character is missing nozzle_L / nozzle_R / head");const y=Iy(n,v,m),x=Hy(m,v),b=new mr(-1,1,1,-1,.1,200),T=new mr(-1,1,1,-1,0,1),R=new Ye(new _i(2,2),new Qn(Iv)),L=new _u;L.add(R);const S=document.createElement("canvas"),M=S.getContext("2d",{willReadFrequently:!0}),A=new Yh(S);A.minFilter=A.magFilter=wt,R.material.uniforms.tHud.value=A;let z=null,k=45,U=Uo[1],B=0,N=0,W="color";function I(H,ce,le=U,j=W){W=j,R.material.uniforms.uStyle.value={pixel:0,soft:1,clean:2,color:2}[W],U=le,[B,N]=Do[H],k=ce,t.setSize(B,N,!1),z?.dispose();const ee=W==="clean"?Qt:wt;z=new vi(B,N,{minFilter:ee,magFilter:ee,type:Ps,samples:W==="clean"?4:0}),A.minFilter=A.magFilter=ee,i.style.imageRendering=W==="clean"?"auto":"pixelated",R.material.uniforms.tWorld.value=z.texture,S.width=B,S.height=N,A.dispose();const q=U/2,ne=q*B/N;Object.assign(b,{left:-ne,right:ne,top:q,bottom:-q}),b.updateProjectionMatrix()}function D(H,ce,le,j={world:e,enemies:[],projectiles:[]},ee=[]){f(j,H.gameTime,ee);const[q,ne,de]=Mn(H.x,H.y,Ft);g.position.set(q,ne,de),g.rotation.y=Ty(H.theta),g.visible=!(H.state==="RESPAWN"&&Math.floor(H.invulnerableLeft*10)%2);const C=d(H,ce,ee);_.rotation.set(C.pitch,0,C.roll),_.position.y=C.lift,x(H,ce,ee),y(H,ce,ee);const K=new O(q,Ft,de-wy(k,U,My));b.position.copy(K).add(new O(...Ay(k,60))),b.lookAt(K),H.agonyLeft>0&&(b.position.x+=(Math.random()-.5)*.6,b.position.z+=(Math.random()-.5)*.6),H.disruptedLeft>0&&(b.position.x+=(Math.random()-.5)*.35,b.position.z+=(Math.random()-.5)*.35),H.drunkLeft>0&&b.rotateZ(Math.sin(H.gameTime*2.4)*.07*Math.min(1,H.drunkLeft)),s.position.set(q-8,14,de-2),s.target.position.set(q,0,de),t.setRenderTarget(z),t.render(n,b),M.clearRect(0,0,B,N),le(M,B,N),A.needsUpdate=!0,t.setRenderTarget(null),t.render(L,T);const Q={},ae=pe=>(pe.project(b),{x:(pe.x+1)/2*B,y:(1-pe.y)/2*N,visible:Math.abs(pe.x)<=1&&Math.abs(pe.y)<=1});for(const pe of["head","nozzleL","nozzleR"])Q[pe]=ae(v[pe].getWorldPosition(new O));if(j.world?.checkpoints){const pe=af(j);Q.target={...ae(new O(...Mn(pe.x,pe.y,Ft))),kind:pe.kind}}return Q}function G(){const H=t.getContext(),ce=new Uint8Array(B*N*4);H.readPixels(0,0,B,N,H.RGBA,H.UNSIGNED_BYTE,ce);const le=new Uint8Array(ce.length);for(let q=0;q<N;q++)le.set(ce.subarray((N-1-q)*B*4,(N-q)*B*4),q*B*4);const j=M.getImageData(0,0,B,N).data,ee=new Uint8Array(B*N);for(let q=0;q<ee.length;q++)ee[q]=j[q*4+3]>127?1:0;return{rgba:le,mask:ee,width:B,height:N}}return{setView:I,setWorld:p,render:D,readback:G,get size(){return[B,N]},get angle(){return k},get viewHeight(){return U}}}const Et=Object.freeze({rise:1.25,fall:2,fullThreshold:.995,overheatAfter:1.6,idle:.35,thrust:4.45,torque:4.8,drag:.65,spinDrag:1.9,fixedDt:1/60});function Uv(i={x:0,y:0}){return{x:i.x,y:i.y,theta:0,vx:0,vy:0,omega:0,left:0,right:0,overLeft:0,overRight:0,effectiveLeft:0,effectiveRight:0,state:"READY",disruptedLeft:0,stunnedLeft:0,drunkLeft:0,hiccupAt:1/0,hiccupSide:1,hitCooldown:0,pain:0,shieldLeft:0,boostLeft:0,agonyLeft:0,checkpoint:{x:i.x,y:i.y},invulnerableLeft:0,gameTime:0,overheats:0,distance:0}}function Nv(i){i.state="PLAYING"}const Fv=i=>i.disruptedLeft>0?It.spin:1;function Ov(i,e){return e==="left"?Math.sin(i*13.3+1.3)+Math.sin(i*5.7)+.7*Math.sin(i*2.3+.5)>.1:Math.sin(i*11.1+4.2)+Math.sin(i*6.9+2)+.7*Math.sin(i*3.1+1.7)>.1}function rh(i,e,t,n){const s=i.disruptedLeft>0&&Ov(i.gameTime,e),r=s?Et.rise*4:Et.rise;i[e]=Math.max(0,Math.min(1,i[e]+(t||s?r:-Et.fall)*n));const o=e==="left"?"overLeft":"overRight";i[o]=i[e]>=Et.fullThreshold?i[o]+n:0}function Bv(i,{left:e=!1,right:t=!1}={},n=Et.fixedDt){if(i.state!=="PLAYING"&&i.state!=="RESPAWN")return null;i.gameTime+=n,i.state==="RESPAWN"&&(i.invulnerableLeft=Math.max(0,i.invulnerableLeft-n),i.invulnerableLeft===0&&(i.state="PLAYING"));const s=i.stunnedLeft>0;let r=null;i.drunkLeft>0&&(i.omega+=Math.sin(i.gameTime*2.3)*Math.sin(i.gameTime*.9+1)*Pn.sway*n,i.gameTime>=i.hiccupAt&&(i.hiccupSide=-(i.hiccupSide||1),i.omega+=i.hiccupSide*Pn.spin,i.vx+=Math.sin(i.theta)*Pn.kick,i.vy+=Math.cos(i.theta)*Pn.kick,i.hiccupAt=i.gameTime+Pn.gap[0]+(Pn.gap[1]-Pn.gap[0])*(.5+.5*Math.sin(i.gameTime*12.9898)),r="hiccup")),i.drunkLeft=Math.max(0,i.drunkLeft-n),(i.disruptedLeft>0||s)&&(e=t=!1),rh(i,"left",e,n),rh(i,"right",t,n),(i.overLeft>=Et.overheatAfter||i.overRight>=Et.overheatAfter)&&(i.overLeft=i.overRight=0,i.disruptedLeft=It.disrupt,i.overheats++,r="overheat"),i.effectiveLeft=s?0:i.left+Et.idle*(1-i.left),i.effectiveRight=s?0:i.right+Et.idle*(1-i.right),i.stunnedLeft=Math.max(0,i.stunnedLeft-n),i.disruptedLeft=Math.max(0,i.disruptedLeft-n);const o=i.disruptedLeft>0?It.power:1,a=i.boostLeft>0?tr.boost.thrust:1;i.boostLeft=Math.max(0,i.boostLeft-n),i.shieldLeft=Math.max(0,i.shieldLeft-n);const l=Math.max(0,((i.pain??0)-Tn.ache)/(1-Tn.ache));l>0&&(i.omega+=Math.sin(i.gameTime*17)*Math.sin(i.gameTime*6.1)*Tn.tremble*l*n*10);const c=Et.thrust*o*a*(1-(1-Tn.weak)*l)*(i.effectiveLeft+i.effectiveRight),u=s?Sl.drag:Et.drag;if(i.vx+=(Math.sin(i.theta)*c-u*i.vx)*n,i.vy+=(Math.cos(i.theta)*c-u*i.vy)*n,i.omega+=(Et.torque*o*Fv(i)*(i.effectiveLeft-i.effectiveRight)-Et.spinDrag*i.omega)*n,i.disruptedLeft>0){const p=Math.floor(i.gameTime/It.joltEvery);p!==i.joltSlot&&(i.joltSlot=p,i.omega+=Math.sin(p*78.233)*It.jolt)}const h=i.vx*n,f=i.vy*n;return i.x+=h,i.y+=f,i.theta+=i.omega*n,i.distance+=Math.hypot(h,f),r}function kv(i){return i.filter(e=>e.type==="SpicyChaser"||e.type==="AlcoholTurret").map(e=>({...e,home:{x:e.x,y:e.y},mode:"idle",timer:0,aim:null}))}function zv(i,e){for(const t of i)Object.assign(t,{x:t.home.x,y:t.home.y,mode:"idle",timer:0,aim:null,leg:1,goal:null,lungeLeft:0,lungeRest:0});e.length=0}function Hv(i,e,t,n){for(const s of i){const r=t.x-s.x,o=t.y-s.y,a=Math.hypot(r,o);if(s.timer+=n,s.type==="SpicyChaser"){if(s.mode==="idle"&&a<It.detect?Object.assign(s,{mode:"chase",timer:0}):s.mode==="chase"&&s.timer>It.chaseTime?Object.assign(s,{mode:"cooldown",timer:0}):s.mode==="cooldown"&&s.timer>It.cooldown&&Object.assign(s,{mode:"idle",timer:0}),s.mode==="idle"&&s.patrol){s.leg??=1;const f=s.leg>0?{x:s.patrol.x1,y:s.patrol.y1}:{x:s.patrol.x0,y:s.patrol.y0};Math.hypot(f.x-s.x,f.y-s.y)<.05&&(s.leg=-s.leg),s.goal=s.leg>0?{x:s.patrol.x1,y:s.patrol.y1}:{x:s.patrol.x0,y:s.patrol.y0}}else if(s.mode==="chase"){const f=a<It.lungeRange*1.5?0:Math.min(It.lead,a/It.speed*.5);s.goal={x:t.x+t.vx*f,y:t.y+t.vy*f},(s.goal.x-s.x)*r+(s.goal.y-s.y)*o<0&&(s.goal=t),s.lungeLeft=Math.max(0,(s.lungeLeft??0)-n),s.lungeRest=Math.max(0,(s.lungeRest??0)-n),a<It.lungeRange&&!s.lungeLeft&&!s.lungeRest&&(s.lungeLeft=It.lungeTime,s.lungeRest=It.lungeRest)}else s.goal=s.home;const l=s.mode==="idle"?It.patrolSpeed:s.mode==="chase"&&s.lungeLeft>0?It.lunge:It.speed,c=s.goal.x-s.x,u=s.goal.y-s.y,h=Math.hypot(c,u);if(h>.001){const f=Math.min(h,l*n)/h;s.x+=c*f,s.y+=u*f}}else if(s.mode==="idle"&&a<Dt.range&&s.timer>Dt.period-Dt.charge)Object.assign(s,{mode:"charge",timer:0,aim:a>1e-6?{x:r/a,y:o/a}:{x:0,y:1}});else if(s.mode==="charge"&&s.timer>=Dt.charge){for(let l=0;l<Dt.shots;l++){const c=(l-(Dt.shots-1)/2)*Dt.spread,u=Math.cos(c),h=Math.sin(c),f=s.aim.x*u-s.aim.y*h,p=s.aim.x*h+s.aim.y*u;e.push({x:s.x,y:s.y,vx:f*Dt.shotSpeed,vy:p*Dt.shotSpeed,life:Dt.shotLife})}Object.assign(s,{mode:"idle",timer:0})}}for(const s of e)s.x+=s.vx*n,s.y+=s.vy*n,s.life-=n;for(let s=e.length-1;s>=0;s--)e[s].life<=0&&e.splice(s,1)}function wa(i,e,t,n,s,r){const o=i-n,a=e-s,l=Math.hypot(o,a),c=t+r-l;return c<=0?null:l>1e-9?{nx:o/l,ny:a/l,depth:c}:{nx:0,ny:1,depth:c}}function Gv(i,e,t,n,s,r,o){const a=Math.max(n-r,Math.min(i,n+r)),l=Math.max(s-o,Math.min(e,s+o)),c=i-a,u=e-l,h=Math.hypot(c,u);if(h>1e-9)return h<t?{nx:c/h,ny:u/h,depth:t-h}:null;const f=r-Math.abs(i-n),p=o-Math.abs(e-s);return f<p?{nx:Math.sign(i-n)||1,ny:0,depth:f+t}:{nx:0,ny:Math.sign(e-s)||1,depth:p+t}}function Ra(i,e,t,n,s){i.x+=e.nx*e.depth,i.y+=e.ny*e.depth;const r=i.vx*e.nx+i.vy*e.ny;r<0&&(i.vx-=(1+t)*r*e.nx,i.vy-=(1+t)*r*e.ny),i.vx+=e.nx*n,i.vy+=e.ny*n;const o=Math.sin(i.theta),a=Math.cos(i.theta);i.omega+=Math.sign(o*e.ny-a*e.nx||1)*s}function Vv(i){return{segments:[[{t:0,x:i.x,y:i.y,theta:i.theta}]],events:[]}}function Wv(i,e){const t=i.segments.at(-1),n=t.at(-1);(e.gameTime-n.t>=.1||Math.hypot(e.x-n.x,e.y-n.y)>=.5)&&t.push({t:e.gameTime,x:e.x,y:e.y,theta:e.theta})}function or(i,e,t,n={}){i.events.push({type:t,t:e.gameTime,x:e.x,y:e.y,...n})}function Xv(i,e){i.segments.push([{t:e.gameTime,x:e.x,y:e.y,theta:e.theta}])}function lf(i,e){const t=i.segments.at(-1),n=t.at(-1);(n.x!==e.x||n.y!==e.y)&&t.push({t:e.gameTime,x:e.x,y:e.y,theta:e.theta})}function Yv(i,e){const t=i.segments.flatMap((f,p)=>f.map(g=>({...g,s:p}))),n=t[0].t,s=t.at(-1).t,r=n+Math.max(0,Math.min(1,e))*(s-n);let o=0,a=t.length-1;for(;a-o>1;){const f=o+a>>1;t[f].t<=r?o=f:a=f}const l=t[o],c=t[a];if(l.s!==c.s||c.t===l.t||r<=l.t)return{x:l.x,y:l.y,theta:l.theta,t:r};const u=Math.min(1,(r-l.t)/(c.t-l.t)),h=Math.atan2(Math.sin(c.theta-l.theta),Math.cos(c.theta-l.theta));return{x:l.x+(c.x-l.x)*u,y:l.y+(c.y-l.y)*u,theta:l.theta+h*u,t:r}}function cf(i,e={muted:!1,volume:.7}){const t={...i,obstacles:[...i.obstacles,...nc(i)]},n=Uv(t.spawn);return n.state="TITLE",{world:t,ship:n,audio:e,enemies:kv(t.obstacles),projectiles:[],checkpointIndex:-1,readyLeft:0,pausedFrom:null,result:null,zoneIndex:-1,log:Vv(n),stats:{hits:0,maxFullHold:0},items:(t.items??[]).map(s=>({...s,taken:!1})),score:0,combo:0,bestCombo:0,near:{}}}const bo=i=>i==="PLAYING"||i==="RESPAWN",qv=i=>bo(i)||i==="READY";function jv(i){i.ship.state==="TITLE"&&(i.ship.state="READY",i.readyLeft=Ey)}function Kv(i){qv(i.ship.state)&&(i.pausedFrom=i.ship.state,i.ship.state="PAUSED")}function $v(i){i.ship.state==="PAUSED"&&(i.ship.state=i.pausedFrom)}function Zv(i){return i.ship.state!=="PAUSED"?[]:[uf(i,"restart")]}function uf(i,e){const{ship:t}=i;lf(i.log,t);const{x:n,y:s}=t.checkpoint;return Object.assign(t,{x:n,y:s,theta:0,vx:0,vy:0,omega:0,left:0,right:0,overLeft:0,overRight:0,effectiveLeft:0,effectiveRight:0,disruptedLeft:0,stunnedLeft:0,drunkLeft:0,hiccupAt:1/0,hitCooldown:0,shieldLeft:0,boostLeft:0,agonyLeft:0,state:"RESPAWN",invulnerableLeft:gy}),i.combo=0,i.near={},zv(i.enemies,i.projectiles),Xv(i.log,t),or(i.log,t,"respawn",{reason:e}),{type:"respawn",reason:e,checkpointId:i.world.checkpoints[i.checkpointIndex]?.id??"spawn",x:n,y:s}}function Jv(i){return i.ship.state!=="PAUSED"?[]:[hf(i,"quit")]}function hf(i,e){const{ship:t}=i;return lf(i.log,t),or(i.log,t,e==="hospital"?"hospital":"quit"),t.state="FINISHED",e==="hospital"&&(i.score+=Math.max(0,Math.round((300-t.gameTime)*10))),i.result={outcome:e,time:t.gameTime,distance:t.distance,overheats:t.overheats,hits:i.stats.hits,maxFullHold:i.stats.maxFullHold,score:i.score,bestCombo:i.bestCombo},{type:"finish",outcome:e,x:t.x,y:t.y}}function ff(i,e,t){const{ship:n}=i;if(n.state==="READY")return i.readyLeft-=t,i.readyLeft>0?[]:(Nv(n),[{type:"start",x:n.x,y:n.y}]);const s=Qv(i,e,t),{log:r,stats:o}=i;o.maxFullHold=Math.max(o.maxFullHold,n.overLeft,n.overRight);for(const c of s)c.type==="overheat"&&or(r,n,"overheat"),c.type==="hit"&&(o.hits++,or(r,n,`${c.kind}_hit`)),c.type==="checkpoint"&&or(r,n,"checkpoint",{id:c.id});const a=(i.world.zones??[]).findIndex(c=>n.y>=c.y0&&n.y<c.y1);bo(n.state)&&a>=0&&a!==i.zoneIndex&&(i.zoneIndex=a,s.push({type:"zone",id:i.world.zones[a].id,name:i.world.zones[a].name})),bo(n.state)&&Wv(r,n);const l=s.findIndex(c=>c.type==="hospital");return l>=0&&(s[l]=hf(i,"hospital")),s}function Qv(i,e,t){const{ship:n,world:s,enemies:r,projectiles:o}=i,a=[],l=Bv(n,e,t);if(l==="overheat"&&(a.push({type:"overheat",x:n.x,y:n.y}),Ca(i,Tn.overheat,a)),l==="hiccup"&&a.push({type:"hiccup",x:n.x,y:n.y}),!bo(n.state))return a;if(n.agonyLeft>0)return n.agonyLeft=Math.max(0,n.agonyLeft-t),n.agonyLeft===0&&a.push(uf(i,"agony")),a;const c=s.hospital;if(Math.hypot(n.x-c.x,n.y-c.y)<=c.radius)return a.push({type:"hospital"}),a;Hv(r,o,n,t),n.hitCooldown=Math.max(0,n.hitCooldown-t);const u=n.state==="RESPAWN"||n.hitCooldown>0||n.stunnedLeft>0,h=(m,d,v,y)=>{Ra(n,d,Ci,v,y),n.hitCooldown=Sy,!oh(i,m,a)&&(m==="alcohol"?(n.drunkLeft>0||(n.hiccupAt=n.gameTime+Pn.first),n.drunkLeft=Pn.time):n.stunnedLeft=Sl.time,a.push({type:"hit",kind:m,x:n.x,y:n.y,nx:d.nx,ny:d.ny}),ah(i),Ca(i,Tn[m],a))};for(const m of s.obstacles)if(m.type==="Building"){const d=Gv(n.x,n.y,ui,m.x,m.y,m.hx,m.hy);if(!d)continue;const v=-(n.vx*d.nx+n.vy*d.ny);u||v<Sl.minImpact?Ra(n,d,Ci,0,0):h("building",d,xa.building,ya.building)}else if(m.type==="OfficeChair"){const d=wa(n.x,n.y,ui,m.x,m.y,m.radius);d&&(lh(i,m.id),u?Ra(n,d,Ci,0,0):h("chair",d,xa.chair,ya.chair))}if(n.state!=="RESPAWN"){for(const m of r){if(m.type!=="SpicyChaser"||n.disruptedLeft>0)continue;const d=wa(n.x,n.y,ui,m.x,m.y,m.radius);d&&(lh(i,m.id),Object.assign(m,{mode:"cooldown",timer:0}),!oh(i,"spicy",a)&&(n.disruptedLeft=It.disrupt,a.push({type:"hit",kind:"spicy",x:n.x,y:n.y,nx:d.nx,ny:d.ny}),ah(i),Ca(i,Tn.spicy,a)))}for(let m=o.length-1;m>=0;m--){const d=o[m];if(!wa(n.x,n.y,ui,d.x,d.y,Dt.shotRadius)){const x=Math.hypot(n.x-d.x,n.y-d.y)-ui-Dt.shotRadius;x<Li.near+.3?d.close=!0:d.close&&!d.scored&&x>(d.lastD??1/0)&&(d.scored=!0,ch(i,Li.dodge_points,"dodge",a)),d.lastD=x;continue}if(o.splice(m,1),u)continue;const y=Math.hypot(d.vx,d.vy)||1;h("alcohol",{nx:d.vx/y,ny:d.vy/y,depth:0},xa.alcohol,ya.alcohol)}}s.checkpoints.forEach((m,d)=>{d>i.checkpointIndex&&Math.hypot(n.x-m.x,n.y-m.y)<=m.radius+by&&(i.checkpointIndex=d,n.checkpoint={x:m.x,y:m.y},a.push({type:"checkpoint",id:m.id,x:n.x,y:n.y}),n.pain=Math.max(0,n.pain-Tn.bed),i.score+=Li.checkpoint_points)});for(const m of i.items)m.taken||Math.hypot(n.x-m.x,n.y-m.y)>tr.radius+ui||(m.taken=!0,m.kind==="cushion"?n.shieldLeft=tr.cushion:m.kind==="ointment"?n.pain=Math.max(0,n.pain-tr.ointment):m.kind==="ice"?(Object.assign(n,{disruptedLeft:0,stunnedLeft:0,drunkLeft:0,overLeft:0,overRight:0}),n.left=Math.min(n.left,.5),n.right=Math.min(n.right,.5)):m.kind==="suppository"&&(n.boostLeft=tr.boost.time),i.score+=Li.pickup_points,a.push({type:"pickup",kind:m.kind,id:m.id,x:m.x,y:m.y}));const f=Math.hypot(n.vx,n.vy),p=[...s.obstacles.filter(m=>m.type==="OfficeChair"||m.type==="AlcoholTurret"),...r.filter(m=>m.type==="SpicyChaser")];for(const m of p){const d=Math.hypot(n.x-m.x,n.y-m.y)-ui-m.radius,v=i.near[m.id]??={in:!1,touched:!1};d<Li.near?v.in||Object.assign(v,{in:!0,touched:!1}):v.in&&(v.in=!1,!v.touched&&f>Li.minSpeed&&ch(i,Li.near_points,"near",a,m))}const g=s.bounds,_=ui;return n.x<g.minX+_&&(n.x=g.minX+_,n.vx=Math.abs(n.vx)*Ci),n.x>g.maxX-_&&(n.x=g.maxX-_,n.vx=-Math.abs(n.vx)*Ci),n.y<g.minY+_&&(n.y=g.minY+_,n.vy=Math.abs(n.vy)*Ci),n.y>g.maxY-_&&(n.y=g.maxY-_,n.vy=-Math.abs(n.vy)*Ci),a}function Ca(i,e,t){const{ship:n}=i;n.agonyLeft>0||(n.pain=Math.min(1,n.pain+e),n.pain>=1&&(n.stunnedLeft=Tn.agony+.1,n.agonyLeft=Tn.agony,n.pain=Tn.after,t.push({type:"agony",x:n.x,y:n.y})))}function oh(i,e,t){const{ship:n}=i;return n.shieldLeft>0?(n.shieldLeft=0,t.push({type:"block",kind:e,x:n.x,y:n.y}),!0):!1}function ah(i){i.combo=0}function lh(i,e){(i.near[e]??={in:!0,touched:!1}).touched=!0}function ch(i,e,t,n,s=null){const r=e*(i.combo+1);i.score+=r,i.combo++,i.bestCombo=Math.max(i.bestCombo,i.combo),n.push({type:"style",kind:t,combo:i.combo,points:r,x:i.ship.x,y:i.ship.y,id:s?.id})}const Qe="#1B2333",Tl="#26304A",pt="#FFF4DC",Dn="#4FD1B0",Kt="#FFD25A",bt="#FF6B5A",so="#F28AA5",eM="#7CC8F0",ar="rgba(255, 244, 220, 0.55)",df='Galmuri11, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',tt=(i,e,t,n)=>({x:Math.round(i),y:Math.round(e),w:Math.round(t),h:Math.round(n)}),us=(i,e,t)=>i&&e>=i.x&&e<i.x+i.w&&t>=i.y&&t<i.y+i.h,pf=()=>performance.now()/1e3,$s=typeof Image>"u"?null:Object.assign(new Image,{src:"./logo.webp"}),Al=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function An(i,e,t){const n=Math.min(t,e.w/2,e.h/2);i.beginPath(),i.moveTo(e.x+n,e.y),i.arcTo(e.x+e.w,e.y,e.x+e.w,e.y+e.h,n),i.arcTo(e.x+e.w,e.y+e.h,e.x,e.y+e.h,n),i.arcTo(e.x,e.y+e.h,e.x,e.y,n),i.arcTo(e.x,e.y,e.x+e.w,e.y,n),i.closePath()}function At(i,e,t,n,{line:s=Qe,rad:r=8,shadow:o=!0,lw:a=2}={}){o&&(i.fillStyle="rgba(10, 14, 24, 0.45)",An(i,{...t,y:t.y+3*e},r*e),i.fill()),An(i,t,r*e),n&&(i.fillStyle=n,i.fill()),s&&(i.strokeStyle=s,i.lineWidth=a*e,i.stroke())}function Ze(i,e,t,n,s,{size:r=12,color:o=pt,outline:a=Qe,align:l="center",shadow:c=null}={}){i.font=`${Math.round(r*e)}px ${df}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",c&&(i.fillStyle=c,i.fillText(t,n,s+Math.max(2,r*.12)*e)),a&&(i.strokeStyle=a,i.lineWidth=Math.max(2,r*.25)*e,i.strokeText(t,n,s)),i.fillStyle=o,i.fillText(t,n,s)}const wl=(i,e,t,n)=>(i.font=`${Math.round(n*e)}px ${df}`,i.measureText(t).width),Un={pause(i,e,t,n,s){i.fillStyle=s,i.fillRect(e-n*.6,t-n*.7,n*.42,n*1.4),i.fillRect(e+n*.18,t-n*.7,n*.42,n*1.4)},play(i,e,t,n,s){i.fillStyle=s,i.beginPath(),i.moveTo(e-n*.5,t-n*.7),i.lineTo(e+n*.7,t),i.lineTo(e-n*.5,t+n*.7),i.closePath(),i.fill()},retry(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=n*.3,i.beginPath(),i.arc(e,t,n*.6,-.4,Math.PI*1.45),i.stroke(),i.fillStyle=s,i.beginPath(),i.moveTo(e+n*.95,t-n*.55),i.lineTo(e+n*.25,t-n*.55),i.lineTo(e+n*.6,t+n*.05),i.closePath(),i.fill()},cross(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=n*.32,i.lineCap="round",i.beginPath(),i.moveTo(e-n*.55,t-n*.55),i.lineTo(e+n*.55,t+n*.55),i.moveTo(e+n*.55,t-n*.55),i.lineTo(e-n*.55,t+n*.55),i.stroke(),i.lineCap="butt"},speaker(i,e,t,n,s,r){i.fillStyle=s,i.beginPath(),i.moveTo(e-n*.8,t-n*.3),i.lineTo(e-n*.4,t-n*.3),i.lineTo(e+n*.1,t-n*.75),i.lineTo(e+n*.1,t+n*.75),i.lineTo(e-n*.4,t+n*.3),i.lineTo(e-n*.8,t+n*.3),i.closePath(),i.fill(),r?Un.cross(i,e+n*.6,t,n*.55,bt):(i.strokeStyle=s,i.lineWidth=n*.18,i.beginPath(),i.arc(e+n*.15,t,n*.45,-.9,.9),i.stroke(),i.beginPath(),i.arc(e+n*.15,t,n*.8,-.8,.8),i.stroke())},lock(i,e,t,n,s){i.fillStyle=s,i.fillRect(e-n*.6,t-n*.1,n*1.2,n*.85),i.strokeStyle=s,i.lineWidth=n*.25,i.beginPath(),i.arc(e,t-n*.15,n*.4,Math.PI,0),i.stroke()},hospital(i,e,t,n){i.fillStyle=pt,i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fill(),i.strokeStyle=Qe,i.lineWidth=n*.22,i.stroke(),i.fillStyle=bt,i.fillRect(e-n*.18,t-n*.6,n*.36,n*1.2),i.fillRect(e-n*.6,t-n*.18,n*1.2,n*.36)},frog(i,e,t,n){i.fillStyle="#7BC67E",i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fill(),i.strokeStyle=Qe,i.lineWidth=n*.28,i.stroke();for(const s of[-1,1])i.fillStyle=pt,i.beginPath(),i.arc(e+s*n*.42,t-n*.3,n*.3,0,Math.PI*2),i.fill(),i.fillStyle=Qe,i.fillRect(e+s*n*.42-n*.1,t-n*.4,n*.2,n*.2)}};function uh(i,e,t,n,s){const r=i.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.hypot(e,t)/2);r.addColorStop(0,`rgba(${n}, 0)`),r.addColorStop(1,`rgba(${n}, ${s})`),i.fillStyle=r,i.fillRect(0,0,e,t)}function mf(i,e,t,n,s){let r=i.createLinearGradient(0,0,0,n);r.addColorStop(0,"rgba(15, 20, 32, 0.55)"),r.addColorStop(1,"rgba(15, 20, 32, 0)"),i.fillStyle=r,i.fillRect(0,0,e,n),r=i.createLinearGradient(0,t-s,0,t),r.addColorStop(0,"rgba(15, 20, 32, 0)"),r.addColorStop(1,"rgba(15, 20, 32, 0.6)"),i.fillStyle=r,i.fillRect(0,t-s,e,s)}function tM(i,e,t,n,s=null,r=null,o=!1,a=null,l={left:!1,right:!1},c=null){const u=e/360,{ship:h,world:f}=n;if(o)return i.fillStyle="rgba(255, 244, 220, 0.85)",i.fillRect(0,0,e,t),{};mf(i,e,t,70*u,110*u);const p=n.fx?.vignette,g=p?p.until-h.gameTime:0;g>0?uh(i,e,t,"255, 90, 60",Math.min(1,g/.25)*.75):h.drunkLeft>0&&uh(i,e,t,"242, 138, 165",.35+.1*Math.sin(h.gameTime*3));const _=tt(8*u,8*u,32*u,32*u);At(i,u,_,pt),Un.pause(i,_.x+_.w/2,_.y+_.h/2,9*u,Qe);const m=f.spawn.y,d=f.hospital.y,v=U=>Math.max(0,Math.min(1,(U-m)/(d-m))),y=tt(50*u,17*u,270*u,14*u);At(i,u,y,"rgba(27, 35, 51, 0.75)",{rad:7});const x=v(h.y);x>.01&&(An(i,tt(y.x+2*u,y.y+2*u,(y.w-4*u)*x,y.h-4*u),5*u),i.fillStyle=Dn,i.fill()),f.checkpoints.forEach((U,B)=>{const N=y.x+y.w*v(U.y),W=y.y+y.h/2,I=B<=n.checkpointIndex,D=4.5*u;i.fillStyle=I?pt:Kt,i.strokeStyle=Qe,i.lineWidth=1.5*u,i.beginPath(),i.moveTo(N,W-D),i.lineTo(N+D,W),i.lineTo(N,W+D),i.lineTo(N-D,W),i.closePath(),i.fill(),i.stroke()}),Un.hospital(i,y.x+y.w+12*u,y.y+y.h/2,11*u),Un.frog(i,y.x+y.w*x,y.y+y.h/2,8*u),Ze(i,u,Al(h.gameTime),y.x+2*u,y.y+y.h+13*u,{align:"left",color:pt}),Ze(i,u,`${(n.score??0).toLocaleString()}점`,y.x+52*u,y.y+y.h+13*u,{align:"left",color:Kt});const b=h.pain??0,T=tt(196*u,38*u,120*u,12*u),R=b>.7?1+.15*Math.sin(h.gameTime*12):1;if(Ze(i,u,"통증",T.x-6*u,T.y+T.h/2,{align:"right",color:b>.7?bt:pt}),At(i,u,T,"rgba(27, 35, 51, 0.8)",{rad:6,shadow:!1,lw:1.5}),b>.01&&(An(i,tt(T.x+2*u,T.y+2*u,(T.w-4*u)*b,T.h-4*u),4*u),i.fillStyle=b>.7?bt:b>.4?"#FF9F8F":so,i.globalAlpha=Math.min(1,R),i.fill(),i.globalAlpha=1),[[h.shieldLeft,"방석",so],[h.boostLeft,"부스터",Kt]].filter(([U])=>U>0).forEach(([U,B,N],W)=>{const I=tt(T.x+W*62*u,T.y+16*u,58*u,16*u);At(i,u,I,"rgba(27, 35, 51, 0.85)",{line:N,rad:8,shadow:!1,lw:1.5}),Ze(i,u,`${B} ${Math.ceil(U)}`,I.x+I.w/2,I.y+I.h/2,{color:N,outline:null})}),(n.combo??0)>=2){const U=h.gameTime-(n.lastStyleAt??-9),B=U<.15?1.35-U*2.3:1;i.save(),i.translate(e-60*u,132*u),i.rotate(.06),i.scale(B,B),Ze(i,u,`콤보 x${n.combo}`,0,0,{size:24,color:Kt,shadow:bt}),i.restore()}const{distance:S}=Lv(n);if(c){const U=c.kind==="checkpoint"?Kt:bt,B=h.gameTime,N={x0:22*u,y0:64*u,x1:e-22*u,y1:t-104*u};if(c.visible&&c.x>N.x0&&c.x<N.x1&&c.y>N.y0&&c.y<N.y1){const I=c.y-(46+Math.abs(Math.sin(B*5))*8)*u;i.fillStyle=U,i.strokeStyle=Qe,i.lineWidth=2*u,i.beginPath(),i.moveTo(c.x-10*u,I-8*u),i.lineTo(c.x+10*u,I-8*u),i.lineTo(c.x,I+6*u),i.closePath(),i.fill(),i.stroke(),Ze(i,u,c.kind==="checkpoint"?"여기서 쉬기!":"병원!",c.x,I-20*u,{color:U})}else{const I=e/2,D=t*.58,G=c.x-I,H=c.y-D,ce=Math.min(G>0?(N.x1-I)/G:G<0?(N.x0-I)/G:1/0,H>0?(N.y1-D)/H:H<0?(N.y0-D)/H:1/0),le=I+G*ce,j=D+H*ce,ee=Math.atan2(H,G),q=1+.12*Math.sin(B*6);i.save(),i.translate(le,j),i.rotate(ee),i.scale(q,q),i.fillStyle=U,i.strokeStyle=Qe,i.lineWidth=2*u,i.beginPath(),i.moveTo(14*u,0),i.lineTo(-6*u,-11*u),i.lineTo(-2*u,0),i.lineTo(-6*u,11*u),i.closePath(),i.fill(),i.stroke(),i.restore(),Ze(i,u,`${Math.round(S)}m`,le-Math.cos(ee)*26*u,j-Math.sin(ee)*18*u,{color:U})}}if(h.agonyLeft>0){const U=Math.sin(h.gameTime*60)*3*u;Ze(i,u,"으아악!!",e/2+U,230*u,{size:48,color:bt,shadow:Qe}),Ze(i,u,"엉덩이가 터질 것 같아… 침대로 후송!",e/2,270*u,{color:pt})}if(s){const U=Math.min(1,s.left/.25,(1-s.left)/.15+.2);i.globalAlpha=Math.max(0,Math.min(1,U));const B=150*u,N=Math.max(160*u,wl(i,u,s.name,24)+60*u);At(i,u,tt(e/2-N/2,B-26*u,N,52*u),"rgba(27, 35, 51, 0.88)",{line:Kt,rad:12}),s.count&&Ze(i,u,`구역 ${s.index+1} / ${s.count}`,e/2,B-12*u,{color:Kt}),Ze(i,u,s.name,e/2,B+9*u,{size:24}),i.globalAlpha=1}if(r){const U={danger:bt,good:Dn,info:"rgba(27, 35, 51, 0.88)"}[r.tone]??Qe,B=r.tone==="good"?Qe:pt,N=r.tone==="good"?null:Qe,W=wl(i,u,r.text,12)+32*u,I=tt(e/2-W/2,92*u,W,28*u);At(i,u,I,U,{rad:14}),Ze(i,u,r.text,e/2,I.y+I.h/2,{color:B,outline:N})}if(a){const U=Math.max(0,.5-(a.left??.5)),B=U<.08?.6+5*U:1;i.save(),i.translate(a.x,a.y-34*u),i.rotate(-.08),i.scale(B,B),Ze(i,u,a.text,0,0,{size:24,color:Kt,shadow:bt}),i.restore()}const M=Mr(h)!==null,A=!M&&h.drunkLeft>0,z=h.disruptedLeft>0?Math.round(Math.sin(h.gameTime*50)*3*u):0,k=Math.floor(h.gameTime*8)%2===0;for(const[U,B,N,W]of[["left",10,"왼쪽",-1],["right",186,"오른쪽",1]]){const I=l[U]&&!M,D=h[U],G=h[U==="left"?"overLeft":"overRight"]>0,H=tt(B*u+z,t-(I?74:72)*u,164*u,62*u);At(i,u,H,I?Dn:"rgba(27, 35, 51, 0.72)",{line:M?bt:A?so:I?Qe:"rgba(255, 244, 220, 0.7)",rad:12,lw:M||A?3:2});const ce=H.x+H.w/2,le=H.y+19*u,j=N,ee=I?Qe:A?so:pt;if(M)Un.lock(i,H.x+18*u,le,8*u,bt);else{i.fillStyle=ee;const ne=H.x+(W<0?18:H.w-18)*u;i.beginPath(),i.moveTo(ne+W*6*u,le),i.lineTo(ne-W*4*u,le-6*u),i.lineTo(ne-W*4*u,le+6*u),i.closePath(),i.fill()}Ze(i,u,j,ce,le,{color:ee,outline:I?null:Qe});const q=tt(H.x+12*u,H.y+36*u,H.w-24*u,14*u);An(i,q,7*u),i.fillStyle=I?"rgba(27, 35, 51, 0.35)":"rgba(10, 14, 24, 0.6)",i.fill(),D>.01&&(An(i,tt(q.x+2*u,q.y+2*u,(q.w-4*u)*D,q.h-4*u),5*u),i.fillStyle=G?k?bt:pt:D>=.8?Kt:I?pt:Dn,i.fill())}return{pause:_}}function nM(i,e,t){const n=e/360,s=pf();i.fillStyle="rgba(15, 20, 32, 0.35)",i.fillRect(0,0,e,t),mf(i,e,t,260*n,240*n);const r=Math.sin(s*2)*4*n;if($s?.complete&&$s.naturalWidth){const c=320*n,u=c*$s.naturalHeight/$s.naturalWidth;i.imageSmoothingEnabled=!0,i.drawImage($s,e/2-c/2,165*n-u/2+r,c,u)}else Ze(i,n,"치루켓",e/2,170*n+r,{size:48,color:pt,shadow:bt});Ze(i,n,"엉덩이 로켓 타고 병원까지!",e/2,292*n,{color:Kt});const o=1+Math.sin(s*4)*.035,a=196*n*o,l=48*n*o;At(i,n,tt(e/2-a/2,430*n-l/2,a,l),Dn,{rad:24}),Ze(i,n,"탭해서 출발",e/2,430*n,{size:24,color:Qe,outline:null});for(const[c,u,h]of[["A","왼쪽 엉덩이",110],["D","오른쪽 엉덩이",250]])At(i,n,tt((h-16)*n,498*n,32*n,32*n),pt,{rad:6}),Ze(i,n,c,h*n,514*n,{color:Qe,outline:null}),Ze(i,n,u,h*n,548*n,{color:pt});return Ze(i,n,"양쪽 = 전진 · 한쪽 = 회전 · 화면 아래 좌/우 터치",e/2,580*n,{color:ar,outline:null}),{start:tt(0,0,e,t)}}function iM(i,e,t,n){const s=e/360,r=Math.ceil(n.readyLeft),o=n.readyLeft-Math.floor(n.readyLeft),a=n.world.zones?.[0]?.name??"",l=wl(i,s,`${a}에서 출발!`,12)+40*s;At(i,s,tt(e/2-l/2,150*s,l,30*s),"rgba(27, 35, 51, 0.88)",{line:Kt,rad:15}),Ze(i,s,`${a}에서 출발!`,e/2,165*s,{color:Kt});const c=1+Math.max(0,o-.7)*2;return i.save(),i.translate(e/2,236*s),i.scale(c,c),Ze(i,s,String(Math.max(1,r)),0,0,{size:72,color:pt,shadow:bt}),i.restore(),{}}function sM(i,e,t,n){const s=e/360;i.fillStyle="rgba(15, 20, 32, 0.62)",i.fillRect(0,0,e,t);const r=tt(36*s,140*s,288*s,340*s);At(i,s,r,Qe,{line:pt,rad:16,lw:2.5}),At(i,s,tt(r.x+54*s,r.y-18*s,180*s,36*s),Kt,{rad:18}),Ze(i,s,"일시정지",e/2,r.y,{size:24,color:Qe,outline:null});const o=236*s,a=46*s,l=e/2-o/2,c={resume:tt(l,r.y+40*s,o,a),restart:tt(l,r.y+98*s,o,a),quit:tt(l,r.y+156*s,o,a)},u=(d,v,y,x,b)=>{At(i,s,d,v,{rad:12}),Un[y](i,d.x+26*s,d.y+d.h/2,9*s,b),Ze(i,s,x,d.x+d.w/2+12*s,d.y+d.h/2,{size:24,color:b,outline:null})};u(c.resume,Dn,"play","계속하기",Qe),u(c.restart,pt,"retry","체크포인트로",Qe),u(c.quit,bt,"cross","그만하기",pt);const h=r.y+232*s,f=44*s,p=n.audio.muted?0:n.audio.volume;Ze(i,s,"소리",r.x+24*s,h-14*s,{align:"left",color:ar,outline:null}),Ze(i,s,`${Math.round(p*100)}%`,r.x+r.w-24*s,h-14*s,{align:"right",color:ar,outline:null}),c.mute=tt(l,h,52*s,f),At(i,s,c.mute,n.audio.muted?Tl:pt,{rad:10,line:n.audio.muted?bt:Qe}),Un.speaker(i,c.mute.x+c.mute.w/2,h+f/2,10*s,n.audio.muted?bt:Qe,n.audio.muted);const g=tt(l+72*s,h+f/2-6*s,o-84*s,12*s);c.volume={...tt(g.x-12*s,h-4*s,g.w+24*s,f+8*s),track:g},An(i,g,6*s),i.fillStyle=Tl,i.fill(),i.strokeStyle="rgba(255, 244, 220, 0.5)",i.lineWidth=1.5*s,i.stroke(),p>.01&&(An(i,tt(g.x,g.y,g.w*p,g.h),6*s),i.fillStyle=Dn,i.fill());const _=g.x+g.w*p,m=g.y+g.h/2;return i.fillStyle="rgba(10, 14, 24, 0.45)",i.beginPath(),i.arc(_,m+3*s,13*s,0,Math.PI*2),i.fill(),i.fillStyle=pt,i.beginPath(),i.arc(_,m,13*s,0,Math.PI*2),i.fill(),i.strokeStyle=Qe,i.lineWidth=2*s,i.stroke(),Ze(i,s,"Esc 계속 · R 다시 · Q 그만 · ←→ 소리",e/2,r.y+r.h-18*s,{color:ar,outline:null}),c}function rM(i){if(i.outcome!=="hospital")return null;const e=i.time+i.hits*3+i.overheats*5;return e<170?"S":e<230?"A":e<320?"B":"C"}function oM(i,e,t,n){const s=e/360,{result:r,log:o,world:a}=n;i.fillStyle="rgba(15, 20, 32, 0.9)",i.fillRect(0,0,e,t);const l=r.outcome==="hospital",c=rM(r);if(At(i,s,tt(48*s,22*s,220*s,44*s),l?Dn:bt,{rad:22}),Ze(i,s,l?"병원 도착!":"중도 포기",158*s,44*s,{size:24,color:l?Qe:pt,outline:l?null:Qe}),c){const I=304*s,D=44*s;i.fillStyle="rgba(10, 14, 24, 0.45)",i.beginPath(),i.arc(I,D+3*s,28*s,0,Math.PI*2),i.fill(),i.fillStyle={S:Kt,A:Dn,B:eM,C:pt}[c],i.beginPath(),i.arc(I,D,28*s,0,Math.PI*2),i.fill(),i.strokeStyle=Qe,i.lineWidth=2.5*s,i.stroke(),Ze(i,s,c,I,D+1*s,{size:36,color:Qe,outline:null})}const u=o.events.filter(I=>I.type==="checkpoint").length;[["점수",(r.score??0).toLocaleString()],["시간",Al(r.time)],["최고 콤보",`x${r.bestCombo??0}`],["체크포인트",`${u} / ${a.checkpoints.length}`],["충돌",String(r.hits)],["과열",String(r.overheats)]].forEach(([I,D],G)=>{const H=tt((14+G%3*112)*s,(82+Math.floor(G/3)*58)*s,108*s,52*s);At(i,s,H,Tl,{line:"rgba(255, 244, 220, 0.35)",rad:10,shadow:!1}),Ze(i,s,I,H.x+H.w/2,H.y+12*s,{color:ar,outline:null}),Ze(i,s,D,H.x+H.w/2,H.y+35*s,{size:24,color:pt,outline:null})});const f=a.bounds,p=tt(14*s,204*s,332*s,346*s),g=pf();n.replayStart??=g;const _=Math.max(.1,o.segments.at(-1).at(-1).t-o.segments[0][0].t),m=Math.min(14,Math.max(6,_/15)),v=(g-n.replayStart)%(m+1.5),y=Math.min(1,v/m),x=Yv(o,y),b=p.w/(f.maxX-f.minX),T=p.h/b,R=Math.max(f.minY+T/2,Math.min(f.maxY-T/2,x.y)),L=(I,D)=>[p.x+(I-f.minX)*b,p.y+p.h/2-(D-R)*b];At(i,s,p,"#202A3E",{line:pt,rad:12}),i.save(),An(i,p,12*s),i.clip();const S=(I,D,G,H,ce)=>{const[le,j]=L(I,H),[ee,q]=L(G,D);i.fillStyle=ce,i.fillRect(le,j,ee-le,q-j)};for(const I of a.roads??[])S(I.x0,I.y0,I.x1,I.y1,"rgba(255, 244, 220, 0.10)");for(const I of a.obstacles.filter(D=>D.type==="Building"))S(I.x-I.hx,I.y-I.hy,I.x+I.hx,I.y+I.hy,"rgba(255, 244, 220, 0.5)");i.lineWidth=2*s,i.lineJoin="round",i.strokeStyle="rgba(79, 209, 176, 0.3)";for(const I of o.segments)i.beginPath(),I.forEach((D,G)=>i[G?"lineTo":"moveTo"](...L(D.x,D.y))),i.stroke();i.strokeStyle="rgba(61, 220, 132, 0.9)",i.lineWidth=2.5*s;for(const I of o.segments){const D=I.filter(G=>G.t<=x.t&&G.t>=x.t-3);D.length&&(x.t-D.at(-1).t<.3&&D.push(x),i.beginPath(),D.forEach((G,H)=>i[H?"lineTo":"moveTo"](...L(G.x,G.y))),i.stroke())}const M=(I,D,G,H,ce)=>{const[le,j]=L(I,D);i.beginPath(),i.arc(le,j,G,0,Math.PI*2),H&&(i.fillStyle=H,i.fill()),ce&&(i.strokeStyle=ce,i.lineWidth=2*s,i.stroke())},A=new Set(o.events.filter(I=>I.type==="checkpoint"&&I.t<=x.t).map(I=>I.id));for(const I of a.checkpoints){const D=A.has(I.id);M(I.x,I.y,I.radius*b,D?"rgba(127, 224, 192, 0.35)":"rgba(255, 210, 90, 0.25)",D?"#7FE0C0":Kt)}{const[I,D]=L(a.hospital.x,a.hospital.y);Un.hospital(i,I,D,Math.max(8*s,a.hospital.radius*b*.7))}const z=.4*_/m;for(const I of o.events){if(!(I.type==="overheat"||I.type.endsWith("_hit"))||I.t>x.t)continue;const D=x.t-I.t;D<z?M(I.x,I.y,(4+10*D/z)*s,null,bt):M(I.x,I.y,2.5*s,bt)}const[k,U]=L(x.x,x.y),B=7*s;i.translate(k,U),i.rotate(x.theta),i.beginPath(),i.moveTo(0,-B*1.3),i.lineTo(B*.85,B*.8),i.lineTo(-B*.85,B*.8),i.closePath(),i.fillStyle="#3DDC84",i.fill(),i.strokeStyle=Qe,i.lineWidth=1.5*s,i.stroke(),i.restore();const N=tt(p.x+10*s,p.y+p.h-16*s,p.w-20*s,6*s);An(i,N,3*s),i.fillStyle="rgba(255, 244, 220, 0.2)",i.fill(),An(i,tt(N.x,N.y,N.w*y,N.h),3*s),i.fillStyle="#3DDC84",i.fill(),At(i,s,tt(p.x+p.w-70*s,p.y+8*s,62*s,24*s),"rgba(27, 35, 51, 0.85)",{line:null,rad:12,shadow:!1}),Un.play(i,p.x+p.w-56*s,p.y+20*s,6*s,"#3DDC84"),Ze(i,s,Al(x.t),p.x+p.w-16*s,p.y+20*s,{align:"right",outline:null});const W=tt(e/2-100*s,566*s,200*s,50*s);return At(i,s,W,Dn,{rad:25}),Un.retry(i,W.x+30*s,W.y+W.h/2,10*s,Qe),Ze(i,s,"다시 하기",e/2+12*s,W.y+W.h/2,{size:24,color:Qe,outline:null}),{again:W}}function aM(i=()=>{const e=globalThis.AudioContext??globalThis.webkitAudioContext;return e?new e:null}){let e=null,t=null,n=[],s=null;const r=new Set;function o(){if(t){t.gain.cancelScheduledValues(e.currentTime),t.gain.setValueAtTime(0,e.currentTime);for(const u of r)u.stop(e.currentTime);r.clear()}}function a(){try{if(!e){if(e=i(),!e)return;t=e.createGain(),t.gain.value=0,t.connect(e.destination);const u=e.createBuffer(1,e.sampleRate,e.sampleRate),h=u.getChannelData(0);for(let f=0;f<h.length;f++)h[f]=Math.random()*2-1;n=[-.3,.3].map(f=>{const p=e.createBufferSource(),g=e.createBiquadFilter(),_=e.createGain(),m=e.createOscillator(),d=e.createGain(),v=e.createStereoPanner();return p.buffer=u,p.loop=!0,g.type="bandpass",g.Q.value=.7,_.gain.value=0,d.gain.value=0,m.type="triangle",v.pan.value=f,p.connect(g).connect(_).connect(v),m.connect(d).connect(v),v.connect(t),p.start(),m.start(),{filter:g,gain:_,tone:m,toneGain:d}})}(e.state==="suspended"||e.state==="interrupted")&&e.resume().catch(()=>{})}catch{e&&e.close().catch(()=>{}),e=t=null,n=[],r.clear()}}function l(u,h,f,p,g,_="triangle"){if(r.size>=12)return;const m=e.currentTime+f,d=e.createOscillator(),v=e.createGain();d.type=_,d.frequency.setValueAtTime(u,m),d.frequency.exponentialRampToValueAtTime(h,m+p),v.gain.setValueAtTime(0,m),v.gain.linearRampToValueAtTime(g,m+.008),v.gain.exponentialRampToValueAtTime(1e-4,m+p),d.connect(v).connect(t),r.add(d),d.onended=()=>{r.delete(d),d.disconnect(),v.disconnect()},d.start(m),d.stop(m+p)}function c(u,h,f,p=[],g=!0){if(!t)return;(u!==s||p.some(d=>d.type==="respawn"))&&o(),s=u;const _=u.state==="PLAYING"||u.state==="RESPAWN";if(!g||!_||f.muted){o();return}const m=e.currentTime;t.gain.setTargetAtTime(.65*Math.max(0,Math.min(1,f.volume)),m,.025);for(const[d,v]of["L","R"].entries()){const y=Math.max(0,Math.min(1,h[v].effective)),x=n[d],T=1+(u.disruptedLeft>0?.25:.05)*Math.sin(u.gameTime*28+d*2.1);x.filter.frequency.setTargetAtTime(350+y*1100,m,.035),x.gain.gain.setTargetAtTime(y*.15*T,m,.035),x.tone.frequency.setTargetAtTime(65+y*85*T,m,.035),x.toneGain.gain.setTargetAtTime(y*.035,m,.035)}if(e.state==="running"){for(const d of p.slice(-4))if(d.type==="hiccup"&&l(420,980,0,.13,.17,"square"),d.type==="agony"&&(l(880,220,0,.6,.22,"sawtooth"),l(660,180,.05,.55,.12,"square")),d.type==="checkpoint")[523.25,659.25,783.99].forEach((v,y)=>l(v,v,y*.09,.19,.16));else if(d.type==="hit"){const v={chair:210,building:115,alcohol:420,spicy:630}[d.kind];l(v,v*(d.kind==="spicy"?1.6:.3),0,.16,.2,d.kind==="alcohol"?"sine":"triangle")}}}return{unlock:a,update:c,silence:o}}const xi=document.querySelector("#game"),sc=document.querySelector("#game-frame"),$n=document.querySelector("#loading");document.fonts?.load("12px Galmuri11").catch(()=>{});let ro=10;const gf=i=>{!$n?.isConnected||$n.dataset.failed||(ro=Math.max(ro,Math.min(99,Math.round(i))),$n.querySelector("p").textContent=`로딩 중… ${ro}%`,$n.querySelector(".loading-bar i").style.width=`${ro}%`)};gf(10);jl.onProgress=(i,e,t)=>gf(10+89*e/t);jl.onLoad=()=>{$n?.isConnected&&!$n.dataset.failed&&($n.querySelector("p").textContent="도시 짓는 중… 99%")};for(const i of["contextmenu","selectstart","dragstart"])sc.addEventListener(i,e=>e.preventDefault());const Sr=aM();sc.addEventListener("pointerdown",i=>{i.isTrusted&&Sr.unlock()},{capture:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&Sr.silence()});window.addEventListener("pagehide",()=>Sr.silence());const Cn=new URLSearchParams(location.search),La=Cn.has("debug");let yi=Do[Cn.get("res")]?Cn.get("res"):yy,Rs=ec.includes(+Cn.get("angle"))?+Cn.get("angle"):_y,lr=Uo.includes(+Cn.get("zoom"))?+Cn.get("zoom"):vy;const _f=()=>Cn.has("seed")?+Cn.get("seed"):Math.floor(Math.random()*2**31);let _s=rf(_f(),Zh);const Yi=await Dv(xi,_s);let mo=["pixel","soft","clean","color"].includes(Cn.get("style"))?Cn.get("style"):xy;const Gi=(i,e,t=lr,n=mo)=>{yi=String(i),Rs=e,lr=t,mo=n,Yi.setView(yi,Rs,lr,mo)};Gi(yi,Rs,lr,mo);let Ue=cf(_s);const Cs={left:new Set,right:new Set},Ls={left:!1,right:!1},zi=()=>{Cs.left.clear(),Cs.right.clear(),Ls.left=Ls.right=!1},rc=()=>({left:Ls.left||Cs.left.size>0,right:Ls.right||Cs.right.size>0});let Vi=[],cr=[],ur=null,Ht={},ki=null,Hi={},Eo=0,un=null;const Tt={start:()=>jv(Ue),pause:()=>{Kv(Ue),zi()},resume:()=>$v(Ue),restart:()=>{Vi.push(...Zv(Ue)),Hi={},un=null,Eo=0,zi()},quit:()=>{Vi.push(...Jv(Ue)),zi()},newGame:async()=>{_s=rf(_f(),Zh),await Yi.setWorld(_s),Ue=cf(_s,Ue.audio),ki=null,Hi={},un=null,Eo=0,Vi=[],cr=[],zi()},setMuted:i=>{Ue.audio.muted=i},setVolume:i=>{Ue.audio.volume=Math.max(0,Math.min(1,i)),Ue.audio.volume>0&&(Ue.audio.muted=!1)}};for(const i of["left","right"]){const e=document.querySelector(`#${i}`);e.addEventListener("pointerdown",t=>{t.preventDefault(),e.setPointerCapture(t.pointerId),Cs[i].add(t.pointerId)});for(const t of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(t,n=>Cs[i].delete(n.pointerId))}let To=null;xi.addEventListener("pointermove",i=>{if(i.pointerId!==To||!Ht.volume)return;const e=xi.getBoundingClientRect(),t=(i.clientX-e.left)/e.width*Yi.size[0];Tt.setVolume((t-Ht.volume.track.x)/Ht.volume.track.w)});for(const i of["pointerup","pointercancel"])xi.addEventListener(i,e=>{e.pointerId===To&&(To=null)});xi.addEventListener("pointerdown",i=>{const e=xi.getBoundingClientRect(),[t,n]=Yi.size,s=(i.clientX-e.left)/e.width*t,r=(i.clientY-e.top)/e.height*n,o=Ue.ship.state;if(o==="TITLE"&&us(Ht.start,s,r))Tt.start();else if(o==="PAUSED"){for(const a of["resume","restart","quit"])us(Ht[a],s,r)&&Tt[a]();if(us(Ht.mute,s,r)&&Tt.setMuted(!Ue.audio.muted),us(Ht.volume,s,r)){try{xi.setPointerCapture(i.pointerId)}catch{}To=i.pointerId,Tt.setVolume((s-Ht.volume.track.x)/Ht.volume.track.w)}}else o==="FINISHED"&&us(Ht.again,s,r)?Tt.newGame():us(Ht.pause,s,r)&&Tt.pause()});window.addEventListener("keydown",i=>{i.isTrusted&&!i.repeat&&Sr.unlock();const e=i.key.toLowerCase(),t=Ue.ship.state;(e==="a"||e==="d")&&!i.repeat&&(i.preventDefault(),Ls[e==="a"?"left":"right"]=!0,t==="TITLE"&&Tt.start()),e==="escape"&&(t==="PAUSED"?Tt.resume():Tt.pause()),(e==="enter"||e===" ")&&(t==="TITLE"?Tt.start():t==="PAUSED"?Tt.resume():t==="FINISHED"&&Tt.newGame()),t==="PAUSED"&&e==="r"&&Tt.restart(),t==="PAUSED"&&e==="q"&&Tt.quit(),t==="PAUSED"&&(e==="arrowleft"||e==="arrowright")&&Tt.setVolume(Ue.audio.volume+(e==="arrowleft"?-.1:.1)),La&&"123".includes(e)&&Gi(yi,ec[+e-1]),La&&"456".includes(e)&&Gi(Object.keys(Do)[+e-4],Rs),La&&"789".includes(e)&&Gi(yi,Rs,Uo[+e-7])});window.addEventListener("keyup",i=>{const e=i.key.toLowerCase();(e==="a"||e==="d")&&(Ls[e==="a"?"left":"right"]=!1)});window.addEventListener("blur",()=>{Tt.pause(),zi()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Tt.pause(),zi())});function xf(i,e,t){const n=Ue.ship.state;if(n==="TITLE")Ht=nM(i,e,t);else if(n==="FINISHED")Ht=oM(i,e,t,Ue);else{const s=Mr(Ue.ship),r=Ue.ship.gameTime,o=n!=="PAUSED"&&s!=="runaway"&&un&&r<un.until&&ur?{text:un.text,left:un.until-r,...ur.head}:null,a=o?null:Cv(Ue,Hi),l=Ue.world.zones??[],c=!s&&!o&&!a&&ki&&r<ki.until?{name:ki.name,index:l.findIndex(u=>u.name===ki.name),count:l.length,left:ki.until-r}:null;Ht=tM(i,e,t,Ue,c,a,Eo-- >0,o,rc(),n==="PAUSED"?null:ur?.target),n==="READY"&&iM(i,e,t,Ue),n==="PAUSED"&&(Ht={...Ht,...sM(i,e,t,Ue)})}}const oc=()=>{const{ship:i,audio:e}=Ue,t=rc();return{ship:{x:i.x,y:i.y,vx:i.vx,vy:i.vy,theta:i.theta,omega:i.omega,state:i.state,invulnerableLeft:i.invulnerableLeft,disruptedLeft:i.disruptedLeft,stunnedLeft:i.stunnedLeft,drunkLeft:i.drunkLeft},nozzle:{L:{p:i.left,effective:i.effectiveLeft,overTime:i.overLeft,fullHoldTime:Et.overheatAfter},R:{p:i.right,effective:i.effectiveRight,overTime:i.overRight,fullHoldTime:Et.overheatAfter}},input:{left:t.left,right:t.right},audio:{muted:e.muted,volume:e.volume}}};let hh=0,Pa=0,Rl=!1;function yf(i){const e=Rl?0:Math.min(.1,(i-(hh||i))/1e3);hh=i,sc.classList.toggle("menu",["TITLE","PAUSED","FINISHED"].includes(Ue.ship.state));const t=rc();for(Pa+=e;Pa>=Et.fixedDt;Pa-=Et.fixedDt){const s=ff(Ue,t,Et.fixedDt);Vi.push(...s),s.some(r=>r.type==="finish")&&zi();for(const r of s)r.type==="zone"&&(ki={name:r.name,until:Ue.ship.gameTime+1}),r.type==="overheat"&&(Eo=2,Hi.runaway="overheat"),(r.type==="overheat"||r.type==="hit"&&r.kind==="spicy")&&(Ue.fx={vignette:{until:Ue.ship.gameTime+.6}}),r.type==="hit"&&r.kind==="spicy"&&(Hi.runaway="spicy"),r.type==="hit"&&(un=ih[r.kind]&&Hi.status!=="stunned"?{text:ih[r.kind],until:Ue.ship.gameTime+.5}:null),r.type==="hiccup"&&(un={text:"딸꾹!",until:Ue.ship.gameTime+.5}),r.type==="style"&&(un={text:r.kind==="near"?`아슬! +${r.points}`:`피했다! +${r.points}`,until:Ue.ship.gameTime+.6},Ue.lastStyleAt=Ue.ship.gameTime),r.type==="pickup"&&(un={text:{cushion:"방석!",ointment:"연고~",ice:"시원~",suppository:"부스터!!"}[r.kind],until:Ue.ship.gameTime+.7}),r.type==="block"&&(un={text:"막았다!",until:Ue.ship.gameTime+.6}),r.type==="agony"&&(un=null,Ue.fx={vignette:{until:Ue.ship.gameTime+1.2}})}cr=Vi,Vi=[],Cy(Ue.ship,Hi);const n=oc();Sr.update(Ue.ship,n.nozzle,n.audio,cr,!document.hidden),ur=Yi.render(Ue.ship,n.nozzle,xf,Ue,cr),$n?.isConnected&&$n.remove(),requestAnimationFrame(yf)}requestAnimationFrame(yf);function vf(){const{rgba:i,mask:e,width:t,height:n}=Yi.readback();return{width:t,height:n,violations:Ry(i,e,Jl,Ql)}}async function Mf(i){const e=await new Promise(n=>xi.toBlob(n,"image/png")),t=await fetch(`/__capture?name=${encodeURIComponent(i)}`,{method:"POST",body:e});return t.ok?t.text():`capture failed ${t.status}`}async function lM(i=""){const e=[],t=[yi,Rs,lr];Rl=!0;for(const n of ec)for(const s of Uo)Gi(yi,n,s),Yi.render(Ue.ship,oc().nozzle,xf,Ue),e.push({angle:n,zoom:s,...vf(),file:await Mf(`${i}${n}deg_zoom${s}_${Do[yi].join("x")}`)});return Gi(...t),Rl=!1,e}function cM(i,e={left:!1,right:!1}){for(let t=0;t<Math.round(i/Et.fixedDt);t++)Vi.push(...ff(Ue,e,Et.fixedDt))}window.__chirocket={get world(){return _s},setView:Gi,signals:oc,commands:Tt,advance:cM,checkPalette:vf,capture:Mf,captureMatrix:lM,get game(){return Ue},get ship(){return Ue.ship},get events(){return cr},get anchors(){return ur}};
