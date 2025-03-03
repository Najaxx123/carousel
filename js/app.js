// const slide = ["image-tanya.jpg", "image-john.jpg"];
// let numero = 0;

// function ChangeSlide(sens) {
//     numero = numero + sens;
//     if (numero < 0)
//         numero = slide.length - 1;
//     if (numero > slide.length - 1)
//         numero = 0;
//     document.getElementById("slide").src = slide[numero];
// }

// // setInterval("ChangeSlide(1)", 4000);
const $nextSlide = document.querySelector(".next-icon");

const $testimonialText = document.querySelector(".testimonial-text");
const $testimonialauthor = document.querySelector(".testimonial-author")
const $testimonialposition = document.querySelector(".testimonial-position")

const data = [
  {
    author: "Tanya Sinclar",
    text: "blu blu blu",
    position: "UX Engineer"
  },
  {
    author: "Marc Strong",
    text: "La programmation web m’attirait depuis longtemps, mais je n’avais jamais osé me lancer. Ce cours a été une vraie révélation : il m’a donné les compétences et la confiance nécessaires. Aujourd’hui, je développe des sites et applications avec passion.",
    position: "Web Engineer"
  },
  {
    author: "Jennifer Lopez",
    text: "Blo blo blo",
    position: "Boss"
  },
];

$nextSlide.addEventListener("click", function () {
  console.log("C'est clické !");
  $testimonialText.textContent = data[1].text;
  $testimonialauthor.textContent = data[1].author;
  $testimonialposition.textContent = data[1].position;
  document.getElementById("Tanya Sinclar - UX Engineer").src="../images/image-john.jpg";
});
