(()=>{"use strict";var n,e,t,r,o={179:(n,e,t)=>{t.a(n,(async(n,r)=>{try{t.r(e),t.d(e,{__wbg_get_27fe3dac1c4d0224:()=>a.Se,__wbg_isArray_39d28997bf6b96b4:()=>a.e7,__wbg_length_e498fbc24f9c1d4f:()=>a.nH,__wbg_new_f9876326328f45ed:()=>a.id,__wbg_newwithargs_d66a68ef9c159f0d:()=>a.S$,__wbg_newwithlength_0da6f12fbc1ab6eb:()=>a.AQ,__wbg_newwithlength_9e47bf496e7c6f07:()=>a.Pm,__wbg_push_49c286f04dd3bf59:()=>a.jI,__wbg_random_afb3265527cf67c8:()=>a.Nm,__wbg_set_6aa458a4ebdb65cb:()=>a.ZJ,__wbg_set_wasm:()=>a.oT,__wbg_setindex_eb56bef33ba12d87:()=>a.iH,__wbindgen_debug_string:()=>a.fY,__wbindgen_number_get:()=>a.M1,__wbindgen_number_new:()=>a.pT,__wbindgen_object_drop_ref:()=>a.ug,__wbindgen_string_new:()=>a.h4,__wbindgen_throw:()=>a.Or,kmeans:()=>a.aB,kmeans_rgb:()=>a.GN});var o=t(689),a=t(293),i=n([o]);o=(i.then?(await i)():i)[0],(0,a.oT)(o),r()}catch(n){r(n)}}))},293:(n,e,t)=>{let r;function o(n){r=n}t.d(e,{AQ:()=>$,GN:()=>x,M1:()=>M,Nm:()=>B,Or:()=>Z,Pm:()=>N,S$:()=>I,Se:()=>T,ZJ:()=>D,aB:()=>k,e7:()=>P,fY:()=>W,h4:()=>A,iH:()=>F,id:()=>O,jI:()=>H,nH:()=>E,oT:()=>o,pT:()=>j,ug:()=>S}),n=t.hmd(n);const a=new Array(128).fill(void 0);function i(n){return a[n]}function c(n){return null==n}a.push(void 0,null,!0,!1);let s=null,f=null;function _(){return null!==f&&0!==f.byteLength||(f=new Int32Array(r.memory.buffer)),f}let u=a.length;function d(n){const e=i(n);return function(n){n<132||(a[n]=u,u=n)}(n),e}let l=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});l.decode();let b=null;function h(){return null!==b&&0!==b.byteLength||(b=new Uint8Array(r.memory.buffer)),b}function g(n,e){return l.decode(h().subarray(n,n+e))}function m(n){u===a.length&&a.push(a.length+1);const e=u;return u=a[e],a[e]=n,e}function w(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=w(n[0]));for(let r=1;r<e;r++)t+=", "+w(n[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(!(t.length>1))return toString.call(n);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:r}let p=0,y=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const v="function"==typeof y.encodeInto?function(n,e){return y.encodeInto(n,e)}:function(n,e){const t=y.encode(n);return e.set(t),{read:n.length,written:t.length}};function x(n,e,t,o){try{const b=r.__wbindgen_add_to_stack_pointer(-16),g=function(n,e){const t=e(1*n.length);return h().set(n,t/1),p=n.length,t}(n,r.__wbindgen_export_0),m=p;r.kmeans_rgb(b,g,m,e,t,!c(o),c(o)?0:o);var a=_()[b/4+0],i=_()[b/4+1],s=_()[b/4+2];if(_()[b/4+3])throw d(s);var f=(u=a,l=i,h().subarray(u/1,u/1+l)).slice();return r.__wbindgen_export_2(a,1*i),f}finally{r.__wbindgen_add_to_stack_pointer(16)}var u,l}function k(n,e,t,o){try{const s=r.__wbindgen_add_to_stack_pointer(-16);r.kmeans(s,m(n),e,t,!c(o),c(o)?0:o);var a=_()[s/4+0],i=_()[s/4+1];if(_()[s/4+2])throw d(i);return d(a)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function M(n,e){const t=i(e),o="number"==typeof t?t:void 0;(null!==s&&0!==s.byteLength||(s=new Float64Array(r.memory.buffer)),s)[n/8+1]=c(o)?0:o,_()[n/4+0]=!c(o)}function S(n){d(n)}function A(n,e){return m(g(n,e))}function j(n){return m(n)}function T(n,e){return m(i(n)[e>>>0])}function E(n){return i(n).length}function O(){return m(new Object)}function $(n){return m(new Array(n>>>0))}function P(n){return Array.isArray(i(n))}function H(n,e){return i(n).push(i(e))}function I(n,e,t,r){return m(new Function(g(n,e),g(t,r)))}const B="function"==typeof Math.random?Math.random:("Math.random",()=>{throw new Error("Math.random is not defined")});function D(){return function(n,e){try{return function(n,e,t){return Reflect.set(i(n),i(e),i(t))}.apply(this,e)}catch(n){r.__wbindgen_export_3(m(n))}}(0,arguments)}function N(n){return m(new Uint32Array(n>>>0))}function F(n,e,t){i(n)[e>>>0]=t>>>0}function W(n,e){const t=function(n,e,t){if(void 0===t){const t=y.encode(n),r=e(t.length);return h().subarray(r,r+t.length).set(t),p=t.length,r}let r=n.length,o=e(r);const a=h();let i=0;for(;i<r;i++){const e=n.charCodeAt(i);if(e>127)break;a[o+i]=e}if(i!==r){0!==i&&(n=n.slice(i)),o=t(o,r,r=i+3*n.length);const e=h().subarray(o+i,o+r);i+=v(n,e).written}return p=i,o}(w(i(e)),r.__wbindgen_export_0,r.__wbindgen_export_1),o=p;_()[n/4+1]=o,_()[n/4+0]=t}function Z(n,e){throw new Error(g(n,e))}},697:n=>{n.exports={eudist:function(n,e){for(var t=n.length,r=0,o=0;o<t;o++){var a=(n[o]||0)-(e[o]||0);r+=a*a}return r},mandist:function(n,e){for(var t=n.length,r=0,o=0,a=0;a<t;a++)r+=(o=(n[a]||0)-(e[a]||0))>=0?o:-o;return r},dist:function(n,e,t){var r=Math.abs(n-e);return t?r:r*r}}},35:(n,e,t)=>{var r=t(697),o=r.eudist,a=r.dist;n.exports={kmrand:function(n,e){for(var t={},r=[],o=e<<2,a=n.length,i=n[0].length>0;r.length<e&&o-- >0;){var c=n[Math.floor(Math.random()*a)],s=i?c.join("_"):"".concat(c);t[s]||(t[s]=!0,r.push(c))}if(r.length<e)throw new Error("Error initializating clusters");return r},kmpp:function(n,e,t){var r=t||(n[0].length?o:a),i=[],c=n.length,s=n[0].length>0,f=n[Math.floor(Math.random()*c)];for(s?f.join("_"):"".concat(f),i.push(f);i.length<e;){for(var _=[],u=i.length,d=0,l=[],b=0;b<c;b++){for(var h=1/0,g=0;g<u;g++){var m=r(n[b],i[g]);m<=h&&(h=m)}_[b]=h}for(var w=0;w<c;w++)d+=_[w];for(var p=0;p<c;p++)l[p]={i:p,v:n[p],pr:_[p]/d,cs:0};l.sort((function(n,e){return n.pr-e.pr})),l[0].cs=l[0].pr;for(var y=1;y<c;y++)l[y].cs=l[y-1].cs+l[y].pr;for(var v=Math.random(),x=0;x<c-1&&l[x++].cs<v;);i.push(l[x-1].v)}return i}}},160:(n,e,t)=>{var r=t(697),o=t(35),a=r.eudist,i=(r.mandist,r.dist,o.kmrand),c=o.kmpp;function s(n,e,t){t=t||[];for(var r=0;r<n;r++)t[r]=e;return t}function f(n,e){for(var t=Array.isArray(n),r=this.centroids,o=r.length,i=1/0,c=0,s=0;s<o;s++){var f=e?e(n,r[s]):t?a(n,r[s]):Math.abs(n-r[s]);f<=i&&(i=f,c=s)}return{idx:c,centroid:r[c]}}n.exports=function(n,e,t,r,o){var _=[],u=[],d=[],l=[],b=!1,h=r||1e4,g=n.length,m=n[0].length,w=m>0,p=[];if(t)_="kmrand"==t?i(n,e):"kmpp"==t?c(n,e,o):t;else for(var y={},v=0;_.length<e;){var x=Math.floor(Math.random()*g);y[x]||(y[x]=!0,_[v++]=n[x])}do{s(e,0,p);for(var k=0;k<g;k++){for(var M=1/0,S=0,A=0;A<e;A++)(l=o?o(n[k],_[A]):w?a(n[k],_[A]):Math.abs(n[k]-_[A]))<=M&&(M=l,S=A);d[k]=S,p[S]++}var j=[];if(u=[],w)for(var T=0;T<e;T++)j[T]=s(m,0,j[T]),u[T]=_[T];else for(var E=0;E<e;E++)j[E]=0,u[E]=_[E];if(w){for(var O=0;O<e;O++)_[O]=[];for(var $=0;$<g;$++)for(var P=j[d[$]],H=n[$],I=0;I<m;I++)P[I]+=H[I];b=!0;for(var B=0;B<e;B++){for(var D=_[B],N=j[B],F=u[B],W=p[B],Z=0;Z<m;Z++)D[Z]=N[Z]/W||0;if(b)for(var q=0;q<m;q++)if(F[q]!=D[q]){b=!1;break}}}else{for(var L=0;L<g;L++)j[d[L]]+=n[L];for(var z=0;z<e;z++)_[z]=j[z]/p[z]||0;b=!0;for(var G=0;G<e;G++)if(u[G]!=_[G]){b=!1;break}}b=b||--h<=0}while(!b);return{it:(r||1e4)-h,k:e,idxs:d,centroids:_,test:f}}},607:function(n,e,t){var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(t(160)),a=r(t(179)),i=[2,10,50],c=[3,10,50],s=1e3;function f(n,e,...t){let r=0;for(let o=0;o<e;o++){const e=performance.now(),o=n(...t);r+=performance.now()-e,console.log(o[0]?.toString())}return r/e}function _(n,e){return new Array(n).fill(0).map((()=>new Array(e).fill(0).map((()=>Math.random()))))}function u(n){const e=Array.from(new Set(n.map((n=>n.k)))).sort(((n,e)=>n-e)),t=Array.from(new Set(n.map((n=>n.dimensions)))).sort(((n,e)=>n-e));let r="\n    <table>\n      <thead>\n        <tr>\n          <th>Dimensions \\ k</th>\n  ";return e.forEach((n=>{r+=`<th>${n}</th>`})),r+="\n        </tr>\n      </thead>\n      <tbody>\n  ",t.forEach((t=>{r+=`<tr><td>${t}</td>`,e.forEach((e=>{const o=n.find((n=>n.k===e&&n.dimensions===t));r+=`<td>${o?o.avarageTime:""}</td>`})),r+="</tr>"})),r+="\n      </tbody>\n    </table>\n  ",r}(async()=>{const n=(await a.default).kmeans,e=(await a.default).kmeans_rgb,t=i.map((n=>c.map((e=>({k:n,dimensions:e,data:_(1e4,e)}))))).flat(),r=t.map((({k:n,dimensions:e,data:t})=>({k:n,dimensions:e,avarageTime:f(o.default,10,t,n,void 0,s)}))),d=t.map((({k:e,dimensions:t,data:r})=>({k:e,dimensions:t,avarageTime:f(n,10,r,e,s)}))),l=document.getElementById("results-table");l&&(l.innerHTML+=`\n      <h2>skmeans (data size - 10000, max iterations: 1000)</h2>\n      ${u(r)}\n      <h2>kmeans (data size - 10000, max iterations: 1000)</h2>\n      ${u(d)}\n    `);const b=new Image;b.src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",b.crossOrigin="Anonymous",b.onload=()=>{const n=document.createElement("canvas");n.width=b.width,n.height=b.height;const t=n.getContext("2d");t.drawImage(b,0,0);const r=t.getImageData(0,0,300,300).data,a=[];for(let n=0;n<r.length;n+=4)a.push([r[n],r[n+1],r[n+2]]);const c=i.map((n=>({k:n,dimensions:3,avarageTime:f(o.default,2,a,n,void 0,s)}))),_=[];for(let n=0;n<r.length;n+=4)_.push(r[n],r[n+1],r[n+2]);const d=new Uint8Array(_),h=i.map((n=>({k:n,dimensions:3,avarageTime:f(e,2,d,n,s)})));l&&(l.innerHTML+=`\n      <h2>skmeans RGB</h2>\n      ${u(c)}\n      <h2>kmeans RGB</h2>\n      ${u(h)}\n      `)}})()},689:(n,e,t)=>{var r=t(293);n.exports=t.v(e,n.id,"970d681c3d820fe92c2e",{"./kmeans_wasm_bg.js":{__wbindgen_number_get:r.M1,__wbindgen_object_drop_ref:r.ug,__wbindgen_string_new:r.h4,__wbindgen_number_new:r.pT,__wbg_get_27fe3dac1c4d0224:r.Se,__wbg_length_e498fbc24f9c1d4f:r.nH,__wbg_new_f9876326328f45ed:r.id,__wbg_newwithlength_0da6f12fbc1ab6eb:r.AQ,__wbg_isArray_39d28997bf6b96b4:r.e7,__wbg_push_49c286f04dd3bf59:r.jI,__wbg_newwithargs_d66a68ef9c159f0d:r.S$,__wbg_random_afb3265527cf67c8:r.Nm,__wbg_set_6aa458a4ebdb65cb:r.ZJ,__wbg_newwithlength_9e47bf496e7c6f07:r.Pm,__wbg_setindex_eb56bef33ba12d87:r.iH,__wbindgen_debug_string:r.fY,__wbindgen_throw:r.Or}})}},a={};function i(n){var e=a[n];if(void 0!==e)return e.exports;var t=a[n]={id:n,loaded:!1,exports:{}};return o[n].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}n="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=n=>{n&&!n.d&&(n.d=1,n.forEach((n=>n.r--)),n.forEach((n=>n.r--?n.r++:n())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=1);var s,f,_,u=new Set,d=o.exports,l=new Promise(((n,e)=>{_=e,f=n}));l[e]=d,l[n]=n=>(c&&n(c),u.forEach(n),l.catch((n=>{}))),o.exports=l,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[n])return o;if(o.then){var a=[];a.d=0,o.then((n=>{i[e]=n,r(a)}),(n=>{i[t]=n,r(a)}));var i={};return i[n]=n=>n(a),i}}var c={};return c[n]=n=>{},c[e]=o,c})))(o);var i=()=>s.map((n=>{if(n[t])throw n[t];return n[e]})),f=new Promise((e=>{(a=()=>e(i)).r=0;var t=n=>n!==c&&!u.has(n)&&(u.add(n),n&&!n.d&&(a.r++,n.push(a)));s.map((e=>e[n](t)))}));return a.r?f:i()}),(n=>(n?_(l[t]=n):f(d),r(c)))),c&&(c.d=0)},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.hmd=n=>((n=Object.create(n)).children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),i.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.v=(n,e,t,r)=>{var o=fetch(i.p+""+t+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,r).then((e=>Object.assign(n,e.instance.exports))):o.then((n=>n.arrayBuffer())).then((n=>WebAssembly.instantiate(n,r))).then((e=>Object.assign(n,e.instance.exports)))},(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),i(607)})();