function form() {
    // Form

    let message = {
        loading: "url(../img/ajax-loader.gif)", // Загрузка...
        success: "url(../img/checked.svg)", // Спасибо! Скоро мы с вами свяжемся!
        failure: "url(../img/failure.svg)" // Что-то пошло не так...
    };

    let form = document.querySelector(".main-form"),
        // input = form.getElementsByTagName("input"),
        input = document.getElementsByTagName("input"),
        inputPhone = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div"),
        contactForm = document.querySelector(".form-contact"),
        inputContactForm = contactForm.getElementsByTagName("input"),
        mainModal = document.querySelector(".popup"),
        thanksModal = document.querySelector(".thanks");
    statusMessage.classList.add("status");


    function sendForm(elem) {
        elem.addEventListener("submit", function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {

                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open("POST", "server.php");

                    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    request.send(data);
                });
            } // End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = "";
                }
            }

            postData(formData)
                .then(() => {
                    statusMessage.style.backgroundImage = message.loading;
                })
                .then(() => {
                    statusMessage.style.backgroundImage = message.success;
                })
                .catch(() => statusMessage.style.backgroundImage = message.failure)
                .then(clearInput);
        });
        // sendForm(form);
        // sendForm(contactForm);
    } // End of sendForm
    sendForm(form);
    sendForm(contactForm);


    inputPhone[0].addEventListener("keyup", function () {
        let digitInputPlus = /^(\+|[0-9])/;
        let digitInput = /^[0-9]+$/;
        let cutStringForm = inputPhone[0].value;
        let cutStringLenForm = inputPhone[0].value.length;

        if (cutStringForm.length > 1) {
            if (digitInputPlus.test(cutStringForm) && digitInput.test(cutStringForm.slice(1, cutStringForm.length))) {

            } else {
                cutStringForm = cutStringForm.substring(0, cutStringLenForm - 1);
                inputPhone[0].value = cutStringForm;
            }
        } else if (cutStringForm.length <= 1) {
            if (digitInputPlus.test(cutStringForm)) {

            } else {
                inputPhone[0].value = "";
            }
        }

    });

    inputContactForm[1].addEventListener("keyup", function () {
        let digitInputPlus = /^(\+|[0-9])/;
        let digitInput = /^[0-9]+$/;
        let cutString = inputContactForm[1].value;
        let cutStringLen = inputContactForm[1].value.length;

        if (cutString.length > 1) {
            if (digitInputPlus.test(cutString) && digitInput.test(cutString.slice(1, cutString.length))) {

            } else {
                cutString = cutString.substring(0, cutStringLen - 1);
                inputContactForm[1].value = cutString;
            }
        } else if (cutString.length <= 1) {
            if (digitInputPlus.test(cutString)) {

            } else {
                inputContactForm[1].value = "";
            }
        }
    });

}

module.exports = form;

