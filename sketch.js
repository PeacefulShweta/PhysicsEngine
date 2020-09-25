const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Body = Matter.Body;

var obj,g1,ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  

  obj = new paper(400,height-20,20);
  b1 = new box(500,100,50,50);
 // World.add(engine.world,obj);

 var options = {
    isStatic : true
  }
  g1 = Bodies.rectangle(400,height,800,10,options);
  World.add(engine.world,g1);

 ball = Bodies.circle(100,380,20);
 World.add(engine.world,ball);


  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("yellow");
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(g1.position.x,g1.position.y,800,10);
   
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)

  obj.display();
  b1.display();

  drawSprites();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Body.applyForce(obj.body,obj.body.position,{x:85,y:-85});
  
  }
  if (keyCode === LEFT_ARROW) {

    Body.translate( ball, {x: -10, y: 0});

   // Matter.Body.applyForce(obj.body,obj.body.position,{x:85,y:-85});
  
  }
  if (keyCode === RIGHT_ARROW) {

    Body.translate( ball, {x: 10, y: 0});

   // Matter.Body.applyForce(obj.body,obj.body.position,{x:85,y:-85});
  
  }
}



  /*
  function keyPressed() {
  
}
  if (keyCode === UP_ARROW) {

    Body.translate( ball, {x: 0, y: -10});
  
  }
  
  if (keyCode === DOWN_ARROW) {

    Matter.Body.setStatic(ball, false)

   
  
  }
}
*/
