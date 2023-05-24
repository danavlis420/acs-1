//obra original:
//https://www.wassilykandinsky.net/images/works/518.jpg?version=7
//colores
let a1 = "#CB655B";
let a2 = "#E9D8A6";
let a3 = "#9B2226";
let a4 = "#CA6702";
let a5 = "#EE9B00";
let a6 = "#005F73";
let a7 = "#001219";
let b1 = "#2b0948";
let b2 = "#461846";
let b3 = "#612844";
let b4 = "#7d3742";
let b5 = "#98463f";
let b6 = "#b3563d";
let b7 = "#ce653b";
let col1 = a1;
let col2 = a2;
let col3 = a3;
let col4 = a4;
let col5 = a5;
let col6 = a6;
let col7 = a7;

function setup() {
  frameRate(24);
  createCanvas(380, 500);
}

function draw() {
  background(col1);
  //aros
  noStroke();
  fill(col6);
  triangle(150, 120, 230, 140, 165, 50);
  fill(col4);
  circle(270, 150, 80);
  circle(275, 260, 160);
  //cabeza
  fill(col2);
  ellipse(150, 350, 350, 500);
  fill(col1);
  rect(0, 100, 140, 500);
  fill(col1);
  rect(130, 400, 200, 300);
  //cuerpo
  fill(col3);
  circle(150, 480, 220);
  fill(col1);
  rect(170, 350, 120, 250);
  fill(col2);
  rect(170, 340, 130, 60);
  fill(col1);
  rect(0, 480, 170, 120);
  //adorno
  fill(col5);
  triangle(100, 10, 185, 10, 150, 190);
  fill(col3);
  triangle(220, 20, 230, 25, 80, 135);
  fill(col7);
  triangle(265, 37, 283, 42, 75, 160);
  fill(col3);
  triangle(40, 70, 100, 70, 40, 50);
  fill(col2);
  triangle(40, 70, 100, 70, 40, 90);
  //extra
  fill(col6);
  rect(210, 420, 100, 20);
  fill(col7);
  rect(210, 460, 100, 22);
  fill(col5);
  rect(70, 335, 45, 15);
  fill(col6);
  ellipse(60, 270, 65);
  if (mouseIsPressed == true) {
    col1 = b1;
    col2 = b2;
    col3 = b3;
    col4 = b4;
    col5 = b5;
    col6 = b6;
    col7 = b7;
  } else {
    col1 = a1;
    col2 = a2;
    col3 = a3;
    col4 = a4;
    col5 = a5;
    col6 = a6;
    col7 = a7;
  }
}
