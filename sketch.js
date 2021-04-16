const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(600,300,50,50);
    box2 = new Box(800,300,50,50);
    pig1 = new Pig (700,300)
    log1=new Log(700,250,300,PI/2)// 180 degrees = PI radians
    box3= new Box (600,200,50,50);
    box4= new Box (800,200,50,50);
    pig2 = new Pig (700,200)
    log2=new Log(700,150,300,PI/2)
    box5= new Box (700,100,50,50);
    log3=new Log(690,50,120,PI/4)
    log4=new Log(710,50,120,-PI/4)
    bird= new Bird (300,400);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}