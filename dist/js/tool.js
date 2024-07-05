(()=>{"use strict";var e,t={405:(e,t,n)=>{const r=Vue;var o=(0,r.createElementVNode)("svg",{class:"spin fill-80 mb-6",width:"69",height:"72",viewBox:"0 0 23 24",xmlns:"http://www.w3.org/2000/svg"},[(0,r.createElementVNode)("path",{d:"M20.12 20.455A12.184 12.184 0 0 1 11.5 24a12.18 12.18 0 0 1-9.333-4.319c4.772 3.933 11.88 3.687 16.36-.738a7.571 7.571 0 0 0 0-10.8c-3.018-2.982-7.912-2.982-10.931 0a3.245 3.245 0 0 0 0 4.628 3.342 3.342 0 0 0 4.685 0 1.114 1.114 0 0 1 1.561 0 1.082 1.082 0 0 1 0 1.543 5.57 5.57 0 0 1-7.808 0 5.408 5.408 0 0 1 0-7.714c3.881-3.834 10.174-3.834 14.055 0a9.734 9.734 0 0 1 .03 13.855zM4.472 5.057a7.571 7.571 0 0 0 0 10.8c3.018 2.982 7.912 2.982 10.931 0a3.245 3.245 0 0 0 0-4.628 3.342 3.342 0 0 0-4.685 0 1.114 1.114 0 0 1-1.561 0 1.082 1.082 0 0 1 0-1.543 5.57 5.57 0 0 1 7.808 0 5.408 5.408 0 0 1 0 7.714c-3.881 3.834-10.174 3.834-14.055 0a9.734 9.734 0 0 1-.015-13.87C5.096 1.35 8.138 0 11.5 0c3.75 0 7.105 1.68 9.333 4.319C16.06.386 8.953.632 4.473 5.057z","fill-rule":"evenodd"})],-1),i=(0,r.createElementVNode)("h1",{class:"dark:text-white text-4xl font-light mb-6"}," We're in a black hole. ",-1),a=(0,r.createElementVNode)("p",{class:"dark:text-white text-lg opacity-70"},[(0,r.createTextVNode)(" You can edit this tool's component at: "),(0,r.createElementVNode)("code",{class:"ml-1 border border-gray-100 dark:border-gray-900 text-sm font-mono text-white bg-black rounded px-2 py-1"}," /nova-components/FixedMenu/resources/js/pages/Tool.vue ")],-1);const c={mounted:function(){}};var s=n(72),l=n.n(s),d=n(341),u={insert:"head",singleton:!1};l()(d.A,u);d.A.locals;const f=(0,n(262).A)(c,[["render",function(e,t,n,c,s,l){var d=(0,r.resolveComponent)("Head"),u=(0,r.resolveComponent)("Heading"),f=(0,r.resolveComponent)("Card");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createVNode)(d,{title:"Fixed Menu"}),(0,r.createVNode)(u,{class:"mb-6"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Fixed Menu")]})),_:1}),(0,r.createVNode)(f,{class:"flex flex-col items-center justify-center",style:{"min-height":"300px"}},{default:(0,r.withCtx)((function(){return[o,i,a]})),_:1})])}]]);Nova.booting((function(e,t){Nova.inertia("FixedMenu",f),window.onload=function(){var e,t,n;console.log("loaded"),e=document.querySelectorAll(".sidebar-menu")[1],t=document.querySelector("header").offsetHeight,n=window.innerHeight-t,e.style.height="".concat(n,"px"),e.style.width="250px",new MutationObserver((function(e){e.forEach((function(e){var t=document.querySelector('[data-testid="resource-table"]');if(t){if(t.classList.contains("sticky-applied"))return;var n=t.parentElement;n.style.maxHeight="60vh",n.style.overflowY="scroll",t.classList.add("sticky-applied")}var r=document.querySelector("thead");if(r){if(r.classList.contains("sticky-applied"))return;r.style.position="sticky",r.style.top=0,r.style.zIndex=10,r.classList.add("sticky-applied")}}))})).observe(document.body,{childList:!0,subtree:!0}),function(){if(n=window.location.href,/\/resources\/[^\/]+\/\d+$/.test(n)){console.log("is detail");var e=document.querySelector("div[resource]");if(console.log(e),e){var t=e.parentElement;t.style.position="sticky",t.style.top="10px"}}else console.log("not detail");var n}()}}))},341:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(314),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"",""]);const i=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},351:()=>{},72:(e,t,n)=>{var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:m(f,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function v(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=v.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,o,i]=e[d],c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={416:0,757:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,c,s]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var d=s(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self.webpackChunkmices_fixed_menu=self.webpackChunkmices_fixed_menu||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0,r.O(void 0,[757],(()=>r(405)));var o=r.O(void 0,[757],(()=>r(351)));o=r.O(o)})();