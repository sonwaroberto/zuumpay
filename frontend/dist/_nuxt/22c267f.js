/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{597:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return l})),n.d(e,"h",(function(){return h})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return v})),n.d(e,"g",(function(){return m}));var r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)};function o(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}var c=function(){return c=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},c.apply(this,arguments)};function f(t,e,n,r){return new(n||(n=Promise))((function(o,c){function f(t){try{h(r.next(t))}catch(t){c(t)}}function l(t){try{h(r.throw(t))}catch(t){c(t)}}function h(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(f,l)}h((r=r.apply(t,e||[])).next())}))}function l(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(f){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,f])}}}function h(t){var s="function"==typeof Symbol&&Symbol.iterator,e=s&&t[s],i=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c}function v(){for(var t=[],i=0;i<arguments.length;i++)t=t.concat(d(arguments[i]));return t}function m(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),n=0;for(i=0;i<t;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)e[n]=a[r];return e}},631:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return l}));var r=n(597),o=function(t){for(var e=[],p=0,i=0;i<t.length;i++){var n=t.charCodeAt(i);n<128?e[p++]=n:n<2048?(e[p++]=n>>6|192,e[p++]=63&n|128):55296==(64512&n)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(n=65536+((1023&n)<<10)+(1023&t.charCodeAt(++i)),e[p++]=n>>18|240,e[p++]=n>>12&63|128,e[p++]=n>>6&63|128,e[p++]=63&n|128):(e[p++]=n>>12|224,e[p++]=n>>6&63|128,e[p++]=63&n|128)}return e};var c=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();function f(){return"indexedDB"in self&&null!=indexedDB}function l(){return new Promise((function(t,e){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",o=window.indexedDB.open(r);o.onsuccess=function(){o.result.close(),n||window.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=function(){n=!1},o.onerror=function(){var t;e((null===(t=o.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}var h=function(t){function e(code,n,r){var o=t.call(this,n)||this;return o.code=code,o.customData=r,o.name="FirebaseError",Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,d.prototype.create),o}return Object(r.c)(e,t),e}(Error),d=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(code){for(var data=[],t=1;t<arguments.length;t++)data[t-1]=arguments[t];var e=data[0]||{},n=this.service+"/"+code,template=this.errors[code],r=template?v(template,e):"Error",o=this.serviceName+": "+r+" ("+n+").",c=new h(n,o,e);return c},t}();function v(template,data){return template.replace(m,(function(t,e){var n=data[e];return null!=n?String(n):"<"+e+"?>"}))}var m=/\{\$([^}]+)}/g;!function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var i=1;i<this.blockSize;++i)this.pad_[i]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"==typeof t)for(var i=0;i<16;i++)n[i]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(i=0;i<16;i++)n[i]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(i=16;i<80;i++){var r=n[i-3]^n[i-8]^n[i-14]^n[i-16];n[i]=4294967295&(r<<1|r>>>31)}var o,c,a=this.chain_[0],b=this.chain_[1],f=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(i=0;i<80;i++){i<40?i<20?(o=l^b&(f^l),c=1518500249):(o=b^f^l,c=1859775393):i<60?(o=b&f|l&(b|f),c=2400959708):(o=b^f^l,c=3395469782);r=(a<<5|a>>>27)+o+h+c+n[i]&4294967295;h=l,l=f,f=4294967295&(b<<30|b>>>2),b=a,a=r}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+b&4294967295,this.chain_[2]=this.chain_[2]+f&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=0,o=this.buf_,c=this.inbuf_;r<e;){if(0===c)for(;r<=n;)this.compress_(t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(o[c]=t.charCodeAt(r),++r,++c===this.blockSize){this.compress_(o),c=0;break}}else for(;r<e;)if(o[c]=t[r],++r,++c===this.blockSize){this.compress_(o),c=0;break}}this.inbuf_=c,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&e,e/=256;this.compress_(this.buf_);var n=0;for(i=0;i<5;i++)for(var r=24;r>=0;r-=8)t[n]=this.chain_[i]>>r&255,++n;return t}}();!function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,o=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var o=r[n];if(o in t&&"function"==typeof t[o])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=y),void 0===r.error&&(r.error=y),void 0===r.complete&&(r.complete=y);var c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?r.error(o.finalError):r.complete()}catch(t){}})),this.observers.push(r),c},t.prototype.unsubscribeOne=function(i){void 0!==this.observers&&void 0!==this.observers[i]&&(delete this.observers[i],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var i=0;i<this.observers.length;i++)this.sendOne(i,t)},t.prototype.sendOne=function(i,t){var e=this;this.task.then((function(){if(void 0!==e.observers&&void 0!==e.observers[i])try{t(e.observers[i])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))}}();function y(){}}).call(this,n(99))},771:function(t,e,n){"use strict";n.r(e);var r,o=n(568),c=(n(583),n(597)),f=n(631);function l(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),n=0;for(i=0;i<t;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)e[n]=a[r];return e}var h,d=[];!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(h||(h={}));var v={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},m=h.INFO,y=((r={})[h.DEBUG]="log",r[h.VERBOSE]="log",r[h.INFO]="info",r[h.WARN]="warn",r[h.ERROR]="error",r),_=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var o=(new Date).toISOString(),c=y[e];if(!c)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[c].apply(console,l(["["+o+"]  "+t.name+":"],n))}},w=function(){function t(t){this.name=t,this._logLevel=m,this._logHandler=_,this._userLogHandler=null,d.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in h))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?v[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,l([this,h.DEBUG],t)),this._logHandler.apply(this,l([this,h.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,l([this,h.VERBOSE],t)),this._logHandler.apply(this,l([this,h.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,l([this,h.INFO],t)),this._logHandler.apply(this,l([this,h.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,l([this,h.WARN],t)),this._logHandler.apply(this,l([this,h.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,l([this,h.ERROR],t)),this._logHandler.apply(this,l([this,h.ERROR],t))},t}();var I=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t}(),E="[DEFAULT]",T=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return t.prototype.get=function(t){void 0===t&&(t=E);var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new f.a;this.instancesDeferred.set(e,n);try{var r=this.getOrInitializeService(e);r&&n.resolve(r)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e=Object(c.a)({identifier:E,optional:!1},t),n=e.identifier,r=e.optional,o=this.normalizeInstanceIdentifier(n);try{var f=this.getOrInitializeService(o);if(!f){if(r)return null;throw Error("Service "+this.name+" is not available")}return f}catch(t){if(r)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(component){var t,e;if(component.name!==this.name)throw Error("Mismatching Component "+component.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=component,function(component){return"EAGER"===component.instantiationMode}(component))try{this.getOrInitializeService(E)}catch(t){}try{for(var n=Object(c.h)(this.instancesDeferred.entries()),r=n.next();!r.done;r=n.next()){var o=Object(c.e)(r.value,2),f=o[0],l=o[1],h=this.normalizeInstanceIdentifier(f);try{var d=this.getOrInitializeService(h);l.resolve(d)}catch(t){}}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},t.prototype.clearInstance=function(t){void 0===t&&(t=E),this.instancesDeferred.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Object(c.b)(this,void 0,void 0,(function(){var t;return Object(c.d)(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(c.f)(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})),t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()}))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.getOrInitializeService=function(t){var e=this.instances.get(t);return!e&&this.component&&(e=this.component.instanceFactory(this.container,function(t){return t===E?void 0:t}(t)),this.instances.set(t,e)),e||null},t.prototype.normalizeInstanceIdentifier=function(t){return this.component?this.component.multipleInstances?t:E:t},t}();!function(){function t(t){this.name=t,this.providers=new Map}t.prototype.addComponent=function(component){var t=this.getProvider(component.name);if(t.isComponentSet())throw new Error("Component "+component.name+" has already been registered with "+this.name);t.setComponent(component)},t.prototype.addOrOverwriteComponent=function(component){this.getProvider(component.name).isComponentSet()&&this.providers.delete(component.name),this.addComponent(component)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new T(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())}}();var S,O,A,N="0.4.5",R=N,k="FB-PERF-TRACE-MEASURE",M="_wt_",P="_fcp",L="_fid",C="@firebase/performance/config",j="@firebase/performance/configexpire",B="Performance",U=((S={})["trace started"]="Trace {$traceName} was started before.",S["trace stopped"]="Trace {$traceName} is not running.",S["nonpositive trace startTime"]="Trace {$traceName} startTime should be positive.",S["nonpositive trace duration"]="Trace {$traceName} duration should be positive.",S["no window"]="Window is not available.",S["no app id"]="App id is not available.",S["no project id"]="Project id is not available.",S["no api key"]="Api key is not available.",S["invalid cc log"]="Attempted to queue invalid cc event",S["FB not default"]="Performance can only start when Firebase app instance is the default one.",S["RC response not ok"]="RC response is not ok",S["invalid attribute name"]="Attribute name {$attributeName} is invalid.",S["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",S["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",S["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",S),D=new f.b("performance",B,U),F=new w(B);F.logLevel=h.INFO;var x,H=function(){function t(t){if(this.window=t,!t)throw D.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled?!!Object(f.c)()||(F.info("IndexedDB is not supported by current browswer"),!1):(F.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver((function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var o=r[n];e(o)}})).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===O&&(O=new t(A)),O},t}();function z(t,e){var n=t.length-e.length;if(n<0||n>1)throw D.create("invalid String merger input");for(var r=[],i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}var W,V,G=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=z("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=z("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw D.create("no app id");return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw D.create("no project id");return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw D.create("no api key");return t},t.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},t.getInstance=function(){return void 0===x&&(x=new t),x},t}();function K(){return W}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"}(V||(V={}));var $=["firebase_","google_","ga_"],J=new RegExp("^[a-zA-Z]\\w*$");function Y(){var t=H.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}function Z(){switch(H.getInstance().document.visibilityState){case"visible":return V.VISIBLE;case"hidden":return V.HIDDEN;default:return V.UNKNOWN}}function Q(){var t=H.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}var X="0.0.1",tt=!0,et="FIREBASE_INSTALLATIONS_AUTH";function nt(t){var e=function(){var t=H.getInstance().localStorage;if(!t)return;var e=t.getItem(j);if(!(e&&(n=e,Number(n)>Date.now())))return;var n;var r=t.getItem(C);if(!r)return;try{return JSON.parse(r)}catch(t){return}}();return e?(ot(e),Promise.resolve()):function(t){return(e=G.getInstance().installationsService.getToken(),e.then((function(t){})),e).then((function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+G.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+G.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:et+" "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:G.getInstance().getAppId(),app_version:R,sdk_version:X})});return fetch(r).then((function(t){if(t.ok)return t.json();throw D.create("RC response not ok")}))})).catch((function(){F.info(it)}));var e}(t).then(ot).then((function(t){return function(t){var e=H.getInstance().localStorage;if(!t||!e)return;e.setItem(C,JSON.stringify(t)),e.setItem(j,String(Date.now()+60*G.getInstance().configTimeToLive*60*1e3))}(t)}),(function(){}))}var it="Could not fetch config, will use default configs";function ot(t){if(!t)return t;var e=G.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=tt,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=at(e.tracesSamplingRate),e.logNetworkAfterSampling=at(e.networkRequestsSamplingRate),t}function at(t){return Math.random()<=t}var st,ct=1;function ut(){var t;return ct=2,st=st||(t=H.getInstance().document,new Promise((function(e){if(t&&"complete"!==t.readyState){var n=function(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()}))).then((function(){return(t=G.getInstance().installationsService.getId()).then((function(t){W=t})),t;var t})).then((function(t){return nt(t)})).then((function(){return ft()}),(function(){return ft()}))}function ft(){ct=3}var lt,pt=1e4,ht=3,vt=[],gt=!1;function mt(t){setTimeout((function(){var t,e;if(0!==ht)return vt.length?(t=vt.splice(0,1e3),e=t.map((function(t){return{source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}})),void function(data,t){return function(data){var t=G.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(data)})}(data).then((function(t){return t.ok||F.info("Call to Firebase backend failed."),t.json()})).then((function(e){var n=Number(e.nextRequestWaitMillis),r=pt;isNaN(n)||(r=Math.max(n,r));var o=e.logResponseDetails;Array.isArray(o)&&o.length>0&&"RETRY_REQUEST_LATER"===o[0].responseAction&&(vt=Object(c.g)(t,vt),F.info("Retry transport request later.")),ht=3,mt(r)}))}({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:G.getInstance().logSource,log_event:e},t).catch((function(){vt=Object(c.g)(t,vt),ht--,F.info("Tries left: "+ht+"."),mt(pt)}))):mt(pt)}),t)}function bt(t){if(!t.eventTime||!t.message)throw D.create("invalid cc log");vt=Object(c.g)(vt,[t])}function yt(t,e){lt||(lt=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];bt({message:t.apply(void 0,e),eventTime:Date.now()})}}(It)),lt(t,e)}function _t(t){var e=G.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&H.getInstance().requiredApisAvailable()&&(t.isAuto&&Z()!==V.VISIBLE||(3===ct?wt(t):ut().then((function(){return wt(t)}),(function(){return wt(t)}))))}function wt(t){if(K()){var e=G.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout((function(){return yt(t,1)}),0)}}function It(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},o={application_info:Et(),network_request_metric:r},JSON.stringify(o)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);var r={application_info:Et(),trace_metric:e};return JSON.stringify(r)}(t);var n,r,o}function Et(){return{google_app_id:G.getInstance().getAppId(),app_instance_id:K(),web_app_info:{sdk_version:R,page_url:H.getInstance().getUrl(),service_worker_status:Y(),visibility_state:Z(),effective_connection_type:Q()},application_process_state:0}}var Tt=["_fp",P,L];var St=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=H.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark="FB-PERF-TRACE-START-"+this.randomId+"-"+this.name,this.traceStopMark="FB-PERF-TRACE-STOP-"+this.randomId+"-"+this.name,this.traceMeasure=n||"FB-PERF-TRACE-MEASURE-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw D.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw D.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),_t(this)},t.prototype.record=function(t,e,n){if(t<=0)throw D.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw D.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object(c.a)({},n.attributes)),n&&n.metrics)for(var r=0,o=Object.keys(n.metrics);r<o.length;r++){var f=o[r];isNaN(Number(n.metrics[f]))||(this.counters[f]=Number(Math.floor(n.metrics[f])))}_t(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)},t.prototype.putMetric=function(t,e){if(o=t,c=this.name,0===o.length||o.length>100||!(c&&c.startsWith(M)&&Tt.indexOf(o)>-1)&&o.startsWith("_"))throw D.create("invalid custom metric name",{customMetricName:t});var n,r,o,c;this.counters[t]=(n=e,(r=Math.floor(n))<n&&F.info("Metric value should be an Integer, setting the value as : "+r+"."),r)},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n,r=!(0===(n=t).length||n.length>40||$.some((function(t){return n.startsWith(t)}))||!n.match(J)),o=function(t){return 0!==t.length&&t.length<=100}(e);if(r&&o)this.customAttributes[t]=e;else{if(!r)throw D.create("invalid attribute name",{attributeName:t});if(!o)throw D.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return Object(c.a)({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var o=H.getInstance().getUrl();if(o){var c=new t(M+o,!0),f=Math.floor(1e3*H.getInstance().getTimeOrigin());c.setStartTime(f),e&&e[0]&&(c.setDuration(Math.floor(1e3*e[0].duration)),c.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),c.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),c.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(n){var l=n.find((function(t){return"first-paint"===t.name}));l&&l.startTime&&c.putMetric("_fp",Math.floor(1e3*l.startTime));var h=n.find((function(t){return"first-contentful-paint"===t.name}));h&&h.startTime&&c.putMetric(P,Math.floor(1e3*h.startTime)),r&&c.putMetric(L,Math.floor(1e3*r))}_t(c)}},t.createUserTimingTrace=function(e){_t(new t(e,!1,e))},t}();function Ot(t){var e=t;if(e&&void 0!==e.responseStart){var n=H.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),o=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,c=Math.floor(1e3*(e.responseEnd-e.startTime));!function(t){var e=G.getInstance();if(e.instrumentationEnabled){var n=t.url,r=e.logEndPointUrl.split("?")[0],o=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==o&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout((function(){return yt(t,0)}),0)}}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:o,timeToResponseCompletedUs:c})}}function At(){K()&&(setTimeout((function(){return function(){var t=H.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){var r=setTimeout((function(){St.createOobTrace(e,n),r=void 0}),5e3);t.onFirstInputDelay((function(t){r&&(clearTimeout(r),St.createOobTrace(e,n,t))}))}else St.createOobTrace(e,n)}()}),0),setTimeout((function(){return function(){for(var t=H.getInstance(),e=t.getEntriesByType("resource"),n=0,r=e;n<r.length;n++){Ot(r[n])}t.setupObserver("resource",Ot)}()}),0),setTimeout((function(){return function(){for(var t=H.getInstance(),e=t.getEntriesByType("measure"),n=0,r=e;n<r.length;n++){Nt(r[n])}t.setupObserver("measure",Nt)}()}),0))}function Nt(t){var e=t.name;e.substring(0,k.length)!==k&&St.createUserTimingTrace(e)}var Rt,kt,Mt=function(){function t(t){this.app=t,H.getInstance().requiredApisAvailable()&&Object(f.d)().then((function(t){t&&(gt||(mt(5500),gt=!0),ut().then(At,At))})).catch((function(t){F.info("Environment doesn't support IndexedDB: "+t)}))}return t.prototype.trace=function(t){return new St(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return G.getInstance().instrumentationEnabled},set:function(t){G.getInstance().instrumentationEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return G.getInstance().dataCollectionEnabled},set:function(t){G.getInstance().dataCollectionEnabled=t},enumerable:!1,configurable:!0}),t}();Rt=o.a,kt=function(t,e){if("[DEFAULT]"!==t.name)throw D.create("FB not default");if("undefined"==typeof window)throw D.create("no window");return function(t){A=t}(window),G.getInstance().firebaseAppInstance=t,G.getInstance().installationsService=e,new Mt(t)},Rt.INTERNAL.registerComponent(new I("performance",(function(t){var e=t.getProvider("app").getImmediate(),n=t.getProvider("installations").getImmediate();return kt(e,n)}),"PUBLIC")),Rt.registerVersion("@firebase/performance",N)}}]);