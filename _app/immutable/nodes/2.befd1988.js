import{s as x,e as f,i as o,r as p,d as r,F as y,f as m,a as g,g as u,O as d,c as b}from"../chunks/scheduler.dc0f26dd.js";import{S as v,i as C}from"../chunks/index.b6753c13.js";import{g as h}from"../chunks/navigation.dc21a5ff.js";import{b as z}from"../chunks/paths.57760831.js";import{p as k}from"../chunks/stores.b1d85663.js";function _(n){let s,e="Welcome to the Deezer playlist Organizer",t,a,c="Please signin using your Deezer Account in order to view/edit your playlists.";return{c(){s=m("h1"),s.textContent=e,t=g(),a=m("p"),a.textContent=c},l(i){s=u(i,"H1",{"data-svelte-h":!0}),d(s)!=="svelte-12wmzoo"&&(s.textContent=e),t=b(i),a=u(i,"P",{"data-svelte-h":!0}),d(a)!=="svelte-1yczg55"&&(a.textContent=c)},m(i,l){o(i,s,l),o(i,t,l),o(i,a,l)},d(i){i&&(r(s),r(t),r(a))}}}function P(n){let s,e=!n[0].data.currentUser&&_();return{c(){e&&e.c(),s=f()},l(t){e&&e.l(t),s=f()},m(t,a){e&&e.m(t,a),o(t,s,a)},p(t,[a]){t[0].data.currentUser?e&&(e.d(1),e=null):e||(e=_(),e.c(),e.m(s.parentNode,s))},i:p,o:p,d(t){t&&r(s),e&&e.d(t)}}}function U(n,s,e){let t;return y(n,k,a=>e(0,t=a)),t.data.currentUser&&h(z+"/playlists"),[t]}class q extends v{constructor(s){super(),C(this,s,U,P,x,{})}}export{q as component};