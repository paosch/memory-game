const cards_total = 16;
const randomized_colors = [];
const colors = ["dodgerblue", "red", "green", "pink", "orange", "yellow", "black", "navy"];

for (let i = 0; i < cards_total / 2; i++) {
  randomized_colors.push(colors[i]);
  randomized_colors.push(colors[i]);
}

function shuffle_array(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle_array(randomized_colors);

let prevClickedCard;
let flipped_and_matched = 0;


function flipCardToBack(event) {

  const currentClickedCard = event.currentTarget;
  currentClickedCard.classList.add("flipped");
  if (prevClickedCard) {
    const colorsMatched = prevClickedCard.getAttribute("data-color") === currentClickedCard.getAttribute("data-color");
    if (!colorsMatched) {
      setTimeout(function() {
        currentClickedCard.classList.remove("flipped");
        prevClickedCard.classList.remove("flipped");
      }, 800);
    } else {
      flipped_and_matched += 1;
    }

    setTimeout(function() {
      prevClickedCard = null;
    }, 800);

  } else {
    prevClickedCard = currentClickedCard;
  }

  if (flipped_and_matched === 8) {
    setTimeout(function() {
      let all_cards = document.querySelectorAll(".flipped");
      all_cards.forEach(thecard => thecard.classList.remove("flipped"));
      location.reload();
    }, 800);
  }
}

randomized_colors.forEach(function(color) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");
  flipCard.setAttribute("data-color", color)
  flipCard.addEventListener("click", flipCardToBack);

  const flipCardInner = document.createElement("div");
  flipCardInner.classList.add("flip-card-inner");

  flipCard.appendChild(flipCardInner);
  document.querySelector(".container").appendChild(flipCard);

  const flipCardFront = document.createElement("div");
  flipCardFront.classList.add("flip-card-front");

  const h1 = document.createElement("h1");
  h1.innerText = "Card Game";
  h1.classList.add("flip-card-front-h1")
  flipCardFront.appendChild(h1);

  const flipCardBack = document.createElement("div");
  flipCardBack.classList.add("flip-card-back", `bg-${color}`);

  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
});
