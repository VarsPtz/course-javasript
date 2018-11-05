export default function timer() {
    var body = document.querySelector('body'),
        popConsultation = document.querySelector(".popup-consultation"),
        btnGift = document.querySelector(".fixed-gift"),
        popGift = document.querySelector(".popup-gift"),
        scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
        scrolledStatus = false;
        
    
    // Проверка условия, если находимся в конце страницы,
    // и не нажата не одна кнопка, то всплывает модальное окно с подарком.
    function scrollBottom() {
        var scrolled = document.documentElement.scrollTop,
            scrollFull = 400 + scrolled + document.documentElement.clientHeight;

        if (scrollFull >= scrollHeight && !scrolledStatus) {
            popGift.style.display = "block";
            btnGift.style.display = "none";
            document.body.style.overflow = "hidden";
            scrolledStatus = true;
        }
    }

        //Отслеживем нажатие кнопок
    //Если, нажата хотя бы одна кнопка, 
    //то модальное окно с подарком не появится
    body.addEventListener("click", function(event){
        var target = event.target;
        if (event.target.classList.contains("fixed-gift") || event.target.classList.contains("button")) {
            scrolledStatus = true;
        }
    });
    
    // Отслеживаем событие scroll 
    window.addEventListener('scroll', function () {
        // setTimeout(scrollBottom, 2000);
        scrollBottom();
    });

    
    //Модальное окно через 60 секунд
    function setConsultTimer() {
        if (!scrolledStatus) {
            popConsultation.style.display = "block";
            document.body.style.overflow = "hidden";
        }         
    }

    setTimeout(setConsultTimer, 60000);
// https://learn.javascript.ru/metrics-window - размер страницы с учётом прокрутки
}