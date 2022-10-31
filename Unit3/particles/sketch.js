let particles = [];

let fireworkSound;

function preload() {
  fireworkSound = loadSound("assets/firework.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background('black');

  if (random(1) > 0.95) {
    for (let i = 0; i < 50; i++) {
      let particle = new Particle();
      particles.push(particle);
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].display();
    particles[i].move();
  }

  if (!fireworkSound.isPlaying()) {
    fireworkSound.play();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(0, 0);
    this.vel = p5.Vector.random3D().normalize().mult(random(3, 5));
  }

  display() {
    push();

    noStroke();
    fill('#d96733');

    translate(this.pos.x, this.pos.y);

    textSize(20);
    rect(this.pos.x, this.pos.y, 3, 3);

    pop();
  }

  move() {
    this.pos.add(this.vel);
  }

}
