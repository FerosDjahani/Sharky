class ThrowableObjectBubble extends MovableObject {


    BUBBLE_IMAGES = [
        'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'
    ];

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.loadImages(this.BUBBLE_IMAGES);
        this.x = x;
        this.y = y;
        this.height = 30;
        this.width = 30;
        this.animate();
        this.throw();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.BUBBLE_IMAGES);
        }, 100)
    }
}