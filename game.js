let canvas;
let keyboard;
let world;
// let bg_sound = ;

throw_sound = new Audio('audio/throw.mp3');
game_sound = new Audio('audio/ambiente.mp3');



/**
 * This function is used to create the World
 * and give canvas and keyboard to world
 */

function init() {
    this.game_sound.play();
    this.game_sound.volume = 0.2;


    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
    responsive();
    canvas.addEventListener("mousedown", doMouseDown, false);
}

/**
 * This function is to get fullscreen onclick the size button
 * @param {string} event 
 */

function doMouseDown(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    if (x >= canvas.clientWidth - 50 && y >= canvas.clientHeight - 50) {
        canvas.requestFullscreen();
    }
}

//responsive

function responsive() {
    var heightRatio = 0.65;
    canvas.height = canvas.width * heightRatio;
}


// start game

function startGame() {
    let canvasFullscreen = document.getElementById('canvasFullscreen');
    canvas = document.getElementById('canvas');
    let startGame = document.getElementById('startGame');
    canvasFullscreen.classList.remove('d-none')
    startGame.classList.add('d-none');
    canvas.classList.remove('d-none');
    // bg_sound.play();
    // bg_sound.volume = 0.1;
}
/**
 * This function is used to create and use the Keyboard
 */
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
        this.throw_sound.play();

    }
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});


function touchDownLeft() {
    keyboard.LEFT = true;
}

function touchUpLeft() {
    keyboard.LEFT = false;
}

function touchDownRight() {
    keyboard.RIGHT = true;
}

function touchUpRight() {
    keyboard.RIGHT = false;
}


function touchDownJump() {
    keyboard.UP = true;
}

function touchUpJump() {
    keyboard.UP = false;
}

function touchDownDown() {
    keyboard.DOWN = true;
}

function touchUpDown() {
    keyboard.DOWN = false;
}

function touchDownShoot() {
    keyboard.D = true;
}

function touchUpShoot() {
    keyboard.D = false;
}

function touchDownThrow() {
    keyboard.SPACE = true;
}

function touchUpThrow() {
    keyboard.SPACE = false;
}




function Restart() {
    reload();

}

function reload() {
    window.location = 'index.html';

}

function fullscreen() {
    canvas.requestFullscreen();
}