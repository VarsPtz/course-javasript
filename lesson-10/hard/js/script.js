"use strict";

window.addEventListener("DOMContentLoaded", function() {
    function setCursorPosition(pos, elem) {
        // console.log(elem);// Элемент в фокусе
        // console.log(pos);// Позиция курсора
        //setSelectionRange(start, end); Устанавливает начальное и конечное положение выделения текста
        //createTextRange() метод создания объекта TextRange(текст от 0 и более символов)
        
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }

    function mask(event) {
    let maskPhone = "+7 (___) ___ ____",
       i = 0,
       def = maskPhone.replace(/\D/g, ""),  //замена всех символов No digit
       val = this.value.replace(/\D/g, ""); //замена всех символов No digit
       // console.log(this.value);
       if (def.length >= val.length) {
          val = def;
       }

       this.value = maskPhone.replace(/./g, function (a) {
           return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
       });
       if (event.type == "blur") {
           if (this.value.length == 2) {
               this.value = "";
           }
       } else {
           setCursorPosition(this.value.length, this);
       }
    };

    let input = document.querySelector("#phone");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);

});
