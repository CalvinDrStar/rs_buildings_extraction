(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"137c":function(t,e,n){"use strict";var r=n("409b"),a=n.n(r);a.a},"409b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HomeMap",{staticClass:"homeMap"})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",width:"100%"}},[n("div",{ref:"basicMapbox",style:t.mapSize}),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl xunlianIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon",attrs:{title:"训练"},on:{click:t.trainBtn}},[t._v(" 训练 ")])]),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl yuceIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon",attrs:{title:"预测"},on:{click:t.predictBtn}},[t._v(" 预测 ")])]),n("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl qingkongIcon"},[n("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash",attrs:{title:"清空"},on:{click:t.clearBtn}},[t._v(" 清空 ")])]),n("div",{staticClass:"msg"},[t._v(t._s(t.msg))])])},s=[],c=(n("99af"),n("a15b"),n("d81d"),n("96cf"),n("89ba")),l=n("e192"),u=n.n(l),p=n("5a74"),d=n.n(p),f=(n("ac6d"),n("b106")),g=n.n(f),h=(n("bdd0"),n("6ee6")),m=n.n(h),b=n("bc3a"),v=n.n(b),x={name:"HelloWorld",props:{mapWidth:{type:String},mapHeight:{type:String}},data:function(){return{draw:null,map:null,feature:null,msg:"请选择左侧相应的工具执行训练或预测！"}},computed:{mapSize:function(){var t={width:this.mapWidth,height:this.mapHeight};return t}},watch:{feature:function(t,e){if("train"!==t)if("predict"!==t)if(t&&t.features&&0!==t.features.length){var n=t.features[0];"train"===e?this.train(n):"predict"===e&&this.predict(n)}else this.msg="图形未绘制成功！";else this.msg="正在绘制待预测的区域";else this.msg="正在绘制待训练的区域"}},methods:{initMap:function(){var t=this;u.a.accessToken="pk.eyJ1Ijoid3VjYW5nZW8iLCJhIjoiY2oxNGQ1ZDdsMDA0djJxbzdzdGU4NWpqMiJ9.iaTLldYv7GNfxWhN42h__g",u.a.setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js");var e=new u.a.Map({container:this.$refs.basicMapbox,style:"mapbox://styles/mapbox/streets-v9",center:[116.295,39.945],zoom:16}),n=new d.a({defaultLanguage:"zh"});e.addControl(n);var r=new u.a.NavigationControl;e.addControl(r,"top-left");var a=new u.a.ScaleControl({maxWidth:80,unit:"imperial"});e.addControl(a),a.setUnit("metric"),e.addControl(new u.a.FullscreenControl),e.addControl(new u.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}));var o=m.a.modes;o.draw_rectangle=g.a;var i=new m.a({modes:o});e.addControl(i),e.on("draw.create",(function(e){t.feature=e})),this.draw=i,this.map=e},trainBtn:function(){this.clearBtn(),this.feature="train",this.draw.changeMode("draw_rectangle")},predictBtn:function(){this.clearBtn(),this.feature="predict",this.draw.changeMode("draw_rectangle")},clearBtn:function(){this.draw.deleteAll()},train:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.getExtentStr(e),this.msg=n,t.next=4,v()({method:"get",url:CONFIG.HOST+"/v1/train",params:{extent:n,map:"tdt"}});case 4:this.msg="正在训练中，请再系统后台查看进度...";case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),predict:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.getExtentStr(e),this.msg=n,this.msg="正在预测中，请稍后...",t.next=5,v()({method:"get",url:CONFIG.HOST+"/v1/predict",params:{extent:n,map:"tdt"}});case 5:if(r=t.sent,200==r.status&&r.data){t.next=9;break}return this.msg="预测失败！，status code:"+r.status,t.abrupt("return");case 9:if(a=r.data,0!==a.code){t.next=13;break}return this.msg=a.msg,t.abrupt("return");case 13:this.draw.add(a.data);case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getExtentStr:function(t){if(t&&t.geometry&&t.geometry.coordinates&&1==t.geometry.coordinates.length&&5==t.geometry.coordinates[0].length){var e=t.geometry.coordinates[0],n=e[0],r=e[3],a=n.concat(r).join(",");return a}this.msg="绘制的图形不是四边形！"}},mounted:function(){this.initMap()}},w=x,y=(n("137c"),n("2877")),_=Object(y["a"])(w,i,s,!1,null,"1d9e4ffe",null),C=_.exports,j={name:"app",components:{HomeMap:C}},O=j,M=(n("034f"),Object(y["a"])(O,a,o,!1,null,null,null)),S=M.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(S)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.e1345228.js.map