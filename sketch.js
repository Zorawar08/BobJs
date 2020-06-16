const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var top1 , string;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bob1 = new Bob(200,300,20,20);
	bob2 = new Bob(250,300,20,20);	
	bob3 = new Bob(300,300,20,20);	
	bob4 = new Bob(350,300,20,20);	
	bob5 = new Bob(400,300,20,20);	
	top1 = new Top(400,100,600,50);
	string = new String(bob1.body,{x:50,y:50});

	
  
}


function draw() {
    background(0);
  Engine.update(engine);
  top1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string.display();
  


}



