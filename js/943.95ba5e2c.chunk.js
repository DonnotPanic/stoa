"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[943],{51943:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var r=t(74848),l=t(96540),o=t(8873),s=t.n(o),i=t(18676);var a=t(47767),c=t(93443);const d=(0,l.lazy)((()=>Promise.all([t.e(50),t.e(904),t.e(96),t.e(698)]).then(t.bind(t,98698)))),g=(0,l.lazy)((()=>Promise.all([t.e(50),t.e(904),t.e(96),t.e(668)]).then(t.bind(t,65462)))),u=(0,c.PA)((({blogContainer:e})=>{const n=(0,a.g)(),[t,o]=(0,l.useState)([]),[c,u]=(0,l.useState)({toggler:!1,sourceIndex:0}),[h,f]=(0,l.useState)(""),[m,p]=(0,l.useState)(!0),b=(0,l.useCallback)((n=>{const t=e=>[...e.children].filter((e=>/H[2-6]/g.test(e.tagName))),r=e=>t(e).map((e=>({val:e.innerText,offset:e.offsetTop})));if(null===n)return;let l=[...n.children].filter((e=>/H1/g.test(e.tagName)));l=0===l.length?n.children:l,e.init(n.clientHeight,n.scrollTop,n.offsetTop,t(n),r(n),!0,n.clientWidth,l[0]),new ResizeObserver((()=>{e.resize(r(n),n.clientWidth)})).observe(n)}),[e]);return(0,l.useEffect)((()=>{n.blogid&&async function(){console.log(`fetch ${decodeURI((0,i.n)(n.blogid))}.md`),await fetch(`/markdowns${decodeURI((0,i.n)(n.blogid))}.md`).then((e=>e.text())).then((e=>f(function(e){const n=e.replace(/^\+\+\+(.*)\+\+\+/gs,"").replace(/^\s+/g,"");let t=n.indexOf("\n");return n.slice(0,t)+(e=>{let n=(e=>{const n=e.match(/[\u4E00-\u9FA5]/g);let t=0;return n&&(t=n.length),(e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")).split(" ").filter((function(e){return""!==e})).length+t})(e);return`\n<p><span id='read-info'> ${Math.ceil(n/250)+" min read"} </span></p>\n`})(n)+n.slice(t+1,n.length)}(e)))),p(!1)}()}),[n.blogid]),(0,r.jsx)(r.Fragment,{children:m?(0,r.jsx)("div",{className:"on-loading",children:(0,r.jsx)("img",{src:"/image/loading.png",alt:"ON LOADING..."})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"zooming-wrapper",children:(0,r.jsx)(s(),{className:"blog-img-zoom",toggler:c.toggler,sourceIndex:c.sourceIndex,sources:t})}),(0,r.jsx)("div",{ref:b,id:"blog-container",className:"blog-link",children:(0,r.jsx)(g,{data:h,blogContainer:e,sources:t,setSources:o,handleSlide:e=>{u((n=>({toggler:!n.toggler,sourceIndex:e})))}})}),(0,r.jsx)(d,{blogContainer:e}),(0,r.jsx)("div",{id:"footer"})]})})}))},18676:(e,n,t)=>{function r(e){return btoa(String.fromCharCode(...(new TextEncoder).encode(e)))}function l(e){return(new TextDecoder).decode(Uint8Array.from(atob(e),(e=>e.charCodeAt(0))))}t.d(n,{G:()=>r,n:()=>l})}}]);