#!/usr/bin/env node



var express = require('express');

var app = express.createServer(express.logger());

var fs=require('fs');


/*fs.readFile('./Index.html',function read(err,data){
    if (err) {
	throw err;
	}
    console.log(data);
});*/



app.get('/', function(request, response) {
    var fs=require('fs');
    var buffer=new Buffer();
    response.send(buffer.toString('utc-8', fs.readFireSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
