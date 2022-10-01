let state = -1;
let s1, s2, s3;
let i1, i2, i3;

function preload() {
  s1 = loadSound("assets/evolution.mp3");
  s2 = loadSound("assets/elevate.mp3");
  s3 = loadSound("assets/hey.mp3");
  i1 = loadImage("assets/i1.webp");
  i2 = loadImage("assets/i2.webp");
  i3 = loadImage("assets/i3.webp");
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
}

function draw() {
  textSize(50);
  switch (state) {
    case -1:
      background("orange");
      text("Please click to start", 20, 250);
      break;

    case 0:
      background("red");
      text("evolution", 50, 490);
      image(i1, width / 2, height / 2, 400, 400);
      if (!s1.isPlaying()) {
        s1.play();
      }
      break;

    case 1:
      background("#ff0080");
      text("elevate", 50, 490);
      image(i2, width / 2, height / 2, 400, 400);
      if (!s2.isPlaying()) {
        s2.play();
      }
      break;

    case 2:
      background("purple");
      text("hey", 50, 490);
      image(i3, width / 2, height / 2, 400, 400);
      if (!s3.isPlaying()) {
        s3.play();
      }
      break;
  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;
}

function touchStarted() {
  getAudioContext().resume();
}

