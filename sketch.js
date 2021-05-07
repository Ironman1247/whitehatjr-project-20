var bg , bgg
var cat, catI, catR, catL
var mouse,  mouseI , mouseR
function preload() {
    //load the images here

    bg=loadImage("images/garden.png")
    catI=loadAnimation("images/cat1.png")
    mouseI=loadAnimation("images/mouse1.png")
    mouseR=loadAnimation("images/mouse2.png","images/mouse3.png")
    catR=loadAnimation("images/cat2.png","images/cat3.png")
    catL=loadAnimation("images/cat4.png")
    mouseL=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 

cat= createSprite(870,600)
cat.addAnimation("sitting",catI)
cat.scale=0.2
//cat.setCollider("circle", 0 , 0,400)

mouse=createSprite(200,600)
mouse.addAnimation("Msitting", mouseI)
mouse.scale=0.2
//mouse.setCollider("circle", 0 , 0,400)

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x <(cat.width - mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("catLast", catL)
    cat.changeAnimation("catLast")
    cat.x=300

    mouse.addAnimation("mouseLast",mouseL)
    mouse.changeAnimation("mouseLast")
}
    drawSprites();
}


function keyPressed(LEFT_ARROW){

    mouse.addAnimation("mouseR", mouseR)
    mouse.changeAnimation("mouseR")
    mouse.frameDelay = 25

    cat.velocityX=-5
    cat.addAnimation("catRunning", catR)
    cat.changeAnimation("catRunning")

  //For moving and changing animation write code here


}
