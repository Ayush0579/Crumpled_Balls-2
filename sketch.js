const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	DustI = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	dustbinSprite = createSprite(1050,250,0,0);
	dustbinSprite.addImage("DustbinImage",DustI);
	dustbinSprite.scale = 0.8;

	ground = new Ground(width/2,395,1500,20);
	upper = new Ground(width/2,5,1500,20);

	base = new Dustbin(1050,300,200,20);
	first = new Dustbin(960,260,20,250);
	second = new Dustbin(1140,260,20,250);
	bound1 = new Ground(10,200,20,400);
	bound2 = new Ground(1190,200,20,400);

	paper = new Ball(100,330,20);

	Engine.run(engine);
  
}


function draw() {
  background(255);

  ground.display();
  upper.display();

  base.display();
  first.display();
  second.display();

  bound1.display();
  bound2.display();

  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-100});
	}
}

