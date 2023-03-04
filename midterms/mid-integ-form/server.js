const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'contact.html');
})

app.get('/proces_get', function (req, res) {
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };

  console.log(response);
  res.end(JSON.stringify(response));
});
