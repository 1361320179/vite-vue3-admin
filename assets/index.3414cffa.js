var x=Object.defineProperty,_=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var p=(n,t,e)=>t in n?x(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,f=(n,t)=>{for(var e in t||(t={}))C.call(t,e)&&p(n,e,t[e]);if(d)for(var e of d(t))S.call(t,e)&&p(n,e,t[e]);return n},m=(n,t)=>_(n,w(t));var g=(n,t,e)=>new Promise((s,i)=>{var a=r=>{try{l(e.next(r))}catch(c){i(c)}},o=r=>{try{l(e.throw(r))}catch(c){i(c)}},l=r=>r.done?s(r.value):Promise.resolve(r.value).then(a,o);l((e=e.apply(n,t)).next())});import{b5 as k,cr as b,cs as I,l as O,o as y,I as E,d as M,N as q,Z as v,$ as h,c as u,aG as B,a8 as F,ab as N}from"./index.bfc8a675.js";import{u as j}from"./dynamic-table.68b23df4.js";import"./VerticalRightOutlined.82a58a5b.js";import"./schema-form.c7aa7552.js";import"./index.0a5789cb.js";function D(){return k({url:b.list,method:"get"})}function U(n){return k({url:b.kick,method:"post",data:n})}const V=(n={})=>{const t=I().client,e=new Map,s=()=>{Object.keys(n).forEach(a=>{if(t){const o=n[a];e.set(a,o),t.subscribe(a,o)}})},i=()=>{Object.keys(n).forEach(a=>{t&&e.has(a)&&t.unsubscribe(a,e.get(a))})};O(()=>t,s),y(s),E(i)},$={name:"SystemMonitorOnline"};var Z=M(m(f({},$),{setup(n){const[t,e]=j();V({connect(){e==null||e.reload()},online(){e==null||e.reload()},offline(){e==null||e.reload()}});const s=[{title:"#",dataIndex:"id",width:80,align:"center",hideInSearch:!0},{title:"\u7528\u6237\u540D",dataIndex:"username",align:"center",bodyCell:({record:a})=>u(N,null,[u("span",{class:"pr-16px"},[a.username]),a.isCurrent&&u(B,{color:"red"},{default:()=>[F("\u5F53\u524D")]})])},{title:"\u767B\u5F55IP",dataIndex:"ip",width:140,align:"center"},{title:"\u767B\u5F55\u65F6\u95F4",dataIndex:"time",align:"center"},{title:"\u64CD\u4F5C\u7CFB\u7EDF",dataIndex:"os",align:"center"},{title:"\u6D4F\u89C8\u5668",dataIndex:"browser",align:"center"},{title:"\u64CD\u4F5C",dataIndex:"$action",align:"center",actions:({record:a})=>[{label:"\u4E0B\u7EBF",auth:"sys.online.kick",disabled:a.disable,popConfirm:{title:"\u786E\u5B9A\u4E0B\u7EBF\u8BE5\u7528\u6237\u5417?",onConfirm:()=>i(a)}}]}],i=a=>g(this,null,function*(){yield U({id:a.id})});return(a,o)=>(q(),v(h(t),{ref:"dynamicTableRef","header-title":"\u5728\u7EBF\u7528\u6237","title-tooltip":"\u8FD9\u662F\u771F\u5B9E\u64CD\u4F5C\uFF0C\u8BF7\u4E0D\u8981\u968F\u610F\u5C06\u5176\u4ED6\u7528\u6237\u8E22\u4E0B\u7EBF\u3002","data-request":h(D),columns:s},null,8,["data-request"]))}}));export{Z as default};
