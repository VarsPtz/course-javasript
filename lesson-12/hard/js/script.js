"use strict";
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

function currencyExchange() {
    
    let inputRub = document.getElementById('rub'),
        inputUsd = document.getElementById('usd');

    inputRub.addEventListener("input", () => {
        function getCurrency() {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('GET', 'js/current.json');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.send();
                
                request.addEventListener('readystatechange', function () {
                    if (request.readyState < 4) {
                        
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve(JSON.parse(request.response));
                    } else {
                        reject(request.statusText);
                    }
                });
                
                console.log("End of GetCurrency");
            });
        } // End currencyExchange
        getCurrency()
         .then(v => {
            inputUsd.value = inputRub.value / v.usd;
         }), e => {
            inputUsd.value = e;
         }
    });
}
currencyExchange();