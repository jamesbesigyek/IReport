/*establishing initial app parameters with express and body parser
this is a nodeJS app with Mongo DB
*/

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser")
app.use(bodyParser.json())                          
app.use(bodyParser.urlencoded({extended: true}))



app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views")) //setting the views path-pugs here is the folder where rendered files are located
app.use(express.static(__dirname + '/views'));

app.set("views", path.join(__dirname, "views")) //setting the views path

// import routes

const postroutes = require("./routes/routes")
app.use("/",postroutes)


app.listen(4000,()=>{                          
    console.log("listening on port 4000")
   

})
