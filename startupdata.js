const { use } = require("./config/server");

var startupdata = [
    {
        "port": "3000",
        "host": "localhost",
        "Message": "Bem vindo professor!",
        "description": "ENDPIOINTS: localhost:3000 ou localhost:3000/areatestehtml",
        "Tipo": "Projeto para Lab. BD Alunos ({Raphael Anaximenes} e {Rodrigo Ribeiro})",
        "Stack": "Node.js, Express, ejs and nodemon + mysql",
        "subcategory": "json para inicializar",
        "status": "Server ONLINE",
        "linkedin": "RaphaelAnaximenes",
        "date": new Date()
     }
 ]
// json parameter that returns current time

module.exports = startupdata;