"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[698],{98698:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var n=s(74848),l=s(96540),o=s(44433),i=s(49808),r=s(7350),c=s.n(r),a=s(46784),d=s(71704),u=s(93443);const h=e=>{const[t,s]=(0,l.useState)(null),r=Boolean(e.collapsed),u=Boolean(e.innerList),f=e=>()=>{const n=(e,t=!0)=>{for(;e;)e.isCollapsed=t,e=e.parent};Boolean(e.children)&&e===t?(n(e),s(null)):(n(t),n(e,!1),s(e))},p=e.list?e.list.map(((t,s)=>(0,n.jsxs)(i.A.Item,{className:t.focused?"focused":"",children:[(0,n.jsxs)(i.A.Content,{onClick:(e,s)=>((e,t)=>{t&&e.stopPropagation()})(e,t.focused),children:[(0,n.jsx)(o.Vq,{smooth:!0,to:"#"+t.innerText,scroll:e=>(e=>{const t=-document.getElementById("header").clientHeight;e.scrollIntoView(),window.scrollBy({top:t}),c()((()=>{e.classList.add("title-on-focus"),setTimeout((()=>{e.classList.remove("title-on-focus")}),1100)}),1200)()})(e),onClick:f(t),onKeyUp:e=>"Enter"===e.key?f(t)():null,tabIndex:r?-1:0,children:decodeURI(t.innerText)}),t.children?(0,n.jsx)("button",{className:"fold-button"+(t.isCollapsed?"":" invisible"),tabIndex:"-1",disabled:!0,children:(0,n.jsx)(a.g,{icon:d.vH})}):null]}),(0,n.jsx)(h,{list:t.children,prefix:e.prefix+String(s)+"-",collapsed:t.isCollapsed,innerList:!0})]},e.prefix+String(s)))):null;return(0,n.jsx)(n.Fragment,{children:u?(0,n.jsx)(i.A.List,{className:"toc-list"+(r?" collapsed":""),children:p}):(0,n.jsx)(i.A,{celled:!0,ordered:!0,className:"toc-list"+(r?" collapsed":""),children:p})})};class f{constructor(e){this.tagName=e.tagName,this.innerText=encodeURI(e.innerText),this.isCollapsed=!0,this.children=null,this.ref=e,this.parent=null,this.focused=!1,e.id=this.innerText}}const p=(0,u.PA)((({blogContainer:e})=>{const[t,s]=(0,l.useState)([]),[o,i]=(0,l.useState)([]),[r,c]=(0,l.useState)(""),[a,d]=(0,l.useState)(""),[u,p]=(0,l.useState)(!1),m=(0,l.useMemo)((()=>{const e=t=>t.reduce(((t,s)=>{let n=t.concat(s);return s.children&&(n=n.concat(e(s.children))),n}),[]);return t?e(t):[]}),[t]);(0,l.useEffect)((()=>{if(!e.isReady)return;const n=JSON.parse(JSON.stringify(e.offsets));if(e.isUpdated&&(i(n),e.update()),!t.length){const t=e.titles;s((e=>{if(!e.length)return null;let t,s=[],n=[];for(let l of e)if(t){for(;s.length&&t.tagName>=l.tagName;)t=s.pop();if(t.tagName<l.tagName){let e=new f(l);t.children||(t.children=[]),e.parent=t,t.children.push(e),s.push(t),t=e}else n.push(t),t=new f(l),s.length||s.push(t)}else t=new f(l),s.length||s.push(t);return s.length&&n.push(s[0]),n})(t))}let l=document.getElementById("blog-container").offsetTop,o=document.getElementById("header").offsetHeight;c(l-o)}),[e.isUpdated]);const g=(0,l.useCallback)((()=>{let e=document.documentElement.scrollTop-r+40,t=0,s=o.length-1;for(;t<=s;){let n=t+s>>1,l=o[n].offset;if(l===e)return o[n];l<e?t=n+1:s=n-1}return o[s]}),[r,o]);return(0,l.useEffect)((()=>{const e=()=>{let e,t=g();t&&(e=[...m].find((e=>decodeURI(e.innerText)===t.val))),e||(e=[...m][0]);for(let e of m)e.isCollapsed=!0,e.focused=!1;void 0!==e&&(e.focused=!0);let s=e;for(;s;)s.isCollapsed=!1,s=s.parent;void 0!==e&&d(e.innerText)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[m,g]),(0,n.jsx)("div",{onClick:()=>{u||setTimeout((()=>{window.scrollBy({top:-1,behavior:"smooth"}),console.log("smallSCroll")}),200),p(!0),setTimeout((()=>p(!1)),1500)},className:u?"forbidden":"",id:"table-of-content",children:(0,n.jsx)(h,{list:t,focus:a})})})),m=(0,u.PA)((({blogContainer:e})=>(0,n.jsxs)("div",{className:"sidebar",children:[(0,n.jsx)("span",{className:"content",children:"CONTENT"}),(0,n.jsx)(p,{blogContainer:e})]})))}}]);