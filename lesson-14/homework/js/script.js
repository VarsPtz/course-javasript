$(document).ready(function() {
    "use strict";
    console.log("ready for work"); // Выполнится после загрузки страницы
    $(".main_btn, .main_btna, a[href='#sheldure']").on("click", function () {
        $(".overlay").animate(
            {
                opacity: "toggle",
            }, 2000
        );
        $(".overlay").css("display", "block");
        $(".modal").css("display", "block");
        $(".modal").animate(
            {
                top: "100px",
            }, 2000
        );
    });
    $("button.close").on("click", function() {
        $(".overlay").animate(
            { 
                opacity: "toggle" 
            }, 2000
        );
        $(".modal").animate(
            {
                top: "-500px",
            }, 2000
        );
        setTimeout(() => {
            $(".modal").css("display", "none");
        }, 2010);
    });

});