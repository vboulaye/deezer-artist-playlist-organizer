import{e as M}from"./public.17a15458.js";import{T as O}from"./CookieManager.d8697515.js";import{H as R,R as J}from"./control.f5b05b5f.js";var z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function T(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var k={exports:{}},v,S;function L(){if(S)return v;S=1;var r=1e3,s=r*60,t=s*60,c=t*24,f=c*7,F=c*365.25;v=function(e,n){n=n||{};var o=typeof e;if(o==="string"&&e.length>0)return d(e);if(o==="number"&&isFinite(e))return n.long?a(e):m(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function d(e){if(e=String(e),!(e.length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(n){var o=parseFloat(n[1]),p=(n[2]||"ms").toLowerCase();switch(p){case"years":case"year":case"yrs":case"yr":case"y":return o*F;case"weeks":case"week":case"w":return o*f;case"days":case"day":case"d":return o*c;case"hours":case"hour":case"hrs":case"hr":case"h":return o*t;case"minutes":case"minute":case"mins":case"min":case"m":return o*s;case"seconds":case"second":case"secs":case"sec":case"s":return o*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}function m(e){var n=Math.abs(e);return n>=c?Math.round(e/c)+"d":n>=t?Math.round(e/t)+"h":n>=s?Math.round(e/s)+"m":n>=r?Math.round(e/r)+"s":e+"ms"}function a(e){var n=Math.abs(e);return n>=c?i(e,n,c,"day"):n>=t?i(e,n,t,"hour"):n>=s?i(e,n,s,"minute"):n>=r?i(e,n,r,"second"):e+" ms"}function i(e,n,o,p){var h=n>=o*1.5;return Math.round(e/o)+" "+p+(h?"s":"")}return v}function _(r){t.debug=t,t.default=t,t.coerce=a,t.disable=F,t.enable=f,t.enabled=d,t.humanize=L(),t.destroy=i,Object.keys(r).forEach(e=>{t[e]=r[e]}),t.names=[],t.skips=[],t.formatters={};function s(e){let n=0;for(let o=0;o<e.length;o++)n=(n<<5)-n+e.charCodeAt(o),n|=0;return t.colors[Math.abs(n)%t.colors.length]}t.selectColor=s;function t(e){let n,o=null,p,h;function C(...l){if(!C.enabled)return;const u=C,w=Number(new Date),g=w-(n||w);u.diff=g,u.prev=n,u.curr=w,n=w,l[0]=t.coerce(l[0]),typeof l[0]!="string"&&l.unshift("%O");let b=0;l[0]=l[0].replace(/%([a-zA-Z%])/g,(y,D)=>{if(y==="%%")return"%";b++;const P=t.formatters[D];if(typeof P=="function"){const I=l[b];y=P.call(u,I),l.splice(b,1),b--}return y}),t.formatArgs.call(u,l),(u.log||t.log).apply(u,l)}return C.namespace=e,C.useColors=t.useColors(),C.color=t.selectColor(e),C.extend=c,C.destroy=t.destroy,Object.defineProperty(C,"enabled",{enumerable:!0,configurable:!1,get:()=>o!==null?o:(p!==t.namespaces&&(p=t.namespaces,h=t.enabled(e)),h),set:l=>{o=l}}),typeof t.init=="function"&&t.init(C),C}function c(e,n){const o=t(this.namespace+(typeof n>"u"?":":n)+e);return o.log=this.log,o}function f(e){t.save(e),t.namespaces=e,t.names=[],t.skips=[];let n;const o=(typeof e=="string"?e:"").split(/[\s,]+/),p=o.length;for(n=0;n<p;n++)o[n]&&(e=o[n].replace(/\*/g,".*?"),e[0]==="-"?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function F(){const e=[...t.names.map(m),...t.skips.map(m).map(n=>"-"+n)].join(",");return t.enable(""),e}function d(e){if(e[e.length-1]==="*")return!0;let n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1}function m(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}function a(e){return e instanceof Error?e.stack||e.message:e}function i(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}var N=_;(function(r,s){s.formatArgs=c,s.save=f,s.load=F,s.useColors=t,s.storage=d(),s.destroy=(()=>{let a=!1;return()=>{a||(a=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),s.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function t(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function c(a){if(a[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+a[0]+(this.useColors?"%c ":" ")+"+"+r.exports.humanize(this.diff),!this.useColors)return;const i="color: "+this.color;a.splice(1,0,i,"color: inherit");let e=0,n=0;a[0].replace(/%[a-zA-Z%]/g,o=>{o!=="%%"&&(e++,o==="%c"&&(n=e))}),a.splice(n,0,i)}s.log=console.debug||console.log||(()=>{});function f(a){try{a?s.storage.setItem("debug",a):s.storage.removeItem("debug")}catch{}}function F(){let a;try{a=s.storage.getItem("debug")}catch{}return!a&&typeof process<"u"&&"env"in process&&(a={}.DEBUG),a}function d(){try{return localStorage}catch{}}r.exports=N(s);const{formatters:m}=r.exports;m.j=function(a){try{return JSON.stringify(a)}catch(i){return"[UnexpectedJSONParseError]: "+i.message}}})(k,k.exports);var $=k.exports;const G=T($),B=G("deezer-playlist"),Q=async(r,s)=>{const t=Date.now();try{return await s()}finally{const c=Date.now();console.warn(`### calling ${r} took ${c-t}ms`)}};function E(r,s){return new R(r,s)}function V(r,s){return new J(r,s)}new TextEncoder;var j={exports:{}};(function(r,s){(function(t,c){c(s,r)})(z,function(t,c){var f={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function F(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function d(i){try{delete window[i]}catch{window[i]=void 0}}function m(i){var e=document.getElementById(i);e&&document.getElementsByTagName("head")[0].removeChild(e)}function a(i){var e=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],n=i,o=e.timeout||f.timeout,p=e.jsonpCallback||f.jsonpCallback,h=void 0;return new Promise(function(C,l){var u=e.jsonpCallbackFunction||F(),w=p+"_"+u;window[u]=function(b){C({ok:!0,json:function(){return Promise.resolve(b)}}),h&&clearTimeout(h),m(w),d(u)},n+=n.indexOf("?")===-1?"?":"&";var g=document.createElement("script");g.setAttribute("src",""+n+p+"="+u),e.charset&&g.setAttribute("charset",e.charset),e.nonce&&g.setAttribute("nonce",e.nonce),e.referrerPolicy&&g.setAttribute("referrerPolicy",e.referrerPolicy),e.crossorigin&&g.setAttribute("crossorigin","true"),g.id=w,document.getElementsByTagName("head")[0].appendChild(g),h=setTimeout(function(){l(new Error("JSONP request to "+i+" timed out")),d(u),m(w),window[u]=function(){d(u)}},o),g.onerror=function(){l(new Error("JSONP request to "+i+" failed")),d(u),m(w),h&&clearTimeout(h)}})}c.exports=a})})(j,j.exports);var U=j.exports;const Z=T(U),A=B.extend("call-deezer");async function H(r){{r.searchParams.set("output","jsonp"),A({fetchJsonp:r.toString()}),console.log("fetchDeezer: "+r.toString());const s=await Z(r.toString(),{timeout:1e4});if(!s.ok)throw E(500,"error in jsonp call "+r.pathname);return s}}async function X(r){A(`calling ${r.apiPath}`);const s=new URL(r.apiPath,M.PUBLIC_DEEZER_API_URL);O.get();const t=O.get();if(!t)throw E(500,"no accessToken in cookies");s.searchParams.set("access_token",t),r.searchParams&&Object.entries(r.searchParams).forEach(([F,d])=>{s.searchParams.set(F,""+d)});const f=await(await H(s)).json();if(A("call response",f),f.error)throw E(500,"error in deezer call "+s.pathname+": "+JSON.stringify(f.error));return f}export{B as R,X as c,T as g,V as r,Q as t};
