let touchColor;
function setup() {
  createCanvas(400, 400);
  touchColor = color(200, 100, 100);

}

function draw() {
  background(220);

  // Draw instructions
  textSize(16);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Touch and drag to change color", width/2, 20);

  // Draw a rectangle that chnages color when touched
  fill(touchColor);
  noStroke();
  rectMode(CENTER);
  rect(width/2, height/2, 150, 150);
}

// Detects a touch start
function touchStrated(){
  touchColor = color(random(255), random(255), random(255));
  return false; // Prevent default behavior
}

// Detects draginng motion
function touchMove() {
  // Move rectangle position based on touch
  fill(touchColor);
  rect(mouseX, mouseY, 150, 150);
  return false; 
}