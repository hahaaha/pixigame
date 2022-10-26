import { Container, Graphics } from 'pixi.js'

export const initHeathBar = (width, gameScene) => {
    const healthBar = new Container();
    console.error(width)
    healthBar.position.set(600, 4)
    gameScene.addChild(healthBar);

    //Create the black background rectangle
    let innerBar = new Graphics();
    innerBar.beginFill(0x000000);
    innerBar.drawRect(0, 0, 128, 8);
    innerBar.endFill();
    healthBar.addChild(innerBar);

    //Create the front red rectangle
    let outerBar = new Graphics();
    outerBar.beginFill(0xFF3300);
    outerBar.drawRect(0, 0, 128, 8);
    outerBar.endFill();
    healthBar.addChild(outerBar);

    healthBar.outer = outerBar;
}