let state = 0;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0: 
      background("#2193b0");
      textSize(50)
      fill("white");
      stroke("#9f2b68");
      text("What do you call \na boomerang \nthat wouldn't come back?", width / 2, height / 2 - 70);
      fill("black");
      textSize(30);
      stroke(255);
      text("A stick", width/2, height /2 + 170);
      break;

    case 1:
      background("#1488cc");
      textSize(50)
      fill("white");
      stroke("#9f2b68");
      text("What did one toilet \n say to the other?", width / 2, height / 2 - 70);
      fill("black");
      textSize(30);
      stroke(255);
      text("You look a bit flushed", width/2, height /2 + 170);
      break;

      case 2:
        background("#9796f0");
        textSize(50)
        fill("white");
        stroke("#9f2b68");
        text("What time is it when \n the clock strikes 13?", width / 2, height / 2 - 70);
        fill("black");
        textSize(30);
        stroke(255);
        text("Time to get a new clock", width/2, height /2 + 170);
        break;
  }
  line(70, 50, 730, 50);
  line(70, 450, 730, 450);
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
}
