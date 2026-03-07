/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2026-3-7 06:31:43
 */
(function() {
var __webpack_modules__ = ({
18834: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getList: function() { return getList; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(26359);

function getList() {
  return (0,_utils_request__rspack_import_0["default"])({
    url: 'https://api.vuejs-core.cn/getAd',
    method: 'get'
  });
}

}),
76003: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getPublicKey: function() { return getPublicKey; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(26359);

function getPublicKey() {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/publicKey',
    method: 'post'
  });
}

}),
17418: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getRouterList: function() { return getRouterList; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(26359);

function getRouterList(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/menu/navigate',
    method: 'post',
    data
  });
}

}),
42068: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getUserInfo: function() { return getUserInfo; },
  login: function() { return login; },
  logout: function() { return logout; },
  register: function() { return register; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(26359);
/* import */ var _utils_encrypt__rspack_import_1 = __webpack_require__(22443);
/* import */ var _config__rspack_import_2 = __webpack_require__(36239);
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
36239: (function (module, __unused_rspack_exports, __webpack_require__) {
/**
 * @description 3个子配置，通用配置|主题配置|网络配置导出
 */
const setting = __webpack_require__(4667);
const theme = __webpack_require__(24884);
const network = __webpack_require__(19418);
module.exports = Object.assign({}, setting, theme, network);

}),
19418: (function (module) {
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
90480: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0 = __webpack_require__(96175);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_1 = __webpack_require__(26740);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__rspack_import_1);
/* import */ var _router__rspack_import_2 = __webpack_require__(62616);
/* import */ var _store__rspack_import_3 = __webpack_require__(45830);
/* import */ var nprogress__rspack_import_4 = __webpack_require__(58744);
/* import */ var nprogress__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(nprogress__rspack_import_4);
/* import */ var nprogress_nprogress_css__rspack_import_5 = __webpack_require__(58756);
/* import */ var _utils_pageTitle__rspack_import_6 = __webpack_require__(97245);
/* import */ var _config__rspack_import_7 = __webpack_require__(36239);
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
4667: (function (module) {
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
24884: (function (module) {
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
30347: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_6 = __webpack_require__(15091);
/* import */ var _App__rspack_import_0 = __webpack_require__(14473);
/* import */ var _store__rspack_import_1 = __webpack_require__(45830);
/* import */ var _router__rspack_import_2 = __webpack_require__(62616);
/* import */ var _plugins__rspack_import_3 = __webpack_require__(37339);
/* import */ var _layouts_export__rspack_import_4 = __webpack_require__(24520);
/* import */ var _utils_printInfo__rspack_import_5 = __webpack_require__(19169);








/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

// 检测环境变量或默认使用mock
const useMock =  true || 0;
if (useMock) {
  // 使用动态import替代require
  Promise.all(/* import() */ [__webpack_require__.e("8447"), __webpack_require__.e("5179")]).then(__webpack_require__.bind(__webpack_require__, 38710)).then(({
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
59871: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_2 = __webpack_require__(15091);
/* import */ var element_ui__rspack_import_0 = __webpack_require__(61093);
/* import */ var element_ui__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(element_ui__rspack_import_0);
/* import */ var element_ui_lib_theme_chalk_index_css__rspack_import_1 = __webpack_require__(87415);



vue__rspack_import_2["default"].use((element_ui__rspack_import_0_default()), {
  size: 'small'
});

}),
37339: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_8 = __webpack_require__(15091);
/* import */ var _element__rspack_import_0 = __webpack_require__(59871);
/* import */ var _support__rspack_import_1 = __webpack_require__(97164);
/* import */ var _styles_vab_scss__rspack_import_2 = __webpack_require__(51314);
/* import */ var _config_permission__rspack_import_3 = __webpack_require__(90480);
/* import */ var _utils_errorLog__rspack_import_4 = __webpack_require__(63012);
/* import */ var _vabIcon__rspack_import_5 = __webpack_require__(86875);
/* import */ var layouts_Permissions__rspack_import_6 = __webpack_require__(10458);
/* import */ var _utils_vab__rspack_import_7 = __webpack_require__(5659);
/* 公共引入,勿随意修改,修改时需经过确认 */









vue__rspack_import_8["default"].use(_utils_vab__rspack_import_7["default"]);
vue__rspack_import_8["default"].use(layouts_Permissions__rspack_import_6["default"]);

}),
97164: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
86875: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_1 = __webpack_require__(15091);
/* import */ var vab_icon__rspack_import_0 = __webpack_require__(70568);
/* import */ var vab_icon__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(vab_icon__rspack_import_0);


vue__rspack_import_1["default"].component('VabIcon', (vab_icon__rspack_import_0_default()));

}),
62616: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  asyncRoutes: function() { return asyncRoutes; },
  constantRoutes: function() { return constantRoutes; },
  resetRouter: function() { return resetRouter; }
});
/* import */ var vue__rspack_import_3 = __webpack_require__(15091);
/* import */ var vue_router__rspack_import_4 = __webpack_require__(82666);
/* import */ var _layouts__rspack_import_0 = __webpack_require__(62386);
/* import */ var _layouts_EmptyLayout__rspack_import_1 = __webpack_require__(41255);
/* import */ var _config__rspack_import_2 = __webpack_require__(36239);
/* import */ var _config__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_2);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到，vip文档中已提供路由的基础图标与小清新图标的配置方案，请仔细阅读
 */






vue__rspack_import_3["default"].use(vue_router__rspack_import_4["default"]);
const constantRoutes = [{
  path: '/login',
  component: () => __webpack_require__.e(/* import() */ "5289").then(__webpack_require__.bind(__webpack_require__, 75712)),
  hidden: true
}, {
  path: '/register',
  component: () => __webpack_require__.e(/* import() */ "2292").then(__webpack_require__.bind(__webpack_require__, 3503)),
  hidden: true
}, {
  path: '/401',
  name: '401',
  component: () => __webpack_require__.e(/* import() */ "6412").then(__webpack_require__.bind(__webpack_require__, 90567)),
  hidden: true
}, {
  path: '/404',
  name: '404',
  component: () => __webpack_require__.e(/* import() */ "6326").then(__webpack_require__.bind(__webpack_require__, 82869)),
  hidden: true
}];
const asyncRoutes = [{
  path: '/',
  component: _layouts__rspack_import_0["default"],
  redirect: '/index',
  children: [{
    path: 'index',
    name: 'Index',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("3322"), __webpack_require__.e("2865"), __webpack_require__.e("1728"), __webpack_require__.e("4375"), __webpack_require__.e("3238"), __webpack_require__.e("6589"), __webpack_require__.e("4684"), __webpack_require__.e("2643"), __webpack_require__.e("8226"), __webpack_require__.e("6185"), __webpack_require__.e("9505"), __webpack_require__.e("9898"), __webpack_require__.e("9367"), __webpack_require__.e("6304"), __webpack_require__.e("7933"), __webpack_require__.e("640")]).then(__webpack_require__.bind(__webpack_require__, 7347)),
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
    component: () => Promise.all(/* import() */ [__webpack_require__.e("3322"), __webpack_require__.e("2865"), __webpack_require__.e("1728"), __webpack_require__.e("4375"), __webpack_require__.e("3238"), __webpack_require__.e("6589"), __webpack_require__.e("4684"), __webpack_require__.e("2643"), __webpack_require__.e("8226"), __webpack_require__.e("6185"), __webpack_require__.e("9505"), __webpack_require__.e("9898"), __webpack_require__.e("9367"), __webpack_require__.e("6304"), __webpack_require__.e("7933"), __webpack_require__.e("6426")]).then(__webpack_require__.bind(__webpack_require__, 49937)),
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
    component: () => __webpack_require__.e(/* import() */ "6005").then(__webpack_require__.bind(__webpack_require__, 32692)),
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
      component: () => Promise.all(/* import() */ [__webpack_require__.e("3322"), __webpack_require__.e("2865"), __webpack_require__.e("1728"), __webpack_require__.e("4375"), __webpack_require__.e("3238"), __webpack_require__.e("6589"), __webpack_require__.e("4684"), __webpack_require__.e("2643"), __webpack_require__.e("8226"), __webpack_require__.e("6185"), __webpack_require__.e("9505"), __webpack_require__.e("9898"), __webpack_require__.e("9367"), __webpack_require__.e("6304"), __webpack_require__.e("7933"), __webpack_require__.e("1545")]).then(__webpack_require__.bind(__webpack_require__, 11104)),
      meta: {
        title: '常规图标'
      }
    }, {
      path: 'colorfulIcon',
      name: 'ColorfulIcon',
      component: () => Promise.all(/* import() */ [__webpack_require__.e("3322"), __webpack_require__.e("2865"), __webpack_require__.e("1728"), __webpack_require__.e("4375"), __webpack_require__.e("3238"), __webpack_require__.e("6589"), __webpack_require__.e("4684"), __webpack_require__.e("2643"), __webpack_require__.e("8226"), __webpack_require__.e("6185"), __webpack_require__.e("9505"), __webpack_require__.e("9898"), __webpack_require__.e("9367"), __webpack_require__.e("6304"), __webpack_require__.e("7933"), __webpack_require__.e("6606")]).then(__webpack_require__.bind(__webpack_require__, 39885)),
      meta: {
        title: '多彩图标'
      }
    }]
  }, {
    path: 'table',
    component: () => __webpack_require__.e(/* import() */ "7704").then(__webpack_require__.bind(__webpack_require__, 80779)),
    name: 'Table',
    meta: {
      title: '表格',
      permissions: ['admin']
    }
  }, {
    path: 'webSocket',
    name: 'WebSocket',
    component: () => __webpack_require__.e(/* import() */ "2459").then(__webpack_require__.bind(__webpack_require__, 54902)),
    meta: {
      title: 'webSocket',
      permissions: ['admin']
    }
  }, {
    path: 'form',
    name: 'Form',
    component: () => __webpack_require__.e(/* import() */ "4874").then(__webpack_require__.bind(__webpack_require__, 81809)),
    meta: {
      title: '表单',
      permissions: ['admin']
    }
  }, {
    path: 'element',
    name: 'Element',
    component: () => __webpack_require__.e(/* import() */ "5695").then(__webpack_require__.bind(__webpack_require__, 32738)),
    meta: {
      title: '常用组件',
      permissions: ['admin']
    }
  }, {
    path: 'tree',
    name: 'Tree',
    component: () => __webpack_require__.e(/* import() */ "3621").then(__webpack_require__.bind(__webpack_require__, 36676)),
    meta: {
      title: '树',
      permissions: ['admin']
    }
  }, {
    path: 'menu1',
    component: () => __webpack_require__.e(/* import() */ "3885").then(__webpack_require__.bind(__webpack_require__, 20380)),
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
      component: () => __webpack_require__.e(/* import() */ "8738").then(__webpack_require__.bind(__webpack_require__, 83753)),
      children: [{
        path: 'menu1-1-1',
        name: 'Menu1-1-1',
        meta: {
          title: '嵌套路由 1-1-1'
        },
        component: () => __webpack_require__.e(/* import() */ "573").then(__webpack_require__.bind(__webpack_require__, 27580))
      }]
    }]
  }, {
    path: 'loading',
    name: 'Loading',
    component: () => __webpack_require__.e(/* import() */ "5836").then(__webpack_require__.bind(__webpack_require__, 27623)),
    meta: {
      title: 'loading',
      permissions: ['admin']
    }
  }, {
    path: 'backToTop',
    name: 'BackToTop',
    component: () => __webpack_require__.e(/* import() */ "3412").then(__webpack_require__.bind(__webpack_require__, 68463)),
    meta: {
      title: '返回顶部',
      permissions: ['admin']
    }
  }, {
    path: 'lodash',
    name: 'Lodash',
    component: () => __webpack_require__.e(/* import() */ "7214").then(__webpack_require__.bind(__webpack_require__, 57949)),
    meta: {
      title: 'lodash',
      permissions: ['admin']
    }
  }, {
    path: 'upload',
    name: 'Upload',
    component: () => __webpack_require__.e(/* import() */ "5469").then(__webpack_require__.bind(__webpack_require__, 1756)),
    meta: {
      title: '上传',
      permissions: ['admin']
    }
  }, {
    path: 'log',
    name: 'Log',
    component: () => __webpack_require__.e(/* import() */ "6029").then(__webpack_require__.bind(__webpack_require__, 94540)),
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
    component: () => __webpack_require__.e(/* import() */ "6375").then(__webpack_require__.bind(__webpack_require__, 78170)),
    meta: {
      title: '关于',
      permissions: ['admin']
    }
  }, {
    path: 'chart',
    name: 'Chart',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("3322"), __webpack_require__.e("2865"), __webpack_require__.e("1728"), __webpack_require__.e("4375"), __webpack_require__.e("3238"), __webpack_require__.e("6589"), __webpack_require__.e("4684"), __webpack_require__.e("2643"), __webpack_require__.e("8226"), __webpack_require__.e("6185"), __webpack_require__.e("9505"), __webpack_require__.e("9898"), __webpack_require__.e("9367"), __webpack_require__.e("6304"), __webpack_require__.e("7933"), __webpack_require__.e("3343")]).then(__webpack_require__.bind(__webpack_require__, 1074)),
    meta: {
      title: '图表',
      permissions: ['admin']
    }
  }, {
    path: 'tab',
    name: 'Tab',
    component: () => __webpack_require__.e(/* import() */ "1069").then(__webpack_require__.bind(__webpack_require__, 36524)),
    meta: {
      title: '选项卡',
      permissions: ['admin']
    }
  }, {
    path: 'editor',
    name: 'Editor',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("5576"), __webpack_require__.e("1607")]).then(__webpack_require__.bind(__webpack_require__, 506)),
    meta: {
      title: '编辑器',
      permissions: ['admin']
    }
  }, {
    path: 'qrCode',
    name: 'QrCode',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("2649"), __webpack_require__.e("6354")]).then(__webpack_require__.bind(__webpack_require__, 39385)),
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
    component: () => __webpack_require__.e(/* import() */ "4502").then(__webpack_require__.bind(__webpack_require__, 72981)),
    meta: {
      title: '用户管理'
    }
  }, {
    path: 'roleManagement',
    name: 'RoleManagement',
    component: () => __webpack_require__.e(/* import() */ "5947").then(__webpack_require__.bind(__webpack_require__, 91814)),
    meta: {
      title: '角色管理'
    }
  }, {
    path: 'menuManagement',
    name: 'MenuManagement',
    component: () => __webpack_require__.e(/* import() */ "2602").then(__webpack_require__.bind(__webpack_require__, 99297)),
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
    component: () => __webpack_require__.e(/* import() */ "8094").then(__webpack_require__.bind(__webpack_require__, 87869)),
    meta: {
      title: '支付',
      noKeepAlive: true
    },
    children: null
  }, {
    path: 'goodsList',
    name: 'GoodsList',
    component: () => __webpack_require__.e(/* import() */ "2502").then(__webpack_require__.bind(__webpack_require__, 30549)),
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
    component: () => __webpack_require__.e(/* import() */ "6412").then(__webpack_require__.bind(__webpack_require__, 90567)),
    meta: {
      title: '401'
    }
  }, {
    path: '404',
    name: 'Error404',
    component: () => __webpack_require__.e(/* import() */ "6326").then(__webpack_require__.bind(__webpack_require__, 82869)),
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
    component: () => __webpack_require__.e(/* import() */ "3513").then(__webpack_require__.bind(__webpack_require__, 77168)),
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
45830: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0 = __webpack_require__(96175);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_1 = __webpack_require__(26740);
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
9998: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_array_push_js__rspack_import_0 = __webpack_require__(3842);
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
70348: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var _router__rspack_import_0 = __webpack_require__(62616);
/* import */ var _api_router__rspack_import_1 = __webpack_require__(17418);
/* import */ var _utils_handleRoutes__rspack_import_2 = __webpack_require__(42872);
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
9415: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_json_parse_js__rspack_import_0 = __webpack_require__(41928);
/* import */ var core_js_modules_es_json_parse_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_parse_js__rspack_import_0);
/* import */ var _config__rspack_import_1 = __webpack_require__(36239);
/* import */ var _config__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_1);

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
} = (_config__rspack_import_1_default());
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
61092: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
39341: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_array_push_js__rspack_import_0 = __webpack_require__(3842);
/* import */ var core_js_modules_es_array_push_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_1 = __webpack_require__(96175);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_1);
/* import */ var core_js_modules_es_iterator_filter_js__rspack_import_2 = __webpack_require__(69865);
/* import */ var core_js_modules_es_iterator_filter_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__rspack_import_2);
/* import */ var core_js_modules_es_iterator_find_js__rspack_import_3 = __webpack_require__(36068);
/* import */ var core_js_modules_es_iterator_find_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_find_js__rspack_import_3);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_4 = __webpack_require__(26740);
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
33037: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_4 = __webpack_require__(15091);
/* import */ var _api_user__rspack_import_0 = __webpack_require__(42068);
/* import */ var _utils_accessToken__rspack_import_1 = __webpack_require__(86237);
/* import */ var _router__rspack_import_2 = __webpack_require__(62616);
/* import */ var _config__rspack_import_3 = __webpack_require__(36239);
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
86237: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getAccessToken: function() { return getAccessToken; },
  removeAccessToken: function() { return removeAccessToken; },
  setAccessToken: function() { return setAccessToken; }
});
/* import */ var _config__rspack_import_0 = __webpack_require__(36239);
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
22443: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  decryptedData: function() { return decryptedData; },
  encryptedData: function() { return encryptedData; }
});
/* import */ var core_js_modules_es_json_stringify_js__rspack_import_0 = __webpack_require__(27622);
/* import */ var core_js_modules_es_json_stringify_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__rspack_import_0);
/* import */ var jsencrypt__rspack_import_2 = __webpack_require__(33341);
/* import */ var _api_publicKey__rspack_import_1 = __webpack_require__(76003);



const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMFPa+v52FkSUXvcUnrGI/XzW3EpZRI0s9BCWJ3oNQmEYA5luWW5p8h0uadTIoTyYweFPdH4hveyxlwmS7oefvbIdiP+o+QIYW/R4Wjsb4Yl8MhR4PJqUE3RCy6IT9fM8ckG4kN9ECs6Ja8fQFc6/mSl5dJczzJO3k1rWMBhKJD/AgMBAAECgYEAucMakH9dWeryhrYoRHcXo4giPVJsH9ypVt4KzmOQY/7jV7KFQK3x//27UoHfUCak51sxFw9ek7UmTPM4HjikA9LkYeE7S381b4QRvFuf3L6IbMP3ywJnJ8pPr2l5SqQ00W+oKv+w/VmEsyUHr+k4Z+4ik+FheTkVWp566WbqFsECQQDjYaMcaKw3j2Zecl8T6eUe7fdaRMIzp/gcpPMfT/9rDzIQk+7ORvm1NI9AUmFv/FAlfpuAMrdL2n7p9uznWb7RAkEA2aP934kbXg5bdV0R313MrL+7WTK/qdcYxATUbMsMuWWQBoS5irrt80WCZbG48hpocJavLNjbtrjmUX3CuJBmzwJAOJg8uP10n/+ZQzjEYXh+BszEHDuw+pp8LuT/fnOy5zrJA0dO0RjpXijO3vuiNPVgHXT9z1LQPJkNrb5ACPVVgQJBALPeb4uV0bNrJDUb5RB4ghZnIxv18CcaqNIft7vuGCcFBAIPIRTBprR+RuVq+xHDt3sNXdsvom4h49+Hky1b0ksCQBBwUtVaqH6ztCtwUF1j2c/Zcrt5P/uN7IHAd44K0gIJc1+Csr3qPG+G2yoqRM8KVqLI8Z2ZYn9c+AvEE+L9OQY=';

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description RSA加密
 * @param data
 * @returns {Promise<{param: PromiseLike<ArrayBuffer>}|*>}
 */
async function encryptedData(data) {
  let publicKey = '';
  const res = await (0,_api_publicKey__rspack_import_1.getPublicKey)();
  publicKey = res.data.publicKey;
  if (res.data.mockServer) {
    publicKey = '';
  }
  if (publicKey == '') {
    return data;
  }
  const encrypt = new jsencrypt__rspack_import_2["default"]();
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
  const decrypt = new jsencrypt__rspack_import_2["default"]();
  decrypt.setPrivateKey(`-----BEGIN RSA PRIVATE KEY-----${privateKey}-----END RSA PRIVATE KEY-----`);
  data = decrypt.decrypt(JSON.stringify(data));
  return data;
}

}),
63012: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_3 = __webpack_require__(15091);
/* import */ var _store__rspack_import_0 = __webpack_require__(45830);
/* import */ var _utils_validate__rspack_import_2 = __webpack_require__(41538);
/* import */ var _config__rspack_import_1 = __webpack_require__(36239);
/* import */ var _config__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_1);




const needErrorLog = _config__rspack_import_1.errorLog;
const checkNeed = () => {
  const env = "production";
  if ((0,_utils_validate__rspack_import_2.isString)(needErrorLog)) {
    return env === needErrorLog;
  }
  if ((0,_utils_validate__rspack_import_2.isArray)(needErrorLog)) {
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
  vue__rspack_import_3["default"].config.errorHandler = (err, vm, info) => {
    // 过滤Chrome扩展相关错误
    if (isChromeExtensionError(err)) {
      return;
    }
    console.error('vue-admin-better错误拦截:', err, vm, info);
    const url = window.location.href;
    vue__rspack_import_3["default"].nextTick(() => {
      _store__rspack_import_0["default"].dispatch('errorLog/addErrorLog', {
        err,
        vm,
        info,
        url
      });
    });
  };
}

}),
42872: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  convertRouter: function() { return convertRouter; },
  filterAsyncRoutes: function() { return filterAsyncRoutes; }
});
/* import */ var core_js_modules_es_array_push_js__rspack_import_0 = __webpack_require__(3842);
/* import */ var core_js_modules_es_array_push_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_1 = __webpack_require__(96175);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_1);
/* import */ var core_js_modules_es_iterator_filter_js__rspack_import_2 = __webpack_require__(69865);
/* import */ var core_js_modules_es_iterator_filter_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__rspack_import_2);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_3 = __webpack_require__(26740);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__rspack_import_3);
/* import */ var core_js_modules_es_iterator_map_js__rspack_import_4 = __webpack_require__(21397);
/* import */ var core_js_modules_es_iterator_map_js__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__rspack_import_4);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_5 = __webpack_require__(27547);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__rspack_import_5);






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
        route.component = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 62386));
      } else if (route.component === 'EmptyLayout') {
        route.component = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 41255));
      } else {
        try {
          const index = route.component.indexOf('views');
          const path = index > 0 ? route.component.slice(index) : `views/${route.component}`;
          route.component = () => __webpack_require__(59140)(`./${path}`).catch(err => {
            console.error(`路由组件加载失败: @/${path}`, err);
            return __webpack_require__.e(/* import() */ "6326").then(__webpack_require__.bind(__webpack_require__, 82869));
          });
        } catch (err) {
          console.error(`路由组件解析失败: ${route.component}`, err);
          route.component = () => __webpack_require__.e(/* import() */ "6326").then(__webpack_require__.bind(__webpack_require__, 82869));
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
97245: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return getPageTitle; }
});
/* import */ var _config__rspack_import_0 = __webpack_require__(36239);
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
19169: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
26359: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_array_push_js__rspack_import_0 = __webpack_require__(3842);
/* import */ var core_js_modules_es_array_push_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_1 = __webpack_require__(96175);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_1);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_2 = __webpack_require__(27547);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__rspack_import_2);
/* import */ var core_js_modules_es_json_stringify_js__rspack_import_3 = __webpack_require__(27622);
/* import */ var core_js_modules_es_json_stringify_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__rspack_import_3);
/* import */ var vue__rspack_import_7 = __webpack_require__(15091);
/* import */ var axios__rspack_import_8 = __webpack_require__(84227);
/* import */ var _config__rspack_import_4 = __webpack_require__(36239);
/* import */ var _config__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_4);
/* import */ var _store__rspack_import_5 = __webpack_require__(45830);
/* import */ var qs__rspack_import_9 = __webpack_require__(27527);
/* import */ var qs__rspack_import_9_default = /*#__PURE__*/__webpack_require__.n(qs__rspack_import_9);
/* import */ var _router__rspack_import_6 = __webpack_require__(62616);
/* import */ var _utils_validate__rspack_import_10 = __webpack_require__(41538);











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
5659: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var _config__rspack_import_0 = __webpack_require__(36239);
/* import */ var _config__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_0);
/* import */ var lodash__rspack_import_1 = __webpack_require__(69345);
/* import */ var lodash__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(lodash__rspack_import_1);
/* import */ var element_ui__rspack_import_2 = __webpack_require__(61093);
/* import */ var element_ui__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(element_ui__rspack_import_2);
/* import */ var _store__rspack_import_3 = __webpack_require__(45830);
/* import */ var _utils_accessToken__rspack_import_4 = __webpack_require__(86237);





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
41538: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
14473: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.29_css-loader@7.1.4_@rspack+core@1.7.7_webpack@_b0a877bbe96af4e11f0efca5e4d401bc/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.29_css-loader@7.1.4_@rspack+core@1.7.7_webpack@_b0a877bbe96af4e11f0efca5e4d401bc/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=0607e7a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"vue-admin-better"}},[_c('router-view')],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.1.0_@babel+core@7.29.0_@rspack+core@1.7.7_webpack@5.105.4/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.29_css-loader@7.1.4_@rspack+core@1.7.7_webpack@_b0a877bbe96af4e11f0efca5e4d401bc/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
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
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.29_css-loader@7.1.4_@rspack+core@1.7.7_webpack@_b0a877bbe96af4e11f0efca5e4d401bc/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10249);
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
  "./VabAd/index.vue": "79303",
  "./VabAppMain/index.vue": "2727",
  "./VabAvatar/index.vue": "66310",
  "./VabBreadcrumb/index.vue": "12915",
  "./VabColorfullIcon/index.vue": "80064",
  "./VabErrorLog/index.vue": "355",
  "./VabFullScreen/index.vue": "31815",
  "./VabGithubCorner/index.vue": "38029",
  "./VabLogo/index.vue": "14323",
  "./VabNav/index.vue": "77899",
  "./VabQueryForm/VabQueryFormBottomPanel.vue": "27847",
  "./VabQueryForm/VabQueryFormLeftPanel.vue": "91146",
  "./VabQueryForm/VabQueryFormRightPanel.vue": "24403",
  "./VabQueryForm/VabQueryFormTopPanel.vue": "8133",
  "./VabQueryForm/index.vue": "53396",
  "./VabSide/components/VabMenuItem.vue": "13609",
  "./VabSide/components/VabSideItem.vue": "88538",
  "./VabSide/components/VabSubmenu.vue": "18946",
  "./VabSide/index.vue": "15145",
  "./VabTabs/index.vue": "27412",
  "./VabTheme/index.vue": "28654",
  "./VabTop/index.vue": "72288"
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
__rspack_context.keys = function webpackContextKeys() {
  return Object.keys(map);
};
__rspack_context.resolve = __rspack_context_resolve;
module.exports = __rspack_context;
__rspack_context.id = 5268;


}),
78043: (function (module, __unused_rspack_exports, __webpack_require__) {
var map = {
  "./errorLog.js": "9998",
  "./routes.js": "70348",
  "./settings.js": "9415",
  "./table.js": "61092",
  "./tabsBar.js": "39341",
  "./user.js": "33037"
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
__rspack_context.keys = function webpackContextKeys() {
  return Object.keys(map);
};
__rspack_context.resolve = __rspack_context_resolve;
module.exports = __rspack_context;
__rspack_context.id = 78043;


}),
25605: (function (module, __unused_rspack_exports, __webpack_require__) {
var map = {
  "./default.scss": "21025"
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
__rspack_context.keys = function webpackContextKeys() {
  return Object.keys(map);
};
__rspack_context.resolve = __rspack_context_resolve;
module.exports = __rspack_context;
__rspack_context.id = 25605;


}),
59140: (function (module, __unused_rspack_exports, __webpack_require__) {
var map = {
  "./layouts/components/VabAd": [
    "79303",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormBottomPanel.vue": [
    "27847",
    9
  ],
  "./styles/themes/default.scss": [
    "21025",
    9
  ],
  "./views/vab/webSocket/index.vue": [
    "54902",
    9,
    "2459"
  ],
  "./store/": [
    "45830",
    9
  ],
  "./layouts/components/VabSide": [
    "15145",
    9
  ],
  "./views/vab/table/index.vue": [
    "80779",
    9,
    "7704"
  ],
  "./views/stock/": [
    "49937",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "6426"
  ],
  "./assets/vuejs-fill.svg": [
    "55762",
    1,
    "2591"
  ],
  "./config": [
    "36239",
    7
  ],
  "./views/vab/errorLog": [
    "94540",
    9,
    "6029"
  ],
  "./views/register/index.vue": [
    "3503",
    9,
    "2292"
  ],
  "./views/vab/table/": [
    "80779",
    9,
    "7704"
  ],
  "./layouts/components/VabAvatar": [
    "66310",
    9
  ],
  "./views/vab/errorLog/components/ErrorTest.vue": [
    "15683",
    9,
    "1440"
  ],
  "./api/personalCenter.js": [
    "2414",
    9,
    "7923"
  ],
  "./components/VabUpload": [
    "2842",
    9,
    "311"
  ],
  "./layouts/components/VabAppMain/index": [
    "2727",
    9
  ],
  "./layouts/components/VabSide/": [
    "15145",
    9
  ],
  "./layouts/components/VabSide/index": [
    "15145",
    9
  ],
  "./views/personnelManagement/userManagement/index.vue": [
    "72981",
    9,
    "4502"
  ],
  "./views/vab/chart/": [
    "1074",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "3343"
  ],
  "./views/mall/goodsList": [
    "30549",
    9,
    "2502"
  ],
  "./views/vab/nested/menu1": [
    "20380",
    9,
    "3885"
  ],
  "./views/vab/tab": [
    "36524",
    9,
    "1069"
  ],
  "./views/register/index": [
    "3503",
    9,
    "2292"
  ],
  "./api/ad.js": [
    "18834",
    9
  ],
  "./views/personnelManagement/roleManagement/index.vue": [
    "91814",
    9,
    "5947"
  ],
  "./views/register/": [
    "3503",
    9,
    "2292"
  ],
  "./api/icon": [
    "75926",
    9,
    "1739"
  ],
  "./components/VabProfile/index.vue": [
    "3605",
    9,
    "2854"
  ],
  "./views/personnelManagement/roleManagement/index": [
    "91814",
    9,
    "5947"
  ],
  "./plugins": [
    "37339",
    9
  ],
  "./layouts/components/VabGithubCorner": [
    "38029",
    9
  ],
  "./layouts/components/VabAppMain/": [
    "2727",
    9
  ],
  "./views/vab/tab/index": [
    "36524",
    9,
    "1069"
  ],
  "./utils/validate.js": [
    "41538",
    9
  ],
  "./layouts/components/VabBreadcrumb": [
    "12915",
    9
  ],
  "./layouts/components/VabLogo/index": [
    "14323",
    9
  ],
  "./views/vab/loading/": [
    "27623",
    9,
    "5836"
  ],
  "./layouts/components/VabAd/": [
    "79303",
    9
  ],
  "./api/user.js": [
    "42068",
    9
  ],
  "./components/SelectTree/index": [
    "69748",
    9,
    "1061"
  ],
  "./views/mall/goodsList/index.vue": [
    "30549",
    9,
    "2502"
  ],
  "./styles/spinner/inner-circles.css": [
    "31319",
    9,
    "4014"
  ],
  "./layouts/components/VabTop/index.vue": [
    "72288",
    9
  ],
  "./layouts/components/VabColorfullIcon/": [
    "80064",
    9
  ],
  "./components/SelectTree": [
    "69748",
    9,
    "1061"
  ],
  "./views/vab/nested/menu1/menu1-1/": [
    "83753",
    9,
    "8738"
  ],
  "./layouts/components/VabFullScreen": [
    "31815",
    9
  ],
  "./views/vab/tree/": [
    "36676",
    9,
    "3621"
  ],
  "./layouts/components/VabErrorLog/": [
    "355",
    9
  ],
  "./layouts/components/VabSide/components/VabMenuItem.vue": [
    "13609",
    9
  ],
  "./views/vab/chart": [
    "1074",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "3343"
  ],
  "./utils/encrypt.js": [
    "22443",
    9
  ],
  "./layouts": [
    "62386",
    9
  ],
  "./utils/handleRoutes.js": [
    "42872",
    9
  ],
  "./views/vab/permissions": [
    "32692",
    9,
    "6005"
  ],
  "./store/modules/tabsBar.js": [
    "39341",
    9
  ],
  "./views/index": [
    "7347",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "640"
  ],
  "./views/personnelManagement/userManagement/": [
    "72981",
    9,
    "4502"
  ],
  "./plugins/echarts": [
    "45721",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "50"
  ],
  "./views/personnelManagement/userManagement/index": [
    "72981",
    9,
    "4502"
  ],
  "./views/vab/backToTop": [
    "68463",
    9,
    "3412"
  ],
  "./views/vab/chart/index": [
    "1074",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "3343"
  ],
  "./views/vab/qrCode": [
    "39385",
    9,
    "2649",
    "6354"
  ],
  "./views/vab/tab/": [
    "36524",
    9,
    "1069"
  ],
  "./views/mall/pay/components/Step2.vue": [
    "11448",
    9,
    "6561"
  ],
  "./views/vab/table/components/TableEdit.vue": [
    "27063",
    9,
    "1436"
  ],
  "./layouts/components/VabErrorLog/index": [
    "355",
    9
  ],
  "./layouts/components/VabSide/components/VabSubmenu.vue": [
    "18946",
    9
  ],
  "./views/mall/pay/components/Step3": [
    "1827",
    9,
    "3680"
  ],
  "./config/setting.config": [
    "4667",
    7
  ],
  "./views/personnelManagement/menuManagement/components/MenuManagementEdit": [
    "53057",
    9,
    "3562"
  ],
  "./views/personnelManagement/roleManagement/components/RoleManagementEdit": [
    "49730",
    9,
    "3215"
  ],
  "./api/table.js": [
    "49479",
    9,
    "5484"
  ],
  "./views/mall/pay/index": [
    "87869",
    9,
    "8094"
  ],
  "./config/index": [
    "36239",
    7
  ],
  "./api/markdown": [
    "24902",
    9,
    "2555"
  ],
  "./layouts/components/VabQueryForm/": [
    "53396",
    9
  ],
  "./views/vab/element/index.vue": [
    "32738",
    9,
    "5695"
  ],
  "./layouts/components/VabQueryForm": [
    "53396",
    9
  ],
  "./views/vab/nested/menu1/": [
    "20380",
    9,
    "3885"
  ],
  "./config/index.js": [
    "36239",
    7
  ],
  "./layouts/EmptyLayout": [
    "41255",
    9
  ],
  "./layouts/components/VabTheme/": [
    "28654",
    9
  ],
  "./components/SelectTree/index.vue": [
    "69748",
    9,
    "1061"
  ],
  "./api/icon.js": [
    "75926",
    9,
    "1739"
  ],
  "./layouts/components/VabLogo": [
    "14323",
    9
  ],
  "./utils/pageTitle.js": [
    "97245",
    9
  ],
  "./assets/zfb_kf.jpg": [
    "93246",
    1,
    "1027"
  ],
  "./store/modules/table.js": [
    "61092",
    9
  ],
  "./views/index/": [
    "7347",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "640"
  ],
  "./views/index/index": [
    "7347",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "640"
  ],
  "./components/VabPageHeader/index": [
    "92084",
    9,
    "2917"
  ],
  "./views/personnelManagement/userManagement": [
    "72981",
    9,
    "4502"
  ],
  "./plugins/index": [
    "37339",
    9
  ],
  "./views/index/components/VersionInformation": [
    "76055",
    9,
    "6716"
  ],
  "./api/roleManagement.js": [
    "41820",
    9,
    "8109"
  ],
  "./views/vab/upload/index.vue": [
    "1756",
    9,
    "5469"
  ],
  "./assets/error_images/cloud.png": [
    "69369",
    1,
    "5970"
  ],
  "./layouts/components/VabSide/components/VabSideItem.vue": [
    "88538",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormRightPanel.vue": [
    "24403",
    9
  ],
  "./utils/index": [
    "29654",
    9,
    "347"
  ],
  "./utils/static": [
    "38710",
    9,
    "8447",
    "5179"
  ],
  "./views/personalCenter/": [
    "86239",
    9,
    "8532"
  ],
  "./layouts/components/VabErrorLog": [
    "355",
    9
  ],
  "./views/vab/element/": [
    "32738",
    9,
    "5695"
  ],
  "./utils/request": [
    "26359",
    9
  ],
  "./utils/request.js": [
    "26359",
    9
  ],
  "./views/donate/index": [
    "77168",
    9,
    "3513"
  ],
  "./assets/comparison/right.jpg": [
    "36560",
    1,
    "2313"
  ],
  "./views/mall/pay/components/Step2": [
    "11448",
    9,
    "6561"
  ],
  "./layouts/components/VabNav/index.vue": [
    "77899",
    9
  ],
  "./store/index": [
    "45830",
    9
  ],
  "./store/modules/errorLog.js": [
    "9998",
    9
  ],
  "./store/modules/user": [
    "33037",
    9
  ],
  "./store/modules/user.js": [
    "33037",
    9
  ],
  "./layouts/components/VabQueryForm/index": [
    "53396",
    9
  ],
  "./styles/spinner/dots.css": [
    "50847",
    9,
    "4014"
  ],
  "./layouts/components/VabTheme/index.vue": [
    "28654",
    9
  ],
  "./api/personalCenter": [
    "2414",
    9,
    "7923"
  ],
  "./views/index/index.vue": [
    "7347",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "640"
  ],
  "./views/mall/pay/index.vue": [
    "87869",
    9,
    "8094"
  ],
  "./views/test/index": [
    "42816",
    9,
    "9897"
  ],
  "./views/vab/icon/index.vue": [
    "11104",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "1545"
  ],
  "./layouts/components/VabQueryForm/VabQueryFormLeftPanel": [
    "91146",
    9
  ],
  "./styles/transition.scss": [
    "13886",
    9,
    "4014"
  ],
  "./views/personalCenter/index.vue": [
    "86239",
    9,
    "8532"
  ],
  "./views/personnelManagement/roleManagement/components/RoleManagementEdit.vue": [
    "49730",
    9,
    "3215"
  ],
  "./utils/encrypt": [
    "22443",
    9
  ],
  "./main.js": [
    "30347",
    9
  ],
  "./views/vab/more/index.vue": [
    "78170",
    9,
    "6375"
  ],
  "./api/roleManagement": [
    "41820",
    9,
    "8109"
  ],
  "./components/SelectTree/": [
    "69748",
    9,
    "1061"
  ],
  "./layouts/components/VabLogo/index.vue": [
    "14323",
    9
  ],
  "./views/index/components/VersionInformation.vue": [
    "76055",
    9,
    "6716"
  ],
  "./plugins/element": [
    "59871",
    9
  ],
  "./utils/validate": [
    "41538",
    9
  ],
  "./utils/handleRoutes": [
    "42872",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormTopPanel.vue": [
    "8133",
    9
  ],
  "./plugins/support": [
    "97164",
    9
  ],
  "./api/publicKey.js": [
    "76003",
    9
  ],
  "./utils/accessToken.js": [
    "86237",
    9
  ],
  "./assets/comparison/left.jpg": [
    "50691",
    1,
    "976"
  ],
  "./views/401.vue": [
    "90567",
    9,
    "6412"
  ],
  "./views/vab/upload/index": [
    "1756",
    9,
    "5469"
  ],
  "./layouts/components/VabLogo/": [
    "14323",
    9
  ],
  "./utils/vab.js": [
    "5659",
    9
  ],
  "./views/vab/more": [
    "78170",
    9,
    "6375"
  ],
  "./components/VabSnow/": [
    "88449",
    9,
    "9226"
  ],
  "./plugins/support.js": [
    "97164",
    9
  ],
  "./plugins/vabIcon.js": [
    "86875",
    9
  ],
  "./api/colorfulIcon.js": [
    "62304",
    9,
    "9817"
  ],
  "./layouts/components/VabQueryForm/index.vue": [
    "53396",
    9
  ],
  "./styles/spinner/plus.css": [
    "73475",
    9,
    "4014"
  ],
  "./assets/ewm.png": [
    "63671",
    1,
    "6364"
  ],
  "./utils/": [
    "29654",
    9,
    "347"
  ],
  "./utils/clipboard": [
    "42980",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "2677"
  ],
  "./views/vab/table/components/TableEdit": [
    "27063",
    9,
    "1436"
  ],
  "./store/modules/errorLog": [
    "9998",
    9
  ],
  "./config/settings.js": [
    "97146",
    7,
    "7255"
  ],
  "./views/vab/more/": [
    "78170",
    9,
    "6375"
  ],
  "./views/vab/icon/": [
    "11104",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "1545"
  ],
  "./views/personnelManagement/menuManagement/": [
    "99297",
    9,
    "2602"
  ],
  "./components/VabUpload/": [
    "2842",
    9,
    "311"
  ],
  "./views/login/index.vue": [
    "75712",
    9,
    "5289"
  ],
  "./components/VabProfile/index": [
    "3605",
    9,
    "2854"
  ],
  "./config/net.config.js": [
    "19418",
    7
  ],
  "./store/modules/tabsBar": [
    "39341",
    9
  ],
  "./utils/vab": [
    "5659",
    9
  ],
  "./store/modules/table": [
    "61092",
    9
  ],
  "./api/router.js": [
    "17418",
    9
  ],
  "./layouts/components/VabAppMain": [
    "2727",
    9
  ],
  "./layouts/export": [
    "24520",
    9
  ],
  "./api/userManagement.js": [
    "65827",
    9,
    "2208"
  ],
  "./views/mall/pay": [
    "87869",
    9,
    "8094"
  ],
  "./views/test/index.vue": [
    "42816",
    9,
    "9897"
  ],
  "./views/vab/chart/index.vue": [
    "1074",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "3343"
  ],
  "./api/markdown.js": [
    "24902",
    9,
    "2555"
  ],
  "./layouts/index.vue": [
    "62386",
    9
  ],
  "./views/mall/pay/components/Step1.vue": [
    "80440",
    9,
    "9297"
  ],
  "./layouts/components/VabQueryForm/VabQueryFormLeftPanel.vue": [
    "91146",
    9
  ],
  "./layouts/components/VabAvatar/": [
    "66310",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormBottomPanel": [
    "27847",
    9
  ],
  "./views/stock": [
    "49937",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "6426"
  ],
  "./plugins/element.js": [
    "59871",
    9
  ],
  "./components/VabSnow/index.vue": [
    "88449",
    9,
    "9226"
  ],
  "./layouts/": [
    "62386",
    9
  ],
  "./layouts/components/VabTabs/index": [
    "27412",
    9
  ],
  "./utils/index.js": [
    "29654",
    9,
    "347"
  ],
  "./styles/normalize.scss": [
    "57484",
    9,
    "4014"
  ],
  "./views/vab/errorLog/index": [
    "94540",
    9,
    "6029"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1": [
    "27580",
    9,
    "573"
  ],
  "./views/login": [
    "75712",
    9,
    "5289"
  ],
  "./views/vab/tree/index": [
    "36676",
    9,
    "3621"
  ],
  "./assets/error_images/404.png": [
    "78462",
    1,
    "4899"
  ],
  "./layouts/components/VabAppMain/index.vue": [
    "2727",
    9
  ],
  "./utils/permission.js": [
    "98559",
    9,
    "5860"
  ],
  "./views/personalCenter/index": [
    "86239",
    9,
    "8532"
  ],
  "./views/vab/tree/index.vue": [
    "36676",
    9,
    "3621"
  ],
  "./api/stock.js": [
    "9093",
    9,
    "6438"
  ],
  "./api/userManagement": [
    "65827",
    9,
    "2208"
  ],
  "./layouts/components/VabTop/index": [
    "72288",
    9
  ],
  "./config/theme.config.js": [
    "24884",
    7
  ],
  "./views/vab/nested/menu1/menu1-1/index.vue": [
    "83753",
    9,
    "8738"
  ],
  "./views/vab/tab/index.vue": [
    "36524",
    9,
    "1069"
  ],
  "./views/personnelManagement/userManagement/components/UserManagementEdit": [
    "24094",
    9,
    "451"
  ],
  "./views/vab/errorLog/index.vue": [
    "94540",
    9,
    "6029"
  ],
  "./views/donate/index.vue": [
    "77168",
    9,
    "3513"
  ],
  "./utils/accessToken": [
    "86237",
    9
  ],
  "./views/mall/goodsList/index": [
    "30549",
    9,
    "2502"
  ],
  "./views/mall/goodsList/": [
    "30549",
    9,
    "2502"
  ],
  "./components/VabCharge/index.vue": [
    "82560",
    9,
    "1721"
  ],
  "./views/vab/lodash/index.vue": [
    "57949",
    9,
    "7214"
  ],
  "./views/vab/icon/colorfulIcon": [
    "39885",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "6606"
  ],
  "./views/vab/backToTop/": [
    "68463",
    9,
    "3412"
  ],
  "./views/vab/nested/menu1/index": [
    "20380",
    9,
    "3885"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/": [
    "27580",
    9,
    "573"
  ],
  "./styles/variables.scss": [
    "45942",
    9
  ],
  "./views/vab/lodash/index": [
    "57949",
    9,
    "7214"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/index.vue": [
    "27580",
    9,
    "573"
  ],
  "./views/vab/permissions/": [
    "32692",
    9,
    "6005"
  ],
  "./layouts/components/VabFullScreen/": [
    "31815",
    9
  ],
  "./views/mall/pay/": [
    "87869",
    9,
    "8094"
  ],
  "./views/vab/form": [
    "81809",
    9,
    "4874"
  ],
  "./config/theme.config": [
    "24884",
    7
  ],
  "./views/register": [
    "3503",
    9,
    "2292"
  ],
  "./assets/error_images/401.png": [
    "27843",
    1,
    "4848"
  ],
  "./layouts/components/VabSide/components/VabMenuItem": [
    "13609",
    9
  ],
  "./store/modules/routes.js": [
    "70348",
    9
  ],
  "./layouts/components/VabColorfullIcon": [
    "80064",
    9
  ],
  "./api/notice.js": [
    "40031",
    9,
    "20"
  ],
  "./layouts/components/VabBreadcrumb/index": [
    "12915",
    9
  ],
  "./layouts/components/VabBreadcrumb/index.vue": [
    "12915",
    9
  ],
  "./main": [
    "30347",
    9
  ],
  "./styles/loading.scss": [
    "34087",
    9,
    "4014"
  ],
  "./layouts/components/VabTabs/": [
    "27412",
    9
  ],
  "./views/personnelManagement/roleManagement/": [
    "91814",
    9,
    "5947"
  ],
  "./views/vab/editor": [
    "506",
    9,
    "5576",
    "1607"
  ],
  "./utils/static.js": [
    "38710",
    9,
    "8447",
    "5179"
  ],
  "./views/personnelManagement/menuManagement/components/MenuManagementEdit.vue": [
    "53057",
    9,
    "3562"
  ],
  "./views/vab/errorLog/": [
    "94540",
    9,
    "6029"
  ],
  "./views/vab/icon": [
    "11104",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "1545"
  ],
  "./views/vab/icon/colorfulIcon.vue": [
    "39885",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "6606"
  ],
  "./views/vab/nested/menu1/menu1-1/index": [
    "83753",
    9,
    "8738"
  ],
  "./api/github": [
    "17112",
    9,
    "4801"
  ],
  "./views/vab/lodash/": [
    "57949",
    9,
    "7214"
  ],
  "./views/vab/loading/index": [
    "27623",
    9,
    "5836"
  ],
  "./views/test": [
    "42816",
    9,
    "9897"
  ],
  "./layouts/components/VabSide/index.vue": [
    "15145",
    9
  ],
  "./components/VabProfile": [
    "3605",
    9,
    "2854"
  ],
  "./utils/errorLog.js": [
    "63012",
    9
  ],
  "./views/vab/editor/index.vue": [
    "506",
    9,
    "5576",
    "1607"
  ],
  "./utils": [
    "29654",
    9,
    "347"
  ],
  "./api/table": [
    "49479",
    9,
    "5484"
  ],
  "./api/publicKey": [
    "76003",
    9
  ],
  "./components/VabSnow/index": [
    "88449",
    9,
    "9226"
  ],
  "./views/401": [
    "90567",
    9,
    "6412"
  ],
  "./store/modules/settings.js": [
    "9415",
    9
  ],
  "./views/stock/index.vue": [
    "49937",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "6426"
  ],
  "./views/404": [
    "82869",
    9,
    "6326"
  ],
  "./views/vab/backToTop/index": [
    "68463",
    9,
    "3412"
  ],
  "./views/vab/form/index.vue": [
    "81809",
    9,
    "4874"
  ],
  "./views/vab/upload/": [
    "1756",
    9,
    "5469"
  ],
  "./layouts/components/VabFullScreen/index.vue": [
    "31815",
    9
  ],
  "./layouts/components/VabTop": [
    "72288",
    9
  ],
  "./layouts/index": [
    "62386",
    9
  ],
  "./plugins/index.js": [
    "37339",
    9
  ],
  "./views/personnelManagement/roleManagement": [
    "91814",
    9,
    "5947"
  ],
  "./views/vab/form/": [
    "81809",
    9,
    "4874"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/index": [
    "27580",
    9,
    "573"
  ],
  "./components/VabUpload/index.vue": [
    "2842",
    9,
    "311"
  ],
  "./components/VabSnow": [
    "88449",
    9,
    "9226"
  ],
  "./config/permission.js": [
    "90480",
    9
  ],
  "./components/VabUpload/index": [
    "2842",
    9,
    "311"
  ],
  "./utils/errorLog": [
    "63012",
    9
  ],
  "./config/settings": [
    "97146",
    7,
    "7255"
  ],
  "./layouts/components/VabColorfullIcon/index": [
    "80064",
    9
  ],
  "./api/github.js": [
    "17112",
    9,
    "4801"
  ],
  "./views/vab/qrCode/index.vue": [
    "39385",
    9,
    "2649",
    "6354"
  ],
  "./utils/printInfo": [
    "19169",
    9
  ],
  "./api/stock": [
    "9093",
    9,
    "6438"
  ],
  "./components/VabPageHeader": [
    "92084",
    9,
    "2917"
  ],
  "./api/notice": [
    "40031",
    9,
    "20"
  ],
  "./layouts/EmptyLayout.vue": [
    "41255",
    9
  ],
  "./layouts/components/VabBreadcrumb/": [
    "12915",
    9
  ],
  "./views/vab/element/index": [
    "32738",
    9,
    "5695"
  ],
  "./layouts/components/VabAd/index": [
    "79303",
    9
  ],
  "./router": [
    "62616",
    9
  ],
  "./views/404.vue": [
    "82869",
    9,
    "6326"
  ],
  "./App": [
    "14473",
    9
  ],
  "./store": [
    "45830",
    9
  ],
  "./views/vab/nested/menu1/index.vue": [
    "20380",
    9,
    "3885"
  ],
  "./assets/qr_logo/lqr_logo.png": [
    "1621",
    1,
    "294"
  ],
  "./views/donate/": [
    "77168",
    9,
    "3513"
  ],
  "./api/ad": [
    "18834",
    9
  ],
  "./views/vab/nested/menu1/menu1-1": [
    "83753",
    9,
    "8738"
  ],
  "./layouts/components/VabAvatar/index": [
    "66310",
    9
  ],
  "./layouts/components/VabGithubCorner/index": [
    "38029",
    9
  ],
  "./layouts/components/VabErrorLog/index.vue": [
    "355",
    9
  ],
  "./views/vab/webSocket": [
    "54902",
    9,
    "2459"
  ],
  "./store/index.js": [
    "45830",
    9
  ],
  "./config/": [
    "36239",
    7
  ],
  "./layouts/export.js": [
    "24520",
    9
  ],
  "./layouts/components/VabGithubCorner/index.vue": [
    "38029",
    9
  ],
  "./layouts/components/VabTabs/index.vue": [
    "27412",
    9
  ],
  "./views/test/": [
    "42816",
    9,
    "9897"
  ],
  "./components/VabProfile/": [
    "3605",
    9,
    "2854"
  ],
  "./views/login/index": [
    "75712",
    9,
    "5289"
  ],
  "./api/router": [
    "17418",
    9
  ],
  "./components/VabCharge": [
    "82560",
    9,
    "1721"
  ],
  "./views/vab/form/index": [
    "81809",
    9,
    "4874"
  ],
  "./views/vab/more/index": [
    "78170",
    9,
    "6375"
  ],
  "./api/goodsList": [
    "57829",
    9,
    "7846"
  ],
  "./assets/mynb.jpg": [
    "22038",
    1,
    "5995"
  ],
  "./components/VabPageHeader/": [
    "92084",
    9,
    "2917"
  ],
  "./plugins/": [
    "37339",
    9
  ],
  "./styles/vab.scss": [
    "51314",
    9
  ],
  "./router/index.js": [
    "62616",
    9
  ],
  "./views/mall/pay/components/Step3.vue": [
    "1827",
    9,
    "3680"
  ],
  "./views/vab/lodash": [
    "57949",
    9,
    "7214"
  ],
  "./views/vab/permissions/index.vue": [
    "32692",
    9,
    "6005"
  ],
  "./views/vab/table": [
    "80779",
    9,
    "7704"
  ],
  "./layouts/components/VabGithubCorner/": [
    "38029",
    9
  ],
  "./views/vab/qrCode/index": [
    "39385",
    9,
    "2649",
    "6354"
  ],
  "./router/index": [
    "62616",
    9
  ],
  "./views/vab/webSocket/index": [
    "54902",
    9,
    "2459"
  ],
  "./views/stock/index": [
    "49937",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "6426"
  ],
  "./views/personnelManagement/menuManagement/index.vue": [
    "99297",
    9,
    "2602"
  ],
  "./api/tree": [
    "53363",
    9,
    "2784"
  ],
  "./views/vab/tree": [
    "36676",
    9,
    "3621"
  ],
  "./components/VabCharge/": [
    "82560",
    9,
    "1721"
  ],
  "./layouts/components/VabNav": [
    "77899",
    9
  ],
  "./config/setting.config.js": [
    "4667",
    7
  ],
  "./layouts/components/VabColorfullIcon/index.vue": [
    "80064",
    9
  ],
  "./views/mall/pay/components/Step1": [
    "80440",
    9,
    "9297"
  ],
  "./views/vab/table/index": [
    "80779",
    9,
    "7704"
  ],
  "./views/vab/webSocket/": [
    "54902",
    9,
    "2459"
  ],
  "./views/vab/permissions/index": [
    "32692",
    9,
    "6005"
  ],
  "./layouts/components/VabTheme/index": [
    "28654",
    9
  ],
  "./store/modules/settings": [
    "9415",
    9
  ],
  "./plugins/echarts.js": [
    "45721",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "50"
  ],
  "./views/vab/loading": [
    "27623",
    9,
    "5836"
  ],
  "./layouts/components/VabNav/index": [
    "77899",
    9
  ],
  "./views/vab/loading/index.vue": [
    "27623",
    9,
    "5836"
  ],
  "./utils/pageTitle": [
    "97245",
    9
  ],
  "./api/remixIcon": [
    "46747",
    9,
    "9528"
  ],
  "./config/net.config": [
    "19418",
    7
  ],
  "./layouts/components/VabFullScreen/index": [
    "31815",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormTopPanel": [
    "8133",
    9
  ],
  "./layouts/components/VabSide/components/VabSubmenu": [
    "18946",
    9
  ],
  "./layouts/components/VabTop/": [
    "72288",
    9
  ],
  "./utils/clipboard.js": [
    "42980",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "2677"
  ],
  "./plugins/vabIcon": [
    "86875",
    9
  ],
  "./views/login/": [
    "75712",
    9,
    "5289"
  ],
  "./views/vab/backToTop/index.vue": [
    "68463",
    9,
    "3412"
  ],
  "./App.vue": [
    "14473",
    9
  ],
  "./config/permission": [
    "90480",
    9
  ],
  "./views/donate": [
    "77168",
    9,
    "3513"
  ],
  "./views/personnelManagement/menuManagement": [
    "99297",
    9,
    "2602"
  ],
  "./views/vab/editor/": [
    "506",
    9,
    "5576",
    "1607"
  ],
  "./api/tree.js": [
    "53363",
    9,
    "2784"
  ],
  "./api/remixIcon.js": [
    "46747",
    9,
    "9528"
  ],
  "./views/vab/upload": [
    "1756",
    9,
    "5469"
  ],
  "./api/menuManagement.js": [
    "30655",
    9,
    "1908"
  ],
  "./components/VabCharge/index": [
    "82560",
    9,
    "1721"
  ],
  "./layouts/components/VabAvatar/index.vue": [
    "66310",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormRightPanel": [
    "24403",
    9
  ],
  "./utils/printInfo.js": [
    "19169",
    9
  ],
  "./views/personalCenter": [
    "86239",
    9,
    "8532"
  ],
  "./views/personnelManagement/menuManagement/index": [
    "99297",
    9,
    "2602"
  ],
  "./views/vab/element": [
    "32738",
    9,
    "5695"
  ],
  "./views/vab/icon/index": [
    "11104",
    9,
    "3322",
    "2865",
    "1728",
    "4375",
    "3238",
    "6589",
    "4684",
    "2643",
    "8226",
    "6185",
    "9505",
    "9898",
    "9367",
    "6304",
    "7933",
    "1545"
  ],
  "./api/menuManagement": [
    "30655",
    9,
    "1908"
  ],
  "./api/user": [
    "42068",
    9
  ],
  "./assets/login_images/background.jpg": [
    "52789",
    1,
    "7734"
  ],
  "./components/VabPageHeader/index.vue": [
    "92084",
    9,
    "2917"
  ],
  "./layouts/components/VabAd/index.vue": [
    "79303",
    9
  ],
  "./layouts/components/VabSide/components/VabSideItem": [
    "88538",
    9
  ],
  "./layouts/components/VabTabs": [
    "27412",
    9
  ],
  "./store/modules/routes": [
    "70348",
    9
  ],
  "./styles/spinner/gauge.css": [
    "28846",
    9,
    "4014"
  ],
  "./router/": [
    "62616",
    9
  ],
  "./utils/permission": [
    "98559",
    9,
    "5860"
  ],
  "./views/vab/editor/index": [
    "506",
    9,
    "5576",
    "1607"
  ],
  "./views/vab/qrCode/": [
    "39385",
    9,
    "2649",
    "6354"
  ],
  "./views/vab/errorLog/components/ErrorTest": [
    "15683",
    9,
    "1440"
  ],
  "./api/colorfulIcon": [
    "62304",
    9,
    "9817"
  ],
  "./layouts/components/VabNav/": [
    "77899",
    9
  ],
  "./layouts/components/VabTheme": [
    "28654",
    9
  ],
  "./api/goodsList.js": [
    "57829",
    9,
    "7846"
  ],
  "./views/personnelManagement/userManagement/components/UserManagementEdit.vue": [
    "24094",
    9,
    "451"
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
  return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(function() {
    return __webpack_require__.t(id, ids[1] | 16);
  });
}

__rspack_async_context.keys = function() { return Object.keys(map); };
__rspack_async_context.id = 59140;
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
loaded: false,
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

// Flag the module as loaded
module.loaded = true;
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
  return "js/" + ({"1728": "vab-chunk-2","2643": "vab-chunk-7","2865": "vab-chunk-1","3238": "vab-chunk-4","3322": "vab-chunk-0","4375": "vab-chunk-3","4684": "vab-chunk-6","6185": "vab-chunk-9","6304": "vab-chunk-13","6589": "vab-chunk-5","7933": "vab-chunk-14","8226": "vab-chunk-8","9367": "vab-chunk-12","9505": "vab-chunk-10","9898": "vab-chunk-11",}[chunkId] || chunkId) + "." + {"1027": "09d20180","1061": "69b3219e","1069": "475f376b","1436": "caf2a7be","1440": "4a41490f","1545": "40bc6b17","1607": "3fa2e788","1721": "2ea05d29","1728": "e1f6b1a3","1739": "7507a0d0","1908": "f798a2ce","20": "ffc97028","2208": "c9f86c2e","2292": "efb69a2e","2313": "628fbe69","2459": "d16bb9cb","2502": "9a3419e0","2555": "88200223","2591": "958623d5","2602": "816a4c12","2643": "12f7ae50","2649": "0ebe203b","2677": "d49fe23f","2784": "d2ff1467","2854": "d68d72a8","2865": "b37f2f88","2917": "2faad0a8","294": "aadb9fdb","311": "a958b81b","3215": "e71c27a1","3238": "ed628fe4","3322": "800af1e5","3343": "29fb2ce7","3412": "a3b1c667","347": "b1d8c92c","3513": "2ed47fe5","3562": "3de47834","3621": "7169cbc0","3680": "3f764e40","3885": "20dc06f1","4375": "ad6296eb","4502": "e5fb3cec","451": "4350238f","4684": "aaca0659","4801": "3ba6f98d","4848": "7b97a0ae","4874": "61c04a36","4899": "d6289f5a","50": "e0a654de","5179": "811bae46","5289": "7f604e46","5469": "48e27fa0","5484": "ee6e3e9c","5576": "19b46e0e","5695": "e7de8446","573": "1c2de212","5836": "265850dc","5860": "96c09c74","5947": "66c65d1c","5970": "ef5a69bc","5995": "3824ff9f","6005": "88c6ab11","6029": "a981c9e3","6185": "bef37c5a","6304": "77d18564","6326": "6c7f381d","6354": "9fcd24e3","6364": "b1c3c948","6375": "2aa33cc0","640": "96f96071","6412": "fa3efab1","6426": "9dd9058d","6438": "ec427000","6561": "a623cff9","6589": "8ecb7745","6606": "fa2f5724","6716": "a2639d63","7214": "50c7eedd","7255": "ee729972","7704": "2ed96d08","7734": "ded20f64","7846": "cf031773","7923": "22d2c559","7933": "b6fc781f","8094": "d0d8c4f5","8109": "006e59f0","8226": "66b6d991","8447": "6e7049cb","8532": "9ca536f5","8738": "66baba52","9226": "4586f243","9297": "d6fa5970","9367": "aa63cabb","9505": "7d9dfb6f","9528": "ca447305","976": "c48224dc","9817": "7c9c80c5","9897": "5d7b660f","9898": "1c56a984",}[chunkId] + ".js"
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
// webpack/runtime/rspack_version
!function() {
__webpack_require__.rv = function() { return "1.7.7"; }
}();
// webpack/runtime/jsonp_chunk_loading
!function() {
__webpack_require__.b = document.baseURI || self.location.href;

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"9509": 0,};
      
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

var chunkLoadingGlobal = self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || [];
chunkLoadingGlobal.forEach(__rspack_jsonp.bind(null, 0));
chunkLoadingGlobal.push = __rspack_jsonp.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

}();
// webpack/runtime/rspack_unique_id
!function() {
__webpack_require__.ruid = "bundler=rspack@1.7.7";
}();
// startup
// Load entry module and return exports
// This entry module depends on other loaded chunks and execution need to be delayed
var __webpack_exports__ = __webpack_require__.O(undefined, ["4014", "4569", "3926", "2529", "8306", "9147"], function() { return __webpack_require__(30347) });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;