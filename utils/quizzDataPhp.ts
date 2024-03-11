const quizDataPhp = [
  {
    question: "Qual é o significado de PHP?",
    options: [
        { text: "PHP: Hypertext Preprocessor", id: "a" },
        { text: "Personal Home Page", id: "b" },
        { text: "Private Hosting Platform", id: "c" },
        { text: "Preprocessed Hypertext Pages", id: "d" }
    ],
    correct: "a"
},
{
  question: "Qual é o símbolo usado para iniciar uma variável no PHP?",
  options: [
      { text: "&", id: "a" },
      { text: "$", id: "b" },
      { text: "@", id: "c" },
      { text: "#", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o operador de concatenação de strings no PHP?",
  options: [
      { text: "+", id: "a" },
      { text: "&", id: "b" },
      { text: ".", id: "c" },
      { text: "-", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é a função usada para imprimir texto no PHP?",
  options: [
      { text: "echo", id: "a" },
      { text: "print", id: "b" },
      { text: "printf", id: "c" },
      { text: "display", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o método utilizado para enviar dados para um servidor no PHP?",
  options: [
      { text: "GET", id: "a" },
      { text: "POST", id: "b" },
      { text: "REQUEST", id: "c" },
      { text: "SUBMIT", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o operador usado para verificar a igualdade de valor e tipo no PHP?",
  options: [
      { text: "===", id: "a" },
      { text: "==", id: "b" },
      { text: "=", id: "c" },
      { text: "!==", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a instrução de controle de fluxo usada para tomar decisões no PHP?",
  options: [
      { text: "switch", id: "a" },
      { text: "if...else", id: "b" },
      { text: "for", id: "c" },
      { text: "while", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é a função utilizada para iniciar uma sessão no PHP?",
  options: [
      { text: "session_start()", id: "a" },
      { text: "start_session()", id: "b" },
      { text: "init_session()", id: "c" },
      { text: "begin_session()", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o comando usado para incluir o conteúdo de um arquivo no PHP?",
  options: [
      { text: "require", id: "a" },
      { text: "load", id: "b" },
      { text: "include", id: "c" },
      { text: "import", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é a função usada para verificar se uma variável está definida no PHP?",
  options: [
      { text: "is_defined()", id: "a" },
      { text: "isset()", id: "b" },
      { text: "defined()", id: "c" },
      { text: "check()", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é a função utilizada para obter o comprimento de uma string no PHP?",
  options: [
      { text: "length()", id: "a" },
      { text: "size()", id: "b" },
      { text: "count()", id: "c" },
      { text: "strlen()", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é a instrução usada para iniciar um bloco de código condicional no PHP?",
  options: [
      { text: "if", id: "a" },
      { text: "begin", id: "b" },
      { text: "then", id: "c" },
      { text: "start", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o operador usado para acessar um elemento de matriz no PHP?",
  options: [
      { text: ":", id: "a" },
      { text: ".", id: "b" },
      { text: "[ ]", id: "c" },
      { text: "->", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é o operador usado para incrementar uma variável no PHP?",
  options: [
      { text: "++", id: "a" },
      { text: "--", id: "b" },
      { text: "+=", id: "c" },
      { text: "-=", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a função usada para converter uma string em minúsculas no PHP?",
  options: [
      { text: "toLower()", id: "a" },
      { text: "lowercase()", id: "b" },
      { text: "strtolower()", id: "c" },
      { text: "caseLower()", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é a função usada para converter uma string em maiúsculas no PHP?",
  options: [
      { text: "toUpperCase()", id: "a" },
      { text: "uppercase()", id: "b" },
      { text: "strtoupper()", id: "c" },
      { text: "caseUpper()", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é a função utilizada para retornar o valor máximo de uma matriz no PHP?",
  options: [
      { text: "max()", id: "a" },
      { text: "maximum()", id: "b" },
      { text: "array_max()", id: "c" },
      { text: "array_maximum()", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a função usada para remover espaços em branco do início e do final de uma string no PHP?",
  options: [
      { text: "trim()", id: "a" },
      { text: "strip()", id: "b" },
      { text: "clean()", id: "c" },
      { text: "removeSpaces()", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a função usada para dividir uma string em uma matriz no PHP?",
  options: [
      { text: "split()", id: "a" },
      { text: "explode()", id: "b" },
      { text: "slice()", id: "c" },
      { text: "divide()", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é a função usada para juntar elementos de uma matriz em uma string no PHP?",
  options: [
      { text: "implode()", id: "a" },
      { text: "join()", id: "b" },
      { text: "concat()", id: "c" },
      { text: "merge()", id: "d" }
  ],
  correct: "a"
},



    //   {
    //     question: "",
     //    image:"",
    //     options: [
    //       { text: "", id: "a" },
    //       { text: "", id: "b" },
    //       { text: "", id: "c" },
    //       { text: "", id: "d" },
    //     ],
    //     correct: "",
    //   },
]

export default quizDataPhp