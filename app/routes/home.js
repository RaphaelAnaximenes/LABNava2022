module.exports = function(app) {

    app.get('/', function(req, res){
        
        var connection = app.config.dbConnection();
        var homeModel = app.app.models.homeModel;    

        homeModel.getArea(connection, function(error, result) {
            res.render("home/index");
        });
        });
        
    };


    