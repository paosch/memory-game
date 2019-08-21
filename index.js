// console.log("Chris eats too much")
// <div class="flip-card">
//   <div class="flip-card-inner">
//     <div class="flip-card-front">
//       <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="card-img">
//     </div>
//     <div class="flip-card-back">
//       <h1>John Doe</h1>
//       <p>Architect & Engineer</p>
//       <p>We love that guy</p>
//     </div>
//   </div>
// </div>



const flipCard = document.createElement("div");
flipCard.classList.add("flip-card");

const flipCardInner = document.createElement("div");
flipCardInner.classList.add("flip-card-inner");

flipCard.appendChild(flipCardInner);
document.querySelector(".container").appendChild(flipCard);

const flipCardFront = document.createElement("div");
flipCardFront.classList.add("flip-card-front");

const image1 = document.createElement("img");
image1.classList.add("card-img");
image1.setAttribute("src", "https://www.w3schools.com/howto/img_avatar.png");

flipCardFront.appendChild(image1);

const flipCardBack = document.createElement("div");
flipCardBack.classList.add("flip-card-back");

flipCardInner.appendChild(flipCardFront);
flipCardInner.appendChild(flipCardBack);

const h1 = document.createElement("h1");
h1.innerText = "John Doe";
flipCardBack.appendChild(h1);

const p1 = document.createElement("p")
p1.innerText = "Architect & Engineer";
flipCardBack.appendChild(p1);

const p2 = document.createElement("p")
p2.innerText = "We love that guy"
flipCardBack.appendChild(p2);


const arr = [];

for (let i = 0; i <=15; i++){
    arr.push(flipCard)
}

arr.forEach(function (flipCard) {
  console.log(flipCard)
})

console.log(arr)
