var backgroundImg,canvas
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;



function preload() {
    //load the images here
    backgroundImg=loadImage("garden.png");
    catImg1=loadAnimation("cat4.png");
    mouseImg1=loadAnimation("mouse1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    catImg3=loadAnimation("cat1.png");
    mouseImg3=loadAnimation("mouse4.png"); 

}

function setup(){
  
    


}

function draw() {

    var canvas=createCanvas(1000,800);
    background(backgroundImg); 

   var cat=createSprite(849,600,50,50);
   cat.scale=0.3;

   var mouse= createSprite(380,600,20,30);
   mouse.scale=0.2;

   



    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.x/2+mouse.x/2 || 
       mouse.x-cat.x<cat.x/2+mouse.x/2 ){

     cat.addAnimation("catcolliding",catImg3);
     cat.changeAnimation("catcollding");

     mouse.addAnimation("mousecolliding",mouseImg3);
     mouse.changeAnimation("mousecolliding");


       }
      keyPressed();
     drawSprites();
      } 

      function keyPressed(){

        if(keyCode===RIGHT_ARROW){
          mouse.addAnimation("mouseTeasing", mouseImg1);
          mouse.changeAnimation(mouseImg2);
          
          
         }
       
       
          if(keyCode===LEFT_ARROW){
          cat.velocityX=-3;
          cat.addAnimation("catRunning", catImg2);
          cat.changeAnimation(catImg2);
          catImg1.visible=false;
         } 
       




      }