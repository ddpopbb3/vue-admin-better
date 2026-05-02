/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2026-5-2 06:31:40
 */
(function() {
var __webpack_modules__ = ({
78740: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getList: function() { return getList; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(56521);

function getList() {
  return (0,_utils_request__rspack_import_0["default"])({
    url: 'https://api.vuejs-core.cn/getAd',
    method: 'get'
  });
}

}),
61229: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getPublicKey: function() { return getPublicKey; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(56521);

function getPublicKey() {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/publicKey',
    method: 'post'
  });
}

}),
8960: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getRouterList: function() { return getRouterList; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(56521);

function getRouterList(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/menu/navigate',
    method: 'post',
    data
  });
}

}),
97758: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getUserInfo: function() { return getUserInfo; },
  login: function() { return login; },
  logout: function() { return logout; },
  register: function() { return register; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(56521);
/* import */ var _utils_encrypt__rspack_import_1 = __webpack_require__(10489);
/* import */ var _config__rspack_import_2 = __webpack_require__(89601);
/* import */ var _config__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_2);



async function login(data) {
  if (_config__rspack_import_2.loginRSA) {
    data = await (0,_utils_encrypt__rspack_import_1.encryptedData)(data);
  }
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/login',
    method: 'post',
    data
  });
}
function getUserInfo(accessToken) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/userInfo',
    method: 'post',
    data: {
      [_config__rspack_import_2.tokenName]: accessToken
    }
  });
}
function logout() {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/logout',
    method: 'post'
  });
}
function register() {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/register',
    method: 'post'
  });
}

}),
89601: (function (module, __unused_rspack_exports, __webpack_require__) {
/**
 * @description 3个子配置，通用配置|主题配置|网络配置导出
 */
const setting = __webpack_require__(65673);
const theme = __webpack_require__(83022);
const network = __webpack_require__(68424);
module.exports = Object.assign({}, setting, theme, network);

}),
68424: (function (module) {
/**
 * @description 导出默认网路配置
 **/
const network = {
  // 默认的接口地址 如果是开发环境和生产环境走vab-mock-server，当然你也可以选择自己配置成需要的接口地址
  baseURL:  false ? 0 : '/vab-mock-server',
  //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  //消息框消失时间
  messageDuration: 3000,
  //最长请求时间
  requestTimeout: 15000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
  //登录失效code
  invalidCode: 402,
  //无权限code
  noPermissionCode: 401
};
module.exports = network;

}),
78470: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0 = __webpack_require__(67622);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_1 = __webpack_require__(71119);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__rspack_import_1);
/* import */ var _router__rspack_import_2 = __webpack_require__(72818);
/* import */ var _store__rspack_import_3 = __webpack_require__(38804);
/* import */ var nprogress__rspack_import_4 = __webpack_require__(58744);
/* import */ var nprogress__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(nprogress__rspack_import_4);
/* import */ var nprogress_nprogress_css__rspack_import_5 = __webpack_require__(47172);
/* import */ var _utils_pageTitle__rspack_import_6 = __webpack_require__(30083);
/* import */ var _config__rspack_import_7 = __webpack_require__(89601);
/* import */ var _config__rspack_import_7_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_7);


/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 路由守卫，目前两种模式：all模式与intelligence模式
 */






nprogress__rspack_import_4_default().configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false
});
_router__rspack_import_2["default"].beforeResolve(async (to, from, next) => {
  if (_config__rspack_import_7.progressBar) nprogress__rspack_import_4_default().start();
  let hasToken = _store__rspack_import_3["default"].getters["user/accessToken"];
  if (!_config__rspack_import_7.loginInterception) hasToken = true;
  if (hasToken) {
    if (to.path === '/login') {
      next({
        path: '/'
      });
      if (_config__rspack_import_7.progressBar) nprogress__rspack_import_4_default().done();
    } else {
      const hasPermissions = _store__rspack_import_3["default"].getters["user/permissions"] && _store__rspack_import_3["default"].getters["user/permissions"].length > 0;
      if (hasPermissions) {
        next();
      } else {
        try {
          let permissions;
          if (!_config__rspack_import_7.loginInterception) {
            //settings.js loginInterception为false时，创建虚拟权限
            await _store__rspack_import_3["default"].dispatch('user/setPermissions', ['admin']);
            permissions = ['admin'];
          } else {
            permissions = await _store__rspack_import_3["default"].dispatch('user/getUserInfo');
          }
          let accessRoutes = [];
          if (_config__rspack_import_7.authentication === 'intelligence') {
            accessRoutes = await _store__rspack_import_3["default"].dispatch('routes/setRoutes', permissions);
          } else if (_config__rspack_import_7.authentication === 'all') {
            accessRoutes = await _store__rspack_import_3["default"].dispatch('routes/setAllRoutes');
          }
          accessRoutes.forEach(item => {
            _router__rspack_import_2["default"].addRoute(item);
          });
          next({
            ...to,
            replace: true
          });
        } catch {
          await _store__rspack_import_3["default"].dispatch('user/resetAccessToken');
          if (_config__rspack_import_7.progressBar) nprogress__rspack_import_4_default().done();
        }
      }
    }
  } else {
    if (_config__rspack_import_7.routesWhiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      if (_config__rspack_import_7.recordRoute) {
        next(`/login?redirect=${to.path}`);
      } else {
        next('/login');
      }
      if (_config__rspack_import_7.progressBar) nprogress__rspack_import_4_default().done();
    }
  }
  document.title = (0,_utils_pageTitle__rspack_import_6["default"])(to.meta.title);
});
_router__rspack_import_2["default"].afterEach(() => {
  if (_config__rspack_import_7.progressBar) nprogress__rspack_import_4_default().done();
});

}),
65673: (function (module) {
/**
 * @description 导出默认通用配置
 */
const setting = {
  // 开发以及部署时的URL
  publicPath: '',
  // 生产环境构建文件的目录名
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  // 进行编译的依赖
  transpileDependencies: [],
  //标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: 'Admin Better',
  //简写
  abbreviation: 'vab',
  //开发环境端口号
  devPort: '8090',
  //copyright
  copyright: 'zxwk1998',
  //是否显示页面底部自定义版权信息
  footerCopyright: true,
  //是否显示顶部进度条
  progressBar: true,
  //缓存路由的最大数量
  keepAliveMaxNum: 99,
  // 路由模式，可选值为 history 或 hash
  routerMode: 'hash',
  //不经过token校验的路由
  routesWhiteList: ['/login', '/register', '/404', '/401'],
  //加载时显示文字
  loadingText: '正在加载中...',
  //token名称
  tokenName: 'accessToken',
  //token在localStorage、sessionStorage存储的key的名称
  tokenTableName: 'vue-admin-better-2024',
  //token存储位置localStorage sessionStorage
  storage: 'localStorage',
  //token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  //是否显示logo，不显示时设置false，显示时请填写remixIcon图标名称，暂时只支持设置remixIcon
  logo: 'vuejs-fill',
  //是否显示在页面高亮错误
  errorLog: ['development'],
  //是否开启登录拦截
  loginInterception: true,
  //是否开启登录RSA加密
  loginRSA: true,
  //intelligence和all两种方式，前者后端权限只控制permissions不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
  authentication: 'intelligence',
  //vertical布局时是否只保持一个子菜单的展开
  uniqueOpened: true,
  //vertical布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOopeneds: ['/vab'],
  //需要加loading层的请求，防止重复提交
  debounce: ['doEdit'],
  //需要自动注入并加载的模块
  providePlugin: {},
  //代码生成机生成在view下的文件夹名称
  templateFolder: 'project',
  //是否显示终端donation打印
  donation: true
};
module.exports = setting;

}),
83022: (function (module) {
/**
 * @description 导出默认主题配置
 */
const theme = {
  //是否国定头部 固定fixed 不固定noFixed
  header: 'fixed',
  //横纵布局 horizontal vertical
  layout: 'vertical',
  //是否开启主题配置按钮
  themeBar: true,
  //是否显示多标签页
  tabsBar: true
};
module.exports = theme;

}),
24941: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_6 = __webpack_require__(15091);
/* import */ var _App__rspack_import_0 = __webpack_require__(153);
/* import */ var _store__rspack_import_1 = __webpack_require__(38804);
/* import */ var _router__rspack_import_2 = __webpack_require__(72818);
/* import */ var _plugins__rspack_import_3 = __webpack_require__(99705);
/* import */ var _layouts_export__rspack_import_4 = __webpack_require__(82218);
/* import */ var _utils_printInfo__rspack_import_5 = __webpack_require__(34527);








/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

// 检测环境变量或默认使用mock
const useMock =  true || 0;
if (useMock) {
  // 使用动态import替代require
  Promise.all(/* import() */ [__webpack_require__.e(8447), __webpack_require__.e(1797)]).then(__webpack_require__.bind(__webpack_require__, 74660)).then(({
    mockXHR
  }) => {
    mockXHR();
    console.log('已启用Mock拦截，所有接口请求将被Mock拦截');
    // 打印layouts/index.js中的信息到控制台
    (0,_utils_printInfo__rspack_import_5.printLayoutsInfo)();
    vue__rspack_import_6["default"].config.productionTip = false;
    new vue__rspack_import_6["default"]({
      el: '#vue-admin-better',
      router: _router__rspack_import_2["default"],
      store: _store__rspack_import_1["default"],
      render: h => h(_App__rspack_import_0["default"])
    });
  });
} else {
  // 未启用Mock时直接打印layouts/index.js中的信息到控制台
  (0,_utils_printInfo__rspack_import_5.printLayoutsInfo)();
  vue__rspack_import_6["default"].config.productionTip = false;
  new vue__rspack_import_6["default"]({
    el: '#vue-admin-better',
    router: _router__rspack_import_2["default"],
    store: _store__rspack_import_1["default"],
    render: h => h(_App__rspack_import_0["default"])
  });
}

}),
39349: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_2 = __webpack_require__(15091);
/* import */ var element_ui__rspack_import_0 = __webpack_require__(61093);
/* import */ var element_ui__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(element_ui__rspack_import_0);
/* import */ var element_ui_lib_theme_chalk_index_css__rspack_import_1 = __webpack_require__(19255);



vue__rspack_import_2["default"].use((element_ui__rspack_import_0_default()), {
  size: 'small'
});

}),
99705: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_8 = __webpack_require__(15091);
/* import */ var _element__rspack_import_0 = __webpack_require__(39349);
/* import */ var _support__rspack_import_1 = __webpack_require__(51906);
/* import */ var _styles_vab_scss__rspack_import_2 = __webpack_require__(12541);
/* import */ var _config_permission__rspack_import_3 = __webpack_require__(78470);
/* import */ var _utils_errorLog__rspack_import_4 = __webpack_require__(10434);
/* import */ var _vabIcon__rspack_import_5 = __webpack_require__(80769);
/* import */ var layouts_Permissions__rspack_import_6 = __webpack_require__(99889);
/* import */ var _utils_vab__rspack_import_7 = __webpack_require__(60877);
/* 公共引入,勿随意修改,修改时需经过确认 */









vue__rspack_import_8["default"].use(_utils_vab__rspack_import_7["default"]);
vue__rspack_import_8["default"].use(layouts_Permissions__rspack_import_6["default"]);

}),
51906: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var element_ui__rspack_import_0 = __webpack_require__(61093);
/* import */ var element_ui__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(element_ui__rspack_import_0);

if (!!window.ActiveXObject || 'ActiveXObject' in window) {
  (0,element_ui__rspack_import_0.MessageBox)({
    title: '温馨提示',
    message: '自2015年3月起，微软已宣布弃用IE，且不再对IE提供任何更新维护，请<a target="_blank" style="color:blue" href="https://www.microsoft.com/zh-cn/edge/">点击此处</a>访问微软官网更新浏览器，如果您使用的是双核浏览器,请您切换浏览器内核为极速模式',
    type: 'warning',
    showClose: false,
    showConfirmButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    closeOnHashChange: false,
    dangerouslyUseHTMLString: true
  });
}

}),
80769: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_1 = __webpack_require__(15091);
/* import */ var vab_icon__rspack_import_0 = __webpack_require__(70568);
/* import */ var vab_icon__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(vab_icon__rspack_import_0);


vue__rspack_import_1["default"].component('VabIcon', (vab_icon__rspack_import_0_default()));

}),
72818: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  asyncRoutes: function() { return asyncRoutes; },
  constantRoutes: function() { return constantRoutes; },
  resetRouter: function() { return resetRouter; }
});
/* import */ var vue__rspack_import_3 = __webpack_require__(15091);
/* import */ var vue_router__rspack_import_4 = __webpack_require__(82666);
/* import */ var _layouts__rspack_import_0 = __webpack_require__(38279);
/* import */ var _layouts_EmptyLayout__rspack_import_1 = __webpack_require__(74893);
/* import */ var _config__rspack_import_2 = __webpack_require__(89601);
/* import */ var _config__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_2);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到，vip文档中已提供路由的基础图标与小清新图标的配置方案，请仔细阅读
 */






vue__rspack_import_3["default"].use(vue_router__rspack_import_4["default"]);
const constantRoutes = [{
  path: '/login',
  component: () => __webpack_require__.e(/* import() */ 2755).then(__webpack_require__.bind(__webpack_require__, 11614)),
  hidden: true
}, {
  path: '/register',
  component: () => __webpack_require__.e(/* import() */ 6836).then(__webpack_require__.bind(__webpack_require__, 78031)),
  hidden: true
}, {
  path: '/401',
  name: '401',
  component: () => __webpack_require__.e(/* import() */ 6669).then(__webpack_require__.bind(__webpack_require__, 82860)),
  hidden: true
}, {
  path: '/404',
  name: '404',
  component: () => __webpack_require__.e(/* import() */ 8246).then(__webpack_require__.bind(__webpack_require__, 58341)),
  hidden: true
}];
const asyncRoutes = [{
  path: '/',
  component: _layouts__rspack_import_0["default"],
  redirect: '/index',
  children: [{
    path: 'index',
    name: 'Index',
    component: () => Promise.all(/* import() */ [__webpack_require__.e(3322), __webpack_require__.e(2865), __webpack_require__.e(1728), __webpack_require__.e(4375), __webpack_require__.e(3238), __webpack_require__.e(6589), __webpack_require__.e(4684), __webpack_require__.e(2643), __webpack_require__.e(8226), __webpack_require__.e(6185), __webpack_require__.e(9505), __webpack_require__.e(9898), __webpack_require__.e(9367), __webpack_require__.e(6304), __webpack_require__.e(7933), __webpack_require__.e(5560)]).then(__webpack_require__.bind(__webpack_require__, 87595)),
    meta: {
      title: '首页',
      icon: 'home',
      affix: true
    }
  }]
}, {
  path: '/stock',
  component: _layouts__rspack_import_0["default"],
  redirect: 'noRedirect',
  name: 'Stock',
  meta: {
    title: '雪球模拟',
    icon: 'chart-line',
    permissions: ['admin']
  },
  children: [{
    path: 'xueqiu',
    name: 'Xueqiu',
    component: () => Promise.all(/* import() */ [__webpack_require__.e(3322), __webpack_require__.e(2865), __webpack_require__.e(1728), __webpack_require__.e(4375), __webpack_require__.e(3238), __webpack_require__.e(6589), __webpack_require__.e(4684), __webpack_require__.e(2643), __webpack_require__.e(8226), __webpack_require__.e(6185), __webpack_require__.e(9505), __webpack_require__.e(9898), __webpack_require__.e(9367), __webpack_require__.e(6304), __webpack_require__.e(7933), __webpack_require__.e(3286)]).then(__webpack_require__.bind(__webpack_require__, 59461)),
    meta: {
      title: '雪球模拟',
      icon: 'chart-line',
      noKeepAlive: false
    }
  }]
},
/* {
  path: "/test",
  component: Layout,
  redirect: "noRedirect",
  children: [
    {
      path: "test",
      name: "Test",
      component: () => import("@/views/test/index"),
      meta: {
        title: "test",
        icon: "marker",
        permissions: ["admin"],
      },
    },
  ],
}, */

{
  path: '/vab',
  component: _layouts__rspack_import_0["default"],
  redirect: 'noRedirect',
  name: 'Vab',
  alwaysShow: true,
  meta: {
    title: '组件',
    icon: 'box-open'
  },
  children: [{
    path: 'permissions',
    name: 'Permission',
    component: () => __webpack_require__.e(/* import() */ 4661).then(__webpack_require__.bind(__webpack_require__, 80516)),
    meta: {
      title: '角色权限',
      permissions: ['admin', 'editor']
    }
  }, {
    path: 'icon',
    component: _layouts_EmptyLayout__rspack_import_1["default"],
    redirect: 'noRedirect',
    name: 'Icon',
    meta: {
      title: '图标',
      permissions: ['admin']
    },
    children: [{
      path: 'awesomeIcon',
      name: 'AwesomeIcon',
      component: () => Promise.all(/* import() */ [__webpack_require__.e(3322), __webpack_require__.e(2865), __webpack_require__.e(1728), __webpack_require__.e(4375), __webpack_require__.e(3238), __webpack_require__.e(6589), __webpack_require__.e(4684), __webpack_require__.e(2643), __webpack_require__.e(8226), __webpack_require__.e(6185), __webpack_require__.e(9505), __webpack_require__.e(9898), __webpack_require__.e(9367), __webpack_require__.e(6304), __webpack_require__.e(7933), __webpack_require__.e(7094)]).then(__webpack_require__.bind(__webpack_require__, 2149)),
      meta: {
        title: '常规图标'
      }
    }, {
      path: 'colorfulIcon',
      name: 'ColorfulIcon',
      component: () => Promise.all(/* import() */ [__webpack_require__.e(3322), __webpack_require__.e(2865), __webpack_require__.e(1728), __webpack_require__.e(4375), __webpack_require__.e(3238), __webpack_require__.e(6589), __webpack_require__.e(4684), __webpack_require__.e(2643), __webpack_require__.e(8226), __webpack_require__.e(6185), __webpack_require__.e(9505), __webpack_require__.e(9898), __webpack_require__.e(9367), __webpack_require__.e(6304), __webpack_require__.e(7933), __webpack_require__.e(1332)]).then(__webpack_require__.bind(__webpack_require__, 54783)),
      meta: {
        title: '多彩图标'
      }
    }]
  }, {
    path: 'table',
    component: () => __webpack_require__.e(/* import() */ 7769).then(__webpack_require__.bind(__webpack_require__, 27680)),
    name: 'Table',
    meta: {
      title: '表格',
      permissions: ['admin']
    }
  }, {
    path: 'webSocket',
    name: 'WebSocket',
    component: () => __webpack_require__.e(/* import() */ 3821).then(__webpack_require__.bind(__webpack_require__, 91580)),
    meta: {
      title: 'webSocket',
      permissions: ['admin']
    }
  }, {
    path: 'form',
    name: 'Form',
    component: () => __webpack_require__.e(/* import() */ 9637).then(__webpack_require__.bind(__webpack_require__, 99332)),
    meta: {
      title: '表单',
      permissions: ['admin']
    }
  }, {
    path: 'element',
    name: 'Element',
    component: () => __webpack_require__.e(/* import() */ 5847).then(__webpack_require__.bind(__webpack_require__, 72490)),
    meta: {
      title: '常用组件',
      permissions: ['admin']
    }
  }, {
    path: 'tree',
    name: 'Tree',
    component: () => __webpack_require__.e(/* import() */ 4603).then(__webpack_require__.bind(__webpack_require__, 49782)),
    meta: {
      title: '树',
      permissions: ['admin']
    }
  }, {
    path: 'menu1',
    component: () => __webpack_require__.e(/* import() */ 419).then(__webpack_require__.bind(__webpack_require__, 82174)),
    name: 'Menu1',
    alwaysShow: true,
    meta: {
      title: '嵌套路由 1',
      permissions: ['admin']
    },
    children: [{
      path: 'menu1-1',
      name: 'Menu1-1',
      alwaysShow: true,
      meta: {
        title: '嵌套路由 1-1'
      },
      component: () => __webpack_require__.e(/* import() */ 5225).then(__webpack_require__.bind(__webpack_require__, 8736)),
      children: [{
        path: 'menu1-1-1',
        name: 'Menu1-1-1',
        meta: {
          title: '嵌套路由 1-1-1'
        },
        component: () => __webpack_require__.e(/* import() */ 9030).then(__webpack_require__.bind(__webpack_require__, 27077))
      }]
    }]
  }, {
    path: 'loading',
    name: 'Loading',
    component: () => __webpack_require__.e(/* import() */ 4571).then(__webpack_require__.bind(__webpack_require__, 1702)),
    meta: {
      title: 'loading',
      permissions: ['admin']
    }
  }, {
    path: 'backToTop',
    name: 'BackToTop',
    component: () => __webpack_require__.e(/* import() */ 334).then(__webpack_require__.bind(__webpack_require__, 9917)),
    meta: {
      title: '返回顶部',
      permissions: ['admin']
    }
  }, {
    path: 'lodash',
    name: 'Lodash',
    component: () => __webpack_require__.e(/* import() */ 6290).then(__webpack_require__.bind(__webpack_require__, 34489)),
    meta: {
      title: 'lodash',
      permissions: ['admin']
    }
  }, {
    path: 'upload',
    name: 'Upload',
    component: () => __webpack_require__.e(/* import() */ 1701).then(__webpack_require__.bind(__webpack_require__, 7332)),
    meta: {
      title: '上传',
      permissions: ['admin']
    }
  }, {
    path: 'log',
    name: 'Log',
    component: () => __webpack_require__.e(/* import() */ 4172).then(__webpack_require__.bind(__webpack_require__, 12983)),
    meta: {
      title: '错误日志模拟',
      permissions: ['admin']
    }
  }, {
    path: 'external-link',
    component: _layouts_EmptyLayout__rspack_import_1["default"],
    redirect: 'noRedirect',
    meta: {
      title: '外链'
    },
    children: [{
      path: 'https://github.com/zxwk1998/vue-admin-better/',
      name: 'ExternalLink',
      meta: {
        title: '外链',
        target: '_blank',
        permissions: ['admin', 'editor'],
        badge: 'New'
      }
    }]
  }, {
    path: 'more',
    name: 'More',
    component: () => __webpack_require__.e(/* import() */ 4170).then(__webpack_require__.bind(__webpack_require__, 3905)),
    meta: {
      title: '关于',
      permissions: ['admin']
    }
  }, {
    path: 'chart',
    name: 'Chart',
    component: () => Promise.all(/* import() */ [__webpack_require__.e(3322), __webpack_require__.e(2865), __webpack_require__.e(1728), __webpack_require__.e(4375), __webpack_require__.e(3238), __webpack_require__.e(6589), __webpack_require__.e(4684), __webpack_require__.e(2643), __webpack_require__.e(8226), __webpack_require__.e(6185), __webpack_require__.e(9505), __webpack_require__.e(9898), __webpack_require__.e(9367), __webpack_require__.e(6304), __webpack_require__.e(7933), __webpack_require__.e(2339)]).then(__webpack_require__.bind(__webpack_require__, 45198)),
    meta: {
      title: '图表',
      permissions: ['admin']
    }
  }, {
    path: 'tab',
    name: 'Tab',
    component: () => __webpack_require__.e(/* import() */ 3080).then(__webpack_require__.bind(__webpack_require__, 22875)),
    meta: {
      title: '选项卡',
      permissions: ['admin']
    }
  }, {
    path: 'editor',
    name: 'Editor',
    component: () => Promise.all(/* import() */ [__webpack_require__.e(2640), __webpack_require__.e(612)]).then(__webpack_require__.bind(__webpack_require__, 73343)),
    meta: {
      title: '编辑器',
      permissions: ['admin']
    }
  }, {
    path: 'qrCode',
    name: 'QrCode',
    component: () => Promise.all(/* import() */ [__webpack_require__.e(5582), __webpack_require__.e(8730)]).then(__webpack_require__.bind(__webpack_require__, 77569)),
    meta: {
      title: '二维码',
      permissions: ['admin']
    }
  }]
}, {
  path: '/personnelManagement',
  component: _layouts__rspack_import_0["default"],
  redirect: 'noRedirect',
  name: 'PersonnelManagement',
  meta: {
    title: '配置',
    icon: 'users-cog',
    permissions: ['admin']
  },
  children: [{
    path: 'userManagement',
    name: 'UserManagement',
    component: () => __webpack_require__.e(/* import() */ 6361).then(__webpack_require__.bind(__webpack_require__, 65440)),
    meta: {
      title: '用户管理'
    }
  }, {
    path: 'roleManagement',
    name: 'RoleManagement',
    component: () => __webpack_require__.e(/* import() */ 3865).then(__webpack_require__.bind(__webpack_require__, 77904)),
    meta: {
      title: '角色管理'
    }
  }, {
    path: 'menuManagement',
    name: 'MenuManagement',
    component: () => __webpack_require__.e(/* import() */ 2430).then(__webpack_require__.bind(__webpack_require__, 60717)),
    meta: {
      title: '菜单管理',
      badge: 'New'
    }
  }]
}, {
  path: '/mall',
  component: _layouts__rspack_import_0["default"],
  redirect: 'noRedirect',
  name: 'Mall',
  meta: {
    title: '商城',
    icon: 'shopping-cart',
    permissions: ['admin']
  },
  children: [{
    path: 'pay',
    name: 'Pay',
    component: () => __webpack_require__.e(/* import() */ 8481).then(__webpack_require__.bind(__webpack_require__, 83320)),
    meta: {
      title: '支付',
      noKeepAlive: true
    },
    children: null
  }, {
    path: 'goodsList',
    name: 'GoodsList',
    component: () => __webpack_require__.e(/* import() */ 7865).then(__webpack_require__.bind(__webpack_require__, 82736)),
    meta: {
      title: '商品列表'
    }
  }]
}, {
  path: '/error',
  component: _layouts_EmptyLayout__rspack_import_1["default"],
  redirect: 'noRedirect',
  name: 'Error',
  meta: {
    title: '错误页',
    icon: 'bug'
  },
  children: [{
    path: '401',
    name: 'Error401',
    component: () => __webpack_require__.e(/* import() */ 6669).then(__webpack_require__.bind(__webpack_require__, 82860)),
    meta: {
      title: '401'
    }
  }, {
    path: '404',
    name: 'Error404',
    component: () => __webpack_require__.e(/* import() */ 8246).then(__webpack_require__.bind(__webpack_require__, 58341)),
    meta: {
      title: '404'
    }
  }]
}, {
  path: '/store',
  component: _layouts__rspack_import_0["default"],
  meta: {
    title: '',
    icon: ''
  },
  children: [{
    path: 'https://vuejs-core.cn/store',
    meta: {
      title: '模板市场',
      target: '_blank',
      icon: 'mortar-pestle',
      badge: 'Hot'
    }
  }]
}, {
  path: '/external-job',
  component: _layouts__rspack_import_0["default"],
  meta: {
    title: '',
    icon: ''
  },
  children: [{
    path: 'https://job.vuejs-core.cn/posts',
    meta: {
      title: '找工作',
      target: '_blank',
      icon: 'horse-head',
      badge: 'New'
    }
  }]
}, {
  path: '/donate-menu',
  component: _layouts__rspack_import_0["default"],
  meta: {
    title: '支持我们',
    icon: 'heart'
  },
  children: [{
    path: '/donate',
    component: () => __webpack_require__.e(/* import() */ 1411).then(__webpack_require__.bind(__webpack_require__, 15086)),
    meta: {
      title: '支持我们',
      icon: 'heart',
      badge: 'Donate'
    }
  }]
}, {
  path: '*',
  redirect: '/404',
  hidden: true
}];
const router = new vue_router__rspack_import_4["default"]({
  base: _config__rspack_import_2.publicPath,
  mode: _config__rspack_import_2.routerMode,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
});
function resetRouter() {
  location.reload();
}
/* export default */ __webpack_exports__["default"] = (router);

}),
38804: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0 = __webpack_require__(67622);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_1 = __webpack_require__(71119);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__rspack_import_1);
/* import */ var vue__rspack_import_2 = __webpack_require__(15091);
/* import */ var vuex__rspack_import_3 = __webpack_require__(50651);


/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突，请勿修改。
 */



vue__rspack_import_2["default"].use(vuex__rspack_import_3["default"]);
const files = __webpack_require__(78043);
const modules = {};
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});
Object.keys(modules).forEach(key => {
  modules[key]['namespaced'] = true;
});
const store = new vuex__rspack_import_3["default"].Store({
  modules
});
/* export default */ __webpack_exports__["default"] = (store);

}),
59520: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_array_push_js__rspack_import_0 = __webpack_require__(74495);
/* import */ var core_js_modules_es_array_push_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__rspack_import_0);

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 异常捕获的状态拦截，请勿修改
 */

const state = () => ({
  errorLogs: []
});
const getters = {
  errorLogs: state => state.errorLogs
};
const mutations = {
  addErrorLog(state, errorLog) {
    state.errorLogs.push(errorLog);
  },
  clearErrorLog: state => {
    state.errorLogs.splice(0);
  }
};
const actions = {
  addErrorLog({
    commit
  }, errorLog) {
    commit('addErrorLog', errorLog);
  },
  clearErrorLog({
    commit
  }) {
    commit('clearErrorLog');
  }
};
/* export default */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
64634: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var _router__rspack_import_0 = __webpack_require__(72818);
/* import */ var _api_router__rspack_import_1 = __webpack_require__(8960);
/* import */ var _utils_handleRoutes__rspack_import_2 = __webpack_require__(98694);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 路由拦截状态管理，目前两种模式：all模式与intelligence模式
 */



const state = () => ({
  routes: [],
  partialRoutes: []
});
const getters = {
  routes: state => state.routes,
  partialRoutes: state => state.partialRoutes
};
const mutations = {
  setRoutes(state, routes) {
    state.routes = _router__rspack_import_0.constantRoutes.concat(routes);
  },
  setAllRoutes(state, routes) {
    state.routes = _router__rspack_import_0.constantRoutes.concat(routes);
  }
};
const actions = {
  /**
   * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
   * @description intelligence模式设置路由
   * @param {*} { commit }
   * @param {*} permissions
   * @returns
   */
  async setRoutes({
    commit
  }, permissions) {
    //根据permissions做路由筛选
    let accessedRoutes = (0,_utils_handleRoutes__rspack_import_2.filterAsyncRoutes)(_router__rspack_import_0.asyncRoutes, permissions);
    commit('setRoutes', accessedRoutes);
    return accessedRoutes;
  },
  /**
   * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
   * @description all模式设置路由
   * @param {*} { commit }
   * @returns
   */
  async setAllRoutes({
    commit
  }) {
    try {
      let {
        data
      } = await (0,_api_router__rspack_import_1.getRouterList)();
      if (!data || !Array.isArray(data)) {
        console.error('后端返回的路由数据格式不正确', data);
        data = [];
      }
      const accessedRoutes = (0,_utils_handleRoutes__rspack_import_2.convertRouter)(data);
      commit('setAllRoutes', accessedRoutes);
      return accessedRoutes;
    } catch (error) {
      console.error('获取路由列表失败', error);
      commit('setAllRoutes', []);
      return [];
    }
  }
};
/* export default */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
21001: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var _config__rspack_import_0 = __webpack_require__(89601);
/* import */ var _config__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_0);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 所有全局配置的状态管理，如无必要请勿修改
 */


const {
  tabsBar,
  logo,
  layout,
  header,
  themeBar
} = (_config__rspack_import_0_default());
const theme = JSON.parse(localStorage.getItem('vue-admin-better-theme')) || '';
const state = () => ({
  tabsBar: theme.tabsBar || tabsBar,
  logo,
  collapse: false,
  layout: theme.layout || layout,
  header: theme.header || header,
  device: 'desktop',
  themeBar
});
const getters = {
  collapse: state => state.collapse,
  device: state => state.device,
  header: state => state.header,
  layout: state => state.layout,
  logo: state => state.logo,
  tabsBar: state => state.tabsBar,
  themeBar: state => state.themeBar
};
const mutations = {
  changeLayout: (state, layout) => {
    if (layout) state.layout = layout;
  },
  changeHeader: (state, header) => {
    if (header) state.header = header;
  },
  changeTabsBar: (state, tabsBar) => {
    if (tabsBar) state.tabsBar = tabsBar;
  },
  changeCollapse: state => {
    state.collapse = !state.collapse;
  },
  foldSideBar: state => {
    state.collapse = true;
  },
  openSideBar: state => {
    state.collapse = false;
  },
  toggleDevice: (state, device) => {
    state.device = device;
  }
};
const actions = {
  changeLayout({
    commit
  }, layout) {
    commit('changeLayout', layout);
  },
  changeHeader({
    commit
  }, header) {
    commit('changeHeader', header);
  },
  changeTabsBar({
    commit
  }, tabsBar) {
    commit('changeTabsBar', tabsBar);
  },
  changeCollapse({
    commit
  }) {
    commit('changeCollapse');
  },
  foldSideBar({
    commit
  }) {
    commit('foldSideBar');
  },
  openSideBar({
    commit
  }) {
    commit('openSideBar');
  },
  toggleDevice({
    commit
  }, device) {
    commit('toggleDevice', device);
  }
};
/* export default */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
68318: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 代码生成机状态管理
 */

const state = () => ({
  srcCode: ''
});
const getters = {
  srcTableCode: state => state.srcCode
};
const mutations = {
  setTableCode(state, srcCode) {
    state.srcCode = srcCode;
  }
};
const actions = {
  setTableCode({
    commit
  }, srcCode) {
    commit('setTableCode', srcCode);
  }
};
/* export default */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
48851: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_array_push_js__rspack_import_0 = __webpack_require__(74495);
/* import */ var core_js_modules_es_array_push_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_1 = __webpack_require__(67622);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_1);
/* import */ var core_js_modules_es_iterator_filter_js__rspack_import_2 = __webpack_require__(80746);
/* import */ var core_js_modules_es_iterator_filter_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__rspack_import_2);
/* import */ var core_js_modules_es_iterator_find_js__rspack_import_3 = __webpack_require__(34059);
/* import */ var core_js_modules_es_iterator_find_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_find_js__rspack_import_3);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_4 = __webpack_require__(71119);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__rspack_import_4);





/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description tabsBar多标签页逻辑，前期借鉴了很多开源项目发现都有个共同的特点很繁琐并不符合框架设计的初衷，后来在github用户hipi的启发下完成了重构，请勿修改
 */

const state = () => ({
  visitedRoutes: []
});
const getters = {
  visitedRoutes: state => state.visitedRoutes
};
const mutations = {
  addVisitedRoute(state, route) {
    let target = state.visitedRoutes.find(item => item.path === route.path);
    if (target) {
      if (route.fullPath !== target.fullPath) Object.assign(target, route);
      return;
    }
    state.visitedRoutes.push(Object.assign({}, route));
  },
  delVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === route.path) state.visitedRoutes.splice(index, 1);
    });
  },
  delOthersVisitedRoute(state, route) {
    state.visitedRoutes = state.visitedRoutes.filter(item => item.meta.affix || item.path === route.path);
  },
  delLeftVisitedRoute(state, route) {
    let index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter(item => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item);
      return item.meta.affix || index <= state.visitedRoutes.indexOf(item);
    });
  },
  delRightVisitedRoute(state, route) {
    let index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter(item => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item);
      return item.meta.affix || index >= state.visitedRoutes.indexOf(item);
    });
  },
  delAllVisitedRoutes(state) {
    state.visitedRoutes = state.visitedRoutes.filter(item => item.meta.affix);
  },
  updateVisitedRoute(state, route) {
    state.visitedRoutes.forEach(item => {
      if (item.path === route.path) item = Object.assign(item, route);
    });
  }
};
const actions = {
  addVisitedRoute({
    commit
  }, route) {
    commit('addVisitedRoute', route);
  },
  async delRoute({
    dispatch,
    state
  }, route) {
    await dispatch('delVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes]
    };
  },
  delVisitedRoute({
    commit,
    state
  }, route) {
    commit('delVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  async delOthersRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delOthersVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes]
    };
  },
  async delLeftRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delLeftVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes]
    };
  },
  async delRightRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delRightVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes]
    };
  },
  delOthersVisitedRoute({
    commit,
    state
  }, route) {
    commit('delOthersVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  delLeftVisitedRoute({
    commit,
    state
  }, route) {
    commit('delLeftVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  delRightVisitedRoute({
    commit,
    state
  }, route) {
    commit('delRightVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  async delAllRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delAllVisitedRoutes', route);
    return {
      visitedRoutes: [...state.visitedRoutes]
    };
  },
  delAllVisitedRoutes({
    commit,
    state
  }) {
    commit('delAllVisitedRoutes');
    return [...state.visitedRoutes];
  },
  updateVisitedRoute({
    commit
  }, route) {
    commit('updateVisitedRoute', route);
  }
};
/* export default */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
51367: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_4 = __webpack_require__(15091);
/* import */ var _api_user__rspack_import_0 = __webpack_require__(97758);
/* import */ var _utils_accessToken__rspack_import_1 = __webpack_require__(89403);
/* import */ var _router__rspack_import_2 = __webpack_require__(72818);
/* import */ var _config__rspack_import_3 = __webpack_require__(89601);
/* import */ var _config__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_3);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 登录、获取用户信息、退出登录、清除accessToken逻辑，不建议修改
 */






const state = () => ({
  accessToken: (0,_utils_accessToken__rspack_import_1.getAccessToken)(),
  username: '',
  avatar: '',
  permissions: []
});
const getters = {
  accessToken: state => state.accessToken,
  username: state => state.username,
  avatar: state => state.avatar,
  permissions: state => state.permissions
};
const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
    (0,_utils_accessToken__rspack_import_1.setAccessToken)(accessToken);
  },
  setUsername(state, username) {
    state.username = username;
  },
  setAvatar(state, avatar) {
    state.avatar = avatar;
  },
  setPermissions(state, permissions) {
    state.permissions = permissions;
  }
};
const actions = {
  setPermissions({
    commit
  }, permissions) {
    commit('setPermissions', permissions);
  },
  async login({
    commit
  }, userInfo) {
    const {
      data
    } = await (0,_api_user__rspack_import_0.login)(userInfo);
    const accessToken = data[_config__rspack_import_3.tokenName];
    if (accessToken) {
      commit('setAccessToken', accessToken);
      const hour = new Date().getHours();
      const thisTime = hour < 8 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 18 ? '下午好' : '晚上好';
      vue__rspack_import_4["default"].prototype.$baseNotify(`欢迎登录${_config__rspack_import_3.title}`, `${thisTime}！`);
    } else {
      vue__rspack_import_4["default"].prototype.$baseMessage(`登录接口异常，未正确返回${_config__rspack_import_3.tokenName}...`, 'error');
    }
  },
  async getUserInfo({
    commit,
    state
  }) {
    const {
      data
    } = await (0,_api_user__rspack_import_0.getUserInfo)(state.accessToken);
    if (!data) {
      vue__rspack_import_4["default"].prototype.$baseMessage('验证失败，请重新登录...', 'error');
      return false;
    }
    let {
      permissions,
      username,
      avatar
    } = data;
    if (permissions && username && Array.isArray(permissions)) {
      commit('setPermissions', permissions);
      commit('setUsername', username);
      commit('setAvatar', avatar);
      return permissions;
    } else {
      vue__rspack_import_4["default"].prototype.$baseMessage('用户信息接口异常', 'error');
      return false;
    }
  },
  async logout({
    dispatch
  }) {
    await (0,_api_user__rspack_import_0.logout)(state.accessToken);
    await dispatch('resetAccessToken');
    await (0,_router__rspack_import_2.resetRouter)();
  },
  resetAccessToken({
    commit
  }) {
    commit('setPermissions', []);
    commit('setAccessToken', '');
    (0,_utils_accessToken__rspack_import_1.removeAccessToken)();
  }
};
/* export default */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
89403: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getAccessToken: function() { return getAccessToken; },
  removeAccessToken: function() { return removeAccessToken; },
  setAccessToken: function() { return setAccessToken; }
});
/* import */ var _config__rspack_import_0 = __webpack_require__(89601);
/* import */ var _config__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_0);


/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 获取accessToken
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
function getAccessToken() {
  if (_config__rspack_import_0.storage) {
    if ('localStorage' === _config__rspack_import_0.storage) {
      return localStorage.getItem(_config__rspack_import_0.tokenTableName);
    } else if ('sessionStorage' === _config__rspack_import_0.storage) {
      return sessionStorage.getItem(_config__rspack_import_0.tokenTableName);
    } else {
      return localStorage.getItem(_config__rspack_import_0.tokenTableName);
    }
  } else {
    return localStorage.getItem(_config__rspack_import_0.tokenTableName);
  }
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 存储accessToken
 * @param accessToken
 * @returns {void|*}
 */
function setAccessToken(accessToken) {
  if (_config__rspack_import_0.storage) {
    if ('localStorage' === _config__rspack_import_0.storage) {
      return localStorage.setItem(_config__rspack_import_0.tokenTableName, accessToken);
    } else if ('sessionStorage' === _config__rspack_import_0.storage) {
      return sessionStorage.setItem(_config__rspack_import_0.tokenTableName, accessToken);
    } else {
      return localStorage.setItem(_config__rspack_import_0.tokenTableName, accessToken);
    }
  } else {
    return localStorage.setItem(_config__rspack_import_0.tokenTableName, accessToken);
  }
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 移除accessToken
 * @returns {void|Promise<void>}
 */
function removeAccessToken() {
  if (_config__rspack_import_0.storage) {
    if ('localStorage' === _config__rspack_import_0.storage) {
      return localStorage.removeItem(_config__rspack_import_0.tokenTableName);
    } else if ('sessionStorage' === _config__rspack_import_0.storage) {
      return sessionStorage.clear();
    } else {
      return localStorage.removeItem(_config__rspack_import_0.tokenTableName);
    }
  } else {
    return localStorage.removeItem(_config__rspack_import_0.tokenTableName);
  }
}

}),
10489: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  decryptedData: function() { return decryptedData; },
  encryptedData: function() { return encryptedData; }
});
/* import */ var jsencrypt__rspack_import_1 = __webpack_require__(71744);
/* import */ var _api_publicKey__rspack_import_0 = __webpack_require__(61229);


const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMFPa+v52FkSUXvcUnrGI/XzW3EpZRI0s9BCWJ3oNQmEYA5luWW5p8h0uadTIoTyYweFPdH4hveyxlwmS7oefvbIdiP+o+QIYW/R4Wjsb4Yl8MhR4PJqUE3RCy6IT9fM8ckG4kN9ECs6Ja8fQFc6/mSl5dJczzJO3k1rWMBhKJD/AgMBAAECgYEAucMakH9dWeryhrYoRHcXo4giPVJsH9ypVt4KzmOQY/7jV7KFQK3x//27UoHfUCak51sxFw9ek7UmTPM4HjikA9LkYeE7S381b4QRvFuf3L6IbMP3ywJnJ8pPr2l5SqQ00W+oKv+w/VmEsyUHr+k4Z+4ik+FheTkVWp566WbqFsECQQDjYaMcaKw3j2Zecl8T6eUe7fdaRMIzp/gcpPMfT/9rDzIQk+7ORvm1NI9AUmFv/FAlfpuAMrdL2n7p9uznWb7RAkEA2aP934kbXg5bdV0R313MrL+7WTK/qdcYxATUbMsMuWWQBoS5irrt80WCZbG48hpocJavLNjbtrjmUX3CuJBmzwJAOJg8uP10n/+ZQzjEYXh+BszEHDuw+pp8LuT/fnOy5zrJA0dO0RjpXijO3vuiNPVgHXT9z1LQPJkNrb5ACPVVgQJBALPeb4uV0bNrJDUb5RB4ghZnIxv18CcaqNIft7vuGCcFBAIPIRTBprR+RuVq+xHDt3sNXdsvom4h49+Hky1b0ksCQBBwUtVaqH6ztCtwUF1j2c/Zcrt5P/uN7IHAd44K0gIJc1+Csr3qPG+G2yoqRM8KVqLI8Z2ZYn9c+AvEE+L9OQY=';

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description RSA加密
 * @param data
 * @returns {Promise<{param: PromiseLike<ArrayBuffer>}|*>}
 */
async function encryptedData(data) {
  let publicKey = '';
  const res = await (0,_api_publicKey__rspack_import_0.getPublicKey)();
  publicKey = res.data.publicKey;
  if (res.data.mockServer) {
    publicKey = '';
  }
  if (publicKey == '') {
    return data;
  }
  const encrypt = new jsencrypt__rspack_import_1["default"]();
  encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----${publicKey}-----END PUBLIC KEY-----`);
  data = encrypt.encrypt(JSON.stringify(data));
  return {
    param: data
  };
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description RSA解密
 * @param data
 * @returns {PromiseLike<ArrayBuffer>}
 */
function decryptedData(data) {
  const decrypt = new jsencrypt__rspack_import_1["default"]();
  decrypt.setPrivateKey(`-----BEGIN RSA PRIVATE KEY-----${privateKey}-----END RSA PRIVATE KEY-----`);
  data = decrypt.decrypt(JSON.stringify(data));
  return data;
}

}),
10434: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_array_includes_js__rspack_import_0 = __webpack_require__(29690);
/* import */ var core_js_modules_es_array_includes_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__rspack_import_0);
/* import */ var vue__rspack_import_4 = __webpack_require__(15091);
/* import */ var _store__rspack_import_1 = __webpack_require__(38804);
/* import */ var _utils_validate__rspack_import_3 = __webpack_require__(75108);
/* import */ var _config__rspack_import_2 = __webpack_require__(89601);
/* import */ var _config__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_2);





const needErrorLog = _config__rspack_import_2.errorLog;
const checkNeed = () => {
  const env = "production";
  if ((0,_utils_validate__rspack_import_3.isString)(needErrorLog)) {
    return env === needErrorLog;
  }
  if ((0,_utils_validate__rspack_import_3.isArray)(needErrorLog)) {
    return needErrorLog.includes(env);
  }
  return false;
};

// 检查是否是Chrome扩展相关错误
const isChromeExtensionError = err => {
  if (!err) return false;

  // 错误消息是字符串
  if (typeof err.message === 'string') {
    return err.message.includes('runtime.lastError') || err.message.includes('message port closed') || err.message.includes('The message port closed');
  }

  // 错误本身是字符串
  if (typeof err === 'string') {
    return err.includes('runtime.lastError') || err.includes('message port closed') || err.includes('The message port closed');
  }
  return false;
};
if (checkNeed()) {
  vue__rspack_import_4["default"].config.errorHandler = (err, vm, info) => {
    // 过滤Chrome扩展相关错误
    if (isChromeExtensionError(err)) {
      return;
    }
    console.error('vue-admin-better错误拦截:', err, vm, info);
    const url = window.location.href;
    vue__rspack_import_4["default"].nextTick(() => {
      _store__rspack_import_1["default"].dispatch('errorLog/addErrorLog', {
        err,
        vm,
        info,
        url
      });
    });
  };
}

}),
98694: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  convertRouter: function() { return convertRouter; },
  filterAsyncRoutes: function() { return filterAsyncRoutes; }
});
/* import */ var core_js_modules_es_array_includes_js__rspack_import_0 = __webpack_require__(29690);
/* import */ var core_js_modules_es_array_includes_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__rspack_import_0);
/* import */ var core_js_modules_es_array_push_js__rspack_import_1 = __webpack_require__(74495);
/* import */ var core_js_modules_es_array_push_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__rspack_import_1);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_2 = __webpack_require__(67622);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_2);
/* import */ var core_js_modules_es_iterator_filter_js__rspack_import_3 = __webpack_require__(80746);
/* import */ var core_js_modules_es_iterator_filter_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__rspack_import_3);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_4 = __webpack_require__(71119);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__rspack_import_4);
/* import */ var core_js_modules_es_iterator_map_js__rspack_import_5 = __webpack_require__(38660);
/* import */ var core_js_modules_es_iterator_map_js__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__rspack_import_5);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_6 = __webpack_require__(85528);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__rspack_import_6);







/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description all模式渲染后端返回路由
 * @param constantRoutes
 * @returns {*}
 */
function convertRouter(asyncRoutes) {
  // 处理空值情况
  if (!asyncRoutes || !Array.isArray(asyncRoutes)) {
    console.warn('后端返回的路由格式不正确或为空');
    return [];
  }
  return asyncRoutes.map(route => {
    if (!route) return null;
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 38279));
      } else if (route.component === 'EmptyLayout') {
        route.component = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 74893));
      } else {
        try {
          const index = route.component.indexOf('views');
          const path = index > 0 ? route.component.slice(index) : `views/${route.component}`;
          route.component = () => __webpack_require__(15192)(`./${path}`).catch(err => {
            console.error(`路由组件加载失败: @/${path}`, err);
            return __webpack_require__.e(/* import() */ 8246).then(__webpack_require__.bind(__webpack_require__, 58341));
          });
        } catch (err) {
          console.error(`路由组件解析失败: ${route.component}`, err);
          route.component = () => __webpack_require__.e(/* import() */ 8246).then(__webpack_require__.bind(__webpack_require__, 58341));
        }
      }
    }
    if (route.children) {
      if (Array.isArray(route.children) && route.children.length) {
        route.children = convertRouter(route.children);
        // 过滤掉空路由
        route.children = route.children.filter(child => child !== null);
      }
      if (!route.children || route.children.length === 0) delete route.children;
    }
    return route;
  }).filter(route => route !== null); // 过滤掉无效路由
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 判断当前路由是否包含权限
 * @param permissions
 * @param route
 * @returns {boolean|*}
 */
function hasPermission(permissions, route) {
  // 确保permissions是数组
  if (!permissions || !Array.isArray(permissions)) {
    return false;
  }
  if (route.meta && route.meta.permissions) {
    return permissions.some(role => route.meta.permissions.includes(role));
  } else {
    return true;
  }
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description intelligence模式根据permissions数组拦截路由
 * @param routes
 * @param permissions
 * @returns {[]}
 */
function filterAsyncRoutes(routes, permissions) {
  // 处理无效参数
  if (!routes || !Array.isArray(routes)) {
    return [];
  }
  if (!permissions || !Array.isArray(permissions)) {
    return [];
  }
  const finallyRoutes = [];
  routes.forEach(route => {
    if (!route) return;
    const item = {
      ...route
    };
    if (hasPermission(permissions, item)) {
      if (item.children && Array.isArray(item.children)) {
        item.children = filterAsyncRoutes(item.children, permissions);
      }
      finallyRoutes.push(item);
    }
  });
  return finallyRoutes;
}

}),
30083: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return getPageTitle; }
});
/* import */ var _config__rspack_import_0 = __webpack_require__(89601);
/* import */ var _config__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_0);


/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
function getPageTitle(pageTitle) {
  if (pageTitle) return `${pageTitle}-${_config__rspack_import_0.title}`;
  return `${_config__rspack_import_0.title}`;
}

}),
34527: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printLayoutsInfo: function() { return printLayoutsInfo; }
});
/* import */ var layouts__rspack_import_0 = __webpack_require__(36369);
/* import */ var layouts__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(layouts__rspack_import_0);
/**
 * @description 只在控制台打印layouts/index.js中的内容
 */

function printLayoutsInfo() {
  // 只在控制台打印
  (0,layouts__rspack_import_0.donationConsole)();
}

}),
56521: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_array_includes_js__rspack_import_0 = __webpack_require__(29690);
/* import */ var core_js_modules_es_array_includes_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__rspack_import_0);
/* import */ var core_js_modules_es_array_push_js__rspack_import_1 = __webpack_require__(74495);
/* import */ var core_js_modules_es_array_push_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__rspack_import_1);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_2 = __webpack_require__(67622);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_2);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_3 = __webpack_require__(85528);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__rspack_import_3);
/* import */ var vue__rspack_import_7 = __webpack_require__(15091);
/* import */ var axios__rspack_import_8 = __webpack_require__(19730);
/* import */ var _config__rspack_import_4 = __webpack_require__(89601);
/* import */ var _config__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_4);
/* import */ var _store__rspack_import_5 = __webpack_require__(38804);
/* import */ var qs__rspack_import_9 = __webpack_require__(55504);
/* import */ var qs__rspack_import_9_default = /*#__PURE__*/__webpack_require__.n(qs__rspack_import_9);
/* import */ var _router__rspack_import_6 = __webpack_require__(72818);
/* import */ var _utils_validate__rspack_import_10 = __webpack_require__(75108);











let loadingInstance;

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 处理code异常
 * @param {*} code
 * @param {*} msg
 */
const handleCode = (code, msg) => {
  switch (code) {
    case _config__rspack_import_4.invalidCode:
      vue__rspack_import_7["default"].prototype.$baseMessage(msg || `后端接口${code}异常`, 'error');
      _store__rspack_import_5["default"].dispatch('user/resetAccessToken').catch(() => {});
      if (_config__rspack_import_4.loginInterception) {
        location.reload();
      }
      break;
    case _config__rspack_import_4.noPermissionCode:
      _router__rspack_import_6["default"].push({
        path: '/401'
      }).catch(() => {});
      break;
    default:
      vue__rspack_import_7["default"].prototype.$baseMessage(msg || `后端接口${code}异常`, 'error');
      break;
  }
};

// 请求重试配置
const retryConfig = {
  retry: 3,
  // 重试次数
  retryDelay: 1000 // 重试间隔时间
};

// 创建axios实例
const instance = axios__rspack_import_8["default"].create({
  baseURL: _config__rspack_import_4.baseURL,
  timeout: _config__rspack_import_4.requestTimeout,
  headers: {
    'Content-Type': _config__rspack_import_4.contentType
  }
});

// 请求重试方法
instance.defaults.retry = retryConfig.retry;
instance.defaults.retryDelay = retryConfig.retryDelay;

// 请求拦截器
instance.interceptors.request.use(config => {
  if (_store__rspack_import_5["default"].getters["user/accessToken"]) {
    config.headers[_config__rspack_import_4.tokenName] = _store__rspack_import_5["default"].getters["user/accessToken"];
  }
  //这里会过滤所有为空、0、false的key，如果不需要请自行注释
  if (config.data) config.data = vue__rspack_import_7["default"].prototype.$baseLodash.pickBy(config.data, vue__rspack_import_7["default"].prototype.$baseLodash.identity);
  if (config.data && config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') config.data = qs__rspack_import_9_default().stringify(config.data);
  if (_config__rspack_import_4.debounce.some(item => config.url.includes(item))) loadingInstance = vue__rspack_import_7["default"].prototype.$baseLoading();
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
  if (loadingInstance) loadingInstance.close();
  const {
    data,
    config
  } = response;

  // 判断data是否为undefined或null
  if (data === undefined || data === null) {
    vue__rspack_import_7["default"].prototype.$baseMessage('后端接口返回数据为空', 'error');
    return Promise.reject('后端接口返回数据为空');
  }

  // 安全地解构code和msg，避免undefined异常
  const code = data.code !== undefined ? data.code : null;
  const msg = data.msg !== undefined ? data.msg : '未知错误';

  // 操作正常Code数组
  const codeVerificationArray = (0,_utils_validate__rspack_import_10.isArray)(_config__rspack_import_4.successCode) ? [..._config__rspack_import_4.successCode] : [...[_config__rspack_import_4.successCode]];

  // 是否操作正常
  if (code !== null && codeVerificationArray.includes(code)) {
    return data;
  } else {
    handleCode(code, msg);
    return Promise.reject(`vue-admin-better请求异常拦截:${JSON.stringify({
      url: config.url,
      code,
      msg
    })}` || 'Error');
  }
}, error => {
  if (loadingInstance) loadingInstance.close();

  // 处理请求重试
  const {
    config
  } = error;
  if (config && config.retry) {
    // 设置当前重试次数
    config.__retryCount = config.__retryCount || 0;

    // 检查是否可以重试
    if (config.__retryCount < config.retry) {
      // 增加重试次数
      config.__retryCount += 1;

      // 创建新的Promise进行重试
      const backoff = new Promise(resolve => {
        setTimeout(() => {
          console.log(`重试请求: ${config.url}, 尝试次数: ${config.__retryCount}`);
          resolve();
        }, config.retryDelay || 1000);
      });

      // 重新发起请求
      return backoff.then(() => instance(config));
    }
  }

  // 处理undefined或无法解析的错误情况
  if (!error) {
    vue__rspack_import_7["default"].prototype.$baseMessage('发生未知错误', 'error');
    return Promise.reject('发生未知错误');
  }
  const {
    response,
    message
  } = error;
  if (response && response.data) {
    const {
      status,
      data
    } = response;
    handleCode(status, data.msg || message || '未知错误');
    return Promise.reject(error);
  } else {
    let errorMsg = '后端接口未知异常';
    if (message) {
      if (message === 'Network Error') {
        errorMsg = '后端接口连接异常';
      } else if (message.includes('timeout')) {
        errorMsg = '后端接口请求超时';
      } else if (message.includes('Request failed with status code')) {
        const code = message.substr(message.length - 3);
        errorMsg = `后端接口${code}异常`;
      }
    }
    vue__rspack_import_7["default"].prototype.$baseMessage(errorMsg, 'error');
    return Promise.reject(error);
  }
});
/* export default */ __webpack_exports__["default"] = (instance);

}),
60877: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var _config__rspack_import_0 = __webpack_require__(89601);
/* import */ var _config__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_0);
/* import */ var lodash__rspack_import_1 = __webpack_require__(46746);
/* import */ var lodash__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(lodash__rspack_import_1);
/* import */ var element_ui__rspack_import_2 = __webpack_require__(61093);
/* import */ var element_ui__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(element_ui__rspack_import_2);
/* import */ var _store__rspack_import_3 = __webpack_require__(38804);
/* import */ var _utils_accessToken__rspack_import_4 = __webpack_require__(89403);





const accessToken = _store__rspack_import_3["default"].getters["user/accessToken"];
const layout = _store__rspack_import_3["default"].getters["settings/layout"];
const install = Vue => {
  /* 全局accessToken */
  Vue.prototype.$baseAccessToken = () => {
    return accessToken || (0,_utils_accessToken__rspack_import_4.getAccessToken)();
  };
  /* 全局标题 */
  Vue.prototype.$baseTitle = (() => {
    return _config__rspack_import_0.title;
  })();
  /* 全局加载层 */
  Vue.prototype.$baseLoading = (index, text) => {
    let loading;
    if (!index) {
      loading = element_ui__rspack_import_2.Loading.service({
        lock: true,
        text: text || _config__rspack_import_0.loadingText,
        background: 'hsla(0,0%,100%,.8)'
      });
    } else {
      loading = element_ui__rspack_import_2.Loading.service({
        lock: true,
        text: text || _config__rspack_import_0.loadingText,
        spinner: `vab-loading-type${index}`,
        background: 'hsla(0,0%,100%,.8)'
      });
    }
    return loading;
  };
  /* 全局多彩加载层 */
  Vue.prototype.$baseColorfullLoading = (index, text) => {
    let loading;
    if (!index) {
      loading = element_ui__rspack_import_2.Loading.service({
        lock: true,
        text: text || _config__rspack_import_0.loadingText,
        spinner: 'dots-loader',
        background: 'hsla(0,0%,100%,.8)'
      });
    } else {
      switch (index) {
        case 1:
          index = 'dots';
          break;
        case 2:
          index = 'gauge';
          break;
        case 3:
          index = 'inner-circles';
          break;
        case 4:
          index = 'plus';
          break;
      }
      loading = element_ui__rspack_import_2.Loading.service({
        lock: true,
        text: text || _config__rspack_import_0.loadingText,
        spinner: `${index}-loader`,
        background: 'hsla(0,0%,100%,.8)'
      });
    }
    return loading;
  };
  /* 全局Message */
  Vue.prototype.$baseMessage = (message, type) => {
    (0,element_ui__rspack_import_2.Message)({
      offset: 60,
      showClose: true,
      message: message,
      type: type,
      dangerouslyUseHTMLString: true,
      duration: _config__rspack_import_0.messageDuration
    });
  };

  /* 全局Alert */
  Vue.prototype.$baseAlert = (content, title, callback) => {
    element_ui__rspack_import_2.MessageBox.alert(content, title || '温馨提示', {
      confirmButtonText: '确定',
      dangerouslyUseHTMLString: true,
      callback: () => {
        if (callback) {
          callback();
        }
      }
    });
  };

  /* 全局Confirm */
  Vue.prototype.$baseConfirm = (content, title, callback1, callback2) => {
    element_ui__rspack_import_2.MessageBox.confirm(content, title || '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      closeOnClickModal: false,
      type: 'warning'
    }).then(() => {
      if (callback1) {
        callback1();
      }
    }).catch(() => {
      if (callback2) {
        callback2();
      }
    });
  };

  /* 全局Notification */
  Vue.prototype.$baseNotify = (message, title, type, position) => {
    (0,element_ui__rspack_import_2.Notification)({
      title: title,
      message: message,
      position: position || 'top-right',
      type: type || 'success',
      duration: _config__rspack_import_0.messageDuration
    });
  };

  /* 全局TableHeight */
  Vue.prototype.$baseTableHeight = formType => {
    let height = window.innerHeight;
    let paddingHeight = 400;
    const formHeight = 50;
    if (layout === 'vertical') {
      paddingHeight = 365;
    }
    if ('number' == typeof formType) {
      height = height - paddingHeight - formHeight * formType;
    } else {
      height = height - paddingHeight;
    }
    return height;
  };

  /* 全局lodash */
  Vue.prototype.$baseLodash = lodash__rspack_import_1;
  /* 全局事件总线 */
  Vue.prototype.$baseEventBus = new Vue();
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* export default */ __webpack_exports__["default"] = (install);

}),
75108: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isArray: function() { return isArray; },
  isExternal: function() { return isExternal; },
  isPassword: function() { return isPassword; },
  isPhone: function() { return isPhone; },
  isString: function() { return isString; }
});
/**
 * @author zxwk1998  （不想保留author可删除）
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 校验密码是否小于6位
 * @param str
 * @returns {boolean}
 */
function isPassword(str) {
  return str.length >= 6;
}

/**
 * @author zxwk1998  （不想保留author可删除）
 * @description 判断是否是字符串
 * @param str
 * @returns {boolean}
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

/**
 * @author zxwk1998  （不想保留author可删除）
 * @description 判断是否是数组
 * @param arg
 * @returns {arg is any[]|boolean}
 */
function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return Array.isArray(arg);
}

/**
 * @author zxwk1998  （不想保留author可删除）
 * @description 判断是否是手机号
 * @param str
 * @returns {boolean}
 */
function isPhone(str) {
  const reg = /^1\d{10}$/;
  return reg.test(str);
}

}),
153: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.33_css-loader@7.1.4_@rspack+core@2.0.1_webpack@_a6ca0aaea3c7eb6721fbe2eadddccd78/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.33_css-loader@7.1.4_@rspack+core@2.0.1_webpack@_a6ca0aaea3c7eb6721fbe2eadddccd78/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=0607e7a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"vue-admin-better"}},[_c('router-view')],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.1.1_@babel+core@7.29.0_@rspack+core@2.0.1_webpack@5.106.2/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.33_css-loader@7.1.4_@rspack+core@2.0.1_webpack@_a6ca0aaea3c7eb6721fbe2eadddccd78/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* export default */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  mounted() {}
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* export default */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.33_css-loader@7.1.4_@rspack+core@2.0.1_webpack@_a6ca0aaea3c7eb6721fbe2eadddccd78/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(30739);
;// CONCATENATED MODULE: ./src/App.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* export default */ var App = (component.exports);

}),
5268: (function (module, __unused_rspack_exports, __webpack_require__) {
var map = {
  "./VabAd/index.vue": "37863",
  "./VabAppMain/index.vue": "92120",
  "./VabAvatar/index.vue": "99032",
  "./VabBreadcrumb/index.vue": "89719",
  "./VabColorfullIcon/index.vue": "77557",
  "./VabErrorLog/index.vue": "44356",
  "./VabFullScreen/index.vue": "29358",
  "./VabGithubCorner/index.vue": "22282",
  "./VabLogo/index.vue": "68995",
  "./VabNav/index.vue": "68099",
  "./VabQueryForm/VabQueryFormBottomPanel.vue": "4212",
  "./VabQueryForm/VabQueryFormLeftPanel.vue": "49081",
  "./VabQueryForm/VabQueryFormRightPanel.vue": "14203",
  "./VabQueryForm/VabQueryFormTopPanel.vue": "4938",
  "./VabQueryForm/index.vue": "26174",
  "./VabSide/components/VabMenuItem.vue": "10536",
  "./VabSide/components/VabSideItem.vue": "98265",
  "./VabSide/components/VabSubmenu.vue": "81067",
  "./VabSide/index.vue": "29595",
  "./VabTabs/index.vue": "42445",
  "./VabTheme/index.vue": "43461",
  "./VabTop/index.vue": "21482"
};


function __rspack_context(req) {
  var id = __rspack_context_resolve(req);
  return __webpack_require__(id);
}
function __rspack_context_resolve(req) {
  if(!__webpack_require__.o(map, req)) {
    var e = new Error("Cannot find module '" + req + "'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
  }
  return map[req];
}
__rspack_context.keys = function() { return Object.keys(map); };
__rspack_context.resolve = __rspack_context_resolve;
module.exports = __rspack_context;
__rspack_context.id = 5268;


}),
78043: (function (module, __unused_rspack_exports, __webpack_require__) {
var map = {
  "./errorLog.js": "59520",
  "./routes.js": "64634",
  "./settings.js": "21001",
  "./table.js": "68318",
  "./tabsBar.js": "48851",
  "./user.js": "51367"
};


function __rspack_context(req) {
  var id = __rspack_context_resolve(req);
  return __webpack_require__(id);
}
function __rspack_context_resolve(req) {
  if(!__webpack_require__.o(map, req)) {
    var e = new Error("Cannot find module '" + req + "'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
  }
  return map[req];
}
__rspack_context.keys = function() { return Object.keys(map); };
__rspack_context.resolve = __rspack_context_resolve;
module.exports = __rspack_context;
__rspack_context.id = 78043;


}),
25605: (function (module, __unused_rspack_exports, __webpack_require__) {
var map = {
  "./default.scss": "84356"
};


function __rspack_context(req) {
  var id = __rspack_context_resolve(req);
  return __webpack_require__(id);
}
function __rspack_context_resolve(req) {
  if(!__webpack_require__.o(map, req)) {
    var e = new Error("Cannot find module '" + req + "'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
  }
  return map[req];
}
__rspack_context.keys = function() { return Object.keys(map); };
__rspack_context.resolve = __rspack_context_resolve;
module.exports = __rspack_context;
__rspack_context.id = 25605;


}),
15192: (function (module, __unused_rspack_exports, __webpack_require__) {
var map = {
  "./layouts/components/VabAd": [
    "37863",
    9,
    []
  ],
  "./layouts/components/VabQueryForm/VabQueryFormBottomPanel.vue": [
    "4212",
    9,
    []
  ],
  "./styles/themes/default.scss": [
    "84356",
    9,
    []
  ],
  "./views/vab/webSocket/index.vue": [
    "91580",
    9,
    [
      3821
    ]
  ],
  "./store/": [
    "38804",
    9,
    []
  ],
  "./layouts/components/VabSide": [
    "29595",
    9,
    []
  ],
  "./views/vab/table/index.vue": [
    "27680",
    9,
    [
      7769
    ]
  ],
  "./views/stock/": [
    "59461",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      3286
    ]
  ],
  "./assets/vuejs-fill.svg": [
    "55762",
    1,
    [
      2591
    ]
  ],
  "./config": [
    "89601",
    7,
    []
  ],
  "./views/vab/errorLog": [
    "12983",
    9,
    [
      4172
    ]
  ],
  "./views/register/index.vue": [
    "78031",
    9,
    [
      6836
    ]
  ],
  "./views/vab/table/": [
    "27680",
    9,
    [
      7769
    ]
  ],
  "./layouts/components/VabAvatar": [
    "99032",
    9,
    []
  ],
  "./views/vab/errorLog/components/ErrorTest.vue": [
    "95483",
    9,
    [
      2696
    ]
  ],
  "./api/personalCenter.js": [
    "77596",
    9,
    [
      2541
    ]
  ],
  "./components/VabUpload": [
    "51775",
    9,
    [
      7236
    ]
  ],
  "./layouts/components/VabAppMain/index": [
    "92120",
    9,
    []
  ],
  "./layouts/components/VabSide/": [
    "29595",
    9,
    []
  ],
  "./layouts/components/VabSide/index": [
    "29595",
    9,
    []
  ],
  "./views/personnelManagement/userManagement/index.vue": [
    "65440",
    9,
    [
      6361
    ]
  ],
  "./views/vab/chart/": [
    "45198",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      2339
    ]
  ],
  "./views/mall/goodsList": [
    "82736",
    9,
    [
      7865
    ]
  ],
  "./views/vab/nested/menu1": [
    "82174",
    9,
    [
      419
    ]
  ],
  "./views/vab/tab": [
    "22875",
    9,
    [
      3080
    ]
  ],
  "./views/register/index": [
    "78031",
    9,
    [
      6836
    ]
  ],
  "./api/ad.js": [
    "78740",
    9,
    []
  ],
  "./views/personnelManagement/roleManagement/index.vue": [
    "77904",
    9,
    [
      3865
    ]
  ],
  "./views/register/": [
    "78031",
    9,
    [
      6836
    ]
  ],
  "./api/icon": [
    "72980",
    9,
    [
      3221
    ]
  ],
  "./components/VabProfile/index.vue": [
    "87793",
    9,
    [
      9802
    ]
  ],
  "./views/personnelManagement/roleManagement/index": [
    "77904",
    9,
    [
      3865
    ]
  ],
  "./plugins": [
    "99705",
    9,
    []
  ],
  "./layouts/components/VabGithubCorner": [
    "22282",
    9,
    []
  ],
  "./layouts/components/VabAppMain/": [
    "92120",
    9,
    []
  ],
  "./views/vab/tab/index": [
    "22875",
    9,
    [
      3080
    ]
  ],
  "./utils/validate.js": [
    "75108",
    9,
    []
  ],
  "./layouts/components/VabBreadcrumb": [
    "89719",
    9,
    []
  ],
  "./layouts/components/VabLogo/index": [
    "68995",
    9,
    []
  ],
  "./views/vab/loading/": [
    "1702",
    9,
    [
      4571
    ]
  ],
  "./layouts/components/VabAd/": [
    "37863",
    9,
    []
  ],
  "./api/user.js": [
    "97758",
    9,
    []
  ],
  "./components/SelectTree/index": [
    "75804",
    9,
    [
      9613
    ]
  ],
  "./views/mall/goodsList/index.vue": [
    "82736",
    9,
    [
      7865
    ]
  ],
  "./styles/spinner/inner-circles.css": [
    "77943",
    9,
    [
      4014
    ]
  ],
  "./layouts/components/VabTop/index.vue": [
    "21482",
    9,
    []
  ],
  "./layouts/components/VabColorfullIcon/": [
    "77557",
    9,
    []
  ],
  "./components/SelectTree": [
    "75804",
    9,
    [
      9613
    ]
  ],
  "./views/vab/nested/menu1/menu1-1/": [
    "8736",
    9,
    [
      5225
    ]
  ],
  "./layouts/components/VabFullScreen": [
    "29358",
    9,
    []
  ],
  "./views/vab/tree/": [
    "49782",
    9,
    [
      4603
    ]
  ],
  "./layouts/components/VabErrorLog/": [
    "44356",
    9,
    []
  ],
  "./layouts/components/VabSide/components/VabMenuItem.vue": [
    "10536",
    9,
    []
  ],
  "./views/vab/chart": [
    "45198",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      2339
    ]
  ],
  "./utils/encrypt.js": [
    "10489",
    9,
    []
  ],
  "./layouts": [
    "38279",
    9,
    []
  ],
  "./utils/handleRoutes.js": [
    "98694",
    9,
    []
  ],
  "./views/vab/permissions": [
    "80516",
    9,
    [
      4661
    ]
  ],
  "./store/modules/tabsBar.js": [
    "48851",
    9,
    []
  ],
  "./views/index": [
    "87595",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      5560
    ]
  ],
  "./views/personnelManagement/userManagement/": [
    "65440",
    9,
    [
      6361
    ]
  ],
  "./plugins/echarts": [
    "64039",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      1180
    ]
  ],
  "./views/personnelManagement/userManagement/index": [
    "65440",
    9,
    [
      6361
    ]
  ],
  "./views/vab/backToTop": [
    "9917",
    9,
    [
      334
    ]
  ],
  "./views/vab/chart/index": [
    "45198",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      2339
    ]
  ],
  "./views/vab/qrCode": [
    "77569",
    9,
    [
      5582,
      8730
    ]
  ],
  "./views/vab/tab/": [
    "22875",
    9,
    [
      3080
    ]
  ],
  "./views/mall/pay/components/Step2.vue": [
    "39544",
    9,
    [
      9633
    ]
  ],
  "./views/vab/table/components/TableEdit.vue": [
    "1524",
    9,
    [
      3813
    ]
  ],
  "./layouts/components/VabErrorLog/index": [
    "44356",
    9,
    []
  ],
  "./layouts/components/VabSide/components/VabSubmenu.vue": [
    "81067",
    9,
    []
  ],
  "./views/mall/pay/components/Step3": [
    "68282",
    9,
    [
      8967
    ]
  ],
  "./config/setting.config": [
    "65673",
    7,
    []
  ],
  "./views/personnelManagement/menuManagement/components/MenuManagementEdit": [
    "50788",
    9,
    [
      3957
    ]
  ],
  "./views/personnelManagement/roleManagement/components/RoleManagementEdit": [
    "75702",
    9,
    [
      4107
    ]
  ],
  "./api/table.js": [
    "20521",
    9,
    [
      8946
    ]
  ],
  "./views/mall/pay/index": [
    "83320",
    9,
    [
      8481
    ]
  ],
  "./config/index": [
    "89601",
    7,
    []
  ],
  "./api/markdown": [
    "58244",
    9,
    [
      5637
    ]
  ],
  "./layouts/components/VabQueryForm/": [
    "26174",
    9,
    []
  ],
  "./views/vab/element/index.vue": [
    "72490",
    9,
    [
      5847
    ]
  ],
  "./layouts/components/VabQueryForm": [
    "26174",
    9,
    []
  ],
  "./views/vab/nested/menu1/": [
    "82174",
    9,
    [
      419
    ]
  ],
  "./config/index.js": [
    "89601",
    7,
    []
  ],
  "./layouts/EmptyLayout": [
    "74893",
    9,
    []
  ],
  "./layouts/components/VabTheme/": [
    "43461",
    9,
    []
  ],
  "./components/SelectTree/index.vue": [
    "75804",
    9,
    [
      9613
    ]
  ],
  "./api/icon.js": [
    "72980",
    9,
    [
      3221
    ]
  ],
  "./layouts/components/VabLogo": [
    "68995",
    9,
    []
  ],
  "./utils/pageTitle.js": [
    "30083",
    9,
    []
  ],
  "./assets/zfb_kf.jpg": [
    "93246",
    1,
    [
      1027
    ]
  ],
  "./store/modules/table.js": [
    "68318",
    9,
    []
  ],
  "./views/index/": [
    "87595",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      5560
    ]
  ],
  "./views/index/index": [
    "87595",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      5560
    ]
  ],
  "./components/VabPageHeader/index": [
    "94986",
    9,
    [
      9207
    ]
  ],
  "./views/personnelManagement/userManagement": [
    "65440",
    9,
    [
      6361
    ]
  ],
  "./plugins/index": [
    "99705",
    9,
    []
  ],
  "./views/index/components/VersionInformation": [
    "45141",
    9,
    [
      454
    ]
  ],
  "./api/roleManagement.js": [
    "66066",
    9,
    [
      6799
    ]
  ],
  "./views/vab/upload/index.vue": [
    "7332",
    9,
    [
      1701
    ]
  ],
  "./assets/error_images/cloud.png": [
    "69369",
    1,
    [
      5970
    ]
  ],
  "./layouts/components/VabSide/components/VabSideItem.vue": [
    "98265",
    9,
    []
  ],
  "./layouts/components/VabQueryForm/VabQueryFormRightPanel.vue": [
    "14203",
    9,
    []
  ],
  "./utils/index": [
    "55588",
    9,
    [
      837
    ]
  ],
  "./utils/static": [
    "74660",
    9,
    [
      8447,
      1797
    ]
  ],
  "./views/personalCenter/": [
    "45494",
    9,
    [
      6539
    ]
  ],
  "./layouts/components/VabErrorLog": [
    "44356",
    9,
    []
  ],
  "./views/vab/element/": [
    "72490",
    9,
    [
      5847
    ]
  ],
  "./utils/request": [
    "56521",
    9,
    []
  ],
  "./utils/request.js": [
    "56521",
    9,
    []
  ],
  "./views/donate/index": [
    "15086",
    9,
    [
      1411
    ]
  ],
  "./assets/comparison/right.jpg": [
    "36560",
    1,
    [
      2313
    ]
  ],
  "./views/mall/pay/components/Step2": [
    "39544",
    9,
    [
      9633
    ]
  ],
  "./layouts/components/VabNav/index.vue": [
    "68099",
    9,
    []
  ],
  "./store/index": [
    "38804",
    9,
    []
  ],
  "./store/modules/errorLog.js": [
    "59520",
    9,
    []
  ],
  "./store/modules/user": [
    "51367",
    9,
    []
  ],
  "./store/modules/user.js": [
    "51367",
    9,
    []
  ],
  "./layouts/components/VabQueryForm/index": [
    "26174",
    9,
    []
  ],
  "./styles/spinner/dots.css": [
    "66719",
    9,
    [
      4014
    ]
  ],
  "./layouts/components/VabTheme/index.vue": [
    "43461",
    9,
    []
  ],
  "./api/personalCenter": [
    "77596",
    9,
    [
      2541
    ]
  ],
  "./views/index/index.vue": [
    "87595",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      5560
    ]
  ],
  "./views/mall/pay/index.vue": [
    "83320",
    9,
    [
      8481
    ]
  ],
  "./views/test/index": [
    "66445",
    9,
    [
      8446
    ]
  ],
  "./views/vab/icon/index.vue": [
    "2149",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      7094
    ]
  ],
  "./layouts/components/VabQueryForm/VabQueryFormLeftPanel": [
    "49081",
    9,
    []
  ],
  "./styles/transition.scss": [
    "20635",
    9,
    [
      4014
    ]
  ],
  "./views/personalCenter/index.vue": [
    "45494",
    9,
    [
      6539
    ]
  ],
  "./views/personnelManagement/roleManagement/components/RoleManagementEdit.vue": [
    "75702",
    9,
    [
      4107
    ]
  ],
  "./utils/encrypt": [
    "10489",
    9,
    []
  ],
  "./main.js": [
    "24941",
    9,
    []
  ],
  "./views/vab/more/index.vue": [
    "3905",
    9,
    [
      4170
    ]
  ],
  "./api/roleManagement": [
    "66066",
    9,
    [
      6799
    ]
  ],
  "./components/SelectTree/": [
    "75804",
    9,
    [
      9613
    ]
  ],
  "./layouts/components/VabLogo/index.vue": [
    "68995",
    9,
    []
  ],
  "./views/index/components/VersionInformation.vue": [
    "45141",
    9,
    [
      454
    ]
  ],
  "./plugins/element": [
    "39349",
    9,
    []
  ],
  "./utils/validate": [
    "75108",
    9,
    []
  ],
  "./utils/handleRoutes": [
    "98694",
    9,
    []
  ],
  "./layouts/components/VabQueryForm/VabQueryFormTopPanel.vue": [
    "4938",
    9,
    []
  ],
  "./plugins/support": [
    "51906",
    9,
    []
  ],
  "./api/publicKey.js": [
    "61229",
    9,
    []
  ],
  "./utils/accessToken.js": [
    "89403",
    9,
    []
  ],
  "./assets/comparison/left.jpg": [
    "50691",
    1,
    [
      976
    ]
  ],
  "./views/401.vue": [
    "82860",
    9,
    [
      6669
    ]
  ],
  "./views/vab/upload/index": [
    "7332",
    9,
    [
      1701
    ]
  ],
  "./layouts/components/VabLogo/": [
    "68995",
    9,
    []
  ],
  "./utils/vab.js": [
    "60877",
    9,
    []
  ],
  "./views/vab/more": [
    "3905",
    9,
    [
      4170
    ]
  ],
  "./components/VabSnow/": [
    "2684",
    9,
    [
      4893
    ]
  ],
  "./plugins/support.js": [
    "51906",
    9,
    []
  ],
  "./plugins/vabIcon.js": [
    "80769",
    9,
    []
  ],
  "./api/colorfulIcon.js": [
    "28474",
    9,
    [
      839
    ]
  ],
  "./layouts/components/VabQueryForm/index.vue": [
    "26174",
    9,
    []
  ],
  "./styles/spinner/plus.css": [
    "163",
    9,
    [
      4014
    ]
  ],
  "./assets/ewm.png": [
    "63671",
    1,
    [
      6364
    ]
  ],
  "./utils/": [
    "55588",
    9,
    [
      837
    ]
  ],
  "./utils/clipboard": [
    "77518",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      7603
    ]
  ],
  "./views/vab/table/components/TableEdit": [
    "1524",
    9,
    [
      3813
    ]
  ],
  "./store/modules/errorLog": [
    "59520",
    9,
    []
  ],
  "./config/settings.js": [
    "24924",
    7,
    [
      5645
    ]
  ],
  "./views/vab/more/": [
    "3905",
    9,
    [
      4170
    ]
  ],
  "./views/vab/icon/": [
    "2149",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      7094
    ]
  ],
  "./views/personnelManagement/menuManagement/": [
    "60717",
    9,
    [
      2430
    ]
  ],
  "./components/VabUpload/": [
    "51775",
    9,
    [
      7236
    ]
  ],
  "./views/login/index.vue": [
    "11614",
    9,
    [
      2755
    ]
  ],
  "./components/VabProfile/index": [
    "87793",
    9,
    [
      9802
    ]
  ],
  "./config/net.config.js": [
    "68424",
    7,
    []
  ],
  "./store/modules/tabsBar": [
    "48851",
    9,
    []
  ],
  "./utils/vab": [
    "60877",
    9,
    []
  ],
  "./store/modules/table": [
    "68318",
    9,
    []
  ],
  "./api/router.js": [
    "8960",
    9,
    []
  ],
  "./layouts/components/VabAppMain": [
    "92120",
    9,
    []
  ],
  "./layouts/export": [
    "82218",
    9,
    []
  ],
  "./api/userManagement.js": [
    "4537",
    9,
    [
      1858
    ]
  ],
  "./views/mall/pay": [
    "83320",
    9,
    [
      8481
    ]
  ],
  "./views/test/index.vue": [
    "66445",
    9,
    [
      8446
    ]
  ],
  "./views/vab/chart/index.vue": [
    "45198",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      2339
    ]
  ],
  "./api/markdown.js": [
    "58244",
    9,
    [
      5637
    ]
  ],
  "./layouts/index.vue": [
    "38279",
    9,
    []
  ],
  "./views/mall/pay/components/Step1.vue": [
    "15489",
    9,
    [
      1834
    ]
  ],
  "./layouts/components/VabQueryForm/VabQueryFormLeftPanel.vue": [
    "49081",
    9,
    []
  ],
  "./layouts/components/VabAvatar/": [
    "99032",
    9,
    []
  ],
  "./layouts/components/VabQueryForm/VabQueryFormBottomPanel": [
    "4212",
    9,
    []
  ],
  "./views/stock": [
    "59461",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      3286
    ]
  ],
  "./plugins/element.js": [
    "39349",
    9,
    []
  ],
  "./components/VabSnow/index.vue": [
    "2684",
    9,
    [
      4893
    ]
  ],
  "./layouts/": [
    "38279",
    9,
    []
  ],
  "./layouts/components/VabTabs/index": [
    "42445",
    9,
    []
  ],
  "./utils/index.js": [
    "55588",
    9,
    [
      837
    ]
  ],
  "./styles/normalize.scss": [
    "61123",
    9,
    [
      4014
    ]
  ],
  "./views/vab/errorLog/index": [
    "12983",
    9,
    [
      4172
    ]
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1": [
    "27077",
    9,
    [
      9030
    ]
  ],
  "./views/login": [
    "11614",
    9,
    [
      2755
    ]
  ],
  "./views/vab/tree/index": [
    "49782",
    9,
    [
      4603
    ]
  ],
  "./assets/error_images/404.png": [
    "78462",
    1,
    [
      4899
    ]
  ],
  "./layouts/components/VabAppMain/index.vue": [
    "92120",
    9,
    []
  ],
  "./utils/permission.js": [
    "79257",
    9,
    [
      3746
    ]
  ],
  "./views/personalCenter/index": [
    "45494",
    9,
    [
      6539
    ]
  ],
  "./views/vab/tree/index.vue": [
    "49782",
    9,
    [
      4603
    ]
  ],
  "./api/stock.js": [
    "23579",
    9,
    [
      4584
    ]
  ],
  "./api/userManagement": [
    "4537",
    9,
    [
      1858
    ]
  ],
  "./layouts/components/VabTop/index": [
    "21482",
    9,
    []
  ],
  "./config/theme.config.js": [
    "83022",
    7,
    []
  ],
  "./views/vab/nested/menu1/menu1-1/index.vue": [
    "8736",
    9,
    [
      5225
    ]
  ],
  "./views/vab/tab/index.vue": [
    "22875",
    9,
    [
      3080
    ]
  ],
  "./views/personnelManagement/userManagement/components/UserManagementEdit": [
    "31640",
    9,
    [
      9329
    ]
  ],
  "./views/vab/errorLog/index.vue": [
    "12983",
    9,
    [
      4172
    ]
  ],
  "./views/donate/index.vue": [
    "15086",
    9,
    [
      1411
    ]
  ],
  "./utils/accessToken": [
    "89403",
    9,
    []
  ],
  "./views/mall/goodsList/index": [
    "82736",
    9,
    [
      7865
    ]
  ],
  "./views/mall/goodsList/": [
    "82736",
    9,
    [
      7865
    ]
  ],
  "./components/VabCharge/index.vue": [
    "65661",
    9,
    [
      1198
    ]
  ],
  "./views/vab/lodash/index.vue": [
    "34489",
    9,
    [
      6290
    ]
  ],
  "./views/vab/icon/colorfulIcon": [
    "54783",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      1332
    ]
  ],
  "./views/vab/backToTop/": [
    "9917",
    9,
    [
      334
    ]
  ],
  "./views/vab/nested/menu1/index": [
    "82174",
    9,
    [
      419
    ]
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/": [
    "27077",
    9,
    [
      9030
    ]
  ],
  "./styles/variables.scss": [
    "35309",
    9,
    []
  ],
  "./views/vab/lodash/index": [
    "34489",
    9,
    [
      6290
    ]
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/index.vue": [
    "27077",
    9,
    [
      9030
    ]
  ],
  "./views/vab/permissions/": [
    "80516",
    9,
    [
      4661
    ]
  ],
  "./layouts/components/VabFullScreen/": [
    "29358",
    9,
    []
  ],
  "./views/mall/pay/": [
    "83320",
    9,
    [
      8481
    ]
  ],
  "./views/vab/form": [
    "99332",
    9,
    [
      9637
    ]
  ],
  "./config/theme.config": [
    "83022",
    7,
    []
  ],
  "./views/register": [
    "78031",
    9,
    [
      6836
    ]
  ],
  "./assets/error_images/401.png": [
    "27843",
    1,
    [
      4848
    ]
  ],
  "./layouts/components/VabSide/components/VabMenuItem": [
    "10536",
    9,
    []
  ],
  "./store/modules/routes.js": [
    "64634",
    9,
    []
  ],
  "./layouts/components/VabColorfullIcon": [
    "77557",
    9,
    []
  ],
  "./api/notice.js": [
    "27386",
    9,
    [
      5518
    ]
  ],
  "./layouts/components/VabBreadcrumb/index": [
    "89719",
    9,
    []
  ],
  "./layouts/components/VabBreadcrumb/index.vue": [
    "89719",
    9,
    []
  ],
  "./main": [
    "24941",
    9,
    []
  ],
  "./styles/loading.scss": [
    "40484",
    9,
    [
      4014
    ]
  ],
  "./layouts/components/VabTabs/": [
    "42445",
    9,
    []
  ],
  "./views/personnelManagement/roleManagement/": [
    "77904",
    9,
    [
      3865
    ]
  ],
  "./views/vab/editor": [
    "73343",
    9,
    [
      2640,
      612
    ]
  ],
  "./utils/static.js": [
    "74660",
    9,
    [
      8447,
      1797
    ]
  ],
  "./views/personnelManagement/menuManagement/components/MenuManagementEdit.vue": [
    "50788",
    9,
    [
      3957
    ]
  ],
  "./views/vab/errorLog/": [
    "12983",
    9,
    [
      4172
    ]
  ],
  "./views/vab/icon": [
    "2149",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      7094
    ]
  ],
  "./views/vab/icon/colorfulIcon.vue": [
    "54783",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      1332
    ]
  ],
  "./views/vab/nested/menu1/menu1-1/index": [
    "8736",
    9,
    [
      5225
    ]
  ],
  "./api/github": [
    "44914",
    9,
    [
      1727
    ]
  ],
  "./views/vab/lodash/": [
    "34489",
    9,
    [
      6290
    ]
  ],
  "./views/vab/loading/index": [
    "1702",
    9,
    [
      4571
    ]
  ],
  "./views/test": [
    "66445",
    9,
    [
      8446
    ]
  ],
  "./layouts/components/VabSide/index.vue": [
    "29595",
    9,
    []
  ],
  "./components/VabProfile": [
    "87793",
    9,
    [
      9802
    ]
  ],
  "./utils/errorLog.js": [
    "10434",
    9,
    []
  ],
  "./views/vab/editor/index.vue": [
    "73343",
    9,
    [
      2640,
      612
    ]
  ],
  "./utils": [
    "55588",
    9,
    [
      837
    ]
  ],
  "./api/table": [
    "20521",
    9,
    [
      8946
    ]
  ],
  "./api/publicKey": [
    "61229",
    9,
    []
  ],
  "./components/VabSnow/index": [
    "2684",
    9,
    [
      4893
    ]
  ],
  "./views/401": [
    "82860",
    9,
    [
      6669
    ]
  ],
  "./store/modules/settings.js": [
    "21001",
    9,
    []
  ],
  "./views/stock/index.vue": [
    "59461",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      3286
    ]
  ],
  "./views/404": [
    "58341",
    9,
    [
      8246
    ]
  ],
  "./views/vab/backToTop/index": [
    "9917",
    9,
    [
      334
    ]
  ],
  "./views/vab/form/index.vue": [
    "99332",
    9,
    [
      9637
    ]
  ],
  "./views/vab/upload/": [
    "7332",
    9,
    [
      1701
    ]
  ],
  "./layouts/components/VabFullScreen/index.vue": [
    "29358",
    9,
    []
  ],
  "./layouts/components/VabTop": [
    "21482",
    9,
    []
  ],
  "./layouts/index": [
    "38279",
    9,
    []
  ],
  "./plugins/index.js": [
    "99705",
    9,
    []
  ],
  "./views/personnelManagement/roleManagement": [
    "77904",
    9,
    [
      3865
    ]
  ],
  "./views/vab/form/": [
    "99332",
    9,
    [
      9637
    ]
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/index": [
    "27077",
    9,
    [
      9030
    ]
  ],
  "./components/VabUpload/index.vue": [
    "51775",
    9,
    [
      7236
    ]
  ],
  "./components/VabSnow": [
    "2684",
    9,
    [
      4893
    ]
  ],
  "./config/permission.js": [
    "78470",
    9,
    []
  ],
  "./components/VabUpload/index": [
    "51775",
    9,
    [
      7236
    ]
  ],
  "./utils/errorLog": [
    "10434",
    9,
    []
  ],
  "./config/settings": [
    "24924",
    7,
    [
      5645
    ]
  ],
  "./layouts/components/VabColorfullIcon/index": [
    "77557",
    9,
    []
  ],
  "./api/github.js": [
    "44914",
    9,
    [
      1727
    ]
  ],
  "./views/vab/qrCode/index.vue": [
    "77569",
    9,
    [
      5582,
      8730
    ]
  ],
  "./utils/printInfo": [
    "34527",
    9,
    []
  ],
  "./api/stock": [
    "23579",
    9,
    [
      4584
    ]
  ],
  "./components/VabPageHeader": [
    "94986",
    9,
    [
      9207
    ]
  ],
  "./api/notice": [
    "27386",
    9,
    [
      5518
    ]
  ],
  "./layouts/EmptyLayout.vue": [
    "74893",
    9,
    []
  ],
  "./layouts/components/VabBreadcrumb/": [
    "89719",
    9,
    []
  ],
  "./views/vab/element/index": [
    "72490",
    9,
    [
      5847
    ]
  ],
  "./layouts/components/VabAd/index": [
    "37863",
    9,
    []
  ],
  "./router": [
    "72818",
    9,
    []
  ],
  "./views/404.vue": [
    "58341",
    9,
    [
      8246
    ]
  ],
  "./App": [
    "153",
    9,
    []
  ],
  "./store": [
    "38804",
    9,
    []
  ],
  "./views/vab/nested/menu1/index.vue": [
    "82174",
    9,
    [
      419
    ]
  ],
  "./assets/qr_logo/lqr_logo.png": [
    "1621",
    1,
    [
      294
    ]
  ],
  "./views/donate/": [
    "15086",
    9,
    [
      1411
    ]
  ],
  "./api/ad": [
    "78740",
    9,
    []
  ],
  "./views/vab/nested/menu1/menu1-1": [
    "8736",
    9,
    [
      5225
    ]
  ],
  "./layouts/components/VabAvatar/index": [
    "99032",
    9,
    []
  ],
  "./layouts/components/VabGithubCorner/index": [
    "22282",
    9,
    []
  ],
  "./layouts/components/VabErrorLog/index.vue": [
    "44356",
    9,
    []
  ],
  "./views/vab/webSocket": [
    "91580",
    9,
    [
      3821
    ]
  ],
  "./store/index.js": [
    "38804",
    9,
    []
  ],
  "./config/": [
    "89601",
    7,
    []
  ],
  "./layouts/export.js": [
    "82218",
    9,
    []
  ],
  "./layouts/components/VabGithubCorner/index.vue": [
    "22282",
    9,
    []
  ],
  "./layouts/components/VabTabs/index.vue": [
    "42445",
    9,
    []
  ],
  "./views/test/": [
    "66445",
    9,
    [
      8446
    ]
  ],
  "./components/VabProfile/": [
    "87793",
    9,
    [
      9802
    ]
  ],
  "./views/login/index": [
    "11614",
    9,
    [
      2755
    ]
  ],
  "./api/router": [
    "8960",
    9,
    []
  ],
  "./components/VabCharge": [
    "65661",
    9,
    [
      1198
    ]
  ],
  "./views/vab/form/index": [
    "99332",
    9,
    [
      9637
    ]
  ],
  "./views/vab/more/index": [
    "3905",
    9,
    [
      4170
    ]
  ],
  "./api/goodsList": [
    "96831",
    9,
    [
      884
    ]
  ],
  "./assets/mynb.jpg": [
    "22038",
    1,
    [
      5995
    ]
  ],
  "./components/VabPageHeader/": [
    "94986",
    9,
    [
      9207
    ]
  ],
  "./plugins/": [
    "99705",
    9,
    []
  ],
  "./styles/vab.scss": [
    "12541",
    9,
    []
  ],
  "./router/index.js": [
    "72818",
    9,
    []
  ],
  "./views/mall/pay/components/Step3.vue": [
    "68282",
    9,
    [
      8967
    ]
  ],
  "./views/vab/lodash": [
    "34489",
    9,
    [
      6290
    ]
  ],
  "./views/vab/permissions/index.vue": [
    "80516",
    9,
    [
      4661
    ]
  ],
  "./views/vab/table": [
    "27680",
    9,
    [
      7769
    ]
  ],
  "./layouts/components/VabGithubCorner/": [
    "22282",
    9,
    []
  ],
  "./views/vab/qrCode/index": [
    "77569",
    9,
    [
      5582,
      8730
    ]
  ],
  "./router/index": [
    "72818",
    9,
    []
  ],
  "./views/vab/webSocket/index": [
    "91580",
    9,
    [
      3821
    ]
  ],
  "./views/stock/index": [
    "59461",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      3286
    ]
  ],
  "./views/personnelManagement/menuManagement/index.vue": [
    "60717",
    9,
    [
      2430
    ]
  ],
  "./api/tree": [
    "32729",
    9,
    [
      9570
    ]
  ],
  "./views/vab/tree": [
    "49782",
    9,
    [
      4603
    ]
  ],
  "./components/VabCharge/": [
    "65661",
    9,
    [
      1198
    ]
  ],
  "./layouts/components/VabNav": [
    "68099",
    9,
    []
  ],
  "./config/setting.config.js": [
    "65673",
    7,
    []
  ],
  "./layouts/components/VabColorfullIcon/index.vue": [
    "77557",
    9,
    []
  ],
  "./views/mall/pay/components/Step1": [
    "15489",
    9,
    [
      1834
    ]
  ],
  "./views/vab/table/index": [
    "27680",
    9,
    [
      7769
    ]
  ],
  "./views/vab/webSocket/": [
    "91580",
    9,
    [
      3821
    ]
  ],
  "./views/vab/permissions/index": [
    "80516",
    9,
    [
      4661
    ]
  ],
  "./layouts/components/VabTheme/index": [
    "43461",
    9,
    []
  ],
  "./store/modules/settings": [
    "21001",
    9,
    []
  ],
  "./plugins/echarts.js": [
    "64039",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      1180
    ]
  ],
  "./views/vab/loading": [
    "1702",
    9,
    [
      4571
    ]
  ],
  "./layouts/components/VabNav/index": [
    "68099",
    9,
    []
  ],
  "./views/vab/loading/index.vue": [
    "1702",
    9,
    [
      4571
    ]
  ],
  "./utils/pageTitle": [
    "30083",
    9,
    []
  ],
  "./api/remixIcon": [
    "24937",
    9,
    [
      5826
    ]
  ],
  "./config/net.config": [
    "68424",
    7,
    []
  ],
  "./layouts/components/VabFullScreen/index": [
    "29358",
    9,
    []
  ],
  "./layouts/components/VabQueryForm/VabQueryFormTopPanel": [
    "4938",
    9,
    []
  ],
  "./layouts/components/VabSide/components/VabSubmenu": [
    "81067",
    9,
    []
  ],
  "./layouts/components/VabTop/": [
    "21482",
    9,
    []
  ],
  "./utils/clipboard.js": [
    "77518",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      7603
    ]
  ],
  "./plugins/vabIcon": [
    "80769",
    9,
    []
  ],
  "./views/login/": [
    "11614",
    9,
    [
      2755
    ]
  ],
  "./views/vab/backToTop/index.vue": [
    "9917",
    9,
    [
      334
    ]
  ],
  "./App.vue": [
    "153",
    9,
    []
  ],
  "./config/permission": [
    "78470",
    9,
    []
  ],
  "./views/donate": [
    "15086",
    9,
    [
      1411
    ]
  ],
  "./views/personnelManagement/menuManagement": [
    "60717",
    9,
    [
      2430
    ]
  ],
  "./views/vab/editor/": [
    "73343",
    9,
    [
      2640,
      612
    ]
  ],
  "./api/tree.js": [
    "32729",
    9,
    [
      9570
    ]
  ],
  "./api/remixIcon.js": [
    "24937",
    9,
    [
      5826
    ]
  ],
  "./views/vab/upload": [
    "7332",
    9,
    [
      1701
    ]
  ],
  "./api/menuManagement.js": [
    "63801",
    9,
    [
      8578
    ]
  ],
  "./components/VabCharge/index": [
    "65661",
    9,
    [
      1198
    ]
  ],
  "./layouts/components/VabAvatar/index.vue": [
    "99032",
    9,
    []
  ],
  "./layouts/components/VabQueryForm/VabQueryFormRightPanel": [
    "14203",
    9,
    []
  ],
  "./utils/printInfo.js": [
    "34527",
    9,
    []
  ],
  "./views/personalCenter": [
    "45494",
    9,
    [
      6539
    ]
  ],
  "./views/personnelManagement/menuManagement/index": [
    "60717",
    9,
    [
      2430
    ]
  ],
  "./views/vab/element": [
    "72490",
    9,
    [
      5847
    ]
  ],
  "./views/vab/icon/index": [
    "2149",
    9,
    [
      3322,
      2865,
      1728,
      4375,
      3238,
      6589,
      4684,
      2643,
      8226,
      6185,
      9505,
      9898,
      9367,
      6304,
      7933,
      7094
    ]
  ],
  "./api/menuManagement": [
    "63801",
    9,
    [
      8578
    ]
  ],
  "./api/user": [
    "97758",
    9,
    []
  ],
  "./assets/login_images/background.jpg": [
    "52789",
    1,
    [
      7734
    ]
  ],
  "./components/VabPageHeader/index.vue": [
    "94986",
    9,
    [
      9207
    ]
  ],
  "./layouts/components/VabAd/index.vue": [
    "37863",
    9,
    []
  ],
  "./layouts/components/VabSide/components/VabSideItem": [
    "98265",
    9,
    []
  ],
  "./layouts/components/VabTabs": [
    "42445",
    9,
    []
  ],
  "./store/modules/routes": [
    "64634",
    9,
    []
  ],
  "./styles/spinner/gauge.css": [
    "82254",
    9,
    [
      4014
    ]
  ],
  "./router/": [
    "72818",
    9,
    []
  ],
  "./utils/permission": [
    "79257",
    9,
    [
      3746
    ]
  ],
  "./views/vab/editor/index": [
    "73343",
    9,
    [
      2640,
      612
    ]
  ],
  "./views/vab/qrCode/": [
    "77569",
    9,
    [
      5582,
      8730
    ]
  ],
  "./views/vab/errorLog/components/ErrorTest": [
    "95483",
    9,
    [
      2696
    ]
  ],
  "./api/colorfulIcon": [
    "28474",
    9,
    [
      839
    ]
  ],
  "./layouts/components/VabNav/": [
    "68099",
    9,
    []
  ],
  "./layouts/components/VabTheme": [
    "43461",
    9,
    []
  ],
  "./api/goodsList.js": [
    "96831",
    9,
    [
      884
    ]
  ],
  "./views/personnelManagement/userManagement/components/UserManagementEdit.vue": [
    "31640",
    9,
    [
      9329
    ]
  ]
};
function __rspack_async_context(req) {
  if(!__webpack_require__.o(map, req)) {
    return Promise.resolve().then(function() {
var e = new Error("Cannot find module '" + req + "'");
e.code = 'MODULE_NOT_FOUND';
throw e;
});
  }

  var ids = map[req], id = ids[0];
  return Promise.all(ids[2].map(__webpack_require__.e)).then(function() { return __webpack_require__.t(id, ids[1] | 16); });
}

__rspack_async_context.keys = function() { return Object.keys(map); };
__rspack_async_context.id = 15192;
module.exports = __rspack_async_context;


}),
59376: (function (module) {
"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==";

}),
36001: (function () {
"use strict";
/* (ignored) */

}),

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// webpack/runtime/compat_get_default_export
!function() {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = function(module) {
	var getter = module && module.__esModule ?
		function() { return module['default']; } :
		function() { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

}();
// webpack/runtime/create_fake_namespace_object
!function() {
var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
  __webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; } });
	}
	def['default'] = function() { return value; };
	__webpack_require__.d(ns, def);
	return ns;
};
}();
// webpack/runtime/define_property_getters
!function() {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
}();
// webpack/runtime/ensure_chunk
!function() {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = function(chunkId) {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce(function(promises, key) {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};
}();
// webpack/runtime/get javascript chunk filename
!function() {
// This function allow to reference chunks
__webpack_require__.u = function(chunkId) {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "js/" + ({1728: "vab-chunk-2",2643: "vab-chunk-7",2865: "vab-chunk-1",3238: "vab-chunk-4",3322: "vab-chunk-0",4375: "vab-chunk-3",4684: "vab-chunk-6",6185: "vab-chunk-9",6304: "vab-chunk-13",6589: "vab-chunk-5",7933: "vab-chunk-14",8226: "vab-chunk-8",9367: "vab-chunk-12",9505: "vab-chunk-10",9898: "vab-chunk-11",}[chunkId] || chunkId) + "." + {1027: "ba6cec1d",1180: "2979df0b",1198: "45191cdd",1332: "7e927570",1411: "2f40d166",1701: "5283e6b2",1727: "dd4b3c00",1728: "7a4b7887",1797: "b1b0492c",1834: "830ed60d",1858: "27307bee",2313: "76c8c720",2339: "29741990",2430: "eaa23e29",2541: "c2b08383",2591: "a4dcb6f9",2640: "295f4025",2643: "3f715313",2696: "6261454c",2755: "331f2cbb",2865: "a88dffb8",294: "6175dfab",3080: "fa2c3191",3221: "0d0491b3",3238: "b9d3f860",3286: "65e2b74b",3322: "759520b0",334: "049ea688",3746: "df37318b",3813: "d09d6416",3821: "3a383034",3865: "2671b97f",3957: "419bbe66",4107: "97e1e503",4170: "2f6cdb5d",4172: "a516ca41",419: "316afa90",4375: "2856fdfb",454: "976399cf",4571: "54ad27f5",4584: "e8774229",4603: "0701ed8b",4661: "fd2ad326",4684: "c86e03a7",4848: "1483d043",4893: "fd3e7f4a",4899: "f994c072",5225: "dbe94c6c",5518: "92557f29",5560: "f0890207",5582: "0779ea01",5637: "a095f8cb",5645: "f67b58f4",5826: "720e2612",5847: "bdb06ffa",5970: "2e9e78e9",5995: "06af349a",612: "00a1a0e0",6185: "71017e16",6290: "f7014453",6304: "47a9f4c3",6361: "6e1af5ed",6364: "bd437a8b",6539: "0104f3ad",6589: "5546bf57",6669: "65a5b2dd",6799: "0b3c2643",6836: "4e7ca4c2",7094: "8868cf89",7236: "16cece0d",7603: "e3b7a502",7734: "0197b45f",7769: "a8dc88b5",7865: "ccea27b1",7933: "907e2e7a",8226: "35298e57",8246: "7a5b74a5",837: "fe1e9169",839: "8e25e9b2",8446: "258b4bdf",8447: "8b1ed7ee",8481: "22cf2668",8578: "76841140",8730: "643aa64e",884: "3efe743d",8946: "4aa8e0b8",8967: "4f603f2d",9030: "3033863c",9207: "a8333c2b",9329: "a26e459e",9367: "646e0058",9505: "bc52ba6d",9570: "7c860ade",9613: "20bbd4f2",9633: "ef16c55c",9637: "bead3df5",976: "c9922f1c",9802: "fccedc5a",9898: "f897ee3b",}[chunkId] + ".js"
}
}();
// webpack/runtime/global
!function() {
__webpack_require__.g = (function() {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
}();
// webpack/runtime/has_own_property
!function() {
__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
}();
// webpack/runtime/load_script
!function() {
var inProgress = {};

var uniqueName = "vue-admin-better:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-rspack") == uniqueName + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		script = document.createElement('script');

script.timeout = 120;
if (__webpack_require__.nc) {
  script.setAttribute("nonce", __webpack_require__.nc);
}

script.setAttribute("data-rspack", uniqueName + key);



script.src = url;


	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

}();
// webpack/runtime/make_namespace_object
!function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
}();
// webpack/runtime/node_module_decorator
!function() {
__webpack_require__.nmd = function(module) {
  module.paths = [];
  if (!module.children) module.children = [];
  return module;
};
}();
// webpack/runtime/nonce
!function() {
__webpack_require__.nc = undefined;
}();
// webpack/runtime/on_chunk_loaded
!function() {
var deferred = [];
__webpack_require__.O = function(result, chunkIds, fn, priority) {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var chunkIds = deferred[i][0];
var fn = deferred[i][1];
var priority = deferred[i][2];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

}();
// webpack/runtime/public_path
!function() {
__webpack_require__.p = "";
}();
// webpack/runtime/jsonp_chunk_loading
!function() {
__webpack_require__.b = document.baseURI || self.location.href;

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {9509: 0,};
      
        __webpack_require__.f.j = function (chunkId, promises) {
          // JSONP chunk loading for javascript
var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
	? installedChunks[chunkId]
	: undefined;
if (installedChunkData !== 0) {
	// 0 means "already installed".

	// a Promise means "currently loading".
	if (installedChunkData) {
		promises.push(installedChunkData[2]);
	} else {
		if (true) {
			// setup Promise in chunk cache
			var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
			promises.push((installedChunkData[2] = promise));

			// start chunk loading
			var url = __webpack_require__.p + __webpack_require__.u(chunkId);
			// create error before stack unwound to get useful stacktrace later
			var error = new Error();
			var loadingEnded = function (event) {
				if (__webpack_require__.o(installedChunks, chunkId)) {
					installedChunkData = installedChunks[chunkId];
					if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
					if (installedChunkData) {
						var errorType =
							event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						error.message =
							'Loading chunk ' +
							chunkId +
							' failed.\n(' +
							errorType +
							': ' +
							realSrc +
							')';
						error.name = 'ChunkLoadError';
						error.type = errorType;
						error.request = realSrc;
						installedChunkData[1](error);
					}
				}
			};
			__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
		} 
	}
}

        }
        __webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
// install a JSONP callback for chunk loading
var __rspack_jsonp = function(parentChunkLoadingFunction, data) {
	var chunkIds = data[0];
var moreModules = data[1];
var runtime = data[2];
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	
	return __webpack_require__.O(result);
	
};

var chunkLoadingGlobal = self["rspackChunkvue_admin_better"] = self["rspackChunkvue_admin_better"] || [];
chunkLoadingGlobal.forEach(__rspack_jsonp.bind(null, 0));
chunkLoadingGlobal.push = __rspack_jsonp.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

}();
// module factories are used so entry inlining is disabled
// startup
// Load entry module and return exports
var __webpack_exports__ = __webpack_require__.O(undefined, ["4014", "4569", "1545", "2529", "8306", "4264"], function() { return __webpack_require__(24941) });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;