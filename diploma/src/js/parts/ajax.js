export default function ajax() {
    // Form
    var form = document.querySelectorAll(".form"),
        body = document.querySelector("body"),
        statusImg = document.createElement('img'),
        statusBlock = document.querySelector(".ajax-block"),
        statusMessage = document.createElement("p"),
        statusMessageLoading = document.createTextNode("Загрузка..."),
        statusMessageSuccess = document.createTextNode("Спасибо! Скоро мы с вами свяжемся"),
        statusMessageFailure = document.createTextNode("Извините, возникли технические трудности");
    
    statusMessage.classList.add("ajax-response");
    
    function hideElements(form) {
        for (var i = 0; i < form.children.length; i++) {
            if (form.children[i].tagName == "H4") {
                form.children[i].style.display = "none";
            } else if (form.children[i].tagName == "IMG" || form.children[i].tagName == "p") {
                form.children[i].remove();
            } else {
                form.children[i].style.display = "none";
            }
        }
    }

    function loading(incomingObject) {
        // hideElements(incomingObject);
        statusMessage.appendChild(statusMessageLoading);
        statusBlock.appendChild(statusMessage);
        statusImg.src = "/src/img/ajax/loading.svg";
    }

    function success(incomingObject) {
        hideElements(incomingObject);
        statusMessage.appendChild(statusMessageSuccess);
        incomingObject.appendChild(statusMessage);
        statusImg.src = "/src/img/ajax/checked.svg";
    }

    function failure(incomingObject) {
        hideElements(incomingObject);
        statusMessage.appendChild(statusMessageFailure);
        statusBlock.appendChild(statusMessage);
        statusImg.src = "/src/img/ajax/failure.svg";
        statusBlock.appendChild(statusImg);
        statusImg.style.width = "150px";
        statusBlock.style.display = "block";       
    }

    function ajaxSend(e) {
        var input = e.getElementsByTagName("input");
        // e.appendChild(statusImg);

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

        e.querySelector("textarea").value = "";
    }

    body.addEventListener("submit", function (e) {
        var target = e.target;
        e.preventDefault();
        ajaxSend(target);
    });
    }
    
