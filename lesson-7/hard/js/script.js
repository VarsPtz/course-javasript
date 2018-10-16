(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());


// window.addEventListener("DOMContentLoaded", function () {
//     var fps = 15;

//     function moveIt() {
//         setInterval(function () {
//             requestAnimationFrame(step);
//             function move(t, l) {
//                 el.style.top = t + "px";
//                 el.style.left = l + "px";
                
//             }// Drawing code goes here
//         }, 1000 / fps);
//     }
           
// });

let box = document.querySelector(".box"),
    but = document.querySelector(".move"),
    boxSquare = document.querySelector(".box-square"),
    widthBox = Number((getComputedStyle(box).width).replace(/px/, "")),
    widthBoxSquare = Number((getComputedStyle(boxSquare).width).replace(/px/, "")),
    longWayX = widthBox - widthBoxSquare,
    heightBox = Number((getComputedStyle(box).height).replace(/px/, "")),
    heightBoxSquare = Number((getComputedStyle(boxSquare).height).replace(/px/, "")),
    longWayY = heightBox - heightBoxSquare,
    posX = 0,
    posY = 0,
    fps = 15;

function moveIt() {
        if (box.classList.contains("running-box")) {
            box.classList.remove("running-box");
        } else {
            box.classList.add("running-box");
        }

        // let id = setInterval(frame, 10);
       

        requestAnimationFrame(function frame() {
            if (box.classList.contains("running-box") == true) {
                requestAnimationFrame(frame);
                if (posX < longWayX && posX >= 0 && posY == 0) {
                    posX++;
                    boxSquare.style.left = posX + "px";
                } else if (posX == longWayX && posY >= 0 && posY < longWayY) {
                    posY++;
                    boxSquare.style.top = posY + "px";
                } else if (posX > 0 && posX <= longWayX && posY == longWayY) {
                    posX--;
                    boxSquare.style.left = posX + "px";
                } else if (posX == 0 && posY <= longWayY && posY > 0) {
                    posY--;
                    boxSquare.style.top = posY + "px";
                }
            } else {
                cancelAnimationFrame(frame);
            }
        });
}    


//Вариант без использования requestAnimationFrame

// function moveIt() {
//     if (box.classList.contains("running-box")) {
//         box.classList.remove("running-box");
//     } else {
//         box.classList.add("running-box");
//     }

//     let id = setInterval(frame, 10);

//     function frame() {
//         if (box.classList.contains("running-box") !== true) {
//             clearInterval(id);
//         }
//         if (posX < longWayX && posX >= 0 && posY == 0) {
//             posX++;
//             boxSquare.style.left = posX + "px";
//         } else if (posX == longWayX && posY >= 0 && posY < longWayY) {
//             posY++;
//             boxSquare.style.top = posY + "px";
//         } else if (posX > 0 && posX <= longWayX && posY == longWayY) {
//             posX--;
//             boxSquare.style.left = posX + "px";
//         } else if (posX == 0 && posY <= longWayY && posY > 0) {
//             posY--;
//             boxSquare.style.top = posY + "px";
//         }
//     }
// }

but.addEventListener("click", moveIt);