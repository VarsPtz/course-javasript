export default function portfolioTabs() {
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