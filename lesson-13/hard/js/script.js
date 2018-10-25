

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
        // input = form.getElementsByTagName("input"),
        input = document.getElementsByTagName("input"),
        inputPhone = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div"),
        contactForm = document.querySelector(".form-contact"),
        inputContactForm = contactForm.getElementsByTagName("input"),
        mainModal = document.querySelector(".popup"),
        thanksModal = document.querySelector(".thanks");
        statusMessage.classList.add("status");
    

    function sendForm(elem) {
        elem.addEventListener("submit", function(e) {
            e.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {

                    return new Promise(function(resolve,reject) {
                        let request = new XMLHttpRequest();

                        request.open("POST", "server.php");

                        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 300) {
                                    resolve();
                                }
                                else {
                                    reject();
                                }
                            }
                        };
                        request.send(data);
                    });
                } // End postData
                
                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = "";
                    }
                }

                postData(formData)
                    .then(() => {
                        statusMessage.style.backgroundImage = message.loading;
                    })
                    .then(() => {
                                statusMessage.style.backgroundImage = message.success;
                    })
                    .catch(() => statusMessage.style.backgroundImage = message.failure)
                    .then(clearInput);
        });
        // sendForm(form);
        // sendForm(contactForm);
    } // End of sendForm
    sendForm(form);
    sendForm(contactForm);


    inputPhone[0].addEventListener("keyup", function () {
        let digitInputPlus = /^(\+|[0-9])/;
        let digitInput = /^[0-9]+$/;
        let cutStringForm = inputPhone[0].value;
        let cutStringLenForm = inputPhone[0].value.length;

        if (cutStringForm.length > 1) {
            if (digitInputPlus.test(cutStringForm) && digitInput.test(cutStringForm.slice(1, cutStringForm.length))) {
                
            } else {
                cutStringForm = cutStringForm.substring(0, cutStringLenForm - 1);
                inputPhone[0].value = cutStringForm;
            }
        } else if (cutStringForm.length <= 1) {
            if (digitInputPlus.test(cutStringForm)) {
                
            } else {
                inputPhone[0].value = "";
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

    // Slider

    let slideIndex = 1, // Слайд в текущий момент
      slides = document.querySelectorAll(".slider-item"),
      imageSlider = document.querySelector(".slider"),
      imgSlides = imageSlider.querySelectorAll("img"),
      prev = document.querySelector(".prev"),
      next = document.querySelector(".next"),
      dotsWrap = document.querySelector(".slider-dots"),
      dots = document.querySelectorAll(".dot");
    
    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        // } альтернативный способ записи forEach
        dots.forEach((item) => item.classList.remove("dot-active"));

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex -1].classList.add("dot-active");
    }
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener("click", function() {
        plusSlides(-1);
    });
    next.addEventListener("click", function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener("click", function(event) {
        for (let i = 0; i < dots.length +1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    // Calc
    
    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener("change", function() {
            personSum = +this.value;
            let placeCoefficient = place.options[place.selectedIndex].value;
            total = ((daysSum + personSum) * 4000) * placeCoefficient;
            
            if (persons.value == "" || persons.value == 0 || restDays.value == "" || restDays.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                // totalValue.innerHTML = total;
                var i = 0;
                let timerForCalc = setInterval(() => {
                    totalValue.innerHTML = i;
                    i = i + 50;
                    if (i > total) {
                        clearInterval(timerForCalc);
                    }
                }, 1);
            }
        });

        restDays.addEventListener("change", function () {
            daysSum = +this.value;
            let placeCoefficient = place.options[place.selectedIndex].value;
            total = (daysSum + personSum) * 4000 * placeCoefficient;

            if (persons.value == "" || restDays.value == "" || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                // totalValue.innerHTML = total;
                var i = 0;
                let timerForCalc = setInterval(() => {
                    totalValue.innerHTML = i;
                    i = i + 50;
                    if (i > total) {
                        clearInterval(timerForCalc);
                    }
                }, 1);
            }
        });

    persons.addEventListener("keyup", function() {
      var numRus = new RegExp("[0-9]");
        var cutString = persons.value;
        var cutStringLen = persons.value.length;

      if (numRus.test(cutString.substr(-1))) {
        // console.log("match");
      } else {
        cutString = cutString.substring(0, cutStringLen - 1);
          persons.value = cutString;
      }
    });
    
    restDays.addEventListener("keyup", function () {
        var numRus = new RegExp("[0-9]");
        var cutString = restDays.value;
        var cutStringLen = restDays.value.length;

        if (numRus.test(cutString.substr(-1))) {
            // console.log("match");
        } else {
            cutString = cutString.substring(0, cutStringLen - 1);
            restDays.value = cutString;
        }
    });

    place.addEventListener("change", function() {
        if (persons.value == "" || restDays.value == "" || restDays.value == 0 || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            let a = (daysSum + personSum) * 4000 * this.options[this.selectedIndex].value; // Промежуточная переменная для хранения суммы
            totalValue.innerHTML = a;
        }
    });




});