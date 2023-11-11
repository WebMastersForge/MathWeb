const questionElement = document.getElementById("question-division");
const userAnswerInput = document.getElementById("userAnswer");
const checkAnswerButton = document.getElementById("checkAnswer");
const resultMessage = document.getElementById("resultMessage");
const nextButton = document.getElementById("nextButton");
const opciones = document.querySelectorAll(".opcion");

// Variables
let currentQuestion = 0;
let correctAnswers = 0;

// Preguntas de división con opciones múltiples
const divisionQuestions = [
    { question: "10 ÷ 2 =", options: [5, 3, 2, 1], answer: 5 },
    { question: "9 ÷ 3=", options: [2, 3, 4, 1], answer: 3 },
    { question: "10 ÷ 5  =", options: [5, 4, 3, 2], answer: 2 },
    { question: "12 ÷ 4  =", options: [4, 3, 2, 1], answer: 3 },
    { question: "6 ÷ 2  =", options: [4, 5, 2, 1], answer: 3 },
    { question: "8 ÷ 2=", options: [3, 2, 1, 4], answer: 4 },
    { question: "12 ÷ 3  =", options: [4, 3, 2, 1], answer: 4 },
    { question: "20 ÷ 4  =", options: [3, 2, 4, 1], answer: 9 },
    { question: "1 ÷ 1 =", options: [5, 4, 3, 2], answer: 1 },
    { question: "14 ÷ 2 =", options: [3, 2, 4, 1], answer: 7 },
    { question: "8 ÷ 4 =", options: [5, 3, 2, 1], answer: 2 },
    { question: "7 ÷ 1 =", options: [2, 3, 4, 1], answer: 7 },
    { question: "20 ÷ 4 =", options: [5, 4, 3, 2], answer: 5 },
    { question: "12 ÷ 6  =", options: [4, 3, 2, 1], answer: 2 },
    { question: "10 ÷ 10  =", options: [4, 5, 2, 1], answer: 10 },
  
];

// Función para mostrar una nueva pregunta con opciones múltiples
function showQuestion(questionIndex) {
    const questionData = divisionQuestions[questionIndex];
    questionElement.textContent = questionData.question;

    // Mezcla las opciones para que no estén en el mismo orden siempre
    const shuffledOptions = shuffleArray(questionData.options);
    opciones.forEach(function (opcion, index) {
        opcion.textContent = shuffledOptions[index];
    });
}

// Función para verificar la respuesta del usuario y pasar a la siguiente pregunta
function checkAnswer() {
    const userAnswer = parseInt(userAnswerInput.value);
    const correctAnswer = divisionQuestions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        resultMessage.textContent = "¡Correcto!";
        correctAnswers++;
    } else {
        resultMessage.textContent = "Incorrecto. La respuesta es " + correctAnswer;
    }

    nextButton.style.display = "block";
    checkAnswerButton.style.display = "none";
    userAnswerInput.disabled = true;
}

// Función para pasar a la siguiente pregunta
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < divisionQuestions.length) {
        showQuestion(currentQuestion);
        userAnswerInput.value = "";
        resultMessage.textContent = "";
        checkAnswerButton.style.display = "block";
        userAnswerInput.disabled = false;
        nextButton.style.display = "none";
    } else {
        // Fin del juego
        questionElement.textContent = "¡Juego terminado! Puntuación: " + correctAnswers + "/" + divisionQuestions.length;
        userAnswerInput.style.display = "none";
        checkAnswerButton.style.display = "none";
        resultMessage.textContent = "";
        nextButton.style.display = "none";
        opciones.forEach(function (opcion) {
            opcion.style.display = "none";
        });
    }
}

// Función para mezclar un arreglo usando el algoritmo Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Iniciar el juego
showQuestion(currentQuestion);