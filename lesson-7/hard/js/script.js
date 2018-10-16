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


window.addEventListener("DOMContentLoaded", function () {
    var fps = 15;

    function step() {
        setTimeout(function () {
            requestAnimationFrame(step);
            function move(t, l) {
                el.style.top = t + "px";
                el.style.left = l + "px";
                
            }// Drawing code goes here
        }, 1000 / fps);
    }
           
});

let box = document.querySelector(".box"),
    but = document.querySelector(".move"),
    boxSquare = document.querySelector(".box-square"),
    widthBox = Number((getComputedStyle(box).width).replace(/px/, "")),
    widthBoxSquare = Number((getComputedStyle(boxSquare).width).replace(/px/, "")),
    longWayX = widthBox - widthBoxSquare,
    heightBox = Number((getComputedStyle(box).height).replace(/px/, "")),
    heightBoxSquare = Number((getComputedStyle(boxSquare).height).replace(/px/, "")),
    longWayY = heightBox - heightBoxSquare,
    posX = 0;
    posY = 0;

function moveIt() {
    
    
    let id = setInterval(frame, 10);
    function frame() {
        if (posX < 150 && posX >= 0 && posY == 0) {
            posX++;
            boxSquare.style.left = posX + "px";
        } else if (posX == 150 && posY >= 0 && posY < 150) {
            posY++;
            boxSquare.style.top = posY + "px";
        } else if (posX > 0 && posX <= 150 && posY == 150) {
            posX--;
            boxSquare.style.left = posX + "px";
        } else if (posX == 0 && posY <= 150 && posY > 0) {
            posY--;
            boxSquare.style.top = posY + "px";
        }
    }
}

// let id = setInterval(frame, 10);

but.addEventListener("click", moveIt);

// setInterval(moveIt, 1000);
// // moveIt();