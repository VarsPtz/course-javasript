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
            statusBlock[0].innerHTML = "";    
            statusBlock[0].style.display = "block";
            statusMessage.innerHTML = "Загрузка...";
            statusBlock[0].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-design")) {
            statusBlock[1].innerHTML = "";
            statusBlock[1].style.display = "block";
            statusMessage.innerHTML = "Загрузка...";
            statusBlock[1].appendChild(statusMessage);
        }
    }

    function success(incomingObject) {
        hideElements(incomingObject);
        if (incomingObject.classList.contains("form-consultation")) {
            statusBlock[0].innerHTML = "";
            statusImg.src = "img/ajax/checked.svg";
            statusBlock[0].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[0].style.display = "block";
            statusMessage.innerHTML = "Спасибо! Скоро мы с вами свяжемся.";
            statusBlock[0].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-design")) {
            statusBlock[1].innerHTML = "";
            statusImg.src = "img/ajax/checked.svg";
            statusBlock[1].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[1].style.display = "block";
            statusMessage.innerHTML = "Спасибо! Скоро мы с вами свяжемся.";
            statusBlock[1].appendChild(statusMessage);
        }
    }

    function failure(incomingObject) {
        hideElements(incomingObject);
        if (incomingObject.classList.contains("form-consultation")) {
            statusBlock[0].innerHTML = "";
            statusImg.src = "img/ajax/failure.svg";
            statusBlock[0].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[0].style.display = "block";
            statusMessage.innerHTML = "Извините, возникли технические трудности.";
            statusBlock[0].appendChild(statusMessage);
        } else if (incomingObject.classList.contains("form-design")) {
            statusBlock[1].innerHTML = "";
            statusImg.src = "img/ajax/failure.svg";
            statusBlock[1].appendChild(statusImg);
            statusImg.style.width = "150px";
            statusBlock[1].style.display = "block";
            statusMessage.innerHTML = "Извините, возникли технические трудности.";
            statusBlock[1].appendChild(statusMessage);
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
    
