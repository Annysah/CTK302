let numberOfTouches;
let image1, image2, image3, image4;

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  image1 = loadImage("assets/1.jpg");
  image2 = loadImage("assets/2.jpg");
  image3 = loadImage("assets/3.jpg");
  image4 = loadImage("assets/4.jpg");
}

function draw() {
  clear();
  background("#56b4d3");
  numberOfTouches = touches.length;
  text(numberOfTouches + " touches", 5, 50);
  textSize(20);

  switch (numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22);
      break;

    case 1:
      text(
        "Touch with one finger and see Nigerian Egusi soup and Pounded yam",
        5,
        22
      );
      image(image1, width / 2, height / 2, 250, 250);
      break;

    case 2:
      text(
        "Touch with two fingers and see Nigerian Ogbono soup with Eba",
        5,
        22
      );
      image(image2, width / 2, height / 2, 250, 250);
      break;

    case 3:
      text("Touch with three fingers and see Nigerian Moimoi", 5, 22);
      image(image3, width / 2, height / 2, 250, 250);
      break;

    case 4:
      text("Touch with four fingers and see Nigerian Jollof rice", 5, 22);
      image(image4, width / 2, height / 2, 250, 250);
      break;
  }
}
