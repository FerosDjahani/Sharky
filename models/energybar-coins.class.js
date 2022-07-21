class EnergybarCoins extends DrawableObject {


    IMAGES = [
        'img/4. Marcadores/Purple/0_ _1.png',
        'img/4. Marcadores/Purple/20_ .png',
        'img/4. Marcadores/Purple/40_ _1.png',
        'img/4. Marcadores/Purple/60_ _1.png',
        'img/4. Marcadores/Purple/80_ _1.png',
        'img/4. Marcadores/Purple/100__1.png'
    ];

    percentage = 0;

    constructor() {
        super();

        this.loadImage('img/4. Marcadores/Purple/0_ _1.png');
        this.loadImages(this.IMAGES);
        this.y = 50;
        this.x = 15;
        this.width = 150;
        this.height = 50;
    }
}