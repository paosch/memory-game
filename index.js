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
const flip_card = document.createElement("div");
flip_card.classList.add("flip-card");

const flip_card_inner = document.createElement("div");
flip_card_inner.classList.add("flip-card-inner");

flip_card.appendChild(flip_card_inner);
document.querySelector(".container").appendChild(flip_card);
