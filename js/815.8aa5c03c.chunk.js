"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[815],{8815:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.r(t),n.d(t,{default:()=>d});var c=n(4848),s=n(6540),i=n(4976),o=n(5905),l=n(8676),r=e([o]);function d(){const[e,t]=(0,s.useState)([]),[n,a]=(0,s.useState)(1),[r,d]=(0,s.useState)(1);return(0,s.useEffect)((()=>{!async function(){const e=await fetch("/markdowns/mdList.csv"),n=(e=>{const t=[];return e.split("\n").forEach((e=>{const n=e.replace("\r","").trim().split(",");t.push({name:n[0],date:n[1],path:n[2]})})),t})(await e.text());t(n),d(Math.ceil(n.length/5))}()}),[]),(0,c.jsxs)("div",{className:"blog-list",children:[(0,c.jsx)("ul",{children:(m=e,5,h=n,m.slice(5*(h-1),Math.min(m.length,5*h))).map((e=>(0,c.jsxs)("li",{children:[(0,c.jsx)("div",{className:"item-header",children:(0,c.jsx)(i.N_,{to:"/blog/"+(0,l.G)(encodeURI(e.path+"/"+e.name)),children:e.name.replaceAll("_"," ").replaceAll(".cn","")})}),(0,c.jsx)("div",{className:"item-description",children:e.date})]},(0,l.G)(e.name))))}),(0,c.jsx)(o.Pagination,{defaultActivePage:1,totalPages:r,activePage:n,onPageChange:(e,{activePage:t})=>a(t),ellipsisItem:{content:(0,c.jsx)(o.Icon,{name:"ellipsis horizontal"}),icon:!0},firstItem:{content:(0,c.jsx)(o.Icon,{name:"angle double left"}),icon:!0},lastItem:{content:(0,c.jsx)(o.Icon,{name:"angle double right"}),icon:!0},prevItem:{content:(0,c.jsx)(o.Icon,{name:"angle left"}),icon:!0},nextItem:{content:(0,c.jsx)(o.Icon,{name:"angle right"}),icon:!0}})]});var m,h}o=(r.then?(await r)():r)[0],a()}catch(m){a(m)}}))},8676:(e,t,n)=>{function a(e){return btoa(String.fromCharCode(...(new TextEncoder).encode(e)))}function c(e){return(new TextDecoder).decode(Uint8Array.from(atob(e),(e=>e.charCodeAt(0))))}n.d(t,{G:()=>a,n:()=>c})}}]);