var express = require('express'); 
var app = express();

app.use(express.static('public')); 
app.get('/', function (reg, res) {
  res.sendFile('You have successfully created second app!'); 
})

var server = app.listen (9191, function () {
var host = server.address().address 
var port = server.address() .port

console.log("Example app listening at http://ts:%s", host, port)
})