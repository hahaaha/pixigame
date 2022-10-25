import {
  Application,
  Container,
  Loader,
  Sprite,
  utils,
  Text,
  Rectangle,
} from "pixi.js"
import { initKeyboardEvent } from "./src/keyboard"

const app = new Application({ width: 792, height: 670 })
const loader = new Loader()
const { TextureCache } = utils
let dungeon, explorer, treasure, id
let state

document.body.appendChild(app.view)
loader.add("assets/sp.json").load(setup)

function setup() {
  id = loader.resources["assets/sp.json"].textures
  dungeon = new Sprite(id["map.png"])
  let gameScene = new Container()
  gameScene.addChild(dungeon)
  app.stage.addChild(gameScene)

  treasure = new Sprite(id["characters-4.png"])
  treasure.x = 100
  treasure.y = app.stage.height / 2
  treasure.vx = 0
  treasure.vy = 0
  app.stage.addChild(treasure)

  initKeyboardEvent(treasure)
 
  const gameOverText = new Text('You win')
  const gameOverScene = new Container()
  gameOverScene.addChild(gameOverText)
  app.stage.addChild(gameOverScene)
  gameOverScene.visible = false

  state = play
  app.ticker.add((delta) => gameLoop(delta))
}

function gameLoop(delta) {
  state(delta)
  //Runs the current game `state` in a loop and renders the sprites
}

function play(delta) {
  treasure.x += treasure.vx 
  treasure.y += treasure.vy 
  //All the game logic goes here
}

function end() {
  //All the code that should run at the end of the game
}
