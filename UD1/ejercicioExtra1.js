/*Un año bisiesto ocurre :
 en cada año   divisible entre 4
 a no ser que el año sea divisible entre 100, en este caso es solo un año bisiesto si el año es tambien divisible entre 400.

 Ejemplos: 1994 no es año bisiesto, ya que no es divisible entre 4.
 1900 no es año bisiesto, no es divisible entre 400.
 2000 es un año bis*/
 let anoBisiesto = prompt("Introduzca un año:");

 // convierte el input a un número
 anoBisiesto = parseInt(anoBisiesto);
 
 function calcularBisiesto(anoBisiesto) {
     if (anoBisiesto % 4 === 0) {
         if (anoBisiesto % 100 === 0 && anoBisiesto % 400 !== 0) {
             console.log(anoBisiesto + " no es un año bisiesto :(");
         } else {
             console.log(anoBisiesto + " es un año bisiesto!");
         }
     } else {
         console.log(anoBisiesto + " no es un año bisiesto :(");
     }
 }
 

 calcularBisiesto(anoBisiesto);
 