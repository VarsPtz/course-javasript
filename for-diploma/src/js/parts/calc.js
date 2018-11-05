export default function calc() {
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        calcPrice = document.querySelector('.calc-price'),
        calc = document.querySelector('.calc'),
        sizeCost = 0,
        materialCost = 0,
        optionsCost = 0,
        tempCost = 0;
    
    
    // Проверка на порядок ввода
    function checkInput(e) {
        
        calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";        
        if (size.value != "Выберите размер картины") {
            if (size.value == "40x50") {
                sizeCost = 500;
            } else if (size.value == "50x70") {
                    sizeCost = 1000;
            } else if (size.value == "70x70") {
                    sizeCost = 1500;
            } else if (size.value == "70x100") {
                sizeCost = 2000;
            }
        } else {
            sizeCost = 0;
        }
        
        if (material.value != "Выберите материал картины") {
            if (material.value == "Холст из волокна") {
                materialCost = 500;
            } else if (material.value == "Льняной холст") {
                materialCost = 1000;
            } else if (material.value == "Холст из натурального хлопка") {
                materialCost = 1500;
            }
        } else {
            materialCost = 0;
        }

        if (options.value != "Дополнительные услуги") {
            if (options.value == "Покрытие арт-гелем") {
                optionsCost = 500;
            } else if (options.value == "Экспресс-изготовление") {
                optionsCost = 1000;
            } else if (options.value == "Доставка готовых работ") {
                optionsCost = 1500;
            }
        } else {
            optionsCost = 0;
        }

        if (sizeCost != 0 && materialCost != 0) {
            tempCost = sizeCost + materialCost + optionsCost;
            calcPrice.textContent = tempCost;
        }

        if (sizeCost != 0 && materialCost != 0 && promocode.value.match(/IWANTPOPART/ig)) {
            tempCost = tempCost - tempCost * 0.3;
            calcPrice.textContent = tempCost;
        }
    }

    // Отслеживаем событие изменение значения поля ввода
    calc.addEventListener('change', function (e) {
        var target = e.target;
        checkInput(target);
    });
}
