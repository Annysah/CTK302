function setup() {
  createCanvas(700, 500);
}

function draw() {
  //Linear Gradient Background
  let color1 = color("#3038bf");
  let color2 = color("#34e89e");

  setGradient(0, 0, width, height, color1, color2, "Y");

  // Snow & Stars
  if (mouseIsPressed) {
    for (let i = 0; i < 150; i++) {
      let coordinateX = random(width - 100);
      let coordinateY = random(height);

      noStroke();
      fill("#fff");
      ellipse(coordinateX, coordinateY, 1.5, 1.5);
    }
  } else {
    frameRate(3);
    for (let i = 0; i < 20; i++) {
      let coordinateX = random(width);
      let coordinateY = random(height - 250);

      noStroke();
      fill("#ffff00");
      ellipse(coordinateX, coordinateY, 3, 3);
    }
  }

  //Sun or Moon
  if (mouseIsPressed) {
    fill("#ffffff");
    ellipse(90, 50, 50, 50);
  } else {
    fill("#d9dde3");
    ellipse(90, 50, 50, 50);
  }

  //Tree
  fill("#53350a");
  rect(450, 200, 40, 400);

  if (mouseIsPressed) {
    fill("#fff");
    ellipse(470, 200, 200, 200);
  } else {
    fill("#288b22");
    ellipse(470, 200, 200, 200);
  }

  fill("#53350a");
  rect(490, 350, 50, 5);

  if (mouseIsPressed) {
    fill("#fff");
    ellipse(550, 350, 30, 30);
  } else {
    fill("#288b22");
    ellipse(550, 350, 30, 30);
  }

  //Snowman
  if (mouseIsPressed) {
    fill("#ffffff");
    ellipse(80, 350, 80, 70);

    stroke(10);
    ellipse(65, 340, 15, 15);
    ellipse(95, 340, 15, 15);
    fill(0);
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
