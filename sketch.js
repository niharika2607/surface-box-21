var canvas,s1,s2,s3,s4,ball;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(750,600);

    //create 4 different surfaces
     s1=createSprite(680,593,100,10)
     s1.shapeColor="blue";
     s2=createSprite(550,593,100,10)
     s2.shapeColor="yellow"
     s3=createSprite(400,593,100,10)
     s3.shapeColor="pink";
     s4=createSprite(260,593,100,10)
     s4.shapeColor="red"

     ball=createSprite(random(20,750),250,10,10);
     ball.shapeColor="white"
     ball.velocityX = 4;
    ball.velocityY = 9;

     //if(keyDown)
     
    


    //create box sprite and give velocity

}

function draw() {
    background("black");
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges)
    if(s1.isTouching(ball)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(s2.isTouching(ball) && ball.bounceOff(s2)){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(s3.isTouching(ball)){
        ball.shapeColor = "pink";
    }

    if(s4.isTouching(ball)){
        ball.shapeColor = "red";
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
