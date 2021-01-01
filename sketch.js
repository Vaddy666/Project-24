
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper1=new Paper(200,200,30)  
  ground1=new ground(400,650,10,800)
  dustbin1=new dustbin(470,605,75,10);
  dustbin2=new dustbin(540,640,10,150);
  dustbin3=new dustbin(610,600,70,10);

 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  //keypressed();
  ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})

}

}


