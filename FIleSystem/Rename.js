const { log } = require('console');
const fs = require('fs');

fs.rename("hi.txt","hello.txt",function(err){

  if(!err) console.log("Done");
  else console.log(err);
  
  
})