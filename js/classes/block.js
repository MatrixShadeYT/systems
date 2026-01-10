class Block {
    constructor({position, color, size}) {
        this.size = size || {width: 3, height: 3};
        this.position = position || {x: 0, y: 0};
        this.velocity = {x: 0, y: 0};
        this.color = color;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}