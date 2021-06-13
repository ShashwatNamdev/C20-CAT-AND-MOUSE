var canvas;
var backgroundImg;

var Cat,catImg1,catImg2,catImg3;
var Mouse,mouseImg1,mouseImg2,mouseImg3;
var Background;

function preload() {
//load the images here
backgroundImg = loadImage("images/garden.png");

catImg1 = loadImage("images/cat1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
catImg3 = loadImage("images/cat4.png");

mouseImg1 = loadImage("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(970,700);
    //create tom and jerry sprites here

Cat = createSprite(700,520,20,20);
Cat.addImage("catSitting",catImg1);
Cat.scale = 0.2;

Mouse = createSprite(100,520,20,20);
Mouse.addImage("mouseSitting",mouseImg1);
Mouse.scale = 0.16;
keyPressed();
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(Cat.x-Mouse.x<(Cat.width-Mouse.width)/2){
        
        Cat.addAnimation("catLastImage",catImg3);
        Cat.x = 200;
        Cat.changeAnimation("catLastImage");
        Mouse.addAnimation("mouseLastImage",mouseImg3);
        Mouse.changeAnimation("mouseLastImage");
        Cat.velocityX = 0;
    }
    drawSprites();
    text(Cat.x + "," + Cat.y,10,45);
    
}

function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===LEFT_ARROW){
    Cat.velocityX = -5;
    Cat.addAnimation("catRunning",catImg2);
    Cat.changeAnimation("catRunning");
    Mouse.addAnimation("mouseEating",mouseImg2);
    Mouse.changeAnimation("mouseEating");
 }
 
}