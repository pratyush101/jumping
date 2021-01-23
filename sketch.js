var canvas;
var music;
var planeOne,planeTwo,planeThree,planeFour;
var box;
var borderO;
var borderT;
var borderTH;
var borderF;


function preload(){

    music = loadSound("music.mp3");
    

}


function setup(){
    canvas = createCanvas(500,600);

    //create 4 different surfaces
   
     borderO= createSprite(500,600,1,900);

     borderT= createSprite(500,600,900,1);

     borderTH= createSprite(0,200,1,900);

     borderF= createSprite(400,0,900,1);

 
     planeOne=createSprite(60,590,100,10);
     planeOne.shapeColor="red";

     planeTwo=createSprite(180,590,100,10);
     planeTwo.shapeColor="orange";


     planeThree=createSprite(300,590,100,10);
     planeThree.shapeColor="yellow";


     planeFour=createSprite(420,590,100,10);
     planeFour.shapeColor="green";


     box=createSprite(200,200,15,15);
     box.shapeColor="white";
     box.velocityX=-2;
     box.velocityY=6;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    

    music.play();

    if(box.isTouching(borderO) && box.bounceOff(borderO)){

    }

    if(box.isTouching(borderT) && box.bounceOff(borderT)){


    }


    if(box.isTouching(borderTH) && box.bounceOff(borderTH)){

    }


    if(box.isTouching(borderF) && box.bounceOff(borderF)){

    }


   








    if(planeTwo.isTouching(box)){

        box.shapeColor= rgb(225,128,0);
        box.velocityX=0;
        box.velocityY=0;
        music.stop();


    }


    if(planeThree.isTouching(box) && box.bounceOff(planeThree)){


       box.shapeColor="yellow";


    }

    if(planeFour.isTouching(box) && box.bounceOff(planeFour)){


      box.shapeColor="green";




    }
   
    

    
 drawSprites();
    //add condition to check if box touching surface and make it box
}









