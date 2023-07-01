class Fish5 extends MovableObject {
    y = 60 + Math.random() * 500;
    height = 70;



    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'


    ];


    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.IMAGES_SWIM);

        this.x = 500 + Math.random() * 1800;
        this.animate();
    }




    animate() {

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIM.length;
            let path = this.IMAGES_SWIM[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }

}