import{b as f,a as l}from"../chunks/disclose-version.DIxtxRN2.js";import{e as d,g as u,n as k}from"../chunks/utils.BwDD-hkd.js";import{i as h}from"../chunks/lifecycle.DllKt3QR.js";import{s as x,a as b}from"../chunks/store.CZePPtrh.js";import{b as a,g as _}from"../chunks/entry.BBupoSP7.js";import{p as $}from"../chunks/stores.BbhsVMy_.js";import{T as v,R as n}from"../chunks/CookieManager.P34oS-qs.js";function z(i,r){d(r,!1);const c=x(),p=()=>b($,"$page",c);async function m(e){v.set(e);const t=n.get()||a+"/";console.log({redirectPath:t,base:a}),n.remove(),await _(t,{invalidateAll:!0})}const o=p().url.hash,s="#access_token=";if(o.includes(s)){const e=o.substring(o.indexOf(s)+s.length,o.indexOf("&"));console.log("callback access token: ",{access_token:e}),setTimeout(async()=>{await m(e)},1)}h(),k();var g=f("processing deezer signin...");l(i,g),u()}export{z as component};
