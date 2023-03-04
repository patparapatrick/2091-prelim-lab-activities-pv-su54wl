const express = require('express');
const app = express();

app.get('/', function (req, res) { 
  res.sendFile(__dirname + '/' + 'contact.html');
})

app.get('/process_get', function (req, res) {
  response = {
    first_name:req.query.first_name, 
    last_name:req.query.last_name,
    subject:req.query.subject,
    message:req.query.message,
    email:req.query.email
};
console.log(response); res.end(JSON.stringify(response)); });