const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var bgimg
var player1, playerImg
var ground;
var snow;
var snows=[]
function preload (){
  bgimg=loadImage("snow2.jpg")
  playerImg=loadImage("snowman.png")
  
}



function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;
 player1=createSprite(400, 200, 50, 50);
 player1.addImage("snowman", playerImg)
 player1.scale=0.5
 ground=createSprite(400,400,800,10)
snow=new Snow(100,100)
}

function draw() {
  background( bgimg);
  Engine.update(engine)  
  if(keyDown("space")){
player1.velocityY=-10
  }
  player1.velocityY=player1.velocityY+0.5
  player1.collide(ground)
  drawSprites();
  snows.push(new Snow(random(0,800),0)); 
   for(var i=0; i<snows.length; i++){
      snows[i].display(); }
}