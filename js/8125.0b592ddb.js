/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2026-4-28 06:32:14
 */
"use strict";
(self["rspackChunkvue_admin_better"] = self["rspackChunkvue_admin_better"] || []).push([[8125], {
60876: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  doDelete: function() { return doDelete; },
  doEdit: function() { return doEdit; },
  getList: function() { return getList; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(6254);

function getList(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/userManagement/getList',
    method: 'post',
    data
  });
}
function doEdit(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/userManagement/doEdit',
    method: 'post',
    data
  });
}
function doDelete(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/userManagement/doDelete',
    method: 'post',
    data
  });
}

}),

}]);