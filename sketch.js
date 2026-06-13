function setup() {
  createCanvas(400, 400);
  background(245, 245, 240);
}

function draw() {
  noStroke();
  fill(random(200, 255), random(100, 150), random(80, 120), 20);
  circle(random(width), random(height), random(10, 50));
}