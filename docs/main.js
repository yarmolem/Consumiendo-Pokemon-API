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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_page_pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/page-pokemon */ \"./src/js/page-pokemon.js\");\n\n \n\n\nObject(_js_page_pokemon__WEBPACK_IMPORTED_MODULE_1__[\"init\"])();\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/page-pokemon.js":
/*!********************************!*\
  !*** ./src/js/page-pokemon.js ***!
  \********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _proveedor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proveedor */ \"./src/js/proveedor.js\");\n\r\n\r\nconst body = document.body;\r\nlet conteo = 1;\r\nlet olList, button;\r\n\r\nconst render = async () => {\r\n  const htmlBase = `\r\n    <h1>API Pokemon</h1>\r\n    <ol class=\"list-group\"></ol>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <button type=\"button\" class=\"btn btn-secondary bg-dark text-light border-dark mr-2\">Previous</button>\r\n        <button type=\"button\" class=\"btn btn-secondary bg-dark text-light border-dark\">Next</button>\r\n    </div>`;\r\n\r\n  const div = document.createElement(\"div\");\r\n  div.classList.add(\"container-fluid\");\r\n  div.innerHTML = htmlBase;\r\n  body.prepend(div);\r\n\r\n  const data = await Object(_proveedor__WEBPACK_IMPORTED_MODULE_0__[\"getPokemon\"])();\r\n    for (const name of data) {\r\n        imprimirLista( name )\r\n        conteo++;\r\n    }  \r\n\r\n};\r\n\r\nconst eventos = async ()=> {\r\n    \r\n    button = document.querySelectorAll('button')\r\n    button[0].addEventListener('click', async ()=>{\r\n    \r\n        if( conteo > 21 ){\r\n            conteo-=40;\r\n            olList.innerHTML = '';\r\n            const data = await Object(_proveedor__WEBPACK_IMPORTED_MODULE_0__[\"previusPage\"])();\r\n            for (const name of data) {\r\n                imprimirLista( name )\r\n                conteo++;\r\n            }\r\n        }\r\n    \r\n    })\r\n    button[1].addEventListener('click', async ()=>{\r\n        olList.innerHTML = '';\r\n        const data = await Object(_proveedor__WEBPACK_IMPORTED_MODULE_0__[\"nextPage\"])();\r\n            for (const name of data) {\r\n                imprimirLista( name )\r\n                conteo++;\r\n            }\r\n    })\r\n\r\n} \r\n\r\nconst imprimirLista = ( name ) => {\r\n    olList = document.querySelector('ol');\r\n    const olItem = document.createElement('li');\r\n    olItem.classList.add(\"list-group-item\");\r\n    olItem.classList.add(\"bg-dark\");\r\n    olItem.classList.add(\"mb-1\");\r\n    olItem.innerText = `ID: ${conteo} ${name.toUpperCase()}`;\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${conteo}.png`;\r\n\r\n    olList.append(olItem);\r\n    olList.append(img);\r\n};\r\n\r\n\r\nconst init = () => {\r\n  render();\r\n  eventos();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/page-pokemon.js?");

/***/ }),

/***/ "./src/js/proveedor.js":
/*!*****************************!*\
  !*** ./src/js/proveedor.js ***!
  \*****************************/
/*! exports provided: getPokemon, nextPage, previusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPokemon\", function() { return getPokemon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextPage\", function() { return nextPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previusPage\", function() { return previusPage; });\n\r\nlet conteo = 0;\r\nlet url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;\r\n\r\n\r\nconst getPokemon = async ()=>{\r\n    const solicitud = await fetch( url ).then( data => data.json() );\r\n    let arrayPokemon = solicitud.results.map( data=>{ return data.name } );\r\n    return arrayPokemon;\r\n}\r\n\r\nconst nextPage = async ()=> {\r\n    conteo+=20;\r\n    url = `https://pokeapi.co/api/v2/pokemon/?offset=${conteo}&limit=20`;\r\n    const solicitud = await fetch( url ).then( data => data.json() );\r\n    let arrayPokemon = solicitud.results.map( data=>{ return data.name } );\r\n    return arrayPokemon;\r\n}\r\n\r\nconst previusPage = async ()=> {\r\n    conteo-=20;\r\n    url = `https://pokeapi.co/api/v2/pokemon/?offset=${conteo}&limit=20`;\r\n    const solicitud = await fetch( url ).then( data => data.json() );\r\n    let arrayPokemon = solicitud.results.map( data=>{ return data.name } );\r\n    return arrayPokemon;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/proveedor.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });