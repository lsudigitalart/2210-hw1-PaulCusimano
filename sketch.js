function setup() {
  createCanvas(600, 600);

  background(0);
  drawBackgroundPattern();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      catFace(100 + i * 100, 100 + j * 100);
    }
  }
  fill(255, 255, 255);
}

function draw() {}

function drawBackgroundPattern() {
  let dotSize = 6;
  let spacing = 12;
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      if ((x / spacing + y / spacing) % 2 === 0) {
        fill(255); // White
      } else {
        fill(0); // Black
      }
      ellipse(x, y, dotSize, dotSize);
    }
  }
}

function catFace(x, y) {
  // ears
  stroke(0, 0, 0);
  ellipse(x - 37, y - 20, 25, 90);
  ellipse(x + 37, y - 20, 25, 90);

  // head circle
  ellipse(x, y, 100, 90);

  // hide line between head and ears
  noStroke();
  ellipse(x - 37, y - 20, 22, 85);
  ellipse(x + 37, y - 20, 22, 85);
  stroke(0, 0, 0);

  // smaller ear ellipse to give depth
  fill(255, 255, 255);
  ellipse(x - 37, y - 20, 15, 70);
  ellipse(x + 37, y - 20, 15, 70);

  noStroke();
  ellipse(x, y, 98, 80);
  stroke(0, 0, 0);

  // eyes
  catEye(x - 25, y);
  catEye(x + 25, y);

  // mouth
  catNose(x, y + 22);
}

function catNose(x, y) {
  fill(255, 255, 255);
  ellipse(x, y, 10, 10);
  ellipse(x - 7, y + 5, 15, 15);
  ellipse(x + 7, y + 5, 15, 15);

  noStroke();
  ellipse(x - 8, y + 4, 15, 15);
  ellipse(x + 8, y + 4, 15, 15);
}

function catEye(x, y, inverted = false) {
  stroke(0, 0, 0);
  fill(255);
  ellipse(x, y, 45, 40);
  fill(0);
  ellipse(x, y, 5, 25);
}
