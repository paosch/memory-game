let prevClickedCard, flipped_and_matched, total_pairs, cards_total;
const colors = ["dodgerblue", "red", "green", "pink", "orange", "yellow", "black", "navy", "brown", "purple"];
const flipcardTime = 800;
const container = document.querySelector(".container");

init();

function init() {
  container.innerHTML = "";
  const gameName = document.createElement("h1");
  gameName.innerText = "Memory cards game";
  container.appendChild(gameName);
  const para = document.createElement("p");
  para.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  container.appendChild(para);

  var array = ["Please choose an option", 8, 12, 16, 20];
  const selectList = document.createElement("select");
  selectList.classList.add("select-css");
  selectList.addEventListener("change", grabValue);
  container.appendChild(selectList);

  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
  }
}

function grabValue(e) {
  cards_total = e.target.value; 
  startGame();
}

function shuffle_array(array) {
  array.sort(() => Math.random() - 0.5);
}

function flipCardToBack(event) {
  const currentClickedCard = event.currentTarget;
  currentClickedCard.classList.add("flipped");

  if (prevClickedCard) {
    const colorsMatched =
      prevClickedCard.getAttribute("data-color") ===
      currentClickedCard.getAttribute("data-color");

    if (!colorsMatched) {
      setTimeout(() => {
        currentClickedCard.classList.remove("flipped");
        prevClickedCard.classList.remove("flipped");
      }, flipcardTime);
    } else {
      flipped_and_matched ++;
    }

    setTimeout(() => (prevClickedCard = null), flipcardTime);
  } else {
    prevClickedCard = currentClickedCard;
  }

  if (flipped_and_matched === total_pairs) {
    setTimeout(() => {
      let all_cards = document.querySelectorAll(".flipped");
      all_cards.forEach(thecard => thecard.classList.remove("flipped"));

      setTimeout(() => {
        startGame();
      }, flipcardTime);

    }, flipcardTime);
  }
}

function startGame() {
  const randomized_colors = [];
  total_pairs = cards_total / 2;

  for (let i = 0; i < total_pairs; i++) {
    randomized_colors.push(colors[i]);
    randomized_colors.push(colors[i]);
  }
  flipped_and_matched = 0;

  container.innerHTML = "";

  const arrowButton = document.createElement("div");
  arrowButton.innerText = "⬅️";
  arrowButton.classList.add("arrow");
  container.appendChild(arrowButton);
  arrowButton.addEventListener("click", init);

  shuffle_array(randomized_colors);
  console.log(randomized_colors);
  randomized_colors.forEach(function(color) {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");
    flipCard.setAttribute("data-color", color)
    flipCard.addEventListener("click", flipCardToBack);

    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");

    flipCard.appendChild(flipCardInner);
    container.appendChild(flipCard);

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

  const cardfrontColor = document.querySelectorAll(".flip-card-front");
  let randColor = randomized_colors[Math.floor(Math.random() * randomized_colors.length)];

  cardfrontColor.forEach(function(cardfront) {
    cardfront.style.backgroundColor = randColor;
  });

};
