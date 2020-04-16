class Ball {
  constructor(x,y,radius,options){
   var options={
     frictionAir:0.04,
     density:1,
     gravity:1

   }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body);
 }






display(){
  var pos= this.body.position;
  var angle=this.body.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  ellipseMode(CENTER);
  ellipse(pos.x,pos.y,this.radius);
  pop();

  }


  
}
