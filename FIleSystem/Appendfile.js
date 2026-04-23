const { log } = require('console');
const fs = require('fs');

fs.appendFile("hi.txt","i am from sbz",function(err){
if(err) console.error(err)
  else{console.log("Done");
  }

})