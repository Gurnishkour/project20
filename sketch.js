
var c1,c2,c3,m1,m2,m3,bg,mouse,cat;

function preload() {
    //load the images here
    c1=loadAnimation("images/cat1.png");
    c2=loadAnimation("images/cat2.png" , "images/cat3.png");
    c3=loadAnimation("images/cat4.png");

    m1=loadAnimation("images/mouse1.png");
    m2=loadAnimation("images/mouse2.png" , "images/mouse3.png");
    m3=loadAnimation("images/mouse4.png");
    
    bg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600);
cat.addAnimation("catSleeping",c1);
cat.scale = 0.2;

mouse=createSprite(200,600);
mouse.addAnimation("mouseStanding",m1);
mouse.scale = 0.2;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<=cat.width/2+mouse.width/2){
        cat.velocityX = 0;
        cat.addAnimation("catstop",c3);
        cat.changeAnimation("catstop",c3);
        mouse.addAnimation("mousestop",m3);
        mouse.changeAnimation("mousestop",m3);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catrunning",c2);
    cat.changeAnimation("catrunning",c2);
    mouse.addAnimation("mouserunning",m2);
    mouse.frameDelay=100;
    mouse.changeAnimation("mouserunning",m2);
}

}
