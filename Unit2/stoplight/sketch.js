let state = 0;
let timer = 0;

let rectCordX = 0;
let velocity = 3;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() {
  background(220);

  line(320, 0, 320, 600);
  line(400, 0, 400, 600);

  //traffic light
  fill("black");
  rect(490, 180, 100, 300, 20);

  //traffic light handle
  rect(550, 130, 90, 30);

  switch (state) {
    case 0: //green
      fill("grey");
      ellipse(490, 180 - 100, 60, 60);
      ellipse(490, 180, 60, 60);
      fill("green");
      ellipse(490, 180 + 100, 60, 60);
      velocity = 10;
      break;

    case 1: //yellow
      fill("grey");
      ellipse(490, 180 - 100, 60, 60);
      fill("yellow");
      ellipse(490, 180, 60, 60);
      fill("grey");
      ellipse(490, 180 + 100, 60, 60);
      velocity = 5;
      break;

    case 2: //red
      fill("red");
      ellipse(490, 180 - 100, 60, 60);
      fill("grey");
      ellipse(490, 180, 60, 60);
      ellipse(490, 180 + 100, 60, 60);
      if (rectCordX >= width / 2 - 50 && rectCordX <= width / 2) {
        velocity = 0;
      }
      break;
  }

  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 2) state = 0;
  }

  //moving car
  //body
  fill("white");
  rect(rectCordX, height - 75, 100, 50);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(rectCordX, height - 75, 60, 30);
  //car tyres
  fill("white");
  rect(rectCordX - 30, height - 50, 10, 5);
  rect(rectCordX + 30, height - 50, 10, 5);
  rect(rectCordX - 30, height - 100, 10, 5);
  rect(rectCordX + 30, height - 100, 10, 5);

  rectCordX += velocity;
  if (rectCordX > width) rectCordX = 0;

}

function mouseReleased() {
  state++;
  if (state > 3) state = 0;
}
