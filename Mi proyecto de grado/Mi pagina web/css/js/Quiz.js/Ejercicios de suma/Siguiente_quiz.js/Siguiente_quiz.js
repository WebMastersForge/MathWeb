document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al botón "Siguiente Quiz"
    const siguienteQuizButton = document.getElementById("siguienteQuizButton");

    // Agrega un controlador de eventos para el clic en el botón
    siguienteQuizButton.addEventListener("click", function () {
        // Redirige al usuario a la página del siguiente quiz
        window.location.href = "Quiz_resta.html";
    });
});