import{o as x,c as S,a as c,F as N,E as b,P as w,m as B,u as E,b as A,d as O,w as g,e as m,f,i as k,t as C,g as _,h as D,j as V,k as F,l as y,r as h,_ as M,n as P,p as z,q as I}from"./pnpm-33ed4502.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const J={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"};function L(e,t){return x(),S("svg",J,t[0]||(t[0]=[c("path",{fill:"currentColor",d:"M544 864V672h128L512 480L352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.81 239.81 0 0 1 512 192a239.87 239.87 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z"},null,-1)]))}const T={name:"ep-upload-filled",render:L},W=(e,t=1e3)=>{let s=null;return function(){let l=this,o=arguments;s&&clearTimeout(s),s=setTimeout(function(){e.apply(l,o)},t)}};function R(e){const{workbook:t,fileName:s}=e;t.xlsx.writeBuffer().then(l=>{const o=new Blob([l],{type:""});N.saveAs(o,s)})}function U(e){const{file:t,filter:s=()=>!0,map:l=o=>o}=e;return new Promise(o=>{const a=[],n=W(function(){o(a.filter(s).map(l))},50),i=new b.Workbook;i.xlsx.load(t).then(()=>{i.worksheets[0].eachRow({includeEmpty:!0},(r,u)=>{a.push(r.values),n()})})})}function $(e){const{file:t,filter:s=()=>!0,map:l=o=>o}=e;return new Promise(o=>{w.parse(t,{encoding:"gb2312",complete:a=>{const n=a.data;o(n.filter(s).map(l))}})})}const H={style:{display:"flex","justify-content":"space-between","align-items":"center"}},v={__name:"index",props:B({name:String,accept:{type:String,default:".xlsx, .xls, .csv"},filter:{type:Function,default:e=>!0},map:{type:Function,default:e=>e}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,s=E(e,"modelValue"),l=A(()=>s.value.length>0);async function o(a){const n={file:a,filter:t.filter,map:t.map},i=a.name;return(i.endsWith("xlsx")||i.endsWith("xls"))&&(s.value=await U(n)),i.endsWith("csv")&&(s.value=await $(n)),console.log("RR",JSON.stringify(s.value)),!1}return(a,n)=>{const i=T,p=D,r=V,u=F;return x(),O(u,{drag:"",accept:e.accept,"before-upload":o},{tip:g(()=>[c("div",H,[m(r,{disabled:"",modelValue:f(l),"onUpdate:modelValue":n[0]||(n[0]=d=>k(l)?l.value=d:null)},null,8,["modelValue"]),c("span",null,C(e.name),1)])]),default:g(()=>[m(p,{size:"3em"},{default:g(()=>[m(i)]),_:1}),n[1]||(n[1]=c("div",{class:"el-upload__text"},[_(" 拖拽上传 "),c("em",null,"点击上传")],-1))]),_:1},8,["accept"])}}},K={set(e,t){sessionStorage&&e!=null&&t!=null&&sessionStorage.setItem(e,t)},get(e){return!sessionStorage||e==null?null:sessionStorage.getItem(e)},setJSON(e,t){t!=null&&this.set(e,JSON.stringify(t))},getJSON(e){const t=this.get(e);if(t!=null)return JSON.parse(t)},remove(e){sessionStorage.removeItem(e)}},X={set(e,t){localStorage&&e!=null&&t!=null&&localStorage.setItem(e,t)},get(e){return!localStorage||e==null?null:localStorage.getItem(e)},setJSON(e,t){t!=null&&this.set(e,JSON.stringify(t))},getJSON(e){const t=this.get(e);if(t!=null)return JSON.parse(t)},remove(e){localStorage.removeItem(e)}},q={session:K,local:X},G={msg(e){y.info(e)},msgError(e){y.error(e)},msgSuccess(e){y.success(e)},msgWarning(e){y.warning(e)}},j={ADMIN_TOKEN:"ADMIN-TOKEN",H5:"h5",WX_XCX:"miniprogram",APP_PLUS:"plus"};h({currentCameraDeviceId:void 0,allCameraDevices:[]});function Z(){const e=h(!1),t=h({});return{open:e,Cache:q,Constants:j,Modal:G,refsMap:t}}function Q(e){const{workbook:t,systemDataAmountGroup:s,zhiFuBaoData:l}=e,o=t.addWorksheet("支付宝");o.properties.defaultRowHeight=20,o.columns=[{header:"交易号",key:"tradingNumber",width:40},{header:"付款时间",key:"payTime",width:25},{header:"交易对方",key:"tradingTarget",width:30},{header:"金额",key:"amount",width:10},{header:"收/支 ",key:"incomeExpenditure",width:10},{header:"原因 ",key:"reason",width:30}];const a=l.filter(n=>s[n[9]]?!1:(console.error("支付宝数据没找到相同金额",n),n.reason="没找到相同金额",!0)).map(n=>({tradingNumber:n[0],payTime:n[3],tradingTarget:n[7],amount:n[9],incomeExpenditure:n[10],reason:n.reason}));o.addRows(a)}const Y={style:{display:"flex",height:"100vh","flex-direction":"column",gap:"2em",padding:"1em","box-sizing":"border-box"}},ee={style:{display:"flex",gap:"20px"}},te={style:{display:"flex",gap:"20px"}},oe={style:{display:"flex","justify-content":"center",gap:"2em"}},ne={__name:"App",setup(e){const{Modal:t}=Z(),s=h([]),l=h({zhiFuBaoData:[]});function o(){s.value=[],l.value.zhiFuBaoData=[],t.msg("已清空")}function a(){const n=M.groupBy(s.value,"amount"),i=new b.Workbook;Q({workbook:i,systemDataAmountGroup:n,zhiFuBaoData:l.value.zhiFuBaoData}),R({workbook:i,fileName:"参考.xlsx"})}return(n,i)=>{const p=P;return x(),S("div",Y,[c("div",ee,[m(v,{name:"现金银行",modelValue:f(s),"onUpdate:modelValue":i[0]||(i[0]=r=>k(s)?s.value=r:null),filter:r=>{var u,d;return((d=(u=r==null?void 0:r[1])==null?void 0:u.trim)==null?void 0:d.call(u))==="Indeterminate"},map:r=>({date:r[2],accountName:r[5],incomeAmount:r[9],disburseAmount:r[10],orderRemark:r[13],amount:r[9]+r[10],dateStr:f(z)(r[2],"yyyy-MM-dd")})},null,8,["modelValue","filter","map"])]),c("div",te,[m(v,{name:"支付宝",modelValue:f(l).zhiFuBaoData,"onUpdate:modelValue":i[1]||(i[1]=r=>f(l).zhiFuBaoData=r),filter:r=>{var u,d;return((d=(u=r==null?void 0:r[11])==null?void 0:u.trim)==null?void 0:d.call(u))==="交易成功"}},null,8,["modelValue","filter"])]),c("div",oe,[m(p,{size:"large",onClick:o},{default:g(()=>i[2]||(i[2]=[_("清 空")])),_:1}),m(p,{type:"primary",size:"large",onClick:a},{default:g(()=>i[3]||(i[3]=[_("导 出")])),_:1})])])}}};I(ne).mount("#app");
