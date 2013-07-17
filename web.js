var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

/*app.get('/', function(request, response) {
  var options = {
    encoding: "utf-8"
  };

  var buffer = fs.readFileSync('index.html');
  response.send(buffer.toString());
});
*/

app.all("*", function(req, resp) {
  var request = req.params[0];
  if(request === "/" || request === "") {
    request = "index.html";
  }
  
  var buffer = fs.readFileSync(request);
  resp.send(buffer.toString());
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
