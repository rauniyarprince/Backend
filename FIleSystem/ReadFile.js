const { log } = require('console');
const fs = require('fs');
fs.readFile("./Copy",function(err){


    if(!err) console.log("Done");
  else console.log(err);
})                               