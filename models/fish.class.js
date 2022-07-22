class Fish extends MovableObject {
    world;
    energy = 2;
    intervalOfEnemies;
    y = 350;
    x = 500 + Math.random() * 4000;
    speed = 0.1 + Math.random() * 0.5;

    //animating and movements of the enemies

    animate(variant) {

        this.intervalOfEnemies = setInterval(() => {
            if (this.isDead()) {
                setTimeout(() => {
                    clearInterval(this.intervalOfEnemies)
                }, 200);
                this.playAnimation(this.IMAGES_DEAD_FISH);
                setInterval(() => {
                    this.y -= 2;
                }, 50)
            } else if (!this.isDead()) {
                this.playAnimation(this.IMAGES_SWIMMING_FISH);
                this.checkFish(variant);
            }

        }, 100);
    }



    checkFish(variant) {
        if (variant == 2) {
            this.swimUp();
        } else {
            this.swimLeft();
        }
    }

    setValueNormalFishes() {
        this.speed = 0.2 + Math.random() * 4;
        this.y = 0 + Math.random() * 400;
        this.x = 300 + Math.random() * 4000;
    }
}