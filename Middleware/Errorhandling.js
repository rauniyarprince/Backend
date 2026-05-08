const express = require('express')

const app = express()

// create middleware
app.use(function(req,res,next){
  console.log("middleware run")
 next(); // for sending to next for run 
})

 
app.get("/", function (req, res) {
  res.send("you come  in the home ")
})
 
//man lo hm jan rhe is route me galti h kuch to hm ise return kara dete h taki hamara code run kare bin error diye
app.get("/about", function (req, res,next) {
  return next(new Error("Not implemented")); // return hm kiye h agar yahi error aa jaye to yahi code ruk jaye aur error print kar de
})

// error show in the browser
app.use((err,req,res,next) => {
  console.log(err.stack)
res.status(500).send('Something is broke !')
  
})
app.listen(3000);