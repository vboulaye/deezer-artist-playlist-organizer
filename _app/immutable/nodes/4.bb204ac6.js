import{s as _,l as u,m as d,i as h,r as i,d as g,F as U}from"../chunks/scheduler.2d554b92.js";import{S as I,i as $}from"../chunks/index.22319be1.js";import"../chunks/paths.f3416329.js";import{p as C}from"../chunks/stores.b2f9d7ca.js";import{e as a,D as R}from"../chunks/DeezerConfig.d3043dda.js";import{U as b,T as k,R as y}from"../chunks/CookieManager.d8697515.js";function x(s){let e;return{c(){e=u("signin...")},l(t){e=d(t,"signin...")},m(t,o){h(t,e,o)},p:i,i,o:i,d(t){t&&g(e)}}}function z(s,e,t){let o;U(s,C,r=>t(0,o=r)),b.remove(),k.remove();const c=R.AUTHORIZATION_URL,m=a.PUBLIC_DEEZER_ID,p=`${a.PUBLIC_ORIGIN}/auth/callback`,l=["basic_access","email","manage_library","delete_library","listening_history","manage_community","offline_access"].join(","),f=`${c}?app_id=${m}&redirect_uri=${p}&perms=${l}&output=json&response_type=token`;{const r=document.referrer;if(r){const n=new URL(r);n.host===o.url.host&&(console.log("set redriect to "+n.pathname),y.set(n.pathname))}document.location.href=f}return[]}class O extends I{constructor(e){super(),$(this,e,z,x,_,{})}}export{O as component};