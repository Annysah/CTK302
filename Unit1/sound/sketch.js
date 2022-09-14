let evolution, button;

function preload() {
  evolution = loadSound("assets/evolution.mp3");
  button = loadImage("assets/button.png");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(button, width/2, height/2, 400, 400);
}

function mouseReleased() {
  if (evolution.isPlaying()) {
    evolution.pause();
  } else {
    evolution.play();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
