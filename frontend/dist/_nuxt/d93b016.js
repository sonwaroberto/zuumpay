(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{578:function(e,t,r){var content=r(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("4133a81e",content,!0,{sourceMap:!1})},588:function(e,t,r){"use strict";r(578)},589:function(e,t,r){var o=r(15)(!1);o.push([e.i,"body .resetPassword .v-input__slot:before{border-color:#4652b0!important}",""]),e.exports=o},634:function(e,t,r){"use strict";r.r(t);r(3);var o={props:{value:{type:Boolean,required:!0}},data:function(){return{loading:!1,credential:{email:""}}},computed:{dialog:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{resetPassword:function(){var e=this;this.loading=!0;var t=document.querySelector("#resetPassword");this.$fire.auth.sendPasswordResetEmail(this.credential.email).then((function(){alert("password reset email send successfully"),alert("visit your account to confirm your password"),t.reset(),e.dialog=!1})).catch((function(t){console.log(t),e.loading=!1,e.dialog=!0,"auth/user-not-found"==t.code||"auth/argument-error"==t.code?e.$refs.observer.errors.Email.push("Email was incorrect."):"auth/network-request-failed"==t.code&&e.$refs.observer.errors.Email.push("A network error (such as timeout, interrupted connection or unreachable host) has occurred")})).finally((function(){e.loading=!1}))}}},n=(r(588),r(41)),l=r(48),c=r.n(l),d=r(256),f=r(243),v=r(33),m=r(558),h=r(556),w=r(91),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{staticClass:"resetPassword d-flex flex-column align-center"},[r("v-card-title",{staticClass:"secondary--text"},[e._v("\n      Reset Your Password\n    ")]),e._v(" "),r("v-card-text",[r("VO",{ref:"observer",attrs:{tag:"form",id:"resetPassword"}},[r("VP",{attrs:{rules:"required|email",name:"Email"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("v-text-field",{attrs:{label:"Email",type:"email","error-messages":o},model:{value:e.credential.email,callback:function(t){e.$set(e.credential,"email",t)},expression:"credential.email"}})]}}])})],1)],1),e._v(" "),r("v-card-actions",{staticStyle:{width:"100%"}},[r("v-btn",{attrs:{color:"error darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",loading:e.loading},on:{click:function(t){return e.resetPassword()}}},[e._v("Reset Password")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VDialog:m.a,VSpacer:h.a,VTextField:w.a})}}]);