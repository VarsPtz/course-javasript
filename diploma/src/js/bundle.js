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

/***/ "./src/js/parts/addBlocks.js":
/*!***********************************!*\
  !*** ./src/js/parts/addBlocks.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addBlocks; });
function addBlocks() {
    var stylesBtn = document.querySelector("#btn-styles"),
        hiddenBlocks = document.querySelectorAll(".hidden-lg");

    stylesBtn.addEventListener("click", function () {
        for (var i = 0; i < hiddenBlocks.length; i++) {
            hiddenBlocks[i].className = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1";
            stylesBtn.style.display = "none";
        }
    });
}

/***/ }),

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
        statusBlock = document.querySelectorAll(".ajax-block"),
        statusMessage = document.createElement("p");
        // statusMessageLoading = document.createTextNode("Загрузка..."),
        // statusMessageSuccess = document.createTextNode("Спасибо! Скоро мы с вами свяжемся."),
        // statusMessageFailure = document.createTextNode("Извините, возникли технические трудности");
    
    statusMessage.classList.add("ajax-response");
    
    function hideElements(form) {
        form.style.display = "none";
    }

    function loading(incomingObject) {
        statusBlock.innerHTML = "";
        statusMessage.innerHTML = "Загрузка...";
        if (incomingObject.classList.contains("form-consultation")) {
            statusBlock[0].innerHTML = "";    
            statusBlock[0].style.display = "block";
            statusMessage.innerHTML = "Загрузка...";
            statusBlock[0].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-design")) {
            statusBlock[1].innerHTML = "";
            statusBlock[1].style.display = "block";
            statusMessage.innerHTML = "Загрузка...";
            statusBlock[1].appendChild(statusMessage);
        }
    }

    function success(incomingObject) {
        hideElements(incomingObject);
        if (incomingObject.classList.contains("form-consultation")) {
            statusBlock[0].innerHTML = "";
            statusImg.src = "img/ajax/checked.svg";
            statusBlock[0].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[0].style.display = "block";
            statusMessage.innerHTML = "Спасибо! Скоро мы с вами свяжемся.";
            statusBlock[0].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-design")) {
            statusBlock[1].innerHTML = "";
            statusImg.src = "img/ajax/checked.svg";
            statusBlock[1].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[1].style.display = "block";
            statusMessage.innerHTML = "Спасибо! Скоро мы с вами свяжемся.";
            statusBlock[1].appendChild(statusMessage);
        }
    }

    function failure(incomingObject) {
        hideElements(incomingObject);
        if (incomingObject.classList.contains("form-consultation")) {
            statusBlock[0].innerHTML = "";
            statusImg.src = "img/ajax/failure.svg";
            statusBlock[0].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[0].style.display = "block";
            statusMessage.innerHTML = "Извините, возникли технические трудности.";
            statusBlock[0].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-design")) {
            statusBlock[1].innerHTML = "";
            statusImg.src = "img/ajax/failure.svg";
            statusBlock[1].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[1].style.display = "block";
            statusMessage.innerHTML = "Извините, возникли технические трудности.";
            statusBlock[1].appendChild(statusMessage);
        }
    }

    function ajaxSend(e) {
        var input = e.getElementsByTagName("input");
        
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
        
        if (e.querySelector("textarea")) {
            e.querySelector("textarea").value = "";
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
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        calcPrice = document.querySelector('.calc-price'),
        calc = document.querySelector('.calc'),
        sizeCost = 0,
        materialCost = 0,
        optionsCost = 0,
        tempCost = 0;

        
    // Вычисление суммы
    function sumPrice() {
        var sum = Number(size.value) + Number(material.value) + Number(options.value);
        // Проверка на ввод промокода
        if (promocode.value.match(/IWANTPOPART/ig)) {
            sum = sum - sum * 0.3;
            return sum;
        } else {
            return sum;
        } 
    }

    
    // Проверка на порядок ввода
    function checkInput(e) {
        
        if (size.value != "Выберите размер картины") {
            if (size.value == "40x50") {
                sizeCost = 500;
            } else if (size.value == "50x70") {
                    sizeCost = 1000;
            } else if (size.value == "70x70") {
                    sizeCost = 1500;
            } else if (size.value == "70x100") {
                sizeCost = 2000;
            }
        } else {
            sizeCost = 0;
        }
        
        if (material.value != "Выберите материал картины") {
            if (material.value == "Холст из волокна") {
                materialCost = 500;
            } else if (material.value == "Льняной холст") {
                materialCost = 1000;
            } else if (material.value == "Холст из натурального хлопка") {
                materialCost = 1500;
            }
        } else {
            materialCost = 0;
        }

        if (options.value != "Дополнительные услуги") {
            if (options.value == "Покрытие арт-гелем") {
                optionsCost = 500;
            } else if (options.value == "Экспресс-изготовление") {
                optionsCost = 1000;
            } else if (options.value == "Доставка готовых работ") {
                optionsCost = 1500;
            }
        } else {
            optionsCost = 0;
        }

        if (sizeCost != 0 && materialCost != 0) {
            tempCost = sizeCost + materialCost + optionsCost;
            calcPrice.textContent = tempCost;
        }

        if (tempCost != 0 && promocode.value.match(/IWANTPOPART/ig)) {
            tempCost = tempCost - tempCost * 0.3;
            calcPrice.textContent = tempCost;
        }
    }

    // Отслеживаем событие изменение значения поля ввода
    calc.addEventListener('change', function (e) {
        var target = e.target;
        checkInput(target);
    });
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
   let body = document.querySelector("body"),
       btnDesign = document.querySelectorAll(".button-design"),
       popDesign = document.querySelector(".popup-design"),
       btnClose = document.querySelectorAll(".popup-close"),
       popContent = document.querySelectorAll(".popup-content"),
       btnConsultation = document.querySelectorAll(".button-consultation"),
       popConsultation = document.querySelector(".popup-consultation"),
       btnGift = document.querySelector(".fixed-gift"),
       popGift = document.querySelector(".popup-gift"),
       statusBlock = document.querySelectorAll(".ajax-block"),
       formTag = document.querySelectorAll("form");

   for (let a = 0; a < btnDesign.length; a++) {
       btnDesign[a].addEventListener("click", () => {
           statusBlock[1].innerHTML = "";
           for (let y = 0; y < document.querySelector.length; y++) {
               document.querySelectorAll("input")[4].innerHTML = "";
           } //Очищаем поле с телефоном
           for (let i = 0; i < formTag.length; i++) {
               formTag[i].style.display = "block";
           }
           popDesign.style.display = "block";
           document.body.style.overflow = "hidden";
       });    
   }

   for (let b = 0; b < btnClose.length; b++) {
       btnClose[b].addEventListener("click", () => {
           popDesign.style.display = "none";
           popConsultation.style.display = "none";
           popGift.style.display = "none";
           document.body.style.overflow = "";
       });
   }

   popDesign.addEventListener("click", (event) => {
       if (event.target.classList.contains("popup-design")) {
            //Закрытие "догоняющего" модального окна "Остались вопросы?"
           popDesign.style.display = "none";
           document.body.style.overflow = "";
       } else {
           
       }       
   });

   popConsultation.addEventListener("click", (event) => {
       if (event.target.classList.contains("popup-consultation")) {
           //Закрытие "догоняющего" модального окна "Остались вопросы?"
           popConsultation.style.display = "none";
           document.body.style.overflow = "";
       } else {

       }
   });

   for (let c = 0; c < btnConsultation.length; c++) {
       btnConsultation[c].addEventListener("click", () => {
           statusBlock[0].innerHTML = "";
           for (let i = 0; i < formTag.length; i++) {
               formTag[i].style.display = "block";
           }
           popConsultation.style.display = "block";
           document.body.style.overflow = "hidden";
       });
   }   

   btnGift.addEventListener("click", () => {
       popGift.style.display = "block";
       btnGift.style.display = "none";
       document.body.style.overflow = "hidden";
   });

   popGift.addEventListener("click", (event) => {
    //    console.log(event.target);
       if (event.target.classList.contains("popup-gift")) {
           popGift.style.display = "none";
           document.body.style.overflow = "";
       } else {

       }
   });

   //Проверка Имени на ввод русских символов
   function checkName(e) {
       var numRus = new RegExp("[а-яА-ЯёЁ]");
       var cutString = e.value;
       var cutStringLen = e.value.length;

       if (numRus.test(cutString.substr(-1))) {
           // console.log("match");
       } else {
           cutString = cutString.substring(0, cutStringLen - 1);
           e.value = cutString;
       }    
   }

   //Проверка комментария на ввод русских символов
   function checkMessage(e) {
       let numRus = new RegExp("[\.\,\!\? ёЁа-яА-Я0-9]");
       let cutString = e.value;
       let cutStringLen = e.value.length;

       if (numRus.test(cutString.substr(-1))) {
           // console.log("match");
       } else {
           cutString = cutString.substring(0, cutStringLen - 1);
           e.value = cutString;
       }
   }
   
   body.addEventListener('input', function (e) {
       var target = e.target;
    //    console.log(target);
       if (target.name == "name") {
           checkName(target);
       } else if (target.name == "message") {
           checkMessage(target);
       }
   });

   //Маска для номера телефона
    
    body.addEventListener("keydown", function (event) {
        var target = event.target;
        // console.log(target);
        if (target.name == "phone") {
            if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
                event.preventDefault();
            }
            var mask = '+7 (111) 111-11-11'; // Задаем маску

            if (/[0-9\+\ \-\(\)]/.test(event.key)) {
                // Здесь начинаем сравнивать event.value и mask
                var currentString = target.value;
                var currentLength = currentString.length;
                if (/[0-9]/.test(event.key)) {
                    if (mask[currentLength] == '1') {
                        target.value = currentString + event.key;
                    } else {
                        for (var i = currentLength; i < mask.length; i++) {
                            if (mask[i] == '1') {
                                target.value = currentString + event.key;
                                break;
                            }
                            currentString += mask[i];
                        }
                    }
                }
            }
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
    var sizeWrapper = document.querySelector('.sizes-wrapper'),
        sizeImg1 = document.querySelector(".size-1"),
        sizeImg2 = document.querySelector(".size-2"),
        sizeImg3 = document.querySelector(".size-3"),
        sizeImg4 = document.querySelector(".size-4");
    
    //Заменяем картинку и убираем текст
    function showImg(e) {
        var parImg = e.parentNode;
        for (let i = 0; i < parImg.children.length; i++) {
            if (parImg.children[i].classList.contains("sizes-hit")) {
                parImg.children[i].style.display = "inline-block";
            } else if (parImg.children[i].tagName == "P") {
                parImg.children[i].style.display = "none";
            }
        }        
        if (e.classList.contains("size-1")) {
            e.src = "img/sizes-1-1.png";
        } else if (e.classList.contains("size-2")) {
            e.src = "img/sizes-2-1.png";
        } else if (e.classList.contains("size-3")) {
            e.src = "img/sizes-3-1.png";
        } else if (e.classList.contains("size-4")) {
            e.src = "img/sizes-4-1.png";
        }
    }

    //Возвращаем подложку и текст
    function outImg(e) {
        var parImg = e.parentNode;
        for (let i = 0; i < parImg.children.length; i++) {
            if (parImg.children[i].tagName == "P") {
                parImg.children[i].style.display = "inline";
            }
        }
        if (e.classList.contains("size-1")) {
            e.src = "img/sizes-1.png";
        } else if (e.classList.contains("size-2")) {
            e.src = "img/sizes-2.png";
        } else if (e.classList.contains("size-3")) {
            e.src = "img/sizes-3.png";
        } else if (e.classList.contains("size-4")) {
            e.src = "img/sizes-4.png";
        }
    }

    //Событие - наведения мыши на блок
    sizeWrapper.addEventListener("mouseover", function (e) {
        var target = e.target;
        if (target.classList.contains("sizes-hit")) {

        } else {
            showImg(target);
        }
    });

    //Событие - мышь убирается с блока
    sizeWrapper.addEventListener("mouseout", function (e) {
        var target = e.target;
        outImg(target);
    });

    //Для мобильных устройств
    //Событие - наведения мыши на блок
    sizeWrapper.addEventListener("touchstart", function (e) {
        var target = e.target;
        if (target.classList.contains("sizes-hit")) {

        } else {
            showImg(target);
        }
    });

    //Событие - мышь убирается с блока
    document.body.addEventListener("touchstart", function (e) {
        var target = e.target;
        if (target.classList.contains("sizes-block")) {
            showImg();
        } else {
            sizeImg1.src = "img/sizes-1.png";
            sizeImg2.src = "img/sizes-2.png";
            sizeImg3.src = "img/sizes-3.png";
            sizeImg4.src = "img/sizes-4.png";
        }
    });
}

/***/ }),

/***/ "./src/js/parts/portfolioTabs.js":
/*!***************************************!*\
  !*** ./src/js/parts/portfolioTabs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return portfolioTabs; });
function portfolioTabs() {
    let portfolioBlocks = document.querySelectorAll('.portfolio-block'),
        portfolioMenu = document.querySelector('.portfolio-menu'),
        portfolioMenuItems = document.querySelectorAll('.portfolio-menu li'),
        portfolioNo = document.querySelector('.portfolio-no');

    //Активный пункт меню - Все работы
    // portfolioMenuItems[0].classList.add('active');

    //Удалить у всех пунктов меню класс active.    
    function getActiveTab(event) {
        if (event.tagName == "LI") {
            for (var i = 0; i < portfolioMenuItems.length; i++) {
                portfolioMenuItems[i].classList.remove('active');
            }
            //  Добавить класс active у вабранного элемента.
            event.classList.add('active');
        }
    }

    // Отобразить выбранные блоки
    function showBlocks(event) {
        if (event.classList.contains('grandmother') || event.classList.contains('granddad')) {
            portfolioNo.style.display = "block";
        } else {
            portfolioNo.style.display = "none";
        }
        for (var i = 0; i < portfolioBlocks.length; i++) {
            if (portfolioBlocks[i].classList.contains(event.classList[0])) {
                portfolioBlocks[i].style.display = "block";
            } else {
                portfolioBlocks[i].style.display = "none";
            }
        }
    }

    portfolioMenu.addEventListener('click', function (event) {
        var target = event.target;
        getActiveTab(target);
        showBlocks(target);
    });
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
    let imgPict = document.querySelectorAll(".main-slider-item");
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
/* harmony import */ var _js_parts_addBlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/parts/addBlocks */ "./src/js/parts/addBlocks.js");
/* harmony import */ var _js_parts_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/parts/ajax */ "./src/js/parts/ajax.js");
/* harmony import */ var _js_parts_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/parts/calc */ "./src/js/parts/calc.js");
/* harmony import */ var _js_parts_minutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/parts/minutes */ "./src/js/parts/minutes.js");
/* harmony import */ var _js_parts_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/parts/modal */ "./src/js/parts/modal.js");
/* harmony import */ var _js_parts_pict__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/parts/pict */ "./src/js/parts/pict.js");
/* harmony import */ var _js_parts_portfolioTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/parts/portfolioTabs */ "./src/js/parts/portfolioTabs.js");
/* harmony import */ var _js_parts_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/parts/slider */ "./src/js/parts/slider.js");
/* harmony import */ var _js_parts_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../js/parts/tab */ "./src/js/parts/tab.js");
/* harmony import */ var _js_parts_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/parts/timer */ "./src/js/parts/timer.js");











Object(_js_parts_addBlocks__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_js_parts_ajax__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_js_parts_calc__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_js_parts_minutes__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_js_parts_modal__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_js_parts_pict__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_js_parts_portfolioTabs__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_js_parts_slider__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_js_parts_tab__WEBPACK_IMPORTED_MODULE_8__["default"])();
Object(_js_parts_timer__WEBPACK_IMPORTED_MODULE_9__["default"])();

// window.addEventListener("DOMContentLoaded", function () {
//      "use strict";     
// });

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map