function comprobarRespuesta() {
    const respuestaInput = document.getElementById("respuestaInput");
    const resultado = document.getElementById("resultado");
    const mensaje = document.getElementById("mensaje");
    const comprobarButton = document.getElementById("comprobarButton");
    const siguienteButton = document.getElementById("siguienteButton");

    const respuestaUsuario = parseInt(respuestaInput.value);
    const respuestaCorrecta = parseInt(resultado.getAttribute("data-resultado"));

    if (respuestaUsuario === respuestaCorrecta) {
        mensaje.innerText = "Correcto";
        mensaje.style.color = "green";
    } else {
        mensaje.innerText = "Incorrecto, la respuesta es " + respuestaCorrecta;
        mensaje.style.color = "red";
    }

    mensaje.style.display = "block"; // Muestra el mensaje
    comprobarButton.style.display = "none"; // Oculta el botón "Comprobar"
    siguienteButton.style.display = "inline"; // Muestra el botón "Siguiente"
}

function cargarNuevaPregunta() {
    const pregunta = document.getElementById("resta");
    const respuestaInput = document.getElementById("respuestaInput");
    const resultado = document.getElementById("resultado");
    const mensaje = document.getElementById("mensaje");
    const comprobarButton = document.getElementById("comprobarButton");
    const siguienteButton = document.getElementById("siguienteButton");

    mensaje.style.display = "none"; // Oculta el mensaje

    // Genera una nueva pregunta y respuesta
    const num1 = Math.floor(Math.random() * 20); // Números del 1 al 20
    const num2 = Math.floor(Math.random() * num1); // El segundo número es menor que el primero
    const resultadoResta = num1 - num2;

    pregunta.innerText = num1 + " - " + num2 + " =";
    respuestaInput.value = "";
    resultado.setAttribute("data-resultado", resultadoResta);

    comprobarButton.style.display = "inline"; // Muestra el botón "Comprobar"
    siguienteButton.style.display = "none"; // Oculta el botón "Siguiente"
}

// Llama a la función para cargar la primera pregunta al cargar la página
cargarNuevaPregunta();