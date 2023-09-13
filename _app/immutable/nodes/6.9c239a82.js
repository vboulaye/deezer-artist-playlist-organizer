import{c as ae,t as ve,e as le}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.8ba30efa.js";import{e as ye,a as se,g as Te,P as Pe,b as ke,h as re}from"../chunks/PlaylistApplicationShell.35d998d4.js";import{s as Ee,p as De,f as h,a as L,l as K,g as _,h as y,R as ie,c as R,d as u,m as Y,j as o,i as Q,x as r,S as ne,K as oe,T as we,n as W,U as Se,L as Ie,V as ce}from"../chunks/scheduler.efcc48c0.js";import{S as Le,i as Re,b as he,d as _e,m as pe,a as ge,t as me,e as be,o as $e}from"../chunks/index.14b20280.js";import"../chunks/paths.d53735cf.js";const ze=!1;async function Ne({url:s}){const e=ye(s),l=s.searchParams.get("search");return l?{playlists:ae({apiPath:"/search/playlist",searchParams:{q:l,limit:1e3,index:e||0}}).then(t=>se(t,e||0))}:e?{playlists:ae({apiPath:"/user/me/playlists",searchParams:{limit:1e3,index:e}}).then(t=>se(t,e))}:{playlists:ve("getRemainingPages:",async()=>await Te({apiPath:"/user/me/playlists",limit:500,index:0}))}}const Je=Object.freeze(Object.defineProperty({__proto__:null,load:Ne,ssr:ze},Symbol.toStringTag,{value:"Module"}));function ue(s,e,l){const t=s.slice();return t[9]=e[l],t}function de(s){let e,l,t,i,n,$,m,T,d,z=s[9].title+"",I,w,J,O,C,k=s[9].creation_date+"",U,V,E,S,A,G,P,H=s[9].nb_tracks+"",j,B,q,F=re(s[9].duration*1e3,{units:["h","m","s"],largest:2})+"",N,p;return{c(){e=h("tr"),l=h("td"),t=h("a"),i=h("div"),n=h("img"),T=L(),d=h("strong"),I=K(z),O=L(),C=h("td"),U=K(k),V=L(),E=h("td"),S=h("input"),G=L(),P=h("td"),j=K(H),B=L(),q=h("td"),N=K(F),p=L(),this.h()},l(v){e=_(v,"TR",{});var c=y(e);l=_(c,"TD",{});var b=y(l);t=_(b,"A",{href:!0,"data-sveltekit-preload-data":!0});var a=y(t);i=_(a,"DIV",{class:!0});var f=y(i);n=_(f,"IMG",{src:!0,alt:!0,"aria-describedby":!0,class:!0}),T=R(f),d=_(f,"STRONG",{id:!0,class:!0});var D=y(d);I=Y(D,z),D.forEach(u),f.forEach(u),a.forEach(u),b.forEach(u),O=R(c),C=_(c,"TD",{class:!0});var g=y(C);U=Y(g,k),g.forEach(u),V=R(c),E=_(c,"TD",{class:!0});var M=y(E);S=_(M,"INPUT",{class:!0,type:!0}),M.forEach(u),G=R(c),P=_(c,"TD",{});var X=y(P);j=Y(X,H),X.forEach(u),B=R(c),q=_(c,"TD",{});var Z=y(q);N=Y(Z,F),Z.forEach(u),p=R(c),c.forEach(u),this.h()},h(){ce(n.src,$=s[9].picture_small)||o(n,"src",$),o(n,"alt","playlist cover"),o(n,"aria-describedby",m=s[9].id+"_title"),o(n,"class","deezer_img_small"),o(d,"id",w=s[9].id+"_title"),o(d,"class","m-2"),o(i,"class","flex items-center"),o(t,"href",J="playlists/"+s[9].id),o(t,"data-sveltekit-preload-data","off"),o(C,"class","items-center largeonly"),o(S,"class","checkbox"),o(S,"type","checkbox"),S.checked=A=s[9].public,S.disabled=!0,o(E,"class","largeonly")},m(v,c){Q(v,e,c),r(e,l),r(l,t),r(t,i),r(i,n),r(i,T),r(i,d),r(d,I),r(e,O),r(e,C),r(C,U),r(e,V),r(e,E),r(E,S),r(e,G),r(e,P),r(P,j),r(e,B),r(e,q),r(q,N),r(e,p)},p(v,c){c&16&&!ce(n.src,$=v[9].picture_small)&&o(n,"src",$),c&16&&m!==(m=v[9].id+"_title")&&o(n,"aria-describedby",m),c&16&&z!==(z=v[9].title+"")&&W(I,z),c&16&&w!==(w=v[9].id+"_title")&&o(d,"id",w),c&16&&J!==(J="playlists/"+v[9].id)&&o(t,"href",J),c&16&&k!==(k=v[9].creation_date+"")&&W(U,k),c&16&&A!==(A=v[9].public)&&(S.checked=A),c&16&&H!==(H=v[9].nb_tracks+"")&&W(j,H),c&16&&F!==(F=re(v[9].duration*1e3,{units:["h","m","s"],largest:2})+"")&&W(N,F)},d(v){v&&u(e)}}}function fe(s){let e=JSON.stringify({pageData:s[0].playlists},null,2)+"",l;return{c(){l=K(e)},l(t){l=Y(t,e)},m(t,i){Q(t,l,i)},p(t,i){i&1&&e!==(e=JSON.stringify({pageData:t[0].playlists},null,2)+"")&&W(l,e)},d(t){t&&u(l)}}}function Oe(s){let e,l,t,i,n,$="",m,T,d,z,I,w='<th class="w-1/3">Title</th> <th class="largeonly">Created on</th> <th class="largeonly">Public?</th> <th># Tracks</th> <th>duration</th>',J,O,C,k,U,V,E,S=s[3]?"hide debug":"show debug",A,G,P,H,j,B,q,F,N=le(s[4]),p=[];for(let a=0;a<N.length;a+=1)p[a]=de(ue(s,N,a));function v(a){s[7](a)}let c={showFirstLastButtons:!0,showPreviousNextButtons:!0};s[1]!==void 0&&(c.settings=s[1]),k=new ke({props:c}),De.push(()=>$e(k,"settings",v));let b=s[3]&&fe(s);return{c(){e=h("div"),l=h("table"),t=h("thead"),i=h("tr"),n=h("td"),n.innerHTML=$,m=L(),T=h("td"),d=h("input"),z=L(),I=h("tr"),I.innerHTML=w,J=L(),O=h("tbody");for(let a=0;a<p.length;a+=1)p[a].c();C=L(),he(k.$$.fragment),V=L(),E=h("a"),A=K(S),G=L(),P=h("pre"),H=K("        "),b&&b.c(),j=K(`
    `),this.h()},l(a){e=_(a,"DIV",{class:!0});var f=y(e);l=_(f,"TABLE",{class:!0});var D=y(l);t=_(D,"THEAD",{});var g=y(t);i=_(g,"TR",{});var M=y(i);n=_(M,"TD",{colspan:!0,"data-svelte-h":!0}),ie(n)!=="svelte-rxboy"&&(n.innerHTML=$),m=R(M),T=_(M,"TD",{colspan:!0});var X=y(T);d=_(X,"INPUT",{class:!0,title:!0,type:!0,placeholder:!0}),X.forEach(u),M.forEach(u),z=R(g),I=_(g,"TR",{"data-svelte-h":!0}),ie(I)!=="svelte-j64d9z"&&(I.innerHTML=w),g.forEach(u),J=R(D),O=_(D,"TBODY",{});var Z=y(O);for(let ee=0;ee<p.length;ee+=1)p[ee].l(Z);Z.forEach(u),D.forEach(u),C=R(f),_e(k.$$.fragment,f),f.forEach(u),V=R(a),E=_(a,"A",{href:!0});var te=y(E);A=Y(te,S),te.forEach(u),G=R(a),P=_(a,"PRE",{id:!0});var x=y(P);H=Y(x,"        "),b&&b.l(x),j=Y(x,`
    `),x.forEach(u),this.h()},h(){o(n,"colspan","1"),o(d,"class","input"),o(d,"title","Input (search)"),o(d,"type","search"),o(d,"placeholder","Search..."),o(T,"colspan","5"),o(l,"class","table table-hover"),o(e,"class","table-container"),o(E,"href","#showDebug"),o(P,"id","showDebug")},m(a,f){Q(a,e,f),r(e,l),r(l,t),r(t,i),r(i,n),r(i,m),r(i,T),r(T,d),ne(d,s[2]),r(t,z),r(t,I),r(l,J),r(l,O);for(let D=0;D<p.length;D+=1)p[D]&&p[D].m(O,null);r(e,C),pe(k,e,null),Q(a,V,f),Q(a,E,f),r(E,A),Q(a,G,f),Q(a,P,f),r(P,H),b&&b.m(P,null),r(P,j),B=!0,q||(F=[oe(d,"input",s[6]),oe(E,"click",s[8])],q=!0)},p(a,f){if(f&4&&d.value!==a[2]&&ne(d,a[2]),f&16){N=le(a[4]);let g;for(g=0;g<N.length;g+=1){const M=ue(a,N,g);p[g]?p[g].p(M,f):(p[g]=de(M),p[g].c(),p[g].m(O,null))}for(;g<p.length;g+=1)p[g].d(1);p.length=N.length}const D={};!U&&f&2&&(U=!0,D.settings=a[1],we(()=>U=!1)),k.$set(D),(!B||f&8)&&S!==(S=a[3]?"hide debug":"show debug")&&W(A,S),a[3]?b?b.p(a,f):(b=fe(a),b.c(),b.m(P,j)):b&&(b.d(1),b=null)},i(a){B||(ge(k.$$.fragment,a),B=!0)},o(a){me(k.$$.fragment,a),B=!1},d(a){a&&(u(e),u(V),u(E),u(G),u(P)),Se(p,a),be(k),b&&b.d(),q=!1,Ie(F)}}}function Ce(s){let e,l;return e=new Pe({props:{$$slots:{default:[Oe]},$$scope:{ctx:s}}}),{c(){he(e.$$.fragment)},l(t){_e(e.$$.fragment,t)},m(t,i){pe(e,t,i),l=!0},p(t,[i]){const n={};i&4127&&(n.$$scope={dirty:i,ctx:t}),e.$set(n)},i(t){l||(ge(e.$$.fragment,t),l=!0)},o(t){me(e.$$.fragment,t),l=!1},d(t){be(e,t)}}}function Me(s,e,l){let t,i,{data:n}=e,$=!1,m={page:0,limit:5,size:10,amounts:[5,10,20,50,100]},T="";function d(){T=this.value,l(2,T)}function z(w){m=w,l(1,m),l(5,t),l(0,n)}const I=()=>l(3,$=!$);return s.$$set=w=>{"data"in w&&l(0,n=w.data)},s.$$.update=()=>{s.$$.dirty&1&&l(5,t=n.playlists.data),s.$$.dirty&32&&l(1,m.size=t.length,m),s.$$.dirty&38&&l(4,i=t.filter(w=>!T||JSON.stringify(w).toLowerCase().includes(T.toLowerCase())).slice(m.page*m.limit,m.page*m.limit+m.limit))},[n,m,T,$,i,t,d,z,I]}class Ue extends Le{constructor(e){super(),Re(this,e,Me,Ce,Ee,{data:0})}}export{Ue as component,Je as universal};