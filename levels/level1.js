// LEVEL 1 

const level1 = new Level(enemies = [
        new FishGreen(),
        new FishGreen(),
        new FishGreen(),
        new FishGreen(),
        new FishOrange(),
        new FishOrange(),
        new FishOrange(),
        new FishOrange(),
        new FishPurple(),
        new FishPurple(),
        new FishPurple(),
        new FishPurple(),
        new FishJellyGreen(),
        new FishJellyGreen(),
        new FishJellyGreen(),
        new FishJellyGreen(),
        new FishJellyPurple(),
        new FishJellyPurple(),
        new FishJellyPurple(),
        new FishJellyPurple()



    ],
    backgroundObjects = [
        new BackgroundObject(2, -720, 0),
        new BackgroundObject(1, 0, 0),
        new BackgroundObject(2, 720, 0),
        new BackgroundObject(1, 720 * 2, 0),
        new BackgroundObject(2, 720 * 3, 0),
        new BackgroundObject(1, 720 * 4, 0),
        new BackgroundObject(2, 720 * 5, 0),
        new BackgroundObject(1, 720 * 6, 0)
    ],

    coins = [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ],

    poison = [
        new Poison(1),
        new Poison(2),
        new Poison(3),
        new Poison(4),
        new Poison(1),
        new Poison(2),
        new Poison(3),
        new Poison(4),
        new Poison(1),
        new Poison(2),
        new Poison(3),
        new Poison(4),
        new Poison(1),
        new Poison(2),
        new Poison(3),
        new Poison(4),
        new Poison(1),
        new Poison(2),
        new Poison(3),
        new Poison(4)
    ]
)