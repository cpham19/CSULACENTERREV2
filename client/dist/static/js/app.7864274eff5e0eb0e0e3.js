webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},r=n("VU/8")({name:"App"},a,!1,null,null,null).exports,o=n("/ocq"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var u=n("VU/8")({name:"Login",data:function(){return{userName:"",password:""}},mounted:function(){},methods:{}},i,!1,function(t){n("t0yP")},"data-v-73010293",null).exports,c=n("Xxa5"),m=n.n(c),d=n("exGp"),h=n.n(d),f=n("mtWM"),p=n.n(f),l=function(){return p.a.create({baseURL:"http://localhost:8081"}).get("home")},v={name:"Home",data:function(){return{status:"Home Page"}},mounted:function(){this.fetchHome()},methods:{fetchHome:function(){var t=this;return h()(m.a.mark(function e(){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:n=e.sent,t.status=n.data;case 4:case"end":return e.stop()}},e,t)}))()}}},_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v(this._s(this.status))])},staticRenderFns:[]};var g=n("VU/8")(v,_,!1,function(t){n("V9Yl")},"data-v-62dbdce2",null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v(this._s(this.status))])},staticRenderFns:[]};var w=n("VU/8")({name:"Course",data:function(){return{status:"Course Page"}},mounted:function(){},methods:{}},x,!1,function(t){n("NKLJ")},"data-v-ca809162",null).exports,H={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v(this._s(this.status))])},staticRenderFns:[]};var N=n("VU/8")({name:"Assignment",data:function(){return{status:"Assignment Page"}},mounted:function(){},methods:{}},H,!1,function(t){n("ONbh")},"data-v-6100a81a",null).exports;s.a.use(o.a);var V=new o.a({mode:"history",routes:[{path:"/",name:"Login",component:u},{path:"/home",name:"Home",component:g},{path:"/course",name:"Course",component:w},{path:"/assignment",name:"Assignment",component:N}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:V,components:{App:r},template:"<App/>"})},NKLJ:function(t,e){},ONbh:function(t,e){},V9Yl:function(t,e){},t0yP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7864274eff5e0eb0e0e3.js.map