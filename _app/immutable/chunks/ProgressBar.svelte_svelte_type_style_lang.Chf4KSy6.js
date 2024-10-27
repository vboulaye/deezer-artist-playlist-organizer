import{h as hydrating,o as set_hydrate_node,O as create_text,a as hydrate_next,b as block,a6 as is_array,Y as array_from,H as HYDRATION_START_ELSE,m as remove_nodes,v as set_hydrating,d as hydrate_node,l as resume_effect,c as branch,p as pause_effect,aM as INERT,q as queue_micro_task,_ as active_effect,aN as EACH_ITEM_REACTIVE,aO as internal_set,aP as EACH_INDEX_REACTIVE,aQ as EACH_ITEM_IMMUTABLE,x as mutable_source,ab as source,aR as pause_children,X as clear_text_content,aS as run_out_transitions,aT as destroy_effect,aU as EACH_IS_CONTROLLED,Q as get_first_child,U as HYDRATION_END,aV as EACH_IS_ANIMATED,N as get_next_sibling,V as hydration_mismatch,T as HYDRATION_ERROR,E as EFFECT_TRANSPARENT,y as noop,B as set,A as get}from"./utils.BwDD-hkd.js";import{d as assign_nodes,e as create_fragment_from_html}from"./disclose-version.DIxtxRN2.js";import{T as TokenCookie}from"./CookieManager.P34oS-qs.js";import{D as DeezerConfig}from"./DeezerConfig.Bim8XL35.js";import{H as HttpError,R as Redirect,g as get$1,w as writable,r as readable}from"./control.BoUAPlpW.js";let current_each_item=null;function index(n,t){return t}function pause_effects(n,t,e,r){for(var i=[],s=t.length,o=0;o<s;o++)pause_children(t[o].e,i,!0);var a=s>0&&i.length===0&&e!==null;if(a){var c=e.parentNode;clear_text_content(c),c.append(e),r.clear(),link(n,t[0].prev,t[s-1].next)}run_out_transitions(i,()=>{for(var d=0;d<s;d++){var l=t[d];a||(r.delete(l.k),link(n,l.prev,l.next)),destroy_effect(l.e,!a)}})}function each(n,t,e,r,i,s=null){var o=n,a={flags:t,items:new Map,first:null},c=(t&EACH_IS_CONTROLLED)!==0;if(c){var d=n;o=hydrating?set_hydrate_node(get_first_child(d)):d.appendChild(create_text())}hydrating&&hydrate_next();var l=null,h=!1;block(()=>{var f=e(),b=is_array(f)?f:f==null?[]:array_from(f),p=b.length;if(h&&p===0)return;h=p===0;let y=!1;if(hydrating){var w=o.data===HYDRATION_START_ELSE;w!==(p===0)&&(o=remove_nodes(),set_hydrate_node(o),set_hydrating(!1),y=!0)}if(hydrating){for(var k=null,R,g=0;g<p;g++){if(hydrate_node.nodeType===8&&hydrate_node.data===HYDRATION_END){o=hydrate_node,y=!0,set_hydrating(!1);break}var _=b[g],I=r(_,g);R=create_item(hydrate_node,a,k,null,_,I,g,i,t),a.items.set(I,R),k=R}p>0&&set_hydrate_node(remove_nodes())}hydrating||reconcile(b,a,o,i,t,r),s!==null&&(p===0?l?resume_effect(l):l=branch(()=>s(o)):l!==null&&pause_effect(l,()=>{l=null})),y&&set_hydrating(!0),e()}),hydrating&&(o=hydrate_node)}function reconcile(n,t,e,r,i,s){var S,A,O,$;var o=(i&EACH_IS_ANIMATED)!==0,a=(i&(EACH_ITEM_REACTIVE|EACH_INDEX_REACTIVE))!==0,c=n.length,d=t.items,l=t.first,h=l,f,b=null,p,y=[],w=[],k,R,g,_;if(o)for(_=0;_<c;_+=1)k=n[_],R=s(k,_),g=d.get(R),g!==void 0&&((S=g.a)==null||S.measure(),(p??(p=new Set)).add(g));for(_=0;_<c;_+=1){if(k=n[_],R=s(k,_),g=d.get(R),g===void 0){var I=h?h.e.nodes_start:e;b=create_item(I,t,b,b===null?t.first:b.next,k,R,_,r,i),d.set(R,b),y=[],w=[],h=b.next;continue}if(a&&update_item(g,k,_,i),g.e.f&INERT&&(resume_effect(g.e),o&&((A=g.a)==null||A.unfix(),(p??(p=new Set)).delete(g))),g!==h){if(f!==void 0&&f.has(g)){if(y.length<w.length){var u=w[0],v;b=u.prev;var C=y[0],E=y[y.length-1];for(v=0;v<y.length;v+=1)move(y[v],u,e);for(v=0;v<w.length;v+=1)f.delete(w[v]);link(t,C.prev,E.next),link(t,b,C),link(t,E,u),h=u,b=E,_-=1,y=[],w=[]}else f.delete(g),move(g,h,e),link(t,g.prev,g.next),link(t,g,b===null?t.first:b.next),link(t,b,g),b=g;continue}for(y=[],w=[];h!==null&&h.k!==R;)h.e.f&INERT||(f??(f=new Set)).add(h),w.push(h),h=h.next;if(h===null)continue;g=h}y.push(g),b=g,h=g.next}if(h!==null||f!==void 0){for(var m=f===void 0?[]:array_from(f);h!==null;)h.e.f&INERT||m.push(h),h=h.next;var T=m.length;if(T>0){var x=i&EACH_IS_CONTROLLED&&c===0?e:null;if(o){for(_=0;_<T;_+=1)(O=m[_].a)==null||O.measure();for(_=0;_<T;_+=1)($=m[_].a)==null||$.fix()}pause_effects(t,m,x,d)}}o&&queue_micro_task(()=>{var L;if(p!==void 0)for(g of p)(L=g.a)==null||L.apply()}),active_effect.first=t.first&&t.first.e,active_effect.last=b&&b.e}function update_item(n,t,e,r){r&EACH_ITEM_REACTIVE&&internal_set(n.v,t),r&EACH_INDEX_REACTIVE?internal_set(n.i,e):n.i=e}function create_item(n,t,e,r,i,s,o,a,c){var d=current_each_item;try{var l=(c&EACH_ITEM_REACTIVE)!==0,h=(c&EACH_ITEM_IMMUTABLE)===0,f=l?h?mutable_source(i):source(i):i,b=c&EACH_INDEX_REACTIVE?source(o):o,p={i:b,v:f,k:s,a:null,e:null,prev:e,next:r};return current_each_item=p,p.e=branch(()=>a(n,f,b),hydrating),p.e.prev=e&&e.e,p.e.next=r&&r.e,e===null?t.first=p:(e.next=p,e.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{current_each_item=d}}function move(n,t,e){for(var r=n.next?n.next.e.nodes_start:e,i=t?t.e.nodes_start:e,s=n.e.nodes_start;s!==r;){var o=get_next_sibling(s);i.before(s),s=o}}function link(n,t,e){t===null?n.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function html(n,t,e,r,i){var s=n,o="",a;block(()=>{if(o===(o=t()??"")){hydrating&&hydrate_next();return}a!==void 0&&(destroy_effect(a),a=void 0),o!==""&&(a=branch(()=>{if(hydrating){hydrate_node.data;for(var c=hydrate_next(),d=c;c!==null&&(c.nodeType!==8||c.data!=="");)d=c,c=get_next_sibling(c);if(c===null)throw hydration_mismatch(),HYDRATION_ERROR;assign_nodes(hydrate_node,d),s=set_hydrate_node(c);return}var l=o+"",h=create_fragment_from_html(l);assign_nodes(get_first_child(h),h.lastChild),s.before(h)}))})}function slot(n,t,e,r,i){var a;hydrating&&hydrate_next();var s=(a=t.$$slots)==null?void 0:a[e],o=!1;s===!0&&(s=t[e==="default"?"children":e],o=!0),s===void 0?i!==null&&i(n):s(n,o?()=>r:r)}function sanitize_slots(n){const t={};n.children&&(t.default=!0);for(const e in n.$$slots)t[e]=!0;return t}function snippet(n,t,...e){var r=n,i=noop,s;block(()=>{i!==(i=t())&&(s&&(destroy_effect(s),s=null),s=branch(()=>i(r,...e)))},EFFECT_TRANSPARENT),hydrating&&(r=hydrate_node)}function set_svg_class(n,t){var e=n.__className,r=to_class(t);hydrating&&n.getAttribute("class")===r?n.__className=r:(e!==r||hydrating&&n.getAttribute("class")!==r)&&(r===""?n.removeAttribute("class"):n.setAttribute("class",r),n.__className=r)}function set_class(n,t){var e=n.__className,r=to_class(t);hydrating&&n.className===r?n.__className=r:(e!==r||hydrating&&n.className!==r)&&(t==null?n.removeAttribute("class"):n.className=r,n.__className=r)}function to_class(n){return n??""}function toggle_class(n,t,e){if(e){if(n.classList.contains(t))return;n.classList.add(t)}else{if(!n.classList.contains(t))return;n.classList.remove(t)}}function reactive_import(n){var t=source(0);return function(){return arguments.length===1?(set(t,get(t)+1),arguments[0]):(get(t),n())}}function bubble_event(n,t){var s;var e=(s=n.$$events)==null?void 0:s[t.type],r=is_array(e)?e.slice():e==null?[]:[e];for(var i of r)i.call(this,t)}var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var browser={exports:{}},ms,hasRequiredMs;function requireMs(){if(hasRequiredMs)return ms;hasRequiredMs=1;var n=1e3,t=n*60,e=t*60,r=e*24,i=r*7,s=r*365.25;ms=function(l,h){h=h||{};var f=typeof l;if(f==="string"&&l.length>0)return o(l);if(f==="number"&&isFinite(l))return h.long?c(l):a(l);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(l))};function o(l){if(l=String(l),!(l.length>100)){var h=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);if(h){var f=parseFloat(h[1]),b=(h[2]||"ms").toLowerCase();switch(b){case"years":case"year":case"yrs":case"yr":case"y":return f*s;case"weeks":case"week":case"w":return f*i;case"days":case"day":case"d":return f*r;case"hours":case"hour":case"hrs":case"hr":case"h":return f*e;case"minutes":case"minute":case"mins":case"min":case"m":return f*t;case"seconds":case"second":case"secs":case"sec":case"s":return f*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return f;default:return}}}}function a(l){var h=Math.abs(l);return h>=r?Math.round(l/r)+"d":h>=e?Math.round(l/e)+"h":h>=t?Math.round(l/t)+"m":h>=n?Math.round(l/n)+"s":l+"ms"}function c(l){var h=Math.abs(l);return h>=r?d(l,h,r,"day"):h>=e?d(l,h,e,"hour"):h>=t?d(l,h,t,"minute"):h>=n?d(l,h,n,"second"):l+" ms"}function d(l,h,f,b){var p=h>=f*1.5;return Math.round(l/f)+" "+b+(p?"s":"")}return ms}function setup(n){e.debug=e,e.default=e,e.coerce=c,e.disable=s,e.enable=i,e.enabled=o,e.humanize=requireMs(),e.destroy=d,Object.keys(n).forEach(l=>{e[l]=n[l]}),e.names=[],e.skips=[],e.formatters={};function t(l){let h=0;for(let f=0;f<l.length;f++)h=(h<<5)-h+l.charCodeAt(f),h|=0;return e.colors[Math.abs(h)%e.colors.length]}e.selectColor=t;function e(l){let h,f=null,b,p;function y(...w){if(!y.enabled)return;const k=y,R=Number(new Date),g=R-(h||R);k.diff=g,k.prev=h,k.curr=R,h=R,w[0]=e.coerce(w[0]),typeof w[0]!="string"&&w.unshift("%O");let _=0;w[0]=w[0].replace(/%([a-zA-Z%])/g,(u,v)=>{if(u==="%%")return"%";_++;const C=e.formatters[v];if(typeof C=="function"){const E=w[_];u=C.call(k,E),w.splice(_,1),_--}return u}),e.formatArgs.call(k,w),(k.log||e.log).apply(k,w)}return y.namespace=l,y.useColors=e.useColors(),y.color=e.selectColor(l),y.extend=r,y.destroy=e.destroy,Object.defineProperty(y,"enabled",{enumerable:!0,configurable:!1,get:()=>f!==null?f:(b!==e.namespaces&&(b=e.namespaces,p=e.enabled(l)),p),set:w=>{f=w}}),typeof e.init=="function"&&e.init(y),y}function r(l,h){const f=e(this.namespace+(typeof h>"u"?":":h)+l);return f.log=this.log,f}function i(l){e.save(l),e.namespaces=l,e.names=[],e.skips=[];let h;const f=(typeof l=="string"?l:"").split(/[\s,]+/),b=f.length;for(h=0;h<b;h++)f[h]&&(l=f[h].replace(/\*/g,".*?"),l[0]==="-"?e.skips.push(new RegExp("^"+l.slice(1)+"$")):e.names.push(new RegExp("^"+l+"$")))}function s(){const l=[...e.names.map(a),...e.skips.map(a).map(h=>"-"+h)].join(",");return e.enable(""),l}function o(l){if(l[l.length-1]==="*")return!0;let h,f;for(h=0,f=e.skips.length;h<f;h++)if(e.skips[h].test(l))return!1;for(h=0,f=e.names.length;h<f;h++)if(e.names[h].test(l))return!0;return!1}function a(l){return l.toString().substring(2,l.toString().length-2).replace(/\.\*\?$/,"*")}function c(l){return l instanceof Error?l.stack||l.message:l}function d(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var common=setup;(function(n,t){var e={};t.formatArgs=i,t.save=s,t.load=o,t.useColors=r,t.storage=a(),t.destroy=(()=>{let d=!1;return()=>{d||(d=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function r(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let d;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(d=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(d[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function i(d){if(d[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+d[0]+(this.useColors?"%c ":" ")+"+"+n.exports.humanize(this.diff),!this.useColors)return;const l="color: "+this.color;d.splice(1,0,l,"color: inherit");let h=0,f=0;d[0].replace(/%[a-zA-Z%]/g,b=>{b!=="%%"&&(h++,b==="%c"&&(f=h))}),d.splice(f,0,l)}t.log=console.debug||console.log||(()=>{});function s(d){try{d?t.storage.setItem("debug",d):t.storage.removeItem("debug")}catch{}}function o(){let d;try{d=t.storage.getItem("debug")}catch{}return!d&&typeof process<"u"&&"env"in process&&(d=e.DEBUG),d}function a(){try{return localStorage}catch{}}n.exports=common(t);const{formatters:c}=n.exports;c.j=function(d){try{return JSON.stringify(d)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}}})(browser,browser.exports);var browserExports=browser.exports;const debug=getDefaultExportFromCjs(browserExports),ROOT_LOGGER=debug("deezer-playlist"),traceDuration=async(n,t)=>{const e=Date.now();try{return await t()}finally{const r=Date.now();console.warn(`### calling ${n} took ${r-e}ms`)}};function error(n,t){throw new HttpError(n,t)}function redirect(n,t){throw new Redirect(n,t.toString())}new TextEncoder;var fetchJsonp$1={exports:{}};(function(n,t){(function(e,r){r(t,n)})(commonjsGlobal,function(e,r){var i={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function s(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function o(d){try{delete window[d]}catch{window[d]=void 0}}function a(d){var l=document.getElementById(d);l&&document.getElementsByTagName("head")[0].removeChild(l)}function c(d){var l=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],h=d,f=l.timeout||i.timeout,b=l.jsonpCallback||i.jsonpCallback,p=void 0;return new Promise(function(y,w){var k=l.jsonpCallbackFunction||s(),R=b+"_"+k;window[k]=function(_){y({ok:!0,json:function(){return Promise.resolve(_)}}),p&&clearTimeout(p),a(R),o(k)},h+=h.indexOf("?")===-1?"?":"&";var g=document.createElement("script");g.setAttribute("src",""+h+b+"="+k),l.charset&&g.setAttribute("charset",l.charset),l.nonce&&g.setAttribute("nonce",l.nonce),l.referrerPolicy&&g.setAttribute("referrerPolicy",l.referrerPolicy),l.crossorigin&&g.setAttribute("crossorigin","true"),g.id=R,document.getElementsByTagName("head")[0].appendChild(g),p=setTimeout(function(){w(new Error("JSONP request to "+d+" timed out")),o(k),a(R),window[k]=function(){o(k)}},f),g.onerror=function(){w(new Error("JSONP request to "+d+" failed")),o(k),a(R),p&&clearTimeout(p)}})}r.exports=c})})(fetchJsonp$1,fetchJsonp$1.exports);var fetchJsonpExports=fetchJsonp$1.exports;const fetchJsonp=getDefaultExportFromCjs(fetchJsonpExports);var parser$5={};parser$5.load=function(n,t,e={}){var r,i,s;for(r in t)s=t[r],e[r]=(i=n[r])!=null?i:s;return e};parser$5.overwrite=function(n,t,e={}){var r,i;for(r in n)i=n[r],t[r]!==void 0&&(e[r]=i);return e};var DLList$2;DLList$2=class{constructor(t,e){this.incr=t,this.decr=e,this._first=null,this._last=null,this.length=0}push(t){var e;this.length++,typeof this.incr=="function"&&this.incr(),e={value:t,prev:this._last,next:null},this._last!=null?(this._last.next=e,this._last=e):this._first=this._last=e}shift(){var t;if(this._first!=null)return this.length--,typeof this.decr=="function"&&this.decr(),t=this._first.value,(this._first=this._first.next)!=null?this._first.prev=null:this._last=null,t}first(){if(this._first!=null)return this._first.value}getArray(){var t,e,r;for(t=this._first,r=[];t!=null;)r.push((e=t,t=t.next,e.value));return r}forEachShift(t){var e;for(e=this.shift();e!=null;)t(e),e=this.shift()}debug(){var t,e,r,i,s;for(t=this._first,s=[];t!=null;)s.push((e=t,t=t.next,{value:e.value,prev:(r=e.prev)!=null?r.value:void 0,next:(i=e.next)!=null?i.value:void 0}));return s}};var DLList_1=DLList$2;function asyncGeneratorStep$6(n,t,e,r,i,s,o){try{var a=n[s](o),c=a.value}catch(d){e(d);return}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator$6(n){return function(){var t=this,e=arguments;return new Promise(function(r,i){var s=n.apply(t,e);function o(c){asyncGeneratorStep$6(s,r,i,o,a,"next",c)}function a(c){asyncGeneratorStep$6(s,r,i,o,a,"throw",c)}o(void 0)})}}var Events$3;Events$3=class{constructor(t){if(this.instance=t,this._events={},this.instance.on!=null||this.instance.once!=null||this.instance.removeAllListeners!=null)throw new Error("An Emitter already exists for this object");this.instance.on=(e,r)=>this._addListener(e,"many",r),this.instance.once=(e,r)=>this._addListener(e,"once",r),this.instance.removeAllListeners=(e=null)=>e!=null?delete this._events[e]:this._events={}}_addListener(t,e,r){var i;return(i=this._events)[t]==null&&(i[t]=[]),this._events[t].push({cb:r,status:e}),this.instance}listenerCount(t){return this._events[t]!=null?this._events[t].length:0}trigger(t,...e){var r=this;return _asyncToGenerator$6(function*(){var i,s;try{return t!=="debug"&&r.trigger("debug",`Event triggered: ${t}`,e),r._events[t]==null?void 0:(r._events[t]=r._events[t].filter(function(o){return o.status!=="none"}),s=r._events[t].map(function(){var o=_asyncToGenerator$6(function*(a){var c,d;if(a.status!=="none"){a.status==="once"&&(a.status="none");try{return d=typeof a.cb=="function"?a.cb(...e):void 0,typeof(d!=null?d.then:void 0)=="function"?yield d:d}catch(l){return c=l,r.trigger("error",c),null}}});return function(a){return o.apply(this,arguments)}}()),(yield Promise.all(s)).find(function(o){return o!=null}))}catch(o){return i=o,r.trigger("error",i),null}})()}};var Events_1=Events$3,DLList$1,Events$2,Queues;DLList$1=DLList_1;Events$2=Events_1;Queues=class{constructor(t){this.Events=new Events$2(this),this._length=0,this._lists=(function(){var e,r,i;for(i=[],e=1,r=t;1<=r?e<=r:e>=r;1<=r?++e:--e)i.push(new DLList$1(()=>this.incr(),()=>this.decr()));return i}).call(this)}incr(){if(this._length++===0)return this.Events.trigger("leftzero")}decr(){if(--this._length===0)return this.Events.trigger("zero")}push(t){return this._lists[t.options.priority].push(t)}queued(t){return t!=null?this._lists[t].length:this._length}shiftAll(t){return this._lists.forEach(function(e){return e.forEachShift(t)})}getFirst(t=this._lists){var e,r,i;for(e=0,r=t.length;e<r;e++)if(i=t[e],i.length>0)return i;return[]}shiftLastFrom(t){return this.getFirst(this._lists.slice(t).reverse()).shift()}};var Queues_1=Queues,BottleneckError$4;BottleneckError$4=class extends Error{};var BottleneckError_1=BottleneckError$4;function asyncGeneratorStep$5(n,t,e,r,i,s,o){try{var a=n[s](o),c=a.value}catch(d){e(d);return}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator$5(n){return function(){var t=this,e=arguments;return new Promise(function(r,i){var s=n.apply(t,e);function o(c){asyncGeneratorStep$5(s,r,i,o,a,"next",c)}function a(c){asyncGeneratorStep$5(s,r,i,o,a,"throw",c)}o(void 0)})}}var BottleneckError$3,DEFAULT_PRIORITY,Job,NUM_PRIORITIES,parser$4;NUM_PRIORITIES=10;DEFAULT_PRIORITY=5;parser$4=parser$5;BottleneckError$3=BottleneckError_1;Job=class{constructor(t,e,r,i,s,o,a,c){this.task=t,this.args=e,this.rejectOnDrop=s,this.Events=o,this._states=a,this.Promise=c,this.options=parser$4.load(r,i),this.options.priority=this._sanitizePriority(this.options.priority),this.options.id===i.id&&(this.options.id=`${this.options.id}-${this._randomIndex()}`),this.promise=new this.Promise((d,l)=>{this._resolve=d,this._reject=l}),this.retryCount=0}_sanitizePriority(t){var e;return e=~~t!==t?DEFAULT_PRIORITY:t,e<0?0:e>NUM_PRIORITIES-1?NUM_PRIORITIES-1:e}_randomIndex(){return Math.random().toString(36).slice(2)}doDrop({error:t,message:e="This job has been dropped by Bottleneck"}={}){return this._states.remove(this.options.id)?(this.rejectOnDrop&&this._reject(t??new BottleneckError$3(e)),this.Events.trigger("dropped",{args:this.args,options:this.options,task:this.task,promise:this.promise}),!0):!1}_assertStatus(t){var e;if(e=this._states.jobStatus(this.options.id),!(e===t||t==="DONE"&&e===null))throw new BottleneckError$3(`Invalid job status ${e}, expected ${t}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`)}doReceive(){return this._states.start(this.options.id),this.Events.trigger("received",{args:this.args,options:this.options})}doQueue(t,e){return this._assertStatus("RECEIVED"),this._states.next(this.options.id),this.Events.trigger("queued",{args:this.args,options:this.options,reachedHWM:t,blocked:e})}doRun(){return this.retryCount===0?(this._assertStatus("QUEUED"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),this.Events.trigger("scheduled",{args:this.args,options:this.options})}doExecute(t,e,r,i){var s=this;return _asyncToGenerator$5(function*(){var o,a,c;s.retryCount===0?(s._assertStatus("RUNNING"),s._states.next(s.options.id)):s._assertStatus("EXECUTING"),a={args:s.args,options:s.options,retryCount:s.retryCount},s.Events.trigger("executing",a);try{if(c=yield t!=null?t.schedule(s.options,s.task,...s.args):s.task(...s.args),e())return s.doDone(a),yield i(s.options,a),s._assertStatus("DONE"),s._resolve(c)}catch(d){return o=d,s._onFailure(o,a,e,r,i)}})()}doExpire(t,e,r){var i,s;return this._states.jobStatus(this.options.id==="RUNNING")&&this._states.next(this.options.id),this._assertStatus("EXECUTING"),s={args:this.args,options:this.options,retryCount:this.retryCount},i=new BottleneckError$3(`This job timed out after ${this.options.expiration} ms.`),this._onFailure(i,s,t,e,r)}_onFailure(t,e,r,i,s){var o=this;return _asyncToGenerator$5(function*(){var a,c;if(r())return a=yield o.Events.trigger("failed",t,e),a!=null?(c=~~a,o.Events.trigger("retry",`Retrying ${o.options.id} after ${c} ms`,e),o.retryCount++,i(c)):(o.doDone(e),yield s(o.options,e),o._assertStatus("DONE"),o._reject(t))})()}doDone(t){return this._assertStatus("EXECUTING"),this._states.next(this.options.id),this.Events.trigger("done",t)}};var Job_1=Job;function asyncGeneratorStep$4(n,t,e,r,i,s,o){try{var a=n[s](o),c=a.value}catch(d){e(d);return}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator$4(n){return function(){var t=this,e=arguments;return new Promise(function(r,i){var s=n.apply(t,e);function o(c){asyncGeneratorStep$4(s,r,i,o,a,"next",c)}function a(c){asyncGeneratorStep$4(s,r,i,o,a,"throw",c)}o(void 0)})}}var BottleneckError$2,LocalDatastore,parser$3;parser$3=parser$5;BottleneckError$2=BottleneckError_1;LocalDatastore=class{constructor(t,e,r){this.instance=t,this.storeOptions=e,this.clientId=this.instance._randomIndex(),parser$3.load(r,r,this),this._nextRequest=this._lastReservoirRefresh=this._lastReservoirIncrease=Date.now(),this._running=0,this._done=0,this._unblockTime=0,this.ready=this.Promise.resolve(),this.clients={},this._startHeartbeat()}_startHeartbeat(){var t;return this.heartbeat==null&&(this.storeOptions.reservoirRefreshInterval!=null&&this.storeOptions.reservoirRefreshAmount!=null||this.storeOptions.reservoirIncreaseInterval!=null&&this.storeOptions.reservoirIncreaseAmount!=null)?typeof(t=this.heartbeat=setInterval(()=>{var e,r,i,s,o;if(s=Date.now(),this.storeOptions.reservoirRefreshInterval!=null&&s>=this._lastReservoirRefresh+this.storeOptions.reservoirRefreshInterval&&(this._lastReservoirRefresh=s,this.storeOptions.reservoir=this.storeOptions.reservoirRefreshAmount,this.instance._drainAll(this.computeCapacity())),this.storeOptions.reservoirIncreaseInterval!=null&&s>=this._lastReservoirIncrease+this.storeOptions.reservoirIncreaseInterval){var a=this.storeOptions;if(e=a.reservoirIncreaseAmount,i=a.reservoirIncreaseMaximum,o=a.reservoir,this._lastReservoirIncrease=s,r=i!=null?Math.min(e,i-o):e,r>0)return this.storeOptions.reservoir+=r,this.instance._drainAll(this.computeCapacity())}},this.heartbeatInterval)).unref=="function"?t.unref():void 0:clearInterval(this.heartbeat)}__publish__(t){var e=this;return _asyncToGenerator$4(function*(){return yield e.yieldLoop(),e.instance.Events.trigger("message",t.toString())})()}__disconnect__(t){var e=this;return _asyncToGenerator$4(function*(){return yield e.yieldLoop(),clearInterval(e.heartbeat),e.Promise.resolve()})()}yieldLoop(t=0){return new this.Promise(function(e,r){return setTimeout(e,t)})}computePenalty(){var t;return(t=this.storeOptions.penalty)!=null?t:15*this.storeOptions.minTime||5e3}__updateSettings__(t){var e=this;return _asyncToGenerator$4(function*(){return yield e.yieldLoop(),parser$3.overwrite(t,t,e.storeOptions),e._startHeartbeat(),e.instance._drainAll(e.computeCapacity()),!0})()}__running__(){var t=this;return _asyncToGenerator$4(function*(){return yield t.yieldLoop(),t._running})()}__queued__(){var t=this;return _asyncToGenerator$4(function*(){return yield t.yieldLoop(),t.instance.queued()})()}__done__(){var t=this;return _asyncToGenerator$4(function*(){return yield t.yieldLoop(),t._done})()}__groupCheck__(t){var e=this;return _asyncToGenerator$4(function*(){return yield e.yieldLoop(),e._nextRequest+e.timeout<t})()}computeCapacity(){var t,e,r=this.storeOptions;return t=r.maxConcurrent,e=r.reservoir,t!=null&&e!=null?Math.min(t-this._running,e):t!=null?t-this._running:e??null}conditionsCheck(t){var e;return e=this.computeCapacity(),e==null||t<=e}__incrementReservoir__(t){var e=this;return _asyncToGenerator$4(function*(){var r;return yield e.yieldLoop(),r=e.storeOptions.reservoir+=t,e.instance._drainAll(e.computeCapacity()),r})()}__currentReservoir__(){var t=this;return _asyncToGenerator$4(function*(){return yield t.yieldLoop(),t.storeOptions.reservoir})()}isBlocked(t){return this._unblockTime>=t}check(t,e){return this.conditionsCheck(t)&&this._nextRequest-e<=0}__check__(t){var e=this;return _asyncToGenerator$4(function*(){var r;return yield e.yieldLoop(),r=Date.now(),e.check(t,r)})()}__register__(t,e,r){var i=this;return _asyncToGenerator$4(function*(){var s,o;return yield i.yieldLoop(),s=Date.now(),i.conditionsCheck(e)?(i._running+=e,i.storeOptions.reservoir!=null&&(i.storeOptions.reservoir-=e),o=Math.max(i._nextRequest-s,0),i._nextRequest=s+o+i.storeOptions.minTime,{success:!0,wait:o,reservoir:i.storeOptions.reservoir}):{success:!1}})()}strategyIsBlock(){return this.storeOptions.strategy===3}__submit__(t,e){var r=this;return _asyncToGenerator$4(function*(){var i,s,o;if(yield r.yieldLoop(),r.storeOptions.maxConcurrent!=null&&e>r.storeOptions.maxConcurrent)throw new BottleneckError$2(`Impossible to add a job having a weight of ${e} to a limiter having a maxConcurrent setting of ${r.storeOptions.maxConcurrent}`);return s=Date.now(),o=r.storeOptions.highWater!=null&&t===r.storeOptions.highWater&&!r.check(e,s),i=r.strategyIsBlock()&&(o||r.isBlocked(s)),i&&(r._unblockTime=s+r.computePenalty(),r._nextRequest=r._unblockTime+r.storeOptions.minTime,r.instance._dropAllQueued()),{reachedHWM:o,blocked:i,strategy:r.storeOptions.strategy}})()}__free__(t,e){var r=this;return _asyncToGenerator$4(function*(){return yield r.yieldLoop(),r._running-=e,r._done+=e,r.instance._drainAll(r.computeCapacity()),{running:r._running}})()}};var LocalDatastore_1=LocalDatastore,Scripts$2={};const require$$0={"blacklist_client.lua":`local blacklist = ARGV[num_static_argv + 1]

if redis.call('zscore', client_last_seen_key, blacklist) then
  redis.call('zadd', client_last_seen_key, 0, blacklist)
end


return {}
`,"check.lua":`local weight = tonumber(ARGV[num_static_argv + 1])

local capacity = process_tick(now, false)['capacity']
local nextRequest = tonumber(redis.call('hget', settings_key, 'nextRequest'))

return conditions_check(capacity, weight) and nextRequest - now <= 0
`,"conditions_check.lua":`local conditions_check = function (capacity, weight)
  return capacity == nil or weight <= capacity
end
`,"current_reservoir.lua":`return process_tick(now, false)['reservoir']
`,"done.lua":`process_tick(now, false)

return tonumber(redis.call('hget', settings_key, 'done'))
`,"free.lua":`local index = ARGV[num_static_argv + 1]

redis.call('zadd', job_expirations_key, 0, index)

return process_tick(now, false)['running']
`,"get_time.lua":`redis.replicate_commands()

local get_time = function ()
  local time = redis.call('time')

  return tonumber(time[1]..string.sub(time[2], 1, 3))
end
`,"group_check.lua":`return not (redis.call('exists', settings_key) == 1)
`,"heartbeat.lua":`process_tick(now, true)
`,"increment_reservoir.lua":`local incr = tonumber(ARGV[num_static_argv + 1])

redis.call('hincrby', settings_key, 'reservoir', incr)

local reservoir = process_tick(now, true)['reservoir']

local groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))
refresh_expiration(0, 0, groupTimeout)

return reservoir
`,"init.lua":`local clear = tonumber(ARGV[num_static_argv + 1])
local limiter_version = ARGV[num_static_argv + 2]
local num_local_argv = num_static_argv + 2

if clear == 1 then
  redis.call('del', unpack(KEYS))
end

if redis.call('exists', settings_key) == 0 then
  -- Create
  local args = {'hmset', settings_key}

  for i = num_local_argv + 1, #ARGV do
    table.insert(args, ARGV[i])
  end

  redis.call(unpack(args))
  redis.call('hmset', settings_key,
    'nextRequest', now,
    'lastReservoirRefresh', now,
    'lastReservoirIncrease', now,
    'running', 0,
    'done', 0,
    'unblockTime', 0,
    'capacityPriorityCounter', 0
  )

else
  -- Apply migrations
  local settings = redis.call('hmget', settings_key,
    'id',
    'version'
  )
  local id = settings[1]
  local current_version = settings[2]

  if current_version ~= limiter_version then
    local version_digits = {}
    for k, v in string.gmatch(current_version, "([^.]+)") do
      table.insert(version_digits, tonumber(k))
    end

    -- 2.10.0
    if version_digits[2] < 10 then
      redis.call('hsetnx', settings_key, 'reservoirRefreshInterval', '')
      redis.call('hsetnx', settings_key, 'reservoirRefreshAmount', '')
      redis.call('hsetnx', settings_key, 'lastReservoirRefresh', '')
      redis.call('hsetnx', settings_key, 'done', 0)
      redis.call('hset', settings_key, 'version', '2.10.0')
    end

    -- 2.11.1
    if version_digits[2] < 11 or (version_digits[2] == 11 and version_digits[3] < 1) then
      if redis.call('hstrlen', settings_key, 'lastReservoirRefresh') == 0 then
        redis.call('hmset', settings_key,
          'lastReservoirRefresh', now,
          'version', '2.11.1'
        )
      end
    end

    -- 2.14.0
    if version_digits[2] < 14 then
      local old_running_key = 'b_'..id..'_running'
      local old_executing_key = 'b_'..id..'_executing'

      if redis.call('exists', old_running_key) == 1 then
        redis.call('rename', old_running_key, job_weights_key)
      end
      if redis.call('exists', old_executing_key) == 1 then
        redis.call('rename', old_executing_key, job_expirations_key)
      end
      redis.call('hset', settings_key, 'version', '2.14.0')
    end

    -- 2.15.2
    if version_digits[2] < 15 or (version_digits[2] == 15 and version_digits[3] < 2) then
      redis.call('hsetnx', settings_key, 'capacityPriorityCounter', 0)
      redis.call('hset', settings_key, 'version', '2.15.2')
    end

    -- 2.17.0
    if version_digits[2] < 17 then
      redis.call('hsetnx', settings_key, 'clientTimeout', 10000)
      redis.call('hset', settings_key, 'version', '2.17.0')
    end

    -- 2.18.0
    if version_digits[2] < 18 then
      redis.call('hsetnx', settings_key, 'reservoirIncreaseInterval', '')
      redis.call('hsetnx', settings_key, 'reservoirIncreaseAmount', '')
      redis.call('hsetnx', settings_key, 'reservoirIncreaseMaximum', '')
      redis.call('hsetnx', settings_key, 'lastReservoirIncrease', now)
      redis.call('hset', settings_key, 'version', '2.18.0')
    end

  end

  process_tick(now, false)
end

local groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))
refresh_expiration(0, 0, groupTimeout)

return {}
`,"process_tick.lua":`local process_tick = function (now, always_publish)

  local compute_capacity = function (maxConcurrent, running, reservoir)
    if maxConcurrent ~= nil and reservoir ~= nil then
      return math.min((maxConcurrent - running), reservoir)
    elseif maxConcurrent ~= nil then
      return maxConcurrent - running
    elseif reservoir ~= nil then
      return reservoir
    else
      return nil
    end
  end

  local settings = redis.call('hmget', settings_key,
    'id',
    'maxConcurrent',
    'running',
    'reservoir',
    'reservoirRefreshInterval',
    'reservoirRefreshAmount',
    'lastReservoirRefresh',
    'reservoirIncreaseInterval',
    'reservoirIncreaseAmount',
    'reservoirIncreaseMaximum',
    'lastReservoirIncrease',
    'capacityPriorityCounter',
    'clientTimeout'
  )
  local id = settings[1]
  local maxConcurrent = tonumber(settings[2])
  local running = tonumber(settings[3])
  local reservoir = tonumber(settings[4])
  local reservoirRefreshInterval = tonumber(settings[5])
  local reservoirRefreshAmount = tonumber(settings[6])
  local lastReservoirRefresh = tonumber(settings[7])
  local reservoirIncreaseInterval = tonumber(settings[8])
  local reservoirIncreaseAmount = tonumber(settings[9])
  local reservoirIncreaseMaximum = tonumber(settings[10])
  local lastReservoirIncrease = tonumber(settings[11])
  local capacityPriorityCounter = tonumber(settings[12])
  local clientTimeout = tonumber(settings[13])

  local initial_capacity = compute_capacity(maxConcurrent, running, reservoir)

  --
  -- Process 'running' changes
  --
  local expired = redis.call('zrangebyscore', job_expirations_key, '-inf', '('..now)

  if #expired > 0 then
    redis.call('zremrangebyscore', job_expirations_key, '-inf', '('..now)

    local flush_batch = function (batch, acc)
      local weights = redis.call('hmget', job_weights_key, unpack(batch))
                      redis.call('hdel',  job_weights_key, unpack(batch))
      local clients = redis.call('hmget', job_clients_key, unpack(batch))
                      redis.call('hdel',  job_clients_key, unpack(batch))

      -- Calculate sum of removed weights
      for i = 1, #weights do
        acc['total'] = acc['total'] + (tonumber(weights[i]) or 0)
      end

      -- Calculate sum of removed weights by client
      local client_weights = {}
      for i = 1, #clients do
        local removed = tonumber(weights[i]) or 0
        if removed > 0 then
          acc['client_weights'][clients[i]] = (acc['client_weights'][clients[i]] or 0) + removed
        end
      end
    end

    local acc = {
      ['total'] = 0,
      ['client_weights'] = {}
    }
    local batch_size = 1000

    -- Compute changes to Zsets and apply changes to Hashes
    for i = 1, #expired, batch_size do
      local batch = {}
      for j = i, math.min(i + batch_size - 1, #expired) do
        table.insert(batch, expired[j])
      end

      flush_batch(batch, acc)
    end

    -- Apply changes to Zsets
    if acc['total'] > 0 then
      redis.call('hincrby', settings_key, 'done', acc['total'])
      running = tonumber(redis.call('hincrby', settings_key, 'running', -acc['total']))
    end

    for client, weight in pairs(acc['client_weights']) do
      redis.call('zincrby', client_running_key, -weight, client)
    end
  end

  --
  -- Process 'reservoir' changes
  --
  local reservoirRefreshActive = reservoirRefreshInterval ~= nil and reservoirRefreshAmount ~= nil
  if reservoirRefreshActive and now >= lastReservoirRefresh + reservoirRefreshInterval then
    reservoir = reservoirRefreshAmount
    redis.call('hmset', settings_key,
      'reservoir', reservoir,
      'lastReservoirRefresh', now
    )
  end

  local reservoirIncreaseActive = reservoirIncreaseInterval ~= nil and reservoirIncreaseAmount ~= nil
  if reservoirIncreaseActive and now >= lastReservoirIncrease + reservoirIncreaseInterval then
    local num_intervals = math.floor((now - lastReservoirIncrease) / reservoirIncreaseInterval)
    local incr = reservoirIncreaseAmount * num_intervals
    if reservoirIncreaseMaximum ~= nil then
      incr = math.min(incr, reservoirIncreaseMaximum - (reservoir or 0))
    end
    if incr > 0 then
      reservoir = (reservoir or 0) + incr
    end
    redis.call('hmset', settings_key,
      'reservoir', reservoir,
      'lastReservoirIncrease', lastReservoirIncrease + (num_intervals * reservoirIncreaseInterval)
    )
  end

  --
  -- Clear unresponsive clients
  --
  local unresponsive = redis.call('zrangebyscore', client_last_seen_key, '-inf', (now - clientTimeout))
  local unresponsive_lookup = {}
  local terminated_clients = {}
  for i = 1, #unresponsive do
    unresponsive_lookup[unresponsive[i]] = true
    if tonumber(redis.call('zscore', client_running_key, unresponsive[i])) == 0 then
      table.insert(terminated_clients, unresponsive[i])
    end
  end
  if #terminated_clients > 0 then
    redis.call('zrem', client_running_key,         unpack(terminated_clients))
    redis.call('hdel', client_num_queued_key,      unpack(terminated_clients))
    redis.call('zrem', client_last_registered_key, unpack(terminated_clients))
    redis.call('zrem', client_last_seen_key,       unpack(terminated_clients))
  end

  --
  -- Broadcast capacity changes
  --
  local final_capacity = compute_capacity(maxConcurrent, running, reservoir)

  if always_publish or (initial_capacity ~= nil and final_capacity == nil) then
    -- always_publish or was not unlimited, now unlimited
    redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))

  elseif initial_capacity ~= nil and final_capacity ~= nil and final_capacity > initial_capacity then
    -- capacity was increased
    -- send the capacity message to the limiter having the lowest number of running jobs
    -- the tiebreaker is the limiter having not registered a job in the longest time

    local lowest_concurrency_value = nil
    local lowest_concurrency_clients = {}
    local lowest_concurrency_last_registered = {}
    local client_concurrencies = redis.call('zrange', client_running_key, 0, -1, 'withscores')

    for i = 1, #client_concurrencies, 2 do
      local client = client_concurrencies[i]
      local concurrency = tonumber(client_concurrencies[i+1])

      if (
        lowest_concurrency_value == nil or lowest_concurrency_value == concurrency
      ) and (
        not unresponsive_lookup[client]
      ) and (
        tonumber(redis.call('hget', client_num_queued_key, client)) > 0
      ) then
        lowest_concurrency_value = concurrency
        table.insert(lowest_concurrency_clients, client)
        local last_registered = tonumber(redis.call('zscore', client_last_registered_key, client))
        table.insert(lowest_concurrency_last_registered, last_registered)
      end
    end

    if #lowest_concurrency_clients > 0 then
      local position = 1
      local earliest = lowest_concurrency_last_registered[1]

      for i,v in ipairs(lowest_concurrency_last_registered) do
        if v < earliest then
          position = i
          earliest = v
        end
      end

      local next_client = lowest_concurrency_clients[position]
      redis.call('publish', 'b_'..id,
        'capacity-priority:'..(final_capacity or '')..
        ':'..next_client..
        ':'..capacityPriorityCounter
      )
      redis.call('hincrby', settings_key, 'capacityPriorityCounter', '1')
    else
      redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))
    end
  end

  return {
    ['capacity'] = final_capacity,
    ['running'] = running,
    ['reservoir'] = reservoir
  }
end
`,"queued.lua":`local clientTimeout = tonumber(redis.call('hget', settings_key, 'clientTimeout'))
local valid_clients = redis.call('zrangebyscore', client_last_seen_key, (now - clientTimeout), 'inf')
local client_queued = redis.call('hmget', client_num_queued_key, unpack(valid_clients))

local sum = 0
for i = 1, #client_queued do
  sum = sum + tonumber(client_queued[i])
end

return sum
`,"refresh_expiration.lua":`local refresh_expiration = function (now, nextRequest, groupTimeout)

  if groupTimeout ~= nil then
    local ttl = (nextRequest + groupTimeout) - now

    for i = 1, #KEYS do
      redis.call('pexpire', KEYS[i], ttl)
    end
  end

end
`,"refs.lua":`local settings_key = KEYS[1]
local job_weights_key = KEYS[2]
local job_expirations_key = KEYS[3]
local job_clients_key = KEYS[4]
local client_running_key = KEYS[5]
local client_num_queued_key = KEYS[6]
local client_last_registered_key = KEYS[7]
local client_last_seen_key = KEYS[8]

local now = tonumber(ARGV[1])
local client = ARGV[2]

local num_static_argv = 2
`,"register.lua":`local index = ARGV[num_static_argv + 1]
local weight = tonumber(ARGV[num_static_argv + 2])
local expiration = tonumber(ARGV[num_static_argv + 3])

local state = process_tick(now, false)
local capacity = state['capacity']
local reservoir = state['reservoir']

local settings = redis.call('hmget', settings_key,
  'nextRequest',
  'minTime',
  'groupTimeout'
)
local nextRequest = tonumber(settings[1])
local minTime = tonumber(settings[2])
local groupTimeout = tonumber(settings[3])

if conditions_check(capacity, weight) then

  redis.call('hincrby', settings_key, 'running', weight)
  redis.call('hset', job_weights_key, index, weight)
  if expiration ~= nil then
    redis.call('zadd', job_expirations_key, now + expiration, index)
  end
  redis.call('hset', job_clients_key, index, client)
  redis.call('zincrby', client_running_key, weight, client)
  redis.call('hincrby', client_num_queued_key, client, -1)
  redis.call('zadd', client_last_registered_key, now, client)

  local wait = math.max(nextRequest - now, 0)
  local newNextRequest = now + wait + minTime

  if reservoir == nil then
    redis.call('hset', settings_key,
      'nextRequest', newNextRequest
    )
  else
    reservoir = reservoir - weight
    redis.call('hmset', settings_key,
      'reservoir', reservoir,
      'nextRequest', newNextRequest
    )
  end

  refresh_expiration(now, newNextRequest, groupTimeout)

  return {true, wait, reservoir}

else
  return {false}
end
`,"register_client.lua":`local queued = tonumber(ARGV[num_static_argv + 1])

-- Could have been re-registered concurrently
if not redis.call('zscore', client_last_seen_key, client) then
  redis.call('zadd', client_running_key, 0, client)
  redis.call('hset', client_num_queued_key, client, queued)
  redis.call('zadd', client_last_registered_key, 0, client)
end

redis.call('zadd', client_last_seen_key, now, client)

return {}
`,"running.lua":`return process_tick(now, false)['running']
`,"submit.lua":`local queueLength = tonumber(ARGV[num_static_argv + 1])
local weight = tonumber(ARGV[num_static_argv + 2])

local capacity = process_tick(now, false)['capacity']

local settings = redis.call('hmget', settings_key,
  'id',
  'maxConcurrent',
  'highWater',
  'nextRequest',
  'strategy',
  'unblockTime',
  'penalty',
  'minTime',
  'groupTimeout'
)
local id = settings[1]
local maxConcurrent = tonumber(settings[2])
local highWater = tonumber(settings[3])
local nextRequest = tonumber(settings[4])
local strategy = tonumber(settings[5])
local unblockTime = tonumber(settings[6])
local penalty = tonumber(settings[7])
local minTime = tonumber(settings[8])
local groupTimeout = tonumber(settings[9])

if maxConcurrent ~= nil and weight > maxConcurrent then
  return redis.error_reply('OVERWEIGHT:'..weight..':'..maxConcurrent)
end

local reachedHWM = (highWater ~= nil and queueLength == highWater
  and not (
    conditions_check(capacity, weight)
    and nextRequest - now <= 0
  )
)

local blocked = strategy == 3 and (reachedHWM or unblockTime >= now)

if blocked then
  local computedPenalty = penalty
  if computedPenalty == nil then
    if minTime == 0 then
      computedPenalty = 5000
    else
      computedPenalty = 15 * minTime
    end
  end

  local newNextRequest = now + computedPenalty + minTime

  redis.call('hmset', settings_key,
    'unblockTime', now + computedPenalty,
    'nextRequest', newNextRequest
  )

  local clients_queued_reset = redis.call('hkeys', client_num_queued_key)
  local queued_reset = {}
  for i = 1, #clients_queued_reset do
    table.insert(queued_reset, clients_queued_reset[i])
    table.insert(queued_reset, 0)
  end
  redis.call('hmset', client_num_queued_key, unpack(queued_reset))

  redis.call('publish', 'b_'..id, 'blocked:')

  refresh_expiration(now, newNextRequest, groupTimeout)
end

if not blocked and not reachedHWM then
  redis.call('hincrby', client_num_queued_key, client, 1)
end

return {reachedHWM, blocked, strategy}
`,"update_settings.lua":`local args = {'hmset', settings_key}

for i = num_static_argv + 1, #ARGV do
  table.insert(args, ARGV[i])
end

redis.call(unpack(args))

process_tick(now, true)

local groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))
refresh_expiration(0, 0, groupTimeout)

return {}
`,"validate_client.lua":`if not redis.call('zscore', client_last_seen_key, client) then
  return redis.error_reply('UNKNOWN_CLIENT')
end

redis.call('zadd', client_last_seen_key, now, client)
`,"validate_keys.lua":`if not (redis.call('exists', settings_key) == 1) then
  return redis.error_reply('SETTINGS_KEY_NOT_FOUND')
end
`};(function(n){var t,e,r;e=require$$0,t={refs:e["refs.lua"],validate_keys:e["validate_keys.lua"],validate_client:e["validate_client.lua"],refresh_expiration:e["refresh_expiration.lua"],process_tick:e["process_tick.lua"],conditions_check:e["conditions_check.lua"],get_time:e["get_time.lua"]},n.allKeys=function(i){return[`b_${i}_settings`,`b_${i}_job_weights`,`b_${i}_job_expirations`,`b_${i}_job_clients`,`b_${i}_client_running`,`b_${i}_client_num_queued`,`b_${i}_client_last_registered`,`b_${i}_client_last_seen`]},r={init:{keys:n.allKeys,headers:["process_tick"],refresh_expiration:!0,code:e["init.lua"]},group_check:{keys:n.allKeys,headers:[],refresh_expiration:!1,code:e["group_check.lua"]},register_client:{keys:n.allKeys,headers:["validate_keys"],refresh_expiration:!1,code:e["register_client.lua"]},blacklist_client:{keys:n.allKeys,headers:["validate_keys","validate_client"],refresh_expiration:!1,code:e["blacklist_client.lua"]},heartbeat:{keys:n.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:e["heartbeat.lua"]},update_settings:{keys:n.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!0,code:e["update_settings.lua"]},running:{keys:n.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:e["running.lua"]},queued:{keys:n.allKeys,headers:["validate_keys","validate_client"],refresh_expiration:!1,code:e["queued.lua"]},done:{keys:n.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:e["done.lua"]},check:{keys:n.allKeys,headers:["validate_keys","validate_client","process_tick","conditions_check"],refresh_expiration:!1,code:e["check.lua"]},submit:{keys:n.allKeys,headers:["validate_keys","validate_client","process_tick","conditions_check"],refresh_expiration:!0,code:e["submit.lua"]},register:{keys:n.allKeys,headers:["validate_keys","validate_client","process_tick","conditions_check"],refresh_expiration:!0,code:e["register.lua"]},free:{keys:n.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!0,code:e["free.lua"]},current_reservoir:{keys:n.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:e["current_reservoir.lua"]},increment_reservoir:{keys:n.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!0,code:e["increment_reservoir.lua"]}},n.names=Object.keys(r),n.keys=function(i,s){return r[i].keys(s)},n.payload=function(i){var s;return s=r[i],Array.prototype.concat(t.refs,s.headers.map(function(o){return t[o]}),s.refresh_expiration?t.refresh_expiration:"",s.code).join(`
`)}})(Scripts$2);function asyncGeneratorStep$3(n,t,e,r,i,s,o){try{var a=n[s](o),c=a.value}catch(d){e(d);return}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator$3(n){return function(){var t=this,e=arguments;return new Promise(function(r,i){var s=n.apply(t,e);function o(c){asyncGeneratorStep$3(s,r,i,o,a,"next",c)}function a(c){asyncGeneratorStep$3(s,r,i,o,a,"throw",c)}o(void 0)})}}var Events$1,RedisConnection$1,Scripts$1,parser$2;parser$2=parser$5;Events$1=Events_1;Scripts$1=Scripts$2;RedisConnection$1=(function(){class RedisConnection{constructor(options={}){parser$2.load(options,this.defaults,this),this.Redis==null&&(this.Redis=eval("require")("redis")),this.Events==null&&(this.Events=new Events$1(this)),this.terminated=!1,this.client==null&&(this.client=this.Redis.createClient(this.clientOptions)),this.subscriber=this.client.duplicate(),this.limiters={},this.shas={},this.ready=this.Promise.all([this._setup(this.client,!1),this._setup(this.subscriber,!0)]).then(()=>this._loadScripts()).then(()=>({client:this.client,subscriber:this.subscriber}))}_setup(n,t){return n.setMaxListeners(0),new this.Promise((e,r)=>(n.on("error",i=>this.Events.trigger("error",i)),t&&n.on("message",(i,s)=>{var o;return(o=this.limiters[i])!=null?o._store.onMessage(i,s):void 0}),n.ready?e():n.once("ready",e)))}_loadScript(n){return new this.Promise((t,e)=>{var r;return r=Scripts$1.payload(n),this.client.multi([["script","load",r]]).exec((i,s)=>i!=null?e(i):(this.shas[n]=s[0],t(s[0])))})}_loadScripts(){return this.Promise.all(Scripts$1.names.map(n=>this._loadScript(n)))}__runCommand__(n){var t=this;return _asyncToGenerator$3(function*(){return yield t.ready,new t.Promise((e,r)=>t.client.multi([n]).exec_atomic(function(i,s){return i!=null?r(i):e(s[0])}))})()}__addLimiter__(n){return this.Promise.all([n.channel(),n.channel_client()].map(t=>new this.Promise((e,r)=>{var i;return i=s=>{if(s===t)return this.subscriber.removeListener("subscribe",i),this.limiters[t]=n,e()},this.subscriber.on("subscribe",i),this.subscriber.subscribe(t)})))}__removeLimiter__(n){var t=this;return this.Promise.all([n.channel(),n.channel_client()].map(function(){var e=_asyncToGenerator$3(function*(r){return t.terminated||(yield new t.Promise((i,s)=>t.subscriber.unsubscribe(r,function(o,a){if(o!=null)return s(o);if(a===r)return i()}))),delete t.limiters[r]});return function(r){return e.apply(this,arguments)}}()))}__scriptArgs__(n,t,e,r){var i;return i=Scripts$1.keys(n,t),[this.shas[n],i.length].concat(i,e,r)}__scriptFn__(n){return this.client.evalsha.bind(this.client)}disconnect(n=!0){var t,e,r,i;for(i=Object.keys(this.limiters),t=0,r=i.length;t<r;t++)e=i[t],clearInterval(this.limiters[e]._store.heartbeat);return this.limiters={},this.terminated=!0,this.client.end(n),this.subscriber.end(n),this.Promise.resolve()}}return RedisConnection.prototype.datastore="redis",RedisConnection.prototype.defaults={Redis:null,clientOptions:{},client:null,Promise,Events:null},RedisConnection}).call(void 0);var RedisConnection_1=RedisConnection$1;function _slicedToArray$1(n,t){return _arrayWithHoles$1(n)||_iterableToArrayLimit$1(n,t)||_nonIterableRest$1()}function _nonIterableRest$1(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit$1(n,t){var e=[],r=!0,i=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(e.push(a.value),!(t&&e.length===t));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return e}function _arrayWithHoles$1(n){if(Array.isArray(n))return n}function asyncGeneratorStep$2(n,t,e,r,i,s,o){try{var a=n[s](o),c=a.value}catch(d){e(d);return}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator$2(n){return function(){var t=this,e=arguments;return new Promise(function(r,i){var s=n.apply(t,e);function o(c){asyncGeneratorStep$2(s,r,i,o,a,"next",c)}function a(c){asyncGeneratorStep$2(s,r,i,o,a,"throw",c)}o(void 0)})}}var Events,IORedisConnection$1,Scripts,parser$1;parser$1=parser$5;Events=Events_1;Scripts=Scripts$2;IORedisConnection$1=(function(){class IORedisConnection{constructor(options={}){parser$1.load(options,this.defaults,this),this.Redis==null&&(this.Redis=eval("require")("ioredis")),this.Events==null&&(this.Events=new Events(this)),this.terminated=!1,this.clusterNodes!=null?(this.client=new this.Redis.Cluster(this.clusterNodes,this.clientOptions),this.subscriber=new this.Redis.Cluster(this.clusterNodes,this.clientOptions)):this.client!=null&&this.client.duplicate==null?this.subscriber=new this.Redis.Cluster(this.client.startupNodes,this.client.options):(this.client==null&&(this.client=new this.Redis(this.clientOptions)),this.subscriber=this.client.duplicate()),this.limiters={},this.ready=this.Promise.all([this._setup(this.client,!1),this._setup(this.subscriber,!0)]).then(()=>(this._loadScripts(),{client:this.client,subscriber:this.subscriber}))}_setup(n,t){return n.setMaxListeners(0),new this.Promise((e,r)=>(n.on("error",i=>this.Events.trigger("error",i)),t&&n.on("message",(i,s)=>{var o;return(o=this.limiters[i])!=null?o._store.onMessage(i,s):void 0}),n.status==="ready"?e():n.once("ready",e)))}_loadScripts(){return Scripts.names.forEach(n=>this.client.defineCommand(n,{lua:Scripts.payload(n)}))}__runCommand__(n){var t=this;return _asyncToGenerator$2(function*(){var e;yield t.ready;var r=yield t.client.pipeline([n]).exec(),i=_slicedToArray$1(r,1),s=_slicedToArray$1(i[0],2);return s[0],e=s[1],e})()}__addLimiter__(n){return this.Promise.all([n.channel(),n.channel_client()].map(t=>new this.Promise((e,r)=>this.subscriber.subscribe(t,()=>(this.limiters[t]=n,e())))))}__removeLimiter__(n){var t=this;return[n.channel(),n.channel_client()].forEach(function(){var e=_asyncToGenerator$2(function*(r){return t.terminated||(yield t.subscriber.unsubscribe(r)),delete t.limiters[r]});return function(r){return e.apply(this,arguments)}}())}__scriptArgs__(n,t,e,r){var i;return i=Scripts.keys(n,t),[i.length].concat(i,e,r)}__scriptFn__(n){return this.client[n].bind(this.client)}disconnect(n=!0){var t,e,r,i;for(i=Object.keys(this.limiters),t=0,r=i.length;t<r;t++)e=i[t],clearInterval(this.limiters[e]._store.heartbeat);return this.limiters={},this.terminated=!0,n?this.Promise.all([this.client.quit(),this.subscriber.quit()]):(this.client.disconnect(),this.subscriber.disconnect(),this.Promise.resolve())}}return IORedisConnection.prototype.datastore="ioredis",IORedisConnection.prototype.defaults={Redis:null,clientOptions:{},clusterNodes:null,client:null,Promise,Events:null},IORedisConnection}).call(void 0);var IORedisConnection_1=IORedisConnection$1;function _slicedToArray(n,t){return _arrayWithHoles(n)||_iterableToArrayLimit(n,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(n,t){var e=[],r=!0,i=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(e.push(a.value),!(t&&e.length===t));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return e}function _arrayWithHoles(n){if(Array.isArray(n))return n}function asyncGeneratorStep$1(n,t,e,r,i,s,o){try{var a=n[s](o),c=a.value}catch(d){e(d);return}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator$1(n){return function(){var t=this,e=arguments;return new Promise(function(r,i){var s=n.apply(t,e);function o(c){asyncGeneratorStep$1(s,r,i,o,a,"next",c)}function a(c){asyncGeneratorStep$1(s,r,i,o,a,"throw",c)}o(void 0)})}}var BottleneckError$1,IORedisConnection,RedisConnection,RedisDatastore,parser;parser=parser$5;BottleneckError$1=BottleneckError_1;RedisConnection=RedisConnection_1;IORedisConnection=IORedisConnection_1;RedisDatastore=class{constructor(t,e,r){this.instance=t,this.storeOptions=e,this.originalId=this.instance.id,this.clientId=this.instance._randomIndex(),parser.load(r,r,this),this.clients={},this.capacityPriorityCounters={},this.sharedConnection=this.connection!=null,this.connection==null&&(this.connection=this.instance.datastore==="redis"?new RedisConnection({Redis:this.Redis,clientOptions:this.clientOptions,Promise:this.Promise,Events:this.instance.Events}):this.instance.datastore==="ioredis"?new IORedisConnection({Redis:this.Redis,clientOptions:this.clientOptions,clusterNodes:this.clusterNodes,Promise:this.Promise,Events:this.instance.Events}):void 0),this.instance.connection=this.connection,this.instance.datastore=this.connection.datastore,this.ready=this.connection.ready.then(i=>(this.clients=i,this.runScript("init",this.prepareInitSettings(this.clearDatastore)))).then(()=>this.connection.__addLimiter__(this.instance)).then(()=>this.runScript("register_client",[this.instance.queued()])).then(()=>{var i;return typeof(i=this.heartbeat=setInterval(()=>this.runScript("heartbeat",[]).catch(s=>this.instance.Events.trigger("error",s)),this.heartbeatInterval)).unref=="function"&&i.unref(),this.clients})}__publish__(t){var e=this;return _asyncToGenerator$1(function*(){var r,i=yield e.ready;return r=i.client,r.publish(e.instance.channel(),`message:${t.toString()}`)})()}onMessage(t,e){var r=this;return _asyncToGenerator$1(function*(){var i,s,o,a,c,d,l,h,f,b;try{l=e.indexOf(":");var p=[e.slice(0,l),e.slice(l+1)];if(b=p[0],o=p[1],b==="capacity")return yield r.instance._drainAll(o.length>0?~~o:void 0);if(b==="capacity-priority"){var y=o.split(":"),w=_slicedToArray(y,3);return f=w[0],h=w[1],s=w[2],i=f.length>0?~~f:void 0,h===r.clientId?(a=yield r.instance._drainAll(i),d=i!=null?i-(a||0):"",yield r.clients.client.publish(r.instance.channel(),`capacity-priority:${d}::${s}`)):h===""?(clearTimeout(r.capacityPriorityCounters[s]),delete r.capacityPriorityCounters[s],r.instance._drainAll(i)):r.capacityPriorityCounters[s]=setTimeout(_asyncToGenerator$1(function*(){var k;try{return delete r.capacityPriorityCounters[s],yield r.runScript("blacklist_client",[h]),yield r.instance._drainAll(i)}catch(R){return k=R,r.instance.Events.trigger("error",k)}}),1e3)}else{if(b==="message")return r.instance.Events.trigger("message",o);if(b==="blocked")return yield r.instance._dropAllQueued()}}catch(k){return c=k,r.instance.Events.trigger("error",c)}})()}__disconnect__(t){return clearInterval(this.heartbeat),this.sharedConnection?this.connection.__removeLimiter__(this.instance):this.connection.disconnect(t)}runScript(t,e){var r=this;return _asyncToGenerator$1(function*(){return t==="init"||t==="register_client"||(yield r.ready),new r.Promise((i,s)=>{var o,a;return o=[Date.now(),r.clientId].concat(e),r.instance.Events.trigger("debug",`Calling Redis script: ${t}.lua`,o),a=r.connection.__scriptArgs__(t,r.originalId,o,function(c,d){return c!=null?s(c):i(d)}),r.connection.__scriptFn__(t)(...a)}).catch(i=>i.message==="SETTINGS_KEY_NOT_FOUND"?t==="heartbeat"?r.Promise.resolve():r.runScript("init",r.prepareInitSettings(!1)).then(()=>r.runScript(t,e)):i.message==="UNKNOWN_CLIENT"?r.runScript("register_client",[r.instance.queued()]).then(()=>r.runScript(t,e)):r.Promise.reject(i))})()}prepareArray(t){var e,r,i,s;for(i=[],e=0,r=t.length;e<r;e++)s=t[e],i.push(s!=null?s.toString():"");return i}prepareObject(t){var e,r,i;e=[];for(r in t)i=t[r],e.push(r,i!=null?i.toString():"");return e}prepareInitSettings(t){var e;return e=this.prepareObject(Object.assign({},this.storeOptions,{id:this.originalId,version:this.instance.version,groupTimeout:this.timeout,clientTimeout:this.clientTimeout})),e.unshift(t?1:0,this.instance.version),e}convertBool(t){return!!t}__updateSettings__(t){var e=this;return _asyncToGenerator$1(function*(){return yield e.runScript("update_settings",e.prepareObject(t)),parser.overwrite(t,t,e.storeOptions)})()}__running__(){return this.runScript("running",[])}__queued__(){return this.runScript("queued",[])}__done__(){return this.runScript("done",[])}__groupCheck__(){var t=this;return _asyncToGenerator$1(function*(){return t.convertBool(yield t.runScript("group_check",[]))})()}__incrementReservoir__(t){return this.runScript("increment_reservoir",[t])}__currentReservoir__(){return this.runScript("current_reservoir",[])}__check__(t){var e=this;return _asyncToGenerator$1(function*(){return e.convertBool(yield e.runScript("check",e.prepareArray([t])))})()}__register__(t,e,r){var i=this;return _asyncToGenerator$1(function*(){var s,o,a,c=yield i.runScript("register",i.prepareArray([t,e,r])),d=_slicedToArray(c,3);return o=d[0],a=d[1],s=d[2],{success:i.convertBool(o),wait:a,reservoir:s}})()}__submit__(t,e){var r=this;return _asyncToGenerator$1(function*(){var i,s,o,a,c;try{var d=yield r.runScript("submit",r.prepareArray([t,e])),l=_slicedToArray(d,3);return a=l[0],i=l[1],c=l[2],{reachedHWM:r.convertBool(a),blocked:r.convertBool(i),strategy:c}}catch(b){if(s=b,s.message.indexOf("OVERWEIGHT")===0){var h=s.message.split(":"),f=_slicedToArray(h,3);throw f[0],e=f[1],o=f[2],new BottleneckError$1(`Impossible to add a job having a weight of ${e} to a limiter having a maxConcurrent setting of ${o}`)}else throw s}})()}__free__(t,e){var r=this;return _asyncToGenerator$1(function*(){var i;return i=yield r.runScript("free",r.prepareArray([t])),{running:i}})()}};var RedisDatastore_1=RedisDatastore,BottleneckError,States;BottleneckError=BottleneckError_1;States=class{constructor(t){this.status=t,this._jobs={},this.counts=this.status.map(function(){return 0})}next(t){var e,r;if(e=this._jobs[t],r=e+1,e!=null&&r<this.status.length)return this.counts[e]--,this.counts[r]++,this._jobs[t]++;if(e!=null)return this.counts[e]--,delete this._jobs[t]}start(t){var e;return e=0,this._jobs[t]=e,this.counts[e]++}remove(t){var e;return e=this._jobs[t],e!=null&&(this.counts[e]--,delete this._jobs[t]),e!=null}jobStatus(t){var e;return(e=this.status[this._jobs[t]])!=null?e:null}statusJobs(t){var e,r,i,s,o;if(t!=null){if(r=this.status.indexOf(t),r<0)throw new BottleneckError(`status must be one of ${this.status.join(", ")}`);i=this._jobs,s=[];for(e in i)o=i[e],o===r&&s.push(e);return s}else return Object.keys(this._jobs)}statusCounts(){return this.counts.reduce((t,e,r)=>(t[this.status[r]]=e,t),{})}};var States_1=States;function asyncGeneratorStep(n,t,e,r,i,s,o){try{var a=n[s](o),c=a.value}catch(d){e(d);return}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,i){var s=n.apply(t,e);function o(c){asyncGeneratorStep(s,r,i,o,a,"next",c)}function a(c){asyncGeneratorStep(s,r,i,o,a,"throw",c)}o(void 0)})}}var DLList,Sync;DLList=DLList_1;Sync=class{constructor(t,e){this.schedule=this.schedule.bind(this),this.name=t,this.Promise=e,this._running=0,this._queue=new DLList}isEmpty(){return this._queue.length===0}_tryToRun(){var t=this;return _asyncToGenerator(function*(){var e,r,i,s,o,a,c;if(t._running<1&&t._queue.length>0){t._running++;var d=t._queue.shift();return c=d.task,e=d.args,o=d.resolve,s=d.reject,r=yield _asyncToGenerator(function*(){try{return a=yield c(...e),function(){return o(a)}}catch(l){return i=l,function(){return s(i)}}})(),t._running--,t._tryToRun(),r()}})()}schedule(t,...e){var r,i,s;return s=i=null,r=new this.Promise(function(o,a){return s=o,i=a}),this._queue.push({task:t,args:e,resolve:s,reject:i}),this._tryToRun(),r}};var Sync_1=Sync;const version="2.19.5",require$$8={version};var Group_1,hasRequiredGroup;function requireGroup(){if(hasRequiredGroup)return Group_1;hasRequiredGroup=1;function n(f,b){return r(f)||e(f,b)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(f,b){var p=[],y=!0,w=!1,k=void 0;try{for(var R=f[Symbol.iterator](),g;!(y=(g=R.next()).done)&&(p.push(g.value),!(b&&p.length===b));y=!0);}catch(_){w=!0,k=_}finally{try{!y&&R.return!=null&&R.return()}finally{if(w)throw k}}return p}function r(f){if(Array.isArray(f))return f}function i(f,b,p,y,w,k,R){try{var g=f[k](R),_=g.value}catch(I){p(I);return}g.done?b(_):Promise.resolve(_).then(y,w)}function s(f){return function(){var b=this,p=arguments;return new Promise(function(y,w){var k=f.apply(b,p);function R(_){i(k,y,w,R,g,"next",_)}function g(_){i(k,y,w,R,g,"throw",_)}R(void 0)})}}var o,a,c,d,l,h;return h=parser$5,o=Events_1,d=RedisConnection_1,c=IORedisConnection_1,l=Scripts$2,a=(function(){class f{constructor(p={}){this.deleteKey=this.deleteKey.bind(this),this.limiterOptions=p,h.load(this.limiterOptions,this.defaults,this),this.Events=new o(this),this.instances={},this.Bottleneck=requireBottleneck(),this._startAutoCleanup(),this.sharedConnection=this.connection!=null,this.connection==null&&(this.limiterOptions.datastore==="redis"?this.connection=new d(Object.assign({},this.limiterOptions,{Events:this.Events})):this.limiterOptions.datastore==="ioredis"&&(this.connection=new c(Object.assign({},this.limiterOptions,{Events:this.Events}))))}key(p=""){var y;return(y=this.instances[p])!=null?y:(()=>{var w;return w=this.instances[p]=new this.Bottleneck(Object.assign(this.limiterOptions,{id:`${this.id}-${p}`,timeout:this.timeout,connection:this.connection})),this.Events.trigger("created",w,p),w})()}deleteKey(p=""){var y=this;return s(function*(){var w,k;return k=y.instances[p],y.connection&&(w=yield y.connection.__runCommand__(["del",...l.allKeys(`${y.id}-${p}`)])),k!=null&&(delete y.instances[p],yield k.disconnect()),k!=null||w>0})()}limiters(){var p,y,w,k;y=this.instances,w=[];for(p in y)k=y[p],w.push({key:p,limiter:k});return w}keys(){return Object.keys(this.instances)}clusterKeys(){var p=this;return s(function*(){var y,w,k,R,g,_,I,u,v;if(p.connection==null)return p.Promise.resolve(p.keys());for(_=[],y=null,v=`b_${p.id}-`.length,w=9;y!==0;){var C=yield p.connection.__runCommand__(["scan",y??0,"match",`b_${p.id}-*_settings`,"count",1e4]),E=n(C,2);for(u=E[0],k=E[1],y=~~u,R=0,I=k.length;R<I;R++)g=k[R],_.push(g.slice(v,-w))}return _})()}_startAutoCleanup(){var p=this,y;return clearInterval(this.interval),typeof(y=this.interval=setInterval(s(function*(){var w,k,R,g,_,I;_=Date.now(),R=p.instances,g=[];for(k in R){I=R[k];try{(yield I._store.__groupCheck__(_))?g.push(p.deleteKey(k)):g.push(void 0)}catch(u){w=u,g.push(I.Events.trigger("error",w))}}return g}),this.timeout/2)).unref=="function"?y.unref():void 0}updateSettings(p={}){if(h.overwrite(p,this.defaults,this),h.overwrite(p,p,this.limiterOptions),p.timeout!=null)return this._startAutoCleanup()}disconnect(p=!0){var y;if(!this.sharedConnection)return(y=this.connection)!=null?y.disconnect(p):void 0}}return f.prototype.defaults={timeout:1e3*60*5,connection:null,Promise,id:"group-key"},f}).call(void 0),Group_1=a,Group_1}var Batcher_1,hasRequiredBatcher;function requireBatcher(){if(hasRequiredBatcher)return Batcher_1;hasRequiredBatcher=1;var n,t,e;return e=parser$5,t=Events_1,n=(function(){class r{constructor(s={}){this.options=s,e.load(this.options,this.defaults,this),this.Events=new t(this),this._arr=[],this._resetPromise(),this._lastFlush=Date.now()}_resetPromise(){return this._promise=new this.Promise((s,o)=>this._resolve=s)}_flush(){return clearTimeout(this._timeout),this._lastFlush=Date.now(),this._resolve(),this.Events.trigger("batch",this._arr),this._arr=[],this._resetPromise()}add(s){var o;return this._arr.push(s),o=this._promise,this._arr.length===this.maxSize?this._flush():this.maxTime!=null&&this._arr.length===1&&(this._timeout=setTimeout(()=>this._flush(),this.maxTime)),o}}return r.prototype.defaults={maxTime:null,maxSize:null,Promise},r}).call(void 0),Batcher_1=n,Batcher_1}var Bottleneck_1,hasRequiredBottleneck;function requireBottleneck(){if(hasRequiredBottleneck)return Bottleneck_1;hasRequiredBottleneck=1;function n(_,I){return s(_)||t(_,I)||r()}function t(_,I){var u=[],v=!0,C=!1,E=void 0;try{for(var m=_[Symbol.iterator](),T;!(v=(T=m.next()).done)&&(u.push(T.value),!(I&&u.length===I));v=!0);}catch(x){C=!0,E=x}finally{try{!v&&m.return!=null&&m.return()}finally{if(C)throw E}}return u}function e(_){return s(_)||i(_)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(_){if(Symbol.iterator in Object(_)||Object.prototype.toString.call(_)==="[object Arguments]")return Array.from(_)}function s(_){if(Array.isArray(_))return _}function o(_,I,u,v,C,E,m){try{var T=_[E](m),x=T.value}catch(S){u(S);return}T.done?I(x):Promise.resolve(x).then(v,C)}function a(_){return function(){var I=this,u=arguments;return new Promise(function(v,C){var E=_.apply(I,u);function m(x){o(E,v,C,m,T,"next",x)}function T(x){o(E,v,C,m,T,"throw",x)}m(void 0)})}}var c,d,l,h,f,b,p,y,w,k,R,g=[].splice;return b=10,d=5,R=parser$5,p=Queues_1,h=Job_1,f=LocalDatastore_1,y=RedisDatastore_1,l=Events_1,w=States_1,k=Sync_1,c=(function(){class _{constructor(u={},...v){var C,E;this._addToQueue=this._addToQueue.bind(this),this._validateOptions(u,v),R.load(u,this.instanceDefaults,this),this._queues=new p(b),this._scheduled={},this._states=new w(["RECEIVED","QUEUED","RUNNING","EXECUTING"].concat(this.trackDoneStatus?["DONE"]:[])),this._limiter=null,this.Events=new l(this),this._submitLock=new k("submit",this.Promise),this._registerLock=new k("register",this.Promise),E=R.load(u,this.storeDefaults,{}),this._store=(function(){if(this.datastore==="redis"||this.datastore==="ioredis"||this.connection!=null)return C=R.load(u,this.redisStoreDefaults,{}),new y(this,E,C);if(this.datastore==="local")return C=R.load(u,this.localStoreDefaults,{}),new f(this,E,C);throw new _.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`)}).call(this),this._queues.on("leftzero",()=>{var m;return(m=this._store.heartbeat)!=null&&typeof m.ref=="function"?m.ref():void 0}),this._queues.on("zero",()=>{var m;return(m=this._store.heartbeat)!=null&&typeof m.unref=="function"?m.unref():void 0})}_validateOptions(u,v){if(!(u!=null&&typeof u=="object"&&v.length===0))throw new _.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.")}ready(){return this._store.ready}clients(){return this._store.clients}channel(){return`b_${this.id}`}channel_client(){return`b_${this.id}_${this._store.clientId}`}publish(u){return this._store.__publish__(u)}disconnect(u=!0){return this._store.__disconnect__(u)}chain(u){return this._limiter=u,this}queued(u){return this._queues.queued(u)}clusterQueued(){return this._store.__queued__()}empty(){return this.queued()===0&&this._submitLock.isEmpty()}running(){return this._store.__running__()}done(){return this._store.__done__()}jobStatus(u){return this._states.jobStatus(u)}jobs(u){return this._states.statusJobs(u)}counts(){return this._states.statusCounts()}_randomIndex(){return Math.random().toString(36).slice(2)}check(u=1){return this._store.__check__(u)}_clearGlobalState(u){return this._scheduled[u]!=null?(clearTimeout(this._scheduled[u].expiration),delete this._scheduled[u],!0):!1}_free(u,v,C,E){var m=this;return a(function*(){var T,x;try{var S=yield m._store.__free__(u,C.weight);if(x=S.running,m.Events.trigger("debug",`Freed ${C.id}`,E),x===0&&m.empty())return m.Events.trigger("idle")}catch(A){return T=A,m.Events.trigger("error",T)}})()}_run(u,v,C){var E,m,T;return v.doRun(),E=this._clearGlobalState.bind(this,u),T=this._run.bind(this,u,v),m=this._free.bind(this,u,v),this._scheduled[u]={timeout:setTimeout(()=>v.doExecute(this._limiter,E,T,m),C),expiration:v.options.expiration!=null?setTimeout(function(){return v.doExpire(E,T,m)},C+v.options.expiration):void 0,job:v}}_drainOne(u){return this._registerLock.schedule(()=>{var v,C,E,m,T;if(this.queued()===0)return this.Promise.resolve(null);T=this._queues.getFirst();var x=E=T.first();return m=x.options,v=x.args,u!=null&&m.weight>u?this.Promise.resolve(null):(this.Events.trigger("debug",`Draining ${m.id}`,{args:v,options:m}),C=this._randomIndex(),this._store.__register__(C,m.weight,m.expiration).then(({success:S,wait:A,reservoir:O})=>{var $;return this.Events.trigger("debug",`Drained ${m.id}`,{success:S,args:v,options:m}),S?(T.shift(),$=this.empty(),$&&this.Events.trigger("empty"),O===0&&this.Events.trigger("depleted",$),this._run(C,E,A),this.Promise.resolve(m.weight)):this.Promise.resolve(null)}))})}_drainAll(u,v=0){return this._drainOne(u).then(C=>{var E;return C!=null?(E=u!=null?u-C:u,this._drainAll(E,v+C)):this.Promise.resolve(v)}).catch(C=>this.Events.trigger("error",C))}_dropAllQueued(u){return this._queues.shiftAll(function(v){return v.doDrop({message:u})})}stop(u={}){var v,C;return u=R.load(u,this.stopDefaults),C=E=>{var m;return m=()=>{var T;return T=this._states.counts,T[0]+T[1]+T[2]+T[3]===E},new this.Promise((T,x)=>m()?T():this.on("done",()=>{if(m())return this.removeAllListeners("done"),T()}))},v=u.dropWaitingJobs?(this._run=function(E,m){return m.doDrop({message:u.dropErrorMessage})},this._drainOne=()=>this.Promise.resolve(null),this._registerLock.schedule(()=>this._submitLock.schedule(()=>{var E,m,T;m=this._scheduled;for(E in m)T=m[E],this.jobStatus(T.job.options.id)==="RUNNING"&&(clearTimeout(T.timeout),clearTimeout(T.expiration),T.job.doDrop({message:u.dropErrorMessage}));return this._dropAllQueued(u.dropErrorMessage),C(0)}))):this.schedule({priority:b-1,weight:0},()=>C(1)),this._receive=function(E){return E._reject(new _.prototype.BottleneckError(u.enqueueErrorMessage))},this.stop=()=>this.Promise.reject(new _.prototype.BottleneckError("stop() has already been called")),v}_addToQueue(u){var v=this;return a(function*(){var C,E,m,T,x,S,A;C=u.args,T=u.options;try{var O=yield v._store.__submit__(v.queued(),T.weight);x=O.reachedHWM,E=O.blocked,A=O.strategy}catch($){return m=$,v.Events.trigger("debug",`Could not queue ${T.id}`,{args:C,options:T,error:m}),u.doDrop({error:m}),!1}return E?(u.doDrop(),!0):x&&(S=A===_.prototype.strategy.LEAK?v._queues.shiftLastFrom(T.priority):A===_.prototype.strategy.OVERFLOW_PRIORITY?v._queues.shiftLastFrom(T.priority+1):A===_.prototype.strategy.OVERFLOW?u:void 0,S!=null&&S.doDrop(),S==null||A===_.prototype.strategy.OVERFLOW)?(S==null&&u.doDrop(),x):(u.doQueue(x,E),v._queues.push(u),yield v._drainAll(),x)})()}_receive(u){return this._states.jobStatus(u.options.id)!=null?(u._reject(new _.prototype.BottleneckError(`A job with the same id already exists (id=${u.options.id})`)),!1):(u.doReceive(),this._submitLock.schedule(this._addToQueue,u))}submit(...u){var v,C,E,m,T,x,S;if(typeof u[0]=="function"){var A,O,$,L;T=u,A=T,O=e(A),C=O[0],u=O.slice(1),$=g.call(u,-1),L=n($,1),v=L[0],m=R.load({},this.jobDefaults)}else{var G,D,F,q;x=u,G=x,D=e(G),m=D[0],C=D[1],u=D.slice(2),F=g.call(u,-1),q=n(F,1),v=q[0],m=R.load(m,this.jobDefaults)}return S=(...P)=>new this.Promise(function(j,M){return C(...P,function(...N){return(N[0]!=null?M:j)(N)})}),E=new h(S,u,m,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),E.promise.then(function(P){return typeof v=="function"?v(...P):void 0}).catch(function(P){return Array.isArray(P)?typeof v=="function"?v(...P):void 0:typeof v=="function"?v(P):void 0}),this._receive(E)}schedule(...u){var v,C,E;if(typeof u[0]=="function"){var m=u,T=e(m);E=T[0],u=T.slice(1),C={}}else{var x=u,S=e(x);C=S[0],E=S[1],u=S.slice(2)}return v=new h(E,u,C,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),this._receive(v),v.promise}wrap(u){var v,C;return v=this.schedule.bind(this),C=function(...m){return v(u.bind(this),...m)},C.withOptions=function(E,...m){return v(E,u,...m)},C}updateSettings(u={}){var v=this;return a(function*(){return yield v._store.__updateSettings__(R.overwrite(u,v.storeDefaults)),R.overwrite(u,v.instanceDefaults,v),v})()}currentReservoir(){return this._store.__currentReservoir__()}incrementReservoir(u=0){return this._store.__incrementReservoir__(u)}}return _.default=_,_.Events=l,_.version=_.prototype.version=require$$8.version,_.strategy=_.prototype.strategy={LEAK:1,OVERFLOW:2,OVERFLOW_PRIORITY:4,BLOCK:3},_.BottleneckError=_.prototype.BottleneckError=BottleneckError_1,_.Group=_.prototype.Group=requireGroup(),_.RedisConnection=_.prototype.RedisConnection=RedisConnection_1,_.IORedisConnection=_.prototype.IORedisConnection=IORedisConnection_1,_.Batcher=_.prototype.Batcher=requireBatcher(),_.prototype.jobDefaults={priority:d,weight:1,expiration:null,id:"<no-id>"},_.prototype.storeDefaults={maxConcurrent:null,minTime:0,highWater:null,strategy:_.prototype.strategy.LEAK,penalty:null,reservoir:null,reservoirRefreshInterval:null,reservoirRefreshAmount:null,reservoirIncreaseInterval:null,reservoirIncreaseAmount:null,reservoirIncreaseMaximum:null},_.prototype.localStoreDefaults={Promise,timeout:null,heartbeatInterval:250},_.prototype.redisStoreDefaults={Promise,timeout:null,heartbeatInterval:5e3,clientTimeout:1e4,Redis:null,clientOptions:{},clusterNodes:null,clearDatastore:!1,connection:null},_.prototype.instanceDefaults={datastore:"local",connection:null,id:"<no-id>",rejectOnDrop:!0,trackDoneStatus:!1,Promise},_.prototype.stopDefaults={enqueueErrorMessage:"This limiter has been stopped and cannot accept new jobs.",dropWaitingJobs:!0,dropErrorMessage:"This limiter has been stopped."},_}).call(void 0),Bottleneck_1=c,Bottleneck_1}var lib=requireBottleneck();const Bottleneck=getDefaultExportFromCjs(lib),LOGGER=ROOT_LOGGER.extend("call-deezer"),limiter=new Bottleneck({reservoir:50,reservoirRefreshAmount:50,reservoirRefreshInterval:5*1e3});async function fetchDeezer(n){{n.searchParams.set("output","jsonp"),LOGGER({fetchJsonp:n.toString()}),console.log("fetchDeezer: "+n.toString());const t=await fetchJsonp(n.toString(),{timeout:1e4});return t.ok||error(500,"error in jsonp call "+n.pathname),t}}const limitedFetchDeezer=limiter.wrap(fetchDeezer);async function callDeezer(n){LOGGER(`calling ${n.apiPath}`);const t=new URL(n.apiPath,DeezerConfig.API_URL),e=TokenCookie.get();e||error(500,"no accessToken in cookies"),t.searchParams.set("access_token",e),n.searchParams&&Object.entries(n.searchParams).forEach(([s,o])=>{t.searchParams.set(s,o?""+o:"")});const i=await(await limitedFetchDeezer(t)).json();return LOGGER("call response",i),i.error&&error(500,"error in deezer call "+t.pathname+": "+JSON.stringify(i.error)),i}const stores={};function getStorage(n){return n==="local"?localStorage:sessionStorage}function localStorageStore(n,t,e){const r=JSON,i="local";function s(o,a){getStorage(i).setItem(o,r.stringify(a))}if(!stores[n]){const o=writable(t,d=>{const l=getStorage(i).getItem(n);l&&d(r.parse(l));{const h=f=>{f.key===n&&d(f.newValue?r.parse(f.newValue):null)};return window.addEventListener("storage",h),()=>window.removeEventListener("storage",h)}}),{subscribe:a,set:c}=o;stores[n]={set(d){s(n,d),c(d)},update(d){const l=d(get$1(o));s(n,l),c(l)},subscribe:a}}return stores[n]}const modeOsPrefers=localStorageStore("modeOsPrefers",!1),modeUserPrefers=localStorageStore("modeUserPrefers",void 0),modeCurrent=localStorageStore("modeCurrent",!1);function getModeOsPrefers(){const n=window.matchMedia("(prefers-color-scheme: light)").matches;return modeOsPrefers.set(n),n}function setModeUserPrefers(n){modeUserPrefers.set(n)}function setModeCurrent(n){const t=document.documentElement.classList,e="dark";n===!0?t.remove(e):t.add(e),modeCurrent.set(n)}function setInitialClassState(){const n=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",e=!("modeUserPrefers"in localStorage),r=window.matchMedia("(prefers-color-scheme: dark)").matches;t||e&&r?n.add("dark"):n.remove("dark")}const reducedMotionQuery="(prefers-reduced-motion: reduce)";function prefersReducedMotion(){return window.matchMedia(reducedMotionQuery).matches}const prefersReducedMotionStore=readable(prefersReducedMotion(),n=>{{const t=r=>{n(r.matches)},e=window.matchMedia(reducedMotionQuery);return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}});export{ROOT_LOGGER as R,current_each_item as a,sanitize_slots as b,callDeezer as c,set_class as d,each as e,slot as f,bubble_event as g,html as h,index as i,getDefaultExportFromCjs as j,setModeCurrent as k,getModeOsPrefers as l,modeCurrent as m,setModeUserPrefers as n,setInitialClassState as o,set_svg_class as p,prefersReducedMotionStore as q,toggle_class as r,snippet as s,traceDuration as t,redirect as u,reactive_import as v};
