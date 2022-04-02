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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_newDetailPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/newDetailPage */ \"./components/meetups/newDetailPage.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/aliabbasi/Documents/NextJS react/pages/[meetupId]/index.js\";\n\n\n\nconst newDescription = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_newDetailPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    image: props.CarXData.image,\n    title: props.CarXData.title,\n    description: props.CarXData.description,\n    address: props.CarXData.address\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect(\"mongodb+srv://AliQans:lawaA123@cluster0.r2ac1.mongodb.net/carX?retryWrites=true&w=majority\");\n  const db = client.db();\n  const carsCollection = db.collection(\"carX\");\n  const carX_Dettail = await carsCollection.find({}, {\n    _id: 1\n  }).toArray();\n  client.close();\n  return {\n    fallback: false,\n    paths: carX_Dettail.map(Genrated => ({\n      params: {\n        meetupId: Genrated._id.toString()\n      }\n    }))\n  };\n}\nasync function getStaticProps(context) {\n  const contextPath = context.params.meetupId;\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect(\"mongodb+srv://AliQans:lawaA123@cluster0.r2ac1.mongodb.net/carX?retryWrites=true&w=majority\");\n  const db = client.db();\n  const carsCollection = db.collection(\"carX\");\n  const selectedCar = await carsCollection.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_2__[\"ObjectId\"])(contextPath)\n  });\n  client.close();\n  console.log(contextPath);\n  return {\n    props: {\n      CarXData: {\n        id: selectedCar._id.toString(),\n        title: selectedCar.title,\n        address: selectedCar.address,\n        description: selectedCar.description\n      }\n    },\n    revalidate: 1\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (newDescription);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsibmV3RGVzY3JpcHRpb24iLCJwcm9wcyIsIkNhclhEYXRhIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWRkcmVzcyIsImdldFN0YXRpY1BhdGhzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJjYXJzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJjYXJYX0RldHRhaWwiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImNsb3NlIiwiZmFsbGJhY2siLCJwYXRocyIsIm1hcCIsIkdlbnJhdGVkIiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImNvbnRleHRQYXRoIiwic2VsZWN0ZWRDYXIiLCJmaW5kT25lIiwiT2JqZWN0SWQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxNQUFNQSxjQUFjLEdBQUlDLEtBQUQsSUFBVztBQUNoQyxzQkFDRSxxRUFBQyx5RUFBRDtBQUNFLFNBQUssRUFBRUEsS0FBSyxDQUFDQyxRQUFOLENBQWVDLEtBRHhCO0FBRUUsU0FBSyxFQUFFRixLQUFLLENBQUNDLFFBQU4sQ0FBZUUsS0FGeEI7QUFHRSxlQUFXLEVBQUVILEtBQUssQ0FBQ0MsUUFBTixDQUFlRyxXQUg5QjtBQUlFLFdBQU8sRUFBRUosS0FBSyxDQUFDQyxRQUFOLENBQWVJO0FBSjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O0FBVU8sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNuQiw0RkFEbUIsQ0FBckI7QUFHQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBQ0EsUUFBTUMsY0FBYyxHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxNQUFkLENBQXZCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLE1BQU1GLGNBQWMsQ0FBQ0csSUFBZixDQUFvQixFQUFwQixFQUF3QjtBQUFFQyxPQUFHLEVBQUU7QUFBUCxHQUF4QixFQUFvQ0MsT0FBcEMsRUFBM0I7QUFDQVQsUUFBTSxDQUFDVSxLQUFQO0FBQ0EsU0FBTztBQUNMQyxZQUFRLEVBQUUsS0FETDtBQUVMQyxTQUFLLEVBQUVOLFlBQVksQ0FBQ08sR0FBYixDQUFrQkMsUUFBRCxLQUFlO0FBQ3JDQyxZQUFNLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRUYsUUFBUSxDQUFDTixHQUFULENBQWFTLFFBQWI7QUFBWjtBQUQ2QixLQUFmLENBQWpCO0FBRkYsR0FBUDtBQU1EO0FBQ00sZUFBZUMsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUMsUUFBTUMsV0FBVyxHQUFHRCxPQUFPLENBQUNKLE1BQVIsQ0FBZUMsUUFBbkM7QUFDQSxRQUFNaEIsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsNEZBRG1CLENBQXJCO0FBR0EsUUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUNBLFFBQU1DLGNBQWMsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsTUFBZCxDQUF2QjtBQUNBLFFBQU1nQixXQUFXLEdBQUcsTUFBTWpCLGNBQWMsQ0FBQ2tCLE9BQWYsQ0FBdUI7QUFBRWQsT0FBRyxFQUFFZSx3REFBUSxDQUFDSCxXQUFEO0FBQWYsR0FBdkIsQ0FBMUI7QUFDQXBCLFFBQU0sQ0FBQ1UsS0FBUDtBQUNBYyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsV0FBWjtBQUNBLFNBQU87QUFDTDNCLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFDUmdDLFVBQUUsRUFBRUwsV0FBVyxDQUFDYixHQUFaLENBQWdCUyxRQUFoQixFQURJO0FBRVJyQixhQUFLLEVBQUV5QixXQUFXLENBQUN6QixLQUZYO0FBR1JFLGVBQU8sRUFBRXVCLFdBQVcsQ0FBQ3ZCLE9BSGI7QUFJUkQsbUJBQVcsRUFBRXdCLFdBQVcsQ0FBQ3hCO0FBSmpCO0FBREwsS0FERjtBQVNMOEIsY0FBVSxFQUFFO0FBVFAsR0FBUDtBQVdEO0FBQ2NuQyw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3RGV0YWlsUGFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL25ld0RldGFpbFBhZ2VcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5jb25zdCBuZXdEZXNjcmlwdGlvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxOZXdEZXRhaWxQYWdlXG4gICAgICBpbWFnZT17cHJvcHMuQ2FyWERhdGEuaW1hZ2V9XG4gICAgICB0aXRsZT17cHJvcHMuQ2FyWERhdGEudGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17cHJvcHMuQ2FyWERhdGEuZGVzY3JpcHRpb259XG4gICAgICBhZGRyZXNzPXtwcm9wcy5DYXJYRGF0YS5hZGRyZXNzfVxuICAgIC8+XG4gICk7XG59O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9BbGlRYW5zOmxhd2FBMTIzQGNsdXN0ZXIwLnIyYWMxLm1vbmdvZGIubmV0L2Nhclg/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgY29uc3QgY2Fyc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwiY2FyWFwiKTtcbiAgY29uc3QgY2FyWF9EZXR0YWlsID0gYXdhaXQgY2Fyc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xuICBjbGllbnQuY2xvc2UoKTtcbiAgcmV0dXJuIHtcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgcGF0aHM6IGNhclhfRGV0dGFpbC5tYXAoKEdlbnJhdGVkKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBHZW5yYXRlZC5faWQudG9TdHJpbmcoKSB9LFxuICAgIH0pKSxcbiAgfTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRQYXRoID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL0FsaVFhbnM6bGF3YUExMjNAY2x1c3RlcjAucjJhYzEubW9uZ29kYi5uZXQvY2FyWD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBjYXJzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJjYXJYXCIpO1xuICBjb25zdCBzZWxlY3RlZENhciA9IGF3YWl0IGNhcnNDb2xsZWN0aW9uLmZpbmRPbmUoeyBfaWQ6IE9iamVjdElkKGNvbnRleHRQYXRoKSB9KTtcbiAgY2xpZW50LmNsb3NlKCk7XG4gIGNvbnNvbGUubG9nKGNvbnRleHRQYXRoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgQ2FyWERhdGE6IHtcbiAgICAgICAgaWQ6IHNlbGVjdGVkQ2FyLl9pZC50b1N0cmluZygpLFxuICAgICAgICB0aXRsZTogc2VsZWN0ZWRDYXIudGl0bGUsXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkQ2FyLmFkZHJlc3MsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZENhci5kZXNjcmlwdGlvbixcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgbmV3RGVzY3JpcHRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

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