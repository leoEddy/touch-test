let block;
let isDragging = false; // Track if the block is being dragged
let offsetX, offsetY;   // To store the offset from the touch/mouse location to the block's origin

function setup() {
  createCanvas(400, 400);
  block = { x: width / 2 - 50, y: height / 2 - 50, w: 100, h: 100 }; // A single block in the center
}

function draw() {
  background(220);
  
  // Draw the block
  fill(150, 200, 250);
  stroke(0);
  rect(block.x, block.y, block.w, block.h);

  // Display instructions
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  if (isDragging) {
    text("Dragging...", width / 2, 30);
  } else {
    text("Touch or click the block to drag", width / 2, 30);
  }
}

// Mouse events
function mousePressed() {
  if (mouseX > block.x && mouseX < block.x + block.w && mouseY > block.y && mouseY < block.y + block.h) {
    isDragging = true;
    offsetX = mouseX - block.x;
    offsetY = mouseY - block.y;
  }
}

function mouseDragged() {
  if (isDragging) {
    block.x = mouseX - offsetX;
    block.y = mouseY - offsetY;
  }
}

function mouseReleased() {
  isDragging = false;
}

// Touch events
function touchStarted() {
  if (touches.length > 0 && touches[0].x > block.x && touches[0].x < block.x + block.w && touches[0].y > block.y && touches[0].y < block.y + block.h) {
    isDragging = true;
    offsetX = touches[0].x - block.x;
    offsetY = touches[0].y - block.y;
  }
  return false; // Prevent default
}

function touchMoved() {
  if (isDragging && touches.length > 0) {
    block.x = touches[0].x - offsetX;
    block.y = touches[0].y - offsetY;
  }
  return false; // Prevent default
}

function touchEnded() {
  isDragging = false;
  return false; // Prevent default
}