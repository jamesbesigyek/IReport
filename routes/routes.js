const express = require("express");
const app = express();
const router = express.Router()
const incident = require("../models/models")



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
        res.render("thanks") 
            newreport.save()
            
    .catch(err => {                         
      res.status(400).send("unable to save to database");   
    })
})

module.exports = router