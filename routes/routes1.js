const express = require("express");
const router = express.Router()
const post = require("../models/models")


router.get("/", (req,res)=>{
    res.render("register")
})


router.post("/",(req, res)=>{
    const newregister = new post (req.body)
            //"register" is the collection created for the database
            newregister.save()
            .then(item => {                         //success promise
                post.find().then(items => {        //
                res.render("list",{"users":items}) //"users:lists" renders list pug and passes to list items in users table
                })
            })
    .catch(err => {                         //failed to save promise
      res.status(400).send("unable to save to database");   // 400 is a status code for fail.
    })
})

module.exports = router





