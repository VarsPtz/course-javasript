export default function modal() {
   let body = document.querySelector("body"),
       btnDesign = document.querySelectorAll(".button-design"),
       popDesign = document.querySelector(".popup-design"),
       btnClose = document.querySelectorAll(".popup-close"),
       popContent = document.querySelectorAll(".popup-content"),
       btnConsultation = document.querySelectorAll(".button-consultation"),
       popConsultation = document.querySelector(".popup-consultation"),
       btnGift = document.querySelector(".fixed-gift"),
       popGift = document.querySelector(".popup-gift"),
       statusBlock = document.querySelectorAll(".ajax-block"),
       formTag = document.querySelectorAll("form");

   for (let a = 0; a < btnDesign.length; a++) {
       btnDesign[a].addEventListener("click", () => {
           statusBlock[1].innerHTML = "";
           for (let y = 0; y < document.querySelector.length; y++) {
               document.querySelectorAll("input")[4].innerHTML = "";
           } //Очищаем поле с телефоном
           for (let i = 0; i < formTag.length; i++) {
               formTag[i].style.display = "block";
           }
           popDesign.style.display = "block";
           document.body.style.overflow = "hidden";
       });    
   }

   for (let b = 0; b < btnClose.length; b++) {
       btnClose[b].addEventListener("click", () => {
           popDesign.style.display = "none";
           popConsultation.style.display = "none";
           popGift.style.display = "none";
           document.body.style.overflow = "";
       });
   }

   popDesign.addEventListener("click", (event) => {
       if (event.target.classList.contains("popup-design")) {
            //Закрытие "догоняющего" модального окна "Остались вопросы?"
           popDesign.style.display = "none";                 
       } else {
           
       }       
   });

   popConsultation.addEventListener("click", (event) => {
       if (event.target.classList.contains("popup-consultation")) {
           //Закрытие "догоняющего" модального окна "Остались вопросы?"
           popConsultation.style.display = "none";
       } else {

       }
   });

   for (let c = 0; c < btnConsultation.length; c++) {
       btnConsultation[c].addEventListener("click", () => {
           statusBlock[0].innerHTML = "";
           for (let i = 0; i < formTag.length; i++) {
               formTag[i].style.display = "block";
           }
           popConsultation.style.display = "block";
           document.body.style.overflow = "hidden";
       });
   }   

   btnGift.addEventListener("click", () => {
       popGift.style.display = "block";
       btnGift.style.display = "none";
       document.body.style.overflow = "hidden";
   });

   popGift.addEventListener("click", (event) => {
    //    console.log(event.target);
       if (event.target.classList.contains("popup-gift")) {
           popGift.style.display = "none";
       } else {

       }
   });

   //Проверка Имени на ввод русских символов
   function checkName(e) {
       var numRus = new RegExp("[а-яА-ЯёЁ]");
       var cutString = e.value;
       var cutStringLen = e.value.length;

       if (numRus.test(cutString.substr(-1))) {
           // console.log("match");
       } else {
           cutString = cutString.substring(0, cutStringLen - 1);
           e.value = cutString;
       }    
   }

   //Проверка комментария на ввод русских символов
   function checkMessage(e) {
       let numRus = new RegExp("[\.\,\!\? ёЁа-яА-Я0-9]");
       let cutString = e.value;
       let cutStringLen = e.value.length;

       if (numRus.test(cutString.substr(-1))) {
           // console.log("match");
       } else {
           cutString = cutString.substring(0, cutStringLen - 1);
           e.value = cutString;
       }
   }
   
   body.addEventListener('input', function (e) {
       var target = e.target;
    //    console.log(target);
       if (target.name == "name") {
           checkName(target);
       } else if (target.name == "message") {
           checkMessage(target);
       }
   });

   //Маска для номера телефона
    
    body.addEventListener("keydown", function (event) {
        var target = event.target;
        // console.log(target);
        if (target.name == "phone") {
            if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
                event.preventDefault();
            }
            var mask = '+7 (111) 111-11-11'; // Задаем маску

            if (/[0-9\+\ \-\(\)]/.test(event.key)) {
                // Здесь начинаем сравнивать event.value и mask
                var currentString = target.value;
                var currentLength = currentString.length;
                if (/[0-9]/.test(event.key)) {
                    if (mask[currentLength] == '1') {
                        target.value = currentString + event.key;
                    } else {
                        for (var i = currentLength; i < mask.length; i++) {
                            if (mask[i] == '1') {
                                target.value = currentString + event.key;
                                break;
                            }
                            currentString += mask[i];
                        }
                    }
                }
            }
        }        
    });   
}