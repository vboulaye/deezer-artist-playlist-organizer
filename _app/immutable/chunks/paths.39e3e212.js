import{r as l,Z as m,K as q,s as x,x as j}from"./scheduler.dc0f26dd.js";const u=[];function k(e,o){return{subscribe:v(e,o).subscribe}}function v(e,o=l){let n;const r=new Set;function a(t){if(x(e,t)&&(e=t,n)){const i=!u.length;for(const s of r)s[1](),u.push(s,e);if(i){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return r.add(s),r.size===1&&(n=o(a,b)||l),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:a,update:b,subscribe:f}}function B(e,o,n){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return k(n,(f,t)=>{let i=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const c=o(r?s[0]:s,f,t);b?f(c):p=j(c)?c:l},w=a.map((c,_)=>m(c,z=>{s[_]=z,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){q(w),p(),i=!1}})}var y;const A=((y=globalThis.__sveltekit_70cyji)==null?void 0:y.base)??"/deezer-artist-playlist-organizer";var h;const E=((h=globalThis.__sveltekit_70cyji)==null?void 0:h.assets)??A;export{E as a,A as b,B as d,v as w};