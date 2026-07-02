const user = getCurrentUser();

if (!user) {
    window.location.href = "login.html";
}

const completedLevels = user.completedLevels || [];
const achievements = user.achievements || [];

const totalLevels = EFDEV_ROADMAP.length;
const progressPercent = Math.round((completedLevels.length / totalLevels) * 100);

const greetingTitle = document.getElementById("greetingTitle");
const userAvatar = document.getElementById("userAvatar");
const userName = document.getElementById("userName");
const userLevel = document.getElementById("userLevel");

const heroProgressText = document.getElementById("heroProgressText");
const heroProgressBar = document.getElementById("heroProgressBar");

const xpValue = document.getElementById("xpValue");
const levelValue = document.getElementById("levelValue");
const achievementValue = document.getElementById("achievementValue");

const nextIcon = document.getElementById("nextIcon");
const nextTitle = document.getElementById("nextTitle");
const nextDescription = document.getElementById("nextDescription");
const nextXP = document.getElementById("nextXP");
const nextTime = document.getElementById("nextTime");
const continueBtn = document.getElementById("continueBtn");

const dailyTip = document.getElementById("dailyTip");

const weeklyPercent = document.getElementById("weeklyPercent");
const weeklyBar = document.getElementById("weeklyBar");
const weeklyLevel = document.getElementById("weeklyLevel");
const weeklyQuiz = document.getElementById("weeklyQuiz");

const recentAchievements = document.getElementById("recentAchievements");
const roadmapList = document.getElementById("roadmapList");
const institutionPreview = document.getElementById("institutionPreview");
const toolsPreview = document.getElementById("toolsPreview");
const logoutBtn = document.getElementById("logoutBtn");

function getGreeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return "Bom dia";
    if (hour >= 12 && hour < 18) return "Boa tarde";
    return "Boa noite";
}

function getNextLevelToStudy() {
    return EFDEV_ROADMAP.find(level => !completedLevels.includes(level.id));
}

function isLevelUnlocked(level) {
    return true;
}

function isLevelCompleted(level) {
    return completedLevels.includes(level.id);
}

function updateHeader() {
    greetingTitle.textContent = `${getGreeting()}, ${user.name} 👋`;
    userAvatar.textContent = user.name.charAt(0).toUpperCase();
    userName.textContent = user.name;
    userLevel.textContent = `Nível ${user.level || 1}`;
}

function updateHero() {
    heroProgressText.textContent = `${progressPercent}%`;
    heroProgressBar.style.width = `${progressPercent}%`;

    xpValue.textContent = user.xp || 0;
    levelValue.textContent = user.level || 1;
    achievementValue.textContent = achievements.length;
}

function updateNextLevel() {
    const nextLevel = getNextLevelToStudy();

    if (!nextLevel) {
        nextIcon.textContent = "👑";
        nextTitle.textContent = "Roadmap concluído";
        nextDescription.textContent = "Parabéns! Você concluiu todos os níveis disponíveis.";
        nextXP.textContent = "Completo";
        nextTime.textContent = "100%";
        continueBtn.textContent = "Ver Perfil";
        continueBtn.onclick = () => window.location.href = "perfil.html";
        return;
    }

    nextIcon.textContent = nextLevel.icone;
    nextTitle.textContent = nextLevel.titulo;
    nextDescription.textContent = nextLevel.descricao;
    nextXP.textContent = `+${nextLevel.xp} XP`;
    nextTime.textContent = nextLevel.tempoMedio;

    continueBtn.onclick = () => {
        window.location.href = `nivel.html?nivel=${nextLevel.slug}`;
    };
}

function updateDailyTip() {
    dailyTip.textContent = `"${getRandomTip()}"`;
}

function updateWeeklyGoal() {
    let progress = 33;

    if (completedLevels.length > 0) {
        progress += 34;
        weeklyLevel.textContent = "✅ Concluir um nível";
    }

    if (completedLevels.length > 0) {
        progress += 33;
        weeklyQuiz.textContent = "✅ Fazer um quiz";
    }

    weeklyPercent.textContent = `${progress}%`;
    weeklyBar.style.width = `${progress}%`;
}

function renderRecentAchievements() {
    recentAchievements.innerHTML = "";

    const latest = achievements.slice(-3).reverse();

    if (latest.length === 0) {
        recentAchievements.innerHTML = `
            <div class="mini-item">
                <strong>Nenhuma conquista ainda</strong>
                <span>Complete um quiz para desbloquear conquistas.</span>
            </div>
        `;
        return;
    }

    latest.forEach(item => {
        const div = document.createElement("div");
        div.className = "mini-item";

        div.innerHTML = `
            <strong>🏆 ${item}</strong>
            <span>Conquista desbloqueada</span>
        `;

        recentAchievements.appendChild(div);
    });
}

function renderRoadmap() {
    roadmapList.innerHTML = "";

    EFDEV_ROADMAP.forEach(level => {
        const unlocked = isLevelUnlocked(level);
        const completed = isLevelCompleted(level);

        const item = document.createElement("div");

        item.className = `
            roadmap-item
            ${!unlocked ? "locked" : ""}
            ${completed ? "completed" : ""}
        `;

        item.innerHTML = `
            <div class="roadmap-info">
                <div class="roadmap-number">
                    ${completed ? "✓" : level.id}
                </div>

                <div>
                    <strong>${level.icone} ${level.titulo}</strong>
                    <p class="status">${level.subtitulo}</p>
                </div>
            </div>

            <span class="status">
                ${completed ? "Concluído ✅" : "Disponível"}
            </span>
        `;

        if (unlocked) {
            item.onclick = () => {
                window.location.href = `nivel.html?nivel=${level.slug}`;
            };
        }

        roadmapList.appendChild(item);
    });
}

function renderInstitutions() {
    institutionPreview.innerHTML = "";

    getInstituicoes().slice(0, 3).forEach(item => {
        const div = document.createElement("div");
        div.className = "mini-item";

        div.innerHTML = `
            <strong>🎓 ${item.nome}</strong>
            <span>${item.tipo} • ${item.area}</span>
        `;

        institutionPreview.appendChild(div);
    });
}

function renderTools() {
    toolsPreview.innerHTML = "";

    getFerramentas().slice(0, 4).forEach(tool => {
        const div = document.createElement("div");
        div.className = "mini-item";

        div.innerHTML = `
            <strong>🛠 ${tool.nome}</strong>
            <span>${tool.categoria}</span>
        `;

        toolsPreview.appendChild(div);
    });
}

logoutBtn.addEventListener("click", () => {
    logoutUser();
});

updateHeader();
updateHero();
updateNextLevel();
updateDailyTip();
updateWeeklyGoal();
renderRecentAchievements();
renderRoadmap();
renderInstitutions();
renderTools();