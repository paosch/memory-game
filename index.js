let prevClickedCard, flipped_and_matched;
const cards_total = 16;
const total_pairs = cards_total / 2;
const randomized_colors = [];
const colors = ["dodgerblue", "red", "green", "pink", "orange", "yellow", "black", "navy"];

for (let i = 0; i < total_pairs; i++) {
  randomized_colors.push(colors[i]);
  randomized_colors.push(colors[i]);
}

function shuffle_array(array) {
  array.sort(() => Math.random() - 0.5);
}

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
      flipped_and_matched ++;
    }

    setTimeout(function() {
      prevClickedCard = null;
    }, 800);

  } else {
    prevClickedCard = currentClickedCard;
  }

  if (flipped_and_matched === total_pairs) {
    setTimeout(function() {
      let all_cards = document.querySelectorAll(".flipped");
      all_cards.forEach(thecard => thecard.classList.remove("flipped"));
      setTimeout(function() {
        document.querySelector(".container").innerHTML = "";
        startGame();
      }, 800);
    }, 800);
  }
}

function startGame() {
  flipped_and_matched = 0;
  shuffle_array(randomized_colors);

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
};

startGame();
