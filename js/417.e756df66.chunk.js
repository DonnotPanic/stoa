"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[417],{83417:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(54170),l=n.n(r),a=n(8873),o=n.n(a),c=n(61372);var i=n(62729),s=n(93443);const d=(0,r.lazy)((()=>Promise.all([n.e(50),n.e(96),n.e(201)]).then(n.bind(n,45201)))),g=(0,r.lazy)((()=>Promise.all([n.e(50),n.e(96),n.e(5)]).then(n.bind(n,59099)))),u=(0,s.PA)((e=>{let{blogContainer:t}=e;const n=(0,i.useParams)(),[a,s]=(0,r.useState)([]),[u,m]=(0,r.useState)({toggler:!1,sourceIndex:0}),[f,h]=(0,r.useState)(""),[p,b]=(0,r.useState)(!0),E=(0,r.useCallback)((e=>{const n=e=>[...e.children].filter((e=>/H[2-6]/g.test(e.tagName))),r=e=>n(e).map((e=>({val:e.innerText,offset:e.offsetTop})));if(null===e)return;let l=[...e.children].filter((e=>/H1/g.test(e.tagName)));l=0===l.length?e.children:l,t.init(e.clientHeight,e.scrollTop,e.offsetTop,n(e),r(e),!0,e.clientWidth,l[0]),new ResizeObserver((()=>{t.resize(r(e),e.clientWidth)})).observe(e)}),[t]);return(0,r.useEffect)((()=>{n.blogid&&async function(){console.log("fetch ".concat(decodeURI((0,c.n)(n.blogid)),".md")),await fetch("/markdowns".concat(decodeURI((0,c.n)(n.blogid)),".md")).then((e=>e.text())).then((e=>h(function(e){const t=e.replace(/^\+\+\+(.*)\+\+\+/gs,"").replace(/^\s+/g,"");let n=t.indexOf("\n");return t.slice(0,n)+(e=>{let t=(e=>{const t=e.match(/[\u4E00-\u9FA5]/g);let n=0;return t&&(n=t.length),(e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")).split(" ").filter((function(e){return""!==e})).length+n})(e),n=Math.ceil(t/250);return"\n<p><span id='read-info'> ".concat(n+" min read"," </span></p>\n")})(t)+t.slice(n+1,t.length)}(e)))),b(!1)}()}),[n.blogid]),l().createElement(l().Fragment,null,p?l().createElement("div",{className:"on-loading"},l().createElement("img",{src:"/image/loading.png",alt:"ON LOADING..."})):l().createElement(l().Fragment,null,l().createElement("div",{className:"zooming-wrapper"},l().createElement(o(),{className:"blog-img-zoom",toggler:u.toggler,sourceIndex:u.sourceIndex,sources:a})),l().createElement("div",{ref:E,id:"blog-container",className:"blog-link"},l().createElement(g,{data:f,blogContainer:t,sources:a,setSources:s,handleSlide:e=>{m((t=>({toggler:!t.toggler,sourceIndex:e})))}})),l().createElement(d,{blogContainer:t}),l().createElement("div",{id:"footer"})))}))},61372:(e,t,n)=>{function r(e){return btoa(String.fromCharCode(...(new TextEncoder).encode(e)))}function l(e){return(new TextDecoder).decode(Uint8Array.from(atob(e),(e=>e.charCodeAt(0))))}n.d(t,{G:()=>r,n:()=>l})}}]);