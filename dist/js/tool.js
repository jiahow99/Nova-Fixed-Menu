(()=>{"use strict";var e,t={405:(e,t,n)=>{const o=Vue;var r=(0,o.createElementVNode)("svg",{class:"spin fill-80 mb-6",width:"69",height:"72",viewBox:"0 0 23 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createElementVNode)("path",{d:"M20.12 20.455A12.184 12.184 0 0 1 11.5 24a12.18 12.18 0 0 1-9.333-4.319c4.772 3.933 11.88 3.687 16.36-.738a7.571 7.571 0 0 0 0-10.8c-3.018-2.982-7.912-2.982-10.931 0a3.245 3.245 0 0 0 0 4.628 3.342 3.342 0 0 0 4.685 0 1.114 1.114 0 0 1 1.561 0 1.082 1.082 0 0 1 0 1.543 5.57 5.57 0 0 1-7.808 0 5.408 5.408 0 0 1 0-7.714c3.881-3.834 10.174-3.834 14.055 0a9.734 9.734 0 0 1 .03 13.855zM4.472 5.057a7.571 7.571 0 0 0 0 10.8c3.018 2.982 7.912 2.982 10.931 0a3.245 3.245 0 0 0 0-4.628 3.342 3.342 0 0 0-4.685 0 1.114 1.114 0 0 1-1.561 0 1.082 1.082 0 0 1 0-1.543 5.57 5.57 0 0 1 7.808 0 5.408 5.408 0 0 1 0 7.714c-3.881 3.834-10.174 3.834-14.055 0a9.734 9.734 0 0 1-.015-13.87C5.096 1.35 8.138 0 11.5 0c3.75 0 7.105 1.68 9.333 4.319C16.06.386 8.953.632 4.473 5.057z","fill-rule":"evenodd"})],-1),i=(0,o.createElementVNode)("h1",{class:"dark:text-white text-4xl font-light mb-6"}," We're in a black hole. ",-1),a=(0,o.createElementVNode)("p",{class:"dark:text-white text-lg opacity-70"},[(0,o.createTextVNode)(" You can edit this tool's component at: "),(0,o.createElementVNode)("code",{class:"ml-1 border border-gray-100 dark:border-gray-900 text-sm font-mono text-white bg-black rounded px-2 py-1"}," /nova-components/FixedMenu/resources/js/pages/Tool.vue ")],-1);const c={mounted:function(){}};var s=n(72),l=n.n(s),d=n(341),u={insert:"head",singleton:!1};l()(d.A,u);d.A.locals;const f=(0,n(262).A)(c,[["render",function(e,t,n,c,s,l){var d=(0,o.resolveComponent)("Head"),u=(0,o.resolveComponent)("Heading"),f=(0,o.resolveComponent)("Card");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(d,{title:"Fixed Menu"}),(0,o.createVNode)(u,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Fixed Menu")]})),_:1}),(0,o.createVNode)(f,{class:"flex flex-col items-center justify-center",style:{"min-height":"300px"}},{default:(0,o.withCtx)((function(){return[r,i,a]})),_:1})])}]]);Nova.booting((function(e,t){Nova.inertia("FixedMenu",f),window.onload=function(){var e,t,n;console.log("loaded"),e=document.querySelectorAll(".sidebar-menu")[1],t=document.querySelector("header").offsetHeight,n=window.innerHeight-t,e.style.height="".concat(n,"px"),e.style.width="250px",new MutationObserver((function(e){e.forEach((function(e){var t=document.querySelector('[data-testid="resource-table"]');if(t){if(t.classList.contains("sticky-applied"))return;var n=t.parentElement;n.style.maxHeight="60vh",n.style.overflowY="scroll",t.classList.add("sticky-applied")}var o=document.querySelector("thead");if(o){if(o.classList.contains("sticky-applied"))return;o.style.position="sticky",o.style.top=0,o.style.zIndex=10,o.classList.add("sticky-applied")}}))})).observe(document.body,{childList:!0,subtree:!0}),function(){if(e=window.location.href,t=/\/resources\/[^\/]+\/\d+$/,console.log("1"),t.test(e)){console.log("is detail"),new MutationObserver((function(e){e.forEach((function(e){var t=document.querySelector("div[resource]");if(console.log(t),t){var n=t.parentElement;n.style.position="sticky",n.style.top="10px"}}))})).observe(document.body,{childList:!0,subtree:!0})}else console.log("not detail");var e,t}()}}))},341:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(314),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"",""]);const i=r},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},351:()=>{},72:(e,t,n)=>{var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:m(f,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function v(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,h=0;function m(e,t){var n,o,r;if(t.singleton){var i=h++;n=p||(p=l(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=l(t),o=v.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=s(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,r,i]=e[d],c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={416:0,757:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,c,s]=n,l=0;if(a.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var d=s(o)}for(t&&t(n);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self.webpackChunkmices_fixed_menu=self.webpackChunkmices_fixed_menu||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0,o.O(void 0,[757],(()=>o(405)));var r=o.O(void 0,[757],(()=>o(351)));r=o.O(r)})();