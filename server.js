var http = require("http");
var url = require("url");

http.createServer(function(req, res) {

  var parsedUrl = url.parse(req.url, true); // true to get query as object
  var queryAsObject = parsedUrl.query;

  console.log(JSON.stringify(queryAsObject));

  res.end(JSON.stringify(queryAsObject));

}).listen(1337);

console.log("Server listening on port 1337");
