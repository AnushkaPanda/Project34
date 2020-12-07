class Box{
    
  constructor(x,y,width,height){
    var options= {
      restitution:0.8,
      friction:1,
      density:0.04
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    World.add(world, this.body)
}
display(){
    var pos = this.body.position;
    push()
  rectMode(CENTER)
  translate(pos.x,pos.y)
  rotate(this.body.angle)
  strokeWeight(4);
  stroke ("purple");
  fill("pink")
  rect(0,0,this.width,this.height)
  pop()
}
}