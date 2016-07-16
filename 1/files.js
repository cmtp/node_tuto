var fs = require('fs');
var stream = fs.createReadStream('../assets/users.json');

stream.setEncoding('UTF-8');
stream.on('data', function (chunk) {
    console.log(chunk);
});

stream.on('end', function() {
    console.log('finished');
});