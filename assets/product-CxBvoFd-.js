import{a7 as w,aa as N,o as u,ad as x,w as t,b as s,V as $,al as f,aU as A,ag as r,ah as n,a$ as E,aV as C,ai as D,a1 as R,aT as j,aj as z,ak as F,a9 as M,D as p,c as P,a as S,d as k,F as y,Q as U,N as G,az as L}from"./index-CGnndoj7.js";import{V as m}from"./VCol-fBxrDLe-.js";import{V as Q}from"./VPagination--sZ6S9T1.js";import{V as q}from"./VRow-B8d4wPMj.js";import{V as H}from"./VContainer-9NSDrFXe.js";const J=e=>(z("data-v-c5238daa"),e=e(),F(),e),K={class:"overlay"},O=J(()=>f("br",null,null,-1)),W={__name:"ProductCard",props:{_id:String,image:String,name:String,age:Number,description:String,adoptable:Boolean,breed:String},setup(e){const g=N(),v=e,c=()=>{g.push(`/products/${v._id}`)};return(_,d)=>(u(),x(j,{onClick:c,class:"hover-card"},{default:t(()=>[s($,{src:e.image,class:"full-image"},null,8,["src"]),f("div",K,[s(A,{class:"title-center"},{default:t(()=>[r(n(e.name),1)]),_:1}),s(E,{class:"subtitle-center"},{default:t(()=>[r(n(e.age)+" 歲 ",1)]),_:1}),s(C,{class:"text-center"},{default:t(()=>[r(n(e.breed)+" ",1),O,f("span",{class:D(e.adoptable?"status-green":"status-red")},[s(R,{color:e.adoptable?"green":"red",small:""},{default:t(()=>[r("mdi-cat")]),_:1},8,["color"]),r("   "+n(e.adoptable?"閒置中":"上工中"),1)],2)]),_:1}),s(C,{class:"description"},{default:t(()=>[r(n(e.description),1)]),_:1})])]),_:1}))}},X=w(W,[["__scopeId","data-v-c5238daa"]]),Y=f("h1",{class:"text-center"},"站檯小貓",-1),b=12,oa={__name:"product",setup(e){const{api:g}=L(),v=M(),c=p(1),_=p(1),d=p([]),i=p(""),I=[{text:"所有貓",value:""},{text:"發呆中",value:"adoptable"},{text:"忙碌中",value:"notAdoptable"}],B=l=>{i.value=l,c.value=1,V()},h=P(()=>{let l=d.value;return i.value==="adoptable"?l=d.value.filter(o=>o.adoptable):i.value==="notAdoptable"&&(l=d.value.filter(o=>!o.adoptable)),l}),T=P(()=>{const l=(c.value-1)*b,o=l+b;return h.value.slice(l,o)}),V=async()=>{var l,o;try{const{data:a}=await g.get("/product",{params:{itemsPerPage:1e3,page:1}});d.value=a.result.data,_.value=Math.ceil(h.value.length/b)}catch(a){console.log(a),v({text:((o=(l=a==null?void 0:a.response)==null?void 0:l.data)==null?void 0:o.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return V(),(l,o)=>(u(),x(H,null,{default:t(()=>[s(q,null,{default:t(()=>[s(m,{cols:"12"},{default:t(()=>[Y]),_:1}),s(m,{cols:"12",class:"d-flex justify-center mb-4"},{default:t(()=>[(u(),S(y,null,k(I,a=>s(U,{key:a.value,color:i.value.value===a.value?"primary":"secondary",onClick:Z=>B(a.value),class:"mx-2"},{default:t(()=>[r(n(a.text),1)]),_:2},1032,["color","onClick"])),64))]),_:1}),(u(!0),S(y,null,k(T.value,a=>(u(),x(m,{cols:"12",md:"6",lg:"3",key:a._id},{default:t(()=>[s(X,G({ref_for:!0},a),null,16)]),_:2},1024))),128)),s(m,{cols:"12"},{default:t(()=>[s(Q,{modelValue:c.value,"onUpdate:modelValue":[o[0]||(o[0]=a=>c.value=a),V],length:_.value,rounded:"circle"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1}))}};export{oa as default};
