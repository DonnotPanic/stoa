"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[740],{1740:(e,t,s)=>{s.a(e,(async(e,n)=>{try{s.r(t),s.d(t,{default:()=>r});var l=s(4848),o=(s(6540),s(5230)),i=s(3443),c=e([o]);o=(c.then?(await c)():c)[0];const r=(0,i.PA)((({blogContainer:e})=>(0,l.jsxs)("div",{className:"sidebar",children:[(0,l.jsx)("span",{className:"content",children:"CONTENT"}),(0,l.jsx)(o.A,{blogContainer:e})]})));n()}catch(e){n(e)}}))},5230:(e,t,s)=>{s.a(e,(async(e,n)=>{try{s.d(t,{A:()=>x});var l=s(4848),o=s(6540),i=s(4433),c=s(5905),r=s(7350),a=s.n(r),d=s(982),u=s(1704),h=s(3443),f=e([c]);c=(f.then?(await f)():f)[0];const p=e=>{const[t,s]=(0,o.useState)(null),n=Boolean(e.collapsed),r=Boolean(e.innerList),h=e=>()=>{const n=(e,t=!0)=>{for(;e;)e.isCollapsed=t,e=e.parent};Boolean(e.children)&&e===t?(n(e),s(null)):(n(t),n(e,!1),s(e))},f=e.list?e.list.map(((t,s)=>(0,l.jsxs)(c.List.Item,{className:t.focused?"focused":"",children:[(0,l.jsxs)(c.List.Content,{onClick:(e,s)=>((e,t)=>{t&&e.stopPropagation()})(e,t.focused),children:[(0,l.jsx)(i.Vq,{smooth:!0,to:"#"+t.innerText,scroll:e=>(e=>{const t=-document.getElementById("header").clientHeight;e.scrollIntoView(),window.scrollBy({top:t}),a()((()=>{e.classList.add("title-on-focus"),setTimeout((()=>{e.classList.remove("title-on-focus")}),1100)}),1200)()})(e),onClick:h(t),onKeyUp:e=>"Enter"===e.key?h(t)():null,tabIndex:n?-1:0,children:decodeURI(t.innerText)}),t.children?(0,l.jsx)("button",{className:"fold-button"+(t.isCollapsed?"":" invisible"),tabIndex:"-1",disabled:!0,children:(0,l.jsx)(d.g,{icon:u.vH})}):null]}),(0,l.jsx)(p,{list:t.children,prefix:e.prefix+String(s)+"-",collapsed:t.isCollapsed,innerList:!0})]},e.prefix+String(s)))):null;return(0,l.jsx)(l.Fragment,{children:r?(0,l.jsx)(c.List.List,{className:"toc-list"+(n?" collapsed":""),children:f}):(0,l.jsx)(c.List,{celled:!0,ordered:!0,className:"toc-list"+(n?" collapsed":""),children:f})})};class m{constructor(e){this.tagName=e.tagName,this.innerText=encodeURI(e.innerText),this.isCollapsed=!0,this.children=null,this.ref=e,this.parent=null,this.focused=!1,e.id=this.innerText}}const g=e=>{if(!e.length)return null;let t,s=[],n=[];for(let l of e)if(t){for(;s.length&&t.tagName>=l.tagName;)t=s.pop();if(t.tagName<l.tagName){let e=new m(l);t.children||(t.children=[]),e.parent=t,t.children.push(e),s.push(t),t=e}else n.push(t),t=new m(l),s.length||s.push(t)}else t=new m(l),s.length||s.push(t);return s.length&&n.push(s[0]),n},x=(0,h.PA)((({blogContainer:e})=>{const[t,s]=(0,o.useState)([]),[n,i]=(0,o.useState)([]),[c,r]=(0,o.useState)(""),[a,d]=(0,o.useState)(""),[u,h]=(0,o.useState)(!1),f=(0,o.useMemo)((()=>{const e=t=>t.reduce(((t,s)=>{let n=t.concat(s);return s.children&&(n=n.concat(e(s.children))),n}),[]);return t?e(t):[]}),[t]);(0,o.useEffect)((()=>{if(!e.isReady)return;const n=JSON.parse(JSON.stringify(e.offsets));if(e.isUpdated&&(i(n),e.update()),!t.length){const t=e.titles;s(g(t))}let l=document.getElementById("blog-container").offsetTop,o=document.getElementById("header").offsetHeight;r(l-o)}),[e.isUpdated]);const m=(0,o.useCallback)((()=>{let e=document.documentElement.scrollTop-c+40,t=0,s=n.length-1;for(;t<=s;){let l=t+s>>1,o=n[l].offset;if(o===e)return n[l];o<e?t=l+1:s=l-1}return n[s]}),[c,n]);return(0,o.useEffect)((()=>{const e=()=>{let e,t=m();t&&(e=[...f].find((e=>decodeURI(e.innerText)===t.val))),e||(e=[...f][0]);for(let e of f)e.isCollapsed=!0,e.focused=!1;void 0!==e&&(e.focused=!0);let s=e;for(;s;)s.isCollapsed=!1,s=s.parent;void 0!==e&&d(e.innerText)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[f,m]),(0,l.jsx)("div",{onClick:()=>{u||setTimeout((()=>{window.scrollBy({top:-1,behavior:"smooth"}),console.log("smallSCroll")}),200),h(!0),setTimeout((()=>h(!1)),1500)},className:u?"forbidden":"",id:"table-of-content",children:(0,l.jsx)(p,{list:t,focus:a})})}));n()}catch(e){n(e)}}))}}]);