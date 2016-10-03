var sigma = 10;
var rho = 28;
var beta = 8 / 3;
var s = 80;

var x, y, z;

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  x = random(10);
  y = random(10);
  z = random(10);
}

var t = 0;
var dt = 0.01;

function to_x(v) {
  // NOTE: arbitrary constant here just to center things
  return windowWidth * (0.50 + x / s);
}

function to_z(v) {
  // NOTE: arbitrary constant here just to center things
  return windowHeight * (10 + z) / s;
}

function draw() {
  background(100);
  var dx = rho * (y - x);
  var dy = x * (rho - z) - y;
  var dz = x * y - beta * z;

  rotateY(frameCount * 0.01);

  //x += dx * dt;
  //y += dy * dt;
  //z += dz * dt;

  stroke(0, 255, 0, 100);
  strokeWeight(2);
  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 80; i++){
      translate(x + dx * dt,y + dy * dt, z + dz * dt);
      rotateZ(frameCount * 0.002);
      push();
      sphere(3, 6, 4);
      pop();
    }
    pop();
  }
}
