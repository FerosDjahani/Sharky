class EnergybarEndboss extends DrawableObject {
    y;
    world;
    percentage = 100;
    IMAGES = [
        './img/4. Marcadores/orange/0_  copia.png',
        './img/4. Marcadores/orange/20_ copia 2.png',
        './img/4. Marcadores/orange/40_  copia.png',
        './img/4. Marcadores/orange/60_  copia.png',
        './img/4. Marcadores/orange/80_  copia.png',
        './img/4. Marcadores/orange/100_  copia.png'
    ];

    constructor(x, y, world) {
            super().loadImage('././img/4. Marcadores/orange/100_  copia.png');
            this.loadImages(this.IMAGES);
            this.y = y - 50;
            this.x = x;
            this.width = 150;
            this.height = 50;
            this.checkEnergybar();
            this.world = world;
        }
        /**
         * This function is for setting the energybar of endboss
         */
    checkEnergybar() {
        setInterval(() => {


            if (world.endboss.endbossInWater) {
                this.y = world.endboss.y + 30;
            }
        }), 100
    }
}