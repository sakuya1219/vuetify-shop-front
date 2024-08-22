import{p as ne,az as be,aA as he,g as re,K as Ve,aB as ye,aC as ke,c as E,f as se,aD as xe,aE as ee,b as l,N as G,t as L,aF as we,z as Ce,F as _,aG as Se,aH as Fe,D as p,y as De,O as Be,H as Te,G as j,I as Ie,aI as Re,aJ as Ue,$ as ie,aK as Ae,aL as Me,aM as $e,aN as He,av as ae,aO as Ne,B as Ee,E as Ge,a9 as ze,o as de,a as Oe,w as f,Q,af as Z,aP as te,aQ as Le,V as _e,ac as qe,ad as Ke,aR as je,ab as c,aS as Qe,aT as We,ag as Je,aU as Xe,aV as Ye,aW as Ze,ak as ea,ay as aa,r as ta,a1 as la}from"./index-C5QfvmIE.js";import{c as oa,a as le,b as na,d as ra,u as sa,e as W}from"./vee-validate.esm-BURE73Cp.js";import{V as ua}from"./VRow-JzsSliHv.js";import{V as oe}from"./VCol-tD9voUOp.js";import{m as ia,a as ce,b as da,c as ca,d as va,e as ma,f as fa,g as ga,h as pa,u as ba,p as Va,i as ya,j as xa,k as Pa,l as ha,n as ka,o as wa,q as ve,r as me,s as fe,t as ge,v as Ca}from"./VDataTable-Du5gYT_D.js";import{V as Sa}from"./VDivider-NQIGA0Eq.js";import{V as Fa}from"./VContainer-DaGjaZnN.js";import{V as Da}from"./VForm-D956QFNU.js";import"./VPagination-DoypblF5.js";import"./VList-CkfcVp-x.js";const Ba=ne({...be(),...he(ia(),["inline"])},"VCheckbox"),Ta=re()({name:"VCheckbox",inheritAttrs:!1,props:Ba(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,F){let{attrs:P,slots:o}=F;const r=Ve(e,"modelValue"),{isFocused:d,focus:w,blur:A}=ye(e),D=ke(),I=E(()=>e.id||`checkbox-${D}`);return se(()=>{const[R,M]=xe(P),C=ee.filterProps(e),g=ce.filterProps(e);return l(ee,G({class:["v-checkbox",e.class]},R,C,{modelValue:r.value,"onUpdate:modelValue":b=>r.value=b,id:I.value,focused:d.value,style:e.style}),{...o,default:b=>{let{id:h,messagesId:B,isDisabled:V,isReadonly:$,isValid:z}=b;return l(ce,G(g,{id:h.value,"aria-describedby":B.value,disabled:V.value,readonly:$.value},M,{error:z.value===!1,modelValue:r.value,"onUpdate:modelValue":O=>r.value=O,onFocus:w,onBlur:A}),o)}})}),{}}}),Ia=ne({itemsLength:{type:[Number,String],required:!0},...da(),...ca(),...va()},"VDataTableServer"),Ra=re()({name:"VDataTableServer",props:Ia(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,F){let{attrs:P,slots:o}=F;const{groupBy:r}=ma(e),{sortBy:d,multiSort:w,mustSort:A}=fa(e),{page:D,itemsPerPage:I}=ga(e),R=E(()=>parseInt(e.itemsLength,10)),{columns:M,headers:C}=pa(e,{groupBy:r,showSelect:L(e,"showSelect"),showExpand:L(e,"showExpand")}),{items:g}=ba(e,M),{toggleSort:b}=Va({sortBy:d,multiSort:w,mustSort:A,page:D}),{opened:h,isGroupOpen:B,toggleGroup:V,extractRows:$}=ya({groupBy:r,sortBy:d}),{pageCount:z,setItemsPerPage:O}=xa({page:D,itemsPerPage:I,itemsLength:R}),{flatItems:H}=Pa(g,r,h),{isSelected:k,select:S,selectAll:U,toggleSelect:T,someSelected:y,allSelected:u}=ha(e,{allItems:g,currentPage:g}),{isExpanded:v,toggleExpand:i}=ka(e),n=E(()=>$(g.value));wa({page:D,itemsPerPage:I,sortBy:d,groupBy:r,search:L(e,"search")}),we("v-data-table",{toggleSort:b,sortBy:d}),Ce({VDataTableRows:{hideNoData:L(e,"hideNoData"),noDataText:L(e,"noDataText"),loading:L(e,"loading"),loadingText:L(e,"loadingText")}});const a=E(()=>({page:D.value,itemsPerPage:I.value,sortBy:d.value,pageCount:z.value,toggleSort:b,setItemsPerPage:O,someSelected:y.value,allSelected:u.value,isSelected:k,select:S,selectAll:U,toggleSelect:T,isExpanded:v,toggleExpand:i,isGroupOpen:B,toggleGroup:V,items:n.value.map(m=>m.raw),internalItems:n.value,groupedItems:H.value,columns:M.value,headers:C.value}));se(()=>{const m=ve.filterProps(e),t=me.filterProps(e),s=fe.filterProps(e),x=ge.filterProps(e);return l(ge,G({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},x),{top:()=>{var N;return(N=o.top)==null?void 0:N.call(o,a.value)},default:()=>{var N,q,J,X,Y,K;return o.default?o.default(a.value):l(_,null,[(N=o.colgroup)==null?void 0:N.call(o,a.value),!e.hideDefaultHeader&&l("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[l(me,G(t,{sticky:e.fixedHeader}),o)]),(q=o.thead)==null?void 0:q.call(o,a.value),!e.hideDefaultBody&&l("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(J=o["body.prepend"])==null?void 0:J.call(o,a.value),o.body?o.body(a.value):l(fe,G(P,s,{items:H.value}),o),(X=o["body.append"])==null?void 0:X.call(o,a.value)]),(Y=o.tbody)==null?void 0:Y.call(o,a.value),(K=o.tfoot)==null?void 0:K.call(o,a.value)])},bottom:()=>o.bottom?o.bottom(a.value):!e.hideDefaultFooter&&l(_,null,[l(Sa,null,null),l(ve,m,{prepend:o["footer.prepend"]})])})})}}),Ua=ne({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...be(),...Se()},"VTextarea"),Aa=re()({name:"VTextarea",directives:{Intersect:Fe},inheritAttrs:!1,props:Ua(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,F){let{attrs:P,emit:o,slots:r}=F;const d=Ve(e,"modelValue"),{isFocused:w,focus:A,blur:D}=ye(e),I=E(()=>typeof e.counterValue=="function"?e.counterValue(d.value):(d.value||"").toString().length),R=E(()=>{if(P.maxlength)return P.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function M(u,v){var i,n;!e.autofocus||!u||(n=(i=v[0].target)==null?void 0:i.focus)==null||n.call(i)}const C=p(),g=p(),b=De(""),h=p(),B=E(()=>e.persistentPlaceholder||w.value||e.active);function V(){var u;h.value!==document.activeElement&&((u=h.value)==null||u.focus()),w.value||A()}function $(u){V(),o("click:control",u)}function z(u){o("mousedown:control",u)}function O(u){u.stopPropagation(),V(),ae(()=>{d.value="",Ne(e["onClick:clear"],u)})}function H(u){var i;const v=u.target;if(d.value=v.value,(i=e.modelModifiers)!=null&&i.trim){const n=[v.selectionStart,v.selectionEnd];ae(()=>{v.selectionStart=n[0],v.selectionEnd=n[1]})}}const k=p(),S=p(+e.rows),U=E(()=>["plain","underlined"].includes(e.variant));Be(()=>{e.autoGrow||(S.value=+e.rows)});function T(){e.autoGrow&&ae(()=>{if(!k.value||!g.value)return;const u=getComputedStyle(k.value),v=getComputedStyle(g.value.$el),i=parseFloat(u.getPropertyValue("--v-field-padding-top"))+parseFloat(u.getPropertyValue("--v-input-padding-top"))+parseFloat(u.getPropertyValue("--v-field-padding-bottom")),n=k.value.scrollHeight,a=parseFloat(u.lineHeight),m=Math.max(parseFloat(e.rows)*a+i,parseFloat(v.getPropertyValue("--v-input-control-height"))),t=parseFloat(e.maxRows)*a+i||1/0,s=Ge(n??0,m,t);S.value=Math.floor((s-i)/a),b.value=Ee(s)})}Te(T),j(d,T),j(()=>e.rows,T),j(()=>e.maxRows,T),j(()=>e.density,T);let y;return j(k,u=>{u?(y=new ResizeObserver(T),y.observe(k.value)):y==null||y.disconnect()}),Ie(()=>{y==null||y.disconnect()}),se(()=>{const u=!!(r.counter||e.counter||e.counterValue),v=!!(u||r.details),[i,n]=xe(P),{modelValue:a,...m}=ee.filterProps(e),t=Re(e);return l(ee,G({ref:C,modelValue:d.value,"onUpdate:modelValue":s=>d.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":U.value},e.class],style:e.style},i,m,{centerAffix:S.value===1&&!U.value,focused:w.value}),{...r,default:s=>{let{id:x,isDisabled:N,isDirty:q,isReadonly:J,isValid:X}=s;return l(Ue,G({ref:g,style:{"--v-textarea-control-height":b.value},onClick:$,onMousedown:z,"onClick:clear":O,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},t,{id:x.value,active:B.value||q.value,centerAffix:S.value===1&&!U.value,dirty:q.value||e.dirty,disabled:N.value,focused:w.value,error:X.value===!1}),{...r,default:Y=>{let{props:{class:K,...ue}}=Y;return l(_,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),ie(l("textarea",G({ref:h,class:K,value:d.value,onInput:H,autofocus:e.autofocus,readonly:J.value,disabled:N.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:V,onBlur:D},ue,n),null),[[Ae("intersect"),{handler:M},null,{once:!0}]]),e.autoGrow&&ie(l("textarea",{class:[K,"v-textarea__sizer"],id:`${ue.id}-sizer`,"onUpdate:modelValue":Pe=>d.value=Pe,ref:k,readonly:!0,"aria-hidden":"true"},null),[[Me,d.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:v?s=>{var x;return l(_,null,[(x=r.details)==null?void 0:x.call(r,s),u&&l(_,null,[l("span",null,null),l($e,{active:e.persistentCounter||w.value,value:I.value,max:R.value,disabled:e.disabled},r.counter)])])}:void 0})}),He({},C,g,h)}}),pe={},Ma=ea("h1",{class:"text-center"},"貓咪管理",-1),$a={__name:"products",setup(e){const{apiAuth:F}=aa(),P=ze(),o=p(null),r=p({open:!1,id:""}),d=n=>{n?(r.value.id=n._id,C.value.value=n.name,g.value.value=n.age,b.value.value=n.description,h.value.value=n.breed,B.value.value=n.adoptable):r.value.id="",r.value.open=!0},w=()=>{r.value.open=!1,M(),o.value.deleteFileRecord()},A=["品種1","品種2","品種3","品種4"],D=oa({name:le().required("貓咪名稱必填"),price:na().typeError("貓咪年齡格式錯誤").required("貓咪年齡必填").min(1,"貓咪年齡不能小於 1"),description:le().required("貓咪介紹必填"),category:le().required("貓咪品種必填").test("isCategory","貓咪品種錯誤",n=>A.includes(n)),sell:ra()}),{handleSubmit:I,isSubmitting:R,resetForm:M}=sa({validationSchema:D,initialValues:{name:"",price:0,description:"",category:"",sell:!0}}),C=W("name"),g=W("price"),b=W("description"),h=W("category"),B=W("sell"),V=p([]),$=p([]),z=I(async n=>{var a,m,t;if(!((a=V.value[0])!=null&&a.error)&&!(r.value.id.length===0&&V.value.length<1))try{const s=new FormData;s.append("name",n.name),s.append("age",n.price),s.append("description",n.description),s.append("breed",n.category),s.append("adoptable",n.sell),V.value.length>0&&s.append("image",V.value[0].file),r.value.id===""?await F.post("/product",s):await F.patch("/product/"+r.value.id,s),P({text:r.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"green"}}),w(),i(!0)}catch(s){console.log(s),P({text:((t=(m=s==null?void 0:s.response)==null?void 0:m.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),O=async n=>{var a,m;try{await F.delete(`/product/${n}`),P({text:"刪除成功",snackbarProps:{color:"green"}}),i(!0)}catch(t){console.log(t),P({text:((m=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:m.message)||"刪除失敗",snackbarProps:{color:"red"}})}},H=p(10),k=p([{key:"createdAt",order:"desc"}]),S=p(1),U=p([]),T=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"年齡",align:"center",sortable:!0,key:"age"},{title:"品種",align:"center",sortable:!0,key:"breed"},{title:"點檯",align:"center",sortable:!0,key:"adoptable"},{title:"操作",align:"center",sortable:!1,key:"action"}],y=p(!0),u=p(0),v=p(""),i=async n=>{var a,m,t,s;n&&(S.value=1),y.value=!0;try{const{data:x}=await F.get("/product/all",{params:{page:S.value,itemsPerPage:H.value,sortBy:((a=k.value[0])==null?void 0:a.key)||"createdAt",sortOrder:((m=k.value[0])==null?void 0:m.order)||"desc",search:v.value}});U.value.splice(0,U.value.length,...x.result.data),u.value=x.result.total}catch(x){console.log(x),P({text:((s=(t=x==null?void 0:x.response)==null?void 0:t.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}y.value=!1};return i(),(n,a)=>{const m=ta("vue-file-agent");return de(),Oe(_,null,[l(Fa,null,{default:f(()=>[l(ua,null,{default:f(()=>[l(oe,{cols:"12"},{default:f(()=>[Ma]),_:1}),l(oe,{cols:"12"},{default:f(()=>[l(Q,{color:"green",onClick:a[0]||(a[0]=t=>d(null))},{default:f(()=>[Z("新增貓咪")]),_:1})]),_:1}),l(oe,{cols:"12"},{default:f(()=>[l(Ra,{"items-per-page":H.value,"onUpdate:itemsPerPage":[a[4]||(a[4]=t=>H.value=t),a[7]||(a[7]=t=>i(!1))],"sort-by":k.value,"onUpdate:sortBy":[a[5]||(a[5]=t=>k.value=t),a[8]||(a[8]=t=>i(!1))],page:S.value,"onUpdate:page":[a[6]||(a[6]=t=>S.value=t),a[9]||(a[9]=t=>i(!1))],items:U.value,headers:T,loading:y.value,"items-length":u.value,search:v.value,hover:""},{top:f(()=>[l(te,{label:"搜尋",modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=t=>v.value=t),"append-icon":"mdi-magnify",onClickAppend:a[2]||(a[2]=t=>i(!0)),onKeydown:a[3]||(a[3]=Le(t=>i(!0),["enter"]))},null,8,["modelValue"])]),"item.image":f(({value:t})=>[l(_e,{src:t,height:"50px"},null,8,["src"])]),"item.sell":f(({value:t})=>[t?(de(),qe(la,{key:0,icon:"mdi-check"})):Ke("",!0)]),"item.action":f(({item:t})=>[l(Q,{icon:"mdi-pencil",variant:"text",color:"blue",onClick:s=>d(t)},null,8,["onClick"]),l(Q,{icon:"mdi-delete",variant:"text",color:"red",onClick:s=>O(t._id)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),l(Ze,{modelValue:r.value.open,"onUpdate:modelValue":a[17]||(a[17]=t=>r.value.open=t),persistent:"",width:"500"},{default:f(()=>[l(Da,{onSubmit:je(c(z),["prevent"]),disabled:c(R)},{default:f(()=>[l(Qe,null,{default:f(()=>[l(We,null,{default:f(()=>[Z(Je(r.value.id?"編輯貓咪":"新增貓咪"),1)]),_:1}),l(Xe,null,{default:f(()=>[l(te,{label:"名稱",modelValue:c(C).value.value,"onUpdate:modelValue":a[10]||(a[10]=t=>c(C).value.value=t),"error-messages":c(C).errorMessage.value},null,8,["modelValue","error-messages"]),l(te,{label:"年齡",type:"number",min:"0",modelValue:c(g).value.value,"onUpdate:modelValue":a[11]||(a[11]=t=>c(g).value.value=t),"error-messages":c(g).errorMessage.value},null,8,["modelValue","error-messages"]),l(Ca,{label:"品種",items:A,modelValue:c(h).value.value,"onUpdate:modelValue":a[12]||(a[12]=t=>c(h).value.value=t),"error-messages":c(h).errorMessage.value},null,8,["modelValue","error-messages"]),l(Ta,{label:"點檯",modelValue:c(B).value.value,"onUpdate:modelValue":a[13]||(a[13]=t=>c(B).value.value=t),"error-messages":c(B).errorMessage.value},null,8,["modelValue","error-messages"]),l(Aa,{label:"介紹",modelValue:c(b).value.value,"onUpdate:modelValue":a[14]||(a[14]=t=>c(b).value.value=t),"error-messages":c(b).errorMessage.value},null,8,["modelValue","error-messages"]),l(m,{modelValue:V.value,"onUpdate:modelValue":a[15]||(a[15]=t=>V.value=t),"raw-model-value":$.value,"onUpdate:rawModelValue":a[16]||(a[16]=t=>$.value=t),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:o},null,8,["modelValue","raw-model-value"])]),_:1}),l(Ye,null,{default:f(()=>[l(Q,{color:"red",loading:c(R),onClick:w},{default:f(()=>[Z("取消")]),_:1},8,["loading"]),l(Q,{color:"green",type:"submit",loading:c(R)},{default:f(()=>[Z("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])],64)}}};typeof pe=="function"&&pe($a);export{$a as default};