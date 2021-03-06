const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg;

var engine, world;
var box1;
var sling;

function preload(){
  bg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    //box1 = new Box(200,300,50,50);
    //box2 = new Box(240,100,50,100);
    ground = new Ground(600,height-10,1200,50);
    ground1 = new Ground(900,750,400,30);

    log1 = new Log(750,650,200, PI);
    log2 = new Log(780,650,200, PI);
    log3 = new Log(810,650,200, PI);
    pig1 = new Pig(870,650);
    pig2= new Pig(930,650);
    log4 = new Log(990,650,200, PI);
    log5 = new Log(1020,650,200, PI);
    log6 = new Log(1050,650,200, PI);


    log7 = new Log(900,500,400,PI/2);
    //log8 = new Log(1020,500,170,PI/2);

    log9 = new Log(760,400,200, PI);
    log10 = new Log(1020,400,200, PI);

    log11 = new Log(900,300,350,PI/2);
    
    log12= new Log(820,200,150, PI);
    log13 = new Log(980,200,150, PI); 

    log14 = new Log(900,200,100, PI/2);
    log15 = new Log(900,200,100, PI/2);
    log16 = new Log(900,200,100, PI/2);


    log17 = new Log(900,100,200, PI/2);
      
    bird1= new Bird(200,200);

   sling = new SlingShot(bird1.body,{x:200, y:200});
   
}

function draw(){
    background(bg);
    Engine.update(engine);
 
    //box1.display();
    //box2.display();
    ground.display();
    ground1.display();
    log1.display();
    log2.display();
    log3.display();

    pig1.display();
    pig2.display();

    log4.display();
   log5.display();
    log6.display();

    log7.display();
   // log8.display();

    log9.display();
    log10.display();

    log11.display();
    
    log12.display();
    log13.display();
    
    log14.display();
    log15.display();
    log16.display();

    log17.display();

    bird1.display();
    sling.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird1.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}