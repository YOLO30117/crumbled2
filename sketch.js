
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20)

	paper = new Paper(200,450,70)

	dustbin = new Dustbin()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
 paper.display()

 ground.display()

 dustbin.display()

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.mypaper,paper.mypaper.position,{x:85,y:-85})
	}
}



