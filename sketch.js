function setup() {
  createCanvas(315, 400);
}

function draw() {
  background(236,234,222);


  
  //FIGURAS CELESTES 
  celeste1=color(174,181,174,170)//union de elipses claras 
  celeste2=color(174,181,174,80)//union elipses oscuras
  rojo=color(142,7,4,255)//1er rectangulo
  rojo2=color(142,7,4,220)//2do rectangulo
  rojo3=color(142,7,4,200)//3er rectangulo 
  rojo4=color(142,7,4,230)//4to rectangulo
  amarillo=color(236,231,188,120)//elipse costado superioir izquierdo 
  naranjo=color(188,73,24,80)//elipse costado inferioir derecho 
  naranjo2=color(188,73,24,200)//elipse central columna derecha
  negro1=color(23,18,24,190)//elipse central columna izquierda 
  negro2=color(23,18,24,230)//elipse inferior izquierdo columna derecha 
  negro3=color(23,18,24,235)//elpse superior izquierdo 
  gris=color(198,192,176)//lineas 

 
  
  
  
  //DETALLE POLIGONO
stroke(rojo);
  fill(rojo);
  //poligonos rojos 
  quad(22,57,248,16,306,50,62,106)//primero
  quad(54,362,227,356,284,376,111,379)//cuarto
  
  //poligono celeste ledeado hacia la derecha
    stroke(celeste2)
  fill(celeste2)
  quad(175,81,22,291,71,334,220,130)
  
  

  
  //ELIPSE 
  //columna izqueda
  fill(amarillo);
  stroke(negro1);
  strokeWeight(0.2)
  ellipse(80.5,87.5,67,67);
  
  stroke(negro1);
  fill(negro1);
  ellipse(60.5,194.5,67,67);
 
  //rectangulo rojo tercero
   quad(41,301,253,273,309,299,80,343)
  
  
  //poligono negro inferior
  stroke(negro2);
  fill(negro2);
  ellipse(41.5,317.5,67,67);
 
  //rectanculo 3ro (arriba-abajo)
  fill(rojo3);
  quad(41,301,253,273,309,299,80,343)
  
  
  //columna derecha (arriba-abajo)
  stroke(negro3);
  fill(negro3);
  ellipse(200.5,103.5,67,67);
  
  stroke(naranjo2); 
  fill(naranjo2);
  ellipse(173.5,224.5,67,67);
  stroke(rojo);
  
 //segundo poligono rojo (arriba-abajo)
  fill(rojo2);stroke(rojo2);
  fill(rojo2);
  quad(14,182,228,157,300,222,54,260)
  
   //poligono celeste ladeado hacia izquierda 
  stroke(celeste1)
  fill(celeste1)
  quad(56,113,112,76,197,202,142,237)
  
  stroke(naranjo);
  fill(naranjo);
  ellipse(131.5,323.5,67,67);
  
  
  
  //LINEAS VERTICALES (izquerda-derecha)
  stroke(gris);
  //rectas
 line(22,57,14,182)
 line(62,106,54,260)
  
  //vertical derecha 
 line(14,182,100,339)
 line(87,174,156,301)
  
  //vertical izquerda
 line(175,81,141,216)
 line(221,131,204,239)
  

  //semi rectas costado derecho
  line(248,16,253,273)
  line(306,50,284,376)
  

  

 
  
  

  
  
  
}
  