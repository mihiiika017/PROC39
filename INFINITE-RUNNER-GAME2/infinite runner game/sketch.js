var dracula;
var zombie; 
var ground; 
var gameState = PLAY;

function preload(){
  zombie.image= loadImage("images/zombie.jpeg");
  dracula.image= loadImage("images/dracula.png");
  ground.image= loadImage("images/ground.png")
}

function setup() {
  createCanvas(800, 800)
}

function draw () {

  ground = createSprite(800,180,400,20);
  ground.addImage("ground.png",groundImage);
  ground.x = ground.width /2;

  if(keyIsDown(UP_ARROW) && dracula.index !== null){
    dracula.distance +=10
  }

  zombie.x = ground.x

  if(dracula.distance > 3860){
    gameState = 2;
  }
 ground.drawSprite();
  
}
