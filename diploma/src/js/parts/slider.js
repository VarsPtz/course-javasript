export default function slider() {
    let imgPict = document.querySelectorAll(".main-slider-item");
    imgPict[1].style.display = "none";
    setInterval(() => {
     if (imgPict[0].style.display == "none") {
      imgPict[0].style.display = "block";
      imgPict[1].style.display = "none";
     } else {
      imgPict[0].style.display = "none";
      imgPict[1].style.display = "block";
     }
    }, 3000);
}