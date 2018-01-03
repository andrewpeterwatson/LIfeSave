var express = require('express');
var app = express();
var port = process.env.PORT || 8080

app.use(express.static(__dirname + '/'));
console.log('Express started on port ', port)

app.listen(port);
