const quizDataSpring = [
  {
    question: "O que é o Spring Boot?",
    image:"",
    options: [
        { text: "Um framework de desenvolvimento web", id: "a" },
        { text: "Uma biblioteca de segurança", id: "b" },
        { text: "Um projeto da Apache Software Foundation", id: "c" },
        { text: "Um framework de inicialização de aplicativos Java", id: "d" }
    ],
    correct: "d"
},
{
  question: "Qual é o objetivo principal do Spring Boot?",
  image:"",
  options: [
      { text: "Facilitar a integração com bancos de dados", id: "a" },
      { text: "Simplificar o desenvolvimento de aplicativos Spring", id: "b" },
      { text: "Gerenciar o ciclo de vida dos componentes de um aplicativo", id: "c" },
      { text: "Automatizar testes de unidade", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o arquivo de configuração principal do Spring Boot?",
  image:"",
  options: [
      { text: "application.properties", id: "a" },
      { text: "config.xml", id: "b" },
      { text: "spring-config.yml", id: "c" },
      { text: "app.properties", id: "d" }
  ],
  correct: "a"
},
{
  question: "Como você pode inicializar um aplicativo Spring Boot?",
  image:"",
  options: [
      { text: "Executando o método main() de uma classe Java com a anotação @SpringBootApplication", id: "a" },
      { text: "Através de um arquivo de script shell", id: "b" },
      { text: "Manualmente, configurando cada componente individualmente", id: "c" },
      { text: "Usando um IDE específico para Spring", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o servidor embutido padrão no Spring Boot?",
  image:"",
  options: [
      { text: "Apache Tomcat", id: "a" },
      { text: "Jetty", id: "b" },
      { text: "Undertow", id: "c" },
      { text: "GlassFish", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a dependência Maven básica para um projeto Spring Boot?",
  image:"",
  options: [
      { text: "spring-boot-starter", id: "a" },
      { text: "spring-boot-dependency", id: "b" },
      { text: "spring-core", id: "c" },
      { text: "spring-boot-starter-parent", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é a anotação usada para definir um controlador em Spring Boot?",
  image:"",
  options: [
      { text: "@Controller", id: "a" },
      { text: "@Service", id: "b" },
      { text: "@Component", id: "c" },
      { text: "@RestController", id: "d" }
  ],
  correct: "d"
},
{
  question: "Como você configura uma porta específica para um aplicativo Spring Boot?",
  image:"",
  options: [
      { text: "Editando o arquivo server.xml", id: "a" },
      { text: "Definindo a propriedade server.port no arquivo application.properties", id: "b" },
      { text: "Configurando diretamente no código-fonte", id: "c" },
      { text: "Usando uma ferramenta de linha de comando específica", id: "d" }
  ],
  correct: "b"
},
{
  question: "O que é uma classe de serviço em um aplicativo Spring Boot?",
  image:"",
  options: [
      { text: "Uma classe que manipula a camada de apresentação", id: "a" },
      { text: "Uma classe que define configurações de segurança", id: "b" },
      { text: "Uma classe que fornece lógica de negócios", id: "c" },
      { text: "Uma classe que gerencia a camada de persistência", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é a anotação usada para injetar uma dependência em um componente Spring Boot?",
  image:"",
  options: [
      { text: "@Inject", id: "a" },
      { text: "@Autowired", id: "b" },
      { text: "@Component", id: "c" },
      { text: "@Bean", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é a principal vantagem da configuração baseada em anotações em Spring Boot?",
  image:"",
  options: [
      { text: "Facilita a reutilização de configurações", id: "a" },
      { text: "Aumenta a complexidade do código", id: "b" },
      { text: "Torna o código menos legível", id: "c" },
      { text: "Reduz a flexibilidade", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a ferramenta usada para construir e gerenciar projetos Spring Boot?",
  image:"",
  options: [
      { text: "Maven", id: "a" },
      { text: "Ant", id: "b" },
      { text: "Gradle", id: "c" },
      { text: "SBT", id: "d" }
  ],
  correct: "c"
},
{
  question: "Como você define a versão do Spring Boot em um projeto Maven?",
  image:"",
  options: [
      { text: "No arquivo pom.xml", id: "a" },
      { text: "No arquivo build.gradle", id: "b" },
      { text: "Através de uma ferramenta de linha de comando", id: "c" },
      { text: "Diretamente no código-fonte", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a principal diferença entre @RestController e @Controller em Spring Boot?",
  image:"",
  options: [
      { text: "@RestController é usado para retornar dados formatados como JSON ou XML", id: "a" },
      { text: "@Controller é usado apenas para classes que fornecem lógica de negócios", id: "b" },
      { text: "@RestController é usado apenas para aplicativos da Web, enquanto @Controller é usado para aplicativos RESTful", id: "c" },
      { text: "@Controller é uma anotação obsoleta e não deve ser usada", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é a finalidade do arquivo application.properties em um projeto Spring Boot?",
  image:"",
  options: [
      { text: "Configurar o servidor de aplicativos", id: "a" },
      { text: "Definir propriedades específicas da aplicação", id: "b" },
      { text: "Armazenar dependências de terceiros", id: "c" },
      { text: "Gerenciar as regras de segurança", id: "d" }
  ],
  correct: "b"
}
,
{
  question: "O que é um perfil de ambiente em um aplicativo Spring Boot?",
  image:"",
  options: [
      { text: "Um conjunto de propriedades de configuração que se aplicam a um ambiente específico", id: "a" },
      { text: "Um tipo de autenticação usado para proteger endpoints REST", id: "b" },
      { text: "Uma camada de negócios que contém regras de negócios específicas", id: "c" },
      { text: "Uma estratégia de cache usada para melhorar o desempenho do aplicativo", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é Spring Boot Actuator?",
  image:"",
  options: [
      { text: "Uma biblioteca de testes unitários", id: "a" },
      { text: "Uma ferramenta para monitorar e gerenciar um aplicativo Spring Boot em execução", id: "b" },
      { text: "Um módulo de segurança para proteger endpoints REST", id: "c" },
      { text: "Uma biblioteca de serialização para converter objetos Java em JSON", id: "d" }
  ],
  correct: "b"
},
{
  question: "O que é Spring Boot Data?",
  image:"",
  options: [
      { text: "Uma biblioteca para manipulação de dados em bancos de dados relacionais", id: "a" },
      { text: "Um framework de autenticação para aplicativos da Web", id: "b" },
      { text: "Uma ferramenta para criação de APIs RESTful", id: "c" },
      { text: "Um módulo para integração de sistemas externos", id: "d" }
  ],
  correct: "a"
},
{
  question: "O que é Spring Boot DevTools?",
  image:"",
  options: [
      { text: "Uma ferramenta para desenvolvimento de aplicativos móveis", id: "a" },
      { text: "Um plugin para IDEs que melhora a produtividade do desenvolvedor", id: "b" },
      { text: "Uma biblioteca para manipulação de datas e horas", id: "c" },
      { text: "Uma ferramenta para monitoramento de desempenho de aplicativos", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é a abordagem recomendada para implementar segurança em um aplicativo Spring Boot?",
  image:"",
  options: [
      { text: "Usar o módulo de segurança do Spring Security", id: "a" },
      { text: "Implementar manualmente todas as regras de segurança no código", id: "b" },
      { text: "Depender de firewalls de rede para proteger o aplicativo", id: "c" },
      { text: "Não se preocupar com segurança, pois o Spring Boot é seguro por padrão", id: "d" }
  ],
  correct: "a"
},

      // {
      //   question: "",
      //   image:"",
      //   options: [
      //     { text: "", id: "a" },
      //     { text: "", id: "b" },
      //     { text: "", id: "c" },
      //     { text: "", id: "d" },
      //   ],
      //   correct: "",
      // },
]

export default quizDataSpring