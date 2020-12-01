const accord = document.getElementsByClassName("wrapper-js__question");
const mode = document.getElementById("on-off");

for (let i = 0; i < accord.length; i++) {
   accord[i].addEventListener("click", function () {
      // включен режим мульти
      if (mode.checked) {
         this.parentNode.classList.toggle("wrapper-js__answer-item--active");
      } else {
         // режим-моно вопроса
         for (i = 0; i < accord.length; i++) {
            for (i = 0; i < accord.length; i++) {
               if (accord[i] !== this) {
                  accord[i].classList.remove("active");
                  accord[i].parentNode.classList.remove("wrapper-js__answer-item--active");
               } else {
                  this.classList.toggle("active");
                  this.parentNode.classList.toggle("wrapper-js__answer-item--active");
               }
            }
         }
      }
   })
}
