(window.webpackJsonp=window.webpackJsonp||[]).push([[45,10,14],{562:function(t,e,r){var content=r(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7dd53011",content,!0,{sourceMap:!1})},564:function(t,e,r){"use strict";r(562)},565:function(t,e,r){var o=r(15)(!1);o.push([t.i,".flexColumn{display:flex;flex-direction:column;align-items:center}",""]),t.exports=o},566:function(t,e,r){var content=r(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("bb35a8d6",content,!0,{sourceMap:!1})},567:function(t,e,r){var o=r(15)(!1);o.push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-sheet.v-footer{border-radius:0}.v-sheet.v-footer:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-footer.v-sheet--shaped{border-radius:24px 0}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-footer:not([data-booted=true]){transition:none!important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute}.v-footer--absolute:not(.v-footer--inset){width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0}",""]),t.exports=o},569:function(t,e,r){"use strict";r.r(e);var o={name:"App",layout:"auth"},n=(r(564),r(41)),c=r(48),l=r.n(c),d=r(243),f=r(33),v=r(575),m=r(553),h=(r(10),r(12),r(11),r(3),r(13),r(9),r(14),r(1)),x=(r(23),r(172),r(566),r(92)),y=r(173),_=r(118),w=r(5),C=r(0);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var V=Object(w.a)(x.a,Object(y.a)("footer",["height","inset"]),_.a).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return k(k({},x.a.options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return k(k({},x.a.options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(C.h)(t),left:Object(C.h)(this.computedLeft),right:Object(C.h)(this.computedRight),bottom:Object(C.h)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var data=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,data,this.$slots.default)}}),j=r(140),P=r(212),A=r(556),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-16 mt-md-0",staticStyle:{"background-color":"white"}},[r("v-container",{staticClass:"flexColumn flex-md-row text-md-left text-center"},[r("v-card",{attrs:{"max-width":t.$vuetify.breakpoint.smAndDown?"100%":"316px",outlined:"",color:"transparent"}},[r("v-card-text",{staticClass:"flexColumn align-lg-start",staticStyle:{"font-family":"Montserrat"}},[r("v-img",{attrs:{"max-height":"100","max-width":"200",src:"../Logo_alt_dark_v04-3.png"}}),t._v(" \n        The secured, easiest, and fastest way to instantly transfer and spend your money.\n        "),r("v-icon",{attrs:{color:"#021291"}},[t._v("mdi-facebook")])],1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"d-flex flex-column flex-md-row flex-grow-1 justify-space-around"},[r("v-card",{attrs:{elevation:0}},[r("v-card-title",{staticClass:"flexColumn align-md-start"},[t._v("Services")]),t._v(" "),r("v-card-text",[t._v("\n          Remittance"),r("br"),t._v("\n          Micro loans"),r("br"),t._v("\n          zummPay"),r("br"),t._v("\n          Crypto Exchange"),r("br"),t._v("\n          Onlie Shopping"),r("br"),t._v("\n          Refund\n        ")])],1),t._v(" "),r("v-card",{attrs:{elevation:0}},[r("v-card-title",{staticClass:"flexColumn align-md-start"},[t._v("Zuumpay")]),t._v(" "),r("v-card-text",[t._v("\n          What we do"),r("br"),t._v("\n          Vision"),r("br"),t._v("\n          News/Blog"),r("br"),t._v("\n          Careers"),r("br"),t._v("\n          Sign Up"),r("br"),r("br")])],1),t._v(" "),r("v-card",{staticClass:"flexColumn align-md-start",attrs:{elevation:0}},[r("v-card-title",[t._v("Our office")]),t._v(" "),r("v-card-text",[t._v("\n          Buea"),r("br"),t._v("\n          Great Soppo, First trust building"),r("br"),t._v("\n          P.O Box 2021"),r("br"),t._v("\n          Douala"),r("br"),t._v("\n          Avenue de bank, Bonajo"),r("br"),t._v("\n          P.O Box 30B215\n        ")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{padless:"",color:"primary"}},[r("v-col",{staticClass:"text-center white--text",attrs:{cols:"12"}},[t._v("\n      © 2021 Zuumpay All rights reserved.\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:f.c,VCardTitle:f.d,VCol:v.a,VContainer:m.a,VFooter:V,VIcon:j.a,VImg:P.a,VSpacer:A.a})},575:function(t,e,r){"use strict";r(12),r(11),r(13),r(14);var o=r(1),n=(r(3),r(23),r(10),r(34),r(85),r(258),r(27),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(32),r(45),r(9),r(78),r(257),r(2)),c=r(47),l=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.H)(e)]={type:[String,Number],default:null},t}),{}),x=v.reduce((function(t,e){return t["order"+Object(l.H)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(x)};function _(t,e,r){var o=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");o+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(o+="-".concat(r)).toLowerCase():o.toLowerCase()}}var w=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,n=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=w.get(l);return f||function(){var t,e;for(e in f=[],y)y[e].forEach((function(t){var o=r[t],n=_(e,t,o);n&&f.push(n)}));var n=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!n||!r.cols},Object(o.a)(t,"col-".concat(r.cols),r.cols),Object(o.a)(t,"offset-".concat(r.offset),r.offset),Object(o.a)(t,"order-".concat(r.order),r.order),Object(o.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,f)}(),t(r.tag,Object(c.a)(data,{class:f}),n)}})},578:function(t,e,r){var content=r(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("4133a81e",content,!0,{sourceMap:!1})},588:function(t,e,r){"use strict";r(578)},589:function(t,e,r){var o=r(15)(!1);o.push([t.i,"body .resetPassword .v-input__slot:before{border-color:#4652b0!important}",""]),t.exports=o},606:function(t,e,r){var content=r(678);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("3d4827ad",content,!0,{sourceMap:!1})},634:function(t,e,r){"use strict";r.r(e);r(3);var o={props:{value:{type:Boolean,required:!0}},data:function(){return{loading:!1,credential:{email:""}}},computed:{dialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{resetPassword:function(){var t=this;this.loading=!0;var e=document.querySelector("#resetPassword");this.$fire.auth.sendPasswordResetEmail(this.credential.email).then((function(){alert("password reset email send successfully"),alert("visit your account to confirm your password"),e.reset(),t.dialog=!1})).catch((function(e){console.log(e),t.loading=!1,t.dialog=!0,"auth/user-not-found"==e.code||"auth/argument-error"==e.code?t.$refs.observer.errors.Email.push("Email was incorrect."):"auth/network-request-failed"==e.code&&t.$refs.observer.errors.Email.push("A network error (such as timeout, interrupted connection or unreachable host) has occurred")})).finally((function(){t.loading=!1}))}}},n=(r(588),r(41)),c=r(48),l=r.n(c),d=r(256),f=r(243),v=r(33),m=r(558),h=r(556),x=r(91),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"resetPassword d-flex flex-column align-center"},[r("v-card-title",{staticClass:"secondary--text"},[t._v("\n      Reset Your Password\n    ")]),t._v(" "),r("v-card-text",[r("VO",{ref:"observer",attrs:{tag:"form",id:"resetPassword"}},[r("VP",{attrs:{rules:"required|email",name:"Email"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("v-text-field",{attrs:{label:"Email",type:"email","error-messages":o},model:{value:t.credential.email,callback:function(e){t.$set(t.credential,"email",e)},expression:"credential.email"}})]}}])})],1)],1),t._v(" "),r("v-card-actions",{staticStyle:{width:"100%"}},[r("v-btn",{attrs:{color:"error darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:function(e){return t.resetPassword()}}},[t._v("Reset Password")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VDialog:m.a,VSpacer:h.a,VTextField:x.a})},677:function(t,e,r){"use strict";r(606)},678:function(t,e,r){var o=r(15)(!1);o.push([t.i,"body .signIn .theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:#4652b0!important}",""]),t.exports=o},733:function(t,e,r){"use strict";r.r(e);var o=r(7),n=(r(36),r(3),{name:"App",layout:"guest",data:function(){return{loading:!1,CreateDialog:!1,CreatePersonalAccountDialog:!1,CreateAgentAccountDialog:!1,ResetDialog:!1,CreateAccount:!1,form:"",credential:{email:"",password:""},emailVerifiedDialog:!1,textAccountVerified:"Account Not Yet Verified..."}},methods:{signIn:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.observer.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:t.loading=!0,r=document.querySelector("#signIn"),t.form=r,t.$fire.auth.signInWithEmailAndPassword(t.credential.email,t.credential.password).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.saveIdToken();case 2:r.reset();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),"auth/wrong-password"==e.code||"auth/user-not-found"==e.code?(t.$refs.observer.errors.Email.push("Email or password was incorrect."),t.$refs.observer.errors.Password.push("Email or password was incorrect.")):"auth/network-request-failed"==e.code&&t.$refs.observer.errors.Email.push("A network error (such as timeout, interrupted connection or unreachable host) has occurred")})).finally((function(){t.loading=!1;var e=t.$fire.auth.currentUser;e||console.log("no user"),e&&e.emailVerified}));case 9:case"end":return e.stop()}}),e)})))()},sendVerification:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.sendMailVerification();case 2:return e.next=4,t.logOut();case 4:t.emailVerifiedDialog=!1;case 5:case"end":return e.stop()}}),e)})))()}}}),c=n,l=(r(677),r(41)),d=r(48),f=r.n(d),v=r(256),m=r(243),h=r(33),x=r(558),y=r(247),_=(r(274),r(277)),w=Object(_.a)("flex"),C=r(140),O=r(212),k=Object(_.a)("layout"),V=r(244),j=r(166),P=r(30),A=r(560),S=r(556),D=r(91),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",[r("div",{staticClass:"d-flex flex-column align-center align-md-start mt-16 mt-md-0"},[r("v-card",{staticClass:"signIn text-md-right text-center",staticStyle:{position:"relative"},attrs:{elevation:"0",color:"transparent",width:t.$vuetify.breakpoint.mdAndDown?"80%":"100%"}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"d-flex align-center",staticStyle:{height:"100vh"},attrs:{xs12:"",sm10:"","offset-sm1":"",md7:"",lg4:"","offset-md4":"","mt-3":""}},[r("div",{staticClass:"flex-grow-1 mt-12"},[r("v-img",{staticClass:"mx-auto",attrs:{src:"../logo.png",to:"/",width:"120",contain:""}}),t._v(" "),r("v-card",{staticClass:"mt-16 d-flex flex-column align-center"},[r("v-card",{staticClass:"d-flex justify-center rounded-0",staticStyle:{width:"fit-content",position:"relative",top:"-32px"},attrs:{elevation:"12"}},[r("v-card-title",{staticClass:"onPrimary--text",staticStyle:{background:"#4652B0",padding:"16px 100px"}},[r("v-icon",{staticClass:"mr-4",attrs:{color:"onPrimary"}},[t._v("mdi-login")]),t._v("Login\n                ")],1)],1),t._v(" "),r("v-card-text",[r("VO",{ref:"observer",attrs:{tag:"form",id:"signIn"}},[r("VP",{attrs:{rules:"required|email",name:"Email"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("v-text-field",{attrs:{label:"Email",type:"email","error-messages":o,"prepend-icon":"mdi-email"},model:{value:t.credential.email,callback:function(e){t.$set(t.credential,"email",e)},expression:"credential.email"}})]}}])}),t._v(" "),r("VP",{attrs:{rules:"required|min:6",name:"Password"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("v-text-field",{attrs:{label:"Password",type:"password","error-messages":o,"prepend-icon":"mdi-lock",color:"primary"},model:{value:t.credential.password,callback:function(e){t.$set(t.credential,"password",e)},expression:"credential.password"}})]}}])}),t._v(" "),r("v-card-actions",{staticClass:"d-flex align-center justify-center",staticStyle:{padding:"0 !important"}},[r("v-btn",{staticClass:"mt-2 px-8 rounded-0",attrs:{color:"primary",loading:t.loading},on:{click:function(e){return t.signIn()}}},[t._v("LogIn")])],1),t._v(" "),r("v-divider",{staticClass:"my-4"}),t._v("\n                  Not a member?"),r("v-btn",{staticClass:"text-capitalize",attrs:{color:"secondary",text:""},on:{click:function(e){t.CreateAccount=!0}}},[t._v("Sign Up")]),t._v(" "),r("br"),t._v("\n                  Forgot"),r("v-btn",{staticClass:"text-capitalize",attrs:{color:"secondary",text:""},on:{click:function(e){t.ResetDialog=!0}}},[t._v("Password ?")])],1)],1)],1)],1)])],1)],1),t._v(" "),r("v-dialog",{attrs:{width:"400"},model:{value:t.emailVerifiedDialog,callback:function(e){t.emailVerifiedDialog=e},expression:"emailVerifiedDialog"}},[r("v-card",{staticClass:"text-center",attrs:{color:"accent",dark:""}},[r("v-card-title",{staticClass:"font-weight-thin"},[r("h4",[t._v(t._s(t.textAccountVerified))])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"info",small:""},on:{click:function(e){return t.sendVerification()}}},[t._v(" Send Mail Verification Again...")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"warning",small:""},on:{click:function(e){t.emailVerifiedDialog=!1}}},[t._v(" close")])],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{width:"fit-content"},model:{value:t.CreateAccount,callback:function(e){t.CreateAccount=e},expression:"CreateAccount"}},[r("v-card",{staticClass:"text-center",attrs:{dark:""}},[r("v-card-title",{staticClass:"font-weight-thin"},[r("v-list",{staticClass:"d-flex flex-column align-start",staticStyle:{width:"100%"}},[r("v-list-item",{staticStyle:{width:"100%"}},[r("v-list-item-content",{staticClass:"pa-0",staticStyle:{width:"100%"}},[r("v-btn",{staticClass:"rounded-0 text-capitalize",attrs:{text:""},on:{click:function(e){t.CreatePersonalAccountDialog=!0,t.CreateAccount=!1}}},[t._v("\n                  Personal Account\n                ")]),t._v(" "),r("v-btn",{staticClass:"rounded-0 text-capitalize",attrs:{text:""},on:{click:function(e){t.CreateAgentAccountDialog=!0,t.CreateAccount=!1}}},[t._v("\n                  Agent Account\n                ")])],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"warning",small:"",text:""},on:{click:function(e){t.CreateAccount=!1}}},[t._v(" close")])],1)],1)],1),t._v(" "),r("create-personal-account-dialog",{model:{value:t.CreatePersonalAccountDialog,callback:function(e){t.CreatePersonalAccountDialog=e},expression:"CreatePersonalAccountDialog"}}),t._v(" "),r("create-agent-account-dialog",{model:{value:t.CreateAgentAccountDialog,callback:function(e){t.CreateAgentAccountDialog=e},expression:"CreateAgentAccountDialog"}}),t._v(" "),r("reset-dialog",{model:{value:t.ResetDialog,callback:function(e){t.ResetDialog=e},expression:"ResetDialog"}})],1),t._v(" "),r("footer-component")],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{CreatePersonalAccountDialog:r(365).default,CreateAgentAccountDialog:r(366).default,ResetDialog:r(634).default,FooterComponent:r(569).default}),f()(component,{VBtn:v.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDialog:x.a,VDivider:y.a,VFlex:w,VIcon:C.a,VImg:O.a,VLayout:k,VList:V.a,VListItem:j.a,VListItemContent:P.a,VMain:A.a,VSpacer:S.a,VTextField:D.a})}}]);