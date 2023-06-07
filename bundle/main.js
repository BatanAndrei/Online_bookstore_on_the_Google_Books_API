/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_allStyles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/allStyles.scss */ \"./scss/allStyles.scss\");\n/* harmony import */ var _js_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/content */ \"./js/content.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore_on_the_google_books_api/./index.js?");

/***/ }),

/***/ "./js/content.js":
/*!***********************!*\
  !*** ./js/content.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   images: () => (/* binding */ images),\n/* harmony export */   initSlider: () => (/* binding */ initSlider)\n/* harmony export */ });\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./js/navigation.js\");\n \r\n\r\nlet images = [{\r\n    url: './images/banner 1.png',\r\n},{\r\n    url: './images/banner 2.png',\r\n},{\r\n    url: './images/banner 3.png',\r\n}];\r\n\r\nfunction initSlider(){\r\n    if(!images || !images.length) return;\r\n\r\n    let sliderImages = document.querySelector(\".container-slider\");\r\n    let sliderDots = document.querySelector(\".second-section_dot\");\r\n\r\n    initImage();\r\n\r\n\r\nfunction initImage() {\r\n    images.forEach((image, index) => {\r\n        let imageDiv = `<div class=\"image n${index} ${index === 0 ? \"active\" : \"\"}\" style=\"background-image:url('${images[index].url}');\" data-index=\"${index}\"></div>`;\r\n        sliderImages.innerHTML += imageDiv;\r\n        \r\n        console.log(imageDiv)\r\n    });\r\n};\r\n};\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    initSlider();\r\n  });\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore_on_the_google_books_api/./js/content.js?");

/***/ }),

/***/ "./js/navigation.js":
/*!**************************!*\
  !*** ./js/navigation.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navigation: () => (/* binding */ navigation)\n/* harmony export */ });\nfunction navigation() {\r\n    console.log('Hello navigation 4');\r\n}\r\n\r\nnavigation();\r\n\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore_on_the_google_books_api/./js/navigation.js?");

/***/ }),

/***/ "./scss/allStyles.scss":
/*!*****************************!*\
  !*** ./scss/allStyles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://online_bookstore_on_the_google_books_api/./scss/allStyles.scss?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;