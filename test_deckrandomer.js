let cards = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
];

function selectRandomCard() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let cardSuite = getRandomInt(1, 4);
  let cardType = getRandomInt(1, 13);

  if (cardSuite === 0) {
    currentSuite = "diamonds";
  } else if (cardSuite === 1) {
    currentSuite = "hearts";
  } else if (cardSuite === 2) {
    currentSuite = "clubs";
  } else {
    currentSuite = "spades";
  }

  console.log(cards[cardSuite][cardType] + "  " + currentSuite);
  console.log("=============");
  cards[cardSuite].splice(cardType, 1);
  console.log(cards);
}

selectRandomCard();
