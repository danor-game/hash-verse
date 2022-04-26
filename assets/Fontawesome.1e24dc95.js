import{q as Pn,d as M,s as ht,w as qt}from"./index.ec891db5.js";/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Gn(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function l(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Gn(Object(a),!0).forEach(function(e){Jt(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):Gn(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function on(n){return on=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},on(n)}function Qt(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function Xn(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function Zt(n,t,a){return t&&Xn(n.prototype,t),a&&Xn(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function Jt(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function In(n,t){return ta(n)||ea(n,t)||yt(n,t)||ia()}function un(n){return na(n)||aa(n)||yt(n)||ra()}function na(n){if(Array.isArray(n))return Cn(n)}function ta(n){if(Array.isArray(n))return n}function aa(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ea(n,t){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var e=[],r=!0,o=!1,i,s;try{for(a=a.call(n);!(r=(i=a.next()).done)&&(e.push(i.value),!(t&&e.length===t));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw s}}return e}}function yt(n,t){if(!!n){if(typeof n=="string")return Cn(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Cn(n,t)}}function Cn(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,e=new Array(t);a<t;a++)e[a]=n[a];return e}function ra(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ia(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Kn=function(){},Tn={},Ct={},kt=null,xt={mark:Kn,measure:Kn};try{typeof window!="undefined"&&(Tn=window),typeof document!="undefined"&&(Ct=document),typeof MutationObserver!="undefined"&&(kt=MutationObserver),typeof performance!="undefined"&&(xt=performance)}catch{}var oa=Tn.navigator||{},qn=oa.userAgent,Qn=qn===void 0?"":qn,D=Tn,C=Ct,Zn=kt,tn=xt;D.document;var _=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",wt=~Qn.indexOf("MSIE")||~Qn.indexOf("Trident/"),P="___FONT_AWESOME___",kn=16,At="fa",St="svg-inline--fa",j="data-fa-i2svg",xn="data-fa-pseudo-element",sa="data-fa-pseudo-element-pending",_n="data-prefix",Rn="data-icon",Jn="fontawesome-i2svg",fa="async",la=["HTML","HEAD","STYLE","SCRIPT"],Lt=function(){try{return!0}catch{return!1}}(),Dn={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},sn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Ot={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},ca={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ua=/fa[srltdbk\-\ ]/,Mt="fa-layers-text",ma=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,da={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Nt=[1,2,3,4,5,6,7,8,9,10],va=Nt.concat([11,12,13,14,15,16,17,18,19,20]),pa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ga=[].concat(un(Object.keys(sn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H.GROUP,H.SWAP_OPACITY,H.PRIMARY,H.SECONDARY]).concat(Nt.map(function(n){return"".concat(n,"x")})).concat(va.map(function(n){return"w-".concat(n)})),zt=D.FontAwesomeConfig||{};function ba(n){var t=C.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function ha(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(C&&typeof C.querySelector=="function"){var ya=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ya.forEach(function(n){var t=In(n,2),a=t[0],e=t[1],r=ha(ba(a));r!=null&&(zt[e]=r)})}var Ca={familyPrefix:At,styleDefault:"solid",replacementClass:St,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},q=l(l({},Ca),zt);q.autoReplaceSvg||(q.observeMutations=!1);var v={};Object.keys(q).forEach(function(n){Object.defineProperty(v,n,{enumerable:!0,set:function(a){q[n]=a,an.forEach(function(e){return e(v)})},get:function(){return q[n]}})});D.FontAwesomeConfig=v;var an=[];function ka(n){return an.push(n),function(){an.splice(an.indexOf(n),1)}}var R=kn,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xa(n){if(!(!n||!_)){var t=C.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=C.head.childNodes,e=null,r=a.length-1;r>-1;r--){var o=a[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=o)}return C.head.insertBefore(t,e),n}}var wa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){for(var n=12,t="";n-- >0;)t+=wa[Math.random()*62|0];return t}function $(n){for(var t=[],a=(n||[]).length>>>0;a--;)t[a]=n[a];return t}function Fn(n){return n.classList?$(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Et(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Aa(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Et(n[a]),'" ')},"").trim()}function mn(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a].trim(),";")},"")}function Hn(n){return n.size!==z.size||n.x!==z.x||n.y!==z.y||n.rotate!==z.rotate||n.flipX||n.flipY}function Sa(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:u}}function La(n){var t=n.transform,a=n.width,e=a===void 0?kn:a,r=n.height,o=r===void 0?kn:r,i=n.startCentered,s=i===void 0?!1:i,f="";return s&&wt?f+="translate(".concat(t.x/R-e/2,"em, ").concat(t.y/R-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/R,"em), calc(-50% + ").concat(t.y/R,"em)) "):f+="translate(".concat(t.x/R,"em, ").concat(t.y/R,"em) "),f+="scale(".concat(t.size/R*(t.flipX?-1:1),", ").concat(t.size/R*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Oa=`:root, :host {
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
}`;function Pt(){var n=At,t=St,a=v.familyPrefix,e=v.replacementClass,r=Oa;if(a!==n||e!==t){var o=new RegExp("\\.".concat(n,"\\-"),"g"),i=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var nt=!1;function gn(){v.autoAddCss&&!nt&&(xa(Pt()),nt=!0)}var Ma={mixout:function(){return{dom:{css:Pt,insertCss:gn}}},hooks:function(){return{beforeDOMElementCreation:function(){gn()},beforeI2svg:function(){gn()}}}},I=D||{};I[P]||(I[P]={});I[P].styles||(I[P].styles={});I[P].hooks||(I[P].hooks={});I[P].shims||(I[P].shims=[]);var N=I[P],It=[],Na=function n(){C.removeEventListener("DOMContentLoaded",n),fn=1,It.map(function(t){return t()})},fn=!1;_&&(fn=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),fn||C.addEventListener("DOMContentLoaded",Na));function za(n){!_||(fn?setTimeout(n,0):It.push(n))}function nn(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,o=r===void 0?[]:r;return typeof n=="string"?Et(n):"<".concat(t," ").concat(Aa(e),">").concat(o.map(nn).join(""),"</").concat(t,">")}function tt(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}var Ea=function(t,a){return function(e,r,o,i){return t.call(a,e,r,o,i)}},bn=function(t,a,e,r){var o=Object.keys(t),i=o.length,s=r!==void 0?Ea(a,r):a,f,u,c;for(e===void 0?(f=1,c=t[o[0]]):(f=0,c=e);f<i;f++)u=o[f],c=s(c,t[u],u,t);return c};function Pa(n){for(var t=[],a=0,e=n.length;a<e;){var r=n.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var o=n.charCodeAt(a++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function wn(n){var t=Pa(n);return t.length===1?t[0].toString(16):null}function Ia(n,t){var a=n.length,e=n.charCodeAt(t),r;return e>=55296&&e<=56319&&a>t+1&&(r=n.charCodeAt(t+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function at(n){return Object.keys(n).reduce(function(t,a){var e=n[a],r=!!e.icon;return r?t[e.iconName]=e.icon:t[a]=e,t},{})}function An(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,o=at(t);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(n,at(t)):N.styles[n]=l(l({},N.styles[n]||{}),o),n==="fas"&&An("fa",t)}var Q=N.styles,Ta=N.shims,_a=Object.values(Ot),jn=null,Tt={},_t={},Rt={},Dt={},Ft={},Ra=Object.keys(Dn);function Da(n){return~ga.indexOf(n)}function Fa(n,t){var a=t.split("-"),e=a[0],r=a.slice(1).join("-");return e===n&&r!==""&&!Da(r)?r:null}var Ht=function(){var t=function(o){return bn(Q,function(i,s,f){return i[f]=bn(s,o,{}),i},{})};Tt=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),_t=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),Ft=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var a="far"in Q||v.autoFetchSvg,e=bn(Ta,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Rt=e.names,Dt=e.unicodes,jn=dn(v.styleDefault)};ka(function(n){jn=dn(n.styleDefault)});Ht();function Yn(n,t){return(Tt[n]||{})[t]}function Ha(n,t){return(_t[n]||{})[t]}function W(n,t){return(Ft[n]||{})[t]}function jt(n){return Rt[n]||{prefix:null,iconName:null}}function ja(n){var t=Dt[n],a=Yn("fas",n);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function F(){return jn}var Un=function(){return{prefix:null,iconName:null,rest:[]}};function dn(n){var t=Dn[n],a=sn[n]||sn[t],e=n in N.styles?n:null;return a||e||null}function vn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,e=a===void 0?!1:a,r=null,o=n.reduce(function(i,s){var f=Fa(v.familyPrefix,s);if(Q[s]?(s=_a.includes(s)?ca[s]:s,r=s,i.prefix=s):Ra.indexOf(s)>-1?(r=s,i.prefix=dn(s)):f?i.iconName=f:s!==v.replacementClass&&i.rest.push(s),!e&&i.prefix&&i.iconName){var u=r==="fa"?jt(i.iconName):{},c=W(i.prefix,i.iconName);u.prefix&&(r=null),i.iconName=u.iconName||c||i.iconName,i.prefix=u.prefix||i.prefix,i.prefix==="far"&&!Q.far&&Q.fas&&!v.autoFetchSvg&&(i.prefix="fas")}return i},Un());return(o.prefix==="fa"||r==="fa")&&(o.prefix=F()||"fas"),o}var Ya=function(){function n(){Qt(this,n),this.definitions={}}return Zt(n,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=l(l({},a.definitions[s]||{}),i[s]),An(s,i[s]);var f=Ot[s];f&&An(f,i[s]),Ht()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,u=i.icon,c=u[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][f]=u}),a}}]),n}(),et=[],B={},V={},Ua=Object.keys(V);function Wa(n,t){var a=t.mixoutsTo;return et=n,B={},Object.keys(V).forEach(function(e){Ua.indexOf(e)===-1&&delete V[e]}),et.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),on(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=r[i][s]})}),e.hooks){var o=e.hooks();Object.keys(o).forEach(function(i){B[i]||(B[i]=[]),B[i].push(o[i])})}e.provides&&e.provides(V)}),a}function Sn(n,t){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var o=B[n]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(e))}),t}function Y(n){for(var t=arguments.length,a=new Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];var r=B[n]||[];r.forEach(function(o){o.apply(null,a)})}function T(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return V[n]?V[n].apply(null,t):void 0}function Ln(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,a=n.prefix||F();if(!!t)return t=W(a,t)||t,tt(Yt.definitions,a,t)||tt(N.styles,a,t)}var Yt=new Ya,Ba=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Y("noAuto")},Va={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(Y("beforeI2svg",t),T("pseudoElements2svg",t),T("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,za(function(){Ga({autoReplaceSvgRoot:a}),Y("watch",t)})}},$a={icon:function(t){if(t===null)return null;if(on(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=dn(t[0]);return{prefix:e,iconName:W(e,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(v.familyPrefix,"-"))>-1||t.match(ua))){var r=vn(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||F(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=F();return{prefix:o,iconName:W(o,t)||t}}}},L={noAuto:Ba,config:v,dom:Va,parse:$a,library:Yt,findIconDefinition:Ln,toHtml:nn},Ga=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,e=a===void 0?C:a;(Object.keys(N.styles).length>0||v.autoFetchSvg)&&_&&v.autoReplaceSvg&&L.dom.i2svg({node:e})};function pn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return nn(e)})}}),Object.defineProperty(n,"node",{get:function(){if(!!_){var e=C.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function Xa(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,o=n.styles,i=n.transform;if(Hn(i)&&a.found&&!e.found){var s=a.width,f=a.height,u={x:s/f/2,y:.5};r.style=mn(l(l({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Ka(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,o=n.symbol,i=o===!0?"".concat(t,"-").concat(v.familyPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:e}]}]}function Wn(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,o=n.iconName,i=n.transform,s=n.symbol,f=n.title,u=n.maskId,c=n.titleId,d=n.extra,g=n.watchable,h=g===void 0?!1:g,w=e.found?e:a,A=w.width,S=w.height,m=r==="fak",p=[v.replacementClass,o?"".concat(v.familyPrefix,"-").concat(o):""].filter(function(U){return d.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(d.classes).join(" "),b={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":r,"data-icon":o,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(S)})},x=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(A/S*16*.0625,"em")}:{};h&&(b.attributes[j]=""),f&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||J())},children:[f]}),delete b.attributes.title);var k=l(l({},b),{},{prefix:r,iconName:o,main:a,mask:e,maskId:u,transform:i,symbol:s,styles:l(l({},x),d.styles)}),O=e.found&&a.found?T("generateAbstractMask",k)||{children:[],attributes:{}}:T("generateAbstractIcon",k)||{children:[],attributes:{}},E=O.children,G=O.attributes;return k.children=E,k.attributes=G,s?Ka(k):Xa(k)}function rt(n){var t=n.content,a=n.width,e=n.height,r=n.transform,o=n.title,i=n.extra,s=n.watchable,f=s===void 0?!1:s,u=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(u[j]="");var c=l({},i.styles);Hn(r)&&(c.transform=La({transform:r,startCentered:!0,width:a,height:e}),c["-webkit-transform"]=c.transform);var d=mn(c);d.length>0&&(u.style=d);var g=[];return g.push({tag:"span",attributes:u,children:[t]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function qa(n){var t=n.content,a=n.title,e=n.extra,r=l(l(l({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),o=mn(e.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var hn=N.styles;function On(n){var t=n[0],a=n[1],e=n.slice(4),r=In(e,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(v.familyPrefix,"-").concat(H.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(H.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(H.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:i}}var Qa={found:!1,width:512,height:512};function Za(n,t){!Lt&&!v.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function Mn(n,t){var a=t;return t==="fa"&&v.styleDefault!==null&&(t=F()),new Promise(function(e,r){if(T("missingIconAbstract"),a==="fa"){var o=jt(n)||{};n=o.iconName||n,t=o.prefix||t}if(n&&t&&hn[t]&&hn[t][n]){var i=hn[t][n];return e(On(i))}Za(n,t),e(l(l({},Qa),{},{icon:v.showMissingIcons&&n?T("missingIconAbstract")||{}:{}}))})}var it=function(){},Nn=v.measurePerformance&&tn&&tn.mark&&tn.measure?tn:{mark:it,measure:it},X='FA "6.1.1"',Ja=function(t){return Nn.mark("".concat(X," ").concat(t," begins")),function(){return Ut(t)}},Ut=function(t){Nn.mark("".concat(X," ").concat(t," ends")),Nn.measure("".concat(X," ").concat(t),"".concat(X," ").concat(t," begins"),"".concat(X," ").concat(t," ends"))},Bn={begin:Ja,end:Ut},en=function(){};function ot(n){var t=n.getAttribute?n.getAttribute(j):null;return typeof t=="string"}function ne(n){var t=n.getAttribute?n.getAttribute(_n):null,a=n.getAttribute?n.getAttribute(Rn):null;return t&&a}function te(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(v.replacementClass)}function ae(){if(v.autoReplaceSvg===!0)return rn.replace;var n=rn[v.autoReplaceSvg];return n||rn.replace}function ee(n){return C.createElementNS("http://www.w3.org/2000/svg",n)}function re(n){return C.createElement(n)}function Wt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,e=a===void 0?n.tag==="svg"?ee:re:a;if(typeof n=="string")return C.createTextNode(n);var r=e(n.tag);Object.keys(n.attributes||[]).forEach(function(i){r.setAttribute(i,n.attributes[i])});var o=n.children||[];return o.forEach(function(i){r.appendChild(Wt(i,{ceFn:e}))}),r}function ie(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var rn={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Wt(r),a)}),a.getAttribute(j)===null&&v.keepOriginalSource){var e=C.createComment(ie(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(t){var a=t[0],e=t[1];if(~Fn(a).indexOf(v.replacementClass))return rn.replace(t);var r=new RegExp("".concat(v.familyPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var o=e[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=e.map(function(s){return nn(s)}).join(`
`);a.setAttribute(j,""),a.innerHTML=i}};function st(n){n()}function Bt(n,t){var a=typeof t=="function"?t:en;if(n.length===0)a();else{var e=st;v.mutateApproach===fa&&(e=D.requestAnimationFrame||st),e(function(){var r=ae(),o=Bn.begin("mutate");n.map(r),o(),a()})}}var Vn=!1;function Vt(){Vn=!0}function zn(){Vn=!1}var ln=null;function ft(n){if(!!Zn&&!!v.observeMutations){var t=n.treeCallback,a=t===void 0?en:t,e=n.nodeCallback,r=e===void 0?en:e,o=n.pseudoElementsCallback,i=o===void 0?en:o,s=n.observeMutationsRoot,f=s===void 0?C:s;ln=new Zn(function(u){if(!Vn){var c=F();$(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ot(d.addedNodes[0])&&(v.searchPseudoElements&&i(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&ot(d.target)&&~pa.indexOf(d.attributeName))if(d.attributeName==="class"&&ne(d.target)){var g=vn(Fn(d.target)),h=g.prefix,w=g.iconName;d.target.setAttribute(_n,h||c),w&&d.target.setAttribute(Rn,w)}else te(d.target)&&r(d.target)})}}),_&&ln.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function oe(){!ln||ln.disconnect()}function se(n){var t=n.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(e,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(e[i]=s.join(":").trim()),e},{})),a}function fe(n){var t=n.getAttribute("data-prefix"),a=n.getAttribute("data-icon"),e=n.innerText!==void 0?n.innerText.trim():"",r=vn(Fn(n));return r.prefix||(r.prefix=F()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||r.prefix&&e.length>0&&(r.iconName=Ha(r.prefix,n.innerText)||Yn(r.prefix,wn(n.innerText))),r}function le(n){var t=$(n.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),a=n.getAttribute("title"),e=n.getAttribute("data-fa-title-id");return v.autoA11y&&(a?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(e||J()):(t["aria-hidden"]="true",t.focusable="false")),t}function ce(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=fe(n),e=a.iconName,r=a.prefix,o=a.rest,i=le(n),s=Sn("parseNodeAttributes",{},n),f=t.styleParser?se(n):[];return l({iconName:e,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var ue=N.styles;function $t(n){var t=v.autoReplaceSvg==="nest"?lt(n,{styleParser:!1}):lt(n);return~t.extra.classes.indexOf(Mt)?T("generateLayersText",n,t):T("generateSvgReplacementMutation",n,t)}function ct(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var a=C.documentElement.classList,e=function(d){return a.add("".concat(Jn,"-").concat(d))},r=function(d){return a.remove("".concat(Jn,"-").concat(d))},o=v.autoFetchSvg?Object.keys(Dn):Object.keys(ue),i=[".".concat(Mt,":not([").concat(j,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(j,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=$(n.querySelectorAll(i))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=Bn.begin("onTree"),u=s.reduce(function(c,d){try{var g=$t(d);g&&c.push(g)}catch(h){Lt||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(g){Bt(g,function(){e("active"),e("complete"),r("pending"),typeof t=="function"&&t(),f(),c()})}).catch(function(g){f(),d(g)})})}function me(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$t(n).then(function(a){a&&Bt([a],t)})}function de(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:Ln(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ln(r||{})),n(e,l(l({},a),{},{mask:r}))}}var ve=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?z:e,o=a.symbol,i=o===void 0?!1:o,s=a.mask,f=s===void 0?null:s,u=a.maskId,c=u===void 0?null:u,d=a.title,g=d===void 0?null:d,h=a.titleId,w=h===void 0?null:h,A=a.classes,S=A===void 0?[]:A,m=a.attributes,p=m===void 0?{}:m,b=a.styles,x=b===void 0?{}:b;if(!!t){var k=t.prefix,O=t.iconName,E=t.icon;return pn(l({type:"icon"},t),function(){return Y("beforeDOMElementCreation",{iconDefinition:t,params:a}),v.autoA11y&&(g?p["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(w||J()):(p["aria-hidden"]="true",p.focusable="false")),Wn({icons:{main:On(E),mask:f?On(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:O,transform:l(l({},z),r),symbol:i,title:g,maskId:c,titleId:w,extra:{attributes:p,styles:x,classes:S}})})}},pe={mixout:function(){return{icon:de(ve)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=ct,a.nodeCallback=me,a}}},provides:function(t){t.i2svg=function(a){var e=a.node,r=e===void 0?C:e,o=a.callback,i=o===void 0?function(){}:o;return ct(r,i)},t.generateSvgReplacementMutation=function(a,e){var r=e.iconName,o=e.title,i=e.titleId,s=e.prefix,f=e.transform,u=e.symbol,c=e.mask,d=e.maskId,g=e.extra;return new Promise(function(h,w){Promise.all([Mn(r,s),c.iconName?Mn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var S=In(A,2),m=S[0],p=S[1];h([a,Wn({icons:{main:m,mask:p},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:o,titleId:i,extra:g,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,o=a.main,i=a.transform,s=a.styles,f=mn(s);f.length>0&&(r.style=f);var u;return Hn(i)&&(u=T("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),e.push(u||o.icon),{children:e,attributes:r}}}},ge={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,o=r===void 0?[]:r;return pn({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:a,params:e});var i=[];return a(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.familyPrefix,"-layers")].concat(un(o)).join(" ")},children:i}]})}}}},be={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,o=r===void 0?null:r,i=e.classes,s=i===void 0?[]:i,f=e.attributes,u=f===void 0?{}:f,c=e.styles,d=c===void 0?{}:c;return pn({type:"counter",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:e}),qa({content:a.toString(),title:o,extra:{attributes:u,styles:d,classes:["".concat(v.familyPrefix,"-layers-counter")].concat(un(s))}})})}}}},he={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,o=r===void 0?z:r,i=e.title,s=i===void 0?null:i,f=e.classes,u=f===void 0?[]:f,c=e.attributes,d=c===void 0?{}:c,g=e.styles,h=g===void 0?{}:g;return pn({type:"text",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:e}),rt({content:a,transform:l(l({},z),o),title:s,extra:{attributes:d,styles:h,classes:["".concat(v.familyPrefix,"-layers-text")].concat(un(u))}})})}}},provides:function(t){t.generateLayersText=function(a,e){var r=e.title,o=e.transform,i=e.extra,s=null,f=null;if(wt){var u=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();s=c.width/u,f=c.height/u}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,rt({content:a.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},ye=new RegExp('"',"ug"),ut=[1105920,1112319];function Ce(n){var t=n.replace(ye,""),a=Ia(t,0),e=a>=ut[0]&&a<=ut[1],r=t.length===2?t[0]===t[1]:!1;return{value:wn(r?t[0]:t),isSecondary:e||r}}function mt(n,t){var a="".concat(sa).concat(t.replace(":","-"));return new Promise(function(e,r){if(n.getAttribute(a)!==null)return e();var o=$(n.children),i=o.filter(function(O){return O.getAttribute(xn)===t})[0],s=D.getComputedStyle(n,t),f=s.getPropertyValue("font-family").match(ma),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!f)return n.removeChild(i),e();if(f&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?sn[f[2].toLowerCase()]:da[u],h=Ce(d),w=h.value,A=h.isSecondary,S=f[0].startsWith("FontAwesome"),m=Yn(g,w),p=m;if(S){var b=ja(w);b.iconName&&b.prefix&&(m=b.iconName,g=b.prefix)}if(m&&!A&&(!i||i.getAttribute(_n)!==g||i.getAttribute(Rn)!==p)){n.setAttribute(a,p),i&&n.removeChild(i);var x=ce(),k=x.extra;k.attributes[xn]=t,Mn(m,g).then(function(O){var E=Wn(l(l({},x),{},{icons:{main:O,mask:Un()},prefix:g,iconName:p,extra:k,watchable:!0})),G=C.createElement("svg");t==="::before"?n.insertBefore(G,n.firstChild):n.appendChild(G),G.outerHTML=E.map(function(U){return nn(U)}).join(`
`),n.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function ke(n){return Promise.all([mt(n,"::before"),mt(n,"::after")])}function xe(n){return n.parentNode!==document.head&&!~la.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(xn)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function dt(n){if(!!_)return new Promise(function(t,a){var e=$(n.querySelectorAll("*")).filter(xe).map(ke),r=Bn.begin("searchPseudoElements");Vt(),Promise.all(e).then(function(){r(),zn(),t()}).catch(function(){r(),zn(),a()})})}var we={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=dt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?C:e;v.searchPseudoElements&&dt(r)}}},vt=!1,Ae={mixout:function(){return{dom:{unwatch:function(){Vt(),vt=!0}}}},hooks:function(){return{bootstrap:function(){ft(Sn("mutationObserverCallbacks",{}))},noAuto:function(){oe()},watch:function(a){var e=a.observeMutationsRoot;vt?zn():ft(Sn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},pt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(e,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return e.flipX=!0,e;if(i&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(i){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},Se={mixout:function(){return{parse:{transform:function(a){return pt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=pt(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(c)},g={transform:"translate(".concat(i/2*-1," -256)")},h={outer:s,inner:d,path:g};return{tag:"g",attributes:l({},h.outer),children:[{tag:"g",attributes:l({},h.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l(l({},e.icon.attributes),h.path)}]}]}}}},yn={x:0,y:0,width:"100%",height:"100%"};function gt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function Le(n){return n.tag==="g"?n.children:[n]}var Oe={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),o=r?vn(r.split(" ").map(function(i){return i.trim()})):Un();return o.prefix||(o.prefix=F()),a.mask=o,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var e=a.children,r=a.attributes,o=a.main,i=a.mask,s=a.maskId,f=a.transform,u=o.width,c=o.icon,d=i.width,g=i.icon,h=Sa({transform:f,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:l(l({},yn),{},{fill:"white"})},A=c.children?{children:c.children.map(gt)}:{},S={tag:"g",attributes:l({},h.inner),children:[gt(l({tag:c.tag,attributes:l(l({},c.attributes),h.path)},A))]},m={tag:"g",attributes:l({},h.outer),children:[S]},p="mask-".concat(s||J()),b="clip-".concat(s||J()),x={tag:"mask",attributes:l(l({},yn),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Le(g)},x]};return e.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(p,")")},yn)}),{children:e,attributes:r}}}},Me={provides:function(t){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ne={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return a.symbol=o,a}}}},ze=[Ma,pe,ge,be,he,we,Ae,Se,Oe,Me,Ne];Wa(ze,{mixoutsTo:L});L.noAuto;var Gt=L.config,y=L.library;L.dom;var Xt=L.parse;L.findIconDefinition;L.toHtml;var Ee=L.icon;L.layer;var Pe=L.text;L.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ie={prefix:"fas",iconName:"angle-left",icon:[256,512,[8249],"f104","M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"]},Te={prefix:"fas",iconName:"angle-right",icon:[256,512,[8250],"f105","M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"]},_e={prefix:"fas",iconName:"angles-left",icon:[448,512,[171,"angle-double-left"],"f100","M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"]},Re=_e,De={prefix:"fas",iconName:"angles-right",icon:[448,512,[187,"angle-double-right"],"f101","M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"]},Fe=De,He={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"]},je=He,Ye={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},Ue=Ye,We={prefix:"fas",iconName:"book-open",icon:[576,512,[128366,128214],"f518","M144.3 32.04C106.9 31.29 63.7 41.44 18.6 61.29c-11.42 5.026-18.6 16.67-18.6 29.15l0 357.6c0 11.55 11.99 19.55 22.45 14.65c126.3-59.14 219.8 11 223.8 14.01C249.1 478.9 252.5 480 256 480c12.4 0 16-11.38 16-15.98V80.04c0-5.203-2.531-10.08-6.781-13.08C263.3 65.58 216.7 33.35 144.3 32.04zM557.4 61.29c-45.11-19.79-88.48-29.61-125.7-29.26c-72.44 1.312-118.1 33.55-120.9 34.92C306.5 69.96 304 74.83 304 80.04v383.1C304 468.4 307.5 480 320 480c3.484 0 6.938-1.125 9.781-3.328c3.925-3.018 97.44-73.16 223.8-14c10.46 4.896 22.45-3.105 22.45-14.65l.0001-357.6C575.1 77.97 568.8 66.31 557.4 61.29z"]},Be={prefix:"fas",iconName:"bookmark",icon:[384,512,[61591,128278],"f02e","M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"]},Ve={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"]},$e=Ve,Ge={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},Xe=Ge,Ke={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM325.1 306.7L380.6 162.4C388.1 142.1 369 123.9 349.6 131.4L205.3 186.9C196.8 190.1 190.1 196.8 186.9 205.3L131.4 349.6C123.9 369 142.1 388.1 162.4 380.6L306.7 325.1C315.2 321.9 321.9 315.2 325.1 306.7V306.7z"]},qe={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"]},Qe={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128426,128190,"save"],"f0c7","M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z"]},Ze=Qe,Je={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z"]},nr=Je,tr={prefix:"fas",iconName:"hard-drive",icon:[512,512,[128436,"hdd"],"f0a0","M464 288h-416C21.5 288 0 309.5 0 336v96C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-96C512 309.5 490.5 288 464 288zM320 416c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 416 320 416zM416 416c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S433.6 416 416 416zM464 32h-416C21.5 32 0 53.5 0 80v192.4C13.41 262.3 29.92 256 48 256h416c18.08 0 34.59 6.254 48 16.41V80C512 53.5 490.5 32 464 32z"]},ar=tr,er={prefix:"fas",iconName:"house",icon:[576,512,[63498,63500,127968,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"]},rr=er,ir={prefix:"fas",iconName:"house-user",icon:[576,512,["home-user"],"e1b0","M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z"]},or={prefix:"fas",iconName:"images",icon:[576,512,[],"f302","M528 32H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48H528c26.51 0 48-21.49 48-48v-256C576 53.49 554.5 32 528 32zM223.1 96c17.68 0 32 14.33 32 32S241.7 160 223.1 160c-17.67 0-32-14.33-32-32S206.3 96 223.1 96zM494.1 311.6C491.3 316.8 485.9 320 480 320H192c-6.023 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.332-16.68l70-96C252.1 194.4 256.9 192 262 192c5.111 0 9.916 2.441 12.93 6.574l22.35 30.66l62.74-94.11C362.1 130.7 367.1 128 373.3 128c5.348 0 10.34 2.672 13.31 7.125l106.7 160C496.6 300 496.9 306.3 494.1 311.6zM456 432H120c-39.7 0-72-32.3-72-72v-240C48 106.8 37.25 96 24 96S0 106.8 0 120v240C0 426.2 53.83 480 120 480h336c13.25 0 24-10.75 24-24S469.3 432 456 432z"]},sr={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"]},fr=sr,lr={prefix:"fas",iconName:"paintbrush",icon:[576,512,[128396,"paint-brush"],"f1fc","M224 263.3C224.2 233.3 238.4 205.2 262.4 187.2L499.1 9.605C517.7-4.353 543.6-2.965 560.7 12.9C577.7 28.76 580.8 54.54 568.2 74.07L406.5 324.1C391.3 347.7 366.6 363.2 339.3 367.1L224 263.3zM320 400C320 461.9 269.9 512 208 512H64C46.33 512 32 497.7 32 480C32 462.3 46.33 448 64 448H68.81C86.44 448 98.4 429.1 96.59 411.6C96.2 407.8 96 403.9 96 400C96 339.6 143.9 290.3 203.7 288.1L319.8 392.5C319.9 394.1 320 397.5 320 400V400z"]},cr=lr,ur={prefix:"fas",iconName:"user",icon:[448,512,[62144,128100],"f007","M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"]},mr={prefix:"fas",iconName:"user-check",icon:[640,512,[],"f4fc","M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM632.3 134.4c-9.703-9-24.91-8.453-33.92 1.266l-87.05 93.75l-38.39-38.39c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l56 56C499.5 285.5 505.6 288 512 288h.4375c6.531-.125 12.72-2.891 17.16-7.672l104-112C642.6 158.6 642 143.4 632.3 134.4z"]},dr={prefix:"fas",iconName:"user-pen",icon:[640,512,["user-edit"],"f4ff","M223.1 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 223.1 256zM274.7 304H173.3C77.61 304 0 381.7 0 477.4C0 496.5 15.52 512 34.66 512h286.4c-1.246-5.531-1.43-11.31-.2832-17.04l14.28-71.41c1.943-9.723 6.676-18.56 13.68-25.56l45.72-45.72C363.3 322.4 321.2 304 274.7 304zM371.4 420.6c-2.514 2.512-4.227 5.715-4.924 9.203l-14.28 71.41c-1.258 6.289 4.293 11.84 10.59 10.59l71.42-14.29c3.482-.6992 6.682-2.406 9.195-4.922l125.3-125.3l-72.01-72.01L371.4 420.6zM629.5 255.7l-21.1-21.11c-14.06-14.06-36.85-14.06-50.91 0l-38.13 38.14l72.01 72.01l38.13-38.13C643.5 292.5 643.5 269.7 629.5 255.7z"]},vr=dr,pr={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"]},gr={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"]},br=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function hr(n,t){return t={exports:{}},n(t,t.exports),t.exports}var yr=hr(function(n){(function(t){var a=function(m,p,b){if(!u(p)||d(p)||g(p)||h(p)||f(p))return p;var x,k=0,O=0;if(c(p))for(x=[],O=p.length;k<O;k++)x.push(a(m,p[k],b));else{x={};for(var E in p)Object.prototype.hasOwnProperty.call(p,E)&&(x[m(E,b)]=a(m,p[E],b))}return x},e=function(m,p){p=p||{};var b=p.separator||"_",x=p.split||/(?=[A-Z])/;return m.split(x).join(b)},r=function(m){return w(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(p,b){return b?b.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},o=function(m){var p=r(m);return p.substr(0,1).toUpperCase()+p.substr(1)},i=function(m,p){return e(m,p).toLowerCase()},s=Object.prototype.toString,f=function(m){return typeof m=="function"},u=function(m){return m===Object(m)},c=function(m){return s.call(m)=="[object Array]"},d=function(m){return s.call(m)=="[object Date]"},g=function(m){return s.call(m)=="[object RegExp]"},h=function(m){return s.call(m)=="[object Boolean]"},w=function(m){return m=m-0,m===m},A=function(m,p){var b=p&&"process"in p?p.process:p;return typeof b!="function"?m:function(x,k){return b(x,m,k)}},S={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(m,p){return a(A(r,p),m)},decamelizeKeys:function(m,p){return a(A(i,p),m,p)},pascalizeKeys:function(m,p){return a(A(o,p),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};n.exports?n.exports=S:t.humps=S})(br)}),Cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},K=function(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n},cn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},kr=function(n,t){var a={};for(var e in n)t.indexOf(e)>=0||!Object.prototype.hasOwnProperty.call(n,e)||(a[e]=n[e]);return a},En=function(n){if(Array.isArray(n)){for(var t=0,a=Array(n.length);t<n.length;t++)a[t]=n[t];return a}else return Array.from(n)};function xr(n){return n.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var e=a.indexOf(":"),r=yr.camelize(a.slice(0,e)),o=a.slice(e+1).trim();return t[r]=o,t},{})}function wr(n){return n.split(/\s+/).reduce(function(t,a){return t[a]=!0,t},{})}function $n(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var e=(n.children||[]).map(function(f){return $n(f)}),r=Object.keys(n.attributes||{}).reduce(function(f,u){var c=n.attributes[u];switch(u){case"class":f.class=wr(c);break;case"style":f.style=xr(c);break;default:f.attrs[u]=c}return f},{attrs:{},class:{},style:{}});a.class;var o=a.style,i=o===void 0?{}:o,s=kr(a,["class","style"]);return ht(n.tag,cn({},t,{class:r.class,style:cn({},r.style,i)},r.attrs,s),e)}var Kt=!1;try{Kt=!0}catch{}function Ar(){if(!Kt&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Z(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?K({},n,t):{}}function Sr(n){var t,a=(t={"fa-spin":n.spin,"fa-pulse":n.pulse,"fa-fw":n.fixedWidth,"fa-border":n.border,"fa-li":n.listItem,"fa-inverse":n.inverse,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both"},K(t,"fa-"+n.size,n.size!==null),K(t,"fa-rotate-"+n.rotation,n.rotation!==null),K(t,"fa-pull-"+n.pull,n.pull!==null),K(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(a).map(function(e){return a[e]?e:null}).filter(function(e){return e})}function bt(n){if(n===null)return null;if((typeof n=="undefined"?"undefined":Cr(n))==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}var Lr=Pn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,a){var e=a.attrs,r=M(function(){return bt(t.icon)}),o=M(function(){return Z("classes",Sr(t))}),i=M(function(){return Z("transform",typeof t.transform=="string"?Xt.transform(t.transform):t.transform)}),s=M(function(){return Z("mask",bt(t.mask))}),f=M(function(){return Ee(r.value,cn({},o.value,i.value,s.value,{symbol:t.symbol,title:t.title}))});qt(f,function(c){if(!c)return Ar("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=M(function(){return f.value?$n(f.value.abstract[0],{},e):null});return function(){return u.value}}});Pn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,a){var e=a.slots,r=Gt.familyPrefix,o=M(function(){return[r+"-layers"].concat(En(t.fixedWidth?[r+"-fw"]:[]))});return function(){return ht("div",{class:o.value},e.default?e.default():[])}}});Pn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,a){var e=a.attrs,r=Gt.familyPrefix,o=M(function(){return Z("classes",[].concat(En(t.counter?[r+"-layers-counter"]:[]),En(t.position?[r+"-layers-"+t.position]:[])))}),i=M(function(){return Z("transform",typeof t.transform=="string"?Xt.transform(t.transform):t.transform)}),s=M(function(){var u=Pe(t.value.toString(),cn({},i.value,o.value)),c=u.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),f=M(function(){return $n(s.value,{},e)});return function(){return f.value}}});const Mr=function(n){y.add(Re),y.add(Fe),y.add(Ie),y.add(Te),y.add(Be),y.add(We),y.add($e),y.add(Ke),y.add(qe),y.add(ar),y.add(rr),y.add(ir),y.add(or),y.add(cr),y.add(Ze),y.add(fr),y.add(Ue),y.add(je),y.add(Xe),y.add(ur),y.add(mr),y.add(vr),y.add(pr),y.add(gr),y.add(nr),n.component("Fas",Lr)};export{Mr as install};
