//Create a list that holds all of your cards
let items = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb", "fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function makeCard(items) {
	let deck = []
	for (var i = 0; i < items.length; i++) {
		deck.push(`<li class="card"><i class="fa ${items[i]}"></i></li>`)
	}
	return deck.join(" ")
}

function startGame() {

    items = shuffle(items);
    turnover.innerHTML = makeCard(items);
    for (var i = 0; i < cards.length; i++) {
		cards[i].addEventListener('click', turnCard);
		cards[i].addEventListener('click', addCard);
		cards[i].addEventListener('click', addMatch);
		cards[i].addEventListener('click', turnCard);
		cards[i].addEventListener('click', removeOpen);
		cards[i].addEventListener('click', moveCount);
		moveCounter = 0;
		moveCount()
	}
}

let openCards = [];
let counter = 0;
let moveCounter = 0

let cards = document.getElementsByClassName("card")

function turnCard() {
	var card = this.classList.add("open", "show");
	return card;
}

function addCard() {
	if (this.classList.contains("open")) {
	    openCards.push(this);
	    counter += 1;
	    moveCounter += 1;
	} 
}

function addMatch() {
	if (counter === 2) {
		if (openCards[0].childNodes[0].classList.value === openCards[1].childNodes[0].classList.value) {
			openCards[0].classList.remove("open", "show");
			openCards[0].classList.add("match");
			openCards[1].classList.remove("open", "show");
			openCards[1].classList.add("match");
			counter = 0;
			openCards = [];
		}
	}
}

function removeOpen() {
	if (counter === 2) {
		if (openCards[0].childNodes[0].classList.value !== openCards[1].childNodes[0].classList.value){
			setTimeout(function() {openCards[0].classList.remove("open", "show");
			openCards[1].classList.remove("open", "show");
			counter = 0;
			openCards = []}, 500);
		}
	}
}

function moveCount (){ 
	var moves = document.querySelectorAll("span");
	moves[0].innerHTML = moveCounter
}


startGame()



document.querySelector("div.restart").addEventListener('click', startGame)


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
