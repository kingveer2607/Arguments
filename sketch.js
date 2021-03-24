var fixedRect, movingRect;
var fixedRect2, fixedRect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect2 = createSprite(200,400,50,50);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(800,400,50,80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red"; 
  }
  else if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "yellow";
    fixedRect2.shapeColor = "yellow"; 
  }
  else if(isTouching(movingRect,fixedRect3)){
    movingRect.shapeColor = "blue";
    fixedRect3.shapeColor = "blue"; 
  }
  else{
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  fixedRect2.shapeColor = "green";
  fixedRect3.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
return true;
}
else {
return false;
}
}