var bananaimage,obstacleimage,backimage,score,obstaclegroup,bananagroup,monkey,monkeyimage

function preload(){
  
  backimage = loadImage("jungle.png");
  
  monkeyimage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  
  
  obstacleImage = loadImage("stone.png");
  
  bananaImage = loadImage("banana.png");  
  
  
}

function setup() {
  
  createCanvas(800, 400);
  
  score = 0;
  
  back = createSprite(400,150,400,200);
  back.addImage("B",backimage);
  back.scale = 2;
  back.x = back.width/2;
  back.velocityX = -1.5;
  
  
  monkey = createSprite(50,300,10,10);
  monkey.addAnimation("M",monkeyimage);
  monkey.scale = 0.11;
  
  Ground = createSprite(200,315,400,5);
  Ground.velocityX = -1.5;
  Ground.x = Ground.width/2;
  Ground.visible = false;
  
  
  
}

function draw() {
  
  background("white");
  
  
  if(keyDown("space"))
    monkey.velocityY = -10;
  
  monkey.velocityY = monkey.velocityY + 0.8;
    if (Ground.x < 0){
    Ground.x = Ground.width/2;
    }
  
  createEdgeSprites();
  monkey.collide(Ground);
  
  if(back.x < 170){
  back.x = back.width/2;
  Ground.x = Ground.width/2;
  }
  
  banana();
  
  
  
  drawSprites();
}

function banana(){
if (frameCount % 150 === 0) {
    var banana = createSprite(600,290,40,10);
    banana.y = Math.round(random(100,170));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
}

}

function stone(){
  if (frameCount % 50 === 0) {
    var stone = createSprite(600,180,40,10);
    stone.y = Math.round(random(100,170));
    stone.addImage(obstacleImage);
    stone.scale = 0.9;
    stone.velocityX = -3;
}
 }











  