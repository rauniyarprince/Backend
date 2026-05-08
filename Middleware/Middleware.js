const express = require('express')

const app = express()

// create middleware
app.use(function(req,res,next){
  console.log("middleware run")
 next(); // for sending to next for run 
})

app.use(function(req,res,next){
  console.log("middleware second is running")
 next(); // for sending to next for run 
}) 
 
app.get("/", function (req, res) {
  res.send("you come  in the home ")
})

app.get("/about", function (req, res) {
  res.send("you come  in the about")
})
app.listen(3000);