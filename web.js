#!/usr/bin/env node



var express = require('express');

var app = express.createServer(express.logger());


/*fs.readFile('./Index.html',function read(err,data){
    if (err) {
	throw err;
	}
    console.log(data);
});*/

app.get('/', function(request, response) {
    var fs=require('fs');
    var buffer=new Buffer(100);
    buffer=fs.readFileSync("index.html");
   response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
