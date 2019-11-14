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
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;  //a promise is feedback mechanism on the status of the transaction
mongoose.connect("mongodb://localhost:27017/node-demo"); 
const ireport = new mongoose.Schema({      //creating a schema
    name:String,
    phoneNumber:Number,
    activity: String,
    description: String,
    location: String,
    details: String,
   
  })

const report = mongoose.model("register", ireport); 
app.set("views", path.join(__dirname, "views")) //setting the views path

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");


    


app.listen(5000,()=>{                          
    console.log("listening on port 5000")
   

})

/*method for the landing page*/

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});      
    

app.post("/register",(req, res)=>{
  const newregister = new register (req.body)
          //"register" is the collection created for the database
          newregister.save()
  .then(item => {                         //success promise
      register.find().then(items => {        //
      res.render("list",{users:items}) //"users:lists" renders list pug and passes to list items in users table
      })
  })
  .catch(err => {                         //failed to save promise
    res.status(400).send("unable to save to database");   // 400 is a status code for fail.
  })
    console.log("form has been posted")
    console.log("body", req.body)
    console.log("query params", req.query);
})