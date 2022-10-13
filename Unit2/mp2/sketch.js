let state = 0;
let scene = 0;
let timer = 0;

let x, y;

let rectCordX = 0;
let velocity = 3;

let s1, s2, s3;

let font1, font2;

let image1, image2;

function preload() {
  s1 = loadSound("assets/sgo.mp3");
  s2 = loadSound("assets/sslow.mp3");
  s3 = loadSound("assets/sstop.mp3");

  image1 = loadImage("assets/woman.png");
  image2 = loadImage("assets/walk.png");

  font1 = loadFont("assets/fonts.ttf");
  font2 = loadFont("assets/comics.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  x = width - 550;
  y = height;
}

function draw() {
  switch (scene) {
    case 0:
      scene0();
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        scene = 1;
      }
      break;

    case 1:
      scene1();
      timer++;
      if (timer > 8 * 60) {
        timer = 0;
        scene = 2;
      }
      break;

    case 2:
      scene2();
      break;
  }
}

function scene0() {
  background("orange");
  textFont(font1, 70);
  textLeading(100);
  textAlign(CENTER);
  text(
    "Stoplights",
    width / 2,
    height / 2
  );
}

function scene1() {
  background("white");
  let texts = "Why are stoplights important? \n Stoplights are very important on every busy road; \n - It helps drivers to know when to stop and when to drive. \n - It prevents passersby from jumping into middle of the road \n   especially when vehicles are at high speed. \n - When the light turns green, vehicles move and passersby needs \n   to wait in order to prevent accident of any kind. \n - When the light turns red, vehicles needs to stop so passersby can \n   cross the road without any issues. \n - This helps prevent the occurence of road accidents to a great extent, \n   thereby keeping you and everyone in the community safe. \n                            Wait to see how it works!"
  textFont(font2, 30);
  textLeading(45);
  textAlign(LEFT);
  text(
    texts,
    50,
    50,
  );
}

function scene2() {
  //Linear Gradient Background

  let color1 = color("#cfdef3");
  let color2 = color("#e0eafc");

  setGradient(0, 0, width, height, color1, color2, "Y");

  //Crossing Lines
  stroke(0);
  strokeWeight(7);
  line(width - 300, 0, width - 300, height);
  line(width - 450, 0, width - 450, height);

  car1();
  car2();
  car3();

  //traffic light
  noStroke();
  fill("black");
  rect(width - 200, 180, 100, 300, 20);

  //traffic light handle
  noStroke();
  rect(width - 90, 130, 140, 30);

  switch (state) {
    case 0: //green
      noStroke();
      fill("grey");
      ellipse(width - 200, 180 - 100, 60, 60);
      ellipse(width - 200, 180, 60, 60);
      fill("green");
      ellipse(width - 200, 180 + 100, 60, 60);
      velocity = 12;
      timer++;
      if (timer > 7 * 60) {
        timer = 0;
        state = 1;
      }
      if (!s1.isPlaying()) {
        s1.play();
      }
      break;

    case 1: //yellow
      noStroke();
      fill("grey");
      ellipse(width - 200, 180 - 100, 60, 60);
      fill("yellow");
      ellipse(width - 200, 180, 60, 60);
      fill("grey");
      ellipse(width - 200, 180 + 100, 60, 60);

      velocity = 7.5;

      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 2;
      }

      if (!s2.isPlaying()) {
        s2.play();
      }
      break;

    case 2: //red
      noStroke();

      fill("red");
      ellipse(width - 200, 180 - 100, 60, 60);

      fill("grey");
      ellipse(width - 200, 180, 60, 60);
      ellipse(width - 200, 180 + 100, 60, 60);

      image(image1, x, y, 300, 350);
      image(image2, x + 120, y + 400, 100, 150);

      x = x + random(-1, 1);
      y = y - 1;

      if (rectCordX >= width / 2 - 50 && rectCordX <= width / 2) {
        velocity = 0;
      }
      break;
  }
  
  rectCordX += velocity;
  if (rectCordX > width) rectCordX = 0;
}

function car1() {
  //moving car
  //body
  stroke(0);
  strokeWeight(10);

  fill("white");
  rect(rectCordX, height - 75, 100, 50);
  rect(rectCordX, height - 75, 60, 30);

  //car tyres
  fill("white");
  rect(rectCordX - 30, height - 50, 10, 5);
  rect(rectCordX + 30, height - 50, 10, 5);
  rect(rectCordX - 30, height - 100, 10, 5);
  rect(rectCordX + 30, height - 100, 10, 5);
}

function car2() {
  //moving car
  //body
  stroke(0);
  strokeWeight(7);

  fill("blue");
  rect(rectCordX - 200, height - 400, 150, 80, 5);
  rect(rectCordX - 200, height - 400, 80, 50, 5);

  //car tyres
  rect(rectCordX - 150, height - 350, 6, 5, 2);
  rect(rectCordX - 250, height - 350, 6, 5, 2);
  rect(rectCordX - 150, height - 450, 6, 5, 2);
  rect(rectCordX - 250, height - 450, 6, 5, 2);
}

function car3() {
  //moving car
  //body
  stroke(0);
  strokeWeight(10);

  fill("grey");
  rect(rectCordX - 500, height - 200, 130, 80, 20);
  rect(rectCordX - 500, height - 200, 60, 50, 5);

  //car tyres
  rect(rectCordX - 460, height - 250, 10, 5);
  rect(rectCordX - 540, height - 250, 10, 5);
  rect(rectCordX - 460, height - 150, 10, 5);
  rect(rectCordX - 540, height - 150, 10, 5);
}

function mouseReleased() {
  state++;
  if (state > 3) state = 0;
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
