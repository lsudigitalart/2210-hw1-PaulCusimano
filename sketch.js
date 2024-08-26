function setup() {
    createCanvas(600, 600);

    background(0, 0, 0);

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            catFace(100 + i * 100, 100 + j * 100);
        }
    }


    fill(255, 255, 255);
}

function catFace(x, y) {
    // head circle
    ellipse(x, y, 100, 90);

    noStroke();
    // ears
    ellipse(x-37, y-20, 25, 90);
    ellipse(x+37, y-20, 25, 90);

    // eyes
    stroke(0, 0, 0);
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
}

function catEye(x, y) {
    fill(255, 255, 255);
    ellipse(x, y, 45, 40);
    fill(0, 0, 0);
    ellipse(x, y, 5, 25);
}