/*crea un metodo qeu recorra los 100 primeros numeros
 mostrando solo los valores pares*/

 function evenNumbers() {
  // Bucle que recorre los números del 0 al 99
  for (let i = 0; i < 100; i++) {
    // Comprueba si el número es par
    if (i % 2 == 0) {
      // Si es par, lo imprime en la consola
      console.log(i);
    }
  }
}

// Llama a la función para ejecutarla
evenNumbers();

// Salida esperada: 0, 2, 4, 6, 8, 10, ..., 98
