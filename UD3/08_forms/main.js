/*● El botón enviar sólo debe estar habilitado si se han marcado los 2 checks
● El combo de opciones sólo estará habilitado si se pulsa “si” en el primer check
● Nombre y apellidos son obligatorios. Si no se han rellenado al pulsar el botón, informar al usuario
● El tamaño máximo de la descripción es de 80 carácteres
● Implementar algún mecanismo para prevenir el doble submit*/

window.onload = function() {
    // 1. Obtener referencias a los elementos del formulario
    var form = document.forms['main_form'];
    var radios = form.elements['pregunta'];
    var select = form.elements['opciones'];
    var nameInput = form.elements['name'];
    var surnameInput = form.elements['surname'];
    var descriptionInput = form.elements['description'];
    var checkboxes = [form.elements['condiciones'], form.elements['privacidad']];
    var submitButton = document.getElementById('submit');

    // 2. Agregar event listeners
    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', handleRadioChange);
    }

    select.addEventListener('change', handleSelectChange);
    
    nameInput.addEventListener('input', handleTextInput);
    surnameInput.addEventListener('input', handleTextInput);
    descriptionInput.addEventListener('input', handleTextInput);

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', handleCheckboxChange);
    }

    submitButton.addEventListener('click', handleSubmit);

    // 3. Funciones de eventos
    function handleRadioChange(e) {
        console.log('Radio seleccionado: ' + e.target.value);
    }

    function handleSelectChange(e) {
        console.log('Opción seleccionada: ' + e.target.value);
    }

    function handleTextInput(e) {
        console.log(e.target.name + ' cambiado a: ' + e.target.value);
    }

    function handleCheckboxChange(e) {
        console.log(e.target.name + ' cambiado a: ' + e.target.checked);
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevenir el envío del formulario
        console.log('Formulario enviado');
        // Aquí podrías agregar la lógica para validar y enviar el formulario
    }
};
/*window.onload = function() {
    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue

    
}

function changeValue(e) {
     console.log('changed' + e.target.value)
}*/