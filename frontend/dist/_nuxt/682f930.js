(window.webpackJsonp=window.webpackJsonp||[]).push([[42,10],{144:function(t,e,n){"use strict";var r=n(256);e.a=r.a},562:function(t,e,n){var content=n(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7dd53011",content,!0,{sourceMap:!1})},564:function(t,e,n){"use strict";n(562)},565:function(t,e,n){var r=n(15)(!1);r.push([t.i,".flexColumn{display:flex;flex-direction:column;align-items:center}",""]),t.exports=r},566:function(t,e,n){var content=n(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("bb35a8d6",content,!0,{sourceMap:!1})},567:function(t,e,n){var r=n(15)(!1);r.push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-sheet.v-footer{border-radius:0}.v-sheet.v-footer:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-footer.v-sheet--shaped{border-radius:24px 0}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-footer:not([data-booted=true]){transition:none!important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute}.v-footer--absolute:not(.v-footer--inset){width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0}",""]),t.exports=r},569:function(t,e,n){"use strict";n.r(e);var r={name:"App",layout:"auth"},o=(n(564),n(41)),l=n(48),c=n.n(l),d=n(243),v=n(33),h=n(575),f=n(553),m=(n(10),n(12),n(11),n(3),n(13),n(9),n(14),n(1)),y=(n(23),n(172),n(566),n(92)),x=n(173),_=n(118),w=n(5),C=n(0);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(w.a)(y.a,Object(x.a)("footer",["height","inset"]),_.a).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return S(S({},y.a.options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return S(S({},y.a.options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(C.h)(t),left:Object(C.h)(this.computedLeft),right:Object(C.h)(this.computedRight),bottom:Object(C.h)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var data=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,data,this.$slots.default)}}),j=n(140),P=n(212),V=n(556),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-16 mt-md-0",staticStyle:{"background-color":"white"}},[n("v-container",{staticClass:"flexColumn flex-md-row text-md-left text-center"},[n("v-card",{attrs:{"max-width":t.$vuetify.breakpoint.smAndDown?"100%":"316px",outlined:"",color:"transparent"}},[n("v-card-text",{staticClass:"flexColumn align-lg-start",staticStyle:{"font-family":"Montserrat"}},[n("v-img",{attrs:{"max-height":"100","max-width":"200",src:"../Logo_alt_dark_v04-3.png"}}),t._v(" \n        The secured, easiest, and fastest way to instantly transfer and spend your money.\n        "),n("v-icon",{attrs:{color:"#021291"}},[t._v("mdi-facebook")])],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"d-flex flex-column flex-md-row flex-grow-1 justify-space-around"},[n("v-card",{attrs:{elevation:0}},[n("v-card-title",{staticClass:"flexColumn align-md-start"},[t._v("Services")]),t._v(" "),n("v-card-text",[t._v("\n          Remittance"),n("br"),t._v("\n          Micro loans"),n("br"),t._v("\n          zummPay"),n("br"),t._v("\n          Crypto Exchange"),n("br"),t._v("\n          Onlie Shopping"),n("br"),t._v("\n          Refund\n        ")])],1),t._v(" "),n("v-card",{attrs:{elevation:0}},[n("v-card-title",{staticClass:"flexColumn align-md-start"},[t._v("Zuumpay")]),t._v(" "),n("v-card-text",[t._v("\n          What we do"),n("br"),t._v("\n          Vision"),n("br"),t._v("\n          News/Blog"),n("br"),t._v("\n          Careers"),n("br"),t._v("\n          Sign Up"),n("br"),n("br")])],1),t._v(" "),n("v-card",{staticClass:"flexColumn align-md-start",attrs:{elevation:0}},[n("v-card-title",[t._v("Our office")]),t._v(" "),n("v-card-text",[t._v("\n          Buea"),n("br"),t._v("\n          Great Soppo, First trust building"),n("br"),t._v("\n          P.O Box 2021"),n("br"),t._v("\n          Douala"),n("br"),t._v("\n          Avenue de bank, Bonajo"),n("br"),t._v("\n          P.O Box 30B215\n        ")])],1)],1)],1),t._v(" "),n("v-footer",{attrs:{padless:"",color:"primary"}},[n("v-col",{staticClass:"text-center white--text",attrs:{cols:"12"}},[t._v("\n      © 2021 Zuumpay All rights reserved.\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VContainer:f.a,VFooter:O,VIcon:j.a,VImg:P.a,VSpacer:V.a})},575:function(t,e,n){"use strict";n(12),n(11),n(13),n(14);var r=n(1),o=(n(3),n(23),n(10),n(34),n(85),n(258),n(27),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(32),n(45),n(9),n(78),n(257),n(2)),l=n(47),c=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],f=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(c.H)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(c.H)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(f),offset:Object.keys(m),order:Object.keys(y)};function _(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var v=w.get(c);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(c,v)}(),t(n.tag,Object(l.a)(data,{class:v}),o)}})},577:function(t,e,n){t.exports=n.p+"img/pricing-wave.d2d8ba5.png"},581:function(t,e,n){"use strict";var r=n(77),o=n(2);e.a=o.a.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},584:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));n(3),n(79),n(11);var r=n(81),o=n(581),l=n(197),c=n(5);function d(t){t.preventDefault()}e.a=Object(c.a)(r.a,o.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},587:function(t,e,n){t.exports=n.p+"img/Rectangle 14.9c6f1b5.png"},604:function(t,e,n){var content=n(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("566d4503",content,!0,{sourceMap:!1})},660:function(t,e,n){"use strict";n(604)},661:function(t,e,n){var r=n(15),o=n(563),l=n(587),c=n(577),d=r(!1),v=o(l),h=o(c);d.push([t.i,"body .fly{background:url("+v+") no-repeat 50%;background-size:cover!important}body .pricing{background:linear-gradient(hsla(0,0%,100%,.6),hsla(0,0%,100%,.6)),url("+h+") no-repeat 50% 50%;background-size:cover!important}@media(min-width:540){body .credit{width:450px!important}}@media(min-width:520px){body .undrawPay{width:400px!important}body .undrawProfile{top:130px!important;left:110px!important}body .undrawProfile .v-image{width:350px!important}body .undrawOnline{top:160px!important;left:-20px!important}body .undrawOnline .v-image{width:180px!important}}@media(min-width:450px){body .phone{top:-40px!important;left:-100px!important}body .phone .v-image{max-width:400px!important}}@media(min-width:600px){body .phone{top:15px!important;left:-27px!important}}@media(min-width:680px){body .phone{top:45px!important;left:0!important}}@media(min-width:780px){body .phone{top:80px!important;left:30px!important}}@media(min-width:960px){body .phone{top:0!important;left:-100px!important}body .phone .v-image{max-width:500px!important}}body .flexColumn{display:flex;flex-direction:column;align-items:center}body .v-data-table{background-color:#e8e4fc!important}body .v-data-table__wrapper{width:100%!important}body .squareCard{width:234px!important;height:200px!important;display:flex;flex-direction:column;margin:16px;justify-content:space-around;background:hsla(0,0%,100%,.15)!important}body .rec{background:linear-gradient(45deg,rgba(232,235,255,.15),rgba(70,82,176,.15))}body .bgGradient{background:linear-gradient(to bottom right,#f4f4f4,#ccccf3)}body tr:nth-child(2n),body tr th{background-color:#d4d4f4!important}body tr:nth-child(odd){background-color:#e8e4fc!important}body tr td{color:#602cb4}body tr th{font-weight:700!important;font-size:.8rem!important;color:#602cb4!important}body td,body th{padding:32px!important}body .form{background-color:hsla(0,0%,100%,.15)!important}body .form .v-input__control>.v-input__slot fieldset{background:linear-gradient(45deg,#f2f3fd,#ced6ec)!important;border:none}body .form .mdi-checkbox-blank-outline,body .form .v-label{color:#4652b0!important}",""]),t.exports=d},662:function(t,e,n){var content=n(663);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("12a190a6",content,!0,{sourceMap:!1})},663:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=r},664:function(t,e,n){var content=n(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2e2bc7da",content,!0,{sourceMap:!1})},665:function(t,e,n){var r=n(15)(!1);r.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},735:function(t,e,n){"use strict";n.r(e);var r={name:"App",layout:"guest",data:function(){return{headers:[{text:"About",align:"start",value:"about"},{text:"Contact Sales",value:"contact"},{text:"Faq",value:"faq"}],TableElement:[{about:"API",contact:"Sandbox",faq:"Carrers"},{about:"DEVELOPER DOCS",contact:"Pricing"},{about:"ALL PAYMENTS METHODS",contact:"Blog"}]}}},o=(n(660),n(41)),l=n(48),c=n.n(l),d=n(256),v=n(243),h=n(33),f=(n(10),n(12),n(11),n(13),n(9),n(14),n(94)),m=n(1),y=(n(3),n(79),n(662),n(664),n(51)),x=n(81),_=n(584),w=["title"];function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=_.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return k(k({},x.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(f.a)(t,w));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(y.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",k(k({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),O=n(553),j=n(732),P=n(212),V=n(560),A=n(91),M=n(73),E=n(74),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",{staticClass:"d-flex align-center rec"},[n("v-container",{staticClass:"flexColumn align-center justify-md-space-between flex-md-row justify-center text-md-left text-center",staticStyle:{"min-height":"100vh"}},[n("v-card",{staticClass:"flexColumn align-md-start primary--text",attrs:{outlined:"",color:"transparent",width:"100%"}},[n("v-card-title",{staticStyle:{"word-break":"break-word"}},[t._v("\n        Secured payment gateway"),n("br"),t._v("\n        in one click!\n      ")]),t._v(" "),n("br",{staticClass:"d-none space"}),t._v(" "),n("v-card-subtitle",{staticClass:"primary--text",staticStyle:{"word-break":"break-word"}},[n("br"),t._v("Reach more buyers and drive higher conversion with"),n("br"),t._v("\n        advance paument infrastructure for seamless global payments,"),n("br"),t._v("\n        money management for everyone and easy integration.\n      ")]),t._v(" "),n("v-card-text",[n("v-btn",{staticClass:"primary--text",staticStyle:{border:"1px solid #4652B0"},attrs:{outlined:""}},[t._v("\n          get started\n        ")])],1)],1),t._v(" "),n("div",{staticClass:"d-flex justify-center align-center",staticStyle:{position:"relative",width:"100%"}},[n("v-img",{attrs:{contain:"","max-width":t.$vuetify.breakpoint.smAndDown?"100%":"625px",src:"../laptop mockup.png"}}),t._v(" "),n("div",{staticClass:"phone",staticStyle:{position:"absolute",top:"0px",right:"130px"}},[n("v-img",{attrs:{contain:"","max-width":"300",src:"../phones.png"}})],1)],1)],1),t._v(" "),n("v-container",{staticClass:"flexColumn align-md-start flex-md-row\n    justify-md-space-between text-md-left text-center",staticStyle:{"min-height":"100vh"}},[n("v-card",{staticClass:"flexColumn align-md-start primary--text",attrs:{outlined:"",color:"transparent"}},[n("v-card-subtitle",{staticClass:"text-uppercase primary--text font-weight-bold",staticStyle:{"font-family":"Verdana"}},[t._v("\n        unified ecosystem\n      ")]),t._v(" "),n("v-card-title",{staticClass:"font-weight-bold",staticStyle:{"word-break":"break-word","font-weight":"Montserrat"}},[t._v("\n        A blended infrastructure of payment"),n("br"),t._v("\n        and financial products\n      ")]),t._v(" "),n("br",{staticClass:"d-none space"}),t._v(" "),n("v-card-subtitle",{staticClass:"primary--text",staticStyle:{"font-weight":"Montserrat"}},[t._v("\n        Reach more customers and get paid from anyone"),n("br"),t._v("\n        anyway you want with no hassle from major credit cards,"),n("br"),t._v("\n        mobile, wallets, and cryptos globally.  \n      ")]),t._v(" "),n("v-card-subtitle",{staticClass:"primary--text"},[t._v("\n        No long procedures, no middlemen, ZuumPay"),n("br"),t._v("\n        processes direct payments from your customers to "),n("br"),t._v("\n        you in seconds with instant withdrawal options.\n      ")])],1),t._v(" "),n("v-card",{staticClass:"d-flex align-md-center align-center",staticStyle:{position:"relative"},attrs:{height:t.$vuetify.breakpoint.mdAndUp?"100vh":"auto",elevation:"0",color:"transparent"}},[n("div",[n("v-img",{staticClass:"undrawPay",staticStyle:{"z-index":"2"},attrs:{contain:"",width:"300",src:"../undraw_pay_online_b-1-hk (1).png"}}),t._v(" "),n("div",{staticClass:"undrawProfile",staticStyle:{position:"absolute","z-index":"1",top:"0px",left:"110px"}},[n("v-img",{staticStyle:{"z-index":"1"},attrs:{contain:"",src:"../undraw_profile_data_re_v81r.png",width:"200"}})],1),t._v(" "),n("div",{staticClass:"undrawOnline",staticStyle:{position:"absolute",top:"0px",left:"-11px"}},[n("v-img",{staticStyle:{"z-index":"1"},attrs:{contain:"",src:"../undraw_online_transactions_-02-ka.png",width:"120"}})],1)],1)])],1),t._v(" "),n("v-container",{staticClass:"flexColumn flex-md-row align-md-start justify-md-space-between\n    justify-center text-md-right text-center",staticStyle:{"min-height":"100vh"}},[n("v-card",{staticClass:"d-flex align-md-center align-center",staticStyle:{position:"relative"},attrs:{height:t.$vuetify.breakpoint.mdAndUp?"100vh":"auto",elevation:"0",color:"transparent"}},[n("v-img",{staticClass:"credit",attrs:{contain:"",width:"320",src:"../undraw_credit_card_payment_re_o911.png"}})],1),t._v(" "),n("v-card",{staticClass:"flexColumn align-md-end primary--text",attrs:{outlined:"",color:"transparent"}},[n("v-card-title",{staticStyle:{"word-break":"break-word"}},[t._v("\n        Merchant services for any industry.\n      ")]),t._v(" "),n("br",{staticClass:"d-none space"}),t._v(" "),n("v-card-subtitle",{staticClass:"primary--text"},[n("br"),t._v("Whether you're running a bar, bridal shop, boat dealership,"),n("br"),t._v("\n        restaurant,shopping mall,freelancer or any other small business,"),n("br"),t._v("\n        we can help you save money and grow your business processing"),n("br"),t._v("\n        payments globally."),n("br"),n("br"),t._v("\n        Plus, our expert in-house support team is availabe 24/7.\n      ")])],1)],1),t._v(" "),n("section",{staticClass:"d-flex align-center",staticStyle:{"min-height":"100vh","background-color":"#4652B0"}},[n("div",{staticClass:"d-flex flex-column align-center"},[n("v-card",{staticClass:"text-center flexColumn",attrs:{color:"transparent",dark:"",elevation:0}},[n("v-card-title",{staticStyle:{"word-break":"break-word"}},[t._v("\n          A full suite of payment solutions\n        ")]),t._v(" "),n("br",{staticClass:"d-none space"}),t._v(" "),n("v-card-subtitle",[n("br"),t._v("With a single integaion, our team will enable you process"),n("br"),t._v("\n          payments from multiple options for every business venture"),n("br"),t._v("\n          including high risk transactions.\n        ")])],1),t._v(" "),n("div",{staticClass:"d-flex flex-wrap justify-center"},[n("v-card",{staticClass:"flexColumn align-md-start justify-end rounded-xl ma-4",attrs:{width:"230",height:"200",color:"rgba(255,255,255,0.15)",dark:"",elevation:"0"}},[n("v-img",{staticStyle:{position:"absolute",top:"-40px",right:"15px"},attrs:{src:"../Zoompay.png",contain:"",width:"130"}}),t._v(" "),n("v-img",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:"../Mask Group 13.png",contain:"",width:"250"}}),t._v(" "),n("div",[n("v-card-title",[t._v("ZOOMPAY")])],1)],1),t._v(" "),n("v-card",{staticClass:"flexColumn align-md-start justify-end rounded-xl ma-4",attrs:{width:"230",height:"200",color:"rgba(255,255,255,0.15)",dark:"",elevation:"0"}},[n("v-img",{staticStyle:{position:"absolute",top:"-40px",right:"15px"},attrs:{src:"../mobilemoney.png",contain:"",width:"130"}}),t._v(" "),n("v-img",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:"../Mask Group 14.png",contain:"",width:"250"}}),t._v(" "),n("div",[n("v-card-title",[t._v("MOBILE MONEY")])],1)],1),t._v(" "),n("v-card",{staticClass:"flexColumn align-md-start justify-end rounded-xl ma-4",attrs:{width:"230",height:"200",color:"rgba(255,255,255,0.15)",dark:"",elevation:"0"}},[n("v-img",{staticStyle:{position:"absolute",top:"-40px",right:"15px"},attrs:{src:"../mastercard.png",contain:"",width:"130"}}),t._v(" "),n("v-img",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:"../Mask Group 15.png",contain:"",width:"250"}}),t._v(" "),n("div",[n("v-card-title",[t._v("BANK CARDS")])],1)],1),t._v(" "),n("v-card",{staticClass:"flexColumn align-md-start justify-end rounded-xl ma-4",attrs:{width:"230",height:"200",color:"rgba(255,255,255,0.15)",dark:"",elevation:"0"}},[n("v-img",{staticStyle:{position:"absolute",top:"-40px",right:"15px"},attrs:{src:"../walllet.png",contain:"",width:"130"}}),t._v(" "),n("v-img",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:"../Mask Group 16.png",contain:"",width:"250"}}),t._v(" "),n("div",[n("v-card-title",[t._v("WALLETS")])],1)],1),t._v(" "),n("v-card",{staticClass:"flexColumn align-md-start justify-end rounded-xl ma-4",attrs:{width:"230",height:"200",color:"rgba(255,255,255,0.15)",dark:"",elevation:"0"}},[n("v-img",{staticStyle:{position:"absolute",top:"-40px",right:"15px"},attrs:{src:"../mobilemoney.png",contain:"",width:"130"}}),t._v(" "),n("v-img",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:"../Mask Group 17.png",contain:"",width:"250"}}),t._v(" "),n("div",[n("v-card-title",[t._v("MOBILE PAYMENT")])],1)],1),t._v(" "),n("v-card",{staticClass:"flexColumn align-md-start justify-end rounded-xl ma-4",attrs:{width:"230",height:"200",color:"rgba(255,255,255,0.15)",dark:"",elevation:"0"}},[n("v-img",{staticStyle:{position:"absolute",top:"-40px",right:"15px"},attrs:{src:"../pointOfSale.png",contain:"",width:"130"}}),t._v(" "),n("v-img",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:"../Mask Group 18.png",contain:"",width:"250"}}),t._v(" "),n("div",[n("v-card-title",[t._v("POS")])],1)],1),t._v(" "),n("v-card",{staticClass:"flexColumn align-md-start justify-end rounded-xl ma-4",attrs:{width:"230",height:"200",color:"rgba(255,255,255,0.15)",dark:"",elevation:"0"}},[n("v-img",{staticStyle:{position:"absolute",top:"-40px",right:"15px"},attrs:{src:"../mobilemoney.png",contain:"",width:"130"}}),t._v(" "),n("v-img",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:"../Mask Group 19.png",contain:"",width:"250"}}),t._v(" "),n("div",[n("v-card-title",[t._v("INTEGRATED PAYMENT")])],1)],1),t._v(" "),n("v-card",{staticClass:"flexColumn align-md-start justify-end rounded-xl ma-4",attrs:{width:"230",height:"200",color:"rgba(255,255,255,0.15)",dark:"",elevation:"0"}},[n("v-img",{staticStyle:{position:"absolute",top:"-40px",right:"15px"},attrs:{src:"../Money.png",contain:"",width:"130"}}),t._v(" "),n("v-img",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:"../Mask Group 20.png",contain:"",width:"250"}}),t._v(" "),n("div",[n("v-card-title",[t._v("ZUUMPAY CAPITAL")])],1)],1),t._v(" "),n("v-card",{staticClass:"flexColumn align-md-start justify-end rounded-xl ma-4",attrs:{width:"230",height:"200",color:"rgba(255,255,255,0.15)",dark:"",elevation:"0"}},[n("v-img",{staticStyle:{position:"absolute",top:"-40px",right:"15px"},attrs:{src:"../bitcoins.png",contain:"",width:"130"}}),t._v(" "),n("v-img",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{src:"../Mask Group 21.png",contain:"",width:"250"}}),t._v(" "),n("div",[n("v-card-title",[t._v("CRYPTO")])],1)],1)],1)],1)]),t._v(" "),n("section",{staticClass:"d-flex flex-column align-md-start fly",staticStyle:{"min-height":"100vh"}},[n("v-container",{staticClass:"flexColumn align-md-start flex-md-row justify-md-space-between justify-center text-md-left text-center"},[n("v-card",{staticClass:"flexColumn align-md-start",staticStyle:{"min-width":"fit-content"},attrs:{color:"transparent",dark:"",elevation:0}},[n("v-card-title",{staticStyle:{"word-break":"break-word"}},[t._v("\n          Why choose ZuumPay as your "),n("br"),t._v("\n          strategic development partner?\n        ")]),t._v(" "),n("br",{staticClass:"d-none space"}),t._v(" "),n("v-card-subtitle",[n("br"),t._v("Being a privately held company, our focus is always going to be on creating"),n("br"),t._v("\n          long-term relationships and creating products to enhance your earnings"),n("br"),t._v("\n          and increase your market reach, and not on squeezing our partners in order"),n("br"),t._v("\n          to maximize our quarterly earnings.\n        ")]),t._v(" "),n("v-card-text",[n("v-btn",{staticClass:"onPrimary--text",staticStyle:{border:"1px solid white"},attrs:{outlined:""}},[t._v(" order card")])],1)],1),t._v(" "),n("v-card",{staticClass:"d-flex align-md-center justify-center align-center",staticStyle:{position:"relative"},attrs:{height:t.$vuetify.breakpoint.mdAndUp?"100vh":"auto",elevation:"0",color:"transparent"}},[n("div",{staticStyle:{width:"100%"}},[n("v-img",{staticStyle:{position:"relative"},attrs:{"max-width":"100%",height:"250",src:"../Path 307.png"}},[n("v-img",{staticStyle:{position:"relative",top:"10px",right:"15px"},attrs:{contain:"",width:"300",src:"../undraw_programming_re_kg9v.png"}})],1)],1)])],1),t._v(" "),n("div",{staticClass:"d-flex flex-column align-center justify-center",staticStyle:{width:"100%"}},[n("v-card",{staticClass:"flexColumn justify-center",staticStyle:{overflow:"hidden"},attrs:{color:"transparent",dark:"",elevation:0,"max-width":"100%",width:"100%"}},[n("v-card-title",{staticStyle:{"word-break":"break-word"}},[t._v("\n        Payments Methods\n      ")]),t._v(" "),n("br",{staticClass:"d-none space"}),t._v(" "),n("v-card-subtitle",[t._v("\n        view full documentation\n      ")]),t._v(" "),n("div",{staticStyle:{position:"absolute",bottom:"50px"}},[n("v-img",{attrs:{contain:"",width:"100%",height:"280",src:"../Path 409.png"}})],1),t._v(" "),n("div",{staticClass:"d-flex align-center justify-center flex-wrap"},[n("v-img",{attrs:{contain:"","max-width":"150",src:"../Group 134.png"}}),t._v(" "),n("v-img",{attrs:{contain:"","max-width":"150",src:"../Group 141.png"}}),t._v(" "),n("v-img",{attrs:{contain:"","max-width":"150",src:"../Group 139.png"}})],1),t._v(" "),n("div",{staticClass:"d-flex align-center justify-center flex-wrap"},[n("v-img",{attrs:{contain:"","max-width":"150",src:"../Group 135.png"}}),t._v(" "),n("v-img",{attrs:{contain:"","max-width":"150",src:"../Group 136.png"}}),t._v(" "),n("v-img",{attrs:{contain:"","max-width":"150",src:"../Group 137.png"}}),t._v(" "),n("v-img",{attrs:{contain:"","max-width":"150",src:"../Group 138.png"}})],1),t._v(" "),n("br")],1)],1)],1),t._v(" "),n("section",{staticClass:"bgGradient d-flex align-center",staticStyle:{"min-height":"100vh"}},[n("v-container",{staticClass:"flexColumn flex-md-row justify-md-space-between text-md-left text-center"},[n("v-card",{staticClass:"pricing secondary--text d-flex justify-center flex-column",staticStyle:{"flex-grow":"1"},attrs:{height:t.$vuetify.breakpoint.smAndDown?"100%":"80Vh",width:t.$vuetify.breakpoint.smAndDown?"100%":"auto",outlined:"",color:"transparent"}},[n("v-card-title",{staticStyle:{"word-break":"break-word"}},[t._v("\n          Ready to accept the most popular"),n("br"),t._v("\n          ways of payments ?\n        ")]),t._v(" "),n("br",{staticClass:"d-none space"}),t._v(" "),n("v-card-text",{staticClass:"secondary--text"},[t._v("\n          Write our sales team and join"),n("br"),t._v("\n          The shortlist\n        ")])],1),t._v(" "),n("v-card",{staticClass:"form flexColumn rounded-xl justify-space-around mt-0",attrs:{width:"500",height:"width=100%",dark:""}},[n("v-card-text",[n("VO",{ref:"observer",attrs:{tab:"form"}},[n("VP",{attrs:{rules:"required|numeric",name:"full name"},scopedSlots:t._u([{key:"default",fn:function(t){t.errors;return[n("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Full Name",outlined:"",placeholder:"Full Name"}})]}}])}),t._v(" "),n("div",{staticClass:"d-flex"},[n("VP",{attrs:{rules:"required|numeric",name:"comapany name"},scopedSlots:t._u([{key:"default",fn:function(t){t.errors;return[n("v-text-field",{staticClass:"mr-4 rounded-lg",attrs:{label:"Company Name",outlined:"",placeholder:"Company Name"}})]}}])}),t._v(" "),n("VP",{attrs:{rules:"required|numeric",name:"website"},scopedSlots:t._u([{key:"default",fn:function(t){t.errors;return[n("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Website (opt)",outlined:"",placeholder:"Website (opt)"}})]}}])})],1),t._v(" "),n("div",{staticClass:"d-flex primary--text"},[n("VP",{attrs:{rules:"required|numeric",name:"Email"},scopedSlots:t._u([{key:"default",fn:function(t){t.errors;return[n("v-text-field",{staticClass:"mr-4 rounded-lg",attrs:{label:"Email",outlined:"",placeholder:"Email"}})]}}])}),t._v(" "),n("VP",{attrs:{rules:"required|numeric",name:"Phone"},scopedSlots:t._u([{key:"default",fn:function(t){t.errors;return[n("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Phone",outlined:"",placeholder:"Phone"}})]}}])})],1),t._v(" "),n("div",{staticClass:"d-flex"},[n("VP",{attrs:{rules:"required|numeric",name:"country"},scopedSlots:t._u([{key:"default",fn:function(t){t.errors;return[n("v-text-field",{staticClass:"mr-4 rounded-lg",attrs:{label:"country",outlined:"",placeholder:"country"}})]}}])}),t._v(" "),n("VP",{attrs:{rules:"required|numeric",name:"your title"},scopedSlots:t._u([{key:"default",fn:function(t){t.errors;return[n("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Your Title",outlined:"",placeholder:"Your Title"}})]}}])})],1),t._v(" "),n("VP",{attrs:{rules:"required",name:"volume"},scopedSlots:t._u([{key:"default",fn:function(t){t.errors;return[n("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Projected Online Volume",outlined:"",placeholder:"Projected Online Volume"}})]}}])}),t._v(" "),n("VP",{attrs:{rules:"required",name:"agree"},scopedSlots:t._u([{key:"default",fn:function(e){e.errors;return[n("v-checkbox",{scopedSlots:t._u([{key:"label",fn:function(){return[n("v-card-subtitle",{staticClass:"primary--text"},[t._v("\n                    I agree that ZuumPay may contact me"),n("br"),t._v("\n                    in the above email address or phone"),n("br"),t._v("\n                    listed above.\n                  ")])]},proxy:!0}],null,!0)})]}}])})],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"onPrimary--text pa-4",attrs:{color:"primary"}},[t._v("continue")])],1)],1)],1)],1),t._v(" "),n("section",{staticClass:"d-flex align-center",staticStyle:{"min-height":"100vh","background-color":"#eee"}},[n("v-container",{staticClass:"d-flex align-start"},[n("v-data-table",{staticClass:"flexColumn rounded-xl bgTable primary--text",staticStyle:{width:"100% !important"},attrs:{headers:t.headers,items:t.TableElement,"items-per-page":5,elevation:0},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"transparent"}},[n("v-toolbar-title",{staticClass:"primary--text"},[t._v("Developer Footer")])],1)]},proxy:!0}])})],1)],1),t._v(" "),n("footer-component")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{FooterComponent:n(569).default}),c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VCheckbox:S,VContainer:O.a,VDataTable:j.a,VImg:P.a,VMain:V.a,VTextField:A.a,VToolbar:M.a,VToolbarTitle:E.b})}}]);