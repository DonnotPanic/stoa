(()=>{"use strict";var e,t,n,r={9765:(e,t,n)=>{var r=n(6540),l=n(5338),a=n(4976),o=n(7767),c=n(8873),s=n.n(c),i=n(7359),u=n(5702),d=n(7685),m=n(163),f=n(1931),g=n(6934);function h(e){return(new TextDecoder).decode(Uint8Array.from(atob(e),(e=>e.charCodeAt(0))))}var p=n(9399),b=n(4182),E=n(6272),v=n(982),y=n(6188);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function O(e){let{node:t,inline:n,className:l,children:a,...o}=e;const c=String(a).replace(/\n$/,""),[s,i]=(0,r.useState)(!1),u=/language-(\w+)/.exec(l||"");return r.createElement(r.Fragment,null,!n&&u?r.createElement(r.Fragment,null,r.createElement("div",{id:"code-copy"},s?r.createElement(v.g,{color:"silver",id:"copyed-icon",icon:y.Iae}):r.createElement(p.CopyToClipboard,{text:c,onCopy:()=>{i(!0),setTimeout((()=>{i(!1)}),3e3)}},r.createElement(v.g,{color:"silver",id:"copy-icon",icon:y.KTq}))),r.createElement(E.A,w({PreTag:"div",children:c,language:u[1],style:b.A},o))):r.createElement("code",w({className:l},o),c))}var N=n(4433),T=n(1671),S=n(7350),j=n.n(S),C=n(3443);const x=e=>{const[t,n]=(0,r.useState)(null),l=Boolean(e.collapsed),a=Boolean(e.innerList),o=e=>()=>{const r=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];for(;e;)e.isCollapsed=t,e=e.parent};Boolean(e.children)&&e===t?(r(e),n(null)):(r(t),r(e,!1),n(e))},c=e.list?e.list.map(((t,n)=>r.createElement(T.A.Item,{key:e.prefix+String(n),className:t.focused?"focused":""},r.createElement(T.A.Content,null,r.createElement(N.Vq,{smooth:!0,to:"#"+t.innerText,scroll:e=>(e=>{const t=e.getBoundingClientRect().top+window.scrollY,n=-document.getElementById("header").clientHeight;window.scrollTo({top:t+n,behavior:"smooth"}),j()((()=>{e.classList.add("title-on-focus"),setTimeout((()=>{e.classList.remove("title-on-focus")}),1100)}),1200)()})(e),onClick:o(t),onKeyUp:e=>"Enter"===e.key?o(t)():null,tabIndex:l?-1:0},decodeURI(t.innerText)),t.children?r.createElement("button",{className:"fold-button"+(t.isCollapsed?"":" invisible"),tabIndex:"-1",disabled:!0},r.createElement(v.g,{icon:y.vHW})):null),r.createElement(x,{list:t.children,prefix:e.prefix+String(n)+"-",collapsed:t.isCollapsed,innerList:!0})))):null;return r.createElement(r.Fragment,null,a?r.createElement(T.A.List,{className:"toc-list"+(l?" collapsed":"")},c):r.createElement(T.A,{celled:!0,ordered:!0,className:"toc-list"+(l?" collapsed":"")},c))};class k{constructor(e){this.tagName=e.tagName,this.innerText=encodeURI(e.innerText),this.isCollapsed=!0,this.children=null,this.ref=e,this.parent=null,this.focused=!1,e.id=this.innerText}}const P=(0,C.PA)((e=>{let{blogContainer:t}=e;const[n,l]=(0,r.useState)([]),[a,o]=(0,r.useState)([]),[c,s]=(0,r.useState)(""),[i,u]=(0,r.useState)(""),d=(0,r.useMemo)((()=>{const e=t=>t.reduce(((t,n)=>{let r=t.concat(n);return n.children&&(r=r.concat(e(n.children))),r}),[]);return n?e(n):[]}),[n]);(0,r.useEffect)((()=>{if(!t.isReady)return;const e=JSON.parse(JSON.stringify(t.offsets));if(t.isUpdated&&(o(e),t.update()),!n.length){const e=t.titles;l((e=>{if(!e.length)return null;let t,n=[],r=[];for(let l of e)if(t){for(;n.length&&t.tagName>=l.tagName;)t=n.pop();if(t.tagName<l.tagName){let e=new k(l);t.children||(t.children=[]),e.parent=t,t.children.push(e),n.push(t),t=e}else r.push(t),t=new k(l),n.length||n.push(t)}else t=new k(l),n.length||n.push(t);return n.length&&r.push(n[0]),r})(e))}let r=document.getElementById("blog-container").offsetTop,a=document.getElementById("header").offsetHeight;s(r-a)}),[t.isUpdated]);const m=(0,r.useCallback)((()=>{let e=document.documentElement.scrollTop-c+40,t=0,n=a.length-1;for(;t<=n;){let r=t+n>>1,l=a[r].offset;if(l===e)return a[r];l<e?t=r+1:n=r-1}return a[n]}),[c,a]);return(0,r.useEffect)((()=>{const e=()=>{let e,t=m();t&&(e=[...d].find((e=>decodeURI(e.innerText)===t.val))),e||(e=[...d][0]);for(let e of d)e.isCollapsed=!0,e.focused=!1;void 0!==e&&(e.focused=!0);let n=e;for(;n;)n.isCollapsed=!1,n=n.parent;u(e.innerText)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[d,m]),r.createElement("div",{id:"table-of-content"},r.createElement(x,{list:n,focus:i}))})),I=P,A=(0,C.PA)((e=>{let{blogContainer:t}=e;return r.createElement("div",{className:"sidebar"},r.createElement("span",{className:"content"},"CONTENT"),r.createElement(I,{blogContainer:t}))})),L=A;function _(e){let{href:t,title:n,children:l}=e;return r.createElement("span",{className:"link-span"},r.createElement("a",{href:t,title:n,rel:"noopener noreferrer",target:"_blank"},l))}var F=n(8870);function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function U(e){let{node:t,...n}=e;return r.createElement("label",{className:"checkbox-label"},r.createElement(F.JQ,R({type:"checkbox"},n)))}function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function H(e){let{node:t,src:n,alt:l,setSlide:a,sources:o,setSources:c,title:s,...i}=e;const[u,d]=(0,r.useState)(-1);return(0,r.useEffect)((()=>{let e;o&&(e=o.indexOf(n)),-1===e?c((e=>e.concat([n]))):u<0&&d(e)}),[]),r.createElement(r.Fragment,null,r.createElement("span",{onClick:()=>a(u),className:"image-container"},r.createElement(F.Tr,B({elevation:3,className:"blog-img",src:n},i)),r.createElement("span",{className:"image-legend"},"Fig "+(u+1)+": "+s)))}var M=n(3554),z=n.n(M);function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function D(e){let{node:t,src:n,type:l,children:a,...o}=e;const[c,s]=(0,r.useState)([]),i=(0,r.useMemo)((()=>{let e=[];return n&&e.push({src:n,type:l}),a.slice(1).forEach((t=>{"string"!=typeof t&&e.push({src:t.props.src,type:t.props.type})})),e}),[n,l,a]);return(0,r.useLayoutEffect)((()=>{s(i)}),[i]),r.createElement(z(),W({width:"fit-content",height:"revert-layer",className:"blog-video",url:c},o))}function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}const G=(0,C.PA)((e=>{let{node:t,blogContainer:n,...l}=e;const[a,o]=(0,r.useState)(""),[c,s]=(0,r.useState)(!1),i=(0,r.useCallback)((()=>{const e=n.isReady?n.clientWidth:0;o(e>=960?"large":e>=810?"median":e>=460?"small":e>=340?"tiny":"")}),[n]);return(0,r.useEffect)((()=>{const e=()=>s((e=>!e));return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,r.useLayoutEffect)((()=>{i()}),[i,c]),r.createElement("hr",q({className:a},l))})),J=G;function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}const V=(0,C.PA)((e=>{let{blogContainer:t}=e;const n=(0,o.g)(),[l,a]=(0,r.useState)([]),[c,p]=(0,r.useState)({toggler:!1,sourceIndex:0}),[b,E]=(0,r.useState)(""),[v,y]=(0,r.useState)(!0),w=(0,r.useCallback)((e=>{const n=e=>[...e.children].filter((e=>/H[2-6]/g.test(e.tagName))),r=e=>n(e).map((e=>({val:e.innerText,offset:e.offsetTop})));null!==e&&(t.init(e.clientHeight,e.scrollTop,e.offsetTop,n(e),r(e),!0,e.clientWidth,e.children[0]),new ResizeObserver((()=>{t.resize(r(e),e.clientWidth)})).observe(e))}),[t]);(0,r.useEffect)((()=>{n.blogid&&async function(){console.log("fetch ".concat(h(decodeURI(n.blogid)),".md")),await fetch("/markdowns".concat(h(decodeURI(n.blogid)),".md")).then((e=>e.text())).then((e=>E(function(e){let t=e.indexOf("\n");return e.slice(0,t)+(e=>{let t=(e=>{const t=e.match(/[\u4E00-\u9FA5]/g);let n=0;return t&&(n=t.length),(e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")).split(" ").filter((function(e){return""!==e})).length+n})(e),n=Math.ceil(t/250);return"<span id='read-info'> ".concat(n+" min read"," </span>")})(e)+e.slice(t+1,e.length)}(e)))),y(!1)}()}),[n.blogid]);const N=e=>{p((t=>({toggler:!t.toggler,sourceIndex:e})))},T={a:_,code:O,hr:e=>{let{...n}=e;return r.createElement(J,K({blogContainer:t},n))},input:U,img:e=>{let{src:t,...n}=e;return r.createElement(H,K({src:t,sources:l,setSources:a,setSlide:N},n))},video:D};return r.createElement(r.Fragment,null,v?r.createElement("div",{className:"on-loading"},r.createElement("img",{src:"/image/loading.png",alt:"ON LOADING..."})):r.createElement(r.Fragment,null,r.createElement("div",{className:"zooming-wrapper"},r.createElement(s(),{className:"blog-img-zoom",toggler:c.toggler,sourceIndex:c.sourceIndex,sources:l})),r.createElement("div",{ref:w,id:"blog-container",className:"blog-link"},r.createElement(i.o,{remarkPlugins:[u.A,d.A,m.A],rehypePlugins:[f.A,g.A],children:b,components:T})),r.createElement(L,{blogContainer:t}),r.createElement("div",{id:"footer"})))})),X=V,$=function(){const[e,t]=(0,r.useState)(""),[n,l]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{l(!0),async function(){await fetch("/markdowns/intros/about.cn.md").then((e=>e.text())).then((e=>t(e)))}(),l(!1)}),[]),r.createElement(r.Fragment,null,n?r.createElement("div",{className:"on-loading"},r.createElement("img",{src:"image/loading.png",alt:"ON LOADING..."})):r.createElement("div",{className:"intro-container"},r.createElement(i.o,{children:e,rehypePlugins:[g.A]})))};function Q(){return r.createElement("div",{className:"nav-bar"},r.createElement(a.N_,{to:"/"},"主页"),r.createElement(a.N_,{to:"/blogs"},"博客"))}var Y=n(7813);const Z=(0,C.PA)((()=>{const e=(0,C.iz)((()=>({value:""}))),t=(0,Y.XI)((()=>e.value="")),n=(0,Y.XI)((t=>{e.value.length<=30&&(e.value=t.target.value)})),l=(0,Y.EW)((()=>""!==e.value));return r.createElement("div",{className:"searchbar"},r.createElement("input",{value:e.value,id:"search-input",onChange:n}),l.get()?r.createElement("button",{className:"cancel-button cancel",onClick:t},r.createElement(v.g,{className:"search-cancel-icon",icon:y.GRI,color:"black"}),r.createElement(v.g,{className:"search-icon",icon:y.MjD,color:"black"})):r.createElement("button",{className:"search-button",disabled:!0},r.createElement(v.g,{icon:y.MjD,color:"black"})))}));function ee(){return r.createElement("div",{className:"toggler"})}const te=(0,C.PA)((e=>{let{blogContainer:t}=e;const[n,l]=(0,r.useState)(""),[a,o]=(0,r.useState)(0),[c,s]=(0,r.useState)(!0),[i,u]=(0,r.useState)(""),d=(0,r.useRef)(),m=(0,r.useCallback)((e=>{if(!t.isReady)return;let n=e.target.documentElement.scrollTop;const r=d.current.clientHeight,a=t.offsetTop;l(n+r>=a?" scrolling-header":"")}),[t]),f=(0,r.useCallback)((e=>{if(!t.isReady)return;const n=e.target.documentElement.scrollTop;if(Math.abs(a-n)<100)return;let r=t.head;a<n?s(!0):a>n&&(i!==r.innerText&&u(r.innerText),s(!1)),n<r.offsetTop+r.clientHeight&&s(!0),o(e.target.documentElement.scrollTop)}),[t,a,i]);return(0,r.useLayoutEffect)((()=>(window.addEventListener("scroll",m),window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",m),window.removeEventListener("scroll",f)})),[m,f]),r.createElement(r.Fragment,null,r.createElement("div",{className:"padding"}),r.createElement("div",{ref:d,id:"header",className:n},c?r.createElement(r.Fragment,null,r.createElement(ee,null),r.createElement(Q,null),r.createElement(Z,null)):r.createElement("center",null,i)))})),ne=te;function re(){const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{!async function(){await fetch("/markdowns/mdList.csv").then((e=>e.text())).then((e=>t((e=>{const t=[];return e.split("\n").forEach((e=>{const n=e.replace("\r","").trim().split(",");t.push({name:n[0],date:n[1],path:n[2]})})),t})(e))))}()}),[]),r.createElement("div",{className:"blog-list"},r.createElement("ul",null,e.map((e=>{return r.createElement("li",{key:e.name},r.createElement(a.N_,{to:"/blog/"+encodeURI((t=e.path+"/"+e.name,btoa(String.fromCharCode(...(new TextEncoder).encode(t)))))},e.name," : ",e.date));var t}))))}function le(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ae=new class{constructor(){le(this,"clientHeight",0),le(this,"scrollTop",0),le(this,"offsetTop",0),le(this,"titles",[]),le(this,"offsets",[]),le(this,"isReady",!1),le(this,"clientWidth",0),le(this,"head",{}),le(this,"isUpdated",!1),(0,Y.l_)(this)}init(e,t,n,r,l,a,o,c){this.clientHeight=e,this.scrollTop=t,this.offsetTop=n,this.titles=r,this.offsets=l,this.isReady=a,this.clientWidth=o,this.head=c,this.isUpdated=!0}resize(e,t){this.offsets=e,this.clientWidth=t,this.isUpdated=!0}update(){this.isUpdated=!1}},oe=function(){return r.createElement(a.Kd,null,r.createElement(ne,{blogContainer:ae}),r.createElement(o.BV,null,r.createElement(o.qh,{path:"/",element:r.createElement($,null)}),r.createElement(o.qh,{path:"/blog/:blogid",element:r.createElement(X,{blogContainer:ae})}),r.createElement(o.qh,{path:"/blogs",element:r.createElement(re,null)})))};var ce;(0,l.H)(document.getElementById("root")).render(r.createElement(oe,null)),ce&&ce instanceof Function&&n.e(96).then(n.bind(n,3237)).then((e=>{let{getCLS:t,getFID:n,getFCP:r,getLCP:l,getTTFB:a}=e;t(ce),n(ce),r(ce),l(ce),a(ce)}))}},l={};function a(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return r[e].call(n.exports,n,n.exports,a),n.exports}a.m=r,e=[],a.O=(t,n,r,l)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],l=e[u][2];for(var c=!0,s=0;s<n.length;s++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(c=!1,l<o&&(o=l));if(c){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,r,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);a.r(l);var o={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,a.d(l,o),l},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.e=()=>Promise.resolve(),a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,o=n[0],c=n[1],s=n[2],i=0;if(o.some((t=>0!==e[t]))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(s)var u=s(a)}for(t&&t(n);i<o.length;i++)l=o[i],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},n=self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=a.O(void 0,[96],(()=>a(9765)));o=a.O(o)})();