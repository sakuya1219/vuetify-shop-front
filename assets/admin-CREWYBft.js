import{u as p,c as d,r as _,o,a as n,b as t,w as a,F as r,d as v}from"./index-CfZ3Q1Hw.js";import{V as i,a as s}from"./VList-YZH_netS.js";import{V as f}from"./VDivider-IaPHmBD6.js";import{V as x,a as V}from"./VNavigationDrawer-DEftQBMc.js";const B={__name:"admin",setup(w){const c=p(),u=[{to:"/admin/products",text:"貓咪管理",icon:"mdi-cat"},{to:"/admin/orders",text:"預約管理",icon:"mdi-list-box"},{to:"/admin/account",text:"會員管理",icon:"mdi-account-group"},{to:"/",text:"回首頁",icon:"mdi-home"}],l=d(()=>`https://api.multiavatar.com/${c.account}.png`);return(g,h)=>{const m=_("router-view");return o(),n(r,null,[t(x,{permanent:"","mini-variant":""},{default:a(()=>[t(i,null,{default:a(()=>[t(s,{"prepend-avatar":l.value,title:"user.account"},null,8,["prepend-avatar"])]),_:1}),t(f),t(i,null,{default:a(()=>[(o(),n(r,null,v(u,e=>t(s,{key:e.to,to:e.to,title:e.text,"prepend-icon":e.icon},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1}),t(V,{style:{"--v-layout-left":"0px"}},{default:a(()=>[t(m)]),_:1})],64)}}};export{B as default};