const EFDEV_QUIZZES = {
    fundamentos: [
        {
            pergunta: "O que é lógica de programação?",
            alternativas: [
                "A parte visual de um site",
                "A forma de organizar passos para resolver problemas",
                "Um banco de dados",
                "Um tipo de linguagem"
            ],
            correta: 1,
            explicacao: "Lógica de programação é a organização de passos para resolver problemas usando algoritmos."
        },
        {
            pergunta: "O que é uma variável?",
            alternativas: [
                "Um espaço para armazenar dados",
                "Uma imagem do sistema",
                "Um comando de repetição",
                "Um erro no código"
            ],
            correta: 0,
            explicacao: "Variáveis armazenam valores que podem ser usados e alterados durante o programa."
        },
        {
            pergunta: "Qual estrutura é usada para tomar decisões?",
            alternativas: [
                "for",
                "if",
                "while",
                "array"
            ],
            correta: 1,
            explicacao: "A estrutura if permite executar ações diferentes dependendo de uma condição."
        },
        {
            pergunta: "Qual estrutura é usada para repetição?",
            alternativas: [
                "if",
                "else",
                "for",
                "const"
            ],
            correta: 2,
            explicacao: "O for é usado para repetir comandos várias vezes."
        },
        {
            pergunta: "O que é um algoritmo?",
            alternativas: [
                "Uma sequência de passos para resolver um problema",
                "Um programa instalado no computador",
                "Uma linguagem de marcação",
                "Um tipo de banco de dados"
            ],
            correta: 0,
            explicacao: "Algoritmo é uma sequência lógica de passos para alcançar um resultado."
        }
    ],

    "linguagem-c": [
        {
            pergunta: "Qual função é usada para exibir dados em C?",
            alternativas: [
                "print()",
                "console.log()",
                "printf()",
                "echo()"
            ],
            correta: 2,
            explicacao: "Em C, a função printf() é usada para exibir informações na tela."
        },
        {
            pergunta: "Qual biblioteca geralmente é usada para entrada e saída em C?",
            alternativas: [
                "stdio.h",
                "iostream",
                "stdlib.js",
                "main.css"
            ],
            correta: 0,
            explicacao: "A biblioteca stdio.h contém funções como printf() e scanf()."
        },
        {
            pergunta: "Qual função marca o início da execução em C?",
            alternativas: [
                "start()",
                "main()",
                "run()",
                "begin()"
            ],
            correta: 1,
            explicacao: "A função main() é o ponto inicial da execução de um programa em C."
        },
        {
            pergunta: "Qual símbolo finaliza uma instrução em C?",
            alternativas: [
                ".",
                ",",
                ";",
                ":"
            ],
            correta: 2,
            explicacao: "Em C, a maioria das instruções termina com ponto e vírgula (;)."
        },
        {
            pergunta: "Qual tipo armazena números inteiros em C?",
            alternativas: [
                "float",
                "char",
                "int",
                "string"
            ],
            correta: 2,
            explicacao: "O tipo int é usado para armazenar números inteiros."
        }
    ],

    cpp: [
        {
            pergunta: "Qual biblioteca é muito usada para entrada e saída em C++?",
            alternativas: [
                "iostream",
                "stdio.js",
                "html.h",
                "style.css"
            ],
            correta: 0,
            explicacao: "A biblioteca iostream permite usar cin e cout em C++."
        },
        {
            pergunta: "Qual comando exibe dados em C++?",
            alternativas: [
                "printf",
                "cout",
                "console.log",
                "echo"
            ],
            correta: 1,
            explicacao: "Em C++, cout é usado para mostrar dados na tela."
        },
        {
            pergunta: "C++ é uma evolução de qual linguagem?",
            alternativas: [
                "Java",
                "C",
                "Python",
                "HTML"
            ],
            correta: 1,
            explicacao: "C++ foi criado como uma extensão da linguagem C."
        },
        {
            pergunta: "Qual conceito é muito importante em C++?",
            alternativas: [
                "Programação Orientada a Objetos",
                "Estilização de páginas",
                "Banco de dados visual",
                "Marcação semântica"
            ],
            correta: 0,
            explicacao: "C++ suporta Programação Orientada a Objetos, usando classes e objetos."
        },
        {
            pergunta: "O que é uma classe?",
            alternativas: [
                "Um modelo para criar objetos",
                "Um banco de dados",
                "Uma imagem",
                "Um comando de CSS"
            ],
            correta: 0,
            explicacao: "Classe é um modelo que define características e comportamentos de objetos."
        }
    ],

    csharp: [
        {
            pergunta: "C# é muito usado com qual plataforma?",
            alternativas: [
                ".NET",
                "Laravel",
                "React",
                "MySQL Workbench"
            ],
            correta: 0,
            explicacao: "C# é fortemente associado à plataforma .NET."
        },
        {
            pergunta: "Qual empresa criou o C#?",
            alternativas: [
                "Google",
                "Microsoft",
                "Apple",
                "Meta"
            ],
            correta: 1,
            explicacao: "C# foi criado pela Microsoft."
        },
        {
            pergunta: "C# é usado em desenvolvimento de jogos com qual engine?",
            alternativas: [
                "Unity",
                "Photoshop",
                "Figma",
                "WordPress"
            ],
            correta: 0,
            explicacao: "A Unity usa C# como linguagem principal para scripts."
        },
        {
            pergunta: "Qual conceito aparece muito em C#?",
            alternativas: [
                "POO",
                "Tags HTML",
                "Seletores CSS",
                "Planilhas"
            ],
            correta: 0,
            explicacao: "C# é uma linguagem muito usada para praticar Programação Orientada a Objetos."
        },
        {
            pergunta: "Qual tipo pode armazenar texto em C#?",
            alternativas: [
                "int",
                "string",
                "bool",
                "float"
            ],
            correta: 1,
            explicacao: "O tipo string é usado para armazenar textos."
        }
    ],

    java: [
        {
            pergunta: "Java é muito conhecido por qual conceito?",
            alternativas: [
                "Programação Orientada a Objetos",
                "Edição de imagens",
                "Planilhas",
                "Design gráfico"
            ],
            correta: 0,
            explicacao: "Java é muito usado para ensinar e aplicar Programação Orientada a Objetos."
        },
        {
            pergunta: "Qual arquivo geralmente contém código Java?",
            alternativas: [
                ".java",
                ".css",
                ".html",
                ".sql"
            ],
            correta: 0,
            explicacao: "Arquivos Java geralmente usam a extensão .java."
        },
        {
            pergunta: "Qual método inicia uma aplicação Java?",
            alternativas: [
                "start()",
                "run()",
                "main()",
                "init()"
            ],
            correta: 2,
            explicacao: "O método main() é o ponto de entrada de uma aplicação Java."
        },
        {
            pergunta: "Qual palavra cria uma classe em Java?",
            alternativas: [
                "function",
                "class",
                "table",
                "style"
            ],
            correta: 1,
            explicacao: "A palavra-chave class é usada para declarar classes em Java."
        },
        {
            pergunta: "Java é muito usado em:",
            alternativas: [
                "Sistemas corporativos e APIs",
                "Apenas design",
                "Apenas edição de vídeo",
                "Somente planilhas"
            ],
            correta: 0,
            explicacao: "Java é bastante usado em sistemas corporativos, APIs, aplicações Android e sistemas robustos."
        }
    ],

    poo: [
        {
            pergunta: "O que é um objeto na POO?",
            alternativas: [
                "Uma instância de uma classe",
                "Uma tabela SQL",
                "Uma tag HTML",
                "Um arquivo CSS"
            ],
            correta: 0,
            explicacao: "Objeto é uma instância criada a partir de uma classe."
        },
        {
            pergunta: "O que é encapsulamento?",
            alternativas: [
                "Proteger dados e controlar acesso",
                "Apagar arquivos",
                "Criar cores",
                "Fazer loops"
            ],
            correta: 0,
            explicacao: "Encapsulamento controla o acesso aos dados internos de uma classe."
        },
        {
            pergunta: "O que é herança?",
            alternativas: [
                "Uma classe receber características de outra",
                "Um comando de banco de dados",
                "Uma função matemática",
                "Um efeito visual"
            ],
            correta: 0,
            explicacao: "Herança permite que uma classe reutilize atributos e métodos de outra classe."
        },
        {
            pergunta: "O que é polimorfismo?",
            alternativas: [
                "Um comportamento com várias formas",
                "Um erro de sintaxe",
                "Um seletor CSS",
                "Uma variável fixa"
            ],
            correta: 0,
            explicacao: "Polimorfismo permite que métodos tenham comportamentos diferentes dependendo do contexto."
        },
        {
            pergunta: "Qual alternativa representa melhor uma classe?",
            alternativas: [
                "Um molde para criar objetos",
                "Uma linha do banco",
                "Uma imagem",
                "Um botão"
            ],
            correta: 0,
            explicacao: "Classe é um modelo usado para criar objetos."
        }
    ],

    crud: [
        {
            pergunta: "O que significa a letra C em CRUD?",
            alternativas: [
                "Create",
                "Code",
                "Class",
                "Cancel"
            ],
            correta: 0,
            explicacao: "C significa Create, ou seja, criar registros."
        },
        {
            pergunta: "O que significa a letra R em CRUD?",
            alternativas: [
                "Remove",
                "Read",
                "Repeat",
                "Return"
            ],
            correta: 1,
            explicacao: "R significa Read, ou seja, ler ou listar dados."
        },
        {
            pergunta: "O que significa a letra U em CRUD?",
            alternativas: [
                "Update",
                "Upload",
                "User",
                "Use"
            ],
            correta: 0,
            explicacao: "U significa Update, ou seja, atualizar dados."
        },
        {
            pergunta: "O que significa a letra D em CRUD?",
            alternativas: [
                "Download",
                "Delete",
                "Design",
                "Data"
            ],
            correta: 1,
            explicacao: "D significa Delete, ou seja, excluir dados."
        },
        {
            pergunta: "Um sistema de cadastro geralmente usa:",
            alternativas: [
                "CRUD",
                "Apenas HTML",
                "Somente imagem",
                "Apenas fonte"
            ],
            correta: 0,
            explicacao: "Sistemas de cadastro normalmente criam, listam, editam e excluem dados."
        }
    ],

    "banco-de-dados": [
        {
            pergunta: "O que é SQL?",
            alternativas: [
                "Linguagem para trabalhar com bancos de dados",
                "Linguagem de estilo",
                "Editor de imagem",
                "Sistema operacional"
            ],
            correta: 0,
            explicacao: "SQL é usada para consultar e manipular dados em bancos relacionais."
        },
        {
            pergunta: "Qual comando é usado para consultar dados?",
            alternativas: [
                "SELECT",
                "INSERT",
                "DELETE",
                "UPDATE"
            ],
            correta: 0,
            explicacao: "SELECT é usado para buscar informações em uma tabela."
        },
        {
            pergunta: "Qual comando insere dados?",
            alternativas: [
                "INSERT",
                "SELECT",
                "DROP",
                "ALTER"
            ],
            correta: 0,
            explicacao: "INSERT adiciona novos registros em uma tabela."
        },
        {
            pergunta: "O que é chave primária?",
            alternativas: [
                "Identificador único de um registro",
                "Uma cor do sistema",
                "Uma tag HTML",
                "Um botão"
            ],
            correta: 0,
            explicacao: "Chave primária identifica cada registro de forma única."
        },
        {
            pergunta: "MySQL é um:",
            alternativas: [
                "Banco de dados relacional",
                "Editor de vídeos",
                "Framework CSS",
                "Navegador"
            ],
            correta: 0,
            explicacao: "MySQL é um sistema de gerenciamento de banco de dados relacional."
        }
    ],

    html: [
        {
            pergunta: "HTML é usado para:",
            alternativas: [
                "Estruturar páginas web",
                "Estilizar páginas",
                "Criar banco de dados",
                "Compilar programas"
            ],
            correta: 0,
            explicacao: "HTML define a estrutura e o conteúdo de páginas web."
        },
        {
            pergunta: "Qual tag cria um título principal?",
            alternativas: [
                "<h1>",
                "<p>",
                "<div>",
                "<img>"
            ],
            correta: 0,
            explicacao: "A tag <h1> representa o título principal de uma página."
        },
        {
            pergunta: "Qual tag cria um link?",
            alternativas: [
                "<a>",
                "<link>",
                "<section>",
                "<script>"
            ],
            correta: 0,
            explicacao: "A tag <a> é usada para criar links."
        },
        {
            pergunta: "Qual tag representa uma imagem?",
            alternativas: [
                "<img>",
                "<image>",
                "<picture-only>",
                "<src>"
            ],
            correta: 0,
            explicacao: "A tag <img> é usada para inserir imagens."
        },
        {
            pergunta: "Qual estrutura é mais semântica?",
            alternativas: [
                "<header>, <main>, <section>, <footer>",
                "<div>, <div>, <div>",
                "<span>, <span>",
                "<b>, <i>"
            ],
            correta: 0,
            explicacao: "Tags semânticas ajudam a organizar melhor o conteúdo da página."
        }
    ],

    css: [
        {
            pergunta: "CSS é usado para:",
            alternativas: [
                "Estilizar páginas web",
                "Criar banco de dados",
                "Executar servidor",
                "Criar tabelas SQL"
            ],
            correta: 0,
            explicacao: "CSS define cores, tamanhos, espaçamentos, layouts e animações."
        },
        {
            pergunta: "Qual propriedade altera a cor do texto?",
            alternativas: [
                "color",
                "background",
                "font-size",
                "display"
            ],
            correta: 0,
            explicacao: "A propriedade color altera a cor do texto."
        },
        {
            pergunta: "Qual propriedade altera o fundo?",
            alternativas: [
                "background",
                "font-family",
                "margin",
                "padding"
            ],
            correta: 0,
            explicacao: "background define o fundo de um elemento."
        },
        {
            pergunta: "Flexbox é usado para:",
            alternativas: [
                "Criar layouts flexíveis",
                "Criar banco de dados",
                "Criar variáveis",
                "Executar APIs"
            ],
            correta: 0,
            explicacao: "Flexbox facilita alinhamento e distribuição de elementos."
        },
        {
            pergunta: "Media queries são usadas para:",
            alternativas: [
                "Responsividade",
                "Banco de dados",
                "Criar imagens",
                "Login"
            ],
            correta: 0,
            explicacao: "Media queries permitem adaptar o layout para diferentes telas."
        }
    ],

    javascript: [
        {
            pergunta: "JavaScript é usado no front-end para:",
            alternativas: [
                "Adicionar interatividade",
                "Criar apenas estilos",
                "Criar apenas HTML",
                "Editar imagens"
            ],
            correta: 0,
            explicacao: "JavaScript permite interações, eventos, validações e manipulação do DOM."
        },
        {
            pergunta: "Qual comando exibe algo no console?",
            alternativas: [
                "console.log()",
                "print()",
                "echo()",
                "show()"
            ],
            correta: 0,
            explicacao: "console.log() exibe mensagens no console do navegador."
        },
        {
            pergunta: "O que é DOM?",
            alternativas: [
                "Representação da estrutura HTML no JavaScript",
                "Um banco de dados",
                "Uma linguagem",
                "Um editor de código"
            ],
            correta: 0,
            explicacao: "DOM é a representação dos elementos HTML que o JavaScript pode manipular."
        },
        {
            pergunta: "Qual método seleciona um elemento pelo ID?",
            alternativas: [
                "document.getElementById()",
                "document.selectClass()",
                "window.id()",
                "html.get()"
            ],
            correta: 0,
            explicacao: "getElementById() seleciona um elemento HTML pelo seu ID."
        },
        {
            pergunta: "LocalStorage serve para:",
            alternativas: [
                "Salvar dados no navegador",
                "Criar imagens",
                "Estilizar botões",
                "Criar tabelas"
            ],
            correta: 0,
            explicacao: "LocalStorage permite salvar dados localmente no navegador."
        }
    ]
};

function getQuizBySlug(slug) {
    return EFDEV_QUIZZES[slug] || [];
}