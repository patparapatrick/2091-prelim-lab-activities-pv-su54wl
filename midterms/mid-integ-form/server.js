const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/proces_get', function (req, res) {
  respone = {
    first_name:req.query.first_name,
    last_name:req.query.last_name,
  };

  console.log(response);
  res.end(JSON.stringify(response));
});
