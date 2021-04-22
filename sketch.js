const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png"
var sl;
function preload() {
    getBackgroundImg( );

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if (backgroundImg){
    // add condition to check if any background image is there to add
    background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(40);
    fill ("brown")
    text ("Time: "+sl, 500,40)
}
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var con = await res.json();
    // write code slice the datetime
    var cut = con.datetime
    sl = cut.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if (sl>=06 && sl<=19){
        bg = "sunrise1.png"
    }
else{
    bg = "sunset12.png"
}
    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg);
}
