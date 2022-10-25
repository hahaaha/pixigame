import { Sprite } from "pixi.js"
let numberOfBlobs = 6,
  spacing = 48,
  xOffset = 150,
  speed = 2,
  direction = 1
let blobs = []

export const initEnemy = (id, gameScene, stageHeight) => {
  for (let i = 0; i < numberOfBlobs; i++) {
    let blob = new Sprite(id["characters-48.png"])

    let x = spacing * i + xOffset

    //Give the blob a random `y` position
    let y = Math.floor(Math.random() * (600 - blob.height) )

    //Set the blob's position
    blob.x = x
    blob.y = y

    //Set the blob's vertical velocity. `direction` will be either `1` or
    //`-1`. `1` means the enemy will move down and `-1` means the blob will
    //move up. Multiplying `direction` by `speed` determines the blob'
    //vertical direction
    blob.vy = speed * direction

    //Reverse the direction for the next blob
    direction *= -1

    //Push the blob into the `blobs` array
    blobs.push(blob)

    //Add the blob to the `gameScene`
    gameScene.addChild(blob)
  }
}
