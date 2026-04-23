const { log } = require('console');
const fs = require('fs');

fs.unlink("hello.txt",function(err){ // for remove the file


    if(!err) console.log("Done");
  else console.log(err);
})