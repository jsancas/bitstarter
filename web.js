var express = require('express');
var fs = require('fs');

var app = express();

var mybuf;
app.use(express.logger());

mybuf=fs.readFileSync('index.html');

app.get('/', function(request, response) {
  //response.send('Hello World 2!!');
  response.send(mybuf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
