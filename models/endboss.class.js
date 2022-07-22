class Endboss extends MovableObject {
    endbossInWater = false;
    world;
    endbossDeadLast = false;

    // IMAGES
    IMAGES_ENDBOSS = [
        './img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_IDLE = [
        './img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    IMAGES_HURT = [
        './img/2.Enemy/3 Final Enemy/Hurt/1.png',
        './img/2.Enemy/3 Final Enemy/Hurt/2.png',
        './img/2.Enemy/3 Final Enemy/Hurt/3.png',
        './img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    IMAGES_DEAD = [
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    IMAGES_DEAD_LAST = ['./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'];

    //audio
    endbossDead_audio = new Audio('./audio/bossdeath.mp3');
    endbossHurt_audio = new Audio('./audio/hurtboss.mp3');




    constructor() {
        super().loadImage('./img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.IMAGES_ENDBOSS);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 3800;
        this.y = 0;
        this.width = 300;
        this.height = 300;
        this.animateEndboss();
        this.animate();
        this.playDeadAnimationBoss();
    }

    //Endboss animating and movements

    animateEndboss() {
        let refreshInterval = setInterval(() => {
            if (this.world.character.x > 3400 && !this.isDead()) {
                this.playAnimation(this.IMAGES_ENDBOSS);
                setTimeout(() => {
                    clearInterval(refreshInterval);
                    this.endbossInWater = true;
                }, 350);
            };
        }, 1000 / 20);
    }

    animate() {

        setInterval(() => {

            if (this.endbossInWater == true && !this.isDead()) {
                this.playAnimation(this.IMAGES_IDLE);
            }
            if (this.endbossInWater && this.isHurt() && !this.isDead()) {
                this.playAnimation(this.IMAGES_HURT)
                this.endbossHurt_audio.play();

            }
            if (this.endbossDeadLast == true) {
                this.playAnimation(this.IMAGES_DEAD_LAST);




                this.y -= 10;
            }

        }, 150)

    }






    playDeadAnimationBoss() {
        let clearThat = setInterval(() => {
            if (this.isDead()) {
                this.endbossDead_audio.play();
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    clearInterval(clearThat)
                    this.endbossDeadLast = true;
                }, 500);
            };
        }, 100)
    }
}