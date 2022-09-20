let x = 0;
let font;

function preload() {
  font = loadFont('assets/Maytra.ttf')
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  background("orange");

  fill("#fff");

  textSize("180");
  textFont(font, 70);
  text("Annysah loves potatoes", x, 250);
  x += 2.5;

  if(x > width) {
    x = -1000
  }
}
