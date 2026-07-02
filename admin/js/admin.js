/* =====================================================
   EFDev - Admin Dashboard
===================================================== */

// Protege a página (somente administradores)
protectAdminPage();

// Usuário logado
const currentUser = getCurrentUser();

/* =====================================================
   ELEMENTOS
===================================================== */

const usersCount = document.getElementById("usersCount");
const roadmapCount = document.getElementById("roadmapCount");
const quizCount = document.getElementById("quizCount");
const institutionCount = document.getElementById("institutionCount");
const toolCount = document.getElementById("toolCount");
const achievementCount = document.getElementById("achievementCount");

/* =====================================================
   DADOS
===================================================== */

const users = getUsers();
const roadmap = getRoadmap();
const institutions = getInstituicoes();
const tools = getFerramentas();
const achievements = getAchievements();

/* =====================================================
   CONTAR QUIZZES
===================================================== */

let totalQuizzes = 0;

Object.keys(EFDEV_QUIZZES).forEach(key => {
    totalQuizzes += EFDEV_QUIZZES[key].length;
});

/* =====================================================
   PREENCHER CARDS
===================================================== */

usersCount.textContent = users.length;
roadmapCount.textContent = roadmap.length;
quizCount.textContent = totalQuizzes;
institutionCount.textContent = institutions.length;
toolCount.textContent = tools.length;
achievementCount.textContent = achievements.length;

/* =====================================================
   CUMPRIMENTO
===================================================== */

const hour = new Date().getHours();

let greeting = "Bem-vindo";

if (hour >= 5 && hour < 12) {
    greeting = "Bom dia";
}

if (hour >= 12 && hour < 18) {
    greeting = "Boa tarde";
}

if (hour >= 18) {
    greeting = "Boa noite";
}

const header = document.querySelector(".dashboard-header h1");

if (header) {
    header.textContent = `${greeting}, ${currentUser.name}`;
}

/* =====================================================
   PAINEL DE USUÁRIOS RECENTES
===================================================== */

function renderRecentUsers() {

    const content = document.querySelector(".dashboard-content");

    const section = document.createElement("section");

    section.className = "panel";

    section.innerHTML = `
        <div class="section-heading">
            <h2>👥 Usuários recentes</h2>
        </div>

        <div class="recent-users"></div>
    `;

    content.appendChild(section);

    const container = section.querySelector(".recent-users");

    const recentUsers = [...users]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

    if (recentUsers.length === 0) {

        container.innerHTML = `
            <p>Nenhum usuário cadastrado.</p>
        `;

        return;
    }

    recentUsers.forEach(user => {

        const card = document.createElement("div");

        card.className = "recent-user";

        card.innerHTML = `
            <div class="avatar-small">
                ${user.name.charAt(0).toUpperCase()}
            </div>

            <div class="recent-user-info">

                <strong>${user.name}</strong>

                <span>${user.email}</span>

            </div>

            <span class="user-role ${user.role}">
                ${user.role}
            </span>
        `;

        container.appendChild(card);

    });

}

/* =====================================================
   ESTATÍSTICAS
===================================================== */

function renderStatistics() {

    const content = document.querySelector(".dashboard-content");

    const section = document.createElement("section");

    section.className = "panel";

    const totalXP = users.reduce((sum, user) => sum + (user.xp || 0), 0);

    const averageXP = users.length
        ? Math.round(totalXP / users.length)
        : 0;

    const completedLevels = users.reduce(
        (sum, user) => sum + (user.completedLevels?.length || 0),
        0
    );

    section.innerHTML = `
        <div class="section-heading">
            <h2>📊 Estatísticas Gerais</h2>
        </div>

        <div class="stats-grid">

            <article class="stat-card">
                <span>XP Total</span>
                <h2>${totalXP}</h2>
            </article>

            <article class="stat-card">
                <span>XP Médio</span>
                <h2>${averageXP}</h2>
            </article>

            <article class="stat-card">
                <span>Níveis Concluídos</span>
                <h2>${completedLevels}</h2>
            </article>

        </div>
    `;

    content.appendChild(section);

}

/* =====================================================
   ATALHOS RÁPIDOS
===================================================== */

function renderQuickActions() {

    const content = document.querySelector(".dashboard-content");

    const section = document.createElement("section");

    section.className = "panel";

    section.innerHTML = `
        <div class="section-heading">
            <h2>⚡ Ações Rápidas</h2>
        </div>

        <div class="quick-actions">

            <button class="quick-btn" onclick="location.href='usuarios.html'">
                👥 Gerenciar Usuários
            </button>

            <button class="quick-btn" onclick="location.href='roadmap.html'">
                🗺 Novo Nível
            </button>

            <button class="quick-btn" onclick="location.href='quizzes.html'">
                ❓ Novo Quiz
            </button>

            <button class="quick-btn" onclick="location.href='instituicoes.html'">
                🎓 Nova Instituição
            </button>

        </div>
    `;

    content.appendChild(section);

}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

renderRecentUsers();
renderStatistics();
renderQuickActions();