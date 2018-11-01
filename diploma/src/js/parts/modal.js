export default function modal() {
   let btnOrder = document.querySelectorAll(".button-order"),
       popDesign = document.querySelector(".popup-design"),
       btnClose = document.querySelectorAll(".popup-close"),
       popContent = document.querySelectorAll(".popup-content"),
       btnConsultation = document.querySelectorAll(".button-consultation"),
       popConsultation = document.querySelector(".popup-consultation"),
       btnGift = document.querySelector(".fixed-gift"),
       popGift = document.querySelector(".popup-gift");

   for (let a = 0; a < btnOrder.length; a++) {
       btnOrder[a].addEventListener("click", () => {
           popDesign.style.display = "block";
       });    
   }

   for (let b = 0; b < btnClose.length; b++) {
       btnClose[b].addEventListener("click", () => {
           popDesign.style.display = "none";
           popConsultation.style.display = "none";
           popGift.style.display = "none";

       });
   }

   popDesign.addEventListener("click", (event) => {
       
       if (event.target.classList.contains("popup-design")) {
           popDesign.style.display = "none";
           //Закрытие "догоняющего" модального окна "Остались вопросы?"
           popConsultation.style.display = "none";            
       } else {
           
       }
       
   });

   for (let c = 0; c < btnConsultation.length; c++) {
       btnConsultation[c].addEventListener("click", () => {
           popConsultation.style.display = "block";
       });
   }   

   btnGift.addEventListener("click", () => {
       popGift.style.display = "block";
   });

   popGift.addEventListener("click", (event) => {
       console.log(event.target);
       if (event.target.classList.contains("popup-gift")) {
           popGift.style.display = "none";
       } else {

       }
   });
}