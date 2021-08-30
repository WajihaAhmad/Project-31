const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=150;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground (width/2,height,width,20)
  for(var k = 0; k <=innerWidth; k=k+100 ){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j = 75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  
  }
  
  for(var j = 50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175)); 
  }

  for(var j = 75; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,275)); 
  }

  for(var j = 50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375)); 
  }

}
function draw() {
  background("black");  
  Engine.update(engine);
  ground1.display();
  for(var j = 0; j< plinkos.length; j++){
    plinkos[j].display();
  }

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

for(var j = 0; j< particles.length; j++){
  particles[j].display();
}
for(var k = 0; k< divisions.length; k++){
  divisions[k].display();
}
}