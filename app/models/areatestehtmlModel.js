module.exports= function(){
    
    this.getArea = function (connection, callback){
        connection.query('select * from tecnologias', callback);
    }

    return this;
}