class ThrowableObjectPoison extends MovableObject {

    POISON_IMAGES = [
        './img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'

    ];
    constructor(x, y) {
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.loadImages(this.POISON_IMAGES);
        this.x = x;
        this.y = y;
        this.height = 30;
        this.width = 30;
        this.animate();
        this.throw();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.POISON_IMAGES);
        }, 100)
    }
}