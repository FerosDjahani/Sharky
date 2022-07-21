class Poison extends MovableObject {

    constructor(index) {
        super().checkdifferentPoisons(index);
    }

    checkdifferentPoisons(index) {
            if (index == 1) {
                this.loadImage('./img/4. Marcadores/Posión/Dark - Left.png');
                this.setPositionOfPoisonDark();
            }
            if (index == 2) {
                this.loadImage('./img/4. Marcadores/Posión/Dark - Right.png');
                this.setPositionOfPoisonDark();
            } else if (index == 3) {
                this.loadImage('./img/4. Marcadores/Posión/Light - Left.png');
                this.setPositionOfPoisonLight();
            }
            if (index == 4) {
                this.loadImage('./img/4. Marcadores/Posión/Light - Right.png');
                this.setPositionOfPoisonLight();
            }
        }
        /**
         * This function is for showing dark potion
         * @returns 
         */
    setPositionOfPoisonDark() {
        return this.x = 200 + Math.random() * 3200,
            this.y = 370 + Math.random() * 50,
            this.width = 50,
            this.height = 50;
    };
    /**
     * This function is for showing light./ potion
     * @returns 
     */
    setPositionOfPoisonLight() {
        return this.x = 200 + Math.random() * 3200,
            this.y = 100 + Math.random() * 200,
            this.width = 50,
            this.height = 50;
    };
}