// // TEST WAGER FUNCTION

// let currentBalance = 0;

// function cashInButton() {
//   let cashInButton = document.getElementById("cashInSubmit");
//   cashInButton.addEventListener("click", cashIn);

//   function cashIn() {
//     let cashIn = document.getElementById("cashIn");
//     let currentBalanceText = document.getElementById("currentBalance");
//     currentBalance = cashIn.value;
//     currentBalanceText.innerText = cashIn.value;

//     console.log(currentBalance);
//   }
// }

// function renderWager() {
//   let currentWagerArray = [];
//   //   let currentWager = 0;
//   for (let i = 1; i <= 4; i++) {
//     let wagerButton = document.createElement("button");
//     wagerButton.setAttribute("id", [i] * 25);
//     wagerButton.innerText = "25" * [i];
//     let buttonClass = document.querySelector(".wager");
//     buttonClass.appendChild(wagerButton);
//   }

//   wagerButtonSelect25 = document.getElementById("25"); // <--------
//   wagerButtonSelect50 = document.getElementById("50");
//   wagerButtonSelect75 = document.getElementById("75");
//   wagerButtonSelect100 = document.getElementById("100");
//   wagerButtonSelect25.addEventListener("click", thisWager25);
//   wagerButtonSelect50.addEventListener("click", thisWager50);
//   wagerButtonSelect75.addEventListener("click", thisWager75);
//   wagerButtonSelect100.addEventListener("click", thisWager100);

//   function thisWager25() {
//     currentWagerArray.push(25);
//     updateTotalWager();
//     console.log(currentWagerArray);
//   }

//   function thisWager50() {
//     currentWagerArray.push(50);
//     updateTotalWager();
//     console.log(currentWagerArray);
//   }

//   function thisWager75() {
//     currentWagerArray.push(75);
//     updateTotalWager();
//     console.log(currentWagerArray);
//   }

//   function thisWager100() {
//     currentWagerArray.push(100);
//     updateTotalWager();
//     console.log(currentWagerArray);
//   }

//   function updateTotalWager() {
//     wagerShowHere = document.querySelector("#wagerShowHere");
//     let sum = 0;
//     currentWagerArray.forEach((item) => {
//       sum += item;
//     });

//     wagerShowHere.innerText = sum;
//     console.log(sum);
//   }
// }

// function renderStart() {
//   cashInButton();
// }

// renderWager();
// renderStart();
// //console.log(currentBalance);

// GAME MAIN FUNCTION
let cardDeck = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
];

let userHand = [];
let dealerHand = [];
let sum = 0;
let dealerSum = 0;

displayPlayerScore = document.createElement("h1");
let playerCurrentScore = document.querySelector(".userhand");
playerCurrentScore.appendChild(displayPlayerScore);
displayPlayerScore.innerText = " ";

displayDealerScore = document.createElement("h1");
let dealerCurrentScore = document.querySelector(".dealerhand");
dealerCurrentScore.appendChild(displayDealerScore);
displayDealerScore.innerText = " ";

function calculateValue() {
  if (cardType === "Jack" || cardType === "Queen" || cardType === "King") {
    newCardType = 10;
    sum += newCardType;
    console.log("PICTURE CONVERTED!");
    console.log(sum);
  } else if (cardType === "Ace") {
    newCardType = 1;
    sum += newCardType;
    console.log("ACE CONVERTED!");
    console.log(sum);
  } else {
    sum += cardType;
    console.log(sum);
  }
  return sum;
}

function calculateDealerValue() {
  if (cardType === "Jack" || cardType === "Queen" || cardType === "King") {
    newCardType = 10;
    dealerSum += newCardType;
    console.log("PICTURE CONVERTED!");
    console.log(dealerSum);
  } else if (cardType === "Ace") {
    newCardType = 1;
    dealerSum += 1;
    console.log("ACE CONVERTED!");
    console.log(dealerSum);
  } else {
    dealerSum += cardType;
    console.log(dealerSum);
  }
  return dealerSum;
}

function renderUserHitButton() {
  let addCardToUser = document.querySelector(".controlButton");
  userHit = document.createElement("button");
  addCardToUser.appendChild(userHit);
  userHit.innerText = "HIT";
  addCardToUser.addEventListener("click", dealToUser);
}
// ^ call this function to allow user to hit

function dealToUser() {
  selectRandomCard();
  currentcard = cardSuite + "---" + cardType;
  calculateValue();
  renderUserNewCard();
  updatePlayerScore();
}

function renderUserStand() {
  let userStopCardDraw = document.querySelector(".controlButton2");
  userStand = document.createElement("button");
  userStopCardDraw.appendChild(userStand);
  userStand.innerText = "STAND";
  userStand.addEventListener("click", dealerTurn);
  userStand.addEventListener("click", removeHit);
}

function removeHit() {
  userHit.remove();
}

// can add intermediatry to switch off user hit button + start function to keep running dealerTurn();
// until dealerSum > Sum , player lose or dealer Sum > 21 player wins

function dealerTurn() {
  selectRandomCard();
  currentcard = cardSuite + "---" + cardType;
  calculateDealerValue();
  updateDealerScore();
  renderDealerNewCard();
}

// ^ call this function to deal card to user
function dealToDealer() {
  selectRandomCard();
  currentcard = cardSuite + "---" + cardType;
  calculateDealerValue();
  updateDealerScore();
  renderDealerNewCard();
}
// ^ call this function to deal card to dealer
function renderUserNewCard() {
  newcard = document.createElement("h3");
  let newCardUser = document.querySelector(".userhand");
  newCardUser.appendChild(newcard);
  newcard.innerText = currentcard; //<-- update this number to card dealt
}

function renderDealerNewCard() {
  newcard = document.createElement("h3");
  let newCardUser = document.querySelector(".dealerhand");
  newCardUser.appendChild(newcard);
  newcard.innerText = currentcard; //<-- update this number to card dealt
}

function selectRandomCard() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  cardType = getRandomInt(1, 14);
  cardSuite = getRandomInt(0, 4);
  cardDeck[cardSuite].splice(cardType, 1); //removes card from deck

  if (cardSuite === 0) {
    cardSuite = "Diamonds";
  } else if (cardSuite === 1) {
    cardSuite = "Clubs";
  } else if (cardSuite === 2) {
    cardSuite = "Hearts";
  } else {
    cardSuite = "Spades";
  }

  if (cardType === 11) {
    cardType = "Jack";
  } else if (cardType === 12) {
    cardType = "Queen";
  } else if (cardType === 13) {
    cardType = "King";
  } else if (cardType === 0) {
    cardType = "Ace";
  }
}

function updatePlayerScore() {
  displayPlayerScore.innerText = sum;

  if (sum >= 21) {
    playerEnd();
  } else if (sum >= 16) {
    renderUserStand();
  }
}

function playerEnd() {
  displayPlayerScore.innerText = sum + " you lose!";
  userHit.remove();
  userStand.remove();
}

function updateDealerScore() {
  displayDealerScore.innerText = dealerSum;
}

function userStartingHand() {
  selectRandomCard();
  currentcard = cardSuite + "---" + cardType;
  calculateValue();
  updatePlayerScore();
  renderUserNewCard();
}

function dealerStartingHand() {
  selectRandomCard();
  currentcard = cardSuite + "---" + cardType;
  calculateDealerValue();
  updateDealerScore();
  renderDealerNewCard();
}

function gameStart() {
  userStartingHand();
  userStartingHand();
  dealerStartingHand();
  renderUserHitButton();
}
gameStart();

// if (sum < 15) {
//   renderUserHitButton();
// }
