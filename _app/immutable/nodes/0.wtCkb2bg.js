import{T as ht}from"../chunks/CookieManager.P34oS-qs.js";import{c as mt,s as gt,m as Te,a as Ee,b as _t,d as bt,p as vt,e as me,u as kt,f as yt}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.DaSrAvTQ.js";import{n as H,Z as pt,K as Xe,s as x,F as se,e as L,a as P,c as T,b as E,g as A,f as g,o as m,i as D,h as z,G as ne,H as re,I as oe,M as Ct,N as K,O as X,z as xe,T as ue,l as W,aa as ge,ab as Dt,U as ce,ac as _e,r as j,w as $e,k as ae,B as St,ad as wt,P as de,R as et,t as ye,d as pe,j as Ce,ae as be,m as fe,v as Lt,D as ve,af as Tt}from"../chunks/scheduler.pzfbVsGb.js";import{n as Et,l as Mt,h as It,j as zt,S as ee,i as te,t as C,g as F,b as S,f as Z,k as tt,o as lt,c as O,a as Q,m as U,d as q}from"../chunks/index.43Z_d8hB.js";import{i as Pt,b as he}from"../chunks/entry.BE-gc76k.js";import{n as At,p as it}from"../chunks/stores.C2JL4_hK.js";import{i as Vt,c as at,g as Bt,f as ke,a as st,b as Ht,d as Nt,H as nt}from"../chunks/contextKeys.JyP-wBJq.js";import{w as rt}from"../chunks/control.CsvEx2zW.js";function Rt(n,e,t,l){if(!e)return H;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return H;const{delay:s=0,duration:a=300,easing:r=pt,start:u=Et()+s,end:o=u+a,tick:f=H,css:c}=t(n,{from:e,to:i},l);let b=!0,k=!1,p;function _(){c&&(p=It(n,0,1,a,s,r,c)),s||(k=!0)}function h(){c&&zt(n,p),b=!1}return Mt(d=>{if(!k&&d>=u&&(k=!0),k&&d>=o&&(f(1,0),h()),!b)return!1;if(k){const v=d-u,I=0+1*r(v/a);f(I,1-I)}return!0}),_(),f(0,1),h}function jt(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:l}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=l,ot(n,i)}}function ot(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const l=getComputedStyle(n),i=l.transform==="none"?"":l.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}const Ot="auto",Ut="always";function qt(){if(ht.get())return mt({apiPath:"/user/me"})}const Ft=async({url:n})=>({currentUser:qt(),pathname:n.pathname}),ti=Object.freeze(Object.defineProperty({__proto__:null,load:Ft,prerender:Ot,trailingSlash:Ut},Symbol.toStringTag,{value:"Module"})),Zt="drawerStore";function Kt(){const n=Wt();return Xe(Zt,n)}function Wt(){const{subscribe:n,set:e,update:t}=rt({});return{subscribe:n,set:e,update:t,open:l=>t(()=>({open:!0,...l})),close:()=>t(l=>(l.open=!1,l))}}const Yt="modalStore";function Gt(){const n=Jt();return Xe(Yt,n)}function Jt(){const{subscribe:n,set:e,update:t}=rt([]);return{subscribe:n,set:e,update:t,trigger:l=>t(i=>(i.push(l),i)),close:()=>t(l=>(l.length>0&&l.shift(),l)),clear:()=>e([])}}function Qt(){Gt(),Vt(),Kt()}function Me(n,e){const{transition:t,params:l,enabled:i}=e;return i?t(n,l):"duration"in l?t(n,{duration:0}):{duration:0}}const Xt=n=>({}),Ie=n=>({}),xt=n=>({}),ze=n=>({}),$t=n=>({}),Pe=n=>({});function Ae(n){let e,t,l;const i=n[22].lead,s=se(i,n,n[21],Pe);return{c(){e=L("div"),s&&s.c(),this.h()},l(a){e=T(a,"DIV",{class:!0});var r=E(e);s&&s.l(r),r.forEach(g),this.h()},h(){m(e,"class",t="app-bar-slot-lead "+n[4])},m(a,r){D(a,e,r),s&&s.m(e,null),l=!0},p(a,r){s&&s.p&&(!l||r&2097152)&&ne(s,i,a,a[21],l?oe(i,a[21],r,$t):re(a[21]),Pe),(!l||r&16&&t!==(t="app-bar-slot-lead "+a[4]))&&m(e,"class",t)},i(a){l||(C(s,a),l=!0)},o(a){S(s,a),l=!1},d(a){a&&g(e),s&&s.d(a)}}}function Ve(n){let e,t,l;const i=n[22].trail,s=se(i,n,n[21],ze);return{c(){e=L("div"),s&&s.c(),this.h()},l(a){e=T(a,"DIV",{class:!0});var r=E(e);s&&s.l(r),r.forEach(g),this.h()},h(){m(e,"class",t="app-bar-slot-trail "+n[2])},m(a,r){D(a,e,r),s&&s.m(e,null),l=!0},p(a,r){s&&s.p&&(!l||r&2097152)&&ne(s,i,a,a[21],l?oe(i,a[21],r,xt):re(a[21]),ze),(!l||r&4&&t!==(t="app-bar-slot-trail "+a[2]))&&m(e,"class",t)},i(a){l||(C(s,a),l=!0)},o(a){S(s,a),l=!1},d(a){a&&g(e),s&&s.d(a)}}}function Be(n){let e,t,l;const i=n[22].headline,s=se(i,n,n[21],Ie);return{c(){e=L("div"),s&&s.c(),this.h()},l(a){e=T(a,"DIV",{class:!0});var r=E(e);s&&s.l(r),r.forEach(g),this.h()},h(){m(e,"class",t="app-bar-row-headline "+n[5])},m(a,r){D(a,e,r),s&&s.m(e,null),l=!0},p(a,r){s&&s.p&&(!l||r&2097152)&&ne(s,i,a,a[21],l?oe(i,a[21],r,Xt):re(a[21]),Ie),(!l||r&32&&t!==(t="app-bar-row-headline "+a[5]))&&m(e,"class",t)},i(a){l||(C(s,a),l=!0)},o(a){S(s,a),l=!1},d(a){a&&g(e),s&&s.d(a)}}}function el(n){let e,t,l,i,s,a,r,u,o,f,c=n[8].lead&&Ae(n);const b=n[22].default,k=se(b,n,n[21],null);let p=n[8].trail&&Ve(n),_=n[8].headline&&Be(n);return{c(){e=L("div"),t=L("div"),c&&c.c(),l=P(),i=L("div"),k&&k.c(),a=P(),p&&p.c(),u=P(),_&&_.c(),this.h()},l(h){e=T(h,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var d=E(e);t=T(d,"DIV",{class:!0});var v=E(t);c&&c.l(v),l=A(v),i=T(v,"DIV",{class:!0});var I=E(i);k&&k.l(I),I.forEach(g),a=A(v),p&&p.l(v),v.forEach(g),u=A(d),_&&_.l(d),d.forEach(g),this.h()},h(){m(i,"class",s="app-bar-slot-default "+n[3]),m(t,"class",r="app-bar-row-main "+n[6]),m(e,"class",o="app-bar "+n[7]),m(e,"data-testid","app-bar"),m(e,"role","toolbar"),m(e,"aria-label",n[0]),m(e,"aria-labelledby",n[1])},m(h,d){D(h,e,d),z(e,t),c&&c.m(t,null),z(t,l),z(t,i),k&&k.m(i,null),z(t,a),p&&p.m(t,null),z(e,u),_&&_.m(e,null),f=!0},p(h,[d]){h[8].lead?c?(c.p(h,d),d&256&&C(c,1)):(c=Ae(h),c.c(),C(c,1),c.m(t,l)):c&&(F(),S(c,1,1,()=>{c=null}),Z()),k&&k.p&&(!f||d&2097152)&&ne(k,b,h,h[21],f?oe(b,h[21],d,null):re(h[21]),null),(!f||d&8&&s!==(s="app-bar-slot-default "+h[3]))&&m(i,"class",s),h[8].trail?p?(p.p(h,d),d&256&&C(p,1)):(p=Ve(h),p.c(),C(p,1),p.m(t,null)):p&&(F(),S(p,1,1,()=>{p=null}),Z()),(!f||d&64&&r!==(r="app-bar-row-main "+h[6]))&&m(t,"class",r),h[8].headline?_?(_.p(h,d),d&256&&C(_,1)):(_=Be(h),_.c(),C(_,1),_.m(e,null)):_&&(F(),S(_,1,1,()=>{_=null}),Z()),(!f||d&128&&o!==(o="app-bar "+h[7]))&&m(e,"class",o),(!f||d&1)&&m(e,"aria-label",h[0]),(!f||d&2)&&m(e,"aria-labelledby",h[1])},i(h){f||(C(c),C(k,h),C(p),C(_),f=!0)},o(h){S(c),S(k,h),S(p),S(_),f=!1},d(h){h&&g(e),c&&c.d(),k&&k.d(h),p&&p.d(),_&&_.d()}}}const tl="flex flex-col",ll="grid items-center",il="",al="flex-none flex justify-between items-center",sl="flex-auto",nl="flex-none flex items-center space-x-4";function rl(n,e,t){let l,i,s,a,r,u,{$$slots:o={},$$scope:f}=e;const c=Ct(o);let{background:b="bg-surface-100-800-token"}=e,{border:k=""}=e,{padding:p="p-4"}=e,{shadow:_=""}=e,{spacing:h="space-y-4"}=e,{gridColumns:d="grid-cols-[auto_1fr_auto]"}=e,{gap:v="gap-4"}=e,{regionRowMain:I=""}=e,{regionRowHeadline:N=""}=e,{slotLead:V=""}=e,{slotDefault:B=""}=e,{slotTrail:R=""}=e,{label:Y=""}=e,{labelledby:ie=""}=e;return n.$$set=w=>{t(23,e=K(K({},e),X(w))),"background"in w&&t(9,b=w.background),"border"in w&&t(10,k=w.border),"padding"in w&&t(11,p=w.padding),"shadow"in w&&t(12,_=w.shadow),"spacing"in w&&t(13,h=w.spacing),"gridColumns"in w&&t(14,d=w.gridColumns),"gap"in w&&t(15,v=w.gap),"regionRowMain"in w&&t(16,I=w.regionRowMain),"regionRowHeadline"in w&&t(17,N=w.regionRowHeadline),"slotLead"in w&&t(18,V=w.slotLead),"slotDefault"in w&&t(19,B=w.slotDefault),"slotTrail"in w&&t(20,R=w.slotTrail),"label"in w&&t(0,Y=w.label),"labelledby"in w&&t(1,ie=w.labelledby),"$$scope"in w&&t(21,f=w.$$scope)},n.$$.update=()=>{t(7,l=`${tl} ${b} ${k} ${h} ${p} ${_} ${e.class??""}`),n.$$.dirty&114688&&t(6,i=`${ll} ${d} ${v} ${I}`),n.$$.dirty&131072&&t(5,s=`${il} ${N}`),n.$$.dirty&262144&&t(4,a=`${al} ${V}`),n.$$.dirty&524288&&t(3,r=`${sl} ${B}`),n.$$.dirty&1048576&&t(2,u=`${nl} ${R}`)},e=X(e),[Y,ie,u,r,a,s,i,l,c,b,k,p,_,h,d,v,I,N,V,B,R,f,o]}class ol extends ee{constructor(e){super(),te(this,e,rl,el,x,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}function fl(n,{from:e,to:t},l={}){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform,[a,r]=i.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*a/t.width-(t.left+a),o=e.top+e.height*r/t.height-(t.top+r),{delay:f=0,duration:c=k=>Math.sqrt(k)*120,easing:b=at}=l;return{delay:f,duration:xe(c)?c(Math.sqrt(u*u+o*o)):c,easing:b,css:(k,p)=>{const _=p*u,h=p*o,d=k+p*e.width/t.width,v=k+p*e.height/t.height;return`transform: ${s} translate(${_}px, ${h}px) scale(${d}, ${v});`}}}function ul(n){let e,t=`<script nonce="%sveltekit.nonce%">(${gt.toString()})();<\/script>`,l,i,s,a,r,u,o,f,c,b,k,p;return{c(){e=new ue(!1),l=W(),i=P(),s=L("div"),a=L("div"),r=ge("svg"),u=ge("path"),this.h()},l(_){const h=Dt("svelte-gewkj4",document.head);e=ce(h,!1),l=W(),h.forEach(g),i=A(_),s=T(_,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var d=E(s);a=T(d,"DIV",{class:!0});var v=E(a);r=_e(v,"svg",{class:!0,xmlns:!0,viewBox:!0});var I=E(r);u=_e(I,"path",{d:!0}),E(u).forEach(g),I.forEach(g),v.forEach(g),d.forEach(g),this.h()},h(){e.a=l,m(u,"d",o=n[1]?n[5].sun:n[5].moon),m(r,"class",f="lightswitch-icon "+n[2]),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"viewBox","0 0 512 512"),m(a,"class",c="lightswitch-thumb "+n[3]),m(s,"class",b="lightswitch-track "+n[4]),m(s,"role","switch"),m(s,"aria-label","Light Switch"),m(s,"aria-checked",n[1]),m(s,"title",n[0]),m(s,"tabindex","0")},m(_,h){e.m(t,document.head),z(document.head,l),D(_,i,h),D(_,s,h),z(s,a),z(a,r),z(r,u),k||(p=[j(s,"click",n[6]),j(s,"click",n[19]),j(s,"keydown",ml),j(s,"keydown",n[20]),j(s,"keyup",n[21]),j(s,"keypress",n[22])],k=!0)},p(_,[h]){h&2&&o!==(o=_[1]?_[5].sun:_[5].moon)&&m(u,"d",o),h&4&&f!==(f="lightswitch-icon "+_[2])&&m(r,"class",f),h&8&&c!==(c="lightswitch-thumb "+_[3])&&m(a,"class",c),h&16&&b!==(b="lightswitch-track "+_[4])&&m(s,"class",b),h&2&&m(s,"aria-checked",_[1]),h&1&&m(s,"title",_[0])},i:H,o:H,d(_){_&&(e.d(),g(i),g(s)),g(l),k=!1,$e(p)}}}const cl="cursor-pointer",dl="aspect-square scale-[0.8] flex justify-center items-center",hl="w-[70%] aspect-square";function ml(n){["Enter","Space"].includes(n.code)&&(n.preventDefault(),n.currentTarget.click())}function gl(n,e,t){let l,i,s,a,r,u,o,f;ae(n,Te,M=>t(1,f=M));let{title:c="Toggle light or dark mode."}=e,{bgLight:b="bg-surface-50"}=e,{bgDark:k="bg-surface-900"}=e,{fillLight:p="fill-surface-50"}=e,{fillDark:_="fill-surface-900"}=e,{width:h="w-12"}=e,{height:d="h-6"}=e,{ring:v="ring-[1px] ring-surface-500/30"}=e,{rounded:I="rounded-token"}=e;const N="transition-all duration-[200ms]",V={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function B(){wt(Te,f=!f,f),bt(f),Ee(f)}St(()=>{"modeCurrent"in localStorage||Ee(_t())});function R(M){de.call(this,n,M)}function Y(M){de.call(this,n,M)}function ie(M){de.call(this,n,M)}function w(M){de.call(this,n,M)}return n.$$set=M=>{t(24,e=K(K({},e),X(M))),"title"in M&&t(0,c=M.title),"bgLight"in M&&t(7,b=M.bgLight),"bgDark"in M&&t(8,k=M.bgDark),"fillLight"in M&&t(9,p=M.fillLight),"fillDark"in M&&t(10,_=M.fillDark),"width"in M&&t(11,h=M.width),"height"in M&&t(12,d=M.height),"ring"in M&&t(13,v=M.ring),"rounded"in M&&t(14,I=M.rounded)},n.$$.update=()=>{n.$$.dirty&386&&t(18,l=f===!0?b:k),n.$$.dirty&386&&t(17,i=f===!0?k:b),n.$$.dirty&2&&t(16,s=f===!0?"translate-x-[100%]":""),n.$$.dirty&1538&&t(15,a=f===!0?p:_),t(4,r=`${cl} ${N} ${h} ${d} ${v} ${I} ${l} ${e.class??""}`),n.$$.dirty&217088&&t(3,u=`${dl} ${N} ${d} ${I} ${i} ${s}`),n.$$.dirty&32768&&t(2,o=`${hl} ${a}`)},e=X(e),[c,f,o,u,r,V,B,b,k,p,_,h,d,v,I,a,s,i,l,R,Y,ie,w]}class _l extends ee{constructor(e){super(),te(this,e,gl,ul,x,{title:0,bgLight:7,bgDark:8,fillLight:9,fillDark:10,width:11,height:12,ring:13,rounded:14})}}function He(n,e,t){const l=n.slice();return l[36]=e[t],l[38]=t,l}function Ne(n){let e,t,l=[],i=new Map,s,a,r,u=me(n[11]);const o=f=>f[36];for(let f=0;f<u.length;f+=1){let c=He(n,u,f),b=o(c);i.set(b,l[f]=Ue(b,c))}return{c(){e=L("div"),t=L("div");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=T(f,"DIV",{class:!0,"data-testid":!0});var c=E(e);t=T(c,"DIV",{class:!0});var b=E(t);for(let k=0;k<l.length;k+=1)l[k].l(b);b.forEach(g),c.forEach(g),this.h()},h(){m(t,"class",s="snackbar "+n[13]),m(e,"class",a="snackbar-wrapper "+n[14]),m(e,"data-testid","snackbar-wrapper")},m(f,c){D(f,e,c),z(e,t);for(let b=0;b<l.length;b+=1)l[b]&&l[b].m(t,null);r=!0},p(f,c){if(c[0]&499103){u=me(f[11]),F();for(let b=0;b<l.length;b+=1)l[b].r();l=kt(l,c,o,1,f,u,i,t,yt,Ue,null,He);for(let b=0;b<l.length;b+=1)l[b].a();Z()}(!r||c[0]&8192&&s!==(s="snackbar "+f[13]))&&m(t,"class",s),(!r||c[0]&16384&&a!==(a="snackbar-wrapper "+f[14]))&&m(e,"class",a)},i(f){if(!r){for(let c=0;c<u.length;c+=1)C(l[c]);r=!0}},o(f){for(let c=0;c<l.length;c+=1)S(l[c]);r=!1},d(f){f&&g(e);for(let c=0;c<l.length;c+=1)l[c].d()}}}function Re(n){let e,t,l=n[36].action&&je(n),i=!n[36].hideDismiss&&Oe(n);return{c(){e=L("div"),l&&l.c(),t=P(),i&&i.c(),this.h()},l(s){e=T(s,"DIV",{class:!0});var a=E(e);l&&l.l(a),t=A(a),i&&i.l(a),a.forEach(g),this.h()},h(){m(e,"class","toast-actions "+pl)},m(s,a){D(s,e,a),l&&l.m(e,null),z(e,t),i&&i.m(e,null)},p(s,a){s[36].action?l?l.p(s,a):(l=je(s),l.c(),l.m(e,t)):l&&(l.d(1),l=null),s[36].hideDismiss?i&&(i.d(1),i=null):i?i.p(s,a):(i=Oe(s),i.c(),i.m(e,null))},d(s){s&&g(e),l&&l.d(),i&&i.d()}}}function je(n){let e,t,l=n[36].action.label+"",i,s;function a(){return n[30](n[38])}return{c(){e=L("button"),t=new ue(!1),this.h()},l(r){e=T(r,"BUTTON",{class:!0});var u=E(e);t=ce(u,!1),u.forEach(g),this.h()},h(){t.a=null,m(e,"class",n[1])},m(r,u){D(r,e,u),t.m(l,e),i||(s=j(e,"click",a),i=!0)},p(r,u){n=r,u[0]&2048&&l!==(l=n[36].action.label+"")&&t.p(l),u[0]&2&&m(e,"class",n[1])},d(r){r&&g(e),i=!1,s()}}}function Oe(n){let e,t,l,i;function s(){return n[31](n[36])}return{c(){e=L("button"),t=ye(n[3]),this.h()},l(a){e=T(a,"BUTTON",{class:!0,"aria-label":!0});var r=E(e);t=pe(r,n[3]),r.forEach(g),this.h()},h(){m(e,"class",n[2]),m(e,"aria-label","Dismiss toast")},m(a,r){D(a,e,r),z(e,t),l||(i=j(e,"click",s),l=!0)},p(a,r){n=a,r[0]&8&&Ce(t,n[3]),r[0]&4&&m(e,"class",n[2])},d(a){a&&g(e),l=!1,i()}}}function Ue(n,e){let t,l,i,s,a=e[36].message+"",r,u,o,f,c,b,k,p=H,_,h,d,v=(e[36].action||!e[36].hideDismiss)&&Re(e);function I(){return e[32](e[38])}function N(){return e[33](e[38])}return{key:n,first:null,c(){t=L("div"),l=L("div"),i=L("div"),s=new ue(!1),r=P(),v&&v.c(),o=P(),this.h()},l(V){t=T(V,"DIV",{role:!0,"aria-live":!0});var B=E(t);l=T(B,"DIV",{class:!0,"data-testid":!0});var R=E(l);i=T(R,"DIV",{class:!0});var Y=E(i);s=ce(Y,!1),Y.forEach(g),r=A(R),v&&v.l(R),R.forEach(g),o=A(B),B.forEach(g),this.h()},h(){s.a=null,m(i,"class","text-base"),m(l,"class",u="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")),m(l,"data-testid","toast"),m(t,"role",f=e[36].hideDismiss?"alert":"alertdialog"),m(t,"aria-live","polite"),this.first=t},m(V,B){D(V,t,B),z(t,l),z(l,i),s.m(a,i),z(l,r),v&&v.m(l,null),z(t,o),_=!0,h||(d=[j(t,"mouseenter",I),j(t,"mouseleave",N)],h=!0)},p(V,B){e=V,(!_||B[0]&2048)&&a!==(a=e[36].message+"")&&s.p(a),e[36].action||!e[36].hideDismiss?v?v.p(e,B):(v=Re(e),v.c(),v.m(l,null)):v&&(v.d(1),v=null),(!_||B[0]&6145&&u!==(u="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")))&&m(l,"class",u),(!_||B[0]&2048&&f!==(f=e[36].hideDismiss?"alert":"alertdialog"))&&m(t,"role",f)},r(){k=t.getBoundingClientRect()},f(){jt(t),p(),ot(t,k)},a(){p(),p=Rt(t,k,fl,{duration:e[4]?250:0})},i(V){_||(et(()=>{_&&(b&&b.end(1),c=tt(t,Me,{transition:e[5],params:{x:e[10].x,y:e[10].y,...e[6]},enabled:e[4]}),c.start())}),_=!0)},o(V){c&&c.invalidate(),b=lt(t,Me,{transition:e[7],params:{x:e[10].x,y:e[10].y,...e[8]},enabled:e[4]}),_=!1},d(V){V&&g(t),v&&v.d(),V&&b&&b.end(),h=!1,$e(d)}}}function bl(n){let e,t,l=n[9].length&&Ne(n);return{c(){l&&l.c(),e=W()},l(i){l&&l.l(i),e=W()},m(i,s){l&&l.m(i,s),D(i,e,s),t=!0},p(i,s){i[9].length?l?(l.p(i,s),s[0]&512&&C(l,1)):(l=Ne(i),l.c(),C(l,1),l.m(e.parentNode,e)):l&&(F(),S(l,1,1,()=>{l=null}),Z())},i(i){t||(C(l),t=!0)},o(i){S(l),t=!1},d(i){i&&g(e),l&&l.d(i)}}}const vl="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",kl="flex flex-col gap-y-2",yl="flex justify-between items-center pointer-events-auto",pl="flex items-center space-x-2";function Cl(n,e,t){let l,i,s,a,r,u;ae(n,vt,y=>t(34,u=y));const o=Bt();ae(n,o,y=>t(9,r=y));let{position:f="b"}=e,{max:c=3}=e,{background:b="variant-filled-secondary"}=e,{width:k="max-w-[640px]"}=e,{color:p=""}=e,{padding:_="p-4"}=e,{spacing:h="space-x-4"}=e,{rounded:d="rounded-container-token"}=e,{shadow:v="shadow-lg"}=e,{zIndex:I="z-[888]"}=e,{buttonAction:N="btn variant-filled"}=e,{buttonDismiss:V="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:B="✕"}=e,{transitions:R=!u}=e,{transitionIn:Y=ke}=e,{transitionInParams:ie={duration:250}}=e,{transitionOut:w=ke}=e,{transitionOutParams:M={duration:250}}=e,G,J,$={x:0,y:0};switch(f){case"t":G="justify-center items-start",J="items-center",$={x:0,y:-100};break;case"b":G="justify-center items-end",J="items-center",$={x:0,y:100};break;case"l":G="justify-start items-center",J="items-start",$={x:-100,y:0};break;case"r":G="justify-end items-center",J="items-end",$={x:100,y:0};break;case"tl":G="justify-start items-start",J="items-start",$={x:-100,y:0};break;case"tr":G="justify-end items-start",J="items-end",$={x:100,y:0};break;case"bl":G="justify-start items-end",J="items-start",$={x:-100,y:0};break;case"br":G="justify-end items-end",J="items-end",$={x:100,y:0};break}function De(y){var le,Le;(Le=(le=r[y])==null?void 0:le.action)==null||Le.response(),o.close(r[y].id)}function Se(y){var le;(le=r[y])!=null&&le.hoverable&&(o.freeze(y),t(13,i+=" scale-[105%]"))}function we(y){var le;(le=r[y])!=null&&le.hoverable&&(o.unfreeze(y),t(13,i=i.replace(" scale-[105%]","")))}const ft=y=>De(y),ut=y=>o.close(y.id),ct=y=>Se(y),dt=y=>we(y);return n.$$set=y=>{t(35,e=K(K({},e),X(y))),"position"in y&&t(19,f=y.position),"max"in y&&t(20,c=y.max),"background"in y&&t(0,b=y.background),"width"in y&&t(21,k=y.width),"color"in y&&t(22,p=y.color),"padding"in y&&t(23,_=y.padding),"spacing"in y&&t(24,h=y.spacing),"rounded"in y&&t(25,d=y.rounded),"shadow"in y&&t(26,v=y.shadow),"zIndex"in y&&t(27,I=y.zIndex),"buttonAction"in y&&t(1,N=y.buttonAction),"buttonDismiss"in y&&t(2,V=y.buttonDismiss),"buttonDismissLabel"in y&&t(3,B=y.buttonDismissLabel),"transitions"in y&&t(4,R=y.transitions),"transitionIn"in y&&t(5,Y=y.transitionIn),"transitionInParams"in y&&t(6,ie=y.transitionInParams),"transitionOut"in y&&t(7,w=y.transitionOut),"transitionOutParams"in y&&t(8,M=y.transitionOutParams)},n.$$.update=()=>{t(14,l=`${vl} ${G} ${I} ${e.class||""}`),n.$$.dirty[0]&545259520&&t(13,i=`${kl} ${J} ${_}`),n.$$.dirty[0]&132120576&&t(12,s=`${yl} ${k} ${p} ${_} ${h} ${d} ${v}`),n.$$.dirty[0]&1049088&&t(11,a=Array.from(r).slice(0,c))},e=X(e),[b,N,V,B,R,Y,ie,w,M,r,$,a,s,i,l,o,De,Se,we,f,c,k,p,_,h,d,v,I,G,J,ft,ut,ct,dt]}class Dl extends ee{constructor(e){super(),te(this,e,Cl,bl,x,{position:19,max:20,background:0,width:21,color:22,padding:23,spacing:24,rounded:25,shadow:26,zIndex:27,buttonAction:1,buttonDismiss:2,buttonDismissLabel:3,transitions:4,transitionIn:5,transitionInParams:6,transitionOut:7,transitionOutParams:8},null,[-1,-1])}}function Sl(n){let e,t,l='<path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h116a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m68 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m143.49-52.55a12 12 0 0 1-14.94 8L212 128.13V192a36 36 0 1 1-24-33.94V112a12 12 0 0 1 15.45-11.49l40 12a12 12 0 0 1 8.04 14.94M188 192a12 12 0 1 0-12 12a12 12 0 0 0 12-12"/>',i=[{viewBox:"0 0 256 256"},{width:"1.2em"},{height:"1.2em"},n[0]],s={};for(let a=0;a<i.length;a+=1)s=K(s,i[a]);return{c(){e=ge("svg"),t=new ue(!0),this.h()},l(a){e=_e(a,"svg",{viewBox:!0,width:!0,height:!0});var r=E(e);t=ce(r,!0),r.forEach(g),this.h()},h(){t.a=null,be(e,s)},m(a,r){D(a,e,r),t.m(l,e)},p(a,[r]){be(e,s=st(i,[{viewBox:"0 0 256 256"},{width:"1.2em"},{height:"1.2em"},r&1&&a[0]]))},i:H,o:H,d(a){a&&g(e)}}}function wl(n,e,t){return n.$$set=l=>{t(0,e=K(K({},e),X(l)))},e=X(e),[e]}class qe extends ee{constructor(e){super(),te(this,e,wl,Sl,x,{})}}function Ll(n){let e,t,l='<path fill="currentColor" d="M236 56a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0V68h-12a12 12 0 0 1 0-24h12V32a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12m-16 68v48a40 40 0 1 1-24-36.65V124a12 12 0 0 1 24 0m-24 48a16 16 0 1 0-16 16a16 16 0 0 0 16-16M92 121.37V204a40 40 0 1 1-24-36.65V64a12 12 0 0 1 9.09-11.64l52-13a12 12 0 0 1 5.82 23.28L92 73.37v23.26l53.09-13.27a12 12 0 0 1 5.82 23.28ZM68 204a16 16 0 1 0-16 16a16 16 0 0 0 16-16"/>',i=[{viewBox:"0 0 256 256"},{width:"1.2em"},{height:"1.2em"},n[0]],s={};for(let a=0;a<i.length;a+=1)s=K(s,i[a]);return{c(){e=ge("svg"),t=new ue(!0),this.h()},l(a){e=_e(a,"svg",{viewBox:!0,width:!0,height:!0});var r=E(e);t=ce(r,!0),r.forEach(g),this.h()},h(){t.a=null,be(e,s)},m(a,r){D(a,e,r),t.m(l,e)},p(a,[r]){be(e,s=st(i,[{viewBox:"0 0 256 256"},{width:"1.2em"},{height:"1.2em"},r&1&&a[0]]))},i:H,o:H,d(a){a&&g(e)}}}function Tl(n,e,t){return n.$$set=l=>{t(0,e=K(K({},e),X(l)))},e=X(e),[e]}class El extends ee{constructor(e){super(),te(this,e,Tl,Ll,x,{})}}function Fe(n){let e,t="",l,i,s='<div role="status" class="text-center "><svg aria-hidden="true" class="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-blue-500 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg> <span class="sr-only">Loading...</span></div>';return{c(){e=L("div"),e.innerHTML=t,l=P(),i=L("div"),i.innerHTML=s,this.h()},l(a){e=T(a,"DIV",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-170c4hg"&&(e.innerHTML=t),l=A(a),i=T(a,"DIV",{class:!0,"data-svelte-h":!0}),fe(i)!=="svelte-ng5iwf"&&(i.innerHTML=s),this.h()},h(){m(e,"class","fixed top-0 left-0 z-50 w-full h-full opacity-20 bg-white flex justify-center place-items-center "),m(i,"class","fixed top-0 left-0 w-full h-full flex justify-center place-items-center ")},m(a,r){D(a,e,r),D(a,l,r),D(a,i,r)},d(a){a&&(g(e),g(l),g(i))}}}function Ml(n){let e,t=n[0]&&Fe();return{c(){t&&t.c(),e=W()},l(l){t&&t.l(l),e=W()},m(l,i){t&&t.m(l,i),D(l,e,i)},p(l,[i]){l[0]?t||(t=Fe(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:H,o:H,d(l){l&&g(e),t&&t.d(l)}}}function Il(n,e,t){let l;return ae(n,At,i=>t(0,l=i)),[l]}class zl extends ee{constructor(e){super(),te(this,e,Il,Ml,x,{})}}function Pl(n){let e,t="You are not signed in";return{c(){e=L("span"),e.textContent=t,this.h()},l(l){e=T(l,"SPAN",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-zm114h"&&(e.textContent=t),this.h()},h(){m(e,"class","notSignedInText")},m(l,i){D(l,e,i)},p:H,d(l){l&&g(e)}}}function Al(n){var f;let e,t,l,i="Sign out: ",s,a=((f=n[0].data.currentUser)==null?void 0:f.name)+"",r,u,o;return{c(){e=L("a"),t=L("small"),l=L("span"),l.textContent=i,s=P(),r=ye(a),this.h()},l(c){e=T(c,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0,title:!0});var b=E(e);t=T(b,"SMALL",{class:!0});var k=E(t);l=T(k,"SPAN",{class:!0,"data-svelte-h":!0}),fe(l)!=="svelte-12abymz"&&(l.textContent=i),s=A(k),r=pe(k,a),k.forEach(g),b.forEach(g),this.h()},h(){m(l,"class","sr-only md:not-sr-only"),m(t,"class","flex"),m(e,"href",he+"/auth/signout"),m(e,"class",""),m(e,"data-sveltekit-preload-data","off"),m(e,"title","click here to sign out")},m(c,b){D(c,e,b),z(e,t),z(t,l),z(t,s),z(t,r),u||(o=j(e,"click",n[1]),u=!0)},p(c,b){var k;b&1&&a!==(a=((k=c[0].data.currentUser)==null?void 0:k.name)+"")&&Ce(r,a)},d(c){c&&g(e),u=!1,o()}}}function Vl(n){let e;function t(s,a){return s[0].data.currentUser?Al:Pl}let l=t(n),i=l(n);return{c(){e=L("span"),i.c(),this.h()},l(s){e=T(s,"SPAN",{class:!0});var a=E(e);i.l(a),a.forEach(g),this.h()},h(){m(e,"class","nojs-show flex space-x-12 justify-center place-items-center")},m(s,a){D(s,e,a),i.m(e,null)},p(s,[a]){l===(l=t(s))&&i?i.p(s,a):(i.d(1),i=l(s),i&&(i.c(),i.m(e,null)))},i:H,o:H,d(s){s&&g(e),i.d()}}}function Bl(n,e,t){let l;return ae(n,it,s=>t(0,l=s)),[l,()=>Pt()]}class Hl extends ee{constructor(e){super(),te(this,e,Bl,Vl,x,{})}}function Ze(n){let e,t,l,i;const s=n[3].default,a=se(s,n,n[2],null);return{c(){e=L("div"),a&&a.c()},l(r){e=T(r,"DIV",{});var u=E(e);a&&a.l(u),u.forEach(g)},m(r,u){D(r,e,u),a&&a.m(e,null),i=!0},p(r,u){n=r,a&&a.p&&(!i||u&4)&&ne(a,s,n,n[2],i?oe(s,n[2],u,null):re(n[2]),null)},i(r){i||(C(a,r),r&&et(()=>{i&&(l&&l.end(1),t=tt(e,ke,{x:-10,duration:n[1],easing:at,delay:n[1]}),t.start())}),i=!0)},o(r){S(a,r),t&&t.invalidate(),r&&(l=lt(e,ke,{x:10,duration:n[1],easing:Ht})),i=!1},d(r){r&&g(e),a&&a.d(r),r&&l&&l.end()}}}function Nl(n){let e=n[0],t,l,i=Ze(n);return{c(){i.c(),t=W()},l(s){i.l(s),t=W()},m(s,a){i.m(s,a),D(s,t,a),l=!0},p(s,[a]){a&1&&x(e,e=s[0])?(F(),S(i,1,1,H),Z(),i=Ze(s),i.c(),C(i,1),i.m(t.parentNode,t)):i.p(s,a)},i(s){l||(C(i),l=!0)},o(s){S(i),l=!1},d(s){s&&g(t),i.d(s)}}}function Rl(n,e,t){let{$$slots:l={},$$scope:i}=e,{pathname:s=""}=e,{duration:a=500}=e;return n.$$set=r=>{"pathname"in r&&t(0,s=r.pathname),"duration"in r&&t(1,a=r.duration),"$$scope"in r&&t(2,i=r.$$scope)},[s,a,i,l]}class jl extends ee{constructor(e){super(),te(this,e,Rl,Nl,x,{pathname:0,duration:1})}}function Ke(n,e,t){const l=n.slice();return l[6]=e[t],l}function We(n){let e,t='<img decoding="async" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149" alt="Fork me on GitHub" loading="lazy" data-recalc-dims="1"/>';return{c(){e=L("a"),e.innerHTML=t,this.h()},l(l){e=T(l,"A",{href:!0,class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-rrdjfi"&&(e.innerHTML=t),this.h()},h(){m(e,"href","https://github.com/vboulaye/deezer-artist-playlist-organizer"),m(e,"class","xtralargeonly absolute left-0 top-0")},m(l,i){D(l,e,i)},d(l){l&&g(e)}}}function Ye(n){let e,t,l,i=n[6].href&&Ge(n),s=n[6].onclick&&Je(n);return{c(){i&&i.c(),e=P(),s&&s.c(),t=W()},l(a){i&&i.l(a),e=A(a),s&&s.l(a),t=W()},m(a,r){i&&i.m(a,r),D(a,e,r),s&&s.m(a,r),D(a,t,r),l=!0},p(a,r){a[6].href?i?(i.p(a,r),r&4&&C(i,1)):(i=Ge(a),i.c(),C(i,1),i.m(e.parentNode,e)):i&&(F(),S(i,1,1,()=>{i=null}),Z()),a[6].onclick?s?(s.p(a,r),r&4&&C(s,1)):(s=Je(a),s.c(),C(s,1),s.m(t.parentNode,t)):s&&(F(),S(s,1,1,()=>{s=null}),Z())},i(a){l||(C(i),C(s),l=!0)},o(a){S(i),S(s),l=!1},d(a){a&&(g(e),g(t)),i&&i.d(a),s&&s.d(a)}}}function Ge(n){let e,t,l,i,s;return t=new nt({props:{$$slots:{default:[Ol]},$$scope:{ctx:n}}}),{c(){e=L("a"),O(t.$$.fragment),this.h()},l(a){e=T(a,"A",{href:!0,title:!0,"data-sveltekit-preload-data":!0});var r=E(e);Q(t.$$.fragment,r),r.forEach(g),this.h()},h(){m(e,"href",l=n[6].href),m(e,"title",i=n[6].title),m(e,"data-sveltekit-preload-data","off")},m(a,r){D(a,e,r),U(t,e,null),s=!0},p(a,r){const u={};r&36&&(u.$$scope={dirty:r,ctx:a}),t.$set(u),(!s||r&4&&l!==(l=a[6].href))&&m(e,"href",l),(!s||r&4&&i!==(i=a[6].title))&&m(e,"title",i)},i(a){s||(C(t.$$.fragment,a),s=!0)},o(a){S(t.$$.fragment,a),s=!1},d(a){a&&g(e),q(t)}}}function Ol(n){let e,t,l,i=n[6].title+"",s,a;var r=n[6].icon;function u(o,f){return{}}return r&&(e=ve(r,u())),{c(){e&&O(e.$$.fragment),t=P(),l=L("span"),s=ye(i),this.h()},l(o){e&&Q(e.$$.fragment,o),t=A(o),l=T(o,"SPAN",{class:!0});var f=E(l);s=pe(f,i),f.forEach(g),this.h()},h(){m(l,"class","sr-only md:not-sr-only")},m(o,f){e&&U(e,o,f),D(o,t,f),D(o,l,f),z(l,s),a=!0},p(o,f){if(f&4&&r!==(r=o[6].icon)){if(e){F();const c=e;S(c.$$.fragment,1,0,()=>{q(c,1)}),Z()}r?(e=ve(r,u()),O(e.$$.fragment),C(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}(!a||f&4)&&i!==(i=o[6].title+"")&&Ce(s,i)},i(o){a||(e&&C(e.$$.fragment,o),a=!0)},o(o){e&&S(e.$$.fragment,o),a=!1},d(o){o&&(g(t),g(l)),e&&q(e,o)}}}function Je(n){let e,t,l,i,s,a,r,u;return t=new nt({props:{$$slots:{default:[Ul]},$$scope:{ctx:n}}}),{c(){e=L("button"),O(t.$$.fragment),l=P(),this.h()},l(o){e=T(o,"BUTTON",{title:!0,class:!0});var f=E(e);Q(t.$$.fragment,f),l=A(f),f.forEach(g),this.h()},h(){m(e,"title",i=n[6].title),m(e,"class","disabled:italic disabled:opacity-50"),e.disabled=s=n[6].disabled&&n[6].disabled(n[1])},m(o,f){D(o,e,f),U(t,e,null),z(e,l),a=!0,r||(u=j(e,"click",Tt(function(){xe(n[6].onclick)&&n[6].onclick.apply(this,arguments)})),r=!0)},p(o,f){n=o;const c={};f&36&&(c.$$scope={dirty:f,ctx:n}),t.$set(c),(!a||f&4&&i!==(i=n[6].title))&&m(e,"title",i),(!a||f&6&&s!==(s=n[6].disabled&&n[6].disabled(n[1])))&&(e.disabled=s)},i(o){a||(C(t.$$.fragment,o),a=!0)},o(o){S(t.$$.fragment,o),a=!1},d(o){o&&g(e),q(t),r=!1,u()}}}function Ul(n){let e,t,l,i=n[6].title+"",s,a;var r=n[6].icon;function u(o,f){return{}}return r&&(e=ve(r,u())),{c(){e&&O(e.$$.fragment),t=P(),l=L("span"),s=ye(i),this.h()},l(o){e&&Q(e.$$.fragment,o),t=A(o),l=T(o,"SPAN",{class:!0});var f=E(l);s=pe(f,i),f.forEach(g),this.h()},h(){m(l,"class","sr-only md:not-sr-only")},m(o,f){e&&U(e,o,f),D(o,t,f),D(o,l,f),z(l,s),a=!0},p(o,f){if(f&4&&r!==(r=o[6].icon)){if(e){F();const c=e;S(c.$$.fragment,1,0,()=>{q(c,1)}),Z()}r?(e=ve(r,u()),O(e.$$.fragment),C(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}(!a||f&4)&&i!==(i=o[6].title+"")&&Ce(s,i)},i(o){a||(e&&C(e.$$.fragment,o),a=!0)},o(o){e&&S(e.$$.fragment,o),a=!1},d(o){o&&(g(t),g(l)),e&&q(e,o)}}}function Qe(n){let e=!n[6].visible||n[6].visible(n[1]),t,l,i=e&&Ye(n);return{c(){i&&i.c(),t=W()},l(s){i&&i.l(s),t=W()},m(s,a){i&&i.m(s,a),D(s,t,a),l=!0},p(s,a){a&6&&(e=!s[6].visible||s[6].visible(s[1])),e?i?(i.p(s,a),a&6&&C(i,1)):(i=Ye(s),i.c(),C(i,1),i.m(t.parentNode,t)):i&&(F(),S(i,1,1,()=>{i=null}),Z())},i(s){l||(C(i),l=!0)},o(s){S(i),l=!1},d(s){s&&g(t),i&&i.d(s)}}}function ql(n){let e,t,l=me(n[2]),i=[];for(let a=0;a<l.length;a+=1)i[a]=Qe(Ke(n,l,a));const s=a=>S(i[a],1,1,()=>{i[a]=null});return{c(){e=L("span");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=T(a,"SPAN",{class:!0});var r=E(e);for(let u=0;u<i.length;u+=1)i[u].l(r);r.forEach(g),this.h()},h(){m(e,"class","flex gap-x-2")},m(a,r){D(a,e,r);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(e,null);t=!0},p(a,r){if(r&6){l=me(a[2]);let u;for(u=0;u<l.length;u+=1){const o=Ke(a,l,u);i[u]?(i[u].p(o,r),C(i[u],1)):(i[u]=Qe(o),i[u].c(),C(i[u],1),i[u].m(e,null))}for(F(),u=l.length;u<i.length;u+=1)s(u);Z()}},i(a){if(!t){for(let r=0;r<l.length;r+=1)C(i[r]);t=!0}},o(a){i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)S(i[r]);t=!1},d(a){a&&g(e),Lt(i,a)}}}function Fl(n){let e,t,l,i;return e=new Hl({}),l=new _l({}),{c(){O(e.$$.fragment),t=P(),O(l.$$.fragment)},l(s){Q(e.$$.fragment,s),t=A(s),Q(l.$$.fragment,s)},m(s,a){U(e,s,a),D(s,t,a),U(l,s,a),i=!0},i(s){i||(C(e.$$.fragment,s),C(l.$$.fragment,s),i=!0)},o(s){S(e.$$.fragment,s),S(l.$$.fragment,s),i=!1},d(s){s&&g(t),q(e,s),q(l,s)}}}function Zl(n){let e;const t=n[4].default,l=se(t,n,n[5],null);return{c(){l&&l.c()},l(i){l&&l.l(i)},m(i,s){l&&l.m(i,s),e=!0},p(i,s){l&&l.p&&(!e||s&32)&&ne(l,t,i,i[5],e?oe(t,i[5],s,null):re(i[5]),null)},i(i){e||(C(l,i),e=!0)},o(i){S(l,i),e=!1},d(i){l&&l.d(i)}}}function Kl(n){let e,t,l,i,s,a,r,u,o,f,c,b,k,p,_;e=new zl({}),l=new Dl({});let h=!n[1].data.currentUser&&We();return f=new ol({props:{$$slots:{trail:[Fl],lead:[ql]},$$scope:{ctx:n}}}),b=new jl({props:{pathname:n[0].pathname,$$slots:{default:[Zl]},$$scope:{ctx:n}}}),{c(){O(e.$$.fragment),t=P(),O(l.$$.fragment),i=P(),h&&h.c(),s=P(),a=L("div"),r=L("span"),u=P(),o=L("span"),O(f.$$.fragment),c=P(),O(b.$$.fragment),k=P(),p=L("span"),this.h()},l(d){Q(e.$$.fragment,d),t=A(d),Q(l.$$.fragment,d),i=A(d),h&&h.l(d),s=A(d),a=T(d,"DIV",{class:!0});var v=E(a);r=T(v,"SPAN",{}),E(r).forEach(g),u=A(v),o=T(v,"SPAN",{class:!0});var I=E(o);Q(f.$$.fragment,I),c=A(I),Q(b.$$.fragment,I),I.forEach(g),k=A(v),p=T(v,"SPAN",{}),E(p).forEach(g),v.forEach(g),this.h()},h(){m(o,"class",""),m(a,"class","grid grid-cols-[1fr_minmax(400px,1200px)_1fr]")},m(d,v){U(e,d,v),D(d,t,v),U(l,d,v),D(d,i,v),h&&h.m(d,v),D(d,s,v),D(d,a,v),z(a,r),z(a,u),z(a,o),U(f,o,null),z(o,c),U(b,o,null),z(a,k),z(a,p),_=!0},p(d,[v]){d[1].data.currentUser?h&&(h.d(1),h=null):h||(h=We(),h.c(),h.m(s.parentNode,s));const I={};v&38&&(I.$$scope={dirty:v,ctx:d}),f.$set(I);const N={};v&1&&(N.pathname=d[0].pathname),v&32&&(N.$$scope={dirty:v,ctx:d}),b.$set(N)},i(d){_||(C(e.$$.fragment,d),C(l.$$.fragment,d),C(f.$$.fragment,d),C(b.$$.fragment,d),_=!0)},o(d){S(e.$$.fragment,d),S(l.$$.fragment,d),S(f.$$.fragment,d),S(b.$$.fragment,d),_=!1},d(d){d&&(g(t),g(i),g(s),g(a)),q(e,d),q(l,d),h&&h.d(d),q(f),q(b)}}}function Wl(n,e,t){let l,i;ae(n,it,o=>t(1,l=o));let{$$slots:s={},$$scope:a}=e;Qt();const r=Nt([{href:he+"/",title:"Home",icon:qe,visible:o=>!o.data.currentUser},{href:he+"/playlists",title:"My playlists",icon:qe,visible:o=>o.data.currentUser},{href:he+"/playlists/edit?id=NEW",title:"Create new playlist",icon:El,visible:o=>o.data.currentUser}]);ae(n,r,o=>t(2,i=o));let{data:u}=e;return n.$$set=o=>{"data"in o&&t(0,u=o.data),"$$scope"in o&&t(5,a=o.$$scope)},[u,l,i,r,s,a]}class li extends ee{constructor(e){super(),te(this,e,Wl,Kl,x,{data:0})}}export{li as component,ti as universal};
