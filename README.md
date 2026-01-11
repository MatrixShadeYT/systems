# Game Systems
Canvas Setup - This would be for a 2D Game.
```javascript
const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext("2d");
function animate() {
    window.requestAnimationFrame(animate);
    // Clear Canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
animate();
```
## SideView Game Supplies
### Functions
[checkCollisions](js/2D-sideview/functions/checkCollisions.js)<br>
Built into Sprite and Block Classes to only need one input.<br>
Assumes Objects have {position,width,height}
```javascript
checkCollisions(obj1,obj2) // Returns Bool Value
```
[applyGravity](js/2D-sideview/functions/applyGravity.js)<br>
Built into Sprite and Block Classes.<br>
Assumes Object has {position,velocity}
```javascript
applyGravity(obj,gravity=0,slow=0.1) // gravity 0 slows 10%, sets based off original or inputed
```

### Classes
[Sprite](js/2D-sideview/classes/sprite.js)
```javascript
Sprite({position, imageSrc, frameRate=1, frameBuffer=0, scale=1})
Sprite.Draw(ctx) // Draws shape
Sprite.changeFrame() // Updates to next frame of animation
Sprite.update(ctx) // Does Drawing, changing the frame, and applying gravity
```
[Block](js/2D-sideview/classes/block.js)
```javascript
Block({size={width: 3, height: 3},  position={x: 0, y: 0}, velocity={x: 0, y: 0},color='red', gravity=0})
Block.Draw(ctx) // Draws shape
Block.update(ctx) // Does Drawing and applying gravity
```