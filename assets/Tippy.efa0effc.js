import{_ as s,b as n,m as p,t as h,r,o as a}from"./index.d13ac80d.js";const d={props:{el:{type:Element,default:null},comp:{type:Object,default:null},props:{type:Object,default(){return{}}},listener:{type:Object,default(){return{}}},on:{type:Object,default(){return{}}},keep:{type:Boolean,default:!1},showNow:{type:Boolean,default:!0},option:{type:Object,default(){return{}}}},emits:["show","hide"],data(){return{}},computed:{optionTippy(){return Object.assign({theme:"light-border",interactive:!0,animation:"",duration:[0,0],onHidden:this.hide,onShown:this.onShown},this.option)}},mounted(){this.tippy=this.Tippy(this.el,Object.assign({content:this.$el},this.optionTippy)),this.showNow&&this.show()},unmounted(){this.$elTippy.parentNode.removeChild(this.$elTippy)},methods:{show(){return this.tippy&&(this.tippy.show(),this.$emit("show",this),typeof this.on.show=="function"&&this.on.show(this)),this},hide(){return this.tippy&&(this.keep?this.tippy.hide():(this.tippy.destroy(),this.$app.unmount()),this.$emit("hide",this),typeof this.on.hide=="function"&&this.on.hide(this)),this},onShown(){var t,e;(e=(t=this==null?void 0:this.$refs)==null?void 0:t.comp)==null||e.$forceUpdate()}}};function l(t,e,i,u,c,o){return a(),n(r(i.comp),p({ref:"comp",class:"test"},i.props,h(i.listener),{onHide:o.hide}),null,16,["onHide"])}var m=s(d,[["render",l]]);export{m as default};
