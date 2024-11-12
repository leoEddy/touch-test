function setup() {
  createCanvas(400, 400);
  background(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Touch the screen to test", width / 2, height / 2);
}

function draw() {
  // We’re not doing anything in draw, this is just for touch testing
}

function touchStarted() {
  background(200, 100, 100);
  fill(255);
  text("Touch Started", width / 2, height / 2);
  return false; // Prevents any default behavior
}

function touchMoved() {
  background(100, 200, 100);
  fill(255);
  text("Touch Moved", width / 2, height / 2);
  return false;
}

function touchEnded() {
  background(100, 100, 200);
  fill(255);
  text("Touch Ended", width / 2, height / 2);
  return false;
}