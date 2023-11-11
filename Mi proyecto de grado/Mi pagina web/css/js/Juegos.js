function comprobarRespuestaSuma() {
  const respuestaInput = document.getElementById("respuestaInput-suma");
  const resultado = document.getElementById("resultado-suma");
  const mensaje = document.getElementById("mensaje-suma");
  const checkButton = document.getElementById("checkAnswer-suma");

  const respuestaUsuario = parseInt(respuestaInput.value);
  const respuestaCorrecta = parseInt(resultado.getAttribute("data-resultado"));

  if (respuestaUsuario === respuestaCorrecta) {
      mensaje.innerText = "Correcto";
      mensaje.style.color = "green";
  } else {
      mensaje.innerText = "Incorrecto, la respuesta es " + respuestaCorrecta;
      mensaje.style.color = "red";
  }

  // Oculta el botón "Comprobar" y el mensaje después de hacer clic
  respuestaInput.disabled = true; // Deshabilita la entrada
  checkButton.style.display = "none"; // Oculta el botón "Comprobar"
  mensaje.style.display = "block"; // Muestra el mensaje
}

// Función para cargar una nueva pregunta de suma
function cargarNuevaPreguntaSuma() {
  const pregunta = document.getElementById("pregunta-suma");
  const respuestaInput = document.getElementById("respuestaInput-suma");
  const resultado = document.getElementById("resultado-suma");
  const mensaje = document.getElementById("mensaje-suma");
  const checkButton = document.getElementById("checkAnswer-suma");

  // Habilita la entrada y muestra el botón "Comprobar"
  respuestaInput.disabled = false; // Habilita la entrada
  checkButton.style.display = "block"; // Muestra el botón "Comprobar"
  mensaje.style.display = "none"; // Oculta el mensaje

  // Genera una nueva pregunta y respuesta
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const resultadoSuma = num1 + num2;

  pregunta.innerText = num1 + " + " + num2 + " =";
  respuestaInput.value = "";
  resultado.setAttribute("data-resultado", resultadoSuma);
  mensaje.innerText = "";
}

// Llama a la función para cargar la primera pregunta al cargar la página
cargarNuevaPreguntaSuma();