export default function addBlocks() {
    var stylesBtn = document.querySelector("#btn-styles"),
        hiddenBlocks = document.querySelectorAll(".hidden-lg");

    stylesBtn.addEventListener("click", function () {
        for (var i = 0; i < hiddenBlocks.length; i++) {
            hiddenBlocks[i].className = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1";
            stylesBtn.style.display = "none";
        }
    });
}