(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"1cc4":function(t,e,r){"use strict";var a=r("3b4e"),n=r.n(a);n.a},"3b4e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("HomeMap",{staticClass:"homeMap"})],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{height:"100%",width:"100%"}},[r("div",{ref:"basicMapbox",style:t.mapSize}),r("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl tdtIcon"},[r("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_uncombine",attrs:{title:"点击切换底图"},on:{click:t.changeRSMap}},[t._v(" "+t._s(t.rsMap)+" ")])]),r("div",{staticClass:"buildIcon"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isShowBUIA,expression:"isShowBUIA"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.isShowBUIA)?t._i(t.isShowBUIA,null)>-1:t.isShowBUIA},on:{change:function(e){var r=t.isShowBUIA,a=e.target,n=!!a.checked;if(Array.isArray(r)){var i=null,o=t._i(r,i);a.checked?o<0&&(t.isShowBUIA=r.concat([i])):o>-1&&(t.isShowBUIA=r.slice(0,o).concat(r.slice(o+1)))}else t.isShowBUIA=n}}}),r("label",[t._v("天地图建筑物")])]),r("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl xunlianIcon"},[r("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon",attrs:{title:"训练"},on:{click:t.trainBtn}},[t._v(" 训练 ")])]),r("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl yuceIcon"},[r("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon",attrs:{title:"预测"},on:{click:t.predictBtn}},[t._v(" 预测 ")])]),r("div",{staticClass:"mapboxgl-ctrl-group mapboxgl-ctrl qingkongIcon"},[r("button",{staticClass:"mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash",attrs:{title:"清空"},on:{click:t.clearBtn}},[t._v(" 清空 ")])]),r("div",{staticClass:"msg"},[t._v(t._s(t.msg))])])},s=[],c=(r("4160"),r("a15b"),r("d81d"),r("159b"),r("96cf"),r("89ba")),l=r("e192"),u=r.n(l),p=r("5a74"),d=r.n(p),h=(r("ac6d"),r("b106")),m=r.n(h),f=(r("bdd0"),r("6ee6")),g=r.n(f),b=r("bc3a"),v=r.n(b),w={name:"HelloWorld",props:{mapWidth:{type:String},mapHeight:{type:String}},data:function(){return{draw:null,map:null,feature:null,msg:"请选择左侧相应的工具执行训练或预测！",isShowBUIA:!0,rsMap:"天地图"}},computed:{mapSize:function(){var t={width:this.mapWidth,height:this.mapHeight};return t}},watch:{feature:function(t,e){if("train"!==t)if("predict"!==t)if(t&&t.features&&0!==t.features.length){var r=t.features[0];"train"===e?this.train(r):"predict"===e&&this.predict(r)}else this.msg="图形未绘制成功！";else this.msg="正在绘制待预测的区域";else this.msg="正在绘制待训练的区域"},isShowBUIA:function(t){if(t)this.addBUIA();else{var e={type:"FeatureCollection",features:[]},r=this.map.getSource("tempbuild");r&&r.setData(e)}}},methods:{initMap:function(){var t=this;u.a.accessToken="pk.eyJ1Ijoid3VjYW5nZW8iLCJhIjoiY2oxNGQ1ZDdsMDA0djJxbzdzdGU4NWpqMiJ9.iaTLldYv7GNfxWhN42h__g";var e=new u.a.Map({container:this.$refs.basicMapbox,style:CONFIG.HOST+"/style.json",center:[116.295,39.945],zoom:16}),r=new d.a({defaultLanguage:"zh"});e.addControl(r);var a=new u.a.NavigationControl;e.addControl(a,"top-left");var n=new u.a.ScaleControl({maxWidth:80,unit:"imperial"});e.addControl(n),n.setUnit("metric"),e.addControl(new u.a.FullscreenControl),e.addControl(new u.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}));var i=g.a.modes;i.draw_rectangle=m.a;var o=new g.a({modes:i});e.addControl(o),e.on("draw.create",(function(e){t.feature=e})),this.draw=o,this.map=e;var s=this;this.map.on("moveend",Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s.addBUIA();case 1:case"end":return t.stop()}}),t)})))),this.addBUIA()},addBUIA:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,r,a,n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.map.getBounds(),r=[e._sw.lng,e._sw.lat,e._ne.lng,e._ne.lat],a=r.join(","),t.next=5,v()({method:"get",url:CONFIG.SERVER+"/v1/geojson",params:{extent:a}});case 5:n=t.sent,i=n.data,n.data&&this.isShowBUIA||(i={type:"FeatureCollection",features:[]}),o=this.map.getSource("tempbuild"),o?o.setData(i):(this.map.addSource("tempbuild",{type:"geojson",data:i}),this.map.addLayer(CONFIG.BUILDING_STYLE));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),trainBtn:function(){this.clearBtn(),this.feature="train",this.draw.changeMode("draw_rectangle")},predictBtn:function(){this.clearBtn(),this.feature="predict",this.draw.changeMode("draw_rectangle")},clearBtn:function(){this.draw.deleteAll()},changeRSMap:function(){if("天地图"===this.rsMap){var t=this.map.getStyle();t.sources["raster-tiles"]=CONFIG.GOOGLE_TILE,this.map.setStyle(t),this.rsMap="谷歌"}else if("谷歌"===this.rsMap){var e=this.map.getStyle();e.sources["raster-tiles"]=CONFIG.TDT_TILE,this.map.setStyle(e),this.rsMap="天地图"}},train:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=this.getExtentStr(e),this.msg=r,t.next=4,v()({method:"get",url:CONFIG.HOST+"/v1/train",params:{extent:r,map:"tdt"}});case 4:this.msg="正在训练中，请再系统后台查看进度...";case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),predict:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=this.getExtentStr(e),this.msg=r,this.msg="正在预测中，请稍后...",t.next=5,v()({method:"get",url:CONFIG.HOST+"/v1/predict",params:{extent:r,map:"tdt"}});case 5:if(a=t.sent,200==a.status&&a.data){t.next=9;break}return this.msg="预测失败！，status code:"+a.status,t.abrupt("return");case 9:if(n=a.data,0!==n.code){t.next=13;break}return this.msg=n.msg,t.abrupt("return");case 13:this.draw.add(n.data);case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getExtentStr:function(t){if(t&&t.geometry&&t.geometry.coordinates&&1==t.geometry.coordinates.length&&5==t.geometry.coordinates[0].length){var e=t.geometry.coordinates[0],r=180,a=180,n=-180,i=-180;e.forEach((function(t){t[0]>n&&(n=t[0]),t[0]<r&&(r=t[0]),t[1]>i&&(i=t[1]),t[1]<a&&(a=t[1])}));var o=[r,a,n,i].join(",");return o}this.msg="绘制的图形不是四边形！"}},mounted:function(){this.initMap()}},x=w,y=(r("1cc4"),r("2877")),S=Object(y["a"])(x,o,s,!1,null,"136e93cd",null),_=S.exports,I={name:"app",components:{HomeMap:_}},C=I,O=(r("034f"),Object(y["a"])(C,n,i,!1,null,null,null)),B=O.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(B)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.14246a96.js.map