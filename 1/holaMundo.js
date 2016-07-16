/**
 * Hola Mundo en nodejs
 */
var http = require('http');
//crear un servidor
http.createServer(function (req, res) {
    //Escribir cabecera
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hola Mundo');
}).listen(3000, '127.0.0.1');

console.log('Server Runinng at http://127.0.0.1:3000/');