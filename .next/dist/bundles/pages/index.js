module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_emotion__);
var _jsxFileName = '/Users/maupal/Lab/next-experiments/pages/index.jsx';


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["injectGlobal"])('html,body{padding:3rem 1rem;margin:0;background:papayawhip;min-height:100%;font-family:Helvetica,Arial,sans-serif;font-size:24px;}');
  var basicStyles = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["css"])('background-color:white;color:cornflowerblue;border:1px solid lightgreen;border-right:none;border-bottom:none;box-shadow:5px 5px 0 0 lightgreen,10px 10px 0 0 lightyellow;transition:all 0.1s linear;margin:3rem 0;padding:1rem 0.5rem;');
  var hoverStyles = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["css"])('&:hover{color:white;background-color:lightgray;border-color:aqua;box-shadow:-15px -15px 0 0 aqua,-30px -30px 0 0 cornflowerblue;}');
  var bounce = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["keyframes"])('from{transform:scale(1.01);}to{transform:scale(0.99);}');
  var Basic = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react_emotion___default()('div', {
    target: 'css-hxl9fq0'
  })(basicStyles, ';');
  var Combined = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react_emotion___default()('div', {
    target: 'css-hxl9fq1'
  })(basicStyles, ';', hoverStyles, ';& code{background-color:linen;}');
  var Animated = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react_emotion___default()('div', {
    target: 'css-hxl9fq2'
  })(basicStyles, ';', hoverStyles, ';& code{background-color:linen;}animation:', function (props) {
    return props.animation;
  }, ' 0.2s infinite ease-in-out alternate;');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Basic,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      },
      'Cool Styles'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Combined,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      },
      'With ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'code',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        },
        ':hover'
      ),
      '.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Animated,
      { animation: bounce, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      },
      'Let\'s bounce.'
    )
  );
});
//# sourceMappingURL=index.jsx.map

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-emotion":
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map