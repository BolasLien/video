(function(t){function e(e){for(var a,o,s=e[0],u=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function o(t){return s.p+"js/"+({favourite:"favourite",watchvideo:"watchvideo"}[t]||t)+"."+{favourite:"b8678e04",watchvideo:"18b57f1e"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(t);var c=new Error;r=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,n[1](c)}i[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/favourite"}},[t._v("My favourite")])],1),t.loading?n("router-view",{attrs:{items:t.items}}):t._e()],1)},r=[],o=(n("4160"),n("159b"),{data:function(){return{pageTokens:[],loadTimes:2,index:0,loading:!1,items:[]}},methods:{loadVideos:function(){var t=this;this.index!==this.loadTimes?this.axios.get("https://www.googleapis.com/youtube/v3/videos",{params:{part:"snippet,contentDetails",chart:"mostPopular",maxResults:50,key:"AIzaSyCHz0GyFewSwkobbs-z24djVGOiP1oUeD4",pageToken:this.pageTokens[this.index]}}).then((function(e){t.index++,e.data.items.forEach((function(e){return t.items.push(e)})),t.pageTokens[t.index]=e.data.nextPageToken,t.loadVideos()})).catch((function(t){console.log(t)})):this.loading=!0}},mounted:function(){this.loadVideos()}}),s=o,u=n("2877"),c=Object(u["a"])(s,i,r,!1,null,null,null),d=c.exports,l=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Page",{attrs:{items:t.items}})],1)},f=[],v=n("9973"),h={name:"Home",components:{Page:v["a"]},props:{items:Array}},m=h,g=Object(u["a"])(m,p,f,!1,null,null,null),b=g.exports;a["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:b},{path:"/favourite",name:"Favourite",component:function(){return n.e("favourite").then(n.bind(null,"c9bd"))}},{path:"/watchvideo/:id",name:"WatchVideo",component:function(){return n.e("watchvideo").then(n.bind(null,"7c0a"))}}],P=new l["a"]({routes:y}),x=P,w=(n("7db0"),n("c975"),n("a434"),n("2f62")),_=n("0e44");a["a"].use(w["a"]);var k=new w["a"].Store({plugins:[Object(_["a"])()],state:{favData:[]},mutations:{addFavData:function(t,e){void 0===t.favData.find((function(t){return t.id===e.id}))&&t.favData.push(e)},removeFavData:function(t,e){var n=t.favData.find((function(t){return t.id===e.id}));n&&t.favData.splice(t.favData.indexOf(n),1)}},actions:{},modules:{},getters:{favData:function(t){return t.favData}}}),D=n("bc3a"),O=n.n(D),j=n("a7fe"),C=n.n(j),I=n("f0e2");n("fda2"),n("7046");a["a"].prototype.$video=I["a"],a["a"].config.productionTip=!1,a["a"].use(C.a,O.a),new a["a"]({router:x,store:k,render:function(t){return t(d)}}).$mount("#app")},7046:function(t,e,n){},"829b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("router-link",{attrs:{to:"/watchvideo/"+t.videoId}},[n("div",{staticClass:"pic"},[n("img",{staticClass:"thumbnails",attrs:{src:t.thumbnails.medium.url,alt:"img"}}),n("span",{staticClass:"length"},[t._v(t._s(t.videoLength))])])]),n("div",{staticClass:"control"},[t.fav?n("input",{staticClass:"btn-fav",attrs:{type:"button",value:"收藏"},on:{click:function(e){return t.remove()}}}):n("input",{staticClass:"btn",attrs:{type:"button",value:"收藏"},on:{click:function(e){return t.add()}}}),n("div",{staticClass:"text"},[n("span",{staticClass:"title"},[t._v(t._s(t.title))]),n("span",{staticClass:"description"},[t._v(t._s(t.description))])])])],1)},i=[],r=(n("a4d3"),n("e01a"),{props:{data:Object,fav:Boolean},data:function(){return{}},computed:{thumbnails:function(){return this.data.snippet.thumbnails},videoLength:function(){return this.data.contentDetails.duration},title:function(){return this.data.snippet.title},description:function(){return this.data.snippet.description},videoId:function(){return this.data.id}},methods:{add:function(){this.$store.commit("addFavData",this.data)},remove:function(){this.$store.commit("removeFavData",this.data)}}}),o=r,s=n("2877"),u=Object(s["a"])(o,a,i,!1,null,null,null);e["a"]=u.exports},9973:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._l(t.pageData,(function(e,a){return n("VideoCard",{key:a,staticClass:"v-card",attrs:{data:e,fav:t.fav(e)}})})),n("div",{staticClass:"page-controller"},[n("input",{attrs:{type:"button",value:"首頁"},on:{click:t.firstPage}}),t.pageIndex>1?n("input",{attrs:{type:"button",value:"上一頁"},on:{click:t.prevPage}}):n("input",{attrs:{type:"button",value:"上一頁",disabled:""}}),n("p",[t._v("第 "+t._s(t.pageIndex)+" 頁")]),t.pageIndex*t.numberPerPage<t.items.length?n("input",{attrs:{type:"button",value:"下一頁"},on:{click:t.nextPage}}):n("input",{attrs:{type:"button",value:"下一頁",disabled:""}}),n("input",{attrs:{type:"button",value:"末頁"},on:{click:t.lastPage}})])],2)},i=[],r=(n("7db0"),n("829b")),o={components:{VideoCard:r["a"]},props:{items:Array},data:function(){return{pageIndex:1,numberPerPage:12}},methods:{fav:function(t){return!(void 0===this.favData.find((function(e){return e.id===t.id})))},firstPage:function(){this.pageIndex=1},nextPage:function(){this.pageIndex+=1},prevPage:function(){this.pageIndex-=1},lastPage:function(){this.pageIndex=1+Math.floor(this.items.length/this.numberPerPage)}},computed:{favData:function(){return this.$store.getters.favData},pageData:function(){for(var t=[],e=0+this.numberPerPage*(this.pageIndex-1);e<this.numberPerPage+this.numberPerPage*(this.pageIndex-1);e++){if(e>=this.items.length)break;t.push(this.items[e])}return t}},mounted:function(){this.firstPage()}},s=o,u=n("2877"),c=Object(u["a"])(s,a,i,!1,null,null,null);e["a"]=c.exports}});
//# sourceMappingURL=app.2a670b4c.js.map