export class Sprite {
    constructor({position, imageSrc, frameRate=1, frameBuffer=0, scale=1, gravity=0, velocity={x: 0, y: 0}}) {
        this.frameRate = frameRate || 1;
        this.position = position || {x:0,y:0};
        this.velocity = velocity || {x:0,y:0};
        this.gravity = gravity || 0;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.image.width/this.frameRate;
            this.height = this.image.height;
        }
        this.image.src = imageSrc;
        this.scale = scale || 1;
        this.loaded = false;
        this.frameBuffer = frameBuffer || 0;
        this.ellapsedFrames = 0;
        this.currentFrame = 0;
    }
    checkCollision(obj) {
        return (
            this.position.x <= obj.position.x+obj.width &&
            this.position.x+this.width >= obj.position.x &&
            this.position.y <= obj.position.y+obj.height &&
            this.position.y+this.height >= obj.position.y
        )
    }
    applyGravity(gravity=null,slow=0.1) {
        if (gravity != null) {
            this.gravity = gravity;
            this.slow = slow;
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.gravity == 0) {
            this.velocity.x -= this.velocity.x*this.slow;
            this.velocity.y -= this.velocity.y*this.slow;
        } else {
            this.velocity.x += this.gravity;
            this.velocity.y += this.gravity;
        }
    }
    draw(ctx) {
        if (!this.loaded) return;
        ctx.drawImage(
            this.image,
            this.currentFrame*this.width,
            0,
            this.width,
            this.height,
            this.position.x*this.scale,
            this.position.y*this.scale,
            this.width*this.scale,
            this.height*this.scale
        );
    }
    changeFrame() {
        this.ellapsedFrames++;
        if (this.ellapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate - 1) {
                this.currentFrame++
            } else {
                this.currentFrame = 0;
            }
        }
    }
    update(ctx) {
        this.draw(ctx);
        this.changeFrame();
        this.applyGravity();
    }
}