export const initKeyboardEvent = (treasure) => {
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