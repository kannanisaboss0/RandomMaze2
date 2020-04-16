const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;
var cball1,base,base2,base3,base4,base5,base6,base7,base8,base9,base10,base11;
var base12,base13,base14,base15,base16,base17;
var engine,bodies,world;
var cball32,cball1;
var player;
var join;

function setup() {
  createCanvas(1600,800);

engine=Engine.create();
world=engine.world;
var position={
  x:50,
  y:50
}



base=new Box(200,375,50,200,PI*4);
base2=new Box(125,300,100,50,PI*2);
base3=new Box(275,300,100,50,PI*2);
base4=new Box(125,200,100,50,PI*4);
base5=new Box(200,125,50,200,PI*4);
base6=new Box(400,250,200,50,PI*4);
base7=new Box(475,125,50,200,PI*4);
base8=new Box(475,375,50,200,PI*4);
base9=new Box(550,250,200,50,PI*4);
base10=new Box(675,250,200,50,PI*4);
base11=new Box(825,250,200,50,PI*4);
base12=new Box(750,375,50,200,PI*4);
base13=new Box(750,125,50,200,PI*4);
base14=new Box(1025,375,50,200,PI*4);
base15=new Box(1100,250,300,50,PI*4);
base16=new Box(975,250,200,50,PI*4);
base17=new Box(1025,125,50,200,PI*4);

cball1=new Ball(random(125,1025),random(125,375),50);
cball2=new Ball(random(125,1025),random(125,375),50);
cball3=new Ball(random(125,1025),random(125,375),50);
cball4=new Ball(random(125,1025),random(125,375),50);
cball5=new Ball(random(125,1025),random(125,375),50);
cball6=new Ball(random(125,1025),random(125,375),50);
cball7= new Ball(random(125,1025),random(125,375),50);
cball8=new Ball(random(125,1025),random(125,375),50);
cball9=new Ball(random(125,1025),random(125,375),50);
join =new Chain(player,position)

player=new Ball(MouseX,mouseY,25)
}

 

function draw() {
  Engine.update(engine);
  background("orange");  
  
  base2.display();
  base3.display();
  base.display();
  base4.display();
  base5.display();
  base6.display();
  base7.display();
  base8.display();
  base9.display();
  base10.display();
  base11.display();
  base12.display();
  base13.display();
  base14.display();
  base15.display();
  base16.display();
  base17.display();

  cball1.display();
cball2.display();
cball3.display();
cball4.display();
cball5.display();
cball6.display();
cball7.display();
cball8.display();
cball9.display();

player.display();

}

  

/*welocome to randommaze(/\prototype_1,only_for_testing_purposes/\).This maze is very different from others acording to our team analysts.Over here the enemy is not defenite;
They keep changing their positions.
Hence this creates what pshycologists call a 
<One-Level-MultiLevel Effect(OLME)>
One level keeps feeling like many levels due to random-position-changing-enemies;
This milestone is achieved through the newly developed Random(num,num)technology
for more details please click on the link below:*/
//https://p5js.org/reference/#/p5/random   /*this link may be unstable*/

/*Even luck plays a part in the game!
The enemies may spawn within the word area, making you restart the level.Good Luck!!
How to reset:
1.Open this code on VCS<VISUAL CODE STUDIO> and a Web Server
2.Click on refresh button (enemy keeps changine the place)
After using it please give a feedback so we could improve it along with full release


Property belongs to.....
WorldStopper Technologies
Visual Code Studio
P5 Editor
JavaScript
NOTE:Player is not available. <repeat> This is only a prototrype <repeat>
*/




 