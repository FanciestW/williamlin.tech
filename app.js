var path = require('path');
const express = require('express');
const app = express();

const PORT = 2000;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});