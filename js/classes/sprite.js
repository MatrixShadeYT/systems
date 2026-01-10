class Sprite {
    constructor({position, imageSrc, frameRate=1, frameBuffer=0, scale=1}) {
        this.frameRate = frameRate;
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.image.width/this.frameRate;
            this.height = this.image.height;
        }
        this.image.src = imageSrc;
        this.frameBuffer = frameBuffer;
        this.ellapsedFrames = 0;
        this.currentFrame = 0;
        this.loaded = false;
        this.scale = scale;
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
        this.updateFrame();
    }
    updateFrame() {
        this.ellapsedFrames++;
        if (this.ellapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate - 1) {
                this.currentFrame++
            } else {
                this.currentFrame = 0;
            }
        }
    }
}