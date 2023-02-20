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

// let addCardToUser = document.querySelector(".userhand");
// userHit = document.createElement("button");
// addCardToUser.appendChild(userHit);
// userHit.innerText = "HIT";
// addCardToUser.addEventListener("click", dealToUser);

// function userStart() {
//   dealToUser();
//   dealToUser();
// }

// userStart();

let sum = 0;

function calculateValue() {
  if (cardType === "Jack" || cardType === "Queen" || cardType === "King") {
    newCardType = 10;
    sum += newCardType;
    console.log("PICTURE CONVERTED!");
    console.log(sum);
  } else if (cardType === "Ace") {
    newCardType = 1;
    console.log("ACE CONVERTED!");
    console.log(sum);
  } else {
    sum += cardType;
    console.log(sum);
  }
  return sum;
}

function RenderUserHit() {
  let addCardToUser = document.querySelector(".userhand");
  userHit = document.createElement("button");
  addCardToUser.appendChild(userHit);
  userHit.innerText = "HIT";
  addCardToUser.addEventListener("click", dealToUser);
}

RenderUserHit();

function dealToUser() {
  selectRandomCard();
  currentcard = cardSuite + "---" + cardType;
  calculateValue();
  updatePlayerScore();
  renderUserNewCard();
}

function renderUserNewCard() {
  newcard = document.createElement("h3");
  let newCardUser = document.querySelector(".userhand");
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
  } else if (cardType === 1) {
    cardType = "Ace";
  }
}

console.log(sum);

displayPlayerScore = document.createElement("h1");
let playerCurrentScore = document.querySelector(".wager");
playerCurrentScore.appendChild(displayPlayerScore);

function updatePlayerScore() {
  displayPlayerScore.innerText = sum;
}
