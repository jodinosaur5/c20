var fixed, moving;

function setup() {
  createCanvas(1200,800);
  fixed=createSprite(600,400,50,80)
  fixed.shapeColor="green"
  fixed.debug=true;
  moving=createSprite(400,200,80,30)
  moving.shapeColor="green"
  moving.debug=true;
  
}

function draw() {
  background("black");  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  console.log(moving.y-fixed.y)

  if(moving.x-fixed.x<=fixed.width/2+moving.width/2 && fixed.x-moving.x<=fixed.width/2+moving.width/2 
    && moving.y-fixed.y<=fixed.height/2+moving.height/2 && fixed.y-moving.y<=fixed.height/2+moving.height/2 ){
    moving.shapeColor="red"
    fixed.shapeColor="red"
  }
  else{
    moving.shapeColor="green"
    fixed.shapeColor="green"
  }
  drawSprites();
}