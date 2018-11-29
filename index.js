var express = require("express");
var app = express();
var multer = require('multer');

var upload = multer({
	dest: 'images/',
  });

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    console.log("destination");
    var dest = 'images/';
    cb(null, dest);
  }
});

app.post('/uploadchq', upload.fields([{ name: 'file' }]), function(req, res, next) {
  console.dir("file", req.file);
  console.log("files", req.files);
  console.log("body", req.body);
  res.sendStatus(200);
});

app.listen(9999);
console.log("listening to port", 9999);