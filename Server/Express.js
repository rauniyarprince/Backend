const express = require('express')

const app = express()

app.get("/", function (req, res) {
  res.send("you come in the home ")
})

app.get("/profile", function (req, res) {
  res.send("this is my profile kjhkjhkjroute and i ")
})

app.listen(3000);