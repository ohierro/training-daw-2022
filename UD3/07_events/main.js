window.onload = function(e) {
    console.log('documento cargado')
}

/*A partir de la página web proporcionada, completar el código JavaScript para que:
1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer
enlace
4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad
innerHTML)*/ 


// Esperamos a que el documento se cargue completamente
window.onload = function() {
    console.log('documento cargado');

    // Fución para cambiar la visibilidad y el texto del enlace
    function toggleContenido(enlace, contenido) {
        // Si el contenido está visible, lo ocultamos
        if (contenido.style.display !== 'none') {
            contenido.style.display = 'none';
            enlace.innerHTML = 'Mostrar contenidos';
        } else {
            // Si el contenido está oculto, lo mostramos
            contenido.style.display = 'block';
            enlace.innerHTML = 'Ocultar contenidos';
        }
    }

    // Obtenemos todos los enlaces y cotnenidos
    var enlaces = [
        document.getElementById('enlace_1'),
        document.getElementById('enlace_2'),
        document.getElementById('enlace_3')
    ];
    var contenidos = [
        document.getElementById('contenidos_1'),
        document.getElementById('contenidos_2'),
        document.getElementById('contenidos_3')
    ];

    // Agregamos el evento click a cada enlace
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].onclick = function(e) {
            // Prevenimos el comportamiento por defecto del enlace
            e.preventDefault();
            // Obtenemos el número del enlace
            var num = this.id.split('_')[1];
            // Llamamos a la función toggleContenido con el enlace y contenido correspondiente
            toggleContenido(this, contenidos[num - 1]);
        };
    }
};