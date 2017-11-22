var path = require('path');
const express = require('express');
const app = express();

const PORT = 80;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/img/favicon.png', function(req, res){
    res.sendFile(path.join(__dirname + '/img/favicon.png'));
});

app.get('/img/profile_pic.jpg', function(req, res){
    res.sendFile(path.join(__dirname + '/img/profile_pic.jpg'));
});

app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});