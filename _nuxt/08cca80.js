(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{602:function(t,e,n){"use strict";n.r(e);var o=n(97),c=n.n(o),l={data:function(){return{query:"",budget:[]}},watch:{$route:function(t,e){alert(t.params.id_fild)}},created:function(){alert(this.$route.params.id_fild)},methods:{getall:function(){var t=this;console.log("e");c.a.get("https://playlandbackend.herokuapp.com/bugetones").then((function(e){t.budget=e.data}))},handleSearchManga:function(){console.log("e");c.a.get("https://playlandbackend.herokuapp.com/bugetones").then((function(t){console.log(t.data)}))}},mounted:function(){this.getall()}},r=n(67),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex flex-wrap justify-center"},[n("p",[t._v("sdsd")])])])}],!1,null,"5a194d6c",null);e.default=component.exports}}]);