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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/ajax.js":
/*!******************************!*\
  !*** ./src/js/parts/ajax.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ajax; });
function ajax() {
    // Form
    var form = document.querySelectorAll(".form"),
        body = document.querySelector("body"),
        statusImg = document.createElement('img'),
        statusBlock = document.querySelector(".ajax-block"),
        statusMessage = document.createElement("p"),
        statusMessageLoading = document.createTextNode("Загрузка..."),
        statusMessageSuccess = document.createTextNode("Спасибо! Скоро мы с вами свяжемся"),
        statusMessageFailure = document.createTextNode("Извините, возникли технические трудности");
    
    statusMessage.classList.add("ajax-response");
    
    function hideElements(form) {
        // for (var i = 0; i < form.children.length; i++) {
        //     if (form.children[i].tagName == 'H4') {
        //         form.children[i].style.display = "none";
        //     } else if (form.children[i].tagName == 'IMG') {
        //         form.children[i].style.display = "inline-block";
        //         form.children[i].style.width = "150px";
        //         form.style.display = "flex";
        //         form.style.justifyContent = "center";
        //         form.style.alignItems = "center";
        //         form.style.flexFlow = " column wrap";
        //     } else {
        //         form.children[i].style.display = "none";
        //     }
        // }
    }

    function loading(incomingObject) {
        hideElements(incomingObject);
        statusMessage.appendChild(statusMessageLoading);
        incomingObject.appendChild(statusMessage);
        statusImg.src = "/src/img/ajax/loading.svg";
    }

    function success(incomingObject) {
        hideElements(incomingObject);
        statusMessage.appendChild(statusMessageSuccess);
        incomingObject.appendChild(statusMessage);
        statusImg.src = "/src/img/ajax/checked.svg";
    }

    function failure(incomingObject) {
        hideElements(incomingObject);
        statusMessage.appendChild(statusMessageFailure);
        incomingObject.appendChild(statusMessage);
        statusImg.src = "/src/img/ajax/failure.svg";
    }

    function ajaxSend(e) {
        var input = e.getElementsByTagName("input");
        e.appendChild(statusImg);

        var request = new XMLHttpRequest();
        request.open("POST", 'server.php');
        request.setRequestHeader("Content-Type", "aplication/x-www-form-urlencoded");

        var formData = new FormData(e);
        request.send(formData);

        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                loading(e);
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    success(e);
                } else {
                    failure(e);
                }
            }
        };

        // Очищаем инпуты
        for (var i = 0; i < input.length; i++) {            
            input[i].value = "";
        }
    }

    body.addEventListener("submit", function (e) {
        var target = e.target;
        e.preventDefault();
        ajaxSend(target);
    });
    }
    


/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calc; });
function calc() {

}

/***/ }),

/***/ "./src/js/parts/minutes.js":
/*!*********************************!*\
  !*** ./src/js/parts/minutes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return minutes; });
function minutes() {

}

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
function modal() {
   let btnOrder = document.querySelectorAll(".button-order"),
       popDesign = document.querySelector(".popup-design"),
       btnClose = document.querySelectorAll(".popup-close"),
       popContent = document.querySelectorAll(".popup-content"),
       btnConsultation = document.querySelectorAll(".button-consultation"),
       popConsultation = document.querySelector(".popup-consultation"),
       btnGift = document.querySelector(".fixed-gift"),
       popGift = document.querySelector(".popup-gift");

   for (let a = 0; a < btnOrder.length; a++) {
       btnOrder[a].addEventListener("click", () => {
           popDesign.style.display = "block";
       });    
   }

   for (let b = 0; b < btnClose.length; b++) {
       btnClose[b].addEventListener("click", () => {
           popDesign.style.display = "none";
           popConsultation.style.display = "none";
           popGift.style.display = "none";

       });
   }

   popDesign.addEventListener("click", (event) => {
       
       if (event.target.classList.contains("popup-design")) {
           popDesign.style.display = "none";
           //Закрытие "догоняющего" модального окна "Остались вопросы?"
           popConsultation.style.display = "none";            
       } else {
           
       }
       
   });

   for (let c = 0; c < btnConsultation.length; c++) {
       btnConsultation[c].addEventListener("click", () => {
           popConsultation.style.display = "block";
       });
   }   

   btnGift.addEventListener("click", () => {
       popGift.style.display = "block";
   });

   popGift.addEventListener("click", (event) => {
       console.log(event.target);
       if (event.target.classList.contains("popup-gift")) {
           popGift.style.display = "none";
       } else {

       }
   });
}

/***/ }),

/***/ "./src/js/parts/pict.js":
/*!******************************!*\
  !*** ./src/js/parts/pict.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pict; });
function pict() {
    let imgPict =document.querySelectorAll(".main-slider-item");
    imgPict[1].style.display = "none";
    setInterval(() => {
     if (imgPict[0].style.display == "none") {
         imgPict[0].style.display = "block";
         imgPict[1].style.display = "none";
     } else {
         imgPict[0].style.display = "none";
         imgPict[1].style.display = "block";
     }
    }, 3000);
}

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slider; });
function slider() {
    
}

/***/ }),

/***/ "./src/js/parts/tab.js":
/*!*****************************!*\
  !*** ./src/js/parts/tab.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tab; });
function tab() {
    
}

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timer; });
function timer() {
    
}

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_parts_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/parts/ajax */ "./src/js/parts/ajax.js");
/* harmony import */ var _js_parts_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/parts/calc */ "./src/js/parts/calc.js");
/* harmony import */ var _js_parts_minutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/parts/minutes */ "./src/js/parts/minutes.js");
/* harmony import */ var _js_parts_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/parts/modal */ "./src/js/parts/modal.js");
/* harmony import */ var _js_parts_pict__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/parts/pict */ "./src/js/parts/pict.js");
/* harmony import */ var _js_parts_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/parts/slider */ "./src/js/parts/slider.js");
/* harmony import */ var _js_parts_tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/parts/tab */ "./src/js/parts/tab.js");
/* harmony import */ var _js_parts_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/parts/timer */ "./src/js/parts/timer.js");









Object(_js_parts_ajax__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_js_parts_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_js_parts_minutes__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_js_parts_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_js_parts_pict__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_js_parts_slider__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_js_parts_tab__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_js_parts_timer__WEBPACK_IMPORTED_MODULE_7__["default"])();

// window.addEventListener("DOMContentLoaded", function () {
//      "use strict";     
// });

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map