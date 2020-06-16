class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Matter.Bodies.rectangle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(255,0,0);
      ellipse(pos.x, pos.y, this.radius,this.radius);
    }
}