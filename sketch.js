const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, monsterImg1, monsterImg2, playerImg1, playerImg2;
var ground, hero, fly;

function preload() {
  bg = loadImage("images/GamingBackground.png");
  monsterImg1 = loadImage("images/Monster-01.png");
  monsterImg2 = loadImage("images/Monster-02.png");
  playerImg1 = loadImage("images/Superhero-01.png");
  playerImg2 = loadImage("images/Superhero-02.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground(1500,795,3000,40);
  hero = new Hero(500,300,75);
  fly = new Fly(hero.body,{x:200,y:100});  
}

function draw() {
  background(180);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();
}

function mouseDragged(){
  hero.body.position.x = mouseX;
  hero.body.position.y = mouseY;
}

function mouseReleased(){
  fly.fly();
}