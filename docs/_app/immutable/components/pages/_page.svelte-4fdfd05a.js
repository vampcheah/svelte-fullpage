import{S as Z,i as x,s as $,k as w,l as S,m as D,h as g,n as y,b as V,F as m,H as R,A as Q,I as Le,f as T,g as re,d as ae,t as I,J as Ue,K as ce,L as De,v as A,w as H,x as O,M as ye,y as Y,B as Ie,a as P,c as C,N as oe,C as ke,D as Ve,E as Fe,O as Ne,G as be,P as Xe,e as we,Q as ze,o as Ke,R as Se,T as Me,U as Pe,V as $e,W as et,X as tt,q as U,r as N}from"../../chunks/index-5c7fc3b6.js";import{w as We}from"../../chunks/index-39244a04.js";function st(o){let e,t,l,a,n,c;return{c(){e=w("li"),t=w("button"),this.h()},l(s){e=S(s,"LI",{class:!0});var r=D(e);t=S(r,"BUTTON",{title:!0,class:!0});var i=D(t);i.forEach(g),r.forEach(g),this.h()},h(){y(t,"title",l=o[2]||""),y(t,"class",a="svelte-fp-indicator-list-item-btn "+(o[0]===o[1]?"svelte-fp-active":"")+" svelte-15pet1x"),y(e,"class","svelte-fp-indicator-list-item svelte-15pet1x")},m(s,r){V(s,e,r),m(e,t),n||(c=R(t,"click",o[3]),n=!0)},p(s,[r]){r&4&&l!==(l=s[2]||"")&&y(t,"title",l),r&3&&a!==(a="svelte-fp-indicator-list-item-btn "+(s[0]===s[1]?"svelte-fp-active":"")+" svelte-15pet1x")&&y(t,"class",a)},i:Q,o:Q,d(s){s&&g(e),n=!1,c()}}}function lt(o,e,t){let{activeDot:l=0}=e,{index:a=0}=e,{title:n=""}=e;const c=Le(),s=()=>{c("click",a)};return o.$$set=r=>{"activeDot"in r&&t(0,l=r.activeDot),"index"in r&&t(1,a=r.index),"title"in r&&t(2,n=r.title)},[l,a,n,s]}class Ge extends Z{constructor(e){super(),x(this,e,lt,st,$,{activeDot:0,index:1,title:2})}}function Ce(o,e,t){const l=o.slice();return l[4]=e[t],l[6]=t,l}function qe(o){let e,t,l;function a(c){o[3](c)}let n={title:o[4],index:o[6]};return o[0]!==void 0&&(n.activeDot=o[0]),e=new Ge({props:n}),ce.push(()=>De(e,"activeDot",a)),e.$on("click",o[2]),{c(){A(e.$$.fragment)},l(c){H(e.$$.fragment,c)},m(c,s){O(e,c,s),l=!0},p(c,s){const r={};s&2&&(r.title=c[4]),!t&&s&1&&(t=!0,r.activeDot=c[0],ye(()=>t=!1)),e.$set(r)},i(c){l||(T(e.$$.fragment,c),l=!0)},o(c){I(e.$$.fragment,c),l=!1},d(c){Y(e,c)}}}function nt(o){let e,t,l,a=o[1],n=[];for(let s=0;s<a.length;s+=1)n[s]=qe(Ce(o,a,s));const c=s=>I(n[s],1,1,()=>{n[s]=null});return{c(){e=w("div"),t=w("ul");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=S(s,"DIV",{class:!0});var r=D(e);t=S(r,"UL",{class:!0});var i=D(t);for(let f=0;f<n.length;f+=1)n[f].l(i);i.forEach(g),r.forEach(g),this.h()},h(){y(t,"class","svelte-fp-indicator-list svelte-dh6fo0"),y(e,"class","svelte-fp-indicator svelte-dh6fo0")},m(s,r){V(s,e,r),m(e,t);for(let i=0;i<n.length;i+=1)n[i].m(t,null);l=!0},p(s,[r]){if(r&7){a=s[1];let i;for(i=0;i<a.length;i+=1){const f=Ce(s,a,i);n[i]?(n[i].p(f,r),T(n[i],1)):(n[i]=qe(f),n[i].c(),T(n[i],1),n[i].m(t,null))}for(re(),i=a.length;i<n.length;i+=1)c(i);ae()}},i(s){if(!l){for(let r=0;r<a.length;r+=1)T(n[r]);l=!0}},o(s){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)I(n[r]);l=!1},d(s){s&&g(e),Ue(n,s)}}}function it(o,e,t){let{sections:l}=e,{activeSection:a=0}=e;const n=s=>{t(0,a=s.detail)};function c(s){a=s,t(0,a)}return o.$$set=s=>{"sections"in s&&t(1,l=s.sections),"activeSection"in s&&t(0,a=s.activeSection)},[a,l,n,c]}class ot extends Z{constructor(e){super(),x(this,e,it,nt,$,{sections:1,activeSection:0})}}function rt(o){let e,t,l,a,n,c,s,r,i,f;const d=o[22].default,u=Ie(d,o,o[21],null);function _(p){o[25](p)}let b={sections:o[2]};return o[0]!==void 0&&(b.activeSection=o[0]),c=new ot({props:b}),ce.push(()=>De(c,"activeSection",_)),{c(){e=P(),t=w("div"),l=w("div"),a=w("div"),u&&u.c(),n=P(),A(c.$$.fragment),this.h()},l(p){e=C(p),t=S(p,"DIV",{class:!0,style:!0});var k=D(t);l=S(k,"DIV",{class:!0});var E=D(l);a=S(E,"DIV",{class:!0});var F=D(a);u&&u.l(F),F.forEach(g),n=C(E),H(c.$$.fragment,E),E.forEach(g),k.forEach(g),this.h()},h(){y(a,"class","svelte-fp-container svelte-ng9shq"),y(l,"class","svelte-fp-container svelte-ng9shq"),y(t,"class",oe(o[5])+" svelte-ng9shq"),y(t,"style",o[1])},m(p,k){V(p,e,k),V(p,t,k),m(t,l),m(l,a),u&&u.m(a,null),o[24](a),m(l,n),O(c,l,null),r=!0,i||(f=[R(window,"keydown",o[23]),R(t,"wheel",o[26]),R(t,"touchstart",o[27]),R(t,"touchmove",o[28]),R(t,"drag",at),R(t,"mousedown",o[29]),R(t,"mouseup",o[30])],i=!0)},p(p,k){u&&u.p&&(!r||k[0]&2097152)&&ke(u,d,p,p[21],r?Fe(d,p[21],k,null):Ve(p[21]),null);const E={};k[0]&4&&(E.sections=p[2]),!s&&k[0]&1&&(s=!0,E.activeSection=p[0],ye(()=>s=!1)),c.$set(E),(!r||k[0]&2)&&y(t,"style",p[1])},i(p){r||(T(u,p),T(c.$$.fragment,p),r=!0)},o(p){I(u,p),I(c.$$.fragment,p),r=!1},d(p){p&&g(e),p&&g(t),u&&u.d(p),o[24](null),Y(c),i=!1,Ne(f)}}}const at=()=>!1;function ct(o,e,t){let l,{$$slots:a={},$$scope:n}=e,{class:c=""}=e,{style:s=""}=e,{activeSection:r=0}=e;const i=We(r);be(o,i,v=>t(35,l=v));let f=0,{sectionTitles:d=!1}=e,u=[],{transitionDuration:_=500}=e,{arrows:b=!1}=e,{drag:p=!1}=e,{dragThreshold:k=100}=e,{touchThreshold:E=75}=e,{pullDownToRefresh:F=!1}=e,K,M,W,fe=`${c} svelte-fp-wrapper`,X=0;Xe("section",{activeSectionStore:i,getId:()=>(t(20,f++,f),f-1)});const j=v=>{let q=v.deltaY,L=new Date().getTime();_<L-X&&(X=L,q<0?G():q>0&&J())},G=async()=>{l>0&&t(0,r--,r)},J=async()=>{l<f-1&&t(0,r++,r)},ee=v=>{if(b)switch(v.key){case"ArrowDown":J();break;case"ArrowUp":G();break}},z=v=>{p&&(M=v.screenY)},te=v=>{if(p){const q=v.screenY;M-q>k?J():M-q<-k&&G()}},ie=v=>{W=v.touches[0].screenY},ue=v=>{let q=new Date().getTime();const L=v.touches[0].screenY;_<q-X&&(W-L>E?(J(),X=q):W-L<-E&&(G(),X=q))},se=(v,q)=>{if(q!==0&&!v){t(2,u=[]);for(let L=0;q>L;L++)t(2,u=[...u,`Section ${L+1}`])}},le=v=>ee(v);function de(v){ce[v?"unshift":"push"](()=>{K=v,t(3,K)})}function he(v){r=v,t(0,r)}const _e=v=>j(v),ge=v=>ie(v),ve=v=>ue(v),me=v=>z(v),Ee=v=>te(v);return o.$$set=v=>{"class"in v&&t(12,c=v.class),"style"in v&&t(1,s=v.style),"activeSection"in v&&t(0,r=v.activeSection),"sectionTitles"in v&&t(13,d=v.sectionTitles),"transitionDuration"in v&&t(14,_=v.transitionDuration),"arrows"in v&&t(15,b=v.arrows),"drag"in v&&t(16,p=v.drag),"dragThreshold"in v&&t(17,k=v.dragThreshold),"touchThreshold"in v&&t(18,E=v.touchThreshold),"pullDownToRefresh"in v&&t(19,F=v.pullDownToRefresh),"$$scope"in v&&t(21,n=v.$$scope)},o.$$.update=()=>{o.$$.dirty[0]&1&&i.set(r),o.$$.dirty[0]&8192&&d&&t(2,u=d),o.$$.dirty[0]&1056768&&se(d,f)},[r,s,u,K,i,fe,j,ee,z,te,ie,ue,c,d,_,b,p,k,E,F,f,n,a,le,de,he,_e,ge,ve,me,Ee]}class ft extends Z{constructor(e){super(),x(this,e,ct,rt,$,{class:12,style:1,activeSection:0,sectionTitles:13,transitionDuration:14,arrows:15,drag:16,dragThreshold:17,touchThreshold:18,pullDownToRefresh:19},null,[-1,-1])}}function Re(o,e,t){const l=o.slice();return l[5]=e[t],l[7]=t,l}function Ae(o){let e,t,l;function a(c){o[3](c)}let n={title:o[5],index:o[7]};return o[0]!==void 0&&(n.activeDot=o[0]),e=new Ge({props:n}),ce.push(()=>De(e,"activeDot",a)),e.$on("click",o[2]),{c(){A(e.$$.fragment)},l(c){H(e.$$.fragment,c)},m(c,s){O(e,c,s),l=!0},p(c,s){const r={};s&2&&(r.title=c[5]),!t&&s&1&&(t=!0,r.activeDot=c[0],ye(()=>t=!1)),e.$set(r)},i(c){l||(T(e.$$.fragment,c),l=!0)},o(c){I(e.$$.fragment,c),l=!1},d(c){Y(e,c)}}}function ut(o){let e,t,l,a=o[1],n=[];for(let s=0;s<a.length;s+=1)n[s]=Ae(Re(o,a,s));const c=s=>I(n[s],1,1,()=>{n[s]=null});return{c(){e=w("div"),t=w("ul");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=S(s,"DIV",{class:!0});var r=D(e);t=S(r,"UL",{class:!0});var i=D(t);for(let f=0;f<n.length;f+=1)n[f].l(i);i.forEach(g),r.forEach(g),this.h()},h(){y(t,"class","svelte-fp-indicator-list-horizontal svelte-1nsqib7"),y(e,"class","svelte-fp-indicator-horizontal svelte-1nsqib7")},m(s,r){V(s,e,r),m(e,t);for(let i=0;i<n.length;i+=1)n[i].m(t,null);l=!0},p(s,[r]){if(r&7){a=s[1];let i;for(i=0;i<a.length;i+=1){const f=Re(s,a,i);n[i]?(n[i].p(f,r),T(n[i],1)):(n[i]=Ae(f),n[i].c(),T(n[i],1),n[i].m(t,null))}for(re(),i=a.length;i<n.length;i+=1)c(i);ae()}},i(s){if(!l){for(let r=0;r<a.length;r+=1)T(n[r]);l=!0}},o(s){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)I(n[r]);l=!1},d(s){s&&g(e),Ue(n,s)}}}function dt(o,e,t){let{slides:l}=e,{activeSlideIndicator:a}=e;const n=Le(),c=r=>{n("toSlide",r.detail)};function s(r){a=r,t(0,a)}return o.$$set=r=>{"slides"in r&&t(1,l=r.slides),"activeSlideIndicator"in r&&t(0,a=r.activeSlideIndicator)},[a,l,c,s]}class ht extends Z{constructor(e){super(),x(this,e,dt,ut,$,{slides:1,activeSlideIndicator:0})}}function Je(o){const e=o-1;return e*e*e+1}function He(o,{delay:e=0,duration:t=400,easing:l=Je,x:a=0,y:n=0,opacity:c=0}={}){const s=getComputedStyle(o),r=+s.opacity,i=s.transform==="none"?"":s.transform,f=r*(1-c);return{delay:e,duration:t,easing:l,css:(d,u)=>`
			transform: ${i} translate(${(1-d)*a}px, ${(1-d)*n}px);
			opacity: ${r-f*u}`}}function Oe(o,{delay:e=0,duration:t=400,easing:l=Je}={}){const a=getComputedStyle(o),n=+a.opacity,c=parseFloat(a.height),s=parseFloat(a.paddingTop),r=parseFloat(a.paddingBottom),i=parseFloat(a.marginTop),f=parseFloat(a.marginBottom),d=parseFloat(a.borderTopWidth),u=parseFloat(a.borderBottomWidth);return{delay:e,duration:t,easing:l,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*n};height: ${_*c}px;padding-top: ${_*s}px;padding-bottom: ${_*r}px;margin-top: ${_*i}px;margin-bottom: ${_*f}px;border-top-width: ${_*d}px;border-bottom-width: ${_*u}px;`}}function Ye(o){let e,t,l,a,n,c,s,r;const i=o[28].default,f=Ie(i,o,o[27],null);let d=o[4]>0&&Be(o);return{c(){e=w("section"),t=w("div"),f&&f.c(),l=P(),d&&d.c(),this.h()},l(u){e=S(u,"SECTION",{class:!0,style:!0});var _=D(e);t=S(_,"DIV",{class:!0});var b=D(t);f&&f.l(b),b.forEach(g),l=C(_),d&&d.l(_),_.forEach(g),this.h()},h(){y(t,"class","svelte-fp-container svelte-fp-flexbox-expand svelte-1g213na"),Se(t,"svelte-fp-flexbox-center",o[1]),y(e,"class",a=oe(o[7])+" svelte-1g213na"),y(e,"style",o[0])},m(u,_){V(u,e,_),m(e,t),f&&f.m(t,null),m(e,l),d&&d.m(e,null),c=!0,s||(r=[R(e,"selectstart",o[10]),R(e,"mousedown",o[31]),R(e,"mouseup",o[32]),R(e,"touchstart",o[33]),R(e,"touchmove",o[34])],s=!0)},p(u,_){o=u,f&&f.p&&(!c||_[0]&134217728)&&ke(f,i,o,o[27],c?Fe(i,o[27],_,null):Ve(o[27]),null),_[0]&2&&Se(t,"svelte-fp-flexbox-center",o[1]),o[4]>0?d?(d.p(o,_),_[0]&16&&T(d,1)):(d=Be(o),d.c(),T(d,1),d.m(e,null)):d&&(re(),I(d,1,1,()=>{d=null}),ae()),(!c||_[0]&128&&a!==(a=oe(o[7])+" svelte-1g213na"))&&y(e,"class",a),(!c||_[0]&1)&&y(e,"style",o[0])},i(u){c||(T(f,u),T(d),Me(()=>{n||(n=Pe(e,Oe,o[2],!0)),n.run(1)}),c=!0)},o(u){I(f,u),I(d),n||(n=Pe(e,Oe,o[2],!1)),n.run(0),c=!1},d(u){u&&g(e),f&&f.d(u),d&&d.d(),u&&n&&n.end(),s=!1,Ne(r)}}}function Be(o){let e,t;return e=new ht({props:{slides:o[5],activeSlideIndicator:o[6]}}),e.$on("toSlide",o[30]),{c(){A(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,a){O(e,l,a),t=!0},p(l,a){const n={};a[0]&32&&(n.slides=l[5]),a[0]&64&&(n.activeSlideIndicator=l[6]),e.$set(n)},i(l){t||(T(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function _t(o){let e,t,l,a,n=o[3]&&Ye(o);return{c(){n&&n.c(),e=we()},l(c){n&&n.l(c),e=we()},m(c,s){n&&n.m(c,s),V(c,e,s),t=!0,l||(a=R(window,"keydown",o[29]),l=!0)},p(c,s){c[3]?n?(n.p(c,s),s[0]&8&&T(n,1)):(n=Ye(c),n.c(),T(n,1),n.m(e.parentNode,e)):n&&(re(),I(n,1,1,()=>{n=null}),ae())},i(c){t||(T(n),t=!0)},o(c){I(n),t=!1},d(c){n&&n.d(c),c&&g(e),l=!1,a()}}}function gt(o,e,t){let l,a,{$$slots:n={},$$scope:c}=e,{class:s=""}=e,{style:r=""}=e,i;const{getId:f,activeSectionStore:d}=ze("section");be(o,d,h=>t(26,l=h));let{slideTitles:u=!1}=e,_=[],{activeSlide:b=0}=e;const p=We(b);be(o,p,h=>t(38,a=h));let{center:k=!1}=e,{arrows:E=!1}=e,{select:F=!1}=e,{transitionDuration:K=500}=e,{dragThreshold:M=100}=e,{touchThreshold:W=75}=e,{transition:fe={duration:K}}=e;i=parseInt(i);let X,j=b,G,J,ee=0,z=0,te=`${s} svelte-fp-section svelte-fp-flexbox-center`;F||(te=`${te} svelte-fp-unselectable`),Xe("slide",{activeSlideStore:p,getId:()=>(t(4,z++,z),z-1)});const ie=h=>{let B=!1;return h<0&&(B=!0,h=-h),{num:h,negative:B}},ue=()=>{if(!F)return!1},se=()=>{const h=ie(a);h.num<_.length-1?(t(6,j=h.num+1),p.set(-j)):(p.set(0),t(6,j=a))},le=()=>{const h=ie(a);h.num>0?p.set(h.num-1):p.set(_.length-1),t(6,j=a)},de=h=>{if(h>j)for(;h>j;)se();else for(;h<j;)le()},he=h=>{if(E)switch(h.key){case"ArrowLeft":le();break;case"ArrowRight":se();break}},_e=h=>{G=h.screenX},ge=h=>{const B=h.screenX;G-B>M?se():G-B<-M&&le()},ve=h=>{J=h.touches[0].screenX},me=h=>{let B=new Date().getTime();const ne=h.touches[0].screenX;K<B-ee&&(J-ne>W?(se(),ee=B):J-ne<-W&&(le(),ee=B))},Ee=(h,B)=>{if(B!==0&&!h){t(5,_=[]);for(let ne=0;B>ne;ne++)t(5,_=[..._,`Slide ${ne+1}`])}};Ke(()=>{t(25,i=f())});const v=h=>he(h),q=h=>de(h.detail),L=h=>_e(h),Qe=h=>ge(h),Ze=h=>ve(h),xe=h=>me(h);return o.$$set=h=>{"class"in h&&t(17,s=h.class),"style"in h&&t(0,r=h.style),"slideTitles"in h&&t(18,u=h.slideTitles),"activeSlide"in h&&t(19,b=h.activeSlide),"center"in h&&t(1,k=h.center),"arrows"in h&&t(20,E=h.arrows),"select"in h&&t(21,F=h.select),"transitionDuration"in h&&t(22,K=h.transitionDuration),"dragThreshold"in h&&t(23,M=h.dragThreshold),"touchThreshold"in h&&t(24,W=h.touchThreshold),"transition"in h&&t(2,fe=h.transition),"$$scope"in h&&t(27,c=h.$$scope)},o.$$.update=()=>{o.$$.dirty[0]&100663296&&t(3,X=i===l),o.$$.dirty[0]&524288&&p.set(b),o.$$.dirty[0]&8&&(X||t(4,z=0)),o.$$.dirty[0]&262144&&u&&t(5,_=u),o.$$.dirty[0]&262160&&Ee(u,z)},[r,k,fe,X,z,_,j,te,d,p,ue,de,he,_e,ge,ve,me,s,u,b,E,F,K,M,W,i,l,c,n,v,q,L,Qe,Ze,xe]}class pe extends Z{constructor(e){super(),x(this,e,gt,_t,$,{class:17,style:0,slideTitles:18,activeSlide:19,center:1,arrows:20,select:21,transitionDuration:22,dragThreshold:23,touchThreshold:24,transition:2},null,[-1,-1])}}function je(o){let e,t,l,a,n;const c=o[10].default,s=Ie(c,o,o[9],null);return{c(){e=w("div"),s&&s.c(),this.h()},l(r){e=S(r,"DIV",{class:!0,style:!0});var i=D(e);s&&s.l(i),i.forEach(g),this.h()},h(){y(e,"class",t=oe(`${o[2]} svelte-fp-content`)+" svelte-1jzpibp"),y(e,"style",o[3]),Se(e,"svelte-fp-flexbox-center",o[4])},m(r,i){V(r,e,i),s&&s.m(e,null),n=!0},p(r,i){o=r,s&&s.p&&(!n||i&512)&&ke(s,c,o,o[9],n?Fe(c,o[9],i,null):Ve(o[9]),null),(!n||i&4&&t!==(t=oe(`${o[2]} svelte-fp-content`)+" svelte-1jzpibp"))&&y(e,"class",t),(!n||i&8)&&y(e,"style",o[3]),i&20&&Se(e,"svelte-fp-flexbox-center",o[4])},i(r){n||(T(s,r),Me(()=>{a&&a.end(1),l=$e(e,He,o[0]),l.start()}),n=!0)},o(r){I(s,r),l&&l.invalidate(),a=et(e,He,o[1]),n=!1},d(r){r&&g(e),s&&s.d(r),r&&a&&a.end()}}}function vt(o){let e,t,l=o[6]===o[5]&&je(o);return{c(){l&&l.c(),e=we()},l(a){l&&l.l(a),e=we()},m(a,n){l&&l.m(a,n),V(a,e,n),t=!0},p(a,[n]){a[6]===a[5]?l?(l.p(a,n),n&96&&T(l,1)):(l=je(a),l.c(),T(l,1),l.m(e.parentNode,e)):l&&(re(),I(l,1,1,()=>{l=null}),ae())},i(a){t||(T(l),t=!0)},o(a){I(l),t=!1},d(a){l&&l.d(a),a&&g(e)}}}function mt(o,e,t){let l,{$$slots:a={},$$scope:n}=e,{class:c=""}=e,{style:s=""}=e,r=0,i=0;const{activeSlideStore:f,getId:d}=ze("slide");be(o,f,E=>t(8,l=E));let{center:u=!1}=e,{transitionIn:_={duration:500,x:-2e3}}=e,{transitionOut:b={duration:500,x:2e3}}=e;const p=E=>{let F=!1;return E<0&&(F=!0,E=-E),{num:E,negative:F}},k=E=>{const F=p(E);F.negative?(t(0,_.x=2e3,_),t(1,b.x=-2e3,b)):(t(0,_.x=-2e3,_),t(1,b.x=2e3,b)),t(5,i=F.num)};return Ke(()=>{t(6,r=d())}),o.$$set=E=>{"class"in E&&t(2,c=E.class),"style"in E&&t(3,s=E.style),"center"in E&&t(4,u=E.center),"transitionIn"in E&&t(0,_=E.transitionIn),"transitionOut"in E&&t(1,b=E.transitionOut),"$$scope"in E&&t(9,n=E.$$scope)},o.$$.update=()=>{o.$$.dirty&32&&f.set(i),o.$$.dirty&256&&k(l)},[_,b,c,s,u,i,r,f,l,n,a]}class Te extends Z{constructor(e){super(),x(this,e,mt,vt,$,{class:2,style:3,center:4,transitionIn:0,transitionOut:1})}}function pt(o){let e,t,l,a,n,c,s,r;return{c(){e=w("div"),t=w("div"),l=w("div"),a=w("h1"),n=U("Svelte Fullpage"),c=P(),s=w("p"),r=U(`This page is made using svelte-fullpage component, try to scroll, drag with mouse or swipe
                        vertical with finger or use arrows to scroll.`),this.h()},l(i){e=S(i,"DIV",{class:!0});var f=D(e);t=S(f,"DIV",{class:!0});var d=D(t);l=S(d,"DIV",{class:!0});var u=D(l);a=S(u,"H1",{});var _=D(a);n=N(_,"Svelte Fullpage"),_.forEach(g),c=C(u),s=S(u,"P",{});var b=D(s);r=N(b,`This page is made using svelte-fullpage component, try to scroll, drag with mouse or swipe
                        vertical with finger or use arrows to scroll.`),b.forEach(g),u.forEach(g),d.forEach(g),f.forEach(g),this.h()},h(){y(l,"class","col"),y(t,"class","row"),y(e,"class","container text-center")},m(i,f){V(i,e,f),m(e,t),m(t,l),m(l,a),m(a,n),m(l,c),m(l,s),m(s,r)},p:Q,d(i){i&&g(e)}}}function bt(o){let e,t,l,a,n,c,s,r;return{c(){e=w("div"),t=w("div"),l=w("div"),a=w("h1"),n=U("Slides"),c=P(),s=w("p"),r=U(`There is also component for slides as you can see.
                            Try to drag/swipe right or left, also you can use arrows.`),this.h()},l(i){e=S(i,"DIV",{class:!0});var f=D(e);t=S(f,"DIV",{class:!0});var d=D(t);l=S(d,"DIV",{class:!0});var u=D(l);a=S(u,"H1",{});var _=D(a);n=N(_,"Slides"),_.forEach(g),c=C(u),s=S(u,"P",{});var b=D(s);r=N(b,`There is also component for slides as you can see.
                            Try to drag/swipe right or left, also you can use arrows.`),b.forEach(g),u.forEach(g),d.forEach(g),f.forEach(g),this.h()},h(){y(l,"class","col"),y(t,"class","row"),y(e,"class","container text-center")},m(i,f){V(i,e,f),m(e,t),m(t,l),m(l,a),m(a,n),m(l,c),m(l,s),m(s,r)},p:Q,d(i){i&&g(e)}}}function wt(o){let e,t,l,a,n,c,s,r;return{c(){e=w("div"),t=w("div"),l=w("div"),a=w("h1"),n=U("Another slide"),c=P(),s=w("p"),r=U("You can style every individual slide, notice background change."),this.h()},l(i){e=S(i,"DIV",{class:!0});var f=D(e);t=S(f,"DIV",{class:!0});var d=D(t);l=S(d,"DIV",{class:!0});var u=D(l);a=S(u,"H1",{});var _=D(a);n=N(_,"Another slide"),_.forEach(g),c=C(u),s=S(u,"P",{});var b=D(s);r=N(b,"You can style every individual slide, notice background change."),b.forEach(g),u.forEach(g),d.forEach(g),f.forEach(g),this.h()},h(){y(l,"class","col"),y(t,"class","row"),y(e,"class","container text-center")},m(i,f){V(i,e,f),m(e,t),m(t,l),m(l,a),m(a,n),m(l,c),m(l,s),m(s,r)},p:Q,d(i){i&&g(e)}}}function St(o){let e,t,l,a,n,c,s,r;return{c(){e=w("div"),t=w("div"),l=w("div"),a=w("h1"),n=U("Embeds"),c=P(),s=w("p"),r=U(`svelte-fullpage supports also embeds and iframes, scroll down to see example, you will see
                            page but loaded using embed. Scrolling on embaded page is enabled, but also fulpage
                            scrolling is still working, try to scroll hovering over fullpage section indicator (grey dots).`),this.h()},l(i){e=S(i,"DIV",{class:!0});var f=D(e);t=S(f,"DIV",{class:!0});var d=D(t);l=S(d,"DIV",{class:!0});var u=D(l);a=S(u,"H1",{});var _=D(a);n=N(_,"Embeds"),_.forEach(g),c=C(u),s=S(u,"P",{});var b=D(s);r=N(b,`svelte-fullpage supports also embeds and iframes, scroll down to see example, you will see
                            page but loaded using embed. Scrolling on embaded page is enabled, but also fulpage
                            scrolling is still working, try to scroll hovering over fullpage section indicator (grey dots).`),b.forEach(g),u.forEach(g),d.forEach(g),f.forEach(g),this.h()},h(){y(l,"class","col"),y(t,"class","row"),y(e,"class","container text-center")},m(i,f){V(i,e,f),m(e,t),m(t,l),m(l,a),m(a,n),m(l,c),m(l,s),m(s,r)},p:Q,d(i){i&&g(e)}}}function Dt(o){let e,t,l,a,n,c;return e=new Te({props:{center:!0,$$slots:{default:[bt]},$$scope:{ctx:o}}}),l=new Te({props:{class:"bg-danger",center:!0,$$slots:{default:[wt]},$$scope:{ctx:o}}}),n=new Te({props:{class:"bg-success",center:!0,$$slots:{default:[St]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=P(),A(l.$$.fragment),a=P(),A(n.$$.fragment)},l(s){H(e.$$.fragment,s),t=C(s),H(l.$$.fragment,s),a=C(s),H(n.$$.fragment,s)},m(s,r){O(e,s,r),V(s,t,r),O(l,s,r),V(s,a,r),O(n,s,r),c=!0},p(s,r){const i={};r&16&&(i.$$scope={dirty:r,ctx:s}),e.$set(i);const f={};r&16&&(f.$$scope={dirty:r,ctx:s}),l.$set(f);const d={};r&16&&(d.$$scope={dirty:r,ctx:s}),n.$set(d)},i(s){c||(T(e.$$.fragment,s),T(l.$$.fragment,s),T(n.$$.fragment,s),c=!0)},o(s){I(e.$$.fragment,s),I(l.$$.fragment,s),I(n.$$.fragment,s),c=!1},d(s){Y(e,s),s&&g(t),Y(l,s),s&&g(a),Y(n,s)}}}function yt(o){let e,t,l,a,n,c,s,r,i,f;return i=new Vt({}),{c(){e=w("div"),t=w("div"),l=w("div"),a=w("h1"),n=U("Recursive fullpage"),c=P(),s=w("div"),r=w("div"),A(i.$$.fragment),this.h()},l(d){e=S(d,"DIV",{class:!0});var u=D(e);t=S(u,"DIV",{class:!0});var _=D(t);l=S(_,"DIV",{class:!0});var b=D(l);a=S(b,"H1",{});var p=D(a);n=N(p,"Recursive fullpage"),p.forEach(g),b.forEach(g),_.forEach(g),c=C(u),s=S(u,"DIV",{class:!0});var k=D(s);r=S(k,"DIV",{class:!0});var E=D(r);H(i.$$.fragment,E),E.forEach(g),k.forEach(g),u.forEach(g),this.h()},h(){y(l,"class","col-auto"),y(t,"class","row justify-content-center pt-5 mt-5"),y(r,"class","col-10 h-75 border border-dark rounded-3 position-relative"),y(s,"class","row flex-grow-1 align-items-center justify-content-center"),y(e,"class","container w-100 h-100 d-flex flex-column")},m(d,u){V(d,e,u),m(e,t),m(t,l),m(l,a),m(a,n),m(e,c),m(e,s),m(s,r),O(i,r,null),f=!0},p:Q,i(d){f||(T(i.$$.fragment,d),f=!0)},o(d){I(i.$$.fragment,d),f=!1},d(d){d&&g(e),Y(i)}}}function Et(o){let e,t,l,a,n,c,s,r;return{c(){e=w("div"),t=w("div"),l=w("div"),a=w("h1"),n=U("Future of this component"),c=P(),s=w("p"),r=U(`This component is in development and is far from being ideal, as you noticed (maybe), there
                        is problem with slide animation. Currently I'm the only contributor of this project, feel free
                        to fork it and make pull request.`),this.h()},l(i){e=S(i,"DIV",{class:!0});var f=D(e);t=S(f,"DIV",{class:!0});var d=D(t);l=S(d,"DIV",{class:!0});var u=D(l);a=S(u,"H1",{});var _=D(a);n=N(_,"Future of this component"),_.forEach(g),c=C(u),s=S(u,"P",{});var b=D(s);r=N(b,`This component is in development and is far from being ideal, as you noticed (maybe), there
                        is problem with slide animation. Currently I'm the only contributor of this project, feel free
                        to fork it and make pull request.`),b.forEach(g),u.forEach(g),d.forEach(g),f.forEach(g),this.h()},h(){y(l,"class","col"),y(t,"class","row"),y(e,"class","container text-center")},m(i,f){V(i,e,f),m(e,t),m(t,l),m(l,a),m(a,n),m(l,c),m(l,s),m(s,r)},p:Q,d(i){i&&g(e)}}}function Tt(o){let e,t,l,a,n,c,s,r;return e=new pe({props:{center:!0,$$slots:{default:[pt]},$$scope:{ctx:o}}}),l=new pe({props:{slideTitles:o[2],class:"bg-info",arrows:!0,$$slots:{default:[Dt]},$$scope:{ctx:o}}}),n=new pe({props:{$$slots:{default:[yt]},$$scope:{ctx:o}}}),s=new pe({props:{class:"bg-warning",center:!0,$$slots:{default:[Et]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=P(),A(l.$$.fragment),a=P(),A(n.$$.fragment),c=P(),A(s.$$.fragment)},l(i){H(e.$$.fragment,i),t=C(i),H(l.$$.fragment,i),a=C(i),H(n.$$.fragment,i),c=C(i),H(s.$$.fragment,i)},m(i,f){O(e,i,f),V(i,t,f),O(l,i,f),V(i,a,f),O(n,i,f),V(i,c,f),O(s,i,f),r=!0},p(i,f){const d={};f&16&&(d.$$scope={dirty:f,ctx:i}),e.$set(d);const u={};f&16&&(u.$$scope={dirty:f,ctx:i}),l.$set(u);const _={};f&16&&(_.$$scope={dirty:f,ctx:i}),n.$set(_);const b={};f&16&&(b.$$scope={dirty:f,ctx:i}),s.$set(b)},i(i){r||(T(e.$$.fragment,i),T(l.$$.fragment,i),T(n.$$.fragment,i),T(s.$$.fragment,i),r=!0)},o(i){I(e.$$.fragment,i),I(l.$$.fragment,i),I(n.$$.fragment,i),I(s.$$.fragment,i),r=!1},d(i){Y(e,i),i&&g(t),Y(l,i),i&&g(a),Y(n,i),i&&g(c),Y(s,i)}}}function It(o){let e,t,l,a;function n(s){o[3](s)}let c={sectionTitles:o[1],arrows:!0,drag:!0,$$slots:{default:[Tt]},$$scope:{ctx:o}};return o[0]!==void 0&&(c.activeSection=o[0]),t=new ft({props:c}),ce.push(()=>De(t,"activeSection",n)),{c(){e=P(),A(t.$$.fragment),this.h()},l(s){tt('[data-svelte="svelte-1vyuym9"]',document.head).forEach(g),e=C(s),H(t.$$.fragment,s),this.h()},h(){document.title="Svelte-fullpage"},m(s,r){V(s,e,r),O(t,s,r),a=!0},p(s,[r]){const i={};r&16&&(i.$$scope={dirty:r,ctx:s}),!l&&r&1&&(l=!0,i.activeSection=s[0],ye(()=>l=!1)),t.$set(i)},i(s){a||(T(t.$$.fragment,s),a=!0)},o(s){I(t.$$.fragment,s),a=!1},d(s){s&&g(e),Y(t,s)}}}function kt(o,e,t){const l=["Svelte Fullpage","Features","GitHub","Future"];let a=0;const n=["slides","arrows","drag"];function c(s){a=s,t(0,a)}return[a,l,n,c]}class Vt extends Z{constructor(e){super(),x(this,e,kt,It,$,{})}}export{Vt as default};