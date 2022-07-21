class MovableObject extends DrawableObject {
    x;
    y;
    width = 100;
    height = 100;
    energy = 100;
    lastHit = 0;
    speed = 3;
    otherDirection = false;

    //swim Left

    swimLeft() {
        this.x -= this.speed;
    }

    //swim Up

    swimUp() {
        this.y -= this.speed;
    }

    /**
     * This function is for animating all with the right pictures of array
     * @param {string} images 
     */

    playAnimation(images) {

        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }

    /**
     * This function is checking the collision (+40 because of better character collision)
     * @param {string} mo 
     * @returns 
     */

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y + 40 < mo.y + mo.height;
    };

    /**
     * This function is checking if hit and removing energy
     */

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

    /**
     * This function is checking if hurt within 0.5sec
     * @returns boolean
     */

    isHurt() {

        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    /**
     * This function is checking if dead
     * @returns boolean
     */

    isDead() {
        return this.energy == 0;
    }

    /**
     * This function is for throwing bubble or poison
     */

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