class Coin extends MovableObject {
    world;
    animateCoinsInterval;
    COINS_IMAGES = ['./img/4. Marcadores/1. Coins/1.png',
        './img/4. Marcadores/1. Coins/2.png',
        './img/4. Marcadores/1. Coins/3.png',
        './img/4. Marcadores/1. Coins/4.png'
    ];

    constructor() {
            super().loadImage('./img/4. Marcadores/1. Coins/1.png');
            this.loadImages(this.COINS_IMAGES);
            this.x = 300 + Math.random() * 3200;
            this.y = 0 + Math.random() * 400;
            this.width = 40;
            this.height = 40;
            this.animate();
        }
        /**
         * This function is for animating the coins
         */
    animate() {
        this.animateCoinsInterval = setInterval(() => {
            this.playAnimation(this.COINS_IMAGES);
        }, 250)
    }
}