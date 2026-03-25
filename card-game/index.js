let firstCard;
let secondCard;
let cards = [];

let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");

let sum;
console.log(sum);

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "Peter",
  chips: 145,
  sayHello: function () {
    console.log("Hello");
  },
};

player.sayHello();
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + player.chips;

function getRandumCard() {
  return Math.floor(Math.random() * 11) + 1;
}

//New Game fn
function startGame() {
  isAlive = true;
  firstCard = getRandumCard();
  secondCard = getRandumCard();

  cards.push(firstCard);
  cards.push(secondCard);

  sum = cards[0] + cards[1];

  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    message = "Do want a new card?";
  } else if (sum === 21) {
    message = "Black card";
    hasBlackJack = true;
  } else {
    message = "You'are out of the game";
    isAlive = false;
  }
  console.log(message);
  messageEl.textContent = message;
}

//New card fn
function newCard() {
  let card = getRandumCard();
  sum += card;

  cards.push(card);
  startGame();
}

console.log("hasBlackJack: " + hasBlackJack);
console.log("isAlive: " + isAlive);
