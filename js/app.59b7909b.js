/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2026-2-26 06:31:43
 */
(function() {
var __webpack_modules__ = ({
35953: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getList: function() { return getList; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(34714);

function getList() {
  return (0,_utils_request__rspack_import_0["default"])({
    url: 'https://api.vuejs-core.cn/getAd',
    method: 'get'
  });
}

}),
53038: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getPublicKey: function() { return getPublicKey; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(34714);

function getPublicKey() {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/publicKey',
    method: 'post'
  });
}

}),
45481: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getRouterList: function() { return getRouterList; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(34714);

function getRouterList(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/menu/navigate',
    method: 'post',
    data
  });
}

}),
95719: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getUserInfo: function() { return getUserInfo; },
  login: function() { return login; },
  logout: function() { return logout; },
  register: function() { return register; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(34714);
/* import */ var _utils_encrypt__rspack_import_1 = __webpack_require__(69034);
/* import */ var _config__rspack_import_2 = __webpack_require__(85700);
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
85700: (function (module, __unused_rspack_exports, __webpack_require__) {
/**
 * @description 3个子配置，通用配置|主题配置|网络配置导出
 */
const setting = __webpack_require__(45810);
const theme = __webpack_require__(95673);
const network = __webpack_require__(94183);
module.exports = Object.assign({}, setting, theme, network);

}),
94183: (function (module) {
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
62169: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0 = __webpack_require__(96175);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_1 = __webpack_require__(26740);
/* import */ var core_js_modules_es_iterator_for_each_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__rspack_import_1);
/* import */ var _router__rspack_import_2 = __webpack_require__(99191);
/* import */ var _store__rspack_import_3 = __webpack_require__(7415);
/* import */ var nprogress__rspack_import_4 = __webpack_require__(58744);
/* import */ var nprogress__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(nprogress__rspack_import_4);
/* import */ var nprogress_nprogress_css__rspack_import_5 = __webpack_require__(35305);
/* import */ var _utils_pageTitle__rspack_import_6 = __webpack_require__(44784);
/* import */ var _config__rspack_import_7 = __webpack_require__(85700);
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
45810: (function (module) {
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
95673: (function (module) {
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
29560: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_6 = __webpack_require__(15091);
/* import */ var _App__rspack_import_0 = __webpack_require__(60621);
/* import */ var _store__rspack_import_1 = __webpack_require__(7415);
/* import */ var _router__rspack_import_2 = __webpack_require__(99191);
/* import */ var _plugins__rspack_import_3 = __webpack_require__(94198);
/* import */ var _layouts_export__rspack_import_4 = __webpack_require__(44747);
/* import */ var _utils_printInfo__rspack_import_5 = __webpack_require__(94400);








/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

// 检测环境变量或默认使用mock
const useMock =  true || 0;
if (useMock) {
  // 使用动态import替代require
  Promise.all(/* import() */ [__webpack_require__.e("8447"), __webpack_require__.e("7714")]).then(__webpack_require__.bind(__webpack_require__, 65977)).then(({
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
91098: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_2 = __webpack_require__(15091);
/* import */ var element_ui__rspack_import_0 = __webpack_require__(61093);
/* import */ var element_ui__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(element_ui__rspack_import_0);
/* import */ var element_ui_lib_theme_chalk_index_css__rspack_import_1 = __webpack_require__(43932);



vue__rspack_import_2["default"].use((element_ui__rspack_import_0_default()), {
  size: 'small'
});

}),
94198: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_8 = __webpack_require__(15091);
/* import */ var _element__rspack_import_0 = __webpack_require__(91098);
/* import */ var _support__rspack_import_1 = __webpack_require__(98365);
/* import */ var _styles_vab_scss__rspack_import_2 = __webpack_require__(39749);
/* import */ var _config_permission__rspack_import_3 = __webpack_require__(62169);
/* import */ var _utils_errorLog__rspack_import_4 = __webpack_require__(67523);
/* import */ var _vabIcon__rspack_import_5 = __webpack_require__(64198);
/* import */ var layouts_Permissions__rspack_import_6 = __webpack_require__(10458);
/* import */ var _utils_vab__rspack_import_7 = __webpack_require__(32434);
/* 公共引入,勿随意修改,修改时需经过确认 */









vue__rspack_import_8["default"].use(_utils_vab__rspack_import_7["default"]);
vue__rspack_import_8["default"].use(layouts_Permissions__rspack_import_6["default"]);

}),
98365: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
64198: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_1 = __webpack_require__(15091);
/* import */ var vab_icon__rspack_import_0 = __webpack_require__(70568);
/* import */ var vab_icon__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(vab_icon__rspack_import_0);


vue__rspack_import_1["default"].component('VabIcon', (vab_icon__rspack_import_0_default()));

}),
99191: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  asyncRoutes: function() { return asyncRoutes; },
  constantRoutes: function() { return constantRoutes; },
  resetRouter: function() { return resetRouter; }
});
/* import */ var vue__rspack_import_3 = __webpack_require__(15091);
/* import */ var vue_router__rspack_import_4 = __webpack_require__(82666);
/* import */ var _layouts__rspack_import_0 = __webpack_require__(91017);
/* import */ var _layouts_EmptyLayout__rspack_import_1 = __webpack_require__(51208);
/* import */ var _config__rspack_import_2 = __webpack_require__(85700);
/* import */ var _config__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_2);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到，vip文档中已提供路由的基础图标与小清新图标的配置方案，请仔细阅读
 */






vue__rspack_import_3["default"].use(vue_router__rspack_import_4["default"]);
const constantRoutes = [{
  path: '/login',
  component: () => __webpack_require__.e(/* import() */ "3423").then(__webpack_require__.bind(__webpack_require__, 99922)),
  hidden: true
}, {
  path: '/register',
  component: () => __webpack_require__.e(/* import() */ "9186").then(__webpack_require__.bind(__webpack_require__, 93001)),
  hidden: true
}, {
  path: '/401',
  name: '401',
  component: () => __webpack_require__.e(/* import() */ "3089").then(__webpack_require__.bind(__webpack_require__, 83704)),
  hidden: true
}, {
  path: '/404',
  name: '404',
  component: () => __webpack_require__.e(/* import() */ "8769").then(__webpack_require__.bind(__webpack_require__, 5400)),
  hidden: true
}];
const asyncRoutes = [{
  path: '/',
  component: _layouts__rspack_import_0["default"],
  redirect: '/index',
  children: [{
    path: 'index',
    name: 'Index',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("3322"), __webpack_require__.e("2865"), __webpack_require__.e("1728"), __webpack_require__.e("4375"), __webpack_require__.e("3238"), __webpack_require__.e("6589"), __webpack_require__.e("4684"), __webpack_require__.e("2643"), __webpack_require__.e("8226"), __webpack_require__.e("6185"), __webpack_require__.e("9505"), __webpack_require__.e("9898"), __webpack_require__.e("9367"), __webpack_require__.e("6304"), __webpack_require__.e("7933"), __webpack_require__.e("3505")]).then(__webpack_require__.bind(__webpack_require__, 98798)),
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
    component: () => Promise.all(/* import() */ [__webpack_require__.e("3322"), __webpack_require__.e("2865"), __webpack_require__.e("1728"), __webpack_require__.e("4375"), __webpack_require__.e("3238"), __webpack_require__.e("6589"), __webpack_require__.e("4684"), __webpack_require__.e("2643"), __webpack_require__.e("8226"), __webpack_require__.e("6185"), __webpack_require__.e("9505"), __webpack_require__.e("9898"), __webpack_require__.e("9367"), __webpack_require__.e("6304"), __webpack_require__.e("7933"), __webpack_require__.e("8412")]).then(__webpack_require__.bind(__webpack_require__, 23399)),
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
    component: () => __webpack_require__.e(/* import() */ "3559").then(__webpack_require__.bind(__webpack_require__, 66751)),
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
      component: () => Promise.all(/* import() */ [__webpack_require__.e("3322"), __webpack_require__.e("2865"), __webpack_require__.e("1728"), __webpack_require__.e("4375"), __webpack_require__.e("3238"), __webpack_require__.e("6589"), __webpack_require__.e("4684"), __webpack_require__.e("2643"), __webpack_require__.e("8226"), __webpack_require__.e("6185"), __webpack_require__.e("9505"), __webpack_require__.e("9898"), __webpack_require__.e("9367"), __webpack_require__.e("6304"), __webpack_require__.e("7933"), __webpack_require__.e("3008")]).then(__webpack_require__.bind(__webpack_require__, 34611)),
      meta: {
        title: '常规图标'
      }
    }, {
      path: 'colorfulIcon',
      name: 'ColorfulIcon',
      component: () => Promise.all(/* import() */ [__webpack_require__.e("3322"), __webpack_require__.e("2865"), __webpack_require__.e("1728"), __webpack_require__.e("4375"), __webpack_require__.e("3238"), __webpack_require__.e("6589"), __webpack_require__.e("4684"), __webpack_require__.e("2643"), __webpack_require__.e("8226"), __webpack_require__.e("6185"), __webpack_require__.e("9505"), __webpack_require__.e("9898"), __webpack_require__.e("9367"), __webpack_require__.e("6304"), __webpack_require__.e("7933"), __webpack_require__.e("551")]).then(__webpack_require__.bind(__webpack_require__, 60682)),
      meta: {
        title: '多彩图标'
      }
    }]
  }, {
    path: 'table',
    component: () => __webpack_require__.e(/* import() */ "3697").then(__webpack_require__.bind(__webpack_require__, 35016)),
    name: 'Table',
    meta: {
      title: '表格',
      permissions: ['admin']
    }
  }, {
    path: 'webSocket',
    name: 'WebSocket',
    component: () => __webpack_require__.e(/* import() */ "4986").then(__webpack_require__.bind(__webpack_require__, 49)),
    meta: {
      title: 'webSocket',
      permissions: ['admin']
    }
  }, {
    path: 'form',
    name: 'Form',
    component: () => __webpack_require__.e(/* import() */ "9579").then(__webpack_require__.bind(__webpack_require__, 98902)),
    meta: {
      title: '表单',
      permissions: ['admin']
    }
  }, {
    path: 'element',
    name: 'Element',
    component: () => __webpack_require__.e(/* import() */ "7939").then(__webpack_require__.bind(__webpack_require__, 42046)),
    meta: {
      title: '常用组件',
      permissions: ['admin']
    }
  }, {
    path: 'tree',
    name: 'Tree',
    component: () => __webpack_require__.e(/* import() */ "5940").then(__webpack_require__.bind(__webpack_require__, 7535)),
    meta: {
      title: '树',
      permissions: ['admin']
    }
  }, {
    path: 'menu1',
    component: () => __webpack_require__.e(/* import() */ "4133").then(__webpack_require__.bind(__webpack_require__, 85060)),
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
      component: () => __webpack_require__.e(/* import() */ "4982").then(__webpack_require__.bind(__webpack_require__, 42997)),
      children: [{
        path: 'menu1-1-1',
        name: 'Menu1-1-1',
        meta: {
          title: '嵌套路由 1-1-1'
        },
        component: () => __webpack_require__.e(/* import() */ "4151").then(__webpack_require__.bind(__webpack_require__, 49210))
      }]
    }]
  }, {
    path: 'loading',
    name: 'Loading',
    component: () => __webpack_require__.e(/* import() */ "1396").then(__webpack_require__.bind(__webpack_require__, 78767)),
    meta: {
      title: 'loading',
      permissions: ['admin']
    }
  }, {
    path: 'backToTop',
    name: 'BackToTop',
    component: () => __webpack_require__.e(/* import() */ "2467").then(__webpack_require__.bind(__webpack_require__, 90403)),
    meta: {
      title: '返回顶部',
      permissions: ['admin']
    }
  }, {
    path: 'lodash',
    name: 'Lodash',
    component: () => __webpack_require__.e(/* import() */ "266").then(__webpack_require__.bind(__webpack_require__, 47841)),
    meta: {
      title: 'lodash',
      permissions: ['admin']
    }
  }, {
    path: 'upload',
    name: 'Upload',
    component: () => __webpack_require__.e(/* import() */ "711").then(__webpack_require__.bind(__webpack_require__, 10330)),
    meta: {
      title: '上传',
      permissions: ['admin']
    }
  }, {
    path: 'log',
    name: 'Log',
    component: () => __webpack_require__.e(/* import() */ "9304").then(__webpack_require__.bind(__webpack_require__, 87387)),
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
    component: () => __webpack_require__.e(/* import() */ "3540").then(__webpack_require__.bind(__webpack_require__, 57135)),
    meta: {
      title: '关于',
      permissions: ['admin']
    }
  }, {
    path: 'chart',
    name: 'Chart',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("3322"), __webpack_require__.e("2865"), __webpack_require__.e("1728"), __webpack_require__.e("4375"), __webpack_require__.e("3238"), __webpack_require__.e("6589"), __webpack_require__.e("4684"), __webpack_require__.e("2643"), __webpack_require__.e("8226"), __webpack_require__.e("6185"), __webpack_require__.e("9505"), __webpack_require__.e("9898"), __webpack_require__.e("9367"), __webpack_require__.e("6304"), __webpack_require__.e("7933"), __webpack_require__.e("8477")]).then(__webpack_require__.bind(__webpack_require__, 61692)),
    meta: {
      title: '图表',
      permissions: ['admin']
    }
  }, {
    path: 'tab',
    name: 'Tab',
    component: () => __webpack_require__.e(/* import() */ "6009").then(__webpack_require__.bind(__webpack_require__, 75920)),
    meta: {
      title: '选项卡',
      permissions: ['admin']
    }
  }, {
    path: 'editor',
    name: 'Editor',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("381"), __webpack_require__.e("420")]).then(__webpack_require__.bind(__webpack_require__, 42975)),
    meta: {
      title: '编辑器',
      permissions: ['admin']
    }
  }, {
    path: 'qrCode',
    name: 'QrCode',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("2649"), __webpack_require__.e("8069")]).then(__webpack_require__.bind(__webpack_require__, 6212)),
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
    component: () => __webpack_require__.e(/* import() */ "5772").then(__webpack_require__.bind(__webpack_require__, 22071)),
    meta: {
      title: '用户管理'
    }
  }, {
    path: 'roleManagement',
    name: 'RoleManagement',
    component: () => __webpack_require__.e(/* import() */ "5783").then(__webpack_require__.bind(__webpack_require__, 17786)),
    meta: {
      title: '角色管理'
    }
  }, {
    path: 'menuManagement',
    name: 'MenuManagement',
    component: () => __webpack_require__.e(/* import() */ "8954").then(__webpack_require__.bind(__webpack_require__, 88321)),
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
    component: () => __webpack_require__.e(/* import() */ "4245").then(__webpack_require__.bind(__webpack_require__, 87972)),
    meta: {
      title: '支付',
      noKeepAlive: true
    },
    children: null
  }, {
    path: 'goodsList',
    name: 'GoodsList',
    component: () => __webpack_require__.e(/* import() */ "8582").then(__webpack_require__.bind(__webpack_require__, 90005)),
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
    component: () => __webpack_require__.e(/* import() */ "3089").then(__webpack_require__.bind(__webpack_require__, 83704)),
    meta: {
      title: '401'
    }
  }, {
    path: '404',
    name: 'Error404',
    component: () => __webpack_require__.e(/* import() */ "8769").then(__webpack_require__.bind(__webpack_require__, 5400)),
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
    component: () => __webpack_require__.e(/* import() */ "8987").then(__webpack_require__.bind(__webpack_require__, 49830)),
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
7415: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
56573: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
44667: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var _router__rspack_import_0 = __webpack_require__(99191);
/* import */ var _api_router__rspack_import_1 = __webpack_require__(45481);
/* import */ var _utils_handleRoutes__rspack_import_2 = __webpack_require__(36499);
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
89408: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_json_parse_js__rspack_import_0 = __webpack_require__(41928);
/* import */ var core_js_modules_es_json_parse_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_parse_js__rspack_import_0);
/* import */ var _config__rspack_import_1 = __webpack_require__(85700);
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
55197: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
44520: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
82530: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_4 = __webpack_require__(15091);
/* import */ var _api_user__rspack_import_0 = __webpack_require__(95719);
/* import */ var _utils_accessToken__rspack_import_1 = __webpack_require__(14652);
/* import */ var _router__rspack_import_2 = __webpack_require__(99191);
/* import */ var _config__rspack_import_3 = __webpack_require__(85700);
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
14652: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getAccessToken: function() { return getAccessToken; },
  removeAccessToken: function() { return removeAccessToken; },
  setAccessToken: function() { return setAccessToken; }
});
/* import */ var _config__rspack_import_0 = __webpack_require__(85700);
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
69034: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  decryptedData: function() { return decryptedData; },
  encryptedData: function() { return encryptedData; }
});
/* import */ var core_js_modules_es_json_stringify_js__rspack_import_0 = __webpack_require__(27622);
/* import */ var core_js_modules_es_json_stringify_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__rspack_import_0);
/* import */ var jsencrypt__rspack_import_2 = __webpack_require__(33341);
/* import */ var _api_publicKey__rspack_import_1 = __webpack_require__(53038);



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
67523: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var vue__rspack_import_3 = __webpack_require__(15091);
/* import */ var _store__rspack_import_0 = __webpack_require__(7415);
/* import */ var _utils_validate__rspack_import_2 = __webpack_require__(59937);
/* import */ var _config__rspack_import_1 = __webpack_require__(85700);
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
36499: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        route.component = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 91017));
      } else if (route.component === 'EmptyLayout') {
        route.component = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 51208));
      } else {
        try {
          const index = route.component.indexOf('views');
          const path = index > 0 ? route.component.slice(index) : `views/${route.component}`;
          route.component = () => __webpack_require__(59140)(`./${path}`).catch(err => {
            console.error(`路由组件加载失败: @/${path}`, err);
            return __webpack_require__.e(/* import() */ "8769").then(__webpack_require__.bind(__webpack_require__, 5400));
          });
        } catch (err) {
          console.error(`路由组件解析失败: ${route.component}`, err);
          route.component = () => __webpack_require__.e(/* import() */ "8769").then(__webpack_require__.bind(__webpack_require__, 5400));
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
44784: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return getPageTitle; }
});
/* import */ var _config__rspack_import_0 = __webpack_require__(85700);
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
94400: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
34714: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var axios__rspack_import_8 = __webpack_require__(42925);
/* import */ var _config__rspack_import_4 = __webpack_require__(85700);
/* import */ var _config__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_4);
/* import */ var _store__rspack_import_5 = __webpack_require__(7415);
/* import */ var qs__rspack_import_9 = __webpack_require__(27527);
/* import */ var qs__rspack_import_9_default = /*#__PURE__*/__webpack_require__.n(qs__rspack_import_9);
/* import */ var _router__rspack_import_6 = __webpack_require__(99191);
/* import */ var _utils_validate__rspack_import_10 = __webpack_require__(59937);











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
32434: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var _config__rspack_import_0 = __webpack_require__(85700);
/* import */ var _config__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_config__rspack_import_0);
/* import */ var lodash__rspack_import_1 = __webpack_require__(69345);
/* import */ var lodash__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(lodash__rspack_import_1);
/* import */ var element_ui__rspack_import_2 = __webpack_require__(61093);
/* import */ var element_ui__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(element_ui__rspack_import_2);
/* import */ var _store__rspack_import_3 = __webpack_require__(7415);
/* import */ var _utils_accessToken__rspack_import_4 = __webpack_require__(14652);





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
59937: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
60621: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.29_css-loader@7.1.4_@rspack+core@1.7.6_webpack@_a597eaf0f5c0d79fb3a959f14cc0bcf6/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.29_css-loader@7.1.4_@rspack+core@1.7.6_webpack@_a597eaf0f5c0d79fb3a959f14cc0bcf6/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=0607e7a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"vue-admin-better"}},[_c('router-view')],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.29.0_webpack@5.105.2/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.29_css-loader@7.1.4_@rspack+core@1.7.6_webpack@_a597eaf0f5c0d79fb3a959f14cc0bcf6/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
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
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.29_css-loader@7.1.4_@rspack+core@1.7.6_webpack@_a597eaf0f5c0d79fb3a959f14cc0bcf6/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(75201);
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
  "./VabAd/index.vue": "33192",
  "./VabAppMain/index.vue": "29937",
  "./VabAvatar/index.vue": "87157",
  "./VabBreadcrumb/index.vue": "23506",
  "./VabColorfullIcon/index.vue": "34961",
  "./VabErrorLog/index.vue": "84331",
  "./VabFullScreen/index.vue": "37898",
  "./VabGithubCorner/index.vue": "52091",
  "./VabLogo/index.vue": "93682",
  "./VabNav/index.vue": "39409",
  "./VabQueryForm/VabQueryFormBottomPanel.vue": "48715",
  "./VabQueryForm/VabQueryFormLeftPanel.vue": "62466",
  "./VabQueryForm/VabQueryFormRightPanel.vue": "19995",
  "./VabQueryForm/VabQueryFormTopPanel.vue": "23266",
  "./VabQueryForm/index.vue": "83749",
  "./VabSide/components/VabMenuItem.vue": "61907",
  "./VabSide/components/VabSideItem.vue": "64965",
  "./VabSide/components/VabSubmenu.vue": "75684",
  "./VabSide/index.vue": "99665",
  "./VabTabs/index.vue": "83103",
  "./VabTheme/index.vue": "38219",
  "./VabTop/index.vue": "2726"
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
  "./errorLog.js": "56573",
  "./routes.js": "44667",
  "./settings.js": "89408",
  "./table.js": "55197",
  "./tabsBar.js": "44520",
  "./user.js": "82530"
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
  "./default.scss": "70044"
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
    "33192",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormBottomPanel.vue": [
    "48715",
    9
  ],
  "./styles/themes/default.scss": [
    "70044",
    9
  ],
  "./views/vab/webSocket/index.vue": [
    "49",
    9,
    "4986"
  ],
  "./store/": [
    "7415",
    9
  ],
  "./layouts/components/VabSide": [
    "99665",
    9
  ],
  "./views/vab/table/index.vue": [
    "35016",
    9,
    "3697"
  ],
  "./views/stock/": [
    "23399",
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
    "8412"
  ],
  "./assets/vuejs-fill.svg": [
    "55762",
    1,
    "2591"
  ],
  "./config": [
    "85700",
    7
  ],
  "./views/vab/errorLog": [
    "87387",
    9,
    "9304"
  ],
  "./views/register/index.vue": [
    "93001",
    9,
    "9186"
  ],
  "./views/vab/table/": [
    "35016",
    9,
    "3697"
  ],
  "./layouts/components/VabAvatar": [
    "87157",
    9
  ],
  "./views/vab/errorLog/components/ErrorTest.vue": [
    "5306",
    9,
    "5095"
  ],
  "./api/personalCenter.js": [
    "83161",
    9,
    "6834"
  ],
  "./components/VabUpload": [
    "36364",
    9,
    "4973"
  ],
  "./layouts/components/VabAppMain/index": [
    "29937",
    9
  ],
  "./layouts/components/VabSide/": [
    "99665",
    9
  ],
  "./layouts/components/VabSide/index": [
    "99665",
    9
  ],
  "./views/personnelManagement/userManagement/index.vue": [
    "22071",
    9,
    "5772"
  ],
  "./views/vab/chart/": [
    "61692",
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
    "8477"
  ],
  "./views/mall/goodsList": [
    "90005",
    9,
    "8582"
  ],
  "./views/vab/nested/menu1": [
    "85060",
    9,
    "4133"
  ],
  "./views/vab/tab": [
    "75920",
    9,
    "6009"
  ],
  "./views/register/index": [
    "93001",
    9,
    "9186"
  ],
  "./api/ad.js": [
    "35953",
    9
  ],
  "./views/personnelManagement/roleManagement/index.vue": [
    "17786",
    9,
    "5783"
  ],
  "./views/register/": [
    "93001",
    9,
    "9186"
  ],
  "./api/icon": [
    "98749",
    9,
    "6398"
  ],
  "./components/VabProfile/index.vue": [
    "18571",
    9,
    "5240"
  ],
  "./views/personnelManagement/roleManagement/index": [
    "17786",
    9,
    "5783"
  ],
  "./plugins": [
    "94198",
    9
  ],
  "./layouts/components/VabGithubCorner": [
    "52091",
    9
  ],
  "./layouts/components/VabAppMain/": [
    "29937",
    9
  ],
  "./views/vab/tab/index": [
    "75920",
    9,
    "6009"
  ],
  "./utils/validate.js": [
    "59937",
    9
  ],
  "./layouts/components/VabBreadcrumb": [
    "23506",
    9
  ],
  "./layouts/components/VabLogo/index": [
    "93682",
    9
  ],
  "./views/vab/loading/": [
    "78767",
    9,
    "1396"
  ],
  "./layouts/components/VabAd/": [
    "33192",
    9
  ],
  "./api/user.js": [
    "95719",
    9
  ],
  "./components/SelectTree/index": [
    "76023",
    9,
    "7804"
  ],
  "./views/mall/goodsList/index.vue": [
    "90005",
    9,
    "8582"
  ],
  "./styles/spinner/inner-circles.css": [
    "47340",
    9,
    "4014"
  ],
  "./layouts/components/VabTop/index.vue": [
    "2726",
    9
  ],
  "./layouts/components/VabColorfullIcon/": [
    "34961",
    9
  ],
  "./components/SelectTree": [
    "76023",
    9,
    "7804"
  ],
  "./views/vab/nested/menu1/menu1-1/": [
    "42997",
    9,
    "4982"
  ],
  "./layouts/components/VabFullScreen": [
    "37898",
    9
  ],
  "./views/vab/tree/": [
    "7535",
    9,
    "5940"
  ],
  "./layouts/components/VabErrorLog/": [
    "84331",
    9
  ],
  "./layouts/components/VabSide/components/VabMenuItem.vue": [
    "61907",
    9
  ],
  "./views/vab/chart": [
    "61692",
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
    "8477"
  ],
  "./utils/encrypt.js": [
    "69034",
    9
  ],
  "./layouts": [
    "91017",
    9
  ],
  "./utils/handleRoutes.js": [
    "36499",
    9
  ],
  "./views/vab/permissions": [
    "66751",
    9,
    "3559"
  ],
  "./store/modules/tabsBar.js": [
    "44520",
    9
  ],
  "./views/index": [
    "98798",
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
    "3505"
  ],
  "./views/personnelManagement/userManagement/": [
    "22071",
    9,
    "5772"
  ],
  "./plugins/echarts": [
    "18656",
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
    "7641"
  ],
  "./views/personnelManagement/userManagement/index": [
    "22071",
    9,
    "5772"
  ],
  "./views/vab/backToTop": [
    "90403",
    9,
    "2467"
  ],
  "./views/vab/chart/index": [
    "61692",
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
    "8477"
  ],
  "./views/vab/qrCode": [
    "6212",
    9,
    "2649",
    "8069"
  ],
  "./views/vab/tab/": [
    "75920",
    9,
    "6009"
  ],
  "./views/mall/pay/components/Step2.vue": [
    "97955",
    9,
    "4384"
  ],
  "./views/vab/table/components/TableEdit.vue": [
    "55136",
    9,
    "4201"
  ],
  "./layouts/components/VabErrorLog/index": [
    "84331",
    9
  ],
  "./layouts/components/VabSide/components/VabSubmenu.vue": [
    "75684",
    9
  ],
  "./views/mall/pay/components/Step3": [
    "83443",
    9,
    "2176"
  ],
  "./config/setting.config": [
    "45810",
    7
  ],
  "./views/personnelManagement/menuManagement/components/MenuManagementEdit": [
    "67198",
    9,
    "8691"
  ],
  "./views/personnelManagement/roleManagement/components/RoleManagementEdit": [
    "79427",
    9,
    "4176"
  ],
  "./api/table.js": [
    "49630",
    9,
    "1587"
  ],
  "./views/mall/pay/index": [
    "87972",
    9,
    "4245"
  ],
  "./config/index": [
    "85700",
    7
  ],
  "./api/markdown": [
    "7961",
    9,
    "706"
  ],
  "./layouts/components/VabQueryForm/": [
    "83749",
    9
  ],
  "./views/vab/element/index.vue": [
    "42046",
    9,
    "7939"
  ],
  "./layouts/components/VabQueryForm": [
    "83749",
    9
  ],
  "./views/vab/nested/menu1/": [
    "85060",
    9,
    "4133"
  ],
  "./config/index.js": [
    "85700",
    7
  ],
  "./layouts/EmptyLayout": [
    "51208",
    9
  ],
  "./layouts/components/VabTheme/": [
    "38219",
    9
  ],
  "./components/SelectTree/index.vue": [
    "76023",
    9,
    "7804"
  ],
  "./api/icon.js": [
    "98749",
    9,
    "6398"
  ],
  "./layouts/components/VabLogo": [
    "93682",
    9
  ],
  "./utils/pageTitle.js": [
    "44784",
    9
  ],
  "./assets/zfb_kf.jpg": [
    "93246",
    1,
    "1027"
  ],
  "./store/modules/table.js": [
    "55197",
    9
  ],
  "./views/index/": [
    "98798",
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
    "3505"
  ],
  "./views/index/index": [
    "98798",
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
    "3505"
  ],
  "./components/VabPageHeader/index": [
    "69892",
    9,
    "1893"
  ],
  "./views/personnelManagement/userManagement": [
    "22071",
    9,
    "5772"
  ],
  "./plugins/index": [
    "94198",
    9
  ],
  "./views/index/components/VersionInformation": [
    "86098",
    9,
    "399"
  ],
  "./api/roleManagement.js": [
    "87331",
    9,
    "9856"
  ],
  "./views/vab/upload/index.vue": [
    "10330",
    9,
    "711"
  ],
  "./assets/error_images/cloud.png": [
    "69369",
    1,
    "5970"
  ],
  "./layouts/components/VabSide/components/VabSideItem.vue": [
    "64965",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormRightPanel.vue": [
    "19995",
    9
  ],
  "./utils/index": [
    "29611",
    9,
    "6856"
  ],
  "./utils/static": [
    "65977",
    9,
    "8447",
    "7714"
  ],
  "./views/personalCenter/": [
    "59387",
    9,
    "472"
  ],
  "./layouts/components/VabErrorLog": [
    "84331",
    9
  ],
  "./views/vab/element/": [
    "42046",
    9,
    "7939"
  ],
  "./utils/request": [
    "34714",
    9
  ],
  "./utils/request.js": [
    "34714",
    9
  ],
  "./views/donate/index": [
    "49830",
    9,
    "8987"
  ],
  "./assets/comparison/right.jpg": [
    "36560",
    1,
    "2313"
  ],
  "./views/mall/pay/components/Step2": [
    "97955",
    9,
    "4384"
  ],
  "./layouts/components/VabNav/index.vue": [
    "39409",
    9
  ],
  "./store/index": [
    "7415",
    9
  ],
  "./store/modules/errorLog.js": [
    "56573",
    9
  ],
  "./store/modules/user": [
    "82530",
    9
  ],
  "./store/modules/user.js": [
    "82530",
    9
  ],
  "./layouts/components/VabQueryForm/index": [
    "83749",
    9
  ],
  "./styles/spinner/dots.css": [
    "58162",
    9,
    "4014"
  ],
  "./layouts/components/VabTheme/index.vue": [
    "38219",
    9
  ],
  "./api/personalCenter": [
    "83161",
    9,
    "6834"
  ],
  "./views/index/index.vue": [
    "98798",
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
    "3505"
  ],
  "./views/mall/pay/index.vue": [
    "87972",
    9,
    "4245"
  ],
  "./views/test/index": [
    "29791",
    9,
    "7860"
  ],
  "./views/vab/icon/index.vue": [
    "34611",
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
    "3008"
  ],
  "./layouts/components/VabQueryForm/VabQueryFormLeftPanel": [
    "62466",
    9
  ],
  "./styles/transition.scss": [
    "53763",
    9,
    "4014"
  ],
  "./views/personalCenter/index.vue": [
    "59387",
    9,
    "472"
  ],
  "./views/personnelManagement/roleManagement/components/RoleManagementEdit.vue": [
    "79427",
    9,
    "4176"
  ],
  "./utils/encrypt": [
    "69034",
    9
  ],
  "./main.js": [
    "29560",
    9
  ],
  "./views/vab/more/index.vue": [
    "57135",
    9,
    "3540"
  ],
  "./api/roleManagement": [
    "87331",
    9,
    "9856"
  ],
  "./components/SelectTree/": [
    "76023",
    9,
    "7804"
  ],
  "./layouts/components/VabLogo/index.vue": [
    "93682",
    9
  ],
  "./views/index/components/VersionInformation.vue": [
    "86098",
    9,
    "399"
  ],
  "./plugins/element": [
    "91098",
    9
  ],
  "./utils/validate": [
    "59937",
    9
  ],
  "./utils/handleRoutes": [
    "36499",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormTopPanel.vue": [
    "23266",
    9
  ],
  "./plugins/support": [
    "98365",
    9
  ],
  "./api/publicKey.js": [
    "53038",
    9
  ],
  "./utils/accessToken.js": [
    "14652",
    9
  ],
  "./assets/comparison/left.jpg": [
    "50691",
    1,
    "976"
  ],
  "./views/401.vue": [
    "83704",
    9,
    "3089"
  ],
  "./views/vab/upload/index": [
    "10330",
    9,
    "711"
  ],
  "./layouts/components/VabLogo/": [
    "93682",
    9
  ],
  "./utils/vab.js": [
    "32434",
    9
  ],
  "./views/vab/more": [
    "57135",
    9,
    "3540"
  ],
  "./components/VabSnow/": [
    "10718",
    9,
    "7635"
  ],
  "./plugins/support.js": [
    "98365",
    9
  ],
  "./plugins/vabIcon.js": [
    "64198",
    9
  ],
  "./api/colorfulIcon.js": [
    "31223",
    9,
    "3660"
  ],
  "./layouts/components/VabQueryForm/index.vue": [
    "83749",
    9
  ],
  "./styles/spinner/plus.css": [
    "38226",
    9,
    "4014"
  ],
  "./assets/ewm.png": [
    "63671",
    1,
    "6364"
  ],
  "./utils/": [
    "29611",
    9,
    "6856"
  ],
  "./utils/clipboard": [
    "87361",
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
    "3914"
  ],
  "./views/vab/table/components/TableEdit": [
    "55136",
    9,
    "4201"
  ],
  "./store/modules/errorLog": [
    "56573",
    9
  ],
  "./config/settings.js": [
    "97883",
    7,
    "9064"
  ],
  "./views/vab/more/": [
    "57135",
    9,
    "3540"
  ],
  "./views/vab/icon/": [
    "34611",
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
    "3008"
  ],
  "./views/personnelManagement/menuManagement/": [
    "88321",
    9,
    "8954"
  ],
  "./components/VabUpload/": [
    "36364",
    9,
    "4973"
  ],
  "./views/login/index.vue": [
    "99922",
    9,
    "3423"
  ],
  "./components/VabProfile/index": [
    "18571",
    9,
    "5240"
  ],
  "./config/net.config.js": [
    "94183",
    7
  ],
  "./store/modules/tabsBar": [
    "44520",
    9
  ],
  "./utils/vab": [
    "32434",
    9
  ],
  "./store/modules/table": [
    "55197",
    9
  ],
  "./api/router.js": [
    "45481",
    9
  ],
  "./layouts/components/VabAppMain": [
    "29937",
    9
  ],
  "./layouts/export": [
    "44747",
    9
  ],
  "./api/userManagement.js": [
    "14408",
    9,
    "113"
  ],
  "./views/mall/pay": [
    "87972",
    9,
    "4245"
  ],
  "./views/test/index.vue": [
    "29791",
    9,
    "7860"
  ],
  "./views/vab/chart/index.vue": [
    "61692",
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
    "8477"
  ],
  "./api/markdown.js": [
    "7961",
    9,
    "706"
  ],
  "./layouts/index.vue": [
    "91017",
    9
  ],
  "./views/mall/pay/components/Step1.vue": [
    "29393",
    9,
    "1706"
  ],
  "./layouts/components/VabQueryForm/VabQueryFormLeftPanel.vue": [
    "62466",
    9
  ],
  "./layouts/components/VabAvatar/": [
    "87157",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormBottomPanel": [
    "48715",
    9
  ],
  "./views/stock": [
    "23399",
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
    "8412"
  ],
  "./plugins/element.js": [
    "91098",
    9
  ],
  "./components/VabSnow/index.vue": [
    "10718",
    9,
    "7635"
  ],
  "./layouts/": [
    "91017",
    9
  ],
  "./layouts/components/VabTabs/index": [
    "83103",
    9
  ],
  "./utils/index.js": [
    "29611",
    9,
    "6856"
  ],
  "./styles/normalize.scss": [
    "75851",
    9,
    "4014"
  ],
  "./views/vab/errorLog/index": [
    "87387",
    9,
    "9304"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1": [
    "49210",
    9,
    "4151"
  ],
  "./views/login": [
    "99922",
    9,
    "3423"
  ],
  "./views/vab/tree/index": [
    "7535",
    9,
    "5940"
  ],
  "./assets/error_images/404.png": [
    "78462",
    1,
    "4899"
  ],
  "./layouts/components/VabAppMain/index.vue": [
    "29937",
    9
  ],
  "./utils/permission.js": [
    "24652",
    9,
    "7149"
  ],
  "./views/personalCenter/index": [
    "59387",
    9,
    "472"
  ],
  "./views/vab/tree/index.vue": [
    "7535",
    9,
    "5940"
  ],
  "./api/stock.js": [
    "97548",
    9,
    "3005"
  ],
  "./api/userManagement": [
    "14408",
    9,
    "113"
  ],
  "./layouts/components/VabTop/index": [
    "2726",
    9
  ],
  "./config/theme.config.js": [
    "95673",
    7
  ],
  "./views/vab/nested/menu1/menu1-1/index.vue": [
    "42997",
    9,
    "4982"
  ],
  "./views/vab/tab/index.vue": [
    "75920",
    9,
    "6009"
  ],
  "./views/personnelManagement/userManagement/components/UserManagementEdit": [
    "88806",
    9,
    "395"
  ],
  "./views/vab/errorLog/index.vue": [
    "87387",
    9,
    "9304"
  ],
  "./views/donate/index.vue": [
    "49830",
    9,
    "8987"
  ],
  "./utils/accessToken": [
    "14652",
    9
  ],
  "./views/mall/goodsList/index": [
    "90005",
    9,
    "8582"
  ],
  "./views/mall/goodsList/": [
    "90005",
    9,
    "8582"
  ],
  "./components/VabCharge/index.vue": [
    "21342",
    9,
    "4499"
  ],
  "./views/vab/lodash/index.vue": [
    "47841",
    9,
    "266"
  ],
  "./views/vab/icon/colorfulIcon": [
    "60682",
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
    "551"
  ],
  "./views/vab/backToTop/": [
    "90403",
    9,
    "2467"
  ],
  "./views/vab/nested/menu1/index": [
    "85060",
    9,
    "4133"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/": [
    "49210",
    9,
    "4151"
  ],
  "./styles/variables.scss": [
    "75765",
    9
  ],
  "./views/vab/lodash/index": [
    "47841",
    9,
    "266"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/index.vue": [
    "49210",
    9,
    "4151"
  ],
  "./views/vab/permissions/": [
    "66751",
    9,
    "3559"
  ],
  "./layouts/components/VabFullScreen/": [
    "37898",
    9
  ],
  "./views/mall/pay/": [
    "87972",
    9,
    "4245"
  ],
  "./views/vab/form": [
    "98902",
    9,
    "9579"
  ],
  "./config/theme.config": [
    "95673",
    7
  ],
  "./views/register": [
    "93001",
    9,
    "9186"
  ],
  "./assets/error_images/401.png": [
    "27843",
    1,
    "4848"
  ],
  "./layouts/components/VabSide/components/VabMenuItem": [
    "61907",
    9
  ],
  "./store/modules/routes.js": [
    "44667",
    9
  ],
  "./layouts/components/VabColorfullIcon": [
    "34961",
    9
  ],
  "./api/notice.js": [
    "88952",
    9,
    "8737"
  ],
  "./layouts/components/VabBreadcrumb/index": [
    "23506",
    9
  ],
  "./layouts/components/VabBreadcrumb/index.vue": [
    "23506",
    9
  ],
  "./main": [
    "29560",
    9
  ],
  "./styles/loading.scss": [
    "59756",
    9,
    "4014"
  ],
  "./layouts/components/VabTabs/": [
    "83103",
    9
  ],
  "./views/personnelManagement/roleManagement/": [
    "17786",
    9,
    "5783"
  ],
  "./views/vab/editor": [
    "42975",
    9,
    "381",
    "420"
  ],
  "./utils/static.js": [
    "65977",
    9,
    "8447",
    "7714"
  ],
  "./views/personnelManagement/menuManagement/components/MenuManagementEdit.vue": [
    "67198",
    9,
    "8691"
  ],
  "./views/vab/errorLog/": [
    "87387",
    9,
    "9304"
  ],
  "./views/vab/icon": [
    "34611",
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
    "3008"
  ],
  "./views/vab/icon/colorfulIcon.vue": [
    "60682",
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
    "551"
  ],
  "./views/vab/nested/menu1/menu1-1/index": [
    "42997",
    9,
    "4982"
  ],
  "./api/github": [
    "63271",
    9,
    "6252"
  ],
  "./views/vab/lodash/": [
    "47841",
    9,
    "266"
  ],
  "./views/vab/loading/index": [
    "78767",
    9,
    "1396"
  ],
  "./views/test": [
    "29791",
    9,
    "7860"
  ],
  "./layouts/components/VabSide/index.vue": [
    "99665",
    9
  ],
  "./components/VabProfile": [
    "18571",
    9,
    "5240"
  ],
  "./utils/errorLog.js": [
    "67523",
    9
  ],
  "./views/vab/editor/index.vue": [
    "42975",
    9,
    "381",
    "420"
  ],
  "./utils": [
    "29611",
    9,
    "6856"
  ],
  "./api/table": [
    "49630",
    9,
    "1587"
  ],
  "./api/publicKey": [
    "53038",
    9
  ],
  "./components/VabSnow/index": [
    "10718",
    9,
    "7635"
  ],
  "./views/401": [
    "83704",
    9,
    "3089"
  ],
  "./store/modules/settings.js": [
    "89408",
    9
  ],
  "./views/stock/index.vue": [
    "23399",
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
    "8412"
  ],
  "./views/404": [
    "5400",
    9,
    "8769"
  ],
  "./views/vab/backToTop/index": [
    "90403",
    9,
    "2467"
  ],
  "./views/vab/form/index.vue": [
    "98902",
    9,
    "9579"
  ],
  "./views/vab/upload/": [
    "10330",
    9,
    "711"
  ],
  "./layouts/components/VabFullScreen/index.vue": [
    "37898",
    9
  ],
  "./layouts/components/VabTop": [
    "2726",
    9
  ],
  "./layouts/index": [
    "91017",
    9
  ],
  "./plugins/index.js": [
    "94198",
    9
  ],
  "./views/personnelManagement/roleManagement": [
    "17786",
    9,
    "5783"
  ],
  "./views/vab/form/": [
    "98902",
    9,
    "9579"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/index": [
    "49210",
    9,
    "4151"
  ],
  "./components/VabUpload/index.vue": [
    "36364",
    9,
    "4973"
  ],
  "./components/VabSnow": [
    "10718",
    9,
    "7635"
  ],
  "./config/permission.js": [
    "62169",
    9
  ],
  "./components/VabUpload/index": [
    "36364",
    9,
    "4973"
  ],
  "./utils/errorLog": [
    "67523",
    9
  ],
  "./config/settings": [
    "97883",
    7,
    "9064"
  ],
  "./layouts/components/VabColorfullIcon/index": [
    "34961",
    9
  ],
  "./api/github.js": [
    "63271",
    9,
    "6252"
  ],
  "./views/vab/qrCode/index.vue": [
    "6212",
    9,
    "2649",
    "8069"
  ],
  "./utils/printInfo": [
    "94400",
    9
  ],
  "./api/stock": [
    "97548",
    9,
    "3005"
  ],
  "./components/VabPageHeader": [
    "69892",
    9,
    "1893"
  ],
  "./api/notice": [
    "88952",
    9,
    "8737"
  ],
  "./layouts/EmptyLayout.vue": [
    "51208",
    9
  ],
  "./layouts/components/VabBreadcrumb/": [
    "23506",
    9
  ],
  "./views/vab/element/index": [
    "42046",
    9,
    "7939"
  ],
  "./layouts/components/VabAd/index": [
    "33192",
    9
  ],
  "./router": [
    "99191",
    9
  ],
  "./views/404.vue": [
    "5400",
    9,
    "8769"
  ],
  "./App": [
    "60621",
    9
  ],
  "./store": [
    "7415",
    9
  ],
  "./views/vab/nested/menu1/index.vue": [
    "85060",
    9,
    "4133"
  ],
  "./assets/qr_logo/lqr_logo.png": [
    "1621",
    1,
    "294"
  ],
  "./views/donate/": [
    "49830",
    9,
    "8987"
  ],
  "./api/ad": [
    "35953",
    9
  ],
  "./views/vab/nested/menu1/menu1-1": [
    "42997",
    9,
    "4982"
  ],
  "./layouts/components/VabAvatar/index": [
    "87157",
    9
  ],
  "./layouts/components/VabGithubCorner/index": [
    "52091",
    9
  ],
  "./layouts/components/VabErrorLog/index.vue": [
    "84331",
    9
  ],
  "./views/vab/webSocket": [
    "49",
    9,
    "4986"
  ],
  "./store/index.js": [
    "7415",
    9
  ],
  "./config/": [
    "85700",
    7
  ],
  "./layouts/export.js": [
    "44747",
    9
  ],
  "./layouts/components/VabGithubCorner/index.vue": [
    "52091",
    9
  ],
  "./layouts/components/VabTabs/index.vue": [
    "83103",
    9
  ],
  "./views/test/": [
    "29791",
    9,
    "7860"
  ],
  "./components/VabProfile/": [
    "18571",
    9,
    "5240"
  ],
  "./views/login/index": [
    "99922",
    9,
    "3423"
  ],
  "./api/router": [
    "45481",
    9
  ],
  "./components/VabCharge": [
    "21342",
    9,
    "4499"
  ],
  "./views/vab/form/index": [
    "98902",
    9,
    "9579"
  ],
  "./views/vab/more/index": [
    "57135",
    9,
    "3540"
  ],
  "./api/goodsList": [
    "34768",
    9,
    "9129"
  ],
  "./assets/mynb.jpg": [
    "22038",
    1,
    "5995"
  ],
  "./components/VabPageHeader/": [
    "69892",
    9,
    "1893"
  ],
  "./plugins/": [
    "94198",
    9
  ],
  "./styles/vab.scss": [
    "39749",
    9
  ],
  "./router/index.js": [
    "99191",
    9
  ],
  "./views/mall/pay/components/Step3.vue": [
    "83443",
    9,
    "2176"
  ],
  "./views/vab/lodash": [
    "47841",
    9,
    "266"
  ],
  "./views/vab/permissions/index.vue": [
    "66751",
    9,
    "3559"
  ],
  "./views/vab/table": [
    "35016",
    9,
    "3697"
  ],
  "./layouts/components/VabGithubCorner/": [
    "52091",
    9
  ],
  "./views/vab/qrCode/index": [
    "6212",
    9,
    "2649",
    "8069"
  ],
  "./router/index": [
    "99191",
    9
  ],
  "./views/vab/webSocket/index": [
    "49",
    9,
    "4986"
  ],
  "./views/stock/index": [
    "23399",
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
    "8412"
  ],
  "./views/personnelManagement/menuManagement/index.vue": [
    "88321",
    9,
    "8954"
  ],
  "./api/tree": [
    "83404",
    9,
    "8669"
  ],
  "./views/vab/tree": [
    "7535",
    9,
    "5940"
  ],
  "./components/VabCharge/": [
    "21342",
    9,
    "4499"
  ],
  "./layouts/components/VabNav": [
    "39409",
    9
  ],
  "./config/setting.config.js": [
    "45810",
    7
  ],
  "./layouts/components/VabColorfullIcon/index.vue": [
    "34961",
    9
  ],
  "./views/mall/pay/components/Step1": [
    "29393",
    9,
    "1706"
  ],
  "./views/vab/table/index": [
    "35016",
    9,
    "3697"
  ],
  "./views/vab/webSocket/": [
    "49",
    9,
    "4986"
  ],
  "./views/vab/permissions/index": [
    "66751",
    9,
    "3559"
  ],
  "./layouts/components/VabTheme/index": [
    "38219",
    9
  ],
  "./store/modules/settings": [
    "89408",
    9
  ],
  "./plugins/echarts.js": [
    "18656",
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
    "7641"
  ],
  "./views/vab/loading": [
    "78767",
    9,
    "1396"
  ],
  "./layouts/components/VabNav/index": [
    "39409",
    9
  ],
  "./views/vab/loading/index.vue": [
    "78767",
    9,
    "1396"
  ],
  "./utils/pageTitle": [
    "44784",
    9
  ],
  "./api/remixIcon": [
    "76990",
    9,
    "19"
  ],
  "./config/net.config": [
    "94183",
    7
  ],
  "./layouts/components/VabFullScreen/index": [
    "37898",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormTopPanel": [
    "23266",
    9
  ],
  "./layouts/components/VabSide/components/VabSubmenu": [
    "75684",
    9
  ],
  "./layouts/components/VabTop/": [
    "2726",
    9
  ],
  "./utils/clipboard.js": [
    "87361",
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
    "3914"
  ],
  "./plugins/vabIcon": [
    "64198",
    9
  ],
  "./views/login/": [
    "99922",
    9,
    "3423"
  ],
  "./views/vab/backToTop/index.vue": [
    "90403",
    9,
    "2467"
  ],
  "./App.vue": [
    "60621",
    9
  ],
  "./config/permission": [
    "62169",
    9
  ],
  "./views/donate": [
    "49830",
    9,
    "8987"
  ],
  "./views/personnelManagement/menuManagement": [
    "88321",
    9,
    "8954"
  ],
  "./views/vab/editor/": [
    "42975",
    9,
    "381",
    "420"
  ],
  "./api/tree.js": [
    "83404",
    9,
    "8669"
  ],
  "./api/remixIcon.js": [
    "76990",
    9,
    "19"
  ],
  "./views/vab/upload": [
    "10330",
    9,
    "711"
  ],
  "./api/menuManagement.js": [
    "13684",
    9,
    "3029"
  ],
  "./components/VabCharge/index": [
    "21342",
    9,
    "4499"
  ],
  "./layouts/components/VabAvatar/index.vue": [
    "87157",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormRightPanel": [
    "19995",
    9
  ],
  "./utils/printInfo.js": [
    "94400",
    9
  ],
  "./views/personalCenter": [
    "59387",
    9,
    "472"
  ],
  "./views/personnelManagement/menuManagement/index": [
    "88321",
    9,
    "8954"
  ],
  "./views/vab/element": [
    "42046",
    9,
    "7939"
  ],
  "./views/vab/icon/index": [
    "34611",
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
    "3008"
  ],
  "./api/menuManagement": [
    "13684",
    9,
    "3029"
  ],
  "./api/user": [
    "95719",
    9
  ],
  "./assets/login_images/background.jpg": [
    "52789",
    1,
    "7734"
  ],
  "./components/VabPageHeader/index.vue": [
    "69892",
    9,
    "1893"
  ],
  "./layouts/components/VabAd/index.vue": [
    "33192",
    9
  ],
  "./layouts/components/VabSide/components/VabSideItem": [
    "64965",
    9
  ],
  "./layouts/components/VabTabs": [
    "83103",
    9
  ],
  "./store/modules/routes": [
    "44667",
    9
  ],
  "./styles/spinner/gauge.css": [
    "25513",
    9,
    "4014"
  ],
  "./router/": [
    "99191",
    9
  ],
  "./utils/permission": [
    "24652",
    9,
    "7149"
  ],
  "./views/vab/editor/index": [
    "42975",
    9,
    "381",
    "420"
  ],
  "./views/vab/qrCode/": [
    "6212",
    9,
    "2649",
    "8069"
  ],
  "./views/vab/errorLog/components/ErrorTest": [
    "5306",
    9,
    "5095"
  ],
  "./api/colorfulIcon": [
    "31223",
    9,
    "3660"
  ],
  "./layouts/components/VabNav/": [
    "39409",
    9
  ],
  "./layouts/components/VabTheme": [
    "38219",
    9
  ],
  "./api/goodsList.js": [
    "34768",
    9,
    "9129"
  ],
  "./views/personnelManagement/userManagement/components/UserManagementEdit.vue": [
    "88806",
    9,
    "395"
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
  return "js/" + ({"1728": "vab-chunk-2","2643": "vab-chunk-7","2865": "vab-chunk-1","3238": "vab-chunk-4","3322": "vab-chunk-0","4375": "vab-chunk-3","4684": "vab-chunk-6","6185": "vab-chunk-9","6304": "vab-chunk-13","6589": "vab-chunk-5","7933": "vab-chunk-14","8226": "vab-chunk-8","9367": "vab-chunk-12","9505": "vab-chunk-10","9898": "vab-chunk-11",}[chunkId] || chunkId) + "." + {"1027": "a8938d43","113": "44cba0f8","1396": "636b6313","1587": "b67bc49b","1706": "15d4d015","1728": "ea11338c","1893": "614016bc","19": "1a8d0445","2176": "ba9c8c0b","2313": "edb617e9","2467": "8b67ced3","2591": "81d8a6c8","2643": "36adc3c6","2649": "84726fc2","266": "ca43f43a","2865": "2a256dca","294": "3512cd63","3005": "916b77cd","3008": "0a5dd96d","3029": "5200a26c","3089": "d3f4567a","3238": "c7216bee","3322": "e3a37698","3423": "44558572","3505": "29cb720a","3540": "452c7179","3559": "ee759482","3660": "58df5535","3697": "03f782fa","381": "d0e89f99","3914": "bcb9de65","395": "401220c0","399": "aede7380","4133": "4063db88","4151": "84eafb91","4176": "c80fea60","420": "b1305bd0","4201": "bcdb7288","4245": "43fae708","4375": "c606e102","4384": "f063d36a","4499": "c2eba9e5","4684": "8f72d5a5","472": "c39da9c2","4848": "89359e81","4899": "05849ecc","4973": "42e9de91","4982": "47142ae8","4986": "f526f44c","5095": "35a77f15","5240": "30a32f00","551": "a9d0fdb3","5772": "543b5df7","5783": "ad2d7131","5940": "f653321c","5970": "058651ba","5995": "01fb5b5d","6009": "9744e56e","6185": "08ca3e2b","6252": "a7be98b5","6304": "11ddb791","6364": "42c9fa17","6398": "a0c645a0","6589": "8143a197","6834": "743033a9","6856": "51820384","706": "e354ad66","711": "1468324c","7149": "00abbe78","7635": "8825d6b0","7641": "02cefc55","7714": "b515e60c","7734": "011d2bf0","7804": "6b52b9fb","7860": "7cc83cb6","7933": "8b8e302f","7939": "82c97cf4","8069": "8ec55f60","8226": "ff662d22","8412": "cb2f58d5","8447": "8cdc9fd6","8477": "22c3e2a4","8582": "6435737e","8669": "e676bfbc","8691": "da5876ee","8737": "1c86d425","8769": "2787b5b8","8954": "97e1999f","8987": "00f793d6","9064": "4991782e","9129": "06d13574","9186": "6273d11c","9304": "f3fc2a59","9367": "0c898704","9505": "e347e87f","9579": "a28eb8ec","976": "5ceaa25a","9856": "2e9fb2ae","9898": "91c1c010",}[chunkId] + ".js"
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
__webpack_require__.rv = function() { return "1.7.6"; }
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
__webpack_require__.ruid = "bundler=rspack@1.7.6";
}();
// startup
// Load entry module and return exports
// This entry module depends on other loaded chunks and execution need to be delayed
var __webpack_exports__ = __webpack_require__.O(undefined, ["4014", "4569", "1545", "2529", "8306", "9988"], function() { return __webpack_require__(29560) });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;