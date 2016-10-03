var rSlider, gSlider, bSlider;

function setup(){
  createCanvas(1000, 800, WEBGL);
  textSize(15);
  noStroke();

  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 90);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 120);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 150);
}

function draw(){
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  //text("red", 165, 35);
  //text("green", 165, 65);
  //text("blue", 165, 95);

  rotateY(frameCount * 0.01);
  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 80; i++){
      translate(cos(frameCount * 0.001 + j) * 100, cos(frameCount * 0.001 +j) * 100, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      sphere(8, 6, 4);
      pop();
    }
    pop();
  }
  }
