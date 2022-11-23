var mysql = require('mysql');


 var conectarSQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin123',
        database: 'portal_noticias'
        });
 }


module.exports = function(){
    return conectarSQL;
}