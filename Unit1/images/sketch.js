let image1, image2, image3

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER) ;
  image1 = loadImage('assets/code.png');
  image2 = loadImage('assets/cook.jpg');
  image3 = loadImage('assets/download.jpg');
}

function draw() {
  background("orange");
  image(image1, width/2, height/2 - 120, 100, 100);
  image(image2, width/2, height/2, 100, 100);
  image(image3, width/2, height/2 + 120, 100, 100);
}
