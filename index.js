let colors = ["dodgerblue", "red", "green", "pink", "orange", "yellow", "black", "navy"]
colors.map(color => colors.push(color))

colors.forEach(function(color){
  
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");

    flipCard.appendChild(flipCardInner);
    document.querySelector(".container").appendChild(flipCard);

    const flipCardFront = document.createElement("div");
    flipCardFront.classList.add("flip-card-front");

    const h1 = document.createElement("h1");
    h1.innerText = "Card Game";
    flipCardFront.appendChild(h1);

    const flipCardBack = document.createElement("div");
    flipCardBack.classList.add("flip-card-back", `bg-${color}`);

    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    
});
