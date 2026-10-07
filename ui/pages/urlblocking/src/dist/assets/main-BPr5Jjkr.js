var Sv=Object.defineProperty;var Ev=(e,t,r)=>t in e?Sv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var W=(e,t,r)=>Ev(e,typeof t!="symbol"?t+"":t,r);function $v(e,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(s,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function zv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hf={exports:{}},el={},pf={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pn=Symbol.for("react.element"),Av=Symbol.for("react.portal"),Tv=Symbol.for("react.fragment"),Pv=Symbol.for("react.strict_mode"),Nv=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),Iv=Symbol.for("react.forward_ref"),Rv=Symbol.for("react.suspense"),Ov=Symbol.for("react.memo"),Dv=Symbol.for("react.lazy"),Qd=Symbol.iterator;function Vv(e){return e===null||typeof e!="object"?null:(e=Qd&&e[Qd]||e["@@iterator"],typeof e=="function"?e:null)}var ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mf=Object.assign,gf={};function Gi(e,t,r){this.props=e,this.context=t,this.refs=gf,this.updater=r||ff}Gi.prototype.isReactComponent={};Gi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vf(){}vf.prototype=Gi.prototype;function Iu(e,t,r){this.props=e,this.context=t,this.refs=gf,this.updater=r||ff}var Ru=Iu.prototype=new vf;Ru.constructor=Iu;mf(Ru,Gi.prototype);Ru.isPureReactComponent=!0;var Xd=Array.isArray,yf=Object.prototype.hasOwnProperty,Ou={current:null},bf={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,t,r){var s,i={},o=null,n=null;if(t!=null)for(s in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(o=""+t.key),t)yf.call(t,s)&&!bf.hasOwnProperty(s)&&(i[s]=t[s]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(s in a=e.defaultProps,a)i[s]===void 0&&(i[s]=a[s]);return{$$typeof:pn,type:e,key:o,ref:n,props:i,_owner:Ou.current}}function Fv(e,t){return{$$typeof:pn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Du(e){return typeof e=="object"&&e!==null&&e.$$typeof===pn}function Bv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Yd=/\/+/g;function Tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bv(""+e.key):t.toString(36)}function ea(e,t,r,s,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(o){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case pn:case Av:n=!0}}if(n)return n=e,i=i(n),e=s===""?"."+Tl(n,0):s,Xd(i)?(r="",e!=null&&(r=e.replace(Yd,"$&/")+"/"),ea(i,t,r,"",function(u){return u})):i!=null&&(Du(i)&&(i=Fv(i,r+(!i.key||n&&n.key===i.key?"":(""+i.key).replace(Yd,"$&/")+"/")+e)),t.push(i)),1;if(n=0,s=s===""?".":s+":",Xd(e))for(var a=0;a<e.length;a++){o=e[a];var l=s+Tl(o,a);n+=ea(o,t,r,l,i)}else if(l=Vv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=s+Tl(o,a++),n+=ea(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function $n(e,t,r){if(e==null)return e;var s=[],i=0;return ea(e,s,"","",function(o){return t.call(r,o,i++)}),s}function jv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},ta={transition:null},Uv={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:ta,ReactCurrentOwner:Ou};function xf(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:$n,forEach:function(e,t,r){$n(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return $n(e,function(){t++}),t},toArray:function(e){return $n(e,function(t){return t})||[]},only:function(e){if(!Du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Gi;Y.Fragment=Tv;Y.Profiler=Nv;Y.PureComponent=Iu;Y.StrictMode=Pv;Y.Suspense=Rv;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv;Y.act=xf;Y.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=mf({},e.props),i=e.key,o=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,n=Ou.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)yf.call(t,l)&&!bf.hasOwnProperty(l)&&(s[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];s.children=a}return{$$typeof:pn,type:e.type,key:i,ref:o,props:s,_owner:n}};Y.createContext=function(e){return e={$$typeof:Mv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lv,_context:e},e.Consumer=e};Y.createElement=wf;Y.createFactory=function(e){var t=wf.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Iv,render:e}};Y.isValidElement=Du;Y.lazy=function(e){return{$$typeof:Dv,_payload:{_status:-1,_result:e},_init:jv}};Y.memo=function(e,t){return{$$typeof:Ov,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=ta.transition;ta.transition={};try{e()}finally{ta.transition=t}};Y.unstable_act=xf;Y.useCallback=function(e,t){return ft.current.useCallback(e,t)};Y.useContext=function(e){return ft.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};Y.useEffect=function(e,t){return ft.current.useEffect(e,t)};Y.useId=function(){return ft.current.useId()};Y.useImperativeHandle=function(e,t,r){return ft.current.useImperativeHandle(e,t,r)};Y.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return ft.current.useMemo(e,t)};Y.useReducer=function(e,t,r){return ft.current.useReducer(e,t,r)};Y.useRef=function(e){return ft.current.useRef(e)};Y.useState=function(e){return ft.current.useState(e)};Y.useSyncExternalStore=function(e,t,r){return ft.current.useSyncExternalStore(e,t,r)};Y.useTransition=function(){return ft.current.useTransition()};Y.version="18.3.1";pf.exports=Y;var E=pf.exports;const _f=zv(E),F=$v({__proto__:null,default:_f},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv=E,Wv=Symbol.for("react.element"),Gv=Symbol.for("react.fragment"),Kv=Object.prototype.hasOwnProperty,qv=Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qv={key:!0,ref:!0,__self:!0,__source:!0};function kf(e,t,r){var s,i={},o=null,n=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(n=t.ref);for(s in t)Kv.call(t,s)&&!Qv.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:Wv,type:e,key:o,ref:n,props:i,_owner:qv.current}}el.Fragment=Gv;el.jsx=kf;el.jsxs=kf;hf.exports=el;var _=hf.exports,Cf={exports:{}},Ot={},Sf={exports:{}},Ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,j){var q=N.length;N.push(j);e:for(;0<q;){var ve=q-1>>>1,Ne=N[ve];if(0<i(Ne,j))N[ve]=j,N[q]=Ne,q=ve;else break e}}function r(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var j=N[0],q=N.pop();if(q!==j){N[0]=q;e:for(var ve=0,Ne=N.length,ai=Ne>>>1;ve<ai;){var _r=2*(ve+1)-1,li=N[_r],Q=_r+1,Be=N[Q];if(0>i(li,q))Q<Ne&&0>i(Be,li)?(N[ve]=Be,N[Q]=q,ve=Q):(N[ve]=li,N[_r]=q,ve=_r);else if(Q<Ne&&0>i(Be,q))N[ve]=Be,N[Q]=q,ve=Q;else break e}}return j}function i(N,j){var q=N.sortIndex-j.sortIndex;return q!==0?q:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var n=Date,a=n.now();e.unstable_now=function(){return n.now()-a}}var l=[],u=[],h=1,d=null,p=3,g=!1,v=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var j=r(u);j!==null;){if(j.callback===null)s(u);else if(j.startTime<=N)s(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=r(u)}}function w(N){if(x=!1,y(N),!v)if(r(l)!==null)v=!0,te(k);else{var j=r(u);j!==null&&de(w,j.startTime-N)}}function k(N,j){v=!1,x&&(x=!1,b(T),T=-1),g=!0;var q=p;try{for(y(j),d=r(l);d!==null&&(!(d.expirationTime>j)||N&&!ee());){var ve=d.callback;if(typeof ve=="function"){d.callback=null,p=d.priorityLevel;var Ne=ve(d.expirationTime<=j);j=e.unstable_now(),typeof Ne=="function"?d.callback=Ne:d===r(l)&&s(l),y(j)}else s(l);d=r(l)}if(d!==null)var ai=!0;else{var _r=r(u);_r!==null&&de(w,_r.startTime-j),ai=!1}return ai}finally{d=null,p=q,g=!1}}var S=!1,$=null,T=-1,M=5,z=-1;function ee(){return!(e.unstable_now()-z<M)}function he(){if($!==null){var N=e.unstable_now();z=N;var j=!0;try{j=$(!0,N)}finally{j?le():(S=!1,$=null)}}else S=!1}var le;if(typeof m=="function")le=function(){m(he)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,R=fe.port2;fe.port1.onmessage=he,le=function(){R.postMessage(null)}}else le=function(){C(he,0)};function te(N){$=N,S||(S=!0,le())}function de(N,j){T=C(function(){N(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,te(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var j=3;break;default:j=p}var q=p;p=j;try{return N()}finally{p=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var q=p;p=N;try{return j()}finally{p=q}},e.unstable_scheduleCallback=function(N,j,q){var ve=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ve+q:ve):q=ve,N){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=q+Ne,N={id:h++,callback:j,priorityLevel:N,startTime:q,expirationTime:Ne,sortIndex:-1},q>ve?(N.sortIndex=q,t(u,N),r(l)===null&&N===r(u)&&(x?(b(T),T=-1):x=!0,de(w,q-ve))):(N.sortIndex=Ne,t(l,N),v||g||(v=!0,te(k))),N},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(N){var j=p;return function(){var q=p;p=j;try{return N.apply(this,arguments)}finally{p=q}}}})(Ef);Sf.exports=Ef;var Xv=Sf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv=E,Rt=Xv;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $f=new Set,jo={};function Js(e,t){Ri(e,t),Ri(e+"Capture",t)}function Ri(e,t){for(jo[e]=t,e=0;e<t.length;e++)$f.add(t[e])}var Ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=Object.prototype.hasOwnProperty,Zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zd={},Jd={};function Jv(e){return Cc.call(Jd,e)?!0:Cc.call(Zd,e)?!1:Zv.test(e)?Jd[e]=!0:(Zd[e]=!0,!1)}function e0(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function t0(e,t,r,s){if(t===null||typeof t>"u"||e0(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,r,s,i,o,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=n}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vu=/[\-:]([a-z])/g;function Fu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vu,Fu);st[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vu,Fu);st[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vu,Fu);st[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bu(e,t,r,s){var i=st.hasOwnProperty(t)?st[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t0(t,r,i,s)&&(r=null),s||i===null?Jv(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Vr=Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zn=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),ju=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),zf=Symbol.for("react.provider"),Af=Symbol.for("react.context"),Uu=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),$c=Symbol.for("react.suspense_list"),Hu=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),Tf=Symbol.for("react.offscreen"),eh=Symbol.iterator;function io(e){return e===null||typeof e!="object"?null:(e=eh&&e[eh]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Pl;function wo(e){if(Pl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Nl=!1;function Ll(e,t){if(!e||Nl)return"";Nl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=s.stack.split(`
`),n=i.length-1,a=o.length-1;1<=n&&0<=a&&i[n]!==o[a];)a--;for(;1<=n&&0<=a;n--,a--)if(i[n]!==o[a]){if(n!==1||a!==1)do if(n--,a--,0>a||i[n]!==o[a]){var l=`
`+i[n].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=n&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?wo(e):""}function r0(e){switch(e.tag){case 5:return wo(e.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function zc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gi:return"Fragment";case mi:return"Portal";case Sc:return"Profiler";case ju:return"StrictMode";case Ec:return"Suspense";case $c:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Af:return(e.displayName||"Context")+".Consumer";case zf:return(e._context.displayName||"Context")+".Provider";case Uu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hu:return t=e.displayName||null,t!==null?t:zc(e.type)||"Memo";case qr:t=e._payload,e=e._init;try{return zc(e(t))}catch{}}return null}function s0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(t);case 8:return t===ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fs(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function i0(e){var t=Pf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(n){s=""+n,o.call(this,n)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(n){s=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function An(e){e._valueTracker||(e._valueTracker=i0(e))}function Nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=Pf(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function ga(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ac(e,t){var r=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function th(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=fs(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lf(e,t){t=t.checked,t!=null&&Bu(e,"checked",t,!1)}function Tc(e,t){Lf(e,t);var r=fs(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pc(e,t.type,r):t.hasOwnProperty("defaultValue")&&Pc(e,t.type,fs(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rh(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Pc(e,t,r){(t!=="number"||ga(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var xo=Array.isArray;function zi(e,t,r,s){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&s&&(e[r].defaultSelected=!0)}else{for(r=""+fs(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sh(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(P(92));if(xo(r)){if(1<r.length)throw Error(P(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:fs(r)}}function Mf(e,t){var r=fs(t.value),s=fs(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function ih(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function If(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?If(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tn,Rf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tn=Tn||document.createElement("div"),Tn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Uo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o0=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(e){o0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Co[t]=Co[e]})});function Of(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Co.hasOwnProperty(e)&&Co[e]?(""+t).trim():t+"px"}function Df(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=Of(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,i):e[r]=i}}var n0=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mc(e,t){if(t){if(n0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Ic(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rc=null;function Wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oc=null,Ai=null,Ti=null;function oh(e){if(e=gn(e)){if(typeof Oc!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ol(t),Oc(e.stateNode,e.type,t))}}function Vf(e){Ai?Ti?Ti.push(e):Ti=[e]:Ai=e}function Ff(){if(Ai){var e=Ai,t=Ti;if(Ti=Ai=null,oh(e),t)for(e=0;e<t.length;e++)oh(t[e])}}function Bf(e,t){return e(t)}function jf(){}var Ml=!1;function Uf(e,t,r){if(Ml)return e(t,r);Ml=!0;try{return Bf(e,t,r)}finally{Ml=!1,(Ai!==null||Ti!==null)&&(jf(),Ff())}}function Ho(e,t){var r=e.stateNode;if(r===null)return null;var s=ol(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(P(231,t,typeof r));return r}var Dc=!1;if(Ir)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Dc=!1}function a0(e,t,r,s,i,o,n,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(h){this.onError(h)}}var So=!1,va=null,ya=!1,Vc=null,l0={onError:function(e){So=!0,va=e}};function c0(e,t,r,s,i,o,n,a,l){So=!1,va=null,a0.apply(l0,arguments)}function u0(e,t,r,s,i,o,n,a,l){if(c0.apply(this,arguments),So){if(So){var u=va;So=!1,va=null}else throw Error(P(198));ya||(ya=!0,Vc=u)}}function ei(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nh(e){if(ei(e)!==e)throw Error(P(188))}function d0(e){var t=e.alternate;if(!t){if(t=ei(e),t===null)throw Error(P(188));return t!==e?null:e}for(var r=e,s=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return nh(i),e;if(o===s)return nh(i),t;o=o.sibling}throw Error(P(188))}if(r.return!==s.return)r=i,s=o;else{for(var n=!1,a=i.child;a;){if(a===r){n=!0,r=i,s=o;break}if(a===s){n=!0,s=i,r=o;break}a=a.sibling}if(!n){for(a=o.child;a;){if(a===r){n=!0,r=o,s=i;break}if(a===s){n=!0,s=o,r=i;break}a=a.sibling}if(!n)throw Error(P(189))}}if(r.alternate!==s)throw Error(P(190))}if(r.tag!==3)throw Error(P(188));return r.stateNode.current===r?e:t}function Wf(e){return e=d0(e),e!==null?Gf(e):null}function Gf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gf(e);if(t!==null)return t;e=e.sibling}return null}var Kf=Rt.unstable_scheduleCallback,ah=Rt.unstable_cancelCallback,h0=Rt.unstable_shouldYield,p0=Rt.unstable_requestPaint,Le=Rt.unstable_now,f0=Rt.unstable_getCurrentPriorityLevel,Gu=Rt.unstable_ImmediatePriority,qf=Rt.unstable_UserBlockingPriority,ba=Rt.unstable_NormalPriority,m0=Rt.unstable_LowPriority,Qf=Rt.unstable_IdlePriority,tl=null,yr=null;function g0(e){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var nr=Math.clz32?Math.clz32:b0,v0=Math.log,y0=Math.LN2;function b0(e){return e>>>=0,e===0?32:31-(v0(e)/y0|0)|0}var Pn=64,Nn=4194304;function _o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wa(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,i=e.suspendedLanes,o=e.pingedLanes,n=r&268435455;if(n!==0){var a=n&~i;a!==0?s=_o(a):(o&=n,o!==0&&(s=_o(o)))}else n=r&~i,n!==0?s=_o(n):o!==0&&(s=_o(o));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-nr(t),i=1<<r,s|=e[r],t&=~i;return s}function w0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var n=31-nr(o),a=1<<n,l=i[n];l===-1?(!(a&r)||a&s)&&(i[n]=w0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Fc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xf(){var e=Pn;return Pn<<=1,!(Pn&4194240)&&(Pn=64),e}function Il(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function fn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nr(t),e[t]=r}function _0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-nr(r),o=1<<i;t[i]=0,s[i]=-1,e[i]=-1,r&=~o}}function Ku(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-nr(r),i=1<<s;i&t|e[s]&t&&(e[s]|=t),r&=~i}}var ce=0;function Yf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zf,qu,Jf,em,tm,Bc=!1,Ln=[],ss=null,is=null,os=null,Wo=new Map,Go=new Map,Xr=[],k0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lh(e,t){switch(e){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(t.pointerId)}}function no(e,t,r,s,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[i]},t!==null&&(t=gn(t),t!==null&&qu(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function C0(e,t,r,s,i){switch(t){case"focusin":return ss=no(ss,e,t,r,s,i),!0;case"dragenter":return is=no(is,e,t,r,s,i),!0;case"mouseover":return os=no(os,e,t,r,s,i),!0;case"pointerover":var o=i.pointerId;return Wo.set(o,no(Wo.get(o)||null,e,t,r,s,i)),!0;case"gotpointercapture":return o=i.pointerId,Go.set(o,no(Go.get(o)||null,e,t,r,s,i)),!0}return!1}function rm(e){var t=Ls(e.target);if(t!==null){var r=ei(t);if(r!==null){if(t=r.tag,t===13){if(t=Hf(r),t!==null){e.blockedOn=t,tm(e.priority,function(){Jf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ra(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=jc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Rc=s,r.target.dispatchEvent(s),Rc=null}else return t=gn(r),t!==null&&qu(t),e.blockedOn=r,!1;t.shift()}return!0}function ch(e,t,r){ra(e)&&r.delete(t)}function S0(){Bc=!1,ss!==null&&ra(ss)&&(ss=null),is!==null&&ra(is)&&(is=null),os!==null&&ra(os)&&(os=null),Wo.forEach(ch),Go.forEach(ch)}function ao(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,S0)))}function Ko(e){function t(i){return ao(i,e)}if(0<Ln.length){ao(Ln[0],e);for(var r=1;r<Ln.length;r++){var s=Ln[r];s.blockedOn===e&&(s.blockedOn=null)}}for(ss!==null&&ao(ss,e),is!==null&&ao(is,e),os!==null&&ao(os,e),Wo.forEach(t),Go.forEach(t),r=0;r<Xr.length;r++)s=Xr[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Xr.length&&(r=Xr[0],r.blockedOn===null);)rm(r),r.blockedOn===null&&Xr.shift()}var Pi=Vr.ReactCurrentBatchConfig,xa=!0;function E0(e,t,r,s){var i=ce,o=Pi.transition;Pi.transition=null;try{ce=1,Qu(e,t,r,s)}finally{ce=i,Pi.transition=o}}function $0(e,t,r,s){var i=ce,o=Pi.transition;Pi.transition=null;try{ce=4,Qu(e,t,r,s)}finally{ce=i,Pi.transition=o}}function Qu(e,t,r,s){if(xa){var i=jc(e,t,r,s);if(i===null)Wl(e,t,s,_a,r),lh(e,s);else if(C0(i,e,t,r,s))s.stopPropagation();else if(lh(e,s),t&4&&-1<k0.indexOf(e)){for(;i!==null;){var o=gn(i);if(o!==null&&Zf(o),o=jc(e,t,r,s),o===null&&Wl(e,t,s,_a,r),o===i)break;i=o}i!==null&&s.stopPropagation()}else Wl(e,t,s,null,r)}}var _a=null;function jc(e,t,r,s){if(_a=null,e=Wu(s),e=Ls(e),e!==null)if(t=ei(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Hf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _a=e,null}function sm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f0()){case Gu:return 1;case qf:return 4;case ba:case m0:return 16;case Qf:return 536870912;default:return 16}default:return 16}}var Jr=null,Xu=null,sa=null;function im(){if(sa)return sa;var e,t=Xu,r=t.length,s,i="value"in Jr?Jr.value:Jr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var n=r-e;for(s=1;s<=n&&t[r-s]===i[o-s];s++);return sa=i.slice(e,1<s?1-s:void 0)}function ia(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mn(){return!0}function uh(){return!1}function Dt(e){function t(r,s,i,o,n){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=o,this.target=n,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Mn:uh,this.isPropagationStopped=uh,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Mn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Mn)},persist:function(){},isPersistent:Mn}),t}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=Dt(Ki),mn=Se({},Ki,{view:0,detail:0}),z0=Dt(mn),Rl,Ol,lo,rl=Se({},mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(Rl=e.screenX-lo.screenX,Ol=e.screenY-lo.screenY):Ol=Rl=0,lo=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Ol}}),dh=Dt(rl),A0=Se({},rl,{dataTransfer:0}),T0=Dt(A0),P0=Se({},mn,{relatedTarget:0}),Dl=Dt(P0),N0=Se({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=Dt(N0),M0=Se({},Ki,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I0=Dt(M0),R0=Se({},Ki,{data:0}),hh=Dt(R0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V0[e])?!!t[e]:!1}function Zu(){return F0}var B0=Se({},mn,{key:function(e){if(e.key){var t=O0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(e){return e.type==="keypress"?ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),j0=Dt(B0),U0=Se({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=Dt(U0),H0=Se({},mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),W0=Dt(H0),G0=Se({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=Dt(G0),q0=Se({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Q0=Dt(q0),X0=[9,13,27,32],Ju=Ir&&"CompositionEvent"in window,Eo=null;Ir&&"documentMode"in document&&(Eo=document.documentMode);var Y0=Ir&&"TextEvent"in window&&!Eo,om=Ir&&(!Ju||Eo&&8<Eo&&11>=Eo),fh=" ",mh=!1;function nm(e,t){switch(e){case"keyup":return X0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vi=!1;function Z0(e,t){switch(e){case"compositionend":return am(t);case"keypress":return t.which!==32?null:(mh=!0,fh);case"textInput":return e=t.data,e===fh&&mh?null:e;default:return null}}function J0(e,t){if(vi)return e==="compositionend"||!Ju&&nm(e,t)?(e=im(),sa=Xu=Jr=null,vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return om&&t.locale!=="ko"?null:t.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ey[e.type]:t==="textarea"}function lm(e,t,r,s){Vf(s),t=ka(t,"onChange"),0<t.length&&(r=new Yu("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var $o=null,qo=null;function ty(e){bm(e,0)}function sl(e){var t=wi(e);if(Nf(t))return e}function ry(e,t){if(e==="change")return t}var cm=!1;if(Ir){var Vl;if(Ir){var Fl="oninput"in document;if(!Fl){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),Fl=typeof vh.oninput=="function"}Vl=Fl}else Vl=!1;cm=Vl&&(!document.documentMode||9<document.documentMode)}function yh(){$o&&($o.detachEvent("onpropertychange",um),qo=$o=null)}function um(e){if(e.propertyName==="value"&&sl(qo)){var t=[];lm(t,qo,e,Wu(e)),Uf(ty,t)}}function sy(e,t,r){e==="focusin"?(yh(),$o=t,qo=r,$o.attachEvent("onpropertychange",um)):e==="focusout"&&yh()}function iy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(qo)}function oy(e,t){if(e==="click")return sl(t)}function ny(e,t){if(e==="input"||e==="change")return sl(t)}function ay(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lr=typeof Object.is=="function"?Object.is:ay;function Qo(e,t){if(lr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!Cc.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function bh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wh(e,t){var r=bh(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=bh(r)}}function dm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hm(){for(var e=window,t=ga();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ga(e.document)}return t}function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ly(e){var t=hm(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dm(r.ownerDocument.documentElement,r)){if(s!==null&&ed(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(s.start,i);s=s.end===void 0?o:Math.min(s.end,i),!e.extend&&o>s&&(i=s,s=o,o=i),i=wh(r,o);var n=wh(r,s);i&&n&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cy=Ir&&"documentMode"in document&&11>=document.documentMode,yi=null,Uc=null,zo=null,Hc=!1;function xh(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Hc||yi==null||yi!==ga(s)||(s=yi,"selectionStart"in s&&ed(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),zo&&Qo(zo,s)||(zo=s,s=ka(Uc,"onSelect"),0<s.length&&(t=new Yu("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=yi)))}function In(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var bi={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionend:In("Transition","TransitionEnd")},Bl={},pm={};Ir&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);function il(e){if(Bl[e])return Bl[e];if(!bi[e])return e;var t=bi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in pm)return Bl[e]=t[r];return e}var fm=il("animationend"),mm=il("animationiteration"),gm=il("animationstart"),vm=il("transitionend"),ym=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vs(e,t){ym.set(e,t),Js(t,[e])}for(var jl=0;jl<_h.length;jl++){var Ul=_h[jl],uy=Ul.toLowerCase(),dy=Ul[0].toUpperCase()+Ul.slice(1);vs(uy,"on"+dy)}vs(fm,"onAnimationEnd");vs(mm,"onAnimationIteration");vs(gm,"onAnimationStart");vs("dblclick","onDoubleClick");vs("focusin","onFocus");vs("focusout","onBlur");vs(vm,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Js("onBeforeInput",["compositionend","keypress","textInput","paste"]);Js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function kh(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,u0(s,t,void 0,e),e.currentTarget=null}function bm(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],i=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var n=s.length-1;0<=n;n--){var a=s[n],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;kh(i,a,u),o=l}else for(n=0;n<s.length;n++){if(a=s[n],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;kh(i,a,u),o=l}}}if(ya)throw e=Vc,ya=!1,Vc=null,e}function me(e,t){var r=t[Qc];r===void 0&&(r=t[Qc]=new Set);var s=e+"__bubble";r.has(s)||(wm(t,e,2,!1),r.add(s))}function Hl(e,t,r){var s=0;t&&(s|=4),wm(r,e,s,t)}var Rn="_reactListening"+Math.random().toString(36).slice(2);function Xo(e){if(!e[Rn]){e[Rn]=!0,$f.forEach(function(r){r!=="selectionchange"&&(hy.has(r)||Hl(r,!1,e),Hl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rn]||(t[Rn]=!0,Hl("selectionchange",!1,t))}}function wm(e,t,r,s){switch(sm(t)){case 1:var i=E0;break;case 4:i=$0;break;default:i=Qu}r=i.bind(null,t,r,e),i=void 0,!Dc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Wl(e,t,r,s,i){var o=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var n=s.tag;if(n===3||n===4){var a=s.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(n===4)for(n=s.return;n!==null;){var l=n.tag;if((l===3||l===4)&&(l=n.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;n=n.return}for(;a!==null;){if(n=Ls(a),n===null)return;if(l=n.tag,l===5||l===6){s=o=n;continue e}a=a.parentNode}}s=s.return}Uf(function(){var u=o,h=Wu(r),d=[];e:{var p=ym.get(e);if(p!==void 0){var g=Yu,v=e;switch(e){case"keypress":if(ia(r)===0)break e;case"keydown":case"keyup":g=j0;break;case"focusin":v="focus",g=Dl;break;case"focusout":v="blur",g=Dl;break;case"beforeblur":case"afterblur":g=Dl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=T0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=W0;break;case fm:case mm:case gm:g=L0;break;case vm:g=K0;break;case"scroll":g=z0;break;case"wheel":g=Q0;break;case"copy":case"cut":case"paste":g=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ph}var x=(t&4)!==0,C=!x&&e==="scroll",b=x?p!==null?p+"Capture":null:p;x=[];for(var m=u,y;m!==null;){y=m;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,b!==null&&(w=Ho(m,b),w!=null&&x.push(Yo(m,w,y)))),C)break;m=m.return}0<x.length&&(p=new g(p,v,null,r,h),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&r!==Rc&&(v=r.relatedTarget||r.fromElement)&&(Ls(v)||v[Rr]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=u,v=v?Ls(v):null,v!==null&&(C=ei(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=dh,w="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=ph,w="onPointerLeave",b="onPointerEnter",m="pointer"),C=g==null?p:wi(g),y=v==null?p:wi(v),p=new x(w,m+"leave",g,r,h),p.target=C,p.relatedTarget=y,w=null,Ls(h)===u&&(x=new x(b,m+"enter",v,r,h),x.target=y,x.relatedTarget=C,w=x),C=w,g&&v)t:{for(x=g,b=v,m=0,y=x;y;y=ci(y))m++;for(y=0,w=b;w;w=ci(w))y++;for(;0<m-y;)x=ci(x),m--;for(;0<y-m;)b=ci(b),y--;for(;m--;){if(x===b||b!==null&&x===b.alternate)break t;x=ci(x),b=ci(b)}x=null}else x=null;g!==null&&Ch(d,p,g,x,!1),v!==null&&C!==null&&Ch(d,C,v,x,!0)}}e:{if(p=u?wi(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=ry;else if(gh(p))if(cm)k=ny;else{k=iy;var S=sy}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=oy);if(k&&(k=k(e,u))){lm(d,k,r,h);break e}S&&S(e,p,u),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Pc(p,"number",p.value)}switch(S=u?wi(u):window,e){case"focusin":(gh(S)||S.contentEditable==="true")&&(yi=S,Uc=u,zo=null);break;case"focusout":zo=Uc=yi=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,xh(d,r,h);break;case"selectionchange":if(cy)break;case"keydown":case"keyup":xh(d,r,h)}var $;if(Ju)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else vi?nm(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(om&&r.locale!=="ko"&&(vi||T!=="onCompositionStart"?T==="onCompositionEnd"&&vi&&($=im()):(Jr=h,Xu="value"in Jr?Jr.value:Jr.textContent,vi=!0)),S=ka(u,T),0<S.length&&(T=new hh(T,e,null,r,h),d.push({event:T,listeners:S}),$?T.data=$:($=am(r),$!==null&&(T.data=$)))),($=Y0?Z0(e,r):J0(e,r))&&(u=ka(u,"onBeforeInput"),0<u.length&&(h=new hh("onBeforeInput","beforeinput",null,r,h),d.push({event:h,listeners:u}),h.data=$))}bm(d,t)})}function Yo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ka(e,t){for(var r=t+"Capture",s=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ho(e,r),o!=null&&s.unshift(Yo(e,o,i)),o=Ho(e,t),o!=null&&s.push(Yo(e,o,i))),e=e.return}return s}function ci(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ch(e,t,r,s,i){for(var o=t._reactName,n=[];r!==null&&r!==s;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===s)break;a.tag===5&&u!==null&&(a=u,i?(l=Ho(r,o),l!=null&&n.unshift(Yo(r,l,a))):i||(l=Ho(r,o),l!=null&&n.push(Yo(r,l,a)))),r=r.return}n.length!==0&&e.push({event:t,listeners:n})}var py=/\r\n?/g,fy=/\u0000|\uFFFD/g;function Sh(e){return(typeof e=="string"?e:""+e).replace(py,`
`).replace(fy,"")}function On(e,t,r){if(t=Sh(t),Sh(e)!==t&&r)throw Error(P(425))}function Ca(){}var Wc=null,Gc=null;function Kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(e){return Eh.resolve(null).then(e).catch(vy)}:qc;function vy(e){setTimeout(function(){throw e})}function Gl(e,t){var r=t,s=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){e.removeChild(i),Ko(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);Ko(t)}function ns(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $h(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var qi=Math.random().toString(36).slice(2),gr="__reactFiber$"+qi,Zo="__reactProps$"+qi,Rr="__reactContainer$"+qi,Qc="__reactEvents$"+qi,yy="__reactListeners$"+qi,by="__reactHandles$"+qi;function Ls(e){var t=e[gr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Rr]||r[gr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=$h(e);e!==null;){if(r=e[gr])return r;e=$h(e)}return t}e=r,r=e.parentNode}return null}function gn(e){return e=e[gr]||e[Rr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ol(e){return e[Zo]||null}var Xc=[],xi=-1;function ys(e){return{current:e}}function ge(e){0>xi||(e.current=Xc[xi],Xc[xi]=null,xi--)}function pe(e,t){xi++,Xc[xi]=e.current,e.current=t}var ms={},ut=ys(ms),xt=ys(!1),js=ms;function Oi(e,t){var r=e.type.contextTypes;if(!r)return ms;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _t(e){return e=e.childContextTypes,e!=null}function Sa(){ge(xt),ge(ut)}function zh(e,t,r){if(ut.current!==ms)throw Error(P(168));pe(ut,t),pe(xt,r)}function xm(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(P(108,s0(e)||"Unknown",i));return Se({},r,s)}function Ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ms,js=ut.current,pe(ut,e),pe(xt,xt.current),!0}function Ah(e,t,r){var s=e.stateNode;if(!s)throw Error(P(169));r?(e=xm(e,t,js),s.__reactInternalMemoizedMergedChildContext=e,ge(xt),ge(ut),pe(ut,e)):ge(xt),pe(xt,r)}var Er=null,nl=!1,Kl=!1;function _m(e){Er===null?Er=[e]:Er.push(e)}function wy(e){nl=!0,_m(e)}function bs(){if(!Kl&&Er!==null){Kl=!0;var e=0,t=ce;try{var r=Er;for(ce=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Er=null,nl=!1}catch(i){throw Er!==null&&(Er=Er.slice(e+1)),Kf(Gu,bs),i}finally{ce=t,Kl=!1}}return null}var _i=[],ki=0,$a=null,za=0,Ut=[],Ht=0,Us=null,zr=1,Ar="";function As(e,t){_i[ki++]=za,_i[ki++]=$a,$a=e,za=t}function km(e,t,r){Ut[Ht++]=zr,Ut[Ht++]=Ar,Ut[Ht++]=Us,Us=e;var s=zr;e=Ar;var i=32-nr(s)-1;s&=~(1<<i),r+=1;var o=32-nr(t)+i;if(30<o){var n=i-i%5;o=(s&(1<<n)-1).toString(32),s>>=n,i-=n,zr=1<<32-nr(t)+i|r<<i|s,Ar=o+e}else zr=1<<o|r<<i|s,Ar=e}function td(e){e.return!==null&&(As(e,1),km(e,1,0))}function rd(e){for(;e===$a;)$a=_i[--ki],_i[ki]=null,za=_i[--ki],_i[ki]=null;for(;e===Us;)Us=Ut[--Ht],Ut[Ht]=null,Ar=Ut[--Ht],Ut[Ht]=null,zr=Ut[--Ht],Ut[Ht]=null}var It=null,Lt=null,ye=!1,or=null;function Cm(e,t){var r=Wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Th(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Lt=ns(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Us!==null?{id:zr,overflow:Ar}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,It=e,Lt=null,!0):!1;default:return!1}}function Yc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zc(e){if(ye){var t=Lt;if(t){var r=t;if(!Th(e,t)){if(Yc(e))throw Error(P(418));t=ns(r.nextSibling);var s=It;t&&Th(e,t)?Cm(s,r):(e.flags=e.flags&-4097|2,ye=!1,It=e)}}else{if(Yc(e))throw Error(P(418));e.flags=e.flags&-4097|2,ye=!1,It=e}}}function Ph(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function Dn(e){if(e!==It)return!1;if(!ye)return Ph(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kc(e.type,e.memoizedProps)),t&&(t=Lt)){if(Yc(e))throw Sm(),Error(P(418));for(;t;)Cm(e,t),t=ns(t.nextSibling)}if(Ph(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Lt=ns(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Lt=null}}else Lt=It?ns(e.stateNode.nextSibling):null;return!0}function Sm(){for(var e=Lt;e;)e=ns(e.nextSibling)}function Di(){Lt=It=null,ye=!1}function sd(e){or===null?or=[e]:or.push(e)}var xy=Vr.ReactCurrentBatchConfig;function co(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(P(309));var s=r.stateNode}if(!s)throw Error(P(147,e));var i=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(n){var a=i.refs;n===null?delete a[o]:a[o]=n},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!r._owner)throw Error(P(290,e))}return e}function Vn(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nh(e){var t=e._init;return t(e._payload)}function Em(e){function t(b,m){if(e){var y=b.deletions;y===null?(b.deletions=[m],b.flags|=16):y.push(m)}}function r(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function s(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function i(b,m){return b=us(b,m),b.index=0,b.sibling=null,b}function o(b,m,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<m?(b.flags|=2,m):y):(b.flags|=2,m)):(b.flags|=1048576,m)}function n(b){return e&&b.alternate===null&&(b.flags|=2),b}function a(b,m,y,w){return m===null||m.tag!==6?(m=ec(y,b.mode,w),m.return=b,m):(m=i(m,y),m.return=b,m)}function l(b,m,y,w){var k=y.type;return k===gi?h(b,m,y.props.children,w,y.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qr&&Nh(k)===m.type)?(w=i(m,y.props),w.ref=co(b,m,y),w.return=b,w):(w=da(y.type,y.key,y.props,null,b.mode,w),w.ref=co(b,m,y),w.return=b,w)}function u(b,m,y,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=tc(y,b.mode,w),m.return=b,m):(m=i(m,y.children||[]),m.return=b,m)}function h(b,m,y,w,k){return m===null||m.tag!==7?(m=Vs(y,b.mode,w,k),m.return=b,m):(m=i(m,y),m.return=b,m)}function d(b,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ec(""+m,b.mode,y),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zn:return y=da(m.type,m.key,m.props,null,b.mode,y),y.ref=co(b,null,m),y.return=b,y;case mi:return m=tc(m,b.mode,y),m.return=b,m;case qr:var w=m._init;return d(b,w(m._payload),y)}if(xo(m)||io(m))return m=Vs(m,b.mode,y,null),m.return=b,m;Vn(b,m)}return null}function p(b,m,y,w){var k=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:a(b,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zn:return y.key===k?l(b,m,y,w):null;case mi:return y.key===k?u(b,m,y,w):null;case qr:return k=y._init,p(b,m,k(y._payload),w)}if(xo(y)||io(y))return k!==null?null:h(b,m,y,w,null);Vn(b,y)}return null}function g(b,m,y,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(y)||null,a(m,b,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case zn:return b=b.get(w.key===null?y:w.key)||null,l(m,b,w,k);case mi:return b=b.get(w.key===null?y:w.key)||null,u(m,b,w,k);case qr:var S=w._init;return g(b,m,y,S(w._payload),k)}if(xo(w)||io(w))return b=b.get(y)||null,h(m,b,w,k,null);Vn(m,w)}return null}function v(b,m,y,w){for(var k=null,S=null,$=m,T=m=0,M=null;$!==null&&T<y.length;T++){$.index>T?(M=$,$=null):M=$.sibling;var z=p(b,$,y[T],w);if(z===null){$===null&&($=M);break}e&&$&&z.alternate===null&&t(b,$),m=o(z,m,T),S===null?k=z:S.sibling=z,S=z,$=M}if(T===y.length)return r(b,$),ye&&As(b,T),k;if($===null){for(;T<y.length;T++)$=d(b,y[T],w),$!==null&&(m=o($,m,T),S===null?k=$:S.sibling=$,S=$);return ye&&As(b,T),k}for($=s(b,$);T<y.length;T++)M=g($,b,T,y[T],w),M!==null&&(e&&M.alternate!==null&&$.delete(M.key===null?T:M.key),m=o(M,m,T),S===null?k=M:S.sibling=M,S=M);return e&&$.forEach(function(ee){return t(b,ee)}),ye&&As(b,T),k}function x(b,m,y,w){var k=io(y);if(typeof k!="function")throw Error(P(150));if(y=k.call(y),y==null)throw Error(P(151));for(var S=k=null,$=m,T=m=0,M=null,z=y.next();$!==null&&!z.done;T++,z=y.next()){$.index>T?(M=$,$=null):M=$.sibling;var ee=p(b,$,z.value,w);if(ee===null){$===null&&($=M);break}e&&$&&ee.alternate===null&&t(b,$),m=o(ee,m,T),S===null?k=ee:S.sibling=ee,S=ee,$=M}if(z.done)return r(b,$),ye&&As(b,T),k;if($===null){for(;!z.done;T++,z=y.next())z=d(b,z.value,w),z!==null&&(m=o(z,m,T),S===null?k=z:S.sibling=z,S=z);return ye&&As(b,T),k}for($=s(b,$);!z.done;T++,z=y.next())z=g($,b,T,z.value,w),z!==null&&(e&&z.alternate!==null&&$.delete(z.key===null?T:z.key),m=o(z,m,T),S===null?k=z:S.sibling=z,S=z);return e&&$.forEach(function(he){return t(b,he)}),ye&&As(b,T),k}function C(b,m,y,w){if(typeof y=="object"&&y!==null&&y.type===gi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case zn:e:{for(var k=y.key,S=m;S!==null;){if(S.key===k){if(k=y.type,k===gi){if(S.tag===7){r(b,S.sibling),m=i(S,y.props.children),m.return=b,b=m;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qr&&Nh(k)===S.type){r(b,S.sibling),m=i(S,y.props),m.ref=co(b,S,y),m.return=b,b=m;break e}r(b,S);break}else t(b,S);S=S.sibling}y.type===gi?(m=Vs(y.props.children,b.mode,w,y.key),m.return=b,b=m):(w=da(y.type,y.key,y.props,null,b.mode,w),w.ref=co(b,m,y),w.return=b,b=w)}return n(b);case mi:e:{for(S=y.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){r(b,m.sibling),m=i(m,y.children||[]),m.return=b,b=m;break e}else{r(b,m);break}else t(b,m);m=m.sibling}m=tc(y,b.mode,w),m.return=b,b=m}return n(b);case qr:return S=y._init,C(b,m,S(y._payload),w)}if(xo(y))return v(b,m,y,w);if(io(y))return x(b,m,y,w);Vn(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(r(b,m.sibling),m=i(m,y),m.return=b,b=m):(r(b,m),m=ec(y,b.mode,w),m.return=b,b=m),n(b)):r(b,m)}return C}var Vi=Em(!0),$m=Em(!1),Aa=ys(null),Ta=null,Ci=null,id=null;function od(){id=Ci=Ta=null}function nd(e){var t=Aa.current;ge(Aa),e._currentValue=t}function Jc(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Ni(e,t){Ta=e,id=Ci=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Kt(e){var t=e._currentValue;if(id!==e)if(e={context:e,memoizedValue:t,next:null},Ci===null){if(Ta===null)throw Error(P(308));Ci=e,Ta.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var Ms=null;function ad(e){Ms===null?Ms=[e]:Ms.push(e)}function zm(e,t,r,s){var i=t.interleaved;return i===null?(r.next=r,ad(t)):(r.next=i.next,i.next=r),t.interleaved=r,Or(e,s)}function Or(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Qr=!1;function ld(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Am(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function as(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,re&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,Or(e,r)}return i=s.interleaved,i===null?(t.next=t,ad(s)):(t.next=i.next,i.next=t),s.interleaved=t,Or(e,r)}function oa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Ku(e,r)}}function Lh(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var n={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=n:o=o.next=n,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Pa(e,t,r,s){var i=e.updateQueue;Qr=!1;var o=i.firstBaseUpdate,n=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,n===null?o=u:n.next=u,n=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==n&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;n=0,h=u=l=null,a=o;do{var p=a.lane,g=a.eventTime;if((s&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(p=t,g=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(g,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(g,d,p):v,p==null)break e;d=Se({},d,p);break e;case 2:Qr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=d):h=h.next=g,n|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do n|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ws|=n,e.lanes=n,e.memoizedState=d}}function Mh(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(P(191,i));i.call(s)}}}var vn={},br=ys(vn),Jo=ys(vn),en=ys(vn);function Is(e){if(e===vn)throw Error(P(174));return e}function cd(e,t){switch(pe(en,t),pe(Jo,e),pe(br,vn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Lc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Lc(t,e)}ge(br),pe(br,t)}function Fi(){ge(br),ge(Jo),ge(en)}function Tm(e){Is(en.current);var t=Is(br.current),r=Lc(t,e.type);t!==r&&(pe(Jo,e),pe(br,r))}function ud(e){Jo.current===e&&(ge(br),ge(Jo))}var ke=ys(0);function Na(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function dd(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var na=Vr.ReactCurrentDispatcher,Ql=Vr.ReactCurrentBatchConfig,Hs=0,Ce=null,je=null,qe=null,La=!1,Ao=!1,tn=0,_y=0;function at(){throw Error(P(321))}function hd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!lr(e[r],t[r]))return!1;return!0}function pd(e,t,r,s,i,o){if(Hs=o,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,na.current=e===null||e.memoizedState===null?Ey:$y,e=r(s,i),Ao){o=0;do{if(Ao=!1,tn=0,25<=o)throw Error(P(301));o+=1,qe=je=null,t.updateQueue=null,na.current=zy,e=r(s,i)}while(Ao)}if(na.current=Ma,t=je!==null&&je.next!==null,Hs=0,qe=je=Ce=null,La=!1,t)throw Error(P(300));return e}function fd(){var e=tn!==0;return tn=0,e}function fr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ce.memoizedState=qe=e:qe=qe.next=e,qe}function qt(){if(je===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=qe===null?Ce.memoizedState:qe.next;if(t!==null)qe=t,je=e;else{if(e===null)throw Error(P(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},qe===null?Ce.memoizedState=qe=e:qe=qe.next=e}return qe}function rn(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=qt(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var s=je,i=s.baseQueue,o=r.pending;if(o!==null){if(i!==null){var n=i.next;i.next=o.next,o.next=n}s.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,s=s.baseState;var a=n=null,l=null,u=o;do{var h=u.lane;if((Hs&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,n=s):l=l.next=d,Ce.lanes|=h,Ws|=h}u=u.next}while(u!==null&&u!==o);l===null?n=s:l.next=a,lr(s,t.memoizedState)||(wt=!0),t.memoizedState=s,t.baseState=n,t.baseQueue=l,r.lastRenderedState=s}if(e=r.interleaved,e!==null){i=e;do o=i.lane,Ce.lanes|=o,Ws|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Yl(e){var t=qt(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var s=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var n=i=i.next;do o=e(o,n.action),n=n.next;while(n!==i);lr(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,s]}function Pm(){}function Nm(e,t){var r=Ce,s=qt(),i=t(),o=!lr(s.memoizedState,i);if(o&&(s.memoizedState=i,wt=!0),s=s.queue,md(Im.bind(null,r,s,e),[e]),s.getSnapshot!==t||o||qe!==null&&qe.memoizedState.tag&1){if(r.flags|=2048,sn(9,Mm.bind(null,r,s,i,t),void 0,null),Qe===null)throw Error(P(349));Hs&30||Lm(r,t,i)}return i}function Lm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Mm(e,t,r,s){t.value=r,t.getSnapshot=s,Rm(t)&&Om(e)}function Im(e,t,r){return r(function(){Rm(t)&&Om(e)})}function Rm(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!lr(e,r)}catch{return!0}}function Om(e){var t=Or(e,1);t!==null&&ar(t,e,1,-1)}function Ih(e){var t=fr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:e},t.queue=e,e=e.dispatch=Sy.bind(null,Ce,e),[t.memoizedState,e]}function sn(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Dm(){return qt().memoizedState}function aa(e,t,r,s){var i=fr();Ce.flags|=e,i.memoizedState=sn(1|t,r,void 0,s===void 0?null:s)}function al(e,t,r,s){var i=qt();s=s===void 0?null:s;var o=void 0;if(je!==null){var n=je.memoizedState;if(o=n.destroy,s!==null&&hd(s,n.deps)){i.memoizedState=sn(t,r,o,s);return}}Ce.flags|=e,i.memoizedState=sn(1|t,r,o,s)}function Rh(e,t){return aa(8390656,8,e,t)}function md(e,t){return al(2048,8,e,t)}function Vm(e,t){return al(4,2,e,t)}function Fm(e,t){return al(4,4,e,t)}function Bm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jm(e,t,r){return r=r!=null?r.concat([e]):null,al(4,4,Bm.bind(null,t,e),r)}function gd(){}function Um(e,t){var r=qt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&hd(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Hm(e,t){var r=qt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&hd(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Wm(e,t,r){return Hs&21?(lr(r,t)||(r=Xf(),Ce.lanes|=r,Ws|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=r)}function ky(e,t){var r=ce;ce=r!==0&&4>r?r:4,e(!0);var s=Ql.transition;Ql.transition={};try{e(!1),t()}finally{ce=r,Ql.transition=s}}function Gm(){return qt().memoizedState}function Cy(e,t,r){var s=cs(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Km(e))qm(t,r);else if(r=zm(e,t,r,s),r!==null){var i=ht();ar(r,e,s,i),Qm(r,t,s)}}function Sy(e,t,r){var s=cs(e),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Km(e))qm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var n=t.lastRenderedState,a=o(n,r);if(i.hasEagerState=!0,i.eagerState=a,lr(a,n)){var l=t.interleaved;l===null?(i.next=i,ad(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=zm(e,t,i,s),r!==null&&(i=ht(),ar(r,e,s,i),Qm(r,t,s))}}function Km(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function qm(e,t){Ao=La=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Qm(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Ku(e,r)}}var Ma={readContext:Kt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},Ey={readContext:Kt,useCallback:function(e,t){return fr().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:Rh,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,aa(4194308,4,Bm.bind(null,t,e),r)},useLayoutEffect:function(e,t){return aa(4194308,4,e,t)},useInsertionEffect:function(e,t){return aa(4,2,e,t)},useMemo:function(e,t){var r=fr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=fr();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Cy.bind(null,Ce,e),[s.memoizedState,e]},useRef:function(e){var t=fr();return e={current:e},t.memoizedState=e},useState:Ih,useDebugValue:gd,useDeferredValue:function(e){return fr().memoizedState=e},useTransition:function(){var e=Ih(!1),t=e[0];return e=ky.bind(null,e[1]),fr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Ce,i=fr();if(ye){if(r===void 0)throw Error(P(407));r=r()}else{if(r=t(),Qe===null)throw Error(P(349));Hs&30||Lm(s,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Rh(Im.bind(null,s,o,e),[e]),s.flags|=2048,sn(9,Mm.bind(null,s,o,r,t),void 0,null),r},useId:function(){var e=fr(),t=Qe.identifierPrefix;if(ye){var r=Ar,s=zr;r=(s&~(1<<32-nr(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=tn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=_y++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$y={readContext:Kt,useCallback:Um,useContext:Kt,useEffect:md,useImperativeHandle:jm,useInsertionEffect:Vm,useLayoutEffect:Fm,useMemo:Hm,useReducer:Xl,useRef:Dm,useState:function(){return Xl(rn)},useDebugValue:gd,useDeferredValue:function(e){var t=qt();return Wm(t,je.memoizedState,e)},useTransition:function(){var e=Xl(rn)[0],t=qt().memoizedState;return[e,t]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:Gm,unstable_isNewReconciler:!1},zy={readContext:Kt,useCallback:Um,useContext:Kt,useEffect:md,useImperativeHandle:jm,useInsertionEffect:Vm,useLayoutEffect:Fm,useMemo:Hm,useReducer:Yl,useRef:Dm,useState:function(){return Yl(rn)},useDebugValue:gd,useDeferredValue:function(e){var t=qt();return je===null?t.memoizedState=e:Wm(t,je.memoizedState,e)},useTransition:function(){var e=Yl(rn)[0],t=qt().memoizedState;return[e,t]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:Gm,unstable_isNewReconciler:!1};function sr(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function eu(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ll={isMounted:function(e){return(e=e._reactInternals)?ei(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=ht(),i=cs(e),o=Pr(s,i);o.payload=t,r!=null&&(o.callback=r),t=as(e,o,i),t!==null&&(ar(t,e,i,s),oa(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=ht(),i=cs(e),o=Pr(s,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=as(e,o,i),t!==null&&(ar(t,e,i,s),oa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ht(),s=cs(e),i=Pr(r,s);i.tag=2,t!=null&&(i.callback=t),t=as(e,i,s),t!==null&&(ar(t,e,s,r),oa(t,e,s))}};function Oh(e,t,r,s,i,o,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,n):t.prototype&&t.prototype.isPureReactComponent?!Qo(r,s)||!Qo(i,o):!0}function Xm(e,t,r){var s=!1,i=ms,o=t.contextType;return typeof o=="object"&&o!==null?o=Kt(o):(i=_t(t)?js:ut.current,s=t.contextTypes,o=(s=s!=null)?Oi(e,i):ms),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ll,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Dh(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&ll.enqueueReplaceState(t,t.state,null)}function tu(e,t,r,s){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},ld(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Kt(o):(o=_t(t)?js:ut.current,i.context=Oi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(eu(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ll.enqueueReplaceState(i,i.state,null),Pa(e,r,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bi(e,t){try{var r="",s=t;do r+=r0(s),s=s.return;while(s);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Zl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ru(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ay=typeof WeakMap=="function"?WeakMap:Map;function Ym(e,t,r){r=Pr(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Ra||(Ra=!0,hu=s),ru(e,t)},r}function Zm(e,t,r){r=Pr(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){ru(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ru(e,t),typeof s!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),r}function Vh(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Ay;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),e=Uy.bind(null,e,t,r),t.then(e,e))}function Fh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bh(e,t,r,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Pr(-1,1),t.tag=2,as(r,t,1))),r.lanes|=1),e)}var Ty=Vr.ReactCurrentOwner,wt=!1;function dt(e,t,r,s){t.child=e===null?$m(t,null,r,s):Vi(t,e.child,r,s)}function jh(e,t,r,s,i){r=r.render;var o=t.ref;return Ni(t,i),s=pd(e,t,r,s,o,i),r=fd(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dr(e,t,i)):(ye&&r&&td(t),t.flags|=1,dt(e,t,s,i),t.child)}function Uh(e,t,r,s,i){if(e===null){var o=r.type;return typeof o=="function"&&!Cd(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Jm(e,t,o,s,i)):(e=da(r.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var n=o.memoizedProps;if(r=r.compare,r=r!==null?r:Qo,r(n,s)&&e.ref===t.ref)return Dr(e,t,i)}return t.flags|=1,e=us(o,s),e.ref=t.ref,e.return=t,t.child=e}function Jm(e,t,r,s,i){if(e!==null){var o=e.memoizedProps;if(Qo(o,s)&&e.ref===t.ref)if(wt=!1,t.pendingProps=s=o,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Dr(e,t,i)}return su(e,t,r,s,i)}function eg(e,t,r){var s=t.pendingProps,i=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ei,Nt),Nt|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(Ei,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,pe(Ei,Nt),Nt|=s}else o!==null?(s=o.baseLanes|r,t.memoizedState=null):s=r,pe(Ei,Nt),Nt|=s;return dt(e,t,i,r),t.child}function tg(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function su(e,t,r,s,i){var o=_t(r)?js:ut.current;return o=Oi(t,o),Ni(t,i),r=pd(e,t,r,s,o,i),s=fd(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dr(e,t,i)):(ye&&s&&td(t),t.flags|=1,dt(e,t,r,i),t.child)}function Hh(e,t,r,s,i){if(_t(r)){var o=!0;Ea(t)}else o=!1;if(Ni(t,i),t.stateNode===null)la(e,t),Xm(t,r,s),tu(t,r,s,i),s=!0;else if(e===null){var n=t.stateNode,a=t.memoizedProps;n.props=a;var l=n.context,u=r.contextType;typeof u=="object"&&u!==null?u=Kt(u):(u=_t(r)?js:ut.current,u=Oi(t,u));var h=r.getDerivedStateFromProps,d=typeof h=="function"||typeof n.getSnapshotBeforeUpdate=="function";d||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(a!==s||l!==u)&&Dh(t,n,s,u),Qr=!1;var p=t.memoizedState;n.state=p,Pa(t,s,n,i),l=t.memoizedState,a!==s||p!==l||xt.current||Qr?(typeof h=="function"&&(eu(t,r,h,s),l=t.memoizedState),(a=Qr||Oh(t,r,a,s,p,l,u))?(d||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=l),n.props=s,n.state=l,n.context=u,s=a):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{n=t.stateNode,Am(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:sr(t.type,a),n.props=u,d=t.pendingProps,p=n.context,l=r.contextType,typeof l=="object"&&l!==null?l=Kt(l):(l=_t(r)?js:ut.current,l=Oi(t,l));var g=r.getDerivedStateFromProps;(h=typeof g=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Dh(t,n,s,l),Qr=!1,p=t.memoizedState,n.state=p,Pa(t,s,n,i);var v=t.memoizedState;a!==d||p!==v||xt.current||Qr?(typeof g=="function"&&(eu(t,r,g,s),v=t.memoizedState),(u=Qr||Oh(t,r,u,s,p,v,l)||!1)?(h||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(s,v,l),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(s,v,l)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=v),n.props=s,n.state=v,n.context=l,s=u):(typeof n.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),s=!1)}return iu(e,t,r,s,o,i)}function iu(e,t,r,s,i,o){tg(e,t);var n=(t.flags&128)!==0;if(!s&&!n)return i&&Ah(t,r,!1),Dr(e,t,o);s=t.stateNode,Ty.current=t;var a=n&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&n?(t.child=Vi(t,e.child,null,o),t.child=Vi(t,null,a,o)):dt(e,t,a,o),t.memoizedState=s.state,i&&Ah(t,r,!0),t.child}function rg(e){var t=e.stateNode;t.pendingContext?zh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zh(e,t.context,!1),cd(e,t.containerInfo)}function Wh(e,t,r,s,i){return Di(),sd(i),t.flags|=256,dt(e,t,r,s),t.child}var ou={dehydrated:null,treeContext:null,retryLane:0};function nu(e){return{baseLanes:e,cachePool:null,transitions:null}}function sg(e,t,r){var s=t.pendingProps,i=ke.current,o=!1,n=(t.flags&128)!==0,a;if((a=n)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),pe(ke,i&1),e===null)return Zc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(n=s.children,e=s.fallback,o?(s=t.mode,o=t.child,n={mode:"hidden",children:n},!(s&1)&&o!==null?(o.childLanes=0,o.pendingProps=n):o=dl(n,s,0,null),e=Vs(e,s,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=nu(r),t.memoizedState=ou,e):vd(t,n));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Py(e,t,n,s,a,i,r);if(o){o=s.fallback,n=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:s.children};return!(n&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=l,t.deletions=null):(s=us(i,l),s.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=us(a,o):(o=Vs(o,n,r,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,n=e.child.memoizedState,n=n===null?nu(r):{baseLanes:n.baseLanes|r,cachePool:null,transitions:n.transitions},o.memoizedState=n,o.childLanes=e.childLanes&~r,t.memoizedState=ou,s}return o=e.child,e=o.sibling,s=us(o,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function vd(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fn(e,t,r,s){return s!==null&&sd(s),Vi(t,e.child,null,r),e=vd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Py(e,t,r,s,i,o,n){if(r)return t.flags&256?(t.flags&=-257,s=Zl(Error(P(422))),Fn(e,t,n,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,i=t.mode,s=dl({mode:"visible",children:s.children},i,0,null),o=Vs(o,i,n,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,t.mode&1&&Vi(t,e.child,null,n),t.child.memoizedState=nu(n),t.memoizedState=ou,o);if(!(t.mode&1))return Fn(e,t,n,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var a=s.dgst;return s=a,o=Error(P(419)),s=Zl(o,s,void 0),Fn(e,t,n,s)}if(a=(n&e.childLanes)!==0,wt||a){if(s=Qe,s!==null){switch(n&-n){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Or(e,i),ar(s,e,i,-1))}return kd(),s=Zl(Error(P(421))),Fn(e,t,n,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Lt=ns(i.nextSibling),It=t,ye=!0,or=null,e!==null&&(Ut[Ht++]=zr,Ut[Ht++]=Ar,Ut[Ht++]=Us,zr=e.id,Ar=e.overflow,Us=t),t=vd(t,s.children),t.flags|=4096,t)}function Gh(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Jc(e.return,t,r)}function Jl(e,t,r,s,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=i)}function ig(e,t,r){var s=t.pendingProps,i=s.revealOrder,o=s.tail;if(dt(e,t,s.children,r),s=ke.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gh(e,r,t);else if(e.tag===19)Gh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(pe(ke,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Na(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Jl(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Na(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Jl(t,!0,r,null,o);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function la(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ws|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,r=us(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=us(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ny(e,t,r){switch(t.tag){case 3:rg(t),Di();break;case 5:Tm(t);break;case 1:_t(t.type)&&Ea(t);break;case 4:cd(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;pe(Aa,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(pe(ke,ke.current&1),t.flags|=128,null):r&t.child.childLanes?sg(e,t,r):(pe(ke,ke.current&1),e=Dr(e,t,r),e!==null?e.sibling:null);pe(ke,ke.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return ig(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(ke,ke.current),s)break;return null;case 22:case 23:return t.lanes=0,eg(e,t,r)}return Dr(e,t,r)}var og,au,ng,ag;og=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};au=function(){};ng=function(e,t,r,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,Is(br.current);var o=null;switch(r){case"input":i=Ac(e,i),s=Ac(e,s),o=[];break;case"select":i=Se({},i,{value:void 0}),s=Se({},s,{value:void 0}),o=[];break;case"textarea":i=Nc(e,i),s=Nc(e,s),o=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ca)}Mc(r,s);var n;r=null;for(u in i)if(!s.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(n in a)a.hasOwnProperty(n)&&(r||(r={}),r[n]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in s){var l=s[u];if(a=i!=null?i[u]:void 0,s.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(n in a)!a.hasOwnProperty(n)||l&&l.hasOwnProperty(n)||(r||(r={}),r[n]="");for(n in l)l.hasOwnProperty(n)&&a[n]!==l[n]&&(r||(r={}),r[n]=l[n])}else r||(o||(o=[]),o.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&me("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ag=function(e,t,r,s){r!==s&&(t.flags|=4)};function uo(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Ly(e,t,r){var s=t.pendingProps;switch(rd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return _t(t.type)&&Sa(),lt(t),null;case 3:return s=t.stateNode,Fi(),ge(xt),ge(ut),dd(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Dn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,or!==null&&(mu(or),or=null))),au(e,t),lt(t),null;case 5:ud(t);var i=Is(en.current);if(r=t.type,e!==null&&t.stateNode!=null)ng(e,t,r,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(P(166));return lt(t),null}if(e=Is(br.current),Dn(t)){s=t.stateNode,r=t.type;var o=t.memoizedProps;switch(s[gr]=t,s[Zo]=o,e=(t.mode&1)!==0,r){case"dialog":me("cancel",s),me("close",s);break;case"iframe":case"object":case"embed":me("load",s);break;case"video":case"audio":for(i=0;i<ko.length;i++)me(ko[i],s);break;case"source":me("error",s);break;case"img":case"image":case"link":me("error",s),me("load",s);break;case"details":me("toggle",s);break;case"input":th(s,o),me("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},me("invalid",s);break;case"textarea":sh(s,o),me("invalid",s)}Mc(r,o),i=null;for(var n in o)if(o.hasOwnProperty(n)){var a=o[n];n==="children"?typeof a=="string"?s.textContent!==a&&(o.suppressHydrationWarning!==!0&&On(s.textContent,a,e),i=["children",a]):typeof a=="number"&&s.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&On(s.textContent,a,e),i=["children",""+a]):jo.hasOwnProperty(n)&&a!=null&&n==="onScroll"&&me("scroll",s)}switch(r){case"input":An(s),rh(s,o,!0);break;case"textarea":An(s),ih(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Ca)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{n=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=If(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=n.createElement(r,{is:s.is}):(e=n.createElement(r),r==="select"&&(n=e,s.multiple?n.multiple=!0:s.size&&(n.size=s.size))):e=n.createElementNS(e,r),e[gr]=t,e[Zo]=s,og(e,t,!1,!1),t.stateNode=e;e:{switch(n=Ic(r,s),r){case"dialog":me("cancel",e),me("close",e),i=s;break;case"iframe":case"object":case"embed":me("load",e),i=s;break;case"video":case"audio":for(i=0;i<ko.length;i++)me(ko[i],e);i=s;break;case"source":me("error",e),i=s;break;case"img":case"image":case"link":me("error",e),me("load",e),i=s;break;case"details":me("toggle",e),i=s;break;case"input":th(e,s),i=Ac(e,s),me("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=Se({},s,{value:void 0}),me("invalid",e);break;case"textarea":sh(e,s),i=Nc(e,s),me("invalid",e);break;default:i=s}Mc(r,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Df(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rf(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Uo(e,l):typeof l=="number"&&Uo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&me("scroll",e):l!=null&&Bu(e,o,l,n))}switch(r){case"input":An(e),rh(e,s,!1);break;case"textarea":An(e),ih(e);break;case"option":s.value!=null&&e.setAttribute("value",""+fs(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?zi(e,!!s.multiple,o,!1):s.defaultValue!=null&&zi(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ca)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)ag(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(P(166));if(r=Is(en.current),Is(br.current),Dn(t)){if(s=t.stateNode,r=t.memoizedProps,s[gr]=t,(o=s.nodeValue!==r)&&(e=It,e!==null))switch(e.tag){case 3:On(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&On(s.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[gr]=t,t.stateNode=s}return lt(t),null;case 13:if(ge(ke),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&Lt!==null&&t.mode&1&&!(t.flags&128))Sm(),Di(),t.flags|=98560,o=!1;else if(o=Dn(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[gr]=t}else Di(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),o=!1}else or!==null&&(mu(or),or=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?Ue===0&&(Ue=3):kd())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return Fi(),au(e,t),e===null&&Xo(t.stateNode.containerInfo),lt(t),null;case 10:return nd(t.type._context),lt(t),null;case 17:return _t(t.type)&&Sa(),lt(t),null;case 19:if(ge(ke),o=t.memoizedState,o===null)return lt(t),null;if(s=(t.flags&128)!==0,n=o.rendering,n===null)if(s)uo(o,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(n=Na(e),n!==null){for(t.flags|=128,uo(o,!1),s=n.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)o=r,e=s,o.flags&=14680066,n=o.alternate,n===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,o.type=n.type,e=n.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return pe(ke,ke.current&1|2),t.child}e=e.sibling}o.tail!==null&&Le()>ji&&(t.flags|=128,s=!0,uo(o,!1),t.lanes=4194304)}else{if(!s)if(e=Na(n),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!n.alternate&&!ye)return lt(t),null}else 2*Le()-o.renderingStartTime>ji&&r!==1073741824&&(t.flags|=128,s=!0,uo(o,!1),t.lanes=4194304);o.isBackwards?(n.sibling=t.child,t.child=n):(r=o.last,r!==null?r.sibling=n:t.child=n,o.last=n)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Le(),t.sibling=null,r=ke.current,pe(ke,s?r&1|2:r&1),t):(lt(t),null);case 22:case 23:return _d(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Nt&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function My(e,t){switch(rd(t),t.tag){case 1:return _t(t.type)&&Sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fi(),ge(xt),ge(ut),dd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ud(t),null;case 13:if(ge(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(ke),null;case 4:return Fi(),null;case 10:return nd(t.type._context),null;case 22:case 23:return _d(),null;case 24:return null;default:return null}}var Bn=!1,ct=!1,Iy=typeof WeakSet=="function"?WeakSet:Set,O=null;function Si(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){ze(e,t,s)}else r.current=null}function lu(e,t,r){try{r()}catch(s){ze(e,t,s)}}var Kh=!1;function Ry(e,t){if(Wc=xa,e=hm(),ed(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var n=0,a=-1,l=-1,u=0,h=0,d=e,p=null;t:for(;;){for(var g;d!==r||i!==0&&d.nodeType!==3||(a=n+i),d!==o||s!==0&&d.nodeType!==3||(l=n+s),d.nodeType===3&&(n+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===r&&++u===i&&(a=n),p===o&&++h===s&&(l=n),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gc={focusedElem:e,selectionRange:r},xa=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,C=v.memoizedState,b=t.stateNode,m=b.getSnapshotBeforeUpdate(t.elementType===t.type?x:sr(t.type,x),C);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){ze(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=Kh,Kh=!1,v}function To(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&lu(t,r,o)}i=i.next}while(i!==s)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function cu(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function lg(e){var t=e.alternate;t!==null&&(e.alternate=null,lg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gr],delete t[Zo],delete t[Qc],delete t[yy],delete t[by])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cg(e){return e.tag===5||e.tag===3||e.tag===4}function qh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uu(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ca));else if(s!==4&&(e=e.child,e!==null))for(uu(e,t,r),e=e.sibling;e!==null;)uu(e,t,r),e=e.sibling}function du(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(du(e,t,r),e=e.sibling;e!==null;)du(e,t,r),e=e.sibling}var et=null,ir=!1;function Gr(e,t,r){for(r=r.child;r!==null;)ug(e,t,r),r=r.sibling}function ug(e,t,r){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(tl,r)}catch{}switch(r.tag){case 5:ct||Si(r,t);case 6:var s=et,i=ir;et=null,Gr(e,t,r),et=s,ir=i,et!==null&&(ir?(e=et,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):et.removeChild(r.stateNode));break;case 18:et!==null&&(ir?(e=et,r=r.stateNode,e.nodeType===8?Gl(e.parentNode,r):e.nodeType===1&&Gl(e,r),Ko(e)):Gl(et,r.stateNode));break;case 4:s=et,i=ir,et=r.stateNode.containerInfo,ir=!0,Gr(e,t,r),et=s,ir=i;break;case 0:case 11:case 14:case 15:if(!ct&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var o=i,n=o.destroy;o=o.tag,n!==void 0&&(o&2||o&4)&&lu(r,t,n),i=i.next}while(i!==s)}Gr(e,t,r);break;case 1:if(!ct&&(Si(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(a){ze(r,t,a)}Gr(e,t,r);break;case 21:Gr(e,t,r);break;case 22:r.mode&1?(ct=(s=ct)||r.memoizedState!==null,Gr(e,t,r),ct=s):Gr(e,t,r);break;default:Gr(e,t,r)}}function Qh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Iy),t.forEach(function(s){var i=Wy.bind(null,e,s);r.has(s)||(r.add(s),s.then(i,i))})}}function rr(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var o=e,n=t,a=n;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,ir=!1;break e;case 3:et=a.stateNode.containerInfo,ir=!0;break e;case 4:et=a.stateNode.containerInfo,ir=!0;break e}a=a.return}if(et===null)throw Error(P(160));ug(o,n,i),et=null,ir=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ze(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dg(t,e),t=t.sibling}function dg(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rr(t,e),pr(e),s&4){try{To(3,e,e.return),cl(3,e)}catch(x){ze(e,e.return,x)}try{To(5,e,e.return)}catch(x){ze(e,e.return,x)}}break;case 1:rr(t,e),pr(e),s&512&&r!==null&&Si(r,r.return);break;case 5:if(rr(t,e),pr(e),s&512&&r!==null&&Si(r,r.return),e.flags&32){var i=e.stateNode;try{Uo(i,"")}catch(x){ze(e,e.return,x)}}if(s&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,n=r!==null?r.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Lf(i,o),Ic(a,n);var u=Ic(a,o);for(n=0;n<l.length;n+=2){var h=l[n],d=l[n+1];h==="style"?Df(i,d):h==="dangerouslySetInnerHTML"?Rf(i,d):h==="children"?Uo(i,d):Bu(i,h,d,u)}switch(a){case"input":Tc(i,o);break;case"textarea":Mf(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?zi(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?zi(i,!!o.multiple,o.defaultValue,!0):zi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zo]=o}catch(x){ze(e,e.return,x)}}break;case 6:if(rr(t,e),pr(e),s&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ze(e,e.return,x)}}break;case 3:if(rr(t,e),pr(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Ko(t.containerInfo)}catch(x){ze(e,e.return,x)}break;case 4:rr(t,e),pr(e);break;case 13:rr(t,e),pr(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(wd=Le())),s&4&&Qh(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(ct=(u=ct)||h,rr(t,e),ct=u):rr(t,e),pr(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(O=e,h=e.child;h!==null;){for(d=O=h;O!==null;){switch(p=O,g=p.child,p.tag){case 0:case 11:case 14:case 15:To(4,p,p.return);break;case 1:Si(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){s=p,r=p.return;try{t=s,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ze(s,r,x)}}break;case 5:Si(p,p.return);break;case 22:if(p.memoizedState!==null){Yh(d);continue}}g!==null?(g.return=p,O=g):Yh(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,n=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Of("display",n))}catch(x){ze(e,e.return,x)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ze(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:rr(t,e),pr(e),s&4&&Qh(e);break;case 21:break;default:rr(t,e),pr(e)}}function pr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(cg(r)){var s=r;break e}r=r.return}throw Error(P(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(Uo(i,""),s.flags&=-33);var o=qh(e);du(e,o,i);break;case 3:case 4:var n=s.stateNode.containerInfo,a=qh(e);uu(e,a,n);break;default:throw Error(P(161))}}catch(l){ze(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Oy(e,t,r){O=e,hg(e)}function hg(e,t,r){for(var s=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&s){var n=i.memoizedState!==null||Bn;if(!n){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ct;a=Bn;var u=ct;if(Bn=n,(ct=l)&&!u)for(O=i;O!==null;)n=O,l=n.child,n.tag===22&&n.memoizedState!==null?Zh(i):l!==null?(l.return=n,O=l):Zh(i);for(;o!==null;)O=o,hg(o),o=o.sibling;O=i,Bn=a,ct=u}Xh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Xh(e)}}function Xh(e){for(;O!==null;){var t=O;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ct||cl(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ct)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:sr(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Mh(t,o,s);break;case 3:var n=t.updateQueue;if(n!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Mh(t,n,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ko(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ct||t.flags&512&&cu(t)}catch(p){ze(t,t.return,p)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function Yh(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function Zh(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{cl(4,t)}catch(l){ze(t,r,l)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(l){ze(t,i,l)}}var o=t.return;try{cu(t)}catch(l){ze(t,o,l)}break;case 5:var n=t.return;try{cu(t)}catch(l){ze(t,n,l)}}}catch(l){ze(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Dy=Math.ceil,Ia=Vr.ReactCurrentDispatcher,yd=Vr.ReactCurrentOwner,Gt=Vr.ReactCurrentBatchConfig,re=0,Qe=null,Ie=null,tt=0,Nt=0,Ei=ys(0),Ue=0,on=null,Ws=0,ul=0,bd=0,Po=null,bt=null,wd=0,ji=1/0,Cr=null,Ra=!1,hu=null,ls=null,jn=!1,es=null,Oa=0,No=0,pu=null,ca=-1,ua=0;function ht(){return re&6?Le():ca!==-1?ca:ca=Le()}function cs(e){return e.mode&1?re&2&&tt!==0?tt&-tt:xy.transition!==null?(ua===0&&(ua=Xf()),ua):(e=ce,e!==0||(e=window.event,e=e===void 0?16:sm(e.type)),e):1}function ar(e,t,r,s){if(50<No)throw No=0,pu=null,Error(P(185));fn(e,r,s),(!(re&2)||e!==Qe)&&(e===Qe&&(!(re&2)&&(ul|=r),Ue===4&&Yr(e,tt)),kt(e,s),r===1&&re===0&&!(t.mode&1)&&(ji=Le()+500,nl&&bs()))}function kt(e,t){var r=e.callbackNode;x0(e,t);var s=wa(e,e===Qe?tt:0);if(s===0)r!==null&&ah(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&ah(r),t===1)e.tag===0?wy(Jh.bind(null,e)):_m(Jh.bind(null,e)),gy(function(){!(re&6)&&bs()}),r=null;else{switch(Yf(s)){case 1:r=Gu;break;case 4:r=qf;break;case 16:r=ba;break;case 536870912:r=Qf;break;default:r=ba}r=wg(r,pg.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function pg(e,t){if(ca=-1,ua=0,re&6)throw Error(P(327));var r=e.callbackNode;if(Li()&&e.callbackNode!==r)return null;var s=wa(e,e===Qe?tt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Da(e,s);else{t=s;var i=re;re|=2;var o=mg();(Qe!==e||tt!==t)&&(Cr=null,ji=Le()+500,Ds(e,t));do try{By();break}catch(a){fg(e,a)}while(!0);od(),Ia.current=o,re=i,Ie!==null?t=0:(Qe=null,tt=0,t=Ue)}if(t!==0){if(t===2&&(i=Fc(e),i!==0&&(s=i,t=fu(e,i))),t===1)throw r=on,Ds(e,0),Yr(e,s),kt(e,Le()),r;if(t===6)Yr(e,s);else{if(i=e.current.alternate,!(s&30)&&!Vy(i)&&(t=Da(e,s),t===2&&(o=Fc(e),o!==0&&(s=o,t=fu(e,o))),t===1))throw r=on,Ds(e,0),Yr(e,s),kt(e,Le()),r;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(P(345));case 2:Ts(e,bt,Cr);break;case 3:if(Yr(e,s),(s&130023424)===s&&(t=wd+500-Le(),10<t)){if(wa(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){ht(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qc(Ts.bind(null,e,bt,Cr),t);break}Ts(e,bt,Cr);break;case 4:if(Yr(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var n=31-nr(s);o=1<<n,n=t[n],n>i&&(i=n),s&=~o}if(s=i,s=Le()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Dy(s/1960))-s,10<s){e.timeoutHandle=qc(Ts.bind(null,e,bt,Cr),s);break}Ts(e,bt,Cr);break;case 5:Ts(e,bt,Cr);break;default:throw Error(P(329))}}}return kt(e,Le()),e.callbackNode===r?pg.bind(null,e):null}function fu(e,t){var r=Po;return e.current.memoizedState.isDehydrated&&(Ds(e,t).flags|=256),e=Da(e,t),e!==2&&(t=bt,bt=r,t!==null&&mu(t)),e}function mu(e){bt===null?bt=e:bt.push.apply(bt,e)}function Vy(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],o=i.getSnapshot;i=i.value;try{if(!lr(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yr(e,t){for(t&=~bd,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-nr(t),s=1<<r;e[r]=-1,t&=~s}}function Jh(e){if(re&6)throw Error(P(327));Li();var t=wa(e,0);if(!(t&1))return kt(e,Le()),null;var r=Da(e,t);if(e.tag!==0&&r===2){var s=Fc(e);s!==0&&(t=s,r=fu(e,s))}if(r===1)throw r=on,Ds(e,0),Yr(e,t),kt(e,Le()),r;if(r===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ts(e,bt,Cr),kt(e,Le()),null}function xd(e,t){var r=re;re|=1;try{return e(t)}finally{re=r,re===0&&(ji=Le()+500,nl&&bs())}}function Gs(e){es!==null&&es.tag===0&&!(re&6)&&Li();var t=re;re|=1;var r=Gt.transition,s=ce;try{if(Gt.transition=null,ce=1,e)return e()}finally{ce=s,Gt.transition=r,re=t,!(re&6)&&bs()}}function _d(){Nt=Ei.current,ge(Ei)}function Ds(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,my(r)),Ie!==null)for(r=Ie.return;r!==null;){var s=r;switch(rd(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Sa();break;case 3:Fi(),ge(xt),ge(ut),dd();break;case 5:ud(s);break;case 4:Fi();break;case 13:ge(ke);break;case 19:ge(ke);break;case 10:nd(s.type._context);break;case 22:case 23:_d()}r=r.return}if(Qe=e,Ie=e=us(e.current,null),tt=Nt=t,Ue=0,on=null,bd=ul=Ws=0,bt=Po=null,Ms!==null){for(t=0;t<Ms.length;t++)if(r=Ms[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,o=r.pending;if(o!==null){var n=o.next;o.next=i,s.next=n}r.pending=s}Ms=null}return e}function fg(e,t){do{var r=Ie;try{if(od(),na.current=Ma,La){for(var s=Ce.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}La=!1}if(Hs=0,qe=je=Ce=null,Ao=!1,tn=0,yd.current=null,r===null||r.return===null){Ue=1,on=t,Ie=null;break}e:{var o=e,n=r.return,a=r,l=t;if(t=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Fh(n);if(g!==null){g.flags&=-257,Bh(g,n,a,o,t),g.mode&1&&Vh(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Vh(o,u,t),kd();break e}l=Error(P(426))}}else if(ye&&a.mode&1){var C=Fh(n);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Bh(C,n,a,o,t),sd(Bi(l,a));break e}}o=l=Bi(l,a),Ue!==4&&(Ue=2),Po===null?Po=[o]:Po.push(o),o=n;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var b=Ym(o,l,t);Lh(o,b);break e;case 1:a=l;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ls===null||!ls.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Zm(o,a,t);Lh(o,w);break e}}o=o.return}while(o!==null)}vg(r)}catch(k){t=k,Ie===r&&r!==null&&(Ie=r=r.return);continue}break}while(!0)}function mg(){var e=Ia.current;return Ia.current=Ma,e===null?Ma:e}function kd(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Qe===null||!(Ws&268435455)&&!(ul&268435455)||Yr(Qe,tt)}function Da(e,t){var r=re;re|=2;var s=mg();(Qe!==e||tt!==t)&&(Cr=null,Ds(e,t));do try{Fy();break}catch(i){fg(e,i)}while(!0);if(od(),re=r,Ia.current=s,Ie!==null)throw Error(P(261));return Qe=null,tt=0,Ue}function Fy(){for(;Ie!==null;)gg(Ie)}function By(){for(;Ie!==null&&!h0();)gg(Ie)}function gg(e){var t=bg(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?vg(e):Ie=t,yd.current=null}function vg(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=My(r,t),r!==null){r.flags&=32767,Ie=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Ie=null;return}}else if(r=Ly(r,t,Nt),r!==null){Ie=r;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Ue===0&&(Ue=5)}function Ts(e,t,r){var s=ce,i=Gt.transition;try{Gt.transition=null,ce=1,jy(e,t,r,s)}finally{Gt.transition=i,ce=s}return null}function jy(e,t,r,s){do Li();while(es!==null);if(re&6)throw Error(P(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(_0(e,o),e===Qe&&(Ie=Qe=null,tt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||jn||(jn=!0,wg(ba,function(){return Li(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Gt.transition,Gt.transition=null;var n=ce;ce=1;var a=re;re|=4,yd.current=null,Ry(e,r),dg(r,e),ly(Gc),xa=!!Wc,Gc=Wc=null,e.current=r,Oy(r),p0(),re=a,ce=n,Gt.transition=o}else e.current=r;if(jn&&(jn=!1,es=e,Oa=i),o=e.pendingLanes,o===0&&(ls=null),g0(r.stateNode),kt(e,Le()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(Ra)throw Ra=!1,e=hu,hu=null,e;return Oa&1&&e.tag!==0&&Li(),o=e.pendingLanes,o&1?e===pu?No++:(No=0,pu=e):No=0,bs(),null}function Li(){if(es!==null){var e=Yf(Oa),t=Gt.transition,r=ce;try{if(Gt.transition=null,ce=16>e?16:e,es===null)var s=!1;else{if(e=es,es=null,Oa=0,re&6)throw Error(P(331));var i=re;for(re|=4,O=e.current;O!==null;){var o=O,n=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:To(8,h,o)}var d=h.child;if(d!==null)d.return=h,O=d;else for(;O!==null;){h=O;var p=h.sibling,g=h.return;if(lg(h),h===u){O=null;break}if(p!==null){p.return=g,O=p;break}O=g}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&n!==null)n.return=o,O=n;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:To(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,O=b;break e}O=o.return}}var m=e.current;for(O=m;O!==null;){n=O;var y=n.child;if(n.subtreeFlags&2064&&y!==null)y.return=n,O=y;else e:for(n=m;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(k){ze(a,a.return,k)}if(a===n){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if(re=i,bs(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(tl,e)}catch{}s=!0}return s}finally{ce=r,Gt.transition=t}}return!1}function ep(e,t,r){t=Bi(r,t),t=Ym(e,t,1),e=as(e,t,1),t=ht(),e!==null&&(fn(e,1,t),kt(e,t))}function ze(e,t,r){if(e.tag===3)ep(e,e,r);else for(;t!==null;){if(t.tag===3){ep(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ls===null||!ls.has(s))){e=Bi(r,e),e=Zm(t,e,1),t=as(t,e,1),e=ht(),t!==null&&(fn(t,1,e),kt(t,e));break}}t=t.return}}function Uy(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&r,Qe===e&&(tt&r)===r&&(Ue===4||Ue===3&&(tt&130023424)===tt&&500>Le()-wd?Ds(e,0):bd|=r),kt(e,t)}function yg(e,t){t===0&&(e.mode&1?(t=Nn,Nn<<=1,!(Nn&130023424)&&(Nn=4194304)):t=1);var r=ht();e=Or(e,t),e!==null&&(fn(e,t,r),kt(e,r))}function Hy(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),yg(e,r)}function Wy(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(P(314))}s!==null&&s.delete(t),yg(e,r)}var bg;bg=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)wt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return wt=!1,Ny(e,t,r);wt=!!(e.flags&131072)}else wt=!1,ye&&t.flags&1048576&&km(t,za,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;la(e,t),e=t.pendingProps;var i=Oi(t,ut.current);Ni(t,r),i=pd(null,t,s,e,i,r);var o=fd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(s)?(o=!0,Ea(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ld(t),i.updater=ll,t.stateNode=i,i._reactInternals=t,tu(t,s,e,r),t=iu(null,t,s,!0,o,r)):(t.tag=0,ye&&o&&td(t),dt(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch(la(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=Ky(s),e=sr(s,e),i){case 0:t=su(null,t,s,e,r);break e;case 1:t=Hh(null,t,s,e,r);break e;case 11:t=jh(null,t,s,e,r);break e;case 14:t=Uh(null,t,s,sr(s.type,e),r);break e}throw Error(P(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:sr(s,i),su(e,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:sr(s,i),Hh(e,t,s,i,r);case 3:e:{if(rg(t),e===null)throw Error(P(387));s=t.pendingProps,o=t.memoizedState,i=o.element,Am(e,t),Pa(t,s,null,r);var n=t.memoizedState;if(s=n.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Bi(Error(P(423)),t),t=Wh(e,t,s,r,i);break e}else if(s!==i){i=Bi(Error(P(424)),t),t=Wh(e,t,s,r,i);break e}else for(Lt=ns(t.stateNode.containerInfo.firstChild),It=t,ye=!0,or=null,r=$m(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Di(),s===i){t=Dr(e,t,r);break e}dt(e,t,s,r)}t=t.child}return t;case 5:return Tm(t),e===null&&Zc(t),s=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,n=i.children,Kc(s,i)?n=null:o!==null&&Kc(s,o)&&(t.flags|=32),tg(e,t),dt(e,t,n,r),t.child;case 6:return e===null&&Zc(t),null;case 13:return sg(e,t,r);case 4:return cd(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Vi(t,null,s,r):dt(e,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:sr(s,i),jh(e,t,s,i,r);case 7:return dt(e,t,t.pendingProps,r),t.child;case 8:return dt(e,t,t.pendingProps.children,r),t.child;case 12:return dt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,o=t.memoizedProps,n=i.value,pe(Aa,s._currentValue),s._currentValue=n,o!==null)if(lr(o.value,n)){if(o.children===i.children&&!xt.current){t=Dr(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){n=o.child;for(var l=a.firstContext;l!==null;){if(l.context===s){if(o.tag===1){l=Pr(-1,r&-r),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Jc(o.return,r,t),a.lanes|=r;break}l=l.next}}else if(o.tag===10)n=o.type===t.type?null:o.child;else if(o.tag===18){if(n=o.return,n===null)throw Error(P(341));n.lanes|=r,a=n.alternate,a!==null&&(a.lanes|=r),Jc(n,r,t),n=o.sibling}else n=o.child;if(n!==null)n.return=o;else for(n=o;n!==null;){if(n===t){n=null;break}if(o=n.sibling,o!==null){o.return=n.return,n=o;break}n=n.return}o=n}dt(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,Ni(t,r),i=Kt(i),s=s(i),t.flags|=1,dt(e,t,s,r),t.child;case 14:return s=t.type,i=sr(s,t.pendingProps),i=sr(s.type,i),Uh(e,t,s,i,r);case 15:return Jm(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:sr(s,i),la(e,t),t.tag=1,_t(s)?(e=!0,Ea(t)):e=!1,Ni(t,r),Xm(t,s,i),tu(t,s,i,r),iu(null,t,s,!0,e,r);case 19:return ig(e,t,r);case 22:return eg(e,t,r)}throw Error(P(156,t.tag))};function wg(e,t){return Kf(e,t)}function Gy(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,r,s){return new Gy(e,t,r,s)}function Cd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ky(e){if(typeof e=="function")return Cd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uu)return 11;if(e===Hu)return 14}return 2}function us(e,t){var r=e.alternate;return r===null?(r=Wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function da(e,t,r,s,i,o){var n=2;if(s=e,typeof e=="function")Cd(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case gi:return Vs(r.children,i,o,t);case ju:n=8,i|=8;break;case Sc:return e=Wt(12,r,t,i|2),e.elementType=Sc,e.lanes=o,e;case Ec:return e=Wt(13,r,t,i),e.elementType=Ec,e.lanes=o,e;case $c:return e=Wt(19,r,t,i),e.elementType=$c,e.lanes=o,e;case Tf:return dl(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zf:n=10;break e;case Af:n=9;break e;case Uu:n=11;break e;case Hu:n=14;break e;case qr:n=16,s=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Wt(n,r,t,i),t.elementType=e,t.type=s,t.lanes=o,t}function Vs(e,t,r,s){return e=Wt(7,e,s,t),e.lanes=r,e}function dl(e,t,r,s){return e=Wt(22,e,s,t),e.elementType=Tf,e.lanes=r,e.stateNode={isHidden:!1},e}function ec(e,t,r){return e=Wt(6,e,null,t),e.lanes=r,e}function tc(e,t,r){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qy(e,t,r,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sd(e,t,r,s,i,o,n,a,l){return e=new qy(e,t,r,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ld(o),e}function Qy(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function xg(e){if(!e)return ms;e=e._reactInternals;e:{if(ei(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var r=e.type;if(_t(r))return xm(e,r,t)}return t}function _g(e,t,r,s,i,o,n,a,l){return e=Sd(r,s,!0,e,i,o,n,a,l),e.context=xg(null),r=e.current,s=ht(),i=cs(r),o=Pr(s,i),o.callback=t??null,as(r,o,i),e.current.lanes=i,fn(e,i,s),kt(e,s),e}function hl(e,t,r,s){var i=t.current,o=ht(),n=cs(i);return r=xg(r),t.context===null?t.context=r:t.pendingContext=r,t=Pr(o,n),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=as(i,t,n),e!==null&&(ar(e,i,n,o),oa(e,i,n)),n}function Va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ed(e,t){tp(e,t),(e=e.alternate)&&tp(e,t)}function Xy(){return null}var kg=typeof reportError=="function"?reportError:function(e){console.error(e)};function $d(e){this._internalRoot=e}pl.prototype.render=$d.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));hl(e,t,null,null)};pl.prototype.unmount=$d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gs(function(){hl(null,e,null,null)}),t[Rr]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=em();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Xr.length&&t!==0&&t<Xr[r].priority;r++);Xr.splice(r,0,e),r===0&&rm(e)}};function zd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rp(){}function Yy(e,t,r,s,i){if(i){if(typeof s=="function"){var o=s;s=function(){var u=Va(n);o.call(u)}}var n=_g(t,s,e,0,null,!1,!1,"",rp);return e._reactRootContainer=n,e[Rr]=n.current,Xo(e.nodeType===8?e.parentNode:e),Gs(),n}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var a=s;s=function(){var u=Va(l);a.call(u)}}var l=Sd(e,0,!1,null,null,!1,!1,"",rp);return e._reactRootContainer=l,e[Rr]=l.current,Xo(e.nodeType===8?e.parentNode:e),Gs(function(){hl(t,l,r,s)}),l}function ml(e,t,r,s,i){var o=r._reactRootContainer;if(o){var n=o;if(typeof i=="function"){var a=i;i=function(){var l=Va(n);a.call(l)}}hl(t,n,e,i)}else n=Yy(r,t,e,i,s);return Va(n)}Zf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=_o(t.pendingLanes);r!==0&&(Ku(t,r|1),kt(t,Le()),!(re&6)&&(ji=Le()+500,bs()))}break;case 13:Gs(function(){var s=Or(e,1);if(s!==null){var i=ht();ar(s,e,1,i)}}),Ed(e,1)}};qu=function(e){if(e.tag===13){var t=Or(e,134217728);if(t!==null){var r=ht();ar(t,e,134217728,r)}Ed(e,134217728)}};Jf=function(e){if(e.tag===13){var t=cs(e),r=Or(e,t);if(r!==null){var s=ht();ar(r,e,t,s)}Ed(e,t)}};em=function(){return ce};tm=function(e,t){var r=ce;try{return ce=e,t()}finally{ce=r}};Oc=function(e,t,r){switch(t){case"input":if(Tc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var i=ol(s);if(!i)throw Error(P(90));Nf(s),Tc(s,i)}}}break;case"textarea":Mf(e,r);break;case"select":t=r.value,t!=null&&zi(e,!!r.multiple,t,!1)}};Bf=xd;jf=Gs;var Zy={usingClientEntryPoint:!1,Events:[gn,wi,ol,Vf,Ff,xd]},ho={findFiberByHostInstance:Ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jy={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wf(e),e===null?null:e.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||Xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Un=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Un.isDisabled&&Un.supportsFiber)try{tl=Un.inject(Jy),yr=Un}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;Ot.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(t))throw Error(P(200));return Qy(e,t,null,r)};Ot.createRoot=function(e,t){if(!zd(e))throw Error(P(299));var r=!1,s="",i=kg;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Sd(e,1,!1,null,null,r,!1,s,i),e[Rr]=t.current,Xo(e.nodeType===8?e.parentNode:e),new $d(t)};Ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Wf(t),e=e===null?null:e.stateNode,e};Ot.flushSync=function(e){return Gs(e)};Ot.hydrate=function(e,t,r){if(!fl(t))throw Error(P(200));return ml(null,e,t,!0,r)};Ot.hydrateRoot=function(e,t,r){if(!zd(e))throw Error(P(405));var s=r!=null&&r.hydratedSources||null,i=!1,o="",n=kg;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(n=r.onRecoverableError)),t=_g(t,null,e,1,r??null,i,!1,o,n),e[Rr]=t.current,Xo(e),s)for(e=0;e<s.length;e++)r=s[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new pl(t)};Ot.render=function(e,t,r){if(!fl(t))throw Error(P(200));return ml(null,e,t,!1,r)};Ot.unmountComponentAtNode=function(e){if(!fl(e))throw Error(P(40));return e._reactRootContainer?(Gs(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[Rr]=null})}),!0):!1};Ot.unstable_batchedUpdates=xd;Ot.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!fl(r))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ml(e,t,r,!1,s)};Ot.version="18.3.1-next-f1338f8080-20240426";function Cg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cg)}catch(e){console.error(e)}}Cg(),Cf.exports=Ot;var eb=Cf.exports;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nn(){return nn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},nn.apply(null,arguments)}var ts;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ts||(ts={}));const sp="popstate";function tb(e){e===void 0&&(e={});function t(i,o){let{pathname:n="/",search:a="",hash:l=""}=ti(i.location.hash.substr(1));return!n.startsWith("/")&&!n.startsWith(".")&&(n="/"+n),gu("",{pathname:n,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let n=i.document.querySelector("base"),a="";if(n&&n.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:Fa(o))}function s(i,o){Ad(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return sb(t,r,s,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ad(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rb(){return Math.random().toString(36).substr(2,8)}function ip(e,t){return{usr:e.state,key:e.key,idx:t}}function gu(e,t,r,s){return r===void 0&&(r=null),nn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ti(t):t,{state:r,key:t&&t.key||s||rb()})}function Fa(e){let{pathname:t="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function ti(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function sb(e,t,r,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:o=!1}=s,n=i.history,a=ts.Pop,l=null,u=h();u==null&&(u=0,n.replaceState(nn({},n.state,{idx:u}),""));function h(){return(n.state||{idx:null}).idx}function d(){a=ts.Pop;let C=h(),b=C==null?null:C-u;u=C,l&&l({action:a,location:x.location,delta:b})}function p(C,b){a=ts.Push;let m=gu(x.location,C,b);r&&r(m,C),u=h()+1;let y=ip(m,u),w=x.createHref(m);try{n.pushState(y,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}o&&l&&l({action:a,location:x.location,delta:1})}function g(C,b){a=ts.Replace;let m=gu(x.location,C,b);r&&r(m,C),u=h();let y=ip(m,u),w=x.createHref(m);n.replaceState(y,"",w),o&&l&&l({action:a,location:x.location,delta:0})}function v(C){let b=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:Fa(C);return m=m.replace(/ $/,"%20"),Te(b,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,b)}let x={get action(){return a},get location(){return e(i,n)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(sp,d),l=C,()=>{i.removeEventListener(sp,d),l=null}},createHref(C){return t(i,C)},createURL:v,encodeLocation(C){let b=v(C);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:p,replace:g,go(C){return n.go(C)}};return x}var op;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(op||(op={}));function ib(e,t,r){return r===void 0&&(r="/"),ob(e,t,r)}function ob(e,t,r,s){let i=typeof t=="string"?ti(t):t,o=Ui(i.pathname||"/",r);if(o==null)return null;let n=Sg(e);nb(n);let a=null,l=vb(o);for(let u=0;a==null&&u<n.length;++u)a=mb(n[u],l);return a}function Sg(e,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let i=(o,n,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:n,route:o};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(s),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(s.length));let u=ds([s,l.relativePath]),h=r.concat(l);o.children&&o.children.length>0&&(Te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Sg(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:pb(u,o.index),routesMeta:h})};return e.forEach((o,n)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,n);else for(let l of Eg(o.path))i(o,n,l)}),t}function Eg(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(s.length===0)return i?[o,""]:[o];let n=Eg(s.join("/")),a=[];return a.push(...n.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...n),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function nb(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:fb(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const ab=/^:[\w-]+$/,lb=3,cb=2,ub=1,db=10,hb=-2,np=e=>e==="*";function pb(e,t){let r=e.split("/"),s=r.length;return r.some(np)&&(s+=hb),t&&(s+=cb),r.filter(i=>!np(i)).reduce((i,o)=>i+(ab.test(o)?lb:o===""?ub:db),s)}function fb(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function mb(e,t,r){let{routesMeta:s}=e,i={},o="/",n=[];for(let a=0;a<s.length;++a){let l=s[a],u=a===s.length-1,h=o==="/"?t:t.slice(o.length)||"/",d=vu({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),p=l.route;if(!d)return null;Object.assign(i,d.params),n.push({params:i,pathname:ds([o,d.pathname]),pathnameBase:wb(ds([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=ds([o,d.pathnameBase]))}return n}function vu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=gb(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],n=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:s.reduce((u,h,d)=>{let{paramName:p,isOptional:g}=h;if(p==="*"){let x=a[d]||"";n=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:n,pattern:e}}function gb(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Ad(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(n,a,l)=>(s.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function vb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ad(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ui(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function yb(e,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:i=""}=typeof e=="string"?ti(e):e,o;return r?(r=Ag(r),r.startsWith("/")?o=ap(r.substring(1),"/"):o=ap(r,t)):o=t,{pathname:o,search:xb(s),hash:_b(i)}}function ap(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function rc(e,t,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bb(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function $g(e,t){let r=bb(e);return t?r.map((s,i)=>i===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function zg(e,t,r,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=ti(e):(i=nn({},e),Te(!i.pathname||!i.pathname.includes("?"),rc("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),rc("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),rc("#","search","hash",i)));let o=e===""||i.pathname==="",n=o?"/":i.pathname,a;if(n==null)a=r;else{let d=t.length-1;if(!s&&n.startsWith("..")){let p=n.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=yb(i,a),u=n&&n!=="/"&&n.endsWith("/"),h=(o||n===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const Ag=e=>e.replace(/\/\/+/g,"/"),ds=e=>Ag(e.join("/")),wb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_b=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function kb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Tg=["post","put","patch","delete"];new Set(Tg);const Cb=["get",...Tg];new Set(Cb);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function an(){return an=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},an.apply(null,arguments)}const gl=E.createContext(null),Pg=E.createContext(null),ws=E.createContext(null),vl=E.createContext(null),xs=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Ng=E.createContext(null);function Sb(e,t){let{relative:r}=t===void 0?{}:t;yn()||Te(!1);let{basename:s,navigator:i}=E.useContext(ws),{hash:o,pathname:n,search:a}=yl(e,{relative:r}),l=n;return s!=="/"&&(l=n==="/"?s:ds([s,n])),i.createHref({pathname:l,search:a,hash:o})}function yn(){return E.useContext(vl)!=null}function Qi(){return yn()||Te(!1),E.useContext(vl).location}function Lg(e){E.useContext(ws).static||E.useLayoutEffect(e)}function Eb(){let{isDataRoute:e}=E.useContext(xs);return e?Bb():$b()}function $b(){yn()||Te(!1);let e=E.useContext(gl),{basename:t,future:r,navigator:s}=E.useContext(ws),{matches:i}=E.useContext(xs),{pathname:o}=Qi(),n=JSON.stringify($g(i,r.v7_relativeSplatPath)),a=E.useRef(!1);return Lg(()=>{a.current=!0}),E.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){s.go(u);return}let d=zg(u,JSON.parse(n),o,h.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ds([t,d.pathname])),(h.replace?s.replace:s.push)(d,h.state,h)},[t,s,n,o,e])}const zb=E.createContext(null);function Ab(e){let t=E.useContext(xs).outlet;return t&&E.createElement(zb.Provider,{value:e},t)}function yl(e,t){let{relative:r}=t===void 0?{}:t,{future:s}=E.useContext(ws),{matches:i}=E.useContext(xs),{pathname:o}=Qi(),n=JSON.stringify($g(i,s.v7_relativeSplatPath));return E.useMemo(()=>zg(e,JSON.parse(n),o,r==="path"),[e,n,o,r])}function Tb(e,t){return Pb(e,t)}function Pb(e,t,r,s){yn()||Te(!1);let{navigator:i}=E.useContext(ws),{matches:o}=E.useContext(xs),n=o[o.length-1],a=n?n.params:{};n&&n.pathname;let l=n?n.pathnameBase:"/";n&&n.route;let u=Qi(),h;if(t){var d;let C=typeof t=="string"?ti(t):t;l==="/"||(d=C.pathname)!=null&&d.startsWith(l)||Te(!1),h=C}else h=u;let p=h.pathname||"/",g=p;if(l!=="/"){let C=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=ib(e,{pathname:g}),x=Rb(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:ds([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:ds([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,r,s);return t&&x?E.createElement(vl.Provider,{value:{location:an({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ts.Pop}},x):x}function Nb(){let e=Fb(),t=kb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),r?E.createElement("pre",{style:i},r):null,null)}const Lb=E.createElement(Nb,null);class Mb extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?E.createElement(xs.Provider,{value:this.props.routeContext},E.createElement(Ng.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ib(e){let{routeContext:t,match:r,children:s}=e,i=E.useContext(gl);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),E.createElement(xs.Provider,{value:t},s)}function Rb(e,t,r,s){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=s)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,a=(i=r)==null?void 0:i.errors;if(a!=null){let h=n.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||Te(!1),n=n.slice(0,Math.min(n.length,h+1))}let l=!1,u=-1;if(r&&s&&s.v7_partialHydration)for(let h=0;h<n.length;h++){let d=n[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:p,errors:g}=r,v=d.route.loader&&p[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?n=n.slice(0,u+1):n=[n[0]];break}}}return n.reduceRight((h,d,p)=>{let g,v=!1,x=null,C=null;r&&(g=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||Lb,l&&(u<0&&p===0?(jb("route-fallback"),v=!0,C=null):u===p&&(v=!0,C=d.route.hydrateFallbackElement||null)));let b=t.concat(n.slice(0,p+1)),m=()=>{let y;return g?y=x:v?y=C:d.route.Component?y=E.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=h,E.createElement(Ib,{match:d,routeContext:{outlet:h,matches:b,isDataRoute:r!=null},children:y})};return r&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?E.createElement(Mb,{location:r.location,revalidation:r.revalidation,component:x,error:g,children:m(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):m()},null)}var Mg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Mg||{}),Ig=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ig||{});function Ob(e){let t=E.useContext(gl);return t||Te(!1),t}function Db(e){let t=E.useContext(Pg);return t||Te(!1),t}function Vb(e){let t=E.useContext(xs);return t||Te(!1),t}function Rg(e){let t=Vb(),r=t.matches[t.matches.length-1];return r.route.id||Te(!1),r.route.id}function Fb(){var e;let t=E.useContext(Ng),r=Db(),s=Rg();return t!==void 0?t:(e=r.errors)==null?void 0:e[s]}function Bb(){let{router:e}=Ob(Mg.UseNavigateStable),t=Rg(Ig.UseNavigateStable),r=E.useRef(!1);return Lg(()=>{r.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,an({fromRouteId:t},o)))},[e,t])}const lp={};function jb(e,t,r){lp[e]||(lp[e]=!0)}function Ub(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hb(e){return Ab(e.context)}function hi(e){Te(!1)}function Wb(e){let{basename:t="/",children:r=null,location:s,navigationType:i=ts.Pop,navigator:o,static:n=!1,future:a}=e;yn()&&Te(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:o,static:n,future:an({v7_relativeSplatPath:!1},a)}),[l,a,o,n]);typeof s=="string"&&(s=ti(s));let{pathname:h="/",search:d="",hash:p="",state:g=null,key:v="default"}=s,x=E.useMemo(()=>{let C=Ui(h,l);return C==null?null:{location:{pathname:C,search:d,hash:p,state:g,key:v},navigationType:i}},[l,h,d,p,g,v,i]);return x==null?null:E.createElement(ws.Provider,{value:u},E.createElement(vl.Provider,{children:r,value:x}))}function Gb(e){let{children:t,location:r}=e;return Tb(yu(t),r)}new Promise(()=>{});function yu(e,t){t===void 0&&(t=[]);let r=[];return E.Children.forEach(e,(s,i)=>{if(!E.isValidElement(s))return;let o=[...t,i];if(s.type===E.Fragment){r.push.apply(r,yu(s.props.children,o));return}s.type!==hi&&Te(!1),!s.props.index||!s.props.children||Te(!1);let n={id:s.props.id||o.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(n.children=yu(s.props.children,o)),r.push(n)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Ba.apply(null,arguments)}function Og(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Kb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qb(e,t){return e.button===0&&(!t||t==="_self")&&!Kb(e)}const Qb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Xb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Yb="6";try{window.__reactRouterVersion=Yb}catch{}const Zb=E.createContext({isTransitioning:!1}),Jb="startTransition",cp=F[Jb];function e1(e){let{basename:t,children:r,future:s,window:i}=e,o=E.useRef();o.current==null&&(o.current=tb({window:i,v5Compat:!0}));let n=o.current,[a,l]=E.useState({action:n.action,location:n.location}),{v7_startTransition:u}=s||{},h=E.useCallback(d=>{u&&cp?cp(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>n.listen(h),[n,h]),E.useEffect(()=>Ub(s),[s]),E.createElement(Wb,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:n,future:s})}const t1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",r1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dg=E.forwardRef(function(t,r){let{onClick:s,relative:i,reloadDocument:o,replace:n,state:a,target:l,to:u,preventScrollReset:h,viewTransition:d}=t,p=Og(t,Qb),{basename:g}=E.useContext(ws),v,x=!1;if(typeof u=="string"&&r1.test(u)&&(v=u,t1))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),k=Ui(w.pathname,g);w.origin===y.origin&&k!=null?u=k+w.search+w.hash:x=!0}catch{}let C=Sb(u,{relative:i}),b=o1(u,{replace:n,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d});function m(y){s&&s(y),y.defaultPrevented||b(y)}return E.createElement("a",Ba({},p,{href:v||C,onClick:x||o?s:m,ref:r,target:l}))}),s1=E.forwardRef(function(t,r){let{"aria-current":s="page",caseSensitive:i=!1,className:o="",end:n=!1,style:a,to:l,viewTransition:u,children:h}=t,d=Og(t,Xb),p=yl(l,{relative:d.relative}),g=Qi(),v=E.useContext(Pg),{navigator:x,basename:C}=E.useContext(ws),b=v!=null&&n1(p)&&u===!0,m=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,y=g.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),w=w?w.toLowerCase():null,m=m.toLowerCase()),w&&C&&(w=Ui(w,C)||w);const k=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let S=y===m||!n&&y.startsWith(m)&&y.charAt(k)==="/",$=w!=null&&(w===m||!n&&w.startsWith(m)&&w.charAt(m.length)==="/"),T={isActive:S,isPending:$,isTransitioning:b},M=S?s:void 0,z;typeof o=="function"?z=o(T):z=[o,S?"active":null,$?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let ee=typeof a=="function"?a(T):a;return E.createElement(Dg,Ba({},d,{"aria-current":M,className:z,ref:r,style:ee,to:l,viewTransition:u}),typeof h=="function"?h(T):h)});var bu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bu||(bu={}));var up;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(up||(up={}));function i1(e){let t=E.useContext(gl);return t||Te(!1),t}function o1(e,t){let{target:r,replace:s,state:i,preventScrollReset:o,relative:n,viewTransition:a}=t===void 0?{}:t,l=Eb(),u=Qi(),h=yl(e,{relative:n});return E.useCallback(d=>{if(qb(d,r)){d.preventDefault();let p=s!==void 0?s:Fa(u)===Fa(h);l(e,{replace:p,state:i,preventScrollReset:o,relative:n,viewTransition:a})}},[u,l,h,s,i,r,e,o,n,a])}function n1(e,t){t===void 0&&(t={});let r=E.useContext(Zb);r==null&&Te(!1);let{basename:s}=i1(bu.useViewTransitionState),i=yl(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Ui(r.currentLocation.pathname,s)||r.currentLocation.pathname,n=Ui(r.nextLocation.pathname,s)||r.nextLocation.pathname;return vu(i.pathname,n)!=null||vu(i.pathname,o)!=null}var a1={},l1=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function c1(e){return typeof e=="string"&&l1.test(e)}const Je=[];for(let e=0;e<256;++e)Je.push((e+256).toString(16).slice(1));function u1(e,t=0){return(Je[e[t+0]]+Je[e[t+1]]+Je[e[t+2]]+Je[e[t+3]]+"-"+Je[e[t+4]]+Je[e[t+5]]+"-"+Je[e[t+6]]+Je[e[t+7]]+"-"+Je[e[t+8]]+Je[e[t+9]]+"-"+Je[e[t+10]]+Je[e[t+11]]+Je[e[t+12]]+Je[e[t+13]]+Je[e[t+14]]+Je[e[t+15]]).toLowerCase()}let sc;const d1=new Uint8Array(16);function h1(){if(!sc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");sc=crypto.getRandomValues.bind(crypto)}return sc(d1)}const p1=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var dp={randomUUID:p1};function f1(e,t,r){var i;e=e||{};const s=e.random??((i=e.rng)==null?void 0:i.call(e))??h1();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,u1(s)}function hp(e,t,r){return dp.randomUUID&&!e?dp.randomUUID():f1(e)}const pp="current";function _e(e){if(!e.isConnected)throw new Error("You cannot call this API before having established a connection to the host!")}function m1(e){var t,r;return!!((r=(t=e==null?void 0:e.data)==null?void 0:t.meta)!=null&&r.messageId)}const g1=5e3,v1=3e4,y1=5e3;function b1(e){return typeof e!="string"||!c1(e)?null:e}function w1(e){return e.type==="connect"?g1:e.type==="api"?v1:e.type==="navigateTo"?y1:null}class x1{constructor({onDataUpdate:t,onBroadcast:r,onLivereload:s}={}){W(this,"onDataUpdate");W(this,"onBroadcast");W(this,"onLivereload");W(this,"pendingMessages",new Map);W(this,"targetOrigin","*");W(this,"handleMessageWrapper",t=>this.handleMessage(t));W(this,"handleMessage",t=>{var n,a,l;if(!m1(t))return;const{message:r}=t.data;if(r.type==="data"){(n=this.onDataUpdate)==null||n.call(this,r);return}if(r.type==="broadcast"){(a=this.onBroadcast)==null||a.call(this,r);return}if(r.type==="livereload"){(l=this.onLivereload)==null||l.call(this,r);return}const{messageId:s}=t.data.meta,i=b1(s);if(!i){this.throwError("Received message with invalid messageId format");return}const o=this.pendingMessages.get(i);if(!o||typeof o!="function"){this.throwError("Received unexpected message");return}this.pendingMessages.delete(i),o(r.payload)});this.onDataUpdate=t,this.onBroadcast=r,this.onLivereload=s,window.addEventListener("message",this.handleMessageWrapper)}destroy(){window.removeEventListener("message",this.handleMessageWrapper)}setOrigin(t){this.targetOrigin=t}sendUnidirectionalMessage(t){const r=hp(),s={message:t,meta:{messageId:r,version:pp}};window.parent.postMessage(s,this.targetOrigin)}async postMessage(t){return new Promise((r,s)=>{const i=hp();let o;const n=w1(t);n!==null&&(o=setTimeout(()=>{s(new Error(`Waiting for response from foundry host for "${t.type}" message (ID: ${i}) timed out after ${n}ms`))},n)),this.pendingMessages.set(i,l=>{o&&clearTimeout(o),r(l)});const a={message:t,meta:{messageId:i,version:pp}};window.parent.postMessage(a,this.targetOrigin)})}throwError(t){throw new Error(t)}}function Oe(e,t,r,s){var i=arguments.length,o=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,r):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,r,o):n(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}const Kr=new WeakMap,Ps=new WeakMap,$r=new WeakMap,ja=Symbol("anyProducer"),fp=Promise.resolve(),Ua=Symbol("listenerAdded"),Ha=Symbol("listenerRemoved");let Wa=!1,ic=!1;const Ga=e=>typeof e=="string"||typeof e=="symbol"||typeof e=="number";function ui(e){if(!Ga(e))throw new TypeError("`eventName` must be a string, symbol, or number")}function Hn(e){if(typeof e!="function")throw new TypeError("listener must be a function")}function di(e,t){const r=Ps.get(e);if(r.has(t))return r.get(t)}function Lo(e,t){const r=Ga(t)?t:ja,s=$r.get(e);if(s.has(r))return s.get(r)}function _1(e,t,r){const s=$r.get(e);if(s.has(t))for(const i of s.get(t))i.enqueue(r);if(s.has(ja)){const i=Promise.all([t,r]);for(const o of s.get(ja))o.enqueue(i)}}function mp(e,t){t=Array.isArray(t)?t:[t];let r=!1,s=()=>{},i=[];const o={enqueue(n){i.push(n),s()},finish(){r=!0,s()}};for(const n of t){let a=Lo(e,n);a||(a=new Set,$r.get(e).set(n,a)),a.add(o)}return{async next(){return i?i.length===0?r?(i=void 0,this.next()):(await new Promise(n=>{s=n}),this.next()):{done:!1,value:await i.shift()}:{done:!0}},async return(n){i=void 0;for(const a of t){const l=Lo(e,a);l&&(l.delete(o),l.size===0&&$r.get(e).delete(a))}return s(),arguments.length>0?{done:!0,value:await n}:{done:!0}},[Symbol.asyncIterator](){return this}}}function gp(e){if(e===void 0)return vp;if(!Array.isArray(e))throw new TypeError("`methodNames` must be an array of strings");for(const t of e)if(!vp.includes(t))throw typeof t!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${t} is not Emittery method`);return e}const pi=e=>e===Ua||e===Ha;function Wn(e,t,r){if(pi(t))try{Wa=!0,e.emit(t,r)}finally{Wa=!1}}class Ks{static mixin(t,r){return r=gp(r),s=>{if(typeof s!="function")throw new TypeError("`target` must be function");for(const n of r)if(s.prototype[n]!==void 0)throw new Error(`The property \`${n}\` already exists on \`target\``);function i(){return Object.defineProperty(this,t,{enumerable:!1,value:new Ks}),this[t]}Object.defineProperty(s.prototype,t,{enumerable:!1,get:i});const o=n=>function(...a){return this[t][n](...a)};for(const n of r)Object.defineProperty(s.prototype,n,{enumerable:!1,value:o(n)});return s}}static get isDebugEnabled(){if(typeof a1!="object")return ic;const{env:t}=globalThis.process??{env:{}};return t.DEBUG==="emittery"||t.DEBUG==="*"||ic}static set isDebugEnabled(t){ic=t}constructor(t={}){Kr.set(this,new Set),Ps.set(this,new Map),$r.set(this,new Map),$r.get(this).set(ja,new Set),this.debug=t.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(r,s,i,o)=>{try{o=JSON.stringify(o)}catch{o=`Object with the following keys failed to stringify: ${Object.keys(o).join(",")}`}(typeof i=="symbol"||typeof i=="number")&&(i=i.toString());const n=new Date,a=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}.${n.getMilliseconds()}`;console.log(`[${a}][emittery:${r}][${s}] Event Name: ${i}
	data: ${o}`)})}logIfDebugEnabled(t,r,s){(Ks.isDebugEnabled||this.debug.enabled)&&this.debug.logger(t,this.debug.name,r,s)}on(t,r,{signal:s}={}){Hn(r),t=Array.isArray(t)?t:[t];for(const o of t){ui(o);let n=di(this,o);n||(n=new Set,Ps.get(this).set(o,n)),n.add(r),this.logIfDebugEnabled("subscribe",o,void 0),pi(o)||Wn(this,Ua,{eventName:o,listener:r})}const i=()=>{this.off(t,r),s==null||s.removeEventListener("abort",i)};return s==null||s.addEventListener("abort",i,{once:!0}),s!=null&&s.aborted&&i(),i}off(t,r){Hn(r),t=Array.isArray(t)?t:[t];for(const s of t){ui(s);const i=di(this,s);i&&(i.delete(r),i.size===0&&Ps.get(this).delete(s)),this.logIfDebugEnabled("unsubscribe",s,void 0),pi(s)||Wn(this,Ha,{eventName:s,listener:r})}}once(t,r){if(r!==void 0&&typeof r!="function")throw new TypeError("predicate must be a function");let s;const i=new Promise(o=>{s=this.on(t,n=>{r&&!r(n)||(s(),o(n))})});return i.off=s,i}events(t){t=Array.isArray(t)?t:[t];for(const r of t)ui(r);return mp(this,t)}async emit(t,r){if(ui(t),pi(t)&&!Wa)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emit",t,r),_1(this,t,r);const s=di(this,t)??new Set,i=Kr.get(this),o=[...s],n=pi(t)?[]:[...i];await fp,await Promise.all([...o.map(async a=>{if(s.has(a))return a(r)}),...n.map(async a=>{if(i.has(a))return a(t,r)})])}async emitSerial(t,r){if(ui(t),pi(t)&&!Wa)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emitSerial",t,r);const s=di(this,t)??new Set,i=Kr.get(this),o=[...s],n=[...i];await fp;for(const a of o)s.has(a)&&await a(r);for(const a of n)i.has(a)&&await a(t,r)}onAny(t,{signal:r}={}){Hn(t),this.logIfDebugEnabled("subscribeAny",void 0,void 0),Kr.get(this).add(t),Wn(this,Ua,{listener:t});const s=()=>{this.offAny(t),r==null||r.removeEventListener("abort",s)};return r==null||r.addEventListener("abort",s,{once:!0}),r!=null&&r.aborted&&s(),s}anyEvent(){return mp(this)}offAny(t){Hn(t),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),Wn(this,Ha,{listener:t}),Kr.get(this).delete(t)}clearListeners(t){t=Array.isArray(t)?t:[t];for(const r of t)if(this.logIfDebugEnabled("clear",r,void 0),Ga(r)){const s=di(this,r);s&&s.clear();const i=Lo(this,r);if(i){for(const o of i)o.finish();i.clear()}}else{Kr.get(this).clear();for(const[s,i]of Ps.get(this).entries())i.clear(),Ps.get(this).delete(s);for(const[s,i]of $r.get(this).entries()){for(const o of i)o.finish();i.clear(),$r.get(this).delete(s)}}}listenerCount(t){var s,i,o;t=Array.isArray(t)?t:[t];let r=0;for(const n of t){if(Ga(n)){r+=Kr.get(this).size+(((s=di(this,n))==null?void 0:s.size)??0)+(((i=Lo(this,n))==null?void 0:i.size)??0)+(((o=Lo(this))==null?void 0:o.size)??0);continue}n!==void 0&&ui(n),r+=Kr.get(this).size;for(const a of Ps.get(this).values())r+=a.size;for(const a of $r.get(this).values())r+=a.size}return r}bindMethods(t,r){if(typeof t!="object"||t===null)throw new TypeError("`target` must be an object");r=gp(r);for(const s of r){if(t[s]!==void 0)throw new Error(`The property \`${s}\` already exists on \`target\``);Object.defineProperty(t,s,{enumerable:!1,value:this[s].bind(this)})}}}const vp=Object.getOwnPropertyNames(Ks.prototype).filter(e=>e!=="constructor");Object.defineProperty(Ks,"listenerAdded",{value:Ua,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(Ks,"listenerRemoved",{value:Ha,writable:!1,enumerable:!0,configurable:!1});function De(e){let t,r,s;return t=e,(i,o,n)=>{if(n.value!=null)n.value=yp(n.value,t,r,s);else if(n.get!=null)n.get=yp(n.get,t,r,s);else throw"Only put a Memoize() decorator on a method or get accessor."}}const oc=new Map;function yp(e,t,r=0,s){const i=Symbol("__memoized_map__");return function(...o){let n;this.hasOwnProperty(i)||Object.defineProperty(this,i,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[i];if(Array.isArray(s))for(const l of s)oc.has(l)?oc.get(l).push(a):oc.set(l,[a]);if(t||o.length>0||r>0){let l;t===!0?l=o.map(d=>d.toString()).join("!"):t?l=t.apply(this,o):l=o[0];const u=`${l}__timestamp`;let h=!1;if(r>0)if(!a.has(u))h=!0;else{let d=a.get(u);h=Date.now()-d>r}a.has(l)&&!h?n=a.get(l):(n=e.apply(this,o),a.set(l,n),r>0&&a.set(u,Date.now()))}else{const l=this;a.has(l)?n=a.get(l):(n=e.apply(this,o),a.set(l,n))}return n}}class k1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesSuppressedDevicesV1(t={}){const r={type:"api",api:"alerts",method:"deleteEntitiesSuppressedDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesAlertsV1(t={}){console.warn("This method is deprecated. Use getQueriesAlertsV2 instead.");const r={type:"api",api:"alerts",method:"getQueriesAlertsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesAlertsV2(t={}){const r={type:"api",api:"alerts",method:"getQueriesAlertsV2",payload:{params:t}};return this.bridge.postMessage(r)}async patchCombinedAlertsV2(t,r={}){console.warn("This method is deprecated. Use patchCombinedAlertsV3 instead.");const s={type:"api",api:"alerts",method:"patchCombinedAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchCombinedAlertsV3(t,r={}){const s={type:"api",api:"alerts",method:"patchCombinedAlertsV3",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesAlertsV2(t,r={}){console.warn("This method is deprecated. Use patchEntitiesAlertsV3 instead.");const s={type:"api",api:"alerts",method:"patchEntitiesAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesAlertsV3(t,r={}){const s={type:"api",api:"alerts",method:"patchEntitiesAlertsV3",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesSuppressedDevicesV1(t,r={}){const s={type:"api",api:"alerts",method:"patchEntitiesSuppressedDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesAlertsV1(t,r={}){console.warn("This method is deprecated. Use postAggregatesAlertsV2 instead.");const s={type:"api",api:"alerts",method:"postAggregatesAlertsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesAlertsV2(t,r={}){const s={type:"api",api:"alerts",method:"postAggregatesAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesAlertsV1(t,r={}){console.warn("This method is deprecated. Use postEntitiesAlertsV2 instead.");const s={type:"api",api:"alerts",method:"postEntitiesAlertsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesAlertsV2(t,r={}){const s={type:"api",api:"alerts",method:"postEntitiesAlertsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesSuppressedDevicesV1(t,r={}){const s={type:"api",api:"alerts",method:"postEntitiesSuppressedDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class C1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getAggregatesResourcesCountByManagedByV1(t={}){const r={type:"api",api:"cloudSecurityAssets",method:"getAggregatesResourcesCountByManagedByV1",payload:{params:t}};return this.bridge.postMessage(r)}}class S1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getCloudSecurityRegistrationAwsCombinedAccountsV1(t={}){const r={type:"api",api:"cloudregistration",method:"getCloudSecurityRegistrationAwsCombinedAccountsV1",payload:{params:t}};return this.bridge.postMessage(r)}}class E1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getAggregatesClustersCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesClustersCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesContainersCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesContainersCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesContainersGroupByManagedV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesContainersGroupByManagedV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesContainersSensorCoverageV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesContainersSensorCoverageV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesImagesCountByStateV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesImagesCountByStateV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesNodesCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesNodesCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesPodsCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesPodsCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesUnidentifiedContainersCountV1(t={}){const r={type:"api",api:"containerSecurity",method:"getAggregatesUnidentifiedContainersCountV1",payload:{params:t}};return this.bridge.postMessage(r)}async getCombinedClustersV1(t={}){const r={type:"api",api:"containerSecurity",method:"getCombinedClustersV1",payload:{params:t}};return this.bridge.postMessage(r)}}class $1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1(t={}){const r={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1(t={}){const r={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1",payload:{params:t}};return this.bridge.postMessage(r)}}class z1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteV1CollectionsCollectionNameObjectsObjectKey(t={}){const r={type:"api",api:"customobjects",method:"deleteV1CollectionsCollectionNameObjectsObjectKey",payload:{params:t}};return this.bridge.postMessage(r)}async getV1Collections(t={}){const r={type:"api",api:"customobjects",method:"getV1Collections",payload:{params:t}};return this.bridge.postMessage(r)}async getV1CollectionsCollectionNameObjects(t={}){const r={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjects",payload:{params:t}};return this.bridge.postMessage(r)}async getV1CollectionsCollectionNameObjectsObjectKey(t={}){const r={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKey",payload:{params:t}};return this.bridge.postMessage(r)}async getV1CollectionsCollectionNameObjectsObjectKeyMetadata(t={}){const r={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKeyMetadata",payload:{params:t}};return this.bridge.postMessage(r)}async postV1CollectionsCollectionNameObjects(t,r={}){const s={type:"api",api:"customobjects",method:"postV1CollectionsCollectionNameObjects",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async putV1CollectionsCollectionNameObjectsObjectKey(t,r={}){const s={type:"api",api:"customobjects",method:"putV1CollectionsCollectionNameObjectsObjectKey",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class A1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesSuppressedDevicesV1(t={}){const r={type:"api",api:"detects",method:"getEntitiesSuppressedDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async patchEntitiesDetectsV2(t,r={}){const s={type:"api",api:"detects",method:"patchEntitiesDetectsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchQueriesDetectsV1(t,r={}){const s={type:"api",api:"detects",method:"patchQueriesDetectsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchQueriesDetectsV2(t,r={}){const s={type:"api",api:"detects",method:"patchQueriesDetectsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesDetectsGetV1(t,r={}){const s={type:"api",api:"detects",method:"postAggregatesDetectsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesSummariesGetV1(t,r={}){const s={type:"api",api:"detects",method:"postEntitiesSummariesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesSuppressedDevicesV1(t,r={}){const s={type:"api",api:"detects",method:"postEntitiesSuppressedDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class T1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesGroupsV1(t){const r={type:"api",api:"devices",method:"deleteEntitiesGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesBucketsV1(t){const r={type:"api",api:"devices",method:"getAggregatesBucketsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesFgaTagPrefixCountsV1(t){const r={type:"api",api:"devices",method:"getAggregatesFgaTagPrefixCountsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getAggregatesTagPrefixCountsV1(t){const r={type:"api",api:"devices",method:"getAggregatesTagPrefixCountsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesDevicesV1(t){const r={type:"api",api:"devices",method:"getEntitiesDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesFgaGroupsV1(t){const r={type:"api",api:"devices",method:"getEntitiesFgaGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesGroupsV1(t){const r={type:"api",api:"devices",method:"getEntitiesGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesAvailableGroupsV1(t={}){const r={type:"api",api:"devices",method:"getQueriesAvailableGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesDevicesHiddenV2(t={}){const r={type:"api",api:"devices",method:"getQueriesDevicesHiddenV2",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesDevicesV1(t={}){const r={type:"api",api:"devices",method:"getQueriesDevicesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesDevicesV2(t={}){const r={type:"api",api:"devices",method:"getQueriesDevicesV2",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesFgaGroupsV1(t={}){const r={type:"api",api:"devices",method:"getQueriesFgaGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesGroupsV1(t={}){const r={type:"api",api:"devices",method:"getQueriesGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async patchEntitiesDevicesTagsV2(t,r={}){const s={type:"api",api:"devices",method:"patchEntitiesDevicesTagsV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesDevicesV1(t,r){const s={type:"api",api:"devices",method:"patchEntitiesDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesGroupsV1(t,r={}){const s={type:"api",api:"devices",method:"patchEntitiesGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesDevicesGetV1(t,r={}){const s={type:"api",api:"devices",method:"postAggregatesDevicesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesFgaHostsGetV1(t,r={}){const s={type:"api",api:"devices",method:"postAggregatesFgaHostsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postCombinedDevicesLoginHistoryV1(t,r={}){const s={type:"api",api:"devices",method:"postCombinedDevicesLoginHistoryV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postCombinedFgaHostsLoginHistoryV1(t,r={}){const s={type:"api",api:"devices",method:"postCombinedFgaHostsLoginHistoryV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesActionsV4(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesActionsV4",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesHiddenActionsV4(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesHiddenActionsV4",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesReportsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesReportsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesV1(t,r){const s={type:"api",api:"devices",method:"postEntitiesDevicesV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesDevicesV2(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesDevicesV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesFgaHostsReportsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesFgaHostsReportsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesFgaHostsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesFgaHostsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesGroupActionsV1(t,r){const s={type:"api",api:"devices",method:"postEntitiesGroupActionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesGroupsV1(t,r={}){const s={type:"api",api:"devices",method:"postEntitiesGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class P1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesExecutionV1(t){const r={type:"api",api:"faasGateway",method:"getEntitiesExecutionV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesExecutionV1(t,r={}){const s={type:"api",api:"faasGateway",method:"postEntitiesExecutionV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class N1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesNetworkLocationsV1(t){const r={type:"api",api:"fwmgr",method:"deleteEntitiesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(r)}async deleteEntitiesPoliciesV1(t){const r={type:"api",api:"fwmgr",method:"deleteEntitiesPoliciesV1",payload:{params:t}};return this.bridge.postMessage(r)}async deleteEntitiesRuleGroupsV1(t){const r={type:"api",api:"fwmgr",method:"deleteEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesEventsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesEventsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesFirewallFieldsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesFirewallFieldsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesNetworkLocationsDetailsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsDetailsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesNetworkLocationsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesPlatformsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesPlatformsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesPoliciesV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesPoliciesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesRuleGroupsV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesRulesV1(t){const r={type:"api",api:"fwmgr",method:"getEntitiesRulesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getLibraryEntitiesRuleGroupsV1(t){const r={type:"api",api:"fwmgr",method:"getLibraryEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getLibraryQueriesRuleGroupsV1(t={}){const r={type:"api",api:"fwmgr",method:"getLibraryQueriesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesEventsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesEventsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesFirewallFieldsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesFirewallFieldsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesNetworkLocationsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesPlatformsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesPlatformsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesPolicyRulesV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesPolicyRulesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesRuleGroupsV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesRulesV1(t={}){const r={type:"api",api:"fwmgr",method:"getQueriesRulesV1",payload:{params:t}};return this.bridge.postMessage(r)}async patchEntitiesNetworkLocationsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"patchEntitiesNetworkLocationsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async patchEntitiesRuleGroupsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"patchEntitiesRuleGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesEventsGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesEventsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesPolicyRulesGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesPolicyRulesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesRuleGroupsGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesRuleGroupsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesRulesGetV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postAggregatesRulesGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesNetworkLocationsMetadataV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsMetadataV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesNetworkLocationsPrecedenceV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsPrecedenceV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesNetworkLocationsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesOntologyV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesOntologyV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesRuleGroupsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesRuleGroupsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesRulesValidateFilepathV1(t,r={}){const s={type:"api",api:"fwmgr",method:"postEntitiesRulesValidateFilepathV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async putEntitiesNetworkLocationsV1(t,r={}){const s={type:"api",api:"fwmgr",method:"putEntitiesNetworkLocationsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async putEntitiesPoliciesV2(t,r={}){const s={type:"api",api:"fwmgr",method:"putEntitiesPoliciesV2",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class L1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getCombinedCrowdscoresV1(t={}){const r={type:"api",api:"incidents",method:"getCombinedCrowdscoresV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesBehaviorsV1(t={}){const r={type:"api",api:"incidents",method:"getQueriesBehaviorsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesIncidentsV1(t={}){const r={type:"api",api:"incidents",method:"getQueriesIncidentsV1",payload:{params:t}};return this.bridge.postMessage(r)}async postAggregatesBehaviorsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postAggregatesBehaviorsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postAggregatesIncidentsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postAggregatesIncidentsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesBehaviorsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postEntitiesBehaviorsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesIncidentActionsV1(t,r={}){const s={type:"api",api:"incidents",method:"postEntitiesIncidentActionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesIncidentsGetV1(t,r={}){const s={type:"api",api:"incidents",method:"postEntitiesIncidentsGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class M1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesSavedSearchesExecuteV1(t){const r={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesExecuteV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesSavedSearchesV1(t){const r={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesSavedSearchesExecuteV1(t,r={}){const s={type:"api",api:"loggingapi",method:"postEntitiesSavedSearchesExecuteV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class I1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getIntelMitreEntitiesMatrixV1(t={}){const r={type:"api",api:"mitre",method:"getIntelMitreEntitiesMatrixV1",payload:{params:t}};return this.bridge.postMessage(r)}}class R1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesConfigsV1(t={}){const r={type:"api",api:"plugins",method:"getEntitiesConfigsV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesDefinitionsV1(t){const r={type:"api",api:"plugins",method:"getEntitiesDefinitionsV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesExecuteDraftV1(t,r={}){const s={type:"api",api:"plugins",method:"postEntitiesExecuteDraftV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesExecuteV1(t,r={}){const s={type:"api",api:"plugins",method:"postEntitiesExecuteV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class O1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getAggregatesRegistriesCountByStateV1(t={}){const r={type:"api",api:"registryAssessment",method:"getAggregatesRegistriesCountByStateV1",payload:{params:t}};return this.bridge.postMessage(r)}}class D1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesPutFilesV1(t){const r={type:"api",api:"remoteResponse",method:"deleteEntitiesPutFilesV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesAppCommandV1(t){const r={type:"api",api:"remoteResponse",method:"getEntitiesAppCommandV1",payload:{params:t}};return this.bridge.postMessage(r)}async getEntitiesPutFilesV2(t){const r={type:"api",api:"remoteResponse",method:"getEntitiesPutFilesV2",payload:{params:t}};return this.bridge.postMessage(r)}async getQueriesPutFilesV1(t={}){const r={type:"api",api:"remoteResponse",method:"getQueriesPutFilesV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesAppCommandV1(t,r={}){const s={type:"api",api:"remoteResponse",method:"postEntitiesAppCommandV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesAppSessionsV1(t,r={}){const s={type:"api",api:"remoteResponse",method:"postEntitiesAppSessionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class V1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getQueriesUsersV1(t={}){const r={type:"api",api:"userManagement",method:"getQueriesUsersV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesUsersGetV1(t,r={}){const s={type:"api",api:"userManagement",method:"postEntitiesUsersGetV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class F1{constructor(t){W(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesExecutionResultsV1(t){const r={type:"api",api:"workflows",method:"getEntitiesExecutionResultsV1",payload:{params:t}};return this.bridge.postMessage(r)}async postEntitiesExecuteV1(t,r={}){const s={type:"api",api:"workflows",method:"postEntitiesExecuteV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}async postEntitiesExecutionActionsV1(t,r){const s={type:"api",api:"workflows",method:"postEntitiesExecutionActionsV1",payload:{body:t,params:r}};return this.bridge.postMessage(s)}}class He{constructor(t){W(this,"api");this.api=t}get alerts(){return _e(this.api),new k1(this.api.bridge)}get detects(){return _e(this.api),new A1(this.api.bridge)}get devices(){return _e(this.api),new T1(this.api.bridge)}get fwmgr(){return _e(this.api),new N1(this.api.bridge)}get incidents(){return _e(this.api),new L1(this.api.bridge)}get mitre(){return _e(this.api),new I1(this.api.bridge)}get plugins(){return _e(this.api),new R1(this.api.bridge)}get remoteResponse(){return _e(this.api),new D1(this.api.bridge)}get userManagement(){return _e(this.api),new V1(this.api.bridge)}get workflows(){return _e(this.api),new F1(this.api.bridge)}get cloudSecurityAssets(){return _e(this.api),new C1(this.api.bridge)}get cloudregistration(){return _e(this.api),new S1(this.api.bridge)}get containerSecurity(){return _e(this.api),new E1(this.api.bridge)}get cspmRegistration(){return _e(this.api),new $1(this.api.bridge)}get customobjects(){return _e(this.api),new z1(this.api.bridge)}get faasGateway(){return _e(this.api),new P1(this.api.bridge)}get loggingapi(){return _e(this.api),new M1(this.api.bridge)}get registryAssessment(){return _e(this.api),new O1(this.api.bridge)}}Oe([De()],He.prototype,"alerts",null);Oe([De()],He.prototype,"detects",null);Oe([De()],He.prototype,"devices",null);Oe([De()],He.prototype,"fwmgr",null);Oe([De()],He.prototype,"incidents",null);Oe([De()],He.prototype,"mitre",null);Oe([De()],He.prototype,"plugins",null);Oe([De()],He.prototype,"remoteResponse",null);Oe([De()],He.prototype,"userManagement",null);Oe([De()],He.prototype,"workflows",null);Oe([De()],He.prototype,"cloudSecurityAssets",null);Oe([De()],He.prototype,"cloudregistration",null);Oe([De()],He.prototype,"containerSecurity",null);Oe([De()],He.prototype,"cspmRegistration",null);Oe([De()],He.prototype,"customobjects",null);Oe([De()],He.prototype,"faasGateway",null);Oe([De()],He.prototype,"loggingapi",null);Oe([De()],He.prototype,"registryAssessment",null);class B1{constructor(t,r){W(this,"falcon");W(this,"definition");this.falcon=t,this.definition=r}async execute({request:t}={}){return this.falcon.api.plugins.postEntitiesExecuteV1({resources:[{definition_id:this.definition.definitionId,operation_id:this.definition.operationId,request:t}]})}}const jt=class jt{constructor(t,r){W(this,"falcon");W(this,"definition");W(this,"pollTimeout",500);W(this,"intervalId");this.falcon=t,this.definition=r}async execute({path:t,method:r,body:s,params:i}){const o="id"in this.definition?{function_id:this.definition.id,function_version:this.definition.version}:{function_name:this.definition.name,function_version:this.definition.version},n=await this.falcon.api.faasGateway.postEntitiesExecutionV1({...o,payload:{path:t,method:r,body:s,params:i}});return new Promise((a,l)=>{var h;const u=(h=n==null?void 0:n.resources)==null?void 0:h[0];u!=null&&u.execution_id?this.pollForResult({resolve:a,reject:l,executionId:u==null?void 0:u.execution_id}):l(n==null?void 0:n.errors)})}async getExecutionResult(t){var i;const r=await this.falcon.api.faasGateway.getEntitiesExecutionV1({id:t}),s=(i=r==null?void 0:r.resources)==null?void 0:i[0];return s==null?void 0:s.payload}pollForResult({resolve:t,reject:r,executionId:s}){let i=2;this.intervalId=window.setInterval(async()=>{try{const o=await this.getExecutionResult(s);o&&(window.clearInterval(this.intervalId),t(o))}catch(o){i<=0&&(window.clearInterval(this.intervalId),r(o)),i--}},this.pollTimeout)}path(t){const r=new URL(t,"http://localhost"),s=r.pathname,i=[...r.searchParams.entries()].reduce((o,[n,a])=>({...o,[n]:[a]}),{});return{path:s,queryParams:i,get:async(o={})=>this.get({path:s,params:{query:(o==null?void 0:o.query)??i??{},header:(o==null?void 0:o.header)??{}}}),post:async(o,n={})=>this.post({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o}),patch:async(o,n={})=>this.patch({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o}),put:async(o,n={})=>this.put({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o}),delete:async(o,n={})=>this.delete({path:s,params:{query:(n==null?void 0:n.query)??i??{},header:(n==null?void 0:n.header)??{}},body:o})}}async get({path:t,params:r}){return this.execute({path:t,method:jt.GET,params:r})}async post({path:t,params:r,body:s}){return this.execute({path:t,method:jt.POST,body:s,params:r})}async patch({path:t,params:r,body:s}){return this.execute({path:t,method:jt.PATCH,body:s,params:r})}async put({path:t,params:r,body:s}){return this.execute({path:t,method:jt.PUT,body:s,params:r})}async delete({path:t,params:r,body:s}){return this.execute({path:t,method:jt.DELETE,body:s,params:r})}destroy(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=void 0)}};W(jt,"GET","GET"),W(jt,"POST","POST"),W(jt,"PATCH","PATCH"),W(jt,"PUT","PUT"),W(jt,"DELETE","DELETE");let wu=jt;class j1{constructor(t,r){W(this,"falcon");W(this,"definition");this.falcon=t,this.definition=r}async write(t,r){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"write",key:t,collection:this.definition.collection,data:r}})}async read(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"read",key:t,collection:this.definition.collection}})}async delete(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"delete",key:t,collection:this.definition.collection}})}async search({filter:t,offset:r,sort:s,limit:i}){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"search",filter:t,limit:i,offset:r,sort:s,collection:this.definition.collection}})}async list(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"list",collection:this.definition.collection,start:t==null?void 0:t.start,end:t==null?void 0:t.end,limit:t==null?void 0:t.limit}})}}class U1{constructor(t){W(this,"falcon");this.falcon=t}async write(t,r){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"ingest",data:t,tag:r==null?void 0:r.tag,tagSource:r==null?void 0:r.tagSource,testData:r==null?void 0:r.testData}})}async query(t){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"dynamic-execute",data:t}})}async savedQuery(t){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"saved-query-execute",data:t}})}}const H1=["_self","_blank"];class W1{constructor(t){W(this,"falcon");this.falcon=t}async navigateTo({path:t,type:r,target:s,metaKey:i,ctrlKey:o,shiftKey:n}){await this.falcon.bridge.postMessage({type:"navigateTo",payload:{path:t,type:r??"falcon",target:s??"_self",metaKey:i??!1,ctrlKey:o??!1,shiftKey:n??!1}})}async onClick(t,r="_self",s="falcon"){var h;if(!(t instanceof Event))throw Error('"event" property should be subclass of Event');if(!("preventDefault"in t)||!(t.target instanceof HTMLAnchorElement))return;t.preventDefault();const i=t.target.getAttribute("href");r=t.target.getAttribute("target")??r;const o=((h=t.target.dataset)==null?void 0:h.type)??s;if(r===null||!H1.includes(r))throw new Error("Target should be _self or _blank");const n=r;if(i==null)throw new Error("Navigation path is missing. Make sure you have added navigation.onClick on the `a` tag and `href` is present.");const{metaKey:a,ctrlKey:l,shiftKey:u}=t;await this.navigateTo({path:i,type:o,target:n,metaKey:a,ctrlKey:l,shiftKey:u})}}class G1{constructor(t){W(this,"bridge");W(this,"observer");this.bridge=t,this.observer=new ResizeObserver(r=>this.handleResizeEvent(r)),this.observer.observe(document.body)}handleResizeEvent(t){const{height:r}=t[0].contentRect;this.bridge.sendUnidirectionalMessage({type:"resize",payload:{height:r}})}destroy(){this.observer.disconnect()}}class K1{constructor(t){W(this,"bridge");this.bridge=t}async openModal(t,r,s={}){const i=await this.bridge.postMessage({type:"openModal",payload:{extension:t,title:r,options:s}});if(i instanceof Error)throw i;return i}closeModal(t){this.bridge.sendUnidirectionalMessage({type:"closeModal",payload:t})}async uploadFile(t,r){return this.bridge.postMessage({type:"fileUpload",fileUploadType:t,payload:r})}}class Td{constructor(){W(this,"isConnected",!1);W(this,"events",new Ks);W(this,"data");W(this,"bridge",new x1({onDataUpdate:t=>this.handleDataUpdate(t),onBroadcast:t=>this.handleBroadcastMessage(t),onLivereload:()=>this.handleLivereloadMessage()}));W(this,"api",new He(this));W(this,"ui",new K1(this.bridge));W(this,"resizeTracker");W(this,"cloudFunctions",[]);W(this,"apiIntegrations",[]);W(this,"collections",[])}async connect(){const t=await this.bridge.postMessage({type:"connect"});if(t!==void 0){const{data:r,origin:s}=t;this.bridge.setOrigin(s),this.data=r,this.updateTheme(r==null?void 0:r.theme),this.isConnected=!0}return this.resizeTracker=new G1(this.bridge),t}get appId(){var t;return(t=this.data)==null?void 0:t.app.id}sendBroadcast(t){this.bridge.sendUnidirectionalMessage({type:"broadcast",payload:t})}handleDataUpdate(t){this.data=t.payload,this.updateTheme(this.data.theme),this.events.emit("data",this.data)}handleBroadcastMessage(t){this.events.emit("broadcast",t.payload)}handleLivereloadMessage(){document.location.reload()}updateTheme(t){if(!t)return;const r=t==="theme-dark"?"theme-light":"theme-dark";document.documentElement.classList.add(t),document.documentElement.classList.remove(r)}cloudFunction(t){_e(this);const r=new wu(this,t);return this.cloudFunctions.push(r),r}apiIntegration({definitionId:t,operationId:r}){if(_e(this),!this.data)throw Error("Data from console is missing");const s=new B1(this,{operationId:r,definitionId:t});return this.apiIntegrations.push(s),s}collection({collection:t}){_e(this);const r=new j1(this,{collection:t});return this.collections.push(r),r}get navigation(){return _e(this),new W1(this)}get logscale(){return _e(this),new U1(this)}destroy(){var t;this.cloudFunctions.forEach(r=>r.destroy()),(t=this.resizeTracker)==null||t.destroy(),this.bridge.destroy()}}Oe([De()],Td.prototype,"navigation",null);Oe([De()],Td.prototype,"logscale",null);const nc=200,q1=50;async function Pd(e){const t=e.collection({collection:"domain"}),r=new Set;let s;for(let i=0;i<q1;i++){const o=await t.list(s?{limit:nc,start:s}:{limit:nc}),n=((o==null?void 0:o.resources)??[]).map(l=>typeof l=="string"?l:l.category||l._key).filter(Boolean),a=r.size;if(n.forEach(l=>r.add(l)),n.length<nc||r.size===a)break;s=n[n.length-1]}return[...r].sort()}const bn=E.createContext(null);function Vg(){const[e,t]=E.useState(!1),[r,s]=E.useState(null),i=E.useMemo(()=>new Td,[]),o=E.useMemo(()=>i.isConnected?i.navigation:void 0,[i.isConnected]),n=E.useCallback(async()=>{try{s(await Pd(i))}catch(a){console.error("Failed to load categories cache",a)}},[i]);return E.useEffect(()=>{(async()=>(await i.connect(),t(!0),n()))()},[i,n]),{falcon:i,navigation:o,isInitialized:e,cachedCategories:r,refreshCategories:n}}function Fg(e){return String(e).trim().replace(/[^A-Za-z0-9_]/g,"_")}function bp(e){var t;return Array.isArray(e)&&e.length?((t=e[0])==null?void 0:t.message)||String(e[0]):null}async function Nr(e,t,r,s){var l,u;const i=e.cloudFunction({name:"urlblock",version:1}).path(r);let o;try{o=t==="GET"?await i.get():await i.post(s??{})}catch(h){throw new Error(bp(h)||(h==null?void 0:h.message)||"Cloud function call failed")}const n=(o==null?void 0:o.status_code)??(o==null?void 0:o.code);if(n!==void 0?n<200||n>=300:!!((l=o==null?void 0:o.errors)!=null&&l.length)){const h=bp(o==null?void 0:o.errors)||((u=o==null?void 0:o.body)==null?void 0:u.error)||`Request failed (HTTP ${n})`,d=new Error(h);throw d.status=n,d.body=o==null?void 0:o.body,d}return(o==null?void 0:o.body)??{}}function Q1({children:e,useFalconNavigation:t=!1,to:r,className:s="",variant:i="default"}){const{navigation:o}=E.useContext(bn),a=`${{default:"text-purple-600 hover:text-purple-800 transition-colors duration-200",button:"inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-sm hover:shadow-md",tab:"px-3 py-2 text-sm font-medium hover:text-purple-700 transition-colors duration-200",subtle:"text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm"}[i]} ${s}`.trim();return t?_.jsx("a",{onClick:l=>{l.preventDefault(),o.navigateTo({path:r})},href:r,className:a,children:e}):_.jsx(Dg,{to:r,className:a,children:e})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ha=globalThis,Nd=ha.ShadowRoot&&(ha.ShadyCSS===void 0||ha.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ld=Symbol(),wp=new WeakMap;let Bg=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Ld)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Nd&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=wp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&wp.set(r,t))}return t}toString(){return this.cssText}};const X1=e=>new Bg(typeof e=="string"?e:e+"",void 0,Ld),U=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Bg(r,e,Ld)},Y1=(e,t)=>{if(Nd)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),i=ha.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)}},xp=Nd?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return X1(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Z1,defineProperty:J1,getOwnPropertyDescriptor:ew,getOwnPropertyNames:tw,getOwnPropertySymbols:rw,getPrototypeOf:sw}=Object,hs=globalThis,_p=hs.trustedTypes,iw=_p?_p.emptyScript:"",ac=hs.reactiveElementPolyfillSupport,Mo=(e,t)=>e,Hi={toAttribute(e,t){switch(t){case Boolean:e=e?iw:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Md=(e,t)=>!Z1(e,t),kp={attribute:!0,type:String,converter:Hi,reflect:!1,useDefault:!1,hasChanged:Md};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),hs.litPropertyMetadata??(hs.litPropertyMetadata=new WeakMap);let fi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=kp){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,r);i!==void 0&&J1(this.prototype,t,i)}}static getPropertyDescriptor(t,r,s){const{get:i,set:o}=ew(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get:i,set(n){const a=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??kp}static _$Ei(){if(this.hasOwnProperty(Mo("elementProperties")))return;const t=sw(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Mo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Mo("properties"))){const r=this.properties,s=[...tw(r),...rw(r)];for(const i of s)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)r.unshift(xp(i))}else t!==void 0&&r.push(xp(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Y1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostConnected)==null?void 0:s.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:Hi).toAttribute(r,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,r){var o,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Hi;this._$Em=i;const u=l.fromAttribute(r,a.type);this[i]=u??((n=this._$Ej)==null?void 0:n.get(i))??u,this._$Em=null}}requestUpdate(t,r,s,i=!1,o){var n;if(t!==void 0){const a=this.constructor;if(i===!1&&(o=this[t]),s??(s=a.getPropertyOptions(t)),!((s.hasChanged??Md)(o,r)||s.useDefault&&s.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??r??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};fi.elementStyles=[],fi.shadowRootOptions={mode:"open"},fi[Mo("elementProperties")]=new Map,fi[Mo("finalized")]=new Map,ac==null||ac({ReactiveElement:fi}),(hs.reactiveElementVersions??(hs.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Io=globalThis,Cp=e=>e,Ka=Io.trustedTypes,Sp=Ka?Ka.createPolicy("lit-html",{createHTML:e=>e}):void 0,jg="$lit$",Zr=`lit$${Math.random().toFixed(9).slice(2)}$`,Ug="?"+Zr,ow=`<${Ug}>`,qs=document,ln=()=>qs.createComment(""),cn=e=>e===null||typeof e!="object"&&typeof e!="function",Id=Array.isArray,nw=e=>Id(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",lc=`[ 	
\f\r]`,po=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ep=/-->/g,$p=/>/g,$s=RegExp(`>|${lc}(?:([^\\s"'>=/]+)(${lc}*=${lc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zp=/'/g,Ap=/"/g,Hg=/^(?:script|style|textarea|title)$/i,aw=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),A=aw(1),Mt=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),Tp=new WeakMap,Rs=qs.createTreeWalker(qs,129);function Wg(e,t){if(!Id(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Sp!==void 0?Sp.createHTML(t):t}const lw=(e,t)=>{const r=e.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=po;for(let a=0;a<r;a++){const l=e[a];let u,h,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===po?h[1]==="!--"?n=Ep:h[1]!==void 0?n=$p:h[2]!==void 0?(Hg.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=$s):h[3]!==void 0&&(n=$s):n===$s?h[0]===">"?(n=i??po,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,u=h[1],n=h[3]===void 0?$s:h[3]==='"'?Ap:zp):n===Ap||n===zp?n=$s:n===Ep||n===$p?n=po:(n=$s,i=void 0);const g=n===$s&&e[a+1].startsWith("/>")?" ":"";o+=n===po?l+ow:d>=0?(s.push(u),l.slice(0,d)+jg+l.slice(d)+Zr+g):l+Zr+(d===-2?a:g)}return[Wg(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class un{constructor({strings:t,_$litType$:r},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[u,h]=lw(t,r);if(this.el=un.createElement(u,s),Rs.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Rs.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(jg)){const p=h[n++],g=i.getAttribute(d).split(Zr),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:g,ctor:v[1]==="."?uw:v[1]==="?"?dw:v[1]==="@"?hw:bl}),i.removeAttribute(d)}else d.startsWith(Zr)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(Hg.test(i.tagName)){const d=i.textContent.split(Zr),p=d.length-1;if(p>0){i.textContent=Ka?Ka.emptyScript:"";for(let g=0;g<p;g++)i.append(d[g],ln()),Rs.nextNode(),l.push({type:2,index:++o});i.append(d[p],ln())}}}else if(i.nodeType===8)if(i.data===Ug)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Zr,d+1))!==-1;)l.push({type:7,index:o}),d+=Zr.length-1}o++}}static createElement(t,r){const s=qs.createElement("template");return s.innerHTML=t,s}}function Wi(e,t,r=e,s){var n,a;if(t===Mt)return t;let i=s!==void 0?(n=r._$Co)==null?void 0:n[s]:r._$Cl;const o=cn(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,s)),s!==void 0?(r._$Co??(r._$Co=[]))[s]=i:r._$Cl=i),i!==void 0&&(t=Wi(e,i._$AS(e,t.values),i,s)),t}class cw{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??qs).importNode(r,!0);Rs.currentNode=i;let o=Rs.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let u;l.type===2?u=new wn(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new pw(o,this,t)),this._$AV.push(u),l=s[++a]}n!==(l==null?void 0:l.index)&&(o=Rs.nextNode(),n++)}return Rs.currentNode=qs,i}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class wn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,s,i){this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Wi(this,t,r),cn(t)?t===be||t==null||t===""?(this._$AH!==be&&this._$AR(),this._$AH=be):t!==this._$AH&&t!==Mt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):nw(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==be&&cn(this._$AH)?this._$AA.nextSibling.data=t:this.T(qs.createTextNode(t)),this._$AH=t}$(t){var o;const{values:r,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=un.createElement(Wg(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const n=new cw(i,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(t){let r=Tp.get(t.strings);return r===void 0&&Tp.set(t.strings,r=new un(t)),r}k(t){Id(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,i=0;for(const o of t)i===r.length?r.push(s=new wn(this.O(ln()),this.O(ln()),this,this.options)):s=r[i],s._$AI(o),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);t!==this._$AB;){const i=Cp(t).nextSibling;Cp(t).remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}let bl=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,i,o){this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=be}_$AI(t,r=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=Wi(this,t,r,0),n=!cn(t)||t!==this._$AH&&t!==Mt,n&&(this._$AH=t);else{const a=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=Wi(this,a[s+l],r,l),u===Mt&&(u=this._$AH[l]),n||(n=!cn(u)||u!==this._$AH[l]),u===be?t=be:t!==be&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}n&&!i&&this.j(t)}j(t){t===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class uw extends bl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===be?void 0:t}}class dw extends bl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==be)}}class hw extends bl{constructor(t,r,s,i,o){super(t,r,s,i,o),this.type=5}_$AI(t,r=this){if((t=Wi(this,t,r,0)??be)===Mt)return;const s=this._$AH,i=t===be&&s!==be||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==be&&(s===be||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class pw{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Wi(this,t)}}const cc=Io.litHtmlPolyfillSupport;cc==null||cc(un,wn),(Io.litHtmlVersions??(Io.litHtmlVersions=[])).push("3.3.3");const fw=(e,t,r)=>{const s=(r==null?void 0:r.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;s._$litPart$=i=new wn(t.insertBefore(ln(),o),o,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=globalThis;let Ro=class extends fi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=fw(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Mt}};var df;Ro._$litElement$=!0,Ro.finalized=!0,(df=Fs.litElementHydrateSupport)==null||df.call(Fs,{LitElement:Ro});const uc=Fs.litElementPolyfillSupport;uc==null||uc({LitElement:Ro});(Fs.litElementVersions??(Fs.litElementVersions=[])).push("4.2.2");var mw=U`
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
`,K=U`
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
`,Gg=Object.defineProperty,gw=Object.defineProperties,vw=Object.getOwnPropertyDescriptor,yw=Object.getOwnPropertyDescriptors,Pp=Object.getOwnPropertySymbols,bw=Object.prototype.hasOwnProperty,ww=Object.prototype.propertyIsEnumerable,dc=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Rd=e=>{throw TypeError(e)},Np=(e,t,r)=>t in e?Gg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fr=(e,t)=>{for(var r in t||(t={}))bw.call(t,r)&&Np(e,r,t[r]);if(Pp)for(var r of Pp(t))ww.call(t,r)&&Np(e,r,t[r]);return e},xn=(e,t)=>gw(e,yw(t)),c=(e,t,r,s)=>{for(var i=s>1?void 0:s?vw(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Gg(t,r,i),i},Kg=(e,t,r)=>t.has(e)||Rd("Cannot "+r),xw=(e,t,r)=>(Kg(e,t,"read from private field"),t.get(e)),_w=(e,t,r)=>t.has(e)?Rd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),kw=(e,t,r,s)=>(Kg(e,t,"write to private field"),t.set(e,r),r),Cw=function(e,t){this[0]=e,this[1]=t},Sw=e=>{var t=e[dc("asyncIterator")],r=!1,s,i={};return t==null?(t=e[dc("iterator")](),s=o=>i[o]=n=>t[o](n)):(t=t.call(e),s=o=>i[o]=n=>{if(r){if(r=!1,o==="throw")throw n;return n}return r=!0,{done:!1,value:new Cw(new Promise(a=>{var l=t[o](n);l instanceof Object||Rd("Object expected"),a(l)}),1)}}),i[dc("iterator")]=()=>i,s("next"),"throw"in t?s("throw"):i.throw=o=>{throw o},"return"in t&&s("return"),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ew={attribute:!0,type:String,converter:Hi,reflect:!1,hasChanged:Md},$w=(e=Ew,t,r)=>{const{kind:s,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),s==="accessor"){const{name:n}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,e,a),a}}}if(s==="setter"){const{name:n}=r;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e,!0,a)}}throw Error("Unsupported decorator location: "+s)};function f(e){return(t,r)=>typeof r=="object"?$w(e,t,r):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _n(e){return(t,r)=>{const s=typeof t=="function"?t:t[r];Object.assign(s,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qg=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(e,t){return(r,s,i)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(e))??null};return qg(r,s,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zw(e){return(t,r)=>qg(t,r,{async get(){var s;return await this.updateComplete,((s=this.renderRoot)==null?void 0:s.querySelector(e))??null}})}var pa,V=class extends Ro{constructor(){super(),_w(this,pa,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,Fr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const s=customElements.get(e);if(!s){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",o=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in s&&s.version&&(o=" v"+s.version),!(i&&o&&i===o)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${o} has already been registered.`)}attributeChangedCallback(e,t,r){xw(this,pa)||(this.constructor.elementProperties.forEach((s,i)=>{s.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),kw(this,pa,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};pa=new WeakMap;V.version="2.20.1";V.dependencies={};c([f()],V.prototype,"dir",2);c([f()],V.prototype,"lang",2);var wl=class extends V{render(){return A` <slot></slot> `}};wl.styles=[K,mw];/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Aw=new Set(["children","localName","ref","style","className"]),Lp=new WeakMap,Mp=(e,t,r,s,i)=>{const o=i==null?void 0:i[t];o===void 0?(e[t]=r,r==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):r!==s&&((n,a,l)=>{let u=Lp.get(n);u===void 0&&Lp.set(n,u=new Map);let h=u.get(a);l!==void 0?h===void 0?(u.set(a,h={handleEvent:l}),n.addEventListener(a,h)):h.handleEvent=l:h!==void 0&&(u.delete(a),n.removeEventListener(a,h))})(e,o,r)},B=({react:e,tagName:t,elementClass:r,events:s,displayName:i})=>{const o=new Set(Object.keys(s??{})),n=e.forwardRef((a,l)=>{const u=e.useRef(new Map),h=e.useRef(null),d={},p={};for(const[g,v]of Object.entries(a))Aw.has(g)?d[g==="className"?"class":g]=v:o.has(g)||g in r.prototype?p[g]=v:d[g]=v;return e.useLayoutEffect(()=>{if(h.current===null)return;const g=new Map;for(const v in p)Mp(h.current,v,a[v],u.current.get(v),s),u.current.delete(v),g.set(v,a[v]);for(const[v,x]of u.current)Mp(h.current,v,void 0,x,s);u.current=g}),e.useLayoutEffect(()=>{var g;(g=h.current)==null||g.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e.useCallback(g=>{h.current=g,typeof l=="function"?l(g):l!==null&&(l.current=g)},[l])})});return n.displayName=i??r.name,n};var Tw="sl-visually-hidden";wl.define("sl-visually-hidden");B({tagName:Tw,elementClass:wl,react:F,events:{},displayName:"SlVisuallyHidden"});var Pw=U`
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
`,Nw=U`
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
`,xu="";function Ip(e){xu=e}function Lw(e=""){if(!xu){const t=[...document.getElementsByTagName("script")],r=t.find(s=>s.hasAttribute("data-shoelace"));if(r)Ip(r.getAttribute("data-shoelace"));else{const s=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let i="";s&&(i=s.getAttribute("src")),Ip(i.split("/").slice(0,-1).join("/"))}}return xu.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Mw={name:"default",resolver:e=>Lw(`assets/icons/${e}.svg`)},Iw=Mw,Rp={caret:`
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
  `},Rw={name:"system",resolver:e=>e in Rp?`data:image/svg+xml,${encodeURIComponent(Rp[e])}`:""},Ow=Rw,Dw=[Iw,Ow],_u=[];function Vw(e){_u.push(e)}function Fw(e){_u=_u.filter(t=>t!==e)}function Op(e){return Dw.find(t=>t.name===e)}var Bw=U`
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
 */const jw=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,Qg=e=>e.strings===void 0,Uw={},Hw=(e,t=Uw)=>e._$AH=t;var fo=Symbol(),Gn=Symbol(),hc,pc=new Map,ue=class extends V{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let s;if(t!=null&&t.spriteSheet)return this.svg=A`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(s=await fetch(e,{mode:"cors"}),!s.ok)return s.status===410?fo:Gn}catch{return Gn}try{const i=document.createElement("div");i.innerHTML=await s.text();const o=i.firstElementChild;if(((r=o==null?void 0:o.tagName)==null?void 0:r.toLowerCase())!=="svg")return fo;hc||(hc=new DOMParser);const a=hc.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):fo}catch{return fo}}connectedCallback(){super.connectedCallback(),Vw(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Fw(this)}getIconSource(){const e=Op(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),s=r?Op(this.library):void 0;if(!t){this.svg=null;return}let i=pc.get(t);if(i||(i=this.resolveIcon(t,s),pc.set(t,i)),!this.initialRender)return;const o=await i;if(o===Gn&&pc.delete(t),t===this.getIconSource().url){if(jw(o)){if(this.svg=o,s){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&n&&s.mutator(n)}return}switch(o){case Gn:case fo:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=s==null?void 0:s.mutator)==null||e.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ue.styles=[K,Bw];c([H()],ue.prototype,"svg",2);c([f({reflect:!0})],ue.prototype,"name",2);c([f()],ue.prototype,"src",2);c([f()],ue.prototype,"label",2);c([f({reflect:!0})],ue.prototype,"library",2);c([L("label")],ue.prototype,"handleLabelChange",1);c([L(["name","src","library"])],ue.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},kn=e=>(...t)=>({_$litDirective$:e,values:t});let Cn=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=kn(class extends Cn{constructor(e){var t;if(super(e),e.type!==mr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((s=this.nt)!=null&&s.has(o))&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const n=!!t[o];n===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Mt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xg=Symbol.for(""),Ww=e=>{if((e==null?void 0:e.r)===Xg)return e==null?void 0:e._$litStatic$},qa=(e,...t)=>({_$litStatic$:t.reduce((r,s,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[i+1],e[0]),r:Xg}),Dp=new Map,Gw=e=>(t,...r)=>{const s=r.length;let i,o;const n=[],a=[];let l,u=0,h=!1;for(;u<s;){for(l=t[u];u<s&&(o=r[u],(i=Ww(o))!==void 0);)l+=i+t[++u],h=!0;u!==s&&a.push(o),n.push(l),u++}if(u===s&&n.push(t[s]),h){const d=n.join("$$lit$$");(t=Dp.get(d))===void 0&&(n.raw=n,Dp.set(d,t=n)),r=a}return e(t,...r)},Oo=Gw(A);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=e=>e??be;var Ve=class extends V{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?qa`a`:qa`button`;return Oo`
      <${t}
        part="base"
        class=${G({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};Ve.styles=[K,Nw];Ve.dependencies={"sl-icon":ue};c([I(".icon-button")],Ve.prototype,"button",2);c([H()],Ve.prototype,"hasFocus",2);c([f()],Ve.prototype,"name",2);c([f()],Ve.prototype,"library",2);c([f()],Ve.prototype,"src",2);c([f()],Ve.prototype,"href",2);c([f()],Ve.prototype,"target",2);c([f()],Ve.prototype,"download",2);c([f()],Ve.prototype,"label",2);c([f({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);const ku=new Set,$i=new Map;let Sr,Od="ltr",Dd="en";const Yg=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Yg){const e=new MutationObserver(Jg);Od=document.documentElement.dir||"ltr",Dd=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Zg(...e){e.map(t=>{const r=t.$code.toLowerCase();$i.has(r)?$i.set(r,Object.assign(Object.assign({},$i.get(r)),t)):$i.set(r,t),Sr||(Sr=t)}),Jg()}function Jg(){Yg&&(Od=document.documentElement.dir||"ltr",Dd=document.documentElement.lang||navigator.language),[...ku.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Kw=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ku.add(this.host)}hostDisconnected(){ku.delete(this.host)}dir(){return`${this.host.dir||Od}`.toLowerCase()}lang(){const t=`${this.host.lang||Dd}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(t),t}catch{return Sr?Sr.$code.toLowerCase():"en"}}getTranslationData(t){var r,s;let i;try{i=new Intl.Locale(t.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}const o=i.language.toLowerCase(),n=(s=(r=i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&s!==void 0?s:"",a=$i.get(`${o}-${n}`),l=$i.get(o);return{locale:i,language:o,region:n,primary:a,secondary:l}}exists(t,r){var s;const{primary:i,secondary:o}=this.getTranslationData((s=r.lang)!==null&&s!==void 0?s:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||o&&o[t]||r.includeFallback&&Sr&&Sr[t])}term(t,...r){const{primary:s,secondary:i}=this.getTranslationData(this.lang());let o;if(s&&s[t])o=s[t];else if(i&&i[t])o=i[t];else if(Sr&&Sr[t])o=Sr[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...r):o}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,r)}};var ev={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Zg(ev);var qw=ev,ie=class extends Kw{};Zg(qw);var Qw=0,Qt=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.attrId=++Qw,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,A`
      <div
        part="base"
        class=${G({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
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
    `}};Qt.styles=[K,Pw];Qt.dependencies={"sl-icon-button":Ve};c([I(".tab")],Qt.prototype,"tab",2);c([f({reflect:!0})],Qt.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],Qt.prototype,"active",2);c([f({type:Boolean,reflect:!0})],Qt.prototype,"closable",2);c([f({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);c([f({type:Number,reflect:!0})],Qt.prototype,"tabIndex",2);c([L("active")],Qt.prototype,"handleActiveChange",1);c([L("disabled")],Qt.prototype,"handleDisabledChange",1);var Xw="sl-tab";Qt.define("sl-tab");var Yw=B({tagName:Xw,elementClass:Qt,react:F,events:{onSlClose:"sl-close"},displayName:"SlTab"}),Zw=Yw,Jw=U`
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
`,ex=U`
  :host {
    display: contents;
  }
`,Xi=class extends V{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};Xi.styles=[K,ex];c([f({type:Boolean,reflect:!0})],Xi.prototype,"disabled",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Xi.prototype,"handleDisabledChange",1);function tx(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Cu=new Set;function rx(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function sx(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Do(e){if(Cu.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=rx()+sx();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),t<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Vo(e){Cu.delete(e),Cu.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Su(e,t,r="vertical",s="smooth"){const i=tx(e,t),o=i.top+t.scrollTop,n=i.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,u=t.scrollTop,h=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(n<a?t.scrollTo({left:n,behavior:s}):n+e.clientWidth>l&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:s})),(r==="vertical"||r==="both")&&(o<u?t.scrollTo({top:o,behavior:s}):o+e.clientHeight>h&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:s}))}var Xe=class extends V{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ie(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const r=t.filter(({target:s})=>{if(s===this)return!0;if(s.closest("sl-tab-group")!==this)return!1;const i=s.tagName.toLowerCase();return i==="sl-tab"||i==="sl-tab-panel"});if(r.length!==0){if(r.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),r.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(r.some(s=>s.attributeName==="active")){const i=r.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="sl-tab").map(o=>o.target).find(o=>o.active);i&&this.setActiveTab(i)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,s)=>{var i;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),s.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(a=>a.matches(":focus")),o=this.localize.dir()==="rtl";let n=null;if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){if(e.key==="Home")n=this.focusableTabs[0];else if(e.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===i);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===i);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&Su(n,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Fr({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var i;return s.active=s.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Su(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,s=this.localize.dir()==="rtl",i=this.getAllTabs(),n=i.slice(0,i.indexOf(e)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let r=null;const s=t==="forward"?1:-1;let i=e+s;for(;e<this.tabs.length;){if(r=this.tabs[i]||null,r===null){t==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;i+=s}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return A`
      <div
        part="base"
        class=${G({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${G({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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
                  class=${G({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};Xe.styles=[K,Jw];Xe.dependencies={"sl-icon-button":Ve,"sl-resize-observer":Xi};c([I(".tab-group")],Xe.prototype,"tabGroup",2);c([I(".tab-group__body")],Xe.prototype,"body",2);c([I(".tab-group__nav")],Xe.prototype,"nav",2);c([I(".tab-group__indicator")],Xe.prototype,"indicator",2);c([H()],Xe.prototype,"hasScrollControls",2);c([H()],Xe.prototype,"shouldHideScrollStartButton",2);c([H()],Xe.prototype,"shouldHideScrollEndButton",2);c([f()],Xe.prototype,"placement",2);c([f()],Xe.prototype,"activation",2);c([f({attribute:"no-scroll-controls",type:Boolean})],Xe.prototype,"noScrollControls",2);c([f({attribute:"fixed-scroll-controls",type:Boolean})],Xe.prototype,"fixedScrollControls",2);c([_n({passive:!0})],Xe.prototype,"updateScrollButtons",1);c([L("noScrollControls",{waitUntilFirstUpdate:!0})],Xe.prototype,"updateScrollControls",1);c([L("placement",{waitUntilFirstUpdate:!0})],Xe.prototype,"syncIndicator",1);var ix="sl-tab-group";Xe.define("sl-tab-group");var ox=B({tagName:ix,elementClass:Xe,react:F,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"}),nx=ox,ax=U`
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
`,lx=0,Yi=class extends V{constructor(){super(...arguments),this.attrId=++lx,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return A`
      <slot
        part="base"
        class=${G({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Yi.styles=[K,ax];c([f({reflect:!0})],Yi.prototype,"name",2);c([f({type:Boolean,reflect:!0})],Yi.prototype,"active",2);c([L("active")],Yi.prototype,"handleActiveChange",1);var cx="sl-tab-panel";Yi.define("sl-tab-panel");B({tagName:cx,elementClass:Yi,react:F,events:{},displayName:"SlTabPanel"});var ux=U`
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
        class=${G({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
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
    `}};Br.styles=[K,ux];Br.dependencies={"sl-icon-button":Ve};c([f({reflect:!0})],Br.prototype,"variant",2);c([f({reflect:!0})],Br.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Br.prototype,"pill",2);c([f({type:Boolean})],Br.prototype,"removable",2);var dx="sl-tag";Br.define("sl-tag");B({tagName:dx,elementClass:Br,react:F,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var hx=U`
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
`,Zi=(e="value")=>(t,r)=>{const s=t.constructor,i=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(o,n,a){var l;const u=s.getPropertyOptions(e),h=typeof u.attribute=="string"?u.attribute:e;if(o===h){const d=u.converter||Hi,g=(typeof d=="function"?d:(l=d==null?void 0:d.fromAttribute)!=null?l:Hi.fromAttribute)(a,u.type);this[e]!==g&&(this[r]=g)}i.call(this,o,n,a)}},ri=U`
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
`,mo=new WeakMap,go=new WeakMap,vo=new WeakMap,fc=new WeakSet,Kn=new WeakMap,jr=class{constructor(e,t){this.handleFormData=r=>{const s=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!n&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(a=>{r.formData.append(i,a.toString())}):r.formData.append(i,o.toString()))},this.handleFormSubmit=r=>{var s;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=mo.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Kn.set(this.host,[])},this.handleInteraction=r=>{const s=Kn.get(this.host);s.includes(r.type)||s.push(r.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const s of r)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const s of r)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Fr({form:r=>{const s=r.form;if(s){const o=r.getRootNode().querySelector(`#${s}`);if(o)return o}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var s;return(s=r.disabled)!=null?s:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,s)=>r.value=s,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Kn.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Kn.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,mo.has(this.form)?mo.get(this.form).add(this.host):mo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),go.has(this.form)||(go.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),vo.has(this.form)||(vo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=mo.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),go.has(this.form)&&(this.form.reportValidity=go.get(this.form),go.delete(this.form)),vo.has(this.form)&&(this.form.checkValidity=vo.get(this.form),vo.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?fc.add(e):fc.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&r.setAttribute(s,t.getAttribute(s))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!fc.has(t),s=!!t.required;t.toggleAttribute("data-required",s),t.toggleAttribute("data-optional",!s),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},xl=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),px=Object.freeze(xn(Fr({},xl),{valid:!1,valueMissing:!0})),fx=Object.freeze(xn(Fr({},xl),{valid:!1,customError:!0})),gt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const s=r.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function mx(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(r+=s.textContent)}),r}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qs=kn(class extends Cn{constructor(e){if(super(e),e.type!==mr.PROPERTY&&e.type!==mr.ATTRIBUTE&&e.type!==mr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Qg(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Mt||t===be)return t;const r=e.element,s=e.name;if(e.type===mr.PROPERTY){if(t===r[s])return Mt}else if(e.type===mr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(s))return Mt}else if(e.type===mr.ATTRIBUTE&&r.getAttribute(s)===t+"")return Mt;return Hw(e),t}});var se=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new gt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,s="preserve"){const i=t??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(e,i,o,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t;return A`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
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
            class=${G({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${D(this.name)}
              .value=${Qs(this.value)}
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
    `}};se.styles=[K,ri,hx];c([I(".textarea__control")],se.prototype,"input",2);c([I(".textarea__size-adjuster")],se.prototype,"sizeAdjuster",2);c([H()],se.prototype,"hasFocus",2);c([f()],se.prototype,"title",2);c([f()],se.prototype,"name",2);c([f()],se.prototype,"value",2);c([f({reflect:!0})],se.prototype,"size",2);c([f({type:Boolean,reflect:!0})],se.prototype,"filled",2);c([f()],se.prototype,"label",2);c([f({attribute:"help-text"})],se.prototype,"helpText",2);c([f()],se.prototype,"placeholder",2);c([f({type:Number})],se.prototype,"rows",2);c([f()],se.prototype,"resize",2);c([f({type:Boolean,reflect:!0})],se.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],se.prototype,"readonly",2);c([f({reflect:!0})],se.prototype,"form",2);c([f({type:Boolean,reflect:!0})],se.prototype,"required",2);c([f({type:Number})],se.prototype,"minlength",2);c([f({type:Number})],se.prototype,"maxlength",2);c([f()],se.prototype,"autocapitalize",2);c([f()],se.prototype,"autocorrect",2);c([f()],se.prototype,"autocomplete",2);c([f({type:Boolean})],se.prototype,"autofocus",2);c([f()],se.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],se.prototype,"spellcheck",2);c([f()],se.prototype,"inputmode",2);c([Zi()],se.prototype,"defaultValue",2);c([L("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);c([L("rows",{waitUntilFirstUpdate:!0})],se.prototype,"handleRowsChange",1);c([L("value",{waitUntilFirstUpdate:!0})],se.prototype,"handleValueChange",1);var gx="sl-textarea";se.define("sl-textarea");var vx=B({tagName:gx,elementClass:se,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),Eu=vx,yx=U`
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
`,bx=U`
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
`;const gs=Math.min,Lr=Math.max,Qa=Math.round,qn=Math.floor,Mr=e=>({x:e,y:e}),wx={left:"right",right:"left",bottom:"top",top:"bottom"};function tv(e,t,r){return Lr(e,gs(t,r))}function Ji(e,t){return typeof e=="function"?e(t):e}function Xs(e){return e.split("-")[0]}function eo(e){return e.split("-")[1]}function rv(e){return e==="x"?"y":"x"}function Vd(e){return e==="y"?"height":"width"}function Tr(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function Fd(e){return rv(Tr(e))}function xx(e,t,r){r===void 0&&(r=!1);const s=eo(e),i=Fd(e),o=Vd(i);let n=i==="x"?s===(r?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=Xa(n)),[n,Xa(n)]}function _x(e){const t=Xa(e);return[$u(e),t,$u(t)]}function $u(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const Vp=["left","right"],Fp=["right","left"],kx=["top","bottom"],Cx=["bottom","top"];function Sx(e,t,r){switch(e){case"top":case"bottom":return r?t?Fp:Vp:t?Vp:Fp;case"left":case"right":return t?kx:Cx;default:return[]}}function Ex(e,t,r,s){const i=eo(e);let o=Sx(Xs(e),r==="start",s);return i&&(o=o.map(n=>n+"-"+i),t&&(o=o.concat(o.map($u)))),o}function Xa(e){const t=Xs(e);return wx[t]+e.slice(t.length)}function $x(e){var t,r,s,i;return{top:(t=e.top)!=null?t:0,right:(r=e.right)!=null?r:0,bottom:(s=e.bottom)!=null?s:0,left:(i=e.left)!=null?i:0}}function sv(e){return typeof e!="number"?$x(e):{top:e,right:e,bottom:e,left:e}}function Ya(e){const{x:t,y:r,width:s,height:i}=e;return{width:s,height:i,top:r,left:t,right:t+s,bottom:r+i,x:t,y:r}}function Bp(e,t,r){let{reference:s,floating:i}=e;const o=Tr(t),n=Fd(t),a=Vd(n),l=Xs(t),u=o==="y",h=s.x+s.width/2-i.width/2,d=s.y+s.height/2-i.height/2,p=s[a]/2-i[a]/2;let g;switch(l){case"top":g={x:h,y:s.y-i.height};break;case"bottom":g={x:h,y:s.y+s.height};break;case"right":g={x:s.x+s.width,y:d};break;case"left":g={x:s.x-i.width,y:d};break;default:g={x:s.x,y:s.y}}const v=eo(t);return v&&(g[n]+=p*(v==="end"?1:-1)*(r&&u?-1:1)),g}async function zx(e,t){var r;t===void 0&&(t={});const{x:s,y:i,platform:o,rects:n,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:g=0}=Ji(t,e),v=sv(g),C=a[p?d==="floating"?"reference":"floating":d],b=Ya(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(C)))==null||r?C:C.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:h,strategy:l})),m=d==="floating"?{x:s,y:i,width:n.floating.width,height:n.floating.height}:n.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),w=await(o.isElement==null?void 0:o.isElement(y))&&await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1},k=Ya(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:m,offsetParent:y,strategy:l}):m);return{top:(b.top-k.top+v.top)/w.y,bottom:(k.bottom-b.bottom+v.bottom)/w.y,left:(b.left-k.left+v.left)/w.x,right:(k.right-b.right+v.right)/w.x}}const Ax=50,Tx=async(e,t,r)=>{const{placement:s="bottom",strategy:i="absolute",middleware:o=[],platform:n}=r,a=n.detectOverflow?n:{...n,detectOverflow:zx},l=await(n.isRTL==null?void 0:n.isRTL(t));let u=await n.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Bp(u,s,l),p=s,g=0;const v={};for(let x=0;x<o.length;x++){const C=o[x];if(!C)continue;const{name:b,fn:m}=C,{x:y,y:w,data:k,reset:S}=await m({x:h,y:d,initialPlacement:s,placement:p,strategy:i,middlewareData:v,rects:u,platform:a,elements:{reference:e,floating:t}});h=y??h,d=w??d,v[b]={...v[b],...k},S&&g<Ax&&(g++,typeof S=="object"&&(S.placement&&(p=S.placement),S.rects&&(u=S.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:h,y:d}=Bp(u,p,l)),x=-1)}return{x:h,y:d,placement:p,strategy:i,middlewareData:v}},Px=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:s,placement:i,rects:o,platform:n,elements:a,middlewareData:l}=t,{element:u,padding:h=0}=Ji(e,t)||{};if(u==null)return{};const d=sv(h),p={x:r,y:s},g=Fd(i),v=Vd(g),x=await n.getDimensions(u),C=g==="y",b=C?"top":"left",m=C?"bottom":"right",y=C?"clientHeight":"clientWidth",w=o.reference[v]+o.reference[g]-p[g]-o.floating[v],k=p[g]-o.reference[g],S=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let $=S?S[y]:0;(!$||!await(n.isElement==null?void 0:n.isElement(S)))&&($=a.floating[y]||o.floating[v]);const T=w/2-k/2,M=$/2-x[v]/2-1,z=gs(d[b],M),ee=gs(d[m],M),he=$-x[v]-ee,le=$/2-x[v]/2+T,fe=tv(z,le,he),R=!l.arrow&&eo(i)!=null&&le!==fe&&o.reference[v]/2-(le<z?z:ee)-x[v]/2<0,te=R?le<z?le-z:le-he:0;return{[g]:p[g]+te,data:{[g]:fe,centerOffset:le-fe-te,...R&&{alignmentOffset:te}},reset:R}}}),Nx=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,s;const{placement:i,middlewareData:o,rects:n,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...C}=Ji(e,t);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const b=Xs(i),m=Tr(a),y=Xs(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(u.floating)),k=p||(y||!x?[Xa(a)]:_x(a)),S=v!=="none";!p&&S&&k.push(...Ex(a,x,v,w));const $=[a,...k],T=await l.detectOverflow(t,C),M=[];let z=((s=o.flip)==null?void 0:s.overflows)||[];if(h&&M.push(T[b]),d){const fe=xx(i,n,w);M.push(T[fe[0]],T[fe[1]])}if(z=[...z,{placement:i,overflows:M}],!M.every(fe=>fe<=0)){var ee,he;const fe=(((ee=o.flip)==null?void 0:ee.index)||0)+1,R=$[fe];if(R&&(!(d==="alignment"?m!==Tr(R):!1)||z.every(N=>Tr(N.placement)===m?N.overflows[0]>0:!0)))return{data:{index:fe,overflows:z},reset:{placement:R}};let te=(he=z.filter(de=>de.overflows[0]<=0).sort((de,N)=>de.overflows[1]-N.overflows[1])[0])==null?void 0:he.placement;if(!te)switch(g){case"bestFit":{var le;const de=(le=z.filter(N=>{if(S){const j=Tr(N.placement);return j===m||j==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(j=>j>0).reduce((j,q)=>j+q,0)]).sort((N,j)=>N[1]-j[1])[0])==null?void 0:le[0];de&&(te=de);break}case"initialPlacement":te=a;break}if(i!==te)return{reset:{placement:te}}}return{}}}},Lx=new Set(["left","top"]);async function Mx(e,t){const{placement:r,platform:s,elements:i}=e,o=await(s.isRTL==null?void 0:s.isRTL(i.floating)),n=Xs(r),a=eo(r),l=Tr(r)==="y",u=Lx.has(n)?-1:1,h=o&&l?-1:1,d=Ji(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),l?{x:g*h,y:p*u}:{x:p*u,y:g*h}}const Ix=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,s;const{x:i,y:o,placement:n,middlewareData:a}=t,l=await Mx(t,e);return n===((r=a.offset)==null?void 0:r.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:n}}}}},Rx=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:s,placement:i,platform:o}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:m=>{let{x:y,y:w}=m;return{x:y,y:w}}},...u}=Ji(e,t),h={x:r,y:s},d=await o.detectOverflow(t,u),p=Tr(i),g=rv(p);let v=h[g],x=h[p];const C=(m,y)=>tv(y+d[m==="y"?"top":"left"],y,y-d[m==="y"?"bottom":"right"]);n&&(v=C(g,v)),a&&(x=C(p,x));const b=l.fn({...t,[g]:v,[p]:x});return{...b,data:{x:b.x-r,y:b.y-s,enabled:{[g]:n,[p]:a}}}}}},Ox=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:s,platform:i,elements:o}=t,{apply:n=()=>{},...a}=Ji(e,t),l=await i.detectOverflow(t,a),u=Xs(r),h=eo(r),d=Tr(r)==="y",{width:p,height:g}=s.floating;let v,x;u==="top"||u==="bottom"?(v=u,x=h===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(x=u,v=h==="end"?"top":"bottom");const C=g-l.top-l.bottom,b=p-l.left-l.right,m=gs(g-l[v],C),y=gs(p-l[x],b),w=t.middlewareData.shift,k=!w;let S=m,$=y;w!=null&&w.enabled.x&&($=b),w!=null&&w.enabled.y&&(S=C),k&&!h&&(d?$=p-2*Lr(l.left,l.right):S=g-2*Lr(l.top,l.bottom)),await n({...t,availableWidth:$,availableHeight:S});const T=await i.getDimensions(o.floating);return p!==T.width||g!==T.height?{reset:{rects:!0}}:{}}}};function _l(){return typeof window<"u"}function to(e){return iv(e)?(e.nodeName||"").toLowerCase():"#document"}function Ct(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ur(e){var t;return(t=(iv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function iv(e){return _l()?e instanceof Node||e instanceof Ct(e).Node:!1}function wr(e){return _l()?e instanceof Element||e instanceof Ct(e).Element:!1}function _s(e){return _l()?e instanceof HTMLElement||e instanceof Ct(e).HTMLElement:!1}function jp(e){return!_l()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ct(e).ShadowRoot}function kl(e){const{overflow:t,overflowX:r,overflowY:s,display:i}=xr(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+r)&&i!=="inline"&&i!=="contents"}function Dx(e){return/^(table|td|th)$/.test(to(e))}function Cl(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const Vx=/transform|translate|scale|rotate|perspective|filter/,Fx=/paint|layout|strict|content/,zs=e=>!!e&&e!=="none";let mc;function Sl(e){const t=wr(e)?xr(e):e;return zs(t.transform)||zs(t.translate)||zs(t.scale)||zs(t.rotate)||zs(t.perspective)||!Bd()&&(zs(t.backdropFilter)||zs(t.filter))||Vx.test(t.willChange||"")||Fx.test(t.contain||"")}function Bx(e){let t=Ys(e);for(;_s(t)&&!dn(t);){if(Sl(t))return t;if(Cl(t))return null;t=Ys(t)}return null}function Bd(){return mc==null&&(mc=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),mc}function dn(e){return/^(html|body|#document)$/.test(to(e))}function xr(e){return Ct(e).getComputedStyle(e)}function El(e){return wr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ys(e){if(to(e)==="html")return e;const t=e.assignedSlot||e.parentNode||jp(e)&&e.host||Ur(e);return jp(t)?t.host:t}function ov(e){const t=Ys(e);return dn(t)?(e.ownerDocument||e).body:_s(t)&&kl(t)?t:ov(t)}function hn(e,t,r){var s;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=ov(e),o=i===((s=e.ownerDocument)==null?void 0:s.body),n=Ct(i);if(o){const a=zu(n);return t.concat(n,n.visualViewport||[],kl(i)?i:[],a&&r?hn(a):[])}else return t.concat(i,hn(i,[],r))}function zu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function nv(e){const t=xr(e);let r=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const i=_s(e),o=i?e.offsetWidth:r,n=i?e.offsetHeight:s,a=Qa(r)!==o||Qa(s)!==n;return a&&(r=o,s=n),{width:r,height:s,$:a}}function jd(e){return wr(e)?e:e.contextElement}function Mi(e){const t=jd(e);if(!_s(t))return Mr(1);const r=t.getBoundingClientRect(),{width:s,height:i,$:o}=nv(t);let n=(o?Qa(r.width):r.width)/s,a=(o?Qa(r.height):r.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const jx=Mr(0);function av(e){const t=Ct(e);return!Bd()||!t.visualViewport?jx:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ux(e,t,r){return t===void 0&&(t=!1),!!r&&t&&r===Ct(e)}function Zs(e,t,r,s){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),o=jd(e);let n=Mr(1);t&&(s?wr(s)&&(n=Mi(s)):n=Mi(e));const a=Ux(o,r,s)?av(o):Mr(0);let l=(i.left+a.x)/n.x,u=(i.top+a.y)/n.y,h=i.width/n.x,d=i.height/n.y;if(o&&s){const p=Ct(o),g=wr(s)?Ct(s):s;let v=p,x=zu(v);for(;x&&g!==v;){const C=Mi(x),b=x.getBoundingClientRect(),m=xr(x),y=b.left+(x.clientLeft+parseFloat(m.paddingLeft))*C.x,w=b.top+(x.clientTop+parseFloat(m.paddingTop))*C.y;l*=C.x,u*=C.y,h*=C.x,d*=C.y,l+=y,u+=w,v=Ct(x),x=zu(v)}}return Ya({width:h,height:d,x:l,y:u})}function $l(e,t){const r=El(e).scrollLeft;return t?t.left+r:Zs(Ur(e)).left+r}function lv(e,t){const r=e.getBoundingClientRect(),s=r.left+t.scrollLeft-$l(e,r),i=r.top+t.scrollTop;return{x:s,y:i}}function Hx(e){let{elements:t,rect:r,offsetParent:s,strategy:i}=e;const o=i==="fixed",n=Ur(s),a=t?Cl(t.floating):!1;if(s===n||a&&o)return r;let l={scrollLeft:0,scrollTop:0},u=Mr(1);const h=Mr(0),d=_s(s);if((d||!o)&&((to(s)!=="body"||kl(n))&&(l=El(s)),d)){const g=Zs(s);u=Mi(s),h.x=g.x+s.clientLeft,h.y=g.y+s.clientTop}const p=n&&!d&&!o?lv(n,l):Mr(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+h.x+p.x,y:r.y*u.y-l.scrollTop*u.y+h.y+p.y}}function Wx(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Gx(e){const t=El(e),r=e.ownerDocument.body,s=Lr(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=Lr(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-t.scrollLeft+$l(e);const n=-t.scrollTop;return xr(r).direction==="rtl"&&(o+=Lr(e.clientWidth,r.clientWidth)-s),{width:s,height:i,x:o,y:n}}const Kx=25;function qx(e,t,r){r===void 0&&(r="viewport");const s=r==="layoutViewport",i=Ct(e),o=Ur(e),n=i.visualViewport;let a=o.clientWidth,l=o.clientHeight,u=0,h=0;if(n){const p=!Bd()||t==="fixed";s?p||(u=-n.offsetLeft,h=-n.offsetTop):(a=n.width,l=n.height,p&&(u=n.offsetLeft,h=n.offsetTop))}if($l(o)<=0){const p=o.ownerDocument,g=p.body,v=getComputedStyle(g),x=p.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,C=Math.abs(o.clientWidth-g.clientWidth-x),b=getComputedStyle(o).scrollbarGutter==="stable both-edges"?C/2:C;b<=Kx&&(a-=b)}return{width:a,height:l,x:u,y:h}}function Qx(e,t){const r=Zs(e,!0,t==="fixed"),s=r.top+e.clientTop,i=r.left+e.clientLeft,o=Mi(e),n=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,u=s*o.y;return{width:n,height:a,x:l,y:u}}function Up(e,t,r){let s;if(t==="viewport"||t==="layoutViewport")s=qx(e,r,t);else if(t==="document")s=Gx(Ur(e));else if(wr(t))s=Qx(t,r);else{const i=av(e);s={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ya(s)}function Xx(e,t){const r=t.get(e);if(r)return r;let s=hn(e,[],!1).filter(a=>wr(a)&&to(a)!=="body"),i=null;const o=xr(e).position==="fixed";let n=o?Ys(e):e;for(;wr(n)&&!dn(n);){const a=xr(n),l=Sl(n),u=i?i.position:o?"fixed":"";!l&&(u==="fixed"||u==="absolute"&&a.position==="static")?s=s.filter(d=>d!==n):i=a,n=Ys(n)}return t.set(e,s),s}function Yx(e){let{element:t,boundary:r,rootBoundary:s,strategy:i}=e;const n=[...r==="clippingAncestors"?Cl(t)?[]:Xx(t,this._c):[].concat(r),s],a=Up(t,n[0],i);let l=a.top,u=a.right,h=a.bottom,d=a.left;for(let p=1;p<n.length;p++){const g=Up(t,n[p],i);l=Lr(g.top,l),u=gs(g.right,u),h=gs(g.bottom,h),d=Lr(g.left,d)}return{width:u-d,height:h-l,x:d,y:l}}function Zx(e){const{width:t,height:r}=nv(e);return{width:t,height:r}}function Jx(e,t,r){const s=_s(t),i=Ur(t),o=r==="fixed",n=Zs(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Mr(0);if((s||!o)&&((to(t)!=="body"||kl(i))&&(a=El(t)),s)){const p=Zs(t,!0,o,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}!s&&i&&(l.x=$l(i));const u=i&&!s&&!o?lv(i,a):Mr(0),h=n.left+a.scrollLeft-l.x-u.x,d=n.top+a.scrollTop-l.y-u.y;return{x:h,y:d,width:n.width,height:n.height}}function gc(e){return xr(e).position==="static"}function Hp(e,t){if(!_s(e)||xr(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Ur(e)===r&&(r=r.ownerDocument.body),r}function cv(e,t){const r=Ct(e);if(Cl(e))return r;if(!_s(e)){let i=Ys(e);for(;i&&!dn(i);){if(wr(i)&&!gc(i))return i;i=Ys(i)}return r}let s=Hp(e,t);for(;s&&Dx(s)&&gc(s);)s=Hp(s,t);return s&&dn(s)&&gc(s)&&!Sl(s)?r:s||Bx(e)||r}const e_=async function(e){const t=this.getOffsetParent||cv,r=this.getDimensions,s=await r(e.floating);return{reference:Jx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function t_(e){return xr(e).direction==="rtl"}const fa={convertOffsetParentRelativeRectToViewportRelativeRect:Hx,getDocumentElement:Ur,getClippingRect:Yx,getOffsetParent:cv,getElementRects:e_,getClientRects:Wx,getDimensions:Zx,getScale:Mi,isElement:wr,isRTL:t_};function uv(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function r_(e,t,r){let s=null,i;const o=Ur(e);function n(){var h;clearTimeout(i),(h=s)==null||h.disconnect(),s=null}function a(h,d){h===void 0&&(h=!1),d===void 0&&(d=1),n();const p=e.getBoundingClientRect(),{left:g,top:v,width:x,height:C}=p;if(h||t(),!x||!C)return;const b=qn(v),m=qn(o.clientWidth-(g+x)),y=qn(o.clientHeight-(v+C)),w=qn(g),S={rootMargin:-b+"px "+-m+"px "+-y+"px "+-w+"px",threshold:Lr(0,gs(1,d))||1};let $=!0;function T(M){const z=M[0].intersectionRatio;if(!uv(p,e.getBoundingClientRect()))return a();if(z!==d){if(!$)return a();z?a(!1,z):i=setTimeout(()=>{a(!1,1e-7)},1e3)}$=!1}try{s=new IntersectionObserver(T,{...S,root:o.ownerDocument})}catch{s=new IntersectionObserver(T,S)}s.observe(e)}const l=Ct(e),u=()=>a(r);return l.addEventListener("resize",u),a(!0),()=>{l.removeEventListener("resize",u),n()}}function s_(e,t,r,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,u=jd(e),h=i||o?[...u?hn(u):[],...t?hn(t):[]]:[];h.forEach(b=>{i&&b.addEventListener("scroll",r),o&&b.addEventListener("resize",r)});const d=u&&a?r_(u,r,o):null;let p=-1,g=null;n&&(g=new ResizeObserver(b=>{let[m]=b;m&&m.target===u&&g&&t&&(g.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var y;(y=g)==null||y.observe(t)})),r()}),u&&!l&&g.observe(u),t&&g.observe(t));let v,x=l?Zs(e):null;l&&C();function C(){const b=Zs(e);x&&!uv(x,b)&&r(),x=b,v=requestAnimationFrame(C)}return r(),()=>{var b;h.forEach(m=>{i&&m.removeEventListener("scroll",r),o&&m.removeEventListener("resize",r)}),d==null||d(),(b=g)==null||b.disconnect(),g=null,l&&cancelAnimationFrame(v)}}const i_=Ix,o_=Rx,n_=Nx,Wp=Ox,a_=Px,l_=(e,t,r)=>{const s=new Map,i=r??{},o={...fa,...i.platform,_c:s};return Tx(e,t,{...i,platform:o})};function c_(e){return u_(e)}function vc(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function u_(e){for(let t=e;t;t=vc(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=vc(e);t;t=vc(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||Sl(r)||t.tagName==="BODY"))return t}return null}function d_(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var oe=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let s=0,i=0,o=0,n=0,a=0,l=0,u=0,h=0;r?e.top<t.top?(s=e.left,i=e.bottom,o=e.right,n=e.bottom,a=t.left,l=t.top,u=t.right,h=t.top):(s=t.left,i=t.bottom,o=t.right,n=t.bottom,a=e.left,l=e.top,u=e.right,h=e.top):e.left<t.left?(s=e.right,i=e.top,o=t.left,n=t.top,a=e.right,l=e.bottom,u=t.left,h=t.bottom):(s=t.right,i=t.top,o=e.left,n=e.top,a=t.right,l=t.bottom,u=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||d_(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=s_(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[i_({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Wp({apply:({rects:r})=>{const s=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(n_({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(o_({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Wp({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(a_({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>fa.getOffsetParent(r,c_):fa.getOffsetParent;l_(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:xn(Fr({},fa),{getOffsetParent:t})}).then(({x:r,y:s,middlewareData:i,placement:o})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${r}px`,top:`${s}px`}),this.arrow){const l=i.arrow.x,u=i.arrow.y;let h="",d="",p="",g="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?v:"",g=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":v,g=n?v:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof l=="number"?`${l}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:p,left:g,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return A`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${G({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${G({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?A`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};oe.styles=[K,bx];c([I(".popup")],oe.prototype,"popup",2);c([I(".popup__arrow")],oe.prototype,"arrowEl",2);c([f()],oe.prototype,"anchor",2);c([f({type:Boolean,reflect:!0})],oe.prototype,"active",2);c([f({reflect:!0})],oe.prototype,"placement",2);c([f({reflect:!0})],oe.prototype,"strategy",2);c([f({type:Number})],oe.prototype,"distance",2);c([f({type:Number})],oe.prototype,"skidding",2);c([f({type:Boolean})],oe.prototype,"arrow",2);c([f({attribute:"arrow-placement"})],oe.prototype,"arrowPlacement",2);c([f({attribute:"arrow-padding",type:Number})],oe.prototype,"arrowPadding",2);c([f({type:Boolean})],oe.prototype,"flip",2);c([f({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],oe.prototype,"flipFallbackPlacements",2);c([f({attribute:"flip-fallback-strategy"})],oe.prototype,"flipFallbackStrategy",2);c([f({type:Object})],oe.prototype,"flipBoundary",2);c([f({attribute:"flip-padding",type:Number})],oe.prototype,"flipPadding",2);c([f({type:Boolean})],oe.prototype,"shift",2);c([f({type:Object})],oe.prototype,"shiftBoundary",2);c([f({attribute:"shift-padding",type:Number})],oe.prototype,"shiftPadding",2);c([f({attribute:"auto-size"})],oe.prototype,"autoSize",2);c([f()],oe.prototype,"sync",2);c([f({type:Object})],oe.prototype,"autoSizeBoundary",2);c([f({attribute:"auto-size-padding",type:Number})],oe.prototype,"autoSizePadding",2);c([f({attribute:"hover-bridge",type:Boolean})],oe.prototype,"hoverBridge",2);var dv=new Map,h_=new WeakMap;function p_(e){return e??{keyframes:[],options:{duration:0}}}function Gp(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ae(e,t){dv.set(e,p_(t))}function we(e,t,r){const s=h_.get(e);if(s!=null&&s[t])return Gp(s[t],r.dir);const i=dv.get(t);return i?Gp(i,r.dir):{keyframes:[],options:{duration:0}}}function pt(e,t){return new Promise(r=>{function s(i){i.target===e&&(e.removeEventListener(t,s),r())}e.addEventListener(t,s)})}function Ae(e,t,r){return new Promise(s=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,xn(Fr({},r),{duration:Au()?0:r.duration}));i.addEventListener("cancel",s,{once:!0}),i.addEventListener("finish",s,{once:!0})})}function Kp(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Au(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Re(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}function Za(e,t){return e.map(r=>xn(Fr({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var We=class extends V{constructor(){super(),this.localize=new ie(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Kp(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Kp(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Re(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:s}=we(this,"tooltip.show",{dir:this.localize.dir()});await Ae(this.popup.popup,r,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Re(this.body);const{keyframes:r,options:s}=we(this,"tooltip.hide",{dir:this.localize.dir()});await Ae(this.popup.popup,r,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,pt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pt(this,"sl-after-hide")}render(){return A`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${G({tooltip:!0,"tooltip--open":this.open})}
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
    `}};We.styles=[K,yx];We.dependencies={"sl-popup":oe};c([I("slot:not([name])")],We.prototype,"defaultSlot",2);c([I(".tooltip__body")],We.prototype,"body",2);c([I("sl-popup")],We.prototype,"popup",2);c([f()],We.prototype,"content",2);c([f()],We.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],We.prototype,"disabled",2);c([f({type:Number})],We.prototype,"distance",2);c([f({type:Boolean,reflect:!0})],We.prototype,"open",2);c([f({type:Number})],We.prototype,"skidding",2);c([f()],We.prototype,"trigger",2);c([f({type:Boolean})],We.prototype,"hoist",2);c([L("open",{waitUntilFirstUpdate:!0})],We.prototype,"handleOpenChange",1);c([L(["content","distance","hoist","placement","skidding"])],We.prototype,"handleOptionsChange",1);c([L("disabled")],We.prototype,"handleDisabledChange",1);ae("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});ae("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var f_="sl-tooltip";We.define("sl-tooltip");B({tagName:f_,elementClass:We,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var m_=U`
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
`,g_=U`
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
`,Fe=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new gt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return A`
      <div
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${G({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${D(this.value)}
            .indeterminate=${Qs(this.indeterminate)}
            .checked=${Qs(this.checked)}
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
    `}};Fe.styles=[K,ri,g_];Fe.dependencies={"sl-icon":ue};c([I('input[type="checkbox"]')],Fe.prototype,"input",2);c([H()],Fe.prototype,"hasFocus",2);c([f()],Fe.prototype,"title",2);c([f()],Fe.prototype,"name",2);c([f()],Fe.prototype,"value",2);c([f({reflect:!0})],Fe.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Fe.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Fe.prototype,"checked",2);c([f({type:Boolean,reflect:!0})],Fe.prototype,"indeterminate",2);c([Zi("checked")],Fe.prototype,"defaultChecked",2);c([f({reflect:!0})],Fe.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Fe.prototype,"required",2);c([f({attribute:"help-text"})],Fe.prototype,"helpText",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Fe.prototype,"handleDisabledChange",1);c([L(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Fe.prototype,"handleStateChange",1);var v_=U`
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
`,ro=class extends V{constructor(){super(...arguments),this.localize=new ie(this)}render(){return A`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ro.styles=[K,v_];/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qp(e,t,r){return e?t(e):r==null?void 0:r(e)}var Pe=class Tu extends V{constructor(){super(...arguments),this.localize=new ie(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Re(this.childrenContainer);const{keyframes:t,options:r}=we(this,"tree-item.collapse",{dir:this.localize.dir()});await Ae(this.childrenContainer,Za(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&Tu.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Re(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=we(this,"tree-item.expand",{dir:this.localize.dir()});await Ae(this.childrenContainer,Za(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>Tu.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return A`
      <div
        part="base"
        class="${G({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${G({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${qp(this.loading,()=>A` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${qp(this.selectable,()=>A`
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
                ?checked="${Qs(this.selected)}"
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
    `}};Pe.styles=[K,m_];Pe.dependencies={"sl-checkbox":Fe,"sl-icon":ue,"sl-spinner":ro};c([H()],Pe.prototype,"indeterminate",2);c([H()],Pe.prototype,"isLeaf",2);c([H()],Pe.prototype,"loading",2);c([H()],Pe.prototype,"selectable",2);c([f({type:Boolean,reflect:!0})],Pe.prototype,"expanded",2);c([f({type:Boolean,reflect:!0})],Pe.prototype,"selected",2);c([f({type:Boolean,reflect:!0})],Pe.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Pe.prototype,"lazy",2);c([I("slot:not([name])")],Pe.prototype,"defaultSlot",2);c([I("slot[name=children]")],Pe.prototype,"childrenSlot",2);c([I(".tree-item__item")],Pe.prototype,"itemElement",2);c([I(".tree-item__children")],Pe.prototype,"childrenContainer",2);c([I(".tree-item__expand-button slot")],Pe.prototype,"expandButtonSlot",2);c([L("loading",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleLoadingChange",1);c([L("disabled")],Pe.prototype,"handleDisabledChange",1);c([L("selected")],Pe.prototype,"handleSelectedChange",1);c([L("expanded",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleExpandedChange",1);c([L("expanded",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleExpandAnimation",1);c([L("lazy",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleLazyChange",1);var Ii=Pe;ae("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});ae("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var y_="sl-tree-item";Ii.define("sl-tree-item");B({tagName:y_,elementClass:Ii,react:F,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var b_=U`
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
`;function Me(e,t,r){const s=i=>Object.is(i,-0)?0:i;return e<t?s(t):e>r?s(r):s(e)}function Qp(e,t=!1){function r(o){const n=o.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(u=>u.selected),l=n.every(u=>!u.selected&&!u.indeterminate);o.selected=a,o.indeterminate=!a&&!l}}function s(o){const n=o.parentElement;Ii.isTreeItem(n)&&(r(n),s(n))}function i(o){for(const n of o.getChildrenItems())n.selected=t?o.selected||n.selected:!n.disabled&&o.selected,i(n);t&&r(o)}i(e),s(e)}var ks=class extends V{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new ie(this),this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`),s=this.getExpandButtonIcon(t);s&&(r===null?e.append(s):r.hasAttribute("data-default")&&r.replaceWith(s))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(Ii.isTreeItem),s=[...t.removedNodes].filter(Ii.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ii.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const s=r.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${e}-icon`,s}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Qp(e);else if(this.selection==="single"||e.isLeaf){const s=this.getAllTreeItems();for(const i of s)i.selected=i===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(s=>!t.includes(s)))&&Promise.all(r.map(s=>s.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(i=>{var o;return["input","textarea"].includes((o=i==null?void 0:i.tagName)==null?void 0:o.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const i=t.findIndex(l=>l.matches(":focus")),o=t[i],n=l=>{const u=t[Me(l,0,t.length-1)];this.focusItem(u)},a=l=>{o.expanded=l};e.key==="ArrowDown"?n(i+1):e.key==="ArrowUp"?n(i-1):r&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?n(i+1):a(!0):r&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?n(i-1):a(!1):e.key==="Home"?n(0):e.key==="End"?n(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),s=e.composedPath().some(i=>{var o;return(o=i==null?void 0:i.classList)==null?void 0:o.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(s?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>Qp(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var s;if(r.disabled)return!1;const i=(s=r.parentElement)==null?void 0:s.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||t.has(i))&&t.add(r),!t.has(r)})}render(){return A`
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
    `}};ks.styles=[K,b_];c([I("slot:not([name])")],ks.prototype,"defaultSlot",2);c([I("slot[name=expand-icon]")],ks.prototype,"expandedIconSlot",2);c([I("slot[name=collapse-icon]")],ks.prototype,"collapsedIconSlot",2);c([f()],ks.prototype,"selection",2);c([L("selection")],ks.prototype,"handleSelectionChange",1);var w_="sl-tree";ks.define("sl-tree");B({tagName:w_,elementClass:ks,react:F,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var x_=U`
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
 */const hv="important",__=" !"+hv,yt=kn(class extends Cn{constructor(e){var t;if(super(e),e.type!==mr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const s=e[r];return s==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?r.removeProperty(s):r[s]=null);for(const s in t){const i=t[s];if(i!=null){this.ft.add(s);const o=typeof i=="string"&&i.endsWith(__);s.includes("-")||o?r.setProperty(s,o?i.slice(0,-11):i,o?hv:""):r[s]=i}}return Mt}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pu=class extends Cn{constructor(t){if(super(t),this.it=be,t.type!==mr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===be||t==null)return this._t=void 0,this.it=t;if(t===Mt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Pu.directiveName="unsafeHTML",Pu.resultType=1;const ma=kn(Pu);var it=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:s,width:i}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((s-e)/i*this.max,this.precision):this.roundToPrecision((e-r)/i*this.max,this.precision);return Me(o,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const i=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-i),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const i=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+i),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,A`
      <div
        part="base"
        class=${G({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
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
                  class=${G({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===s+1})}
                  role="presentation"
                >
                  <div
                    style=${yt({clipPath:e?`inset(0 ${(r-s)*100}% 0 0)`:`inset(0 0 0 ${(r-s)*100}%)`})}
                  >
                    ${ma(this.getSymbol(s+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${yt({clipPath:e?`inset(0 0 0 ${100-(r-s)*100}%)`:`inset(0 ${100-(r-s)*100}% 0 0)`})}
                  >
                    ${ma(this.getSymbol(s+1))}
                  </div>
                </span>
              `:A`
              <span
                class=${G({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===s+1,"rating__symbol--active":r>=s+1})}
                role="presentation"
              >
                ${ma(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};it.styles=[K,x_];it.dependencies={"sl-icon":ue};c([I(".rating")],it.prototype,"rating",2);c([H()],it.prototype,"hoverValue",2);c([H()],it.prototype,"isHovering",2);c([f()],it.prototype,"label",2);c([f({type:Number})],it.prototype,"value",2);c([f({type:Number})],it.prototype,"max",2);c([f({type:Number})],it.prototype,"precision",2);c([f({type:Boolean,reflect:!0})],it.prototype,"readonly",2);c([f({type:Boolean,reflect:!0})],it.prototype,"disabled",2);c([f()],it.prototype,"getSymbol",2);c([_n({passive:!0})],it.prototype,"handleTouchMove",1);c([L("hoverValue")],it.prototype,"handleHoverValueChange",1);c([L("isHovering")],it.prototype,"handleIsHoveringChange",1);var k_="sl-rating";it.define("sl-rating");B({tagName:k_,elementClass:it,react:F,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"});var C_=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Cs=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:s,value:i}=C_.find(o=>Math.abs(r)<o.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(r/i),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;s==="minute"?o=Qn("second"):s==="hour"?o=Qn("minute"):s==="day"?o=Qn("hour"):o=Qn("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return A` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};c([H()],Cs.prototype,"isoTime",2);c([H()],Cs.prototype,"relativeTime",2);c([f()],Cs.prototype,"date",2);c([f()],Cs.prototype,"format",2);c([f()],Cs.prototype,"numeric",2);c([f({type:Boolean})],Cs.prototype,"sync",2);function Qn(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}var S_="sl-relative-time";Cs.define("sl-relative-time");B({tagName:S_,elementClass:Cs,react:F,events:{},displayName:"SlRelativeTime"});var E_="sl-resize-observer";Xi.define("sl-resize-observer");B({tagName:E_,elementClass:Xi,react:F,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var $_=U`
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
`,Z=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new gt(this,"help-text","label"),this.localize=new ie(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>A`
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
          ${typeof r=="string"?ma(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return A`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return A``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),e==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Re(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=we(this,"select.show",{dir:this.localize.dir()});await Ae(this.popup.popup,e,t),this.currentOption&&Su(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Re(this);const{keyframes:e,options:t}=we(this,"select.hide",{dir:this.localize.dir()});await Ae(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,pt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,pt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return A`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
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
            class=${G({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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
    `}};Z.styles=[K,ri,$_];Z.dependencies={"sl-icon":ue,"sl-popup":oe,"sl-tag":Br};c([I(".select")],Z.prototype,"popup",2);c([I(".select__combobox")],Z.prototype,"combobox",2);c([I(".select__display-input")],Z.prototype,"displayInput",2);c([I(".select__value-input")],Z.prototype,"valueInput",2);c([I(".select__listbox")],Z.prototype,"listbox",2);c([H()],Z.prototype,"hasFocus",2);c([H()],Z.prototype,"displayLabel",2);c([H()],Z.prototype,"currentOption",2);c([H()],Z.prototype,"selectedOptions",2);c([H()],Z.prototype,"valueHasChanged",2);c([f()],Z.prototype,"name",2);c([H()],Z.prototype,"value",1);c([f({attribute:"value"})],Z.prototype,"defaultValue",2);c([f({reflect:!0})],Z.prototype,"size",2);c([f()],Z.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"multiple",2);c([f({attribute:"max-options-visible",type:Number})],Z.prototype,"maxOptionsVisible",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);c([f({type:Boolean})],Z.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"open",2);c([f({type:Boolean})],Z.prototype,"hoist",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"pill",2);c([f()],Z.prototype,"label",2);c([f({reflect:!0})],Z.prototype,"placement",2);c([f({attribute:"help-text"})],Z.prototype,"helpText",2);c([f({reflect:!0})],Z.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Z.prototype,"required",2);c([f()],Z.prototype,"getTag",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);c([L(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);c([L("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);ae("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ae("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var z_="sl-select";Z.define("sl-select");var A_=B({tagName:z_,elementClass:Z,react:F,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"}),Xp=A_,T_="sl-spinner";ro.define("sl-spinner");var P_=B({tagName:T_,elementClass:ro,react:F,events:{},displayName:"SlSpinner"}),Bs=P_,N_=U`
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
`,zl=class extends V{constructor(){super(...arguments),this.effect="none"}render(){return A`
      <div
        part="base"
        class=${G({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};zl.styles=[K,N_];c([f()],zl.prototype,"effect",2);var L_="sl-skeleton";zl.define("sl-skeleton");B({tagName:L_,elementClass:zl,react:F,events:{},displayName:"SlSkeleton"});var M_=U`
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
`,ot=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new gt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return A`
      <div
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${G({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${D(this.value)}
            .checked=${Qs(this.checked)}
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
    `}};ot.styles=[K,ri,M_];c([I('input[type="checkbox"]')],ot.prototype,"input",2);c([H()],ot.prototype,"hasFocus",2);c([f()],ot.prototype,"title",2);c([f()],ot.prototype,"name",2);c([f()],ot.prototype,"value",2);c([f({reflect:!0})],ot.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],ot.prototype,"checked",2);c([Zi("checked")],ot.prototype,"defaultChecked",2);c([f({reflect:!0})],ot.prototype,"form",2);c([f({type:Boolean,reflect:!0})],ot.prototype,"required",2);c([f({attribute:"help-text"})],ot.prototype,"helpText",2);c([L("checked",{waitUntilFirstUpdate:!0})],ot.prototype,"handleCheckedChange",1);c([L("disabled",{waitUntilFirstUpdate:!0})],ot.prototype,"handleDisabledChange",1);var I_="sl-switch";ot.define("sl-switch");B({tagName:I_,elementClass:ot,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var R_=U`
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
`;function Fo(e,t){function r(i){const o=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,a=o.left+n.scrollX,l=o.top+n.scrollY,u=i.pageX-a,h=i.pageY-l;t!=null&&t.onMove&&t.onMove(u,h)}function s(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",s),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",s),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var Yp=()=>null,St=class extends V{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new ie(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Yp,this.snapThreshold=12}toSnapFunction(e){const t=e.split(" ");return({pos:r,size:s,snapThreshold:i,isRtl:o,vertical:n})=>{let a=r,l=Number.POSITIVE_INFINITY;return t.forEach(u=>{let h;if(u.startsWith("repeat(")){const p=e.substring(7,e.length-1),g=p.endsWith("%"),v=Number.parseFloat(p),x=g?s*(v/100):v;h=Math.round((o&&!n?s-r:r)/x)*x}else u.endsWith("%")?h=s*(Number.parseFloat(u)/100):h=Number.parseFloat(u);o&&!n&&(h=s-h);const d=Math.abs(r-h);d<=i&&d<l&&(a=h,l=d)}),a}}set snap(e){this.snapValue=e??"",e?this.snapFunction=typeof e=="string"?this.toSnapFunction(e):e:this.snapFunction=Yp}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Fo(this,{onMove:(r,s)=>{var i;let o=this.vertical?s:r;this.primary==="end"&&(o=this.size-o),o=(i=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))!=null?i:o,this.position=Me(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const s=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=s})}this.position=Me(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",s=`
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
    `}};St.styles=[K,R_];c([I(".divider")],St.prototype,"divider",2);c([f({type:Number,reflect:!0})],St.prototype,"position",2);c([f({attribute:"position-in-pixels",type:Number})],St.prototype,"positionInPixels",2);c([f({type:Boolean,reflect:!0})],St.prototype,"vertical",2);c([f({type:Boolean,reflect:!0})],St.prototype,"disabled",2);c([f()],St.prototype,"primary",2);c([f({reflect:!0})],St.prototype,"snap",1);c([f({type:Number,attribute:"snap-threshold"})],St.prototype,"snapThreshold",2);c([L("position")],St.prototype,"handlePositionChange",1);c([L("positionInPixels")],St.prototype,"handlePositionInPixelsChange",1);c([L("vertical")],St.prototype,"handleVerticalChange",1);var O_="sl-split-panel";St.define("sl-split-panel");B({tagName:O_,elementClass:St,react:F,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var D_=U`
  :host {
    display: contents;
  }
`,cr=class extends V{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return A` <slot></slot> `}};cr.styles=[K,D_];c([f({reflect:!0})],cr.prototype,"attr",2);c([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],cr.prototype,"attrOldValue",2);c([f({attribute:"char-data",type:Boolean,reflect:!0})],cr.prototype,"charData",2);c([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],cr.prototype,"charDataOldValue",2);c([f({attribute:"child-list",type:Boolean,reflect:!0})],cr.prototype,"childList",2);c([f({type:Boolean,reflect:!0})],cr.prototype,"disabled",2);c([L("disabled")],cr.prototype,"handleDisabledChange",1);c([L("attr",{waitUntilFirstUpdate:!0}),L("attr-old-value",{waitUntilFirstUpdate:!0}),L("char-data",{waitUntilFirstUpdate:!0}),L("char-data-old-value",{waitUntilFirstUpdate:!0}),L("childList",{waitUntilFirstUpdate:!0})],cr.prototype,"handleChange",1);var V_="sl-mutation-observer";cr.define("sl-mutation-observer");B({tagName:V_,elementClass:cr,react:F,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});var F_=U`
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
`,so=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return A`
      <div
        part="base"
        class=${G({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${D(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${yt({width:`${this.value}%`})}>
          ${this.indeterminate?"":A` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};so.styles=[K,F_];c([f({type:Number,reflect:!0})],so.prototype,"value",2);c([f({type:Boolean,reflect:!0})],so.prototype,"indeterminate",2);c([f()],so.prototype,"label",2);var B_="sl-progress-bar";so.define("sl-progress-bar");B({tagName:B_,elementClass:so,react:F,events:{},displayName:"SlProgressBar"});var j_=U`
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
`,si=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,s=r-this.value/100*r;this.indicatorOffset=`${s}px`}}render(){return A`
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
    `}};si.styles=[K,j_];c([I(".progress-ring__indicator")],si.prototype,"indicator",2);c([H()],si.prototype,"indicatorOffset",2);c([f({type:Number,reflect:!0})],si.prototype,"value",2);c([f()],si.prototype,"label",2);var U_="sl-progress-ring";si.define("sl-progress-ring");B({tagName:U_,elementClass:si,react:F,events:{},displayName:"SlProgressRing"});var H_=U`
  :host {
    display: inline-block;
  }
`;let pv=null;class fv{}fv.render=function(e,t){pv(e,t)};self.QrCreator=fv;(function(e){function t(a,l,u,h){var d={},p=e(u,l);p.u(a),p.J(),h=h||0;var g=p.h(),v=p.h()+2*h;return d.text=a,d.level=l,d.version=u,d.O=v,d.a=function(x,C){return x-=h,C-=h,0>x||x>=g||0>C||C>=g?!1:p.a(x,C)},d}function r(a,l,u,h,d,p,g,v,x,C){function b(m,y,w,k,S,$,T){m?(a.lineTo(y+$,w+T),a.arcTo(y,w,k,S,p)):a.lineTo(y,w)}g?a.moveTo(l+p,u):a.moveTo(l,u),b(v,h,u,h,d,-p,0),b(x,h,d,l,d,0,-p),b(C,l,d,l,u,p,0),b(g,l,u,h,u,0,p)}function s(a,l,u,h,d,p,g,v,x,C){function b(m,y,w,k){a.moveTo(m+w,y),a.lineTo(m,y),a.lineTo(m,y+k),a.arcTo(m,y,m+w,y,p)}g&&b(l,u,p,p),v&&b(h,u,-p,p),x&&b(h,d,-p,-p),C&&b(l,d,p,-p)}function i(a,l){var u=l.fill;if(typeof u=="string")a.fillStyle=u;else{var h=u.type,d=u.colorStops;if(u=u.position.map(g=>Math.round(g*l.size)),h==="linear-gradient")var p=a.createLinearGradient.apply(a,u);else if(h==="radial-gradient")p=a.createRadialGradient.apply(a,u);else throw Error("Unsupported fill");d.forEach(([g,v])=>{p.addColorStop(g,v)}),a.fillStyle=p}}function o(a,l){e:{var u=l.text,h=l.v,d=l.N,p=l.K,g=l.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var v=t(u,h,d,g);break e}catch{}v=void 0}if(!v)return null;for(u=a.getContext("2d"),l.background&&(u.fillStyle=l.background,u.fillRect(l.left,l.top,l.size,l.size)),h=v.O,p=l.size/h,u.beginPath(),g=0;g<h;g+=1)for(d=0;d<h;d+=1){var x=u,C=l.left+d*p,b=l.top+g*p,m=g,y=d,w=v.a,k=C+p,S=b+p,$=m-1,T=m+1,M=y-1,z=y+1,ee=Math.floor(Math.min(.5,Math.max(0,l.R))*p),he=w(m,y),le=w($,M),fe=w($,y);$=w($,z);var R=w(m,z);z=w(T,z),y=w(T,y),T=w(T,M),m=w(m,M),C=Math.round(C),b=Math.round(b),k=Math.round(k),S=Math.round(S),he?r(x,C,b,k,S,ee,!fe&&!m,!fe&&!R,!y&&!R,!y&&!m):s(x,C,b,k,S,ee,fe&&m&&le,fe&&R&&$,y&&R&&z,y&&m&&T)}return i(u,l),u.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};pv=function(a,l){var u={};Object.assign(u,n,a),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,l instanceof HTMLCanvasElement?((l.width!==u.size||l.height!==u.size)&&(l.width=u.size,l.height=u.size),l.getContext("2d").clearRect(0,0,l.width,l.height),o(l,u)):(a=document.createElement("canvas"),a.width=u.size,a.height=u.size,u=o(a,u),l.appendChild(u))}})(function(){function e(l){var u=r.s(l);return{S:function(){return 4},b:function(){return u.length},write:function(h){for(var d=0;d<u.length;d+=1)h.put(u[d],8)}}}function t(){var l=[],u=0,h={B:function(){return l},c:function(d){return(l[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var g=0;g<p;g+=1)h.m((d>>>p-g-1&1)==1)},f:function(){return u},m:function(d){var p=Math.floor(u/8);l.length<=p&&l.push(0),d&&(l[p]|=128>>>u%8),u+=1}};return h}function r(l,u){function h(m,y){for(var w=-1;7>=w;w+=1)if(!(-1>=m+w||v<=m+w))for(var k=-1;7>=k;k+=1)-1>=y+k||v<=y+k||(g[m+w][y+k]=0<=w&&6>=w&&(k==0||k==6)||0<=k&&6>=k&&(w==0||w==6)||2<=w&&4>=w&&2<=k&&4>=k)}function d(m,y){for(var w=v=4*l+17,k=Array(w),S=0;S<w;S+=1){k[S]=Array(w);for(var $=0;$<w;$+=1)k[S][$]=null}for(g=k,h(0,0),h(v-7,0),h(0,v-7),w=o.G(l),k=0;k<w.length;k+=1)for(S=0;S<w.length;S+=1){$=w[k];var T=w[S];if(g[$][T]==null)for(var M=-2;2>=M;M+=1)for(var z=-2;2>=z;z+=1)g[$+M][T+z]=M==-2||M==2||z==-2||z==2||M==0&&z==0}for(w=8;w<v-8;w+=1)g[w][6]==null&&(g[w][6]=w%2==0);for(w=8;w<v-8;w+=1)g[6][w]==null&&(g[6][w]=w%2==0);for(w=o.w(p<<3|y),k=0;15>k;k+=1)S=!m&&(w>>k&1)==1,g[6>k?k:8>k?k+1:v-15+k][8]=S,g[8][8>k?v-k-1:9>k?15-k:14-k]=S;if(g[v-8][8]=!m,7<=l){for(w=o.A(l),k=0;18>k;k+=1)S=!m&&(w>>k&1)==1,g[Math.floor(k/3)][k%3+v-8-3]=S;for(k=0;18>k;k+=1)S=!m&&(w>>k&1)==1,g[k%3+v-8-3][Math.floor(k/3)]=S}if(x==null){for(m=a.I(l,p),w=t(),k=0;k<C.length;k+=1)S=C[k],w.put(4,4),w.put(S.b(),o.f(4,l)),S.write(w);for(k=S=0;k<m.length;k+=1)S+=m[k].j;if(w.f()>8*S)throw Error("code length overflow. ("+w.f()+">"+8*S+")");for(w.f()+4<=8*S&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*S)&&(w.put(236,8),!(w.f()>=8*S));)w.put(17,8);var ee=0;for(S=k=0,$=Array(m.length),T=Array(m.length),M=0;M<m.length;M+=1){var he=m[M].j,le=m[M].o-he;for(k=Math.max(k,he),S=Math.max(S,le),$[M]=Array(he),z=0;z<$[M].length;z+=1)$[M][z]=255&w.B()[z+ee];for(ee+=he,z=o.C(le),he=s($[M],z.b()-1).l(z),T[M]=Array(z.b()-1),z=0;z<T[M].length;z+=1)le=z+he.b()-T[M].length,T[M][z]=0<=le?he.c(le):0}for(z=w=0;z<m.length;z+=1)w+=m[z].o;for(w=Array(w),z=ee=0;z<k;z+=1)for(M=0;M<m.length;M+=1)z<$[M].length&&(w[ee]=$[M][z],ee+=1);for(z=0;z<S;z+=1)for(M=0;M<m.length;M+=1)z<T[M].length&&(w[ee]=T[M][z],ee+=1);x=w}for(m=x,w=-1,k=v-1,S=7,$=0,y=o.F(y),T=v-1;0<T;T-=2)for(T==6&&--T;;){for(M=0;2>M;M+=1)g[k][T-M]==null&&(z=!1,$<m.length&&(z=(m[$]>>>S&1)==1),y(k,T-M)&&(z=!z),g[k][T-M]=z,--S,S==-1&&($+=1,S=7));if(k+=w,0>k||v<=k){k-=w,w=-w;break}}}var p=i[u],g=null,v=0,x=null,C=[],b={u:function(m){m=e(m),C.push(m),x=null},a:function(m,y){if(0>m||v<=m||0>y||v<=y)throw Error(m+","+y);return g[m][y]},h:function(){return v},J:function(){for(var m=0,y=0,w=0;8>w;w+=1){d(!0,w);var k=o.D(b);(w==0||m>k)&&(m=k,y=w)}d(!1,y)}};return b}function s(l,u){if(typeof l.length>"u")throw Error(l.length+"/"+u);var h=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var g=Array(l.length-p+u),v=0;v<l.length-p;v+=1)g[v]=l[v+p];return g}(),d={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var g=Array(d.b()+p.b()-1),v=0;v<d.b();v+=1)for(var x=0;x<p.b();x+=1)g[v+x]^=n.i(n.g(d.c(v))+n.g(p.c(x)));return s(g,0)},l:function(p){if(0>d.b()-p.b())return d;for(var g=n.g(d.c(0))-n.g(p.c(0)),v=Array(d.b()),x=0;x<d.b();x+=1)v[x]=d.c(x);for(x=0;x<p.b();x+=1)v[x]^=n.i(n.g(p.c(x))+g);return s(v,0).l(p)}};return d}r.s=function(l){for(var u=[],h=0;h<l.length;h++){var d=l.charCodeAt(h);128>d?u.push(d):2048>d?u.push(192|d>>6,128|d&63):55296>d||57344<=d?u.push(224|d>>12,128|d>>6&63,128|d&63):(h++,d=65536+((d&1023)<<10|l.charCodeAt(h)&1023),u.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return u};var i={L:1,M:0,Q:3,H:2},o=function(){function l(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(d){for(var p=d<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return d<<12|p},G:function(d){return u[d-1]},F:function(d){switch(d){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=s([1],0),g=0;g<d;g+=1)p=p.multiply(s([1,n.i(g)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),g=0,v=0;v<p;v+=1)for(var x=0;x<p;x+=1){for(var C=0,b=d.a(v,x),m=-1;1>=m;m+=1)if(!(0>v+m||p<=v+m))for(var y=-1;1>=y;y+=1)0>x+y||p<=x+y||(m!=0||y!=0)&&b==d.a(v+m,x+y)&&(C+=1);5<C&&(g+=3+C-5)}for(v=0;v<p-1;v+=1)for(x=0;x<p-1;x+=1)C=0,d.a(v,x)&&(C+=1),d.a(v+1,x)&&(C+=1),d.a(v,x+1)&&(C+=1),d.a(v+1,x+1)&&(C+=1),(C==0||C==4)&&(g+=3);for(v=0;v<p;v+=1)for(x=0;x<p-6;x+=1)d.a(v,x)&&!d.a(v,x+1)&&d.a(v,x+2)&&d.a(v,x+3)&&d.a(v,x+4)&&!d.a(v,x+5)&&d.a(v,x+6)&&(g+=40);for(x=0;x<p;x+=1)for(v=0;v<p-6;v+=1)d.a(v,x)&&!d.a(v+1,x)&&d.a(v+2,x)&&d.a(v+3,x)&&d.a(v+4,x)&&!d.a(v+5,x)&&d.a(v+6,x)&&(g+=40);for(x=C=0;x<p;x+=1)for(v=0;v<p;v+=1)d.a(v,x)&&(C+=1);return g+=Math.abs(100*C/p/p-50)/5*10}};return h}(),n=function(){for(var l=Array(256),u=Array(256),h=0;8>h;h+=1)l[h]=1<<h;for(h=8;256>h;h+=1)l[h]=l[h-4]^l[h-5]^l[h-6]^l[h-8];for(h=0;255>h;h+=1)u[l[h]]=h;return{g:function(d){if(1>d)throw Error("glog("+d+")");return u[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return l[d]}}}(),a=function(){function l(d,p){switch(p){case i.L:return u[4*(d-1)];case i.M:return u[4*(d-1)+1];case i.Q:return u[4*(d-1)+2];case i.H:return u[4*(d-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(d,p){var g=l(d,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=g.length/3,p=[];for(var v=0;v<d;v+=1)for(var x=g[3*v],C=g[3*v+1],b=g[3*v+2],m=0;m<x;m+=1){var y=b,w={};w.o=C,w.j=y,p.push(w)}return p}};return h}();return r}());const W_=QrCreator;var Xt=class extends V{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&W_.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return A`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${yt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Xt.styles=[K,H_];c([I("canvas")],Xt.prototype,"canvas",2);c([f()],Xt.prototype,"value",2);c([f()],Xt.prototype,"label",2);c([f({type:Number})],Xt.prototype,"size",2);c([f()],Xt.prototype,"fill",2);c([f()],Xt.prototype,"background",2);c([f({type:Number})],Xt.prototype,"radius",2);c([f({attribute:"error-correction"})],Xt.prototype,"errorCorrection",2);c([L(["background","errorCorrection","fill","radius","size","value"])],Xt.prototype,"generate",1);var G_="sl-qr-code";Xt.define("sl-qr-code");B({tagName:G_,elementClass:Xt,react:F,events:{},displayName:"SlQrCode"});var mv=U`
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
`,K_=U`
  ${mv}

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
`,Yt=class extends V{constructor(){super(...arguments),this.hasSlotController=new gt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Oo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${G({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};Yt.styles=[K,K_];c([I(".button")],Yt.prototype,"input",2);c([I(".hidden-input")],Yt.prototype,"hiddenInput",2);c([H()],Yt.prototype,"hasFocus",2);c([f({type:Boolean,reflect:!0})],Yt.prototype,"checked",2);c([f()],Yt.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);c([f({reflect:!0})],Yt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Yt.prototype,"pill",2);c([L("disabled",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleDisabledChange",1);var q_="sl-radio-button";Yt.define("sl-radio-button");B({tagName:q_,elementClass:Yt,react:F,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var Q_=U`
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
`,ur=class extends V{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return A`
      <span
        part="base"
        class=${G({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?A` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};ur.styles=[K,Q_];ur.dependencies={"sl-icon":ue};c([H()],ur.prototype,"checked",2);c([H()],ur.prototype,"hasFocus",2);c([f()],ur.prototype,"value",2);c([f({reflect:!0})],ur.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ur.prototype,"disabled",2);c([L("checked")],ur.prototype,"handleCheckedChange",1);c([L("disabled",{waitUntilFirstUpdate:!0})],ur.prototype,"handleDisabledChange",1);var X_="sl-radio";ur.define("sl-radio");B({tagName:X_,elementClass:ur,react:F,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var Y_=U`
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
`,xe=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this),this.hasSlotController=new gt(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",o=t*e;if(i){const n=`${t-o}px + ${e} * ${s}`;this.output.style.translate=`calc((${n} - ${r/2}px - ${s} / 2))`}else{const n=`${o}px - ${e} * ${s}`;this.output.style.translate=`calc(${n} - ${r/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t;return A`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":s})}
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
            class=${G({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              .value=${Qs(this.value.toString())}
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
    `}};xe.styles=[K,ri,Y_];c([I(".range__control")],xe.prototype,"input",2);c([I(".range__tooltip")],xe.prototype,"output",2);c([H()],xe.prototype,"hasFocus",2);c([H()],xe.prototype,"hasTooltip",2);c([f()],xe.prototype,"title",2);c([f()],xe.prototype,"name",2);c([f({type:Number})],xe.prototype,"value",2);c([f()],xe.prototype,"label",2);c([f({attribute:"help-text"})],xe.prototype,"helpText",2);c([f({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);c([f({type:Number})],xe.prototype,"min",2);c([f({type:Number})],xe.prototype,"max",2);c([f({type:Number})],xe.prototype,"step",2);c([f()],xe.prototype,"tooltip",2);c([f({attribute:!1})],xe.prototype,"tooltipFormatter",2);c([f({reflect:!0})],xe.prototype,"form",2);c([Zi()],xe.prototype,"defaultValue",2);c([_n({passive:!0})],xe.prototype,"handleThumbDragStart",1);c([L("value",{waitUntilFirstUpdate:!0})],xe.prototype,"handleValueChange",1);c([L("disabled",{waitUntilFirstUpdate:!0})],xe.prototype,"handleDisabledChange",1);c([L("hasTooltip",{waitUntilFirstUpdate:!0})],xe.prototype,"syncRange",1);var Z_="sl-range";xe.define("sl-range");B({tagName:Z_,elementClass:xe,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var J_=U`
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
`,ek=U`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ss=class extends V{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=yo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=yo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=yo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=yo(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),s=yo(t);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",r===0),s.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),s.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return A`
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
    `}};Ss.styles=[K,ek];c([I("slot")],Ss.prototype,"defaultSlot",2);c([H()],Ss.prototype,"disableRole",2);c([f()],Ss.prototype,"label",2);function yo(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var Ye=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this),this.hasSlotController=new gt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?fx:e?px:xl}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),s=this.value;!t||t.disabled||(this.value=t.value,r.forEach(i=>i.checked=i===t),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(a=>!a.disabled),s=(t=r.find(a=>a.checked))!=null?t:r[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let n=r.indexOf(s)+i;n<0&&(n=r.length-1),n>r.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=r[n].value,r[n].checked=!0,this.hasButtonGroup?r[n].shadowRoot.querySelector("button").focus():(r[n].setAttribute("tabindex","0"),r[n].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=r.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(s=>s.checked))if(this.hasButtonGroup){const s=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");s&&s.setAttribute("tabindex","0")}else r[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const s=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),r=t.find(o=>o.checked),s=t.find(o=>!o.disabled),i=r||s;i&&i.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,i=A`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return A`
      <fieldset
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":s})}
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
    `}};Ye.styles=[K,ri,J_];Ye.dependencies={"sl-button-group":Ss};c([I("slot:not([name])")],Ye.prototype,"defaultSlot",2);c([I(".radio-group__validation-input")],Ye.prototype,"validationInput",2);c([H()],Ye.prototype,"hasButtonGroup",2);c([H()],Ye.prototype,"errorMessage",2);c([H()],Ye.prototype,"defaultValue",2);c([f()],Ye.prototype,"label",2);c([f({attribute:"help-text"})],Ye.prototype,"helpText",2);c([f()],Ye.prototype,"name",2);c([f({reflect:!0})],Ye.prototype,"value",2);c([f({reflect:!0})],Ye.prototype,"size",2);c([f({reflect:!0})],Ye.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Ye.prototype,"required",2);c([L("size",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleSizeChange",1);c([L("value")],Ye.prototype,"handleValueChange",1);var tk="sl-radio-group";Ye.define("sl-radio-group");B({tagName:tk,elementClass:Ye,react:F,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var rk=U`
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
`,Es=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),Fo(this.base,{onMove:s=>{this.position=parseFloat(Me(s/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const s=e.shiftKey?10:1;let i=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(i-=s),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(i+=s),e.key==="Home"&&(i=0),e.key==="End"&&(i=100),i=Me(i,0,100),this.position=i}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return A`
      <div
        part="base"
        id="image-comparer"
        class=${G({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${yt({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${yt({left:e?`${100-this.position}%`:`${this.position}%`})}
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
    `}};Es.styles=[K,rk];Es.scopedElement={"sl-icon":ue};c([I(".image-comparer")],Es.prototype,"base",2);c([I(".image-comparer__handle")],Es.prototype,"handle",2);c([f({type:Number,reflect:!0})],Es.prototype,"position",2);c([L("position",{waitUntilFirstUpdate:!0})],Es.prototype,"handlePositionChange",1);var sk="sl-image-comparer";Es.define("sl-image-comparer");B({tagName:sk,elementClass:Es,react:F,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var ik=U`
  :host {
    display: block;
  }
`,yc=new Map;function ok(e,t="cors"){const r=yc.get(e);if(r!==void 0)return Promise.resolve(r);const s=fetch(e,{mode:t}).then(async i=>{const o={ok:i.ok,status:i.status,html:await i.text()};return yc.set(e,o),o});return yc.set(e,s),s}var ii=class extends V{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await ok(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return A`<slot></slot>`}};ii.styles=[K,ik];c([f()],ii.prototype,"src",2);c([f()],ii.prototype,"mode",2);c([f({attribute:"allow-scripts",type:Boolean})],ii.prototype,"allowScripts",2);c([L("src")],ii.prototype,"handleSrcChange",1);var nk="sl-include";ii.define("sl-include");B({tagName:nk,elementClass:ii,react:F,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var ak=U`
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
`,Al=class extends V{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath(),s=r.find(a=>{var l;return t.includes(((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!s||r.find(a=>{var l;return((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const n=s;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let s=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?s++:e.key==="ArrowUp"?s--:e.key==="Home"?s=0:e.key==="End"&&(s=t.length-1),s<0&&(s=t.length-1),s>t.length-1&&(s=0),this.setCurrentItem(t[s]),t[s].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return A`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Al.styles=[K,ak];c([I("slot")],Al.prototype,"defaultSlot",2);var lk="sl-menu";Al.define("sl-menu");B({tagName:lk,elementClass:Al,react:F,events:{onSlSelect:"sl-select"},displayName:"SlMenu"});var ck=U`
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
`,X=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new gt(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,s="preserve"){const i=t??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(e,i,o,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return A`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
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
            class=${G({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              .value=${Qs(this.value)}
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
    `}};X.styles=[K,ri,ck];X.dependencies={"sl-icon":ue};c([I(".input__control")],X.prototype,"input",2);c([H()],X.prototype,"hasFocus",2);c([f()],X.prototype,"title",2);c([f({reflect:!0})],X.prototype,"type",2);c([f()],X.prototype,"name",2);c([f()],X.prototype,"value",2);c([Zi()],X.prototype,"defaultValue",2);c([f({reflect:!0})],X.prototype,"size",2);c([f({type:Boolean,reflect:!0})],X.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],X.prototype,"pill",2);c([f()],X.prototype,"label",2);c([f({attribute:"help-text"})],X.prototype,"helpText",2);c([f({type:Boolean})],X.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],X.prototype,"disabled",2);c([f()],X.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],X.prototype,"readonly",2);c([f({attribute:"password-toggle",type:Boolean})],X.prototype,"passwordToggle",2);c([f({attribute:"password-visible",type:Boolean})],X.prototype,"passwordVisible",2);c([f({attribute:"no-spin-buttons",type:Boolean})],X.prototype,"noSpinButtons",2);c([f({reflect:!0})],X.prototype,"form",2);c([f({type:Boolean,reflect:!0})],X.prototype,"required",2);c([f()],X.prototype,"pattern",2);c([f({type:Number})],X.prototype,"minlength",2);c([f({type:Number})],X.prototype,"maxlength",2);c([f()],X.prototype,"min",2);c([f()],X.prototype,"max",2);c([f()],X.prototype,"step",2);c([f()],X.prototype,"autocapitalize",2);c([f()],X.prototype,"autocorrect",2);c([f()],X.prototype,"autocomplete",2);c([f({type:Boolean})],X.prototype,"autofocus",2);c([f()],X.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],X.prototype,"spellcheck",2);c([f()],X.prototype,"inputmode",2);c([L("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);c([L("step",{waitUntilFirstUpdate:!0})],X.prototype,"handleStepChange",1);c([L("value",{waitUntilFirstUpdate:!0})],X.prototype,"handleValueChange",1);var uk="sl-input";X.define("sl-input");B({tagName:uk,elementClass:X,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"});var dk=U`
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
 */const Bo=(e,t)=>{var s;const r=e._$AN;if(r===void 0)return!1;for(const i of r)(s=i._$AO)==null||s.call(i,t,!1),Bo(i,t);return!0},Ja=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},gv=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),fk(t)}};function hk(e){this._$AN!==void 0?(Ja(this),this._$AM=e,gv(this)):this._$AM=e}function pk(e,t=!1,r=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let o=r;o<s.length;o++)Bo(s[o],!1),Ja(s[o]);else s!=null&&(Bo(s,!1),Ja(s));else Bo(this,e)}const fk=e=>{e.type==mr.CHILD&&(e._$AP??(e._$AP=pk),e._$AQ??(e._$AQ=hk))};class mk extends Cn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,s){super._$AT(t,r,s),gv(this),this.isConnected=t._$AU}_$AO(t,r=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),r&&(Bo(this,t),Ja(this))}setValue(t){if(Qg(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gk=()=>new vk;class vk{}const bc=new WeakMap,yk=kn(class extends mk{render(e){return be}update(e,[t]){var s;const r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=(s=e.options)==null?void 0:s.host,this.rt(this.ct=e.element)),be}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=bc.get(t);r===void 0&&(r=new WeakMap,bc.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=bc.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var bk=class{constructor(e,t){this.popupRef=gk(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=r=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${r.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${r.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break}},this.handleClick=r=>{var s;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(s=r.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},this.handlePopupReposition=()=>{const r=this.host.renderRoot.querySelector("slot[name='submenu']"),s=r==null?void 0:r.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],i=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:o,top:n,width:a,height:l}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const s of t.assignedElements())if(r=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let s=1;s!==r.length;++s)r[s].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((i,o)=>{var n;const a=(n=t.get(o))!=null?n:new CSSUnitValue(0,"px"),u=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return i-u.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?A`
      <sl-popup
        ${yk(this.popupRef)}
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
    `:A` <slot name="submenu" hidden></slot> `}},Et=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new gt(this,"submenu"),this.submenuController=new bk(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return mx(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return A`
      <div
        id="anchor"
        part="base"
        class=${G({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
    `}};Et.styles=[K,dk];Et.dependencies={"sl-icon":ue,"sl-popup":oe,"sl-spinner":ro};c([I("slot:not([name])")],Et.prototype,"defaultSlot",2);c([I(".menu-item")],Et.prototype,"menuItem",2);c([f()],Et.prototype,"type",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"checked",2);c([f()],Et.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);c([L("checked")],Et.prototype,"handleCheckedChange",1);c([L("disabled")],Et.prototype,"handleDisabledChange",1);c([L("type")],Et.prototype,"handleTypeChange",1);var wk="sl-menu-item";Et.define("sl-menu-item");B({tagName:wk,elementClass:Et,react:F,events:{},displayName:"SlMenuItem"});var xk=U`
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
`,Ud=class extends V{render(){return A` <slot part="base" class="menu-label"></slot> `}};Ud.styles=[K,xk];var _k="sl-menu-label";Ud.define("sl-menu-label");B({tagName:_k,elementClass:Ud,react:F,events:{},displayName:"SlMenuLabel"});var kk=U`
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
`,Vt=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(t+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(t+=r.textContent)}),t.trim()}render(){return A`
      <div
        part="base"
        class=${G({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Vt.styles=[K,kk];Vt.dependencies={"sl-icon":ue};c([I(".option__label")],Vt.prototype,"defaultSlot",2);c([H()],Vt.prototype,"current",2);c([H()],Vt.prototype,"selected",2);c([H()],Vt.prototype,"hasHover",2);c([f({reflect:!0})],Vt.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Vt.prototype,"disabled",2);c([L("disabled")],Vt.prototype,"handleDisabledChange",1);c([L("selected")],Vt.prototype,"handleSelectedChange",1);c([L("value")],Vt.prototype,"handleValueChange",1);var Ck="sl-option";Vt.define("sl-option");var Sk=B({tagName:Ck,elementClass:Vt,react:F,events:{},displayName:"SlOption"}),Xn=Sk,Ek="sl-popup";oe.define("sl-popup");B({tagName:Ek,elementClass:oe,react:F,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var $k=U`
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
`,Sn=class extends V{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Sn.styles=[K,$k];c([f({type:Boolean,reflect:!0})],Sn.prototype,"vertical",2);c([L("vertical")],Sn.prototype,"handleVerticalChange",1);var zk="sl-divider";Sn.define("sl-divider");B({tagName:zk,elementClass:Sn,react:F,events:{},displayName:"SlDivider"});var Ak=U`
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
`;function*Hd(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Sw(Hd(e.shadowRoot.activeElement))))}function vv(){return[...Hd()].pop()}var Zp=new WeakMap;function yv(e){let t=Zp.get(e);return t||(t=window.getComputedStyle(e,null),Zp.set(e,t)),t}function Tk(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=yv(e);return t.visibility!=="hidden"&&t.display!=="none"}function Pk(e){const t=yv(e),{overflowY:r,overflowX:s}=t;return r==="scroll"||s==="scroll"?!0:r!=="auto"||s!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&s==="auto"}function Nk(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const o=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute("name")}"]`,a=o.querySelector(`${n}:checked`);return a?a===e:o.querySelector(n)===e}return Tk(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Pk(e):!1}function Lk(e){var t,r;const s=Nu(e),i=(t=s[0])!=null?t:null,o=(r=s[s.length-1])!=null?r:null;return{start:i,end:o}}function Mk(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function Nu(e){const t=new WeakMap,r=[];function s(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!r.includes(i)&&Nk(i)&&r.push(i),i instanceof HTMLSlotElement&&Mk(i,e)&&i.assignedElements({flatten:!0}).forEach(o=>{s(o)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&s(i.shadowRoot)}for(const o of i.children)s(o)}return s(e),r.sort((i,o)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}var bo=[],bv=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=vv();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=Nu(this.element);let o=i.findIndex(a=>a===s);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){o+n>=i.length?o=0:o+n<0?o=i.length-1:o+=n,this.previousFocus=this.currentFocus;const a=i[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[...Hd()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){bo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){bo=bo.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return bo[bo.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Nu(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],s=this.tabDirection==="forward"?t:r;typeof(s==null?void 0:s.focus)=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},Wd=e=>{var t;const{activeElement:r}=document;r&&e.contains(r)&&((t=document.activeElement)==null||t.blur())};function Jp(e){return e.charAt(0).toUpperCase()+e.slice(1)}var $t=class extends V{constructor(){super(...arguments),this.hasSlotController=new gt(this,"footer"),this.localize=new ie(this),this.modal=new bv(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Do(this)))}disconnectedCallback(){super.disconnectedCallback(),Vo(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=we(this,"drawer.denyClose",{dir:this.localize.dir()});Ae(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Do(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Re(this.drawer),Re(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=we(this,`drawer.show${Jp(this.placement)}`,{dir:this.localize.dir()}),r=we(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Ae(this.panel,t.keyframes,t.options),Ae(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{Wd(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Vo(this)),await Promise.all([Re(this.drawer),Re(this.overlay)]);const e=we(this,`drawer.hide${Jp(this.placement)}`,{dir:this.localize.dir()}),t=we(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ae(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ae(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Do(this)),this.open&&this.contained&&(this.modal.deactivate(),Vo(this))}async show(){if(!this.open)return this.open=!0,pt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pt(this,"sl-after-hide")}render(){return A`
      <div
        part="base"
        class=${G({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
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
    `}};$t.styles=[K,Ak];$t.dependencies={"sl-icon-button":Ve};c([I(".drawer")],$t.prototype,"drawer",2);c([I(".drawer__panel")],$t.prototype,"panel",2);c([I(".drawer__overlay")],$t.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],$t.prototype,"open",2);c([f({reflect:!0})],$t.prototype,"label",2);c([f({reflect:!0})],$t.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],$t.prototype,"contained",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],$t.prototype,"noHeader",2);c([L("open",{waitUntilFirstUpdate:!0})],$t.prototype,"handleOpenChange",1);c([L("contained",{waitUntilFirstUpdate:!0})],$t.prototype,"handleNoModalChange",1);ae("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});ae("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});ae("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});ae("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ae("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});ae("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});ae("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ae("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Ik="sl-drawer";$t.define("sl-drawer");B({tagName:Ik,elementClass:$t,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var Rk=U`
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
`,Ze=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const r=(s,i)=>{if(!s)return null;const o=s.closest(i);if(o)return o;const n=s.getRootNode();return n instanceof ShadowRoot?r(n.host,i):null};setTimeout(()=>{var s;const i=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?vv():document.activeElement;(!this.containingElement||r(i,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),s=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(s),s.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(s=>Lk(s).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,pt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Re(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=we(this,"dropdown.show",{dir:this.localize.dir()});await Ae(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Re(this);const{keyframes:e,options:t}=we(this,"dropdown.hide",{dir:this.localize.dir()});await Ae(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return A`
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
        class=${G({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Ze.styles=[K,Rk];Ze.dependencies={"sl-popup":oe};c([I(".dropdown")],Ze.prototype,"popup",2);c([I(".dropdown__trigger")],Ze.prototype,"trigger",2);c([I(".dropdown__panel")],Ze.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],Ze.prototype,"open",2);c([f({reflect:!0})],Ze.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);c([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ze.prototype,"stayOpenOnSelect",2);c([f({attribute:!1})],Ze.prototype,"containingElement",2);c([f({type:Number})],Ze.prototype,"distance",2);c([f({type:Number})],Ze.prototype,"skidding",2);c([f({type:Boolean})],Ze.prototype,"hoist",2);c([f({reflect:!0})],Ze.prototype,"sync",2);c([L("open",{waitUntilFirstUpdate:!0})],Ze.prototype,"handleOpenChange",1);ae("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ae("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Ok="sl-dropdown";Ze.define("sl-dropdown");B({tagName:Ok,elementClass:Ze,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"});var zt=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return A`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};c([f()],zt.prototype,"date",2);c([f()],zt.prototype,"weekday",2);c([f()],zt.prototype,"era",2);c([f()],zt.prototype,"year",2);c([f()],zt.prototype,"month",2);c([f()],zt.prototype,"day",2);c([f()],zt.prototype,"hour",2);c([f()],zt.prototype,"minute",2);c([f()],zt.prototype,"second",2);c([f({attribute:"time-zone-name"})],zt.prototype,"timeZoneName",2);c([f({attribute:"time-zone"})],zt.prototype,"timeZone",2);c([f({attribute:"hour-format"})],zt.prototype,"hourFormat",2);var Dk="sl-format-date";zt.define("sl-format-date");B({tagName:Dk,elementClass:zt,react:F,events:{},displayName:"SlFormatDate"});var En=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),i=r[s]+this.unit,o=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};c([f({type:Number})],En.prototype,"value",2);c([f()],En.prototype,"unit",2);c([f()],En.prototype,"display",2);var Vk="sl-format-bytes";En.define("sl-format-bytes");B({tagName:Vk,elementClass:En,react:F,events:{},displayName:"SlFormatBytes"});var Zt=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([f({type:Number})],Zt.prototype,"value",2);c([f()],Zt.prototype,"type",2);c([f({attribute:"no-grouping",type:Boolean})],Zt.prototype,"noGrouping",2);c([f()],Zt.prototype,"currency",2);c([f({attribute:"currency-display"})],Zt.prototype,"currencyDisplay",2);c([f({attribute:"minimum-integer-digits",type:Number})],Zt.prototype,"minimumIntegerDigits",2);c([f({attribute:"minimum-fraction-digits",type:Number})],Zt.prototype,"minimumFractionDigits",2);c([f({attribute:"maximum-fraction-digits",type:Number})],Zt.prototype,"maximumFractionDigits",2);c([f({attribute:"minimum-significant-digits",type:Number})],Zt.prototype,"minimumSignificantDigits",2);c([f({attribute:"maximum-significant-digits",type:Number})],Zt.prototype,"maximumSignificantDigits",2);var Fk="sl-format-number";Zt.define("sl-format-number");B({tagName:Fk,elementClass:Zt,react:F,events:{},displayName:"SlFormatNumber"});var Bk="sl-icon";ue.define("sl-icon");B({tagName:Bk,elementClass:ue,react:F,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"});var jk="sl-icon-button";Ve.define("sl-icon-button");B({tagName:jk,elementClass:Ve,react:F,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"});var Uk="sl-button-group";Ss.define("sl-button-group");B({tagName:Uk,elementClass:Ss,react:F,events:{},displayName:"SlButtonGroup"});var Hk=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Wk=U`
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
 */function*Gk(e,t){if(e!==void 0){let r=0;for(const s of e)yield t(s,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Kk(e,t,r=1){const s=t===void 0?0:e;t??(t=e);for(let i=s;r>0?i<t:t<i;i+=r)yield i}var Ee=class extends V{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Hk(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new ie(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const s=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==s||r!==i)&&(e.scrollTo({left:s,top:i,behavior:Au()?"auto":"smooth"}),await pt(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:s}=this,i=s?e/r:(e-t)/r+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),r=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+r*r)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",s=t.closest('[part~="pagination-item"]')!==null,i=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",o=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),o&&this.previous(),i&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const a of t){const l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}const r=t.find(a=>a.isIntersecting);if(!r)return;const s=this.getSlides({excludeClones:!1}),i=this.getSlides().length,o=s.indexOf(r.target),n=this.loop?o-this.slidesPerPage:o;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+i)%i,!this.scrolling&&this.loop&&r.target.hasAttribute("data-clone")){const a=Number(r.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("role","group"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),this.pagination&&(e.setAttribute("id",`slide-${t+1}`),e.setAttribute("role","tabpanel"),e.removeAttribute("aria-label"),e.setAttribute("aria-labelledby",`tab-${t+1}`)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),s=e.slice(0,t);r.reverse().forEach((i,o)=>{const n=i.cloneNode(!0);n.setAttribute("data-clone",String(e.length-o-1)),this.prepend(n)}),s.forEach((i,o)=>{const n=i.cloneNode(!0);n.setAttribute("data-clone",String(o)),this.append(n)})}handleSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,s)=>{(s+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:s}=this,i=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!i.length)return;const n=s?(e+i.length)%i.length:Me(e,0,i.length-r);this.activeSlide=n;const a=this.localize.dir()==="rtl",l=Me(e+(s?r:0)+(a?r-1:0),0,o.length-1),u=o[l];this.scrollToSlide(u,Au()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const r=this.scrollContainer,s=r.getBoundingClientRect(),i=e.getBoundingClientRect(),o=i.left-s.left,n=i.top-s.top;o||n?(this.pendingSlideChange=!0,r.scrollTo({left:o+r.scrollLeft,top:n+r.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this,r=this.getPageCount(),s=this.getCurrentPage(),i=this.canScrollPrev(),o=this.canScrollNext(),n=this.localize.dir()==="ltr";return A`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${G({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
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
                  class="${G({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!i})}"
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
                  class=${G({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
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
                ${Gk(Kk(r),a=>{const l=a===s;return A`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${G({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
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
    `}};Ee.styles=[K,Wk];Ee.dependencies={"sl-icon":ue};c([f({type:Boolean,reflect:!0})],Ee.prototype,"loop",2);c([f({type:Boolean,reflect:!0})],Ee.prototype,"navigation",2);c([f({type:Boolean,reflect:!0})],Ee.prototype,"pagination",2);c([f({type:Boolean,reflect:!0})],Ee.prototype,"autoplay",2);c([f({type:Number,attribute:"autoplay-interval"})],Ee.prototype,"autoplayInterval",2);c([f({type:Number,attribute:"slides-per-page"})],Ee.prototype,"slidesPerPage",2);c([f({type:Number,attribute:"slides-per-move"})],Ee.prototype,"slidesPerMove",2);c([f()],Ee.prototype,"orientation",2);c([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Ee.prototype,"mouseDragging",2);c([I(".carousel__slides")],Ee.prototype,"scrollContainer",2);c([I(".carousel__pagination")],Ee.prototype,"paginationContainer",2);c([H()],Ee.prototype,"activeSlide",2);c([H()],Ee.prototype,"scrolling",2);c([H()],Ee.prototype,"dragging",2);c([_n({passive:!0})],Ee.prototype,"handleScroll",1);c([L("loop",{waitUntilFirstUpdate:!0}),L("slidesPerPage",{waitUntilFirstUpdate:!0})],Ee.prototype,"initializeSlides",1);c([L("activeSlide")],Ee.prototype,"handleSlideChange",1);c([L("slidesPerMove")],Ee.prototype,"updateSlidesSnap",1);c([L("autoplay")],Ee.prototype,"handleAutoplayChange",1);var qk="sl-carousel";Ee.define("sl-carousel");B({tagName:qk,elementClass:Ee,react:F,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var Qk=U`
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
`,Gd=class extends V{connectedCallback(){super.connectedCallback()}render(){return A` <slot></slot> `}};Gd.styles=[K,Qk];var Xk="sl-carousel-item";Gd.define("sl-carousel-item");B({tagName:Xk,elementClass:Gd,react:F,events:{},displayName:"SlCarouselItem"});var Yk="sl-checkbox";Fe.define("sl-checkbox");B({tagName:Yk,elementClass:Fe,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var Zk=U`
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
`,ne=class extends V{constructor(){super(...arguments),this.formControlController=new jr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new gt(this,"[default]","prefix","suffix"),this.localize=new ie(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:xl}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?qa`a`:qa`button`;return Oo`
      <${t}
        part="base"
        class=${G({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?Oo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Oo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ne.styles=[K,mv];ne.dependencies={"sl-icon":ue,"sl-spinner":ro};c([I(".button")],ne.prototype,"button",2);c([H()],ne.prototype,"hasFocus",2);c([H()],ne.prototype,"invalid",2);c([f()],ne.prototype,"title",2);c([f({reflect:!0})],ne.prototype,"variant",2);c([f({reflect:!0})],ne.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"caret",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"outline",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],ne.prototype,"circle",2);c([f()],ne.prototype,"type",2);c([f()],ne.prototype,"name",2);c([f()],ne.prototype,"value",2);c([f()],ne.prototype,"href",2);c([f()],ne.prototype,"target",2);c([f()],ne.prototype,"rel",2);c([f()],ne.prototype,"download",2);c([f()],ne.prototype,"form",2);c([f({attribute:"formaction"})],ne.prototype,"formAction",2);c([f({attribute:"formenctype"})],ne.prototype,"formEnctype",2);c([f({attribute:"formmethod"})],ne.prototype,"formMethod",2);c([f({attribute:"formnovalidate",type:Boolean})],ne.prototype,"formNoValidate",2);c([f({attribute:"formtarget"})],ne.prototype,"formTarget",2);c([L("disabled",{waitUntilFirstUpdate:!0})],ne.prototype,"handleDisabledChange",1);function rt(e,t){Jk(e)&&(e="100%");const r=e2(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/t:e=e%t/t,e)}function Yn(e){return Math.min(1,Math.max(0,e))}function Jk(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function e2(e){return typeof e=="string"&&e.indexOf("%")!==-1}function wv(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Zn(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Os(e){return e.length===1?"0"+e:String(e)}function t2(e,t,r){return{r:rt(e,255)*255,g:rt(t,255)*255,b:rt(r,255)*255}}function ef(e,t,r){e=rt(e,255),t=rt(t,255),r=rt(r,255);const s=Math.max(e,t,r),i=Math.min(e,t,r);let o=0,n=0;const a=(s+i)/2;if(s===i)n=0,o=0;else{const l=s-i;switch(n=a>.5?l/(2-s-i):l/(s+i),s){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4;break}o/=6}return{h:o,s:n,l:a}}function wc(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function r2(e,t,r){let s,i,o;if(e=rt(e,360),t=rt(t,100),r=rt(r,100),t===0)i=r,o=r,s=r;else{const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n;s=wc(a,n,e+1/3),i=wc(a,n,e),o=wc(a,n,e-1/3)}return{r:s*255,g:i*255,b:o*255}}function tf(e,t,r){e=rt(e,255),t=rt(t,255),r=rt(r,255);const s=Math.max(e,t,r),i=Math.min(e,t,r);let o=0;const n=s,a=s-i,l=s===0?0:a/s;if(s===i)o=0;else{switch(s){case e:o=(t-r)/a+(t<r?6:0);break;case t:o=(r-e)/a+2;break;case r:o=(e-t)/a+4;break}o/=6}return{h:o,s:l,v:n}}function s2(e,t,r){e=rt(e,360)*6,t=rt(t,100),r=rt(r,100);const s=Math.floor(e),i=e-s,o=r*(1-t),n=r*(1-i*t),a=r*(1-(1-i)*t),l=s%6,u=[r,n,o,o,a,r][l],h=[a,r,r,n,o,o][l],d=[o,o,a,r,r,n][l];return{r:u*255,g:h*255,b:d*255}}function rf(e,t,r,s){const i=Os(Math.round(e).toString(16)),o=Os(Math.round(t).toString(16)),n=Os(Math.round(r).toString(16));return s&&i.startsWith(i.charAt(1))&&o.startsWith(o.charAt(1))&&n.startsWith(n.charAt(1))?i.charAt(0)+o.charAt(0)+n.charAt(0):i+o+n}function i2(e,t,r,s,i){const o=Os(Math.round(e).toString(16)),n=Os(Math.round(t).toString(16)),a=Os(Math.round(r).toString(16)),l=Os(n2(s));return i&&o.startsWith(o.charAt(1))&&n.startsWith(n.charAt(1))&&a.startsWith(a.charAt(1))&&l.startsWith(l.charAt(1))?o.charAt(0)+n.charAt(0)+a.charAt(0)+l.charAt(0):o+n+a+l}function o2(e,t,r,s){const i=e/100,o=t/100,n=r/100,a=s/100,l=255*(1-i)*(1-a),u=255*(1-o)*(1-a),h=255*(1-n)*(1-a);return{r:l,g:u,b:h}}function sf(e,t,r){let s=1-e/255,i=1-t/255,o=1-r/255,n=Math.min(s,i,o);return n===1?(s=0,i=0,o=0):(s=(s-n)/(1-n)*100,i=(i-n)/(1-n)*100,o=(o-n)/(1-n)*100),n*=100,{c:Math.round(s),m:Math.round(i),y:Math.round(o),k:Math.round(n)}}function n2(e){return Math.round(parseFloat(e)*255).toString(16)}function of(e){return Tt(e)/255}function Tt(e){return parseInt(e,16)}function a2(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const Lu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function l2(e){let t={r:0,g:0,b:0},r=1,s=null,i=null,o=null,n=!1,a=!1;return typeof e=="string"&&(e=d2(e)),typeof e=="object"&&(At(e.r)&&At(e.g)&&At(e.b)?(t=t2(e.r,e.g,e.b),n=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):At(e.h)&&At(e.s)&&At(e.v)?(s=Zn(e.s),i=Zn(e.v),t=s2(e.h,s,i),n=!0,a="hsv"):At(e.h)&&At(e.s)&&At(e.l)?(s=Zn(e.s),o=Zn(e.l),t=r2(e.h,s,o),n=!0,a="hsl"):At(e.c)&&At(e.m)&&At(e.y)&&At(e.k)&&(t=o2(e.c,e.m,e.y,e.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=wv(r),{ok:n,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const c2="[-\\+]?\\d+%?",u2="[-\\+]?\\d*\\.\\d+%?",rs="(?:"+u2+")|(?:"+c2+")",xc="[\\s|\\(]+("+rs+")[,|\\s]+("+rs+")[,|\\s]+("+rs+")\\s*\\)?",Jn="[\\s|\\(]+("+rs+")[,|\\s]+("+rs+")[,|\\s]+("+rs+")[,|\\s]+("+rs+")\\s*\\)?",Pt={hex:/^[0-9a-fA-F]+$/,CSS_UNIT:new RegExp(rs),rgb:new RegExp("rgb"+xc),rgba:new RegExp("rgba"+Jn),hsl:new RegExp("hsl"+xc),hsla:new RegExp("hsla"+Jn),hsv:new RegExp("hsv"+xc),hsva:new RegExp("hsva"+Jn),cmyk:new RegExp("cmyk"+Jn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function d2(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(Lu[e])e=Lu[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r;if(typeof e=="string"&&e.length<=9&&(e.startsWith("#")||Pt.hex.test(e))){if(r=Pt.hex8.exec(e),r)return{r:Tt(r[1]),g:Tt(r[2]),b:Tt(r[3]),a:of(r[4]),format:t?"name":"hex8"};if(r=Pt.hex6.exec(e),r)return{r:Tt(r[1]),g:Tt(r[2]),b:Tt(r[3]),format:t?"name":"hex"};if(r=Pt.hex4.exec(e),r)return{r:Tt(r[1]+r[1]),g:Tt(r[2]+r[2]),b:Tt(r[3]+r[3]),a:of(r[4]+r[4]),format:t?"name":"hex8"};if(r=Pt.hex3.exec(e),r)return{r:Tt(r[1]+r[1]),g:Tt(r[2]+r[2]),b:Tt(r[3]+r[3]),format:t?"name":"hex"}}return r=Pt.rgb.exec(e),r?{r:r[1],g:r[2],b:r[3]}:(r=Pt.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Pt.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=Pt.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Pt.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=Pt.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Pt.cmyk.exec(e),r?{c:r[1],m:r[2],y:r[3],k:r[4]}:!1))))))}function At(e){return typeof e=="number"?!Number.isNaN(e):Pt.CSS_UNIT.test(e)}class $e{constructor(t="",r={}){if(t instanceof $e)return t;typeof t=="number"&&(t=a2(t)),this.originalInput=t;const s=l2(t);this.originalInput=t,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??s.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,s,i;const o=t.r/255,n=t.g/255,a=t.b/255;return o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),.2126*r+.7152*s+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=wv(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=tf(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=tf(this.r,this.g,this.b),r=Math.round(t.h*360),s=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${s}%, ${i}%)`:`hsva(${r}, ${s}%, ${i}%, ${this.roundA})`}toHsl(){const t=ef(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=ef(this.r,this.g,this.b),r=Math.round(t.h*360),s=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${s}%, ${i}%)`:`hsla(${r}, ${s}%, ${i}%, ${this.roundA})`}toHex(t=!1){return rf(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return i2(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${s})`:`rgba(${t}, ${r}, ${s}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(rt(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(rt(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...sf(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:r,y:s,k:i}=sf(this.r,this.g,this.b);return`cmyk(${t}, ${r}, ${s}, ${i})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+rf(this.r,this.g,this.b,!1);for(const[r,s]of Object.entries(Lu))if(t===s)return r;return!1}toString(t){const r=!!t;t=t??this.format;let s=!1;const i=this.a<1&&this.a>=0;return!r&&i&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(s=this.toRgbString()),t==="prgb"&&(s=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(s=this.toHexString()),t==="hex3"&&(s=this.toHexString(!0)),t==="hex4"&&(s=this.toHex8String(!0)),t==="hex8"&&(s=this.toHex8String()),t==="name"&&(s=this.toName()),t==="hsl"&&(s=this.toHslString()),t==="hsv"&&(s=this.toHsvString()),t==="cmyk"&&(s=this.toCmykString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new $e(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=Yn(r.l),new $e(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new $e(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=Yn(r.l),new $e(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=Yn(r.s),new $e(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=Yn(r.s),new $e(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),s=(r.h+t)%360;return r.h=s<0?360+s:s,new $e(r)}mix(t,r=50){const s=this.toRgb(),i=new $e(t).toRgb(),o=r/100,n={r:(i.r-s.r)*o+s.r,g:(i.g-s.g)*o+s.g,b:(i.b-s.b)*o+s.b,a:(i.a-s.a)*o+s.a};return new $e(n)}analogous(t=6,r=30){const s=this.toHsl(),i=360/r,o=[this];for(s.h=(s.h-(i*t>>1)+720)%360;--t;)s.h=(s.h+i)%360,o.push(new $e(s));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new $e(t)}monochromatic(t=6){const r=this.toHsv(),{h:s}=r,{s:i}=r;let{v:o}=r;const n=[],a=1/t;for(;t--;)n.push(new $e({h:s,s:i,v:o})),o=(o+a)%1;return n}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new $e({h:(r+72)%360,s:t.s,l:t.l}),new $e({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),s=new $e(t).toRgb(),i=r.a+s.a*(1-r.a);return new $e({r:(r.r*r.a+s.r*s.a*(1-r.a))/i,g:(r.g*r.a+s.g*s.a*(1-r.a))/i,b:(r.b*r.a+s.b*s.a*(1-r.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:s}=r,i=[this],o=360/t;for(let n=1;n<t;n++)i.push(new $e({h:(s+n*o)%360,s:r.s,l:r.l}));return i}equals(t){const r=new $e(t);return this.format==="cmyk"||r.format==="cmyk"?this.toCmykString()===r.toCmykString():this.toRgbString()===r.toRgbString()}}var nf="EyeDropper"in window,J=class extends V{constructor(){super(),this.formControlController=new jr(this),this.isSafeValue=!1,this.localize=new ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();let i=this.value,o=this.value;r.focus(),e.preventDefault(),Fo(t,{onMove:n=>{this.alpha=Me(n/s*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();let i=this.value,o=this.value;r.focus(),e.preventDefault(),Fo(t,{onMove:n=>{this.hue=Me(n/s*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:s,height:i}=t.getBoundingClientRect();let o=this.value,n=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Fo(t,{onMove:(a,l)=>{this.saturation=Me(a/s*100,0,100),this.brightness=Me(100-l/i*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Me(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Me(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Me(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Me(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Me(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Me(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Me(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Me(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new $e(e);if(!t.isValid)return null;const r=t.toHsl(),s={h:r.h,s:r.s*100,l:r.l*100,a:r.a},i=t.toRgb(),o=t.toHexString(),n=t.toHex8String(),a=t.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(n)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!nf)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,s=100){const i=new $e(`hsva(${e}, ${t}%, ${r}%, ${s/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(i=>i.trim()!==""),s=A`
      <div
        part="base"
        class=${G({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
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
          style=${yt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${G({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${yt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                style=${yt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
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
                      style=${yt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${yt({left:`${this.alpha}%`})}
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
            style=${yt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${nf?A`
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
                        style=${yt({backgroundColor:o.hexa})}
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
          class=${G({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${yt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};J.styles=[K,Zk];J.dependencies={"sl-button-group":Ss,"sl-button":ne,"sl-dropdown":Ze,"sl-icon":ue,"sl-input":X,"sl-visually-hidden":wl};c([I('[part~="base"]')],J.prototype,"base",2);c([I('[part~="input"]')],J.prototype,"input",2);c([I(".color-dropdown")],J.prototype,"dropdown",2);c([I('[part~="preview"]')],J.prototype,"previewButton",2);c([I('[part~="trigger"]')],J.prototype,"trigger",2);c([H()],J.prototype,"hasFocus",2);c([H()],J.prototype,"isDraggingGridHandle",2);c([H()],J.prototype,"isEmpty",2);c([H()],J.prototype,"inputValue",2);c([H()],J.prototype,"hue",2);c([H()],J.prototype,"saturation",2);c([H()],J.prototype,"brightness",2);c([H()],J.prototype,"alpha",2);c([f()],J.prototype,"value",2);c([Zi()],J.prototype,"defaultValue",2);c([f()],J.prototype,"label",2);c([f()],J.prototype,"format",2);c([f({type:Boolean,reflect:!0})],J.prototype,"inline",2);c([f({reflect:!0})],J.prototype,"size",2);c([f({attribute:"no-format-toggle",type:Boolean})],J.prototype,"noFormatToggle",2);c([f()],J.prototype,"name",2);c([f({type:Boolean,reflect:!0})],J.prototype,"disabled",2);c([f({type:Boolean})],J.prototype,"hoist",2);c([f({type:Boolean})],J.prototype,"opacity",2);c([f({type:Boolean})],J.prototype,"uppercase",2);c([f()],J.prototype,"swatches",2);c([f({reflect:!0})],J.prototype,"form",2);c([f({type:Boolean,reflect:!0})],J.prototype,"required",2);c([_n({passive:!1})],J.prototype,"handleTouchMove",1);c([L("format",{waitUntilFirstUpdate:!0})],J.prototype,"handleFormatChange",1);c([L("opacity",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpacityChange",1);c([L("value")],J.prototype,"handleValueChange",1);var h2="sl-color-picker";J.define("sl-color-picker");B({tagName:h2,elementClass:J,react:F,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var p2=U`
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
`,Ge=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let i=this.from,o="";r?[i,o]=this.from.trim().split("."):s&&([i,o]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(i):null;n?s?e=n.getAttribute(o)||"":r?e=n[o]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),i=e==="success"?this.successIcon:this.errorIcon,o=we(this,"copy.in",{dir:"ltr"}),n=we(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await i.animate(n.keyframes,n.options).finished,i.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return A`
      <sl-tooltip
        class=${G({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};Ge.styles=[K,p2];Ge.dependencies={"sl-icon":ue,"sl-tooltip":We};c([I('slot[name="copy-icon"]')],Ge.prototype,"copyIcon",2);c([I('slot[name="success-icon"]')],Ge.prototype,"successIcon",2);c([I('slot[name="error-icon"]')],Ge.prototype,"errorIcon",2);c([I("sl-tooltip")],Ge.prototype,"tooltip",2);c([H()],Ge.prototype,"isCopying",2);c([H()],Ge.prototype,"status",2);c([f()],Ge.prototype,"value",2);c([f()],Ge.prototype,"from",2);c([f({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);c([f({attribute:"copy-label"})],Ge.prototype,"copyLabel",2);c([f({attribute:"success-label"})],Ge.prototype,"successLabel",2);c([f({attribute:"error-label"})],Ge.prototype,"errorLabel",2);c([f({attribute:"feedback-duration",type:Number})],Ge.prototype,"feedbackDuration",2);c([f({attribute:"tooltip-placement"})],Ge.prototype,"tooltipPlacement",2);c([f({type:Boolean})],Ge.prototype,"hoist",2);ae("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});ae("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var f2="sl-copy-button";Ge.define("sl-copy-button");B({tagName:f2,elementClass:Ge,react:F,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var m2=U`
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
`,Jt=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Re(this.body);const{keyframes:t,options:r}=we(this,"details.show",{dir:this.localize.dir()});await Ae(this.body,Za(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Re(this.body);const{keyframes:t,options:r}=we(this,"details.hide",{dir:this.localize.dir()});await Ae(this.body,Za(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,pt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,pt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return A`
      <details
        part="base"
        class=${G({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
    `}};Jt.styles=[K,m2];Jt.dependencies={"sl-icon":ue};c([I(".details")],Jt.prototype,"details",2);c([I(".details__header")],Jt.prototype,"header",2);c([I(".details__body")],Jt.prototype,"body",2);c([I(".details__expand-icon-slot")],Jt.prototype,"expandIconSlot",2);c([f({type:Boolean,reflect:!0})],Jt.prototype,"open",2);c([f()],Jt.prototype,"summary",2);c([f({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2);c([L("open",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleOpenChange",1);ae("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});ae("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var g2="sl-details";Jt.define("sl-details");B({tagName:g2,elementClass:Jt,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var v2=U`
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
`,dr=class extends V{constructor(){super(...arguments),this.hasSlotController=new gt(this,"footer"),this.localize=new ie(this),this.modal=new bv(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Do(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Vo(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=we(this,"dialog.denyClose",{dir:this.localize.dir()});Ae(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Do(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Re(this.dialog),Re(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=we(this,"dialog.show",{dir:this.localize.dir()}),r=we(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ae(this.panel,t.keyframes,t.options),Ae(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{Wd(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Re(this.dialog),Re(this.overlay)]);const e=we(this,"dialog.hide",{dir:this.localize.dir()}),t=we(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ae(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ae(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Vo(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,pt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pt(this,"sl-after-hide")}render(){return A`
      <div
        part="base"
        class=${G({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
    `}};dr.styles=[K,v2];dr.dependencies={"sl-icon-button":Ve};c([I(".dialog")],dr.prototype,"dialog",2);c([I(".dialog__panel")],dr.prototype,"panel",2);c([I(".dialog__overlay")],dr.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],dr.prototype,"open",2);c([f({reflect:!0})],dr.prototype,"label",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],dr.prototype,"noHeader",2);c([L("open",{waitUntilFirstUpdate:!0})],dr.prototype,"handleOpenChange",1);ae("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ae("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ae("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});ae("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ae("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var y2="sl-dialog";dr.define("sl-dialog");var b2=B({tagName:y2,elementClass:dr,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),w2=b2,x2=U`
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
`,er=class extends V{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return A`
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
    `}};er.styles=[K,x2];er.dependencies={"sl-icon":ue};c([I(".animated-image__animated")],er.prototype,"animatedImage",2);c([H()],er.prototype,"frozenFrame",2);c([H()],er.prototype,"isLoaded",2);c([f()],er.prototype,"src",2);c([f()],er.prototype,"alt",2);c([f({type:Boolean,reflect:!0})],er.prototype,"play",2);c([L("play",{waitUntilFirstUpdate:!0})],er.prototype,"handlePlayChange",1);c([L("src")],er.prototype,"handleSrcChange",1);var _2="sl-animated-image";er.define("sl-animated-image");B({tagName:_2,elementClass:er,react:F,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});const k2=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],C2=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],S2=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],E2=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],$2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],z2=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],A2=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],T2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],P2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],N2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],L2=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],M2=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],I2=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],R2=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],O2=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],D2=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],V2=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],F2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],B2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],j2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],U2=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],H2=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],W2=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],G2=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],K2=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],q2=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Q2=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],X2=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Y2=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Z2=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],J2=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],eC=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],tC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rC=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sC=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],iC=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],oC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],nC=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],aC=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],lC=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],cC=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],uC=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],dC=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hC=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pC=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],fC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],mC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],gC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],vC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],yC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],bC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],wC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],xC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],_C=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],kC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],CC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],SC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],EC=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],$C=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],zC=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],AC=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],TC=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],PC=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],NC=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],LC=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],MC=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],IC=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],RC=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],OC=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],DC=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],VC=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],FC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],BC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],jC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],UC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],HC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],WC=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],GC=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],KC=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],qC=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],QC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],XC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],YC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],ZC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],JC=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],eS=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],tS=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rS=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],sS=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],iS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],oS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],nS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],aS=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],lS=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],cS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],uS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],dS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],hS=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},pS=Object.freeze(Object.defineProperty({__proto__:null,backInDown:R2,backInLeft:O2,backInRight:D2,backInUp:V2,backOutDown:F2,backOutLeft:B2,backOutRight:j2,backOutUp:U2,bounce:k2,bounceIn:H2,bounceInDown:W2,bounceInLeft:G2,bounceInRight:K2,bounceInUp:q2,bounceOut:Q2,bounceOutDown:X2,bounceOutLeft:Y2,bounceOutRight:Z2,bounceOutUp:J2,easings:xv,fadeIn:eC,fadeInBottomLeft:tC,fadeInBottomRight:rC,fadeInDown:sC,fadeInDownBig:iC,fadeInLeft:oC,fadeInLeftBig:nC,fadeInRight:aC,fadeInRightBig:lC,fadeInTopLeft:cC,fadeInTopRight:uC,fadeInUp:dC,fadeInUpBig:hC,fadeOut:pC,fadeOutBottomLeft:fC,fadeOutBottomRight:mC,fadeOutDown:gC,fadeOutDownBig:vC,fadeOutLeft:yC,fadeOutLeftBig:bC,fadeOutRight:wC,fadeOutRightBig:xC,fadeOutTopLeft:_C,fadeOutTopRight:kC,fadeOutUp:CC,fadeOutUpBig:SC,flash:C2,flip:EC,flipInX:$C,flipInY:zC,flipOutX:AC,flipOutY:TC,headShake:S2,heartBeat:E2,hinge:JC,jackInTheBox:eS,jello:$2,lightSpeedInLeft:PC,lightSpeedInRight:NC,lightSpeedOutLeft:LC,lightSpeedOutRight:MC,pulse:z2,rollIn:tS,rollOut:rS,rotateIn:IC,rotateInDownLeft:RC,rotateInDownRight:OC,rotateInUpLeft:DC,rotateInUpRight:VC,rotateOut:FC,rotateOutDownLeft:BC,rotateOutDownRight:jC,rotateOutUpLeft:UC,rotateOutUpRight:HC,rubberBand:A2,shake:T2,shakeX:P2,shakeY:N2,slideInDown:WC,slideInLeft:GC,slideInRight:KC,slideInUp:qC,slideOutDown:QC,slideOutLeft:XC,slideOutRight:YC,slideOutUp:ZC,swing:L2,tada:M2,wobble:I2,zoomIn:sS,zoomInDown:iS,zoomInLeft:oS,zoomInRight:nS,zoomInUp:aS,zoomOut:lS,zoomOutDown:cS,zoomOutLeft:uS,zoomOutRight:dS,zoomOutUp:hS},Symbol.toStringTag,{value:"Module"}));var fS=U`
  :host {
    display: contents;
  }
`,Ke=class extends V{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=xv[this.easing])!=null?e:this.easing,s=(t=this.keyframes)!=null?t:pS[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!s?!1:(this.destroyAnimation(),this.animation=o.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ke.styles=[K,fS];c([zw("slot")],Ke.prototype,"defaultSlot",2);c([f()],Ke.prototype,"name",2);c([f({type:Boolean,reflect:!0})],Ke.prototype,"play",2);c([f({type:Number})],Ke.prototype,"delay",2);c([f()],Ke.prototype,"direction",2);c([f({type:Number})],Ke.prototype,"duration",2);c([f()],Ke.prototype,"easing",2);c([f({attribute:"end-delay",type:Number})],Ke.prototype,"endDelay",2);c([f()],Ke.prototype,"fill",2);c([f({type:Number})],Ke.prototype,"iterations",2);c([f({attribute:"iteration-start",type:Number})],Ke.prototype,"iterationStart",2);c([f({attribute:!1})],Ke.prototype,"keyframes",2);c([f({attribute:"playback-rate",type:Number})],Ke.prototype,"playbackRate",2);c([L(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Ke.prototype,"handleAnimationChange",1);c([L("play")],Ke.prototype,"handlePlayChange",1);c([L("playbackRate")],Ke.prototype,"handlePlaybackRateChange",1);var mS="sl-animation";Ke.define("sl-animation");B({tagName:mS,elementClass:Ke,react:F,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"});var gS=U`
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
`,hr=class extends V{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=A`
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
        class=${G({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};hr.styles=[K,gS];hr.dependencies={"sl-icon":ue};c([H()],hr.prototype,"hasError",2);c([f()],hr.prototype,"image",2);c([f()],hr.prototype,"label",2);c([f()],hr.prototype,"initials",2);c([f()],hr.prototype,"loading",2);c([f({reflect:!0})],hr.prototype,"shape",2);c([L("image")],hr.prototype,"handleImageChange",1);var vS="sl-avatar";hr.define("sl-avatar");B({tagName:vS,elementClass:hr,react:F,events:{onSlError:"sl-error"},displayName:"SlAvatar"});var yS=U`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,oi=class extends V{constructor(){super(...arguments),this.localize=new ie(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const s=t.querySelector('[slot="separator"]');s===null?t.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),A`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};oi.styles=[K,yS];oi.dependencies={"sl-icon":ue};c([I("slot")],oi.prototype,"defaultSlot",2);c([I('slot[name="separator"]')],oi.prototype,"separatorSlot",2);c([f()],oi.prototype,"label",2);var bS="sl-breadcrumb";oi.define("sl-breadcrumb");B({tagName:bS,elementClass:oi,react:F,events:{},displayName:"SlBreadcrumb"});var wS="sl-button";ne.define("sl-button");var xS=B({tagName:wS,elementClass:ne,react:F,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),vr=xS,_S=U`
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
`,Hr=class extends V{constructor(){super(...arguments),this.hasSlotController=new gt(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return A`
      <div
        part="base"
        class=${G({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};Hr.styles=[K,_S];c([I("slot:not([name])")],Hr.prototype,"defaultSlot",2);c([H()],Hr.prototype,"renderType",2);c([f()],Hr.prototype,"href",2);c([f()],Hr.prototype,"target",2);c([f()],Hr.prototype,"rel",2);c([L("href",{waitUntilFirstUpdate:!0})],Hr.prototype,"hrefChanged",1);var kS="sl-breadcrumb-item";Hr.define("sl-breadcrumb-item");B({tagName:kS,elementClass:Hr,react:F,events:{},displayName:"SlBreadcrumbItem"});var CS=U`
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
`,ni=class extends V{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return A`
      <span
        part="base"
        class=${G({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};ni.styles=[K,CS];c([f({reflect:!0})],ni.prototype,"variant",2);c([f({type:Boolean,reflect:!0})],ni.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],ni.prototype,"pulse",2);var SS="sl-badge";ni.define("sl-badge");var ES=B({tagName:SS,elementClass:ni,react:F,events:{},displayName:"SlBadge"}),$S=ES,zS=U`
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
`,Kd=class extends V{constructor(){super(...arguments),this.hasSlotController=new gt(this,"footer","header","image")}render(){return A`
      <div
        part="base"
        class=${G({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Kd.styles=[K,zS];var AS="sl-card";Kd.define("sl-card");var TS=B({tagName:AS,elementClass:Kd,react:F,events:{},displayName:"SlCard"}),_c=TS,PS=U`
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
`,Ft=class Ns extends V{constructor(){super(...arguments),this.hasSlotController=new gt(this,"icon","suffix"),this.localize=new ie(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,r="100%",s="0";this.countdownAnimation=t.animate([{width:r},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Re(this.base),this.base.hidden=!1;const{keyframes:t,options:r}=we(this,"alert.show",{dir:this.localize.dir()});await Ae(this.base,t,r),this.emit("sl-after-show")}else{Wd(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Re(this.base);const{keyframes:t,options:r}=we(this,"alert.hide",{dir:this.localize.dir()});await Ae(this.base,t,r),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,pt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pt(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),Ns.toastStack.parentElement===null&&document.body.append(Ns.toastStack),Ns.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ns.toastStack.removeChild(this),t(),Ns.toastStack.querySelector("sl-alert")===null&&Ns.toastStack.remove()},{once:!0})})}render(){return A`
      <div
        part="base"
        class=${G({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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
                class=${G({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Ft.styles=[K,PS];Ft.dependencies={"sl-icon-button":Ve};c([I('[part~="base"]')],Ft.prototype,"base",2);c([I(".alert__countdown-elapsed")],Ft.prototype,"countdownElement",2);c([f({type:Boolean,reflect:!0})],Ft.prototype,"open",2);c([f({type:Boolean,reflect:!0})],Ft.prototype,"closable",2);c([f({reflect:!0})],Ft.prototype,"variant",2);c([f({type:Number})],Ft.prototype,"duration",2);c([f({type:String,reflect:!0})],Ft.prototype,"countdown",2);c([H()],Ft.prototype,"remainingTime",2);c([L("open",{waitUntilFirstUpdate:!0})],Ft.prototype,"handleOpenChange",1);c([L("duration")],Ft.prototype,"handleDurationChange",1);var _v=Ft;ae("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ae("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var NS="sl-alert";_v.define("sl-alert");var LS=B({tagName:NS,elementClass:_v,react:F,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"}),ps=LS,MS=(e,t)=>{let r=0;return function(...s){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...s)},t)}},af=(e,t,r)=>{const s=e[t];e[t]=function(...i){s.call(this,...i),r.call(this,s,...i)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,r=new WeakMap,s=o=>{for(const n of o.changedTouches)t.add(n.identifier)},i=o=>{for(const n of o.changedTouches)t.delete(n.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),af(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scrollend")return;const a=MS(()=>{t.size?a():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",a,{passive:!0}),r.set(this,a)}),af(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scrollend")return;const a=r.get(this);a&&o.call(this,"scroll",a,{passive:!0})})}})();X.define("sl-input");ni.define("sl-badge");function IS(){const{falcon:e,cachedCategories:t}=E.useContext(bn),[r,s]=E.useState([]),[i,o]=E.useState({}),[n,a]=E.useState(""),[l,u]=E.useState(""),[h,d]=E.useState([]),[p,g]=E.useState(""),[v,x]=E.useState(""),[C,b]=E.useState({}),[m,y]=E.useState([]),[w,k]=E.useState(""),[S,$]=E.useState(null),[T,M]=E.useState(!0),[z,ee]=E.useState(!0),[he,le]=E.useState(!1),[fe,R]=E.useState(""),[te,de]=E.useState(null),[N,j]=E.useState(!1),[q,ve]=E.useState(!1);E.useEffect(()=>{e&&(async()=>{try{M(!0),ee(!0);const Be=await Nr(e,"GET","/urlblock");if(Be!=null&&Be.host_groups&&s(Be.host_groups),t&&t.length>0){const nt={};t.forEach(vt=>{nt[vt]=""}),o(nt)}else{const nt=await Pd(e),vt={};nt.forEach(Bt=>{vt[Bt]=""}),o(vt)}}catch(Be){console.error("Error loading data:",Be),$({type:"error",message:`Failed to load data: ${Be.message}`})}finally{M(!1),ee(!1)}})()},[e,t]);const Ne=async()=>{if(!h||h.length===0)throw new Error("Please select at least one category");const Q=e.collection({collection:"domain"}),Be=await Promise.all(h.map(async Bt=>{try{const tr=await Q.read(Fg(Bt));return{category:Bt,domain:(tr==null?void 0:tr.domain)||null}}catch(tr){return console.warn(`Failed to fetch domains for category ${Bt}:`,tr),{category:Bt,domain:null}}})),nt={};Be.forEach(({category:Bt,domain:tr})=>{tr&&(nt[Bt]=tr)}),b(nt),y([...h]);const vt=Object.values(nt).join(";");if(x(vt),!vt)throw new Error("No domains found for selected categories");return nt},ai=async()=>{try{le(!0),$({type:"info",message:"Loading domains from categories..."}),await Ne(),$({type:"success",message:`Preview generated successfully with domains from ${h.length} categories`})}catch(Q){console.error("Preview generation error:",Q),$({type:"error",message:Q.message})}finally{le(!1)}},_r=async()=>{var Q,Be,nt;try{if(!n)throw new Error("Please select a host group");if(!l)throw new Error("Please enter a policy name");if(!p)throw new Error("Please select a platform");if(h.length===0)throw new Error("Please select at least one category");ve(!0);const vt=m.length===h.length&&h.every(Wr=>m.includes(Wr));let Bt=C;(!vt||Object.keys(C).length===0)&&($({type:"info",message:"Loading domains from categories..."}),Bt=await Ne());const tr=h.filter(Wr=>!Bt[Wr]);if(tr.length>0)throw new Error(`No domains found for: ${tr.join(", ")}. Unselect them or fix the categories.`);$({type:"info",message:"Creating blocking rule..."});const qd={};h.forEach(Wr=>{qd[Wr]=Bt[Wr]});const kv=(Q=r.find(Wr=>Wr.id===n))==null?void 0:Q.name,Cv=await Nr(e,"POST","/create-rule",{hostGroupId:n,hostGroupName:kv,policyName:l,platform:p.toLowerCase(),categories:qd,whitelist:w.trim(),username:((nt=(Be=e==null?void 0:e.data)==null?void 0:Be.user)==null?void 0:nt.username)||""});$({type:"success",message:`Successfully created ${Cv.rulesCreated} rule(s) and assigned ${h.length} categories!`}),a(""),u(""),d([]),g(""),x(""),b({}),y([]),k("")}catch(vt){console.error("Operation failed:",vt),$({type:"error",message:vt.message})}finally{ve(!1)}},li=async()=>{if(fe.trim()){j(!0),de(null);try{const Q=encodeURIComponent(fe.trim().toLowerCase());de(await Nr(e,"GET","/simulate-policy?fqdn="+Q))}catch(Q){console.error("Simulator error:",Q),de({error:Q.message})}finally{j(!1)}}};return T?_.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:_.jsxs("div",{className:"text-center",children:[_.jsx(Bs,{style:{fontSize:"2rem"}}),_.jsx("p",{className:"mt-4 text-gray-600",children:"Loading data..."})]})}):_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"flex items-end space-x-4",children:[_.jsxs("div",{className:"flex-1",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Policy name"}),_.jsx("input",{type:"text",value:l,onChange:Q=>u(Q.target.value),placeholder:"Enter a unique name",className:"w-full px-3 bg-white outline-none",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"40px",lineHeight:"40px",border:"1px solid #B8B7BD",borderRadius:"0"}})]}),_.jsxs("div",{className:"flex-1",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Host group"}),_.jsx(Xp,{value:n,onSlChange:Q=>a(Q.target.value),placeholder:"Select",children:r.map(Q=>_.jsx(Xn,{value:Q.id,children:Q.name},Q.id))})]}),_.jsxs("div",{className:"flex-1",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Platform"}),_.jsxs(Xp,{value:p,onSlChange:Q=>g(Q.target.value),placeholder:"Select",children:[_.jsx(Xn,{value:"windows",children:"windows"}),_.jsx(Xn,{value:"mac",children:"mac"}),_.jsx(Xn,{value:"linux",children:"linux"})]})]}),_.jsx(vr,{variant:"primary",onClick:ai,loading:he,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"40px","background-color":"#e5e7eb",color:"black",border:"none","min-width":"120px"},children:"Preview Domains"}),_.jsx(vr,{variant:"primary",onClick:_r,loading:q,disabled:he,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"40px","background-color":"#e5e7eb",color:"black",border:"none","min-width":"160px"},children:"Create blocking rule"})]}),_.jsxs("div",{children:[_.jsxs("div",{className:"flex justify-between items-center mb-2",children:[_.jsx("h2",{className:"text-sm font-medium text-gray-700",children:_.jsx("b",{children:"Categories to block"})}),_.jsx(Q1,{to:"/about",className:"text-black no-underline text-sm hover:text-gray-600",children:"Add custom categories"})]}),_.jsx("div",{className:"grid grid-cols-4 gap-x-6 gap-y-2 max-h-[400px] overflow-y-auto p-4",style:{border:"1px solid #B8B7BD",borderRadius:"0"},children:z?_.jsxs("div",{className:"col-span-4 flex items-center justify-center py-4",children:[_.jsx(Bs,{style:{fontSize:"1.5rem"}}),_.jsx("span",{className:"ml-2 text-gray-600",children:"Loading categories..."})]}):Object.keys(i).sort().map(Q=>_.jsxs("div",{className:"flex items-center space-x-2",children:[_.jsx("input",{type:"checkbox",id:`category-${Q}`,checked:h.includes(Q),onChange:Be=>{Be.target.checked?d(nt=>[...nt,Q]):d(nt=>nt.filter(vt=>vt!==Q))},className:"h-4 w-4 text-gray-600 border-gray-300 focus:ring-0"}),_.jsx("label",{htmlFor:`category-${Q}`,className:"text-sm text-gray-700 cursor-pointer select-none",children:Q})]},Q))})]}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-sm font-medium text-gray-700 mb-2",children:_.jsx("b",{children:"Selected domains preview"})}),_.jsx(Eu,{value:v,readonly:!0,rows:"8",placeholder:"Select Preview",resize:"vertical",style:{"--sl-input-font-size":"var(--sl-font-size-medium)","--sl-color-neutral-300":"#E0E0E0",width:"100%","--sl-input-border-color":"#B8B7BD","--sl-input-border-radius-medium":"0"}})]}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-sm font-medium text-gray-700 mb-2",children:_.jsx("b",{children:"Excluded Domains (Whitelist)"})}),_.jsxs("p",{className:"text-xs text-gray-500 mb-2",children:["These domains will be added as an ",_.jsx("strong",{children:"ALLOW"})," rule with the highest priority. Separate multiple domains with semicolons (;)."]}),_.jsx(Eu,{value:w,onSlInput:Q=>k(Q.target.value),rows:"3",placeholder:"e.g. excepcion.com;*.excepcion.com;intranet.empresa.com",resize:"vertical",style:{"--sl-input-font-size":"var(--sl-font-size-medium)","--sl-color-neutral-300":"#E0E0E0",width:"100%","--sl-input-border-color":"#B8B7BD","--sl-input-border-radius-medium":"0"}})]}),_.jsxs("div",{style:{border:"1px solid #B8B7BD",borderRadius:"0",padding:"16px"},children:[_.jsx("h2",{className:"text-sm font-bold text-black mb-2",children:"???? Domain Policy Simulator"}),_.jsx("p",{className:"text-xs text-gray-500 mb-3",children:"Enter a domain to check whether it is registered under any blocking category."}),_.jsxs("div",{className:"flex items-center space-x-3",children:[_.jsx("input",{type:"text",value:fe,onChange:Q=>R(Q.target.value),onKeyDown:Q=>{Q.key==="Enter"&&li()},placeholder:"e.g. facebook.com",className:"flex-1 px-3 bg-white outline-none",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"40px",lineHeight:"40px",border:"1px solid #B8B7BD",borderRadius:"0"}}),_.jsx(vr,{variant:"primary",onClick:li,loading:N,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"40px","background-color":"#e5e7eb",color:"black",border:"none","min-width":"120px"},children:"Check domain"})]}),te&&!N&&_.jsx("div",{className:"mt-4",children:te.error?_.jsxs("div",{style:{padding:"10px 14px",background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:"4px",fontSize:"13px",color:"#991b1b"},children:["??? Error: ",te.error]}):te.encontrado?_.jsxs("div",{style:{padding:"10px 14px",background:"#fef9c3",border:"1px solid #fde047",borderRadius:"4px",fontSize:"13px",color:"#713f12"},children:["???? ",_.jsx("strong",{children:"BLOCKED"})," ??? ",te.mensaje,_.jsx("br",{}),_.jsxs("span",{style:{fontSize:"12px",color:"#92400e"},children:["Category: ",_.jsx("strong",{children:te.categoria})]})]}):_.jsxs("div",{style:{padding:"10px 14px",background:"#dcfce7",border:"1px solid #86efac",borderRadius:"4px",fontSize:"13px",color:"#166534"},children:["??? ",_.jsx("strong",{children:"NOT BLOCKED"})," ??? ",te.mensaje]})})]}),S&&_.jsx(ps,{variant:S.type==="error"?"danger":S.type==="success"?"success":"info",open:!0,closable:!0,onSlAfterHide:()=>$(null),children:S.message})]})}function RS(){const{falcon:e,refreshCategories:t}=E.useContext(bn),[r,s]=E.useState(""),[i,o]=E.useState(""),[n,a]=E.useState(null),[l,u]=E.useState(!1),h=E.useRef(null),[d,p]=E.useState(null),[g,v]=E.useState(!1),[x,C]=E.useState(null),b=async()=>{if(d)try{v(!0),C(null);const y=await d.text(),w=await Nr(e,"POST","/import-csv",{csv:y});C({type:w.failed_imports>0?"warning":"success",message:`Imported ${w.successful_imports} categories (${w.domains_imported} domains) from ${w.total_rows} rows`+(w.failed_imports>0?`; ${w.failed_imports} rows/categories failed (see function logs).`:".")}),p(null),h.current&&(h.current.value=""),t==null||t()}catch(y){console.error("Import CSV error:",y),C({type:"error",message:`Error: ${y.message}`})}finally{v(!1)}},m=async()=>{try{if(u(!0),!r.trim())throw new Error("Please enter a category name");if(!i.trim())throw new Error("Please enter at least one URL");const y=i.split(",").map(k=>k.trim()).filter(k=>k.length>0).join(","),w=await Nr(e,"POST","/manage-category",{categoryName:r.trim(),urls:y});a({type:"success",message:`Category created successfully with ${w.urlCount||0} URLs!`}),s(""),o(""),t==null||t()}catch(y){console.error("Error in handleCreateCategory:",y),a({type:"error",message:`Error: ${y.message}`})}finally{u(!1)}};return _.jsxs("div",{className:"container mx-auto p-4",children:[_.jsx("h2",{className:"text-lg font-semibold text-black mb-4 text-left",children:"Create custom category"}),_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Category Name"}),_.jsx("input",{type:"text",value:r,onChange:y=>s(y.target.value),placeholder:"Enter category name",className:"w-1/2 py-3 px-4 bg-white border border-gray-300 focus:border-gray-400 outline-none",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"40px",lineHeight:"40px",border:"1px solid #B8B7BD",borderRadius:"0"}})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"block text-sm font-bold text-black mb-2",children:"Domains (comma-separated)"}),_.jsx("textarea",{value:i,onChange:y=>o(y.target.value),placeholder:"Enter domains separated by commas (e.g., example.com, test.com, domain.com)",rows:"6",className:"w-1/2 py-3 px-4 bg-white border border-gray-300 focus:border-gray-400 outline-none font-mono text-sm",style:{fontFamily:"var(--sl-font-sans)",fontSize:"var(--sl-font-size-medium)",height:"70px",lineHeight:"70px",border:"1px solid #B8B7BD",borderRadius:"0"}}),_.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Example: example.com, test.com, domain.com"})]}),_.jsx(vr,{variant:"primary",onClick:m,loading:l,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"48px","background-color":"#e5e7eb",color:"black",border:"none",width:"15%"},children:l?"Creating Category...":"Create Category"}),n&&_.jsx(ps,{variant:n.type==="error"?"danger":"success",open:!0,closable:!0,onSlAfterHide:()=>a(null),children:n.message}),_.jsxs("div",{className:"form-group",style:{borderTop:"1px solid #E5E7EB",paddingTop:"24px"},children:[_.jsx("h2",{className:"text-lg font-semibold text-black mb-2 text-left",children:"Import categories from CSV"}),_.jsxs("p",{className:"mb-2 text-sm text-gray-600",children:["Format: ",_.jsx("code",{children:"category,url"})," with a header row and one domain per row (e.g. ",_.jsx("code",{children:"Games,steam.com"}),"). Rows of the same category are merged and",_.jsx("code",{children:" *.domain"})," wildcards are added automatically. Existing categories are replaced."]}),_.jsx("input",{ref:h,type:"file",accept:".csv,text/csv",onChange:y=>{var w;p(((w=y.target.files)==null?void 0:w[0])??null),C(null)},className:"block mb-3 text-sm text-black"}),_.jsx(vr,{variant:"primary",onClick:b,loading:g,disabled:!d,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","--sl-input-height-medium":"48px","background-color":"#e5e7eb",color:"black",border:"none",width:"15%"},children:g?"Importing...":"Import CSV"}),x&&_.jsx(ps,{className:"mt-3",variant:x.type==="error"?"danger":x.type,open:!0,closable:!0,onSlAfterHide:()=>C(null),children:x.message})]})]})]})}const OS="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",DS="px-6 py-4 whitespace-nowrap text-sm";function kc({headers:e,rows:t}){return _.jsx("div",{className:"overflow-x-auto",children:_.jsxs("table",{className:"min-w-full",style:{borderCollapse:"collapse"},children:[_.jsx("thead",{children:_.jsx("tr",{children:e.map(r=>_.jsx("th",{className:OS,children:r},r))})}),_.jsx("tbody",{children:t.map((r,s)=>_.jsx("tr",{children:r.map((i,o)=>_.jsx("td",{className:DS,children:i},o))},s))})]})})}const lf=e=>e?new Date(e).toLocaleString():"-";function VS(){const{falcon:e,isInitialized:t}=Vg(),[r,s]=E.useState(null),[i,o]=E.useState(!0),[n,a]=E.useState(null);if(E.useEffect(()=>{if(!t)return;(async()=>{try{o(!0),a(null),s(await Nr(e,"GET","/domain-analytics"))}catch(g){console.error("Error fetching analytics:",g),a(g.message)}finally{o(!1)}})()},[t,e]),!t||i)return _.jsx("div",{className:"flex items-center justify-center min-h-screen",children:_.jsx(Bs,{style:{fontSize:"2rem"}})});if(n)return _.jsx(ps,{variant:"danger",open:!0,children:n});const l=r==null?void 0:r.visualization_data,u=l==null?void 0:l.bar_chart,h=l==null?void 0:l.comparison_chart;if(!u||!h)return _.jsx(ps,{variant:"warning",open:!0,children:"No analytics data available"});const d=Object.entries(r.analysis||{});return _.jsxs("div",{className:"container mx-auto p-4",children:[_.jsx("h2",{className:"text-lg font-semibold text-left mb-4",children:"Domain access analysis"}),r.truncated&&_.jsx(ps,{variant:"warning",open:!0,className:"mb-4",children:r.message||"Results may be incomplete"}),_.jsxs(_c,{children:[_.jsx("div",{slot:"header",children:_.jsx("h3",{className:"text-lg font-semibold text-left",children:"Top 20 Most Visited Domains (Last 15 Days)"})}),_.jsx(kc,{headers:["#","Domain","Visits"],rows:u.domains.map((p,g)=>[g+1,p,u.visits[g]])})]}),_.jsxs(_c,{className:"mt-4",children:[_.jsx("div",{slot:"header",children:_.jsx("h3",{className:"text-lg font-semibold text-left",children:"Visits vs Unique IPs by Domain"})}),_.jsx(kc,{headers:["Domain","Total Visits","Unique IPs"],rows:h.domains.map((p,g)=>[p,h.visits[g],h.unique_ips[g]])})]}),_.jsxs(_c,{className:"mt-4",children:[_.jsx("div",{slot:"header",children:_.jsx("h3",{className:"text-lg font-semibold text-left",children:"Detailed Analysis"})}),_.jsx(kc,{headers:["Domain","Visit Count","Unique IPs","Unique Hosts","First Seen","Last Seen"],rows:d.map(([p,g])=>[p,g.visit_count,g.unique_ips,g.unique_hosts,lf(g.first_seen),lf(g.last_seen)])})]})]})}const FS=e=>e==="windows"?"primary":e==="mac"?"success":e==="linux"?"warning":"neutral";function BS(){const{falcon:e,cachedCategories:t}=E.useContext(bn),[r,s]=E.useState([]),[i,o]=E.useState(!0),[n,a]=E.useState(null),[l,u]=E.useState(null),[h,d]=E.useState([]),[p,g]=E.useState(!1),[v,x]=E.useState(null),[C,b]=E.useState([]),[m,y]=E.useState(""),[w,k]=E.useState(!1),[S,$]=E.useState(null),T=E.useRef(null);E.useEffect(()=>{M(),z()},[]);const M=async()=>{o(!0),a(null);try{const R=await Nr(e,"GET","/list-policies");s((R==null?void 0:R.policies)??[])}catch(R){console.error("loadPolicies error:",R),a("No se pudieron cargar las políticas. Intenta recargar la página.")}finally{o(!1)}},z=async()=>{try{t&&t.length>0?d(t):d(await Pd(e))}catch(R){console.error("loadAllCategories error:",R)}},ee=async(R,te,de)=>{if(window.confirm(`¿Eliminar la política "${te}"? Esta acción no se puede deshacer.`)){u(R);try{await Nr(e,"POST","/delete-policy",{rule_group_id:R,policy_id:de||""}),await M()}catch(N){console.error("handleDelete error:",N),alert("Error al eliminar la política: "+N.message)}finally{u(null)}}},he=R=>{x(R),b([...R.categories]),y(R.whitelist??""),$(null),g(!0)},le=R=>{b(te=>te.includes(R)?te.filter(de=>de!==R):[...te,R])},fe=async()=>{var R,te;if(C.length===0){$({type:"warning",message:"Selecciona al menos una categoría."});return}k(!0),$(null);try{const de=e.collection({collection:"domain"}),N={};if(await Promise.all(C.map(async j=>{try{const q=await de.read(Fg(j));q!=null&&q.domain&&(N[j]=q.domain)}catch{}})),Object.keys(N).length===0){$({type:"danger",message:"No se pudieron resolver dominios para las categorías seleccionadas."});return}await Nr(e,"POST","/update-policy",{ruleGroupId:v.rule_group_id,policyId:v.policy_id||"",policyName:v.policy_name,hostGroupId:v.host_group_id,hostGroupName:v.host_group_name,platform:v.platform,categories:N,whitelist:m.trim(),username:((te=(R=e==null?void 0:e.data)==null?void 0:R.user)==null?void 0:te.username)||""}),$({type:"success",message:"¡Política actualizada exitosamente!"}),await M(),setTimeout(()=>{g(!1),$(null)},1500)}catch(de){console.error("handleSave error:",de),$({type:"danger",message:"Error al actualizar: "+de.message})}finally{k(!1)}};return _.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx("h2",{className:"text-sm font-bold text-black",children:"Active Blocking Policies"}),_.jsx(vr,{size:"small",onClick:M,disabled:i,style:{"--sl-input-height-small":"32px"},children:i?_.jsx(Bs,{style:{fontSize:"1rem"}}):"↻ Refresh"})]}),n&&_.jsx(ps,{variant:"danger",open:!0,closable:!0,onSlAfterHide:()=>a(null),children:n}),i&&_.jsx("div",{className:"flex items-center justify-center py-12",children:_.jsx(Bs,{style:{fontSize:"2rem"}})}),!i&&r.length===0&&!n&&_.jsxs("div",{className:"text-center py-12 text-gray-500 text-sm",style:{border:"1px solid #B8B7BD"},children:["No active policies found. Create one from the ",_.jsx("strong",{children:"Category Blocking Policy"})," tab."]}),!i&&r.length>0&&_.jsx("div",{style:{overflowX:"auto"},children:_.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"13px",border:"1px solid #B8B7BD"},children:[_.jsx("thead",{children:_.jsx("tr",{style:{background:"#f9f9f9",borderBottom:"2px solid #B8B7BD"},children:["Policy Name","Host Group","Platform","Categories","Whitelist","Actions"].map(R=>_.jsx("th",{style:{padding:"10px 12px",textAlign:"left",fontWeight:600,color:"#111",whiteSpace:"nowrap"},children:R},R))})}),_.jsx("tbody",{children:r.map((R,te)=>_.jsxs("tr",{style:{borderBottom:"1px solid #E5E7EB",background:te%2===0?"#fff":"#fafafa"},children:[_.jsx("td",{style:{padding:"10px 12px",fontWeight:500},children:R.policy_name||"—"}),_.jsx("td",{style:{padding:"10px 12px",color:"#555"},children:R.host_group_name||R.host_group_id||"—"}),_.jsx("td",{style:{padding:"10px 12px"},children:_.jsx($S,{variant:FS(R.platform),pill:!0,children:R.platform||"—"})}),_.jsx("td",{style:{padding:"10px 12px"},children:_.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:(R.categories??[]).map(de=>_.jsx("span",{style:{display:"inline-block",padding:"2px 8px",background:"#e5e7eb",borderRadius:"12px",fontSize:"11px",color:"#374151"},children:de},de))})}),_.jsx("td",{style:{padding:"10px 12px",color:"#555",maxWidth:"220px"},children:R.whitelist?_.jsx("span",{style:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:R.whitelist,children:R.whitelist}):_.jsx("span",{style:{color:"#aaa",fontStyle:"italic"},children:"None"})}),_.jsxs("td",{style:{padding:"10px 12px",whiteSpace:"nowrap"},children:[_.jsx(vr,{size:"small",variant:"neutral",onClick:()=>he(R),style:{marginRight:"6px"},children:"✏️ Edit"}),_.jsx(vr,{size:"small",variant:"danger",loading:l===R.rule_group_id,onClick:()=>ee(R.rule_group_id,R.policy_name,R.policy_id),children:"🗑 Delete"})]})]},R.rule_group_id))})]})}),_.jsxs(w2,{ref:T,open:p,label:`Edit policy: ${(v==null?void 0:v.policy_name)??""}`,style:{"--width":"700px"},onSlAfterHide:()=>{g(!1),$(null)},children:[v&&_.jsxs("div",{className:"space-y-5",children:[_.jsxs("div",{className:"grid grid-cols-3 gap-4",style:{fontSize:"13px",color:"#555"},children:[_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"2px"},children:"Policy name"}),_.jsx("div",{style:{padding:"8px 12px",border:"1px solid #B8B7BD",background:"#f5f5f5"},children:v.policy_name})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"2px"},children:"Host group"}),_.jsx("div",{style:{padding:"8px 12px",border:"1px solid #B8B7BD",background:"#f5f5f5"},children:v.host_group_name||v.host_group_id})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"2px"},children:"Platform"}),_.jsx("div",{style:{padding:"8px 12px",border:"1px solid #B8B7BD",background:"#f5f5f5"},children:v.platform})]})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"6px",fontSize:"13px"},children:"Categories to block"}),_.jsx("div",{style:{border:"1px solid #B8B7BD",padding:"12px",maxHeight:"260px",overflowY:"auto",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px 20px"},children:h.length===0?_.jsx("div",{className:"col-span-3 text-center py-4",children:_.jsx(Bs,{style:{fontSize:"1.2rem"}})}):h.sort().map(R=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx("input",{type:"checkbox",id:`edit-cat-${R}`,checked:C.includes(R),onChange:()=>le(R),style:{width:"14px",height:"14px",cursor:"pointer"}}),_.jsx("label",{htmlFor:`edit-cat-${R}`,style:{fontSize:"12px",cursor:"pointer",color:"#374151"},children:R})]},R))}),_.jsxs("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"4px"},children:[C.length," categories selected"]})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,color:"#111",marginBottom:"4px",fontSize:"13px"},children:"Excluded Domains (Whitelist)"}),_.jsxs("p",{style:{fontSize:"11px",color:"#9ca3af",marginBottom:"6px"},children:["These domains will be added as an ",_.jsx("strong",{children:"ALLOW"})," rule with highest priority. Separate with semicolons (;)."]}),_.jsx(Eu,{value:m,onSlInput:R=>y(R.target.value),rows:"3",placeholder:"e.g. excepcion.com;*.excepcion.com",resize:"vertical",style:{"--sl-input-font-size":"var(--sl-font-size-medium)",width:"100%","--sl-input-border-color":"#B8B7BD","--sl-input-border-radius-medium":"0"}})]}),S&&_.jsx(ps,{variant:S.type==="warning"?"warning":S.type==="success"?"success":"danger",open:!0,children:S.message})]}),_.jsxs("div",{slot:"footer",style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[_.jsx(vr,{variant:"neutral",onClick:()=>g(!1),disabled:w,children:"Cancel"}),_.jsx(vr,{variant:"primary",onClick:fe,loading:w,style:{"--sl-button-font-size":"var(--sl-font-size-medium)","background-color":"#1a73e8",color:"white"},children:"Save changes"})]})]})]})}var Mu={},cf=eb;Mu.createRoot=cf.createRoot,Mu.hydrateRoot=cf.hydrateRoot;const jS=`
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
`,kr={header:{fontSize:"2rem",fontWeight:"600",marginBottom:"12px",textAlign:"center"},subHeader:{fontSize:"0.875rem",color:"var(--sl-color-neutral-500)",textAlign:"center"},nav:{position:"relative"},tabList:{display:"flex",gap:"2rem"},tabGroup:{"--sl-spacing-medium":"0",position:"relative",borderBottom:"1px solid #E5E7EB",display:"flex",justifyContent:"center"},tab:{padding:"8px 16px",color:"var(--sl-color-neutral-700)",position:"relative"},activeTab:{fontWeight:"600"},content:{paddingTop:"1.5rem"}};function US({children:e}){const t=Qi();return _.jsxs("div",{className:"max-w-screen-2xl mx-auto px-4",children:[_.jsx("style",{children:jS}),_.jsxs("div",{style:kr.container,children:[_.jsx("h1",{style:kr.header,children:"Category Blocking"}),_.jsx("p",{style:kr.subHeader,children:"Configure category-based blocking rules for your host groups"})]}),_.jsx(nx,{placement:"bottom",style:kr.tabGroup,children:_.jsx("nav",{style:kr.nav,children:_.jsx("div",{style:kr.tabList,children:[{path:"/",label:"Category Blocking Policy"},{path:"/about",label:"Custom Categories"},{path:"/domain-analytics",label:"Domain Analytics"},{path:"/firewall-rules",label:"Firewall Rules"}].map(({path:r,label:s})=>_.jsx(Zw,{panel:r.substring(1)||"home",active:t.pathname===r,style:{...kr.tab,...t.pathname===r?kr.activeTab:{}},children:_.jsx(s1,{to:r,style:{textDecoration:"none",color:"inherit"},children:s})},r))})})}),_.jsx("div",{style:kr.content,children:e})]})}function HS(){return _.jsx("div",{className:"min-h-screen sl-theme-dark p-4",children:_.jsx("div",{className:"max-w-screen-2xl mx-auto px-4",children:_.jsx(Gb,{children:_.jsxs(hi,{element:_.jsx(US,{children:_.jsx(Hb,{})}),children:[_.jsx(hi,{index:!0,path:"/",element:_.jsx(IS,{})}),_.jsx(hi,{path:"/about",element:_.jsx(RS,{})}),_.jsx(hi,{path:"/domain-analytics",element:_.jsx(VS,{})}),_.jsx(hi,{path:"/firewall-rules",element:_.jsx(BS,{})})]})})})})}function WS(){const{falcon:e,navigation:t,isInitialized:r,cachedCategories:s,refreshCategories:i}=Vg();return r?_.jsx(_f.StrictMode,{children:_.jsx(bn.Provider,{value:{falcon:e,navigation:t,isInitialized:r,cachedCategories:s,refreshCategories:i},children:_.jsx(e1,{children:_.jsx(HS,{})})})}):_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:_.jsxs("div",{className:"text-center",children:[_.jsx(Bs,{style:{fontSize:"2rem"}}),_.jsx("p",{className:"mt-4 text-gray-600",children:"Initializing application..."})]})})}const uf=document.querySelector("#app");uf?Mu.createRoot(uf).render(_.jsx(WS,{})):console.error("Could not find #app element");
