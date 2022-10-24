import { Application, Container, Loader, Sprite, utils, Rectangle } from 'pixi.js'
const app = new Application({ width: 792, height: 670 })
const loader = new Loader()
const { TextureCache } = utils
let dungeon, explorer, treasure, id;

document.body.appendChild(app.view)
loader.add('assets/sp.json').load(setup)

function setup() {
  id = loader.resources['assets/sp.json'].textures;
  dungeon = new Sprite(id["map.png"]);
  app.stage.addChild(dungeon);
  treasure = new Sprite(id['characters-4.png'])
  treasure.x = 100;
  treasure.y = app.stage.height / 2 ;
  app.stage.addChild(treasure)
  // const gameScene = new Container()
  // app.stage.appChild(gameScene)
  // const gameOverScene = new Container()
  // app.stage.appChild(gameOverScene)
  // gameOverScene.visible = false


  // state = play
  // app.ticker.add(delta => gameLoop(delta))
}


function gameLoop(delta) {
  //Runs the current game `state` in a loop and renders the sprites
}

function play(delta) {
  //All the game logic goes here
}

function end() {
  //All the code that should run at the end of the game
}

