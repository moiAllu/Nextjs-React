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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/newDetailPage.js":
/*!*********************************************!*\
  !*** ./components/meetups/newDetailPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _newDetailPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newDetailPage.module.css */ \"./components/meetups/newDetailPage.module.css\");\n/* harmony import */ var _newDetailPage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_newDetailPage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/aliabbasi/Documents/NextJS react/components/meetups/newDetailPage.js\";\n\n\nconst NewDetailPage = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _newDetailPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.image,\n      alt: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: props.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewDetailPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvbmV3RGV0YWlsUGFnZS5qcz9mMWZmIl0sIm5hbWVzIjpbIk5ld0RldGFpbFBhZ2UiLCJwcm9wcyIsImNsYXNzZXMiLCJkZXRhaWwiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDL0Isc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLGdFQUFPLENBQUNDLE1BQTVCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUVGLEtBQUssQ0FBQ0csS0FBaEI7QUFBdUIsU0FBRyxFQUFFSCxLQUFLLENBQUNJO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGdCQUFLSixLQUFLLENBQUNJO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsZ0JBQVVKLEtBQUssQ0FBQ0s7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUEsZ0JBQUlMLEtBQUssQ0FBQ007QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FURDs7QUFVZVAsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvbmV3RGV0YWlsUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vbmV3RGV0YWlsUGFnZS5tb2R1bGUuY3NzJztcblxuY29uc3QgTmV3RGV0YWlsUGFnZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTmV3RGV0YWlsUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/newDetailPage.js\n");

/***/ }),

/***/ "./components/meetups/newDetailPage.module.css":
/*!*****************************************************!*\
  !*** ./components/meetups/newDetailPage.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"newDetailPage_detail__2tj5g\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvbmV3RGV0YWlsUGFnZS5tb2R1bGUuY3NzPzc0NjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvbmV3RGV0YWlsUGFnZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwibmV3RGV0YWlsUGFnZV9kZXRhaWxfXzJ0ajVnXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/newDetailPage.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_newDetailPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/newDetailPage */ \"./components/meetups/newDetailPage.js\");\n\nvar _jsxFileName = \"/Users/aliabbasi/Documents/NextJS react/pages/[meetupId]/index.js\";\n\n\nconst newDescription = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_newDetailPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    image: \"https://c4.wallpaperflare.com/wallpaper/451/732/57/nissan-gtr-r35-red-car-wallpaper-preview.jpg\",\n    title: \"Nissan GTR R34\",\n    description: \"A rocket bunny kit attached to 2019 Gtr, where Hks mid pige,Hks turbo,Hks ECU, has been upgraded.\",\n    address: \"Malborne, Australia\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  return {\n    fallback: false,\n    paths: [{\n      params: {\n        meetupId: 'm1'\n      }\n    }, {\n      params: {\n        meetupId: 'm2'\n      }\n    }]\n  };\n}\nasync function getStaticProps(context) {\n  const contextPath = context.params.meetupId;\n  console.log(contextPath);\n  return {\n    props: {\n      image: \"https://c4.wallpaperflare.com/wallpaper/451/732/57/nissan-gtr-r35-red-car-wallpaper-preview.jpg\",\n      id: contextPath,\n      title: \"Nissan GTR R34\",\n      description: \"A rocket bunny kit attached to 2019 Gtr, where Hks mid pige,Hks turbo,Hks ECU, has been upgraded\",\n      address: \"Malborne, Australia\"\n    },\n    revalidate: 1\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (newDescription);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsibmV3RGVzY3JpcHRpb24iLCJnZXRTdGF0aWNQYXRocyIsImZhbGxiYWNrIiwicGF0aHMiLCJwYXJhbXMiLCJtZWV0dXBJZCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImNvbnRleHRQYXRoIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiaW1hZ2UiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhZGRyZXNzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsTUFBTTtBQUMzQixzQkFDRSxxRUFBQyx5RUFBRDtBQUNFLFNBQUssRUFBQyxpR0FEUjtBQUVFLFNBQUssRUFBQyxnQkFGUjtBQUdFLGVBQVcsRUFBQyxtR0FIZDtBQUlFLFdBQU8sRUFBQztBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O0FBVU8sZUFBZUMsY0FBZixHQUErQjtBQUNsQyxTQUFNO0FBQ0ZDLFlBQVEsRUFBQyxLQURQO0FBRUZDLFNBQUssRUFBQyxDQUNGO0FBQUVDLFlBQU0sRUFBQztBQUNMQyxnQkFBUSxFQUFDO0FBREo7QUFBVCxLQURFLEVBS047QUFDSUQsWUFBTSxFQUFDO0FBQ0hDLGdCQUFRLEVBQUM7QUFETjtBQURYLEtBTE07QUFGSixHQUFOO0FBY0g7QUFDTyxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUFzQztBQUMxQyxRQUFNQyxXQUFXLEdBQUNELE9BQU8sQ0FBQ0gsTUFBUixDQUFlQyxRQUFqQztBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBLFNBQU07QUFDRkcsU0FBSyxFQUFDO0FBQ0ZDLFdBQUssRUFBRSxpR0FETDtBQUVGQyxRQUFFLEVBQUNMLFdBRkQ7QUFHRk0sV0FBSyxFQUFFLGdCQUhMO0FBSUZDLGlCQUFXLEVBQUcsa0dBSlo7QUFLRkMsYUFBTyxFQUFFO0FBTFAsS0FESjtBQU9BQyxjQUFVLEVBQUM7QUFQWCxHQUFOO0FBU0g7QUFDY2pCLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdEZXRhaWxQYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvbmV3RGV0YWlsUGFnZVwiO1xuXG5jb25zdCBuZXdEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmV3RGV0YWlsUGFnZVxuICAgICAgaW1hZ2U9XCJodHRwczovL2M0LndhbGxwYXBlcmZsYXJlLmNvbS93YWxscGFwZXIvNDUxLzczMi81Ny9uaXNzYW4tZ3RyLXIzNS1yZWQtY2FyLXdhbGxwYXBlci1wcmV2aWV3LmpwZ1wiXG4gICAgICB0aXRsZT1cIk5pc3NhbiBHVFIgUjM0XCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiQSByb2NrZXQgYnVubnkga2l0IGF0dGFjaGVkIHRvIDIwMTkgR3RyLCB3aGVyZSBIa3MgbWlkIHBpZ2UsSGtzIHR1cmJvLEhrcyBFQ1UsIGhhcyBiZWVuIHVwZ3JhZGVkLlwiXG4gICAgICBhZGRyZXNzPVwiTWFsYm9ybmUsIEF1c3RyYWxpYVwiXG4gICAgLz5cbiAgKTtcbn07XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcbiAgICByZXR1cm57XG4gICAgICAgIGZhbGxiYWNrOmZhbHNlLFxuICAgICAgICBwYXRoczpbXG4gICAgICAgICAgICB7IHBhcmFtczp7XG4gICAgICAgICAgICAgICAgbWVldHVwSWQ6J20xJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGFyYW1zOntcbiAgICAgICAgICAgICAgICBtZWV0dXBJZDonbTInLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59XG5leHBvcnQgIGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpe1xuICAgIGNvbnN0IGNvbnRleHRQYXRoPWNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xuICAgIGNvbnNvbGUubG9nKGNvbnRleHRQYXRoKTtcbiAgICByZXR1cm57XG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vYzQud2FsbHBhcGVyZmxhcmUuY29tL3dhbGxwYXBlci80NTEvNzMyLzU3L25pc3Nhbi1ndHItcjM1LXJlZC1jYXItd2FsbHBhcGVyLXByZXZpZXcuanBnXCIsXG4gICAgICAgICAgICBpZDpjb250ZXh0UGF0aCxcbiAgICAgICAgICAgIHRpdGxlOiBcIk5pc3NhbiBHVFIgUjM0XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IFwiQSByb2NrZXQgYnVubnkga2l0IGF0dGFjaGVkIHRvIDIwMTkgR3RyLCB3aGVyZSBIa3MgbWlkIHBpZ2UsSGtzIHR1cmJvLEhrcyBFQ1UsIGhhcyBiZWVuIHVwZ3JhZGVkXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIk1hbGJvcm5lLCBBdXN0cmFsaWFcIixcbiAgICAgICAgfSxyZXZhbGlkYXRlOjEsXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3RGVzY3JpcHRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });