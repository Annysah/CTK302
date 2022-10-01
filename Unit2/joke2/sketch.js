let state = 0;
let timer = 0;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0: 
      background("#ee9ca7");
      textSize(50)
      fill("white");
      stroke("#9f2b68");
      text("Why did the kid \nbring a ladder to school?", width / 2, height / 2 - 70);
      fill("black");
      textSize(30);
      stroke(255);
      text("Because she wanted to go to high school", width/2, height /2 + 170);
      break;

    case 1:
      background("#20bdff");
      textSize(50)
      fill("white");
      stroke("#9f2b68");
      text("What do you call \n two birds in love?", width / 2, height / 2 - 70);
      fill("black");
      textSize(30);
      stroke(255);
      text("Tweethearts", width/2, height /2 + 170);
      break;

      case 2:
        background("#dd3e54");
        textSize(50)
        fill("white");
        stroke("#9f2b68");
        text("What is a computer's \n favorite snack?", width / 2, height / 2 - 70);
        fill("black");
        textSize(30);
        stroke(255);
        text("Computer chips", width/2, height /2 + 170);
        break;
  }
  noFill();
  rect(70, 25, 650, 440, 20);

  timer++;
  if (timer > 4 * 60) {
    timer = 0;
    state++;

    if (state > 2) {
      state = 0;
    }
  }
}
