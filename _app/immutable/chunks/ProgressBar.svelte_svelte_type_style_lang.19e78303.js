import{a as E,t as L,S as Fe,i as we,g as U,c as B}from"./index.c7424e09.js";import{L as ve,$ as ye,s as Se,w as I,f as M,a as G,g as O,h as j,c as V,d as A,j as v,i as H,x as D,K as Ee,y as T,z,A as J,B as Pe,C as $,D as ee,O as ke,l as Ce,m as _e}from"./scheduler.5f6ec423.js";import{T as Le}from"./CookieManager.c7cee2e3.js";import{D as Ae}from"./DeezerConfig.4efdb67f.js";import{H as Re,R as Me}from"./control.f5b05b5f.js";import{w as Oe,r as je}from"./paths.ae1a7060.js";function mt(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function De(t,e){L(t,1,1,()=>{e.delete(t.key)})}function Ct(t,e){t.f(),De(t,e)}function _t(t,e,s,a,c,o,n,l,d,C,r,i){let u=t.length,b=o.length,S=u;const P={};for(;S--;)P[t[S].key]=S;const g=[],m=new Map,p=new Map,k=[];for(S=b;S--;){const f=i(c,o,S),h=s(f);let _=n.get(h);_?a&&k.push(()=>_.p(f,e)):(_=C(h,f),_.c()),m.set(h,g[S]=_),h in P&&p.set(h,Math.abs(S-P[h]))}const y=new Set,w=new Set;function F(f){E(f,1),f.m(l,r),n.set(f.key,f),r=f.first,b--}for(;u&&b;){const f=g[b-1],h=t[u-1],_=f.key,R=h.key;f===h?(r=f.first,u--,b--):m.has(R)?!n.has(_)||y.has(_)?F(f):w.has(R)?u--:p.get(_)>p.get(R)?(w.add(_),F(f)):(y.add(R),u--):(d(h,n),u--)}for(;u--;){const f=t[u];m.has(f.key)||d(f,n)}for(;b;)F(g[b-1]);return ve(k),g}var He=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pe(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z={exports:{}},q,te;function Ie(){if(te)return q;te=1;var t=1e3,e=t*60,s=e*60,a=s*24,c=a*7,o=a*365.25;q=function(r,i){i=i||{};var u=typeof r;if(u==="string"&&r.length>0)return n(r);if(u==="number"&&isFinite(r))return i.long?d(r):l(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function n(r){if(r=String(r),!(r.length>100)){var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(i){var u=parseFloat(i[1]),b=(i[2]||"ms").toLowerCase();switch(b){case"years":case"year":case"yrs":case"yr":case"y":return u*o;case"weeks":case"week":case"w":return u*c;case"days":case"day":case"d":return u*a;case"hours":case"hour":case"hrs":case"hr":case"h":return u*s;case"minutes":case"minute":case"mins":case"min":case"m":return u*e;case"seconds":case"second":case"secs":case"sec":case"s":return u*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function l(r){var i=Math.abs(r);return i>=a?Math.round(r/a)+"d":i>=s?Math.round(r/s)+"h":i>=e?Math.round(r/e)+"m":i>=t?Math.round(r/t)+"s":r+"ms"}function d(r){var i=Math.abs(r);return i>=a?C(r,i,a,"day"):i>=s?C(r,i,s,"hour"):i>=e?C(r,i,e,"minute"):i>=t?C(r,i,t,"second"):r+" ms"}function C(r,i,u,b){var S=i>=u*1.5;return Math.round(r/u)+" "+b+(S?"s":"")}return q}function Te(t){s.debug=s,s.default=s,s.coerce=d,s.disable=o,s.enable=c,s.enabled=n,s.humanize=Ie(),s.destroy=C,Object.keys(t).forEach(r=>{s[r]=t[r]}),s.names=[],s.skips=[],s.formatters={};function e(r){let i=0;for(let u=0;u<r.length;u++)i=(i<<5)-i+r.charCodeAt(u),i|=0;return s.colors[Math.abs(i)%s.colors.length]}s.selectColor=e;function s(r){let i,u=null,b,S;function P(...g){if(!P.enabled)return;const m=P,p=Number(new Date),k=p-(i||p);m.diff=k,m.prev=i,m.curr=p,i=p,g[0]=s.coerce(g[0]),typeof g[0]!="string"&&g.unshift("%O");let y=0;g[0]=g[0].replace(/%([a-zA-Z%])/g,(F,f)=>{if(F==="%%")return"%";y++;const h=s.formatters[f];if(typeof h=="function"){const _=g[y];F=h.call(m,_),g.splice(y,1),y--}return F}),s.formatArgs.call(m,g),(m.log||s.log).apply(m,g)}return P.namespace=r,P.useColors=s.useColors(),P.color=s.selectColor(r),P.extend=a,P.destroy=s.destroy,Object.defineProperty(P,"enabled",{enumerable:!0,configurable:!1,get:()=>u!==null?u:(b!==s.namespaces&&(b=s.namespaces,S=s.enabled(r)),S),set:g=>{u=g}}),typeof s.init=="function"&&s.init(P),P}function a(r,i){const u=s(this.namespace+(typeof i>"u"?":":i)+r);return u.log=this.log,u}function c(r){s.save(r),s.namespaces=r,s.names=[],s.skips=[];let i;const u=(typeof r=="string"?r:"").split(/[\s,]+/),b=u.length;for(i=0;i<b;i++)u[i]&&(r=u[i].replace(/\*/g,".*?"),r[0]==="-"?s.skips.push(new RegExp("^"+r.slice(1)+"$")):s.names.push(new RegExp("^"+r+"$")))}function o(){const r=[...s.names.map(l),...s.skips.map(l).map(i=>"-"+i)].join(",");return s.enable(""),r}function n(r){if(r[r.length-1]==="*")return!0;let i,u;for(i=0,u=s.skips.length;i<u;i++)if(s.skips[i].test(r))return!1;for(i=0,u=s.names.length;i<u;i++)if(s.names[i].test(r))return!0;return!1}function l(r){return r.toString().substring(2,r.toString().length-2).replace(/\.\*\?$/,"*")}function d(r){return r instanceof Error?r.stack||r.message:r}function C(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return s.enable(s.load()),s}var ze=Te;(function(t,e){e.formatArgs=a,e.save=c,e.load=o,e.useColors=s,e.storage=n(),e.destroy=(()=>{let d=!1;return()=>{d||(d=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function s(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function a(d){if(d[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+d[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const C="color: "+this.color;d.splice(1,0,C,"color: inherit");let r=0,i=0;d[0].replace(/%[a-zA-Z%]/g,u=>{u!=="%%"&&(r++,u==="%c"&&(i=r))}),d.splice(i,0,C)}e.log=console.debug||console.log||(()=>{});function c(d){try{d?e.storage.setItem("debug",d):e.storage.removeItem("debug")}catch{}}function o(){let d;try{d=e.storage.getItem("debug")}catch{}return!d&&typeof process<"u"&&"env"in process&&(d={}.DEBUG),d}function n(){try{return localStorage}catch{}}t.exports=ze(e);const{formatters:l}=t.exports;l.j=function(d){try{return JSON.stringify(d)}catch(C){return"[UnexpectedJSONParseError]: "+C.message}}})(Z,Z.exports);var Je=Z.exports;const Ne=pe(Je),Ue=Ne("deezer-playlist"),pt=async(t,e)=>{const s=Date.now();try{return await e()}finally{const a=Date.now();console.warn(`### calling ${t} took ${a-s}ms`)}};function K(t,e){return new Re(t,e)}function bt(t,e){return new Me(t,e)}new TextEncoder;var W={exports:{}};(function(t,e){(function(s,a){a(e,t)})(He,function(s,a){var c={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function o(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function n(C){try{delete window[C]}catch{window[C]=void 0}}function l(C){var r=document.getElementById(C);r&&document.getElementsByTagName("head")[0].removeChild(r)}function d(C){var r=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],i=C,u=r.timeout||c.timeout,b=r.jsonpCallback||c.jsonpCallback,S=void 0;return new Promise(function(P,g){var m=r.jsonpCallbackFunction||o(),p=b+"_"+m;window[m]=function(y){P({ok:!0,json:function(){return Promise.resolve(y)}}),S&&clearTimeout(S),l(p),n(m)},i+=i.indexOf("?")===-1?"?":"&";var k=document.createElement("script");k.setAttribute("src",""+i+b+"="+m),r.charset&&k.setAttribute("charset",r.charset),r.nonce&&k.setAttribute("nonce",r.nonce),r.referrerPolicy&&k.setAttribute("referrerPolicy",r.referrerPolicy),r.crossorigin&&k.setAttribute("crossorigin","true"),k.id=p,document.getElementsByTagName("head")[0].appendChild(k),S=setTimeout(function(){g(new Error("JSONP request to "+C+" timed out")),n(m),l(p),window[m]=function(){n(m)}},u),k.onerror=function(){g(new Error("JSONP request to "+C+" failed")),n(m),l(p),S&&clearTimeout(S)}})}a.exports=d})})(W,W.exports);var Be=W.exports;const Ge=pe(Be),X=Ue.extend("call-deezer");async function Ve(t){{t.searchParams.set("output","jsonp"),X({fetchJsonp:t.toString()}),console.log("fetchDeezer: "+t.toString());const e=await Ge(t.toString(),{timeout:1e4});if(!e.ok)throw K(500,"error in jsonp call "+t.pathname);return e}}async function Ft(t){X(`calling ${t.apiPath}`);const e=new URL(t.apiPath,Ae.API_URL),s=Le.get();if(!s)throw K(500,"no accessToken in cookies");e.searchParams.set("access_token",s),t.searchParams&&Object.entries(t.searchParams).forEach(([o,n])=>{e.searchParams.set(o,""+n)});const c=await(await Ve(e)).json();if(X("call response",c),c.error)throw K(500,"error in deezer call "+e.pathname+": "+JSON.stringify(c.error));return c}const Q={};function se(t){return t==="local"?localStorage:sessionStorage}function Y(t,e,s){const a=(s==null?void 0:s.serializer)??JSON,c=(s==null?void 0:s.storage)??"local";function o(n,l){se(c).setItem(n,a.stringify(l))}if(!Q[t]){const n=Oe(e,C=>{const r=se(c).getItem(t);r&&C(a.parse(r));{const i=u=>{u.key===t&&C(u.newValue?a.parse(u.newValue):null)};return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)}}),{subscribe:l,set:d}=n;Q[t]={set(C){o(t,C),d(C)},update(C){const r=C(ye(n));o(t,r),d(r)},subscribe:l}}return Q[t]}const qe=Y("modeOsPrefers",!1),Qe=Y("modeUserPrefers",void 0),Ze=Y("modeCurrent",!1);function wt(){const t=window.matchMedia("(prefers-color-scheme: light)").matches;return qe.set(t),t}function vt(t){Qe.set(t)}function yt(t){const e=document.documentElement.classList,s="dark";t===!0?e.remove(s):e.add(s),Ze.set(t)}function St(){const t=document.documentElement.classList,e=localStorage.getItem("modeUserPrefers")==="false",s=!("modeUserPrefers"in localStorage),a=window.matchMedia("(prefers-color-scheme: dark)").matches;e||s&&a?t.add("dark"):t.remove("dark")}const be="(prefers-reduced-motion: reduce)";function Ke(){return window.matchMedia(be).matches}const Et=je(Ke(),t=>{{const e=a=>{t(a.matches)},s=window.matchMedia(be);return s.addEventListener("change",e),()=>{s.removeEventListener("change",e)}}}),We=t=>({}),oe=t=>({}),Xe=t=>({}),ne=t=>({}),Ye=t=>({}),re=t=>({}),xe=t=>({}),ae=t=>({}),$e=t=>({}),le=t=>({}),et=t=>({}),ie=t=>({});function ce(t){let e,s,a;const c=t[18].header,o=I(c,t,t[17],ie);return{c(){e=M("header"),o&&o.c(),this.h()},l(n){e=O(n,"HEADER",{id:!0,class:!0});var l=j(e);o&&o.l(l),l.forEach(A),this.h()},h(){v(e,"id","shell-header"),v(e,"class",s="flex-none "+t[7])},m(n,l){H(n,e,l),o&&o.m(e,null),a=!0},p(n,l){o&&o.p&&(!a||l&131072)&&T(o,c,n,n[17],a?J(c,n[17],l,et):z(n[17]),ie),(!a||l&128&&s!==(s="flex-none "+n[7]))&&v(e,"class",s)},i(n){a||(E(o,n),a=!0)},o(n){L(o,n),a=!1},d(n){n&&A(e),o&&o.d(n)}}}function fe(t){let e,s;const a=t[18].sidebarLeft,c=I(a,t,t[17],le);return{c(){e=M("aside"),c&&c.c(),this.h()},l(o){e=O(o,"ASIDE",{id:!0,class:!0});var n=j(e);c&&c.l(n),n.forEach(A),this.h()},h(){v(e,"id","sidebar-left"),v(e,"class",t[6])},m(o,n){H(o,e,n),c&&c.m(e,null),s=!0},p(o,n){c&&c.p&&(!s||n&131072)&&T(c,a,o,o[17],s?J(a,o[17],n,$e):z(o[17]),le),(!s||n&64)&&v(e,"class",o[6])},i(o){s||(E(c,o),s=!0)},o(o){L(c,o),s=!1},d(o){o&&A(e),c&&c.d(o)}}}function ue(t){let e,s,a;const c=t[18].pageHeader,o=I(c,t,t[17],ae),n=o||tt();return{c(){e=M("header"),n&&n.c(),this.h()},l(l){e=O(l,"HEADER",{id:!0,class:!0});var d=j(e);n&&n.l(d),d.forEach(A),this.h()},h(){v(e,"id","page-header"),v(e,"class",s="flex-none "+t[4])},m(l,d){H(l,e,d),n&&n.m(e,null),a=!0},p(l,d){o&&o.p&&(!a||d&131072)&&T(o,c,l,l[17],a?J(c,l[17],d,xe):z(l[17]),ae),(!a||d&16&&s!==(s="flex-none "+l[4]))&&v(e,"class",s)},i(l){a||(E(n,l),a=!0)},o(l){L(n,l),a=!1},d(l){l&&A(e),n&&n.d(l)}}}function tt(t){let e;return{c(){e=Ce("(slot:header)")},l(s){e=_e(s,"(slot:header)")},m(s,a){H(s,e,a)},d(s){s&&A(e)}}}function de(t){let e,s,a;const c=t[18].pageFooter,o=I(c,t,t[17],re),n=o||st();return{c(){e=M("footer"),n&&n.c(),this.h()},l(l){e=O(l,"FOOTER",{id:!0,class:!0});var d=j(e);n&&n.l(d),d.forEach(A),this.h()},h(){v(e,"id","page-footer"),v(e,"class",s="flex-none "+t[2])},m(l,d){H(l,e,d),n&&n.m(e,null),a=!0},p(l,d){o&&o.p&&(!a||d&131072)&&T(o,c,l,l[17],a?J(c,l[17],d,Ye):z(l[17]),re),(!a||d&4&&s!==(s="flex-none "+l[2]))&&v(e,"class",s)},i(l){a||(E(n,l),a=!0)},o(l){L(n,l),a=!1},d(l){l&&A(e),n&&n.d(l)}}}function st(t){let e;return{c(){e=Ce("(slot:footer)")},l(s){e=_e(s,"(slot:footer)")},m(s,a){H(s,e,a)},d(s){s&&A(e)}}}function he(t){let e,s;const a=t[18].sidebarRight,c=I(a,t,t[17],ne);return{c(){e=M("aside"),c&&c.c(),this.h()},l(o){e=O(o,"ASIDE",{id:!0,class:!0});var n=j(e);c&&c.l(n),n.forEach(A),this.h()},h(){v(e,"id","sidebar-right"),v(e,"class",t[5])},m(o,n){H(o,e,n),c&&c.m(e,null),s=!0},p(o,n){c&&c.p&&(!s||n&131072)&&T(c,a,o,o[17],s?J(a,o[17],n,Xe):z(o[17]),ne),(!s||n&32)&&v(e,"class",o[5])},i(o){s||(E(c,o),s=!0)},o(o){L(c,o),s=!1},d(o){o&&A(e),c&&c.d(o)}}}function ge(t){let e,s,a;const c=t[18].footer,o=I(c,t,t[17],oe);return{c(){e=M("footer"),o&&o.c(),this.h()},l(n){e=O(n,"FOOTER",{id:!0,class:!0});var l=j(e);o&&o.l(l),l.forEach(A),this.h()},h(){v(e,"id","shell-footer"),v(e,"class",s="flex-none "+t[1])},m(n,l){H(n,e,l),o&&o.m(e,null),a=!0},p(n,l){o&&o.p&&(!a||l&131072)&&T(o,c,n,n[17],a?J(c,n[17],l,We):z(n[17]),oe),(!a||l&2&&s!==(s="flex-none "+n[1]))&&v(e,"class",s)},i(n){a||(E(o,n),a=!0)},o(n){L(o,n),a=!1},d(n){n&&A(e),o&&o.d(n)}}}function ot(t){let e,s,a,c,o,n,l,d,C,r,i,u,b,S,P,g=t[9].header&&ce(t),m=t[9].sidebarLeft&&fe(t),p=t[9].pageHeader&&ue(t);const k=t[18].default,y=I(k,t,t[17],null);let w=t[9].pageFooter&&de(t),F=t[9].sidebarRight&&he(t),f=t[9].footer&&ge(t);return{c(){e=M("div"),g&&g.c(),s=G(),a=M("div"),m&&m.c(),c=G(),o=M("div"),p&&p.c(),n=G(),l=M("main"),y&&y.c(),C=G(),w&&w.c(),i=G(),F&&F.c(),u=G(),f&&f.c(),this.h()},l(h){e=O(h,"DIV",{id:!0,class:!0,"data-testid":!0});var _=j(e);g&&g.l(_),s=V(_),a=O(_,"DIV",{class:!0});var R=j(a);m&&m.l(R),c=V(R),o=O(R,"DIV",{id:!0,class:!0});var N=j(o);p&&p.l(N),n=V(N),l=O(N,"MAIN",{id:!0,class:!0});var x=j(l);y&&y.l(x),x.forEach(A),C=V(N),w&&w.l(N),N.forEach(A),i=V(R),F&&F.l(R),R.forEach(A),u=V(_),f&&f.l(_),_.forEach(A),this.h()},h(){v(l,"id","page-content"),v(l,"class",d="flex-auto "+t[3]),v(o,"id","page"),v(o,"class",r=t[0]+" "+me),v(a,"class","flex-auto "+rt),v(e,"id","appShell"),v(e,"class",t[8]),v(e,"data-testid","app-shell")},m(h,_){H(h,e,_),g&&g.m(e,null),D(e,s),D(e,a),m&&m.m(a,null),D(a,c),D(a,o),p&&p.m(o,null),D(o,n),D(o,l),y&&y.m(l,null),D(o,C),w&&w.m(o,null),D(a,i),F&&F.m(a,null),D(e,u),f&&f.m(e,null),b=!0,S||(P=Ee(o,"scroll",t[19]),S=!0)},p(h,[_]){h[9].header?g?(g.p(h,_),_&512&&E(g,1)):(g=ce(h),g.c(),E(g,1),g.m(e,s)):g&&(U(),L(g,1,1,()=>{g=null}),B()),h[9].sidebarLeft?m?(m.p(h,_),_&512&&E(m,1)):(m=fe(h),m.c(),E(m,1),m.m(a,c)):m&&(U(),L(m,1,1,()=>{m=null}),B()),h[9].pageHeader?p?(p.p(h,_),_&512&&E(p,1)):(p=ue(h),p.c(),E(p,1),p.m(o,n)):p&&(U(),L(p,1,1,()=>{p=null}),B()),y&&y.p&&(!b||_&131072)&&T(y,k,h,h[17],b?J(k,h[17],_,null):z(h[17]),null),(!b||_&8&&d!==(d="flex-auto "+h[3]))&&v(l,"class",d),h[9].pageFooter?w?(w.p(h,_),_&512&&E(w,1)):(w=de(h),w.c(),E(w,1),w.m(o,null)):w&&(U(),L(w,1,1,()=>{w=null}),B()),(!b||_&1&&r!==(r=h[0]+" "+me))&&v(o,"class",r),h[9].sidebarRight?F?(F.p(h,_),_&512&&E(F,1)):(F=he(h),F.c(),E(F,1),F.m(a,null)):F&&(U(),L(F,1,1,()=>{F=null}),B()),h[9].footer?f?(f.p(h,_),_&512&&E(f,1)):(f=ge(h),f.c(),E(f,1),f.m(e,null)):f&&(U(),L(f,1,1,()=>{f=null}),B()),(!b||_&256)&&v(e,"class",h[8])},i(h){b||(E(g),E(m),E(p),E(y,h),E(w),E(F),E(f),b=!0)},o(h){L(g),L(m),L(p),L(y,h),L(w),L(F),L(f),b=!1},d(h){h&&A(e),g&&g.d(),m&&m.d(),p&&p.d(),y&&y.d(h),w&&w.d(),F&&F.d(),f&&f.d(),S=!1,P()}}}const nt="w-full h-full flex flex-col overflow-hidden",rt="w-full h-full flex overflow-hidden",me="flex-1 overflow-x-hidden flex flex-col",at="flex-none overflow-x-hidden overflow-y-auto",lt="flex-none overflow-x-hidden overflow-y-auto";function it(t,e,s){let a,c,o,n,l,d,C,r,{$$slots:i={},$$scope:u}=e;const b=Pe(i);let{regionPage:S=""}=e,{slotHeader:P="z-10"}=e,{slotSidebarLeft:g="w-auto"}=e,{slotSidebarRight:m="w-auto"}=e,{slotPageHeader:p=""}=e,{slotPageContent:k=""}=e,{slotPageFooter:y=""}=e,{slotFooter:w=""}=e;function F(f){ke.call(this,t,f)}return t.$$set=f=>{s(20,e=$($({},e),ee(f))),"regionPage"in f&&s(0,S=f.regionPage),"slotHeader"in f&&s(10,P=f.slotHeader),"slotSidebarLeft"in f&&s(11,g=f.slotSidebarLeft),"slotSidebarRight"in f&&s(12,m=f.slotSidebarRight),"slotPageHeader"in f&&s(13,p=f.slotPageHeader),"slotPageContent"in f&&s(14,k=f.slotPageContent),"slotPageFooter"in f&&s(15,y=f.slotPageFooter),"slotFooter"in f&&s(16,w=f.slotFooter),"$$scope"in f&&s(17,u=f.$$scope)},t.$$.update=()=>{s(8,a=`${nt} ${e.class??""}`),t.$$.dirty&1024&&s(7,c=`${P}`),t.$$.dirty&2048&&s(6,o=`${at} ${g}`),t.$$.dirty&4096&&s(5,n=`${lt} ${m}`),t.$$.dirty&8192&&s(4,l=`${p}`),t.$$.dirty&16384&&s(3,d=`${k}`),t.$$.dirty&32768&&s(2,C=`${y}`),t.$$.dirty&65536&&s(1,r=`${w}`)},e=ee(e),[S,r,C,d,l,n,o,c,a,b,P,g,m,p,k,y,w,u,i,F]}class Pt extends Fe{constructor(e){super(),we(this,e,it,ot,Se,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}export{Pt as A,Ue as R,yt as a,vt as b,Ft as c,pe as d,mt as e,Ct as f,wt as g,Ze as m,De as o,Et as p,bt as r,St as s,pt as t,_t as u};
