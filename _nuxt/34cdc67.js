(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6],{543:function(t,e,o){"use strict";o.r(e);var n={props:["hint","msg"],data:function(){return{testcolor:"color",childsend:"childsend",a:"a",b:"b"}},watch:{msg:function(){this.saveColor(),console.log("msg create")}},methods:{saveColor:function(){console.log("Create_copy saveColor//4",this.$emit("createColor",this.testcolor,this.childsend,this.a,this.b))}},mounted:function(){console.log("Create_copy create//2")}},l=o(67),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.saveColor.apply(null,arguments)}}},[t._v("\n  // (1)\n  "),o("div",{staticClass:"form-group"},[o("h1",[t._t("default")],2),t._v(" "),o("label",[t._v("Input new Color")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.testcolor,expression:"testcolor"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.hint},domProps:{value:t.testcolor},on:{input:function(e){e.target.composing||(t.testcolor=e.target.value)}}}),t._v(" "),o("label",[t._v("Input new childsend")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.childsend,expression:"childsend"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.hint},domProps:{value:t.childsend},on:{input:function(e){e.target.composing||(t.childsend=e.target.value)}}}),t._v("\n    // (2)\n  ")]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit Create_copy")])])}),[],!1,null,null,null);e.default=component.exports},613:function(t,e,o){"use strict";o.r(e);var n={props:["hint"],components:{AppCreate:o(543).default},data:function(){return{msg:null,Person_copy:null,colors:["red","gree","blug"],childsends:["1","2"],testcolor:this.testcolor,testchildsend:this.childsend}},computed:{},methods:{addColor:function(t,e,a,b,o){console.log("check : ",e,t,a,b),this.colors.push(t),this.childsends.push(e)},run:function(){}}},l=o(67),r=o(84),c=o.n(r),d=o(199),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("AppCreate",{attrs:{msg:t.msg},on:{createColor:t.addColor}},[t._v("Enter your favorite color")]),t._v(" "),o("p",[t._v("colors: "+t._s(t.colors))]),t._v(" "),o("p",[t._v("childsend:"+t._s(t.childsends))]),t._v(" "),o("p",[t._v(t._s(t.testcolor)+'+""+'+t._s(t.testchildsend))]),t._v(" "),o("v-btn",{on:{click:function(e){t.msg=!t.msg}}},[t._v(" sendd")])],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a})}}]);