const { log } = require('console');
const fs = require('fs');

fs.writeFile("hi.txt","hello my self prince", function(err){
  if(!err){
    console.log("Done");
  }
  else{
    console.log(err);
    
  }
})

