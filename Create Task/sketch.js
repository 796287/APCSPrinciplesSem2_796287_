//SnakeGame
//Connor Garratt
//November 14, 2018

//  Global variables
//snake object
var snake;
//food all in the array
var food = [];
var lava = [];
var img;
var numSeg = 1;
var img2;
//set up start screen
var start = "true"
//point system/number of segments
var score = 0;
function setup(){
//speed of game
img = loadImage("scarymouse.jpeg");
img2 = loadImage("lava.jpg")
fSlider = createSlider(0, 50, 10);
fSlider.position(780, 5);
frameRate(frames);

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadSnake();
  loadFood(1);
  loadLava(8);
}

// let img;
// function preload() {
//   img = loadImage('assets/');
// }

function draw(){
  frames = fSlider.value();
  frameRate(frames + score);
  background(20, 20, 20);
  textSize(10)
  text("score:" + score, 30, 30);
  snake.run();
//repeat placement of food
  for(var i = 0; i < food.length; i++){
    food[i].run();
  }
  for(var i = 0; i < lava.length; i++){
    lava[i].run();
  }
//call functions
  checkLoc();
  deadGame();
  gameStart();
  checklava();
}
//eat the food
function checkLoc(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      food.splice(i, 1);
      loadFood(1);
      snake.segments.push(createVector(0, 0));
      console.log(snake.segments.length)
      score++;

    }
  }
}

function checklava(){
  for(var i = 0; i < lava.length; i++){
    var distX = lava[i].loc.x - snake.loc.x;
    var distY = lava[i].loc.y - snake.loc.y;
    var distX20 = lava[i].loc.x + 20 - snake.loc.x;
    var distY20 = lava[i].loc.y + 20 - snake.loc.y;

    if(distX == (0) && distY == (0)){
      snake.status = "true"
    }
    if(distX20 == (0) && distY == (0)){
      snake.status = "true"
    }
    if(distX20 == (0) && distY20 == (0)){
      snake.status = "true"
    }
    if(distX == (0) && distY20 == (0)){
      snake.status = "true"
    }
  }
}

//creates snake
function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}
//creates a location for the food that goes into the food array
function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 39;
    //random x & y for 0-800
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}
function loadLava(numLava){
  for(var i = 0; i < numLava; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 39;
    //random x & y for 0-800
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var j = new Lava(loc);
    lava.push(j);
  }
}
//movement for keys when pressed
function keyPressed(){
   start = "false"
//up arrow
  if(keyCode === 38){
    snake.vel = createVector(0, -20)
  }
//down arrow
  if(keyCode === 40){
    snake.vel = createVector(0, 20)
  }
//right arrow
  if(keyCode === 39){
    snake.vel = createVector(20, 0)
  }
//left arrow
  if(keyCode === 37){
    snake.vel = createVector(-20, 0)
  }
}
//if dead then show end screen
function deadGame(){
  if(snake.status == "true"){
    textFont()
      fill(255, 255, 255);
      rect(125, 275, 550, 200);
      fill(0, 0, 0);
      textAlign(CENTER);
      textSize(50);
      text("You Lose", 400, 350)
      text("Refresh to restart", 400, 425)
      image(image, 400, 400);
//w to restart game
    if(keyCode === 87){
      snake = 0
      loadSnake();
      gameStart();
      score = 0;

    }
  }
}
//when first started - show start screen
function gameStart(){
  if(start == "true"){
    textFont()
    fill(255, 255, 255);
    rect(125, 275, 550, 200);
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(50);
    text("Snake Game", 400, 350)
    text("Press spacebar to start", 400, 425)

  }
}
