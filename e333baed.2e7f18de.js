/*! For license information please see e333baed.2e7f18de.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{169:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return f}));var n=t(1),o=t(9),u=(t(179),t(177)),a={id:"standards",title:"i18n standards",sidebar_label:"On i18n standards"},c=[{value:"Locales",id:"locales",children:[]},{value:"CLDR",id:"cldr",children:[]}],i={rightToc:c},l="wrapper";function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(u.b)(l,Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"locales"},"Locales"),Object(u.b)("p",null,"Facebook uses a ",Object(u.b)("inlineCode",{parentName:"p"},"xx_XX")," format for representing locales like: ",Object(u.b)("inlineCode",{parentName:"p"},"en_US"),", ",Object(u.b)("inlineCode",{parentName:"p"},"jp_JP"),", etc.  We're actively working on separating our ",Object(u.b)("inlineCode",{parentName:"p"},"language")," + ",Object(u.b)("inlineCode",{parentName:"p"},"country")," combinations internally, and where we go from there as far as standards go is unknown. BUT if you'd like to help support ",Object(u.b)("inlineCode",{parentName:"p"},"bcp-47")," standards or similar, you are very welcome to contribute!"),Object(u.b)("h2",{id:"cldr"},"CLDR"),Object(u.b)("p",null,"We generate all our number variation data found in our ",Object(u.b)("inlineCode",{parentName:"p"},"IntlNumberTypes")," internals from ",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"http://cldr.unicode.org/"}),"CLDR (Unicode Common Locale Data Repository)"),"."))}f.isMDXComponent=!0},177:function(e,r,t){"use strict";t.d(r,"a",(function(){return c})),t.d(r,"b",(function(){return s}));var n=t(0),o=t.n(n),u=o.a.createContext({}),a=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):Object.assign({},r,e)),t},c=function(e){var r=a(e.components);return o.a.createElement(u.Provider,{value:r},e.children)};var i="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,i=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===r.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),f=a(t),s=n,p=f[c+"."+s]||f[s]||l[s]||u;return t?o.a.createElement(p,Object.assign({},{ref:r},i,{components:t})):o.a.createElement(p,Object.assign({},{ref:r},i))}));function s(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,a=new Array(u);a[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[i]="string"==typeof e?e:n,a[1]=c;for(var s=2;s<u;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},179:function(e,r,t){"use strict";e.exports=t(180)},180:function(e,r,t){"use strict";var n=t(181),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}function j(){}function w(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,n(S,O.prototype),S.isPureReactComponent=!0;var C={current:null},_={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,t){var n,o={},a=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(a=""+r.key),r)k.call(r,n)&&!x.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:a,ref:c,props:o,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,$=[];function N(e,r,t,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function L(e,r,t){return null==e?0:function e(r,t,n,o){var c=typeof r;"undefined"!==c&&"boolean"!==c||(r=null);var i=!1;if(null===r)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(r.$$typeof){case u:case a:i=!0}}if(i)return n(o,r,""===t?"."+D(r,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(r))for(var l=0;l<r.length;l++){var f=t+D(c=r[l],l);i+=e(c,f,n,o)}else if(null===r||"object"!=typeof r?f=null:f="function"==typeof(f=m&&r[m]||r["@@iterator"])?f:null,"function"==typeof f)for(r=f.call(r),l=0;!(c=r.next()).done;)i+=e(c=c.value,f=t+D(c,l++),n,o);else if("object"===c)throw n=""+r,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n,""));return i}(e,"",r,t)}function D(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function A(e,r){e.func.call(e.context,r,e.count++)}function U(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?I(e,n,t,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,r){return{$$typeof:u,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+t)),n.push(e))}function I(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(R,"$&/")+"/"),L(e,U,r=N(r,u,n,o)),T(r)}function M(){var e=C.current;if(null===e)throw Error(v(321));return e}var q={Children:{map:function(e,r,t){if(null==e)return e;var n=[];return I(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;L(e,A,r=N(null,null,r,t)),T(r)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var r=[];return I(e,r,null,(function(e){return e})),r},only:function(e){if(!P(e))throw Error(v(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},useCallback:function(e,r){return M().useCallback(e,r)},useContext:function(e,r){return M().useContext(e,r)},useEffect:function(e,r){return M().useEffect(e,r)},useImperativeHandle:function(e,r,t){return M().useImperativeHandle(e,r,t)},useDebugValue:function(){},useLayoutEffect:function(e,r){return M().useLayoutEffect(e,r)},useMemo:function(e,r){return M().useMemo(e,r)},useReducer:function(e,r,t){return M().useReducer(e,r,t)},useRef:function(e){return M().useRef(e)},useState:function(e){return M().useState(e)},Fragment:c,Profiler:l,StrictMode:i,Suspense:y,createElement:E,cloneElement:function(e,r,t){if(null==e)throw Error(v(267,e));var o=n({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,i=_.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)k.call(r,f)&&!x.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:u,type:e.type,key:a,ref:c,props:o,_owner:i}},createFactory:function(e){var r=E.bind(null,e);return r.type=e,r},isValidElement:P,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n}},F={default:q},X=F&&q||F;e.exports=X.default||X},181:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,c,i=a(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(i[f]=t[f]);if(n){c=n(t);for(var s=0;s<c.length;s++)u.call(t,c[s])&&(i[c[s]]=t[c[s]])}}return i}}}]);