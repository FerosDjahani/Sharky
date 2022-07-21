class EnergybarCharacter extends DrawableObject {
    IMAGES = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/100_ .png'
    ];
    lifePercentage = 100;

    constructor() {
        super();
        this.loadImage('img/4. Marcadores/Purple/100_ .png');
        this.loadImages(this.IMAGES);
        this.y = 0;
        this.x = 15;
        this.width = 150;
        this.height = 50;
    }
}