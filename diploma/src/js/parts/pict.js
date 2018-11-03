export default function pict() {
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