import {Application, Container, Loader, Sprite,utils, Rectangle} from 'pixi.js'
const app = new Application({width: 256, height: 256})
const loader = new Loader()
const {TextureCache} = utils
// document.body.appendChild(app.view)


// loader.add('assets/09.png').load(setup)

function setup() {
  const gameScene = new Container()
  app.stage.appChild(gameScene)
  const gameOverScene = new Container()
  app.stage.appChild(gameOverScene)
  gameOverScene.visible = false


  state = play
  app.ticker.add(delta => gameLoop(delta))
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

