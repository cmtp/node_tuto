var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    fs.createReadStream('../assets/image.png').pipe(res);
}).listen(3000, '127.0.0.1');
console.log('Server running at http://localhost:3000');