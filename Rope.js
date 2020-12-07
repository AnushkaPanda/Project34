class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:350
        }
       
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }

    display(){
      if (this.rope.bodyA){
        push ();
    
      var pointA = this.rope.bodyA.position; 
      var pointB = this.pointB; 
      strokeWeight (4);
      stroke ("black");

      line (pointB.x, pointB.y, pointA.x, pointA.y) 
      pop ();
    }
  }
}