const { log } = require('console');
const fs = require('fs');

fs.rm("./PRIN",{recursive:true},function(err){ // for remove the directory(folder)

    if(!err) console.log("Done");
  else console.log(err);
})