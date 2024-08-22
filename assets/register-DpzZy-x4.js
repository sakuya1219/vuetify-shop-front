import{a9 as k,o as C,ac as S,w as l,b as r,aR as M,ab as e,aP as n,ak as b,Q as B,af as F,ay as U,aX as q}from"./index-C5QfvmIE.js";import{c as A,a as u,f as N,u as P,e as m}from"./vee-validate.esm-BURE73Cp.js";import{v as f}from"./index-D8UDp0md.js";import{V as v}from"./VCol-tD9voUOp.js";import{V as R}from"./VDivider-NQIGA0Eq.js";import{V as $}from"./VForm-D956QFNU.js";import{V as E}from"./VRow-JzsSliHv.js";import{V as T}from"./VContainer-DaGjaZnN.js";const D=b("h1",{class:"text-center"},"註冊",-1),O={class:"text-center"},L={__name:"register",setup(Q){const{api:w}=U(),x=q(),g=k(),h=A({account:u().required("使用者帳號必填").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符").test("isAlphanumeric","使用者帳號格式錯誤",o=>f.isAlphanumeric(o)),email:u().required("使用者信箱必填").test("isEmail","使用者信箱格式錯誤",o=>f.isEmail(o)),password:u().required("使用者密碼必填").min(4,"使用者密碼長度不符").max(20,"使用者密碼長度不符"),passwordConfirm:u().oneOf([N("password")],"密碼不一致")}),{handleSubmit:_,isSubmitting:V}=P({validationSchema:h}),i=m("account"),d=m("email"),c=m("password"),p=m("passwordConfirm"),y=_(async o=>{var a,s;try{await w.post("/user",{account:o.account,email:o.email,password:o.password}),g({text:"註冊成功",snackbarProps:{color:"green"}}),x.push("/login")}catch(t){console.log(t),g({text:((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}});return(o,a)=>(C(),S(T,null,{default:l(()=>[r(E,null,{default:l(()=>[r(v,{cols:"12"},{default:l(()=>[D]),_:1}),r(R),r(v,{cols:"12"},{default:l(()=>[r($,{onSubmit:M(e(y),["prevent"]),disabled:e(V)},{default:l(()=>[r(n,{label:"帳號",minlength:"4",maxlength:"20",counter:"",modelValue:e(i).value.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e(i).value.value=s),"error-messages":e(i).errorMessage.value},null,8,["modelValue","error-messages"]),r(n,{label:"信箱",type:"email",modelValue:e(d).value.value,"onUpdate:modelValue":a[1]||(a[1]=s=>e(d).value.value=s),"error-messages":e(d).errorMessage.value},null,8,["modelValue","error-messages"]),r(n,{label:"密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:e(c).value.value,"onUpdate:modelValue":a[2]||(a[2]=s=>e(c).value.value=s),"error-messages":e(c).errorMessage.value},null,8,["modelValue","error-messages"]),r(n,{label:"確認密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:e(p).value.value,"onUpdate:modelValue":a[3]||(a[3]=s=>e(p).value.value=s),"error-messages":e(p).errorMessage.value},null,8,["modelValue","error-messages"]),b("div",O,[r(B,{type:"submit",color:"green",loading:e(V)},{default:l(()=>[F("註冊")]),_:1},8,["loading"])])]),_:1},8,["onSubmit","disabled"])]),_:1})]),_:1})]),_:1}))}};export{L as default};
