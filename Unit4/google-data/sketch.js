let blocks = [];
let url = "";

function preload() {
  sound = loadSound("assets/sound.wav");
}

function setup() {
  let key = "1B63n8NsOYyZzjmEbu6143ZTM8LwPQfCU3Ni-1Ny_wDQ";

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1";

  loadJSON(url, gotData);

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  rectMode(CENTER);
}

function gotData(data) {
  console.log(data);

  // iterate through the array of data and create an object and push it on an array called blocks
  for (let i = 0; i < data.length; i++) {
    blocks.push(new Block(
      data[i]["What is your most used social media app"], 
      data[i]["Which one of the following is your favourite browser?"],
      data[i]["Which one of these best describes your alone time?"],
      data[i]["Would you rather be a/an"],
      data[i]["What is your favourite board game?"]
    ));

    if (!sound.isPlaying()) {
      sound.play();
    }
  }
}

function draw() {
  background("#feb873");

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].display();
  }
}

// my Block class
class Block {
  constructor(social, browser, time, career, game ) {
    this.social = social;
    this.browser = browser;
    this.time = time;
    this.career = career;
    this.game = game;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 3), 0);
  }

  display() {
    fill("white");
    rect(this.pos.x, this.pos.y + 25, 200, 100, 20);
    fill("#eb998b");

    text(
      this.social + "\n" + this.browser + "\n" + this.time + "\n" + this.career + "\n" + this.game, 
      this.pos.x, 
      this.pos.y
    );
    
    this.pos.add(this.vel);
    if(this.pos.x > width) this.pos.x = 0;
  }
}
