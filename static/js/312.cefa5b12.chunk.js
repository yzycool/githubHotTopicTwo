"use strict";(window.webpackJsonp_alltemplate=window.webpackJsonp_alltemplate||[]).push([[312],{312:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var a=t(4963),r=t(8995),l=t(8971),i=t.n(l),o=t(8103),c=t.n(o),s=t(4828),u=t.n(s),p=t(6540),d=t(7767),b=t(1368);t(5999);const f=function(){var e="https://api.github.com/users",n=(0,p.useState)(""),t=(0,r.A)(n,2),l=t[0],o=t[1],s=(0,p.useState)(""),f=(0,r.A)(s,2),m=f[0],x=f[1],g=(0,p.useState)(!0),h=(0,r.A)(g,2),v=h[0],w=h[1],E=(0,p.useState)(!0),y=(0,r.A)(E,2),k=y[0],A=y[1],N=(0,p.useState)(null),z=(0,r.A)(N,2),S=z[0],C=z[1],j=(0,p.useState)(null),T=(0,r.A)(j,2),P=T[0],_=T[1],D=(0,p.useState)(!1),J=(0,r.A)(D,2),K=J[0],O=J[1],F=(0,d.Zp)(),H=function(){var n=(0,a.A)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,O(!0),n.next=4,(0,b.A)(e,"/".concat(l));case 4:t=n.sent,C(t),w(!1),O(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),O(!1);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),I=function(){var n=(0,a.A)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,O(!0),n.next=4,(0,b.A)(e,"/".concat(m));case 4:t=n.sent,_(t),A(!1),O(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),O(!1);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),R=function(e,n){"Enter"===e.key&&(1===n?H():I())};return p.createElement("div",{className:"battle-box"},p.createElement("h1",null,"操作流程"),p.createElement("div",{className:"battle-process"},p.createElement("div",null,"第一步：输入用户名称，点击提交按钮，获取用户基本信息"),p.createElement("div",null,"第二步：当两个用户信息都获取了，会出现battle按钮，按下battle按钮"),p.createElement("div",null,"第三步：按下battle按钮后，会跳转到查看结果页面")),p.createElement("div",{className:"battle-operate"},p.createElement("div",{className:"battle-input-box"},p.createElement("div",{className:"person-num"},"Player One"),v&&p.createElement("div",{className:"input-btn-box"},p.createElement("input",{type:"text",value:l,onChange:function(e){o(e.target.value)},onKeyDown:function(e){return R(e,1)}}),p.createElement("button",{onClick:H,disabled:!c()(l).call(l),type:"button"},"提交1")),S&&p.createElement("div",{className:"show-user-box"},p.createElement("div",{className:"show-user-box-left"},p.createElement("img",{src:null==S?void 0:S.avatar_url,alt:""}),p.createElement("p",null,null==S?void 0:S.login)),p.createElement("button",{type:"button",onClick:function(){C(null),w(!0)}},"关闭1"))),p.createElement("div",{className:"battle-input-box"},p.createElement("div",{className:"person-num"},"Player Two"),k&&p.createElement("div",{className:"input-btn-box"},p.createElement("input",{type:"text",value:m,onChange:function(e){x(e.target.value)},onKeyDown:function(e){return R(e,2)}}),p.createElement("button",{onClick:I,disabled:!c()(m).call(m),type:"button"},"提交2")),P&&p.createElement("div",{className:"show-user-box"},p.createElement("div",{className:"show-user-box-left"},p.createElement("img",{src:P.avatar_url,alt:""}),p.createElement("p",null,P.login)),p.createElement("button",{onClick:function(){_(null),A(!0)},type:"button"},"关闭2")))),p.createElement("div",{className:"battle-button"},!v&&!k&&p.createElement("div",null,p.createElement("button",{onClick:function(){var e;w(!0),A(!0),o(""),x(""),F(i()(e="/battleResult?personOne=".concat(l,"&personTwo=")).call(e,m))},type:"button"},"battle"))),K&&p.createElement("div",{className:"loading"},"加载用户信息中..."))}},1368:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(4963),r=t(4828),l=t.n(r),i=t(8971),o=t.n(i);function c(){return c=(0,a.A)(l().mark((function e(n,t){var a,r,i,c,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:{},e.prev=1,e.next=4,fetch(o()(r="".concat(n)).call(r,t),a);case 4:if((i=e.sent).ok){e.next=7;break}throw new Error("HTTP error! status: ".concat(i.status));case 7:return e.next=9,i.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:throw e.prev=13,e.t0=e.catch(1),console.error("Fetch Error:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),c.apply(this,arguments)}const s=function(e,n){return c.apply(this,arguments)}},5440:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(1601),r=t.n(a),l=t(6314),i=t.n(l)()(r());i.push([e.id,"/** @format */\n.battle-box {\n  text-align: center;\n}\n.battle-process {\n  display: flex;\n  padding: 40px 20%;\n  justify-content: space-around;\n}\n.battle-process div {\n  width: 150px;\n  height: 150px;\n  padding: 14px;\n  align-items: center;\n  background-image: linear-gradient(160deg, #ccfbfc, #c5eafe, #bdd3ff);\n}\n.battle-operate {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n.battle-operate .battle-input-box {\n  width: 50%;\n  padding: 14px;\n}\n.battle-operate .person-num {\n  font-size: 16px;\n  margin-bottom: 14px;\n}\n.battle-button {\n  width: 100px;\n  height: 30px;\n  line-height: 30px;\n}\n.show-user-box {\n  display: flex;\n  padding: 14px;\n  background: #f2f2f2;\n  justify-content: space-between;\n  font-size: 24px;\n}\n.show-user-box .show-user-box-left {\n  display: flex;\n}\n.show-user-box img {\n  width: 100px;\n  height: 100px;\n  margin-right: 24px;\n}\n.battle-button {\n  margin: 12px auto;\n  width: 100%;\n}\n.battle-button button {\n  width: 200px;\n  line-height: 40px;\n  border: none;\n  background-image: linear-gradient(160deg, #ccfbfc, #c5eafe, #bdd3ff);\n}\n.battle-result-box {\n  text-align: center;\n}\n.battle-user-box {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n.battle-user-item {\n  padding: 14px;\n  box-sizing: border-box;\n  width: 20%;\n  background-image: linear-gradient(160deg, #ccfbfc, #c5eafe, #bdd3ff);\n}\n.battle-user-item img {\n  width: 100px;\n  height: 100px;\n  margin: 14px auto;\n}\n.battle-result-btn-box button {\n  margin: 44px;\n  padding: 24px 48px;\n  border: 1px solid #ccc;\n  background-image: linear-gradient(160deg, #ccfbfc, #c5eafe, #bdd3ff);\n}\n.loading {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 24px;\n  margin-top: 20px;\n}\n.input-btn-box input {\n  width: 50%;\n  line-height: 40px;\n  margin-right: 14px;\n  font-size: 15px;\n}\n.input-btn-box button {\n  width: 100px;\n  line-height: 40px;\n  border: none;\n  background-image: linear-gradient(160deg, #ccfbfc, #c5eafe, #bdd3ff);\n  font-size: 16px;\n  font-weight: 500;\n}\n.draw-text {\n  display: flex;\n  align-items: center;\n  font-size: 28px;\n  font-weight: 600;\n  color: green;\n}\n",""]);const o=i},5999:(e,n,t)=>{var a=t(5072),r=t.n(a),l=t(206),i=t.n(l),o=t(7659),c=t.n(o),s=t(5056),u=t.n(s),p=t(540),d=t.n(p),b=t(1113),f=t.n(b),m=t(5440),x={};x.styleTagTransform=f(),x.setAttributes=u(),x.insert=c().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=d();r()(m.A,x),m.A&&m.A.locals&&m.A.locals}}]);