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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_element__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Container__ = __webpack_require__(/*! ../components/Container */ 3);\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n\nregisterBlockType('cgb/block-my-block', {\n  title: __('Digicos Blocks - BlokTestowy'),\n  icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'common',\n  keywords: [__('Digicos Blocks — BlokTestowy'), __('Digicos Blocks'), __('BlokTestowy')],\n  attributes: {\n    cardList: {\n      type: 'Array',\n      default: [{\n        \"top\": \"abc\",\n        \"middle\": \"def\",\n        \"bottom\": \"ghi\"\n      }, {\n        \"top\": \"jkl\",\n        \"middle\": \"mno\",\n        \"bottom\": \"prs\"\n      }, {\n        \"top\": \"tuv\",\n        \"middle\": \"wxy\",\n        \"bottom\": \"zzz\"\n      }]\n    },\n    topSquareTitle: {\n      type: 'string',\n      default: 'Tytul'\n    },\n    bottomSquareTitle: {\n      type: 'string',\n      default: 'dolny Tytul'\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n\n    var changeTopTitleFoo = function changeTopTitleFoo(event) {\n      console.log(\"changing the top square title pog!\", event.target.value);\n      setAttributes({ topSquareTitle: event.target.value });\n      console.log(attributes);\n    };\n    return wp.element.createElement(\n      'div',\n      null,\n      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Container__[\"a\" /* default */], { edit: 'true', updateTopSquareFoo: changeTopTitleFoo, attributes: attributes })\n    );\n  },\n  save: function save(props) {\n    return wp.element.createElement(\n      'div',\n      null,\n      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Container__[\"a\" /* default */], { edit: 'false', attributes: props.attributes })\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW5lcic7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1teS1ibG9jaycsIHtcbiAgdGl0bGU6IF9fKCdEaWdpY29zIEJsb2NrcyAtIEJsb2tUZXN0b3d5JyksXG4gIGljb246ICdzbWlsZXknLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAga2V5d29yZHM6IFtfXygnRGlnaWNvcyBCbG9ja3Mg4oCUIEJsb2tUZXN0b3d5JyksIF9fKCdEaWdpY29zIEJsb2NrcycpLCBfXygnQmxva1Rlc3Rvd3knKV0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBjYXJkTGlzdDoge1xuICAgICAgdHlwZTogJ0FycmF5JyxcbiAgICAgIGRlZmF1bHQ6IFt7XG4gICAgICAgIFwidG9wXCI6IFwiYWJjXCIsXG4gICAgICAgIFwibWlkZGxlXCI6IFwiZGVmXCIsXG4gICAgICAgIFwiYm90dG9tXCI6IFwiZ2hpXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJ0b3BcIjogXCJqa2xcIixcbiAgICAgICAgXCJtaWRkbGVcIjogXCJtbm9cIixcbiAgICAgICAgXCJib3R0b21cIjogXCJwcnNcIlxuICAgICAgfSwge1xuICAgICAgICBcInRvcFwiOiBcInR1dlwiLFxuICAgICAgICBcIm1pZGRsZVwiOiBcInd4eVwiLFxuICAgICAgICBcImJvdHRvbVwiOiBcInp6elwiXG4gICAgICB9XVxuICAgIH0sXG4gICAgdG9wU3F1YXJlVGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ1R5dHVsJ1xuICAgIH0sXG4gICAgYm90dG9tU3F1YXJlVGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RvbG55IFR5dHVsJ1xuICAgIH1cbiAgfSxcbiAgZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXM7XG5cbiAgICB2YXIgY2hhbmdlVG9wVGl0bGVGb28gPSBmdW5jdGlvbiBjaGFuZ2VUb3BUaXRsZUZvbyhldmVudCkge1xuICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2luZyB0aGUgdG9wIHNxdWFyZSB0aXRsZSBwb2chXCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHsgdG9wU3F1YXJlVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGF0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgbnVsbCxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHsgZWRpdDogJ3RydWUnLCB1cGRhdGVUb3BTcXVhcmVGb286IGNoYW5nZVRvcFRpdGxlRm9vLCBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzIH0pXG4gICAgKTtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG51bGwsXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7IGVkaXQ6ICdmYWxzZScsIGF0dHJpYnV0ZXM6IHByb3BzLmF0dHJpYnV0ZXMgfSlcbiAgICApO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ }),
/* 3 */
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("\n\nvar Container = function Container(_ref) {\n  var edit = _ref.edit,\n      updateTopSquareFoo = _ref.updateTopSquareFoo,\n      attributes = _ref.attributes;\n\n  var cardList = attributes.cardList;\n  console.log(\"cardList:\", attributes.cardList);\n  var mainCard = Math.floor(cardList.length / 2);\n  var nextCard = function nextCard() {\n    console.log(\"next\");\n    cardList.reverse();\n  };\n  var prevCard = function prevCard() {\n    console.log(\"prev\");\n    cardList.reverse();\n  };\n  var editSqTop = function editSqTop(event) {\n    console.log(event.target.parentElement);\n    event.target.parentElement.classList.toggle(\"edited\");\n  };\n\n  console.log(edit);\n  return wp.element.createElement(\n    \"div\",\n    { \"class\": \"Card__Container\" },\n    wp.element.createElement(\n      \"div\",\n      { \"class\": \"ar-t\", onClick: function onClick() {\n          return nextCard();\n        } },\n      wp.element.createElement(\"img\", { src: \"http://localhost/wordpress/wp-content/uploads/2021/02/aw.png\", alt: \"\" })\n    ),\n    wp.element.createElement(\n      \"div\",\n      { \"class\": \"ar-b\", onClick: function onClick() {\n          return prevCard();\n        } },\n      wp.element.createElement(\"img\", { src: \"http://localhost/wordpress/wp-content/uploads/2021/02/aw.png\", alt: \"\" })\n    ),\n    wp.element.createElement(\n      \"div\",\n      { \"class\": \"sq sq-t Border\" },\n      edit ? wp.element.createElement(\"input\", { onChange: updateTopSquareFoo, placeholder: attributes.topSquareTitle, className: \"squareTitleEdit\" }) : \"\",\n      wp.element.createElement(\n        \"div\",\n        { \"class\": \"squareTitleEditView\" },\n        attributes.topSquareTitle\n      ),\n      edit ? wp.element.createElement(\"div\", { onClick: function onClick(e) {\n          return editSqTop(e);\n        }, id: \"editSqTop\", \"class\": \"edit\" }) : \"\"\n    ),\n    wp.element.createElement(\n      \"div\",\n      { \"class\": \"Container__Gradient\", id: \"cards\" },\n      cardList.map(function (item, index) {\n        console.log(index, mainCard);\n        return wp.element.createElement(\n          \"div\",\n          { style: { order: index + 1 }, \"class\": index == mainCard ? \"Card Card__main Border\" : \"Card Border\" },\n          wp.element.createElement(\n            \"div\",\n            { \"class\": \"Card__top\" },\n            wp.element.createElement(\n              \"div\",\n              { \"class\": \"Card__top__title\" },\n              item.top\n            ),\n            wp.element.createElement(\"div\", { \"class\": \"Card__top__text\" })\n          ),\n          wp.element.createElement(\n            \"div\",\n            { \"class\": \"Card__middle\" },\n            wp.element.createElement(\n              \"div\",\n              { \"class\": \"Card__middle__contnet\" },\n              item.middle\n            )\n          ),\n          wp.element.createElement(\n            \"div\",\n            { \"class\": \"Card__bottom\" },\n            wp.element.createElement(\n              \"div\",\n              { \"class\": \"Card__bottom__text\" },\n              item.bottom\n            )\n          )\n        );\n      })\n    ),\n    wp.element.createElement(\"div\", { \"class\": \"ar-m\", id: \"ar-m\" }),\n    wp.element.createElement(\n      \"div\",\n      { \"class\": \"sq sq-b Border\" },\n      \"d\"\n    )\n  );\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (Container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci5qcz9hMTk1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG52YXIgQ29udGFpbmVyID0gZnVuY3Rpb24gQ29udGFpbmVyKF9yZWYpIHtcbiAgdmFyIGVkaXQgPSBfcmVmLmVkaXQsXG4gICAgICB1cGRhdGVUb3BTcXVhcmVGb28gPSBfcmVmLnVwZGF0ZVRvcFNxdWFyZUZvbyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXM7XG5cbiAgdmFyIGNhcmRMaXN0ID0gYXR0cmlidXRlcy5jYXJkTGlzdDtcbiAgY29uc29sZS5sb2coXCJjYXJkTGlzdDpcIiwgYXR0cmlidXRlcy5jYXJkTGlzdCk7XG4gIHZhciBtYWluQ2FyZCA9IE1hdGguZmxvb3IoY2FyZExpc3QubGVuZ3RoIC8gMik7XG4gIHZhciBuZXh0Q2FyZCA9IGZ1bmN0aW9uIG5leHRDYXJkKCkge1xuICAgIGNvbnNvbGUubG9nKFwibmV4dFwiKTtcbiAgICBjYXJkTGlzdC5yZXZlcnNlKCk7XG4gIH07XG4gIHZhciBwcmV2Q2FyZCA9IGZ1bmN0aW9uIHByZXZDYXJkKCkge1xuICAgIGNvbnNvbGUubG9nKFwicHJldlwiKTtcbiAgICBjYXJkTGlzdC5yZXZlcnNlKCk7XG4gIH07XG4gIHZhciBlZGl0U3FUb3AgPSBmdW5jdGlvbiBlZGl0U3FUb3AoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImVkaXRlZFwiKTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhlZGl0KTtcbiAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgXCJjbGFzc1wiOiBcIkNhcmRfX0NvbnRhaW5lclwiIH0sXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgXCJjbGFzc1wiOiBcImFyLXRcIiwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dENhcmQoKTtcbiAgICAgICAgfSB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImh0dHA6Ly9sb2NhbGhvc3Qvd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAyL2F3LnBuZ1wiLCBhbHQ6IFwiXCIgfSlcbiAgICApLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IFwiY2xhc3NcIjogXCJhci1iXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZDYXJkKCk7XG4gICAgICAgIH0gfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJodHRwOi8vbG9jYWxob3N0L3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMi9hdy5wbmdcIiwgYWx0OiBcIlwiIH0pXG4gICAgKSxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBcImNsYXNzXCI6IFwic3Egc3EtdCBCb3JkZXJcIiB9LFxuICAgICAgZWRpdCA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgb25DaGFuZ2U6IHVwZGF0ZVRvcFNxdWFyZUZvbywgcGxhY2Vob2xkZXI6IGF0dHJpYnV0ZXMudG9wU3F1YXJlVGl0bGUsIGNsYXNzTmFtZTogXCJzcXVhcmVUaXRsZUVkaXRcIiB9KSA6IFwiXCIsXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgXCJjbGFzc1wiOiBcInNxdWFyZVRpdGxlRWRpdFZpZXdcIiB9LFxuICAgICAgICBhdHRyaWJ1dGVzLnRvcFNxdWFyZVRpdGxlXG4gICAgICApLFxuICAgICAgZWRpdCA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIHJldHVybiBlZGl0U3FUb3AoZSk7XG4gICAgICAgIH0sIGlkOiBcImVkaXRTcVRvcFwiLCBcImNsYXNzXCI6IFwiZWRpdFwiIH0pIDogXCJcIlxuICAgICksXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgXCJjbGFzc1wiOiBcIkNvbnRhaW5lcl9fR3JhZGllbnRcIiwgaWQ6IFwiY2FyZHNcIiB9LFxuICAgICAgY2FyZExpc3QubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCwgbWFpbkNhcmQpO1xuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdHlsZTogeyBvcmRlcjogaW5kZXggKyAxIH0sIFwiY2xhc3NcIjogaW5kZXggPT0gbWFpbkNhcmQgPyBcIkNhcmQgQ2FyZF9fbWFpbiBCb3JkZXJcIiA6IFwiQ2FyZCBCb3JkZXJcIiB9LFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IFwiY2xhc3NcIjogXCJDYXJkX190b3BcIiB9LFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IFwiY2xhc3NcIjogXCJDYXJkX190b3BfX3RpdGxlXCIgfSxcbiAgICAgICAgICAgICAgaXRlbS50b3BcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBcImNsYXNzXCI6IFwiQ2FyZF9fdG9wX190ZXh0XCIgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IFwiY2xhc3NcIjogXCJDYXJkX19taWRkbGVcIiB9LFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IFwiY2xhc3NcIjogXCJDYXJkX19taWRkbGVfX2NvbnRuZXRcIiB9LFxuICAgICAgICAgICAgICBpdGVtLm1pZGRsZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgXCJjbGFzc1wiOiBcIkNhcmRfX2JvdHRvbVwiIH0sXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgXCJjbGFzc1wiOiBcIkNhcmRfX2JvdHRvbV9fdGV4dFwiIH0sXG4gICAgICAgICAgICAgIGl0ZW0uYm90dG9tXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IFwiY2xhc3NcIjogXCJhci1tXCIsIGlkOiBcImFyLW1cIiB9KSxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBcImNsYXNzXCI6IFwic3Egc3EtYiBCb3JkZXJcIiB9LFxuICAgICAgXCJkXCJcbiAgICApXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);