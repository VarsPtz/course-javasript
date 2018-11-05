export default function feedbackSlider() {
    var slideIndex = 1,
        slides = document.querySelectorAll(".feedback-slider-item"),
        prevSlide = document.querySelector(".main-prev-btn"),
        nextSlide = document.querySelector(".main-next-btn");

    //Скрываем все слайды и отображаем нужный.
    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        //Скрыть все слайды
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        //Отобразить слайд 
        slides[slideIndex - 1].style.display = "block";
    }

    //Стиль анимации для слайдов влево <-
    function slideLeft() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.animationName = "slideInLeft";
        } 
    }
    
    //Стиль анимации для слайдов вправо ->
    function slideRight() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.animationName = "slideInRight";
        }
    }

    // Слайд влево
    prevSlide.addEventListener("click", function () {
        slideIndex = slideIndex - 1;
        showSlides(slideIndex); 
        slideLeft();
        clearInterval(timerSlider); //Cброс автоматического перелистывания слайдов.
    });

    //Слайд вправо
    nextSlide.addEventListener("click", function () {
        slideIndex = slideIndex + 1;
        showSlides(slideIndex);
        slideRight();
        clearInterval(timerSlider); //Cброс автоматического перелистывания слайдов.
    });

    //Автоматическое перелистывание слайдов
    var timerSlider = setInterval(function goRight() {
        slideIndex = slideIndex + 1;
        showSlides(slideIndex);
        slideRight();        
    }, 8000);
}