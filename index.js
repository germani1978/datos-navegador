require('dotenv').config();
var express = require('express');
var app = express();
const port = process.env.PORT;

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', (req, res) =>{
  res.json({
    ipaddress:  req.socket.remoteAddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });

});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
