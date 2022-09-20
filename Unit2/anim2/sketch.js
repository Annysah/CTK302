let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('yellow');
  push()
  translate(x, -150);
  avatar();

  x += 5;
  if (x > width) {
    x = -600;
  }
  pop();
}

function avatar() {
  fill("#ffffff");
  ellipse(80, 350, 80, 70);

  stroke(10);
  fill(0);
  ellipse(65, 340, 15, 15);
  ellipse(95, 340, 15, 15);
  
  strokeWeight(10);
  line(70, 365, 90, 365);

  line(40, 410, 10, 420);
  line(100, 410, 150, 420);

  fill("#ffffff");
  noStroke();
  ellipse(80, 430, 95, 95);

  fill(0);
  ellipse(70, 480, 20, 30);

  fill(0);
  ellipse(95, 480, 20, 30);
}
