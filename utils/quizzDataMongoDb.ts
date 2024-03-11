const quizDataMongoDb = [
  {
    question: "O que MongoDB é?",
    options: [
        { text: "Um banco de dados relacional", id: "a" },
        { text: "Um banco de dados NoSQL", id: "b" },
        { text: "Um sistema operacional", id: "c" },
        { text: "Uma linguagem de programação", id: "d" }
    ],
    correct: "b"
},
{
  question: "Qual é a linguagem de consulta usada no MongoDB?",
  options: [
      { text: "SQL", id: "a" },
      { text: "JSON", id: "b" },
      { text: "CQL", id: "c" },
      { text: "NoQL", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o formato de armazenamento de dados padrão no MongoDB?",
  options: [
      { text: "JSON", id: "a" },
      { text: "XML", id: "b" },
      { text: "CSV", id: "c" },
      { text: "YAML", id: "d" }
  ],
  correct: "a"
},
{
  question: "Como você se conecta a um servidor MongoDB?",
  options: [
      { text: "Usando uma conexão HTTP", id: "a" },
      { text: "Usando um driver de banco de dados específico da linguagem", id: "b" },
      { text: "Usando uma conexão FTP", id: "c" },
      { text: "Usando um navegador da web", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o comando usado para listar todos os bancos de dados no MongoDB?",
  options: [
      { text: "show databases", id: "a" },
      { text: "list dbs", id: "b" },
      { text: "db.list()", id: "c" },
      { text: "show dbs", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é o comando usado para criar um novo banco de dados no MongoDB?",
  options: [
      { text: "create database", id: "a" },
      { text: "db.create()", id: "b" },
      { text: "use", id: "c" },
      { text: "db.createCollection()", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é o comando usado para criar uma nova coleção no MongoDB?",
  options: [
      { text: "create collection", id: "a" },
      { text: "new collection", id: "b" },
      { text: "make collection", id: "c" },
      { text: "db.createCollection()", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é o comando usado para inserir documentos em uma coleção no MongoDB?",
  options: [
      { text: "insert", id: "a" },
      { text: "create", id: "b" },
      { text: "add", id: "c" },
      { text: "db.insertOne()", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é o tipo de dados que MongoDB usa para armazenar identificadores exclusivos para documentos em uma coleção?",
  options: [
      { text: "UUID", id: "a" },
      { text: "OID (ObjectID)", id: "b" },
      { text: "Integer", id: "c" },
      { text: "String", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o comando usado para encontrar documentos em uma coleção no MongoDB?",
  options: [
      { text: "search", id: "a" },
      { text: "find", id: "b" },
      { text: "query", id: "c" },
      { text: "db.find()", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o operador usado para especificar uma igualdade em consultas no MongoDB?",
  options: [
      { text: "==", id: "a" },
      { text: "=", id: "b" },
      { text: "$eq", id: "c" },
      { text: "equals", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é o comando usado para atualizar um documento em uma coleção no MongoDB?",
  options: [
      { text: "update", id: "a" },
      { text: "modify", id: "b" },
      { text: "change", id: "c" },
      { text: "db.updateOne()", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é o operador usado para adicionar elementos a um array em um documento no MongoDB?",
  options: [
      { text: "$push", id: "a" },
      { text: "$add", id: "b" },
      { text: "$append", id: "c" },
      { text: "$insert", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o comando usado para excluir documentos de uma coleção no MongoDB?",
  options: [
      { text: "delete", id: "a" },
      { text: "remove", id: "b" },
      { text: "drop", id: "c" },
      { text: "db.deleteOne()", id: "d" }
  ],
  correct: "b"
},
{
  question: "Qual é o comando usado para excluir uma coleção no MongoDB?",
  options: [
      { text: "delete collection", id: "a" },
      { text: "remove collection", id: "b" },
      { text: "drop collection", id: "c" },
      { text: "db.dropCollection()", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é o comando usado para renomear uma coleção no MongoDB?",
  options: [
      { text: "rename", id: "a" },
      { text: "move", id: "b" },
      { text: "relabel", id: "c" },
      { text: "db.renameCollection()", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é o comando usado para criar um índice em uma coleção no MongoDB?",
  options: [
      { text: "create index", id: "a" },
      { text: "index", id: "b" },
      { text: "make index", id: "c" },
      { text: "db.createIndex()", id: "d" }
  ],
  correct: "d"
},
{
  question: "Qual é o tipo de dados usado para armazenar dados binários em documentos MongoDB?",
  options: [
      { text: "Binary", id: "a" },
      { text: "BLOB", id: "b" },
      { text: "Buffer", id: "c" },
      { text: "BlobData", id: "d" }
  ],
  correct: "c"
},
{
  question: "Qual é o operador usado para realizar operações de agregação no MongoDB?",
  options: [
      { text: "$group", id: "a" },
      { text: "$aggregate", id: "b" },
      { text: "$combine", id: "c" },
      { text: "$aggregateBy", id: "d" }
  ],
  correct: "a"
},
{
  question: "Qual é o comando usado para iniciar o shell do MongoDB?",
  options: [
      { text: "mongo", id: "a" },
      { text: "start mongo", id: "b" },
      { text: "mongoshell", id: "c" },
      { text: "db.start()", id: "d" }
  ],
  correct: "a"
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
    //     correct: "",
    //   },

]
export default quizDataMongoDb