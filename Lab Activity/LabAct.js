var http = require('http'); // Import Node.js core module

var server = http.createServer(function(req,res){
  if(req.url == '/'){

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p><h1>Welcome to my Node.js Apllication</h1>Welcome John Smith. This is an activity basics of Node.js</p></body></html>');
    res.end();

  }

  else if(req.url == "/about"){

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p><h1>This is the About Page</h1> Hello John Smith. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>');
    res.end();
  }
  else if(req.url == "/contact"){

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p><h1>This is the Contact Page</h1> John Smith, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs-tutorials</p></body></html>');
    res.end();
  }
  else if(req.url == "/gallery"){

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p><h1>This is the Gallery Page</h1></p></body></html>');
    res.end();
  }
  else
  res.end('Invalid Request');

});

server.listen(4000);
console.log('NodeJS localhost at port 4000 is running...')

//Hanneka Rose C. Puri
//WD - 201
//February 2, 2022