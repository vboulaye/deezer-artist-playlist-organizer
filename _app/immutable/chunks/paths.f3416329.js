import{r as l,$ as z,K as m,s as x,x as k}from"./scheduler.2d554b92.js";const u=[];function v(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let n;const r=new Set;function a(t){if(x(e,t)&&(e=t,n)){const i=!u.length;for(const s of r)s[1](),u.push(s,e);if(i){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return r.add(s),r.size===1&&(n=o(a,b)||l),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:a,update:b,subscribe:f}}function E(e,o,n){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return v(n,(f,t)=>{let i=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const c=o(r?s[0]:s,f,t);b?f(c):p=k(c)?c:l},q=a.map((c,_)=>z(c,w=>{s[_]=w,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){m(q),p(),i=!1}})}var h;const T=((h=globalThis.__sveltekit_15c0q0s)==null?void 0:h.base)??"/deezer-artist-playlist-organizer";var y;const K=((y=globalThis.__sveltekit_15c0q0s)==null?void 0:y.assets)??T;export{K as a,T as b,E as d,A as w};
