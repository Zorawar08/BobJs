class String {
    constructor(bodyA,pointB){
      var options = {
        bodyA:bodyA,
        pointB:pointB,
        length:100,
        stiffness:2
    }
    this.String = Constraint.create(options);
    World.add(world,this.String);
    }
  
    display() {
        var pointA = this.String.bodyA.position;
        var pointB = this.String.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
        
    }
  }
  