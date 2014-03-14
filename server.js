var express = require('express'),
    path = require('path'),
    http = require('http'),
    food = require('./routes/foods');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/food', food.GetRandomFood);
app.get('/food/:id', food.GetRandomFood);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));

    var parsedUrl = url.parse(req.url, true); // true to get query as object
    var queryAsObject = parsedUrl.query;

    console.log(JSON.stringify(queryAsObject));

    res.end(JSON.stringify(queryAsObject));

});
