var path = require('path');
const express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const app = express();

const PORT = 80;

app.use(favicon(__dirname + '/img/favicon.ico'));

app.use(bodyParser.urlencoded({ extended: false })) 

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index.html', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/style/style.css', function(req, res){
    res.sendFile(path.join(__dirname + '/style/style.css'));
});

app.get('/script/script.js', function(req, res){
    res.sendFile(path.join(__dirname + '/script/script.js'));
})

app.get('/img/profile_pic.jpg', function(req, res){
    res.sendFile(path.join(__dirname + '/img/profile_pic.jpg'));
});

app.post('/sendemail', function(req, res) {
    var senderName = req.body.name;
    var senderEmail = req.body.email;
    var senderMessage = req.body.message;

    sendEmailToMe(senderName, senderEmail, senderMessage);
    res.redirect('/');
  });

app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});

function sendEmailToMe(name, email, message) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'wlin26@yahoo.com',
        from: email,
        subject: name + ' - williamlin.tech',
        text: message
    };
    sgMail.send(msg);
}