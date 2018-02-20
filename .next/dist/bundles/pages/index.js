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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_emotion__);


if (typeof window !== 'undefined') {
  Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["hydrate"])(window.__NEXT_DATA__.ids);
}
/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["injectGlobal"])('html,body{padding:3rem 1rem;margin:0;background:papayawhip;min-height:100%;font-family:Helvetica,Arial,sans-serif;font-size:24px;}');
  var basicStyles = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["css"])('background-color:white;color:cornflowerblue;border:1px solid lightgreen;border-right:none;border-bottom:none;box-shadow:5px 5px 0 0 lightgreen,10px 10px 0 0 lightyellow;transition:all 0.1s linear;margin:3rem 0;padding:1rem 0.5rem;');
  var hoverStyles = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["css"])('&:hover{color:white;background-color:lightgray;border-color:aqua;box-shadow:-15px -15px 0 0 aqua,-30px -30px 0 0 cornflowerblue;}');
  var bounce = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["keyframes"])('from{transform:scale(1.01);}to{transform:scale(0.99);}');
  var Basic = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react_emotion___default()('div', {
    target: 'css-1u0sjot0'
  })(basicStyles, ';');
  var Combined = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react_emotion___default()('div', {
    target: 'css-1u0sjot1'
  })(basicStyles, ';', hoverStyles, ';& code{background-color:linen;}');
  var Animated = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react_emotion___default()('div', {
    target: 'css-1u0sjot2'
  })(basicStyles, ';', hoverStyles, ';& code{background-color:linen;}animation:', function (props) {
    return props.animation;
  }, ' 0.2s infinite ease-in-out alternate;');
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
      Basic,
      null,
      'Cool Styles'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
      Combined,
      null,
      'With ',
      __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        'code',
        null,
        ':hover'
      ),
      '.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
      Animated,
      { animation: bounce },
      'Let\'s bounce.'
    )
  );
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ })
/******/ ]);