import{u as m,c as d,r as _,o as n,a as r,b as t,w as a,d as f,F as s,e as v}from"./index-BZaVAzwM.js";import{V as i,a as l}from"./VList-AyE--N2P.js";import{V}from"./VDivider-DymlKbYd.js";import{V as x,a as h}from"./VNavigationDrawer-DBeFZ3id.js";const D={__name:"admin",setup(w){const o=m(),u=[{to:"/admin/products",text:"商品管理",icon:"mdi-shopping"},{to:"/admin/orders",text:"訂單管理",icon:"mdi-list-box"},{to:"/",text:"回首頁",icon:"mdi-home"}],c=d(()=>`https://api.multiavatar.com/${o.account}.png`);return(g,k)=>{const p=_("router-view");return n(),r(s,null,[t(x,{permanent:""},{default:a(()=>[t(i,null,{default:a(()=>[t(l,{"prepend-avatar":c.value,title:f(o).account},null,8,["prepend-avatar","title"])]),_:1}),t(V),t(i,null,{default:a(()=>[(n(),r(s,null,v(u,e=>t(l,{key:e.to,to:e.to,title:e.text,"prepend-icon":e.icon},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1}),t(h,null,{default:a(()=>[t(p)]),_:1})],64)}}};export{D as default};
