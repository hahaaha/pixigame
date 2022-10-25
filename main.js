import {
  Application,
  Container,
  Loader,
  Sprite,
  utils,
  Rectangle,
} from "pixi.js"
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
  app.stage.addChild(dungeon)
  treasure = new Sprite(id["characters-4.png"])
  treasure.x = 100
  treasure.y = app.stage.height / 2
  treasure.vx = 0
  treasure.vy = 0
  app.stage.addChild(treasure)


  //Capture the keyboard arrow keys
  let left = keyboard("ArrowLeft"),
    up = keyboard("ArrowUp"),
    right = keyboard("ArrowRight"),
    down = keyboard("ArrowDown")

    left.press = () => {
      treasure.vx = -5
      treasure.vy = 0
    }
    left.release = () => {
      if(!right.isDown && treasure.vy === 0) {
        treasure.vx = 0
      }
    }

    right.press = () => {
      treasure.vx = 5
      treasure.vy = 0
    }

    right.release = () => {
      if(!left.isDown && treasure.vy === 0) {
        treasure.vx = 0
      }
    }

    up.press = () => {
      treasure.vy = -5
      treasure.vx = 0
    }
    up.release = () => {
      if (!down.isDown && treasure.vx == 0) {
        treasure.vy = 0
      }
    }
    down.press = () => {
      treasure.vy = 5
      treasure.vx = 0
    }
    down.release = () => {
      if(!up.isDown && treasure.vx === 0) {
        treasure.vy = 0
      }
    }
  // const gameScene = new Container()
  // app.stage.appChild(gameScene)
  // const gameOverScene = new Container()
  // app.stage.appChild(gameOverScene)
  // gameOverScene.visible = false

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


function keyboard(value) {
  let key = {};
  key.value = value;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = event => {
    if (event.key === key.value) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
      event.preventDefault();
    }
  };

  //The `upHandler`
  key.upHandler = event => {
    if (event.key === key.value) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
      event.preventDefault();
    }
  };

  //Attach event listeners
  const downListener = key.downHandler.bind(key);
  const upListener = key.upHandler.bind(key);
  
  window.addEventListener(
    "keydown", downListener, false
  );
  window.addEventListener(
    "keyup", upListener, false
  );
  
  // Detach event listeners
  key.unsubscribe = () => {
    window.removeEventListener("keydown", downListener);
    window.removeEventListener("keyup", upListener);
  };
  
  return key;
}
