import{c as F,t as at,e as et,i as st}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.Chf4KSy6.js";import{e as rt,a as K,g as it,P as lt,b as ot,c as nt,h as dt}from"../chunks/PlaylistApplicationShell._cT8eg52.js";import{a as I,t as H,b as ct}from"../chunks/disclose-version.DIxtxRN2.js";import{e as ut,L,D as mt,g as ht,f as pt,A as t,B as O,t as p,i as e,s as l,r as a,n as gt,K as M}from"../chunks/utils.BwDD-hkd.js";import{s as c}from"../chunks/render.BznOy0_7.js";import{i as vt}from"../chunks/if.B5ib3keC.js";import{r as E,s as g,a as _t}from"../chunks/attributes.CEaAIHiy.js";import{d as ft}from"../chunks/utils.DtLIpg77.js";import{p as G}from"../chunks/index-client.DDH4I2Nh.js";const bt=!1;async function yt({url:u}){const s=rt(u),d=u.searchParams.get("search");return d?{playlists:await F({apiPath:"/search/playlist",searchParams:{q:d,limit:1e3,index:s??0}}).then(r=>K(r,s||0))}:s?{playlists:await F({apiPath:"/user/me/playlists",searchParams:{limit:1e3,index:s}}).then(r=>K(r,s))}:{playlists:await at("getRemainingPages:",async()=>await it({apiPath:"/user/me/playlists",limit:500,index:0}))}}const Bt=Object.freeze(Object.defineProperty({__proto__:null,load:yt,ssr:bt},Symbol.toStringTag,{value:"Module"}));var xt=H('<tr><td><a data-sveltekit-preload-data="off"><div class="flex items-center"><img alt="playlist cover" class="deezer_img_small"> <strong class="m-2"> </strong></div></a></td><td class="items-center largeonly"> </td><td class="largeonly"><input class="checkbox" type="checkbox" disabled></td><td class="mediumonly"> </td><td class="largeonly"> </td></tr>'),Pt=(u,s)=>O(s,!t(s)),kt=H(`<div class="table-container"><table class="table table-hover "><thead><tr><th>Title</th><th class="largeonly">Created on</th><th class="largeonly">Public?</th><th class="mediumonly"># Tracks</th><th class="largeonly">duration</th></tr><tr><td colspan="6"><input class="input" title="Input (search)" type="search" placeholder="Search..."></td></tr></thead><tbody></tbody></table> <!></div> <a href="#showDebug"> </a> <pre id="showDebug">
        <!>
    </pre>`,1);function Ct(u,s){ut(s,!0);let d=L(!1),r=L(G({page:0,limit:5,size:10,amounts:[5,10,20,50,100]})),v=M(()=>{var o,_;return(_=(o=s.data)==null?void 0:o.playlists)==null?void 0:_.data});mt(()=>{var o;t(r).size=(o=t(v))==null?void 0:o.length});let m=L(""),Q=M(()=>t(v)?t(v).filter(o=>!t(m)||JSON.stringify(o).toLowerCase().includes(t(m).toLowerCase())).slice(t(r).page*t(r).limit,t(r).page*t(r).limit+t(r).limit):[]);lt(u,{children:(o,_)=>{var T=kt(),f=pt(T),b=e(f),y=e(b),B=l(e(y)),C=e(B),N=e(C);E(N),a(C),a(B),a(y);var R=l(y);et(R,21,()=>t(Q),st,(n,i)=>{var x=xt(),P=e(x),k=e(P),A=e(k),w=e(A),D=l(w,2),X=e(D,!0);a(D),a(A),a(k),a(P);var S=l(P),Y=e(S,!0);a(S);var z=l(S),J=e(z);E(J),a(z);var $=l(z),Z=e($,!0);a($);var q=l($),tt=e(q,!0);p(()=>c(tt,dt(t(i).duration*1e3,{units:["h","m","s"],largest:2}))),a(q),a(x),p(()=>{g(k,"href",`edit?id=${t(i).id??""}`),g(w,"src",t(i).picture_small),g(w,"aria-describedby",`${t(i).id??""}_title`),g(D,"id",`${t(i).id??""}_title`),c(X,t(i).title),c(Y,t(i).creation_date),_t(J,t(i).public),c(Z,t(i).nb_tracks)}),I(n,x)}),a(R),a(b);var U=l(b,2);ot(U,{get settings(){return t(r)},set settings(n){O(r,G(n))},showFirstLastButtons:!0,showPreviousNextButtons:!0}),a(f);var h=l(f,2);h.__click=[Pt,d];var V=e(h,!0);a(h);var j=l(h,2),W=l(e(j));vt(W,()=>t(d),n=>{var i=ct();p(()=>c(i,`
            ${JSON.stringify({pageData:s.data.playlists},null,2)??""}
        `)),I(n,i)}),gt(),a(j),p(()=>c(V,t(d)?"hide debug":"show debug")),nt(N,()=>t(m),n=>O(m,n)),I(o,T)},$$slots:{default:!0}}),ht()}ft(["click"]);export{Ct as component,Bt as universal};
