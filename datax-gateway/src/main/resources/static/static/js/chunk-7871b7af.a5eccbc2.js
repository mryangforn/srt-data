(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7871b7af"],{"214d":function(t,a,r){"use strict";r.d(a,"f",(function(){return i})),r.d(a,"e",(function(){return n})),r.d(a,"d",(function(){return d})),r.d(a,"a",(function(){return o})),r.d(a,"g",(function(){return s})),r.d(a,"c",(function(){return c})),r.d(a,"b",(function(){return u}));var e=r("b775");function i(t){return Object(e["a"])({url:"/data/visual/boards/page",method:"get",params:t})}function n(t){return Object(e["a"])({url:"/data/visual/boards/"+t,method:"get"})}function d(t){return Object(e["a"])({url:"/data/visual/boards/"+t,method:"delete"})}function o(t){return Object(e["a"])({url:"/data/visual/boards",method:"post",data:t})}function s(t){return Object(e["a"])({url:"/data/visual/boards/"+t.id,method:"put",data:t})}function c(t){return Object(e["a"])({url:"/data/visual/boards/copy/"+t,method:"post"})}function u(t){return Object(e["a"])({url:"/data/visual/boards/build/"+t.id,method:"put",data:t})}},"2fc8":function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"board-container"},[r("div",{staticClass:"board-header"},[r("span",[t._v(t._s(t.dataBoard.boardName))])]),r("div",{staticClass:"board-wrapper"},[r("grid-layout",{staticStyle:{height:"100%","overflow-x":"hidden","overflow-y":"auto"},attrs:{layout:t.layout,"col-num":24,"row-height":30,"is-draggable":!1,"is-resizable":!1,"is-mirrored":!1,"vertical-compact":!0,"use-css-transforms":!0,margin:[10,10]},on:{"update:layout":function(a){t.layout=a}}},t._l(t.layout,(function(a){return r("grid-item",{key:a.i,attrs:{x:a.x,y:a.y,w:a.w,h:a.h,i:a.i}},[r("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.getChartItem(a.i).loading,expression:"getChartItem(item.i).loading"}],staticClass:"board-wrapper-card",attrs:{"body-style":"padding: 10px;"}},[r("div",{staticClass:"board-wrapper-card-header",attrs:{slot:"header"},slot:"header"},[r("div",[r("span",[t._v(t._s(t.getChartItem(a.i).chartName))])])]),t.getChartItem(a.i).visible?r("chart-panel",{key:a.i,ref:"charts"+a.i,refInFor:!0,attrs:{"chart-schema":t.getChartItem(a.i).chartSchema,"chart-data":t.getChartItem(a.i).data,"chart-style":{height:30*a.h+10*(a.h-1)-60+"px"}}}):r("div",{style:{height:30*a.h+10*(a.h-1)-60+"px"}})],1)],1)})),1)],1)])},i=[],n=(r("7db0"),r("d81d"),r("e9c4"),r("b64b"),r("d3b7"),r("159b"),r("214d")),d=r("1dc5"),o=r("7be8"),s=r.n(o),c=r("3a5b"),u={name:"DataBoardView",components:{GridLayout:s.a.GridLayout,GridItem:s.a.GridItem,ChartPanel:c["default"]},data:function(){return{dataBoard:{},layout:[],interval:[],charts:[],timers:[]}},created:function(){this.getDataBoard(this.$route.params.id)},methods:{getDataBoard:function(t){var a=this;Object(n["e"])(t).then((function(t){if(t.success){a.dataBoard=t.data,a.layout=a.dataBoard.boardConfig?JSON.parse(JSON.stringify(a.dataBoard.boardConfig.layout)):[],a.interval=a.dataBoard.boardConfig?JSON.parse(JSON.stringify(a.dataBoard.boardConfig.interval)):[];var r=a.dataBoard.charts?JSON.parse(JSON.stringify(a.dataBoard.charts)):[];r.forEach((function(t,r,e){a.parserChart(t)})),a.charts=r,a.$nextTick((function(){a.initTimer()}))}}))},parserChart:function(t){var a=this;this.$set(t,"loading",!0),t.chartConfig?Object(d["d"])(JSON.parse(t.chartConfig)).then((function(r){r.success&&(a.$set(t,"data",r.data.data),a.$set(t,"chartSchema",JSON.parse(t.chartConfig)),a.$set(t,"loading",!1),a.$set(t,"visible",!0))})):this.$set(t,"loading",!1)},getChartItem:function(t){return this.charts.find((function(a){return a.id===t}))},initTimer:function(){var t=this;this.interval.forEach((function(a,r){if(a.milliseconds&&a.milliseconds>0){var e=setInterval((function(){var r=t.charts.find((function(t){return t.id===a.id}));r.chartConfig&&Object(d["d"])(JSON.parse(r.chartConfig)).then((function(a){a.success&&t.$set(r,"data",a.data.data)}))}),a.milliseconds);t.timers.push(e)}}))}},beforeDestroy:function(){this.timers.map((function(t){clearInterval(t)}))}},h=u,l=(r("7fca"),r("2877")),f=Object(l["a"])(h,e,i,!1,null,"c23d5578",null);a["default"]=f.exports},"62c3":function(t,a,r){},"7fca":function(t,a,r){"use strict";r("62c3")}}]);