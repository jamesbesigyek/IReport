/*establishing initial app parameters with express and body parser
this is a nodeJS app with Mongo DB
*/

const express = require("express");
const app = express();
const path = require("path"); 
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views")) //setting the views path
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");


    

/* created an app of express object, then  listening on port.
listen method takes two parameters, port number and function 
listening is for development only..*/
app.listen(5000,()=>{                           //arrow function
    console.log("listening on port 5000")
   

})

/*method for the landing page*/

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});      
    

// posting the form
app.post("/register",(req, res, next)=>{
    console.log("form has been posted")
    console.log("body", req.body)
    console.log("query params", req.query);
    
    res.render("page2")
})





//to run the Pug- local host:5000/pugfilename

// sending data to another page

app.post("/page2", (req, res)=>{    //'page2"path for page to be loaded-also similar in the action of loading page
  //  console.log("hello world")
    res.render("page2",             //"page2" is a name of the page to be shown
    {  firstname:req.body.firstname,
       lastname:req.body.lastname, 
       email:req.body.email,
       sex:req.body.gender,
       city:req.body.city,
       country:req.body.country,
       password:req.body.password, //call fields by name

       


    }) //kevin is another pug file
    console.log("body", req.body)
})