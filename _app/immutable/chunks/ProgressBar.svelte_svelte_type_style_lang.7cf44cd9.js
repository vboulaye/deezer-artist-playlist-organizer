import{a as z,t as J}from"./index.975caa0b.js";import{L as U,a4 as N}from"./scheduler.2b679851.js";import{T as $}from"./CookieManager.c7cee2e3.js";import{D as G}from"./DeezerConfig.5cb901a7.js";import{H as B,R as H}from"./control.f5b05b5f.js";import{w as Q,r as V}from"./paths.5975c1be.js";function he(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Z(n,o){J(n,1,1,()=>{o.delete(n.key)})}function ge(n,o){n.f(),Z(n,o)}function pe(n,o,t,i,h,w,u,g,c,a,e,r){let s=n.length,m=w.length,C=s;const p={};for(;C--;)p[n[C].key]=C;const l=[],d=new Map,F=new Map,y=[];for(C=m;C--;){const f=r(h,w,C),b=t(f);let v=u.get(b);v?i&&y.push(()=>v.p(f,o)):(v=a(b,f),v.c()),d.set(b,l[C]=v),b in p&&F.set(b,Math.abs(C-p[b]))}const E=new Set,k=new Set;function S(f){z(f,1),f.m(g,e),u.set(f.key,f),e=f.first,m--}for(;s&&m;){const f=l[m-1],b=n[s-1],v=f.key,M=b.key;f===b?(e=f.first,s--,m--):d.has(M)?!u.has(v)||E.has(v)?S(f):k.has(M)?s--:F.get(v)>F.get(M)?(k.add(v),S(f)):(E.add(M),s--):(c(b,u),s--)}for(;s--;){const f=n[s];d.has(f.key)||c(f,u)}for(;m;)S(l[m-1]);return U(y),l}var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function I(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var O={exports:{}},P,T;function W(){if(T)return P;T=1;var n=1e3,o=n*60,t=o*60,i=t*24,h=i*7,w=i*365.25;P=function(e,r){r=r||{};var s=typeof e;if(s==="string"&&e.length>0)return u(e);if(s==="number"&&isFinite(e))return r.long?c(e):g(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function u(e){if(e=String(e),!(e.length>100)){var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(r){var s=parseFloat(r[1]),m=(r[2]||"ms").toLowerCase();switch(m){case"years":case"year":case"yrs":case"yr":case"y":return s*w;case"weeks":case"week":case"w":return s*h;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*t;case"minutes":case"minute":case"mins":case"min":case"m":return s*o;case"seconds":case"second":case"secs":case"sec":case"s":return s*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function g(e){var r=Math.abs(e);return r>=i?Math.round(e/i)+"d":r>=t?Math.round(e/t)+"h":r>=o?Math.round(e/o)+"m":r>=n?Math.round(e/n)+"s":e+"ms"}function c(e){var r=Math.abs(e);return r>=i?a(e,r,i,"day"):r>=t?a(e,r,t,"hour"):r>=o?a(e,r,o,"minute"):r>=n?a(e,r,n,"second"):e+" ms"}function a(e,r,s,m){var C=r>=s*1.5;return Math.round(e/s)+" "+m+(C?"s":"")}return P}function K(n){t.debug=t,t.default=t,t.coerce=c,t.disable=w,t.enable=h,t.enabled=u,t.humanize=W(),t.destroy=a,Object.keys(n).forEach(e=>{t[e]=n[e]}),t.names=[],t.skips=[],t.formatters={};function o(e){let r=0;for(let s=0;s<e.length;s++)r=(r<<5)-r+e.charCodeAt(s),r|=0;return t.colors[Math.abs(r)%t.colors.length]}t.selectColor=o;function t(e){let r,s=null,m,C;function p(...l){if(!p.enabled)return;const d=p,F=Number(new Date),y=F-(r||F);d.diff=y,d.prev=r,d.curr=F,r=F,l[0]=t.coerce(l[0]),typeof l[0]!="string"&&l.unshift("%O");let E=0;l[0]=l[0].replace(/%([a-zA-Z%])/g,(S,f)=>{if(S==="%%")return"%";E++;const b=t.formatters[f];if(typeof b=="function"){const v=l[E];S=b.call(d,v),l.splice(E,1),E--}return S}),t.formatArgs.call(d,l),(d.log||t.log).apply(d,l)}return p.namespace=e,p.useColors=t.useColors(),p.color=t.selectColor(e),p.extend=i,p.destroy=t.destroy,Object.defineProperty(p,"enabled",{enumerable:!0,configurable:!1,get:()=>s!==null?s:(m!==t.namespaces&&(m=t.namespaces,C=t.enabled(e)),C),set:l=>{s=l}}),typeof t.init=="function"&&t.init(p),p}function i(e,r){const s=t(this.namespace+(typeof r>"u"?":":r)+e);return s.log=this.log,s}function h(e){t.save(e),t.namespaces=e,t.names=[],t.skips=[];let r;const s=(typeof e=="string"?e:"").split(/[\s,]+/),m=s.length;for(r=0;r<m;r++)s[r]&&(e=s[r].replace(/\*/g,".*?"),e[0]==="-"?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function w(){const e=[...t.names.map(g),...t.skips.map(g).map(r=>"-"+r)].join(",");return t.enable(""),e}function u(e){if(e[e.length-1]==="*")return!0;let r,s;for(r=0,s=t.skips.length;r<s;r++)if(t.skips[r].test(e))return!1;for(r=0,s=t.names.length;r<s;r++)if(t.names[r].test(e))return!0;return!1}function g(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}function c(e){return e instanceof Error?e.stack||e.message:e}function a(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}var X=K;(function(n,o){o.formatArgs=i,o.save=h,o.load=w,o.useColors=t,o.storage=u(),o.destroy=(()=>{let c=!1;return()=>{c||(c=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function t(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function i(c){if(c[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+c[0]+(this.useColors?"%c ":" ")+"+"+n.exports.humanize(this.diff),!this.useColors)return;const a="color: "+this.color;c.splice(1,0,a,"color: inherit");let e=0,r=0;c[0].replace(/%[a-zA-Z%]/g,s=>{s!=="%%"&&(e++,s==="%c"&&(r=e))}),c.splice(r,0,a)}o.log=console.debug||console.log||(()=>{});function h(c){try{c?o.storage.setItem("debug",c):o.storage.removeItem("debug")}catch{}}function w(){let c;try{c=o.storage.getItem("debug")}catch{}return!c&&typeof process<"u"&&"env"in process&&(c={}.DEBUG),c}function u(){try{return localStorage}catch{}}n.exports=X(o);const{formatters:g}=n.exports;g.j=function(c){try{return JSON.stringify(c)}catch(a){return"[UnexpectedJSONParseError]: "+a.message}}})(O,O.exports);var Y=O.exports;const ee=I(Y),te=ee("deezer-playlist"),we=async(n,o)=>{const t=Date.now();try{return await o()}finally{const i=Date.now();console.warn(`### calling ${n} took ${i-t}ms`)}};function A(n,o){return new B(n,o)}function Fe(n,o){return new H(n,o)}new TextEncoder;var L={exports:{}};(function(n,o){(function(t,i){i(o,n)})(q,function(t,i){var h={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function w(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function u(a){try{delete window[a]}catch{window[a]=void 0}}function g(a){var e=document.getElementById(a);e&&document.getElementsByTagName("head")[0].removeChild(e)}function c(a){var e=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],r=a,s=e.timeout||h.timeout,m=e.jsonpCallback||h.jsonpCallback,C=void 0;return new Promise(function(p,l){var d=e.jsonpCallbackFunction||w(),F=m+"_"+d;window[d]=function(E){p({ok:!0,json:function(){return Promise.resolve(E)}}),C&&clearTimeout(C),g(F),u(d)},r+=r.indexOf("?")===-1?"?":"&";var y=document.createElement("script");y.setAttribute("src",""+r+m+"="+d),e.charset&&y.setAttribute("charset",e.charset),e.nonce&&y.setAttribute("nonce",e.nonce),e.referrerPolicy&&y.setAttribute("referrerPolicy",e.referrerPolicy),e.crossorigin&&y.setAttribute("crossorigin","true"),y.id=F,document.getElementsByTagName("head")[0].appendChild(y),C=setTimeout(function(){l(new Error("JSONP request to "+a+" timed out")),u(d),g(F),window[d]=function(){u(d)}},s),y.onerror=function(){l(new Error("JSONP request to "+a+" failed")),u(d),g(F),C&&clearTimeout(C)}})}i.exports=c})})(L,L.exports);var ne=L.exports;const re=I(ne),_=te.extend("call-deezer");async function oe(n){{n.searchParams.set("output","jsonp"),_({fetchJsonp:n.toString()}),console.log("fetchDeezer: "+n.toString());const o=await re(n.toString(),{timeout:1e4});if(!o.ok)throw A(500,"error in jsonp call "+n.pathname);return o}}async function ye(n){_(`calling ${n.apiPath}`);const o=new URL(n.apiPath,G.API_URL),t=$.get();if(!t)throw A(500,"no accessToken in cookies");o.searchParams.set("access_token",t),n.searchParams&&Object.entries(n.searchParams).forEach(([w,u])=>{o.searchParams.set(w,""+u)});const h=await(await oe(o)).json();if(_("call response",h),h.error)throw A(500,"error in deezer call "+o.pathname+": "+JSON.stringify(h.error));return h}const j={};function D(n){return n==="local"?localStorage:sessionStorage}function x(n,o,t){const i=(t==null?void 0:t.serializer)??JSON,h=(t==null?void 0:t.storage)??"local";function w(u,g){D(h).setItem(u,i.stringify(g))}if(!j[n]){const u=Q(o,a=>{const e=D(h).getItem(n);e&&a(i.parse(e));{const r=s=>{s.key===n&&a(s.newValue?i.parse(s.newValue):null)};return window.addEventListener("storage",r),()=>window.removeEventListener("storage",r)}}),{subscribe:g,set:c}=u;j[n]={set(a){w(n,a),c(a)},update(a){const e=a(N(u));w(n,e),c(e)},subscribe:g}}return j[n]}const se=x("modeOsPrefers",!1),ae=x("modeUserPrefers",void 0),ce=x("modeCurrent",!1);function be(){const n=window.matchMedia("(prefers-color-scheme: light)").matches;return se.set(n),n}function ve(n){ae.set(n)}function Ee(n){const o=document.documentElement.classList,t="dark";n===!0?o.remove(t):o.add(t),ce.set(n)}function Se(){const n=document.documentElement.classList,o=localStorage.getItem("modeUserPrefers")==="false",t=!("modeUserPrefers"in localStorage),i=window.matchMedia("(prefers-color-scheme: dark)").matches;o||t&&i?n.add("dark"):n.remove("dark")}const R="(prefers-reduced-motion: reduce)";function ie(){return window.matchMedia(R).matches}const ke=V(ie(),n=>{{const o=i=>{n(i.matches)},t=window.matchMedia(R);return t.addEventListener("change",o),()=>{t.removeEventListener("change",o)}}});export{te as R,Ee as a,ve as b,ye as c,I as d,he as e,ge as f,be as g,ce as m,Z as o,ke as p,Fe as r,Se as s,we as t,pe as u};