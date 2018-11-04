export default function accordion() {
    var accordion = document.querySelector('#accordion'),
        accordionHeader = document.querySelectorAll('.accordion-heading'),
        accordionBlock = document.querySelectorAll('.accordion-block');

    //Вызываем функцию без параметра (undefined)
    //Все заголовки не получат стили, все блоки будут скрыты.
    getActive();
    
    //Создаём видимость "активного" первого заголовка
    //Нельзя предопределить класс active у заголовка,
    //т.к. мы ссылаемся на выбранный элемент в событии click
    accordionBlock[0].style.display = "block";
    accordionHeader[0].style.color = "#CC6BCB";

    //Удаляем класс active у всех заголовках
    function removeActive() {
        for (var i = 0; i < accordionBlock.length; i++) {
            accordionHeader[i].classList.remove('active');
        }
    }

    //Стилизуем активный заголовок и блок. Скрываем остальные блоки.
    function getActive(e) {
        for (var i = 0; i < accordionHeader.length; i++) {
            if (accordionHeader[i].classList.contains('active')) {
                accordionHeader[i].style.color = "#CC6BCB";
                e.parentElement.nextElementSibling.style.display = "block";
            } else {
                accordionHeader[i].style.color = "";
                accordionBlock[i].style.display = "none"; 
            }
        }
    }

    accordion.addEventListener("click", function (event) {
        var target = event.target;
        removeActive();
        if (target.parentElement.classList.contains("accordion-heading")) {
            target.parentElement.classList.add("active");
            getActive(target);
        }
    });
}