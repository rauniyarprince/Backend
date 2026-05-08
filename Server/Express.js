const express = require('express')

const app = express()  // server create and call function express() for use the functionality

app.get("/", function (req, res) {  // get a req from the user
  res.send("you come in the home ") // send the res to the browwser
}) 

app.get("/profile", function (req, res) {
  res.send("this is my profile kjhkjhkjroute and i ")
})

app.listen(3000);