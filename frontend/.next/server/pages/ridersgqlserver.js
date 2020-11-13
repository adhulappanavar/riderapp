module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ridersgqlserver.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ridersgqlserver.tsx":
/*!***********************************!*\
  !*** ./pages/ridersgqlserver.tsx ***!
  \***********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/anidhula/learn/strapi/riderapp/frontend/pages/ridersgqlserver.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst MyRiderQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"gql\"]`\nquery qriders {\n  riders\n  \t{\n      id\n      Name\n      orders { id\n        OrderStatus}\n  }\n}\n`;\n\nfunction RidersGQLServerSideProps({\n  riders\n}) {\n  return __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, riders.map(rider => __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, rider.Name, \" ---- \", rider.Title, \" \"), __jsx(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 10\n    }\n  }, JSON.stringify(rider, null, 2)))));\n}\n\nconst getServerSideProps = async () => {\n  const res = await fetch('http://localhost:1337/Riders');\n  const riders = await res.json();\n  console.log(riders);\n  return {\n    props: {\n      riders\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RidersGQLServerSideProps);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yaWRlcnNncWxzZXJ2ZXIudHN4PzZjOTMiXSwibmFtZXMiOlsiTXlSaWRlclF1ZXJ5IiwiZ3FsIiwiUmlkZXJzR1FMU2VydmVyU2lkZVByb3BzIiwicmlkZXJzIiwibWFwIiwicmlkZXIiLCJOYW1lIiwiVGl0bGUiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQWNBLE1BQU1BLFlBQVksR0FBR0Msa0RBQUk7Ozs7Ozs7Ozs7Q0FBekI7O0FBWUEsU0FBU0Msd0JBQVQsQ0FBa0M7QUFBRUM7QUFBRixDQUFsQyxFQUE4QztBQUM1QyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsTUFBTSxDQUFDQyxHQUFQLENBQVlDLEtBQUQsSUFDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxLQUFLLENBQUNDLElBQVgsWUFBdUJELEtBQUssQ0FBQ0UsS0FBN0IsTUFEQSxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUIsQ0FBTixDQUZELENBREQsQ0FESCxDQURGO0FBV0Q7O0FBRU0sTUFBTUssa0JBQWtCLEdBQUcsWUFBWTtBQUM1QyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDhCQUFELENBQXZCO0FBQ0EsUUFBTVQsTUFBZSxHQUFHLE1BQU1RLEdBQUcsQ0FBQ0UsSUFBSixFQUE5QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVosTUFBWjtBQUVBLFNBQU87QUFDTGEsU0FBSyxFQUFFO0FBQ0xiO0FBREs7QUFERixHQUFQO0FBS0QsQ0FYTTtBQWFRRCx1RkFBZiIsImZpbGUiOiIuL3BhZ2VzL3JpZGVyc2dxbHNlcnZlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSBcInNyYy9hcG9sbG9cIjtcblxudHlwZSBSaWRlciA9IHtcbiAgTmFtZTogc3RyaW5nXG4gIFRpdGxlIDogc3RyaW5nXG4gIG9yZGVycyA6IE9yZGVyW11cbn1cblxudHlwZSBPcmRlciA9IHtcbiAgb3JkZXJTdGF0dXM6IHN0cmluZ1xuXG59XG5cbmNvbnN0IE15UmlkZXJRdWVyeSA9IGdxbGBcbnF1ZXJ5IHFyaWRlcnMge1xuICByaWRlcnNcbiAgXHR7XG4gICAgICBpZFxuICAgICAgTmFtZVxuICAgICAgb3JkZXJzIHsgaWRcbiAgICAgICAgT3JkZXJTdGF0dXN9XG4gIH1cbn1cbmA7XG5cbmZ1bmN0aW9uIFJpZGVyc0dRTFNlcnZlclNpZGVQcm9wcyh7IHJpZGVycyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3JpZGVycy5tYXAoKHJpZGVyKSA9PiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxsaT57cmlkZXIuTmFtZX0gLS0tLSB7cmlkZXIuVGl0bGV9IDwvbGk+XG4gICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShyaWRlciwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApKX1cbiAgICA8L3VsPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjEzMzcvUmlkZXJzJylcbiAgY29uc3QgcmlkZXJzOiBSaWRlcltdID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKHJpZGVycylcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByaWRlcnMsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSaWRlcnNHUUxTZXJ2ZXJTaWRlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ridersgqlserver.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });