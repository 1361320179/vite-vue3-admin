import{d as R,p as y,r as at,k as V,l as F,m as nt,j as c,c as d,s as E,u as H,cA as et,aZ as G,P as B,cB as rt,h as p,_ as z,g as ot,f as lt,b as it,bb as st,bc as ct,Q as ut,T as bt}from"./index.bfc8a675.js";import{i as dt}from"./isNumeric.7b623894.js";function q(e){var t=e.prefixCls,o=e.value,a=e.current,n=e.offset,m=n===void 0?0:n,r;return m&&(r={position:"absolute",top:"".concat(m,"00%"),left:0}),d("p",{style:r,class:E("".concat(t,"-only-unit"),{current:a})},[o])}function ft(e,t,o){for(var a=e,n=0;(a+10)%10!==t;)a+=o,n+=o;return n}var gt=R({name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup:function(t){var o=y(function(){return Number(t.value)}),a=y(function(){return Math.abs(t.count)}),n=at({prevValue:o.value,prevCount:a.value}),m=function(){n.prevValue=o.value,n.prevCount=a.value},r=V();return F(o,function(){clearTimeout(r.value),r.value=setTimeout(function(){m()},1e3)},{flush:"post"}),nt(function(){clearTimeout(r.value)}),function(){var f,i={},s=o.value;if(n.prevValue===s||Number.isNaN(s)||Number.isNaN(n.prevValue))f=[q(c(c({},t),{current:!0}))],i={transition:"none"};else{f=[];for(var b=s+10,u=[],g=s;g<=b;g+=1)u.push(g);var w=u.findIndex(function(v){return v%10===n.prevValue});f=u.map(function(v,h){var N=v%10;return q(c(c({},t),{value:N,offset:h-w,current:h===w}))});var x=n.prevCount<a.value?1:-1;i={transform:"translateY(".concat(-ft(n.prevValue,s,x),"00%)")}}return d("span",{class:"".concat(t.prefixCls,"-only"),style:i,onTransitionend:function(){return m()}},[f])}}}),vt=globalThis&&globalThis.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]]);return o},pt={prefixCls:String,count:B.any,component:String,title:B.any,show:Boolean},mt=R({name:"ScrollNumber",inheritAttrs:!1,props:pt,setup:function(t,o){var a=o.attrs,n=o.slots,m=H("scroll-number",t),r=m.prefixCls;return function(){var f,i=c(c({},t),a);i.prefixCls;var s=i.count,b=i.title;i.show;var u=i.component,g=u===void 0?"sup":u,w=i.class,x=i.style,v=vt(i,["prefixCls","count","title","show","component","class","style"]),h=c(c({},v),{style:x,"data-show":t.show,class:E(r.value,w),title:b}),N=s;if(s&&Number(s)%1===0){var j=String(s).split("");N=j.map(function(l,_){return d(gt,{prefixCls:r.value,count:Number(s),value:l,key:j.length-_},null)})}x&&x.borderColor&&(h.style=c(c({},x),{boxShadow:"0 0 0 1px ".concat(x.borderColor," inset")}));var O=et((f=n.default)===null||f===void 0?void 0:f.call(n));return O&&O.length?G(O,{class:E("".concat(r.value,"-custom-component"))},!1):d(g,h,{default:function(){return[N]}})}}});function T(e){return rt.indexOf(e)!==-1}var ht=globalThis&&globalThis.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]]);return o},yt=function(){return{prefix:String,color:{type:String},text:B.any,placement:{type:String,default:"end"}}},xt=R({name:"ABadgeRibbon",inheritAttrs:!1,props:yt(),slots:["text"],setup:function(t,o){var a=o.attrs,n=o.slots,m=H("ribbon",t),r=m.prefixCls,f=m.direction,i=y(function(){return T(t.color)}),s=y(function(){var b;return[r.value,"".concat(r.value,"-placement-").concat(t.placement),(b={},p(b,"".concat(r.value,"-rtl"),f.value==="rtl"),p(b,"".concat(r.value,"-color-").concat(t.color),i.value),b)]});return function(){var b,u,g=a.class,w=a.style,x=ht(a,["class","style"]),v={},h={};return t.color&&!i.value&&(v.background=t.color,h.color=t.color),d("div",z({class:"".concat(r.value,"-wrapper")},x),[(b=n.default)===null||b===void 0?void 0:b.call(n),d("div",{class:[s.value,g],style:c(c({},v),w)},[d("span",{class:"".concat(r.value,"-text")},[t.text||((u=n.text)===null||u===void 0?void 0:u.call(n))]),d("div",{class:"".concat(r.value,"-corner"),style:h},null)])])}}}),wt=function(){return{count:B.any,showZero:{type:Boolean,default:void 0},overflowCount:{type:Number,default:99},dot:{type:Boolean,default:void 0},prefixCls:String,scrollNumberPrefixCls:String,status:{type:String},size:{type:String,default:"default"},color:String,text:B.any,offset:Array,numberStyle:{type:Object,default:void 0},title:String}},Nt=R({name:"ABadge",Ribbon:xt,inheritAttrs:!1,props:wt(),slots:["text","count"],setup:function(t,o){var a=o.slots,n=o.attrs,m=H("badge",t),r=m.prefixCls,f=m.direction,i=y(function(){return t.count>t.overflowCount?"".concat(t.overflowCount,"+"):t.count}),s=y(function(){return t.status!==null&&t.status!==void 0||t.color!==null&&t.color!==void 0}),b=y(function(){return i.value==="0"||i.value===0}),u=y(function(){return t.dot&&!b.value}),g=y(function(){return u.value?"":i.value}),w=y(function(){var l=g.value===null||g.value===void 0||g.value==="";return(l||b.value&&!t.showZero)&&!u.value}),x=V(t.count),v=V(g.value),h=V(u.value);F([function(){return t.count},g,u],function(){w.value||(x.value=t.count,v.value=g.value,h.value=u.value)},{immediate:!0});var N=y(function(){var l;return l={},p(l,"".concat(r.value,"-status-dot"),s.value),p(l,"".concat(r.value,"-status-").concat(t.status),!!t.status),p(l,"".concat(r.value,"-status-").concat(t.color),T(t.color)),l}),j=y(function(){return t.color&&!T(t.color)?{background:t.color}:{}}),O=y(function(){var l;return l={},p(l,"".concat(r.value,"-dot"),h.value),p(l,"".concat(r.value,"-count"),!h.value),p(l,"".concat(r.value,"-count-sm"),t.size==="small"),p(l,"".concat(r.value,"-multiple-words"),!h.value&&v.value&&v.value.toString().length>1),p(l,"".concat(r.value,"-status-").concat(t.status),!!t.status),p(l,"".concat(r.value,"-status-").concat(t.color),T(t.color)),l});return function(){var l,_,D,P=t.offset,W=t.title,U=t.color,M=n.style,$=ot(a,t,"text"),C=r.value,k=x.value,S=lt((_=a.default)===null||_===void 0?void 0:_.call(a));S=S.length?S:null;var Y=!!(!w.value||a.count),I=function(){if(!P)return c({},M);var A={marginTop:dt(P[1])?"".concat(P[1],"px"):P[1]};return f.value==="rtl"?A.left="".concat(parseInt(P[0],10),"px"):A.right="".concat(-parseInt(P[0],10),"px"),c(c({},A),M)}(),J=W!=null?W:typeof k=="string"||typeof k=="number"?k:void 0,K=Y||!$?null:d("span",{class:"".concat(C,"-status-text")},[$]),X=it(k)==="object"||k===void 0&&a.count?G(k!=null?k:(D=a.count)===null||D===void 0?void 0:D.call(a),{style:I},!1):null,Q=E(C,(l={},p(l,"".concat(C,"-status"),s.value),p(l,"".concat(C,"-not-a-wrapper"),!S),p(l,"".concat(C,"-rtl"),f.value==="rtl"),l),n.class);if(!S&&s.value){var L=I.color;return d("span",z(z({},n),{},{class:Q,style:I}),[d("span",{class:N.value,style:j.value},null),d("span",{style:{color:L},class:"".concat(C,"-status-text")},[$])])}var tt=st(S?"".concat(C,"-zoom"):"",{appear:!1}),Z=c(c({},I),t.numberStyle);return U&&!T(U)&&(Z=Z||{},Z.background=U),d("span",z(z({},n),{},{class:Q}),[S,d(ct,tt,{default:function(){return[ut(d(mt,{prefixCls:t.scrollNumberPrefixCls,show:Y,class:O.value,count:v.value,title:J,style:Z,key:"scrollNumber"},{default:function(){return[X]}}),[[bt,Y]])]}}),K])}}});export{Nt as B,xt as R};
