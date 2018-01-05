var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function () {
  if (cards[0] === cards[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

var flipcard = function (cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch;
}

flipcard(0);
flipcard(2);
