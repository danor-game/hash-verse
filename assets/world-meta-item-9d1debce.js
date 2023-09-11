import{c as h,z as N,_ as A,r as V,A as w,a as u,b as c,u as p,B as O,n as y,D as k,y as v,h as g,E as W,G as U,x as q,l as z,F as S,f as j,d as C,e as B,C as D}from"./index-57225123.js";const Q={param:{type:String,default:null},label:{type:String,default:null},labelWidth:{type:String,default:null},labelAlign:{type:String,default:null},labelSplit:{type:String,default:"："},labelTextOnly:{type:Boolean,default:!1}},E=(e,i)=>{const a=h(()=>N(e.labelTextOnly)),o=h(()=>{const{label:r}=e,d=String(r);let n=[];return r&&d.trim()&&(n=a.value?[d.trim()]:d.split("|")),n}),t=h(()=>{const r=o.value[0],d=e.labelSplit;return r?`${r}${d}`:null}),l=h(()=>{const r=o.value[1],d=e.labelWidth;let n=null;return r&&String(r).trim()&&(n=String(r).trim()),d&&String(d).trim()&&(n=String(d).trim()),i.value&&(n=`calc(${n} - 1.5rem)`),n}),f=h(()=>{const r=o.value[2],d=e.labelAlign;let n="right";return r&&String(r).trim()&&(n=r),d&&String(d).trim()&&(n=d),n});return{$label:t,$labelWidth:l,$labelAlign:f}};const G=["checked"],J=["disabled"],Y={class:"inblock"},H=["placeholder","tabindex","type","readonly","disabled","min","max","step"],K={__name:"texter",props:{modelValue:{type:[String,Number,Boolean],default:""},disable:{type:Boolean,default:!1},text:{type:String,default:""},default:{type:[String,Number,Boolean],default:""},disabling:{type:[Boolean,String],default:!1},readonly:{type:[Boolean,String],default:!1},...Q,place:{type:[Number,String],default:""},tab:{type:[Number,String],default:0},align:{type:String,default:null},type:{type:String,default:null},min:{type:[Number,String],default:null},max:{type:[Number,String],default:null},step:{type:[Number,String],default:null},focusSwitch:{type:Boolean,default:!1}},emits:["update:modelValue","update:disable","update:value"],setup(e,{emit:i}){const a=e,o=h(()=>N(a.disabling)),t=h(()=>N(a.readonly)),{$label:l,$labelWidth:f,$labelAlign:r}=E(a,o),d={text:"text",pass:"password",number:"number"},n=h(()=>d[a.type]||d.text),L=h(()=>({width:f.value,textAlign:r.value})),$=V(o.value&&a.modelValue===!1?a.default:a.modelValue),m=V(o.value?a.modelValue===!1:a.disable);w(()=>a.disable,s=>{o.value||(m.value=s)}),w(()=>a.modelValue,s=>{o.value?s===!1?m.value=!0:(m.value=!1,$.value=s):$.value=s}),w([$,m],([s,b],[x,T])=>{o.value?(s!=x&&i("update:value",s),b!=T&&i("update:disable",b),i("update:modelValue",b===!0?!1:n.value=="number"?Number(s):s)):i("update:modelValue",n.value=="number"?Number(s):s)});const P=s=>i("update:value",$.value+=s.deltaY>0?-1:1),F=V(null);return w(()=>a.focusSwitch,()=>F.value.focus()),(s,b)=>(u(),c("comp-texter",null,[o.value?(u(),c("p-disabling",{key:0,class:"inblock",checked:p(O)(!m.value),onClick:b[0]||(b[0]=x=>m.value=!m.value)},null,8,G)):y("",!0),p(l)?(u(),c("p-label",{key:1,disabled:p(O)(m.value),class:"inblock elli",style:k(L.value),onClick:b[1]||(b[1]=x=>o.value&&(m.value=!m.value))},v(p(l)),13,J)):y("",!0),g("p-value",Y,[W(g("input",{ref_key:"domInput",ref:F,"onUpdate:modelValue":b[2]||(b[2]=x=>$.value=x),style:k({textAlign:e.align}),placeholder:e.place,tabindex:e.tab,type:n.value,readonly:t.value,disabled:m.value,min:e.min,max:e.max,step:e.step,onMousewheel:b[3]||(b[3]=x=>n.value=="number"&&P)},null,44,H),[[U,$.value]])])]))}},I=A(K,[["__scopeId","data-v-2e9f2da0"]]);const R=["onClick"],X={key:0},Z={key:1},_={key:3,form:""},ee={key:4},te=["onClick"],le={form:"",class:"ml-2"},ae=["onClick"],ne={key:0},ue={__name:"world-meta-item",props:{object:{type:Object,default:()=>({}),required:!0},data:{type:Object,default:()=>({}),required:!0},worldFrame:{validator:e=>e?.prototype instanceof q,default:null,required:!0},path:{type:String,default:""},prefix:{type:String,default:""},indent:{type:Number,default:0},showPath:{type:Boolean,default:!1}},setup(e){const i=(a,o)=>`${a}.${o}`.replace(/^\./,"");return(a,o)=>(u(!0),c(S,null,z(e.object,(t,l)=>(u(),c(S,{key:`meta-enum-${e.path}-${l}`},[t instanceof e.worldFrame.MetaItem?(u(),c("p-meta-item",{key:0,style:k({marginLeft:`calc(var(--spc) * 2 * ${e.indent})`})},[t.type!="array"&&!(l=="enable"&&t.type=="boolean")?(u(),c(S,{key:0},[g("p-key",{onClick:j(f=>e.worldFrame.setMetaDefault(t,e.data,l),["ctrl","prevent"])},v(i(e.prefix,t.name)),9,R),t.desc?(u(),c("p-desc",X,v(t.desc),1)):y("",!0),e.showPath?(u(),c("p-path",Z,v(i(e.path,l)),1)):y("",!0)],64)):y("",!0),t.type=="string"?(u(),C(p(I),{key:1,modelValue:e.data[l],"onUpdate:modelValue":f=>e.data[l]=f,form:"",align:"center"},null,8,["modelValue","onUpdate:modelValue"])):y("",!0),t.type=="number"?(u(),C(p(I),{key:2,modelValue:e.data[l],"onUpdate:modelValue":f=>e.data[l]=f,form:"",type:"number",min:t.min,max:t.max,align:"center",step:t.step},null,8,["modelValue","onUpdate:modelValue","min","max","step"])):y("",!0),t.type=="boolean"?(u(),c("p-button-group",_,[B(p(D),{text:"启用",button:"",white:e.data[l]===!1,onClick:f=>e.data[l]=!0},null,8,["white","onClick"]),B(p(D),{text:"禁用",button:"",white:e.data[l]===!0,onClick:f=>e.data[l]=!1},null,8,["white","onClick"])])):y("",!0),t.type=="array"?(u(),c("details",ee,[g("summary",null,[g("p-key",{onClick:j(f=>e.worldFrame.setMetaDefault(t,e.data,l),["ctrl","prevent"])},v(i(e.prefix,t.name)),9,te)]),g("span",le,v(JSON.stringify(e.data[l],null,"	")),1)])):y("",!0)],4)):typeof t=="object"?(u(),c(S,{key:1},[Object.keys(t).length>2?(u(),c("details",{key:0,open:"",style:k({marginLeft:`calc(var(--spc) * 2 * ${e.indent})`})},[g("summary",null,[g("p-key",{onClick:j(f=>e.worldFrame.setMetaDefault(t,e.data,l),["ctrl","prevent"])},v(i(e.prefix,t.$?.name??t.$)),9,ae),t.$?.desc?(u(),c("p-desc",ne,v(t.$.desc),1)):y("",!0)]),B(M,{object:e.object[l],data:e.data[l],"world-frame":e.worldFrame,path:i(e.path,l),indent:e.indent+1,"show-path":e.showPath},null,8,["object","data","world-frame","path","indent","show-path"])],4)):(u(),C(M,{key:1,object:e.object[l],data:e.data[l],"world-frame":e.worldFrame,path:i(e.path,l),prefix:i(e.prefix,t.$?.name??t.$),indent:e.indent,"show-path":e.showPath},null,8,["object","data","world-frame","path","prefix","indent","show-path"]))],64)):y("",!0)],64))),128))}},M=A(ue,[["__scopeId","data-v-ab3e19ce"]]),ie=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{M,I as T,ie as w};
