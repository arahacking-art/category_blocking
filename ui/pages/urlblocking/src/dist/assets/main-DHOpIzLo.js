var fv=Object.defineProperty;var mv=(e,t,r)=>t in e?fv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var G=(e,t,r)=>mv(e,typeof t!="symbol"?t+"":t,r);function gv(e,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(s,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function vv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sf={exports:{}},Xa={},of={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cn=Symbol.for("react.element"),yv=Symbol.for("react.portal"),bv=Symbol.for("react.fragment"),wv=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),kv=Symbol.for("react.context"),Cv=Symbol.for("react.forward_ref"),Sv=Symbol.for("react.suspense"),Ev=Symbol.for("react.memo"),$v=Symbol.for("react.lazy"),Ud=Symbol.iterator;function zv(e){return e===null||typeof e!="object"?null:(e=Ud&&e[Ud]||e["@@iterator"],typeof e=="function"?e:null)}var nf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},af=Object.assign,lf={};function ji(e,t,r){this.props=e,this.context=t,this.refs=lf,this.updater=r||nf}ji.prototype.isReactComponent={};ji.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cf(){}cf.prototype=ji.prototype;function Tu(e,t,r){this.props=e,this.context=t,this.refs=lf,this.updater=r||nf}var Pu=Tu.prototype=new cf;Pu.constructor=Tu;af(Pu,ji.prototype);Pu.isPureReactComponent=!0;var Hd=Array.isArray,uf=Object.prototype.hasOwnProperty,Nu={current:null},df={key:!0,ref:!0,__self:!0,__source:!0};function hf(e,t,r){var s,i={},o=null,n=null;if(t!=null)for(s in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(o=""+t.key),t)uf.call(t,s)&&!df.hasOwnProperty(s)&&(i[s]=t[s]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(s in a=e.defaultProps,a)i[s]===void 0&&(i[s]=a[s]);return{$$typeof:cn,type:e,key:o,ref:n,props:i,_owner:Nu.current}}function Av(e,t){return{$$typeof:cn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===cn}function Tv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Wd=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tv(""+e.key):t.toString(36)}function Xn(e,t,r,s,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(o){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case cn:case yv:n=!0}}if(n)return n=e,i=i(n),e=s===""?"."+El(n,0):s,Hd(i)?(r="",e!=null&&(r=e.replace(Wd,"$&/")+"/"),Xn(i,t,r,"",function(u){return u})):i!=null&&(Lu(i)&&(i=Av(i,r+(!i.key||n&&n.key===i.key?"":(""+i.key).replace(Wd,"$&/")+"/")+e)),t.push(i)),1;if(n=0,s=s===""?".":s+":",Hd(e))for(var a=0;a<e.length;a++){o=e[a];var l=s+El(o,a);n+=Xn(o,t,r,l,i)}else if(l=zv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=s+El(o,a++),n+=Xn(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function kn(e,t,r){if(e==null)return e;var s=[],i=0;return Xn(e,s,"","",function(o){return t.call(r,o,i++)}),s}function Pv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Yn={transition:null},Nv={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Yn,ReactCurrentOwner:Nu};function pf(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:kn,forEach:function(e,t,r){kn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return kn(e,function(){t++}),t},toArray:function(e){return kn(e,function(t){return t})||[]},only:function(e){if(!Lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=ji;Y.Fragment=bv;Y.Profiler=xv;Y.PureComponent=Tu;Y.StrictMode=wv;Y.Suspense=Sv;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv;Y.act=pf;Y.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=af({},e.props),i=e.key,o=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,n=Nu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)uf.call(t,l)&&!df.hasOwnProperty(l)&&(s[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];s.children=a}return{$$typeof:cn,type:e.type,key:i,ref:o,props:s,_owner:n}};Y.createContext=function(e){return e={$$typeof:kv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_v,_context:e},e.Consumer=e};Y.createElement=hf;Y.createFactory=function(e){var t=hf.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Cv,render:e}};Y.isValidElement=Lu;Y.lazy=function(e){return{$$typeof:$v,_payload:{_status:-1,_result:e},_init:Pv}};Y.memo=function(e,t){return{$$typeof:Ev,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Yn.transition;Yn.transition={};try{e()}finally{Yn.transition=t}};Y.unstable_act=pf;Y.useCallback=function(e,t){return mt.current.useCallback(e,t)};Y.useContext=function(e){return mt.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};Y.useEffect=function(e,t){return mt.current.useEffect(e,t)};Y.useId=function(){return mt.current.useId()};Y.useImperativeHandle=function(e,t,r){return mt.current.useImperativeHandle(e,t,r)};Y.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return mt.current.useMemo(e,t)};Y.useReducer=function(e,t,r){return mt.current.useReducer(e,t,r)};Y.useRef=function(e){return mt.current.useRef(e)};Y.useState=function(e){return mt.current.useState(e)};Y.useSyncExternalStore=function(e,t,r){return mt.current.useSyncExternalStore(e,t,r)};Y.useTransition=function(){return mt.current.useTransition()};Y.version="18.3.1";of.exports=Y;var E=of.exports;const ff=vv(E),j=gv({__proto__:null,default:ff},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv=E,Mv=Symbol.for("react.element"),Iv=Symbol.for("react.fragment"),Rv=Object.prototype.hasOwnProperty,Ov=Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dv={key:!0,ref:!0,__self:!0,__source:!0};function mf(e,t,r){var s,i={},o=null,n=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(n=t.ref);for(s in t)Rv.call(t,s)&&!Dv.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:Mv,type:e,key:o,ref:n,props:i,_owner:Ov.current}}Xa.Fragment=Iv;Xa.jsx=mf;Xa.jsxs=mf;sf.exports=Xa;var _=sf.exports,gf={exports:{}},Dt={},vf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,B){var Q=P.length;P.push(B);e:for(;0<Q;){var D=Q-1>>>1,te=P[D];if(0<i(te,B))P[D]=B,P[Q]=te,Q=D;else break e}}function r(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var B=P[0],Q=P.pop();if(Q!==B){P[0]=Q;e:for(var D=0,te=P.length,Re=te>>>1;D<Re;){var _e=2*(D+1)-1,yt=P[_e],ve=_e+1,Le=P[ve];if(0>i(yt,Q))ve<te&&0>i(Le,yt)?(P[D]=Le,P[ve]=Q,D=ve):(P[D]=yt,P[_e]=Q,D=_e);else if(ve<te&&0>i(Le,Q))P[D]=Le,P[ve]=Q,D=ve;else break e}}return B}function i(P,B){var Q=P.sortIndex-B.sortIndex;return Q!==0?Q:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var n=Date,a=n.now();e.unstable_now=function(){return n.now()-a}}var l=[],u=[],h=1,d=null,p=3,g=!1,v=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var B=r(u);B!==null;){if(B.callback===null)s(u);else if(B.startTime<=P)s(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=r(u)}}function w(P){if(x=!1,y(P),!v)if(r(l)!==null)v=!0,O(k);else{var B=r(u);B!==null&&re(w,B.startTime-P)}}function k(P,B){v=!1,x&&(x=!1,b(T),T=-1),g=!0;var Q=p;try{for(y(B),d=r(l);d!==null&&(!(d.expirationTime>B)||P&&!ee());){var D=d.callback;if(typeof D=="function"){d.callback=null,p=d.priorityLevel;var te=D(d.expirationTime<=B);B=e.unstable_now(),typeof te=="function"?d.callback=te:d===r(l)&&s(l),y(B)}else s(l);d=r(l)}if(d!==null)var Re=!0;else{var _e=r(u);_e!==null&&re(w,_e.startTime-B),Re=!1}return Re}finally{d=null,p=Q,g=!1}}var S=!1,$=null,T=-1,M=5,z=-1;function ee(){return!(e.unstable_now()-z<M)}function pe(){if($!==null){var P=e.unstable_now();z=P;var B=!0;try{B=$(!0,P)}finally{B?de():(S=!1,$=null)}}else S=!1}var de;if(typeof m=="function")de=function(){m(pe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Ie=ce.port2;ce.port1.onmessage=pe,de=function(){Ie.postMessage(null)}}else de=function(){C(pe,0)};function O(P){$=P,S||(S=!0,de())}function re(P,B){T=C(function(){P(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,O(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var B=3;break;default:B=p}var Q=p;p=B;try{return P()}finally{p=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Q=p;p=P;try{return B()}finally{p=Q}},e.unstable_scheduleCallback=function(P,B,Q){var D=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?D+Q:D):Q=D,P){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Q+te,P={id:h++,callback:B,priorityLevel:P,startTime:Q,expirationTime:te,sortIndex:-1},Q>D?(P.sortIndex=Q,t(u,P),r(l)===null&&P===r(u)&&(x?(b(T),T=-1):x=!0,re(w,Q-D))):(P.sortIndex=te,t(l,P),v||g||(v=!0,O(k))),P},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(P){var B=p;return function(){var Q=p;p=B;try{return P.apply(this,arguments)}finally{p=Q}}}})(yf);vf.exports=yf;var Vv=vf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=E,Ot=Vv;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bf=new Set,Do={};function Xs(e,t){Pi(e,t),Pi(e+"Capture",t)}function Pi(e,t){for(Do[e]=t,e=0;e<t.length;e++)bf.add(t[e])}var Mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=Object.prototype.hasOwnProperty,Bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gd={},Kd={};function jv(e){return bc.call(Kd,e)?!0:bc.call(Gd,e)?!1:Bv.test(e)?Kd[e]=!0:(Gd[e]=!0,!1)}function Uv(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hv(e,t,r,s){if(t===null||typeof t>"u"||Uv(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,r,s,i,o,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=n}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mu=/[\-:]([a-z])/g;function Iu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Mu,Iu);ot[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Mu,Iu);ot[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Mu,Iu);ot[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ru(e,t,r,s){var i=ot.hasOwnProperty(t)?ot[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hv(t,r,i,s)&&(r=null),s||i===null?jv(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Dr=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cn=Symbol.for("react.element"),ui=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),wf=Symbol.for("react.provider"),xf=Symbol.for("react.context"),Du=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),_c=Symbol.for("react.suspense_list"),Vu=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),_f=Symbol.for("react.offscreen"),qd=Symbol.iterator;function eo(e){return e===null||typeof e!="object"?null:(e=qd&&e[qd]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,$l;function go(e){if($l===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||""}return`
`+$l+e}var zl=!1;function Al(e,t){if(!e||zl)return"";zl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=s.stack.split(`
`),n=i.length-1,a=o.length-1;1<=n&&0<=a&&i[n]!==o[a];)a--;for(;1<=n&&0<=a;n--,a--)if(i[n]!==o[a]){if(n!==1||a!==1)do if(n--,a--,0>a||i[n]!==o[a]){var l=`
`+i[n].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=n&&0<=a);break}}}finally{zl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?go(e):""}function Wv(e){switch(e.tag){case 5:return go(e.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return e=Al(e.type,!1),e;case 11:return e=Al(e.type.render,!1),e;case 1:return e=Al(e.type,!0),e;default:return""}}function kc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case di:return"Fragment";case ui:return"Portal";case wc:return"Profiler";case Ou:return"StrictMode";case xc:return"Suspense";case _c:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xf:return(e.displayName||"Context")+".Consumer";case wf:return(e._context.displayName||"Context")+".Provider";case Du:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vu:return t=e.displayName||null,t!==null?t:kc(e.type)||"Memo";case Gr:t=e._payload,e=e._init;try{return kc(e(t))}catch{}}return null}function Gv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(t);case 8:return t===Ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ds(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kv(e){var t=kf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(n){s=""+n,o.call(this,n)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(n){s=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sn(e){e._valueTracker||(e._valueTracker=Kv(e))}function Cf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=kf(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cc(e,t){var r=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Qd(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=ds(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sf(e,t){t=t.checked,t!=null&&Ru(e,"checked",t,!1)}function Sc(e,t){Sf(e,t);var r=ds(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ec(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ec(e,t.type,ds(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xd(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ec(e,t,r){(t!=="number"||ha(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vo=Array.isArray;function ki(e,t,r,s){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&s&&(e[r].defaultSelected=!0)}else{for(r=""+ds(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $c(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yd(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(vo(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ds(r)}}function Ef(e,t){var r=ds(t.value),s=ds(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Zd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $f(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$f(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,zf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qv=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(e){qv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wo[t]=wo[e]})});function Af(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||wo.hasOwnProperty(e)&&wo[e]?(""+t).trim():t+"px"}function Tf(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=Af(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,i):e[r]=i}}var Qv=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(e,t){if(t){if(Qv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Tc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pc=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nc=null,Ci=null,Si=null;function Jd(e){if(e=hn(e)){if(typeof Nc!="function")throw Error(N(280));var t=e.stateNode;t&&(t=tl(t),Nc(e.stateNode,e.type,t))}}function Pf(e){Ci?Si?Si.push(e):Si=[e]:Ci=e}function Nf(){if(Ci){var e=Ci,t=Si;if(Si=Ci=null,Jd(e),t)for(e=0;e<t.length;e++)Jd(t[e])}}function Lf(e,t){return e(t)}function Mf(){}var Tl=!1;function If(e,t,r){if(Tl)return e(t,r);Tl=!0;try{return Lf(e,t,r)}finally{Tl=!1,(Ci!==null||Si!==null)&&(Mf(),Nf())}}function Fo(e,t){var r=e.stateNode;if(r===null)return null;var s=tl(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var Lc=!1;if(Mr)try{var to={};Object.defineProperty(to,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Lc=!1}function Xv(e,t,r,s,i,o,n,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(h){this.onError(h)}}var xo=!1,pa=null,fa=!1,Mc=null,Yv={onError:function(e){xo=!0,pa=e}};function Zv(e,t,r,s,i,o,n,a,l){xo=!1,pa=null,Xv.apply(Yv,arguments)}function Jv(e,t,r,s,i,o,n,a,l){if(Zv.apply(this,arguments),xo){if(xo){var u=pa;xo=!1,pa=null}else throw Error(N(198));fa||(fa=!0,Mc=u)}}function Ys(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eh(e){if(Ys(e)!==e)throw Error(N(188))}function e0(e){var t=e.alternate;if(!t){if(t=Ys(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,s=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return eh(i),e;if(o===s)return eh(i),t;o=o.sibling}throw Error(N(188))}if(r.return!==s.return)r=i,s=o;else{for(var n=!1,a=i.child;a;){if(a===r){n=!0,r=i,s=o;break}if(a===s){n=!0,s=i,r=o;break}a=a.sibling}if(!n){for(a=o.child;a;){if(a===r){n=!0,r=o,s=i;break}if(a===s){n=!0,s=o,r=i;break}a=a.sibling}if(!n)throw Error(N(189))}}if(r.alternate!==s)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function Of(e){return e=e0(e),e!==null?Df(e):null}function Df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Df(e);if(t!==null)return t;e=e.sibling}return null}var Vf=Ot.unstable_scheduleCallback,th=Ot.unstable_cancelCallback,t0=Ot.unstable_shouldYield,r0=Ot.unstable_requestPaint,Me=Ot.unstable_now,s0=Ot.unstable_getCurrentPriorityLevel,Bu=Ot.unstable_ImmediatePriority,Ff=Ot.unstable_UserBlockingPriority,ma=Ot.unstable_NormalPriority,i0=Ot.unstable_LowPriority,Bf=Ot.unstable_IdlePriority,Ya=null,gr=null;function o0(e){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(Ya,e,void 0,(e.current.flags&128)===128)}catch{}}var or=Math.clz32?Math.clz32:l0,n0=Math.log,a0=Math.LN2;function l0(e){return e>>>=0,e===0?32:31-(n0(e)/a0|0)|0}var $n=64,zn=4194304;function yo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ga(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,i=e.suspendedLanes,o=e.pingedLanes,n=r&268435455;if(n!==0){var a=n&~i;a!==0?s=yo(a):(o&=n,o!==0&&(s=yo(o)))}else n=r&~i,n!==0?s=yo(n):o!==0&&(s=yo(o));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-or(t),i=1<<r,s|=e[r],t&=~i;return s}function c0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var n=31-or(o),a=1<<n,l=i[n];l===-1?(!(a&r)||a&s)&&(i[n]=c0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ic(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jf(){var e=$n;return $n<<=1,!($n&4194240)&&($n=64),e}function Pl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function un(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-or(t),e[t]=r}function d0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-or(r),o=1<<i;t[i]=0,s[i]=-1,e[i]=-1,r&=~o}}function ju(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-or(r),i=1<<s;i&t|e[s]&t&&(e[s]|=t),r&=~i}}var ue=0;function Uf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hf,Uu,Wf,Gf,Kf,Rc=!1,An=[],ts=null,rs=null,ss=null,Bo=new Map,jo=new Map,qr=[],h0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(e,t){switch(e){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":Bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(t.pointerId)}}function ro(e,t,r,s,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[i]},t!==null&&(t=hn(t),t!==null&&Uu(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function p0(e,t,r,s,i){switch(t){case"focusin":return ts=ro(ts,e,t,r,s,i),!0;case"dragenter":return rs=ro(rs,e,t,r,s,i),!0;case"mouseover":return ss=ro(ss,e,t,r,s,i),!0;case"pointerover":var o=i.pointerId;return Bo.set(o,ro(Bo.get(o)||null,e,t,r,s,i)),!0;case"gotpointercapture":return o=i.pointerId,jo.set(o,ro(jo.get(o)||null,e,t,r,s,i)),!0}return!1}function qf(e){var t=Ts(e.target);if(t!==null){var r=Ys(t);if(r!==null){if(t=r.tag,t===13){if(t=Rf(r),t!==null){e.blockedOn=t,Kf(e.priority,function(){Wf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Oc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Pc=s,r.target.dispatchEvent(s),Pc=null}else return t=hn(r),t!==null&&Uu(t),e.blockedOn=r,!1;t.shift()}return!0}function sh(e,t,r){Zn(e)&&r.delete(t)}function f0(){Rc=!1,ts!==null&&Zn(ts)&&(ts=null),rs!==null&&Zn(rs)&&(rs=null),ss!==null&&Zn(ss)&&(ss=null),Bo.forEach(sh),jo.forEach(sh)}function so(e,t){e.blockedOn===t&&(e.blockedOn=null,Rc||(Rc=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,f0)))}function Uo(e){function t(i){return so(i,e)}if(0<An.length){so(An[0],e);for(var r=1;r<An.length;r++){var s=An[r];s.blockedOn===e&&(s.blockedOn=null)}}for(ts!==null&&so(ts,e),rs!==null&&so(rs,e),ss!==null&&so(ss,e),Bo.forEach(t),jo.forEach(t),r=0;r<qr.length;r++)s=qr[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<qr.length&&(r=qr[0],r.blockedOn===null);)qf(r),r.blockedOn===null&&qr.shift()}var Ei=Dr.ReactCurrentBatchConfig,va=!0;function m0(e,t,r,s){var i=ue,o=Ei.transition;Ei.transition=null;try{ue=1,Hu(e,t,r,s)}finally{ue=i,Ei.transition=o}}function g0(e,t,r,s){var i=ue,o=Ei.transition;Ei.transition=null;try{ue=4,Hu(e,t,r,s)}finally{ue=i,Ei.transition=o}}function Hu(e,t,r,s){if(va){var i=Oc(e,t,r,s);if(i===null)Bl(e,t,s,ya,r),rh(e,s);else if(p0(i,e,t,r,s))s.stopPropagation();else if(rh(e,s),t&4&&-1<h0.indexOf(e)){for(;i!==null;){var o=hn(i);if(o!==null&&Hf(o),o=Oc(e,t,r,s),o===null&&Bl(e,t,s,ya,r),o===i)break;i=o}i!==null&&s.stopPropagation()}else Bl(e,t,s,null,r)}}var ya=null;function Oc(e,t,r,s){if(ya=null,e=Fu(s),e=Ts(e),e!==null)if(t=Ys(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Rf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ya=e,null}function Qf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s0()){case Bu:return 1;case Ff:return 4;case ma:case i0:return 16;case Bf:return 536870912;default:return 16}default:return 16}}var Yr=null,Wu=null,Jn=null;function Xf(){if(Jn)return Jn;var e,t=Wu,r=t.length,s,i="value"in Yr?Yr.value:Yr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var n=r-e;for(s=1;s<=n&&t[r-s]===i[o-s];s++);return Jn=i.slice(e,1<s?1-s:void 0)}function ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function ih(){return!1}function Vt(e){function t(r,s,i,o,n){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=o,this.target=n,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Tn:ih,this.isPropagationStopped=ih,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gu=Vt(Ui),dn=Ee({},Ui,{view:0,detail:0}),v0=Vt(dn),Nl,Ll,io,Za=Ee({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(Nl=e.screenX-io.screenX,Ll=e.screenY-io.screenY):Ll=Nl=0,io=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),oh=Vt(Za),y0=Ee({},Za,{dataTransfer:0}),b0=Vt(y0),w0=Ee({},dn,{relatedTarget:0}),Ml=Vt(w0),x0=Ee({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=Vt(x0),k0=Ee({},Ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C0=Vt(k0),S0=Ee({},Ui,{data:0}),nh=Vt(S0),E0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=z0[e])?!!t[e]:!1}function Ku(){return A0}var T0=Ee({},dn,{key:function(e){if(e.key){var t=E0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ku,charCode:function(e){return e.type==="keypress"?ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P0=Vt(T0),N0=Ee({},Za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=Vt(N0),L0=Ee({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ku}),M0=Vt(L0),I0=Ee({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=Vt(I0),O0=Ee({},Za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=Vt(O0),V0=[9,13,27,32],qu=Mr&&"CompositionEvent"in window,_o=null;Mr&&"documentMode"in document&&(_o=document.documentMode);var F0=Mr&&"TextEvent"in window&&!_o,Yf=Mr&&(!qu||_o&&8<_o&&11>=_o),lh=" ",ch=!1;function Zf(e,t){switch(e){case"keyup":return V0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hi=!1;function B0(e,t){switch(e){case"compositionend":return Jf(t);case"keypress":return t.which!==32?null:(ch=!0,lh);case"textInput":return e=t.data,e===lh&&ch?null:e;default:return null}}function j0(e,t){if(hi)return e==="compositionend"||!qu&&Zf(e,t)?(e=Xf(),Jn=Wu=Yr=null,hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yf&&t.locale!=="ko"?null:t.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U0[e.type]:t==="textarea"}function em(e,t,r,s){Pf(s),t=ba(t,"onChange"),0<t.length&&(r=new Gu("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var ko=null,Ho=null;function H0(e){dm(e,0)}function Ja(e){var t=mi(e);if(Cf(t))return e}function W0(e,t){if(e==="change")return t}var tm=!1;if(Mr){var Il;if(Mr){var Rl="oninput"in document;if(!Rl){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),Rl=typeof dh.oninput=="function"}Il=Rl}else Il=!1;tm=Il&&(!document.documentMode||9<document.documentMode)}function hh(){ko&&(ko.detachEvent("onpropertychange",rm),Ho=ko=null)}function rm(e){if(e.propertyName==="value"&&Ja(Ho)){var t=[];em(t,Ho,e,Fu(e)),If(H0,t)}}function G0(e,t,r){e==="focusin"?(hh(),ko=t,Ho=r,ko.attachEvent("onpropertychange",rm)):e==="focusout"&&hh()}function K0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ja(Ho)}function q0(e,t){if(e==="click")return Ja(t)}function Q0(e,t){if(e==="input"||e==="change")return Ja(t)}function X0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ar=typeof Object.is=="function"?Object.is:X0;function Wo(e,t){if(ar(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!bc.call(t,i)||!ar(e[i],t[i]))return!1}return!0}function ph(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fh(e,t){var r=ph(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ph(r)}}function sm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function im(){for(var e=window,t=ha();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ha(e.document)}return t}function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y0(e){var t=im(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&sm(r.ownerDocument.documentElement,r)){if(s!==null&&Qu(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(s.start,i);s=s.end===void 0?o:Math.min(s.end,i),!e.extend&&o>s&&(i=s,s=o,o=i),i=fh(r,o);var n=fh(r,s);i&&n&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Z0=Mr&&"documentMode"in document&&11>=document.documentMode,pi=null,Dc=null,Co=null,Vc=!1;function mh(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vc||pi==null||pi!==ha(s)||(s=pi,"selectionStart"in s&&Qu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Co&&Wo(Co,s)||(Co=s,s=ba(Dc,"onSelect"),0<s.length&&(t=new Gu("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=pi)))}function Pn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var fi={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionend:Pn("Transition","TransitionEnd")},Ol={},om={};Mr&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function el(e){if(Ol[e])return Ol[e];if(!fi[e])return e;var t=fi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in om)return Ol[e]=t[r];return e}var nm=el("animationend"),am=el("animationiteration"),lm=el("animationstart"),cm=el("transitionend"),um=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fs(e,t){um.set(e,t),Xs(t,[e])}for(var Dl=0;Dl<gh.length;Dl++){var Vl=gh[Dl],J0=Vl.toLowerCase(),ey=Vl[0].toUpperCase()+Vl.slice(1);fs(J0,"on"+ey)}fs(nm,"onAnimationEnd");fs(am,"onAnimationIteration");fs(lm,"onAnimationStart");fs("dblclick","onDoubleClick");fs("focusin","onFocus");fs("focusout","onBlur");fs(cm,"onTransitionEnd");Pi("onMouseEnter",["mouseout","mouseover"]);Pi("onMouseLeave",["mouseout","mouseover"]);Pi("onPointerEnter",["pointerout","pointerover"]);Pi("onPointerLeave",["pointerout","pointerover"]);Xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function vh(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Jv(s,t,void 0,e),e.currentTarget=null}function dm(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],i=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var n=s.length-1;0<=n;n--){var a=s[n],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;vh(i,a,u),o=l}else for(n=0;n<s.length;n++){if(a=s[n],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;vh(i,a,u),o=l}}}if(fa)throw e=Mc,fa=!1,Mc=null,e}function me(e,t){var r=t[Hc];r===void 0&&(r=t[Hc]=new Set);var s=e+"__bubble";r.has(s)||(hm(t,e,2,!1),r.add(s))}function Fl(e,t,r){var s=0;t&&(s|=4),hm(r,e,s,t)}var Nn="_reactListening"+Math.random().toString(36).slice(2);function Go(e){if(!e[Nn]){e[Nn]=!0,bf.forEach(function(r){r!=="selectionchange"&&(ty.has(r)||Fl(r,!1,e),Fl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nn]||(t[Nn]=!0,Fl("selectionchange",!1,t))}}function hm(e,t,r,s){switch(Qf(t)){case 1:var i=m0;break;case 4:i=g0;break;default:i=Hu}r=i.bind(null,t,r,e),i=void 0,!Lc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Bl(e,t,r,s,i){var o=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var n=s.tag;if(n===3||n===4){var a=s.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(n===4)for(n=s.return;n!==null;){var l=n.tag;if((l===3||l===4)&&(l=n.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;n=n.return}for(;a!==null;){if(n=Ts(a),n===null)return;if(l=n.tag,l===5||l===6){s=o=n;continue e}a=a.parentNode}}s=s.return}If(function(){var u=o,h=Fu(r),d=[];e:{var p=um.get(e);if(p!==void 0){var g=Gu,v=e;switch(e){case"keypress":if(ea(r)===0)break e;case"keydown":case"keyup":g=P0;break;case"focusin":v="focus",g=Ml;break;case"focusout":v="blur",g=Ml;break;case"beforeblur":case"afterblur":g=Ml;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=M0;break;case nm:case am:case lm:g=_0;break;case cm:g=R0;break;case"scroll":g=v0;break;case"wheel":g=D0;break;case"copy":case"cut":case"paste":g=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ah}var x=(t&4)!==0,C=!x&&e==="scroll",b=x?p!==null?p+"Capture":null:p;x=[];for(var m=u,y;m!==null;){y=m;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,b!==null&&(w=Fo(m,b),w!=null&&x.push(Ko(m,w,y)))),C)break;m=m.return}0<x.length&&(p=new g(p,v,null,r,h),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&r!==Pc&&(v=r.relatedTarget||r.fromElement)&&(Ts(v)||v[Ir]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=u,v=v?Ts(v):null,v!==null&&(C=Ys(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=oh,w="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=ah,w="onPointerLeave",b="onPointerEnter",m="pointer"),C=g==null?p:mi(g),y=v==null?p:mi(v),p=new x(w,m+"leave",g,r,h),p.target=C,p.relatedTarget=y,w=null,Ts(h)===u&&(x=new x(b,m+"enter",v,r,h),x.target=y,x.relatedTarget=C,w=x),C=w,g&&v)t:{for(x=g,b=v,m=0,y=x;y;y=ii(y))m++;for(y=0,w=b;w;w=ii(w))y++;for(;0<m-y;)x=ii(x),m--;for(;0<y-m;)b=ii(b),y--;for(;m--;){if(x===b||b!==null&&x===b.alternate)break t;x=ii(x),b=ii(b)}x=null}else x=null;g!==null&&yh(d,p,g,x,!1),v!==null&&C!==null&&yh(d,C,v,x,!0)}}e:{if(p=u?mi(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=W0;else if(uh(p))if(tm)k=Q0;else{k=K0;var S=G0}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=q0);if(k&&(k=k(e,u))){em(d,k,r,h);break e}S&&S(e,p,u),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Ec(p,"number",p.value)}switch(S=u?mi(u):window,e){case"focusin":(uh(S)||S.contentEditable==="true")&&(pi=S,Dc=u,Co=null);break;case"focusout":Co=Dc=pi=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,mh(d,r,h);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":mh(d,r,h)}var $;if(qu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else hi?Zf(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(Yf&&r.locale!=="ko"&&(hi||T!=="onCompositionStart"?T==="onCompositionEnd"&&hi&&($=Xf()):(Yr=h,Wu="value"in Yr?Yr.value:Yr.textContent,hi=!0)),S=ba(u,T),0<S.length&&(T=new nh(T,e,null,r,h),d.push({event:T,listeners:S}),$?T.data=$:($=Jf(r),$!==null&&(T.data=$)))),($=F0?B0(e,r):j0(e,r))&&(u=ba(u,"onBeforeInput"),0<u.length&&(h=new nh("onBeforeInput","beforeinput",null,r,h),d.push({event:h,listeners:u}),h.data=$))}dm(d,t)})}function Ko(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ba(e,t){for(var r=t+"Capture",s=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fo(e,r),o!=null&&s.unshift(Ko(e,o,i)),o=Fo(e,t),o!=null&&s.push(Ko(e,o,i))),e=e.return}return s}function ii(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yh(e,t,r,s,i){for(var o=t._reactName,n=[];r!==null&&r!==s;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===s)break;a.tag===5&&u!==null&&(a=u,i?(l=Fo(r,o),l!=null&&n.unshift(Ko(r,l,a))):i||(l=Fo(r,o),l!=null&&n.push(Ko(r,l,a)))),r=r.return}n.length!==0&&e.push({event:t,listeners:n})}var ry=/\r\n?/g,sy=/\u0000|\uFFFD/g;function bh(e){return(typeof e=="string"?e:""+e).replace(ry,`
`).replace(sy,"")}function Ln(e,t,r){if(t=bh(t),bh(e)!==t&&r)throw Error(N(425))}function wa(){}var Fc=null,Bc=null;function jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(e){return wh.resolve(null).then(e).catch(ny)}:Uc;function ny(e){setTimeout(function(){throw e})}function jl(e,t){var r=t,s=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){e.removeChild(i),Uo(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);Uo(t)}function is(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Hi=Math.random().toString(36).slice(2),mr="__reactFiber$"+Hi,qo="__reactProps$"+Hi,Ir="__reactContainer$"+Hi,Hc="__reactEvents$"+Hi,ay="__reactListeners$"+Hi,ly="__reactHandles$"+Hi;function Ts(e){var t=e[mr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ir]||r[mr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=xh(e);e!==null;){if(r=e[mr])return r;e=xh(e)}return t}e=r,r=e.parentNode}return null}function hn(e){return e=e[mr]||e[Ir],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function tl(e){return e[qo]||null}var Wc=[],gi=-1;function ms(e){return{current:e}}function ge(e){0>gi||(e.current=Wc[gi],Wc[gi]=null,gi--)}function fe(e,t){gi++,Wc[gi]=e.current,e.current=t}var hs={},dt=ms(hs),_t=ms(!1),Vs=hs;function Ni(e,t){var r=e.type.contextTypes;if(!r)return hs;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function kt(e){return e=e.childContextTypes,e!=null}function xa(){ge(_t),ge(dt)}function _h(e,t,r){if(dt.current!==hs)throw Error(N(168));fe(dt,t),fe(_t,r)}function pm(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(N(108,Gv(e)||"Unknown",i));return Ee({},r,s)}function _a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hs,Vs=dt.current,fe(dt,e),fe(_t,_t.current),!0}function kh(e,t,r){var s=e.stateNode;if(!s)throw Error(N(169));r?(e=pm(e,t,Vs),s.__reactInternalMemoizedMergedChildContext=e,ge(_t),ge(dt),fe(dt,e)):ge(_t),fe(_t,r)}var Sr=null,rl=!1,Ul=!1;function fm(e){Sr===null?Sr=[e]:Sr.push(e)}function cy(e){rl=!0,fm(e)}function gs(){if(!Ul&&Sr!==null){Ul=!0;var e=0,t=ue;try{var r=Sr;for(ue=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Sr=null,rl=!1}catch(i){throw Sr!==null&&(Sr=Sr.slice(e+1)),Vf(Bu,gs),i}finally{ue=t,Ul=!1}}return null}var vi=[],yi=0,ka=null,Ca=0,Ut=[],Ht=0,Fs=null,zr=1,Ar="";function Es(e,t){vi[yi++]=Ca,vi[yi++]=ka,ka=e,Ca=t}function mm(e,t,r){Ut[Ht++]=zr,Ut[Ht++]=Ar,Ut[Ht++]=Fs,Fs=e;var s=zr;e=Ar;var i=32-or(s)-1;s&=~(1<<i),r+=1;var o=32-or(t)+i;if(30<o){var n=i-i%5;o=(s&(1<<n)-1).toString(32),s>>=n,i-=n,zr=1<<32-or(t)+i|r<<i|s,Ar=o+e}else zr=1<<o|r<<i|s,Ar=e}function Xu(e){e.return!==null&&(Es(e,1),mm(e,1,0))}function Yu(e){for(;e===ka;)ka=vi[--yi],vi[yi]=null,Ca=vi[--yi],vi[yi]=null;for(;e===Fs;)Fs=Ut[--Ht],Ut[Ht]=null,Ar=Ut[--Ht],Ut[Ht]=null,zr=Ut[--Ht],Ut[Ht]=null}var Rt=null,Mt=null,ye=!1,ir=null;function gm(e,t){var r=Wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ch(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,Mt=is(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,Mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Fs!==null?{id:zr,overflow:Ar}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Rt=e,Mt=null,!0):!1;default:return!1}}function Gc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kc(e){if(ye){var t=Mt;if(t){var r=t;if(!Ch(e,t)){if(Gc(e))throw Error(N(418));t=is(r.nextSibling);var s=Rt;t&&Ch(e,t)?gm(s,r):(e.flags=e.flags&-4097|2,ye=!1,Rt=e)}}else{if(Gc(e))throw Error(N(418));e.flags=e.flags&-4097|2,ye=!1,Rt=e}}}function Sh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function Mn(e){if(e!==Rt)return!1;if(!ye)return Sh(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jc(e.type,e.memoizedProps)),t&&(t=Mt)){if(Gc(e))throw vm(),Error(N(418));for(;t;)gm(e,t),t=is(t.nextSibling)}if(Sh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Mt=is(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Mt=null}}else Mt=Rt?is(e.stateNode.nextSibling):null;return!0}function vm(){for(var e=Mt;e;)e=is(e.nextSibling)}function Li(){Mt=Rt=null,ye=!1}function Zu(e){ir===null?ir=[e]:ir.push(e)}var uy=Dr.ReactCurrentBatchConfig;function oo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var s=r.stateNode}if(!s)throw Error(N(147,e));var i=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(n){var a=i.refs;n===null?delete a[o]:a[o]=n},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function In(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Eh(e){var t=e._init;return t(e._payload)}function ym(e){function t(b,m){if(e){var y=b.deletions;y===null?(b.deletions=[m],b.flags|=16):y.push(m)}}function r(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function s(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function i(b,m){return b=ls(b,m),b.index=0,b.sibling=null,b}function o(b,m,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<m?(b.flags|=2,m):y):(b.flags|=2,m)):(b.flags|=1048576,m)}function n(b){return e&&b.alternate===null&&(b.flags|=2),b}function a(b,m,y,w){return m===null||m.tag!==6?(m=Xl(y,b.mode,w),m.return=b,m):(m=i(m,y),m.return=b,m)}function l(b,m,y,w){var k=y.type;return k===di?h(b,m,y.props.children,w,y.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gr&&Eh(k)===m.type)?(w=i(m,y.props),w.ref=oo(b,m,y),w.return=b,w):(w=aa(y.type,y.key,y.props,null,b.mode,w),w.ref=oo(b,m,y),w.return=b,w)}function u(b,m,y,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Yl(y,b.mode,w),m.return=b,m):(m=i(m,y.children||[]),m.return=b,m)}function h(b,m,y,w,k){return m===null||m.tag!==7?(m=Rs(y,b.mode,w,k),m.return=b,m):(m=i(m,y),m.return=b,m)}function d(b,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Xl(""+m,b.mode,y),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cn:return y=aa(m.type,m.key,m.props,null,b.mode,y),y.ref=oo(b,null,m),y.return=b,y;case ui:return m=Yl(m,b.mode,y),m.return=b,m;case Gr:var w=m._init;return d(b,w(m._payload),y)}if(vo(m)||eo(m))return m=Rs(m,b.mode,y,null),m.return=b,m;In(b,m)}return null}function p(b,m,y,w){var k=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:a(b,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cn:return y.key===k?l(b,m,y,w):null;case ui:return y.key===k?u(b,m,y,w):null;case Gr:return k=y._init,p(b,m,k(y._payload),w)}if(vo(y)||eo(y))return k!==null?null:h(b,m,y,w,null);In(b,y)}return null}function g(b,m,y,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(y)||null,a(m,b,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Cn:return b=b.get(w.key===null?y:w.key)||null,l(m,b,w,k);case ui:return b=b.get(w.key===null?y:w.key)||null,u(m,b,w,k);case Gr:var S=w._init;return g(b,m,y,S(w._payload),k)}if(vo(w)||eo(w))return b=b.get(y)||null,h(m,b,w,k,null);In(m,w)}return null}function v(b,m,y,w){for(var k=null,S=null,$=m,T=m=0,M=null;$!==null&&T<y.length;T++){$.index>T?(M=$,$=null):M=$.sibling;var z=p(b,$,y[T],w);if(z===null){$===null&&($=M);break}e&&$&&z.alternate===null&&t(b,$),m=o(z,m,T),S===null?k=z:S.sibling=z,S=z,$=M}if(T===y.length)return r(b,$),ye&&Es(b,T),k;if($===null){for(;T<y.length;T++)$=d(b,y[T],w),$!==null&&(m=o($,m,T),S===null?k=$:S.sibling=$,S=$);return ye&&Es(b,T),k}for($=s(b,$);T<y.length;T++)M=g($,b,T,y[T],w),M!==null&&(e&&M.alternate!==null&&$.delete(M.key===null?T:M.key),m=o(M,m,T),S===null?k=M:S.sibling=M,S=M);return e&&$.forEach(function(ee){return t(b,ee)}),ye&&Es(b,T),k}function x(b,m,y,w){var k=eo(y);if(typeof k!="function")throw Error(N(150));if(y=k.call(y),y==null)throw Error(N(151));for(var S=k=null,$=m,T=m=0,M=null,z=y.next();$!==null&&!z.done;T++,z=y.next()){$.index>T?(M=$,$=null):M=$.sibling;var ee=p(b,$,z.value,w);if(ee===null){$===null&&($=M);break}e&&$&&ee.alternate===null&&t(b,$),m=o(ee,m,T),S===null?k=ee:S.sibling=ee,S=ee,$=M}if(z.done)return r(b,$),ye&&Es(b,T),k;if($===null){for(;!z.done;T++,z=y.next())z=d(b,z.value,w),z!==null&&(m=o(z,m,T),S===null?k=z:S.sibling=z,S=z);return ye&&Es(b,T),k}for($=s(b,$);!z.done;T++,z=y.next())z=g($,b,T,z.value,w),z!==null&&(e&&z.alternate!==null&&$.delete(z.key===null?T:z.key),m=o(z,m,T),S===null?k=z:S.sibling=z,S=z);return e&&$.forEach(function(pe){return t(b,pe)}),ye&&Es(b,T),k}function C(b,m,y,w){if(typeof y=="object"&&y!==null&&y.type===di&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Cn:e:{for(var k=y.key,S=m;S!==null;){if(S.key===k){if(k=y.type,k===di){if(S.tag===7){r(b,S.sibling),m=i(S,y.props.children),m.return=b,b=m;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gr&&Eh(k)===S.type){r(b,S.sibling),m=i(S,y.props),m.ref=oo(b,S,y),m.return=b,b=m;break e}r(b,S);break}else t(b,S);S=S.sibling}y.type===di?(m=Rs(y.props.children,b.mode,w,y.key),m.return=b,b=m):(w=aa(y.type,y.key,y.props,null,b.mode,w),w.ref=oo(b,m,y),w.return=b,b=w)}return n(b);case ui:e:{for(S=y.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){r(b,m.sibling),m=i(m,y.children||[]),m.return=b,b=m;break e}else{r(b,m);break}else t(b,m);m=m.sibling}m=Yl(y,b.mode,w),m.return=b,b=m}return n(b);case Gr:return S=y._init,C(b,m,S(y._payload),w)}if(vo(y))return v(b,m,y,w);if(eo(y))return x(b,m,y,w);In(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(r(b,m.sibling),m=i(m,y),m.return=b,b=m):(r(b,m),m=Xl(y,b.mode,w),m.return=b,b=m),n(b)):r(b,m)}return C}var Mi=ym(!0),bm=ym(!1),Sa=ms(null),Ea=null,bi=null,Ju=null;function ed(){Ju=bi=Ea=null}function td(e){var t=Sa.current;ge(Sa),e._currentValue=t}function qc(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function $i(e,t){Ea=e,Ju=bi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function Kt(e){var t=e._currentValue;if(Ju!==e)if(e={context:e,memoizedValue:t,next:null},bi===null){if(Ea===null)throw Error(N(308));bi=e,Ea.dependencies={lanes:0,firstContext:e}}else bi=bi.next=e;return t}var Ps=null;function rd(e){Ps===null?Ps=[e]:Ps.push(e)}function wm(e,t,r,s){var i=t.interleaved;return i===null?(r.next=r,rd(t)):(r.next=i.next,i.next=r),t.interleaved=r,Rr(e,s)}function Rr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Kr=!1;function sd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function os(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,se&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,Rr(e,r)}return i=s.interleaved,i===null?(t.next=t,rd(s)):(t.next=i.next,i.next=t),s.interleaved=t,Rr(e,r)}function ta(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ju(e,r)}}function $h(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var n={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=n:o=o.next=n,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function $a(e,t,r,s){var i=e.updateQueue;Kr=!1;var o=i.firstBaseUpdate,n=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,n===null?o=u:n.next=u,n=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==n&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;n=0,h=u=l=null,a=o;do{var p=a.lane,g=a.eventTime;if((s&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(p=t,g=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(g,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(g,d,p):v,p==null)break e;d=Ee({},d,p);break e;case 2:Kr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=d):h=h.next=g,n|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do n|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);js|=n,e.lanes=n,e.memoizedState=d}}function zh(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(N(191,i));i.call(s)}}}var pn={},vr=ms(pn),Qo=ms(pn),Xo=ms(pn);function Ns(e){if(e===pn)throw Error(N(174));return e}function id(e,t){switch(fe(Xo,t),fe(Qo,e),fe(vr,pn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zc(t,e)}ge(vr),fe(vr,t)}function Ii(){ge(vr),ge(Qo),ge(Xo)}function _m(e){Ns(Xo.current);var t=Ns(vr.current),r=zc(t,e.type);t!==r&&(fe(Qo,e),fe(vr,r))}function od(e){Qo.current===e&&(ge(vr),ge(Qo))}var Ce=ms(0);function za(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function nd(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var ra=Dr.ReactCurrentDispatcher,Wl=Dr.ReactCurrentBatchConfig,Bs=0,Se=null,He=null,Xe=null,Aa=!1,So=!1,Yo=0,dy=0;function lt(){throw Error(N(321))}function ad(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ar(e[r],t[r]))return!1;return!0}function ld(e,t,r,s,i,o){if(Bs=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ra.current=e===null||e.memoizedState===null?my:gy,e=r(s,i),So){o=0;do{if(So=!1,Yo=0,25<=o)throw Error(N(301));o+=1,Xe=He=null,t.updateQueue=null,ra.current=vy,e=r(s,i)}while(So)}if(ra.current=Ta,t=He!==null&&He.next!==null,Bs=0,Xe=He=Se=null,Aa=!1,t)throw Error(N(300));return e}function cd(){var e=Yo!==0;return Yo=0,e}function pr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Se.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function qt(){if(He===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Xe===null?Se.memoizedState:Xe.next;if(t!==null)Xe=t,He=e;else{if(e===null)throw Error(N(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Xe===null?Se.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Zo(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=qt(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var s=He,i=s.baseQueue,o=r.pending;if(o!==null){if(i!==null){var n=i.next;i.next=o.next,o.next=n}s.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,s=s.baseState;var a=n=null,l=null,u=o;do{var h=u.lane;if((Bs&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,n=s):l=l.next=d,Se.lanes|=h,js|=h}u=u.next}while(u!==null&&u!==o);l===null?n=s:l.next=a,ar(s,t.memoizedState)||(xt=!0),t.memoizedState=s,t.baseState=n,t.baseQueue=l,r.lastRenderedState=s}if(e=r.interleaved,e!==null){i=e;do o=i.lane,Se.lanes|=o,js|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Kl(e){var t=qt(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var s=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var n=i=i.next;do o=e(o,n.action),n=n.next;while(n!==i);ar(o,t.memoizedState)||(xt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,s]}function km(){}function Cm(e,t){var r=Se,s=qt(),i=t(),o=!ar(s.memoizedState,i);if(o&&(s.memoizedState=i,xt=!0),s=s.queue,ud($m.bind(null,r,s,e),[e]),s.getSnapshot!==t||o||Xe!==null&&Xe.memoizedState.tag&1){if(r.flags|=2048,Jo(9,Em.bind(null,r,s,i,t),void 0,null),Ye===null)throw Error(N(349));Bs&30||Sm(r,t,i)}return i}function Sm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Em(e,t,r,s){t.value=r,t.getSnapshot=s,zm(t)&&Am(e)}function $m(e,t,r){return r(function(){zm(t)&&Am(e)})}function zm(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ar(e,r)}catch{return!0}}function Am(e){var t=Rr(e,1);t!==null&&nr(t,e,1,-1)}function Ah(e){var t=pr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:e},t.queue=e,e=e.dispatch=fy.bind(null,Se,e),[t.memoizedState,e]}function Jo(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Tm(){return qt().memoizedState}function sa(e,t,r,s){var i=pr();Se.flags|=e,i.memoizedState=Jo(1|t,r,void 0,s===void 0?null:s)}function sl(e,t,r,s){var i=qt();s=s===void 0?null:s;var o=void 0;if(He!==null){var n=He.memoizedState;if(o=n.destroy,s!==null&&ad(s,n.deps)){i.memoizedState=Jo(t,r,o,s);return}}Se.flags|=e,i.memoizedState=Jo(1|t,r,o,s)}function Th(e,t){return sa(8390656,8,e,t)}function ud(e,t){return sl(2048,8,e,t)}function Pm(e,t){return sl(4,2,e,t)}function Nm(e,t){return sl(4,4,e,t)}function Lm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mm(e,t,r){return r=r!=null?r.concat([e]):null,sl(4,4,Lm.bind(null,t,e),r)}function dd(){}function Im(e,t){var r=qt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ad(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Rm(e,t){var r=qt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ad(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Om(e,t,r){return Bs&21?(ar(r,t)||(r=jf(),Se.lanes|=r,js|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=r)}function hy(e,t){var r=ue;ue=r!==0&&4>r?r:4,e(!0);var s=Wl.transition;Wl.transition={};try{e(!1),t()}finally{ue=r,Wl.transition=s}}function Dm(){return qt().memoizedState}function py(e,t,r){var s=as(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Vm(e))Fm(t,r);else if(r=wm(e,t,r,s),r!==null){var i=pt();nr(r,e,s,i),Bm(r,t,s)}}function fy(e,t,r){var s=as(e),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vm(e))Fm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var n=t.lastRenderedState,a=o(n,r);if(i.hasEagerState=!0,i.eagerState=a,ar(a,n)){var l=t.interleaved;l===null?(i.next=i,rd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=wm(e,t,i,s),r!==null&&(i=pt(),nr(r,e,s,i),Bm(r,t,s))}}function Vm(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Fm(e,t){So=Aa=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Bm(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ju(e,r)}}var Ta={readContext:Kt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},my={readContext:Kt,useCallback:function(e,t){return pr().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:Th,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,sa(4194308,4,Lm.bind(null,t,e),r)},useLayoutEffect:function(e,t){return sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return sa(4,2,e,t)},useMemo:function(e,t){var r=pr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=pr();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=py.bind(null,Se,e),[s.memoizedState,e]},useRef:function(e){var t=pr();return e={current:e},t.memoizedState=e},useState:Ah,useDebugValue:dd,useDeferredValue:function(e){return pr().memoizedState=e},useTransition:function(){var e=Ah(!1),t=e[0];return e=hy.bind(null,e[1]),pr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Se,i=pr();if(ye){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),Ye===null)throw Error(N(349));Bs&30||Sm(s,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Th($m.bind(null,s,o,e),[e]),s.flags|=2048,Jo(9,Em.bind(null,s,o,r,t),void 0,null),r},useId:function(){var e=pr(),t=Ye.identifierPrefix;if(ye){var r=Ar,s=zr;r=(s&~(1<<32-or(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Yo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=dy++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gy={readContext:Kt,useCallback:Im,useContext:Kt,useEffect:ud,useImperativeHandle:Mm,useInsertionEffect:Pm,useLayoutEffect:Nm,useMemo:Rm,useReducer:Gl,useRef:Tm,useState:function(){return Gl(Zo)},useDebugValue:dd,useDeferredValue:function(e){var t=qt();return Om(t,He.memoizedState,e)},useTransition:function(){var e=Gl(Zo)[0],t=qt().memoizedState;return[e,t]},useMutableSource:km,useSyncExternalStore:Cm,useId:Dm,unstable_isNewReconciler:!1},vy={readContext:Kt,useCallback:Im,useContext:Kt,useEffect:ud,useImperativeHandle:Mm,useInsertionEffect:Pm,useLayoutEffect:Nm,useMemo:Rm,useReducer:Kl,useRef:Tm,useState:function(){return Kl(Zo)},useDebugValue:dd,useDeferredValue:function(e){var t=qt();return He===null?t.memoizedState=e:Om(t,He.memoizedState,e)},useTransition:function(){var e=Kl(Zo)[0],t=qt().memoizedState;return[e,t]},useMutableSource:km,useSyncExternalStore:Cm,useId:Dm,unstable_isNewReconciler:!1};function rr(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Qc(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Ee({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var il={isMounted:function(e){return(e=e._reactInternals)?Ys(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=pt(),i=as(e),o=Pr(s,i);o.payload=t,r!=null&&(o.callback=r),t=os(e,o,i),t!==null&&(nr(t,e,i,s),ta(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=pt(),i=as(e),o=Pr(s,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=os(e,o,i),t!==null&&(nr(t,e,i,s),ta(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=pt(),s=as(e),i=Pr(r,s);i.tag=2,t!=null&&(i.callback=t),t=os(e,i,s),t!==null&&(nr(t,e,s,r),ta(t,e,s))}};function Ph(e,t,r,s,i,o,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,n):t.prototype&&t.prototype.isPureReactComponent?!Wo(r,s)||!Wo(i,o):!0}function jm(e,t,r){var s=!1,i=hs,o=t.contextType;return typeof o=="object"&&o!==null?o=Kt(o):(i=kt(t)?Vs:dt.current,s=t.contextTypes,o=(s=s!=null)?Ni(e,i):hs),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Nh(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function Xc(e,t,r,s){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},sd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Kt(o):(o=kt(t)?Vs:dt.current,i.context=Ni(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qc(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),$a(e,r,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ri(e,t){try{var r="",s=t;do r+=Wv(s),s=s.return;while(s);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ql(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Yc(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var yy=typeof WeakMap=="function"?WeakMap:Map;function Um(e,t,r){r=Pr(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Na||(Na=!0,au=s),Yc(e,t)},r}function Hm(e,t,r){r=Pr(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){Yc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Yc(e,t),typeof s!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),r}function Lh(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new yy;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),e=Ny.bind(null,e,t,r),t.then(e,e))}function Mh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ih(e,t,r,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Pr(-1,1),t.tag=2,os(r,t,1))),r.lanes|=1),e)}var by=Dr.ReactCurrentOwner,xt=!1;function ht(e,t,r,s){t.child=e===null?bm(t,null,r,s):Mi(t,e.child,r,s)}function Rh(e,t,r,s,i){r=r.render;var o=t.ref;return $i(t,i),s=ld(e,t,r,s,o,i),r=cd(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(ye&&r&&Xu(t),t.flags|=1,ht(e,t,s,i),t.child)}function Oh(e,t,r,s,i){if(e===null){var o=r.type;return typeof o=="function"&&!bd(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Wm(e,t,o,s,i)):(e=aa(r.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var n=o.memoizedProps;if(r=r.compare,r=r!==null?r:Wo,r(n,s)&&e.ref===t.ref)return Or(e,t,i)}return t.flags|=1,e=ls(o,s),e.ref=t.ref,e.return=t,t.child=e}function Wm(e,t,r,s,i){if(e!==null){var o=e.memoizedProps;if(Wo(o,s)&&e.ref===t.ref)if(xt=!1,t.pendingProps=s=o,(e.lanes&i)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,Or(e,t,i)}return Zc(e,t,r,s,i)}function Gm(e,t,r){var s=t.pendingProps,i=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(xi,Lt),Lt|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(xi,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,fe(xi,Lt),Lt|=s}else o!==null?(s=o.baseLanes|r,t.memoizedState=null):s=r,fe(xi,Lt),Lt|=s;return ht(e,t,i,r),t.child}function Km(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Zc(e,t,r,s,i){var o=kt(r)?Vs:dt.current;return o=Ni(t,o),$i(t,i),r=ld(e,t,r,s,o,i),s=cd(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(ye&&s&&Xu(t),t.flags|=1,ht(e,t,r,i),t.child)}function Dh(e,t,r,s,i){if(kt(r)){var o=!0;_a(t)}else o=!1;if($i(t,i),t.stateNode===null)ia(e,t),jm(t,r,s),Xc(t,r,s,i),s=!0;else if(e===null){var n=t.stateNode,a=t.memoizedProps;n.props=a;var l=n.context,u=r.contextType;typeof u=="object"&&u!==null?u=Kt(u):(u=kt(r)?Vs:dt.current,u=Ni(t,u));var h=r.getDerivedStateFromProps,d=typeof h=="function"||typeof n.getSnapshotBeforeUpdate=="function";d||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(a!==s||l!==u)&&Nh(t,n,s,u),Kr=!1;var p=t.memoizedState;n.state=p,$a(t,s,n,i),l=t.memoizedState,a!==s||p!==l||_t.current||Kr?(typeof h=="function"&&(Qc(t,r,h,s),l=t.memoizedState),(a=Kr||Ph(t,r,a,s,p,l,u))?(d||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=l),n.props=s,n.state=l,n.context=u,s=a):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{n=t.stateNode,xm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:rr(t.type,a),n.props=u,d=t.pendingProps,p=n.context,l=r.contextType,typeof l=="object"&&l!==null?l=Kt(l):(l=kt(r)?Vs:dt.current,l=Ni(t,l));var g=r.getDerivedStateFromProps;(h=typeof g=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Nh(t,n,s,l),Kr=!1,p=t.memoizedState,n.state=p,$a(t,s,n,i);var v=t.memoizedState;a!==d||p!==v||_t.current||Kr?(typeof g=="function"&&(Qc(t,r,g,s),v=t.memoizedState),(u=Kr||Ph(t,r,u,s,p,v,l)||!1)?(h||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(s,v,l),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(s,v,l)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=v),n.props=s,n.state=v,n.context=l,s=u):(typeof n.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),s=!1)}return Jc(e,t,r,s,o,i)}function Jc(e,t,r,s,i,o){Km(e,t);var n=(t.flags&128)!==0;if(!s&&!n)return i&&kh(t,r,!1),Or(e,t,o);s=t.stateNode,by.current=t;var a=n&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&n?(t.child=Mi(t,e.child,null,o),t.child=Mi(t,null,a,o)):ht(e,t,a,o),t.memoizedState=s.state,i&&kh(t,r,!0),t.child}function qm(e){var t=e.stateNode;t.pendingContext?_h(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_h(e,t.context,!1),id(e,t.containerInfo)}function Vh(e,t,r,s,i){return Li(),Zu(i),t.flags|=256,ht(e,t,r,s),t.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qm(e,t,r){var s=t.pendingProps,i=Ce.current,o=!1,n=(t.flags&128)!==0,a;if((a=n)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),fe(Ce,i&1),e===null)return Kc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(n=s.children,e=s.fallback,o?(s=t.mode,o=t.child,n={mode:"hidden",children:n},!(s&1)&&o!==null?(o.childLanes=0,o.pendingProps=n):o=al(n,s,0,null),e=Rs(e,s,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=tu(r),t.memoizedState=eu,e):hd(t,n));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wy(e,t,n,s,a,i,r);if(o){o=s.fallback,n=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:s.children};return!(n&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=l,t.deletions=null):(s=ls(i,l),s.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ls(a,o):(o=Rs(o,n,r,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,n=e.child.memoizedState,n=n===null?tu(r):{baseLanes:n.baseLanes|r,cachePool:null,transitions:n.transitions},o.memoizedState=n,o.childLanes=e.childLanes&~r,t.memoizedState=eu,s}return o=e.child,e=o.sibling,s=ls(o,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function hd(e,t){return t=al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rn(e,t,r,s){return s!==null&&Zu(s),Mi(t,e.child,null,r),e=hd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wy(e,t,r,s,i,o,n){if(r)return t.flags&256?(t.flags&=-257,s=ql(Error(N(422))),Rn(e,t,n,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,i=t.mode,s=al({mode:"visible",children:s.children},i,0,null),o=Rs(o,i,n,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,t.mode&1&&Mi(t,e.child,null,n),t.child.memoizedState=tu(n),t.memoizedState=eu,o);if(!(t.mode&1))return Rn(e,t,n,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var a=s.dgst;return s=a,o=Error(N(419)),s=ql(o,s,void 0),Rn(e,t,n,s)}if(a=(n&e.childLanes)!==0,xt||a){if(s=Ye,s!==null){switch(n&-n){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Rr(e,i),nr(s,e,i,-1))}return yd(),s=ql(Error(N(421))),Rn(e,t,n,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ly.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Mt=is(i.nextSibling),Rt=t,ye=!0,ir=null,e!==null&&(Ut[Ht++]=zr,Ut[Ht++]=Ar,Ut[Ht++]=Fs,zr=e.id,Ar=e.overflow,Fs=t),t=hd(t,s.children),t.flags|=4096,t)}function Fh(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),qc(e.return,t,r)}function Ql(e,t,r,s,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=i)}function Xm(e,t,r){var s=t.pendingProps,i=s.revealOrder,o=s.tail;if(ht(e,t,s.children,r),s=Ce.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fh(e,r,t);else if(e.tag===19)Fh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(fe(Ce,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&za(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ql(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&za(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ql(t,!0,r,null,o);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ia(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Or(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),js|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=ls(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ls(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function xy(e,t,r){switch(t.tag){case 3:qm(t),Li();break;case 5:_m(t);break;case 1:kt(t.type)&&_a(t);break;case 4:id(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;fe(Sa,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(fe(Ce,Ce.current&1),t.flags|=128,null):r&t.child.childLanes?Qm(e,t,r):(fe(Ce,Ce.current&1),e=Or(e,t,r),e!==null?e.sibling:null);fe(Ce,Ce.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Xm(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Ce,Ce.current),s)break;return null;case 22:case 23:return t.lanes=0,Gm(e,t,r)}return Or(e,t,r)}var Ym,ru,Zm,Jm;Ym=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ru=function(){};Zm=function(e,t,r,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,Ns(vr.current);var o=null;switch(r){case"input":i=Cc(e,i),s=Cc(e,s),o=[];break;case"select":i=Ee({},i,{value:void 0}),s=Ee({},s,{value:void 0}),o=[];break;case"textarea":i=$c(e,i),s=$c(e,s),o=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=wa)}Ac(r,s);var n;r=null;for(u in i)if(!s.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(n in a)a.hasOwnProperty(n)&&(r||(r={}),r[n]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Do.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in s){var l=s[u];if(a=i!=null?i[u]:void 0,s.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(n in a)!a.hasOwnProperty(n)||l&&l.hasOwnProperty(n)||(r||(r={}),r[n]="");for(n in l)l.hasOwnProperty(n)&&a[n]!==l[n]&&(r||(r={}),r[n]=l[n])}else r||(o||(o=[]),o.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Do.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&me("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Jm=function(e,t,r,s){r!==s&&(t.flags|=4)};function no(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function _y(e,t,r){var s=t.pendingProps;switch(Yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return kt(t.type)&&xa(),ct(t),null;case 3:return s=t.stateNode,Ii(),ge(_t),ge(dt),nd(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Mn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ir!==null&&(uu(ir),ir=null))),ru(e,t),ct(t),null;case 5:od(t);var i=Ns(Xo.current);if(r=t.type,e!==null&&t.stateNode!=null)Zm(e,t,r,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(N(166));return ct(t),null}if(e=Ns(vr.current),Mn(t)){s=t.stateNode,r=t.type;var o=t.memoizedProps;switch(s[mr]=t,s[qo]=o,e=(t.mode&1)!==0,r){case"dialog":me("cancel",s),me("close",s);break;case"iframe":case"object":case"embed":me("load",s);break;case"video":case"audio":for(i=0;i<bo.length;i++)me(bo[i],s);break;case"source":me("error",s);break;case"img":case"image":case"link":me("error",s),me("load",s);break;case"details":me("toggle",s);break;case"input":Qd(s,o),me("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},me("invalid",s);break;case"textarea":Yd(s,o),me("invalid",s)}Ac(r,o),i=null;for(var n in o)if(o.hasOwnProperty(n)){var a=o[n];n==="children"?typeof a=="string"?s.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ln(s.textContent,a,e),i=["children",a]):typeof a=="number"&&s.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ln(s.textContent,a,e),i=["children",""+a]):Do.hasOwnProperty(n)&&a!=null&&n==="onScroll"&&me("scroll",s)}switch(r){case"input":Sn(s),Xd(s,o,!0);break;case"textarea":Sn(s),Zd(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=wa)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{n=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$f(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=n.createElement(r,{is:s.is}):(e=n.createElement(r),r==="select"&&(n=e,s.multiple?n.multiple=!0:s.size&&(n.size=s.size))):e=n.createElementNS(e,r),e[mr]=t,e[qo]=s,Ym(e,t,!1,!1),t.stateNode=e;e:{switch(n=Tc(r,s),r){case"dialog":me("cancel",e),me("close",e),i=s;break;case"iframe":case"object":case"embed":me("load",e),i=s;break;case"video":case"audio":for(i=0;i<bo.length;i++)me(bo[i],e);i=s;break;case"source":me("error",e),i=s;break;case"img":case"image":case"link":me("error",e),me("load",e),i=s;break;case"details":me("toggle",e),i=s;break;case"input":Qd(e,s),i=Cc(e,s),me("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=Ee({},s,{value:void 0}),me("invalid",e);break;case"textarea":Yd(e,s),i=$c(e,s),me("invalid",e);break;default:i=s}Ac(r,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Tf(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zf(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Vo(e,l):typeof l=="number"&&Vo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Do.hasOwnProperty(o)?l!=null&&o==="onScroll"&&me("scroll",e):l!=null&&Ru(e,o,l,n))}switch(r){case"input":Sn(e),Xd(e,s,!1);break;case"textarea":Sn(e),Zd(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ds(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?ki(e,!!s.multiple,o,!1):s.defaultValue!=null&&ki(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wa)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)Jm(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(N(166));if(r=Ns(Xo.current),Ns(vr.current),Mn(t)){if(s=t.stateNode,r=t.memoizedProps,s[mr]=t,(o=s.nodeValue!==r)&&(e=Rt,e!==null))switch(e.tag){case 3:Ln(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ln(s.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[mr]=t,t.stateNode=s}return ct(t),null;case 13:if(ge(Ce),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&Mt!==null&&t.mode&1&&!(t.flags&128))vm(),Li(),t.flags|=98560,o=!1;else if(o=Mn(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[mr]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ct(t),o=!1}else ir!==null&&(uu(ir),ir=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?We===0&&(We=3):yd())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return Ii(),ru(e,t),e===null&&Go(t.stateNode.containerInfo),ct(t),null;case 10:return td(t.type._context),ct(t),null;case 17:return kt(t.type)&&xa(),ct(t),null;case 19:if(ge(Ce),o=t.memoizedState,o===null)return ct(t),null;if(s=(t.flags&128)!==0,n=o.rendering,n===null)if(s)no(o,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(n=za(e),n!==null){for(t.flags|=128,no(o,!1),s=n.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)o=r,e=s,o.flags&=14680066,n=o.alternate,n===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,o.type=n.type,e=n.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return fe(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>Oi&&(t.flags|=128,s=!0,no(o,!1),t.lanes=4194304)}else{if(!s)if(e=za(n),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),no(o,!0),o.tail===null&&o.tailMode==="hidden"&&!n.alternate&&!ye)return ct(t),null}else 2*Me()-o.renderingStartTime>Oi&&r!==1073741824&&(t.flags|=128,s=!0,no(o,!1),t.lanes=4194304);o.isBackwards?(n.sibling=t.child,t.child=n):(r=o.last,r!==null?r.sibling=n:t.child=n,o.last=n)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,r=Ce.current,fe(Ce,s?r&1|2:r&1),t):(ct(t),null);case 22:case 23:return vd(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Lt&1073741824&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function ky(e,t){switch(Yu(t),t.tag){case 1:return kt(t.type)&&xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ii(),ge(_t),ge(dt),nd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return od(t),null;case 13:if(ge(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(Ce),null;case 4:return Ii(),null;case 10:return td(t.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var On=!1,ut=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,R=null;function wi(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ae(e,t,s)}else r.current=null}function su(e,t,r){try{r()}catch(s){Ae(e,t,s)}}var Bh=!1;function Sy(e,t){if(Fc=va,e=im(),Qu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var n=0,a=-1,l=-1,u=0,h=0,d=e,p=null;t:for(;;){for(var g;d!==r||i!==0&&d.nodeType!==3||(a=n+i),d!==o||s!==0&&d.nodeType!==3||(l=n+s),d.nodeType===3&&(n+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===r&&++u===i&&(a=n),p===o&&++h===s&&(l=n),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bc={focusedElem:e,selectionRange:r},va=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,C=v.memoizedState,b=t.stateNode,m=b.getSnapshotBeforeUpdate(t.elementType===t.type?x:rr(t.type,x),C);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){Ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return v=Bh,Bh=!1,v}function Eo(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&su(t,r,o)}i=i.next}while(i!==s)}}function ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function iu(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function eg(e){var t=e.alternate;t!==null&&(e.alternate=null,eg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mr],delete t[qo],delete t[Hc],delete t[ay],delete t[ly])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tg(e){return e.tag===5||e.tag===3||e.tag===4}function jh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ou(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=wa));else if(s!==4&&(e=e.child,e!==null))for(ou(e,t,r),e=e.sibling;e!==null;)ou(e,t,r),e=e.sibling}function nu(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(nu(e,t,r),e=e.sibling;e!==null;)nu(e,t,r),e=e.sibling}var rt=null,sr=!1;function Hr(e,t,r){for(r=r.child;r!==null;)rg(e,t,r),r=r.sibling}function rg(e,t,r){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(Ya,r)}catch{}switch(r.tag){case 5:ut||wi(r,t);case 6:var s=rt,i=sr;rt=null,Hr(e,t,r),rt=s,sr=i,rt!==null&&(sr?(e=rt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):rt.removeChild(r.stateNode));break;case 18:rt!==null&&(sr?(e=rt,r=r.stateNode,e.nodeType===8?jl(e.parentNode,r):e.nodeType===1&&jl(e,r),Uo(e)):jl(rt,r.stateNode));break;case 4:s=rt,i=sr,rt=r.stateNode.containerInfo,sr=!0,Hr(e,t,r),rt=s,sr=i;break;case 0:case 11:case 14:case 15:if(!ut&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var o=i,n=o.destroy;o=o.tag,n!==void 0&&(o&2||o&4)&&su(r,t,n),i=i.next}while(i!==s)}Hr(e,t,r);break;case 1:if(!ut&&(wi(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(a){Ae(r,t,a)}Hr(e,t,r);break;case 21:Hr(e,t,r);break;case 22:r.mode&1?(ut=(s=ut)||r.memoizedState!==null,Hr(e,t,r),ut=s):Hr(e,t,r);break;default:Hr(e,t,r)}}function Uh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Cy),t.forEach(function(s){var i=My.bind(null,e,s);r.has(s)||(r.add(s),s.then(i,i))})}}function tr(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var o=e,n=t,a=n;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,sr=!1;break e;case 3:rt=a.stateNode.containerInfo,sr=!0;break e;case 4:rt=a.stateNode.containerInfo,sr=!0;break e}a=a.return}if(rt===null)throw Error(N(160));rg(o,n,i),rt=null,sr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sg(t,e),t=t.sibling}function sg(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tr(t,e),hr(e),s&4){try{Eo(3,e,e.return),ol(3,e)}catch(x){Ae(e,e.return,x)}try{Eo(5,e,e.return)}catch(x){Ae(e,e.return,x)}}break;case 1:tr(t,e),hr(e),s&512&&r!==null&&wi(r,r.return);break;case 5:if(tr(t,e),hr(e),s&512&&r!==null&&wi(r,r.return),e.flags&32){var i=e.stateNode;try{Vo(i,"")}catch(x){Ae(e,e.return,x)}}if(s&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,n=r!==null?r.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Sf(i,o),Tc(a,n);var u=Tc(a,o);for(n=0;n<l.length;n+=2){var h=l[n],d=l[n+1];h==="style"?Tf(i,d):h==="dangerouslySetInnerHTML"?zf(i,d):h==="children"?Vo(i,d):Ru(i,h,d,u)}switch(a){case"input":Sc(i,o);break;case"textarea":Ef(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?ki(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?ki(i,!!o.multiple,o.defaultValue,!0):ki(i,!!o.multiple,o.multiple?[]:"",!1))}i[qo]=o}catch(x){Ae(e,e.return,x)}}break;case 6:if(tr(t,e),hr(e),s&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Ae(e,e.return,x)}}break;case 3:if(tr(t,e),hr(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Uo(t.containerInfo)}catch(x){Ae(e,e.return,x)}break;case 4:tr(t,e),hr(e);break;case 13:tr(t,e),hr(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(md=Me())),s&4&&Uh(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(ut=(u=ut)||h,tr(t,e),ut=u):tr(t,e),hr(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(R=e,h=e.child;h!==null;){for(d=R=h;R!==null;){switch(p=R,g=p.child,p.tag){case 0:case 11:case 14:case 15:Eo(4,p,p.return);break;case 1:wi(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){s=p,r=p.return;try{t=s,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Ae(s,r,x)}}break;case 5:wi(p,p.return);break;case 22:if(p.memoizedState!==null){Wh(d);continue}}g!==null?(g.return=p,R=g):Wh(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,n=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Af("display",n))}catch(x){Ae(e,e.return,x)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){Ae(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tr(t,e),hr(e),s&4&&Uh(e);break;case 21:break;default:tr(t,e),hr(e)}}function hr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(tg(r)){var s=r;break e}r=r.return}throw Error(N(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(Vo(i,""),s.flags&=-33);var o=jh(e);nu(e,o,i);break;case 3:case 4:var n=s.stateNode.containerInfo,a=jh(e);ou(e,a,n);break;default:throw Error(N(161))}}catch(l){Ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ey(e,t,r){R=e,ig(e)}function ig(e,t,r){for(var s=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&s){var n=i.memoizedState!==null||On;if(!n){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ut;a=On;var u=ut;if(On=n,(ut=l)&&!u)for(R=i;R!==null;)n=R,l=n.child,n.tag===22&&n.memoizedState!==null?Gh(i):l!==null?(l.return=n,R=l):Gh(i);for(;o!==null;)R=o,ig(o),o=o.sibling;R=i,On=a,ut=u}Hh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Hh(e)}}function Hh(e){for(;R!==null;){var t=R;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ut||ol(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ut)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:rr(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&zh(t,o,s);break;case 3:var n=t.updateQueue;if(n!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}zh(t,n,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Uo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ut||t.flags&512&&iu(t)}catch(p){Ae(t,t.return,p)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function Wh(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function Gh(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ol(4,t)}catch(l){Ae(t,r,l)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(l){Ae(t,i,l)}}var o=t.return;try{iu(t)}catch(l){Ae(t,o,l)}break;case 5:var n=t.return;try{iu(t)}catch(l){Ae(t,n,l)}}}catch(l){Ae(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var $y=Math.ceil,Pa=Dr.ReactCurrentDispatcher,pd=Dr.ReactCurrentOwner,Gt=Dr.ReactCurrentBatchConfig,se=0,Ye=null,De=null,st=0,Lt=0,xi=ms(0),We=0,en=null,js=0,nl=0,fd=0,$o=null,wt=null,md=0,Oi=1/0,kr=null,Na=!1,au=null,ns=null,Dn=!1,Zr=null,La=0,zo=0,lu=null,oa=-1,na=0;function pt(){return se&6?Me():oa!==-1?oa:oa=Me()}function as(e){return e.mode&1?se&2&&st!==0?st&-st:uy.transition!==null?(na===0&&(na=jf()),na):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Qf(e.type)),e):1}function nr(e,t,r,s){if(50<zo)throw zo=0,lu=null,Error(N(185));un(e,r,s),(!(se&2)||e!==Ye)&&(e===Ye&&(!(se&2)&&(nl|=r),We===4&&Qr(e,st)),Ct(e,s),r===1&&se===0&&!(t.mode&1)&&(Oi=Me()+500,rl&&gs()))}function Ct(e,t){var r=e.callbackNode;u0(e,t);var s=ga(e,e===Ye?st:0);if(s===0)r!==null&&th(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&th(r),t===1)e.tag===0?cy(Kh.bind(null,e)):fm(Kh.bind(null,e)),oy(function(){!(se&6)&&gs()}),r=null;else{switch(Uf(s)){case 1:r=Bu;break;case 4:r=Ff;break;case 16:r=ma;break;case 536870912:r=Bf;break;default:r=ma}r=hg(r,og.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function og(e,t){if(oa=-1,na=0,se&6)throw Error(N(327));var r=e.callbackNode;if(zi()&&e.callbackNode!==r)return null;var s=ga(e,e===Ye?st:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Ma(e,s);else{t=s;var i=se;se|=2;var o=ag();(Ye!==e||st!==t)&&(kr=null,Oi=Me()+500,Is(e,t));do try{Ty();break}catch(a){ng(e,a)}while(!0);ed(),Pa.current=o,se=i,De!==null?t=0:(Ye=null,st=0,t=We)}if(t!==0){if(t===2&&(i=Ic(e),i!==0&&(s=i,t=cu(e,i))),t===1)throw r=en,Is(e,0),Qr(e,s),Ct(e,Me()),r;if(t===6)Qr(e,s);else{if(i=e.current.alternate,!(s&30)&&!zy(i)&&(t=Ma(e,s),t===2&&(o=Ic(e),o!==0&&(s=o,t=cu(e,o))),t===1))throw r=en,Is(e,0),Qr(e,s),Ct(e,Me()),r;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(N(345));case 2:$s(e,wt,kr);break;case 3:if(Qr(e,s),(s&130023424)===s&&(t=md+500-Me(),10<t)){if(ga(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Uc($s.bind(null,e,wt,kr),t);break}$s(e,wt,kr);break;case 4:if(Qr(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var n=31-or(s);o=1<<n,n=t[n],n>i&&(i=n),s&=~o}if(s=i,s=Me()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*$y(s/1960))-s,10<s){e.timeoutHandle=Uc($s.bind(null,e,wt,kr),s);break}$s(e,wt,kr);break;case 5:$s(e,wt,kr);break;default:throw Error(N(329))}}}return Ct(e,Me()),e.callbackNode===r?og.bind(null,e):null}function cu(e,t){var r=$o;return e.current.memoizedState.isDehydrated&&(Is(e,t).flags|=256),e=Ma(e,t),e!==2&&(t=wt,wt=r,t!==null&&uu(t)),e}function uu(e){wt===null?wt=e:wt.push.apply(wt,e)}function zy(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],o=i.getSnapshot;i=i.value;try{if(!ar(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qr(e,t){for(t&=~fd,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-or(t),s=1<<r;e[r]=-1,t&=~s}}function Kh(e){if(se&6)throw Error(N(327));zi();var t=ga(e,0);if(!(t&1))return Ct(e,Me()),null;var r=Ma(e,t);if(e.tag!==0&&r===2){var s=Ic(e);s!==0&&(t=s,r=cu(e,s))}if(r===1)throw r=en,Is(e,0),Qr(e,t),Ct(e,Me()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$s(e,wt,kr),Ct(e,Me()),null}function gd(e,t){var r=se;se|=1;try{return e(t)}finally{se=r,se===0&&(Oi=Me()+500,rl&&gs())}}function Us(e){Zr!==null&&Zr.tag===0&&!(se&6)&&zi();var t=se;se|=1;var r=Gt.transition,s=ue;try{if(Gt.transition=null,ue=1,e)return e()}finally{ue=s,Gt.transition=r,se=t,!(se&6)&&gs()}}function vd(){Lt=xi.current,ge(xi)}function Is(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,iy(r)),De!==null)for(r=De.return;r!==null;){var s=r;switch(Yu(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&xa();break;case 3:Ii(),ge(_t),ge(dt),nd();break;case 5:od(s);break;case 4:Ii();break;case 13:ge(Ce);break;case 19:ge(Ce);break;case 10:td(s.type._context);break;case 22:case 23:vd()}r=r.return}if(Ye=e,De=e=ls(e.current,null),st=Lt=t,We=0,en=null,fd=nl=js=0,wt=$o=null,Ps!==null){for(t=0;t<Ps.length;t++)if(r=Ps[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,o=r.pending;if(o!==null){var n=o.next;o.next=i,s.next=n}r.pending=s}Ps=null}return e}function ng(e,t){do{var r=De;try{if(ed(),ra.current=Ta,Aa){for(var s=Se.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}Aa=!1}if(Bs=0,Xe=He=Se=null,So=!1,Yo=0,pd.current=null,r===null||r.return===null){We=1,en=t,De=null;break}e:{var o=e,n=r.return,a=r,l=t;if(t=st,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Mh(n);if(g!==null){g.flags&=-257,Ih(g,n,a,o,t),g.mode&1&&Lh(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Lh(o,u,t),yd();break e}l=Error(N(426))}}else if(ye&&a.mode&1){var C=Mh(n);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ih(C,n,a,o,t),Zu(Ri(l,a));break e}}o=l=Ri(l,a),We!==4&&(We=2),$o===null?$o=[o]:$o.push(o),o=n;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var b=Um(o,l,t);$h(o,b);break e;case 1:a=l;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ns===null||!ns.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Hm(o,a,t);$h(o,w);break e}}o=o.return}while(o!==null)}cg(r)}catch(k){t=k,De===r&&r!==null&&(De=r=r.return);continue}break}while(!0)}function ag(){var e=Pa.current;return Pa.current=Ta,e===null?Ta:e}function yd(){(We===0||We===3||We===2)&&(We=4),Ye===null||!(js&268435455)&&!(nl&268435455)||Qr(Ye,st)}function Ma(e,t){var r=se;se|=2;var s=ag();(Ye!==e||st!==t)&&(kr=null,Is(e,t));do try{Ay();break}catch(i){ng(e,i)}while(!0);if(ed(),se=r,Pa.current=s,De!==null)throw Error(N(261));return Ye=null,st=0,We}function Ay(){for(;De!==null;)lg(De)}function Ty(){for(;De!==null&&!t0();)lg(De)}function lg(e){var t=dg(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?cg(e):De=t,pd.current=null}function cg(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=ky(r,t),r!==null){r.flags&=32767,De=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,De=null;return}}else if(r=_y(r,t,Lt),r!==null){De=r;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);We===0&&(We=5)}function $s(e,t,r){var s=ue,i=Gt.transition;try{Gt.transition=null,ue=1,Py(e,t,r,s)}finally{Gt.transition=i,ue=s}return null}function Py(e,t,r,s){do zi();while(Zr!==null);if(se&6)throw Error(N(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(d0(e,o),e===Ye&&(De=Ye=null,st=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Dn||(Dn=!0,hg(ma,function(){return zi(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Gt.transition,Gt.transition=null;var n=ue;ue=1;var a=se;se|=4,pd.current=null,Sy(e,r),sg(r,e),Y0(Bc),va=!!Fc,Bc=Fc=null,e.current=r,Ey(r),r0(),se=a,ue=n,Gt.transition=o}else e.current=r;if(Dn&&(Dn=!1,Zr=e,La=i),o=e.pendingLanes,o===0&&(ns=null),o0(r.stateNode),Ct(e,Me()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(Na)throw Na=!1,e=au,au=null,e;return La&1&&e.tag!==0&&zi(),o=e.pendingLanes,o&1?e===lu?zo++:(zo=0,lu=e):zo=0,gs(),null}function zi(){if(Zr!==null){var e=Uf(La),t=Gt.transition,r=ue;try{if(Gt.transition=null,ue=16>e?16:e,Zr===null)var s=!1;else{if(e=Zr,Zr=null,La=0,se&6)throw Error(N(331));var i=se;for(se|=4,R=e.current;R!==null;){var o=R,n=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:Eo(8,h,o)}var d=h.child;if(d!==null)d.return=h,R=d;else for(;R!==null;){h=R;var p=h.sibling,g=h.return;if(eg(h),h===u){R=null;break}if(p!==null){p.return=g,R=p;break}R=g}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}R=o}}if(o.subtreeFlags&2064&&n!==null)n.return=o,R=n;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Eo(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,R=b;break e}R=o.return}}var m=e.current;for(R=m;R!==null;){n=R;var y=n.child;if(n.subtreeFlags&2064&&y!==null)y.return=n,R=y;else e:for(n=m;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ol(9,a)}}catch(k){Ae(a,a.return,k)}if(a===n){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(se=i,gs(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(Ya,e)}catch{}s=!0}return s}finally{ue=r,Gt.transition=t}}return!1}function qh(e,t,r){t=Ri(r,t),t=Um(e,t,1),e=os(e,t,1),t=pt(),e!==null&&(un(e,1,t),Ct(e,t))}function Ae(e,t,r){if(e.tag===3)qh(e,e,r);else for(;t!==null;){if(t.tag===3){qh(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ns===null||!ns.has(s))){e=Ri(r,e),e=Hm(t,e,1),t=os(t,e,1),e=pt(),t!==null&&(un(t,1,e),Ct(t,e));break}}t=t.return}}function Ny(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&r,Ye===e&&(st&r)===r&&(We===4||We===3&&(st&130023424)===st&&500>Me()-md?Is(e,0):fd|=r),Ct(e,t)}function ug(e,t){t===0&&(e.mode&1?(t=zn,zn<<=1,!(zn&130023424)&&(zn=4194304)):t=1);var r=pt();e=Rr(e,t),e!==null&&(un(e,t,r),Ct(e,r))}function Ly(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ug(e,r)}function My(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(N(314))}s!==null&&s.delete(t),ug(e,r)}var dg;dg=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)xt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return xt=!1,xy(e,t,r);xt=!!(e.flags&131072)}else xt=!1,ye&&t.flags&1048576&&mm(t,Ca,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ia(e,t),e=t.pendingProps;var i=Ni(t,dt.current);$i(t,r),i=ld(null,t,s,e,i,r);var o=cd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(s)?(o=!0,_a(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sd(t),i.updater=il,t.stateNode=i,i._reactInternals=t,Xc(t,s,e,r),t=Jc(null,t,s,!0,o,r)):(t.tag=0,ye&&o&&Xu(t),ht(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch(ia(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=Ry(s),e=rr(s,e),i){case 0:t=Zc(null,t,s,e,r);break e;case 1:t=Dh(null,t,s,e,r);break e;case 11:t=Rh(null,t,s,e,r);break e;case 14:t=Oh(null,t,s,rr(s.type,e),r);break e}throw Error(N(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:rr(s,i),Zc(e,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:rr(s,i),Dh(e,t,s,i,r);case 3:e:{if(qm(t),e===null)throw Error(N(387));s=t.pendingProps,o=t.memoizedState,i=o.element,xm(e,t),$a(t,s,null,r);var n=t.memoizedState;if(s=n.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ri(Error(N(423)),t),t=Vh(e,t,s,r,i);break e}else if(s!==i){i=Ri(Error(N(424)),t),t=Vh(e,t,s,r,i);break e}else for(Mt=is(t.stateNode.containerInfo.firstChild),Rt=t,ye=!0,ir=null,r=bm(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Li(),s===i){t=Or(e,t,r);break e}ht(e,t,s,r)}t=t.child}return t;case 5:return _m(t),e===null&&Kc(t),s=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,n=i.children,jc(s,i)?n=null:o!==null&&jc(s,o)&&(t.flags|=32),Km(e,t),ht(e,t,n,r),t.child;case 6:return e===null&&Kc(t),null;case 13:return Qm(e,t,r);case 4:return id(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Mi(t,null,s,r):ht(e,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:rr(s,i),Rh(e,t,s,i,r);case 7:return ht(e,t,t.pendingProps,r),t.child;case 8:return ht(e,t,t.pendingProps.children,r),t.child;case 12:return ht(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,o=t.memoizedProps,n=i.value,fe(Sa,s._currentValue),s._currentValue=n,o!==null)if(ar(o.value,n)){if(o.children===i.children&&!_t.current){t=Or(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){n=o.child;for(var l=a.firstContext;l!==null;){if(l.context===s){if(o.tag===1){l=Pr(-1,r&-r),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),qc(o.return,r,t),a.lanes|=r;break}l=l.next}}else if(o.tag===10)n=o.type===t.type?null:o.child;else if(o.tag===18){if(n=o.return,n===null)throw Error(N(341));n.lanes|=r,a=n.alternate,a!==null&&(a.lanes|=r),qc(n,r,t),n=o.sibling}else n=o.child;if(n!==null)n.return=o;else for(n=o;n!==null;){if(n===t){n=null;break}if(o=n.sibling,o!==null){o.return=n.return,n=o;break}n=n.return}o=n}ht(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,$i(t,r),i=Kt(i),s=s(i),t.flags|=1,ht(e,t,s,r),t.child;case 14:return s=t.type,i=rr(s,t.pendingProps),i=rr(s.type,i),Oh(e,t,s,i,r);case 15:return Wm(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:rr(s,i),ia(e,t),t.tag=1,kt(s)?(e=!0,_a(t)):e=!1,$i(t,r),jm(t,s,i),Xc(t,s,i,r),Jc(null,t,s,!0,e,r);case 19:return Xm(e,t,r);case 22:return Gm(e,t,r)}throw Error(N(156,t.tag))};function hg(e,t){return Vf(e,t)}function Iy(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,r,s){return new Iy(e,t,r,s)}function bd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ry(e){if(typeof e=="function")return bd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Du)return 11;if(e===Vu)return 14}return 2}function ls(e,t){var r=e.alternate;return r===null?(r=Wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function aa(e,t,r,s,i,o){var n=2;if(s=e,typeof e=="function")bd(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case di:return Rs(r.children,i,o,t);case Ou:n=8,i|=8;break;case wc:return e=Wt(12,r,t,i|2),e.elementType=wc,e.lanes=o,e;case xc:return e=Wt(13,r,t,i),e.elementType=xc,e.lanes=o,e;case _c:return e=Wt(19,r,t,i),e.elementType=_c,e.lanes=o,e;case _f:return al(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wf:n=10;break e;case xf:n=9;break e;case Du:n=11;break e;case Vu:n=14;break e;case Gr:n=16,s=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Wt(n,r,t,i),t.elementType=e,t.type=s,t.lanes=o,t}function Rs(e,t,r,s){return e=Wt(7,e,s,t),e.lanes=r,e}function al(e,t,r,s){return e=Wt(22,e,s,t),e.elementType=_f,e.lanes=r,e.stateNode={isHidden:!1},e}function Xl(e,t,r){return e=Wt(6,e,null,t),e.lanes=r,e}function Yl(e,t,r){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Oy(e,t,r,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wd(e,t,r,s,i,o,n,a,l){return e=new Oy(e,t,r,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},sd(o),e}function Dy(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function pg(e){if(!e)return hs;e=e._reactInternals;e:{if(Ys(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(kt(r))return pm(e,r,t)}return t}function fg(e,t,r,s,i,o,n,a,l){return e=wd(r,s,!0,e,i,o,n,a,l),e.context=pg(null),r=e.current,s=pt(),i=as(r),o=Pr(s,i),o.callback=t??null,os(r,o,i),e.current.lanes=i,un(e,i,s),Ct(e,s),e}function ll(e,t,r,s){var i=t.current,o=pt(),n=as(i);return r=pg(r),t.context===null?t.context=r:t.pendingContext=r,t=Pr(o,n),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=os(i,t,n),e!==null&&(nr(e,i,n,o),ta(e,i,n)),n}function Ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function xd(e,t){Qh(e,t),(e=e.alternate)&&Qh(e,t)}function Vy(){return null}var mg=typeof reportError=="function"?reportError:function(e){console.error(e)};function _d(e){this._internalRoot=e}cl.prototype.render=_d.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));ll(e,t,null,null)};cl.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Us(function(){ll(null,e,null,null)}),t[Ir]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<qr.length&&t!==0&&t<qr[r].priority;r++);qr.splice(r,0,e),r===0&&qf(e)}};function kd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xh(){}function Fy(e,t,r,s,i){if(i){if(typeof s=="function"){var o=s;s=function(){var u=Ia(n);o.call(u)}}var n=fg(t,s,e,0,null,!1,!1,"",Xh);return e._reactRootContainer=n,e[Ir]=n.current,Go(e.nodeType===8?e.parentNode:e),Us(),n}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var a=s;s=function(){var u=Ia(l);a.call(u)}}var l=wd(e,0,!1,null,null,!1,!1,"",Xh);return e._reactRootContainer=l,e[Ir]=l.current,Go(e.nodeType===8?e.parentNode:e),Us(function(){ll(t,l,r,s)}),l}function dl(e,t,r,s,i){var o=r._reactRootContainer;if(o){var n=o;if(typeof i=="function"){var a=i;i=function(){var l=Ia(n);a.call(l)}}ll(t,n,e,i)}else n=Fy(r,t,e,i,s);return Ia(n)}Hf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yo(t.pendingLanes);r!==0&&(ju(t,r|1),Ct(t,Me()),!(se&6)&&(Oi=Me()+500,gs()))}break;case 13:Us(function(){var s=Rr(e,1);if(s!==null){var i=pt();nr(s,e,1,i)}}),xd(e,1)}};Uu=function(e){if(e.tag===13){var t=Rr(e,134217728);if(t!==null){var r=pt();nr(t,e,134217728,r)}xd(e,134217728)}};Wf=function(e){if(e.tag===13){var t=as(e),r=Rr(e,t);if(r!==null){var s=pt();nr(r,e,t,s)}xd(e,t)}};Gf=function(){return ue};Kf=function(e,t){var r=ue;try{return ue=e,t()}finally{ue=r}};Nc=function(e,t,r){switch(t){case"input":if(Sc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var i=tl(s);if(!i)throw Error(N(90));Cf(s),Sc(s,i)}}}break;case"textarea":Ef(e,r);break;case"select":t=r.value,t!=null&&ki(e,!!r.multiple,t,!1)}};Lf=gd;Mf=Us;var By={usingClientEntryPoint:!1,Events:[hn,mi,tl,Pf,Nf,gd]},ao={findFiberByHostInstance:Ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jy={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Of(e),e===null?null:e.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||Vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vn.isDisabled&&Vn.supportsFiber)try{Ya=Vn.inject(jy),gr=Vn}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;Dt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(t))throw Error(N(200));return Dy(e,t,null,r)};Dt.createRoot=function(e,t){if(!kd(e))throw Error(N(299));var r=!1,s="",i=mg;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wd(e,1,!1,null,null,r,!1,s,i),e[Ir]=t.current,Go(e.nodeType===8?e.parentNode:e),new _d(t)};Dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Of(t),e=e===null?null:e.stateNode,e};Dt.flushSync=function(e){return Us(e)};Dt.hydrate=function(e,t,r){if(!ul(t))throw Error(N(200));return dl(null,e,t,!0,r)};Dt.hydrateRoot=function(e,t,r){if(!kd(e))throw Error(N(405));var s=r!=null&&r.hydratedSources||null,i=!1,o="",n=mg;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(n=r.onRecoverableError)),t=fg(t,null,e,1,r??null,i,!1,o,n),e[Ir]=t.current,Go(e),s)for(e=0;e<s.length;e++)r=s[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new cl(t)};Dt.render=function(e,t,r){if(!ul(t))throw Error(N(200));return dl(null,e,t,!1,r)};Dt.unmountComponentAtNode=function(e){if(!ul(e))throw Error(N(40));return e._reactRootContainer?(Us(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ir]=null})}),!0):!1};Dt.unstable_batchedUpdates=gd;Dt.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!ul(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return dl(e,t,r,!1,s)};Dt.version="18.3.1-next-f1338f8080-20240426";function gg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gg)}catch(e){console.error(e)}}gg(),gf.exports=Dt;var Uy=gf.exports;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tn(){return tn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},tn.apply(null,arguments)}var Jr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Jr||(Jr={}));const Yh="popstate";function Hy(e){e===void 0&&(e={});function t(i,o){let{pathname:n="/",search:a="",hash:l=""}=Zs(i.location.hash.substr(1));return!n.startsWith("/")&&!n.startsWith(".")&&(n="/"+n),du("",{pathname:n,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let n=i.document.querySelector("base"),a="";if(n&&n.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:Ra(o))}function s(i,o){Cd(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Gy(t,r,s,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wy(){return Math.random().toString(36).substr(2,8)}function Zh(e,t){return{usr:e.state,key:e.key,idx:t}}function du(e,t,r,s){return r===void 0&&(r=null),tn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zs(t):t,{state:r,key:t&&t.key||s||Wy()})}function Ra(e){let{pathname:t="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function Zs(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function Gy(e,t,r,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:o=!1}=s,n=i.history,a=Jr.Pop,l=null,u=h();u==null&&(u=0,n.replaceState(tn({},n.state,{idx:u}),""));function h(){return(n.state||{idx:null}).idx}function d(){a=Jr.Pop;let C=h(),b=C==null?null:C-u;u=C,l&&l({action:a,location:x.location,delta:b})}function p(C,b){a=Jr.Push;let m=du(x.location,C,b);r&&r(m,C),u=h()+1;let y=Zh(m,u),w=x.createHref(m);try{n.pushState(y,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}o&&l&&l({action:a,location:x.location,delta:1})}function g(C,b){a=Jr.Replace;let m=du(x.location,C,b);r&&r(m,C),u=h();let y=Zh(m,u),w=x.createHref(m);n.replaceState(y,"",w),o&&l&&l({action:a,location:x.location,delta:0})}function v(C){let b=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:Ra(C);return m=m.replace(/ $/,"%20"),Pe(b,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,b)}let x={get action(){return a},get location(){return e(i,n)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Yh,d),l=C,()=>{i.removeEventListener(Yh,d),l=null}},createHref(C){return t(i,C)},createURL:v,encodeLocation(C){let b=v(C);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:p,replace:g,go(C){return n.go(C)}};return x}var Jh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jh||(Jh={}));function Ky(e,t,r){return r===void 0&&(r="/"),qy(e,t,r)}function qy(e,t,r,s){let i=typeof t=="string"?Zs(t):t,o=Di(i.pathname||"/",r);if(o==null)return null;let n=vg(e);Qy(n);let a=null,l=nb(o);for(let u=0;a==null&&u<n.length;++u)a=ib(n[u],l);return a}function vg(e,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let i=(o,n,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:n,route:o};l.relativePath.startsWith("/")&&(Pe(l.relativePath.startsWith(s),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(s.length));let u=cs([s,l.relativePath]),h=r.concat(l);o.children&&o.children.length>0&&(Pe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vg(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:rb(u,o.index),routesMeta:h})};return e.forEach((o,n)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,n);else for(let l of yg(o.path))i(o,n,l)}),t}function yg(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(s.length===0)return i?[o,""]:[o];let n=yg(s.join("/")),a=[];return a.push(...n.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...n),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Qy(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:sb(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const Xy=/^:[\w-]+$/,Yy=3,Zy=2,Jy=1,eb=10,tb=-2,ep=e=>e==="*";function rb(e,t){let r=e.split("/"),s=r.length;return r.some(ep)&&(s+=tb),t&&(s+=Zy),r.filter(i=>!ep(i)).reduce((i,o)=>i+(Xy.test(o)?Yy:o===""?Jy:eb),s)}function sb(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function ib(e,t,r){let{routesMeta:s}=e,i={},o="/",n=[];for(let a=0;a<s.length;++a){let l=s[a],u=a===s.length-1,h=o==="/"?t:t.slice(o.length)||"/",d=hu({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),p=l.route;if(!d)return null;Object.assign(i,d.params),n.push({params:i,pathname:cs([o,d.pathname]),pathnameBase:cb(cs([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=cs([o,d.pathnameBase]))}return n}function hu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=ob(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],n=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:s.reduce((u,h,d)=>{let{paramName:p,isOptional:g}=h;if(p==="*"){let x=a[d]||"";n=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:n,pattern:e}}function ob(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Cd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(n,a,l)=>(s.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function nb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Cd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Di(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function ab(e,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:i=""}=typeof e=="string"?Zs(e):e,o;return r?(r=xg(r),r.startsWith("/")?o=tp(r.substring(1),"/"):o=tp(r,t)):o=t,{pathname:o,search:ub(s),hash:db(i)}}function tp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Zl(e,t,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lb(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function bg(e,t){let r=lb(e);return t?r.map((s,i)=>i===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function wg(e,t,r,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=Zs(e):(i=tn({},e),Pe(!i.pathname||!i.pathname.includes("?"),Zl("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),Zl("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),Zl("#","search","hash",i)));let o=e===""||i.pathname==="",n=o?"/":i.pathname,a;if(n==null)a=r;else{let d=t.length-1;if(!s&&n.startsWith("..")){let p=n.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=ab(i,a),u=n&&n!=="/"&&n.endsWith("/"),h=(o||n===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const xg=e=>e.replace(/\/\/+/g,"/"),cs=e=>xg(e.join("/")),cb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ub=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,db=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _g=["post","put","patch","delete"];new Set(_g);const pb=["get",..._g];new Set(pb);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rn(){return rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},rn.apply(null,arguments)}const hl=E.createContext(null),kg=E.createContext(null),vs=E.createContext(null),pl=E.createContext(null),ys=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Cg=E.createContext(null);function fb(e,t){let{relative:r}=t===void 0?{}:t;fn()||Pe(!1);let{basename:s,navigator:i}=E.useContext(vs),{hash:o,pathname:n,search:a}=fl(e,{relative:r}),l=n;return s!=="/"&&(l=n==="/"?s:cs([s,n])),i.createHref({pathname:l,search:a,hash:o})}function fn(){return E.useContext(pl)!=null}function Wi(){return fn()||Pe(!1),E.useContext(pl).location}function Sg(e){E.useContext(vs).static||E.useLayoutEffect(e)}function mb(){let{isDataRoute:e}=E.useContext(ys);return e?Tb():gb()}function gb(){fn()||Pe(!1);let e=E.useContext(hl),{basename:t,future:r,navigator:s}=E.useContext(vs),{matches:i}=E.useContext(ys),{pathname:o}=Wi(),n=JSON.stringify(bg(i,r.v7_relativeSplatPath)),a=E.useRef(!1);return Sg(()=>{a.current=!0}),E.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){s.go(u);return}let d=wg(u,JSON.parse(n),o,h.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:cs([t,d.pathname])),(h.replace?s.replace:s.push)(d,h.state,h)},[t,s,n,o,e])}const vb=E.createContext(null);function yb(e){let t=E.useContext(ys).outlet;return t&&E.createElement(vb.Provider,{value:e},t)}function fl(e,t){let{relative:r}=t===void 0?{}:t,{future:s}=E.useContext(vs),{matches:i}=E.useContext(ys),{pathname:o}=Wi(),n=JSON.stringify(bg(i,s.v7_relativeSplatPath));return E.useMemo(()=>wg(e,JSON.parse(n),o,r==="path"),[e,n,o,r])}function bb(e,t){return wb(e,t)}function wb(e,t,r,s){fn()||Pe(!1);let{navigator:i}=E.useContext(vs),{matches:o}=E.useContext(ys),n=o[o.length-1],a=n?n.params:{};n&&n.pathname;let l=n?n.pathnameBase:"/";n&&n.route;let u=Wi(),h;if(t){var d;let C=typeof t=="string"?Zs(t):t;l==="/"||(d=C.pathname)!=null&&d.startsWith(l)||Pe(!1),h=C}else h=u;let p=h.pathname||"/",g=p;if(l!=="/"){let C=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=Ky(e,{pathname:g}),x=Sb(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:cs([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:cs([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,r,s);return t&&x?E.createElement(pl.Provider,{value:{location:rn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Jr.Pop}},x):x}function xb(){let e=Ab(),t=hb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),r?E.createElement("pre",{style:i},r):null,null)}const _b=E.createElement(xb,null);class kb extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?E.createElement(ys.Provider,{value:this.props.routeContext},E.createElement(Cg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cb(e){let{routeContext:t,match:r,children:s}=e,i=E.useContext(hl);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),E.createElement(ys.Provider,{value:t},s)}function Sb(e,t,r,s){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=s)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,a=(i=r)==null?void 0:i.errors;if(a!=null){let h=n.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||Pe(!1),n=n.slice(0,Math.min(n.length,h+1))}let l=!1,u=-1;if(r&&s&&s.v7_partialHydration)for(let h=0;h<n.length;h++){let d=n[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:p,errors:g}=r,v=d.route.loader&&p[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?n=n.slice(0,u+1):n=[n[0]];break}}}return n.reduceRight((h,d,p)=>{let g,v=!1,x=null,C=null;r&&(g=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||_b,l&&(u<0&&p===0?(Pb("route-fallback"),v=!0,C=null):u===p&&(v=!0,C=d.route.hydrateFallbackElement||null)));let b=t.concat(n.slice(0,p+1)),m=()=>{let y;return g?y=x:v?y=C:d.route.Component?y=E.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=h,E.createElement(Cb,{match:d,routeContext:{outlet:h,matches:b,isDataRoute:r!=null},children:y})};return r&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?E.createElement(kb,{location:r.location,revalidation:r.revalidation,component:x,error:g,children:m(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):m()},null)}var Eg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Eg||{}),$g=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($g||{});function Eb(e){let t=E.useContext(hl);return t||Pe(!1),t}function $b(e){let t=E.useContext(kg);return t||Pe(!1),t}function zb(e){let t=E.useContext(ys);return t||Pe(!1),t}function zg(e){let t=zb(),r=t.matches[t.matches.length-1];return r.route.id||Pe(!1),r.route.id}function Ab(){var e;let t=E.useContext(Cg),r=$b(),s=zg();return t!==void 0?t:(e=r.errors)==null?void 0:e[s]}function Tb(){let{router:e}=Eb(Eg.UseNavigateStable),t=zg($g.UseNavigateStable),r=E.useRef(!1);return Sg(()=>{r.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,rn({fromRouteId:t},o)))},[e,t])}const rp={};function Pb(e,t,r){rp[e]||(rp[e]=!0)}function Nb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Lb(e){return yb(e.context)}function ai(e){Pe(!1)}function Mb(e){let{basename:t="/",children:r=null,location:s,navigationType:i=Jr.Pop,navigator:o,static:n=!1,future:a}=e;fn()&&Pe(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:o,static:n,future:rn({v7_relativeSplatPath:!1},a)}),[l,a,o,n]);typeof s=="string"&&(s=Zs(s));let{pathname:h="/",search:d="",hash:p="",state:g=null,key:v="default"}=s,x=E.useMemo(()=>{let C=Di(h,l);return C==null?null:{location:{pathname:C,search:d,hash:p,state:g,key:v},navigationType:i}},[l,h,d,p,g,v,i]);return x==null?null:E.createElement(vs.Provider,{value:u},E.createElement(pl.Provider,{children:r,value:x}))}function Ib(e){let{children:t,location:r}=e;return bb(pu(t),r)}new Promise(()=>{});function pu(e,t){t===void 0&&(t=[]);let r=[];return E.Children.forEach(e,(s,i)=>{if(!E.isValidElement(s))return;let o=[...t,i];if(s.type===E.Fragment){r.push.apply(r,pu(s.props.children,o));return}s.type!==ai&&Pe(!1),!s.props.index||!s.props.children||Pe(!1);let n={id:s.props.id||o.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(n.children=pu(s.props.children,o)),r.push(n)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Oa.apply(null,arguments)}function Ag(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Rb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ob(e,t){return e.button===0&&(!t||t==="_self")&&!Rb(e)}const Db=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Vb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Fb="6";try{window.__reactRouterVersion=Fb}catch{}const Bb=E.createContext({isTransitioning:!1}),jb="startTransition",sp=j[jb];function Ub(e){let{basename:t,children:r,future:s,window:i}=e,o=E.useRef();o.current==null&&(o.current=Hy({window:i,v5Compat:!0}));let n=o.current,[a,l]=E.useState({action:n.action,location:n.location}),{v7_startTransition:u}=s||{},h=E.useCallback(d=>{u&&sp?sp(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>n.listen(h),[n,h]),E.useEffect(()=>Nb(s),[s]),E.createElement(Mb,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:n,future:s})}const Hb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tg=E.forwardRef(function(t,r){let{onClick:s,relative:i,reloadDocument:o,replace:n,state:a,target:l,to:u,preventScrollReset:h,viewTransition:d}=t,p=Ag(t,Db),{basename:g}=E.useContext(vs),v,x=!1;if(typeof u=="string"&&Wb.test(u)&&(v=u,Hb))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),k=Di(w.pathname,g);w.origin===y.origin&&k!=null?u=k+w.search+w.hash:x=!0}catch{}let C=fb(u,{relative:i}),b=qb(u,{replace:n,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d});function m(y){s&&s(y),y.defaultPrevented||b(y)}return E.createElement("a",Oa({},p,{href:v||C,onClick:x||o?s:m,ref:r,target:l}))}),Gb=E.forwardRef(function(t,r){let{"aria-current":s="page",caseSensitive:i=!1,className:o="",end:n=!1,style:a,to:l,viewTransition:u,children:h}=t,d=Ag(t,Vb),p=fl(l,{relative:d.relative}),g=Wi(),v=E.useContext(kg),{navigator:x,basename:C}=E.useContext(vs),b=v!=null&&Qb(p)&&u===!0,m=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,y=g.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),w=w?w.toLowerCase():null,m=m.toLowerCase()),w&&C&&(w=Di(w,C)||w);const k=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let S=y===m||!n&&y.startsWith(m)&&y.charAt(k)==="/",$=w!=null&&(w===m||!n&&w.startsWith(m)&&w.charAt(m.length)==="/"),T={isActive:S,isPending:$,isTransitioning:b},M=S?s:void 0,z;typeof o=="function"?z=o(T):z=[o,S?"active":null,$?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let ee=typeof a=="function"?a(T):a;return E.createElement(Tg,Oa({},d,{"aria-current":M,className:z,ref:r,style:ee,to:l,viewTransition:u}),typeof h=="function"?h(T):h)});var fu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fu||(fu={}));var ip;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ip||(ip={}));function Kb(e){let t=E.useContext(hl);return t||Pe(!1),t}function qb(e,t){let{target:r,replace:s,state:i,preventScrollReset:o,relative:n,viewTransition:a}=t===void 0?{}:t,l=mb(),u=Wi(),h=fl(e,{relative:n});return E.useCallback(d=>{if(Ob(d,r)){d.preventDefault();let p=s!==void 0?s:Ra(u)===Ra(h);l(e,{replace:p,state:i,preventScrollReset:o,relative:n,viewTransition:a})}},[u,l,h,s,i,r,e,o,n,a])}function Qb(e,t){t===void 0&&(t={});let r=E.useContext(Bb);r==null&&Pe(!1);let{basename:s}=Kb(fu.useViewTransitionState),i=fl(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Di(r.currentLocation.pathname,s)||r.currentLocation.pathname,n=Di(r.nextLocation.pathname,s)||r.nextLocation.pathname;return hu(i.pathname,n)!=null||hu(i.pathname,o)!=null}var Xb={},Yb=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function Zb(e){return typeof e=="string"&&Yb.test(e)}const tt=[];for(let e=0;e<256;++e)tt.push((e+256).toString(16).slice(1));function Jb(e,t=0){return(tt[e[t+0]]+tt[e[t+1]]+tt[e[t+2]]+tt[e[t+3]]+"-"+tt[e[t+4]]+tt[e[t+5]]+"-"+tt[e[t+6]]+tt[e[t+7]]+"-"+tt[e[t+8]]+tt[e[t+9]]+"-"+tt[e[t+10]]+tt[e[t+11]]+tt[e[t+12]]+tt[e[t+13]]+tt[e[t+14]]+tt[e[t+15]]).toLowerCase()}let Jl;const e1=new Uint8Array(16);function t1(){if(!Jl){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Jl=crypto.getRandomValues.bind(crypto)}return Jl(e1)}const r1=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var op={randomUUID:r1};function s1(e,t,r){var i;e=e||{};const s=e.random??((i=e.rng)==null?void 0:i.call(e))??t1();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,Jb(s)}function np(e,t,r){return op.randomUUID&&!e?op.randomUUID():s1(e)}const ap="current";function ke(e){if(!e.isConnected)throw new Error("You cannot call this API before having established a connection to the host!")}function i1(e){var t,r;return!!((r=(t=e==null?void 0:e.data)==null?void 0:t.meta)!=null&&r.messageId)}const o1=5e3,n1=3e4,a1=5e3;function l1(e){return typeof e!="string"||!Zb(e)?null:e}function c1(e){return e.type==="connect"?o1:e.type==="api"?n1:e.type==="navigateTo"?a1:null}class u1{constructor({onDataUpdate:t,onBroadcast:r,onLivereload:s}={}){G(this,"onDataUpdate");G(this,"onBroadcast");G(this,"onLivereload");G(this,"pendingMessages",new Map);G(this,"targetOrigin","*");G(this,"handleMessageWrapper",t=>this.handleMessage(t));G(this,"handleMessage",t=>{var n,a,l;if(!i1(t))return;const{message:r}=t.data;if(r.type==="data"){(n=this.onDataUpdate)==null||n.call(this,r);return}if(r.type==="broadcast"){(a=this.onBroadcast)==null||a.call(this,r);return}if(r.type==="livereload"){(l=this.onLivereload)==null||l.call(this,r);return}const{messageId:s}=t.data.meta,i=l1(s);if(!i){this.throwError("Received message with invalid messageId format");return}const o=this.pendingMessages.get(i);if(!o||typeof o!="function"){this.throwError("Received unexpected message");return}this.pendingMessages.delete(i),o(r.payload)});this.onDataUpdate=t,this.onBroadcast=r,this.onLivereload=s,window.addEventListener("message",this.handleMessageWrapper)}destroy(){window.removeEventListener("message",this.handleMessageWrapper)}setOrigin(t){this.targetOrigin=t}sendUnidirectionalMessage(t){const r=np(),s={message:t,meta:{messageId:r,version:ap}};window.parent.postMessage(s,this.targetOrigin)}async postMessage(t){return new Promise((r,s)=>{const i=np();let o;const n=c1(t);n!==null&&(o=setTimeout(()=>{s(new Error(`Waiting for response from foundry host for "${t.type}" message (ID: ${i}) timed out after ${n}ms`))},n)),this.pendingMessages.set(i,l=>{o&&clearTimeout(o),r(l)});const a={message:t,meta:{messageId:i,version:ap}};window.parent.postMessage(a,this.targetOrigin)})}throwError(t){throw new Error(t)}}function Fe(e,t,r,s){var i=arguments.length,o=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,r):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,r,o):n(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}const Wr=new WeakMap,zs=new WeakMap,Er=new WeakMap,Da=Symbol("anyProducer"),lp=Promise.resolve(),Va=Symbol("listenerAdded"),Fa=Symbol("listenerRemoved");let Ba=!1,ec=!1;const ja=e=>typeof e=="string"||typeof e=="symbol"||typeof e=="number";function oi(e){if(!ja(e))throw new TypeError("`eventName` must be a string, symbol, or number")}function Fn(e){if(typeof e!="function")throw new TypeError("listener must be a function")}function ni(e,t){const r=zs.get(e);if(r.has(t))return r.get(t)}function Ao(e,t){const r=ja(t)?t:Da,s=Er.get(e);if(s.has(r))return s.get(r)}function d1(e,t,r){const s=Er.get(e);if(s.has(t))for(const i of s.get(t))i.enqueue(r);if(s.has(Da)){const i=Promise.all([t,r]);for(const o of s.get(Da))o.enqueue(i)}}function cp(e,t){t=Array.isArray(t)?t:[t];let r=!1,s=()=>{},i=[];const o={enqueue(n){i.push(n),s()},finish(){r=!0,s()}};for(const n of t){let a=Ao(e,n);a||(a=new Set,Er.get(e).set(n,a)),a.add(o)}return{async next(){return i?i.length===0?r?(i=void 0,this.next()):(await new Promise(n=>{s=n}),this.next()):{done:!1,value:await i.shift()}:{done:!0}},async return(n){i=void 0;for(const a of t){const l=Ao(e,a);l&&(l.delete(o),l.size===0&&Er.get(e).delete(a))}return s(),arguments.length>0?{done:!0,value:await n}:{done:!0}},[Symbol.asyncIterator](){return this}}}function up(e){if(e===void 0)return dp;if(!Array.isArray(e))throw new TypeError("`methodNames` must be an array of strings");for(const t of e)if(!dp.includes(t))throw typeof t!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${t} is not Emittery method`);return e}const li=e=>e===Va||e===Fa;function Bn(e,t,r){if(li(t))try{Ba=!0,e.emit(t,r)}finally{Ba=!1}}class Hs{static mixin(t,r){return r=up(r),s=>{if(typeof s!="function")throw new TypeError("`target` must be function");for(const n of r)if(s.prototype[n]!==void 0)throw new Error(`The property \`${n}\` already exists on \`target\``);function i(){return Object.defineProperty(this,t,{enumerable:!1,value:new Hs}),this[t]}Object.defineProperty(s.prototype,t,{enumerable:!1,get:i});const o=n=>function(...a){return this[t][n](...a)};for(const n of r)Object.defineProperty(s.prototype,n,{enumerable:!1,value:o(n)});return s}}static get isDebugEnabled(){if(typeof Xb!="object")return ec;const{env:t}=globalThis.process??{env:{}};return t.DEBUG==="emittery"||t.DEBUG==="*"||ec}static set isDebugEnabled(t){ec=t}constructor(t={}){Wr.set(this,new Set),zs.set(this,new Map),Er.set(this,new Map),Er.get(this).set(Da,new Set),this.debug=t.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(r,s,i,o)=>{try{o=JSON.stringify(o)}catch{o=`Object with the following keys failed to stringify: ${Object.keys(o).join(",")}`}(typeof i=="symbol"||typeof i=="number")&&(i=i.toString());const n=new Date,a=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}.${n.getMilliseconds()}`;console.log(`[${a}][emittery:${r}][${s}] Event Name: ${i}
	data: ${o}`)})}logIfDebugEnabled(t,r,s){(Hs.isDebugEnabled||this.debug.enabled)&&this.debug.logger(t,this.debug.name,r,s)}on(t,r,{signal:s}={}){Fn(r),t=Array.isArray(t)?t:[t];for(const o of t){oi(o);let n=ni(this,o);n||(n=new Set,zs.get(this).set(o,n)),n.add(r),this.logIfDebugEnabled("subscribe",o,void 0),li(o)||Bn(this,Va,{eventName:o,listener:r})}const i=()=>{this.off(t,r),s==null||s.removeEventListener("abort",i)};return s==null||s.addEventListener("abort",i,{once:!0}),s!=null&&s.aborted&&i(),i}off(t,r){Fn(r),t=Array.isArray(t)?t:[t];for(const s of t){oi(s);const i=ni(this,s);i&&(i.delete(r),i.size===0&&zs.get(this).delete(s)),this.logIfDebugEnabled("unsubscribe",s,void 0),li(s)||Bn(this,Fa,{eventName:s,listener:r})}}once(t,r){if(r!==void 0&&typeof r!="function")throw new TypeError("predicate must be a function");let s;const i=new Promise(o=>{s=this.on(t,n=>{r&&!r(n)||(s(),o(n))})});return i.off=s,i}events(t){t=Array.isArray(t)?t:[t];for(const r of t)oi(r);return cp(this,t)}async emit(t,r){if(oi(t),li(t)&&!Ba)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emit",t,r),d1(this,t,r);const s=ni(this,t)??new Set,i=Wr.get(this),o=[...s],n=li(t)?[]:[...i];await lp,await Promise.all([...o.map(async a=>{if(s.has(a))return a(r)}),...n.map(async a=>{if(i.has(a))return a(t,r)})])}async emitSerial(t,r){if(oi(t),li(t)&&!Ba)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emitSerial",t,r);const s=ni(this,t)??new Set,i=Wr.get(this),o=[...s],n=[...i];await lp;for(const a of o)s.has(a)&&await a(r);for(const a of n)i.has(a)&&await a(t,r)}onAny(t,{signal:r}={}){Fn(t),this.logIfDebugEnabled("subscribeAny",void 0,void 0),Wr.get(this).add(t),Bn(this,Va,{listener:t});const s=()=>{this.offAny(t),r==null||r.removeEventListener("abort",s)};return r==null||r.addEventListener("abort",s,{once:!0}),r!=null&&r.aborted&&s(),s}anyEvent(){return cp(this)}offAny(t){Fn(t),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),Bn(this,Fa,{listener:t}),Wr.get(this).delete(t)}clearListeners(t){t=Array.isArray(t)?t:[t];for(const r of t)if(this.logIfDebugEnabled("clear",r,void 0),ja(r)){const s=ni(this,r);s&&s.clear();const i=Ao(this,r);if(i){for(const o of i)o.finish();i.clear()}}else{Wr.get(this).clear();for(const[s,i]of zs.get(this).entries())i.clear(),zs.get(this).delete(s);for(const[s,i]of Er.get(this).entries()){for(const o of i)o.finish();i.clear(),Er.get(this).delete(s)}}}listenerCount(t){var s,i,o;t=Array.isArray(t)?t:[t];let r=0;for(const n of t){if(ja(n)){r+=Wr.get(this).size+(((s=ni(this,n))==null?void 0:s.size)??0)+(((i=Ao(this,n))==null?void 0:i.size)??0)+(((o=Ao(this))==null?void 0:o.size)??0);continue}n!==void 0&&oi(n),r+=Wr.get(this).size;for(const a of zs.get(this).values())r+=a.size;for(const a of Er.get(this).values())r+=a.size}return r}bindMethods(t,r){if(typeof t!="object"||t===null)throw new TypeError("`target` must be an object");r=up(r);for(const s of r){if(t[s]!==void 0)throw new Error(`The property \`${s}\` already exists on \`target\``);Object.defineProperty(t,s,{enumerable:!1,value:this[s].bind(this)})}}}const dp=Object.getOwnPropertyNames(Hs.prototype).filter(e=>e!=="constructor");Object.defineProperty(Hs,"listenerAdded",{value:Va,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(Hs,"listenerRemoved",{value:Fa,writable:!1,enumerable:!0,configurable:!1});function Be(e){let t,r,s;return t=e,(i,o,n)=>{if(n.value!=null)n.value=hp(n.value,t,r,s);else if(n.get!=null)n.get=hp(n.get,t,r,s);else throw"Only put a Memoize() decorator on a method or get accessor."}}const tc=new Map;function hp(e,t,r=0,s){const i=Symbol("__memoized_map__");return function(...o){let n;this.hasOwnProperty(i)||Object.defineProperty(this,i,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[i];if(Array.isArray(s))for(const l of s)tc.has(l)?tc.get(l).push(a):tc.set(l,[a]);if(t||o.length>0||r>0){let l;t===!0?l=o.map(d=>d.toString()).join("!"):t?l=t.apply(this,o):l=o[0];const u=`${l}__timestamp`;let h=!1;if(r>0)if(!a.has(u))h=!0;else{let d=a.get(u);h=Date.now()-d>r}a.has(l)&&!h?n=a.get(l):(n=e.apply(this,o),a.set(l,n),r>0&&a.set(u,Date.now()))}else{const l=this;a.has(l)?n=a.get(l):(n=e.apply(this,o),a.set(l,n))}return n}}class h1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesSuppressedDevicesV1(t={}){const r={type:"api",api:"alerts",method:"deleteEntitiesSuppressedDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesAlertsV1(t={}){console.warn("This method is deprecated. Use getQueriesAlertsV2 instead.");const r={type:"api",api:"alerts",method:"getQueriesAlertsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesAlertsV2(t={}){const r={type:"api",api:"alerts",method:"getQueriesAlertsV2",payload:{params:t}};return this.bridge.postMessage(r)}async patchCombinedAlertsV2(t,r={}){console.warn("This method is deprecated. Use patchCombinedAlertsV3 instead.");const s={type:"api",api:"alerts",method:"patchCombinedAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchCombinedAlertsV3(t,r={}){const s={type:"api",api:"alerts",method:"patchCombinedAlertsV3",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesAlertsV2(t,r={}){console.warn("This method is deprecated. Use patchEntitiesAlertsV3 instead.");const s={type:"api",api:"alerts",method:"patchEntitiesAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesAlertsV3(t,r={}){const s={type:"api",api:"alerts",method:"patchEntitiesAlertsV3",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesSuppressedDevicesV1(t,r={}){const s={type:"api",api:"alerts",method:"patchEntitiesSuppressedDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesAlertsV1(t,r={}){console.warn("This method is deprecated. Use postAggregatesAlertsV2 instead.");const s={type:"api",api:"alerts",method:"postAggregatesAlertsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesAlertsV2(t,r={}){const s={type:"api",api:"alerts",method:"postAggregatesAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesAlertsV1(t,r={}){console.warn("This method is deprecated. Use postEntitiesAlertsV2 instead.");const s={type:"api",api:"alerts",method:"postEntitiesAlertsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesAlertsV2(t,r={}){const s={type:"api",api:"alerts",method:"postEntitiesAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesSuppressedDevicesV1(t,r={}){const s={type:"api",api:"alerts",method:"postEntitiesSuppressedDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class p1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getAggregatesResourcesCountByManagedByV1(t={}){const r={type:"api",api:"cloudSecurityAssets",method:"getAggregatesResourcesCountByManagedByV1",payload:{params:t}};return this.bridge.postMessage(r)}}class f1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getCloudSecurityRegistrationAwsCombinedAccountsV1(t={}){const r={type:"api",api:"cloudregistration",method:"getCloudSecurityRegistrationAwsCombinedAccountsV1",payload:{params:t}};return this.bridge.postMessage(r)}}class m1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getAggregatesClustersCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesClustersCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesContainersCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesContainersCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesContainersGroupByManagedV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesContainersGroupByManagedV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesContainersSensorCoverageV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesContainersSensorCoverageV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesImagesCountByStateV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesImagesCountByStateV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesNodesCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesNodesCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesPodsCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesPodsCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesUnidentifiedContainersCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesUnidentifiedContainersCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getCombinedClustersV1(t={}){const r={type:"api",api:"containerSecurity",method:"getCombinedClustersV1",payload:{params:t}};return this.bridge.postMessage(r)}}class g1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1(t={}){const r={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1(t={}){const r={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1",payload:{params:t}};return this.bridge.postMessage(r)}}class v1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteV1CollectionsCollectionNameObjectsObjectKey(t={}){const r={type:"api",api:"customobjects",method:"deleteV1CollectionsCollectionNameObjectsObjectKey",payload:{params:t}};return this.bridge.postMessage(r)}async getV1Collections(t={}){const r={type:"api",api:"customobjects",method:"getV1Collections",payload:{params:t}};return this.bridge.postMessage(r)}async getV1CollectionsCollectionNameObjects(t={}){const r={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjects",payload:{params:t}};return this.bridge.postMessage(r)}async getV1CollectionsCollectionNameObjectsObjectKey(t={}){const r={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKey",payload:{params:t}};return this.bridge.postMessage(r)}async getV1CollectionsCollectionNameObjectsObjectKeyMetadata(t={}){const r={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKeyMetadata",payload:{params:t}};return this.bridge.postMessage(r)}async postV1CollectionsCollectionNameObjects(t,r={}){const s={type:"api",api:"customobjects",method:"postV1CollectionsCollectionNameObjects",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async putV1CollectionsCollectionNameObjectsObjectKey(t,r={}){const s={type:"api",api:"customobjects",method:"putV1CollectionsCollectionNameObjectsObjectKey",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class y1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesSuppressedDevicesV1(t={}){const r={type:"api",api:"detects",method:"getEntitiesSuppressedDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async patchEntitiesDetectsV2(t,r={}){const s={type:"api",api:"detects",method:"patchEntitiesDetectsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchQueriesDetectsV1(t,r={}){const s={type:"api",api:"detects",method:"patchQueriesDetectsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchQueriesDetectsV2(t,r={}){const s={type:"api",api:"detects",method:"patchQueriesDetectsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesDetectsGetV1(t,r={}){const s={type:"api",api:"detects",method:"postAggregatesDetectsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesSummariesGetV1(t,r={}){const s={type:"api",api:"detects",method:"postEntitiesSummariesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesSuppressedDevicesV1(t,r={}){const s={type:"api",api:"detects",method:"postEntitiesSuppressedDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class b1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesGroupsV1(t){const r={type:"api",api:"devices",method:"deleteEntitiesGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesBucketsV1(t){const r={type:"api",api:"devices",method:"getAggregatesBucketsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesFgaTagPrefixCountsV1(t){const r={type:"api",api:"devices",method:"getAggregatesFgaTagPrefixCountsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesTagPrefixCountsV1(t){const r={type:"api",api:"devices",method:"getAggregatesTagPrefixCountsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesDevicesV1(t){const r={type:"api",api:"devices",method:"getEntitiesDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesFgaGroupsV1(t){const r={type:"api",api:"devices",method:"getEntitiesFgaGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesGroupsV1(t){const r={type:"api",api:"devices",method:"getEntitiesGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesAvailableGroupsV1(t={}){const r={type:"api",api:"devices",method:"getQueriesAvailableGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesDevicesHiddenV2(t={}){const r={type:"api",api:"devices",method:"getQueriesDevicesHiddenV2",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesDevicesV1(t={}){const r={type:"api",api:"devices",method:"getQueriesDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesDevicesV2(t={}){const r={type:"api",api:"devices",method:"getQueriesDevicesV2",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesFgaGroupsV1(t={}){const r={type:"api",api:"devices",method:"getQueriesFgaGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesGroupsV1(t={}){const r={type:"api",api:"devices",method:"getQueriesGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async patchEntitiesDevicesTagsV2(t,r={}){const s={type:"api",api:"devices",method:"patchEntitiesDevicesTagsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesDevicesV1(t,r){const s={type:"api",api:"devices",method:"patchEntitiesDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesGroupsV1(t,r={}){const s={type:"api",api:"devices",method:"patchEntitiesGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesDevicesGetV1(t,r={}){const s={type:"api",api:"devices",method:"postAggregatesDevicesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesFgaHostsGetV1(t,r={}){const s={type:"api",api:"devices",method:"postAggregatesFgaHostsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postCombinedDevicesLoginHistoryV1(t,r={}){const s={type:"api",api:"devices",method:"postCombinedDevicesLoginHistoryV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postCombinedFgaHostsLoginHistoryV1(t,r={}){const s={type:"api",api:"devices",method:"postCombinedFgaHostsLoginHistoryV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesActionsV4(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesActionsV4",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesHiddenActionsV4(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesHiddenActionsV4",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesReportsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesReportsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesV1(t,r){const s={type:"api",api:"devices",method:"postEntitiesDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesV2(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesFgaHostsReportsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesFgaHostsReportsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesFgaHostsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesFgaHostsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesGroupActionsV1(t,r){const s={type:"api",api:"devices",method:"postEntitiesGroupActionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesGroupsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class w1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesExecutionV1(t){const r={type:"api",api:"faasGateway",method:"getEntitiesExecutionV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesExecutionV1(t,r={}){const s={type:"api",api:"faasGateway",method:"postEntitiesExecutionV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class x1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesNetworkLocationsV1(t){const r={type:"api",api:"fwmgr",method:"deleteEntitiesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(r)}async deleteEntitiesPoliciesV1(t){const r={type:"api",api:"fwmgr",method:"deleteEntitiesPoliciesV1",payload:{params:t}};return this.bridge.postMessage(r)}async deleteEntitiesRuleGroupsV1(t){const r={type:"api",api:"fwmgr",method:"deleteEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesEventsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesEventsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesFirewallFieldsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesFirewallFieldsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesNetworkLocationsDetailsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsDetailsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesNetworkLocationsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesPlatformsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesPlatformsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesPoliciesV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesPoliciesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesRuleGroupsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesRulesV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesRulesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getLibraryEntitiesRuleGroupsV1(t){const r={type:"api",api:"fwmgr",method:"getLibraryEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getLibraryQueriesRuleGroupsV1(t={}){const r={type:"api",api:"fwmgr",method:"getLibraryQueriesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesEventsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesEventsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesFirewallFieldsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesFirewallFieldsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesNetworkLocationsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesPlatformsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesPlatformsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesPolicyRulesV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesPolicyRulesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesRuleGroupsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesRulesV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesRulesV1",payload:{params:t}};return this.bridge.postMessage(r)}async patchEntitiesNetworkLocationsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"patchEntitiesNetworkLocationsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesRuleGroupsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"patchEntitiesRuleGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesEventsGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesEventsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesPolicyRulesGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesPolicyRulesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesRuleGroupsGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesRuleGroupsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesRulesGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesRulesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesNetworkLocationsMetadataV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsMetadataV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesNetworkLocationsPrecedenceV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsPrecedenceV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesNetworkLocationsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesOntologyV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesOntologyV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesRuleGroupsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesRuleGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesRulesValidateFilepathV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesRulesValidateFilepathV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async putEntitiesNetworkLocationsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"putEntitiesNetworkLocationsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async putEntitiesPoliciesV2(t,r={}){const s={type:"api",api:"fwmgr",method:"putEntitiesPoliciesV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class _1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getCombinedCrowdscoresV1(t={}){const r={type:"api",api:"incidents",method:"getCombinedCrowdscoresV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesBehaviorsV1(t={}){const r={type:"api",api:"incidents",method:"getQueriesBehaviorsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesIncidentsV1(t={}){const r={type:"api",api:"incidents",method:"getQueriesIncidentsV1",payload:{params:t}};return this.bridge.postMessage(r)}async postAggregatesBehaviorsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postAggregatesBehaviorsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesIncidentsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postAggregatesIncidentsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesBehaviorsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postEntitiesBehaviorsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesIncidentActionsV1(t,r={}){const s={type:"api",api:"incidents",method:"postEntitiesIncidentActionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesIncidentsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postEntitiesIncidentsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class k1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesSavedSearchesExecuteV1(t){const r={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesExecuteV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesSavedSearchesV1(t){const r={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesSavedSearchesExecuteV1(t,r={}){const s={type:"api",api:"loggingapi",method:"postEntitiesSavedSearchesExecuteV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class C1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getIntelMitreEntitiesMatrixV1(t={}){const r={type:"api",api:"mitre",method:"getIntelMitreEntitiesMatrixV1",payload:{params:t}};return this.bridge.postMessage(r)}}class S1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesConfigsV1(t={}){const r={type:"api",api:"plugins",method:"getEntitiesConfigsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesDefinitionsV1(t){const r={type:"api",api:"plugins",method:"getEntitiesDefinitionsV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesExecuteDraftV1(t,r={}){const s={type:"api",api:"plugins",method:"postEntitiesExecuteDraftV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesExecuteV1(t,r={}){const s={type:"api",api:"plugins",method:"postEntitiesExecuteV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class E1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getAggregatesRegistriesCountByStateV1(t={}){const r={type:"api",api:"registryAssessment",method:"getAggregatesRegistriesCountByStateV1",payload:{params:t}};return this.bridge.postMessage(r)}}class $1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesPutFilesV1(t){const r={type:"api",api:"remoteResponse",method:"deleteEntitiesPutFilesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesAppCommandV1(t){const r={type:"api",api:"remoteResponse",method:"getEntitiesAppCommandV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesPutFilesV2(t){const r={type:"api",api:"remoteResponse",method:"getEntitiesPutFilesV2",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesPutFilesV1(t={}){const r={type:"api",api:"remoteResponse",method:"getQueriesPutFilesV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesAppCommandV1(t,r={}){const s={type:"api",api:"remoteResponse",method:"postEntitiesAppCommandV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesAppSessionsV1(t,r={}){const s={type:"api",api:"remoteResponse",method:"postEntitiesAppSessionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class z1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getQueriesUsersV1(t={}){const r={type:"api",api:"userManagement",method:"getQueriesUsersV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesUsersGetV1(t,r={}){const s={type:"api",api:"userManagement",method:"postEntitiesUsersGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class A1{constructor(t){G(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesExecutionResultsV1(t){const r={type:"api",api:"workflows",method:"getEntitiesExecutionResultsV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesExecuteV1(t,r={}){const s={type:"api",api:"workflows",method:"postEntitiesExecuteV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesExecutionActionsV1(t,r){const s={type:"api",api:"workflows",method:"postEntitiesExecutionActionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class Ge{constructor(t){G(this,"api");this.api=t}get alerts(){return ke(this.api),new h1(this.api.bridge)}get detects(){return ke(this.api),new y1(this.api.bridge)}get devices(){return ke(this.api),new b1(this.api.bridge)}get fwmgr(){return ke(this.api),new x1(this.api.bridge)}get incidents(){return ke(this.api),new _1(this.api.bridge)}get mitre(){return ke(this.api),new C1(this.api.bridge)}get plugins(){return ke(this.api),new S1(this.api.bridge)}get remoteResponse(){return ke(this.api),new $1(this.api.bridge)}get userManagement(){return ke(this.api),new z1(this.api.bridge)}get workflows(){return ke(this.api),new A1(this.api.bridge)}get cloudSecurityAssets(){return ke(this.api),new p1(this.api.bridge)}get cloudregistration(){return ke(this.api),new f1(this.api.bridge)}get containerSecurity(){return ke(this.api),new m1(this.api.bridge)}get cspmRegistration(){return ke(this.api),new g1(this.api.bridge)}get customobjects(){return ke(this.api),new v1(this.api.bridge)}get faasGateway(){return ke(this.api),new w1(this.api.bridge)}get loggingapi(){return ke(this.api),new k1(this.api.bridge)}get registryAssessment(){return ke(this.api),new E1(this.api.bridge)}}Fe([Be()],Ge.prototype,"alerts",null);Fe([Be()],Ge.prototype,"detects",null);Fe([Be()],Ge.prototype,"devices",null);Fe([Be()],Ge.prototype,"fwmgr",null);Fe([Be()],Ge.prototype,"incidents",null);Fe([Be()],Ge.prototype,"mitre",null);Fe([Be()],Ge.prototype,"plugins",null);Fe([Be()],Ge.prototype,"remoteResponse",null);Fe([Be()],Ge.prototype,"userManagement",null);Fe([Be()],Ge.prototype,"workflows",null);Fe([Be()],Ge.prototype,"cloudSecurityAssets",null);Fe([Be()],Ge.prototype,"cloudregistration",null);Fe([Be()],Ge.prototype,"containerSecurity",null);Fe([Be()],Ge.prototype,"cspmRegistration",null);Fe([Be()],Ge.prototype,"customobjects",null);Fe([Be()],Ge.prototype,"faasGateway",null);Fe([Be()],Ge.prototype,"loggingapi",null);Fe([Be()],Ge.prototype,"registryAssessment",null);class T1{constructor(t,r){G(this,"falcon");G(this,"definition");this.falcon=t,this.definition=r}async execute({request:t}={}){return this.falcon.api.plugins.postEntitiesExecuteV1({resources:[{definition_id:this.definition.definitionId,operation_id:this.definition.operationId,request:t}]})}}const jt=class jt{constructor(t,r){G(this,"falcon");G(this,"definition");G(this,"pollTimeout",500);G(this,"intervalId");this.falcon=t,this.definition=r}async execute({path:t,method:r,body:s,params:i}){const o="id"in this.definition?{function_id:this.definition.id,function_version:this.definition.version}:{function_name:this.definition.name,function_version:this.definition.version},n=await this.falcon.api.faasGateway.postEntitiesExecutionV1({...o,payload:{path:t,method:r,body:s,params:i}});return new Promise((a,l)=>{var h;const u=(h=n==null?void 0:n.resources)==null?void 0:h[0];u!=null&&u.execution_id?this.pollForResult({resolve:a,reject:l,executionId:u==null?void 0:u.execution_id}):l(n==null?void 0:n.errors)})}async getExecutionResult(t){var i;const r=await this.falcon.api.faasGateway.getEntitiesExecutionV1({id:t}),s=(i=r==null?void 0:r.resources)==null?void 0:i[0];return s==null?void 0:s.payload}pollForResult({resolve:t,reject:r,executionId:s}){let i=2;this.intervalId=window.setInterval(async()=>{try{const o=await this.getExecutionResult(s);o&&(window.clearInterval(this.intervalId),t(o))}catch(o){i<=0&&(window.clearInterval(this.intervalId),r(o)),i--}},this.pollTimeout)}path(t){const r=new URL(t,"http://localhost"),s=r.pathname,i=[...r.searchParams.entries()].reduce((o,[n,a])=>({...o,[n]:[a]}),{});return{path:s,queryParams:i,get:async(o={})=>this.get({path:s,params:{query:(o==null?void 0:o.query)??i??{},header:(o==null?void 0:o.header)??{}}}),post:async(o,n={})=>this.post({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o}),patch:async(o,n={})=>this.patch({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o}),put:async(o,n={})=>this.put({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o}),delete:async(o,n={})=>this.delete({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o})}}async get({path:t,params:r}){return this.execute({path:t,method:jt.GET,params:r})}async post({path:t,params:r,body:s}){return this.execute({path:t,method:jt.POST,body:s,params:r})}async patch({path:t,params:r,body:s}){return this.execute({path:t,method:jt.PATCH,body:s,params:r})}async put({path:t,params:r,body:s}){return this.execute({path:t,method:jt.PUT,body:s,params:r})}async delete({path:t,params:r,body:s}){return this.execute({path:t,method:jt.DELETE,body:s,params:r})}destroy(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=void 0)}};G(jt,"GET","GET"),G(jt,"POST","POST"),G(jt,"PATCH","PATCH"),G(jt,"PUT","PUT"),G(jt,"DELETE","DELETE");let mu=jt;class P1{constructor(t,r){G(this,"falcon");G(this,"definition");this.falcon=t,this.definition=r}async write(t,r){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"write",key:t,collection:this.definition.collection,data:r}})}async read(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"read",key:t,collection:this.definition.collection}})}async delete(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"delete",key:t,collection:this.definition.collection}})}async search({filter:t,offset:r,sort:s,limit:i}){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"search",filter:t,limit:i,offset:r,sort:s,collection:this.definition.collection}})}async list(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"list",collection:this.definition.collection,start:t==null?void 0:t.start,end:t==null?void 0:t.end,limit:t==null?void 0:t.limit}})}}class N1{constructor(t){G(this,"falcon");this.falcon=t}async write(t,r){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"ingest",data:t,tag:r==null?void 0:r.tag,tagSource:r==null?void 0:r.tagSource,testData:r==null?void 0:r.testData}})}async query(t){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"dynamic-execute",data:t}})}async savedQuery(t){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"saved-query-execute",data:t}})}}const L1=["_self","_blank"];class M1{constructor(t){G(this,"falcon");this.falcon=t}async navigateTo({path:t,type:r,target:s,metaKey:i,ctrlKey:o,shiftKey:n}){await this.falcon.bridge.postMessage({type:"navigateTo",payload:{path:t,type:r??"falcon",target:s??"_self",metaKey:i??!1,ctrlKey:o??!1,shiftKey:n??!1}})}async onClick(t,r="_self",s="falcon"){var h;if(!(t instanceof Event))throw Error('"event" property should be subclass of Event');if(!("preventDefault"in t)||!(t.target instanceof HTMLAnchorElement))return;t.preventDefault();const i=t.target.getAttribute("href");r=t.target.getAttribute("target")??r;const o=((h=t.target.dataset)==null?void 0:h.type)??s;if(r===null||!L1.includes(r))throw new Error("Target should be _self or _blank");const n=r;if(i==null)throw new Error("Navigation path is missing. Make sure you have added navigation.onClick on the `a` tag and `href` is present.");const{metaKey:a,ctrlKey:l,shiftKey:u}=t;await this.navigateTo({path:i,type:o,target:n,metaKey:a,ctrlKey:l,shiftKey:u})}}class I1{constructor(t){G(this,"bridge");G(this,"observer");this.bridge=t,this.observer=new ResizeObserver(r=>this.handleResizeEvent(r)),this.observer.observe(document.body)}handleResizeEvent(t){const{height:r}=t[0].contentRect;this.bridge.sendUnidirectionalMessage({type:"resize",payload:{height:r}})}destroy(){this.observer.disconnect()}}class R1{constructor(t){G(this,"bridge");this.bridge=t}async openModal(t,r,s={}){const i=await this.bridge.postMessage({type:"openModal",payload:{extension:t,title:r,options:s}});if(i instanceof Error)throw i;return i}closeModal(t){this.bridge.sendUnidirectionalMessage({type:"closeModal",payload:t})}async uploadFile(t,r){return this.bridge.postMessage({type:"fileUpload",fileUploadType:t,payload:r})}}class Sd{constructor(){G(this,"isConnected",!1);G(this,"events",new Hs);G(this,"data");G(this,"bridge",new u1({onDataUpdate:t=>this.handleDataUpdate(t),onBroadcast:t=>this.handleBroadcastMessage(t),onLivereload:()=>this.handleLivereloadMessage()}));G(this,"api",new Ge(this));G(this,"ui",new R1(this.bridge));G(this,"resizeTracker");G(this,"cloudFunctions",[]);G(this,"apiIntegrations",[]);G(this,"collections",[])}async connect(){const t=await this.bridge.postMessage({type:"connect"});if(t!==void 0){const{data:r,origin:s}=t;this.bridge.setOrigin(s),this.data=r,this.updateTheme(r==null?void 0:r.theme),this.isConnected=!0}return this.resizeTracker=new I1(this.bridge),t}get appId(){var t;return(t=this.data)==null?void 0:t.app.id}sendBroadcast(t){this.bridge.sendUnidirectionalMessage({type:"broadcast",payload:t})}handleDataUpdate(t){this.data=t.payload,this.updateTheme(this.data.theme),this.events.emit("data",this.data)}handleBroadcastMessage(t){this.events.emit("broadcast",t.payload)}handleLivereloadMessage(){document.location.reload()}updateTheme(t){if(!t)return;const r=t==="theme-dark"?"theme-light":"theme-dark";document.documentElement.classList.add(t),document.documentElement.classList.remove(r)}cloudFunction(t){ke(this);const r=new mu(this,t);return this.cloudFunctions.push(r),r}apiIntegration({definitionId:t,operationId:r}){if(ke(this),!this.data)throw Error("Data from console is missing");const s=new T1(this,{operationId:r,definitionId:t});return this.apiIntegrations.push(s),s}collection({collection:t}){ke(this);const r=new P1(this,{collection:t});return this.collections.push(r),r}get navigation(){return ke(this),new M1(this)}get logscale(){return ke(this),new N1(this)}destroy(){var t;this.cloudFunctions.forEach(r=>r.destroy()),(t=this.resizeTracker)==null||t.destroy(),this.bridge.destroy()}}Fe([Be()],Sd.prototype,"navigation",null);Fe([Be()],Sd.prototype,"logscale",null);const mn=E.createContext(null);function Pg(){const[e,t]=E.useState(!1),[r,s]=E.useState(null),i=E.useMemo(()=>new Sd,[]),o=E.useMemo(()=>i.isConnected?i.navigation:void 0,[i.isConnected]);return E.useEffect(()=>{(async()=>{await i.connect(),t(!0);try{const a=await i.collection({collection:"domain"}).list({limit:200}),u=((a==null?void 0:a.resources)??[]).map(h=>typeof h=="string"?h:h.category).filter(Boolean);s(u)}catch(n){console.error("Failed to preload categories cache",n)}})()},[i]),{falcon:i,navigation:o,isInitialized:e,cachedCategories:r}}function O1({children:e,useFalconNavigation:t=!1,to:r,className:s="",variant:i="default"}){const{navigation:o}=E.useContext(mn),a=`${{default:"text-purple-600 hover:text-purple-800 transition-colors duration-200",button:"inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-sm hover:shadow-md",tab:"px-3 py-2 text-sm font-medium hover:text-purple-700 transition-colors duration-200",subtle:"text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm"}[i]} ${s}`.trim();return t?_.jsx("a",{onClick:l=>{l.preventDefault(),o.navigateTo({path:r})},href:r,className:a,children:e}):_.jsx(Tg,{to:r,className:a,children:e})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const la=globalThis,Ed=la.ShadowRoot&&(la.ShadyCSS===void 0||la.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$d=Symbol(),pp=new WeakMap;let Ng=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==$d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ed&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=pp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&pp.set(r,t))}return t}toString(){return this.cssText}};const D1=e=>new Ng(typeof e=="string"?e:e+"",void 0,$d),H=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Ng(r,e,$d)},V1=(e,t)=>{if(Ed)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),i=la.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)}},fp=Ed?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return D1(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:F1,defineProperty:B1,getOwnPropertyDescriptor:j1,getOwnPropertyNames:U1,getOwnPropertySymbols:H1,getPrototypeOf:W1}=Object,us=globalThis,mp=us.trustedTypes,G1=mp?mp.emptyScript:"",rc=us.reactiveElementPolyfillSupport,To=(e,t)=>e,Vi={toAttribute(e,t){switch(t){case Boolean:e=e?G1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},zd=(e,t)=>!F1(e,t),gp={attribute:!0,type:String,converter:Vi,reflect:!1,useDefault:!1,hasChanged:zd};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),us.litPropertyMetadata??(us.litPropertyMetadata=new WeakMap);let ci=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=gp){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,r);i!==void 0&&B1(this.prototype,t,i)}}static getPropertyDescriptor(t,r,s){const{get:i,set:o}=j1(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get:i,set(n){const a=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gp}static _$Ei(){if(this.hasOwnProperty(To("elementProperties")))return;const t=W1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(To("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(To("properties"))){const r=this.properties,s=[...U1(r),...H1(r)];for(const i of s)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)r.unshift(fp(i))}else t!==void 0&&r.push(fp(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return V1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostConnected)==null?void 0:s.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:Vi).toAttribute(r,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,r){var o,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Vi;this._$Em=i;const u=l.fromAttribute(r,a.type);this[i]=u??((n=this._$Ej)==null?void 0:n.get(i))??u,this._$Em=null}}requestUpdate(t,r,s,i=!1,o){var n;if(t!==void 0){const a=this.constructor;if(i===!1&&(o=this[t]),s??(s=a.getPropertyOptions(t)),!((s.hasChanged??zd)(o,r)||s.useDefault&&s.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??r??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};ci.elementStyles=[],ci.shadowRootOptions={mode:"open"},ci[To("elementProperties")]=new Map,ci[To("finalized")]=new Map,rc==null||rc({ReactiveElement:ci}),(us.reactiveElementVersions??(us.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po=globalThis,vp=e=>e,Ua=Po.trustedTypes,yp=Ua?Ua.createPolicy("lit-html",{createHTML:e=>e}):void 0,Lg="$lit$",Xr=`lit$${Math.random().toFixed(9).slice(2)}$`,Mg="?"+Xr,K1=`<${Mg}>`,Ws=document,sn=()=>Ws.createComment(""),on=e=>e===null||typeof e!="object"&&typeof e!="function",Ad=Array.isArray,q1=e=>Ad(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",sc=`[ 	
\f\r]`,lo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bp=/-->/g,wp=/>/g,Cs=RegExp(`>|${sc}(?:([^\\s"'>=/]+)(${sc}*=${sc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xp=/'/g,_p=/"/g,Ig=/^(?:script|style|textarea|title)$/i,Q1=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),A=Q1(1),It=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),kp=new WeakMap,Ls=Ws.createTreeWalker(Ws,129);function Rg(e,t){if(!Ad(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return yp!==void 0?yp.createHTML(t):t}const X1=(e,t)=>{const r=e.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=lo;for(let a=0;a<r;a++){const l=e[a];let u,h,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===lo?h[1]==="!--"?n=bp:h[1]!==void 0?n=wp:h[2]!==void 0?(Ig.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=Cs):h[3]!==void 0&&(n=Cs):n===Cs?h[0]===">"?(n=i??lo,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,u=h[1],n=h[3]===void 0?Cs:h[3]==='"'?_p:xp):n===_p||n===xp?n=Cs:n===bp||n===wp?n=lo:(n=Cs,i=void 0);const g=n===Cs&&e[a+1].startsWith("/>")?" ":"";o+=n===lo?l+K1:d>=0?(s.push(u),l.slice(0,d)+Lg+l.slice(d)+Xr+g):l+Xr+(d===-2?a:g)}return[Rg(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class nn{constructor({strings:t,_$litType$:r},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[u,h]=X1(t,r);if(this.el=nn.createElement(u,s),Ls.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Ls.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Lg)){const p=h[n++],g=i.getAttribute(d).split(Xr),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:g,ctor:v[1]==="."?Z1:v[1]==="?"?J1:v[1]==="@"?ew:ml}),i.removeAttribute(d)}else d.startsWith(Xr)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(Ig.test(i.tagName)){const d=i.textContent.split(Xr),p=d.length-1;if(p>0){i.textContent=Ua?Ua.emptyScript:"";for(let g=0;g<p;g++)i.append(d[g],sn()),Ls.nextNode(),l.push({type:2,index:++o});i.append(d[p],sn())}}}else if(i.nodeType===8)if(i.data===Mg)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Xr,d+1))!==-1;)l.push({type:7,index:o}),d+=Xr.length-1}o++}}static createElement(t,r){const s=Ws.createElement("template");return s.innerHTML=t,s}}function Fi(e,t,r=e,s){var n,a;if(t===It)return t;let i=s!==void 0?(n=r._$Co)==null?void 0:n[s]:r._$Cl;const o=on(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,s)),s!==void 0?(r._$Co??(r._$Co=[]))[s]=i:r._$Cl=i),i!==void 0&&(t=Fi(e,i._$AS(e,t.values),i,s)),t}class Y1{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??Ws).importNode(r,!0);Ls.currentNode=i;let o=Ls.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let u;l.type===2?u=new gn(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new tw(o,this,t)),this._$AV.push(u),l=s[++a]}n!==(l==null?void 0:l.index)&&(o=Ls.nextNode(),n++)}return Ls.currentNode=Ws,i}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class gn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,s,i){this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Fi(this,t,r),on(t)?t===be||t==null||t===""?(this._$AH!==be&&this._$AR(),this._$AH=be):t!==this._$AH&&t!==It&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):q1(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==be&&on(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ws.createTextNode(t)),this._$AH=t}$(t){var o;const{values:r,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=nn.createElement(Rg(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const n=new Y1(i,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(t){let r=kp.get(t.strings);return r===void 0&&kp.set(t.strings,r=new nn(t)),r}k(t){Ad(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,i=0;for(const o of t)i===r.length?r.push(s=new gn(this.O(sn()),this.O(sn()),this,this.options)):s=r[i],s._$AI(o),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);t!==this._$AB;){const i=vp(t).nextSibling;vp(t).remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}let ml=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,i,o){this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=be}_$AI(t,r=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=Fi(this,t,r,0),n=!on(t)||t!==this._$AH&&t!==It,n&&(this._$AH=t);else{const a=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=Fi(this,a[s+l],r,l),u===It&&(u=this._$AH[l]),n||(n=!on(u)||u!==this._$AH[l]),u===be?t=be:t!==be&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}n&&!i&&this.j(t)}j(t){t===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class Z1 extends ml{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===be?void 0:t}}class J1 extends ml{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==be)}}class ew extends ml{constructor(t,r,s,i,o){super(t,r,s,i,o),this.type=5}_$AI(t,r=this){if((t=Fi(this,t,r,0)??be)===It)return;const s=this._$AH,i=t===be&&s!==be||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==be&&(s===be||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class tw{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Fi(this,t)}}const ic=Po.litHtmlPolyfillSupport;ic==null||ic(nn,gn),(Po.litHtmlVersions??(Po.litHtmlVersions=[])).push("3.3.3");const rw=(e,t,r)=>{const s=(r==null?void 0:r.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;s._$litPart$=i=new gn(t.insertBefore(sn(),o),o,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Os=globalThis;let No=class extends ci{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=rw(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return It}};var rf;No._$litElement$=!0,No.finalized=!0,(rf=Os.litElementHydrateSupport)==null||rf.call(Os,{LitElement:No});const oc=Os.litElementPolyfillSupport;oc==null||oc({LitElement:No});(Os.litElementVersions??(Os.litElementVersions=[])).push("4.2.2");var sw=H`
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
`,q=H`
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
`,Og=Object.defineProperty,iw=Object.defineProperties,ow=Object.getOwnPropertyDescriptor,nw=Object.getOwnPropertyDescriptors,Cp=Object.getOwnPropertySymbols,aw=Object.prototype.hasOwnProperty,lw=Object.prototype.propertyIsEnumerable,nc=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Td=e=>{throw TypeError(e)},Sp=(e,t,r)=>t in e?Og(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Vr=(e,t)=>{for(var r in t||(t={}))aw.call(t,r)&&Sp(e,r,t[r]);if(Cp)for(var r of Cp(t))lw.call(t,r)&&Sp(e,r,t[r]);return e},vn=(e,t)=>iw(e,nw(t)),c=(e,t,r,s)=>{for(var i=s>1?void 0:s?ow(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Og(t,r,i),i},Dg=(e,t,r)=>t.has(e)||Td("Cannot "+r),cw=(e,t,r)=>(Dg(e,t,"read from private field"),t.get(e)),uw=(e,t,r)=>t.has(e)?Td("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),dw=(e,t,r,s)=>(Dg(e,t,"write to private field"),t.set(e,r),r),hw=function(e,t){this[0]=e,this[1]=t},pw=e=>{var t=e[nc("asyncIterator")],r=!1,s,i={};return t==null?(t=e[nc("iterator")](),s=o=>i[o]=n=>t[o](n)):(t=t.call(e),s=o=>i[o]=n=>{if(r){if(r=!1,o==="throw")throw n;return n}return r=!0,{done:!1,value:new hw(new Promise(a=>{var l=t[o](n);l instanceof Object||Td("Object expected"),a(l)}),1)}}),i[nc("iterator")]=()=>i,s("next"),"throw"in t?s("throw"):i.throw=o=>{throw o},"return"in t&&s("return"),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fw={attribute:!0,type:String,converter:Vi,reflect:!1,hasChanged:zd},mw=(e=fw,t,r)=>{const{kind:s,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),s==="accessor"){const{name:n}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,e,a),a}}}if(s==="setter"){const{name:n}=r;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e,!0,a)}}throw Error("Unsupported decorator location: "+s)};function f(e){return(t,r)=>typeof r=="object"?mw(e,t,r):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function W(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yn(e){return(t,r)=>{const s=typeof t=="function"?t:t[r];Object.assign(s,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vg=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(e,t){return(r,s,i)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(e))??null};return Vg(r,s,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gw(e){return(t,r)=>Vg(t,r,{async get(){var s;return await this.updateComplete,((s=this.renderRoot)==null?void 0:s.querySelector(e))??null}})}var ca,F=class extends No{constructor(){super(),uw(this,ca,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,Vr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const s=customElements.get(e);if(!s){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",o=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in s&&s.version&&(o=" v"+s.version),!(i&&o&&i===o)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${o} has already been registered.`)}attributeChangedCallback(e,t,r){cw(this,ca)||(this.constructor.elementProperties.forEach((s,i)=>{s.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),dw(this,ca,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};ca=new WeakMap;F.version="2.20.1";F.dependencies={};c([f()],F.prototype,"dir",2);c([f()],F.prototype,"lang",2);var gl=class extends F{render(){return A` <slot></slot> `}};gl.styles=[q,sw];/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vw=new Set(["children","localName","ref","style","className"]),Ep=new WeakMap,$p=(e,t,r,s,i)=>{const o=i==null?void 0:i[t];o===void 0?(e[t]=r,r==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):r!==s&&((n,a,l)=>{let u=Ep.get(n);u===void 0&&Ep.set(n,u=new Map);let h=u.get(a);l!==void 0?h===void 0?(u.set(a,h={handleEvent:l}),n.addEventListener(a,h)):h.handleEvent=l:h!==void 0&&(u.delete(a),n.removeEventListener(a,h))})(e,o,r)},U=({react:e,tagName:t,elementClass:r,events:s,displayName:i})=>{const o=new Set(Object.keys(s??{})),n=e.forwardRef((a,l)=>{const u=e.useRef(new Map),h=e.useRef(null),d={},p={};for(const[g,v]of Object.entries(a))vw.has(g)?d[g==="className"?"class":g]=v:o.has(g)||g in r.prototype?p[g]=v:d[g]=v;return e.useLayoutEffect(()=>{if(h.current===null)return;const g=new Map;for(const v in p)$p(h.current,v,a[v],u.current.get(v),s),u.current.delete(v),g.set(v,a[v]);for(const[v,x]of u.current)$p(h.current,v,void 0,x,s);u.current=g}),e.useLayoutEffect(()=>{var g;(g=h.current)==null||g.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(g=>{h.current=g,typeof l=="function"?l(g):l!==null&&(l.current=g)},[l])})});return n.displayName=i??r.name,n};var yw="sl-visually-hidden";gl.define("sl-visually-hidden");U({tagName:yw,elementClass:gl,react:j,events:{},displayName:"SlVisuallyHidden"});var bw=H`
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
`,ww=H`
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
`,gu="";function zp(e){gu=e}function xw(e=""){if(!gu){const t=[...document.getElementsByTagName("script")],r=t.find(s=>s.hasAttribute("data-shoelace"));if(r)zp(r.getAttribute("data-shoelace"));else{const s=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let i="";s&&(i=s.getAttribute("src")),zp(i.split("/").slice(0,-1).join("/"))}}return gu.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var _w={name:"default",resolver:e=>xw(`assets/icons/${e}.svg`)},kw=_w,Ap={caret:`
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
  `},Cw={name:"system",resolver:e=>e in Ap?`data:image/svg+xml,${encodeURIComponent(Ap[e])}`:""},Sw=Cw,Ew=[kw,Sw],vu=[];function $w(e){vu.push(e)}function zw(e){vu=vu.filter(t=>t!==e)}function Tp(e){return Ew.find(t=>t.name===e)}var Aw=H`
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
`;function L(e,t){const r=Vr({waitUntilFirstUpdate:!1},t);return(s,i)=>{const{update:o}=s,n=Array.isArray(e)?e:[e];s.update=function(a){n.forEach(l=>{const u=l;if(a.has(u)){const h=a.get(u),d=this[u];h!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,d)}}),o.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tw=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,Fg=e=>e.strings===void 0,Pw={},Nw=(e,t=Pw)=>e._$AH=t;var co=Symbol(),jn=Symbol(),ac,lc=new Map,he=class extends F{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let s;if(t!=null&&t.spriteSheet)return this.svg=A`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(s=await fetch(e,{mode:"cors"}),!s.ok)return s.status===410?co:jn}catch{return jn}try{const i=document.createElement("div");i.innerHTML=await s.text();const o=i.firstElementChild;if(((r=o==null?void 0:o.tagName)==null?void 0:r.toLowerCase())!=="svg")return co;ac||(ac=new DOMParser);const a=ac.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):co}catch{return co}}connectedCallback(){super.connectedCallback(),$w(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),zw(this)}getIconSource(){const e=Tp(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),s=r?Tp(this.library):void 0;if(!t){this.svg=null;return}let i=lc.get(t);if(i||(i=this.resolveIcon(t,s),lc.set(t,i)),!this.initialRender)return;const o=await i;if(o===jn&&lc.delete(t),t===this.getIconSource().url){if(Tw(o)){if(this.svg=o,s){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&n&&s.mutator(n)}return}switch(o){case jn:case co:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=s==null?void 0:s.mutator)==null||e.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};he.styles=[q,Aw];c([W()],he.prototype,"svg",2);c([f({reflect:!0})],he.prototype,"name",2);c([f()],he.prototype,"src",2);c([f()],he.prototype,"label",2);c([f({reflect:!0})],he.prototype,"library",2);c([L("label")],he.prototype,"handleLabelChange",1);c([L(["name","src","library"])],he.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},bn=e=>(...t)=>({_$litDirective$:e,values:t});let wn=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=bn(class extends wn{constructor(e){var t;if(super(e),e.type!==fr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((s=this.nt)!=null&&s.has(o))&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const n=!!t[o];n===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return It}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bg=Symbol.for(""),Lw=e=>{if((e==null?void 0:e.r)===Bg)return e==null?void 0:e._$litStatic$},Ha=(e,...t)=>({_$litStatic$:t.reduce((r,s,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[i+1],e[0]),r:Bg}),Pp=new Map,Mw=e=>(t,...r)=>{const s=r.length;let i,o;const n=[],a=[];let l,u=0,h=!1;for(;u<s;){for(l=t[u];u<s&&(o=r[u],(i=Lw(o))!==void 0);)l+=i+t[++u],h=!0;u!==s&&a.push(o),n.push(l),u++}if(u===s&&n.push(t[s]),h){const d=n.join("$$lit$$");(t=Pp.get(d))===void 0&&(n.raw=n,Pp.set(d,t=n)),r=a}return e(t,...r)},Lo=Mw(A);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=e=>e??be;var je=class extends F{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ha`a`:Ha`button`;return Lo`
      <${t}
        part="base"
        class=${K({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${V(e?void 0:this.disabled)}
        type=${V(e?void 0:"button")}
        href=${V(e?this.href:void 0)}
        target=${V(e?this.target:void 0)}
        download=${V(e?this.download:void 0)}
        rel=${V(e&&this.target?"noreferrer noopener":void 0)}
        role=${V(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${V(this.name)}
          library=${V(this.library)}
          src=${V(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};je.styles=[q,ww];je.dependencies={"sl-icon":he};c([I(".icon-button")],je.prototype,"button",2);c([W()],je.prototype,"hasFocus",2);c([f()],je.prototype,"name",2);c([f()],je.prototype,"library",2);c([f()],je.prototype,"src",2);c([f()],je.prototype,"href",2);c([f()],je.prototype,"target",2);c([f()],je.prototype,"download",2);c([f()],je.prototype,"label",2);c([f({type:Boolean,reflect:!0})],je.prototype,"disabled",2);const yu=new Set,_i=new Map;let Cr,Pd="ltr",Nd="en";const jg=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(jg){const e=new MutationObserver(Hg);Pd=document.documentElement.dir||"ltr",Nd=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ug(...e){e.map(t=>{const r=t.$code.toLowerCase();_i.has(r)?_i.set(r,Object.assign(Object.assign({},_i.get(r)),t)):_i.set(r,t),Cr||(Cr=t)}),Hg()}function Hg(){jg&&(Pd=document.documentElement.dir||"ltr",Nd=document.documentElement.lang||navigator.language),[...yu.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Iw=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){yu.add(this.host)}hostDisconnected(){yu.delete(this.host)}dir(){return`${this.host.dir||Pd}`.toLowerCase()}lang(){const t=`${this.host.lang||Nd}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(t),t}catch{return Cr?Cr.$code.toLowerCase():"en"}}getTranslationData(t){var r,s;let i;try{i=new Intl.Locale(t.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}const o=i.language.toLowerCase(),n=(s=(r=i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&s!==void 0?s:"",a=_i.get(`${o}-${n}`),l=_i.get(o);return{locale:i,language:o,region:n,primary:a,secondary:l}}exists(t,r){var s;const{primary:i,secondary:o}=this.getTranslationData((s=r.lang)!==null&&s!==void 0?s:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||o&&o[t]||r.includeFallback&&Cr&&Cr[t])}term(t,...r){const{primary:s,secondary:i}=this.getTranslationData(this.lang());let o;if(s&&s[t])o=s[t];else if(i&&i[t])o=i[t];else if(Cr&&Cr[t])o=Cr[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...r):o}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,r)}};var Wg={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ug(Wg);var Rw=Wg,oe=class extends Iw{};Ug(Rw);var Ow=0,Qt=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.attrId=++Ow,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,A`
      <div
        part="base"
        class=${K({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
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
    `}};Qt.styles=[q,bw];Qt.dependencies={"sl-icon-button":je};c([I(".tab")],Qt.prototype,"tab",2);c([f({reflect:!0})],Qt.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],Qt.prototype,"active",2);c([f({type:Boolean,reflect:!0})],Qt.prototype,"closable",2);c([f({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);c([f({type:Number,reflect:!0})],Qt.prototype,"tabIndex",2);c([L("active")],Qt.prototype,"handleActiveChange",1);c([L("disabled")],Qt.prototype,"handleDisabledChange",1);var Dw="sl-tab";Qt.define("sl-tab");var Vw=U({tagName:Dw,elementClass:Qt,react:j,events:{onSlClose:"sl-close"},displayName:"SlTab"}),Fw=Vw,Bw=H`
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
`,jw=H`
  :host {
    display: contents;
  }
`,Gi=class extends F{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};Gi.styles=[q,jw];c([f({type:Boolean,reflect:!0})],Gi.prototype,"disabled",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Gi.prototype,"handleDisabledChange",1);function Uw(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var bu=new Set;function Hw(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ww(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Mo(e){if(bu.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=Hw()+Ww();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),t<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Io(e){bu.delete(e),bu.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function wu(e,t,r="vertical",s="smooth"){const i=Uw(e,t),o=i.top+t.scrollTop,n=i.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,u=t.scrollTop,h=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(n<a?t.scrollTo({left:n,behavior:s}):n+e.clientWidth>l&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:s})),(r==="vertical"||r==="both")&&(o<u?t.scrollTo({top:o,behavior:s}):o+e.clientHeight>h&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:s}))}var Ze=class extends F{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new oe(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const r=t.filter(({target:s})=>{if(s===this)return!0;if(s.closest("sl-tab-group")!==this)return!1;const i=s.tagName.toLowerCase();return i==="sl-tab"||i==="sl-tab-panel"});if(r.length!==0){if(r.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),r.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(r.some(s=>s.attributeName==="active")){const i=r.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="sl-tab").map(o=>o.target).find(o=>o.active);i&&this.setActiveTab(i)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,s)=>{var i;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),s.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(a=>a.matches(":focus")),o=this.localize.dir()==="rtl";let n=null;if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){if(e.key==="Home")n=this.focusableTabs[0];else if(e.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===i);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===i);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&wu(n,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Vr({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var i;return s.active=s.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&wu(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,s=this.localize.dir()==="rtl",i=this.getAllTabs(),n=i.slice(0,i.indexOf(e)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let r=null;const s=t==="forward"?1:-1;let i=e+s;for(;e<this.tabs.length;){if(r=this.tabs[i]||null,r===null){t==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;i+=s}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return A`
      <div
        part="base"
        class=${K({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${K({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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
                  class=${K({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};Ze.styles=[q,Bw];Ze.dependencies={"sl-icon-button":je,"sl-resize-observer":Gi};c([I(".tab-group")],Ze.prototype,"tabGroup",2);c([I(".tab-group__body")],Ze.prototype,"body",2);c([I(".tab-group__nav")],Ze.prototype,"nav",2);c([I(".tab-group__indicator")],Ze.prototype,"indicator",2);c([W()],Ze.prototype,"hasScrollControls",2);c([W()],Ze.prototype,"shouldHideScrollStartButton",2);c([W()],Ze.prototype,"shouldHideScrollEndButton",2);c([f()],Ze.prototype,"placement",2);c([f()],Ze.prototype,"activation",2);c([f({attribute:"no-scroll-controls",type:Boolean})],Ze.prototype,"noScrollControls",2);c([f({attribute:"fixed-scroll-controls",type:Boolean})],Ze.prototype,"fixedScrollControls",2);c([yn({passive:!0})],Ze.prototype,"updateScrollButtons",1);c([L("noScrollControls",{waitUntilFirstUpdate:!0})],Ze.prototype,"updateScrollControls",1);c([L("placement",{waitUntilFirstUpdate:!0})],Ze.prototype,"syncIndicator",1);var Gw="sl-tab-group";Ze.define("sl-tab-group");var Kw=U({tagName:Gw,elementClass:Ze,react:j,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"}),qw=Kw,Qw=H`
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
`,Xw=0,Ki=class extends F{constructor(){super(...arguments),this.attrId=++Xw,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return A`
      <slot
        part="base"
        class=${K({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ki.styles=[q,Qw];c([f({reflect:!0})],Ki.prototype,"name",2);c([f({type:Boolean,reflect:!0})],Ki.prototype,"active",2);c([L("active")],Ki.prototype,"handleActiveChange",1);var Yw="sl-tab-panel";Ki.define("sl-tab-panel");U({tagName:Yw,elementClass:Ki,react:j,events:{},displayName:"SlTabPanel"});var Zw=H`
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
`,Fr=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return A`
      <span
        part="base"
        class=${K({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
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
    `}};Fr.styles=[q,Zw];Fr.dependencies={"sl-icon-button":je};c([f({reflect:!0})],Fr.prototype,"variant",2);c([f({reflect:!0})],Fr.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Fr.prototype,"pill",2);c([f({type:Boolean})],Fr.prototype,"removable",2);var Jw="sl-tag";Fr.define("sl-tag");U({tagName:Jw,elementClass:Fr,react:j,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var ex=H`
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
`,qi=(e="value")=>(t,r)=>{const s=t.constructor,i=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(o,n,a){var l;const u=s.getPropertyOptions(e),h=typeof u.attribute=="string"?u.attribute:e;if(o===h){const d=u.converter||Vi,g=(typeof d=="function"?d:(l=d==null?void 0:d.fromAttribute)!=null?l:Vi.fromAttribute)(a,u.type);this[e]!==g&&(this[r]=g)}i.call(this,o,n,a)}},Js=H`
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
`,uo=new WeakMap,ho=new WeakMap,po=new WeakMap,cc=new WeakSet,Un=new WeakMap,Br=class{constructor(e,t){this.handleFormData=r=>{const s=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!n&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(a=>{r.formData.append(i,a.toString())}):r.formData.append(i,o.toString()))},this.handleFormSubmit=r=>{var s;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=uo.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Un.set(this.host,[])},this.handleInteraction=r=>{const s=Un.get(this.host);s.includes(r.type)||s.push(r.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const s of r)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const s of r)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Vr({form:r=>{const s=r.form;if(s){const o=r.getRootNode().querySelector(`#${s}`);if(o)return o}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var s;return(s=r.disabled)!=null?s:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,s)=>r.value=s,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Un.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Un.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,uo.has(this.form)?uo.get(this.form).add(this.host):uo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ho.has(this.form)||(ho.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),po.has(this.form)||(po.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=uo.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ho.has(this.form)&&(this.form.reportValidity=ho.get(this.form),ho.delete(this.form)),po.has(this.form)&&(this.form.checkValidity=po.get(this.form),po.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?cc.add(e):cc.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&r.setAttribute(s,t.getAttribute(s))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!cc.has(t),s=!!t.required;t.toggleAttribute("data-required",s),t.toggleAttribute("data-optional",!s),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},vl=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),tx=Object.freeze(vn(Vr({},vl),{valid:!1,valueMissing:!0})),rx=Object.freeze(vn(Vr({},vl),{valid:!1,customError:!0})),vt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const s=r.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function sx(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(r+=s.textContent)}),r}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gs=bn(class extends wn{constructor(e){if(super(e),e.type!==fr.PROPERTY&&e.type!==fr.ATTRIBUTE&&e.type!==fr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Fg(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===It||t===be)return t;const r=e.element,s=e.name;if(e.type===fr.PROPERTY){if(t===r[s])return It}else if(e.type===fr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(s))return It}else if(e.type===fr.ATTRIBUTE&&r.getAttribute(s)===t+"")return It;return Nw(e),t}});var ie=class extends F{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,s="preserve"){const i=t??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(e,i,o,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t;return A`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
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
            class=${K({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${V(this.name)}
              .value=${Gs(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${V(this.placeholder)}
              rows=${V(this.rows)}
              minlength=${V(this.minlength)}
              maxlength=${V(this.maxlength)}
              autocapitalize=${V(this.autocapitalize)}
              autocorrect=${V(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${V(this.spellcheck)}
              enterkeyhint=${V(this.enterkeyhint)}
              inputmode=${V(this.inputmode)}
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
    `}};ie.styles=[q,Js,ex];c([I(".textarea__control")],ie.prototype,"input",2);c([I(".textarea__size-adjuster")],ie.prototype,"sizeAdjuster",2);c([W()],ie.prototype,"hasFocus",2);c([f()],ie.prototype,"title",2);c([f()],ie.prototype,"name",2);c([f()],ie.prototype,"value",2);c([f({reflect:!0})],ie.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"filled",2);c([f()],ie.prototype,"label",2);c([f({attribute:"help-text"})],ie.prototype,"helpText",2);c([f()],ie.prototype,"placeholder",2);c([f({type:Number})],ie.prototype,"rows",2);c([f()],ie.prototype,"resize",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"readonly",2);c([f({reflect:!0})],ie.prototype,"form",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"required",2);c([f({type:Number})],ie.prototype,"minlength",2);c([f({type:Number})],ie.prototype,"maxlength",2);c([f()],ie.prototype,"autocapitalize",2);c([f()],ie.prototype,"autocorrect",2);c([f()],ie.prototype,"autocomplete",2);c([f({type:Boolean})],ie.prototype,"autofocus",2);c([f()],ie.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],ie.prototype,"spellcheck",2);c([f()],ie.prototype,"inputmode",2);c([qi()],ie.prototype,"defaultValue",2);c([L("disabled",{waitUntilFirstUpdate:!0})],ie.prototype,"handleDisabledChange",1);c([L("rows",{waitUntilFirstUpdate:!0})],ie.prototype,"handleRowsChange",1);c([L("value",{waitUntilFirstUpdate:!0})],ie.prototype,"handleValueChange",1);var ix="sl-textarea";ie.define("sl-textarea");var ox=U({tagName:ix,elementClass:ie,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),xu=ox,nx=H`
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
`,ax=H`
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
`;const ps=Math.min,Nr=Math.max,Wa=Math.round,Hn=Math.floor,Lr=e=>({x:e,y:e}),lx={left:"right",right:"left",bottom:"top",top:"bottom"};function Gg(e,t,r){return Nr(e,ps(t,r))}function Qi(e,t){return typeof e=="function"?e(t):e}function Ks(e){return e.split("-")[0]}function Xi(e){return e.split("-")[1]}function Kg(e){return e==="x"?"y":"x"}function Ld(e){return e==="y"?"height":"width"}function Tr(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function Md(e){return Kg(Tr(e))}function cx(e,t,r){r===void 0&&(r=!1);const s=Xi(e),i=Md(e),o=Ld(i);let n=i==="x"?s===(r?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=Ga(n)),[n,Ga(n)]}function ux(e){const t=Ga(e);return[_u(e),t,_u(t)]}function _u(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const Np=["left","right"],Lp=["right","left"],dx=["top","bottom"],hx=["bottom","top"];function px(e,t,r){switch(e){case"top":case"bottom":return r?t?Lp:Np:t?Np:Lp;case"left":case"right":return t?dx:hx;default:return[]}}function fx(e,t,r,s){const i=Xi(e);let o=px(Ks(e),r==="start",s);return i&&(o=o.map(n=>n+"-"+i),t&&(o=o.concat(o.map(_u)))),o}function Ga(e){const t=Ks(e);return lx[t]+e.slice(t.length)}function mx(e){var t,r,s,i;return{top:(t=e.top)!=null?t:0,right:(r=e.right)!=null?r:0,bottom:(s=e.bottom)!=null?s:0,left:(i=e.left)!=null?i:0}}function qg(e){return typeof e!="number"?mx(e):{top:e,right:e,bottom:e,left:e}}function Ka(e){const{x:t,y:r,width:s,height:i}=e;return{width:s,height:i,top:r,left:t,right:t+s,bottom:r+i,x:t,y:r}}function Mp(e,t,r){let{reference:s,floating:i}=e;const o=Tr(t),n=Md(t),a=Ld(n),l=Ks(t),u=o==="y",h=s.x+s.width/2-i.width/2,d=s.y+s.height/2-i.height/2,p=s[a]/2-i[a]/2;let g;switch(l){case"top":g={x:h,y:s.y-i.height};break;case"bottom":g={x:h,y:s.y+s.height};break;case"right":g={x:s.x+s.width,y:d};break;case"left":g={x:s.x-i.width,y:d};break;default:g={x:s.x,y:s.y}}const v=Xi(t);return v&&(g[n]+=p*(v==="end"?1:-1)*(r&&u?-1:1)),g}async function gx(e,t){var r;t===void 0&&(t={});const{x:s,y:i,platform:o,rects:n,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:g=0}=Qi(t,e),v=qg(g),C=a[p?d==="floating"?"reference":"floating":d],b=Ka(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(C)))==null||r?C:C.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:h,strategy:l})),m=d==="floating"?{x:s,y:i,width:n.floating.width,height:n.floating.height}:n.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),w=await(o.isElement==null?void 0:o.isElement(y))&&await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1},k=Ka(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:m,offsetParent:y,strategy:l}):m);return{top:(b.top-k.top+v.top)/w.y,bottom:(k.bottom-b.bottom+v.bottom)/w.y,left:(b.left-k.left+v.left)/w.x,right:(k.right-b.right+v.right)/w.x}}const vx=50,yx=async(e,t,r)=>{const{placement:s="bottom",strategy:i="absolute",middleware:o=[],platform:n}=r,a=n.detectOverflow?n:{...n,detectOverflow:gx},l=await(n.isRTL==null?void 0:n.isRTL(t));let u=await n.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Mp(u,s,l),p=s,g=0;const v={};for(let x=0;x<o.length;x++){const C=o[x];if(!C)continue;const{name:b,fn:m}=C,{x:y,y:w,data:k,reset:S}=await m({x:h,y:d,initialPlacement:s,placement:p,strategy:i,middlewareData:v,rects:u,platform:a,elements:{reference:e,floating:t}});h=y??h,d=w??d,v[b]={...v[b],...k},S&&g<vx&&(g++,typeof S=="object"&&(S.placement&&(p=S.placement),S.rects&&(u=S.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:h,y:d}=Mp(u,p,l)),x=-1)}return{x:h,y:d,placement:p,strategy:i,middlewareData:v}},bx=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:s,placement:i,rects:o,platform:n,elements:a,middlewareData:l}=t,{element:u,padding:h=0}=Qi(e,t)||{};if(u==null)return{};const d=qg(h),p={x:r,y:s},g=Md(i),v=Ld(g),x=await n.getDimensions(u),C=g==="y",b=C?"top":"left",m=C?"bottom":"right",y=C?"clientHeight":"clientWidth",w=o.reference[v]+o.reference[g]-p[g]-o.floating[v],k=p[g]-o.reference[g],S=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let $=S?S[y]:0;(!$||!await(n.isElement==null?void 0:n.isElement(S)))&&($=a.floating[y]||o.floating[v]);const T=w/2-k/2,M=$/2-x[v]/2-1,z=ps(d[b],M),ee=ps(d[m],M),pe=$-x[v]-ee,de=$/2-x[v]/2+T,ce=Gg(z,de,pe),Ie=!l.arrow&&Xi(i)!=null&&de!==ce&&o.reference[v]/2-(de<z?z:ee)-x[v]/2<0,O=Ie?de<z?de-z:de-pe:0;return{[g]:p[g]+O,data:{[g]:ce,centerOffset:de-ce-O,...Ie&&{alignmentOffset:O}},reset:Ie}}}),wx=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,s;const{placement:i,middlewareData:o,rects:n,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...C}=Qi(e,t);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const b=Ks(i),m=Tr(a),y=Ks(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(u.floating)),k=p||(y||!x?[Ga(a)]:ux(a)),S=v!=="none";!p&&S&&k.push(...fx(a,x,v,w));const $=[a,...k],T=await l.detectOverflow(t,C),M=[];let z=((s=o.flip)==null?void 0:s.overflows)||[];if(h&&M.push(T[b]),d){const ce=cx(i,n,w);M.push(T[ce[0]],T[ce[1]])}if(z=[...z,{placement:i,overflows:M}],!M.every(ce=>ce<=0)){var ee,pe;const ce=(((ee=o.flip)==null?void 0:ee.index)||0)+1,Ie=$[ce];if(Ie&&(!(d==="alignment"?m!==Tr(Ie):!1)||z.every(P=>Tr(P.placement)===m?P.overflows[0]>0:!0)))return{data:{index:ce,overflows:z},reset:{placement:Ie}};let O=(pe=z.filter(re=>re.overflows[0]<=0).sort((re,P)=>re.overflows[1]-P.overflows[1])[0])==null?void 0:pe.placement;if(!O)switch(g){case"bestFit":{var de;const re=(de=z.filter(P=>{if(S){const B=Tr(P.placement);return B===m||B==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(B=>B>0).reduce((B,Q)=>B+Q,0)]).sort((P,B)=>P[1]-B[1])[0])==null?void 0:de[0];re&&(O=re);break}case"initialPlacement":O=a;break}if(i!==O)return{reset:{placement:O}}}return{}}}},xx=new Set(["left","top"]);async function _x(e,t){const{placement:r,platform:s,elements:i}=e,o=await(s.isRTL==null?void 0:s.isRTL(i.floating)),n=Ks(r),a=Xi(r),l=Tr(r)==="y",u=xx.has(n)?-1:1,h=o&&l?-1:1,d=Qi(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),l?{x:g*h,y:p*u}:{x:p*u,y:g*h}}const kx=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,s;const{x:i,y:o,placement:n,middlewareData:a}=t,l=await _x(t,e);return n===((r=a.offset)==null?void 0:r.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:n}}}}},Cx=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:s,placement:i,platform:o}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:m=>{let{x:y,y:w}=m;return{x:y,y:w}}},...u}=Qi(e,t),h={x:r,y:s},d=await o.detectOverflow(t,u),p=Tr(i),g=Kg(p);let v=h[g],x=h[p];const C=(m,y)=>Gg(y+d[m==="y"?"top":"left"],y,y-d[m==="y"?"bottom":"right"]);n&&(v=C(g,v)),a&&(x=C(p,x));const b=l.fn({...t,[g]:v,[p]:x});return{...b,data:{x:b.x-r,y:b.y-s,enabled:{[g]:n,[p]:a}}}}}},Sx=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:s,platform:i,elements:o}=t,{apply:n=()=>{},...a}=Qi(e,t),l=await i.detectOverflow(t,a),u=Ks(r),h=Xi(r),d=Tr(r)==="y",{width:p,height:g}=s.floating;let v,x;u==="top"||u==="bottom"?(v=u,x=h===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(x=u,v=h==="end"?"top":"bottom");const C=g-l.top-l.bottom,b=p-l.left-l.right,m=ps(g-l[v],C),y=ps(p-l[x],b),w=t.middlewareData.shift,k=!w;let S=m,$=y;w!=null&&w.enabled.x&&($=b),w!=null&&w.enabled.y&&(S=C),k&&!h&&(d?$=p-2*Nr(l.left,l.right):S=g-2*Nr(l.top,l.bottom)),await n({...t,availableWidth:$,availableHeight:S});const T=await i.getDimensions(o.floating);return p!==T.width||g!==T.height?{reset:{rects:!0}}:{}}}};function yl(){return typeof window<"u"}function Yi(e){return Qg(e)?(e.nodeName||"").toLowerCase():"#document"}function St(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function jr(e){var t;return(t=(Qg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Qg(e){return yl()?e instanceof Node||e instanceof St(e).Node:!1}function yr(e){return yl()?e instanceof Element||e instanceof St(e).Element:!1}function bs(e){return yl()?e instanceof HTMLElement||e instanceof St(e).HTMLElement:!1}function Ip(e){return!yl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof St(e).ShadowRoot}function bl(e){const{overflow:t,overflowX:r,overflowY:s,display:i}=br(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+r)&&i!=="inline"&&i!=="contents"}function Ex(e){return/^(table|td|th)$/.test(Yi(e))}function wl(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const $x=/transform|translate|scale|rotate|perspective|filter/,zx=/paint|layout|strict|content/,Ss=e=>!!e&&e!=="none";let uc;function xl(e){const t=yr(e)?br(e):e;return Ss(t.transform)||Ss(t.translate)||Ss(t.scale)||Ss(t.rotate)||Ss(t.perspective)||!Id()&&(Ss(t.backdropFilter)||Ss(t.filter))||$x.test(t.willChange||"")||zx.test(t.contain||"")}function Ax(e){let t=qs(e);for(;bs(t)&&!an(t);){if(xl(t))return t;if(wl(t))return null;t=qs(t)}return null}function Id(){return uc==null&&(uc=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),uc}function an(e){return/^(html|body|#document)$/.test(Yi(e))}function br(e){return St(e).getComputedStyle(e)}function _l(e){return yr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function qs(e){if(Yi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ip(e)&&e.host||jr(e);return Ip(t)?t.host:t}function Xg(e){const t=qs(e);return an(t)?(e.ownerDocument||e).body:bs(t)&&bl(t)?t:Xg(t)}function ln(e,t,r){var s;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Xg(e),o=i===((s=e.ownerDocument)==null?void 0:s.body),n=St(i);if(o){const a=ku(n);return t.concat(n,n.visualViewport||[],bl(i)?i:[],a&&r?ln(a):[])}else return t.concat(i,ln(i,[],r))}function ku(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Yg(e){const t=br(e);let r=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const i=bs(e),o=i?e.offsetWidth:r,n=i?e.offsetHeight:s,a=Wa(r)!==o||Wa(s)!==n;return a&&(r=o,s=n),{width:r,height:s,$:a}}function Rd(e){return yr(e)?e:e.contextElement}function Ai(e){const t=Rd(e);if(!bs(t))return Lr(1);const r=t.getBoundingClientRect(),{width:s,height:i,$:o}=Yg(t);let n=(o?Wa(r.width):r.width)/s,a=(o?Wa(r.height):r.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const Tx=Lr(0);function Zg(e){const t=St(e);return!Id()||!t.visualViewport?Tx:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Px(e,t,r){return t===void 0&&(t=!1),!!r&&t&&r===St(e)}function Qs(e,t,r,s){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),o=Rd(e);let n=Lr(1);t&&(s?yr(s)&&(n=Ai(s)):n=Ai(e));const a=Px(o,r,s)?Zg(o):Lr(0);let l=(i.left+a.x)/n.x,u=(i.top+a.y)/n.y,h=i.width/n.x,d=i.height/n.y;if(o&&s){const p=St(o),g=yr(s)?St(s):s;let v=p,x=ku(v);for(;x&&g!==v;){const C=Ai(x),b=x.getBoundingClientRect(),m=br(x),y=b.left+(x.clientLeft+parseFloat(m.paddingLeft))*C.x,w=b.top+(x.clientTop+parseFloat(m.paddingTop))*C.y;l*=C.x,u*=C.y,h*=C.x,d*=C.y,l+=y,u+=w,v=St(x),x=ku(v)}}return Ka({width:h,height:d,x:l,y:u})}function kl(e,t){const r=_l(e).scrollLeft;return t?t.left+r:Qs(jr(e)).left+r}function Jg(e,t){const r=e.getBoundingClientRect(),s=r.left+t.scrollLeft-kl(e,r),i=r.top+t.scrollTop;return{x:s,y:i}}function Nx(e){let{elements:t,rect:r,offsetParent:s,strategy:i}=e;const o=i==="fixed",n=jr(s),a=t?wl(t.floating):!1;if(s===n||a&&o)return r;let l={scrollLeft:0,scrollTop:0},u=Lr(1);const h=Lr(0),d=bs(s);if((d||!o)&&((Yi(s)!=="body"||bl(n))&&(l=_l(s)),d)){const g=Qs(s);u=Ai(s),h.x=g.x+s.clientLeft,h.y=g.y+s.clientTop}const p=n&&!d&&!o?Jg(n,l):Lr(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+h.x+p.x,y:r.y*u.y-l.scrollTop*u.y+h.y+p.y}}function Lx(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Mx(e){const t=_l(e),r=e.ownerDocument.body,s=Nr(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=Nr(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-t.scrollLeft+kl(e);const n=-t.scrollTop;return br(r).direction==="rtl"&&(o+=Nr(e.clientWidth,r.clientWidth)-s),{width:s,height:i,x:o,y:n}}const Ix=25;function Rx(e,t,r){r===void 0&&(r="viewport");const s=r==="layoutViewport",i=St(e),o=jr(e),n=i.visualViewport;let a=o.clientWidth,l=o.clientHeight,u=0,h=0;if(n){const p=!Id()||t==="fixed";s?p||(u=-n.offsetLeft,h=-n.offsetTop):(a=n.width,l=n.height,p&&(u=n.offsetLeft,h=n.offsetTop))}if(kl(o)<=0){const p=o.ownerDocument,g=p.body,v=getComputedStyle(g),x=p.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,C=Math.abs(o.clientWidth-g.clientWidth-x),b=getComputedStyle(o).scrollbarGutter==="stable both-edges"?C/2:C;b<=Ix&&(a-=b)}return{width:a,height:l,x:u,y:h}}function Ox(e,t){const r=Qs(e,!0,t==="fixed"),s=r.top+e.clientTop,i=r.left+e.clientLeft,o=Ai(e),n=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,u=s*o.y;return{width:n,height:a,x:l,y:u}}function Rp(e,t,r){let s;if(t==="viewport"||t==="layoutViewport")s=Rx(e,r,t);else if(t==="document")s=Mx(jr(e));else if(yr(t))s=Ox(t,r);else{const i=Zg(e);s={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ka(s)}function Dx(e,t){const r=t.get(e);if(r)return r;let s=ln(e,[],!1).filter(a=>yr(a)&&Yi(a)!=="body"),i=null;const o=br(e).position==="fixed";let n=o?qs(e):e;for(;yr(n)&&!an(n);){const a=br(n),l=xl(n),u=i?i.position:o?"fixed":"";!l&&(u==="fixed"||u==="absolute"&&a.position==="static")?s=s.filter(d=>d!==n):i=a,n=qs(n)}return t.set(e,s),s}function Vx(e){let{element:t,boundary:r,rootBoundary:s,strategy:i}=e;const n=[...r==="clippingAncestors"?wl(t)?[]:Dx(t,this._c):[].concat(r),s],a=Rp(t,n[0],i);let l=a.top,u=a.right,h=a.bottom,d=a.left;for(let p=1;p<n.length;p++){const g=Rp(t,n[p],i);l=Nr(g.top,l),u=ps(g.right,u),h=ps(g.bottom,h),d=Nr(g.left,d)}return{width:u-d,height:h-l,x:d,y:l}}function Fx(e){const{width:t,height:r}=Yg(e);return{width:t,height:r}}function Bx(e,t,r){const s=bs(t),i=jr(t),o=r==="fixed",n=Qs(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Lr(0);if((s||!o)&&((Yi(t)!=="body"||bl(i))&&(a=_l(t)),s)){const p=Qs(t,!0,o,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}!s&&i&&(l.x=kl(i));const u=i&&!s&&!o?Jg(i,a):Lr(0),h=n.left+a.scrollLeft-l.x-u.x,d=n.top+a.scrollTop-l.y-u.y;return{x:h,y:d,width:n.width,height:n.height}}function dc(e){return br(e).position==="static"}function Op(e,t){if(!bs(e)||br(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return jr(e)===r&&(r=r.ownerDocument.body),r}function ev(e,t){const r=St(e);if(wl(e))return r;if(!bs(e)){let i=qs(e);for(;i&&!an(i);){if(yr(i)&&!dc(i))return i;i=qs(i)}return r}let s=Op(e,t);for(;s&&Ex(s)&&dc(s);)s=Op(s,t);return s&&an(s)&&dc(s)&&!xl(s)?r:s||Ax(e)||r}const jx=async function(e){const t=this.getOffsetParent||ev,r=this.getDimensions,s=await r(e.floating);return{reference:Bx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function Ux(e){return br(e).direction==="rtl"}const ua={convertOffsetParentRelativeRectToViewportRelativeRect:Nx,getDocumentElement:jr,getClippingRect:Vx,getOffsetParent:ev,getElementRects:jx,getClientRects:Lx,getDimensions:Fx,getScale:Ai,isElement:yr,isRTL:Ux};function tv(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Hx(e,t,r){let s=null,i;const o=jr(e);function n(){var h;clearTimeout(i),(h=s)==null||h.disconnect(),s=null}function a(h,d){h===void 0&&(h=!1),d===void 0&&(d=1),n();const p=e.getBoundingClientRect(),{left:g,top:v,width:x,height:C}=p;if(h||t(),!x||!C)return;const b=Hn(v),m=Hn(o.clientWidth-(g+x)),y=Hn(o.clientHeight-(v+C)),w=Hn(g),S={rootMargin:-b+"px "+-m+"px "+-y+"px "+-w+"px",threshold:Nr(0,ps(1,d))||1};let $=!0;function T(M){const z=M[0].intersectionRatio;if(!tv(p,e.getBoundingClientRect()))return a();if(z!==d){if(!$)return a();z?a(!1,z):i=setTimeout(()=>{a(!1,1e-7)},1e3)}$=!1}try{s=new IntersectionObserver(T,{...S,root:o.ownerDocument})}catch{s=new IntersectionObserver(T,S)}s.observe(e)}const l=St(e),u=()=>a(r);return l.addEventListener("resize",u),a(!0),()=>{l.removeEventListener("resize",u),n()}}function Wx(e,t,r,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,u=Rd(e),h=i||o?[...u?ln(u):[],...t?ln(t):[]]:[];h.forEach(b=>{i&&b.addEventListener("scroll",r),o&&b.addEventListener("resize",r)});const d=u&&a?Hx(u,r,o):null;let p=-1,g=null;n&&(g=new ResizeObserver(b=>{let[m]=b;m&&m.target===u&&g&&t&&(g.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var y;(y=g)==null||y.observe(t)})),r()}),u&&!l&&g.observe(u),t&&g.observe(t));let v,x=l?Qs(e):null;l&&C();function C(){const b=Qs(e);x&&!tv(x,b)&&r(),x=b,v=requestAnimationFrame(C)}return r(),()=>{var b;h.forEach(m=>{i&&m.removeEventListener("scroll",r),o&&m.removeEventListener("resize",r)}),d==null||d(),(b=g)==null||b.disconnect(),g=null,l&&cancelAnimationFrame(v)}}const Gx=kx,Kx=Cx,qx=wx,Dp=Sx,Qx=bx,Xx=(e,t,r)=>{const s=new Map,i=r??{},o={...ua,...i.platform,_c:s};return yx(e,t,{...i,platform:o})};function Yx(e){return Zx(e)}function hc(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Zx(e){for(let t=e;t;t=hc(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=hc(e);t;t=hc(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||xl(r)||t.tagName==="BODY"))return t}return null}function Jx(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var ne=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let s=0,i=0,o=0,n=0,a=0,l=0,u=0,h=0;r?e.top<t.top?(s=e.left,i=e.bottom,o=e.right,n=e.bottom,a=t.left,l=t.top,u=t.right,h=t.top):(s=t.left,i=t.bottom,o=t.right,n=t.bottom,a=e.left,l=e.top,u=e.right,h=e.top):e.left<t.left?(s=e.right,i=e.top,o=t.left,n=t.top,a=e.right,l=e.bottom,u=t.left,h=t.bottom):(s=t.right,i=t.top,o=e.left,n=e.top,a=t.right,l=t.bottom,u=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Jx(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Wx(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Gx({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Dp({apply:({rects:r})=>{const s=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(qx({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Kx({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Dp({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Qx({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>ua.getOffsetParent(r,Yx):ua.getOffsetParent;Xx(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:vn(Vr({},ua),{getOffsetParent:t})}).then(({x:r,y:s,middlewareData:i,placement:o})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${r}px`,top:`${s}px`}),this.arrow){const l=i.arrow.x,u=i.arrow.y;let h="",d="",p="",g="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?v:"",g=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":v,g=n?v:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof l=="number"?`${l}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:p,left:g,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return A`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${K({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${K({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?A`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ne.styles=[q,ax];c([I(".popup")],ne.prototype,"popup",2);c([I(".popup__arrow")],ne.prototype,"arrowEl",2);c([f()],ne.prototype,"anchor",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"active",2);c([f({reflect:!0})],ne.prototype,"placement",2);c([f({reflect:!0})],ne.prototype,"strategy",2);c([f({type:Number})],ne.prototype,"distance",2);c([f({type:Number})],ne.prototype,"skidding",2);c([f({type:Boolean})],ne.prototype,"arrow",2);c([f({attribute:"arrow-placement"})],ne.prototype,"arrowPlacement",2);c([f({attribute:"arrow-padding",type:Number})],ne.prototype,"arrowPadding",2);c([f({type:Boolean})],ne.prototype,"flip",2);c([f({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],ne.prototype,"flipFallbackPlacements",2);c([f({attribute:"flip-fallback-strategy"})],ne.prototype,"flipFallbackStrategy",2);c([f({type:Object})],ne.prototype,"flipBoundary",2);c([f({attribute:"flip-padding",type:Number})],ne.prototype,"flipPadding",2);c([f({type:Boolean})],ne.prototype,"shift",2);c([f({type:Object})],ne.prototype,"shiftBoundary",2);c([f({attribute:"shift-padding",type:Number})],ne.prototype,"shiftPadding",2);c([f({attribute:"auto-size"})],ne.prototype,"autoSize",2);c([f()],ne.prototype,"sync",2);c([f({type:Object})],ne.prototype,"autoSizeBoundary",2);c([f({attribute:"auto-size-padding",type:Number})],ne.prototype,"autoSizePadding",2);c([f({attribute:"hover-bridge",type:Boolean})],ne.prototype,"hoverBridge",2);var rv=new Map,e_=new WeakMap;function t_(e){return e??{keyframes:[],options:{duration:0}}}function Vp(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function le(e,t){rv.set(e,t_(t))}function we(e,t,r){const s=e_.get(e);if(s!=null&&s[t])return Vp(s[t],r.dir);const i=rv.get(t);return i?Vp(i,r.dir):{keyframes:[],options:{duration:0}}}function ft(e,t){return new Promise(r=>{function s(i){i.target===e&&(e.removeEventListener(t,s),r())}e.addEventListener(t,s)})}function Te(e,t,r){return new Promise(s=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,vn(Vr({},r),{duration:Cu()?0:r.duration}));i.addEventListener("cancel",s,{once:!0}),i.addEventListener("finish",s,{once:!0})})}function Fp(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Cu(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ve(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}function qa(e,t){return e.map(r=>vn(Vr({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var Ke=class extends F{constructor(){super(),this.localize=new oe(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Fp(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Fp(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Ve(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:s}=we(this,"tooltip.show",{dir:this.localize.dir()});await Te(this.popup.popup,r,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Ve(this.body);const{keyframes:r,options:s}=we(this,"tooltip.hide",{dir:this.localize.dir()});await Te(this.popup.popup,r,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ft(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ft(this,"sl-after-hide")}render(){return A`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${K({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Ke.styles=[q,nx];Ke.dependencies={"sl-popup":ne};c([I("slot:not([name])")],Ke.prototype,"defaultSlot",2);c([I(".tooltip__body")],Ke.prototype,"body",2);c([I("sl-popup")],Ke.prototype,"popup",2);c([f()],Ke.prototype,"content",2);c([f()],Ke.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);c([f({type:Number})],Ke.prototype,"distance",2);c([f({type:Boolean,reflect:!0})],Ke.prototype,"open",2);c([f({type:Number})],Ke.prototype,"skidding",2);c([f()],Ke.prototype,"trigger",2);c([f({type:Boolean})],Ke.prototype,"hoist",2);c([L("open",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleOpenChange",1);c([L(["content","distance","hoist","placement","skidding"])],Ke.prototype,"handleOptionsChange",1);c([L("disabled")],Ke.prototype,"handleDisabledChange",1);le("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});le("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var r_="sl-tooltip";Ke.define("sl-tooltip");U({tagName:r_,elementClass:Ke,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var s_=H`
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
`,i_=H`
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
`,Ue=class extends F{constructor(){super(...arguments),this.formControlController=new Br(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new vt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return A`
      <div
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${K({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${V(this.value)}
            .indeterminate=${Gs(this.indeterminate)}
            .checked=${Gs(this.checked)}
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
    `}};Ue.styles=[q,Js,i_];Ue.dependencies={"sl-icon":he};c([I('input[type="checkbox"]')],Ue.prototype,"input",2);c([W()],Ue.prototype,"hasFocus",2);c([f()],Ue.prototype,"title",2);c([f()],Ue.prototype,"name",2);c([f()],Ue.prototype,"value",2);c([f({reflect:!0})],Ue.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Ue.prototype,"checked",2);c([f({type:Boolean,reflect:!0})],Ue.prototype,"indeterminate",2);c([qi("checked")],Ue.prototype,"defaultChecked",2);c([f({reflect:!0})],Ue.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Ue.prototype,"required",2);c([f({attribute:"help-text"})],Ue.prototype,"helpText",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleDisabledChange",1);c([L(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ue.prototype,"handleStateChange",1);var o_=H`
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
`,Zi=class extends F{constructor(){super(...arguments),this.localize=new oe(this)}render(){return A`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Zi.styles=[q,o_];/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bp(e,t,r){return e?t(e):r==null?void 0:r(e)}var Ne=class Su extends F{constructor(){super(...arguments),this.localize=new oe(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Ve(this.childrenContainer);const{keyframes:t,options:r}=we(this,"tree-item.collapse",{dir:this.localize.dir()});await Te(this.childrenContainer,qa(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&Su.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Ve(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=we(this,"tree-item.expand",{dir:this.localize.dir()});await Te(this.childrenContainer,qa(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>Su.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return A`
      <div
        part="base"
        class="${K({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${K({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${Bp(this.loading,()=>A` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Bp(this.selectable,()=>A`
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
                ?checked="${Gs(this.selected)}"
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
    `}};Ne.styles=[q,s_];Ne.dependencies={"sl-checkbox":Ue,"sl-icon":he,"sl-spinner":Zi};c([W()],Ne.prototype,"indeterminate",2);c([W()],Ne.prototype,"isLeaf",2);c([W()],Ne.prototype,"loading",2);c([W()],Ne.prototype,"selectable",2);c([f({type:Boolean,reflect:!0})],Ne.prototype,"expanded",2);c([f({type:Boolean,reflect:!0})],Ne.prototype,"selected",2);c([f({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Ne.prototype,"lazy",2);c([I("slot:not([name])")],Ne.prototype,"defaultSlot",2);c([I("slot[name=children]")],Ne.prototype,"childrenSlot",2);c([I(".tree-item__item")],Ne.prototype,"itemElement",2);c([I(".tree-item__children")],Ne.prototype,"childrenContainer",2);c([I(".tree-item__expand-button slot")],Ne.prototype,"expandButtonSlot",2);c([L("loading",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleLoadingChange",1);c([L("disabled")],Ne.prototype,"handleDisabledChange",1);c([L("selected")],Ne.prototype,"handleSelectedChange",1);c([L("expanded",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleExpandedChange",1);c([L("expanded",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleExpandAnimation",1);c([L("lazy",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleLazyChange",1);var Ti=Ne;le("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});le("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var n_="sl-tree-item";Ti.define("sl-tree-item");U({tagName:n_,elementClass:Ti,react:j,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var a_=H`
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
`;function Oe(e,t,r){const s=i=>Object.is(i,-0)?0:i;return e<t?s(t):e>r?s(r):s(e)}function jp(e,t=!1){function r(o){const n=o.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(u=>u.selected),l=n.every(u=>!u.selected&&!u.indeterminate);o.selected=a,o.indeterminate=!a&&!l}}function s(o){const n=o.parentElement;Ti.isTreeItem(n)&&(r(n),s(n))}function i(o){for(const n of o.getChildrenItems())n.selected=t?o.selected||n.selected:!n.disabled&&o.selected,i(n);t&&r(o)}i(e),s(e)}var ws=class extends F{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new oe(this),this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`),s=this.getExpandButtonIcon(t);s&&(r===null?e.append(s):r.hasAttribute("data-default")&&r.replaceWith(s))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(Ti.isTreeItem),s=[...t.removedNodes].filter(Ti.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ti.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const s=r.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${e}-icon`,s}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),jp(e);else if(this.selection==="single"||e.isLeaf){const s=this.getAllTreeItems();for(const i of s)i.selected=i===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(s=>!t.includes(s)))&&Promise.all(r.map(s=>s.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(i=>{var o;return["input","textarea"].includes((o=i==null?void 0:i.tagName)==null?void 0:o.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const i=t.findIndex(l=>l.matches(":focus")),o=t[i],n=l=>{const u=t[Oe(l,0,t.length-1)];this.focusItem(u)},a=l=>{o.expanded=l};e.key==="ArrowDown"?n(i+1):e.key==="ArrowUp"?n(i-1):r&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?n(i+1):a(!0):r&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?n(i-1):a(!1):e.key==="Home"?n(0):e.key==="End"?n(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),s=e.composedPath().some(i=>{var o;return(o=i==null?void 0:i.classList)==null?void 0:o.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(s?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>jp(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var s;if(r.disabled)return!1;const i=(s=r.parentElement)==null?void 0:s.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||t.has(i))&&t.add(r),!t.has(r)})}render(){return A`
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
    `}};ws.styles=[q,a_];c([I("slot:not([name])")],ws.prototype,"defaultSlot",2);c([I("slot[name=expand-icon]")],ws.prototype,"expandedIconSlot",2);c([I("slot[name=collapse-icon]")],ws.prototype,"collapsedIconSlot",2);c([f()],ws.prototype,"selection",2);c([L("selection")],ws.prototype,"handleSelectionChange",1);var l_="sl-tree";ws.define("sl-tree");U({tagName:l_,elementClass:ws,react:j,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var c_=H`
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
 */const sv="important",u_=" !"+sv,bt=bn(class extends wn{constructor(e){var t;if(super(e),e.type!==fr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const s=e[r];return s==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?r.removeProperty(s):r[s]=null);for(const s in t){const i=t[s];if(i!=null){this.ft.add(s);const o=typeof i=="string"&&i.endsWith(u_);s.includes("-")||o?r.setProperty(s,o?i.slice(0,-11):i,o?sv:""):r[s]=i}}return It}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Eu=class extends wn{constructor(t){if(super(t),this.it=be,t.type!==fr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===be||t==null)return this._t=void 0,this.it=t;if(t===It)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Eu.directiveName="unsafeHTML",Eu.resultType=1;const da=bn(Eu);var nt=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:s,width:i}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((s-e)/i*this.max,this.precision):this.roundToPrecision((e-r)/i*this.max,this.precision);return Oe(o,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const i=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-i),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const i=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+i),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,A`
      <div
        part="base"
        class=${K({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
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
                  class=${K({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===s+1})}
                  role="presentation"
                >
                  <div
                    style=${bt({clipPath:e?`inset(0 ${(r-s)*100}% 0 0)`:`inset(0 0 0 ${(r-s)*100}%)`})}
                  >
                    ${da(this.getSymbol(s+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${bt({clipPath:e?`inset(0 0 0 ${100-(r-s)*100}%)`:`inset(0 ${100-(r-s)*100}% 0 0)`})}
                  >
                    ${da(this.getSymbol(s+1))}
                  </div>
                </span>
              `:A`
              <span
                class=${K({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===s+1,"rating__symbol--active":r>=s+1})}
                role="presentation"
              >
                ${da(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};nt.styles=[q,c_];nt.dependencies={"sl-icon":he};c([I(".rating")],nt.prototype,"rating",2);c([W()],nt.prototype,"hoverValue",2);c([W()],nt.prototype,"isHovering",2);c([f()],nt.prototype,"label",2);c([f({type:Number})],nt.prototype,"value",2);c([f({type:Number})],nt.prototype,"max",2);c([f({type:Number})],nt.prototype,"precision",2);c([f({type:Boolean,reflect:!0})],nt.prototype,"readonly",2);c([f({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);c([f()],nt.prototype,"getSymbol",2);c([yn({passive:!0})],nt.prototype,"handleTouchMove",1);c([L("hoverValue")],nt.prototype,"handleHoverValueChange",1);c([L("isHovering")],nt.prototype,"handleIsHoveringChange",1);var d_="sl-rating";nt.define("sl-rating");U({tagName:d_,elementClass:nt,react:j,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"});var h_=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],xs=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:s,value:i}=h_.find(o=>Math.abs(r)<o.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(r/i),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;s==="minute"?o=Wn("second"):s==="hour"?o=Wn("minute"):s==="day"?o=Wn("hour"):o=Wn("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return A` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};c([W()],xs.prototype,"isoTime",2);c([W()],xs.prototype,"relativeTime",2);c([f()],xs.prototype,"date",2);c([f()],xs.prototype,"format",2);c([f()],xs.prototype,"numeric",2);c([f({type:Boolean})],xs.prototype,"sync",2);function Wn(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}var p_="sl-relative-time";xs.define("sl-relative-time");U({tagName:p_,elementClass:xs,react:j,events:{},displayName:"SlRelativeTime"});var f_="sl-resize-observer";Gi.define("sl-resize-observer");U({tagName:f_,elementClass:Gi,react:j,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var m_=H`
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
`,Z=class extends F{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vt(this,"help-text","label"),this.localize=new oe(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>A`
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
          ${typeof r=="string"?da(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return A`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return A``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),e==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ve(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=we(this,"select.show",{dir:this.localize.dir()});await Te(this.popup.popup,e,t),this.currentOption&&wu(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ve(this);const{keyframes:e,options:t}=we(this,"select.hide",{dir:this.localize.dir()});await Te(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ft(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ft(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return A`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
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
            class=${K({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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
    `}};Z.styles=[q,Js,m_];Z.dependencies={"sl-icon":he,"sl-popup":ne,"sl-tag":Fr};c([I(".select")],Z.prototype,"popup",2);c([I(".select__combobox")],Z.prototype,"combobox",2);c([I(".select__display-input")],Z.prototype,"displayInput",2);c([I(".select__value-input")],Z.prototype,"valueInput",2);c([I(".select__listbox")],Z.prototype,"listbox",2);c([W()],Z.prototype,"hasFocus",2);c([W()],Z.prototype,"displayLabel",2);c([W()],Z.prototype,"currentOption",2);c([W()],Z.prototype,"selectedOptions",2);c([W()],Z.prototype,"valueHasChanged",2);c([f()],Z.prototype,"name",2);c([W()],Z.prototype,"value",1);c([f({attribute:"value"})],Z.prototype,"defaultValue",2);c([f({reflect:!0})],Z.prototype,"size",2);c([f()],Z.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"multiple",2);c([f({attribute:"max-options-visible",type:Number})],Z.prototype,"maxOptionsVisible",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);c([f({type:Boolean})],Z.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"open",2);c([f({type:Boolean})],Z.prototype,"hoist",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"pill",2);c([f()],Z.prototype,"label",2);c([f({reflect:!0})],Z.prototype,"placement",2);c([f({attribute:"help-text"})],Z.prototype,"helpText",2);c([f({reflect:!0})],Z.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"required",2);c([f()],Z.prototype,"getTag",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);c([L(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);c([L("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);le("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});le("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var g_="sl-select";Z.define("sl-select");var v_=U({tagName:g_,elementClass:Z,react:j,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"}),Up=v_,y_="sl-spinner";Zi.define("sl-spinner");var b_=U({tagName:y_,elementClass:Zi,react:j,events:{},displayName:"SlSpinner"}),Ds=b_,w_=H`
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
`,Cl=class extends F{constructor(){super(...arguments),this.effect="none"}render(){return A`
      <div
        part="base"
        class=${K({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Cl.styles=[q,w_];c([f()],Cl.prototype,"effect",2);var x_="sl-skeleton";Cl.define("sl-skeleton");U({tagName:x_,elementClass:Cl,react:j,events:{},displayName:"SlSkeleton"});var __=H`
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
`,at=class extends F{constructor(){super(...arguments),this.formControlController=new Br(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new vt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return A`
      <div
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${K({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${V(this.value)}
            .checked=${Gs(this.checked)}
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
    `}};at.styles=[q,Js,__];c([I('input[type="checkbox"]')],at.prototype,"input",2);c([W()],at.prototype,"hasFocus",2);c([f()],at.prototype,"title",2);c([f()],at.prototype,"name",2);c([f()],at.prototype,"value",2);c([f({reflect:!0})],at.prototype,"size",2);c([f({type:Boolean,reflect:!0})],at.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],at.prototype,"checked",2);c([qi("checked")],at.prototype,"defaultChecked",2);c([f({reflect:!0})],at.prototype,"form",2);c([f({type:Boolean,reflect:!0})],at.prototype,"required",2);c([f({attribute:"help-text"})],at.prototype,"helpText",2);c([L("checked",{waitUntilFirstUpdate:!0})],at.prototype,"handleCheckedChange",1);c([L("disabled",{waitUntilFirstUpdate:!0})],at.prototype,"handleDisabledChange",1);var k_="sl-switch";at.define("sl-switch");U({tagName:k_,elementClass:at,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var C_=H`
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
`;function Ro(e,t){function r(i){const o=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,a=o.left+n.scrollX,l=o.top+n.scrollY,u=i.pageX-a,h=i.pageY-l;t!=null&&t.onMove&&t.onMove(u,h)}function s(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",s),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",s),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var Hp=()=>null,Et=class extends F{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new oe(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Hp,this.snapThreshold=12}toSnapFunction(e){const t=e.split(" ");return({pos:r,size:s,snapThreshold:i,isRtl:o,vertical:n})=>{let a=r,l=Number.POSITIVE_INFINITY;return t.forEach(u=>{let h;if(u.startsWith("repeat(")){const p=e.substring(7,e.length-1),g=p.endsWith("%"),v=Number.parseFloat(p),x=g?s*(v/100):v;h=Math.round((o&&!n?s-r:r)/x)*x}else u.endsWith("%")?h=s*(Number.parseFloat(u)/100):h=Number.parseFloat(u);o&&!n&&(h=s-h);const d=Math.abs(r-h);d<=i&&d<l&&(a=h,l=d)}),a}}set snap(e){this.snapValue=e??"",e?this.snapFunction=typeof e=="string"?this.toSnapFunction(e):e:this.snapFunction=Hp}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Ro(this,{onMove:(r,s)=>{var i;let o=this.vertical?s:r;this.primary==="end"&&(o=this.size-o),o=(i=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))!=null?i:o,this.position=Oe(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const s=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=s})}this.position=Oe(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",s=`
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
        tabindex=${V(this.disabled?void 0:"0")}
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
    `}};Et.styles=[q,C_];c([I(".divider")],Et.prototype,"divider",2);c([f({type:Number,reflect:!0})],Et.prototype,"position",2);c([f({attribute:"position-in-pixels",type:Number})],Et.prototype,"positionInPixels",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"vertical",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);c([f()],Et.prototype,"primary",2);c([f({reflect:!0})],Et.prototype,"snap",1);c([f({type:Number,attribute:"snap-threshold"})],Et.prototype,"snapThreshold",2);c([L("position")],Et.prototype,"handlePositionChange",1);c([L("positionInPixels")],Et.prototype,"handlePositionInPixelsChange",1);c([L("vertical")],Et.prototype,"handleVerticalChange",1);var S_="sl-split-panel";Et.define("sl-split-panel");U({tagName:S_,elementClass:Et,react:j,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var E_=H`
  :host {
    display: contents;
  }
`,lr=class extends F{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return A` <slot></slot> `}};lr.styles=[q,E_];c([f({reflect:!0})],lr.prototype,"attr",2);c([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],lr.prototype,"attrOldValue",2);c([f({attribute:"char-data",type:Boolean,reflect:!0})],lr.prototype,"charData",2);c([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],lr.prototype,"charDataOldValue",2);c([f({attribute:"child-list",type:Boolean,reflect:!0})],lr.prototype,"childList",2);c([f({type:Boolean,reflect:!0})],lr.prototype,"disabled",2);c([L("disabled")],lr.prototype,"handleDisabledChange",1);c([L("attr",{waitUntilFirstUpdate:!0}),L("attr-old-value",{waitUntilFirstUpdate:!0}),L("char-data",{waitUntilFirstUpdate:!0}),L("char-data-old-value",{waitUntilFirstUpdate:!0}),L("childList",{waitUntilFirstUpdate:!0})],lr.prototype,"handleChange",1);var $_="sl-mutation-observer";lr.define("sl-mutation-observer");U({tagName:$_,elementClass:lr,react:j,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});var z_=H`
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
`,Ji=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return A`
      <div
        part="base"
        class=${K({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${V(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${bt({width:`${this.value}%`})}>
          ${this.indeterminate?"":A` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Ji.styles=[q,z_];c([f({type:Number,reflect:!0})],Ji.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Ji.prototype,"indeterminate",2);c([f()],Ji.prototype,"label",2);var A_="sl-progress-bar";Ji.define("sl-progress-bar");U({tagName:A_,elementClass:Ji,react:j,events:{},displayName:"SlProgressBar"});var T_=H`
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
`,ei=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,s=r-this.value/100*r;this.indicatorOffset=`${s}px`}}render(){return A`
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
    `}};ei.styles=[q,T_];c([I(".progress-ring__indicator")],ei.prototype,"indicator",2);c([W()],ei.prototype,"indicatorOffset",2);c([f({type:Number,reflect:!0})],ei.prototype,"value",2);c([f()],ei.prototype,"label",2);var P_="sl-progress-ring";ei.define("sl-progress-ring");U({tagName:P_,elementClass:ei,react:j,events:{},displayName:"SlProgressRing"});var N_=H`
  :host {
    display: inline-block;
  }
`;let iv=null;class ov{}ov.render=function(e,t){iv(e,t)};self.QrCreator=ov;(function(e){function t(a,l,u,h){var d={},p=e(u,l);p.u(a),p.J(),h=h||0;var g=p.h(),v=p.h()+2*h;return d.text=a,d.level=l,d.version=u,d.O=v,d.a=function(x,C){return x-=h,C-=h,0>x||x>=g||0>C||C>=g?!1:p.a(x,C)},d}function r(a,l,u,h,d,p,g,v,x,C){function b(m,y,w,k,S,$,T){m?(a.lineTo(y+$,w+T),a.arcTo(y,w,k,S,p)):a.lineTo(y,w)}g?a.moveTo(l+p,u):a.moveTo(l,u),b(v,h,u,h,d,-p,0),b(x,h,d,l,d,0,-p),b(C,l,d,l,u,p,0),b(g,l,u,h,u,0,p)}function s(a,l,u,h,d,p,g,v,x,C){function b(m,y,w,k){a.moveTo(m+w,y),a.lineTo(m,y),a.lineTo(m,y+k),a.arcTo(m,y,m+w,y,p)}g&&b(l,u,p,p),v&&b(h,u,-p,p),x&&b(h,d,-p,-p),C&&b(l,d,p,-p)}function i(a,l){var u=l.fill;if(typeof u=="string")a.fillStyle=u;else{var h=u.type,d=u.colorStops;if(u=u.position.map(g=>Math.round(g*l.size)),h==="linear-gradient")var p=a.createLinearGradient.apply(a,u);else if(h==="radial-gradient")p=a.createRadialGradient.apply(a,u);else throw Error("Unsupported fill");d.forEach(([g,v])=>{p.addColorStop(g,v)}),a.fillStyle=p}}function o(a,l){e:{var u=l.text,h=l.v,d=l.N,p=l.K,g=l.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var v=t(u,h,d,g);break e}catch{}v=void 0}if(!v)return null;for(u=a.getContext("2d"),l.background&&(u.fillStyle=l.background,u.fillRect(l.left,l.top,l.size,l.size)),h=v.O,p=l.size/h,u.beginPath(),g=0;g<h;g+=1)for(d=0;d<h;d+=1){var x=u,C=l.left+d*p,b=l.top+g*p,m=g,y=d,w=v.a,k=C+p,S=b+p,$=m-1,T=m+1,M=y-1,z=y+1,ee=Math.floor(Math.min(.5,Math.max(0,l.R))*p),pe=w(m,y),de=w($,M),ce=w($,y);$=w($,z);var Ie=w(m,z);z=w(T,z),y=w(T,y),T=w(T,M),m=w(m,M),C=Math.round(C),b=Math.round(b),k=Math.round(k),S=Math.round(S),pe?r(x,C,b,k,S,ee,!ce&&!m,!ce&&!Ie,!y&&!Ie,!y&&!m):s(x,C,b,k,S,ee,ce&&m&&de,ce&&Ie&&$,y&&Ie&&z,y&&m&&T)}return i(u,l),u.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};iv=function(a,l){var u={};Object.assign(u,n,a),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,l instanceof HTMLCanvasElement?((l.width!==u.size||l.height!==u.size)&&(l.width=u.size,l.height=u.size),l.getContext("2d").clearRect(0,0,l.width,l.height),o(l,u)):(a=document.createElement("canvas"),a.width=u.size,a.height=u.size,u=o(a,u),l.appendChild(u))}})(function(){function e(l){var u=r.s(l);return{S:function(){return 4},b:function(){return u.length},write:function(h){for(var d=0;d<u.length;d+=1)h.put(u[d],8)}}}function t(){var l=[],u=0,h={B:function(){return l},c:function(d){return(l[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var g=0;g<p;g+=1)h.m((d>>>p-g-1&1)==1)},f:function(){return u},m:function(d){var p=Math.floor(u/8);l.length<=p&&l.push(0),d&&(l[p]|=128>>>u%8),u+=1}};return h}function r(l,u){function h(m,y){for(var w=-1;7>=w;w+=1)if(!(-1>=m+w||v<=m+w))for(var k=-1;7>=k;k+=1)-1>=y+k||v<=y+k||(g[m+w][y+k]=0<=w&&6>=w&&(k==0||k==6)||0<=k&&6>=k&&(w==0||w==6)||2<=w&&4>=w&&2<=k&&4>=k)}function d(m,y){for(var w=v=4*l+17,k=Array(w),S=0;S<w;S+=1){k[S]=Array(w);for(var $=0;$<w;$+=1)k[S][$]=null}for(g=k,h(0,0),h(v-7,0),h(0,v-7),w=o.G(l),k=0;k<w.length;k+=1)for(S=0;S<w.length;S+=1){$=w[k];var T=w[S];if(g[$][T]==null)for(var M=-2;2>=M;M+=1)for(var z=-2;2>=z;z+=1)g[$+M][T+z]=M==-2||M==2||z==-2||z==2||M==0&&z==0}for(w=8;w<v-8;w+=1)g[w][6]==null&&(g[w][6]=w%2==0);for(w=8;w<v-8;w+=1)g[6][w]==null&&(g[6][w]=w%2==0);for(w=o.w(p<<3|y),k=0;15>k;k+=1)S=!m&&(w>>k&1)==1,g[6>k?k:8>k?k+1:v-15+k][8]=S,g[8][8>k?v-k-1:9>k?15-k:14-k]=S;if(g[v-8][8]=!m,7<=l){for(w=o.A(l),k=0;18>k;k+=1)S=!m&&(w>>k&1)==1,g[Math.floor(k/3)][k%3+v-8-3]=S;for(k=0;18>k;k+=1)S=!m&&(w>>k&1)==1,g[k%3+v-8-3][Math.floor(k/3)]=S}if(x==null){for(m=a.I(l,p),w=t(),k=0;k<C.length;k+=1)S=C[k],w.put(4,4),w.put(S.b(),o.f(4,l)),S.write(w);for(k=S=0;k<m.length;k+=1)S+=m[k].j;if(w.f()>8*S)throw Error("code length overflow. ("+w.f()+">"+8*S+")");for(w.f()+4<=8*S&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*S)&&(w.put(236,8),!(w.f()>=8*S));)w.put(17,8);var ee=0;for(S=k=0,$=Array(m.length),T=Array(m.length),M=0;M<m.length;M+=1){var pe=m[M].j,de=m[M].o-pe;for(k=Math.max(k,pe),S=Math.max(S,de),$[M]=Array(pe),z=0;z<$[M].length;z+=1)$[M][z]=255&w.B()[z+ee];for(ee+=pe,z=o.C(de),pe=s($[M],z.b()-1).l(z),T[M]=Array(z.b()-1),z=0;z<T[M].length;z+=1)de=z+pe.b()-T[M].length,T[M][z]=0<=de?pe.c(de):0}for(z=w=0;z<m.length;z+=1)w+=m[z].o;for(w=Array(w),z=ee=0;z<k;z+=1)for(M=0;M<m.length;M+=1)z<$[M].length&&(w[ee]=$[M][z],ee+=1);for(z=0;z<S;z+=1)for(M=0;M<m.length;M+=1)z<T[M].length&&(w[ee]=T[M][z],ee+=1);x=w}for(m=x,w=-1,k=v-1,S=7,$=0,y=o.F(y),T=v-1;0<T;T-=2)for(T==6&&--T;;){for(M=0;2>M;M+=1)g[k][T-M]==null&&(z=!1,$<m.length&&(z=(m[$]>>>S&1)==1),y(k,T-M)&&(z=!z),g[k][T-M]=z,--S,S==-1&&($+=1,S=7));if(k+=w,0>k||v<=k){k-=w,w=-w;break}}}var p=i[u],g=null,v=0,x=null,C=[],b={u:function(m){m=e(m),C.push(m),x=null},a:function(m,y){if(0>m||v<=m||0>y||v<=y)throw Error(m+","+y);return g[m][y]},h:function(){return v},J:function(){for(var m=0,y=0,w=0;8>w;w+=1){d(!0,w);var k=o.D(b);(w==0||m>k)&&(m=k,y=w)}d(!1,y)}};return b}function s(l,u){if(typeof l.length>"u")throw Error(l.length+"/"+u);var h=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var g=Array(l.length-p+u),v=0;v<l.length-p;v+=1)g[v]=l[v+p];return g}(),d={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var g=Array(d.b()+p.b()-1),v=0;v<d.b();v+=1)for(var x=0;x<p.b();x+=1)g[v+x]^=n.i(n.g(d.c(v))+n.g(p.c(x)));return s(g,0)},l:function(p){if(0>d.b()-p.b())return d;for(var g=n.g(d.c(0))-n.g(p.c(0)),v=Array(d.b()),x=0;x<d.b();x+=1)v[x]=d.c(x);for(x=0;x<p.b();x+=1)v[x]^=n.i(n.g(p.c(x))+g);return s(v,0).l(p)}};return d}r.s=function(l){for(var u=[],h=0;h<l.length;h++){var d=l.charCodeAt(h);128>d?u.push(d):2048>d?u.push(192|d>>6,128|d&63):55296>d||57344<=d?u.push(224|d>>12,128|d>>6&63,128|d&63):(h++,d=65536+((d&1023)<<10|l.charCodeAt(h)&1023),u.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return u};var i={L:1,M:0,Q:3,H:2},o=function(){function l(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(d){for(var p=d<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return d<<12|p},G:function(d){return u[d-1]},F:function(d){switch(d){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=s([1],0),g=0;g<d;g+=1)p=p.multiply(s([1,n.i(g)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),g=0,v=0;v<p;v+=1)for(var x=0;x<p;x+=1){for(var C=0,b=d.a(v,x),m=-1;1>=m;m+=1)if(!(0>v+m||p<=v+m))for(var y=-1;1>=y;y+=1)0>x+y||p<=x+y||(m!=0||y!=0)&&b==d.a(v+m,x+y)&&(C+=1);5<C&&(g+=3+C-5)}for(v=0;v<p-1;v+=1)for(x=0;x<p-1;x+=1)C=0,d.a(v,x)&&(C+=1),d.a(v+1,x)&&(C+=1),d.a(v,x+1)&&(C+=1),d.a(v+1,x+1)&&(C+=1),(C==0||C==4)&&(g+=3);for(v=0;v<p;v+=1)for(x=0;x<p-6;x+=1)d.a(v,x)&&!d.a(v,x+1)&&d.a(v,x+2)&&d.a(v,x+3)&&d.a(v,x+4)&&!d.a(v,x+5)&&d.a(v,x+6)&&(g+=40);for(x=0;x<p;x+=1)for(v=0;v<p-6;v+=1)d.a(v,x)&&!d.a(v+1,x)&&d.a(v+2,x)&&d.a(v+3,x)&&d.a(v+4,x)&&!d.a(v+5,x)&&d.a(v+6,x)&&(g+=40);for(x=C=0;x<p;x+=1)for(v=0;v<p;v+=1)d.a(v,x)&&(C+=1);return g+=Math.abs(100*C/p/p-50)/5*10}};return h}(),n=function(){for(var l=Array(256),u=Array(256),h=0;8>h;h+=1)l[h]=1<<h;for(h=8;256>h;h+=1)l[h]=l[h-4]^l[h-5]^l[h-6]^l[h-8];for(h=0;255>h;h+=1)u[l[h]]=h;return{g:function(d){if(1>d)throw Error("glog("+d+")");return u[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return l[d]}}}(),a=function(){function l(d,p){switch(p){case i.L:return u[4*(d-1)];case i.M:return u[4*(d-1)+1];case i.Q:return u[4*(d-1)+2];case i.H:return u[4*(d-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(d,p){var g=l(d,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=g.length/3,p=[];for(var v=0;v<d;v+=1)for(var x=g[3*v],C=g[3*v+1],b=g[3*v+2],m=0;m<x;m+=1){var y=b,w={};w.o=C,w.j=y,p.push(w)}return p}};return h}();return r}());const L_=QrCreator;var Xt=class extends F{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&L_.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return A`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${bt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Xt.styles=[q,N_];c([I("canvas")],Xt.prototype,"canvas",2);c([f()],Xt.prototype,"value",2);c([f()],Xt.prototype,"label",2);c([f({type:Number})],Xt.prototype,"size",2);c([f()],Xt.prototype,"fill",2);c([f()],Xt.prototype,"background",2);c([f({type:Number})],Xt.prototype,"radius",2);c([f({attribute:"error-correction"})],Xt.prototype,"errorCorrection",2);c([L(["background","errorCorrection","fill","radius","size","value"])],Xt.prototype,"generate",1);var M_="sl-qr-code";Xt.define("sl-qr-code");U({tagName:M_,elementClass:Xt,react:j,events:{},displayName:"SlQrCode"});var nv=H`
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
`,I_=H`
  ${nv}

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
`,Yt=class extends F{constructor(){super(...arguments),this.hasSlotController=new vt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Lo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${K({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${V(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Yt.styles=[q,I_];c([I(".button")],Yt.prototype,"input",2);c([I(".hidden-input")],Yt.prototype,"hiddenInput",2);c([W()],Yt.prototype,"hasFocus",2);c([f({type:Boolean,reflect:!0})],Yt.prototype,"checked",2);c([f()],Yt.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);c([f({reflect:!0})],Yt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Yt.prototype,"pill",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleDisabledChange",1);var R_="sl-radio-button";Yt.define("sl-radio-button");U({tagName:R_,elementClass:Yt,react:j,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var O_=H`
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
`,cr=class extends F{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return A`
      <span
        part="base"
        class=${K({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?A` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};cr.styles=[q,O_];cr.dependencies={"sl-icon":he};c([W()],cr.prototype,"checked",2);c([W()],cr.prototype,"hasFocus",2);c([f()],cr.prototype,"value",2);c([f({reflect:!0})],cr.prototype,"size",2);c([f({type:Boolean,reflect:!0})],cr.prototype,"disabled",2);c([L("checked")],cr.prototype,"handleCheckedChange",1);c([L("disabled",{waitUntilFirstUpdate:!0})],cr.prototype,"handleDisabledChange",1);var D_="sl-radio";cr.define("sl-radio");U({tagName:D_,elementClass:cr,react:j,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var V_=H`
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
`,xe=class extends F{constructor(){super(...arguments),this.formControlController=new Br(this),this.hasSlotController=new vt(this,"help-text","label"),this.localize=new oe(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",o=t*e;if(i){const n=`${t-o}px + ${e} * ${s}`;this.output.style.translate=`calc((${n} - ${r/2}px - ${s} / 2))`}else{const n=`${o}px - ${e} * ${s}`;this.output.style.translate=`calc(${n} - ${r/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t;return A`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":s})}
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
            class=${K({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${V(this.name)}
              ?disabled=${this.disabled}
              min=${V(this.min)}
              max=${V(this.max)}
              step=${V(this.step)}
              .value=${Gs(this.value.toString())}
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
    `}};xe.styles=[q,Js,V_];c([I(".range__control")],xe.prototype,"input",2);c([I(".range__tooltip")],xe.prototype,"output",2);c([W()],xe.prototype,"hasFocus",2);c([W()],xe.prototype,"hasTooltip",2);c([f()],xe.prototype,"title",2);c([f()],xe.prototype,"name",2);c([f({type:Number})],xe.prototype,"value",2);c([f()],xe.prototype,"label",2);c([f({attribute:"help-text"})],xe.prototype,"helpText",2);c([f({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);c([f({type:Number})],xe.prototype,"min",2);c([f({type:Number})],xe.prototype,"max",2);c([f({type:Number})],xe.prototype,"step",2);c([f()],xe.prototype,"tooltip",2);c([f({attribute:!1})],xe.prototype,"tooltipFormatter",2);c([f({reflect:!0})],xe.prototype,"form",2);c([qi()],xe.prototype,"defaultValue",2);c([yn({passive:!0})],xe.prototype,"handleThumbDragStart",1);c([L("value",{waitUntilFirstUpdate:!0})],xe.prototype,"handleValueChange",1);c([L("disabled",{waitUntilFirstUpdate:!0})],xe.prototype,"handleDisabledChange",1);c([L("hasTooltip",{waitUntilFirstUpdate:!0})],xe.prototype,"syncRange",1);var F_="sl-range";xe.define("sl-range");U({tagName:F_,elementClass:xe,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var B_=H`
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
`,j_=H`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,_s=class extends F{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=fo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=fo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=fo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=fo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),s=fo(t);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",r===0),s.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),s.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return A`
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
    `}};_s.styles=[q,j_];c([I("slot")],_s.prototype,"defaultSlot",2);c([W()],_s.prototype,"disableRole",2);c([f()],_s.prototype,"label",2);function fo(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var Je=class extends F{constructor(){super(...arguments),this.formControlController=new Br(this),this.hasSlotController=new vt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?rx:e?tx:vl}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),s=this.value;!t||t.disabled||(this.value=t.value,r.forEach(i=>i.checked=i===t),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(a=>!a.disabled),s=(t=r.find(a=>a.checked))!=null?t:r[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let n=r.indexOf(s)+i;n<0&&(n=r.length-1),n>r.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=r[n].value,r[n].checked=!0,this.hasButtonGroup?r[n].shadowRoot.querySelector("button").focus():(r[n].setAttribute("tabindex","0"),r[n].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=r.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(s=>s.checked))if(this.hasButtonGroup){const s=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");s&&s.setAttribute("tabindex","0")}else r[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const s=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),r=t.find(o=>o.checked),s=t.find(o=>!o.disabled),i=r||s;i&&i.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,i=A`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return A`
      <fieldset
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":s})}
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
    `}};Je.styles=[q,Js,B_];Je.dependencies={"sl-button-group":_s};c([I("slot:not([name])")],Je.prototype,"defaultSlot",2);c([I(".radio-group__validation-input")],Je.prototype,"validationInput",2);c([W()],Je.prototype,"hasButtonGroup",2);c([W()],Je.prototype,"errorMessage",2);c([W()],Je.prototype,"defaultValue",2);c([f()],Je.prototype,"label",2);c([f({attribute:"help-text"})],Je.prototype,"helpText",2);c([f()],Je.prototype,"name",2);c([f({reflect:!0})],Je.prototype,"value",2);c([f({reflect:!0})],Je.prototype,"size",2);c([f({reflect:!0})],Je.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Je.prototype,"required",2);c([L("size",{waitUntilFirstUpdate:!0})],Je.prototype,"handleSizeChange",1);c([L("value")],Je.prototype,"handleValueChange",1);var U_="sl-radio-group";Je.define("sl-radio-group");U({tagName:U_,elementClass:Je,react:j,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var H_=H`
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
`,ks=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),Ro(this.base,{onMove:s=>{this.position=parseFloat(Oe(s/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const s=e.shiftKey?10:1;let i=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(i-=s),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(i+=s),e.key==="Home"&&(i=0),e.key==="End"&&(i=100),i=Oe(i,0,100),this.position=i}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return A`
      <div
        part="base"
        id="image-comparer"
        class=${K({"image-comparer":!0,"image-comparer--rtl":e})}
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
    `}};ks.styles=[q,H_];ks.scopedElement={"sl-icon":he};c([I(".image-comparer")],ks.prototype,"base",2);c([I(".image-comparer__handle")],ks.prototype,"handle",2);c([f({type:Number,reflect:!0})],ks.prototype,"position",2);c([L("position",{waitUntilFirstUpdate:!0})],ks.prototype,"handlePositionChange",1);var W_="sl-image-comparer";ks.define("sl-image-comparer");U({tagName:W_,elementClass:ks,react:j,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var G_=H`
  :host {
    display: block;
  }
`,pc=new Map;function K_(e,t="cors"){const r=pc.get(e);if(r!==void 0)return Promise.resolve(r);const s=fetch(e,{mode:t}).then(async i=>{const o={ok:i.ok,status:i.status,html:await i.text()};return pc.set(e,o),o});return pc.set(e,s),s}var ti=class extends F{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await K_(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return A`<slot></slot>`}};ti.styles=[q,G_];c([f()],ti.prototype,"src",2);c([f()],ti.prototype,"mode",2);c([f({attribute:"allow-scripts",type:Boolean})],ti.prototype,"allowScripts",2);c([L("src")],ti.prototype,"handleSrcChange",1);var q_="sl-include";ti.define("sl-include");U({tagName:q_,elementClass:ti,react:j,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var Q_=H`
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
`,Sl=class extends F{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath(),s=r.find(a=>{var l;return t.includes(((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!s||r.find(a=>{var l;return((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const n=s;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let s=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?s++:e.key==="ArrowUp"?s--:e.key==="Home"?s=0:e.key==="End"&&(s=t.length-1),s<0&&(s=t.length-1),s>t.length-1&&(s=0),this.setCurrentItem(t[s]),t[s].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return A`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Sl.styles=[q,Q_];c([I("slot")],Sl.prototype,"defaultSlot",2);var X_="sl-menu";Sl.define("sl-menu");U({tagName:X_,elementClass:Sl,react:j,events:{onSlSelect:"sl-select"},displayName:"SlMenu"});var Y_=H`
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
`,X=class extends F{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vt(this,"help-text","label"),this.localize=new oe(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,s="preserve"){const i=t??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(e,i,o,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return A`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
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
            class=${K({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${V(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${V(this.placeholder)}
              minlength=${V(this.minlength)}
              maxlength=${V(this.maxlength)}
              min=${V(this.min)}
              max=${V(this.max)}
              step=${V(this.step)}
              .value=${Gs(this.value)}
              autocapitalize=${V(this.autocapitalize)}
              autocomplete=${V(this.autocomplete)}
              autocorrect=${V(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${V(this.pattern)}
              enterkeyhint=${V(this.enterkeyhint)}
              inputmode=${V(this.inputmode)}
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
    `}};X.styles=[q,Js,Y_];X.dependencies={"sl-icon":he};c([I(".input__control")],X.prototype,"input",2);c([W()],X.prototype,"hasFocus",2);c([f()],X.prototype,"title",2);c([f({reflect:!0})],X.prototype,"type",2);c([f()],X.prototype,"name",2);c([f()],X.prototype,"value",2);c([qi()],X.prototype,"defaultValue",2);c([f({reflect:!0})],X.prototype,"size",2);c([f({type:Boolean,reflect:!0})],X.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],X.prototype,"pill",2);c([f()],X.prototype,"label",2);c([f({attribute:"help-text"})],X.prototype,"helpText",2);c([f({type:Boolean})],X.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],X.prototype,"disabled",2);c([f()],X.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],X.prototype,"readonly",2);c([f({attribute:"password-toggle",type:Boolean})],X.prototype,"passwordToggle",2);c([f({attribute:"password-visible",type:Boolean})],X.prototype,"passwordVisible",2);c([f({attribute:"no-spin-buttons",type:Boolean})],X.prototype,"noSpinButtons",2);c([f({reflect:!0})],X.prototype,"form",2);c([f({type:Boolean,reflect:!0})],X.prototype,"required",2);c([f()],X.prototype,"pattern",2);c([f({type:Number})],X.prototype,"minlength",2);c([f({type:Number})],X.prototype,"maxlength",2);c([f()],X.prototype,"min",2);c([f()],X.prototype,"max",2);c([f()],X.prototype,"step",2);c([f()],X.prototype,"autocapitalize",2);c([f()],X.prototype,"autocorrect",2);c([f()],X.prototype,"autocomplete",2);c([f({type:Boolean})],X.prototype,"autofocus",2);c([f()],X.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],X.prototype,"spellcheck",2);c([f()],X.prototype,"inputmode",2);c([L("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);c([L("step",{waitUntilFirstUpdate:!0})],X.prototype,"handleStepChange",1);c([L("value",{waitUntilFirstUpdate:!0})],X.prototype,"handleValueChange",1);var Z_="sl-input";X.define("sl-input");U({tagName:Z_,elementClass:X,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"});var J_=H`
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
 */const Oo=(e,t)=>{var s;const r=e._$AN;if(r===void 0)return!1;for(const i of r)(s=i._$AO)==null||s.call(i,t,!1),Oo(i,t);return!0},Qa=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},av=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),rk(t)}};function ek(e){this._$AN!==void 0?(Qa(this),this._$AM=e,av(this)):this._$AM=e}function tk(e,t=!1,r=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let o=r;o<s.length;o++)Oo(s[o],!1),Qa(s[o]);else s!=null&&(Oo(s,!1),Qa(s));else Oo(this,e)}const rk=e=>{e.type==fr.CHILD&&(e._$AP??(e._$AP=tk),e._$AQ??(e._$AQ=ek))};class sk extends wn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,s){super._$AT(t,r,s),av(this),this.isConnected=t._$AU}_$AO(t,r=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),r&&(Oo(this,t),Qa(this))}setValue(t){if(Fg(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ik=()=>new ok;class ok{}const fc=new WeakMap,nk=bn(class extends sk{render(e){return be}update(e,[t]){var s;const r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=(s=e.options)==null?void 0:s.host,this.rt(this.ct=e.element)),be}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=fc.get(t);r===void 0&&(r=new WeakMap,fc.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=fc.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ak=class{constructor(e,t){this.popupRef=ik(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=r=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${r.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${r.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break}},this.handleClick=r=>{var s;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(s=r.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},this.handlePopupReposition=()=>{const r=this.host.renderRoot.querySelector("slot[name='submenu']"),s=r==null?void 0:r.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],i=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:o,top:n,width:a,height:l}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const s of t.assignedElements())if(r=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let s=1;s!==r.length;++s)r[s].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((i,o)=>{var n;const a=(n=t.get(o))!=null?n:new CSSUnitValue(0,"px"),u=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return i-u.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?A`
      <sl-popup
        ${nk(this.popupRef)}
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
    `:A` <slot name="submenu" hidden></slot> `}},$t=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new vt(this,"submenu"),this.submenuController=new ak(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return sx(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return A`
      <div
        id="anchor"
        part="base"
        class=${K({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
    `}};$t.styles=[q,J_];$t.dependencies={"sl-icon":he,"sl-popup":ne,"sl-spinner":Zi};c([I("slot:not([name])")],$t.prototype,"defaultSlot",2);c([I(".menu-item")],$t.prototype,"menuItem",2);c([f()],$t.prototype,"type",2);c([f({type:Boolean,reflect:!0})],$t.prototype,"checked",2);c([f()],$t.prototype,"value",2);c([f({type:Boolean,reflect:!0})],$t.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);c([L("checked")],$t.prototype,"handleCheckedChange",1);c([L("disabled")],$t.prototype,"handleDisabledChange",1);c([L("type")],$t.prototype,"handleTypeChange",1);var lk="sl-menu-item";$t.define("sl-menu-item");U({tagName:lk,elementClass:$t,react:j,events:{},displayName:"SlMenuItem"});var ck=H`
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
`,Od=class extends F{render(){return A` <slot part="base" class="menu-label"></slot> `}};Od.styles=[q,ck];var uk="sl-menu-label";Od.define("sl-menu-label");U({tagName:uk,elementClass:Od,react:j,events:{},displayName:"SlMenuLabel"});var dk=H`
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
`,Ft=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(t+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(t+=r.textContent)}),t.trim()}render(){return A`
      <div
        part="base"
        class=${K({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Ft.styles=[q,dk];Ft.dependencies={"sl-icon":he};c([I(".option__label")],Ft.prototype,"defaultSlot",2);c([W()],Ft.prototype,"current",2);c([W()],Ft.prototype,"selected",2);c([W()],Ft.prototype,"hasHover",2);c([f({reflect:!0})],Ft.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);c([L("disabled")],Ft.prototype,"handleDisabledChange",1);c([L("selected")],Ft.prototype,"handleSelectedChange",1);c([L("value")],Ft.prototype,"handleValueChange",1);var hk="sl-option";Ft.define("sl-option");var pk=U({tagName:hk,elementClass:Ft,react:j,events:{},displayName:"SlOption"}),Gn=pk,fk="sl-popup";ne.define("sl-popup");U({tagName:fk,elementClass:ne,react:j,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var mk=H`
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
`,xn=class extends F{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};xn.styles=[q,mk];c([f({type:Boolean,reflect:!0})],xn.prototype,"vertical",2);c([L("vertical")],xn.prototype,"handleVerticalChange",1);var gk="sl-divider";xn.define("sl-divider");U({tagName:gk,elementClass:xn,react:j,events:{},displayName:"SlDivider"});var vk=H`
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
`;function*Dd(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*pw(Dd(e.shadowRoot.activeElement))))}function lv(){return[...Dd()].pop()}var Wp=new WeakMap;function cv(e){let t=Wp.get(e);return t||(t=window.getComputedStyle(e,null),Wp.set(e,t)),t}function yk(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=cv(e);return t.visibility!=="hidden"&&t.display!=="none"}function bk(e){const t=cv(e),{overflowY:r,overflowX:s}=t;return r==="scroll"||s==="scroll"?!0:r!=="auto"||s!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&s==="auto"}function wk(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const o=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute("name")}"]`,a=o.querySelector(`${n}:checked`);return a?a===e:o.querySelector(n)===e}return yk(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:bk(e):!1}function xk(e){var t,r;const s=$u(e),i=(t=s[0])!=null?t:null,o=(r=s[s.length-1])!=null?r:null;return{start:i,end:o}}function _k(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function $u(e){const t=new WeakMap,r=[];function s(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!r.includes(i)&&wk(i)&&r.push(i),i instanceof HTMLSlotElement&&_k(i,e)&&i.assignedElements({flatten:!0}).forEach(o=>{s(o)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&s(i.shadowRoot)}for(const o of i.children)s(o)}return s(e),r.sort((i,o)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}var mo=[],uv=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=lv();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=$u(this.element);let o=i.findIndex(a=>a===s);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){o+n>=i.length?o=0:o+n<0?o=i.length-1:o+=n,this.previousFocus=this.currentFocus;const a=i[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[...Dd()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){mo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){mo=mo.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return mo[mo.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=$u(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],s=this.tabDirection==="forward"?t:r;typeof(s==null?void 0:s.focus)=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},Vd=e=>{var t;const{activeElement:r}=document;r&&e.contains(r)&&((t=document.activeElement)==null||t.blur())};function Gp(e){return e.charAt(0).toUpperCase()+e.slice(1)}var zt=class extends F{constructor(){super(...arguments),this.hasSlotController=new vt(this,"footer"),this.localize=new oe(this),this.modal=new uv(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Mo(this)))}disconnectedCallback(){super.disconnectedCallback(),Io(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=we(this,"drawer.denyClose",{dir:this.localize.dir()});Te(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Mo(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ve(this.drawer),Ve(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=we(this,`drawer.show${Gp(this.placement)}`,{dir:this.localize.dir()}),r=we(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Te(this.panel,t.keyframes,t.options),Te(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{Vd(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Io(this)),await Promise.all([Ve(this.drawer),Ve(this.overlay)]);const e=we(this,`drawer.hide${Gp(this.placement)}`,{dir:this.localize.dir()}),t=we(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Te(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Te(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Mo(this)),this.open&&this.contained&&(this.modal.deactivate(),Io(this))}async show(){if(!this.open)return this.open=!0,ft(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ft(this,"sl-after-hide")}render(){return A`
      <div
        part="base"
        class=${K({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${V(this.noHeader?this.label:void 0)}
          aria-labelledby=${V(this.noHeader?void 0:"title")}
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
    `}};zt.styles=[q,vk];zt.dependencies={"sl-icon-button":je};c([I(".drawer")],zt.prototype,"drawer",2);c([I(".drawer__panel")],zt.prototype,"panel",2);c([I(".drawer__overlay")],zt.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],zt.prototype,"open",2);c([f({reflect:!0})],zt.prototype,"label",2);c([f({reflect:!0})],zt.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],zt.prototype,"contained",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],zt.prototype,"noHeader",2);c([L("open",{waitUntilFirstUpdate:!0})],zt.prototype,"handleOpenChange",1);c([L("contained",{waitUntilFirstUpdate:!0})],zt.prototype,"handleNoModalChange",1);le("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});le("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});le("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});le("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});le("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});le("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});le("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});le("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});le("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});le("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});le("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var kk="sl-drawer";zt.define("sl-drawer");U({tagName:kk,elementClass:zt,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var Ck=H`
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
`,et=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const r=(s,i)=>{if(!s)return null;const o=s.closest(i);if(o)return o;const n=s.getRootNode();return n instanceof ShadowRoot?r(n.host,i):null};setTimeout(()=>{var s;const i=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?lv():document.activeElement;(!this.containingElement||r(i,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),s=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(s),s.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(s=>xk(s).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ft(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ft(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ve(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=we(this,"dropdown.show",{dir:this.localize.dir()});await Te(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ve(this);const{keyframes:e,options:t}=we(this,"dropdown.hide",{dir:this.localize.dir()});await Te(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return A`
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
        sync=${V(this.sync?this.sync:void 0)}
        class=${K({dropdown:!0,"dropdown--open":this.open})}
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
    `}};et.styles=[q,Ck];et.dependencies={"sl-popup":ne};c([I(".dropdown")],et.prototype,"popup",2);c([I(".dropdown__trigger")],et.prototype,"trigger",2);c([I(".dropdown__panel")],et.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],et.prototype,"open",2);c([f({reflect:!0})],et.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],et.prototype,"disabled",2);c([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],et.prototype,"stayOpenOnSelect",2);c([f({attribute:!1})],et.prototype,"containingElement",2);c([f({type:Number})],et.prototype,"distance",2);c([f({type:Number})],et.prototype,"skidding",2);c([f({type:Boolean})],et.prototype,"hoist",2);c([f({reflect:!0})],et.prototype,"sync",2);c([L("open",{waitUntilFirstUpdate:!0})],et.prototype,"handleOpenChange",1);le("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});le("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Sk="sl-dropdown";et.define("sl-dropdown");U({tagName:Sk,elementClass:et,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"});var At=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return A`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};c([f()],At.prototype,"date",2);c([f()],At.prototype,"weekday",2);c([f()],At.prototype,"era",2);c([f()],At.prototype,"year",2);c([f()],At.prototype,"month",2);c([f()],At.prototype,"day",2);c([f()],At.prototype,"hour",2);c([f()],At.prototype,"minute",2);c([f()],At.prototype,"second",2);c([f({attribute:"time-zone-name"})],At.prototype,"timeZoneName",2);c([f({attribute:"time-zone"})],At.prototype,"timeZone",2);c([f({attribute:"hour-format"})],At.prototype,"hourFormat",2);var Ek="sl-format-date";At.define("sl-format-date");U({tagName:Ek,elementClass:At,react:j,events:{},displayName:"SlFormatDate"});var _n=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),i=r[s]+this.unit,o=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};c([f({type:Number})],_n.prototype,"value",2);c([f()],_n.prototype,"unit",2);c([f()],_n.prototype,"display",2);var $k="sl-format-bytes";_n.define("sl-format-bytes");U({tagName:$k,elementClass:_n,react:j,events:{},displayName:"SlFormatBytes"});var Zt=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([f({type:Number})],Zt.prototype,"value",2);c([f()],Zt.prototype,"type",2);c([f({attribute:"no-grouping",type:Boolean})],Zt.prototype,"noGrouping",2);c([f()],Zt.prototype,"currency",2);c([f({attribute:"currency-display"})],Zt.prototype,"currencyDisplay",2);c([f({attribute:"minimum-integer-digits",type:Number})],Zt.prototype,"minimumIntegerDigits",2);c([f({attribute:"minimum-fraction-digits",type:Number})],Zt.prototype,"minimumFractionDigits",2);c([f({attribute:"maximum-fraction-digits",type:Number})],Zt.prototype,"maximumFractionDigits",2);c([f({attribute:"minimum-significant-digits",type:Number})],Zt.prototype,"minimumSignificantDigits",2);c([f({attribute:"maximum-significant-digits",type:Number})],Zt.prototype,"maximumSignificantDigits",2);var zk="sl-format-number";Zt.define("sl-format-number");U({tagName:zk,elementClass:Zt,react:j,events:{},displayName:"SlFormatNumber"});var Ak="sl-icon";he.define("sl-icon");U({tagName:Ak,elementClass:he,react:j,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"});var Tk="sl-icon-button";je.define("sl-icon-button");U({tagName:Tk,elementClass:je,react:j,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"});var Pk="sl-button-group";_s.define("sl-button-group");U({tagName:Pk,elementClass:_s,react:j,events:{},displayName:"SlButtonGroup"});var Nk=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Lk=H`
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
 */function*Mk(e,t){if(e!==void 0){let r=0;for(const s of e)yield t(s,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ik(e,t,r=1){const s=t===void 0?0:e;t??(t=e);for(let i=s;r>0?i<t:t<i;i+=r)yield i}var $e=class extends F{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Nk(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new oe(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const s=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==s||r!==i)&&(e.scrollTo({left:s,top:i,behavior:Cu()?"auto":"smooth"}),await ft(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:s}=this,i=s?e/r:(e-t)/r+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),r=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+r*r)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",s=t.closest('[part~="pagination-item"]')!==null,i=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",o=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),o&&this.previous(),i&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const a of t){const l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}const r=t.find(a=>a.isIntersecting);if(!r)return;const s=this.getSlides({excludeClones:!1}),i=this.getSlides().length,o=s.indexOf(r.target),n=this.loop?o-this.slidesPerPage:o;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+i)%i,!this.scrolling&&this.loop&&r.target.hasAttribute("data-clone")){const a=Number(r.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("role","group"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),this.pagination&&(e.setAttribute("id",`slide-${t+1}`),e.setAttribute("role","tabpanel"),e.removeAttribute("aria-label"),e.setAttribute("aria-labelledby",`tab-${t+1}`)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),s=e.slice(0,t);r.reverse().forEach((i,o)=>{const n=i.cloneNode(!0);n.setAttribute("data-clone",String(e.length-o-1)),this.prepend(n)}),s.forEach((i,o)=>{const n=i.cloneNode(!0);n.setAttribute("data-clone",String(o)),this.append(n)})}handleSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,s)=>{(s+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:s}=this,i=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!i.length)return;const n=s?(e+i.length)%i.length:Oe(e,0,i.length-r);this.activeSlide=n;const a=this.localize.dir()==="rtl",l=Oe(e+(s?r:0)+(a?r-1:0),0,o.length-1),u=o[l];this.scrollToSlide(u,Cu()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const r=this.scrollContainer,s=r.getBoundingClientRect(),i=e.getBoundingClientRect(),o=i.left-s.left,n=i.top-s.top;o||n?(this.pendingSlideChange=!0,r.scrollTo({left:o+r.scrollLeft,top:n+r.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this,r=this.getPageCount(),s=this.getCurrentPage(),i=this.canScrollPrev(),o=this.canScrollNext(),n=this.localize.dir()==="ltr";return A`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${K({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
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
                  class="${K({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!i})}"
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
                  class=${K({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
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
                ${Mk(Ik(r),a=>{const l=a===s;return A`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${K({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
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
    `}};$e.styles=[q,Lk];$e.dependencies={"sl-icon":he};c([f({type:Boolean,reflect:!0})],$e.prototype,"loop",2);c([f({type:Boolean,reflect:!0})],$e.prototype,"navigation",2);c([f({type:Boolean,reflect:!0})],$e.prototype,"pagination",2);c([f({type:Boolean,reflect:!0})],$e.prototype,"autoplay",2);c([f({type:Number,attribute:"autoplay-interval"})],$e.prototype,"autoplayInterval",2);c([f({type:Number,attribute:"slides-per-page"})],$e.prototype,"slidesPerPage",2);c([f({type:Number,attribute:"slides-per-move"})],$e.prototype,"slidesPerMove",2);c([f()],$e.prototype,"orientation",2);c([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],$e.prototype,"mouseDragging",2);c([I(".carousel__slides")],$e.prototype,"scrollContainer",2);c([I(".carousel__pagination")],$e.prototype,"paginationContainer",2);c([W()],$e.prototype,"activeSlide",2);c([W()],$e.prototype,"scrolling",2);c([W()],$e.prototype,"dragging",2);c([yn({passive:!0})],$e.prototype,"handleScroll",1);c([L("loop",{waitUntilFirstUpdate:!0}),L("slidesPerPage",{waitUntilFirstUpdate:!0})],$e.prototype,"initializeSlides",1);c([L("activeSlide")],$e.prototype,"handleSlideChange",1);c([L("slidesPerMove")],$e.prototype,"updateSlidesSnap",1);c([L("autoplay")],$e.prototype,"handleAutoplayChange",1);var Rk="sl-carousel";$e.define("sl-carousel");U({tagName:Rk,elementClass:$e,react:j,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var Ok=H`
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
`,Fd=class extends F{connectedCallback(){super.connectedCallback()}render(){return A` <slot></slot> `}};Fd.styles=[q,Ok];var Dk="sl-carousel-item";Fd.define("sl-carousel-item");U({tagName:Dk,elementClass:Fd,react:j,events:{},displayName:"SlCarouselItem"});var Vk="sl-checkbox";Ue.define("sl-checkbox");U({tagName:Vk,elementClass:Ue,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var Fk=H`
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
`,ae=class extends F{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new vt(this,"[default]","prefix","suffix"),this.localize=new oe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:vl}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ha`a`:Ha`button`;return Lo`
      <${t}
        part="base"
        class=${K({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${V(e?void 0:this.disabled)}
        type=${V(e?void 0:this.type)}
        title=${this.title}
        name=${V(e?void 0:this.name)}
        value=${V(e?void 0:this.value)}
        href=${V(e&&!this.disabled?this.href:void 0)}
        target=${V(e?this.target:void 0)}
        download=${V(e?this.download:void 0)}
        rel=${V(e?this.rel:void 0)}
        role=${V(e?void 0:"button")}
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
        ${this.caret?Lo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Lo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ae.styles=[q,nv];ae.dependencies={"sl-icon":he,"sl-spinner":Zi};c([I(".button")],ae.prototype,"button",2);c([W()],ae.prototype,"hasFocus",2);c([W()],ae.prototype,"invalid",2);c([f()],ae.prototype,"title",2);c([f({reflect:!0})],ae.prototype,"variant",2);c([f({reflect:!0})],ae.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ae.prototype,"caret",2);c([f({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],ae.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],ae.prototype,"outline",2);c([f({type:Boolean,reflect:!0})],ae.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],ae.prototype,"circle",2);c([f()],ae.prototype,"type",2);c([f()],ae.prototype,"name",2);c([f()],ae.prototype,"value",2);c([f()],ae.prototype,"href",2);c([f()],ae.prototype,"target",2);c([f()],ae.prototype,"rel",2);c([f()],ae.prototype,"download",2);c([f()],ae.prototype,"form",2);c([f({attribute:"formaction"})],ae.prototype,"formAction",2);c([f({attribute:"formenctype"})],ae.prototype,"formEnctype",2);c([f({attribute:"formmethod"})],ae.prototype,"formMethod",2);c([f({attribute:"formnovalidate",type:Boolean})],ae.prototype,"formNoValidate",2);c([f({attribute:"formtarget"})],ae.prototype,"formTarget",2);c([L("disabled",{waitUntilFirstUpdate:!0})],ae.prototype,"handleDisabledChange",1);function it(e,t){Bk(e)&&(e="100%");const r=jk(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/t:e=e%t/t,e)}function Kn(e){return Math.min(1,Math.max(0,e))}function Bk(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function jk(e){return typeof e=="string"&&e.indexOf("%")!==-1}function dv(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function qn(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Ms(e){return e.length===1?"0"+e:String(e)}function Uk(e,t,r){return{r:it(e,255)*255,g:it(t,255)*255,b:it(r,255)*255}}function Kp(e,t,r){e=it(e,255),t=it(t,255),r=it(r,255);const s=Math.max(e,t,r),i=Math.min(e,t,r);let o=0,n=0;const a=(s+i)/2;if(s===i)n=0,o=0;else{const l=s-i;switch(n=a>.5?l/(2-s-i):l/(s+i),s){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4;break}o/=6}return{h:o,s:n,l:a}}function mc(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Hk(e,t,r){let s,i,o;if(e=it(e,360),t=it(t,100),r=it(r,100),t===0)i=r,o=r,s=r;else{const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n;s=mc(a,n,e+1/3),i=mc(a,n,e),o=mc(a,n,e-1/3)}return{r:s*255,g:i*255,b:o*255}}function qp(e,t,r){e=it(e,255),t=it(t,255),r=it(r,255);const s=Math.max(e,t,r),i=Math.min(e,t,r);let o=0;const n=s,a=s-i,l=s===0?0:a/s;if(s===i)o=0;else{switch(s){case e:o=(t-r)/a+(t<r?6:0);break;case t:o=(r-e)/a+2;break;case r:o=(e-t)/a+4;break}o/=6}return{h:o,s:l,v:n}}function Wk(e,t,r){e=it(e,360)*6,t=it(t,100),r=it(r,100);const s=Math.floor(e),i=e-s,o=r*(1-t),n=r*(1-i*t),a=r*(1-(1-i)*t),l=s%6,u=[r,n,o,o,a,r][l],h=[a,r,r,n,o,o][l],d=[o,o,a,r,r,n][l];return{r:u*255,g:h*255,b:d*255}}function Qp(e,t,r,s){const i=Ms(Math.round(e).toString(16)),o=Ms(Math.round(t).toString(16)),n=Ms(Math.round(r).toString(16));return s&&i.startsWith(i.charAt(1))&&o.startsWith(o.charAt(1))&&n.startsWith(n.charAt(1))?i.charAt(0)+o.charAt(0)+n.charAt(0):i+o+n}function Gk(e,t,r,s,i){const o=Ms(Math.round(e).toString(16)),n=Ms(Math.round(t).toString(16)),a=Ms(Math.round(r).toString(16)),l=Ms(qk(s));return i&&o.startsWith(o.charAt(1))&&n.startsWith(n.charAt(1))&&a.startsWith(a.charAt(1))&&l.startsWith(l.charAt(1))?o.charAt(0)+n.charAt(0)+a.charAt(0)+l.charAt(0):o+n+a+l}function Kk(e,t,r,s){const i=e/100,o=t/100,n=r/100,a=s/100,l=255*(1-i)*(1-a),u=255*(1-o)*(1-a),h=255*(1-n)*(1-a);return{r:l,g:u,b:h}}function Xp(e,t,r){let s=1-e/255,i=1-t/255,o=1-r/255,n=Math.min(s,i,o);return n===1?(s=0,i=0,o=0):(s=(s-n)/(1-n)*100,i=(i-n)/(1-n)*100,o=(o-n)/(1-n)*100),n*=100,{c:Math.round(s),m:Math.round(i),y:Math.round(o),k:Math.round(n)}}function qk(e){return Math.round(parseFloat(e)*255).toString(16)}function Yp(e){return Pt(e)/255}function Pt(e){return parseInt(e,16)}function Qk(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const zu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Xk(e){let t={r:0,g:0,b:0},r=1,s=null,i=null,o=null,n=!1,a=!1;return typeof e=="string"&&(e=Jk(e)),typeof e=="object"&&(Tt(e.r)&&Tt(e.g)&&Tt(e.b)?(t=Uk(e.r,e.g,e.b),n=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Tt(e.h)&&Tt(e.s)&&Tt(e.v)?(s=qn(e.s),i=qn(e.v),t=Wk(e.h,s,i),n=!0,a="hsv"):Tt(e.h)&&Tt(e.s)&&Tt(e.l)?(s=qn(e.s),o=qn(e.l),t=Hk(e.h,s,o),n=!0,a="hsl"):Tt(e.c)&&Tt(e.m)&&Tt(e.y)&&Tt(e.k)&&(t=Kk(e.c,e.m,e.y,e.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=dv(r),{ok:n,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const Yk="[-\\+]?\\d+%?",Zk="[-\\+]?\\d*\\.\\d+%?",es="(?:"+Zk+")|(?:"+Yk+")",gc="[\\s|\\(]+("+es+")[,|\\s]+("+es+")[,|\\s]+("+es+")\\s*\\)?",Qn="[\\s|\\(]+("+es+")[,|\\s]+("+es+")[,|\\s]+("+es+")[,|\\s]+("+es+")\\s*\\)?",Nt={hex:/^[0-9a-fA-F]+$/,CSS_UNIT:new RegExp(es),rgb:new RegExp("rgb"+gc),rgba:new RegExp("rgba"+Qn),hsl:new RegExp("hsl"+gc),hsla:new RegExp("hsla"+Qn),hsv:new RegExp("hsv"+gc),hsva:new RegExp("hsva"+Qn),cmyk:new RegExp("cmyk"+Qn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Jk(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(zu[e])e=zu[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r;if(typeof e=="string"&&e.length<=9&&(e.startsWith("#")||Nt.hex.test(e))){if(r=Nt.hex8.exec(e),r)return{r:Pt(r[1]),g:Pt(r[2]),b:Pt(r[3]),a:Yp(r[4]),format:t?"name":"hex8"};if(r=Nt.hex6.exec(e),r)return{r:Pt(r[1]),g:Pt(r[2]),b:Pt(r[3]),format:t?"name":"hex"};if(r=Nt.hex4.exec(e),r)return{r:Pt(r[1]+r[1]),g:Pt(r[2]+r[2]),b:Pt(r[3]+r[3]),a:Yp(r[4]+r[4]),format:t?"name":"hex8"};if(r=Nt.hex3.exec(e),r)return{r:Pt(r[1]+r[1]),g:Pt(r[2]+r[2]),b:Pt(r[3]+r[3]),format:t?"name":"hex"}}return r=Nt.rgb.exec(e),r?{r:r[1],g:r[2],b:r[3]}:(r=Nt.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Nt.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=Nt.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Nt.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=Nt.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Nt.cmyk.exec(e),r?{c:r[1],m:r[2],y:r[3],k:r[4]}:!1))))))}function Tt(e){return typeof e=="number"?!Number.isNaN(e):Nt.CSS_UNIT.test(e)}class ze{constructor(t="",r={}){if(t instanceof ze)return t;typeof t=="number"&&(t=Qk(t)),this.originalInput=t;const s=Xk(t);this.originalInput=t,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??s.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,s,i;const o=t.r/255,n=t.g/255,a=t.b/255;return o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),.2126*r+.7152*s+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=dv(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=qp(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=qp(this.r,this.g,this.b),r=Math.round(t.h*360),s=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${s}%, ${i}%)`:`hsva(${r}, ${s}%, ${i}%, ${this.roundA})`}toHsl(){const t=Kp(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Kp(this.r,this.g,this.b),r=Math.round(t.h*360),s=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${s}%, ${i}%)`:`hsla(${r}, ${s}%, ${i}%, ${this.roundA})`}toHex(t=!1){return Qp(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Gk(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${s})`:`rgba(${t}, ${r}, ${s}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(it(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(it(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Xp(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:r,y:s,k:i}=Xp(this.r,this.g,this.b);return`cmyk(${t}, ${r}, ${s}, ${i})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Qp(this.r,this.g,this.b,!1);for(const[r,s]of Object.entries(zu))if(t===s)return r;return!1}toString(t){const r=!!t;t=t??this.format;let s=!1;const i=this.a<1&&this.a>=0;return!r&&i&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(s=this.toRgbString()),t==="prgb"&&(s=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(s=this.toHexString()),t==="hex3"&&(s=this.toHexString(!0)),t==="hex4"&&(s=this.toHex8String(!0)),t==="hex8"&&(s=this.toHex8String()),t==="name"&&(s=this.toName()),t==="hsl"&&(s=this.toHslString()),t==="hsv"&&(s=this.toHsvString()),t==="cmyk"&&(s=this.toCmykString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ze(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=Kn(r.l),new ze(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new ze(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=Kn(r.l),new ze(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=Kn(r.s),new ze(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=Kn(r.s),new ze(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),s=(r.h+t)%360;return r.h=s<0?360+s:s,new ze(r)}mix(t,r=50){const s=this.toRgb(),i=new ze(t).toRgb(),o=r/100,n={r:(i.r-s.r)*o+s.r,g:(i.g-s.g)*o+s.g,b:(i.b-s.b)*o+s.b,a:(i.a-s.a)*o+s.a};return new ze(n)}analogous(t=6,r=30){const s=this.toHsl(),i=360/r,o=[this];for(s.h=(s.h-(i*t>>1)+720)%360;--t;)s.h=(s.h+i)%360,o.push(new ze(s));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ze(t)}monochromatic(t=6){const r=this.toHsv(),{h:s}=r,{s:i}=r;let{v:o}=r;const n=[],a=1/t;for(;t--;)n.push(new ze({h:s,s:i,v:o})),o=(o+a)%1;return n}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new ze({h:(r+72)%360,s:t.s,l:t.l}),new ze({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),s=new ze(t).toRgb(),i=r.a+s.a*(1-r.a);return new ze({r:(r.r*r.a+s.r*s.a*(1-r.a))/i,g:(r.g*r.a+s.g*s.a*(1-r.a))/i,b:(r.b*r.a+s.b*s.a*(1-r.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:s}=r,i=[this],o=360/t;for(let n=1;n<t;n++)i.push(new ze({h:(s+n*o)%360,s:r.s,l:r.l}));return i}equals(t){const r=new ze(t);return this.format==="cmyk"||r.format==="cmyk"?this.toCmykString()===r.toCmykString():this.toRgbString()===r.toRgbString()}}var Zp="EyeDropper"in window,J=class extends F{constructor(){super(),this.formControlController=new Br(this),this.isSafeValue=!1,this.localize=new oe(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();let i=this.value,o=this.value;r.focus(),e.preventDefault(),Ro(t,{onMove:n=>{this.alpha=Oe(n/s*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();let i=this.value,o=this.value;r.focus(),e.preventDefault(),Ro(t,{onMove:n=>{this.hue=Oe(n/s*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:s,height:i}=t.getBoundingClientRect();let o=this.value,n=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Ro(t,{onMove:(a,l)=>{this.saturation=Oe(a/s*100,0,100),this.brightness=Oe(100-l/i*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Oe(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Oe(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Oe(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Oe(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Oe(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Oe(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Oe(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Oe(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new ze(e);if(!t.isValid)return null;const r=t.toHsl(),s={h:r.h,s:r.s*100,l:r.l*100,a:r.a},i=t.toRgb(),o=t.toHexString(),n=t.toHex8String(),a=t.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(n)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Zp)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,s=100){const i=new ze(`hsva(${e}, ${t}%, ${r}%, ${s/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(i=>i.trim()!==""),s=A`
      <div
        part="base"
        class=${K({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
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
            class=${K({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${bt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${V(this.disabled?void 0:"0")}
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
                tabindex=${V(this.disabled?void 0:"0")}
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
                      tabindex=${V(this.disabled?void 0:"0")}
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
            ${Zp?A`
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
                      tabindex=${V(this.disabled?void 0:"0")}
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
          class=${K({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${bt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};J.styles=[q,Fk];J.dependencies={"sl-button-group":_s,"sl-button":ae,"sl-dropdown":et,"sl-icon":he,"sl-input":X,"sl-visually-hidden":gl};c([I('[part~="base"]')],J.prototype,"base",2);c([I('[part~="input"]')],J.prototype,"input",2);c([I(".color-dropdown")],J.prototype,"dropdown",2);c([I('[part~="preview"]')],J.prototype,"previewButton",2);c([I('[part~="trigger"]')],J.prototype,"trigger",2);c([W()],J.prototype,"hasFocus",2);c([W()],J.prototype,"isDraggingGridHandle",2);c([W()],J.prototype,"isEmpty",2);c([W()],J.prototype,"inputValue",2);c([W()],J.prototype,"hue",2);c([W()],J.prototype,"saturation",2);c([W()],J.prototype,"brightness",2);c([W()],J.prototype,"alpha",2);c([f()],J.prototype,"value",2);c([qi()],J.prototype,"defaultValue",2);c([f()],J.prototype,"label",2);c([f()],J.prototype,"format",2);c([f({type:Boolean,reflect:!0})],J.prototype,"inline",2);c([f({reflect:!0})],J.prototype,"size",2);c([f({attribute:"no-format-toggle",type:Boolean})],J.prototype,"noFormatToggle",2);c([f()],J.prototype,"name",2);c([f({type:Boolean,reflect:!0})],J.prototype,"disabled",2);c([f({type:Boolean})],J.prototype,"hoist",2);c([f({type:Boolean})],J.prototype,"opacity",2);c([f({type:Boolean})],J.prototype,"uppercase",2);c([f()],J.prototype,"swatches",2);c([f({reflect:!0})],J.prototype,"form",2);c([f({type:Boolean,reflect:!0})],J.prototype,"required",2);c([yn({passive:!1})],J.prototype,"handleTouchMove",1);c([L("format",{waitUntilFirstUpdate:!0})],J.prototype,"handleFormatChange",1);c([L("opacity",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpacityChange",1);c([L("value")],J.prototype,"handleValueChange",1);var e2="sl-color-picker";J.define("sl-color-picker");U({tagName:e2,elementClass:J,react:j,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var t2=H`
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
`,qe=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let i=this.from,o="";r?[i,o]=this.from.trim().split("."):s&&([i,o]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(i):null;n?s?e=n.getAttribute(o)||"":r?e=n[o]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),i=e==="success"?this.successIcon:this.errorIcon,o=we(this,"copy.in",{dir:"ltr"}),n=we(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await i.animate(n.keyframes,n.options).finished,i.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return A`
      <sl-tooltip
        class=${K({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};qe.styles=[q,t2];qe.dependencies={"sl-icon":he,"sl-tooltip":Ke};c([I('slot[name="copy-icon"]')],qe.prototype,"copyIcon",2);c([I('slot[name="success-icon"]')],qe.prototype,"successIcon",2);c([I('slot[name="error-icon"]')],qe.prototype,"errorIcon",2);c([I("sl-tooltip")],qe.prototype,"tooltip",2);c([W()],qe.prototype,"isCopying",2);c([W()],qe.prototype,"status",2);c([f()],qe.prototype,"value",2);c([f()],qe.prototype,"from",2);c([f({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);c([f({attribute:"copy-label"})],qe.prototype,"copyLabel",2);c([f({attribute:"success-label"})],qe.prototype,"successLabel",2);c([f({attribute:"error-label"})],qe.prototype,"errorLabel",2);c([f({attribute:"feedback-duration",type:Number})],qe.prototype,"feedbackDuration",2);c([f({attribute:"tooltip-placement"})],qe.prototype,"tooltipPlacement",2);c([f({type:Boolean})],qe.prototype,"hoist",2);le("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});le("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var r2="sl-copy-button";qe.define("sl-copy-button");U({tagName:r2,elementClass:qe,react:j,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var s2=H`
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
`,Jt=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Ve(this.body);const{keyframes:t,options:r}=we(this,"details.show",{dir:this.localize.dir()});await Te(this.body,qa(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Ve(this.body);const{keyframes:t,options:r}=we(this,"details.hide",{dir:this.localize.dir()});await Te(this.body,qa(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ft(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ft(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return A`
      <details
        part="base"
        class=${K({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
    `}};Jt.styles=[q,s2];Jt.dependencies={"sl-icon":he};c([I(".details")],Jt.prototype,"details",2);c([I(".details__header")],Jt.prototype,"header",2);c([I(".details__body")],Jt.prototype,"body",2);c([I(".details__expand-icon-slot")],Jt.prototype,"expandIconSlot",2);c([f({type:Boolean,reflect:!0})],Jt.prototype,"open",2);c([f()],Jt.prototype,"summary",2);c([f({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2);c([L("open",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleOpenChange",1);le("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});le("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var i2="sl-details";Jt.define("sl-details");U({tagName:i2,elementClass:Jt,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var o2=H`
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
`,ur=class extends F{constructor(){super(...arguments),this.hasSlotController=new vt(this,"footer"),this.localize=new oe(this),this.modal=new uv(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Mo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Io(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=we(this,"dialog.denyClose",{dir:this.localize.dir()});Te(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Mo(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ve(this.dialog),Ve(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=we(this,"dialog.show",{dir:this.localize.dir()}),r=we(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Te(this.panel,t.keyframes,t.options),Te(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{Vd(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ve(this.dialog),Ve(this.overlay)]);const e=we(this,"dialog.hide",{dir:this.localize.dir()}),t=we(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Te(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Te(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Io(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ft(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ft(this,"sl-after-hide")}render(){return A`
      <div
        part="base"
        class=${K({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${V(this.noHeader?this.label:void 0)}
          aria-labelledby=${V(this.noHeader?void 0:"title")}
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
    `}};ur.styles=[q,o2];ur.dependencies={"sl-icon-button":je};c([I(".dialog")],ur.prototype,"dialog",2);c([I(".dialog__panel")],ur.prototype,"panel",2);c([I(".dialog__overlay")],ur.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],ur.prototype,"open",2);c([f({reflect:!0})],ur.prototype,"label",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],ur.prototype,"noHeader",2);c([L("open",{waitUntilFirstUpdate:!0})],ur.prototype,"handleOpenChange",1);le("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});le("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});le("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});le("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});le("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var n2="sl-dialog";ur.define("sl-dialog");var a2=U({tagName:n2,elementClass:ur,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),l2=a2,c2=H`
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
`,er=class extends F{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return A`
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
    `}};er.styles=[q,c2];er.dependencies={"sl-icon":he};c([I(".animated-image__animated")],er.prototype,"animatedImage",2);c([W()],er.prototype,"frozenFrame",2);c([W()],er.prototype,"isLoaded",2);c([f()],er.prototype,"src",2);c([f()],er.prototype,"alt",2);c([f({type:Boolean,reflect:!0})],er.prototype,"play",2);c([L("play",{waitUntilFirstUpdate:!0})],er.prototype,"handlePlayChange",1);c([L("src")],er.prototype,"handleSrcChange",1);var u2="sl-animated-image";er.define("sl-animated-image");U({tagName:u2,elementClass:er,react:j,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});const d2=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],h2=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],p2=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],f2=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],m2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],g2=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],v2=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],y2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],b2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],w2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],x2=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],_2=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],k2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],C2=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],S2=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],E2=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],$2=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],z2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],A2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],T2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],P2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],N2=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],L2=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],M2=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],I2=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],R2=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],O2=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],D2=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],V2=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],F2=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],B2=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],j2=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],U2=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],H2=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],W2=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],G2=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],K2=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],q2=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Q2=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],X2=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Y2=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Z2=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],J2=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],eC=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],tC=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],rC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],sC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],iC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],oC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],nC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],aC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],lC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],cC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],uC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],dC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],hC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],pC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],fC=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],mC=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],gC=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],vC=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],yC=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],bC=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],wC=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xC=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],_C=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],kC=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],CC=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],SC=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],EC=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],$C=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],zC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],AC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],TC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],PC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],NC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],LC=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],MC=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],IC=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],RC=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],OC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],DC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],VC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],FC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],BC=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],jC=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],UC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],HC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],WC=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],GC=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],KC=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],qC=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],QC=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],XC=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],YC=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ZC=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],JC=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],eS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],hv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},tS=Object.freeze(Object.defineProperty({__proto__:null,backInDown:C2,backInLeft:S2,backInRight:E2,backInUp:$2,backOutDown:z2,backOutLeft:A2,backOutRight:T2,backOutUp:P2,bounce:d2,bounceIn:N2,bounceInDown:L2,bounceInLeft:M2,bounceInRight:I2,bounceInUp:R2,bounceOut:O2,bounceOutDown:D2,bounceOutLeft:V2,bounceOutRight:F2,bounceOutUp:B2,easings:hv,fadeIn:j2,fadeInBottomLeft:U2,fadeInBottomRight:H2,fadeInDown:W2,fadeInDownBig:G2,fadeInLeft:K2,fadeInLeftBig:q2,fadeInRight:Q2,fadeInRightBig:X2,fadeInTopLeft:Y2,fadeInTopRight:Z2,fadeInUp:J2,fadeInUpBig:eC,fadeOut:tC,fadeOutBottomLeft:rC,fadeOutBottomRight:sC,fadeOutDown:iC,fadeOutDownBig:oC,fadeOutLeft:nC,fadeOutLeftBig:aC,fadeOutRight:lC,fadeOutRightBig:cC,fadeOutTopLeft:uC,fadeOutTopRight:dC,fadeOutUp:hC,fadeOutUpBig:pC,flash:h2,flip:fC,flipInX:mC,flipInY:gC,flipOutX:vC,flipOutY:yC,headShake:p2,heartBeat:f2,hinge:BC,jackInTheBox:jC,jello:m2,lightSpeedInLeft:bC,lightSpeedInRight:wC,lightSpeedOutLeft:xC,lightSpeedOutRight:_C,pulse:g2,rollIn:UC,rollOut:HC,rotateIn:kC,rotateInDownLeft:CC,rotateInDownRight:SC,rotateInUpLeft:EC,rotateInUpRight:$C,rotateOut:zC,rotateOutDownLeft:AC,rotateOutDownRight:TC,rotateOutUpLeft:PC,rotateOutUpRight:NC,rubberBand:v2,shake:y2,shakeX:b2,shakeY:w2,slideInDown:LC,slideInLeft:MC,slideInRight:IC,slideInUp:RC,slideOutDown:OC,slideOutLeft:DC,slideOutRight:VC,slideOutUp:FC,swing:x2,tada:_2,wobble:k2,zoomIn:WC,zoomInDown:GC,zoomInLeft:KC,zoomInRight:qC,zoomInUp:QC,zoomOut:XC,zoomOutDown:YC,zoomOutLeft:ZC,zoomOutRight:JC,zoomOutUp:eS},Symbol.toStringTag,{value:"Module"}));var rS=H`
  :host {
    display: contents;
  }
`,Qe=class extends F{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=hv[this.easing])!=null?e:this.easing,s=(t=this.keyframes)!=null?t:tS[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!s?!1:(this.destroyAnimation(),this.animation=o.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};Qe.styles=[q,rS];c([gw("slot")],Qe.prototype,"defaultSlot",2);c([f()],Qe.prototype,"name",2);c([f({type:Boolean,reflect:!0})],Qe.prototype,"play",2);c([f({type:Number})],Qe.prototype,"delay",2);c([f()],Qe.prototype,"direction",2);c([f({type:Number})],Qe.prototype,"duration",2);c([f()],Qe.prototype,"easing",2);c([f({attribute:"end-delay",type:Number})],Qe.prototype,"endDelay",2);c([f()],Qe.prototype,"fill",2);c([f({type:Number})],Qe.prototype,"iterations",2);c([f({attribute:"iteration-start",type:Number})],Qe.prototype,"iterationStart",2);c([f({attribute:!1})],Qe.prototype,"keyframes",2);c([f({attribute:"playback-rate",type:Number})],Qe.prototype,"playbackRate",2);c([L(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Qe.prototype,"handleAnimationChange",1);c([L("play")],Qe.prototype,"handlePlayChange",1);c([L("playbackRate")],Qe.prototype,"handlePlaybackRateChange",1);var sS="sl-animation";Qe.define("sl-animation");U({tagName:sS,elementClass:Qe,react:j,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"});var iS=H`
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
`,dr=class extends F{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=A`
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
        class=${K({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};dr.styles=[q,iS];dr.dependencies={"sl-icon":he};c([W()],dr.prototype,"hasError",2);c([f()],dr.prototype,"image",2);c([f()],dr.prototype,"label",2);c([f()],dr.prototype,"initials",2);c([f()],dr.prototype,"loading",2);c([f({reflect:!0})],dr.prototype,"shape",2);c([L("image")],dr.prototype,"handleImageChange",1);var oS="sl-avatar";dr.define("sl-avatar");U({tagName:oS,elementClass:dr,react:j,events:{onSlError:"sl-error"},displayName:"SlAvatar"});var nS=H`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,ri=class extends F{constructor(){super(...arguments),this.localize=new oe(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const s=t.querySelector('[slot="separator"]');s===null?t.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),A`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};ri.styles=[q,nS];ri.dependencies={"sl-icon":he};c([I("slot")],ri.prototype,"defaultSlot",2);c([I('slot[name="separator"]')],ri.prototype,"separatorSlot",2);c([f()],ri.prototype,"label",2);var aS="sl-breadcrumb";ri.define("sl-breadcrumb");U({tagName:aS,elementClass:ri,react:j,events:{},displayName:"SlBreadcrumb"});var lS="sl-button";ae.define("sl-button");var cS=U({tagName:lS,elementClass:ae,react:j,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),$r=cS,uS=H`
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
`,Ur=class extends F{constructor(){super(...arguments),this.hasSlotController=new vt(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return A`
      <div
        part="base"
        class=${K({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?A`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${V(this.target?this.target:void 0)}"
                rel=${V(this.target?this.rel:void 0)}
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
    `}};Ur.styles=[q,uS];c([I("slot:not([name])")],Ur.prototype,"defaultSlot",2);c([W()],Ur.prototype,"renderType",2);c([f()],Ur.prototype,"href",2);c([f()],Ur.prototype,"target",2);c([f()],Ur.prototype,"rel",2);c([L("href",{waitUntilFirstUpdate:!0})],Ur.prototype,"hrefChanged",1);var dS="sl-breadcrumb-item";Ur.define("sl-breadcrumb-item");U({tagName:dS,elementClass:Ur,react:j,events:{},displayName:"SlBreadcrumbItem"});var hS=H`
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
`,si=class extends F{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return A`
      <span
        part="base"
        class=${K({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};si.styles=[q,hS];c([f({reflect:!0})],si.prototype,"variant",2);c([f({type:Boolean,reflect:!0})],si.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],si.prototype,"pulse",2);var pS="sl-badge";si.define("sl-badge");var fS=U({tagName:pS,elementClass:si,react:j,events:{},displayName:"SlBadge"}),mS=fS,gS=H`
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
`,Bd=class extends F{constructor(){super(...arguments),this.hasSlotController=new vt(this,"footer","header","image")}render(){return A`
      <div
        part="base"
        class=${K({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Bd.styles=[q,gS];var vS="sl-card";Bd.define("sl-card");var yS=U({tagName:vS,elementClass:Bd,react:j,events:{},displayName:"SlCard"}),vc=yS,bS=H`
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
`,Bt=class As extends F{constructor(){super(...arguments),this.hasSlotController=new vt(this,"icon","suffix"),this.localize=new oe(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,r="100%",s="0";this.countdownAnimation=t.animate([{width:r},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ve(this.base),this.base.hidden=!1;const{keyframes:t,options:r}=we(this,"alert.show",{dir:this.localize.dir()});await Te(this.base,t,r),this.emit("sl-after-show")}else{Vd(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Ve(this.base);const{keyframes:t,options:r}=we(this,"alert.hide",{dir:this.localize.dir()});await Te(this.base,t,r),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ft(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ft(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),As.toastStack.parentElement===null&&document.body.append(As.toastStack),As.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{As.toastStack.removeChild(this),t(),As.toastStack.querySelector("sl-alert")===null&&As.toastStack.remove()},{once:!0})})}render(){return A`
      <div
        part="base"
        class=${K({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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
                class=${K({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Bt.styles=[q,bS];Bt.dependencies={"sl-icon-button":je};c([I('[part~="base"]')],Bt.prototype,"base",2);c([I(".alert__countdown-elapsed")],Bt.prototype,"countdownElement",2);c([f({type:Boolean,reflect:!0})],Bt.prototype,"open",2);c([f({type:Boolean,reflect:!0})],Bt.prototype,"closable",2);c([f({reflect:!0})],Bt.prototype,"variant",2);c([f({type:Number})],Bt.prototype,"duration",2);c([f({type:String,reflect:!0})],Bt.prototype,"countdown",2);c([W()],Bt.prototype,"remainingTime",2);c([L("open",{waitUntilFirstUpdate:!0})],Bt.prototype,"handleOpenChange",1);c([L("duration")],Bt.prototype,"handleDurationChange",1);var pv=Bt;le("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});le("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var wS="sl-alert";pv.define("sl-alert");var xS=U({tagName:wS,elementClass:pv,react:j,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"}),Bi=xS,_S=(e,t)=>{let r=0;return function(...s){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...s)},t)}},Jp=(e,t,r)=>{const s=e[t];e[t]=function(...i){s.call(this,...i),r.call(this,s,...i)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,r=new WeakMap,s=o=>{for(const n of o.changedTouches)t.add(n.identifier)},i=o=>{for(const n of o.changedTouches)t.delete(n.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),Jp(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scrollend")return;const a=_S(()=>{t.size?a():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",a,{passive:!0}),r.set(this,a)}),Jp(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scrollend")return;const a=r.get(this);a&&o.call(this,"scroll",a,{passive:!0})})}})();X.define("sl-input");si.define("sl-badge");function kS(){const{falcon:e,cachedCategories:t}=E.useContext(mn),[r,s]=E.useState([]),[i,o]=E.useState({}),[n,a]=E.useState(""),[l,u]=E.useState(""),[h,d]=E.useState([]),[p,g]=E.useState(""),[v,x]=E.useState(""),[C,b]=E.useState({}),[m,y]=E.useState(""),[w,k]=E.useState(null),[S,$]=E.useState(!0),[T,M]=E.useState(!0),[z,ee]=E.useState(!1),[pe,de]=E.useState(""),[ce,Ie]=E.useState(null),[O,re]=E.useState(!1);E.useEffect(()=>{console.log("Selected categories updated:",h)},[h]),E.useEffect(()=>{e&&(async()=>{var te;try{$(!0),M(!0);const Re={name:"urlblock",version:1},yt=await e.cloudFunction(Re).path("/urlblock").get();if((te=yt==null?void 0:yt.body)!=null&&te.host_groups&&s(yt.body.host_groups),t&&t.length>0){const ve={};t.forEach(Le=>{ve[Le]=""}),o(ve)}else{const Le=await e.collection({collection:"domain"}).list({limit:100});if(Le!=null&&Le.resources){const wr={};Le.resources.forEach(xr=>{const jd=typeof xr=="string"?xr:xr.category;jd&&(wr[jd]="")}),o(wr)}}}catch(Re){console.error("Error loading data:",Re),k({type:"error",message:`Failed to load data: ${Re.message}`})}finally{$(!1),M(!1)}})()},[e,t]);const P=async()=>{try{if(console.log("HandlePreview called"),console.log("Selected Categories State:",h),console.log("Selected Categories Length:",h.length),!h||h.length===0)throw console.log("No categories selected, throwing error"),new Error("Please select at least one category");ee(!0),k({type:"info",message:"Loading domains from categories..."});const D=e.collection({collection:"domain"}),te=h.map(async ve=>{try{const Le=ve;console.log(`Fetching domains for category: ${ve}, key: ${Le}`);const wr=await D.read(Le);return console.log(`Record for ${ve}:`,wr),wr&&wr.domain?{category:ve,domain:wr.domain}:{category:ve,domain:null}}catch(Le){return console.warn(`Failed to fetch domains for category ${ve}:`,Le),{category:ve,domain:null}}}),Re=await Promise.all(te),_e={};Re.forEach(({category:ve,domain:Le})=>{Le&&(_e[ve]=Le)}),b(_e);const yt=Object.values(_e).filter(Boolean).join(";");if(!yt)throw new Error("No domains found for selected categories");console.log("Combined URLs for preview:",yt),console.log("Per-category domains map:",_e),x(yt),k({type:"success",message:`Preview generated successfully with domains from ${h.length} categories`})}catch(D){console.error("Preview generation error:",D),k({type:"error",message:D.message})}finally{ee(!1)}},B=async()=>{var D,te,Re;try{if(!n)throw new Error("Please select a host group");if(!l)throw new Error("Please enter a policy name");if(!v)throw new Error("Please preview domains first");if(!p)throw new Error("Please select a platform");if(Object.keys(C).length===0)throw new Error("Please preview domains first");k({type:"info",message:"Creating blocking rule..."});const _e={name:"urlblock",version:1},yt=e.cloudFunction(_e),ve={};h.forEach(xr=>{C[xr]&&(ve[xr]=C[xr])});const Le=(D=r.find(xr=>xr.id===n))==null?void 0:D.name,wr=await yt.path("/create-rule").post({hostGroupId:n,hostGroupName:Le,policyName:l,platform:p.toLowerCase(),categories:ve,whitelist:m.trim(),username:((Re=(te=e==null?void 0:e.data)==null?void 0:te.user)==null?void 0:Re.username)||"unknown"});k({type:"success",message:`Successfully created ${wr.body.rulesCreated} rule(s) and assigned ${h.length} categories!`}),a(""),u(""),d([]),g(""),x(""),b({}),y("")}catch(_e){console.error("Operation failed:",_e),k({type:"error",message:_e.message})}},Q=async()=>{if(pe.trim()){re(!0),Ie(null);try{const D={name:"urlblock",version:1},te=e.cloudFunction(D),Re=encodeURIComponent(pe.trim().toLowerCase()),_e=await te.path("/simulate-policy?fqdn="+Re).get();console.log("Simulator response:",_e),Ie(_e.body)}catch(D){console.error("Simulator error:",D),Ie({error:D.message})}finally{re(!1)}}};return S?_.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:_.jsxs("div",{className:"text-center",children:[_.jsx(Ds,{style:{fontSize:"2rem"}}),_.jsx("p",{className:"mt-4 text-gray-600",children:"Loading data..."})]})}):_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"flex items-end space-x-4",children:[_.jsxs("div",{className:"flex-1",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Policy name"}),_.jsx("input",{type:"text",value:l,onChange:D=>u(D.target.value),placeholder:"Enter a unique name",className:"w-full px-3 bg-white outline-none",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"40px",lineHeight:"40px",border:"1px solid #B8B7BD",borderRadius:"0"}})]}),_.jsxs("div",{className:"flex-1",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Host group"}),_.jsx(Up,{value:n,onSlChange:D=>a(D.target.value),placeholder:"Select",children:r.map(D=>_.jsx(Gn,{value:D.id,children:D.name},D.id))})]}),_.jsxs("div",{className:"flex-1",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Platform"}),_.jsxs(Up,{value:p,onSlChange:D=>g(D.target.value),placeholder:"Select",children:[_.jsx(Gn,{value:"windows",children:"windows"}),_.jsx(Gn,{value:"mac",children:"mac"}),_.jsx(Gn,{value:"linux",children:"linux"})]})]}),_.jsx($r,{variant:"primary",onClick:P,loading:z,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"40px","background-color":"#e5e7eb",color:"black",border:"none","min-width":"120px"},children:"Preview Domains"}),_.jsx($r,{variant:"primary",onClick:B,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"40px","background-color":"#e5e7eb",color:"black",border:"none","min-width":"160px"},children:"Create blocking rule"})]}),_.jsxs("div",{children:[_.jsxs("div",{className:"flex justify-between items-center mb-2",children:[_.jsx("h2",{className:"text-sm font-medium text-gray-700",children:_.jsx("b",{children:"Categories to block"})}),_.jsx(O1,{to:"/about",className:"text-black no-underline text-sm hover:text-gray-600",children:"Add custom categories"})]}),_.jsx("div",{className:"grid grid-cols-4 gap-x-6 gap-y-2 max-h-[400px] overflow-y-auto p-4",style:{border:"1px solid #B8B7BD",borderRadius:"0"},children:T?_.jsxs("div",{className:"col-span-4 flex items-center justify-center py-4",children:[_.jsx(Ds,{style:{fontSize:"1.5rem"}}),_.jsx("span",{className:"ml-2 text-gray-600",children:"Loading categories..."})]}):Object.keys(i).sort().map(D=>_.jsxs("div",{className:"flex items-center space-x-2",children:[_.jsx("input",{type:"checkbox",id:`category-${D}`,checked:h.includes(D),onChange:te=>{te.target.checked?d(Re=>[...Re,D]):d(Re=>Re.filter(_e=>_e!==D))},className:"h-4 w-4 text-gray-600 border-gray-300 focus:ring-0"}),_.jsx("label",{htmlFor:`category-${D}`,className:"text-sm text-gray-700 cursor-pointer select-none",children:D})]},D))})]}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-sm font-medium text-gray-700 mb-2",children:_.jsx("b",{children:"Selected domains preview"})}),_.jsx(xu,{value:v,readonly:!0,rows:"8",placeholder:"Select Preview",resize:"vertical",style:{"--sl-input-font-size":"var(--sl-font-size-medium)","--sl-color-neutral-300":"#E0E0E0",width:"100%","--sl-input-border-color":"#B8B7BD","--sl-input-border-radius-medium":"0"}})]}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-sm font-medium text-gray-700 mb-2",children:_.jsx("b",{children:"Excluded Domains (Whitelist)"})}),_.jsxs("p",{className:"text-xs text-gray-500 mb-2",children:["These domains will be added as an ",_.jsx("strong",{children:"ALLOW"})," rule with the highest priority. Separate multiple domains with semicolons (;)."]}),_.jsx(xu,{value:m,onSlInput:D=>y(D.target.value),rows:"3",placeholder:"e.g. excepcion.com;*.excepcion.com;intranet.empresa.com",resize:"vertical",style:{"--sl-input-font-size":"var(--sl-font-size-medium)","--sl-color-neutral-300":"#E0E0E0",width:"100%","--sl-input-border-color":"#B8B7BD","--sl-input-border-radius-medium":"0"}})]}),_.jsxs("div",{style:{border:"1px solid #B8B7BD",borderRadius:"0",padding:"16px"},children:[_.jsx("h2",{className:"text-sm font-bold text-black mb-2",children:"???? Domain Policy Simulator"}),_.jsx("p",{className:"text-xs text-gray-500 mb-3",children:"Enter a domain to check whether it is registered under any blocking category."}),_.jsxs("div",{className:"flex items-center space-x-3",children:[_.jsx("input",{type:"text",value:pe,onChange:D=>de(D.target.value),onKeyDown:D=>{D.key==="Enter"&&Q()},placeholder:"e.g. facebook.com",className:"flex-1 px-3 bg-white outline-none",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"40px",lineHeight:"40px",border:"1px solid #B8B7BD",borderRadius:"0"}}),_.jsx($r,{variant:"primary",onClick:Q,loading:O,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"40px","background-color":"#e5e7eb",color:"black",border:"none","min-width":"120px"},children:"Check domain"})]}),ce&&!O&&_.jsx("div",{className:"mt-4",children:ce.error?_.jsxs("div",{style:{padding:"10px 14px",background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:"4px",fontSize:"13px",color:"#991b1b"},children:["??? Error: ",ce.error]}):ce.encontrado?_.jsxs("div",{style:{padding:"10px 14px",background:"#fef9c3",border:"1px solid #fde047",borderRadius:"4px",fontSize:"13px",color:"#713f12"},children:["???? ",_.jsx("strong",{children:"BLOCKED"})," ??? ",ce.mensaje,_.jsx("br",{}),_.jsxs("span",{style:{fontSize:"12px",color:"#92400e"},children:["Category: ",_.jsx("strong",{children:ce.categoria})]})]}):_.jsxs("div",{style:{padding:"10px 14px",background:"#dcfce7",border:"1px solid #86efac",borderRadius:"4px",fontSize:"13px",color:"#166534"},children:["??? ",_.jsx("strong",{children:"NOT BLOCKED"})," ??? ",ce.mensaje]})})]}),w&&_.jsx(Bi,{variant:w.type==="error"?"danger":w.type==="success"?"success":"info",open:!0,closable:!0,onSlAfterHide:()=>k(null),children:w.message})]})}function CS(){const{falcon:e}=E.useContext(mn),[t,r]=E.useState(""),[s,i]=E.useState(""),[o,n]=E.useState(null),[a,l]=E.useState(!1),u=async()=>{try{if(l(!0),console.log("Starting category creation"),!t.trim())throw new Error("Please enter a category name");if(!s.trim())throw new Error("Please enter at least one URL");const h=s.split(",").map(v=>v.trim()).filter(v=>v.length>0).join(","),d={name:"urlblock",version:1},p=e.cloudFunction(d);console.log("Sending request with:",{categoryName:t.trim(),urls:h});const g=await p.path("/manage-category").post({categoryName:t.trim(),urls:h});if(console.log("Response:",g),g.status_code===200)n({type:"success",message:`Category created successfully with ${g.body.urlCount||0} URLs!`}),r(""),i("");else throw new Error(g.body.error||"Failed to create category")}catch(h){console.error("Error in handleCreateCategory:",h),n({type:"error",message:`Error: ${h.message}`})}finally{l(!1)}};return _.jsxs("div",{className:"container mx-auto p-4",children:[_.jsx("h2",{className:"text-lg font-semibold text-black mb-4 text-left",children:"Create custom category"}),_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Category Name"}),_.jsx("input",{type:"text",value:t,onChange:h=>r(h.target.value),placeholder:"Enter category name",className:"w-1/2 py-3 px-4 bg-white border border-gray-300 focus:border-gray-400 outline-none",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"40px",lineHeight:"40px",border:"1px solid #B8B7BD",borderRadius:"0"}})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Domains (comma-separated)"}),_.jsx("textarea",{value:s,onChange:h=>i(h.target.value),placeholder:"Enter domains separated by commas (e.g., example.com, test.com, domain.com)",rows:"6",className:"w-1/2 py-3 px-4 bg-white border border-gray-300 focus:border-gray-400 outline-none font-mono text-sm",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"70px",lineHeight:"70px",border:"1px solid #B8B7BD",borderRadius:"0"}}),_.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Example: example.com, test.com, domain.com"})]}),_.jsx($r,{variant:"primary",onClick:u,loading:a,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"48px","background-color":"#e5e7eb",color:"black",border:"none",width:"15%"},children:a?"Creating Category...":"Create Category"}),o&&_.jsx(Bi,{variant:o.type==="error"?"danger":"success",open:!0,closable:!0,onSlAfterHide:()=>n(null),children:o.message})]})]})}const SS="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",ES="px-6 py-4 whitespace-nowrap text-sm";function yc({headers:e,rows:t}){return _.jsx("div",{className:"overflow-x-auto",children:_.jsxs("table",{className:"min-w-full",style:{borderCollapse:"collapse"},children:[_.jsx("thead",{children:_.jsx("tr",{children:e.map(r=>_.jsx("th",{className:SS,children:r},r))})}),_.jsx("tbody",{children:t.map((r,s)=>_.jsx("tr",{children:r.map((i,o)=>_.jsx("td",{className:ES,children:i},o))},s))})]})})}function $S(){const{falcon:e,isInitialized:t}=Pg(),[r,s]=E.useState(null),[i,o]=E.useState(!0),[n,a]=E.useState(null);if(E.useEffect(()=>{if(!t)return;(async()=>{try{o(!0),a(null);const g=await e.cloudFunction({name:"urlblock"}).path("/domain-analytics").get();g!=null&&g.body?s(g.body):a("No data returned from API")}catch(g){console.error("Error fetching analytics:",g),a(g.message)}finally{o(!1)}})()},[t,e]),!t||i)return _.jsx("div",{className:"flex items-center justify-center min-h-screen",children:_.jsx(Ds,{style:{fontSize:"2rem"}})});if(n)return _.jsx(Bi,{variant:"danger",open:!0,children:n});const l=r==null?void 0:r.visualization_data,u=l==null?void 0:l.bar_chart,h=l==null?void 0:l.comparison_chart;if(!u||!h)return _.jsx(Bi,{variant:"warning",open:!0,children:"No analytics data available"});const d=Object.entries(r.analysis||{});return _.jsxs("div",{className:"container mx-auto p-4",children:[_.jsx("h2",{className:"text-lg font-semibold text-left mb-4",children:"Domain access analysis"}),_.jsxs(vc,{children:[_.jsx("div",{slot:"header",children:_.jsx("h3",{className:"text-lg font-semibold text-left",children:"Top 20 Most Visited Domains (Last 15 Days)"})}),_.jsx(yc,{headers:["#","Domain","Visits"],rows:u.domains.map((p,g)=>[g+1,p,u.visits[g]])})]}),_.jsxs(vc,{className:"mt-4",children:[_.jsx("div",{slot:"header",children:_.jsx("h3",{className:"text-lg font-semibold text-left",children:"Visits vs Unique IPs by Domain"})}),_.jsx(yc,{headers:["Domain","Total Visits","Unique IPs"],rows:h.domains.map((p,g)=>[p,h.visits[g],h.unique_ips[g]])})]}),_.jsxs(vc,{className:"mt-4",children:[_.jsx("div",{slot:"header",children:_.jsx("h3",{className:"text-lg font-semibold text-left",children:"Detailed Analysis"})}),_.jsx(yc,{headers:["Domain","Visit Count","Unique IPs","Unique Hosts","First Seen","Last Seen"],rows:d.map(([p,g])=>[p,g.visit_count,g.unique_ips,g.unique_hosts,new Date(g.first_seen).toLocaleString(),new Date(g.last_seen).toLocaleString()])})]})]})}const zS=e=>e==="windows"?"primary":e==="mac"?"success":e==="linux"?"warning":"neutral";function AS(){const{falcon:e,cachedCategories:t}=E.useContext(mn),[r,s]=E.useState([]),[i,o]=E.useState(!0),[n,a]=E.useState(null),[l,u]=E.useState(null),[h,d]=E.useState([]),[p,g]=E.useState(!1),[v,x]=E.useState(null),[C,b]=E.useState([]),[m,y]=E.useState(""),[w,k]=E.useState(!1),[S,$]=E.useState(null),T=E.useRef(null);E.useEffect(()=>{z(),ee()},[]);const M=()=>e.cloudFunction({name:"urlblock",version:1}),z=async()=>{var O;o(!0),a(null);try{const re=await M().path("/list-policies").get();s(((O=re.body)==null?void 0:O.policies)??[])}catch(re){console.error("loadPolicies error:",re),a("No se pudieron cargar las políticas. Intenta recargar la página.")}finally{o(!1)}},ee=async()=>{try{if(t&&t.length>0)d(t);else{const re=await e.collection({collection:"domain"}).list({limit:200}),P=(re==null?void 0:re.resources)??[];d(P.map(B=>typeof B=="string"?B:B.category).filter(Boolean))}}catch(O){console.error("loadAllCategories error:",O)}},pe=async(O,re)=>{if(window.confirm(`¿Eliminar la política "${re}"? Esta acción no se puede deshacer.`)){u(O);try{await M().path("/delete-policy").post({rule_group_id:O}),await z()}catch(P){console.error("handleDelete error:",P),alert("Error al eliminar la política: "+P.message)}finally{u(null)}}},de=O=>{x(O),b([...O.categories]),y(O.whitelist??""),$(null),g(!0)},ce=O=>{b(re=>re.includes(O)?re.filter(P=>P!==O):[...re,O])},Ie=async()=>{var O,re;if(C.length===0){$({type:"warning",message:"Selecciona al menos una categoría."});return}k(!0),$(null);try{const P=e.collection({collection:"domain"}),B={};if(await Promise.all(C.map(async D=>{try{const te=await P.read(D);te!=null&&te.domain&&(B[D]=te.domain)}catch{}})),Object.keys(B).length===0){$({type:"danger",message:"No se pudieron resolver dominios para las categorías seleccionadas."});return}const Q=await M().path("/update-policy").post({ruleGroupId:v.rule_group_id,policyName:v.policy_name,hostGroupId:v.host_group_id,hostGroupName:v.host_group_name,platform:v.platform,categories:B,whitelist:m.trim(),username:((re=(O=e==null?void 0:e.data)==null?void 0:O.user)==null?void 0:re.username)||"unknown"});$({type:"success",message:"¡Política actualizada exitosamente!"}),await z(),setTimeout(()=>{g(!1),$(null)},1500)}catch(P){console.error("handleSave error:",P),$({type:"danger",message:"Error al actualizar: "+P.message})}finally{k(!1)}};return _.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx("h2",{className:"text-sm font-bold text-black",children:"Active Blocking Policies"}),_.jsx($r,{size:"small",onClick:z,disabled:i,style:{"--sl-input-height-small":"32px"},children:i?_.jsx(Ds,{style:{fontSize:"1rem"}}):"↻ Refresh"})]}),n&&_.jsx(Bi,{variant:"danger",open:!0,closable:!0,onSlAfterHide:()=>a(null),children:n}),i&&_.jsx("div",{className:"flex items-center justify-center py-12",children:_.jsx(Ds,{style:{fontSize:"2rem"}})}),!i&&r.length===0&&!n&&_.jsxs("div",{className:"text-center py-12 text-gray-500 text-sm",style:{border:"1px solid #B8B7BD"},children:["No active policies found. Create one from the ",_.jsx("strong",{children:"Category Blocking Policy"})," tab."]}),!i&&r.length>0&&_.jsx("div",{style:{overflowX:"auto"},children:_.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"13px",border:"1px solid #B8B7BD"},children:[_.jsx("thead",{children:_.jsx("tr",{style:{background:"#f9f9f9",borderBottom:"2px solid #B8B7BD"},children:["Policy Name","Host Group","Platform","Categories","Whitelist","Actions"].map(O=>_.jsx("th",{style:{padding:"10px 12px",textAlign:"left",fontWeight:600,color:"#111",whiteSpace:"nowrap"},children:O},O))})}),_.jsx("tbody",{children:r.map((O,re)=>_.jsxs("tr",{style:{borderBottom:"1px solid #E5E7EB",background:re%2===0?"#fff":"#fafafa"},children:[_.jsx("td",{style:{padding:"10px 12px",fontWeight:500},children:O.policy_name||"—"}),_.jsx("td",{style:{padding:"10px 12px",color:"#555"},children:O.host_group_name||O.host_group_id||"—"}),_.jsx("td",{style:{padding:"10px 12px"},children:_.jsx(mS,{variant:zS(O.platform),pill:!0,children:O.platform||"—"})}),_.jsx("td",{style:{padding:"10px 12px"},children:_.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:(O.categories??[]).map(P=>_.jsx("span",{style:{display:"inline-block",padding:"2px 8px",background:"#e5e7eb",borderRadius:"12px",fontSize:"11px",color:"#374151"},children:P},P))})}),_.jsx("td",{style:{padding:"10px 12px",color:"#555",maxWidth:"220px"},children:O.whitelist?_.jsx("span",{style:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:O.whitelist,children:O.whitelist}):_.jsx("span",{style:{color:"#aaa",fontStyle:"italic"},children:"None"})}),_.jsxs("td",{style:{padding:"10px 12px",whiteSpace:"nowrap"},children:[_.jsx($r,{size:"small",variant:"neutral",onClick:()=>de(O),style:{marginRight:"6px"},children:"✏️ Edit"}),_.jsx($r,{size:"small",variant:"danger",loading:l===O.rule_group_id,onClick:()=>pe(O.rule_group_id,O.policy_name),children:"🗑 Delete"})]})]},O.rule_group_id))})]})}),_.jsxs(l2,{ref:T,open:p,label:`Edit policy: ${(v==null?void 0:v.policy_name)??""}`,style:{"--width":"700px"},onSlAfterHide:()=>{g(!1),$(null)},children:[v&&_.jsxs("div",{className:"space-y-5",children:[_.jsxs("div",{className:"grid grid-cols-3 gap-4",style:{fontSize:"13px",color:"#555"},children:[_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"2px"},children:"Policy name"}),_.jsx("div",{style:{padding:"8px 12px",border:"1px solid #B8B7BD",background:"#f5f5f5"},children:v.policy_name})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"2px"},children:"Host group"}),_.jsx("div",{style:{padding:"8px 12px",border:"1px solid #B8B7BD",background:"#f5f5f5"},children:v.host_group_name||v.host_group_id})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"2px"},children:"Platform"}),_.jsx("div",{style:{padding:"8px 12px",border:"1px solid #B8B7BD",background:"#f5f5f5"},children:v.platform})]})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"6px",fontSize:"13px"},children:"Categories to block"}),_.jsx("div",{style:{border:"1px solid #B8B7BD",padding:"12px",maxHeight:"260px",overflowY:"auto",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px 20px"},children:h.length===0?_.jsx("div",{className:"col-span-3 text-center py-4",children:_.jsx(Ds,{style:{fontSize:"1.2rem"}})}):h.sort().map(O=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx("input",{type:"checkbox",id:`edit-cat-${O}`,checked:C.includes(O),onChange:()=>ce(O),style:{width:"14px",height:"14px",cursor:"pointer"}}),_.jsx("label",{htmlFor:`edit-cat-${O}`,style:{fontSize:"12px",cursor:"pointer",color:"#374151"},children:O})]},O))}),_.jsxs("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"4px"},children:[C.length," categories selected"]})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"4px",fontSize:"13px"},children:"Excluded Domains (Whitelist)"}),_.jsxs("p",{style:{fontSize:"11px",color:"#9ca3af",marginBottom:"6px"},children:["These domains will be added as an ",_.jsx("strong",{children:"ALLOW"})," rule with highest priority. Separate with semicolons (;)."]}),_.jsx(xu,{value:m,onSlInput:O=>y(O.target.value),rows:"3",placeholder:"e.g. excepcion.com;*.excepcion.com",resize:"vertical",style:{"--sl-input-font-size":"var(--sl-font-size-medium)",width:"100%","--sl-input-border-color":"#B8B7BD","--sl-input-border-radius-medium":"0"}})]}),S&&_.jsx(Bi,{variant:S.type==="warning"?"warning":S.type==="success"?"success":"danger",open:!0,children:S.message})]}),_.jsxs("div",{slot:"footer",style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[_.jsx($r,{variant:"neutral",onClick:()=>g(!1),disabled:w,children:"Cancel"}),_.jsx($r,{variant:"primary",onClick:Ie,loading:w,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","background-color":"#1a73e8",color:"white"},children:"Save changes"})]})]})]})}var Au={},ef=Uy;Au.createRoot=ef.createRoot,Au.hydrateRoot=ef.hydrateRoot;const TS=`
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
`,_r={header:{fontSize:"2rem",fontWeight:"600",marginBottom:"12px",textAlign:"center"},subHeader:{fontSize:"0.875rem",color:"var(--sl-color-neutral-500)",textAlign:"center"},nav:{position:"relative"},tabList:{display:"flex",gap:"2rem"},tabGroup:{"--sl-spacing-medium":"0",position:"relative",borderBottom:"1px solid #E5E7EB",display:"flex",justifyContent:"center"},tab:{padding:"8px 16px",color:"var(--sl-color-neutral-700)",position:"relative"},activeTab:{fontWeight:"600"},content:{paddingTop:"1.5rem"}};function PS({children:e}){const t=Wi();return _.jsxs("div",{className:"max-w-screen-2xl mx-auto px-4",children:[_.jsx("style",{children:TS}),_.jsxs("div",{style:_r.container,children:[_.jsx("h1",{style:_r.header,children:"Category Blocking"}),_.jsx("p",{style:_r.subHeader,children:"Configure category-based blocking rules for your host groups"})]}),_.jsx(qw,{placement:"bottom",style:_r.tabGroup,children:_.jsx("nav",{style:_r.nav,children:_.jsx("div",{style:_r.tabList,children:[{path:"/",label:"Category Blocking Policy"},{path:"/about",label:"Custom Categories"},{path:"/domain-analytics",label:"Domain Analytics"},{path:"/firewall-rules",label:"Firewall Rules"}].map(({path:r,label:s})=>_.jsx(Fw,{panel:r.substring(1)||"home",active:t.pathname===r,style:{..._r.tab,...t.pathname===r?_r.activeTab:{}},children:_.jsx(Gb,{to:r,style:{textDecoration:"none",color:"inherit"},children:s})},r))})})}),_.jsx("div",{style:_r.content,children:e})]})}function NS(){return _.jsx("div",{className:"min-h-screen sl-theme-dark p-4",children:_.jsx("div",{className:"max-w-screen-2xl mx-auto px-4",children:_.jsx(Ib,{children:_.jsxs(ai,{element:_.jsx(PS,{children:_.jsx(Lb,{})}),children:[_.jsx(ai,{index:!0,path:"/",element:_.jsx(kS,{})}),_.jsx(ai,{path:"/about",element:_.jsx(CS,{})}),_.jsx(ai,{path:"/domain-analytics",element:_.jsx($S,{})}),_.jsx(ai,{path:"/firewall-rules",element:_.jsx(AS,{})})]})})})})}function LS(){const{falcon:e,navigation:t,isInitialized:r}=Pg();return r?_.jsx(ff.StrictMode,{children:_.jsx(mn.Provider,{value:{falcon:e,navigation:t,isInitialized:r},children:_.jsx(Ub,{children:_.jsx(NS,{})})})}):_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:_.jsxs("div",{className:"text-center",children:[_.jsx(Ds,{style:{fontSize:"2rem"}}),_.jsx("p",{className:"mt-4 text-gray-600",children:"Initializing application..."})]})})}const tf=document.querySelector("#app");tf?Au.createRoot(tf).render(_.jsx(LS,{})):console.error("Could not find #app element");
