(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{621:function(e,t,r){var content=r(713);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("2877dc5e",content,!0,{sourceMap:!1})},712:function(e,t,r){"use strict";r(621)},713:function(e,t,r){var l=r(15)(!1);l.push([e.i,"body .form{background:linear-gradient(45deg,#bcbfd4,#cccee0)}body .form .v-input__control>.v-input__slot fieldset{background:linear-gradient(45deg,#f2f3fd,#c2ceeb)!important;border:none}body .v-label{color:#4652b0!important}",""]),e.exports=l},768:function(e,t,r){"use strict";r.r(t);var l={props:{value:{type:Boolean,require:!0}},data:function(){return{LoanApplicationStep2:!1,LoanApplicationStep3:!1}},computed:{LoanApplicationDialog:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},n=(r(712),r(41)),o=r(48),d=r.n(o),c=r(551),f=r(256),v=r(243),m=r(33),x=r(558),_=r(91),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-dialog",{attrs:{persistent:"",width:"400"},model:{value:e.LoanApplicationDialog,callback:function(t){e.LoanApplicationDialog=t},expression:"LoanApplicationDialog"}},[r("v-card",{staticClass:"form d-flex flex-column rounded-lg align-center  justify-space-around primary--text",attrs:{outlined:"",height:""}},[r("v-card-title",[r("span",{staticClass:"text-h5 text-uppercase font-weight-bold"},[e._v("loan application")])]),e._v(" "),r("v-card-text",[r("VO",{ref:"observer",attrs:{tab:"form"}},[r("div",{staticClass:"d-flex"},[r("VP",{attrs:{rules:"required",name:"amount"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg mr-4",attrs:{label:"Amount",dense:"",outlined:"",placeholder:"Amount"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Duration"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg ",attrs:{label:"Duration",dense:"",outlined:"",placeholder:"Duration"}})]}}])})],1),e._v(" "),r("VP",{attrs:{rules:"required",name:"Re-payment"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Re-payment",dense:"",outlined:"",placeholder:"Re-payment"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Loan Type"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Loan Type",dense:"",outlined:"",placeholder:"Loan Type"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Purpose of Loan"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Purpose of Loan",dense:"",outlined:"",placeholder:"Purpose of Loan"}})]}}])}),e._v(" "),r("div",{staticClass:"d-flex"},[r("VP",{attrs:{rules:"required",name:"Name"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg mr-4",attrs:{label:"Name",dense:"",outlined:"",placeholder:"Name"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Phone"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg ",attrs:{label:"Phone",dense:"",outlined:"",placeholder:"Phone"}})]}}])})],1),e._v(" "),r("div",{staticClass:"d-flex"},[r("VP",{attrs:{rules:"required",name:"Email"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg mr-4",attrs:{label:"Email",dense:"",outlined:"",placeholder:"Email"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Password"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg ",attrs:{label:"Password",dense:"",outlined:"",placeholder:"Password"}})]}}])})],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"onPrimary--text pa-4",attrs:{color:"primary"},on:{click:function(t){e.LoanApplicationStep2=!0}}},[e._v("\n          next step\n        ")])],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{persistent:"",width:"400"},model:{value:e.LoanApplicationStep2,callback:function(t){e.LoanApplicationStep2=t},expression:"LoanApplicationStep2"}},[r("v-card",{staticClass:"form d-flex flex-column rounded-lg align-center  justify-space-around primary--text",attrs:{outlined:"",height:""}},[r("v-card-title",[r("span",{staticClass:"text-h5 text-uppercase font-weight-bold"},[e._v("loan application")])]),e._v(" "),r("v-card-text",[r("VO",{ref:"observer",attrs:{tab:"form"}},[r("div",{staticClass:"d-flex"},[r("VP",{attrs:{rules:"required",name:"Age"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg mr-4",attrs:{label:"Age",dense:"",outlined:"",placeholder:"Age"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Sexe"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg ",attrs:{label:"Sexe",dense:"",outlined:"",placeholder:"Sexe"}})]}}])})],1),e._v(" "),r("VP",{attrs:{rules:"required",name:"Employment Status"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Employment Status",dense:"",outlined:"",placeholder:"Employment Status"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Enter Your Job"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Enter Your Job",dense:"",outlined:"",placeholder:"Enter Your Job"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Average Salary"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Average Salary",dense:"",outlined:"",placeholder:"Average Salary"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Marital Status"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Marital Status",dense:"",outlined:"",placeholder:"Marital Status"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Number of kids"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Number of kids",dense:"",outlined:"",placeholder:"Number of kids"}})]}}])})],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"onPrimary--text pa-4",attrs:{color:"primary"},on:{click:function(t){e.LoanApplicationStep2=!1,e.LoanApplicationStep3=!0,e.LoanApplicationDialog=!1}}},[e._v("\n          final step\n        ")])],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{persistent:"",width:"400"},model:{value:e.LoanApplicationStep3,callback:function(t){e.LoanApplicationStep3=t},expression:"LoanApplicationStep3"}},[r("v-card",{staticClass:"form d-flex flex-column rounded-lg align-center  justify-space-around primary--text",attrs:{outlined:"",height:"400"}},[r("v-card-title",[r("span",{staticClass:"text-h5 text-uppercase font-weight-bold"},[e._v("loan application")])]),e._v(" "),r("v-card-text",[r("VO",{ref:"observer",attrs:{tab:"form"}},[r("VP",{attrs:{rules:"required",name:"Id Type"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Id Type",dense:"",outlined:"",placeholder:"Id Type"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"Expiry Date"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Expiry Date",dense:"",outlined:"",placeholder:"Expiry Date"}})]}}])}),e._v(" "),r("VP",{attrs:{rules:"required",name:"ID Photo"},scopedSlots:e._u([{key:"default",fn:function(e){e.errors;return[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Update ID Photo",dense:"",outlined:"",placeholder:"Update Id Photo"}})]}}])})],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"onPrimary--text pa-4",attrs:{color:"primary"},on:{click:function(t){e.LoanApplicationStep3=!1}}},[e._v("\n          get your loan\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VApp:c.a,VBtn:f.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDialog:x.a,VTextField:_.a})}}]);