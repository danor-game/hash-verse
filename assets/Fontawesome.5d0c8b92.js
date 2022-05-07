import{d as It,c as E,w as Kn,h as bn}from"./index.d13ac80d.js";/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ht(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Ht(Object(e),!0).forEach(function(a){Zn(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Ht(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function rt(t){return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},rt(t)}function qn(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Gt(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Qn(t,n,e){return n&&Gt(t.prototype,n),e&&Gt(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Zn(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Tt(t,n){return te(t)||ee(t,n)||hn(t,n)||re()}function lt(t){return Jn(t)||ne(t)||hn(t)||ae()}function Jn(t){if(Array.isArray(t))return ht(t)}function te(t){if(Array.isArray(t))return t}function ne(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ee(t,n){var e=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function hn(t,n){if(!!t){if(typeof t=="string")return ht(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ht(t,n)}}function ht(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vt=function(){},_t={},yn={},kn=null,wn={mark:Vt,measure:Vt};try{typeof window!="undefined"&&(_t=window),typeof document!="undefined"&&(yn=document),typeof MutationObserver!="undefined"&&(kn=MutationObserver),typeof performance!="undefined"&&(wn=performance)}catch{}var ie=_t.navigator||{},Xt=ie.userAgent,Kt=Xt===void 0?"":Xt,R=_t,y=yn,qt=kn,tt=wn;R.document;var L=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",xn=~Kt.indexOf("MSIE")||~Kt.indexOf("Trident/"),T="___FONT_AWESOME___",yt=16,An="fa",On="svg-inline--fa",j="data-fa-i2svg",kt="data-fa-pseudo-element",oe="data-fa-pseudo-element-pending",Mt="data-prefix",Lt="data-icon",Qt="fontawesome-i2svg",se="async",fe=["HTML","HEAD","STYLE","SCRIPT"],Sn=function(){try{return!0}catch{return!1}}(),zt={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},it={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Cn={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},le={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ue=/fa[srltdbk\-\ ]/,En="fa-layers-text",ce=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,me={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Pn=[1,2,3,4,5,6,7,8,9,10],de=Pn.concat([11,12,13,14,15,16,17,18,19,20]),ve=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],D={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pe=[].concat(lt(Object.keys(it)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",D.GROUP,D.SWAP_OPACITY,D.PRIMARY,D.SECONDARY]).concat(Pn.map(function(t){return"".concat(t,"x")})).concat(de.map(function(t){return"w-".concat(t)})),Nn=R.FontAwesomeConfig||{};function ge(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function be(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var he=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];he.forEach(function(t){var n=Tt(t,2),e=n[0],a=n[1],r=be(ge(e));r!=null&&(Nn[a]=r)})}var ye={familyPrefix:An,styleDefault:"solid",replacementClass:On,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},K=l(l({},ye),Nn);K.autoReplaceSvg||(K.observeMutations=!1);var v={};Object.keys(K).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(e){K[t]=e,nt.forEach(function(a){return a(v)})},get:function(){return K[t]}})});R.FontAwesomeConfig=v;var nt=[];function ke(t){return nt.push(t),function(){nt.splice(nt.indexOf(t),1)}}var z=yt,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function we(t){if(!(!t||!L)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return y.head.insertBefore(n,a),t}}var xe="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){for(var t=12,n="";t-- >0;)n+=xe[Math.random()*62|0];return n}function H(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Rt(t){return t.classList?H(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function In(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ae(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(In(t[e]),'" ')},"").trim()}function ut(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function Ft(t){return t.size!==N.size||t.x!==N.x||t.y!==N.y||t.rotate!==N.rotate||t.flipX||t.flipY}function Oe(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Se(t){var n=t.transform,e=t.width,a=e===void 0?yt:e,r=t.height,o=r===void 0?yt:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&xn?f+="translate(".concat(n.x/z-a/2,"em, ").concat(n.y/z-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/z,"em), calc(-50% + ").concat(n.y/z,"em)) "):f+="translate(".concat(n.x/z,"em, ").concat(n.y/z,"em) "),f+="scale(".concat(n.size/z*(n.flipX?-1:1),", ").concat(n.size/z*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Ce=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Tn(){var t=An,n=On,e=v.familyPrefix,a=v.replacementClass,r=Ce;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Zt=!1;function vt(){v.autoAddCss&&!Zt&&(we(Tn()),Zt=!0)}var Ee={mixout:function(){return{dom:{css:Tn,insertCss:vt}}},hooks:function(){return{beforeDOMElementCreation:function(){vt()},beforeI2svg:function(){vt()}}}},_=R||{};_[T]||(_[T]={});_[T].styles||(_[T].styles={});_[T].hooks||(_[T].hooks={});_[T].shims||(_[T].shims=[]);var P=_[T],_n=[],Pe=function t(){y.removeEventListener("DOMContentLoaded",t),ot=1,_n.map(function(n){return n()})},ot=!1;L&&(ot=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),ot||y.addEventListener("DOMContentLoaded",Pe));function Ne(t){!L||(ot?setTimeout(t,0):_n.push(t))}function J(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?In(t):"<".concat(n," ").concat(Ae(a),">").concat(o.map(J).join(""),"</").concat(n,">")}function Jt(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Ie=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},pt=function(n,e,a,r){var o=Object.keys(n),i=o.length,s=r!==void 0?Ie(e,r):e,f,c,u;for(a===void 0?(f=1,u=n[o[0]]):(f=0,u=a);f<i;f++)c=o[f],u=s(u,n[c],c,n);return u};function Te(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function wt(t){var n=Te(t);return n.length===1?n[0].toString(16):null}function _e(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function tn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function xt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=tn(n);typeof P.hooks.addPack=="function"&&!r?P.hooks.addPack(t,tn(n)):P.styles[t]=l(l({},P.styles[t]||{}),o),t==="fas"&&xt("fa",n)}var q=P.styles,Me=P.shims,Le=Object.values(Cn),Dt=null,Mn={},Ln={},zn={},Rn={},Fn={},ze=Object.keys(zt);function Re(t){return~pe.indexOf(t)}function Fe(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Re(r)?r:null}var Dn=function(){var n=function(o){return pt(q,function(i,s,f){return i[f]=pt(s,o,{}),i},{})};Mn=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Ln=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),Fn=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var e="far"in q||v.autoFetchSvg,a=pt(Me,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});zn=a.names,Rn=a.unicodes,Dt=ct(v.styleDefault)};ke(function(t){Dt=ct(t.styleDefault)});Dn();function jt(t,n){return(Mn[t]||{})[n]}function De(t,n){return(Ln[t]||{})[n]}function W(t,n){return(Fn[t]||{})[n]}function jn(t){return zn[t]||{prefix:null,iconName:null}}function je(t){var n=Rn[t],e=jt("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function F(){return Dt}var Yt=function(){return{prefix:null,iconName:null,rest:[]}};function ct(t){var n=zt[t],e=it[t]||it[n],a=t in P.styles?t:null;return e||a||null}function mt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,a=e===void 0?!1:e,r=null,o=t.reduce(function(i,s){var f=Fe(v.familyPrefix,s);if(q[s]?(s=Le.includes(s)?le[s]:s,r=s,i.prefix=s):ze.indexOf(s)>-1?(r=s,i.prefix=ct(s)):f?i.iconName=f:s!==v.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var c=r==="fa"?jn(i.iconName):{},u=W(i.prefix,i.iconName);c.prefix&&(r=null),i.iconName=c.iconName||u||i.iconName,i.prefix=c.prefix||i.prefix,i.prefix==="far"&&!q.far&&q.fas&&!v.autoFetchSvg&&(i.prefix="fas")}return i},Yt());return(o.prefix==="fa"||r==="fa")&&(o.prefix=F()||"fas"),o}var Ye=function(){function t(){qn(this,t),this.definitions={}}return Qn(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=l(l({},e.definitions[s]||{}),i[s]),xt(s,i[s]);var f=Cn[s];f&&xt(f,i[s]),Dn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,c=i.icon,u=c[2];e[s]||(e[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(e[s][d]=c)}),e[s][f]=c}),e}}]),t}(),nn=[],B={},$={},Ue=Object.keys($);function We(t,n){var e=n.mixoutsTo;return nn=t,B={},Object.keys($).forEach(function(a){Ue.indexOf(a)===-1&&delete $[a]}),nn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),rt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){B[i]||(B[i]=[]),B[i].push(o[i])})}a.provides&&a.provides($)}),e}function At(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=B[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function Y(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=B[t]||[];r.forEach(function(o){o.apply(null,e)})}function M(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return $[t]?$[t].apply(null,n):void 0}function Ot(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||F();if(!!n)return n=W(e,n)||n,Jt(Yn.definitions,e,n)||Jt(P.styles,e,n)}var Yn=new Ye,Be=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Y("noAuto")},$e={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(Y("beforeI2svg",n),M("pseudoElements2svg",n),M("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Ne(function(){Ge({autoReplaceSvgRoot:e}),Y("watch",n)})}},He={icon:function(n){if(n===null)return null;if(rt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:W(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=ct(n[0]);return{prefix:a,iconName:W(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(v.familyPrefix,"-"))>-1||n.match(ue))){var r=mt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||F(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=F();return{prefix:o,iconName:W(o,n)||n}}}},S={noAuto:Be,config:v,dom:$e,parse:He,library:Yn,findIconDefinition:Ot,toHtml:J},Ge=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(P.styles).length>0||v.autoFetchSvg)&&L&&v.autoReplaceSvg&&S.dom.i2svg({node:a})};function dt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return J(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!L){var a=y.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ve(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(Ft(i)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=ut(l(l({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Xe(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(v.familyPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function Ut(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,c=t.maskId,u=t.titleId,d=t.extra,g=t.watchable,h=g===void 0?!1:g,x=a.found?a:e,A=x.width,O=x.height,m=r==="fak",p=[v.replacementClass,o?"".concat(v.familyPrefix,"-").concat(o):""].filter(function(U){return d.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(d.classes).join(" "),b={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":r,"data-icon":o,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(O)})},w=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(A/O*16*.0625,"em")}:{};h&&(b.attributes[j]=""),f&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||Z())},children:[f]}),delete b.attributes.title);var k=l(l({},b),{},{prefix:r,iconName:o,main:e,mask:a,maskId:c,transform:i,symbol:s,styles:l(l({},w),d.styles)}),C=a.found&&e.found?M("generateAbstractMask",k)||{children:[],attributes:{}}:M("generateAbstractIcon",k)||{children:[],attributes:{}},I=C.children,G=C.attributes;return k.children=I,k.attributes=G,s?Xe(k):Ve(k)}function en(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,c=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(c[j]="");var u=l({},i.styles);Ft(r)&&(u.transform=Se({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var d=ut(u);d.length>0&&(c.style=d);var g=[];return g.push({tag:"span",attributes:c,children:[n]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Ke(t){var n=t.content,e=t.title,a=t.extra,r=l(l(l({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=ut(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var gt=P.styles;function St(t){var n=t[0],e=t[1],a=t.slice(4),r=Tt(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(v.familyPrefix,"-").concat(D.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(D.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(D.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var qe={found:!1,width:512,height:512};function Qe(t,n){!Sn&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Ct(t,n){var e=n;return n==="fa"&&v.styleDefault!==null&&(n=F()),new Promise(function(a,r){if(M("missingIconAbstract"),e==="fa"){var o=jn(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&gt[n]&&gt[n][t]){var i=gt[n][t];return a(St(i))}Qe(t,n),a(l(l({},qe),{},{icon:v.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var an=function(){},Et=v.measurePerformance&&tt&&tt.mark&&tt.measure?tt:{mark:an,measure:an},V='FA "6.1.1"',Ze=function(n){return Et.mark("".concat(V," ").concat(n," begins")),function(){return Un(n)}},Un=function(n){Et.mark("".concat(V," ").concat(n," ends")),Et.measure("".concat(V," ").concat(n),"".concat(V," ").concat(n," begins"),"".concat(V," ").concat(n," ends"))},Wt={begin:Ze,end:Un},et=function(){};function rn(t){var n=t.getAttribute?t.getAttribute(j):null;return typeof n=="string"}function Je(t){var n=t.getAttribute?t.getAttribute(Mt):null,e=t.getAttribute?t.getAttribute(Lt):null;return n&&e}function ta(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function na(){if(v.autoReplaceSvg===!0)return at.replace;var t=at[v.autoReplaceSvg];return t||at.replace}function ea(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function aa(t){return y.createElement(t)}function Wn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?ea:aa:e;if(typeof t=="string")return y.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Wn(i,{ceFn:a}))}),r}function ra(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var at={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Wn(r),e)}),e.getAttribute(j)===null&&v.keepOriginalSource){var a=y.createComment(ra(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~Rt(e).indexOf(v.replacementClass))return at.replace(n);var r=new RegExp("".concat(v.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return J(s)}).join(`
`);e.setAttribute(j,""),e.innerHTML=i}};function on(t){t()}function Bn(t,n){var e=typeof n=="function"?n:et;if(t.length===0)e();else{var a=on;v.mutateApproach===se&&(a=R.requestAnimationFrame||on),a(function(){var r=na(),o=Wt.begin("mutate");t.map(r),o(),e()})}}var Bt=!1;function $n(){Bt=!0}function Pt(){Bt=!1}var st=null;function sn(t){if(!!qt&&!!v.observeMutations){var n=t.treeCallback,e=n===void 0?et:n,a=t.nodeCallback,r=a===void 0?et:a,o=t.pseudoElementsCallback,i=o===void 0?et:o,s=t.observeMutationsRoot,f=s===void 0?y:s;st=new qt(function(c){if(!Bt){var u=F();H(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!rn(d.addedNodes[0])&&(v.searchPseudoElements&&i(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&rn(d.target)&&~ve.indexOf(d.attributeName))if(d.attributeName==="class"&&Je(d.target)){var g=mt(Rt(d.target)),h=g.prefix,x=g.iconName;d.target.setAttribute(Mt,h||u),x&&d.target.setAttribute(Lt,x)}else ta(d.target)&&r(d.target)})}}),L&&st.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ia(){!st||st.disconnect()}function oa(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function sa(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=mt(Rt(t));return r.prefix||(r.prefix=F()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=De(r.prefix,t.innerText)||jt(r.prefix,wt(t.innerText))),r}function fa(t){var n=H(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(e?n["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||Z()):(n["aria-hidden"]="true",n.focusable="false")),n}function la(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=sa(t),a=e.iconName,r=e.prefix,o=e.rest,i=fa(t),s=At("parseNodeAttributes",{},t),f=n.styleParser?oa(t):[];return l({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var ua=P.styles;function Hn(t){var n=v.autoReplaceSvg==="nest"?fn(t,{styleParser:!1}):fn(t);return~n.extra.classes.indexOf(En)?M("generateLayersText",t,n):M("generateSvgReplacementMutation",t,n)}function ln(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();var e=y.documentElement.classList,a=function(d){return e.add("".concat(Qt,"-").concat(d))},r=function(d){return e.remove("".concat(Qt,"-").concat(d))},o=v.autoFetchSvg?Object.keys(zt):Object.keys(ua),i=[".".concat(En,":not([").concat(j,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(j,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=H(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Wt.begin("onTree"),c=s.reduce(function(u,d){try{var g=Hn(d);g&&u.push(g)}catch(h){Sn||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(g){Bn(g,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),u()})}).catch(function(g){f(),d(g)})})}function ca(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hn(t).then(function(e){e&&Bn([e],n)})}function ma(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Ot(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Ot(r||{})),t(a,l(l({},e),{},{mask:r}))}}var da=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?N:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,f=s===void 0?null:s,c=e.maskId,u=c===void 0?null:c,d=e.title,g=d===void 0?null:d,h=e.titleId,x=h===void 0?null:h,A=e.classes,O=A===void 0?[]:A,m=e.attributes,p=m===void 0?{}:m,b=e.styles,w=b===void 0?{}:b;if(!!n){var k=n.prefix,C=n.iconName,I=n.icon;return dt(l({type:"icon"},n),function(){return Y("beforeDOMElementCreation",{iconDefinition:n,params:e}),v.autoA11y&&(g?p["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(x||Z()):(p["aria-hidden"]="true",p.focusable="false")),Ut({icons:{main:St(I),mask:f?St(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:l(l({},N),r),symbol:i,title:g,maskId:u,titleId:x,extra:{attributes:p,styles:w,classes:O}})})}},va={mixout:function(){return{icon:ma(da)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ln,e.nodeCallback=ca,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?y:a,o=e.callback,i=o===void 0?function(){}:o;return ln(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,u=a.mask,d=a.maskId,g=a.extra;return new Promise(function(h,x){Promise.all([Ct(r,s),u.iconName?Ct(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var O=Tt(A,2),m=O[0],p=O[1];h([e,Ut({icons:{main:m,mask:p},prefix:s,iconName:r,transform:f,symbol:c,maskId:d,title:o,titleId:i,extra:g,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,f=ut(s);f.length>0&&(r.style=f);var c;return Ft(i)&&(c=M("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:r}}}},pa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return dt({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.familyPrefix,"-layers")].concat(lt(o)).join(" ")},children:i}]})}}}},ga={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,c=f===void 0?{}:f,u=a.styles,d=u===void 0?{}:u;return dt({type:"counter",content:e},function(){return Y("beforeDOMElementCreation",{content:e,params:a}),Ke({content:e.toString(),title:o,extra:{attributes:c,styles:d,classes:["".concat(v.familyPrefix,"-layers-counter")].concat(lt(s))}})})}}}},ba={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?N:r,i=a.title,s=i===void 0?null:i,f=a.classes,c=f===void 0?[]:f,u=a.attributes,d=u===void 0?{}:u,g=a.styles,h=g===void 0?{}:g;return dt({type:"text",content:e},function(){return Y("beforeDOMElementCreation",{content:e,params:a}),en({content:e,transform:l(l({},N),o),title:s,extra:{attributes:d,styles:h,classes:["".concat(v.familyPrefix,"-layers-text")].concat(lt(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(xn){var c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/c,f=u.height/c}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,en({content:e.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},ha=new RegExp('"',"ug"),un=[1105920,1112319];function ya(t){var n=t.replace(ha,""),e=_e(n,0),a=e>=un[0]&&e<=un[1],r=n.length===2?n[0]===n[1]:!1;return{value:wt(r?n[0]:n),isSecondary:a||r}}function cn(t,n){var e="".concat(oe).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=H(t.children),i=o.filter(function(C){return C.getAttribute(kt)===n})[0],s=R.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(ce),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&u!=="none"&&u!==""){var d=s.getPropertyValue("content"),g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?it[f[2].toLowerCase()]:me[c],h=ya(d),x=h.value,A=h.isSecondary,O=f[0].startsWith("FontAwesome"),m=jt(g,x),p=m;if(O){var b=je(x);b.iconName&&b.prefix&&(m=b.iconName,g=b.prefix)}if(m&&!A&&(!i||i.getAttribute(Mt)!==g||i.getAttribute(Lt)!==p)){t.setAttribute(e,p),i&&t.removeChild(i);var w=la(),k=w.extra;k.attributes[kt]=n,Ct(m,g).then(function(C){var I=Ut(l(l({},w),{},{icons:{main:C,mask:Yt()},prefix:g,iconName:p,extra:k,watchable:!0})),G=y.createElement("svg");n==="::before"?t.insertBefore(G,t.firstChild):t.appendChild(G),G.outerHTML=I.map(function(U){return J(U)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function ka(t){return Promise.all([cn(t,"::before"),cn(t,"::after")])}function wa(t){return t.parentNode!==document.head&&!~fe.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function mn(t){if(!!L)return new Promise(function(n,e){var a=H(t.querySelectorAll("*")).filter(wa).map(ka),r=Wt.begin("searchPseudoElements");$n(),Promise.all(a).then(function(){r(),Pt(),n()}).catch(function(){r(),Pt(),e()})})}var xa={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=mn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;v.searchPseudoElements&&mn(r)}}},dn=!1,Aa={mixout:function(){return{dom:{unwatch:function(){$n(),dn=!0}}}},hooks:function(){return{bootstrap:function(){sn(At("mutationObserverCallbacks",{}))},noAuto:function(){ia()},watch:function(e){var a=e.observeMutationsRoot;dn?Pt():sn(At("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},vn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Oa={mixout:function(){return{parse:{transform:function(e){return vn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=vn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(c," ").concat(u)},g={transform:"translate(".concat(i/2*-1," -256)")},h={outer:s,inner:d,path:g};return{tag:"g",attributes:l({},h.outer),children:[{tag:"g",attributes:l({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:l(l({},a.icon.attributes),h.path)}]}]}}}},bt={x:0,y:0,width:"100%",height:"100%"};function pn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Sa(t){return t.tag==="g"?t.children:[t]}var Ca={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?mt(r.split(" ").map(function(i){return i.trim()})):Yt();return o.prefix||(o.prefix=F()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,f=e.transform,c=o.width,u=o.icon,d=i.width,g=i.icon,h=Oe({transform:f,containerWidth:d,iconWidth:c}),x={tag:"rect",attributes:l(l({},bt),{},{fill:"white"})},A=u.children?{children:u.children.map(pn)}:{},O={tag:"g",attributes:l({},h.inner),children:[pn(l({tag:u.tag,attributes:l(l({},u.attributes),h.path)},A))]},m={tag:"g",attributes:l({},h.outer),children:[O]},p="mask-".concat(s||Z()),b="clip-".concat(s||Z()),w={tag:"mask",attributes:l(l({},bt),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Sa(g)},w]};return a.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(p,")")},bt)}),{children:a,attributes:r}}}},Ea={provides:function(n){var e=!1;R.matchMedia&&(e=R.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Pa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},Na=[Ee,va,pa,ga,ba,xa,Aa,Oa,Ca,Ea,Pa];We(Na,{mixoutsTo:S});S.noAuto;var Gn=S.config,Ia=S.library;S.dom;var Vn=S.parse;S.findIconDefinition;S.toHtml;var Ta=S.icon;S.layer;var _a=S.text;S.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ma={prefix:"fas",iconName:"map",icon:[576,512,[62072,128506],"f279","M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"]},La=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function za(t,n){return n={exports:{}},t(n,n.exports),n.exports}var Ra=za(function(t){(function(n){var e=function(m,p,b){if(!c(p)||d(p)||g(p)||h(p)||f(p))return p;var w,k=0,C=0;if(u(p))for(w=[],C=p.length;k<C;k++)w.push(e(m,p[k],b));else{w={};for(var I in p)Object.prototype.hasOwnProperty.call(p,I)&&(w[m(I,b)]=e(m,p[I],b))}return w},a=function(m,p){p=p||{};var b=p.separator||"_",w=p.split||/(?=[A-Z])/;return m.split(w).join(b)},r=function(m){return x(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(p,b){return b?b.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},o=function(m){var p=r(m);return p.substr(0,1).toUpperCase()+p.substr(1)},i=function(m,p){return a(m,p).toLowerCase()},s=Object.prototype.toString,f=function(m){return typeof m=="function"},c=function(m){return m===Object(m)},u=function(m){return s.call(m)=="[object Array]"},d=function(m){return s.call(m)=="[object Date]"},g=function(m){return s.call(m)=="[object RegExp]"},h=function(m){return s.call(m)=="[object Boolean]"},x=function(m){return m=m-0,m===m},A=function(m,p){var b=p&&"process"in p?p.process:p;return typeof b!="function"?m:function(w,k){return b(w,m,k)}},O={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(m,p){return e(A(r,p),m)},decamelizeKeys:function(m,p){return e(A(i,p),m,p)},pascalizeKeys:function(m,p){return e(A(o,p),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:n.humps=O})(La)}),Fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t},ft=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},Da=function(t,n){var e={};for(var a in t)n.indexOf(a)>=0||!Object.prototype.hasOwnProperty.call(t,a)||(e[a]=t[a]);return e},Nt=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}else return Array.from(t)};function ja(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=Ra.camelize(e.slice(0,a)),o=e.slice(a+1).trim();return n[r]=o,n},{})}function Ya(t){return t.split(/\s+/).reduce(function(n,e){return n[e]=!0,n},{})}function $t(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return $t(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var u=t.attributes[c];switch(c){case"class":f.class=Ya(u);break;case"style":f.style=ja(u);break;default:f.attrs[c]=u}return f},{attrs:{},class:{},style:{}});e.class;var o=e.style,i=o===void 0?{}:o,s=Da(e,["class","style"]);return bn(t.tag,ft({},n,{class:r.class,style:ft({},r.style,i)},r.attrs,s),a)}var Xn=!1;try{Xn=!0}catch{}function Ua(){if(!Xn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Q(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?X({},t,n):{}}function Wa(t){var n,e=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},X(n,"fa-"+t.size,t.size!==null),X(n,"fa-rotate-"+t.rotation,t.rotation!==null),X(n,"fa-pull-"+t.pull,t.pull!==null),X(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(e).map(function(a){return e[a]?a:null}).filter(function(a){return a})}function gn(t){if(t===null)return null;if((typeof t=="undefined"?"undefined":Fa(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ba=It({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(n){return["horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(n,e){var a=e.attrs,r=E(function(){return gn(n.icon)}),o=E(function(){return Q("classes",Wa(n))}),i=E(function(){return Q("transform",typeof n.transform=="string"?Vn.transform(n.transform):n.transform)}),s=E(function(){return Q("mask",gn(n.mask))}),f=E(function(){return Ta(r.value,ft({},o.value,i.value,s.value,{symbol:n.symbol,title:n.title}))});Kn(f,function(u){if(!u)return Ua("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=E(function(){return f.value?$t(f.value.abstract[0],{},a):null});return function(){return c.value}}});It({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(n,e){var a=e.slots,r=Gn.familyPrefix,o=E(function(){return[r+"-layers"].concat(Nt(n.fixedWidth?[r+"-fw"]:[]))});return function(){return bn("div",{class:o.value},a.default?a.default():[])}}});It({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(n){return["bottom-left","bottom-right","top-left","top-right"].indexOf(n)>-1}}},setup:function(n,e){var a=e.attrs,r=Gn.familyPrefix,o=E(function(){return Q("classes",[].concat(Nt(n.counter?[r+"-layers-counter"]:[]),Nt(n.position?[r+"-layers-"+n.position]:[])))}),i=E(function(){return Q("transform",typeof n.transform=="string"?Vn.transform(n.transform):n.transform)}),s=E(function(){var c=_a(n.value.toString(),ft({},i.value,o.value)),u=c.abstract;return n.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),f=E(function(){return $t(s.value,{},a)});return function(){return f.value}}});const Ha=function(t){Ia.add(Ma),t.component("Fas",Ba)};export{Ha as install};
