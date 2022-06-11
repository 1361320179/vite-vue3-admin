var F=Object.defineProperty,C=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var n=(e,u,l)=>u in e?F(e,u,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[u]=l,d=(e,u)=>{for(var l in u||(u={}))w.call(u,l)&&n(e,l,u[l]);if(s)for(var l of s(u))P.call(u,l)&&n(e,l,u[l]);return e},c=(e,u)=>C(e,S(u));import{J as g,d as k,Y as p,N as x,O as A,c as o,a7 as t,$ as B,U as r,V as N,W as y,a8 as i,ai as D}from"./index.bfc8a675.js";import{A as E}from"./index.fbe24a75.js";import{u as T}from"./useForm.921e8cc4.js";import"./schema-form.c7aa7552.js";import"./index.0a5789cb.js";const W=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},vShow:({formModel:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},vShow:({formModel:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({formModel:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({formModel:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},componentProps:({formInstance:e})=>({onChange(u){requestIdleCallback(()=>{u?e==null||e.validateFields():e==null||e.clearValidate()})}}),labelWidth:200}];const V=e=>(N("data-v-1c5d09ed"),e=e(),y(),e),Y=V(()=>r("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vite-vue3-admin/blob/main/src/views/demos/form/use-form/index.vue"}," \u67E5\u770B\u6E90\u7801 ",-1)),q={class:"mb-4"},M=i(" \u66F4\u6539\u5B57\u6BB53label "),L=i(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label "),O=i(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),J=i(" \u5220\u9664\u5B57\u6BB511 "),U={name:"DemosFormDynamicForm"},$=k(c(d({},U),{setup(e){const[u,l]=T({labelWidth:120,schemas:W,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function _(){l.validate().then(()=>D.success("\u9A8C\u8BC1\u901A\u8FC7\uFF01"))}function m(){l==null||l.updateSchema({field:"field3",label:"\u5B57\u6BB53 New"})}function f(){l==null||l.updateSchema([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function b(){l==null||l.appendSchemaByField({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function h(){l==null||l.removeSchemaByFiled("field11")}return(j,z)=>{const a=p("a-button"),v=p("a-card");return x(),A("div",null,[o(B(E),{message:"useForm\u793A\u4F8B",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:t(()=>[Y]),_:1}),r("div",q,[o(a,{class:"mr-2",onClick:m},{default:t(()=>[M]),_:1}),o(a,{class:"mr-2",onClick:f},{default:t(()=>[L]),_:1}),o(a,{class:"mr-2",onClick:b},{default:t(()=>[O]),_:1}),o(a,{class:"mr-2",onClick:h},{default:t(()=>[J]),_:1})]),o(v,null,{default:t(()=>[o(B(u),{onSubmit:_})]),_:1})])}}}));var I=g($,[["__scopeId","data-v-1c5d09ed"]]);export{I as default};
