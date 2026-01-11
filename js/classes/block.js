class Block {
    constructor({height=3, width=3,  position={x: 0, y: 0}, velocity={x: 0, y: 0},color='red', gravity=0}) {
        this.position = position || {x:0,y:0};
        this.velocity = velocity || {x:0,y:0};
        this.gravity = gravity || 0;
        this.color = color || 'red';
        this.height = height || 3;
        this.width = width || 3;
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
        this.position.y += this.velocity.y;
        if (this.gravity == 0) {
            this.velocity.y -= this.velocity.y*this.slow;
        } else {
            this.velocity.y += this.gravity;
        }
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(ctx) {
        this.applyGravity();
        this.draw(ctx);
    }
}