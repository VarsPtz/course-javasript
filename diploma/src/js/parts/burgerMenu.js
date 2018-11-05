export default function burgerMenu() {
    var body = document.querySelector("body"),
        burgerMenu = document.querySelector(".burger-menu"),
        burgerBtn = document.querySelector(".burger");

    //Отслеживаем изменение ширины экрана.
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            burgerMenu.style.display = "none";
        }
    }, false);
    
    
    //Проверяем "статус" (открыто-закрыто) бургер меню.
    function burgerMenuStatus(target) {
        if (window.innerWidth < 768 && burgerMenu.style.display == "none" && target.parentElement.classList.contains("burger") ||
            window.innerWidth < 768 && burgerMenu.style.display == "none" && target.classList.contains("burger")) {
            burgerMenu.style.display = "block";
        } else if (window.innerWidth < 768 && burgerMenu.style.display == "block" && target.parentElement.classList.contains("burger") ||
            window.innerWidth < 768 && burgerMenu.style.display == "block" && target.classList.contains("burger")) {
            burgerMenu.style.display = "none";
        } else {
            burgerMenu.style.display = "none";
        }
    }

    //Отслеживаем нажатие на бургер-меню и проверяем ширину экрана.
    body.addEventListener("click", function (event) {
        var target = event.target;
        burgerMenuStatus(target);
    });
}
