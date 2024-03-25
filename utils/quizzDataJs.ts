const quizDataJs = [
    {
      question: "Which language runs in a web browser?",
      image:"",
      options: [
        { text: "Java", id: "a" },
        { text: "C", id: "b" },
        { text: "Python", id: "c" },
        { text: "JavaScript", id: "d" },
      ],
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      image:"",
      options: [
        { text: "Central Style Sheets", id: "a" },
        { text: "Cascading Style Sheets", id: "b" },
        { text: "Cascading Simple Sheets", id: "c" },
        { text: "Cars SUVs Sailboats", id: "d" },
      ],
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      image:"",
      options: [
        { text: "Hypertext Markup Language", id: "a" },
        { text: "Hypertext Markdown Language", id: "b" },
        { text: "Hyperloop Machine Language", id: "c" },
        { text: "Helicopters Terminals Motorboats Lamborghinis", id: "d" },
      ],
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      image:"",
      options: [
        { text: "1996", id: "a" },
        { text: "1995", id: "b" },
        { text: "1994", id: "c" },
        { text: "none of the above", id: "d" },
      ],
      correct: "b",
    },
    {
        question: "Qual operador retorna verdadeiro se os dois valores comparados não forem iguais?",
        image:"",
        options: [
          { text: "<>", id: "a" },
          { text: "~", id: "b" },
          { text: "==!", id: "c" },
          { text: "!==", id: "d" },
        ],
        correct: "d",
      },
      {
        question: "Como uma instrução forEach é diferente de uma instrução for?",
        image:"",
        options: [
          { text: "A instrução for usa somente uma função de retorno de chamada.", id: "a" },
          { text: "Uma instrução for é genérica, mas uma instrução forEach pode ser usada apenas com um array.", id: "b" },
          { text: "Somente uma instrução forEach permite que você especifique seu próprio iterador.", id: "c" },
          { text: "Uma instrução forEach é genérica, mas uma instrução for pode ser usada apenas com um array.", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Qual declaração é a maneira correta de criar uma variável chamada rate e atribuir a ela o valor 100?",
        image:"",
        options: [
          { text: "let rate = 100;", id: "a" },
          { text: "let 100 = rate;", id: "b" },
          { text: "100 = let rate;", id: "c" },
          { text: "rate = 100;", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Qual instrução cria um novo objeto usando o construtor Person? Qual instrução cria um novo objeto Person chamado 'student'?",
        image:"",
        options: [
          { text: "var student = new Person();", id: "a" },
          { text: "var student = construct Person;", id: "b" },
          { text: "var student = Person();", id: "c" },
          { text: "var student = construct Person();", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Como uma função cria uma clausura?",
        image:"",
        options: [
          { text: "Ele recarrega o documento sempre que o valor muda.", id: "a" },
          { text: "Ele retorna uma referência a uma variável em seu escopo pai.", id: "b" },
          { text: "Ele conclui a execução sem retornar", id: "c" },
          { text: "Ele vai copiar uma variável local para o escopo global.", id: "d" },
        ],
        correct: "b",
      },
     
      {
        question: "Qual propriedade referencia o objeto DOM que despachou um evento?",
        image:"",
        options: [
          { text: "self", id: "a" },
          { text: "object", id: "b" },
          { text: "target", id: "c" },
          { text: "source", id: "d" },
        ],
        correct: "c",
      },
      {
        question: " Qual método converte dados JSON em um objeto JavaScript?",
        image:"",
        options: [
          { text: "JSON.fromString();", id: "a" },
          { text: "JSON.parse()", id: "b" },
          { text: "JSON.toObject()", id: "c" },
          { text: "JSON.stringify()", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Quando você usaria uma instrução condicional?",
        image:"",
        options: [
          { text: "Quando você deseja reutilizar um conjunto de instruções várias vezes.", id: "a" },
          { text: "Quando você deseja que seu código escolha entre várias opções.", id: "b" },
          { text: "Quando você deseja agrupar dados.", id: "c" },
          { text: "Quando você deseja percorrer um grupo de instruções.", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Qual método Object retorna um iterável que pode ser usado para iterar sobre as propriedades de um objeto?",
        image:"",
        options: [
          { text: "Object.get()", id: "a" },
          { text: "Object.loop()", id: "b" },
          { text: "Object.each()", id: "c" },
          { text: "Object.keys()", id: "d" },
        ],
        correct: "d",
      },
      {
        question: "Qual é a diferença entre coleções criadas com Map e coleções criadas com Object?",
        image:"",
        options: [
          { text: "Você pode iterar sobre valores em um mapa em sua ordem de inserção.", id: "a" },
          { text: "Você pode contar os registros em um mapa com uma única chamada de método.", id: "b" },
          { text: "As teclas em Maps podem ser strings", id: "c" },
          { text: "Você pode acessar valores em um mapa sem iterar em toda a coleção.", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Qual dos seguintes operadores pode ser usado para fazer uma avaliação de curto-circuito?",
        image:"",
        options: [
          { text: "++", id: "a" },
          { text: "--", id: "b" },
          { text: "==", id: "c" },
          { text: "||", id: "d" },
        ],
        correct: "d",
      },
      {
        question: "Qual instrução define o construtor Person como pai do construtor Student na cadeia de protótipos?",
        image:"",
        options: [
          { text: "Student.parent = Person;", id: "a" },
          { text: "Student.prototype = new Person();", id: "b" },
          { text: "Student.prototype = Person;", id: "c" },
          { text: "Student.prototype = Person();", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Qual palavra-chave que define variável permite que sua variável seja acessada (como indefinida) antes da linha que a define?",
        image:"",
        options: [
          { text: "Todas elas", id: "a" },
          { text: "const", id: "b" },
          { text: "var", id: "c" },
          { text: "let", id: "d" },
        ],
        correct: "c",
      },
      {
        question: "Qual dos seguintes valores não é um booleano falso?",
        image:"",
        options: [
          { text: "Boolean(0)", id: "a" },
          { text: "Boolean('')", id: "b" },
          { text: "Boolean(NaN)", id: "c" },
          { text: "Boolean('false')", id: "d" },
        ],
        correct: "d",
      },
      {
        question: "Qual das alternativas a seguir não é uma palavra-chave em JavaScript?",
        image:"",
        options: [
          { text: "this", id: "a" },
          { text: "catch", id: "b" },
          { text: "function", id: "c" },
          { text: "array", id: "d" },
        ],
        correct: "d",
      },
      {
        question: "Qual variável é um parâmetro implícito para cada função em JavaScript?",
        image:"",
        options: [
          { text: "Arguments", id: "a" },
          { text: "args", id: "b" },
          { text: "argsArray", id: "c" },
          { text: "argumentsList", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Que tipo de função pode ter sua execução suspensa e retomada posteriormente?",
        image:"",
        options: [
          { text: "Generator function", id: "a" },
          { text: "Arrow function", id: "b" },
          { text: "Async/ Await function", id: "c" },
          { text: "Promise function", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Qual afirmação é verdadeira sobre Programação Funcional?",
        image:"",
        options: [
          { text: "Cada objeto no programa deve ser uma função.", id: "a" },
          { text: "O código é agrupado com o estado que ele modifica.", id: "b" },
          { text: "Os campos e métodos de data são mantidos em unidades.", id: "c" },
          { text: "Os efeitos colaterais não são permitidos.", id: "d" },
        ],
        correct: "d",
      },
      {
        question: "Seu código está produzindo o erro: TypeError: Não é possível ler a propriedade 'reduzir' de indefinido. O que isso significa?",
        image:"",
        options: [
          { text: "Você está chamando um método chamado reduzir em um objeto declarado, mas sem valor.", id: "a" },
          { text: "Você está chamando um método chamado reduzir em um objeto que não existe.", id: "b" },
          { text: "Você está chamando um método chamado reduzir em um array vazio.", id: "c" },
          { text: "Você está chamando um método chamado reduzir em um objeto que possui um valor nulo.", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Qual escolha não é um operador unário?",
        image:"",
        options: [
          { text: "typeof", id: "a" },
          { text: "delete", id: "b" },
          { text: "instanceof", id: "c" },
          { text: "void", id: "d" },
        ],
        correct: "d",
      },
      {
        question: "Qual palavra-chave é usada para criar um erro?",
        image:"",
        options: [
          { text: "throw", id: "a" },
          { text: "exception", id: "b" },
          { text: "catch", id: "c" },
          { text: "error", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Qual é a diferença entre os atributos async e defer da tag de script HTML?",
        image:"",
        options: [
          { text: "O atributo defer pode funcionar de forma síncrona.", id: "a" },
          { text: "O atributo defer funciona apenas com geradores", id: "b" },
          { text: "O atributo defer funciona apenas com promessas.", id: "c" },
          { text: "O atributo defer carregará os scripts de forma assíncrona em ordem.", id: "d" },
        ],
        correct: "",
      },
      /*{
        question: "",
        image:"",
        options: [
          { text: "", id: "a" },
          { text: "", id: "b" },
          { text: "", id: "c" },
          { text: "", id: "d" },
        ],
        correct: "",
      },*/
  ];


  export default quizDataJs