const quizDataGolang = [
  {
    question: "Quem criou a linguagem de programação Go?",
    image: "",
    options: [
      { text: "Robert Griesemer, Rob Pike e Ken Thompson", id: "a" },
      { text: "James Gosling", id: "b" },
      { text: "Guido van Rossum", id: "c" },
      { text: "Bjarne Stroustrup", id: "d" }
    ],
    correct: "a"
},
{
  question: "Qual das seguintes empresas desenvolveu a linguagem Go?",
  image: "",
  options: [
    { text: "Google", id: "a" },
    { text: "Microsoft", id: "b" },
    { text: "Apple", id: "c" },
    { text: "Facebook", id: "d" }
  ],
  correct: "a"
}
,
{
  question: "Qual é o principal objetivo do projeto Go?",
  image: "",
  options: [
    { text: "Criar uma linguagem de programação eficiente e fácil de usar para desenvolvimento de sistemas de grande escala.", id: "a" },
    { text: "Criar uma linguagem de programação para desenvolvimento de aplicativos móveis.", id: "b" },
    { text: "Criar uma linguagem de programação para desenvolvimento de jogos.", id: "c" },
    { text: "Criar uma linguagem de programação para desenvolvimento de aplicativos desktop.", id: "d" }
  ],
  correct: "a"
}
,

{
  question: "Qual é a principal característica da sintaxe da linguagem Go?",
  image: "",
  options: [
    { text: "Simplicidade e legibilidade", id: "a" },
    { text: "Complexidade e robustez", id: "b" },
    { text: "Verbosidade e excesso de detalhes", id: "c" },
    { text: "Flexibilidade e expressividade", id: "d" }
  ],
  correct: "a"
}
,
{
  question: "Go é uma linguagem de programação compilada ou interpretada?",
  image: "",
  options: [
    { text: "Compilada", id: "a" },
    { text: "Interpretada", id: "b" },
    { text: "Híbrida", id: "c" },
    { text: "Não se aplica", id: "d" }
  ],
  correct: "a"
}
,
{
  question: "Qual é o comando usado para compilar um programa Go?",
  image: "",
  options: [
    { text: "go build", id: "a" },
    { text: "go run", id: "b" },
    { text: "go compile", id: "c" },
    { text: "go execute", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o tipo de dados básico para representar números inteiros sem sinal em Go?",
  image: "",
  options: [
    { text: "uint", id: "a" },
    { text: "int", id: "b" },
    { text: "uint32", id: "c" },
    { text: "int64", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a declaração usada para criar uma variável em Go?",
  image: "",
  options: [
    { text: "var", id: "a" },
    { text: "let", id: "b" },
    { text: "const", id: "c" },
    { text: "val", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a função usada para imprimir na saída padrão em Go?",
  image: "",
  options: [
    { text: "fmt.Println()", id: "a" },
    { text: "print()", id: "b" },
    { text: "console.log()", id: "c" },
    { text: "System.out.println()", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o tipo de dados básico para representar números inteiros em Go?",
  image: "",
  options: [
    { text: "int", id: "a" },
    { text: "float", id: "b" },
    { text: "double", id: "c" },
    { text: "integer", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é um 'slice' em Go?",
  image: "",
  options: [
    { text: "Uma estrutura de dados semelhante a um array, mas com tamanho variável.", id: "a" },
    { text: "Uma estrutura de controle de fluxo.", id: "b" },
    { text: "Um tipo de loop em Go.", id: "c" },
    { text: "Uma forma de declarar variáveis em Go.", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o operador usado para declarar um 'pointer' em Go?",
  image: "",
  options: [
    { text: "*", id: "a" },
    { text: "&", id: "b" },
    { text: "-", id: "c" },
    { text: "+", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é um 'channel' em Go?",
  image: "",
  options: [
    { text: "Um mecanismo de comunicação usado para sincronizar a execução de goroutines.", id: "a" },
    { text: "Uma estrutura de controle de fluxo.", id: "b" },
    { text: "Um tipo de loop em Go.", id: "c" },
    { text: "Uma forma de declarar variáveis em Go.", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a função usada para criar uma goroutine em Go?",
  image: "",
  options: [
    { text: "go", id: "a" },
    { text: "goroutine", id: "b" },
    { text: "thread", id: "c" },
    { text: "create", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'defer' em Go?",
  image: "",
  options: [
    { text: "Uma declaração usada para adiar a execução de uma função até o final de outra função.", id: "a" },
    { text: "Uma estrutura de controle de fluxo.", id: "b" },
    { text: "Um tipo de loop em Go.", id: "c" },
    { text: "Uma forma de declarar variáveis em Go.", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a função usada para ler entrada do usuário em Go?",
  image: "",
  options: [
    { text: "fmt.Scanln()", id: "a" },
    { text: "read()", id: "b" },
    { text: "input()", id: "c" },
    { text: "console.readLine()", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'panic' em Go?",
  image: "",
  options: [
    { text: "Uma função usada para interromper a execução do programa em caso de erro grave.", id: "a" },
    { text: "Uma estrutura de controle de fluxo.", id: "b" },
    { text: "Um tipo de loop em Go.", id: "c" },
    { text: "Uma forma de declarar variáveis em Go.", id: "d" }
  ],
  correct: "a"
},

{
  question: "Qual é o operador usado para concatenar strings em Go?",
  image: "",
  options: [
    { text: "+", id: "a" },
    { text: "&", id: "b" },
    { text: "concat", id: "c" },
    { text: "||", id: "d" }
  ],
  correct: "a"
},

{
  question: "Qual é a função usada para encontrar o comprimento de uma string em Go?",
  image: "",
  options: [
    { text: "len()", id: "a" },
    { text: "length()", id: "b" },
    { text: "count()", id: "c" },
    { text: "size()", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é 'goroutine' em Go?",
  image: "",
  options: [
    { text: "Uma unidade de execução leve que executa funções de forma concorrente.", id: "a" },
    { text: "Uma estrutura de controle de fluxo.", id: "b" },
    { text: "Um tipo de loop em Go.", id: "c" },
    { text: "Uma forma de declarar variáveis em Go.", id: "d" }
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
    //     correct: "b",
    //   },
]
export default quizDataGolang