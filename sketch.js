const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird1
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    

    ground1 = new Ground (600, 200, 200, 20)
    ground2 = new Ground (1000, 150, 200, 20)
   


    bird1 = new Bird(100,50);
    

   // log6 = new Log(300,300,70,PI);

    chain1 = new Chain(bird1.body, { x: 100, y: 60 })
    
    box1 = new Box(600, 190, 50, 50)
    box2 = new Box(550, 190, 50, 50)
    box3 = new Box(650, 190, 50, 50)
    box4 = new Box(625, 100, 50, 50)
    box5 = new Box(575, 100, 50, 50)
    box6 = new Box(600, 50, 50, 50)
    box7 = new Box(1000, 140, 50, 50)
    box8 = new Box(1050, 140, 50, 50)
    box9 = new Box(950, 140, 50, 50)
    box10 = new Box(1025, 60, 50, 50)
    box11 = new Box(975, 60, 50, 50)
    box12 = new Box(1000, 0, 50, 50)


    }

function draw(){
    background(backgroundImg);
    Engine.update(engine);
 
   
   


    chain1.display();
   

    bird1.display();
   
    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    
}

function mouseDragged(){

Matter.Body.setPosition(bird1.body, { x: mouseX, y: mouseY } )

}

function mouseReleased(){
    chain1.fly();
}


function keyPressed(){
    if(keyCode === 32){
    Matter.Body.setPosition(Bird.body, {x: 100, y: 50});
       chain.attach(Bird.body);
    }


}



