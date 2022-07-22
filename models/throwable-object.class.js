class ThrowableObject extends MovableObject {

    BUBBLE_IMAGES = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'

    ]
    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png');
        this.loadImages(this.BUBBLE_IMAGES);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 80;
        this.animate();
        this.throw();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.BUBBLE_IMAGES);
        }, 100)
    }


}