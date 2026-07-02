const EFDEV_DICAS = [
    "Pratique programação todos os dias, mesmo que por pouco tempo.",
    "Não pule lógica de programação. Ela é a base de tudo.",
    "Crie projetos pequenos para fixar o que aprendeu.",
    "Aprenda Git e GitHub desde o início.",
    "Errar faz parte do processo. Debugar também é aprender.",
    "Não copie código sem entender o que ele faz.",
    "HTML, CSS e JavaScript ficam melhores com prática visual.",
    "Banco de dados é essencial para sistemas reais."
];

function getRandomTip() {
    const index = Math.floor(Math.random() * EFDEV_DICAS.length);
    return EFDEV_DICAS[index];
}