function calc() {
        // Calc

        let persons = document.querySelectorAll(".counter-block-input")[0],
            restDays = document.querySelectorAll(".counter-block-input")[1],
            place = document.getElementById("select"),
            totalValue = document.getElementById("total"),
            personSum = 0,
            daysSum = 0,
            total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener("change", function () {
            personSum = +this.value;
            let placeCoefficient = place.options[place.selectedIndex].value;
            total = ((daysSum + personSum) * 4000) * placeCoefficient;

            if (persons.value == "" || persons.value == 0 || restDays.value == "" || restDays.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                // totalValue.innerHTML = total;
                var i = 0;
                let timerForCalc = setInterval(() => {
                    totalValue.innerHTML = i;
                    i = i + 50;
                    if (i > total) {
                        clearInterval(timerForCalc);
                    }
                }, 1);
            }
        });

        restDays.addEventListener("change", function () {
            daysSum = +this.value;
            let placeCoefficient = place.options[place.selectedIndex].value;
            total = (daysSum + personSum) * 4000 * placeCoefficient;

            if (persons.value == "" || restDays.value == "" || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                // totalValue.innerHTML = total;
                var i = 0;
                let timerForCalc = setInterval(() => {
                    totalValue.innerHTML = i;
                    i = i + 50;
                    if (i > total) {
                        clearInterval(timerForCalc);
                    }
                }, 1);
            }
        });

        persons.addEventListener("keyup", function () {
            var numRus = new RegExp("[0-9]");
            var cutString = persons.value;
            var cutStringLen = persons.value.length;

            if (numRus.test(cutString.substr(-1))) {
                // console.log("match");
            } else {
                cutString = cutString.substring(0, cutStringLen - 1);
                persons.value = cutString;
            }
        });

        restDays.addEventListener("keyup", function () {
            var numRus = new RegExp("[0-9]");
            var cutString = restDays.value;
            var cutStringLen = restDays.value.length;

            if (numRus.test(cutString.substr(-1))) {
                // console.log("match");
            } else {
                cutString = cutString.substring(0, cutStringLen - 1);
                restDays.value = cutString;
            }
        });

        place.addEventListener("change", function () {
            if (persons.value == "" || restDays.value == "" || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                let a = (daysSum + personSum) * 4000 * this.options[this.selectedIndex].value; // Промежуточная переменная для хранения суммы
                totalValue.innerHTML = a;
            }
        });
    }

module.exports = calc;


