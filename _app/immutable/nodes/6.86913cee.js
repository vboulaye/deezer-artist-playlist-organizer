import{c as de,t as Ee}from"../chunks/DeezerCall.a701a8cf.js";import{e as ye,a as ce,g as Te,P as ke,h as ue}from"../chunks/PlaylistApplicationShell.09fbe847.js";import{s as De,f as u,a as A,l as k,g as h,h as _,O as Pe,c as z,d as o,m as D,j as d,i as Q,z as a,I as $e,n as Y,P as Ie,Q as he}from"../chunks/scheduler.dc0f26dd.js";import{S as Oe,i as we,b as Re,d as Se,m as Ae,a as ze,t as qe,e as Le}from"../chunks/index.b6753c13.js";import{e as _e}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.56fb06c2.js";const Me=!1;async function Ne({url:r}){const e=ye(r),l=r.searchParams.get("search");return l?{playlists:de({apiPath:"/search/playlist",searchParams:{q:l,limit:1e3,index:e||0}}).then(t=>ce(t,e||0))}:e?{playlists:de({apiPath:"/user/me/playlists",searchParams:{limit:1e3,index:e}}).then(t=>ce(t,e))}:{playlists:Ee("getRemainingPages:",async()=>await Te({apiPath:"/user/me/playlists",limit:500,index:0}))}}const Ve=Object.freeze(Object.defineProperty({__proto__:null,load:Ne,ssr:Me},Symbol.toStringTag,{value:"Module"}));function pe(r,e,l){const t=r.slice();return t[4]=e[l],t[6]=l,t}function me(r){let e,l,t,s,n,I,O,N,y,w=r[4].title+"",K,T,W,H,q,U=r[4].creation_date+"",j,X,B,P,F,x,G,R=r[4].nb_tracks+"",J,S,L,C=ue(r[4].duration*1e3,{units:["h","m","s"],largest:2})+"",V,$;return{c(){e=u("tr"),l=u("td"),t=u("a"),s=u("div"),n=u("img"),N=A(),y=u("strong"),K=k(w),H=A(),q=u("td"),j=k(U),X=A(),B=u("td"),P=u("input"),x=A(),G=u("td"),J=k(R),S=A(),L=u("td"),V=k(C),$=A(),this.h()},l(m){e=h(m,"TR",{});var f=_(e);l=h(f,"TD",{});var ee=_(l);t=h(ee,"A",{href:!0,"data-sveltekit-preload-data":!0});var le=_(t);s=h(le,"DIV",{class:!0});var M=_(s);n=h(M,"IMG",{src:!0,alt:!0,"aria-describedby":!0,class:!0}),N=z(M),y=h(M,"STRONG",{id:!0,class:!0});var p=_(y);K=D(p,w),p.forEach(o),M.forEach(o),le.forEach(o),ee.forEach(o),H=z(f),q=h(f,"TD",{class:!0});var v=_(q);j=D(v,U),v.forEach(o),X=z(f),B=h(f,"TD",{});var g=_(B);P=h(g,"INPUT",{class:!0,type:!0}),g.forEach(o),x=z(f),G=h(f,"TD",{});var b=_(G);J=D(b,R),b.forEach(o),S=z(f),L=h(f,"TD",{});var i=_(L);V=D(i,C),i.forEach(o),$=z(f),f.forEach(o),this.h()},h(){he(n.src,I=r[4].picture_small)||d(n,"src",I),d(n,"alt","playlist cover"),d(n,"aria-describedby",O=r[4].id+"_title"),d(n,"class","deezer_img_small"),d(y,"id",T=r[4].id+"_title"),d(y,"class","m-2"),d(s,"class","flex items-center"),d(t,"href",W="playlists/"+r[4].id),d(t,"data-sveltekit-preload-data","off"),d(q,"class","items-center"),d(P,"class","checkbox"),d(P,"type","checkbox"),P.checked=F=r[4].public,P.disabled=!0},m(m,f){Q(m,e,f),a(e,l),a(l,t),a(t,s),a(s,n),a(s,N),a(s,y),a(y,K),a(e,H),a(e,q),a(q,j),a(e,X),a(e,B),a(B,P),a(e,x),a(e,G),a(G,J),a(e,S),a(e,L),a(L,V),a(e,$)},p(m,f){f&1&&!he(n.src,I=m[4].picture_small)&&d(n,"src",I),f&1&&O!==(O=m[4].id+"_title")&&d(n,"aria-describedby",O),f&1&&w!==(w=m[4].title+"")&&Y(K,w),f&1&&T!==(T=m[4].id+"_title")&&d(y,"id",T),f&1&&W!==(W="playlists/"+m[4].id)&&d(t,"href",W),f&1&&U!==(U=m[4].creation_date+"")&&Y(j,U),f&1&&F!==(F=m[4].public)&&(P.checked=F),f&1&&R!==(R=m[4].nb_tracks+"")&&Y(J,R),f&1&&C!==(C=ue(m[4].duration*1e3,{units:["h","m","s"],largest:2})+"")&&Y(V,C)},d(m){m&&o(e)}}}function ve(r){let e,l,t;return{c(){e=u("a"),l=k("previous"),this.h()},l(s){e=h(s,"A",{href:!0});var n=_(e);l=D(n,"previous"),n.forEach(o),this.h()},h(){d(e,"href",t=r[2](r[0].playlists.prev))},m(s,n){Q(s,e,n),a(e,l)},p(s,n){n&1&&t!==(t=s[2](s[0].playlists.prev))&&d(e,"href",t)},d(s){s&&o(e)}}}function ge(r){let e,l,t;return{c(){e=u("a"),l=k("next"),this.h()},l(s){e=h(s,"A",{href:!0});var n=_(e);l=D(n,"next"),n.forEach(o),this.h()},h(){d(e,"href",t=r[2](r[0].playlists.next))},m(s,n){Q(s,e,n),a(e,l)},p(s,n){n&1&&t!==(t=s[2](s[0].playlists.next))&&d(e,"href",t)},d(s){s&&o(e)}}}function be(r){let e=JSON.stringify({pageData:r[0].playlists},null,2)+"",l;return{c(){l=k(e)},l(t){l=D(t,e)},m(t,s){Q(t,l,s)},p(t,s){s&1&&e!==(e=JSON.stringify({pageData:t[0].playlists},null,2)+"")&&Y(l,e)},d(t){t&&o(l)}}}function je(r){let e,l,t,s='<tr><th class="w-1/3">Title</th> <th>Created on</th> <th>Public?</th> <th># Tracks</th> <th>duration</th></tr>',n,I,O,N,y,w,K,T,W,H=r[0].playlists.startIndex+"",q,U,j=r[0].playlists.endIndex+"",X,B,P=r[0].playlists.total+"",F,x,G,R,J,S,L=r[1]?"hide debug":"show debug",C,V,$,m,f,ee,le,M=_e(r[0].playlists.data),p=[];for(let i=0;i<M.length;i+=1)p[i]=me(pe(r,M,i));let v=r[0].playlists.prev&&ve(r),g=r[0].playlists.next&&ge(r),b=r[1]&&be(r);return{c(){e=u("div"),l=u("table"),t=u("thead"),t.innerHTML=s,n=A(),I=u("tbody");for(let i=0;i<p.length;i+=1)p[i].c();O=A(),N=u("tfoot"),y=u("tr"),w=u("td"),v&&v.c(),K=A(),T=u("td"),W=k("playlists "),q=k(H),U=k(" - "),X=k(j),B=k(" (total:"),F=k(P),x=k(")"),G=A(),R=u("td"),g&&g.c(),J=A(),S=u("a"),C=k(L),V=A(),$=u("pre"),m=k("        "),b&&b.c(),f=k(`
    `),this.h()},l(i){e=h(i,"DIV",{class:!0});var E=_(e);l=h(E,"TABLE",{class:!0});var c=_(l);t=h(c,"THEAD",{"data-svelte-h":!0}),Pe(t)!=="svelte-6qymf2"&&(t.innerHTML=s),n=z(c),I=h(c,"TBODY",{});var ae=_(I);for(let ie=0;ie<p.length;ie+=1)p[ie].l(ae);ae.forEach(o),O=z(c),N=h(c,"TFOOT",{});var re=_(N);y=h(re,"TR",{});var te=_(y);w=h(te,"TD",{});var ne=_(w);v&&v.l(ne),ne.forEach(o),K=z(te),T=h(te,"TD",{colspan:!0});var Z=_(T);W=D(Z,"playlists "),q=D(Z,H),U=D(Z," - "),X=D(Z,j),B=D(Z," (total:"),F=D(Z,P),x=D(Z,")"),Z.forEach(o),G=z(te),R=h(te,"TD",{});var oe=_(R);g&&g.l(oe),oe.forEach(o),te.forEach(o),re.forEach(o),c.forEach(o),E.forEach(o),J=z(i),S=h(i,"A",{href:!0});var fe=_(S);C=D(fe,L),fe.forEach(o),V=z(i),$=h(i,"PRE",{id:!0});var se=_($);m=D(se,"        "),b&&b.l(se),f=D(se,`
    `),se.forEach(o),this.h()},h(){d(T,"colspan","3"),d(l,"class","table table-hover"),d(e,"class","table-container"),d(S,"href","#showDebug"),d($,"id","showDebug")},m(i,E){Q(i,e,E),a(e,l),a(l,t),a(l,n),a(l,I);for(let c=0;c<p.length;c+=1)p[c]&&p[c].m(I,null);a(l,O),a(l,N),a(N,y),a(y,w),v&&v.m(w,null),a(y,K),a(y,T),a(T,W),a(T,q),a(T,U),a(T,X),a(T,B),a(T,F),a(T,x),a(y,G),a(y,R),g&&g.m(R,null),Q(i,J,E),Q(i,S,E),a(S,C),Q(i,V,E),Q(i,$,E),a($,m),b&&b.m($,null),a($,f),ee||(le=$e(S,"click",r[3]),ee=!0)},p(i,E){if(E&1){M=_e(i[0].playlists.data);let c;for(c=0;c<M.length;c+=1){const ae=pe(i,M,c);p[c]?p[c].p(ae,E):(p[c]=me(ae),p[c].c(),p[c].m(I,null))}for(;c<p.length;c+=1)p[c].d(1);p.length=M.length}i[0].playlists.prev?v?v.p(i,E):(v=ve(i),v.c(),v.m(w,null)):v&&(v.d(1),v=null),E&1&&H!==(H=i[0].playlists.startIndex+"")&&Y(q,H),E&1&&j!==(j=i[0].playlists.endIndex+"")&&Y(X,j),E&1&&P!==(P=i[0].playlists.total+"")&&Y(F,P),i[0].playlists.next?g?g.p(i,E):(g=ge(i),g.c(),g.m(R,null)):g&&(g.d(1),g=null),E&2&&L!==(L=i[1]?"hide debug":"show debug")&&Y(C,L),i[1]?b?b.p(i,E):(b=be(i),b.c(),b.m($,f)):b&&(b.d(1),b=null)},d(i){i&&(o(e),o(J),o(S),o(V),o($)),Ie(p,i),v&&v.d(),g&&g.d(),b&&b.d(),ee=!1,le()}}}function Ce(r){let e,l;return e=new ke({props:{$$slots:{default:[je]},$$scope:{ctx:r}}}),{c(){Re(e.$$.fragment)},l(t){Se(e.$$.fragment,t)},m(t,s){Ae(e,t,s),l=!0},p(t,[s]){const n={};s&131&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(ze(e.$$.fragment,t),l=!0)},o(t){qe(e.$$.fragment,t),l=!1},d(t){Le(e,t)}}}function He(r,e,l){let{data:t}=e,s=!1;function n(O){return`?index=${ye(new URL(O))||0}`}const I=()=>l(1,s=!s);return r.$$set=O=>{"data"in O&&l(0,t=O.data)},[t,s,n,I]}class Qe extends Oe{constructor(e){super(),we(this,e,He,Ce,De,{data:0})}}export{Qe as component,Ve as universal};
