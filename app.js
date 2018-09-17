var path = require('path');
const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(favicon(__dirname + '/img/favicon.ico'));

app.use(bodyParser.urlencoded({ extended: false })) 

app.use(bodyParser.json());

app.use(express.static(__dirname, { dotfiles: 'allow' } ));

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/williamlin.tech/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/williamlin.tech/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/williamlin.tech/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.use((req, res) => {
	res.send('Hello there !');
});

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});


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

/*app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});*/

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
