import{r as l,s as m,a5 as q,L as k,E as v}from"./scheduler.5f6ec423.js";const c=[];function x(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let n;const r=new Set;function a(t){if(m(e,t)&&(e=t,n)){const i=!c.length;for(const s of r)s[1](),c.push(s,e);if(i){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return r.add(s),r.size===1&&(n=o(a,b)||l),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:a,update:b,subscribe:f}}function B(e,o,n){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return x(n,(f,t)=>{let i=!1;const s=[];let p=0,d=l;const y=()=>{if(p)return;d();const u=o(r?s[0]:s,f,t);b?f(u):d=v(u)?u:l},z=a.map((u,_)=>q(u,w=>{s[_]=w,p&=~(1<<_),i&&y()},()=>{p|=1<<_}));return i=!0,y(),function(){k(z),d(),i=!1}})}var g;const E=((g=globalThis.__sveltekit_1yziyph)==null?void 0:g.base)??"/deezer-artist-playlist-organizer";var h;const L=((h=globalThis.__sveltekit_1yziyph)==null?void 0:h.assets)??E;export{L as a,E as b,B as d,x as r,A as w};