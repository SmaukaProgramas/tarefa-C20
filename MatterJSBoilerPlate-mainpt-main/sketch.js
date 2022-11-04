
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola;
var engine;
var world;
var retangulo;
var quadrado;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var propriedadesdabola = {
	restitution:0.5,
	friction:0.02,
	frictionAir:0
}
bola = Bodies.circle(220, 10, 10,propriedadesdabola );
World.add(wold,bola);

var propriedadesdoretangulo = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}
retangulo = Bodies.rectangle(110, 50, 10,10, propriedadesdoretangulo );
World.add(wold,retangulo);

var propriedadesdoquadrado = {
	restitution:0.01,
	friction:1,
	frictionAir:0.3
}
quadrado = Bodies.rectangle(350, 50, 10,10, propriedadesdoquadrado );
World.add(wold,quadrado);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(bola.position.x, bola.position.y, 10, 10);
  rect(quadrado.position.x, quadrado.position.y, 10, 10);
  rect(retangulo.position.x, retangulo.position.y, 10, 10);
  drawSprites();
 
}



