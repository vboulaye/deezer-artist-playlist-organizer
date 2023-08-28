import{w as x}from"./paths.9136c39e.js";import{Z as w,v as T,_ as h}from"./scheduler.e7e5d74b.js";function C(o,s){const r={},d={},a={$$scope:1};let t=o.length;for(;t--;){const e=o[t],i=s[t];if(i){for(const n in e)n in i||(d[n]=1);for(const n in i)a[n]||(r[n]=i[n],a[n]=1);o[t]=i}else for(const n in e)a[n]=1}for(const e in d)e in r||(r[e]=void 0);return r}const k={message:"Missing Toast Message",autohide:!0,timeout:5e3},y="toastStore";function M(){const o=w(y);if(!o)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return o}function U(){const o=I();return T(y,o)}function v(){const o=Math.random();return Number(o).toString(32)}function I(){const{subscribe:o,set:s,update:r}=x([]),d=t=>r(e=>{if(e.length>0){const i=e.findIndex(c=>c.id===t),n=e[i];n&&(n.callback&&n.callback({id:t,status:"closed"}),n.timeoutId&&clearTimeout(n.timeoutId),e.splice(i,1))}return e});function a(t){if(t.autohide===!0)return setTimeout(()=>{d(t.id)},t.timeout)}return{subscribe:o,close:d,trigger:t=>{const e=v();return r(i=>{t&&t.callback&&t.callback({id:e,status:"queued"}),t.hideDismiss&&(t.autohide=!0);const n={...k,...t,id:e};return n.timeoutId=a(n),i.push(n),i}),e},freeze:t=>r(e=>(e.length>0&&clearTimeout(e[t].timeoutId),e)),unfreeze:t=>r(e=>(e.length>0&&(e[t].timeoutId=a(e[t])),e)),clear:()=>s([])}}function D(o){return o*o*o}function b(o){const s=o-1;return s*s*s+1}function E(o,{delay:s=0,duration:r=400,easing:d=b,x:a=0,y:t=0,opacity:e=0}={}){const i=getComputedStyle(o),n=+i.opacity,c=i.transform==="none"?"":i.transform,l=n*(1-e),[f,m]=h(a),[g,_]=h(t);return{delay:s,duration:r,easing:d,css:(p,$)=>`
			transform: ${c} translate(${(1-p)*f}${m}, ${(1-p)*g}${_});
			opacity: ${n-l*$}`}}function O(o,{delay:s=0,duration:r=400,easing:d=b,axis:a="y"}={}){const t=getComputedStyle(o),e=+t.opacity,i=a==="y"?"height":"width",n=parseFloat(t[i]),c=a==="y"?["top","bottom"]:["left","right"],l=c.map(u=>`${u[0].toUpperCase()}${u.slice(1)}`),f=parseFloat(t[`padding${l[0]}`]),m=parseFloat(t[`padding${l[1]}`]),g=parseFloat(t[`margin${l[0]}`]),_=parseFloat(t[`margin${l[1]}`]),p=parseFloat(t[`border${l[0]}Width`]),$=parseFloat(t[`border${l[1]}Width`]);return{delay:s,duration:r,easing:d,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*e};${i}: ${u*n}px;padding-${c[0]}: ${u*f}px;padding-${c[1]}: ${u*m}px;margin-${c[0]}: ${u*g}px;margin-${c[1]}: ${u*_}px;border-${c[0]}-width: ${u*p}px;border-${c[1]}-width: ${u*$}px;`}}export{C as a,D as b,b as c,E as f,M as g,U as i,O as s};
