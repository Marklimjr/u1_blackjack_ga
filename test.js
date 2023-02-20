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
    wagerButton.setAttribute("id", [i] * 25);
    wagerButton.innerText = "25" * [i];
    let buttonClass = document.querySelector(".wager");
    buttonClass.appendChild(wagerButton);
  }

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
    updateTotalWager();
    console.log(currentWagerArray);
  }

  function thisWager50() {
    currentWagerArray.push(50);
    updateTotalWager();
    console.log(currentWagerArray);
  }

  function thisWager75() {
    currentWagerArray.push(75);
    updateTotalWager();
    console.log(currentWagerArray);
  }

  function thisWager100() {
    currentWagerArray.push(100);
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
renderWager();

function renderStart() {
  cashInButton();
}

renderStart();
console.log(currentBalance);
