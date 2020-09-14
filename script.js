var balX = 50;
var balY = 50;
var bal2X = 100;
var bal2Y = 100;
var balSnelheidX = 4;
var balSnelheidY= 4;
var balSnelheid2X = 3;
var balSnelheid2y = 3;



function setup() {
  createCanvas(1280, 720);
  
}

function draw() {
  background(30,255,255);
  
   
    fill(255,255,255);
    ellipse(balX,balY,80,80);
   
   balX= balX +balSnelheidX;
   balY= balY +balSnelheidY; 

   if(balY > 680 || balY < 40){
    balSnelheidY = balSnelheidY *-1;
    /*fill(255,255,255);
    ellipse(balX,balY,80,80);*/
   }
   if(balX > 1240 || balX < 40){
      balSnelheidX = balSnelheidX *-1;
      /*fill(40,49,40);
      ellipse(balX,balY,80,80);*/
   }

    ellipse(bal2X,bal2Y, 80, 80); 

   bal2X= bal2X +balSnelheid2X;
   bal2Y= bal2Y +balSnelheid2Y; 

   if(bal2Y > 680 || bal2Y < 40){
    balSnelheid2Y = balSnelheid2Y *-2;
    fill(255,255,255);
    ellipse(bal2X,bal2Y,80,80);
   }
   if(bal2X > 1240 || bal2X < 40){
      balSnelheid2X = balSnelheid2X *-2;
      fill(255,255,255);
      ellipse(bal2X,bal2Y,80,80);
   }
 
}
