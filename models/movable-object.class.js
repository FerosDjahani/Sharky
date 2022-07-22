class MovableObject extends DrawableObject {
    x;
    y;
    width = 100;
    height = 100;
    energy = 100;
    lastHit = 0;
    speed = 3;
    otherDirection = false;

    //character and main game instructions


    swimLeft() {
        this.x -= this.speed;
    }



    swimUp() {
        this.y -= this.speed;
    }


    playAnimation(images) {

        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }


    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y + 40 < mo.y + mo.height;
    };



    hit() {

        if (this instanceof Character) {
            this.energy -= 0.2;
        } else {
            this.currentImage = 0;
            this.energy -= 10;
        }
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    };


    isHurt() {

        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    throw () {

        setInterval(() => {
            if (this instanceof ThrowableObject || this instanceof ThrowableObjectPoison) {
                this.x += 12;
            } else {
                this.x -= 5;
            }
        }, 25)

    }
}