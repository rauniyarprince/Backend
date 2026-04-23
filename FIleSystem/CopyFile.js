const fs = require('fs')

fs.copyFile("Hello.txt","./Copy/Copy.txt",function(err){

if(err) console.error(err.message) // which type of error
  else{console.log("Done");
  }


})