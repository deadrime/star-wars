(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e3a924b"],{"00c8":function(t,e,n){"use strict";var a=n("c395"),i=n.n(a);i.a},"00fd":function(t,e,n){var a=n("9e69"),i=Object.prototype,r=i.hasOwnProperty,c=i.toString,s=a?a.toStringTag:void 0;function o(t){var e=r.call(t,s),n=t[s];try{t[s]=void 0;var a=!0}catch(o){}var i=c.call(t);return a&&(e?t[s]=n:delete t[s]),i}t.exports=o},"0bd3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Search",{on:{change:t.handleSearch},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cards"},t._l(t.data,(function(e){return n("Card",{key:e.model,attrs:{title:e.name,link:"/vehicles/"+e.id}},[n("div",{staticClass:"spec"},[n("span",{staticClass:"spec__unit"},[t._v("Length")]),n("span",{staticClass:"spec__value"},[t._v(t._s(e.length?e.length+" metres":"?"))])]),n("div",{staticClass:"spec"},[n("span",{staticClass:"spec__unit"},[t._v("Passengers")]),n("span",{staticClass:"spec__value"},[t._v(t._s(e.passengers||"?"))])])])})),1),n("Pagination",{attrs:{page:t.page,total:t.total},on:{"update:page":function(e){t.page=e},change:t.handleChangePage}})],1)},i=[],r=(n("96cf"),n("3b8d")),c=(n("c5f6"),n("553f")),s=n("c106"),o=n("1799"),u=n("ae8d"),l=n("b047"),f=n.n(l),p={data:function(){return{data:[],query:null,loading:!1,total:0,page:1}},created:function(){this.page=Number(this.$route.query.page)||1,this.fetchData(this.page),this.handleSearch=f()(this.handleSearch,300)},methods:{handleSearch:function(){this.page=1,this.$router.push({query:{page:1}}),this.fetchData()},fetchData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,c["a"].get("/vehicles",{params:{page:e,search:this.query}});case 3:n=t.sent,a=n.count,i=n.results,this.total=a,this.data=i,this.loading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleChangePage:function(t){this.$router.push({query:{page:t}}),this.fetchData(t)}},components:{Search:s["a"],Pagination:o["a"],Card:u["a"]}},h=p,d=(n("680a"),n("2877")),v=Object(d["a"])(h,a,i,!1,null,"c87dcf08",null);e["default"]=v.exports},1310:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},1799:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.total>0?n("div",{staticClass:"pagination"},[n("span",{staticClass:"pagination__item",on:{click:t.handlePrevPage}},[t._v(" ← Back ")]),n("span",{staticClass:"pagination__pages"},[t._v(" Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages)+" ")]),n("span",{staticClass:"pagination__item",on:{click:t.handleNextPage}},[t._v(" Next → ")])]):t._e()},i=[],r=(n("c5f6"),{props:{total:{type:Number,default:0},perPage:{type:Number,default:10},page:{type:Number,default:1}},watch:{page:function(t){this.currentPage=t}},data:function(){return{currentPage:this.page}},computed:{totalPages:function(){return Math.ceil(this.total/this.perPage)}},methods:{handleNextPage:function(){this.currentPage>=this.totalPages||(this.currentPage++,this.$emit("update:page",this.currentPage),this.$emit("change",this.currentPage))},handlePrevPage:function(){this.currentPage<=1||(this.currentPage--,this.$emit("update:page",this.currentPage),this.$emit("change",this.currentPage))}}}),c=r,s=(n("c609"),n("2877")),o=Object(s["a"])(c,a,i,!1,null,"fc9d7eda",null);e["a"]=o.exports},"1a8c":function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},"29f3":function(t,e){var n=Object.prototype,a=n.toString;function i(t){return a.call(t)}t.exports=i},"2b3e":function(t,e,n){var a=n("585a"),i="object"==typeof self&&self&&self.Object===Object&&self,r=a||i||Function("return this")();t.exports=r},3729:function(t,e,n){var a=n("9e69"),i=n("00fd"),r=n("29f3"),c="[object Null]",s="[object Undefined]",o=a?a.toStringTag:void 0;function u(t){return null==t?void 0===t?s:c:o&&o in Object(t)?i(t):r(t)}t.exports=u},"408c":function(t,e,n){var a=n("2b3e"),i=function(){return a.Date.now()};t.exports=i},"491b":function(t,e,n){"use strict";var a=n("88a2"),i=n.n(a);i.a},"585a":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("c8ba"))},"680a":function(t,e,n){"use strict";var a=n("cb84"),i=n.n(a);i.a},"88a2":function(t,e,n){},"9e69":function(t,e,n){var a=n("2b3e"),i=a.Symbol;t.exports=i},ae8d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"card",attrs:{to:t.link}},[n("div",{staticClass:"card__name"},[t._v(" "+t._s(t.title)+" ")]),n("div",{staticClass:"card__description"},[t._t("default")],2)])},i=[],r=n("768b"),c=(n("ac6a"),n("ffc1"),{props:["link","title"],computed:{info:function(){return s(this.data)}}});function s(t){return Object.entries(t).map((function(e){var n=Object(r["a"])(e,2),a=n[0],i=n[1];"unknown"===i&&(t[a]="?")})),t}var o=c,u=(n("491b"),n("2877")),l=Object(u["a"])(o,a,i,!1,null,"615ef27e",null);e["a"]=l.exports},b047:function(t,e,n){var a=n("1a8c"),i=n("408c"),r=n("b4b0"),c="Expected a function",s=Math.max,o=Math.min;function u(t,e,n){var u,l,f,p,h,d,v=0,g=!1,m=!1,b=!0;if("function"!=typeof t)throw new TypeError(c);function _(e){var n=u,a=l;return u=l=void 0,v=e,p=t.apply(a,n),p}function y(t){return v=t,h=setTimeout(j,e),g?_(t):p}function P(t){var n=t-d,a=t-v,i=e-n;return m?o(i,f-a):i}function x(t){var n=t-d,a=t-v;return void 0===d||n>=e||n<0||m&&a>=f}function j(){var t=i();if(x(t))return C(t);h=setTimeout(j,P(t))}function C(t){return h=void 0,b&&u?_(t):(u=l=void 0,p)}function w(){void 0!==h&&clearTimeout(h),v=0,u=d=l=h=void 0}function O(){return void 0===h?p:C(i())}function $(){var t=i(),n=x(t);if(u=arguments,l=this,d=t,n){if(void 0===h)return y(d);if(m)return clearTimeout(h),h=setTimeout(j,e),_(d)}return void 0===h&&(h=setTimeout(j,e)),p}return e=r(e)||0,a(n)&&(g=!!n.leading,m="maxWait"in n,f=m?s(r(n.maxWait)||0,e):f,b="trailing"in n?!!n.trailing:b),$.cancel=w,$.flush=O,$}t.exports=u},b4b0:function(t,e,n){var a=n("1a8c"),i=n("ffd6"),r=NaN,c=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;function f(t){if("number"==typeof t)return t;if(i(t))return r;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var n=o.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):s.test(t)?r:+t}t.exports=f},c106:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"search__input",attrs:{name:"search",type:"search",placeholder:"Search...",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},domProps:{value:t.input},on:{input:[function(e){e.target.composing||(t.input=e.target.value)},t.handleSearch]}}),n("Icon",{staticClass:"search__icon",attrs:{name:"search"}})],1)},i=[],r={data:function(){return{input:null}},methods:{handleSearch:function(){this.$emit("change",this.input),this.$emit("input",this.input)}}},c=r,s=(n("00c8"),n("2877")),o=Object(s["a"])(c,a,i,!1,null,"a89bcf98",null);e["a"]=o.exports},c395:function(t,e,n){},c609:function(t,e,n){"use strict";var a=n("e5ee"),i=n.n(a);i.a},cb84:function(t,e,n){},e5ee:function(t,e,n){},ffd6:function(t,e,n){var a=n("3729"),i=n("1310"),r="[object Symbol]";function c(t){return"symbol"==typeof t||i(t)&&a(t)==r}t.exports=c}}]);
//# sourceMappingURL=chunk-3e3a924b.b30d3f30.js.map