The Player works as following:
* is rendered in the middle of the canvas (at initial position)
* moves up/down or left/right (is rerendered with new coordinates, depending on the key pressed)
* reloads while meeting a bug (is rerendered at initial position)
* wins when reaches water (game over, modal congratulating and asking whether a useer wants to play again, if yes - reload)


The Bug works as following:
* moves with its own random speed
* starts at initial position and get rerendered upon reaching the end of the canvas
* collides with Player and causes it rerender (should have some dimensions to collide with)
* appeares with a little delay
