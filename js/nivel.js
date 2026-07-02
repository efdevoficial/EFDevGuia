/* ==========================================
   EFDev - Nivel.js
========================================== */

protectPage();

const currentUser = getCurrentUser();

const params = new URLSearchParams(window.location.search);

const slug = params.get("nivel");

if (!slug) {
    window.location.href = "dashboard.html";
}

const level = getLevelBySlug(slug);

if (!level) {
    window.location.href = "dashboard.html";
}

/* ==========================================
   VERIFICA DESBLOQUEIO
========================================== */

const completed = currentUser.completedLevels || [];

const unlocked = level.requisitos.every(req =>
    completed.includes(req)
);

/* ==========================================
   ELEMENTOS
========================================== */

const levelIcon = document.getElementById("levelIcon");
const levelTitle = document.getElementById("levelTitle");
const levelDescription = document.getElementById("levelDescription");

const levelXP = document.getElementById("levelXP");
const levelDifficulty = document.getElementById("levelDifficulty");
const levelTime = document.getElementById("levelTime");

const topicsList = document.getElementById("topicsList");
const toolsList = document.getElementById("toolsList");
const tipsList = document.getElementById("tipsList");
const studyList = document.getElementById("studyList");

/* ==========================================
   CABEÇALHO
========================================== */

levelIcon.textContent = level.icone;

levelTitle.textContent = level.titulo;

levelDescription.textContent = level.descricao;

levelXP.textContent = `${level.xp} XP`;

levelDifficulty.textContent = level.nivel;

levelTime.textContent = level.tempoMedio;

/* ==========================================
   LISTAS
========================================== */

function createList(listElement, items) {

    listElement.innerHTML = "";

    items.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>✔</span>
            ${item}
        `;

        listElement.appendChild(li);

    });

}

createList(topicsList, level.topicos);

createList(toolsList, level.ferramentas);

createList(tipsList, level.dicas);

createList(studyList, level.ondeEstudar);

/* ==========================================
   BOTÃO QUIZ
========================================== */

const quizButton = document.getElementById("quizButton");

quizButton.addEventListener("click", () => {

    window.location.href = `quiz.html?nivel=${level.slug}`;

});

/* ==========================================
   CHECKLIST
========================================== */

const panel = document.createElement("section");

panel.className = "panel";

panel.innerHTML = `

<div class="section-heading">

<h2>📋 Checklist</h2>

</div>

<div class="checklist">

${level.topicos.map(topic => `

<label class="check-item">

<input type="checkbox">

<span>${topic}</span>

</label>

`).join("")}

</div>

`;

document.querySelector(".dashboard-content").insertBefore(

    panel,

    document.querySelector(".dashboard-content").children[5]

);

/* ==========================================
   PROGRESSO DO NÍVEL
========================================== */

const progressPanel = document.createElement("section");

progressPanel.className = "panel";

progressPanel.innerHTML = `

<div class="section-heading">

<h2>📈 Seu progresso</h2>

</div>

<div class="progress-bar">

<div class="progress-fill" style="width:0%"></div>

</div>

<p style="margin-top:15px;color:var(--text-secondary)">

Marque os tópicos acima conforme for estudando.

</p>

`;

document.querySelector(".dashboard-content").insertBefore(

    progressPanel,

    document.querySelector(".dashboard-content").children[6]

);

const checkboxes = document.querySelectorAll(".check-item input");

const progressFill = progressPanel.querySelector(".progress-fill");

checkboxes.forEach(cb => {

    cb.addEventListener("change", updateProgress);

});

function updateProgress() {

    const checked = document.querySelectorAll(

        ".check-item input:checked"

    ).length;

    const percent = Math.round(

        checked / checkboxes.length * 100

    );

    progressFill.style.width = `${percent}%`;

}

const introTitle = document.getElementById("introTitle");
const introText = document.getElementById("introText");
const introCode = document.getElementById("introCode");

if (level.introducao) {
    introTitle.textContent = `📌 ${level.introducao.titulo}`;
    introText.textContent = level.introducao.texto;
    introCode.textContent = level.introducao.sintaxe;
}