//ejs areatesteshtml-- legacyarea -> 
module.exports = function(app) {
    app.get('/areatesteshtml', function(req, res){
    
        var connection = app.config.dbConnection();
        var areatestehtmlModel = app.app.models.areatestehtmlModel;   

        areatestehtmlModel.getArea(connection, function(error, result) {
            res.render("secao/areatesteshtml", {tecnologias: result});
            });

});

};