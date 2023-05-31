//obra original:
//https://www.wassilykandinsky.net/images/works/518.jpg?version=7
//colores
let col1 = "#CB655B";
let col2 = "#E9D8A6";
let col3 = "#9B2226";
let col4 = "#CA6702";
let col5 = "#EE9B00";
let col6 = "#005F73";
let col7 = "#001219";

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
}
