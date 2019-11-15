/*establishing initial app parameters with express and body parser
this is a nodeJS app with Mongo DB
*/

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser")


//setting the views path and view engine for pug. This establishes the MVC model

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views")) 

// middleware for CSS and body parser

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json())                          
app.use(bodyParser.urlencoded({extended: true}))



// import routes

const postroutes = require("./routes/routes")
app.use("/",postroutes)

// listening on port 4000
app.listen(4000,()=>{                          
    console.log("listening on port 4000")
   

})
