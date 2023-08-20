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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --highlight: lightskyblue;\n    --second-highlight: lightblue;\n    --secondary: white;\n    --main: black;\n}\n@keyframes slide-down {\n    0% {\n        opacity: 0;\n        transform: translateY(-15px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes slide-right {\n    0%{\n        opacity: 0;\n        transform: translateX(-40px);\n        filter: blur(2px);\n    }\n    80% {\n        filter: blur(0);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(0px);\n    }\n}\n@keyframes logo-build {\n    0% {\n        opacity: 0;\n        column-gap: 50px;\n        transform: rotate(0deg);\n    }\n    50%{\n        gap: 2px;\n        opacity: 0.8;\n        scale: 0.8;\n    }\n    100% {\n        opacity: 1;\n        gap: 10px;\n        transform: rotate(405deg);\n    }\n}\n@keyframes fade-in {\n    0%{\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    min-height: 100vh;\n    min-width: 100vw;\n    background-color: var(--main);\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    box-sizing: border-box;\n}\na {\n    text-decoration: none;\n    color: white;\n}\n#sidebar button {\n    width: 100%;\n}\n#page{\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-rows: 150px 1fr ;\n    grid-template-columns: minmax(200px, 1fr) 4fr;\n}\n\n#header {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    background-color: black;\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) 4fr;\n}\n\n#header h1 {\n    color: white;\n    align-self: center;\n    justify-self: center;\n    font-size: 40px;\n    cursor: default;\n    transition: all 1s;\n    animation: slide-right 1s ease;\n}\n\n#header h1:hover > span {\n    color: var(--highlight);\n    letter-spacing: 2px;\n    font-size: 45px;\n}\n\n#header span {\n    transition: all 1s;\n}\n\n#top-logo {\n    background-color: black;\n    height: 80px;\n    width: 80px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    align-self: center;\n    background-color: black;\n    justify-self: center;\n    gap: 10px;\n    transform: rotate(45deg);\n    transition: all  1.5s ease-in-out 0.2s;\n    animation: logo-build 1.5s ease;\n}\n#top-logo:hover {\n    transform: rotate(405deg);\n    gap: 2px;\n    scale: 0.8;\n    /* gap: 5px; */\n}\n.logo-bar {\n    background-color: black;\n}\n#one {\n    grid-row: 1;\n    background-color: white;\n    grid-column: 1/ -2;\n}\n#four {\n    grid-column: span 2;\n    background-color: white;\n}\n#two{\n    background-color: var(--highlight);\n}\n#three{\n    background-color: var(--highlight);\n}\n\n\n#sidebar {\n    align-self: start;\n    position: sticky;\n    top: 0;\n    grid-row: 2 / -1;\n    grid-column: 1;\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n}\n\n#sidebar button {\n    background-color: black;\n    color: white;\n    font-size: 18px;\n    height: 60px;\n    border: none;\n    transition: all 0.6s;\n    font-weight: 600;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    align-items: center;\n    column-gap: 10px;\n    animation: slide-right 1s ease-in-out;\n}\n#sidebar button p {\n    justify-self: start;\n}\n#sidebar button:hover {\n    background: var(--secondary);\n    color: var(--main);\n    /* margin: 10px; */\n    padding-left: 20px;\n}\n#add-button:hover,\n#form-submit:hover {\n    background-color: var(--highlight);\n    scale: 1.1;\n    color: black;\n    \n}\n#add-button {\n    margin-left: 10px;\n    justify-self: center;\n}\n\n#sidebar button:hover > .nav-image,\n#add-button:hover > #plus {\n    filter:invert(0%);\n}\n#add-button,\n#form-submit {\n    height: 50px;\n    width: 150px;\n    background-color: black;\n    transition: all 0.6s;\n    border: none;\n    background: black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    color: white;\n    align-items: center;\n\n    font-size: 18px;\n    font-weight: 600;\n\n    margin-top: 10px;\n    animation: slide-down 1s ease;\n}\n#add-button p {\n    justify-self: start;\n}\n#plus {\n    height: 20px;\n    align-self: center;\n    justify-self: center;\n}\n#add-button:hover > .nav-image {\n    filter: invert(100%);\n}\n.nav-image {\n    filter: invert(100%);\n    transition: all 0.6s;\n}\n\n#sidebar button img {\n    height: 30px;\n    width: auto;\n    justify-self: end;\n}\n\n#sidebar #add-nav {\n    margin-top: 50px;\n}\n#sidebar #add-nav:hover {\n    background-color: var(--highlight);\n}\n\n\n/* tab styling */\n#content {\n    margin-left: 10px;\n    margin-right: 10px;\n}\n#content > * {\n    animation: slide-down 1s ease;\n}\n\n.overview-tab {\n    /* background-color: black; */\n    animation: slide-down 1s ease;\n    display: grid;\n    grid-auto-rows: minmax(1fr, 100px);\n    /* grid-template-columns: repeat(2,  1fr); */\n    align-content: start;\n    gap: 10px;\n\n    overflow: auto;\n    align-items: center;\n    background-color: black;\n}\n\n.overview-tab .task-item {\n    position: relative;\n    border: 1px solid black;\n    height: 100px;\n    border-radius: 20px;\n    padding: 5px 20px;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n    grid-template-columns: 1fr 1fr; \n    transition: all 1s ease;\n}\n.task-item > h3 {\n    pointer-events: none;\n}\n\n.high-priority {\n    background-color: red;\n    order: -10;\n}\n.medium-priority {\n    background-color: skyblue;\n    order: -5;\n}\n.low-priority{\n    background-color: lightgreen;\n    order: -1;\n}\n\n.overview-tab .title {\n    align-self: center;\n    justify-self: center;\n    font-size: 20px;\n    gap: 20%;\n    display: flex;\n    flex-direction: column;\n    grid-column: 1;\n    min-width: max-content;\n}\n.overview-tab .description {\n    align-self: center;\n    justify-self: start;\n    text-overflow: ellipsis; \n    font-weight: 500;\n}\n\n#content .finished {\n    color: lightgray;\n    background-color: darkgrey;\n    order: 10;\n}\n#content .finished > h3 {\n    text-decoration: line-through;\n}\n\n.new-form-tab h1 {\n    color: var(--highlight);\n}\n.form-info {\n    color: white;\n}\n\n#add-form .form-info {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    max-width: 300px;\n    gap: 5px;\n}\n\n#content #add-form {\n    display: flex;\n    margin-top: 20px;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n#add-form .form-info label {\n    font-size: 18px;\n\n}\n.form-info input {\n    padding: 5px 10px;\n    font-size: 16px;\n    transition: all 0.4s ease-in-out;\n    border: none;\n\n}\n.form-info input:hover,\n.form-info input:focus-visible {\n    outline: none;\n    scale: 1.05;\n    background-color: var(--highlight);\n}\n.form-info input:invalid {\n    background-color:lightcoral;\n}\n.form-info input:valid {\n    background-color: var(--highlight);\n}\n\n.form-info select{\n    padding: 5px 10px;\n    font-size: 16px;\n    transition: all 0.4s ease-in-out;\n}\nselect:hover {\n    background-color: var(--highlight);\n    scale: 1.05;\n}\n\n/* Define the fade-in animation */\n.button-fade-in {\n    opacity: 0;\n    transition: opacity 0.5s ease-in-out;\n}\n\n/* When the element has the 'visible' class, show it */\n.button-fade-in.visible {\n    opacity: 1;\n}\n\n.task-item button {\n    background-color: inherit;\n    border: none;\n    font-size: 20px;\n    transition: all 0.5s ease-in-out;\n    justify-self: flex-end;\n    width: 95%;\n    height: 100%;\n}\n\n.task-item button:hover {\n    scale: 1.1;\n    background-color: white;\n    color: red;\n    font-weight: 600;\n}\n\n.date {\n    align-self: center;\n    justify-self: start;\n}\n\n.finished > .delete-button:before {\n    content: 'Undo ';\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isPast)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isPast\n * @category Common Helpers\n * @summary Is the given date in the past?\n * @pure false\n *\n * @description\n * Is the given date in the past?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is in the past\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 2 July 2014 in the past?\n * const result = isPast(new Date(2014, 6, 2))\n * //=> true\n */\nfunction isPast(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate).getTime() < Date.now();\n}\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/esm/isPast/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/basic_page/makeAll.js":
/*!***********************************!*\
  !*** ./src/basic_page/makeAll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _makeSidebarElems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeSidebarElems */ \"./src/basic_page/makeSidebarElems.js\");\n/* harmony import */ var _makeLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeLogo */ \"./src/basic_page/makeLogo.js\");\n\n\n\nconst body = document.querySelector('body')\nconst pageTitle = document.head.querySelector('title')\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    pageTitle.textContent = 'To-do List'\n\n    const page = document.createElement('div')\n    page.id = 'page'\n\n\n    const header = document.createElement('div')\n    header.id = 'header'\n    const title = document.createElement('h1')\n    title.id = 'title'\n    title.textContent = 'Schedule'\n    const headerHighlight = document.createElement('span')\n    headerHighlight.textContent = ' Now'\n    title.appendChild(headerHighlight)\n\n    page.appendChild(header)\n    header.appendChild(_makeLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n    header.appendChild(title)\n\n    const makeSidebar = (function () {\n        const sidebar = document.createElement('div')\n        sidebar.id = 'sidebar'\n\n        page.appendChild(sidebar)\n    })()\n\n    const content = document.createElement('div')\n    content.id = 'content'\n    page.appendChild(content)\n    body.appendChild(page)\n\n    ;(0,_makeSidebarElems__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n\n}\n\n//# sourceURL=webpack://todolist/./src/basic_page/makeAll.js?");

/***/ }),

/***/ "./src/basic_page/makeLogo.js":
/*!************************************!*\
  !*** ./src/basic_page/makeLogo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst makeBar = function (thing) {\n    const makeThing = document.createElement('div')\n    makeThing.classList.add('logo-bar')\n    makeThing.id = thing\n    return makeThing\n};\nconst logoContainer = document.createElement('div')\nlogoContainer.id = 'top-logo'\n\nlogoContainer.appendChild(makeBar('one'))\nlogoContainer.appendChild(makeBar('two'))\nlogoContainer.appendChild(makeBar('three'))\nlogoContainer.appendChild(makeBar('four'))\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logoContainer);\n\n//# sourceURL=webpack://todolist/./src/basic_page/makeLogo.js?");

/***/ }),

/***/ "./src/basic_page/makeSidebarElems.js":
/*!********************************************!*\
  !*** ./src/basic_page/makeSidebarElems.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_calendar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/calendar.svg */ \"./src/img/calendar.svg\");\n/* harmony import */ var _img_view_week_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/view-week.svg */ \"./src/img/view-week.svg\");\n/* harmony import */ var _img_check_all_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/check-all.svg */ \"./src/img/check-all.svg\");\n/* harmony import */ var _img_plus_thick_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/plus-thick.svg */ \"./src/img/plus-thick.svg\");\n\n\n\n\n\nconst makeLi = function(name){\n    const navButton = document.createElement('button')\n    const NavText = document.createElement('p')\n    NavText.textContent = name\n\n    const newPic = new Image()\n    newPic.classList.add('nav-image')\n    switch (name) {\n        case \"Overview\":\n           newPic.src = _img_check_all_svg__WEBPACK_IMPORTED_MODULE_2__ \n           break;\n        case \"This Week\":\n            newPic.src = _img_view_week_svg__WEBPACK_IMPORTED_MODULE_1__\n            break;\n        case \"Month\":\n            newPic.src = _img_calendar_svg__WEBPACK_IMPORTED_MODULE_0__\n            break;\n        case \"Add New\":\n            newPic.src = _img_plus_thick_svg__WEBPACK_IMPORTED_MODULE_3__\n            break;\n    };\n    \n\n    navButton.appendChild(newPic)\n    navButton.appendChild(NavText)\n    navButton.classList.add('nav-button')\n\n\n    return navButton\n}\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const sidebar = document.querySelector('#sidebar')\n\n    const overview = makeLi('Overview')\n    overview.id = 'overview'\n    sidebar.appendChild(overview)\n\n    const thisWeek = makeLi('This Week')\n    thisWeek.id = 'week'\n    sidebar.appendChild(thisWeek)\n\n    const month = makeLi(\"Month\")\n    month.id = 'month'\n    sidebar.appendChild(month)\n\n    const addNew = makeLi(\"Add New\")\n    addNew.id = 'add-nav'\n    sidebar.appendChild(addNew)\n    return\n}\n\n//# sourceURL=webpack://todolist/./src/basic_page/makeSidebarElems.js?");

/***/ }),

/***/ "./src/content_tabs/addListeners.js":
/*!******************************************!*\
  !*** ./src/content_tabs/addListeners.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _formTab_addNew__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formTab/addNew */ \"./src/content_tabs/formTab/addNew.js\");\n/* harmony import */ var _tabCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabCreation */ \"./src/content_tabs/tabCreation.js\");\n\n\n\n\n\nconst listenerFx = function(buttonID, uniqueFunction){\n    const current = document.querySelector(`#${buttonID}`)\n    current.onclick = uniqueFunction\n    return\n}\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    listenerFx('overview', _tabCreation__WEBPACK_IMPORTED_MODULE_1__.overview)\n    listenerFx('week', _tabCreation__WEBPACK_IMPORTED_MODULE_1__.thisWeek)\n    listenerFx('month', _tabCreation__WEBPACK_IMPORTED_MODULE_1__.month)\n    listenerFx('add-nav', _formTab_addNew__WEBPACK_IMPORTED_MODULE_0__.addNew)\n}\n\n//# sourceURL=webpack://todolist/./src/content_tabs/addListeners.js?");

/***/ }),

/***/ "./src/content_tabs/clearContentMake.js":
/*!**********************************************!*\
  !*** ./src/content_tabs/clearContentMake.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(tabName){\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    content.removeAttribute('class')\n    content.classList.add(tabName+'-tab')\n    return content\n}\n\n//# sourceURL=webpack://todolist/./src/content_tabs/clearContentMake.js?");

/***/ }),

/***/ "./src/content_tabs/formTab/addNew.js":
/*!********************************************!*\
  !*** ./src/content_tabs/formTab/addNew.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNew: () => (/* binding */ addNew)\n/* harmony export */ });\n/* harmony import */ var _clearContentMake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clearContentMake */ \"./src/content_tabs/clearContentMake.js\");\n/* harmony import */ var _addNewFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNewFunctions */ \"./src/content_tabs/formTab/addNewFunctions.js\");\n\n\n\n\n\nconst addNew = function () {\n    const content = (0,_clearContentMake__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('new-form')\n    const formElement = document.createElement('form')\n    formElement.id = 'add-form'\n\n    const newH1 = document.createElement('h1')\n    newH1.textContent = 'New Task'\n\n    const newTitle = (0,_addNewFunctions__WEBPACK_IMPORTED_MODULE_1__.formLabelInput)('title', 'text')\n    const newDescription = (0,_addNewFunctions__WEBPACK_IMPORTED_MODULE_1__.formLabelInput)('description', 'text')\n\n    const createdDiv = document.createElement('div')\n    createdDiv.classList.add('form-info')\n\n    const selectLabel = document.createElement('label')\n    selectLabel.setAttribute('for', 'importance')\n    selectLabel.textContent = 'Importance'\n    createdDiv.appendChild(selectLabel)\n\n    const importancePicker = document.createElement('select')\n    importancePicker.setAttribute('name', 'importance')\n    importancePicker.setAttribute('required', '')\n\n\n    const opt1 = (0,_addNewFunctions__WEBPACK_IMPORTED_MODULE_1__.createOption)('high-priority', 'High')\n    const opt2 = (0,_addNewFunctions__WEBPACK_IMPORTED_MODULE_1__.createOption)('medium-priority', 'Medium')\n    const opt3 = (0,_addNewFunctions__WEBPACK_IMPORTED_MODULE_1__.createOption)('low-priority', 'Low')\n    opt2.setAttribute('selected', 'selected')\n\n    const dateDiv = document.createElement('div')\n    dateDiv.classList.add('form-info')\n    const dateLabel = document.createElement('label')\n    dateLabel.setAttribute('for', 'date')\n    dateLabel.textContent = \"Due Date\"\n    const setDate = document.createElement('input')\n    setDate.classList.add('form-date')\n\n    const _date = new Date()\n    const dateMonth = _date.getMonth().length != 2 ? 0+_date.getMonth() : _date.getMonth()\n\n    const todaysDate= `${_date.getFullYear()}-${dateMonth}-${_date.getDate()}`\n    setDate.setAttribute('type', 'date')\n    setDate.setAttribute('name', 'date')\n    setDate.min = todaysDate\n    dateDiv.appendChild(dateLabel)\n    dateDiv.appendChild(setDate)\n\n    importancePicker.appendChild(opt1)\n    importancePicker.appendChild(opt2)\n    importancePicker.appendChild(opt3)\n    createdDiv.appendChild(importancePicker)\n\n    // submitFx\n    const submitButton = document.createElement('button')\n    submitButton.type = 'submit'\n    submitButton.id = 'form-submit'\n    submitButton.textContent = 'Submit'\n    submitButton.addEventListener('click', _addNewFunctions__WEBPACK_IMPORTED_MODULE_1__.submitFunction)\n    \n    content.appendChild(newH1)\n    formElement.appendChild(newTitle)\n    formElement.appendChild(newDescription)\n    formElement.appendChild(createdDiv)\n    formElement.appendChild(dateDiv)\n    formElement.appendChild(submitButton)\n    content.appendChild(formElement)\n}\n\n//# sourceURL=webpack://todolist/./src/content_tabs/formTab/addNew.js?");

/***/ }),

/***/ "./src/content_tabs/formTab/addNewFunctions.js":
/*!*****************************************************!*\
  !*** ./src/content_tabs/formTab/addNewFunctions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createOption: () => (/* binding */ createOption),\n/* harmony export */   formLabelInput: () => (/* binding */ formLabelInput),\n/* harmony export */   submitFunction: () => (/* binding */ submitFunction)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main */ \"./src/main.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isPast/index.js\");\n/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getDate */ \"./src/getDate.js\");\n/* harmony import */ var _clearContentMake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clearContentMake */ \"./src/content_tabs/clearContentMake.js\");\n/* harmony import */ var _tabCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabCreation */ \"./src/content_tabs/tabCreation.js\");\n\n\n\n\n\n\nconst formLabelInput = (label, input) => {\n    const newDiv = document.createElement('div')\n    newDiv.classList.add('form-info')\n    const newLabel = document.createElement('label')\n    const newInput = document.createElement('input')\n    const formattedName = label[0].toUpperCase() + label.substr(1)\n\n    newLabel.setAttribute('for', label)\n    newLabel.textContent = formattedName\n\n    newInput.id = label\n    newInput.setAttribute('required', '')\n    newInput.minLength = 1\n    newInput.maxLength = 20\n    newInput.name = label\n    newInput.type = input\n\n    newDiv.appendChild(newLabel)\n    newDiv.appendChild(newInput)\n    return newDiv\n}\n\nconst createOption = function (value, textContent) {\n    const option = document.createElement('option')\n    option.value = value\n    option.textContent = textContent\n    return option\n}\n\nconst submitFunction = function (event) {\n    event.preventDefault();\n    const content = document.querySelector('#content');\n    const myFormData = new FormData(document.querySelector('#add-form'));\n\n    const formDataObj = {};\n    myFormData.forEach((value, key) => formDataObj[key] = value);\n\n    if (formDataObj.title.length < 1 || formDataObj.description.length < 1) {\n        document.querySelector('#add-form').reset();\n        return alert('Form Invalid: Entries must be at least 1 character.');\n    } \n    const dueDate = new Date(formDataObj.date);\n    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dueDate)){\n        return alert('Form Invalid: Date cannot be in the past.')\n    }\n\n    const dueDateFormatted = `${dueDate.getFullYear()}-${(dueDate.getMonth() + 1).toString().padStart(2, '0')}-${dueDate.getDate().toString().padStart(2, '0')}`;\n    const dueDateDifference = (0,_getDate__WEBPACK_IMPORTED_MODULE_1__.getDifference)(dueDateFormatted); // Calculate the difference using your getDifference function\n\n    console.log(formDataObj);\n    console.log(dueDateFormatted);\n    console.log(dueDateDifference);\n\n    _main__WEBPACK_IMPORTED_MODULE_0__.taskObj.addItem(formDataObj.title, formDataObj.description, formDataObj.importance, dueDateFormatted);\n    (0,_clearContentMake__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('overview');\n    _main__WEBPACK_IMPORTED_MODULE_0__.taskObj.refresh();\n    content.appendChild((0,_tabCreation__WEBPACK_IMPORTED_MODULE_3__.createNewButton)());\n};\n\n\n//# sourceURL=webpack://todolist/./src/content_tabs/formTab/addNewFunctions.js?");

/***/ }),

/***/ "./src/content_tabs/tabCreation.js":
/*!*****************************************!*\
  !*** ./src/content_tabs/tabCreation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewButton: () => (/* binding */ createNewButton),\n/* harmony export */   month: () => (/* binding */ month),\n/* harmony export */   overview: () => (/* binding */ overview),\n/* harmony export */   thisWeek: () => (/* binding */ thisWeek)\n/* harmony export */ });\n/* harmony import */ var _clearContentMake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContentMake */ \"./src/content_tabs/clearContentMake.js\");\n/* harmony import */ var _img_plus_thick_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/plus-thick.svg */ \"./src/img/plus-thick.svg\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main */ \"./src/main.js\");\n/* harmony import */ var _formTab_addNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formTab/addNew */ \"./src/content_tabs/formTab/addNew.js\");\n\n\n\n\n\nconst createNewButton = function () {\n    const contentNewButton = document.createElement('button')\n    contentNewButton.id = 'add-button'\n\n    const addIcon = new Image()\n    addIcon.src = _img_plus_thick_svg__WEBPACK_IMPORTED_MODULE_1__\n    addIcon.classList.add('nav-image')\n    addIcon.id = 'plus'\n\n    const addName = document.createElement('p')\n    addName.textContent = 'Add New'\n\n    contentNewButton.appendChild(addIcon)\n    contentNewButton.appendChild(addName)\n    contentNewButton.onclick = _formTab_addNew__WEBPACK_IMPORTED_MODULE_3__.addNew\n    return contentNewButton\n}\n\n\nconst overview = function () {\n    const content = (0,_clearContentMake__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('overview')\n    _main__WEBPACK_IMPORTED_MODULE_2__.taskObj.refresh()\n    content.appendChild(createNewButton())\n    return\n}\n\nconst thisWeek = function () {\n    const content = (0,_clearContentMake__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('week')\n    content.appendChild(createNewButton())\n}\n\nconst month = function () {\n    const content = (0,_clearContentMake__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('month')\n    content.appendChild(createNewButton())\n}\n\n\n//# sourceURL=webpack://todolist/./src/content_tabs/tabCreation.js?");

/***/ }),

/***/ "./src/getDate.js":
/*!************************!*\
  !*** ./src/getDate.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDifference: () => (/* binding */ getDifference)\n/* harmony export */ });\nconst getToday = function () {\n    const date = new Date();\n    const month = date.getMonth() + 1; // Adding 1 to adjust for 0-based indexing\n    const days = date.getDate(); // Use getDate() instead of getDay()\n    const year = date.getFullYear();\n\n    return {\n        month,\n        days,\n        year\n    };\n};\n\nconst getDifference = function (taskDate) {\n    if (taskDate.split('-').includes('NaN')) return 'Never'\n    const _taskDate = String(taskDate).split('-');\n    const currentDate = getToday();\n    const yearDiff = +_taskDate[0] - currentDate.year;\n    const monthDiff = (+_taskDate[1] - currentDate.month) + (yearDiff * 12); // Calculate total months\n    const dayDiff = +_taskDate[2] - currentDate.days;\n\n    return `${yearDiff > 0 ? yearDiff + ' years, ' : ''}${monthDiff > 0 ? monthDiff + ' months, ' : ''}${dayDiff} days.`;\n};\n\n\n//# sourceURL=webpack://todolist/./src/getDate.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   taskObj: () => (/* binding */ taskObj)\n/* harmony export */ });\n/* harmony import */ var _basic_page_makeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic_page/makeAll */ \"./src/basic_page/makeAll.js\");\n/* harmony import */ var _content_tabs_addListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content_tabs/addListeners */ \"./src/content_tabs/addListeners.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _taskfx_taskItemHover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskfx/taskItemHover */ \"./src/taskfx/taskItemHover.js\");\n/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getDate */ \"./src/getDate.js\");\n/* harmony import */ var _content_tabs_tabCreation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content_tabs/tabCreation */ \"./src/content_tabs/tabCreation.js\");\n\n\n\n\n\n\n\nclass Task {\n    constructor(title, description, importance, date) {\n        this.title = title\n        this.description = description\n        this.importance = importance\n        this.completed = false\n        this.date = date\n    }\n    complete() {\n        this.completed = !this.completed\n        return\n    }\n    removeSelf(taskList) {\n        const index = taskList.indexOf(this)\n        if (index !== -1) {\n            taskList.splice(index, 1)\n        }\n    }\n}\n\nconst Holder = function () {\n    let tasklist = []\n\n    const clear = function () {\n        document.querySelectorAll('.task-item').forEach(e => e.remove())\n    }\n\n    const getRemove = function (taskName) {\n        return tasklist.find(thing => thing.title === taskName)\n    }\n    const refresh = function () {\n        const content = document.querySelector('#content')\n        clear()\n        for (let i = 0; i < tasklist.length; i++) {\n            const createdTask = document.createElement('div')\n            createdTask.classList.add('task-item')\n            const iterable = tasklist[i]\n            for (let [key, value] of Object.entries(iterable)) {\n\n                // add a switch to change the value of src if it's important\n                const info = document.createElement('h3')\n                switch (key) {\n                    case ('importance'):\n                        createdTask.classList.add(value)\n                        break;\n                    case ('completed'):\n                        if (value) {\n                            createdTask.classList.add('finished')\n                        }\n                        break\n                    case ('date'):\n                        info.textContent = (0,_getDate__WEBPACK_IMPORTED_MODULE_4__.getDifference)(value)\n                        info.classList.add('task-info', key)\n                        createdTask.appendChild(info)\n                        break\n                    default:\n                        info.classList.add('task-info', key)\n                        info.textContent = value\n                        createdTask.appendChild(info)\n                        break\n                }\n            }\n            content.appendChild(createdTask)\n        }\n        (0,_taskfx_taskItemHover__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n    }\n    const addItem = function (title, descr, importance, date) {\n        const newTask = new Task(title, descr, importance, date)\n        clear()\n        return tasklist.push(newTask)\n    }\n\n    return {\n        tasklist,\n        clear,\n        refresh,\n        addItem,\n        getRemove\n    }\n}\nconst taskObj = Holder()\ntaskObj.addItem('love baby', 'tell vero I love her', 'high-priority', 'NaN-NaN')\ntaskObj.addItem('Doggies', 'pet dogs', 'medium-priority', '2023-02-21')\ntaskObj.addItem('Water', 'Drink water', 'low-priority', '2021-21-21')\n\n\n;(0,_basic_page_makeAll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_content_tabs_addListeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_content_tabs_tabCreation__WEBPACK_IMPORTED_MODULE_5__.overview)()\n\n//# sourceURL=webpack://todolist/./src/main.js?");

/***/ }),

/***/ "./src/taskfx/taskItemHover.js":
/*!*************************************!*\
  !*** ./src/taskfx/taskItemHover.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ \"./src/main.js\");\n/* harmony import */ var _taskItemHoverFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskItemHoverFunctions */ \"./src/taskfx/taskItemHoverFunctions.js\");\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const taskItems = document.querySelectorAll('.task-item');\n\n    taskItems.forEach(item => {\n        let buttonsCreated = false; // Flag to track if buttons are already created\n\n        item.addEventListener('click', function (event) {\n            if (!buttonsCreated) {\n                const finishBox = document.createElement('button');\n                finishBox.classList.add('delete-button', 'button-fade-in');\n                finishBox.innerText = 'Finish';\n                finishBox.onclick = _taskItemHoverFunctions__WEBPACK_IMPORTED_MODULE_1__.clickFinish\n\n                const deleteBox = document.createElement('button');\n                deleteBox.classList.add('remove-button', 'button-fade-in');\n                deleteBox.innerText = 'Delete';\n                deleteBox.onclick = _taskItemHoverFunctions__WEBPACK_IMPORTED_MODULE_1__.clickDelete\n\n                this.appendChild(finishBox);\n                this.appendChild(deleteBox);\n\n                setTimeout(() => {\n                    finishBox.classList.add('visible');\n                    deleteBox.classList.add('visible');\n                }, 10); // Delay to allow the element to be added to the DOM\n\n                buttonsCreated = true;\n            }\n        });\n\n        item.addEventListener('mouseleave', function () {\n            // Remove the buttons when mouse leaves the task item\n            const buttons = item.querySelectorAll('.delete-button, .remove-button');\n            buttons.forEach(button => button.remove());\n\n            buttonsCreated = false; // Reset the flag when buttons are removed\n        });\n    });\n}\n\n\n//# sourceURL=webpack://todolist/./src/taskfx/taskItemHover.js?");

/***/ }),

/***/ "./src/taskfx/taskItemHoverFunctions.js":
/*!**********************************************!*\
  !*** ./src/taskfx/taskItemHoverFunctions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clickDelete: () => (/* binding */ clickDelete),\n/* harmony export */   clickFinish: () => (/* binding */ clickFinish)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ \"./src/main.js\");\n\n\n\nconst clickFinish = function () {\n    const infoTitle = this.parentElement.firstChild.textContent\n    const taskToFinish = _main__WEBPACK_IMPORTED_MODULE_0__.taskObj.getRemove(infoTitle)\n    if (taskToFinish) {\n        taskToFinish.complete()\n        _main__WEBPACK_IMPORTED_MODULE_0__.taskObj.refresh()\n    }\n}\n\nconst clickDelete = function () {\n    const infoTitle = this.parentElement.firstChild.textContent\n    const taskToRemove = _main__WEBPACK_IMPORTED_MODULE_0__.taskObj.getRemove(infoTitle)\n    if (taskToRemove) {\n        taskToRemove.removeSelf(_main__WEBPACK_IMPORTED_MODULE_0__.taskObj.tasklist)\n        _main__WEBPACK_IMPORTED_MODULE_0__.taskObj.refresh()\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/taskfx/taskItemHoverFunctions.js?");

/***/ }),

/***/ "./src/img/calendar.svg":
/*!******************************!*\
  !*** ./src/img/calendar.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d28d21f5260965e5c123.svg\";\n\n//# sourceURL=webpack://todolist/./src/img/calendar.svg?");

/***/ }),

/***/ "./src/img/check-all.svg":
/*!*******************************!*\
  !*** ./src/img/check-all.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"498fb8e2c7cf437f5146.svg\";\n\n//# sourceURL=webpack://todolist/./src/img/check-all.svg?");

/***/ }),

/***/ "./src/img/plus-thick.svg":
/*!********************************!*\
  !*** ./src/img/plus-thick.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"469e7f772cffd2e91e89.svg\";\n\n//# sourceURL=webpack://todolist/./src/img/plus-thick.svg?");

/***/ }),

/***/ "./src/img/view-week.svg":
/*!*******************************!*\
  !*** ./src/img/view-week.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8318bbfc3140847af091.svg\";\n\n//# sourceURL=webpack://todolist/./src/img/view-week.svg?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://todolist/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;