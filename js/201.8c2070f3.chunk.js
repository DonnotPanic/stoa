"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[201],{45201:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var l=n(96540),s=n(44433),o=n(49808),r=n(7350),a=n.n(r),c=n(46784),i=n(66188),d=n(93443);const u=e=>{const[t,n]=(0,l.useState)(null),r=Boolean(e.collapsed),d=Boolean(e.innerList),m=e=>()=>{const l=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];for(;e;)e.isCollapsed=t,e=e.parent};Boolean(e.children)&&e===t?(l(e),n(null)):(l(t),l(e,!1),n(e))},f=e.list?e.list.map(((t,n)=>l.createElement(o.A.Item,{key:e.prefix+String(n),className:t.focused?"focused":""},l.createElement(o.A.Content,{onClick:(e,n)=>((e,t)=>{t&&e.stopPropagation()})(e,t.focused)},l.createElement(s.Vq,{smooth:!0,to:"#"+t.innerText,scroll:e=>(e=>{const t=-document.getElementById("header").clientHeight;e.scrollIntoView(),window.scrollBy({top:t}),a()((()=>{e.classList.add("title-on-focus"),setTimeout((()=>{e.classList.remove("title-on-focus")}),1100)}),1200)()})(e),onClick:m(t),onKeyUp:e=>"Enter"===e.key?m(t)():null,tabIndex:r?-1:0},decodeURI(t.innerText)),t.children?l.createElement("button",{className:"fold-button"+(t.isCollapsed?"":" invisible"),tabIndex:"-1",disabled:!0},l.createElement(c.g,{icon:i.vHW})):null),l.createElement(u,{list:t.children,prefix:e.prefix+String(n)+"-",collapsed:t.isCollapsed,innerList:!0})))):null;return l.createElement(l.Fragment,null,d?l.createElement(o.A.List,{className:"toc-list"+(r?" collapsed":"")},f):l.createElement(o.A,{celled:!0,ordered:!0,className:"toc-list"+(r?" collapsed":"")},f))};class m{constructor(e){this.tagName=e.tagName,this.innerText=encodeURI(e.innerText),this.isCollapsed=!0,this.children=null,this.ref=e,this.parent=null,this.focused=!1,e.id=this.innerText}}const f=(0,d.PA)((e=>{let{blogContainer:t}=e;const[n,s]=(0,l.useState)([]),[o,r]=(0,l.useState)([]),[a,c]=(0,l.useState)(""),[i,d]=(0,l.useState)(""),[f,p]=(0,l.useState)(!1),h=(0,l.useMemo)((()=>{const e=t=>t.reduce(((t,n)=>{let l=t.concat(n);return n.children&&(l=l.concat(e(n.children))),l}),[]);return n?e(n):[]}),[n]);(0,l.useEffect)((()=>{if(!t.isReady)return;const e=JSON.parse(JSON.stringify(t.offsets));if(t.isUpdated&&(r(e),t.update()),!n.length){const e=t.titles;s((e=>{if(!e.length)return null;let t,n=[],l=[];for(let s of e)if(t){for(;n.length&&t.tagName>=s.tagName;)t=n.pop();if(t.tagName<s.tagName){let e=new m(s);t.children||(t.children=[]),e.parent=t,t.children.push(e),n.push(t),t=e}else l.push(t),t=new m(s),n.length||n.push(t)}else t=new m(s),n.length||n.push(t);return n.length&&l.push(n[0]),l})(e))}let l=document.getElementById("blog-container").offsetTop,o=document.getElementById("header").offsetHeight;c(l-o)}),[t.isUpdated]);const g=(0,l.useCallback)((()=>{let e=document.documentElement.scrollTop-a+40,t=0,n=o.length-1;for(;t<=n;){let l=t+n>>1,s=o[l].offset;if(s===e)return o[l];s<e?t=l+1:n=l-1}return o[n]}),[a,o]);return(0,l.useEffect)((()=>{const e=()=>{let e,t=g();t&&(e=[...h].find((e=>decodeURI(e.innerText)===t.val))),e||(e=[...h][0]);for(let e of h)e.isCollapsed=!0,e.focused=!1;void 0!==e&&(e.focused=!0);let n=e;for(;n;)n.isCollapsed=!1,n=n.parent;void 0!==e&&d(e.innerText)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[h,g]),l.createElement("div",{onClick:()=>{f||setTimeout((()=>{window.scrollBy({top:-1,behavior:"smooth"}),console.log("smallSCroll")}),200),p(!0),setTimeout((()=>p(!1)),1500)},className:f?"forbidden":"",id:"table-of-content"},l.createElement(u,{list:n,focus:i}))})),p=(0,d.PA)((e=>{let{blogContainer:t}=e;return l.createElement("div",{className:"sidebar"},l.createElement("span",{className:"content"},"CONTENT"),l.createElement(f,{blogContainer:t}))}))}}]);