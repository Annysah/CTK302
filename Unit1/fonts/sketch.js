let font1, font2;

function preload() {
  font1 = loadFont('assets/Maytra.ttf');
  font2 = loadFont('assets/Smiley.ttf');
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER);
}

function draw() {
  background("#bac8f7");

  fill("orange");
  stroke(255);
  strokeWeight(3);
  
  textFont(font1, 70);
  text("This is the first font practice", width/2, height/2);

  textFont(font2, 70);
  text("This is the second font practice", width/2, height/2 + 100);
}


