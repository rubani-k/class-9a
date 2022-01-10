var box 


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,5,100);
  box.shapeColor = "blue"
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW))
  {
    box.velocityX = 3;
  }
  if(keyIsDown(LEFT_ARROW))
  {
    box.velocityX =  -3;
  }
  if(keyIsDown(UP_ARROW))
  {
    box.velocityY = -3;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    box.velocityY = 3;
  }
  
drawSprites();
}




