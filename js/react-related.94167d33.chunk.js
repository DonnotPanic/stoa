(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[50],{2829:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var r=i(4848),n=i(6540),o=i(3554),s=i.n(o);function a({node:e,src:t,type:i,children:o,...a}){const[l,c]=(0,n.useState)([]),d=(0,n.useMemo)((()=>{let e=[];return t&&e.push({src:t,type:i}),o.slice(1).forEach((t=>{"string"!=typeof t&&e.push({src:t.props.src,type:t.props.type})})),e}),[t,i,o]);return(0,n.useLayoutEffect)((()=>{c(d)}),[d]),(0,r.jsx)(s(),{width:"fit-content",height:"revert-layer",className:"blog-video",url:l,...a})}},8873:(e,t,i)=>{(()=>{"use strict";var t={n:e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},d:(e,i)=>{for(var r in i)t.o(i,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{default:()=>Pe});const n=i(5556);var o=t.n(n);const s=i(6540);var a=t.n(s),l="fslightbox-",c="".concat(l,"styles"),d="".concat(l,"cursor-grabbing"),h="".concat(l,"full-dimension"),p="".concat(l,"flex-centered"),u="".concat(l,"transform-transition"),f="".concat(l,"absoluted"),y="".concat(l,"fade-in"),g="".concat(l,"fade-out"),m=y+"-strong",b=g+"-strong",v="".concat(l,"opacity-1");"".concat(l,"source");const w=function(e){var t=e.size,i=e.viewBox,r=e.d;return a().createElement("svg",{width:t,height:t,viewBox:i,xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{className:"".concat(l,"svg-path"),d:r}))},x=function(e){var t=e.onClick,i=e.viewBox,r=e.size,n=e.d,o=e.title;return a().createElement("div",{onClick:t,className:"".concat(l,"toolbar-button ").concat(p),title:o},a().createElement(w,{viewBox:i,size:r,d:n}))};function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function O(e){var t=e.o,i=t.fs,r=i.o,n=i.x,o=t.fss,l=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,n,o,s,a=[],l=!0,c=!1;try{for(o=(i=i.call(e)).next;!(l=(r=o.call(i)).done)&&(a.push(r.value),2!==a.length);l=!0);}catch(e){c=!0,n=e}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(c)throw n}}return a}}(e)||function(e,t){if(e){if("string"==typeof e)return P(e,2);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?P(e,2):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,s.useState)(!1)),c=l[0],d=l[1];return o.g=function(){return c},o.s=d,a().createElement(x,{onClick:c?n:r,viewBox:c?"0 0 950 1024":"0 0 18 18",size:c?"24px":"20px",d:c?"M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z":"M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",title:c?"Exit fullscreen":"Enter fullscreen"})}const S=function(e){var t=e.fsLightbox.core.lightboxCloser.closeLightbox;return a().createElement(x,{onClick:t,viewBox:"0 0 24 24",size:"20px",d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",title:"Close"})},k=function(e){var t=e.fsLightbox;return a().createElement("div",{className:"".concat(l,"toolbar")},a().createElement(O,{o:t}),a().createElement(S,{fsLightbox:t}))};function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}const R=function(e){var t,i=e.fsLightbox,r=i.componentsServices,n=i.props.sources,o=i.stageIndexes,c=function(e){if(Array.isArray(e))return e}(t=(0,s.useState)(o.current+1))||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,n,o,s,a=[],l=!0,c=!1;try{for(o=(i=i.call(e)).next;!(l=(r=o.call(i)).done)&&(a.push(r.value),2!==a.length);l=!0);}catch(e){c=!0,n=e}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(c)throw n}}return a}}(t)||function(e,t){if(e){if("string"==typeof e)return E(e,2);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?E(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=c[0],h=c[1];r.setSlideNumber=function(e){h(e)};var p=a().createRef(),u=a().createRef();return(0,s.useEffect)((function(){u.current.offsetWidth>55&&(p.current.style.justifyContent="flex-start")}),[]),a().createElement("div",{ref:p,className:"".concat(l,"slide-number-container")},a().createElement("div",{ref:u,className:"fslightbox-flex-centered"},a().createElement("span",null,d),a().createElement("span",{className:"".concat(l,"slash")}),a().createElement("span",null,n.length)))},j=function(e){var t=e.fsLightbox;return a().createElement("div",{className:"".concat(l,"nav")},a().createElement(k,{fsLightbox:t}),t.props.sources.length>1&&a().createElement(R,{fsLightbox:t}))};function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}const _=function(e){var t,i=e.fsLightbox.componentsServices,r=function(e){if(Array.isArray(e))return e}(t=(0,s.useState)(!1))||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,n,o,s,a=[],l=!0,c=!1;try{for(o=(i=i.call(e)).next;!(l=(r=o.call(i)).done)&&(a.push(r.value),2!==a.length);l=!0);}catch(e){c=!0,n=e}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(c)throw n}}return a}}(t)||function(e,t){if(e){if("string"==typeof e)return C(e,2);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?C(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=r[0],o=r[1];return i.showSlideSwipingHovererIfNotYet=function(){n||o(!0)},i.hideSlideSwipingHovererIfShown=function(){n&&o(!1)},n&&a().createElement("div",{className:"".concat(l,"slide-swiping-hoverer ").concat(h," ").concat(f)})},M=function(e){var t=e.onClick,i=e.name,r=e.d,n=i.charAt(0).toUpperCase()+i.slice(1),o="".concat(l,"slide-btn");return a().createElement("div",{onClick:t,title:"".concat(n," slide"),className:"".concat(o,"-container ").concat(o,"-").concat(i,"-container")},a().createElement("div",{className:"".concat(o," ").concat(p)},a().createElement(w,{viewBox:"0 0 20 20",size:"20px",d:r})))};function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function T(e){var t=e.o,i=t.elements.sourcesComponents,r=t.isl,n=t.loc,o=t.saw,l=t.sawu,c=t.st,d=t.stageIndexes.current,h=e.i,p=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,n,o,s,a=[],l=!0,c=!1;try{for(o=(i=i.call(e)).next;!(l=(r=o.call(i)).done)&&(a.push(r.value),2!==a.length);l=!0);}catch(e){c=!0,n=e}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(c)throw n}}return a}}(e)||function(e,t){if(e){if("string"==typeof e)return L(e,2);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?L(e,2):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,s.useState)(!1)),u=p[0],f=p[1];return l[h]=function(){f(!u)},a().createElement("div",{ref:o[h]},!r[h]&&a().createElement("div",{className:"fslightboxl"},a().createElement("div",null),a().createElement("div",null),a().createElement("div",null),a().createElement("div",null)),(h===d||!n&&c.i(h))&&i[h])}function I(e){var t=e.o,i=e.i,r=t.props.slideDistance,n=t.smw,o=t.smwm,s=t.st,l=0;o[i]={};var c=o[i];function d(){return n[i].current}function y(e){d().style.transform="translateX(".concat(e+l,"px)"),l=0}function g(){return(1+r)*innerWidth}return c.s=function(){d().style.display="flex"},c.h=function(){d().style.display="none"},c.a=function(){d().classList.add(u)},c.d=function(){d().classList.remove(u)},c.n=function(){d().style.removeProperty("transform")},c.v=function(e){return l=e,c},c.ne=function(){y(-g())},c.z=function(){y(0)},c.p=function(){y(g())},a().createElement("div",{ref:n[i],className:"".concat(f," ").concat(h," ").concat(p),style:s.i(i)?{}:{display:"none"}},a().createElement(T,{o:t,i}))}function A(e){return e.touches?e.touches[0].screenX:e.screenX}const z=function(e){for(var t=e.o,i=[],r=0;r<t.sl;r++)i.push(a().createElement(I,{o:t,i:r,key:r}));return a().createElement("div",{className:"".concat(f," ").concat(h),onPointerDown:function(e){!function(e,t){var i=e.elements.sources,r=e.p,n=e.smwm,o=e.stageIndexes;"IMG"===t.target.tagName&&t.preventDefault(),r.isSwiping=!0,r.downScreenX=A(t),r.swipedX=0;var s=i[o.current].current;s&&s.contains(t.target)?r.isSourceDownEventTarget=!0:r.isSourceDownEventTarget=!1;for(var a=0;a<n.length;a++)n[a].d()}(t,e)}},i)};function D(){var e=document.createElement("style");e.className=c,e.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px!important;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-previous-container{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-previous-container{padding-left:3px}}.fslightbox-slide-btn-next-container{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-next-container{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightboxin{font-size:22px;color:#eaebeb;margin:auto}.fslightboxv{object-fit:cover}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightboxs{position:relative;z-index:2;opacity:0;transform:translateZ(0);margin:auto;backface-visibility:hidden}")),document.head.appendChild(e)}function N(e){for(var t=e.props.sources,i=[],r=0;r<t.length;r++)i.push(a().createRef());return i}function $(e,t,i){for(var r=0;r<e.props.sources.length;r++)e.collections[t][r]=e.resolve(i,[r])}var B="fslightbox-types";function U(e){var t,i=e.props,r={},n=0;if(this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:o(e)},this.handleReceivedSourceTypeForUrl=function(e,i){if(!1===r[i]&&(n--,"invalid"!==e?r[i]=e:delete r[i],0===n)){!function(e,t){for(var i in t)e[i]=t[i]}(t,r);try{localStorage.setItem(B,JSON.stringify(t))}catch(e){}}},i.disableLocalStorage)this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){};else{try{t=JSON.parse(localStorage.getItem(B))}catch(e){}t||(t={},this.getSourceTypeFromLocalStorageByUrl=o)}function o(e){n++,r[e]=!1}}var V="image",H="video",F="youtube",W="custom",q="invalid";function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},Y.apply(this,arguments)}function X(e){var t=e.o,i=t.collections.sourceLoadHandlers,r=t.elements.sources,n=t.props,o=n.customAttributes,s=n.sources,l=e.i;return a().createElement("img",Y({className:"fslightboxs",onLoad:i[l].handleImageLoad,ref:r[l],src:s[l]},o&&o[l]?o[l]:{}))}function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},K.apply(this,arguments)}function J(e){var t=e.o,i=t.collections.sourceLoadHandlers,r=t.elements.sources,n=t.props,o=n.customAttributes,s=n.sources,l=t.timeout,c=e.i;return l(i[c].handleNotMetaDatedVideoLoad,3e3),a().createElement("video",K({ref:r[c],className:"fslightboxs fslightboxv",src:s[c],onLoadedMetadata:i[c].handleVideoLoad,controls:!0},o&&o[c]?o[c]:{}))}function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},G.apply(this,arguments)}function Q(e){var t=e.o,i=t.elements.sources,r=t.collections.sourceLoadHandlers,n=t.props,o=n.customAttributes,l=n.sources,c=e.i;(0,s.useEffect)(r[c].handleYoutubeLoad);var d=l[c],h=d.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2],p=d.split("?")[1];return p=p||"",a().createElement("iframe",G({ref:i[c],className:"fslightboxs",src:"https://www.youtube.com/embed/".concat(h,"?").concat(p),frameBorder:"0",allowFullScreen:!0},o&&o[c]?o[c]:{}))}function Z(e){var t=e.o,i=t.isl,r=t.sawu,n=t.smw,o=e.i;return(0,s.useEffect)((function(){i[o]=!0,r[o](),n[o].current.classList.add(m)})),a().createElement("div",{className:"fslightboxin ".concat(p)},"Invalid source")}function ee(e){var t=e.o,i=t.collections.sourceLoadHandlers,r=t.elements.sources,n=t.props.sources,o=e.i;(0,s.useEffect)(i[o].handleCustomLoad);var l=n[o].props.className;return a().cloneElement(n[o],{ref:r[o],className:l?"".concat(l," fslightboxs"):"fslightboxs"})}function te(e){var t=e.componentsServices.isLightboxOpenManager,i=e.elements.sourcesComponents,r=e.sawu;this.runActionsForSourceTypeAndIndex=function(n,o){var s;switch(n){case V:s=X;break;case H:s=J;break;case F:s=Q;break;case W:s=ee;break;default:s=Z}i[o]=a().createElement(s,{o:e,i:o}),t.get()&&r[o]()}}function ie(e,t,i){var r=e.props,n=r.types,o=r.type,s=r.sources;this.getTypeSetByClientForIndex=function(e){var t;return n&&n[e]?t=n[e]:o&&(t=o),t},this.retrieveTypeWithXhrForIndex=function(e){!function(e,t){var i=document.createElement("a");i.href=e;var r=i.hostname;if("www.youtube.com"===r||"youtu.be"===r)return t(F);var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4!==n.readyState){if(2===n.readyState){var e,i=n.getResponseHeader("content-type");switch(i.slice(0,i.indexOf("/"))){case"image":e=V;break;case"video":e=H;break;default:e=q}n.onreadystatechange=null,n.abort(),t(e)}}else t(q)},n.open("GET",e),n.send()}(s[e],(function(r){t.handleReceivedSourceTypeForUrl(r,s[e]),i.runActionsForSourceTypeAndIndex(r,e)}))}}function re(e){var t=e.componentsServices.isLightboxOpenManager,i=e.core,r=i.lightboxCloser,n=i.slideIndexChanger,o=e.stageIndexes;this.runTogglerUpdateActions=function(){t.get()?r.closeLightbox():e.ii?e.o():e.i()},this.runCurrentStageIndexUpdateActionsFor=function(e){e!==o.current&&(t.get()?n.jumpTo(e):o.current=e)}}function ne(e){var t=e.core.lightboxUpdater,i=(0,e.resolve)(re);t.handleUpdate=function(t){var r=e.props;void 0!==r.source?i.runCurrentStageIndexUpdateActionsFor(r.sources.indexOf(r.source)):void 0!==r.sourceIndex?i.runCurrentStageIndexUpdateActionsFor(r.sourceIndex):void 0!==r.slide&&i.runCurrentStageIndexUpdateActionsFor(r.slide-1),t.toggler!==r.toggler&&i.runTogglerUpdateActions()}}function oe(e){var t=e.loc,i=e.stageIndexes,r=e.sawu;if(t)r[i.current]();else for(var n in i){var o=i[n];void 0!==o&&r[o]()}}function se(e,t){var i=e.current.classList;i.contains(t)&&i.remove(t)}function ae(e){var t,i=e.dss,r=e.p,n=e.sl,o=(t=!1,function(){return!t&&(t=!0,requestAnimationFrame((function(){t=!1})),!0)});this.a=1===n||i?function(){r.swipedX=1}:function(t){r.isSwiping&&o()&&function(e,t){var i=e.componentsServices,r=e.elements.container,n=e.p,o=e.smwm,s=e.stageIndexes;i.showSlideSwipingHovererIfNotYet(),r.current.classList.add(d),n.swipedX=A(t)-n.downScreenX;var a=s.previous,l=s.next;function c(e,t){o[e].v(n.swipedX)[t]()}c(s.current,"z"),void 0!==a&&n.swipedX>0?c(a,"ne"):void 0!==l&&n.swipedX<0&&c(l,"p")}(e,t)}}function le(e){var t=e.core.slideIndexChanger,i=e.smwm,r=e.stageIndexes,n=e.sws;function o(e){var t=i[r.current];t.a(),t[e]()}function s(e,t){void 0!==e&&(i[e].s(),i[e][t]())}this.p=function(){var e=r.previous;if(void 0===e)o("z");else{o("p");var i=r.next;t.changeTo(e);var a=r.previous;n.d(a),n.b(i),o("z"),s(a,"ne")}},this.n=function(){var e=r.next;if(void 0===e)o("z");else{o("ne");var i=r.previous;t.changeTo(e);var a=r.next;n.d(a),n.b(i),o("z"),s(a,"p")}}}function ce(e){var t=e.componentsServices,i=e.core.lightboxCloser,r=e.dss,n=e.elements.container,o=e.p,s=e.props.disableBackgroundClose,a=(0,e.r)(le);this.n=function(){t.hideSlideSwipingHovererIfShown(),o.isSourceDownEventTarget||s||i.closeLightbox(),o.isSwiping=!1},this.s=function(){r||(o.swipedX>0?a.p():a.n()),t.hideSlideSwipingHovererIfShown(),n.current.classList.remove(d),o.isSwiping=!1}}function de(e,t,i,r){var n=e.data,o=e.elements.sources,s=i/r,a=0;this.adjustSize=function(){if((a=n.maxSourceWidth/s)<n.maxSourceHeight)return i<n.maxSourceWidth&&(a=r),l();a=r>n.maxSourceHeight?n.maxSourceHeight:r,l()};var l=function(){var e=o[t].current.style;e.width=a*s+"px",e.height=a+"px"}}function he(e,t){var i=this,r=e.collections.sourceSizers,n=e.elements.sources,o=e.isl,s=e.resolve,a=e.saw,l=e.sawu;function c(e,i){r[t]=s(de,[t,e,i]),r[t].adjustSize()}this.runActions=function(e,r){o[t]=!0,l[t](),n[t].current.classList.add(v),a[t].current.classList.add(m),c(e,r),i.runActions=c}}function pe(e,t){var i,r=this,n=e.elements.sources,o=e.props,s=(0,e.resolve)(he,[t]);this.handleImageLoad=function(e){var t=e.target,i=t.naturalWidth,r=t.naturalHeight;s.runActions(i,r)},this.handleVideoLoad=function(e){var t=e.target,r=t.videoWidth,n=t.videoHeight;i=!0,s.runActions(r,n)},this.handleNotMetaDatedVideoLoad=function(){i||r.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;o.maxYoutubeVideoDimensions&&(e=o.maxYoutubeVideoDimensions.width,t=o.maxYoutubeVideoDimensions.height),s.runActions(e,t)},this.handleCustomLoad=function(){var e=n[t].current;if(e){var i=e.offsetWidth,o=e.offsetHeight;i&&o?s.runActions(i,o):setTimeout(r.handleCustomLoad)}}}function ue(e){return ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue(e)}function fe(e){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(e)}function ye(e,t,i){return ye=ve()?Reflect.construct.bind():function(e,t,i){var r=[null];r.push.apply(r,t);var n=new(Function.bind.apply(e,r));return i&&me(n,i.prototype),n},ye.apply(null,arguments)}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function me(e,t){return me=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},me(e,t)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ve(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function we(e){return we=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},we(e)}"object"===("undefined"==typeof document?"undefined":ue(document))&&D();var xe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&me(e,t)}(s,e);var t,i,r,n,o=(r=s,n=ve(),function(){var e,t=we(r);if(n){var i=we(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===fe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return be(e)}(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o.call(this,e)).state={isOpen:!1},t.data={maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},t.isl=[],t.p={isSwiping:!1,downScreenX:null,isSourceDownEventTarget:!1,swipedX:0},t.stageIndexes={current:0},t.componentsServices={showSlideSwipingHovererIfNotYet:null,hideSlideSwipingHovererIfShown:null,setSlideNumber:null,isSlideSwipingHovererShown:{},isLightboxOpenManager:{get:function(){return t.state.isOpen},set:function(e,i){t.setState({isOpen:e},i)}}},t.fss={},t.sawu=[],t.elements={container:a().createRef(),sources:null,sourcesComponents:[]},t.collections={sourceLoadHandlers:[],sourceSizers:[],xhrs:[]},t.smwm=[],t.core={classFacade:{},globalEventsController:{},lightboxCloser:{},lightboxCloseActioner:{},lightboxUpdater:{},scrollbarRecompensor:{},slideIndexChanger:{},windowResizeActioner:{}},t.fs={},t.st={},t.sws={},t.timeout=t.timeout.bind(be(t)),t.getQueuedAction=t.getQueuedAction.bind(be(t)),t.r=t.resolve.bind(be(t)),t.resolve=t.resolve.bind(be(t)),t.e=t.e.bind(be(t)),ne(be(t)),function(e){var t=e.componentsServices.isLightboxOpenManager,i=e.core,r=i.globalEventsController,n=i.scrollbarRecompensor,o=i.windowResizeActioner,s=e.e,a=e.elements,l=e.st,c=e.stageIndexes,d=e.sws;function h(){oe(e),document.documentElement.classList.add("fslightbox-open"),n.addRecompense(),r.attachListeners(),o.runActions(),s("onOpen")}e.o=function(){$(e,"sourceLoadHandlers",pe),t.set(!0,(function(){d.b(c.previous),d.b(c.current),d.b(c.next),l.u(),d.c(),d.a(),h(),s("onShow")}))},e.i=function(){e.ii=!0,function(e){var t=e.props;e.s=t.sources,e.sl=e.s.length,e.dss=t.disableSlideSwiping,e.loc=t.loadOnlyCurrentSource}(e),e.smw=N(e),e.saw=N(e),a.sources=N(e),$(e,"sourceLoadHandlers",pe),function(e){var t,i,r;!function(e){var t=e.props.sources,i=e.st,r=e.stageIndexes,n=t.length-1;i.p=function(){return 0===r.current?n:r.current-1},i.n=function(){return r.current===n?0:r.current+1},i.u=0===n?function(){}:1===n?function(){0===r.current?(r.next=1,delete r.previous):(r.previous=0,delete r.next)}:function(){r.previous=i.p(),r.next=i.n()},i.i=n<=2?function(){return!0}:function(e){var t=r.current;if(0===t&&e===n||t===n&&0===e)return!0;var i=t-e;return-1===i||0===i||1===i}}(e),i=(t=e).core.classFacade,r=t.elements,i.removeFromEachElementClassIfContains=function(e,t){for(var i=0;i<r[e].length;i++)se(r[e][i],t)},function(e){var t=e.fs,i=e.fss,r=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];function n(e){for(var t=0;t<r.length;t++)document[e](r[t],o)}function o(){i.s(document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)}t.o=function(){i.s(!0);var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},t.x=function(){i.s(!1),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},t.t=function(){i.g()?t.x():t.o()},t.l=function(){n("addEventListener")},t.q=function(){n("removeEventListener")}}(e),function(e){var t,i,r=e.core,n=r.globalEventsController,o=r.windowResizeActioner,s=e.fs,a=(0,e.r)(ae);n.attachListeners=function(){document.addEventListener("pointermove",a.a),i=function(t){var i,r,n;r=(i=e).p,n=(0,i.r)(ce),r.isSwiping&&(r.swipedX?n.s():n.n())},document.addEventListener("pointerup",i),addEventListener("resize",o.runActions),t=function(t){!function(e,t){var i=e.core.lightboxCloser,r=e.fs;switch(t.key){case"Escape":i.closeLightbox();break;case"ArrowLeft":e.pr();break;case"ArrowRight":e.n();break;case"F11":t.preventDefault(),r.t()}}(e,t)},document.addEventListener("keydown",t),s.l()},n.removeListeners=function(){document.removeEventListener("pointermove",a.a),document.removeEventListener("pointerup",i),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",t),s.q()}}(e),function(e){var t=e.core,i=t.lightboxCloser,r=t.lightboxCloseActioner;i.closeLightbox=function(){r.isLightboxFadingOut||r.runActions()}}(e),function(e){var t=e.componentsServices.isLightboxOpenManager,i=e.core,r=i.globalEventsController,n=i.lightboxCloseActioner,o=i.scrollbarRecompensor,s=e.e,a=e.elements.container,l=e.fs,c=e.fss,d=e.p,h=e.props,p=e.timeout;n.isLightboxFadingOut=!1,n.runActions=function(){n.isLightboxFadingOut=!0,a.current.classList.add(b),r.removeListeners(),h.exitFullscreenOnClose&&c.g()&&l.x(),p((function(){n.isLightboxFadingOut=!1,d.isSwiping=!1,a.current.classList.remove(b),document.documentElement.classList.remove("fslightbox-open"),o.removeRecompense(),t.set(!1),s("onClose")}),220)}}(e),ne(e),function(e){var t=e.data,i=e.core.scrollbarRecompensor;i.addRecompense=function(){"complete"===document.readyState?r():window.addEventListener("load",(function(){r(),i.addRecompense=r}))};var r=function(){document.body.offsetHeight>window.innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")};i.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core.slideIndexChanger,i=e.sl,r=e.st;i>1?(e.pr=function(){t.jumpTo(r.p())},e.n=function(){t.jumpTo(r.n())}):(e.pr=function(){},e.n=function(){})}(e),function(e){var t=e.componentsServices,i=e.core.slideIndexChanger,r=e.isl,n=e.saw,o=e.smwm,s=e.st,a=e.stageIndexes,l=e.sws;i.changeTo=function(i){a.current=i,s.u(),t.setSlideNumber(i+1),oe(e)},i.jumpTo=function(e){var t=a.previous,c=a.current,d=a.next,h=r[c],p=r[e];i.changeTo(e);for(var u=0;u<o.length;u++)o[u].d();l.d(c),l.c(),requestAnimationFrame((function(){requestAnimationFrame((function(){var e=a.previous,i=a.current,u=a.next;function f(){s.i(c)?c===a.previous?o[c].ne():c===a.next&&o[c].p():(o[c].h(),o[c].n())}h&&n[c].current.classList.add(g),p&&n[i].current.classList.add(y),l.a(),void 0!==e&&e!==c&&o[e].ne(),o[i].n(),void 0!==u&&u!==c&&o[u].p(),l.b(t),l.b(d),r[c]?setTimeout(f,210):f()}))}))}}(e),function(e){var t=e.isl,i=e.stageIndexes,r=e.saw,n=e.smwm,o=e.st,s=e.sws;s.a=function(){for(var e in i)n[i[e]].s()},s.b=function(e){void 0===e||o.i(e)||(n[e].h(),n[e].n())},s.c=function(){for(var e in i)s.d(i[e])},s.d=function(e){if(t[e]){var i=r[e];se(i,m),se(i,y),se(i,g)}}}(e),function(e){var t=e.collections.sourceSizers,i=e.core.windowResizeActioner,r=e.data,n=e.elements.sources,o=e.smwm,s=e.stageIndexes;i.runActions=function(){innerWidth<992?r.maxSourceWidth=innerWidth:r.maxSourceWidth=.9*innerWidth,r.maxSourceHeight=.9*innerHeight;for(var e=0;e<n.length;e++)o[e].d(),t[e]&&n[e].current&&t[e].adjustSize();var i=s.previous,a=s.next;void 0!==i&&o[i].ne(),void 0!==a&&o[a].p()}}(e)}(e),l.u(),t.set(!0,(function(){h(),function(e){for(var t=e.props.sources,i=e.resolve,r=i(U),n=i(te),o=i(ie,[r,n]),s=0;s<t.length;s++)if("string"==typeof t[s]){var a=o.getTypeSetByClientForIndex(s);if(a)n.runActionsForSourceTypeAndIndex(a,s);else{var l=r.getSourceTypeFromLocalStorageByUrl(t[s]);l?n.runActionsForSourceTypeAndIndex(l,s):o.retrieveTypeWithXhrForIndex(s)}}else n.runActionsForSourceTypeAndIndex(W,s)}(e),s("onInit")}))}}(be(t)),t}return t=s,i=[{key:"timeout",value:function(e,t){var i=this;setTimeout((function(){i.elements.container.current&&e()}),t)}},{key:"getQueuedAction",value:function(e,t){var i=this,r=[];return function(){r.push(!0),i.timeout((function(){r.pop(),r.length||e()}),t)}}},{key:"resolve",value:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return i.unshift(this),ye(e,function(e){if(Array.isArray(e))return ge(e)}(t=i)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return ge(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?ge(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},{key:"e",value:function(e){var t=this.props[e];t&&t(this)}},{key:"componentDidUpdate",value:function(e,t,i){this.core.lightboxUpdater.handleUpdate(e)}},{key:"componentDidMount",value:function(){var e,t,i;e=this.data,t=this.i,i=this.props.openOnMount,document.getElementsByClassName(c).length||D(),e.scrollbarWidth=function(){var e=document.createElement("div"),t=e.style,i=document.createElement("div");t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",i.style.width="100%",document.body.appendChild(e);var r=e.offsetWidth;e.appendChild(i);var n=i.offsetWidth;return document.body.removeChild(e),r-n}(),i&&t()}},{key:"componentWillUnmount",value:function(){!function(e){for(var t=e.collections.xhrs,i=e.componentsServices.isLightboxOpenManager,r=e.core.globalEventsController,n=0;n<t.length;n++)t[n].abort();i.get()&&r.removeListeners()}(this)}},{key:"render",value:function(){return this.state.isOpen?a().createElement("div",{ref:this.elements.container,className:"".concat(l,"container ").concat(h," ").concat(m)},a().createElement(_,{fsLightbox:this}),a().createElement(j,{fsLightbox:this}),this.props.sources.length>1?a().createElement(a().Fragment,null,a().createElement(M,{onClick:this.pr,name:"previous",d:"M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"}),a().createElement(M,{onClick:this.n,name:"next",d:"M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"})):null,a().createElement(z,{o:this})):null}}],i&&function(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(n=function(e,t){if("object"!==fe(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,"string");if("object"!==fe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===fe(n)?n:String(n)),r)}var n}(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),s}(s.Component);xe.propTypes={toggler:o().bool,sources:o().array,slide:o().number,source:o().string,sourceIndex:o().number,onOpen:o().func,onClose:o().func,onInit:o().func,onShow:o().func,disableLocalStorage:o().bool,types:o().array,type:o().string,customAttributes:o().array,maxYoutubeVideoDimensions:o().object,disableBackgroundClose:o().bool,disableSlideSwiping:o().bool,exitFullscreenOnClose:o().bool,loadOnlyCurrentSource:o().bool,openOnMount:o().bool,slideDistance:o().number},xe.defaultProps={slideDistance:.3};const Pe=xe;e.exports=r})()},5264:(e,t,i)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(i(6540)),o=a(i(7965)),s=["text","onCopy","options","children"];function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){f(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(g,e);var t,i,a,l,y=(a=g,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(a);if(l){var i=u(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function g(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return f(p(e=y.call.apply(y,[this].concat(i))),"onClick",(function(t){var i=e.props,r=i.text,s=i.onCopy,a=i.children,l=i.options,c=n.default.Children.only(a),d=(0,o.default)(r,l);s&&s(r,d),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(t)})),e}return t=g,(i=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),i=function(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}(e,s),r=n.default.Children.only(t);return n.default.cloneElement(r,c(c({},i),{},{onClick:this.onClick}))}}])&&d(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),g}(n.default.PureComponent);t.CopyToClipboard=y,f(y,"defaultProps",{onCopy:void 0,options:void 0})},9399:(e,t,i)=>{"use strict";var r=i(5264).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},115:e=>{var t="undefined"!=typeof Element,i="function"==typeof Map,r="function"==typeof Set,n="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,s){if(e===s)return!0;if(e&&s&&"object"==typeof e&&"object"==typeof s){if(e.constructor!==s.constructor)return!1;var a,l,c,d;if(Array.isArray(e)){if((a=e.length)!=s.length)return!1;for(l=a;0!=l--;)if(!o(e[l],s[l]))return!1;return!0}if(i&&e instanceof Map&&s instanceof Map){if(e.size!==s.size)return!1;for(d=e.entries();!(l=d.next()).done;)if(!s.has(l.value[0]))return!1;for(d=e.entries();!(l=d.next()).done;)if(!o(l.value[1],s.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&s instanceof Set){if(e.size!==s.size)return!1;for(d=e.entries();!(l=d.next()).done;)if(!s.has(l.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(s)){if((a=e.length)!=s.length)return!1;for(l=a;0!=l--;)if(e[l]!==s[l])return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof s.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof s.toString)return e.toString()===s.toString();if((a=(c=Object.keys(e)).length)!==Object.keys(s).length)return!1;for(l=a;0!=l--;)if(!Object.prototype.hasOwnProperty.call(s,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=a;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!o(e[c[l]],s[c[l]]))return!1;return!0}return e!=e&&s!=s}e.exports=function(e,t){try{return o(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},8021:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(i=null!=e?n(l(e)):{},d(!t&&e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)),p=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),u={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(u,{default:()=>b}),e.exports=(r=u,d(o({},"__esModule",{value:!0}),r));var f=h(i(6540)),y=h(i(115)),g=i(7604),m=i(5635);class b extends f.Component{constructor(){super(...arguments),p(this,"mounted",!1),p(this,"isReady",!1),p(this,"isPlaying",!1),p(this,"isLoading",!0),p(this,"loadOnReady",null),p(this,"startOnPlay",!0),p(this,"seekOnPlay",null),p(this,"onDurationCalled",!1),p(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),p(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),p(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),i=this.getDuration();if(i){const r={playedSeconds:e,played:e/i};null!==t&&(r.loadedSeconds=t,r.loaded=t/i),r.playedSeconds===this.prevPlayed&&r.loadedSeconds===this.prevLoaded||this.props.onProgress(r),this.prevPlayed=r.playedSeconds,this.prevLoaded=r.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),p(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:i,muted:r}=this.props;e(),r||null===i||this.player.setVolume(i),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),p(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==i&&this.player.setPlaybackRate(i),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),p(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),p(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:i}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,i())})),p(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),p(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),p(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:i,volume:r,muted:n,playbackRate:o,pip:s,loop:a,activePlayer:l,disableDeferredLoading:c}=this.props;if(!(0,y.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!c&&!(0,m.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!i||this.isPlaying||this.player.play(),e.playing&&!i&&this.isPlaying&&this.player.pause(),!e.pip&&s&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!s&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==r&&null!==r&&this.player.setVolume(r),e.muted!==n&&(n?this.player.mute():(this.player.unmute(),null!==r&&setTimeout((()=>this.player.setVolume(r))))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==a&&this.player.setLoop&&this.player.setLoop(a)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,i){if(this.isReady){if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,i):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e,i)}else 0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3))}render(){const e=this.props.activePlayer;return e?f.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}p(b,"displayName","Player"),p(b,"propTypes",g.propTypes),p(b,"defaultProps",g.defaultProps)},6734:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>g}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540));const f="64px",y={};class g extends u.Component{constructor(){super(...arguments),h(this,"mounted",!1),h(this,"state",{image:null}),h(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:i}=this.props;e.url===t&&e.light===i||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:i}){if(!u.default.isValidElement(t))if("string"!=typeof t){if(!y[e])return this.setState({image:null}),window.fetch(i.replace("{url}",e)).then((e=>e.json())).then((t=>{if(t.thumbnail_url&&this.mounted){const i=t.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:i}),y[e]=i}}));this.setState({image:y[e]})}else this.setState({image:t})}render(){const{light:e,onClick:t,playIcon:i,previewTabIndex:r,previewAriaLabel:n}=this.props,{image:o}=this.state,s=u.default.isValidElement(e),a={display:"flex",alignItems:"center",justifyContent:"center"},l={preview:{width:"100%",height:"100%",backgroundImage:o&&!s?`url(${o})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...a},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:f,width:f,height:f,position:s?"absolute":void 0,...a},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},c=u.default.createElement("div",{style:l.shadow,className:"react-player__shadow"},u.default.createElement("div",{style:l.playIcon,className:"react-player__play-icon"}));return u.default.createElement("div",{style:l.preview,className:"react-player__preview",onClick:t,tabIndex:r,onKeyPress:this.handleKeyPress,...n?{"aria-label":n}:{}},s?e:null,i||c)}}},5580:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(i=null!=e?n(l(e)):{},d(!t&&e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)),p=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),u={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(u,{createReactPlayer:()=>R}),e.exports=(r=u,d(o({},"__esModule",{value:!0}),r));var f=h(i(6540)),y=h(i(4744)),g=h(i(1811)),m=h(i(115)),b=i(7604),v=i(5635),w=h(i(8021));const x=(0,v.lazy)((()=>i.e(50).then(i.t.bind(i,6734,23)))),P="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,O=void 0!==i.g&&i.g.window&&i.g.window.document,S=Object.keys(b.propTypes),k=P||O?f.Suspense:()=>null,E=[],R=(e,t)=>{var i;return i=class extends f.Component{constructor(){super(...arguments),p(this,"state",{showPreview:!!this.props.light}),p(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),p(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),p(this,"showPreview",(()=>{this.setState({showPreview:!0})})),p(this,"getDuration",(()=>this.player?this.player.getDuration():null)),p(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),p(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),p(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),p(this,"seekTo",((e,t,i)=>{if(!this.player)return null;this.player.seekTo(e,t,i)})),p(this,"handleReady",(()=>{this.props.onReady(this)})),p(this,"getActivePlayer",(0,g.default)((i=>{for(const t of[...E,...e])if(t.canPlay(i))return t;return t||null}))),p(this,"getConfig",(0,g.default)(((e,t)=>{const{config:i}=this.props;return y.default.all([b.defaultProps.config,b.defaultProps.config[t]||{},i,i[t]||{}])}))),p(this,"getAttributes",(0,g.default)((e=>(0,v.omit)(this.props,S)))),p(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const i=this.getConfig(e,t.key);return f.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:i,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,m.default)(this.props,e)||!(0,m.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:i,previewTabIndex:r,oEmbedUrl:n,previewAriaLabel:o}=this.props;return f.default.createElement(x,{url:e,light:t,playIcon:i,previewTabIndex:r,previewAriaLabel:o,oEmbedUrl:n,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:i,height:r,fallback:n,wrapper:o}=this.props,{showPreview:s}=this.state,a=this.getAttributes(e),l="string"==typeof o?this.references.wrapper:void 0;return f.default.createElement(o,{ref:l,style:{...t,width:i,height:r},...a},f.default.createElement(k,{fallback:n},s?this.renderPreview(e):this.renderActivePlayer(e)))}},p(i,"displayName","ReactPlayer"),p(i,"propTypes",b.propTypes),p(i,"defaultProps",b.defaultProps),p(i,"addCustomPlayer",(e=>{E.push(e)})),p(i,"removeCustomPlayers",(()=>{E.length=0})),p(i,"canPlay",(t=>{for(const i of[...E,...e])if(i.canPlay(t))return!0;return!1})),p(i,"canEnablePIP",(t=>{for(const i of[...E,...e])if(i.canEnablePIP&&i.canEnablePIP(t))return!0;return!1})),i}},3554:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(h,{default:()=>y}),e.exports=(r=h,d(o({},"__esModule",{value:!0}),r));var p=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(7015)),u=i(5580);const f=p.default[p.default.length-1];var y=(0,u.createReactPlayer)(p.default,f)},327:(e,t,i)=>{var r,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var i in t)n(e,i,{get:t[i],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>S,DASH_EXTENSIONS:()=>R,FLV_EXTENSIONS:()=>j,HLS_EXTENSIONS:()=>E,MATCH_URL_DAILYMOTION:()=>w,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>y,MATCH_URL_KALTURA:()=>O,MATCH_URL_MIXCLOUD:()=>x,MATCH_URL_MUX:()=>u,MATCH_URL_SOUNDCLOUD:()=>h,MATCH_URL_STREAMABLE:()=>g,MATCH_URL_TWITCH_CHANNEL:()=>v,MATCH_URL_TWITCH_VIDEO:()=>b,MATCH_URL_VIDYARD:()=>P,MATCH_URL_VIMEO:()=>p,MATCH_URL_WISTIA:()=>m,MATCH_URL_YOUTUBE:()=>d,VIDEO_EXTENSIONS:()=>k,canPlay:()=>_}),e.exports=(r=l,((e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of s(t))a.call(e,i)||undefined===i||n(e,i,{get:()=>t[i],enumerable:!(r=o(t,i))||r.enumerable});return e})(n({},"__esModule",{value:!0}),r));var c=i(5635);const d=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,h=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,p=/vimeo\.com\/(?!progressive_redirect).+/,u=/stream\.mux\.com\/(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,y=/^https?:\/\/fb\.watch\/.+$/,g=/streamable\.com\/([a-z0-9]+)$/,m=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,b=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,v=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,w=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,x=/mixcloud\.com\/([^/]+\/[^/]+)/,P=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,O=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,S=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,k=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,E=/\.(m3u8)($|\?)/i,R=/\.(mpd)($|\?)/i,j=/\.(flv)($|\?)/i,C=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&C(t))return!0;if(C(t.src))return!0}return!1}return!(!(0,c.isMediaStream)(e)&&!(0,c.isBlobUrl)(e))||S.test(e)||k.test(e)||E.test(e)||R.test(e)||j.test(e)},_={youtube:e=>e instanceof Array?e.every((e=>d.test(e))):d.test(e),soundcloud:e=>h.test(e)&&!S.test(e),vimeo:e=>p.test(e)&&!k.test(e)&&!E.test(e),mux:e=>u.test(e),facebook:e=>f.test(e)||y.test(e),streamable:e=>g.test(e),wistia:e=>m.test(e),twitch:e=>b.test(e)||v.test(e),dailymotion:e=>w.test(e),mixcloud:e=>x.test(e),vidyard:e=>P.test(e),kaltura:e=>O.test(e),file:C}},9348:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>g}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);class g extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"onDurationChange",(()=>{const e=this.getDuration();this.props.onDuration(e)})),h(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),h(this,"unmute",(()=>{this.callPlayer("setMuted",!1)})),h(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{controls:t,config:i,onError:r,playing:n}=this.props,[,o]=e.match(y.MATCH_URL_DAILYMOTION);this.player?this.player.load(o,{start:(0,f.parseStartTime)(e),autoplay:n}):(0,f.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",(e=>e.player)).then((n=>{if(!this.container)return;const s=n.player;this.player=new s(this.container,{width:"100%",height:"100%",video:o,params:{controls:t,autoplay:this.props.playing,mute:this.props.muted,start:(0,f.parseStartTime)(e),origin:window.location.origin,...i.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:e=>r(e)}})}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return u.default.createElement("div",{style:t},u.default.createElement("div",{ref:this.ref}))}}h(g,"displayName","DailyMotion"),h(g,"canPlay",y.canPlay.dailymotion),h(g,"loopOnEnded",!0)},1343:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>b}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);const g="https://connect.facebook.net/en_US/sdk.js",m="fbAsyncInit";class b extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"playerID",this.props.config.playerId||`facebook-player-${(0,f.randomString)()}`),h(this,"mute",(()=>{this.callPlayer("mute")})),h(this,"unmute",(()=>{this.callPlayer("unmute")}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){t?(0,f.getSDK)(g,"FB",m).then((e=>e.XFBML.parse())):(0,f.getSDK)(g,"FB",m).then((e=>{e.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),e.Event.subscribe("xfbml.render",(e=>{this.props.onLoaded()})),e.Event.subscribe("xfbml.ready",(e=>{"video"===e.type&&e.id===this.playerID&&(this.player=e.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")}))}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){const{attributes:e}=this.props.config;return u.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false",...e})}}h(b,"displayName","Facebook"),h(b,"canPlay",y.canPlay.facebook),h(b,"loopOnEnded",!0)},688:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>P}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);const g="undefined"!=typeof navigator,m=g&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,b=g&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||m)&&!window.MSStream,v=g&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,w=/www\.dropbox\.com\/.+/,x=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;class P extends u.Component{constructor(){super(...arguments),h(this,"onReady",((...e)=>this.props.onReady(...e))),h(this,"onPlay",((...e)=>this.props.onPlay(...e))),h(this,"onBuffer",((...e)=>this.props.onBuffer(...e))),h(this,"onBufferEnd",((...e)=>this.props.onBufferEnd(...e))),h(this,"onPause",((...e)=>this.props.onPause(...e))),h(this,"onEnded",((...e)=>this.props.onEnded(...e))),h(this,"onError",((...e)=>this.props.onError(...e))),h(this,"onPlayBackRateChange",(e=>this.props.onPlaybackRateChange(e.target.playbackRate))),h(this,"onEnablePIP",((...e)=>this.props.onEnablePIP(...e))),h(this,"onDisablePIP",(e=>{const{onDisablePIP:t,playing:i}=this.props;t(e),i&&this.play()})),h(this,"onPresentationModeChange",(e=>{if(this.player&&(0,f.supportsWebKitPresentationMode)(this.player)){const{webkitPresentationMode:t}=this.player;"picture-in-picture"===t?this.onEnablePIP(e):"inline"===t&&this.onDisablePIP(e)}})),h(this,"onSeek",(e=>{this.props.onSeek(e.target.currentTime)})),h(this,"mute",(()=>{this.player.muted=!0})),h(this,"unmute",(()=>{this.player.muted=!1})),h(this,"renderSourceElement",((e,t)=>"string"==typeof e?u.default.createElement("source",{key:t,src:e}):u.default.createElement("source",{key:t,...e}))),h(this,"renderTrack",((e,t)=>u.default.createElement("track",{key:t,...e}))),h(this,"ref",(e=>{this.player&&(this.prevPlayer=this.player),this.player=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getSource(this.props.url);e&&(this.player.src=e),(b||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url===e.url||(0,f.isMediaStream)(this.props.url)||this.props.url instanceof Array||(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){const{url:t,playsinline:i}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),i&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return!e.config.forceVideo&&!e.config.attributes.poster&&(y.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio)}shouldUseHLS(e){return!!(v&&this.props.config.forceSafariHLS||this.props.config.forceHLS)||!b&&!this.props.config.forceDisableHls&&(y.HLS_EXTENSIONS.test(e)||x.test(e))}shouldUseDASH(e){return y.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return y.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}load(e){const{hlsVersion:t,hlsOptions:i,dashVersion:r,flvVersion:n}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,f.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",t),"Hls").then((t=>{if(this.hls=new t(i),this.hls.on(t.Events.MANIFEST_PARSED,(()=>{this.props.onReady()})),this.hls.on(t.Events.ERROR,((e,i)=>{this.props.onError(e,i,this.hls,t)})),x.test(e)){const t=e.match(x)[1];this.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}",t))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()})),this.shouldUseDASH(e)&&(0,f.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",r),"dashjs").then((t=>{this.dash=t.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),parseInt(r)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:t.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()})),this.shouldUseFLV(e)&&(0,f.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION",n),"flvjs").then((t=>{this.flv=t.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(t.Events.ERROR,((e,i)=>{this.props.onError(e,i,this.flv,t)})),this.flv.load(),this.props.onLoaded()})),e instanceof Array)this.player.load();else if((0,f.isMediaStream)(e))try{this.player.srcObject=e}catch(t){this.player.src=window.URL.createObjectURL(e)}}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,f.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,f.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(e){this.props.onError(e)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(0===e.length)return 0;const t=e.end(e.length-1),i=this.getDuration();return t>i?i:t}getSource(e){const t=this.shouldUseHLS(e),i=this.shouldUseDASH(e),r=this.shouldUseFLV(e);if(!(e instanceof Array||(0,f.isMediaStream)(e)||t||i||r))return w.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){const{url:e,playing:t,loop:i,controls:r,muted:n,config:o,width:s,height:a}=this.props,l=this.shouldUseAudio(this.props)?"audio":"video",c={width:"auto"===s?s:"100%",height:"auto"===a?a:"100%"};return u.default.createElement(l,{ref:this.ref,src:this.getSource(e),style:c,preload:"auto",autoPlay:t||void 0,controls:r,muted:n,loop:i,...o.attributes},e instanceof Array&&e.map(this.renderSourceElement),o.tracks.map(this.renderTrack))}}h(P,"displayName","FilePlayer"),h(P,"canPlay",y.canPlay.file)},7945:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>g}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);class g extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"secondsLoaded",null),h(this,"mute",(()=>{this.callPlayer("mute")})),h(this,"unmute",(()=>{this.callPlayer("unmute")})),h(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.on("ready",(()=>{setTimeout((()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()}),500)})))}),this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",(({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){return u.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}h(g,"displayName","Kaltura"),h(g,"canPlay",y.canPlay.kaltura)},3276:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>g}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);class g extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"secondsLoaded",null),h(this,"mute",(()=>{})),h(this,"unmute",(()=>{})),h(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then((e=>{this.player=e.PlayerWidget(this.iframe),this.player.ready.then((()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on(((e,t)=>{this.currentTime=e,this.duration=t})),this.props.onReady()}))}),this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){const{url:e,config:t}=this.props,i=e.match(y.MATCH_URL_MIXCLOUD)[1],r=(0,f.queryString)({...t.options,feed:`/${i}/`});return u.default.createElement("iframe",{key:i,ref:this.ref,style:{width:"100%",height:"100%"},src:`https://www.mixcloud.com/widget/iframe/?${r}`,frameBorder:"0",allow:"autoplay"})}}h(g,"displayName","Mixcloud"),h(g,"canPlay",y.canPlay.mixcloud),h(g,"loopOnEnded",!0)},7553:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>y}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(327);class y extends u.Component{constructor(){super(...arguments),h(this,"onReady",((...e)=>this.props.onReady(...e))),h(this,"onPlay",((...e)=>this.props.onPlay(...e))),h(this,"onBuffer",((...e)=>this.props.onBuffer(...e))),h(this,"onBufferEnd",((...e)=>this.props.onBufferEnd(...e))),h(this,"onPause",((...e)=>this.props.onPause(...e))),h(this,"onEnded",((...e)=>this.props.onEnded(...e))),h(this,"onError",((...e)=>this.props.onError(...e))),h(this,"onPlayBackRateChange",(e=>this.props.onPlaybackRateChange(e.target.playbackRate))),h(this,"onEnablePIP",((...e)=>this.props.onEnablePIP(...e))),h(this,"onSeek",(e=>{this.props.onSeek(e.target.currentTime)})),h(this,"onDurationChange",(()=>{const e=this.getDuration();this.props.onDuration(e)})),h(this,"mute",(()=>{this.player.muted=!0})),h(this,"unmute",(()=>{this.player.muted=!1})),h(this,"ref",(e=>{this.player=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getPlaybackId(this.props.url);e&&(this.player.playbackId=e)}componentWillUnmount(){this.player.playbackId=null,this.removeListeners(this.player)}addListeners(e){const{playsinline:t}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),e.addEventListener("canplay",this.onReady),t&&e.setAttribute("playsinline","")}removeListeners(e){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("canplay",this.onReady)}async load(e){var t;const{onError:i,config:r}=this.props;if(!(null==(t=globalThis.customElements)?void 0:t.get("mux-player")))try{const e="https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs".replace("VERSION",r.version);await import(`${e}`),this.props.onLoaded()}catch(e){i(e)}const[,n]=e.match(f.MATCH_URL_MUX);this.player.playbackId=n}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.playbackId=null}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}setPlaybackRate(e){try{this.player.playbackRate=e}catch(e){this.props.onError(e)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(0===e.length)return 0;const t=e.end(e.length-1),i=this.getDuration();return t>i?i:t}getPlaybackId(e){const[,t]=e.match(f.MATCH_URL_MUX);return t}render(){const{url:e,playing:t,loop:i,controls:r,muted:n,config:o,width:s,height:a}=this.props,l={width:"auto"===s?s:"100%",height:"auto"===a?a:"100%"};return!1===r&&(l["--controls"]="none"),u.default.createElement("mux-player",{ref:this.ref,"playback-id":this.getPlaybackId(e),style:l,preload:"auto",autoPlay:t||void 0,muted:n?"":void 0,loop:i?"":void 0,...o.attributes})}}h(y,"displayName","Mux"),h(y,"canPlay",f.canPlay.mux)},3127:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>g}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);class g extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"fractionLoaded",null),h(this,"mute",(()=>{this.setVolume(0)})),h(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),h(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){(0,f.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((i=>{if(!this.iframe)return;const{PLAY:r,PLAY_PROGRESS:n,PAUSE:o,FINISH:s,ERROR:a}=i.Widget.Events;t||(this.player=i.Widget(this.iframe),this.player.bind(r,this.props.onPlay),this.player.bind(o,(()=>{this.duration-this.currentTime<.05||this.props.onPause()})),this.player.bind(n,(e=>{this.currentTime=e.currentPosition/1e3,this.fractionLoaded=e.loadedProgress})),this.player.bind(s,(()=>this.props.onEnded())),this.player.bind(a,(e=>this.props.onError(e)))),this.player.load(e,{...this.props.config.options,callback:()=>{this.player.getDuration((e=>{this.duration=e/1e3,this.props.onReady()}))}})}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seekTo",1e3*e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.fractionLoaded*this.duration}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return u.default.createElement("iframe",{ref:this.ref,src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,style:t,frameBorder:0,allow:"autoplay"})}}h(g,"displayName","SoundCloud"),h(g,"canPlay",y.canPlay.soundcloud),h(g,"loopOnEnded",!0)},9643:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>g}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);class g extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"secondsLoaded",null),h(this,"mute",(()=>{this.callPlayer("mute")})),h(this,"unmute",(()=>{this.callPlayer("unmute")})),h(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",(({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t})),this.player.on("buffered",(({percent:e})=>{this.duration&&(this.secondsLoaded=this.duration*e)})),this.props.muted&&this.player.mute())}),this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const e=this.props.url.match(y.MATCH_URL_STREAMABLE)[1];return u.default.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}h(g,"displayName","Streamable"),h(g,"canPlay",y.canPlay.streamable)},1400:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>g}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);class g extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"playerID",this.props.config.playerId||`twitch-player-${(0,f.randomString)()}`),h(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),h(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:i,onError:r,config:n,controls:o}=this.props,s=y.MATCH_URL_TWITCH_CHANNEL.test(e),a=s?e.match(y.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(y.MATCH_URL_TWITCH_VIDEO)[1];t?s?this.player.setChannel(a):this.player.setVideo("v"+a):(0,f.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,{video:s?"":a,channel:s?a:"",height:"100%",width:"100%",playsinline:i,autoplay:this.props.playing,muted:this.props.muted,controls:!!s||o,time:(0,f.parseStartTime)(e),...n.options});const{READY:r,PLAYING:l,PAUSE:c,ENDED:d,ONLINE:h,OFFLINE:p,SEEK:u}=t.Player;this.player.addEventListener(r,this.props.onReady),this.player.addEventListener(l,this.props.onPlay),this.player.addEventListener(c,this.props.onPause),this.player.addEventListener(d,this.props.onEnded),this.player.addEventListener(u,this.props.onSeek),this.player.addEventListener(h,this.props.onLoaded),this.player.addEventListener(p,this.props.onLoaded)}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return u.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}h(g,"displayName","Twitch"),h(g,"canPlay",y.canPlay.twitch),h(g,"loopOnEnded",!0)},1171:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>g}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);class g extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"mute",(()=>{this.setVolume(0)})),h(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),h(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:t,config:i,onError:r,onDuration:n}=this.props,o=e&&e.match(y.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,f.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((e=>{this.container&&(e.api.addReadyListener(((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))}),o),e.api.renderPlayer({uuid:o,container:this.container,autoplay:t?1:0,...i.options}),e.api.getPlayerMetadata(o).then((e=>{this.duration=e.length_in_seconds,n(e.length_in_seconds)})))}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return u.default.createElement("div",{style:t},u.default.createElement("div",{ref:this.ref}))}}h(g,"displayName","Vidyard"),h(g,"canPlay",y.canPlay.vidyard)},1423:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>m}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);const g=e=>e.replace("/manage/videos","");class m extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"secondsLoaded",null),h(this,"mute",(()=>{this.setMuted(!0)})),h(this,"unmute",(()=>{this.setMuted(!1)})),h(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,f.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then((t=>{if(!this.container)return;const{playerOptions:i,title:r}=this.props.config;this.player=new t.Player(this.container,{url:g(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...i}),this.player.ready().then((()=>{const e=this.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",r&&(e.title=r)})).catch(this.props.onError),this.player.on("loaded",(()=>{this.props.onReady(),this.refreshDuration()})),this.player.on("play",(()=>{this.props.onPlay(),this.refreshDuration()})),this.player.on("pause",this.props.onPause),this.player.on("seeked",(e=>this.props.onSeek(e.seconds))),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",(({seconds:e})=>{this.currentTime=e})),this.player.on("progress",(({seconds:e})=>{this.secondsLoaded=e})),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",(e=>this.props.onPlaybackRateChange(e.playbackRate)))}),this.props.onError)}refreshDuration(){this.player.getDuration().then((e=>{this.duration=e}))}play(){const e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const{display:e}=this.props,t={width:"100%",height:"100%",overflow:"hidden",display:e};return u.default.createElement("div",{key:this.props.url,ref:this.ref,style:t})}}h(m,"displayName","Vimeo"),h(m,"canPlay",y.canPlay.vimeo),h(m,"forceLoad",!0)},3330:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>g}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);class g extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"playerID",this.props.config.playerId||`wistia-player-${(0,f.randomString)()}`),h(this,"onPlay",((...e)=>this.props.onPlay(...e))),h(this,"onPause",((...e)=>this.props.onPause(...e))),h(this,"onSeek",((...e)=>this.props.onSeek(...e))),h(this,"onEnded",((...e)=>this.props.onEnded(...e))),h(this,"onPlaybackRateChange",((...e)=>this.props.onPlaybackRateChange(...e))),h(this,"mute",(()=>{this.callPlayer("mute")})),h(this,"unmute",(()=>{this.callPlayer("unmute")}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:t,muted:i,controls:r,onReady:n,config:o,onError:s}=this.props;(0,f.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then((e=>{o.customControls&&o.customControls.forEach((t=>e.defineControl(t))),window._wq=window._wq||[],window._wq.push({id:this.playerID,options:{autoPlay:t,silentAutoPlay:"allow",muted:i,controlsVisibleOnLoad:r,fullscreenButton:r,playbar:r,playbackRateControl:r,qualityControl:r,volumeControl:r,settingsControl:r,smallPlayButton:r,...o.options},onReady:e=>{this.player=e,this.unbind(),this.player.bind("play",this.onPlay),this.player.bind("pause",this.onPause),this.player.bind("seek",this.onSeek),this.player.bind("end",this.onEnded),this.player.bind("playbackratechange",this.onPlaybackRateChange),n()}})}),s)}unbind(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.unbind(),this.callPlayer("remove")}seekTo(e,t=!0){this.callPlayer("time",e),t||this.pause()}setVolume(e){this.callPlayer("volume",e)}setPlaybackRate(e){this.callPlayer("playbackRate",e)}getDuration(){return this.callPlayer("duration")}getCurrentTime(){return this.callPlayer("time")}getSecondsLoaded(){return null}render(){const{url:e}=this.props,t=e&&e.match(y.MATCH_URL_WISTIA)[1],i=`wistia_embed wistia_async_${t}`;return u.default.createElement("div",{id:this.playerID,key:t,className:i,style:{width:"100%",height:"100%"}})}}h(g,"displayName","Wistia"),h(g,"canPlay",y.canPlay.wistia),h(g,"loopOnEnded",!0)},2910:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{default:()=>v}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(6540)),f=i(5635),y=i(327);const g=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,m=/user\/([a-zA-Z0-9_-]+)\/?/,b=/youtube-nocookie\.com/;class v extends u.Component{constructor(){super(...arguments),h(this,"callPlayer",f.callPlayer),h(this,"parsePlaylist",(e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(g.test(e)){const[,t]=e.match(g);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(m.test(e)){const[,t]=e.match(m);return{listType:"user_uploads",list:t}}return{}})),h(this,"onStateChange",(e=>{const{data:t}=e,{onPlay:i,onPause:r,onBuffer:n,onBufferEnd:o,onEnded:s,onReady:a,loop:l,config:{playerVars:c,onUnstarted:d}}=this.props,{UNSTARTED:h,PLAYING:p,PAUSED:u,BUFFERING:f,ENDED:y,CUED:g}=window.YT.PlayerState;if(t===h&&d(),t===p&&(i(),o()),t===u&&r(),t===f&&n(),t===y){const e=!!this.callPlayer("getPlaylist");l&&!e&&(c.start?this.seekTo(c.start):this.play()),s()}t===g&&a()})),h(this,"mute",(()=>{this.callPlayer("mute")})),h(this,"unmute",(()=>{this.callPlayer("unMute")})),h(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||g.test(e)?null:e.match(y.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:i,muted:r,playsinline:n,controls:o,loop:s,config:a,onError:l}=this.props,{playerVars:c,embedOptions:d}=a,h=this.getID(e);if(t)return g.test(e)||m.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:h,startSeconds:(0,f.parseStartTime)(e)||c.start,endSeconds:(0,f.parseEndTime)(e)||c.end});(0,f.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(e=>e.loaded)).then((t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:h,playerVars:{autoplay:i?1:0,mute:r?1:0,controls:o?1:0,start:(0,f.parseStartTime)(e),end:(0,f.parseEndTime)(e),origin:window.location.origin,playsinline:n?1:0,...this.parsePlaylist(e),...c},events:{onReady:()=>{s&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>l(e.data)},host:b.test(e)?"https://www.youtube-nocookie.com":void 0,...d}))}),l),d.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return u.default.createElement("div",{style:t},u.default.createElement("div",{ref:this.ref}))}}h(v,"displayName","YouTube"),h(v,"canPlay",y.canPlay.youtube)},7015:(e,t,i)=>{Object.create;var r,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),l={};((e,t)=>{for(var i in t)n(e,i,{get:t[i],enumerable:!0})})(l,{default:()=>h}),e.exports=(r=l,((e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of s(t))a.call(e,l)||l===i||n(e,l,{get:()=>t[l],enumerable:!(r=o(t,l))||r.enumerable});return e})(n({},"__esModule",{value:!0}),r));var c=i(5635),d=i(327),h=[{key:"youtube",name:"YouTube",canPlay:d.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,2910,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:d.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,3127,23))))},{key:"vimeo",name:"Vimeo",canPlay:d.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,1423,23))))},{key:"mux",name:"Mux",canPlay:d.canPlay.mux,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,7553,23))))},{key:"facebook",name:"Facebook",canPlay:d.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,1343,23))))},{key:"streamable",name:"Streamable",canPlay:d.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,9643,23))))},{key:"wistia",name:"Wistia",canPlay:d.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,3330,23))))},{key:"twitch",name:"Twitch",canPlay:d.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,1400,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:d.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,9348,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:d.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,3276,23))))},{key:"vidyard",name:"Vidyard",canPlay:d.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,1171,23))))},{key:"kaltura",name:"Kaltura",canPlay:d.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,7945,23))))},{key:"file",name:"FilePlayer",canPlay:d.canPlay.file,canEnablePIP:e=>d.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,c.supportsWebKitPresentationMode)())&&!d.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>i.e(50).then(i.t.bind(i,688,23))))}]},7604:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(h,{defaultProps:()=>S,propTypes:()=>P}),e.exports=(r=h,d(o({},"__esModule",{value:!0}),r));var p=((e,t,i)=>(i=null!=e?n(l(e)):{},d(e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)))(i(5556));const{string:u,bool:f,number:y,array:g,oneOfType:m,shape:b,object:v,func:w,node:x}=p.default,P={url:m([u,g,v]),playing:f,loop:f,controls:f,volume:y,muted:f,playbackRate:y,width:m([u,y]),height:m([u,y]),style:v,progressInterval:y,playsinline:f,pip:f,stopOnUnmount:f,light:m([f,u,v]),playIcon:x,previewTabIndex:y,previewAriaLabel:u,fallback:x,oEmbedUrl:u,wrapper:m([u,w,b({render:w.isRequired})]),config:b({soundcloud:b({options:v}),youtube:b({playerVars:v,embedOptions:v,onUnstarted:w}),facebook:b({appId:u,version:u,playerId:u,attributes:v}),dailymotion:b({params:v}),vimeo:b({playerOptions:v,title:u}),mux:b({attributes:v,version:u}),file:b({attributes:v,tracks:g,forceVideo:f,forceAudio:f,forceHLS:f,forceSafariHLS:f,forceDisableHls:f,forceDASH:f,forceFLV:f,hlsOptions:v,hlsVersion:u,dashVersion:u,flvVersion:u}),wistia:b({options:v,playerId:u,customControls:g}),mixcloud:b({options:v}),twitch:b({options:v,playerId:u}),vidyard:b({options:v})}),onReady:w,onStart:w,onPlay:w,onPause:w,onBuffer:w,onBufferEnd:w,onEnded:w,onError:w,onDuration:w,onSeek:w,onPlaybackRateChange:w,onPlaybackQualityChange:w,onProgress:w,onClickPreview:w,onEnablePIP:w,onDisablePIP:w},O=()=>{},S={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:O},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:O,onStart:O,onPlay:O,onPause:O,onBuffer:O,onBufferEnd:O,onEnded:O,onError:O,onDuration:O,onSeek:O,onPlaybackRateChange:O,onPlaybackQualityChange:O,onProgress:O,onClickPreview:O,onEnablePIP:O,onDisablePIP:O}},5635:(e,t,i)=>{var r,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of a(t))c.call(e,n)||n===i||o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e},h=(e,t,i)=>(i=null!=e?n(l(e)):{},d(!t&&e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)),p={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(p,{callPlayer:()=>M,getConfig:()=>C,getSDK:()=>j,isBlobUrl:()=>T,isMediaStream:()=>L,lazy:()=>g,omit:()=>_,parseEndTime:()=>O,parseStartTime:()=>P,queryString:()=>k,randomString:()=>S,supportsWebKitPresentationMode:()=>I}),e.exports=(r=p,d(o({},"__esModule",{value:!0}),r));var u=h(i(6540)),f=h(i(6147)),y=h(i(4744));const g=e=>u.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),m=/[?&#](?:start|t)=([0-9hms]+)/,b=/[?&#]end=([0-9hms]+)/,v=/(\d+)(h|m|s)/g,w=/^\d+$/;function x(e,t){if(e instanceof Array)return;const i=e.match(t);if(i){const e=i[1];if(e.match(v))return function(e){let t=0,i=v.exec(e);for(;null!==i;){const[,r,n]=i;"h"===n&&(t+=60*parseInt(r,10)*60),"m"===n&&(t+=60*parseInt(r,10)),"s"===n&&(t+=parseInt(r,10)),i=v.exec(e)}return t}(e);if(w.test(e))return parseInt(e)}}function P(e){return x(e,m)}function O(e){return x(e,b)}function S(){return Math.random().toString(36).substr(2,5)}function k(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function E(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const R={},j=function(e,t,i=null,r=(()=>!0),n=f.default){const o=E(t);return o&&r(o)?Promise.resolve(o):new Promise(((r,o)=>{if(R[e])return void R[e].push({resolve:r,reject:o});R[e]=[{resolve:r,reject:o}];const s=t=>{R[e].forEach((e=>e.resolve(t)))};if(i){const e=window[i];window[i]=function(){e&&e(),s(E(t))}}n(e,(r=>{r?(R[e].forEach((e=>e.reject(r))),R[e]=null):i||s(E(t))}))}))};function C(e,t){return(0,y.default)(t.config,e.config)}function _(e,...t){const i=[].concat(...t),r={},n=Object.keys(e);for(const t of n)-1===i.indexOf(t)&&(r[t]=e[t]);return r}function M(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function L(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function T(e){return/^blob:/.test(e)}function I(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},4433:(e,t,i)=>{"use strict";i.d(t,{Vq:()=>f});var r=i(6540),n=i(4976),o=function(){return o=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},s="",a=null,l=null,c=null;function d(){s="",null!==a&&a.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function h(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function p(){var e=null;if("#"===s)e=document.body;else{var t=s.replace("#","");null===(e=document.getElementById(t))&&"#top"===s&&(e=document.body)}if(null!==e){c(e);var i=e.getAttribute("tabindex");return null!==i||h(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==i||h(e)||(e.blur(),e.removeAttribute("tabindex")),d(),!0}return!1}function u(e){return r.forwardRef((function(t,i){var h="";"string"==typeof t.to&&t.to.includes("#")?h="#"+t.to.split("#").slice(1).join("#"):"object"==typeof t.to&&"string"==typeof t.to.hash&&(h=t.to.hash);var u={};e===n.k2&&(u.isActive=function(e,t){return e&&e.isExact&&t.hash===h});var f=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]])}return i}(t,["scroll","smooth","timeout","elementId"]);return r.createElement(e,o({},u,f,{onClick:function(e){var i;d(),s=t.elementId?"#"+t.elementId:h,t.onClick&&t.onClick(e),""===s||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(c=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},i=t.timeout,window.setTimeout((function(){!1===p()&&(null===a&&(a=new MutationObserver(p)),a.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout((function(){d()}),i||1e4))}),0))},ref:i}),t.children)}))}var f=u(n.N_);u(n.k2)},4182:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});const r={'code[class*="language-"]':{color:"white",background:"none",textShadow:"0 -.1em .2em black",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"white",background:"hsl(30, 20%, 25%)",textShadow:"0 -.1em .2em black",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",border:".3em solid hsl(30, 20%, 40%)",borderRadius:".5em",boxShadow:"1px 1px .5em black inset"},':not(pre) > code[class*="language-"]':{background:"hsl(30, 20%, 25%)",padding:".15em .2em .05em",borderRadius:".3em",border:".13em solid hsl(30, 20%, 40%)",boxShadow:"1px 1px .3em -.1em black inset",whiteSpace:"normal"},comment:{color:"hsl(30, 20%, 50%)"},prolog:{color:"hsl(30, 20%, 50%)"},doctype:{color:"hsl(30, 20%, 50%)"},cdata:{color:"hsl(30, 20%, 50%)"},punctuation:{Opacity:".7"},namespace:{Opacity:".7"},property:{color:"hsl(350, 40%, 70%)"},tag:{color:"hsl(350, 40%, 70%)"},boolean:{color:"hsl(350, 40%, 70%)"},number:{color:"hsl(350, 40%, 70%)"},constant:{color:"hsl(350, 40%, 70%)"},symbol:{color:"hsl(350, 40%, 70%)"},selector:{color:"hsl(75, 70%, 60%)"},"attr-name":{color:"hsl(75, 70%, 60%)"},string:{color:"hsl(75, 70%, 60%)"},char:{color:"hsl(75, 70%, 60%)"},builtin:{color:"hsl(75, 70%, 60%)"},inserted:{color:"hsl(75, 70%, 60%)"},operator:{color:"hsl(40, 90%, 60%)"},entity:{color:"hsl(40, 90%, 60%)",cursor:"help"},url:{color:"hsl(40, 90%, 60%)"},".language-css .token.string":{color:"hsl(40, 90%, 60%)"},".style .token.string":{color:"hsl(40, 90%, 60%)"},variable:{color:"hsl(40, 90%, 60%)"},atrule:{color:"hsl(350, 40%, 70%)"},"attr-value":{color:"hsl(350, 40%, 70%)"},keyword:{color:"hsl(350, 40%, 70%)"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},deleted:{color:"red"}}},6489:(e,t,i)=>{"use strict";i.d(t,{JQ:()=>c,Tr:()=>h}),i(4575);var r=i(6540);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},n.apply(this,arguments)}var o=r.useState,s=r.useRef,a=r.useEffect;function l(e){var t=o({}),i=t[0],r=t[1],l=s(!1),c=s();return a((function(){if(l.current){var t,i=e.attributes,o=e.css;o&&function(e){Object.keys(e).forEach((function(t){var i=e[t];i&&(t.startsWith("--")?document.documentElement.style.setProperty(t,i||"#333"):c.current.style[t]=i)}))}(o),i&&(t=i,Object.keys(t).forEach((function(e){r((function(i){var r;return n({},i,((r={})[e]=t[e],r))}))})))}}),[e]),a((function(){if(l.current){var t,i=e.methods;i&&(t=i,Object.keys(t).forEach((function(e){c.current.addEventListener(e,t[e])})))}}),[e]),a((function(){setTimeout((function(){var e;(null===(e=c.current)||void 0===e?void 0:e.requestUpdate)&&c.current.requestUpdate()}),0)})),a((function(){Object.keys(i).forEach((function(e){c.current[e]=i[e]}))}),[i]),a((function(){c.current.addEventListener("input",(function(e){r((function(t){return n({},t,{value:e.target.value})}))}))}),[]),function(e){c.current=e,l.current=!0}}var c=function(e){var t=e.checked,i=void 0!==t&&t,n=e.color,o=void 0===n?"currentColor":n,s=e.disabled,a=void 0!==s&&s,c=e.onChange,d=e.className,h=e.style,p=l((0,r.useMemo)((function(){return{attributes:{disabled:a,checked:i},methods:{change:c},css:{"--wired-checkbox-icon-color":o}}}),[i,a,o,c]));return(0,r.createElement)("wired-checkbox",{class:d,style:h,ref:p})},d=r.useMemo,h=function(e){var t=e.elevation,i=void 0===t?1:t,n=e.src,o=void 0===n?"http://placekitten.com/200/300":n,s=e.className,a=e.style,c=l(d((function(){return{attributes:{src:o,elevation:i}}}),[i,o]));return(0,r.createElement)("wired-image",{class:s,style:a,ref:c})}},4575:(e,t)=>{"use strict";const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,s=new RegExp(`${n}|${o}`);class a{constructor(e,t){this.parts=[],this.element=t;const i=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let a=0,c=-1,p=0;const{strings:u,values:{length:f}}=e;for(;p<f;){const e=o.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let r=0;for(let e=0;e<i;e++)l(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=u[p],i=h.exec(t)[2],r=i.toLowerCase()+"$lit$",n=e.getAttribute(r);e.removeAttribute(r);const o=n.split(s);this.parts.push({type:"attribute",index:c,name:i,strings:o}),p+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const r=e.parentNode,n=t.split(s),o=n.length-1;for(let t=0;t<o;t++){let i,o=n[t];if(""===o)i=d();else{const e=h.exec(o);null!==e&&l(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-5)+e[3]),i=document.createTextNode(o)}r.insertBefore(i,e),this.parts.push({type:"node",index:++c})}""===n[o]?(r.insertBefore(d(),e),i.push(e)):e.data=n[o],p+=o}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&c!==a||(c++,t.insertBefore(d(),e)),a=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(i.push(e),c--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),p++}}else o.currentNode=r.pop()}for(const e of i)e.parentNode.removeChild(e)}}const l=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},c=e=>-1!==e.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:i},parts:r}=e,n=document.createTreeWalker(i,133,null,!1);let o=f(r),s=r[o],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,o=f(r,o),s=r[o]}c.forEach((e=>e.parentNode.removeChild(e)))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},f=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(c(t))return i}return-1},y=new WeakMap,g=e=>"function"==typeof e&&y.has(e),m={},b={};class v{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,s=0,a=0,l=n.nextNode();for(;s<r.length;)if(o=r[s],c(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}const w=` ${n} `;class x{constructor(e,t,i,r){this.strings=e,this.values=t,this.type=i,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let r=0;r<e;r++){const e=this.strings[r],s=e.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===e.indexOf("--\x3e",s+1);const a=h.exec(e);t+=null===a?e+(i?w:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const P=e=>null===e||!("object"==typeof e||"function"==typeof e),O=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let r=0;r<t;r++){i+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(P(e)||!O(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===m||P(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=m,e(this)}this.value!==m&&this.committer.commit()}}class E{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}const e=this.__pendingValue;e!==m&&(P(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):O(e)?this.__commitIterable(e):e===b?(this.value=b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const i=new v(t,e.processor,this.options),r=i._clone();i.update(e.values),this.__commitNode(r),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,r=0;for(const n of e)i=t[r],void 0===i&&(i=new E(this.options),t.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(t[r-1])),i.setValue(n),i.commit(),r++;r<t.length&&(t.length=r,this.clear(i&&i.endNode))}clear(e=this.startNode){r(this.startNode.parentNode,e.nextSibling,this.endNode)}}class R{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=m}}class j extends S{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends k{}let _=!1;(()=>{try{const e={get capture(){return _=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class M{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=L(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=m}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const L=e=>e&&(_?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function T(e){let t=I.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},I.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(n);return i=t.keyString.get(r),void 0===i&&(i=new a(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}const I=new Map,A=new WeakMap,z=new class{handleAttributeExpressions(e,t,i,r){const n=t[0];return"."===n?new j(e,t.slice(1),i).parts:"@"===n?[new M(e,t.slice(1),r.eventContext)]:"?"===n?[new R(e,t.slice(1),i)]:new S(e,t,i).parts}handleTextExpression(e){return new E(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const D=(e,...t)=>new x(e,t,"html",z),N=(e,t)=>`${e}--${t}`;let $=!0;void 0===window.ShadyCSS?$=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),$=!1);const B=e=>t=>{const i=N(t.type,e);let r=I.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},I.set(i,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(n);if(o=r.keyString.get(s),void 0===o){const i=t.getTemplateElement();$&&window.ShadyCSS.prepareTemplateDom(i,e),o=new a(t,i),r.keyString.set(s,o)}return r.stringsArray.set(t.strings,o),o},U=["html","svg"],V=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const H={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:F};class q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const r=this._attributeNameForProperty(i,t);void 0!==r&&(this._attributeToPropertyMap.set(r,i),e.push(r))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this._requestUpdate(e,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=F){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,r=t.converter||H,n="function"==typeof r?r:r.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,r=t.converter;return(r&&r.toAttribute||H.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=W){const r=this.constructor,n=r._attributeNameForProperty(e,i);if(void 0!==n){const e=r._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(e);if(void 0!==r){const e=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const r=this.constructor,n=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}q.finalized=!0;const Y=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),X=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function K(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):X(e,t)}function J(e){return(t,i)=>{const r={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?G(r,t,i):Q(r,t)}}const G=(e,t,i)=>{Object.defineProperty(t,i,e)},Q=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ie=(e,...t)=>{const i=t.reduce(((t,i,r)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[r+1]),e[0]);return new te(i,ee)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const re={};class ne extends q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),r=[];i.forEach((e=>r.unshift(e))),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map((e=>e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==re&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return re}}ne.finalized=!0,ne.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=A.has(t),s=$&&11===t.nodeType&&!!t.host,a=s&&!V.has(n),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let n=A.get(t);void 0===n&&(r(t,t.firstChild),A.set(t,n=new E(Object.assign({templateFactory:T},i))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:B(n)},i)),a){const e=A.get(l);A.delete(l),((e,t,i)=>{V.add(e);const r=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=n[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{U.forEach((t=>{const i=I.get(N(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),p(e,i)}))}))})(e);const a=r.content;i?function(e,t,i=null){const{element:{content:r},parts:n}=e;if(null==i)return void r.appendChild(t);const o=document.createTreeWalker(r,133,null,!1);let s=f(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(a=u(t),i.parentNode.insertBefore(t,i));-1!==s&&n[s].index===l;){if(a>0){for(;-1!==s;)n[s].index+=a,s=f(n,s);return}s=f(n,s)}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),p(i,e)}})(n,l,e.value instanceof v?e.value.template:void 0),r(t,t.firstChild),t.appendChild(l),A.set(t,e)}!o&&s&&window.ShadyCSS.styleElement(t.host)};const oe=ie`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class se extends ne{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",""+t[0]),this.svg.setAttribute("height",""+t[1]),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}}function ae(e,t,i,r=!0,n=!0){if(t){const o={bubbles:"boolean"!=typeof r||r,composed:"boolean"!=typeof n||n};i&&(o.detail=i),e.dispatchEvent(new CustomEvent(t,o))}}function le(){return Math.floor(Math.random()*2**31)}function ce(e,t,i){if(e&&e.length){const[r,n]=t,o=Math.PI/180*i,s=Math.cos(o),a=Math.sin(o);e.forEach((e=>{const[t,i]=e;e[0]=(t-r)*s-(i-n)*a+r,e[1]=(t-r)*a+(i-n)*s+n}))}}function de(e){const t=e[0],i=e[1];return Math.sqrt(Math.pow(t[0]-i[0],2)+Math.pow(t[1]-i[1],2))}function he(e,t,i,r){const n=t[1]-e[1],o=e[0]-t[0],s=n*e[0]+o*e[1],a=r[1]-i[1],l=i[0]-r[0],c=a*i[0]+l*i[1],d=n*l-a*o;return d?[(l*s-o*c)/d,(n*c-a*s)/d]:null}function pe(e,t,i){const r=e.length;if(r<3)return!1;const n=[Number.MAX_SAFE_INTEGER,i],o=[t,i];let s=0;for(let t=0;t<r;t++){const i=e[t],a=e[(t+1)%r];if(ye(i,a,o,n)){if(0===fe(i,o,a))return ue(i,o,a);s++}}return s%2==1}function ue(e,t,i){return t[0]<=Math.max(e[0],i[0])&&t[0]>=Math.min(e[0],i[0])&&t[1]<=Math.max(e[1],i[1])&&t[1]>=Math.min(e[1],i[1])}function fe(e,t,i){const r=(t[1]-e[1])*(i[0]-t[0])-(t[0]-e[0])*(i[1]-t[1]);return 0===r?0:r>0?1:2}function ye(e,t,i,r){const n=fe(e,t,i),o=fe(e,t,r),s=fe(i,r,e),a=fe(i,r,t);return n!==o&&s!==a||!(0!==n||!ue(e,i,t))||!(0!==o||!ue(e,r,t))||!(0!==s||!ue(i,e,r))||!(0!==a||!ue(i,t,r))}!function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);o>3&&s&&Object.defineProperty(t,i,s)}([J("svg"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata("design:type",t)}(0,SVGSVGElement)],se.prototype,"svg",void 0);class ge extends class{constructor(e){this.helper=e}fillPolygon(e,t){return this._fillPolygon(e,t)}_fillPolygon(e,t,i=!1){let r=function(e,t){const i=[0,0],r=Math.round(t.hachureAngle+90);r&&ce(e,i,r);const n=function(e,t){const i=[...e];i[0].join(",")!==i[i.length-1].join(",")&&i.push([i[0][0],i[0][1]]);const r=[];if(i&&i.length>2){let e=t.hachureGap;e<0&&(e=4*t.strokeWidth),e=Math.max(e,.1);const n=[];for(let e=0;e<i.length-1;e++){const t=i[e],r=i[e+1];if(t[1]!==r[1]){const e=Math.min(t[1],r[1]);n.push({ymin:e,ymax:Math.max(t[1],r[1]),x:e===t[1]?t[0]:r[0],islope:(r[0]-t[0])/(r[1]-t[1])})}}if(n.sort(((e,t)=>e.ymin<t.ymin?-1:e.ymin>t.ymin?1:e.x<t.x?-1:e.x>t.x?1:e.ymax===t.ymax?0:(e.ymax-t.ymax)/Math.abs(e.ymax-t.ymax))),!n.length)return r;let o=[],s=n[0].ymin;for(;o.length||n.length;){if(n.length){let e=-1;for(let t=0;t<n.length&&!(n[t].ymin>s);t++)e=t;n.splice(0,e+1).forEach((e=>{o.push({s,edge:e})}))}if(o=o.filter((e=>!(e.edge.ymax<=s))),o.sort(((e,t)=>e.edge.x===t.edge.x?0:(e.edge.x-t.edge.x)/Math.abs(e.edge.x-t.edge.x))),o.length>1)for(let e=0;e<o.length;e+=2){const t=e+1;if(t>=o.length)break;const i=o[e].edge,n=o[t].edge;r.push([[Math.round(i.x),s],[Math.round(n.x),s]])}s+=e,o.forEach((t=>{t.edge.x=t.edge.x+e*t.edge.islope}))}}return r}(e,t);return r&&(ce(e,i,-r),function(e,t,i){const r=[];e.forEach((e=>r.push(...e))),ce(r,t,i)}(n,i,-r)),n}(e,t);if(i){const t=this.connectingLines(e,r);r=r.concat(t)}return{type:"fillSketch",ops:this.renderLines(r,t)}}renderLines(e,t){const i=[];for(const r of e)i.push(...this.helper.doubleLineOps(r[0][0],r[0][1],r[1][0],r[1][1],t));return i}connectingLines(e,t){const i=[];if(t.length>1)for(let r=1;r<t.length;r++){const n=t[r-1];if(de(n)<3)continue;const o=[t[r][0],n[1]];if(de(o)>3){const t=this.splitOnIntersections(e,o);i.push(...t)}}return i}midPointInPolygon(e,t){return pe(e,(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2)}splitOnIntersections(e,t){const i=Math.max(5,.1*de(t)),r=[];for(let n=0;n<e.length;n++){const o=e[n],s=e[(n+1)%e.length];if(ye(o,s,...t)){const e=he(o,s,t[0],t[1]);if(e){const n=de([e,t[0]]),o=de([e,t[1]]);n>i&&o>i&&r.push({point:e,distance:n})}}}if(r.length>1){const i=r.sort(((e,t)=>e.distance-t.distance)).map((e=>e.point));if(pe(e,...t[0])||i.shift(),pe(e,...t[1])||i.pop(),i.length<=1)return this.midPointInPolygon(e,t)?[t]:[];const n=[t[0],...i,t[1]],o=[];for(let t=0;t<n.length-1;t+=2){const i=[n[t],n[t+1]];this.midPointInPolygon(e,i)&&o.push(i)}return o}return this.midPointInPolygon(e,t)?[t]:[]}}{fillPolygon(e,t){return this._fillPolygon(e,t,!0)}}class me{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function be(e,t,i,r,n){return{type:"path",ops:ke(e,t,i,r,n)}}function ve(e,t){return function(e,t,i){const r=(e||[]).length;if(r>2){const t=[];for(let n=0;n<r-1;n++)t.push(...ke(e[n][0],e[n][1],e[n+1][0],e[n+1][1],i));return t.push(...ke(e[r-1][0],e[r-1][1],e[0][0],e[0][1],i)),{type:"path",ops:t}}return 2===r?be(e[0][0],e[0][1],e[1][0],e[1][1],i):{type:"path",ops:[]}}(e,0,t)}function we(e,t,i,r,n){return function(e,t,i,r){const[n,o]=je(r.increment,e,t,r.rx,r.ry,1,r.increment*Oe(.1,Oe(.4,1,i),i),i);let s=Re(n,null,i);if(!i.disableMultiStroke){const[n]=je(r.increment,e,t,r.rx,r.ry,1.5,0,i),o=Re(n,null,i);s=s.concat(o)}return{estimatedPoints:o,opset:{type:"path",ops:s}}}(e,t,n,xe(i,r,n)).opset}function xe(e,t,i){const r=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(e/2,2)+Math.pow(t/2,2))/2)),n=Math.max(i.curveStepCount,i.curveStepCount/Math.sqrt(200)*r),o=2*Math.PI/n;let s=Math.abs(e/2),a=Math.abs(t/2);const l=1-i.curveFitting;return s+=Se(s*l,i),a+=Se(a*l,i),{increment:o,rx:s,ry:a}}function Pe(e){return e.randomizer||(e.randomizer=new me(e.seed||0)),e.randomizer.next()}function Oe(e,t,i,r=1){return i.roughness*r*(Pe(i)*(t-e)+e)}function Se(e,t,i=1){return Oe(-e,e,t,i)}function ke(e,t,i,r,n,o=!1){const s=o?n.disableMultiStrokeFill:n.disableMultiStroke,a=Ee(e,t,i,r,n,!0,!1);if(s)return a;const l=Ee(e,t,i,r,n,!0,!0);return a.concat(l)}function Ee(e,t,i,r,n,o,s){const a=Math.pow(e-i,2)+Math.pow(t-r,2),l=Math.sqrt(a);let c=1;c=l<200?1:l>500?.4:-.0016668*l+1.233334;let d=n.maxRandomnessOffset||0;d*d*100>a&&(d=l/10);const h=d/2,p=.2+.2*Pe(n);let u=n.bowing*n.maxRandomnessOffset*(r-t)/200,f=n.bowing*n.maxRandomnessOffset*(e-i)/200;u=Se(u,n,c),f=Se(f,n,c);const y=[],g=()=>Se(h,n,c),m=()=>Se(d,n,c);return o&&(s?y.push({op:"move",data:[e+g(),t+g()]}):y.push({op:"move",data:[e+Se(d,n,c),t+Se(d,n,c)]})),s?y.push({op:"bcurveTo",data:[u+e+(i-e)*p+g(),f+t+(r-t)*p+g(),u+e+2*(i-e)*p+g(),f+t+2*(r-t)*p+g(),i+g(),r+g()]}):y.push({op:"bcurveTo",data:[u+e+(i-e)*p+m(),f+t+(r-t)*p+m(),u+e+2*(i-e)*p+m(),f+t+2*(r-t)*p+m(),i+m(),r+m()]}),y}function Re(e,t,i){const r=e.length,n=[];if(r>3){const o=[],s=1-i.curveTightness;n.push({op:"move",data:[e[1][0],e[1][1]]});for(let t=1;t+2<r;t++){const i=e[t];o[0]=[i[0],i[1]],o[1]=[i[0]+(s*e[t+1][0]-s*e[t-1][0])/6,i[1]+(s*e[t+1][1]-s*e[t-1][1])/6],o[2]=[e[t+1][0]+(s*e[t][0]-s*e[t+2][0])/6,e[t+1][1]+(s*e[t][1]-s*e[t+2][1])/6],o[3]=[e[t+1][0],e[t+1][1]],n.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(t&&2===t.length){const e=i.maxRandomnessOffset;n.push({op:"lineTo",data:[t[0]+Se(e,i),t[1]+Se(e,i)]})}}else 3===r?(n.push({op:"move",data:[e[1][0],e[1][1]]}),n.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):2===r&&n.push(...ke(e[0][0],e[0][1],e[1][0],e[1][1],i));return n}function je(e,t,i,r,n,o,s,a){const l=[],c=[],d=Se(.5,a)-Math.PI/2;c.push([Se(o,a)+t+.9*r*Math.cos(d-e),Se(o,a)+i+.9*n*Math.sin(d-e)]);for(let s=d;s<2*Math.PI+d-.01;s+=e){const e=[Se(o,a)+t+r*Math.cos(s),Se(o,a)+i+n*Math.sin(s)];l.push(e),c.push(e)}return c.push([Se(o,a)+t+r*Math.cos(d+2*Math.PI+.5*s),Se(o,a)+i+n*Math.sin(d+2*Math.PI+.5*s)]),c.push([Se(o,a)+t+.98*r*Math.cos(d+s),Se(o,a)+i+.98*n*Math.sin(d+s)]),c.push([Se(o,a)+t+.9*r*Math.cos(d+.5*s),Se(o,a)+i+.9*n*Math.sin(d+.5*s)]),[c,l]}const Ce={randOffset:(e,t)=>e,randOffsetWithRange:(e,t,i)=>(e+t)/2,ellipse:(e,t,i,r,n)=>we(e,t,i,r,n),doubleLineOps:(e,t,i,r,n)=>function(e,t,i,r,n){return ke(e,t,i,r,n,!0)}(e,t,i,r,n)};function _e(e){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:e}}function Me(e,t){let i="";for(const r of e.ops){const e=r.data;switch(r.op){case"move":if(t&&i)break;i+=`M${e[0]} ${e[1]} `;break;case"bcurveTo":i+=`C${e[0]} ${e[1]}, ${e[2]} ${e[3]}, ${e[4]} ${e[5]} `;break;case"lineTo":i+=`L${e[0]} ${e[1]} `}}return i.trim()}function Le(e,t){const i=document.createElementNS("http://www.w3.org/2000/svg",e);if(t)for(const e in t)i.setAttributeNS(null,e,t[e]);return i}function Te(e,t,i=!1){const r=Le("path",{d:Me(e,i)});return t&&t.appendChild(r),r}function Ie(e,t,i,r,n,o){return Te(function(e,t,i,r,n){return ve([[e,t],[e+i,t],[e+i,t+r],[e,t+r]],n)}(t+2,i+2,r-4,n-4,_e(o)),e)}function Ae(e,t,i,r,n,o){return Te(be(t,i,r,n,_e(o)),e)}function ze(e,t,i,r,n,o){return Te(we(t,i,r=Math.max(r>10?r-4:r-1,1),n=Math.max(n>10?n-4:n-1,1),_e(o)),e)}function De(e,t){return Te(new ge(Ce).fillPolygon(e,_e(t)),null)}function Ne(e,t,i,r,n){const o=xe(i,r,_e(n)),s=[];let a=0;for(;a<=2*Math.PI;)s.push([e+o.rx*Math.cos(a),t+o.ry*Math.sin(a)]),a+=o.increment;return De(s,n)}var $e=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},Be=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.EJ=class extends se{constructor(){super(),this.elevation=1,this.disabled=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender(!0)})))}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return D`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}return this.lastSize}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),r={width:t[0]-2*(i-1),height:t[1]-2*(i-1)};Ie(e,0,0,r.width,r.height,this.seed);for(let t=1;t<i;t++)Ae(e,2*t,r.height+2*t,r.width+2*t,r.height+2*t,this.seed).style.opacity=""+(75-10*t)/100,Ae(e,r.width+2*t,r.height+2*t,r.width+2*t,2*t,this.seed).style.opacity=""+(75-10*t)/100,Ae(e,2*t,r.height+2*t,r.width+2*t,r.height+2*t,this.seed).style.opacity=""+(75-10*t)/100,Ae(e,r.width+2*t,r.height+2*t,r.width+2*t,2*t,this.seed).style.opacity=""+(75-10*t)/100}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.resizeObserver&&this.resizeObserver.observe&&this.resizeObserver.observe(this.button)}detachResizeListener(){this.button&&this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this.button)}},$e([K({type:Number}),Be("design:type",Object)],t.EJ.prototype,"elevation",void 0),$e([K({type:Boolean,reflect:!0}),Be("design:type",Object)],t.EJ.prototype,"disabled",void 0),$e([J("button"),Be("design:type",HTMLButtonElement)],t.EJ.prototype,"button",void 0),t.EJ=$e([Y("wired-button"),Be("design:paramtypes",[])],t.EJ);var Ue=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},Ve=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.oG=class extends ne{constructor(){super(...arguments),this.elevation=3,this.disabled=!1,this.initials=!1,this.format=e=>this.months_short[e.getMonth()]+" "+e.getDate()+", "+e.getFullYear(),this.weekdays_short=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.months_short=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.firstOfMonthDate=new Date,this.fDate=void 0,this.lDate=void 0,this.calendarRefSize={width:0,height:0},this.tblColWidth=0,this.tblRowHeight=0,this.tblHeadHeight=0,this.monthYear="",this.weeks=[[]],this.seed=le()}connectedCallback(){super.connectedCallback(),this.resizeHandler||(this.resizeHandler=this.debounce(this.resized.bind(this),200,!1,this),window.addEventListener("resize",this.resizeHandler,{passive:!0})),this.localizeCalendarHeaders(),this.setInitialConditions(),this.computeCalendar(),this.refreshSelection(),setTimeout((()=>this.updated()))}disconnectedCallback(){super.disconnectedCallback(),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),delete this.resizeHandler)}static get styles(){return ie`
    :host {
      display: inline-block;
      font-family: inherit;
      position: relative;
      outline: none;
      opacity: 0;
    }

    :host(.wired-disabled) {
      opacity: 0.5 !important;
      cursor: default;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.02);
    }

    :host(.wired-rendered) {
      opacity: 1;
    }

    :host(:focus) path {
      stroke-width: 1.5;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

    svg {
      display: block;
    }

    .calendar path {
      stroke: var(--wired-calendar-color, black);
      stroke-width: 0.7;
      fill: transparent;
    }

    .selected path {
      stroke: var(--wired-calendar-selected-color, red);
      stroke-width: 2.5;
      fill: transparent;
      transition: transform 0.05s ease;
    }

    table {
      position: relative;
      background: var(--wired-calendar-bg, white);
      border-collapse: collapse;
      font-size: inherit;
      text-transform: capitalize;
      line-height: unset;
      cursor: default;
      overflow: hidden;
    }

    table:focus {
      outline: none !important;
    }

    td,
    th {
      border-radius: 4px;
      text-align: center;
    }

    td.disabled {
      color: var(--wired-calendar-disabled-color, lightgray);
      cursor: not-allowed;
    }

    td.dimmed {
      color: var(--wired-calendar-dimmed-color, gray);
    }

    td.selected {
      position: absolute;
    }

    td:not(.disabled):not(.selected):hover {
      background-color: #d0d0d0;
      cursor: pointer;
    }

    .pointer {
      cursor: pointer;
    }

    `}render(){return D`
    <table style="width:${this.calendarRefSize.width}px;height:${this.calendarRefSize.height}px;border:${8}px solid transparent"
            @mousedown="${this.onItemClick}"
            @touchstart="${this.onItemClick}">
      ${""}
      <tr class="top-header" style="height:${this.tblHeadHeight}px;">
        <th id="prevCal" class="pointer" @click="${this.onPrevClick}">&lt;&lt;</th>
        <th colSpan="5">${this.monthYear}</th>
        <th id="nextCal" class="pointer" @click="${this.onNextClick}">&gt;&gt;</th>
      </tr>
      ${""}
      <tr class="header" style="height:${this.tblHeadHeight}px;">
        ${this.weekdays_short.map((e=>D`<th style="width: ${this.tblColWidth};">${this.initials?e[0]:e}</th>
            `))}
      </tr>
      ${""}
      ${this.weeks.map((e=>D`<tr style="height:${this.tblRowHeight}px;">
              ${""}
              ${e.map((e=>D`${e.selected?D`
                            <td class="selected" value="${e.value}">
                            <div style="width: ${this.tblColWidth}px; line-height:${this.tblRowHeight}px;">${e.text}</div>
                            <div class="overlay">
                              <svg id="svgTD" class="selected"></svg>
                            </div></td>
                        `:D`
                            <td .className="${e.disabled?"disabled":e.dimmed?"dimmed":""}"
                                value="${e.disabled?"":e.value}">${e.text}</td>
                        `}
                    `))}${""}
            </tr>`))}${""}
    </table>
    <div class="overlay">
      <svg id="svg" class="calendar"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","dialog")}updated(e){e&&e instanceof Map&&(e.has("disabled")&&this.refreshDisabledState(),e.has("selected")&&this.refreshSelection());const t=this.shadowRoot.getElementById("svg");for(;t.hasChildNodes();)t.removeChild(t.lastChild);const i=this.getCalendarSize(),r=Math.min(Math.max(1,this.elevation),5),n=i.width+2*(r-1),o=i.height+2*(r-1);t.setAttribute("width",""+n),t.setAttribute("height",""+o),Ie(t,2,2,i.width-4,i.height-4,this.seed);for(let e=1;e<r;e++)Ae(t,2*e,i.height-4+2*e,i.width-4+2*e,i.height-4+2*e,this.seed).style.opacity=""+(85-10*e)/100,Ae(t,i.width-4+2*e,i.height-4+2*e,i.width-4+2*e,2*e,this.seed).style.opacity=""+(85-10*e)/100,Ae(t,2*e,i.height-4+2*e,i.width-4+2*e,i.height-4+2*e,this.seed).style.opacity=""+(85-10*e)/100,Ae(t,i.width-4+2*e,i.height-4+2*e,i.width-4+2*e,2*e,this.seed).style.opacity=""+(85-10*e)/100;const s=this.shadowRoot.getElementById("svgTD");if(s){for(;s.hasChildNodes();)s.removeChild(s.lastChild);const e=Math.max(1*this.tblColWidth,20),t=Math.max(.9*this.tblRowHeight,18),i=ze(s,this.tblColWidth/2,this.tblRowHeight/2,e,t,this.seed);s.appendChild(i)}this.classList.add("wired-rendered")}setSelectedDate(e){if(this.selected=e,this.selected){const e=new Date(this.selected);this.firstOfMonthDate=new Date(e.getFullYear(),e.getMonth(),1),this.computeCalendar(),this.requestUpdate(),this.fireSelected()}}localizeCalendarHeaders(){if(!this.locale){const e=navigator;e.hasOwnProperty("systemLanguage")?this.locale=e.systemLanguage:e.hasOwnProperty("browserLanguage")?this.locale=e.browserLanguage:this.locale=(navigator.languages||["en"])[0]}const e=(this.locale||"").toLowerCase();if("en-us"!==e&&"en"!==e){const e=new Date,t=e.getUTCDay(),i=new Date(e.getTime()-864e5*t);for(let e=0;e<7;e++){const t=new Date(i);t.setDate(i.getDate()+e),this.weekdays_short[e]=t.toLocaleString(this.locale,{weekday:"short"})}e.setDate(1);for(let t=0;t<12;t++)e.setMonth(t),this.months[t]=e.toLocaleString(this.locale,{month:"long"})}}setInitialConditions(){let e;this.calendarRefSize=this.getCalendarSize(),this.selected?(e=new Date(this.selected),this.value={date:new Date(this.selected),text:this.selected}):e=new Date,this.firstOfMonthDate=new Date(e.getFullYear(),e.getMonth(),1),this.firstdate&&(this.fDate=new Date(this.firstdate)),this.lastdate&&(this.lDate=new Date(this.lastdate))}refreshSelection(){this.weeks.forEach((e=>e.forEach((e=>{e.selected=this.selected&&e.value===this.selected||!1})))),this.requestUpdate()}resized(){this.calendarRefSize=this.getCalendarSize(),this.computeCalendar(),this.refreshSelection()}getCalendarSize(){const e=this.getBoundingClientRect();return{width:e.width>180?e.width:320,height:e.height>180?e.height:320}}computeCellsizes(e,t){this.tblColWidth=e.width/7-2,this.tblHeadHeight=.25*e.height/2-2,this.tblRowHeight=.75*e.height/t-2}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}onItemClick(e){e.stopPropagation();const t=e.target;t&&t.hasAttribute("value")&&""!==t.getAttribute("value")&&(this.selected=t.getAttribute("value")||void 0,this.refreshSelection(),this.fireSelected())}fireSelected(){this.selected&&(this.value={date:new Date(this.selected),text:this.selected},ae(this,"selected",{selected:this.selected}))}computeCalendar(){this.monthYear=this.months[this.firstOfMonthDate.getMonth()]+" "+this.firstOfMonthDate.getFullYear();const e=new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth(),1);let t=0-e.getDay();const i=Math.ceil((new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()+1,0).getDate()-t)/7);this.weeks=[];for(let r=0;r<i;r++){this.weeks[r]=[];for(let i=0;i<7;i++){const n=new Date(e.getTime()+864e5*t),o=this.format(n);this.weeks[r][i]={value:o,text:n.getDate().toString(),selected:o===this.selected,dimmed:n.getMonth()!==e.getMonth(),disabled:this.isDateOutOfRange(n)},t++}}this.computeCellsizes(this.calendarRefSize,i)}onPrevClick(){void 0!==this.fDate&&new Date(this.fDate.getFullYear(),this.fDate.getMonth()-1,1).getMonth()===new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()-1,1).getMonth()||(this.firstOfMonthDate=new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()-1,1),this.computeCalendar(),this.refreshSelection())}onNextClick(){void 0!==this.lDate&&new Date(this.lDate.getFullYear(),this.lDate.getMonth()+1,1).getMonth()===new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()+1,1).getMonth()||(this.firstOfMonthDate=new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()+1,1),this.computeCalendar(),this.refreshSelection())}isDateOutOfRange(e){return this.fDate&&this.lDate?e<this.fDate||this.lDate<e:this.fDate?e<this.fDate:!!this.lDate&&this.lDate<e}debounce(e,t,i,r){let n=0;return()=>{const o=arguments,s=i&&!n;clearTimeout(n),n=window.setTimeout((()=>{n=0,i||e.apply(r,o)}),t),s&&e.apply(r,o)}}},Ue([K({type:Number}),Ve("design:type",Object)],t.oG.prototype,"elevation",void 0),Ue([K({type:String}),Ve("design:type",String)],t.oG.prototype,"selected",void 0),Ue([K({type:String}),Ve("design:type",String)],t.oG.prototype,"firstdate",void 0),Ue([K({type:String}),Ve("design:type",String)],t.oG.prototype,"lastdate",void 0),Ue([K({type:String}),Ve("design:type",String)],t.oG.prototype,"locale",void 0),Ue([K({type:Boolean,reflect:!0}),Ve("design:type",Object)],t.oG.prototype,"disabled",void 0),Ue([K({type:Boolean,reflect:!0}),Ve("design:type",Object)],t.oG.prototype,"initials",void 0),Ue([K({type:Object}),Ve("design:type",Object)],t.oG.prototype,"value",void 0),Ue([K({type:Function}),Ve("design:type",Function)],t.oG.prototype,"format",void 0),t.oG=Ue([Y("wired-calendar")],t.oG);var He=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},Fe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.g8=class extends se{constructor(){super(),this.elevation=1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return D`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),r=t[0]-2*(i-1),n=t[1]-2*(i-1);if(this.fill&&this.fill.trim()){const t=De([[2,2],[r-4,2],[r-2,n-4],[2,n-4]],this.seed);t.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(t)}Ie(e,2,2,r-4,n-4,this.seed);for(let t=1;t<i;t++)Ae(e,2*t,n-4+2*t,r-4+2*t,n-4+2*t,this.seed).style.opacity=""+(85-10*t)/100,Ae(e,r-4+2*t,n-4+2*t,r-4+2*t,2*t,this.seed).style.opacity=""+(85-10*t)/100,Ae(e,2*t,n-4+2*t,r-4+2*t,n-4+2*t,this.seed).style.opacity=""+(85-10*t)/100,Ae(e,r-4+2*t,n-4+2*t,r-4+2*t,2*t,this.seed).style.opacity=""+(85-10*t)/100}},He([K({type:Number}),Fe("design:type",Object)],t.g8.prototype,"elevation",void 0),He([K({type:String}),Fe("design:type",String)],t.g8.prototype,"fill",void 0),t.g8=He([Y("wired-card"),Fe("design:paramtypes",[])],t.g8);var We=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},qe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.TB=class extends se{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[oe,ie`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return D`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),ae(this,"change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){Ie(e,0,0,t[0],t[1],this.seed),this.svgCheck=Le("g"),e.appendChild(this.svgCheck),Ae(this.svgCheck,.3*t[0],.4*t[1],.5*t[0],.7*t[1],this.seed),Ae(this.svgCheck,.5*t[0],.7*t[1],t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}},We([K({type:Boolean}),qe("design:type",Object)],t.TB.prototype,"checked",void 0),We([K({type:Boolean,reflect:!0}),qe("design:type",Object)],t.TB.prototype,"disabled",void 0),We([K(),qe("design:type",Object)],t.TB.prototype,"focused",void 0),We([J("input"),qe("design:type",HTMLInputElement)],t.TB.prototype,"input",void 0),t.TB=We([Y("wired-checkbox")],t.TB);var Ye=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},Xe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.oq=class extends ne{constructor(){super(...arguments),this.disabled=!1,this.seed=le(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return ie`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return D`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",(()=>{this.cardShowing&&this.setCardShowing(!1)})),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0)}}))}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const i=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",""+i.width),t.setAttribute("height",""+i.height);const r=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=r.height+"px",Ie(t,0,0,r.width,r.height,this.seed);const n=r.width-4;Ie(t,n,0,34,r.height,this.seed);const o=Math.max(0,Math.abs((r.height-24)/2)),s=function(e,t,i){return Te(ve(t,_e(i)),e,!0)}(t,[[n+8,5+o],[n+26,5+o],[n+17,o+Math.min(r.height,18)]],this.seed);if(s.style.fill="currentColor",s.style.pointerEvents=this.disabled?"none":"auto",s.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",""+this.cardShowing),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const i=e[t];"WIRED-ITEM"===i.tagName&&(i.setAttribute("role","option"),this.itemNodes.push(i))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let i=0;i<e.length;i++){const r=e[i];if("WIRED-ITEM"===r.tagName){const e=r.value||r.getAttribute("value")||"";if(this.selected&&e===this.selected){t=r;break}}}this.lastSelectedItem=t||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),this.value=t?{value:t.value||"",text:t.textContent||""}:void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout((()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter((e=>e.nodeType===Node.ELEMENT_NODE)).forEach((e=>{const t=e;t.requestUpdate&&t.requestUpdate()}))}),10),this.setAttribute("aria-expanded",""+this.cardShowing))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout((()=>{this.setCardShowing(!1)}))}fireSelected(){ae(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}},Ye([K({type:Object}),Xe("design:type",Object)],t.oq.prototype,"value",void 0),Ye([K({type:String,reflect:!0}),Xe("design:type",String)],t.oq.prototype,"selected",void 0),Ye([K({type:Boolean,reflect:!0}),Xe("design:type",Object)],t.oq.prototype,"disabled",void 0),Ye([J("svg"),Xe("design:type",SVGSVGElement)],t.oq.prototype,"svg",void 0),Ye([J("#card"),Xe("design:type",HTMLDivElement)],t.oq.prototype,"card",void 0),t.oq=Ye([Y("wired-combo")],t.oq);var Ke=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},Je=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.iE=class extends ne{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return ie`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `}render(){return D`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}},Ke([K({type:Number}),Je("design:type",Object)],t.iE.prototype,"elevation",void 0),Ke([K({type:Boolean,reflect:!0}),Je("design:type",Object)],t.iE.prototype,"open",void 0),Ke([J("wired-card"),Je("design:type",t.g8)],t.iE.prototype,"card",void 0),t.iE=Ke([Y("wired-dialog")],t.iE);var Ge=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};t.tU=class extends se{constructor(){super(...arguments),this.elevation=1}static get styles(){return[oe,ie`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return D`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,6*t]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5);for(let r=0;r<i;r++)Ae(e,0,6*r+3,t[0],6*r+3,this.seed)}},Ge([K({type:Number}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata("design:type",t)}(0,Object)],t.tU.prototype,"elevation",void 0),t.tU=Ge([Y("wired-divider")],t.tU);var Qe=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},Ze=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.lo=class extends se{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]}render(){return D`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const i=Math.min(t[0],t[1]),r=Ne(i/2,i/2,i,i,this.seed);e.appendChild(r)}},Qe([K({type:Boolean,reflect:!0}),Ze("design:type",Object)],t.lo.prototype,"disabled",void 0),Qe([J("button"),Ze("design:type",HTMLButtonElement)],t.lo.prototype,"button",void 0),t.lo=Qe([Y("wired-fab")],t.lo);var et=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},tt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.bd=class extends se{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]}render(){return D`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const i=Math.min(t[0],t[1]);e.setAttribute("width",""+i),e.setAttribute("height",""+i),ze(e,i/2,i/2,i,i,this.seed)}},et([K({type:Boolean,reflect:!0}),tt("design:type",Object)],t.bd.prototype,"disabled",void 0),et([J("button"),tt("design:type",HTMLButtonElement)],t.bd.prototype,"button",void 0),t.bd=et([Y("wired-icon-button")],t.bd);var it=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},rt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.Tr=class extends se{constructor(){super(),this.elevation=1,this.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]}render(){return D`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),r=t[0]-2*(i-1),n=t[1]-2*(i-1);Ie(e,2,2,r-4,n-4,this.seed);for(let t=1;t<i;t++)Ae(e,2*t,n-4+2*t,r-4+2*t,n-4+2*t,this.seed).style.opacity=""+(85-10*t)/100,Ae(e,r-4+2*t,n-4+2*t,r-4+2*t,2*t,this.seed).style.opacity=""+(85-10*t)/100,Ae(e,2*t,n-4+2*t,r-4+2*t,n-4+2*t,this.seed).style.opacity=""+(85-10*t)/100,Ae(e,r-4+2*t,n-4+2*t,r-4+2*t,2*t,this.seed).style.opacity=""+(85-10*t)/100}},it([K({type:Number}),rt("design:type",Object)],t.Tr.prototype,"elevation",void 0),it([K({type:String}),rt("design:type",String)],t.Tr.prototype,"src",void 0),t.Tr=it([Y("wired-image"),rt("design:paramtypes",[])],t.Tr);var nt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},ot=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.uM=class extends se{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender(!0)})))}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        input:focus + div path {
          stroke-width: 1.5;
        }
      `]}render(){return D`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;if(t)return void(t.value=e)}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ie(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),ae(this,e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.observe&&this.resizeObserver.observe(this.textInput)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this.textInput)}},nt([K({type:Boolean,reflect:!0}),ot("design:type",Object)],t.uM.prototype,"disabled",void 0),nt([K({type:String}),ot("design:type",Object)],t.uM.prototype,"placeholder",void 0),nt([K({type:String}),ot("design:type",String)],t.uM.prototype,"name",void 0),nt([K({type:String}),ot("design:type",String)],t.uM.prototype,"min",void 0),nt([K({type:String}),ot("design:type",String)],t.uM.prototype,"max",void 0),nt([K({type:String}),ot("design:type",String)],t.uM.prototype,"step",void 0),nt([K({type:String}),ot("design:type",Object)],t.uM.prototype,"type",void 0),nt([K({type:String}),ot("design:type",Object)],t.uM.prototype,"autocomplete",void 0),nt([K({type:String}),ot("design:type",Object)],t.uM.prototype,"autocapitalize",void 0),nt([K({type:String}),ot("design:type",Object)],t.uM.prototype,"autocorrect",void 0),nt([K({type:Boolean}),ot("design:type",Object)],t.uM.prototype,"required",void 0),nt([K({type:Boolean}),ot("design:type",Object)],t.uM.prototype,"autofocus",void 0),nt([K({type:Boolean}),ot("design:type",Object)],t.uM.prototype,"readonly",void 0),nt([K({type:Number}),ot("design:type",Number)],t.uM.prototype,"minlength",void 0),nt([K({type:Number}),ot("design:type",Number)],t.uM.prototype,"maxlength",void 0),nt([K({type:Number}),ot("design:type",Number)],t.uM.prototype,"size",void 0),nt([J("input"),ot("design:type",HTMLInputElement)],t.uM.prototype,"textInput",void 0),t.uM=nt([Y("wired-input"),ot("design:paramtypes",[])],t.uM);var st=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},at=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.BP=class extends se{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[oe,ie`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return D`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const i=De([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(i)}},st([K(),at("design:type",Object)],t.BP.prototype,"value",void 0),st([K(),at("design:type",Object)],t.BP.prototype,"name",void 0),st([K({type:Boolean}),at("design:type",Object)],t.BP.prototype,"selected",void 0),t.BP=st([Y("wired-item")],t.BP);var lt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},ct=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.OE=class extends se{constructor(){super(...arguments),this.elevation=1}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]}render(){return D`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,e.height+2*(t-1)]}return this.lastSize}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),r={width:t[0],height:t[1]-2*(i-1)};for(let t=0;t<i;t++)Ae(e,0,r.height+2*t-2,r.width,r.height+2*t-2,this.seed),Ae(e,0,r.height+2*t-2,r.width,r.height+2*t-2,this.seed)}},lt([K({type:Number}),ct("design:type",Object)],t.OE.prototype,"elevation",void 0),lt([K({type:String}),ct("design:type",String)],t.OE.prototype,"href",void 0),lt([K({type:String}),ct("design:type",String)],t.OE.prototype,"target",void 0),lt([J("a"),ct("design:type",HTMLAnchorElement)],t.OE.prototype,"anchor",void 0),t.OE=lt([Y("wired-link")],t.OE);var dt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},ht=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.dQ=class extends se{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[oe,ie`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]}render(){return D`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}}))}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const i=e[t];"WIRED-ITEM"===i.tagName&&(i.setAttribute("role","option"),this.itemNodes.push(i))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let i=0;i<e.length;i++){const r=e[i];if("WIRED-ITEM"===r.tagName){const e=r.value||"";if(this.selected&&e===this.selected){t=r;break}}}this.lastSelectedItem=t||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),this.value=t?{value:t.value||"",text:t.textContent||""}:void 0}}fireSelected(){ae(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ie(e,0,0,t[0],t[1],this.seed)}},dt([K({type:Object}),ht("design:type",Object)],t.dQ.prototype,"value",void 0),dt([K({type:String}),ht("design:type",String)],t.dQ.prototype,"selected",void 0),dt([K({type:Boolean}),ht("design:type",Object)],t.dQ.prototype,"horizontal",void 0),t.dQ=dt([Y("wired-listbox")],t.dQ);var pt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},ut=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.ll=class extends se{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[oe,ie`
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      path.progbox {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]}render(){return D`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ie(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const i=t.width*Math.max(0,Math.min(e,100));this.progBox=De([[0,0],[i,0],[i,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}},pt([K({type:Number}),ut("design:type",Object)],t.ll.prototype,"value",void 0),pt([K({type:Number}),ut("design:type",Object)],t.ll.prototype,"min",void 0),pt([K({type:Number}),ut("design:type",Object)],t.ll.prototype,"max",void 0),pt([K({type:Boolean}),ut("design:type",Object)],t.ll.prototype,"percentage",void 0),t.ll=pt([Y("wired-progress")],t.ll);var ft=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},yt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.ve=class extends se{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[oe,ie`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return D`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),ae(this,"change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){ze(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=Le("g"),e.appendChild(this.svgCheck);const i=Math.max(.6*t[0],5),r=Math.max(.6*t[1],5);ze(this.svgCheck,t[0]/2,t[1]/2,i,r,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}},ft([K({type:Boolean}),yt("design:type",Object)],t.ve.prototype,"checked",void 0),ft([K({type:Boolean,reflect:!0}),yt("design:type",Object)],t.ve.prototype,"disabled",void 0),ft([K({type:String}),yt("design:type",String)],t.ve.prototype,"name",void 0),ft([K(),yt("design:type",Object)],t.ve.prototype,"focused",void 0),ft([J("input"),yt("design:type",HTMLInputElement)],t.ve.prototype,"input",void 0),t.ve=ft([Y("wired-radio")],t.ve);var gt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};t.Yq=class extends ne{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return ie`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return D`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const t=e.detail.checked,i=e.target,r=i.name||"";t?(this.selected=t&&r||"",this.fireSelected()):i.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}}))}updated(){const e=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],e&&e.length)for(let t=0;t<e.length;t++){const i=e[t];if("WIRED-RADIO"===i.tagName){this.radioNodes.push(i);const e=i.name||"";this.selected&&e===this.selected?i.checked=!0:i.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let t=0;t<e.length;t++)if(e[t].name===this.selected){i=t;break}i<0?t=e[0]:(i--,i<0&&(i=e.length-1),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let t=0;t<e.length;t++)if(e[t].name===this.selected){i=t;break}i<0?t=e[0]:(i++,i>=e.length&&(i=0),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){ae(this,"selected",{selected:this.selected})}},gt([K({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata("design:type",t)}(0,String)],t.Yq.prototype,"selected",void 0),t.Yq=gt([Y("wired-radio-group")],t.Yq);var mt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},bt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.E5=class extends se{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]}render(){return D`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ie(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=Le("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),ze(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),Ae(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=Le("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),Ae(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),Ae(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),ae(this,e.type,{sourceEvent:e})}},mt([K({type:Boolean,reflect:!0}),bt("design:type",Object)],t.E5.prototype,"disabled",void 0),mt([K({type:String}),bt("design:type",Object)],t.E5.prototype,"placeholder",void 0),mt([K({type:String}),bt("design:type",Object)],t.E5.prototype,"autocomplete",void 0),mt([K({type:String}),bt("design:type",Object)],t.E5.prototype,"autocorrect",void 0),mt([K({type:Boolean}),bt("design:type",Object)],t.E5.prototype,"autofocus",void 0),mt([J("input"),bt("design:type",HTMLInputElement)],t.E5.prototype,"textInput",void 0),t.E5=mt([Y("wired-search-input")],t.E5);var vt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},wt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.Ji=class extends se{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[oe,ie`
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=""+e:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return D`
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&ae(this,"change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];const i=Math.round(t[1]/2);Ae(e,0,i,t[0],i,this.seed).classList.add("bar"),this.knob=ze(e,10,i,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,t=Math.max(this.step,this.max-this.min),i=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${i*(this.canvasWidth-20)}px)`)}}},vt([K({type:Number}),wt("design:type",Object)],t.Ji.prototype,"min",void 0),vt([K({type:Number}),wt("design:type",Object)],t.Ji.prototype,"max",void 0),vt([K({type:Number}),wt("design:type",Object)],t.Ji.prototype,"step",void 0),vt([K({type:Boolean,reflect:!0}),wt("design:type",Object)],t.Ji.prototype,"disabled",void 0),vt([J("input"),wt("design:type",HTMLInputElement)],t.Ji.prototype,"input",void 0),t.Ji=vt([Y("wired-slider")],t.Ji);var xt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},Pt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.vX=class extends se{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]}render(){return D`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){ze(e,t[0]/2,t[1]/2,Math.floor(.8*t[0]),Math.floor(.8*t[1]),this.seed),this.knob=Ne(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(360*this.value*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame((e=>this.tick(e)))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}},xt([K({type:Boolean}),Pt("design:type",Object)],t.vX.prototype,"spinning",void 0),xt([K({type:Number}),Pt("design:type",Object)],t.vX.prototype,"duration",void 0),t.vX=xt([Y("wired-spinner")],t.vX);var Ot=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},St=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.xB=class extends se{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return D`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ie(e,2,2,t[0]-4,t[1]-4,this.seed)}},Ot([K({type:String}),St("design:type",Object)],t.xB.prototype,"name",void 0),Ot([K({type:String}),St("design:type",Object)],t.xB.prototype,"label",void 0),t.xB=Ot([Y("wired-tab"),St("design:paramtypes",[])],t.xB);var kt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},Et=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.WO=class extends ne{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[oe,ie`
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]}render(){return D`
    <div id="bar">
      ${this.pages.map((e=>D`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `))}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){const i=e[t];if(i.nodeType===Node.ELEMENT_NODE&&"wired-tab"===i.tagName.toLowerCase()){const e=i;this.pages.push(e);const t=e.getAttribute("name")||"";t&&t.trim().split(" ").forEach((t=>{t&&this.pageMap.set(t,e)}))}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}}))}updated(){const e=this.getElement();for(let t=0;t<this.pages.length;t++){const i=this.pages[t];i===e?i.classList.remove("hidden"):i.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame((()=>requestAnimationFrame((()=>this.current.wiredRender()))))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){const e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}},kt([K({type:String}),Et("design:type",String)],t.WO.prototype,"selected",void 0),kt([J("slot"),Et("design:type",HTMLSlotElement)],t.WO.prototype,"slotElement",void 0),t.WO=kt([Y("wired-tabs")],t.WO);var Rt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},jt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.iR=class extends se{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]}render(){return D`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.textarea;if(t)return void(t.value=e)}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ie(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),ae(this,e.type,{sourceEvent:e})}},Rt([K({type:Boolean,reflect:!0}),jt("design:type",Object)],t.iR.prototype,"disabled",void 0),Rt([K({type:Number}),jt("design:type",Object)],t.iR.prototype,"rows",void 0),Rt([K({type:Number}),jt("design:type",Object)],t.iR.prototype,"maxrows",void 0),Rt([K({type:String}),jt("design:type",Object)],t.iR.prototype,"autocomplete",void 0),Rt([K({type:Boolean}),jt("design:type",Object)],t.iR.prototype,"autofocus",void 0),Rt([K({type:String}),jt("design:type",Object)],t.iR.prototype,"inputmode",void 0),Rt([K({type:String}),jt("design:type",Object)],t.iR.prototype,"placeholder",void 0),Rt([K({type:Boolean}),jt("design:type",Object)],t.iR.prototype,"required",void 0),Rt([K({type:Boolean}),jt("design:type",Object)],t.iR.prototype,"readonly",void 0),Rt([K({type:Number}),jt("design:type",Number)],t.iR.prototype,"minlength",void 0),Rt([K({type:Number}),jt("design:type",Number)],t.iR.prototype,"maxlength",void 0),Rt([J("textarea"),jt("design:type",HTMLTextAreaElement)],t.iR.prototype,"textareaInput",void 0),t.iR=Rt([Y("wired-textarea")],t.iR);var Ct=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},_t=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.ER=class extends se{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[oe,ie`
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      path.knobfill {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked path.knobfill {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked path.knobfill {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]}render(){return D`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),ae(this,"change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){Ie(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=Le("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const i=Ne(16,16,32,32,this.seed);i.classList.add("knobfill"),this.knob.appendChild(i),ze(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}},Ct([K({type:Boolean}),_t("design:type",Object)],t.ER.prototype,"checked",void 0),Ct([K({type:Boolean,reflect:!0}),_t("design:type",Object)],t.ER.prototype,"disabled",void 0),Ct([J("input"),_t("design:type",HTMLInputElement)],t.ER.prototype,"input",void 0),t.ER=Ct([Y("wired-toggle")],t.ER);var Mt=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},Lt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.xr=class extends se{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[oe,ie`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]}render(){return D`
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"▶"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ie(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const t=Math.floor(e/60);return`${t}:${Math.round(e-60*t)}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=100*this.video.volume)}},Mt([K({type:String}),Lt("design:type",Object)],t.xr.prototype,"src",void 0),Mt([K({type:Boolean}),Lt("design:type",Object)],t.xr.prototype,"autoplay",void 0),Mt([K({type:Boolean}),Lt("design:type",Object)],t.xr.prototype,"loop",void 0),Mt([K({type:Boolean}),Lt("design:type",Object)],t.xr.prototype,"muted",void 0),Mt([K({type:Boolean}),Lt("design:type",Object)],t.xr.prototype,"playsinline",void 0),Mt([K(),Lt("design:type",Object)],t.xr.prototype,"playing",void 0),Mt([K(),Lt("design:type",Object)],t.xr.prototype,"timeDisplay",void 0),Mt([J("wired-progress"),Lt("design:type",t.ll)],t.xr.prototype,"progressBar",void 0),Mt([J("wired-slider"),Lt("design:type",t.Ji)],t.xr.prototype,"slider",void 0),Mt([J("video"),Lt("design:type",HTMLVideoElement)],t.xr.prototype,"video",void 0),t.xr=Mt([Y("wired-video"),Lt("design:paramtypes",[])],t.xr)}}]);