let catcherPos;
let state = 0;
let timer = 0;
let image1, image2, image3, image4
let piece1, piece2, piece3, piece4, piece5, piece6, piece7
let pieces = [];
let catcher;
let winSound, loseSound;

function preload() {
  winSound = loadSound("assets/winSound.mp3");

  loseSound = loadSound("assets/loseSound.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  image1 = loadImage('assets/menu.png');
  image2 = loadImage('assets/play.png');
  image3 = loadImage('assets/win.png');
  image4 = loadImage('assets/lose.png');

  piece1 = loadImage('assets/piece1.png');
  piece2 = loadImage('assets/piece2.png');
  piece3 = loadImage('assets/piece3.png');
  piece4 = loadImage('assets/piece4.png');
  piece5 = loadImage('assets/piece5.png');
  piece6 = loadImage('assets/piece6.png');
  piece7 = loadImage('assets/piece7.png');

  catcher = loadImage('assets/catcher.png');

  // Spawn objects
  for (let i = 0; i < 5; i++) {
    pieces.push(new Piece());
  }

  // initialize the "catcher position" vector
  catcherPos = createVector(width / 2, height - 150);
}

function draw() {
  switch (state) {
    case 0:
      background(image1);
      fill('#d40000');
      textSize(15);
      text("Click to Play", width/2 - 40, height/2 + 80);
      textSize(12);
      text("Use either the arrow keys or the A & D keys to move left & right and J & L to move up & down", width/2 - 245, height/2 + 280);
      break;

    case 1:
      game();
      timer++;
      if (timer > 20 * 60) {
        timer = 0;
        state = 3;
      } 
      break;

    case 2:
      background(image3);
      fill("green");
      textSize(15);
      text("Click to replay", width/2 - 40, height/2 + 80);
      if (winSound.isPlaying()) {
        winSound.stop();
      } else {
        winSound.play();
      }
      break;

    case 3:
      background(image4);
      textSize(15);
      text("Click to replay", width/2 - 40, height/2 + 80);
      if (loseSound.isPlaying()) {
        loseSound.stop();
      } else {
        loseSound.play();
      }
      break;
  }
}

function resetTheGame() {
  piece = [];

  for (let i = 0; i < 5; i++) {
    pieces.push(new Piece());
  }

  timer = 0;
}

function mouseReleased() {
  switch (state) {
    case 0: //menu screen
      state = 1;
      break;

    case 2: //win screen
      resetTheGame(); 
      winSound.stop();
      state = 0;
      break;

    case 3: //lose screen
      resetTheGame();
      state = 0;
      break;

  }
}

function game() {
  background(image2);

  // operate on every piece
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].display();
    pieces[i].move();

    if (pieces[i].pos.dist(catcherPos) < 50) {
      pieces.splice(i, 1);
    }
  }

  if (pieces.length == 0) {
    timer = 0;
    state = 2;
  }

  // add the catcher
  image(catcher, catcherPos.x, catcherPos.y, 100, 100)
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) catcherPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) catcherPos.x += 5;
  if (keyIsDown(UP_ARROW)) catcherPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) catcherPos.y += 5;

  if (keyIsDown(65)) catcherPos.x -= 5;
  if (keyIsDown(68)) catcherPos.x += 5;
  if (keyIsDown(74)) catcherPos.y -= 5;
  if (keyIsDown(76)) catcherPos.y += 5;
}

class Piece {
  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100); // initialize your attributes here
    this.velocity = createVector(random(-3, 3), random(-3, 3));
  }
  // methods

  display() {
    image(piece1, this.pos.x, this.pos.y, 35, 35);
    image(piece2, this.pos.x - 50, this.pos.y - 50, 25, 25);
    image(piece3, this.pos.x - 40, this.pos.y - 40, 30, 30);
    image(piece4, this.pos.x, this.pos.y, 30, 30);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
