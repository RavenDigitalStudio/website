const tokens = document.querySelectorAll(".token");
const board = document.querySelector(".board-container");
const diceContainer = document.querySelector(".dice-container");
const dice = document.querySelectorAll(".dice");
const storeWhite = document.querySelector(".store-white");
const storeBlack = document.querySelector(".store-black");
const limbo = document.querySelector(".limbo");

// array of all the tokens
board.addEventListener("click", function (event) {
  if (event.target.classList.contains("token")) {
    tokens.forEach(function (token) {
      // remove selected class from all tokens
      token.classList.remove("selected");
    });
    event.target.classList.toggle("selected");
    // console.log(event.target);
  }
  if (event.target.classList.contains("column")) {
    const token = document.querySelector(".selected");

    // check if there is a single token
    if (event.target.childElementCount === 1) {
      if (
        event.target.firstElementChild.classList.contains("white") &&
        token.classList.contains("black")
      ) {
        limbo.appendChild(event.target.firstElementChild);
      } else if (
        event.target.firstElementChild.classList.contains("black") &&
        token.classList.contains("white")
      ) {
        limbo.appendChild(event.target.firstElementChild);
      }
    }
    if (event.target.classList.contains("top")) {
      event.target.appendChild(token);
    } else {
      event.target.insertBefore(token, event.target.firstChild);
    }
  }
  if (event.target.classList.contains("limbo")) {
    const token = document.querySelector(".selected");
    limbo.appendChild(token);
  }
});

// add event listener to dice container
diceContainer.addEventListener("click", function (event) {
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  //dice[0].innerHTML = dice1Value;
  const dice2Value = Math.floor(Math.random() * 6) + 1;
  // dice[1].innerHTML = dice2Value;
  const d1Img = document.getElementById("d1-img");
  d1Img.src = `dice${dice1Value}.png`;
  const d2Img = document.getElementById("d2-img");
  d2Img.src = `dice${dice2Value}.png`;
});

// add event listener to store white
storeWhite.addEventListener("click", function (event) {
  const token = document.querySelector(".selected");
  storeWhite.appendChild(token);
});
// add event listener to store black
storeBlack.addEventListener("click", function (event) {
  if (event.target.classList.contains("token")) {
    tokens.forEach(function (token) {
      // remove selected class from all tokens
      token.classList.remove("selected");
    });
    event.target.classList.toggle("selected");
  } else {
    const token = document.querySelector(".selected");
    storeBlack.appendChild(token);
  }
});
