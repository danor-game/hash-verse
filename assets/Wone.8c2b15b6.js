var j=Object.defineProperty;var K=(u,l,t)=>l in u?j(u,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[l]=t;var p=(u,l,t)=>(K(u,typeof l!="symbol"?l+"":l,t),t);import{_ as O,s as E,T as B,l as x,H as P,c as V,o as c,e as m,u as C,F as y,i as b,D as R,A as U,C as D,f as v,x as F,b as S,j as L,p as q,k as z,W as G,I as W}from"./index.d13ac80d.js";import J from"./Texter.deae1a84.js";import A from"./NifePanel.fba4671f.js";import Q from"./WoneCreator.51bf366e.js";import"./label.cabd96e1.js";const w=u=>String(u).replace(/~\[(.*?)\]/g,(l,t,s,o)=>`<span style="color:green;font-weight:bold;">[${t}]</span>`).replace(/~\{(.*?)\}/g,(l,t,s,o)=>`<span style="color:red">${t}</span>`),M=class{constructor(l,t,s){p(this,"nife1");p(this,"nife2");p(this,"option");p(this,"logs",[]);p(this,"winner",null);var o;if(!l||!t)throw"\u6218\u6597\u4EBA\u6570\u4E0D\u8DB3";this.nife1=l,this.nife2=t,this.option=Object.assign({roundMax:100},(o=s==null?void 0:s.fight)!=null?o:{})}start(l=!0){const t=this.logs;l&&t.splice(0,t.length),this.winner=null,this.isDraw=!1;let{name:s,attribute:{health:o,attack:I,defense:f}}=this.nife1,{name:h,attribute:{health:d,attack:r,defense:T}}=this.nife2,k=0;for(;o>0&&d>0;){if(k++,k>this.option.roundMax)return t.push(w(`~[${s}]\u3001~[${h}]\u53CC\u65B9\u65E0\u6CD5\u5728${this.option.roundMax}\u56DE\u5408\u5185\u5206\u51FA\u80DC\u8D1F\uFF0C\u5E73\u624B`)),i=M.sDraw;let n=I-T,a=r-f;n=n<0?0:n,a=a<0?0:a,o-=a,d-=n,t.push(w(`~[${s}] \u653B\u51FB ~[${h}]\uFF0C\u9020\u6210~{${n}}\u4F24\u5BB3\uFF0C~[${h}]\u5269\u4F59\u8840\u91CF~{${d}}`)),t.push(w(`~[${h}] \u653B\u51FB ~[${s}]\uFF0C\u9020\u6210~{${a}}\u4F24\u5BB3\uFF0C~[${s}]\u5269\u4F59\u8840\u91CF~{${o}}`))}let i,g,e;o<=0&&d<=0?(t.push(w(`~[${s}]\u3001~[${h}]\u53CC\u65B9\u540C\u65F6\u9635\u4EA1\uFF0C\u5E73\u624B`)),i=M.sDraw):(o<=0&&(i=this.nife2,g=this.nife1,e=d),d<=0&&(i=this.nife1,g=this.nife2,e=o),t.push(""),t.push(w(`~[${g.name}]\u9635\u4EA1\uFF0C~[${i.name}]\u83B7\u80DC\uFF0C\u5269\u4F59\u8840\u91CF ~{${e} (${Math.round(100*e/i.attribute.healthLimit)}%)}`))),this.winner=i}};let N=M;p(N,"sDraw",Symbol("\u5E73\u624B"));const _=u=>(q("data-v-5009517c"),u=u(),z(),u),X=_(()=>v("br",null,null,-1)),Y=_(()=>v("div",null,"\u25CF Nife",-1)),Z=_(()=>v("div",null,"\u25CF \u4E0A\u573A",-1)),ee=_(()=>v("br",null,null,-1)),te=_(()=>v("br",null,null,-1)),ne=["innerHTML"],le={setup(u){E(()=>B.emitChange());const l=x(new P),t=V(()=>l.value.info),s=V(()=>{var e;return(e=t.value)==null?void 0:e.wone}),o=V(()=>s.value.nifes);B.addChanger("wone",e=>{if(l.value=e,!e.info.isInit){e.info.isInit=!0;let[n]=e.params;n?(e.info.wone=n,e.title=`\u4E16\u754C\u7EBF ${e.info.wone.name}`):e.info.dataWoneNew={}}});const I=e=>{const n=t.value.wone=new G(e);l.value.title=`\u4E16\u754C\u7EBF ${n.name}`,W.wones.push(n),W.save()},f=x(""),h=async e=>{s.value.born({name:e}),f.value="",W.save()},d=()=>{o.value.splice(0,o.value.length),W.save()},r=x([]),T=e=>{r.value.length<2&&r.value.push(e)},k=e=>{const n=r.value.indexOf(e);n>-1&&r.value.splice(n,1)},i=x([]),g=()=>{const e=new N(r.value[0],r.value[1],s.value);e.start(),i.value.splice(0,i.value.length),i.value.push("--------------\u65B0\u7684\u6218\u6597--------------"),i.value.push(...e.logs)};return(e,n)=>(c(),m("module",null,[C(s)?(c(),m(y,{key:0},[b(J,{modelValue:f.value,"onUpdate:modelValue":n[0]||(n[0]=a=>f.value=a),"name-new":"",align:"center",label:"\u540D",onKeyup:n[1]||(n[1]=R(U(a=>h(f.value),["exact"]),["enter"]))},null,8,["modelValue"]),b(D,{button:"",text:"\u52A0\u5165",onClick:n[2]||(n[2]=a=>h(f.value))}),b(D,{button:"",text:"\u6E05\u7A7A",onClick:d}),X,v("p-box",null,[Y,(c(!0),m(y,null,F(C(o),(a,$)=>(c(),S(A,{key:`nife-${$}`,nife:a,onClick:H=>T(a)},null,8,["nife","onClick"]))),128)),Z,(c(!0),m(y,null,F(r.value,(a,$)=>(c(),S(A,{key:`nife-fight-${$}`,nife:a,onClick:H=>k(a)},null,8,["nife","onClick"]))),128)),ee,b(D,{button:"",text:"\u5F00\u59CB",onClick:g}),te,v("p-logs",null,[(c(!0),m(y,null,F(i.value,(a,$)=>(c(),m("p-log",{key:`nife-fight-log-${$}`,innerHTML:a},null,8,ne))),128))])])],64)):L("",!0),C(s)?L("",!0):(c(),S(Q,{key:1,data:C(t).dataWoneNew,onCreate:I},null,8,["data"]))]))}};var ce=O(le,[["__scopeId","data-v-5009517c"]]);export{ce as default};