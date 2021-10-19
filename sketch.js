var uno, dos;
var obj1, obj2;
var tres,cuatro,cinco;

function setup() {
  createCanvas(1200,800);
  
  uno = createSprite(600, 400, 50, 80);
  uno.shapeColor = "green";
  uno.debug = true;
  
  dos = createSprite(400,200,80,30);
  dos.shapeColor = "green";
  dos.debug = true;

  cinco = createSprite(100,100,80,80);
  cinco.shapeColor = "yellow";
  cinco.debug = true;

  tres = createSprite(400,200,80,80);
  tres.shapeColor = "blue";
  tres.debug = true;

  cuatro = createSprite(400,500,80,80);
  cuatro.shapeColor = "blue";
  cuatro.debug = true;

  tres.velocityY = 3;
  cuatro.velocityY = -3;
}

function draw() {
  background(0,0,0);  
  dos.x = World.mouseX;
  dos.y = World.mouseY;


    if (SeTocan(uno, dos)){
        uno.shapeColor = "red";
        dos.shapeColor = "red";
    }
    else {
        uno.shapeColor = "green";
        dos.shapeColor = "green";
    }
  RebotaYa(tres,cuatro);

  
  drawSprites();
}

