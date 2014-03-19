/**
 * Created by danx on 18-03-14.
 */
var express = require('express');
var app = express();
var food = require('./routes/foodlib');
// Enables CORS
var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};


// enable CORS!
app.use(enableCORS);
//--------------


app.get('/',function(req, res){
    var resFood = food.test()
    res.send(resFood);
});

app.get('/ing',function(req,res){
   var ingOps = food.getIngs();
   res.send(ingOps);
});

var server =  app.listen(process.env.PORT || 3000, function(){
    console.log('Listening on port 3000');
});

