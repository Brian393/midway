(function(e){function t(t){for(var i,o,r=t[0],u=t[1],l=t[2],c=0,m=[];c<r.length;c++)o=r[c],n[o]&&m.push(n[o][0]),n[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,o=1;o<a.length;o++){var u=a[o];0!==n[u]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},n={app:0},s=[];function o(e){return r.p+"js/"+({}[e]||e)+"."+{8628:"d1e68433","5e0b":"929383a4","6a51":"ebf2e4cf","869f9":"1d84e665","969e":"85213ec8","chunk-4d5f":"0d89dafb",e2ad:"13c0005d",fc1f:"bb3ea2bc"}[e]+".js"}function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,i){a=n[e]=[t,i]});t.push(a[2]=i);var s,u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(e),s=function(t){l.onerror=l.onload=null,clearTimeout(c);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+i+": "+s+")");o.type=i,o.request=s,a[1](o)}n[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,u.appendChild(l)}return Promise.all(t)},r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/ecotopia-today/",r.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("04f5"),n=a.n(i);n.a},"04f5":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("b059");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("main",[a("nav",[a("md-menu",{attrs:{"md-direction":"bottom-start"}},[a("md-button",{staticClass:"md-raised",class:{"md-accent":"megaregion"===e.$route.name},attrs:{"md-menu-trigger":""}},[e._v("Megaregion")]),a("md-menu-content",[a("md-menu-item",{attrs:{to:"/megaregion/introduction"}},[e._v("Introduction")])],1)],1),a("md-menu",{attrs:{"md-direction":"bottom-start"}},[a("md-button",{staticClass:"md-raised",class:{"md-accent":"watershed"===e.$route.name},attrs:{"md-menu-trigger":""}},[e._v("Watershed")]),a("md-menu-content",[a("md-menu-item",{attrs:{to:"/watershed/introduction"}},[e._v("Introduction")]),a("md-menu-item",{attrs:{to:"/watershed/terminals"}},[e._v("Terminals")]),a("md-menu-item",{attrs:{to:"/watershed/dams"}},[e._v("Dams")]),a("md-menu-item",{attrs:{to:"/watershed/hanford"}},[e._v("Hanford")]),a("md-menu-item",{attrs:{to:"/watershed/hanford/legacy"}},[e._v("Hanford Legacy")]),a("md-menu-item",{attrs:{to:"/watershed/hanford/plumes"}},[e._v("Hanford Plumes")]),a("md-menu-item",{attrs:{to:"/watershed/hanford/floods"}},[e._v("Hanford Floods")])],1)],1),a("md-menu",{attrs:{"md-direction":"bottom-start"}},[a("md-button",{staticClass:"md-raised",class:{"md-accent":"bioregion"===e.$route.name},attrs:{"md-menu-trigger":""}},[e._v("Bioregion")]),a("md-menu-content",[a("md-menu-item",{attrs:{to:"/bioregion/introduction"}},[e._v("Introduction")])],1)],1),a("div",{attrs:{id:"aside-scroll-to",title:"Skip To Content"},on:{click:e.scrollToAside}},[a("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")])])],1),a("router-view",{attrs:{name:"map",id:"map"}})],1),a("aside",{class:{"no-flex":this.asideHidden}},[a("div",{attrs:{id:"aside-wraper"}},[a("div",{attrs:{id:"aside-toggle",title:"Toggle Content"},on:{click:e.toggleAside}},[e.asideHidden?a("i",{staticClass:"material-icons"},[e._v("menu")]):a("i",{staticClass:"material-icons"},[e._v("close")])]),a("h1",{class:{hidden:this.asideHidden},attrs:{id:"aside-heading"}},[e._v("Learning From Cascadia")])]),a("div",{ref:"asideContent",class:{hidden:this.asideHidden},attrs:{id:"content"}},[a("router-view")],1)])])},s=[],o=a("c93e"),r=a("2f62"),u={name:"App",computed:Object(o["a"])({},Object(r["b"])(["asideHidden"])),methods:{toggleAside:function(){this.$store.dispatch("toggle")},scrollToAside:function(){this.$refs.asideContent.scrollIntoView()}}},l=u,c=(a("034f"),a("2877")),d=Object(c["a"])(l,n,s,!1,null,null,null),m=d.exports,p=a("8c4f"),h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside-content"},[a("h1",[e._v("Watershed Intoduction")]),a("div",{attrs:{id:"lipsum"}},[a("p",[e._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros tellus. Sed euismod vel sem vitae ornare. Nullam aliquet quam lectus, sed placerat mi accumsan at. Nullam malesuada arcu eros, nec suscipit tortor molestie quis. Integer tristique nulla vel ex porttitor, et pellentesque augue tincidunt. Quisque placerat aliquet suscipit. Integer nec aliquam libero. Proin vel odio id orci elementum varius. Donec et libero eget quam eleifend tristique cursus ut ante. Quisque auctor, risus ac facilisis maximus, ante sem efficitur leo, sed elementum sapien nisi vel leo. Nullam euismod sapien at velit condimentum dignissim.\n    ")]),a("p",[e._v("\n    Nullam vel dui sit amet sapien suscipit auctor in vitae dolor. Morbi laoreet bibendum enim eget pellentesque. Pellentesque vitae dignissim turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vel neque neque. Maecenas nec nunc id sapien vehicula luctus. In ut felis eu dolor egestas convallis at ut erat. Fusce et auctor lacus. Sed vehicula ipsum vitae laoreet laoreet. Nulla facilisi. Sed sed pharetra enim, ac aliquet nisi. Suspendisse id luctus orci. Praesent a purus pretium, faucibus erat in, sagittis massa. Maecenas massa nunc, congue vel orci sed, dignissim condimentum ante. Sed vel augue sodales, posuere ipsum quis, facilisis nisl.\n    ")]),a("p",[e._v("\n    Suspendisse consequat justo ligula. Nunc pharetra libero ac lacus ornare, id tempus leo maximus. Mauris a venenatis sapien, in eleifend odio. Maecenas porttitor metus mi, at sodales enim luctus vitae. Proin quis ultrices lorem. Quisque feugiat blandit magna, vitae porttitor turpis lacinia vulputate. In porttitor tincidunt tristique. Nulla ac lectus aliquam, rhoncus nisl et, dictum tortor. Curabitur elementum, velit sed viverra bibendum, dolor risus facilisis velit, sed consequat mi diam eget diam. Aenean pellentesque sem sed mauris suscipit, sit amet placerat nulla hendrerit. Praesent venenatis nisi eu augue ultricies semper. Phasellus accumsan finibus ligula et mattis. In ullamcorper, lorem at aliquam sodales, magna neque luctus quam, in auctor justo sapien sed risus. Sed augue quam, eleifend quis viverra ac, sodales vel ligula. Phasellus nisi est, suscipit in fringilla in, malesuada et enim.\n    ")]),a("p",[e._v("\n    Praesent vel tempus neque, in lacinia libero. Nunc eleifend risus risus, at aliquam enim finibus ut. Sed a dapibus eros, vel tempus enim. Phasellus et mi faucibus, placerat arcu vitae, finibus est. Donec a elementum leo, sed sollicitudin tortor. Vestibulum eleifend pulvinar arcu vel mollis. Quisque iaculis lacinia libero, mattis pulvinar dolor luctus at. Nunc eu orci in ligula auctor condimentum eu rutrum eros. Sed sed lorem feugiat, aliquet arcu semper, efficitur leo.\n    ")]),a("p",[e._v("\n    Praesent et elit non leo pellentesque sollicitudin. Aliquam lobortis diam in felis aliquam, sed porta libero egestas. Phasellus libero mi, consequat eget consequat non, suscipit sit amet sem. Nulla a efficitur enim. Morbi nunc mauris, scelerisque at volutpat consectetur, luctus vel enim. Suspendisse ac arcu et diam elementum condimentum. Duis tempus metus sed dolor auctor, non tincidunt ante vehicula. Fusce tristique turpis non commodo ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n    ")]),a("p",[e._v("\n    Nullam lacus purus, porttitor ut pellentesque eu, hendrerit in neque. Praesent eu suscipit orci. Etiam quis tincidunt nibh. Ut porttitor mi nulla, et tempor dolor varius quis. Phasellus viverra eget ante sit amet malesuada. Curabitur auctor sapien a dui volutpat congue. Duis tempus pharetra viverra. Aliquam malesuada, sapien id eleifend commodo, turpis magna consequat urna, in aliquet turpis ex eget nisi. Proin eu sodales tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec diam lorem, rhoncus eget velit sit amet, consectetur luctus metus. Pellentesque rhoncus metus a sapien lacinia, sit amet tempus nisl placerat.\n    ")]),a("p",[e._v("\n    Duis tempor vestibulum dolor, non ullamcorper ipsum condimentum a. Maecenas in ex ligula. Aenean fringilla cursus tincidunt. Vivamus consectetur nunc justo, eu porttitor diam egestas ac. Pellentesque eu tincidunt est. Mauris a faucibus mauris. Proin augue neque, posuere posuere metus vel, scelerisque luctus mi. Vivamus vel lacinia nibh. Maecenas eu ipsum eget nisi aliquam eleifend a ut libero. Suspendisse blandit lacus nibh, ut malesuada nunc lobortis sit amet.\n    ")]),a("p",[e._v("\n    Proin mauris mauris, porttitor ac iaculis id, tristique vestibulum tortor. Sed placerat ac eros vestibulum pretium. Ut quis pharetra quam. Phasellus posuere, dolor ac convallis laoreet, mauris dui lobortis nisl, vel dictum est magna sit amet arcu. Ut ac egestas dui. Integer pulvinar nisi a nulla imperdiet rutrum id et est. Aliquam eget ultricies nisi. Nulla condimentum sollicitudin elit, a vehicula turpis consequat vel. Duis pharetra scelerisque dapibus. Maecenas bibendum volutpat arcu nec malesuada. Integer convallis auctor velit a facilisis. Cras sed molestie elit. Proin dui nibh, scelerisque at dui eget, feugiat consectetur risus. Etiam vel risus a elit tincidunt pulvinar. Maecenas et facilisis eros.\n    ")]),a("p",[e._v("\n    Donec varius elit lobortis ullamcorper tincidunt. Vestibulum lectus dolor, mattis vitae viverra at, auctor at lacus. Praesent maximus libero eget facilisis aliquam. Proin ac augue bibendum dolor ornare sagittis. Morbi ac lorem nunc. Donec malesuada id mi nec blandit. Aenean maximus molestie libero, non porta metus bibendum a. Aliquam rhoncus gravida aliquam. Mauris vitae dolor at nisi iaculis condimentum. Mauris non dolor nulla. Nunc euismod semper nisi. Maecenas vitae erat at lectus vehicula aliquet quis eget dolor. Nam molestie est in turpis efficitur tempus.\n    ")]),a("p",[e._v("\n    Morbi vitae ultricies risus. Morbi dapibus nibh eget ultricies venenatis. Nulla libero velit, porttitor id turpis non, luctus fringilla risus. Integer a nulla ut neque lacinia pellentesque. Aenean laoreet massa vel augue sollicitudin, non tristique sem porttitor. Vestibulum vitae nisi nunc. Sed in est luctus, posuere nisi aliquam, accumsan massa. Integer in ullamcorper felis. Nunc consequat diam eget sodales consequat. Nulla facilisi. Nunc aliquam quam ac nisl faucibus, in imperdiet magna volutpat. Vestibulum tristique enim magna. Aliquam erat volutpat. Maecenas consectetur augue a quam pharetra, in iaculis diam egestas. Proin non interdum massa.\n    ")])])])}],g={name:"WatershedIntroduction"},v=g,b=Object(c["a"])(v,h,f,!1,null,null,null),w=b.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"map"}})},q=[],P=(a("7f7f"),a("5bc0"),a("5eee")),_=a("a2c7"),M=a("3e6b"),j=a("480c"),x=a("9c78"),L=a("5831"),H=a("2ef1"),O=a("a2e1"),S=a("6c77"),k=a("6cbf"),N=a("8682"),R=a("83a6"),W=a("256f"),T={name:"Map",computed:Object(o["a"])({},Object(r["b"])(["asideHidden"])),data:function(){return{olmap:void 0,baseUrl:"/ecotopia-today",centerPoints:{introductionwater:{center:[-118.8,46.1],resolution:700},introductionbio:{center:[-121.2,51],resolution:4500},introductionmetro:{center:[-122.112002,45.564222],resolution:180},energy:{center:[-119.023311,46.864322],resolution:798},terminals:{center:[-122.68,45.84],resolution:220},hanford1:{center:[-119.46,46.637574],resolution:70},legacy:{center:[-119.5199,46.555],resolution:6},floods:{center:[-119.46,46.607574],resolution:50},plumes:{center:[-119.46,46.607574],resolution:50},crops:{center:[-117.6,46.5],resolution:900},stopit:{center:[-122.68,45.84],resolution:220},dams:{center:[-117.9,46.9],resolution:700},coulee:{center:[-118.989,47.948],resolution:6},basin:{center:[-118.989,46.9],resolution:300}}}},mounted:function(){this.initMap()},watch:{$route:function(e,t){this.initMap()},asideHidden:function(){this.olmap.updateSize()}},methods:{initMap:function(){switch(this.$route.name){case"watershedIntroduction":this.initWatershedIntro();break;case"watershedTerminals":this.initWatershedTerminals();break;case"watershedDams":this.initWatershedDams();break;case"watershedHanford":this.initWatershedHanford();break;case"watershedHanfordLegacy":this.initWatershedHanfordLegacy();break;case"watershedHanfordPlumes":this.initWatershedHanfordPlumes();break;case"watershedHanfordFloods":this.initWatershedHanfordFloods();break;default:this.initWatershedIntro()}},makeGeoJSONPointVectorLayer:function(e,t,a,i){return new M["a"]({source:new L["a"]({url:"".concat(this.baseUrl).concat(e),format:new O["a"]}),minResolution:a,maxResolution:i,style:new S["b"]({image:new k["a"]({src:"".concat(this.baseUrl).concat(t)})})})},makeGeoJSONLineVectorLayer:function(e,t,a,i,n){return new M["a"]({source:new L["a"]({format:new O["a"],url:"".concat(this.baseUrl).concat(e)}),minResolution:t,maxResolution:a,style:new S["b"]({stroke:new N["a"]({color:i,width:n})}),strokeColor:i})},makeGeoJSONFillVectorLayer:function(e,t,a,i,n,s){return new M["a"]({source:new L["a"]({format:new O["a"],url:"".concat(this.baseUrl).concat(e)}),minResolution:t,maxResolution:a,style:new S["b"]({stroke:new N["a"]({color:i,width:n}),fill:new R["a"]({color:s})}),fill:s,fillColor:s})},watershedBaseLayers:function(){return[new j["a"]({source:new H["a"]({url:"https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"}),opacity:.9,minResolution:2,maxResolution:16e3}),new j["a"]({preload:1/0,source:new H["a"]({url:"http://ecotopia.today/cascadia/Tiles/Columbia/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:16e3}),new j["a"]({source:new H["a"]({url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"}),opacity:.9,minResolution:1,maxResolution:8})]},initBaseWatershedMap:function(){this.olmap||(this.olmap=new P["a"]({target:"map",layers:this.watershedBaseLayers()}))},initWatershedIntro:function(){this.initBaseWatershedMap(),this.olmap.setLayerGroup(new x["a"]({layers:this.watershedBaseLayers()})),this.olmap.setView(new _["a"]({center:Object(W["c"])(this.centerPoints.introductionwater.center),resolution:this.centerPoints.introductionwater.resolution,zoom:0}))},initWatershedTerminals:function(){this.initBaseWatershedMap(),this.olmap.setLayerGroup(new x["a"]({layers:this.watershedBaseLayers().concat([this.makeGeoJSONPointVectorLayer("/geojson/stopped.geojson","/icons/stop.png",2,32e3),this.makeGeoJSONPointVectorLayer("/geojson/planned.geojson","/icons/stopit.png",2,32e3)])})),this.olmap.setView(new _["a"]({center:Object(W["c"])(this.centerPoints.terminals.center),resolution:this.centerPoints.terminals.resolution,zoom:0}))},initWatershedDams:function(){this.initBaseWatershedMap(),this.olmap.setLayerGroup(new x["a"]({layers:this.watershedBaseLayers().concat([this.makeGeoJSONPointVectorLayer("/geojson/Rapids.geojson","/icons/waterfall.png",2,32e3),this.makeGeoJSONPointVectorLayer("/geojson/MajorHydroCRB.geojson","/icons/damOther.png",2,32e3),this.makeGeoJSONPointVectorLayer("/geojson/Bureau.geojson","/icons/damBR.png",2,32e3),this.makeGeoJSONPointVectorLayer("/geojson/ArmyCorps.geojson","/icons/damAC.png",2,32e3)])})),this.olmap.setView(new _["a"]({center:Object(W["c"])(this.centerPoints.dams.center),resolution:this.centerPoints.dams.resolution,zoom:0}))},initWatershedHanford:function(){this.initBaseWatershedMap(),this.olmap.setLayerGroup(new x["a"]({layers:this.watershedBaseLayers().concat([new j["a"]({preload:1/0,source:new H["a"]({url:"http://ecotopia.today/cascadia/Tiles/Hanford/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:160})])})),this.olmap.setView(new _["a"]({center:Object(W["c"])(this.centerPoints.hanford1.center),resolution:this.centerPoints.hanford1.resolution,zoom:0}))},initWatershedHanfordLegacy:function(){this.initBaseWatershedMap(),this.olmap.setLayerGroup(new x["a"]({layers:this.watershedBaseLayers().concat([new j["a"]({preload:1/0,source:new H["a"]({url:"http://ecotopia.today/cascadia/Tiles/Hanford/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:80}),new j["a"]({preload:1/0,source:new H["a"]({url:"http://ecotopia.today/cascadia/Tiles/Leaks/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:80}),this.makeGeoJSONFillVectorLayer("/geojsons/HanfordLabels.geojson",1,80,"rgba(60, 20, 20, 0.0)",2,"rgba(255, 255, 0, 0.0)")])})),this.olmap.setView(new _["a"]({center:Object(W["c"])(this.centerPoints.legacy.center),resolution:this.centerPoints.legacy.resolution,zoom:0}))},initWatershedHanfordPlumes:function(){this.initBaseWatershedMap(),this.olmap.setLayerGroup(new x["a"]({layers:this.watershedBaseLayers().concat([new j["a"]({preload:1/0,source:new H["a"]({url:"http://ecotopia.today/cascadia/Tiles/Hanford/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:80}),new j["a"]({preload:1/0,source:new H["a"]({url:"http://ecotopia.today/cascadia/Tiles/Leaks/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:80}),new j["a"]({preload:1/0,source:new H["a"]({url:"http://ecotopia.today/cascadia/Tiles/HanfordPlumes/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:80})])})),this.olmap.setView(new _["a"]({center:Object(W["c"])(this.centerPoints.plumes.center),resolution:this.centerPoints.plumes.resolution,zoom:0}))},initWatershedHanfordFloods:function(){this.initBaseWatershedMap(),this.olmap.setLayerGroup(new x["a"]({layers:this.watershedBaseLayers().concat([new j["a"]({preload:1/0,source:new H["a"]({url:"http://ecotopia.today/cascadia/Tiles/Floods/{z}/{x}/{y}.png"}),opacity:.7,minResolution:2,maxResolution:16e3})])})),this.olmap.setView(new _["a"]({center:Object(W["c"])(this.centerPoints.floods.center),resolution:this.centerPoints.floods.resolution,zoom:0}))}}},V=T,B=Object(c["a"])(V,y,q,!1,null,null,null),I=B.exports;i["default"].use(p["a"]);var C=new p["a"]({routes:[{path:"/",redirect:"/watershed/introduction"},{path:"/watershed/introduction",name:"watershedIntroduction",components:{default:w,map:I}},{path:"/watershed/terminals",name:"watershedTerminals",components:{default:function(){return a.e("869f9").then(a.bind(null,"869f9"))},map:I}},{path:"/watershed/dams",name:"watershedDams",components:{default:function(){return a.e("e2ad").then(a.bind(null,"e2ad"))},map:I}},{path:"/watershed/hanford",name:"watershedHanford",components:{default:function(){return a.e("969e").then(a.bind(null,"969e"))},map:I}},{path:"/watershed/hanford/legacy",name:"watershedHanfordLegacy",components:{default:function(){return a.e("fc1f").then(a.bind(null,"fc1f"))},map:I}},{path:"/watershed/hanford/plumes",name:"watershedHanfordPlumes",components:{default:function(){return a.e("6a51").then(a.bind(null,"6a51"))},map:I}},{path:"/watershed/hanford/floods",name:"watershedHanfordFloods",components:{default:function(){return a.e("8628").then(a.bind(null,"8628"))},map:I}},{path:"/megaregion/introduction",name:"megaregion",components:{default:function(){return a.e("5e0b").then(a.bind(null,"5e0b"))},map:I}},{path:"/bioregion/introduction",name:"bioregion",components:{default:function(){return a.e("chunk-4d5f").then(a.bind(null,"94ef"))},map:I}}]});i["default"].use(r["a"]);var G={asideHidden:!1},z={toggle:function(e){console.log("store toggle!!"),e.asideHidden=!e.asideHidden}},A={toggle:function(e){e.commit("toggle")}},D={asideHidden:function(e){return e.asideHidden}},J=new r["a"].Store({state:G,getters:D,actions:A,mutations:z}),$=(a("619b"),a("9c30"));a("51de"),a("d69d");i["default"].use($["MdButton"]),i["default"].use($["MdMenu"]),i["default"].use($["MdList"]),i["default"].config.productionTip=!1,new i["default"]({router:C,store:J,render:function(e){return e(m)}}).$mount("#app")},b059:function(e,t,a){}});
//# sourceMappingURL=app.8f674c37.js.map