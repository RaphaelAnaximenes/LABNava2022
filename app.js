var app = require('./config/server');
const startupdata = require('./startupdata');

//listening...
app.listen(3000, function(){
    console.log('\x1b[32m', 'AnxDev diz: Servidor [On] ');
    console.log(startupdata);
    });

