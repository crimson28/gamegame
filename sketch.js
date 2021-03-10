
const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var superhero;
var backgroundIMG;
var bg;


function preload() {
//preload the images here
bg= loadImage("images/GamingBackground.png")


}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  superhero = new Superhero(300,300);


}

function draw() {
  background(bg);
  superhero.display();

  

}

