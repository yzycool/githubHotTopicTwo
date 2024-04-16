"use strict";!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["alltemplate-main"]=n():e["alltemplate-main"]=n()}(window,(()=>(window.webpackJsonp_alltemplate=window.webpackJsonp_alltemplate||[]).push([[792],{151:(e,n,t)=>{t.r(n),t.d(n,{bootstrap:()=>pe,mount:()=>fe,unmount:()=>he,update:()=>Ee});var r=t(4963),a=t(4828),l=t.n(a),o=t(6540),c=t(5338),u=t(4976),i=t(3933),s=t(7825),p=t(7412),m=t(6771),f=t.n(m),d=t(8106),h=t.n(d),y=t(1993),E=t.n(y),v=t(5054),b=t.n(v),A=t(6052),w=t.n(A),g=t(9829),_=t.n(g),k=t(1348),x=t.n(k),S=t(7156),O=t.n(S),P=t(7857);function U(e,n){var t=f()(e);if(h()){var r=h()(e);n&&(r=E()(r).call(r,(function(n){return b()(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t,r,a=null!=arguments[n]?arguments[n]:{};n%2?w()(t=U(Object(a),!0)).call(t,(function(n){(0,P.A)(e,n,a[n])})):_()?x()(e,_()(a)):w()(r=U(Object(a))).call(r,(function(n){O()(e,n,b()(a,n))}))}return e}var I=(0,p.Z0)({name:"app",initialState:{loginUser:"admin"},reducers:{setAppState:function(e,n){var t=n.payload.loginUser;return j(j({},e),{},{loginUser:t})}}});I.actions.setAppState;const K=I.reducer;var N=(0,p.U1)({reducer:{app:K},middleware:function(e){return e({serializableCheck:!1})}}),z=t(7767),R=t(8995),T=t(4181),B=t.n(T),W=t(49),Y=t(9978),q=t(5072),C=t.n(q),D=t(206),H=t.n(D),J=t(7659),M=t.n(J),Q=t(5056),Z=t.n(Q),L=t(540),F=t.n(L),G=t(1113),V=t.n(G),X=t(7679),$={};$.styleTagTransform=V(),$.setAttributes=Z(),$.insert=M().bind(null,"head"),$.domAPI=H(),$.insertStyleElement=F();C()(X.A,$);X.A&&X.A.locals&&X.A.locals;var ee=W.A.Header,ne=W.A.Content;const te=function(){var e=(0,z.zy)().pathname,n=(0,z.Zp)(),t=(0,o.useState)([]),r=(0,R.A)(t,2),a=r[0],l=r[1],c=(0,o.useMemo)((function(){var e,n;return le?B()(e=E()(n=le[0].children).call(n,(function(e){return!e.hidden}))).call(e,(function(e){return{key:e.path,label:o.createElement(u.N_,{to:e.path},e.name)}})):[]}),[le]);return(0,o.useEffect)((function(){"/"===e&&n("/popular"),l([e])}),[e]),o.createElement(W.A,null,o.createElement(ee,{style:{display:"flex",alignItems:"center",padding:0}},o.createElement(Y.A,{theme:"dark",mode:"horizontal",selectedKeys:a,items:c,style:{flex:1,minWidth:0,background:"#22272E"}})),o.createElement(ne,{style:{padding:"0 16px"}},o.createElement("div",{style:{height:"calc(100vh - 64px)"}},o.createElement(z.sv,null))))};const re=function(){return o.createElement("div",null,"路由不存在")};var ae=function(e){var n=(0,o.lazy)(e);return o.createElement(o.Suspense,{fallback:o.createElement(i.A,null)},o.createElement(n,null))},le=[{path:"/",element:o.createElement(te,null),errorElement:o.createElement(re,null),children:[{path:"/popular",element:ae((function(){return Promise.all([t.e(982),t.e(641)]).then(t.bind(t,1641))})),name:"github热门项目"},{path:"/battle",element:ae((function(){return Promise.all([t.e(982),t.e(312)]).then(t.bind(t,312))})),name:"对战"},{path:"/battleResult",element:ae((function(){return Promise.all([t.e(982),t.e(929)]).then(t.bind(t,6929))})),name:"对战结果",hidden:!0}]}];const oe=function(){var e=(0,o.useState)([]),n=(0,R.A)(e,2),t=n[0],r=n[1];return(0,o.useEffect)((function(){r(le)}),[]),t};const ce=function(){var e=oe();return(0,z.Ye)(e)};const ue=function(){return o.createElement(o.StrictMode,null,o.createElement(o.Suspense,{fallback:o.createElement(i.A,null)},o.createElement(s.Kq,{store:N},o.createElement(u.Kd,{basename:(window.__POWERED_BY_QIANKUN__,"/githubHotTopicTwo/")},o.createElement(ce,null)))))};var ie=null,se=function(e){var n=e.container;(ie=c.createRoot(n?n.querySelector("#root"):document.getElementById("root"))).render(o.createElement(ue,null))};function pe(){return me.apply(this,arguments)}function me(){return(me=(0,r.A)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("react app bootstraped");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){return de.apply(this,arguments)}function de(){return(de=(0,r.A)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null==(t=n.setLoading)||t(!1),se(n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){return ye.apply(this,arguments)}function ye(){return(ye=(0,r.A)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie.unmount();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ee(e){return ve.apply(this,arguments)}function ve(){return(ve=(0,r.A)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.dispatch({type:"app/setAppState",payload:n});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.__POWERED_BY_QIANKUN__||se({})},7679:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(1601),a=t.n(r),l=t(6314),o=t.n(l)()(a());o.push([e.id,"/** @format */\nbody {\n  margin: 0;\n}\n",""]);const c=o}},e=>(e.O(0,[982],(()=>{return n=151,e(e.s=n);var n})),e.O())])));