var bg,coin,sound,bg2
var ground,animal1,animal2,animal3,animal4
var boy,boy_img
var gameOver,restart
var obstacle,stone1,stone2,stone3,stone4
function preload(){
boy_img=loadAnimation("boy/boy1.png","boy/boy2.png","boy/boy3.png","boy/boy4.png","boy/boy5.png","boy/boy6.png","boy/boy7.png",
"boy/boy8.png","boy/boy9.png","boy/boy10.png","boy/boy11.png","boy/boy12.png","boy/boy13.png","boy/boy14.png","boy/boy15.png",
"boy/boy16.png","boy/boy17.png","boy/boy18.png","boy/boy19.png","boy/boy20.png","boy/boy21.png","boy/boy22.png","boy/boy23.png",
"boy/boy24.png","boy/boy25.png","boy/boy26.png")
bg=loadImage("bg1.jpg")
coin=loadImage("coin.png")
sound=loadSound("coins sound.wav")
bg2=loadImage("bg2.jpg")
restart=loadImage("restart(2).png")
gameOver=loadImage("gameover0.png")
stone1=loadImage("stone/stone1.png")
stone2=loadImage("stone/stone2.png")
stone3=loadImage("stone/stone3.png")
stone4=loadImage("stone/stone4.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  ground=createSprite(1176,576,windowWidth+1000,10)
  boy=createSprite(windowWidth/2,373,50,50)
  boy.addAnimation(boy_img)
  boy.scale=0.5

bg=createSprite(643,304,500,900)
bg.addImage(bg)
bg.scale=1.0

}

function draw() {
  background(255,255,255);  
  text ("x"+mouseX+",y"+mouseY,200,100)
  if(keyDown(UP_ARROW)){
    boy.y=2
    boy.x=0
  }
  if(keyDown(DOWN_ARROW)){
    boy.y=-2
    boy.x=0
  }
  if(keyDown(LEFT_ARROW)){
    boy.y=0
    boy.x=-2
  }
  if(keyDown(RIGHT_ARROW)){
    boy.y=0
    boy.x=-2
  }
  stones()
  drawSprites();
}function stones(){
  obstacle=createSprite(10,10,285,285)
  obstacle.addImage(stone1)
  obstacle.velocityY=-4
  obstacle.scale=0.2
  }

  function coins(){
    coin=createSprite(670,Math.round(random(10,10)),170,230)
  coin.addImage(bananaImage)
    coin.scale=0.1
    coin.velocityY=-3
  }