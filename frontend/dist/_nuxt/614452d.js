(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{620:function(t,e,r){var content=r(711);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("29da4500",content,!0,{sourceMap:!1})},710:function(t,e,r){"use strict";r(620)},711:function(t,e,r){var n=r(15)(!1);n.push([t.i,".__nuxt-error-page{padding:1rem;background:rgba(148,159,236,.6);color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}",""]),t.exports=n},766:function(t,e,r){"use strict";r.r(e);var n={name:"NuxtError",layout:"empty",props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}},head:function(){return{title:"Page Not Found - ZuumPay",meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0"}]}}},o=(r(710),r(41)),l=r(48),c=r.n(l),d=r(256),f=r(140),m=r(212),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"__nuxt-error-page"},[r("div",{staticClass:"d-flex flex-column align-center justify-center"},[r("v-img",{attrs:{src:"../Logo_alt_dark_v04-3.png",height:"80",width:"200"}}),t._v(" "),r("h1",{staticClass:"secondary--text d-flex align-center justify-center",staticStyle:{"font-size":"3rem"}},[r("v-icon",{staticStyle:{"font-size":"3rem"},attrs:{color:"secondary"}},[t._v("mdi-alert")]),t._v(" "),r("span",[t._v("404 !!!")])],1),t._v(" "),r("div",{staticClass:"primary--text"},[t._v("Oops, we couldn't find that page. Try going...")]),t._v(" "),r("p",{staticClass:" mt-8"},[r("router-link",{attrs:{to:"/"}},[r("v-btn",{staticClass:"rounded-0",attrs:{color:"info",elevation:"5"}},[t._v("Back Home")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VImg:m.a})}}]);