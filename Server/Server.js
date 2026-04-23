const http = require('http')

 const server = http.createServer(function(req, res){

res.end("i create a server");

})
server.listen(3000);