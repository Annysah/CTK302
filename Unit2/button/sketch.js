let state = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      background("#0083b0");
      break;

    case 1:
      background("#eaafc8");
      break;

    case 2:
      background("#ff416c");
      break;

    case 3:
      background("#c06c84");
      break;
  }
  noStroke();
  rect(width / 2, height - 100, 150, 50, 20);
}

function mouseReleased() {
  if (
    mouseX > width / 2 - 75 &&
    mouseX < width / 2 + 75 &&
    mouseY > height - 125 &&
    mouseY < height - 75
  ) {
    state++;
    if (state > 3) state = 0;
  }
}
