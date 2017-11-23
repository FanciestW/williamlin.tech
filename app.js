var path = require('path');
const express = require('express');
var favicon = require('serve-favicon');
const app = express();

const PORT = 3000;

app.use(favicon(__dirname + '/img/favicon.ico'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/style/style.css', function(req, res){
    res.sendFile(path.join(__dirname + '/style/style.css'));
});

app.get('/img/profile_pic.jpg', function(req, res){
    res.sendFile(path.join(__dirname + '/img/profile_pic.jpg'));
});

app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});