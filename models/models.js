// creating a database model

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;  //a promise is feedback mechanism on the status of the transaction
mongoose.connect("mongodb://localhost:27017/node-demo"); 
const ireport = new mongoose.Schema({      //creating a schema
    name:String,
    phone:Number,
    activity: String,
    description: String,
    location: String,
    details: String,
   
  })

  const incident = mongoose.model("poacher",ireport)
  module.exports = incident