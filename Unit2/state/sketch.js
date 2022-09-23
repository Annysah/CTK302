let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  switch (state) {
    case 0:
      state0();
      break;

    case 1:
      state1();
      break;

    case 2:
      state2();
      break;

    case 3:
      state3();
      break;

  }
}

function state0() {
  background("pink");
  for (let j = 0; j < height; j += 25) {
    for (let i = 0; i < width; i += 25) {
      rect(i, j, 20, 20);
    }
  }
}

function state1() {
  background("orange");
  for (let j = 0; j < height; j += 25) {
    for (let i = 0; i < width; i += 25) {
      rect(i, j, 20, 20);
      rotate(45);
    }
  }
}

function state2() {
  background("black");
  fill("white");
  rect(random(width), random(height), random(10, 100), random(50, 10));
  text("Black & White", 100, 100);
}

function state3() {
  background("#4bc0c8");
  for (let j = 10; j < height; j += 25) {
    for (let i = 10; i < width; i += 25) {
      fill(0, 0, random(200));
      ellipse(i, j, 20, 20);
    }
  }
}


function mouseReleased() {
  state++;
  if (state > 3) {
    state = 0;
  }
}
