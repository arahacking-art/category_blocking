var wv=Object.defineProperty;var xv=(e,t,r)=>t in e?wv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var H=(e,t,r)=>xv(e,typeof t!="symbol"?t+"":t,r);function _v(e,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(s,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function kv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cf={exports:{}},Za={},uf={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var un=Symbol.for("react.element"),Cv=Symbol.for("react.portal"),Sv=Symbol.for("react.fragment"),Ev=Symbol.for("react.strict_mode"),$v=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Av=Symbol.for("react.context"),Tv=Symbol.for("react.forward_ref"),Pv=Symbol.for("react.suspense"),Nv=Symbol.for("react.memo"),Lv=Symbol.for("react.lazy"),Gd=Symbol.iterator;function Mv(e){return e===null||typeof e!="object"?null:(e=Gd&&e[Gd]||e["@@iterator"],typeof e=="function"?e:null)}var df={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hf=Object.assign,pf={};function Ui(e,t,r){this.props=e,this.context=t,this.refs=pf,this.updater=r||df}Ui.prototype.isReactComponent={};Ui.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ui.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ff(){}ff.prototype=Ui.prototype;function Lu(e,t,r){this.props=e,this.context=t,this.refs=pf,this.updater=r||df}var Mu=Lu.prototype=new ff;Mu.constructor=Lu;hf(Mu,Ui.prototype);Mu.isPureReactComponent=!0;var Kd=Array.isArray,mf=Object.prototype.hasOwnProperty,Iu={current:null},gf={key:!0,ref:!0,__self:!0,__source:!0};function vf(e,t,r){var s,i={},o=null,n=null;if(t!=null)for(s in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(o=""+t.key),t)mf.call(t,s)&&!gf.hasOwnProperty(s)&&(i[s]=t[s]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(s in a=e.defaultProps,a)i[s]===void 0&&(i[s]=a[s]);return{$$typeof:un,type:e,key:o,ref:n,props:i,_owner:Iu.current}}function Iv(e,t){return{$$typeof:un,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ru(e){return typeof e=="object"&&e!==null&&e.$$typeof===un}function Rv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var qd=/\/+/g;function zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rv(""+e.key):t.toString(36)}function Zn(e,t,r,s,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(o){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case un:case Cv:n=!0}}if(n)return n=e,i=i(n),e=s===""?"."+zl(n,0):s,Kd(i)?(r="",e!=null&&(r=e.replace(qd,"$&/")+"/"),Zn(i,t,r,"",function(u){return u})):i!=null&&(Ru(i)&&(i=Iv(i,r+(!i.key||n&&n.key===i.key?"":(""+i.key).replace(qd,"$&/")+"/")+e)),t.push(i)),1;if(n=0,s=s===""?".":s+":",Kd(e))for(var a=0;a<e.length;a++){o=e[a];var l=s+zl(o,a);n+=Zn(o,t,r,l,i)}else if(l=Mv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=s+zl(o,a++),n+=Zn(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function Sn(e,t,r){if(e==null)return e;var s=[],i=0;return Zn(e,s,"","",function(o){return t.call(r,o,i++)}),s}function Ov(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},Jn={transition:null},Dv={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Jn,ReactCurrentOwner:Iu};function yf(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Sn,forEach:function(e,t,r){Sn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Sn(e,function(){t++}),t},toArray:function(e){return Sn(e,function(t){return t})||[]},only:function(e){if(!Ru(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Ui;Y.Fragment=Sv;Y.Profiler=$v;Y.PureComponent=Lu;Y.StrictMode=Ev;Y.Suspense=Pv;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dv;Y.act=yf;Y.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=hf({},e.props),i=e.key,o=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,n=Iu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)mf.call(t,l)&&!gf.hasOwnProperty(l)&&(s[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];s.children=a}return{$$typeof:un,type:e.type,key:i,ref:o,props:s,_owner:n}};Y.createContext=function(e){return e={$$typeof:Av,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zv,_context:e},e.Consumer=e};Y.createElement=vf;Y.createFactory=function(e){var t=vf.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Tv,render:e}};Y.isValidElement=Ru;Y.lazy=function(e){return{$$typeof:Lv,_payload:{_status:-1,_result:e},_init:Ov}};Y.memo=function(e,t){return{$$typeof:Nv,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Jn.transition;Jn.transition={};try{e()}finally{Jn.transition=t}};Y.unstable_act=yf;Y.useCallback=function(e,t){return gt.current.useCallback(e,t)};Y.useContext=function(e){return gt.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};Y.useEffect=function(e,t){return gt.current.useEffect(e,t)};Y.useId=function(){return gt.current.useId()};Y.useImperativeHandle=function(e,t,r){return gt.current.useImperativeHandle(e,t,r)};Y.useInsertionEffect=function(e,t){return gt.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return gt.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return gt.current.useMemo(e,t)};Y.useReducer=function(e,t,r){return gt.current.useReducer(e,t,r)};Y.useRef=function(e){return gt.current.useRef(e)};Y.useState=function(e){return gt.current.useState(e)};Y.useSyncExternalStore=function(e,t,r){return gt.current.useSyncExternalStore(e,t,r)};Y.useTransition=function(){return gt.current.useTransition()};Y.version="18.3.1";uf.exports=Y;var E=uf.exports;const bf=kv(E),F=_v({__proto__:null,default:bf},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv=E,Fv=Symbol.for("react.element"),Bv=Symbol.for("react.fragment"),jv=Object.prototype.hasOwnProperty,Uv=Vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hv={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,t,r){var s,i={},o=null,n=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(n=t.ref);for(s in t)jv.call(t,s)&&!Hv.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:Fv,type:e,key:o,ref:n,props:i,_owner:Uv.current}}Za.Fragment=Bv;Za.jsx=wf;Za.jsxs=wf;cf.exports=Za;var _=cf.exports,xf={exports:{}},Dt={},_f={exports:{}},kf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,K){var Q=N.length;N.push(K);e:for(;0<Q;){var xe=Q-1>>>1,Me=N[xe];if(0<i(Me,K))N[xe]=K,N[Q]=Me,Q=xe;else break e}}function r(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var K=N[0],Q=N.pop();if(Q!==K){N[0]=Q;e:for(var xe=0,Me=N.length,X=Me>>>1;xe<X;){var _e=2*(xe+1)-1,et=N[_e],ze=_e+1,jt=N[ze];if(0>i(et,Q))ze<Me&&0>i(jt,et)?(N[xe]=jt,N[ze]=Q,xe=ze):(N[xe]=et,N[_e]=Q,xe=_e);else if(ze<Me&&0>i(jt,Q))N[xe]=jt,N[ze]=Q,xe=ze;else break e}}return K}function i(N,K){var Q=N.sortIndex-K.sortIndex;return Q!==0?Q:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var n=Date,a=n.now();e.unstable_now=function(){return n.now()-a}}var l=[],u=[],h=1,d=null,p=3,g=!1,v=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var K=r(u);K!==null;){if(K.callback===null)s(u);else if(K.startTime<=N)s(u),K.sortIndex=K.expirationTime,t(l,K);else break;K=r(u)}}function w(N){if(x=!1,y(N),!v)if(r(l)!==null)v=!0,te(k);else{var K=r(u);K!==null&&fe(w,K.startTime-N)}}function k(N,K){v=!1,x&&(x=!1,b(T),T=-1),g=!0;var Q=p;try{for(y(K),d=r(l);d!==null&&(!(d.expirationTime>K)||N&&!ee());){var xe=d.callback;if(typeof xe=="function"){d.callback=null,p=d.priorityLevel;var Me=xe(d.expirationTime<=K);K=e.unstable_now(),typeof Me=="function"?d.callback=Me:d===r(l)&&s(l),y(K)}else s(l);d=r(l)}if(d!==null)var X=!0;else{var _e=r(u);_e!==null&&fe(w,_e.startTime-K),X=!1}return X}finally{d=null,p=Q,g=!1}}var S=!1,$=null,T=-1,M=5,z=-1;function ee(){return!(e.unstable_now()-z<M)}function he(){if($!==null){var N=e.unstable_now();z=N;var K=!0;try{K=$(!0,N)}finally{K?le():(S=!1,$=null)}}else S=!1}var le;if(typeof m=="function")le=function(){m(he)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,R=pe.port2;pe.port1.onmessage=he,le=function(){R.postMessage(null)}}else le=function(){C(he,0)};function te(N){$=N,S||(S=!0,le())}function fe(N,K){T=C(function(){N(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,te(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var Q=p;p=K;try{return N()}finally{p=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=p;p=N;try{return K()}finally{p=Q}},e.unstable_scheduleCallback=function(N,K,Q){var xe=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?xe+Q:xe):Q=xe,N){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Q+Me,N={id:h++,callback:K,priorityLevel:N,startTime:Q,expirationTime:Me,sortIndex:-1},Q>xe?(N.sortIndex=Q,t(u,N),r(l)===null&&N===r(u)&&(x?(b(T),T=-1):x=!0,fe(w,Q-xe))):(N.sortIndex=Me,t(l,N),v||g||(v=!0,te(k))),N},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(N){var K=p;return function(){var Q=p;p=K;try{return N.apply(this,arguments)}finally{p=Q}}}})(kf);_f.exports=kf;var Wv=_f.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv=E,Ot=Wv;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cf=new Set,Vo={};function Zs(e,t){Li(e,t),Li(e+"Capture",t)}function Li(e,t){for(Vo[e]=t,e=0;e<t.length;e++)Cf.add(t[e])}var Ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,Kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qd={},Xd={};function qv(e){return _c.call(Xd,e)?!0:_c.call(Qd,e)?!1:Kv.test(e)?Xd[e]=!0:(Qd[e]=!0,!1)}function Qv(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xv(e,t,r,s){if(t===null||typeof t>"u"||Qv(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function vt(e,t,r,s,i,o,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=n}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ou=/[\-:]([a-z])/g;function Du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ou,Du);nt[t]=new vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ou,Du);nt[t]=new vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ou,Du);nt[t]=new vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new vt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vu(e,t,r,s){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xv(t,r,i,s)&&(r=null),s||i===null?qv(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Vr=Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,En=Symbol.for("react.element"),hi=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),Fu=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),Sf=Symbol.for("react.provider"),Ef=Symbol.for("react.context"),Bu=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Sc=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),Kr=Symbol.for("react.lazy"),$f=Symbol.for("react.offscreen"),Yd=Symbol.iterator;function to(e){return e===null||typeof e!="object"?null:(e=Yd&&e[Yd]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,Al;function vo(e){if(Al===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Al=t&&t[1]||""}return`
`+Al+e}var Tl=!1;function Pl(e,t){if(!e||Tl)return"";Tl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=s.stack.split(`
`),n=i.length-1,a=o.length-1;1<=n&&0<=a&&i[n]!==o[a];)a--;for(;1<=n&&0<=a;n--,a--)if(i[n]!==o[a]){if(n!==1||a!==1)do if(n--,a--,0>a||i[n]!==o[a]){var l=`
`+i[n].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=n&&0<=a);break}}}finally{Tl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?vo(e):""}function Yv(e){switch(e.tag){case 5:return vo(e.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function Ec(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pi:return"Fragment";case hi:return"Portal";case kc:return"Profiler";case Fu:return"StrictMode";case Cc:return"Suspense";case Sc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ef:return(e.displayName||"Context")+".Consumer";case Sf:return(e._context.displayName||"Context")+".Provider";case Bu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ju:return t=e.displayName||null,t!==null?t:Ec(e.type)||"Memo";case Kr:t=e._payload,e=e._init;try{return Ec(e(t))}catch{}}return null}function Zv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ec(t);case 8:return t===Fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ps(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jv(e){var t=zf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(n){s=""+n,o.call(this,n)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(n){s=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $n(e){e._valueTracker||(e._valueTracker=Jv(e))}function Af(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=zf(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $c(e,t){var r=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Zd(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=ps(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tf(e,t){t=t.checked,t!=null&&Vu(e,"checked",t,!1)}function zc(e,t){Tf(e,t);var r=ps(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ac(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ac(e,t.type,ps(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jd(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ac(e,t,r){(t!=="number"||fa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var yo=Array.isArray;function Si(e,t,r,s){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&s&&(e[r].defaultSelected=!0)}else{for(r=""+ps(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Tc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eh(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(P(92));if(yo(r)){if(1<r.length)throw Error(P(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ps(r)}}function Pf(e,t){var r=ps(t.value),s=ps(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function th(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zn,Lf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zn=zn||document.createElement("div"),zn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e0=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(e){e0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xo[t]=xo[e]})});function Mf(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||xo.hasOwnProperty(e)&&xo[e]?(""+t).trim():t+"px"}function If(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=Mf(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,i):e[r]=i}}var t0=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nc(e,t){if(t){if(t0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Lc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mc=null;function Uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ic=null,Ei=null,$i=null;function rh(e){if(e=pn(e)){if(typeof Ic!="function")throw Error(P(280));var t=e.stateNode;t&&(t=sl(t),Ic(e.stateNode,e.type,t))}}function Rf(e){Ei?$i?$i.push(e):$i=[e]:Ei=e}function Of(){if(Ei){var e=Ei,t=$i;if($i=Ei=null,rh(e),t)for(e=0;e<t.length;e++)rh(t[e])}}function Df(e,t){return e(t)}function Vf(){}var Nl=!1;function Ff(e,t,r){if(Nl)return e(t,r);Nl=!0;try{return Df(e,t,r)}finally{Nl=!1,(Ei!==null||$i!==null)&&(Vf(),Of())}}function Bo(e,t){var r=e.stateNode;if(r===null)return null;var s=sl(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(P(231,t,typeof r));return r}var Rc=!1;if(Ir)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Rc=!1}function r0(e,t,r,s,i,o,n,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(h){this.onError(h)}}var _o=!1,ma=null,ga=!1,Oc=null,s0={onError:function(e){_o=!0,ma=e}};function i0(e,t,r,s,i,o,n,a,l){_o=!1,ma=null,r0.apply(s0,arguments)}function o0(e,t,r,s,i,o,n,a,l){if(i0.apply(this,arguments),_o){if(_o){var u=ma;_o=!1,ma=null}else throw Error(P(198));ga||(ga=!0,Oc=u)}}function Js(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Bf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sh(e){if(Js(e)!==e)throw Error(P(188))}function n0(e){var t=e.alternate;if(!t){if(t=Js(e),t===null)throw Error(P(188));return t!==e?null:e}for(var r=e,s=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return sh(i),e;if(o===s)return sh(i),t;o=o.sibling}throw Error(P(188))}if(r.return!==s.return)r=i,s=o;else{for(var n=!1,a=i.child;a;){if(a===r){n=!0,r=i,s=o;break}if(a===s){n=!0,s=i,r=o;break}a=a.sibling}if(!n){for(a=o.child;a;){if(a===r){n=!0,r=o,s=i;break}if(a===s){n=!0,s=o,r=i;break}a=a.sibling}if(!n)throw Error(P(189))}}if(r.alternate!==s)throw Error(P(190))}if(r.tag!==3)throw Error(P(188));return r.stateNode.current===r?e:t}function jf(e){return e=n0(e),e!==null?Uf(e):null}function Uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uf(e);if(t!==null)return t;e=e.sibling}return null}var Hf=Ot.unstable_scheduleCallback,ih=Ot.unstable_cancelCallback,a0=Ot.unstable_shouldYield,l0=Ot.unstable_requestPaint,Ie=Ot.unstable_now,c0=Ot.unstable_getCurrentPriorityLevel,Hu=Ot.unstable_ImmediatePriority,Wf=Ot.unstable_UserBlockingPriority,va=Ot.unstable_NormalPriority,u0=Ot.unstable_LowPriority,Gf=Ot.unstable_IdlePriority,Ja=null,br=null;function d0(e){if(br&&typeof br.onCommitFiberRoot=="function")try{br.onCommitFiberRoot(Ja,e,void 0,(e.current.flags&128)===128)}catch{}}var ar=Math.clz32?Math.clz32:f0,h0=Math.log,p0=Math.LN2;function f0(e){return e>>>=0,e===0?32:31-(h0(e)/p0|0)|0}var An=64,Tn=4194304;function bo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ya(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,i=e.suspendedLanes,o=e.pingedLanes,n=r&268435455;if(n!==0){var a=n&~i;a!==0?s=bo(a):(o&=n,o!==0&&(s=bo(o)))}else n=r&~i,n!==0?s=bo(n):o!==0&&(s=bo(o));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-ar(t),i=1<<r,s|=e[r],t&=~i;return s}function m0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var n=31-ar(o),a=1<<n,l=i[n];l===-1?(!(a&r)||a&s)&&(i[n]=m0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Dc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kf(){var e=An;return An<<=1,!(An&4194240)&&(An=64),e}function Ll(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function dn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ar(t),e[t]=r}function v0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-ar(r),o=1<<i;t[i]=0,s[i]=-1,e[i]=-1,r&=~o}}function Wu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-ar(r),i=1<<s;i&t|e[s]&t&&(e[s]|=t),r&=~i}}var ce=0;function qf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qf,Gu,Xf,Yf,Zf,Vc=!1,Pn=[],rs=null,ss=null,is=null,jo=new Map,Uo=new Map,Qr=[],y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(e,t){switch(e){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(t.pointerId)}}function so(e,t,r,s,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[i]},t!==null&&(t=pn(t),t!==null&&Gu(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function b0(e,t,r,s,i){switch(t){case"focusin":return rs=so(rs,e,t,r,s,i),!0;case"dragenter":return ss=so(ss,e,t,r,s,i),!0;case"mouseover":return is=so(is,e,t,r,s,i),!0;case"pointerover":var o=i.pointerId;return jo.set(o,so(jo.get(o)||null,e,t,r,s,i)),!0;case"gotpointercapture":return o=i.pointerId,Uo.set(o,so(Uo.get(o)||null,e,t,r,s,i)),!0}return!1}function Jf(e){var t=Ns(e.target);if(t!==null){var r=Js(t);if(r!==null){if(t=r.tag,t===13){if(t=Bf(r),t!==null){e.blockedOn=t,Zf(e.priority,function(){Xf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ea(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Fc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Mc=s,r.target.dispatchEvent(s),Mc=null}else return t=pn(r),t!==null&&Gu(t),e.blockedOn=r,!1;t.shift()}return!0}function nh(e,t,r){ea(e)&&r.delete(t)}function w0(){Vc=!1,rs!==null&&ea(rs)&&(rs=null),ss!==null&&ea(ss)&&(ss=null),is!==null&&ea(is)&&(is=null),jo.forEach(nh),Uo.forEach(nh)}function io(e,t){e.blockedOn===t&&(e.blockedOn=null,Vc||(Vc=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,w0)))}function Ho(e){function t(i){return io(i,e)}if(0<Pn.length){io(Pn[0],e);for(var r=1;r<Pn.length;r++){var s=Pn[r];s.blockedOn===e&&(s.blockedOn=null)}}for(rs!==null&&io(rs,e),ss!==null&&io(ss,e),is!==null&&io(is,e),jo.forEach(t),Uo.forEach(t),r=0;r<Qr.length;r++)s=Qr[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Qr.length&&(r=Qr[0],r.blockedOn===null);)Jf(r),r.blockedOn===null&&Qr.shift()}var zi=Vr.ReactCurrentBatchConfig,ba=!0;function x0(e,t,r,s){var i=ce,o=zi.transition;zi.transition=null;try{ce=1,Ku(e,t,r,s)}finally{ce=i,zi.transition=o}}function _0(e,t,r,s){var i=ce,o=zi.transition;zi.transition=null;try{ce=4,Ku(e,t,r,s)}finally{ce=i,zi.transition=o}}function Ku(e,t,r,s){if(ba){var i=Fc(e,t,r,s);if(i===null)Ul(e,t,s,wa,r),oh(e,s);else if(b0(i,e,t,r,s))s.stopPropagation();else if(oh(e,s),t&4&&-1<y0.indexOf(e)){for(;i!==null;){var o=pn(i);if(o!==null&&Qf(o),o=Fc(e,t,r,s),o===null&&Ul(e,t,s,wa,r),o===i)break;i=o}i!==null&&s.stopPropagation()}else Ul(e,t,s,null,r)}}var wa=null;function Fc(e,t,r,s){if(wa=null,e=Uu(s),e=Ns(e),e!==null)if(t=Js(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Bf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wa=e,null}function em(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c0()){case Hu:return 1;case Wf:return 4;case va:case u0:return 16;case Gf:return 536870912;default:return 16}default:return 16}}var Zr=null,qu=null,ta=null;function tm(){if(ta)return ta;var e,t=qu,r=t.length,s,i="value"in Zr?Zr.value:Zr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var n=r-e;for(s=1;s<=n&&t[r-s]===i[o-s];s++);return ta=i.slice(e,1<s?1-s:void 0)}function ra(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function ah(){return!1}function Vt(e){function t(r,s,i,o,n){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=o,this.target=n,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Nn:ah,this.isPropagationStopped=ah,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=Vt(Hi),hn=Ee({},Hi,{view:0,detail:0}),k0=Vt(hn),Ml,Il,oo,el=Ee({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Ml=e.screenX-oo.screenX,Il=e.screenY-oo.screenY):Il=Ml=0,oo=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),lh=Vt(el),C0=Ee({},el,{dataTransfer:0}),S0=Vt(C0),E0=Ee({},hn,{relatedTarget:0}),Rl=Vt(E0),$0=Ee({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=Vt($0),A0=Ee({},Hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),T0=Vt(A0),P0=Ee({},Hi,{data:0}),ch=Vt(P0),N0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=M0[e])?!!t[e]:!1}function Xu(){return I0}var R0=Ee({},hn,{key:function(e){if(e.key){var t=N0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O0=Vt(R0),D0=Ee({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uh=Vt(D0),V0=Ee({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),F0=Vt(V0),B0=Ee({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=Vt(B0),U0=Ee({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H0=Vt(U0),W0=[9,13,27,32],Yu=Ir&&"CompositionEvent"in window,ko=null;Ir&&"documentMode"in document&&(ko=document.documentMode);var G0=Ir&&"TextEvent"in window&&!ko,rm=Ir&&(!Yu||ko&&8<ko&&11>=ko),dh=" ",hh=!1;function sm(e,t){switch(e){case"keyup":return W0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function K0(e,t){switch(e){case"compositionend":return im(t);case"keypress":return t.which!==32?null:(hh=!0,dh);case"textInput":return e=t.data,e===dh&&hh?null:e;default:return null}}function q0(e,t){if(fi)return e==="compositionend"||!Yu&&sm(e,t)?(e=tm(),ta=qu=Zr=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rm&&t.locale!=="ko"?null:t.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q0[e.type]:t==="textarea"}function om(e,t,r,s){Rf(s),t=xa(t,"onChange"),0<t.length&&(r=new Qu("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Co=null,Wo=null;function X0(e){gm(e,0)}function tl(e){var t=vi(e);if(Af(t))return e}function Y0(e,t){if(e==="change")return t}var nm=!1;if(Ir){var Ol;if(Ir){var Dl="oninput"in document;if(!Dl){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),Dl=typeof fh.oninput=="function"}Ol=Dl}else Ol=!1;nm=Ol&&(!document.documentMode||9<document.documentMode)}function mh(){Co&&(Co.detachEvent("onpropertychange",am),Wo=Co=null)}function am(e){if(e.propertyName==="value"&&tl(Wo)){var t=[];om(t,Wo,e,Uu(e)),Ff(X0,t)}}function Z0(e,t,r){e==="focusin"?(mh(),Co=t,Wo=r,Co.attachEvent("onpropertychange",am)):e==="focusout"&&mh()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Wo)}function ey(e,t){if(e==="click")return tl(t)}function ty(e,t){if(e==="input"||e==="change")return tl(t)}function ry(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cr=typeof Object.is=="function"?Object.is:ry;function Go(e,t){if(cr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!_c.call(t,i)||!cr(e[i],t[i]))return!1}return!0}function gh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vh(e,t){var r=gh(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=gh(r)}}function lm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cm(){for(var e=window,t=fa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=fa(e.document)}return t}function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sy(e){var t=cm(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&lm(r.ownerDocument.documentElement,r)){if(s!==null&&Zu(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(s.start,i);s=s.end===void 0?o:Math.min(s.end,i),!e.extend&&o>s&&(i=s,s=o,o=i),i=vh(r,o);var n=vh(r,s);i&&n&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var iy=Ir&&"documentMode"in document&&11>=document.documentMode,mi=null,Bc=null,So=null,jc=!1;function yh(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;jc||mi==null||mi!==fa(s)||(s=mi,"selectionStart"in s&&Zu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),So&&Go(So,s)||(So=s,s=xa(Bc,"onSelect"),0<s.length&&(t=new Qu("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=mi)))}function Ln(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var gi={animationend:Ln("Animation","AnimationEnd"),animationiteration:Ln("Animation","AnimationIteration"),animationstart:Ln("Animation","AnimationStart"),transitionend:Ln("Transition","TransitionEnd")},Vl={},um={};Ir&&(um=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function rl(e){if(Vl[e])return Vl[e];if(!gi[e])return e;var t=gi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in um)return Vl[e]=t[r];return e}var dm=rl("animationend"),hm=rl("animationiteration"),pm=rl("animationstart"),fm=rl("transitionend"),mm=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gs(e,t){mm.set(e,t),Zs(t,[e])}for(var Fl=0;Fl<bh.length;Fl++){var Bl=bh[Fl],oy=Bl.toLowerCase(),ny=Bl[0].toUpperCase()+Bl.slice(1);gs(oy,"on"+ny)}gs(dm,"onAnimationEnd");gs(hm,"onAnimationIteration");gs(pm,"onAnimationStart");gs("dblclick","onDoubleClick");gs("focusin","onFocus");gs("focusout","onBlur");gs(fm,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ay=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function wh(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,o0(s,t,void 0,e),e.currentTarget=null}function gm(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],i=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var n=s.length-1;0<=n;n--){var a=s[n],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;wh(i,a,u),o=l}else for(n=0;n<s.length;n++){if(a=s[n],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;wh(i,a,u),o=l}}}if(ga)throw e=Oc,ga=!1,Oc=null,e}function me(e,t){var r=t[Kc];r===void 0&&(r=t[Kc]=new Set);var s=e+"__bubble";r.has(s)||(vm(t,e,2,!1),r.add(s))}function jl(e,t,r){var s=0;t&&(s|=4),vm(r,e,s,t)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function Ko(e){if(!e[Mn]){e[Mn]=!0,Cf.forEach(function(r){r!=="selectionchange"&&(ay.has(r)||jl(r,!1,e),jl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mn]||(t[Mn]=!0,jl("selectionchange",!1,t))}}function vm(e,t,r,s){switch(em(t)){case 1:var i=x0;break;case 4:i=_0;break;default:i=Ku}r=i.bind(null,t,r,e),i=void 0,!Rc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ul(e,t,r,s,i){var o=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var n=s.tag;if(n===3||n===4){var a=s.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(n===4)for(n=s.return;n!==null;){var l=n.tag;if((l===3||l===4)&&(l=n.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;n=n.return}for(;a!==null;){if(n=Ns(a),n===null)return;if(l=n.tag,l===5||l===6){s=o=n;continue e}a=a.parentNode}}s=s.return}Ff(function(){var u=o,h=Uu(r),d=[];e:{var p=mm.get(e);if(p!==void 0){var g=Qu,v=e;switch(e){case"keypress":if(ra(r)===0)break e;case"keydown":case"keyup":g=O0;break;case"focusin":v="focus",g=Rl;break;case"focusout":v="blur",g=Rl;break;case"beforeblur":case"afterblur":g=Rl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=F0;break;case dm:case hm:case pm:g=z0;break;case fm:g=j0;break;case"scroll":g=k0;break;case"wheel":g=H0;break;case"copy":case"cut":case"paste":g=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=uh}var x=(t&4)!==0,C=!x&&e==="scroll",b=x?p!==null?p+"Capture":null:p;x=[];for(var m=u,y;m!==null;){y=m;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,b!==null&&(w=Bo(m,b),w!=null&&x.push(qo(m,w,y)))),C)break;m=m.return}0<x.length&&(p=new g(p,v,null,r,h),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&r!==Mc&&(v=r.relatedTarget||r.fromElement)&&(Ns(v)||v[Rr]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=u,v=v?Ns(v):null,v!==null&&(C=Js(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=lh,w="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=uh,w="onPointerLeave",b="onPointerEnter",m="pointer"),C=g==null?p:vi(g),y=v==null?p:vi(v),p=new x(w,m+"leave",g,r,h),p.target=C,p.relatedTarget=y,w=null,Ns(h)===u&&(x=new x(b,m+"enter",v,r,h),x.target=y,x.relatedTarget=C,w=x),C=w,g&&v)t:{for(x=g,b=v,m=0,y=x;y;y=ni(y))m++;for(y=0,w=b;w;w=ni(w))y++;for(;0<m-y;)x=ni(x),m--;for(;0<y-m;)b=ni(b),y--;for(;m--;){if(x===b||b!==null&&x===b.alternate)break t;x=ni(x),b=ni(b)}x=null}else x=null;g!==null&&xh(d,p,g,x,!1),v!==null&&C!==null&&xh(d,C,v,x,!0)}}e:{if(p=u?vi(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=Y0;else if(ph(p))if(nm)k=ty;else{k=J0;var S=Z0}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=ey);if(k&&(k=k(e,u))){om(d,k,r,h);break e}S&&S(e,p,u),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Ac(p,"number",p.value)}switch(S=u?vi(u):window,e){case"focusin":(ph(S)||S.contentEditable==="true")&&(mi=S,Bc=u,So=null);break;case"focusout":So=Bc=mi=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,yh(d,r,h);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":yh(d,r,h)}var $;if(Yu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else fi?sm(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(rm&&r.locale!=="ko"&&(fi||T!=="onCompositionStart"?T==="onCompositionEnd"&&fi&&($=tm()):(Zr=h,qu="value"in Zr?Zr.value:Zr.textContent,fi=!0)),S=xa(u,T),0<S.length&&(T=new ch(T,e,null,r,h),d.push({event:T,listeners:S}),$?T.data=$:($=im(r),$!==null&&(T.data=$)))),($=G0?K0(e,r):q0(e,r))&&(u=xa(u,"onBeforeInput"),0<u.length&&(h=new ch("onBeforeInput","beforeinput",null,r,h),d.push({event:h,listeners:u}),h.data=$))}gm(d,t)})}function qo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function xa(e,t){for(var r=t+"Capture",s=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Bo(e,r),o!=null&&s.unshift(qo(e,o,i)),o=Bo(e,t),o!=null&&s.push(qo(e,o,i))),e=e.return}return s}function ni(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xh(e,t,r,s,i){for(var o=t._reactName,n=[];r!==null&&r!==s;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===s)break;a.tag===5&&u!==null&&(a=u,i?(l=Bo(r,o),l!=null&&n.unshift(qo(r,l,a))):i||(l=Bo(r,o),l!=null&&n.push(qo(r,l,a)))),r=r.return}n.length!==0&&e.push({event:t,listeners:n})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function _h(e){return(typeof e=="string"?e:""+e).replace(ly,`
`).replace(cy,"")}function In(e,t,r){if(t=_h(t),_h(e)!==t&&r)throw Error(P(425))}function _a(){}var Uc=null,Hc=null;function Wc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(e){return kh.resolve(null).then(e).catch(hy)}:Gc;function hy(e){setTimeout(function(){throw e})}function Hl(e,t){var r=t,s=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){e.removeChild(i),Ho(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);Ho(t)}function os(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Wi=Math.random().toString(36).slice(2),vr="__reactFiber$"+Wi,Qo="__reactProps$"+Wi,Rr="__reactContainer$"+Wi,Kc="__reactEvents$"+Wi,py="__reactListeners$"+Wi,fy="__reactHandles$"+Wi;function Ns(e){var t=e[vr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Rr]||r[vr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ch(e);e!==null;){if(r=e[vr])return r;e=Ch(e)}return t}e=r,r=e.parentNode}return null}function pn(e){return e=e[vr]||e[Rr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function sl(e){return e[Qo]||null}var qc=[],yi=-1;function vs(e){return{current:e}}function ge(e){0>yi||(e.current=qc[yi],qc[yi]=null,yi--)}function de(e,t){yi++,qc[yi]=e.current,e.current=t}var fs={},ht=vs(fs),_t=vs(!1),Bs=fs;function Mi(e,t){var r=e.type.contextTypes;if(!r)return fs;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function kt(e){return e=e.childContextTypes,e!=null}function ka(){ge(_t),ge(ht)}function Sh(e,t,r){if(ht.current!==fs)throw Error(P(168));de(ht,t),de(_t,r)}function ym(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(P(108,Zv(e)||"Unknown",i));return Ee({},r,s)}function Ca(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fs,Bs=ht.current,de(ht,e),de(_t,_t.current),!0}function Eh(e,t,r){var s=e.stateNode;if(!s)throw Error(P(169));r?(e=ym(e,t,Bs),s.__reactInternalMemoizedMergedChildContext=e,ge(_t),ge(ht),de(ht,e)):ge(_t),de(_t,r)}var Er=null,il=!1,Wl=!1;function bm(e){Er===null?Er=[e]:Er.push(e)}function my(e){il=!0,bm(e)}function ys(){if(!Wl&&Er!==null){Wl=!0;var e=0,t=ce;try{var r=Er;for(ce=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Er=null,il=!1}catch(i){throw Er!==null&&(Er=Er.slice(e+1)),Hf(Hu,ys),i}finally{ce=t,Wl=!1}}return null}var bi=[],wi=0,Sa=null,Ea=0,Ht=[],Wt=0,js=null,zr=1,Ar="";function zs(e,t){bi[wi++]=Ea,bi[wi++]=Sa,Sa=e,Ea=t}function wm(e,t,r){Ht[Wt++]=zr,Ht[Wt++]=Ar,Ht[Wt++]=js,js=e;var s=zr;e=Ar;var i=32-ar(s)-1;s&=~(1<<i),r+=1;var o=32-ar(t)+i;if(30<o){var n=i-i%5;o=(s&(1<<n)-1).toString(32),s>>=n,i-=n,zr=1<<32-ar(t)+i|r<<i|s,Ar=o+e}else zr=1<<o|r<<i|s,Ar=e}function Ju(e){e.return!==null&&(zs(e,1),wm(e,1,0))}function ed(e){for(;e===Sa;)Sa=bi[--wi],bi[wi]=null,Ea=bi[--wi],bi[wi]=null;for(;e===js;)js=Ht[--Wt],Ht[Wt]=null,Ar=Ht[--Wt],Ht[Wt]=null,zr=Ht[--Wt],Ht[Wt]=null}var Rt=null,Mt=null,ve=!1,nr=null;function xm(e,t){var r=Gt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function $h(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,Mt=os(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,Mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=js!==null?{id:zr,overflow:Ar}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Gt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Rt=e,Mt=null,!0):!1;default:return!1}}function Qc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xc(e){if(ve){var t=Mt;if(t){var r=t;if(!$h(e,t)){if(Qc(e))throw Error(P(418));t=os(r.nextSibling);var s=Rt;t&&$h(e,t)?xm(s,r):(e.flags=e.flags&-4097|2,ve=!1,Rt=e)}}else{if(Qc(e))throw Error(P(418));e.flags=e.flags&-4097|2,ve=!1,Rt=e}}}function zh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function Rn(e){if(e!==Rt)return!1;if(!ve)return zh(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wc(e.type,e.memoizedProps)),t&&(t=Mt)){if(Qc(e))throw _m(),Error(P(418));for(;t;)xm(e,t),t=os(t.nextSibling)}if(zh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Mt=os(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Mt=null}}else Mt=Rt?os(e.stateNode.nextSibling):null;return!0}function _m(){for(var e=Mt;e;)e=os(e.nextSibling)}function Ii(){Mt=Rt=null,ve=!1}function td(e){nr===null?nr=[e]:nr.push(e)}var gy=Vr.ReactCurrentBatchConfig;function no(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(P(309));var s=r.stateNode}if(!s)throw Error(P(147,e));var i=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(n){var a=i.refs;n===null?delete a[o]:a[o]=n},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!r._owner)throw Error(P(290,e))}return e}function On(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ah(e){var t=e._init;return t(e._payload)}function km(e){function t(b,m){if(e){var y=b.deletions;y===null?(b.deletions=[m],b.flags|=16):y.push(m)}}function r(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function s(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function i(b,m){return b=cs(b,m),b.index=0,b.sibling=null,b}function o(b,m,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<m?(b.flags|=2,m):y):(b.flags|=2,m)):(b.flags|=1048576,m)}function n(b){return e&&b.alternate===null&&(b.flags|=2),b}function a(b,m,y,w){return m===null||m.tag!==6?(m=Zl(y,b.mode,w),m.return=b,m):(m=i(m,y),m.return=b,m)}function l(b,m,y,w){var k=y.type;return k===pi?h(b,m,y.props.children,w,y.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Kr&&Ah(k)===m.type)?(w=i(m,y.props),w.ref=no(b,m,y),w.return=b,w):(w=ca(y.type,y.key,y.props,null,b.mode,w),w.ref=no(b,m,y),w.return=b,w)}function u(b,m,y,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Jl(y,b.mode,w),m.return=b,m):(m=i(m,y.children||[]),m.return=b,m)}function h(b,m,y,w,k){return m===null||m.tag!==7?(m=Ds(y,b.mode,w,k),m.return=b,m):(m=i(m,y),m.return=b,m)}function d(b,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Zl(""+m,b.mode,y),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case En:return y=ca(m.type,m.key,m.props,null,b.mode,y),y.ref=no(b,null,m),y.return=b,y;case hi:return m=Jl(m,b.mode,y),m.return=b,m;case Kr:var w=m._init;return d(b,w(m._payload),y)}if(yo(m)||to(m))return m=Ds(m,b.mode,y,null),m.return=b,m;On(b,m)}return null}function p(b,m,y,w){var k=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:a(b,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case En:return y.key===k?l(b,m,y,w):null;case hi:return y.key===k?u(b,m,y,w):null;case Kr:return k=y._init,p(b,m,k(y._payload),w)}if(yo(y)||to(y))return k!==null?null:h(b,m,y,w,null);On(b,y)}return null}function g(b,m,y,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(y)||null,a(m,b,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case En:return b=b.get(w.key===null?y:w.key)||null,l(m,b,w,k);case hi:return b=b.get(w.key===null?y:w.key)||null,u(m,b,w,k);case Kr:var S=w._init;return g(b,m,y,S(w._payload),k)}if(yo(w)||to(w))return b=b.get(y)||null,h(m,b,w,k,null);On(m,w)}return null}function v(b,m,y,w){for(var k=null,S=null,$=m,T=m=0,M=null;$!==null&&T<y.length;T++){$.index>T?(M=$,$=null):M=$.sibling;var z=p(b,$,y[T],w);if(z===null){$===null&&($=M);break}e&&$&&z.alternate===null&&t(b,$),m=o(z,m,T),S===null?k=z:S.sibling=z,S=z,$=M}if(T===y.length)return r(b,$),ve&&zs(b,T),k;if($===null){for(;T<y.length;T++)$=d(b,y[T],w),$!==null&&(m=o($,m,T),S===null?k=$:S.sibling=$,S=$);return ve&&zs(b,T),k}for($=s(b,$);T<y.length;T++)M=g($,b,T,y[T],w),M!==null&&(e&&M.alternate!==null&&$.delete(M.key===null?T:M.key),m=o(M,m,T),S===null?k=M:S.sibling=M,S=M);return e&&$.forEach(function(ee){return t(b,ee)}),ve&&zs(b,T),k}function x(b,m,y,w){var k=to(y);if(typeof k!="function")throw Error(P(150));if(y=k.call(y),y==null)throw Error(P(151));for(var S=k=null,$=m,T=m=0,M=null,z=y.next();$!==null&&!z.done;T++,z=y.next()){$.index>T?(M=$,$=null):M=$.sibling;var ee=p(b,$,z.value,w);if(ee===null){$===null&&($=M);break}e&&$&&ee.alternate===null&&t(b,$),m=o(ee,m,T),S===null?k=ee:S.sibling=ee,S=ee,$=M}if(z.done)return r(b,$),ve&&zs(b,T),k;if($===null){for(;!z.done;T++,z=y.next())z=d(b,z.value,w),z!==null&&(m=o(z,m,T),S===null?k=z:S.sibling=z,S=z);return ve&&zs(b,T),k}for($=s(b,$);!z.done;T++,z=y.next())z=g($,b,T,z.value,w),z!==null&&(e&&z.alternate!==null&&$.delete(z.key===null?T:z.key),m=o(z,m,T),S===null?k=z:S.sibling=z,S=z);return e&&$.forEach(function(he){return t(b,he)}),ve&&zs(b,T),k}function C(b,m,y,w){if(typeof y=="object"&&y!==null&&y.type===pi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case En:e:{for(var k=y.key,S=m;S!==null;){if(S.key===k){if(k=y.type,k===pi){if(S.tag===7){r(b,S.sibling),m=i(S,y.props.children),m.return=b,b=m;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Kr&&Ah(k)===S.type){r(b,S.sibling),m=i(S,y.props),m.ref=no(b,S,y),m.return=b,b=m;break e}r(b,S);break}else t(b,S);S=S.sibling}y.type===pi?(m=Ds(y.props.children,b.mode,w,y.key),m.return=b,b=m):(w=ca(y.type,y.key,y.props,null,b.mode,w),w.ref=no(b,m,y),w.return=b,b=w)}return n(b);case hi:e:{for(S=y.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){r(b,m.sibling),m=i(m,y.children||[]),m.return=b,b=m;break e}else{r(b,m);break}else t(b,m);m=m.sibling}m=Jl(y,b.mode,w),m.return=b,b=m}return n(b);case Kr:return S=y._init,C(b,m,S(y._payload),w)}if(yo(y))return v(b,m,y,w);if(to(y))return x(b,m,y,w);On(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(r(b,m.sibling),m=i(m,y),m.return=b,b=m):(r(b,m),m=Zl(y,b.mode,w),m.return=b,b=m),n(b)):r(b,m)}return C}var Ri=km(!0),Cm=km(!1),$a=vs(null),za=null,xi=null,rd=null;function sd(){rd=xi=za=null}function id(e){var t=$a.current;ge($a),e._currentValue=t}function Yc(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Ai(e,t){za=e,rd=xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function qt(e){var t=e._currentValue;if(rd!==e)if(e={context:e,memoizedValue:t,next:null},xi===null){if(za===null)throw Error(P(308));xi=e,za.dependencies={lanes:0,firstContext:e}}else xi=xi.next=e;return t}var Ls=null;function od(e){Ls===null?Ls=[e]:Ls.push(e)}function Sm(e,t,r,s){var i=t.interleaved;return i===null?(r.next=r,od(t)):(r.next=i.next,i.next=r),t.interleaved=r,Or(e,s)}function Or(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var qr=!1;function nd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Em(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ns(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,re&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,Or(e,r)}return i=s.interleaved,i===null?(t.next=t,od(s)):(t.next=i.next,i.next=t),s.interleaved=t,Or(e,r)}function sa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Wu(e,r)}}function Th(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var n={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=n:o=o.next=n,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Aa(e,t,r,s){var i=e.updateQueue;qr=!1;var o=i.firstBaseUpdate,n=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,n===null?o=u:n.next=u,n=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==n&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;n=0,h=u=l=null,a=o;do{var p=a.lane,g=a.eventTime;if((s&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(p=t,g=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(g,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(g,d,p):v,p==null)break e;d=Ee({},d,p);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=d):h=h.next=g,n|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do n|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Hs|=n,e.lanes=n,e.memoizedState=d}}function Ph(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(P(191,i));i.call(s)}}}var fn={},wr=vs(fn),Xo=vs(fn),Yo=vs(fn);function Ms(e){if(e===fn)throw Error(P(174));return e}function ad(e,t){switch(de(Yo,t),de(Xo,e),de(wr,fn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pc(t,e)}ge(wr),de(wr,t)}function Oi(){ge(wr),ge(Xo),ge(Yo)}function $m(e){Ms(Yo.current);var t=Ms(wr.current),r=Pc(t,e.type);t!==r&&(de(Xo,e),de(wr,r))}function ld(e){Xo.current===e&&(ge(wr),ge(Xo))}var Ce=vs(0);function Ta(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function cd(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var ia=Vr.ReactCurrentDispatcher,Kl=Vr.ReactCurrentBatchConfig,Us=0,Se=null,Ue=null,Qe=null,Pa=!1,Eo=!1,Zo=0,vy=0;function ct(){throw Error(P(321))}function ud(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!cr(e[r],t[r]))return!1;return!0}function dd(e,t,r,s,i,o){if(Us=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=e===null||e.memoizedState===null?xy:_y,e=r(s,i),Eo){o=0;do{if(Eo=!1,Zo=0,25<=o)throw Error(P(301));o+=1,Qe=Ue=null,t.updateQueue=null,ia.current=ky,e=r(s,i)}while(Eo)}if(ia.current=Na,t=Ue!==null&&Ue.next!==null,Us=0,Qe=Ue=Se=null,Pa=!1,t)throw Error(P(300));return e}function hd(){var e=Zo!==0;return Zo=0,e}function mr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Se.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Qt(){if(Ue===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Qe===null?Se.memoizedState:Qe.next;if(t!==null)Qe=t,Ue=e;else{if(e===null)throw Error(P(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Qe===null?Se.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Jo(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=Qt(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var s=Ue,i=s.baseQueue,o=r.pending;if(o!==null){if(i!==null){var n=i.next;i.next=o.next,o.next=n}s.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,s=s.baseState;var a=n=null,l=null,u=o;do{var h=u.lane;if((Us&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,n=s):l=l.next=d,Se.lanes|=h,Hs|=h}u=u.next}while(u!==null&&u!==o);l===null?n=s:l.next=a,cr(s,t.memoizedState)||(xt=!0),t.memoizedState=s,t.baseState=n,t.baseQueue=l,r.lastRenderedState=s}if(e=r.interleaved,e!==null){i=e;do o=i.lane,Se.lanes|=o,Hs|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ql(e){var t=Qt(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var s=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var n=i=i.next;do o=e(o,n.action),n=n.next;while(n!==i);cr(o,t.memoizedState)||(xt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,s]}function zm(){}function Am(e,t){var r=Se,s=Qt(),i=t(),o=!cr(s.memoizedState,i);if(o&&(s.memoizedState=i,xt=!0),s=s.queue,pd(Nm.bind(null,r,s,e),[e]),s.getSnapshot!==t||o||Qe!==null&&Qe.memoizedState.tag&1){if(r.flags|=2048,en(9,Pm.bind(null,r,s,i,t),void 0,null),Xe===null)throw Error(P(349));Us&30||Tm(r,t,i)}return i}function Tm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Pm(e,t,r,s){t.value=r,t.getSnapshot=s,Lm(t)&&Mm(e)}function Nm(e,t,r){return r(function(){Lm(t)&&Mm(e)})}function Lm(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!cr(e,r)}catch{return!0}}function Mm(e){var t=Or(e,1);t!==null&&lr(t,e,1,-1)}function Nh(e){var t=mr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:e},t.queue=e,e=e.dispatch=wy.bind(null,Se,e),[t.memoizedState,e]}function en(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Im(){return Qt().memoizedState}function oa(e,t,r,s){var i=mr();Se.flags|=e,i.memoizedState=en(1|t,r,void 0,s===void 0?null:s)}function ol(e,t,r,s){var i=Qt();s=s===void 0?null:s;var o=void 0;if(Ue!==null){var n=Ue.memoizedState;if(o=n.destroy,s!==null&&ud(s,n.deps)){i.memoizedState=en(t,r,o,s);return}}Se.flags|=e,i.memoizedState=en(1|t,r,o,s)}function Lh(e,t){return oa(8390656,8,e,t)}function pd(e,t){return ol(2048,8,e,t)}function Rm(e,t){return ol(4,2,e,t)}function Om(e,t){return ol(4,4,e,t)}function Dm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vm(e,t,r){return r=r!=null?r.concat([e]):null,ol(4,4,Dm.bind(null,t,e),r)}function fd(){}function Fm(e,t){var r=Qt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ud(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Bm(e,t){var r=Qt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ud(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function jm(e,t,r){return Us&21?(cr(r,t)||(r=Kf(),Se.lanes|=r,Hs|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=r)}function yy(e,t){var r=ce;ce=r!==0&&4>r?r:4,e(!0);var s=Kl.transition;Kl.transition={};try{e(!1),t()}finally{ce=r,Kl.transition=s}}function Um(){return Qt().memoizedState}function by(e,t,r){var s=ls(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Hm(e))Wm(t,r);else if(r=Sm(e,t,r,s),r!==null){var i=ft();lr(r,e,s,i),Gm(r,t,s)}}function wy(e,t,r){var s=ls(e),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Hm(e))Wm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var n=t.lastRenderedState,a=o(n,r);if(i.hasEagerState=!0,i.eagerState=a,cr(a,n)){var l=t.interleaved;l===null?(i.next=i,od(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=Sm(e,t,i,s),r!==null&&(i=ft(),lr(r,e,s,i),Gm(r,t,s))}}function Hm(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Wm(e,t){Eo=Pa=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Gm(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Wu(e,r)}}var Na={readContext:qt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},xy={readContext:qt,useCallback:function(e,t){return mr().memoizedState=[e,t===void 0?null:t],e},useContext:qt,useEffect:Lh,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,oa(4194308,4,Dm.bind(null,t,e),r)},useLayoutEffect:function(e,t){return oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return oa(4,2,e,t)},useMemo:function(e,t){var r=mr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=mr();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=by.bind(null,Se,e),[s.memoizedState,e]},useRef:function(e){var t=mr();return e={current:e},t.memoizedState=e},useState:Nh,useDebugValue:fd,useDeferredValue:function(e){return mr().memoizedState=e},useTransition:function(){var e=Nh(!1),t=e[0];return e=yy.bind(null,e[1]),mr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Se,i=mr();if(ve){if(r===void 0)throw Error(P(407));r=r()}else{if(r=t(),Xe===null)throw Error(P(349));Us&30||Tm(s,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Lh(Nm.bind(null,s,o,e),[e]),s.flags|=2048,en(9,Pm.bind(null,s,o,r,t),void 0,null),r},useId:function(){var e=mr(),t=Xe.identifierPrefix;if(ve){var r=Ar,s=zr;r=(s&~(1<<32-ar(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Zo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=vy++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_y={readContext:qt,useCallback:Fm,useContext:qt,useEffect:pd,useImperativeHandle:Vm,useInsertionEffect:Rm,useLayoutEffect:Om,useMemo:Bm,useReducer:ql,useRef:Im,useState:function(){return ql(Jo)},useDebugValue:fd,useDeferredValue:function(e){var t=Qt();return jm(t,Ue.memoizedState,e)},useTransition:function(){var e=ql(Jo)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:zm,useSyncExternalStore:Am,useId:Um,unstable_isNewReconciler:!1},ky={readContext:qt,useCallback:Fm,useContext:qt,useEffect:pd,useImperativeHandle:Vm,useInsertionEffect:Rm,useLayoutEffect:Om,useMemo:Bm,useReducer:Ql,useRef:Im,useState:function(){return Ql(Jo)},useDebugValue:fd,useDeferredValue:function(e){var t=Qt();return Ue===null?t.memoizedState=e:jm(t,Ue.memoizedState,e)},useTransition:function(){var e=Ql(Jo)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:zm,useSyncExternalStore:Am,useId:Um,unstable_isNewReconciler:!1};function ir(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Zc(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Ee({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var nl={isMounted:function(e){return(e=e._reactInternals)?Js(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=ft(),i=ls(e),o=Pr(s,i);o.payload=t,r!=null&&(o.callback=r),t=ns(e,o,i),t!==null&&(lr(t,e,i,s),sa(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=ft(),i=ls(e),o=Pr(s,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=ns(e,o,i),t!==null&&(lr(t,e,i,s),sa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ft(),s=ls(e),i=Pr(r,s);i.tag=2,t!=null&&(i.callback=t),t=ns(e,i,s),t!==null&&(lr(t,e,s,r),sa(t,e,s))}};function Mh(e,t,r,s,i,o,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,n):t.prototype&&t.prototype.isPureReactComponent?!Go(r,s)||!Go(i,o):!0}function Km(e,t,r){var s=!1,i=fs,o=t.contextType;return typeof o=="object"&&o!==null?o=qt(o):(i=kt(t)?Bs:ht.current,s=t.contextTypes,o=(s=s!=null)?Mi(e,i):fs),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nl,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ih(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&nl.enqueueReplaceState(t,t.state,null)}function Jc(e,t,r,s){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},nd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=qt(o):(o=kt(t)?Bs:ht.current,i.context=Mi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zc(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&nl.enqueueReplaceState(i,i.state,null),Aa(e,r,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Di(e,t){try{var r="",s=t;do r+=Yv(s),s=s.return;while(s);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Xl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function eu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Cy=typeof WeakMap=="function"?WeakMap:Map;function qm(e,t,r){r=Pr(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Ma||(Ma=!0,uu=s),eu(e,t)},r}function Qm(e,t,r){r=Pr(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){eu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){eu(e,t),typeof s!="function"&&(as===null?as=new Set([this]):as.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),r}function Rh(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Cy;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),e=Dy.bind(null,e,t,r),t.then(e,e))}function Oh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dh(e,t,r,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Pr(-1,1),t.tag=2,ns(r,t,1))),r.lanes|=1),e)}var Sy=Vr.ReactCurrentOwner,xt=!1;function pt(e,t,r,s){t.child=e===null?Cm(t,null,r,s):Ri(t,e.child,r,s)}function Vh(e,t,r,s,i){r=r.render;var o=t.ref;return Ai(t,i),s=dd(e,t,r,s,o,i),r=hd(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dr(e,t,i)):(ve&&r&&Ju(t),t.flags|=1,pt(e,t,s,i),t.child)}function Fh(e,t,r,s,i){if(e===null){var o=r.type;return typeof o=="function"&&!_d(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Xm(e,t,o,s,i)):(e=ca(r.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var n=o.memoizedProps;if(r=r.compare,r=r!==null?r:Go,r(n,s)&&e.ref===t.ref)return Dr(e,t,i)}return t.flags|=1,e=cs(o,s),e.ref=t.ref,e.return=t,t.child=e}function Xm(e,t,r,s,i){if(e!==null){var o=e.memoizedProps;if(Go(o,s)&&e.ref===t.ref)if(xt=!1,t.pendingProps=s=o,(e.lanes&i)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,Dr(e,t,i)}return tu(e,t,r,s,i)}function Ym(e,t,r){var s=t.pendingProps,i=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ki,Lt),Lt|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(ki,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,de(ki,Lt),Lt|=s}else o!==null?(s=o.baseLanes|r,t.memoizedState=null):s=r,de(ki,Lt),Lt|=s;return pt(e,t,i,r),t.child}function Zm(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function tu(e,t,r,s,i){var o=kt(r)?Bs:ht.current;return o=Mi(t,o),Ai(t,i),r=dd(e,t,r,s,o,i),s=hd(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dr(e,t,i)):(ve&&s&&Ju(t),t.flags|=1,pt(e,t,r,i),t.child)}function Bh(e,t,r,s,i){if(kt(r)){var o=!0;Ca(t)}else o=!1;if(Ai(t,i),t.stateNode===null)na(e,t),Km(t,r,s),Jc(t,r,s,i),s=!0;else if(e===null){var n=t.stateNode,a=t.memoizedProps;n.props=a;var l=n.context,u=r.contextType;typeof u=="object"&&u!==null?u=qt(u):(u=kt(r)?Bs:ht.current,u=Mi(t,u));var h=r.getDerivedStateFromProps,d=typeof h=="function"||typeof n.getSnapshotBeforeUpdate=="function";d||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(a!==s||l!==u)&&Ih(t,n,s,u),qr=!1;var p=t.memoizedState;n.state=p,Aa(t,s,n,i),l=t.memoizedState,a!==s||p!==l||_t.current||qr?(typeof h=="function"&&(Zc(t,r,h,s),l=t.memoizedState),(a=qr||Mh(t,r,a,s,p,l,u))?(d||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=l),n.props=s,n.state=l,n.context=u,s=a):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{n=t.stateNode,Em(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ir(t.type,a),n.props=u,d=t.pendingProps,p=n.context,l=r.contextType,typeof l=="object"&&l!==null?l=qt(l):(l=kt(r)?Bs:ht.current,l=Mi(t,l));var g=r.getDerivedStateFromProps;(h=typeof g=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Ih(t,n,s,l),qr=!1,p=t.memoizedState,n.state=p,Aa(t,s,n,i);var v=t.memoizedState;a!==d||p!==v||_t.current||qr?(typeof g=="function"&&(Zc(t,r,g,s),v=t.memoizedState),(u=qr||Mh(t,r,u,s,p,v,l)||!1)?(h||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(s,v,l),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(s,v,l)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=v),n.props=s,n.state=v,n.context=l,s=u):(typeof n.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),s=!1)}return ru(e,t,r,s,o,i)}function ru(e,t,r,s,i,o){Zm(e,t);var n=(t.flags&128)!==0;if(!s&&!n)return i&&Eh(t,r,!1),Dr(e,t,o);s=t.stateNode,Sy.current=t;var a=n&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&n?(t.child=Ri(t,e.child,null,o),t.child=Ri(t,null,a,o)):pt(e,t,a,o),t.memoizedState=s.state,i&&Eh(t,r,!0),t.child}function Jm(e){var t=e.stateNode;t.pendingContext?Sh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sh(e,t.context,!1),ad(e,t.containerInfo)}function jh(e,t,r,s,i){return Ii(),td(i),t.flags|=256,pt(e,t,r,s),t.child}var su={dehydrated:null,treeContext:null,retryLane:0};function iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function eg(e,t,r){var s=t.pendingProps,i=Ce.current,o=!1,n=(t.flags&128)!==0,a;if((a=n)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(Ce,i&1),e===null)return Xc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(n=s.children,e=s.fallback,o?(s=t.mode,o=t.child,n={mode:"hidden",children:n},!(s&1)&&o!==null?(o.childLanes=0,o.pendingProps=n):o=cl(n,s,0,null),e=Ds(e,s,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=iu(r),t.memoizedState=su,e):md(t,n));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ey(e,t,n,s,a,i,r);if(o){o=s.fallback,n=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:s.children};return!(n&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=l,t.deletions=null):(s=cs(i,l),s.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=cs(a,o):(o=Ds(o,n,r,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,n=e.child.memoizedState,n=n===null?iu(r):{baseLanes:n.baseLanes|r,cachePool:null,transitions:n.transitions},o.memoizedState=n,o.childLanes=e.childLanes&~r,t.memoizedState=su,s}return o=e.child,e=o.sibling,s=cs(o,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function md(e,t){return t=cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dn(e,t,r,s){return s!==null&&td(s),Ri(t,e.child,null,r),e=md(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ey(e,t,r,s,i,o,n){if(r)return t.flags&256?(t.flags&=-257,s=Xl(Error(P(422))),Dn(e,t,n,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,i=t.mode,s=cl({mode:"visible",children:s.children},i,0,null),o=Ds(o,i,n,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,t.mode&1&&Ri(t,e.child,null,n),t.child.memoizedState=iu(n),t.memoizedState=su,o);if(!(t.mode&1))return Dn(e,t,n,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var a=s.dgst;return s=a,o=Error(P(419)),s=Xl(o,s,void 0),Dn(e,t,n,s)}if(a=(n&e.childLanes)!==0,xt||a){if(s=Xe,s!==null){switch(n&-n){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Or(e,i),lr(s,e,i,-1))}return xd(),s=Xl(Error(P(421))),Dn(e,t,n,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Vy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Mt=os(i.nextSibling),Rt=t,ve=!0,nr=null,e!==null&&(Ht[Wt++]=zr,Ht[Wt++]=Ar,Ht[Wt++]=js,zr=e.id,Ar=e.overflow,js=t),t=md(t,s.children),t.flags|=4096,t)}function Uh(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Yc(e.return,t,r)}function Yl(e,t,r,s,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=i)}function tg(e,t,r){var s=t.pendingProps,i=s.revealOrder,o=s.tail;if(pt(e,t,s.children,r),s=Ce.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uh(e,r,t);else if(e.tag===19)Uh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(de(Ce,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Ta(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Yl(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ta(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Yl(t,!0,r,null,o);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function na(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Hs|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,r=cs(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=cs(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function $y(e,t,r){switch(t.tag){case 3:Jm(t),Ii();break;case 5:$m(t);break;case 1:kt(t.type)&&Ca(t);break;case 4:ad(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;de($a,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(de(Ce,Ce.current&1),t.flags|=128,null):r&t.child.childLanes?eg(e,t,r):(de(Ce,Ce.current&1),e=Dr(e,t,r),e!==null?e.sibling:null);de(Ce,Ce.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return tg(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Ce,Ce.current),s)break;return null;case 22:case 23:return t.lanes=0,Ym(e,t,r)}return Dr(e,t,r)}var rg,ou,sg,ig;rg=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ou=function(){};sg=function(e,t,r,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,Ms(wr.current);var o=null;switch(r){case"input":i=$c(e,i),s=$c(e,s),o=[];break;case"select":i=Ee({},i,{value:void 0}),s=Ee({},s,{value:void 0}),o=[];break;case"textarea":i=Tc(e,i),s=Tc(e,s),o=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=_a)}Nc(r,s);var n;r=null;for(u in i)if(!s.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(n in a)a.hasOwnProperty(n)&&(r||(r={}),r[n]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in s){var l=s[u];if(a=i!=null?i[u]:void 0,s.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(n in a)!a.hasOwnProperty(n)||l&&l.hasOwnProperty(n)||(r||(r={}),r[n]="");for(n in l)l.hasOwnProperty(n)&&a[n]!==l[n]&&(r||(r={}),r[n]=l[n])}else r||(o||(o=[]),o.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&me("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ig=function(e,t,r,s){r!==s&&(t.flags|=4)};function ao(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function zy(e,t,r){var s=t.pendingProps;switch(ed(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return kt(t.type)&&ka(),ut(t),null;case 3:return s=t.stateNode,Oi(),ge(_t),ge(ht),cd(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Rn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nr!==null&&(pu(nr),nr=null))),ou(e,t),ut(t),null;case 5:ld(t);var i=Ms(Yo.current);if(r=t.type,e!==null&&t.stateNode!=null)sg(e,t,r,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(P(166));return ut(t),null}if(e=Ms(wr.current),Rn(t)){s=t.stateNode,r=t.type;var o=t.memoizedProps;switch(s[vr]=t,s[Qo]=o,e=(t.mode&1)!==0,r){case"dialog":me("cancel",s),me("close",s);break;case"iframe":case"object":case"embed":me("load",s);break;case"video":case"audio":for(i=0;i<wo.length;i++)me(wo[i],s);break;case"source":me("error",s);break;case"img":case"image":case"link":me("error",s),me("load",s);break;case"details":me("toggle",s);break;case"input":Zd(s,o),me("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},me("invalid",s);break;case"textarea":eh(s,o),me("invalid",s)}Nc(r,o),i=null;for(var n in o)if(o.hasOwnProperty(n)){var a=o[n];n==="children"?typeof a=="string"?s.textContent!==a&&(o.suppressHydrationWarning!==!0&&In(s.textContent,a,e),i=["children",a]):typeof a=="number"&&s.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&In(s.textContent,a,e),i=["children",""+a]):Vo.hasOwnProperty(n)&&a!=null&&n==="onScroll"&&me("scroll",s)}switch(r){case"input":$n(s),Jd(s,o,!0);break;case"textarea":$n(s),th(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=_a)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{n=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nf(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=n.createElement(r,{is:s.is}):(e=n.createElement(r),r==="select"&&(n=e,s.multiple?n.multiple=!0:s.size&&(n.size=s.size))):e=n.createElementNS(e,r),e[vr]=t,e[Qo]=s,rg(e,t,!1,!1),t.stateNode=e;e:{switch(n=Lc(r,s),r){case"dialog":me("cancel",e),me("close",e),i=s;break;case"iframe":case"object":case"embed":me("load",e),i=s;break;case"video":case"audio":for(i=0;i<wo.length;i++)me(wo[i],e);i=s;break;case"source":me("error",e),i=s;break;case"img":case"image":case"link":me("error",e),me("load",e),i=s;break;case"details":me("toggle",e),i=s;break;case"input":Zd(e,s),i=$c(e,s),me("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=Ee({},s,{value:void 0}),me("invalid",e);break;case"textarea":eh(e,s),i=Tc(e,s),me("invalid",e);break;default:i=s}Nc(r,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?If(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lf(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Fo(e,l):typeof l=="number"&&Fo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&me("scroll",e):l!=null&&Vu(e,o,l,n))}switch(r){case"input":$n(e),Jd(e,s,!1);break;case"textarea":$n(e),th(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ps(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?Si(e,!!s.multiple,o,!1):s.defaultValue!=null&&Si(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_a)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)ig(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(P(166));if(r=Ms(Yo.current),Ms(wr.current),Rn(t)){if(s=t.stateNode,r=t.memoizedProps,s[vr]=t,(o=s.nodeValue!==r)&&(e=Rt,e!==null))switch(e.tag){case 3:In(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&In(s.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[vr]=t,t.stateNode=s}return ut(t),null;case 13:if(ge(Ce),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&Mt!==null&&t.mode&1&&!(t.flags&128))_m(),Ii(),t.flags|=98560,o=!1;else if(o=Rn(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[vr]=t}else Ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ut(t),o=!1}else nr!==null&&(pu(nr),nr=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?He===0&&(He=3):xd())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return Oi(),ou(e,t),e===null&&Ko(t.stateNode.containerInfo),ut(t),null;case 10:return id(t.type._context),ut(t),null;case 17:return kt(t.type)&&ka(),ut(t),null;case 19:if(ge(Ce),o=t.memoizedState,o===null)return ut(t),null;if(s=(t.flags&128)!==0,n=o.rendering,n===null)if(s)ao(o,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(n=Ta(e),n!==null){for(t.flags|=128,ao(o,!1),s=n.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)o=r,e=s,o.flags&=14680066,n=o.alternate,n===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,o.type=n.type,e=n.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>Vi&&(t.flags|=128,s=!0,ao(o,!1),t.lanes=4194304)}else{if(!s)if(e=Ta(n),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!n.alternate&&!ve)return ut(t),null}else 2*Ie()-o.renderingStartTime>Vi&&r!==1073741824&&(t.flags|=128,s=!0,ao(o,!1),t.lanes=4194304);o.isBackwards?(n.sibling=t.child,t.child=n):(r=o.last,r!==null?r.sibling=n:t.child=n,o.last=n)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,r=Ce.current,de(Ce,s?r&1|2:r&1),t):(ut(t),null);case 22:case 23:return wd(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Lt&1073741824&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Ay(e,t){switch(ed(t),t.tag){case 1:return kt(t.type)&&ka(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Oi(),ge(_t),ge(ht),cd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ld(t),null;case 13:if(ge(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(Ce),null;case 4:return Oi(),null;case 10:return id(t.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var Vn=!1,dt=!1,Ty=typeof WeakSet=="function"?WeakSet:Set,O=null;function _i(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Te(e,t,s)}else r.current=null}function nu(e,t,r){try{r()}catch(s){Te(e,t,s)}}var Hh=!1;function Py(e,t){if(Uc=ba,e=cm(),Zu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var n=0,a=-1,l=-1,u=0,h=0,d=e,p=null;t:for(;;){for(var g;d!==r||i!==0&&d.nodeType!==3||(a=n+i),d!==o||s!==0&&d.nodeType!==3||(l=n+s),d.nodeType===3&&(n+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===r&&++u===i&&(a=n),p===o&&++h===s&&(l=n),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hc={focusedElem:e,selectionRange:r},ba=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,C=v.memoizedState,b=t.stateNode,m=b.getSnapshotBeforeUpdate(t.elementType===t.type?x:ir(t.type,x),C);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){Te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=Hh,Hh=!1,v}function $o(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&nu(t,r,o)}i=i.next}while(i!==s)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function au(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function og(e){var t=e.alternate;t!==null&&(e.alternate=null,og(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vr],delete t[Qo],delete t[Kc],delete t[py],delete t[fy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ng(e){return e.tag===5||e.tag===3||e.tag===4}function Wh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=_a));else if(s!==4&&(e=e.child,e!==null))for(lu(e,t,r),e=e.sibling;e!==null;)lu(e,t,r),e=e.sibling}function cu(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(cu(e,t,r),e=e.sibling;e!==null;)cu(e,t,r),e=e.sibling}var st=null,or=!1;function Wr(e,t,r){for(r=r.child;r!==null;)ag(e,t,r),r=r.sibling}function ag(e,t,r){if(br&&typeof br.onCommitFiberUnmount=="function")try{br.onCommitFiberUnmount(Ja,r)}catch{}switch(r.tag){case 5:dt||_i(r,t);case 6:var s=st,i=or;st=null,Wr(e,t,r),st=s,or=i,st!==null&&(or?(e=st,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):st.removeChild(r.stateNode));break;case 18:st!==null&&(or?(e=st,r=r.stateNode,e.nodeType===8?Hl(e.parentNode,r):e.nodeType===1&&Hl(e,r),Ho(e)):Hl(st,r.stateNode));break;case 4:s=st,i=or,st=r.stateNode.containerInfo,or=!0,Wr(e,t,r),st=s,or=i;break;case 0:case 11:case 14:case 15:if(!dt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var o=i,n=o.destroy;o=o.tag,n!==void 0&&(o&2||o&4)&&nu(r,t,n),i=i.next}while(i!==s)}Wr(e,t,r);break;case 1:if(!dt&&(_i(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(a){Te(r,t,a)}Wr(e,t,r);break;case 21:Wr(e,t,r);break;case 22:r.mode&1?(dt=(s=dt)||r.memoizedState!==null,Wr(e,t,r),dt=s):Wr(e,t,r);break;default:Wr(e,t,r)}}function Gh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ty),t.forEach(function(s){var i=Fy.bind(null,e,s);r.has(s)||(r.add(s),s.then(i,i))})}}function sr(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var o=e,n=t,a=n;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,or=!1;break e;case 3:st=a.stateNode.containerInfo,or=!0;break e;case 4:st=a.stateNode.containerInfo,or=!0;break e}a=a.return}if(st===null)throw Error(P(160));ag(o,n,i),st=null,or=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lg(t,e),t=t.sibling}function lg(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sr(t,e),fr(e),s&4){try{$o(3,e,e.return),al(3,e)}catch(x){Te(e,e.return,x)}try{$o(5,e,e.return)}catch(x){Te(e,e.return,x)}}break;case 1:sr(t,e),fr(e),s&512&&r!==null&&_i(r,r.return);break;case 5:if(sr(t,e),fr(e),s&512&&r!==null&&_i(r,r.return),e.flags&32){var i=e.stateNode;try{Fo(i,"")}catch(x){Te(e,e.return,x)}}if(s&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,n=r!==null?r.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Tf(i,o),Lc(a,n);var u=Lc(a,o);for(n=0;n<l.length;n+=2){var h=l[n],d=l[n+1];h==="style"?If(i,d):h==="dangerouslySetInnerHTML"?Lf(i,d):h==="children"?Fo(i,d):Vu(i,h,d,u)}switch(a){case"input":zc(i,o);break;case"textarea":Pf(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Si(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?Si(i,!!o.multiple,o.defaultValue,!0):Si(i,!!o.multiple,o.multiple?[]:"",!1))}i[Qo]=o}catch(x){Te(e,e.return,x)}}break;case 6:if(sr(t,e),fr(e),s&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Te(e,e.return,x)}}break;case 3:if(sr(t,e),fr(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Ho(t.containerInfo)}catch(x){Te(e,e.return,x)}break;case 4:sr(t,e),fr(e);break;case 13:sr(t,e),fr(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yd=Ie())),s&4&&Gh(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(dt=(u=dt)||h,sr(t,e),dt=u):sr(t,e),fr(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(O=e,h=e.child;h!==null;){for(d=O=h;O!==null;){switch(p=O,g=p.child,p.tag){case 0:case 11:case 14:case 15:$o(4,p,p.return);break;case 1:_i(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){s=p,r=p.return;try{t=s,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Te(s,r,x)}}break;case 5:_i(p,p.return);break;case 22:if(p.memoizedState!==null){qh(d);continue}}g!==null?(g.return=p,O=g):qh(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,n=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mf("display",n))}catch(x){Te(e,e.return,x)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){Te(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:sr(t,e),fr(e),s&4&&Gh(e);break;case 21:break;default:sr(t,e),fr(e)}}function fr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ng(r)){var s=r;break e}r=r.return}throw Error(P(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(Fo(i,""),s.flags&=-33);var o=Wh(e);cu(e,o,i);break;case 3:case 4:var n=s.stateNode.containerInfo,a=Wh(e);lu(e,a,n);break;default:throw Error(P(161))}}catch(l){Te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ny(e,t,r){O=e,cg(e)}function cg(e,t,r){for(var s=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&s){var n=i.memoizedState!==null||Vn;if(!n){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dt;a=Vn;var u=dt;if(Vn=n,(dt=l)&&!u)for(O=i;O!==null;)n=O,l=n.child,n.tag===22&&n.memoizedState!==null?Qh(i):l!==null?(l.return=n,O=l):Qh(i);for(;o!==null;)O=o,cg(o),o=o.sibling;O=i,Vn=a,dt=u}Kh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Kh(e)}}function Kh(e){for(;O!==null;){var t=O;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||al(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!dt)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:ir(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ph(t,o,s);break;case 3:var n=t.updateQueue;if(n!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ph(t,n,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ho(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}dt||t.flags&512&&au(t)}catch(p){Te(t,t.return,p)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function qh(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function Qh(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{al(4,t)}catch(l){Te(t,r,l)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(l){Te(t,i,l)}}var o=t.return;try{au(t)}catch(l){Te(t,o,l)}break;case 5:var n=t.return;try{au(t)}catch(l){Te(t,n,l)}}}catch(l){Te(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Ly=Math.ceil,La=Vr.ReactCurrentDispatcher,gd=Vr.ReactCurrentOwner,Kt=Vr.ReactCurrentBatchConfig,re=0,Xe=null,Oe=null,it=0,Lt=0,ki=vs(0),He=0,tn=null,Hs=0,ll=0,vd=0,zo=null,wt=null,yd=0,Vi=1/0,Cr=null,Ma=!1,uu=null,as=null,Fn=!1,Jr=null,Ia=0,Ao=0,du=null,aa=-1,la=0;function ft(){return re&6?Ie():aa!==-1?aa:aa=Ie()}function ls(e){return e.mode&1?re&2&&it!==0?it&-it:gy.transition!==null?(la===0&&(la=Kf()),la):(e=ce,e!==0||(e=window.event,e=e===void 0?16:em(e.type)),e):1}function lr(e,t,r,s){if(50<Ao)throw Ao=0,du=null,Error(P(185));dn(e,r,s),(!(re&2)||e!==Xe)&&(e===Xe&&(!(re&2)&&(ll|=r),He===4&&Xr(e,it)),Ct(e,s),r===1&&re===0&&!(t.mode&1)&&(Vi=Ie()+500,il&&ys()))}function Ct(e,t){var r=e.callbackNode;g0(e,t);var s=ya(e,e===Xe?it:0);if(s===0)r!==null&&ih(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&ih(r),t===1)e.tag===0?my(Xh.bind(null,e)):bm(Xh.bind(null,e)),dy(function(){!(re&6)&&ys()}),r=null;else{switch(qf(s)){case 1:r=Hu;break;case 4:r=Wf;break;case 16:r=va;break;case 536870912:r=Gf;break;default:r=va}r=vg(r,ug.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ug(e,t){if(aa=-1,la=0,re&6)throw Error(P(327));var r=e.callbackNode;if(Ti()&&e.callbackNode!==r)return null;var s=ya(e,e===Xe?it:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Ra(e,s);else{t=s;var i=re;re|=2;var o=hg();(Xe!==e||it!==t)&&(Cr=null,Vi=Ie()+500,Os(e,t));do try{Ry();break}catch(a){dg(e,a)}while(!0);sd(),La.current=o,re=i,Oe!==null?t=0:(Xe=null,it=0,t=He)}if(t!==0){if(t===2&&(i=Dc(e),i!==0&&(s=i,t=hu(e,i))),t===1)throw r=tn,Os(e,0),Xr(e,s),Ct(e,Ie()),r;if(t===6)Xr(e,s);else{if(i=e.current.alternate,!(s&30)&&!My(i)&&(t=Ra(e,s),t===2&&(o=Dc(e),o!==0&&(s=o,t=hu(e,o))),t===1))throw r=tn,Os(e,0),Xr(e,s),Ct(e,Ie()),r;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(P(345));case 2:As(e,wt,Cr);break;case 3:if(Xr(e,s),(s&130023424)===s&&(t=yd+500-Ie(),10<t)){if(ya(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gc(As.bind(null,e,wt,Cr),t);break}As(e,wt,Cr);break;case 4:if(Xr(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var n=31-ar(s);o=1<<n,n=t[n],n>i&&(i=n),s&=~o}if(s=i,s=Ie()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Ly(s/1960))-s,10<s){e.timeoutHandle=Gc(As.bind(null,e,wt,Cr),s);break}As(e,wt,Cr);break;case 5:As(e,wt,Cr);break;default:throw Error(P(329))}}}return Ct(e,Ie()),e.callbackNode===r?ug.bind(null,e):null}function hu(e,t){var r=zo;return e.current.memoizedState.isDehydrated&&(Os(e,t).flags|=256),e=Ra(e,t),e!==2&&(t=wt,wt=r,t!==null&&pu(t)),e}function pu(e){wt===null?wt=e:wt.push.apply(wt,e)}function My(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],o=i.getSnapshot;i=i.value;try{if(!cr(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xr(e,t){for(t&=~vd,t&=~ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ar(t),s=1<<r;e[r]=-1,t&=~s}}function Xh(e){if(re&6)throw Error(P(327));Ti();var t=ya(e,0);if(!(t&1))return Ct(e,Ie()),null;var r=Ra(e,t);if(e.tag!==0&&r===2){var s=Dc(e);s!==0&&(t=s,r=hu(e,s))}if(r===1)throw r=tn,Os(e,0),Xr(e,t),Ct(e,Ie()),r;if(r===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,As(e,wt,Cr),Ct(e,Ie()),null}function bd(e,t){var r=re;re|=1;try{return e(t)}finally{re=r,re===0&&(Vi=Ie()+500,il&&ys())}}function Ws(e){Jr!==null&&Jr.tag===0&&!(re&6)&&Ti();var t=re;re|=1;var r=Kt.transition,s=ce;try{if(Kt.transition=null,ce=1,e)return e()}finally{ce=s,Kt.transition=r,re=t,!(re&6)&&ys()}}function wd(){Lt=ki.current,ge(ki)}function Os(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,uy(r)),Oe!==null)for(r=Oe.return;r!==null;){var s=r;switch(ed(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ka();break;case 3:Oi(),ge(_t),ge(ht),cd();break;case 5:ld(s);break;case 4:Oi();break;case 13:ge(Ce);break;case 19:ge(Ce);break;case 10:id(s.type._context);break;case 22:case 23:wd()}r=r.return}if(Xe=e,Oe=e=cs(e.current,null),it=Lt=t,He=0,tn=null,vd=ll=Hs=0,wt=zo=null,Ls!==null){for(t=0;t<Ls.length;t++)if(r=Ls[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,o=r.pending;if(o!==null){var n=o.next;o.next=i,s.next=n}r.pending=s}Ls=null}return e}function dg(e,t){do{var r=Oe;try{if(sd(),ia.current=Na,Pa){for(var s=Se.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}Pa=!1}if(Us=0,Qe=Ue=Se=null,Eo=!1,Zo=0,gd.current=null,r===null||r.return===null){He=1,tn=t,Oe=null;break}e:{var o=e,n=r.return,a=r,l=t;if(t=it,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Oh(n);if(g!==null){g.flags&=-257,Dh(g,n,a,o,t),g.mode&1&&Rh(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Rh(o,u,t),xd();break e}l=Error(P(426))}}else if(ve&&a.mode&1){var C=Oh(n);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Dh(C,n,a,o,t),td(Di(l,a));break e}}o=l=Di(l,a),He!==4&&(He=2),zo===null?zo=[o]:zo.push(o),o=n;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var b=qm(o,l,t);Th(o,b);break e;case 1:a=l;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(as===null||!as.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Qm(o,a,t);Th(o,w);break e}}o=o.return}while(o!==null)}fg(r)}catch(k){t=k,Oe===r&&r!==null&&(Oe=r=r.return);continue}break}while(!0)}function hg(){var e=La.current;return La.current=Na,e===null?Na:e}function xd(){(He===0||He===3||He===2)&&(He=4),Xe===null||!(Hs&268435455)&&!(ll&268435455)||Xr(Xe,it)}function Ra(e,t){var r=re;re|=2;var s=hg();(Xe!==e||it!==t)&&(Cr=null,Os(e,t));do try{Iy();break}catch(i){dg(e,i)}while(!0);if(sd(),re=r,La.current=s,Oe!==null)throw Error(P(261));return Xe=null,it=0,He}function Iy(){for(;Oe!==null;)pg(Oe)}function Ry(){for(;Oe!==null&&!a0();)pg(Oe)}function pg(e){var t=gg(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?fg(e):Oe=t,gd.current=null}function fg(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Ay(r,t),r!==null){r.flags&=32767,Oe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Oe=null;return}}else if(r=zy(r,t,Lt),r!==null){Oe=r;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);He===0&&(He=5)}function As(e,t,r){var s=ce,i=Kt.transition;try{Kt.transition=null,ce=1,Oy(e,t,r,s)}finally{Kt.transition=i,ce=s}return null}function Oy(e,t,r,s){do Ti();while(Jr!==null);if(re&6)throw Error(P(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(v0(e,o),e===Xe&&(Oe=Xe=null,it=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Fn||(Fn=!0,vg(va,function(){return Ti(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Kt.transition,Kt.transition=null;var n=ce;ce=1;var a=re;re|=4,gd.current=null,Py(e,r),lg(r,e),sy(Hc),ba=!!Uc,Hc=Uc=null,e.current=r,Ny(r),l0(),re=a,ce=n,Kt.transition=o}else e.current=r;if(Fn&&(Fn=!1,Jr=e,Ia=i),o=e.pendingLanes,o===0&&(as=null),d0(r.stateNode),Ct(e,Ie()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(Ma)throw Ma=!1,e=uu,uu=null,e;return Ia&1&&e.tag!==0&&Ti(),o=e.pendingLanes,o&1?e===du?Ao++:(Ao=0,du=e):Ao=0,ys(),null}function Ti(){if(Jr!==null){var e=qf(Ia),t=Kt.transition,r=ce;try{if(Kt.transition=null,ce=16>e?16:e,Jr===null)var s=!1;else{if(e=Jr,Jr=null,Ia=0,re&6)throw Error(P(331));var i=re;for(re|=4,O=e.current;O!==null;){var o=O,n=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:$o(8,h,o)}var d=h.child;if(d!==null)d.return=h,O=d;else for(;O!==null;){h=O;var p=h.sibling,g=h.return;if(og(h),h===u){O=null;break}if(p!==null){p.return=g,O=p;break}O=g}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&n!==null)n.return=o,O=n;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$o(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,O=b;break e}O=o.return}}var m=e.current;for(O=m;O!==null;){n=O;var y=n.child;if(n.subtreeFlags&2064&&y!==null)y.return=n,O=y;else e:for(n=m;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:al(9,a)}}catch(k){Te(a,a.return,k)}if(a===n){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if(re=i,ys(),br&&typeof br.onPostCommitFiberRoot=="function")try{br.onPostCommitFiberRoot(Ja,e)}catch{}s=!0}return s}finally{ce=r,Kt.transition=t}}return!1}function Yh(e,t,r){t=Di(r,t),t=qm(e,t,1),e=ns(e,t,1),t=ft(),e!==null&&(dn(e,1,t),Ct(e,t))}function Te(e,t,r){if(e.tag===3)Yh(e,e,r);else for(;t!==null;){if(t.tag===3){Yh(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(as===null||!as.has(s))){e=Di(r,e),e=Qm(t,e,1),t=ns(t,e,1),e=ft(),t!==null&&(dn(t,1,e),Ct(t,e));break}}t=t.return}}function Dy(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&r,Xe===e&&(it&r)===r&&(He===4||He===3&&(it&130023424)===it&&500>Ie()-yd?Os(e,0):vd|=r),Ct(e,t)}function mg(e,t){t===0&&(e.mode&1?(t=Tn,Tn<<=1,!(Tn&130023424)&&(Tn=4194304)):t=1);var r=ft();e=Or(e,t),e!==null&&(dn(e,t,r),Ct(e,r))}function Vy(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),mg(e,r)}function Fy(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(P(314))}s!==null&&s.delete(t),mg(e,r)}var gg;gg=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)xt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return xt=!1,$y(e,t,r);xt=!!(e.flags&131072)}else xt=!1,ve&&t.flags&1048576&&wm(t,Ea,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;na(e,t),e=t.pendingProps;var i=Mi(t,ht.current);Ai(t,r),i=dd(null,t,s,e,i,r);var o=hd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(s)?(o=!0,Ca(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nd(t),i.updater=nl,t.stateNode=i,i._reactInternals=t,Jc(t,s,e,r),t=ru(null,t,s,!0,o,r)):(t.tag=0,ve&&o&&Ju(t),pt(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch(na(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=jy(s),e=ir(s,e),i){case 0:t=tu(null,t,s,e,r);break e;case 1:t=Bh(null,t,s,e,r);break e;case 11:t=Vh(null,t,s,e,r);break e;case 14:t=Fh(null,t,s,ir(s.type,e),r);break e}throw Error(P(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:ir(s,i),tu(e,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:ir(s,i),Bh(e,t,s,i,r);case 3:e:{if(Jm(t),e===null)throw Error(P(387));s=t.pendingProps,o=t.memoizedState,i=o.element,Em(e,t),Aa(t,s,null,r);var n=t.memoizedState;if(s=n.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Di(Error(P(423)),t),t=jh(e,t,s,r,i);break e}else if(s!==i){i=Di(Error(P(424)),t),t=jh(e,t,s,r,i);break e}else for(Mt=os(t.stateNode.containerInfo.firstChild),Rt=t,ve=!0,nr=null,r=Cm(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ii(),s===i){t=Dr(e,t,r);break e}pt(e,t,s,r)}t=t.child}return t;case 5:return $m(t),e===null&&Xc(t),s=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,n=i.children,Wc(s,i)?n=null:o!==null&&Wc(s,o)&&(t.flags|=32),Zm(e,t),pt(e,t,n,r),t.child;case 6:return e===null&&Xc(t),null;case 13:return eg(e,t,r);case 4:return ad(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ri(t,null,s,r):pt(e,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:ir(s,i),Vh(e,t,s,i,r);case 7:return pt(e,t,t.pendingProps,r),t.child;case 8:return pt(e,t,t.pendingProps.children,r),t.child;case 12:return pt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,o=t.memoizedProps,n=i.value,de($a,s._currentValue),s._currentValue=n,o!==null)if(cr(o.value,n)){if(o.children===i.children&&!_t.current){t=Dr(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){n=o.child;for(var l=a.firstContext;l!==null;){if(l.context===s){if(o.tag===1){l=Pr(-1,r&-r),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Yc(o.return,r,t),a.lanes|=r;break}l=l.next}}else if(o.tag===10)n=o.type===t.type?null:o.child;else if(o.tag===18){if(n=o.return,n===null)throw Error(P(341));n.lanes|=r,a=n.alternate,a!==null&&(a.lanes|=r),Yc(n,r,t),n=o.sibling}else n=o.child;if(n!==null)n.return=o;else for(n=o;n!==null;){if(n===t){n=null;break}if(o=n.sibling,o!==null){o.return=n.return,n=o;break}n=n.return}o=n}pt(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,Ai(t,r),i=qt(i),s=s(i),t.flags|=1,pt(e,t,s,r),t.child;case 14:return s=t.type,i=ir(s,t.pendingProps),i=ir(s.type,i),Fh(e,t,s,i,r);case 15:return Xm(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:ir(s,i),na(e,t),t.tag=1,kt(s)?(e=!0,Ca(t)):e=!1,Ai(t,r),Km(t,s,i),Jc(t,s,i,r),ru(null,t,s,!0,e,r);case 19:return tg(e,t,r);case 22:return Ym(e,t,r)}throw Error(P(156,t.tag))};function vg(e,t){return Hf(e,t)}function By(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,r,s){return new By(e,t,r,s)}function _d(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jy(e){if(typeof e=="function")return _d(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bu)return 11;if(e===ju)return 14}return 2}function cs(e,t){var r=e.alternate;return r===null?(r=Gt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ca(e,t,r,s,i,o){var n=2;if(s=e,typeof e=="function")_d(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case pi:return Ds(r.children,i,o,t);case Fu:n=8,i|=8;break;case kc:return e=Gt(12,r,t,i|2),e.elementType=kc,e.lanes=o,e;case Cc:return e=Gt(13,r,t,i),e.elementType=Cc,e.lanes=o,e;case Sc:return e=Gt(19,r,t,i),e.elementType=Sc,e.lanes=o,e;case $f:return cl(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sf:n=10;break e;case Ef:n=9;break e;case Bu:n=11;break e;case ju:n=14;break e;case Kr:n=16,s=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Gt(n,r,t,i),t.elementType=e,t.type=s,t.lanes=o,t}function Ds(e,t,r,s){return e=Gt(7,e,s,t),e.lanes=r,e}function cl(e,t,r,s){return e=Gt(22,e,s,t),e.elementType=$f,e.lanes=r,e.stateNode={isHidden:!1},e}function Zl(e,t,r){return e=Gt(6,e,null,t),e.lanes=r,e}function Jl(e,t,r){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uy(e,t,r,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kd(e,t,r,s,i,o,n,a,l){return e=new Uy(e,t,r,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Gt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(o),e}function Hy(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hi,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function yg(e){if(!e)return fs;e=e._reactInternals;e:{if(Js(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var r=e.type;if(kt(r))return ym(e,r,t)}return t}function bg(e,t,r,s,i,o,n,a,l){return e=kd(r,s,!0,e,i,o,n,a,l),e.context=yg(null),r=e.current,s=ft(),i=ls(r),o=Pr(s,i),o.callback=t??null,ns(r,o,i),e.current.lanes=i,dn(e,i,s),Ct(e,s),e}function ul(e,t,r,s){var i=t.current,o=ft(),n=ls(i);return r=yg(r),t.context===null?t.context=r:t.pendingContext=r,t=Pr(o,n),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=ns(i,t,n),e!==null&&(lr(e,i,n,o),sa(e,i,n)),n}function Oa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Cd(e,t){Zh(e,t),(e=e.alternate)&&Zh(e,t)}function Wy(){return null}var wg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sd(e){this._internalRoot=e}dl.prototype.render=Sd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));ul(e,t,null,null)};dl.prototype.unmount=Sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ws(function(){ul(null,e,null,null)}),t[Rr]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Qr.length&&t!==0&&t<Qr[r].priority;r++);Qr.splice(r,0,e),r===0&&Jf(e)}};function Ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jh(){}function Gy(e,t,r,s,i){if(i){if(typeof s=="function"){var o=s;s=function(){var u=Oa(n);o.call(u)}}var n=bg(t,s,e,0,null,!1,!1,"",Jh);return e._reactRootContainer=n,e[Rr]=n.current,Ko(e.nodeType===8?e.parentNode:e),Ws(),n}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var a=s;s=function(){var u=Oa(l);a.call(u)}}var l=kd(e,0,!1,null,null,!1,!1,"",Jh);return e._reactRootContainer=l,e[Rr]=l.current,Ko(e.nodeType===8?e.parentNode:e),Ws(function(){ul(t,l,r,s)}),l}function pl(e,t,r,s,i){var o=r._reactRootContainer;if(o){var n=o;if(typeof i=="function"){var a=i;i=function(){var l=Oa(n);a.call(l)}}ul(t,n,e,i)}else n=Gy(r,t,e,i,s);return Oa(n)}Qf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=bo(t.pendingLanes);r!==0&&(Wu(t,r|1),Ct(t,Ie()),!(re&6)&&(Vi=Ie()+500,ys()))}break;case 13:Ws(function(){var s=Or(e,1);if(s!==null){var i=ft();lr(s,e,1,i)}}),Cd(e,1)}};Gu=function(e){if(e.tag===13){var t=Or(e,134217728);if(t!==null){var r=ft();lr(t,e,134217728,r)}Cd(e,134217728)}};Xf=function(e){if(e.tag===13){var t=ls(e),r=Or(e,t);if(r!==null){var s=ft();lr(r,e,t,s)}Cd(e,t)}};Yf=function(){return ce};Zf=function(e,t){var r=ce;try{return ce=e,t()}finally{ce=r}};Ic=function(e,t,r){switch(t){case"input":if(zc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var i=sl(s);if(!i)throw Error(P(90));Af(s),zc(s,i)}}}break;case"textarea":Pf(e,r);break;case"select":t=r.value,t!=null&&Si(e,!!r.multiple,t,!1)}};Df=bd;Vf=Ws;var Ky={usingClientEntryPoint:!1,Events:[pn,vi,sl,Rf,Of,bd]},lo={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qy={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jf(e),e===null?null:e.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bn.isDisabled&&Bn.supportsFiber)try{Ja=Bn.inject(qy),br=Bn}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ky;Dt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(t))throw Error(P(200));return Hy(e,t,null,r)};Dt.createRoot=function(e,t){if(!Ed(e))throw Error(P(299));var r=!1,s="",i=wg;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=kd(e,1,!1,null,null,r,!1,s,i),e[Rr]=t.current,Ko(e.nodeType===8?e.parentNode:e),new Sd(t)};Dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=jf(t),e=e===null?null:e.stateNode,e};Dt.flushSync=function(e){return Ws(e)};Dt.hydrate=function(e,t,r){if(!hl(t))throw Error(P(200));return pl(null,e,t,!0,r)};Dt.hydrateRoot=function(e,t,r){if(!Ed(e))throw Error(P(405));var s=r!=null&&r.hydratedSources||null,i=!1,o="",n=wg;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(n=r.onRecoverableError)),t=bg(t,null,e,1,r??null,i,!1,o,n),e[Rr]=t.current,Ko(e),s)for(e=0;e<s.length;e++)r=s[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new dl(t)};Dt.render=function(e,t,r){if(!hl(t))throw Error(P(200));return pl(null,e,t,!1,r)};Dt.unmountComponentAtNode=function(e){if(!hl(e))throw Error(P(40));return e._reactRootContainer?(Ws(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Rr]=null})}),!0):!1};Dt.unstable_batchedUpdates=bd;Dt.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!hl(r))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return pl(e,t,r,!1,s)};Dt.version="18.3.1-next-f1338f8080-20240426";function xg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xg)}catch(e){console.error(e)}}xg(),xf.exports=Dt;var Qy=xf.exports;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rn(){return rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},rn.apply(null,arguments)}var es;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(es||(es={}));const ep="popstate";function Xy(e){e===void 0&&(e={});function t(i,o){let{pathname:n="/",search:a="",hash:l=""}=ei(i.location.hash.substr(1));return!n.startsWith("/")&&!n.startsWith(".")&&(n="/"+n),fu("",{pathname:n,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let n=i.document.querySelector("base"),a="";if(n&&n.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:Da(o))}function s(i,o){$d(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Zy(t,r,s,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $d(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Yy(){return Math.random().toString(36).substr(2,8)}function tp(e,t){return{usr:e.state,key:e.key,idx:t}}function fu(e,t,r,s){return r===void 0&&(r=null),rn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ei(t):t,{state:r,key:t&&t.key||s||Yy()})}function Da(e){let{pathname:t="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function ei(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function Zy(e,t,r,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:o=!1}=s,n=i.history,a=es.Pop,l=null,u=h();u==null&&(u=0,n.replaceState(rn({},n.state,{idx:u}),""));function h(){return(n.state||{idx:null}).idx}function d(){a=es.Pop;let C=h(),b=C==null?null:C-u;u=C,l&&l({action:a,location:x.location,delta:b})}function p(C,b){a=es.Push;let m=fu(x.location,C,b);r&&r(m,C),u=h()+1;let y=tp(m,u),w=x.createHref(m);try{n.pushState(y,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}o&&l&&l({action:a,location:x.location,delta:1})}function g(C,b){a=es.Replace;let m=fu(x.location,C,b);r&&r(m,C),u=h();let y=tp(m,u),w=x.createHref(m);n.replaceState(y,"",w),o&&l&&l({action:a,location:x.location,delta:0})}function v(C){let b=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:Da(C);return m=m.replace(/ $/,"%20"),Ne(b,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,b)}let x={get action(){return a},get location(){return e(i,n)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ep,d),l=C,()=>{i.removeEventListener(ep,d),l=null}},createHref(C){return t(i,C)},createURL:v,encodeLocation(C){let b=v(C);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:p,replace:g,go(C){return n.go(C)}};return x}var rp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rp||(rp={}));function Jy(e,t,r){return r===void 0&&(r="/"),eb(e,t,r)}function eb(e,t,r,s){let i=typeof t=="string"?ei(t):t,o=Fi(i.pathname||"/",r);if(o==null)return null;let n=_g(e);tb(n);let a=null,l=hb(o);for(let u=0;a==null&&u<n.length;++u)a=ub(n[u],l);return a}function _g(e,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let i=(o,n,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:n,route:o};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(s),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(s.length));let u=us([s,l.relativePath]),h=r.concat(l);o.children&&o.children.length>0&&(Ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_g(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:lb(u,o.index),routesMeta:h})};return e.forEach((o,n)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,n);else for(let l of kg(o.path))i(o,n,l)}),t}function kg(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(s.length===0)return i?[o,""]:[o];let n=kg(s.join("/")),a=[];return a.push(...n.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...n),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function tb(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:cb(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const rb=/^:[\w-]+$/,sb=3,ib=2,ob=1,nb=10,ab=-2,sp=e=>e==="*";function lb(e,t){let r=e.split("/"),s=r.length;return r.some(sp)&&(s+=ab),t&&(s+=ib),r.filter(i=>!sp(i)).reduce((i,o)=>i+(rb.test(o)?sb:o===""?ob:nb),s)}function cb(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function ub(e,t,r){let{routesMeta:s}=e,i={},o="/",n=[];for(let a=0;a<s.length;++a){let l=s[a],u=a===s.length-1,h=o==="/"?t:t.slice(o.length)||"/",d=mu({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),p=l.route;if(!d)return null;Object.assign(i,d.params),n.push({params:i,pathname:us([o,d.pathname]),pathnameBase:mb(us([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=us([o,d.pathnameBase]))}return n}function mu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=db(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],n=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:s.reduce((u,h,d)=>{let{paramName:p,isOptional:g}=h;if(p==="*"){let x=a[d]||"";n=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:n,pattern:e}}function db(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),$d(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(n,a,l)=>(s.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function hb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function pb(e,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:i=""}=typeof e=="string"?ei(e):e,o;return r?(r=Eg(r),r.startsWith("/")?o=ip(r.substring(1),"/"):o=ip(r,t)):o=t,{pathname:o,search:gb(s),hash:vb(i)}}function ip(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ec(e,t,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fb(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Cg(e,t){let r=fb(e);return t?r.map((s,i)=>i===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function Sg(e,t,r,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=ei(e):(i=rn({},e),Ne(!i.pathname||!i.pathname.includes("?"),ec("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),ec("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),ec("#","search","hash",i)));let o=e===""||i.pathname==="",n=o?"/":i.pathname,a;if(n==null)a=r;else{let d=t.length-1;if(!s&&n.startsWith("..")){let p=n.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=pb(i,a),u=n&&n!=="/"&&n.endsWith("/"),h=(o||n===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const Eg=e=>e.replace(/\/\/+/g,"/"),us=e=>Eg(e.join("/")),mb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $g=["post","put","patch","delete"];new Set($g);const bb=["get",...$g];new Set(bb);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sn(){return sn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},sn.apply(null,arguments)}const fl=E.createContext(null),zg=E.createContext(null),bs=E.createContext(null),ml=E.createContext(null),ws=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Ag=E.createContext(null);function wb(e,t){let{relative:r}=t===void 0?{}:t;mn()||Ne(!1);let{basename:s,navigator:i}=E.useContext(bs),{hash:o,pathname:n,search:a}=gl(e,{relative:r}),l=n;return s!=="/"&&(l=n==="/"?s:us([s,n])),i.createHref({pathname:l,search:a,hash:o})}function mn(){return E.useContext(ml)!=null}function Gi(){return mn()||Ne(!1),E.useContext(ml).location}function Tg(e){E.useContext(bs).static||E.useLayoutEffect(e)}function xb(){let{isDataRoute:e}=E.useContext(ws);return e?Rb():_b()}function _b(){mn()||Ne(!1);let e=E.useContext(fl),{basename:t,future:r,navigator:s}=E.useContext(bs),{matches:i}=E.useContext(ws),{pathname:o}=Gi(),n=JSON.stringify(Cg(i,r.v7_relativeSplatPath)),a=E.useRef(!1);return Tg(()=>{a.current=!0}),E.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){s.go(u);return}let d=Sg(u,JSON.parse(n),o,h.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:us([t,d.pathname])),(h.replace?s.replace:s.push)(d,h.state,h)},[t,s,n,o,e])}const kb=E.createContext(null);function Cb(e){let t=E.useContext(ws).outlet;return t&&E.createElement(kb.Provider,{value:e},t)}function gl(e,t){let{relative:r}=t===void 0?{}:t,{future:s}=E.useContext(bs),{matches:i}=E.useContext(ws),{pathname:o}=Gi(),n=JSON.stringify(Cg(i,s.v7_relativeSplatPath));return E.useMemo(()=>Sg(e,JSON.parse(n),o,r==="path"),[e,n,o,r])}function Sb(e,t){return Eb(e,t)}function Eb(e,t,r,s){mn()||Ne(!1);let{navigator:i}=E.useContext(bs),{matches:o}=E.useContext(ws),n=o[o.length-1],a=n?n.params:{};n&&n.pathname;let l=n?n.pathnameBase:"/";n&&n.route;let u=Gi(),h;if(t){var d;let C=typeof t=="string"?ei(t):t;l==="/"||(d=C.pathname)!=null&&d.startsWith(l)||Ne(!1),h=C}else h=u;let p=h.pathname||"/",g=p;if(l!=="/"){let C=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=Jy(e,{pathname:g}),x=Pb(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:us([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:us([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,r,s);return t&&x?E.createElement(ml.Provider,{value:{location:sn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:es.Pop}},x):x}function $b(){let e=Ib(),t=yb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),r?E.createElement("pre",{style:i},r):null,null)}const zb=E.createElement($b,null);class Ab extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?E.createElement(ws.Provider,{value:this.props.routeContext},E.createElement(Ag.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tb(e){let{routeContext:t,match:r,children:s}=e,i=E.useContext(fl);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),E.createElement(ws.Provider,{value:t},s)}function Pb(e,t,r,s){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=s)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,a=(i=r)==null?void 0:i.errors;if(a!=null){let h=n.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||Ne(!1),n=n.slice(0,Math.min(n.length,h+1))}let l=!1,u=-1;if(r&&s&&s.v7_partialHydration)for(let h=0;h<n.length;h++){let d=n[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:p,errors:g}=r,v=d.route.loader&&p[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?n=n.slice(0,u+1):n=[n[0]];break}}}return n.reduceRight((h,d,p)=>{let g,v=!1,x=null,C=null;r&&(g=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||zb,l&&(u<0&&p===0?(Ob("route-fallback"),v=!0,C=null):u===p&&(v=!0,C=d.route.hydrateFallbackElement||null)));let b=t.concat(n.slice(0,p+1)),m=()=>{let y;return g?y=x:v?y=C:d.route.Component?y=E.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=h,E.createElement(Tb,{match:d,routeContext:{outlet:h,matches:b,isDataRoute:r!=null},children:y})};return r&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?E.createElement(Ab,{location:r.location,revalidation:r.revalidation,component:x,error:g,children:m(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):m()},null)}var Pg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pg||{}),Ng=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ng||{});function Nb(e){let t=E.useContext(fl);return t||Ne(!1),t}function Lb(e){let t=E.useContext(zg);return t||Ne(!1),t}function Mb(e){let t=E.useContext(ws);return t||Ne(!1),t}function Lg(e){let t=Mb(),r=t.matches[t.matches.length-1];return r.route.id||Ne(!1),r.route.id}function Ib(){var e;let t=E.useContext(Ag),r=Lb(),s=Lg();return t!==void 0?t:(e=r.errors)==null?void 0:e[s]}function Rb(){let{router:e}=Nb(Pg.UseNavigateStable),t=Lg(Ng.UseNavigateStable),r=E.useRef(!1);return Tg(()=>{r.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,sn({fromRouteId:t},o)))},[e,t])}const op={};function Ob(e,t,r){op[e]||(op[e]=!0)}function Db(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Vb(e){return Cb(e.context)}function ci(e){Ne(!1)}function Fb(e){let{basename:t="/",children:r=null,location:s,navigationType:i=es.Pop,navigator:o,static:n=!1,future:a}=e;mn()&&Ne(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:o,static:n,future:sn({v7_relativeSplatPath:!1},a)}),[l,a,o,n]);typeof s=="string"&&(s=ei(s));let{pathname:h="/",search:d="",hash:p="",state:g=null,key:v="default"}=s,x=E.useMemo(()=>{let C=Fi(h,l);return C==null?null:{location:{pathname:C,search:d,hash:p,state:g,key:v},navigationType:i}},[l,h,d,p,g,v,i]);return x==null?null:E.createElement(bs.Provider,{value:u},E.createElement(ml.Provider,{children:r,value:x}))}function Bb(e){let{children:t,location:r}=e;return Sb(gu(t),r)}new Promise(()=>{});function gu(e,t){t===void 0&&(t=[]);let r=[];return E.Children.forEach(e,(s,i)=>{if(!E.isValidElement(s))return;let o=[...t,i];if(s.type===E.Fragment){r.push.apply(r,gu(s.props.children,o));return}s.type!==ci&&Ne(!1),!s.props.index||!s.props.children||Ne(!1);let n={id:s.props.id||o.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(n.children=gu(s.props.children,o)),r.push(n)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Va.apply(null,arguments)}function Mg(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function jb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ub(e,t){return e.button===0&&(!t||t==="_self")&&!jb(e)}const Hb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Gb="6";try{window.__reactRouterVersion=Gb}catch{}const Kb=E.createContext({isTransitioning:!1}),qb="startTransition",np=F[qb];function Qb(e){let{basename:t,children:r,future:s,window:i}=e,o=E.useRef();o.current==null&&(o.current=Xy({window:i,v5Compat:!0}));let n=o.current,[a,l]=E.useState({action:n.action,location:n.location}),{v7_startTransition:u}=s||{},h=E.useCallback(d=>{u&&np?np(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>n.listen(h),[n,h]),E.useEffect(()=>Db(s),[s]),E.createElement(Fb,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:n,future:s})}const Xb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ig=E.forwardRef(function(t,r){let{onClick:s,relative:i,reloadDocument:o,replace:n,state:a,target:l,to:u,preventScrollReset:h,viewTransition:d}=t,p=Mg(t,Hb),{basename:g}=E.useContext(bs),v,x=!1;if(typeof u=="string"&&Yb.test(u)&&(v=u,Xb))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),k=Fi(w.pathname,g);w.origin===y.origin&&k!=null?u=k+w.search+w.hash:x=!0}catch{}let C=wb(u,{relative:i}),b=e1(u,{replace:n,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d});function m(y){s&&s(y),y.defaultPrevented||b(y)}return E.createElement("a",Va({},p,{href:v||C,onClick:x||o?s:m,ref:r,target:l}))}),Zb=E.forwardRef(function(t,r){let{"aria-current":s="page",caseSensitive:i=!1,className:o="",end:n=!1,style:a,to:l,viewTransition:u,children:h}=t,d=Mg(t,Wb),p=gl(l,{relative:d.relative}),g=Gi(),v=E.useContext(zg),{navigator:x,basename:C}=E.useContext(bs),b=v!=null&&t1(p)&&u===!0,m=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,y=g.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),w=w?w.toLowerCase():null,m=m.toLowerCase()),w&&C&&(w=Fi(w,C)||w);const k=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let S=y===m||!n&&y.startsWith(m)&&y.charAt(k)==="/",$=w!=null&&(w===m||!n&&w.startsWith(m)&&w.charAt(m.length)==="/"),T={isActive:S,isPending:$,isTransitioning:b},M=S?s:void 0,z;typeof o=="function"?z=o(T):z=[o,S?"active":null,$?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let ee=typeof a=="function"?a(T):a;return E.createElement(Ig,Va({},d,{"aria-current":M,className:z,ref:r,style:ee,to:l,viewTransition:u}),typeof h=="function"?h(T):h)});var vu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vu||(vu={}));var ap;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ap||(ap={}));function Jb(e){let t=E.useContext(fl);return t||Ne(!1),t}function e1(e,t){let{target:r,replace:s,state:i,preventScrollReset:o,relative:n,viewTransition:a}=t===void 0?{}:t,l=xb(),u=Gi(),h=gl(e,{relative:n});return E.useCallback(d=>{if(Ub(d,r)){d.preventDefault();let p=s!==void 0?s:Da(u)===Da(h);l(e,{replace:p,state:i,preventScrollReset:o,relative:n,viewTransition:a})}},[u,l,h,s,i,r,e,o,n,a])}function t1(e,t){t===void 0&&(t={});let r=E.useContext(Kb);r==null&&Ne(!1);let{basename:s}=Jb(vu.useViewTransitionState),i=gl(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Fi(r.currentLocation.pathname,s)||r.currentLocation.pathname,n=Fi(r.nextLocation.pathname,s)||r.nextLocation.pathname;return mu(i.pathname,n)!=null||mu(i.pathname,o)!=null}var r1={},s1=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function i1(e){return typeof e=="string"&&s1.test(e)}const rt=[];for(let e=0;e<256;++e)rt.push((e+256).toString(16).slice(1));function o1(e,t=0){return(rt[e[t+0]]+rt[e[t+1]]+rt[e[t+2]]+rt[e[t+3]]+"-"+rt[e[t+4]]+rt[e[t+5]]+"-"+rt[e[t+6]]+rt[e[t+7]]+"-"+rt[e[t+8]]+rt[e[t+9]]+"-"+rt[e[t+10]]+rt[e[t+11]]+rt[e[t+12]]+rt[e[t+13]]+rt[e[t+14]]+rt[e[t+15]]).toLowerCase()}let tc;const n1=new Uint8Array(16);function a1(){if(!tc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");tc=crypto.getRandomValues.bind(crypto)}return tc(n1)}const l1=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var lp={randomUUID:l1};function c1(e,t,r){var i;e=e||{};const s=e.random??((i=e.rng)==null?void 0:i.call(e))??a1();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,o1(s)}function cp(e,t,r){return lp.randomUUID&&!e?lp.randomUUID():c1(e)}const up="current";function ke(e){if(!e.isConnected)throw new Error("You cannot call this API before having established a connection to the host!")}function u1(e){var t,r;return!!((r=(t=e==null?void 0:e.data)==null?void 0:t.meta)!=null&&r.messageId)}const d1=5e3,h1=3e4,p1=5e3;function f1(e){return typeof e!="string"||!i1(e)?null:e}function m1(e){return e.type==="connect"?d1:e.type==="api"?h1:e.type==="navigateTo"?p1:null}class g1{constructor({onDataUpdate:t,onBroadcast:r,onLivereload:s}={}){H(this,"onDataUpdate");H(this,"onBroadcast");H(this,"onLivereload");H(this,"pendingMessages",new Map);H(this,"targetOrigin","*");H(this,"handleMessageWrapper",t=>this.handleMessage(t));H(this,"handleMessage",t=>{var n,a,l;if(!u1(t))return;const{message:r}=t.data;if(r.type==="data"){(n=this.onDataUpdate)==null||n.call(this,r);return}if(r.type==="broadcast"){(a=this.onBroadcast)==null||a.call(this,r);return}if(r.type==="livereload"){(l=this.onLivereload)==null||l.call(this,r);return}const{messageId:s}=t.data.meta,i=f1(s);if(!i){this.throwError("Received message with invalid messageId format");return}const o=this.pendingMessages.get(i);if(!o||typeof o!="function"){this.throwError("Received unexpected message");return}this.pendingMessages.delete(i),o(r.payload)});this.onDataUpdate=t,this.onBroadcast=r,this.onLivereload=s,window.addEventListener("message",this.handleMessageWrapper)}destroy(){window.removeEventListener("message",this.handleMessageWrapper)}setOrigin(t){this.targetOrigin=t}sendUnidirectionalMessage(t){const r=cp(),s={message:t,meta:{messageId:r,version:up}};window.parent.postMessage(s,this.targetOrigin)}async postMessage(t){return new Promise((r,s)=>{const i=cp();let o;const n=m1(t);n!==null&&(o=setTimeout(()=>{s(new Error(`Waiting for response from foundry host for "${t.type}" message (ID: ${i}) timed out after ${n}ms`))},n)),this.pendingMessages.set(i,l=>{o&&clearTimeout(o),r(l)});const a={message:t,meta:{messageId:i,version:up}};window.parent.postMessage(a,this.targetOrigin)})}throwError(t){throw new Error(t)}}function Ve(e,t,r,s){var i=arguments.length,o=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,r):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,r,o):n(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}const Gr=new WeakMap,Ts=new WeakMap,$r=new WeakMap,Fa=Symbol("anyProducer"),dp=Promise.resolve(),Ba=Symbol("listenerAdded"),ja=Symbol("listenerRemoved");let Ua=!1,rc=!1;const Ha=e=>typeof e=="string"||typeof e=="symbol"||typeof e=="number";function ai(e){if(!Ha(e))throw new TypeError("`eventName` must be a string, symbol, or number")}function jn(e){if(typeof e!="function")throw new TypeError("listener must be a function")}function li(e,t){const r=Ts.get(e);if(r.has(t))return r.get(t)}function To(e,t){const r=Ha(t)?t:Fa,s=$r.get(e);if(s.has(r))return s.get(r)}function v1(e,t,r){const s=$r.get(e);if(s.has(t))for(const i of s.get(t))i.enqueue(r);if(s.has(Fa)){const i=Promise.all([t,r]);for(const o of s.get(Fa))o.enqueue(i)}}function hp(e,t){t=Array.isArray(t)?t:[t];let r=!1,s=()=>{},i=[];const o={enqueue(n){i.push(n),s()},finish(){r=!0,s()}};for(const n of t){let a=To(e,n);a||(a=new Set,$r.get(e).set(n,a)),a.add(o)}return{async next(){return i?i.length===0?r?(i=void 0,this.next()):(await new Promise(n=>{s=n}),this.next()):{done:!1,value:await i.shift()}:{done:!0}},async return(n){i=void 0;for(const a of t){const l=To(e,a);l&&(l.delete(o),l.size===0&&$r.get(e).delete(a))}return s(),arguments.length>0?{done:!0,value:await n}:{done:!0}},[Symbol.asyncIterator](){return this}}}function pp(e){if(e===void 0)return fp;if(!Array.isArray(e))throw new TypeError("`methodNames` must be an array of strings");for(const t of e)if(!fp.includes(t))throw typeof t!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${t} is not Emittery method`);return e}const ui=e=>e===Ba||e===ja;function Un(e,t,r){if(ui(t))try{Ua=!0,e.emit(t,r)}finally{Ua=!1}}class Gs{static mixin(t,r){return r=pp(r),s=>{if(typeof s!="function")throw new TypeError("`target` must be function");for(const n of r)if(s.prototype[n]!==void 0)throw new Error(`The property \`${n}\` already exists on \`target\``);function i(){return Object.defineProperty(this,t,{enumerable:!1,value:new Gs}),this[t]}Object.defineProperty(s.prototype,t,{enumerable:!1,get:i});const o=n=>function(...a){return this[t][n](...a)};for(const n of r)Object.defineProperty(s.prototype,n,{enumerable:!1,value:o(n)});return s}}static get isDebugEnabled(){if(typeof r1!="object")return rc;const{env:t}=globalThis.process??{env:{}};return t.DEBUG==="emittery"||t.DEBUG==="*"||rc}static set isDebugEnabled(t){rc=t}constructor(t={}){Gr.set(this,new Set),Ts.set(this,new Map),$r.set(this,new Map),$r.get(this).set(Fa,new Set),this.debug=t.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(r,s,i,o)=>{try{o=JSON.stringify(o)}catch{o=`Object with the following keys failed to stringify: ${Object.keys(o).join(",")}`}(typeof i=="symbol"||typeof i=="number")&&(i=i.toString());const n=new Date,a=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}.${n.getMilliseconds()}`;console.log(`[${a}][emittery:${r}][${s}] Event Name: ${i}
	data: ${o}`)})}logIfDebugEnabled(t,r,s){(Gs.isDebugEnabled||this.debug.enabled)&&this.debug.logger(t,this.debug.name,r,s)}on(t,r,{signal:s}={}){jn(r),t=Array.isArray(t)?t:[t];for(const o of t){ai(o);let n=li(this,o);n||(n=new Set,Ts.get(this).set(o,n)),n.add(r),this.logIfDebugEnabled("subscribe",o,void 0),ui(o)||Un(this,Ba,{eventName:o,listener:r})}const i=()=>{this.off(t,r),s==null||s.removeEventListener("abort",i)};return s==null||s.addEventListener("abort",i,{once:!0}),s!=null&&s.aborted&&i(),i}off(t,r){jn(r),t=Array.isArray(t)?t:[t];for(const s of t){ai(s);const i=li(this,s);i&&(i.delete(r),i.size===0&&Ts.get(this).delete(s)),this.logIfDebugEnabled("unsubscribe",s,void 0),ui(s)||Un(this,ja,{eventName:s,listener:r})}}once(t,r){if(r!==void 0&&typeof r!="function")throw new TypeError("predicate must be a function");let s;const i=new Promise(o=>{s=this.on(t,n=>{r&&!r(n)||(s(),o(n))})});return i.off=s,i}events(t){t=Array.isArray(t)?t:[t];for(const r of t)ai(r);return hp(this,t)}async emit(t,r){if(ai(t),ui(t)&&!Ua)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emit",t,r),v1(this,t,r);const s=li(this,t)??new Set,i=Gr.get(this),o=[...s],n=ui(t)?[]:[...i];await dp,await Promise.all([...o.map(async a=>{if(s.has(a))return a(r)}),...n.map(async a=>{if(i.has(a))return a(t,r)})])}async emitSerial(t,r){if(ai(t),ui(t)&&!Ua)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emitSerial",t,r);const s=li(this,t)??new Set,i=Gr.get(this),o=[...s],n=[...i];await dp;for(const a of o)s.has(a)&&await a(r);for(const a of n)i.has(a)&&await a(t,r)}onAny(t,{signal:r}={}){jn(t),this.logIfDebugEnabled("subscribeAny",void 0,void 0),Gr.get(this).add(t),Un(this,Ba,{listener:t});const s=()=>{this.offAny(t),r==null||r.removeEventListener("abort",s)};return r==null||r.addEventListener("abort",s,{once:!0}),r!=null&&r.aborted&&s(),s}anyEvent(){return hp(this)}offAny(t){jn(t),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),Un(this,ja,{listener:t}),Gr.get(this).delete(t)}clearListeners(t){t=Array.isArray(t)?t:[t];for(const r of t)if(this.logIfDebugEnabled("clear",r,void 0),Ha(r)){const s=li(this,r);s&&s.clear();const i=To(this,r);if(i){for(const o of i)o.finish();i.clear()}}else{Gr.get(this).clear();for(const[s,i]of Ts.get(this).entries())i.clear(),Ts.get(this).delete(s);for(const[s,i]of $r.get(this).entries()){for(const o of i)o.finish();i.clear(),$r.get(this).delete(s)}}}listenerCount(t){var s,i,o;t=Array.isArray(t)?t:[t];let r=0;for(const n of t){if(Ha(n)){r+=Gr.get(this).size+(((s=li(this,n))==null?void 0:s.size)??0)+(((i=To(this,n))==null?void 0:i.size)??0)+(((o=To(this))==null?void 0:o.size)??0);continue}n!==void 0&&ai(n),r+=Gr.get(this).size;for(const a of Ts.get(this).values())r+=a.size;for(const a of $r.get(this).values())r+=a.size}return r}bindMethods(t,r){if(typeof t!="object"||t===null)throw new TypeError("`target` must be an object");r=pp(r);for(const s of r){if(t[s]!==void 0)throw new Error(`The property \`${s}\` already exists on \`target\``);Object.defineProperty(t,s,{enumerable:!1,value:this[s].bind(this)})}}}const fp=Object.getOwnPropertyNames(Gs.prototype).filter(e=>e!=="constructor");Object.defineProperty(Gs,"listenerAdded",{value:Ba,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(Gs,"listenerRemoved",{value:ja,writable:!1,enumerable:!0,configurable:!1});function Fe(e){let t,r,s;return t=e,(i,o,n)=>{if(n.value!=null)n.value=mp(n.value,t,r,s);else if(n.get!=null)n.get=mp(n.get,t,r,s);else throw"Only put a Memoize() decorator on a method or get accessor."}}const sc=new Map;function mp(e,t,r=0,s){const i=Symbol("__memoized_map__");return function(...o){let n;this.hasOwnProperty(i)||Object.defineProperty(this,i,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[i];if(Array.isArray(s))for(const l of s)sc.has(l)?sc.get(l).push(a):sc.set(l,[a]);if(t||o.length>0||r>0){let l;t===!0?l=o.map(d=>d.toString()).join("!"):t?l=t.apply(this,o):l=o[0];const u=`${l}__timestamp`;let h=!1;if(r>0)if(!a.has(u))h=!0;else{let d=a.get(u);h=Date.now()-d>r}a.has(l)&&!h?n=a.get(l):(n=e.apply(this,o),a.set(l,n),r>0&&a.set(u,Date.now()))}else{const l=this;a.has(l)?n=a.get(l):(n=e.apply(this,o),a.set(l,n))}return n}}class y1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesSuppressedDevicesV1(t={}){const r={type:"api",api:"alerts",method:"deleteEntitiesSuppressedDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesAlertsV1(t={}){console.warn("This method is deprecated. Use getQueriesAlertsV2 instead.");const r={type:"api",api:"alerts",method:"getQueriesAlertsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesAlertsV2(t={}){const r={type:"api",api:"alerts",method:"getQueriesAlertsV2",payload:{params:t}};return this.bridge.postMessage(r)}async patchCombinedAlertsV2(t,r={}){console.warn("This method is deprecated. Use patchCombinedAlertsV3 instead.");const s={type:"api",api:"alerts",method:"patchCombinedAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchCombinedAlertsV3(t,r={}){const s={type:"api",api:"alerts",method:"patchCombinedAlertsV3",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesAlertsV2(t,r={}){console.warn("This method is deprecated. Use patchEntitiesAlertsV3 instead.");const s={type:"api",api:"alerts",method:"patchEntitiesAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesAlertsV3(t,r={}){const s={type:"api",api:"alerts",method:"patchEntitiesAlertsV3",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesSuppressedDevicesV1(t,r={}){const s={type:"api",api:"alerts",method:"patchEntitiesSuppressedDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesAlertsV1(t,r={}){console.warn("This method is deprecated. Use postAggregatesAlertsV2 instead.");const s={type:"api",api:"alerts",method:"postAggregatesAlertsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesAlertsV2(t,r={}){const s={type:"api",api:"alerts",method:"postAggregatesAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesAlertsV1(t,r={}){console.warn("This method is deprecated. Use postEntitiesAlertsV2 instead.");const s={type:"api",api:"alerts",method:"postEntitiesAlertsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesAlertsV2(t,r={}){const s={type:"api",api:"alerts",method:"postEntitiesAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesSuppressedDevicesV1(t,r={}){const s={type:"api",api:"alerts",method:"postEntitiesSuppressedDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class b1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getAggregatesResourcesCountByManagedByV1(t={}){const r={type:"api",api:"cloudSecurityAssets",method:"getAggregatesResourcesCountByManagedByV1",payload:{params:t}};return this.bridge.postMessage(r)}}class w1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getCloudSecurityRegistrationAwsCombinedAccountsV1(t={}){const r={type:"api",api:"cloudregistration",method:"getCloudSecurityRegistrationAwsCombinedAccountsV1",payload:{params:t}};return this.bridge.postMessage(r)}}class x1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getAggregatesClustersCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesClustersCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesContainersCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesContainersCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesContainersGroupByManagedV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesContainersGroupByManagedV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesContainersSensorCoverageV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesContainersSensorCoverageV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesImagesCountByStateV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesImagesCountByStateV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesNodesCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesNodesCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesPodsCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesPodsCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesUnidentifiedContainersCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesUnidentifiedContainersCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getCombinedClustersV1(t={}){const r={type:"api",api:"containerSecurity",method:"getCombinedClustersV1",payload:{params:t}};return this.bridge.postMessage(r)}}class _1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1(t={}){const r={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1(t={}){const r={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1",payload:{params:t}};return this.bridge.postMessage(r)}}class k1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteV1CollectionsCollectionNameObjectsObjectKey(t={}){const r={type:"api",api:"customobjects",method:"deleteV1CollectionsCollectionNameObjectsObjectKey",payload:{params:t}};return this.bridge.postMessage(r)}async getV1Collections(t={}){const r={type:"api",api:"customobjects",method:"getV1Collections",payload:{params:t}};return this.bridge.postMessage(r)}async getV1CollectionsCollectionNameObjects(t={}){const r={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjects",payload:{params:t}};return this.bridge.postMessage(r)}async getV1CollectionsCollectionNameObjectsObjectKey(t={}){const r={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKey",payload:{params:t}};return this.bridge.postMessage(r)}async getV1CollectionsCollectionNameObjectsObjectKeyMetadata(t={}){const r={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKeyMetadata",payload:{params:t}};return this.bridge.postMessage(r)}async postV1CollectionsCollectionNameObjects(t,r={}){const s={type:"api",api:"customobjects",method:"postV1CollectionsCollectionNameObjects",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async putV1CollectionsCollectionNameObjectsObjectKey(t,r={}){const s={type:"api",api:"customobjects",method:"putV1CollectionsCollectionNameObjectsObjectKey",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class C1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesSuppressedDevicesV1(t={}){const r={type:"api",api:"detects",method:"getEntitiesSuppressedDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async patchEntitiesDetectsV2(t,r={}){const s={type:"api",api:"detects",method:"patchEntitiesDetectsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchQueriesDetectsV1(t,r={}){const s={type:"api",api:"detects",method:"patchQueriesDetectsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchQueriesDetectsV2(t,r={}){const s={type:"api",api:"detects",method:"patchQueriesDetectsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesDetectsGetV1(t,r={}){const s={type:"api",api:"detects",method:"postAggregatesDetectsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesSummariesGetV1(t,r={}){const s={type:"api",api:"detects",method:"postEntitiesSummariesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesSuppressedDevicesV1(t,r={}){const s={type:"api",api:"detects",method:"postEntitiesSuppressedDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class S1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesGroupsV1(t){const r={type:"api",api:"devices",method:"deleteEntitiesGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesBucketsV1(t){const r={type:"api",api:"devices",method:"getAggregatesBucketsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesFgaTagPrefixCountsV1(t){const r={type:"api",api:"devices",method:"getAggregatesFgaTagPrefixCountsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesTagPrefixCountsV1(t){const r={type:"api",api:"devices",method:"getAggregatesTagPrefixCountsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesDevicesV1(t){const r={type:"api",api:"devices",method:"getEntitiesDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesFgaGroupsV1(t){const r={type:"api",api:"devices",method:"getEntitiesFgaGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesGroupsV1(t){const r={type:"api",api:"devices",method:"getEntitiesGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesAvailableGroupsV1(t={}){const r={type:"api",api:"devices",method:"getQueriesAvailableGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesDevicesHiddenV2(t={}){const r={type:"api",api:"devices",method:"getQueriesDevicesHiddenV2",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesDevicesV1(t={}){const r={type:"api",api:"devices",method:"getQueriesDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesDevicesV2(t={}){const r={type:"api",api:"devices",method:"getQueriesDevicesV2",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesFgaGroupsV1(t={}){const r={type:"api",api:"devices",method:"getQueriesFgaGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesGroupsV1(t={}){const r={type:"api",api:"devices",method:"getQueriesGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async patchEntitiesDevicesTagsV2(t,r={}){const s={type:"api",api:"devices",method:"patchEntitiesDevicesTagsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesDevicesV1(t,r){const s={type:"api",api:"devices",method:"patchEntitiesDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesGroupsV1(t,r={}){const s={type:"api",api:"devices",method:"patchEntitiesGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesDevicesGetV1(t,r={}){const s={type:"api",api:"devices",method:"postAggregatesDevicesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesFgaHostsGetV1(t,r={}){const s={type:"api",api:"devices",method:"postAggregatesFgaHostsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postCombinedDevicesLoginHistoryV1(t,r={}){const s={type:"api",api:"devices",method:"postCombinedDevicesLoginHistoryV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postCombinedFgaHostsLoginHistoryV1(t,r={}){const s={type:"api",api:"devices",method:"postCombinedFgaHostsLoginHistoryV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesActionsV4(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesActionsV4",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesHiddenActionsV4(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesHiddenActionsV4",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesReportsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesReportsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesV1(t,r){const s={type:"api",api:"devices",method:"postEntitiesDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesV2(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesFgaHostsReportsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesFgaHostsReportsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesFgaHostsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesFgaHostsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesGroupActionsV1(t,r){const s={type:"api",api:"devices",method:"postEntitiesGroupActionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesGroupsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class E1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesExecutionV1(t){const r={type:"api",api:"faasGateway",method:"getEntitiesExecutionV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesExecutionV1(t,r={}){const s={type:"api",api:"faasGateway",method:"postEntitiesExecutionV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class $1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesNetworkLocationsV1(t){const r={type:"api",api:"fwmgr",method:"deleteEntitiesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(r)}async deleteEntitiesPoliciesV1(t){const r={type:"api",api:"fwmgr",method:"deleteEntitiesPoliciesV1",payload:{params:t}};return this.bridge.postMessage(r)}async deleteEntitiesRuleGroupsV1(t){const r={type:"api",api:"fwmgr",method:"deleteEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesEventsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesEventsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesFirewallFieldsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesFirewallFieldsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesNetworkLocationsDetailsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsDetailsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesNetworkLocationsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesPlatformsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesPlatformsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesPoliciesV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesPoliciesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesRuleGroupsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesRulesV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesRulesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getLibraryEntitiesRuleGroupsV1(t){const r={type:"api",api:"fwmgr",method:"getLibraryEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getLibraryQueriesRuleGroupsV1(t={}){const r={type:"api",api:"fwmgr",method:"getLibraryQueriesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesEventsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesEventsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesFirewallFieldsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesFirewallFieldsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesNetworkLocationsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesPlatformsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesPlatformsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesPolicyRulesV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesPolicyRulesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesRuleGroupsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesRulesV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesRulesV1",payload:{params:t}};return this.bridge.postMessage(r)}async patchEntitiesNetworkLocationsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"patchEntitiesNetworkLocationsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesRuleGroupsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"patchEntitiesRuleGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesEventsGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesEventsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesPolicyRulesGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesPolicyRulesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesRuleGroupsGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesRuleGroupsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesRulesGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesRulesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesNetworkLocationsMetadataV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsMetadataV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesNetworkLocationsPrecedenceV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsPrecedenceV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesNetworkLocationsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesOntologyV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesOntologyV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesRuleGroupsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesRuleGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesRulesValidateFilepathV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesRulesValidateFilepathV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async putEntitiesNetworkLocationsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"putEntitiesNetworkLocationsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async putEntitiesPoliciesV2(t,r={}){const s={type:"api",api:"fwmgr",method:"putEntitiesPoliciesV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class z1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getCombinedCrowdscoresV1(t={}){const r={type:"api",api:"incidents",method:"getCombinedCrowdscoresV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesBehaviorsV1(t={}){const r={type:"api",api:"incidents",method:"getQueriesBehaviorsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesIncidentsV1(t={}){const r={type:"api",api:"incidents",method:"getQueriesIncidentsV1",payload:{params:t}};return this.bridge.postMessage(r)}async postAggregatesBehaviorsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postAggregatesBehaviorsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesIncidentsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postAggregatesIncidentsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesBehaviorsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postEntitiesBehaviorsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesIncidentActionsV1(t,r={}){const s={type:"api",api:"incidents",method:"postEntitiesIncidentActionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesIncidentsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postEntitiesIncidentsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class A1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesSavedSearchesExecuteV1(t){const r={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesExecuteV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesSavedSearchesV1(t){const r={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesSavedSearchesExecuteV1(t,r={}){const s={type:"api",api:"loggingapi",method:"postEntitiesSavedSearchesExecuteV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class T1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getIntelMitreEntitiesMatrixV1(t={}){const r={type:"api",api:"mitre",method:"getIntelMitreEntitiesMatrixV1",payload:{params:t}};return this.bridge.postMessage(r)}}class P1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesConfigsV1(t={}){const r={type:"api",api:"plugins",method:"getEntitiesConfigsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesDefinitionsV1(t){const r={type:"api",api:"plugins",method:"getEntitiesDefinitionsV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesExecuteDraftV1(t,r={}){const s={type:"api",api:"plugins",method:"postEntitiesExecuteDraftV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesExecuteV1(t,r={}){const s={type:"api",api:"plugins",method:"postEntitiesExecuteV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class N1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getAggregatesRegistriesCountByStateV1(t={}){const r={type:"api",api:"registryAssessment",method:"getAggregatesRegistriesCountByStateV1",payload:{params:t}};return this.bridge.postMessage(r)}}class L1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesPutFilesV1(t){const r={type:"api",api:"remoteResponse",method:"deleteEntitiesPutFilesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesAppCommandV1(t){const r={type:"api",api:"remoteResponse",method:"getEntitiesAppCommandV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesPutFilesV2(t){const r={type:"api",api:"remoteResponse",method:"getEntitiesPutFilesV2",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesPutFilesV1(t={}){const r={type:"api",api:"remoteResponse",method:"getQueriesPutFilesV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesAppCommandV1(t,r={}){const s={type:"api",api:"remoteResponse",method:"postEntitiesAppCommandV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesAppSessionsV1(t,r={}){const s={type:"api",api:"remoteResponse",method:"postEntitiesAppSessionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class M1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getQueriesUsersV1(t={}){const r={type:"api",api:"userManagement",method:"getQueriesUsersV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesUsersGetV1(t,r={}){const s={type:"api",api:"userManagement",method:"postEntitiesUsersGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class I1{constructor(t){H(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesExecutionResultsV1(t){const r={type:"api",api:"workflows",method:"getEntitiesExecutionResultsV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesExecuteV1(t,r={}){const s={type:"api",api:"workflows",method:"postEntitiesExecuteV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesExecutionActionsV1(t,r){const s={type:"api",api:"workflows",method:"postEntitiesExecutionActionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class We{constructor(t){H(this,"api");this.api=t}get alerts(){return ke(this.api),new y1(this.api.bridge)}get detects(){return ke(this.api),new C1(this.api.bridge)}get devices(){return ke(this.api),new S1(this.api.bridge)}get fwmgr(){return ke(this.api),new $1(this.api.bridge)}get incidents(){return ke(this.api),new z1(this.api.bridge)}get mitre(){return ke(this.api),new T1(this.api.bridge)}get plugins(){return ke(this.api),new P1(this.api.bridge)}get remoteResponse(){return ke(this.api),new L1(this.api.bridge)}get userManagement(){return ke(this.api),new M1(this.api.bridge)}get workflows(){return ke(this.api),new I1(this.api.bridge)}get cloudSecurityAssets(){return ke(this.api),new b1(this.api.bridge)}get cloudregistration(){return ke(this.api),new w1(this.api.bridge)}get containerSecurity(){return ke(this.api),new x1(this.api.bridge)}get cspmRegistration(){return ke(this.api),new _1(this.api.bridge)}get customobjects(){return ke(this.api),new k1(this.api.bridge)}get faasGateway(){return ke(this.api),new E1(this.api.bridge)}get loggingapi(){return ke(this.api),new A1(this.api.bridge)}get registryAssessment(){return ke(this.api),new N1(this.api.bridge)}}Ve([Fe()],We.prototype,"alerts",null);Ve([Fe()],We.prototype,"detects",null);Ve([Fe()],We.prototype,"devices",null);Ve([Fe()],We.prototype,"fwmgr",null);Ve([Fe()],We.prototype,"incidents",null);Ve([Fe()],We.prototype,"mitre",null);Ve([Fe()],We.prototype,"plugins",null);Ve([Fe()],We.prototype,"remoteResponse",null);Ve([Fe()],We.prototype,"userManagement",null);Ve([Fe()],We.prototype,"workflows",null);Ve([Fe()],We.prototype,"cloudSecurityAssets",null);Ve([Fe()],We.prototype,"cloudregistration",null);Ve([Fe()],We.prototype,"containerSecurity",null);Ve([Fe()],We.prototype,"cspmRegistration",null);Ve([Fe()],We.prototype,"customobjects",null);Ve([Fe()],We.prototype,"faasGateway",null);Ve([Fe()],We.prototype,"loggingapi",null);Ve([Fe()],We.prototype,"registryAssessment",null);class R1{constructor(t,r){H(this,"falcon");H(this,"definition");this.falcon=t,this.definition=r}async execute({request:t}={}){return this.falcon.api.plugins.postEntitiesExecuteV1({resources:[{definition_id:this.definition.definitionId,operation_id:this.definition.operationId,request:t}]})}}const Ut=class Ut{constructor(t,r){H(this,"falcon");H(this,"definition");H(this,"pollTimeout",500);H(this,"intervalId");this.falcon=t,this.definition=r}async execute({path:t,method:r,body:s,params:i}){const o="id"in this.definition?{function_id:this.definition.id,function_version:this.definition.version}:{function_name:this.definition.name,function_version:this.definition.version},n=await this.falcon.api.faasGateway.postEntitiesExecutionV1({...o,payload:{path:t,method:r,body:s,params:i}});return new Promise((a,l)=>{var h;const u=(h=n==null?void 0:n.resources)==null?void 0:h[0];u!=null&&u.execution_id?this.pollForResult({resolve:a,reject:l,executionId:u==null?void 0:u.execution_id}):l(n==null?void 0:n.errors)})}async getExecutionResult(t){var i;const r=await this.falcon.api.faasGateway.getEntitiesExecutionV1({id:t}),s=(i=r==null?void 0:r.resources)==null?void 0:i[0];return s==null?void 0:s.payload}pollForResult({resolve:t,reject:r,executionId:s}){let i=2;this.intervalId=window.setInterval(async()=>{try{const o=await this.getExecutionResult(s);o&&(window.clearInterval(this.intervalId),t(o))}catch(o){i<=0&&(window.clearInterval(this.intervalId),r(o)),i--}},this.pollTimeout)}path(t){const r=new URL(t,"http://localhost"),s=r.pathname,i=[...r.searchParams.entries()].reduce((o,[n,a])=>({...o,[n]:[a]}),{});return{path:s,queryParams:i,get:async(o={})=>this.get({path:s,params:{query:(o==null?void 0:o.query)??i??{},header:(o==null?void 0:o.header)??{}}}),post:async(o,n={})=>this.post({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o}),patch:async(o,n={})=>this.patch({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o}),put:async(o,n={})=>this.put({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o}),delete:async(o,n={})=>this.delete({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o})}}async get({path:t,params:r}){return this.execute({path:t,method:Ut.GET,params:r})}async post({path:t,params:r,body:s}){return this.execute({path:t,method:Ut.POST,body:s,params:r})}async patch({path:t,params:r,body:s}){return this.execute({path:t,method:Ut.PATCH,body:s,params:r})}async put({path:t,params:r,body:s}){return this.execute({path:t,method:Ut.PUT,body:s,params:r})}async delete({path:t,params:r,body:s}){return this.execute({path:t,method:Ut.DELETE,body:s,params:r})}destroy(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=void 0)}};H(Ut,"GET","GET"),H(Ut,"POST","POST"),H(Ut,"PATCH","PATCH"),H(Ut,"PUT","PUT"),H(Ut,"DELETE","DELETE");let yu=Ut;class O1{constructor(t,r){H(this,"falcon");H(this,"definition");this.falcon=t,this.definition=r}async write(t,r){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"write",key:t,collection:this.definition.collection,data:r}})}async read(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"read",key:t,collection:this.definition.collection}})}async delete(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"delete",key:t,collection:this.definition.collection}})}async search({filter:t,offset:r,sort:s,limit:i}){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"search",filter:t,limit:i,offset:r,sort:s,collection:this.definition.collection}})}async list(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"list",collection:this.definition.collection,start:t==null?void 0:t.start,end:t==null?void 0:t.end,limit:t==null?void 0:t.limit}})}}class D1{constructor(t){H(this,"falcon");this.falcon=t}async write(t,r){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"ingest",data:t,tag:r==null?void 0:r.tag,tagSource:r==null?void 0:r.tagSource,testData:r==null?void 0:r.testData}})}async query(t){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"dynamic-execute",data:t}})}async savedQuery(t){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"saved-query-execute",data:t}})}}const V1=["_self","_blank"];class F1{constructor(t){H(this,"falcon");this.falcon=t}async navigateTo({path:t,type:r,target:s,metaKey:i,ctrlKey:o,shiftKey:n}){await this.falcon.bridge.postMessage({type:"navigateTo",payload:{path:t,type:r??"falcon",target:s??"_self",metaKey:i??!1,ctrlKey:o??!1,shiftKey:n??!1}})}async onClick(t,r="_self",s="falcon"){var h;if(!(t instanceof Event))throw Error('"event" property should be subclass of Event');if(!("preventDefault"in t)||!(t.target instanceof HTMLAnchorElement))return;t.preventDefault();const i=t.target.getAttribute("href");r=t.target.getAttribute("target")??r;const o=((h=t.target.dataset)==null?void 0:h.type)??s;if(r===null||!V1.includes(r))throw new Error("Target should be _self or _blank");const n=r;if(i==null)throw new Error("Navigation path is missing. Make sure you have added navigation.onClick on the `a` tag and `href` is present.");const{metaKey:a,ctrlKey:l,shiftKey:u}=t;await this.navigateTo({path:i,type:o,target:n,metaKey:a,ctrlKey:l,shiftKey:u})}}class B1{constructor(t){H(this,"bridge");H(this,"observer");this.bridge=t,this.observer=new ResizeObserver(r=>this.handleResizeEvent(r)),this.observer.observe(document.body)}handleResizeEvent(t){const{height:r}=t[0].contentRect;this.bridge.sendUnidirectionalMessage({type:"resize",payload:{height:r}})}destroy(){this.observer.disconnect()}}class j1{constructor(t){H(this,"bridge");this.bridge=t}async openModal(t,r,s={}){const i=await this.bridge.postMessage({type:"openModal",payload:{extension:t,title:r,options:s}});if(i instanceof Error)throw i;return i}closeModal(t){this.bridge.sendUnidirectionalMessage({type:"closeModal",payload:t})}async uploadFile(t,r){return this.bridge.postMessage({type:"fileUpload",fileUploadType:t,payload:r})}}class zd{constructor(){H(this,"isConnected",!1);H(this,"events",new Gs);H(this,"data");H(this,"bridge",new g1({onDataUpdate:t=>this.handleDataUpdate(t),onBroadcast:t=>this.handleBroadcastMessage(t),onLivereload:()=>this.handleLivereloadMessage()}));H(this,"api",new We(this));H(this,"ui",new j1(this.bridge));H(this,"resizeTracker");H(this,"cloudFunctions",[]);H(this,"apiIntegrations",[]);H(this,"collections",[])}async connect(){const t=await this.bridge.postMessage({type:"connect"});if(t!==void 0){const{data:r,origin:s}=t;this.bridge.setOrigin(s),this.data=r,this.updateTheme(r==null?void 0:r.theme),this.isConnected=!0}return this.resizeTracker=new B1(this.bridge),t}get appId(){var t;return(t=this.data)==null?void 0:t.app.id}sendBroadcast(t){this.bridge.sendUnidirectionalMessage({type:"broadcast",payload:t})}handleDataUpdate(t){this.data=t.payload,this.updateTheme(this.data.theme),this.events.emit("data",this.data)}handleBroadcastMessage(t){this.events.emit("broadcast",t.payload)}handleLivereloadMessage(){document.location.reload()}updateTheme(t){if(!t)return;const r=t==="theme-dark"?"theme-light":"theme-dark";document.documentElement.classList.add(t),document.documentElement.classList.remove(r)}cloudFunction(t){ke(this);const r=new yu(this,t);return this.cloudFunctions.push(r),r}apiIntegration({definitionId:t,operationId:r}){if(ke(this),!this.data)throw Error("Data from console is missing");const s=new R1(this,{operationId:r,definitionId:t});return this.apiIntegrations.push(s),s}collection({collection:t}){ke(this);const r=new O1(this,{collection:t});return this.collections.push(r),r}get navigation(){return ke(this),new F1(this)}get logscale(){return ke(this),new D1(this)}destroy(){var t;this.cloudFunctions.forEach(r=>r.destroy()),(t=this.resizeTracker)==null||t.destroy(),this.bridge.destroy()}}Ve([Fe()],zd.prototype,"navigation",null);Ve([Fe()],zd.prototype,"logscale",null);const ic=200,U1=50;async function Ad(e){const t=e.collection({collection:"domain"}),r=new Set;let s;for(let i=0;i<U1;i++){const o=await t.list(s?{limit:ic,start:s}:{limit:ic}),n=((o==null?void 0:o.resources)??[]).map(l=>typeof l=="string"?l:l.category||l._key).filter(Boolean),a=r.size;if(n.forEach(l=>r.add(l)),n.length<ic||r.size===a)break;s=n[n.length-1]}return[...r].sort()}const gn=E.createContext(null);function Rg(){const[e,t]=E.useState(!1),[r,s]=E.useState(null),i=E.useMemo(()=>new zd,[]),o=E.useMemo(()=>i.isConnected?i.navigation:void 0,[i.isConnected]),n=E.useCallback(async()=>{try{s(await Ad(i))}catch(a){console.error("Failed to load categories cache",a)}},[i]);return E.useEffect(()=>{(async()=>(await i.connect(),t(!0),n()))()},[i,n]),{falcon:i,navigation:o,isInitialized:e,cachedCategories:r,refreshCategories:n}}function Og(e){return String(e).trim().replace(/[^A-Za-z0-9_]/g,"_")}function gp(e){var t;return Array.isArray(e)&&e.length?((t=e[0])==null?void 0:t.message)||String(e[0]):null}async function Nr(e,t,r,s){var l,u;const i=e.cloudFunction({name:"urlblock",version:1}).path(r);let o;try{o=t==="GET"?await i.get():await i.post(s??{})}catch(h){throw new Error(gp(h)||(h==null?void 0:h.message)||"Cloud function call failed")}const n=(o==null?void 0:o.status_code)??(o==null?void 0:o.code);if(n!==void 0?n<200||n>=300:!!((l=o==null?void 0:o.errors)!=null&&l.length)){const h=gp(o==null?void 0:o.errors)||((u=o==null?void 0:o.body)==null?void 0:u.error)||`Request failed (HTTP ${n})`,d=new Error(h);throw d.status=n,d.body=o==null?void 0:o.body,d}return(o==null?void 0:o.body)??{}}function H1({children:e,useFalconNavigation:t=!1,to:r,className:s="",variant:i="default"}){const{navigation:o}=E.useContext(gn),a=`${{default:"text-purple-600 hover:text-purple-800 transition-colors duration-200",button:"inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-sm hover:shadow-md",tab:"px-3 py-2 text-sm font-medium hover:text-purple-700 transition-colors duration-200",subtle:"text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm"}[i]} ${s}`.trim();return t?_.jsx("a",{onClick:l=>{l.preventDefault(),o.navigateTo({path:r})},href:r,className:a,children:e}):_.jsx(Ig,{to:r,className:a,children:e})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ua=globalThis,Td=ua.ShadowRoot&&(ua.ShadyCSS===void 0||ua.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pd=Symbol(),vp=new WeakMap;let Dg=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Pd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Td&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=vp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&vp.set(r,t))}return t}toString(){return this.cssText}};const W1=e=>new Dg(typeof e=="string"?e:e+"",void 0,Pd),j=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Dg(r,e,Pd)},G1=(e,t)=>{if(Td)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),i=ua.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)}},yp=Td?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return W1(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:K1,defineProperty:q1,getOwnPropertyDescriptor:Q1,getOwnPropertyNames:X1,getOwnPropertySymbols:Y1,getPrototypeOf:Z1}=Object,ds=globalThis,bp=ds.trustedTypes,J1=bp?bp.emptyScript:"",oc=ds.reactiveElementPolyfillSupport,Po=(e,t)=>e,Bi={toAttribute(e,t){switch(t){case Boolean:e=e?J1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Nd=(e,t)=>!K1(e,t),wp={attribute:!0,type:String,converter:Bi,reflect:!1,useDefault:!1,hasChanged:Nd};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ds.litPropertyMetadata??(ds.litPropertyMetadata=new WeakMap);let di=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=wp){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,r);i!==void 0&&q1(this.prototype,t,i)}}static getPropertyDescriptor(t,r,s){const{get:i,set:o}=Q1(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get:i,set(n){const a=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wp}static _$Ei(){if(this.hasOwnProperty(Po("elementProperties")))return;const t=Z1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Po("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Po("properties"))){const r=this.properties,s=[...X1(r),...Y1(r)];for(const i of s)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)r.unshift(yp(i))}else t!==void 0&&r.push(yp(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return G1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostConnected)==null?void 0:s.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:Bi).toAttribute(r,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,r){var o,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Bi;this._$Em=i;const u=l.fromAttribute(r,a.type);this[i]=u??((n=this._$Ej)==null?void 0:n.get(i))??u,this._$Em=null}}requestUpdate(t,r,s,i=!1,o){var n;if(t!==void 0){const a=this.constructor;if(i===!1&&(o=this[t]),s??(s=a.getPropertyOptions(t)),!((s.hasChanged??Nd)(o,r)||s.useDefault&&s.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??r??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};di.elementStyles=[],di.shadowRootOptions={mode:"open"},di[Po("elementProperties")]=new Map,di[Po("finalized")]=new Map,oc==null||oc({ReactiveElement:di}),(ds.reactiveElementVersions??(ds.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const No=globalThis,xp=e=>e,Wa=No.trustedTypes,_p=Wa?Wa.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vg="$lit$",Yr=`lit$${Math.random().toFixed(9).slice(2)}$`,Fg="?"+Yr,ew=`<${Fg}>`,Ks=document,on=()=>Ks.createComment(""),nn=e=>e===null||typeof e!="object"&&typeof e!="function",Ld=Array.isArray,tw=e=>Ld(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",nc=`[ 	
\f\r]`,co=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kp=/-->/g,Cp=/>/g,Es=RegExp(`>|${nc}(?:([^\\s"'>=/]+)(${nc}*=${nc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sp=/'/g,Ep=/"/g,Bg=/^(?:script|style|textarea|title)$/i,rw=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),A=rw(1),It=Symbol.for("lit-noChange"),ye=Symbol.for("lit-nothing"),$p=new WeakMap,Is=Ks.createTreeWalker(Ks,129);function jg(e,t){if(!Ld(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return _p!==void 0?_p.createHTML(t):t}const sw=(e,t)=>{const r=e.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=co;for(let a=0;a<r;a++){const l=e[a];let u,h,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===co?h[1]==="!--"?n=kp:h[1]!==void 0?n=Cp:h[2]!==void 0?(Bg.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=Es):h[3]!==void 0&&(n=Es):n===Es?h[0]===">"?(n=i??co,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,u=h[1],n=h[3]===void 0?Es:h[3]==='"'?Ep:Sp):n===Ep||n===Sp?n=Es:n===kp||n===Cp?n=co:(n=Es,i=void 0);const g=n===Es&&e[a+1].startsWith("/>")?" ":"";o+=n===co?l+ew:d>=0?(s.push(u),l.slice(0,d)+Vg+l.slice(d)+Yr+g):l+Yr+(d===-2?a:g)}return[jg(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class an{constructor({strings:t,_$litType$:r},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[u,h]=sw(t,r);if(this.el=an.createElement(u,s),Is.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Is.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Vg)){const p=h[n++],g=i.getAttribute(d).split(Yr),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:g,ctor:v[1]==="."?ow:v[1]==="?"?nw:v[1]==="@"?aw:vl}),i.removeAttribute(d)}else d.startsWith(Yr)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(Bg.test(i.tagName)){const d=i.textContent.split(Yr),p=d.length-1;if(p>0){i.textContent=Wa?Wa.emptyScript:"";for(let g=0;g<p;g++)i.append(d[g],on()),Is.nextNode(),l.push({type:2,index:++o});i.append(d[p],on())}}}else if(i.nodeType===8)if(i.data===Fg)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Yr,d+1))!==-1;)l.push({type:7,index:o}),d+=Yr.length-1}o++}}static createElement(t,r){const s=Ks.createElement("template");return s.innerHTML=t,s}}function ji(e,t,r=e,s){var n,a;if(t===It)return t;let i=s!==void 0?(n=r._$Co)==null?void 0:n[s]:r._$Cl;const o=nn(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,s)),s!==void 0?(r._$Co??(r._$Co=[]))[s]=i:r._$Cl=i),i!==void 0&&(t=ji(e,i._$AS(e,t.values),i,s)),t}class iw{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??Ks).importNode(r,!0);Is.currentNode=i;let o=Is.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let u;l.type===2?u=new vn(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new lw(o,this,t)),this._$AV.push(u),l=s[++a]}n!==(l==null?void 0:l.index)&&(o=Is.nextNode(),n++)}return Is.currentNode=Ks,i}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class vn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,s,i){this.type=2,this._$AH=ye,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ji(this,t,r),nn(t)?t===ye||t==null||t===""?(this._$AH!==ye&&this._$AR(),this._$AH=ye):t!==this._$AH&&t!==It&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):tw(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ye&&nn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ks.createTextNode(t)),this._$AH=t}$(t){var o;const{values:r,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=an.createElement(jg(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const n=new iw(i,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(t){let r=$p.get(t.strings);return r===void 0&&$p.set(t.strings,r=new an(t)),r}k(t){Ld(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,i=0;for(const o of t)i===r.length?r.push(s=new vn(this.O(on()),this.O(on()),this,this.options)):s=r[i],s._$AI(o),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);t!==this._$AB;){const i=xp(t).nextSibling;xp(t).remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}let vl=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,i,o){this.type=1,this._$AH=ye,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ye}_$AI(t,r=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=ji(this,t,r,0),n=!nn(t)||t!==this._$AH&&t!==It,n&&(this._$AH=t);else{const a=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=ji(this,a[s+l],r,l),u===It&&(u=this._$AH[l]),n||(n=!nn(u)||u!==this._$AH[l]),u===ye?t=ye:t!==ye&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}n&&!i&&this.j(t)}j(t){t===ye?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class ow extends vl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ye?void 0:t}}class nw extends vl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ye)}}class aw extends vl{constructor(t,r,s,i,o){super(t,r,s,i,o),this.type=5}_$AI(t,r=this){if((t=ji(this,t,r,0)??ye)===It)return;const s=this._$AH,i=t===ye&&s!==ye||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==ye&&(s===ye||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class lw{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){ji(this,t)}}const ac=No.litHtmlPolyfillSupport;ac==null||ac(an,vn),(No.litHtmlVersions??(No.litHtmlVersions=[])).push("3.3.3");const cw=(e,t,r)=>{const s=(r==null?void 0:r.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;s._$litPart$=i=new vn(t.insertBefore(on(),o),o,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs=globalThis;let Lo=class extends di{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=cw(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return It}};var lf;Lo._$litElement$=!0,Lo.finalized=!0,(lf=Vs.litElementHydrateSupport)==null||lf.call(Vs,{LitElement:Lo});const lc=Vs.litElementPolyfillSupport;lc==null||lc({LitElement:Lo});(Vs.litElementVersions??(Vs.litElementVersions=[])).push("4.2.2");var uw=j`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,G=j`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Ug=Object.defineProperty,dw=Object.defineProperties,hw=Object.getOwnPropertyDescriptor,pw=Object.getOwnPropertyDescriptors,zp=Object.getOwnPropertySymbols,fw=Object.prototype.hasOwnProperty,mw=Object.prototype.propertyIsEnumerable,cc=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Md=e=>{throw TypeError(e)},Ap=(e,t,r)=>t in e?Ug(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fr=(e,t)=>{for(var r in t||(t={}))fw.call(t,r)&&Ap(e,r,t[r]);if(zp)for(var r of zp(t))mw.call(t,r)&&Ap(e,r,t[r]);return e},yn=(e,t)=>dw(e,pw(t)),c=(e,t,r,s)=>{for(var i=s>1?void 0:s?hw(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Ug(t,r,i),i},Hg=(e,t,r)=>t.has(e)||Md("Cannot "+r),gw=(e,t,r)=>(Hg(e,t,"read from private field"),t.get(e)),vw=(e,t,r)=>t.has(e)?Md("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),yw=(e,t,r,s)=>(Hg(e,t,"write to private field"),t.set(e,r),r),bw=function(e,t){this[0]=e,this[1]=t},ww=e=>{var t=e[cc("asyncIterator")],r=!1,s,i={};return t==null?(t=e[cc("iterator")](),s=o=>i[o]=n=>t[o](n)):(t=t.call(e),s=o=>i[o]=n=>{if(r){if(r=!1,o==="throw")throw n;return n}return r=!0,{done:!1,value:new bw(new Promise(a=>{var l=t[o](n);l instanceof Object||Md("Object expected"),a(l)}),1)}}),i[cc("iterator")]=()=>i,s("next"),"throw"in t?s("throw"):i.throw=o=>{throw o},"return"in t&&s("return"),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xw={attribute:!0,type:String,converter:Bi,reflect:!1,hasChanged:Nd},_w=(e=xw,t,r)=>{const{kind:s,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),s==="accessor"){const{name:n}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,e,a),a}}}if(s==="setter"){const{name:n}=r;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e,!0,a)}}throw Error("Unsupported decorator location: "+s)};function f(e){return(t,r)=>typeof r=="object"?_w(e,t,r):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bn(e){return(t,r)=>{const s=typeof t=="function"?t:t[r];Object.assign(s,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wg=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(e,t){return(r,s,i)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(e))??null};return Wg(r,s,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function kw(e){return(t,r)=>Wg(t,r,{async get(){var s;return await this.updateComplete,((s=this.renderRoot)==null?void 0:s.querySelector(e))??null}})}var da,V=class extends Lo{constructor(){super(),vw(this,da,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,Fr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const s=customElements.get(e);if(!s){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",o=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in s&&s.version&&(o=" v"+s.version),!(i&&o&&i===o)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${o} has already been registered.`)}attributeChangedCallback(e,t,r){gw(this,da)||(this.constructor.elementProperties.forEach((s,i)=>{s.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),yw(this,da,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};da=new WeakMap;V.version="2.20.1";V.dependencies={};c([f()],V.prototype,"dir",2);c([f()],V.prototype,"lang",2);var yl=class extends V{render(){return A` <slot></slot> `}};yl.styles=[G,uw];/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cw=new Set(["children","localName","ref","style","className"]),Tp=new WeakMap,Pp=(e,t,r,s,i)=>{const o=i==null?void 0:i[t];o===void 0?(e[t]=r,r==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):r!==s&&((n,a,l)=>{let u=Tp.get(n);u===void 0&&Tp.set(n,u=new Map);let h=u.get(a);l!==void 0?h===void 0?(u.set(a,h={handleEvent:l}),n.addEventListener(a,h)):h.handleEvent=l:h!==void 0&&(u.delete(a),n.removeEventListener(a,h))})(e,o,r)},B=({react:e,tagName:t,elementClass:r,events:s,displayName:i})=>{const o=new Set(Object.keys(s??{})),n=e.forwardRef((a,l)=>{const u=e.useRef(new Map),h=e.useRef(null),d={},p={};for(const[g,v]of Object.entries(a))Cw.has(g)?d[g==="className"?"class":g]=v:o.has(g)||g in r.prototype?p[g]=v:d[g]=v;return e.useLayoutEffect(()=>{if(h.current===null)return;const g=new Map;for(const v in p)Pp(h.current,v,a[v],u.current.get(v),s),u.current.delete(v),g.set(v,a[v]);for(const[v,x]of u.current)Pp(h.current,v,void 0,x,s);u.current=g}),e.useLayoutEffect(()=>{var g;(g=h.current)==null||g.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(g=>{h.current=g,typeof l=="function"?l(g):l!==null&&(l.current=g)},[l])})});return n.displayName=i??r.name,n};var Sw="sl-visually-hidden";yl.define("sl-visually-hidden");B({tagName:Sw,elementClass:yl,react:F,events:{},displayName:"SlVisuallyHidden"});var Ew=j`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,$w=j`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,bu="";function Np(e){bu=e}function zw(e=""){if(!bu){const t=[...document.getElementsByTagName("script")],r=t.find(s=>s.hasAttribute("data-shoelace"));if(r)Np(r.getAttribute("data-shoelace"));else{const s=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let i="";s&&(i=s.getAttribute("src")),Np(i.split("/").slice(0,-1).join("/"))}}return bu.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Aw={name:"default",resolver:e=>zw(`assets/icons/${e}.svg`)},Tw=Aw,Lp={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Pw={name:"system",resolver:e=>e in Lp?`data:image/svg+xml,${encodeURIComponent(Lp[e])}`:""},Nw=Pw,Lw=[Tw,Nw],wu=[];function Mw(e){wu.push(e)}function Iw(e){wu=wu.filter(t=>t!==e)}function Mp(e){return Lw.find(t=>t.name===e)}var Rw=j`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function L(e,t){const r=Fr({waitUntilFirstUpdate:!1},t);return(s,i)=>{const{update:o}=s,n=Array.isArray(e)?e:[e];s.update=function(a){n.forEach(l=>{const u=l;if(a.has(u)){const h=a.get(u),d=this[u];h!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,d)}}),o.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ow=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,Gg=e=>e.strings===void 0,Dw={},Vw=(e,t=Dw)=>e._$AH=t;var uo=Symbol(),Hn=Symbol(),uc,dc=new Map,ue=class extends V{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let s;if(t!=null&&t.spriteSheet)return this.svg=A`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(s=await fetch(e,{mode:"cors"}),!s.ok)return s.status===410?uo:Hn}catch{return Hn}try{const i=document.createElement("div");i.innerHTML=await s.text();const o=i.firstElementChild;if(((r=o==null?void 0:o.tagName)==null?void 0:r.toLowerCase())!=="svg")return uo;uc||(uc=new DOMParser);const a=uc.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):uo}catch{return uo}}connectedCallback(){super.connectedCallback(),Mw(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Iw(this)}getIconSource(){const e=Mp(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),s=r?Mp(this.library):void 0;if(!t){this.svg=null;return}let i=dc.get(t);if(i||(i=this.resolveIcon(t,s),dc.set(t,i)),!this.initialRender)return;const o=await i;if(o===Hn&&dc.delete(t),t===this.getIconSource().url){if(Ow(o)){if(this.svg=o,s){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&n&&s.mutator(n)}return}switch(o){case Hn:case uo:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=s==null?void 0:s.mutator)==null||e.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ue.styles=[G,Rw];c([U()],ue.prototype,"svg",2);c([f({reflect:!0})],ue.prototype,"name",2);c([f()],ue.prototype,"src",2);c([f()],ue.prototype,"label",2);c([f({reflect:!0})],ue.prototype,"library",2);c([L("label")],ue.prototype,"handleLabelChange",1);c([L(["name","src","library"])],ue.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},wn=e=>(...t)=>({_$litDirective$:e,values:t});let xn=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=wn(class extends xn{constructor(e){var t;if(super(e),e.type!==gr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((s=this.nt)!=null&&s.has(o))&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const n=!!t[o];n===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return It}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kg=Symbol.for(""),Fw=e=>{if((e==null?void 0:e.r)===Kg)return e==null?void 0:e._$litStatic$},Ga=(e,...t)=>({_$litStatic$:t.reduce((r,s,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[i+1],e[0]),r:Kg}),Ip=new Map,Bw=e=>(t,...r)=>{const s=r.length;let i,o;const n=[],a=[];let l,u=0,h=!1;for(;u<s;){for(l=t[u];u<s&&(o=r[u],(i=Fw(o))!==void 0);)l+=i+t[++u],h=!0;u!==s&&a.push(o),n.push(l),u++}if(u===s&&n.push(t[s]),h){const d=n.join("$$lit$$");(t=Ip.get(d))===void 0&&(n.raw=n,Ip.set(d,t=n)),r=a}return e(t,...r)},Mo=Bw(A);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=e=>e??ye;var Be=class extends V{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ga`a`:Ga`button`;return Mo`
      <${t}
        part="base"
        class=${W({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${D(e?void 0:this.disabled)}
        type=${D(e?void 0:"button")}
        href=${D(e?this.href:void 0)}
        target=${D(e?this.target:void 0)}
        download=${D(e?this.download:void 0)}
        rel=${D(e&&this.target?"noreferrer noopener":void 0)}
        role=${D(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${D(this.name)}
          library=${D(this.library)}
          src=${D(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Be.styles=[G,$w];Be.dependencies={"sl-icon":ue};c([I(".icon-button")],Be.prototype,"button",2);c([U()],Be.prototype,"hasFocus",2);c([f()],Be.prototype,"name",2);c([f()],Be.prototype,"library",2);c([f()],Be.prototype,"src",2);c([f()],Be.prototype,"href",2);c([f()],Be.prototype,"target",2);c([f()],Be.prototype,"download",2);c([f()],Be.prototype,"label",2);c([f({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);const xu=new Set,Ci=new Map;let Sr,Id="ltr",Rd="en";const qg=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(qg){const e=new MutationObserver(Xg);Id=document.documentElement.dir||"ltr",Rd=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Qg(...e){e.map(t=>{const r=t.$code.toLowerCase();Ci.has(r)?Ci.set(r,Object.assign(Object.assign({},Ci.get(r)),t)):Ci.set(r,t),Sr||(Sr=t)}),Xg()}function Xg(){qg&&(Id=document.documentElement.dir||"ltr",Rd=document.documentElement.lang||navigator.language),[...xu.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let jw=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){xu.add(this.host)}hostDisconnected(){xu.delete(this.host)}dir(){return`${this.host.dir||Id}`.toLowerCase()}lang(){const t=`${this.host.lang||Rd}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(t),t}catch{return Sr?Sr.$code.toLowerCase():"en"}}getTranslationData(t){var r,s;let i;try{i=new Intl.Locale(t.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}const o=i.language.toLowerCase(),n=(s=(r=i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&s!==void 0?s:"",a=Ci.get(`${o}-${n}`),l=Ci.get(o);return{locale:i,language:o,region:n,primary:a,secondary:l}}exists(t,r){var s;const{primary:i,secondary:o}=this.getTranslationData((s=r.lang)!==null&&s!==void 0?s:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||o&&o[t]||r.includeFallback&&Sr&&Sr[t])}term(t,...r){const{primary:s,secondary:i}=this.getTranslationData(this.lang());let o;if(s&&s[t])o=s[t];else if(i&&i[t])o=i[t];else if(Sr&&Sr[t])o=Sr[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...r):o}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,r)}};var Yg={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Qg(Yg);var Uw=Yg,ie=class extends jw{};Qg(Uw);var Hw=0,Xt=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.attrId=++Hw,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,A`
      <div
        part="base"
        class=${W({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?A`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Xt.styles=[G,Ew];Xt.dependencies={"sl-icon-button":Be};c([I(".tab")],Xt.prototype,"tab",2);c([f({reflect:!0})],Xt.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],Xt.prototype,"active",2);c([f({type:Boolean,reflect:!0})],Xt.prototype,"closable",2);c([f({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);c([f({type:Number,reflect:!0})],Xt.prototype,"tabIndex",2);c([L("active")],Xt.prototype,"handleActiveChange",1);c([L("disabled")],Xt.prototype,"handleDisabledChange",1);var Ww="sl-tab";Xt.define("sl-tab");var Gw=B({tagName:Ww,elementClass:Xt,react:F,events:{onSlClose:"sl-close"},displayName:"SlTab"}),Kw=Gw,qw=j`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Qw=j`
  :host {
    display: contents;
  }
`,Ki=class extends V{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ki.styles=[G,Qw];c([f({type:Boolean,reflect:!0})],Ki.prototype,"disabled",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Ki.prototype,"handleDisabledChange",1);function Xw(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var _u=new Set;function Yw(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Zw(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Io(e){if(_u.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=Yw()+Zw();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),t<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Ro(e){_u.delete(e),_u.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function ku(e,t,r="vertical",s="smooth"){const i=Xw(e,t),o=i.top+t.scrollTop,n=i.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,u=t.scrollTop,h=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(n<a?t.scrollTo({left:n,behavior:s}):n+e.clientWidth>l&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:s})),(r==="vertical"||r==="both")&&(o<u?t.scrollTo({top:o,behavior:s}):o+e.clientHeight>h&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:s}))}var Ye=class extends V{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ie(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const r=t.filter(({target:s})=>{if(s===this)return!0;if(s.closest("sl-tab-group")!==this)return!1;const i=s.tagName.toLowerCase();return i==="sl-tab"||i==="sl-tab-panel"});if(r.length!==0){if(r.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),r.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(r.some(s=>s.attributeName==="active")){const i=r.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="sl-tab").map(o=>o.target).find(o=>o.active);i&&this.setActiveTab(i)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,s)=>{var i;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),s.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(a=>a.matches(":focus")),o=this.localize.dir()==="rtl";let n=null;if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){if(e.key==="Home")n=this.focusableTabs[0];else if(e.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===i);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===i);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&ku(n,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Fr({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var i;return s.active=s.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&ku(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,s=this.localize.dir()==="rtl",i=this.getAllTabs(),n=i.slice(0,i.indexOf(e)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let r=null;const s=t==="forward"?1:-1;let i=e+s;for(;e<this.tabs.length;){if(r=this.tabs[i]||null,r===null){t==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;i+=s}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return A`
      <div
        part="base"
        class=${W({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${W({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${W({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Ye.styles=[G,qw];Ye.dependencies={"sl-icon-button":Be,"sl-resize-observer":Ki};c([I(".tab-group")],Ye.prototype,"tabGroup",2);c([I(".tab-group__body")],Ye.prototype,"body",2);c([I(".tab-group__nav")],Ye.prototype,"nav",2);c([I(".tab-group__indicator")],Ye.prototype,"indicator",2);c([U()],Ye.prototype,"hasScrollControls",2);c([U()],Ye.prototype,"shouldHideScrollStartButton",2);c([U()],Ye.prototype,"shouldHideScrollEndButton",2);c([f()],Ye.prototype,"placement",2);c([f()],Ye.prototype,"activation",2);c([f({attribute:"no-scroll-controls",type:Boolean})],Ye.prototype,"noScrollControls",2);c([f({attribute:"fixed-scroll-controls",type:Boolean})],Ye.prototype,"fixedScrollControls",2);c([bn({passive:!0})],Ye.prototype,"updateScrollButtons",1);c([L("noScrollControls",{waitUntilFirstUpdate:!0})],Ye.prototype,"updateScrollControls",1);c([L("placement",{waitUntilFirstUpdate:!0})],Ye.prototype,"syncIndicator",1);var Jw="sl-tab-group";Ye.define("sl-tab-group");var ex=B({tagName:Jw,elementClass:Ye,react:F,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"}),tx=ex,rx=j`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,sx=0,qi=class extends V{constructor(){super(...arguments),this.attrId=++sx,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return A`
      <slot
        part="base"
        class=${W({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};qi.styles=[G,rx];c([f({reflect:!0})],qi.prototype,"name",2);c([f({type:Boolean,reflect:!0})],qi.prototype,"active",2);c([L("active")],qi.prototype,"handleActiveChange",1);var ix="sl-tab-panel";qi.define("sl-tab-panel");B({tagName:ix,elementClass:qi,react:F,events:{},displayName:"SlTabPanel"});var ox=j`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Br=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return A`
      <span
        part="base"
        class=${W({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?A`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Br.styles=[G,ox];Br.dependencies={"sl-icon-button":Be};c([f({reflect:!0})],Br.prototype,"variant",2);c([f({reflect:!0})],Br.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Br.prototype,"pill",2);c([f({type:Boolean})],Br.prototype,"removable",2);var nx="sl-tag";Br.define("sl-tag");B({tagName:nx,elementClass:Br,react:F,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var ax=j`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Qi=(e="value")=>(t,r)=>{const s=t.constructor,i=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(o,n,a){var l;const u=s.getPropertyOptions(e),h=typeof u.attribute=="string"?u.attribute:e;if(o===h){const d=u.converter||Bi,g=(typeof d=="function"?d:(l=d==null?void 0:d.fromAttribute)!=null?l:Bi.fromAttribute)(a,u.type);this[e]!==g&&(this[r]=g)}i.call(this,o,n,a)}},ti=j`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,ho=new WeakMap,po=new WeakMap,fo=new WeakMap,hc=new WeakSet,Wn=new WeakMap,jr=class{constructor(e,t){this.handleFormData=r=>{const s=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!n&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(a=>{r.formData.append(i,a.toString())}):r.formData.append(i,o.toString()))},this.handleFormSubmit=r=>{var s;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=ho.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Wn.set(this.host,[])},this.handleInteraction=r=>{const s=Wn.get(this.host);s.includes(r.type)||s.push(r.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const s of r)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const s of r)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Fr({form:r=>{const s=r.form;if(s){const o=r.getRootNode().querySelector(`#${s}`);if(o)return o}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var s;return(s=r.disabled)!=null?s:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,s)=>r.value=s,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Wn.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Wn.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ho.has(this.form)?ho.get(this.form).add(this.host):ho.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),po.has(this.form)||(po.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),fo.has(this.form)||(fo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=ho.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),po.has(this.form)&&(this.form.reportValidity=po.get(this.form),po.delete(this.form)),fo.has(this.form)&&(this.form.checkValidity=fo.get(this.form),fo.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?hc.add(e):hc.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&r.setAttribute(s,t.getAttribute(s))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!hc.has(t),s=!!t.required;t.toggleAttribute("data-required",s),t.toggleAttribute("data-optional",!s),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},bl=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),lx=Object.freeze(yn(Fr({},bl),{valid:!1,valueMissing:!0})),cx=Object.freeze(yn(Fr({},bl),{valid:!1,customError:!0})),yt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const s=r.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function ux(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(r+=s.textContent)}),r}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qs=wn(class extends xn{constructor(e){if(super(e),e.type!==gr.PROPERTY&&e.type!==gr.ATTRIBUTE&&e.type!==gr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Gg(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===It||t===ye)return t;const r=e.element,s=e.name;if(e.type===gr.PROPERTY){if(t===r[s])return It}else if(e.type===gr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(s))return It}else if(e.type===gr.ATTRIBUTE&&r.getAttribute(s)===t+"")return It;return Vw(e),t}});var se=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new yt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,s="preserve"){const i=t??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(e,i,o,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t;return A`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${W({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${D(this.name)}
              .value=${qs(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${D(this.placeholder)}
              rows=${D(this.rows)}
              minlength=${D(this.minlength)}
              maxlength=${D(this.maxlength)}
              autocapitalize=${D(this.autocapitalize)}
              autocorrect=${D(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${D(this.spellcheck)}
              enterkeyhint=${D(this.enterkeyhint)}
              inputmode=${D(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};se.styles=[G,ti,ax];c([I(".textarea__control")],se.prototype,"input",2);c([I(".textarea__size-adjuster")],se.prototype,"sizeAdjuster",2);c([U()],se.prototype,"hasFocus",2);c([f()],se.prototype,"title",2);c([f()],se.prototype,"name",2);c([f()],se.prototype,"value",2);c([f({reflect:!0})],se.prototype,"size",2);c([f({type:Boolean,reflect:!0})],se.prototype,"filled",2);c([f()],se.prototype,"label",2);c([f({attribute:"help-text"})],se.prototype,"helpText",2);c([f()],se.prototype,"placeholder",2);c([f({type:Number})],se.prototype,"rows",2);c([f()],se.prototype,"resize",2);c([f({type:Boolean,reflect:!0})],se.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],se.prototype,"readonly",2);c([f({reflect:!0})],se.prototype,"form",2);c([f({type:Boolean,reflect:!0})],se.prototype,"required",2);c([f({type:Number})],se.prototype,"minlength",2);c([f({type:Number})],se.prototype,"maxlength",2);c([f()],se.prototype,"autocapitalize",2);c([f()],se.prototype,"autocorrect",2);c([f()],se.prototype,"autocomplete",2);c([f({type:Boolean})],se.prototype,"autofocus",2);c([f()],se.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],se.prototype,"spellcheck",2);c([f()],se.prototype,"inputmode",2);c([Qi()],se.prototype,"defaultValue",2);c([L("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);c([L("rows",{waitUntilFirstUpdate:!0})],se.prototype,"handleRowsChange",1);c([L("value",{waitUntilFirstUpdate:!0})],se.prototype,"handleValueChange",1);var dx="sl-textarea";se.define("sl-textarea");var hx=B({tagName:dx,elementClass:se,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),Cu=hx,px=j`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,fx=j`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const ms=Math.min,Lr=Math.max,Ka=Math.round,Gn=Math.floor,Mr=e=>({x:e,y:e}),mx={left:"right",right:"left",bottom:"top",top:"bottom"};function Zg(e,t,r){return Lr(e,ms(t,r))}function Xi(e,t){return typeof e=="function"?e(t):e}function Qs(e){return e.split("-")[0]}function Yi(e){return e.split("-")[1]}function Jg(e){return e==="x"?"y":"x"}function Od(e){return e==="y"?"height":"width"}function Tr(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function Dd(e){return Jg(Tr(e))}function gx(e,t,r){r===void 0&&(r=!1);const s=Yi(e),i=Dd(e),o=Od(i);let n=i==="x"?s===(r?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=qa(n)),[n,qa(n)]}function vx(e){const t=qa(e);return[Su(e),t,Su(t)]}function Su(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const Rp=["left","right"],Op=["right","left"],yx=["top","bottom"],bx=["bottom","top"];function wx(e,t,r){switch(e){case"top":case"bottom":return r?t?Op:Rp:t?Rp:Op;case"left":case"right":return t?yx:bx;default:return[]}}function xx(e,t,r,s){const i=Yi(e);let o=wx(Qs(e),r==="start",s);return i&&(o=o.map(n=>n+"-"+i),t&&(o=o.concat(o.map(Su)))),o}function qa(e){const t=Qs(e);return mx[t]+e.slice(t.length)}function _x(e){var t,r,s,i;return{top:(t=e.top)!=null?t:0,right:(r=e.right)!=null?r:0,bottom:(s=e.bottom)!=null?s:0,left:(i=e.left)!=null?i:0}}function ev(e){return typeof e!="number"?_x(e):{top:e,right:e,bottom:e,left:e}}function Qa(e){const{x:t,y:r,width:s,height:i}=e;return{width:s,height:i,top:r,left:t,right:t+s,bottom:r+i,x:t,y:r}}function Dp(e,t,r){let{reference:s,floating:i}=e;const o=Tr(t),n=Dd(t),a=Od(n),l=Qs(t),u=o==="y",h=s.x+s.width/2-i.width/2,d=s.y+s.height/2-i.height/2,p=s[a]/2-i[a]/2;let g;switch(l){case"top":g={x:h,y:s.y-i.height};break;case"bottom":g={x:h,y:s.y+s.height};break;case"right":g={x:s.x+s.width,y:d};break;case"left":g={x:s.x-i.width,y:d};break;default:g={x:s.x,y:s.y}}const v=Yi(t);return v&&(g[n]+=p*(v==="end"?1:-1)*(r&&u?-1:1)),g}async function kx(e,t){var r;t===void 0&&(t={});const{x:s,y:i,platform:o,rects:n,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:g=0}=Xi(t,e),v=ev(g),C=a[p?d==="floating"?"reference":"floating":d],b=Qa(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(C)))==null||r?C:C.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:h,strategy:l})),m=d==="floating"?{x:s,y:i,width:n.floating.width,height:n.floating.height}:n.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),w=await(o.isElement==null?void 0:o.isElement(y))&&await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1},k=Qa(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:m,offsetParent:y,strategy:l}):m);return{top:(b.top-k.top+v.top)/w.y,bottom:(k.bottom-b.bottom+v.bottom)/w.y,left:(b.left-k.left+v.left)/w.x,right:(k.right-b.right+v.right)/w.x}}const Cx=50,Sx=async(e,t,r)=>{const{placement:s="bottom",strategy:i="absolute",middleware:o=[],platform:n}=r,a=n.detectOverflow?n:{...n,detectOverflow:kx},l=await(n.isRTL==null?void 0:n.isRTL(t));let u=await n.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Dp(u,s,l),p=s,g=0;const v={};for(let x=0;x<o.length;x++){const C=o[x];if(!C)continue;const{name:b,fn:m}=C,{x:y,y:w,data:k,reset:S}=await m({x:h,y:d,initialPlacement:s,placement:p,strategy:i,middlewareData:v,rects:u,platform:a,elements:{reference:e,floating:t}});h=y??h,d=w??d,v[b]={...v[b],...k},S&&g<Cx&&(g++,typeof S=="object"&&(S.placement&&(p=S.placement),S.rects&&(u=S.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:h,y:d}=Dp(u,p,l)),x=-1)}return{x:h,y:d,placement:p,strategy:i,middlewareData:v}},Ex=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:s,placement:i,rects:o,platform:n,elements:a,middlewareData:l}=t,{element:u,padding:h=0}=Xi(e,t)||{};if(u==null)return{};const d=ev(h),p={x:r,y:s},g=Dd(i),v=Od(g),x=await n.getDimensions(u),C=g==="y",b=C?"top":"left",m=C?"bottom":"right",y=C?"clientHeight":"clientWidth",w=o.reference[v]+o.reference[g]-p[g]-o.floating[v],k=p[g]-o.reference[g],S=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let $=S?S[y]:0;(!$||!await(n.isElement==null?void 0:n.isElement(S)))&&($=a.floating[y]||o.floating[v]);const T=w/2-k/2,M=$/2-x[v]/2-1,z=ms(d[b],M),ee=ms(d[m],M),he=$-x[v]-ee,le=$/2-x[v]/2+T,pe=Zg(z,le,he),R=!l.arrow&&Yi(i)!=null&&le!==pe&&o.reference[v]/2-(le<z?z:ee)-x[v]/2<0,te=R?le<z?le-z:le-he:0;return{[g]:p[g]+te,data:{[g]:pe,centerOffset:le-pe-te,...R&&{alignmentOffset:te}},reset:R}}}),$x=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,s;const{placement:i,middlewareData:o,rects:n,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...C}=Xi(e,t);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const b=Qs(i),m=Tr(a),y=Qs(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(u.floating)),k=p||(y||!x?[qa(a)]:vx(a)),S=v!=="none";!p&&S&&k.push(...xx(a,x,v,w));const $=[a,...k],T=await l.detectOverflow(t,C),M=[];let z=((s=o.flip)==null?void 0:s.overflows)||[];if(h&&M.push(T[b]),d){const pe=gx(i,n,w);M.push(T[pe[0]],T[pe[1]])}if(z=[...z,{placement:i,overflows:M}],!M.every(pe=>pe<=0)){var ee,he;const pe=(((ee=o.flip)==null?void 0:ee.index)||0)+1,R=$[pe];if(R&&(!(d==="alignment"?m!==Tr(R):!1)||z.every(N=>Tr(N.placement)===m?N.overflows[0]>0:!0)))return{data:{index:pe,overflows:z},reset:{placement:R}};let te=(he=z.filter(fe=>fe.overflows[0]<=0).sort((fe,N)=>fe.overflows[1]-N.overflows[1])[0])==null?void 0:he.placement;if(!te)switch(g){case"bestFit":{var le;const fe=(le=z.filter(N=>{if(S){const K=Tr(N.placement);return K===m||K==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(K=>K>0).reduce((K,Q)=>K+Q,0)]).sort((N,K)=>N[1]-K[1])[0])==null?void 0:le[0];fe&&(te=fe);break}case"initialPlacement":te=a;break}if(i!==te)return{reset:{placement:te}}}return{}}}},zx=new Set(["left","top"]);async function Ax(e,t){const{placement:r,platform:s,elements:i}=e,o=await(s.isRTL==null?void 0:s.isRTL(i.floating)),n=Qs(r),a=Yi(r),l=Tr(r)==="y",u=zx.has(n)?-1:1,h=o&&l?-1:1,d=Xi(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),l?{x:g*h,y:p*u}:{x:p*u,y:g*h}}const Tx=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,s;const{x:i,y:o,placement:n,middlewareData:a}=t,l=await Ax(t,e);return n===((r=a.offset)==null?void 0:r.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:n}}}}},Px=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:s,placement:i,platform:o}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:m=>{let{x:y,y:w}=m;return{x:y,y:w}}},...u}=Xi(e,t),h={x:r,y:s},d=await o.detectOverflow(t,u),p=Tr(i),g=Jg(p);let v=h[g],x=h[p];const C=(m,y)=>Zg(y+d[m==="y"?"top":"left"],y,y-d[m==="y"?"bottom":"right"]);n&&(v=C(g,v)),a&&(x=C(p,x));const b=l.fn({...t,[g]:v,[p]:x});return{...b,data:{x:b.x-r,y:b.y-s,enabled:{[g]:n,[p]:a}}}}}},Nx=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:s,platform:i,elements:o}=t,{apply:n=()=>{},...a}=Xi(e,t),l=await i.detectOverflow(t,a),u=Qs(r),h=Yi(r),d=Tr(r)==="y",{width:p,height:g}=s.floating;let v,x;u==="top"||u==="bottom"?(v=u,x=h===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(x=u,v=h==="end"?"top":"bottom");const C=g-l.top-l.bottom,b=p-l.left-l.right,m=ms(g-l[v],C),y=ms(p-l[x],b),w=t.middlewareData.shift,k=!w;let S=m,$=y;w!=null&&w.enabled.x&&($=b),w!=null&&w.enabled.y&&(S=C),k&&!h&&(d?$=p-2*Lr(l.left,l.right):S=g-2*Lr(l.top,l.bottom)),await n({...t,availableWidth:$,availableHeight:S});const T=await i.getDimensions(o.floating);return p!==T.width||g!==T.height?{reset:{rects:!0}}:{}}}};function wl(){return typeof window<"u"}function Zi(e){return tv(e)?(e.nodeName||"").toLowerCase():"#document"}function St(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ur(e){var t;return(t=(tv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function tv(e){return wl()?e instanceof Node||e instanceof St(e).Node:!1}function xr(e){return wl()?e instanceof Element||e instanceof St(e).Element:!1}function xs(e){return wl()?e instanceof HTMLElement||e instanceof St(e).HTMLElement:!1}function Vp(e){return!wl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof St(e).ShadowRoot}function xl(e){const{overflow:t,overflowX:r,overflowY:s,display:i}=_r(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+r)&&i!=="inline"&&i!=="contents"}function Lx(e){return/^(table|td|th)$/.test(Zi(e))}function _l(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const Mx=/transform|translate|scale|rotate|perspective|filter/,Ix=/paint|layout|strict|content/,$s=e=>!!e&&e!=="none";let pc;function kl(e){const t=xr(e)?_r(e):e;return $s(t.transform)||$s(t.translate)||$s(t.scale)||$s(t.rotate)||$s(t.perspective)||!Vd()&&($s(t.backdropFilter)||$s(t.filter))||Mx.test(t.willChange||"")||Ix.test(t.contain||"")}function Rx(e){let t=Xs(e);for(;xs(t)&&!ln(t);){if(kl(t))return t;if(_l(t))return null;t=Xs(t)}return null}function Vd(){return pc==null&&(pc=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),pc}function ln(e){return/^(html|body|#document)$/.test(Zi(e))}function _r(e){return St(e).getComputedStyle(e)}function Cl(e){return xr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Xs(e){if(Zi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Vp(e)&&e.host||Ur(e);return Vp(t)?t.host:t}function rv(e){const t=Xs(e);return ln(t)?(e.ownerDocument||e).body:xs(t)&&xl(t)?t:rv(t)}function cn(e,t,r){var s;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=rv(e),o=i===((s=e.ownerDocument)==null?void 0:s.body),n=St(i);if(o){const a=Eu(n);return t.concat(n,n.visualViewport||[],xl(i)?i:[],a&&r?cn(a):[])}else return t.concat(i,cn(i,[],r))}function Eu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function sv(e){const t=_r(e);let r=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const i=xs(e),o=i?e.offsetWidth:r,n=i?e.offsetHeight:s,a=Ka(r)!==o||Ka(s)!==n;return a&&(r=o,s=n),{width:r,height:s,$:a}}function Fd(e){return xr(e)?e:e.contextElement}function Pi(e){const t=Fd(e);if(!xs(t))return Mr(1);const r=t.getBoundingClientRect(),{width:s,height:i,$:o}=sv(t);let n=(o?Ka(r.width):r.width)/s,a=(o?Ka(r.height):r.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const Ox=Mr(0);function iv(e){const t=St(e);return!Vd()||!t.visualViewport?Ox:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Dx(e,t,r){return t===void 0&&(t=!1),!!r&&t&&r===St(e)}function Ys(e,t,r,s){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),o=Fd(e);let n=Mr(1);t&&(s?xr(s)&&(n=Pi(s)):n=Pi(e));const a=Dx(o,r,s)?iv(o):Mr(0);let l=(i.left+a.x)/n.x,u=(i.top+a.y)/n.y,h=i.width/n.x,d=i.height/n.y;if(o&&s){const p=St(o),g=xr(s)?St(s):s;let v=p,x=Eu(v);for(;x&&g!==v;){const C=Pi(x),b=x.getBoundingClientRect(),m=_r(x),y=b.left+(x.clientLeft+parseFloat(m.paddingLeft))*C.x,w=b.top+(x.clientTop+parseFloat(m.paddingTop))*C.y;l*=C.x,u*=C.y,h*=C.x,d*=C.y,l+=y,u+=w,v=St(x),x=Eu(v)}}return Qa({width:h,height:d,x:l,y:u})}function Sl(e,t){const r=Cl(e).scrollLeft;return t?t.left+r:Ys(Ur(e)).left+r}function ov(e,t){const r=e.getBoundingClientRect(),s=r.left+t.scrollLeft-Sl(e,r),i=r.top+t.scrollTop;return{x:s,y:i}}function Vx(e){let{elements:t,rect:r,offsetParent:s,strategy:i}=e;const o=i==="fixed",n=Ur(s),a=t?_l(t.floating):!1;if(s===n||a&&o)return r;let l={scrollLeft:0,scrollTop:0},u=Mr(1);const h=Mr(0),d=xs(s);if((d||!o)&&((Zi(s)!=="body"||xl(n))&&(l=Cl(s)),d)){const g=Ys(s);u=Pi(s),h.x=g.x+s.clientLeft,h.y=g.y+s.clientTop}const p=n&&!d&&!o?ov(n,l):Mr(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+h.x+p.x,y:r.y*u.y-l.scrollTop*u.y+h.y+p.y}}function Fx(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Bx(e){const t=Cl(e),r=e.ownerDocument.body,s=Lr(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=Lr(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-t.scrollLeft+Sl(e);const n=-t.scrollTop;return _r(r).direction==="rtl"&&(o+=Lr(e.clientWidth,r.clientWidth)-s),{width:s,height:i,x:o,y:n}}const jx=25;function Ux(e,t,r){r===void 0&&(r="viewport");const s=r==="layoutViewport",i=St(e),o=Ur(e),n=i.visualViewport;let a=o.clientWidth,l=o.clientHeight,u=0,h=0;if(n){const p=!Vd()||t==="fixed";s?p||(u=-n.offsetLeft,h=-n.offsetTop):(a=n.width,l=n.height,p&&(u=n.offsetLeft,h=n.offsetTop))}if(Sl(o)<=0){const p=o.ownerDocument,g=p.body,v=getComputedStyle(g),x=p.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,C=Math.abs(o.clientWidth-g.clientWidth-x),b=getComputedStyle(o).scrollbarGutter==="stable both-edges"?C/2:C;b<=jx&&(a-=b)}return{width:a,height:l,x:u,y:h}}function Hx(e,t){const r=Ys(e,!0,t==="fixed"),s=r.top+e.clientTop,i=r.left+e.clientLeft,o=Pi(e),n=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,u=s*o.y;return{width:n,height:a,x:l,y:u}}function Fp(e,t,r){let s;if(t==="viewport"||t==="layoutViewport")s=Ux(e,r,t);else if(t==="document")s=Bx(Ur(e));else if(xr(t))s=Hx(t,r);else{const i=iv(e);s={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Qa(s)}function Wx(e,t){const r=t.get(e);if(r)return r;let s=cn(e,[],!1).filter(a=>xr(a)&&Zi(a)!=="body"),i=null;const o=_r(e).position==="fixed";let n=o?Xs(e):e;for(;xr(n)&&!ln(n);){const a=_r(n),l=kl(n),u=i?i.position:o?"fixed":"";!l&&(u==="fixed"||u==="absolute"&&a.position==="static")?s=s.filter(d=>d!==n):i=a,n=Xs(n)}return t.set(e,s),s}function Gx(e){let{element:t,boundary:r,rootBoundary:s,strategy:i}=e;const n=[...r==="clippingAncestors"?_l(t)?[]:Wx(t,this._c):[].concat(r),s],a=Fp(t,n[0],i);let l=a.top,u=a.right,h=a.bottom,d=a.left;for(let p=1;p<n.length;p++){const g=Fp(t,n[p],i);l=Lr(g.top,l),u=ms(g.right,u),h=ms(g.bottom,h),d=Lr(g.left,d)}return{width:u-d,height:h-l,x:d,y:l}}function Kx(e){const{width:t,height:r}=sv(e);return{width:t,height:r}}function qx(e,t,r){const s=xs(t),i=Ur(t),o=r==="fixed",n=Ys(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Mr(0);if((s||!o)&&((Zi(t)!=="body"||xl(i))&&(a=Cl(t)),s)){const p=Ys(t,!0,o,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}!s&&i&&(l.x=Sl(i));const u=i&&!s&&!o?ov(i,a):Mr(0),h=n.left+a.scrollLeft-l.x-u.x,d=n.top+a.scrollTop-l.y-u.y;return{x:h,y:d,width:n.width,height:n.height}}function fc(e){return _r(e).position==="static"}function Bp(e,t){if(!xs(e)||_r(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Ur(e)===r&&(r=r.ownerDocument.body),r}function nv(e,t){const r=St(e);if(_l(e))return r;if(!xs(e)){let i=Xs(e);for(;i&&!ln(i);){if(xr(i)&&!fc(i))return i;i=Xs(i)}return r}let s=Bp(e,t);for(;s&&Lx(s)&&fc(s);)s=Bp(s,t);return s&&ln(s)&&fc(s)&&!kl(s)?r:s||Rx(e)||r}const Qx=async function(e){const t=this.getOffsetParent||nv,r=this.getDimensions,s=await r(e.floating);return{reference:qx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function Xx(e){return _r(e).direction==="rtl"}const ha={convertOffsetParentRelativeRectToViewportRelativeRect:Vx,getDocumentElement:Ur,getClippingRect:Gx,getOffsetParent:nv,getElementRects:Qx,getClientRects:Fx,getDimensions:Kx,getScale:Pi,isElement:xr,isRTL:Xx};function av(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Yx(e,t,r){let s=null,i;const o=Ur(e);function n(){var h;clearTimeout(i),(h=s)==null||h.disconnect(),s=null}function a(h,d){h===void 0&&(h=!1),d===void 0&&(d=1),n();const p=e.getBoundingClientRect(),{left:g,top:v,width:x,height:C}=p;if(h||t(),!x||!C)return;const b=Gn(v),m=Gn(o.clientWidth-(g+x)),y=Gn(o.clientHeight-(v+C)),w=Gn(g),S={rootMargin:-b+"px "+-m+"px "+-y+"px "+-w+"px",threshold:Lr(0,ms(1,d))||1};let $=!0;function T(M){const z=M[0].intersectionRatio;if(!av(p,e.getBoundingClientRect()))return a();if(z!==d){if(!$)return a();z?a(!1,z):i=setTimeout(()=>{a(!1,1e-7)},1e3)}$=!1}try{s=new IntersectionObserver(T,{...S,root:o.ownerDocument})}catch{s=new IntersectionObserver(T,S)}s.observe(e)}const l=St(e),u=()=>a(r);return l.addEventListener("resize",u),a(!0),()=>{l.removeEventListener("resize",u),n()}}function Zx(e,t,r,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,u=Fd(e),h=i||o?[...u?cn(u):[],...t?cn(t):[]]:[];h.forEach(b=>{i&&b.addEventListener("scroll",r),o&&b.addEventListener("resize",r)});const d=u&&a?Yx(u,r,o):null;let p=-1,g=null;n&&(g=new ResizeObserver(b=>{let[m]=b;m&&m.target===u&&g&&t&&(g.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var y;(y=g)==null||y.observe(t)})),r()}),u&&!l&&g.observe(u),t&&g.observe(t));let v,x=l?Ys(e):null;l&&C();function C(){const b=Ys(e);x&&!av(x,b)&&r(),x=b,v=requestAnimationFrame(C)}return r(),()=>{var b;h.forEach(m=>{i&&m.removeEventListener("scroll",r),o&&m.removeEventListener("resize",r)}),d==null||d(),(b=g)==null||b.disconnect(),g=null,l&&cancelAnimationFrame(v)}}const Jx=Tx,e_=Px,t_=$x,jp=Nx,r_=Ex,s_=(e,t,r)=>{const s=new Map,i=r??{},o={...ha,...i.platform,_c:s};return Sx(e,t,{...i,platform:o})};function i_(e){return o_(e)}function mc(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function o_(e){for(let t=e;t;t=mc(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=mc(e);t;t=mc(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||kl(r)||t.tagName==="BODY"))return t}return null}function n_(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var oe=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let s=0,i=0,o=0,n=0,a=0,l=0,u=0,h=0;r?e.top<t.top?(s=e.left,i=e.bottom,o=e.right,n=e.bottom,a=t.left,l=t.top,u=t.right,h=t.top):(s=t.left,i=t.bottom,o=t.right,n=t.bottom,a=e.left,l=e.top,u=e.right,h=e.top):e.left<t.left?(s=e.right,i=e.top,o=t.left,n=t.top,a=e.right,l=e.bottom,u=t.left,h=t.bottom):(s=t.right,i=t.top,o=e.left,n=e.top,a=t.right,l=t.bottom,u=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||n_(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Zx(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Jx({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(jp({apply:({rects:r})=>{const s=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(t_({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(e_({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(jp({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(r_({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>ha.getOffsetParent(r,i_):ha.getOffsetParent;s_(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:yn(Fr({},ha),{getOffsetParent:t})}).then(({x:r,y:s,middlewareData:i,placement:o})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${r}px`,top:`${s}px`}),this.arrow){const l=i.arrow.x,u=i.arrow.y;let h="",d="",p="",g="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?v:"",g=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":v,g=n?v:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof l=="number"?`${l}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:p,left:g,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return A`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${W({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${W({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?A`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};oe.styles=[G,fx];c([I(".popup")],oe.prototype,"popup",2);c([I(".popup__arrow")],oe.prototype,"arrowEl",2);c([f()],oe.prototype,"anchor",2);c([f({type:Boolean,reflect:!0})],oe.prototype,"active",2);c([f({reflect:!0})],oe.prototype,"placement",2);c([f({reflect:!0})],oe.prototype,"strategy",2);c([f({type:Number})],oe.prototype,"distance",2);c([f({type:Number})],oe.prototype,"skidding",2);c([f({type:Boolean})],oe.prototype,"arrow",2);c([f({attribute:"arrow-placement"})],oe.prototype,"arrowPlacement",2);c([f({attribute:"arrow-padding",type:Number})],oe.prototype,"arrowPadding",2);c([f({type:Boolean})],oe.prototype,"flip",2);c([f({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],oe.prototype,"flipFallbackPlacements",2);c([f({attribute:"flip-fallback-strategy"})],oe.prototype,"flipFallbackStrategy",2);c([f({type:Object})],oe.prototype,"flipBoundary",2);c([f({attribute:"flip-padding",type:Number})],oe.prototype,"flipPadding",2);c([f({type:Boolean})],oe.prototype,"shift",2);c([f({type:Object})],oe.prototype,"shiftBoundary",2);c([f({attribute:"shift-padding",type:Number})],oe.prototype,"shiftPadding",2);c([f({attribute:"auto-size"})],oe.prototype,"autoSize",2);c([f()],oe.prototype,"sync",2);c([f({type:Object})],oe.prototype,"autoSizeBoundary",2);c([f({attribute:"auto-size-padding",type:Number})],oe.prototype,"autoSizePadding",2);c([f({attribute:"hover-bridge",type:Boolean})],oe.prototype,"hoverBridge",2);var lv=new Map,a_=new WeakMap;function l_(e){return e??{keyframes:[],options:{duration:0}}}function Up(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ae(e,t){lv.set(e,l_(t))}function be(e,t,r){const s=a_.get(e);if(s!=null&&s[t])return Up(s[t],r.dir);const i=lv.get(t);return i?Up(i,r.dir):{keyframes:[],options:{duration:0}}}function mt(e,t){return new Promise(r=>{function s(i){i.target===e&&(e.removeEventListener(t,s),r())}e.addEventListener(t,s)})}function Pe(e,t,r){return new Promise(s=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,yn(Fr({},r),{duration:$u()?0:r.duration}));i.addEventListener("cancel",s,{once:!0}),i.addEventListener("finish",s,{once:!0})})}function Hp(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function $u(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function De(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}function Xa(e,t){return e.map(r=>yn(Fr({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var Ge=class extends V{constructor(){super(),this.localize=new ie(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Hp(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Hp(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await De(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:s}=be(this,"tooltip.show",{dir:this.localize.dir()});await Pe(this.popup.popup,r,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await De(this.body);const{keyframes:r,options:s}=be(this,"tooltip.hide",{dir:this.localize.dir()});await Pe(this.popup.popup,r,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}render(){return A`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${W({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Ge.styles=[G,px];Ge.dependencies={"sl-popup":oe};c([I("slot:not([name])")],Ge.prototype,"defaultSlot",2);c([I(".tooltip__body")],Ge.prototype,"body",2);c([I("sl-popup")],Ge.prototype,"popup",2);c([f()],Ge.prototype,"content",2);c([f()],Ge.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);c([f({type:Number})],Ge.prototype,"distance",2);c([f({type:Boolean,reflect:!0})],Ge.prototype,"open",2);c([f({type:Number})],Ge.prototype,"skidding",2);c([f()],Ge.prototype,"trigger",2);c([f({type:Boolean})],Ge.prototype,"hoist",2);c([L("open",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleOpenChange",1);c([L(["content","distance","hoist","placement","skidding"])],Ge.prototype,"handleOptionsChange",1);c([L("disabled")],Ge.prototype,"handleDisabledChange",1);ae("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});ae("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var c_="sl-tooltip";Ge.define("sl-tooltip");B({tagName:c_,elementClass:Ge,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var u_=j`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,d_=j`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,je=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new yt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return A`
      <div
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${W({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${D(this.value)}
            .indeterminate=${qs(this.indeterminate)}
            .checked=${qs(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?A`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?A`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};je.styles=[G,ti,d_];je.dependencies={"sl-icon":ue};c([I('input[type="checkbox"]')],je.prototype,"input",2);c([U()],je.prototype,"hasFocus",2);c([f()],je.prototype,"title",2);c([f()],je.prototype,"name",2);c([f()],je.prototype,"value",2);c([f({reflect:!0})],je.prototype,"size",2);c([f({type:Boolean,reflect:!0})],je.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],je.prototype,"checked",2);c([f({type:Boolean,reflect:!0})],je.prototype,"indeterminate",2);c([Qi("checked")],je.prototype,"defaultChecked",2);c([f({reflect:!0})],je.prototype,"form",2);c([f({type:Boolean,reflect:!0})],je.prototype,"required",2);c([f({attribute:"help-text"})],je.prototype,"helpText",2);c([L("disabled",{waitUntilFirstUpdate:!0})],je.prototype,"handleDisabledChange",1);c([L(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],je.prototype,"handleStateChange",1);var h_=j`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Ji=class extends V{constructor(){super(...arguments),this.localize=new ie(this)}render(){return A`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ji.styles=[G,h_];/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wp(e,t,r){return e?t(e):r==null?void 0:r(e)}var Le=class zu extends V{constructor(){super(...arguments),this.localize=new ie(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await De(this.childrenContainer);const{keyframes:t,options:r}=be(this,"tree-item.collapse",{dir:this.localize.dir()});await Pe(this.childrenContainer,Xa(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&zu.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await De(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=be(this,"tree-item.expand",{dir:this.localize.dir()});await Pe(this.childrenContainer,Xa(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>zu.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return A`
      <div
        part="base"
        class="${W({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${W({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${Wp(this.loading,()=>A` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Wp(this.selectable,()=>A`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${qs(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Le.styles=[G,u_];Le.dependencies={"sl-checkbox":je,"sl-icon":ue,"sl-spinner":Ji};c([U()],Le.prototype,"indeterminate",2);c([U()],Le.prototype,"isLeaf",2);c([U()],Le.prototype,"loading",2);c([U()],Le.prototype,"selectable",2);c([f({type:Boolean,reflect:!0})],Le.prototype,"expanded",2);c([f({type:Boolean,reflect:!0})],Le.prototype,"selected",2);c([f({type:Boolean,reflect:!0})],Le.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Le.prototype,"lazy",2);c([I("slot:not([name])")],Le.prototype,"defaultSlot",2);c([I("slot[name=children]")],Le.prototype,"childrenSlot",2);c([I(".tree-item__item")],Le.prototype,"itemElement",2);c([I(".tree-item__children")],Le.prototype,"childrenContainer",2);c([I(".tree-item__expand-button slot")],Le.prototype,"expandButtonSlot",2);c([L("loading",{waitUntilFirstUpdate:!0})],Le.prototype,"handleLoadingChange",1);c([L("disabled")],Le.prototype,"handleDisabledChange",1);c([L("selected")],Le.prototype,"handleSelectedChange",1);c([L("expanded",{waitUntilFirstUpdate:!0})],Le.prototype,"handleExpandedChange",1);c([L("expanded",{waitUntilFirstUpdate:!0})],Le.prototype,"handleExpandAnimation",1);c([L("lazy",{waitUntilFirstUpdate:!0})],Le.prototype,"handleLazyChange",1);var Ni=Le;ae("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});ae("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var p_="sl-tree-item";Ni.define("sl-tree-item");B({tagName:p_,elementClass:Ni,react:F,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var f_=j`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Re(e,t,r){const s=i=>Object.is(i,-0)?0:i;return e<t?s(t):e>r?s(r):s(e)}function Gp(e,t=!1){function r(o){const n=o.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(u=>u.selected),l=n.every(u=>!u.selected&&!u.indeterminate);o.selected=a,o.indeterminate=!a&&!l}}function s(o){const n=o.parentElement;Ni.isTreeItem(n)&&(r(n),s(n))}function i(o){for(const n of o.getChildrenItems())n.selected=t?o.selected||n.selected:!n.disabled&&o.selected,i(n);t&&r(o)}i(e),s(e)}var _s=class extends V{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new ie(this),this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`),s=this.getExpandButtonIcon(t);s&&(r===null?e.append(s):r.hasAttribute("data-default")&&r.replaceWith(s))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(Ni.isTreeItem),s=[...t.removedNodes].filter(Ni.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ni.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const s=r.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${e}-icon`,s}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Gp(e);else if(this.selection==="single"||e.isLeaf){const s=this.getAllTreeItems();for(const i of s)i.selected=i===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(s=>!t.includes(s)))&&Promise.all(r.map(s=>s.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(i=>{var o;return["input","textarea"].includes((o=i==null?void 0:i.tagName)==null?void 0:o.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const i=t.findIndex(l=>l.matches(":focus")),o=t[i],n=l=>{const u=t[Re(l,0,t.length-1)];this.focusItem(u)},a=l=>{o.expanded=l};e.key==="ArrowDown"?n(i+1):e.key==="ArrowUp"?n(i-1):r&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?n(i+1):a(!0):r&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?n(i-1):a(!1):e.key==="Home"?n(0):e.key==="End"?n(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),s=e.composedPath().some(i=>{var o;return(o=i==null?void 0:i.classList)==null?void 0:o.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(s?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>Gp(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var s;if(r.disabled)return!1;const i=(s=r.parentElement)==null?void 0:s.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||t.has(i))&&t.add(r),!t.has(r)})}render(){return A`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};_s.styles=[G,f_];c([I("slot:not([name])")],_s.prototype,"defaultSlot",2);c([I("slot[name=expand-icon]")],_s.prototype,"expandedIconSlot",2);c([I("slot[name=collapse-icon]")],_s.prototype,"collapsedIconSlot",2);c([f()],_s.prototype,"selection",2);c([L("selection")],_s.prototype,"handleSelectionChange",1);var m_="sl-tree";_s.define("sl-tree");B({tagName:m_,elementClass:_s,react:F,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var g_=j`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cv="important",v_=" !"+cv,bt=wn(class extends xn{constructor(e){var t;if(super(e),e.type!==gr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const s=e[r];return s==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?r.removeProperty(s):r[s]=null);for(const s in t){const i=t[s];if(i!=null){this.ft.add(s);const o=typeof i=="string"&&i.endsWith(v_);s.includes("-")||o?r.setProperty(s,o?i.slice(0,-11):i,o?cv:""):r[s]=i}}return It}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Au=class extends xn{constructor(t){if(super(t),this.it=ye,t.type!==gr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ye||t==null)return this._t=void 0,this.it=t;if(t===It)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Au.directiveName="unsafeHTML",Au.resultType=1;const pa=wn(Au);var at=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:s,width:i}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((s-e)/i*this.max,this.precision):this.roundToPrecision((e-r)/i*this.max,this.precision);return Re(o,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const i=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-i),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const i=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+i),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,A`
      <div
        part="base"
        class=${W({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(s=>r>s&&r<s+1?A`
                <span
                  class=${W({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===s+1})}
                  role="presentation"
                >
                  <div
                    style=${bt({clipPath:e?`inset(0 ${(r-s)*100}% 0 0)`:`inset(0 0 0 ${(r-s)*100}%)`})}
                  >
                    ${pa(this.getSymbol(s+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${bt({clipPath:e?`inset(0 0 0 ${100-(r-s)*100}%)`:`inset(0 ${100-(r-s)*100}% 0 0)`})}
                  >
                    ${pa(this.getSymbol(s+1))}
                  </div>
                </span>
              `:A`
              <span
                class=${W({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===s+1,"rating__symbol--active":r>=s+1})}
                role="presentation"
              >
                ${pa(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};at.styles=[G,g_];at.dependencies={"sl-icon":ue};c([I(".rating")],at.prototype,"rating",2);c([U()],at.prototype,"hoverValue",2);c([U()],at.prototype,"isHovering",2);c([f()],at.prototype,"label",2);c([f({type:Number})],at.prototype,"value",2);c([f({type:Number})],at.prototype,"max",2);c([f({type:Number})],at.prototype,"precision",2);c([f({type:Boolean,reflect:!0})],at.prototype,"readonly",2);c([f({type:Boolean,reflect:!0})],at.prototype,"disabled",2);c([f()],at.prototype,"getSymbol",2);c([bn({passive:!0})],at.prototype,"handleTouchMove",1);c([L("hoverValue")],at.prototype,"handleHoverValueChange",1);c([L("isHovering")],at.prototype,"handleIsHoveringChange",1);var y_="sl-rating";at.define("sl-rating");B({tagName:y_,elementClass:at,react:F,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"});var b_=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],ks=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:s,value:i}=b_.find(o=>Math.abs(r)<o.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(r/i),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;s==="minute"?o=Kn("second"):s==="hour"?o=Kn("minute"):s==="day"?o=Kn("hour"):o=Kn("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return A` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};c([U()],ks.prototype,"isoTime",2);c([U()],ks.prototype,"relativeTime",2);c([f()],ks.prototype,"date",2);c([f()],ks.prototype,"format",2);c([f()],ks.prototype,"numeric",2);c([f({type:Boolean})],ks.prototype,"sync",2);function Kn(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}var w_="sl-relative-time";ks.define("sl-relative-time");B({tagName:w_,elementClass:ks,react:F,events:{},displayName:"SlRelativeTime"});var x_="sl-resize-observer";Ki.define("sl-resize-observer");B({tagName:x_,elementClass:Ki,react:F,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var __=j`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,Z=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new yt(this,"help-text","label"),this.localize=new ie(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>A`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,s=t.closest("sl-icon-button")!==null;if(!(r||s)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),o=i.indexOf(this.currentOption);let n=Math.max(0,o);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(n=o+1,n>i.length-1&&(n=0)):e.key==="ArrowUp"?(n=o-1,n<0&&(n=i.length-1)):e.key==="Home"?n=0:e.key==="End"&&(n=i.length-1),this.setCurrentOption(i[n])}if(e.key&&e.key.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const o of i)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),s=this.value;r&&!r.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(t)?t:[t],s=[];e.forEach(i=>s.push(i.value)),this.setSelectedOptions(e.filter(i=>r.includes(i.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(s=>s.selected=!1),r.length&&r.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r;const s=this.getAllOptions();this.selectedOptions=s.filter(o=>o.selected);const i=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=(e=o==null?void 0:o.value)!=null?e:"",this.displayLabel=(r=(t=o==null?void 0:o.getTextLabel)==null?void 0:t.call(o))!=null?r:""}this.valueHasChanged=i,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return A`<div @sl-remove=${s=>this.handleTagRemove(s,e)}>
          ${typeof r=="string"?pa(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return A`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return A``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),e==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await De(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=be(this,"select.show",{dir:this.localize.dir()});await Pe(this.popup.popup,e,t),this.currentOption&&ku(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await De(this);const{keyframes:e,options:t}=be(this,"select.hide",{dir:this.localize.dir()});await Pe(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,mt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,mt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return A`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${W({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?A`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?A`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Z.styles=[G,ti,__];Z.dependencies={"sl-icon":ue,"sl-popup":oe,"sl-tag":Br};c([I(".select")],Z.prototype,"popup",2);c([I(".select__combobox")],Z.prototype,"combobox",2);c([I(".select__display-input")],Z.prototype,"displayInput",2);c([I(".select__value-input")],Z.prototype,"valueInput",2);c([I(".select__listbox")],Z.prototype,"listbox",2);c([U()],Z.prototype,"hasFocus",2);c([U()],Z.prototype,"displayLabel",2);c([U()],Z.prototype,"currentOption",2);c([U()],Z.prototype,"selectedOptions",2);c([U()],Z.prototype,"valueHasChanged",2);c([f()],Z.prototype,"name",2);c([U()],Z.prototype,"value",1);c([f({attribute:"value"})],Z.prototype,"defaultValue",2);c([f({reflect:!0})],Z.prototype,"size",2);c([f()],Z.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"multiple",2);c([f({attribute:"max-options-visible",type:Number})],Z.prototype,"maxOptionsVisible",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);c([f({type:Boolean})],Z.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"open",2);c([f({type:Boolean})],Z.prototype,"hoist",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"pill",2);c([f()],Z.prototype,"label",2);c([f({reflect:!0})],Z.prototype,"placement",2);c([f({attribute:"help-text"})],Z.prototype,"helpText",2);c([f({reflect:!0})],Z.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"required",2);c([f()],Z.prototype,"getTag",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);c([L(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);c([L("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);ae("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ae("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var k_="sl-select";Z.define("sl-select");var C_=B({tagName:k_,elementClass:Z,react:F,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"}),Kp=C_,S_="sl-spinner";Ji.define("sl-spinner");var E_=B({tagName:S_,elementClass:Ji,react:F,events:{},displayName:"SlSpinner"}),Fs=E_,$_=j`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,El=class extends V{constructor(){super(...arguments),this.effect="none"}render(){return A`
      <div
        part="base"
        class=${W({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};El.styles=[G,$_];c([f()],El.prototype,"effect",2);var z_="sl-skeleton";El.define("sl-skeleton");B({tagName:z_,elementClass:El,react:F,events:{},displayName:"SlSkeleton"});var A_=j`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,lt=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new yt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return A`
      <div
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${W({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${D(this.value)}
            .checked=${qs(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};lt.styles=[G,ti,A_];c([I('input[type="checkbox"]')],lt.prototype,"input",2);c([U()],lt.prototype,"hasFocus",2);c([f()],lt.prototype,"title",2);c([f()],lt.prototype,"name",2);c([f()],lt.prototype,"value",2);c([f({reflect:!0})],lt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],lt.prototype,"checked",2);c([Qi("checked")],lt.prototype,"defaultChecked",2);c([f({reflect:!0})],lt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],lt.prototype,"required",2);c([f({attribute:"help-text"})],lt.prototype,"helpText",2);c([L("checked",{waitUntilFirstUpdate:!0})],lt.prototype,"handleCheckedChange",1);c([L("disabled",{waitUntilFirstUpdate:!0})],lt.prototype,"handleDisabledChange",1);var T_="sl-switch";lt.define("sl-switch");B({tagName:T_,elementClass:lt,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var P_=j`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Oo(e,t){function r(i){const o=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,a=o.left+n.scrollX,l=o.top+n.scrollY,u=i.pageX-a,h=i.pageY-l;t!=null&&t.onMove&&t.onMove(u,h)}function s(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",s),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",s),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var qp=()=>null,Et=class extends V{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new ie(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=qp,this.snapThreshold=12}toSnapFunction(e){const t=e.split(" ");return({pos:r,size:s,snapThreshold:i,isRtl:o,vertical:n})=>{let a=r,l=Number.POSITIVE_INFINITY;return t.forEach(u=>{let h;if(u.startsWith("repeat(")){const p=e.substring(7,e.length-1),g=p.endsWith("%"),v=Number.parseFloat(p),x=g?s*(v/100):v;h=Math.round((o&&!n?s-r:r)/x)*x}else u.endsWith("%")?h=s*(Number.parseFloat(u)/100):h=Number.parseFloat(u);o&&!n&&(h=s-h);const d=Math.abs(r-h);d<=i&&d<l&&(a=h,l=d)}),a}}set snap(e){this.snapValue=e??"",e?this.snapFunction=typeof e=="string"?this.toSnapFunction(e):e:this.snapFunction=qp}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Oo(this,{onMove:(r,s)=>{var i;let o=this.vertical?s:r;this.primary==="end"&&(o=this.size-o),o=(i=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))!=null?i:o,this.position=Re(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const s=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=s})}this.position=Re(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${s} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${s}`:r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${s}`:this.style[e]=`${s} var(--divider-width) ${i}`,this.style[t]="",A`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${D(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Et.styles=[G,P_];c([I(".divider")],Et.prototype,"divider",2);c([f({type:Number,reflect:!0})],Et.prototype,"position",2);c([f({attribute:"position-in-pixels",type:Number})],Et.prototype,"positionInPixels",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"vertical",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);c([f()],Et.prototype,"primary",2);c([f({reflect:!0})],Et.prototype,"snap",1);c([f({type:Number,attribute:"snap-threshold"})],Et.prototype,"snapThreshold",2);c([L("position")],Et.prototype,"handlePositionChange",1);c([L("positionInPixels")],Et.prototype,"handlePositionInPixelsChange",1);c([L("vertical")],Et.prototype,"handleVerticalChange",1);var N_="sl-split-panel";Et.define("sl-split-panel");B({tagName:N_,elementClass:Et,react:F,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var L_=j`
  :host {
    display: contents;
  }
`,ur=class extends V{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return A` <slot></slot> `}};ur.styles=[G,L_];c([f({reflect:!0})],ur.prototype,"attr",2);c([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],ur.prototype,"attrOldValue",2);c([f({attribute:"char-data",type:Boolean,reflect:!0})],ur.prototype,"charData",2);c([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],ur.prototype,"charDataOldValue",2);c([f({attribute:"child-list",type:Boolean,reflect:!0})],ur.prototype,"childList",2);c([f({type:Boolean,reflect:!0})],ur.prototype,"disabled",2);c([L("disabled")],ur.prototype,"handleDisabledChange",1);c([L("attr",{waitUntilFirstUpdate:!0}),L("attr-old-value",{waitUntilFirstUpdate:!0}),L("char-data",{waitUntilFirstUpdate:!0}),L("char-data-old-value",{waitUntilFirstUpdate:!0}),L("childList",{waitUntilFirstUpdate:!0})],ur.prototype,"handleChange",1);var M_="sl-mutation-observer";ur.define("sl-mutation-observer");B({tagName:M_,elementClass:ur,react:F,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});var I_=j`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,eo=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return A`
      <div
        part="base"
        class=${W({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${D(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${bt({width:`${this.value}%`})}>
          ${this.indeterminate?"":A` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};eo.styles=[G,I_];c([f({type:Number,reflect:!0})],eo.prototype,"value",2);c([f({type:Boolean,reflect:!0})],eo.prototype,"indeterminate",2);c([f()],eo.prototype,"label",2);var R_="sl-progress-bar";eo.define("sl-progress-bar");B({tagName:R_,elementClass:eo,react:F,events:{},displayName:"SlProgressBar"});var O_=j`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,ri=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,s=r-this.value/100*r;this.indicatorOffset=`${s}px`}}render(){return A`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};ri.styles=[G,O_];c([I(".progress-ring__indicator")],ri.prototype,"indicator",2);c([U()],ri.prototype,"indicatorOffset",2);c([f({type:Number,reflect:!0})],ri.prototype,"value",2);c([f()],ri.prototype,"label",2);var D_="sl-progress-ring";ri.define("sl-progress-ring");B({tagName:D_,elementClass:ri,react:F,events:{},displayName:"SlProgressRing"});var V_=j`
  :host {
    display: inline-block;
  }
`;let uv=null;class dv{}dv.render=function(e,t){uv(e,t)};self.QrCreator=dv;(function(e){function t(a,l,u,h){var d={},p=e(u,l);p.u(a),p.J(),h=h||0;var g=p.h(),v=p.h()+2*h;return d.text=a,d.level=l,d.version=u,d.O=v,d.a=function(x,C){return x-=h,C-=h,0>x||x>=g||0>C||C>=g?!1:p.a(x,C)},d}function r(a,l,u,h,d,p,g,v,x,C){function b(m,y,w,k,S,$,T){m?(a.lineTo(y+$,w+T),a.arcTo(y,w,k,S,p)):a.lineTo(y,w)}g?a.moveTo(l+p,u):a.moveTo(l,u),b(v,h,u,h,d,-p,0),b(x,h,d,l,d,0,-p),b(C,l,d,l,u,p,0),b(g,l,u,h,u,0,p)}function s(a,l,u,h,d,p,g,v,x,C){function b(m,y,w,k){a.moveTo(m+w,y),a.lineTo(m,y),a.lineTo(m,y+k),a.arcTo(m,y,m+w,y,p)}g&&b(l,u,p,p),v&&b(h,u,-p,p),x&&b(h,d,-p,-p),C&&b(l,d,p,-p)}function i(a,l){var u=l.fill;if(typeof u=="string")a.fillStyle=u;else{var h=u.type,d=u.colorStops;if(u=u.position.map(g=>Math.round(g*l.size)),h==="linear-gradient")var p=a.createLinearGradient.apply(a,u);else if(h==="radial-gradient")p=a.createRadialGradient.apply(a,u);else throw Error("Unsupported fill");d.forEach(([g,v])=>{p.addColorStop(g,v)}),a.fillStyle=p}}function o(a,l){e:{var u=l.text,h=l.v,d=l.N,p=l.K,g=l.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var v=t(u,h,d,g);break e}catch{}v=void 0}if(!v)return null;for(u=a.getContext("2d"),l.background&&(u.fillStyle=l.background,u.fillRect(l.left,l.top,l.size,l.size)),h=v.O,p=l.size/h,u.beginPath(),g=0;g<h;g+=1)for(d=0;d<h;d+=1){var x=u,C=l.left+d*p,b=l.top+g*p,m=g,y=d,w=v.a,k=C+p,S=b+p,$=m-1,T=m+1,M=y-1,z=y+1,ee=Math.floor(Math.min(.5,Math.max(0,l.R))*p),he=w(m,y),le=w($,M),pe=w($,y);$=w($,z);var R=w(m,z);z=w(T,z),y=w(T,y),T=w(T,M),m=w(m,M),C=Math.round(C),b=Math.round(b),k=Math.round(k),S=Math.round(S),he?r(x,C,b,k,S,ee,!pe&&!m,!pe&&!R,!y&&!R,!y&&!m):s(x,C,b,k,S,ee,pe&&m&&le,pe&&R&&$,y&&R&&z,y&&m&&T)}return i(u,l),u.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};uv=function(a,l){var u={};Object.assign(u,n,a),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,l instanceof HTMLCanvasElement?((l.width!==u.size||l.height!==u.size)&&(l.width=u.size,l.height=u.size),l.getContext("2d").clearRect(0,0,l.width,l.height),o(l,u)):(a=document.createElement("canvas"),a.width=u.size,a.height=u.size,u=o(a,u),l.appendChild(u))}})(function(){function e(l){var u=r.s(l);return{S:function(){return 4},b:function(){return u.length},write:function(h){for(var d=0;d<u.length;d+=1)h.put(u[d],8)}}}function t(){var l=[],u=0,h={B:function(){return l},c:function(d){return(l[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var g=0;g<p;g+=1)h.m((d>>>p-g-1&1)==1)},f:function(){return u},m:function(d){var p=Math.floor(u/8);l.length<=p&&l.push(0),d&&(l[p]|=128>>>u%8),u+=1}};return h}function r(l,u){function h(m,y){for(var w=-1;7>=w;w+=1)if(!(-1>=m+w||v<=m+w))for(var k=-1;7>=k;k+=1)-1>=y+k||v<=y+k||(g[m+w][y+k]=0<=w&&6>=w&&(k==0||k==6)||0<=k&&6>=k&&(w==0||w==6)||2<=w&&4>=w&&2<=k&&4>=k)}function d(m,y){for(var w=v=4*l+17,k=Array(w),S=0;S<w;S+=1){k[S]=Array(w);for(var $=0;$<w;$+=1)k[S][$]=null}for(g=k,h(0,0),h(v-7,0),h(0,v-7),w=o.G(l),k=0;k<w.length;k+=1)for(S=0;S<w.length;S+=1){$=w[k];var T=w[S];if(g[$][T]==null)for(var M=-2;2>=M;M+=1)for(var z=-2;2>=z;z+=1)g[$+M][T+z]=M==-2||M==2||z==-2||z==2||M==0&&z==0}for(w=8;w<v-8;w+=1)g[w][6]==null&&(g[w][6]=w%2==0);for(w=8;w<v-8;w+=1)g[6][w]==null&&(g[6][w]=w%2==0);for(w=o.w(p<<3|y),k=0;15>k;k+=1)S=!m&&(w>>k&1)==1,g[6>k?k:8>k?k+1:v-15+k][8]=S,g[8][8>k?v-k-1:9>k?15-k:14-k]=S;if(g[v-8][8]=!m,7<=l){for(w=o.A(l),k=0;18>k;k+=1)S=!m&&(w>>k&1)==1,g[Math.floor(k/3)][k%3+v-8-3]=S;for(k=0;18>k;k+=1)S=!m&&(w>>k&1)==1,g[k%3+v-8-3][Math.floor(k/3)]=S}if(x==null){for(m=a.I(l,p),w=t(),k=0;k<C.length;k+=1)S=C[k],w.put(4,4),w.put(S.b(),o.f(4,l)),S.write(w);for(k=S=0;k<m.length;k+=1)S+=m[k].j;if(w.f()>8*S)throw Error("code length overflow. ("+w.f()+">"+8*S+")");for(w.f()+4<=8*S&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*S)&&(w.put(236,8),!(w.f()>=8*S));)w.put(17,8);var ee=0;for(S=k=0,$=Array(m.length),T=Array(m.length),M=0;M<m.length;M+=1){var he=m[M].j,le=m[M].o-he;for(k=Math.max(k,he),S=Math.max(S,le),$[M]=Array(he),z=0;z<$[M].length;z+=1)$[M][z]=255&w.B()[z+ee];for(ee+=he,z=o.C(le),he=s($[M],z.b()-1).l(z),T[M]=Array(z.b()-1),z=0;z<T[M].length;z+=1)le=z+he.b()-T[M].length,T[M][z]=0<=le?he.c(le):0}for(z=w=0;z<m.length;z+=1)w+=m[z].o;for(w=Array(w),z=ee=0;z<k;z+=1)for(M=0;M<m.length;M+=1)z<$[M].length&&(w[ee]=$[M][z],ee+=1);for(z=0;z<S;z+=1)for(M=0;M<m.length;M+=1)z<T[M].length&&(w[ee]=T[M][z],ee+=1);x=w}for(m=x,w=-1,k=v-1,S=7,$=0,y=o.F(y),T=v-1;0<T;T-=2)for(T==6&&--T;;){for(M=0;2>M;M+=1)g[k][T-M]==null&&(z=!1,$<m.length&&(z=(m[$]>>>S&1)==1),y(k,T-M)&&(z=!z),g[k][T-M]=z,--S,S==-1&&($+=1,S=7));if(k+=w,0>k||v<=k){k-=w,w=-w;break}}}var p=i[u],g=null,v=0,x=null,C=[],b={u:function(m){m=e(m),C.push(m),x=null},a:function(m,y){if(0>m||v<=m||0>y||v<=y)throw Error(m+","+y);return g[m][y]},h:function(){return v},J:function(){for(var m=0,y=0,w=0;8>w;w+=1){d(!0,w);var k=o.D(b);(w==0||m>k)&&(m=k,y=w)}d(!1,y)}};return b}function s(l,u){if(typeof l.length>"u")throw Error(l.length+"/"+u);var h=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var g=Array(l.length-p+u),v=0;v<l.length-p;v+=1)g[v]=l[v+p];return g}(),d={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var g=Array(d.b()+p.b()-1),v=0;v<d.b();v+=1)for(var x=0;x<p.b();x+=1)g[v+x]^=n.i(n.g(d.c(v))+n.g(p.c(x)));return s(g,0)},l:function(p){if(0>d.b()-p.b())return d;for(var g=n.g(d.c(0))-n.g(p.c(0)),v=Array(d.b()),x=0;x<d.b();x+=1)v[x]=d.c(x);for(x=0;x<p.b();x+=1)v[x]^=n.i(n.g(p.c(x))+g);return s(v,0).l(p)}};return d}r.s=function(l){for(var u=[],h=0;h<l.length;h++){var d=l.charCodeAt(h);128>d?u.push(d):2048>d?u.push(192|d>>6,128|d&63):55296>d||57344<=d?u.push(224|d>>12,128|d>>6&63,128|d&63):(h++,d=65536+((d&1023)<<10|l.charCodeAt(h)&1023),u.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return u};var i={L:1,M:0,Q:3,H:2},o=function(){function l(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(d){for(var p=d<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return d<<12|p},G:function(d){return u[d-1]},F:function(d){switch(d){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=s([1],0),g=0;g<d;g+=1)p=p.multiply(s([1,n.i(g)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),g=0,v=0;v<p;v+=1)for(var x=0;x<p;x+=1){for(var C=0,b=d.a(v,x),m=-1;1>=m;m+=1)if(!(0>v+m||p<=v+m))for(var y=-1;1>=y;y+=1)0>x+y||p<=x+y||(m!=0||y!=0)&&b==d.a(v+m,x+y)&&(C+=1);5<C&&(g+=3+C-5)}for(v=0;v<p-1;v+=1)for(x=0;x<p-1;x+=1)C=0,d.a(v,x)&&(C+=1),d.a(v+1,x)&&(C+=1),d.a(v,x+1)&&(C+=1),d.a(v+1,x+1)&&(C+=1),(C==0||C==4)&&(g+=3);for(v=0;v<p;v+=1)for(x=0;x<p-6;x+=1)d.a(v,x)&&!d.a(v,x+1)&&d.a(v,x+2)&&d.a(v,x+3)&&d.a(v,x+4)&&!d.a(v,x+5)&&d.a(v,x+6)&&(g+=40);for(x=0;x<p;x+=1)for(v=0;v<p-6;v+=1)d.a(v,x)&&!d.a(v+1,x)&&d.a(v+2,x)&&d.a(v+3,x)&&d.a(v+4,x)&&!d.a(v+5,x)&&d.a(v+6,x)&&(g+=40);for(x=C=0;x<p;x+=1)for(v=0;v<p;v+=1)d.a(v,x)&&(C+=1);return g+=Math.abs(100*C/p/p-50)/5*10}};return h}(),n=function(){for(var l=Array(256),u=Array(256),h=0;8>h;h+=1)l[h]=1<<h;for(h=8;256>h;h+=1)l[h]=l[h-4]^l[h-5]^l[h-6]^l[h-8];for(h=0;255>h;h+=1)u[l[h]]=h;return{g:function(d){if(1>d)throw Error("glog("+d+")");return u[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return l[d]}}}(),a=function(){function l(d,p){switch(p){case i.L:return u[4*(d-1)];case i.M:return u[4*(d-1)+1];case i.Q:return u[4*(d-1)+2];case i.H:return u[4*(d-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(d,p){var g=l(d,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=g.length/3,p=[];for(var v=0;v<d;v+=1)for(var x=g[3*v],C=g[3*v+1],b=g[3*v+2],m=0;m<x;m+=1){var y=b,w={};w.o=C,w.j=y,p.push(w)}return p}};return h}();return r}());const F_=QrCreator;var Yt=class extends V{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&F_.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return A`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${bt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Yt.styles=[G,V_];c([I("canvas")],Yt.prototype,"canvas",2);c([f()],Yt.prototype,"value",2);c([f()],Yt.prototype,"label",2);c([f({type:Number})],Yt.prototype,"size",2);c([f()],Yt.prototype,"fill",2);c([f()],Yt.prototype,"background",2);c([f({type:Number})],Yt.prototype,"radius",2);c([f({attribute:"error-correction"})],Yt.prototype,"errorCorrection",2);c([L(["background","errorCorrection","fill","radius","size","value"])],Yt.prototype,"generate",1);var B_="sl-qr-code";Yt.define("sl-qr-code");B({tagName:B_,elementClass:Yt,react:F,events:{},displayName:"SlQrCode"});var hv=j`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,j_=j`
  ${hv}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Zt=class extends V{constructor(){super(...arguments),this.hasSlotController=new yt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Mo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${W({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${D(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Zt.styles=[G,j_];c([I(".button")],Zt.prototype,"input",2);c([I(".hidden-input")],Zt.prototype,"hiddenInput",2);c([U()],Zt.prototype,"hasFocus",2);c([f({type:Boolean,reflect:!0})],Zt.prototype,"checked",2);c([f()],Zt.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Zt.prototype,"disabled",2);c([f({reflect:!0})],Zt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Zt.prototype,"pill",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Zt.prototype,"handleDisabledChange",1);var U_="sl-radio-button";Zt.define("sl-radio-button");B({tagName:U_,elementClass:Zt,react:F,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var H_=j`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,dr=class extends V{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return A`
      <span
        part="base"
        class=${W({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?A` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};dr.styles=[G,H_];dr.dependencies={"sl-icon":ue};c([U()],dr.prototype,"checked",2);c([U()],dr.prototype,"hasFocus",2);c([f()],dr.prototype,"value",2);c([f({reflect:!0})],dr.prototype,"size",2);c([f({type:Boolean,reflect:!0})],dr.prototype,"disabled",2);c([L("checked")],dr.prototype,"handleCheckedChange",1);c([L("disabled",{waitUntilFirstUpdate:!0})],dr.prototype,"handleDisabledChange",1);var W_="sl-radio";dr.define("sl-radio");B({tagName:W_,elementClass:dr,react:F,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var G_=j`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,we=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this),this.hasSlotController=new yt(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",o=t*e;if(i){const n=`${t-o}px + ${e} * ${s}`;this.output.style.translate=`calc((${n} - ${r/2}px - ${s} / 2))`}else{const n=`${o}px - ${e} * ${s}`;this.output.style.translate=`calc(${n} - ${r/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t;return A`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${W({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${D(this.name)}
              ?disabled=${this.disabled}
              min=${D(this.min)}
              max=${D(this.max)}
              step=${D(this.step)}
              .value=${qs(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?A`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};we.styles=[G,ti,G_];c([I(".range__control")],we.prototype,"input",2);c([I(".range__tooltip")],we.prototype,"output",2);c([U()],we.prototype,"hasFocus",2);c([U()],we.prototype,"hasTooltip",2);c([f()],we.prototype,"title",2);c([f()],we.prototype,"name",2);c([f({type:Number})],we.prototype,"value",2);c([f()],we.prototype,"label",2);c([f({attribute:"help-text"})],we.prototype,"helpText",2);c([f({type:Boolean,reflect:!0})],we.prototype,"disabled",2);c([f({type:Number})],we.prototype,"min",2);c([f({type:Number})],we.prototype,"max",2);c([f({type:Number})],we.prototype,"step",2);c([f()],we.prototype,"tooltip",2);c([f({attribute:!1})],we.prototype,"tooltipFormatter",2);c([f({reflect:!0})],we.prototype,"form",2);c([Qi()],we.prototype,"defaultValue",2);c([bn({passive:!0})],we.prototype,"handleThumbDragStart",1);c([L("value",{waitUntilFirstUpdate:!0})],we.prototype,"handleValueChange",1);c([L("disabled",{waitUntilFirstUpdate:!0})],we.prototype,"handleDisabledChange",1);c([L("hasTooltip",{waitUntilFirstUpdate:!0})],we.prototype,"syncRange",1);var K_="sl-range";we.define("sl-range");B({tagName:K_,elementClass:we,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var q_=j`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Q_=j`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Cs=class extends V{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=mo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=mo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=mo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=mo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),s=mo(t);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",r===0),s.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),s.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return A`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Cs.styles=[G,Q_];c([I("slot")],Cs.prototype,"defaultSlot",2);c([U()],Cs.prototype,"disableRole",2);c([f()],Cs.prototype,"label",2);function mo(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var Ze=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this),this.hasSlotController=new yt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?cx:e?lx:bl}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),s=this.value;!t||t.disabled||(this.value=t.value,r.forEach(i=>i.checked=i===t),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(a=>!a.disabled),s=(t=r.find(a=>a.checked))!=null?t:r[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let n=r.indexOf(s)+i;n<0&&(n=r.length-1),n>r.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=r[n].value,r[n].checked=!0,this.hasButtonGroup?r[n].shadowRoot.querySelector("button").focus():(r[n].setAttribute("tabindex","0"),r[n].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=r.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(s=>s.checked))if(this.hasButtonGroup){const s=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");s&&s.setAttribute("tabindex","0")}else r[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const s=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),r=t.find(o=>o.checked),s=t.find(o=>!o.disabled),i=r||s;i&&i.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,i=A`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return A`
      <fieldset
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?A`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Ze.styles=[G,ti,q_];Ze.dependencies={"sl-button-group":Cs};c([I("slot:not([name])")],Ze.prototype,"defaultSlot",2);c([I(".radio-group__validation-input")],Ze.prototype,"validationInput",2);c([U()],Ze.prototype,"hasButtonGroup",2);c([U()],Ze.prototype,"errorMessage",2);c([U()],Ze.prototype,"defaultValue",2);c([f()],Ze.prototype,"label",2);c([f({attribute:"help-text"})],Ze.prototype,"helpText",2);c([f()],Ze.prototype,"name",2);c([f({reflect:!0})],Ze.prototype,"value",2);c([f({reflect:!0})],Ze.prototype,"size",2);c([f({reflect:!0})],Ze.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Ze.prototype,"required",2);c([L("size",{waitUntilFirstUpdate:!0})],Ze.prototype,"handleSizeChange",1);c([L("value")],Ze.prototype,"handleValueChange",1);var X_="sl-radio-group";Ze.define("sl-radio-group");B({tagName:X_,elementClass:Ze,react:F,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var Y_=j`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Ss=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),Oo(this.base,{onMove:s=>{this.position=parseFloat(Re(s/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const s=e.shiftKey?10:1;let i=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(i-=s),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(i+=s),e.key==="Home"&&(i=0),e.key==="End"&&(i=100),i=Re(i,0,100),this.position=i}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return A`
      <div
        part="base"
        id="image-comparer"
        class=${W({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${bt({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${bt({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Ss.styles=[G,Y_];Ss.scopedElement={"sl-icon":ue};c([I(".image-comparer")],Ss.prototype,"base",2);c([I(".image-comparer__handle")],Ss.prototype,"handle",2);c([f({type:Number,reflect:!0})],Ss.prototype,"position",2);c([L("position",{waitUntilFirstUpdate:!0})],Ss.prototype,"handlePositionChange",1);var Z_="sl-image-comparer";Ss.define("sl-image-comparer");B({tagName:Z_,elementClass:Ss,react:F,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var J_=j`
  :host {
    display: block;
  }
`,gc=new Map;function ek(e,t="cors"){const r=gc.get(e);if(r!==void 0)return Promise.resolve(r);const s=fetch(e,{mode:t}).then(async i=>{const o={ok:i.ok,status:i.status,html:await i.text()};return gc.set(e,o),o});return gc.set(e,s),s}var si=class extends V{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await ek(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return A`<slot></slot>`}};si.styles=[G,J_];c([f()],si.prototype,"src",2);c([f()],si.prototype,"mode",2);c([f({attribute:"allow-scripts",type:Boolean})],si.prototype,"allowScripts",2);c([L("src")],si.prototype,"handleSrcChange",1);var tk="sl-include";si.define("sl-include");B({tagName:tk,elementClass:si,react:F,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var rk=j`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,$l=class extends V{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath(),s=r.find(a=>{var l;return t.includes(((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!s||r.find(a=>{var l;return((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const n=s;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let s=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?s++:e.key==="ArrowUp"?s--:e.key==="Home"?s=0:e.key==="End"&&(s=t.length-1),s<0&&(s=t.length-1),s>t.length-1&&(s=0),this.setCurrentItem(t[s]),t[s].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return A`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};$l.styles=[G,rk];c([I("slot")],$l.prototype,"defaultSlot",2);var sk="sl-menu";$l.define("sl-menu");B({tagName:sk,elementClass:$l,react:F,events:{onSlSelect:"sl-select"},displayName:"SlMenu"});var ik=j`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,q=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new yt(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,s="preserve"){const i=t??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(e,i,o,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return A`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${W({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${D(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${D(this.placeholder)}
              minlength=${D(this.minlength)}
              maxlength=${D(this.maxlength)}
              min=${D(this.min)}
              max=${D(this.max)}
              step=${D(this.step)}
              .value=${qs(this.value)}
              autocapitalize=${D(this.autocapitalize)}
              autocomplete=${D(this.autocomplete)}
              autocorrect=${D(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${D(this.pattern)}
              enterkeyhint=${D(this.enterkeyhint)}
              inputmode=${D(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?A`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?A`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?A`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:A`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};q.styles=[G,ti,ik];q.dependencies={"sl-icon":ue};c([I(".input__control")],q.prototype,"input",2);c([U()],q.prototype,"hasFocus",2);c([f()],q.prototype,"title",2);c([f({reflect:!0})],q.prototype,"type",2);c([f()],q.prototype,"name",2);c([f()],q.prototype,"value",2);c([Qi()],q.prototype,"defaultValue",2);c([f({reflect:!0})],q.prototype,"size",2);c([f({type:Boolean,reflect:!0})],q.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],q.prototype,"pill",2);c([f()],q.prototype,"label",2);c([f({attribute:"help-text"})],q.prototype,"helpText",2);c([f({type:Boolean})],q.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],q.prototype,"disabled",2);c([f()],q.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],q.prototype,"readonly",2);c([f({attribute:"password-toggle",type:Boolean})],q.prototype,"passwordToggle",2);c([f({attribute:"password-visible",type:Boolean})],q.prototype,"passwordVisible",2);c([f({attribute:"no-spin-buttons",type:Boolean})],q.prototype,"noSpinButtons",2);c([f({reflect:!0})],q.prototype,"form",2);c([f({type:Boolean,reflect:!0})],q.prototype,"required",2);c([f()],q.prototype,"pattern",2);c([f({type:Number})],q.prototype,"minlength",2);c([f({type:Number})],q.prototype,"maxlength",2);c([f()],q.prototype,"min",2);c([f()],q.prototype,"max",2);c([f()],q.prototype,"step",2);c([f()],q.prototype,"autocapitalize",2);c([f()],q.prototype,"autocorrect",2);c([f()],q.prototype,"autocomplete",2);c([f({type:Boolean})],q.prototype,"autofocus",2);c([f()],q.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],q.prototype,"spellcheck",2);c([f()],q.prototype,"inputmode",2);c([L("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);c([L("step",{waitUntilFirstUpdate:!0})],q.prototype,"handleStepChange",1);c([L("value",{waitUntilFirstUpdate:!0})],q.prototype,"handleValueChange",1);var ok="sl-input";q.define("sl-input");B({tagName:ok,elementClass:q,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"});var nk=j`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Do=(e,t)=>{var s;const r=e._$AN;if(r===void 0)return!1;for(const i of r)(s=i._$AO)==null||s.call(i,t,!1),Do(i,t);return!0},Ya=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},pv=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),ck(t)}};function ak(e){this._$AN!==void 0?(Ya(this),this._$AM=e,pv(this)):this._$AM=e}function lk(e,t=!1,r=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let o=r;o<s.length;o++)Do(s[o],!1),Ya(s[o]);else s!=null&&(Do(s,!1),Ya(s));else Do(this,e)}const ck=e=>{e.type==gr.CHILD&&(e._$AP??(e._$AP=lk),e._$AQ??(e._$AQ=ak))};class uk extends xn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,s){super._$AT(t,r,s),pv(this),this.isConnected=t._$AU}_$AO(t,r=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),r&&(Do(this,t),Ya(this))}setValue(t){if(Gg(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dk=()=>new hk;class hk{}const vc=new WeakMap,pk=wn(class extends uk{render(e){return ye}update(e,[t]){var s;const r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=(s=e.options)==null?void 0:s.host,this.rt(this.ct=e.element)),ye}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=vc.get(t);r===void 0&&(r=new WeakMap,vc.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=vc.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var fk=class{constructor(e,t){this.popupRef=dk(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=r=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${r.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${r.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break}},this.handleClick=r=>{var s;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(s=r.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},this.handlePopupReposition=()=>{const r=this.host.renderRoot.querySelector("slot[name='submenu']"),s=r==null?void 0:r.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],i=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:o,top:n,width:a,height:l}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const s of t.assignedElements())if(r=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let s=1;s!==r.length;++s)r[s].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((i,o)=>{var n;const a=(n=t.get(o))!=null?n:new CSSUnitValue(0,"px"),u=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return i-u.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?A`
      <sl-popup
        ${pk(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:A` <slot name="submenu" hidden></slot> `}},$t=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new yt(this,"submenu"),this.submenuController=new fk(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return ux(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return A`
      <div
        id="anchor"
        part="base"
        class=${W({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?A` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};$t.styles=[G,nk];$t.dependencies={"sl-icon":ue,"sl-popup":oe,"sl-spinner":Ji};c([I("slot:not([name])")],$t.prototype,"defaultSlot",2);c([I(".menu-item")],$t.prototype,"menuItem",2);c([f()],$t.prototype,"type",2);c([f({type:Boolean,reflect:!0})],$t.prototype,"checked",2);c([f()],$t.prototype,"value",2);c([f({type:Boolean,reflect:!0})],$t.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);c([L("checked")],$t.prototype,"handleCheckedChange",1);c([L("disabled")],$t.prototype,"handleDisabledChange",1);c([L("type")],$t.prototype,"handleTypeChange",1);var mk="sl-menu-item";$t.define("sl-menu-item");B({tagName:mk,elementClass:$t,react:F,events:{},displayName:"SlMenuItem"});var gk=j`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Bd=class extends V{render(){return A` <slot part="base" class="menu-label"></slot> `}};Bd.styles=[G,gk];var vk="sl-menu-label";Bd.define("sl-menu-label");B({tagName:vk,elementClass:Bd,react:F,events:{},displayName:"SlMenuLabel"});var yk=j`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Ft=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(t+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(t+=r.textContent)}),t.trim()}render(){return A`
      <div
        part="base"
        class=${W({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Ft.styles=[G,yk];Ft.dependencies={"sl-icon":ue};c([I(".option__label")],Ft.prototype,"defaultSlot",2);c([U()],Ft.prototype,"current",2);c([U()],Ft.prototype,"selected",2);c([U()],Ft.prototype,"hasHover",2);c([f({reflect:!0})],Ft.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);c([L("disabled")],Ft.prototype,"handleDisabledChange",1);c([L("selected")],Ft.prototype,"handleSelectedChange",1);c([L("value")],Ft.prototype,"handleValueChange",1);var bk="sl-option";Ft.define("sl-option");var wk=B({tagName:bk,elementClass:Ft,react:F,events:{},displayName:"SlOption"}),qn=wk,xk="sl-popup";oe.define("sl-popup");B({tagName:xk,elementClass:oe,react:F,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var _k=j`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,_n=class extends V{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};_n.styles=[G,_k];c([f({type:Boolean,reflect:!0})],_n.prototype,"vertical",2);c([L("vertical")],_n.prototype,"handleVerticalChange",1);var kk="sl-divider";_n.define("sl-divider");B({tagName:kk,elementClass:_n,react:F,events:{},displayName:"SlDivider"});var Ck=j`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*jd(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*ww(jd(e.shadowRoot.activeElement))))}function fv(){return[...jd()].pop()}var Qp=new WeakMap;function mv(e){let t=Qp.get(e);return t||(t=window.getComputedStyle(e,null),Qp.set(e,t)),t}function Sk(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=mv(e);return t.visibility!=="hidden"&&t.display!=="none"}function Ek(e){const t=mv(e),{overflowY:r,overflowX:s}=t;return r==="scroll"||s==="scroll"?!0:r!=="auto"||s!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&s==="auto"}function $k(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const o=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute("name")}"]`,a=o.querySelector(`${n}:checked`);return a?a===e:o.querySelector(n)===e}return Sk(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Ek(e):!1}function zk(e){var t,r;const s=Tu(e),i=(t=s[0])!=null?t:null,o=(r=s[s.length-1])!=null?r:null;return{start:i,end:o}}function Ak(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function Tu(e){const t=new WeakMap,r=[];function s(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!r.includes(i)&&$k(i)&&r.push(i),i instanceof HTMLSlotElement&&Ak(i,e)&&i.assignedElements({flatten:!0}).forEach(o=>{s(o)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&s(i.shadowRoot)}for(const o of i.children)s(o)}return s(e),r.sort((i,o)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}var go=[],gv=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=fv();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=Tu(this.element);let o=i.findIndex(a=>a===s);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){o+n>=i.length?o=0:o+n<0?o=i.length-1:o+=n,this.previousFocus=this.currentFocus;const a=i[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[...jd()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){go.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){go=go.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return go[go.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Tu(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],s=this.tabDirection==="forward"?t:r;typeof(s==null?void 0:s.focus)=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},Ud=e=>{var t;const{activeElement:r}=document;r&&e.contains(r)&&((t=document.activeElement)==null||t.blur())};function Xp(e){return e.charAt(0).toUpperCase()+e.slice(1)}var zt=class extends V{constructor(){super(...arguments),this.hasSlotController=new yt(this,"footer"),this.localize=new ie(this),this.modal=new gv(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Io(this)))}disconnectedCallback(){super.disconnectedCallback(),Ro(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=be(this,"drawer.denyClose",{dir:this.localize.dir()});Pe(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Io(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([De(this.drawer),De(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=be(this,`drawer.show${Xp(this.placement)}`,{dir:this.localize.dir()}),r=be(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Pe(this.panel,t.keyframes,t.options),Pe(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{Ud(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Ro(this)),await Promise.all([De(this.drawer),De(this.overlay)]);const e=be(this,`drawer.hide${Xp(this.placement)}`,{dir:this.localize.dir()}),t=be(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Pe(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Pe(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Io(this)),this.open&&this.contained&&(this.modal.deactivate(),Ro(this))}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}render(){return A`
      <div
        part="base"
        class=${W({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${D(this.noHeader?this.label:void 0)}
          aria-labelledby=${D(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":A`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};zt.styles=[G,Ck];zt.dependencies={"sl-icon-button":Be};c([I(".drawer")],zt.prototype,"drawer",2);c([I(".drawer__panel")],zt.prototype,"panel",2);c([I(".drawer__overlay")],zt.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],zt.prototype,"open",2);c([f({reflect:!0})],zt.prototype,"label",2);c([f({reflect:!0})],zt.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],zt.prototype,"contained",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],zt.prototype,"noHeader",2);c([L("open",{waitUntilFirstUpdate:!0})],zt.prototype,"handleOpenChange",1);c([L("contained",{waitUntilFirstUpdate:!0})],zt.prototype,"handleNoModalChange",1);ae("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});ae("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});ae("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});ae("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});ae("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});ae("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ae("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Tk="sl-drawer";zt.define("sl-drawer");B({tagName:Tk,elementClass:zt,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var Pk=j`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Je=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const r=(s,i)=>{if(!s)return null;const o=s.closest(i);if(o)return o;const n=s.getRootNode();return n instanceof ShadowRoot?r(n.host,i):null};setTimeout(()=>{var s;const i=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?fv():document.activeElement;(!this.containingElement||r(i,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),s=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(s),s.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(s=>zk(s).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await De(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=be(this,"dropdown.show",{dir:this.localize.dir()});await Pe(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await De(this);const{keyframes:e,options:t}=be(this,"dropdown.hide",{dir:this.localize.dir()});await Pe(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return A`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${D(this.sync?this.sync:void 0)}
        class=${W({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Je.styles=[G,Pk];Je.dependencies={"sl-popup":oe};c([I(".dropdown")],Je.prototype,"popup",2);c([I(".dropdown__trigger")],Je.prototype,"trigger",2);c([I(".dropdown__panel")],Je.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],Je.prototype,"open",2);c([f({reflect:!0})],Je.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);c([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Je.prototype,"stayOpenOnSelect",2);c([f({attribute:!1})],Je.prototype,"containingElement",2);c([f({type:Number})],Je.prototype,"distance",2);c([f({type:Number})],Je.prototype,"skidding",2);c([f({type:Boolean})],Je.prototype,"hoist",2);c([f({reflect:!0})],Je.prototype,"sync",2);c([L("open",{waitUntilFirstUpdate:!0})],Je.prototype,"handleOpenChange",1);ae("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ae("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Nk="sl-dropdown";Je.define("sl-dropdown");B({tagName:Nk,elementClass:Je,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"});var At=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return A`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};c([f()],At.prototype,"date",2);c([f()],At.prototype,"weekday",2);c([f()],At.prototype,"era",2);c([f()],At.prototype,"year",2);c([f()],At.prototype,"month",2);c([f()],At.prototype,"day",2);c([f()],At.prototype,"hour",2);c([f()],At.prototype,"minute",2);c([f()],At.prototype,"second",2);c([f({attribute:"time-zone-name"})],At.prototype,"timeZoneName",2);c([f({attribute:"time-zone"})],At.prototype,"timeZone",2);c([f({attribute:"hour-format"})],At.prototype,"hourFormat",2);var Lk="sl-format-date";At.define("sl-format-date");B({tagName:Lk,elementClass:At,react:F,events:{},displayName:"SlFormatDate"});var kn=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),i=r[s]+this.unit,o=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};c([f({type:Number})],kn.prototype,"value",2);c([f()],kn.prototype,"unit",2);c([f()],kn.prototype,"display",2);var Mk="sl-format-bytes";kn.define("sl-format-bytes");B({tagName:Mk,elementClass:kn,react:F,events:{},displayName:"SlFormatBytes"});var Jt=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([f({type:Number})],Jt.prototype,"value",2);c([f()],Jt.prototype,"type",2);c([f({attribute:"no-grouping",type:Boolean})],Jt.prototype,"noGrouping",2);c([f()],Jt.prototype,"currency",2);c([f({attribute:"currency-display"})],Jt.prototype,"currencyDisplay",2);c([f({attribute:"minimum-integer-digits",type:Number})],Jt.prototype,"minimumIntegerDigits",2);c([f({attribute:"minimum-fraction-digits",type:Number})],Jt.prototype,"minimumFractionDigits",2);c([f({attribute:"maximum-fraction-digits",type:Number})],Jt.prototype,"maximumFractionDigits",2);c([f({attribute:"minimum-significant-digits",type:Number})],Jt.prototype,"minimumSignificantDigits",2);c([f({attribute:"maximum-significant-digits",type:Number})],Jt.prototype,"maximumSignificantDigits",2);var Ik="sl-format-number";Jt.define("sl-format-number");B({tagName:Ik,elementClass:Jt,react:F,events:{},displayName:"SlFormatNumber"});var Rk="sl-icon";ue.define("sl-icon");B({tagName:Rk,elementClass:ue,react:F,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"});var Ok="sl-icon-button";Be.define("sl-icon-button");B({tagName:Ok,elementClass:Be,react:F,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"});var Dk="sl-button-group";Cs.define("sl-button-group");B({tagName:Dk,elementClass:Cs,react:F,events:{},displayName:"SlButtonGroup"});var Vk=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Fk=j`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Bk(e,t){if(e!==void 0){let r=0;for(const s of e)yield t(s,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*jk(e,t,r=1){const s=t===void 0?0:e;t??(t=e);for(let i=s;r>0?i<t:t<i;i+=r)yield i}var $e=class extends V{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Vk(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new ie(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const s=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==s||r!==i)&&(e.scrollTo({left:s,top:i,behavior:$u()?"auto":"smooth"}),await mt(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:s}=this,i=s?e/r:(e-t)/r+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),r=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+r*r)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",s=t.closest('[part~="pagination-item"]')!==null,i=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",o=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),o&&this.previous(),i&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const a of t){const l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}const r=t.find(a=>a.isIntersecting);if(!r)return;const s=this.getSlides({excludeClones:!1}),i=this.getSlides().length,o=s.indexOf(r.target),n=this.loop?o-this.slidesPerPage:o;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+i)%i,!this.scrolling&&this.loop&&r.target.hasAttribute("data-clone")){const a=Number(r.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("role","group"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),this.pagination&&(e.setAttribute("id",`slide-${t+1}`),e.setAttribute("role","tabpanel"),e.removeAttribute("aria-label"),e.setAttribute("aria-labelledby",`tab-${t+1}`)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),s=e.slice(0,t);r.reverse().forEach((i,o)=>{const n=i.cloneNode(!0);n.setAttribute("data-clone",String(e.length-o-1)),this.prepend(n)}),s.forEach((i,o)=>{const n=i.cloneNode(!0);n.setAttribute("data-clone",String(o)),this.append(n)})}handleSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,s)=>{(s+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:s}=this,i=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!i.length)return;const n=s?(e+i.length)%i.length:Re(e,0,i.length-r);this.activeSlide=n;const a=this.localize.dir()==="rtl",l=Re(e+(s?r:0)+(a?r-1:0),0,o.length-1),u=o[l];this.scrollToSlide(u,$u()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const r=this.scrollContainer,s=r.getBoundingClientRect(),i=e.getBoundingClientRect(),o=i.left-s.left,n=i.top-s.top;o||n?(this.pendingSlideChange=!0,r.scrollTo({left:o+r.scrollLeft,top:n+r.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this,r=this.getPageCount(),s=this.getCurrentPage(),i=this.canScrollPrev(),o=this.canScrollNext(),n=this.localize.dir()==="ltr";return A`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${W({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?A`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${W({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!i})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${W({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?A`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${Bk(jk(r),a=>{const l=a===s;return A`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${W({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      id="tab-${a+1}"
                      aria-controls="slide-${a+1}"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${l?this.localize.term("slideNum",a+1):this.localize.term("goToSlide",a+1,r)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};$e.styles=[G,Fk];$e.dependencies={"sl-icon":ue};c([f({type:Boolean,reflect:!0})],$e.prototype,"loop",2);c([f({type:Boolean,reflect:!0})],$e.prototype,"navigation",2);c([f({type:Boolean,reflect:!0})],$e.prototype,"pagination",2);c([f({type:Boolean,reflect:!0})],$e.prototype,"autoplay",2);c([f({type:Number,attribute:"autoplay-interval"})],$e.prototype,"autoplayInterval",2);c([f({type:Number,attribute:"slides-per-page"})],$e.prototype,"slidesPerPage",2);c([f({type:Number,attribute:"slides-per-move"})],$e.prototype,"slidesPerMove",2);c([f()],$e.prototype,"orientation",2);c([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],$e.prototype,"mouseDragging",2);c([I(".carousel__slides")],$e.prototype,"scrollContainer",2);c([I(".carousel__pagination")],$e.prototype,"paginationContainer",2);c([U()],$e.prototype,"activeSlide",2);c([U()],$e.prototype,"scrolling",2);c([U()],$e.prototype,"dragging",2);c([bn({passive:!0})],$e.prototype,"handleScroll",1);c([L("loop",{waitUntilFirstUpdate:!0}),L("slidesPerPage",{waitUntilFirstUpdate:!0})],$e.prototype,"initializeSlides",1);c([L("activeSlide")],$e.prototype,"handleSlideChange",1);c([L("slidesPerMove")],$e.prototype,"updateSlidesSnap",1);c([L("autoplay")],$e.prototype,"handleAutoplayChange",1);var Uk="sl-carousel";$e.define("sl-carousel");B({tagName:Uk,elementClass:$e,react:F,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var Hk=j`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Hd=class extends V{connectedCallback(){super.connectedCallback()}render(){return A` <slot></slot> `}};Hd.styles=[G,Hk];var Wk="sl-carousel-item";Hd.define("sl-carousel-item");B({tagName:Wk,elementClass:Hd,react:F,events:{},displayName:"SlCarouselItem"});var Gk="sl-checkbox";je.define("sl-checkbox");B({tagName:Gk,elementClass:je,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var Kk=j`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ne=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new yt(this,"[default]","prefix","suffix"),this.localize=new ie(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:bl}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ga`a`:Ga`button`;return Mo`
      <${t}
        part="base"
        class=${W({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${D(e?void 0:this.disabled)}
        type=${D(e?void 0:this.type)}
        title=${this.title}
        name=${D(e?void 0:this.name)}
        value=${D(e?void 0:this.value)}
        href=${D(e&&!this.disabled?this.href:void 0)}
        target=${D(e?this.target:void 0)}
        download=${D(e?this.download:void 0)}
        rel=${D(e?this.rel:void 0)}
        role=${D(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Mo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Mo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ne.styles=[G,hv];ne.dependencies={"sl-icon":ue,"sl-spinner":Ji};c([I(".button")],ne.prototype,"button",2);c([U()],ne.prototype,"hasFocus",2);c([U()],ne.prototype,"invalid",2);c([f()],ne.prototype,"title",2);c([f({reflect:!0})],ne.prototype,"variant",2);c([f({reflect:!0})],ne.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"caret",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"outline",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"circle",2);c([f()],ne.prototype,"type",2);c([f()],ne.prototype,"name",2);c([f()],ne.prototype,"value",2);c([f()],ne.prototype,"href",2);c([f()],ne.prototype,"target",2);c([f()],ne.prototype,"rel",2);c([f()],ne.prototype,"download",2);c([f()],ne.prototype,"form",2);c([f({attribute:"formaction"})],ne.prototype,"formAction",2);c([f({attribute:"formenctype"})],ne.prototype,"formEnctype",2);c([f({attribute:"formmethod"})],ne.prototype,"formMethod",2);c([f({attribute:"formnovalidate",type:Boolean})],ne.prototype,"formNoValidate",2);c([f({attribute:"formtarget"})],ne.prototype,"formTarget",2);c([L("disabled",{waitUntilFirstUpdate:!0})],ne.prototype,"handleDisabledChange",1);function ot(e,t){qk(e)&&(e="100%");const r=Qk(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/t:e=e%t/t,e)}function Qn(e){return Math.min(1,Math.max(0,e))}function qk(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Qk(e){return typeof e=="string"&&e.indexOf("%")!==-1}function vv(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Xn(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Rs(e){return e.length===1?"0"+e:String(e)}function Xk(e,t,r){return{r:ot(e,255)*255,g:ot(t,255)*255,b:ot(r,255)*255}}function Yp(e,t,r){e=ot(e,255),t=ot(t,255),r=ot(r,255);const s=Math.max(e,t,r),i=Math.min(e,t,r);let o=0,n=0;const a=(s+i)/2;if(s===i)n=0,o=0;else{const l=s-i;switch(n=a>.5?l/(2-s-i):l/(s+i),s){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4;break}o/=6}return{h:o,s:n,l:a}}function yc(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Yk(e,t,r){let s,i,o;if(e=ot(e,360),t=ot(t,100),r=ot(r,100),t===0)i=r,o=r,s=r;else{const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n;s=yc(a,n,e+1/3),i=yc(a,n,e),o=yc(a,n,e-1/3)}return{r:s*255,g:i*255,b:o*255}}function Zp(e,t,r){e=ot(e,255),t=ot(t,255),r=ot(r,255);const s=Math.max(e,t,r),i=Math.min(e,t,r);let o=0;const n=s,a=s-i,l=s===0?0:a/s;if(s===i)o=0;else{switch(s){case e:o=(t-r)/a+(t<r?6:0);break;case t:o=(r-e)/a+2;break;case r:o=(e-t)/a+4;break}o/=6}return{h:o,s:l,v:n}}function Zk(e,t,r){e=ot(e,360)*6,t=ot(t,100),r=ot(r,100);const s=Math.floor(e),i=e-s,o=r*(1-t),n=r*(1-i*t),a=r*(1-(1-i)*t),l=s%6,u=[r,n,o,o,a,r][l],h=[a,r,r,n,o,o][l],d=[o,o,a,r,r,n][l];return{r:u*255,g:h*255,b:d*255}}function Jp(e,t,r,s){const i=Rs(Math.round(e).toString(16)),o=Rs(Math.round(t).toString(16)),n=Rs(Math.round(r).toString(16));return s&&i.startsWith(i.charAt(1))&&o.startsWith(o.charAt(1))&&n.startsWith(n.charAt(1))?i.charAt(0)+o.charAt(0)+n.charAt(0):i+o+n}function Jk(e,t,r,s,i){const o=Rs(Math.round(e).toString(16)),n=Rs(Math.round(t).toString(16)),a=Rs(Math.round(r).toString(16)),l=Rs(t2(s));return i&&o.startsWith(o.charAt(1))&&n.startsWith(n.charAt(1))&&a.startsWith(a.charAt(1))&&l.startsWith(l.charAt(1))?o.charAt(0)+n.charAt(0)+a.charAt(0)+l.charAt(0):o+n+a+l}function e2(e,t,r,s){const i=e/100,o=t/100,n=r/100,a=s/100,l=255*(1-i)*(1-a),u=255*(1-o)*(1-a),h=255*(1-n)*(1-a);return{r:l,g:u,b:h}}function ef(e,t,r){let s=1-e/255,i=1-t/255,o=1-r/255,n=Math.min(s,i,o);return n===1?(s=0,i=0,o=0):(s=(s-n)/(1-n)*100,i=(i-n)/(1-n)*100,o=(o-n)/(1-n)*100),n*=100,{c:Math.round(s),m:Math.round(i),y:Math.round(o),k:Math.round(n)}}function t2(e){return Math.round(parseFloat(e)*255).toString(16)}function tf(e){return Pt(e)/255}function Pt(e){return parseInt(e,16)}function r2(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const Pu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function s2(e){let t={r:0,g:0,b:0},r=1,s=null,i=null,o=null,n=!1,a=!1;return typeof e=="string"&&(e=n2(e)),typeof e=="object"&&(Tt(e.r)&&Tt(e.g)&&Tt(e.b)?(t=Xk(e.r,e.g,e.b),n=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Tt(e.h)&&Tt(e.s)&&Tt(e.v)?(s=Xn(e.s),i=Xn(e.v),t=Zk(e.h,s,i),n=!0,a="hsv"):Tt(e.h)&&Tt(e.s)&&Tt(e.l)?(s=Xn(e.s),o=Xn(e.l),t=Yk(e.h,s,o),n=!0,a="hsl"):Tt(e.c)&&Tt(e.m)&&Tt(e.y)&&Tt(e.k)&&(t=e2(e.c,e.m,e.y,e.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=vv(r),{ok:n,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const i2="[-\\+]?\\d+%?",o2="[-\\+]?\\d*\\.\\d+%?",ts="(?:"+o2+")|(?:"+i2+")",bc="[\\s|\\(]+("+ts+")[,|\\s]+("+ts+")[,|\\s]+("+ts+")\\s*\\)?",Yn="[\\s|\\(]+("+ts+")[,|\\s]+("+ts+")[,|\\s]+("+ts+")[,|\\s]+("+ts+")\\s*\\)?",Nt={hex:/^[0-9a-fA-F]+$/,CSS_UNIT:new RegExp(ts),rgb:new RegExp("rgb"+bc),rgba:new RegExp("rgba"+Yn),hsl:new RegExp("hsl"+bc),hsla:new RegExp("hsla"+Yn),hsv:new RegExp("hsv"+bc),hsva:new RegExp("hsva"+Yn),cmyk:new RegExp("cmyk"+Yn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function n2(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(Pu[e])e=Pu[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r;if(typeof e=="string"&&e.length<=9&&(e.startsWith("#")||Nt.hex.test(e))){if(r=Nt.hex8.exec(e),r)return{r:Pt(r[1]),g:Pt(r[2]),b:Pt(r[3]),a:tf(r[4]),format:t?"name":"hex8"};if(r=Nt.hex6.exec(e),r)return{r:Pt(r[1]),g:Pt(r[2]),b:Pt(r[3]),format:t?"name":"hex"};if(r=Nt.hex4.exec(e),r)return{r:Pt(r[1]+r[1]),g:Pt(r[2]+r[2]),b:Pt(r[3]+r[3]),a:tf(r[4]+r[4]),format:t?"name":"hex8"};if(r=Nt.hex3.exec(e),r)return{r:Pt(r[1]+r[1]),g:Pt(r[2]+r[2]),b:Pt(r[3]+r[3]),format:t?"name":"hex"}}return r=Nt.rgb.exec(e),r?{r:r[1],g:r[2],b:r[3]}:(r=Nt.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Nt.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=Nt.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Nt.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=Nt.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Nt.cmyk.exec(e),r?{c:r[1],m:r[2],y:r[3],k:r[4]}:!1))))))}function Tt(e){return typeof e=="number"?!Number.isNaN(e):Nt.CSS_UNIT.test(e)}class Ae{constructor(t="",r={}){if(t instanceof Ae)return t;typeof t=="number"&&(t=r2(t)),this.originalInput=t;const s=s2(t);this.originalInput=t,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??s.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,s,i;const o=t.r/255,n=t.g/255,a=t.b/255;return o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),.2126*r+.7152*s+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=vv(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=Zp(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Zp(this.r,this.g,this.b),r=Math.round(t.h*360),s=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${s}%, ${i}%)`:`hsva(${r}, ${s}%, ${i}%, ${this.roundA})`}toHsl(){const t=Yp(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Yp(this.r,this.g,this.b),r=Math.round(t.h*360),s=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${s}%, ${i}%)`:`hsla(${r}, ${s}%, ${i}%, ${this.roundA})`}toHex(t=!1){return Jp(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Jk(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${s})`:`rgba(${t}, ${r}, ${s}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(ot(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(ot(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...ef(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:r,y:s,k:i}=ef(this.r,this.g,this.b);return`cmyk(${t}, ${r}, ${s}, ${i})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Jp(this.r,this.g,this.b,!1);for(const[r,s]of Object.entries(Pu))if(t===s)return r;return!1}toString(t){const r=!!t;t=t??this.format;let s=!1;const i=this.a<1&&this.a>=0;return!r&&i&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(s=this.toRgbString()),t==="prgb"&&(s=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(s=this.toHexString()),t==="hex3"&&(s=this.toHexString(!0)),t==="hex4"&&(s=this.toHex8String(!0)),t==="hex8"&&(s=this.toHex8String()),t==="name"&&(s=this.toName()),t==="hsl"&&(s=this.toHslString()),t==="hsv"&&(s=this.toHsvString()),t==="cmyk"&&(s=this.toCmykString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Ae(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=Qn(r.l),new Ae(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new Ae(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=Qn(r.l),new Ae(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=Qn(r.s),new Ae(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=Qn(r.s),new Ae(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),s=(r.h+t)%360;return r.h=s<0?360+s:s,new Ae(r)}mix(t,r=50){const s=this.toRgb(),i=new Ae(t).toRgb(),o=r/100,n={r:(i.r-s.r)*o+s.r,g:(i.g-s.g)*o+s.g,b:(i.b-s.b)*o+s.b,a:(i.a-s.a)*o+s.a};return new Ae(n)}analogous(t=6,r=30){const s=this.toHsl(),i=360/r,o=[this];for(s.h=(s.h-(i*t>>1)+720)%360;--t;)s.h=(s.h+i)%360,o.push(new Ae(s));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new Ae(t)}monochromatic(t=6){const r=this.toHsv(),{h:s}=r,{s:i}=r;let{v:o}=r;const n=[],a=1/t;for(;t--;)n.push(new Ae({h:s,s:i,v:o})),o=(o+a)%1;return n}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new Ae({h:(r+72)%360,s:t.s,l:t.l}),new Ae({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),s=new Ae(t).toRgb(),i=r.a+s.a*(1-r.a);return new Ae({r:(r.r*r.a+s.r*s.a*(1-r.a))/i,g:(r.g*r.a+s.g*s.a*(1-r.a))/i,b:(r.b*r.a+s.b*s.a*(1-r.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:s}=r,i=[this],o=360/t;for(let n=1;n<t;n++)i.push(new Ae({h:(s+n*o)%360,s:r.s,l:r.l}));return i}equals(t){const r=new Ae(t);return this.format==="cmyk"||r.format==="cmyk"?this.toCmykString()===r.toCmykString():this.toRgbString()===r.toRgbString()}}var rf="EyeDropper"in window,J=class extends V{constructor(){super(),this.formControlController=new jr(this),this.isSafeValue=!1,this.localize=new ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();let i=this.value,o=this.value;r.focus(),e.preventDefault(),Oo(t,{onMove:n=>{this.alpha=Re(n/s*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();let i=this.value,o=this.value;r.focus(),e.preventDefault(),Oo(t,{onMove:n=>{this.hue=Re(n/s*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:s,height:i}=t.getBoundingClientRect();let o=this.value,n=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Oo(t,{onMove:(a,l)=>{this.saturation=Re(a/s*100,0,100),this.brightness=Re(100-l/i*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Re(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Re(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Re(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Re(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Re(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Re(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Re(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Re(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Ae(e);if(!t.isValid)return null;const r=t.toHsl(),s={h:r.h,s:r.s*100,l:r.l*100,a:r.a},i=t.toRgb(),o=t.toHexString(),n=t.toHex8String(),a=t.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(n)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!rf)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,s=100){const i=new Ae(`hsva(${e}, ${t}%, ${r}%, ${s/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(i=>i.trim()!==""),s=A`
      <div
        part="base"
        class=${W({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?A`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${bt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${W({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${bt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${D(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${bt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${D(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?A`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${bt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${bt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${D(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${bt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":A`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${rf?A`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${r.length>0?A`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(i=>{const o=this.parseColor(i);return o?A`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${D(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${i}
                      @click=${()=>this.selectSwatch(i)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${bt({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${i}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:A`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${W({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${bt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};J.styles=[G,Kk];J.dependencies={"sl-button-group":Cs,"sl-button":ne,"sl-dropdown":Je,"sl-icon":ue,"sl-input":q,"sl-visually-hidden":yl};c([I('[part~="base"]')],J.prototype,"base",2);c([I('[part~="input"]')],J.prototype,"input",2);c([I(".color-dropdown")],J.prototype,"dropdown",2);c([I('[part~="preview"]')],J.prototype,"previewButton",2);c([I('[part~="trigger"]')],J.prototype,"trigger",2);c([U()],J.prototype,"hasFocus",2);c([U()],J.prototype,"isDraggingGridHandle",2);c([U()],J.prototype,"isEmpty",2);c([U()],J.prototype,"inputValue",2);c([U()],J.prototype,"hue",2);c([U()],J.prototype,"saturation",2);c([U()],J.prototype,"brightness",2);c([U()],J.prototype,"alpha",2);c([f()],J.prototype,"value",2);c([Qi()],J.prototype,"defaultValue",2);c([f()],J.prototype,"label",2);c([f()],J.prototype,"format",2);c([f({type:Boolean,reflect:!0})],J.prototype,"inline",2);c([f({reflect:!0})],J.prototype,"size",2);c([f({attribute:"no-format-toggle",type:Boolean})],J.prototype,"noFormatToggle",2);c([f()],J.prototype,"name",2);c([f({type:Boolean,reflect:!0})],J.prototype,"disabled",2);c([f({type:Boolean})],J.prototype,"hoist",2);c([f({type:Boolean})],J.prototype,"opacity",2);c([f({type:Boolean})],J.prototype,"uppercase",2);c([f()],J.prototype,"swatches",2);c([f({reflect:!0})],J.prototype,"form",2);c([f({type:Boolean,reflect:!0})],J.prototype,"required",2);c([bn({passive:!1})],J.prototype,"handleTouchMove",1);c([L("format",{waitUntilFirstUpdate:!0})],J.prototype,"handleFormatChange",1);c([L("opacity",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpacityChange",1);c([L("value")],J.prototype,"handleValueChange",1);var a2="sl-color-picker";J.define("sl-color-picker");B({tagName:a2,elementClass:J,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var l2=j`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Ke=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let i=this.from,o="";r?[i,o]=this.from.trim().split("."):s&&([i,o]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(i):null;n?s?e=n.getAttribute(o)||"":r?e=n[o]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),i=e==="success"?this.successIcon:this.errorIcon,o=be(this,"copy.in",{dir:"ltr"}),n=be(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await i.animate(n.keyframes,n.options).finished,i.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return A`
      <sl-tooltip
        class=${W({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Ke.styles=[G,l2];Ke.dependencies={"sl-icon":ue,"sl-tooltip":Ge};c([I('slot[name="copy-icon"]')],Ke.prototype,"copyIcon",2);c([I('slot[name="success-icon"]')],Ke.prototype,"successIcon",2);c([I('slot[name="error-icon"]')],Ke.prototype,"errorIcon",2);c([I("sl-tooltip")],Ke.prototype,"tooltip",2);c([U()],Ke.prototype,"isCopying",2);c([U()],Ke.prototype,"status",2);c([f()],Ke.prototype,"value",2);c([f()],Ke.prototype,"from",2);c([f({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);c([f({attribute:"copy-label"})],Ke.prototype,"copyLabel",2);c([f({attribute:"success-label"})],Ke.prototype,"successLabel",2);c([f({attribute:"error-label"})],Ke.prototype,"errorLabel",2);c([f({attribute:"feedback-duration",type:Number})],Ke.prototype,"feedbackDuration",2);c([f({attribute:"tooltip-placement"})],Ke.prototype,"tooltipPlacement",2);c([f({type:Boolean})],Ke.prototype,"hoist",2);ae("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});ae("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var c2="sl-copy-button";Ke.define("sl-copy-button");B({tagName:c2,elementClass:Ke,react:F,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var u2=j`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,er=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await De(this.body);const{keyframes:t,options:r}=be(this,"details.show",{dir:this.localize.dir()});await Pe(this.body,Xa(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await De(this.body);const{keyframes:t,options:r}=be(this,"details.hide",{dir:this.localize.dir()});await Pe(this.body,Xa(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,mt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,mt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return A`
      <details
        part="base"
        class=${W({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};er.styles=[G,u2];er.dependencies={"sl-icon":ue};c([I(".details")],er.prototype,"details",2);c([I(".details__header")],er.prototype,"header",2);c([I(".details__body")],er.prototype,"body",2);c([I(".details__expand-icon-slot")],er.prototype,"expandIconSlot",2);c([f({type:Boolean,reflect:!0})],er.prototype,"open",2);c([f()],er.prototype,"summary",2);c([f({type:Boolean,reflect:!0})],er.prototype,"disabled",2);c([L("open",{waitUntilFirstUpdate:!0})],er.prototype,"handleOpenChange",1);ae("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});ae("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var d2="sl-details";er.define("sl-details");B({tagName:d2,elementClass:er,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var h2=j`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,hr=class extends V{constructor(){super(...arguments),this.hasSlotController=new yt(this,"footer"),this.localize=new ie(this),this.modal=new gv(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Io(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ro(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=be(this,"dialog.denyClose",{dir:this.localize.dir()});Pe(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Io(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([De(this.dialog),De(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=be(this,"dialog.show",{dir:this.localize.dir()}),r=be(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Pe(this.panel,t.keyframes,t.options),Pe(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{Ud(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([De(this.dialog),De(this.overlay)]);const e=be(this,"dialog.hide",{dir:this.localize.dir()}),t=be(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Pe(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Pe(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ro(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}render(){return A`
      <div
        part="base"
        class=${W({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${D(this.noHeader?this.label:void 0)}
          aria-labelledby=${D(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":A`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};hr.styles=[G,h2];hr.dependencies={"sl-icon-button":Be};c([I(".dialog")],hr.prototype,"dialog",2);c([I(".dialog__panel")],hr.prototype,"panel",2);c([I(".dialog__overlay")],hr.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],hr.prototype,"open",2);c([f({reflect:!0})],hr.prototype,"label",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],hr.prototype,"noHeader",2);c([L("open",{waitUntilFirstUpdate:!0})],hr.prototype,"handleOpenChange",1);ae("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ae("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ae("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});ae("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ae("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var p2="sl-dialog";hr.define("sl-dialog");var f2=B({tagName:p2,elementClass:hr,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),m2=f2,g2=j`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,tr=class extends V{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return A`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?A`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};tr.styles=[G,g2];tr.dependencies={"sl-icon":ue};c([I(".animated-image__animated")],tr.prototype,"animatedImage",2);c([U()],tr.prototype,"frozenFrame",2);c([U()],tr.prototype,"isLoaded",2);c([f()],tr.prototype,"src",2);c([f()],tr.prototype,"alt",2);c([f({type:Boolean,reflect:!0})],tr.prototype,"play",2);c([L("play",{waitUntilFirstUpdate:!0})],tr.prototype,"handlePlayChange",1);c([L("src")],tr.prototype,"handleSrcChange",1);var v2="sl-animated-image";tr.define("sl-animated-image");B({tagName:v2,elementClass:tr,react:F,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});const y2=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],b2=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],w2=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],x2=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],_2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],k2=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],C2=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],S2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],E2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],$2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],z2=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],A2=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],T2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],P2=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],N2=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],L2=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],M2=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],I2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],R2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],O2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],D2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],V2=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],F2=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],B2=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],j2=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],U2=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],H2=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],W2=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],G2=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],K2=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],q2=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Q2=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],X2=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Y2=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Z2=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],J2=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],eC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],tC=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rC=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sC=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],iC=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],oC=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],nC=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],aC=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],lC=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],cC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],uC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],dC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],hC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],pC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],fC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],mC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],gC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],vC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],yC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],bC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],wC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],xC=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],_C=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],kC=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],CC=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],SC=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],EC=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],$C=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],zC=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],AC=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],TC=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],PC=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],NC=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],LC=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],MC=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],IC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],RC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],OC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],DC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],VC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],FC=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],BC=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],jC=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],UC=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],HC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],WC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],GC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],KC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],qC=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],QC=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],XC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],YC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],ZC=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],JC=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],eS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],tS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],rS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],sS=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],iS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],oS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],nS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],aS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},lS=Object.freeze(Object.defineProperty({__proto__:null,backInDown:P2,backInLeft:N2,backInRight:L2,backInUp:M2,backOutDown:I2,backOutLeft:R2,backOutRight:O2,backOutUp:D2,bounce:y2,bounceIn:V2,bounceInDown:F2,bounceInLeft:B2,bounceInRight:j2,bounceInUp:U2,bounceOut:H2,bounceOutDown:W2,bounceOutLeft:G2,bounceOutRight:K2,bounceOutUp:q2,easings:yv,fadeIn:Q2,fadeInBottomLeft:X2,fadeInBottomRight:Y2,fadeInDown:Z2,fadeInDownBig:J2,fadeInLeft:eC,fadeInLeftBig:tC,fadeInRight:rC,fadeInRightBig:sC,fadeInTopLeft:iC,fadeInTopRight:oC,fadeInUp:nC,fadeInUpBig:aC,fadeOut:lC,fadeOutBottomLeft:cC,fadeOutBottomRight:uC,fadeOutDown:dC,fadeOutDownBig:hC,fadeOutLeft:pC,fadeOutLeftBig:fC,fadeOutRight:mC,fadeOutRightBig:gC,fadeOutTopLeft:vC,fadeOutTopRight:yC,fadeOutUp:bC,fadeOutUpBig:wC,flash:b2,flip:xC,flipInX:_C,flipInY:kC,flipOutX:CC,flipOutY:SC,headShake:w2,heartBeat:x2,hinge:qC,jackInTheBox:QC,jello:_2,lightSpeedInLeft:EC,lightSpeedInRight:$C,lightSpeedOutLeft:zC,lightSpeedOutRight:AC,pulse:k2,rollIn:XC,rollOut:YC,rotateIn:TC,rotateInDownLeft:PC,rotateInDownRight:NC,rotateInUpLeft:LC,rotateInUpRight:MC,rotateOut:IC,rotateOutDownLeft:RC,rotateOutDownRight:OC,rotateOutUpLeft:DC,rotateOutUpRight:VC,rubberBand:C2,shake:S2,shakeX:E2,shakeY:$2,slideInDown:FC,slideInLeft:BC,slideInRight:jC,slideInUp:UC,slideOutDown:HC,slideOutLeft:WC,slideOutRight:GC,slideOutUp:KC,swing:z2,tada:A2,wobble:T2,zoomIn:ZC,zoomInDown:JC,zoomInLeft:eS,zoomInRight:tS,zoomInUp:rS,zoomOut:sS,zoomOutDown:iS,zoomOutLeft:oS,zoomOutRight:nS,zoomOutUp:aS},Symbol.toStringTag,{value:"Module"}));var cS=j`
  :host {
    display: contents;
  }
`,qe=class extends V{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=yv[this.easing])!=null?e:this.easing,s=(t=this.keyframes)!=null?t:lS[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!s?!1:(this.destroyAnimation(),this.animation=o.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};qe.styles=[G,cS];c([kw("slot")],qe.prototype,"defaultSlot",2);c([f()],qe.prototype,"name",2);c([f({type:Boolean,reflect:!0})],qe.prototype,"play",2);c([f({type:Number})],qe.prototype,"delay",2);c([f()],qe.prototype,"direction",2);c([f({type:Number})],qe.prototype,"duration",2);c([f()],qe.prototype,"easing",2);c([f({attribute:"end-delay",type:Number})],qe.prototype,"endDelay",2);c([f()],qe.prototype,"fill",2);c([f({type:Number})],qe.prototype,"iterations",2);c([f({attribute:"iteration-start",type:Number})],qe.prototype,"iterationStart",2);c([f({attribute:!1})],qe.prototype,"keyframes",2);c([f({attribute:"playback-rate",type:Number})],qe.prototype,"playbackRate",2);c([L(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],qe.prototype,"handleAnimationChange",1);c([L("play")],qe.prototype,"handlePlayChange",1);c([L("playbackRate")],qe.prototype,"handlePlaybackRateChange",1);var uS="sl-animation";qe.define("sl-animation");B({tagName:uS,elementClass:qe,react:F,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"});var dS=j`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,pr=class extends V{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=A`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let t=A``;return this.initials?t=A`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=A`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,A`
      <div
        part="base"
        class=${W({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};pr.styles=[G,dS];pr.dependencies={"sl-icon":ue};c([U()],pr.prototype,"hasError",2);c([f()],pr.prototype,"image",2);c([f()],pr.prototype,"label",2);c([f()],pr.prototype,"initials",2);c([f()],pr.prototype,"loading",2);c([f({reflect:!0})],pr.prototype,"shape",2);c([L("image")],pr.prototype,"handleImageChange",1);var hS="sl-avatar";pr.define("sl-avatar");B({tagName:hS,elementClass:pr,react:F,events:{onSlError:"sl-error"},displayName:"SlAvatar"});var pS=j`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,ii=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const s=t.querySelector('[slot="separator"]');s===null?t.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),A`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};ii.styles=[G,pS];ii.dependencies={"sl-icon":ue};c([I("slot")],ii.prototype,"defaultSlot",2);c([I('slot[name="separator"]')],ii.prototype,"separatorSlot",2);c([f()],ii.prototype,"label",2);var fS="sl-breadcrumb";ii.define("sl-breadcrumb");B({tagName:fS,elementClass:ii,react:F,events:{},displayName:"SlBreadcrumb"});var mS="sl-button";ne.define("sl-button");var gS=B({tagName:mS,elementClass:ne,react:F,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),yr=gS,vS=j`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Hr=class extends V{constructor(){super(...arguments),this.hasSlotController=new yt(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return A`
      <div
        part="base"
        class=${W({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?A`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${D(this.target?this.target:void 0)}"
                rel=${D(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?A`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?A`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Hr.styles=[G,vS];c([I("slot:not([name])")],Hr.prototype,"defaultSlot",2);c([U()],Hr.prototype,"renderType",2);c([f()],Hr.prototype,"href",2);c([f()],Hr.prototype,"target",2);c([f()],Hr.prototype,"rel",2);c([L("href",{waitUntilFirstUpdate:!0})],Hr.prototype,"hrefChanged",1);var yS="sl-breadcrumb-item";Hr.define("sl-breadcrumb-item");B({tagName:yS,elementClass:Hr,react:F,events:{},displayName:"SlBreadcrumbItem"});var bS=j`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,oi=class extends V{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return A`
      <span
        part="base"
        class=${W({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};oi.styles=[G,bS];c([f({reflect:!0})],oi.prototype,"variant",2);c([f({type:Boolean,reflect:!0})],oi.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],oi.prototype,"pulse",2);var wS="sl-badge";oi.define("sl-badge");var xS=B({tagName:wS,elementClass:oi,react:F,events:{},displayName:"SlBadge"}),_S=xS,kS=j`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Wd=class extends V{constructor(){super(...arguments),this.hasSlotController=new yt(this,"footer","header","image")}render(){return A`
      <div
        part="base"
        class=${W({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Wd.styles=[G,kS];var CS="sl-card";Wd.define("sl-card");var SS=B({tagName:CS,elementClass:Wd,react:F,events:{},displayName:"SlCard"}),wc=SS,ES=j`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Bt=class Ps extends V{constructor(){super(...arguments),this.hasSlotController=new yt(this,"icon","suffix"),this.localize=new ie(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,r="100%",s="0";this.countdownAnimation=t.animate([{width:r},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await De(this.base),this.base.hidden=!1;const{keyframes:t,options:r}=be(this,"alert.show",{dir:this.localize.dir()});await Pe(this.base,t,r),this.emit("sl-after-show")}else{Ud(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await De(this.base);const{keyframes:t,options:r}=be(this,"alert.hide",{dir:this.localize.dir()});await Pe(this.base,t,r),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),Ps.toastStack.parentElement===null&&document.body.append(Ps.toastStack),Ps.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ps.toastStack.removeChild(this),t(),Ps.toastStack.querySelector("sl-alert")===null&&Ps.toastStack.remove()},{once:!0})})}render(){return A`
      <div
        part="base"
        class=${W({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?A`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?A`
              <div
                class=${W({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Bt.styles=[G,ES];Bt.dependencies={"sl-icon-button":Be};c([I('[part~="base"]')],Bt.prototype,"base",2);c([I(".alert__countdown-elapsed")],Bt.prototype,"countdownElement",2);c([f({type:Boolean,reflect:!0})],Bt.prototype,"open",2);c([f({type:Boolean,reflect:!0})],Bt.prototype,"closable",2);c([f({reflect:!0})],Bt.prototype,"variant",2);c([f({type:Number})],Bt.prototype,"duration",2);c([f({type:String,reflect:!0})],Bt.prototype,"countdown",2);c([U()],Bt.prototype,"remainingTime",2);c([L("open",{waitUntilFirstUpdate:!0})],Bt.prototype,"handleOpenChange",1);c([L("duration")],Bt.prototype,"handleDurationChange",1);var bv=Bt;ae("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ae("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var $S="sl-alert";bv.define("sl-alert");var zS=B({tagName:$S,elementClass:bv,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"}),hs=zS,AS=(e,t)=>{let r=0;return function(...s){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...s)},t)}},sf=(e,t,r)=>{const s=e[t];e[t]=function(...i){s.call(this,...i),r.call(this,s,...i)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,r=new WeakMap,s=o=>{for(const n of o.changedTouches)t.add(n.identifier)},i=o=>{for(const n of o.changedTouches)t.delete(n.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),sf(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scrollend")return;const a=AS(()=>{t.size?a():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",a,{passive:!0}),r.set(this,a)}),sf(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scrollend")return;const a=r.get(this);a&&o.call(this,"scroll",a,{passive:!0})})}})();q.define("sl-input");oi.define("sl-badge");function TS(){const{falcon:e,cachedCategories:t}=E.useContext(gn),[r,s]=E.useState([]),[i,o]=E.useState({}),[n,a]=E.useState(""),[l,u]=E.useState(""),[h,d]=E.useState([]),[p,g]=E.useState(""),[v,x]=E.useState(""),[C,b]=E.useState({}),[m,y]=E.useState([]),[w,k]=E.useState(""),[S,$]=E.useState(null),[T,M]=E.useState(!0),[z,ee]=E.useState(!0),[he,le]=E.useState(!1),[pe,R]=E.useState(""),[te,fe]=E.useState(null),[N,K]=E.useState(!1);E.useEffect(()=>{console.log("Selected categories updated:",h)},[h]),E.useEffect(()=>{e&&(async()=>{try{M(!0),ee(!0);const _e=await Nr(e,"GET","/urlblock");if(_e!=null&&_e.host_groups&&s(_e.host_groups),t&&t.length>0){const et={};t.forEach(ze=>{et[ze]=""}),o(et)}else{const et=await Ad(e),ze={};et.forEach(jt=>{ze[jt]=""}),o(ze)}}catch(_e){console.error("Error loading data:",_e),$({type:"error",message:`Failed to load data: ${_e.message}`})}finally{M(!1),ee(!1)}})()},[e,t]);const Q=async()=>{try{if(console.log("HandlePreview called"),console.log("Selected Categories State:",h),console.log("Selected Categories Length:",h.length),!h||h.length===0)throw console.log("No categories selected, throwing error"),new Error("Please select at least one category");le(!0),$({type:"info",message:"Loading domains from categories..."});const X=e.collection({collection:"domain"}),_e=h.map(async rr=>{try{const tt=Og(rr);console.log(`Fetching domains for category: ${rr}, key: ${tt}`);const Cn=await X.read(tt);return console.log(`Record for ${rr}:`,Cn),Cn&&Cn.domain?{category:rr,domain:Cn.domain}:{category:rr,domain:null}}catch(tt){return console.warn(`Failed to fetch domains for category ${rr}:`,tt),{category:rr,domain:null}}}),et=await Promise.all(_e),ze={};et.forEach(({category:rr,domain:tt})=>{tt&&(ze[rr]=tt)}),b(ze),y([...h]);const jt=Object.values(ze).filter(Boolean).join(";");if(!jt)throw new Error("No domains found for selected categories");console.log("Combined URLs for preview:",jt),console.log("Per-category domains map:",ze),x(jt),$({type:"success",message:`Preview generated successfully with domains from ${h.length} categories`})}catch(X){console.error("Preview generation error:",X),$({type:"error",message:X.message})}finally{le(!1)}},xe=async()=>{var X;try{if(!n)throw new Error("Please select a host group");if(!l)throw new Error("Please enter a policy name");if(!v)throw new Error("Please preview domains first");if(!p)throw new Error("Please select a platform");if(Object.keys(C).length===0)throw new Error("Please preview domains first");if(!(m.length===h.length&&h.every(tt=>m.includes(tt))))throw new Error('The category selection changed after the preview. Click "Preview" again.');const et=h.filter(tt=>!C[tt]);if(et.length>0)throw new Error(`No domains found for: ${et.join(", ")}. Unselect them or fix the categories.`);$({type:"info",message:"Creating blocking rule..."});const ze={};h.forEach(tt=>{C[tt]&&(ze[tt]=C[tt])});const jt=(X=r.find(tt=>tt.id===n))==null?void 0:X.name,rr=await Nr(e,"POST","/create-rule",{hostGroupId:n,hostGroupName:jt,policyName:l,platform:p.toLowerCase(),categories:ze,whitelist:w.trim()});$({type:"success",message:`Successfully created ${rr.rulesCreated} rule(s) and assigned ${h.length} categories!`}),a(""),u(""),d([]),g(""),x(""),b({}),y([]),k("")}catch(_e){console.error("Operation failed:",_e),$({type:"error",message:_e.message})}},Me=async()=>{if(pe.trim()){K(!0),fe(null);try{const X=encodeURIComponent(pe.trim().toLowerCase());fe(await Nr(e,"GET","/simulate-policy?fqdn="+X))}catch(X){console.error("Simulator error:",X),fe({error:X.message})}finally{K(!1)}}};return T?_.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:_.jsxs("div",{className:"text-center",children:[_.jsx(Fs,{style:{fontSize:"2rem"}}),_.jsx("p",{className:"mt-4 text-gray-600",children:"Loading data..."})]})}):_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"flex items-end space-x-4",children:[_.jsxs("div",{className:"flex-1",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Policy name"}),_.jsx("input",{type:"text",value:l,onChange:X=>u(X.target.value),placeholder:"Enter a unique name",className:"w-full px-3 bg-white outline-none",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"40px",lineHeight:"40px",border:"1px solid #B8B7BD",borderRadius:"0"}})]}),_.jsxs("div",{className:"flex-1",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Host group"}),_.jsx(Kp,{value:n,onSlChange:X=>a(X.target.value),placeholder:"Select",children:r.map(X=>_.jsx(qn,{value:X.id,children:X.name},X.id))})]}),_.jsxs("div",{className:"flex-1",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Platform"}),_.jsxs(Kp,{value:p,onSlChange:X=>g(X.target.value),placeholder:"Select",children:[_.jsx(qn,{value:"windows",children:"windows"}),_.jsx(qn,{value:"mac",children:"mac"}),_.jsx(qn,{value:"linux",children:"linux"})]})]}),_.jsx(yr,{variant:"primary",onClick:Q,loading:he,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"40px","background-color":"#e5e7eb",color:"black",border:"none","min-width":"120px"},children:"Preview Domains"}),_.jsx(yr,{variant:"primary",onClick:xe,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"40px","background-color":"#e5e7eb",color:"black",border:"none","min-width":"160px"},children:"Create blocking rule"})]}),_.jsxs("div",{children:[_.jsxs("div",{className:"flex justify-between items-center mb-2",children:[_.jsx("h2",{className:"text-sm font-medium text-gray-700",children:_.jsx("b",{children:"Categories to block"})}),_.jsx(H1,{to:"/about",className:"text-black no-underline text-sm hover:text-gray-600",children:"Add custom categories"})]}),_.jsx("div",{className:"grid grid-cols-4 gap-x-6 gap-y-2 max-h-[400px] overflow-y-auto p-4",style:{border:"1px solid #B8B7BD",borderRadius:"0"},children:z?_.jsxs("div",{className:"col-span-4 flex items-center justify-center py-4",children:[_.jsx(Fs,{style:{fontSize:"1.5rem"}}),_.jsx("span",{className:"ml-2 text-gray-600",children:"Loading categories..."})]}):Object.keys(i).sort().map(X=>_.jsxs("div",{className:"flex items-center space-x-2",children:[_.jsx("input",{type:"checkbox",id:`category-${X}`,checked:h.includes(X),onChange:_e=>{_e.target.checked?d(et=>[...et,X]):d(et=>et.filter(ze=>ze!==X))},className:"h-4 w-4 text-gray-600 border-gray-300 focus:ring-0"}),_.jsx("label",{htmlFor:`category-${X}`,className:"text-sm text-gray-700 cursor-pointer select-none",children:X})]},X))})]}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-sm font-medium text-gray-700 mb-2",children:_.jsx("b",{children:"Selected domains preview"})}),_.jsx(Cu,{value:v,readonly:!0,rows:"8",placeholder:"Select Preview",resize:"vertical",style:{"--sl-input-font-size":"var(--sl-font-size-medium)","--sl-color-neutral-300":"#E0E0E0",width:"100%","--sl-input-border-color":"#B8B7BD","--sl-input-border-radius-medium":"0"}})]}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-sm font-medium text-gray-700 mb-2",children:_.jsx("b",{children:"Excluded Domains (Whitelist)"})}),_.jsxs("p",{className:"text-xs text-gray-500 mb-2",children:["These domains will be added as an ",_.jsx("strong",{children:"ALLOW"})," rule with the highest priority. Separate multiple domains with semicolons (;)."]}),_.jsx(Cu,{value:w,onSlInput:X=>k(X.target.value),rows:"3",placeholder:"e.g. excepcion.com;*.excepcion.com;intranet.empresa.com",resize:"vertical",style:{"--sl-input-font-size":"var(--sl-font-size-medium)","--sl-color-neutral-300":"#E0E0E0",width:"100%","--sl-input-border-color":"#B8B7BD","--sl-input-border-radius-medium":"0"}})]}),_.jsxs("div",{style:{border:"1px solid #B8B7BD",borderRadius:"0",padding:"16px"},children:[_.jsx("h2",{className:"text-sm font-bold text-black mb-2",children:"???? Domain Policy Simulator"}),_.jsx("p",{className:"text-xs text-gray-500 mb-3",children:"Enter a domain to check whether it is registered under any blocking category."}),_.jsxs("div",{className:"flex items-center space-x-3",children:[_.jsx("input",{type:"text",value:pe,onChange:X=>R(X.target.value),onKeyDown:X=>{X.key==="Enter"&&Me()},placeholder:"e.g. facebook.com",className:"flex-1 px-3 bg-white outline-none",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"40px",lineHeight:"40px",border:"1px solid #B8B7BD",borderRadius:"0"}}),_.jsx(yr,{variant:"primary",onClick:Me,loading:N,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"40px","background-color":"#e5e7eb",color:"black",border:"none","min-width":"120px"},children:"Check domain"})]}),te&&!N&&_.jsx("div",{className:"mt-4",children:te.error?_.jsxs("div",{style:{padding:"10px 14px",background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:"4px",fontSize:"13px",color:"#991b1b"},children:["??? Error: ",te.error]}):te.encontrado?_.jsxs("div",{style:{padding:"10px 14px",background:"#fef9c3",border:"1px solid #fde047",borderRadius:"4px",fontSize:"13px",color:"#713f12"},children:["???? ",_.jsx("strong",{children:"BLOCKED"})," ??? ",te.mensaje,_.jsx("br",{}),_.jsxs("span",{style:{fontSize:"12px",color:"#92400e"},children:["Category: ",_.jsx("strong",{children:te.categoria})]})]}):_.jsxs("div",{style:{padding:"10px 14px",background:"#dcfce7",border:"1px solid #86efac",borderRadius:"4px",fontSize:"13px",color:"#166534"},children:["??? ",_.jsx("strong",{children:"NOT BLOCKED"})," ??? ",te.mensaje]})})]}),S&&_.jsx(hs,{variant:S.type==="error"?"danger":S.type==="success"?"success":"info",open:!0,closable:!0,onSlAfterHide:()=>$(null),children:S.message})]})}function PS(){const{falcon:e,refreshCategories:t}=E.useContext(gn),[r,s]=E.useState(""),[i,o]=E.useState(""),[n,a]=E.useState(null),[l,u]=E.useState(!1),h=E.useRef(null),[d,p]=E.useState(null),[g,v]=E.useState(!1),[x,C]=E.useState(null),b=async()=>{if(d)try{v(!0),C(null);const y=await d.text(),w=await Nr(e,"POST","/import-csv",{csv:y});C({type:w.failed_imports>0?"warning":"success",message:`Imported ${w.successful_imports} categories (${w.domains_imported} domains) from ${w.total_rows} rows`+(w.failed_imports>0?`; ${w.failed_imports} rows/categories failed (see function logs).`:".")}),p(null),h.current&&(h.current.value=""),t==null||t()}catch(y){console.error("Import CSV error:",y),C({type:"error",message:`Error: ${y.message}`})}finally{v(!1)}},m=async()=>{try{if(u(!0),console.log("Starting category creation"),!r.trim())throw new Error("Please enter a category name");if(!i.trim())throw new Error("Please enter at least one URL");const y=i.split(",").map(k=>k.trim()).filter(k=>k.length>0).join(","),w=await Nr(e,"POST","/manage-category",{categoryName:r.trim(),urls:y});a({type:"success",message:`Category created successfully with ${w.urlCount||0} URLs!`}),s(""),o(""),t==null||t()}catch(y){console.error("Error in handleCreateCategory:",y),a({type:"error",message:`Error: ${y.message}`})}finally{u(!1)}};return _.jsxs("div",{className:"container mx-auto p-4",children:[_.jsx("h2",{className:"text-lg font-semibold text-black mb-4 text-left",children:"Create custom category"}),_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Category Name"}),_.jsx("input",{type:"text",value:r,onChange:y=>s(y.target.value),placeholder:"Enter category name",className:"w-1/2 py-3 px-4 bg-white border border-gray-300 focus:border-gray-400 outline-none",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"40px",lineHeight:"40px",border:"1px solid #B8B7BD",borderRadius:"0"}})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Domains (comma-separated)"}),_.jsx("textarea",{value:i,onChange:y=>o(y.target.value),placeholder:"Enter domains separated by commas (e.g., example.com, test.com, domain.com)",rows:"6",className:"w-1/2 py-3 px-4 bg-white border border-gray-300 focus:border-gray-400 outline-none font-mono text-sm",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"70px",lineHeight:"70px",border:"1px solid #B8B7BD",borderRadius:"0"}}),_.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Example: example.com, test.com, domain.com"})]}),_.jsx(yr,{variant:"primary",onClick:m,loading:l,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"48px","background-color":"#e5e7eb",color:"black",border:"none",width:"15%"},children:l?"Creating Category...":"Create Category"}),n&&_.jsx(hs,{variant:n.type==="error"?"danger":"success",open:!0,closable:!0,onSlAfterHide:()=>a(null),children:n.message}),_.jsxs("div",{className:"form-group",style:{borderTop:"1px solid #E5E7EB",paddingTop:"24px"},children:[_.jsx("h2",{className:"text-lg font-semibold text-black mb-2 text-left",children:"Import categories from CSV"}),_.jsxs("p",{className:"mb-2 text-sm text-gray-600",children:["Format: ",_.jsx("code",{children:"category,url"})," with a header row and one domain per row (e.g. ",_.jsx("code",{children:"Games,steam.com"}),"). Rows of the same category are merged and",_.jsx("code",{children:" *.domain"})," wildcards are added automatically. Existing categories are replaced."]}),_.jsx("input",{ref:h,type:"file",accept:".csv,text/csv",onChange:y=>{var w;p(((w=y.target.files)==null?void 0:w[0])??null),C(null)},className:"block mb-3 text-sm text-black"}),_.jsx(yr,{variant:"primary",onClick:b,loading:g,disabled:!d,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"48px","background-color":"#e5e7eb",color:"black",border:"none",width:"15%"},children:g?"Importing...":"Import CSV"}),x&&_.jsx(hs,{className:"mt-3",variant:x.type==="error"?"danger":x.type,open:!0,closable:!0,onSlAfterHide:()=>C(null),children:x.message})]})]})]})}const NS="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",LS="px-6 py-4 whitespace-nowrap text-sm";function xc({headers:e,rows:t}){return _.jsx("div",{className:"overflow-x-auto",children:_.jsxs("table",{className:"min-w-full",style:{borderCollapse:"collapse"},children:[_.jsx("thead",{children:_.jsx("tr",{children:e.map(r=>_.jsx("th",{className:NS,children:r},r))})}),_.jsx("tbody",{children:t.map((r,s)=>_.jsx("tr",{children:r.map((i,o)=>_.jsx("td",{className:LS,children:i},o))},s))})]})})}const of=e=>e?new Date(e).toLocaleString():"-";function MS(){const{falcon:e,isInitialized:t}=Rg(),[r,s]=E.useState(null),[i,o]=E.useState(!0),[n,a]=E.useState(null);if(E.useEffect(()=>{if(!t)return;(async()=>{try{o(!0),a(null),s(await Nr(e,"GET","/domain-analytics"))}catch(g){console.error("Error fetching analytics:",g),a(g.message)}finally{o(!1)}})()},[t,e]),!t||i)return _.jsx("div",{className:"flex items-center justify-center min-h-screen",children:_.jsx(Fs,{style:{fontSize:"2rem"}})});if(n)return _.jsx(hs,{variant:"danger",open:!0,children:n});const l=r==null?void 0:r.visualization_data,u=l==null?void 0:l.bar_chart,h=l==null?void 0:l.comparison_chart;if(!u||!h)return _.jsx(hs,{variant:"warning",open:!0,children:"No analytics data available"});const d=Object.entries(r.analysis||{});return _.jsxs("div",{className:"container mx-auto p-4",children:[_.jsx("h2",{className:"text-lg font-semibold text-left mb-4",children:"Domain access analysis"}),r.truncated&&_.jsx(hs,{variant:"warning",open:!0,className:"mb-4",children:r.message||"Results may be incomplete"}),_.jsxs(wc,{children:[_.jsx("div",{slot:"header",children:_.jsx("h3",{className:"text-lg font-semibold text-left",children:"Top 20 Most Visited Domains (Last 15 Days)"})}),_.jsx(xc,{headers:["#","Domain","Visits"],rows:u.domains.map((p,g)=>[g+1,p,u.visits[g]])})]}),_.jsxs(wc,{className:"mt-4",children:[_.jsx("div",{slot:"header",children:_.jsx("h3",{className:"text-lg font-semibold text-left",children:"Visits vs Unique IPs by Domain"})}),_.jsx(xc,{headers:["Domain","Total Visits","Unique IPs"],rows:h.domains.map((p,g)=>[p,h.visits[g],h.unique_ips[g]])})]}),_.jsxs(wc,{className:"mt-4",children:[_.jsx("div",{slot:"header",children:_.jsx("h3",{className:"text-lg font-semibold text-left",children:"Detailed Analysis"})}),_.jsx(xc,{headers:["Domain","Visit Count","Unique IPs","Unique Hosts","First Seen","Last Seen"],rows:d.map(([p,g])=>[p,g.visit_count,g.unique_ips,g.unique_hosts,of(g.first_seen),of(g.last_seen)])})]})]})}const IS=e=>e==="windows"?"primary":e==="mac"?"success":e==="linux"?"warning":"neutral";function RS(){const{falcon:e,cachedCategories:t}=E.useContext(gn),[r,s]=E.useState([]),[i,o]=E.useState(!0),[n,a]=E.useState(null),[l,u]=E.useState(null),[h,d]=E.useState([]),[p,g]=E.useState(!1),[v,x]=E.useState(null),[C,b]=E.useState([]),[m,y]=E.useState(""),[w,k]=E.useState(!1),[S,$]=E.useState(null),T=E.useRef(null);E.useEffect(()=>{M(),z()},[]);const M=async()=>{o(!0),a(null);try{const R=await Nr(e,"GET","/list-policies");s((R==null?void 0:R.policies)??[])}catch(R){console.error("loadPolicies error:",R),a("No se pudieron cargar las políticas. Intenta recargar la página.")}finally{o(!1)}},z=async()=>{try{t&&t.length>0?d(t):d(await Ad(e))}catch(R){console.error("loadAllCategories error:",R)}},ee=async(R,te,fe)=>{if(window.confirm(`¿Eliminar la política "${te}"? Esta acción no se puede deshacer.`)){u(R);try{await Nr(e,"POST","/delete-policy",{rule_group_id:R,policy_id:fe||""}),await M()}catch(N){console.error("handleDelete error:",N),alert("Error al eliminar la política: "+N.message)}finally{u(null)}}},he=R=>{x(R),b([...R.categories]),y(R.whitelist??""),$(null),g(!0)},le=R=>{b(te=>te.includes(R)?te.filter(fe=>fe!==R):[...te,R])},pe=async()=>{if(C.length===0){$({type:"warning",message:"Selecciona al menos una categoría."});return}k(!0),$(null);try{const R=e.collection({collection:"domain"}),te={};if(await Promise.all(C.map(async fe=>{try{const N=await R.read(Og(fe));N!=null&&N.domain&&(te[fe]=N.domain)}catch{}})),Object.keys(te).length===0){$({type:"danger",message:"No se pudieron resolver dominios para las categorías seleccionadas."});return}await Nr(e,"POST","/update-policy",{ruleGroupId:v.rule_group_id,policyId:v.policy_id||"",policyName:v.policy_name,hostGroupId:v.host_group_id,hostGroupName:v.host_group_name,platform:v.platform,categories:te,whitelist:m.trim()}),$({type:"success",message:"¡Política actualizada exitosamente!"}),await M(),setTimeout(()=>{g(!1),$(null)},1500)}catch(R){console.error("handleSave error:",R),$({type:"danger",message:"Error al actualizar: "+R.message})}finally{k(!1)}};return _.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx("h2",{className:"text-sm font-bold text-black",children:"Active Blocking Policies"}),_.jsx(yr,{size:"small",onClick:M,disabled:i,style:{"--sl-input-height-small":"32px"},children:i?_.jsx(Fs,{style:{fontSize:"1rem"}}):"↻ Refresh"})]}),n&&_.jsx(hs,{variant:"danger",open:!0,closable:!0,onSlAfterHide:()=>a(null),children:n}),i&&_.jsx("div",{className:"flex items-center justify-center py-12",children:_.jsx(Fs,{style:{fontSize:"2rem"}})}),!i&&r.length===0&&!n&&_.jsxs("div",{className:"text-center py-12 text-gray-500 text-sm",style:{border:"1px solid #B8B7BD"},children:["No active policies found. Create one from the ",_.jsx("strong",{children:"Category Blocking Policy"})," tab."]}),!i&&r.length>0&&_.jsx("div",{style:{overflowX:"auto"},children:_.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"13px",border:"1px solid #B8B7BD"},children:[_.jsx("thead",{children:_.jsx("tr",{style:{background:"#f9f9f9",borderBottom:"2px solid #B8B7BD"},children:["Policy Name","Host Group","Platform","Categories","Whitelist","Actions"].map(R=>_.jsx("th",{style:{padding:"10px 12px",textAlign:"left",fontWeight:600,color:"#111",whiteSpace:"nowrap"},children:R},R))})}),_.jsx("tbody",{children:r.map((R,te)=>_.jsxs("tr",{style:{borderBottom:"1px solid #E5E7EB",background:te%2===0?"#fff":"#fafafa"},children:[_.jsx("td",{style:{padding:"10px 12px",fontWeight:500},children:R.policy_name||"—"}),_.jsx("td",{style:{padding:"10px 12px",color:"#555"},children:R.host_group_name||R.host_group_id||"—"}),_.jsx("td",{style:{padding:"10px 12px"},children:_.jsx(_S,{variant:IS(R.platform),pill:!0,children:R.platform||"—"})}),_.jsx("td",{style:{padding:"10px 12px"},children:_.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:(R.categories??[]).map(fe=>_.jsx("span",{style:{display:"inline-block",padding:"2px 8px",background:"#e5e7eb",borderRadius:"12px",fontSize:"11px",color:"#374151"},children:fe},fe))})}),_.jsx("td",{style:{padding:"10px 12px",color:"#555",maxWidth:"220px"},children:R.whitelist?_.jsx("span",{style:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:R.whitelist,children:R.whitelist}):_.jsx("span",{style:{color:"#aaa",fontStyle:"italic"},children:"None"})}),_.jsxs("td",{style:{padding:"10px 12px",whiteSpace:"nowrap"},children:[_.jsx(yr,{size:"small",variant:"neutral",onClick:()=>he(R),style:{marginRight:"6px"},children:"✏️ Edit"}),_.jsx(yr,{size:"small",variant:"danger",loading:l===R.rule_group_id,onClick:()=>ee(R.rule_group_id,R.policy_name,R.policy_id),children:"🗑 Delete"})]})]},R.rule_group_id))})]})}),_.jsxs(m2,{ref:T,open:p,label:`Edit policy: ${(v==null?void 0:v.policy_name)??""}`,style:{"--width":"700px"},onSlAfterHide:()=>{g(!1),$(null)},children:[v&&_.jsxs("div",{className:"space-y-5",children:[_.jsxs("div",{className:"grid grid-cols-3 gap-4",style:{fontSize:"13px",color:"#555"},children:[_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"2px"},children:"Policy name"}),_.jsx("div",{style:{padding:"8px 12px",border:"1px solid #B8B7BD",background:"#f5f5f5"},children:v.policy_name})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"2px"},children:"Host group"}),_.jsx("div",{style:{padding:"8px 12px",border:"1px solid #B8B7BD",background:"#f5f5f5"},children:v.host_group_name||v.host_group_id})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"2px"},children:"Platform"}),_.jsx("div",{style:{padding:"8px 12px",border:"1px solid #B8B7BD",background:"#f5f5f5"},children:v.platform})]})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"6px",fontSize:"13px"},children:"Categories to block"}),_.jsx("div",{style:{border:"1px solid #B8B7BD",padding:"12px",maxHeight:"260px",overflowY:"auto",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px 20px"},children:h.length===0?_.jsx("div",{className:"col-span-3 text-center py-4",children:_.jsx(Fs,{style:{fontSize:"1.2rem"}})}):h.sort().map(R=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx("input",{type:"checkbox",id:`edit-cat-${R}`,checked:C.includes(R),onChange:()=>le(R),style:{width:"14px",height:"14px",cursor:"pointer"}}),_.jsx("label",{htmlFor:`edit-cat-${R}`,style:{fontSize:"12px",cursor:"pointer",color:"#374151"},children:R})]},R))}),_.jsxs("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"4px"},children:[C.length," categories selected"]})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"4px",fontSize:"13px"},children:"Excluded Domains (Whitelist)"}),_.jsxs("p",{style:{fontSize:"11px",color:"#9ca3af",marginBottom:"6px"},children:["These domains will be added as an ",_.jsx("strong",{children:"ALLOW"})," rule with highest priority. Separate with semicolons (;)."]}),_.jsx(Cu,{value:m,onSlInput:R=>y(R.target.value),rows:"3",placeholder:"e.g. excepcion.com;*.excepcion.com",resize:"vertical",style:{"--sl-input-font-size":"var(--sl-font-size-medium)",width:"100%","--sl-input-border-color":"#B8B7BD","--sl-input-border-radius-medium":"0"}})]}),S&&_.jsx(hs,{variant:S.type==="warning"?"warning":S.type==="success"?"success":"danger",open:!0,children:S.message})]}),_.jsxs("div",{slot:"footer",style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[_.jsx(yr,{variant:"neutral",onClick:()=>g(!1),disabled:w,children:"Cancel"}),_.jsx(yr,{variant:"primary",onClick:pe,loading:w,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","background-color":"#1a73e8",color:"white"},children:"Save changes"})]})]})]})}var Nu={},nf=Qy;Nu.createRoot=nf.createRoot,Nu.hydrateRoot=nf.hydrateRoot;const OS=`
  sl-tab-group {
    position: relative;
  }
  sl-tab-group::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #E5E7EB;
  }
  sl-tab-group::part(base) {
    --sl-border-width: 0;
  }
  sl-tab-group::part(nav) {
    border: none !important;
  }
  sl-tab-group::part(tabs) {
    border: none !important;
  }
  sl-tab::part(base) {
    font-weight: 400;
    color: var(--sl-color-neutral-700);
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s ease;
    position: relative;
    z-index: 1;
  }
  sl-tab[active]::part(base) {
    font-weight: 600;
    color: var(--sl-color-neutral-700);
    border-bottom: 2px solid rgb(26, 115, 232);
  }
`,kr={header:{fontSize:"2rem",fontWeight:"600",marginBottom:"12px",textAlign:"center"},subHeader:{fontSize:"0.875rem",color:"var(--sl-color-neutral-500)",textAlign:"center"},nav:{position:"relative"},tabList:{display:"flex",gap:"2rem"},tabGroup:{"--sl-spacing-medium":"0",position:"relative",borderBottom:"1px solid #E5E7EB",display:"flex",justifyContent:"center"},tab:{padding:"8px 16px",color:"var(--sl-color-neutral-700)",position:"relative"},activeTab:{fontWeight:"600"},content:{paddingTop:"1.5rem"}};function DS({children:e}){const t=Gi();return _.jsxs("div",{className:"max-w-screen-2xl mx-auto px-4",children:[_.jsx("style",{children:OS}),_.jsxs("div",{style:kr.container,children:[_.jsx("h1",{style:kr.header,children:"Category Blocking"}),_.jsx("p",{style:kr.subHeader,children:"Configure category-based blocking rules for your host groups"})]}),_.jsx(tx,{placement:"bottom",style:kr.tabGroup,children:_.jsx("nav",{style:kr.nav,children:_.jsx("div",{style:kr.tabList,children:[{path:"/",label:"Category Blocking Policy"},{path:"/about",label:"Custom Categories"},{path:"/domain-analytics",label:"Domain Analytics"},{path:"/firewall-rules",label:"Firewall Rules"}].map(({path:r,label:s})=>_.jsx(Kw,{panel:r.substring(1)||"home",active:t.pathname===r,style:{...kr.tab,...t.pathname===r?kr.activeTab:{}},children:_.jsx(Zb,{to:r,style:{textDecoration:"none",color:"inherit"},children:s})},r))})})}),_.jsx("div",{style:kr.content,children:e})]})}function VS(){return _.jsx("div",{className:"min-h-screen sl-theme-dark p-4",children:_.jsx("div",{className:"max-w-screen-2xl mx-auto px-4",children:_.jsx(Bb,{children:_.jsxs(ci,{element:_.jsx(DS,{children:_.jsx(Vb,{})}),children:[_.jsx(ci,{index:!0,path:"/",element:_.jsx(TS,{})}),_.jsx(ci,{path:"/about",element:_.jsx(PS,{})}),_.jsx(ci,{path:"/domain-analytics",element:_.jsx(MS,{})}),_.jsx(ci,{path:"/firewall-rules",element:_.jsx(RS,{})})]})})})})}function FS(){const{falcon:e,navigation:t,isInitialized:r,cachedCategories:s,refreshCategories:i}=Rg();return r?_.jsx(bf.StrictMode,{children:_.jsx(gn.Provider,{value:{falcon:e,navigation:t,isInitialized:r,cachedCategories:s,refreshCategories:i},children:_.jsx(Qb,{children:_.jsx(VS,{})})})}):_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:_.jsxs("div",{className:"text-center",children:[_.jsx(Fs,{style:{fontSize:"2rem"}}),_.jsx("p",{className:"mt-4 text-gray-600",children:"Initializing application..."})]})})}const af=document.querySelector("#app");af?Nu.createRoot(af).render(_.jsx(FS,{})):console.error("Could not find #app element");
