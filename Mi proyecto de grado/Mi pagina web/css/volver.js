 // Obtén una referencia al botón
 var regresarButton = document.getElementById("regresarButton");

 // Agrega un evento de clic al botón
 regresarButton.addEventListener("click", function() {
     window.history.back(); // Esta función regresará a la página anterior en el historial del navegador
 });