

window.addEventListener("DOMContentLoaded", function () {
    
    "use strict";
    let tab = document.querySelectorAll(".info-header-tab"), //все пункты меню
        info = document.querySelector(".info-header"), //область включающая все пункты меню
        tabContent = document.querySelectorAll(".info-tabcontent"); //содержимое табов

    //скрываем содержимое всех табов начиная с элемента a
    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    };    

    hideTabContent(1);//скрываем все табы кроме нулевого

    //отобразить таб b
    let showTabContent = (b) => {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.hide("show");
        }        
    };

    //отслеживаем нажатие в области с меню
    info.addEventListener("click", (event) => {
        let target = event.target; //делегируем нажатый таб
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i] ) {
                    hideTabContent(0);//скрываем все! табы
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer 
    let deadline = "2018-10-26";
    
    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }

            // hours = Math.floor((t/1000/60/60) % 24);
            // days = Math.floor((t/(1000*60*60*24)));
        return {
            "total" : t,
            "hours" : hours,
            "minutes" : minutes,
            "seconds" : seconds
        };    
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds");            

        let updateClock = () => {
            let t = getTimeRemaining(endtime);
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            } else {
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }            
        };
        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock("timer", deadline);

    // Скрипт плавной прокрутки

    function animate(draw, duration) {
        let start = performance.now();
        requestAnimationFrame(
            function animate(time) {
                let timePassed = time - start;
                if (timePassed > duration) {
                    timePassed = duration;
                }

                draw(timePassed);

                if (timePassed < duration) {
                    requestAnimationFrame(animate);
                }
            });
    }

    let menu = document.getElementsByTagName("nav")[0];

    menu.addEventListener("click", (event) => {
        event.preventDefault();
        animate( (timePassed) => {
            let target = event.target;
            let section = document.getElementById(target.getAttribute("href").slice(1));
            window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
        }, 1500);
    });    

    // Modal
    let more = document.querySelector(".more"),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector(".popup-close");
    
    more.addEventListener("click", function() {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden"; // Запретим прокрутку страницы при открытом модальном окне.
    });

    close.addEventListener("click", function() {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

    let descriptionBtn = document.querySelector(".description-btn"),
        descriptionBtnCollection = document.getElementsByClassName("description-btn");
    
    for (var i = 0; i < descriptionBtnCollection.length; i++) {
        descriptionBtnCollection[i].addEventListener("click", function () {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden"; // Запретим прокрутку страницы при открытом модальном окне.
        });
    }
    
    // Form

    let message = {
        loading: "url(../img/ajax-loader.gif)", // Загрузка...
        success: "url(../img/checked.svg)", // Спасибо! Скоро мы с вами свяжемся!
        failure: "url(../img/failure.svg)" // Что-то пошло не так...
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div"),
        contactForm = document.querySelector(".form-contact"),
        inputContactForm = contactForm.getElementsByTagName("input");

        
        statusMessage.classList.add("status");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

        let formData = new FormData(form);

        let obj = {}; // Промежуточный объект
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        // request.send(formData);
        request.send(json);


        request.addEventListener("readystatechange", function() {
            if (request.readyState < 4) {
                statusMessage.style.backgroundImage = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.style.backgroundImage = message.success;
            } else {
                statusMessage.style.backgroundImage = message.failure;
            }
        });

            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
    });

    // Form contact-form
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let requestContact = new XMLHttpRequest();
        requestContact.open("POST", "server.php");
        // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        requestContact.setRequestHeader("Content-Type", "application/json; charset=utf-8");

        let formDataContact = new FormData(contactForm); //Объект FormData предназначен для кодирования данных, которые необходимо отправить на сервер посредством технологии AJAX (XMLHttpRequest).

        
        let objContact = {}; // Промежуточный объект
        formDataContact.forEach(function (value, key) {
            objContact[key] = value;
        });

        let jsonContact = JSON.stringify(objContact);

        // request.send(formData);
        requestContact.send(jsonContact);


        requestContact.addEventListener("readystatechange", function () {
            if (requestContact.readyState < 4) {
                statusMessage.style.backgroundImage = message.loading;
            } else if (requestContact.readyState === 4 && requestContact.status == 200) {
                statusMessage.style.backgroundImage = message.success;
            } else {
                statusMessage.style.backgroundImage = message.failure;
            }
        });

        for (let i = 0; i < inputContactForm.length; i++) {
            inputContactForm[i].value = "";
        }
    });

    input[0].addEventListener("keyup", function () {
        let digitInputPlus = /^(\+|[0-9])/;
        let digitInput = /^[0-9]+$/;
        let cutStringForm = input[0].value;
        let cutStringLenForm = input[0].value.length;

        if (cutStringForm.length > 1) {
            if (digitInputPlus.test(cutStringForm) && digitInput.test(cutStringForm.slice(1, cutStringForm.length))) {
                
            } else {
                cutStringForm = cutStringForm.substring(0, cutStringLenForm - 1);
                input[0].value = cutStringForm;
            }
        } else if (cutStringForm.length <= 1) {
            if (digitInputPlus.test(cutStringForm)) {
                
            } else {
                input[0].value = "";
            }
        }

    });

    inputContactForm[1].addEventListener("keyup", function () {
        let digitInputPlus = /^(\+|[0-9])/;
        let digitInput = /^[0-9]+$/;
        let cutString = inputContactForm[1].value;
        let cutStringLen = inputContactForm[1].value.length;

        if (cutString.length > 1) {
            if (digitInputPlus.test(cutString) && digitInput.test(cutString.slice(1, cutString.length))) {
                
            } else {
                cutString = cutString.substring(0, cutStringLen - 1);
                inputContactForm[1].value = cutString;
            }
        } else if (cutString.length <= 1) {
            if (digitInputPlus.test(cutString)) {
                
            } else {
                inputContactForm[1].value = "";
            }
        }
    });



});