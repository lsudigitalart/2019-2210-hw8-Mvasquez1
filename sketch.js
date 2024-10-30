let genCreature = false;
let creatureW = 0;
let creatureH = 0;
let creatureSize = 0;
let creatureColor;
let eyeX, eyeY;
let horns, legs;

function preload() {}

function setup() {
    createCanvas(600, 500);
    // draw when pressed 
    noLoop();  
}

function draw() {
    background(100); 

    if (genCreature) {
        creatureMaker();  // Call creatureMaker to draw the creature
        genCreature = false; 
    }
}

function creatureMaker() {
    // randomize size, width, height, and color for the creature
    creatureSize = random(150, 225);   // Random size of the creature
    // half of canvas to make center 
    creatureW = random(150, 300);      //random width
    creatureH = random(150, 300);      // random height
    creatureColor = color(random(255), random(255), random(255));  // random color

    //random eye positions, relative to the center of creatur
    eyeX = random(-creatureW / 4, creatureW / 4);  
    eyeY = random(-creatureH / 4, creatureH / 4);  

    // draw horns or legs
    extraParts();

    // creature's body
    fill(creatureColor);
    noStroke();
    ellipse(width / 2, height / 2, creatureW, creatureH);  // Draw ellipse for body

    // Draw eyes 
    fill(color(random(220,225), random(220,255), random(220,255)));  // muted white colros for eyes
    ellipse(width / 2 + eyeX, height / 2 - eyeY, creatureSize / 5, creatureSize / 5); // left
    ellipse(width / 2 - eyeX, height / 2 - eyeY, creatureSize / 5, creatureSize / 5); // right
    // Black for pupils
    fill(0);  
    ellipse(width / 2 + eyeX, height / 2 - eyeY, creatureSize / 10, creatureSize / 10); //left
    ellipse(width / 2 - eyeX, height / 2 - eyeY, creatureSize / 10, creatureSize / 10); //right
}

function extraParts() {
    // Randomize whether the creature has horns or legs, or both
    horns = random([true, false]);  // 50% chance 
    legs = random([true, false]);   // 50% chance 

    // if the creature has horns, draw them
    if (horns) {
        fill(random(255), random(255), random(255));  // Random color for horns
        triangle(width / 2 - creatureW / 3, height / 2 -  60, 
                 width / 2 - creatureW / 4, height / 2 - 50, 
                 width / 2 - creatureW / 6, height / 2 - creatureH / 2 - 20);  // left horn
        triangle(width / 2 + creatureW / 6, height / 2 - creatureH / 2 - 20, 
                 width / 2 + creatureW / 4, height / 2 -  50, 
                 width / 2 + creatureW / 3, height / 2 - 60);  // right horn
    }

    // If the creature has legs, draw them
    if (legs) {
        fill(random(100, 255), random(100, 255), random(100, 255));  // Random color for legs
        rect(width / 2 - creatureW / 4, height / 2 + creatureH / 4, 20, 70);  // Left leg
        rect(width / 2 + creatureW / 4 - 20, height / 2 + creatureH / 4, 20, 70);  // Right leg
    }
}

function mousePressed() {
    genCreature = true;  // creature make
    redraw();  // redraw for new creature
}