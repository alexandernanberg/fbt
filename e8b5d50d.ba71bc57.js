/*! For license information please see e8b5d50d.ba71bc57.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return f}));var r=n(1),o=n(9),a=(n(179),n(177)),u={id:"autoparam",title:"Auto-parameterization",sidebar_label:"Auto-parameterization"},c=[],i={rightToc:c},l="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(l,Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"<fbt>")," will automatically wrap any non-fbt children in the top-level\n",Object(a.b)("inlineCode",{parentName:"p"},"<fbt>")," as though they were written with an ",Object(a.b)("inlineCode",{parentName:"p"},"<fbt:param>")," with a\n",Object(a.b)("inlineCode",{parentName:"p"},"name")," attribute containing the child's text.  It will pull any child\ntext into the parameter name, including those of recursive structures.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},Object(a.b)("span",{style:{color:"red"}}," Note this is inherently not available to\nthe ",Object(a.b)("inlineCode",{parentName:"strong"},"fbt(...)")," API "))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<fbt desc="auto-wrap example">\n  Go on an\n  <a href="#">\n    <span>awesome</span> vacation\n  </a>\n</fbt>\n')),Object(a.b)("p",null,"When extracted for translation, the result is:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "phrases": [\n    {\n      "hashToText": {\n        "6b034a8291e7e7a8241fe7b914106066": "Go on an {=awesome vacation}"\n      },\n      "desc": "auto-wrap example",\n      ...,\n    },\n    {\n      "hashToText": {\n        "e9b2d1a9d1ae7961c40dfac907d50d64": "{=awesome} vacation"\n      },\n      "desc": "In the phrase: \\"Go on an {=awesome vacation}\\"",\n      ...,\n    },\n    {\n      "hashToText": {\n        "63a89a77a42a9681b88086dc938ec5e3": "awesome"\n      },\n      "desc": "In the phrase: \\"Go on an {=awesome} vacation\\"",\n      ...,\n    }\n  ],\n  "childParentMappings": {\n    "1": 0,\n    "2": 1\n  }\n}\n')),Object(a.b)("p",null,'Notice the description for "vacation" is auto-generated with an ',Object(a.b)("inlineCode",{parentName:"p"},'"In\nthe phrase: ..."')," prefix.  Additionally, we use a convention of an ",Object(a.b)("inlineCode",{parentName:"p"},"="),"\nprefix in the interpolation ",Object(a.b)("inlineCode",{parentName:"p"},"{=awesome vacation}")," to signal to the\ntranslator that this exact word or phrase goes in the associated outer\nsentence."),Object(a.b)("p",null,"Furthermore, we provide a mapping ",Object(a.b)("inlineCode",{parentName:"p"},"{<childIndex>: <parentIndex>}")," in\nthe collection output ",Object(a.b)("inlineCode",{parentName:"p"},"childParentMappings"),".  At Facebook, we use\nthese to display all relevant inner and outer strings when translating\nany given piece of text.  We recommend you do the same in whatever\ntranslation framework you use.  Context is crucial for accurate\ntranslations."))}f.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var i="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),f=u(n),s=r,p=f[c+"."+s]||f[s]||l[s]||a;return n?o.a.createElement(p,Object.assign({},{ref:t},i,{components:n})):o.a.createElement(p,Object.assign({},{ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[i]="string"==typeof e?e:r,u[1]=c;for(var s=2;s<a;s++)u[s]=n[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},179:function(e,t,n){"use strict";e.exports=n(180)},180:function(e,t,n){"use strict";var r=n(181),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function g(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||v}function O(){}function j(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=g.prototype;var x=j.prototype=new O;x.constructor=j,r(x,g.prototype),x.isPureReactComponent=!0;var C={current:null},S={current:null},_=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,o={},u=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)_.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:S.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g,$=[];function R(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var i=!1;if(null===t)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case u:i=!0}}if(i)return r(o,t,""===n?"."+I(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=n+I(c=t[l],l);i+=e(c,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(c=t.next()).done;)i+=e(c=c.value,f=n+I(c,l++),r,o);else if("object"===c)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(N,"$&/")+"/"),A(e,F,t=R(t,a,r,o)),T(t)}function D(){var e=C.current;if(null===e)throw Error(h(321));return e}var U={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,M,t=R(null,null,t,n)),T(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,n){return D().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,n){return D().useReducer(e,t,n)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:c,Profiler:l,StrictMode:i,Suspense:d,createElement:E,cloneElement:function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)_.call(t,f)&&!k.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:a,type:e.type,key:u,ref:c,props:o,_owner:i}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r}},L={default:U},z=L&&U||L;e.exports=z.default||z},181:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,i=u(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(i[f]=n[f]);if(r){c=r(n);for(var s=0;s<c.length;s++)a.call(n,c[s])&&(i[c[s]]=n[c[s]])}}return i}}}]);