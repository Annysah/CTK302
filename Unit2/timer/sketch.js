let timer = 0;
let state = 0;
let image1, image2, image3


function setup() {
  createCanvas(500, 500);
  imageMode(CENTER) ;
  image1 = loadImage('assets/1.jpg');
  image2 = loadImage('assets/2.jpg');
  image3 = loadImage('assets/3.jpg');
}

function draw() {
  switch (state) {
    case 0:
      background("pink");

      text("My winter inspiration look 1", 100, 50)
      textSize(20);

      image(image1, width/2, height/2, 350, 350);
      timer++;
      if (timer > 1 * 60) {
        timer = 0;
        state = 1
      }
      break;

    case 1:
      background("orange");

      text("My winter inspiration look 2", 100, 50)
      textSize(20);

      image(image2, width/2, height/2 , 350, 350);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 2
      }
      break;

    case 2:
      background("green");

      text("My winter inspiration look 3", 100, 50)
      textSize(20);

      image(image3, width/2, height/2, 350, 350);
      if (timer > 5 * 60) {
        timer = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) {
    state = 0;
  }
}
