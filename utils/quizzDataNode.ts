const quizDataNode = [
    {
        question: "Quando uma função JavaScript é invocada (chamada) no Node, onde um novo quadro é colocado?",
        options: [
          { text: "call stack", id: "a" },
          { text: "event loop", id: "b" },
          { text: "poll phase", id: "c" },
          { text: "events queue", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Qual dos seguintes é um módulo principal do Node?",
        options: [
          { text: "webpack", id: "a" },
          { text: "crypto", id: "b" },
          { text: "request", id: "c" },
          { text: "chalk", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Qual dos seguintes métodos da classe Buffer retorna um buffer não inicializado?",
        options: [
          { text: "allocUnsafe", id: "a" },
          { text: "concat", id: "b" },
          { text: "from", id: "c" },
          { text: "alloc", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Qual dos seguintes módulos NÃO é um módulo integrado no Node?",
        options: [
          { text: "ftp", id: "a" },
          { text: "events", id: "b" },
          { text: "dgram", id: "c" },
          { text: "http2", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Qual método do módulo fs pode ser usado para ler o conteúdo de um arquivo sem armazená-lo em buffer na memória?",
        options: [
          { text: "read", id: "a" },
          { text: "readFile", id: "b" },
          { text: "createReadStream", id: "c" },
          { text: "readFileSync", id: "d" },
        ],
        correct: "c",
      },
      {
        question: "Qual dos seguintes métodos de módulo DNS usa os recursos subjacentes do sistema operacional e não executa necessariamente nenhuma comunicação de rede?",
        options: [
          { text: "lookup", id: "a" },
          { text: "resolve", id: "b" },
          { text: "resolve4", id: "c" },
          { text: "reverse", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Como você verifica se um valor é um objeto de data no Node?",
        options: [
          { text: "util.types.isDate(value)", id: "a" },
          { text: "assert.isDate(value)", id: "b" },
          { text: "console.isDate(value)", id: "c" },
          { text: "util.date(value)", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Você pode criar um servidor web https com Node.js?",
        options: [
          { text: "não, ainda não há módulos que suportem isso", id: "a" },
          { text: "sim, com os módulos https ou http2", id: "b" },
          { text: "sim, através do módulo path", id: "c" },
          { text: "sim, com o módulo http", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Qual é a API projetada para isolar complementos de alterações no mecanismo JavaScript subjacente?",
        options: [
          { text: "A-API", id: "a" },
          { text: "Z-API", id: "b" },
          { text: "N-API", id: "c" },
          { text: "X-API", id: "d" },
        ],
        correct: "c",
      },
      {
        question: "Qual opção CLI você pode usar para depurar um script de nó no Chrome DevTools?",
        options: [
          { text: "--dev-tools", id: "a" },
          { text: "--inspect", id: "b" },
          { text: "--chrome", id: "c" },
          { text: "--debug", id: "d" },
        ],
        correct: "b",
      },
      /*{
        question: "",
        options: [
          { text: "", id: "a" },
          { text: "", id: "b" },
          { text: "", id: "c" },
          { text: "", id: "d" },
        ],
        correct: "",
      },*/
]

export default quizDataNode