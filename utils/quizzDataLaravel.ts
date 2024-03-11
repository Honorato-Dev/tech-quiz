const quizDataLaravel = [
  {
    question: "Quem criou o framework Laravel?",
    image: "",
    options: [
      { text: "Taylor Otwell", id: "a" },
      { text: "Matt Mullenweg", id: "b" },
      { text: "Rasmus Lerdorf", id: "c" },
      { text: "David Heinemeier Hansson", id: "d" }
    ],
    correct: "a"
},
{
  question: "Em que linguagem o Laravel foi escrito?",
  image: "",
  options: [
    { text: "PHP", id: "a" },
    { text: "JavaScript", id: "b" },
    { text: "Python", id: "c" },
    { text: "Ruby", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o principal objetivo do Laravel?",
  image: "",
  options: [
    { text: "Facilitar o desenvolvimento de aplicativos web usando PHP", id: "a" },
    { text: "Facilitar o desenvolvimento de aplicativos móveis", id: "b" },
    { text: "Facilitar o desenvolvimento de jogos", id: "c" },
    { text: "Facilitar o desenvolvimento de aplicativos desktop", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o nome do ORM (Object-Relational Mapping) padrão do Laravel?",
  image: "",
  options: [
    { text: "Eloquent", id: "a" },
    { text: "Doctrine", id: "b" },
    { text: "Hibernate", id: "c" },
    { text: "Sequelize", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o nome do sistema de roteamento do Laravel?",
  image: "",
  options: [
    { text: "Routing", id: "a" },
    { text: "Router", id: "b" },
    { text: "Route", id: "c" },
    { text: "Routify", id: "d" }
  ],
  correct: "a"
},

{
  question: "Qual é o nome da ferramenta de linha de comando do Laravel?",
  image: "",
  options: [
    { text: "Artisan", id: "a" },
    { text: "Craftsman", id: "b" },
    { text: "Builder", id: "c" },
    { text: "Maker", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a versão atual do Laravel?",
  image: "",
  options: [
    { text: "8.x", id: "a" },
    { text: "7.x", id: "b" },
    { text: "6.x", id: "c" },
    { text: "5.x", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o nome do arquivo de configuração principal do Laravel?",
  image: "",
  options: [
    { text: "config.php", id: "a" },
    { text: "app.php", id: "b" },
    { text: "settings.php", id: "c" },
    { text: "laravel.php", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o nome do diretório onde os arquivos de visão (views) são armazenados no Laravel?",
  image: "",
  options: [
    { text: "views", id: "a" },
    { text: "templates", id: "b" },
    { text: "pages", id: "c" },
    { text: "resources/views", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é o nome do serviço de fila (queue service) padrão do Laravel?",
  image: "",
  options: [
    { text: "Beanstalkd", id: "a" },
    { text: "RabbitMQ", id: "b" },
    { text: "Redis", id: "c" },
    { text: "Database", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é o nome do middleware que verifica se o usuário está autenticado no Laravel?",
  image: "",
  options: [
    { text: "AuthMiddleware", id: "a" },
    { text: "Authenticate", id: "b" },
    { text: "AuthCheck", id: "c" },
    { text: "Auth", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é o comando usado para criar um novo controller no Laravel?",
  image: "",
  options: [
    { text: "php artisan make:controller", id: "a" },
    { text: "php artisan create:controller", id: "b" },
    { text: "php make:controller", id: "c" },
    { text: "php create:controller", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o nome da camada de acesso a dados no Laravel?",
  image: "",
  options: [
    { text: "Model", id: "a" },
    { text: "Database", id: "b" },
    { text: "Repository", id: "c" },
    { text: "Data Access Layer (DAL)", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o nome do arquivo de rotas (routes) principal do Laravel?",
  image: "",
  options: [
    { text: "web.php", id: "a" },
    { text: "routes.php", id: "b" },
    { text: "app.php", id: "c" },
    { text: "routes/web.php", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é o nome do comando usado para iniciar o servidor de desenvolvimento embutido do Laravel?",
  image: "",
  options: [
    { text: "php artisan serve", id: "a" },
    { text: "php start", id: "b" },
    { text: "php server", id: "c" },
    { text: "php run", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o nome do diretório onde os arquivos de configuração do Laravel são armazenados?",
  image: "",
  options: [
    { text: "config", id: "a" },
    { text: "configs", id: "b" },
    { text: "configuration", id: "c" },
    { text: "configurations", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o nome do comando usado para criar um novo model no Laravel?",
  image: "",
  options: [
    { text: "php artisan make:model", id: "a" },
    { text: "php make:model", id: "b" },
    { text: "php artisan create:model", id: "c" },
    { text: "php create:model", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o nome do pacote usado para gerenciar dependências no Laravel?",
  image: "",
  options: [
    { text: "Composer", id: "a" },
    { text: "NPM", id: "b" },
    { text: "Yarn", id: "c" },
    { text: "Bower", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o nome da pasta onde os arquivos de migração (migrations) são armazenados no Laravel?",
  image: "",
  options: [
    { text: "database/migrations", id: "a" },
    { text: "migrations", id: "b" },
    { text: "db/migrations", id: "c" },
    { text: "resources/migrations", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o nome da função usada para redirecionar o usuário para uma rota específica no Laravel?",
  image: "",
  options: [
    { text: "redirect()", id: "a" },
    { text: "route()", id: "b" },
    { text: "forward()", id: "c" },
    { text: "go()", id: "d" }
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

export default quizDataLaravel