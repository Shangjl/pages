import{r as c,s as A,w as I,c as P,o as E,a as b,b as w,d as M,u as i,T as U,e as x,f as h,n as B,i as N,E as R,g,h as _,j as T,k as J,l as O,m as L,p as v,q as V}from"./.pnpm-e324e1c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const X={style:{border:"1px solid #ccc"}},$={__name:"index",props:{modelValue:{},showToolbar:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},height:{default:"500px"}},setup(e){const t=e,a=c("default"),n=A(),o=c("<p>hello</p>");I(()=>t.modelValue,r=>{o.value=r},{immediate:!0});const s={},l=P(()=>({height:t.height})),p={readOnly:t.readonly,placeholder:"请输入内容..."};E(()=>{const r=n.value;r!=null&&r.destroy()});const u=r=>{n.value=r};return(r,d)=>(b(),w("div",X,[e.showToolbar?(b(),M(i(U),{key:0,style:{"border-bottom":"1px solid #ccc"},editor:i(n),defaultConfig:s,mode:i(a)},null,8,["editor","mode"])):x("",!0),h(i(R),{style:B(i(l)),modelValue:i(o),"onUpdate:modelValue":d[0]||(d[0]=f=>N(o)?o.value=f:null),defaultConfig:p,mode:i(a),onOnCreated:u},null,8,["style","modelValue","mode"])]))}},k={set(e,t){sessionStorage&&e!=null&&t!=null&&sessionStorage.setItem(e,t)},get(e){return!sessionStorage||e==null?null:sessionStorage.getItem(e)},setJSON(e,t){t!=null&&this.set(e,JSON.stringify(t))},getJSON(e){const t=this.get(e);if(t!=null)return JSON.parse(t)},remove(e){sessionStorage.removeItem(e)}},D={set(e,t){localStorage&&e!=null&&t!=null&&localStorage.setItem(e,t)},get(e){return!localStorage||e==null?null:localStorage.getItem(e)},setJSON(e,t){t!=null&&this.set(e,JSON.stringify(t))},getJSON(e){const t=this.get(e);if(t!=null)return JSON.parse(t)},remove(e){localStorage.removeItem(e)}},K={session:k,local:D},j={msg(e){g.info(e)},msgError(e){g.error(e)},msgSuccess(e){g.success(e)},msgWarning(e){g.warning(e)}},q={ADMIN_TOKEN:"ADMIN-TOKEN",H5:"h5",WX_XCX:"miniprogram",APP_PLUS:"plus"};c({currentCameraDeviceId:void 0,allCameraDevices:[]});function y(){const e=c(!1),t=c({});return{open:e,Cache:K,Constants:q,Modal:j,refsMap:t}}const{Cache:z,Constants:W}=y();_.defaults.headers["Content-Type"]="application/json;charset=utf-8";const C=_.create({baseURL:window["AXIOS-BASE-API"],timeout:1e4});C.interceptors.request.use(e=>(e.baseURL=window["AXIOS-BASE-API"]||e.baseURL,e.headers.Authorization="Bearer "+z.session.getJSON(W.ADMIN_TOKEN),e),e=>Promise.reject(e));C.interceptors.response.use(e=>e.data,e=>(console.error("err"+e),Promise.reject(e)));function H(){return C({method:"get",url:"/pulltab/show/confidentialityAgreement"})}function F(e){let t=arguments[1]||window.location.href,a=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=t.substr(t.indexOf("?")+1).match(a);if(n!==null){let o=decodeURI(n[2]).indexOf("#");return o!==-1?decodeURI(n[2]).substring(0,o):decodeURI(n[2])}else return""}const{Constants:S}=y(),{uni:m}=window;function G(){async function e(t){let a;await m.getEnv(function(n){a=Object.keys(n)[0]}),setTimeout(()=>{switch(a){case S.H5:m.postMessage({data:{action:t}});break;case S.WX_XCX:m.postMessage({data:{action:t}}),m.navigateBack();break;case S.APP_PLUS:m.postMessage({data:{action:t}});break}},200)}return{uniPostMsg:e}}function Q(){const{Cache:e,Constants:t,Modal:a}=y(),n=F("params")||encodeURIComponent(JSON.stringify({})),{token:o,baseURL:s="https://auto.hsdzipper.cn/prod-api/hsd-crm",data:l}=JSON.parse(decodeURIComponent(n));return e.session.setJSON(t.ADMIN_TOKEN,o),window["AXIOS-BASE-API"]=s,l}const Y={style:{display:"flex","align-items":"center","justify-content":"center",gap:"2em",height:"4rem"}},Z={__name:"App",setup(e){const{Modal:t}=y(),a=c(!1);T(()=>{Q(),H().then(u=>{n.value=u.data.zh}).catch(()=>{t.msgError("获取拉片协议失败，请联系管理员"),a.value=!0})});const n=c(void 0),{uniPostMsg:o}=G();function s(){p("agree")}function l(){t.msgError("拒绝同意协议将无法查看"),setTimeout(()=>{p("cancel")},1500)}async function p(u){await o(u)}return(u,r)=>{const d=L;return b(),w("div",null,[h($,{"show-toolbar":!1,readonly:"",modelValue:i(n),"onUpdate:modelValue":r[0]||(r[0]=f=>N(n)?n.value=f:null),height:"calc(100vh - 5em)"},null,8,["modelValue"]),J("div",Y,[h(d,{disabled:i(a),onClick:r[1]||(r[1]=f=>s()),style:{"background-color":"#152e3b",color:"white"}},{default:O(()=>[v(" 同意 ")]),_:1},8,["disabled"]),h(d,{onClick:r[2]||(r[2]=f=>l()),style:{"background-color":"#212121",color:"white"}},{default:O(()=>[v(" 取消")]),_:1})])])}}};V(Z).mount("#app");
