const quizDataAngular = [
    {
        question: "Qual opção CLI você pode usar para depurar um script de nó no Chrome DevTools?",
        image:"",
        options: [
          { text: "--dev-tools", id: "a" },
          { text: "--inspect", id: "b" },
          { text: "--chrome", id: "c" },
          { text: "--debug", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Qual a sintaxe utilizada para fazer interpolação de texto no Angular?",
        image:"",
        options: [
          { text: "{{ nomeVariavel }}", id: "a" },
          { text: "[( nomeVariavel )]", id: "b" },
          { text: "[ nomeVariavel ]", id: "c" },
          { text: "[( ngModel )]", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Para gerar um novo componente utilizando CLI do Angular o que é preciso?",
        image:"",
        options: [
          { text: "Criar uma pasta onde o componente vai ficar, depois entrar na pasta e executar o comando ng generate component first-componente.", id: "a" },
          { text: "Estar dentro da pasta raiz do projeto e executar o comando ng generate component first-componente.", id: "b" },
          { text: "Primeiro temos que ir no app.modules.ts e fazer o import com o nome do componente, depois executar o comando ng genetare componente first-component.", id: "c" },
          { text: "Não existe problema executar o comando ng genetare componente first-component em qualquer local do projeto.", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "No angular quando estamos criando um componente, qual a instrução que permite eu incluir arquivos css em meu projeto?",
        image:"",
        options: [
          { text: "Através da instrução styleUrls:[‘arquivo.css’]", id: "a" },
          { text: "Através da instrução styleCss:[‘arquivo.css’]", id: "b" },
          { text: "Através da instrução styleUrl:[‘arquivo.css’]", id: "c" },
          { text: "Através da instrução sytlesUrls:[‘arquivo.css’]", id: "d" },
        ],
        correct: "c",
      },
      {
        question: "Em Angular, qual o método acessada após o Angular inicializar todas as propriedades vinculadas a diretiva?",
        image:"",
        options: [
          { text: "ngOnInit().", id: "a" },
          { text: "ngOnLoad().", id: "b" },
          { text: "ngOnChange()", id: "c" },
          { text: "ngOnStart().", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Você está trabalhando em uma aplicação com Angular e essa aplicação está crescendo a cada dia (mais páginas). Isso está gerando um problema no carregamento. Qual medida pode ser usada para que a página carregue apenas o necessário?",
        image:"",
        options: [
          { text: "Não habilitar o roteamneto da página principal para as outras páginas.", id: "a" },
          { text: "Utilizar Two-way binding para melhorar a comunicação entre as páginas", id: "b" },
          { text: "Utilizar o tipo de rota Lazy-loading do Angular.", id: "c" },
          { text: "Utilizar o padrão de rotas do Angular.", id: "d" },
        ],
        correct: "c",
      },
      {
        question: "Qual opção CLI você pode usar para depurar um script de nó no Chrome DevTools?",
        image:"",
        options: [
          { text: "--dev-tools", id: "a" },
          { text: "--inspect", id: "b" },
          { text: "--chrome", id: "c" },
          { text: "--debug", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Qual opção CLI você pode usar para depurar um script de nó no Chrome DevTools?",
        image:"",
        options: [
          { text: "--dev-tools", id: "a" },
          { text: "--inspect", id: "b" },
          { text: "--chrome", id: "c" },
          { text: "--debug", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Qual é a função do Angular CLI (Command Line Interface)?",
        image: "",
        options: [
          { text: "Criar APIs RESTful", "id": "a" },
          { text: "Gerenciar dependências do projeto", "id": "b" },
          { text: "Facilitar a criação e manutenção de projetos Angular", "id": "c" },
          { text: "Testar aplicações web", "id": "d" }
        ],
        correct: "c"
      },
      {
        question: "O que é o Angular Material?",
        image: "",
        options: [
          { text: "Um framework de design CSS", "id": "a" },
          { text: "Uma ferramenta para autenticação de usuários", "id": "b" },
          { text: "Uma biblioteca de componentes UI baseados no Material Design", "id": "c" },
          { text: "Uma extensão do Angular para desenvolvimento de jogos", "id": "d" }
        ],
        correct: "c"
      },
      {
        question: "Como os dados são transmitidos entre um componente pai e um componente filho em Angular?",
        image: "",
        options: [
          { text: "Através de variáveis globais", "id": "a" },
          { text: "Usando métodos HTTP", "id": "b" },
          { text: "Utilizando serviços", "id": "c" },
          { text: "Por meio de propriedades de entrada e saída (@Input e @Output)", "id": "d" }
        ],
        correct: "d"
      },
      {
        question: "Qual comando Angular CLI você usaria para criar um novo componente?",
        image: "",
        options: [
          { text: "ng generate service", "id": "a" },
          { text: "ng add component", "id": "b" },
          { text: "ng new component", "id": "c" },
          { text: "ng generate component", "id": "d" }
        ],
        correct: "d"
      },
      {
        question: "Qual é a função do NgModule em Angular?",
        image: "",
        options: [
          { text: "Gerenciar a configuração do roteamento", "id": "a" },
          { text: "Definir os serviços usados no aplicativo", "id": "b" },
          { text: "Organizar e configurar os componentes da aplicação", "id": "c" },
          { text: "Controlar o acesso aos dados do aplicativo", "id": "d" }
        ],
        correct: "c"
    },
    {
      question: "Qual é a finalidade do operador 'async' em Angular?",
      image: "",
      options: [
        { text: "Sincronizar operações assíncronas", "id": "a" },
        { text: "Definir um loop de repetição", "id": "b" },
        { text: "Criar observables", "id": "c" },
        { text: "Importar módulos externos", "id": "d" }
      ],
      correct: "a"
  },
  {
    question: "O que é uma diretiva em Angular?",
    image: "",
    options: [
      { text: "Uma função para manipular eventos do usuário", "id": "a" },
      { text: "Um componente encapsulado", "id": "b" },
      { text: "Uma instrução que modifica o DOM ou o comportamento de um elemento DOM", "id": "c" },
      { text: "Um serviço para fazer solicitações HTTP", "id": "d" }
    ],
    correct: "c"
},
{
  question: "Qual é a diferença entre *ngIf e *ngFor em Angular?",
  image: "",
  options: [
    { text: "*ngIf é usado para exibir um elemento condicionalmente, enquanto *ngFor é usado para repetir um elemento com base em uma coleção.", "id": "a" },
    { text: "*ngFor é usado para manipular eventos do usuário, enquanto *ngIf é usado para manipular eventos do sistema.", "id": "b" },
    { text: "*ngIf é usado para criar loops, enquanto *ngFor é usado para controlar estruturas condicionais.", "id": "c" },
    { text: "*ngIf é usado para injetar dependências, enquanto *ngFor é usado para criar animações.", "id": "d" }
  ],
  correct: "a"
},
{
  question: "O que são observables em Angular?",
  image: "",
  options: [
    { text: "Métodos assíncronos para manipular eventos de usuário", "id": "a" },
    { text: "Uma forma de lidar com exceções em um aplicativo Angular", "id": "b" },
    { text: "Um padrão de design para criar componentes reutilizáveis", "id": "c" },
    { text: "Uma abstração que facilita a manipulação de fluxos de dados assíncronos", "id": "d" }
  ],
  correct: "d"
},
{
  question: "Qual é a principal diferença entre Reactive Forms e Template-driven Forms em Angular?",
  image: "",
  options: [
    { text: "Reactive Forms oferecem uma abordagem mais declarativa, enquanto Template-driven Forms oferecem uma abordagem mais programática.", "id": "a" },
    { text: "Reactive Forms são mais adequados para formulários simples, enquanto Template-driven Forms são mais adequados para formulários complexos.", "id": "b" },
    { text: "Reactive Forms são baseados em classes, enquanto Template-driven Forms são baseados em modelos HTML.", "id": "c" },
    { text: "Reactive Forms são mais difíceis de aprender e usar do que Template-driven Forms.", "id": "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a maneira preferencial de fazer solicitações HTTP em Angular?",
  image: "",
  options: [
    { text: "Usando XMLHttpRequest", "id": "a" },
    { text: "Utilizando a biblioteca jQuery", "id": "b" },
    { text: "Com a função fetch()", "id": "c" },
    { text: "Usando o módulo HttpClient", "id": "d" }
  ],
  correct: "d"
},
{
  question: "O que é lazy loading em Angular?",
  image: "",
  options: [
    { text: "Uma técnica para atrasar a execução de uma função até que seja necessária", "id": "a" },
    { text: "Um padrão de design para carregar recursos apenas quando necessário", "id": "b" },
    { text: "Uma técnica para otimizar o carregamento de páginas da web", "id": "c" },
    { text: "Um método para adiar a execução de código JavaScript desnecessário", "id": "d" }
  ],
  correct: "b"
},
{
  question: "Qual é a função do arquivo 'tsconfig.json' em um projeto Angular?",
  image: "",
  options: [
    { text: "Gerenciar as dependências do projeto", "id": "a" },
    { text: "Definir as configurações do compilador TypeScript", "id": "b" },
    { text: "Controlar o roteamento da aplicação", "id": "c" },
    { text: "Armazenar as configurações de estilo do projeto", "id": "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o ciclo de vida de um componente Angular?",
  image: "",
  "options": [
    { text: "Init, Update, Destroy", "id": "a" },
    { text: "Create, Update, Render", "id": "b" },
    { text: "Constructor, OnInit, OnDestroy", "id": "c" },
    { text: "Start, Run, Stop", "id": "d" }
  ],
  "correct": "c"
},
  

    //   {
    //     question: "Qual opção CLI você pode usar para depurar um script de nó no Chrome DevTools?",
    //     image:"",
    //     options: [
    //       { text: "--dev-tools", id: "a" },
    //       { text: "--inspect", id: "b" },
    //       { text: "--chrome", id: "c" },
    //       { text: "--debug", id: "d" },
    //     ],
    //     correct: "b",
    //   },

]

export default quizDataAngular