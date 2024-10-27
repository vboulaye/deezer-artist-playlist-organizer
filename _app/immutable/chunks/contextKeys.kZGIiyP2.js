import{E as H,az as K,aA as L,j as P,u as W,aB as j,_ as S,aC as G,q as Y,y as $,aD as X,aE as J,a3 as k,a4 as I,a7 as Q,e as V,i as Z,r as tt,g as it,aF as z,aG as O}from"./utils.BwDD-hkd.js";import{a as at}from"./render.BznOy0_7.js";import{a as rt,s as et}from"./ProgressBar.svelte_svelte_type_style_lang.Chf4KSy6.js";import{a as nt,t as st}from"./disclose-version.DIxtxRN2.js";import{w as R}from"./control.BoUAPlpW.js";const ot=requestAnimationFrame,ft=()=>performance.now(),b={tick:t=>ot(t),now:()=>ft(),tasks:new Set};function M(t){b.tasks.forEach(i=>{i.c(t)||(b.tasks.delete(i),i.f())}),b.tasks.size!==0&&b.tick(M)}function ct(t){let i;return b.tasks.size===0&&b.tick(M),{promise:new Promise(e=>{b.tasks.add(i={c:t,f:e})}),abort(){b.tasks.delete(i)}}}function w(t,i){t.dispatchEvent(new CustomEvent(i))}function ut(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const i=t.split("-");return i.length===1?i[0]:i[0]+i.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function A(t){const i={},e=t.split(";");for(const s of e){const[n,a]=s.split(":");if(!n||a===void 0)break;const r=ut(n.trim());i[r]=a.trim()}return i}const dt=t=>t;function Tt(t,i,e){var s=rt,n,a,r,c=null;s.a??(s.a={element:t,measure(){n=this.element.getBoundingClientRect()},apply(){if(r==null||r.abort(),a=this.element.getBoundingClientRect(),n.left!==a.left||n.right!==a.right||n.top!==a.top||n.bottom!==a.bottom){const f=i()(this.element,{from:n,to:a},e==null?void 0:e());r=x(this.element,f,void 0,1,()=>{r==null||r.abort(),r=void 0})}},fix(){if(!t.getAnimations().length){var{position:f,width:p,height:d}=getComputedStyle(t);if(f!=="absolute"&&f!=="fixed"){var o=t.style;c={position:o.position,width:o.width,height:o.height,transform:o.transform},o.position="absolute",o.width=p,o.height=d;var u=t.getBoundingClientRect();if(n.left!==u.left||n.top!==u.top){var _=`translate(${n.left-u.left}px, ${n.top-u.top}px)`;o.transform=o.transform?`${o.transform} ${_}`:_}}}},unfix(){if(c){var f=t.style;f.position=c.position,f.width=c.width,f.height=c.height,f.transform=c.transform}}}),s.a.element=t}function yt(t,i,e,s){var n=(t&j)!==0,a=(t&X)!==0,r=n&&a,c=(t&J)!==0,f=r?"both":n?"in":"out",p,d=i.inert,o,u;function _(){var v=Q,T=S;k(null),I(null);try{return p??(p=e()(i,(s==null?void 0:s())??{},{direction:f}))}finally{k(v),I(T)}}var g={is_global:c,in(){var v;if(i.inert=d,!n){u==null||u.abort(),(v=u==null?void 0:u.reset)==null||v.call(u);return}a||o==null||o.abort(),w(i,"introstart"),o=x(i,_(),u,1,()=>{w(i,"introend"),o==null||o.abort(),o=p=void 0})},out(v){if(!a){v==null||v(),p=void 0;return}i.inert=!0,w(i,"outrostart"),u=x(i,_(),o,0,()=>{w(i,"outroend"),v==null||v()})},stop:()=>{o==null||o.abort(),u==null||u.abort()}},h=S;if((h.transitions??(h.transitions=[])).push(g),n&&at){var m=c;if(!m){for(var l=h.parent;l&&l.f&H;)for(;(l=l.parent)&&!(l.f&K););m=!l||(l.f&L)!==0}m&&P(()=>{W(()=>g.in())})}}function x(t,i,e,s,n){var a=s===1;if(G(i)){var r,c=!1;return Y(()=>{if(!c){var m=i({direction:a?"in":"out"});r=x(t,m,e,s,n)}}),{abort:()=>{c=!0,r==null||r.abort()},deactivate:()=>r.deactivate(),reset:()=>r.reset(),t:()=>r.t()}}if(e==null||e.deactivate(),!(i!=null&&i.duration))return n(),{abort:$,deactivate:$,reset:$,t:()=>s};const{delay:f=0,css:p,tick:d,easing:o=dt}=i;var u=[];if(a&&e===void 0&&(d&&d(0,1),p)){var _=A(p(0,1));u.push(_,_)}var g=()=>1-s,h=t.animate(u,{duration:f});return h.onfinish=()=>{var m=(e==null?void 0:e.t())??1-s;e==null||e.abort();var l=s-m,v=i.duration*Math.abs(l),T=[];if(v>0){if(p)for(var E=Math.ceil(v/16.666666666666668),C=0;C<=E;C+=1){var F=m+l*o(C/E),D=p(F,1-F);T.push(A(D))}g=()=>{var y=h.currentTime;return m+l*o(y/v)},d&&ct(()=>{if(h.playState!=="running")return!1;var y=g();return d(y,1-y),!0})}h=t.animate(T,{duration:v,fill:"forwards"}),h.onfinish=()=>{g=()=>s,d==null||d(s,1-s),n()}},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=$)},deactivate:()=>{n=$},reset:()=>{s===0&&(d==null||d(1,0))},t:()=>g()}}var lt=st('<span class="flex gap-x-2 items-center mx-2"><!></span>');function wt(t,i){V(i,!0);var e=lt(),s=Z(e);et(s,()=>i.children??$),tt(e),nt(t,e),it()}const pt={message:"Missing Toast Message",autohide:!0,timeout:5e3},B="toastStore";function xt(){const t=z(B);if(!t)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return t}function Ct(){const t=vt();return O(B,t)}function ht(){const t=Math.random();return Number(t).toString(32)}function vt(){const{subscribe:t,set:i,update:e}=R([]),s=a=>e(r=>{if(r.length>0){const c=r.findIndex(p=>p.id===a),f=r[c];f&&(f.callback&&f.callback({id:a,status:"closed"}),f.timeoutId&&clearTimeout(f.timeoutId),r.splice(c,1))}return r});function n(a){if(a.autohide===!0)return setTimeout(()=>{s(a.id)},a.timeout)}return{subscribe:t,close:s,trigger:a=>{const r=ht();return e(c=>{a&&a.callback&&a.callback({id:r,status:"queued"}),a.hideDismiss&&(a.autohide=!0);const f={...pt,...a,id:r};return f.timeoutId=n(f),c.push(f),c}),r},freeze:a=>e(r=>(r.length>0&&clearTimeout(r[a].timeoutId),r)),unfreeze:a=>e(r=>(r.length>0&&(r[a].timeoutId=n(r[a])),r)),clear:()=>i([])}}function q(t){const i=t-1;return i*i*i+1}function N(t){const i=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return i?[parseFloat(i[1]),i[2]||"px"]:[t,"px"]}function Et(t,{delay:i=0,duration:e=400,easing:s=q,x:n=0,y:a=0,opacity:r=0}={}){const c=getComputedStyle(t),f=+c.opacity,p=c.transform==="none"?"":c.transform,d=f*(1-r),[o,u]=N(n),[_,g]=N(a);return{delay:i,duration:e,easing:s,css:(h,m)=>`
			transform: ${p} translate(${(1-h)*o}${u}, ${(1-h)*_}${g});
			opacity: ${f-d*m}`}}function Ft(t,{delay:i=0,duration:e=400,easing:s=q,axis:n="y"}={}){const a=getComputedStyle(t),r=+a.opacity,c=n==="y"?"height":"width",f=parseFloat(a[c]),p=n==="y"?["top","bottom"]:["left","right"],d=p.map(l=>`${l[0].toUpperCase()}${l.slice(1)}`),o=parseFloat(a[`padding${d[0]}`]),u=parseFloat(a[`padding${d[1]}`]),_=parseFloat(a[`margin${d[0]}`]),g=parseFloat(a[`margin${d[1]}`]),h=parseFloat(a[`border${d[0]}Width`]),m=parseFloat(a[`border${d[1]}Width`]);return{delay:i,duration:e,easing:s,css:l=>`overflow: hidden;opacity: ${Math.min(l*20,1)*r};${c}: ${l*f}px;padding-${p[0]}: ${l*o}px;padding-${p[1]}: ${l*u}px;margin-${p[0]}: ${l*_}px;margin-${p[1]}: ${l*g}px;border-${p[0]}-width: ${l*h}px;border-${p[1]}-width: ${l*m}px;`}}const U={toolbar:Symbol()};function St(t=[]){const i=R(t);return O(U.toolbar,i)}function kt(){return z(U.toolbar)}export{wt as H,Tt as a,St as b,kt as c,Et as f,xt as g,Ct as i,Ft as s,yt as t};