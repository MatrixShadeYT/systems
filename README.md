# Game Systems
Canvas Setup
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
animate();
## Classes
[Sprite](js/classes/sprite.js)
```javascript
Sprite({position, imageSrc, frameRate=1, frameBuffer=0, scale=1})
```
[Block](js/classes/block.js)
```javascript
Block({position, color, size})
```