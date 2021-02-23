/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _pug_pages_index_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pug/pages/index.pug */ "./pug/pages/index.pug");
/* harmony import */ var _pug_pages_index_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pug_pages_index_pug__WEBPACK_IMPORTED_MODULE_2__);
 // import $ from 'jquery';




/***/ }),

/***/ "./img/2.jpg":
/*!*******************!*\
  !*** ./img/2.jpg ***!
  \*******************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/2.jpg");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./pug/includes/modules/footer.pug":
/*!*****************************************!*\
  !*** ./pug/includes/modules/footer.pug ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\n\u003Cfooter\u003E\n  \u003Cdiv class=\"container\"\u003E\u003Cspan\u003Efooter is here\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./pug/includes/modules/header.pug":
/*!*****************************************!*\
  !*** ./pug/includes/modules/header.pug ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\n\u003Cheader\u003E\n  \u003Cdiv class=\"container\"\u003E\u003Cspan\u003Eheader is here\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fheader\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./pug/pages/index.pug":
/*!*****************************!*\
  !*** ./pug/pages/index.pug ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 42:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (pageClass, pug_indent, title) {
      var pug_indent = [];
pug_mixins["item"] = pug_interp = function(title, descr){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"item\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"item-title\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"item-descr\"\u003E" + (pug.escape(null == (pug_interp = descr) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
var title = 'Webpack Pug';
var descr = 'descr for Webpack Pug';
var pageClass = 'index-page';
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"en\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Ctitle\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody" + (pug.attr("class", pug.classes([pageClass], [true]), false, true)) + "\u003E\n    \u003Cdiv class=\"site-container\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ../includes/modules/header.pug */ "./pug/includes/modules/header.pug").call(this, locals)) ? "" : pug_interp) + "\n      \u003Cdiv class=\"content-wrapper\"\u003E\n        \u003Csection\u003E\n          \u003Cdiv class=\"container\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/2.jpg */ "./img/2.jpg").default, true, true)+" alt=\"\"") + "\u003E\u003C?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\n\u003Csvg\n   xmlns:dc=\"http:\u002F\u002Fpurl.org\u002Fdc\u002Felements\u002F1.1\u002F\"\n   xmlns:cc=\"http:\u002F\u002Fcreativecommons.org\u002Fns#\"\n   xmlns:rdf=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002F02\u002F22-rdf-syntax-ns#\"\n   xmlns:svg=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\n   xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\n   xmlns:sodipodi=\"http:\u002F\u002Fsodipodi.sourceforge.net\u002FDTD\u002Fsodipodi-0.dtd\"\n   xmlns:inkscape=\"http:\u002F\u002Fwww.inkscape.org\u002Fnamespaces\u002Finkscape\"\n   version=\"1.1\"\n   id=\"layer\"\n   x=\"0px\"\n   y=\"0px\"\n   viewBox=\"0 0 1400.9482 564.58215\"\n   xml:space=\"preserve\"\n   sodipodi:docname=\"IMG 2017.svg\"\n   width=\"1400.9482\"\n   height=\"564.58215\"\n   inkscape:version=\"0.92.4 (5da689c313, 2019-01-14)\"\u003E\u003Cmetadata\n   id=\"metadata11\"\u003E\u003Crdf:RDF\u003E\u003Ccc:Work\n       rdf:about=\"\"\u003E\u003Cdc:format\u003Eimage\u002Fsvg+xml\u003C\u002Fdc:format\u003E\u003Cdc:type\n         rdf:resource=\"http:\u002F\u002Fpurl.org\u002Fdc\u002Fdcmitype\u002FStillImage\" \u002F\u003E\u003Cdc:title\u003E\u003C\u002Fdc:title\u003E\u003C\u002Fcc:Work\u003E\u003C\u002Frdf:RDF\u003E\u003C\u002Fmetadata\u003E\u003Cdefs\n   id=\"defs9\" \u002F\u003E\u003Csodipodi:namedview\n   pagecolor=\"#ffffff\"\n   bordercolor=\"#666666\"\n   borderopacity=\"1\"\n   objecttolerance=\"10\"\n   gridtolerance=\"10\"\n   guidetolerance=\"10\"\n   inkscape:pageopacity=\"0\"\n   inkscape:pageshadow=\"2\"\n   inkscape:window-width=\"1600\"\n   inkscape:window-height=\"837\"\n   id=\"namedview7\"\n   showgrid=\"false\"\n   fit-margin-top=\"0\"\n   fit-margin-left=\"0\"\n   fit-margin-right=\"0\"\n   fit-margin-bottom=\"0\"\n   inkscape:zoom=\"0.25594663\"\n   inkscape:cx=\"141.56844\"\n   inkscape:cy=\"116.1\"\n   inkscape:window-x=\"-8\"\n   inkscape:window-y=\"-8\"\n   inkscape:window-maximized=\"1\"\n   inkscape:current-layer=\"layer\" \u002F\u003E\n\u003Cg\n   id=\"g4\"\n   transform=\"translate(-21.8,122.48214)\"\u003E\n\t\u003Cpath\n   d=\"M 1422.7482,167.04716 H 1266.776 v 11.44108 h 40.6275 c 0,0 -0.2335,104.83763 -0.2335,116.04521 v 68.17948 c 0,33.62276 -8.4057,43.19591 -23.1156,52.06858 -16.1109,8.87267 -53.0026,15.64392 -77.7527,15.64392 -140.7953,0 -199.4016,-136.12547 -199.4016,-251.7037 0,-148.500513 70.2809,-250.302751 181.8898,-250.302751 69.3469,0 135.1915,21.481206 154.8048,95.964954 h 10.5071 v -79.620558 c 0,0 -36.4247,-29.186422 -165.3119,-29.186422 -142.8967,0 -256.37354,86.3918082 -256.37354,272.717927 0,159.00762 108.10654,253.33814 268.51504,253.33814 58.3729,0 118.8471,-14.24298 180.2554,-39.46004 V 178.02126 h 41.0945 v -10.9741 z M 324.8718,-17.411023 294.05094,430.65892 H 253.65693 V 442.1 h 153.87082 v -11.44108 h -40.6275 l 23.81612,-293.03167 z m 421.45193,75.184222 35.72418,372.652231 h -40.6275 V 442.1 H 895.05774 V 430.42543 H 854.66373 L 808.66593,-83.956064 Z M 570.97171,442.1 612.29968,351.97233 342.15016,-122.48214 Z m -117.21267,-564.58214 176.0525,436.39538 36.19116,-79.38707 z m 95.26448,0 131.92263,323.38555 33.38926,-76.81866 z M 178.00573,-72.281496 V -83.956064 H 137.14474 62.66099 21.8 v 11.674568 H 62.894482 V 430.42543 H 21.8 V 442.1 h 41.094482 74.250258 41.09448 V 430.42543 H 137.14474 V -72.281496 Z\"\n   id=\"path2\"\n   inkscape:connector-curvature=\"0\"\n   style=\"stroke-width:2.33491373\" \u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E";
pug_indent.push('            ');
pug_mixins["item"]('title', 'descr');
pug_indent.pop();
pug_indent.push('            ');
pug_mixins["item"]('title', 'descr');
pug_indent.pop();
pug_indent.push('            ');
pug_mixins["item"]('title', 'descr');
pug_indent.pop();
pug_html = pug_html + "\n            \u003Cul\u003E\n              \u003Cli\u003E\u003Ca href=\"#\"\u003Eone\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              \u003Cli\u003E\u003Ca href=\"#\"\u003Eone\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              \u003Cli\u003E\u003Ca href=\"#\"\u003Eone\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              \u003Cli\u003E\u003Ca href=\"#\"\u003Eone\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fsection\u003E\n      \u003C\u002Fdiv\u003E" + (null == (pug_interp = __webpack_require__(/*! ../includes/modules/footer.pug */ "./pug/includes/modules/footer.pug").call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";
    }.call(this, "pageClass" in locals_for_with ?
        locals_for_with.pageClass :
        typeof pageClass !== 'undefined' ? pageClass : undefined, "pug_indent" in locals_for_with ?
        locals_for_with.pug_indent :
        typeof pug_indent !== 'undefined' ? pug_indent : undefined, "title" in locals_for_with ?
        locals_for_with.title :
        typeof title !== 'undefined' ? title : undefined));
    ;;return pug_html;};
module.exports = template;

/***/ }),

/***/ "?65c5":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./js/main.js","vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_pug-runtime_index_js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.js.map