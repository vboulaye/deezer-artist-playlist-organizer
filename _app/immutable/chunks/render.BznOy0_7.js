import{h,M as O,N as E,v as _,o as g,O as C,b as F,P as I,d as f,Q as H,R,T,a as M,U as V,V as k,W as S,X as W,Y as $,Z as j,c as P,e as Q,_ as U,g as X,F as Z}from"./utils.BwDD-hkd.js";import{a as q,r as A,h as v,i as z}from"./utils.DtLIpg77.js";import{d as B}from"./disclose-version.DIxtxRN2.js";let n;function G(){n=void 0}function te(t){let e=null,a=h;var o;if(h){for(e=f,n===void 0&&(n=H(document.head));n!==null&&(n.nodeType!==8||n.data!==O);)n=E(n);n===null?_(!1):n=g(E(n))}h||(o=document.head.appendChild(C()));try{F(()=>t(o),I)}finally{a&&(_(!0),n=f,g(e))}}let D=!0;function ae(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a==null?"":a+"")}function J(t,e){return L(t,e)}function re(t,e){R(),e.intro=e.intro??!1;const a=e.target,o=h,y=f;try{for(var r=H(a);r&&(r.nodeType!==8||r.data!==O);)r=E(r);if(!r)throw T;_(!0),g(r),M();const l=L(t,{...e,anchor:r});if(f===null||f.nodeType!==8||f.data!==V)throw k(),T;return _(!1),l}catch(l){if(l===T)return e.recover===!1&&S(),R(),W(a),_(!1),J(t,e);throw l}finally{_(o),g(y),G()}}const u=new Map;function L(t,{target:e,anchor:a,props:o={},events:y,context:r,intro:l=!0}){R();var m=new Set,w=i=>{for(var s=0;s<i.length;s++){var d=i[s];if(!m.has(d)){m.add(d);var c=z(d);e.addEventListener(d,v,{passive:c});var N=u.get(d);N===void 0?(document.addEventListener(d,v,{passive:c}),u.set(d,1)):u.set(d,N+1)}}};w($(q)),A.add(w);var p=void 0,Y=j(()=>{var i=a??e.appendChild(C());return P(()=>{if(r){Q({});var s=Z;s.c=r}y&&(o.$$events=y),h&&B(i,null),D=l,p=t(i,o)||{},D=!0,h&&(U.nodes_end=f),r&&X()}),()=>{var c;for(var s of m){e.removeEventListener(s,v);var d=u.get(s);--d===0?(document.removeEventListener(s,v),u.delete(s)):u.set(s,d)}A.delete(w),b.delete(p),i!==a&&((c=i.parentNode)==null||c.removeChild(i))}});return b.set(p,Y),p}let b=new WeakMap;function ne(t){const e=b.get(t);e&&e()}export{D as a,te as b,re as h,J as m,ae as s,ne as u};
