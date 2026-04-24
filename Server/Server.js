const http = require('http') // node module

 const server = http.createServer(function(req, res){ // create server

res.end("i create a server"); // send to the browser

})
server.listen(3000);  // server ko start at specific port