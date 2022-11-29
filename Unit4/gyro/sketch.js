let alpha = 0, beta = 0 , gamma = 0;
let testImage, font1;
let xPosition = 0;
let yPosition = 0;
let x = 0, y = 0, z = 0 ;


function setup() {
  createCanvas(windowWidth, windowHeight);
  testImage = loadImage("assets/test.avif");
  font1 = loadFont('assets/Smiley.ttf');
  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {
  background('#d69cbc');
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push();

  translate(xPosition, yPosition);

  rotate(radians(alpha));
  image(testImage, 0, 100, 500, 500);

  pop();

  // Text that makes CTK type in the background
  fill('white');
  noStroke();
  textFont(font1);
  textSize(200);
  textAlign(CENTER);
  text("Wow", width / 2, height / 2 - 110);
}



// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
