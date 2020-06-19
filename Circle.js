class Circle{
    constructor(x, y, radius){
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        ellipseMode(CENTER);
        fill("brown");
        ellipse(pos.x, pos.y, this.radius);
    }
}
