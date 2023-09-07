const questions = [
    { question: "¿En que año debuto Messi?", answer: "2004" },
    { question: "¿Cuantos goles hizo en total Messi en toda su carrera?", answer: "815" },
    { question: "¿Cuantos titulos gano Messi en toda su carrera?", answer: "42" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score-value");

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
    } else {
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    answerInput.value = "";
    scoreDisplay.textContent = score;
    loadQuestion();
}

function endGame() {
    questionText.textContent = "¡Juego terminado!";
    answerInput.style.display = "none";
    nextButton.style.display = "none";
}

loadQuestion();
nextButton.addEventListener("click", checkAnswer);