// creating a router as an object of express

const express = require("express");
const router = express.Router()

//Importing the model from the models view --incident is a model collection of type Poacher

const incident = require("../models/models")

// setting up the API routes

router.get("/", (req,res)=>{
    res.render("index")
})

router.get("/admin", (req,res)=>{
    incident.find().then(items =>{
        console.log(items)

        res.render("admin" , {"users":items})
    })
    
})


router.post("/",(req, res)=>{
    const newreport = new incident (req.body)
        console.log(req.body)
        res.render("thanks",{reportingname:req.body.name}) 
        newreport.save()
            
            
    .catch(err => {                         
      res.status(400).send("unable to save to database");   
    })
})

module.exports = router