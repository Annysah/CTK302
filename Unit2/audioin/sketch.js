let mic;
let vol;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  vol = mic.getLevel();
  
  stroke("#ff0080");
  strokeWeight(vol * 10);
  
  ellipse(random(width), random(height), (vol * 300), vol * 300);
  
}


function touchStarted() {
  getAudioContext().resume();
}

