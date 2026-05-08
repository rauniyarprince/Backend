const express = require('express')
const app = express();  // express() ek application object bana ke deta hai us obj ko app na m se use kar rhe h ,[app ek object hai jisme functions (methods) hote hain jaise get, use, listen]


// middleware

app.use(express.json());
app.use(express.urlencoded({extended:true})); // (app.use() middleware lagane ke liye use hota hai) ,Ye middleware form se aane wale data ko read (parse) karta hai (extended: true , complex data ko allow karta h read karne me)
app.use('view engine ', 'ejs'); // backend kya render karega uska khyal rakhana h 


// route create
app.get("/", function(req,res){
res.render("/index");
}) ;

app.listen(3000,function(){
  console.log("server is running");
  
})