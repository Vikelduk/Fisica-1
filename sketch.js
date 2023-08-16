
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var block1;
var block2;
var block3;

var ground;

function setup() 
{
	createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

	var ground_options = {
		isStatic : true
	}

	var block1_opitions = {
		restitution : 0.5,
		friction : 0.02,
		frictionAir : 0
	}

	var block2_opitions = {
		restitution : 0.7,
		friction : 0.01,
		frictionAir : 0.1
	}

	var block3_opitions = {
		restitution : 0.01,
		friction : 0.1,
		frictionAir : 0.3
	}

	block1 = Bodies.circle(220,10,10,block1_opitions);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_opitions);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_opitions);
	World.add(world,block3);

	ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
	fill("red");

	Engine.run(engine);
}

function draw() 
{
  background(221);

  rectMode(CENTER);
 
  Engine.update(engine);

  ellipse(block1.position.x,block1.position.y,20);
  rect(block2.position.x,block2.position.y, 20, 15);
  rect(block3.position.x,block3.position.y, 20, 20);

  rect(ground.position.x,ground.position.y,400,20);

  drawSprites();
}























