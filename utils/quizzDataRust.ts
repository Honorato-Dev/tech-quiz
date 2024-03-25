const quizDataRust = [
  {
    question: "Quem desenvolveu a linguagem de programação Rust?",
    image:"",
    options: [
        { text: "Mozilla", id: "a" },
        { text: "Google", id: "b" },
        { text: "Microsoft", id: "c" },
        { text: "Facebook", id: "d" }
    ],
    correct: "a"
},
{
  question: "Qual é a principal característica de Rust que o torna único?",
  image:"",
  options: [
      { text: "Sistema de tipagem forte", id: "a" },
      { text: "Gerenciamento de memória seguro", id: "b" },
      { text: "Suporte nativo a programação orientada a objetos", id: "c" },
      { text: "Compilação dinâmica", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o comando usado para compilar um programa Rust?",
  image:"",
  options: [
      { text: "rustc", id: "a" },
      { text: "compile", id: "b" },
      { text: "run", id: "c" },
      { text: "build", id: "d" }
  ],
  correct: "a"
},

{
  question: "Como Rust lida com a segurança de memória?",
  image:"",
  options: [
      { text: "Utilizando coletor de lixo", id: "a" },
      { text: "Através de referências e empréstimos", id: "b" },
      { text: "Ignorando a segurança de memória", id: "c" },
      { text: "Utilizando ponteiros nulos", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é a macro usada para imprimir uma mensagem no console em Rust?",
  image:"",
  options: [
      { text: "print!", id: "a" },
      { text: "println!", id: "b" },
      { text: "log!", id: "c" },
      { text: "display!", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o símbolo usado para indicar a multiplicação em Rust?",
  image:"",
  options: [
      { text: "*", id: "a" },
      { text: "+", id: "b" },
      { text: "/", id: "c" },
      { text: "%", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o operador usado para comparar dois valores em Rust?",
  image:"",
  options: [
      { text: "==", id: "a" },
      { text: "=", id: "b" },
      { text: ">", id: "c" },
      { text: "<", id: "d" }
  ],
  correct: "a"
},

{
  question: "Qual é a palavra-chave usada para declarar uma variável mutável em Rust?",
  image:"",
  options: [
      { text: "mut", id: "a" },
      { text: "var", id: "b" },
      { text: "let", id: "c" },
      { text: "mutable", id: "d" }
  ],
  correct: "a"
},

{
  question: "Qual é a estrutura de controle de fluxo usada para tomar decisões em Rust?",
  image:"",
  options: [
      { text: "if...else", id: "a" },
      { text: "switch", id: "b" },
      { text: "for", id: "c" },
      { text: "while", id: "d" }
  ],
  correct: "a"
},

{
  question: "Qual é a função usada para converter uma string em um número em Rust?",
  image:"",
  options: [
      { text: "parse()", id: "a" },
      { text: "convert()", id: "b" },
      { text: "to_number()", id: "c" },
      { text: "from_string()", id: "d" }
  ],
  correct: "a"
},

{
  question: "Qual é o tipo de dados usado para representar um número inteiro em Rust?",
  image:"",
  options: [
      { text: "int", id: "a" },
      { text: "integer", id: "b" },
      { text: "i32", id: "c" },
      { text: "number", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é o tipo de dados usado para representar um número de ponto flutuante em Rust?",
  image:"",
  options: [
      { text: "float", id: "a" },
      { text: "floating", id: "b" },
      { text: "f32", id: "c" },
      { text: "decimal", id: "d" }
  ],
  correct: "c"
},

{
  question: "Qual é o tipo de dados usado para representar um caractere em Rust?",
  image:"",
  options: [
      { text: "char", id: "a" },
      { text: "character", id: "b" },
      { text: "chr", id: "c" },
      { text: "string", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o tipo de dados usado para representar um booleano em Rust?",
  image:"",
  options: [
      { text: "bool", id: "a" },
      { text: "boolean", id: "b" },
      { text: "true/false", id: "c" },
      { text: "logical", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o tipo de dados usado para representar uma sequência de bytes em Rust?",
  image:"",
  options: [
      { text: "byte", id: "a" },
      { text: "byte_array", id: "b" },
      { text: "bytes", id: "c" },
      { text: "u8", id: "d" }
  ],
  correct: "d"
},

{
  question: "Qual é o operador usado para acessar um valor em um vetor em Rust?",
  image:"",
  options: [
      { text: "[]", id: "a" },
      { text: ".", id: "b" },
      { text: "()", id: "c" },
      { text: "{}", id: "d" }
  ],
  correct: "a"
},

{
  question: "Qual é o método usado para concatenar duas strings em Rust?",
  image:"",
  options: [
      { text: "concat()", id: "a" },
      { text: "merge()", id: "b" },
      { text: "join()", id: "c" },
      { text: "append()", id: "d" }
  ],
  correct: "c"
},

{
  question: "Qual é o tipo de dados usado para representar uma coleção de valores em Rust?",
  image:"",
  options: [
      { text: "list", id: "a" },
      { text: "vector", id: "b" },
      { text: "array", id: "c" },
      { text: "Vec", id: "d" }
  ],
  correct: "d"
},

{
  question: "Qual é o método usado para adicionar um elemento a um vetor em Rust?",
  image:"",
  options: [
      { text: "add()", id: "a" },
      { text: "insert()", id: "b" },
      { text: "push()", id: "c" },
      { text: "append()", id: "d" }
  ],
  correct: "c"
},

{
  question: "Qual é o método usado para remover o último elemento de um vetor em Rust?",
  image:"",
  options: [
      { text: "remove()", id: "a" },
      { text: "delete()", id: "b" },
      { text: "pop()", id: "c" },
      { text: "slice()", id: "d" }
  ],
  correct: "c"
}
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
export default quizDataRust