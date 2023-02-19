// TEST WAGER FUNCTION

let currentBalance = 0;

function cashInButton() {
  let cashInButton = document.getElementById("cashInSubmit");
  cashInButton.addEventListener("click", cashIn);

  function cashIn() {
    let cashIn = document.getElementById("cashIn");
    let currentBalanceText = document.getElementById("currentBalance");
    currentBalance = cashIn.value;
    currentBalanceText.innerText = cashIn.value;

    console.log(currentBalance);
  }
}

function renderWager() {
  let currentWagerArray = [];
  //   let currentWager = 0;
  for (let i = 1; i <= 4; i++) {
    let wagerButton = document.createElement("button");
    wagerButton.setAttribute("button" + [i], [i] * 25);
    wagerButton.innerText = "25" * [i];
    let buttonClass = document.querySelector(".wager");
    buttonClass.appendChild(wagerButton);
  }

  wagerButtonSelect25 = document.querySelector("button"); // <--------
  wagerButtonSelect50 = document.querySelector("button");
  wagerButtonSelect75 = document.querySelector("button");
  wagerButtonSelect100 = document.querySelector("button");
  // wagerButtonSelect25.addEventListener("click", thisWager);
  // wagerButtonSelect50.addEventListener("click", thisWager);
  console.log(wagerButtonSelect25);

  function thisWager() {
    currentWagerArray.push(25);
    updateTotalWager();
    console.log(currentWagerArray);
  }

  function updateTotalWager() {
    wagerShowHere = document.querySelector("#wagerShowHere");
    let sum = 0;
    currentWagerArray.forEach((item) => {
      sum += item;
    });

    wagerShowHere.innerText = sum;
    console.log(sum);
  }
}

// console.log(wagerTotal);

//   let wagerButtonSelect25 = 25;
//   let wagerButtonSelect50 = 50;
//   let wagerButtonSelect75 = 75;
//   let wagerButtonSelect100 = 100;

renderWager();

function renderStart() {
  cashInButton();
}

renderStart();
console.log(currentBalance);
