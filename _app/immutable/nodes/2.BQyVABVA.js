import{c as d,a as r,t as u}from"../chunks/disclose-version.DIxtxRN2.js";import{e as v,f as h,g as y,i,s as _,r as o}from"../chunks/utils.BwDD-hkd.js";import{i as b}from"../chunks/if.B5ib3keC.js";import{s as $}from"../chunks/attributes.CEaAIHiy.js";import{i as z}from"../chunks/lifecycle.DllKt3QR.js";import{s as k,a as x}from"../chunks/store.CZePPtrh.js";import{g as D,b as n}from"../chunks/entry.BBupoSP7.js";import{p as P}from"../chunks/stores.BbhsVMy_.js";var U=u('<div class="flex place-content-center items-center"><span class=" grid grid-cols-1 justify-items-center gap-y-4  "><h1 class="h1">Welcome to the Deezer Playlist Organizer!</h1> <p class="h4">Please sign-in using your Deezer Account in order to view/edit your playlists.</p> <a class="btn variant-filled-primary" data-sveltekit-preload-data="off">Sign in</a></span></div>');function C(p,l){v(l,!1);const c=k(),s=()=>x(P,"$page",c);s().data.currentUser&&D(n+"/playlists"),z();var e=d(),m=h(e);b(m,()=>!s().data.currentUser,f=>{var a=U(),t=i(a),g=_(i(t),4);$(g,"href",`${n??""}/auth/signin`),o(t),o(a),r(f,a)}),r(p,e),y()}export{C as component};
