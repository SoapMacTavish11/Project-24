
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground= createSprite(400,650,800,20);
	ground.shapeColor="red";

	box1 = new Box(650,640,200,20);
	box2 = new Box(550,600,20,100);
	box3 = new Box(750,600,20,100);

	paper= new Paper(100,630,20);


	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();

  paper.display();
 
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
	}
}



