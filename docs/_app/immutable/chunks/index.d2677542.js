function y(){}const at=t=>t;function G(t,e){for(const n in e)t[n]=e[n];return t}function M(t){return t()}function T(){return Object.create(null)}function x(t){t.forEach(M)}function O(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(J(e,n))}function ht(t,e,n,i){if(t){const r=L(t,e,n,i);return t[0](r)}}function L(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function mt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function pt(t,e,n,i,r,o){if(r){const c=L(e,n,i,o);t.p(c,r)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function gt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function $t(t,e,n){return t.set(n),e}const z=typeof window<"u";let bt=z?()=>window.performance.now():()=>Date.now(),B=z?t=>requestAnimationFrame(t):y;const m=new Set;function H(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),m.size!==0&&B(H)}function wt(t){let e;return m.size===0&&B(H),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}let E=!1;function K(){E=!0}function Q(){E=!1}function U(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:U(1,r,b=>e[n[b]].claim_order,l))-1;i[s]=n[a]+1;const f=a+1;n[f]=s,r=Math.max(f,r)}const o=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);o.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<o.length&&c[s].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(c[s],a)}}function X(t,e){if(E){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){E&&!n?X(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function kt(){return C(" ")}function At(){return C("")}function Nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function St(t){return function(e){return e.preventDefault(),t.call(this,e)}}function tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:tt(t,i,e[i])}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,r=!1){nt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function it(t,e,n,i){return q(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function jt(t,e,n){return it(t,e,n,Z)}function rt(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function Dt(t){return rt(t," ")}function Tt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Pt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Mt(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Ot(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Lt(t,e){return new t(e)}let g;function p(t){g=t}function $(){if(!g)throw new Error("Function called outside component initialization");return g}function zt(t){$().$$.on_mount.push(t)}function Bt(t){$().$$.after_update.push(t)}function Ht(){const t=$();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=ct(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function qt(t,e){return $().$$.context.set(t,e),e}function Ft(t){return $().$$.context.get(t)}function Rt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],P=[],w=[],A=[],F=Promise.resolve();let N=!1;function R(){N||(N=!0,F.then(W))}function Wt(){return R(),F}function S(t){w.push(t)}function Gt(t){A.push(t)}const k=new Set;let d=0;function W(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const e=h[d];d++,p(e),st(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;P.length;)P.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];k.has(n)||(k.add(n),n())}w.length=0}while(h.length);for(;A.length;)A.pop()();N=!1,k.clear(),p(t)}function st(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const v=new Set;let _;function It(){_={r:0,c:[],p:_}}function Jt(){_.r||x(_.c),_=_.p}function ot(t,e){t&&t.i&&(v.delete(t),t.i(e))}function Kt(t,e,n,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Qt(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],u=e[o];if(u){for(const s in c)s in u||(i[s]=1);for(const s in u)r[s]||(n[s]=u[s],r[s]=1);t[o]=u}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Ut(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Vt(t){t&&t.c()}function Xt(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(M).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(S)}function lt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(h.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,i,r,o,c,u=[-1]){const s=g;p(t);const l=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,b,...j)=>{const D=j.length?j[0]:b;return l.ctx&&r(l.ctx[f],l.ctx[f]=D)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](D),a&&ft(t,f)),b}):[],l.update(),a=!0,x(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){K();const f=et(e.target);l.fragment&&l.fragment.l(f),f.forEach(Y)}else l.fragment&&l.fragment.c();e.intro&&ot(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),Q(),W()}p(s)}class Zt{$destroy(){lt(this,1),this.$destroy=y}$on(e,n){if(!O(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Rt as $,ut as A,lt as B,ht as C,pt as D,yt as E,mt as F,X as G,y as H,dt as I,G as J,bt as K,wt as L,at as M,Ct as N,Mt as O,Nt as P,St as Q,Qt as R,Zt as S,x as T,xt as U,gt as V,J as W,Ht as X,Et as Y,Ut as Z,Gt as _,kt as a,O as a0,qt as a1,$t as a2,Ft as a3,Ot as a4,vt as b,Dt as c,Kt as d,At as e,Jt as f,ot as g,Y as h,Yt as i,Bt as j,Z as k,jt as l,et as m,tt as n,zt as o,Pt as p,C as q,rt as r,_t as s,Wt as t,Tt as u,It as v,P as w,Lt as x,Vt as y,Xt as z};