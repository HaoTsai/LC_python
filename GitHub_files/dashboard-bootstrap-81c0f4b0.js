System.register(["./vendor.js","./frameworks.js"],(function(){"use strict";var e,t,n,r,o,s,i,c,a,d,l,u,f;return{setters:[function(c){e=c.o,t=c.a,n=c.g,r=c.b,o=c.c,s=c.f,i=c.r},function(e){c=e.t,a=e.b,d=e.o,l=e.x,u=e.r,f=e.q}],execute:function(){function h(e){const t=e.map(e=>e.priority),n=Math.min(...t),o=e.find(e=>e.priority===n);if(o){r(o.el,".js-loader").classList.remove("d-none")}}async function m(e,t){const{url:n,el:r}=e;try{const o=await a(document,n);r.replaceWith(o),e.loaded=!0,h(t.filter(e=>!e.loaded))}catch(o){r.classList.add("is-error")}}e(".dashboard-sidebar.js-sticky",{constructor:HTMLElement,initialize(e){if(e.classList.contains("is-placeholder"))return;let t=!0;const n=()=>{const n=e.getBoundingClientRect(),r=window.innerHeight,o="fixed"===e.style.position;o?o&&t&&(t=!1,e.style.height=`${r}px`):(e.style.width="auto",e.style.height=`${r-n.top}px`)};document.addEventListener("scroll",n),window.addEventListener("resize",()=>{t=!0,n()}),n()}}),t("details:toggled",".js-news-feed-event-group",(function(e){if(!e.detail.open)return;const t=e.currentTarget;for(const n of t.querySelectorAll("[data-hydro-view]"))n instanceof HTMLElement&&c(n)}));const p=document.querySelectorAll(".js-dashboard-deferred");if(p.length)try{!function(e){const t=Array.from(e).map(e=>({url:n(e,"data-src"),priority:parseInt(n(e,"data-priority"),10),el:e,loaded:!1}));for(const n of t)m(n,t);h(t)}(p)}catch(v){}t("click",".js-show-more-recent-items",(function(e){e.currentTarget.classList.add("d-none")})),e(".js-recent-activity-container",(function(){const e=document.querySelector(".js-all-activity-header");e&&e.classList.remove("d-none")}));const y=new WeakMap;function j(e){const t=y.get(e)||0;if(t>100)return;const n=e.querySelector(".js-more-repos-form");n&&(y.set(e,t+1),u(n))}function g(e){const t=e.querySelector(".js-your-repositories-search");t&&s(t,"filterable:change")}function w(e){const t=n(e,"data-url"),r=n(e,"data-query-name");f(null,"",function(e,t,n){const r=new URL(e,window.location.origin),o=new URLSearchParams(r.search.slice(1));return t.length<1?o.delete(n):o.set(n,t),r.search=o.toString(),r.toString()}(t,e.value.trim(),r))}d(".js-your-repositories-search",(function(e){j(o(e,".js-repos-container"))})),e(".js-your-repositories-search",{constructor:HTMLInputElement,initialize(e){e.defaultValue.trim().length>0&&g(o(e,".js-repos-container"))}}),l(".js-your-repositories-search",(function(e){w(e.target)})),e(".js-more-repos-form",(function(e){const t=o(e,".js-repos-container");(function(e){const t=e.querySelector(".js-your-repositories-search");return!!t&&(document.activeElement===t||t.defaultValue.trim().length>0)})(t)&&j(t),e.addEventListener("page:loaded",(function(){g(t)}))})),t("pjax:end",".js-repos-container",(function(e){const t=e.target;!function(e){y.set(e,0)}(t),g(t)})),i(".js-user-dashboard-unpin-form",(async function(e,t){let n;const s=o(e,".js-pinned-dashboard-items-container"),i=r(s,".js-unpin-dashboard-item-error");i.hidden=!0;try{n=await t.html()}catch(c){i.hidden=!1}if(n){o(e,".js-pinned-dashboard-item").remove()}}))}}}));
//# sourceMappingURL=dashboard-bootstrap-3a4da00a.js.map
