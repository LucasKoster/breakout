var balX = 50;
var balY = 50;
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
  background('blue');

  // teken een cirkel
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
      fill(0,0,0);
      ellipse(balX,balY,80,80);
  }

  
}