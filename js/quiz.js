const currentUser = getCurrentUser();

if (!currentUser) {
    window.location.href = "login.html";
}

const params = new URLSearchParams(window.location.search);
const slug = params.get("nivel");

if (!slug) {
    window.location.href = "dashboard.html";
}

const level = getLevelBySlug(slug);
const quizQuestions = getQuizBySlug(slug);

if (!level || quizQuestions.length === 0) {
    window.location.href = "dashboard.html";
}

const quizIcon = document.getElementById("quizIcon");
const quizTitle = document.getElementById("quizTitle");
const quizDescription = document.getElementById("quizDescription");
const questionCounter = document.getElementById("questionCounter");
const quizXp = document.getElementById("quizXp");
const quizProgress = document.getElementById("quizProgress");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answersBox");
const nextQuestion = document.getElementById("nextQuestion");
const resultBox = document.getElementById("resultBox");
const resultEmoji = document.getElementById("resultEmoji");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const retryQuiz = document.getElementById("retryQuiz");

let currentQuestionIndex = 0;
let selectedAnswer = null;
let correctAnswers = 0;
let answered = false;

quizIcon.textContent = level.icone;
quizTitle.textContent = `Quiz: ${level.titulo}`;
quizDescription.textContent = level.descricao;
quizXp.textContent = `+${level.xp} XP`;

function renderQuestion() {
    const question = quizQuestions[currentQuestionIndex];

    selectedAnswer = null;
    answered = false;

    questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1} de ${quizQuestions.length}`;
    questionText.textContent = question.pergunta;

    const progress = Math.round((currentQuestionIndex / quizQuestions.length) * 100);
    quizProgress.style.width = `${progress}%`;

    answersBox.innerHTML = "";

    question.alternativas.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer";
        button.type = "button";
        button.textContent = answer;

        button.addEventListener("click", () => {
            if (answered) return;

            selectedAnswer = index;

            document.querySelectorAll(".answer").forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
        });

        answersBox.appendChild(button);
    });

    nextQuestion.textContent =
        currentQuestionIndex === quizQuestions.length - 1
            ? "Finalizar Quiz"
            : "Próxima Pergunta";
}

function showExplanation(question, isCorrect) {
    const explanation = document.createElement("div");

    explanation.className = "quiz-explanation";

    explanation.innerHTML = `
        <strong>${isCorrect ? "Resposta correta ✅" : "Resposta incorreta ❌"}</strong>
        <p>${question.explicacao}</p>
    `;

    answersBox.appendChild(explanation);
}

function validateAnswer() {
    if (selectedAnswer === null) {
        alert("Selecione uma alternativa antes de continuar.");
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer");

    answered = true;

    answerButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correta) {
            button.classList.add("correct");
        }

        if (index === selectedAnswer && index !== question.correta) {
            button.classList.add("wrong");
        }
    });

    const isCorrect = selectedAnswer === question.correta;

    if (isCorrect) {
        correctAnswers++;
    }

    showExplanation(question, isCorrect);

    nextQuestion.textContent =
        currentQuestionIndex === quizQuestions.length - 1
            ? "Ver Resultado"
            : "Continuar";

    nextQuestion.removeEventListener("click", validateAnswer);
    nextQuestion.addEventListener("click", goNextQuestion, { once: true });
}

function goNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= quizQuestions.length) {
        showResult();
        return;
    }

    nextQuestion.removeEventListener("click", goNextQuestion);
    nextQuestion.addEventListener("click", validateAnswer);

    renderQuestion();
}

function showResult() {
    document.querySelector(".quiz-wrapper").style.display = "none";
    resultBox.classList.remove("hidden");

    quizProgress.style.width = "100%";

    const percentage = Math.round((correctAnswers / quizQuestions.length) * 100);
    const passed = percentage >= 70;

    if (passed) {
        approveUser(percentage);
    } else {
        resultEmoji.textContent = "😢";
        resultTitle.textContent = "Quase lá!";
        resultMessage.innerHTML = `
            Você acertou <strong>${correctAnswers}/${quizQuestions.length}</strong>
            perguntas (${percentage}%).<br>
            É necessário acertar pelo menos <strong>70%</strong> para avançar.
        `;
    }
}

function approveUser(percentage) {
    const user = getCurrentUser();

    const alreadyCompleted = user.completedLevels.includes(level.id);

    if (!alreadyCompleted) {
        user.completedLevels.push(level.id);
        user.xp += level.xp;

        const nextLevel = getNextLevel(level.id);

        if (nextLevel) {
            user.level = nextLevel.id;
        }

        user.achievements = user.achievements || [];

        if (!user.achievements.includes(`Concluiu ${level.titulo}`)) {
            user.achievements.push(`Concluiu ${level.titulo}`);
        }

        if (user.xp >= 500 && !user.achievements.includes("500 XP")) {
            user.achievements.push("500 XP");
        }

        updateUser(user);
    }

    resultEmoji.textContent = "🎉";
    resultTitle.textContent = "Você passou!";
    resultMessage.innerHTML = `
        Você acertou <strong>${correctAnswers}/${quizQuestions.length}</strong>
        perguntas (${percentage}%).<br>
        ${alreadyCompleted
            ? "Este nível já estava concluído, então o XP não foi somado novamente."
            : `Você ganhou <strong>${level.xp} XP</strong> e desbloqueou o próximo nível.`
        }
    `;
}

retryQuiz.addEventListener("click", () => {
    currentQuestionIndex = 0;
    selectedAnswer = null;
    correctAnswers = 0;
    answered = false;

    resultBox.classList.add("hidden");
    document.querySelector(".quiz-wrapper").style.display = "flex";

    nextQuestion.removeEventListener("click", goNextQuestion);
    nextQuestion.removeEventListener("click", validateAnswer);
    nextQuestion.addEventListener("click", validateAnswer);

    renderQuestion();
});

nextQuestion.addEventListener("click", validateAnswer);

renderQuestion();