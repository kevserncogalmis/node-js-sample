var express = require('express');
var app = express();

app.get('/', function(reques, response){
      response.sendfile(__dirname + '/index3.html');
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
