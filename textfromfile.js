var img;
var rainbowcanvas;
var picture;

function preload(){
  img = loadImage("rainbow.jpg");
//  txt = loadStrings("rainbows.txt");
}

function loadFile(){
  loadStrings("rainbows.txt", fileLoaded);
}

function fileLoaded(text){
  createP(join(text, "<br/>"));
}

function fileSelected(file){
  createP(file.name + " " + file.size + " " + file.type);

  if(file.type == "text"){
    createP(file.data);
  } else{
    createP("Select a text file!")
  }
}



function setup(){
rainbowcanvas = createCanvas(960, 431);
console.log(text);
image(img, 0, 0,img.width,img.height);
var button = select("#loadfile");
button.mousePressed(loadFile)
createFileInput(fileSelected);
}
