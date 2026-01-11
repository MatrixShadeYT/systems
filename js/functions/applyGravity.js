function applyGravity(obj,gravity=0,slow=0.1) {
    obj.position.x += obj.velocity.x;
    obj.position.y += obj.velocity.y;
    if (gravity == 0) {
        obj.velocity.x -= obj.velocity.x*slow;
        obj.velocity.y -= obj.velocity.y*slow;
    } else {
        obj.velocity.x += gravity;
        obj.velocity.y += gravity;
    }
}