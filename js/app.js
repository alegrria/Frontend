// Enemies our player must avoid
var Enemy = function(x, y, move) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.move = move;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.move * dt
    this.move = 50 + Math.floor(Math.random() * 200);
    
    // reload the bug when it goes out of the canvas
    let canvasWidth = 505
    if(this.x > canvasWidth) {
        this.x = -100;
        this.move = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 200);
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 370;
    this.moveUpOrDown = 100;
    this.moveRightOrLeft = 80;
}
Player.prototype.handleInput = function() {
    
}
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function() {
    
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let enemy1 = new Enemy(0, 60, 1);
let enemy2 = new Enemy(0, 140, 1);
let enemy3 = new Enemy(0, 220, 1);
let allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
let player = new Player();

// y <= 400 x-move = 80 (370 (initial position), 290, 210, 130, 50)
// x <= 400 y-move = 100 (0, 100, 200(initial position), 300, 400)

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    console.log(allowedKeys[e.keyCode])
});
