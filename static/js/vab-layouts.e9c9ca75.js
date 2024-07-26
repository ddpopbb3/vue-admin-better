/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-7-26 05:14:19
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vab-layouts"],{"13a4":function(e,t,a){"use strict";a("fe7f")},"1e68":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav-bar-container"},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{lg:12,md:12,sm:12,xl:12,xs:4}},[t("div",{staticClass:"left-panel"},[t("i",{staticClass:"fold-unfold",class:e.collapse?"el-icon-s-unfold":"el-icon-s-fold",attrs:{title:e.collapse?"展开":"收起"},on:{click:e.handleCollapse}}),t("vab-breadcrumb",{staticClass:"hidden-xs-only"})],1)]),t("el-col",{attrs:{lg:12,md:12,sm:12,xl:12,xs:20}},[t("div",{staticClass:"right-panel"},[t("vab-error-log"),t("vab-full-screen-bar",{on:{refresh:e.refreshRoute}}),t("vab-theme-bar",{staticClass:"hidden-xs-only"}),t("vab-icon",{attrs:{icon:["fas","redo"],pulse:e.pulse,title:"重载所有路由"},on:{click:e.refreshRoute}}),t("vab-avatar")],1)])],1)],1)},i=[],o=a("7696"),r={name:"VabNavBar",data(){return{pulse:!1,timeOutID:null}},computed:{...Object(o["c"])({collapse:"settings/collapse",visitedRoutes:"tabsBar/visitedRoutes",device:"settings/device",routes:"routes/routes"})},methods:{...Object(o["b"])({changeCollapse:"settings/changeCollapse"}),handleCollapse(){this.changeCollapse()},async refreshRoute(){this.$baseEventBus.$emit("reload-router-view"),this.pulse=!0,this.timeOutID=setTimeout(()=>{this.pulse=!1},1e3)}},beforeDestroy(){clearTimeout(this.timeOutID)}},n=r,l=(a("fd8d"),a("426c")),c=Object(l["a"])(n,s,i,!1,null,"737a012b",null);t["default"]=c.exports},2180:function(e,t,a){"use strict";a("895a")},3146:function(e,t,a){},"397a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return e.routerView?t("div",{staticClass:"app-main-container"},[t("vab-github-corner"),t("transition",{attrs:{mode:"out-in",name:"fade-transform"}},[t("keep-alive",{attrs:{include:e.cachedRoutes,max:e.keepAliveMaxNum}},[t("router-view",{key:e.key,staticClass:"app-main-height"})],1)],1),t("footer",{directives:[{name:"show",rawName:"v-show",value:e.footerCopyright,expression:"footerCopyright"}],staticClass:"footer-copyright"},[e._v(" Copyright "),t("vab-icon",{attrs:{icon:["fas","copyright"]}}),e._v(" vue-admin-better 开源免费版 "+e._s(e.fullYear)+" ")],1)],1):e._e()},i=[],o=(a("cdf1"),a("7696")),r=a("f121"),n={name:"VabAppMain",data(){return{show:!1,fullYear:(new Date).getFullYear(),copyright:r["copyright"],title:r["title"],keepAliveMaxNum:r["keepAliveMaxNum"],routerView:!0,footerCopyright:r["footerCopyright"]}},computed:{...Object(o["c"])({visitedRoutes:"tabsBar/visitedRoutes",device:"settings/device"}),cachedRoutes(){const e=[];return this.visitedRoutes.forEach(t=>{t.meta.noKeepAlive||e.push(t.name)}),e},key(){return this.$route.path}},watch:{$route:{handler(e){"mobile"===this.device&&this.foldSideBar()},immediate:!0}},created(){const e=()=>{this.routerView=!1,this.$nextTick(()=>{this.routerView=!0})};this.$baseEventBus.$on("reload-router-view",e),this.$once("hook:beforeDestroy",()=>{this.$baseEventBus.$off("reload-router-view",e)})},mounted(){},methods:{...Object(o["b"])({foldSideBar:"settings/foldSideBar"})}},l=n,c=(a("7e9d"),a("426c")),d=Object(c["a"])(l,s,i,!1,null,"5b9463ce",null);t["default"]=d.exports},"3ab0":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-admin-beautiful-wrapper",class:e.classObj},["horizontal"===e.layout?t("div",{staticClass:"layout-container-horizontal",class:{fixed:"fixed"===e.header,"no-tabs-bar":"false"===e.tabsBar||!1===e.tabsBar}},[t("div",{class:"fixed"===e.header?"fixed-header":""},[t("vab-top-bar"),"true"===e.tabsBar||!0===e.tabsBar?t("div",{class:{"tag-view-show":e.tabsBar}},[t("div",{staticClass:"vab-main"},[t("vab-tabs-bar")],1)]):e._e()],1),t("div",{staticClass:"vab-main main-padding"},[t("vab-ad"),t("vab-app-main")],1)]):t("div",{staticClass:"layout-container-vertical",class:{fixed:"fixed"===e.header,"no-tabs-bar":"false"===e.tabsBar||!1===e.tabsBar}},["mobile"===e.device&&!1===e.collapse?t("div",{staticClass:"mask",on:{click:e.handleFoldSideBar}}):e._e(),t("vab-side-bar"),t("div",{staticClass:"vab-main",class:e.collapse?"is-collapse-main":""},[t("div",{class:"fixed"===e.header?"fixed-header":""},[t("vab-nav-bar"),"true"===e.tabsBar||!0===e.tabsBar?t("vab-tabs-bar"):e._e()],1),t("vab-ad"),t("vab-app-main")],1)],1),t("el-backtop")],1)},i=[],o=a("7696"),r=a("f121"),n={name:"Layout",data(){return{oldLayout:"",controller:new window.AbortController,timeOutID:null}},computed:{...Object(o["c"])({layout:"settings/layout",tabsBar:"settings/tabsBar",collapse:"settings/collapse",header:"settings/header",device:"settings/device"}),classObj(){return{mobile:"mobile"===this.device}}},beforeMount(){window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize),this.controller.abort(),clearTimeout(this.timeOutID)},mounted(){this.oldLayout=this.layout;const e=navigator.userAgent;e.includes("Juejin")&&this.$baseAlert("vue-admin-beautiful不支持在掘金内置浏览器演示，请手动复制以下地址到浏览器中查看http://mpfhrd48.sanxing.uz7.cn/vue-admin-beautiful");const t=this.handleIsMobile();t?(t?this.$store.dispatch("settings/changeLayout","vertical"):this.$store.dispatch("settings/changeLayout",this.oldLayout),this.$store.dispatch("settings/toggleDevice","mobile"),this.timeOutID=setTimeout(()=>{this.$store.dispatch("settings/foldSideBar")},2e3)):this.$store.dispatch("settings/openSideBar"),this.$nextTick(()=>{var e;window.addEventListener("storage",e=>{e.key!==r["tokenName"]&&null!==e.key||window.location.reload(),e.key===r["tokenName"]&&null===e.value&&window.location.reload()},{capture:!1,signal:null===(e=this.controller)||void 0===e?void 0:e.signal})})},methods:{...Object(o["b"])({handleFoldSideBar:"settings/foldSideBar"}),handleIsMobile(){return document.body.getBoundingClientRect().width-1<992},handleResize(){if(!document.hidden){const e=this.handleIsMobile();e?this.$store.dispatch("settings/changeLayout","vertical"):this.$store.dispatch("settings/changeLayout",this.oldLayout),this.$store.dispatch("settings/toggleDevice",e?"mobile":"desktop")}}}},l=n,c=(a("13a4"),a("426c")),d=Object(c["a"])(l,s,i,!1,null,"2e468f69",null);t["default"]=d.exports},"3bc6":function(e,t,a){"use strict";a("bf9e")},"5f5f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("router-view")},i=[],o=a("426c"),r={},n=Object(o["a"])(r,s,i,!1,null,null,null);t["default"]=n.exports},6897:function(e,t,a){},6997:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("el-breadcrumb",{staticClass:"breadcrumb-container",attrs:{separator:">"}},e._l(e.list,(function(a){return t("el-breadcrumb-item",{key:a.path},[e._v(" "+e._s(a.meta.title)+" ")])})),1)},i=[],o={name:"VabBreadcrumb",data(){return{list:this.getBreadcrumb()}},watch:{$route(){this.list=this.getBreadcrumb()}},methods:{getBreadcrumb(){return this.$route.matched.filter(e=>e.name&&e.meta.title)}}},r=o,n=(a("d904"),a("426c")),l=Object(n["a"])(r,s,i,!1,null,"9771253e",null);t["default"]=l.exports},"7e9d":function(e,t,a){"use strict";a("3146")},"803c":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return e.themeBar?t("span",[t("vab-icon",{attrs:{icon:["fas","palette"],title:"主题配置"},on:{click:e.handleOpenThemeBar}}),t("div",{staticClass:"theme-bar-setting"},[t("div",{on:{click:e.handleOpenThemeBar}},[t("vab-icon",{attrs:{icon:["fas","palette"]}}),t("p",[e._v("主题配置")])],1),t("div",{on:{click:e.handleGetCode}},[t("vab-icon",{attrs:{icon:["fas","laptop-code"]}}),t("p",[e._v("拷贝源码")])],1)]),t("el-drawer",{attrs:{visible:e.drawerVisible,"append-to-body":"",direction:"rtl",size:"300px",title:"主题配置"},on:{"update:visible":function(t){e.drawerVisible=t}}},[t("el-scrollbar",{staticStyle:{height:"80vh",overflow:"hidden"}},[t("div",{staticClass:"el-drawer__body"},[t("el-form",{ref:"form",attrs:{model:e.theme,"label-position":"top"}},[t("el-form-item",{attrs:{label:"主题"}},[t("el-radio-group",{model:{value:e.theme.name,callback:function(t){e.$set(e.theme,"name",t)},expression:"theme.name"}},[t("el-radio-button",{attrs:{label:"default"}},[e._v("默认")]),t("el-radio-button",{attrs:{label:"green"}},[e._v("绿荫草场")]),t("el-radio-button",{attrs:{label:"glory"}},[e._v("荣耀典藏")])],1)],1),t("el-form-item",{attrs:{label:"布局"}},[t("el-radio-group",{model:{value:e.theme.layout,callback:function(t){e.$set(e.theme,"layout",t)},expression:"theme.layout"}},[t("el-radio-button",{attrs:{label:"vertical"}},[e._v("纵向布局")]),t("el-radio-button",{attrs:{label:"horizontal"}},[e._v("横向布局")])],1)],1),t("el-form-item",{attrs:{label:"头部"}},[t("el-radio-group",{model:{value:e.theme.header,callback:function(t){e.$set(e.theme,"header",t)},expression:"theme.header"}},[t("el-radio-button",{attrs:{label:"fixed"}},[e._v("固定头部")]),t("el-radio-button",{attrs:{label:"noFixed"}},[e._v("不固定头部")])],1)],1),t("el-form-item",{attrs:{label:"多标签"}},[t("el-radio-group",{model:{value:e.theme.tabsBar,callback:function(t){e.$set(e.theme,"tabsBar",t)},expression:"theme.tabsBar"}},[t("el-radio-button",{attrs:{label:"true"}},[e._v("开启")]),t("el-radio-button",{attrs:{label:"false"}},[e._v("不开启")])],1)],1)],1)],1)]),t("div",{staticClass:"el-drawer__footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleSaveTheme}},[e._v("保存")]),t("el-button",{attrs:{type:""},on:{click:function(t){e.drawerVisible=!1}}},[e._v("取消")])],1)],1)],1):e._e()},i=[],o=a("7696"),r=a("f121"),n={name:"VabThemeBar",data(){return{drawerVisible:!1,theme:{name:"default",layout:"",header:"fixed",tabsBar:""}}},computed:{...Object(o["c"])({layout:"settings/layout",header:"settings/header",tabsBar:"settings/tabsBar",themeBar:"settings/themeBar"})},created(){const e=()=>{this.handleOpenThemeBar()};this.$baseEventBus.$on("theme",e);const t=localStorage.getItem("vue-admin-beautiful-theme");null!==t?(this.theme=JSON.parse(t),this.handleSetTheme()):(this.theme.layout=this.layout,this.theme.header=this.header,this.theme.tabsBar=this.tabsBar),this.$once("hook:beforeDestroy",()=>{this.$baseEventBus.$off("theme",e)})},methods:{...Object(o["b"])({changeLayout:"settings/changeLayout",changeHeader:"settings/changeHeader",changeTabsBar:"settings/changeTabsBar"}),handleIsMobile(){return document.body.getBoundingClientRect().width-1<992},handleOpenThemeBar(){this.drawerVisible=!0},handleSetTheme(){let{name:e,layout:t,header:a,tabsBar:s}=this.theme;localStorage.setItem("vue-admin-beautiful-theme",`{\n            "name":"${e}",\n            "layout":"${t}",\n            "header":"${a}",\n            "tabsBar":"${s}"\n          }`),this.handleIsMobile()||this.changeLayout(t),this.changeHeader(a),this.changeTabsBar(s),document.getElementsByTagName("body")[0].className="vue-admin-beautiful-theme-"+e,this.drawerVisible=!1},handleSaveTheme(){this.handleSetTheme()},handleSetDfaultTheme(){let{name:e}=this.theme;document.getElementsByTagName("body")[0].classList.remove("vue-admin-beautiful-theme-"+e),localStorage.removeItem("vue-admin-beautiful-theme"),this.$refs["form"].resetFields(),Object.assign(this.$data,this.$options.data()),this.changeHeader(r["layout"]),this.theme.name="default",this.theme.layout=this.layout,this.theme.header=this.header,this.theme.tabsBar=this.tabsBar,this.drawerVisible=!1,location.reload()},handleGetCode(){const e="https://github.com/zxwk1998/vue-admin-better/tree/master/src/views";let t=this.$route.path+"/index.vue";"/vab/menu1/menu1-1/menu1-1-1/index.vue"===t&&(t="/vab/nested/menu1/menu1-1/menu1-1-1/index.vue"),"/vab/icon/awesomeIcon/index.vue"===t&&(t="/vab/icon/index.vue"),"/vab/icon/remixIcon/index.vue"===t&&(t="/vab/icon/remixIcon.vue"),"/vab/icon/colorfulIcon/index.vue"===t&&(t="/vab/icon/colorfulIcon.vue"),"/vab/table/comprehensiveTable/index.vue"===t&&(t="/vab/table/index.vue"),"/vab/table/inlineEditTable/index.vue"===t&&(t="/vab/table/inlineEditTable.vue"),window.open(e+t)}}},l=n,c=(a("b9e2"),a("b5e2"),a("426c")),d=Object(c["a"])(l,s,i,!1,null,"4a33cf21",null);t["default"]=d.exports},"84c8":function(e,t,a){"use strict";a.r(t);var s=a("be1a");const i=a("f192");i.keys().forEach(e=>{const t=i(e),a=t.default.name;s["default"].component(a,t.default||t)});const o=a("fae7");o.keys().forEach(e=>{const t=o(e),a=t.default.name;s["default"].component(a,t.default||t)});const r=a("1654");r.keys().forEach(e=>{a("e8cc")("./"+e.slice(2))})},"895a":function(e,t,a){},a0f8:function(e,t,a){},ab5f:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{class:"logo-container-"+e.layout},[t("router-link",{attrs:{to:"/"}},[e.logo?t("vab-remix-icon",{staticClass:"logo",attrs:{"icon-class":e.logo}}):e._e(),t("span",{staticClass:"title",class:{"hidden-xs-only":"horizontal"===e.layout},attrs:{title:e.title}},[e._v(" "+e._s(e.title)+" ")])],1)],1)},i=[],o=a("7696"),r={name:"VabLogo",data(){return{title:this.$baseTitle}},computed:{...Object(o["c"])({logo:"settings/logo",layout:"settings/layout"})}},n=r,l=(a("3bc6"),a("426c")),c=Object(l["a"])(n,s,i,!1,null,"266ab66c",null);t["default"]=c.exports},abf6:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vab-ad"},[e.adList?t("el-carousel",{attrs:{autoplay:!0,interval:3e3,direction:"vertical",height:"30px","indicator-position":"none"}},e._l(e.adList,(function(a,s){return t("el-carousel-item",{key:s},[t("el-tag",{attrs:{type:"warning"}},[e._v("Ad")]),t("a",{attrs:{href:a.url,target:"_blank"}},[e._v(e._s(a.title))])],1)})),1):e._e()],1)},i=[],o=a("ff02"),r={name:"VabAd",data(){return{nodeEnv:"production",adList:[]}},created(){this.fetchData()},methods:{async fetchData(){const{data:e}=await Object(o["getList"])();this.adList=e}}},n=r,l=(a("c6e3"),a("426c")),c=Object(l["a"])(n,s,i,!1,null,"60afcd0e",null);t["default"]=c.exports},b5e2:function(e,t,a){"use strict";a("b618")},b618:function(e,t,a){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#21252b"}},b9e2:function(e,t,a){"use strict";a("f178")},bf9e:function(e,t,a){},c6e3:function(e,t,a){"use strict";a("a0f8")},cbe4:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("el-dropdown",{on:{command:e.handleCommand}},[t("span",{staticClass:"avatar-dropdown"},[t("img",{staticClass:"user-avatar",attrs:{src:e.avatar,alt:""}}),t("div",{staticClass:"user-name"},[e._v(" "+e._s(e.username)+" "),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})])]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"github"}},[e._v("github地址")]),t("el-dropdown-item",{attrs:{command:"gitee",divided:""}},[e._v("码云地址")]),t("el-dropdown-item",{attrs:{command:"pro",divided:""}},[e._v("pro付费版地址")]),t("el-dropdown-item",{attrs:{command:"plus",divided:""}},[e._v("plus付费版地址")]),t("el-dropdown-item",{attrs:{command:"shop",divided:""}},[e._v("shop-vite付费版地址")]),t("el-dropdown-item",{attrs:{command:"logout",divided:""}},[e._v("退出登录")])],1)],1)},i=[],o=(a("cdf1"),a("7696")),r=a("f121"),n={name:"VabAvatar",computed:{...Object(o["c"])({avatar:"user/avatar",username:"user/username"})},methods:{handleCommand(e){switch(e){case"logout":this.logout();break;case"personalCenter":this.personalCenter();break;case"github":window.open("https://github.com/zxwk1998/vue-admin-better");break;case"gitee":window.open("https://gitee.com/chu1204505056/vue-admin-better");break;case"pro":window.open("https://vuejs-core.cn/admin-pro/");break;case"plus":window.open("https://vuejs-core.cn/admin-plus/");case"shop":window.open("https://vuejs-core.cn/shop-vite/")}},personalCenter(){this.$router.push("/personalCenter/personalCenter")},logout(){this.$baseConfirm("您确定要退出"+this.$baseTitle+"吗?",null,async()=>{if(await this.$store.dispatch("user/logout"),r["recordRoute"]){const e=this.$route.fullPath;this.$router.push("/login?redirect="+e)}else this.$router.push("/login")})}}},l=n,c=(a("2180"),a("426c")),d=Object(c["a"])(l,s,i,!1,null,"cb6365c8",null);t["default"]=d.exports},d904:function(e,t,a){"use strict";a("f802")},f178:function(e,t,a){},f802:function(e,t,a){},fd8d:function(e,t,a){"use strict";a("6897")},fe7f:function(e,t,a){}}]);