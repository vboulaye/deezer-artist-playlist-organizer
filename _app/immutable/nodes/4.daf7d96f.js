import{s as _,l as u,m as d,i as h,r as i,d as g,F as U}from"../chunks/scheduler.272fdf4b.js";import{S as I,i as $}from"../chunks/index.5f6c21a1.js";import{p as R}from"../chunks/stores.9ac47c5b.js";import{e as a,D as b}from"../chunks/DeezerConfig.0e7645e8.js";import{T as y,R as C}from"../chunks/CookieManager.c7cee2e3.js";function k(n){let e;return{c(){e=u("signin...")},l(t){e=d(t,"signin...")},m(t,o){h(t,e,o)},p:i,i,o:i,d(t){t&&g(e)}}}function x(n,e,t){let o;U(n,R,r=>t(0,o=r)),y.remove();const c=b.AUTHORIZATION_URL,m=a.PUBLIC_DEEZER_ID,p=`${a.PUBLIC_ORIGIN}/auth/callback`,l=["basic_access","email","manage_library","delete_library","listening_history","manage_community","offline_access"].join(","),f=`${c}?app_id=${m}&redirect_uri=${p}&perms=${l}&output=json&response_type=token`;{const r=document.referrer;if(r){const s=new URL(r);s.host===o.url.host&&(console.log("set redriect to "+s.pathname),C.set(s.pathname))}document.location.href=f}return[]}class v extends I{constructor(e){super(),$(this,e,x,k,_,{})}}export{v as component};
