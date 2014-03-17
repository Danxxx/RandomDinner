var express = require('express'),
    path = require('path'),
    http = require('http'),
    url = require('url'),
    foodlib = require('./routes/foodlib');

http.createServer(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var parsedUrl = url.parse(req.url, true); // true to get query as object
    var queryAsObject = parsedUrl.query;

    console.log(JSON.stringify(queryAsObject));
    var test = foodlib.test();
    //var food = food.GetRandomFood();
    res.end(JSON.stringify(test));

}).listen(process.env.PORT || 3000);

console.log("Server listening on port 3000");