const   Engine=Matter.Engine;
const   World =Matter.World;
const   Bodies =Matter.Bodies;

var engine,world,ball;
var box1,box2,ground;


function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;

  box1= new box(200,300,50,100);

  ground= new Ground(200,390,400,20);
  

  box2=new box(240,10,50,100);

var ball_options={
  restitution:1
}
 
}

function draw() {
  background(0);  

  Engine.update(engine);

 box1.Display(); 
 ground.Display();
  box2.Display();
  //drawSprites();
}