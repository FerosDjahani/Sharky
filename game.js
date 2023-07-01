let canvas;
let keyboard;
let world;

//sounds
throw_sound = new Audio('audio/throw.mp3');
game_sound = new Audio('audio/ambiente.mp3');



//load page
function init() {
    this.game_sound.play();
    this.game_sound.volume = 0.2;


    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);

}



// start game

function startGame() {
    let canvasFullscreen = document.getElementById('canvasFullscreen');
    canvas = document.getElementById('canvas');
    let startGame = document.getElementById('startGame');
    canvasFullscreen.classList.remove('d-none')
    startGame.classList.add('d-none');
    canvas.classList.remove('d-none');
    document.getElementById('infoBox').classList.add('d-none');

}

function Info() {
    document.getElementById('infoBox').classList.remove('d-none');
}

function closeInfo() {
    document.getElementById('infoBox').classList.add('d-none');
}

//keyboard and control instructions

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


//keyboard and control instructions for mobile-view

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



//main game functions
function Restart() {
    reload();

}

function reload() {
    window.location = 'index.html';

}

function fullscreen() {
    canvas.requestFullscreen();
}