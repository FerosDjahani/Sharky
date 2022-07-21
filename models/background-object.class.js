class BackgroundObject extends MovableObject {

    constructor(variantBG, x, y) {
        super();
        if (variantBG == 1) {
            this.loadImage('./img/3. Background/Dark/1.png');
        } else {
            this.loadImage('./img/3. Background/Dark/2.png');
        }
        this.x = x;
        this.y = y;
        this.height = 480;
        this.width = 720;
    }
}