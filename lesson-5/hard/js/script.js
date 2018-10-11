//Первое и второе задание реализовано в этой функции
function timeFormater() {
  var Data = new Date(),
      Hour = Data.getHours(),
      Minutes = Data.getMinutes(),
      Seconds = Data.getSeconds(),
      Year = Data.getFullYear(),
      Month = Data.getMonth(),
      Date1 = Data.getDate();
  if (Date1 < 10) {
      Date1 = "0" + Day
  }
  if (Month < 10) {
      Month = "0" + Month
  }
  if (Seconds < 10) {
      Seconds = "0" + Seconds
  }

 timeOutput = document.querySelector(".date");
 document.querySelector(".date").innerHTML = "'" + Hour + ":" + Minutes + ":" + Seconds + "   " + Date1 + "." + Month + "." + Year + "'";
}

timeFormater();

function russianDaysOfWeek() {
    var Data = new Date();
    Day = Data.getDay();
    switch (Day) {
        case 1:
            document.querySelector(".day").innerHTML = "Понедельник";
            break;
        case 2:
            document.querySelector(".day").innerHTML = "Вторник";
        break;
        case 3:
            document.querySelector(".day").innerHTML = "Среда";
        break;
        case 4:
            document.querySelector(".day").innerHTML = "Четверг";
        break;
        case 5:
            document.querySelector(".day").innerHTML = "Пятница";
        break;
        case 6:
            document.querySelector(".day").innerHTML = "Суббота";
        break;
        case 0:
            document.querySelector(".day").innerHTML = "Воскресенье";
        break;
        default:
            break;
    }
}

russianDaysOfWeek();

//исползуем абсолют. и округ. до целого, 86400000 мил. в одном дне

function getResult() {
    var date1 = new Date(document.querySelector(".first-date").value);
    var date2 = new Date(document.querySelector(".second-date").value);
    console.log(date1, date2);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (86400000));
    console.log(diffDays);
    document.querySelector(".result-date").value = diffDays;
}
// getResult();

document.querySelector(".users-button").onclick = function () {
    getResult();
}