export default function anim() {
    // Скрипт плавной прокрутки

    function animate(draw, duration) {
        let start = performance.now();
        requestAnimationFrame(
            function animate(time) {
                let timePassed = time - start;
                if (timePassed > duration) {
                    timePassed = duration;
                }

                draw(timePassed);

                if (timePassed < duration) {
                    requestAnimationFrame(animate);
                }
            });
    }

    let menu = document.getElementsByTagName("nav")[0];

    menu.addEventListener("click", (event) => {
        event.preventDefault();
        animate((timePassed) => {
            let target = event.target;
            let section = document.getElementById(target.getAttribute("href").slice(1));
            window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
        }, 1500);
    });
}

// module.exports = anim;
// export default anim;

