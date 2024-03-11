const quizDataCsharp = [
  {
    question: "Qual é a principal diferença entre classes e structs em C#?",
    image: "",
    options: [
      { text: "Classes são tipos de referência, enquanto structs são tipos de valor.", id: "a" },
      { text: "Structs são tipos de referência, enquanto classes são tipos de valor.", id: "b" },
      { text: "Classes não podem ter métodos, enquanto structs podem.", id: "c" },
      { text: "Structs não podem herdar de outras estruturas, enquanto classes podem.", id: "d" }
    ],
    correct: "a"
},
{
  question: "O que é o operador 'new' em C#?",
  image: "",
  options: [
    { text: "Um operador para criar novas instâncias de tipos.", id: "a" },
    { text: "Um operador para substituir valores em uma coleção.", id: "b" },
    { text: "Um operador para concatenar strings.", id: "c" },
    { text: "Um operador para converter tipos de dados.", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a função do método 'ToString()' em C#?",
  image: "",
  options: [
    { text: "Converter um objeto em uma representação de string.", id: "a" },
    { text: "Converte uma string em um objeto.", id: "b" },
    { text: "Imprimir um objeto na tela.", id: "c" },
    { text: "Converte um número em uma representação de string.", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'boxing' e 'unboxing' em C#?",
  image: "",
  options: [
    { text: "'Boxing' é o processo de converter um tipo de valor em um tipo de referência, enquanto 'unboxing' é o processo oposto.", id: "a" },
    { text: "'Unboxing' é o processo de converter um tipo de valor em um tipo de referência, enquanto 'boxing' é o processo oposto.", id: "b" },
    { text: "Ambos os termos referem-se ao mesmo conceito em C#.", id: "c" },
    { text: "Nenhum dos termos é válido em C#.", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'namespace' em C#?",
  image: "",
  options: [
    { text: "Um agrupamento lógico de tipos.", id: "a" },
    { text: "Uma estrutura de controle de fluxo.", id: "b" },
    { text: "Um tipo de dado numérico.", id: "c" },
    { text: "Um tipo de dado de texto.", id: "d" }
  ],
  correct: "a"
},

{
  question: "Qual é a diferença entre '=='' e '.Equals()' em C#?",
  image: "",
  options: [
    { text: "'==' compara referências de objetos, enquanto '.Equals()' compara os valores dos objetos.", id: "a" },
    { text: "'==' compara os valores dos objetos, enquanto '.Equals()' compara referências de objetos.", id: "b" },
    { text: "'==' e '.Equals()' são equivalentes e podem ser usados de forma intercambiável.", id: "c" },
    { text: "Não há diferença entre os dois.", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o modificador de acesso padrão para membros de uma classe em C#?",
  image: "",
  options: [
    { text: "private", id: "a" },
    { text: "public", id: "b" },
    { text: "protected", id: "c" },
    { text: "internal", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'polimorfismo' em C#?",
  image: "",
  options: [
    { text: "A capacidade de um método ter o mesmo nome, mas comportamentos diferentes em classes diferentes.", id: "a" },
    { text: "Um tipo de loop em C#.", id: "b" },
    { text: "Um tipo de dado numérico.", id: "c" },
    { text: "Uma estrutura de controle de fluxo.", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a principal diferença entre uma interface e uma classe abstrata em C#?",
  image: "",
  options: [
    { text: "Uma classe abstrata pode ter implementações de métodos, enquanto uma interface não pode.", id: "a" },
    { text: "Uma interface pode ter construtores, enquanto uma classe abstrata não pode.", id: "b" },
    { text: "Uma classe abstrata pode ser instanciada, enquanto uma interface não pode.", id: "c" },
    { text: "Não há diferença entre uma interface e uma classe abstrata em C#.", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'casting' em C#?",
  image: "",
  options: [
    { text: "A conversão explícita de um tipo de dado para outro.", id: "a" },
    { text: "A criação de novas instâncias de tipos.", id: "b" },
    { text: "A declaração de variáveis.", id: "c" },
    { text: "A definição de métodos.", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'delegate' em C#?",
  image: "",
  options: [
    { text: "Um tipo de dado que representa referências a métodos com uma lista de parâmetros específica e um tipo de retorno específico.", id: "a" },
    { text: "Uma estrutura de controle de fluxo.", id: "b" },
    { text: "Um tipo de loop em C#.", id: "c" },
    { text: "Uma estrutura de dados para armazenar valores.", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a função do 'using' em C#?",
  image: "",
  options: [
    { text: "Para garantir que os recursos são liberados após o uso.", id: "a" },
    { text: "Para declarar uma variável.", id: "b" },
    { text: "Para definir um método.", id: "c" },
    { text: "Para iniciar uma estrutura de repetição.", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'linq' em C#?",
  image: "",
  options: [
    { text: "Uma forma de fazer consultas em fontes de dados .NET, como coleções de objetos, bancos de dados SQL, serviços web e outros tipos de dados.", id: "a" },
    { text: "Um tipo de dado numérico.", id: "b" },
    { text: "Um tipo de estrutura de controle.", id: "c" },
    { text: "Uma forma de declarar variáveis em C#.", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'async' e 'await' em C#?",
  image: "",
  options: [
    { text: "'async' é usado para indicar que um método assíncrono está sendo definido, enquanto 'await' é usado para esperar a conclusão de uma operação assíncrona.", id: "a" },
    { text: "'await' é usado para indicar que um método assíncrono está sendo definido, enquanto 'async' é usado para esperar a conclusão de uma operação assíncrona.", id: "b" },
    { text: "Ambos são equivalentes e podem ser usados de forma intercambiável.", id: "c" },
    { text: "Nenhum dos termos é válido em C#.", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o operador usado para definir um tipo de dado nullable em C#?",
  image: "",
  options: [
    { text: "?", id: "a" },
    { text: "*", id: "b" },
    { text: "#", id: "c" },
    { text: "&", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'serialization' em C#?",
  image: "",
  options: [
    { text: "O processo de converter um objeto em uma sequência de bytes para armazenamento ou transmissão.", id: "a" },
    { text: "O processo de converter uma string em um objeto.", id: "b" },
    { text: "O processo de criar novas instâncias de tipos.", id: "c" },
    { text: "O processo de declarar variáveis.", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'indexer' em C#?",
  image: "",
  options: [
    { text: "Uma propriedade de uma coleção que permite acessar elementos da coleção usando um índice.", id: "a" },
    { text: "Uma estrutura de controle de fluxo.", id: "b" },
    { text: "Um tipo de loop em C#.", id: "c" },
    { text: "Uma estrutura de dados para armazenar valores.", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é um 'delegate multicast' em C#?",
  image: "",
  options: [
    { text: "Um tipo de delegate que pode conter referências a mais de um método.", id: "a" },
    { text: "Um tipo de estrutura de controle de fluxo.", id: "b" },
    { text: "Um tipo de dado numérico.", id: "c" },
    { text: "Uma forma de fazer consultas em fontes de dados .NET.", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a diferença entre 'string' e 'StringBuilder' em C#?",
  image: "",
  options: [
    { text: "'StringBuilder' é mais eficiente para manipular grandes quantidades de texto devido à sua capacidade de modificar uma sequência de caracteres sem alocar uma nova string, enquanto 'string' é imutável.", id: "a" },
    { text: "'string' é mais eficiente para manipular grandes quantidades de texto devido à sua capacidade de modificar uma sequência de caracteres sem alocar uma nova string, enquanto 'StringBuilder' é imutável.", id: "b" },
    { text: "'string' e 'StringBuilder' são equivalentes e podem ser usados de forma intercambiável.", id: "c" },
    { text: "Não há diferença entre 'string' e 'StringBuilder' em C#.", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é um 'event' em C#?",
  image: "",
  options: [
    { text: "Uma ação que ocorre em resposta a uma interação do usuário ou a uma alteração de estado.", id: "a" },
    { text: "Uma estrutura de controle de fluxo.", id: "b" },
    { text: "Um tipo de loop em C#.", id: "c" },
    { text: "Um tipo de dado numérico.", id: "d" }
  ],
  correct: "a"
},

    //   {
    //     question: "",
    //     image:"",
    //     options: [
    //       { text: "", id: "a" },
    //       { text: "", id: "b" },
    //       { text: "", id: "c" },
    //       { text: "", id: "d" },
    //     ],
    //     correct: "",
    //   },


]
export default quizDataCsharp