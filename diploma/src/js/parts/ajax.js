export default function ajax() {
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
            statusBlock[1].innerHTML = "";    
            statusBlock[1].style.display = "block";
            statusMessage.innerHTML = "Загрузка...";
            statusBlock[1].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-design")) {
            statusBlock[2].innerHTML = "";
            statusBlock[2].style.display = "block";
            statusMessage.innerHTML = "Загрузка...";
            statusBlock[2].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-consultation2")) {
            statusBlock[0].innerHTML = "";
            statusMessage.innerHTML = "Загрузка...";
            statusBlock[0].appendChild(statusMessage);
            statusBlock[0].style.display = "block"; 
        }
    }

    function success(incomingObject) {
        // hideElements(incomingObject);
        if (incomingObject.classList.contains("form-consultation")) {
            hideElements(incomingObject);
            statusBlock[1].innerHTML = "";
            statusImg.src = "img/ajax/checked.svg";
            statusBlock[1].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[1].style.display = "block";
            statusMessage.innerHTML = "Спасибо! Скоро мы с вами свяжемся.";
            statusBlock[1].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-design")) {
            hideElements(incomingObject);
            statusBlock[2].innerHTML = "";
            statusImg.src = "img/ajax/checked.svg";
            statusBlock[2].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[2].style.display = "block";
            statusMessage.innerHTML = "Спасибо! Скоро мы с вами свяжемся.";
            statusBlock[2].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-consultation2")) {
            statusBlock[0].classList.remove("ajax-block-hide");
            statusBlock[0].classList.add("ajax-block-unhide");
            statusBlock[0].innerHTML = "";
            statusMessage.innerHTML = "Спасибо! Скоро мы с вами свяжемся.";
            statusBlock[0].appendChild(statusMessage);
            statusBlock[0].style.display = "block";
            statusBlock[0].style.textAlign = "center";
            statusBlock[0].firstElementChild.style.color = "blue";
            statusBlock[0].firstElementChild.style.fontSize = "22px";
            setTimeout(() => {
                statusBlock[0].classList.remove("ajax-block-unhide");
                statusBlock[0].classList.add("ajax-block-hide");
                setTimeout(() => {
                    statusBlock[0].style.display = "none";
                }, 8000);
                // statusBlock[0].style.display = "none";
            }, 5000);
        }    
    }

    function failure(incomingObject) {
        // hideElements(incomingObject);
        if (incomingObject.classList.contains("form-consultation")) {
            hideElements(incomingObject);
            statusBlock[1].innerHTML = "";
            statusImg.src = "img/ajax/failure.svg";
            statusBlock[1].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[1].style.display = "block";
            statusMessage.innerHTML = "Извините, возникли технические трудности.";
            statusBlock[1].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-design")) {
            hideElements(incomingObject);
            statusBlock[2].innerHTML = "";
            statusImg.src = "img/ajax/failure.svg";
            statusBlock[2].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[2].style.display = "block";
            statusMessage.innerHTML = "Извините, возникли технические трудности.";
            statusBlock[2].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-consultation2")) {
            statusBlock[0].innerHTML = "";
            statusMessage.innerHTML = "Извините, возникли технические трудности.";
            statusBlock[0].appendChild(statusMessage);
            statusBlock[0].style.display = "block";
            statusBlock[0].style.textAlign = "center";
            statusBlock[0].firstElementChild.style.color = "blue";
            statusBlock[0].firstElementChild.style.fontSize = "22px";
            setTimeout(() => {
                statusBlock[0].style.display = "none";
            }, 7000);
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
    
