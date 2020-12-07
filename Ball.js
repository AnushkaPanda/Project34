class Ball{
  constructor(x,y,r){
    var options={
     density:1
    } 
    this.body = Bodies.circle (x,y,r,options)
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world, this.body)
  }
  display(){
    var pos = this.body.position;
    push ();
    ellipseMode(RADIUS)
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    ellipse(0,0,this.r)
    pop();
  }
}