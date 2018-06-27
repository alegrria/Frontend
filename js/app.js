// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.length = 70;
    this.height = 40;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt
    
    // reload the bug when it goes out of the canvas; slightly before canvas starts to appear smoothly on the screen
    let canvasWidth = 505
    if(this.x > canvasWidth) {
        this.x = -100;
        this.generateSpeed();
    };
    
    // player goes back after collision with a bug
    if(player.x < this.x + this.length && player.x + this.length > this.x && player.y < this.y + this.height && this.height + player.y > this.y) {
        player.x = 200;
        player.y = 370;
    };
};

// generate random speed for bugs
Enemy.prototype.generateSpeed = function() {
    this.speed = 50 + Math.floor(Math.random() * 100 + 50);
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 370;
    this.moveUpOrDown = 80;
    this.moveRightOrLeft = 100;
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Control the player with keys
Player.prototype.handleInput = function(key) {
    switch(key) {
        case 'left':
            if(this.x === 0) {
                return null;
            } else {
                this.x -= this.moveRightOrLeft;
            };
            break;
        case 'right':
            if(this.x === 400) {
                return null;
            } else {
                this.x += this.moveRightOrLeft;
            };
            break;
        case 'up':
            if(this.y === 50) {
                this.x = 200;
                this.y = 370;
            } else {
                this.y -= this.moveUpOrDown;
            };
            break;
        case 'down':
            if(this.y === 370) {
                return null;
            } else {
                this.y += this.moveUpOrDown;
            };
            break;
        };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
let initialPositions = [60, 140, 220]
initialPositions.forEach(function(position) {
                         if(position === 60) {
                             let initialSpeed = 300 + Math.floor(Math.random() * 350 + 20);
                             let enemy = new Enemy(-50, position, initialSpeed);
                             allEnemies.push(enemy);
                         } if(position === 140) {
                            let initialSpeed = 50 + Math.floor(Math.random() * 50 + 20);
                            let enemy = new Enemy(-350, position, initialSpeed);
                            allEnemies.push(enemy);
                         } if(position === 220) {
                            let initialSpeed = 100;
                            let enemy = new Enemy(-800, position, initialSpeed);
                            allEnemies.push(enemy);
                         };
                         });

// Place the player object in a variable called player
let player = new Player();

// y 370 - 50
// x 0 - 400

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
                          console.log(player.x)
                          console.log(player.y)
});
