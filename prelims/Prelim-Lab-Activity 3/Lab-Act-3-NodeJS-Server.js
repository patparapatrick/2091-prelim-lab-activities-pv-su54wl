// Task Name: Lab 3
// Villanueva, Patrick C.
// WD201

var http = require('http');

var server = http.createServer(function (req, res){
  if (req.url == '/'){
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body style = "background-color: skyblue"><h1 style="color: white">Welcome to my Node.js Application</h1><br><p>Welcome Patrick Villanueva. This is an activity about basics of Node.js</p></body></html>');
    res.end();
  }
  else if (req.url == "/about"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body style = "background-color: #ff6961"><h1 style = "color: white">This is the About Page.</h1><p>Hello Patrick. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>');
    res.end();
  }
  else if (req.url == "/contact"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body style = "background-color: #FDFD96"><h1 style="color: red">This is the Contact Page</h1><p>Patrick Villanueva, if you want additional details about this activity, go to his site: https://www.tutorialsteacher.com</p></body></html>');
    res.end();
  }else if (req.url == "/gallery"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body style = "background-color: #77DD77"><h1 style="color: white">This is Gallery Page.</h1></body></html>');
    res.end();
  }
  else
    res.end('Invalid Request!');

  });
  

server.listen(5000);
console.log('Node.js webserver at port 5000 is running..')
