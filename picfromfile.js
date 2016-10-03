var slider;

function setup(){
  var c = createCanvas(1000, 1000);
  createFileInput(picLoaded);
  background(100);
  var button1 = select("#blur");
  button1.mousePressed(buttonBlurPressed);
  var buttonGray = select("#gray");
  buttonGray.mousePressed(buttonGrayPressed);
}

function draw(){
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text('Image will be loaded in this Canvas.', width/2, height/2);
  noLoop();
}

function picLoaded(pic){
  if(pic.type == "image"){
    var picture = createImg(pic.data).hide();
    createP(pic.width + " " + pic.height);
    imageMode(CENTER);
    image(picture, 500, 500, pic.width, pic.height);
    filter(BLUR, sliderValue);
  }
}

function buttonBlurPressed(){
  filter(BLUR, 1);
}

function buttonGrayPressed(){
  filter(GRAY);
}
