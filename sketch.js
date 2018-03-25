var s;
var a;
var yOffset=20;
var xOffset=50;
var scl = 20;
var scorebox=22;
function setup() {

  canv = createCanvas(600,600);
  canv.position(xOffset,scorebox+yOffset);
  frameRate(10);

  s = new Snake();
  a= new Apple();
  b= new ScoreBoard();

}

function draw() {
  background(51);

  s.update();
  s.show();
  a.show();
  a.eat();
  b.show();
}

function keyPressed(){

  if(keyCode===UP_ARROW ){
    s.dir(0,-1)
  }
  else if (keyCode===DOWN_ARROW) {
    s.dir(0,1);
  }
  else if (keyCode===RIGHT_ARROW){
    s.dir(1,0);
  }
  else if (keyCode===LEFT_ARROW){
    s.dir(-1,0);
  }
}
