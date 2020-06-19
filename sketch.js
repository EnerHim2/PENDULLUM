const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var chain1,circle1,platform1;

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    circle1 = new Circle(200,200,100);
    platform1 = new Platform(600,10,1200,50);
    //log6 = new Log(230,180,80, PI/2);
    chain1 = new SlingShot(circle1.body ,platform1);;
}

function draw(){
  Engine.update(engine);
  background("black")
  
  platform1.display();
  circle1.display();
  chain1.display();
}








