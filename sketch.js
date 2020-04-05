
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var boxes=[] 
var gSlider;
var engine,world;
 //var box;
 
function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    
    // Create an instance of Engine, World
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    //gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    //boxes=new box(mouseX,mouseY,20,20);
     //`boxes2=new box(mouseX,mouseY,50,30);
    // Create a ground rectangle that would hold all the boxes and add it to the world.
ground=new Ground(200,360,400,20);
}
 
function mousePressed() {
    if (mouseY >50&&mouseY<370) {
     boxes.push(new box(mouseX,mouseY,random(10,40),random(5,40)));
        // Every time a mouse press occures create a new box.
    }
}
 
function draw() {
    // Draw all the elements including the slider that 
    Engine.update(engine);
    background("navy");
   for(var i=0;i<boxes.length;i++){
boxes[i].display();   }
    ground.display();
    // This is the value of your gravity. You can optionally show it to the viewer.
   
    var fVal = gSlider.value();
  text("Gravity:"+fVal,50,15);
    engine.world.gravity.y=map(fVal,0,100,0,1)
  Engine.update(engine);

    // Use a for loop to show all the boxes`1qqqqqqqqqqqqqq  

}                                                   

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.

    // add options such as friction and restitution. Experiment with the values
   