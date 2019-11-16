// creating and connecting to a database

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;  //a promise is feedback mechanism on the status of the transaction
mongoose.connect("mongodb://localhost:27017/zoo_Hackathon"); 

//creating a schema for the database

const ireport = new mongoose.Schema({      
    name:String,
    phone:Number,
    activity: String,
    description: String,
    location: String,
    details: String,
   
  })

  const incident = mongoose.model("poacher",ireport)
  module.exports = incident