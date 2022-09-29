var canvas;
var backgroundImage;
var circle;
var luis,luisImg;

function preload(){
  backgroundImage = loadImage("./imagen/ciudad.jpg");

  luis = loadImage("luis1.jpeg")

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);


  luis = createSprite(50,180,50,50);
  luis.addImage("luis", luisImg);
  luis.escale = 0.05;
}

function draw(){
  background(backgroundImage);
  drawSprites();
}