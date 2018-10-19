

window.addEventListener("DOMContentLoaded", function () {
    
    "use strict";
    let tab = document.querySelectorAll(".info-header-tab"), //все пункты меню
        info = document.querySelector(".info-header"), //область включающая все пункты меню
        tabContent = document.querySelectorAll(".info-tabcontent"); //содержимое табов

    //скрываем содержимое всех табов начиная с элемента a
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }    

    hideTabContent(1);//скрываем все табы кроме нулевого

    //отобразить таб b
    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.hide("show");
        }        
    }

    //отслеживаем нажатие в области с меню
    info.addEventListener("click", function(event) {
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
    let deadline = "2018-10-18";
    
    function getTimeRemaining(endtime) {
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
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
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
        }    
    }

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

    menu.addEventListener("click", function (event) {
        event.preventDefault();
        animate(function (timePassed) {
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

});