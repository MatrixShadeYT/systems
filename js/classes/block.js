class Block {
    constructor({size={width: 3, height: 3},  position={x: 0, y: 0}, velocity={x: 0, y: 0},color='red', gravity=0}) {
        this.height = size.height;
        this.width = size.width;
        this.position = position;
        this.velocity = velocity;
        this.gravity = gravity;
        this.color = color;
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
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
    update(ctx) {
        this.draw(ctx);
        this.applyGravity();
    }
}