const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, hule, stoneMC, IronItem;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    hule  = new Rubber(900, 450, 70);
    stoneMC = new Stone(100, 500);
    IronItem = new Iron(500, 500);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    hule.display();
    stoneMC.display();
    IronItem.display();

    
 
}