import{q as ee,b as p,d as ne,w as I,A as te,B as ie,C as ae,h as l,F as k,D as j,k as y,T as oe,m as R,E as _e,p as c,j as N,f as T,v as z,z as ue,G as L,t as E,s as se,H as de}from"./index.ec891db5.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function D(e,_,n,i){function s(b){return b instanceof n?b:new n(function(t){t(b)})}return new(n||(n=Promise))(function(b,t){function h(v){try{g(i.next(v))}catch(w){t(w)}}function d(v){try{g(i.throw(v))}catch(w){t(w)}}function g(v){v.done?b(v.value):s(v.value).then(h,d)}g((i=i.apply(e,_||[])).next())})}function re(e,_,n){let i=document.createElement(e);return i.setAttribute("class",_),n&&(i.innerText=n),i}const G=function(e){let _=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?_[n]=G(e[n]):_[n]=e[n]);return _};var M=ee({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},setup(e){const _=p(0),n=p(0),i=p(!1),s=p(0),b=p(0),t=p(!1),h=p(null),d=p([]),g=ne(()=>e.menuList.some(o=>o.children&&o.children.length>0)),v=p(10),w=p();I(t,o=>D(this,void 0,void 0,function*(){var u,r;if(o){yield R();let m=w.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(f=>{m.style.setProperty(`--menu-${f}`,e.menuWrapperCss&&e.menuWrapperCss[f])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(f=>{m.style.setProperty(`--menu-item-${f}`,e.menuItemCss&&e.menuItemCss[f])});let a=(r=(u=e.menuItemCss)===null||u===void 0?void 0:u.arrowSize)===null||r===void 0?void 0:r.match(/\d+/);a?v.value=~~a[0]||10:v.value=10,m.style.setProperty("--menu-item-arrowRealSize",v.value/2+"px")}}));const X=(o,u)=>{o.disabled||(o.fn&&typeof o.fn=="function"&&o.fn(e.params,h.value,e.el,u),t.value=!1)},Y=(o,u)=>{o.disabled||(o.fn&&typeof o.fn=="function"&&!o.disabled&&(o.fn(e.params,h.value,e.el,u),i.value=!1),t.value=!1)},J=(o,u)=>{if(u.children&&!u.disabled){i.value=!0;const r=o.currentTarget;if(!r)return;const{offsetWidth:m}=r,a=r.querySelector(".__menu__sub__wrapper");if(!a)return;const{offsetWidth:f,offsetHeight:x}=a,{innerWidth:Z,innerHeight:P}=window,{top:A,left:H}=r.getBoundingClientRect();H+m+f>Z-5?_.value=H-f+5:_.value=H+m,A+x>P-5?n.value=P-x:n.value=A+5}},O=(o,u,r,m)=>o.map(a=>(a.children&&(a.children=O(a.children,u,r,m)),a.label&&typeof a.label=="function"&&(a.label=a.label(m,u,r)),a.tips&&typeof a.tips=="function"&&(a.tips=a.tips(m,u,r)),a.icon&&typeof a.icon=="function"&&(a.icon=a.icon(m,u,r)),a.hidden&&typeof a.hidden=="function"&&(a.hidden=a.hidden(m,u,r)),a.disabled&&typeof a.disabled=="function"&&(a.disabled=a.disabled(m,u,r)),a)),K=(o=0,u=0)=>D(this,void 0,void 0,function*(){if(h.value=document.elementFromPoint(o-1,u-1),e.menuHiddenFn?t.value=!e.menuHiddenFn(e.params,h.value,e.el):t.value=!0,!t.value)return;d.value=G(e.menuList),d.value=O(d.value,h.value,e.el,e.params),yield R();const{innerWidth:r,innerHeight:m}=window,f=w.value.offsetHeight,x=e.menuWidth||200;b.value=o+x+1>r?r-x-5:o+1,s.value=u+f+1>m?m-f-5:u+1}),Q=()=>{t.value=!1},B=o=>{w.value&&!w.value.contains(o.currentTarget)&&(t.value=!1,document.oncontextmenu=null)};return I(()=>e.injectCloseListener,o=>{o?document.addEventListener("mousedown",B):document.removeEventListener("mousedown",B)},{immediate:!0}),te(()=>{document.removeEventListener("mousedown",B)}),{subLeft:_,subTop:n,hoverFlag:i,menuTop:s,menuLeft:b,showMenu:t,clickDomEl:h,calcMenuList:d,arrowSize:v,hasSubMenu:g,MenuWrapper:w,handleMenuItemClick:X,handleSubMenuItemClick:Y,handleMenuMouseEnter:J,show:K,close:Q}}});const me=_e("data-v-3d21bc0a");ie("data-v-3d21bc0a");const le={key:0,class:"__menu__item-icon"},ce={class:"__menu__item-label"},ve={class:"__menu__item-tips"},be={class:"__menu__item-arrow-after"},he={class:"__menu__sub__item-label"},fe={class:"__menu__sub__item-tips"};ae();const pe=me((e,_,n,i,s,b)=>(c(),l(oe,{to:"body",disabled:!e.appendToBody},[e.showMenu?(c(),l("div",{key:0,ref:"MenuWrapper",class:["__menu__wrapper",e.customClass],style:{width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`}},[(c(!0),l(k,null,j(e.calcMenuList,(t,h)=>(c(),l(k,null,[!t.hidden&&!t.line?(c(),l("div",{key:h,class:["__menu__item",t.disabled&&"disabled",t.customClass],onMousedown:N(d=>e.handleMenuItemClick(t,d),["stop"]),onMouseenter:d=>e.handleMenuMouseEnter(d,t)},[e.hasIcon?(c(),l("div",le,[e.iconType==="font-icon"?T((c(),l("i",{key:0,class:t.icon},null,2)),[[z,t.icon]]):e.iconType==="svg-icon"?T((c(),l("div",{key:1,class:"__menu__item-icon-svg",innerHTML:t.icon},null,8,["innerHTML"])),[[z,t.icon]]):e.iconType==="vnode-icon"?(c(),l(ue(t.icon),{key:2})):y("v-if",!0)])):y("v-if",!0),L("span",ce,E(t.label),1),L("span",ve,E(t.tips||""),1),e.hasSubMenu?(c(),l("span",{key:1,class:["__menu__item-arrow",{show:e.hasSubMenu&&t.children}],style:{width:e.arrowSize+"px",height:e.arrowSize+"px"}},[T(L("span",be,null,512),[[z,e.hasSubMenu&&t.children]])],6)):y("v-if",!0),t.children&&t.children.length>0?T((c(),l("div",{key:2,class:"__menu__sub__wrapper",style:{top:`${e.subTop}px`,left:`${e.subLeft}px`}},[(c(!0),l(k,null,j(t.children,(d,g)=>(c(),l(k,null,[!d.hidden&&!d.line?(c(),l("div",{key:g,class:["__menu__sub__item",d.disabled&&"disabled",d.customClass],onMousedown:N(v=>e.handleSubMenuItemClick(d,v),["stop"])},[L("span",he,E(d.label),1),L("span",fe,E(d.tips||""),1)],42,["onMousedown"])):y("v-if",!0),d.line?(c(),l("div",{key:g,class:"__menu__line"})):y("v-if",!0)],64))),256))],4)),[[z,e.hoverFlag]]):y("v-if",!0)],42,["onMousedown","onMouseenter"])):y("v-if",!0),!t.hidden&&t.line?(c(),l("div",{key:h,class:"__menu__line"})):y("v-if",!0)],64))),256))],6)):y("v-if",!0)],8,["disabled"])));function we(e,_){_===void 0&&(_={});var n=_.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var ye=`.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;we(ye);M.render=pe;M.__scopeId="data-v-3d21bc0a";M.__file="packages/mouse-menu/mouse-menu.vue";M.install=e=>{e.component(M.name,M)};function q(e){var _;const n="__mouse__menu__container";let i;document.querySelector(`.${n}`)?i=document.querySelector(`.${n}`):i=re("div",n);const s=se(M,e);return de(s,i),document.body.appendChild(i),(_=s.component)===null||_===void 0?void 0:_.proxy}let S,F,$,C;function ge(e,_,n=500){$=i=>{S&&S.close(),i.preventDefault(),F&&clearTimeout(F),F=window.setTimeout(()=>{_(i)},n)},C=()=>{clearTimeout(F)},e.addEventListener("touchstart",$),e.addEventListener("touchmove",C),e.addEventListener("touchend",C),e.addEventListener("touchcancel",C)}function U(e){e.removeEventListener("touchstart",$),e.removeEventListener("touchmove",C),e.removeEventListener("touchend",C),e.removeEventListener("touchcancel",C)}let W,V;const Ce=(e,_)=>{const{value:n}=_;if(n.menuList.length>0)W=i=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;i.preventDefault();const s=q(Object.assign({el:e},n)),{x:b,y:t}=i;s.show(b,t)},e.removeEventListener("contextmenu",W),e.addEventListener("contextmenu",W),n.useLongPressInMobile&&"ontouchstart"in window&&(V=i=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;i.preventDefault(),S=q(Object.assign({el:e},n));const{touches:s}=i,{clientX:b,clientY:t}=s[0];S.show(b,t),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>S.close(),e.onmousedown=()=>S.close()},500)},U(e),ge(e,V,n.longPressDuration||500));else throw new Error("At least set one menu list!")},Me=e=>{e.removeEventListener("contextmenu",W),"touchstart"in window&&U(e)},Se={mounted:Ce,unmounted:Me},Le=function(e){e.directive("menu",Se)};export{Le as install};
