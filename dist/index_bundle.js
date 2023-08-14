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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --highlight: lightskyblue;\n    --second-highlight: lightblue;\n    --secondary: white;\n    --main: black;\n}\n@keyframes slide-down {\n    0% {\n        opacity: 0;\n        transform: translateY(-15px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes slide-right {\n    0%{\n        opacity: 0;\n        transform: translateX(-40px);\n        filter: blur(2px);\n    }\n    80% {\n        filter: blur(0);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(0px);\n    }\n}\n@keyframes logo-build {\n    0% {\n        opacity: 0;\n        column-gap: 50px;\n        transform: rotate(0deg);\n    }\n    50%{\n        gap: 2px;\n        opacity: 0.8;\n        scale: 0.8;\n    }\n    100% {\n        opacity: 1;\n        gap: 10px;\n        transform: rotate(405deg);\n    }\n}\n@keyframes fade-in {\n    0%{\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    min-height: 100vh;\n    min-width: 100vw;\n    background-color: var(--main);\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    box-sizing: border-box;\n}\na {\n    text-decoration: none;\n    color: white;\n}\n#sidebar button {\n    width: 100%;\n}\n#page{\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-rows: 150px 1fr ;\n    grid-template-columns: minmax(200px, 1fr) 4fr;\n}\n\n#header {\n    grid-row: 1;\n    grid-column: 1 / -1;\n    background-color: black;\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) 4fr;\n}\n\n#header h1 {\n    color: white;\n    align-self: center;\n    justify-self: center;\n    font-size: 40px;\n    cursor: default;\n    transition: all 1s;\n    animation: slide-right 1s ease;\n}\n\n#header h1:hover > span {\n    color: var(--highlight);\n    letter-spacing: 2px;\n    font-size: 45px;\n}\n\n#header span {\n    transition: all 1s;\n}\n\n#top-logo {\n    background-color: black;\n    height: 80px;\n    width: 80px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    align-self: center;\n    background-color: black;\n    justify-self: center;\n    gap: 10px;\n    transform: rotate(45deg);\n    transition: all  1.5s ease-in-out 0.2s;\n    animation: logo-build 1.5s ease;\n}\n#top-logo:hover {\n    transform: rotate(405deg);\n    gap: 2px;\n    scale: 0.8;\n    /* gap: 5px; */\n}\n.logo-bar {\n    background-color: black;\n}\n#one {\n    grid-row: 1;\n    background-color: white;\n    grid-column: 1/ -2;\n}\n#four {\n    grid-column: span 2;\n    background-color: white;\n}\n#two{\n    background-color: var(--highlight);\n}\n#three{\n    background-color: var(--highlight);\n}\n\n\n#sidebar {\n    align-self: start;\n    position: sticky;\n    top: 0;\n    grid-row: 2 / -1;\n    grid-column: 1;\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n}\n\n#sidebar button {\n    background-color: black;\n    color: white;\n    font-size: 18px;\n    height: 60px;\n    border: none;\n    transition: all 0.6s;\n    font-weight: 600;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    align-items: center;\n    column-gap: 10px;\n    animation: slide-right 1s ease-in-out;\n}\n#sidebar button p {\n    justify-self: start;\n}\n#sidebar button:hover {\n    background: var(--secondary);\n    color: var(--main);\n    /* margin: 10px; */\n    padding-left: 20px;\n}\n#add-button:hover {\n    background-color: var(--highlight);\n    scale: 1.1;\n    color: black;\n    \n}\n\n#sidebar button:hover > .nav-image,\n#add-button:hover > #plus {\n    filter:invert(0%);\n}\n#add-button {\n    height: 50px;\n    width: 150px;\n    background-color: black;\n    transition: all 0.6s;\n    border: none;\n    background: black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    color: white;\n    align-items: center;\n\n    font-size: 18px;\n    font-weight: 600;\n\n    margin-top: 10px;\n    animation: slide-down 1s ease;\n}\n#add-button p {\n    justify-self: start;\n}\n#plus {\n    height: 20px;\n    align-self: center;\n    justify-self: center;\n}\n#add-button:hover > .nav-image {\n    filter: invert(100%);\n}\n.nav-image {\n    filter: invert(100%);\n    transition: all 0.6s;\n}\n\n#sidebar button img {\n    height: 30px;\n    width: auto;\n    justify-self: end;\n}\n\n#sidebar #add-nav {\n    margin-top: 50px;\n}\n#sidebar #add-nav:hover {\n    background-color: var(--highlight);\n}\n\n\n/* tab styling */\n#content {\n    min-width: 95%;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.overview-tab {\n    /* background-color: black; */\n    animation: slide-down 1s ease;\n    display: grid;\n    grid-auto-rows: minmax(1fr, 100px);\n    /* grid-template-columns: repeat(2,  1fr); */\n    align-content: start;\n    gap: 10px;\n\n    overflow: auto;\n    align-items: center;\n    background-color: black;\n}\n\n.task-item {\n    color: black;\n    background-color: #fff;\n    border: 1px solid black;\n    height: 100px;\n    border-radius: 20px;\n    padding: 5px 10px;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 30px 1fr;\n    transition: all 1s ease;\n}\n\n\n.task-info {\n    align-self: center;\n    justify-self: center;\n    font-size: 16px;\n    gap: 20%;\n    display: flex;\n    flex-direction: column;\n}\n.task-info .title {\n    grid-column: 1;\n    grid-row: 1/ -1;\n}\n\n#content .finished {\n    color: lightgray;\n    background-color: darkgrey;\n    text-decoration: line-through;\n}\n\n.new-form-tab h1 {\n    color: var(--highlight);\n}\n.form-info {\n    color: white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   listenerFx: () => (/* binding */ listenerFx)\n/* harmony export */ });\n/* harmony import */ var _tabCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabCreation */ \"./src/content_tabs/tabCreation.js\");\n\n\n\n\n\nconst listenerFx = function(buttonID, uniqueFunction){\n    const content = document.querySelector('#content')\n    const current = document.querySelector(`#${buttonID}`)\n    current.onclick = uniqueFunction\n    return\n}\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    listenerFx('overview', _tabCreation__WEBPACK_IMPORTED_MODULE_0__.overview)\n    listenerFx('week', _tabCreation__WEBPACK_IMPORTED_MODULE_0__.thisWeek)\n    listenerFx('month', _tabCreation__WEBPACK_IMPORTED_MODULE_0__.month)\n    listenerFx('add-nav', _tabCreation__WEBPACK_IMPORTED_MODULE_0__.addNew)\n}\n\n//# sourceURL=webpack://todolist/./src/content_tabs/addListeners.js?");

/***/ }),

/***/ "./src/content_tabs/clearContentMake.js":
/*!**********************************************!*\
  !*** ./src/content_tabs/clearContentMake.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(tabName){\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    content.removeAttribute('class')\n    content.classList.add(tabName+'-tab')\n    return content\n}\n\n//# sourceURL=webpack://todolist/./src/content_tabs/clearContentMake.js?");

/***/ }),

/***/ "./src/content_tabs/tabCreation.js":
/*!*****************************************!*\
  !*** ./src/content_tabs/tabCreation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNew: () => (/* binding */ addNew),\n/* harmony export */   month: () => (/* binding */ month),\n/* harmony export */   overview: () => (/* binding */ overview),\n/* harmony export */   thisWeek: () => (/* binding */ thisWeek)\n/* harmony export */ });\n/* harmony import */ var _clearContentMake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContentMake */ \"./src/content_tabs/clearContentMake.js\");\n/* harmony import */ var _img_plus_thick_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/plus-thick.svg */ \"./src/img/plus-thick.svg\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main */ \"./src/main.js\");\n\n\n\n\nconst createNewButton = function () {\n    const contentNewButton = document.createElement('button')\n    contentNewButton.id = 'add-button'\n\n    const addIcon = new Image()\n    addIcon.src = _img_plus_thick_svg__WEBPACK_IMPORTED_MODULE_1__\n    addIcon.classList.add('nav-image')\n    addIcon.id = 'plus'\n\n    const addName = document.createElement('p')\n    addName.textContent = 'Add New'\n\n    contentNewButton.appendChild(addIcon)\n    contentNewButton.appendChild(addName)\n    contentNewButton.onclick = addNew\n    return contentNewButton\n}\nfunction CreateTask(event) {\n    event.preventDefault();\n    const myFormData = new FormData(document.querySelector('#add-form'));\n    console.log(myFormData)\n\n    const formDataObj = {}\n    myFormData.forEach((value, key) => formDataObj[key] = value)\n    for ([key, value] of Object.entries(myFormData)) {\n        console.log(value)\n    }\n    console.log(myFormData)\n    return\n}\nconst formLabelInput = (label, input) => {\n    const newDiv = document.createElement('div')\n    newDiv.classList.add('form-info')\n    const newLabel = document.createElement('label')\n    const newInput = document.createElement('input')\n    const formattedName = label[0].toUpperCase() + label.substr(1)\n\n    newLabel.setAttribute('for', label)\n    newLabel.textContent = formattedName\n\n    newInput.id = label\n    newInput.name = label\n    newInput.type = input\n\n    newDiv.appendChild(newLabel)\n    newDiv.appendChild(newInput)\n    return newDiv\n}\n\nconst overview = function () {\n    const content = (0,_clearContentMake__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('overview')\n    const newButton = createNewButton()\n\n    //  DELETE ME -- new item created to simulate addition \n    _main__WEBPACK_IMPORTED_MODULE_2__.taskObj.addItem('peepee', 'peepeein the beee beep', 'lightgreen')\n    // DELETE ME\n    _main__WEBPACK_IMPORTED_MODULE_2__.taskObj.refresh()\n\n\n\n    content.appendChild(createNewButton())\n    return\n}\n\nconst thisWeek = function () {\n    const content = (0,_clearContentMake__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('week')\n    content.appendChild(createNewButton())\n\n\n}\n\nconst month = function () {\n    const content = (0,_clearContentMake__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('month')\n    content.appendChild(createNewButton())\n}\n\nconst addNew = function () {\n    const content = (0,_clearContentMake__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('new-form')\n    const formElement = document.createElement('form')\n    formElement.id = 'add-form'\n\n    const newH1 = document.createElement('h1')\n    newH1.textContent = 'New Task'\n\n    const newTitle = formLabelInput('title', 'text')\n\n    const submitButton = document.createElement('button')\n    submitButton.type = 'submit'\n    submitButton.id = 'form-submit'\n\n    submitButton.addEventListener('click', (event) => {\n        event.preventDefault()\n        const myFormData = new FormData(document.querySelector('#add-form'));\n\n        const formDataObj = {}\n        myFormData.forEach((value, key) => formDataObj[key] = value)\n\n        console.log(formDataObj)\n        return\n    })\n\n\n    content.appendChild(newH1)\n    formElement.appendChild(newTitle)\n    formElement.appendChild(submitButton)\n    content.appendChild(formElement)\n}\n\n//# sourceURL=webpack://todolist/./src/content_tabs/tabCreation.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   taskObj: () => (/* binding */ taskObj)\n/* harmony export */ });\n/* harmony import */ var _basic_page_makeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic_page/makeAll */ \"./src/basic_page/makeAll.js\");\n/* harmony import */ var _content_tabs_addListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content_tabs/addListeners */ \"./src/content_tabs/addListeners.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nclass Task {\n    constructor(title, description, importance, completed) {\n        this.title = title\n        this.description = description\n        this.importance = importance\n        // CHANGE IMPORTANCE TO A NUMBER?\n        this.completed = completed ? true: false\n    }\n\n    complete() {\n        this.completed = true\n        return\n    }\n    removeSelf() {\n        taskList.splice(taskList.indexOf(this))\n        return\n    }\n}\n\nconst Holder = (function () {\n    let tasklist = []\n\n    const clear = function () {\n        document.querySelectorAll('.task-item').forEach(e => e.remove())\n    }\n    const refresh = function () {\n        const content = document.querySelector('#content')\n        for (let i = 0; i < tasklist.length; i++) {\n            const createdTask = document.createElement('div')\n            createdTask.classList.add('task-item')\n            console.log(tasklist[i])\n            const iterable = tasklist[i]\n            for (let [key, value] of Object.entries(iterable)) {\n                console.log(key)\n                console.log(value)\n                // add a switch to change the value of src if it's important\n\n                const info = document.createElement('h3')\n                switch (key) {\n                    case ('importance'):\n                        createdTask.style = `background-color: ${value}`\n                        break;\n                    case ('completed'):\n                        if (value) {\n                            createdTask.style = 'background-color: grey';\n                            createdTask.classList.add('finished')\n                        } \n                        break\n                    default:\n                        info.classList.add('task-info', key)\n                        info.textContent = value\n                        createdTask.appendChild(info)\n                }\n            }\n            content.appendChild(createdTask)\n        }\n\n    }\n    const addItem = function (title, descr, importance, completed) {\n        const newTask = new Task(title, descr, importance, completed)\n        clear()\n        tasklist.push(newTask)\n    }\n\n    return {\n        tasklist,\n        clear,\n        refresh,\n        addItem\n    }\n})()\nconst taskObj = Holder\ntaskObj.addItem('peepee', 'peepeein the toilet', 'skyblue')\ntaskObj.addItem('peepee', 'peepeein the toilet', 'red', false)\ntaskObj.addItem('peepee', 'peepeein the toilet', 'red', true)\n\n\n;(0,_basic_page_makeAll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_content_tabs_addListeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://todolist/./src/main.js?");

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