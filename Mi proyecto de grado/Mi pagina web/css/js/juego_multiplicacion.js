function comprobarRespuestaMultiplicacion() {
    // Obtiene el valor ingresado por el usuario
    var userAnswer = document.getElementById("respuestaInput-multiplicacion").value;
    
    // Obtiene el resultado correcto desde el atributo "data-resultado"
    var resultadoCorrecto = document.getElementById("resultado-multiplicacion").getAttribute("data-resultado");
    
    // Comprueba si la respuesta del usuario es correcta
    if (userAnswer == resultadoCorrecto) {
        document.getElementById("mensaje-multiplicacion").textContent = "¡Respuesta correcta!";
        // Aplica estilo verde a la respuesta correcta
        document.getElementById("mensaje-multiplicacion").style.color = "green";
    } else {
        document.getElementById("mensaje-multiplicacion").textContent = "Respuesta incorrecta.";
        // Aplica estilo rojo a la respuesta incorrecta
        document.getElementById("mensaje-multiplicacion").style.color = "red";
    }

    // Oculta el botón "Comprobar"
    document.getElementById("checkAnswer-multiplicacion").style.display = "none";
    
    // Muestra el botón "Siguiente"
    document.getElementById("nextButton-multiplicacion").style.display = "inline";
}

function cargarNuevaPreguntaMultiplicacion() {
    // Genera una nueva pregunta aleatoria de multiplicación
    var num1 = Math.floor(Math.random() * 10) + 1; // Número aleatorio del 1 al 10
    var num2 = Math.floor(Math.random() * 10) + 1; // Número aleatorio del 1 al 10
    
    // Calcula el resultado correcto
    var resultadoCorrecto = num1 * num2;
    
    // Actualiza la pregunta y el resultado correcto en la página
    document.getElementById("pregunta-multiplicacion").textContent = num1 + " x " + num2 + " =";
    document.getElementById("resultado-multiplicacion").setAttribute("data-resultado", resultadoCorrecto);
    document.getElementById("mensaje-multiplicacion").textContent = ""; // Limpia el mensaje de respuesta anterior
    document.getElementById("respuestaInput-multiplicacion").value = ""; // Limpia el campo de respuesta anterior

    // Oculta el botón "Siguiente"
    document.getElementById("nextButton-multiplicacion").style.display = "none";
    
    // Muestra el botón "Comprobar"
    document.getElementById("checkAnswer-multiplicacion").style.display = "inline";
}

// Llama a cargarNuevaPreguntaMultiplicacion al cargar la página para mostrar la primera pregunta
cargarNuevaPreguntaMultiplicacion();
