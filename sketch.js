var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var b1,b2,b3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown");

	b1 = createSprite(400,655,150,10);
	b1.shapeColor = color("red");
	b2 = createSprite(320,620,10,80);
	b2.shapeColor = color("red");
	b3 = createSprite(470,620,10,80);
	b3.shapeColor = color("red");

	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.3 , isStatic : true});
	World.add(world, packageBody);
	
ground_option = {
	isStatic:true
}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_option);
	 World.add(world, ground);
	

	 b1 = Bodies.rectangle(400, 670, width, 10 ,{isStatic:true});
	 World.add(world,b1);
	 b2 = Bodies.rectangle(320,670,width,80,{isStatic:true});
	 World.add(world,b2);
	 b3 = Bodies.rectangle(470,670,width,80,{isStatic:true});
	 World.add(world,b3);
}


function draw() {
  background(0);
 Engine.update(engine);


  rectMode(CENTER);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode ===DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the
	   // package body fall only on press of the Down arrow key.
	   Matter.Body.setStatic(packageBody,false);
  }
}



