function t(){}const e=t=>t;function n(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(e,n,i){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const i=e.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}function c(t,e,n,i){if(t){const s=a(t,e,n,i);return t[0](s)}}function a(t,e,n,i){return t[1]&&i?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](i(e))):n.ctx}function u(t,e,n,i,s,o,l){const r=function(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let i=0;i<n;i+=1)t[i]=e.dirty[i]|s[i];return t}return e.dirty|s}return e.dirty}(e,i,s,o);if(r){const s=a(e,n,i,l);t.p(s,r)}}function d(t){return null==t?"":t}const f="undefined"!=typeof window;let p=f?()=>window.performance.now():()=>Date.now(),h=f?t=>requestAnimationFrame(t):t;const v=new Set;function m(t){v.forEach((e=>{e.c(t)||(v.delete(e),e.f())})),0!==v.size&&h(m)}function g(t){let e;return 0===v.size&&h(m),{promise:new Promise((n=>{v.add(e={c:t,f:n})})),abort(){v.delete(e)}}}function $(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function S(){return _(" ")}function T(){return _("")}function q(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e,n){t.classList[n?"add":"remove"](e)}const D=new Set;let j,z=0;function I(t,e,n,i,s,o,l,r=0){const c=16.666/i;let a="{\n";for(let t=0;t<=1;t+=c){const i=e+(n-e)*o(t);a+=100*t+`%{${l(i,1-i)}}\n`}const u=a+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,f=t.ownerDocument;D.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(w("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${d} ${i}ms linear ${s}ms 1 both`,z+=1,d}function C(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||h((()=>{z||(D.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),D.clear())})))}function A(t){j=t}function B(){if(!j)throw new Error("Function called outside component initialization");return j}function O(t){B().$$.on_mount.push(t)}function F(t,e){B().$$.context.set(t,e)}function R(t){return B().$$.context.get(t)}const N=[],Y=[],L=[],M=[],X=Promise.resolve();let P=!1;function W(t){L.push(t)}function U(t){M.push(t)}let G=!1;const H=new Set;function J(){if(!G){G=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];A(e),K(e.$$)}for(A(null),N.length=0;Y.length;)Y.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];H.has(e)||(H.add(e),e())}L.length=0}while(N.length);for(;M.length;)M.pop()();P=!1,G=!1,H.clear()}}function K(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}let Q;function V(){return Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q}function Z(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function it(){et.r||s(et.c),et=et.p}function st(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,n,i){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}const lt={duration:0};function rt(n,i,l,r){let c=i(n,l),a=r?0:1,u=null,d=null,f=null;function h(){f&&C(n,f)}function v(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function m(i){const{delay:o=0,duration:l=300,easing:r=e,tick:m=t,css:$}=c||lt,y={start:p()+o,b:i};i||(y.group=et,et.r+=1),u?d=y:($&&(h(),f=I(n,a,i,l,o,r,$)),i&&m(0,1),u=v(y,l),W((()=>Z(n,i,"start"))),g((t=>{if(d&&t>d.start&&(u=v(d,l),d=null,Z(n,u.b,"start"),$&&(h(),f=I(n,a,u.b,u.duration,0,r,c.css))),u)if(t>=u.end)m(a=u.b,1-a),Z(n,u.b,"end"),d||(u.b?h():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*r(e/u.duration),m(a,1-a)}return!(!u&&!d)})))}return{run(t){o(c)?V().then((()=>{c=c(),m(t)})):m(t)},end(){h(),u=d=null}}}function ct(t,e,n){const i=t.$$.props[e];void 0!==i&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function at(t){t&&t.c()}function ut(t,e,i){const{fragment:l,on_mount:r,on_destroy:c,after_update:a}=t.$$;l&&l.m(e,i),W((()=>{const e=r.map(n).filter(o);c?c.push(...e):s(e),t.$$.on_mount=[]})),a.forEach(W)}function dt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){-1===t.$$.dirty[0]&&(N.push(t),P||(P=!0,X.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(e,n,o,l,r,c,a=[-1]){const u=j;A(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:a,skip_bound:!1};let p=!1;if(f.ctx=o?o(e,d,((t,n,...i)=>{const s=i.length?i[0]:n;return f.ctx&&r(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&ft(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&st(e.$$.fragment),ut(e,n.target,n.anchor),J()}A(u)}class ht{$destroy(){dt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function vt(t){let e,n;return{c(){e=w("p"),n=_(t[2]),k(e,"class","svelte-fp-slide-name svelte-tlycps")},m(t,i){y(t,e,i),$(e,n)},p(t,e){4&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,t[2])},d(t){t&&b(e)}}}function mt(e){let n,i,s,o,l,r,c=e[3]&&vt(e);return{c(){n=w("li"),c&&c.c(),i=S(),s=w("button"),k(s,"class",o="svelte-fp-indicator-list-item-btn "+(e[0]===e[1]?"svelte-fp-active":"")+" svelte-tlycps"),k(n,"class","svelte-fp-indicator-list-item svelte-tlycps")},m(t,o){y(t,n,o),c&&c.m(n,null),$(n,i),$(n,s),l||(r=q(s,"click",e[4]),l=!0)},p(t,[e]){t[3]?c?c.p(t,e):(c=vt(t),c.c(),c.m(n,i)):c&&(c.d(1),c=null),3&e&&o!==(o="svelte-fp-indicator-list-item-btn "+(t[0]===t[1]?"svelte-fp-active":"")+" svelte-tlycps")&&k(s,"class",o)},i:t,o:t,d(t){t&&b(n),c&&c.d(),l=!1,r()}}}function gt(t,e,n){let{activeSection:i=0}=e,{index:s=0}=e,{name:o=""}=e,{names:l=!1}=e;return t.$$set=t=>{"activeSection"in t&&n(0,i=t.activeSection),"index"in t&&n(1,s=t.index),"name"in t&&n(2,o=t.name),"names"in t&&n(3,l=t.names)},[i,s,o,l,()=>{n(0,i=s)}]}class $t extends ht{constructor(t){var e;super(),document.getElementById("svelte-tlycps-style")||((e=w("style")).id="svelte-tlycps-style",e.textContent=".svelte-fp-indicator-list-item.svelte-tlycps{margin:1rem;padding:0;display:flex;align-items:center}.svelte-fp-indicator-list-item-btn.svelte-tlycps{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent;order:1;align-self:end}.svelte-fp-active.svelte-tlycps{background-color:#767676}.svelte-fp-slide-name.svelte-tlycps{position:absolute;text-align:center;border:1px #4e555b;border-radius:3px;background:rgba(78, 85, 91, 0.82);padding:2px;order:0;margin:2rem;justify-self:start}@media only screen and (max-width: 600px){.svelte-fp-indicator-list-item-btn.svelte-tlycps{width:0.5rem;height:0.5rem;border-radius:0.25rem}}",$(document.head,e)),pt(this,t,gt,mt,l,{activeSection:0,index:1,name:2,names:3})}}function yt(t,e,n){const i=t.slice();return i[3]=e[n],i[5]=n,i}function bt(t){let e,n,i;function s(e){t[2].call(null,e)}let o={index:t[5],name:t[3]};return void 0!==t[0]&&(o.activeSection=t[0]),e=new $t({props:o}),Y.push((()=>ct(e,"activeSection",s))),{c(){at(e.$$.fragment)},m(t,n){ut(e,t,n),i=!0},p(t,i){const s={};2&i&&(s.name=t[3]),!n&&1&i&&(n=!0,s.activeSection=t[0],U((()=>n=!1))),e.$set(s)},i(t){i||(st(e.$$.fragment,t),i=!0)},o(t){ot(e.$$.fragment,t),i=!1},d(t){dt(e,t)}}}function xt(t){let e,n,i,s=t[1],o=[];for(let e=0;e<s.length;e+=1)o[e]=bt(yt(t,s,e));const l=t=>ot(o[t],1,1,(()=>{o[t]=null}));return{c(){e=w("div"),n=w("ul");for(let t=0;t<o.length;t+=1)o[t].c();k(n,"class","svelte-fp-indicator-list svelte-dh6fo0"),k(e,"class","svelte-fp-indicator svelte-dh6fo0")},m(t,s){y(t,e,s),$(e,n);for(let t=0;t<o.length;t+=1)o[t].m(n,null);i=!0},p(t,[e]){if(3&e){let i;for(s=t[1],i=0;i<s.length;i+=1){const l=yt(t,s,i);o[i]?(o[i].p(l,e),st(o[i],1)):(o[i]=bt(l),o[i].c(),st(o[i],1),o[i].m(n,null))}for(nt(),i=s.length;i<o.length;i+=1)l(i);it()}},i(t){if(!i){for(let t=0;t<s.length;t+=1)st(o[t]);i=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)ot(o[t]);i=!1},d(t){t&&b(e),x(o,t)}}}function wt(t,e,n){let{sections:i=[]}=e,{activeSection:s=0}=e;return t.$$set=t=>{"sections"in t&&n(1,i=t.sections),"activeSection"in t&&n(0,s=t.activeSection)},[s,i,function(t){s=t,n(0,s)}]}class _t extends ht{constructor(t){var e;super(),document.getElementById("svelte-dh6fo0-style")||((e=w("style")).id="svelte-dh6fo0-style",e.textContent=".svelte-fp-indicator.svelte-dh6fo0{height:inherit;width:auto;overflow:hidden;position:absolute;z-index:100;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list.svelte-dh6fo0{margin:1rem;padding:1rem;list-style-type:none}@media only screen and (max-width: 600px){.svelte-fp-indicator.svelte-dh6fo0{width:2rem}.svelte-fp-indicator-list.svelte-dh6fo0{margin:0.3rem;padding:0.3rem}}",$(document.head,e)),pt(this,t,wt,xt,l,{sections:1,activeSection:0})}}const St=[];function Tt(e,n=t){let i;const s=[];function o(t){if(l(e,t)&&(e=t,i)){const t=!St.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),St.push(n,e)}if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(l,r=t){const c=[l,r];return s.push(c),1===s.length&&(i=n(o)||t),l(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(i(),i=null)}}}}function qt(t){let e,n,i,o,l,r,a,f,p,h,v;const m=t[21].default,g=c(m,t,t[20],null);function x(e){t[24].call(null,e)}function _(e){t[25].call(null,e)}let T={};return void 0!==t[0]&&(T.activeSection=t[0]),void 0!==t[2]&&(T.sections=t[2]),r=new _t({props:T}),Y.push((()=>ct(r,"activeSection",x))),Y.push((()=>ct(r,"sections",_))),{c(){e=S(),n=w("div"),i=w("div"),o=w("div"),g&&g.c(),l=S(),at(r.$$.fragment),k(o,"class","svelte-fp-container svelte-ng9shq"),k(i,"class","svelte-fp-container svelte-ng9shq"),k(n,"class",d(t[5])+" svelte-ng9shq"),k(n,"style",t[1])},m(s,c){y(s,e,c),y(s,n,c),$(n,i),$(i,o),g&&g.m(o,null),t[23](o),$(i,l),ut(r,i,null),p=!0,h||(v=[q(window,"keydown",t[22]),q(n,"wheel",t[26]),q(n,"touchstart",t[27]),q(n,"touchmove",t[28]),q(n,"drag",kt),q(n,"mousedown",t[29]),q(n,"mouseup",t[30])],h=!0)},p(t,e){g&&g.p&&1048576&e[0]&&u(g,m,t,t[20],e,null,null);const i={};!a&&1&e[0]&&(a=!0,i.activeSection=t[0],U((()=>a=!1))),!f&&4&e[0]&&(f=!0,i.sections=t[2],U((()=>f=!1))),r.$set(i),(!p||2&e[0])&&k(n,"style",t[1])},i(t){p||(st(g,t),st(r.$$.fragment,t),p=!0)},o(t){ot(g,t),ot(r.$$.fragment,t),p=!1},d(i){i&&b(e),i&&b(n),g&&g.d(i),t[23](null),dt(r),h=!1,s(v)}}}const kt=()=>!1;function Et(t,e,n){let i,{$$slots:s={},$$scope:o}=e,{class:l=""}=e,{style:c=""}=e,{activeSection:a=0}=e;const u=Tt(a);r(t,u,(t=>n(36,i=t)));let d,f,p,h=0,{sectionTitles:v=!1}=e,m=[],{transitionDuration:g=500}=e,{arrows:$=!1}=e,{drag:y=!1}=e,{dragThreshold:b=100}=e,{touchThreshold:x=75}=e,{pullDownToRefresh:w=!1}=e,_=`${l} svelte-fp-wrapper`,S=0;F("section",{activeSectionStore:u,getId:()=>(n(31,h++,h),h-1)});const T=t=>{let e=t.deltaY,n=(new Date).getTime();g<n-S&&(S=n,e<0?q():e>0&&k())},q=async()=>{i>0&&n(0,a--,a)},k=async()=>{i<h-1&&n(0,a++,a)},E=t=>{if($)switch(t.key){case"ArrowDown":k();break;case"ArrowUp":q()}},D=t=>{y&&(f=t.screenY)},j=t=>{if(y){const e=t.screenY;f-e>b?k():f-e<-b&&q()}},z=t=>{p=t.touches[0].screenY},I=t=>{let e=(new Date).getTime();const n=t.touches[0].screenY;g<e-S&&(p-n>x?(k(),S=e):p-n<-x&&(q(),S=e))};return t.$$set=t=>{"class"in t&&n(12,l=t.class),"style"in t&&n(1,c=t.style),"activeSection"in t&&n(0,a=t.activeSection),"sectionTitles"in t&&n(13,v=t.sectionTitles),"transitionDuration"in t&&n(14,g=t.transitionDuration),"arrows"in t&&n(15,$=t.arrows),"drag"in t&&n(16,y=t.drag),"dragThreshold"in t&&n(17,b=t.dragThreshold),"touchThreshold"in t&&n(18,x=t.touchThreshold),"pullDownToRefresh"in t&&n(19,w=t.pullDownToRefresh),"$$scope"in t&&n(20,o=t.$$scope)},t.$$.update=()=>{if(1&t.$$.dirty[0]&&u.set(a),8192&t.$$.dirty[0]&&v&&n(2,m=v),8204&t.$$.dirty[0]|1&t.$$.dirty[1]&&d&&!v){console.log(d.children.length);for(let t=0;h>t;t++)n(2,m=[...m,`Section ${t+1}`])}},[a,c,m,d,u,_,T,E,D,j,z,I,l,v,g,$,y,b,x,w,o,s,t=>E(t),function(t){Y[t?"unshift":"push"]((()=>{d=t,n(3,d)}))},function(t){a=t,n(0,a)},function(t){m=t,n(2,m),n(13,v),n(3,d),n(31,h)},t=>T(t),t=>z(t),t=>I(t),t=>D(t),t=>j(t)]}class Dt extends ht{constructor(t){var e;super(),document.getElementById("svelte-ng9shq-style")||((e=w("style")).id="svelte-ng9shq-style",e.textContent=".svelte-fp-wrapper.svelte-ng9shq{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden}.svelte-fp-container.svelte-ng9shq{height:inherit;width:inherit;position:relative}.svelte-fp-disable-pull-refresh.svelte-ng9shq{overscroll-behavior:contain}",$(document.head,e)),pt(this,t,Et,qt,l,{class:12,style:1,activeSection:0,sectionTitles:13,transitionDuration:14,arrows:15,drag:16,dragThreshold:17,touchThreshold:18,pullDownToRefresh:19},[-1,-1])}}function jt(t){const e=t-1;return e*e*e+1}function zt(t,{delay:e=0,duration:n=400,easing:i=jt,x:s=0,y:o=0,opacity:l=0}){const r=getComputedStyle(t),c=+r.opacity,a="none"===r.transform?"":r.transform,u=c*(1-l);return{delay:e,duration:n,easing:i,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*s}px, ${(1-t)*o}px);\n\t\t\topacity: ${c-u*e}`}}function It(t,{delay:e=0,duration:n=400,easing:i=jt}){const s=getComputedStyle(t),o=+s.opacity,l=parseFloat(s.height),r=parseFloat(s.paddingTop),c=parseFloat(s.paddingBottom),a=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),d=parseFloat(s.borderTopWidth),f=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:i,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*o};height: ${t*l}px;padding-top: ${t*r}px;padding-bottom: ${t*c}px;margin-top: ${t*a}px;margin-bottom: ${t*u}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function Ct(t,e,n){const i=t.slice();return i[42]=e[n],i[44]=n,i}function At(t){let e,n,i,o,l,r,a,f;const p=t[24].default,h=c(p,t,t[23],null);let v=t[1][0]&&Bt(t);return{c(){e=w("section"),n=w("div"),h&&h.c(),i=S(),v&&v.c(),k(n,"class","svelte-fp-container svelte-fp-flexbox-expand svelte-l4liqa"),E(n,"svelte-fp-flexbox-center",t[2]),k(e,"class",o=d(t[6])+" svelte-l4liqa"),k(e,"style",t[0])},m(s,o){y(s,e,o),$(e,n),h&&h.m(n,null),$(e,i),v&&v.m(e,null),r=!0,a||(f=[q(e,"selectstart",t[9]),q(e,"mousedown",t[27]),q(e,"mouseup",t[28]),q(e,"touchstart",t[29]),q(e,"touchmove",t[30])],a=!0)},p(i,s){t=i,h&&h.p&&8388608&s[0]&&u(h,p,t,t[23],s,null,null),4&s[0]&&E(n,"svelte-fp-flexbox-center",t[2]),t[1][0]?v?v.p(t,s):(v=Bt(t),v.c(),v.m(e,null)):v&&(v.d(1),v=null),(!r||64&s[0]&&o!==(o=d(t[6])+" svelte-l4liqa"))&&k(e,"class",o),(!r||1&s[0])&&k(e,"style",t[0])},i(n){r||(st(h,n),W((()=>{l||(l=rt(e,It,t[3],!0)),l.run(1)})),r=!0)},o(n){ot(h,n),l||(l=rt(e,It,t[3],!1)),l.run(0),r=!1},d(t){t&&b(e),h&&h.d(t),v&&v.d(),t&&l&&l.end(),a=!1,s(f)}}}function Bt(t){let e,n,i=t[1],s=[];for(let e=0;e<i.length;e+=1)s[e]=Ot(Ct(t,i,e));return{c(){e=w("div"),n=w("ul");for(let t=0;t<s.length;t+=1)s[t].c();k(n,"class","svelte-fp-indicator-list-horizontal svelte-l4liqa"),k(e,"class","svelte-fp-indicator-horizontal svelte-l4liqa")},m(t,i){y(t,e,i),$(e,n);for(let t=0;t<s.length;t+=1)s[t].m(n,null)},p(t,e){if(1058&e[0]){let o;for(i=t[1],o=0;o<i.length;o+=1){const l=Ct(t,i,o);s[o]?s[o].p(l,e):(s[o]=Ot(l),s[o].c(),s[o].m(n,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=i.length}},d(t){t&&b(e),x(s,t)}}}function Ot(t){let e,n,i,s,o,l;function r(...e){return t[26](t[44],...e)}return{c(){e=w("li"),n=w("button"),s=S(),k(n,"class",i="svelte-fp-indicator-list-item-btn "+(t[5]===t[44]?"svelte-fp-active":"")+" svelte-l4liqa"),k(e,"class","svelte-fp-indicator-list-item svelte-l4liqa")},m(t,i){y(t,e,i),$(e,n),$(e,s),o||(l=q(n,"click",r),o=!0)},p(e,s){t=e,32&s[0]&&i!==(i="svelte-fp-indicator-list-item-btn "+(t[5]===t[44]?"svelte-fp-active":"")+" svelte-l4liqa")&&k(n,"class",i)},d(t){t&&b(e),o=!1,l()}}}function Ft(t){let e,n,i,s,o=t[4]&&At(t);return{c(){o&&o.c(),e=T()},m(l,r){o&&o.m(l,r),y(l,e,r),n=!0,i||(s=q(window,"keydown",t[25]),i=!0)},p(t,n){t[4]?o?(o.p(t,n),16&n[0]&&st(o,1)):(o=At(t),o.c(),st(o,1),o.m(e.parentNode,e)):o&&(nt(),ot(o,1,1,(()=>{o=null})),it())},i(t){n||(st(o),n=!0)},o(t){ot(o),n=!1},d(t){o&&o.d(t),t&&b(e),i=!1,s()}}}function Rt(t,e,n){let i,s,o,{$$slots:l={},$$scope:c}=e,{class:a=""}=e,{style:u=""}=e;const{getId:d,activeSectionStore:f}=R("section");r(t,f,(t=>n(37,s=t)));let{slides:p=[]}=e,{activeSlide:h=0}=e;const v=Tt(h);r(t,v,(t=>n(36,i=t)));let m,{center:g=!1}=e,{arrows:$=!1}=e,{select:y=!1}=e,{transitionDuration:b=500}=e,{dragThreshold:x=100}=e,{touchThreshold:w=75}=e,{transition:_={duration:b}}=e;o=parseInt(o);let S,T,q=h,k=0,E=0,D=`${a} svelte-fp-section svelte-fp-flexbox-center`;y||(D=`${D} svelte-fp-unselectable`),F("slide",{activeSlideStore:v,getId:()=>(E++,E-1)});const j=t=>{let e=!1;return t<0&&(e=!0,t=-t),{num:t,negative:e}},z=()=>{const t=j(i);t.num<p.length-1?(n(5,q=t.num+1),v.set(-q)):(v.set(0),n(5,q=i))},I=()=>{const t=j(i);t.num>0?v.set(t.num-1):v.set(p.length-1),n(5,q=i)},C=t=>{if(t>q)for(;t>q;)z();else for(;t<q;)I()},A=t=>{if($)switch(t.key){case"ArrowLeft":I();break;case"ArrowRight":z()}},B=t=>{S=t.screenX},N=t=>{const e=t.screenX;S-e>x?z():S-e<-x&&I()},Y=t=>{T=t.touches[0].screenX},L=t=>{let e=(new Date).getTime();const n=t.touches[0].screenX;b<e-k&&(T-n>w?(z(),k=e):T-n<-w&&(I(),k=e))};O((()=>{n(31,o=d())}));return t.$$set=t=>{"class"in t&&n(16,a=t.class),"style"in t&&n(0,u=t.style),"slides"in t&&n(1,p=t.slides),"activeSlide"in t&&n(17,h=t.activeSlide),"center"in t&&n(2,g=t.center),"arrows"in t&&n(18,$=t.arrows),"select"in t&&n(19,y=t.select),"transitionDuration"in t&&n(20,b=t.transitionDuration),"dragThreshold"in t&&n(21,x=t.dragThreshold),"touchThreshold"in t&&n(22,w=t.touchThreshold),"transition"in t&&n(3,_=t.transition),"$$scope"in t&&n(23,c=t.$$scope)},t.$$.update=()=>{65&t.$$.dirty[1]&&n(4,m=o===s),131072&t.$$.dirty[0]&&v.set(h),16&t.$$.dirty[0]&&(m||(E=0))},[u,p,g,_,m,q,D,f,v,()=>{if(!y)return!1},C,A,B,N,Y,L,a,h,$,y,b,x,w,c,l,t=>A(t),t=>C(t),t=>B(t),t=>N(t),t=>Y(t),t=>L(t)]}class Nt extends ht{constructor(t){var e;super(),document.getElementById("svelte-l4liqa-style")||((e=w("style")).id="svelte-l4liqa-style",e.textContent="section.svelte-l4liqa{height:inherit;position:relative}.svelte-fp-flexbox-expand.svelte-l4liqa{flex:1}.svelte-fp-container.svelte-l4liqa{height:inherit;width:inherit;position:relative}.svelte-fp-flexbox-center.svelte-l4liqa{display:flex;justify-content:center;align-items:center}.svelte-fp-unselectable.svelte-l4liqa{user-select:none}.svelte-fp-indicator-horizontal.svelte-l4liqa{width:inherit;height:5rem;overflow:hidden;position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list-horizontal.svelte-l4liqa{margin:1rem;padding:1rem;list-style-type:none}.svelte-fp-indicator-list-item.svelte-l4liqa{display:inline-block;margin:1rem;padding:0}.svelte-fp-indicator-list-item-btn.svelte-l4liqa{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent}.svelte-fp-active.svelte-l4liqa{background-color:#767676}",$(document.head,e)),pt(this,t,Rt,Ft,l,{class:16,style:0,slides:1,activeSlide:17,center:2,arrows:18,select:19,transitionDuration:20,dragThreshold:21,touchThreshold:22,transition:3},[-1,-1])}}function Yt(n){let i,l,r,a,f;const h=n[9].default,v=c(h,n,n[8],null);return{c(){i=w("div"),v&&v.c(),k(i,"class",l=d(`${n[2]} svelte-fp-content`)+" svelte-1jzpibp"),k(i,"style",n[3]),E(i,"svelte-fp-flexbox-center",n[4])},m(t,e){y(t,i,e),v&&v.m(i,null),f=!0},p(t,e){n=t,v&&v.p&&256&e&&u(v,h,n,n[8],e,null,null),(!f||4&e&&l!==(l=d(`${n[2]} svelte-fp-content`)+" svelte-1jzpibp"))&&k(i,"class",l),(!f||8&e)&&k(i,"style",n[3]),20&e&&E(i,"svelte-fp-flexbox-center",n[4])},i(s){f||(st(v,s),W((()=>{a&&a.end(1),r||(r=function(n,i,s){let l,r,c=i(n,s),a=!1,u=0;function d(){l&&C(n,l)}function f(){const{delay:i=0,duration:s=300,easing:o=e,tick:f=t,css:h}=c||lt;h&&(l=I(n,0,1,s,i,o,h,u++)),f(0,1);const v=p()+i,m=v+s;r&&r.abort(),a=!0,W((()=>Z(n,!0,"start"))),r=g((t=>{if(a){if(t>=m)return f(1,0),Z(n,!0,"end"),d(),a=!1;if(t>=v){const e=o((t-v)/s);f(e,1-e)}}return a}))}let h=!1;return{start(){h||(C(n),o(c)?(c=c(),V().then(f)):f())},invalidate(){h=!1},end(){a&&(d(),a=!1)}}}(i,zt,n[0])),r.start()})),f=!0)},o(l){ot(v,l),r&&r.invalidate(),a=function(n,i,l){let r,c=i(n,l),a=!0;const u=et;function d(){const{delay:i=0,duration:o=300,easing:l=e,tick:d=t,css:f}=c||lt;f&&(r=I(n,1,0,o,i,l,f));const h=p()+i,v=h+o;W((()=>Z(n,!1,"start"))),g((t=>{if(a){if(t>=v)return d(0,1),Z(n,!1,"end"),--u.r||s(u.c),!1;if(t>=h){const e=l((t-h)/o);d(1-e,e)}}return a}))}return u.r+=1,o(c)?V().then((()=>{c=c(),d()})):d(),{end(t){t&&c.tick&&c.tick(1,0),a&&(r&&C(n,r),a=!1)}}}(i,zt,n[1]),f=!1},d(t){t&&b(i),v&&v.d(t),t&&a&&a.end()}}}function Lt(t){let e,n,i=t[5]===t[6]&&Yt(t);return{c(){i&&i.c(),e=T()},m(t,s){i&&i.m(t,s),y(t,e,s),n=!0},p(t,[n]){t[5]===t[6]?i?(i.p(t,n),96&n&&st(i,1)):(i=Yt(t),i.c(),st(i,1),i.m(e.parentNode,e)):i&&(nt(),ot(i,1,1,(()=>{i=null})),it())},i(t){n||(st(i),n=!0)},o(t){ot(i),n=!1},d(t){i&&i.d(t),t&&b(e)}}}function Mt(t,e,n){let i,{$$slots:s={},$$scope:o}=e,{class:l=""}=e,{style:c=""}=e,a=0,u=0;const{activeSlideStore:d,getId:f}=R("slide");r(t,d,(t=>n(11,i=t)));let{center:p=!1}=e,{transitionIn:h={duration:500,x:-2e3}}=e,{transitionOut:v={duration:500,x:2e3}}=e;return O((()=>{n(5,a=f())})),t.$$set=t=>{"class"in t&&n(2,l=t.class),"style"in t&&n(3,c=t.style),"center"in t&&n(4,p=t.center),"transitionIn"in t&&n(0,h=t.transitionIn),"transitionOut"in t&&n(1,v=t.transitionOut),"$$scope"in t&&n(8,o=t.$$scope)},t.$$.update=()=>{t.$$.dirty,64&t.$$.dirty&&d.set(u),2048&t.$$.dirty&&(t=>{const e=(t=>{let e=!1;return t<0&&(e=!0,t=-t),{num:t,negative:e}})(t);e.negative?(n(0,h.x=2e3,h),n(1,v.x=-2e3,v)):(n(0,h.x=-2e3,h),n(1,v.x=2e3,v)),n(6,u=e.num)})(i)},[h,v,l,c,p,a,u,d,o,s]}class Xt extends ht{constructor(t){var e;super(),document.getElementById("svelte-1jzpibp-style")||((e=w("style")).id="svelte-1jzpibp-style",e.textContent=".svelte-fp-content.svelte-1jzpibp{height:inherit;width:inherit;position:absolute;left:0;right:0;top:0;bottom:0}.svelte-fp-flexbox-center.svelte-1jzpibp{display:flex;justify-content:center;align-items:center}",$(document.head,e)),pt(this,t,Mt,Lt,l,{class:2,style:3,center:4,transitionIn:0,transitionOut:1})}}export{Dt as Fullpage,Nt as FullpageSection,Xt as FullpageSlide};
