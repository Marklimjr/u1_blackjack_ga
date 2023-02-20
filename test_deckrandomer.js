let cards = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
];

let userHand = [2];
let dealerHand = [];

function selectRandomCard() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function suiteAndNumber() {
    cardSuite = getRandomInt(0, 3);
    cardType = getRandomInt(0, 12);
    cards[cardSuite].splice(cardType, 1);

    // if (cardSuite === 0) {
    //   currentSuite = "diamonds";
    // } else if (cardSuite === 1) {
    //   currentSuite = "hearts";
    // } else if (cardSuite === 2) {
    //   currentSuite = "clubs";
    // } else {
    //   currentSuite = "spades";
    // }
    // randomcard = cards[cardSuite][cardType];

    //console.log(randomcard + "  " + currentSuite);
    return { cardSuite, cardType };
  }
  suiteAndNumber();
  return;
}

function dealUser() {
  selectRandomCard();
  currentCardType = cardType - 1;
  userHand.push(currentCardType);
  console.log("Current card value" + currentCardType);
  console.log("This is card type " + cardType);
  console.log("This is card Suite " + cardSuite);
  return;
}

function dealDealer() {
  selectRandomCard();
  dealerHand.push(cardType);
  console.log(dealerHand);
  console.log("This is card type " + cardType);
  console.log("This is card Suite " + cardSuite);
  return;
}

function tabulateUserValue() {
  userCurrentScore = userHand[0] + userHand[1];
  userHand.splice(0, 2, userCurrentScore);

  console.log("User Current Score  " + userCurrentScore);
  console.log("user hand array " + userHand);
}

dealUser();
tabulateUserValue();

// dealDealer();
