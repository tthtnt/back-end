/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from a\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2EuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLy4vc3JjL2FwaS9hLmpzPzAyNzQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4KSB7XG4gIGN0eC5ib2R5ID0ge1xuICAgIFwibWVzc2FnZVwiOiBcImhlbGxvIGZyb20gYVwiXG4gIH07XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from b\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2IuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLy4vc3JjL2FwaS9iLmpzPzgxYzQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4KSB7XG4gIGN0eC5ib2R5ID0ge1xuICAgIFwibWVzc2FnZVwiOiBcImhlbGxvIGZyb20gYlwiXG4gIH07XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/api/userController.js":
/*!***********************************!*\
  !*** ./src/api/userController.js ***!
  \***********************************/
/***/ ((module) => {

eval("function getUserInfo(ctx) {\n  const {\n    body,\n    header\n  } = ctx.request;\n  console.log(body);\n  console.log(header);\n  // console.log(ctx.request)\n  const {\n    name,\n    age\n  } = body;\n  const {\n    role\n  } = header;\n  if (!body || !name || !age) {\n    ctx.status = 404;\n    ctx.body = {\n      code: 404,\n      msg: 'name与age不能为空'\n    };\n  } else {\n    if (!(role && role === 'admin')) {\n      ctx.status = 401;\n      ctx.body = {\n        code: 401,\n        msg: 'unauthorized post'\n      };\n    } else {\n      ctx.body = {\n        code: 200,\n        data: {\n          ...body\n        },\n        msg: '上传成功'\n      };\n    }\n  }\n}\nmodule.exports = {\n  getUserInfo\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL3VzZXJDb250cm9sbGVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLy4vc3JjL2FwaS91c2VyQ29udHJvbGxlci5qcz83NTc5Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFVzZXJJbmZvKGN0eCkge1xuICBjb25zdCB7XG4gICAgYm9keSxcbiAgICBoZWFkZXJcbiAgfSA9IGN0eC5yZXF1ZXN0O1xuICBjb25zb2xlLmxvZyhib2R5KTtcbiAgY29uc29sZS5sb2coaGVhZGVyKTtcbiAgLy8gY29uc29sZS5sb2coY3R4LnJlcXVlc3QpXG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIGFnZVxuICB9ID0gYm9keTtcbiAgY29uc3Qge1xuICAgIHJvbGVcbiAgfSA9IGhlYWRlcjtcbiAgaWYgKCFib2R5IHx8ICFuYW1lIHx8ICFhZ2UpIHtcbiAgICBjdHguc3RhdHVzID0gNDA0O1xuICAgIGN0eC5ib2R5ID0ge1xuICAgICAgY29kZTogNDA0LFxuICAgICAgbXNnOiAnbmFtZeS4jmFnZeS4jeiDveS4uuepuidcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGlmICghKHJvbGUgJiYgcm9sZSA9PT0gJ2FkbWluJykpIHtcbiAgICAgIGN0eC5zdGF0dXMgPSA0MDE7XG4gICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgY29kZTogNDAxLFxuICAgICAgICBtc2c6ICd1bmF1dGhvcml6ZWQgcG9zdCdcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi5ib2R5XG4gICAgICAgIH0sXG4gICAgICAgIG1zZzogJ+S4iuS8oOaIkOWKnydcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0VXNlckluZm9cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/userController.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes_routes__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\n// 处理header\napp.use(koa_helmet__WEBPACK_IMPORTED_MODULE_3___default()());\n// 处理body\napp.use(koa_body__WEBPACK_IMPORTED_MODULE_1___default()());\n// 处理静态文件\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_4___default()(path__WEBPACK_IMPORTED_MODULE_2___default().join(__dirname, '../public')));\napp.use(_routes_routes__WEBPACK_IMPORTED_MODULE_5___default()());\nconsole.log(\"listen success 3001\");\napp.listen(3001);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFjay1lbmQvLi9zcmMvaW5kZXguanM/ZDliZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5pbXBvcnQgS29hQm9keSBmcm9tICdrb2EtYm9keSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBoZWxtZXQgZnJvbSAna29hLWhlbG1ldCc7XG5pbXBvcnQgc3RhdGljcyBmcm9tICdrb2Etc3RhdGljJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXMvcm91dGVzJztcbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTtcbi8vIOWkhOeQhmhlYWRlclxuYXBwLnVzZShoZWxtZXQoKSk7XG4vLyDlpITnkIZib2R5XG5hcHAudXNlKEtvYUJvZHkoKSk7XG4vLyDlpITnkIbpnZnmgIHmlofku7ZcbmFwcC51c2Uoc3RhdGljcyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljJykpKTtcbmFwcC51c2Uocm91dGVyKCkpO1xuY29uc29sZS5sb2coXCJsaXN0ZW4gc3VjY2VzcyAzMDAxXCIpO1xuYXBwLmxpc3RlbigzMDAxKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/aRouter.js":
/*!*******************************!*\
  !*** ./src/routes/aRouter.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\nconst router = new Router();\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL2FSb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLy4vc3JjL3JvdXRlcy9hUm91dGVyLmpzPzk3ODgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpO1xuY29uc3QgYSA9IHJlcXVpcmUoJy4uL2FwaS9hJyk7XG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5yb3V0ZXIuZ2V0KCcvYScsIGEpO1xubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/aRouter.js\n");

/***/ }),

/***/ "./src/routes/bRouter.js":
/*!*******************************!*\
  !*** ./src/routes/bRouter.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\nconst router = new Router();\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL2JSb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLy4vc3JjL3JvdXRlcy9iUm91dGVyLmpzP2FhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpO1xuY29uc3QgYiA9IHJlcXVpcmUoJy4uL2FwaS9iJyk7XG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5yb3V0ZXIuZ2V0KCcvYicsIGIpO1xubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/bRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const combineRoutes = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\nconst aroutes = __webpack_require__(/*! ./aRouter */ \"./src/routes/aRouter.js\");\nconst broutes = __webpack_require__(/*! ./bRouter */ \"./src/routes/bRouter.js\");\nconst userRoutes = __webpack_require__(/*! ./user */ \"./src/routes/user.js\");\nmodule.exports = combineRoutes(aroutes, broutes, userRoutes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFjay1lbmQvLi9zcmMvcm91dGVzL3JvdXRlcy5qcz9jNzY0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbWJpbmVSb3V0ZXMgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJyk7XG5jb25zdCBhcm91dGVzID0gcmVxdWlyZSgnLi9hUm91dGVyJyk7XG5jb25zdCBicm91dGVzID0gcmVxdWlyZSgnLi9iUm91dGVyJyk7XG5jb25zdCB1c2VyUm91dGVzID0gcmVxdWlyZSgnLi91c2VyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVSb3V0ZXMoYXJvdXRlcywgYnJvdXRlcywgdXNlclJvdXRlcyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "./src/routes/user.js":
/*!****************************!*\
  !*** ./src/routes/user.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst user = __webpack_require__(/*! ../api/userController */ \"./src/api/userController.js\");\nconst router = new Router();\nrouter.prefix('/api');\nrouter.post('/user', user.getUserInfo);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3VzZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFjay1lbmQvLi9zcmMvcm91dGVzL3VzZXIuanM/ZGJmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdrb2Etcm91dGVyJyk7XG5jb25zdCB1c2VyID0gcmVxdWlyZSgnLi4vYXBpL3VzZXJDb250cm9sbGVyJyk7XG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5yb3V0ZXIucHJlZml4KCcvYXBpJyk7XG5yb3V0ZXIucG9zdCgnL3VzZXInLCB1c2VyLmdldFVzZXJJbmZvKTtcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/user.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-body");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-combine-routers");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-helmet");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;