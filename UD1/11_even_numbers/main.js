/*crea un metodo qeu recorra los 100 primeros numeros
 mostrando solo los valores pares*/

function evenNumbers() {
  for (let i = 0; i < 100; i ++){
    if (i % 2 == 0){
        console.log(i)
    }
  }
}

evenNumbers();
// expected output 2,4,6,8,10......98