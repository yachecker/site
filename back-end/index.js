express = require('express');

var app = express();

var path = require('path'); 

let PORT = 3000;
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }
app.listen(PORT, function () {
    console.log(`App started listening on ${PORT}`);
});
app.get('/*', express.static(__dirname+'/../front-end/'));