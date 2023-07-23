(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{767:function(e,r,t){"use strict";t.r(r);var n={created:function(){this.getUserLocation()}},l=t(41),c=t(48),o=t.n(c),d=t(140),f=t(547),m=t(91),component=Object(l.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("VO",{ref:"observer",attrs:{tag:"form",id:"resetPassword"}},[t("VP",{attrs:{rules:"required",name:"full Name"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"Full name",type:"text","error-messages":n},model:{value:e.credential.fullName,callback:function(r){e.$set(e.credential,"fullName",r)},expression:"credential.fullName"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required|numeric|min:4|max:15",name:"phoneNumber"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{type:"tel","error-messages":n,label:"phone number"},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("img",{attrs:{width:"24",height:"24",src:e.credential.countryCode}}),e._v(" "),t("v-icon",{staticClass:"ml-4"},[e._v(" "+e._s(e.credential.country_calling_code))])]},proxy:!0}],null,!0),model:{value:e.credential.phone,callback:function(r){e.$set(e.credential,"phone",r)},expression:"credential.phone"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required",name:"address"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"address",type:"text","error-messages":n},model:{value:e.credential.address,callback:function(r){e.$set(e.credential,"address",r)},expression:"credential.address"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required",name:"zuumpay Id"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"Zuumpay Id",type:"text","error-messages":n},model:{value:e.credential.zuumpayId,callback:function(r){e.$set(e.credential,"zuumpayId",r)},expression:"credential.zuumpayId"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required",name:"account number"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"Account Number",type:"text","error-messages":n},model:{value:e.credential.accountNumber,callback:function(r){e.$set(e.credential,"accountNumber",r)},expression:"credential.accountNumber"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required",name:"pin"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"pin",type:"text","error-messages":n},model:{value:e.credential.pin,callback:function(r){e.$set(e.credential,"pin",r)},expression:"credential.pin"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required",name:"date Of Birth"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"date Of Birth",type:"date","error-messages":n},model:{value:e.credential.dateOfBirth,callback:function(r){e.$set(e.credential,"dateOfBirth",r)},expression:"credential.dateOfBirth"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required",name:"zip Code"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"Zip Code",type:"text","error-messages":n},model:{value:e.credential.zipCode,callback:function(r){e.$set(e.credential,"zipCode",r)},expression:"credential.zipCode"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required",name:"gender"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-select",{attrs:{items:e.genders,label:"gender","error-messages":n},model:{value:e.credential.gender,callback:function(r){e.$set(e.credential,"gender",r)},expression:"credential.gender"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required|email",name:"Email"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"Email",type:"email","error-messages":n},model:{value:e.credential.email,callback:function(r){e.$set(e.credential,"email",r)},expression:"credential.email"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required|confirmed:confirmation|max:12|min:6",name:"password"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"Password",type:"password","error-messages":n},model:{value:e.credential.password,callback:function(r){e.$set(e.credential,"password",r)},expression:"credential.password"}})]}}])}),e._v(" "),t("VP",{attrs:{vid:"confirmation",rules:"required",name:"Confirm Password"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"Confirm Password",type:"password","error-messages":n},model:{value:e.credential.confirmation,callback:function(r){e.$set(e.credential,"confirmation",r)},expression:"credential.confirmation"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required",name:"currency"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"currency",type:"text","error-messages":n},model:{value:e.credential.currency,callback:function(r){e.$set(e.credential,"currency",r)},expression:"credential.currency"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required",name:"currency name"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"currency name",type:"text","error-messages":n},model:{value:e.credential.currencyName,callback:function(r){e.$set(e.credential,"currencyName",r)},expression:"credential.currencyName"}})]}}])}),e._v(" "),t("VP",{attrs:{rules:"required",name:"country"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("v-text-field",{attrs:{label:"country",type:"text",filled:"",readonly:"","error-messages":n},model:{value:e.credential.country,callback:function(r){e.$set(e.credential,"country",r)},expression:"credential.country"}})]}}])})],1)}),[],!1,null,null,null);r.default=component.exports;o()(component,{VIcon:d.a,VSelect:f.a,VTextField:m.a})}}]);