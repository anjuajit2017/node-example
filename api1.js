var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
       res.end( data );
  });
})

//app.post('/notes', function(req, res) {
 // res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
//})
//app.post('/notes', function(req, res) {
//	fs.readFile( __dirname + "/" + "notes.json", 'utf8', function (err, data) {
   //   console.log( data );
    //   res.end( data );
  // });
//})
 // res.json({notes: "This is your notebook. Edit this to start saving your notes!"})



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})