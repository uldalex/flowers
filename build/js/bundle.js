!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e){t.exports=function(t){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)}},,function(t,e,n){var i=n(3);n(0)((function(){i()}))},function(t,e,n){"use strict";
/*! npm.im/object-fit-images 3.2.4 */var i="bfred-it:object-fit-images",o=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,r="undefined"==typeof Image?{style:{"object-position":1}}:new Image,s="object-fit"in r.style,a="object-position"in r.style,u="background-size"in r.style,c="string"==typeof r.currentSrc,l=r.getAttribute,d=r.setAttribute,f=!1;function p(t,e,n){var i="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";l.call(t,"src")!==i&&d.call(t,"src",i)}function h(t,e){t.naturalWidth?e(t):setTimeout(h,100,t,e)}function g(t){var e=function(t){for(var e,n=getComputedStyle(t).fontFamily,i={};null!==(e=o.exec(n));)i[e[1]]=e[2];return i}(t),n=t[i];if(e["object-fit"]=e["object-fit"]||"fill",!n.img){if("fill"===e["object-fit"])return;if(!n.skipTest&&s&&!e["object-position"])return}if(!n.img){n.img=new Image(t.width,t.height),n.img.srcset=l.call(t,"data-ofi-srcset")||t.srcset,n.img.src=l.call(t,"data-ofi-src")||t.src,d.call(t,"data-ofi-src",t.src),t.srcset&&d.call(t,"data-ofi-srcset",t.srcset),p(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[i].img[e||"src"]},set:function(e,n){return t[i].img[n||"src"]=e,d.call(t,"data-ofi-"+n,e),g(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!c&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(n.img),t.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?h(n.img,(function(){n.img.naturalWidth>t.width||n.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"})):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),h(n.img,(function(e){p(t,e.naturalWidth,e.naturalHeight)}))}function m(t,e){var n=!f&&!t;if(e=e||{},t=t||"img",a&&!e.skipTest||!u)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var o=0;o<t.length;o++)t[o][i]=t[o][i]||{skipTest:e.skipTest},g(t[o]);n&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&m(t.target,{skipTest:e.skipTest})}),!0),f=!0,t="img"),e.watchMQ&&window.addEventListener("resize",m.bind(null,t,{skipTest:e.skipTest}))}m.supportsObjectFit=s,m.supportsObjectPosition=a,function(){function t(t,e){return t[i]&&t[i].img&&("src"===e||"srcset"===e)?t[i].img:t}a||(HTMLImageElement.prototype.getAttribute=function(e){return l.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,n){return d.call(t(this,e),e,String(n))})}(),t.exports=m},function(t,e,n){n(0)((function(){for(var t=document.querySelectorAll(".burger__btn"),e=0;e<t.length;e++){t[e].addEventListener("click",n)}function n(){var t=this.getAttribute("data-target-id"),e=this.getAttribute("data-target-class-toggle");t&&e&&(this.classList.toggle("burger__btn--close"),document.getElementById(t).classList.toggle(e))}}))},function(t,e,n){n(0)((function(){var t=new RegExp("main-nav__link");document.addEventListener("focus",(function(n){if(t.test(n.target.className))for(var i=e(n.target,".main-nav__item"),o=0;o<i.length;o++)i[o].classList.add("main-nav__item--show-child")}),!0),document.addEventListener("blur",(function(e){if(t.test(e.target.className))for(var n=document.querySelectorAll(".main-nav__item--show-child"),i=0;i<n.length;i++)n[i].classList.remove("main-nav__item--show-child")}),!0);
/*! getParents.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/getParents */
var e=function(t,e){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1});for(var n=[];t&&t!==document;t=t.parentNode)e?t.matches(e)&&n.push(t):n.push(t);return n}}))},function(t,e){},,function(t,e,n){
/*!*
 * ВНИМАНИЕ! Этот файл генерируется автоматически.
 * Любые изменения этого файла будут потеряны при следующей компиляции.
 * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.
 */
n(2),n(9),n(4),n(11),n(5),n(6)},function(t,e,n){n(10)()},function(t,e,n){var i,o;o=this,void 0===(i=function(){return o.svg4everybody=function(){
/*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
function t(t,e,n){if(n){var i=document.createDocumentFragment(),o=!e.hasAttribute("viewBox")&&n.getAttribute("viewBox");o&&e.setAttribute("viewBox",o);for(var r=n.cloneNode(!0);r.childNodes.length;)i.appendChild(r.firstChild);t.appendChild(i)}}function e(e){e.onreadystatechange=function(){if(4===e.readyState){var n=e._cachedDocument;n||((n=e._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=e.responseText,e._cachedTarget={}),e._embeds.splice(0).map((function(i){var o=e._cachedTarget[i.id];o||(o=e._cachedTarget[i.id]=n.getElementById(i.id)),t(i.parent,i.svg,o)}))}},e.onreadystatechange()}function n(t){for(var e=t;"svg"!==e.nodeName.toLowerCase()&&(e=e.parentNode););return e}return function(i){var o,r=Object(i),s=window.top!==window.self;o="polyfill"in r?r.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&s;var a={},u=window.requestAnimationFrame||setTimeout,c=document.getElementsByTagName("use"),l=0;o&&function i(){for(var s=0;s<c.length;){var d=c[s],f=d.parentNode,p=n(f),h=d.getAttribute("xlink:href")||d.getAttribute("href");if(!h&&r.attributeName&&(h=d.getAttribute(r.attributeName)),p&&h){if(o)if(!r.validate||r.validate(h,p,d)){f.removeChild(d);var g=h.split("#"),m=g.shift(),v=g.join("#");if(m.length){var y=a[m];y||((y=a[m]=new XMLHttpRequest).open("GET",m),y.send(),y._embeds=[]),y._embeds.push({parent:f,svg:p,id:v}),e(y)}else t(f,p,document.getElementById(v))}else++s,++l}else++s}(!c.length||c.length-l>0)&&u(i,67)}()}}()}.apply(e,[]))||(t.exports=i)},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * Splide.js
 * Version  : 2.4.10
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===n(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e),i.d(e,"Splide",(function(){return mt}));var o={};i.r(o),i.d(o,"CREATED",(function(){return B})),i.d(o,"MOUNTED",(function(){return F})),i.d(o,"IDLE",(function(){return X})),i.d(o,"MOVING",(function(){return G})),i.d(o,"DESTROYED",(function(){return V}));function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var s=Object.keys;function a(t,e){s(t).some((function(n,i){return e(t[n],n,i)}))}function u(t){return s(t).map((function(e){return t[e]}))}function c(t){return"object"===n(t)}function l(t,e){var n=r({},t);return a(e,(function(t,e){c(t)?(c(n[e])||(n[e]={}),n[e]=l(n[e],t)):n[e]=t})),n}function d(t){return Array.isArray(t)?t:[t]}function f(t,e,n){return Math.min(Math.max(t,e>n?n:e),e>n?e:n)}function p(t,e){var n=0;return t.replace(/%s/g,(function(){return d(e)[n++]}))}function h(t){var e=n(t);return"number"===e&&t>0?parseFloat(t)+"px":"string"===e?t:""}function g(t){return t<10?"0"+t:t}function m(t,e){if("string"==typeof e){var n=w("div",{});k(n,{position:"absolute",width:e}),S(t,n),e=n.clientWidth,_(n)}return+e||0}function v(t,e){return t?t.querySelector(e.split(" ")[0]):null}function y(t,e){return b(t,e)[0]}function b(t,e){return t?u(t.children).filter((function(t){return A(t,e.split(" ")[0])||t.tagName===e})):[]}function w(t,e){var n=document.createElement(t);return a(e,(function(t,e){return T(n,e,t)})),n}function x(t){var e=w("div",{});return e.innerHTML=t,e.firstChild}function _(t){d(t).forEach((function(t){if(t){var e=t.parentElement;e&&e.removeChild(t)}}))}function S(t,e){t&&t.appendChild(e)}function E(t,e){if(t&&e){var n=e.parentElement;n&&n.insertBefore(t,e)}}function k(t,e){t&&a(e,(function(e,n){null!==e&&(t.style[n]=e)}))}function L(t,e,n){t&&d(e).forEach((function(e){e&&t.classList[n?"remove":"add"](e)}))}function P(t,e){L(t,e,!1)}function M(t,e){L(t,e,!0)}function A(t,e){return!!t&&t.classList.contains(e)}function T(t,e,n){t&&t.setAttribute(e,n)}function I(t,e){return t?t.getAttribute(e):""}function C(t,e){d(e).forEach((function(e){d(t).forEach((function(t){return t&&t.removeAttribute(e)}))}))}function j(t){return t.getBoundingClientRect()}var O="loop",z=function(t,e){var n,i;return{mount:function(){n=e.Elements.list,t.on("transitionend",(function(t){t.target===n&&i&&i()}),n)},start:function(o,r,s,a,u){var c=t.options,l=e.Controller.edgeIndex,d=c.speed;i=u,t.is("slide")&&(0===s&&r>=l||s>=l&&0===r)&&(d=c.rewindSpeed||d),k(n,{transition:"transform "+d+"ms "+c.easing,transform:"translate("+a.x+"px,"+a.y+"px)"})}}},N=function(t,e){function n(n){var i=t.options;k(e.Elements.slides[n],{transition:"opacity "+i.speed+"ms "+i.easing})}return{mount:function(){n(t.index)},start:function(t,i,o,r,s){var a=e.Elements.track;k(a,{height:h(a.clientHeight)}),n(i),s(),k(a,{height:""})}}};function H(t){console.error("[SPLIDE] "+t)}function q(t,e){if(!t)throw new Error(e)}var W="splide",D={active:"is-active",visible:"is-visible",loading:"is-loading"},R={type:"slide",rewind:!1,speed:400,rewindSpeed:0,waitForTransition:!0,width:0,height:0,fixedWidth:0,fixedHeight:0,heightRatio:0,autoWidth:!1,autoHeight:!1,perPage:1,perMove:0,clones:0,start:0,focus:!1,gap:0,padding:0,arrows:!0,arrowPath:"",pagination:!0,autoplay:!1,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,lazyLoad:!1,preloadPages:1,easing:"cubic-bezier(.42,.65,.27,.99)",keyboard:"global",drag:!0,dragAngleThreshold:30,swipeDistanceThreshold:150,flickVelocityThreshold:.6,flickPower:600,flickMaxPages:1,direction:"ltr",cover:!1,accessibility:!0,slideFocus:!0,isNavigation:!1,trimSpace:!0,updateOnMove:!1,throttle:100,destroy:!1,breakpoints:!1,classes:{root:W,slider:W+"__slider",track:W+"__track",list:W+"__list",slide:W+"__slide",container:W+"__slide__container",arrows:W+"__arrows",arrow:W+"__arrow",prev:W+"__arrow--prev",next:W+"__arrow--next",pagination:W+"__pagination",nambersSlide:W+"__nambers-slide",nambersSlideAll:W+"__nambers-slide__all",nambersSlideItem:W+"__nambers-slide-item",page:W+"__pagination__page",clone:W+"__slide--clone",progress:W+"__progress",bar:W+"__progress__bar",autoplay:W+"__autoplay",play:W+"__play",pause:W+"__pause",spinner:W+"__spinner",sr:W+"__sr"},i18n:{prev:"Предыдущий",next:"Следующий",first:"К первому",last:"К последнему",slideX:"Перейти к %s",slideN:"%s",pageX:"Перейти к %s",pageN:"%s",play:"Автопроигрывание",pause:"Пауза"}},B=1,F=2,X=3,G=4,V=5;function U(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Y=function(){function t(t,e,n){var i;void 0===e&&(e={}),void 0===n&&(n={}),this.root=t instanceof Element?t:document.querySelector(t),q(this.root,"An invalid element/selector was given."),this.Components=null,this.Event=function(){var t=[];function e(t){t.elm&&t.elm.removeEventListener(t.event,t.handler,t.options)}return{on:function(e,n,i,o){void 0===i&&(i=null),void 0===o&&(o={}),e.split(" ").forEach((function(e){i&&i.addEventListener(e,n,o),t.push({event:e,handler:n,elm:i,options:o})}))},off:function(n,i){void 0===i&&(i=null),n.split(" ").forEach((function(n){t=t.filter((function(t){return!t||t.event!==n||t.elm!==i||(e(t),!1)}))}))},emit:function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];t.forEach((function(t){t.elm||t.event.split(".")[0]!==e||t.handler.apply(t,i)}))},destroy:function(){t.forEach(e),t=[]}}}(),this.State=(i=B,{set:function(t){i=t},is:function(t){return t===i}}),this.STATES=o,this._o=l(R,e),this._i=0,this._c=n,this._e={},this._t=null}var e,n,i,r=t.prototype;return r.mount=function(t,e){var n=this;void 0===t&&(t=this._e),void 0===e&&(e=this._t),this.State.set(B),this._e=t,this._t=e,this.Components=function(t,e,n){var i={};return a(e,(function(e,n){i[n]=e(t,i,n.toLowerCase())})),n||(n=t.is("fade")?N:z),i.Transition=n(t,i),i}(this,l(this._c,t),e);try{a(this.Components,(function(t,e){var i=t.required;void 0===i||i?t.mount&&t.mount():delete n.Components[e]}))}catch(t){return void H(t.message)}var i=this.State;return i.set(F),a(this.Components,(function(t){t.mounted&&t.mounted()})),this.emit("mounted"),i.set(X),this.emit("ready"),k(this.root,{visibility:"visible"}),this.on("move drag",(function(){return i.set(G)})).on("moved dragged",(function(){return i.set(X)})),this},r.sync=function(t){return this.sibling=t,this},r.on=function(t,e,n,i){return void 0===n&&(n=null),void 0===i&&(i={}),this.Event.on(t,e,n,i),this},r.off=function(t,e){return void 0===e&&(e=null),this.Event.off(t,e),this},r.emit=function(t){for(var e,n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return(e=this.Event).emit.apply(e,[t].concat(i)),this},r.go=function(t,e){return void 0===e&&(e=this.options.waitForTransition),(this.State.is(X)||this.State.is(G)&&!e)&&this.Components.Controller.go(t,!1),this},r.is=function(t){return t===this._o.type},r.add=function(t,e){return void 0===e&&(e=-1),this.Components.Elements.add(t,e,this.refresh.bind(this)),this},r.remove=function(t){return this.Components.Elements.remove(t),this.refresh(),this},r.refresh=function(){return this.emit("refresh").emit("resize"),this},r.destroy=function(t){var e=this;if(void 0===t&&(t=!0),!this.State.is(B))return u(this.Components).reverse().forEach((function(e){e.destroy&&e.destroy(t)})),this.emit("destroy",t),this.Event.destroy(),this.State.set(V),this;this.on("ready",(function(){return e.destroy(t)}))},e=t,(n=[{key:"index",get:function(){return this._i},set:function(t){this._i=parseInt(t)}},{key:"length",get:function(){return this.Components.Elements.length}},{key:"options",get:function(){return this._o},set:function(t){var e=this.State.is(B);e||this.emit("update"),this._o=l(this._o,t),e||this.emit("updated",this._o)}},{key:"classes",get:function(){return this._o.classes}},{key:"i18n",get:function(){return this._o.i18n}}])&&U(e.prototype,n),i&&U(e,i),t}(),Z=function(t){var e=I(t.root,"data-splide");if(e)try{t.options=JSON.parse(e)}catch(t){H(t.message)}return{mount:function(){t.State.is(B)&&(t.index=t.options.start)}}},K=function(t,e){var n=t.root,i=t.classes,o=[];if(!n.id){window.splide=window.splide||{};var r=window.splide.uid||0;window.splide.uid=++r,n.id="splide"+g(r)}var s={mount:function(){var e=this;this.init(),t.on("refresh",(function(){e.destroy(),e.init()})).on("updated",(function(){M(n,c()),P(n,c())}))},destroy:function(){o.forEach((function(t){t.destroy()})),o=[],M(n,c())},init:function(){var t=this;!function(){s.slider=y(n,i.slider),s.track=v(n,"."+i.track),s.list=y(s.track,i.list),q(s.track&&s.list,"Track or list was not found."),s.slides=b(s.list,i.slide);var t=l(i.arrows);s.arrows={prev:v(t,"."+i.prev),next:v(t,"."+i.next)};var e=l(i.autoplay);s.bar=v(l(i.progress),"."+i.bar),s.play=v(e,"."+i.play),s.pause=v(e,"."+i.pause),s.track.id=s.track.id||n.id+"-track",s.list.id=s.list.id||n.id+"-list"}(),P(n,c()),this.slides.forEach((function(e,n){t.register(e,n,-1)}))},register:function(e,n,i){var r=function(t,e,n,i){var o=t.options.updateOnMove,r="ready.slide updated.slide resize.slide moved.slide"+(o?" move.slide":""),s={slide:i,index:e,realIndex:n,container:y(i,t.classes.container),isClone:n>-1,mount:function(){var s=this;this.isClone||(i.id=t.root.id+"-slide--"+g(e+1)),t.on(r,(function(){return s.update()})).on("update.slide",c).on("click",(function(){return t.emit("click",s)}),i),o&&t.on("move.slide",(function(t){t===n&&a(!0,!1)})),k(i,{display:""}),this.styles=I(i,"style")||""},destroy:function(){t.off(r).off("update.slide").off("click",i),M(i,u(D)),c(),C(this.container,"style")},update:function(){a(this.isActive(),!1),a(this.isVisible(),!0)},isActive:function(){return t.index===e},isVisible:function(){var e=this.isActive();if(t.is("fade")||e)return e;var n=j(t.Components.Elements.track),o=j(i);return"ttb"===t.options.direction?n.top<=o.top&&o.bottom<=n.bottom:n.left<=o.left&&o.right<=n.right},isWithin:function(n,i){var o=Math.abs(n-e);return t.is("slide")||this.isClone||(o=Math.min(o,t.length-o)),o<i}};function a(e,n){var o=n?"visible":"active",r=D[o];e?(P(i,r),t.emit(""+o,s)):A(i,r)&&(M(i,r),t.emit(n?"hidden":"inactive",s))}function c(){T(i,"style",s.styles)}return s}(t,n,i,e);r.mount(),o.push(r)},getSlide:function(t){return o.filter((function(e){return e.index===t}))[0]},getSlides:function(t){return t?o:o.filter((function(t){return!t.isClone}))},getSlidesByPage:function(n){var i=e.Controller.toIndex(n),r=t.options,s=!1!==r.focus?1:r.perPage;return o.filter((function(t){var e=t.index;return i<=e&&e<i+s}))},add:function(t,e,n){if("string"==typeof t&&(t=x(t)),t instanceof Element){var i=this.slides[e];k(t,{display:"none"}),i?(E(t,i),this.slides.splice(e,0,t)):(S(this.list,t),this.slides.push(t)),function(t,e){var n=t.querySelectorAll("img"),i=n.length;if(i){var o=0;a(n,(function(t){t.onload=t.onerror=function(){++o===i&&e()}}))}else e()}(t,(function(){n&&n(t)}))}},remove:function(t){_(this.slides.splice(t,1)[0])},each:function(t){o.forEach(t)},get length(){return this.slides.length},get total(){return o.length}};function c(){var e=i.root,n=t.options;return[e+"--"+n.type,e+"--"+n.direction,n.drag?e+"--draggable":"",n.isNavigation?e+"--nav":"",D.active]}function l(t){return y(n,t)||y(s.slider,t)}return s},J=Math.floor,Q=function(t,e){var n,i,o={mount:function(){n=t.options,i=t.is(O),t.on("move",(function(e){t.index=e})).on("updated refresh",(function(e){n=e||n,t.index=f(t.index,0,o.edgeIndex)}))},go:function(t,n){var i=this.trim(this.parse(t));e.Track.go(i,this.rewind(i),n)},parse:function(e){var i=t.index,r=String(e).match(/([+\-<>]+)(\d+)?/),s=r?r[1]:"",a=r?parseInt(r[2]):0;switch(s){case"+":i+=a||1;break;case"-":i-=a||1;break;case">":case"<":i=function(t,e,i){if(t>-1)return o.toIndex(t);var r=n.perMove,s=i?-1:1;if(r)return e+r*s;return o.toIndex(o.toPage(e)+s)}(a,i,"<"===s);break;default:i=parseInt(e)}return i},toIndex:function(e){if(r())return e;var i=t.length,o=n.perPage,s=e*o;return i-o<=(s-=(this.pageLength*o-i)*J(s/i))&&s<i&&(s=i-o),s},toPage:function(e){if(r())return e;var i=t.length,o=n.perPage;return J(i-o<=e&&e<i?(i-1)/o:e/o)},trim:function(t){return i||(t=n.rewind?this.rewind(t):f(t,0,this.edgeIndex)),t},rewind:function(t){var e=this.edgeIndex;if(i){for(;t>e;)t-=e+1;for(;t<0;)t+=e+1}else t>e?t=0:t<0&&(t=e);return t},isRtl:function(){return"rtl"===n.direction},get pageLength(){var e=t.length;return r()?e:Math.ceil(e/n.perPage)},get edgeIndex(){var e=t.length;return e?r()||n.isNavigation||i?e-1:e-n.perPage:0},get prevIndex(){var e=t.index-1;return(i||n.rewind)&&(e=this.rewind(e)),e>-1?e:-1},get nextIndex(){var e=t.index+1;return(i||n.rewind)&&(e=this.rewind(e)),t.index<e&&e<=this.edgeIndex||0===e?e:-1}};function r(){return!1!==n.focus}return o},$=Math.abs,tt=function(t,e){var n,i,o,r="ttb"===t.options.direction,s=t.is("fade"),a=!1,u="rtl"===t.options.direction?1:-1,c={sign:u,mount:function(){i=e.Elements,n=e.Layout,o=i.list},mounted:function(){var e=this;s||(this.jump(0),t.on("mounted resize updated",(function(){e.jump(t.index)})))},go:function(n,i,o){var r=d(n),u=t.index;t.State.is(G)&&a||(a=n!==i,o||t.emit("move",i,u,n),Math.abs(r-this.position)>=1||s?e.Transition.start(n,i,u,this.toCoord(r),(function(){l(n,i,u,o)})):n!==u&&"move"===t.options.trimSpace?e.Controller.go(n+n-u,o):l(n,i,u,o))},jump:function(t){this.translate(d(t))},translate:function(t){k(o,{transform:"translate"+(r?"Y":"X")+"("+t+"px)"})},cancel:function(){t.is(O)?this.shift():this.translate(this.position),k(o,{transition:""})},shift:function(){var e=$(this.position),n=$(this.toPosition(0)),i=$(this.toPosition(t.length)),o=i-n;e<n?e+=o:e>i&&(e-=o),this.translate(u*e)},trim:function(e){return!t.options.trimSpace||t.is(O)?e:f(e,u*(n.totalSize()-n.size-n.gap),0)},toIndex:function(t){var e=this,n=0,o=1/0;return i.getSlides(!0).forEach((function(i){var r=i.index,s=$(e.toPosition(r)-t);s<o&&(o=s,n=r)})),n},toCoord:function(t){return{x:r?0:t,y:r?t:0}},toPosition:function(t){var e=n.totalSize(t)-n.slideSize(t)-n.gap;return u*(e+this.offset(t))},offset:function(e){var i=t.options.focus,o=n.slideSize(e);return"center"===i?-(n.size-o)/2:-(parseInt(i)||0)*(o+n.gap)},get position(){var t=r?"top":"left";return j(o)[t]-j(i.track)[t]-n.padding[t]}};function l(e,n,i,r){k(o,{transition:""}),a=!1,s||c.jump(n),r||t.emit("moved",n,i,e)}function d(t){return c.trim(c.toPosition(t))}return c},et=function(t,e){var n=[],i=0,o=e.Elements,r={mount:function(){var e=this;t.is(O)&&(s(),t.on("refresh",s).on("resize",(function(){i!==a()&&(e.destroy(),t.refresh())})))},destroy:function(){_(n),n=[]},get clones(){return n},get length(){return n.length}};function s(){r.destroy(),function(t){var e=o.length,i=o.register;if(e){for(var r=o.slides;r.length<t;)r=r.concat(r);r.slice(0,t).forEach((function(t,r){var s=u(t);S(o.list,s),n.push(s),i(s,r+e,r%e)})),r.slice(-t).forEach((function(o,s){var a=u(o);E(a,r[0]),n.push(a),i(a,s-t,(e+s-t%e)%e)}))}}(i=a())}function a(){var e=t.options;if(e.clones)return e.clones;var n=e.autoWidth||e.autoHeight?o.length:e.perPage,i="ttb"===e.direction?"Height":"Width",r=m(t.root,e["fixed"+i]);return r&&(n=Math.ceil(o.track["client"+i]/r)),n*(e.drag?e.flickMaxPages+1:1)}function u(e){var n=e.cloneNode(!0);return P(n,t.classes.clone),C(n,"id"),n}return r};function nt(t,e){var n;return function(){n||(n=setTimeout((function(){t(),n=null}),e))}}var it=function(t,e){var n,i,o=e.Elements,r="ttb"===t.options.direction,a=(n={mount:function(){t.on("resize load",nt((function(){t.emit("resize")}),t.options.throttle),window).on("resize",c).on("updated refresh",u),u(),this.totalSize=r?this.totalHeight:this.totalWidth,this.slideSize=r?this.slideHeight:this.slideWidth},destroy:function(){C([o.list,o.track],"style")},get size(){return r?this.height:this.width}},i=r?function(t,e){var n,i,o=e.Elements,r=t.root;return{margin:"marginBottom",init:function(){this.resize()},resize:function(){i=t.options,n=o.track,this.gap=m(r,i.gap);var e=i.padding,s=m(r,e.top||e),a=m(r,e.bottom||e);this.padding={top:s,bottom:a},k(n,{paddingTop:h(s),paddingBottom:h(a)})},totalHeight:function(e){void 0===e&&(e=t.length-1);var n=o.getSlide(e);return n?j(n.slide).bottom-j(o.list).top+this.gap:0},slideWidth:function(){return m(r,i.fixedWidth||this.width)},slideHeight:function(t){if(i.autoHeight){var e=o.getSlide(t);return e?e.slide.offsetHeight:0}var n=i.fixedHeight||(this.height+this.gap)/i.perPage-this.gap;return m(r,n)},get width(){return n.clientWidth},get height(){var t=i.height||this.width*i.heightRatio;return q(t,'"height" or "heightRatio" is missing.'),m(r,t)-this.padding.top-this.padding.bottom}}}(t,e):function(t,e){var n,i=e.Elements,o=t.root,r=t.options;return{margin:"margin"+("rtl"===r.direction?"Left":"Right"),height:0,init:function(){this.resize()},resize:function(){r=t.options,n=i.track,this.gap=m(o,r.gap);var e=r.padding,s=m(o,e.left||e),a=m(o,e.right||e);this.padding={left:s,right:a},k(n,{paddingLeft:h(s),paddingRight:h(a)})},totalWidth:function(e){void 0===e&&(e=t.length-1);var n=i.getSlide(e),o=0;if(n){var s=j(n.slide),a=j(i.list);o="rtl"===r.direction?a.right-s.left:s.right-a.left,o+=this.gap}return o},slideWidth:function(t){if(r.autoWidth){var e=i.getSlide(t);return e?e.slide.offsetWidth:0}var n=r.fixedWidth||(this.width+this.gap)/r.perPage-this.gap;return m(o,n)},slideHeight:function(){var t=r.height||r.fixedHeight||this.width*r.heightRatio;return m(o,t)},get width(){return n.clientWidth-this.padding.left-this.padding.right}}}(t,e),s(i).forEach((function(t){n[t]||Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))})),n);function u(){a.init(),k(t.root,{maxWidth:h(t.options.width)}),o.each((function(t){t.slide.style[a.margin]=h(a.gap)})),c()}function c(){var e=t.options;a.resize(),k(o.track,{height:h(a.height)});var n=e.autoHeight?null:h(a.slideHeight());o.each((function(t){k(t.container,{height:n}),k(t.slide,{width:e.autoWidth?null:h(a.slideWidth(t.index)),height:t.container?null:n})}))}return a},ot=Math.abs,rt=function(t,e){var n,i,o,r,s=e.Track,u=e.Controller,c="ttb"===t.options.direction,l=c?"y":"x",d={disabled:!1,mount:function(){var n=this,i=e.Elements,o=i.track;t.on("touchstart mousedown",p,o).on("touchmove mousemove",g,o,{passive:!1}).on("touchend touchcancel mouseleave mouseup dragend",m,o).on("mounted refresh",(function(){a(i.list.querySelectorAll("img, a"),(function(e){t.off("dragstart",e).on("dragstart",(function(t){t.preventDefault()}),e,{passive:!1})}))})).on("mounted updated",(function(){n.disabled=!t.options.drag}))}};function p(t){d.disabled||r||h(t)}function h(t){n=s.toCoord(s.position),i=v(t,{}),o=i}function g(e){if(i)if(o=v(e,i),r){if(e.cancelable&&e.preventDefault(),!t.is("fade")){var a=n[l]+o.offset[l];s.translate(function(e){if(t.is("slide")){var n=s.sign,i=n*s.trim(s.toPosition(0)),o=n*s.trim(s.toPosition(u.edgeIndex));(e*=n)<i?e=i-7*Math.log(i-e):e>o&&(e=o+7*Math.log(e-o)),e*=n}return e}(a))}}else(function(e){var n=e.offset;if(t.State.is(G)&&t.options.waitForTransition)return!1;var i=180*Math.atan(ot(n.y)/ot(n.x))/Math.PI;c&&(i=90-i);return i<t.options.dragAngleThreshold})(o)&&(t.emit("drag",i),r=!0,s.cancel(),h(e))}function m(){i=null,r&&(t.emit("dragged",o),function(n){var i=n.velocity[l],o=ot(i);if(o>0){var r=t.options,a=t.index,c=i<0?-1:1,d=a;if(!t.is("fade")){var p=s.position;o>r.flickVelocityThreshold&&ot(n.offset[l])<r.swipeDistanceThreshold&&(p+=c*Math.min(o*r.flickPower,e.Layout.size*(r.flickMaxPages||1))),d=s.toIndex(p)}d===a&&o>.1&&(d=a+c*s.sign),t.is("slide")&&(d=f(d,0,u.edgeIndex)),u.go(d,r.isNavigation)}}(o),r=!1)}function v(t,e){var n=t.timeStamp,i=t.touches,o=i?i[0]:t,r=o.clientX,s=o.clientY,a=e.to||{},u=a.x,c=void 0===u?r:u,l=a.y,d={x:r-c,y:s-(void 0===l?s:l)},f=n-(e.time||0);return{to:{x:r,y:s},offset:d,time:n,velocity:{x:d.x/f,y:d.y/f}}}return d},st=function(t,e){var n=!1;function i(t){n&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())}return{required:t.options.drag&&!t.is("fade"),mount:function(){t.on("click",i,e.Elements.track,{capture:!0}).on("drag",(function(){n=!0})).on("moved",(function(){n=!1}))}}},at=1,ut=2,ct=3,lt=function(t,e,n){var i,o,r,s=t.classes,a=t.root,u=e.Elements;function c(){var r=e.Controller,s=r.prevIndex,a=r.nextIndex,u=t.length>t.options.perPage||t.is(O);i.disabled=s<0||!u,o.disabled=a<0||!u,t.emit(n+":updated",i,o,s,a)}function l(t){return x('<button class="'+s.arrow+" "+(t?s.prev:s.next)+"\" type=\"button\"><svg class='arrows' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' preserveAspectRatio='xMidYMid' width='39.5' height='32' viewBox='0 0 39.5 32'><circle class='arrows__circle' cx='16' cy='16' r='15.5'  /><path d='M39.000,14.999 L9.000,14.999 L9.000,15.999 L39.000,15.999 L39.000,14.999 Z' /><path d='M9.715,14.985 L17.015,22.283 L16.285,23.014 L8.985,15.714 L9.715,14.985 Z'/><path d='M16.285,7.984 L8.985,15.284 L9.715,16.014 L17.015,8.714 L16.285,7.984 Z' />")}return{required:t.options.arrows,mount:function(){i=u.arrows.prev,o=u.arrows.next,i&&o||!t.options.arrows||(i=l(!0),o=l(!1),r=!0,function(){var e=w("div",{class:s.arrows});S(e,i),S(e,o);var n=u.slider,r="slider"===t.options.arrows&&n?n:a;E(e,r.firstElementChild)}()),i&&o&&t.on("click",(function(){t.go("<")}),i).on("click",(function(){t.go(">")}),o).on("mounted move updated refresh",c),this.arrows={prev:i,next:o}},mounted:function(){t.emit(n+":mounted",i,o)},destroy:function(){C([i,o],"disabled"),r&&_(i.parentElement)}}},dt=function(t,e,n){var i={},o=e.Elements,r={mount:function(){var e=t.options.pagination;if(e){i=function(){var e=t.options,n=t.classes,i=w("ul",{class:n.pagination}),r=w("li",{class:n.nambersSlide}),s=o.length,a=w("li",{class:n.nambersSlideAll});a.innerHTML+=s<10?"0"+s:s;var u=o.getSlides(!1).filter((function(t){return!1!==e.focus||t.index%e.perPage==0})).map((function(e,s){var u=w("span",{class:n.nambersSlideItem}),c=e.index+1,l=w("li",{}),d=w("button",{class:n.page,type:"button"});return u.innerHTML+=c<10?"0"+c:c,S(l,d),S(i,l),S(d,u),S(i,r),S(i,a),t.on("click",(function(){t.go(">"+s)}),d),{li:l,button:d,page:s,Slides:o.getSlidesByPage(s)}}));return{list:i,items:u}}();var n=o.slider;S("slider"===e&&n?n:t.root,i.list),t.on("move.page",s)}t.off("updated.page refresh.page").on("updated.page refresh.page",(function(){r.destroy(),t.options.pagination&&(r.mount(),r.mounted())}))},mounted:function(){if(t.options.pagination){var e=t.index;t.emit(n+":mounted",i,this.getItem(e)),s(e,-1)}},destroy:function(){_(i.list),i.items&&i.items.forEach((function(e){t.off("click",e.button)})),t.off("move.page"),i={}},getItem:function(t){return i.items[e.Controller.toPage(t)]},get data(){return i}};function s(e,o){var s=r.getItem(o),a=r.getItem(e),u=D.active;s&&M(s.button,u),a&&P(a.button,u),t.emit(n+":updated",i,s,a)}return r},ft={ltr:{ArrowLeft:"<",ArrowRight:">",Left:"<",Right:">"},rtl:{ArrowLeft:">",ArrowRight:"<",Left:">",Right:"<"},ttb:{ArrowUp:"<",ArrowDown:">",Up:"<",Down:">"}},pt=function(t,e){var n=t.i18n,i=e.Elements,o=["aria-hidden","tabindex","aria-controls","aria-label","aria-current","role"];function r(e,n){T(e,"aria-hidden",!n),t.options.slideFocus&&T(e,"tabindex",n?0:-1)}function s(t,e){var n=i.track.id;T(t,"aria-controls",n),T(e,"aria-controls",n)}function a(e,i,o,r){var s=t.index,a=o>-1&&s<o?n.last:n.prev,u=r>-1&&s>r?n.first:n.next;T(e,"aria-label",a),T(i,"aria-label",u)}function u(e,i){i&&T(i.button,"aria-current",!0),e.items.forEach((function(e){var i=t.options,o=!1===i.focus&&i.perPage>1?n.pageX:n.slideX,r=!1===i.focus&&i.perPage>1?n.pageN:n.slideN,s=p(o,e.page+1),a=p(r,e.page+1),u=e.button;T(u,"aria-controls",e.Slides.map((function(t){return t.slide.id})).join(" ")),T(u,"aria-label",s),T(u,"value",a)}))}function c(t,e,n){e&&C(e.button,"aria-current"),n&&T(n.button,"aria-current",!0)}function l(t){i.each((function(e){var i=e.slide,o=e.realIndex;f(i)||T(i,"role","button");var r=o>-1?o:e.index,s=p(n.slideX,r+1),a=t.Components.Elements.getSlide(r);T(i,"aria-label",s),a&&T(i,"aria-controls",a.slide.id)}))}function d(t,e){var n=t.slide;e?T(n,"aria-current",!0):C(n,"aria-current")}function f(t){return"BUTTON"===t.tagName}return{required:t.options.accessibility,mount:function(){t.on("visible",(function(t){r(t.slide,!0)})).on("hidden",(function(t){r(t.slide,!1)})).on("arrows:mounted",s).on("arrows:updated",a).on("pagination:mounted",u).on("pagination:updated",c).on("refresh",(function(){C(e.Clones.clones,o)})),t.options.isNavigation&&t.on("navigation:mounted",l).on("active",(function(t){d(t,!0)})).on("inactive",(function(t){d(t,!1)})),["play","pause"].forEach((function(t){var e=i[t];e&&(f(e)||T(e,"role","button"),T(e,"aria-controls",i.track.id),T(e,"aria-label",n[t]))}))},destroy:function(){var t=e.Arrows,n=t?t.arrows:{};C(i.slides.concat([n.prev,n.next,i.play,i.pause]),o)}}},ht=[" ","Enter","Spacebar"],gt={Options:Z,Breakpoints:function(t){var e,n,i=t.options.breakpoints,o=nt(s,50),r=[];function s(){var o,s=(o=r.filter((function(t){return t.mql.matches}))[0])?o.point:-1;if(s!==n){n=s;var a=t.State,u=i[s]||e,c=u.destroy;c?(t.options=e,t.destroy("completely"===c)):(a.is(V)&&(a.set(B),t.mount()),t.options=u)}}return{required:i&&matchMedia,mount:function(){r=Object.keys(i).sort((function(t,e){return+t-+e})).map((function(t){return{point:t,mql:matchMedia("(max-width:"+t+"px)")}})),this.destroy(!0),addEventListener("resize",o),e=t.options,s()},destroy:function(t){t&&removeEventListener("resize",o)}}},Controller:Q,Elements:K,Track:tt,Clones:et,Layout:it,Drag:rt,Click:st,Autoplay:function(t,e,n){var i,o=[],r=e.Elements,s={required:t.options.autoplay,mount:function(){var e=t.options;r.slides.length>e.perPage&&(i=function(t,e,n){var i,o,r,s=window.requestAnimationFrame,a=!0,u=function u(c){a||(i||(i=c,r&&r<1&&(i-=r*e)),r=(o=c-i)/e,o>=e&&(i=0,r=1,t()),n&&n(r),s(u))};return{pause:function(){a=!0,i=0},play:function(t){i=0,a&&(a=!1,t&&(r=0),s(u))}}}((function(){t.go(">")}),e.interval,(function(e){t.emit(n+":playing",e),r.bar&&k(r.bar,{width:100*e+"%"})})),function(){var e=t.options,n=t.sibling,i=[t.root,n?n.root:null];e.pauseOnHover&&(a(i,"mouseleave",at,!0),a(i,"mouseenter",at,!1));e.pauseOnFocus&&(a(i,"focusout",ut,!0),a(i,"focusin",ut,!1));t.on("click",(function(){s.play(ut),s.play(ct)}),r.play).on("move refresh",(function(){s.play()})).on("destroy",(function(){s.pause()})),a([r.pause],"click",ct,!1)}(),this.play())},play:function(e){void 0===e&&(e=0),(o=o.filter((function(t){return t!==e}))).length||(t.emit(n+":play"),i.play(t.options.resetProgress))},pause:function(e){void 0===e&&(e=0),i.pause(),-1===o.indexOf(e)&&o.push(e),1===o.length&&t.emit(n+":pause")}};function a(e,n,i,o){e.forEach((function(e){t.on(n,(function(){s[o?"play":"pause"](i)}),e)}))}return s},Cover:function(t,e){function n(t){e.Elements.each((function(e){var n=y(e.slide,"IMG")||y(e.container,"IMG");n&&n.src&&i(n,t)}))}function i(t,e){k(t.parentElement,{background:e?"":'center/cover no-repeat url("'+t.src+'")'}),k(t,{display:e?"":"none"})}return{required:t.options.cover,mount:function(){t.on("lazyload:loaded",(function(t){i(t,!1)})),t.on("mounted updated refresh",(function(){return n(!1)}))},destroy:function(){n(!0)}}},Arrows:lt,Pagination:dt,LazyLoad:function(t,e,n){var i,o,r=t.options,s="sequential"===r.lazyLoad;function u(){o=[],i=0}function c(e){e=isNaN(e)?t.index:e,(o=o.filter((function(t){return!t.Slide.isWithin(e,r.perPage*(r.preloadPages+1))||(l(t.img,t.Slide),!1)})))[0]||t.off("moved."+n)}function l(e,n){P(n.slide,D.loading);var i=w("span",{class:t.classes.spinner});S(e.parentElement,i),e.onload=function(){f(e,i,n,!1)},e.onerror=function(){f(e,i,n,!0)},T(e,"srcset",I(e,"data-splide-lazy-srcset")||""),T(e,"src",I(e,"data-splide-lazy")||"")}function d(){if(i<o.length){var t=o[i];l(t.img,t.Slide)}i++}function f(e,i,o,r){M(o.slide,D.loading),r||(_(i),k(e,{display:""}),t.emit(n+":loaded",e).emit("resize")),s&&d()}return{required:r.lazyLoad,mount:function(){t.on("mounted refresh",(function(){u(),e.Elements.each((function(t){a(t.slide.querySelectorAll("[data-splide-lazy], [data-splide-lazy-srcset]"),(function(e){e.src||e.srcset||(o.push({img:e,Slide:t}),k(e,{display:"none"}))}))})),s&&d()})),s||t.on("mounted refresh moved."+n,c)},destroy:u}},Keyboard:function(t){var e;return{mount:function(){t.on("mounted updated",(function(){var n=t.options,i=t.root,o=ft[n.direction],r=n.keyboard;e&&(t.off("keydown",e),C(i,"tabindex")),r&&("focused"===r?(e=i,T(i,"tabindex",0)):e=document,t.on("keydown",(function(e){o[e.key]&&t.go(o[e.key])}),e))}))}}},Sync:function(t){var e=t.sibling,n=e&&e.options.isNavigation;function i(){t.on("move.sync",(function(t,n,i){e.off("move.sync").go(e.is(O)?i:t,!1),o()}))}function o(){e.on("move.sync",(function(e,n,o){t.off("move.sync").go(t.is(O)?o:e,!1),i()}))}function r(n){t.State.is(X)&&e.go(n)}return{required:!!e,mount:function(){i(),o(),n&&e.Components.Elements.each((function(e){var n=e.slide,i=e.index;t.on("mouseup touchend",(function(t){t.button&&0!==t.button||r(i)}),n),t.on("keyup",(function(t){ht.indexOf(t.key)>-1&&(t.preventDefault(),r(i))}),n,{passive:!1})}))},mounted:function(){n&&e.emit("navigation:mounted",t)}}},A11y:pt};var mt=function(t){var e,n;function i(e,n){return t.call(this,e,n,gt)||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i}(Y);window.Splide=mt}]),document.addEventListener("DOMContentLoaded",(function(){var t=new Splide("#carousel",{type:"loop",perPage:3,focus:"center",autoplay:!0,pagination:!0}).mount();document.querySelector(".splide__list > li.is-visible").classList.add("first"),t.on("moved",(function(){document.querySelectorAll(".splide__list .splide__slide").forEach((function(t){return t.classList.remove("first")})),document.querySelector(".splide__list > li.is-visible").classList.add("first")}))}))}]);