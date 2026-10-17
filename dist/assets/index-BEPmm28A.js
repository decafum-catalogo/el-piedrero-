(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Es="160",ll=0,Ws=1,cl=2,ws=1,ul=2,un=3,An=0,Pt=1,St=2,bn=0,hi=1,Xs=2,qs=3,Ys=4,hl=5,On=100,dl=101,fl=102,$s=103,js=104,pl=200,ml=201,_l=202,gl=203,fs=204,ps=205,vl=206,xl=207,Ml=208,Sl=209,yl=210,El=211,wl=212,bl=213,Tl=214,Al=0,Rl=1,Cl=2,hr=3,Pl=4,Ll=5,Dl=6,Il=7,bs=0,Ul=1,Nl=2,fn=0,Fl=1,Ol=2,Bl=3,kl=4,Gl=5,Hl=6,yo=300,fi=301,pi=302,ms=303,_s=304,xr=306,dr=1e3,jt=1001,gs=1002,ct=1003,Ks=1004,Rr=1005,Ht=1006,zl=1007,Di=1008,Tn=1009,Vl=1010,Wl=1011,Ts=1012,Eo=1013,En=1014,wn=1015,Ii=1016,wo=1017,bo=1018,kn=1020,Xl=1021,Kt=1023,ql=1024,Yl=1025,Gn=1026,mi=1027,$l=1028,To=1029,jl=1030,Ao=1031,Ro=1033,Cr=33776,Pr=33777,Lr=33778,Dr=33779,Zs=35840,Js=35841,Qs=35842,ea=35843,Co=36196,ta=37492,na=37496,ia=37808,ra=37809,sa=37810,aa=37811,oa=37812,la=37813,ca=37814,ua=37815,ha=37816,da=37817,fa=37818,pa=37819,ma=37820,_a=37821,Ir=36492,ga=36494,va=36495,Kl=36283,xa=36284,Ma=36285,Sa=36286,Po=3e3,Hn=3001,Zl=3200,Jl=3201,Lo=0,Ql=1,zt="",mt="srgb",pn="srgb-linear",As="display-p3",Mr="display-p3-linear",fr="linear",Qe="srgb",pr="rec709",mr="p3",Xn=7680,ya=519,ec=512,tc=513,nc=514,Do=515,ic=516,rc=517,sc=518,ac=519,Ea=35044,wa="300 es",vs=1035,dn=2e3,_r=2001;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ur=Math.PI/180,xs=180/Math.PI;function Ui(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function Rt(r,e,t){return Math.max(e,Math.min(t,r))}function oc(r,e){return(r%e+e)%e}function Nr(r,e,t){return(1-t)*r+t*e}function ba(r){return(r&r-1)===0&&r!==0}function Ms(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function At(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*i+e.x,this.y=s*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,s,l,o,u,h){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,o,u,h)}set(e,t,n,i,s,l,o,u,h){const p=this.elements;return p[0]=e,p[1]=i,p[2]=o,p[3]=t,p[4]=s,p[5]=u,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],o=n[3],u=n[6],h=n[1],p=n[4],a=n[7],c=n[2],f=n[5],_=n[8],g=i[0],m=i[3],d=i[6],x=i[1],v=i[4],E=i[7],C=i[2],T=i[5],A=i[8];return s[0]=l*g+o*x+u*C,s[3]=l*m+o*v+u*T,s[6]=l*d+o*E+u*A,s[1]=h*g+p*x+a*C,s[4]=h*m+p*v+a*T,s[7]=h*d+p*E+a*A,s[2]=c*g+f*x+_*C,s[5]=c*m+f*v+_*T,s[8]=c*d+f*E+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],o=e[5],u=e[6],h=e[7],p=e[8];return t*l*p-t*o*h-n*s*p+n*o*u+i*s*h-i*l*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],o=e[5],u=e[6],h=e[7],p=e[8],a=p*l-o*h,c=o*u-p*s,f=h*s-l*u,_=t*a+n*c+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=a*g,e[1]=(i*h-p*n)*g,e[2]=(o*n-i*l)*g,e[3]=c*g,e[4]=(p*t-i*u)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*u-h*t)*g,e[8]=(l*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,l,o){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*l+h*o)+l+e,-i*h,i*u,-i*(-h*l+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fr.makeScale(e,t)),this}rotate(e){return this.premultiply(Fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Be;function Io(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function gr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lc(){const r=gr("canvas");return r.style.display="block",r}const Ta={};function Li(r){r in Ta||(Ta[r]=!0,console.warn(r))}const Aa=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ra=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ki={[pn]:{transfer:fr,primaries:pr,toReference:r=>r,fromReference:r=>r},[mt]:{transfer:Qe,primaries:pr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Mr]:{transfer:fr,primaries:mr,toReference:r=>r.applyMatrix3(Ra),fromReference:r=>r.applyMatrix3(Aa)},[As]:{transfer:Qe,primaries:mr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ra),fromReference:r=>r.applyMatrix3(Aa).convertLinearToSRGB()}},cc=new Set([pn,Mr]),$e={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!cc.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ki[e].toReference,i=ki[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ki[r].primaries},getTransfer:function(r){return r===zt?fr:ki[r].transfer}};function di(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qn;class Uo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=gr("canvas")),qn.width=e.width,qn.height=e.height;const n=qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let l=0;l<s.length;l++)s[l]=di(s[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uc=0;class No{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let l=0,o=i.length;l<o;l++)i[l].isDataTexture?s.push(Br(i[l].image)):s.push(Br(i[l]))}else s=Br(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Br(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Uo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hc=0;class Lt extends xi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=jt,i=jt,s=Ht,l=Di,o=Kt,u=Tn,h=Lt.DEFAULT_ANISOTROPY,p=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Ui(),this.name="",this.source=new No(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=l,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=u,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Hn?mt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?Hn:Po}set encoding(e){Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hn?mt:zt}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=yo;Lt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],p=u[4],a=u[8],c=u[1],f=u[5],_=u[9],g=u[2],m=u[6],d=u[10];if(Math.abs(p-c)<.01&&Math.abs(a-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(p+c)<.1&&Math.abs(a+g)<.1&&Math.abs(_+m)<.1&&Math.abs(h+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(h+1)/2,E=(f+1)/2,C=(d+1)/2,T=(p+c)/4,A=(a+g)/4,G=(_+m)/4;return v>E&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=A/n):E>C?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=T/i,s=G/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=G/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(a-g)*(a-g)+(c-p)*(c-p));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(a-g)/x,this.z=(c-p)/x,this.w=Math.acos((h+f+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dc extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Li("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hn?mt:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new No(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends dc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fo extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,l,o){let u=n[i+0],h=n[i+1],p=n[i+2],a=n[i+3];const c=s[l+0],f=s[l+1],_=s[l+2],g=s[l+3];if(o===0){e[t+0]=u,e[t+1]=h,e[t+2]=p,e[t+3]=a;return}if(o===1){e[t+0]=c,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(a!==g||u!==c||h!==f||p!==_){let m=1-o;const d=u*c+h*f+p*_+a*g,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,d*x);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const E=o*x;if(u=u*m+c*E,h=h*m+f*E,p=p*m+_*E,a=a*m+g*E,m===1-o){const C=1/Math.sqrt(u*u+h*h+p*p+a*a);u*=C,h*=C,p*=C,a*=C}}e[t]=u,e[t+1]=h,e[t+2]=p,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,i,s,l){const o=n[i],u=n[i+1],h=n[i+2],p=n[i+3],a=s[l],c=s[l+1],f=s[l+2],_=s[l+3];return e[t]=o*_+p*a+u*f-h*c,e[t+1]=u*_+p*c+h*a-o*f,e[t+2]=h*_+p*f+o*c-u*a,e[t+3]=p*_-o*a-u*c-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,l=e._order,o=Math.cos,u=Math.sin,h=o(n/2),p=o(i/2),a=o(s/2),c=u(n/2),f=u(i/2),_=u(s/2);switch(l){case"XYZ":this._x=c*p*a+h*f*_,this._y=h*f*a-c*p*_,this._z=h*p*_+c*f*a,this._w=h*p*a-c*f*_;break;case"YXZ":this._x=c*p*a+h*f*_,this._y=h*f*a-c*p*_,this._z=h*p*_-c*f*a,this._w=h*p*a+c*f*_;break;case"ZXY":this._x=c*p*a-h*f*_,this._y=h*f*a+c*p*_,this._z=h*p*_+c*f*a,this._w=h*p*a-c*f*_;break;case"ZYX":this._x=c*p*a-h*f*_,this._y=h*f*a+c*p*_,this._z=h*p*_-c*f*a,this._w=h*p*a+c*f*_;break;case"YZX":this._x=c*p*a+h*f*_,this._y=h*f*a+c*p*_,this._z=h*p*_-c*f*a,this._w=h*p*a-c*f*_;break;case"XZY":this._x=c*p*a-h*f*_,this._y=h*f*a-c*p*_,this._z=h*p*_+c*f*a,this._w=h*p*a+c*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],l=t[1],o=t[5],u=t[9],h=t[2],p=t[6],a=t[10],c=n+o+a;if(c>0){const f=.5/Math.sqrt(c+1);this._w=.25/f,this._x=(p-u)*f,this._y=(s-h)*f,this._z=(l-i)*f}else if(n>o&&n>a){const f=2*Math.sqrt(1+n-o-a);this._w=(p-u)/f,this._x=.25*f,this._y=(i+l)/f,this._z=(s+h)/f}else if(o>a){const f=2*Math.sqrt(1+o-n-a);this._w=(s-h)/f,this._x=(i+l)/f,this._y=.25*f,this._z=(u+p)/f}else{const f=2*Math.sqrt(1+a-n-o);this._w=(l-i)/f,this._x=(s+h)/f,this._y=(u+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,l=e._w,o=t._x,u=t._y,h=t._z,p=t._w;return this._x=n*p+l*o+i*h-s*u,this._y=i*p+l*u+s*o-n*h,this._z=s*p+l*h+n*u-i*o,this._w=l*p-n*o-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,l=this._w;let o=l*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=l,this._x=n,this._y=i,this._z=s,this;const u=1-o*o;if(u<=Number.EPSILON){const f=1-t;return this._w=f*l+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),p=Math.atan2(h,o),a=Math.sin((1-t)*p)/h,c=Math.sin(t*p)/h;return this._w=l*a+this._w*c,this._x=n*a+this._x*c,this._y=i*a+this._y*c,this._z=s*a+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,l=e.y,o=e.z,u=e.w,h=2*(l*i-o*n),p=2*(o*t-s*i),a=2*(s*n-l*t);return this.x=t+u*h+l*a-o*p,this.y=n+u*p+o*h-s*a,this.z=i+u*a+s*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,l=t.x,o=t.y,u=t.z;return this.x=i*u-s*o,this.y=s*l-n*u,this.z=n*o-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kr.copy(this).projectOnVector(e),this.sub(kr)}reflect(e){return this.sub(kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new P,Ca=new Ni;class Vn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let l=0,o=s.count;l<o;l++)e.isMesh===!0?e.getVertexPosition(l,Wt):Wt.fromBufferAttribute(s,l),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const i=e.children;for(let s=0,l=i.length;s<l;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),Hi.subVectors(this.max,Ei),Yn.subVectors(e.a,Ei),$n.subVectors(e.b,Ei),jn.subVectors(e.c,Ei),mn.subVectors($n,Yn),_n.subVectors(jn,$n),Ln.subVectors(Yn,jn);let t=[0,-mn.z,mn.y,0,-_n.z,_n.y,0,-Ln.z,Ln.y,mn.z,0,-mn.x,_n.z,0,-_n.x,Ln.z,0,-Ln.x,-mn.y,mn.x,0,-_n.y,_n.x,0,-Ln.y,Ln.x,0];return!Gr(t,Yn,$n,jn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Gr(t,Yn,$n,jn,Hi))?!1:(zi.crossVectors(mn,_n),t=[zi.x,zi.y,zi.z],Gr(t,Yn,$n,jn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new P,new P,new P,new P,new P,new P,new P,new P],Wt=new P,Gi=new Vn,Yn=new P,$n=new P,jn=new P,mn=new P,_n=new P,Ln=new P,Ei=new P,Hi=new P,zi=new P,Dn=new P;function Gr(r,e,t,n,i){for(let s=0,l=r.length-3;s<=l;s+=3){Dn.fromArray(r,s);const o=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),u=e.dot(Dn),h=t.dot(Dn),p=n.dot(Dn);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>o)return!1}return!0}const pc=new Vn,wi=new P,Hr=new P;class Rs{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,l=e.length;s<l;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(Hr)),this.expandByPoint(wi.copy(e.center).sub(Hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new P,zr=new P,Vi=new P,gn=new P,Vr=new P,Wi=new P,Wr=new P;class mc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zr.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(zr);const s=e.distanceTo(t)*.5,l=-this.direction.dot(Vi),o=gn.dot(this.direction),u=-gn.dot(Vi),h=gn.lengthSq(),p=Math.abs(1-l*l);let a,c,f,_;if(p>0)if(a=l*u-o,c=l*o-u,_=s*p,a>=0)if(c>=-_)if(c<=_){const g=1/p;a*=g,c*=g,f=a*(a+l*c+2*o)+c*(l*a+c+2*u)+h}else c=s,a=Math.max(0,-(l*c+o)),f=-a*a+c*(c+2*u)+h;else c=-s,a=Math.max(0,-(l*c+o)),f=-a*a+c*(c+2*u)+h;else c<=-_?(a=Math.max(0,-(-l*s+o)),c=a>0?-s:Math.min(Math.max(-s,-u),s),f=-a*a+c*(c+2*u)+h):c<=_?(a=0,c=Math.min(Math.max(-s,-u),s),f=c*(c+2*u)+h):(a=Math.max(0,-(l*s+o)),c=a>0?s:Math.min(Math.max(-s,-u),s),f=-a*a+c*(c+2*u)+h);else c=l>0?-s:s,a=Math.max(0,-(l*c+o)),f=-a*a+c*(c+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,a),i&&i.copy(zr).addScaledVector(Vi,c),f}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const l=Math.sqrt(s-i),o=n-l,u=n+l;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,l,o,u;const h=1/this.direction.x,p=1/this.direction.y,a=1/this.direction.z,c=this.origin;return h>=0?(n=(e.min.x-c.x)*h,i=(e.max.x-c.x)*h):(n=(e.max.x-c.x)*h,i=(e.min.x-c.x)*h),p>=0?(s=(e.min.y-c.y)*p,l=(e.max.y-c.y)*p):(s=(e.max.y-c.y)*p,l=(e.min.y-c.y)*p),n>l||s>i||((s>n||isNaN(n))&&(n=s),(l<i||isNaN(i))&&(i=l),a>=0?(o=(e.min.z-c.z)*a,u=(e.max.z-c.z)*a):(o=(e.max.z-c.z)*a,u=(e.min.z-c.z)*a),n>u||o>i)||((o>n||n!==n)&&(n=o),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,i,s){Vr.subVectors(t,e),Wi.subVectors(n,e),Wr.crossVectors(Vr,Wi);let l=this.direction.dot(Wr),o;if(l>0){if(i)return null;o=1}else if(l<0)o=-1,l=-l;else return null;gn.subVectors(this.origin,e);const u=o*this.direction.dot(Wi.crossVectors(gn,Wi));if(u<0)return null;const h=o*this.direction.dot(Vr.cross(gn));if(h<0||u+h>l)return null;const p=-o*gn.dot(Wr);return p<0?null:this.at(p/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,i,s,l,o,u,h,p,a,c,f,_,g,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,o,u,h,p,a,c,f,_,g,m)}set(e,t,n,i,s,l,o,u,h,p,a,c,f,_,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=l,d[9]=o,d[13]=u,d[2]=h,d[6]=p,d[10]=a,d[14]=c,d[3]=f,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),l=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,l=Math.cos(n),o=Math.sin(n),u=Math.cos(i),h=Math.sin(i),p=Math.cos(s),a=Math.sin(s);if(e.order==="XYZ"){const c=l*p,f=l*a,_=o*p,g=o*a;t[0]=u*p,t[4]=-u*a,t[8]=h,t[1]=f+_*h,t[5]=c-g*h,t[9]=-o*u,t[2]=g-c*h,t[6]=_+f*h,t[10]=l*u}else if(e.order==="YXZ"){const c=u*p,f=u*a,_=h*p,g=h*a;t[0]=c+g*o,t[4]=_*o-f,t[8]=l*h,t[1]=l*a,t[5]=l*p,t[9]=-o,t[2]=f*o-_,t[6]=g+c*o,t[10]=l*u}else if(e.order==="ZXY"){const c=u*p,f=u*a,_=h*p,g=h*a;t[0]=c-g*o,t[4]=-l*a,t[8]=_+f*o,t[1]=f+_*o,t[5]=l*p,t[9]=g-c*o,t[2]=-l*h,t[6]=o,t[10]=l*u}else if(e.order==="ZYX"){const c=l*p,f=l*a,_=o*p,g=o*a;t[0]=u*p,t[4]=_*h-f,t[8]=c*h+g,t[1]=u*a,t[5]=g*h+c,t[9]=f*h-_,t[2]=-h,t[6]=o*u,t[10]=l*u}else if(e.order==="YZX"){const c=l*u,f=l*h,_=o*u,g=o*h;t[0]=u*p,t[4]=g-c*a,t[8]=_*a+f,t[1]=a,t[5]=l*p,t[9]=-o*p,t[2]=-h*p,t[6]=f*a+_,t[10]=c-g*a}else if(e.order==="XZY"){const c=l*u,f=l*h,_=o*u,g=o*h;t[0]=u*p,t[4]=-a,t[8]=h*p,t[1]=c*a+g,t[5]=l*p,t[9]=f*a-_,t[2]=_*a-f,t[6]=o*p,t[10]=g*a+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_c,e,gc)}lookAt(e,t,n){const i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),vn.crossVectors(n,Ut),vn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),vn.crossVectors(n,Ut)),vn.normalize(),Xi.crossVectors(Ut,vn),i[0]=vn.x,i[4]=Xi.x,i[8]=Ut.x,i[1]=vn.y,i[5]=Xi.y,i[9]=Ut.y,i[2]=vn.z,i[6]=Xi.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],o=n[4],u=n[8],h=n[12],p=n[1],a=n[5],c=n[9],f=n[13],_=n[2],g=n[6],m=n[10],d=n[14],x=n[3],v=n[7],E=n[11],C=n[15],T=i[0],A=i[4],G=i[8],M=i[12],w=i[1],k=i[5],H=i[9],Z=i[13],L=i[2],N=i[6],V=i[10],q=i[14],W=i[3],X=i[7],Y=i[11],ee=i[15];return s[0]=l*T+o*w+u*L+h*W,s[4]=l*A+o*k+u*N+h*X,s[8]=l*G+o*H+u*V+h*Y,s[12]=l*M+o*Z+u*q+h*ee,s[1]=p*T+a*w+c*L+f*W,s[5]=p*A+a*k+c*N+f*X,s[9]=p*G+a*H+c*V+f*Y,s[13]=p*M+a*Z+c*q+f*ee,s[2]=_*T+g*w+m*L+d*W,s[6]=_*A+g*k+m*N+d*X,s[10]=_*G+g*H+m*V+d*Y,s[14]=_*M+g*Z+m*q+d*ee,s[3]=x*T+v*w+E*L+C*W,s[7]=x*A+v*k+E*N+C*X,s[11]=x*G+v*H+E*V+C*Y,s[15]=x*M+v*Z+E*q+C*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],l=e[1],o=e[5],u=e[9],h=e[13],p=e[2],a=e[6],c=e[10],f=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+s*u*a-i*h*a-s*o*c+n*h*c+i*o*f-n*u*f)+g*(+t*u*f-t*h*c+s*l*c-i*l*f+i*h*p-s*u*p)+m*(+t*h*a-t*o*f-s*l*a+n*l*f+s*o*p-n*h*p)+d*(-i*o*p-t*u*a+t*o*c+i*l*a-n*l*c+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],o=e[5],u=e[6],h=e[7],p=e[8],a=e[9],c=e[10],f=e[11],_=e[12],g=e[13],m=e[14],d=e[15],x=a*m*h-g*c*h+g*u*f-o*m*f-a*u*d+o*c*d,v=_*c*h-p*m*h-_*u*f+l*m*f+p*u*d-l*c*d,E=p*g*h-_*a*h+_*o*f-l*g*f-p*o*d+l*a*d,C=_*a*u-p*g*u-_*o*c+l*g*c+p*o*m-l*a*m,T=t*x+n*v+i*E+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(g*c*s-a*m*s-g*i*f+n*m*f+a*i*d-n*c*d)*A,e[2]=(o*m*s-g*u*s+g*i*h-n*m*h-o*i*d+n*u*d)*A,e[3]=(a*u*s-o*c*s-a*i*h+n*c*h+o*i*f-n*u*f)*A,e[4]=v*A,e[5]=(p*m*s-_*c*s+_*i*f-t*m*f-p*i*d+t*c*d)*A,e[6]=(_*u*s-l*m*s-_*i*h+t*m*h+l*i*d-t*u*d)*A,e[7]=(l*c*s-p*u*s+p*i*h-t*c*h-l*i*f+t*u*f)*A,e[8]=E*A,e[9]=(_*a*s-p*g*s-_*n*f+t*g*f+p*n*d-t*a*d)*A,e[10]=(l*g*s-_*o*s+_*n*h-t*g*h-l*n*d+t*o*d)*A,e[11]=(p*o*s-l*a*s-p*n*h+t*a*h+l*n*f-t*o*f)*A,e[12]=C*A,e[13]=(p*g*i-_*a*i+_*n*c-t*g*c-p*n*m+t*a*m)*A,e[14]=(_*o*i-l*g*i-_*n*u+t*g*u+l*n*m-t*o*m)*A,e[15]=(l*a*i-p*o*i+p*n*u-t*a*u-l*n*c+t*o*c)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,l=e.x,o=e.y,u=e.z,h=s*l,p=s*o;return this.set(h*l+n,h*o-i*u,h*u+i*o,0,h*o+i*u,p*o+n,p*u-i*l,0,h*u-i*o,p*u+i*l,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,l){return this.set(1,n,s,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,l=t._y,o=t._z,u=t._w,h=s+s,p=l+l,a=o+o,c=s*h,f=s*p,_=s*a,g=l*p,m=l*a,d=o*a,x=u*h,v=u*p,E=u*a,C=n.x,T=n.y,A=n.z;return i[0]=(1-(g+d))*C,i[1]=(f+E)*C,i[2]=(_-v)*C,i[3]=0,i[4]=(f-E)*T,i[5]=(1-(c+d))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(_+v)*A,i[9]=(m-x)*A,i[10]=(1-(c+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Kn.set(i[0],i[1],i[2]).length();const l=Kn.set(i[4],i[5],i[6]).length(),o=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);const h=1/s,p=1/l,a=1/o;return Xt.elements[0]*=h,Xt.elements[1]*=h,Xt.elements[2]*=h,Xt.elements[4]*=p,Xt.elements[5]*=p,Xt.elements[6]*=p,Xt.elements[8]*=a,Xt.elements[9]*=a,Xt.elements[10]*=a,t.setFromRotationMatrix(Xt),n.x=s,n.y=l,n.z=o,this}makePerspective(e,t,n,i,s,l,o=dn){const u=this.elements,h=2*s/(t-e),p=2*s/(n-i),a=(t+e)/(t-e),c=(n+i)/(n-i);let f,_;if(o===dn)f=-(l+s)/(l-s),_=-2*l*s/(l-s);else if(o===_r)f=-l/(l-s),_=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=a,u[12]=0,u[1]=0,u[5]=p,u[9]=c,u[13]=0,u[2]=0,u[6]=0,u[10]=f,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,l,o=dn){const u=this.elements,h=1/(t-e),p=1/(n-i),a=1/(l-s),c=(t+e)*h,f=(n+i)*p;let _,g;if(o===dn)_=(l+s)*a,g=-2*a;else if(o===_r)_=s*a,g=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-c,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-f,u[2]=0,u[6]=0,u[10]=g,u[14]=-_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new P,Xt=new lt,_c=new P(0,0,0),gc=new P(1,1,1),vn=new P,Xi=new P,Ut=new P,Pa=new lt,La=new Ni;class Sr{constructor(e=0,t=0,n=0,i=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],l=i[4],o=i[8],u=i[1],h=i[5],p=i[9],a=i[2],c=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-a,f),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return La.setFromEuler(this),this.setFromQuaternion(La,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class Oo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vc=0;const Da=new P,Zn=new Ni,rn=new lt,qi=new P,bi=new P,xc=new P,Mc=new Ni,Ia=new P(1,0,0),Ua=new P(0,1,0),Na=new P(0,0,1),Sc={type:"added"},yc={type:"removed"};class gt extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new P,t=new Sr,n=new Ni,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Be}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Ia,e)}rotateY(e){return this.rotateOnAxis(Ua,e)}rotateZ(e){return this.rotateOnAxis(Na,e)}translateOnAxis(e,t){return Da.copy(e).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ia,e)}translateY(e){return this.translateOnAxis(Ua,e)}translateZ(e){return this.translateOnAxis(Na,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qi.copy(e):qi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(bi,qi,this.up):rn.lookAt(qi,bi,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),Zn.setFromRotationMatrix(rn),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Mc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,l=i.length;s<l;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){const a=u[h];s(e.shapes,a)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,h=this.material.length;u<h;u++)o.push(s(e.materials,this.material[u]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];i.animations.push(s(e.animations,u))}}if(t){const o=l(e.geometries),u=l(e.materials),h=l(e.textures),p=l(e.images),a=l(e.shapes),c=l(e.skeletons),f=l(e.animations),_=l(e.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),a.length>0&&(n.shapes=a),c.length>0&&(n.skeletons=c),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function l(o){const u=[];for(const h in o){const p=o[h];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new P(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new P,sn=new P,Xr=new P,an=new P,Jn=new P,Qn=new P,Fa=new P,qr=new P,Yr=new P,$r=new P;let Yi=!1;class $t{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qt.subVectors(e,t),i.cross(qt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){qt.subVectors(i,t),sn.subVectors(n,t),Xr.subVectors(e,t);const l=qt.dot(qt),o=qt.dot(sn),u=qt.dot(Xr),h=sn.dot(sn),p=sn.dot(Xr),a=l*h-o*o;if(a===0)return s.set(0,0,0),null;const c=1/a,f=(h*u-o*p)*c,_=(l*p-o*u)*c;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,i,s,l,o,u){return Yi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yi=!0),this.getInterpolation(e,t,n,i,s,l,o,u)}static getInterpolation(e,t,n,i,s,l,o,u){return this.getBarycoord(e,t,n,i,an)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,an.x),u.addScaledVector(l,an.y),u.addScaledVector(o,an.z),u)}static isFrontFacing(e,t,n,i){return qt.subVectors(n,t),sn.subVectors(e,t),qt.cross(sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),qt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Yi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yi=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let l,o;Jn.subVectors(i,n),Qn.subVectors(s,n),qr.subVectors(e,n);const u=Jn.dot(qr),h=Qn.dot(qr);if(u<=0&&h<=0)return t.copy(n);Yr.subVectors(e,i);const p=Jn.dot(Yr),a=Qn.dot(Yr);if(p>=0&&a<=p)return t.copy(i);const c=u*a-p*h;if(c<=0&&u>=0&&p<=0)return l=u/(u-p),t.copy(n).addScaledVector(Jn,l);$r.subVectors(e,s);const f=Jn.dot($r),_=Qn.dot($r);if(_>=0&&f<=_)return t.copy(s);const g=f*h-u*_;if(g<=0&&h>=0&&_<=0)return o=h/(h-_),t.copy(n).addScaledVector(Qn,o);const m=p*_-f*a;if(m<=0&&a-p>=0&&f-_>=0)return Fa.subVectors(s,i),o=(a-p)/(a-p+(f-_)),t.copy(i).addScaledVector(Fa,o);const d=1/(m+g+c);return l=g*d,o=c*d,t.copy(n).addScaledVector(Jn,l).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function jr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=oc(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=jr(l,s,e+1/3),this.g=jr(l,s,e),this.b=jr(l,s,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=i[1],o=i[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=Bo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return $e.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Rt(Mt.r*255,0,255))*65536+Math.round(Rt(Mt.g*255,0,255))*256+Math.round(Rt(Mt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,s=Mt.b,l=Math.max(n,i,s),o=Math.min(n,i,s);let u,h;const p=(o+l)/2;if(o===l)u=0,h=0;else{const a=l-o;switch(h=p<=.5?a/(l+o):a/(2-l-o),l){case n:u=(i-s)/a+(i<s?6:0);break;case i:u=(s-n)/a+2;break;case s:u=(n-i)/a+4;break}u/=6}return e.h=u,e.s=h,e.l=p,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=mt){$e.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL($i);const n=Nr(xn.h,$i.h,t),i=Nr(xn.s,$i.s,t),s=Nr(xn.l,$i.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ve;Ve.NAMES=Bo;let Ec=0;class Fi extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=hi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fs,this.blendDst=ps,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fs&&(n.blendSrc=this.blendSrc),this.blendDst!==ps&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const l=[];for(const o in s){const u=s[o];delete u.metadata,l.push(u)}return l}if(t){const s=i(e.textures),l=i(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tt extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new P,ji=new Ge;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ea,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ea&&(e.usage=this.usage),e}}class ko extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Go extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wc=0;const Gt=new lt,Kr=new gt,ei=new P,Nt=new Vn,Ti=new Vn,pt=new P;class Vt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Io(e)?Go:ko)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Kr.lookAt(e),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const o=t[s];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Nt.min,Ti.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,Ti.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(Ti.min),Nt.expandByPoint(Ti.max))}Nt.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let s=0,l=t.length;s<l;s++){const o=t[s],u=this.morphTargetsRelative;for(let h=0,p=o.count;h<p;h++)pt.fromBufferAttribute(o,h),u&&(ei.fromBufferAttribute(e,h),pt.add(ei)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,l=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));const u=this.getAttribute("tangent").array,h=[],p=[];for(let w=0;w<o;w++)h[w]=new P,p[w]=new P;const a=new P,c=new P,f=new P,_=new Ge,g=new Ge,m=new Ge,d=new P,x=new P;function v(w,k,H){a.fromArray(i,w*3),c.fromArray(i,k*3),f.fromArray(i,H*3),_.fromArray(l,w*2),g.fromArray(l,k*2),m.fromArray(l,H*2),c.sub(a),f.sub(a),g.sub(_),m.sub(_);const Z=1/(g.x*m.y-m.x*g.y);isFinite(Z)&&(d.copy(c).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(Z),x.copy(f).multiplyScalar(g.x).addScaledVector(c,-m.x).multiplyScalar(Z),h[w].add(d),h[k].add(d),h[H].add(d),p[w].add(x),p[k].add(x),p[H].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,k=E.length;w<k;++w){const H=E[w],Z=H.start,L=H.count;for(let N=Z,V=Z+L;N<V;N+=3)v(n[N+0],n[N+1],n[N+2])}const C=new P,T=new P,A=new P,G=new P;function M(w){A.fromArray(s,w*3),G.copy(A);const k=h[w];C.copy(k),C.sub(A.multiplyScalar(A.dot(k))).normalize(),T.crossVectors(G,k);const Z=T.dot(p[w])<0?-1:1;u[w*4]=C.x,u[w*4+1]=C.y,u[w*4+2]=C.z,u[w*4+3]=Z}for(let w=0,k=E.length;w<k;++w){const H=E[w],Z=H.start,L=H.count;for(let N=Z,V=Z+L;N<V;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,f=n.count;c<f;c++)n.setXYZ(c,0,0,0);const i=new P,s=new P,l=new P,o=new P,u=new P,h=new P,p=new P,a=new P;if(e)for(let c=0,f=e.count;c<f;c+=3){const _=e.getX(c+0),g=e.getX(c+1),m=e.getX(c+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),l.fromBufferAttribute(t,m),p.subVectors(l,s),a.subVectors(i,s),p.cross(a),o.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),o.add(p),u.add(p),h.add(p),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,u.x,u.y,u.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,f=t.count;c<f;c+=3)i.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),l.fromBufferAttribute(t,c+2),p.subVectors(l,s),a.subVectors(i,s),p.cross(a),n.setXYZ(c+0,p.x,p.y,p.z),n.setXYZ(c+1,p.x,p.y,p.z),n.setXYZ(c+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,u){const h=o.array,p=o.itemSize,a=o.normalized,c=new h.constructor(u.length*p);let f=0,_=0;for(let g=0,m=u.length;g<m;g++){o.isInterleavedBufferAttribute?f=u[g]*o.data.stride+o.offset:f=u[g]*p;for(let d=0;d<p;d++)c[_++]=h[f++]}return new Qt(c,p,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const o in i){const u=i[o],h=e(u,n);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const u=[],h=s[o];for(let p=0,a=h.length;p<a;p++){const c=h[p],f=e(c,n);u.push(f)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let o=0,u=l.length;o<u;o++){const h=l[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],p=[];for(let a=0,c=h.length;a<c;a++){const f=h[a];p.push(f.toJSON(e.data))}p.length>0&&(i[u]=p,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const p=i[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],a=s[h];for(let c=0,f=a.length;c<f;c++)p.push(a[c].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const a=l[h];this.addGroup(a.start,a.count,a.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new lt,In=new mc,Ki=new Rs,Ba=new P,ti=new P,ni=new P,ii=new P,Zr=new P,Zi=new P,Ji=new Ge,Qi=new Ge,er=new Ge,ka=new P,Ga=new P,Ha=new P,tr=new P,nr=new P;class ce extends gt{constructor(e=new Vt,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Zi.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const p=o[u],a=s[u];p!==0&&(Zr.fromBufferAttribute(a,e),l?Zi.addScaledVector(Zr,p):Zi.addScaledVector(Zr.sub(t),p))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(s),In.copy(e.ray).recast(e.near),!(Ki.containsPoint(In.origin)===!1&&(In.intersectSphere(Ki,Ba)===null||In.origin.distanceToSquared(Ba)>(e.far-e.near)**2))&&(Oa.copy(s).invert(),In.copy(e.ray).applyMatrix4(Oa),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let i;const s=this.geometry,l=this.material,o=s.index,u=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,a=s.attributes.normal,c=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(l))for(let _=0,g=c.length;_<g;_++){const m=c[_],d=l[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=x,C=v;E<C;E+=3){const T=o.getX(E),A=o.getX(E+1),G=o.getX(E+2);i=ir(this,d,e,n,h,p,a,T,A,G),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,d=g;m<d;m+=3){const x=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);i=ir(this,l,e,n,h,p,a,x,v,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(l))for(let _=0,g=c.length;_<g;_++){const m=c[_],d=l[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(u.count,Math.min(m.start+m.count,f.start+f.count));for(let E=x,C=v;E<C;E+=3){const T=E,A=E+1,G=E+2;i=ir(this,d,e,n,h,p,a,T,A,G),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(u.count,f.start+f.count);for(let m=_,d=g;m<d;m+=3){const x=m,v=m+1,E=m+2;i=ir(this,l,e,n,h,p,a,x,v,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function bc(r,e,t,n,i,s,l,o){let u;if(e.side===Pt?u=n.intersectTriangle(l,s,i,!0,o):u=n.intersectTriangle(i,s,l,e.side===An,o),u===null)return null;nr.copy(o),nr.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(nr);return h<t.near||h>t.far?null:{distance:h,point:nr.clone(),object:r}}function ir(r,e,t,n,i,s,l,o,u,h){r.getVertexPosition(o,ti),r.getVertexPosition(u,ni),r.getVertexPosition(h,ii);const p=bc(r,e,t,n,ti,ni,ii,tr);if(p){i&&(Ji.fromBufferAttribute(i,o),Qi.fromBufferAttribute(i,u),er.fromBufferAttribute(i,h),p.uv=$t.getInterpolation(tr,ti,ni,ii,Ji,Qi,er,new Ge)),s&&(Ji.fromBufferAttribute(s,o),Qi.fromBufferAttribute(s,u),er.fromBufferAttribute(s,h),p.uv1=$t.getInterpolation(tr,ti,ni,ii,Ji,Qi,er,new Ge),p.uv2=p.uv1),l&&(ka.fromBufferAttribute(l,o),Ga.fromBufferAttribute(l,u),Ha.fromBufferAttribute(l,h),p.normal=$t.getInterpolation(tr,ti,ni,ii,ka,Ga,Ha,new P),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const a={a:o,b:u,c:h,normal:new P,materialIndex:0};$t.getNormal(ti,ni,ii,a.normal),p.face=a}return p}class ke extends Vt{constructor(e=1,t=1,n=1,i=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:l};const o=this;i=Math.floor(i),s=Math.floor(s),l=Math.floor(l);const u=[],h=[],p=[],a=[];let c=0,f=0;_("z","y","x",-1,-1,n,t,e,l,s,0),_("z","y","x",1,-1,n,t,-e,l,s,1),_("x","z","y",1,1,e,n,t,i,l,2),_("x","z","y",1,-1,e,n,-t,i,l,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(a,2));function _(g,m,d,x,v,E,C,T,A,G,M){const w=E/A,k=C/G,H=E/2,Z=C/2,L=T/2,N=A+1,V=G+1;let q=0,W=0;const X=new P;for(let Y=0;Y<V;Y++){const ee=Y*k-Z;for(let te=0;te<N;te++){const z=te*w-H;X[g]=z*x,X[m]=ee*v,X[d]=L,h.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[d]=T>0?1:-1,p.push(X.x,X.y,X.z),a.push(te/A),a.push(1-Y/G),q+=1}}for(let Y=0;Y<G;Y++)for(let ee=0;ee<A;ee++){const te=c+ee+N*Y,z=c+ee+N*(Y+1),$=c+(ee+1)+N*(Y+1),oe=c+(ee+1)+N*Y;u.push(te,z,oe),u.push(z,$,oe),W+=6}o.addGroup(f,W,M),f+=W,c+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(r){const e={};for(let t=0;t<r.length;t++){const n=_i(r[t]);for(const i in n)e[i]=n[i]}return e}function Tc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ho(r){return r.getRenderTarget()===null?r.outputColorSpace:$e.workingColorSpace}const Ac={clone:_i,merge:bt};var Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=Cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Tc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zo extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends zo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,h=l.fullHeight;s+=l.offsetX*i/u,t-=l.offsetY*n/h,i*=l.width/u,n*=l.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ri=-90,si=1;class Pc extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(ri,si,e,t);i.layers=this.layers,this.add(i);const s=new Bt(ri,si,e,t);s.layers=this.layers,this.add(s);const l=new Bt(ri,si,e,t);l.layers=this.layers,this.add(l);const o=new Bt(ri,si,e,t);o.layers=this.layers,this.add(o);const u=new Bt(ri,si,e,t);u.layers=this.layers,this.add(u);const h=new Bt(ri,si,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,l,o,u]=t;for(const h of t)this.remove(h);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,o,u,h,p]=this.children,a=e.getRenderTarget(),c=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,l),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,p),e.setRenderTarget(a,c,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Vo extends Lt{constructor(e,t,n,i,s,l,o,u,h,p){e=e!==void 0?e:[],t=t!==void 0?t:fi,super(e,t,n,i,s,l,o,u,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lc extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Li("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hn?mt:zt),this.texture=new Vo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ke(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:bn});s.uniforms.tEquirect.value=t;const l=new ce(i,s),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=Ht),new Pc(1,10,this).update(e,l),t.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(s)}}const Jr=new P,Dc=new P,Ic=new Be;class Nn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jr.subVectors(n,t).cross(Dc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ic.getNormalMatrix(e),i=this.coplanarPoint(Jr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Rs,rr=new P;class Cs{constructor(e=new Nn,t=new Nn,n=new Nn,i=new Nn,s=new Nn,l=new Nn){this.planes=[e,t,n,i,s,l]}set(e,t,n,i,s,l){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){const n=this.planes,i=e.elements,s=i[0],l=i[1],o=i[2],u=i[3],h=i[4],p=i[5],a=i[6],c=i[7],f=i[8],_=i[9],g=i[10],m=i[11],d=i[12],x=i[13],v=i[14],E=i[15];if(n[0].setComponents(u-s,c-h,m-f,E-d).normalize(),n[1].setComponents(u+s,c+h,m+f,E+d).normalize(),n[2].setComponents(u+l,c+p,m+_,E+x).normalize(),n[3].setComponents(u-l,c-p,m-_,E-x).normalize(),n[4].setComponents(u-o,c-a,m-g,E-v).normalize(),t===dn)n[5].setComponents(u+o,c+a,m+g,E+v).normalize();else if(t===_r)n[5].setComponents(o,a,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(rr.x=i.normal.x>0?e.max.x:e.min.x,rr.y=i.normal.y>0?e.max.y:e.min.y,rr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wo(){let r=null,e=!1,t=null,n=null;function i(s,l){t(s,l),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Uc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(h,p){const a=h.array,c=h.usage,f=a.byteLength,_=r.createBuffer();r.bindBuffer(p,_),r.bufferData(p,a,c),h.onUploadCallback();let g;if(a instanceof Float32Array)g=r.FLOAT;else if(a instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(a instanceof Int16Array)g=r.SHORT;else if(a instanceof Uint32Array)g=r.UNSIGNED_INT;else if(a instanceof Int32Array)g=r.INT;else if(a instanceof Int8Array)g=r.BYTE;else if(a instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:_,type:g,bytesPerElement:a.BYTES_PER_ELEMENT,version:h.version,size:f}}function s(h,p,a){const c=p.array,f=p._updateRange,_=p.updateRanges;if(r.bindBuffer(a,h),f.count===-1&&_.length===0&&r.bufferSubData(a,0,c),_.length!==0){for(let g=0,m=_.length;g<m;g++){const d=_[g];t?r.bufferSubData(a,d.start*c.BYTES_PER_ELEMENT,c,d.start,d.count):r.bufferSubData(a,d.start*c.BYTES_PER_ELEMENT,c.subarray(d.start,d.start+d.count))}p.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(a,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count):r.bufferSubData(a,f.offset*c.BYTES_PER_ELEMENT,c.subarray(f.offset,f.offset+f.count)),f.count=-1),p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p&&(r.deleteBuffer(p.buffer),n.delete(h))}function u(h,p){if(h.isGLBufferAttribute){const c=n.get(h);(!c||c.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const a=n.get(h);if(a===void 0)n.set(h,i(h,p));else if(a.version<h.version){if(a.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(a.buffer,h,p),a.version=h.version}}return{get:l,remove:o,update:u}}class gi extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,l=t/2,o=Math.floor(n),u=Math.floor(i),h=o+1,p=u+1,a=e/o,c=t/u,f=[],_=[],g=[],m=[];for(let d=0;d<p;d++){const x=d*c-l;for(let v=0;v<h;v++){const E=v*a-s;_.push(E,-x,0),g.push(0,0,1),m.push(v/o),m.push(1-d/u)}}for(let d=0;d<u;d++)for(let x=0;x<o;x++){const v=x+h*d,E=x+h*(d+1),C=x+1+h*(d+1),T=x+1+h*d;f.push(v,E,T),f.push(E,C,T)}this.setIndex(f),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fc=`#ifdef USE_ALPHAHASH
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
#endif`,Oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hc=`#ifdef USE_AOMAP
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
#endif`,zc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Wc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$c=`#ifdef USE_IRIDESCENCE
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
#endif`,jc=`#ifdef USE_BUMPMAP
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
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ru=`#define PI 3.141592653589793
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
} // validated`,su=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,au=`vec3 transformedNormal = objectNormal;
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
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fu=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yu=`#ifdef USE_GRADIENTMAP
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
}`,Eu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Au=`uniform bool receiveShadow;
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
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iu=`PhysicalMaterial material;
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
#endif`,Uu=`struct PhysicalMaterial {
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
}`,Nu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xu=`#if defined( USE_POINTS_UV )
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
#endif`,qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yu=`#ifdef USE_METALNESSMAP
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
#endif`,ju=`#ifdef USE_MORPHNORMALS
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
#endif`,Ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Zu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ih=`#ifdef USE_NORMALMAP
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
#endif`,rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ah=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ch=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ph=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_h=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xh=`float getShadowMask() {
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
}`,Mh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sh=`#ifdef USE_SKINNING
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
#endif`,yh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eh=`#ifdef USE_SKINNING
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
#endif`,wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Th=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ah=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rh=`#ifdef USE_TRANSMISSION
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
#endif`,Ch=`#ifdef USE_TRANSMISSION
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
#endif`,Ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ih=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nh=`uniform sampler2D t2D;
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
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gh=`#include <common>
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
}`,Hh=`#if DEPTH_PACKING == 3200
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
}`,zh=`#define DISTANCE
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
}`,Vh=`#define DISTANCE
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
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qh=`uniform float scale;
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
}`,Yh=`uniform vec3 diffuse;
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
}`,jh=`uniform vec3 diffuse;
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
}`,Kh=`#define LAMBERT
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
}`,Zh=`#define LAMBERT
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
}`,Jh=`#define MATCAP
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
}`,Qh=`#define MATCAP
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
}`,ed=`#define NORMAL
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
}`,td=`#define NORMAL
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
}`,nd=`#define PHONG
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
}`,id=`#define PHONG
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
}`,rd=`#define STANDARD
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
}`,sd=`#define STANDARD
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
}`,ad=`#define TOON
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
}`,od=`#define TOON
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
}`,ld=`uniform float size;
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
}`,cd=`uniform vec3 diffuse;
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
}`,ud=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,hd=`uniform vec3 color;
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
}`,dd=`uniform float rotation;
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
}`,fd=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Nc,alphahash_pars_fragment:Fc,alphamap_fragment:Oc,alphamap_pars_fragment:Bc,alphatest_fragment:kc,alphatest_pars_fragment:Gc,aomap_fragment:Hc,aomap_pars_fragment:zc,batching_pars_vertex:Vc,batching_vertex:Wc,begin_vertex:Xc,beginnormal_vertex:qc,bsdfs:Yc,iridescence_fragment:$c,bumpmap_pars_fragment:jc,clipping_planes_fragment:Kc,clipping_planes_pars_fragment:Zc,clipping_planes_pars_vertex:Jc,clipping_planes_vertex:Qc,color_fragment:eu,color_pars_fragment:tu,color_pars_vertex:nu,color_vertex:iu,common:ru,cube_uv_reflection_fragment:su,defaultnormal_vertex:au,displacementmap_pars_vertex:ou,displacementmap_vertex:lu,emissivemap_fragment:cu,emissivemap_pars_fragment:uu,colorspace_fragment:hu,colorspace_pars_fragment:du,envmap_fragment:fu,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:_u,envmap_physical_pars_fragment:Ru,envmap_vertex:gu,fog_vertex:vu,fog_pars_vertex:xu,fog_fragment:Mu,fog_pars_fragment:Su,gradientmap_pars_fragment:yu,lightmap_fragment:Eu,lightmap_pars_fragment:wu,lights_lambert_fragment:bu,lights_lambert_pars_fragment:Tu,lights_pars_begin:Au,lights_toon_fragment:Cu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Lu,lights_phong_pars_fragment:Du,lights_physical_fragment:Iu,lights_physical_pars_fragment:Uu,lights_fragment_begin:Nu,lights_fragment_maps:Fu,lights_fragment_end:Ou,logdepthbuf_fragment:Bu,logdepthbuf_pars_fragment:ku,logdepthbuf_pars_vertex:Gu,logdepthbuf_vertex:Hu,map_fragment:zu,map_pars_fragment:Vu,map_particle_fragment:Wu,map_particle_pars_fragment:Xu,metalnessmap_fragment:qu,metalnessmap_pars_fragment:Yu,morphcolor_vertex:$u,morphnormal_vertex:ju,morphtarget_pars_vertex:Ku,morphtarget_vertex:Zu,normal_fragment_begin:Ju,normal_fragment_maps:Qu,normal_pars_fragment:eh,normal_pars_vertex:th,normal_vertex:nh,normalmap_pars_fragment:ih,clearcoat_normal_fragment_begin:rh,clearcoat_normal_fragment_maps:sh,clearcoat_pars_fragment:ah,iridescence_pars_fragment:oh,opaque_fragment:lh,packing:ch,premultiplied_alpha_fragment:uh,project_vertex:hh,dithering_fragment:dh,dithering_pars_fragment:fh,roughnessmap_fragment:ph,roughnessmap_pars_fragment:mh,shadowmap_pars_fragment:_h,shadowmap_pars_vertex:gh,shadowmap_vertex:vh,shadowmask_pars_fragment:xh,skinbase_vertex:Mh,skinning_pars_vertex:Sh,skinning_vertex:yh,skinnormal_vertex:Eh,specularmap_fragment:wh,specularmap_pars_fragment:bh,tonemapping_fragment:Th,tonemapping_pars_fragment:Ah,transmission_fragment:Rh,transmission_pars_fragment:Ch,uv_pars_fragment:Ph,uv_pars_vertex:Lh,uv_vertex:Dh,worldpos_vertex:Ih,background_vert:Uh,background_frag:Nh,backgroundCube_vert:Fh,backgroundCube_frag:Oh,cube_vert:Bh,cube_frag:kh,depth_vert:Gh,depth_frag:Hh,distanceRGBA_vert:zh,distanceRGBA_frag:Vh,equirect_vert:Wh,equirect_frag:Xh,linedashed_vert:qh,linedashed_frag:Yh,meshbasic_vert:$h,meshbasic_frag:jh,meshlambert_vert:Kh,meshlambert_frag:Zh,meshmatcap_vert:Jh,meshmatcap_frag:Qh,meshnormal_vert:ed,meshnormal_frag:td,meshphong_vert:nd,meshphong_frag:id,meshphysical_vert:rd,meshphysical_frag:sd,meshtoon_vert:ad,meshtoon_frag:od,points_vert:ld,points_frag:cd,shadow_vert:ud,shadow_frag:hd,sprite_vert:dd,sprite_frag:fd},ie={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Jt={basic:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:bt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:bt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:bt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:bt([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:bt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:bt([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:bt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:bt([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:bt([ie.common,ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:bt([ie.lights,ie.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Jt.physical={uniforms:bt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const sr={r:0,b:0,g:0};function pd(r,e,t,n,i,s,l){const o=new Ve(0);let u=s===!0?0:1,h,p,a=null,c=0,f=null;function _(m,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,u):v&&v.isColor&&(g(v,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,l):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===xr)?(p===void 0&&(p=new ce(new ke(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:_i(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),p.material.uniforms.envMap.value=v,p.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,p.material.toneMapped=$e.getTransfer(v.colorSpace)!==Qe,(a!==v||c!==v.version||f!==r.toneMapping)&&(p.material.needsUpdate=!0,a=v,c=v.version,f=r.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new ce(new gi(2,2),new Wn({name:"BackgroundMaterial",uniforms:_i(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=$e.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(a!==v||c!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,a=v,c=v.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function g(m,d){m.getRGB(sr,Ho(r)),n.buffers.color.setClear(sr.r,sr.g,sr.b,d,l)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),u=d,g(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(m){u=m,g(o,u)},render:_}}function md(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||s!==null,o={},u=m(null);let h=u,p=!1;function a(L,N,V,q,W){let X=!1;if(l){const Y=g(q,V,N);h!==Y&&(h=Y,f(h.object)),X=d(L,q,V,W),X&&x(L,q,V,W)}else{const Y=N.wireframe===!0;(h.geometry!==q.id||h.program!==V.id||h.wireframe!==Y)&&(h.geometry=q.id,h.program=V.id,h.wireframe=Y,X=!0)}W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(X||p)&&(p=!1,G(L,N,V,q),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,N,V){const q=V.wireframe===!0;let W=o[L.id];W===void 0&&(W={},o[L.id]=W);let X=W[N.id];X===void 0&&(X={},W[N.id]=X);let Y=X[q];return Y===void 0&&(Y=m(c()),X[q]=Y),Y}function m(L){const N=[],V=[],q=[];for(let W=0;W<i;W++)N[W]=0,V[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:q,object:L,attributes:{},index:null}}function d(L,N,V,q){const W=h.attributes,X=N.attributes;let Y=0;const ee=V.getAttributes();for(const te in ee)if(ee[te].location>=0){const $=W[te];let oe=X[te];if(oe===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),$===void 0||$.attribute!==oe||oe&&$.data!==oe.data)return!0;Y++}return h.attributesNum!==Y||h.index!==q}function x(L,N,V,q){const W={},X=N.attributes;let Y=0;const ee=V.getAttributes();for(const te in ee)if(ee[te].location>=0){let $=X[te];$===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const oe={};oe.attribute=$,$&&$.data&&(oe.data=$.data),W[te]=oe,Y++}h.attributes=W,h.attributesNum=Y,h.index=q}function v(){const L=h.newAttributes;for(let N=0,V=L.length;N<V;N++)L[N]=0}function E(L){C(L,0)}function C(L,N){const V=h.newAttributes,q=h.enabledAttributes,W=h.attributeDivisors;V[L]=1,q[L]===0&&(r.enableVertexAttribArray(L),q[L]=1),W[L]!==N&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),W[L]=N)}function T(){const L=h.newAttributes,N=h.enabledAttributes;for(let V=0,q=N.length;V<q;V++)N[V]!==L[V]&&(r.disableVertexAttribArray(V),N[V]=0)}function A(L,N,V,q,W,X,Y){Y===!0?r.vertexAttribIPointer(L,N,V,W,X):r.vertexAttribPointer(L,N,V,q,W,X)}function G(L,N,V,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=q.attributes,X=V.getAttributes(),Y=N.defaultAttributeValues;for(const ee in X){const te=X[ee];if(te.location>=0){let z=W[ee];if(z===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){const $=z.normalized,oe=z.itemSize,_e=t.get(z);if(_e===void 0)continue;const me=_e.buffer,Re=_e.type,Pe=_e.bytesPerElement,ye=n.isWebGL2===!0&&(Re===r.INT||Re===r.UNSIGNED_INT||z.gpuType===Eo);if(z.isInterleavedBufferAttribute){const We=z.data,I=We.stride,yt=z.offset;if(We.isInstancedInterleavedBuffer){for(let ve=0;ve<te.locationSize;ve++)C(te.location+ve,We.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ve=0;ve<te.locationSize;ve++)E(te.location+ve);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ve=0;ve<te.locationSize;ve++)A(te.location+ve,oe/te.locationSize,Re,$,I*Pe,(yt+oe/te.locationSize*ve)*Pe,ye)}else{if(z.isInstancedBufferAttribute){for(let We=0;We<te.locationSize;We++)C(te.location+We,z.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let We=0;We<te.locationSize;We++)E(te.location+We);r.bindBuffer(r.ARRAY_BUFFER,me);for(let We=0;We<te.locationSize;We++)A(te.location+We,oe/te.locationSize,Re,$,oe*Pe,oe/te.locationSize*We*Pe,ye)}}else if(Y!==void 0){const $=Y[ee];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(te.location,$);break;case 3:r.vertexAttrib3fv(te.location,$);break;case 4:r.vertexAttrib4fv(te.location,$);break;default:r.vertexAttrib1fv(te.location,$)}}}}T()}function M(){H();for(const L in o){const N=o[L];for(const V in N){const q=N[V];for(const W in q)_(q[W].object),delete q[W];delete N[V]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const N=o[L.id];for(const V in N){const q=N[V];for(const W in q)_(q[W].object),delete q[W];delete N[V]}delete o[L.id]}function k(L){for(const N in o){const V=o[N];if(V[L.id]===void 0)continue;const q=V[L.id];for(const W in q)_(q[W].object),delete q[W];delete V[L.id]}}function H(){Z(),p=!0,h!==u&&(h=u,f(h.object))}function Z(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:a,reset:H,resetDefaultState:Z,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:E,disableUnusedAttributes:T}}function _d(r,e,t,n){const i=n.isWebGL2;let s;function l(p){s=p}function o(p,a){r.drawArrays(s,p,a),t.update(a,s,1)}function u(p,a,c){if(c===0)return;let f,_;if(i)f=r,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,p,a,c),t.update(a,s,c)}function h(p,a,c){if(c===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c;_++)this.render(p[_],a[_]);else{f.multiDrawArraysWEBGL(s,p,0,a,0,c);let _=0;for(let g=0;g<c;g++)_+=a[g];t.update(_,s,1)}}this.setMode=l,this.render=o,this.renderInstances=u,this.renderMultiDraw=h}function gd(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const u=s(o);u!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);const h=l||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,a=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),c=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=c>0,E=l||e.has("OES_texture_float"),C=v&&E,T=l?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:p,maxTextures:a,maxVertexTextures:c,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:T}}function vd(r){const e=this;let t=null,n=0,i=!1,s=!1;const l=new Nn,o=new Be,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(a,c){const f=a.length!==0||c||n!==0||i;return i=c,n=a.length,f},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,c){t=p(a,c,0)},this.setState=function(a,c,f){const _=a.clippingPlanes,g=a.clipIntersection,m=a.clipShadows,d=r.get(a);if(!i||_===null||_.length===0||s&&!m)s?p(null):h();else{const x=s?0:n,v=x*4;let E=d.clippingState||null;u.value=E,E=p(_,c,v,f);for(let C=0;C!==v;++C)E[C]=t[C];d.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(a,c,f,_){const g=a!==null?a.length:0;let m=null;if(g!==0){if(m=u.value,_!==!0||m===null){const d=f+g*4,x=c.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,E=f;v!==g;++v,E+=4)l.copy(a[v]).applyMatrix4(x,o),l.normal.toArray(m,E),m[E+3]=l.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function xd(r){let e=new WeakMap;function t(l,o){return o===ms?l.mapping=fi:o===_s&&(l.mapping=pi),l}function n(l){if(l&&l.isTexture){const o=l.mapping;if(o===ms||o===_s)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const h=new Lc(u.height/2);return h.fromEquirectangularTexture(r,l),e.set(l,h),l.addEventListener("dispose",i),t(h.texture,l.mapping)}else return null}}return l}function i(l){const o=l.target;o.removeEventListener("dispose",i);const u=e.get(o);u!==void 0&&(e.delete(o),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Xo extends zo{constructor(e=-1,t=1,n=1,i=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,l=n+e,o=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,l=s+h*this.view.width,o-=p*this.view.offsetY,u=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,l,o,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=4,za=[.125,.215,.35,.446,.526,.582],Bn=20,Qr=new Xo,Va=new Ve;let es=null,ts=0,ns=0;const Fn=(1+Math.sqrt(5))/2,ai=1/Fn,Wa=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Fn,ai),new P(0,Fn,-ai),new P(ai,0,Fn),new P(-ai,0,Fn),new P(Fn,ai,0),new P(-Fn,ai,0)];class Xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){es=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),ns=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(es,ts,ns),e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),es=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),ns=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Ii,format:Kt,colorSpace:pn,depthBuffer:!1},i=qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Md(s)),this._blurMaterial=Sd(s,e,t)}return i}_compileMaterial(e){const t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,n,i){const o=new Bt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,a=p.autoClear,c=p.toneMapping;p.getClearColor(Va),p.toneMapping=fn,p.autoClear=!1;const f=new Tt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new ce(new ke,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Va),g=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,u[d],0),o.lookAt(h[d],0,0)):x===1?(o.up.set(0,0,u[d]),o.lookAt(0,h[d],0)):(o.up.set(0,u[d],0),o.lookAt(0,0,h[d]));const v=this._cubeSize;ar(i,x*v,d>2?v:0,v,v),p.setRenderTarget(i),g&&p.render(_,o),p.render(e,o)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=c,p.autoClear=a,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fi||e.mapping===pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const s=i?this._cubemapMaterial:this._equirectMaterial,l=new ce(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const u=this._cubeSize;ar(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(l,Qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=Wa[(i-1)%Wa.length];this._blur(e,i-1,i,s,l)}t.autoClear=n}_blur(e,t,n,i,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",s),this._halfBlur(l,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,l,o){const u=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,a=new ce(this._lodPlanes[i],h),c=h.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Bn-1),g=s/_,m=isFinite(s)?1+Math.floor(p*g):Bn;m>Bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bn}`);const d=[];let x=0;for(let A=0;A<Bn;++A){const G=A/g,M=Math.exp(-G*G/2);d.push(M),A===0?x+=M:A<m&&(x+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=d,c.latitudinal.value=l==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:v}=this;c.dTheta.value=_,c.mipInt.value=v-n;const E=this._sizeLods[i],C=3*E*(i>v-ci?i-v+ci:0),T=4*(this._cubeSize-E);ar(t,C,T,3*E,2*E),u.setRenderTarget(t),u.render(a,Qr)}}function Md(r){const e=[],t=[],n=[];let i=r;const s=r-ci+1+za.length;for(let l=0;l<s;l++){const o=Math.pow(2,i);t.push(o);let u=1/o;l>r-ci?u=za[l-r+ci-1]:l===0&&(u=0),n.push(u);const h=1/(o-2),p=-h,a=1+h,c=[p,p,a,p,a,a,p,p,a,a,p,a],f=6,_=6,g=3,m=2,d=1,x=new Float32Array(g*_*f),v=new Float32Array(m*_*f),E=new Float32Array(d*_*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,G=T>2?0:-1,M=[A,G,0,A+2/3,G,0,A+2/3,G+1,0,A,G,0,A+2/3,G+1,0,A,G+1,0];x.set(M,g*_*T),v.set(c,m*_*T);const w=[T,T,T,T,T,T];E.set(w,d*_*T)}const C=new Vt;C.setAttribute("position",new Qt(x,g)),C.setAttribute("uv",new Qt(v,m)),C.setAttribute("faceIndex",new Qt(E,d)),e.push(C),i>ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qa(r,e,t){const n=new zn(r,e,t);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Sd(r,e,t){const n=new Float32Array(Bn),i=new P(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ps(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ya(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ps(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function $a(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ps(){return`

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
	`}function yd(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const u=o.mapping,h=u===ms||u===_s,p=u===fi||u===pi;if(h||p)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let a=e.get(o);return t===null&&(t=new Xa(r)),a=h?t.fromEquirectangular(o,a):t.fromCubemap(o,a),e.set(o,a),a.texture}else{if(e.has(o))return e.get(o).texture;{const a=o.image;if(h&&a&&a.height>0||p&&a&&i(a)){t===null&&(t=new Xa(r));const c=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,c),o.addEventListener("dispose",s),c.texture}else return null}}}return o}function i(o){let u=0;const h=6;for(let p=0;p<h;p++)o[p]!==void 0&&u++;return u===h}function s(o){const u=o.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function Ed(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wd(r,e,t,n){const i={},s=new WeakMap;function l(a){const c=a.target;c.index!==null&&e.remove(c.index);for(const _ in c.attributes)e.remove(c.attributes[_]);for(const _ in c.morphAttributes){const g=c.morphAttributes[_];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}c.removeEventListener("dispose",l),delete i[c.id];const f=s.get(c);f&&(e.remove(f),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(a,c){return i[c.id]===!0||(c.addEventListener("dispose",l),i[c.id]=!0,t.memory.geometries++),c}function u(a){const c=a.attributes;for(const _ in c)e.update(c[_],r.ARRAY_BUFFER);const f=a.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,d=g.length;m<d;m++)e.update(g[m],r.ARRAY_BUFFER)}}function h(a){const c=[],f=a.index,_=a.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let v=0,E=x.length;v<E;v+=3){const C=x[v+0],T=x[v+1],A=x[v+2];c.push(C,T,T,A,A,C)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const C=v+0,T=v+1,A=v+2;c.push(C,T,T,A,A,C)}}else return;const m=new(Io(c)?Go:ko)(c,1);m.version=g;const d=s.get(a);d&&e.remove(d),s.set(a,m)}function p(a){const c=s.get(a);if(c){const f=a.index;f!==null&&c.version<f.version&&h(a)}else h(a);return s.get(a)}return{get:o,update:u,getWireframeAttribute:p}}function bd(r,e,t,n){const i=n.isWebGL2;let s;function l(f){s=f}let o,u;function h(f){o=f.type,u=f.bytesPerElement}function p(f,_){r.drawElements(s,_,o,f*u),t.update(_,s,1)}function a(f,_,g){if(g===0)return;let m,d;if(i)m=r,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,o,f*u,g),t.update(_,s,g)}function c(f,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<g;d++)this.render(f[d]/u,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,o,f,0,g);let d=0;for(let x=0;x<g;x++)d+=_[x];t.update(d,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=a,this.renderMultiDraw=c}function Td(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,o){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ad(r,e){return r[0]-e[0]}function Rd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Cd(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,l=new et,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function u(h,p,a){const c=h.morphTargetInfluences;if(e.isWebGL2===!0){const _=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(p);if(m===void 0||m.count!==g){let N=function(){Z.dispose(),s.delete(p),p.removeEventListener("dispose",N)};var f=N;m!==void 0&&m.texture.dispose();const v=p.morphAttributes.position!==void 0,E=p.morphAttributes.normal!==void 0,C=p.morphAttributes.color!==void 0,T=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],G=p.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),C===!0&&(M=3);let w=p.attributes.position.count*M,k=1;w>e.maxTextureSize&&(k=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const H=new Float32Array(w*k*4*g),Z=new Fo(H,w,k,g);Z.type=wn,Z.needsUpdate=!0;const L=M*4;for(let V=0;V<g;V++){const q=T[V],W=A[V],X=G[V],Y=w*k*4*V;for(let ee=0;ee<q.count;ee++){const te=ee*L;v===!0&&(l.fromBufferAttribute(q,ee),H[Y+te+0]=l.x,H[Y+te+1]=l.y,H[Y+te+2]=l.z,H[Y+te+3]=0),E===!0&&(l.fromBufferAttribute(W,ee),H[Y+te+4]=l.x,H[Y+te+5]=l.y,H[Y+te+6]=l.z,H[Y+te+7]=0),C===!0&&(l.fromBufferAttribute(X,ee),H[Y+te+8]=l.x,H[Y+te+9]=l.y,H[Y+te+10]=l.z,H[Y+te+11]=X.itemSize===4?l.w:1)}}m={count:g,texture:Z,size:new Ge(w,k)},s.set(p,m),p.addEventListener("dispose",N)}let d=0;for(let v=0;v<c.length;v++)d+=c[v];const x=p.morphTargetsRelative?1:1-d;a.getUniforms().setValue(r,"morphTargetBaseInfluence",x),a.getUniforms().setValue(r,"morphTargetInfluences",c),a.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),a.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=c===void 0?0:c.length;let g=n[p.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];n[p.id]=g}for(let E=0;E<_;E++){const C=g[E];C[0]=E,C[1]=c[E]}g.sort(Rd);for(let E=0;E<8;E++)E<_&&g[E][1]?(o[E][0]=g[E][0],o[E][1]=g[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Ad);const m=p.morphAttributes.position,d=p.morphAttributes.normal;let x=0;for(let E=0;E<8;E++){const C=o[E],T=C[0],A=C[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&p.getAttribute("morphTarget"+E)!==m[T]&&p.setAttribute("morphTarget"+E,m[T]),d&&p.getAttribute("morphNormal"+E)!==d[T]&&p.setAttribute("morphNormal"+E,d[T]),i[E]=A,x+=A):(m&&p.hasAttribute("morphTarget"+E)===!0&&p.deleteAttribute("morphTarget"+E),d&&p.hasAttribute("morphNormal"+E)===!0&&p.deleteAttribute("morphNormal"+E),i[E]=0)}const v=p.morphTargetsRelative?1:1-x;a.getUniforms().setValue(r,"morphTargetBaseInfluence",v),a.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:u}}function Pd(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,p=u.geometry,a=e.get(u,p);if(i.get(a)!==h&&(e.update(a),i.set(a,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const c=u.skeleton;i.get(c)!==h&&(c.update(),i.set(c,h))}return a}function l(){i=new WeakMap}function o(u){const h=u.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:l}}class qo extends Lt{constructor(e,t,n,i,s,l,o,u,h,p){if(p=p!==void 0?p:Gn,p!==Gn&&p!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===Gn&&(n=En),n===void 0&&p===mi&&(n=kn),super(null,i,s,l,o,u,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ct,this.minFilter=u!==void 0?u:ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yo=new Lt,$o=new qo(1,1);$o.compareFunction=Do;const jo=new Fo,Ko=new fc,Zo=new Vo,ja=[],Ka=[],Za=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function Mi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ja[i];if(s===void 0&&(s=new Float32Array(i),ja[i]=s),e!==0){n.toArray(s,0);for(let l=1,o=0;l!==e;++l)o+=t,r[l].toArray(s,o)}return s}function ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yr(r,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ld(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function Id(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function Ud(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function Nd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Qa.set(n),r.uniformMatrix2fv(this.addr,!1,Qa),ht(t,n)}}function Fd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Ja.set(n),r.uniformMatrix3fv(this.addr,!1,Ja),ht(t,n)}}function Od(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Za.set(n),r.uniformMatrix4fv(this.addr,!1,Za),ht(t,n)}}function Bd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function Gd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function Hd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function zd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Vd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function Wd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function Xd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function qd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?$o:Yo;t.setTexture2D(e||s,i)}function Yd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ko,i)}function $d(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zo,i)}function jd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jo,i)}function Kd(r){switch(r){case 5126:return Ld;case 35664:return Dd;case 35665:return Id;case 35666:return Ud;case 35674:return Nd;case 35675:return Fd;case 35676:return Od;case 5124:case 35670:return Bd;case 35667:case 35671:return kd;case 35668:case 35672:return Gd;case 35669:case 35673:return Hd;case 5125:return zd;case 36294:return Vd;case 36295:return Wd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return qd;case 35679:case 36299:case 36307:return Yd;case 35680:case 36300:case 36308:case 36293:return $d;case 36289:case 36303:case 36311:case 36292:return jd}}function Zd(r,e){r.uniform1fv(this.addr,e)}function Jd(r,e){const t=Mi(e,this.size,2);r.uniform2fv(this.addr,t)}function Qd(r,e){const t=Mi(e,this.size,3);r.uniform3fv(this.addr,t)}function ef(r,e){const t=Mi(e,this.size,4);r.uniform4fv(this.addr,t)}function tf(r,e){const t=Mi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function nf(r,e){const t=Mi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function rf(r,e){const t=Mi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function sf(r,e){r.uniform1iv(this.addr,e)}function af(r,e){r.uniform2iv(this.addr,e)}function of(r,e){r.uniform3iv(this.addr,e)}function lf(r,e){r.uniform4iv(this.addr,e)}function cf(r,e){r.uniform1uiv(this.addr,e)}function uf(r,e){r.uniform2uiv(this.addr,e)}function hf(r,e){r.uniform3uiv(this.addr,e)}function df(r,e){r.uniform4uiv(this.addr,e)}function ff(r,e,t){const n=this.cache,i=e.length,s=yr(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let l=0;l!==i;++l)t.setTexture2D(e[l]||Yo,s[l])}function pf(r,e,t){const n=this.cache,i=e.length,s=yr(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||Ko,s[l])}function mf(r,e,t){const n=this.cache,i=e.length,s=yr(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||Zo,s[l])}function _f(r,e,t){const n=this.cache,i=e.length,s=yr(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||jo,s[l])}function gf(r){switch(r){case 5126:return Zd;case 35664:return Jd;case 35665:return Qd;case 35666:return ef;case 35674:return tf;case 35675:return nf;case 35676:return rf;case 5124:case 35670:return sf;case 35667:case 35671:return af;case 35668:case 35672:return of;case 35669:case 35673:return lf;case 5125:return cf;case 36294:return uf;case 36295:return hf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return pf;case 35680:case 36300:case 36308:case 36293:return mf;case 36289:case 36303:case 36311:case 36292:return _f}}class vf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kd(t.type)}}class xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gf(t.type)}}class Mf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,l=i.length;s!==l;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const is=/(\w+)(\])?(\[|\.)?/g;function eo(r,e){r.seq.push(e),r.map[e.id]=e}function Sf(r,e,t){const n=r.name,i=n.length;for(is.lastIndex=0;;){const s=is.exec(n),l=is.lastIndex;let o=s[1];const u=s[2]==="]",h=s[3];if(u&&(o=o|0),h===void 0||h==="["&&l+2===i){eo(t,h===void 0?new vf(o,r,e):new xf(o,r,e));break}else{let a=t.map[o];a===void 0&&(a=new Mf(o),eo(t,a)),t=a}}}class lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),l=e.getUniformLocation(t,s.name);Sf(s,l,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,l=t.length;s!==l;++s){const o=t[s],u=n[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function to(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const yf=37297;let Ef=0;function wf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=i;l<s;l++){const o=l+1;n.push(`${o===e?">":" "} ${o}: ${t[l]}`)}return n.join(`
`)}function bf(r){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(r);let n;switch(e===t?n="":e===mr&&t===pr?n="LinearDisplayP3ToLinearSRGB":e===pr&&t===mr&&(n="LinearSRGBToLinearDisplayP3"),r){case pn:case Mr:return[n,"LinearTransferOETF"];case mt:case As:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function no(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+wf(r.getShaderSource(e),l)}else return i}function Tf(r,e){const t=bf(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Af(r,e){let t;switch(e){case Fl:t="Linear";break;case Ol:t="Reinhard";break;case Bl:t="OptimizedCineon";break;case kl:t="ACESFilmic";break;case Hl:t="AgX";break;case Gl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ui).join(`
`)}function Cf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ui).join(`
`)}function Pf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lf(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),l=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[l]={type:s.type,location:r.getAttribLocation(e,l),locationSize:o}}return t}function ui(r){return r!==""}function io(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ro(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Df=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ss(r){return r.replace(Df,Uf)}const If=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Uf(r,e){let t=De[e];if(t===void 0){const n=If.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ss(t)}const Nf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function so(r){return r.replace(Nf,Ff)}function Ff(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ao(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Of(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ws?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function Bf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fi:case pi:e="ENVMAP_TYPE_CUBE";break;case xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bs:e="ENVMAP_BLENDING_MULTIPLY";break;case Ul:e="ENVMAP_BLENDING_MIX";break;case Nl:e="ENVMAP_BLENDING_ADD";break}return e}function Hf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zf(r,e,t,n){const i=r.getContext(),s=t.defines;let l=t.vertexShader,o=t.fragmentShader;const u=Of(t),h=Bf(t),p=kf(t),a=Gf(t),c=Hf(t),f=t.isWebGL2?"":Rf(t),_=Cf(t),g=Pf(s),m=i.createProgram();let d,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ui).join(`
`),d.length>0&&(d+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ui).join(`
`),x.length>0&&(x+=`
`)):(d=[ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),x=[f,ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+a:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?De.tonemapping_pars_fragment:"",t.toneMapping!==fn?Af("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Tf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ui).join(`
`)),l=Ss(l),l=io(l,t),l=ro(l,t),o=Ss(o),o=io(o,t),o=ro(o,t),l=so(l),o=so(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=v+d+l,C=v+x+o,T=to(i,i.VERTEX_SHADER,E),A=to(i,i.FRAGMENT_SHADER,C);i.attachShader(m,T),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function G(H){if(r.debug.checkShaderErrors){const Z=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(T).trim(),N=i.getShaderInfoLog(A).trim();let V=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,T,A);else{const W=no(i,T,"vertex"),X=no(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+W+`
`+X)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||N==="")&&(q=!1);q&&(H.diagnostics={runnable:V,programLog:Z,vertexShader:{log:L,prefix:d},fragmentShader:{log:N,prefix:x}})}i.deleteShader(T),i.deleteShader(A),M=new lr(i,m),w=Lf(i,m)}let M;this.getUniforms=function(){return M===void 0&&G(this),M};let w;this.getAttributes=function(){return w===void 0&&G(this),w};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(m,yf)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ef++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let Vf=0;class Wf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xf(e),t.set(e,n)),n}}class Xf{constructor(e){this.id=Vf++,this.code=e,this.usedTimes=0}}function qf(r,e,t,n,i,s,l){const o=new Oo,u=new Wf,h=[],p=i.isWebGL2,a=i.logarithmicDepthBuffer,c=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,w,k,H,Z){const L=H.fog,N=Z.geometry,V=M.isMeshStandardMaterial?H.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),W=q&&q.mapping===xr?q.image.height:null,X=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=Y!==void 0?Y.length:0;let te=0;N.morphAttributes.position!==void 0&&(te=1),N.morphAttributes.normal!==void 0&&(te=2),N.morphAttributes.color!==void 0&&(te=3);let z,$,oe,_e;if(X){const Et=Jt[X];z=Et.vertexShader,$=Et.fragmentShader}else z=M.vertexShader,$=M.fragmentShader,u.update(M),oe=u.getVertexShaderID(M),_e=u.getFragmentShaderID(M);const me=r.getRenderTarget(),Re=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,ye=!!M.map,We=!!M.matcap,I=!!q,yt=!!M.aoMap,ve=!!M.lightMap,Te=!!M.bumpMap,de=!!M.normalMap,tt=!!M.displacementMap,Ie=!!M.emissiveMap,b=!!M.metalnessMap,S=!!M.roughnessMap,F=M.anisotropy>0,J=M.clearcoat>0,K=M.iridescence>0,Q=M.sheen>0,fe=M.transmission>0,ae=F&&!!M.anisotropyMap,ue=J&&!!M.clearcoatMap,Se=J&&!!M.clearcoatNormalMap,Ue=J&&!!M.clearcoatRoughnessMap,j=K&&!!M.iridescenceMap,Ye=K&&!!M.iridescenceThicknessMap,He=Q&&!!M.sheenColorMap,be=Q&&!!M.sheenRoughnessMap,ge=!!M.specularMap,he=!!M.specularColorMap,Le=!!M.specularIntensityMap,qe=fe&&!!M.transmissionMap,it=fe&&!!M.thicknessMap,Fe=!!M.gradientMap,ne=!!M.alphaMap,R=M.alphaTest>0,re=!!M.alphaHash,se=!!M.extensions,Ee=!!N.attributes.uv1,xe=!!N.attributes.uv2,Ke=!!N.attributes.uv3;let Ze=fn;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ze=r.toneMapping),{isWebGL2:p,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:$,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Pe,instancing:Re,instancingColor:Re&&Z.instanceColor!==null,supportsVertexTextures:c,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:pn,map:ye,matcap:We,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:W,aoMap:yt,lightMap:ve,bumpMap:Te,normalMap:de,displacementMap:c&&tt,emissiveMap:Ie,normalMapObjectSpace:de&&M.normalMapType===Ql,normalMapTangentSpace:de&&M.normalMapType===Lo,metalnessMap:b,roughnessMap:S,anisotropy:F,anisotropyMap:ae,clearcoat:J,clearcoatMap:ue,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ue,iridescence:K,iridescenceMap:j,iridescenceThicknessMap:Ye,sheen:Q,sheenColorMap:He,sheenRoughnessMap:be,specularMap:ge,specularColorMap:he,specularIntensityMap:Le,transmission:fe,transmissionMap:qe,thicknessMap:it,gradientMap:Fe,opaque:M.transparent===!1&&M.blending===hi,alphaMap:ne,alphaTest:R,alphaHash:re,combine:M.combine,mapUv:ye&&g(M.map.channel),aoMapUv:yt&&g(M.aoMap.channel),lightMapUv:ve&&g(M.lightMap.channel),bumpMapUv:Te&&g(M.bumpMap.channel),normalMapUv:de&&g(M.normalMap.channel),displacementMapUv:tt&&g(M.displacementMap.channel),emissiveMapUv:Ie&&g(M.emissiveMap.channel),metalnessMapUv:b&&g(M.metalnessMap.channel),roughnessMapUv:S&&g(M.roughnessMap.channel),anisotropyMapUv:ae&&g(M.anisotropyMap.channel),clearcoatMapUv:ue&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(M.sheenRoughnessMap.channel),specularMapUv:ge&&g(M.specularMap.channel),specularColorMapUv:he&&g(M.specularColorMap.channel),specularIntensityMapUv:Le&&g(M.specularIntensityMap.channel),transmissionMapUv:qe&&g(M.transmissionMap.channel),thicknessMapUv:it&&g(M.thicknessMap.channel),alphaMapUv:ne&&g(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(de||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:xe,vertexUv3s:Ke,pointsUvs:Z.isPoints===!0&&!!N.attributes.uv&&(ye||ne),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:Z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===St,flipSided:M.side===Pt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:se&&M.extensions.derivatives===!0,extensionFragDepth:se&&M.extensions.fragDepth===!0,extensionDrawBuffers:se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)w.push(k),w.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(x(w,M),v(w,M),w.push(r.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function E(M){const w=_[M.type];let k;if(w){const H=Jt[w];k=Ac.clone(H.uniforms)}else k=M.uniforms;return k}function C(M,w){let k;for(let H=0,Z=h.length;H<Z;H++){const L=h[H];if(L.cacheKey===w){k=L,++k.usedTimes;break}}return k===void 0&&(k=new zf(r,w,M,s),h.push(k)),k}function T(M){if(--M.usedTimes===0){const w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),M.destroy()}}function A(M){u.remove(M)}function G(){u.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:G}}function Yf(){let r=new WeakMap;function e(s){let l=r.get(s);return l===void 0&&(l={},r.set(s,l)),l}function t(s){r.delete(s)}function n(s,l,o){r.get(s)[l]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $f(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function oo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lo(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function l(a,c,f,_,g,m){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:c,material:f,groupOrder:_,renderOrder:a.renderOrder,z:g,group:m},r[e]=d):(d.id=a.id,d.object=a,d.geometry=c,d.material=f,d.groupOrder=_,d.renderOrder=a.renderOrder,d.z=g,d.group=m),e++,d}function o(a,c,f,_,g,m){const d=l(a,c,f,_,g,m);f.transmission>0?n.push(d):f.transparent===!0?i.push(d):t.push(d)}function u(a,c,f,_,g,m){const d=l(a,c,f,_,g,m);f.transmission>0?n.unshift(d):f.transparent===!0?i.unshift(d):t.unshift(d)}function h(a,c){t.length>1&&t.sort(a||$f),n.length>1&&n.sort(c||oo),i.length>1&&i.sort(c||oo)}function p(){for(let a=e,c=r.length;a<c;a++){const f=r[a];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:u,finish:p,sort:h}}function jf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let l;return s===void 0?(l=new lo,r.set(n,[l])):i>=s.length?(l=new lo,s.push(l)):l=s[i],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function Kf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ve};break;case"SpotLight":t={position:new P,direction:new P,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function Zf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Jf=0;function Qf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ep(r,e){const t=new Kf,n=Zf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new P);const s=new P,l=new lt,o=new lt;function u(p,a){let c=0,f=0,_=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,m=0,d=0,x=0,v=0,E=0,C=0,T=0,A=0,G=0,M=0;p.sort(Qf);const w=a===!0?Math.PI:1;for(let H=0,Z=p.length;H<Z;H++){const L=p[H],N=L.color,V=L.intensity,q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=N.r*V*w,f+=N.g*V*w,_+=N.b*V*w;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],V);M++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const Y=L.shadow,ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=W,i.directionalShadowMatrix[g]=L.shadow.matrix,E++}i.directional[g]=X,g++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(V*w),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[d]=X;const Y=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,Y.updateMatrices(L),L.castShadow&&G++),i.spotLightMatrix[d]=Y.matrix,L.castShadow){const ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,i.spotShadow[d]=ee,i.spotShadowMap[d]=W,T++}d++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(N).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=X,x++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*w),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Y=L.shadow,ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=L.shadow.matrix,C++}i.point[m]=X,m++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V*w),X.groundColor.copy(L.groundColor).multiplyScalar(V*w),i.hemi[v]=X,v++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=_;const k=i.hash;(k.directionalLength!==g||k.pointLength!==m||k.spotLength!==d||k.rectAreaLength!==x||k.hemiLength!==v||k.numDirectionalShadows!==E||k.numPointShadows!==C||k.numSpotShadows!==T||k.numSpotMaps!==A||k.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=T+A-G,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=G,i.numLightProbes=M,k.directionalLength=g,k.pointLength=m,k.spotLength=d,k.rectAreaLength=x,k.hemiLength=v,k.numDirectionalShadows=E,k.numPointShadows=C,k.numSpotShadows=T,k.numSpotMaps=A,k.numLightProbes=M,i.version=Jf++)}function h(p,a){let c=0,f=0,_=0,g=0,m=0;const d=a.matrixWorldInverse;for(let x=0,v=p.length;x<v;x++){const E=p[x];if(E.isDirectionalLight){const C=i.directional[c];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),c++}else if(E.isSpotLight){const C=i.spot[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const C=i.rectArea[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(d),o.identity(),l.copy(E.matrixWorld),l.premultiply(d),o.extractRotation(l),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const C=i.point[f];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(d),f++}else if(E.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:u,setupView:h,state:i}}function co(r,e){const t=new ep(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function l(a){n.push(a)}function o(a){i.push(a)}function u(a){t.setup(n,a)}function h(a){t.setupView(n,a)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:h,pushLight:l,pushShadow:o}}function tp(r,e){let t=new WeakMap;function n(s,l=0){const o=t.get(s);let u;return o===void 0?(u=new co(r,e),t.set(s,[u])):l>=o.length?(u=new co(r,e),o.push(u)):u=o[l],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class np extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ip extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sp=`uniform sampler2D shadow_pass;
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
}`;function ap(r,e,t){let n=new Cs;const i=new Ge,s=new Ge,l=new et,o=new np({depthPacking:Jl}),u=new ip,h={},p=t.maxTextureSize,a={[An]:Pt,[Pt]:An,[St]:St},c=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:rp,fragmentShader:sp}),f=c.clone();f.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ce(_,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let d=this.type;this.render=function(T,A,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=r.getRenderTarget(),w=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),H=r.state;H.setBlending(bn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Z=d!==un&&this.type===un,L=d===un&&this.type!==un;for(let N=0,V=T.length;N<V;N++){const q=T[N],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const X=W.getFrameExtents();if(i.multiply(X),s.copy(W.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(s.x=Math.floor(p/X.x),i.x=s.x*X.x,W.mapSize.x=s.x),i.y>p&&(s.y=Math.floor(p/X.y),i.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||Z===!0||L===!0){const ee=this.type!==un?{minFilter:ct,magFilter:ct}:{};W.map!==null&&W.map.dispose(),W.map=new zn(i.x,i.y,ee),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const Y=W.getViewportCount();for(let ee=0;ee<Y;ee++){const te=W.getViewport(ee);l.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),H.viewport(l),W.updateMatrices(q,ee),n=W.getFrustum(),E(A,G,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===un&&x(W,G),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(M,w,k)};function x(T,A){const G=e.update(g);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zn(i.x,i.y)),c.uniforms.shadow_pass.value=T.map.texture,c.uniforms.resolution.value=T.mapSize,c.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,G,c,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,G,f,g,null)}function v(T,A,G,M){let w=null;const k=G.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)w=k;else if(w=G.isPointLight===!0?u:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=w.uuid,Z=A.uuid;let L=h[H];L===void 0&&(L={},h[H]=L);let N=L[Z];N===void 0&&(N=w.clone(),L[Z]=N,A.addEventListener("dispose",C)),w=N}if(w.visible=A.visible,w.wireframe=A.wireframe,M===un?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:a[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=r.properties.get(w);H.light=G}return w}function E(T,A,G,M,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===un)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld);const Z=e.update(T),L=T.material;if(Array.isArray(L)){const N=Z.groups;for(let V=0,q=N.length;V<q;V++){const W=N[V],X=L[W.materialIndex];if(X&&X.visible){const Y=v(T,X,M,w);T.onBeforeShadow(r,T,A,G,Z,Y,W),r.renderBufferDirect(G,null,Z,Y,T,W),T.onAfterShadow(r,T,A,G,Z,Y,W)}}}else if(L.visible){const N=v(T,L,M,w);T.onBeforeShadow(r,T,A,G,Z,N,null),r.renderBufferDirect(G,null,Z,N,T,null),T.onAfterShadow(r,T,A,G,Z,N,null)}}const H=T.children;for(let Z=0,L=H.length;Z<L;Z++)E(H[Z],A,G,M,w)}function C(T){T.target.removeEventListener("dispose",C);for(const G in h){const M=h[G],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function op(r,e,t){const n=t.isWebGL2;function i(){let R=!1;const re=new et;let se=null;const Ee=new et(0,0,0,0);return{setMask:function(xe){se!==xe&&!R&&(r.colorMask(xe,xe,xe,xe),se=xe)},setLocked:function(xe){R=xe},setClear:function(xe,Ke,Ze,dt,Et){Et===!0&&(xe*=dt,Ke*=dt,Ze*=dt),re.set(xe,Ke,Ze,dt),Ee.equals(re)===!1&&(r.clearColor(xe,Ke,Ze,dt),Ee.copy(re))},reset:function(){R=!1,se=null,Ee.set(-1,0,0,0)}}}function s(){let R=!1,re=null,se=null,Ee=null;return{setTest:function(xe){xe?Pe(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(xe){re!==xe&&!R&&(r.depthMask(xe),re=xe)},setFunc:function(xe){if(se!==xe){switch(xe){case Al:r.depthFunc(r.NEVER);break;case Rl:r.depthFunc(r.ALWAYS);break;case Cl:r.depthFunc(r.LESS);break;case hr:r.depthFunc(r.LEQUAL);break;case Pl:r.depthFunc(r.EQUAL);break;case Ll:r.depthFunc(r.GEQUAL);break;case Dl:r.depthFunc(r.GREATER);break;case Il:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}se=xe}},setLocked:function(xe){R=xe},setClear:function(xe){Ee!==xe&&(r.clearDepth(xe),Ee=xe)},reset:function(){R=!1,re=null,se=null,Ee=null}}}function l(){let R=!1,re=null,se=null,Ee=null,xe=null,Ke=null,Ze=null,dt=null,Et=null;return{setTest:function(Je){R||(Je?Pe(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(Je){re!==Je&&!R&&(r.stencilMask(Je),re=Je)},setFunc:function(Je,wt,Zt){(se!==Je||Ee!==wt||xe!==Zt)&&(r.stencilFunc(Je,wt,Zt),se=Je,Ee=wt,xe=Zt)},setOp:function(Je,wt,Zt){(Ke!==Je||Ze!==wt||dt!==Zt)&&(r.stencilOp(Je,wt,Zt),Ke=Je,Ze=wt,dt=Zt)},setLocked:function(Je){R=Je},setClear:function(Je){Et!==Je&&(r.clearStencil(Je),Et=Je)},reset:function(){R=!1,re=null,se=null,Ee=null,xe=null,Ke=null,Ze=null,dt=null,Et=null}}}const o=new i,u=new s,h=new l,p=new WeakMap,a=new WeakMap;let c={},f={},_=new WeakMap,g=[],m=null,d=!1,x=null,v=null,E=null,C=null,T=null,A=null,G=null,M=new Ve(0,0,0),w=0,k=!1,H=null,Z=null,L=null,N=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=X>=2);let ee=null,te={};const z=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),oe=new et().fromArray(z),_e=new et().fromArray($);function me(R,re,se,Ee){const xe=new Uint8Array(4),Ke=r.createTexture();r.bindTexture(R,Ke),r.texParameteri(R,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(R,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<se;Ze++)n&&(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)?r.texImage3D(re,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(re+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return Ke}const Re={};Re[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Pe(r.DEPTH_TEST),u.setFunc(hr),Ie(!1),b(Ws),Pe(r.CULL_FACE),de(bn);function Pe(R){c[R]!==!0&&(r.enable(R),c[R]=!0)}function ye(R){c[R]!==!1&&(r.disable(R),c[R]=!1)}function We(R,re){return f[R]!==re?(r.bindFramebuffer(R,re),f[R]=re,n&&(R===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=re),R===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=re)),!0):!1}function I(R,re){let se=g,Ee=!1;if(R)if(se=_.get(re),se===void 0&&(se=[],_.set(re,se)),R.isWebGLMultipleRenderTargets){const xe=R.texture;if(se.length!==xe.length||se[0]!==r.COLOR_ATTACHMENT0){for(let Ke=0,Ze=xe.length;Ke<Ze;Ke++)se[Ke]=r.COLOR_ATTACHMENT0+Ke;se.length=xe.length,Ee=!0}}else se[0]!==r.COLOR_ATTACHMENT0&&(se[0]=r.COLOR_ATTACHMENT0,Ee=!0);else se[0]!==r.BACK&&(se[0]=r.BACK,Ee=!0);Ee&&(t.isWebGL2?r.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function yt(R){return m!==R?(r.useProgram(R),m=R,!0):!1}const ve={[On]:r.FUNC_ADD,[dl]:r.FUNC_SUBTRACT,[fl]:r.FUNC_REVERSE_SUBTRACT};if(n)ve[$s]=r.MIN,ve[js]=r.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ve[$s]=R.MIN_EXT,ve[js]=R.MAX_EXT)}const Te={[pl]:r.ZERO,[ml]:r.ONE,[_l]:r.SRC_COLOR,[fs]:r.SRC_ALPHA,[yl]:r.SRC_ALPHA_SATURATE,[Ml]:r.DST_COLOR,[vl]:r.DST_ALPHA,[gl]:r.ONE_MINUS_SRC_COLOR,[ps]:r.ONE_MINUS_SRC_ALPHA,[Sl]:r.ONE_MINUS_DST_COLOR,[xl]:r.ONE_MINUS_DST_ALPHA,[El]:r.CONSTANT_COLOR,[wl]:r.ONE_MINUS_CONSTANT_COLOR,[bl]:r.CONSTANT_ALPHA,[Tl]:r.ONE_MINUS_CONSTANT_ALPHA};function de(R,re,se,Ee,xe,Ke,Ze,dt,Et,Je){if(R===bn){d===!0&&(ye(r.BLEND),d=!1);return}if(d===!1&&(Pe(r.BLEND),d=!0),R!==hl){if(R!==x||Je!==k){if((v!==On||T!==On)&&(r.blendEquation(r.FUNC_ADD),v=On,T=On),Je)switch(R){case hi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xs:r.blendFunc(r.ONE,r.ONE);break;case qs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ys:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case hi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xs:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ys:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,C=null,A=null,G=null,M.set(0,0,0),w=0,x=R,k=Je}return}xe=xe||re,Ke=Ke||se,Ze=Ze||Ee,(re!==v||xe!==T)&&(r.blendEquationSeparate(ve[re],ve[xe]),v=re,T=xe),(se!==E||Ee!==C||Ke!==A||Ze!==G)&&(r.blendFuncSeparate(Te[se],Te[Ee],Te[Ke],Te[Ze]),E=se,C=Ee,A=Ke,G=Ze),(dt.equals(M)===!1||Et!==w)&&(r.blendColor(dt.r,dt.g,dt.b,Et),M.copy(dt),w=Et),x=R,k=!1}function tt(R,re){R.side===St?ye(r.CULL_FACE):Pe(r.CULL_FACE);let se=R.side===Pt;re&&(se=!se),Ie(se),R.blending===hi&&R.transparent===!1?de(bn):de(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),u.setFunc(R.depthFunc),u.setTest(R.depthTest),u.setMask(R.depthWrite),o.setMask(R.colorWrite);const Ee=R.stencilWrite;h.setTest(Ee),Ee&&(h.setMask(R.stencilWriteMask),h.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),h.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),F(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(R){H!==R&&(R?r.frontFace(r.CW):r.frontFace(r.CCW),H=R)}function b(R){R!==ll?(Pe(r.CULL_FACE),R!==Z&&(R===Ws?r.cullFace(r.BACK):R===cl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),Z=R}function S(R){R!==L&&(W&&r.lineWidth(R),L=R)}function F(R,re,se){R?(Pe(r.POLYGON_OFFSET_FILL),(N!==re||V!==se)&&(r.polygonOffset(re,se),N=re,V=se)):ye(r.POLYGON_OFFSET_FILL)}function J(R){R?Pe(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function K(R){R===void 0&&(R=r.TEXTURE0+q-1),ee!==R&&(r.activeTexture(R),ee=R)}function Q(R,re,se){se===void 0&&(ee===null?se=r.TEXTURE0+q-1:se=ee);let Ee=te[se];Ee===void 0&&(Ee={type:void 0,texture:void 0},te[se]=Ee),(Ee.type!==R||Ee.texture!==re)&&(ee!==se&&(r.activeTexture(se),ee=se),r.bindTexture(R,re||Re[R]),Ee.type=R,Ee.texture=re)}function fe(){const R=te[ee];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(R){oe.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),oe.copy(R))}function qe(R){_e.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function it(R,re){let se=a.get(re);se===void 0&&(se=new WeakMap,a.set(re,se));let Ee=se.get(R);Ee===void 0&&(Ee=r.getUniformBlockIndex(re,R.name),se.set(R,Ee))}function Fe(R,re){const Ee=a.get(re).get(R);p.get(re)!==Ee&&(r.uniformBlockBinding(re,Ee,R.__bindingPointIndex),p.set(re,Ee))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},ee=null,te={},f={},_=new WeakMap,g=[],m=null,d=!1,x=null,v=null,E=null,C=null,T=null,A=null,G=null,M=new Ve(0,0,0),w=0,k=!1,H=null,Z=null,L=null,N=null,V=null,oe.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),o.reset(),u.reset(),h.reset()}return{buffers:{color:o,depth:u,stencil:h},enable:Pe,disable:ye,bindFramebuffer:We,drawBuffers:I,useProgram:yt,setBlending:de,setMaterial:tt,setFlipSided:Ie,setCullFace:b,setLineWidth:S,setPolygonOffset:F,setScissorTest:J,activeTexture:K,bindTexture:Q,unbindTexture:fe,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:ge,texImage3D:he,updateUBOMapping:it,uniformBlockBinding:Fe,texStorage2D:He,texStorage3D:be,texSubImage2D:Se,texSubImage3D:Ue,compressedTexSubImage2D:j,compressedTexSubImage3D:Ye,scissor:Le,viewport:qe,reset:ne}}function lp(r,e,t,n,i,s,l){const o=i.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let a;const c=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,S){return f?new OffscreenCanvas(b,S):gr("canvas")}function g(b,S,F,J){let K=1;if((b.width>J||b.height>J)&&(K=J/Math.max(b.width,b.height)),K<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const Q=S?Ms:Math.floor,fe=Q(K*b.width),ae=Q(K*b.height);a===void 0&&(a=_(fe,ae));const ue=F?_(fe,ae):a;return ue.width=fe,ue.height=ae,ue.getContext("2d").drawImage(b,0,0,fe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+ae+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ba(b.width)&&ba(b.height)}function d(b){return o?!1:b.wrapS!==jt||b.wrapT!==jt||b.minFilter!==ct&&b.minFilter!==Ht}function x(b,S){return b.generateMipmaps&&S&&b.minFilter!==ct&&b.minFilter!==Ht}function v(b){r.generateMipmap(b)}function E(b,S,F,J,K=!1){if(o===!1)return S;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=S;if(S===r.RED&&(F===r.FLOAT&&(Q=r.R32F),F===r.HALF_FLOAT&&(Q=r.R16F),F===r.UNSIGNED_BYTE&&(Q=r.R8)),S===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(Q=r.R8UI),F===r.UNSIGNED_SHORT&&(Q=r.R16UI),F===r.UNSIGNED_INT&&(Q=r.R32UI),F===r.BYTE&&(Q=r.R8I),F===r.SHORT&&(Q=r.R16I),F===r.INT&&(Q=r.R32I)),S===r.RG&&(F===r.FLOAT&&(Q=r.RG32F),F===r.HALF_FLOAT&&(Q=r.RG16F),F===r.UNSIGNED_BYTE&&(Q=r.RG8)),S===r.RGBA){const fe=K?fr:$e.getTransfer(J);F===r.FLOAT&&(Q=r.RGBA32F),F===r.HALF_FLOAT&&(Q=r.RGBA16F),F===r.UNSIGNED_BYTE&&(Q=fe===Qe?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function C(b,S,F){return x(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==ct&&b.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function T(b){return b===ct||b===Ks||b===Rr?r.NEAREST:r.LINEAR}function A(b){const S=b.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&p.delete(S)}function G(b){const S=b.target;S.removeEventListener("dispose",G),k(S)}function M(b){const S=n.get(b);if(S.__webglInit===void 0)return;const F=b.source,J=c.get(F);if(J){const K=J[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(b),Object.keys(J).length===0&&c.delete(F)}n.remove(b)}function w(b){const S=n.get(b);r.deleteTexture(S.__webglTexture);const F=b.source,J=c.get(F);delete J[S.__cacheKey],l.memory.textures--}function k(b){const S=b.texture,F=n.get(b),J=n.get(S);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),l.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(F.__webglFramebuffer[K]))for(let Q=0;Q<F.__webglFramebuffer[K].length;Q++)r.deleteFramebuffer(F.__webglFramebuffer[K][Q]);else r.deleteFramebuffer(F.__webglFramebuffer[K]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[K])}else{if(Array.isArray(F.__webglFramebuffer))for(let K=0;K<F.__webglFramebuffer.length;K++)r.deleteFramebuffer(F.__webglFramebuffer[K]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let K=0;K<F.__webglColorRenderbuffer.length;K++)F.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[K]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let K=0,Q=S.length;K<Q;K++){const fe=n.get(S[K]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),l.memory.textures--),n.remove(S[K])}n.remove(S),n.remove(b)}let H=0;function Z(){H=0}function L(){const b=H;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),H+=1,b}function N(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function V(b,S){const F=n.get(b);if(b.isVideoTexture&&tt(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,b,S);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+S)}function q(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){oe(F,b,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+S)}function W(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){oe(F,b,S);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+S)}function X(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){_e(F,b,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+S)}const Y={[dr]:r.REPEAT,[jt]:r.CLAMP_TO_EDGE,[gs]:r.MIRRORED_REPEAT},ee={[ct]:r.NEAREST,[Ks]:r.NEAREST_MIPMAP_NEAREST,[Rr]:r.NEAREST_MIPMAP_LINEAR,[Ht]:r.LINEAR,[zl]:r.LINEAR_MIPMAP_NEAREST,[Di]:r.LINEAR_MIPMAP_LINEAR},te={[ec]:r.NEVER,[ac]:r.ALWAYS,[tc]:r.LESS,[Do]:r.LEQUAL,[nc]:r.EQUAL,[sc]:r.GEQUAL,[ic]:r.GREATER,[rc]:r.NOTEQUAL};function z(b,S,F){if(F?(r.texParameteri(b,r.TEXTURE_WRAP_S,Y[S.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,Y[S.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,Y[S.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,ee[S.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,ee[S.minFilter])):(r.texParameteri(b,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(b,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==jt||S.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,r.TEXTURE_MAG_FILTER,T(S.magFilter)),r.texParameteri(b,r.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==ct&&S.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===ct||S.minFilter!==Rr&&S.minFilter!==Di||S.type===wn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ii&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function $(b,S){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const J=S.source;let K=c.get(J);K===void 0&&(K={},c.set(J,K));const Q=N(S);if(Q!==b.__cacheKey){K[Q]===void 0&&(K[Q]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,F=!0),K[Q].usedTimes++;const fe=K[b.__cacheKey];fe!==void 0&&(K[b.__cacheKey].usedTimes--,fe.usedTimes===0&&w(S)),b.__cacheKey=Q,b.__webglTexture=K[Q].texture}return F}function oe(b,S,F){let J=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=r.TEXTURE_3D);const K=$(b,S),Q=S.source;t.bindTexture(J,b.__webglTexture,r.TEXTURE0+F);const fe=n.get(Q);if(Q.version!==fe.__version||K===!0){t.activeTexture(r.TEXTURE0+F);const ae=$e.getPrimaries($e.workingColorSpace),ue=S.colorSpace===zt?null:$e.getPrimaries(S.colorSpace),Se=S.colorSpace===zt||ae===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ue=d(S)&&m(S.image)===!1;let j=g(S.image,Ue,!1,i.maxTextureSize);j=Ie(S,j);const Ye=m(j)||o,He=s.convert(S.format,S.colorSpace);let be=s.convert(S.type),ge=E(S.internalFormat,He,be,S.colorSpace,S.isVideoTexture);z(J,S,Ye);let he;const Le=S.mipmaps,qe=o&&S.isVideoTexture!==!0&&ge!==Co,it=fe.__version===void 0||K===!0,Fe=C(S,j,Ye);if(S.isDepthTexture)ge=r.DEPTH_COMPONENT,o?S.type===wn?ge=r.DEPTH_COMPONENT32F:S.type===En?ge=r.DEPTH_COMPONENT24:S.type===kn?ge=r.DEPTH24_STENCIL8:ge=r.DEPTH_COMPONENT16:S.type===wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Gn&&ge===r.DEPTH_COMPONENT&&S.type!==Ts&&S.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=En,be=s.convert(S.type)),S.format===mi&&ge===r.DEPTH_COMPONENT&&(ge=r.DEPTH_STENCIL,S.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=kn,be=s.convert(S.type))),it&&(qe?t.texStorage2D(r.TEXTURE_2D,1,ge,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,ge,j.width,j.height,0,He,be,null));else if(S.isDataTexture)if(Le.length>0&&Ye){qe&&it&&t.texStorage2D(r.TEXTURE_2D,Fe,ge,Le[0].width,Le[0].height);for(let ne=0,R=Le.length;ne<R;ne++)he=Le[ne],qe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,He,be,he.data):t.texImage2D(r.TEXTURE_2D,ne,ge,he.width,he.height,0,He,be,he.data);S.generateMipmaps=!1}else qe?(it&&t.texStorage2D(r.TEXTURE_2D,Fe,ge,j.width,j.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,j.width,j.height,He,be,j.data)):t.texImage2D(r.TEXTURE_2D,0,ge,j.width,j.height,0,He,be,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,ge,Le[0].width,Le[0].height,j.depth);for(let ne=0,R=Le.length;ne<R;ne++)he=Le[ne],S.format!==Kt?He!==null?qe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,j.depth,He,he.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,j.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,j.depth,He,be,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,j.depth,0,He,be,he.data)}else{qe&&it&&t.texStorage2D(r.TEXTURE_2D,Fe,ge,Le[0].width,Le[0].height);for(let ne=0,R=Le.length;ne<R;ne++)he=Le[ne],S.format!==Kt?He!==null?qe?t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,He,he.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,He,be,he.data):t.texImage2D(r.TEXTURE_2D,ne,ge,he.width,he.height,0,He,be,he.data)}else if(S.isDataArrayTexture)qe?(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,ge,j.width,j.height,j.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,He,be,j.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,j.width,j.height,j.depth,0,He,be,j.data);else if(S.isData3DTexture)qe?(it&&t.texStorage3D(r.TEXTURE_3D,Fe,ge,j.width,j.height,j.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,He,be,j.data)):t.texImage3D(r.TEXTURE_3D,0,ge,j.width,j.height,j.depth,0,He,be,j.data);else if(S.isFramebufferTexture){if(it)if(qe)t.texStorage2D(r.TEXTURE_2D,Fe,ge,j.width,j.height);else{let ne=j.width,R=j.height;for(let re=0;re<Fe;re++)t.texImage2D(r.TEXTURE_2D,re,ge,ne,R,0,He,be,null),ne>>=1,R>>=1}}else if(Le.length>0&&Ye){qe&&it&&t.texStorage2D(r.TEXTURE_2D,Fe,ge,Le[0].width,Le[0].height);for(let ne=0,R=Le.length;ne<R;ne++)he=Le[ne],qe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,He,be,he):t.texImage2D(r.TEXTURE_2D,ne,ge,He,be,he);S.generateMipmaps=!1}else qe?(it&&t.texStorage2D(r.TEXTURE_2D,Fe,ge,j.width,j.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,be,j)):t.texImage2D(r.TEXTURE_2D,0,ge,He,be,j);x(S,Ye)&&v(J),fe.__version=Q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function _e(b,S,F){if(S.image.length!==6)return;const J=$(b,S),K=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+F);const Q=n.get(K);if(K.version!==Q.__version||J===!0){t.activeTexture(r.TEXTURE0+F);const fe=$e.getPrimaries($e.workingColorSpace),ae=S.colorSpace===zt?null:$e.getPrimaries(S.colorSpace),ue=S.colorSpace===zt||fe===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,Ue=S.image[0]&&S.image[0].isDataTexture,j=[];for(let ne=0;ne<6;ne++)!Se&&!Ue?j[ne]=g(S.image[ne],!1,!0,i.maxCubemapSize):j[ne]=Ue?S.image[ne].image:S.image[ne],j[ne]=Ie(S,j[ne]);const Ye=j[0],He=m(Ye)||o,be=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),he=E(S.internalFormat,be,ge,S.colorSpace),Le=o&&S.isVideoTexture!==!0,qe=Q.__version===void 0||J===!0;let it=C(S,Ye,He);z(r.TEXTURE_CUBE_MAP,S,He);let Fe;if(Se){Le&&qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,it,he,Ye.width,Ye.height);for(let ne=0;ne<6;ne++){Fe=j[ne].mipmaps;for(let R=0;R<Fe.length;R++){const re=Fe[R];S.format!==Kt?be!==null?Le?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,re.width,re.height,be,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,he,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,re.width,re.height,be,ge,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,he,re.width,re.height,0,be,ge,re.data)}}}else{Fe=S.mipmaps,Le&&qe&&(Fe.length>0&&it++,t.texStorage2D(r.TEXTURE_CUBE_MAP,it,he,j[0].width,j[0].height));for(let ne=0;ne<6;ne++)if(Ue){Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,j[ne].width,j[ne].height,be,ge,j[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,j[ne].width,j[ne].height,0,be,ge,j[ne].data);for(let R=0;R<Fe.length;R++){const se=Fe[R].image[ne].image;Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,se.width,se.height,be,ge,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,he,se.width,se.height,0,be,ge,se.data)}}else{Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,be,ge,j[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,be,ge,j[ne]);for(let R=0;R<Fe.length;R++){const re=Fe[R];Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,be,ge,re.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,he,be,ge,re.image[ne])}}}x(S,He)&&v(r.TEXTURE_CUBE_MAP),Q.__version=K.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function me(b,S,F,J,K,Q){const fe=s.convert(F.format,F.colorSpace),ae=s.convert(F.type),ue=E(F.internalFormat,fe,ae,F.colorSpace);if(!n.get(S).__hasExternalTextures){const Ue=Math.max(1,S.width>>Q),j=Math.max(1,S.height>>Q);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,Q,ue,Ue,j,S.depth,0,fe,ae,null):t.texImage2D(K,Q,ue,Ue,j,0,fe,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),de(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,K,n.get(F).__webglTexture,0,Te(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,K,n.get(F).__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(b,S,F){if(r.bindRenderbuffer(r.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let J=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||de(S)){const K=S.depthTexture;K&&K.isDepthTexture&&(K.type===wn?J=r.DEPTH_COMPONENT32F:K.type===En&&(J=r.DEPTH_COMPONENT24));const Q=Te(S);de(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,J,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,J,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const J=Te(S);F&&de(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,S.width,S.height):de(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,b)}else{const J=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0;K<J.length;K++){const Q=J[K],fe=s.convert(Q.format,Q.colorSpace),ae=s.convert(Q.type),ue=E(Q.internalFormat,fe,ae,Q.colorSpace),Se=Te(S);F&&de(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,ue,S.width,S.height):de(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,ue,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ue,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,K=Te(S);if(S.depthTexture.format===Gn)de(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(S.depthTexture.format===mi)de(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ye(b){const S=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(S.__webglFramebuffer,b)}else if(F){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=r.createRenderbuffer(),Re(S.__webglDepthbuffer[J],b,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Re(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(b,S,F){const J=n.get(b);S!==void 0&&me(J.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&ye(b)}function I(b){const S=b.texture,F=n.get(b),J=n.get(S);b.addEventListener("dispose",G),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=S.version,l.memory.textures++);const K=b.isWebGLCubeRenderTarget===!0,Q=b.isWebGLMultipleRenderTargets===!0,fe=m(b)||o;if(K){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let ue=0;ue<S.mipmaps.length;ue++)F.__webglFramebuffer[ae][ue]=r.createFramebuffer()}else F.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)F.__webglFramebuffer[ae]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Q)if(i.drawBuffers){const ae=b.texture;for(let ue=0,Se=ae.length;ue<Se;ue++){const Ue=n.get(ae[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&de(b)===!1){const ae=Q?S:[S];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){const Se=ae[ue];F.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const Ue=s.convert(Se.format,Se.colorSpace),j=s.convert(Se.type),Ye=E(Se.internalFormat,Ue,j,Se.colorSpace,b.isXRRenderTarget===!0),He=Te(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,Ye,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),z(r.TEXTURE_CUBE_MAP,S,fe);for(let ae=0;ae<6;ae++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)me(F.__webglFramebuffer[ae][ue],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else me(F.__webglFramebuffer[ae],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);x(S,fe)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ae=b.texture;for(let ue=0,Se=ae.length;ue<Se;ue++){const Ue=ae[ue],j=n.get(Ue);t.bindTexture(r.TEXTURE_2D,j.__webglTexture),z(r.TEXTURE_2D,Ue,fe),me(F.__webglFramebuffer,b,Ue,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),x(Ue,fe)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ae=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,J.__webglTexture),z(ae,S,fe),o&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)me(F.__webglFramebuffer[ue],b,S,r.COLOR_ATTACHMENT0,ae,ue);else me(F.__webglFramebuffer,b,S,r.COLOR_ATTACHMENT0,ae,0);x(S,fe)&&v(ae),t.unbindTexture()}b.depthBuffer&&ye(b)}function yt(b){const S=m(b)||o,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,K=F.length;J<K;J++){const Q=F[J];if(x(Q,S)){const fe=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ae=n.get(Q).__webglTexture;t.bindTexture(fe,ae),v(fe),t.unbindTexture()}}}function ve(b){if(o&&b.samples>0&&de(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,J=b.height;let K=r.COLOR_BUFFER_BIT;const Q=[],fe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(b),ue=b.isWebGLMultipleRenderTargets===!0;if(ue)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){Q.push(r.COLOR_ATTACHMENT0+Se),b.depthBuffer&&Q.push(fe);const Ue=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ue===!1&&(b.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ue&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]),Ue===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[fe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[fe])),ue){const j=n.get(S[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,j,0)}r.blitFramebuffer(0,0,F,J,0,0,F,J,K,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]);const Ue=n.get(S[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,Ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Te(b){return Math.min(i.maxSamples,b.samples)}function de(b){const S=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function tt(b){const S=l.render.frame;p.get(b)!==S&&(p.set(b,S),b.update())}function Ie(b,S){const F=b.colorSpace,J=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===vs||F!==pn&&F!==zt&&($e.getTransfer(F)===Qe?o===!1?e.has("EXT_sRGB")===!0&&J===Kt?(b.format=vs,b.minFilter=Ht,b.generateMipmaps=!1):S=Uo.sRGBToLinear(S):(J!==Kt||K!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=We,this.setupRenderTarget=I,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=me,this.useMultisampledRTT=de}function cp(r,e,t){const n=t.isWebGL2;function i(s,l=zt){let o;const u=$e.getTransfer(l);if(s===Tn)return r.UNSIGNED_BYTE;if(s===wo)return r.UNSIGNED_SHORT_4_4_4_4;if(s===bo)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Vl)return r.BYTE;if(s===Wl)return r.SHORT;if(s===Ts)return r.UNSIGNED_SHORT;if(s===Eo)return r.INT;if(s===En)return r.UNSIGNED_INT;if(s===wn)return r.FLOAT;if(s===Ii)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Xl)return r.ALPHA;if(s===Kt)return r.RGBA;if(s===ql)return r.LUMINANCE;if(s===Yl)return r.LUMINANCE_ALPHA;if(s===Gn)return r.DEPTH_COMPONENT;if(s===mi)return r.DEPTH_STENCIL;if(s===vs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===$l)return r.RED;if(s===To)return r.RED_INTEGER;if(s===jl)return r.RG;if(s===Ao)return r.RG_INTEGER;if(s===Ro)return r.RGBA_INTEGER;if(s===Cr||s===Pr||s===Lr||s===Dr)if(u===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Cr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Cr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zs||s===Js||s===Qs||s===ea)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Zs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Js)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ea)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Co)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ta||s===na)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ta)return u===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===na)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ia||s===ra||s===sa||s===aa||s===oa||s===la||s===ca||s===ua||s===ha||s===da||s===fa||s===pa||s===ma||s===_a)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ia)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ra)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sa)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===aa)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oa)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===la)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ca)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ua)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ha)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===da)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fa)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pa)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ma)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_a)return u===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ir||s===ga||s===va)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ir)return u===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ga)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===va)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kl||s===xa||s===Ma||s===Sa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ir)return o.COMPRESSED_RED_RGTC1_EXT;if(s===xa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ma)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===kn?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class up extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _t extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hp={type:"move"};class rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,l=null;const o=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),d=this._getHandJoint(h,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const p=h.joints["index-finger-tip"],a=h.joints["thumb-tip"],c=p.position.distanceTo(a.position),f=.02,_=.005;h.inputState.pinching&&c>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&c<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return o!==null&&(o.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dp extends xi{constructor(e,t){super();const n=this;let i=null,s=1,l=null,o="local-floor",u=1,h=null,p=null,a=null,c=null,f=null,_=null;const g=t.getContextAttributes();let m=null,d=null;const x=[],v=[],E=new Ge;let C=null;const T=new Bt;T.layers.enable(1),T.viewport=new et;const A=new Bt;A.layers.enable(2),A.viewport=new et;const G=[T,A],M=new up;M.layers.enable(1),M.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=x[z];return $===void 0&&($=new rs,x[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=x[z];return $===void 0&&($=new rs,x[z]=$),$.getGripSpace()},this.getHand=function(z){let $=x[z];return $===void 0&&($=new rs,x[z]=$),$.getHandSpace()};function H(z){const $=v.indexOf(z.inputSource);if($===-1)return;const oe=x[$];oe!==void 0&&(oe.update(z.inputSource,z.frame,h||l),oe.dispatchEvent({type:z.type,data:z.inputSource}))}function Z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",L);for(let z=0;z<x.length;z++){const $=v[z];$!==null&&(v[z]=null,x[z].disconnect($))}w=null,k=null,e.setRenderTarget(m),f=null,c=null,a=null,i=null,d=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(z){h=z},this.getBaseLayer=function(){return c!==null?c:f},this.getBinding=function(){return a},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),d=new zn(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,oe=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?mi:Gn,oe=g.stencil?kn:En);const me={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};a=new XRWebGLBinding(i,t),c=a.createProjectionLayer(me),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),d=new zn(c.textureWidth,c.textureHeight,{format:Kt,type:Tn,depthTexture:new qo(c.textureWidth,c.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(d);Re.__ignoreDepthValues=c.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(u),h=null,l=await i.requestReferenceSpace(o),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(z){for(let $=0;$<z.removed.length;$++){const oe=z.removed[$],_e=v.indexOf(oe);_e>=0&&(v[_e]=null,x[_e].disconnect(oe))}for(let $=0;$<z.added.length;$++){const oe=z.added[$];let _e=v.indexOf(oe);if(_e===-1){for(let Re=0;Re<x.length;Re++)if(Re>=v.length){v.push(oe),_e=Re;break}else if(v[Re]===null){v[Re]=oe,_e=Re;break}if(_e===-1)break}const me=x[_e];me&&me.connect(oe)}}const N=new P,V=new P;function q(z,$,oe){N.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);const _e=N.distanceTo(V),me=$.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Pe=me[14]/(me[10]-1),ye=me[14]/(me[10]+1),We=(me[9]+1)/me[5],I=(me[9]-1)/me[5],yt=(me[8]-1)/me[0],ve=(Re[8]+1)/Re[0],Te=Pe*yt,de=Pe*ve,tt=_e/(-yt+ve),Ie=tt*-yt;$.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ie),z.translateZ(tt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const b=Pe+tt,S=ye+tt,F=Te-Ie,J=de+(_e-Ie),K=We*ye/S*b,Q=I*ye/S*b;z.projectionMatrix.makePerspective(F,J,K,Q,b,S),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function W(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;M.near=A.near=T.near=z.near,M.far=A.far=T.far=z.far,(w!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,k=M.far);const $=z.parent,oe=M.cameras;W(M,$);for(let _e=0;_e<oe.length;_e++)W(oe[_e],$);oe.length===2?q(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),X(z,M,$)};function X(z,$,oe){oe===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(oe.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=xs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(c===null&&f===null))return u},this.setFoveation=function(z){u=z,c!==null&&(c.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)};let Y=null;function ee(z,$){if(p=$.getViewerPose(h||l),_=$,p!==null){const oe=p.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let _e=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let me=0;me<oe.length;me++){const Re=oe[me];let Pe=null;if(f!==null)Pe=f.getViewport(Re);else{const We=a.getViewSubImage(c,Re);Pe=We.viewport,me===0&&(e.setRenderTargetTextures(d,We.colorTexture,c.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(d))}let ye=G[me];ye===void 0&&(ye=new Bt,ye.layers.enable(me),ye.viewport=new et,G[me]=ye),ye.matrix.fromArray(Re.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Re.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(M.matrix.copy(ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(ye)}}for(let oe=0;oe<x.length;oe++){const _e=v[oe],me=x[oe];_e!==null&&me!==void 0&&me.update(_e,$,h||l)}Y&&Y(z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const te=new Wo;te.setAnimationLoop(ee),this.setAnimationLoop=function(z){Y=z},this.dispose=function(){}}}function fp(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ho(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,x,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),a(m,d)):d.isMeshPhongMaterial?(s(m,d),p(m,d)):d.isMeshStandardMaterial?(s(m,d),c(m,d),d.isMeshPhysicalMaterial&&f(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(l(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?u(m,d,x,v):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function u(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function p(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function a(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function c(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pp(r,e,t,n){let i={},s={},l=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(x,v){const E=v.program;n.uniformBlockBinding(x,E)}function h(x,v){let E=i[x.id];E===void 0&&(_(x),E=p(x),i[x.id]=E,x.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(x,C);const T=e.render.frame;s[x.id]!==T&&(c(x),s[x.id]=T)}function p(x){const v=a();x.__bindingPointIndex=v;const E=r.createBuffer(),C=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,E),E}function a(){for(let x=0;x<o;x++)if(l.indexOf(x)===-1)return l.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){const v=i[x.id],E=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let T=0,A=E.length;T<A;T++){const G=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,w=G.length;M<w;M++){const k=G[M];if(f(k,T,M,C)===!0){const H=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let N=0;N<Z.length;N++){const V=Z[N],q=g(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,H+L,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,E,C){const T=x.value,A=v+"_"+E;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const G=C[A];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return C[A]=T,!0}else if(G.equals(T)===!1)return G.copy(T),!0}return!1}function _(x){const v=x.uniforms;let E=0;const C=16;for(let A=0,G=v.length;A<G;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,k=M.length;w<k;w++){const H=M[w],Z=Array.isArray(H.value)?H.value:[H.value];for(let L=0,N=Z.length;L<N;L++){const V=Z[L],q=g(V),W=E%C;W!==0&&C-W<q.boundary&&(E+=C-W),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=q.storage}}}const T=E%C;return T>0&&(E+=C-T),x.__size=E,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const E=l.indexOf(v.__bindingPointIndex);l.splice(E,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function d(){for(const x in i)r.deleteBuffer(i[x]);l=[],i={},s={}}return{bind:u,update:h,dispose:d}}class Jo{constructor(e={}){const{canvas:t=lc(),context:n=null,depth:i=!0,stencil:s=!0,alpha:l=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:a=!1}=e;this.isWebGLRenderer=!0;let c;n!==null?c=n.getContextAttributes().alpha:c=l;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=fn,this.toneMappingExposure=1;const v=this;let E=!1,C=0,T=0,A=null,G=-1,M=null;const w=new et,k=new et;let H=null;const Z=new Ve(0);let L=0,N=t.width,V=t.height,q=1,W=null,X=null;const Y=new et(0,0,N,V),ee=new et(0,0,N,V);let te=!1;const z=new Cs;let $=!1,oe=!1,_e=null;const me=new lt,Re=new Ge,Pe=new P,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return A===null?q:1}let I=n;function yt(y,D){for(let O=0;O<y.length;O++){const B=y[O],U=t.getContext(B,D);if(U!==null)return U}return null}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Es}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",re,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),I=yt(D,y),I===null)throw yt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ve,Te,de,tt,Ie,b,S,F,J,K,Q,fe,ae,ue,Se,Ue,j,Ye,He,be,ge,he,Le,qe;function it(){ve=new Ed(I),Te=new gd(I,ve,e),ve.init(Te),he=new cp(I,ve,Te),de=new op(I,ve,Te),tt=new Td(I),Ie=new Yf,b=new lp(I,ve,de,Ie,Te,he,tt),S=new xd(v),F=new yd(v),J=new Uc(I,Te),Le=new md(I,ve,J,Te),K=new wd(I,J,tt,Le),Q=new Pd(I,K,J,tt),He=new Cd(I,Te,b),Ue=new vd(Ie),fe=new qf(v,S,F,ve,Te,Le,Ue),ae=new fp(v,Ie),ue=new jf,Se=new tp(ve,Te),Ye=new pd(v,S,F,de,Q,c,u),j=new ap(v,Q,Te),qe=new pp(I,tt,Te,de),be=new _d(I,ve,tt,Te),ge=new bd(I,ve,tt,Te),tt.programs=fe.programs,v.capabilities=Te,v.extensions=ve,v.properties=Ie,v.renderLists=ue,v.shadowMap=j,v.state=de,v.info=tt}it();const Fe=new dp(v,I);this.xr=Fe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=ve.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ve.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(N,V,!1))},this.getSize=function(y){return y.set(N,V)},this.setSize=function(y,D,O=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=y,V=D,t.width=Math.floor(y*q),t.height=Math.floor(D*q),O===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(N*q,V*q).floor()},this.setDrawingBufferSize=function(y,D,O){N=y,V=D,q=O,t.width=Math.floor(y*O),t.height=Math.floor(D*O),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(Y)},this.setViewport=function(y,D,O,B){y.isVector4?Y.set(y.x,y.y,y.z,y.w):Y.set(y,D,O,B),de.viewport(w.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(y){return y.copy(ee)},this.setScissor=function(y,D,O,B){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,D,O,B),de.scissor(k.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(y){de.setScissorTest(te=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){X=y},this.getClearColor=function(y){return y.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(y=!0,D=!0,O=!0){let B=0;if(y){let U=!1;if(A!==null){const le=A.texture.format;U=le===Ro||le===Ao||le===To}if(U){const le=A.texture.type,pe=le===Tn||le===En||le===Ts||le===kn||le===wo||le===bo,Me=Ye.getClearColor(),we=Ye.getClearAlpha(),Ne=Me.r,Ae=Me.g,Ce=Me.b;pe?(f[0]=Ne,f[1]=Ae,f[2]=Ce,f[3]=we,I.clearBufferuiv(I.COLOR,0,f)):(_[0]=Ne,_[1]=Ae,_[2]=Ce,_[3]=we,I.clearBufferiv(I.COLOR,0,_))}else B|=I.COLOR_BUFFER_BIT}D&&(B|=I.DEPTH_BUFFER_BIT),O&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ue.dispose(),Se.dispose(),Ie.dispose(),S.dispose(),F.dispose(),Q.dispose(),Le.dispose(),qe.dispose(),fe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Et),Fe.removeEventListener("sessionend",Je),_e&&(_e.dispose(),_e=null),wt.stop()};function ne(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=tt.autoReset,D=j.enabled,O=j.autoUpdate,B=j.needsUpdate,U=j.type;it(),tt.autoReset=y,j.enabled=D,j.autoUpdate=O,j.needsUpdate=B,j.type=U}function re(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function se(y){const D=y.target;D.removeEventListener("dispose",se),Ee(D)}function Ee(y){xe(y),Ie.remove(y)}function xe(y){const D=Ie.get(y).programs;D!==void 0&&(D.forEach(function(O){fe.releaseProgram(O)}),y.isShaderMaterial&&fe.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,O,B,U,le){D===null&&(D=ye);const pe=U.isMesh&&U.matrixWorld.determinant()<0,Me=rl(y,D,O,B,U);de.setMaterial(B,pe);let we=O.index,Ne=1;if(B.wireframe===!0){if(we=K.getWireframeAttribute(O),we===void 0)return;Ne=2}const Ae=O.drawRange,Ce=O.attributes.position;let at=Ae.start*Ne,It=(Ae.start+Ae.count)*Ne;le!==null&&(at=Math.max(at,le.start*Ne),It=Math.min(It,(le.start+le.count)*Ne)),we!==null?(at=Math.max(at,0),It=Math.min(It,we.count)):Ce!=null&&(at=Math.max(at,0),It=Math.min(It,Ce.count));const ft=It-at;if(ft<0||ft===1/0)return;Le.setup(U,B,Me,O,we);let en,nt=be;if(we!==null&&(en=J.get(we),nt=ge,nt.setIndex(en)),U.isMesh)B.wireframe===!0?(de.setLineWidth(B.wireframeLinewidth*We()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(U.isLine){let Oe=B.linewidth;Oe===void 0&&(Oe=1),de.setLineWidth(Oe*We()),U.isLineSegments?nt.setMode(I.LINES):U.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else U.isPoints?nt.setMode(I.POINTS):U.isSprite&&nt.setMode(I.TRIANGLES);if(U.isBatchedMesh)nt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)nt.renderInstances(at,ft,U.count);else if(O.isInstancedBufferGeometry){const Oe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,wr=Math.min(O.instanceCount,Oe);nt.renderInstances(at,ft,wr)}else nt.render(at,ft)};function Ke(y,D,O){y.transparent===!0&&y.side===St&&y.forceSinglePass===!1?(y.side=Pt,y.needsUpdate=!0,Bi(y,D,O),y.side=An,y.needsUpdate=!0,Bi(y,D,O),y.side=St):Bi(y,D,O)}this.compile=function(y,D,O=null){O===null&&(O=y),m=Se.get(O),m.init(),x.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),y!==O&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(v._useLegacyLights);const B=new Set;return y.traverse(function(U){const le=U.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const Me=le[pe];Ke(Me,O,U),B.add(Me)}else Ke(le,O,U),B.add(le)}),x.pop(),m=null,B},this.compileAsync=function(y,D,O=null){const B=this.compile(y,D,O);return new Promise(U=>{function le(){if(B.forEach(function(pe){Ie.get(pe).currentProgram.isReady()&&B.delete(pe)}),B.size===0){U(y);return}setTimeout(le,10)}ve.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ze=null;function dt(y){Ze&&Ze(y)}function Et(){wt.stop()}function Je(){wt.start()}const wt=new Wo;wt.setAnimationLoop(dt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(y){Ze=y,Fe.setAnimationLoop(y),y===null?wt.stop():wt.start()},Fe.addEventListener("sessionstart",Et),Fe.addEventListener("sessionend",Je),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(D),D=Fe.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,D,A),m=Se.get(y,x.length),m.init(),x.push(m),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),z.setFromProjectionMatrix(me),oe=this.localClippingEnabled,$=Ue.init(this.clippingPlanes,oe),g=ue.get(y,d.length),g.init(),d.push(g),Zt(y,D,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,X),this.info.render.frame++,$===!0&&Ue.beginShadows();const O=m.state.shadowsArray;if(j.render(O,y,D),$===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(g,y),m.setupLights(v._useLegacyLights),D.isArrayCamera){const B=D.cameras;for(let U=0,le=B.length;U<le;U++){const pe=B[U];Bs(g,y,pe,pe.viewport)}}else Bs(g,y,D);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(v,y,D),Le.resetDefaultState(),G=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Zt(y,D,O,B){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||z.intersectsSprite(y)){B&&Pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(me);const pe=Q.update(y),Me=y.material;Me.visible&&g.push(y,pe,Me,O,Pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||z.intersectsObject(y))){const pe=Q.update(y),Me=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pe.copy(y.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(y.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){const we=pe.groups;for(let Ne=0,Ae=we.length;Ne<Ae;Ne++){const Ce=we[Ne],at=Me[Ce.materialIndex];at&&at.visible&&g.push(y,pe,at,O,Pe.z,Ce)}}else Me.visible&&g.push(y,pe,Me,O,Pe.z,null)}}const le=y.children;for(let pe=0,Me=le.length;pe<Me;pe++)Zt(le[pe],D,O,B)}function Bs(y,D,O,B){const U=y.opaque,le=y.transmissive,pe=y.transparent;m.setupLightsView(O),$===!0&&Ue.setGlobalState(v.clippingPlanes,O),le.length>0&&il(U,le,D,O),B&&de.viewport(w.copy(B)),U.length>0&&Oi(U,D,O),le.length>0&&Oi(le,D,O),pe.length>0&&Oi(pe,D,O),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function il(y,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const le=Te.isWebGL2;_e===null&&(_e=new zn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ii:Tn,minFilter:Di,samples:le?4:0})),v.getDrawingBufferSize(Re),le?_e.setSize(Re.x,Re.y):_e.setSize(Ms(Re.x),Ms(Re.y));const pe=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(Z),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Me=v.toneMapping;v.toneMapping=fn,Oi(y,O,B),b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e);let we=!1;for(let Ne=0,Ae=D.length;Ne<Ae;Ne++){const Ce=D[Ne],at=Ce.object,It=Ce.geometry,ft=Ce.material,en=Ce.group;if(ft.side===St&&at.layers.test(B.layers)){const nt=ft.side;ft.side=Pt,ft.needsUpdate=!0,ks(at,O,B,It,ft,en),ft.side=nt,ft.needsUpdate=!0,we=!0}}we===!0&&(b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e)),v.setRenderTarget(pe),v.setClearColor(Z,L),v.toneMapping=Me}function Oi(y,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,le=y.length;U<le;U++){const pe=y[U],Me=pe.object,we=pe.geometry,Ne=B===null?pe.material:B,Ae=pe.group;Me.layers.test(O.layers)&&ks(Me,D,O,we,Ne,Ae)}}function ks(y,D,O,B,U,le){y.onBeforeRender(v,D,O,B,U,le),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,D,O,B,y,le),U.transparent===!0&&U.side===St&&U.forceSinglePass===!1?(U.side=Pt,U.needsUpdate=!0,v.renderBufferDirect(O,D,B,U,y,le),U.side=An,U.needsUpdate=!0,v.renderBufferDirect(O,D,B,U,y,le),U.side=St):v.renderBufferDirect(O,D,B,U,y,le),y.onAfterRender(v,D,O,B,U,le)}function Bi(y,D,O){D.isScene!==!0&&(D=ye);const B=Ie.get(y),U=m.state.lights,le=m.state.shadowsArray,pe=U.state.version,Me=fe.getParameters(y,U.state,le,D,O),we=fe.getProgramCacheKey(Me);let Ne=B.programs;B.environment=y.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(y.isMeshStandardMaterial?F:S).get(y.envMap||B.environment),Ne===void 0&&(y.addEventListener("dispose",se),Ne=new Map,B.programs=Ne);let Ae=Ne.get(we);if(Ae!==void 0){if(B.currentProgram===Ae&&B.lightsStateVersion===pe)return Hs(y,Me),Ae}else Me.uniforms=fe.getUniforms(y),y.onBuild(O,Me,v),y.onBeforeCompile(Me,v),Ae=fe.acquireProgram(Me,we),Ne.set(we,Ae),B.uniforms=Me.uniforms;const Ce=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),Hs(y,Me),B.needsLights=al(y),B.lightsStateVersion=pe,B.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ae,B.uniformsList=null,Ae}function Gs(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=lr.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Hs(y,D){const O=Ie.get(y);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function rl(y,D,O,B,U){D.isScene!==!0&&(D=ye),b.resetTextureUnits();const le=D.fog,pe=B.isMeshStandardMaterial?D.environment:null,Me=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:pn,we=(B.isMeshStandardMaterial?F:S).get(B.envMap||pe),Ne=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ae=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!O.morphAttributes.position,at=!!O.morphAttributes.normal,It=!!O.morphAttributes.color;let ft=fn;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=v.toneMapping);const en=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,nt=en!==void 0?en.length:0,Oe=Ie.get(B),wr=m.state.lights;if($===!0&&(oe===!0||y!==M)){const kt=y===M&&B.id===G;Ue.setState(B,y,kt)}let rt=!1;B.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==wr.state.version||Oe.outputColorSpace!==Me||U.isBatchedMesh&&Oe.batching===!1||!U.isBatchedMesh&&Oe.batching===!0||U.isInstancedMesh&&Oe.instancing===!1||!U.isInstancedMesh&&Oe.instancing===!0||U.isSkinnedMesh&&Oe.skinning===!1||!U.isSkinnedMesh&&Oe.skinning===!0||U.isInstancedMesh&&Oe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Oe.instancingColor===!1&&U.instanceColor!==null||Oe.envMap!==we||B.fog===!0&&Oe.fog!==le||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ue.numPlanes||Oe.numIntersection!==Ue.numIntersection)||Oe.vertexAlphas!==Ne||Oe.vertexTangents!==Ae||Oe.morphTargets!==Ce||Oe.morphNormals!==at||Oe.morphColors!==It||Oe.toneMapping!==ft||Te.isWebGL2===!0&&Oe.morphTargetsCount!==nt)&&(rt=!0):(rt=!0,Oe.__version=B.version);let Cn=Oe.currentProgram;rt===!0&&(Cn=Bi(B,D,U));let zs=!1,Si=!1,br=!1;const vt=Cn.getUniforms(),Pn=Oe.uniforms;if(de.useProgram(Cn.program)&&(zs=!0,Si=!0,br=!0),B.id!==G&&(G=B.id,Si=!0),zs||M!==y){vt.setValue(I,"projectionMatrix",y.projectionMatrix),vt.setValue(I,"viewMatrix",y.matrixWorldInverse);const kt=vt.map.cameraPosition;kt!==void 0&&kt.setValue(I,Pe.setFromMatrixPosition(y.matrixWorld)),Te.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&vt.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Si=!0,br=!0)}if(U.isSkinnedMesh){vt.setOptional(I,U,"bindMatrix"),vt.setOptional(I,U,"bindMatrixInverse");const kt=U.skeleton;kt&&(Te.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),vt.setValue(I,"boneTexture",kt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(vt.setOptional(I,U,"batchingTexture"),vt.setValue(I,"batchingTexture",U._matricesTexture,b));const Tr=O.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0&&Te.isWebGL2===!0)&&He.update(U,O,Cn),(Si||Oe.receiveShadow!==U.receiveShadow)&&(Oe.receiveShadow=U.receiveShadow,vt.setValue(I,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Pn.envMap.value=we,Pn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Si&&(vt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&sl(Pn,br),le&&B.fog===!0&&ae.refreshFogUniforms(Pn,le),ae.refreshMaterialUniforms(Pn,B,q,V,_e),lr.upload(I,Gs(Oe),Pn,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(lr.upload(I,Gs(Oe),Pn,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&vt.setValue(I,"center",U.center),vt.setValue(I,"modelViewMatrix",U.modelViewMatrix),vt.setValue(I,"normalMatrix",U.normalMatrix),vt.setValue(I,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const kt=B.uniformsGroups;for(let Ar=0,ol=kt.length;Ar<ol;Ar++)if(Te.isWebGL2){const Vs=kt[Ar];qe.update(Vs,Cn),qe.bind(Vs,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function sl(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function al(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,D,O){Ie.get(y.texture).__webglTexture=D,Ie.get(y.depthTexture).__webglTexture=O;const B=Ie.get(y);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,D){const O=Ie.get(y);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,O=0){A=y,C=D,T=O;let B=!0,U=null,le=!1,pe=!1;if(y){const we=Ie.get(y);we.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(I.FRAMEBUFFER,null),B=!1):we.__webglFramebuffer===void 0?b.setupRenderTarget(y):we.__hasExternalTextures&&b.rebindTextures(y,Ie.get(y.texture).__webglTexture,Ie.get(y.depthTexture).__webglTexture);const Ne=y.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Ae=Ie.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?U=Ae[D][O]:U=Ae[D],le=!0):Te.isWebGL2&&y.samples>0&&b.useMultisampledRTT(y)===!1?U=Ie.get(y).__webglMultisampledFramebuffer:Array.isArray(Ae)?U=Ae[O]:U=Ae,w.copy(y.viewport),k.copy(y.scissor),H=y.scissorTest}else w.copy(Y).multiplyScalar(q).floor(),k.copy(ee).multiplyScalar(q).floor(),H=te;if(de.bindFramebuffer(I.FRAMEBUFFER,U)&&Te.drawBuffers&&B&&de.drawBuffers(y,U),de.viewport(w),de.scissor(k),de.setScissorTest(H),le){const we=Ie.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,O)}else if(pe){const we=Ie.get(y.texture),Ne=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,O||0,Ne)}G=-1},this.readRenderTargetPixels=function(y,D,O,B,U,le,pe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){de.bindFramebuffer(I.FRAMEBUFFER,Me);try{const we=y.texture,Ne=we.format,Ae=we.type;if(Ne!==Kt&&he.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ae===Ii&&(ve.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ae!==Tn&&he.convert(Ae)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===wn&&(Te.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-B&&O>=0&&O<=y.height-U&&I.readPixels(D,O,B,U,he.convert(Ne),he.convert(Ae),le)}finally{const we=A!==null?Ie.get(A).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(y,D,O=0){const B=Math.pow(2,-O),U=Math.floor(D.image.width*B),le=Math.floor(D.image.height*B);b.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,y.x,y.y,U,le),de.unbindTexture()},this.copyTextureToTexture=function(y,D,O,B=0){const U=D.image.width,le=D.image.height,pe=he.convert(O.format),Me=he.convert(O.type);b.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,y.x,y.y,U,le,pe,Me,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,y.x,y.y,D.mipmaps[0].width,D.mipmaps[0].height,pe,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,B,y.x,y.y,pe,Me,D.image),B===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(y,D,O,B,U=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=y.max.x-y.min.x+1,pe=y.max.y-y.min.y+1,Me=y.max.z-y.min.z+1,we=he.convert(B.format),Ne=he.convert(B.type);let Ae;if(B.isData3DTexture)b.setTexture3D(B,0),Ae=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)b.setTexture2DArray(B,0),Ae=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),at=I.getParameter(I.UNPACK_IMAGE_HEIGHT),It=I.getParameter(I.UNPACK_SKIP_PIXELS),ft=I.getParameter(I.UNPACK_SKIP_ROWS),en=I.getParameter(I.UNPACK_SKIP_IMAGES),nt=O.isCompressedTexture?O.mipmaps[U]:O.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,y.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,y.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,y.min.z),O.isDataTexture||O.isData3DTexture?I.texSubImage3D(Ae,U,D.x,D.y,D.z,le,pe,Me,we,Ne,nt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ae,U,D.x,D.y,D.z,le,pe,Me,we,nt.data)):I.texSubImage3D(Ae,U,D.x,D.y,D.z,le,pe,Me,we,Ne,nt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at),I.pixelStorei(I.UNPACK_SKIP_PIXELS,It),I.pixelStorei(I.UNPACK_SKIP_ROWS,ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,en),U===0&&B.generateMipmaps&&I.generateMipmap(Ae),de.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),de.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,de.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===As?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Mr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?Hn:Po}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hn?mt:pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mp extends Jo{}mp.prototype.isWebGL1Renderer=!0;class Ls{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new Ls(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _p extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Qo extends Lt{constructor(e,t,n,i,s,l,o,u,h){super(e,t,n,i,s,l,o,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ds extends Vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],l=[],o=[],u=[],h=new P,p=new Ge;l.push(0,0,0),o.push(0,0,1),u.push(.5,.5);for(let a=0,c=3;a<=t;a++,c+=3){const f=n+a/t*i;h.x=e*Math.cos(f),h.y=e*Math.sin(f),l.push(h.x,h.y,h.z),o.push(0,0,1),p.x=(l[c]/e+1)/2,p.y=(l[c+1]/e+1)/2,u.push(p.x,p.y)}for(let a=1;a<=t;a++)s.push(a,a+1,0);this.setIndex(s),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dt extends Vt{constructor(e=1,t=1,n=1,i=32,s=1,l=!1,o=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:l,thetaStart:o,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const p=[],a=[],c=[],f=[];let _=0;const g=[],m=n/2;let d=0;x(),l===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(p),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(f,2));function x(){const E=new P,C=new P;let T=0;const A=(t-e)/n;for(let G=0;G<=s;G++){const M=[],w=G/s,k=w*(t-e)+e;for(let H=0;H<=i;H++){const Z=H/i,L=Z*u+o,N=Math.sin(L),V=Math.cos(L);C.x=k*N,C.y=-w*n+m,C.z=k*V,a.push(C.x,C.y,C.z),E.set(N,A,V).normalize(),c.push(E.x,E.y,E.z),f.push(Z,1-w),M.push(_++)}g.push(M)}for(let G=0;G<i;G++)for(let M=0;M<s;M++){const w=g[M][G],k=g[M+1][G],H=g[M+1][G+1],Z=g[M][G+1];p.push(w,k,Z),p.push(k,H,Z),T+=6}h.addGroup(d,T,0),d+=T}function v(E){const C=_,T=new Ge,A=new P;let G=0;const M=E===!0?e:t,w=E===!0?1:-1;for(let H=1;H<=i;H++)a.push(0,m*w,0),c.push(0,w,0),f.push(.5,.5),_++;const k=_;for(let H=0;H<=i;H++){const L=H/i*u+o,N=Math.cos(L),V=Math.sin(L);A.x=M*V,A.y=m*w,A.z=M*N,a.push(A.x,A.y,A.z),c.push(0,w,0),T.x=N*.5+.5,T.y=V*.5*w+.5,f.push(T.x,T.y),_++}for(let H=0;H<i;H++){const Z=C+H,L=k+H;E===!0?p.push(L,L+1,Z):p.push(L+1,L,Z),G+=3}h.addGroup(d,G,E===!0?1:2),d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Is extends Dt{constructor(e=1,t=1,n=32,i=1,s=!1,l=0,o=Math.PI*2){super(0,e,t,n,i,s,l,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:l,thetaLength:o}}static fromJSON(e){return new Is(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Us extends Vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],l=[];o(i),h(n),p(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(l,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new P,E=new P,C=new P;for(let T=0;T<t.length;T+=3)f(t[T+0],v),f(t[T+1],E),f(t[T+2],C),u(v,E,C,x)}function u(x,v,E,C){const T=C+1,A=[];for(let G=0;G<=T;G++){A[G]=[];const M=x.clone().lerp(E,G/T),w=v.clone().lerp(E,G/T),k=T-G;for(let H=0;H<=k;H++)H===0&&G===T?A[G][H]=M:A[G][H]=M.clone().lerp(w,H/k)}for(let G=0;G<T;G++)for(let M=0;M<2*(T-G)-1;M++){const w=Math.floor(M/2);M%2===0?(c(A[G][w+1]),c(A[G+1][w]),c(A[G][w])):(c(A[G][w+1]),c(A[G+1][w+1]),c(A[G+1][w]))}}function h(x){const v=new P;for(let E=0;E<s.length;E+=3)v.x=s[E+0],v.y=s[E+1],v.z=s[E+2],v.normalize().multiplyScalar(x),s[E+0]=v.x,s[E+1]=v.y,s[E+2]=v.z}function p(){const x=new P;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const E=m(x)/2/Math.PI+.5,C=d(x)/Math.PI+.5;l.push(E,1-C)}_(),a()}function a(){for(let x=0;x<l.length;x+=6){const v=l[x+0],E=l[x+2],C=l[x+4],T=Math.max(v,E,C),A=Math.min(v,E,C);T>.9&&A<.1&&(v<.2&&(l[x+0]+=1),E<.2&&(l[x+2]+=1),C<.2&&(l[x+4]+=1))}}function c(x){s.push(x.x,x.y,x.z)}function f(x,v){const E=x*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function _(){const x=new P,v=new P,E=new P,C=new P,T=new Ge,A=new Ge,G=new Ge;for(let M=0,w=0;M<s.length;M+=9,w+=6){x.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),E.set(s[M+6],s[M+7],s[M+8]),T.set(l[w+0],l[w+1]),A.set(l[w+2],l[w+3]),G.set(l[w+4],l[w+5]),C.copy(x).add(v).add(E).divideScalar(3);const k=m(C);g(T,w+0,x,k),g(A,w+2,v,k),g(G,w+4,E,k)}}function g(x,v,E,C){C<0&&x.x===1&&(l[v]=x.x-1),E.x===0&&E.z===0&&(l[v]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.vertices,e.indices,e.radius,e.details)}}class Ns extends Us{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ns(e.radius,e.detail)}}class Rn extends Vt{constructor(e=.5,t=1,n=32,i=1,s=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:l},n=Math.max(3,n),i=Math.max(1,i);const o=[],u=[],h=[],p=[];let a=e;const c=(t-e)/i,f=new P,_=new Ge;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const d=s+m/n*l;f.x=a*Math.cos(d),f.y=a*Math.sin(d),u.push(f.x,f.y,f.z),h.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,p.push(_.x,_.y)}a+=c}for(let g=0;g<i;g++){const m=g*(n+1);for(let d=0;d<n;d++){const x=d+m,v=x,E=x+n+1,C=x+n+2,T=x+1;o.push(v,E,T),o.push(E,C,T)}}this.setIndex(o),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Er extends Vt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,l=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:l,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(l+o,Math.PI);let h=0;const p=[],a=new P,c=new P,f=[],_=[],g=[],m=[];for(let d=0;d<=n;d++){const x=[],v=d/n;let E=0;d===0&&l===0?E=.5/t:d===n&&u===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const T=C/t;a.x=-e*Math.cos(i+T*s)*Math.sin(l+v*o),a.y=e*Math.cos(l+v*o),a.z=e*Math.sin(i+T*s)*Math.sin(l+v*o),_.push(a.x,a.y,a.z),c.copy(a).normalize(),g.push(c.x,c.y,c.z),m.push(T+E,1-v),x.push(h++)}p.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const v=p[d][x+1],E=p[d][x],C=p[d+1][x],T=p[d+1][x+1];(d!==0||l>0)&&f.push(v,E,T),(d!==n-1||u<Math.PI)&&f.push(E,C,T)}this.setIndex(f),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xe extends Fi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fs extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class gp extends Fs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ss=new lt,uo=new P,ho=new P;class el{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uo.setFromMatrixPosition(e.matrixWorld),t.position.copy(uo),ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ho),t.updateMatrixWorld(),ss.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ss),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ss)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fo=new lt,Ai=new P,as=new P;class vp extends el{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ai.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ai),as.copy(n.position),as.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(as),n.updateMatrixWorld(),i.makeTranslation(-Ai.x,-Ai.y,-Ai.z),fo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo)}}class Os extends Fs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xp extends el{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mp extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new xp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Es}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Es);class Sp{constructor(e){this.instance=new Jo({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.instance.setPixelRatio(Math.min(window.devicePixelRatio,1)),this.instance.setSize(window.innerWidth,window.innerHeight),this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=ws,this.instance.toneMapping=fn,this.instance.outputColorSpace=mt,window.addEventListener("resize",()=>this._onResize())}_onResize(){this.instance.setSize(window.innerWidth,window.innerHeight)}render(e,t){this.instance.render(e,t)}}class yp{constructor(){this.scene=new _p,this.scene.background=new Ve(1710621),this.scene.fog=new Ls(1710621,30,120),this.ambient=new gp(5595248,657930,.6),this.scene.add(this.ambient),this.sun=new Mp(16770229,1),this.sun.position.set(50,80,30),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.camera.far=200,this.sun.shadow.camera.left=-100,this.sun.shadow.camera.right=100,this.sun.shadow.camera.top=100,this.sun.shadow.camera.bottom=-100,this.scene.add(this.sun),this.sun.target.position.set(0,0,0),this.scene.add(this.sun.target)}setTimeOfDay(e){const t=e/24,n=Math.max(0,Math.sin(t*Math.PI*2-Math.PI/2));this.sun.intensity=.15+n*1.1,this.ambient.intensity=.15+n*.55,this.scene.background.setHSL(.6,.05,.05+n*.15),this.scene.fog.color.copy(this.scene.background)}applyMentalState(e){if(e<=0)return;const t=this.scene.background,n=this.scene.fog?.color;if(!t)return;const i=t.r,s=t.g,l=t.b,o=(i+s+l)/3;t.setRGB(i*(1-e)+o*e,s*(1-e)+o*e,l*(1-e)+o*e),n&&n.copy(t)}}class Ep{constructor(e,t){this.camera=new Bt(55,window.innerWidth/window.innerHeight,.1,500),this.offset=new P(12,16,12),this.lookOffset=new P(0,1.5,0),this.lerpSpeed=6,this.camera.position.copy(this.offset),this.camera.lookAt(0,0,0),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()})}follow(e){const t=e.clone().add(this.offset);this.camera.position.lerp(t,1-Math.exp(-this.lerpSpeed*.016));const n=e.clone().add(this.lookOffset);this.camera.lookAt(n)}}class wp{constructor(){this.day=1,this.hour=6,this.minutesPerSecond=1}update(e){this.hour+=e*this.minutesPerSecond/60,this.hour>=24&&(this.hour-=24,this.day++)}get hourFloat(){return this.hour}get isNight(){return this.hour<6||this.hour>=20}serialize(){return{day:this.day,hour:this.hour}}deserialize(e){this.day=e.day,this.hour=e.hour}}class bp{constructor(){this.keys={},this.pressedThisFrame=new Set,window.addEventListener("keydown",e=>{this.keys[e.code]||this.pressedThisFrame.add(e.code),this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1})}isDown(e){return!!this.keys[e]}consumePress(e){return this.pressedThisFrame.has(e)?(this.pressedThisFrame.delete(e),!0):!1}endFrame(){this.pressedThisFrame.clear()}get axis(){return{x:(this.isDown("KeyD")?1:0)-(this.isDown("KeyA")?1:0),z:(this.isDown("KeyS")?1:0)-(this.isDown("KeyW")?1:0)}}get isRunning(){return this.isDown("ShiftLeft")||this.isDown("ShiftRight")}}const ze=2,Tp=32,Ap=.4,po=3,mo=6,Rp=1.8,Cp=8,Pp=10,Lp=3,_o=5,tl=20,Dp=20,go=1.5,Ip=.12,Up=1.8,os=1.2,ls=.8,cs=45,Np=.15,Fp=.35,Op=.25,Bp=.2,kp=40,Gp=8,Hp=25,ys=100,zp=3,vo=2,Vp=8,xo=4,Wp=40,Ct={ACCENT_AMBER:13214247,ACCENT_CYAN:2799562,ACCENT_GOLD:16765286,ACCENT_RED:12597547,ACCENT_GREEN:2600544,ACCENT_PURPLE:9323693,TRASH:3815978,CAR:2899536,DEALER:7091331},Ri={hambre:.35,sed:.5,energia:.2,higiene:.1,animo:.08},Ci={higieneEnfermedad:30,higieneRechazo:20,animoVelocidad:30,animoVision:50},je=new Map;function on(r=64){const e=document.createElement("canvas");return e.width=r,e.height=r,{canvas:e,ctx:e.getContext("2d")}}function oi(r,e,t=20){const n=r.getImageData(0,0,e,e),i=n.data;for(let s=0;s<i.length;s+=4){const l=(Math.random()-.5)*t;i[s]=Math.max(0,Math.min(255,i[s]+l)),i[s+1]=Math.max(0,Math.min(255,i[s+1]+l)),i[s+2]=Math.max(0,Math.min(255,i[s+2]+l))}r.putImageData(n,0,0)}function ln(r,e=1){const t=new Qo(r);return t.magFilter=ct,t.minFilter=ct,t.generateMipmaps=!1,t.wrapS=t.wrapT=dr,t.repeat.set(e,e),t}const cn={asphalt(r=64){const e=`asphalt-${r}`;if(je.has(e))return je.get(e);const{canvas:t,ctx:n}=on(r);n.fillStyle="#2a2a2d",n.fillRect(0,0,r,r),oi(n,r,30),n.strokeStyle="#1a1a1d",n.lineWidth=1;for(let s=0;s<6;s++)n.beginPath(),n.moveTo(Math.random()*r,Math.random()*r),n.lineTo(Math.random()*r,Math.random()*r),n.stroke();const i=ln(t);return je.set(e,i),i},concrete(r=64){const e=`concrete-${r}`;if(je.has(e))return je.get(e);const{canvas:t,ctx:n}=on(r);n.fillStyle="#4a4a52",n.fillRect(0,0,r,r),oi(n,r,25);for(let s=0;s<3;s++)n.fillStyle=`rgba(20,20,30,${.15+Math.random()*.2})`,n.beginPath(),n.arc(Math.random()*r,Math.random()*r,5+Math.random()*8,0,Math.PI*2),n.fill();const i=ln(t);return je.set(e,i),i},brick(r=64){const e=`brick-${r}`;if(je.has(e))return je.get(e);const{canvas:t,ctx:n}=on(r);n.fillStyle="#3a2a28",n.fillRect(0,0,r,r);const i=8,s=16;for(let o=0;o<r;o+=i){const u=o/i%2===0?0:s/2;for(let h=-s;h<r;h+=s)n.fillStyle=`rgb(${70+Math.random()*20}, ${45+Math.random()*15}, ${40+Math.random()*10})`,n.fillRect(h+u+1,o+1,s-2,i-2)}const l=ln(t);return je.set(e,l),l},road(r=64){const e=`road-${r}`;if(je.has(e))return je.get(e);const{canvas:t,ctx:n}=on(r);n.fillStyle="#2a2a2d",n.fillRect(0,0,r,r),oi(n,r,25),n.fillStyle="#a08820";for(let s=4;s<r;s+=12)n.fillRect(r/2-1,s,2,6);const i=ln(t);return je.set(e,i),i},roadV(r=64){const e=`roadV-${r}`;if(je.has(e))return je.get(e);const{canvas:t,ctx:n}=on(r);n.fillStyle="#2a2a2d",n.fillRect(0,0,r,r),oi(n,r,25),n.fillStyle="#a08820";for(let s=4;s<r;s+=12)n.fillRect(s,r/2-1,6,2);const i=ln(t);return je.set(e,i),i},sidewalk(r=64){const e=`sidewalk-${r}`;if(je.has(e))return je.get(e);const{canvas:t,ctx:n}=on(r);n.fillStyle="#5a5a60",n.fillRect(0,0,r,r),oi(n,r,20),n.strokeStyle="#3a3a40",n.lineWidth=1,n.beginPath(),n.moveTo(r/2,0),n.lineTo(r/2,r),n.moveTo(0,r/2),n.lineTo(r,r/2),n.stroke();const i=ln(t);return je.set(e,i),i},windowLit(r=32){const e=`windowLit-${r}`;if(je.has(e))return je.get(e);const{canvas:t,ctx:n}=on(r);n.fillStyle="#2a2a2d",n.fillRect(0,0,r,r);const i=6,s=8,l=4;for(let u=l;u<r-s;u+=s+l)for(let h=l;h<r-i;h+=i+l){const p=Math.random()<.4;n.fillStyle=p?"#c9a227":"#1a1a20",n.fillRect(h,u,i,s)}const o=ln(t);return je.set(e,o),o},dirt(r=64){const e=`dirt-${r}`;if(je.has(e))return je.get(e);const{canvas:t,ctx:n}=on(r);n.fillStyle="#3a3028",n.fillRect(0,0,r,r),oi(n,r,35);const i=ln(t);return je.set(e,i),i},white(r=16){const e=`white-${r}`;if(je.has(e))return je.get(e);const{canvas:t,ctx:n}=on(r);n.fillStyle="#fff",n.fillRect(0,0,r,r);const i=ln(t);return je.set(e,i),i}},cr={},ur={};function Mn(r,e){return cr[r]||(cr[r]=e()),cr[r]}function Sn(r,e){return ur[r]||(ur[r]=e()),ur[r]}function li(r){switch(r){case"asphalt":return cn.asphalt();case"concrete":return cn.concrete();case"brick":return cn.brick();case"road":return cn.road();case"roadV":return cn.roadV();case"sidewalk":return cn.sidewalk();case"windowLit":return cn.windowLit();case"dirt":return cn.dirt();default:return cn.white()}}const Xp={create(r){switch(r){case"floor":case"sidewalk":return this._sidewalk();case"road":return this._road("road");case"roadV":return this._road("roadV");case"dirt":return this._dirt();case"building":return this._building();case"buildingBrick":return this._buildingBrick();case"buildingLit":return this._buildingLit();case"barrel":return this._barrel();case"trash":return this._trash();default:return this._sidewalk()}},_sidewalk(){const r=Mn("sidewalk",()=>new ke(ze,.2,ze)),e=Sn("sidewalk",()=>new Xe({map:li("sidewalk"),color:10132122,flatShading:!0})),t=new ce(r,e);return t.receiveShadow=!0,t},_road(r){const e=`road-${r}`,t=Mn(e,()=>new ke(ze,.1,ze)),n=Sn(e,()=>new Xe({map:li(r),color:10132122,flatShading:!0})),i=new ce(t,n);return i.receiveShadow=!0,i},_dirt(){const r=Mn("dirt",()=>new ke(ze,.15,ze)),e=Sn("dirt",()=>new Xe({map:li("dirt"),color:10132122,flatShading:!0})),t=new ce(r,e);return t.receiveShadow=!0,t},_building(){const r=Mn("building",()=>new ke(ze,8,ze)),e=Sn("building",()=>new Xe({map:li("concrete"),color:10132122,flatShading:!0})),t=new ce(r,e);return t.position.y=4,t.castShadow=!0,t.receiveShadow=!0,t},_buildingBrick(){const r=Mn("buildingBrick",()=>new ke(ze,6,ze)),e=Sn("buildingBrick",()=>new Xe({map:li("brick"),color:11184810,flatShading:!0})),t=new ce(r,e);return t.position.y=3,t.castShadow=!0,t.receiveShadow=!0,t},_buildingLit(){const r=Mn("buildingLit",()=>new ke(ze,10,ze)),e=Sn("buildingLit",()=>new Xe({map:li("windowLit"),color:11184810,emissive:2763296,flatShading:!0})),t=new ce(r,e);return t.position.y=5,t.castShadow=!0,t.receiveShadow=!0,t},_barrel(){const r=Mn("barrel",()=>new Dt(.5,.5,1.2,8)),e=Sn("barrel",()=>new Xe({color:5913114,flatShading:!0})),t=new ce(r,e);return t.position.y=.6,t.castShadow=!0,t},_trash(){const r=Mn("trash",()=>new ke(1.2,.6,1.2)),e=Sn("trash",()=>new Xe({color:4868650,flatShading:!0})),t=new ce(r,e);return t.position.y=.4,t.castShadow=!0,t},dispose(){for(const r of Object.values(cr))r.dispose?.();for(const r of Object.values(ur))r.dispose?.()}},vi=8,us=["building","buildingBrick","buildingLit"],Mo=new Set(["sidewalk","dirt","floor","road","roadV"]),hn={player:{bx:0,by:0},stall:{bx:3,by:0},bed:{bx:0,by:3},dealer:{bx:3,by:3}};function So(r,e){if(r<=0||r>=e-1)return"wall";const t=(r-1)%vi;return t===0||t===5?"walk":t>=1&&t<=4?"bldg":"road"}function vr(r,e){return{x:2+r*vi,y:2+e*vi}}function or(r,e){const t=vr(r,e);return{x:t.x+1,z:t.y+1}}function nl(){return{player:or(hn.player.bx,hn.player.by),stall:or(hn.stall.bx,hn.stall.by),bed:or(hn.bed.bx,hn.bed.by),dealer:or(hn.dealer.bx,hn.dealer.by)}}function qp(r=32,e=Math.random){((r-8)%vi!==0||r<24)&&console.warn(`[RoadGenerator] size=${r} no encaja en el patrón (usa 32, 40, 48...).`);const t=Array.from({length:r},()=>Array.from({length:r},()=>"sidewalk"));for(let i=0;i<r;i++)for(let s=0;s<r;s++){const l=So(s,r),o=So(i,r);l==="wall"||o==="wall"?t[i][s]="building":l==="road"&&o==="road"?t[i][s]="road":l==="road"?t[i][s]="roadV":o==="road"?t[i][s]="road":l==="bldg"&&o==="bldg"?t[i][s]="building":t[i][s]="sidewalk"}const n=Math.floor((r-2)/vi);for(let i=0;i<n;i++)for(let s=0;s<n;s++){const l=vr(s,i);for(let o=0;o<2;o++){const u=e(),h=u<.55?us[0]:u<.85?us[1]:us[2];for(let p=0;p<2;p++)for(let a=0;a<4;a++)t[l.y+o*2+p][l.x+a]=h}}for(const[i,{bx:s,by:l}]of Object.entries(hn)){const o=vr(s,l);for(let u=0;u<4;u++)for(let h=0;h<4;h++){const p=o.x+h,a=o.y+u;i==="dealer"?t[a][p]=(h+u)%2===0?"dirt":"floor":t[a][p]=(p+a)%5===0?"dirt":"sidewalk"}}return Yp(t,r),t}function Yp(r,e){const t=nl(),n=Array.from({length:e},()=>Array(e).fill(!1)),i=[[t.player.x,t.player.z]];for(n[t.player.z][t.player.x]=!0;i.length;){const[o,u]=i.pop();for(const[h,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const a=o+h,c=u+p;a<0||c<0||a>=e||c>=e||n[c][a]||!Mo.has(r[c][a])||(n[c][a]=!0,i.push([a,c]))}}const s=o=>n[o.z][o.x];(!s(t.stall)||!s(t.bed)||!s(t.dealer))&&console.error("[RoadGenerator] ¡Puesto, cama o dealer NO alcanzables desde el spawn!");let l=0;for(let o=0;o<e;o++)for(let u=0;u<e;u++)Mo.has(r[o][u])&&!n[o][u]&&l++;l>0&&console.error(`[RoadGenerator] ${l} tiles transitables aislados.`)}function $p(r,e){const t=[],n=nl(),i=Object.values(n),s=(u,h)=>i.some(p=>Math.abs(p.x-u)<=1&&Math.abs(p.z-h)<=1),l=(u,h)=>{const p=r[h]?.[u];return p==="sidewalk"||p==="dirt"||p==="floor"},o=Math.floor((e-2)/vi);for(let u=0;u<o;u++)for(let h=0;h<o;h++){const p=vr(h,u),a=[[p.x-1,p.y-1],[p.x+4,p.y-1],[p.x-1,p.y+4],[p.x+4,p.y+4]];for(const[c,f]of a)l(c,f)&&!s(c,f)&&t.push({x:c,z:f,type:"farol"})}for(let u=1;u<e-1;u++)for(let h=1;h<e-1;h++)!l(h,u)||s(h,u)||Math.random()<.02&&t.push({x:h,z:u,type:null});return t}class jp{constructor(e,t={}){this.group=new _t,this.group.position.copy(e);const n=new Xe({color:2763312,flatShading:!0}),i=new Dt(.06,.08,4,6),s=new ce(i,n);s.position.y=2,s.castShadow=!0,this.group.add(s);const l=new ke(.6,.08,.08),o=new ce(l,n);o.position.set(.3,4,0),this.group.add(o);const u=new ke(.2,.15,.25),h=new Tt({color:Ct.ACCENT_AMBER}),p=new ce(u,h);p.position.set(.6,3.9,0),this.group.add(p),t.addLight!==!1&&(this.light=new Os(Ct.ACCENT_AMBER,0,8),this.light.position.set(.6,3.8,0),this.group.add(this.light))}setNight(e){this.light&&(this.light.intensity=e?1.2:0)}}class Kp{constructor(e,t=0){this.group=new _t,this.group.position.copy(e),this.group.rotation.y=t;const n=new Xe({color:4861984,flatShading:!0}),i=new Xe({color:1710624,flatShading:!0}),s=new ke(1.6,.08,.5),l=new ce(s,n);l.position.y=.45,l.castShadow=!0,l.receiveShadow=!0,this.group.add(l);const o=new ke(1.6,.5,.08),u=new ce(o,n);u.position.set(0,.7,-.21),u.castShadow=!0,this.group.add(u);const h=new ke(.08,.45,.4);for(const p of[-.7,.7]){const a=new ce(h,i);a.position.set(p,.22,0),a.castShadow=!0,this.group.add(a)}}}class Zp{constructor(e,t=0){this.group=new _t,this.group.position.copy(e),this.group.rotation.y=t;const n=new Xe({color:1710624,flatShading:!0}),i=new Dt(.08,.1,4.5,6),s=new ce(i,n);s.position.y=2.25,s.castShadow=!0,this.group.add(s);const l=new ke(.7,.1,.1),o=new ce(l,n);o.position.set(.35,4.4,0),this.group.add(o);const u=new ke(.25,.7,.25),h=new ce(u,n);h.position.set(.7,4.2,0),h.castShadow=!0,this.group.add(h);const p=[13639712,13214247,2138144];this.lights=[];for(let a=0;a<3;a++){const c=new Ds(.08,8),f=new Tt({color:p[a]}),_=new ce(c,f);_.position.set(.84,4.4-a*.2,0),_.rotation.y=Math.PI/2,this.group.add(_),this.lights.push(_)}this._current=0,this._timer=0,this._updateAppearance()}update(e){this._timer+=e,this._timer>3&&(this._timer=0,this._current=(this._current+1)%3,this._updateAppearance())}_updateAppearance(){for(let e=0;e<this.lights.length;e++){const t=e===this._current;this.lights[e].material.color.setHex([13639712,13214247,2138144][e]),this.lights[e].material.opacity=t?1:.25,this.lights[e].material.transparent=!0}}}class Jp{constructor(e){this.group=new _t,this.group.position.copy(e);const t=new Xe({color:9050650,flatShading:!0}),n=new Dt(.15,.18,.7,8),i=new ce(n,t);i.position.y=.35,i.castShadow=!0,this.group.add(i);const s=new Dt(.2,.15,.1,8),l=new ce(s,t);l.position.y=.75,this.group.add(l);const o=new Dt(.06,.06,.15,6);for(const u of[0,Math.PI]){const h=new ce(o,t);h.rotation.z=Math.PI/2,h.position.set(Math.cos(u)*.15,.4,Math.sin(u)*.15),this.group.add(h)}}}class Qp{constructor(e,t=0,n="ZONA CERO"){this.group=new _t,this.group.position.copy(e),this.group.rotation.y=t;const i=new Xe({color:2763312,flatShading:!0}),s=new Dt(.05,.05,2.5,6),l=new ce(s,i);l.position.y=1.25,l.castShadow=!0,this.group.add(l);const o=document.createElement("canvas");o.width=128,o.height=64;const u=o.getContext("2d");u.fillStyle="#c9a227",u.fillRect(0,0,128,64),u.fillStyle="#1a1a1d",u.font="bold 18px monospace",u.textAlign="center",u.textBaseline="middle",u.fillText(n,64,32);const h=new Qo(o);h.magFilter=ct,h.minFilter=ct;const p=new gi(.8,.4),a=new Tt({map:h,side:St}),c=new ce(p,a);c.position.set(0,2.3,0),this.group.add(c)}}class em{constructor(e){this.group=new _t,this.group.position.copy(e);const t=new Xe({color:2760728,flatShading:!0}),n=new Dt(.12,.18,2.5,5),i=new ce(n,t);i.position.y=1.25,i.castShadow=!0,this.group.add(i);const s=3+Math.floor(Math.random()*3);for(let l=0;l<s;l++){const o=new Dt(.03,.06,.8,5),u=new ce(o,t),h=Math.PI*2/s*l+Math.random()*.5,p=1.5+Math.random()*.8;u.position.set(Math.cos(h)*.25,p,Math.sin(h)*.25),u.rotation.z=Math.PI/3,u.rotation.y=h,u.castShadow=!0,this.group.add(u)}}}function tm(r,e=null){const t=Math.random();let n=e;n||(t<.3?n="farol":t<.5?n="banca":t<.65?n="semaforo":t<.78?n="hidrante":t<.9?n="cartel":n="arbol");let i,s=!1;switch(n){case"farol":i=new jp(r);break;case"banca":i=new Kp(r,Math.random()*Math.PI*2);break;case"semaforo":i=new Zp(r,Math.random()*Math.PI*2),s=!0;break;case"hidrante":i=new Jp(r);break;case"cartel":i=new Qp(r,Math.random()*Math.PI*2,"PUERTO CENIZA");break;case"arbol":i=new em(r);break;default:return null}return{instance:i,group:i.group,updatable:s,type:n}}const nm={floor:{id:"floor",solid:!1,height:.2,texture:"sidewalk"},road:{id:"road",solid:!1,height:.1,texture:"road"},roadV:{id:"roadV",solid:!1,height:.1,texture:"roadV"},sidewalk:{id:"sidewalk",solid:!1,height:.2,texture:"sidewalk"},dirt:{id:"dirt",solid:!1,height:.15,texture:"dirt"},building:{id:"building",solid:!0,height:8,texture:"concrete"},buildingBrick:{id:"buildingBrick",solid:!0,height:6,texture:"brick"},buildingLit:{id:"buildingLit",solid:!0,height:10,texture:"windowLit"},barrel:{id:"barrel",solid:!0,height:1.2,texture:null},trash:{id:"trash",solid:!1,height:.6,texture:null}};function im(r){return nm[r]?.solid??!1}class rm{constructor(){this.group=new _t,this.tiles=[],this.props=[],this.propUpdatables=[],this.map=null}build(e,t){const n=Tp,i=qp(n);for(let l=0;l<n;l++)for(let o=0;o<n;o++){const u=i[l][o],h=Xp.create(u);h.position.set(o*ze,0,l*ze),this.group.add(h),this.tiles.push(h),t&&im(u)&&(u==="building"?t.add(h,new P(ze,8,ze),new P(0,4,0)):u==="buildingBrick"?t.add(h,new P(ze,6,ze),new P(0,3,0)):u==="buildingLit"?t.add(h,new P(ze,10,ze),new P(0,5,0)):u==="barrel"&&t.add(h,new P(1,1.2,1)))}const s=$p(i,n);for(const l of s){const o=new P(l.x*ze,0,l.z*ze),u=tm(o,l.type);u&&(this.group.add(u.group),this.props.push(u),u.updatable&&this.propUpdatables.push(u.instance))}e.add(this.group),this.map=i,this.isWalkableAt=(l,o)=>{const u=Math.round(l/ze),h=Math.round(o/ze);if(u<0||h<0||u>=n||h>=n)return!1;const p=i[h][u];return p==="sidewalk"||p==="dirt"||p==="floor"||p==="road"||p==="roadV"},this.reserved={spawn:{x:8*ze,z:8*ze},sell:{x:22*ze,z:8*ze},bed:{x:8*ze,z:22*ze},dealer:{x:27*ze,z:27*ze},craft:{x:16*ze,z:6*ze}},this.getSpawnGrid=()=>{const l=[];for(let u=4;u<n-4;u+=4)for(let h=4;h<n-4;h+=4){const p=h*ze,a=u*ze;if(!this.isWalkableAt(p,a))continue;const c=this.reserved,f=Math.hypot(p-c.sell.x,a-c.sell.z)<6,_=Math.hypot(p-c.bed.x,a-c.bed.z)<6,g=Math.hypot(p-c.spawn.x,a-c.spawn.z)<6,m=Math.hypot(p-c.dealer.x,a-c.dealer.z)<6,d=Math.hypot(p-c.craft.x,a-c.craft.z)<6;f||_||g||m||d||l.push(new P(p,0,a))}return l}}update(e,t){for(const n of this.propUpdatables)n.update(e)}setNightMode(e){for(const t of this.props)t.instance.setNight&&t.instance.setNight(e)}dispose(e){e.remove(this.group),this.group.traverse(t=>{t.geometry?.dispose?.(),t.material?.dispose?.()}),this.tiles=[],this.props=[],this.propUpdatables=[]}}const sm={ZonaCero:rm};class am{constructor(e){this.scene=e,this.active=null,this.activeName=null}loadDistrict(e,t){if(this.activeName===e)return;this.active&&this.active.dispose(this.scene);const n=sm[e];if(!n){console.warn(`Distrito ${e} no existe`);return}this.active=new n,this.active.build(this.scene,t),this.activeName=e}update(e,t){this.active?.update(e,t)}}class om{constructor(e,t,n=null){this.input=t,this.scene=e,this.stats=n,this.position=new P(16,0,16),this.radius=Ap,this.baseWalk=po,this.baseRun=mo,this.speedWalk=po,this.speedRun=mo,this.speedMult=1,this.root=new _t,this.root.position.copy(this.position),e.add(this.root),this._buildBody(),this.animTime=0,this.state="idle",this._boostActive=!1,this._boostPulse=0,this.beggingTimer=0}_buildBody(){const e=new Xe({color:10132122,flatShading:!0});this._originalColors=new Map,this.root.traverse(n=>{n.isMesh&&n.material?.color&&this._originalColors.set(n,n.material.color.clone())});const t=(n,i,s,l,o,u)=>{const h=new ce(new ke(n,i,s),e);return h.position.set(l,o,u),h.castShadow=!0,h.receiveShadow=!0,h};this.parts={hips:t(.35,.25,.25,0,.95,0),torso:t(.4,.55,.25,0,1.35,0),head:t(.25,.28,.25,0,1.75,0),armL:t(.14,.55,.14,-.28,1.3,0),armR:t(.14,.55,.14,.28,1.3,0),legL:t(.16,.75,.16,-.1,.4,0),legR:t(.16,.75,.16,.1,.4,0)},Object.values(this.parts).forEach(n=>this.root.add(n)),[this.parts.armL,this.parts.armR].forEach(n=>{n.geometry.translate(0,-.275,0),n.position.y+=.275}),[this.parts.legL,this.parts.legR].forEach(n=>{n.geometry.translate(0,-.375,0),n.position.y+=.375})}playBeg(){this.beggingTimer=1}update(e,t,n){this.beggingTimer>0&&(this.beggingTimer-=e);const{x:i,z:s}=this.input.axis,l=i!==0||s!==0,o=this.input.isRunning&&l;let u=o?this.speedRun:this.speedWalk;this.stats?.getSpeedMultiplier&&(u*=this.stats.getSpeedMultiplier());const h=new P(i,0,s);l&&h.normalize();const p=h.clone().multiplyScalar(l?u*e:0);if(n?this.position.copy(n.resolveMove(this.position,p,this.radius)):this.position.add(p),this.root.position.copy(this.position),l){let c=Math.atan2(h.x,h.z)-this.root.rotation.y;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;this.root.rotation.y+=c*Math.min(1,12*e)}this.state=l?o?"run":"walk":"idle",this.animTime+=e*(this.state==="run"?10:this.state==="walk"?6:1.5),this._animateProcedural()}_animateProcedural(){const e=this.animTime,{armL:t,armR:n,legL:i,legR:s,torso:l,head:o}=this.parts;if(this.beggingTimer>0){l.position.y=1.25,o.position.y=1.65,t.rotation.x=-1.1,n.rotation.x=-1.1,t.rotation.z=-.15,n.rotation.z=.15,i.rotation.x=0,s.rotation.x=0;return}if(t.rotation.z=0,n.rotation.z=0,this.state==="idle"){const u=Math.sin(e)*.03;l.position.y=1.35+u,o.position.y=1.75+u,t.rotation.x=Math.sin(e)*.05,n.rotation.x=Math.sin(e)*.05,i.rotation.x=0,s.rotation.x=0}else{const u=this.state==="run"?.9:.5,h=Math.sin(e);i.rotation.x=h*u,s.rotation.x=-h*u,t.rotation.x=-h*u*.8,n.rotation.x=h*u*.8,l.position.y=1.35+Math.abs(Math.sin(e))*.04,o.position.y=1.75+Math.abs(Math.sin(e))*.04}}dispose(){this.root.traverse(e=>{e.geometry?.dispose?.(),e.material?.dispose?.()}),this.scene.remove(this.root)}}const Ot={lata:{id:"lata",name:"Lata vacía",weight:.2,value:1},botella:{id:"botella",name:"Botella PET",weight:.3,value:2},carton:{id:"carton",name:"Cartón",weight:.5,value:3},chatarra:{id:"chatarra",name:"Chatarra",weight:1,value:5},cable:{id:"cable",name:"Cable cobre",weight:.4,value:8},reloj:{id:"reloj",name:"Reloj oxidado",weight:.1,value:25,rare:!0},moneda:{id:"moneda",name:"Moneda vieja",weight:.02,value:40,rare:!0},anillo:{id:"anillo",name:"Anillo",weight:.05,value:60,rare:!0},retrovisor:{id:"retrovisor",name:"Retrovisor",weight:.8,value:18},radio:{id:"radio",name:"Radio auto",weight:1.5,value:35},pan:{id:"pan",name:"Pan duro",weight:.3,value:4,consumable:"hambre",amount:25,animo:5},lataComida:{id:"lataComida",name:"Lata de atún",weight:.4,value:8,consumable:"hambre",amount:45,animo:8},agua:{id:"agua",name:"Botella agua",weight:.5,value:3,consumable:"sed",amount:35},refresco:{id:"refresco",name:"Refresco",weight:.4,value:5,consumable:"sed",amount:50,energia:10,animo:10},cafe:{id:"cafe",name:"Café caliente",weight:.3,value:6,consumable:"energia",amount:40,animo:15},vendaje:{id:"vendaje",name:"Vendaje",weight:.1,value:15,consumable:"salud",amount:30},jabon:{id:"jabon",name:"Jabón",weight:.2,value:12,consumable:"higiene",amount:40},cepillo:{id:"cepillo",name:"Cepillo",weight:.1,value:8,consumable:"higiene",amount:20},vacuna:{id:"vacuna",name:"Vacuna",weight:.1,value:40,cure:"tetanos"},carbon:{id:"carbon",name:"Carbón activo",weight:.1,value:25,cure:"intoxicacion"},jarabe:{id:"jarabe",name:"Jarabe",weight:.2,value:20,cure:"gripe"},pomada:{id:"pomada",name:"Pomada",weight:.15,value:18,cure:"sarna"},antibiotico:{id:"antibiotico",name:"Antibiótico",weight:.1,value:45,cure:"infeccion"},antiparasitario:{id:"antiparasitario",name:"Antiparasitario",weight:.1,value:30,cure:"parasitos"},tintico:{id:"tintico",name:"Tintico",weight:.1,value:5,consumable:"animo",amount:30,energia:20,substance:!0},pegante:{id:"pegante",name:"Pegante",weight:.2,value:8,consumable:"animo",amount:40,substance:!0},pastilla:{id:"pastilla",name:"Pastilla",weight:.05,value:15,consumable:"animo",amount:60,substance:!0}},lm=[{item:"lata",weight:33},{item:"botella",weight:24},{item:"carton",weight:17},{item:"chatarra",weight:8},{item:"cable",weight:4},{item:"pan",weight:4},{item:"agua",weight:3},{item:"lataComida",weight:2},{item:"vendaje",weight:1}],cm=[{item:"reloj",weight:55},{item:"moneda",weight:30},{item:"anillo",weight:15}],hs=[{item:"tintico",weight:50},{item:"pegante",weight:30},{item:"pastilla",weight:20}];class um{constructor(e,t){this.scene=e,this.used=!1,this.cooldown=0,this.sorting=!1,this.sortProgress=0,this.group=new _t,this.group.position.copy(t),e.add(this.group);const n=new Ns(.5,0),i=new Xe({color:Ct.TRASH,flatShading:!0});this.mesh=new ce(n,i),this.mesh.position.y=.4,this.mesh.castShadow=!0,this.group.add(this.mesh);const s=new Rn(.5,.6,12),l=new Tt({color:Ct.ACCENT_AMBER,side:St,transparent:!0,opacity:.7});this.marker=new ce(s,l),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.02,this.group.add(this.marker);const o=new Rn(.6,.85,16),u=new Tt({color:Ct.ACCENT_GOLD,side:St,transparent:!0,opacity:0,depthWrite:!1});this.aura=new ce(o,u),this.aura.rotation.x=-Math.PI/2,this.aura.position.y=.03,this.group.add(this.aura);const h=new gi(1.2,.12),p=new Tt({color:0,transparent:!0,opacity:.7,depthTest:!1});this.sortBarBg=new ce(h,p),this.sortBarBg.rotation.x=-Math.PI/2,this.sortBarBg.position.y=.06,this.sortBarBg.visible=!1,this.group.add(this.sortBarBg);const a=new gi(1.2,.12),c=new Tt({color:Ct.ACCENT_GREEN,depthTest:!1});this.sortBarFill=new ce(a,c),this.sortBarFill.rotation.x=-Math.PI/2,this.sortBarFill.position.y=.065,this.sortBarFill.visible=!1,this.group.add(this.sortBarFill),this._boostActive=!1,this.onRespawn=null}get position(){return this.group.position}get sortComplete(){return this.sortProgress>=go}setBoost(e){this._boostActive=e}startSorting(){return this.used||this.cooldown>0?!1:(this.sorting=!0,this.sortProgress=0,this.sortBarBg.visible=!0,this.sortBarFill.visible=!0,!0)}stopSorting(){this.sorting=!1,this.sortProgress=0,this.sortBarBg.visible=!1,this.sortBarFill.visible=!1}harvest(e=!1,t=!1,n={}){if(this.used||this.cooldown>0)return null;const i=n.rareChanceMult??1,s=[];let l,o;t?(l=e?6:4,o=(e?.25:.12)*i):(l=e?4:2,o=(e?.15:.05)*i);for(let h=0;h<l;h++)s.push(this._weightedPick(lm));let u=null;return Math.random()<o&&(u=this._weightedPick(cm),s.push(u)),this.used=!0,this.cooldown=Dp,this.mesh.visible=!1,this.marker.visible=!1,this.aura.visible=!1,this.stopSorting(),{items:s,rare:u,sorted:t}}update(e){if(this.sorting&&!this.used){this.sortProgress+=e;const t=Math.min(1,this.sortProgress/go);this.sortBarFill.scale.x=t,this.sortBarFill.position.x=-(1-t)*.6,this.sortComplete&&this.sortBarFill.material.color.setHex(Ct.ACCENT_GOLD)}if(this.cooldown>0&&(this.cooldown-=e,this.cooldown<=0&&(typeof this.onRespawn=="function"&&this.onRespawn(this),this.used=!1,this.mesh.visible=!0,this.marker.visible=!0,this.aura.visible=!0)),this.marker.visible&&(this.marker.rotation.z+=e*.8),this.aura.visible){const t=this._boostActive?.7:0,n=this._boostActive?1+Math.sin(performance.now()*.005)*.15:1;this.aura.material.opacity+=(t-this.aura.material.opacity)*Math.min(1,e*8);const i=this.aura.scale.x;this.aura.scale.setScalar(i+(n-i)*Math.min(1,e*8)),this.aura.rotation.z-=e*1.5}}relocate(e){this.group.position.copy(e)}_weightedPick(e){const t=e.reduce((i,s)=>i+s.weight,0);let n=Math.random()*t;for(const i of e)if(n-=i.weight,n<=0)return i.item;return e[0].item}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry?.dispose?.(),e.material?.dispose?.()})}}class hm{constructor(e,t){this.scene=e,this.group=new _t,this.group.position.copy(t),e.add(this.group);const n=new ke(1.5,1.2,1),i=new Xe({color:4864554,flatShading:!0}),s=new ce(n,i);s.position.y=.6,s.castShadow=!0,s.receiveShadow=!0,this.group.add(s);const l=new ke(2,.15,1.3),o=new ce(l,i);o.position.y=1.6,o.castShadow=!0,this.group.add(o);const u=new Er(.1,8,8),h=new Tt({color:Ct.ACCENT_AMBER}),p=new ce(u,h);p.position.set(0,1.4,.5),this.group.add(p)}get position(){return this.group.position}sell(e,t=1){return e.sellAll(t)}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry?.dispose?.(),e.material?.dispose?.()})}}class dm{constructor(e,t){this.scene=e,this.cooldown=0,this.group=new _t,this.group.position.copy(t),e.add(this.group);const n=new ke(1.2,.25,2),i=new Xe({color:5592416,flatShading:!0}),s=new ce(n,i);s.position.y=.15,s.castShadow=!0,s.receiveShadow=!0,this.group.add(s);const l=new ke(.7,.15,.4),o=new Xe({color:7829376,flatShading:!0}),u=new ce(l,o);u.position.set(0,.32,-.7),u.castShadow=!0,this.group.add(u);const h=new ke(1.3,.05,2.1),p=new Xe({color:9071162,flatShading:!0}),a=new ce(h,p);a.position.y=.02,a.receiveShadow=!0,this.group.add(a);const c=new ke(1.15,.08,1.2),f=new Xe({color:4864560,flatShading:!0}),_=new ce(c,f);_.position.set(0,.3,.4),_.castShadow=!0,this.group.add(_);const g=new Rn(1,1.3,24),m=new Tt({color:Ct.ACCENT_CYAN,side:St,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1});this.marker=new ce(g,m),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.6,this.marker.renderOrder=999,this.group.add(this.marker),this.light=new Os(2799562,0,4),this.light.position.set(0,.5,0),this.group.add(this.light)}get position(){return this.group.position}update(e){this.marker&&(this.marker.rotation.z+=e*.6,this.marker.material.opacity=.7+Math.sin(performance.now()*.003)*.2),this.cooldown>0&&(this.cooldown-=e)}setNight(e){this.light&&(this.light.intensity=e?.6:0)}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry?.dispose?.(),e.material?.dispose?.()})}}class fm{constructor(e,t,n=0){this.scene=e,this.used=!1,this.cooldown=0,this.group=new _t,this.group.position.copy(t),this.group.rotation.y=n,e.add(this.group);const i=new Xe({color:Ct.CAR,flatShading:!0}),s=new ce(new ke(2,.8,4),i);s.position.y=.6,s.castShadow=!0,s.receiveShadow=!0,this.group.add(s);const l=new ce(new ke(1.7,.7,2),i);l.position.y=1.35,l.castShadow=!0,this.group.add(l);const o=new Xe({color:1710634,flatShading:!0}),u=new ce(new ke(1.6,.6,.1),o);u.position.set(0,1.35,1),this.group.add(u);const h=new Xe({color:1118481,flatShading:!0}),p=new Dt(.4,.4,.3,8),a=[[-1.05,.4,1.2],[1.05,.4,1.2],[-1.05,.4,-1.2],[1.05,.4,-1.2]];for(const[m,d,x]of a){const v=new ce(p,h);v.position.set(m,d,x),v.rotation.z=Math.PI/2,v.castShadow=!0,this.group.add(v)}const c=new Xe({color:8947848,flatShading:!0});this.mirrors=[];const f=new ke(.3,.2,.15);for(const m of[-1.15,1.15]){const d=new ce(f,c);d.position.set(m,1.5,.9),d.castShadow=!0,this.group.add(d),this.mirrors.push(d)}const _=new Rn(1.2,1.5,24),g=new Tt({color:Ct.ACCENT_RED,side:St,transparent:!0,opacity:.7});this.marker=new ce(_,g),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.05,this.group.add(this.marker)}get position(){return this.group.position}steal(e=1){if(this.used||this.cooldown>0)return null;const t=[],n=Math.random()<.5?2:1;for(let l=0;l<n;l++)t.push("retrovisor");Math.random()<.2&&t.push("radio");const i=.25*e,s=Math.random()<i;return this.used=!0,this.cooldown=Wp,this.mirrors.forEach(l=>l.visible=!1),this.marker.visible=!1,{items:t,caught:s}}update(e){this.cooldown>0&&(this.cooldown-=e,this.cooldown<=0&&(this.used=!1,this.mirrors.forEach(t=>t.visible=!0),this.marker.visible=!0)),this.marker.visible&&(this.marker.rotation.z+=e*.5)}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry?.dispose?.(),e.material?.dispose?.()})}}class pm{constructor(e,t){this.scene=e,this.group=new _t,this.group.position.copy(t),this.scene.add(this.group);const n=new Xe({color:Ct.DEALER,flatShading:!0}),i=new ce(new ke(.5,1,.4),n);i.position.y=.9,i.castShadow=!0,this.group.add(i);const s=new ce(new ke(.3,.3,.3),n);s.position.y=1.55,s.castShadow=!0,this.group.add(s);const l=new ce(new Is(.3,.3,6),new Xe({color:1118481,flatShading:!0}));l.position.y=1.85,this.group.add(l);const o=new ce(new ke(1.2,.1,.8),new Xe({color:3811866,flatShading:!0}));o.position.set(.8,.6,0),o.castShadow=!0,o.receiveShadow=!0,this.group.add(o);const u=new ce(new Dt(.06,.06,.25,8),new Xe({color:10181046}));u.position.set(.7,.75,.15),this.group.add(u);const h=new ce(new ke(.18,.08,.12),new Xe({color:15528177}));h.position.set(.9,.68,-.15),this.group.add(h);const p=new Os(10181046,2.5,8);p.position.set(.8,1.2,0),this.group.add(p);const a=new ce(new Er(.12,8,8),new Tt({color:10181046}));a.position.set(.8,1.2,0),this.group.add(a);const c=new Rn(1,1.3,24),f=new Tt({color:Ct.ACCENT_PURPLE,side:St,transparent:!0,opacity:.8});this.marker=new ce(c,f),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.05,this.group.add(this.marker),this.isNight=!1}get position(){return this.group.position}sellSubstances(e,t,n=1){if(!t)return{earned:0,reason:"day"};if(!e?.items||typeof e.remove!="function")return{earned:0,reason:"invalid_inventory"};let i=0;const s=e.items.filter(l=>Ot[l.id]?.substance).map(l=>({id:l.id,qty:l.qty}));for(const l of s){const o=Ot[l.id],u=Number(l.qty)||0;if(!o||u<=0)continue;let h=o.value*u;h*=1.8,h*=1.3,h*=n,i+=h,e.remove(l.id,u)}return{earned:Math.round(i),reason:null}}buySubstance(e,t,n=null){if(!e||!Array.isArray(e.items)||typeof e.add!="function"||!t||!Number.isFinite(t.dinero))return{bought:null,cost:0,reason:"invalid_data"};let i=n;if(!i){if(!Array.isArray(hs)||hs.length===0)return{bought:null,cost:0,reason:"empty_loot"};const o=hs.filter(p=>Ot[p.item]&&p.weight>0),u=o.reduce((p,a)=>p+a.weight,0);if(u<=0)return{bought:null,cost:0,reason:"empty_loot"};let h=Math.random()*u;i=o[o.length-1].item;for(const p of o)if(h-=p.weight,h<0){i=p.item;break}}const s=Ot[i];if(!s)return{bought:null,cost:0,reason:"invalid_item"};const l=s.value;return t.dinero<l?{bought:null,cost:l,reason:"insufficient_money"}:e.totalWeight+s.weight>e.maxWeight?{bought:null,cost:l,reason:"inventory_full"}:(t.dinero-=l,e.add(s,1),{bought:s,cost:l,reason:null})}getProducts(){return[Ot.tintico,Ot.pegante,Ot.pastilla]}update(e){this.marker&&(this.marker.rotation.z+=e*.6)}setNight(e){this.isNight=e,this.marker&&(this.marker.material.opacity=e?.9:.3)}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry?.dispose?.(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material?.dispose?.()})}}class mm{constructor(e,t){this.scene=e,this.group=new _t,this.group.position.copy(t),e.add(this.group);const n=new Xe({color:5913114,flatShading:!0}),i=new ce(new ke(1.8,.1,1.2),n);i.position.y=.9,i.castShadow=!0,this.group.add(i);const s=new ke(.12,.9,.12),l=[[-.8,.45,-.5],[.8,.45,-.5],[-.8,.45,.5],[.8,.45,.5]];for(const[c,f,_]of l){const g=new ce(s,n);g.position.set(c,f,_),this.group.add(g)}const o=new Xe({color:10066329,flatShading:!0}),u=new ce(new ke(.3,.2,.4),o);u.position.set(-.5,1.05,0),this.group.add(u);const h=new ce(new ke(.1,.1,.5),o);h.position.set(.4,1,.2),h.rotation.y=.5,this.group.add(h);const p=new Rn(1.2,1.5,24),a=new Tt({color:Ct.ACCENT_GREEN,side:St,transparent:!0,opacity:.8});this.marker=new ce(p,a),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.05,this.group.add(this.marker)}get position(){return this.group.position}update(e){this.marker&&(this.marker.rotation.z+=e*.6)}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry?.dispose?.(),e.material?.dispose?.()})}}class _m{constructor(){this.hambre=100,this.sed=100,this.energia=100,this.salud=100,this.higiene=100,this.animo=100,this.dinero=0,this.xp=0,this.level=1,this.diseaseSystem=null}get saludMental(){return this.animo}set saludMental(e){this.animo=e}setDiseaseSystem(e){this.diseaseSystem=e}update(e,t,n=null,i=null,s=null){n&&(this.diseaseSystem=n);const l=n??this.diseaseSystem,o=(typeof l?.getAggregatedEffects=="function"?l.getAggregatedEffects():null)??{healthDrain:l?.healthDrain??0,mentalDrain:l?.mentalDrain??0,hungerDrainMultiplier:1,energyDrainMultiplier:1,hygieneDrain:0},u=s?.getEffect("decayMult",1)??1;this.hambre=Math.max(0,this.hambre-Ri.hambre*o.hungerDrainMultiplier*e*u),this.sed=Math.max(0,this.sed-Ri.sed*e*u),this.energia=Math.max(0,this.energia-Ri.energia*o.energyDrainMultiplier*e),this.higiene=Math.max(0,this.higiene-(Ri.higiene+o.hygieneDrain)*e);let h=Ri.animo+o.mentalDrain;this.hambre<30&&(h*=1.5),this.sed<30&&(h*=1.5),this.energia<30&&(h*=1.3),this.animo=Math.max(0,this.animo-h*e);let p=0;for(this.hambre===0&&(p+=2),this.sed===0&&(p+=2),this.energia===0&&(p+=1),this.higiene===0&&(p+=.5),this.animo===0&&(p+=.5),p+=o.healthDrain,p>0&&(this.salud=Math.max(0,this.salud-p*e)),this.hambre>50&&this.sed>50&&this.energia>50&&this.higiene>40&&this.animo>40&&this.salud<100&&o.healthDrain===0&&(this.salud=Math.min(100,this.salud+.5*e));this.xp>=ys*this.level;)this.xp-=ys*this.level,this.level++,s&&s.addPoints(1),window.dispatchEvent(new CustomEvent("levelup",{detail:{level:this.level}}))}addXP(e,t=null){const n=t?.getEffect("xpMult",1)??1;this.xp+=Math.round(e*n)}canEat(){const e=this.diseaseSystem;return(typeof e?.getAggregatedEffects=="function"?e.getAggregatedEffects():null)?.canEat??!0}getSpeedMultiplier(){let e=1;const t=this.diseaseSystem,n=typeof t?.getAggregatedEffects=="function"?t.getAggregatedEffects():null;return n?.speedMultiplier&&(e*=n.speedMultiplier),this.animo<Ci.animoVelocidad&&(e*=.8),this.animo===0&&(e*=.7),this.energia===0&&(e*=.5),e}getDiseaseChanceMultiplier(){return this.higiene<Ci.higieneEnfermedad?1.5:1}getDesaturation(){if(this.animo>=Ci.animoVision)return 0;const e=1-this.animo/Ci.animoVision;return Math.min(1,e)}isRejectedByNPCs(){return this.higiene<Ci.higieneRechazo}serialize(){return{hambre:this.hambre,sed:this.sed,energia:this.energia,salud:this.salud,higiene:this.higiene,animo:this.animo,dinero:this.dinero,xp:this.xp,level:this.level}}deserialize(e){e&&(e.hambre!==void 0&&(this.hambre=e.hambre),e.sed!==void 0&&(this.sed=e.sed),e.energia!==void 0&&(this.energia=e.energia),e.salud!==void 0&&(this.salud=e.salud),e.higiene!==void 0&&(this.higiene=e.higiene),e.animo!==void 0?this.animo=e.animo:e.saludMental!==void 0&&(this.animo=e.saludMental),e.dinero!==void 0&&(this.dinero=e.dinero),e.xp!==void 0&&(this.xp=e.xp),e.level!==void 0&&(this.level=e.level))}}class gm{constructor(){this.acc=0}update(e,t){this.acc+=e}}const ds="habitante-de-calle-save-v1";class vm{save(e){localStorage.setItem(ds,JSON.stringify(e))}load(){const e=localStorage.getItem(ds);return e?JSON.parse(e):null}clear(){localStorage.removeItem(ds)}}class xm{constructor(){this.colliders=[]}add(e,t){const n=t?new Vn().setFromCenterAndSize(e.position.clone().setY(e.position.y+t.y/2),t):new Vn().setFromObject(e);this.colliders.push({box:n,mesh:e})}clear(){this.colliders=[]}resolveMove(e,t,n=.4){const i=e.clone();return i.x+=t.x,this._pushOut(i,n,"x",t.x),i.z+=t.z,this._pushOut(i,n,"z",t.z),i}_pushOut(e,t,n,i){for(const s of this.colliders)e.x+t>s.box.min.x&&e.x-t<s.box.max.x&&e.z+t>s.box.min.z&&e.z-t<s.box.max.z&&(n==="x"?e.x=i>0?s.box.min.x-t:s.box.max.x+t:e.z=i>0?s.box.min.z-t:s.box.max.z+t)}}class Mm{constructor(e=tl){this.items=[],this.maxWeight=e}get totalWeight(){return this.items.reduce((e,t)=>e+t.weight*t.qty,0)}get isFull(){return this.totalWeight>=this.maxWeight}get itemCount(){return this.items.reduce((e,t)=>e+t.qty,0)}add(e,t=1){if(!e||this.totalWeight+e.weight*t>this.maxWeight)return!1;const n=this.items.find(i=>i.id===e.id);return n?n.qty+=t:this.items.push({...e,qty:t}),!0}remove(e,t=1){const n=this.items.findIndex(i=>i.id===e);return n===-1?!1:(this.items[n].qty-=t,this.items[n].qty<=0&&this.items.splice(n,1),!0)}count(e){return this.items.find(t=>t.id===e)?.qty??0}sellAll(e=1){const t=this.items.reduce((n,i)=>n+i.value*i.qty*e,0);return this.items=[],Math.round(t)}serialize(){return{items:this.items}}deserialize(e){this.items=e.items??[]}}var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ft={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var c=this||t;if(a=parseFloat(a),c.ctx||p(),typeof a<"u"&&a>=0&&a<=1){if(c._volume=a,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var f=0;f<c._howls.length;f++)if(!c._howls[f]._webAudio)for(var _=c._howls[f]._getSoundIds(),g=0;g<_.length;g++){var m=c._howls[f]._soundById(_[g]);m&&m._node&&(m._node.volume=m._volume*a)}return c}return c._volume},mute:function(a){var c=this||t;c.ctx||p(),c._muted=a,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a?0:c._volume,t.ctx.currentTime);for(var f=0;f<c._howls.length;f++)if(!c._howls[f]._webAudio)for(var _=c._howls[f]._getSoundIds(),g=0;g<_.length;g++){var m=c._howls[f]._soundById(_[g]);m&&m._node&&(m._node.muted=a?!0:m._muted)}return c},stop:function(){for(var a=this||t,c=0;c<a._howls.length;c++)a._howls[c].stop();return a},unload:function(){for(var a=this||t,c=a._howls.length-1;c>=0;c--)a._howls[c].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,p()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var c=new Audio;c.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return a}if(!c||typeof c.canPlayType!="function")return a;var f=c.canPlayType("audio/mpeg;").replace(/^no$/,""),_=a._navigator?a._navigator.userAgent:"",g=_.match(/OPR\/(\d+)/g),m=g&&parseInt(g[0].split("/")[1],10)<33,d=_.indexOf("Safari")!==-1&&_.indexOf("Chrome")===-1,x=_.match(/Version\/(.*?) /),v=d&&x&&parseInt(x[1],10)<15;return a._codecs={mp3:!!(!m&&(f||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var c=function(f){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var _=new Audio;_._unlocked=!0,a._releaseHtml5Audio(_)}catch{a.noAudio=!0;break}for(var g=0;g<a._howls.length;g++)if(!a._howls[g]._webAudio)for(var m=a._howls[g]._getSoundIds(),d=0;d<m.length;d++){var x=a._howls[g]._soundById(m[d]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}a._autoResume();var v=a.ctx.createBufferSource();v.buffer=a._scratchBuffer,v.connect(a.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),v.onended=function(){v.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var E=0;E<a._howls.length;E++)a._howls[E]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var c=this||t;return a._unlocked&&c._html5AudioPool.push(a),c},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<a._howls.length;c++)if(a._howls[c]._webAudio){for(var f=0;f<a._howls[c]._sounds.length;f++)if(!a._howls[c]._sounds[f]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var _=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(_,_)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var c=0;c<a._howls.length;c++)a._howls[c]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var c=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(a)};n.prototype={init:function(a){var c=this;return t.ctx||p(),c._autoplay=a.autoplay||!1,c._format=typeof a.format!="string"?a.format:[a.format],c._html5=a.html5||!1,c._muted=a.mute||!1,c._loop=a.loop||!1,c._pool=a.pool||5,c._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,c._rate=a.rate||1,c._sprite=a.sprite||{},c._src=typeof a.src!="string"?a.src:[a.src],c._volume=a.volume!==void 0?a.volume:1,c._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=a.onend?[{fn:a.onend}]:[],c._onfade=a.onfade?[{fn:a.onfade}]:[],c._onload=a.onload?[{fn:a.onload}]:[],c._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],c._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],c._onpause=a.onpause?[{fn:a.onpause}]:[],c._onplay=a.onplay?[{fn:a.onplay}]:[],c._onstop=a.onstop?[{fn:a.onstop}]:[],c._onmute=a.onmute?[{fn:a.onmute}]:[],c._onvolume=a.onvolume?[{fn:a.onvolume}]:[],c._onrate=a.onrate?[{fn:a.onrate}]:[],c._onseek=a.onseek?[{fn:a.onseek}]:[],c._onunlock=a.onunlock?[{fn:a.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var a=this,c=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var f=0;f<a._src.length;f++){var _,g;if(a._format&&a._format[f])_=a._format[f];else{if(g=a._src[f],typeof g!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}_=/^data:audio\/([^;,]+);/i.exec(g),_||(_=/\.([^.]+)$/.exec(g.split("?",1)[0])),_&&(_=_[1].toLowerCase())}if(_||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),_&&t.codecs(_)){c=a._src[f];break}}if(!c){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=c,a._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new i(a),a._webAudio&&l(a),a},play:function(a,c){var f=this,_=null;if(typeof a=="number")_=a,a=null;else{if(typeof a=="string"&&f._state==="loaded"&&!f._sprite[a])return null;if(typeof a>"u"&&(a="__default",!f._playLock)){for(var g=0,m=0;m<f._sounds.length;m++)f._sounds[m]._paused&&!f._sounds[m]._ended&&(g++,_=f._sounds[m]._id);g===1?a=null:_=null}}var d=_?f._soundById(_):f._inactiveSound();if(!d)return null;if(_&&!a&&(a=d._sprite||"__default"),f._state!=="loaded"){d._sprite=a,d._ended=!1;var x=d._id;return f._queue.push({event:"play",action:function(){f.play(x)}}),x}if(_&&!d._paused)return c||f._loadQueue("play"),d._id;f._webAudio&&t._autoResume();var v=Math.max(0,d._seek>0?d._seek:f._sprite[a][0]/1e3),E=Math.max(0,(f._sprite[a][0]+f._sprite[a][1])/1e3-v),C=E*1e3/Math.abs(d._rate),T=f._sprite[a][0]/1e3,A=(f._sprite[a][0]+f._sprite[a][1])/1e3;d._sprite=a,d._ended=!1;var G=function(){d._paused=!1,d._seek=v,d._start=T,d._stop=A,d._loop=!!(d._loop||f._sprite[a][2])};if(v>=A){f._ended(d);return}var M=d._node;if(f._webAudio){var w=function(){f._playLock=!1,G(),f._refreshBuffer(d);var L=d._muted||f._muted?0:d._volume;M.gain.setValueAtTime(L,t.ctx.currentTime),d._playStart=t.ctx.currentTime,typeof M.bufferSource.start>"u"?d._loop?M.bufferSource.noteGrainOn(0,v,86400):M.bufferSource.noteGrainOn(0,v,E):d._loop?M.bufferSource.start(0,v,86400):M.bufferSource.start(0,v,E),C!==1/0&&(f._endTimers[d._id]=setTimeout(f._ended.bind(f,d),C)),c||setTimeout(function(){f._emit("play",d._id),f._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?w():(f._playLock=!0,f.once("resume",w),f._clearTimer(d._id))}else{var k=function(){M.currentTime=v,M.muted=d._muted||f._muted||t._muted||M.muted,M.volume=d._volume*t.volume(),M.playbackRate=d._rate;try{var L=M.play();if(L&&typeof Promise<"u"&&(L instanceof Promise||typeof L.then=="function")?(f._playLock=!0,G(),L.then(function(){f._playLock=!1,M._unlocked=!0,c?f._loadQueue():f._emit("play",d._id)}).catch(function(){f._playLock=!1,f._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),d._ended=!0,d._paused=!0})):c||(f._playLock=!1,G(),f._emit("play",d._id)),M.playbackRate=d._rate,M.paused){f._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||d._loop?f._endTimers[d._id]=setTimeout(f._ended.bind(f,d),C):(f._endTimers[d._id]=function(){f._ended(d),M.removeEventListener("ended",f._endTimers[d._id],!1)},M.addEventListener("ended",f._endTimers[d._id],!1))}catch(N){f._emit("playerror",d._id,N)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=f._src,M.load());var H=window&&window.ejecta||!M.readyState&&t._navigator.isCocoonJS;if(M.readyState>=3||H)k();else{f._playLock=!0,f._state="loading";var Z=function(){f._state="loaded",k(),M.removeEventListener(t._canPlayEvent,Z,!1)};M.addEventListener(t._canPlayEvent,Z,!1),f._clearTimer(d._id)}}return d._id},pause:function(a){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(a)}}),c;for(var f=c._getSoundIds(a),_=0;_<f.length;_++){c._clearTimer(f[_]);var g=c._soundById(f[_]);if(g&&!g._paused&&(g._seek=c.seek(f[_]),g._rateSeek=0,g._paused=!0,c._stopFade(f[_]),g._node))if(c._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),c._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||c._emit("pause",g?g._id:null)}return c},stop:function(a,c){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(a)}}),f;for(var _=f._getSoundIds(a),g=0;g<_.length;g++){f._clearTimer(_[g]);var m=f._soundById(_[g]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,f._stopFade(_[g]),m._node&&(f._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),f._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&f._clearSound(m._node))),c||f._emit("stop",m._id))}return f},mute:function(a,c){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(a,c)}}),f;if(typeof c>"u")if(typeof a=="boolean")f._muted=a;else return f._muted;for(var _=f._getSoundIds(c),g=0;g<_.length;g++){var m=f._soundById(_[g]);m&&(m._muted=a,m._interval&&f._stopFade(m._id),f._webAudio&&m._node?m._node.gain.setValueAtTime(a?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:a),f._emit("mute",m._id))}return f},volume:function(){var a=this,c=arguments,f,_;if(c.length===0)return a._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var g=a._getSoundIds(),m=g.indexOf(c[0]);m>=0?_=parseInt(c[0],10):f=parseFloat(c[0])}else c.length>=2&&(f=parseFloat(c[0]),_=parseInt(c[1],10));var d;if(typeof f<"u"&&f>=0&&f<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,c)}}),a;typeof _>"u"&&(a._volume=f),_=a._getSoundIds(_);for(var x=0;x<_.length;x++)d=a._soundById(_[x]),d&&(d._volume=f,c[2]||a._stopFade(_[x]),a._webAudio&&d._node&&!d._muted?d._node.gain.setValueAtTime(f,t.ctx.currentTime):d._node&&!d._muted&&(d._node.volume=f*t.volume()),a._emit("volume",d._id))}else return d=_?a._soundById(_):a._sounds[0],d?d._volume:0;return a},fade:function(a,c,f,_){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(a,c,f,_)}}),g;a=Math.min(Math.max(0,parseFloat(a)),1),c=Math.min(Math.max(0,parseFloat(c)),1),f=parseFloat(f),g.volume(a,_);for(var m=g._getSoundIds(_),d=0;d<m.length;d++){var x=g._soundById(m[d]);if(x){if(_||g._stopFade(m[d]),g._webAudio&&!x._muted){var v=t.ctx.currentTime,E=v+f/1e3;x._volume=a,x._node.gain.setValueAtTime(a,v),x._node.gain.linearRampToValueAtTime(c,E)}g._startFadeInterval(x,a,c,f,m[d],typeof _>"u")}}return g},_startFadeInterval:function(a,c,f,_,g,m){var d=this,x=c,v=f-c,E=Math.abs(v/.01),C=Math.max(4,E>0?_/E:_),T=Date.now();a._fadeTo=f,a._interval=setInterval(function(){var A=(Date.now()-T)/_;T=Date.now(),x+=v*A,x=Math.round(x*100)/100,v<0?x=Math.max(f,x):x=Math.min(f,x),d._webAudio?a._volume=x:d.volume(x,a._id,!0),m&&(d._volume=x),(f<c&&x<=f||f>c&&x>=f)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,d.volume(f,a._id),d._emit("fade",a._id))},C)},_stopFade:function(a){var c=this,f=c._soundById(a);return f&&f._interval&&(c._webAudio&&f._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(f._interval),f._interval=null,c.volume(f._fadeTo,a),f._fadeTo=null,c._emit("fade",a)),c},loop:function(){var a=this,c=arguments,f,_,g;if(c.length===0)return a._loop;if(c.length===1)if(typeof c[0]=="boolean")f=c[0],a._loop=f;else return g=a._soundById(parseInt(c[0],10)),g?g._loop:!1;else c.length===2&&(f=c[0],_=parseInt(c[1],10));for(var m=a._getSoundIds(_),d=0;d<m.length;d++)g=a._soundById(m[d]),g&&(g._loop=f,a._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=f,f&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,a.playing(m[d])&&(a.pause(m[d],!0),a.play(m[d],!0)))));return a},rate:function(){var a=this,c=arguments,f,_;if(c.length===0)_=a._sounds[0]._id;else if(c.length===1){var g=a._getSoundIds(),m=g.indexOf(c[0]);m>=0?_=parseInt(c[0],10):f=parseFloat(c[0])}else c.length===2&&(f=parseFloat(c[0]),_=parseInt(c[1],10));var d;if(typeof f=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,c)}}),a;typeof _>"u"&&(a._rate=f),_=a._getSoundIds(_);for(var x=0;x<_.length;x++)if(d=a._soundById(_[x]),d){a.playing(_[x])&&(d._rateSeek=a.seek(_[x]),d._playStart=a._webAudio?t.ctx.currentTime:d._playStart),d._rate=f,a._webAudio&&d._node&&d._node.bufferSource?d._node.bufferSource.playbackRate.setValueAtTime(f,t.ctx.currentTime):d._node&&(d._node.playbackRate=f);var v=a.seek(_[x]),E=(a._sprite[d._sprite][0]+a._sprite[d._sprite][1])/1e3-v,C=E*1e3/Math.abs(d._rate);(a._endTimers[_[x]]||!d._paused)&&(a._clearTimer(_[x]),a._endTimers[_[x]]=setTimeout(a._ended.bind(a,d),C)),a._emit("rate",d._id)}}else return d=a._soundById(_),d?d._rate:a._rate;return a},seek:function(){var a=this,c=arguments,f,_;if(c.length===0)a._sounds.length&&(_=a._sounds[0]._id);else if(c.length===1){var g=a._getSoundIds(),m=g.indexOf(c[0]);m>=0?_=parseInt(c[0],10):a._sounds.length&&(_=a._sounds[0]._id,f=parseFloat(c[0]))}else c.length===2&&(f=parseFloat(c[0]),_=parseInt(c[1],10));if(typeof _>"u")return 0;if(typeof f=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,c)}}),a;var d=a._soundById(_);if(d)if(typeof f=="number"&&f>=0){var x=a.playing(_);x&&a.pause(_,!0),d._seek=f,d._ended=!1,a._clearTimer(_),!a._webAudio&&d._node&&!isNaN(d._node.duration)&&(d._node.currentTime=f);var v=function(){x&&a.play(_,!0),a._emit("seek",_)};if(x&&!a._webAudio){var E=function(){a._playLock?setTimeout(E,0):v()};setTimeout(E,0)}else v()}else if(a._webAudio){var C=a.playing(_)?t.ctx.currentTime-d._playStart:0,T=d._rateSeek?d._rateSeek-d._seek:0;return d._seek+(T+C*Math.abs(d._rate))}else return d._node.currentTime;return a},playing:function(a){var c=this;if(typeof a=="number"){var f=c._soundById(a);return f?!f._paused:!1}for(var _=0;_<c._sounds.length;_++)if(!c._sounds[_]._paused)return!0;return!1},duration:function(a){var c=this,f=c._duration,_=c._soundById(a);return _&&(f=c._sprite[_._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var a=this,c=a._sounds,f=0;f<c.length;f++)c[f]._paused||a.stop(c[f]._id),a._webAudio||(a._clearSound(c[f]._node),c[f]._node.removeEventListener("error",c[f]._errorFn,!1),c[f]._node.removeEventListener(t._canPlayEvent,c[f]._loadFn,!1),c[f]._node.removeEventListener("ended",c[f]._endFn,!1),t._releaseHtml5Audio(c[f]._node)),delete c[f]._node,a._clearTimer(c[f]._id);var _=t._howls.indexOf(a);_>=0&&t._howls.splice(_,1);var g=!0;for(f=0;f<t._howls.length;f++)if(t._howls[f]._src===a._src||a._src.indexOf(t._howls[f]._src)>=0){g=!1;break}return s&&g&&delete s[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,c,f,_){var g=this,m=g["_on"+a];return typeof c=="function"&&m.push(_?{id:f,fn:c,once:_}:{id:f,fn:c}),g},off:function(a,c,f){var _=this,g=_["_on"+a],m=0;if(typeof c=="number"&&(f=c,c=null),c||f)for(m=0;m<g.length;m++){var d=f===g[m].id;if(c===g[m].fn&&d||!c&&d){g.splice(m,1);break}}else if(a)_["_on"+a]=[];else{var x=Object.keys(_);for(m=0;m<x.length;m++)x[m].indexOf("_on")===0&&Array.isArray(_[x[m]])&&(_[x[m]]=[])}return _},once:function(a,c,f){var _=this;return _.on(a,c,f,1),_},_emit:function(a,c,f){for(var _=this,g=_["_on"+a],m=g.length-1;m>=0;m--)(!g[m].id||g[m].id===c||a==="load")&&(setTimeout(function(d){d.call(this,c,f)}.bind(_,g[m].fn),0),g[m].once&&_.off(a,g[m].fn,g[m].id));return _._loadQueue(a),_},_loadQueue:function(a){var c=this;if(c._queue.length>0){var f=c._queue[0];f.event===a&&(c._queue.shift(),c._loadQueue()),a||f.action()}return c},_ended:function(a){var c=this,f=a._sprite;if(!c._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(c._ended.bind(c,a),100),c;var _=!!(a._loop||c._sprite[f][2]);if(c._emit("end",a._id),!c._webAudio&&_&&c.stop(a._id,!0).play(a._id),c._webAudio&&_){c._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var g=(a._stop-a._start)*1e3/Math.abs(a._rate);c._endTimers[a._id]=setTimeout(c._ended.bind(c,a),g)}return c._webAudio&&!_&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,c._clearTimer(a._id),c._cleanBuffer(a._node),t._autoSuspend()),!c._webAudio&&!_&&c.stop(a._id,!0),c},_clearTimer:function(a){var c=this;if(c._endTimers[a]){if(typeof c._endTimers[a]!="function")clearTimeout(c._endTimers[a]);else{var f=c._soundById(a);f&&f._node&&f._node.removeEventListener("ended",c._endTimers[a],!1)}delete c._endTimers[a]}return c},_soundById:function(a){for(var c=this,f=0;f<c._sounds.length;f++)if(a===c._sounds[f]._id)return c._sounds[f];return null},_inactiveSound:function(){var a=this;a._drain();for(var c=0;c<a._sounds.length;c++)if(a._sounds[c]._ended)return a._sounds[c].reset();return new i(a)},_drain:function(){var a=this,c=a._pool,f=0,_=0;if(!(a._sounds.length<c)){for(_=0;_<a._sounds.length;_++)a._sounds[_]._ended&&f++;for(_=a._sounds.length-1;_>=0;_--){if(f<=c)return;a._sounds[_]._ended&&(a._webAudio&&a._sounds[_]._node&&a._sounds[_]._node.disconnect(0),a._sounds.splice(_,1),f--)}}},_getSoundIds:function(a){var c=this;if(typeof a>"u"){for(var f=[],_=0;_<c._sounds.length;_++)f.push(c._sounds[_]._id);return f}else return[a]},_refreshBuffer:function(a){var c=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=s[c._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),c},_cleanBuffer:function(a){var c=this,f=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return c;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),f))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,c},_clearSound:function(a){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(a){this._parent=a,this.init()};i.prototype={init:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,c._sounds.push(a),a.create(),a},create:function(){var a=this,c=a._parent,f=t._muted||a._muted||a._parent._muted?0:a._volume;return c._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(f,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=c._src,a._node.preload=c._preload===!0?"auto":c._preload,a._node.volume=f*t.volume(),a._node.load()),a},reset:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,c=a._parent;c._duration=Math.ceil(a._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,c=a._parent;c._duration===1/0&&(c._duration=Math.ceil(a._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var s={},l=function(a){var c=a._src;if(s[c]){a._duration=s[c].duration,h(a);return}if(/^data:[^;]+;base64,/.test(c)){for(var f=atob(c.split(",")[1]),_=new Uint8Array(f.length),g=0;g<f.length;++g)_[g]=f.charCodeAt(g);u(_.buffer,a)}else{var m=new XMLHttpRequest;m.open(a._xhr.method,c,!0),m.withCredentials=a._xhr.withCredentials,m.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(d){m.setRequestHeader(d,a._xhr.headers[d])}),m.onload=function(){var d=(m.status+"")[0];if(d!=="0"&&d!=="2"&&d!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}u(m.response,a)},m.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete s[c],a.load())},o(m)}},o=function(a){try{a.send()}catch{a.onerror()}},u=function(a,c){var f=function(){c._emit("loaderror",null,"Decoding audio data failed.")},_=function(g){g&&c._sounds.length>0?(s[c._src]=g,h(c,g)):f()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(_).catch(f):t.ctx.decodeAudioData(a,_,f)},h=function(a,c){c&&!a._duration&&(a._duration=c.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},p=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=c?parseInt(c[1],10):null;if(a&&f&&f<9){var _=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!_&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof Pi<"u"?(Pi.HowlerGlobal=e,Pi.Howler=t,Pi.Howl=n,Pi.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,n,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,i,s,l,o){var u=this;if(!u.ctx||!u.ctx.listener)return u;var h=u._orientation;if(n=typeof n!="number"?h[1]:n,i=typeof i!="number"?h[2]:i,s=typeof s!="number"?h[3]:s,l=typeof l!="number"?h[4]:l,o=typeof o!="number"?h[5]:o,typeof t=="number")u._orientation=[t,n,i,s,l,o],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(l,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(o,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(t,n,i,s,l,o);else return h;return u},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var l=i._getSoundIds(n),o=0;o<l.length;o++){var u=i._soundById(l[o]);if(u)if(typeof t=="number")u._stereo=t,u._pos=[t,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&e(u,s),s==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(t,0,0):u._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",u._id);else return u._stereo}return i},Howl.prototype.pos=function(t,n,i,s){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"pos",action:function(){l.pos(t,n,i,s)}}),l;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")l._pos=[t,n,i];else return l._pos;for(var o=l._getSoundIds(s),u=0;u<o.length;u++){var h=l._soundById(o[u]);if(h)if(typeof t=="number")h._pos=[t,n,i],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setPosition(t,n,i)),l._emit("pos",h._id);else return h._pos}return l},Howl.prototype.orientation=function(t,n,i,s){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"orientation",action:function(){l.orientation(t,n,i,s)}}),l;if(n=typeof n!="number"?l._orientation[1]:n,i=typeof i!="number"?l._orientation[2]:i,typeof s>"u")if(typeof t=="number")l._orientation=[t,n,i];else return l._orientation;for(var o=l._getSoundIds(s),u=0;u<o.length;u++){var h=l._soundById(o[u]);if(h)if(typeof t=="number")h._orientation=[t,n,i],h._node&&(h._panner||(h._pos||(h._pos=l._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,i)),l._emit("orientation",h._id);else return h._orientation}return l},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,s,l;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return l=t._soundById(parseInt(n[0],10)),l?l._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],s=parseInt(n[1],10));for(var o=t._getSoundIds(s),u=0;u<o.length;u++)if(l=t._soundById(o[u]),l){var h=l._pannerAttr;h={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:h.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:h.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:h.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:h.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:h.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:h.panningModel};var p=l._panner;p||(l._pos||(l._pos=t._pos||[0,0,-.5]),e(l,"spatial"),p=l._panner),p.coneInnerAngle=h.coneInnerAngle,p.coneOuterAngle=h.coneOuterAngle,p.coneOuterGain=h.coneOuterGain,p.distanceModel=h.distanceModel,p.maxDistance=h.maxDistance,p.refDistance=h.refDistance,p.rolloffFactor=h.rolloffFactor,p.panningModel=h.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Ft);class Sm{constructor(){Ft.Howler.volume(.7),this.sounds={pickup:new Ft.Howl({src:["/audio/pickup.wav"],volume:.6}),treasure:new Ft.Howl({src:["/audio/treasure.wav"],volume:.9}),sell:new Ft.Howl({src:["/audio/sell.wav"],volume:.8}),full:new Ft.Howl({src:["/audio/full.wav"],volume:.5}),empty:new Ft.Howl({src:["/audio/empty.wav"],volume:.4}),steps:new Ft.Howl({src:["/audio/steps.wav"],volume:.5,loop:!0}),boost:new Ft.Howl({src:["/audio/boost.wav"],volume:.6,loop:!0}),ambient:new Ft.Howl({src:["/audio/ambient.wav"],volume:.25,loop:!0})},this._stepsPlaying=!1,this._boostPlaying=!1,this._ambientStarted=!1;const e=()=>{Ft.Howler.ctx&&Ft.Howler.ctx.state==="suspended"&&Ft.Howler.ctx.resume(),window.removeEventListener("click",e),window.removeEventListener("keydown",e)};window.addEventListener("click",e),window.addEventListener("keydown",e)}play(e){const t=this.sounds[e];!t||t.playing()||t.play()}stop(e){this.sounds[e]?.stop()}updateSteps(e,t){const n=this.sounds.steps;n&&(e&&!this._stepsPlaying?(n.rate(t?1.4:1),n.play(),this._stepsPlaying=!0):!e&&this._stepsPlaying&&(n.stop(),this._stepsPlaying=!1))}updateBoost(e){const t=this.sounds.boost;t&&(e&&!this._boostPlaying&&(t.play(),this._boostPlaying=!0),!e&&this._boostPlaying&&(t.stop(),this._boostPlaying=!1))}startAmbient(){this._ambientStarted||(this.sounds.ambient?.play(),this._ambientStarted=!0)}}class ym{constructor(e,t,n,i,s,l,o){this.player=e,this.inventory=t,this.stats=n,this.audio=i,this.disease=s,this.talents=l,this.crafting=o,this.targets=[],this.currentTarget=null,this.currentTargetType=null,this.boostActive=!1,this.boostTimer=0,this.sortingPickup=null,this.isHoldingQ=!1,this._lastBegTime=-9999,this.begCooldown=4}register(e){this.targets.push(e)}unregister(e){const t=this.targets.indexOf(e);t>=0&&this.targets.splice(t,1)}toggleBoost(){return this.boostActive?(this._endBoost(),!0):this.stats.energia<15||this.stats.salud<=_o?!1:(this.boostActive=!0,this.boostTimer=Cp,this.stats.energia-=Pp,this._notifyBoostToTargets(!0),!0)}_endBoost(){this.boostActive=!1,this.boostTimer=0,this._notifyBoostToTargets(!1)}_notifyBoostToTargets(e){for(const t of this.targets)typeof t.setBoost=="function"&&t.setBoost(e)}update(e,t,n){let i=null,s=null,l=Rp;for(const o of this.targets){const u=o.position.distanceTo(this.player.position);u<l&&(l=u,i=o,typeof o.harvest=="function"?s="pickup":typeof o.steal=="function"?s="car":typeof o.sellSubstances=="function"?s="dealer":o instanceof Object&&typeof o.sell=="function"&&(s="sell"))}if(this.currentTarget=i,this.currentTargetType=s,this.boostActive&&(this.boostTimer-=e,this.stats.salud=Math.max(0,this.stats.salud-Lp*e),(this.boostTimer<=0||this.stats.salud<=_o)&&this._endBoost()),s==="pickup"&&t.isDown("KeyQ"))this.isHoldingQ||(this.isHoldingQ=!0,i.startSorting&&(this.sortingPickup=i,i.startSorting()));else if(this.isHoldingQ&&(this.isHoldingQ=!1,this.sortingPickup)){const o=this.sortingPickup.sortComplete;this._harvestTrash(this.sortingPickup,o),this.sortingPickup.stopSorting(),this.sortingPickup=null}if(t.consumePress("KeyE")&&i)switch(s){case"pickup":this._harvestTrash(i,!1);break;case"sell":this._sellItems(i);break;case"car":this._stealCar(i);break;case"dealer":{this.inventory.items.some(u=>Ot[u.id]?.substance)&&n.isNight?this._sellSubstances(i,n):window.dispatchEvent(new CustomEvent("dealer-toggle",{detail:{dealer:i}}));break}}s==="dealer"&&t.consumePress("KeyQ")&&window.dispatchEvent(new CustomEvent("dealer-toggle",{detail:{dealer:i}})),(t.consumePress("KeyB")||t.consumePress("KeyL"))&&this._beg(),t.consumePress("KeyF")&&(this.toggleBoost()||this.audio?.play("empty"))}_harvestTrash(e,t){if(typeof e.harvest!="function")return;const n={rareChanceMult:this.talents.getEffect("rareChanceMult",1),sortValueMult:this.talents.getEffect("sortValueMult",1)},i=e.harvest(this.boostActive,t,n);if(!i)return;const s=[];for(const u of i.items){const h=Ot[u];h&&this.inventory.add(h)&&s.push(h.name)}this.audio?.play("pickup"),i.rare&&(this.audio?.play("treasure"),this.stats.saludMental=Math.min(100,this.stats.saludMental+Gp)),s.length===0&&this.audio?.play("full");const l=this.talents.getEffect("diseaseResist",1),o=this.talents.getEffect("sortDiseaseMult",1);this.disease.tryInfect(i.sorted,l*(i.sorted?o:1)),this.stats.addXP(zp,this.talents),window.dispatchEvent(new CustomEvent("pickup",{detail:{added:s,rare:i.rare,sorted:i.sorted}}))}_sellItems(e){if(typeof e.sell!="function")return;const t=e.sell(this.inventory,this.boostActive?1.2:1);t>0?(this.stats.dinero+=t,this.stats.addXP(vo,this.talents),window.dispatchEvent(new CustomEvent("sell",{detail:{earned:t}})),this.audio?.play("sell")):this.audio?.play("empty")}_stealCar(e){if(typeof e.steal!="function")return;const t=this.talents.getEffect("stealCaughtMult",1),n=e.steal(t);if(!n)return;const i=[];for(const s of n.items){const l=Ot[s];l&&this.inventory.add(l)&&i.push(l.name)}n.caught?(this.stats.salud=Math.max(0,this.stats.salud-25),this.stats.dinero=Math.max(0,this.stats.dinero-10),window.dispatchEvent(new CustomEvent("steal-caught",{}))):(this.audio?.play("pickup"),this.stats.addXP(Vp,this.talents)),window.dispatchEvent(new CustomEvent("steal",{detail:{added:i,caught:n.caught}}))}_sellSubstances(e,t){const n=this.talents.getEffect("substancePriceMult",1),i=e.sellSubstances(this.inventory,t.isNight,n);if(i.reason==="day"){window.dispatchEvent(new CustomEvent("substance-fail",{detail:{reason:"day"}})),this.audio?.play("empty");return}i.earned>0?(this.stats.dinero+=i.earned,this.stats.addXP(vo*2,this.talents),window.dispatchEvent(new CustomEvent("substance-sell",{detail:{earned:i.earned}})),this.audio?.play("sell")):this.audio?.play("empty")}_buySubstance(e,t=null){if(!e||typeof e.buySubstance!="function")return null;const n=e.buySubstance(this.inventory,this.stats,t);return n.bought?(this.audio?.play("pickup"),window.dispatchEvent(new CustomEvent("substance-buy",{detail:{name:n.bought.name,cost:n.cost}}))):(this.audio?.play("empty"),window.dispatchEvent(new CustomEvent("substance-buy-fail",{detail:{reason:n.reason,cost:n.cost}}))),n}buySubstanceFromDealer(e=null){const t=this.targets.find(n=>typeof n.buySubstance=="function");return t?this._buySubstance(t,e):null}_beg(){const e=performance.now(),t=(e-this._lastBegTime)/1e3;if(t<this.begCooldown){const l=Math.ceil(this.begCooldown-t);window.dispatchEvent(new CustomEvent("beg-cooldown",{detail:{waitSec:l}}));return}if(this.stats.energia<3){this.audio?.play("empty"),window.dispatchEvent(new CustomEvent("beg-fail",{detail:{reason:"energy"}}));return}if(this._lastBegTime=e,this.stats.energia=Math.max(0,this.stats.energia-3),this.player?.playBeg?.(),(typeof this.stats.isRejectedByNPCs=="function"?this.stats.isRejectedByNPCs():this.stats.higiene<20)&&Math.random()<.7){this.stats.animo=Math.max(0,this.stats.animo-2),this.audio?.play("empty"),window.dispatchEvent(new CustomEvent("beg-result",{detail:{success:!1,reason:"higiene",message:"🚫 La gente se aleja con disgusto por tu olor (Higiene muy baja)"}}));return}if(Math.random()<.2){this.stats.animo=Math.max(0,this.stats.animo-1),this.audio?.play("empty"),window.dispatchEvent(new CustomEvent("beg-result",{detail:{success:!1,reason:"ignored",message:"🚶 Los transeúntes te ignoran y siguen de largo..."}}));return}if(Math.random()<.18){const l=Math.random()<.5?Ot.pan:Ot.agua,o=this.inventory.add(l,1);this.stats.animo=Math.min(100,this.stats.animo+4),this.stats.addXP(xo,this.talents),this.audio?.play("pickup"),window.dispatchEvent(new CustomEvent("beg-result",{detail:{success:!0,item:l.name,message:o?`🍞 ¡Un alma caritativa te regaló ${l.name}!`:`🍞 Te ofrecieron ${l.name}, pero tu inventario está lleno`}}));return}const i=Math.random()<.08;let s=i?Math.floor(Math.random()*8)+8:Math.floor(Math.random()*5)+1;this.stats.dinero+=s,this.stats.animo=Math.min(100,this.stats.animo+(i?6:2)),this.stats.addXP(xo*(i?2:1),this.talents),this.audio?.play(i?"treasure":"sell"),window.dispatchEvent(new CustomEvent("beg-result",{detail:{success:!0,money:s,rare:i,message:i?`💎 ¡Un transeúnte generoso te dio un billete de $${s}!`:`🪙 Recibiste $${s} de limosna`}}))}}const Yt={gripe:{id:"gripe",name:"Gripe",emoji:"🤧",healthDrain:os,mentalDrain:ls*.5,duration:cs},infeccion:{id:"infeccion",name:"Infección",emoji:"🦠",healthDrain:os*1.8,mentalDrain:ls,duration:cs*1.2},intoxication:{id:"intoxication",name:"Intoxicación",emoji:"🤢",healthDrain:os*.8,mentalDrain:ls*1.5,duration:cs*.8}};class Em{constructor(){this.active={}}get hasAny(){return Object.keys(this.active).length>0}get list(){return Object.entries(this.active).map(([e,t])=>({...Yt[e],timeLeft:t.timeLeft}))}tryInfect(e=!1,t=1){let n=Ip;if(e&&(n*=Up),n*=t,Math.random()>n)return null;const i=Object.keys(Yt),s=i[Math.floor(Math.random()*i.length)];return this.active[s]?(this.active[s].timeLeft=Yt[s].duration,null):(this.active[s]={timeLeft:Yt[s].duration},window.dispatchEvent(new CustomEvent("disease",{detail:{name:Yt[s].name,emoji:Yt[s].emoji}})),Yt[s])}cureAll(){this.active={}}cure(e){delete this.active[e]}update(e){for(const t of Object.keys(this.active))this.active[t].timeLeft-=e,this.active[t].timeLeft<=0&&(delete this.active[t],window.dispatchEvent(new CustomEvent("disease-cured",{detail:{name:Yt[t]?.name??t}})))}get healthDrain(){return Object.entries(this.active).reduce((e,[t])=>e+(Yt[t]?.healthDrain??0),0)}get mentalDrain(){return Object.entries(this.active).reduce((e,[t])=>e+(Yt[t]?.mentalDrain??0),0)}getAggregatedEffects(){let e=0,t=0,n=1,i=1,s=1,l=0,o=!0;for(const u of Object.keys(this.active)){const h=Yt[u];h&&(e+=h.healthDrain??0,t+=h.mentalDrain??0,h.speedMultiplier&&(n*=h.speedMultiplier),h.hungerDrainMultiplier&&(i*=h.hungerDrainMultiplier),h.energyDrainMultiplier&&(s*=h.energyDrainMultiplier),h.hygieneDrain&&(l+=h.hygieneDrain),h.canEat===!1&&(o=!1))}return{healthDrain:e||this.healthDrain,mentalDrain:t||this.mentalDrain,speedMultiplier:n,hungerDrainMultiplier:i,energyDrainMultiplier:s,hygieneDrain:l,canEat:o}}serialize(){return{active:this.active}}deserialize(e){this.active=e?.active??{}}}const yn={collector1:{id:"collector1",name:"Ojo de Águila",desc:"+25% de probabilidad de objeto raro en basura",branch:"recoleccion",cost:1,requires:[],effects:{rareChanceMult:1.25}},collector2:{id:"collector2",name:"Bolsas Llenas",desc:"+10 de peso máximo en inventario",branch:"recoleccion",cost:1,requires:["collector1"],effects:{maxWeightBonus:10}},collector3:{id:"collector3",name:"Selección Experta",desc:"Seleccionar basura da +50% de valor y -20% de enfermedad",branch:"recoleccion",cost:2,requires:["collector2"],effects:{sortValueMult:1.5,sortDiseaseMult:.8}},surv1:{id:"surv1",name:"Estómago de Hierro",desc:"-30% de desgaste de hambre y sed",branch:"supervivencia",cost:1,requires:[],effects:{decayMult:.7}},surv2:{id:"surv2",name:"Piel Dura",desc:"-40% de riesgo de enfermedad en la basura",branch:"supervivencia",cost:1,requires:["surv1"],effects:{diseaseResist:.6}},surv3:{id:"surv3",name:"Mente de Acero",desc:"-50% de desgaste de salud mental",branch:"supervivencia",cost:2,requires:["surv2"],effects:{mentalDecayMult:.5}},crime1:{id:"crime1",name:"Manos Ligeras",desc:"-20% de probabilidad de ser atrapado robando",branch:"crimen",cost:1,requires:[],effects:{stealCaughtMult:.8}},crime2:{id:"crime2",name:"Contactos",desc:"+30% de precio en sustancias",branch:"crimen",cost:1,requires:["crime1"],effects:{substancePriceMult:1.3}},crime3:{id:"crime3",name:"Rey de la Calle",desc:"+50% de XP por todas las actividades",branch:"crimen",cost:2,requires:["crime2"],effects:{xpMult:1.5}}},wm=[{id:"recoleccion",name:"Recolección",emoji:"🗑️"},{id:"supervivencia",name:"Supervivencia",emoji:"🩹"},{id:"crimen",name:"Crimen",emoji:"🔪"}];class bm{constructor(){this.points=0,this.unlocked={}}get(e){return yn[e]}has(e){return!!this.unlocked[e]}canUnlock(e){const t=yn[e];return!t||this.has(e)||this.points<t.cost?!1:t.requires.every(n=>this.has(n))}unlock(e){return this.canUnlock(e)?(this.points-=yn[e].cost,this.unlocked[e]=!0,window.dispatchEvent(new CustomEvent("talent-unlock",{detail:{name:yn[e].name}})),!0):!1}addPoints(e){this.points+=e}getEffect(e,t=1){let n=t;for(const i of Object.keys(this.unlocked)){const s=yn[i]?.effects?.[e];s!==void 0&&(e.includes("Mult")?n*=s:n+=s)}return n}serialize(){return{points:this.points,unlocked:this.unlocked}}deserialize(e){this.points=e?.points??0,this.unlocked=e?.unlocked??{}}}const Tm=[{id:"arma",name:"Arma casera",emoji:"🗡️",result:"arma",qty:1,ingredients:{chatarra:2,alambre:1,madera:1}},{id:"mochila",name:"Mochila",emoji:"🎒",result:"mochila",qty:1,ingredients:{tela:3,alambre:1}},{id:"curita",name:"Curita",emoji:"🩹",result:"curita",qty:2,ingredients:{tela:1,plastico:1}},{id:"antibiotico",name:"Antibiótico",emoji:"💊",result:"antibiotico",qty:1,ingredients:{pastilla:1,botella:1}},{id:"rifa",name:"Cartón de rifa",emoji:"🎟️",result:"rifa",qty:1,ingredients:{carton:2,lata:1}},{id:"hierba",name:"Hierba seca",emoji:"🌿",result:"hierba",qty:2,ingredients:{tela:1,madera:1}}];class Am{constructor(){this.recipes=Tm}canCraft(e,t){for(const[n,i]of Object.entries(e.ingredients))if(t.count(n)<i)return!1;return!0}craft(e,t){if(!this.canCraft(e,t))return null;const n=Ot[e.result];if(!n||t.totalWeight+n.weight*e.qty>t.maxWeight)return null;for(const[i,s]of Object.entries(e.ingredients))t.remove(i,s);return t.add(n,e.qty),window.dispatchEvent(new CustomEvent("craft",{detail:{name:n.name,qty:e.qty}})),n}getAvailable(e){return this.recipes.map(t=>({...t,craftable:this.canCraft(t,e)}))}}class Rm{constructor(){this.bars={},document.querySelectorAll(".stat-bar").forEach(e=>{this.bars[e.dataset.stat]=e.querySelector(".fill")}),this.clockEl=document.getElementById("clock"),this.moneyEl=document.getElementById("money"),this.statusEl=document.getElementById("status"),this.boostEl=document.getElementById("boost-indicator"),this.invEl=document.getElementById("inventory-panel"),this.diseaseEl=document.getElementById("disease-panel"),this.xpBarEl=document.getElementById("xp-bar"),this.xpFillEl=document.getElementById("xp-fill"),this.levelEl=document.getElementById("level-display"),this.talentPointsEl=document.getElementById("talent-points"),this.talentPanel=document.getElementById("talent-panel"),this.craftPanel=document.getElementById("craft-panel"),this.dealerPanel=document.getElementById("dealer-panel"),this.promptEl=document.getElementById("interaction-prompt"),this._talentOpen=!1,this._craftOpen=!1,this._dealerOpen=!1,this._bindEvents(),window.addEventListener("keydown",e=>{e.code==="KeyT"&&this.toggleTalentPanel(),e.code==="KeyC"&&this.toggleCraftPanel(),e.code==="Escape"&&(this.talentPanel?.classList.remove("open"),this.craftPanel?.classList.remove("open"),this.dealerPanel?.classList.remove("open"),this._talentOpen=!1,this._craftOpen=!1,this._dealerOpen=!1)}),window.addEventListener("dealer-toggle",e=>{this.toggleDealerPanel(e.detail?.dealer)}),window.addEventListener("rejected",e=>{e.detail.reason==="higiene"&&this._toast("🚫 El vendedor te rechaza, estás muy sucio","warn")})}_bindEvents(){window.addEventListener("pickup",e=>this._onPickup(e.detail)),window.addEventListener("sell",e=>this._onSell(e.detail)),window.addEventListener("disease",e=>this._toast(`☠️ Enfermedad: ${e.detail.name}`,"death")),window.addEventListener("disease-cured",e=>this._toast(`✨ Curado: ${e.detail.name}`,"info")),window.addEventListener("levelup",e=>this._toast(`⭐ ¡Nivel ${e.detail.level}! +1 punto de talento`,"rare")),window.addEventListener("talent-unlock",e=>this._toast(`🌟 Talento: ${e.detail.name}`,"rare")),window.addEventListener("craft",e=>this._toast(`🔨 Crafteado: ${e.detail.name} x${e.detail.qty}`,"info")),window.addEventListener("steal",e=>{e.detail.caught?this._toast("🚨 ¡Atrapado robando!","death"):e.detail.added?.length&&this._toast(`🪞 Robado: ${e.detail.added.join(", ")}`,"warn")}),window.addEventListener("substance-sell",e=>this._toast(`💰 Sustancias vendidas: $${e.detail.earned}`,"sell")),window.addEventListener("substance-buy",e=>{this._toast(`📦 Comprado: ${e.detail.name} (-$${e.detail.cost})`,"info"),this._dealerOpen&&this.renderDealer()}),window.addEventListener("substance-fail",e=>{e.detail.reason==="day"&&this._toast("☀️ El dealer no compra de día (1.8x de noche)","warn")}),window.addEventListener("substance-buy-fail",e=>{e.detail?.reason==="insufficient_money"?this._toast(`💸 No tienes suficiente dinero ($${e.detail.cost})`,"warn"):e.detail?.reason==="inventory_full"?this._toast("🎒 Inventario lleno","warn"):this._toast("❌ No se pudo comprar","warn")}),window.addEventListener("beg-result",e=>{const t=e.detail.success?e.detail.rare?"rare":"sell":"warn";this._toast(e.detail.message,t)}),window.addEventListener("beg-cooldown",e=>{this._toast(`⏳ Espera ${e.detail.waitSec}s antes de pedir limosna`,"info")}),window.addEventListener("beg-fail",()=>{this._toast("😴 Demasiado cansado para pedir limosna (-3 energía necesaria)","warn")}),window.addEventListener("sleep-start",()=>this._toast("💤 Durmiendo...","info")),window.addEventListener("sleep-end",()=>this._toast("🌅 Nuevo día","info")),window.addEventListener("sleep-fail",e=>this._toast(e.detail.reason==="day"?"☀️ No puedes dormir de día":"No puedes dormir aquí","warn"))}toggleTalentPanel(){this._talentOpen=!this._talentOpen,this.talentPanel?.classList.toggle("open",this._talentOpen),this._talentOpen&&this.renderTalents()}toggleCraftPanel(){this._craftOpen=!this._craftOpen,this.craftPanel?.classList.toggle("open",this._craftOpen)}toggleDealerPanel(e=null){this._dealerOpen=!this._dealerOpen,this.dealerPanel?.classList.toggle("open",this._dealerOpen),this._dealerOpen&&this.renderDealer(e)}update(e,t,n,i,s,l,o){const u={hambre:e.hambre,sed:e.sed,energia:e.energia,salud:e.salud,higiene:e.higiene,animo:e.animo};for(const[c,f]of Object.entries(u)){const _=this.bars[c];_&&(_.style.width=`${Math.max(0,Math.min(100,f))}%`)}const h=Math.floor(t.hour).toString().padStart(2,"0"),p=Math.floor(t.hour%1*60).toString().padStart(2,"0");this.clockEl&&(this.clockEl.textContent=`Día ${t.day} — ${h}:${p}`),this.moneyEl&&(this.moneyEl.textContent=`$${e.dinero??0}`),this.levelEl&&(this.levelEl.textContent=`Nv ${e.level}`);const a=ys*e.level;if(this.xpFillEl&&(this.xpFillEl.style.width=`${Math.min(100,e.xp/a*100)}%`),this.talentPointsEl&&(this.talentPointsEl.textContent=`🌟 ${l?.points??0}`,this.talentPointsEl.style.opacity=(l?.points??0)>0?1:.4),this.boostEl&&this.boostEl.classList.toggle("active",n?.boostActive??!1),this.promptEl)if(window.__game?.bed&&window.__game.bed.position.distanceTo(window.__game.player.position)<2.5)this.promptEl.textContent="[E] Dormir (Solo de noche)",this.promptEl.classList.add("visible");else if(n?.currentTarget){const f=n.currentTargetType;let _="";f==="pickup"?_="[E] Recoger basura · [Mantener Q] Seleccionar":f==="car"?_="[E] Robar retrovisor de auto":f==="sell"?_="[E] Vender objetos reciclables":f==="dealer"&&(_="[Q / E] Tienda del Dealer · Comprar / Vender"),_?(this.promptEl.textContent=_,this.promptEl.classList.add("visible")):this.promptEl.classList.remove("visible")}else this.promptEl.classList.remove("visible");this.invEl&&i&&this._renderInventory(i),this.diseaseEl&&s&&this._renderDiseases(s),this._talentOpen&&this.renderTalents(l),this._craftOpen&&o&&i&&this.renderCrafting(o,i,l),this._dealerOpen&&this.renderDealer()}_renderInventory(e){const t=e.items.map(i=>{const s=!!(i.consumable||i.cure);return`<div class="inv-row ${s?"usable":""}" data-id="${i.id}" title="${s?"Clic para usar/consumir":""}">
        ${i.name} <span>x${i.qty}</span>
      </div>`}).join(""),n=`<div class="inv-weight">Peso: ${e.totalWeight.toFixed(1)}/${e.maxWeight}</div>`;this.invEl.innerHTML=t+n,this.invEl.querySelectorAll(".inv-row.usable").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.id;this._useItem(s,e)})})}_useItem(e,t){const n=t.items.find(s=>s.id===e);if(!n)return;const i=window.__game;if(i)if(n.consumable){const s=n.consumable;i.stats[s]!==void 0&&(i.stats[s]=Math.min(100,i.stats[s]+n.amount)),n.animo&&(i.stats.animo=Math.min(100,i.stats.animo+n.animo)),n.energia&&s!=="energia"&&(i.stats.energia=Math.min(100,i.stats.energia+n.energia)),t.remove(e,1),i.audio?.play("pickup"),this._toast(`🍴 Consumiste: ${n.name}`,"info"),this._renderInventory(t)}else n.cure&&(i.diseases?.cure?.(n.cure),t.remove(e,1),i.audio?.play("pickup"),this._toast(`✨ Curaste: ${n.cure} con ${n.name}`,"info"),this._renderInventory(t))}_renderDiseases(e){if(!e.hasAny){this.diseaseEl.innerHTML="";return}this.diseaseEl.innerHTML=e.list.map(t=>`<div class="disease-item">${t.emoji} ${t.name} <span>${Math.ceil(t.timeLeft)}s</span></div>`).join("")}renderTalents(e){if(!this.talentPanel)return;const t=e||window.__game?.talents;if(!t)return;const n=wm.map(i=>{const l=Object.values(yn).filter(o=>o.branch===i.id).map(o=>{const u=t.has(o.id),h=t.canUnlock(o.id),p=u?"unlocked":h?"available":"locked",a=o.requires.length?`<div class="reqs">Requiere: ${o.requires.map(c=>yn[c].name).join(", ")}</div>`:"";return`
          <div class="talent-node ${p}" data-id="${o.id}">
            <div class="talent-name">${o.name}</div>
            <div class="talent-desc">${o.desc}</div>
            ${a}
            <div class="talent-cost">Costo: ${o.cost} 🌟</div>
          </div>
        `}).join("");return`
        <div class="talent-branch">
          <h3>${i.emoji} ${i.name}</h3>
          ${l}
        </div>
      `}).join("");this.talentPanel.innerHTML=`
      <div class="talent-header">
        <h2>🌳 Árbol de Talentos</h2>
        <span class="talent-points-display">Puntos: ${t.points}</span>
      </div>
      <div class="talent-branches">${n}</div>
      <div class="talent-hint">Haz clic en un talento disponible para desbloquearlo. Pulsa T o ESC para cerrar.</div>
    `,this.talentPanel.querySelectorAll(".talent-node.available").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.id;t.unlock(s)&&(this.renderTalents(t),window.dispatchEvent(new CustomEvent("talent-unlock",{detail:{name:yn[s].name}})))})})}renderCrafting(e,t,n){if(!this.craftPanel)return;const s=e.getAvailable(t).map(l=>{const o=Object.entries(l.ingredients).map(([u,h])=>{const p=t.count(u);return`<span class="${p>=h?"ing-ok":"ing-missing"}">${u} (${p}/${h})</span>`}).join(", ");return`
        <div class="craft-recipe ${l.craftable?"craftable":""}" data-id="${l.id}">
          <div class="recipe-name">${l.emoji} ${l.name} x${l.qty}</div>
          <div class="recipe-ingredients">${o}</div>
          <button class="craft-btn" ${l.craftable?"":"disabled"}>Craftear</button>
        </div>
      `}).join("");this.craftPanel.innerHTML=`
      <div class="craft-header">
        <h2>🔨 Mesa de Crafteo</h2>
      </div>
      <div class="craft-recipes">${s}</div>
      <div class="craft-hint">Pulsa C o ESC para cerrar.</div>
    `,this.craftPanel.querySelectorAll(".craft-recipe.craftable .craft-btn").forEach(l=>{l.addEventListener("click",()=>{const u=l.closest(".craft-recipe").dataset.id,h=e.recipes.find(p=>p.id===u);h&&(e.craft(h,t)&&window.__game&&window.__game.stats.addXP(XP_CRAFT,window.__game.talents),this.renderCrafting(e,t,n))})})}renderDealer(e=null){if(!this.dealerPanel)return;const t=e||window.__game?.dealer,n=window.__game?.stats,i=window.__game?.inventory,l=(t?.getProducts?t.getProducts():[{id:"tintico",name:"Tintico",value:5,weight:.1},{id:"pegante",name:"Pegante",value:8,weight:.2},{id:"pastilla",name:"Pastilla",value:15,weight:.05}]).map(o=>{const u=(n?.dinero??0)>=o.value,h=i?i.totalWeight+o.weight<=i.maxWeight:!0,p=u&&h,a=o.id==="tintico"?"☕ Sube +30 ánimo y +20 energía":o.id==="pegante"?"🧴 Sube +40 ánimo de golpe":"💊 Sube +60 ánimo intensamente";return`
        <div class="dealer-product" data-id="${o.id}">
          <div class="dealer-prod-info">
            <div class="dealer-prod-name">${o.name}</div>
            <div class="dealer-prod-desc">${a} · Peso: ${o.weight}kg</div>
          </div>
          <div class="dealer-prod-action">
            <div class="dealer-prod-price">$${o.value}</div>
            <button class="dealer-buy-btn" data-id="${o.id}" ${p?"":"disabled"}>
              ${u?h?"Comprar":"Lleno":"Sin Dinero"}
            </button>
          </div>
        </div>
      `}).join("");this.dealerPanel.innerHTML=`
      <div class="dealer-header">
        <h2>🟣 Rincón del Dealer</h2>
        <span class="dealer-money">Tu Dinero: $${n?.dinero??0}</span>
      </div>
      <div class="dealer-products">${l}</div>
      <div class="dealer-hint">
        🌙 De noche puedes vender sustancias aquí (1.8x precio base).<br>
        Pulsa Q o ESC para cerrar.
      </div>
    `,this.dealerPanel.querySelectorAll(".dealer-buy-btn").forEach(o=>{o.addEventListener("click",u=>{u.stopPropagation();const h=o.dataset.id;window.__game?.interaction&&(window.__game.interaction.buySubstanceFromDealer(h),this.renderDealer(t))})})}_toast(e,t="info"){const n=document.createElement("div");n.className=`loot-toast ${t}`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2500)}_onPickup({added:e,rare:t,sorted:n}){if(!e||e.length===0)return;const i=e.join(", "),s=n?"🔍 ":"",l=t?"loot-toast rare":"loot-toast",o=document.createElement("div");o.className=l,o.textContent=`${s}+ ${i}`,document.body.appendChild(o),setTimeout(()=>o.remove(),2500)}_onSell({earned:e}){const t=document.createElement("div");t.className="loot-toast sell",t.textContent=`💰 Vendido por $${e}`,document.body.appendChild(t),setTimeout(()=>t.remove(),2500)}}class Cm{constructor(e){this.canvas=e,this.renderer=new Sp(e),this.sceneMgr=new yp,this.cameraRig=new Ep(this.sceneMgr.scene,e),this.clock=new wp,this.input=new bp,this.collisions=new xm,this.inventory=new Mm,this.audio=new Sm,this.stats=new _m,this.time=new gm,this.save=new vm,this.diseases=new Em,this.talents=new bm,this.crafting=new Am,this.world=new am(this.sceneMgr.scene),this.player=new om(this.sceneMgr.scene,this.input,this.stats),this.interaction=new ym(this.player,this.inventory,this.stats,this.audio,this.diseases,this.talents,this.crafting),this.hud=new Rm,this.pickups=[],this.sellPoint=null,this.bed=null,this.cars=[],this.dealer=null,this.craftingStation=null,this.isSleeping=!1,this.deathCount=0,this._wasNight=null,this._lastTime=performance.now(),this._running=!1,window.__game=this}start(){this._running=!0,this.world.loadDistrict("ZonaCero",this.collisions),this._spawnEntities();const e=this.world.active;e?.reserved&&(this.player.position.set(e.reserved.spawn.x,0,e.reserved.spawn.z),this.player.root.position.copy(this.player.position)),this._loadIfSave(),this.audio.startAmbient(),this._loop()}_spawnEntities(){this.pickups.forEach(o=>o.dispose()),this.pickups=[],this.cars.forEach(o=>o.dispose()),this.cars=[],this.interaction.targets=[];const e=this.world.active;if(!e||!e.isWalkableAt){console.warn("[Game] Distrito sin isWalkableAt");return}const t=(o=null,u=4)=>{for(let a=0;a<200;a++){const c=3+Math.floor(Math.random()*26),f=3+Math.floor(Math.random()*26),_=c*2,g=f*2;if(!e.isWalkableAt(_,g))continue;if(e.reserved){const d=e.reserved;if(Math.hypot(_-d.sell.x,g-d.sell.z)<6||Math.hypot(_-d.bed.x,g-d.bed.z)<6||Math.hypot(_-d.spawn.x,g-d.spawn.z)<6||Math.hypot(_-d.dealer.x,g-d.dealer.z)<6||Math.hypot(_-d.craft.x,g-d.craft.z)<6)continue}let m=!1;for(const d of[...this.pickups,...this.cars])if(d!==o&&d.position.distanceTo(new P(_,0,g))<u){m=!0;break}if(!m)return new P(_,0,g)}return new P(32,0,32)},n=e.getSpawnGrid?e.getSpawnGrid():[];for(let o=n.length-1;o>0;o--){const u=Math.floor(Math.random()*(o+1));[n[o],n[u]]=[n[u],n[o]]}const i=14,s=[];for(let o=0;o<i;o++){let u;s.length<n.length?(u=n[s.length],s.push(u)):u=t();const h=new um(this.sceneMgr.scene,u);h.onRespawn=p=>p.relocate(t(p)),this.pickups.push(h),this.interaction.register(h)}const l=5;for(let o=0;o<l;o++){const u=t(null,6),h=Math.random()*Math.PI*2,p=new fm(this.sceneMgr.scene,u,h);this.cars.push(p),this.interaction.register(p)}this.sellPoint=new hm(this.sceneMgr.scene,new P(e.reserved?.sell.x??44,0,e.reserved?.sell.z??16)),this.interaction.register(this.sellPoint),this.dealer=new pm(this.sceneMgr.scene,new P(e.reserved?.dealer?.x??56,0,e.reserved?.dealer?.z??56)),this.interaction.register(this.dealer),this.craftingStation=new mm(this.sceneMgr.scene,new P(e.reserved?.craft?.x??8,0,e.reserved?.craft?.z??8)),this.interaction.register(this.craftingStation),this.bed=new dm(this.sceneMgr.scene,new P(e.reserved?.bed.x??16,0,e.reserved?.bed.z??44)),this.interaction.register(this.bed),this.collisions.add(this.bed.group,new P(1.2,.5,2),new P(0,.25,0))}_loadIfSave(){const e=this.save.load();e&&(this.stats.deserialize(e.stats),this.clock.deserialize(e.clock),this.inventory.deserialize(e.inventory??{}),this.talents.deserialize(e.talents??{}),this.diseases.deserialize(e.diseases??{}),e.player&&this.player.position.set(...e.player.pos))}_save(){this.save.save({stats:this.stats.serialize(),clock:this.clock.serialize(),inventory:this.inventory.serialize(),talents:this.talents.serialize(),diseases:this.diseases.serialize(),player:{pos:this.player.position.toArray()}})}_sleep(){if(!this.isSleeping){if(!this.clock.isNight){window.dispatchEvent(new CustomEvent("sleep-fail",{detail:{reason:"day"}}));return}this.isSleeping=!0,window.dispatchEvent(new CustomEvent("sleep-start")),this.clock.hour=6,this.clock.day+=1,this.stats.energia=Math.min(100,this.stats.energia+60),this.stats.salud=Math.min(100,this.stats.salud+20),this.stats.saludMental=Math.min(100,this.stats.saludMental+kp),this._save(),setTimeout(()=>{this.isSleeping=!1,window.dispatchEvent(new CustomEvent("sleep-end"))},1200)}}_updateMentalHealth(e){const t=this.talents.getEffect("mentalDecayMult",1);let n=Np;this.clock.isNight&&(n+=Fp),this.diseases.hasAny&&(n+=Op),this.stats.hambre<20&&(n+=Bp),n*=t,this.stats.saludMental=Math.max(0,this.stats.saludMental-n*e)}_handleDeath(){if(this.stats.salud>0)return;this.deathCount++,window.dispatchEvent(new CustomEvent("death"));const e=Math.floor(this.inventory.items.length/2);for(let n=0;n<e;n++){const i=this.inventory.items[0];i&&this.inventory.remove(i.id,i.qty)}this.stats.salud=30,this.stats.hambre=Math.max(20,this.stats.hambre),this.stats.sed=Math.max(20,this.stats.sed),this.diseases.cureAll();const t=this.world.active;t?.reserved&&this.player.position.set(t.reserved.bed.x,0,t.reserved.bed.z)}_loop=()=>{if(!this._running)return;requestAnimationFrame(this._loop);const e=performance.now(),t=Math.min((e-this._lastTime)/1e3,.1);if(this._lastTime=e,this.isSleeping){this.renderer.render(this.sceneMgr.scene,this.cameraRig.camera),this.input.endFrame();return}this.clock.update(t),this.time.update(t,this.clock);const n=this.clock.isNight;this._wasNight!==n&&(this._wasNight=n,this.world.active?.setNightMode?.(n),this.dealer?.setNight(n)),this.player.update(t,this.cameraRig.camera,this.collisions),this.stats.update(t,this.player,this.diseases,this.clock,this.talents);const i=this.talents.getEffect("maxWeightBonus",0);this.inventory.maxWeight=tl+i,this._updateMentalHealth(t),this.stats.saludMental<Hp?this.player.speedMult=.6:this.player.speedMult=1,this.diseases.update(t),this.bed&&this.bed.position.distanceTo(this.player.position)<2.5&&this.input.consumePress("KeyE")?this._sleep():this.interaction.update(t,this.input,this.clock),this.world.update(t,this.player.position);for(const o of this.pickups)o.update(t);for(const o of this.cars)o.update(t);this.bed?.update(t),this.dealer?.update(t);const l=this.input.axis.x!==0||this.input.axis.z!==0;this.audio.updateSteps(l,this.input.isRunning),this.audio.updateBoost(this.interaction.boostActive),this.cameraRig.follow(this.player.position),this.renderer.render(this.sceneMgr.scene,this.cameraRig.camera),this.hud.update(this.stats,this.clock,this.interaction,this.inventory,this.diseases,this.talents,this.crafting),this._handleDeath(),this.input.endFrame()};stop(){this._running=!1}}const Pm=document.getElementById("game-canvas"),Lm=new Cm(Pm);Lm.start();
