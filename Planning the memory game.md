Planning the memory game.

How The Game Works
The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

The player flips one card over to reveal its underlying symbol.
	- the class .open show is assigned to the card on click (JS function 1)
The player then turns over a second card, trying to find the corresponding card with the same symbol.
	- the class .open show is assigned to the card on click (JS function 1)
	- classes of <i> elements of open cards get compared (JS function 2)
If the cards match, both cards stay flipped over.
	- the classes are the same - The class .open show is removed; the cards both get the class .match and stay flipped over (JS function 3)
If the cards do not match, both cards are flipped face down.
	- the classes are different - the cards blink red and turn over. The class .open show is removed (JS function 3)
The game ends once all cards have been correctly matched.
	- perform check for any elements without .match class (or make a counter which breaks out of the game, when reaches 16 or 0) after each move
	- shuffle the cards on click of 'reload' element (JS function 4)
