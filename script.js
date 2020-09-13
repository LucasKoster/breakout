var balX = 50;
var balY = 50;
var bal2X = 70;
var bal2Y = 100;
var balSnelheidX = 4;
var balSnelheidY= 4;



/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */



function draw() {
  // stel vulkleur in
  background(100,110,100);

  // teken een cirkel
  function bal2 (){
    ellipse(bal2X,bal2Y, 80, 80); 

   bal2X= bal2X +balSnelheidX;
   bal2Y= bal2Y +balSnelheidY; 

   if(bal2Y > 680 || bal2Y < 40){
    balSnelheidY = balSnelheidY *-2;
    fill(255,255,255);
    ellipse(bal2X,bal2Y,80,80);
   }
   if(bal2X > 1240 || bal2X < 40){
      balSnelheidX = balSnelheidX *-2;
      fill(255,255,255);
      ellipse(bal2X,bal2Y,80,80);
   }
  } 


  
  function bal1(){
   ellipse(balX,balY,80,80);

   balX= balX +balSnelheidX;
   balY= balY +balSnelheidY; 

   if(balY > 680 || balY < 40){
    balSnelheidY = balSnelheidY *-1;
    fill(255,255,255);
    ellipse(balX,balY,80,80);
   }
   if(balX > 1240 || balX < 40){
      balSnelheidX = balSnelheidX *-1;
      fill(40,49,40);
      ellipse(balX,balY,80,80);
   }
 }


}