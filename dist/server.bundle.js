(()=>{var e={223:e=>{e.exports={getUserInfo:function(e){const{body:o,header:r}=e.request;console.log(o),console.log(r);const{name:t,age:s}=o,{role:n}=r;o&&t&&s?n&&"admin"===n?e.body={code:200,data:{...o},msg:"上传成功"}:(e.status=401,e.body={code:401,msg:"unauthorized post"}):(e.status=404,e.body={code:404,msg:"name与age不能为空"})}}},965:(e,o,r)=>{const t=r(733),s=r(223),n=new t;n.prefix("/api"),n.post("/user",s.getUserInfo),e.exports=n},733:e=>{"use strict";e.exports=require("koa-router")}},o={};function r(t){var s=o[t];if(void 0!==s)return s.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,r),n.exports}r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";const e=require("koa");var o=r.n(e);const t=require("koa-body");var s=r.n(t);const n=require("path");var a=r.n(n);const c=require("koa-helmet");var u=r.n(c);const i=require("koa-static");var d=r.n(i);const p=require("koa-combine-routers");var l=r.n(p),m=r(733),v=r.n(m);const g=new class{constructor(){}async demo(e){e.body={msg:"body message"}}},y=new(v());y.get("/demo",g.demo);const b=y;var q=r(965),f=r.n(q);const k=l()(b,f()),x=require("koa-json");var h=r.n(x);const w=require("@koa/cors");var j=r.n(w);const _=require("koa-compose");var O=r.n(_);const I=new(o()),P=O()([s()(),d()(a().join(__dirname,"../public")),j()(),h()({pretty:!1,param:"pretty"}),u()()]);I.use(P),I.use(k()),console.log("listen success 3001"),I.listen(3001)})()})();