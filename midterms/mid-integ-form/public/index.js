const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'contact.html');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'contact.html');
});

app.get('/process_get', function (req, res) {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
    subject: req.query.subject,
    message: req.query.message,
    email: req.query.email,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.use(express.static('public'));

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {},

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage });
//file upload route
app.post('/public' + '/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);

  req.file.mimetype = mime.lookup(req.file.originalname);

  res.sendFile(path.join(__dirname, 'file-upload.html'));
});

app.get('/file-upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'file-upload.html');
});
