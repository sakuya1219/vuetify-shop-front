import{a4 as f,E as V,a5 as k,w as r,o as l,b as s,at as d,a as i,e as y,F as h,au as g,a9 as n}from"./index-BZaVAzwM.js";import{V as b}from"./VContainer-C-cFMGM3.js";import{V as u}from"./VCol-e58wgWfK.js";import{V as v}from"./VDivider-DymlKbYd.js";import{V as w}from"./VDataTable-DplUaipS.js";import{V as x}from"./VRow-CYiTFxLt.js";import"./VPagination-BpbJyKQi.js";import"./VList-AyE--N2P.js";const A=d("h1",{class:"text-center"},"訂單查詢",-1),P={__name:"orders",setup(B){const{apiAuth:m}=g(),p=f(),c=V([]),_=[{title:"編號",key:"_id"},{title:"日期",key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:t=>t.cart.reduce((a,e)=>a+e.quantity*e.p_id.price,0)}];return(async()=>{var t,a;try{const{data:e}=await m.get("/order");c.value.push(...e.result)}catch(e){console.log(e),p({text:((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}})(),(t,a)=>(l(),k(b,null,{default:r(()=>[s(x,null,{default:r(()=>[s(u,{cols:"12"},{default:r(()=>[A]),_:1}),s(v),s(u,{cols:"12"},{default:r(()=>[s(w,{items:c.value,headers:_},{"item.cart":r(e=>[d("ul",null,[(l(!0),i(h,null,y(e.item.cart,o=>(l(),i("li",{key:o._id},n(o.p_id.name)+" * "+n(o.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{P as default};
