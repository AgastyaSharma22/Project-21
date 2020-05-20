var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(800,400);
  bullet=createSprite(50, 200, 100, 20);
  wall=createSprite(700,200,thickness,canvas.height/2);
  bullet.collide(wall);
  speed=random(223,321);
   weight=random(30,52);
   thickness=random(22,83);
   bullet.velocityX=speed;
   wall.shapeColor=(80,80,80);
   bullet.shapeColor="white";
}

function draw() {
  background(0,0,255);  
 if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness*wall.thickness*wall.thickness
    if(damage>10){
    wall.shapeColor="red";
    }else(damage<10)
      wall.shapeColor="green";
        
    }
 
  drawSprites();
}

