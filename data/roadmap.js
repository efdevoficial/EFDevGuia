const EFDEV_ROADMAP = [
    {
        id: 1,
        slug: "fundamentos",
        titulo: "Fundamentos",
        subtitulo: "Base da programação",
        descricao: "Entenda lógica, algoritmos, variáveis, condições, repetições e funções.",
        nivel: "Iniciante",
        xp: 100,
        tempoMedio: "1 a 2 semanas",
        icone: "🧠",
        requisitos: [],
        topicos: [
            "Lógica de programação",
            "Algoritmos",
            "Variáveis",
            "Tipos de dados",
            "Operadores",
            "Condições",
            "Laços de repetição",
            "Funções"
        ],
        ferramentas: [
            "Visual Studio Code",
            "Portugol Studio",
            "GitHub"
        ],
        dicas: [
            "Não pule lógica de programação.",
            "Pratique pequenos exercícios todos os dias.",
            "Antes de codar, tente escrever o passo a passo do problema."
        ],
        ondeEstudar: [
            "Curso em Vídeo",
            "DIO",
            "SENAI",
            "freeCodeCamp"
        ]
    },
    {
        id: 2,
        slug: "linguagem-c",
        titulo: "Linguagem C",
        subtitulo: "Primeira linguagem",
        descricao: "Aprenda uma linguagem estruturada para fortalecer lógica e raciocínio.",
        nivel: "Iniciante",
        xp: 150,
        tempoMedio: "2 a 4 semanas",
        icone: "💻",
        requisitos: [1],
        topicos: [
            "Sintaxe básica",
            "Entrada e saída de dados",
            "Condicionais",
            "Laços",
            "Vetores",
            "Matrizes",
            "Funções",
            "Ponteiros básicos"
        ],
        ferramentas: [
            "Code::Blocks",
            "Dev-C++",
            "Visual Studio Code",
            "GCC"
        ],
        dicas: [
            "Use C para treinar lógica com mais profundidade.",
            "Resolva muitos exercícios de entrada, processamento e saída.",
            "Não se preocupe em decorar tudo, foque em entender a estrutura."
        ],
        ondeEstudar: [
            "SENAI",
            "Curso em Vídeo",
            "DIO",
            "YouTube"
        ]
    },
    {
        id: 3,
        slug: "cpp",
        titulo: "C++",
        subtitulo: "Evolução do C",
        descricao: "Conheça recursos mais avançados e introdução à programação orientada a objetos.",
        nivel: "Intermediário",
        xp: 200,
        tempoMedio: "3 a 5 semanas",
        icone: "⚙️",
        requisitos: [1, 2],
        topicos: [
            "Sintaxe C++",
            "Funções",
            "Structs",
            "Classes",
            "Objetos",
            "Construtores",
            "Bibliotecas",
            "Noções de POO"
        ],
        ferramentas: [
            "Visual Studio Code",
            "Code::Blocks",
            "GCC/G++"
        ],
        dicas: [
            "Compare C e C++ para entender a evolução da linguagem.",
            "Pratique classes e objetos com exemplos simples.",
            "Use projetos pequenos para consolidar o conteúdo."
        ],
        ondeEstudar: [
            "DIO",
            "YouTube",
            "Documentação C++",
            "Cursos técnicos"
        ]
    },
    {
        id: 4,
        slug: "csharp",
        titulo: "C#",
        subtitulo: "Aplicações modernas",
        descricao: "Entenda como C# é utilizado em sistemas, jogos, APIs e aplicações desktop.",
        nivel: "Intermediário",
        xp: 220,
        tempoMedio: "3 a 6 semanas",
        icone: "🟣",
        requisitos: [1, 2],
        topicos: [
            "Sintaxe C#",
            "Classes",
            "Objetos",
            "Métodos",
            "Listas",
            "POO",
            ".NET",
            "Introdução a APIs"
        ],
        ferramentas: [
            "Visual Studio",
            "Visual Studio Code",
            ".NET SDK"
        ],
        dicas: [
            "C# é uma ótima linguagem para aprender POO.",
            "Explore o .NET depois de entender a sintaxe.",
            "Faça pequenos sistemas de cadastro para praticar."
        ],
        ondeEstudar: [
            "Microsoft Learn",
            "DIO",
            "Alura",
            "YouTube"
        ]
    },
    {
        id: 5,
        slug: "java",
        titulo: "Java",
        subtitulo: "POO e sistemas",
        descricao: "Aprenda uma linguagem muito usada em sistemas corporativos, APIs e aplicações robustas.",
        nivel: "Intermediário",
        xp: 250,
        tempoMedio: "4 a 8 semanas",
        icone: "☕",
        requisitos: [1],
        topicos: [
            "Sintaxe Java",
            "Classes",
            "Objetos",
            "Métodos",
            "Encapsulamento",
            "Herança",
            "Polimorfismo",
            "Pacotes"
        ],
        ferramentas: [
            "IntelliJ IDEA",
            "NetBeans",
            "Eclipse",
            "JDK"
        ],
        dicas: [
            "Java ajuda muito na compreensão de POO.",
            "Organize seus arquivos e pacotes desde o início.",
            "Pratique com sistemas simples, como cadastro de clientes."
        ],
        ondeEstudar: [
            "SENAI",
            "DIO",
            "Alura",
            "Curso em Vídeo"
        ]
    },
    {
        id: 6,
        slug: "poo",
        titulo: "Programação Orientada a Objetos",
        subtitulo: "Organização de sistemas",
        descricao: "Compreenda classes, objetos, herança, encapsulamento, abstração e polimorfismo.",
        nivel: "Intermediário",
        xp: 300,
        tempoMedio: "3 a 5 semanas",
        icone: "🏗️",
        requisitos: [1, 5],
        topicos: [
            "Classes",
            "Objetos",
            "Atributos",
            "Métodos",
            "Encapsulamento",
            "Herança",
            "Polimorfismo",
            "Abstração"
        ],
        ferramentas: [
            "Java",
            "C#",
            "UML",
            "VS Code"
        ],
        dicas: [
            "POO é mais fácil quando você associa código com objetos do mundo real.",
            "Treine com exemplos como banco, biblioteca, escola e loja.",
            "Entenda os conceitos antes de decorar termos."
        ],
        ondeEstudar: [
            "SENAI",
            "DIO",
            "Alura",
            "Documentações oficiais"
        ]
    },
    {
        id: 7,
        slug: "crud",
        titulo: "CRUD",
        subtitulo: "Base dos sistemas",
        descricao: "Entenda como sistemas criam, leem, atualizam e excluem informações.",
        nivel: "Intermediário",
        xp: 300,
        tempoMedio: "2 a 4 semanas",
        icone: "📋",
        requisitos: [1, 6],
        topicos: [
            "Create",
            "Read",
            "Update",
            "Delete",
            "Formulários",
            "Validações",
            "Listagem de dados",
            "Persistência"
        ],
        ferramentas: [
            "Java",
            "C#",
            "JavaScript",
            "MySQL"
        ],
        dicas: [
            "CRUD é uma das bases mais importantes do desenvolvimento de sistemas.",
            "Comece com um cadastro simples.",
            "Depois conecte esse cadastro a um banco de dados."
        ],
        ondeEstudar: [
            "DIO",
            "Rocketseat",
            "SENAI",
            "YouTube"
        ]
    },
    {
        id: 8,
        slug: "banco-de-dados",
        titulo: "Banco de Dados",
        subtitulo: "Armazenamento de informações",
        descricao: "Aprenda modelagem, tabelas, relacionamentos, SQL e MySQL.",
        nivel: "Intermediário",
        xp: 280,
        tempoMedio: "3 a 5 semanas",
        icone: "🗄️",
        requisitos: [1],
        topicos: [
            "Modelagem de dados",
            "Entidades",
            "Atributos",
            "Relacionamentos",
            "SQL",
            "MySQL",
            "Chaves primárias",
            "Chaves estrangeiras"
        ],
        ferramentas: [
            "MySQL Workbench",
            "phpMyAdmin",
            "DBeaver",
            "Draw.io"
        ],
        dicas: [
            "Antes de criar tabelas, modele o sistema.",
            "Aprenda SELECT, INSERT, UPDATE e DELETE muito bem.",
            "Use diagramas para visualizar os relacionamentos."
        ],
        ondeEstudar: [
            "SENAI",
            "Curso em Vídeo",
            "DIO",
            "W3Schools"
        ]
    },
    {
        id: 9,
        slug: "html",
        titulo: "HTML",
        subtitulo: "Estrutura da Web",
        descricao: "Entenda a estrutura das páginas, tags, semântica, formulários e links.",
        nivel: "Iniciante",
        xp: 180,
        tempoMedio: "1 a 2 semanas",
        icone: "🌐",
        requisitos: [1],
        topicos: [
            "Tags HTML",
            "Estrutura básica",
            "Semântica",
            "Links",
            "Imagens",
            "Listas",
            "Tabelas",
            "Formulários"
        ],
        ferramentas: [
            "Visual Studio Code",
            "Navegador",
            "Live Server"
        ],
        dicas: [
            "HTML não é linguagem de programação, mas é essencial para web.",
            "Use tags semânticas como header, main, section e footer.",
            "Pratique criando páginas simples."
        ],
        ondeEstudar: [
            "MDN Web Docs",
            "Curso em Vídeo",
            "freeCodeCamp",
            "W3Schools"
        ]
    },
    {
        id: 10,
        slug: "css",
        titulo: "CSS",
        subtitulo: "Estilo e responsividade",
        descricao: "Aprenda estilização, cores, layout, responsividade, Flexbox, Grid e animações.",
        nivel: "Iniciante",
        xp: 200,
        tempoMedio: "2 a 4 semanas",
        icone: "🎨",
        requisitos: [1, 9],
        topicos: [
            "Seletores",
            "Cores",
            "Fontes",
            "Box model",
            "Flexbox",
            "Grid",
            "Responsividade",
            "Animações"
        ],
        ferramentas: [
            "Visual Studio Code",
            "DevTools",
            "Figma",
            "Live Server"
        ],
        dicas: [
            "Não tente decorar todas as propriedades.",
            "Aprenda bem Flexbox e Grid.",
            "Treine responsividade desde o início."
        ],
        ondeEstudar: [
            "MDN Web Docs",
            "Curso em Vídeo",
            "Origamid",
            "freeCodeCamp"
        ]
    },
    {
        id: 11,
        slug: "javascript",
        titulo: "JavaScript",
        subtitulo: "Interatividade na Web",
        descricao: "Aprenda lógica aplicada ao front-end, DOM, eventos, funções e consumo de APIs.",
        nivel: "Intermediário",
        xp: 300,
        tempoMedio: "4 a 8 semanas",
        icone: "⚡",
        requisitos: [1, 9, 10],
        topicos: [
            "Variáveis",
            "Funções",
            "Arrays",
            "Objetos",
            "Eventos",
            "DOM",
            "LocalStorage",
            "APIs"
        ],
        ferramentas: [
            "Visual Studio Code",
            "DevTools",
            "Node.js",
            "GitHub"
        ],
        dicas: [
            "JavaScript é essencial para interatividade.",
            "Pratique manipulando elementos HTML.",
            "Crie pequenos projetos como calculadora, checklist e quiz."
        ],
        ondeEstudar: [
            "Curso em Vídeo",
            "MDN Web Docs",
            "Rocketseat",
            "freeCodeCamp"
        ]
    }
];

const EFDEV_INTRODUCOES = {
    fundamentos: {
        titulo: "Introdução aos Fundamentos",
        texto: "Fundamentos são a base da programação. Antes de aprender uma linguagem, é importante entender lógica, variáveis, condições, repetições e funções.",
        sintaxe: [
            "algoritmo exemplo",
            "inicio",
            "    escreva('Olá, mundo!')",
            "fim"
        ].join("\n")
    },

    "linguagem-c": {
        titulo: "Introdução à Linguagem C",
        texto: "C é uma linguagem estruturada muito usada para fortalecer lógica, entender memória, funções e organização de código.",
        sintaxe: [
            "#include <stdio.h>",
            "",
            "int main() {",
            "    printf(\"Olá, mundo!\");",
            "    return 0;",
            "}"
        ].join("\n")
    },

    cpp: {
        titulo: "Introdução ao C++",
        texto: "C++ é uma evolução da linguagem C, adicionando recursos modernos como classes, objetos e programação orientada a objetos.",
        sintaxe: [
            "#include <iostream>",
            "using namespace std;",
            "",
            "int main() {",
            "    cout << \"Olá, mundo!\";",
            "    return 0;",
            "}"
        ].join("\n")
    },

    csharp: {
        titulo: "Introdução ao C#",
        texto: "C# é uma linguagem moderna criada pela Microsoft, muito usada em sistemas, APIs, aplicações desktop e jogos com Unity.",
        sintaxe: [
            "using System;",
            "",
            "class Program {",
            "    static void Main() {",
            "        Console.WriteLine(\"Olá, mundo!\");",
            "    }",
            "}"
        ].join("\n")
    },

    java: {
        titulo: "Introdução ao Java",
        texto: "Java é uma linguagem muito usada em sistemas corporativos, APIs, aplicações robustas e desenvolvimento orientado a objetos.",
        sintaxe: [
            "public class Main {",
            "    public static void main(String[] args) {",
            "        System.out.println(\"Olá, mundo!\");",
            "    }",
            "}"
        ].join("\n")
    },

    poo: {
        titulo: "Introdução à Programação Orientada a Objetos",
        texto: "POO é um paradigma que organiza o código em classes e objetos, facilitando a criação de sistemas maiores e mais organizados.",
        sintaxe: [
            "class Pessoa {",
            "    constructor(nome) {",
            "        this.nome = nome;",
            "    }",
            "",
            "    apresentar() {",
            "        console.log(`Olá, eu sou ${this.nome}`);",
            "    }",
            "}"
        ].join("\n")
    },

    crud: {
        titulo: "Introdução ao CRUD",
        texto: "CRUD representa as quatro operações principais de um sistema: criar, ler, atualizar e excluir informações.",
        sintaxe: [
            "Create  → criar dados",
            "Read    → listar dados",
            "Update  → editar dados",
            "Delete  → excluir dados"
        ].join("\n")
    },

    "banco-de-dados": {
        titulo: "Introdução a Banco de Dados",
        texto: "Banco de dados serve para armazenar, organizar e consultar informações utilizadas por sistemas e aplicações.",
        sintaxe: [
            "CREATE TABLE usuarios (",
            "    id INT PRIMARY KEY,",
            "    nome VARCHAR(100),",
            "    email VARCHAR(100)",
            ");",
            "",
            "SELECT * FROM usuarios;"
        ].join("\n")
    },

    html: {
        titulo: "Introdução ao HTML",
        texto: "HTML é a linguagem de marcação usada para estruturar páginas web, definindo títulos, textos, imagens, links e formulários.",
        sintaxe: [
            "<!DOCTYPE html>",
            "<html>",
            "    <head>",
            "        <title>Minha Página</title>",
            "    </head>",
            "    <body>",
            "        <h1>Olá, mundo!</h1>",
            "    </body>",
            "</html>"
        ].join("\n")
    },

    css: {
        titulo: "Introdução ao CSS",
        texto: "CSS é usado para estilizar páginas HTML, controlando cores, fontes, espaçamentos, layouts, responsividade e animações.",
        sintaxe: [
            "body {",
            "    background: #0f172a;",
            "    color: #ffffff;",
            "    font-family: Arial, sans-serif;",
            "}"
        ].join("\n")
    },

    javascript: {
        titulo: "Introdução ao JavaScript",
        texto: "JavaScript adiciona interatividade às páginas web, permitindo manipular elementos, eventos, dados e APIs.",
        sintaxe: [
            "const nome = \"EFDev\";",
            "",
            "function saudacao() {",
            "    console.log(\"Bem-vindo à \" + nome);",
            "}",
            "",
            "saudacao();"
        ].join("\n")
    }
};

EFDEV_ROADMAP.forEach(level => {
    level.introducao = EFDEV_INTRODUCOES[level.slug];
});

function getRoadmap() {
    return EFDEV_ROADMAP;
}

function getLevelById(id) {
    return EFDEV_ROADMAP.find(level => level.id === Number(id));
}

function getLevelBySlug(slug) {
    return EFDEV_ROADMAP.find(level => level.slug === slug);
}

function getNextLevel(currentLevelId) {
    return EFDEV_ROADMAP.find(level => level.id === Number(currentLevelId) + 1);
}