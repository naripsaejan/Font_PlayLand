(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{543:function(t,e,o){"use strict";o.r(e);var n={props:["hint","msg"],data:function(){return{testcolor:"color",childsend:"childsend",a:"a",b:"b"}},watch:{msg:function(){this.saveColor(),console.log("msg create")}},methods:{saveColor:function(){console.log("Create_copy saveColor//4",this.$emit("createColor",this.testcolor,this.childsend,this.a,this.b))}},mounted:function(){console.log("Create_copy create//2")}},l=o(67),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.saveColor.apply(null,arguments)}}},[t._v("\n  // (1)\n  "),o("div",{staticClass:"form-group"},[o("h1",[t._t("default")],2),t._v(" "),o("label",[t._v("Input new Color")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.testcolor,expression:"testcolor"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.hint},domProps:{value:t.testcolor},on:{input:function(e){e.target.composing||(t.testcolor=e.target.value)}}}),t._v(" "),o("label",[t._v("Input new childsend")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.childsend,expression:"childsend"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.hint},domProps:{value:t.childsend},on:{input:function(e){e.target.composing||(t.childsend=e.target.value)}}}),t._v("\n    // (2)\n  ")]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit Create_copy")])])}),[],!1,null,null,null);e.default=component.exports}}]);