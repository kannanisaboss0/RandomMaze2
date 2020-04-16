class Chain{
  constructor(BodyA,PointB){
    var options={
      BodyA:BodyA,
      PointB:PointB,
      stiffness:0.02,
      length:10
    }
    this.Chain=Matter.Constraint.create(options)
    World.add(world,thisChain)
  }

display(){
  var BodyA=this.Chain.BodyA.position;
  var PointB=this.Chain.PointB.position;
  strokeWeight(7);
  line(BodyA.x,BodyA.y,PointB.x,PointB.y);
}  
}