let block;
let dragging = false;
let offsetX, offsetY;

function setup() {
  createCanvas(400, 400);
  block = new Block(150, 150, 100, 60, 5); // Position and size of the block
}

function draw() {
  background(220);

  // Display the block
  block.show();
}

function mousePressed() {
  if (block.isHovered(mouseX, mouseY)) {
    dragging = true;
    offsetX = block.x - mouseX;
    offsetY = block.y - mouseY;
  }
}

function mouseDragged() {
  if (dragging) {
    block.x = mouseX + offsetX;
    block.y = mouseY + offsetY;
  }
}

function mouseReleased() {
  dragging = false;
}

function touchStarted() {
  if (block.isHovered(touchX, touchY)) {
    dragging = true;
    offsetX = block.x - touchX;
    offsetY = block.y - touchY;
  }
  return false;
}

function touchMoved() {
  if (dragging) {
    block.x = touchX + offsetX;
    block.y = touchY + offsetY;
  }
  return false;
}

function touchEnded() {
  dragging = false;
  return false;
}

// Block class
class Block {
  constructor(x, y, w, h, r) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
  }

  show() {
    fill(180);
    stroke(0);
    rect(this.x, this.y, this.w, this.h, this.r);
  }

  isHovered(px, py) {
    return px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h;
  }
}