//Initialize Cash in
let currentBalance = 0;
let currentBalanceInt = 0;
let currentRoundWager = 0;

let cashInButton = document.getElementById("cashInSubmit");
cashInButton.addEventListener("click", cashIn);
cashInButton.addEventListener("click", renderWagerPage);

function renderWagerPage() {
  document.querySelector(".wager").style.display = "block";
  renderWager();
}

function updateCurrentBalance() {
  let updatePlayerBalance = document.getElementById("currentBalanceUpdate");
  updatePlayerBalance.innerText = currentBalanceInt;
}

function cashIn() {
  let cashIn = document.getElementById("cashIn");
  let currentBalanceText = document.getElementById("currentBalanceUpdate");
  currentBalance = cashIn.value;
  currentBalanceText.innerText = cashIn.value;
  document.querySelector(".cashInPage").style.display = "none";
  currentBalanceInt = parseInt(currentBalance);
  return;
}

function renderWager() {
  let currentWagerArray = [];
  for (let i = 1; i <= 4; i++) {
    let wagerButton = document.createElement("button");
    wagerButton.setAttribute("id", [i] * 25);
    wagerButton.innerText = "25" * [i];
    let buttonClass = document.querySelector(".wager");
    buttonClass.appendChild(wagerButton);
  }
  // let currentRoundWager = 0;
  let currentRoundWagerDisplay = document.createElement("h3");
  currentWagerPosition = document.querySelector("#wagerShowHere");
  currentRoundWagerDisplay.setAttribute("id", "currentRoundWagerDisplay");
  currentWagerPosition.appendChild(currentRoundWagerDisplay);
  currentRoundWagerDisplay.innerText = "0";

  let wagerSubmitButton = document.createElement("Button");
  let wagerSubmitButtonLocation = document.querySelector(".wager");
  wagerSubmitButton.innerText = "Bet!";
  wagerSubmitButton.setAttribute("id", "betButton");
  wagerSubmitButtonLocation.appendChild(wagerSubmitButton);
  wagerSubmitButton.addEventListener("click", submitBet);

  wagerButtonSelect25 = document.getElementById("25"); // <--------
  wagerButtonSelect50 = document.getElementById("50");
  wagerButtonSelect75 = document.getElementById("75");
  wagerButtonSelect100 = document.getElementById("100");
  wagerButtonSelect25.addEventListener("click", thisWager25);
  wagerButtonSelect50.addEventListener("click", thisWager50);
  wagerButtonSelect75.addEventListener("click", thisWager75);
  wagerButtonSelect100.addEventListener("click", thisWager100);

  function thisWager25() {
    currentWagerArray.push(25);
    currentBalanceInt -= 25;
    updateCurrentBalance();
    updateTotalWager();
  }

  function thisWager50() {
    currentWagerArray.push(50);
    currentBalanceInt -= 50;
    updateCurrentBalance();
    updateTotalWager();
  }

  function thisWager75() {
    currentWagerArray.push(75);
    currentBalanceInt -= 75;
    updateCurrentBalance();
    updateTotalWager();
  }

  function thisWager100() {
    currentWagerArray.push(100);
    currentBalanceInt -= 100;
    updateCurrentBalance();
    updateTotalWager();
    console.log(currentWagerArray);
  }

  function updateTotalWager() {
    let sum = 0;
    currentWagerArray.forEach((item) => {
      sum += item;
    });
    currentRoundWagerDisplay.innerText = sum;
    currentRoundWager = sum;
    console.log("Current round Wager " + currentRoundWager);
    return currentRoundWager;
  }

  function submitBet() {
    if (currentRoundWager > 0) {
      console.log("ready to bet! " + currentRoundWager);
      document.querySelector(".wager").style.display = "none";
      runMain();
    }
  }
}

// GAME MAIN FUNCTION
function runMain() {
  let cardDeck = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"],
  ];

  let userHand = [];
  // let dealerHand = [];
  let sum = 0;
  let dealerSum = 0;

  mainGame = document.querySelector(".mainGame");

  let controlButton = document.createElement("div");
  controlButton.setAttribute("class", "controlButton");
  mainGame.appendChild(controlButton);

  let controlButton2 = document.createElement("div");
  controlButton2.setAttribute("class", "controlButton2");
  mainGame.appendChild(controlButton2);

  let userhand = document.createElement("div");
  userhand.setAttribute("class", "userhand");
  mainGame.appendChild(userhand);

  let dealerhand = document.createElement("div");
  dealerhand.setAttribute("class", "dealerhand");
  mainGame.appendChild(dealerhand);

  displayPlayerScore = document.createElement("h1");
  let playerCurrentScore = document.querySelector(".userhand");
  displayPlayerScore.setAttribute("id", "displayPlayerScore");
  playerCurrentScore.appendChild(displayPlayerScore);
  displayPlayerScore.innerText = " ";

  displayDealerScore = document.createElement("h1");
  let dealerCurrentScore = document.querySelector(".dealerhand");
  displayDealerScore.setAttribute("id", "displayDealerScore");
  dealerCurrentScore.appendChild(displayDealerScore);
  displayDealerScore.innerText = " ";

  displayCurrentWager = document.createElement("h3");
  displayCurrentWager.setAttribute("id", "gameWager");
  let displayCurrentWagerGame = document.querySelector(".mainGameWager");
  displayCurrentWagerGame.appendChild(displayCurrentWager);
  displayCurrentWager.innerText = "CURRENT WAGER : " + currentRoundWager;

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

  function renderUserHitButton() {
    let addCardToUser = document.querySelector(".controlButton");
    userHit = document.createElement("button");
    addCardToUser.appendChild(userHit);
    userHit.innerText = "HIT";
    addCardToUser.addEventListener("click", dealToUser);
  } // render HIT button for Player

  function renderUserStand() {
    let userStopCardDraw = document.querySelector(".controlButton2");
    userStand = document.createElement("button");
    console.log("Stand Button Generated");
    userStopCardDraw.appendChild(userStand);
    userStand.innerText = "STAND";
    userStand.addEventListener("click", dealerTurn);
    userStand.addEventListener("click", removeHit);
  }
  // render STAND button for player
  function removeHit() {
    userHit.remove();
  } // remove HIT button

  function dealToUser() {
    selectRandomCard();
    currentcard = cardSuite + "---" + cardType;
    calculateValue();
    renderUserNewCard();
    updatePlayerScore();
    checkPlayerWinLose();
  } // give PLAYER new card

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
  } // calculate and convert picture card values for PLAYER

  function renderUserNewCard() {
    newcard = document.createElement("h3");
    let newCardUser = document.querySelector(".userhand");
    newCardUser.appendChild(newcard);
    newcard.innerText = currentcard; //<-- update this number to card dealt
  } // render PLAYER new card on board

  function updatePlayerScore() {
    displayPlayerScore.innerText = sum;

    if (sum > 21) {
      playerEnd();
    }
  } // update display of PLAYER score

  function checkPlayerWinLose() {
    if (sum >= 16 && sum < 22) {
      renderUserStand();
    } else if (userStand > 22) {
      userStand.remove();
    }
  } // check player win lose parameters

  function dealerTurn() {
    selectRandomCard();
    currentcard = cardSuite + "---" + cardType;
    calculateDealerValue();
    updateDealerScore();
    renderDealerNewCard();
    checkDealerWinLose();
    userStand.remove();
    console.log("dealer sum" + dealerSum);
  } // removes player STAND button, starts dealer new cards

  function calculateDealerValue() {
    if (cardType === "Jack" || cardType === "Queen" || cardType === "King") {
      newCardType = 10;
      dealerSum += newCardType;
      console.log(dealerSum);
    } else if (cardType === "Ace") {
      newCardType = 1;
      dealerSum += 1;
      console.log(dealerSum);
    } else {
      dealerSum += cardType;
      console.log(dealerSum);
    }
    return dealerSum;
  } // calculate and convert picture card values for DEALER

  // function dealToDealer() {
  //   selectRandomCard();
  //   currentcard = cardSuite + "---" + cardType;
  //   calculateDealerValue();
  //   updateDealerScore();
  //   renderDealerNewCard();
  // } // give DEALER new card

  function renderDealerNewCard() {
    newcard = document.createElement("h3");
    let newCardUser = document.querySelector(".dealerhand");
    newCardUser.appendChild(newcard);
    newcard.innerText = currentcard; //<-- update this number to card dealt
  } // render DEALER new card

  function updateDealerScore() {
    displayDealerScore.innerText = dealerSum;
  } //update display of DEALER score

  function checkDealerWinLose() {
    if (dealerSum <= sum) {
      dealerTurn();
    } else if (dealerSum > 21) {
      dealerEnd();
    } else if (dealerSum > sum) {
      playerEnd();
    }
  } // check DEALER win lose parameters

  function playerEnd() {
    displayPlayerScore.innerText = sum + " you lose!";
    playAgain();
    updateCurrentBalance();
    userHit.remove();
    userStand.remove();
    console.log(currentBalanceInt);
  } // Lose page for PLAYER

  function playerEndBlackJack() {
    displayPlayerScore.innerText = "blackjack! you win";
    currentBalanceInt = currentBalanceInt + currentRoundWager * 2;
    updateCurrentBalance();
    playAgain();
  } // Blackjack win page for PLAYER

  function dealerEnd() {
    displayPlayerScore.innerText = sum + "  you win!";
    currentBalanceInt = currentBalanceInt + currentRoundWager * 2;
    console.log(currentBalanceInt);
    updateCurrentBalance();
    playAgain();
    userHit.remove();
  } // Win page for PLAYER

  function userStartingHand() {
    selectRandomCard();
    checkPictureAce();
    // checkBlackJack();
    currentcard = cardSuite + "---" + cardType;
    calculateValue();
    updatePlayerScore();
    renderUserNewCard();
  } // starting hand setup for PLAYER
  function dealerStartingHand() {
    selectRandomCard();
    currentcard = cardSuite + "---" + cardType;
    calculateDealerValue();
    updateDealerScore();
    renderDealerNewCard();
  } // staring hand setup for DEALER

  function checkPictureAce() {
    if (cardType === "King" || cardType === "Queen" || cardType === "Jack") {
      userHand.push(cardType);
    } else if (cardType === 1) {
      cardType = "Ace";
      userHand.push(cardType);
    }
    console.log(userHand);
  } // Checking PLAYER starting hand for Picture and Aces

  function checkBlackJack() {
    let x = userHand[0];
    let y = userHand[1];

    if ((x === "King" || x === "Queen" || x === "Jack") && y === "Ace") {
      console.log("BlackJack!");
      playerEndBlackJack();
    } else if ((y === "King" || y === "Queen" || y === "Jack") && x === "Ace") {
      console.log("BlackJack!");
      playerEndBlackJack();
    } else {
      renderUserHitButton();
    }
  } // Checking userHand for Blackjack

  function gameStart() {
    userStartingHand();
    userStartingHand();
    dealerStartingHand();
    checkBlackJack();

    if (sum > 16 && sum < 22) {
      renderUserStand();
    }
  } // Launches starting hands for game

  gameStart();

  function playAgain() {
    let playAgain = document.createElement("Button");
    playAgain.setAttribute("id", "playAgainButton");
    playAgain.innerText = "Play Again!";
    playAgainLocation = document.getElementById("playAgain");
    playAgainLocation.appendChild(playAgain);
    playAgain.addEventListener("click", returnToWager);

    //remove all elements that was created from wager page onwards
    function returnToWager() {
      // document.querySelector(".mainGame").style.display = "none";
      document.querySelector(".wager").style.display = "block";

      const currentRoundWagerDisplay = document.querySelector(
        "#currentRoundWagerDisplay"
      );
      currentRoundWagerDisplay.remove();
      const button25 = document.getElementById("25");
      button25.remove();
      const button50 = document.getElementById("50");
      button50.remove();
      const button75 = document.getElementById("75");
      button75.remove();
      const button100 = document.getElementById("100");
      button100.remove();
      const betButton = document.getElementById("betButton");
      betButton.remove();
      const gameWager = document.getElementById("gameWager");
      gameWager.remove();
      const controlButton = document.querySelector(".controlButton");
      controlButton.remove();
      const controlButton2 = document.querySelector(".controlButton2");
      controlButton2.remove();
      const userhand = document.querySelector(".userhand");
      userhand.remove();
      const dealerhand = document.querySelector(".dealerhand");
      dealerhand.remove();
      const playAgainButton = document.getElementById("playAgainButton");
      playAgainButton.remove();

      // const displayPlayerScore = document.getElementById("displayPlayerScore");
      // displayPlayerScore.remove();
      // const displayDealerScore = document.getElementById("displayDealerScore");
      // displayDealerScore.remove();

      renderWager();
    }
  }
}
