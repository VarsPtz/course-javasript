
window.addEventListener("DOMContentLoaded", function () {
    function timeFormater() {
        var Data = new Date(),
            Hour = Data.getHours(),
            Minutes = Data.getMinutes(),
            Seconds = Data.getSeconds(),
            Year = Data.getFullYear(),
            Month = Data.getMonth(),
            Date1 = Data.getDate();
        if (Date1 < 10) {
            Date1 = "0" + Day;
        }
        if (Month < 10) {
            Month = "0" + Month;
        }
        if (Minutes < 10) {
            Minutes = "0" + Minutes;
        }
        if (Seconds < 10) {
            Seconds = "0" + Seconds;
        }

        timeOutput = document.querySelector(".date");
        document.querySelector(".date").innerHTML = Hour + ":" + Minutes + ":" + Seconds;
        setTimeout(timeFormater, 1000);
    }

    timeFormater();
        
});
