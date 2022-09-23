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
  let color1 = color("#33ccff");
  let color2 = color("#ff99cc");

  setGradient(0, 0, width, height, color1, color2, "Y");

  fill("#fff");

  textSize("180");
  textFont(font, 70);
  text("Annysah loves potatoes", x, 250);
  x += 2.5;

  if(x > width) {
    x = -1000
  }
}

//A function from the p5js LinearGradient example
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == "X") {
    for (let j = x; j <= x + w; j++) {
      let inter2 = map(j, x, x + w, 0, 1);
      let d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  }
}