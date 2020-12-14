var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight  = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet,wall))
  {
     bullet.velocityX = 0;
     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);


   
       if(damage>10)
       {
        wall.shapeColor=color(255,0,0);
         fill("red");
         textSize(20);
         text("Not Effective",800,200);
         
       }

       if(damage<10){
        wall.shapeColor=color(0,255,0);
         fill("green");
         textSize(20);
         text(" Effective",800,200);
       }

  }
  
  drawSprites();
}

function hasCollided(bullet,wall)
{
bulletRightEdge = bullet.x+bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;

}