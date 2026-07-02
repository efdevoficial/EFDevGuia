const EFDEV_CONQUISTAS = [

    {
        id: 1,
        titulo: "Primeiros Passos",
        descricao: "Realize seu primeiro login.",
        icone: "🚀",
        xp: 25,
        tipo: "login"
    },

    {
        id: 2,
        titulo: "Primeiro Nível",
        descricao: "Conclua seu primeiro nível.",
        icone: "🏆",
        xp: 50,
        tipo: "nivel"
    },

    {
        id: 3,
        titulo: "Aprendiz",
        descricao: "Alcance 100 XP.",
        icone: "⭐",
        xp: 100,
        tipo: "xp",
        requisito: 100
    },

    {
        id: 4,
        titulo: "Programador Júnior",
        descricao: "Alcance 500 XP.",
        icone: "💻",
        xp: 500,
        tipo: "xp",
        requisito: 500
    },

    {
        id: 5,
        titulo: "Mestre da Lógica",
        descricao: "Conclua Fundamentos.",
        icone: "🧠",
        xp: 100,
        tipo: "roadmap",
        requisito: "fundamentos"
    },

    {
        id: 6,
        titulo: "Explorador",
        descricao: "Visite a página de Instituições.",
        icone: "🎓",
        xp: 30,
        tipo: "instituicoes"
    },

    {
        id: 7,
        titulo: "Primeiro Quiz",
        descricao: "Aprove um quiz.",
        icone: "📚",
        xp: 50,
        tipo: "quiz"
    },

    {
        id: 8,
        titulo: "Persistente",
        descricao: "Conclua 5 níveis.",
        icone: "🔥",
        xp: 200,
        tipo: "levels",
        requisito: 5
    },

    {
        id: 9,
        titulo: "Especialista Web",
        descricao: "Conclua HTML, CSS e JavaScript.",
        icone: "🌐",
        xp: 300,
        tipo: "web"
    },

    {
        id: 10,
        titulo: "Lenda EFDev",
        descricao: "Conclua todo o Roadmap.",
        icone: "👑",
        xp: 1000,
        tipo: "roadmap-completo"
    }

];

function getAchievements() {
    return EFDEV_CONQUISTAS;
}

function getAchievement(id) {
    return EFDEV_CONQUISTAS.find(a => a.id === id);
}