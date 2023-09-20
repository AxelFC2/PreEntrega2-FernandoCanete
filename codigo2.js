function loadQuestionsFromJSON() {
    fetch("questions.json")
        .then(response => response.json())
        .then(data => {
            // Guardar las preg
            localStorage.setItem("questions", JSON.stringify(data));
            startGame(); // Iniciar el juego
        })
        .catch(error => console.error("Error al cargar preguntas: " + error));
}


if (!localStorage.getItem("questions")) {
    loadQuestionsFromJSON();
} else {
    startGame();
}


function startGame() {
    const questions = JSON.parse(localStorage.getItem("questions"));

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

    answerInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
}
