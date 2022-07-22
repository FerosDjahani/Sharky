class World {

    canvas;
    ctx;
    keyboard;


    bubble;
    poison;
    bubbleObject;
    positionCamera_X = 0;
    bubbleThrowTime = 0;
    poisonThrowTime = 0;
    endbossThrowTime = 0;
    throwableObject = [];
    throwableObjectPoison = [];
    throwableObjectBubble = [];
    gameWon = false;
    gameLost = false;

    //audio
    DeathFish_audio = new Audio('./audio/hurtfish.mp3');
    gameover_audio = new Audio('./audio/gameover.mp3');
    gameWon_audio = new Audio('./audio/won.mp3');


    level = level1;


    character = new Character();
    endboss = new Endboss();
    energybarEndboss = new EnergybarEndboss(this.endboss.x, this.endboss.y, this.world);
    energybarCharacter = new EnergybarCharacter();
    energybarCoins = new EnergybarCoins();
    energybarPoison = new EnergybarPoison();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.run();
    };

    // lose game function

    checkLost() {
        if (this.gameLost == true) {
            this.stopInterval();
            setTimeout(() => {
                this.gameover_audio.play();
                this.gameover_audio.volume = 0.5;
                this.youLost();
            }, 200);

        }
    }

    // show gameover screen and reload
    youLost() {
        document.getElementById('canvasFullscreen').classList.add('d-none');
        document.getElementById('id-gameLost').classList.remove('d-none');
        setTimeout(() => {
            location.reload();
        }, 5000);
    }

    // show won game endscreen and reload

    youWon() {
        this.gameWon_audio.play();

        document.getElementById('bg-img').classList.add('d-none');
        document.getElementById('id-gameWon').classList.remove('d-none');

        setTimeout(() => {
            location.reload();
        }, 5000);
    }

    stopInterval() {
        clearInterval(this.character.animateCharacterInterval);
        clearInterval(this.character.moveCharacterInterval);
        this.level.coins.forEach(coin => {
            clearInterval(coin.animateCoinsInterval)
        });
        this.level.enemies.forEach(fish => {
            clearInterval(fish.intervalOfEnemies)
        });



    }

    // main character functions

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollectingCoins();
            this.checkCollectingPoison();
            this.checkThrowObjects();
            this.checkThrowObjectsBubble();
            this.checkCollisionsWithPoison();
            this.checkThrowObjectsPoison();
        }, 1000 / 60);
    };

    // collision by character and enemies

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.energy > 0) {
                this.character.hit();
                this.energybarCharacter.setPercentage(this.character.energy);
            }
        });
    };

    //animate and instructions of the items and bubbles

    checkThrowObjectsPoison() {
        if (this.keyboard.SPACE) {
            console.log(this.energybarPoison.percentage)
            let timePassed = new Date().getTime() - this.poisonThrowTime;
            if (timePassed > 2000 && this.energybarPoison.percentage >= 10) {
                this.character.poison -= 10;
                this.energybarPoison.setPercentage(this.character.poison);
                this.poison = new ThrowableObjectPoison(this.character.x + 100, this.character.y + 80);
                this.throwableObjectPoison.push(this.poison);
                this.poisonThrowTime = new Date().getTime();
            }
            this.checkCollisionsEndbossWithPoison();
        }
    }


    checkThrowObjects() {
        if (this.keyboard.D) {
            let timePassed = new Date().getTime() - this.bubbleThrowTime;
            if (timePassed > 2000) {
                this.bubble = new ThrowableObject(this.character.x + 100, this.character.y + 50);
                this.throwableObject.push(this.bubble);
                this.bubbleThrowTime = new Date().getTime();
            }
            this.checkCollisionsEnemiesWithBubble();
        };
    };


    checkCollisionsEnemiesWithBubble() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.bubble.isColliding(enemy)) {
                    enemy.hit();

                    this.throwableObject.splice(this.throwableObject.indexOf(this.bubble), 1);
                    this.bubble.y = -100;
                    this.DeathFish_audio.play();
                };
            });
        }, 1000 / 60);
    }


    checkCollisionsEndbossWithPoison() {
        setInterval(() => {
            if (this.endboss.isColliding(this.poison)) {
                this.throwableObjectPoison.splice(this.throwableObjectPoison.indexOf(this.poison), 1);
                this.poison.y = -100;
                this.endboss.hit();
                this.endboss.energy -= 10;

                this.energybarEndboss.setPercentage(this.endboss.energy);
            };
        }, 1000 / 60);
    };



    // collecting items by collision with character and items


    checkCollisionsWithPoison() {
        this.throwableObjectBubble.forEach((bubbleObject) => {
            if (this.character.isColliding(bubbleObject)) {
                this.throwableObjectBubble.splice(this.throwableObjectBubble.indexOf(this.bubbleObject), 1);
                this.character.hit();
                if (this.character.energy > 0) {
                    this.character.energy -= 10;
                }
                this.energybarCharacter.setPercentage(this.character.energy);
            };
        });
    };



    checkThrowObjectsBubble() {

        let timePassed = new Date().getTime() - this.endbossThrowTime;
        if (timePassed > 1000 + Math.random() * 5000 && this.endboss.endbossInWater && !this.endboss.isDead()) {
            this.bubbleObject = new ThrowableObjectBubble(this.endboss.x, this.endboss.y + 120 + Math.random() * 100);
            this.throwableObjectBubble.push(this.bubbleObject);
            this.endbossThrowTime = new Date().getTime();
        }
    };



    checkCollectingCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins();
                this.energybarCoins.setPercentage(this.character.coins);
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
            }
        })
    };


    checkCollectingPoison() {
        this.level.poison.forEach((poison) => {
            if (this.character.isColliding(poison)) {
                this.character.collectPoisons();
                this.energybarPoison.setPercentage(this.character.poison);
                this.level.poison.splice(this.level.poison.indexOf(poison), 1);
            }
        })
    };


    // gameworld functions

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;

    };



    draw() {
        let self = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.positionCamera_X, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.poison);
        this.ctx.translate(-this.positionCamera_X, 0);


        this.addToMap(this.energybarCharacter);
        this.addToMap(this.energybarCoins);
        this.addToMap(this.energybarPoison);
        this.ctx.translate(this.positionCamera_X, 0);

        this.addObjectToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
        this.addToMap(this.energybarEndboss);
        this.addObjectToMap(this.throwableObject);
        this.addObjectToMap(this.throwableObjectBubble);
        this.addObjectToMap(this.throwableObjectPoison);


        this.ctx.translate(-this.positionCamera_X, 0);
        requestAnimationFrame(function() {
            self.draw();
        })
    };




    addObjectToMap(enemies) {
        enemies.forEach(fish => {
            fish.draw(this.ctx);
        })
    };



    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    };


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    };

}